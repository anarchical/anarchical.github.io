import {defineUserConfig} from "vuepress";
import theme from "./theme";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "leaf's brains",
      description: "笔记、博客、杂想、事件",
    },
  },
  theme,
});
