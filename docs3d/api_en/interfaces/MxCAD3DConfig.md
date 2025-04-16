[mxcad_3d API documentation](../README. md)/MxCAD3DConfig

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

The default minimum height for canvas is 300

___

### minWidth

• `Optional` **minWidth**: `number`

The default minimum width of canvas is 300

___

### updateCanvasSize

• `Optional` **updateCanvasSize**: () => `void`

#### Type declaration

▸ (): `void`

Specify the function to update Canvas size, if not specified, it will be automatically processed by default (specifying this function will result in minHeight, minWidth is invalid)

##### Returns

`void`
