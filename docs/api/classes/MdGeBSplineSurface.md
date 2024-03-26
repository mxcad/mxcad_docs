[mxcad API 文档](../README.md) / MdGeBSplineSurface

# Class: MdGeBSplineSurface

表示B样条曲面

## Hierarchy

- [`MdGeObject`](MdGeObject.md)

  ↳ **`MdGeBSplineSurface`**

## Table of contents

### Constructors

- [constructor](MdGeBSplineSurface.md#constructor)

### Properties

- [imp](MdGeBSplineSurface.md#imp)

### Methods

- [Continuity](MdGeBSplineSurface.md#continuity)
- [DN](MdGeBSplineSurface.md#dn)
- [ExchangeUV](MdGeBSplineSurface.md#exchangeuv)
- [Face](MdGeBSplineSurface.md#face)
- [FirstUKnotIndex](MdGeBSplineSurface.md#firstuknotindex)
- [FirstVKnotIndex](MdGeBSplineSurface.md#firstvknotindex)
- [IncreaseDegree](MdGeBSplineSurface.md#increasedegree)
- [IncreaseUMultiplicity](MdGeBSplineSurface.md#increaseumultiplicity)
- [IncreaseVMultiplicity](MdGeBSplineSurface.md#increasevmultiplicity)
- [IncrementUMultiplicity](MdGeBSplineSurface.md#incrementumultiplicity)
- [IncrementVMultiplicity](MdGeBSplineSurface.md#incrementvmultiplicity)
- [InsertUKnot](MdGeBSplineSurface.md#insertuknot)
- [InsertUKnots](MdGeBSplineSurface.md#insertuknots)
- [InsertVKnot](MdGeBSplineSurface.md#insertvknot)
- [InsertVKnots](MdGeBSplineSurface.md#insertvknots)
- [IsCNu](MdGeBSplineSurface.md#iscnu)
- [IsCNv](MdGeBSplineSurface.md#iscnv)
- [IsUClosed](MdGeBSplineSurface.md#isuclosed)
- [IsUPeriodic](MdGeBSplineSurface.md#isuperiodic)
- [IsURational](MdGeBSplineSurface.md#isurational)
- [IsVClosed](MdGeBSplineSurface.md#isvclosed)
- [IsVPeriodic](MdGeBSplineSurface.md#isvperiodic)
- [IsVRational](MdGeBSplineSurface.md#isvrational)
- [LastUKnotIndex](MdGeBSplineSurface.md#lastuknotindex)
- [LastVKnotIndex](MdGeBSplineSurface.md#lastvknotindex)
- [LocalDN](MdGeBSplineSurface.md#localdn)
- [LocalValue](MdGeBSplineSurface.md#localvalue)
- [NbUKnots](MdGeBSplineSurface.md#nbuknots)
- [NbUPoles](MdGeBSplineSurface.md#nbupoles)
- [NbVKnots](MdGeBSplineSurface.md#nbvknots)
- [NbVPoles](MdGeBSplineSurface.md#nbvpoles)
- [Pole](MdGeBSplineSurface.md#pole)
- [Poles](MdGeBSplineSurface.md#poles)
- [RemoveUKnot](MdGeBSplineSurface.md#removeuknot)
- [RemoveVKnot](MdGeBSplineSurface.md#removevknot)
- [SetPole](MdGeBSplineSurface.md#setpole)
- [SetPoleCol](MdGeBSplineSurface.md#setpolecol)
- [SetPoleRow](MdGeBSplineSurface.md#setpolerow)
- [SetUKnot](MdGeBSplineSurface.md#setuknot)
- [SetUKnots](MdGeBSplineSurface.md#setuknots)
- [SetUOrigin](MdGeBSplineSurface.md#setuorigin)
- [SetUPeriodic](MdGeBSplineSurface.md#setuperiodic)
- [SetVKnot](MdGeBSplineSurface.md#setvknot)
- [SetVKnots](MdGeBSplineSurface.md#setvknots)
- [SetVNotPeriodic](MdGeBSplineSurface.md#setvnotperiodic)
- [SetVOrigin](MdGeBSplineSurface.md#setvorigin)
- [SetVPeriodic](MdGeBSplineSurface.md#setvperiodic)
- [SetWeight](MdGeBSplineSurface.md#setweight)
- [SetWeightCol](MdGeBSplineSurface.md#setweightcol)
- [SetWeightRow](MdGeBSplineSurface.md#setweightrow)
- [Shape](MdGeBSplineSurface.md#shape)
- [Transform](MdGeBSplineSurface.md#transform)
- [UDegree](MdGeBSplineSurface.md#udegree)
- [UKnot](MdGeBSplineSurface.md#uknot)
- [UKnotSequence](MdGeBSplineSurface.md#uknotsequence)
- [UKnots](MdGeBSplineSurface.md#uknots)
- [UMultiplicities](MdGeBSplineSurface.md#umultiplicities)
- [UMultiplicity](MdGeBSplineSurface.md#umultiplicity)
- [UReverse](MdGeBSplineSurface.md#ureverse)
- [UReversedParameter](MdGeBSplineSurface.md#ureversedparameter)
- [VDegree](MdGeBSplineSurface.md#vdegree)
- [VKnot](MdGeBSplineSurface.md#vknot)
- [VKnotSequence](MdGeBSplineSurface.md#vknotsequence)
- [VKnots](MdGeBSplineSurface.md#vknots)
- [VMultiplicities](MdGeBSplineSurface.md#vmultiplicities)
- [VMultiplicity](MdGeBSplineSurface.md#vmultiplicity)
- [VReverse](MdGeBSplineSurface.md#vreverse)
- [VReversedParameter](MdGeBSplineSurface.md#vreversedparameter)
- [Weight](MdGeBSplineSurface.md#weight)
- [Weights](MdGeBSplineSurface.md#weights)
- [getImp](MdGeBSplineSurface.md#getimp)
- [initTempObject](MdGeBSplineSurface.md#inittempobject)
- [MaxDegree](MdGeBSplineSurface.md#maxdegree)

## Constructors

### constructor

• **new MdGeBSplineSurface**(`p1?`, `p2?`, `p3?`, `p4?`, `p5?`, `p6?`, `p7?`, `p8?`, `p9?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `p1?` | `object` \| [`MdGeArray2OfPnt`](MdGeArray2OfPnt.md) |
| `p2?` | [`MdGeArray1OfReal`](MdGeArray1OfReal.md) |
| `p3?` | [`MdGeArray1OfReal`](MdGeArray1OfReal.md) |
| `p4?` | [`MdGeArray1OfInteger`](MdGeArray1OfInteger.md) |
| `p5?` | [`MdGeArray1OfInteger`](MdGeArray1OfInteger.md) |
| `p6?` | `number` |
| `p7?` | `number` |
| `p8?` | `boolean` |
| `p9?` | `boolean` |

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

### FirstUKnotIndex

▸ **FirstUKnotIndex**(): `number`

#### Returns

`number`

___

### FirstVKnotIndex

▸ **FirstVKnotIndex**(): `number`

#### Returns

`number`

___

### IncreaseDegree

▸ **IncreaseDegree**(`UDegree`, `VDegree`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `UDegree` | `number` |
| `VDegree` | `number` |

#### Returns

`void`

___

### IncreaseUMultiplicity

▸ **IncreaseUMultiplicity**(`p1`, `p2`, `p3?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `p1` | `number` |
| `p2` | `number` |
| `p3?` | `number` |

#### Returns

`void`

___

### IncreaseVMultiplicity

▸ **IncreaseVMultiplicity**(`p1`, `p2`, `p3?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `p1` | `number` |
| `p2` | `number` |
| `p3?` | `number` |

#### Returns

`void`

___

### IncrementUMultiplicity

▸ **IncrementUMultiplicity**(`FromI1`, `ToI2`, `Step`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `FromI1` | `number` |
| `ToI2` | `number` |
| `Step` | `number` |

#### Returns

`void`

___

### IncrementVMultiplicity

▸ **IncrementVMultiplicity**(`FromI1`, `ToI2`, `Step`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `FromI1` | `number` |
| `ToI2` | `number` |
| `Step` | `number` |

#### Returns

`void`

___

### InsertUKnot

▸ **InsertUKnot**(`U`, `M`, `ParametricTolerance`, `Add?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `U` | `number` |
| `M` | `number` |
| `ParametricTolerance` | `number` |
| `Add?` | `boolean` |

#### Returns

`void`

___

### InsertUKnots

▸ **InsertUKnots**(`Knots`, `Mults`, `ParametricTolerance?`, `Add?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `Knots` | [`MdGeArray1OfReal`](MdGeArray1OfReal.md) |
| `Mults` | [`MdGeArray1OfInteger`](MdGeArray1OfInteger.md) |
| `ParametricTolerance?` | `number` |
| `Add?` | `boolean` |

#### Returns

`void`

___

### InsertVKnot

▸ **InsertVKnot**(`V`, `M`, `ParametricTolerance`, `Add?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `V` | `number` |
| `M` | `number` |
| `ParametricTolerance` | `number` |
| `Add?` | `boolean` |

#### Returns

`void`

___

### InsertVKnots

▸ **InsertVKnots**(`Knots`, `Mults`, `ParametricTolerance?`, `Add?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `Knots` | [`MdGeArray1OfReal`](MdGeArray1OfReal.md) |
| `Mults` | [`MdGeArray1OfInteger`](MdGeArray1OfInteger.md) |
| `ParametricTolerance?` | `number` |
| `Add?` | `boolean` |

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

### LastUKnotIndex

▸ **LastUKnotIndex**(): `number`

#### Returns

`number`

___

### LastVKnotIndex

▸ **LastVKnotIndex**(): `number`

#### Returns

`number`

___

### LocalDN

▸ **LocalDN**(`U`, `V`, `FromUK1`, `ToUK2`, `FromVK1`, `ToVK2`, `Nu`, `Nv`): [`MdGeVec`](MdGeVec.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `U` | `number` |
| `V` | `number` |
| `FromUK1` | `number` |
| `ToUK2` | `number` |
| `FromVK1` | `number` |
| `ToVK2` | `number` |
| `Nu` | `number` |
| `Nv` | `number` |

#### Returns

[`MdGeVec`](MdGeVec.md)

___

### LocalValue

▸ **LocalValue**(`U`, `V`, `FromUK1`, `ToUK2`, `FromVK1`, `ToVK2`): [`MdGePoint`](MdGePoint.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `U` | `number` |
| `V` | `number` |
| `FromUK1` | `number` |
| `ToUK2` | `number` |
| `FromVK1` | `number` |
| `ToVK2` | `number` |

#### Returns

[`MdGePoint`](MdGePoint.md)

___

### NbUKnots

▸ **NbUKnots**(): `number`

#### Returns

`number`

___

### NbUPoles

▸ **NbUPoles**(): `number`

#### Returns

`number`

___

### NbVKnots

▸ **NbVKnots**(): `number`

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

### RemoveUKnot

▸ **RemoveUKnot**(`Index`, `M`, `Tolerance`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `Index` | `number` |
| `M` | `number` |
| `Tolerance` | `number` |

#### Returns

`boolean`

___

### RemoveVKnot

▸ **RemoveVKnot**(`Index`, `M`, `Tolerance`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `Index` | `number` |
| `M` | `number` |
| `Tolerance` | `number` |

#### Returns

`boolean`

___

### SetPole

▸ **SetPole**(`UIndex`, `VIndex`, `P`, `Weight?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `UIndex` | `number` |
| `VIndex` | `number` |
| `P` | [`MdGePoint`](MdGePoint.md) |
| `Weight?` | `number` |

#### Returns

`void`

___

### SetPoleCol

▸ **SetPoleCol**(`VIndex`, `CPoles`, `CPoleWeights?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `VIndex` | `number` |
| `CPoles` | [`MdGeArray1OfPnt`](MdGeArray1OfPnt.md) |
| `CPoleWeights?` | [`MdGeArray1OfReal`](MdGeArray1OfReal.md) |

#### Returns

`void`

___

### SetPoleRow

▸ **SetPoleRow**(`UIndex`, `CPoles`, `CPoleWeights?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `UIndex` | `number` |
| `CPoles` | [`MdGeArray1OfPnt`](MdGeArray1OfPnt.md) |
| `CPoleWeights?` | [`MdGeArray1OfReal`](MdGeArray1OfReal.md) |

#### Returns

`void`

___

### SetUKnot

▸ **SetUKnot**(`UIndex`, `K`, `M?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `UIndex` | `number` |
| `K` | `number` |
| `M?` | `number` |

#### Returns

`void`

___

### SetUKnots

▸ **SetUKnots**(`UK`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `UK` | [`MdGeArray1OfReal`](MdGeArray1OfReal.md) |

#### Returns

`void`

___

### SetUOrigin

▸ **SetUOrigin**(`Index`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `Index` | `number` |

#### Returns

`void`

___

### SetUPeriodic

▸ **SetUPeriodic**(): `void`

#### Returns

`void`

___

### SetVKnot

▸ **SetVKnot**(`VIndex`, `K`, `M?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `VIndex` | `number` |
| `K` | `number` |
| `M?` | `number` |

#### Returns

`void`

___

### SetVKnots

▸ **SetVKnots**(`VK`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `VK` | [`MdGeArray1OfReal`](MdGeArray1OfReal.md) |

#### Returns

`void`

___

### SetVNotPeriodic

▸ **SetVNotPeriodic**(): `void`

#### Returns

`void`

___

### SetVOrigin

▸ **SetVOrigin**(`Index`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `Index` | `number` |

#### Returns

`void`

___

### SetVPeriodic

▸ **SetVPeriodic**(): `void`

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

### UKnot

▸ **UKnot**(`UIndex`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `UIndex` | `number` |

#### Returns

`number`

___

### UKnotSequence

▸ **UKnotSequence**(): [`MdGeArray1OfReal`](MdGeArray1OfReal.md)

#### Returns

[`MdGeArray1OfReal`](MdGeArray1OfReal.md)

___

### UKnots

▸ **UKnots**(): [`MdGeArray1OfReal`](MdGeArray1OfReal.md)

#### Returns

[`MdGeArray1OfReal`](MdGeArray1OfReal.md)

___

### UMultiplicities

▸ **UMultiplicities**(): [`MdGeArray1OfInteger`](MdGeArray1OfInteger.md)

#### Returns

[`MdGeArray1OfInteger`](MdGeArray1OfInteger.md)

___

### UMultiplicity

▸ **UMultiplicity**(`UIndex`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `UIndex` | `number` |

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

### VKnot

▸ **VKnot**(`VIndex`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `VIndex` | `number` |

#### Returns

`number`

___

### VKnotSequence

▸ **VKnotSequence**(): [`MdGeArray1OfReal`](MdGeArray1OfReal.md)

#### Returns

[`MdGeArray1OfReal`](MdGeArray1OfReal.md)

___

### VKnots

▸ **VKnots**(): [`MdGeArray1OfReal`](MdGeArray1OfReal.md)

#### Returns

[`MdGeArray1OfReal`](MdGeArray1OfReal.md)

___

### VMultiplicities

▸ **VMultiplicities**(): [`MdGeArray1OfInteger`](MdGeArray1OfInteger.md)

#### Returns

[`MdGeArray1OfInteger`](MdGeArray1OfInteger.md)

___

### VMultiplicity

▸ **VMultiplicity**(`VIndex`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `VIndex` | `number` |

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
