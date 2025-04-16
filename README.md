# Quick Start

> MxCAD must be used together with MxDraw. If you are not familiar with the MxDraw library, please refer to: <https://mxcadx.gitee.io/mxdraw_docs/>

> Contact information: 710714273@qq.com

![](https://www.webcadsdk.com/img/WX-Two-dimensional-code.png)

## Installation

### CDN

```html
<script src="https://unpkg.com/mxdraw/dist/mxdraw.umd.js" ></script>
<script src="https://unpkg.com/mxcad/dist/mxcad.umd.js"></script>
```

### NPM

```sh
npm install mxdraw mxcad
```

## Basic Usage

::: tip Important Notice

Since MxCAD uses `SharedArrayBuffer` by default,
the corresponding response headers need to be set on the server side:

```js
// Take Node.js as an example
const http = require('http');
http.createServer((req, res)=> {
    res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
    res.setHeader("Cross-Origin-Embedder-Policy", "require-corp");
})

```

:::

A canvas element is required.

```html
<div style="height: 600px; overflow: hidden;"> <canvas id="myCanvas"></canvas></div>
```

It is recommended to use Vite as the build tool.

```ts
import { createMxCad } from "mxcad"
createMxCad({
    canvas: "#myCanvas",
    locateFile: (fileName)=> new URL(`/node_modules/mxcad/dist/wasm/2d/${fileName}`, import.meta.url).href,
    fileUrl: new URL("../assets/test.mxweb", import.meta.url).href
}).then((mxcad)=> {
    // I want to display a different file?
    mxcad.openWebFile(new URL("../assets/test2.mxweb", import.meta.url).href)
    // I want to save the file after my modification?
    // (You can call it in the DOM element event function, so that you can use some of the latest browser features to save the file)
    mxcad.saveFile()
})
```

## Example References

Check the examples on Git [github](https://github.com/mxcad/mxcad_docs/tree/master/examples)
| [gitee](https://gitee.com/mxcadx/mxcad_docs/tree/master/examples)

Or view all examples by executing the following commands:

```sh
git clone https://github.com/mxcad/mxcad_docs
cd examples
npm install -g pnpm
pnpm install
pnpm run -r dev
```

You can also edit and modify the code online through the [Playground](#Playground) to see the effect after running.

## Usage in Vite

1. Install Vite

```sh
npm install vite -D
```

2. Create a new HTML file in the root directory of the project

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

3. Create a new `src` directory in the root directory, and create a new `index.ts` file in the `src` directory (Vite supports TypeScript by default). The code is as follows:

```ts
import { createMxCad } from "mxcad"
import { MxFun } from "mxdraw"

createMxCad({
    canvas: "#myCanvas",
    locateFile: (fileName)=> new URL(`/node_modules/mxcad/dist/wasm/2d/${fileName}`, import.meta.url).href,
    fileUrl: new URL("../assets/test.mxweb", import.meta.url).href
})

```

4. Create an `assets` directory in the `src` directory and copy the `test.mxweb` file to this directory.

5. Create a `vite.config.ts` file in the root directory

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

6. After completing the above steps, execute the following command in the root directory

```sh
npx vite
```

## Usage in Webpack

1. Install

```sh
npm install webpack webpack-cli copy-webpack-plugin@5 -D
```

2. Create a `webpack.config.js` file in the root directory

```js
const path = require('path');
// copy-webpack-plugin@5 is compatible with both Webpack 4 and 5 versions, so feel free to use it.
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
      // Copy the core code related to MxCAD WASM. The default request path of MxCAD is /*, so the files need to be placed in the dist2d directory.
      {
        from: "node_modules/mxcad/dist/wasm/2d/*",
        to: path.resolve(__dirname, "dist"),
        flatten: true
      },
      // Font files are necessary to display the text in the drawings. The default requested URL path of the MxCAD library is /fonts/*, so they need to be placed in the dist/fonts directory.
      {
        from: "node_modules/mxcad/dist/fonts",
        to: path.resolve(__dirname, "dist/fonts"),
        flatten: true,
        toType: "dir"
      },
    ])
  ],
  // The packaged JavaScript code of the MxCAD and MxDraw libraries exceeds the default size limit of Webpack, and you need to set hints: false to turn off the warning.
  performance: {
    hints: false,
  }
};
```

3. Create a new `index.html` file in the root directory

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Getting Started</title>
    <script src="https://unpkg.com/lodash@4.17.20"></script>
  </head>
  <body>
     <div style="height: 600px; overflow: hidden;"> <canvas id="myCanvas"></canvas></div>
    <script src="./src/index.js"></script>
  </body>
</html>
```

4. Create a new `src` directory in the root directory, and create a new `index.js` file in the `src` directory

```js
createMxCad({
    canvas: "#myCanvas",
    // Get the corresponding file by accessing: http:xxx.com/test.mxweb
    // Please provide this file by yourself.
    fileUrl: "test.mxweb"
})
```

5. After completing the above steps, execute the `npx webpack serve` command to run and view the effect.


## Direct Usage in H5

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
                     * You can not set the locateFile property.
                     * By default, it is loaded via the https://unpkg.com CDN, or in the case where SharedArrayBuffer cannot be used,
                     * MxCAD will automatically introduce the 2d-st resources.
                     * The difference between 2d and 2d-st is that 2d-st does not use worker multithreading optimization,
                     * which will cause the JavaScript thread to be blocked when opening the drawing, resulting in the page freezing during the process of opening the drawing.
                     * It is recommended to use the 2d WASM resources. You need to set the response headers on the server:
                     * "Cross-Origin-Opener-Policy": "same-origin",
                     * "Cross-Origin-Embedder-Policy": "require-corp"
                     * 
                     * And comply with the browser's same-origin policy for 2d WASM resources.
                     * (That is to say, the URL returned by locateFile needs to be the same domain name and port as your own server's domain name.)
                     * */
                    return "https://unpkg.com/mxcad/dist/wasm/2d-st/" + fileName
                },
                // Please add the test.mxweb file to the static server by yourself, such as http://xxx.com/test.mxweb
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


## Implementation of createMxCad

```tsx
// This is the approximate code for the implementation of createMxCad.
// If you want the entire creation process to be transparent and public,
// you can not use createMxCad but use the following code to create it yourself.
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
            // When loading via CDN, the resources in wasm/2d-st must be used. Due to the limitations of GitHub, the wasm/2d resources cannot be used.
            // To use the wasm/2d resources, you need to follow the browser's same-origin policy or use other means to bypass the browser's same-origin policy.
            return "https://unpkg.com/mxcad/dist/wasm/2d-st/" + fileName
        }),
    )
    return (<div style="height: 600px; overflow: hidden;"><canvas id="myCanvas" style="height: 300px"></canvas></div>)
}


``` 