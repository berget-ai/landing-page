---
title: 'Our second data center is live — here's what it took'
description: 'A deep dive into how we balance performance and memory usage to get the most out of our AMD MI300x infrastructure'
date: '2026-03-02'
author: 'Marcus Olsson'
email: 'marcus@berget.ai'
tags: ['technology', 'infrastructure']
image: /images/founders-rack-selfie.png
imageAlt: 'Server rack with AMD MI300x accelerators in a modern data center'
---

It's been a busy week, but we're excited to finally share what we've been up to.

We've successfully launched our second data center in Southern Stockholm. We've moved all production traffic to the new site while we upgrade the network infrastructure at our original location — after which both will run simultaneously. And with it, two things are now true that weren't before:

**Berget owns its own IP address space.** Previously, our IP prefixes belonged to a third party. That meant our network reachability depended partly on someone else's operations. That dependency is gone. We now announce our own prefixes from infrastructure we control.

**Dedicated fiber into the new site.** We're no longer sharing bandwidth with other tenants. The capacity belongs to us, regardless of what else is happening on the network.

It's the difference between owning your infrastructure and renting it from someone who does.

## What it actually took

If you've ever built your own PC, you know the time and effort that goes into researching every component to make sure it'll all fit together in the end. And even then, you probably had to run to the electronic store next door because you realized the cables were too short, or that you were missing the right tool.

Well, turns out building your own data center is a lot like that, only the components are bigger—and more expensive.

![](/images/server-on-cart.png)

_A GPU node that had to be moved to the new data center._

While we planned (and hoped) for a smooth migration, that's unfortunately not what happened. The migration hit some bumps, and if your workloads were affected, we're genuinely sorry for that.

After all the dust had settled (literally) on Friday afternoon, we were thrilled to finally have production traffic running from the new location.

## What's next

Launching our second data center is a big milestone, but more work remains before we can reliably serve traffic from both locations. Over the coming weeks — we're aiming for within the month — we'll be migrating our initial data center to the new network infrastructure, which will let us run production traffic from both sites simultaneously.

We'll post an update when it's done. In the meantime, if you have questions about the migration or what this means for your workloads, we'd love to hear from you on our [community forum](https://odoo.berget.ai/forum).
