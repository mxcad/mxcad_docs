[mxcad API 文档](../README.md) / MdGeVec

# Class: MdGeVec

表示一个向量。

## Hierarchy

- [`MdGeObject`](MdGeObject.md)

  ↳ **`MdGeVec`**

## Table of contents

### Constructors

- [constructor](MdGeVec.md#constructor)

### Properties

- [imp](MdGeVec.md#imp)

### Methods

- [Add](MdGeVec.md#add)
- [Added](MdGeVec.md#added)
- [Angle](MdGeVec.md#angle)
- [AngleWithRef](MdGeVec.md#anglewithref)
- [Coord](MdGeVec.md#coord)
- [Cross](MdGeVec.md#cross)
- [CrossCross](MdGeVec.md#crosscross)
- [CrossCrossed](MdGeVec.md#crosscrossed)
- [CrossMagnitude](MdGeVec.md#crossmagnitude)
- [CrossSquareMagnitude](MdGeVec.md#crosssquaremagnitude)
- [Crossed](MdGeVec.md#crossed)
- [Divide](MdGeVec.md#divide)
- [Divided](MdGeVec.md#divided)
- [Dot](MdGeVec.md#dot)
- [DotCross](MdGeVec.md#dotcross)
- [IsEqual](MdGeVec.md#isequal)
- [IsNormal](MdGeVec.md#isnormal)
- [IsOpposite](MdGeVec.md#isopposite)
- [IsParallel](MdGeVec.md#isparallel)
- [Magnitude](MdGeVec.md#magnitude)
- [MirrorByAxis](MdGeVec.md#mirrorbyaxis)
- [MirrorByCSYSR](MdGeVec.md#mirrorbycsysr)
- [MirrorByVec](MdGeVec.md#mirrorbyvec)
- [MirroredByAxis](MdGeVec.md#mirroredbyaxis)
- [MirroredByCSYSR](MdGeVec.md#mirroredbycsysr)
- [MirroredByVec](MdGeVec.md#mirroredbyvec)
- [Multiplied](MdGeVec.md#multiplied)
- [Multiply](MdGeVec.md#multiply)
- [Normalize](MdGeVec.md#normalize)
- [Normalized](MdGeVec.md#normalized)
- [Reverse](MdGeVec.md#reverse)
- [Reversed](MdGeVec.md#reversed)
- [Rotate](MdGeVec.md#rotate)
- [Rotated](MdGeVec.md#rotated)
- [Scale](MdGeVec.md#scale)
- [Scaled](MdGeVec.md#scaled)
- [SetCoord](MdGeVec.md#setcoord)
- [SetLinearForm](MdGeVec.md#setlinearform)
- [SetX](MdGeVec.md#setx)
- [SetXYZ](MdGeVec.md#setxyz)
- [SetY](MdGeVec.md#sety)
- [SetZ](MdGeVec.md#setz)
- [SquareMagnitude](MdGeVec.md#squaremagnitude)
- [Subtract](MdGeVec.md#subtract)
- [Subtracted](MdGeVec.md#subtracted)
- [Transform](MdGeVec.md#transform)
- [Transformed](MdGeVec.md#transformed)
- [X](MdGeVec.md#x)
- [Y](MdGeVec.md#y)
- [Z](MdGeVec.md#z)
- [getImp](MdGeVec.md#getimp)
- [initTempObject](MdGeVec.md#inittempobject)

## Constructors

### constructor

• **new MdGeVec**(`p1?`, `p2?`, `p3?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `p1?` | `number` \| `object` \| [`MdGePoint`](MdGePoint.md) |
| `p2?` | `number` \| [`MdGePoint`](MdGePoint.md) |
| `p3?` | `number` |

#### Overrides

[MdGeObject](MdGeObject.md).[constructor](MdGeObject.md#constructor)

## Properties

### imp

• `Protected` **imp**: `any` = `0`

#### Inherited from

[MdGeObject](MdGeObject.md).[imp](MdGeObject.md#imp)

## Methods

### Add

▸ **Add**(`other`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`MdGeVec`](MdGeVec.md) |

#### Returns

`void`

___

### Added

▸ **Added**(`other`): [`MdGeVec`](MdGeVec.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`MdGeVec`](MdGeVec.md) |

#### Returns

[`MdGeVec`](MdGeVec.md)

___

### Angle

▸ **Angle**(`other`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`MdGeVec`](MdGeVec.md) |

#### Returns

`number`

___

### AngleWithRef

▸ **AngleWithRef**(`other`, `ref`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`MdGeVec`](MdGeVec.md) |
| `ref` | [`MdGeVec`](MdGeVec.md) |

#### Returns

`number`

___

### Coord

▸ **Coord**(`theIndex`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theIndex` | `number` |

#### Returns

`number`

___

### Cross

▸ **Cross**(`right`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `right` | [`MdGeVec`](MdGeVec.md) |

#### Returns

`void`

___

### CrossCross

▸ **CrossCross**(`v1`, `v2`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v1` | [`MdGeVec`](MdGeVec.md) |
| `v2` | [`MdGeVec`](MdGeVec.md) |

#### Returns

`void`

___

### CrossCrossed

▸ **CrossCrossed**(`v1`, `v2`): [`MdGeVec`](MdGeVec.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `v1` | [`MdGeVec`](MdGeVec.md) |
| `v2` | [`MdGeVec`](MdGeVec.md) |

#### Returns

[`MdGeVec`](MdGeVec.md)

___

### CrossMagnitude

▸ **CrossMagnitude**(`right`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `right` | [`MdGeVec`](MdGeVec.md) |

#### Returns

`number`

___

### CrossSquareMagnitude

▸ **CrossSquareMagnitude**(`right`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `right` | [`MdGeVec`](MdGeVec.md) |

#### Returns

`number`

___

### Crossed

▸ **Crossed**(`right`): [`MdGeVec`](MdGeVec.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `right` | [`MdGeVec`](MdGeVec.md) |

#### Returns

[`MdGeVec`](MdGeVec.md)

___

### Divide

▸ **Divide**(`scalar`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `scalar` | `number` |

#### Returns

`void`

___

### Divided

▸ **Divided**(`scalar`): [`MdGeVec`](MdGeVec.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `scalar` | `number` |

#### Returns

[`MdGeVec`](MdGeVec.md)

___

### Dot

▸ **Dot**(`other`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`MdGeVec`](MdGeVec.md) |

#### Returns

`number`

___

### DotCross

▸ **DotCross**(`v1`, `v2`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v1` | [`MdGeVec`](MdGeVec.md) |
| `v2` | [`MdGeVec`](MdGeVec.md) |

#### Returns

`number`

___

### IsEqual

▸ **IsEqual**(`other`, `linearTolerance`, `angularTolerance`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`MdGeVec`](MdGeVec.md) |
| `linearTolerance` | `number` |
| `angularTolerance` | `number` |

#### Returns

`boolean`

___

### IsNormal

▸ **IsNormal**(`other`, `angularTolerance`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`MdGeVec`](MdGeVec.md) |
| `angularTolerance` | `number` |

#### Returns

`boolean`

___

### IsOpposite

▸ **IsOpposite**(`other`, `angularTolerance`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`MdGeVec`](MdGeVec.md) |
| `angularTolerance` | `number` |

#### Returns

`boolean`

___

### IsParallel

▸ **IsParallel**(`other`, `angularTolerance`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`MdGeVec`](MdGeVec.md) |
| `angularTolerance` | `number` |

#### Returns

`boolean`

___

### Magnitude

▸ **Magnitude**(): `number`

#### Returns

`number`

___

### MirrorByAxis

▸ **MirrorByAxis**(`axis`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `axis` | [`MdGeAxis`](MdGeAxis.md) |

#### Returns

`void`

___

### MirrorByCSYSR

▸ **MirrorByCSYSR**(`csysr`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `csysr` | [`MdGeCSYSR`](MdGeCSYSR.md) |

#### Returns

`void`

___

### MirrorByVec

▸ **MirrorByVec**(`vec`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `vec` | [`MdGeVec`](MdGeVec.md) |

#### Returns

`void`

___

### MirroredByAxis

▸ **MirroredByAxis**(`axis`): [`MdGeVec`](MdGeVec.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `axis` | [`MdGeAxis`](MdGeAxis.md) |

#### Returns

[`MdGeVec`](MdGeVec.md)

___

### MirroredByCSYSR

▸ **MirroredByCSYSR**(`csysr`): [`MdGeVec`](MdGeVec.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `csysr` | [`MdGeCSYSR`](MdGeCSYSR.md) |

#### Returns

[`MdGeVec`](MdGeVec.md)

___

### MirroredByVec

▸ **MirroredByVec**(`vec`): [`MdGeVec`](MdGeVec.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `vec` | [`MdGeVec`](MdGeVec.md) |

#### Returns

[`MdGeVec`](MdGeVec.md)

___

### Multiplied

▸ **Multiplied**(`scalar`): [`MdGeVec`](MdGeVec.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `scalar` | `number` |

#### Returns

[`MdGeVec`](MdGeVec.md)

___

### Multiply

▸ **Multiply**(`scalar`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `scalar` | `number` |

#### Returns

`void`

___

### Normalize

▸ **Normalize**(): `void`

#### Returns

`void`

___

### Normalized

▸ **Normalized**(): [`MdGeVec`](MdGeVec.md)

#### Returns

[`MdGeVec`](MdGeVec.md)

___

### Reverse

▸ **Reverse**(): `void`

#### Returns

`void`

___

### Reversed

▸ **Reversed**(): [`MdGeVec`](MdGeVec.md)

#### Returns

[`MdGeVec`](MdGeVec.md)

___

### Rotate

▸ **Rotate**(`axis`, `ang`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `axis` | [`MdGeAxis`](MdGeAxis.md) |
| `ang` | `number` |

#### Returns

`void`

___

### Rotated

▸ **Rotated**(`axis`, `ang`): [`MdGeVec`](MdGeVec.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `axis` | [`MdGeAxis`](MdGeAxis.md) |
| `ang` | `number` |

#### Returns

[`MdGeVec`](MdGeVec.md)

___

### Scale

▸ **Scale**(`s`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `number` |

#### Returns

`void`

___

### Scaled

▸ **Scaled**(`s`): [`MdGeVec`](MdGeVec.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `number` |

#### Returns

[`MdGeVec`](MdGeVec.md)

___

### SetCoord

▸ **SetCoord**(`p1`, `p2`, `p3?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `p1` | `number` |
| `p2` | `number` |
| `p3?` | `number` |

#### Returns

`void`

___

### SetLinearForm

▸ **SetLinearForm**(`p1`, `p2`, `p3?`, `p4?`, `p5?`, `p6?`, `p7?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `p1` | `number` \| [`MdGeVec`](MdGeVec.md) |
| `p2` | [`MdGeVec`](MdGeVec.md) |
| `p3?` | `number` \| [`MdGeVec`](MdGeVec.md) |
| `p4?` | [`MdGeVec`](MdGeVec.md) |
| `p5?` | `number` \| [`MdGeVec`](MdGeVec.md) |
| `p6?` | [`MdGeVec`](MdGeVec.md) |
| `p7?` | [`MdGeVec`](MdGeVec.md) |

#### Returns

`void`

___

### SetX

▸ **SetX**(`x`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |

#### Returns

`void`

___

### SetXYZ

▸ **SetXYZ**(`x`, `y`, `z`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `z` | `number` |

#### Returns

`void`

___

### SetY

▸ **SetY**(`y`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `number` |

#### Returns

`void`

___

### SetZ

▸ **SetZ**(`z`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `z` | `number` |

#### Returns

`void`

___

### SquareMagnitude

▸ **SquareMagnitude**(): `number`

#### Returns

`number`

___

### Subtract

▸ **Subtract**(`right`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `right` | [`MdGeVec`](MdGeVec.md) |

#### Returns

`void`

___

### Subtracted

▸ **Subtracted**(`right`): [`MdGeVec`](MdGeVec.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `right` | [`MdGeVec`](MdGeVec.md) |

#### Returns

[`MdGeVec`](MdGeVec.md)

___

### Transform

▸ **Transform**(`t`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `t` | [`MdGeTrsf`](MdGeTrsf.md) |

#### Returns

`void`

___

### Transformed

▸ **Transformed**(`t`): [`MdGeVec`](MdGeVec.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `t` | [`MdGeTrsf`](MdGeTrsf.md) |

#### Returns

[`MdGeVec`](MdGeVec.md)

___

### X

▸ **X**(): `number`

#### Returns

`number`

___

### Y

▸ **Y**(): `number`

#### Returns

`number`

___

### Z

▸ **Z**(): `number`

#### Returns

`number`

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
