[mxcad API 文档](../README.md) / MdGeDoubleArray

# Class: MdGeDoubleArray

整数数组

## Table of contents

### Constructors

- [constructor](MdGeDoubleArray.md#constructor)

### Properties

- [imp](MdGeDoubleArray.md#imp)

### Methods

- [append](MdGeDoubleArray.md#append)
- [at](MdGeDoubleArray.md#at)
- [clear](MdGeDoubleArray.md#clear)
- [copy](MdGeDoubleArray.md#copy)
- [forEach](MdGeDoubleArray.md#foreach)
- [length](MdGeDoubleArray.md#length)
- [setAt](MdGeDoubleArray.md#setat)

## Constructors

### constructor

• **new MdGeDoubleArray**(`imp?`)

构造函数。

#### Parameters

| Name | Type |
| :------ | :------ |
| `imp?` | `object` |

## Properties

### imp

• **imp**: `any`

## Methods

### append

▸ **append**(`val`): `void`

添加一个值

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `number` |

#### Returns

`void`

___

### at

▸ **at**(`index`): `number`

得到数据元素的值

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

`number`

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

___

### copy

▸ **copy**(`val`): [`MdGeDoubleArray`](MdGeDoubleArray.md)

复制对象的值

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | [`MdGeDoubleArray`](MdGeDoubleArray.md) |

#### Returns

[`MdGeDoubleArray`](MdGeDoubleArray.md)

___

### forEach

▸ **forEach**(`call`): `void`

遍历数组

#### Parameters

| Name | Type |
| :------ | :------ |
| `call` | (`val`: `number`, `index`: `number`) => `void` |

#### Returns

`void`

___

### length

▸ **length**(): `number`

返回数组长度

#### Returns

`number`

___

### setAt

▸ **setAt**(`index`, `val`): `void`

设置数据元素的值

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `val` | `number` |

#### Returns

`void`
