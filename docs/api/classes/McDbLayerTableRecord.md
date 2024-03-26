[mxcad API 文档](../README.md) / McDbLayerTableRecord

# Class: McDbLayerTableRecord

表示一个图层表记录对象。

## Hierarchy

- [`McDbObject`](McDbObject.md)

  ↳ **`McDbLayerTableRecord`**

## Table of contents

### Constructors

- [constructor](McDbLayerTableRecord.md#constructor)

### Properties

- [imp](McDbLayerTableRecord.md#imp)

### Accessors

- [color](McDbLayerTableRecord.md#color)
- [dxf0](McDbLayerTableRecord.md#dxf0)
- [isFrozen](McDbLayerTableRecord.md#isfrozen)
- [isLocked](McDbLayerTableRecord.md#islocked)
- [isOff](McDbLayerTableRecord.md#isoff)
- [lineWeight](McDbLayerTableRecord.md#lineweight)
- [linetypeObjectId](McDbLayerTableRecord.md#linetypeobjectid)
- [name](McDbLayerTableRecord.md#name)
- [objectName](McDbLayerTableRecord.md#objectname)

### Methods

- [clone](McDbLayerTableRecord.md#clone)
- [erase](McDbLayerTableRecord.md#erase)
- [getDatabase](McDbLayerTableRecord.md#getdatabase)
- [getHandle](McDbLayerTableRecord.md#gethandle)
- [getImp](McDbLayerTableRecord.md#getimp)
- [getJson](McDbLayerTableRecord.md#getjson)
- [getObjectID](McDbLayerTableRecord.md#getobjectid)
- [getOwnerID](McDbLayerTableRecord.md#getownerid)
- [initTempObject](McDbLayerTableRecord.md#inittempobject)
- [isErased](McDbLayerTableRecord.md#iserased)
- [isKindOf](McDbLayerTableRecord.md#iskindof)
- [isNull](McDbLayerTableRecord.md#isnull)
- [setJson](McDbLayerTableRecord.md#setjson)
- [unErase](McDbLayerTableRecord.md#unerase)

## Constructors

### constructor

• **new McDbLayerTableRecord**(`imp?`)

构造函数。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `imp?` | `any` | 内部实现对象。 |

#### Overrides

[McDbObject](McDbObject.md).[constructor](McDbObject.md#constructor)

## Properties

### imp

• `Protected` **imp**: `any` = `0`

内部实现对象。

#### Inherited from

[McDbObject](McDbObject.md).[imp](McDbObject.md#imp)

## Accessors

### color

• `get` **color**(): [`McCmColor`](McCmColor.md)

获取或设置图层颜色。

#### Returns

[`McCmColor`](McCmColor.md)

• `set` **color**(`val`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | [`McCmColor`](McCmColor.md) |

#### Returns

`void`

___

### dxf0

• `get` **dxf0**(): `string`

获取 DXF 代码 0 的值。

#### Returns

`string`

#### Inherited from

McDbObject.dxf0

___

### isFrozen

• `get` **isFrozen**(): `boolean`

获取或设置图层是否被冻结。

#### Returns

`boolean`

• `set` **isFrozen**(`val`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `boolean` |

#### Returns

`void`

___

### isLocked

• `get` **isLocked**(): `boolean`

获取或设置图层是否被锁定。

#### Returns

`boolean`

• `set` **isLocked**(`val`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `boolean` |

#### Returns

`void`

___

### isOff

• `get` **isOff**(): `boolean`

获取或设置图层是否被关闭。

#### Returns

`boolean`

• `set` **isOff**(`val`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `boolean` |

#### Returns

`void`

___

### lineWeight

• `get` **lineWeight**(): [`LineWeight`](../enums/McDb.LineWeight.md)

获取或设置图层线宽。

#### Returns

[`LineWeight`](../enums/McDb.LineWeight.md)

• `set` **lineWeight**(`val`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | [`LineWeight`](../enums/McDb.LineWeight.md) |

#### Returns

`void`

___

### linetypeObjectId

• `get` **linetypeObjectId**(): [`McObjectId`](McObjectId.md)

获取或设置图层线型对象 ID。

#### Returns

[`McObjectId`](McObjectId.md)

• `set` **linetypeObjectId**(`val`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | [`McObjectId`](McObjectId.md) |

#### Returns

`void`

___

### name

• `get` **name**(): `string`

获取或设置图层名称。

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
