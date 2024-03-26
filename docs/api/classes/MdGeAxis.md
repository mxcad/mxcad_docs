[mxcad API 文档](../README.md) / MdGeAxis

# Class: MdGeAxis

表示一个轴

## Hierarchy

- [`MdGeObject`](MdGeObject.md)

  ↳ **`MdGeAxis`**

## Table of contents

### Constructors

- [constructor](MdGeAxis.md#constructor)

### Properties

- [imp](MdGeAxis.md#imp)

### Methods

- [Direction](MdGeAxis.md#direction)
- [Location](MdGeAxis.md#location)
- [SetDirection](MdGeAxis.md#setdirection)
- [SetLocation](MdGeAxis.md#setlocation)
- [getImp](MdGeAxis.md#getimp)
- [initTempObject](MdGeAxis.md#inittempobject)

## Constructors

### constructor

• **new MdGeAxis**(`p1?`, `p2?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `p1?` | `object` \| [`MdGePoint`](MdGePoint.md) |
| `p2?` | [`MdGeDir`](MdGeDir.md) |

#### Overrides

[MdGeObject](MdGeObject.md).[constructor](MdGeObject.md#constructor)

## Properties

### imp

• `Protected` **imp**: `any` = `0`

#### Inherited from

[MdGeObject](MdGeObject.md).[imp](MdGeObject.md#imp)

## Methods

### Direction

▸ **Direction**(): [`MdGeDir`](MdGeDir.md)

#### Returns

[`MdGeDir`](MdGeDir.md)

___

### Location

▸ **Location**(): [`MdGePoint`](MdGePoint.md)

#### Returns

[`MdGePoint`](MdGePoint.md)

___

### SetDirection

▸ **SetDirection**(`dir`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `dir` | [`MdGeDir`](MdGeDir.md) |

#### Returns

`void`

___

### SetLocation

▸ **SetLocation**(`loc`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `loc` | [`MdGePoint`](MdGePoint.md) |

#### Returns

`void`

___

### getImp

▸ **getImp**(): `any`

#### Returns

`any`

#### Inherited from

[MdGeObject](MdGeObject.md).[getImp](MdGeObject.md#getimp)

___

### initTempObject

▸ `Protected` **initTempObject**(`imp`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `imp` | `any` |

#### Returns

`void`

#### Inherited from

[MdGeObject](MdGeObject.md).[initTempObject](MdGeObject.md#inittempobject)
