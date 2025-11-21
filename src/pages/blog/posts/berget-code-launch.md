---
title: 'Introducing Berget Code: AI-Powered Development Where Your Data Stays in Sweden'
description: 'Sovereign coding agent with the power of Cursor and GitHub Copilot, but with Swedish data protection'
date: '2025-11-21'
author: 'Andreas Lundmark'
email: 'andreas@berget.ai'
tags: ['berget-code', 'ai-coding', 'data-sovereignty', 'security', 'product-launch']
image: /images/update.png
imageAlt: 'Berget Code Launch'
---

We're thrilled to announce **Berget Code** — a sovereign AI coding agent that gives you the development speed of tools like Cursor and GitHub Copilot, without compromising on data security or control.

For too long, developers working with sensitive data have faced an impossible choice: **security or productivity**. Not anymore.

---

## 🎯 The Problem: Where Does Your Code Go Today?

Tools like Cursor, GitHub Copilot, Claude Code, and Lovable have revolutionized development speed. Developers build, test, maintain, and debug codebases faster than ever before.

But there's a catch:

### 🌍 Data Sent Abroad
Your code and sensitive company information leaves Sweden and ends up on servers in the US or other countries. Swedish law doesn't apply.

### 🤖 Training on Your Code
Many services use your code to train their AI models, which means your proprietary code can be reused and potentially exposed.

### ⚖️ CLOUD Act Risk
American companies can be forced to share your data with authorities, regardless of where the server is located. This creates significant compliance and security risks for Swedish organizations.

### Yet They're Incredibly Popular

The numbers don't lie:
- **92%** of professional developers use or plan to use AI assistants
- **1 million users** reached Cursor in just 16 months
- **40% faster** code delivery without compromising quality

This shows how valuable these tools are — which makes the security issues even more critical to solve.

---

## ✨ Our Solution: Berget Code

**Berget Code** combines the power of OpenCode — an open-source AI coding platform — with Berget AI's sovereign infrastructure. You get world-class AI assistance while your code stays exactly where it should: under your control, in Sweden.

### 🇸🇪 Data Stays in Sweden

All data is processed on Swedish servers. We're Swedish-owned and follow Swedish law, protecting you from the CLOUD Act and foreign surveillance laws.

### 🔒 No Training on Your Code

We save absolutely no information. Your code is never used to train models or improve our services. What you build stays yours, period.

### 💻 Runs Locally in Your Terminal

OpenCode runs directly on your computer. No cloud-based IDE, no code leaving your control. You maintain full sovereignty over your development environment.

### 🌟 Open Source Foundation

OpenCode is an open-source platform that integrates seamlessly with Berget AI. You get full transparency and control over your development environment while accessing world-leading AI assistance.

### 🔄 Direct Git Integration

Review all code before committing. Berget Code works with your existing Git workflows, giving you complete control over what changes are made to your codebase.

### 🚀 Powerful AI Models

Access to cutting-edge models like GLM-4.6 and DeepSeek-R1, all running on Swedish infrastructure with guaranteed data sovereignty.

---

## 🤖 Meet Our Specialized Agents

We've developed **six specialized agents** that together cover the entire development workflow. Each agent is optimized for specific tasks and can work together seamlessly:

### 1. **Fullstack Agent**
Router/coordinator agent for full-stack development with schema-driven architecture.

**Perfect for:**
- Coordinating between frontend, backend, and infrastructure
- Schema-driven development (database → OpenAPI → types)
- Monorepo management

**Example:**
```typescript
// Creates database schema, API routes, and frontend hooks
// in a coordinated, type-safe way
```

### 2. **Frontend Agent**
Builds Scandinavian, type-safe UIs with React, Tailwind, and Shadcn.

**Perfect for:**
- React component development
- Design system integration
- Accessibility-first UI development

**Example:**
```typescript
// Generates complete React components with proper typing,
// accessibility, and design system integration
export const UserCard = ({ user }: { user: User }) => {
  return (
    <Card className="hover:scale-105 transition-transform">
      <CardHeader>
        <Avatar>
          <AvatarImage src={user.avatar} />
          <AvatarFallback>{user.name[0]}</AvatarFallback>
        </Avatar>
        <CardTitle>{user.name}</CardTitle>
      </CardHeader>
    </Card>
  );
};
```

### 3. **Backend Agent**
Functional, modular Koa + TypeScript services with schema-first approach.

**Perfect for:**
- API development
- Database modeling
- Authentication and authorization
- Microservices architecture

**Example:**
```typescript
// Creates complete authentication service with
// JWT, validation, and error handling
export class AuthService {
  async login(email: string, password: string) {
    const user = await this.validateCredentials(email, password);
    const token = jwt.sign(
      { userId: user.id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );
    return { user, token };
  }
}
```

### 4. **DevOps Agent**
Declarative GitOps infrastructure with FluxCD, Kustomize, Helm, and operators.

**Perfect for:**
- Kubernetes deployments
- CI/CD pipelines
- Infrastructure as Code
- GitOps workflows

**Example:**
```yaml
# Generates complete Kubernetes manifests with
# best practices for production deployments
apiVersion: apps/v1
kind: Deployment
metadata:
  name: api-server
  namespace: production
spec:
  replicas: 3
  template:
    spec:
      containers:
      - name: api
        image: registry.berget.ai/api:v1.2.3
        resources:
          requests:
            memory: "256Mi"
            cpu: "250m"
```

### 5. **App Agent**
Expo + React Native applications with offline-first architecture.

**Perfect for:**
- Mobile app development
- Cross-platform applications
- Offline-first features
- Native integrations

**Example:**
```typescript
// Creates offline-first mobile screens with
// automatic sync when connection is restored
export const ProfileScreen = () => {
  const { user } = useOfflineUser();
  const { sync } = useSyncProfile();

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      if (state.isConnected) sync();
    });
    return unsubscribe;
  }, []);

  return (
    <ScrollView>
      <Avatar source={{ uri: user?.avatar }} size={120} />
      <Text>{user?.name}</Text>
    </ScrollView>
  );
};
```

### 6. **Security Agent**
Penetration testing, vulnerability scanning, and security audits.

**Perfect for:**
- Security audits
- Vulnerability detection
- OWASP compliance
- Penetration testing

**Example:**
```markdown
# Security Audit Report

## Critical Issues Found

### 1. SQL Injection Risk (CRITICAL)
**Location:** `src/services/user.service.ts:45`
**Issue:** Raw SQL query with user input

// VULNERABLE
const query = `SELECT * FROM users WHERE email = '${email}'`;

// FIX: Use parameterized queries
const query = db.prepare('SELECT * FROM users WHERE email = ?');
```

---

## 📊 Finally: Open Wins Over Closed

For the first time, open-source models are matching and exceeding closed, proprietary models across key benchmarks:

### Benchmark Performance

Our models (GLM-4.6, DeepSeek-R1) compete with or exceed GPT-4o and Claude across:

- **AIME 25**: Advanced mathematics and competition-level problem solving
- **GPQA**: Graduate-level scientific questions
- **LiveCodeBench v6**: Real-world coding challenges
- **SWE-bench Verified**: Real-world software engineering tasks
- **Terminal-Bench**: Command-line interaction and automation
- **τ²-Bench**: Tool-augmented reasoning and multi-step planning

This means you no longer need to choose between open-source sovereignty and cutting-edge performance. You get both.

---

## 🚀 Getting Started with Berget Code

Getting started takes less than 2 minutes:

### Step 1: Install OpenCode

```bash
npm install -g @opencode/cli
```

### Step 2: Initialize in Your Project

```bash
cd your-project
opencode init
```

### Step 3: Configure Berget AI

```bash
export BERGET_API_KEY=your_api_key
opencode config set provider berget
```

That's it! You're now ready to start coding with AI assistance while keeping your data in Sweden.

### Alternative: Use Cline in VS Code

If you prefer working in Visual Studio Code, you can use the **Cline extension**:

1. Install Cline from the VS Code marketplace
2. Configure it to use Berget AI as the provider
3. Enter your Berget API key
4. Start coding with AI assistance directly in your editor

Learn more in our [Cline setup guide](/blog/posts/cline-visual-studio-code-guide-en).

---

## 💡 Real-World Use Cases

### 1. Legacy Code Modernization

Use Berget Code to refactor and modernize legacy codebases:

```bash
opencode refactor --target=modern-typescript --framework=react
```

The agents analyze your code, suggest improvements, and can automatically apply modernization patterns while maintaining functionality.

### 2. Onboarding New Developers

New team members can ask questions about the codebase and get instant, contextual answers:

```bash
opencode explain "How does the authentication flow work?"
```

### 3. Code Review Automation

Run automated code reviews before committing:

```bash
opencode review --security --performance --best-practices
```

The Security agent scans for vulnerabilities, while other agents check for performance issues and adherence to best practices.

### 4. Documentation Generation

Generate comprehensive documentation automatically:

```bash
opencode document --format=markdown --include-examples
```

---

## 🔐 Security & Compliance

### GDPR Compliant

All processing happens on Swedish servers under Swedish jurisdiction, ensuring full GDPR compliance without exceptions or loopholes.

### SOC 2 Type II (Coming Soon)

We're working towards SOC 2 Type II certification to provide additional assurance to enterprise customers.

### No Data Retention

We don't log, store, or analyze your code. Every session is ephemeral and fully private.

### End-to-End Encryption

All communication between your local environment and our servers uses TLS 1.3 encryption.

### Regular Security Audits

Our infrastructure undergoes regular third-party security audits to ensure we maintain the highest security standards.

---

## 💳 Pricing

Berget Code is included with all Berget AI subscriptions:

### Free Tier
- €5 in monthly credits
- Access to all agents
- Community support
- Perfect for trying out Berget Code

### Professional - €50/month
- €50 in monthly credits
- Priority support
- Extended context windows
- Advanced features

### Enterprise - €500/month
- €500 in monthly credits
- Dedicated support
- Custom agent training
- SLA guarantees
- Volume discounts available

**All plans include:**
- Data sovereignty in Sweden
- No training on your code
- Unused credits roll over
- Access to all models and agents

[Start your free trial →](https://console.berget.ai)

---

## 🎯 Compared to Alternatives

| Feature | Berget Code | Cursor | GitHub Copilot | Claude Code |
|---------|-------------|--------|----------------|-------------|
| **Data Location** | 🇸🇪 Sweden | 🇺🇸 USA | 🇺🇸 USA | 🇺🇸 USA |
| **CLOUD Act Protected** | ✅ Yes | ❌ No | ❌ No | ❌ No |
| **No Training on Code** | ✅ Guaranteed | ⚠️ Opt-out | ⚠️ Opt-out | ⚠️ Depends |
| **Open Source** | ✅ Yes | ❌ No | ❌ No | ❌ No |
| **Runs Locally** | ✅ Yes | ⚠️ Partial | ❌ No | ❌ No |
| **Multi-Agent System** | ✅ 6 Agents | ❌ No | ❌ No | ⚠️ Limited |
| **Price (Professional)** | €50/month | $20/month | $10/month | $20/month |

---

## 📚 Documentation & Resources

- **[Full Documentation](https://docs.berget.ai/code)** - Complete guides and API reference
- **[GitHub Repository](https://github.com/opencode/opencode)** - OpenCode source code
- **[Example Projects](https://github.com/berget-ai/code-examples)** - Real-world examples
- **[Discord Community](https://discord.gg/berget-ai)** - Get help and share experiences
- **[Video Tutorials](https://www.youtube.com/@berget-ai)** - Step-by-step guides

---

## 🌟 What's Next

We're just getting started. Coming soon:

### Q1 2026
- **Custom Agent Training** - Train agents on your specific codebase patterns
- **IDE Plugins** - JetBrains, Neovim, and Emacs support
- **Pair Programming Mode** - Real-time collaboration with AI

### Q2 2026
- **Visual Workflow Builder** - Create custom agent workflows
- **Advanced Debugging** - AI-powered debugging assistance
- **Code Migration Tools** - Automated migration between frameworks

### Q3 2026
- **Enterprise Analytics** - Team productivity insights
- **Compliance Reporting** - Automated audit trails
- **Multi-Tenancy** - Organization-wide deployments

---

## 💙 Join the Movement

Berget Code represents more than just a tool — it's a statement that European developers shouldn't have to choose between cutting-edge AI assistance and data sovereignty.

We believe that:
- **Your code should stay under your control**
- **Privacy and productivity aren't mutually exclusive**
- **Open source and sovereignty can compete with big tech**
- **Swedish and European values matter in technology**

Ready to experience the future of AI-powered development?

**[Get Started with Berget Code →](https://code.berget.ai)**

---

## 🤝 We're Here to Help

Questions? We'd love to hear from you:

- **Email**: [support@berget.ai](mailto:support@berget.ai)
- **Discord**: [Join our community](https://discord.gg/berget-ai)
- **Enterprise**: [Book a demo](https://berget.ai/contact)

---

**Stay tuned for more updates, tutorials, and case studies as we continue to build the future of sovereign AI development.**

_Andreas Lundmark & Christian Landgren_  
_The Berget AI Team_
