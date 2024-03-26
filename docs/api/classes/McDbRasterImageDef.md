[mxcad API 文档](../README.md) / McDbRasterImageDef

# Class: McDbRasterImageDef

表示一个数据库对象。

## Hierarchy

- [`McDbObject`](McDbObject.md)

  ↳ **`McDbRasterImageDef`**

## Table of contents

### Constructors

- [constructor](McDbRasterImageDef.md#constructor)

### Properties

- [imp](McDbRasterImageDef.md#imp)

### Accessors

- [dxf0](McDbRasterImageDef.md#dxf0)
- [objectName](McDbRasterImageDef.md#objectname)
- [sourceFileName](McDbRasterImageDef.md#sourcefilename)

### Methods

- [clone](McDbRasterImageDef.md#clone)
- [erase](McDbRasterImageDef.md#erase)
- [getDatabase](McDbRasterImageDef.md#getdatabase)
- [getHandle](McDbRasterImageDef.md#gethandle)
- [getImp](McDbRasterImageDef.md#getimp)
- [getJson](McDbRasterImageDef.md#getjson)
- [getObjectID](McDbRasterImageDef.md#getobjectid)
- [getOwnerID](McDbRasterImageDef.md#getownerid)
- [initTempObject](McDbRasterImageDef.md#inittempobject)
- [isErased](McDbRasterImageDef.md#iserased)
- [isKindOf](McDbRasterImageDef.md#iskindof)
- [isNull](McDbRasterImageDef.md#isnull)
- [setJson](McDbRasterImageDef.md#setjson)
- [unErase](McDbRasterImageDef.md#unerase)

## Constructors

### constructor

• **new McDbRasterImageDef**(`imp?`)

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

___

### sourceFileName

• `get` **sourceFileName**(): `string`

#### Returns

`string`

• `set` **sourceFileName**(`sPathName`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `sPathName` | `string` |

#### Returns

`void`

## Methods

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
