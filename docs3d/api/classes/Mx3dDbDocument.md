[mxcad_3d API 文档](../README.md) / Mx3dDbDocument

# Class: Mx3dDbDocument

文档类，继承自 Mx3dDbObject。

## Hierarchy

- [`Mx3dDbObject`](Mx3dDbObject.md)

  ↳ **`Mx3dDbDocument`**

## Table of contents

### Constructors

- [constructor](Mx3dDbDocument.md#constructor)

### Methods

- [abortCommand](Mx3dDbDocument.md#abortcommand)
- [addColorLabel](Mx3dDbDocument.md#addcolorlabel)
- [addShapeLabel](Mx3dDbDocument.md#addshapelabel)
- [commitCommand](Mx3dDbDocument.md#commitcommand)
- [getAccessLabel](Mx3dDbDocument.md#getaccesslabel)
- [getColorsLabel](Mx3dDbDocument.md#getcolorslabel)
- [getDocName](Mx3dDbDocument.md#getdocname)
- [getLayersLabel](Mx3dDbDocument.md#getlayerslabel)
- [getShapesLabel](Mx3dDbDocument.md#getshapeslabel)
- [getTopFreeLabels](Mx3dDbDocument.md#gettopfreelabels)
- [getView](Mx3dDbDocument.md#getview)
- [newCommand](Mx3dDbDocument.md#newcommand)
- [read](Mx3dDbDocument.md#read)
- [readFile](Mx3dDbDocument.md#readfile)
- [redo](Mx3dDbDocument.md#redo)
- [removeComponent](Mx3dDbDocument.md#removecomponent)
- [removeShapeLabel](Mx3dDbDocument.md#removeshapelabel)
- [undo](Mx3dDbDocument.md#undo)
- [write](Mx3dDbDocument.md#write)

## Constructors

### constructor

• **new Mx3dDbDocument**()

构造函数，用于初始化 Mx3dDbDocument 实例。

#### Overrides

[Mx3dDbObject](Mx3dDbObject.md).[constructor](Mx3dDbObject.md#constructor)

## Methods

### abortCommand

▸ **abortCommand**(): `void`

中止当前事务。

#### Returns

`void`

___

### addColorLabel

▸ **addColorLabel**(`theColor`): [`Mx3dDbLabel`](Mx3dDbLabel.md)

添加一个新的颜色标签。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theColor` | [`Mx3dGeColor`](Mx3dGeColor.md) | 颜色对象。 |

#### Returns

[`Mx3dDbLabel`](Mx3dDbLabel.md)

返回新增的颜色标签对象。

___

### addShapeLabel

▸ **addShapeLabel**(): [`Mx3dDbLabel`](Mx3dDbLabel.md)

添加一个新的形状标签。

#### Returns

[`Mx3dDbLabel`](Mx3dDbLabel.md)

返回新增的形状标签对象。

___

### commitCommand

▸ **commitCommand**(): `boolean`

提交当前事务。

#### Returns

`boolean`

返回布尔值，表示是否成功提交。

___

### getAccessLabel

▸ **getAccessLabel**(): [`Mx3dDbLabel`](Mx3dDbLabel.md)

获取访问入口标签。

#### Returns

[`Mx3dDbLabel`](Mx3dDbLabel.md)

返回访问入口标签对象。

___

### getColorsLabel

▸ **getColorsLabel**(): [`Mx3dDbLabel`](Mx3dDbLabel.md)

获取入口颜色标签。

#### Returns

[`Mx3dDbLabel`](Mx3dDbLabel.md)

返回入口颜色标签对象。

___

### getDocName

▸ **getDocName**(): `string`

获取文档名称。

#### Returns

`string`

返回文档名称的字符串。

___

### getLayersLabel

▸ **getLayersLabel**(): [`Mx3dDbLabel`](Mx3dDbLabel.md)

获取入口图层标签。

#### Returns

[`Mx3dDbLabel`](Mx3dDbLabel.md)

返回入口图层标签对象。

___

### getShapesLabel

▸ **getShapesLabel**(): [`Mx3dDbLabel`](Mx3dDbLabel.md)

获取入口形状标签。

#### Returns

[`Mx3dDbLabel`](Mx3dDbLabel.md)

返回入口形状标签对象。

___

### getTopFreeLabels

▸ **getTopFreeLabels**(): [`Mx3dDbLabel`](Mx3dDbLabel.md)[]

获取顶级自由标签列表。

#### Returns

[`Mx3dDbLabel`](Mx3dDbLabel.md)[]

返回顶级自由标签的数组。

___

### getView

▸ **getView**(): [`Mx3dView`](Mx3dView.md)

获取视图对象。

#### Returns

[`Mx3dView`](Mx3dView.md)

返回视图对象。

___

### newCommand

▸ **newCommand**(): `void`

开启一个事务开始。

#### Returns

`void`

___

### read

▸ **read**(`theFile`, `theFormat`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`boolean`\>

读取模型文件并解析为文档。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theFile` | [`File`]( https://developer.mozilla.org/en-US/docs/Web/API/File ) | 要读取的文件对象。 |
| `theFormat` | [`MxFormat`](../enums/MdGe.MxFormat.md) | 模型文件格式。 |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`boolean`\>

返回一个 Promise，解析结果为布尔值，表示成功或失败。

___

### readFile

▸ **readFile**(`theFilePath`, `theFormat`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theFilePath` | `string` |
| `theFormat` | [`MxFormat`](../enums/MdGe.MxFormat.md) |

#### Returns

`boolean`

___

### redo

▸ **redo**(): `boolean`

重做最后一个撤销的事务。

#### Returns

`boolean`

返回布尔值，表示是否成功重做。

___

### removeComponent

▸ **removeComponent**(`theLabel`): `void`

删除指定的组件。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theLabel` | [`Mx3dDbLabel`](Mx3dDbLabel.md) | 要删除的标签对象。 |

#### Returns

`void`

___

### removeShapeLabel

▸ **removeShapeLabel**(`theLabel`): `boolean`

删除指定的形状标签。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theLabel` | [`Mx3dDbLabel`](Mx3dDbLabel.md) | 要删除的形状标签对象。 |

#### Returns

`boolean`

返回布尔值，表示是否成功删除。

___

### undo

▸ **undo**(): `boolean`

撤销最后一个记录的事务。

#### Returns

`boolean`

返回布尔值，表示是否成功撤销。

___

### write

▸ **write**(`theFilePath`, `theFormat`): `boolean`

写入文档到指定路径。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theFilePath` | `string` | 文件路径。 |
| `theFormat` | [`MxFormat`](../enums/MdGe.MxFormat.md) | 文件格式。 |

#### Returns

`boolean`

返回布尔值，表示是否成功写入。
