[mxcad API 文档](../README.md) / MdGeCSYS

# Class: MdGeCSYS

表示一个坐标系（左手或右手）

## Hierarchy

- [`MdGeObject`](MdGeObject.md)

  ↳ **`MdGeCSYS`**

## Table of contents

### Constructors

- [constructor](MdGeCSYS.md#constructor)

### Properties

- [imp](MdGeCSYS.md#imp)

### Methods

- [Angle](MdGeCSYS.md#angle)
- [CSYSR](MdGeCSYS.md#csysr)
- [Direct](MdGeCSYS.md#direct)
- [IsCoplanarWithAxis](MdGeCSYS.md#iscoplanarwithaxis)
- [IsCoplanarWithCSYS](MdGeCSYS.md#iscoplanarwithcsys)
- [MirrorByAxis](MdGeCSYS.md#mirrorbyaxis)
- [MirrorByCSYSR](MdGeCSYS.md#mirrorbycsysr)
- [MirrorByPoint](MdGeCSYS.md#mirrorbypoint)
- [MirroredByAxis](MdGeCSYS.md#mirroredbyaxis)
- [MirroredByCSYSR](MdGeCSYS.md#mirroredbycsysr)
- [MirroredByPoint](MdGeCSYS.md#mirroredbypoint)
- [Origin](MdGeCSYS.md#origin)
- [Rotate](MdGeCSYS.md#rotate)
- [Rotated](MdGeCSYS.md#rotated)
- [Scale](MdGeCSYS.md#scale)
- [Scaled](MdGeCSYS.md#scaled)
- [SetOrigin](MdGeCSYS.md#setorigin)
- [SetXDirection](MdGeCSYS.md#setxdirection)
- [SetYDirection](MdGeCSYS.md#setydirection)
- [SetZAxis](MdGeCSYS.md#setzaxis)
- [SetZDirection](MdGeCSYS.md#setzdirection)
- [Transform](MdGeCSYS.md#transform)
- [Transformed](MdGeCSYS.md#transformed)
- [TranslateBy2Points](MdGeCSYS.md#translateby2points)
- [TranslateByVec](MdGeCSYS.md#translatebyvec)
- [TranslatedBy2Points](MdGeCSYS.md#translatedby2points)
- [TranslatedByVec](MdGeCSYS.md#translatedbyvec)
- [XDirection](MdGeCSYS.md#xdirection)
- [XReverse](MdGeCSYS.md#xreverse)
- [YDirection](MdGeCSYS.md#ydirection)
- [YReverse](MdGeCSYS.md#yreverse)
- [ZAxis](MdGeCSYS.md#zaxis)
- [ZDirection](MdGeCSYS.md#zdirection)
- [ZReverse](MdGeCSYS.md#zreverse)
- [getImp](MdGeCSYS.md#getimp)
- [initTempObject](MdGeCSYS.md#inittempobject)

## Constructors

### constructor

• **new MdGeCSYS**(`p1?`, `p2?`, `p3?`)

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

▸ **Angle**(`other`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`MdGeCSYS`](MdGeCSYS.md) |

#### Returns

`number`

___

### CSYSR

▸ **CSYSR**(): [`MdGeCSYSR`](MdGeCSYSR.md)

#### Returns

[`MdGeCSYSR`](MdGeCSYSR.md)

___

### Direct

▸ **Direct**(): `boolean`

#### Returns

`boolean`

___

### IsCoplanarWithAxis

▸ **IsCoplanarWithAxis**(`axis`, `linearTolerance`, `angularTolerance`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `axis` | [`MdGeAxis`](MdGeAxis.md) |
| `linearTolerance` | `number` |
| `angularTolerance` | `number` |

#### Returns

`boolean`

___

### IsCoplanarWithCSYS

▸ **IsCoplanarWithCSYS**(`other`, `linearTolerance`, `angularTolerance`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`MdGeCSYS`](MdGeCSYS.md) |
| `linearTolerance` | `number` |
| `angularTolerance` | `number` |

#### Returns

`boolean`

___

### MirrorByAxis

▸ **MirrorByAxis**(`axis`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `axis` | [`MdGeAxis`](MdGeAxis.md) |

#### Returns

`void`

___

### MirrorByCSYSR

▸ **MirrorByCSYSR**(`csysr`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `csysr` | [`MdGeCSYSR`](MdGeCSYSR.md) |

#### Returns

`void`

___

### MirrorByPoint

▸ **MirrorByPoint**(`point`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `point` | [`MdGePoint`](MdGePoint.md) |

#### Returns

`void`

___

### MirroredByAxis

▸ **MirroredByAxis**(`axis`): [`MdGeCSYS`](MdGeCSYS.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `axis` | [`MdGeAxis`](MdGeAxis.md) |

#### Returns

[`MdGeCSYS`](MdGeCSYS.md)

___

### MirroredByCSYSR

▸ **MirroredByCSYSR**(`csysr`): [`MdGeCSYS`](MdGeCSYS.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `csysr` | [`MdGeCSYSR`](MdGeCSYSR.md) |

#### Returns

[`MdGeCSYS`](MdGeCSYS.md)

___

### MirroredByPoint

▸ **MirroredByPoint**(`point`): [`MdGeCSYS`](MdGeCSYS.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `point` | [`MdGePoint`](MdGePoint.md) |

#### Returns

[`MdGeCSYS`](MdGeCSYS.md)

___

### Origin

▸ **Origin**(): [`MdGePoint`](MdGePoint.md)

#### Returns

[`MdGePoint`](MdGePoint.md)

___

### Rotate

▸ **Rotate**(`axis`, `ang`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `axis` | [`MdGeAxis`](MdGeAxis.md) |
| `ang` | `number` |

#### Returns

`void`

___

### Rotated

▸ **Rotated**(`axis`, `ang`): [`MdGeCSYS`](MdGeCSYS.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `axis` | [`MdGeAxis`](MdGeAxis.md) |
| `ang` | `number` |

#### Returns

[`MdGeCSYS`](MdGeCSYS.md)

___

### Scale

▸ **Scale**(`point`, `s`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `point` | [`MdGePoint`](MdGePoint.md) |
| `s` | `number` |

#### Returns

`void`

___

### Scaled

▸ **Scaled**(`point`, `s`): [`MdGeCSYS`](MdGeCSYS.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `point` | [`MdGePoint`](MdGePoint.md) |
| `s` | `number` |

#### Returns

[`MdGeCSYS`](MdGeCSYS.md)

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

### SetZAxis

▸ **SetZAxis**(`z_axis`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `z_axis` | [`MdGeAxis`](MdGeAxis.md) |

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

▸ **Transform**(`t`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `t` | [`MdGeTrsf`](MdGeTrsf.md) |

#### Returns

`void`

___

### Transformed

▸ **Transformed**(`t`): [`MdGeCSYS`](MdGeCSYS.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `t` | [`MdGeTrsf`](MdGeTrsf.md) |

#### Returns

[`MdGeCSYS`](MdGeCSYS.md)

___

### TranslateBy2Points

▸ **TranslateBy2Points**(`point1`, `point2`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `point1` | [`MdGePoint`](MdGePoint.md) |
| `point2` | [`MdGePoint`](MdGePoint.md) |

#### Returns

`void`

___

### TranslateByVec

▸ **TranslateByVec**(`vec`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `vec` | [`MdGeVec`](MdGeVec.md) |

#### Returns

`void`

___

### TranslatedBy2Points

▸ **TranslatedBy2Points**(`point1`, `point2`): [`MdGeCSYS`](MdGeCSYS.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `point1` | [`MdGePoint`](MdGePoint.md) |
| `point2` | [`MdGePoint`](MdGePoint.md) |

#### Returns

[`MdGeCSYS`](MdGeCSYS.md)

___

### TranslatedByVec

▸ **TranslatedByVec**(`vec`): [`MdGeCSYS`](MdGeCSYS.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `vec` | [`MdGeVec`](MdGeVec.md) |

#### Returns

[`MdGeCSYS`](MdGeCSYS.md)

___

### XDirection

▸ **XDirection**(): [`MdGeDir`](MdGeDir.md)

#### Returns

[`MdGeDir`](MdGeDir.md)

___

### XReverse

▸ **XReverse**(): `void`

#### Returns

`void`

___

### YDirection

▸ **YDirection**(): [`MdGeDir`](MdGeDir.md)

#### Returns

[`MdGeDir`](MdGeDir.md)

___

### YReverse

▸ **YReverse**(): `void`

#### Returns

`void`

___

### ZAxis

▸ **ZAxis**(): [`MdGeAxis`](MdGeAxis.md)

#### Returns

[`MdGeAxis`](MdGeAxis.md)

___

### ZDirection

▸ **ZDirection**(): [`MdGeDir`](MdGeDir.md)

#### Returns

[`MdGeDir`](MdGeDir.md)

___

### ZReverse

▸ **ZReverse**(): `void`

#### Returns

`void`

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
