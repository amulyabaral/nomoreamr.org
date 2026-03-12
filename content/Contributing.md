---
title: Contributing
aliases:
  - How to Contribute
tags:
  - meta
---

# Contributing

This is an open knowledge base on [[Antimicrobial Resistance (AMR)|AMR]] and [[Antimicrobial Use (AMU)|AMU]] surveillance in the Nordic countries. We welcome contributions from researchers, public health professionals, and surveillance coordinators.

## How to Contribute

### Option 1: Open an Issue (easiest)

Not familiar with Git or pull requests? No problem — just [open an issue](https://github.com/amulyabaral/nomoreamr.org/issues/new) describing what you'd like to add or change, and we'll take care of the rest.

### Option 2: Submit a Pull Request

1. **Fork the repository** on GitHub
2. **Edit or add content** in the `content/` directory
3. **Submit a pull request** with a description of your changes

## Content Structure

The vault is organised into folders:

| Folder | Contents |
|---|---|
| `entities/` | Institutions involved in surveillance (by country) |
| `surveillance/` | Surveillance programme pages |
| `countries/` | Country overview pages |
| `concepts/` | Key concepts (AMR, AMU, One Health, etc.) |
| `challenges/` | Challenges to integrated surveillance |
| `roadmap/` | Roadmap, vision, and recommendations |
| `data-sources/` | Data source descriptions |

## Writing Guidelines

### Frontmatter
Every page needs YAML frontmatter:
```yaml
---
title: Page Title
aliases:
  - Alternative Name
  - Abbreviation
tags:
  - relevant-tag
---
```

### Wikilinks
Use `[[wikilinks]]` to connect pages. This is what makes the knowledge base navigable:
- Link to entities: `[[SSI]]`, `[[NIPH]]`
- Link to concepts: `[[Antimicrobial Resistance (AMR)]]`
- Link with display text: `[[FINRES-FINRES-Vet|FINRES / FINRES-Vet]]`

### Entity Types
When adding entities, use one of these types:
- `government-agency`
- `research-institute`
- `research-consortium`
- `hospital`
- `university`

## Building the Site

This vault is published as a static site using [Quartz](https://quartz.jzhao.xyz/). To build locally:

```bash
npm install
npx quartz build --serve
```

