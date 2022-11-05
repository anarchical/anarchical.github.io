import {arraySidebar} from "vuepress-theme-hope";

export const ubuntu = arraySidebar([
  {
    text: "Ubuntu",
    prefix: "ubuntu/",
    collapsable: true,
    children: ["00install", "01config"],
  }
]);
