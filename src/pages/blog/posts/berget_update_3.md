---
title: 'Berget AI Update #3 — November 2025'
description: 'Plattformsuppdatering: Teamhantering, nya modeller och förbättrad prestanda'
date: '2025-11-21'
author: 'Andreas Lundmark'
email: 'andreas@berget.ai'
tags: ['newsletter', 'models', 'team', 'platform']
image: /images/update.png
imageAlt: 'Berget AI Update'
---

Hej igen!

Vi är glada att kunna dela med oss av vår **största plattformsuppdatering hittills**. Denna release fokuserar på att göra det enklare att hantera organisationer, betalningar och AI-workflows — samtidigt som vi levererar kraftfullare modeller och bättre prestanda.

---

## 💼 Organisations- och faktureringhantering

Vi har byggt om hela hanteringen av organisationer och betalningar från grunden:

- **Teamhantering** – Bjud in kollegor och hantera teamåtkomst direkt från din workspace
- **Företagsprofiler** – Centraliserad hantering av organisationsinformation
- **Kreditkortsbetalningar & wallet-påfyllning** – Toppa enkelt upp ditt saldo eller betala direkt via Stripe
- **Organisationsgemensamma wallets** – Dela kreditsaldo över hela teamet
- **Realtidsövervakning av användning** – Transparent insikt i pågående konsumtion och wallet-saldo

Dessa uppdateringar ger dig betydligt mer kontroll och tydlighet över hur din organisation använder Berget AI.

---

## ⚡ Snabbare och snyggare console

Vi har gjort en omfattande städning och optimering:

- **Hastighetsoptimering** – Consolen är nu betydligt snabbare och mer responsiv
- **UI-förbättringar** – Ett mer polerat, konsekvent utseende som förbättrar navigation och användarvänlighet

---

## 🔗 Starkare modell-endpoints

Vi förstärker ryggraden i våra modell-API:er:

- **Mer robust tool calling** – Förbättrad tillförlitlighet för multi-step workflows och agentliknande uppgifter
- **Nya OCR-endpoints** – Inbyggt stöd för **DeepSeek-OCR** för snabb och precis textextraktion från dokument och bilder

---

## 💳 Betalningar & compliance

Vi har utökat och förbättrat vårt betalningssystem:

- **Förbättrad Stripe-integration** – Smidigare betalningar och bättre tillförlitlighet över valutor
- **Stöd för icke-svenska VAT-nummer** – Problemfri fakturering för internationella kunder

---

## 👥 Teamet växer - välkommen Hugo!

Vi är glada att välkomna **Hugo Björk** till teamet som fullstackutvecklare! Hugo kommer senast från Netlight och Silo AI och blir en viktig del av vårt API-team. Med Hugos erfarenhet av både produktutveckling och AI ökar vi takten i vår utveckling ytterligare.

---

## 🎁 Enklare att komma igång - ingen kreditkort krävs

Vi vill göra det så enkelt som möjligt att testa våra modeller. Därför behöver du nu **inte längre ha kreditkort** för att komma igång! 

- Registrera ett konto på [console.berget.ai](https://console.berget.ai)
- Välj **Free Trial** 
- Få 5€ i credits på köpet
- Börja bygga direkt

Så enkelt är det! Vi vill att du ska kunna utvärdera våra tjänster utan några hinder.

---

## 🤖 Nya kraftfulla modeller

Vi har uppdaterat vår modell-lineup med två spännande nya modeller som höjer ribban för både kodgenerering och bildtolkning:

**GLM-4.6** - En otroligt kraftfull modell med 32B parametrar som på många plan slår kommersiella modeller som Claude Sonnet 3.5 och GPT-4o, särskilt inom kodgenerering och reasoning. Perfekt för komplexa uppgifter, agentic workflows och avancerad kodgenerering.

**DeepSeek OCR** - En helt ny multimodal modell som kan tolka bilder och dokument väldigt snabbt och effektivt på många olika språk. Till skillnad från vår tidigare OCR-lösning når du denna via vårt vanliga chat API - dela bara upp en PDF i sidor och skicka dem som bilder. Vi kommer snart publicera en separat artikel med kodexempel och best practices för dessa modeller.

**Modeller som avvecklas:**
För att fortsätta leverera bästa möjliga prestanda kommer vi att avveckla följande modeller:
- **DeepSeek-R1** - ersätts av GLM-4.6 som har bättre reasoning-kapacitet
- **Devstral** - ersätts av GLM-4.6 för kodgenerering
- **Magistral** - överträffad av de nya modellerna

Dessa förändringar innebär bättre prestanda till lägre kostnad för er som kunder.

---

## 💻 Berget Code - ny produkt för utvecklare

Vi lanserar snart **Berget Code** - vår nya produkt som hjälper utvecklare att underhålla och bygga kod utan att information lämnar Sverige. Med Berget Code får du AI-assisterad utveckling med full kontroll över din data.

Kom igång enkelt genom:
```bash
npm i -g berget
berget code init
```

Läs mer på [code.berget.ai](https://code.berget.ai) - en dedikerad artikel om Berget Code kommer inom kort!

---

## ✨ En bättre Berget AI-upplevelse

Denna release fokuserar på **hastighet, kontroll och tydlighet** — oavsett om du hanterar ditt team, förfinar dina workflows eller bygger vidare på våra senaste modeller.

Som alltid, tack för att ni bygger med oss. Vi ser fram emot att se vad ni skapar härnäst.

**Håll ögonen öppna och fortsätt ge oss feedback!**

_Andreas Lundmark & Christian Landgren_
