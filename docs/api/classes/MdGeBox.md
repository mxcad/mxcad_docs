[mxcad API 文档](../README.md) / MdGeBox

# Class: MdGeBox

表示一个Box

## Hierarchy

- [`MdGeObject`](MdGeObject.md)

  ↳ **`MdGeBox`**

## Table of contents

### Constructors

- [constructor](MdGeBox.md#constructor)

### Properties

- [imp](MdGeBox.md#imp)

### Methods

- [BackFace](MdGeBox.md#backface)
- [BottomFace](MdGeBox.md#bottomface)
- [FrontFace](MdGeBox.md#frontface)
- [Init](MdGeBox.md#init)
- [LeftFace](MdGeBox.md#leftface)
- [RightFace](MdGeBox.md#rightface)
- [Shape](MdGeBox.md#shape)
- [Shell](MdGeBox.md#shell)
- [Solid](MdGeBox.md#solid)
- [TopFace](MdGeBox.md#topface)
- [getImp](MdGeBox.md#getimp)
- [initTempObject](MdGeBox.md#inittempobject)

## Constructors

### constructor

• **new MdGeBox**(`p1?`, `p2?`, `p3?`, `p4?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `p1?` | `number` \| `object` \| [`MdGePoint`](MdGePoint.md) \| [`MdGeCSYSR`](MdGeCSYSR.md) |
| `p2?` | `number` \| [`MdGePoint`](MdGePoint.md) |
| `p3?` | `number` |
| `p4?` | `number` |

#### Overrides

[MdGeObject](MdGeObject.md).[constructor](MdGeObject.md#constructor)

## Properties

### imp

• `Protected` **imp**: `any` = `0`

#### Inherited from

[MdGeObject](MdGeObject.md).[imp](MdGeObject.md#imp)

## Methods

### BackFace

▸ **BackFace**(): [`MdGeFace`](MdGeFace.md)

#### Returns

[`MdGeFace`](MdGeFace.md)

___

### BottomFace

▸ **BottomFace**(): [`MdGeFace`](MdGeFace.md)

#### Returns

[`MdGeFace`](MdGeFace.md)

___

### FrontFace

▸ **FrontFace**(): [`MdGeFace`](MdGeFace.md)

#### Returns

[`MdGeFace`](MdGeFace.md)

___

### Init

▸ **Init**(`p1`, `p2`, `p3?`, `p4?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `p1` | `number` \| [`MdGePoint`](MdGePoint.md) \| [`MdGeCSYSR`](MdGeCSYSR.md) |
| `p2` | `number` \| [`MdGePoint`](MdGePoint.md) |
| `p3?` | `number` |
| `p4?` | `number` |

#### Returns

`void`

___

### LeftFace

▸ **LeftFace**(): [`MdGeFace`](MdGeFace.md)

#### Returns

[`MdGeFace`](MdGeFace.md)

___

### RightFace

▸ **RightFace**(): [`MdGeFace`](MdGeFace.md)

#### Returns

[`MdGeFace`](MdGeFace.md)

___

### Shape

▸ **Shape**(): [`MdGeShape`](MdGeShape.md)

#### Returns

[`MdGeShape`](MdGeShape.md)

___

### Shell

▸ **Shell**(): [`MdGeShell`](MdGeShell.md)

#### Returns

[`MdGeShell`](MdGeShell.md)

___

### Solid

▸ **Solid**(): [`MdGeSolid`](MdGeSolid.md)

#### Returns

[`MdGeSolid`](MdGeSolid.md)

___

### TopFace

▸ **TopFace**(): [`MdGeFace`](MdGeFace.md)

#### Returns

[`MdGeFace`](MdGeFace.md)

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
