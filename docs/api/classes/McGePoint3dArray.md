[mxcad API 文档](../README.md) / McGePoint3dArray

# Class: McGePoint3dArray

表示三维点的数组

## Table of contents

### Constructors

- [constructor](McGePoint3dArray.md#constructor)

### Properties

- [imp](McGePoint3dArray.md#imp)

### Methods

- [append](McGePoint3dArray.md#append)
- [at](McGePoint3dArray.md#at)
- [clear](McGePoint3dArray.md#clear)
- [copy](McGePoint3dArray.md#copy)
- [forEach](McGePoint3dArray.md#foreach)
- [isEmpty](McGePoint3dArray.md#isempty)
- [length](McGePoint3dArray.md#length)
- [setAt](McGePoint3dArray.md#setat)

## Constructors

### constructor

• **new McGePoint3dArray**(`imp?`)

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
| `val` | [`McGePoint3d`](McGePoint3d.md) |

#### Returns

`void`

___

### at

▸ **at**(`index`): [`McGePoint3d`](McGePoint3d.md)

得到数据元素的值

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

[`McGePoint3d`](McGePoint3d.md)

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

___

### copy

▸ **copy**(`val`): [`McGePoint3dArray`](McGePoint3dArray.md)

复制对象的值

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | [`McGePoint3dArray`](McGePoint3dArray.md) |

#### Returns

[`McGePoint3dArray`](McGePoint3dArray.md)

___

### forEach

▸ **forEach**(`call`): `void`

遍历数组

#### Parameters

| Name | Type |
| :------ | :------ |
| `call` | (`val`: [`McGePoint3d`](McGePoint3d.md), `index`: `number`) => `void` |

#### Returns

`void`

___

### isEmpty

▸ **isEmpty**(): `boolean`

返回数组为空

#### Returns

`boolean`

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
| `val` | [`McGePoint3d`](McGePoint3d.md) |

#### Returns

`void`
