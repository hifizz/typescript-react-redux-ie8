# TypeScript-React-Redux todomvc (IE8+)
本项目是一个兼容IE8的 TypeScript + React + Redux + immutablejs 的项目模板。
为了降低上手难度，我在项目中写3个DEMO，一个hackernews，一个使用了immutablejs的todomvc
另外一个是未使用的。使用时，只需要把这些文件夹删掉就好了。

## Show me the code
Code在此：[TypeScript-React-redux-ie8](https://github.com/hifizz/typescript-react-redux-ie8)  
Demo在此：[Todomvc-Typescript-react-redux-immutable](http://demo.hifizz.com/demo/todomvc/development/index.html)

## Usage
使用方法很简单，只需要把项目克隆到本地，然后安装依赖就可以跑起来了。
```bash
$ git clone https://github.com/hifizz/typescript-react-redux-ie8.git 

# 为了顺利的安装依赖，这里最好是使用cnpm，不要使用yarn
# 有以下几点原因：
# 1.yarn 会更新某些依赖，造成不可知错误。
# 2.node-sass很容易安装失败。
$ cnpm install
$ cnpm start
```

## Feature
- 兼容IE8
- TypeScript && ES6/ES7/ES8 语法
- [css-modules](https://github.com/css-modules/css-modules) 
- [Prettier](https://prettier.io/)
- [tslint](https://github.com/palantir/tslint)
- Webpack@1.x
- Promise
- React@0.14.9
- [Redux](https://github.com/reactjs/redux) 状态管理
- [Redux-thunk](https://github.com/gaearon/redux-thunk)
- [ts-jest](https://github.com/kulshekhar/ts-jest)
- [immutablejs](https://github.com/facebook/immutable-js)
- [typedoc](https://github.com/TypeStrong/typedoc)
- webpack-dev-server 热更新、无刷新，IE8 可以手动刷新（不支持websocket）

> React 版本为0.14.9，使用了ES6的最新语法编写，（万一有一天，万一...）可以无缝过渡到React新版本，也可以同一套代码使用两个不同版本的React输出两套代码跑在不同的浏览器上


## Install
```bash
$ npm install
```

## Start
```bash
# then open http://localhost:8888 in your browser.
$ npm start

# develop in ie browser 
$ npm start:ie 
```

## Scripts
```bash
# compile src to target code
$ npm run build

# format code style by prettier
$ npm run format 
```

### CSS 解决方案
本项目采用SASS + PostCSS + CSS Module 编写和处理CSS。CSS Module 是一个Scope CSS的方案。PostCSS 后处理器主要用到了[`autoprefixer`](https://github.com/postcss/autoprefixer)和[`cssnano`](http://cssnano.co/)两个插件，前者是用来给浏览器自动添加前缀的--基于[`caniuse`](http://caniuse.com/)的数据。SASS的使用纯属个人喜好，毕竟我已经使用SASS三年了。
对于本项目来说，CSS的编译过程是这样的：编写SCSS文件 -> SASS编译 -> PostCSS autoprefixer -> CSS loader -> Style loader。

**before**
```js
import * as React from "react";
import "./index.scss";

class App extends React.Component {
  render() {
    return (
      <div className="app-container">
        <div className="app-header">header</div>
        <div className="app-content">content</div>
      </div>
    )
  }
}
```
```scss
.app-container {
  color: #4d4d4d;
}
.app-header {
  background-color: green;
}
.app-content {
  background-color: red;
}
```

**after**
```js
// ./src/app.tsx
import * as React from "react";
import * as style from "./index.scss";

class App extends React.Component {
  render() {
    return (
      <div className={style.container}>
        <div className={style.header}>header</div>
        <div className={style.content}>content</div>
      </div>
    )
  }
}
```

```scss
// ./src/index.scss
.container {
  color: #4d4d4d;
}
.header {
  background-color: green;
}
.content {
  background-color: red;
}
```

### 如何兼容IE8
- TS target 设置为 `es3` 
- post-loader 使用 es3-loader 
- uglyifyjs 解决IE8 问题 

以上步骤缺一不可。

本项目为了兼容ie8，使用了低版本的react@0.14.9、webpack@1.12.9和react-router@1.0.2，
使用上与高版本的可能不同，文档可参考根目录下node_molules对应的每个包的docs。

### 一些重要问题以及解决方案
#### 如何查找开源库旧版本文档
初始，我知道React0.14.9是支持IE8的，于是我在Google上开始搜索TypeScript为什么不支持IE8，于是得到一些issue信息，TypeScript是支持IE8的，但是某些版本有问题。翻了十几条issue的大楼之后得到信息，TypeScript@2.3.4可以很好的运行。这解决了第一个问题。接下来我需要确定React配套的状态管理库，redux使用哪个版本。这个问题比较纠结，

接下来我遇到一堆问题这些旧版本库，我怎么知道它怎么用呢？API有哪些？参数是什么类型的？

不要慌不要慌，太阳落了有月光。

为了解决这个问题，我可没少费心思。经过探索，主要方式有以下几种：
- Dash 
- GitHub 源码

#### TypeScript 如何和 `React-redux` 结合
```tsx
// 解决方案
```

#### TypeScript 如何 使用 CSS Module 
1.安装 `typings-for-css-modules-loader` [GitHub](https://github.com/Jimdo/typings-for-css-modules-loader)

### 兼容IE8的一些前端框架：
- 京东的nerv [Nerv – 京东高性能前端框架](http://jdc.jd.com/archives/212126)
- 腾讯的[Omi(x)](https://github.com/AlloyTeam/omi)
- 百度的[san](https://github.com/baidu/san) 
- 司徒正美的[anu](https://github.com/RubyLouvre/anu) [avalon](https://github.com/RubyLouvre/avalon)

### CHANGELOG
- 每次新加功能需要修改 CHANGELOG.md 以便溯源追踪。书写规则请仔细阅读[CHANGELOG规范](https://keepachangelog.com/en/1.0.0/)。

### TODO 
- webpack config 设置多个环境
- webpack merge 
