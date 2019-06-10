# lengband-blog 的管理后台

# 安装方式

```
yarn install
yarn start
```

# 目录文件说明

tsconfig 文件防止 vscode 红色提示报错(虽然不影响代码运行，但是看着很难受)

# HMR

1、确保 devServer 里面 hot 已开启

```
devServer: {
  hot: true
}
```

2、添加对应的 plugins

```
plugins: [
  new webpack.HotModuleReplacementPlugin()
]
```

3、把希望热更替的模块重新 render 一下

```
if (module.hot) {
  module.hot.accept('./App', () => {
    render(App)
  })
}
```
