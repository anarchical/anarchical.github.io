import {navbar} from "vuepress-theme-hope";

export const navbarConfig = navbar([
  "/",
  {text: "Tag", icon: "tag", link: "/tag/"},
  {text: "Category", icon: "categoryselected", link: "/category/"},
  {text: "Thinking", icon: "question", link: "/guide/"},
  {text: "Event", icon: "folder", link: "/guide/"},
  {
    text: "Blog",
    icon: "edit",
    prefix: "/blog/",
    children: [
      {
        text: "文章 1-4",
        icon: "edit",
        prefix: "article/",
        children: [
          {text: "文章 1", icon: "edit", link: "article1"},
          {text: "文章 2", icon: "edit", link: "article2"},
          "article3",
          "article4",
        ],
      },
      {
        text: "文章 5-12",
        icon: "edit",
        children: [
          {
            text: "文章 5",
            icon: "edit",
            link: "article/article5",
          },
          {
            text: "文章 6666",
            icon: "edit",
            link: "article/article6",
          },
          "article/article7",
          "article/article8",
        ],
      },
      {text: "文章 9", icon: "edit", link: "article9"},
      {text: "文章 10", icon: "edit", link: "article10"},
      "article11",
      "article12",
    ],
  },
  {
    text: "Note",
    icon: "note",
    prefix: "/note/",
    children: [
      {
        text: "数据库",
        children: [
          {text: "MySQL", icon: "note", link: "database/redis/"},
          {text: "Redis", icon: "note", link: "database/redis/"},
          {text: "ElasticSearch", icon: "note", link: "database/redis/"},

        ],
      },
    ],
  },
]);
