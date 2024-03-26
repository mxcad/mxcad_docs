[mxcad API 文档](../README.md) / MdGeDir

# Class: MdGeDir

表示一个方向

## Hierarchy

- [`MdGeObject`](MdGeObject.md)

  ↳ **`MdGeDir`**

## Table of contents

### Constructors

- [constructor](MdGeDir.md#constructor)

### Properties

- [imp](MdGeDir.md#imp)

### Methods

- [Angle](MdGeDir.md#angle)
- [AngleWithRef](MdGeDir.md#anglewithref)
- [Coord](MdGeDir.md#coord)
- [Cross](MdGeDir.md#cross)
- [CrossCross](MdGeDir.md#crosscross)
- [CrossCrossed](MdGeDir.md#crosscrossed)
- [Crossed](MdGeDir.md#crossed)
- [Dot](MdGeDir.md#dot)
- [DotCross](MdGeDir.md#dotcross)
- [IsEqual](MdGeDir.md#isequal)
- [IsNormal](MdGeDir.md#isnormal)
- [IsOpposite](MdGeDir.md#isopposite)
- [IsParallel](MdGeDir.md#isparallel)
- [MirrorByAxis](MdGeDir.md#mirrorbyaxis)
- [MirrorByCSYSR](MdGeDir.md#mirrorbycsysr)
- [MirrorByVec](MdGeDir.md#mirrorbyvec)
- [MirroredByAxis](MdGeDir.md#mirroredbyaxis)
- [MirroredByCSYSR](MdGeDir.md#mirroredbycsysr)
- [MirroredByVec](MdGeDir.md#mirroredbyvec)
- [Reverse](MdGeDir.md#reverse)
- [Reversed](MdGeDir.md#reversed)
- [Rotate](MdGeDir.md#rotate)
- [Rotated](MdGeDir.md#rotated)
- [SetCoord](MdGeDir.md#setcoord)
- [SetX](MdGeDir.md#setx)
- [SetXYZ](MdGeDir.md#setxyz)
- [SetY](MdGeDir.md#sety)
- [SetZ](MdGeDir.md#setz)
- [Transform](MdGeDir.md#transform)
- [Transformed](MdGeDir.md#transformed)
- [X](MdGeDir.md#x)
- [XYZ](MdGeDir.md#xyz)
- [Y](MdGeDir.md#y)
- [Z](MdGeDir.md#z)
- [getImp](MdGeDir.md#getimp)
- [initTempObject](MdGeDir.md#inittempobject)

## Constructors

### constructor

• **new MdGeDir**(`p1?`, `p2?`, `p3?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `p1?` | `number` \| `object` \| [`MdGeVec`](MdGeVec.md) |
| `p2?` | `number` |
| `p3?` | `number` |

#### Overrides

[MdGeObject](MdGeObject.md).[constructor](MdGeObject.md#constructor)

## Properties

### imp

• `Protected` **imp**: `any` = `0`

#### Inherited from

[MdGeObject](MdGeObject.md).[imp](MdGeObject.md#imp)

## Methods

### Angle

▸ **Angle**(`theOther`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theOther` | [`MdGeDir`](MdGeDir.md) |

#### Returns

`number`

___

### AngleWithRef

▸ **AngleWithRef**(`theOther`, `theVRef`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theOther` | [`MdGeDir`](MdGeDir.md) |
| `theVRef` | [`MdGeDir`](MdGeDir.md) |

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

▸ **Cross**(`theRight`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theRight` | [`MdGeDir`](MdGeDir.md) |

#### Returns

`void`

___

### CrossCross

▸ **CrossCross**(`theV1`, `theV2`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theV1` | [`MdGeDir`](MdGeDir.md) |
| `theV2` | [`MdGeDir`](MdGeDir.md) |

#### Returns

`void`

___

### CrossCrossed

▸ **CrossCrossed**(`theV1`, `theV2`): [`MdGeDir`](MdGeDir.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theV1` | [`MdGeDir`](MdGeDir.md) |
| `theV2` | [`MdGeDir`](MdGeDir.md) |

#### Returns

[`MdGeDir`](MdGeDir.md)

___

### Crossed

▸ **Crossed**(`theRight`): [`MdGeDir`](MdGeDir.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theRight` | [`MdGeDir`](MdGeDir.md) |

#### Returns

[`MdGeDir`](MdGeDir.md)

___

### Dot

▸ **Dot**(`theOther`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theOther` | [`MdGeDir`](MdGeDir.md) |

#### Returns

`number`

___

### DotCross

▸ **DotCross**(`theV1`, `theV2`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theV1` | [`MdGeDir`](MdGeDir.md) |
| `theV2` | [`MdGeDir`](MdGeDir.md) |

#### Returns

`number`

___

### IsEqual

▸ **IsEqual**(`theOther`, `theAngularTolerance`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theOther` | [`MdGeDir`](MdGeDir.md) |
| `theAngularTolerance` | `number` |

#### Returns

`boolean`

___

### IsNormal

▸ **IsNormal**(`theOther`, `theAngularTolerance`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theOther` | [`MdGeDir`](MdGeDir.md) |
| `theAngularTolerance` | `number` |

#### Returns

`boolean`

___

### IsOpposite

▸ **IsOpposite**(`theOther`, `theAngularTolerance`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theOther` | [`MdGeDir`](MdGeDir.md) |
| `theAngularTolerance` | `number` |

#### Returns

`boolean`

___

### IsParallel

▸ **IsParallel**(`theOther`, `theAngularTolerance`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theOther` | [`MdGeDir`](MdGeDir.md) |
| `theAngularTolerance` | `number` |

#### Returns

`boolean`

___

### MirrorByAxis

▸ **MirrorByAxis**(`theA1`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theA1` | [`MdGeAxis`](MdGeAxis.md) |

#### Returns

`void`

___

### MirrorByCSYSR

▸ **MirrorByCSYSR**(`theA2`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theA2` | [`MdGeCSYSR`](MdGeCSYSR.md) |

#### Returns

`void`

___

### MirrorByVec

▸ **MirrorByVec**(`theV`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theV` | [`MdGeDir`](MdGeDir.md) |

#### Returns

`void`

___

### MirroredByAxis

▸ **MirroredByAxis**(`theA1`): [`MdGeDir`](MdGeDir.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theA1` | [`MdGeAxis`](MdGeAxis.md) |

#### Returns

[`MdGeDir`](MdGeDir.md)

___

### MirroredByCSYSR

▸ **MirroredByCSYSR**(`theA2`): [`MdGeDir`](MdGeDir.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theA2` | [`MdGeCSYSR`](MdGeCSYSR.md) |

#### Returns

[`MdGeDir`](MdGeDir.md)

___

### MirroredByVec

▸ **MirroredByVec**(`theV`): [`MdGeDir`](MdGeDir.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theV` | [`MdGeDir`](MdGeDir.md) |

#### Returns

[`MdGeDir`](MdGeDir.md)

___

### Reverse

▸ **Reverse**(): `void`

#### Returns

`void`

___

### Reversed

▸ **Reversed**(): [`MdGeDir`](MdGeDir.md)

#### Returns

[`MdGeDir`](MdGeDir.md)

___

### Rotate

▸ **Rotate**(`theA1`, `theAng`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theA1` | [`MdGeAxis`](MdGeAxis.md) |
| `theAng` | `number` |

#### Returns

`void`

___

### Rotated

▸ **Rotated**(`theA1`, `theAng`): [`MdGeDir`](MdGeDir.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theA1` | [`MdGeAxis`](MdGeAxis.md) |
| `theAng` | `number` |

#### Returns

[`MdGeDir`](MdGeDir.md)

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

### SetX

▸ **SetX**(`theXv`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theXv` | `number` |

#### Returns

`void`

___

### SetXYZ

▸ **SetXYZ**(`theCoord`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theCoord` | [`MdGeXYZ`](MdGeXYZ.md) |

#### Returns

`void`

___

### SetY

▸ **SetY**(`theYv`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theYv` | `number` |

#### Returns

`void`

___

### SetZ

▸ **SetZ**(`theZv`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theZv` | `number` |

#### Returns

`void`

___

### Transform

▸ **Transform**(`theT`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theT` | [`MdGeTrsf`](MdGeTrsf.md) |

#### Returns

`void`

___

### Transformed

▸ **Transformed**(`theT`): [`MdGeDir`](MdGeDir.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theT` | [`MdGeTrsf`](MdGeTrsf.md) |

#### Returns

[`MdGeDir`](MdGeDir.md)

___

### X

▸ **X**(): `number`

#### Returns

`number`

___

### XYZ

▸ **XYZ**(): [`MdGeXYZ`](MdGeXYZ.md)

#### Returns

[`MdGeXYZ`](MdGeXYZ.md)

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
