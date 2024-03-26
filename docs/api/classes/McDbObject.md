[mxcad API 文档](../README.md) / McDbObject

# Class: McDbObject

表示一个数据库对象。

## Hierarchy

- [`McRxObject`](McRxObject.md)

  ↳ **`McDbObject`**

  ↳↳ [`McDbLinetypeTableRecord`](McDbLinetypeTableRecord.md)

  ↳↳ [`McDbTextStyleTableRecord`](McDbTextStyleTableRecord.md)

  ↳↳ [`McDbLayerTableRecord`](McDbLayerTableRecord.md)

  ↳↳ [`McDbLayerTable`](McDbLayerTable.md)

  ↳↳ [`McDbLinetypeTable`](McDbLinetypeTable.md)

  ↳↳ [`McDbTextStyleTable`](McDbTextStyleTable.md)

  ↳↳ [`McDbBlockTableRecord`](McDbBlockTableRecord.md)

  ↳↳ [`McDbBlockTable`](McDbBlockTable.md)

  ↳↳ [`McDbRasterImageDef`](McDbRasterImageDef.md)

  ↳↳ [`McDbEntity`](McDbEntity.md)

## Table of contents

### Constructors

- [constructor](McDbObject.md#constructor)

### Properties

- [imp](McDbObject.md#imp)

### Accessors

- [dxf0](McDbObject.md#dxf0)
- [objectName](McDbObject.md#objectname)

### Methods

- [clone](McDbObject.md#clone)
- [erase](McDbObject.md#erase)
- [getDatabase](McDbObject.md#getdatabase)
- [getHandle](McDbObject.md#gethandle)
- [getImp](McDbObject.md#getimp)
- [getJson](McDbObject.md#getjson)
- [getObjectID](McDbObject.md#getobjectid)
- [getOwnerID](McDbObject.md#getownerid)
- [initTempObject](McDbObject.md#inittempobject)
- [isErased](McDbObject.md#iserased)
- [isKindOf](McDbObject.md#iskindof)
- [isNull](McDbObject.md#isnull)
- [setJson](McDbObject.md#setjson)
- [unErase](McDbObject.md#unerase)

## Constructors

### constructor

• **new McDbObject**(`imp?`)

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

### dxf0

• `get` **dxf0**(): `string`

获取 DXF 代码 0 的值。

#### Returns

`string`

#### Inherited from

McRxObject.dxf0

___

### objectName

• `get` **objectName**(): `string`

获取对象名称。

#### Returns

`string`

#### Inherited from

McRxObject.objectName

## Methods

### clone

▸ **clone**(): ``null`` \| [`McDbObject`](McDbObject.md)

克隆对象。

#### Returns

``null`` \| [`McDbObject`](McDbObject.md)

克隆出的对象。

___

### erase

▸ **erase**(): `boolean`

删除对象。

#### Returns

`boolean`

是否删除成功。

___

### getDatabase

▸ **getDatabase**(): [`McDbDatabase`](McDbDatabase.md)

得到对象所在的数据库

#### Returns

[`McDbDatabase`](McDbDatabase.md)

___

### getHandle

▸ **getHandle**(): `string`

得到对象句柄

#### Returns

`string`

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

### getObjectID

▸ **getObjectID**(): [`McObjectId`](McObjectId.md)

获取对象 ID。

#### Returns

[`McObjectId`](McObjectId.md)

对象 ID。

___

### getOwnerID

▸ **getOwnerID**(): `number`

得到对象拥用者的id

#### Returns

`number`

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

### isErased

▸ **isErased**(): `boolean`

对象是否已经删除

#### Returns

`boolean`

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

### isNull

▸ **isNull**(): `any`

#### Returns

`any`

#### Inherited from

[McRxObject](McRxObject.md).[isNull](McRxObject.md#isnull)

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

___

### unErase

▸ **unErase**(): `boolean`

反删除对象。

#### Returns

`boolean`
