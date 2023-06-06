[mxcad API 文档](../README.md) / McDbBlockTableRecordIterator

# Class: McDbBlockTableRecordIterator

表示一个 Rx 对象的基类。

## Hierarchy

- [`McRxObject`](McRxObject.md)

  ↳ **`McDbBlockTableRecordIterator`**

## Table of contents

### Constructors

- [constructor](McDbBlockTableRecordIterator.md#constructor)

### Properties

- [imp](McDbBlockTableRecordIterator.md#imp)

### Accessors

- [Dxf0](McDbBlockTableRecordIterator.md#dxf0)
- [ObjectName](McDbBlockTableRecordIterator.md#objectname)

### Methods

- [done](McDbBlockTableRecordIterator.md#done)
- [getEntityId](McDbBlockTableRecordIterator.md#getentityid)
- [getImp](McDbBlockTableRecordIterator.md#getimp)
- [getJson](McDbBlockTableRecordIterator.md#getjson)
- [initTempObject](McDbBlockTableRecordIterator.md#inittempobject)
- [setJson](McDbBlockTableRecordIterator.md#setjson)
- [start](McDbBlockTableRecordIterator.md#start)
- [step](McDbBlockTableRecordIterator.md#step)

## Constructors

### constructor

• **new McDbBlockTableRecordIterator**(`imp`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `imp` | `any` |

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

### done

▸ **done**(): `boolean`

#### Returns

`boolean`

___

### getEntityId

▸ **getEntityId**(): [`McObjectId`](McObjectId.md)

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

___

### start

▸ **start**(`atBeginning?`, `skipDeleted?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `atBeginning` | `boolean` | `true` |
| `skipDeleted` | `boolean` | `true` |

#### Returns

`void`

___

### step

▸ **step**(`forward?`, `skipDeleted?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `forward` | `boolean` | `true` |
| `skipDeleted` | `boolean` | `true` |

#### Returns

`void`
