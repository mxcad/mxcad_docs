[mxcad API 文档](../README.md) / McDbEntity

# Class: McDbEntity

表示数据库实体。

## Hierarchy

- [`McDbObject`](McDbObject.md)

  ↳ **`McDbEntity`**

  ↳↳ [`McDbCurve`](McDbCurve.md)

  ↳↳ [`McDbText`](McDbText.md)

  ↳↳ [`McDbMText`](McDbMText.md)

  ↳↳ [`McDbBlockReference`](McDbBlockReference.md)

  ↳↳ [`McDbDimension`](McDbDimension.md)

## Table of contents

### Constructors

- [constructor](McDbEntity.md#constructor)

### Properties

- [imp](McDbEntity.md#imp)

### Accessors

- [Dxf0](McDbEntity.md#dxf0)
- [ObjectName](McDbEntity.md#objectname)

### Methods

- [Clone](McDbEntity.md#clone)
- [Erase](McDbEntity.md#erase)
- [explode](McDbEntity.md#explode)
- [getImp](McDbEntity.md#getimp)
- [getJson](McDbEntity.md#getjson)
- [getObjectID](McDbEntity.md#getobjectid)
- [initTempObject](McDbEntity.md#inittempobject)
- [setJson](McDbEntity.md#setjson)

## Constructors

### constructor

• **new McDbEntity**(`imp?`)

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

### explode

▸ **explode**(): [`McDrawResbuf`](McDrawResbuf.md)

打碎对象，返回打后对象数据链表

#### Returns

[`McDrawResbuf`](McDrawResbuf.md)

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
