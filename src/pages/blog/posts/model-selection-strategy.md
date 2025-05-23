---
title: 'Our Model Strategy: Balance Between Power and Precision'
description: 'How we select and combine AI models to maximize performance and sustainability'
date: '2025-05-23'
author: 'Andreas Lundmark'
email: 'andreas@berget.ai'
tags: ['ai-models', 'strategy', 'sustainability', 'technology']
image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80'
imageAlt: 'Server room with modern AI infrastructure'
---

In a world where AI models are becoming increasingly larger and more resource-intensive, we at Berget AI have chosen a different path. We don't believe that the future of AI is about having the largest models, but rather about creating the smartest combinations of specialized tools. This article explains our philosophy around model selection, the central concepts in modern AI, and why we have chosen the specific models that make up our infrastructure.

## Fundamental Concepts in Modern AI

Before diving into specific model choices, it's important to understand some key concepts that shape today's AI landscape:

**Reasoning models** are large language models optimized for understanding, reasoning, and solving complex problems. They function as "brains" in AI systems and can handle everything from conversations to problem-solving. These models often require significant computational resources but offer broad functionality.

**Embedding models** transform text, images, or other data into numerical vectors that capture semantic meaning. These vectors make it possible for computers to "understand" similarities between concepts. When you search for information and want to find relevant documents even if they don't contain the exact keywords you used, it's embedding models that make this possible.

**Rerankers** are specialized models that improve search results by reranking candidates based on relevance to the query. They function as a second filter after initial search and can dramatically improve precision in information retrieval.

**Multimodal models** can work with multiple types of data simultaneously – text, images, audio, and sometimes video. They can "see" images, "read" text, and understand the connections between different types of information, enabling more natural interaction.

**Fine-tuning** is the process of adapting a pre-trained model for specific tasks or domains through additional training on specialized data. This gives the model deeper understanding of specific areas without having to train an entirely new model from scratch.

## Our Position: Quality Over Quantity

At Berget AI, we've taken a clear position: We prioritize specialization, efficiency, and ethics over raw computational power. This means:

1. **We choose open models when possible**, as they give us and our customers greater control and transparency. We can adapt, improve, and ensure that the models function according to our values.

2. **We prioritize models that respect privacy and copyright**. We avoid models trained on data collected without clear consent or that violate copyright.

3. **We balance performance against resource usage**. A model that is 10% better but requires 200% more energy is often not a sustainable choice.

4. **We value cultural relevance for Swedish and Nordic contexts**. Models that understand our culture, language, and social systems deliver better results for our customers.

## Our Model Choices: A Story of Conscious Decisions

### Reasoning Models: The Brain of the System

For general problem-solving and conversation, we use several models with different strengths:

**Llama 3.3 70B** is our largest general model with exceptional ability to understand context and generate high-quality content. With its 70 billion parameters, it delivers top results for complex tasks, but also requires significant computational resources. We chose this model for its balance between performance and openness – unlike closed alternatives like GPT-4, we can adapt and optimize Llama 3.3 for our customers' specific needs.

**Mistral Small 24B** offers excellent reasoning with lower resource requirements. We chose this model especially for its strength in Swedish and Nordic languages. In many cases, it performs almost as well as much larger models, but with significantly lower energy consumption.

**Gemma 3** from Google shows impressive performance despite its relatively compact size. We implemented this model for applications where balance between performance and resource efficiency is critical. It's particularly valuable for customers with limited computational capacity who still need advanced AI functionality.

**MAI-DS-R1** is our most advanced multimodal model. We chose to implement this model because it builds on DeepSeek's base model but has been fine-tuned without the censorship present in the original version. This is a conscious ethical choice – we believe our customers need models that can discuss sensitive topics in a balanced way without built-in political limitations. MAI-DS-R1 is distributed across multiple GPUs for optimal performance and can work with text, images, and structured data simultaneously.

### Specialized Models: Experts in Their Fields

**DeepCoder 14B** is optimized for code generation and programming tasks. Our tests show that it often outperforms Llama 3.3 70B on code generation tasks despite being 5x smaller. This is a perfect example of how specialization can deliver better results than raw size.

**Devstral Small** combines code understanding with natural language. We chose this model for its ability to generate technical explanations and documentation – a niche where it performs exceptionally well.

### Modality-Specific Models: Extending AI's Senses

**KB-Whisper Large** is our customized version of Whisper for speech-to-text, developed in collaboration with the National Library of Sweden. We chose to invest in this specialization because standard speech recognition models often perform poorly in Swedish, especially when it comes to dialects and domain-specific terminology. Our tests show 25% higher precision for Swedish transcriptions compared to general models.

**Docling** specializes in document understanding and extraction of structured information from unstructured documents. We implemented this model after seeing how many of our customers in legal and public sectors struggled with automating document handling.

### Embedding and Retrieval Models: Finding the Right Information

**Multilingual E5** generates high-quality multilingual embeddings that capture semantic meaning across language boundaries. We chose this model over alternatives that only focus on English because many of our customers work in multilingual environments where Swedish, English, and other Nordic languages are used in parallel.

**BGE Reranker** improves search results by reranking candidates based on relevance. Our tests show that this model improves the relevance in information retrieval by up to 40% compared to embedding-based methods alone. This is crucial for RAG applications (Retrieval-Augmented Generation) where the quality of retrieved information directly affects the end result.

## The Advantages of Open Models

One of the most exciting developments in AI over the past year is how quickly open models have caught up to and in some cases surpassed closed alternatives. This is a direct result of the distributed innovation power of the open source community:

**Collective Improvement** – Thousands of developers and researchers worldwide work in parallel to improve open models. This collective intelligence often outperforms what individual organizations can achieve, regardless of their resources.

**Faster Iteration** – Open models undergo continuous improvement with much shorter cycles than closed alternatives. When an improvement is discovered, it can be quickly implemented and built upon by the entire community.

**Specialization and Adaptation** – Open models can be adapted for specific domains and languages, which is particularly valuable for Swedish and Nordic contexts where commercial actors often prioritize larger language regions.

**Transparency and Understanding** – With open models, we can understand exactly how they work, making it possible to identify and address issues such as bias or security vulnerabilities.

The difference in performance between open and closed models is now minimal for most use cases, while the benefits of openness, adaptability, and cost are significant.

## Model Chains: The Future of AI Architecture

One of our most important insights is that chains of specialized models often outperform individual large models. When a user asks a complex question that requires information retrieval and code generation, we activate a chain of models:

1. **Mistral Small 24B** analyzes the question and understands the user's intention
2. **Multilingual E5** generates embeddings to find relevant information
3. **BGE Reranker** improves the search results by prioritizing the most relevant documents
4. **DeepCoder 14B** generates code based on the retrieved information
5. **Mistral Small 24B** explains the code and provides recommendations

This chain delivers significantly better results than just sending the question to a single large model, while the total energy consumption is lower. It's this type of smart combinations that represents the future of AI – not constantly growing monolithic models.

## Our Evaluation Process: Speed and Thoroughness

To ensure that our model choices are based on facts rather than hype, we follow a structured evaluation process:

We evaluate models against both established benchmarks (MMLU, HumanEval, HELM) and domain-specific tests for Swedish conditions. We also conduct sustainability analyses where we calculate energy consumption, CO2 footprint, and cost per token.

When a new model is released, we prioritize testing and evaluating it quickly. We aim to conduct an initial evaluation within 48 hours after release. If the results are promising, we make a decision about implementation within a week and can have the model in production shortly thereafter. This speed has allowed us to be among the first to offer models like Llama 3.3, Gemma 3, and Mistral Small to our customers.

## Conclusion: A Balanced Approach for a Sustainable AI Future

In a world obsessed with ever-larger models, we believe in a more nuanced approach. By carefully selecting and combining specialized models, we can deliver superior results for specific tasks, minimize energy consumption and environmental impact, and maximize value for our customers.

This is not just a technical strategy but also an ethical stance. AI should be developed in a way that is sustainable, accessible, and optimized for real utility rather than impressive parameter numbers. By choosing models that respect privacy, minimize environmental impact, and understand Nordic contexts, we're building an AI infrastructure that is adapted to our customers' real needs – not to impress with size figures.

---

*Want to learn more about how our model strategy can help your organization? [Contact us](mailto:contact@berget.ai) for a discussion about your specific needs.*
