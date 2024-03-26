[mxcad API 文档](../README.md) / MdGeMakeArcOfCircle

# Class: MdGeMakeArcOfCircle

三点圆弧

## Hierarchy

- [`MdGeObject`](MdGeObject.md)

  ↳ **`MdGeMakeArcOfCircle`**

## Table of contents

### Constructors

- [constructor](MdGeMakeArcOfCircle.md#constructor)

### Properties

- [imp](MdGeMakeArcOfCircle.md#imp)

### Methods

- [Edge](MdGeMakeArcOfCircle.md#edge)
- [getImp](MdGeMakeArcOfCircle.md#getimp)
- [initTempObject](MdGeMakeArcOfCircle.md#inittempobject)

## Constructors

### constructor

• **new MdGeMakeArcOfCircle**(`p1`, `p2?`, `p3?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `p1` | `object` \| [`MdGePoint`](MdGePoint.md) |
| `p2?` | [`MdGePoint`](MdGePoint.md) |
| `p3?` | [`MdGePoint`](MdGePoint.md) |

#### Overrides

[MdGeObject](MdGeObject.md).[constructor](MdGeObject.md#constructor)

## Properties

### imp

• `Protected` **imp**: `any` = `0`

#### Inherited from

[MdGeObject](MdGeObject.md).[imp](MdGeObject.md#imp)

## Methods

### Edge

▸ **Edge**(): [`MdGeEdge`](MdGeEdge.md)

#### Returns

[`MdGeEdge`](MdGeEdge.md)

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
