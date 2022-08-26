import {arraySidebar} from "vuepress-theme-hope";

export const centos = arraySidebar([
  {
    text: "CentOS",
    prefix: "centos/",
    collapsable: true,
    children: [ "network"],
  }
]);
