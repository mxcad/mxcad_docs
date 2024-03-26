[mxcad API 文档](../README.md) / MxCadConfig

# Interface: MxCadConfig

createMxCad 的参数配置

## Table of contents

### Properties

- [canvas](MxCadConfig.md#canvas)
- [fileUrl](MxCadConfig.md#fileurl)
- [fontspath](MxCadConfig.md#fontspath)
- [locateFile](MxCadConfig.md#locatefile)
- [middlePan](MxCadConfig.md#middlepan)
- [networkFonts](MxCadConfig.md#networkfonts)
- [onInit](MxCadConfig.md#oninit)
- [onOpenFileComplete](MxCadConfig.md#onopenfilecomplete)
- [openParameter](MxCadConfig.md#openparameter)
- [registdata](MxCadConfig.md#registdata)
- [registfile](MxCadConfig.md#registfile)
- [viewBackgroundColor](MxCadConfig.md#viewbackgroundcolor)
- [wasmBinary](MxCadConfig.md#wasmbinary)

## Properties

### canvas

• `Optional` **canvas**: `string` \| [`HTMLCanvasElement`]( https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement )

当通过 MxFun.getCurrentDraw 未发现当前mxDraw实例时，
会通过 canvas属性(值可以是css选择器字符串也可以是一个canvas元素)来创建mxdraw实例
如果想要获得这个mxDraw实例 只需要调用mxdraw包中导出的 MxFun.getCurrentDraw方法即可

___

### fileUrl

• `Optional` **fileUrl**: `string`

需要初始化打开的文件url路径

___

### fontspath

• `Optional` **fontspath**: `string`

字体文件加载路径，默认是fonts

___

### locateFile

• `Optional` **locateFile**: (`fileName`: `string`, `base?`: `string` \| [`URL`]( https://developer.mozilla.org/en-US/docs/Web/API/URL )) => `string`

#### Type declaration

▸ (`fileName`, `base?`): `string`

获取加载wasm相关文件(wasm/js/worker.js)路径位置

**`Abstract`**

本质上locateFile配置函数就是返回wasm相关文件在自己的服务器上的位置
          在npm包中`node_modules/mxcad/dist/wasm/2d/`下的文件就是支持2d的相关wasm文件

**`Example`**

```js
// 在vite中只需要如下代码:
locateFile(fileName) { return new URL("/node_modules/mxcad/dist/wasm/2d/${fileName}", import.meta.url).href}
```

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fileName` | `string` | wasm相关的文件名称 |
| `base?` | `string` \| [`URL`]( https://developer.mozilla.org/en-US/docs/Web/API/URL ) | 相对于js调用位置的http URL绝对路径 |

##### Returns

`string`

filePath 默认采用base + fileName

___

### middlePan

• `Optional` **middlePan**: `number` \| `boolean`

鼠标中间键操作设置

___

### networkFonts

• `Optional` **networkFonts**: `string`[]

服务器上可供加载的字体列表

___

### onInit

• `Optional` **onInit**: [`Function`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function )

mxdraw和mxcad 核心代码加载完成初始化的回调
onInit默认值函数如下实例所示（请根据你的业务需求自行修改）

**`Example`**

```js
import { MxFun } from "mxdraw"
onInit() {
 MxFun.setIniset({
      // 启用对象选择功能.
     EnableIntelliSelect: true,
      // 选择类型
     IntelliSelectType: 1,
      // 是否开启多个选择
     multipleSelect: false,
  });
}
```

___

### onOpenFileComplete

• `Optional` **onOpenFileComplete**: [`Function`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function )

监听打开文件成功回调事件

___

### openParameter

• `Optional` **openParameter**: `object`

打开文件参数设置

___

### registdata

• `Optional` **registdata**: `string`

注册数据

___

### registfile

• `Optional` **registfile**: `string`

注册文件

___

### viewBackgroundColor

• `Optional` **viewBackgroundColor**: `Object`

视区背景颜色

#### Type declaration

| Name | Type |
| :------ | :------ |
| `blue` | `number` |
| `green` | `number` |
| `red` | `number` |

___

### wasmBinary

• `Optional` **wasmBinary**: [`ArrayBuffer`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer )

WebAssembly 模块二进制文件 默认情况无需配置 *
