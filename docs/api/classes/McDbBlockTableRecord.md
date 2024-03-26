[mxcad API 文档](../README.md) / McDbBlockTableRecord

# Class: McDbBlockTableRecord

表示一个数据库对象。

## Hierarchy

- [`McDbObject`](McDbObject.md)

  ↳ **`McDbBlockTableRecord`**

## Table of contents

### Constructors

- [constructor](McDbBlockTableRecord.md#constructor)

### Properties

- [imp](McDbBlockTableRecord.md#imp)

### Accessors

- [dxf0](McDbBlockTableRecord.md#dxf0)
- [name](McDbBlockTableRecord.md#name)
- [objectName](McDbBlockTableRecord.md#objectname)
- [origin](McDbBlockTableRecord.md#origin)

### Methods

- [appendAcDbEntity](McDbBlockTableRecord.md#appendacdbentity)
- [clone](McDbBlockTableRecord.md#clone)
- [erase](McDbBlockTableRecord.md#erase)
- [getAllEntityId](McDbBlockTableRecord.md#getallentityid)
- [getBoundingBox](McDbBlockTableRecord.md#getboundingbox)
- [getDatabase](McDbBlockTableRecord.md#getdatabase)
- [getHandle](McDbBlockTableRecord.md#gethandle)
- [getImp](McDbBlockTableRecord.md#getimp)
- [getJson](McDbBlockTableRecord.md#getjson)
- [getObjectID](McDbBlockTableRecord.md#getobjectid)
- [getOwnerID](McDbBlockTableRecord.md#getownerid)
- [initTempObject](McDbBlockTableRecord.md#inittempobject)
- [invalidBoundingBoxBuffer](McDbBlockTableRecord.md#invalidboundingboxbuffer)
- [isErased](McDbBlockTableRecord.md#iserased)
- [isKindOf](McDbBlockTableRecord.md#iskindof)
- [isNull](McDbBlockTableRecord.md#isnull)
- [setJson](McDbBlockTableRecord.md#setjson)
- [unErase](McDbBlockTableRecord.md#unerase)

## Constructors

### constructor

• **new McDbBlockTableRecord**(`imp?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `imp?` | `any` |

#### Overrides

[McDbObject](McDbObject.md).[constructor](McDbObject.md#constructor)

## Properties

### imp

• `Protected` **imp**: `any` = `0`

内部实现对象。

#### Inherited from

[McDbObject](McDbObject.md).[imp](McDbObject.md#imp)

## Accessors

### dxf0

• `get` **dxf0**(): `string`

获取 DXF 代码 0 的值。

#### Returns

`string`

#### Inherited from

McDbObject.dxf0

___

### name

• `get` **name**(): `string`

获取或设置名称。

#### Returns

`string`

• `set` **name**(`val`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `string` |

#### Returns

`void`

___

### objectName

• `get` **objectName**(): `string`

获取对象名称。

#### Returns

`string`

#### Inherited from

McDbObject.objectName

___

### origin

• `get` **origin**(): [`McGePoint3d`](McGePoint3d.md)

#### Returns

[`McGePoint3d`](McGePoint3d.md)

• `set` **origin**(`origin`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `origin` | [`McGePoint3d`](McGePoint3d.md) |

#### Returns

`void`

## Methods

### appendAcDbEntity

▸ **appendAcDbEntity**(`pEntity`): [`McObjectId`](McObjectId.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `pEntity` | [`McDbEntity`](McDbEntity.md) |

#### Returns

[`McObjectId`](McObjectId.md)

___

### clone

▸ **clone**(): ``null`` \| [`McDbObject`](McDbObject.md)

克隆对象。

#### Returns

``null`` \| [`McDbObject`](McDbObject.md)

克隆出的对象。

#### Inherited from

[McDbObject](McDbObject.md).[clone](McDbObject.md#clone)

___

### erase

▸ **erase**(): `boolean`

删除对象。

#### Returns

`boolean`

是否删除成功。

#### Inherited from

[McDbObject](McDbObject.md).[erase](McDbObject.md#erase)

___

### getAllEntityId

▸ **getAllEntityId**(`skipDeleted?`): [`McObjectId`](McObjectId.md)[]

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `skipDeleted` | `boolean` | `true` |

#### Returns

[`McObjectId`](McObjectId.md)[]

___

### getBoundingBox

▸ **getBoundingBox**(): `Object`

得到最小外包

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `maxPt` | [`McGePoint3d`](McGePoint3d.md) |
| `minPt` | [`McGePoint3d`](McGePoint3d.md) |
| `ret` | `boolean` |

___

### getDatabase

▸ **getDatabase**(): [`McDbDatabase`](McDbDatabase.md)

得到对象所在的数据库

#### Returns

[`McDbDatabase`](McDbDatabase.md)

#### Inherited from

[McDbObject](McDbObject.md).[getDatabase](McDbObject.md#getdatabase)

___

### getHandle

▸ **getHandle**(): `string`

得到对象句柄

#### Returns

`string`

#### Inherited from

[McDbObject](McDbObject.md).[getHandle](McDbObject.md#gethandle)

___

### getImp

▸ **getImp**(): `any`

获取内部实现对象。

#### Returns

`any`

内部实现对象。

#### Inherited from

[McDbObject](McDbObject.md).[getImp](McDbObject.md#getimp)

___

### getJson

▸ **getJson**(): `string`

获取 JSON 格式的字符串。

#### Returns

`string`

JSON 格式的字符串。

#### Inherited from

[McDbObject](McDbObject.md).[getJson](McDbObject.md#getjson)

___

### getObjectID

▸ **getObjectID**(): [`McObjectId`](McObjectId.md)

获取对象 ID。

#### Returns

[`McObjectId`](McObjectId.md)

对象 ID。

#### Inherited from

[McDbObject](McDbObject.md).[getObjectID](McDbObject.md#getobjectid)

___

### getOwnerID

▸ **getOwnerID**(): `number`

得到对象拥用者的id

#### Returns

`number`

#### Inherited from

[McDbObject](McDbObject.md).[getOwnerID](McDbObject.md#getownerid)

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

[McDbObject](McDbObject.md).[initTempObject](McDbObject.md#inittempobject)

___

### invalidBoundingBoxBuffer

▸ **invalidBoundingBoxBuffer**(): `void`

#### Returns

`void`

___

### isErased

▸ **isErased**(): `boolean`

对象是否已经删除

#### Returns

`boolean`

#### Inherited from

[McDbObject](McDbObject.md).[isErased](McDbObject.md#iserased)

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

[McDbObject](McDbObject.md).[isKindOf](McDbObject.md#iskindof)

___

### isNull

▸ **isNull**(): `any`

#### Returns

`any`

#### Inherited from

[McDbObject](McDbObject.md).[isNull](McDbObject.md#isnull)

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

[McDbObject](McDbObject.md).[setJson](McDbObject.md#setjson)

___

### unErase

▸ **unErase**(): `boolean`

反删除对象。

#### Returns

`boolean`

#### Inherited from

[McDbObject](McDbObject.md).[unErase](McDbObject.md#unerase)
