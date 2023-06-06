[mxcad API 文档](../README.md) / MxDraw3d

# Class: MxDraw3d

MxDraw3d的构造函数参数 的可配置选项

## Hierarchy

- [`WasmConfig`](../interfaces/WasmConfig.md)

  ↳ **`MxDraw3d`**

## Implements

- [`MxDraw3dConfig`](../interfaces/MxDraw3dConfig.md)

## Indexable

▪ [x: `string`]: `any`

## Table of contents

### Constructors

- [constructor](MxDraw3d.md#constructor)

### Properties

- [HEAPU8](MxDraw3d.md#heapu8)
- [\_malloc](MxDraw3d.md#_malloc)
- [canvas](MxDraw3d.md#canvas)
- [ctx](MxDraw3d.md#ctx)
- [locateFile](MxDraw3d.md#locatefile)
- [onRuntimeInitialized](MxDraw3d.md#onruntimeinitialized)
- [open3DFile](MxDraw3d.md#open3dfile)
- [openFromUrl](MxDraw3d.md#openfromurl)
- [print](MxDraw3d.md#print)
- [printErr](MxDraw3d.md#printerr)
- [ready](MxDraw3d.md#ready)
- [updateCanvasSize](MxDraw3d.md#updatecanvassize)
- [wasmBinary](MxDraw3d.md#wasmbinary)
- [onloadWasmMxDraw3dModel](MxDraw3d.md#onloadwasmmxdraw3dmodel)

### Methods

- [displayGround](MxDraw3d.md#displayground)
- [displayObject](MxDraw3d.md#displayobject)
- [eraseObject](MxDraw3d.md#eraseobject)
- [fitAllObjects](MxDraw3d.md#fitallobjects)
- [openBRepFromMemory](MxDraw3d.md#openbrepfrommemory)
- [openFromMemory](MxDraw3d.md#openfrommemory)
- [pauseMainLoop](MxDraw3d.md#pausemainloop)
- [removeAllObjects](MxDraw3d.md#removeallobjects)
- [resumeMainLoop](MxDraw3d.md#resumemainloop)
- [setCanvasSize](MxDraw3d.md#setcanvassize)
- [setCubemapBackground](MxDraw3d.md#setcubemapbackground)

## Constructors

### constructor

• **new MxDraw3d**(`options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`MxDraw3dConfig`](../interfaces/MxDraw3dConfig.md) |

## Properties

### HEAPU8

• **HEAPU8**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `set` | (`dataArray`: [`Uint8Array`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array ), `dataBuffer`: `Buffer`) => `void` |

___

### \_malloc

• **\_malloc**: (`len`: `number`) => `Buffer`

#### Type declaration

▸ (`len`): `Buffer`

##### Parameters

| Name | Type |
| :------ | :------ |
| `len` | `number` |

##### Returns

`Buffer`

___

### canvas

• **canvas**: [`HTMLCanvasElement`]( https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement )

#### Implementation of

[MxDraw3dConfig](../interfaces/MxDraw3dConfig.md).[canvas](../interfaces/MxDraw3dConfig.md#canvas)

___

### ctx

• **ctx**: ``null`` \| [`WebGLRenderingContext`]( https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext ) \| [`WebGL2RenderingContext`]( https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext )

___

### locateFile

• `Optional` **locateFile**: (`wasmURL`: `string`, `baseURL`: `string` \| [`URL`]( https://developer.mozilla.org/en-US/docs/Web/API/URL )) => `string`

#### Type declaration

▸ (`wasmURL`, `baseURL?`): `string`

手动指定wasm文件位置

##### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `wasmURL` | `string` | `undefined` |
| `baseURL` | `string` \| [`URL`]( https://developer.mozilla.org/en-US/docs/Web/API/URL ) | `self.location.href` |

##### Returns

`string`

#### Implementation of

[MxDraw3dConfig](../interfaces/MxDraw3dConfig.md).[locateFile](../interfaces/MxDraw3dConfig.md#locatefile)

#### Inherited from

[WasmConfig](../interfaces/WasmConfig.md).[locateFile](../interfaces/WasmConfig.md#locatefile)

___

### onRuntimeInitialized

• `Optional` **onRuntimeInitialized**: () => `void`

#### Type declaration

▸ (): `void`

监听运行时初始化

##### Returns

`void`

#### Implementation of

[MxDraw3dConfig](../interfaces/MxDraw3dConfig.md).[onRuntimeInitialized](../interfaces/MxDraw3dConfig.md#onruntimeinitialized)

#### Inherited from

[WasmConfig](../interfaces/WasmConfig.md).[onRuntimeInitialized](../interfaces/WasmConfig.md#onruntimeinitialized)

___

### open3DFile

• **open3DFile**: (`file`: [`File`]( https://developer.mozilla.org/en-US/docs/Web/API/File )) => `void`

#### Type declaration

▸ (`file`): `void`

通过浏览器器File对象打开3D文件

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `file` | [`File`]( https://developer.mozilla.org/en-US/docs/Web/API/File ) | File对象 |

##### Returns

`void`

___

### openFromUrl

• **openFromUrl**: (`name`: `string`, `fileUrl`: `string`) => `void`

#### Type declaration

▸ (`name`, `fileUrl`): `void`

从Url打开

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | 名称 是生成渲染3D对象的唯一标识 |
| `fileUrl` | `string` | 文件路径 |

##### Returns

`void`

___

### print

• `Optional` **print**: (`theText`: `string`) => `string`

#### Type declaration

▸ (`theText`): `string`

打印

##### Parameters

| Name | Type |
| :------ | :------ |
| `theText` | `string` |

##### Returns

`string`

#### Implementation of

[MxDraw3dConfig](../interfaces/MxDraw3dConfig.md).[print](../interfaces/MxDraw3dConfig.md#print)

#### Inherited from

[WasmConfig](../interfaces/WasmConfig.md).[print](../interfaces/WasmConfig.md#print)

___

### printErr

• `Optional` **printErr**: (`theText`: `string`) => `void`

#### Type declaration

▸ (`theText`): `void`

打印错误

##### Parameters

| Name | Type |
| :------ | :------ |
| `theText` | `string` |

##### Returns

`void`

#### Implementation of

[MxDraw3dConfig](../interfaces/MxDraw3dConfig.md).[printErr](../interfaces/MxDraw3dConfig.md#printerr)

#### Inherited from

[WasmConfig](../interfaces/WasmConfig.md).[printErr](../interfaces/WasmConfig.md#printerr)

___

### ready

• **ready**: [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`MxDraw3d`](MxDraw3d.md)\>

完成初始化

___

### updateCanvasSize

• **updateCanvasSize**: () => `void`

#### Type declaration

▸ (): `void`

更新画布大小

##### Returns

`void`

#### Implementation of

[MxDraw3dConfig](../interfaces/MxDraw3dConfig.md).[updateCanvasSize](../interfaces/MxDraw3dConfig.md#updatecanvassize)

___

### wasmBinary

• `Optional` **wasmBinary**: [`ArrayBuffer`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer )

二进制数据 设置wasmBinary 则 locateFile 不生效*

#### Implementation of

[MxDraw3dConfig](../interfaces/MxDraw3dConfig.md).[wasmBinary](../interfaces/MxDraw3dConfig.md#wasmbinary)

#### Inherited from

[WasmConfig](../interfaces/WasmConfig.md).[wasmBinary](../interfaces/WasmConfig.md#wasmbinary)

___

### onloadWasmMxDraw3dModel

▪ `Static` **onloadWasmMxDraw3dModel**: (`mxDraw3d`: [`MxDraw3d`](MxDraw3d.md)) => `void`

#### Type declaration

▸ (`mxDraw3d`): `void`

监听wasm 文件加载成功事件

##### Parameters

| Name | Type |
| :------ | :------ |
| `mxDraw3d` | [`MxDraw3d`](MxDraw3d.md) |

##### Returns

`void`

## Methods

### displayGround

▸ **displayGround**(`is`): `void`

* 显示地面或地面网格

#### Parameters

| Name | Type |
| :------ | :------ |
| `is` | `boolean` |

#### Returns

`void`

___

### displayObject

▸ **displayObject**(`name`): `boolean`

显示对象

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`boolean`

___

### eraseObject

▸ **eraseObject**(`name`): `boolean`

擦除对象

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`boolean`

___

### fitAllObjects

▸ **fitAllObjects**(`is`): `void`

适应所有对象

#### Parameters

| Name | Type |
| :------ | :------ |
| `is` | `boolean` |

#### Returns

`void`

___

### openBRepFromMemory

▸ **openBRepFromMemory**(`fileName`, `dataBuffer`, `len`, `is?`): `boolean`

从内存打开

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fileName` | `string` | 表示文件名称 (可通过浏览器 File对象的name属性或者自定义) 是生成渲染3D对象的唯一标识 |
| `dataBuffer` | `Buffer` | 文件数据的缓冲区 |
| `len` | `number` | 缓冲区的长度 |
| `is?` | `boolean` | 是否为压缩格式 |

#### Returns

`boolean`

___

### openFromMemory

▸ **openFromMemory**(`fileName`, `dataBuffer`, `len`, `is?`): `boolean`

从内存打开

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fileName` | `string` | 表示文件名称 (可通过浏览器 File对象的name属性或者自定义) 是生成渲染3D对象的唯一标识 |
| `dataBuffer` | `Buffer` | 文件数据的缓冲区 |
| `len` | `number` | 缓冲区的长度 |
| `is?` | `boolean` | 是否为压缩格式 |

#### Returns

`boolean`

___

### pauseMainLoop

▸ **pauseMainLoop**(): `void`

暂停主循环

#### Returns

`void`

___

### removeAllObjects

▸ **removeAllObjects**(): `void`

删除所有对象

#### Returns

`void`

___

### resumeMainLoop

▸ **resumeMainLoop**(): `void`

恢复主循环

#### Returns

`void`

___

### setCanvasSize

▸ **setCanvasSize**(`w`, `h`, `noUpdate?`): `void`

设置Canvas大小

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `w` | `number` | 宽度 |
| `h` | `number` | 高度 |
| `noUpdate?` | `boolean` | 不更新调整侦听器大小 默认 是true |

#### Returns

`void`

___

### setCubemapBackground

▸ **setCubemapBackground**(`url`): `void`

设置多维数据集贴图背景

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |

#### Returns

`void`
