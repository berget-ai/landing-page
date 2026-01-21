---
title: 'Introducing GLM-4.7'
description: 'A powerful model that raise the bar for performance, efficiency, and capability'
date: '2026-01-21'
author: 'Andreas Lundmark'
email: 'andreas@berget.ai'
tags: ['models', 'llm']
image: /images/glm47-splash.png
imageAlt: 'New AI Models at Berget AI'
---

We're excited to roll out **GLM-4.7** that raise the bar for performance, efficiency, and capability at Berget AI.

## 🧠 GLM-4.7 — Smarter, Faster, and More Efficient

The long-awaited **GLM-4.7** is here! This multilingual powerhouse excels at reasoning, coding, and complex instruction following — delivering performance rivaling much larger models while being remarkably GPU-efficient. Perfect for production workloads, coding workflows, and anyone who wants cutting-edge intelligence without compromising on speed or cost.

We have tested GLM-4.7 extensively on our own coding, testing and ticketing workflows and are super impressed so far!

### Key Features

- **Exceptional code generation**: Outperforms GTP-5.2 and Opus 4.5 on Livebench Coding benchmark
- **Strong reasoning capabilities**: Perfect for agentic workflows and complex problem-solving - outperforming Gemini 3 Pro and Cloude Sonnet 4.5 in AA benchmarks
- **Multilingual support**: Excellent performance across European languages including Swedish
- **Extended context length**: Native 200 000 tokens context legnth

### Benchmarks

GLM-4.7 consistently outperforms open weitght and larger commercial models on key benchmarks:

![Benchmark](/images/glm47.png)

### Example Usage

Here's how to use GLM-4.6 for code generation:

```python
import requests

response = requests.post(
    'https://api.berget.ai/v1/chat/completions',
    headers={
        'Authorization': 'Bearer YOUR_API_KEY',
        'Content-Type': 'application/json'
    },
    json={
        'model': 'zai-org/GLM-4.6',
        'messages': [
            {
                'role': 'user',
                'content': 'Write a Python function that efficiently finds all prime numbers up to n using the Sieve of Eratosthenes algorithm. Include type hints and docstring.'
            }
        ],
        'temperature': 0.7,
        'max_tokens': 2000
    }
)

print(response.json()['choices'][0]['message']['content'])
```

And in TypeScript:

```typescript
const response = await fetch('https://api.berget.ai/v1/chat/completions', {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${process.env.BERGET_API_KEY}`,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    model: 'zai-org/GLM-4.6',
    messages: [
      {
        role: 'user',
        content: 'Create a TypeScript interface for a user profile with validation using Zod. Include nested objects for address and preferences.'
      }
    ],
    temperature: 0.7,
    max_tokens: 2000
  })
});

const data = await response.json();
console.log(data.choices[0].message.content);
```

## 🔄 Streamlining Our Lineup

As we continue to evolve, we're saying goodbye to **DeepSeek R1 MAI** and **Magistral Small**. Both have been great performers, but their capabilities are now fully covered — and exceeded — by newer models like **GLM-4.6** and **GPT-OSS-120B**. Retiring them helps us focus GPU resources on the models our users love most.

### Migration Guide

If you're currently using these deprecated models, here's how to migrate:

**DeepSeek-R1** → **GLM-4.7** or **GPT-OSS-120B**
- For reasoning tasks: Use GLM-4.7 with higher temperature (0.7-0.9)
- For code generation: GLM-4.7 performs significantly better
- For general chat: Both GLM-4.7 and GPT-OSS-120B are excellent alternatives

**Magistral Small** → **GLM-4.7**
- GLM-4.7 offers superior performance across all tasks
- Similar inference speed with better quality
- Drop-in replacement for most use cases

**Devstral** → **GLM-4.7**
- Enhanced code generation capabilities
- Better multilingual support
- Improved instruction following

---

## 💪 A Strong Core You Can Count On

Our **core lineup** remains as solid as ever — from **Llama 3.1-8B** and **Llama 3.3-70B** to **Mistral-Small-3.2-24B**, **GPT-OSS-120B**, and our best-in-class multilingual embedding and reranking models. These models ensure reliability, interoperability, and world-class results across every use case.

### Current Model Lineup at Berget AI

#### 🧠 Reasoning & Instruction Models
- `meta-llama/Llama-3.1-8B-Instruct` - Fast and efficient for simpler tasks
- `meta-llama/Llama-3.3-70B-Instruct` - Powerful flagship model
- `openai/gpt-oss-120b` - Advanced reasoning and generation
- `zai-org/GLM-4.7` - **NEW** Superior code generation and reasoning
- `mistralai/Mistral-Small-3.2-24B-Instruct-2506` - Efficient European language specialist
- `Qwen/Qwen3-32B` - Strong multilingual capabilities

#### 🔤 Embeddings & Rerankers
- `intfloat/multilingual-e5-large-instruct` - Best for RAG applications
- `intfloat/multilingual-e5-large` - General-purpose embeddings
- `BAAI/bge-reranker-v2-m3` - Precise result ranking

#### 🎙️ Speech & OCR
- `KBLab/kb-whisper-large` - Best-in-class Swedish speech-to-text
- **Docling OCR endpoint** - Traditional OCR for simple use cases

---

## 🚀 Getting Started

1. **Sign up** at [console.berget.ai](https://console.berget.ai) and get 5€ in free credits
2. **Check the documentation** at [docs.berget.ai](https://docs.berget.ai)

We can't wait to see what you build with these powerful new models!

---

*Questions about migrating from deprecated models or integrating the new ones? [Contact our support team](mailto:support@berget.ai)*
