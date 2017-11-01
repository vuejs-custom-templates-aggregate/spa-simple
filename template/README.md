# {{ name }}

> {{ description }}

## Build Setup

``` bash
# install dependencies
# 安装依赖
npm install

# serve with hot reload at localhost:9090
# 在 localhost:9090 启动项目并热加载
npm run dev localhost:9090

# build for production with minification
# 打包压缩
npm run build

# build for production and view the bundle analyzer report
# 打包压缩并查看报告
npm run build --report

# build for qa, do not uglify code
# 打包但不压缩不混淆代码
npm run qa
{{#unit}}

# run unit tests
npm run unit
{{/unit}}
{{#e2e}}

# run e2e tests
npm run e2e
{{/e2e}}
{{#if_or unit e2e}}

# run all tests
npm test
{{/if_or}}
```

## other

If you used vscode-fecs-plugin in other project, find the plugin in left and last icon, and then click the "Disable(Workspace)".

如果你在其他项目使用了 vscode-fecs-plugin，点击右边最后一个图标找到该插件，在设置中点击“禁用(工作区)”
