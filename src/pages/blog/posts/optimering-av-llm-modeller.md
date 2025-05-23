---
title: 'Bakom kulisserna: Så optimerar vi våra AI-modeller'
description: 'En djupdykning i hur vi balanserar prestanda och minnesanvändning för att få ut maximalt av vår AMD MI300x-infrastruktur'
date: '2025-05-23'
author: 'Christian Landgren'
email: 'christian@berget.ai'
tags: ['teknik', 'infrastruktur', 'optimering', 'llm']
image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80'
imageAlt: 'Serverrack med AMD MI300x-acceleratorer i ett modernt datacenter'
---

När vi på Berget AI bygger vår infrastruktur för att köra stora språkmodeller (LLMs) står vi inför en intressant utmaning: Hur får vi plats med så många kraftfulla modeller som möjligt på vår hårdvara, samtidigt som vi säkerställer snabb responstid och hög tillgänglighet? I denna artikel delar vi med oss av våra erfarenheter och tekniker för att optimera minnesanvändningen för våra AI-modeller.

![GPU-konfiguration för våra modeller](/images/gpu-configurator.png)
*Vår nuvarande GPU-konfiguration med modellplacering och minnesanvändning*

## Vår hårdvaruinfrastruktur: AMD MI300x

Kärnan i vår infrastruktur är AMD:s senaste accelerator för AI-arbetsbelastningar, MI300x. Dessa kraftfulla GPU:er har flera fördelar jämfört med traditionella alternativ:

- **Enormt minne**: Varje MI300x har 192 GB HBM3-minne, vilket är avgörande för att köra stora modeller
- **Hög bandbredd**: Upp till 5.3 TB/s minnesbandbredd möjliggör snabb dataåtkomst
- **Energieffektivitet**: Bättre prestanda per watt jämfört med många konkurrerande lösningar
- **ROCm-plattformen**: Öppen källkod som ger oss flexibilitet att anpassa och optimera

Denna hårdvara ger oss möjlighet att köra flera stora modeller parallellt, men det kräver noggrann optimering för att utnyttja resurserna effektivt. Vi har för närvarande åtta MI300x-acceleratorer i vår produktionsmiljö, vilket ger oss totalt 1,5 TB GPU-minne att arbeta med.

## Utmaningen: Balansera flera modeller på begränsad hårdvara

Trots det imponerande minnet på våra MI300x-acceleratorer, räcker 192 GB inte alltid till för att köra de största modellerna med full precision och maximal kontextlängd. Dessutom vill vi köra flera modeller parallellt för att erbjuda våra kunder en mångfald av specialiserade verktyg.

Här är några av de utmaningar vi står inför:

1. **Varierande modellstorlekar**: Från 8 miljarder parametrar (Llama-3.1-8B) till 70 miljarder (Llama-3.3-70B)
2. **Olika användningsområden**: Vissa modeller behöver hantera långa kontexter, andra prioriterar snabb inferens
3. **Varierande belastning**: Vissa modeller används intensivt, andra mer sporadiskt
4. **Specialiserade behov**: Embedding-modeller, rerankers och multimodala modeller har olika krav

## Nyckelfaktorer för minnesoptimering

Genom omfattande tester har vi identifierat flera nyckelfaktorer som påverkar minnesanvändningen och prestandan för våra modeller:

### 1. GPU Memory Utilization

En av de viktigaste parametrarna vi justerar är `--gpu-memory-utilization`, som styr hur stor del av GPU-minnet som vLLM (vår inferensmotor) får använda. Detta är inte en exakt vetenskap, utan snarare en balansakt:

- **För lågt värde**: Slösar med tillgängligt minne, begränsar modellens prestanda
- **För högt värde**: Riskerar "out of memory"-fel när belastningen ökar

Vi har utvecklat en strategi där vi anpassar detta värde baserat på modellens storlek:

- **Små modeller** (under 10B parametrar): 0.5 (50%)
- **Medelstora modeller** (10-30B parametrar): 0.6-0.7 (60-70%)
- **Stora modeller** (över 30B parametrar): 0.8-0.9 (80-90%)

Ett praktiskt exempel är vår Llama-3.1-8B-modell, som vi kör med `--gpu-memory-utilization 0.5`. Detta ger oss tillräckligt med prestanda samtidigt som vi frigör minne för andra processer på samma GPU, som vår Whisper-modell för taligenkänning.

### 2. Kontextlängd (max-model-len)

Kontextlängden – hur mycket text modellen kan "komma ihåg" under en konversation – har en direkt påverkan på minnesanvändningen. Längre kontext kräver mer minne för KV-cachen (key-value cache).

Vi har upptäckt att många användningsfall faktiskt inte kräver extremt långa kontexter. Genom att anpassa kontextlängden efter faktiska behov kan vi spara betydande mängder minne:

- **Devstral-Small**: Vi ökade från 32768 till 80000 tokens för att hantera kodgenerering med långa kontexter
- **Qwen3-32B**: Vi begränsade till 8192 tokens för att balansera prestanda och minnesanvändning
- **Llama-3.1-8B**: Ingen explicit begränsning behövs för denna mindre modell

Ett intressant fall var när vi fick felet "The model's max seq len is larger than the maximum number of tokens that can be stored in KV cache". Genom att justera både GPU-minnesanvändningen och max-model-len kunde vi lösa problemet utan att kompromissa med användarupplevelsen.

### 3. Tensor Parallelism

För mycket stora modeller använder vi tensor parallelism – att dela upp modellen över flera GPU:er. Detta är särskilt användbart för modeller som är för stora för att passa i minnet på en enda GPU.

Vår Llama-3.3-70B-modell är ett gränsfall. Med 70 miljarder parametrar tar den upp nästan hela minnet på en MI300x (97% användning), men vi kan fortfarande köra den på en enda GPU. För ännu större modeller, som Qwen3-235B (som vi för närvarande har avstängd), skulle vi behöva använda tensor parallelism över flera GPU:er.

### 4. Datatyp och kvantisering

Valet av datatyp har en betydande inverkan på minnesanvändningen:

- **float32**: Högsta precision, men dubbelt så minneskrävande som float16
- **float16/bfloat16**: God balans mellan precision och minnesanvändning
- **int8/int4**: Kraftigt reducerad minnesanvändning genom kvantisering

Vi använder bfloat16 för de flesta av våra modeller, inklusive Gemma-3, eftersom det ger en bra balans mellan precision och minneseffektivitet. För vår största modell, MAI-DS-R1, använder vi kvantisering (GGUF-format) för att få den att passa på våra GPU:er.

## Praktiska exempel: Hur vi balanserar modeller på våra GPU:er

Låt oss titta på några konkreta exempel på hur vi har optimerat vår modellplacering:

### GPU 0: Balansera språkmodell med taligenkänning

På GPU 0 kör vi både vår Llama-3.1-8B-modell och KB-Whisper-Large för taligenkänning. Genom att justera GPU-minnesanvändningen för Llama till 0.5 (50%) frigör vi tillräckligt med minne för Whisper-modellen, som kräver cirka 1.5 GB.

Detta är ett bra exempel på hur vi kombinerar modeller med olika användningsområden på samma GPU för att maximera resursanvändningen.

### GPU 1: Kodgenerering och utvecklarverktyg

På GPU 1 kör vi både DeepCoder-14B och Devstral-Small, två modeller optimerade för kodgenerering. Genom att noggrant justera minnesparametrarna kan dessa modeller samexistera på samma GPU:

- **DeepCoder-14B**: `--gpu-memory-utilization 0.5`
- **Devstral-Small**: `--gpu-memory-utilization 0.5 --max-model-len 80000`

Denna kombination ger oss redundans för kodgenereringsuppgifter och möjliggör A/B-testning av olika modeller för samma användningsfall.

### GPU 2 och 3: Dedikerade för stora modeller

Vissa modeller är så stora att de behöver en dedikerad GPU. Vår Llama-3.3-70B-modell använder 97% av minnet på GPU 2, vilket inte lämnar utrymme för andra modeller.

På GPU 3 kör vi flera mindre men viktiga modeller:
- **Mistral-Small-24B**: ~24 GB
- **Docling**: ~1 GB
- **BGE-Reranker**: ~3 GB
- **Multilingual-E5**: ~1.5 GB

Genom att kombinera dessa modeller på en GPU kan vi erbjuda en komplett RAG-pipeline (Retrieval-Augmented Generation) på en enda GPU.

### GPU 4, 5 och 6: Distribuerad multimodal modell

Vår största modell, MAI-DS-R1, är så omfattande att den distribueras över tre GPU:er (4, 5 och 6) med tensor parallelism. Denna multimodala modell kan hantera både text och bilder och kräver betydande beräkningsresurser.

### GPU 7: Framtidssäkring med Gemma-3

På GPU 7 kör vi Googles Gemma-3-modell med dtype bfloat16 för optimal prestanda. Denna GPU har vi delvis reserverat för att testa nya modeller innan de går i produktion.

## Lärdomar och bästa praxis

Efter månader av optimering och finjustering har vi samlat på oss värdefulla insikter:

1. **Börja konservativt**: Starta med lägre GPU-minnesanvändning och öka gradvis
2. **Övervaka kontinuerligt**: Använd verktyg som `rocm-smi` för att övervaka minnesanvändning i realtid
3. **Testa under belastning**: Minnesanvändningen kan öka dramatiskt under hög belastning
4. **Dokumentera allt**: Håll noggrann dokumentation över vilka parametrar som fungerar för varje modell
5. **Planera för redundans**: Ha backup-modeller för kritiska funktioner

## Framtida optimeringar

Vi fortsätter att utforska nya sätt att optimera vår infrastruktur:

1. **Automatisk skalning**: Dynamiskt allokera GPU-resurser baserat på efterfrågan
2. **Adaptiv kvantisering**: Justera precisionen baserat på uppgiftens komplexitet
3. **Kontinuerlig modellrotation**: Ladda och avlasta modeller baserat på användningsmönster
4. **Specialiserad hårdvara**: Utforska nya acceleratorer för specifika arbetsbelastningar

## Slutsats: Konsten att balansera

Att optimera minnesanvändningen för stora språkmodeller är lika mycket konst som vetenskap. Det handlar om att hitta den perfekta balansen mellan prestanda, tillgänglighet och resurseffektivitet.

Med vår AMD MI300x-infrastruktur har vi lyckats skapa en flexibel och kraftfull plattform som kan hantera allt från små specialiserade modeller till enorma multimodala system. Genom noggrann optimering av minnesparametrar kan vi erbjuda våra kunder en mångfald av AI-modeller utan att kompromissa med prestanda eller tillförlitlighet.

Vår resa med minnesoptimering fortsätter, och vi ser fram emot att dela fler insikter när vi fortsätter att utforska gränserna för vad som är möjligt med modern AI-infrastruktur.

---

*Vill du veta mer om vår tekniska infrastruktur eller hur vi kan hjälpa ditt företag med AI-implementationer? [Kontakta oss](mailto:contact@berget.ai) för en diskussion.*
