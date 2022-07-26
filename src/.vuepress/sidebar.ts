import {sidebar} from "vuepress-theme-hope";
import {redis} from "./sidebar/redis";
import {solr} from "./sidebar/solr";
import {docker} from "./sidebar/docker";
import {maven} from "./sidebar/maven";
import {centos} from "./sidebar/centos";
import {ubuntu} from "./sidebar/ubuntu";

export const sidebarConfig = sidebar({
  "/note/database/redis": redis,
  "/note/database/solr": solr,
  "/note/devops/docker": docker,
  "/note/tool/maven": maven,

  "/blog/linux/centos": centos,
  "/blog/linux/ubuntu": ubuntu,


  "/": [
    "",
    "slide",
    {
      text: "如何使用",
      icon: "creative",
      prefix: "guide/",
      link: "guide/",
      children: "structure",
    },
    {
      text: "文章",
      icon: "note",
      prefix: "blog/",
      children: [
        {
          text: "文章 1-4",
          icon: "note",
          collapsable: true,
          prefix: "article/",
          children: ["article1", "article2", "article3", "article4"],
        },
        {
          text: "文章 5-12",
          icon: "note",
          children: [
            {
              text: "文章 5-8",
              icon: "note",
              collapsable: true,
              prefix: "article/",
              children: ["article5", "article6", "article7", "article8"],
            },
            {
              text: "文章 9-12",
              icon: "note",
              children: ["article9", "article10", "article11", "article12"],
            },
          ],
        },
      ],
    },
  ],
});
