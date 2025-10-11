---
title: 'Så kör du Cline med Berget AI i Visual Studio Code'
description: 'En steg-för-steg guide för att konfigurera Cline med Berget AI:s modeller för AI-assisterad kodning'
date: '2025-01-11'
author: 'Andreas Lundmark'
email: 'andreas@berget.ai'
tags: ['utveckling', 'ai-kodning', 'visual-studio-code', 'cline', 'tutorial']
image: /images/cline-vscode.png
imageAlt: 'Cline extension i Visual Studio Code med Berget AI'
---

Cline är en kraftfull AI-kodningsassistent som kan hjälpa dig att skriva, refaktorera och förbättra din kod direkt i Visual Studio Code. I den här guiden visar vi hur du konfigurerar Cline för att använda Berget AI:s modeller, vilket ger dig tillgång till europeiska AI-modeller med hög prestanda för kodgenerering.

## Vad är Cline?

Cline (tidigare känd som Claude Dev) är en Visual Studio Code-extension som integrerar AI-assisterad kodning direkt i din utvecklingsmiljö. Till skillnad från andra AI-kodningsverktyg kan Cline:

- **Läsa och skriva filer** i ditt projekt
- **Köra terminalkommandon** för att testa och bygga kod
- **Förstå projektkontext** genom att analysera hela kodbasen
- **Utföra komplexa refaktoreringar** över flera filer
- **Felsöka och fixa problem** automatiskt

## Varför använda Berget AI med Cline?

Berget AI erbjuder flera fördelar för kodgenerering:

- **Europeisk AI-suveränitet**: Din kod och data stannar inom EU
- **Specialiserade kodmodeller**: GLM-4.6 och Magistral är optimerade för kodgenerering
- **Transparent prissättning**: Inga dolda kostnader eller överraskningar
- **Hög prestanda**: Snabba svar och låg latens från svenska datacenter

## Steg 1: Installera Cline i Visual Studio Code

Börja med att installera Cline-extensionen:

1. Öppna Visual Studio Code
2. Gå till Extensions-panelen (Ctrl+Shift+X)
3. Sök efter "Cline"
4. Klicka på "Install" för Cline-extensionen

![Installera Cline extension](/images/cline-install-screenshot.png)
*Installation av Cline-extensionen i VS Code*

## Steg 2: Skapa en API-nyckel från Berget AI

Du behöver en API-nyckel för att använda Berget AI:s modeller. Det finns två sätt att skapa en:

### Alternativ A: Via CLI-verktyget

Om du har Berget AI:s CLI installerat:

```bash
# Logga in på ditt konto
berget auth login

# Skapa en ny API-nyckel
berget api-keys create --name "Cline Development"
```

![Skapa API-nyckel via CLI](/images/berget-cli-api-key.png)
*Skapa API-nyckel med Berget CLI*

### Alternativ B: Via Console

1. Gå till [console.berget.ai](https://console.berget.ai)
2. Logga in på ditt konto
3. Navigera till "API Keys" i sidomenyn
4. Klicka på "Create New Key"
5. Ge nyckeln ett beskrivande namn (t.ex. "Cline VS Code")
6. Kopiera den genererade nyckeln

![Skapa API-nyckel i console](/images/console-api-key-creation.png)
*Skapa API-nyckel i Berget AI Console*

**Viktigt**: Spara din API-nyckel säkert - den visas bara en gång!

## Steg 3: Konfigurera Cline med Berget AI

Nu ska vi konfigurera Cline att använda Berget AI:s API:

1. Öppna Cline-panelen i VS Code (klicka på Cline-ikonen i sidopanelen)
2. Klicka på "Configure API" eller inställningsikonen
3. Välj "Custom API" som provider
4. Fyll i följande information:

**API Configuration:**
- **Base URL**: `https://api.berget.ai/v1`
- **API Key**: Din API-nyckel från steg 2
- **Model**: `glm-4.6` (rekommenderas för kodgenerering)

![Konfigurera Cline med Berget AI](/images/cline-berget-config.png)
*Konfiguration av Cline med Berget AI:s API*

## Steg 4: Välj rätt modell för kodgenerering

Berget AI erbjuder flera modeller som fungerar utmärkt med Cline:

### GLM-4.6 (Rekommenderas)
- **Bäst för**: Kodgenerering, refaktorering, felsökning
- **Styrkor**: Utmärkt förståelse för programmeringskontext
- **Språkstöd**: Stöder alla populära programmeringsspråk
- **Modell-ID**: `glm-4.6`

### Magistral Small
- **Bäst för**: Snabba kodförslag, mindre refaktoreringar
- **Styrkor**: Europeisk modell med god kodförståelse
- **Fördelar**: Snabbare svar, lägre kostnad
- **Modell-ID**: `magistral-small`

![Modellval i Cline](/images/cline-model-selection.png)
*Val av AI-modell i Cline*

## Steg 5: Testa din konfiguration

Låt oss testa att allt fungerar:

1. Öppna ett kodprojekt i VS Code
2. Öppna Cline-panelen
3. Skriv en enkel förfrågan, till exempel:
   ```
   Skapa en enkel HTTP-server i Node.js som svarar med "Hello World" på port 3000
   ```

4. Cline bör nu generera kod och eventuellt skapa filer åt dig

![Första test med Cline](/images/cline-first-test.png)
*Första test av Cline med Berget AI*

## Avancerade konfigurationer

### Anpassa modellparametrar

Du kan finjustera modellens beteende genom att lägga till parametrar i konfigurationen:

```json
{
  "baseUrl": "https://api.berget.ai/v1",
  "apiKey": "din-api-nyckel",
  "model": "glm-4.6",
  "temperature": 0.1,
  "maxTokens": 4096
}
```

### Projektspecifika inställningar

För olika projekt kan du vilja använda olika modeller:

- **Stora projekt**: GLM-4.6 för bättre kontextförståelse
- **Prototyping**: Magistral Small för snabbare iteration
- **Produktionskod**: GLM-4.6 med låg temperature (0.1) för mer deterministiska resultat

## Praktiska tips för att använda Cline effektivt

### 1. Var specifik i dina förfrågningar
```
❌ "Fixa den här funktionen"
✅ "Refaktorera getUserData-funktionen för att använda async/await istället för callbacks"
```

### 2. Ge kontext om ditt projekt
```
✅ "I det här React-projektet med TypeScript, skapa en ny komponent för användarprofilsida"
```

### 3. Använd Cline för hela arbetsflöden
```
✅ "Skapa en ny API-endpoint, lägg till tester, och uppdatera dokumentationen"
```

### 4. Låt Cline köra tester
Cline kan köra dina tester och fixa problem automatiskt:
```
✅ "Kör testerna och fixa eventuella fel som uppstår"
```

## Felsökning

### Problem: "API Key Invalid"
- Kontrollera att du kopierat hela API-nyckeln korrekt
- Verifiera att nyckeln inte har gått ut
- Testa nyckeln med ett enkelt curl-kommando:

```bash
curl -H "Authorization: Bearer din-api-nyckel" \
     -H "Content-Type: application/json" \
     https://api.berget.ai/v1/models
```

### Problem: "Model Not Found"
- Kontrollera att modellnamnet är korrekt stavat
- Använd `glm-4.6` eller `magistral-small`
- Verifiera att din API-nyckel har tillgång till modellen

### Problem: Långsamma svar
- Prova att byta till `magistral-small` för snabbare svar
- Minska `maxTokens` i konfigurationen
- Kontrollera din internetanslutning

![Felsökning av Cline](/images/cline-troubleshooting.png)
*Vanliga felsökningssteg för Cline*

## Säkerhet och bästa praxis

### Skydda din API-nyckel
- Lagra aldrig API-nycklar i kod som committas till Git
- Använd miljövariabler eller VS Code:s säkra lagring
- Rotera nycklar regelbundet

### Granska genererad kod
- Cline är kraftfull men inte felfri
- Granska alltid kod innan du kör den i produktion
- Använd dina vanliga kodgranskningsprocesser

### Begränsa åtkomst
- Skapa separata API-nycklar för olika projekt
- Använd nycklar med begränsade rättigheter när möjligt

## Slutsats

Med Cline och Berget AI får du en kraftfull AI-kodningsassistent som:

- **Respekterar din integritet** genom europeisk AI-suveränitet
- **Levererar hög kvalitet** med specialiserade kodmodeller
- **Integreras sömlöst** i din befintliga utvecklingsmiljö
- **Skalas med dina behov** från prototyper till produktion

GLM-4.6 är vår rekommendation för de flesta kodgenereringsuppgifter, medan Magistral Small är perfekt när du behöver snabba svar för mindre uppgifter.

Kom igång idag och upplev hur AI-assisterad kodning kan accelerera din utveckling!

---

*Behöver du hjälp med konfigurationen eller har frågor om våra modeller? [Kontakta oss](mailto:support@berget.ai) eller besök vår [dokumentation](https://docs.berget.ai).*
