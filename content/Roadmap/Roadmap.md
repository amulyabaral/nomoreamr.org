---
title: Roadmap
aliases:
  - Roadmap
  - Roadmap for Integrated One Health AMR Surveillance
tags:
  - roadmap
  - vision
---

# Roadmap for Integrated One Health AMR Surveillance

This roadmap outlines the path toward integrated [[Antimicrobial Resistance (AMR)|AMR]] and [[Antimicrobial Use (AMU)|AMU]] surveillance across the Nordic countries, following [[One Health]] principles.

> [!abstract] Citation
> Abramova et al., "Roadmap for Integrated One Health AMR Surveillance in Nordic countries"

## Current State

The Nordic countries - [[Denmark]], [[Finland]], [[Iceland]], [[Norway]], and [[Sweden]] - have well-established surveillance systems monitoring AMR and AMU. However, each country currently operates within its own framework with limited connections to neighbouring countries' surveillance structures.

Data sharing is primarily through international/EU systems ([[EUCAST|EARS-Net]], GLASS, EFSA), which often have **limited resolution** compared to national datasets.

## Why Integration Matters

A better integration of AMR and AMU surveillance in the Nordic region would:

- **Enhance preparedness** by enabling early data sharing and warnings about emerging threats
- **Support evidence-based policy** and antimicrobial stewardship
- **Foster cross-sector and cross-border collaboration**
- **Remove barriers** to data-sharing contracts and promote improved research
- **Serve as a model** inspiring other countries worldwide

## Proposed Model

> Decentralised data collection, centralised insight.

The proposed system:
1. **Builds on existing national systems** - no need to replace what works
2. **Collects and shares data via an integrated platform** - enabling unified regional surveillance
3. **Could leverage federated machine learning** for joint analyses on data that cannot be directly shared

## Challenges and Proposed Solutions

The paper identifies five current obstacles to integrated regional AMR surveillance (Table 2 in the paper) and proposes solutions for each.

### 1. Data Granularity
Start with nationally aggregated, standardised, de-identified datasets submitted by each country's national coordinating bodies. This avoids GDPR complications and builds on existing reporting structures. In parallel, develop a regulatory framework that enables access to both aggregated summaries and raw anonymised data, removing the need for various institutional clearance applications. See [[Reporting of Aggregated Data]].

### 2. EUCAST Breakpoints
EUCAST breakpoints are updated regularly, making historical data no longer directly comparable with current data. Raw data (MIC values, disk zone diameters) is not always saved — only the S/I/R interpretation. Implement a policy for the storage of raw MIC and disk zone data in national databases to allow retrospective analysis and ensure consistent trend monitoring even with evolving breakpoints. See [[AST Reporting]].

### 3. Missing Link Between Clinical Isolates and Diagnosis
Bacterial isolates are typically reported with resistance profiles but are not always linked to clinical context (diagnosis, type of infection, outcome). Develop national systems that securely connect laboratory results with clinical information by leveraging national electronic medical record platforms and existing health data registries. Adopt standardised data formats (e.g., WHO GLASS-compatible frameworks) and unique patient identifiers that enable linkage across datasets without compromising privacy. See [[Clinical Isolate-Diagnosis Link]].

### 4. Delayed Reporting
Reliance on EU structures for AMR surveillance has drawbacks, including challenges with real-time data sharing due to reporting delays. Timely data is crucial for detecting emerging resistance trends, outbreaks, and cross-border transmission events. Build on existing national notification systems for selected resistant phenotypes to enable near real-time sharing for high-priority resistance phenotypes. See [[Real-Time Data Sharing]].

### 5. Secondary Data Use
A vast amount of data is produced that can be utilised for both surveillance and research, including genomic and metagenomic datasets, socio-economic and environmental variables, and pharmaceutical industry data. However, legal restrictions are often associated with secondary use of data, and cross-border data sharing is hindered by national regulations. Address the need for secure computing environments that comply with data protection regulations, and develop novel computational analysis strategies for sensitive data environments. See [[Legal and Ethical Considerations]].

## Vision

See [[Vision for Integrated Surveillance]] for the long-term vision of what an integrated Nordic AMR/AMU surveillance system could achieve.

## Related Pages

- [[Vision for Integrated Surveillance]]
- [[Challenges to Integrated Surveillance]]
- [[Legal and Ethical Considerations]]
- [[One Health]]
- [[Recommendations]]
