import { createMuiTheme } from "@material-ui/core/styles";

export const drawerWidth = 240;

export const snackbarConfig = {
  maxSnack: 4,
  anchorOrigin: {
    vertical: "top",
    horizontal: "right"
  }
};

export const globalTheme = createMuiTheme({
  overrides: {
    MuiContainer: {
      root: {
        width: "100%"
      },
      maxWidthLg: {
        maxWidth: "100%!important"
      }
    }
  }
});

export const tagOpts = [
  { value: "fe", label: "前端" },
  { value: "linux", label: "linux" },
  { value: "git", label: "git" },
  { value: "db", label: "数据库" },
  { value: "node", label: "node" }
];

export const todoList = [
  {
    id: "1",
    title: "webpack-dev-server 核心概念",
    tag: "webpack",
    content: "",
    url: "https://www.jianshu.com/p/e547fb9747e0",
    description: "核心概念核心概念核心概念核心概念"
  },
  {
    id: "2",
    title: "Webpack中publicPath详解",
    tag: "webpack",
    content: "",
    url: "https://juejin.im/post/5ae9ae5e518825672f19b094",
    description:
      "Webpack中publicPath详解Webpack中publicPath详解Webpack中publicPath详解Webpack中publicPath详解"
  },
  {
    id: "3",
    title: "Markdown基本语法",
    tag: "markdown",
    content: "",
    url: "https://www.jianshu.com/p/191d1e21f7ed",
    description:
      "Markdown基本语法Markdown基本语法Markdown基本语法Markdown基本语法"
  },
  {
    id: "4",
    title: "Element 提PR",
    tag: "PR",
    content: "",
    done: true, // virtrual
    doTime: 1561554349970,
    url: "https://github.com/ElemeFE/element/pulls",
    description: "Element select 文件引入冲突"
  },
  {
    id: "5",
    title: "webpack 添加 static 和 tree shake",
    tag: "webpack"
  },
  {
    id: "6",
    title: "nodejs 学习",
    tag: "node",
    content: "",
    url: "https://elemefe.github.io/node-interview/#/sections/zh-cn/",
    description: "如何通过饿了么 Node.js 面试"
  }
];

export const keyCode = {
  ENTER_KEY_CODE: 13
};

export const activeList = [
  {
    id: 1,
    content: "Brunch this weekend?",
    time: 1563011785408,
    author: "Jhhn",
    avatar: "/static/images/avatar.jpg",
    questionFrom: "Alias",
    question: "I'll be in your neighborhood doing errands this…"
  },
  {
    id: 2,
    content: "Brunch this weekend?",
    time: 1563011785408,
    author: "Jhhn",
    avatar: "/static/images/avatar.jpg",
    questionFrom: "Alias",
    question: "I'll be in your neighborhood doing errands this…"
  }
];
