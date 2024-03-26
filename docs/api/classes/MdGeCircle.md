[mxcad API 文档](../README.md) / MdGeCircle

# Class: MdGeCircle

表示一个圆。

## Hierarchy

- [`MdGeObject`](MdGeObject.md)

  ↳ **`MdGeCircle`**

## Table of contents

### Constructors

- [constructor](MdGeCircle.md#constructor)

### Properties

- [imp](MdGeCircle.md#imp)

### Methods

- [Area](MdGeCircle.md#area)
- [Axis](MdGeCircle.md#axis)
- [Contains](MdGeCircle.md#contains)
- [Distance](MdGeCircle.md#distance)
- [Edge](MdGeCircle.md#edge)
- [Length](MdGeCircle.md#length)
- [Location](MdGeCircle.md#location)
- [MirrorByAxis](MdGeCircle.md#mirrorbyaxis)
- [MirrorByCSYSR](MdGeCircle.md#mirrorbycsysr)
- [MirrorByPoint](MdGeCircle.md#mirrorbypoint)
- [MirroredByAxis](MdGeCircle.md#mirroredbyaxis)
- [MirroredByCSYSR](MdGeCircle.md#mirroredbycsysr)
- [MirroredByPoint](MdGeCircle.md#mirroredbypoint)
- [Position](MdGeCircle.md#position)
- [Radius](MdGeCircle.md#radius)
- [Rotate](MdGeCircle.md#rotate)
- [Rotated](MdGeCircle.md#rotated)
- [Scale](MdGeCircle.md#scale)
- [Scaled](MdGeCircle.md#scaled)
- [SetAxis](MdGeCircle.md#setaxis)
- [SetLocation](MdGeCircle.md#setlocation)
- [SetPosition](MdGeCircle.md#setposition)
- [SetRadius](MdGeCircle.md#setradius)
- [Shape](MdGeCircle.md#shape)
- [SquareDistance](MdGeCircle.md#squaredistance)
- [Transform](MdGeCircle.md#transform)
- [Transformed](MdGeCircle.md#transformed)
- [TranslateBy2Points](MdGeCircle.md#translateby2points)
- [TranslateByVec](MdGeCircle.md#translatebyvec)
- [TranslatedBy2Points](MdGeCircle.md#translatedby2points)
- [TranslatedByVec](MdGeCircle.md#translatedbyvec)
- [Wire](MdGeCircle.md#wire)
- [XAxis](MdGeCircle.md#xaxis)
- [YAxis](MdGeCircle.md#yaxis)
- [getImp](MdGeCircle.md#getimp)
- [initTempObject](MdGeCircle.md#inittempobject)

## Constructors

### constructor

• **new MdGeCircle**(`p1?`, `p2?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `p1?` | `object` \| [`MdGeCSYSR`](MdGeCSYSR.md) |
| `p2?` | `number` |

#### Overrides

[MdGeObject](MdGeObject.md).[constructor](MdGeObject.md#constructor)

## Properties

### imp

• `Protected` **imp**: `any` = `0`

#### Inherited from

[MdGeObject](MdGeObject.md).[imp](MdGeObject.md#imp)

## Methods

### Area

▸ **Area**(): `number`

#### Returns

`number`

___

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

### Distance

▸ **Distance**(`theP`): `number`

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

### Length

▸ **Length**(): `number`

#### Returns

`number`

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

▸ **MirroredByAxis**(`theA1`): [`MdGeCircle`](MdGeCircle.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theA1` | [`MdGeAxis`](MdGeAxis.md) |

#### Returns

[`MdGeCircle`](MdGeCircle.md)

___

### MirroredByCSYSR

▸ **MirroredByCSYSR**(`theA2`): [`MdGeCircle`](MdGeCircle.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theA2` | [`MdGeCSYSR`](MdGeCSYSR.md) |

#### Returns

[`MdGeCircle`](MdGeCircle.md)

___

### MirroredByPoint

▸ **MirroredByPoint**(`theP`): [`MdGeCircle`](MdGeCircle.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theP` | [`MdGePoint`](MdGePoint.md) |

#### Returns

[`MdGeCircle`](MdGeCircle.md)

___

### Position

▸ **Position**(): [`MdGeCSYSR`](MdGeCSYSR.md)

#### Returns

[`MdGeCSYSR`](MdGeCSYSR.md)

___

### Radius

▸ **Radius**(): `number`

#### Returns

`number`

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

▸ **Rotated**(`theA1`, `theAng`): [`MdGeCircle`](MdGeCircle.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theA1` | [`MdGeAxis`](MdGeAxis.md) |
| `theAng` | `number` |

#### Returns

[`MdGeCircle`](MdGeCircle.md)

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

▸ **Scaled**(`theP`, `theS`): [`MdGeCircle`](MdGeCircle.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theP` | [`MdGePoint`](MdGePoint.md) |
| `theS` | `number` |

#### Returns

[`MdGeCircle`](MdGeCircle.md)

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

▸ **SetLocation**(`theP`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theP` | [`MdGePoint`](MdGePoint.md) |

#### Returns

`void`

___

### SetPosition

▸ **SetPosition**(`theA2`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theA2` | [`MdGeCSYSR`](MdGeCSYSR.md) |

#### Returns

`void`

___

### SetRadius

▸ **SetRadius**(`theRadius`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theRadius` | `number` |

#### Returns

`void`

___

### Shape

▸ **Shape**(): [`MdGeShape`](MdGeShape.md)

#### Returns

[`MdGeShape`](MdGeShape.md)

___

### SquareDistance

▸ **SquareDistance**(`theP`): `number`

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

▸ **Transformed**(`theT`): [`MdGeCircle`](MdGeCircle.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theT` | [`MdGeTrsf`](MdGeTrsf.md) |

#### Returns

[`MdGeCircle`](MdGeCircle.md)

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

▸ **TranslatedBy2Points**(`theP1`, `theP2`): [`MdGeCircle`](MdGeCircle.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theP1` | [`MdGePoint`](MdGePoint.md) |
| `theP2` | [`MdGePoint`](MdGePoint.md) |

#### Returns

[`MdGeCircle`](MdGeCircle.md)

___

### TranslatedByVec

▸ **TranslatedByVec**(`theV`): [`MdGeCircle`](MdGeCircle.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theV` | [`MdGeVec`](MdGeVec.md) |

#### Returns

[`MdGeCircle`](MdGeCircle.md)

___

### Wire

▸ **Wire**(): [`MdGeWire`](MdGeWire.md)

#### Returns

[`MdGeWire`](MdGeWire.md)

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
