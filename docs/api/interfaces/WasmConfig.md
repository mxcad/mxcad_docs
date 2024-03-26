[mxcad API 文档](../README.md) / WasmConfig

# Interface: WasmConfig

wasm importObject 的可配置选项

## Hierarchy

- **`WasmConfig`**

  ↳ [`MxDraw3dConfig`](MxDraw3dConfig.md)

  ↳ [`MxDraw3d`](../classes/MxDraw3d.md)

## Table of contents

### Properties

- [locateFile](WasmConfig.md#locatefile)
- [onRuntimeInitialized](WasmConfig.md#onruntimeinitialized)
- [print](WasmConfig.md#print)
- [printErr](WasmConfig.md#printerr)
- [wasmBinary](WasmConfig.md#wasmbinary)

## Properties

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

___

### onRuntimeInitialized

• `Optional` **onRuntimeInitialized**: () => `void`

#### Type declaration

▸ (): `void`

监听运行时初始化

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

___

### wasmBinary

• `Optional` **wasmBinary**: [`ArrayBuffer`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer )

二进制数据 设置wasmBinary 则 locateFile 不生效*
