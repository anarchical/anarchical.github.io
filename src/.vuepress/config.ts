import {defineUserConfig} from "vuepress";
import {searchPlugin} from "@vuepress/plugin-search";
import theme from "./theme";

export default defineUserConfig({
  base: "/",

  shouldPrefetch: false,

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
      maxSuggestions: 10,
      hotKeys: ["s", "/"],
      locales: {
        "/": {
          placeholder: "Search...",
        },
      },
    })
  ]
});
