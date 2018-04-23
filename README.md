## 会控前端项目

## 开发
- 每次新加功能需要修改 CHANGELOG.md 以便溯源追踪。书写规则请仔细阅读CHANGELOG规范。

## TODO:
- jest - ts-jest or other test framework
- replace with flowtype
- done!  ie8 config
- http://typedoc.org/
- webpack config with webpack-merge

### 安装
1. 进入项目根目录，执行npm安装命令

```
npm install
```

### 开发
1. 进入项目根目录，执行 `npm start` 启动命名
2. 访问http://localhost:8888，查看效果

```
npm start
open 'http://localhost:8086/contact.html??random=1610&locale=zh-CN&userInEnterprise=true&h=https://dev.xylink.com&version=2.19.0.206&securityKey=eb9e28ee9623f202278c7a1549fc922515f481ad9ea&customizedkey=#/?_k=235veu'
```

### 构建
1. 测试环境，执行build-dev脚本
2. 预发布环境，执行build-pre脚本
3. 生产环境，执行build-prd脚本

```
npm run build-dev //测试环境
npm run build-pre //预发布环境
npm run build-prd //生产环境
```

### 部署
1. 执行deploy-config脚本，只需要执行一次
2. 测试环境，执行deploy-dev脚本
3. 预发布环境，执行deploy-pre脚本
4. 生产环境，执行deploy-prd脚本
5. 开发完毕, 上线之前, 需要将生成的静态资源放至static_source并维护, 执行deploy-static脚本

```
npm run deploy-config //只需执行一次
npm run deploy-dev //测试环境
npm run deploy-pre //预发布环境
npm run deploy-prd //生产环境
```

### 文档
1. 生成项目文档，执行jsdoc脚本
2. 查看文档，浏览器打开./doc/index.html

```
npm run jsdoc
```

### 其他工具
- editorconfig
- postcss
- css module
- eslint
- typescript
- prittier
- storybook
- jest
- flow

### libs
- flux.js
- immutable.js

### 注意
本项目为了兼容ie8，使用了低版本的react@0.14.9、webpack@1.12.9和react-router@1.0.2，
使用上与高版本的可能不同，文档可参考node_molules安装目录里面的。

### 资源
- 重要的示例，这位作者还写了一个css module 的d.ts https://github.com/Quramy/tsc-react-example

### Typescript尝试
由于对TypeScript不熟，加上TS对React的支持

- Typescript 和 React-redux 之间的 props 问题解决[issue](https://github.com/DefinitelyTyped/DefinitelyTyped/issues/16990)：
  

### 

