[mxcad API 文档](../README.md) / McGeLongArray

# Class: McGeLongArray

整数数组

## Table of contents

### Constructors

- [constructor](McGeLongArray.md#constructor)

### Properties

- [imp](McGeLongArray.md#imp)

### Methods

- [append](McGeLongArray.md#append)
- [at](McGeLongArray.md#at)
- [clear](McGeLongArray.md#clear)
- [copy](McGeLongArray.md#copy)
- [copyFormAryId](McGeLongArray.md#copyformaryid)
- [forEach](McGeLongArray.md#foreach)
- [length](McGeLongArray.md#length)
- [setAt](McGeLongArray.md#setat)

## Constructors

### constructor

• **new McGeLongArray**(`imp?`)

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

▸ **copy**(`val`): [`McGeLongArray`](McGeLongArray.md)

复制对象的值

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | [`McGeLongArray`](McGeLongArray.md) |

#### Returns

[`McGeLongArray`](McGeLongArray.md)

___

### copyFormAryId

▸ **copyFormAryId**(`aryId`): [`McGeLongArray`](McGeLongArray.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `aryId` | [`McObjectId`](McObjectId.md)[] |

#### Returns

[`McGeLongArray`](McGeLongArray.md)

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
