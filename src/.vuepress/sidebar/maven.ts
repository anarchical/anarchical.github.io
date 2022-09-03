import {arraySidebar} from "vuepress-theme-hope";

export const maven = arraySidebar([
  {
    text: "maven实战",
    collapsable: true,
    children: ["00install"],
  },
  {
    text: "maven概念",
    collapsable: true,
    children: ["01concept", "02command"],
  },
]);
