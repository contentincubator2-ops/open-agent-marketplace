# Open Agent Marketplace

An open-source starter kit for building searchable AI agent marketplaces.

Browse reusable agent profiles, organize them into squads, bind them to skills, and expose them through a simple marketplace UI or API.

Inspired by the open `SKILL.md` ecosystem, this repo focuses on the next layer: **agent profiles, team composition, and workflow-ready AI squads**.

```txt
> Open Agent Marketplace
> for building AI agent teams from reusable agent profiles

const agents = 16102;
// Discover, filter, and compose open-source AI agents
```

## What this includes

- Public agent profile schema
- Squad composition schema
- Skill binding schema
- Fictionalized sample agents and squads
- A lightweight browser demo inspired by developer-directory products
- Validation scripts for agent / squad JSON
- Sanitization policy for turning private agent databases into safe public examples
- [Marketing Agent Open Repo Roadmap](docs/marketing-agent-open-repo-roadmap.md) — what to add next to make this a high-conviction Marketing Agent OS

## What this is not

This repository is **not** a dump of any private database. It intentionally excludes private customer data, internal prompts, credentials, operational URLs, private workspaces, and commercial performance metrics.

## Quick start

```bash
npm run validate
npm run demo
```

Then open:

```txt
http://localhost:4173/app/web/
```

## Directory structure

```txt
docs/       Public design, schema, architecture, and sanitization docs
schema/     JSON schemas for agents, squads, and skills
data/       Fictional sample data
examples/   Markdown examples for public agent and squad profiles
app/web/    Minimal marketplace UI demo
scripts/    Validation and export helper scripts
```

## Core concepts

### Agent
A reusable AI worker profile with a role, skill set, operating style, example tasks, pricing tier, and install/copy metadata.

### Squad
A prebuilt team of agents designed around a real workflow such as launching a SaaS product, running an ecommerce growth sprint, or building a content engine.

### Skill binding
A link between an agent profile and one or more executable skills, prompts, tools, or workflow definitions.

## Example agent

```json
{
  "slug": "growth-strategist",
  "name": "Maya Chen",
  "title": "Growth Strategist",
  "layer": "strategy",
  "category": "Growth",
  "primarySkill": "growth-strategy",
  "industries": ["SaaS", "Ecommerce", "Creator Economy"],
  "pricingTier": "starter",
  "summary": "Designs acquisition loops, activation experiments, and early traction plans."
}
```

## License

MIT
