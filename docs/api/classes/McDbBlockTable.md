[mxcad API 文档](../README.md) / McDbBlockTable

# Class: McDbBlockTable

表示一个数据库对象。

## Hierarchy

- [`McDbObject`](McDbObject.md)

  ↳ **`McDbBlockTable`**

## Table of contents

### Constructors

- [constructor](McDbBlockTable.md#constructor)

### Properties

- [imp](McDbBlockTable.md#imp)

### Accessors

- [dxf0](McDbBlockTable.md#dxf0)
- [objectName](McDbBlockTable.md#objectname)

### Methods

- [add](McDbBlockTable.md#add)
- [clone](McDbBlockTable.md#clone)
- [erase](McDbBlockTable.md#erase)
- [get](McDbBlockTable.md#get)
- [getAllRecordId](McDbBlockTable.md#getallrecordid)
- [getDatabase](McDbBlockTable.md#getdatabase)
- [getHandle](McDbBlockTable.md#gethandle)
- [getImp](McDbBlockTable.md#getimp)
- [getJson](McDbBlockTable.md#getjson)
- [getObjectID](McDbBlockTable.md#getobjectid)
- [getOwnerID](McDbBlockTable.md#getownerid)
- [has](McDbBlockTable.md#has)
- [initTempObject](McDbBlockTable.md#inittempobject)
- [isErased](McDbBlockTable.md#iserased)
- [isKindOf](McDbBlockTable.md#iskindof)
- [isNull](McDbBlockTable.md#isnull)
- [setJson](McDbBlockTable.md#setjson)
- [unErase](McDbBlockTable.md#unerase)

## Constructors

### constructor

• **new McDbBlockTable**(`imp?`)

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

### objectName

• `get` **objectName**(): `string`

获取对象名称。

#### Returns

`string`

#### Inherited from

McDbObject.objectName

## Methods

### add

▸ **add**(`rec`): [`McObjectId`](McObjectId.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `rec` | `string` \| [`McDbBlockTableRecord`](McDbBlockTableRecord.md) |

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

### get

▸ **get**(`sName`, `skipDeleted?`): [`McObjectId`](McObjectId.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `sName` | `string` | `undefined` |
| `skipDeleted` | `boolean` | `true` |

#### Returns

[`McObjectId`](McObjectId.md)

___

### getAllRecordId

▸ **getAllRecordId**(`skipDeleted?`): [`McObjectId`](McObjectId.md)[]

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `skipDeleted` | `boolean` | `true` |

#### Returns

[`McObjectId`](McObjectId.md)[]

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

### has

▸ **has**(`sName`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `sName` | `string` |

#### Returns

`boolean`

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