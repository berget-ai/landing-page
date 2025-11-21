---
title: 'Introducing Our New Models: GLM-4.6 & DeepSeek-OCR'
description: 'Two powerful new models that raise the bar for performance, efficiency, and capability'
date: '2025-11-21'
author: 'Andreas Lundmark'
email: 'andreas@berget.ai'
tags: ['models', 'llm', 'ocr', 'technology']
image: /images/update.png
imageAlt: 'New AI Models at Berget AI'
---

We're excited to roll out **two powerful new models** that raise the bar for performance, efficiency, and capability at Berget AI.

## 🧠 GLM-4.6 — Smarter, Faster, and More Efficient

The long-awaited **GLM-4.6** is here! This multilingual powerhouse excels at reasoning, coding, and complex instruction following — delivering performance rivaling much larger models while being remarkably GPU-efficient. Perfect for production workloads, coding workflows, and anyone who wants cutting-edge intelligence without compromising on speed or cost.

We have tested GLM-4.6 extensively on our own coding, testing and ticketing workflows and are super impressed so far!

### Key Features

- **32B parameters** with performance comparable to models 2-3x larger
- **Multi-head Latent Attention (MLA)** for efficient context handling
- **Extended context length**: Native 32K tokens, expandable to 128K with YaRN
- **Exceptional code generation**: Outperforms Claude Sonnet 3.5 and GPT-4o on many coding benchmarks
- **Strong reasoning capabilities**: Perfect for agentic workflows and complex problem-solving
- **Multilingual support**: Excellent performance across European languages including Swedish

### Benchmarks

GLM-4.6 consistently outperforms larger commercial models on key benchmarks:

- **Code generation**: Superior to GPT-4o and Claude Sonnet 3.5 on HumanEval and MBPP
- **Function calling**: 69.6% on BFCL-v3 (matching GPT-4o-1120)
- **Instruction following**: 87.6% on IFEval (best in class)
- **Agent tasks**: 68.7% on TAU-Bench Retail (significantly ahead of competitors)

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

---

## 📄 DeepSeek-OCR — Precision Text Extraction, Reinvented

Meet **DeepSeek-OCR**, our newest model for extracting text from images and documents. It handles complex layouts, multiple languages, and even messy handwriting — making it ideal for **document automation, data capture, and AI-driven content workflows**.

### Key Features

- **Multimodal architecture**: Processes images and returns structured text
- **Context optical compression**: Efficient handling of visual information
- **Multilingual support**: Works seamlessly across many languages including Swedish
- **Complex layout understanding**: Tables, forms, multi-column documents
- **Multiple resolution modes**: From 512×512 (64 tokens) to 1280×1280 (400 tokens)
- **Markdown output**: Preserves document structure and formatting

### How It Works

Unlike traditional OCR endpoints, DeepSeek-OCR is accessed through our standard chat API. Simply send images as part of your message:

#### Python Example: Convert a Document Image to Markdown

```python
import requests
import base64
from pathlib import Path

def image_to_base64(image_path):
    """Convert image file to base64 string"""
    with open(image_path, 'rb') as image_file:
        return base64.b64encode(image_file.read()).decode('utf-8')

def ocr_document(image_path):
    """Extract text from document image using DeepSeek-OCR"""
    base64_image = image_to_base64(image_path)
    
    response = requests.post(
        'https://api.berget.ai/v1/chat/completions',
        headers={
            'Authorization': 'Bearer YOUR_API_KEY',
            'Content-Type': 'application/json'
        },
        json={
            'model': 'deepseek-ocr',
            'messages': [
                {
                    'role': 'user',
                    'content': [
                        {
                            'type': 'text',
                            'text': '<image>\\n<|grounding|>Convert the document to markdown.'
                        },
                        {
                            'type': 'image_url',
                            'image_url': {
                                'url': f'data:image/jpeg;base64,{base64_image}'
                            }
                        }
                    ]
                }
            ],
            'max_tokens': 4096
        }
    )
    
    return response.json()['choices'][0]['message']['content']

# Usage
markdown_text = ocr_document('invoice.jpg')
print(markdown_text)
```

#### TypeScript Example: Process PDF Pages as Images

```typescript
import fs from 'fs';
import { fromPath } from 'pdf2pic';

interface OCROptions {
  apiKey: string;
  model?: string;
  prompt?: string;
}

async function convertPdfToImages(pdfPath: string): Promise<string[]> {
  const converter = fromPath(pdfPath, {
    density: 300,
    format: 'jpeg',
    width: 2480,
    height: 3508
  });

  const pages = await converter.bulk(-1); // Convert all pages
  
  return pages.map(page => {
    const imageBuffer = fs.readFileSync(page.path);
    return imageBuffer.toString('base64');
  });
}

async function ocrImage(
  base64Image: string, 
  options: OCROptions
): Promise<string> {
  const { apiKey, model = 'deepseek-ocr', prompt = '<image>\\nFree OCR.' } = options;

  const response = await fetch('https://api.berget.ai/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      model,
      messages: [
        {
          role: 'user',
          content: [
            { type: 'text', text: prompt },
            {
              type: 'image_url',
              image_url: {
                url: `data:image/jpeg;base64,${base64Image}`
              }
            }
          ]
        }
      ],
      max_tokens: 8192
    })
  });

  const data = await response.json();
  return data.choices[0].message.content;
}

async function processPdfDocument(pdfPath: string, apiKey: string): Promise<string[]> {
  console.log(`Processing PDF: ${pdfPath}`);
  
  const images = await convertPdfToImages(pdfPath);
  const results: string[] = [];

  for (let i = 0; i < images.length; i++) {
    console.log(`Processing page ${i + 1}/${images.length}`);
    
    const text = await ocrImage(images[i], {
      apiKey,
      prompt: '<image>\\n<|grounding|>Convert the document to markdown.'
    });
    
    results.push(text);
  }

  return results;
}

// Usage
const apiKey = process.env.BERGET_API_KEY!;
const pdfPath = 'contract.pdf';

processPdfDocument(pdfPath, apiKey)
  .then(pages => {
    pages.forEach((text, index) => {
      console.log(`\n=== Page ${index + 1} ===\n`);
      console.log(text);
    });
  })
  .catch(console.error);
```

### Available Prompts for Different Use Cases

DeepSeek-OCR supports different prompts for various document types:

```python
# For documents with layout preservation
prompt = "<image>\\n<|grounding|>Convert the document to markdown."

# For general image OCR
prompt = "<image>\\n<|grounding|>OCR this image."

# For text-only extraction (no layout)
prompt = "<image>\\nFree OCR."

# For figures and diagrams
prompt = "<image>\\nParse the figure."

# For general image description
prompt = "<image>\\nDescribe this image in detail."
```

---

## 🔄 Streamlining Our Lineup

As we continue to evolve, we're saying goodbye to **DeepSeek R1 MAI** and **Magistral Small**. Both have been great performers, but their capabilities are now fully covered — and exceeded — by newer models like **GLM-4.6** and **GPT-OSS-120B**. Retiring them helps us focus GPU resources on the models our users love most.

### Migration Guide

If you're currently using these deprecated models, here's how to migrate:

**DeepSeek-R1** → **GLM-4.6** or **GPT-OSS-120B**
- For reasoning tasks: Use GLM-4.6 with higher temperature (0.7-0.9)
- For code generation: GLM-4.6 performs significantly better
- For general chat: Both GLM-4.6 and GPT-OSS-120B are excellent alternatives

**Magistral Small** → **GLM-4.6**
- GLM-4.6 offers superior performance across all tasks
- Similar inference speed with better quality
- Drop-in replacement for most use cases

**Devstral** → **GLM-4.6**
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
- `zai-org/GLM-4.6` - **NEW** Superior code generation and reasoning
- `mistralai/Mistral-Small-3.2-24B-Instruct-2506` - Efficient European language specialist
- `Qwen/Qwen3-32B` - Strong multilingual capabilities

#### 🔤 Embeddings & Rerankers
- `intfloat/multilingual-e5-large-instruct` - Best for RAG applications
- `intfloat/multilingual-e5-large` - General-purpose embeddings
- `BAAI/bge-reranker-v2-m3` - Precise result ranking

#### 🎙️ Speech & OCR
- `KBLab/kb-whisper-large` - Best-in-class Swedish speech-to-text
- `deepseek-ocr` - **NEW** Advanced document understanding
- **Docling OCR endpoint** - Traditional OCR for simple use cases

---

## 🚀 Getting Started

Ready to try GLM-4.6 and DeepSeek-OCR? 

1. **Sign up** at [console.berget.ai](https://console.berget.ai) and get 5€ in free credits
2. **Check the documentation** at [docs.berget.ai](https://docs.berget.ai)
3. **Join our community** on Discord for support and best practices

We can't wait to see what you build with these powerful new models!

---

*Questions about migrating from deprecated models or integrating the new ones? [Contact our support team](mailto:support@berget.ai) or reach out on [Discord](https://discord.gg/berget-ai).*
