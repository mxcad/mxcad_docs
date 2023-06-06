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

- [Dxf0](McDbBlockTableRecord.md#dxf0)
- [ObjectName](McDbBlockTableRecord.md#objectname)
- [origin](McDbBlockTableRecord.md#origin)

### Methods

- [Clone](McDbBlockTableRecord.md#clone)
- [Erase](McDbBlockTableRecord.md#erase)
- [appendAcDbEntity](McDbBlockTableRecord.md#appendacdbentity)
- [getImp](McDbBlockTableRecord.md#getimp)
- [getJson](McDbBlockTableRecord.md#getjson)
- [getObjectID](McDbBlockTableRecord.md#getobjectid)
- [initTempObject](McDbBlockTableRecord.md#inittempobject)
- [newIterator](McDbBlockTableRecord.md#newiterator)
- [setJson](McDbBlockTableRecord.md#setjson)

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

### Dxf0

• `get` **Dxf0**(): `string`

获取 DXF 代码 0 的值。

#### Returns

`string`

#### Inherited from

McDbObject.Dxf0

___

### ObjectName

• `get` **ObjectName**(): `string`

获取对象名称。

#### Returns

`string`

#### Inherited from

McDbObject.ObjectName

___

### origin

• `get` **origin**(): [`McGePoint3d`](../interfaces/McGePoint3d.md)

#### Returns

[`McGePoint3d`](../interfaces/McGePoint3d.md)

• `set` **origin**(`origin`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `origin` | [`McGePoint3d`](../interfaces/McGePoint3d.md) |

#### Returns

`void`

## Methods

### Clone

▸ **Clone**(): [`McDbObject`](McDbObject.md)

克隆对象。

#### Returns

[`McDbObject`](McDbObject.md)

克隆出的对象。

#### Inherited from

[McDbObject](McDbObject.md).[Clone](McDbObject.md#clone)

___

### Erase

▸ **Erase**(): `boolean`

删除对象。

#### Returns

`boolean`

是否删除成功。

#### Inherited from

[McDbObject](McDbObject.md).[Erase](McDbObject.md#erase)

___

### appendAcDbEntity

▸ **appendAcDbEntity**(`pEntity`): [`McObjectId`](McObjectId.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `pEntity` | [`McDbEntity`](McDbEntity.md) |

#### Returns

[`McObjectId`](McObjectId.md)

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

▸ **getObjectID**(): `number`

获取对象 ID。

#### Returns

`number`

对象 ID。

#### Inherited from

[McDbObject](McDbObject.md).[getObjectID](McDbObject.md#getobjectid)

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

[McDbObject](McDbObject.md).[initTempObject](McDbObject.md#inittempobject)

___

### newIterator

▸ **newIterator**(`atBeginning?`, `skipDeleted?`): [`McDbBlockTableRecordIterator`](McDbBlockTableRecordIterator.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `atBeginning` | `boolean` | `true` |
| `skipDeleted` | `boolean` | `true` |

#### Returns

[`McDbBlockTableRecordIterator`](McDbBlockTableRecordIterator.md)

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
