---
title: AST Reporting
aliases:
  - AST Reporting
  - Antimicrobial Susceptibility Testing Reporting
tags:
  - challenge
---

# Antimicrobial Susceptibility Testing (AST) Reporting

> One of the five key [[Challenges to Integrated Surveillance]].

## Problem

Results from antimicrobial susceptibility testing are often reported only as S/I/R classifications (susceptible, susceptible with increased exposure, resistant) without the underlying quantitative data. This loses valuable information on resistance trends.

## Why This Matters

[[EUCAST]] breakpoints are updated regularly as scientific evidence evolves. When breakpoints change:

- Historical data interpreted under previous breakpoints are **no longer directly comparable** with current data
- If only S/I/R interpretations are stored (not raw MIC or disk zone diameter data), **retrospective re-analysis is impossible**
- Breakpoints are increasingly defined for specific clinical entities (UTIs, meningitis, endocarditis), meaning interpretations depend on clinical context

Additionally, in animal surveillance, **epidemiological cut-off values (ECOFFs)** are used instead of clinical breakpoints, creating another layer of complexity.

## Proposed Solution

Implement a policy for storing **raw MIC (minimum inhibitory concentration) and disk zone diameter data** in national databases.

## Benefit

- Preserves granularity of resistance data
- Allows reclassification if breakpoints change
- Provides richer insights into emerging resistance patterns
- Enables consistent trend monitoring over time

## Related Pages

- [[Challenges to Integrated Surveillance]]
- [[EUCAST]]
- [[Reporting of Aggregated Data]]
- [[Human AMR Surveillance]]
