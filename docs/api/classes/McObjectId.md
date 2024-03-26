[mxcad API 文档](../README.md) / McObjectId

# Class: McObjectId

McObjectId类表示一个模型对象的唯一标识符。

## Table of contents

### Constructors

- [constructor](McObjectId.md#constructor)

### Properties

- [id](McObjectId.md#id)
- [type](McObjectId.md#type)

### Methods

- [clone](McObjectId.md#clone)
- [erase](McObjectId.md#erase)
- [getMcDbBlockTableRecord](McObjectId.md#getmcdbblocktablerecord)
- [getMcDbCurve](McObjectId.md#getmcdbcurve)
- [getMcDbDimension](McObjectId.md#getmcdbdimension)
- [getMcDbEntity](McObjectId.md#getmcdbentity)
- [getMcDbLayerTableRecord](McObjectId.md#getmcdblayertablerecord)
- [getMcDbLinetypeTableRecord](McObjectId.md#getmcdblinetypetablerecord)
- [getMcDbObject](McObjectId.md#getmcdbobject)
- [getMcDbRasterImageDef](McObjectId.md#getmcdbrasterimagedef)
- [getMcDbTextStyleTableRecord](McObjectId.md#getmcdbtextstyletablerecord)
- [getMxDbEntity](McObjectId.md#getmxdbentity)
- [getObjectName](McObjectId.md#getobjectname)
- [isErase](McObjectId.md#iserase)
- [isKindOf](McObjectId.md#iskindof)
- [isNull](McObjectId.md#isnull)
- [isValid](McObjectId.md#isvalid)

## Constructors

### constructor

• **new McObjectId**(`id?`, `type?`)

创建一个McObjectId实例。

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `id` | `number` | `0` | 对象的唯一标识符。 |
| `type` | [`McObjectIdType`](../enums/McObjectIdType.md) | `McObjectIdType.kInvalid` | 对象的类型。 |

## Properties

### id

• **id**: `number`

___

### type

• **type**: [`McObjectIdType`](../enums/McObjectIdType.md)

## Methods

### clone

▸ **clone**(): ``null`` \| [`McDbObject`](McDbObject.md)

#### Returns

``null`` \| [`McDbObject`](McDbObject.md)

___

### erase

▸ **erase**(`isErase?`): `void`

删除对象。

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `isErase` | `boolean` | `true` |

#### Returns

`void`

___

### getMcDbBlockTableRecord

▸ **getMcDbBlockTableRecord**(): ``null`` \| [`McDbBlockTableRecord`](McDbBlockTableRecord.md)

返回MxCAD McDbBlockTableRecord 对象。

#### Returns

``null`` \| [`McDbBlockTableRecord`](McDbBlockTableRecord.md)

___

### getMcDbCurve

▸ **getMcDbCurve**(): ``null`` \| [`McDbCurve`](McDbCurve.md)

返回MxCAD McDbCurve 对象。

#### Returns

``null`` \| [`McDbCurve`](McDbCurve.md)

___

### getMcDbDimension

▸ **getMcDbDimension**(): ``null`` \| [`McDbDimension`](McDbDimension.md)

返回MxCAD McDbDimension 对象。

#### Returns

``null`` \| [`McDbDimension`](McDbDimension.md)

___

### getMcDbEntity

▸ **getMcDbEntity**(): ``null`` \| [`McDbEntity`](McDbEntity.md)

返回MxCAD McDbEntity 对象。

#### Returns

``null`` \| [`McDbEntity`](McDbEntity.md)

___

### getMcDbLayerTableRecord

▸ **getMcDbLayerTableRecord**(): ``null`` \| [`McDbLayerTableRecord`](McDbLayerTableRecord.md)

返回MxCAD McDbLayerTableRecord 对象。

#### Returns

``null`` \| [`McDbLayerTableRecord`](McDbLayerTableRecord.md)

___

### getMcDbLinetypeTableRecord

▸ **getMcDbLinetypeTableRecord**(): ``null`` \| [`McDbLinetypeTableRecord`](McDbLinetypeTableRecord.md)

返回MxCAD McDbLinetypeTableRecord 对象。

#### Returns

``null`` \| [`McDbLinetypeTableRecord`](McDbLinetypeTableRecord.md)

___

### getMcDbObject

▸ **getMcDbObject**(): ``null`` \| [`McDbObject`](McDbObject.md)

返回MxCAD McDbObject对象。

#### Returns

``null`` \| [`McDbObject`](McDbObject.md)

___

### getMcDbRasterImageDef

▸ **getMcDbRasterImageDef**(): ``null`` \| [`McDbRasterImageDef`](McDbRasterImageDef.md)

#### Returns

``null`` \| [`McDbRasterImageDef`](McDbRasterImageDef.md)

___

### getMcDbTextStyleTableRecord

▸ **getMcDbTextStyleTableRecord**(): ``null`` \| [`McDbTextStyleTableRecord`](McDbTextStyleTableRecord.md)

返回MxCAD McDbTextStyleTableRecord 对象。

#### Returns

``null`` \| [`McDbTextStyleTableRecord`](McDbTextStyleTableRecord.md)

___

### getMxDbEntity

▸ **getMxDbEntity**(): ``null`` \| `MxDbEntity`

返回MxDraw对象。

#### Returns

``null`` \| `MxDbEntity`

___

### getObjectName

▸ **getObjectName**(): `string`

返回id指向的对象名称.

#### Returns

`string`

___

### isErase

▸ **isErase**(): `boolean`

id是指向的以像，是否是删除状态.

#### Returns

`boolean`

___

### isKindOf

▸ **isKindOf**(`className`): `boolean`

判断一个对象的类型

#### Parameters

| Name | Type |
| :------ | :------ |
| `className` | `string` |

#### Returns

`boolean`

___

### isNull

▸ **isNull**(): `boolean`

id是否为NULL.

#### Returns

`boolean`

___

### isValid

▸ **isValid**(): `boolean`

id是否有效.

#### Returns

`boolean`
