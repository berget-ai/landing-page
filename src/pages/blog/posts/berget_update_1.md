---
title: Berget AI update #1
description: We have been cooking new things!
date: 2025-05-19
author: 'Andreas Lundmark'
email: 'andreas@berget.ai'
tags:
  - models
  - features
image: /images/update.png
imageAlt: Berget AI Logo
---

Hi there!

We just wanted to give you a short update on what is going on at Berget AI.

First of all, we have gotten massive support and interest from our launch - from across start-ups, established SaaS players, channel partners and not the least from the public sector. We are overwhelmed and more motivated than ever!

Over the past weeks - we have shipped a number of improvements to the service. We made a conscious choice to launch while building the products and will keep on shipping. Thank you for your feedback and support so far - we are eager do deliver on your (and our own) expectations. 

#### **Fixes over the past week**

- Some of the updates to the service 
- Serverless API now supports streaming responses
- Added embeddings and reranker end-points
- Updated model view and model status indicator
- Updated and improved API documentation with examples 
- Access to support / forum from the console
- Added a responsible disclosure so that incidents can be safely reported
- A number of other minor fixes that you have been so kind to help us uncover
- Improved usage logging and billing integration - for now usage is not billed, but we will start charging in due time :)

#### **Model line up**

On the model side - we have worked hard to fit as many of the models we would like to serve into our GPUs. That has led to some downtime - we are now aiming to go with the below set of models for the foreseeable future 

- Deepseek R1 - MAI-DS version that is finetuned to remove censorship - very powerful reasoning model for chats and agentic workflows
- Llama 3.3 70B Instruct - versatile instruct model for complex tasks
- Llama 3.1 8B Instruct - competent model for simpler tasks, small and fast
- Mistral Small 3.1 (0325) - Very powerful mid sized model with 24B parameters, good at European languages and values
- Gemma3 27B it - very competent and mutlilingual instruct model 
- Agentica DeepCoder 14B Preview - a very promising and competent model specialized in coding tasks
- OCR API - converts documents from PDF, Word, PPT into markdown files for further use in your LLM chains
- Embedding and Reranker models to enable indexing and retrieval for RAG and agentic applications

Over the coming weeks we aim to add one or two - especially speech-to-text with KBWhisper.

#### **What is next**

Next on our agenda is to continue to ship improvements to our service, model lineup and performance

We are also getting a lot of interest for our kubernetes service and have started to onboard customers onto an early version - please let us know if you should be interested!

_Keep the feedback coming!_