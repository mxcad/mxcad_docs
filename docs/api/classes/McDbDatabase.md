[mxcad API 文档](../README.md) / McDbDatabase

# Class: McDbDatabase

表示数据库。

## Hierarchy

- [`McRxObject`](McRxObject.md)

  ↳ **`McDbDatabase`**

## Table of contents

### Constructors

- [constructor](McDbDatabase.md#constructor)

### Properties

- [imp](McDbDatabase.md#imp)

### Accessors

- [blockTable](McDbDatabase.md#blocktable)
- [currentSpace](McDbDatabase.md#currentspace)
- [dxf0](McDbDatabase.md#dxf0)
- [layerTable](McDbDatabase.md#layertable)
- [linetypeTable](McDbDatabase.md#linetypetable)
- [objectName](McDbDatabase.md#objectname)
- [textStyleTable](McDbDatabase.md#textstyletable)

### Methods

- [getBlockTable](McDbDatabase.md#getblocktable)
- [getCurrentlyColorIndex](McDbDatabase.md#getcurrentlycolorindex)
- [getCurrentlyDrawColor](McDbDatabase.md#getcurrentlydrawcolor)
- [getCurrentlyLayerName](McDbDatabase.md#getcurrentlylayername)
- [getCurrentlyLineTypeName](McDbDatabase.md#getcurrentlylinetypename)
- [getCurrentlyLineTypeScale](McDbDatabase.md#getcurrentlylinetypescale)
- [getCurrentlyTextStyleName](McDbDatabase.md#getcurrentlytextstylename)
- [getCurrentlyTrueColor](McDbDatabase.md#getcurrentlytruecolor)
- [getImp](McDbDatabase.md#getimp)
- [getJson](McDbDatabase.md#getjson)
- [getLayerTable](McDbDatabase.md#getlayertable)
- [getLinetypeTable](McDbDatabase.md#getlinetypetable)
- [getTextStyleTable](McDbDatabase.md#gettextstyletable)
- [handleToIdIndex](McDbDatabase.md#handletoidindex)
- [initTempObject](McDbDatabase.md#inittempobject)
- [isKindOf](McDbDatabase.md#iskindof)
- [isModifyed](McDbDatabase.md#ismodifyed)
- [isNull](McDbDatabase.md#isnull)
- [resetModificationStatus](McDbDatabase.md#resetmodificationstatus)
- [setCurrentlyColorIndex](McDbDatabase.md#setcurrentlycolorindex)
- [setCurrentlyLayerName](McDbDatabase.md#setcurrentlylayername)
- [setCurrentlyLineTypeName](McDbDatabase.md#setcurrentlylinetypename)
- [setCurrentlyLineTypeScale](McDbDatabase.md#setcurrentlylinetypescale)
- [setCurrentlyTextStyle](McDbDatabase.md#setcurrentlytextstyle)
- [setCurrentlyTrueColor](McDbDatabase.md#setcurrentlytruecolor)
- [setJson](McDbDatabase.md#setjson)

## Constructors

### constructor

• **new McDbDatabase**(`imp?`)

构造函数。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `imp?` | `any` | 内部实现对象。 |

#### Overrides

[McRxObject](McRxObject.md).[constructor](McRxObject.md#constructor)

## Properties

### imp

• `Protected` **imp**: `any` = `0`

内部实现对象。

#### Inherited from

[McRxObject](McRxObject.md).[imp](McRxObject.md#imp)

## Accessors

### blockTable

• `get` **blockTable**(): [`McDbBlockTable`](McDbBlockTable.md)

#### Returns

[`McDbBlockTable`](McDbBlockTable.md)

___

### currentSpace

• `get` **currentSpace**(): [`McDbBlockTableRecord`](McDbBlockTableRecord.md)

返回当前空间块表记录

#### Returns

[`McDbBlockTableRecord`](McDbBlockTableRecord.md)

块表记录

___

### dxf0

• `get` **dxf0**(): `string`

获取 DXF 代码 0 的值。

#### Returns

`string`

#### Inherited from

McRxObject.dxf0

___

### layerTable

• `get` **layerTable**(): [`McDbLayerTable`](McDbLayerTable.md)

#### Returns

[`McDbLayerTable`](McDbLayerTable.md)

___

### linetypeTable

• `get` **linetypeTable**(): [`McDbLinetypeTable`](McDbLinetypeTable.md)

#### Returns

[`McDbLinetypeTable`](McDbLinetypeTable.md)

___

### objectName

• `get` **objectName**(): `string`

获取对象名称。

#### Returns

`string`

#### Inherited from

McRxObject.objectName

___

### textStyleTable

• `get` **textStyleTable**(): [`McDbTextStyleTable`](McDbTextStyleTable.md)

#### Returns

[`McDbTextStyleTable`](McDbTextStyleTable.md)

## Methods

### getBlockTable

▸ **getBlockTable**(): [`McDbBlockTable`](McDbBlockTable.md)

获取块表。

#### Returns

[`McDbBlockTable`](McDbBlockTable.md)

块表。

___

### getCurrentlyColorIndex

▸ **getCurrentlyColorIndex**(): `number`

获取当前颜色索引。

#### Returns

`number`

当前颜色索引。

___

### getCurrentlyDrawColor

▸ **getCurrentlyDrawColor**(): `Color`

获取当前绘图使用的颜色

#### Returns

`Color`

___

### getCurrentlyLayerName

▸ **getCurrentlyLayerName**(): `string`

获取当前层名称。

#### Returns

`string`

当前层名称。

___

### getCurrentlyLineTypeName

▸ **getCurrentlyLineTypeName**(): `string`

获取当前线型名称。

#### Returns

`string`

当前线型名称。

___

### getCurrentlyLineTypeScale

▸ **getCurrentlyLineTypeScale**(): `number`

获取当前线型比例。

#### Returns

`number`

当前线型比例。

___

### getCurrentlyTextStyleName

▸ **getCurrentlyTextStyleName**(): `string`

获取当前文字样式名称。

#### Returns

`string`

当前文字样式名称。

___

### getCurrentlyTrueColor

▸ **getCurrentlyTrueColor**(): [`McCmColor`](McCmColor.md)

获取当前CAD颜色。

#### Returns

[`McCmColor`](McCmColor.md)

当前CAD颜色。

___

### getImp

▸ **getImp**(): `any`

获取内部实现对象。

#### Returns

`any`

内部实现对象。

#### Inherited from

[McRxObject](McRxObject.md).[getImp](McRxObject.md#getimp)

___

### getJson

▸ **getJson**(): `string`

获取 JSON 格式的字符串。

#### Returns

`string`

JSON 格式的字符串。

#### Inherited from

[McRxObject](McRxObject.md).[getJson](McRxObject.md#getjson)

___

### getLayerTable

▸ **getLayerTable**(): [`McDbLayerTable`](McDbLayerTable.md)

获取层表。

#### Returns

[`McDbLayerTable`](McDbLayerTable.md)

层表。

___

### getLinetypeTable

▸ **getLinetypeTable**(): [`McDbLinetypeTable`](McDbLinetypeTable.md)

获取线型表。

#### Returns

[`McDbLinetypeTable`](McDbLinetypeTable.md)

线型表。

___

### getTextStyleTable

▸ **getTextStyleTable**(): [`McDbTextStyleTable`](McDbTextStyleTable.md)

获取文字样式表。

#### Returns

[`McDbTextStyleTable`](McDbTextStyleTable.md)

文字样式表。

___

### handleToIdIndex

▸ **handleToIdIndex**(`sHandle`): [`McObjectId`](McObjectId.md)

根据对象的句柄返回对象id.

#### Parameters

| Name | Type |
| :------ | :------ |
| `sHandle` | `string` |

#### Returns

[`McObjectId`](McObjectId.md)

___

### initTempObject

▸ **initTempObject**(`imp`): `void`

初始化临时对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `imp` | `any` | 内部实现对象。 |

#### Returns

`void`

#### Inherited from

[McRxObject](McRxObject.md).[initTempObject](McRxObject.md#inittempobject)

___

### isKindOf

▸ **isKindOf**(`sObjectName`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `sObjectName` | `string` |

#### Returns

`boolean`

#### Inherited from

[McRxObject](McRxObject.md).[isKindOf](McRxObject.md#iskindof)

___

### isModifyed

▸ **isModifyed**(): `boolean`

当前数据库是否被修改

#### Returns

`boolean`

___

### isNull

▸ **isNull**(): `any`

#### Returns

`any`

#### Inherited from

[McRxObject](McRxObject.md).[isNull](McRxObject.md#isnull)

___

### resetModificationStatus

▸ **resetModificationStatus**(): `void`

把当前数据库修改状态重置成未修改状态

#### Returns

`void`

___

### setCurrentlyColorIndex

▸ **setCurrentlyColorIndex**(`colorIndex`): `any`

设置当前颜色索引。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `colorIndex` | `number` | 颜色索引。 |

#### Returns

`any`

___

### setCurrentlyLayerName

▸ **setCurrentlyLayerName**(`sName`): `void`

设置当前层名称。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `sName` | `string` | 层名称。 |

#### Returns

`void`

___

### setCurrentlyLineTypeName

▸ **setCurrentlyLineTypeName**(`sName`): `void`

设置当前线型名称。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `sName` | `string` | 线型名称。 |

#### Returns

`void`

___

### setCurrentlyLineTypeScale

▸ **setCurrentlyLineTypeScale**(`val`): `number`

设置当前线型比例。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val` | `number` | 线型比例。 |

#### Returns

`number`

当前线型比例。

___

### setCurrentlyTextStyle

▸ **setCurrentlyTextStyle**(`sName`): `void`

设置当前文字样式名称。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `sName` | `string` | 文字样式名称。 |

#### Returns

`void`

___

### setCurrentlyTrueColor

▸ **setCurrentlyTrueColor**(`color`): `any`

设置当前CAD颜色。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`McCmColor`](McCmColor.md) | CAD颜色。 |

#### Returns

`any`

___

### setJson

▸ **setJson**(`str`): `boolean`

设置 JSON 格式的字符串。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | JSON 格式的字符串。 |

#### Returns

`boolean`

是否设置成功。

#### Inherited from

[McRxObject](McRxObject.md).[setJson](McRxObject.md#setjson)
