import {hopeTheme} from "vuepress-theme-hope";
import {navbarConfig} from "./navbar";
import {sidebarConfig} from "./sidebar";

export default hopeTheme({

  hostname: "https://anarchical.github.io",

  author: {
    name: "yyq",
    url: "https://anarchical.github.io",
  },

  iconAssets: "iconfont",

  logo: "/ghost.png",

  repo: "anarchical/anarchical.github.io",

  docsDir: "src",

  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],

  navbarLayout: {
    left: ["Brand"],
    center: ["Links"],
    right: ["Search", "Outlook", "Repo"],
  },

  contributors: false,

  blog: {
    medias: {
      GitHub: "https://github.com/anarchical",
      Steam: "https://steamcommunity.com/profiles/76561198109273136/",
    },
  },

  locales: {

    "/": {
      // navbar
      navbar: navbarConfig,
      // sidebar
      sidebar: sidebarConfig,

      displayFooter: true,

      blog: {
        description: "communist anarchist",
        intro: "/intro.html",
      },
    },
  },

  encrypt: {
    config: {
      "/guide/encrypt.html": ["1234"],
    },
  },

  plugins: {
    blog: {
      autoExcerpt: true,
    },

    comment: {
      provider: "Giscus",
      repo: "anarchical/anarchical.github.io",
      repoId: "R_kgDOHuDVjQ",
      category: "Announcements",
      categoryId: "DIC_kwDOHuDVjc4CQ4ea",
      mapping: "pathname",
    },

    mdEnhance: {
      enableAll: true,
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
    },

    pwa: {
      favicon: "/ghost.png",
    }
  },
});
