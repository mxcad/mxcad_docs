[mxcad_3d API 文档](../README.md) / MxCAD3DConfig

# Interface: MxCAD3DConfig

## Indexable

▪ [x: `string`]: `any`

## Table of contents

### Properties

- [canvas](MxCAD3DConfig.md#canvas)
- [locateFile](MxCAD3DConfig.md#locatefile)
- [minHeight](MxCAD3DConfig.md#minheight)
- [minWidth](MxCAD3DConfig.md#minwidth)
- [updateCanvasSize](MxCAD3DConfig.md#updatecanvassize)

## Properties

### canvas

• **canvas**: `string` \| [`HTMLCanvasElement`]( https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement )

___

### locateFile

• `Optional` **locateFile**: (`fileName`: `string`, `base?`: `string` \| [`URL`]( https://developer.mozilla.org/en-US/docs/Web/API/URL )) => `string`

#### Type declaration

▸ (`fileName`, `base?`): `string`

##### Parameters

| Name | Type |
| :------ | :------ |
| `fileName` | `string` |
| `base?` | `string` \| [`URL`]( https://developer.mozilla.org/en-US/docs/Web/API/URL ) |

##### Returns

`string`

___

### minHeight

• `Optional` **minHeight**: `number`

canvas最小高度 默认300

___

### minWidth

• `Optional` **minWidth**: `number`

canvas最小宽度 默认300

___

### updateCanvasSize

• `Optional` **updateCanvasSize**: () => `void`

#### Type declaration

▸ (): `void`

指定更新Canvas大小的函数，不指定则默认自动处理(指定该函数则 minHeight, minWidth无效)

##### Returns

`void`
