[mxcad API 文档](../README.md) / MxDraw3dConfig

# Interface: MxDraw3dConfig

MxDraw3d的构造函数参数 的可配置选项

## Hierarchy

- [`WasmConfig`](WasmConfig.md)

  ↳ **`MxDraw3dConfig`**

## Implemented by

- [`MxDraw3d`](../classes/MxDraw3d.md)

## Indexable

▪ [x: `string`]: `any`

## Table of contents

### Properties

- [canvas](MxDraw3dConfig.md#canvas)
- [locateFile](MxDraw3dConfig.md#locatefile)
- [minHeight](MxDraw3dConfig.md#minheight)
- [minWidth](MxDraw3dConfig.md#minwidth)
- [onRuntimeInitialized](MxDraw3dConfig.md#onruntimeinitialized)
- [print](MxDraw3dConfig.md#print)
- [printErr](MxDraw3dConfig.md#printerr)
- [updateCanvasSize](MxDraw3dConfig.md#updatecanvassize)
- [wasmBinary](MxDraw3dConfig.md#wasmbinary)

## Properties

### canvas

• **canvas**: `string` \| [`HTMLCanvasElement`]( https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement )

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

#### Inherited from

[WasmConfig](WasmConfig.md).[locateFile](WasmConfig.md#locatefile)

___

### minHeight

• `Optional` **minHeight**: `number`

canvas最小高度 默认300

___

### minWidth

• `Optional` **minWidth**: `number`

canvas最小宽度 默认300

___

### onRuntimeInitialized

• `Optional` **onRuntimeInitialized**: () => `void`

#### Type declaration

▸ (): `void`

监听运行时初始化

##### Returns

`void`

#### Inherited from

[WasmConfig](WasmConfig.md).[onRuntimeInitialized](WasmConfig.md#onruntimeinitialized)

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

#### Inherited from

[WasmConfig](WasmConfig.md).[print](WasmConfig.md#print)

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

#### Inherited from

[WasmConfig](WasmConfig.md).[printErr](WasmConfig.md#printerr)

___

### updateCanvasSize

• `Optional` **updateCanvasSize**: () => `void`

#### Type declaration

▸ (): `void`

指定更新Canvas大小的函数，不指定则默认自动处理(指定该函数则 minHeight, minWidth无效)

##### Returns

`void`

___

### wasmBinary

• `Optional` **wasmBinary**: [`ArrayBuffer`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer )

二进制数据 设置wasmBinary 则 locateFile 不生效*

#### Inherited from

[WasmConfig](WasmConfig.md).[wasmBinary](WasmConfig.md#wasmbinary)
