[mxcad API 文档](../README.md) / MdGeParab

# Class: MdGeParab

表示抛物线

## Hierarchy

- [`MdGeObject`](MdGeObject.md)

  ↳ **`MdGeParab`**

## Table of contents

### Constructors

- [constructor](MdGeParab.md#constructor)

### Properties

- [imp](MdGeParab.md#imp)

### Methods

- [Axis](MdGeParab.md#axis)
- [Directrix](MdGeParab.md#directrix)
- [Edge](MdGeParab.md#edge)
- [Focal](MdGeParab.md#focal)
- [Focus](MdGeParab.md#focus)
- [Location](MdGeParab.md#location)
- [MirrorByAxis](MdGeParab.md#mirrorbyaxis)
- [MirrorByCSYSR](MdGeParab.md#mirrorbycsysr)
- [MirrorByPoint](MdGeParab.md#mirrorbypoint)
- [MirroredByAxis](MdGeParab.md#mirroredbyaxis)
- [MirroredByCSYSR](MdGeParab.md#mirroredbycsysr)
- [MirroredByPoint](MdGeParab.md#mirroredbypoint)
- [Parameter](MdGeParab.md#parameter)
- [Position](MdGeParab.md#position)
- [Rotate](MdGeParab.md#rotate)
- [Rotated](MdGeParab.md#rotated)
- [Scale](MdGeParab.md#scale)
- [Scaled](MdGeParab.md#scaled)
- [SetAxis](MdGeParab.md#setaxis)
- [SetFocal](MdGeParab.md#setfocal)
- [SetLocation](MdGeParab.md#setlocation)
- [SetPosition](MdGeParab.md#setposition)
- [Shape](MdGeParab.md#shape)
- [Transform](MdGeParab.md#transform)
- [Transformed](MdGeParab.md#transformed)
- [TranslateBy2Points](MdGeParab.md#translateby2points)
- [TranslateByVec](MdGeParab.md#translatebyvec)
- [TranslatedBy2Points](MdGeParab.md#translatedby2points)
- [TranslatedByVec](MdGeParab.md#translatedbyvec)
- [Wire](MdGeParab.md#wire)
- [XAxis](MdGeParab.md#xaxis)
- [YAxis](MdGeParab.md#yaxis)
- [getImp](MdGeParab.md#getimp)
- [initTempObject](MdGeParab.md#inittempobject)

## Constructors

### constructor

• **new MdGeParab**(`p1?`, `p2?`)

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

### Axis

▸ **Axis**(): [`MdGeAxis`](MdGeAxis.md)

#### Returns

[`MdGeAxis`](MdGeAxis.md)

___

### Directrix

▸ **Directrix**(): [`MdGeAxis`](MdGeAxis.md)

#### Returns

[`MdGeAxis`](MdGeAxis.md)

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

### Focus

▸ **Focus**(): [`MdGePoint`](MdGePoint.md)

#### Returns

[`MdGePoint`](MdGePoint.md)

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

▸ **MirroredByAxis**(`theA1`): [`MdGeParab`](MdGeParab.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theA1` | [`MdGeAxis`](MdGeAxis.md) |

#### Returns

[`MdGeParab`](MdGeParab.md)

___

### MirroredByCSYSR

▸ **MirroredByCSYSR**(`theA2`): [`MdGeParab`](MdGeParab.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theA2` | [`MdGeCSYSR`](MdGeCSYSR.md) |

#### Returns

[`MdGeParab`](MdGeParab.md)

___

### MirroredByPoint

▸ **MirroredByPoint**(`theP`): [`MdGeParab`](MdGeParab.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theP` | [`MdGePoint`](MdGePoint.md) |

#### Returns

[`MdGeParab`](MdGeParab.md)

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

▸ **Rotated**(`theA1`, `theAng`): [`MdGeParab`](MdGeParab.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theA1` | [`MdGeAxis`](MdGeAxis.md) |
| `theAng` | `number` |

#### Returns

[`MdGeParab`](MdGeParab.md)

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

▸ **Scaled**(`theP`, `theS`): [`MdGeParab`](MdGeParab.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theP` | [`MdGePoint`](MdGePoint.md) |
| `theS` | `number` |

#### Returns

[`MdGeParab`](MdGeParab.md)

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

### SetFocal

▸ **SetFocal**(`theFocal`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theFocal` | `number` |

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

▸ **Transformed**(`theT`): [`MdGeParab`](MdGeParab.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theT` | [`MdGeTrsf`](MdGeTrsf.md) |

#### Returns

[`MdGeParab`](MdGeParab.md)

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

▸ **TranslatedBy2Points**(`theP1`, `theP2`): [`MdGeParab`](MdGeParab.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theP1` | [`MdGePoint`](MdGePoint.md) |
| `theP2` | [`MdGePoint`](MdGePoint.md) |

#### Returns

[`MdGeParab`](MdGeParab.md)

___

### TranslatedByVec

▸ **TranslatedByVec**(`theV`): [`MdGeParab`](MdGeParab.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theV` | [`MdGeVec`](MdGeVec.md) |

#### Returns

[`MdGeParab`](MdGeParab.md)

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
