[mxcad API 文档](../README.md) / MdGeLine

# Class: MdGeLine

表示一条直线

## Hierarchy

- [`MdGeObject`](MdGeObject.md)

  ↳ **`MdGeLine`**

## Table of contents

### Constructors

- [constructor](MdGeLine.md#constructor)

### Properties

- [imp](MdGeLine.md#imp)

### Methods

- [Angle](MdGeLine.md#angle)
- [Contains](MdGeLine.md#contains)
- [Direction](MdGeLine.md#direction)
- [DistanceToLine](MdGeLine.md#distancetoline)
- [DistanceToPoint](MdGeLine.md#distancetopoint)
- [Edge](MdGeLine.md#edge)
- [Location](MdGeLine.md#location)
- [MirrorByAxis](MdGeLine.md#mirrorbyaxis)
- [MirrorByCSYSR](MdGeLine.md#mirrorbycsysr)
- [MirrorByPoint](MdGeLine.md#mirrorbypoint)
- [MirroredByAxis](MdGeLine.md#mirroredbyaxis)
- [MirroredByCSYSR](MdGeLine.md#mirroredbycsysr)
- [MirroredByPoint](MdGeLine.md#mirroredbypoint)
- [Normal](MdGeLine.md#normal)
- [Position](MdGeLine.md#position)
- [Reverse](MdGeLine.md#reverse)
- [Reversed](MdGeLine.md#reversed)
- [Rotate](MdGeLine.md#rotate)
- [Rotated](MdGeLine.md#rotated)
- [Scale](MdGeLine.md#scale)
- [Scaled](MdGeLine.md#scaled)
- [SetDirection](MdGeLine.md#setdirection)
- [SetLocation](MdGeLine.md#setlocation)
- [SetPosition](MdGeLine.md#setposition)
- [Shape](MdGeLine.md#shape)
- [SquareDistanceToLine](MdGeLine.md#squaredistancetoline)
- [SquareDistanceToPoint](MdGeLine.md#squaredistancetopoint)
- [Transform](MdGeLine.md#transform)
- [Transformed](MdGeLine.md#transformed)
- [TranslateBy2Points](MdGeLine.md#translateby2points)
- [TranslateByVec](MdGeLine.md#translatebyvec)
- [TranslatedBy2Points](MdGeLine.md#translatedby2points)
- [TranslatedByVec](MdGeLine.md#translatedbyvec)
- [Wire](MdGeLine.md#wire)
- [getImp](MdGeLine.md#getimp)
- [initTempObject](MdGeLine.md#inittempobject)

## Constructors

### constructor

• **new MdGeLine**(`p1?`, `p2?`)

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

### Angle

▸ **Angle**(`theOther`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theOther` | [`MdGeLine`](MdGeLine.md) |

#### Returns

`number`

___

### Contains

▸ **Contains**(`theP`, `theLinearTolerance`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theP` | [`MdGePoint`](MdGePoint.md) |
| `theLinearTolerance` | `number` |

#### Returns

`boolean`

___

### Direction

▸ **Direction**(): [`MdGeDir`](MdGeDir.md)

#### Returns

[`MdGeDir`](MdGeDir.md)

___

### DistanceToLine

▸ **DistanceToLine**(`theOther`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theOther` | [`MdGeLine`](MdGeLine.md) |

#### Returns

`number`

___

### DistanceToPoint

▸ **DistanceToPoint**(`theP`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theP` | [`MdGePoint`](MdGePoint.md) |

#### Returns

`number`

___

### Edge

▸ **Edge**(`p1?`, `p2?`): [`MdGeEdge`](MdGeEdge.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `p1?` | `number` |
| `p2?` | `number` |

#### Returns

[`MdGeEdge`](MdGeEdge.md)

___

### Location

▸ **Location**(): [`MdGePoint`](MdGePoint.md)

#### Returns

[`MdGePoint`](MdGePoint.md)

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

### MirrorByPoint

▸ **MirrorByPoint**(`theP`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theP` | [`MdGePoint`](MdGePoint.md) |

#### Returns

`void`

___

### MirroredByAxis

▸ **MirroredByAxis**(`theA1`): [`MdGeLine`](MdGeLine.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theA1` | [`MdGeAxis`](MdGeAxis.md) |

#### Returns

[`MdGeLine`](MdGeLine.md)

___

### MirroredByCSYSR

▸ **MirroredByCSYSR**(`theA2`): [`MdGeLine`](MdGeLine.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theA2` | [`MdGeCSYSR`](MdGeCSYSR.md) |

#### Returns

[`MdGeLine`](MdGeLine.md)

___

### MirroredByPoint

▸ **MirroredByPoint**(`theP`): [`MdGeLine`](MdGeLine.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theP` | [`MdGePoint`](MdGePoint.md) |

#### Returns

[`MdGeLine`](MdGeLine.md)

___

### Normal

▸ **Normal**(`theP`): [`MdGeLine`](MdGeLine.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theP` | [`MdGePoint`](MdGePoint.md) |

#### Returns

[`MdGeLine`](MdGeLine.md)

___

### Position

▸ **Position**(): [`MdGeAxis`](MdGeAxis.md)

#### Returns

[`MdGeAxis`](MdGeAxis.md)

___

### Reverse

▸ **Reverse**(): `void`

#### Returns

`void`

___

### Reversed

▸ **Reversed**(): [`MdGeLine`](MdGeLine.md)

#### Returns

[`MdGeLine`](MdGeLine.md)

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

▸ **Rotated**(`theA1`, `theAng`): [`MdGeLine`](MdGeLine.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theA1` | [`MdGeAxis`](MdGeAxis.md) |
| `theAng` | `number` |

#### Returns

[`MdGeLine`](MdGeLine.md)

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

▸ **Scaled**(`theP`, `theS`): [`MdGeLine`](MdGeLine.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theP` | [`MdGePoint`](MdGePoint.md) |
| `theS` | `number` |

#### Returns

[`MdGeLine`](MdGeLine.md)

___

### SetDirection

▸ **SetDirection**(`theV`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theV` | [`MdGeDir`](MdGeDir.md) |

#### Returns

`void`

___

### SetLocation

▸ **SetLocation**(`theP`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theP` | [`MdGePoint`](MdGePoint.md) |

#### Returns

`void`

___

### SetPosition

▸ **SetPosition**(`theA1`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theA1` | [`MdGeAxis`](MdGeAxis.md) |

#### Returns

`void`

___

### Shape

▸ **Shape**(): [`MdGeShape`](MdGeShape.md)

#### Returns

[`MdGeShape`](MdGeShape.md)

___

### SquareDistanceToLine

▸ **SquareDistanceToLine**(`theOther`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theOther` | [`MdGeLine`](MdGeLine.md) |

#### Returns

`number`

___

### SquareDistanceToPoint

▸ **SquareDistanceToPoint**(`theP`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theP` | [`MdGePoint`](MdGePoint.md) |

#### Returns

`number`

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

▸ **Transformed**(`theT`): [`MdGeLine`](MdGeLine.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theT` | [`MdGeTrsf`](MdGeTrsf.md) |

#### Returns

[`MdGeLine`](MdGeLine.md)

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

▸ **TranslatedBy2Points**(`theP1`, `theP2`): [`MdGeLine`](MdGeLine.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theP1` | [`MdGePoint`](MdGePoint.md) |
| `theP2` | [`MdGePoint`](MdGePoint.md) |

#### Returns

[`MdGeLine`](MdGeLine.md)

___

### TranslatedByVec

▸ **TranslatedByVec**(`theV`): [`MdGeLine`](MdGeLine.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theV` | [`MdGeVec`](MdGeVec.md) |

#### Returns

[`MdGeLine`](MdGeLine.md)

___

### Wire

▸ **Wire**(): [`MdGeWire`](MdGeWire.md)

#### Returns

[`MdGeWire`](MdGeWire.md)

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
