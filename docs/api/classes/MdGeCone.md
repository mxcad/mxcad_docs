[mxcad API 文档](../README.md) / MdGeCone

# Class: MdGeCone

表示一个圆锥

## Hierarchy

- [`MdGeObject`](MdGeObject.md)

  ↳ **`MdGeCone`**

## Table of contents

### Constructors

- [constructor](MdGeCone.md#constructor)

### Properties

- [imp](MdGeCone.md#imp)

### Methods

- [Apex](MdGeCone.md#apex)
- [Axis](MdGeCone.md#axis)
- [Direct](MdGeCone.md#direct)
- [Face](MdGeCone.md#face)
- [Location](MdGeCone.md#location)
- [MirrorByAxis](MdGeCone.md#mirrorbyaxis)
- [MirrorByCSYSR](MdGeCone.md#mirrorbycsysr)
- [MirrorByPoint](MdGeCone.md#mirrorbypoint)
- [MirroredByAxis](MdGeCone.md#mirroredbyaxis)
- [MirroredByCSYSR](MdGeCone.md#mirroredbycsysr)
- [MirroredByPoint](MdGeCone.md#mirroredbypoint)
- [Position](MdGeCone.md#position)
- [RefRadius](MdGeCone.md#refradius)
- [Rotate](MdGeCone.md#rotate)
- [Rotated](MdGeCone.md#rotated)
- [Scale](MdGeCone.md#scale)
- [Scaled](MdGeCone.md#scaled)
- [SemiAngle](MdGeCone.md#semiangle)
- [SetAxis](MdGeCone.md#setaxis)
- [SetLocation](MdGeCone.md#setlocation)
- [SetPosition](MdGeCone.md#setposition)
- [SetRadius](MdGeCone.md#setradius)
- [SetSemiAngle](MdGeCone.md#setsemiangle)
- [Shape](MdGeCone.md#shape)
- [Transform](MdGeCone.md#transform)
- [Transformed](MdGeCone.md#transformed)
- [TranslateBy2Points](MdGeCone.md#translateby2points)
- [TranslateByVec](MdGeCone.md#translatebyvec)
- [TranslatedBy2Points](MdGeCone.md#translatedby2points)
- [TranslatedByVec](MdGeCone.md#translatedbyvec)
- [UReverse](MdGeCone.md#ureverse)
- [VReverse](MdGeCone.md#vreverse)
- [XAxis](MdGeCone.md#xaxis)
- [YAxis](MdGeCone.md#yaxis)
- [getImp](MdGeCone.md#getimp)
- [initTempObject](MdGeCone.md#inittempobject)

## Constructors

### constructor

• **new MdGeCone**(`p1?`, `p2?`, `p3?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `p1?` | `object` \| [`MdGeCSYS`](MdGeCSYS.md) |
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

### Apex

▸ **Apex**(): [`MdGePoint`](MdGePoint.md)

#### Returns

[`MdGePoint`](MdGePoint.md)

___

### Axis

▸ **Axis**(): [`MdGeAxis`](MdGeAxis.md)

#### Returns

[`MdGeAxis`](MdGeAxis.md)

___

### Direct

▸ **Direct**(): `boolean`

#### Returns

`boolean`

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

▸ **MirroredByAxis**(`theA1`): [`MdGeCone`](MdGeCone.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theA1` | [`MdGeAxis`](MdGeAxis.md) |

#### Returns

[`MdGeCone`](MdGeCone.md)

___

### MirroredByCSYSR

▸ **MirroredByCSYSR**(`theA2`): [`MdGeCone`](MdGeCone.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theA2` | [`MdGeCSYSR`](MdGeCSYSR.md) |

#### Returns

[`MdGeCone`](MdGeCone.md)

___

### MirroredByPoint

▸ **MirroredByPoint**(`theP`): [`MdGeCone`](MdGeCone.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theP` | [`MdGePoint`](MdGePoint.md) |

#### Returns

[`MdGeCone`](MdGeCone.md)

___

### Position

▸ **Position**(): [`MdGeCSYS`](MdGeCSYS.md)

#### Returns

[`MdGeCSYS`](MdGeCSYS.md)

___

### RefRadius

▸ **RefRadius**(): `number`

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

▸ **Rotated**(`theA1`, `theAng`): [`MdGeCone`](MdGeCone.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theA1` | [`MdGeAxis`](MdGeAxis.md) |
| `theAng` | `number` |

#### Returns

[`MdGeCone`](MdGeCone.md)

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

▸ **Scaled**(`theP`, `theS`): [`MdGeCone`](MdGeCone.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theP` | [`MdGePoint`](MdGePoint.md) |
| `theS` | `number` |

#### Returns

[`MdGeCone`](MdGeCone.md)

___

### SemiAngle

▸ **SemiAngle**(): `number`

#### Returns

`number`

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

### SetRadius

▸ **SetRadius**(`theR`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theR` | `number` |

#### Returns

`void`

___

### SetSemiAngle

▸ **SetSemiAngle**(`theAng`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theAng` | `number` |

#### Returns

`void`

___

### Shape

▸ **Shape**(`H`, `Angle?`): [`MdGeShape`](MdGeShape.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `H` | `number` |
| `Angle?` | `number` |

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

▸ **Transformed**(`theT`): [`MdGeCone`](MdGeCone.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theT` | [`MdGeTrsf`](MdGeTrsf.md) |

#### Returns

[`MdGeCone`](MdGeCone.md)

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

▸ **TranslatedBy2Points**(`theP1`, `theP2`): [`MdGeCone`](MdGeCone.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theP1` | [`MdGePoint`](MdGePoint.md) |
| `theP2` | [`MdGePoint`](MdGePoint.md) |

#### Returns

[`MdGeCone`](MdGeCone.md)

___

### TranslatedByVec

▸ **TranslatedByVec**(`theV`): [`MdGeCone`](MdGeCone.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theV` | [`MdGeVec`](MdGeVec.md) |

#### Returns

[`MdGeCone`](MdGeCone.md)

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
