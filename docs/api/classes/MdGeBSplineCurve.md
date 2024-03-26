[mxcad API 文档](../README.md) / MdGeBSplineCurve

# Class: MdGeBSplineCurve

表示B样条曲线

## Hierarchy

- [`MdGeObject`](MdGeObject.md)

  ↳ **`MdGeBSplineCurve`**

## Table of contents

### Constructors

- [constructor](MdGeBSplineCurve.md#constructor)

### Properties

- [imp](MdGeBSplineCurve.md#imp)

### Methods

- [Continuity](MdGeBSplineCurve.md#continuity)
- [DN](MdGeBSplineCurve.md#dn)
- [Degree](MdGeBSplineCurve.md#degree)
- [Edge](MdGeBSplineCurve.md#edge)
- [EndPoint](MdGeBSplineCurve.md#endpoint)
- [FirstParameter](MdGeBSplineCurve.md#firstparameter)
- [FirstUKnotIndex](MdGeBSplineCurve.md#firstuknotindex)
- [IncreaseDegree](MdGeBSplineCurve.md#increasedegree)
- [IncreaseMultiplicity](MdGeBSplineCurve.md#increasemultiplicity)
- [IncrementMultiplicity](MdGeBSplineCurve.md#incrementmultiplicity)
- [InsertKnot](MdGeBSplineCurve.md#insertknot)
- [InsertKnots](MdGeBSplineCurve.md#insertknots)
- [IsCN](MdGeBSplineCurve.md#iscn)
- [IsClosed](MdGeBSplineCurve.md#isclosed)
- [IsG1](MdGeBSplineCurve.md#isg1)
- [IsPeriodic](MdGeBSplineCurve.md#isperiodic)
- [IsRational](MdGeBSplineCurve.md#isrational)
- [Knot](MdGeBSplineCurve.md#knot)
- [KnotSequence](MdGeBSplineCurve.md#knotsequence)
- [Knots](MdGeBSplineCurve.md#knots)
- [LastParameter](MdGeBSplineCurve.md#lastparameter)
- [LastUKnotIndex](MdGeBSplineCurve.md#lastuknotindex)
- [LocalDN](MdGeBSplineCurve.md#localdn)
- [LocalValue](MdGeBSplineCurve.md#localvalue)
- [Multiplicities](MdGeBSplineCurve.md#multiplicities)
- [Multiplicity](MdGeBSplineCurve.md#multiplicity)
- [NbKnots](MdGeBSplineCurve.md#nbknots)
- [NbPoles](MdGeBSplineCurve.md#nbpoles)
- [Pole](MdGeBSplineCurve.md#pole)
- [Poles](MdGeBSplineCurve.md#poles)
- [RemoveKnot](MdGeBSplineCurve.md#removeknot)
- [Reverse](MdGeBSplineCurve.md#reverse)
- [ReversedParameter](MdGeBSplineCurve.md#reversedparameter)
- [SetKnot](MdGeBSplineCurve.md#setknot)
- [SetKnots](MdGeBSplineCurve.md#setknots)
- [SetNotPeriodic](MdGeBSplineCurve.md#setnotperiodic)
- [SetOrigin](MdGeBSplineCurve.md#setorigin)
- [SetPeriodic](MdGeBSplineCurve.md#setperiodic)
- [SetPole](MdGeBSplineCurve.md#setpole)
- [SetWeight](MdGeBSplineCurve.md#setweight)
- [Shape](MdGeBSplineCurve.md#shape)
- [StartPoint](MdGeBSplineCurve.md#startpoint)
- [Transform](MdGeBSplineCurve.md#transform)
- [Weight](MdGeBSplineCurve.md#weight)
- [Weights](MdGeBSplineCurve.md#weights)
- [Wire](MdGeBSplineCurve.md#wire)
- [getImp](MdGeBSplineCurve.md#getimp)
- [initTempObject](MdGeBSplineCurve.md#inittempobject)

## Constructors

### constructor

• **new MdGeBSplineCurve**(`p1?`, `p2?`, `p3?`, `p4?`, `p5?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `p1?` | `object` \| [`MdGeArray1OfPnt`](MdGeArray1OfPnt.md) |
| `p2?` | [`MdGeArray1OfReal`](MdGeArray1OfReal.md) |
| `p3?` | [`MdGeArray1OfInteger`](MdGeArray1OfInteger.md) |
| `p4?` | `number` |
| `p5?` | `boolean` |

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

▸ **DN**(`U`, `N`): [`MdGeVec`](MdGeVec.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `U` | `number` |
| `N` | `number` |

#### Returns

[`MdGeVec`](MdGeVec.md)

___

### Degree

▸ **Degree**(): `number`

#### Returns

`number`

___

### Edge

▸ **Edge**(): [`MdGeEdge`](MdGeEdge.md)

#### Returns

[`MdGeEdge`](MdGeEdge.md)

___

### EndPoint

▸ **EndPoint**(): [`MdGePoint`](MdGePoint.md)

#### Returns

[`MdGePoint`](MdGePoint.md)

___

### FirstParameter

▸ **FirstParameter**(): `number`

#### Returns

`number`

___

### FirstUKnotIndex

▸ **FirstUKnotIndex**(): `number`

#### Returns

`number`

___

### IncreaseDegree

▸ **IncreaseDegree**(`Degree`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `Degree` | `number` |

#### Returns

`void`

___

### IncreaseMultiplicity

▸ **IncreaseMultiplicity**(`p1`, `p2`, `p3?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `p1` | `number` |
| `p2` | `number` |
| `p3?` | `number` |

#### Returns

`void`

___

### IncrementMultiplicity

▸ **IncrementMultiplicity**(`I1`, `I2`, `M`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `I1` | `number` |
| `I2` | `number` |
| `M` | `number` |

#### Returns

`void`

___

### InsertKnot

▸ **InsertKnot**(`U`, `M?`, `ParametricTolerance?`, `Add?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `U` | `number` |
| `M?` | `number` |
| `ParametricTolerance?` | `number` |
| `Add?` | `boolean` |

#### Returns

`void`

___

### InsertKnots

▸ **InsertKnots**(`Knots`, `Mults`, `ParametricTolerance?`, `Add?`): `void`

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

### IsCN

▸ **IsCN**(`N`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `N` | `number` |

#### Returns

`boolean`

___

### IsClosed

▸ **IsClosed**(): `boolean`

#### Returns

`boolean`

___

### IsG1

▸ **IsG1**(`theTf`, `theTl`, `theAngTol`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theTf` | `number` |
| `theTl` | `number` |
| `theAngTol` | `number` |

#### Returns

`boolean`

___

### IsPeriodic

▸ **IsPeriodic**(): `boolean`

#### Returns

`boolean`

___

### IsRational

▸ **IsRational**(): `boolean`

#### Returns

`boolean`

___

### Knot

▸ **Knot**(`Index`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `Index` | `number` |

#### Returns

`number`

___

### KnotSequence

▸ **KnotSequence**(): [`MdGeArray1OfReal`](MdGeArray1OfReal.md)

#### Returns

[`MdGeArray1OfReal`](MdGeArray1OfReal.md)

___

### Knots

▸ **Knots**(): [`MdGeArray1OfReal`](MdGeArray1OfReal.md)

#### Returns

[`MdGeArray1OfReal`](MdGeArray1OfReal.md)

___

### LastParameter

▸ **LastParameter**(): `number`

#### Returns

`number`

___

### LastUKnotIndex

▸ **LastUKnotIndex**(): `number`

#### Returns

`number`

___

### LocalDN

▸ **LocalDN**(`U`, `FromK1`, `ToK2`, `N`): [`MdGeVec`](MdGeVec.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `U` | `number` |
| `FromK1` | `number` |
| `ToK2` | `number` |
| `N` | `number` |

#### Returns

[`MdGeVec`](MdGeVec.md)

___

### LocalValue

▸ **LocalValue**(`U`, `FromK1`, `ToK2`): [`MdGePoint`](MdGePoint.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `U` | `number` |
| `FromK1` | `number` |
| `ToK2` | `number` |

#### Returns

[`MdGePoint`](MdGePoint.md)

___

### Multiplicities

▸ **Multiplicities**(): [`MdGeArray1OfInteger`](MdGeArray1OfInteger.md)

#### Returns

[`MdGeArray1OfInteger`](MdGeArray1OfInteger.md)

___

### Multiplicity

▸ **Multiplicity**(`Index`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `Index` | `number` |

#### Returns

`number`

___

### NbKnots

▸ **NbKnots**(): `number`

#### Returns

`number`

___

### NbPoles

▸ **NbPoles**(): `number`

#### Returns

`number`

___

### Pole

▸ **Pole**(`Index`): [`MdGePoint`](MdGePoint.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `Index` | `number` |

#### Returns

[`MdGePoint`](MdGePoint.md)

___

### Poles

▸ **Poles**(): [`MdGeArray1OfPnt`](MdGeArray1OfPnt.md)

#### Returns

[`MdGeArray1OfPnt`](MdGeArray1OfPnt.md)

___

### RemoveKnot

▸ **RemoveKnot**(`Index`, `M`, `Tolerance`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `Index` | `number` |
| `M` | `number` |
| `Tolerance` | `number` |

#### Returns

`boolean`

___

### Reverse

▸ **Reverse**(): `void`

#### Returns

`void`

___

### ReversedParameter

▸ **ReversedParameter**(`U`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `U` | `number` |

#### Returns

`number`

___

### SetKnot

▸ **SetKnot**(`Index`, `K`, `M?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `Index` | `number` |
| `K` | `number` |
| `M?` | `number` |

#### Returns

`void`

___

### SetKnots

▸ **SetKnots**(`K`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `K` | [`MdGeArray1OfReal`](MdGeArray1OfReal.md) |

#### Returns

`void`

___

### SetNotPeriodic

▸ **SetNotPeriodic**(): `void`

#### Returns

`void`

___

### SetOrigin

▸ **SetOrigin**(`p1`, `p2?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `p1` | `number` |
| `p2?` | `number` |

#### Returns

`void`

___

### SetPeriodic

▸ **SetPeriodic**(): `void`

#### Returns

`void`

___

### SetPole

▸ **SetPole**(`Index`, `P`, `Weight?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `Index` | `number` |
| `P` | [`MdGePoint`](MdGePoint.md) |
| `Weight?` | `number` |

#### Returns

`void`

___

### SetWeight

▸ **SetWeight**(`Index`, `Weight`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `Index` | `number` |
| `Weight` | `number` |

#### Returns

`void`

___

### Shape

▸ **Shape**(): [`MdGeShape`](MdGeShape.md)

#### Returns

[`MdGeShape`](MdGeShape.md)

___

### StartPoint

▸ **StartPoint**(): [`MdGePoint`](MdGePoint.md)

#### Returns

[`MdGePoint`](MdGePoint.md)

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

### Weight

▸ **Weight**(`Index`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `Index` | `number` |

#### Returns

`number`

___

### Weights

▸ **Weights**(): [`MdGeArray1OfReal`](MdGeArray1OfReal.md)

#### Returns

[`MdGeArray1OfReal`](MdGeArray1OfReal.md)

___

### Wire

▸ **Wire**(): [`MdGeWire`](MdGeWire.md)

#### Returns

[`MdGeWire`](MdGeWire.md)

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
