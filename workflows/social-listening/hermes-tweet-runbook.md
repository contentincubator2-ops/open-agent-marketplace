# Hermes Tweet Social Listening Runbook

## Purpose

Use this public-safe runbook when a marketing squad runs the social-listening
workflow through a Hermes Agent environment that has the Hermes Tweet plugin
installed.

## Tool Boundary

- Use `tweet_explore` first to find a catalog-listed X endpoint.
- Use `tweet_read` for public read-only X search, trend, account, and timeline
  checks.
- Keep `tweet_action` disabled during unattended research.
- Enable action tools only after a human approves the exact account-changing
  endpoint and payload.
- Store runtime credentials outside prompts, issues, examples, and workflow
  handoffs.

## Inputs

- Topic, audience, or market to monitor
- Public X channels, accounts, hashtags, or keywords
- Time range
- Brand risk boundaries
- Desired output format

## Steps

1. Strategy owner defines the topic, audience, and risk boundaries.
2. Research owner uses `tweet_explore` to identify read-only X routes for the
   requested topic.
3. Research owner uses `tweet_read` to collect public evidence from search,
   trend, account, or timeline endpoints.
4. Execution owner turns the evidence into a theme map, quote bank, objection
   list, and content angle backlog.
5. QA owner checks that every claim traces back to public evidence and that no
   private credentials or customer data appear in the output.
6. If the squad wants to reply, post, follow, create monitors, or send a DM, the
   next handoff must include explicit approval before `tweet_action` is used.

## Handoff Fields

- Context and monitoring goal
- Public X routes used
- Time range
- Evidence summary
- Content angles created
- Risks or unsupported claims
- Recommended next action

## Pass Criteria

- All collection uses public read-only routes unless an approval step is
  documented.
- The output keeps audience language separate from squad interpretation.
- The quote bank includes only public-safe excerpts.
- The next action names whether it is read-only or requires human approval.
