[mxcad_3d API 文档](../README.md) / Mx3dUtils

# Class: Mx3dUtils

工具类

## Table of contents

### Constructors

- [constructor](Mx3dUtils.md#constructor)

### Methods

- [LoadFileFromUrl](Mx3dUtils.md#loadfilefromurl)
- [LoadLocalFile](Mx3dUtils.md#loadlocalfile)
- [LoadShapeFromFile](Mx3dUtils.md#loadshapefromfile)

## Constructors

### constructor

• **new Mx3dUtils**()

## Methods

### LoadFileFromUrl

▸ `Static` **LoadFileFromUrl**(`theFileUrl`, `theSaveFileName`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`string`\>

从URL地址加载文件到虚拟文件系统

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theFileUrl` | `string` | 资源URL地址 |
| `theSaveFileName` | `string` | 文件在虚拟文件系统的完整路径 |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`string`\>

成功后返回文件在虚拟文件系统中的绝对路径

___

### LoadLocalFile

▸ `Static` **LoadLocalFile**(`theFile`, `theFilePath`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `theFile` | [`File`]( https://developer.mozilla.org/en-US/docs/Web/API/File ) |
| `theFilePath` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`string`\>

___

### LoadShapeFromFile

▸ `Static` **LoadShapeFromFile**(`theFilePath`, `theFormat`): [`Mx3dShapeObject`](Mx3dShapeObject.md)[]

从虚拟文件系统中读取模型文件，返回模型文件中的形状

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theFilePath` | `string` | 模型文件的完整路径 |
| `theFormat` | [`MxFormat`](../enums/MdGe.MxFormat.md) | 模型文件的格式 |

#### Returns

[`Mx3dShapeObject`](Mx3dShapeObject.md)[]

模型文件中读取到的形状
