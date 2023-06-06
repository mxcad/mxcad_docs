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

- [erase](McObjectId.md#erase)
- [getMcDbObject](McObjectId.md#getmcdbobject)
- [getMxDbEntity](McObjectId.md#getmxdbentity)
- [getObjectName](McObjectId.md#getobjectname)
- [isValid](McObjectId.md#isvalid)

## Constructors

### constructor

• **new McObjectId**(`id`, `type`)

创建一个McObjectId实例。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `number` | 对象的唯一标识符。 |
| `type` | [`McObjectIdType`](../enums/McObjectIdType.md) | 对象的类型。 |

## Properties

### id

• **id**: `number`

___

### type

• **type**: [`McObjectIdType`](../enums/McObjectIdType.md)

## Methods

### erase

▸ **erase**(): `void`

删除对象。

#### Returns

`void`

___

### getMcDbObject

▸ **getMcDbObject**(): ``null`` \| [`McDbObject`](McDbObject.md)

返回MxCAD对象。

#### Returns

``null`` \| [`McDbObject`](McDbObject.md)

___

### getMxDbEntity

▸ **getMxDbEntity**(): ``null`` \| `default`

返回MxDraw对象。

#### Returns

``null`` \| `default`

___

### getObjectName

▸ **getObjectName**(): `string`

返回id指向的对象名称.

#### Returns

`string`

___

### isValid

▸ **isValid**(): `boolean`

id是否有效.

#### Returns

`boolean`
