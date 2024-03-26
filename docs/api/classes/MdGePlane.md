[mxcad API 文档](../README.md) / MdGePlane

# Class: MdGePlane

表示一个平面

## Hierarchy

- [`MdGeObject`](MdGeObject.md)

  ↳ **`MdGePlane`**

## Table of contents

### Constructors

- [constructor](MdGePlane.md#constructor)

### Properties

- [imp](MdGePlane.md#imp)

### Methods

- [Axis](MdGePlane.md#axis)
- [Contains](MdGePlane.md#contains)
- [Direct](MdGePlane.md#direct)
- [DistanceToPlane](MdGePlane.md#distancetoplane)
- [DistanceToPoint](MdGePlane.md#distancetopoint)
- [Face](MdGePlane.md#face)
- [Location](MdGePlane.md#location)
- [MirrorByAxis](MdGePlane.md#mirrorbyaxis)
- [MirrorByCSYSR](MdGePlane.md#mirrorbycsysr)
- [MirrorByPoint](MdGePlane.md#mirrorbypoint)
- [MirroredByAxis](MdGePlane.md#mirroredbyaxis)
- [MirroredByCSYSR](MdGePlane.md#mirroredbycsysr)
- [MirroredByPoint](MdGePlane.md#mirroredbypoint)
- [Position](MdGePlane.md#position)
- [Rotate](MdGePlane.md#rotate)
- [Rotated](MdGePlane.md#rotated)
- [Scale](MdGePlane.md#scale)
- [Scaled](MdGePlane.md#scaled)
- [SetAxis](MdGePlane.md#setaxis)
- [SetLocation](MdGePlane.md#setlocation)
- [SetPosition](MdGePlane.md#setposition)
- [SquareDistanceToPlane](MdGePlane.md#squaredistancetoplane)
- [SquareDistanceToPoint](MdGePlane.md#squaredistancetopoint)
- [Transform](MdGePlane.md#transform)
- [Transformed](MdGePlane.md#transformed)
- [TranslateBy2Points](MdGePlane.md#translateby2points)
- [TranslateByVec](MdGePlane.md#translatebyvec)
- [TranslatedBy2Points](MdGePlane.md#translatedby2points)
- [TranslatedByVec](MdGePlane.md#translatedbyvec)
- [UReverse](MdGePlane.md#ureverse)
- [VReverse](MdGePlane.md#vreverse)
- [XAxis](MdGePlane.md#xaxis)
- [YAxis](MdGePlane.md#yaxis)
- [getImp](MdGePlane.md#getimp)
- [initTempObject](MdGePlane.md#inittempobject)

## Constructors

### constructor

• **new MdGePlane**(`p1?`, `p2?`, `p3?`, `p4?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `p1?` | `number` \| `object` \| [`MdGePoint`](MdGePoint.md) \| [`MdGeCSYS`](MdGeCSYS.md) |
| `p2?` | `number` \| [`MdGeDir`](MdGeDir.md) |
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

### Axis

▸ **Axis**(): [`MdGeAxis`](MdGeAxis.md)

#### Returns

[`MdGeAxis`](MdGeAxis.md)

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

### Direct

▸ **Direct**(): `boolean`

#### Returns

`boolean`

___

### DistanceToPlane

▸ **DistanceToPlane**(`theOther`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theOther` | [`MdGePlane`](MdGePlane.md) |

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

### Face

▸ **Face**(`p1?`, `p2?`, `p3?`, `p4?`): [`MdGeFace`](MdGeFace.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `p1?` | `number` \| [`MdGeWire`](MdGeWire.md) |
| `p2?` | `number` \| `boolean` |
| `p3?` | `number` |
| `p4?` | `number` |

#### Returns

[`MdGeFace`](MdGeFace.md)

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

▸ **MirroredByAxis**(`theA1`): [`MdGePlane`](MdGePlane.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theA1` | [`MdGeAxis`](MdGeAxis.md) |

#### Returns

[`MdGePlane`](MdGePlane.md)

___

### MirroredByCSYSR

▸ **MirroredByCSYSR**(`theA2`): [`MdGePlane`](MdGePlane.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theA2` | [`MdGeCSYSR`](MdGeCSYSR.md) |

#### Returns

[`MdGePlane`](MdGePlane.md)

___

### MirroredByPoint

▸ **MirroredByPoint**(`theP`): [`MdGePlane`](MdGePlane.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theP` | [`MdGePoint`](MdGePoint.md) |

#### Returns

[`MdGePlane`](MdGePlane.md)

___

### Position

▸ **Position**(): [`MdGeCSYS`](MdGeCSYS.md)

#### Returns

[`MdGeCSYS`](MdGeCSYS.md)

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

▸ **Rotated**(`theA1`, `theAng`): [`MdGePlane`](MdGePlane.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theA1` | [`MdGeAxis`](MdGeAxis.md) |
| `theAng` | `number` |

#### Returns

[`MdGePlane`](MdGePlane.md)

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

▸ **Scaled**(`theP`, `theS`): [`MdGePlane`](MdGePlane.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theP` | [`MdGePoint`](MdGePoint.md) |
| `theS` | `number` |

#### Returns

[`MdGePlane`](MdGePlane.md)

___

### SetAxis

▸ **SetAxis**(`theA1`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theA1` | [`MdGeAxis`](MdGeAxis.md) |

#### Returns

`void`

___

### SetLocation

▸ **SetLocation**(`theLoc`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theLoc` | [`MdGePoint`](MdGePoint.md) |

#### Returns

`void`

___

### SetPosition

▸ **SetPosition**(`theA3`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theA3` | [`MdGeCSYS`](MdGeCSYS.md) |

#### Returns

`void`

___

### SquareDistanceToPlane

▸ **SquareDistanceToPlane**(`theOther`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theOther` | [`MdGePlane`](MdGePlane.md) |

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

▸ **Transformed**(`theT`): [`MdGePlane`](MdGePlane.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theT` | [`MdGeTrsf`](MdGeTrsf.md) |

#### Returns

[`MdGePlane`](MdGePlane.md)

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

▸ **TranslatedBy2Points**(`theP1`, `theP2`): [`MdGePlane`](MdGePlane.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theP1` | [`MdGePoint`](MdGePoint.md) |
| `theP2` | [`MdGePoint`](MdGePoint.md) |

#### Returns

[`MdGePlane`](MdGePlane.md)

___

### TranslatedByVec

▸ **TranslatedByVec**(`theV`): [`MdGePlane`](MdGePlane.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theV` | [`MdGeVec`](MdGeVec.md) |

#### Returns

[`MdGePlane`](MdGePlane.md)

___

### UReverse

▸ **UReverse**(): `void`

#### Returns

`void`

___

### VReverse

▸ **VReverse**(): `void`

#### Returns

`void`

___

### XAxis

▸ **XAxis**(): [`MdGeAxis`](MdGeAxis.md)

#### Returns

[`MdGeAxis`](MdGeAxis.md)

___

### YAxis

▸ **YAxis**(): [`MdGeAxis`](MdGeAxis.md)

#### Returns

[`MdGeAxis`](MdGeAxis.md)

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
