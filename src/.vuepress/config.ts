import {defineUserConfig} from "vuepress";
import {searchPlugin} from "@vuepress/plugin-search";
import theme from "./theme";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "Letter",
      description: "note、blog、thinking、event",
    },
  },

  theme,

  plugins: [
    searchPlugin({
      isSearchable: (page) => page.path !== "/",
      maxSuggestions: 10,
      hotKeys: ["s", "/"],
      // 用于在页面的搜索索引中添加额外字段
      getExtraFields: () => [],
      locales: {
        "/": {
          placeholder: "Search...",
        },
      },
    })
  ]
});
