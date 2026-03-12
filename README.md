# NoMoReAMR – Nordic AMR/AMU Knowledge Base

**[nomoreamr.org](https://nomoreamr.org)**

NoMoReAMR is a [NordForsk](https://www.nordforsk.org/)-funded collaborative initiative promoting integrated One Health research across the Nordic region. This open knowledge base maps the surveillance systems, key institutions, data sources, and challenges involved in monitoring Antimicrobial Resistance (AMR) and Antimicrobial Use (AMU) in Denmark, Finland, Iceland, Norway, and Sweden.

## Content Structure

All content lives in the `content/` directory as Markdown files:

| Folder | Contents |
|---|---|
| `Concepts/` | Key concepts (AMR, AMU, One Health, etc.) |
| `Countries/` | Country overview pages |
| `Entities/` | Institutions involved in surveillance (by country) |
| `Surveillance/` | National surveillance programme pages |
| `Data sources/` | Data source descriptions |
| `Challenges/` | Challenges to integrated surveillance |
| `Roadmap/` | Vision and recommendations |

## Building Locally

The site is built with [Quartz](https://quartz.jzhao.xyz/).

```bash
npm install
npx quartz build --serve
```

## Contributing

1. **Fork** this repository
2. **Edit or add** Markdown files in `content/`
3. **Submit a pull request** with a description of your changes

### Writing guidelines

- Every page needs YAML frontmatter with `title`, `aliases`, and `tags`
- Use `[[wikilinks]]` to connect pages (e.g. `[[SSI]]`, `[[One Health]]`)
- See [Contributing](content/Contributing.md) for full details

## License

This project is funded by [NordForsk](https://www.nordforsk.org/) and developed collaboratively by researchers across the Nordic countries.
