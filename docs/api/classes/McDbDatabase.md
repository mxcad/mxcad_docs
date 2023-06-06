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

- [Dxf0](McDbDatabase.md#dxf0)
- [ObjectName](McDbDatabase.md#objectname)

### Methods

- [CurrentSpace](McDbDatabase.md#currentspace)
- [GetBlockTable](McDbDatabase.md#getblocktable)
- [GetCurrentlyColorIndex](McDbDatabase.md#getcurrentlycolorindex)
- [GetCurrentlyLayerName](McDbDatabase.md#getcurrentlylayername)
- [GetCurrentlyLineTypeName](McDbDatabase.md#getcurrentlylinetypename)
- [GetCurrentlyLineTypeScale](McDbDatabase.md#getcurrentlylinetypescale)
- [GetCurrentlyTextStyleName](McDbDatabase.md#getcurrentlytextstylename)
- [GetCurrentlyTrueColor](McDbDatabase.md#getcurrentlytruecolor)
- [GetLayerTable](McDbDatabase.md#getlayertable)
- [GetLinetypeTable](McDbDatabase.md#getlinetypetable)
- [GetTextStyleTable](McDbDatabase.md#gettextstyletable)
- [SetCurrentlyColorIndex](McDbDatabase.md#setcurrentlycolorindex)
- [SetCurrentlyLayerName](McDbDatabase.md#setcurrentlylayername)
- [SetCurrentlyLineTypeName](McDbDatabase.md#setcurrentlylinetypename)
- [SetCurrentlyLineTypeScale](McDbDatabase.md#setcurrentlylinetypescale)
- [SetCurrentlyTextStyle](McDbDatabase.md#setcurrentlytextstyle)
- [SetCurrentlyTrueColor](McDbDatabase.md#setcurrentlytruecolor)
- [getImp](McDbDatabase.md#getimp)
- [getJson](McDbDatabase.md#getjson)
- [initTempObject](McDbDatabase.md#inittempobject)
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

### Dxf0

• `get` **Dxf0**(): `string`

获取 DXF 代码 0 的值。

#### Returns

`string`

#### Inherited from

McRxObject.Dxf0

___

### ObjectName

• `get` **ObjectName**(): `string`

获取对象名称。

#### Returns

`string`

#### Inherited from

McRxObject.ObjectName

## Methods

### CurrentSpace

▸ **CurrentSpace**(): [`McDbBlockTableRecord`](McDbBlockTableRecord.md)

返回当前空间块表记录

#### Returns

[`McDbBlockTableRecord`](McDbBlockTableRecord.md)

块表记录

___

### GetBlockTable

▸ **GetBlockTable**(): [`McDbBlockTable`](McDbBlockTable.md)

获取块表。

#### Returns

[`McDbBlockTable`](McDbBlockTable.md)

块表。

___

### GetCurrentlyColorIndex

▸ **GetCurrentlyColorIndex**(): `number`

获取当前颜色索引。

#### Returns

`number`

当前颜色索引。

___

### GetCurrentlyLayerName

▸ **GetCurrentlyLayerName**(): `string`

获取当前层名称。

#### Returns

`string`

当前层名称。

___

### GetCurrentlyLineTypeName

▸ **GetCurrentlyLineTypeName**(): `string`

获取当前线型名称。

#### Returns

`string`

当前线型名称。

___

### GetCurrentlyLineTypeScale

▸ **GetCurrentlyLineTypeScale**(): `number`

获取当前线型比例。

#### Returns

`number`

当前线型比例。

___

### GetCurrentlyTextStyleName

▸ **GetCurrentlyTextStyleName**(): `string`

获取当前文字样式名称。

#### Returns

`string`

当前文字样式名称。

___

### GetCurrentlyTrueColor

▸ **GetCurrentlyTrueColor**(): [`McCmColor`](../interfaces/McCmColor.md)

获取当前真彩色。

#### Returns

[`McCmColor`](../interfaces/McCmColor.md)

当前真彩色。

___

### GetLayerTable

▸ **GetLayerTable**(): [`McDbLayerTable`](McDbLayerTable.md)

获取层表。

#### Returns

[`McDbLayerTable`](McDbLayerTable.md)

层表。

___

### GetLinetypeTable

▸ **GetLinetypeTable**(): [`McDbLinetypeTable`](McDbLinetypeTable.md)

获取线型表。

#### Returns

[`McDbLinetypeTable`](McDbLinetypeTable.md)

线型表。

___

### GetTextStyleTable

▸ **GetTextStyleTable**(): [`McDbTextStyleTable`](McDbTextStyleTable.md)

获取文字样式表。

#### Returns

[`McDbTextStyleTable`](McDbTextStyleTable.md)

文字样式表。

___

### SetCurrentlyColorIndex

▸ **SetCurrentlyColorIndex**(`colorIndex`): `any`

设置当前颜色索引。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `colorIndex` | `number` | 颜色索引。 |

#### Returns

`any`

___

### SetCurrentlyLayerName

▸ **SetCurrentlyLayerName**(`sName`): `void`

设置当前层名称。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `sName` | `string` | 层名称。 |

#### Returns

`void`

___

### SetCurrentlyLineTypeName

▸ **SetCurrentlyLineTypeName**(`sName`): `void`

设置当前线型名称。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `sName` | `string` | 线型名称。 |

#### Returns

`void`

___

### SetCurrentlyLineTypeScale

▸ **SetCurrentlyLineTypeScale**(`val`): `number`

设置当前线型比例。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val` | `number` | 线型比例。 |

#### Returns

`number`

当前线型比例。

___

### SetCurrentlyTextStyle

▸ **SetCurrentlyTextStyle**(`sName`): `void`

设置当前文字样式名称。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `sName` | `string` | 文字样式名称。 |

#### Returns

`void`

___

### SetCurrentlyTrueColor

▸ **SetCurrentlyTrueColor**(`color`): `any`

设置当前真彩色。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`McCmColor`](../interfaces/McCmColor.md) | 真彩色。 |

#### Returns

`any`

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

### initTempObject

▸ `Protected` **initTempObject**(`imp`): `void`

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
