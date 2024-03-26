[mxcad API 文档](../README.md) / McGeStringArray

# Class: McGeStringArray

表示字符串的数组

## Table of contents

### Constructors

- [constructor](McGeStringArray.md#constructor)

### Properties

- [imp](McGeStringArray.md#imp)

### Methods

- [append](McGeStringArray.md#append)
- [at](McGeStringArray.md#at)
- [clear](McGeStringArray.md#clear)
- [copy](McGeStringArray.md#copy)
- [forEach](McGeStringArray.md#foreach)
- [length](McGeStringArray.md#length)
- [setAt](McGeStringArray.md#setat)

## Constructors

### constructor

• **new McGeStringArray**(`imp?`)

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

▸ **at**(`index`, `decodeFromGb2312?`): `string`

得到数据元素的值

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `index` | `number` | `undefined` |
| `decodeFromGb2312` | `boolean` | `true` |

#### Returns

`string`

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

___

### copy

▸ **copy**(`val`): [`McGeStringArray`](McGeStringArray.md)

复制对象的值

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | [`McGeStringArray`](McGeStringArray.md) |

#### Returns

[`McGeStringArray`](McGeStringArray.md)

___

### forEach

▸ **forEach**(`call`, `decodeFromGb2312?`): `void`

遍历数组

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `call` | (`val`: `string`, `index`: `number`) => `void` | `undefined` |
| `decodeFromGb2312` | `boolean` | `true` |

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

▸ **setAt**(`index`, `val`, `decodeFromGb2312?`): `void`

设置数据元素的值

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `index` | `number` | `undefined` |
| `val` | `string` | `undefined` |
| `decodeFromGb2312` | `boolean` | `true` |

#### Returns

`void`
