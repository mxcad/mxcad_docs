[mxcad API 文档](../README.md) / MdGePoint

# Class: MdGePoint

表示一个点。

## Hierarchy

- [`MdGeObject`](MdGeObject.md)

  ↳ **`MdGePoint`**

## Table of contents

### Constructors

- [constructor](MdGePoint.md#constructor)

### Properties

- [imp](MdGePoint.md#imp)

### Methods

- [BaryCenter](MdGePoint.md#barycenter)
- [Distance](MdGePoint.md#distance)
- [IsEqual](MdGePoint.md#isequal)
- [MirrorByAxis](MdGePoint.md#mirrorbyaxis)
- [MirrorByCSYSR](MdGePoint.md#mirrorbycsysr)
- [MirrorByPoint](MdGePoint.md#mirrorbypoint)
- [MirroredByAxis](MdGePoint.md#mirroredbyaxis)
- [MirroredByCSYSR](MdGePoint.md#mirroredbycsysr)
- [MirroredByPoint](MdGePoint.md#mirroredbypoint)
- [Rotate](MdGePoint.md#rotate)
- [Rotated](MdGePoint.md#rotated)
- [Scale](MdGePoint.md#scale)
- [Scaled](MdGePoint.md#scaled)
- [SetX](MdGePoint.md#setx)
- [SetXYZ](MdGePoint.md#setxyz)
- [SetY](MdGePoint.md#sety)
- [SetZ](MdGePoint.md#setz)
- [Shape](MdGePoint.md#shape)
- [SquareDistance](MdGePoint.md#squaredistance)
- [Transform](MdGePoint.md#transform)
- [Transformed](MdGePoint.md#transformed)
- [TranslateBy2Points](MdGePoint.md#translateby2points)
- [TranslateByVec](MdGePoint.md#translatebyvec)
- [TranslatedBy2Points](MdGePoint.md#translatedby2points)
- [TranslatedByVec](MdGePoint.md#translatedbyvec)
- [Vertex](MdGePoint.md#vertex)
- [X](MdGePoint.md#x)
- [Y](MdGePoint.md#y)
- [Z](MdGePoint.md#z)
- [getImp](MdGePoint.md#getimp)
- [initTempObject](MdGePoint.md#inittempobject)

## Constructors

### constructor

• **new MdGePoint**(`p1?`, `p2?`, `p3?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `p1?` | `number` \| `object` |
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

### BaryCenter

▸ **BaryCenter**(`alpha`, `point`, `beta`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `alpha` | `number` |
| `point` | [`MdGePoint`](MdGePoint.md) |
| `beta` | `number` |

#### Returns

`void`

___

### Distance

▸ **Distance**(`other`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`MdGePoint`](MdGePoint.md) |

#### Returns

`number`

___

### IsEqual

▸ **IsEqual**(`other`, `linearTolerance`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`MdGePoint`](MdGePoint.md) |
| `linearTolerance` | `number` |

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

▸ **MirroredByAxis**(`axis`): [`MdGePoint`](MdGePoint.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `axis` | [`MdGeAxis`](MdGeAxis.md) |

#### Returns

[`MdGePoint`](MdGePoint.md)

___

### MirroredByCSYSR

▸ **MirroredByCSYSR**(`csysr`): [`MdGePoint`](MdGePoint.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `csysr` | [`MdGeCSYSR`](MdGeCSYSR.md) |

#### Returns

[`MdGePoint`](MdGePoint.md)

___

### MirroredByPoint

▸ **MirroredByPoint**(`point`): [`MdGePoint`](MdGePoint.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `point` | [`MdGePoint`](MdGePoint.md) |

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

▸ **Rotated**(`axis`, `ang`): [`MdGePoint`](MdGePoint.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `axis` | [`MdGeAxis`](MdGeAxis.md) |
| `ang` | `number` |

#### Returns

[`MdGePoint`](MdGePoint.md)

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

▸ **Scaled**(`point`, `s`): [`MdGePoint`](MdGePoint.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `point` | [`MdGePoint`](MdGePoint.md) |
| `s` | `number` |

#### Returns

[`MdGePoint`](MdGePoint.md)

___

### SetX

▸ **SetX**(`x`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |

#### Returns

`void`

___

### SetXYZ

▸ **SetXYZ**(`x`, `y`, `z`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `z` | `number` |

#### Returns

`void`

___

### SetY

▸ **SetY**(`y`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `number` |

#### Returns

`void`

___

### SetZ

▸ **SetZ**(`z`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `z` | `number` |

#### Returns

`void`

___

### Shape

▸ **Shape**(): [`MdGeShape`](MdGeShape.md)

#### Returns

[`MdGeShape`](MdGeShape.md)

___

### SquareDistance

▸ **SquareDistance**(`other`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`MdGePoint`](MdGePoint.md) |

#### Returns

`number`

___

### Transform

▸ **Transform**(`trsf`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `trsf` | [`MdGeTrsf`](MdGeTrsf.md) |

#### Returns

`void`

___

### Transformed

▸ **Transformed**(`trsf`): [`MdGePoint`](MdGePoint.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `trsf` | [`MdGeTrsf`](MdGeTrsf.md) |

#### Returns

[`MdGePoint`](MdGePoint.md)

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

▸ **TranslatedBy2Points**(`point1`, `point2`): [`MdGePoint`](MdGePoint.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `point1` | [`MdGePoint`](MdGePoint.md) |
| `point2` | [`MdGePoint`](MdGePoint.md) |

#### Returns

[`MdGePoint`](MdGePoint.md)

___

### TranslatedByVec

▸ **TranslatedByVec**(`vec`): [`MdGePoint`](MdGePoint.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `vec` | [`MdGeVec`](MdGeVec.md) |

#### Returns

[`MdGePoint`](MdGePoint.md)

___

### Vertex

▸ **Vertex**(): [`MdGeVertex`](MdGeVertex.md)

#### Returns

[`MdGeVertex`](MdGeVertex.md)

___

### X

▸ **X**(): `number`

#### Returns

`number`

___

### Y

▸ **Y**(): `number`

#### Returns

`number`

___

### Z

▸ **Z**(): `number`

#### Returns

`number`

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
