[mxcad API 文档](../README.md) / MdGeBezierCurve

# Class: MdGeBezierCurve

表示贝塞尔曲线

## Hierarchy

- [`MdGeObject`](MdGeObject.md)

  ↳ **`MdGeBezierCurve`**

## Table of contents

### Constructors

- [constructor](MdGeBezierCurve.md#constructor)

### Properties

- [imp](MdGeBezierCurve.md#imp)

### Methods

- [Continuity](MdGeBezierCurve.md#continuity)
- [DN](MdGeBezierCurve.md#dn)
- [Degree](MdGeBezierCurve.md#degree)
- [Edge](MdGeBezierCurve.md#edge)
- [EndPoint](MdGeBezierCurve.md#endpoint)
- [FirstParameter](MdGeBezierCurve.md#firstparameter)
- [Increase](MdGeBezierCurve.md#increase)
- [InsertPoleAfter](MdGeBezierCurve.md#insertpoleafter)
- [InsertPoleBefore](MdGeBezierCurve.md#insertpolebefore)
- [IsCN](MdGeBezierCurve.md#iscn)
- [IsClosed](MdGeBezierCurve.md#isclosed)
- [IsPeriodic](MdGeBezierCurve.md#isperiodic)
- [IsRational](MdGeBezierCurve.md#isrational)
- [LastParameter](MdGeBezierCurve.md#lastparameter)
- [NbPoles](MdGeBezierCurve.md#nbpoles)
- [Pole](MdGeBezierCurve.md#pole)
- [Poles](MdGeBezierCurve.md#poles)
- [RemovePole](MdGeBezierCurve.md#removepole)
- [Reverse](MdGeBezierCurve.md#reverse)
- [ReversedParameter](MdGeBezierCurve.md#reversedparameter)
- [Segment](MdGeBezierCurve.md#segment)
- [SetPole](MdGeBezierCurve.md#setpole)
- [SetWeight](MdGeBezierCurve.md#setweight)
- [Shape](MdGeBezierCurve.md#shape)
- [StartPoint](MdGeBezierCurve.md#startpoint)
- [Transform](MdGeBezierCurve.md#transform)
- [Weight](MdGeBezierCurve.md#weight)
- [Weights](MdGeBezierCurve.md#weights)
- [Wire](MdGeBezierCurve.md#wire)
- [getImp](MdGeBezierCurve.md#getimp)
- [initTempObject](MdGeBezierCurve.md#inittempobject)
- [MaxDegree](MdGeBezierCurve.md#maxdegree)

## Constructors

### constructor

• **new MdGeBezierCurve**(`p1?`, `p2?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `p1?` | `object` \| [`MdGeArray1OfPnt`](MdGeArray1OfPnt.md) |
| `p2?` | [`MdGeArray1OfReal`](MdGeArray1OfReal.md) |

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

### Increase

▸ **Increase**(`Degree`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `Degree` | `number` |

#### Returns

`void`

___

### InsertPoleAfter

▸ **InsertPoleAfter**(`p1`, `p2`, `p3?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `p1` | `number` |
| `p2` | [`MdGePoint`](MdGePoint.md) |
| `p3?` | `number` |

#### Returns

`void`

___

### InsertPoleBefore

▸ **InsertPoleBefore**(`p1`, `p2`, `p3?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `p1` | `number` |
| `p2` | [`MdGePoint`](MdGePoint.md) |
| `p3?` | `number` |

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

### LastParameter

▸ **LastParameter**(): `number`

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

### RemovePole

▸ **RemovePole**(`Index`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `Index` | `number` |

#### Returns

`void`

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

### Segment

▸ **Segment**(`U1`, `U2`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `U1` | `number` |
| `U2` | `number` |

#### Returns

`void`

___

### SetPole

▸ **SetPole**(`p1`, `p2`, `p3?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `p1` | `number` |
| `p2` | [`MdGePoint`](MdGePoint.md) |
| `p3?` | `number` |

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

___

### MaxDegree

▸ `Static` **MaxDegree**(): `number`

#### Returns

`number`
