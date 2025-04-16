[mxcad_3d API documentation](../README. md)/Mx3dUtils

# Class: Mx3dUtils

Tool category

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

Load files from URL address to virtual file system

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheFileURL | string | Resource URL address|
|TheSaveFileName | string | The complete path of the file in the virtual file system|

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`string`\>

Return the absolute path of the file in the virtual file system after success

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

Read the model file from the virtual file system and return the shapes in the model file

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheFilePath | string | The complete path of the model file|
|TheFormat | [MxFormat] (../enums/MdGe. MxFormat. md) | Format of model files|

#### Returns

[`Mx3dShapeObject`](Mx3dShapeObject.md)[]

The shape read from the model file
