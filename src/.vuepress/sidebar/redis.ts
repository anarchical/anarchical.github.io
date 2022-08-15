import {arraySidebar} from "vuepress-theme-hope";

export const redis = arraySidebar([
  {
    text: "Redis",
    prefix: "redis/",
    collapsable: true,
    children: [ "00_index", "01_index"],
  }
]);
