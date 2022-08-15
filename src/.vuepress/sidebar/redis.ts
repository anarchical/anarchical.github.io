import {arraySidebar} from "vuepress-theme-hope";

export const redis = arraySidebar([
  {
    text: "Redis",
    prefix: "redis/",
    collapsable: true,
    children: [ "test01", "test02"],
  }
]);
