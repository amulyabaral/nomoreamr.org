import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/nomoreamr/nomoreamr.org",
      NordForsk: "https://www.nordforsk.org/",
    },
  }),
}

// Shared explorer config for consistent ordering and display names
const explorerConfig = Component.Explorer({
  title: "Explorer",
  folderClickBehavior: "collapse",
  folderDefaultState: "collapsed",
  useSavedState: true,
  order: ["filter", "map", "sort"],
  mapFn: (node) => {
    // Normalize display names to proper capitalization
    const displayNames: Record<string, string> = {
      "concepts": "Concepts",
      "countries": "Countries",
      "entities": "Entities",
      "data-sources": "Data Sources",
      "data sources": "Data Sources",
      "roadmap": "Roadmap",
      "surveillance": "Surveillance",
      "challenges": "Challenges",
    }
    const lower = node.displayName.toLowerCase()
    if (displayNames[lower]) {
      node.displayName = displayNames[lower]
    }
  },
  sortFn: (a, b) => {
    const order: Record<string, number> = {
      "Concepts": 1,
      "Countries": 2,
      "Entities": 3,
      "Data Sources": 4,
      "Roadmap": 5,
      "Surveillance": 6,
      "Challenges": 7,
      "Contributing": 8,
    }
    // Sort by custom order (works for both folders and files like Contributing)
    const aOrder = order[a.displayName] ?? 99
    const bOrder = order[b.displayName] ?? 99
    if (aOrder !== bOrder) return aOrder - bOrder
    // Within same order, folders before files
    if (!a.isFolder && b.isFolder) return 1
    if (a.isFolder && !b.isFolder) return -1
    // Fallback: alphabetical
    return a.displayName.localeCompare(b.displayName, undefined, {
      numeric: true,
      sensitivity: "base",
    })
  },
})

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(explorerConfig),
  ],
  right: [
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(explorerConfig),
  ],
  right: [],
}
