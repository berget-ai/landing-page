---
title: 'Berget AI Update #3 — November 2025'
description: 'Platform update: Team management, new models, and performance improvements'
date: '2025-11-21'
author: 'Andreas Lundmark'
email: 'andreas@berget.ai'
tags: ['newsletter', 'models', 'team', 'platform']
image: /images/update.png
imageAlt: 'Berget AI Update'
---

Hi again!

We're excited to share our **biggest platform update yet**. This release focuses on making it easier to manage organizations, payments, and AI workflows — while delivering more powerful models and better performance.

---

## 💼 Subscription Management — Simpler, Smarter, Team-Ready

We've completely overhauled how you manage your organization and billing:

- **Team management** – Invite colleagues and manage team access directly from your workspace
- **Company profiles** – Keep your organization information centralized and up to date
- **Credit card payments & wallet refill** – Easily top up your balance or pay directly via Stripe
- **Organization-wide wallets** – Share credit balances across your entire team
- **Real-time usage visibility** – Track ongoing consumption and wallet balance with transparent insights

These updates give you more control and clarity over how your organization uses Berget AI.

---

## ⚡ Console Clean-Up & Performance Boost

We've done a major clean-up under the hood:

- **Speed optimization** – The console is now significantly faster and more responsive
- **UI clean-up** – A more polished, consistent look and feel that improves navigation and usability

---

## 🔗 Model Endpoints — More Power, More Reliability

We're strengthening the backbone of our model APIs:

- **More robust tool calling** – Improved reliability for multi-step workflows and agent-like tasks
- **New OCR endpoints** – Built-in support for **DeepSeek-OCR** for fast and accurate document and image text extraction

---

## 💳 Payments & Compliance

We've expanded and refined our payment system:

- **Improved Stripe integration** – Smoother payments and better reliability across currencies
- **Support for non-Swedish VAT numbers** – Seamless billing for international customers

---

## 👥 Team Growth — Welcome Hugo!

We're excited to welcome **Hugo Björk** to the team as a fullstack developer! Hugo joins us from Netlight and Silo AI and will be a key part of our API team. With Hugo's experience in both product development and AI, we're accelerating our development pace even further.

---

## 🎁 Easier to Get Started — No Credit Card Required

We want to make it as easy as possible to try our models. That's why you **no longer need a credit card** to get started! 

- Register an account at [console.berget.ai](https://console.berget.ai)
- Choose **Free Trial** 
- Get 5€ in credits
- Start building immediately

It's that simple! We want you to be able to evaluate our services without any barriers.

---

## 🤖 New Powerful Models

We've updated our model lineup with two exciting new models that raise the bar for both code generation and image understanding:

**GLM-4.6** - An incredibly powerful model with 32B parameters that outperforms commercial models like Claude Sonnet 3.5 and GPT-4o in many areas, especially in code generation and reasoning. Perfect for complex tasks, agentic workflows, and advanced code generation.

**DeepSeek OCR** - A brand new multimodal model that can interpret images and documents very quickly and efficiently in many different languages. Unlike our previous OCR solution, you access this through our regular chat API - just split a PDF into pages and send them as images. We'll soon publish a separate article with code examples and best practices for these models.

**Models being deprecated:**
To continue delivering the best possible performance, we will deprecate the following models:
- **DeepSeek-R1** - replaced by GLM-4.6 which has better reasoning capabilities
- **Devstral** - replaced by GLM-4.6 for code generation
- **Magistral** - outperformed by the new models

These changes mean better performance at lower cost for you as customers.

---

## 💻 Berget Code — New Product for Developers

We're soon launching **Berget Code** - our new product that helps developers maintain and build code without information leaving Sweden. With Berget Code, you get AI-assisted development with full control over your data.

Get started easily:
```bash
npm i -g berget
berget code init
```

Learn more at [code.berget.ai](https://code.berget.ai) - a dedicated article about Berget Code is coming soon!

---

## ✨ A Better Berget AI Experience

This release focuses on **speed, control, and clarity** — whether you're managing your team, refining your workflows, or building on top of our latest models.

As always, thank you for building with us. We can't wait to see what you create next.

**Stay tuned and keep the feedback coming!**

_Andreas Lundmark & Christian Landgren_
