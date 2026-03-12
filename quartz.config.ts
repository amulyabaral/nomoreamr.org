import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "NoMoreAMR",
    pageTitleSuffix: " – Nordic AMR/AMU Knowledge Base",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    locale: "en-GB",
    baseUrl: "nomoreamr.org",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Inter",
        body: "Inter",
        code: "JetBrains Mono",
      },
      colors: {
        lightMode: {
          light: "#ffffff",
          lightgray: "#f0f0f0",
          gray: "#b0b0b0",
          darkgray: "#2a2a2a",
          dark: "#1a1a1a",
          secondary: "#7c3aed",
          tertiary: "#2563eb",
          highlight: "rgba(124, 58, 237, 0.10)",
          textHighlight: "#c084fc88",
        },
        darkMode: {
          light: "#0f0f0f",
          lightgray: "#252525",
          gray: "#707070",
          darkgray: "#e8e8e8",
          dark: "#f5f5f5",
          secondary: "#a78bfa",
          tertiary: "#60a5fa",
          highlight: "rgba(167, 139, 250, 0.15)",
          textHighlight: "#a78bfa44",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
