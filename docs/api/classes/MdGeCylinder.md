[mxcad API 文档](../README.md) / MdGeCylinder

# Class: MdGeCylinder

表示一个圆柱。

## Hierarchy

- [`MdGeObject`](MdGeObject.md)

  ↳ **`MdGeCylinder`**

## Table of contents

### Constructors

- [constructor](MdGeCylinder.md#constructor)

### Properties

- [imp](MdGeCylinder.md#imp)

### Methods

- [Axis](MdGeCylinder.md#axis)
- [Direct](MdGeCylinder.md#direct)
- [Face](MdGeCylinder.md#face)
- [Location](MdGeCylinder.md#location)
- [MirrorByAxis](MdGeCylinder.md#mirrorbyaxis)
- [MirrorByCSYSR](MdGeCylinder.md#mirrorbycsysr)
- [MirrorByPoint](MdGeCylinder.md#mirrorbypoint)
- [MirroredByAxis](MdGeCylinder.md#mirroredbyaxis)
- [MirroredByCSYSR](MdGeCylinder.md#mirroredbycsysr)
- [MirroredByPoint](MdGeCylinder.md#mirroredbypoint)
- [Position](MdGeCylinder.md#position)
- [Radius](MdGeCylinder.md#radius)
- [Rotate](MdGeCylinder.md#rotate)
- [Rotated](MdGeCylinder.md#rotated)
- [Scale](MdGeCylinder.md#scale)
- [Scaled](MdGeCylinder.md#scaled)
- [SetAxis](MdGeCylinder.md#setaxis)
- [SetLocation](MdGeCylinder.md#setlocation)
- [SetPosition](MdGeCylinder.md#setposition)
- [SetRadius](MdGeCylinder.md#setradius)
- [Shape](MdGeCylinder.md#shape)
- [Transform](MdGeCylinder.md#transform)
- [Transformed](MdGeCylinder.md#transformed)
- [TranslateBy2Points](MdGeCylinder.md#translateby2points)
- [TranslateByVec](MdGeCylinder.md#translatebyvec)
- [TranslatedBy2Points](MdGeCylinder.md#translatedby2points)
- [TranslatedByVec](MdGeCylinder.md#translatedbyvec)
- [UReverse](MdGeCylinder.md#ureverse)
- [VReverse](MdGeCylinder.md#vreverse)
- [XAxis](MdGeCylinder.md#xaxis)
- [YAxis](MdGeCylinder.md#yaxis)
- [getImp](MdGeCylinder.md#getimp)
- [initTempObject](MdGeCylinder.md#inittempobject)

## Constructors

### constructor

• **new MdGeCylinder**(`p1?`, `p2?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `p1?` | `object` \| [`MdGeCSYS`](MdGeCSYS.md) |
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

▸ **MirroredByAxis**(`theA1`): [`MdGeCylinder`](MdGeCylinder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theA1` | [`MdGeAxis`](MdGeAxis.md) |

#### Returns

[`MdGeCylinder`](MdGeCylinder.md)

___

### MirroredByCSYSR

▸ **MirroredByCSYSR**(`theA2`): [`MdGeCylinder`](MdGeCylinder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theA2` | [`MdGeCSYSR`](MdGeCSYSR.md) |

#### Returns

[`MdGeCylinder`](MdGeCylinder.md)

___

### MirroredByPoint

▸ **MirroredByPoint**(`theP`): [`MdGeCylinder`](MdGeCylinder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theP` | [`MdGePoint`](MdGePoint.md) |

#### Returns

[`MdGeCylinder`](MdGeCylinder.md)

___

### Position

▸ **Position**(): [`MdGeCSYS`](MdGeCSYS.md)

#### Returns

[`MdGeCSYS`](MdGeCSYS.md)

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

▸ **Rotated**(`theA1`, `theAng`): [`MdGeCylinder`](MdGeCylinder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theA1` | [`MdGeAxis`](MdGeAxis.md) |
| `theAng` | `number` |

#### Returns

[`MdGeCylinder`](MdGeCylinder.md)

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

▸ **Scaled**(`theP`, `theS`): [`MdGeCylinder`](MdGeCylinder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theP` | [`MdGePoint`](MdGePoint.md) |
| `theS` | `number` |

#### Returns

[`MdGeCylinder`](MdGeCylinder.md)

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

▸ **Transformed**(`theT`): [`MdGeCylinder`](MdGeCylinder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theT` | [`MdGeTrsf`](MdGeTrsf.md) |

#### Returns

[`MdGeCylinder`](MdGeCylinder.md)

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

▸ **TranslatedBy2Points**(`theP1`, `theP2`): [`MdGeCylinder`](MdGeCylinder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theP1` | [`MdGePoint`](MdGePoint.md) |
| `theP2` | [`MdGePoint`](MdGePoint.md) |

#### Returns

[`MdGeCylinder`](MdGeCylinder.md)

___

### TranslatedByVec

▸ **TranslatedByVec**(`theV`): [`MdGeCylinder`](MdGeCylinder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theV` | [`MdGeVec`](MdGeVec.md) |

#### Returns

[`MdGeCylinder`](MdGeCylinder.md)

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
