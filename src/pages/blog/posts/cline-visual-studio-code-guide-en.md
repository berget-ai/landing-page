---
title: 'How to Run Cline with Berget AI in Visual Studio Code'
description: 'A step-by-step guide to configure Cline with Berget AI models for AI-assisted coding'
date: '2025-01-11'
author: 'Christian Landgren'
email: 'christian@berget.ai'
tags: ['development', 'ai-coding', 'visual-studio-code', 'cline', 'tutorial']
image: /images/cline.png
imageAlt: 'Cline AI coding assistant with robot pointing at code'
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

### The Problem with Foreign AI Coding Tools

Many developers today use tools like Claude Code, GitHub Copilot, or Visual Studio IntelliCode without considering where their code and business secrets end up. When you use these services, your code is sent to servers in the US or other countries, creating several problems:

- **Business secrets at risk**: Your proprietary code, API keys, and business logic are sent to foreign servers
- **GDPR violations**: Personal data in code may be processed outside the EU without adequate protection
- **Corporate policy violations**: Many organizations have policies prohibiting sensitive code from leaving the company
- **Legal uncertainty**: The Cloud Act and FISA give US authorities the right to request data from US companies
- **No control**: You don't know who has access to your code or how it's used to train future models

### Berget AI - The Swedish Alternative

Berget AI solves these problems by offering several advantages for code generation:

- **European AI sovereignty**: Your code and data stays within the EU under European legislation
- **Specialized code models**: GLM-4.6, Qwen 3.2 32B, and Magistral are optimized for code generation
- **Transparent pricing**: No hidden costs or surprises
- **High performance**: Fast responses and low latency from Swedish data centers
- **No training data**: Your code is never used to train models or improve the service
- **Full control**: You retain full control over your code and can be sure it never leaves Sweden

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

### GLM-4.6 (Recommended for code generation - State-of-the-art)
- **Best for**: Code generation, refactoring, debugging, complex programming tasks, agentic workflows
- **Strengths**: 357B parameters, outperforms Claude Sonnet 4 in many cases, excellent coding performance in Cline and other coding tools
- **Language support**: Supports all popular programming languages including Python, JavaScript, TypeScript, Go, Rust
- **Performance**: State-of-the-art code generation, 200K token context window, advanced reasoning capabilities
- **Special features**: Enhanced performance for visually polished frontend pages, stronger agent capabilities
- **Model ID**: `glm-4.6`

### Qwen 3.2 32B
- **Best for**: Complex code projects, architectural decisions, code review
- **Strengths**: Very strong code understanding, excellent at reasoning and problem-solving
- **Language support**: Broad language support with particularly strong performance on Python and JavaScript
- **Performance**: Top performance on code-related benchmarks, good balance of speed and quality
- **Model ID**: `qwen-3.2-32b`

### Magistral Small
- **Best for**: Quick code suggestions, smaller refactoring, prototyping
- **Strengths**: European model with good code understanding, fast responses
- **Advantages**: Lower latency, cost-effective, good for iterative development
- **Performance**: Solid performance for smaller coding tasks, optimized for speed
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

For different projects, you might want to use different models based on your needs:

- **Large, complex projects**: Qwen 3.2 32B for deep code understanding and architectural decisions
- **General code generation**: GLM-4.6 for balanced performance and quality
- **Rapid prototyping**: Magistral Small for fast iterations and cost-effectiveness
- **Production code**: GLM-4.6 or Qwen 3.2 32B with low temperature (0.1) for deterministic results
- **Code review**: Qwen 3.2 32B for in-depth analysis and improvement suggestions
- **Bug fixing**: GLM-4.6 for efficient debugging and problem-solving

### Performance Comparison

Based on benchmarks and real-world usage:

| Model | Code Quality | Speed | Cost | Best For |
|-------|--------------|-------|------|----------|
| Qwen 3.2 32B | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ | Complex projects |
| GLM-4.6 | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | General coding |
| Magistral Small | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | Quick tasks |

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
- Use `glm-4.6`, `qwen-3.2-32b` or `magistral-small`
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

GLM-4.6 is our top model for code generation with state-of-the-art performance that outperforms Claude Sonnet 4 in many cases. With its 357B parameters and 200K token context window, it's perfect for complex coding projects. Qwen 3.2 32B is an excellent alternative for deep code understanding, while Magistral Small is perfect when you need fast responses for smaller tasks.

Get started today and experience how AI-assisted coding can accelerate your development!

---

*Need help with configuration or have questions about our models? [Contact us](mailto:support@berget.ai) or visit our [documentation](https://docs.berget.ai).*
