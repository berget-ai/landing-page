---
title: 'How to Run Cline with Berget AI in Visual Studio Code'
description: 'A step-by-step guide to configure Cline with Berget AI models for AI-assisted coding'
date: '2025-01-11'
author: 'Andreas Lundmark'
email: 'andreas@berget.ai'
tags: ['development', 'ai-coding', 'visual-studio-code', 'cline', 'tutorial']
image: /images/cline-vscode.png
imageAlt: 'Cline extension in Visual Studio Code with Berget AI'
language: en
---

Cline is a powerful AI coding assistant that can help you write, refactor, and improve your code directly in Visual Studio Code. In this guide, we'll show you how to configure Cline to use Berget AI's models, giving you access to European AI models with high performance for code generation.

## What is Cline?

Cline (formerly known as Claude Dev) is a Visual Studio Code extension that integrates AI-assisted coding directly into your development environment. Unlike other AI coding tools, Cline can:

- **Read and write files** in your project
- **Run terminal commands** to test and build code
- **Understand project context** by analyzing the entire codebase
- **Perform complex refactoring** across multiple files
- **Debug and fix problems** automatically

## Why Use Berget AI with Cline?

Berget AI offers several advantages for code generation:

- **European AI sovereignty**: Your code and data stays within the EU
- **Specialized code models**: GLM-4.6 and Magistral are optimized for code generation
- **Transparent pricing**: No hidden costs or surprises
- **High performance**: Fast responses and low latency from Swedish data centers

## Step 1: Install Cline in Visual Studio Code

Start by installing the Cline extension:

1. Open Visual Studio Code
2. Go to the Extensions panel (Ctrl+Shift+X)
3. Search for "Cline"
4. Click "Install" for the Cline extension

![Install Cline extension](/images/cline-install-screenshot.png)
*Installing the Cline extension in VS Code*

## Step 2: Create an API Key from Berget AI

You need an API key to use Berget AI's models. There are two ways to create one:

### Option A: Via CLI Tool

If you have Berget AI's CLI installed:

```bash
# Log in to your account
berget auth login

# Create a new API key
berget api-keys create --name "Cline Development"
```

![Create API key via CLI](/images/berget-cli-api-key.png)
*Create API key with Berget CLI*

### Option B: Via Console

1. Go to [console.berget.ai](https://console.berget.ai)
2. Log in to your account
3. Navigate to "API Keys" in the sidebar
4. Click "Create New Key"
5. Give the key a descriptive name (e.g., "Cline VS Code")
6. Copy the generated key

![Create API key in console](/images/console-api-key-creation.png)
*Create API key in Berget AI Console*

**Important**: Save your API key securely - it's only shown once!

## Step 3: Configure Cline with Berget AI

Now let's configure Cline to use Berget AI's API:

1. Open the Cline panel in VS Code (click the Cline icon in the sidebar)
2. Click "Configure API" or the settings icon
3. Select "Custom API" as provider
4. Fill in the following information:

**API Configuration:**
- **Base URL**: `https://api.berget.ai/v1`
- **API Key**: Your API key from step 2
- **Model**: `glm-4.6` (recommended for code generation)

![Configure Cline with Berget AI](/images/cline-berget-config.png)
*Configuration of Cline with Berget AI's API*

## Step 4: Choose the Right Model for Code Generation

Berget AI offers several models that work excellently with Cline:

### GLM-4.6 (Recommended)
- **Best for**: Code generation, refactoring, debugging
- **Strengths**: Excellent understanding of programming context
- **Language support**: Supports all popular programming languages
- **Model ID**: `glm-4.6`

### Magistral Small
- **Best for**: Quick code suggestions, smaller refactoring
- **Strengths**: European model with good code understanding
- **Advantages**: Faster responses, lower cost
- **Model ID**: `magistral-small`

![Model selection in Cline](/images/cline-model-selection.png)
*AI model selection in Cline*

## Step 5: Test Your Configuration

Let's test that everything works:

1. Open a code project in VS Code
2. Open the Cline panel
3. Write a simple request, for example:
   ```
   Create a simple HTTP server in Node.js that responds with "Hello World" on port 3000
   ```

4. Cline should now generate code and possibly create files for you

![First test with Cline](/images/cline-first-test.png)
*First test of Cline with Berget AI*

## Advanced Configurations

### Customize Model Parameters

You can fine-tune the model's behavior by adding parameters to the configuration:

```json
{
  "baseUrl": "https://api.berget.ai/v1",
  "apiKey": "your-api-key",
  "model": "glm-4.6",
  "temperature": 0.1,
  "maxTokens": 4096
}
```

### Project-Specific Settings

For different projects, you might want to use different models:

- **Large projects**: GLM-4.6 for better context understanding
- **Prototyping**: Magistral Small for faster iteration
- **Production code**: GLM-4.6 with low temperature (0.1) for more deterministic results

## Practical Tips for Using Cline Effectively

### 1. Be Specific in Your Requests
```
❌ "Fix this function"
✅ "Refactor the getUserData function to use async/await instead of callbacks"
```

### 2. Give Context About Your Project
```
✅ "In this React project with TypeScript, create a new component for user profile page"
```

### 3. Use Cline for Entire Workflows
```
✅ "Create a new API endpoint, add tests, and update the documentation"
```

### 4. Let Cline Run Tests
Cline can run your tests and fix problems automatically:
```
✅ "Run the tests and fix any errors that occur"
```

## Troubleshooting

### Problem: "API Key Invalid"
- Check that you copied the entire API key correctly
- Verify that the key hasn't expired
- Test the key with a simple curl command:

```bash
curl -H "Authorization: Bearer your-api-key" \
     -H "Content-Type: application/json" \
     https://api.berget.ai/v1/models
```

### Problem: "Model Not Found"
- Check that the model name is spelled correctly
- Use `glm-4.6` or `magistral-small`
- Verify that your API key has access to the model

### Problem: Slow Responses
- Try switching to `magistral-small` for faster responses
- Reduce `maxTokens` in the configuration
- Check your internet connection

![Troubleshooting Cline](/images/cline-troubleshooting.png)
*Common troubleshooting steps for Cline*

## Security and Best Practices

### Protect Your API Key
- Never store API keys in code that's committed to Git
- Use environment variables or VS Code's secure storage
- Rotate keys regularly

### Review Generated Code
- Cline is powerful but not infallible
- Always review code before running it in production
- Use your usual code review processes

### Limit Access
- Create separate API keys for different projects
- Use keys with limited permissions when possible

## Conclusion

With Cline and Berget AI, you get a powerful AI coding assistant that:

- **Respects your privacy** through European AI sovereignty
- **Delivers high quality** with specialized code models
- **Integrates seamlessly** into your existing development environment
- **Scales with your needs** from prototypes to production

GLM-4.6 is our recommendation for most code generation tasks, while Magistral Small is perfect when you need fast responses for smaller tasks.

Get started today and experience how AI-assisted coding can accelerate your development!

---

*Need help with configuration or have questions about our models? [Contact us](mailto:support@berget.ai) or visit our [documentation](https://docs.berget.ai).*
