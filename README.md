
<h1 align="center">vue-fast-h5</h1>

[![GitHub Repo stars](https://img.shields.io/github/stars/willis325/vue-fast-h5?style=flat&logo=github)](https://github.com/willis325/vue-fast-h5)
![node version](https://img.shields.io/badge/node-%3E%3D18-green)
![pnpm version](https://img.shields.io/badge/pnpm-%3E%3D8-green)
![GitHub License](https://img.shields.io/github/license/willis325/vue-fast-h5)

`vue-fast-h5` 是一个基于 `Vue3` 的快速开发框架，旨在帮助开发者快速搭建一个高性能、易维护、可扩展的移动端 `H5` 项目。

> 如果 `vue-fast-h5` 帮到了您，别忘了点个 ⭐️，您的认可是我最大的动力！

## 特性

- [Vue3](https://cn.vuejs.org) + [Vant4](https://vant-ui.github.io/vant/#/zh-CN) + [Vite5](https://vite.dev) + [Typescript](https://www.typescriptlang.org/docs/) + [Pinia](https://pinia.vuejs.org) + [pnpm](https://pnpm.io) 主流技术栈

- [UnoCSS](https://unocss.dev) 高性能且极具灵活性的即时原子化 CSS 引擎

- [Eslint](https://zh-hans.eslint.org/docs/latest/) + [Prettier](https://prettier.io/docs/en/) + [Husky](https://typicode.github.io/husky/) + [Commitlint](https://commitlint.js.org/)，定义开发规范，保证代码质量

- [vueuse](https://github.com/antfu/vueuse) - 实用的 Composition API 工具合集

- [vConsole](https://github.com/vadxq/vite-plugin-vconsole) - 移动端网页开发工具

- 公共 components、hooks、store 自动导入，env 多环境配置，常用工具类集成等

## 目录结构

```shell
├─ .husky                     # husky
├─ .vscode                    # vscode 配置文件
├─ src                        # 项目源代码
│   ├─ apis                   # 接口请求
│   ├─ assets                 # 资源文件
│   ├─ components             # 公共组件
│   ├─ config                 # 配置、常量、枚举
│   ├─ hooks                  # hook
│   ├─ pages                  # 主包页面
│   ├─ router                 # 路由文件
│   ├─ store                  # 全局 store 管理
│   ├─ types                  # 全局类型定义
│   ├─ utils                  # 全局工具类库
│   ├─ App.vue                # 入口页面
│   └─ main.ts                # 源码入口
└── .commitlintrc             # commitlint 配置文件
└── .env                      # 环境配置
└── .eslintignore             # eslint 忽略文件
└── .eslintrc                 # eslint 配置文件
└── .prettierignore           # prettier 忽略文件
└── .prettierrc               # prettier 配置
└── index.html                # html 模板
└── package.json              # package.json
└── tsconfig.json             # typescript 配置文件
└── uno.config.js             # UnoCSS 配置文件
└── vite.config.js            # vite 打包配置
```

## 安装使用

```shell
npm install -g willis-cli

willis-cli create 
```

## 待办事项
- [ ] 模板页面
- [ ] 登录页面

## 关于我
使用过程中有任何疑问，都可以加我微信，相互交流、共同进步！

<img alt="special sponsor appwrite" src="./public/wechat.png" height="240" style="display:inline-block; height:240px;">

# 常见问题

- hint: The '.husky/_/pre-commit' hook was ignored because it's not set as executable.

   ```shell
   sudo chmod 777 .husky/*
   ```