[mxcad API 文档](../README.md) / MdGeBezierSurface

# Class: MdGeBezierSurface

表示贝塞尔曲面

## Hierarchy

- [`MdGeObject`](MdGeObject.md)

  ↳ **`MdGeBezierSurface`**

## Table of contents

### Constructors

- [constructor](MdGeBezierSurface.md#constructor)

### Properties

- [imp](MdGeBezierSurface.md#imp)

### Methods

- [Continuity](MdGeBezierSurface.md#continuity)
- [DN](MdGeBezierSurface.md#dn)
- [ExchangeUV](MdGeBezierSurface.md#exchangeuv)
- [Face](MdGeBezierSurface.md#face)
- [Increase](MdGeBezierSurface.md#increase)
- [InsertPoleColAfter](MdGeBezierSurface.md#insertpolecolafter)
- [InsertPoleColBefore](MdGeBezierSurface.md#insertpolecolbefore)
- [InsertPoleRowAfter](MdGeBezierSurface.md#insertpolerowafter)
- [InsertPoleRowBefore](MdGeBezierSurface.md#insertpolerowbefore)
- [IsCNu](MdGeBezierSurface.md#iscnu)
- [IsCNv](MdGeBezierSurface.md#iscnv)
- [IsUClosed](MdGeBezierSurface.md#isuclosed)
- [IsUPeriodic](MdGeBezierSurface.md#isuperiodic)
- [IsURational](MdGeBezierSurface.md#isurational)
- [IsVClosed](MdGeBezierSurface.md#isvclosed)
- [IsVPeriodic](MdGeBezierSurface.md#isvperiodic)
- [IsVRational](MdGeBezierSurface.md#isvrational)
- [NbUPoles](MdGeBezierSurface.md#nbupoles)
- [NbVPoles](MdGeBezierSurface.md#nbvpoles)
- [Pole](MdGeBezierSurface.md#pole)
- [Poles](MdGeBezierSurface.md#poles)
- [RemovePoleCol](MdGeBezierSurface.md#removepolecol)
- [RemovePoleRow](MdGeBezierSurface.md#removepolerow)
- [Segment](MdGeBezierSurface.md#segment)
- [SetPole](MdGeBezierSurface.md#setpole)
- [SetPoleCol](MdGeBezierSurface.md#setpolecol)
- [SetPoleRow](MdGeBezierSurface.md#setpolerow)
- [SetWeight](MdGeBezierSurface.md#setweight)
- [SetWeightCol](MdGeBezierSurface.md#setweightcol)
- [SetWeightRow](MdGeBezierSurface.md#setweightrow)
- [Shape](MdGeBezierSurface.md#shape)
- [Transform](MdGeBezierSurface.md#transform)
- [UDegree](MdGeBezierSurface.md#udegree)
- [UReverse](MdGeBezierSurface.md#ureverse)
- [UReversedParameter](MdGeBezierSurface.md#ureversedparameter)
- [VDegree](MdGeBezierSurface.md#vdegree)
- [VReverse](MdGeBezierSurface.md#vreverse)
- [VReversedParameter](MdGeBezierSurface.md#vreversedparameter)
- [Weight](MdGeBezierSurface.md#weight)
- [Weights](MdGeBezierSurface.md#weights)
- [getImp](MdGeBezierSurface.md#getimp)
- [initTempObject](MdGeBezierSurface.md#inittempobject)
- [MaxDegree](MdGeBezierSurface.md#maxdegree)

## Constructors

### constructor

• **new MdGeBezierSurface**(`p1?`, `p2?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `p1?` | `object` \| [`MdGeArray2OfPnt`](MdGeArray2OfPnt.md) |
| `p2?` | [`MdGeArray2OfReal`](MdGeArray2OfReal.md) |

#### Overrides

[MdGeObject](MdGeObject.md).[constructor](MdGeObject.md#constructor)

## Properties

### imp

• `Protected` **imp**: `any` = `0`

#### Inherited from

[MdGeObject](MdGeObject.md).[imp](MdGeObject.md#imp)

## Methods

### Continuity

▸ **Continuity**(): [`MxGAShapeEnum`](../enums/MdGe.MxGAShapeEnum.md)

#### Returns

[`MxGAShapeEnum`](../enums/MdGe.MxGAShapeEnum.md)

___

### DN

▸ **DN**(`U`, `V`, `Nu`, `Nv`): [`MdGeVec`](MdGeVec.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `U` | `number` |
| `V` | `number` |
| `Nu` | `number` |
| `Nv` | `number` |

#### Returns

[`MdGeVec`](MdGeVec.md)

___

### ExchangeUV

▸ **ExchangeUV**(): `void`

#### Returns

`void`

___

### Face

▸ **Face**(): [`MdGeFace`](MdGeFace.md)

#### Returns

[`MdGeFace`](MdGeFace.md)

___

### Increase

▸ **Increase**(`UDeg`, `VDeg`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `UDeg` | `number` |
| `VDeg` | `number` |

#### Returns

`void`

___

### InsertPoleColAfter

▸ **InsertPoleColAfter**(`p1`, `p2`, `p3?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `p1` | `number` |
| `p2` | [`MdGeArray1OfPnt`](MdGeArray1OfPnt.md) |
| `p3?` | [`MdGeArray1OfReal`](MdGeArray1OfReal.md) |

#### Returns

`void`

___

### InsertPoleColBefore

▸ **InsertPoleColBefore**(`p1`, `p2`, `p3?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `p1` | `number` |
| `p2` | [`MdGeArray1OfPnt`](MdGeArray1OfPnt.md) |
| `p3?` | [`MdGeArray1OfReal`](MdGeArray1OfReal.md) |

#### Returns

`void`

___

### InsertPoleRowAfter

▸ **InsertPoleRowAfter**(`p1`, `p2`, `p3?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `p1` | `number` |
| `p2` | [`MdGeArray1OfPnt`](MdGeArray1OfPnt.md) |
| `p3?` | [`MdGeArray1OfReal`](MdGeArray1OfReal.md) |

#### Returns

`void`

___

### InsertPoleRowBefore

▸ **InsertPoleRowBefore**(`p1`, `p2`, `p3?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `p1` | `number` |
| `p2` | [`MdGeArray1OfPnt`](MdGeArray1OfPnt.md) |
| `p3?` | [`MdGeArray1OfReal`](MdGeArray1OfReal.md) |

#### Returns

`void`

___

### IsCNu

▸ **IsCNu**(`N`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `N` | `number` |

#### Returns

`boolean`

___

### IsCNv

▸ **IsCNv**(`N`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `N` | `number` |

#### Returns

`boolean`

___

### IsUClosed

▸ **IsUClosed**(): `boolean`

#### Returns

`boolean`

___

### IsUPeriodic

▸ **IsUPeriodic**(): `boolean`

#### Returns

`boolean`

___

### IsURational

▸ **IsURational**(): `boolean`

#### Returns

`boolean`

___

### IsVClosed

▸ **IsVClosed**(): `boolean`

#### Returns

`boolean`

___

### IsVPeriodic

▸ **IsVPeriodic**(): `boolean`

#### Returns

`boolean`

___

### IsVRational

▸ **IsVRational**(): `boolean`

#### Returns

`boolean`

___

### NbUPoles

▸ **NbUPoles**(): `number`

#### Returns

`number`

___

### NbVPoles

▸ **NbVPoles**(): `number`

#### Returns

`number`

___

### Pole

▸ **Pole**(`UIndex`, `VIndex`): [`MdGePoint`](MdGePoint.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `UIndex` | `number` |
| `VIndex` | `number` |

#### Returns

[`MdGePoint`](MdGePoint.md)

___

### Poles

▸ **Poles**(): [`MdGeArray2OfPnt`](MdGeArray2OfPnt.md)

#### Returns

[`MdGeArray2OfPnt`](MdGeArray2OfPnt.md)

___

### RemovePoleCol

▸ **RemovePoleCol**(`VIndex`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `VIndex` | `number` |

#### Returns

`void`

___

### RemovePoleRow

▸ **RemovePoleRow**(`UIndex`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `UIndex` | `number` |

#### Returns

`void`

___

### Segment

▸ **Segment**(`U1`, `U2`, `V1`, `V2`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `U1` | `number` |
| `U2` | `number` |
| `V1` | `number` |
| `V2` | `number` |

#### Returns

`void`

___

### SetPole

▸ **SetPole**(`p1`, `p2`, `p3`, `p4?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `p1` | `number` |
| `p2` | `number` |
| `p3` | [`MdGePoint`](MdGePoint.md) |
| `p4?` | `number` |

#### Returns

`void`

___

### SetPoleCol

▸ **SetPoleCol**(`p1`, `p2`, `p3?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `p1` | `number` |
| `p2` | [`MdGeArray1OfPnt`](MdGeArray1OfPnt.md) |
| `p3?` | [`MdGeArray1OfReal`](MdGeArray1OfReal.md) |

#### Returns

`void`

___

### SetPoleRow

▸ **SetPoleRow**(`p1`, `p2`, `p3?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `p1` | `number` |
| `p2` | [`MdGeArray1OfPnt`](MdGeArray1OfPnt.md) |
| `p3?` | [`MdGeArray1OfReal`](MdGeArray1OfReal.md) |

#### Returns

`void`

___

### SetWeight

▸ **SetWeight**(`UIndex`, `VIndex`, `Weight`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `UIndex` | `number` |
| `VIndex` | `number` |
| `Weight` | `number` |

#### Returns

`void`

___

### SetWeightCol

▸ **SetWeightCol**(`VIndex`, `CPoleWeights`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `VIndex` | `number` |
| `CPoleWeights` | [`MdGeArray1OfReal`](MdGeArray1OfReal.md) |

#### Returns

`void`

___

### SetWeightRow

▸ **SetWeightRow**(`UIndex`, `CPoleWeights`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `UIndex` | `number` |
| `CPoleWeights` | [`MdGeArray1OfReal`](MdGeArray1OfReal.md) |

#### Returns

`void`

___

### Shape

▸ **Shape**(): [`MdGeShape`](MdGeShape.md)

#### Returns

[`MdGeShape`](MdGeShape.md)

___

### Transform

▸ **Transform**(`T`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `T` | [`MdGeTrsf`](MdGeTrsf.md) |

#### Returns

`void`

___

### UDegree

▸ **UDegree**(): `number`

#### Returns

`number`

___

### UReverse

▸ **UReverse**(): `void`

#### Returns

`void`

___

### UReversedParameter

▸ **UReversedParameter**(`U`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `U` | `number` |

#### Returns

`number`

___

### VDegree

▸ **VDegree**(): `number`

#### Returns

`number`

___

### VReverse

▸ **VReverse**(): `void`

#### Returns

`void`

___

### VReversedParameter

▸ **VReversedParameter**(`V`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `V` | `number` |

#### Returns

`number`

___

### Weight

▸ **Weight**(`UIndex`, `VIndex`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `UIndex` | `number` |
| `VIndex` | `number` |

#### Returns

`number`

___

### Weights

▸ **Weights**(): [`MdGeArray2OfReal`](MdGeArray2OfReal.md)

#### Returns

[`MdGeArray2OfReal`](MdGeArray2OfReal.md)

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

___

### MaxDegree

▸ `Static` **MaxDegree**(): `number`

#### Returns

`number`
