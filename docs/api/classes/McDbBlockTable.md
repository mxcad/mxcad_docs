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

- [Dxf0](McDbBlockTable.md#dxf0)
- [ObjectName](McDbBlockTable.md#objectname)

### Methods

- [Clone](McDbBlockTable.md#clone)
- [Erase](McDbBlockTable.md#erase)
- [add](McDbBlockTable.md#add)
- [getAt](McDbBlockTable.md#getat)
- [getImp](McDbBlockTable.md#getimp)
- [getJson](McDbBlockTable.md#getjson)
- [getObjectID](McDbBlockTable.md#getobjectid)
- [has](McDbBlockTable.md#has)
- [initTempObject](McDbBlockTable.md#inittempobject)
- [newIterator](McDbBlockTable.md#newiterator)
- [setJson](McDbBlockTable.md#setjson)

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

### add

▸ **add**(`pRecord`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pRecord` | [`McDbBlockTableRecord`](McDbBlockTableRecord.md) |

#### Returns

`number`

___

### getAt

▸ **getAt**(`name`): [`McDbBlockTableRecord`](McDbBlockTableRecord.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

[`McDbBlockTableRecord`](McDbBlockTableRecord.md)

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

### has

▸ **has**(`name`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`boolean`

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

▸ **newIterator**(`atBeginning?`, `skipDeleted?`): [`McDbBlockTableIterator`](McDbBlockTableIterator.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `atBeginning` | `boolean` | `true` |
| `skipDeleted` | `boolean` | `true` |

#### Returns

[`McDbBlockTableIterator`](McDbBlockTableIterator.md)

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
