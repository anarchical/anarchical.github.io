import {defineUserConfig} from "vuepress";
import theme from "./theme";
import {redirectPlugin} from "vuepress-plugin-redirect";

export default defineUserConfig({
  base: "/",

  locales: {
    "/en/": {
      lang: "en-US",
      title: "Theme Demo",
      description: "A demo for vuepress-theme-hope",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "主题演示",
      description: "vuepress-theme-hope 的演示",
    },
  },
  plugins: [
    redirectPlugin({
      config: {
        "/": "/zh/",
      },
    }),
  ],
  theme,
});
