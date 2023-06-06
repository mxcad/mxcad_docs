[mxcad API 文档](../README.md) / McDbObject

# Class: McDbObject

表示一个数据库对象。

## Hierarchy

- [`McRxObject`](McRxObject.md)

  ↳ **`McDbObject`**

  ↳↳ [`McDbLayerTableRecord`](McDbLayerTableRecord.md)

  ↳↳ [`McDbLayerTable`](McDbLayerTable.md)

  ↳↳ [`McDbLinetypeTable`](McDbLinetypeTable.md)

  ↳↳ [`McDbTextStyleTable`](McDbTextStyleTable.md)

  ↳↳ [`McDbEntity`](McDbEntity.md)

  ↳↳ [`McDbBlockTableRecord`](McDbBlockTableRecord.md)

  ↳↳ [`McDbBlockTable`](McDbBlockTable.md)

## Table of contents

### Constructors

- [constructor](McDbObject.md#constructor)

### Properties

- [imp](McDbObject.md#imp)

### Accessors

- [Dxf0](McDbObject.md#dxf0)
- [ObjectName](McDbObject.md#objectname)

### Methods

- [Clone](McDbObject.md#clone)
- [Erase](McDbObject.md#erase)
- [getImp](McDbObject.md#getimp)
- [getJson](McDbObject.md#getjson)
- [getObjectID](McDbObject.md#getobjectid)
- [initTempObject](McDbObject.md#inittempobject)
- [setJson](McDbObject.md#setjson)

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

### Clone

▸ **Clone**(): [`McDbObject`](McDbObject.md)

克隆对象。

#### Returns

[`McDbObject`](McDbObject.md)

克隆出的对象。

___

### Erase

▸ **Erase**(): `boolean`

删除对象。

#### Returns

`boolean`

是否删除成功。

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

▸ **getObjectID**(): `number`

获取对象 ID。

#### Returns

`number`

对象 ID。

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
