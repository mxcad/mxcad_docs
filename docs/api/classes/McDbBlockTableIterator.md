[mxcad API 文档](../README.md) / McDbBlockTableIterator

# Class: McDbBlockTableIterator

表示一个 Rx 对象的基类。

## Hierarchy

- [`McRxObject`](McRxObject.md)

  ↳ **`McDbBlockTableIterator`**

## Table of contents

### Constructors

- [constructor](McDbBlockTableIterator.md#constructor)

### Properties

- [imp](McDbBlockTableIterator.md#imp)

### Accessors

- [Dxf0](McDbBlockTableIterator.md#dxf0)
- [ObjectName](McDbBlockTableIterator.md#objectname)

### Methods

- [done](McDbBlockTableIterator.md#done)
- [getImp](McDbBlockTableIterator.md#getimp)
- [getJson](McDbBlockTableIterator.md#getjson)
- [getRecord](McDbBlockTableIterator.md#getrecord)
- [initTempObject](McDbBlockTableIterator.md#inittempobject)
- [setJson](McDbBlockTableIterator.md#setjson)
- [start](McDbBlockTableIterator.md#start)
- [step](McDbBlockTableIterator.md#step)

## Constructors

### constructor

• **new McDbBlockTableIterator**(`imp`)

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

### getRecord

▸ **getRecord**(): [`McDbBlockTableRecord`](McDbBlockTableRecord.md)

#### Returns

[`McDbBlockTableRecord`](McDbBlockTableRecord.md)

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
