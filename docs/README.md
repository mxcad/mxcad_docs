
# 快速入门

> mxcad必须和mxdraw一起使用 如果你不了解mxdraw库 请参考：<https://mxcadx.gitee.io/mxdraw_docs/>


## 安装

### CDN

```html
<script scr="https://unpkg.com/mxdraw/dist/mxdraw.umd.js" ></script>
<script scr="https://unpkg.com/mxcad/dist/mxcad.umd.js"></script>
```

### NPM

```sh
npm install mxdraw mxcad
```

## 基本用法

::: tip 重要提示

因为mxcad默认使用了`SharedArrayBuffer`
需要在服务端设置相应对应的响应头:

```js
// nodejs 为例
const http = require('http');
http.createServer((req, res)=> {
    res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
    res.setHeader("Cross-Origin-Embedder-Policy", "require-corp");
})

```

:::

需要canvas元素

```html
<div style="height: 600px; overflow: hidden;"> <canvas id="myCanvas"></canvas></div>
```

推荐使用vite作为构建工具

```ts
import { createMxCad } from "mxcad"
createMxCad({
    canvas: "#myCanvas",
    locateFile: (fileName)=> new URL(`/node_modules/mxcad/dist/wasm/2d/${fileName}`, import.meta.url).href,
    fileUrl: new URL("../assets/test.mxweb", import.meta.url).href
}).then((mxcad)=> {
    // 我想换一个文件显示?
    mxcad.openWebFile(new URL("../assets/test2.mxweb", import.meta.url).href)
    // 我想保存我修改后的文件？
    // (你可以在dom元素事件函数中调用，这样可以使用一些最新的浏览器特性保存文件)
    mxcad.saveFile()
})
```

## 示例参考

在git中查看示例 [github](https://github.com/mxcad/mxcad_docs/tree/master/examples)
| [gitee](https://gitee.com/mxcadx/mxcad_docs/tree/master/examples)

或者通过 执行以下命令查看所有实例

```sh
git clone https://github.com/mxcad/mxcad_docs
cd examples
npm install -g pnpm
pnpm install
pnpm run -r dev
```

你还可以通过[演练场](#演练场)在线编辑修改代码查看运行后的效果

## 在vite中使用

1.安装vite

```sh
npm install vite -D
```

2.在项目根目录新建html文件

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>vite use mxcad</title>
</head>
<body>
    <div style="height: 600px; overflow: hidden;"> <canvas id="myCanvas"></canvas></div>
    <script type="module" src="./src/index.ts"></script>
</body>
</html>
```

3.在根目录下新建`src`目录 在`src`目录下新建`index.ts`文件（vite默认支持ts）代码如下:

```ts
import { createMxCad } from "mxcad"
import { MxFun } from "mxdraw"

createMxCad({
    canvas: "#myCanvas",
    locateFile: (fileName)=> new URL(`/node_modules/mxcad/dist/wasm/2d/${fileName}`, import.meta.url).href,
    fileUrl: new URL("../assets/test.mxweb", import.meta.url).href
})

```

4.在`src`目录下创建`assets`并复制`test.mxweb`文件到该目录下

5.在根目录下创建`vite.config.ts`文件

```ts
import { defineConfig } from "vite"

export default defineConfig({
    server: {
        headers: {
          "Cross-Origin-Opener-Policy": "same-origin",
          "Cross-Origin-Embedder-Policy": "require-corp",
        }
    }
})
```

6.完成以上步骤在根目录执行如下命令

```sh
npx vite
```

## 在webpack中使用

1.安装

```sh
npm install webpack webpack-cli copy-webpack-plugin@5 -D
```

2.在根目录下创建`webpack.config.js`文件

```js
const path = require('path');
// copy-webpack-plugin@5 兼容webpack4和5的版本请放心使用
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: process.env.development === "development" ? "development" : "production",
  entry: './src/index.js',
  devServer: {
    static: './dist',
    headers: {
      "Cross-Origin-Opener-Policy": "same-origin",
      "Cross-Origin-Embedder-Policy": "require-corp"
    }
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
  plugins: [
    new CopyWebpackPlugin([
      // 拷贝mxcad wasm 相关的核心代码 mxcad默认请求的路径是 /* 所有 需要把文件放dist2d下
      {
        from: "node_modules/mxcad/dist/wasm/2d/*",
        to: path.resolve(__dirname, "dist"),
        flatten: true
      },
      // 必须要字体文件来显示图纸中的文字，mxcad库默认请求URL路径为 /fonts/* 所有需要放在dist/fonts下
      {
        from: "node_modules/mxcad/dist/fonts",
        to: path.resolve(__dirname, "dist/fonts"),
        flatten: true,
        toType: "dir"
      },
    ])
  ],
  // mxcad 和 mxdraw库的js代码打包超过webpack默认限制的大小，需要设置hints: false关闭警告
  performance: {
    hints: false,
  }
};
```

3.在根目录新建`index.html`文件

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>起步</title>
    <script src="https://unpkg.com/lodash@4.17.20"></script>
  </head>
  <body>
     <div style="height: 600px; overflow: hidden;"> <canvas id="myCanvas"></canvas></div>
    <script src="./src/index.js"></script>
  </body>
</html>
```

4.在根目录新建`src`目录 并在`src`目录下新建`index.js`文件

```js
createMxCad({
    canvas: "#myCanvas",
    // 通过需要访问：http:xxx.com/test.mxweb 获取对应的文件
    // 请你自行提供该文件
    fileUrl: "test.mxweb"
})
```

5.完成上述步骤执行`npx webpack serve`命令运行查看效果


## 在h5中直接使用

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <script src="https://unpkg.com/mxdraw" crossorigin="anonymous"></script>
    <script src="https://unpkg.com/mxcad" crossorigin="anonymous"></script>
    <script>
        const { MxFun } = Mx
        const { createMxCad } = mxcad
        window.onload = function() {
            createMxCad({
                canvas: "#myCanvas",
                locateFile(fileName) {
                    /***
                     * 你可以不设置locateFile属性，
                     * 默认通过该https://unpkg.com CDN加载或者无法使用SharedArrayBuffer的情况
                     * mxcad会自动引入2d-st的资源
                     * 2d与2d-st的区别就是2d-st未使用worker多线程优化，
                     * 导致在打开图纸时会阻塞js线程导致打开图纸过程中页面卡死的情况
                     * 推荐使用2d wasm资源，你需要在服务器设置响应头：
                     * "Cross-Origin-Opener-Policy": "same-origin",
                     * "Cross-Origin-Embedder-Policy": "require-corp"
                     * 
                     * 并对于2d wasm资源遵从浏览器同源策略
                     * (也就是说 locateFile返回的url需要是和自己的服务器域名相同的域名端口才行)
                     * */
                    return "https://unpkg.com/mxcad/dist/wasm/2d-st/" + fileName
                },
                // 请自行在静态服务器上添加test.mxweb文件 如http://xxx.com/test.mxweb
                fileUrl: "test.mxweb"
            })
        }
    </script>
</head>

<body>
    <div style="height: 600px; overflow: hidden;"> <canvas id="myCanvas" style="height: 300px"></canvas></div>
</body>

</html>
```


## createMxCad 的实现

```tsx
// 这是createMxCad 实现的大致代码
// 如果你希望整个创建过程是透明公开的,
// 你可以不使用createMxCad 而是使用下面的代码自行创建
import { MxFun, loadCoreCode } from "mxdraw";
import { loadMxCADassembly } from "mxcad"
export default () => {
    loadCoreCode()
    .then(() =>  loadMxCADassembly((MxCpp)=> {
            MxFun.setIniset({
                EnableIntelliSelect: true
            })
            MxFun.createMxObject({
                canvasId: "myCanvas",
                isCPPMxCAD: true,
                callback(mxDraw, dom) {
                    mxDraw.initRendererParam({ webgl2: true });
                    mxDraw.setMouseMiddlePan(true);
                    mxDraw.on("initObject", () => {
                        const THREE = MxFun.getMxFunTHREE()
                        let size = new THREE.Vector2();
                        mxDraw.getRenderer().getSize(size);
                        const mxcadObj = MxCpp.App.CreateMxCAD(size.width, size.height,  "myCanvas", mxDraw.isWebgl2(), mxDraw.getId());
                        mxDraw.initMxCpp(mxcadObj);
                        mxcadObj.openWebFile("test2.mxweb");
                    });
                }
            })
        }
        ,
        (fileName: string)=> {
            // CDN 加载必须使用wasm/2d-st中的资源、因为github的限制无法使用wasm/2d 资源
            // 需要使用wasm/2d需要遵循浏览器同源策略或使用其他手段规避浏览器同源策略
            return "https://unpkg.com/mxcad/dist/wasm/2d-st/" + fileName
        }),
    )
    return (<div style="height: 600px; overflow: hidden;"><canvas id="myCanvas" style="height: 300px"></canvas></div>)
}


```

