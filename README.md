# Open Agent Marketplace

**Build your own AI marketing team marketplace — with reusable agent profiles, squad recipes, workflow templates, sample cases, and evaluation rubrics.**

Open Agent Marketplace is an open-source starter kit for builders, agencies, founders, and marketing teams who want to compose AI agents into working marketing squads. Instead of shipping a raw agent list, the repo gives you public-safe schemas, fictional sample agents, outcome-based squad recipes, workflow handoffs, and a lightweight browser demo.

```txt
> Open Agent Marketplace
> Marketing Agent OS for reusable AI teams

const agents = 528;
const squads = 8;
// 28 starter agents + 500 public-safe curated profiles
```

## Why this exists

Most AI-agent repos stop at one of three layers:

1. a list of tools,
2. a single automation demo, or
3. a generic agent marketplace shell.

This repo focuses on the missing operating layer for marketing work:

- Which marketing agents should exist?
- How should they be grouped into teams?
- What inputs and outputs should each workflow require?
- How should agent work be evaluated before it reaches a customer?
- How can contributors add new agents safely without leaking private data?

## What this includes

- Public agent profile schema
- Squad composition schema
- Skill binding schema
- 28 fictional, public-safe sample agents
- 500 public-safe curated agent profiles derived from a private 16,000+ agent library
- 8 outcome-based marketing squad recipes
- Workflow templates for launch, content, SEO, paid ads, lifecycle, and social listening
- Marketing case packs with fictional briefs and expected deliverables
- Agent quality rubric and sample eval cases
- A lightweight browser demo inspired by developer-directory products
- Validation scripts for agent / squad JSON
- Sensitivity sweep for public-release safety
- [Marketing Agent Open Repo Roadmap](docs/marketing-agent-open-repo-roadmap.md)
- [Private 16,000+ Agent Library](docs/16000-agent-library.md)
- [Public Agent Release Policy](docs/release-policy.md)

## What this is not

This repository is **not** a dump of any private database. It intentionally excludes private customer data, internal prompts, credentials, operational URLs, private workspaces, and commercial performance metrics.

## Quick start

```bash
npm install
npm run validate
npm run sweep
npm run demo
```

Then open:

```txt
http://localhost:4173/app/web/
```

## Directory structure

```txt
.github/     Contribution templates and CI
agents/      Public curated agent packs
app/web/     Minimal marketplace UI demo
data/        Fictional sample data and public curated JSON packs
docs/        Public design, schema, taxonomy, rubric, and roadmap docs
evals/       Marketing-agent evaluation cases and sample results
examples/    Agent, squad, and marketing-case examples
launch/      Public launch copy and distribution assets
recipes/     Ready-to-copy marketing squad recipes
schema/      JSON schemas for agents, squads, and skills
templates/   Reusable agent, squad, and workflow templates
workflows/   Marketing workflow templates with inputs, handoffs, and rubrics
scripts/     Validation and export helper scripts
```

## Core concepts

### Agent

A reusable AI worker profile with a role, skill set, operating style, example tasks, marketing channel expertise, funnel coverage, deliverables, and quality expectations.

### Squad

A prebuilt team of agents designed around a business outcome such as launching a SaaS product, growing ecommerce revenue, running ABM, building a content engine, or improving local lead generation.

### Workflow

A reusable operating pattern that defines inputs, agent handoffs, outputs, and review criteria. Workflows make the marketplace operational instead of merely searchable.

### Evaluation rubric

A public checklist for reviewing agent outputs before they are shipped. Marketing work is evaluated for audience specificity, channel fit, strategic clarity, evidence quality, brand voice, and actionability.

## Example agent

```json
{
  "slug": "positioning-strategist",
  "name": "Nora Ellis",
  "title": "Positioning Strategist",
  "layer": "strategy",
  "category": "Strategy",
  "primarySkill": "positioning",
  "channelExpertise": ["Landing Pages", "Sales Enablement", "Product Marketing"],
  "funnelStage": ["consideration", "conversion"],
  "deliverables": ["positioning brief", "message map", "differentiation matrix"],
  "summary": "Turns market context, customer pain, and product proof into crisp positioning."
}
```

## Example squads

- `saas-launch-squad` — positioning, launch page, content, lifecycle, and measurement
- `ecommerce-growth-squad` — product page, paid ads, UGC, email/SMS, and ROAS review
- `b2b-abm-squad` — ICP, account research, outbound, LinkedIn, and sales collateral
- `local-service-lead-gen-squad` — local SEO, paid search, reviews, landing pages, CRM follow-up
- `creator-growth-squad` — content strategy, shorts, newsletter, community, analytics

See `recipes/marketing-squads/` and `data/squads.sample.json`.

## Public-safe contribution model

Contributions are welcome when they add reusable, fictional or public-safe assets:

- agent profiles
- squad recipes
- workflow templates
- eval cases
- taxonomy improvements
- demo UI improvements

Before opening a PR:

```bash
npm run validate
npm run sweep
```

## License

MIT
