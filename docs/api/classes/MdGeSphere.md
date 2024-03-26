[mxcad API 文档](../README.md) / MdGeSphere

# Class: MdGeSphere

表示一个球体

## Hierarchy

- [`MdGeObject`](MdGeObject.md)

  ↳ **`MdGeSphere`**

## Table of contents

### Constructors

- [constructor](MdGeSphere.md#constructor)

### Properties

- [imp](MdGeSphere.md#imp)

### Methods

- [Area](MdGeSphere.md#area)
- [Direct](MdGeSphere.md#direct)
- [Face](MdGeSphere.md#face)
- [Location](MdGeSphere.md#location)
- [MirrorByAxis](MdGeSphere.md#mirrorbyaxis)
- [MirrorByCSYSR](MdGeSphere.md#mirrorbycsysr)
- [MirrorByPoint](MdGeSphere.md#mirrorbypoint)
- [MirroredByAxis](MdGeSphere.md#mirroredbyaxis)
- [MirroredByCSYSR](MdGeSphere.md#mirroredbycsysr)
- [MirroredByPoint](MdGeSphere.md#mirroredbypoint)
- [Position](MdGeSphere.md#position)
- [Radius](MdGeSphere.md#radius)
- [Rotate](MdGeSphere.md#rotate)
- [Rotated](MdGeSphere.md#rotated)
- [Scale](MdGeSphere.md#scale)
- [Scaled](MdGeSphere.md#scaled)
- [SetLocation](MdGeSphere.md#setlocation)
- [SetPosition](MdGeSphere.md#setposition)
- [SetRadius](MdGeSphere.md#setradius)
- [Shape](MdGeSphere.md#shape)
- [Transform](MdGeSphere.md#transform)
- [Transformed](MdGeSphere.md#transformed)
- [TranslateBy2Points](MdGeSphere.md#translateby2points)
- [TranslateByVec](MdGeSphere.md#translatebyvec)
- [TranslatedBy2Points](MdGeSphere.md#translatedby2points)
- [TranslatedByVec](MdGeSphere.md#translatedbyvec)
- [UReverse](MdGeSphere.md#ureverse)
- [VReverse](MdGeSphere.md#vreverse)
- [Volume](MdGeSphere.md#volume)
- [XAxis](MdGeSphere.md#xaxis)
- [YAxis](MdGeSphere.md#yaxis)
- [getImp](MdGeSphere.md#getimp)
- [initTempObject](MdGeSphere.md#inittempobject)

## Constructors

### constructor

• **new MdGeSphere**(`p1?`, `p2?`, `p3?`, `p4?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `p1?` | `number` \| `object` \| [`MdGeCSYS`](MdGeCSYS.md) |
| `p2?` | `number` |
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

### Area

▸ **Area**(): `number`

#### Returns

`number`

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

▸ **MirroredByAxis**(`theA1`): [`MdGeSphere`](MdGeSphere.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theA1` | [`MdGeAxis`](MdGeAxis.md) |

#### Returns

[`MdGeSphere`](MdGeSphere.md)

___

### MirroredByCSYSR

▸ **MirroredByCSYSR**(`theA2`): [`MdGeSphere`](MdGeSphere.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theA2` | [`MdGeCSYSR`](MdGeCSYSR.md) |

#### Returns

[`MdGeSphere`](MdGeSphere.md)

___

### MirroredByPoint

▸ **MirroredByPoint**(`theP`): [`MdGeSphere`](MdGeSphere.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theP` | [`MdGePoint`](MdGePoint.md) |

#### Returns

[`MdGeSphere`](MdGeSphere.md)

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

▸ **Rotated**(`theA1`, `theAng`): [`MdGeSphere`](MdGeSphere.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theA1` | [`MdGeAxis`](MdGeAxis.md) |
| `theAng` | `number` |

#### Returns

[`MdGeSphere`](MdGeSphere.md)

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

▸ **Scaled**(`theP`, `theS`): [`MdGeSphere`](MdGeSphere.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theP` | [`MdGePoint`](MdGePoint.md) |
| `theS` | `number` |

#### Returns

[`MdGeSphere`](MdGeSphere.md)

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

▸ **Transformed**(`theT`): [`MdGeSphere`](MdGeSphere.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theT` | [`MdGeTrsf`](MdGeTrsf.md) |

#### Returns

[`MdGeSphere`](MdGeSphere.md)

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

▸ **TranslatedBy2Points**(`theP1`, `theP2`): [`MdGeSphere`](MdGeSphere.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theP1` | [`MdGePoint`](MdGePoint.md) |
| `theP2` | [`MdGePoint`](MdGePoint.md) |

#### Returns

[`MdGeSphere`](MdGeSphere.md)

___

### TranslatedByVec

▸ **TranslatedByVec**(`theV`): [`MdGeSphere`](MdGeSphere.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theV` | [`MdGeVec`](MdGeVec.md) |

#### Returns

[`MdGeSphere`](MdGeSphere.md)

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
