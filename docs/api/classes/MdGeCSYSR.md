[mxcad API 文档](../README.md) / MdGeCSYSR

# Class: MdGeCSYSR

表示右手坐标系。

## Hierarchy

- [`MdGeObject`](MdGeObject.md)

  ↳ **`MdGeCSYSR`**

## Table of contents

### Constructors

- [constructor](MdGeCSYSR.md#constructor)

### Properties

- [imp](MdGeCSYSR.md#imp)

### Methods

- [Angle](MdGeCSYSR.md#angle)
- [Axis](MdGeCSYSR.md#axis)
- [IsCoplanarWithAxis](MdGeCSYSR.md#iscoplanarwithaxis)
- [IsCoplanarWithCSYSR](MdGeCSYSR.md#iscoplanarwithcsysr)
- [MirrorByAxis](MdGeCSYSR.md#mirrorbyaxis)
- [MirrorByCSYSR](MdGeCSYSR.md#mirrorbycsysr)
- [MirrorByPoint](MdGeCSYSR.md#mirrorbypoint)
- [MirroredByAxis](MdGeCSYSR.md#mirroredbyaxis)
- [MirroredByCSYSR](MdGeCSYSR.md#mirroredbycsysr)
- [MirroredByPoint](MdGeCSYSR.md#mirroredbypoint)
- [Origin](MdGeCSYSR.md#origin)
- [Rotate](MdGeCSYSR.md#rotate)
- [Rotated](MdGeCSYSR.md#rotated)
- [Scale](MdGeCSYSR.md#scale)
- [Scaled](MdGeCSYSR.md#scaled)
- [SetOrigin](MdGeCSYSR.md#setorigin)
- [SetXDirection](MdGeCSYSR.md#setxdirection)
- [SetYDirection](MdGeCSYSR.md#setydirection)
- [SetZDirection](MdGeCSYSR.md#setzdirection)
- [Transform](MdGeCSYSR.md#transform)
- [Transformed](MdGeCSYSR.md#transformed)
- [TranslateBy2Points](MdGeCSYSR.md#translateby2points)
- [TranslateByVec](MdGeCSYSR.md#translatebyvec)
- [TranslatedBy2Points](MdGeCSYSR.md#translatedby2points)
- [TranslatedByVec](MdGeCSYSR.md#translatedbyvec)
- [XDirection](MdGeCSYSR.md#xdirection)
- [YDirection](MdGeCSYSR.md#ydirection)
- [ZDirection](MdGeCSYSR.md#zdirection)
- [getImp](MdGeCSYSR.md#getimp)
- [initTempObject](MdGeCSYSR.md#inittempobject)

## Constructors

### constructor

• **new MdGeCSYSR**(`p1?`, `p2?`, `p3?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `p1?` | `object` \| [`MdGePoint`](MdGePoint.md) |
| `p2?` | [`MdGeDir`](MdGeDir.md) |
| `p3?` | [`MdGeDir`](MdGeDir.md) |

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
| `theOther` | [`MdGeCSYSR`](MdGeCSYSR.md) |

#### Returns

`number`

___

### Axis

▸ **Axis**(): [`MdGeAxis`](MdGeAxis.md)

#### Returns

[`MdGeAxis`](MdGeAxis.md)

___

### IsCoplanarWithAxis

▸ **IsCoplanarWithAxis**(`A1`, `LinearTolerance`, `AngularTolerance`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `A1` | [`MdGeAxis`](MdGeAxis.md) |
| `LinearTolerance` | `number` |
| `AngularTolerance` | `number` |

#### Returns

`boolean`

___

### IsCoplanarWithCSYSR

▸ **IsCoplanarWithCSYSR**(`Other`, `LinearTolerance`, `AngularTolerance`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `Other` | [`MdGeCSYSR`](MdGeCSYSR.md) |
| `LinearTolerance` | `number` |
| `AngularTolerance` | `number` |

#### Returns

`boolean`

___

### MirrorByAxis

▸ **MirrorByAxis**(`A1`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `A1` | [`MdGeAxis`](MdGeAxis.md) |

#### Returns

`void`

___

### MirrorByCSYSR

▸ **MirrorByCSYSR**(`A2`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `A2` | [`MdGeCSYSR`](MdGeCSYSR.md) |

#### Returns

`void`

___

### MirrorByPoint

▸ **MirrorByPoint**(`P`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `P` | [`MdGePoint`](MdGePoint.md) |

#### Returns

`void`

___

### MirroredByAxis

▸ **MirroredByAxis**(`A1`): [`MdGeCSYSR`](MdGeCSYSR.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `A1` | [`MdGeAxis`](MdGeAxis.md) |

#### Returns

[`MdGeCSYSR`](MdGeCSYSR.md)

___

### MirroredByCSYSR

▸ **MirroredByCSYSR**(`A2`): [`MdGeCSYSR`](MdGeCSYSR.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `A2` | [`MdGeCSYSR`](MdGeCSYSR.md) |

#### Returns

[`MdGeCSYSR`](MdGeCSYSR.md)

___

### MirroredByPoint

▸ **MirroredByPoint**(`P`): [`MdGeCSYSR`](MdGeCSYSR.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `P` | [`MdGePoint`](MdGePoint.md) |

#### Returns

[`MdGeCSYSR`](MdGeCSYSR.md)

___

### Origin

▸ **Origin**(): [`MdGePoint`](MdGePoint.md)

#### Returns

[`MdGePoint`](MdGePoint.md)

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

▸ **Rotated**(`theA1`, `theAng`): [`MdGeCSYSR`](MdGeCSYSR.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theA1` | [`MdGeAxis`](MdGeAxis.md) |
| `theAng` | `number` |

#### Returns

[`MdGeCSYSR`](MdGeCSYSR.md)

___

### Scale

▸ **Scale**(`theP`, `theS`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theP` | [`MdGePoint`](MdGePoint.md) |
| `theS` | `number` |

#### Returns

`void`

___

### Scaled

▸ **Scaled**(`theP`, `theS`): [`MdGeCSYSR`](MdGeCSYSR.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theP` | [`MdGePoint`](MdGePoint.md) |
| `theS` | `number` |

#### Returns

[`MdGeCSYSR`](MdGeCSYSR.md)

___

### SetOrigin

▸ **SetOrigin**(`p1`, `p2?`, `p3?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `p1` | `number` \| [`MdGePoint`](MdGePoint.md) |
| `p2?` | `number` |
| `p3?` | `number` |

#### Returns

`void`

___

### SetXDirection

▸ **SetXDirection**(`x_dir`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x_dir` | [`MdGeDir`](MdGeDir.md) |

#### Returns

`void`

___

### SetYDirection

▸ **SetYDirection**(`y_dir`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `y_dir` | [`MdGeDir`](MdGeDir.md) |

#### Returns

`void`

___

### SetZDirection

▸ **SetZDirection**(`z_dir`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `z_dir` | [`MdGeDir`](MdGeDir.md) |

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

▸ **Transformed**(`theT`): [`MdGeCSYSR`](MdGeCSYSR.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theT` | [`MdGeTrsf`](MdGeTrsf.md) |

#### Returns

[`MdGeCSYSR`](MdGeCSYSR.md)

___

### TranslateBy2Points

▸ **TranslateBy2Points**(`theP1`, `theP2`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theP1` | [`MdGePoint`](MdGePoint.md) |
| `theP2` | [`MdGePoint`](MdGePoint.md) |

#### Returns

`void`

___

### TranslateByVec

▸ **TranslateByVec**(`theV`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theV` | [`MdGeVec`](MdGeVec.md) |

#### Returns

`void`

___

### TranslatedBy2Points

▸ **TranslatedBy2Points**(`theP1`, `theP2`): [`MdGeCSYSR`](MdGeCSYSR.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theP1` | [`MdGePoint`](MdGePoint.md) |
| `theP2` | [`MdGePoint`](MdGePoint.md) |

#### Returns

[`MdGeCSYSR`](MdGeCSYSR.md)

___

### TranslatedByVec

▸ **TranslatedByVec**(`theV`): [`MdGeCSYSR`](MdGeCSYSR.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theV` | [`MdGeVec`](MdGeVec.md) |

#### Returns

[`MdGeCSYSR`](MdGeCSYSR.md)

___

### XDirection

▸ **XDirection**(): [`MdGeDir`](MdGeDir.md)

#### Returns

[`MdGeDir`](MdGeDir.md)

___

### YDirection

▸ **YDirection**(): [`MdGeDir`](MdGeDir.md)

#### Returns

[`MdGeDir`](MdGeDir.md)

___

### ZDirection

▸ **ZDirection**(): [`MdGeDir`](MdGeDir.md)

#### Returns

[`MdGeDir`](MdGeDir.md)

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
