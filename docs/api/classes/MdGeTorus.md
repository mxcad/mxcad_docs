[mxcad API 文档](../README.md) / MdGeTorus

# Class: MdGeTorus

表示圆环

## Hierarchy

- [`MdGeObject`](MdGeObject.md)

  ↳ **`MdGeTorus`**

## Table of contents

### Constructors

- [constructor](MdGeTorus.md#constructor)

### Properties

- [imp](MdGeTorus.md#imp)

### Methods

- [Area](MdGeTorus.md#area)
- [Axis](MdGeTorus.md#axis)
- [Direct](MdGeTorus.md#direct)
- [Face](MdGeTorus.md#face)
- [Location](MdGeTorus.md#location)
- [MajorRadius](MdGeTorus.md#majorradius)
- [MinorRadius](MdGeTorus.md#minorradius)
- [MirrorByAxis](MdGeTorus.md#mirrorbyaxis)
- [MirrorByCSYSR](MdGeTorus.md#mirrorbycsysr)
- [MirrorByPoint](MdGeTorus.md#mirrorbypoint)
- [MirroredByAxis](MdGeTorus.md#mirroredbyaxis)
- [MirroredByCSYSR](MdGeTorus.md#mirroredbycsysr)
- [MirroredByPoint](MdGeTorus.md#mirroredbypoint)
- [Position](MdGeTorus.md#position)
- [Rotate](MdGeTorus.md#rotate)
- [Rotated](MdGeTorus.md#rotated)
- [Scale](MdGeTorus.md#scale)
- [Scaled](MdGeTorus.md#scaled)
- [SetAxis](MdGeTorus.md#setaxis)
- [SetLocation](MdGeTorus.md#setlocation)
- [SetMajorRadius](MdGeTorus.md#setmajorradius)
- [SetMinorRadius](MdGeTorus.md#setminorradius)
- [SetPosition](MdGeTorus.md#setposition)
- [Shape](MdGeTorus.md#shape)
- [Transform](MdGeTorus.md#transform)
- [Transformed](MdGeTorus.md#transformed)
- [TranslateBy2Points](MdGeTorus.md#translateby2points)
- [TranslateByVec](MdGeTorus.md#translatebyvec)
- [TranslatedBy2Points](MdGeTorus.md#translatedby2points)
- [TranslatedByVec](MdGeTorus.md#translatedbyvec)
- [UReverse](MdGeTorus.md#ureverse)
- [VReverse](MdGeTorus.md#vreverse)
- [Volume](MdGeTorus.md#volume)
- [XAxis](MdGeTorus.md#xaxis)
- [YAxis](MdGeTorus.md#yaxis)
- [getImp](MdGeTorus.md#getimp)
- [initTempObject](MdGeTorus.md#inittempobject)

## Constructors

### constructor

• **new MdGeTorus**(`p1?`, `p2?`, `p3?`)

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

▸ **MirroredByAxis**(`theA1`): [`MdGeTorus`](MdGeTorus.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theA1` | [`MdGeAxis`](MdGeAxis.md) |

#### Returns

[`MdGeTorus`](MdGeTorus.md)

___

### MirroredByCSYSR

▸ **MirroredByCSYSR**(`theA2`): [`MdGeTorus`](MdGeTorus.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theA2` | [`MdGeCSYSR`](MdGeCSYSR.md) |

#### Returns

[`MdGeTorus`](MdGeTorus.md)

___

### MirroredByPoint

▸ **MirroredByPoint**(`theP`): [`MdGeTorus`](MdGeTorus.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theP` | [`MdGePoint`](MdGePoint.md) |

#### Returns

[`MdGeTorus`](MdGeTorus.md)

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

▸ **Rotated**(`theA1`, `theAng`): [`MdGeTorus`](MdGeTorus.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theA1` | [`MdGeAxis`](MdGeAxis.md) |
| `theAng` | `number` |

#### Returns

[`MdGeTorus`](MdGeTorus.md)

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

▸ **Scaled**(`theP`, `theS`): [`MdGeTorus`](MdGeTorus.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theP` | [`MdGePoint`](MdGePoint.md) |
| `theS` | `number` |

#### Returns

[`MdGeTorus`](MdGeTorus.md)

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

▸ **SetPosition**(`theA3`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theA3` | [`MdGeCSYS`](MdGeCSYS.md) |

#### Returns

`void`

___

### Shape

▸ **Shape**(`p1?`, `p2?`, `p3?`): [`MdGeShape`](MdGeShape.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `p1?` | `number` |
| `p2?` | `number` |
| `p3?` | `number` |

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

▸ **Transformed**(`theT`): [`MdGeTorus`](MdGeTorus.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theT` | [`MdGeTrsf`](MdGeTrsf.md) |

#### Returns

[`MdGeTorus`](MdGeTorus.md)

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

▸ **TranslatedBy2Points**(`theP1`, `theP2`): [`MdGeTorus`](MdGeTorus.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theP1` | [`MdGePoint`](MdGePoint.md) |
| `theP2` | [`MdGePoint`](MdGePoint.md) |

#### Returns

[`MdGeTorus`](MdGeTorus.md)

___

### TranslatedByVec

▸ **TranslatedByVec**(`theV`): [`MdGeTorus`](MdGeTorus.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theV` | [`MdGeVec`](MdGeVec.md) |

#### Returns

[`MdGeTorus`](MdGeTorus.md)

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

### Volume

▸ **Volume**(): `number`

#### Returns

`number`

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
