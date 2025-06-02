---
title: 'Vår modellstrategi: Balans mellan kraft och precision'
description: 'Hur vi väljer och kombinerar AI-modeller för att maximera prestanda och hållbarhet'
date: '2025-05-23'
author: 'Andreas Lundmark'
email: 'andreas@berget.ai'
tags: ['ai-modeller', 'strategi', 'hållbarhet', 'teknik']
image: /images/ai-robot.png
imageAlt: 'Serverrum med modern AI-infrastruktur'
---

I en värld där AI-modeller blir allt större och mer resurskrävande, har vi på Berget AI valt en annan väg. Vi tror inte att framtidens AI handlar om att ha de största modellerna, utan om att skapa de smartaste kombinationerna av specialiserade verktyg. Denna artikel förklarar vår filosofi kring modellval, de centrala begreppen inom modern AI, och varför vi har valt just de modeller som utgör vår infrastruktur.

## Grundläggande begrepp inom modern AI

Innan vi går in på specifika modellval är det viktigt att förstå några centrala begrepp som formar dagens AI-landskap:

**Reasoning-modeller** är stora språkmodeller optimerade för att förstå, resonera och lösa komplexa problem. De fungerar som "hjärnor" i AI-system och kan hantera allt från konversationer till problemlösning. Dessa modeller kräver ofta betydande beräkningsresurser men erbjuder bred funktionalitet.

**Embedding-modeller** omvandlar text, bilder eller andra data till numeriska vektorer som fångar semantisk betydelse. Dessa vektorer gör det möjligt för datorer att "förstå" likheter mellan koncept. När du söker efter information och vill hitta relevanta dokument även om de inte innehåller exakt de sökord du använt, är det embedding-modeller som gör detta möjligt.

**Rerankers** är specialiserade modeller som förbättrar sökresultat genom att omranka kandidater baserat på relevans till frågan. De fungerar som ett andra filter efter initial sökning och kan dramatiskt förbättra precisionen i informationshämtning.

**Multimodala modeller** kan arbeta med flera typer av data samtidigt – text, bilder, ljud och ibland video. De kan "se" bilder, "läsa" text och förstå sambanden mellan olika informationstyper, vilket möjliggör mer naturlig interaktion.

**Fine-tuning** är processen att anpassa en förtränad modell för specifika uppgifter eller domäner genom ytterligare träning på specialiserad data. Detta ger modellen djupare förståelse för specifika områden utan att behöva träna en helt ny modell från grunden.

## Vårt ställningstagande: Kvalitet framför kvantitet

På Berget AI har vi tagit ett tydligt ställningstagande: Vi prioriterar specialisering, effektivitet och etik framför rå beräkningskraft. Detta innebär att:

1. **Vi väljer öppna modeller när det är möjligt**, eftersom de ger oss och våra kunder större kontroll och transparens. Vi kan anpassa, förbättra och säkerställa att modellerna fungerar enligt våra värderingar.

2. **Vi prioriterar modeller som respekterar integritet och upphovsrätt**. Vi väljer bort modeller som tränats på data som samlats in utan tydligt samtycke eller som kränker upphovsrätt.

3. **Vi balanserar prestanda mot resursanvändning**. En modell som är 10% bättre men kräver 200% mer energi är ofta inte ett hållbart val.

4. **Vi värdesätter kulturell relevans för svenska och nordiska sammanhang**. Modeller som förstår vår kultur, vårt språk och våra samhällssystem ger bättre resultat för våra kunder.

## Våra modellval: En berättelse om medvetna beslut

### Reasoning-modeller: Hjärnan i systemet

För generell problemlösning och konversation använder vi flera modeller med olika styrkor:

**Llama 3.3 70B** är vår största generella modell med exceptionell förmåga att förstå kontext och generera högkvalitativt innehåll. Med sina 70 miljarder parametrar levererar den toppresultat för komplexa uppgifter, men kräver också betydande beräkningsresurser. Vi har valt denna modell för dess balans mellan prestanda och öppenhet – till skillnad från stängda alternativ som GPT-4 kan vi anpassa och optimera Llama 3.3 för våra kunders specifika behov.

**Mistral Small 24B** erbjuder utmärkt resonemang med lägre resurskrav. Vi har valt denna modell särskilt för dess styrka på svenska och nordiska språk. I många fall presterar den nästan lika bra som mycket större modeller, men med betydligt lägre energiförbrukning.

**Gemma 3** från Google visar imponerande prestanda trots sin relativt kompakta storlek. Vi har implementerat denna modell för applikationer där balans mellan prestanda och resurseffektivitet är kritiskt. Den är särskilt värdefull för kunder med begränsad beräkningskapacitet som ändå behöver avancerad AI-funktionalitet.

**MAI-DS-R1** är vår mest avancerade multimodala modell. Vi valde att implementera denna modell eftersom den bygger på DeepSeeks grundmodell men har fine-tunats utan den censur som finns i originalversionen. Detta är ett medvetet etiskt val – vi anser att våra kunder behöver modeller som kan diskutera känsliga ämnen på ett balanserat sätt utan inbyggda politiska begränsningar. MAI-DS-R1 distribueras över flera GPUer för optimal prestanda och kan arbeta med text, bilder och strukturerad data samtidigt.

### Specialiserade modeller: Experter på sina områden

**DeepCoder 14B** är optimerad för kodgenerering och programmeringsuppgifter. Våra tester visar att den ofta överträffar Llama 3.3 70B på kodgenereringsuppgifter trots att den är 5x mindre. Detta är ett perfekt exempel på hur specialisering kan ge bättre resultat än rå storlek.

**Devstral Small** kombinerar kodförståelse med naturligt språk. Vi valde denna modell för dess förmåga att generera tekniska förklaringar och dokumentation – en nisch där den presterar exceptionellt väl.

### Modalitetsspecifika modeller: Utöka AI:ns sinnen

**KB-Whisper Large** är vår anpassade version av Whisper för tal-till-text, utvecklad i samarbete med Kungliga Biblioteket. Vi valde att investera i denna specialanpassning eftersom standardmodeller för taligenkänning ofta presterar dåligt på svenska, särskilt när det gäller dialekter och domänspecifik terminologi. Våra tester visar 25% högre precision för svenska transkriptioner jämfört med generella modeller.

**Docling** specialiserar sig på dokumentförståelse och extraktion av strukturerad information från ostrukturerade dokument. Vi implementerade denna modell efter att ha sett hur många av våra kunder inom juridik och offentlig sektor brottades med att automatisera dokumenthantering.

### Embedding- och retrieval-modeller: Hitta rätt information

**Multilingual E5** genererar högkvalitativa flerspråkiga embeddings som fångar semantisk betydelse över språkgränser. Vi valde denna modell framför alternativ som endast fokuserar på engelska eftersom många av våra kunder arbetar i flerspråkiga miljöer där svenska, engelska och andra nordiska språk används parallellt.

**BGE Reranker** förbättrar sökresultat genom att omranka kandidater baserat på relevans. Våra tester visar att denna modell förbättrar relevansen i informationshämtning med upp till 40% jämfört med enbart embedding-baserade metoder. Detta är avgörande för RAG-applikationer (Retrieval-Augmented Generation) där kvaliteten på hämtad information direkt påverkar slutresultatet.

## Fördelarna med öppna modeller

En av de mest spännande utvecklingarna inom AI under det senaste året är hur snabbt öppna modeller har kommit ikapp och i vissa fall gått om stängda alternativ. Detta är en direkt följd av den distribuerade innovationskraften i open source-communityn:

**Kollektiv förbättring** – Tusentals utvecklare och forskare världen över arbetar parallellt på att förbättra öppna modeller. Denna kollektiva intelligens överträffar ofta vad enskilda organisationer kan åstadkomma, oavsett deras resurser.

**Snabbare iteration** – Öppna modeller genomgår kontinuerlig förbättring med betydligt kortare cykler än stängda alternativ. När en förbättring upptäcks kan den snabbt implementeras och byggas vidare på av hela communityn.

**Specialisering och anpassning** – Öppna modeller kan anpassas för specifika domäner och språk, vilket är särskilt värdefullt för svenska och nordiska sammanhang där kommersiella aktörer ofta prioriterar större språkområden.

**Transparens och förståelse** – Med öppna modeller kan vi förstå exakt hur de fungerar, vilket gör det möjligt att identifiera och åtgärda problem som bias eller säkerhetsluckor.

Skillnaden i prestanda mellan öppna och stängda modeller är idag minimal för de flesta användningsområden, medan fördelarna med öppenhet, anpassningsbarhet och kostnad är betydande.

## Modellkedjor: Framtidens AI-arkitektur

En av våra viktigaste insikter är att kedjor av specialiserade modeller ofta överträffar enskilda stora modeller. När en användare ställer en komplex fråga som kräver informationshämtning och kodgenerering, aktiverar vi en kedja av modeller:

1. **Mistral Small 24B** analyserar frågan och förstår användarens intention
2. **Multilingual E5** genererar embeddings för att hitta relevant information
3. **BGE Reranker** förbättrar sökresultaten genom att prioritera de mest relevanta dokumenten
4. **DeepCoder 14B** genererar kod baserat på den hämtade informationen
5. **Mistral Small 24B** förklarar koden och ger rekommendationer

Denna kedja ger betydligt bättre resultat än att bara skicka frågan till en enda stor modell, samtidigt som den totala energiförbrukningen är lägre. Det är denna typ av smarta kombinationer som representerar framtidens AI – inte ständigt växande monolitiska modeller.

## Vår utvärderingsprocess: Snabbhet och noggrannhet

För att säkerställa att våra modellval baseras på fakta snarare än hype, följer vi en strukturerad utvärderingsprocess:

Vi utvärderar modeller mot både etablerade benchmarks (MMLU, HumanEval, HELM) och domänspecifika tester för svenska förhållanden. Vi genomför också hållbarhetsanalyser där vi beräknar energiförbrukning, CO2-avtryck och kostnad per token.

När en ny modell släpps prioriterar vi att snabbt testa och utvärdera den. Vi strävar efter att genomföra en initial utvärdering inom 48 timmar efter release. Om resultaten är lovande, fattar vi beslut om implementation inom en vecka och kan ha modellen i produktion kort därefter. Denna snabbhet har gjort att vi kunnat vara bland de första att erbjuda modeller som Llama 3.3, Gemma 3 och Mistral Small till våra kunder.

## Slutsats: En balanserad approach för en hållbar AI-framtid

I en värld besatt av allt större modeller, tror vi på en mer nyanserad approach. Genom att noggrant välja och kombinera specialiserade modeller kan vi leverera överlägsna resultat för specifika uppgifter, minimera energiförbrukning och miljöpåverkan, och maximera värdet för våra kunder.

Detta är inte bara en teknisk strategi utan också ett etiskt ställningstagande. AI bör utvecklas på ett sätt som är hållbart, tillgängligt och optimerat för verklig nytta snarare än imponerande parametersiffror. Genom att välja modeller som respekterar integritet, minimerar miljöpåverkan och förstår nordiska sammanhang, bygger vi en AI-infrastruktur som är anpassad för våra kunders verkliga behov – inte för att imponera med storlekssiffror.

---

*Vill du veta mer om hur vår modellstrategi kan hjälpa din organisation? [Kontakta oss](mailto:contact@berget.ai) för en diskussion om dina specifika behov.*
