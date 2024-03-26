[mxcad API 文档](../README.md) / MdGeHypr

# Class: MdGeHypr

表示双曲线。

## Hierarchy

- [`MdGeObject`](MdGeObject.md)

  ↳ **`MdGeHypr`**

## Table of contents

### Constructors

- [constructor](MdGeHypr.md#constructor)

### Properties

- [imp](MdGeHypr.md#imp)

### Methods

- [Asymptote1](MdGeHypr.md#asymptote1)
- [Asymptote2](MdGeHypr.md#asymptote2)
- [Axis](MdGeHypr.md#axis)
- [ConjugateBranch1](MdGeHypr.md#conjugatebranch1)
- [ConjugateBranch2](MdGeHypr.md#conjugatebranch2)
- [Directrix1](MdGeHypr.md#directrix1)
- [Directrix2](MdGeHypr.md#directrix2)
- [Eccentricity](MdGeHypr.md#eccentricity)
- [Edge](MdGeHypr.md#edge)
- [Focal](MdGeHypr.md#focal)
- [Focus1](MdGeHypr.md#focus1)
- [Focus2](MdGeHypr.md#focus2)
- [Location](MdGeHypr.md#location)
- [MajorRadius](MdGeHypr.md#majorradius)
- [MinorRadius](MdGeHypr.md#minorradius)
- [MirrorByAxis](MdGeHypr.md#mirrorbyaxis)
- [MirrorByCSYSR](MdGeHypr.md#mirrorbycsysr)
- [MirrorByPoint](MdGeHypr.md#mirrorbypoint)
- [MirroredByAxis](MdGeHypr.md#mirroredbyaxis)
- [MirroredByCSYSR](MdGeHypr.md#mirroredbycsysr)
- [MirroredByPoint](MdGeHypr.md#mirroredbypoint)
- [OtherBranch](MdGeHypr.md#otherbranch)
- [Parameter](MdGeHypr.md#parameter)
- [Position](MdGeHypr.md#position)
- [Rotate](MdGeHypr.md#rotate)
- [Rotated](MdGeHypr.md#rotated)
- [Scale](MdGeHypr.md#scale)
- [Scaled](MdGeHypr.md#scaled)
- [SetAxis](MdGeHypr.md#setaxis)
- [SetLocation](MdGeHypr.md#setlocation)
- [SetMajorRadius](MdGeHypr.md#setmajorradius)
- [SetMinorRadius](MdGeHypr.md#setminorradius)
- [SetPosition](MdGeHypr.md#setposition)
- [Shape](MdGeHypr.md#shape)
- [Transform](MdGeHypr.md#transform)
- [Transformed](MdGeHypr.md#transformed)
- [TranslateBy2Points](MdGeHypr.md#translateby2points)
- [TranslateByVec](MdGeHypr.md#translatebyvec)
- [TranslatedBy2Points](MdGeHypr.md#translatedby2points)
- [TranslatedByVec](MdGeHypr.md#translatedbyvec)
- [Wire](MdGeHypr.md#wire)
- [XAxis](MdGeHypr.md#xaxis)
- [YAxis](MdGeHypr.md#yaxis)
- [getImp](MdGeHypr.md#getimp)
- [initTempObject](MdGeHypr.md#inittempobject)

## Constructors

### constructor

• **new MdGeHypr**(`p1?`, `p2?`, `p3?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `p1?` | `object` \| [`MdGeCSYSR`](MdGeCSYSR.md) |
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

### Asymptote1

▸ **Asymptote1**(): [`MdGeAxis`](MdGeAxis.md)

#### Returns

[`MdGeAxis`](MdGeAxis.md)

___

### Asymptote2

▸ **Asymptote2**(): [`MdGeAxis`](MdGeAxis.md)

#### Returns

[`MdGeAxis`](MdGeAxis.md)

___

### Axis

▸ **Axis**(): [`MdGeAxis`](MdGeAxis.md)

#### Returns

[`MdGeAxis`](MdGeAxis.md)

___

### ConjugateBranch1

▸ **ConjugateBranch1**(): [`MdGeHypr`](MdGeHypr.md)

#### Returns

[`MdGeHypr`](MdGeHypr.md)

___

### ConjugateBranch2

▸ **ConjugateBranch2**(): [`MdGeHypr`](MdGeHypr.md)

#### Returns

[`MdGeHypr`](MdGeHypr.md)

___

### Directrix1

▸ **Directrix1**(): [`MdGeAxis`](MdGeAxis.md)

#### Returns

[`MdGeAxis`](MdGeAxis.md)

___

### Directrix2

▸ **Directrix2**(): [`MdGeAxis`](MdGeAxis.md)

#### Returns

[`MdGeAxis`](MdGeAxis.md)

___

### Eccentricity

▸ **Eccentricity**(): `number`

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

### Focal

▸ **Focal**(): `number`

#### Returns

`number`

___

### Focus1

▸ **Focus1**(): [`MdGePoint`](MdGePoint.md)

#### Returns

[`MdGePoint`](MdGePoint.md)

___

### Focus2

▸ **Focus2**(): [`MdGePoint`](MdGePoint.md)

#### Returns

[`MdGePoint`](MdGePoint.md)

___

### Location

▸ **Location**(): [`MdGePoint`](MdGePoint.md)

#### Returns

[`MdGePoint`](MdGePoint.md)

___

### MajorRadius

▸ **MajorRadius**(): `number`

#### Returns

`number`

___

### MinorRadius

▸ **MinorRadius**(): `number`

#### Returns

`number`

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

▸ **MirroredByAxis**(`theA1`): [`MdGeHypr`](MdGeHypr.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theA1` | [`MdGeAxis`](MdGeAxis.md) |

#### Returns

[`MdGeHypr`](MdGeHypr.md)

___

### MirroredByCSYSR

▸ **MirroredByCSYSR**(`theA2`): [`MdGeHypr`](MdGeHypr.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theA2` | [`MdGeCSYSR`](MdGeCSYSR.md) |

#### Returns

[`MdGeHypr`](MdGeHypr.md)

___

### MirroredByPoint

▸ **MirroredByPoint**(`theP`): [`MdGeHypr`](MdGeHypr.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theP` | [`MdGePoint`](MdGePoint.md) |

#### Returns

[`MdGeHypr`](MdGeHypr.md)

___

### OtherBranch

▸ **OtherBranch**(): [`MdGeHypr`](MdGeHypr.md)

#### Returns

[`MdGeHypr`](MdGeHypr.md)

___

### Parameter

▸ **Parameter**(): `number`

#### Returns

`number`

___

### Position

▸ **Position**(): [`MdGeCSYSR`](MdGeCSYSR.md)

#### Returns

[`MdGeCSYSR`](MdGeCSYSR.md)

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

▸ **Rotated**(`theA1`, `theAng`): [`MdGeHypr`](MdGeHypr.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theA1` | [`MdGeAxis`](MdGeAxis.md) |
| `theAng` | `number` |

#### Returns

[`MdGeHypr`](MdGeHypr.md)

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

▸ **Scaled**(`theP`, `theS`): [`MdGeHypr`](MdGeHypr.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theP` | [`MdGePoint`](MdGePoint.md) |
| `theS` | `number` |

#### Returns

[`MdGeHypr`](MdGeHypr.md)

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

### SetMajorRadius

▸ **SetMajorRadius**(`theMajorRadius`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theMajorRadius` | `number` |

#### Returns

`void`

___

### SetMinorRadius

▸ **SetMinorRadius**(`theMinorRadius`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theMinorRadius` | `number` |

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

### Shape

▸ **Shape**(): [`MdGeShape`](MdGeShape.md)

#### Returns

[`MdGeShape`](MdGeShape.md)

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

▸ **Transformed**(`theT`): [`MdGeHypr`](MdGeHypr.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theT` | [`MdGeTrsf`](MdGeTrsf.md) |

#### Returns

[`MdGeHypr`](MdGeHypr.md)

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

▸ **TranslatedBy2Points**(`theP1`, `theP2`): [`MdGeHypr`](MdGeHypr.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theP1` | [`MdGePoint`](MdGePoint.md) |
| `theP2` | [`MdGePoint`](MdGePoint.md) |

#### Returns

[`MdGeHypr`](MdGeHypr.md)

___

### TranslatedByVec

▸ **TranslatedByVec**(`theV`): [`MdGeHypr`](MdGeHypr.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theV` | [`MdGeVec`](MdGeVec.md) |

#### Returns

[`MdGeHypr`](MdGeHypr.md)

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
