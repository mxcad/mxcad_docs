[mxcad API 文档](../README.md) / MdGeInterpolateBSpl

# Class: MdGeInterpolateBSpl

表示插值B样条曲线

## Hierarchy

- [`MdGeObject`](MdGeObject.md)

  ↳ **`MdGeInterpolateBSpl`**

## Table of contents

### Constructors

- [constructor](MdGeInterpolateBSpl.md#constructor)

### Properties

- [imp](MdGeInterpolateBSpl.md#imp)

### Methods

- [Curve](MdGeInterpolateBSpl.md#curve)
- [IsDone](MdGeInterpolateBSpl.md#isdone)
- [Load](MdGeInterpolateBSpl.md#load)
- [Perform](MdGeInterpolateBSpl.md#perform)
- [getImp](MdGeInterpolateBSpl.md#getimp)
- [initTempObject](MdGeInterpolateBSpl.md#inittempobject)

## Constructors

### constructor

• **new MdGeInterpolateBSpl**(`p1?`, `p2?`, `p3?`, `p4?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `p1?` | `object` \| [`MdGeArray1OfPnt`](MdGeArray1OfPnt.md) |
| `p2?` | `boolean` \| [`MdGeArray1OfReal`](MdGeArray1OfReal.md) |
| `p3?` | `number` \| `boolean` |
| `p4?` | `number` |

#### Overrides

[MdGeObject](MdGeObject.md).[constructor](MdGeObject.md#constructor)

## Properties

### imp

• `Protected` **imp**: `any` = `0`

#### Inherited from

[MdGeObject](MdGeObject.md).[imp](MdGeObject.md#imp)

## Methods

### Curve

▸ **Curve**(): [`MdGeBSplineCurve`](MdGeBSplineCurve.md)

#### Returns

[`MdGeBSplineCurve`](MdGeBSplineCurve.md)

___

### IsDone

▸ **IsDone**(): `boolean`

#### Returns

`boolean`

___

### Load

▸ **Load**(`InitialTangent`, `FinalTangent`, `Scale?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `InitialTangent` | [`MdGeVec`](MdGeVec.md) |
| `FinalTangent` | [`MdGeVec`](MdGeVec.md) |
| `Scale?` | `boolean` |

#### Returns

`void`

___

### Perform

▸ **Perform**(): `void`

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
