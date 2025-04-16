[mxcad_3d API Document](../README. md)/Mx3dGeomConic

# Class: Mx3dGeomConic

The class representing geometric quadratic curves (conic sections) inherits from Mx3dGeomCurve.

## Hierarchy

- [`Mx3dGeomCurve`](Mx3dGeomCurve.md)

  ↳ **`Mx3dGeomConic`**

  ↳↳ [`Mx3dGeomCircle`](Mx3dGeomCircle.md)

  ↳↳ [`Mx3dGeomEllipse`](Mx3dGeomEllipse.md)

  ↳↳ [`Mx3dGeomHyperbola`](Mx3dGeomHyperbola.md)

  ↳↳ [`Mx3dGeomParabola`](Mx3dGeomParabola.md)

## Table of contents

### Constructors

- [constructor](Mx3dGeomConic.md#constructor)

### Methods

- [Axis](Mx3dGeomConic.md#axis)
- [Continuity](Mx3dGeomConic.md#continuity)
- [DynCast](Mx3dGeomConic.md#dyncast)
- [DynamicType](Mx3dGeomConic.md#dynamictype)
- [IsCN](Mx3dGeomConic.md#iscn)
- [Location](Mx3dGeomConic.md#location)
- [MirrorByAxis](Mx3dGeomConic.md#mirrorbyaxis)
- [MirrorByCSYSR](Mx3dGeomConic.md#mirrorbycsysr)
- [MirrorByPoint](Mx3dGeomConic.md#mirrorbypoint)
- [MirroredByAxis](Mx3dGeomConic.md#mirroredbyaxis)
- [MirroredByCSYSR](Mx3dGeomConic.md#mirroredbycsysr)
- [MirroredByPoint](Mx3dGeomConic.md#mirroredbypoint)
- [Period](Mx3dGeomConic.md#period)
- [Position](Mx3dGeomConic.md#position)
- [Reverse](Mx3dGeomConic.md#reverse)
- [Reversed](Mx3dGeomConic.md#reversed)
- [Rotate](Mx3dGeomConic.md#rotate)
- [Rotated](Mx3dGeomConic.md#rotated)
- [Scale](Mx3dGeomConic.md#scale)
- [Scaled](Mx3dGeomConic.md#scaled)
- [SetAxis](Mx3dGeomConic.md#setaxis)
- [SetLocation](Mx3dGeomConic.md#setlocation)
- [SetPosition](Mx3dGeomConic.md#setposition)
- [Transformed](Mx3dGeomConic.md#transformed)
- [TranslateBy2Points](Mx3dGeomConic.md#translateby2points)
- [TranslateByVec](Mx3dGeomConic.md#translatebyvec)
- [TranslatedBy2Points](Mx3dGeomConic.md#translatedby2points)
- [TranslatedByVec](Mx3dGeomConic.md#translatedbyvec)
- [Value](Mx3dGeomConic.md#value)
- [XAxis](Mx3dGeomConic.md#xaxis)
- [YAxis](Mx3dGeomConic.md#yaxis)

## Constructors

### constructor

• **new Mx3dGeomConic**(`p?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `p?` | `object` |

#### Overrides

[Mx3dGeomCurve](Mx3dGeomCurve.md).[constructor](Mx3dGeomCurve.md#constructor)

## Methods

### Axis

▸ **Axis**(): [`Mx3dGeAxis`](Mx3dGeAxis.md)

Obtain the axis of the quadratic curve.

#### Returns

[`Mx3dGeAxis`](Mx3dGeAxis.md)

Axis object.

___

### Continuity

▸ **Continuity**(): [`MxGAShapeEnum`](../enums/MdGe.MxGAShapeEnum.md)

Obtain the continuity of the quadratic curve.

#### Returns

[`MxGAShapeEnum`](../enums/MdGe.MxGAShapeEnum.md)

Continuity enumeration values.

___

### DynCast

▸ **DynCast**(`theObject`): [`Mx3dGeomConic`](Mx3dGeomConic.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theObject` | [`Mx3dGeomObject`](Mx3dGeomObject.md) |

#### Returns

[`Mx3dGeomConic`](Mx3dGeomConic.md)

#### Inherited from

[Mx3dGeomCurve](Mx3dGeomCurve.md).[DynCast](Mx3dGeomCurve.md#dyncast)

___

### DynamicType

▸ **DynamicType**(): `string`

Return the dynamic type of the object.

#### Returns

`string`

A dynamically typed string.

#### Overrides

[Mx3dGeomCurve](Mx3dGeomCurve.md).[DynamicType](Mx3dGeomCurve.md#dynamictype)

___

### IsCN

▸ **IsCN**(`N`): `boolean`

Check if the quadratic curve has continuity of the specified order.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|N | number | order|

#### Returns

`boolean`

If there is continuity of the specified order, return true; otherwise, return false.

___

### Location

▸ **Location**(): [`Mx3dGePoint`](Mx3dGePoint.md)

Obtain the position of the quadratic curve.

#### Returns

[`Mx3dGePoint`](Mx3dGePoint.md)

Point object.

___

### MirrorByAxis

▸ **MirrorByAxis**(`A1`): `void`

Mirror transform geometric objects through axes.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|A1 | [Mx3dGeAxis] (Mx3dGeAxis. md) | Axis object|

#### Returns

`void`

#### Inherited from

[Mx3dGeomCurve](Mx3dGeomCurve.md).[MirrorByAxis](Mx3dGeomCurve.md#mirrorbyaxis)

___

### MirrorByCSYSR

▸ **MirrorByCSYSR**(`A2`): `void`

Mirror transform geometric objects using a right-handed coordinate system.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|A2 | [Mx3dGeCSYSR] (Mx3dGeCSYSR. md) | Right hand coordinate system object|

#### Returns

`void`

#### Inherited from

[Mx3dGeomCurve](Mx3dGeomCurve.md).[MirrorByCSYSR](Mx3dGeomCurve.md#mirrorbycsysr)

___

### MirrorByPoint

▸ **MirrorByPoint**(`P`): `void`

Mirror transform geometric objects through points.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|P | [Mx3dGePoint] (Mx3dGePoint. md) | Point object|

#### Returns

`void`

#### Inherited from

[Mx3dGeomCurve](Mx3dGeomCurve.md).[MirrorByPoint](Mx3dGeomCurve.md#mirrorbypoint)

___

### MirroredByAxis

▸ **MirroredByAxis**(`A1`): [`Mx3dGeomConic`](Mx3dGeomConic.md)

Return the new geometric object transformed through axis mirroring.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|A1 | [Mx3dGeAxis] (Mx3dGeAxis. md) | Axis object|

#### Returns

[`Mx3dGeomConic`](Mx3dGeomConic.md)

New geometric objects.

#### Inherited from

[Mx3dGeomCurve](Mx3dGeomCurve.md).[MirroredByAxis](Mx3dGeomCurve.md#mirroredbyaxis)

___

### MirroredByCSYSR

▸ **MirroredByCSYSR**(`A2`): [`Mx3dGeomConic`](Mx3dGeomConic.md)

Return the new geometric object after mirror transformation through the right-handed coordinate system.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|A2 | [Mx3dGeCSYSR] (Mx3dGeCSYSR. md) | Right hand coordinate system object|

#### Returns

[`Mx3dGeomConic`](Mx3dGeomConic.md)

New geometric objects.

#### Inherited from

[Mx3dGeomCurve](Mx3dGeomCurve.md).[MirroredByCSYSR](Mx3dGeomCurve.md#mirroredbycsysr)

___

### MirroredByPoint

▸ **MirroredByPoint**(`P`): [`Mx3dGeomConic`](Mx3dGeomConic.md)

Return the new geometric object after point mirror transformation.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|P | [Mx3dGePoint] (Mx3dGePoint. md) | Point object|

#### Returns

[`Mx3dGeomConic`](Mx3dGeomConic.md)

New geometric objects.

#### Inherited from

[Mx3dGeomCurve](Mx3dGeomCurve.md).[MirroredByPoint](Mx3dGeomCurve.md#mirroredbypoint)

___

### Period

▸ **Period**(): `number`

Return the period of the curve.

#### Returns

`number`

The period of the curve.

#### Inherited from

[Mx3dGeomCurve](Mx3dGeomCurve.md).[Period](Mx3dGeomCurve.md#period)

___

### Position

▸ **Position**(): [`Mx3dGeCSYSR`](Mx3dGeCSYSR.md)

Obtain the right-hand coordinate system of the quadratic curve.

#### Returns

[`Mx3dGeCSYSR`](Mx3dGeCSYSR.md)

Right hand coordinate system object.

___

### Reverse

▸ **Reverse**(): `void`

Reverse the direction of the quadratic curve.

#### Returns

`void`

___

### Reversed

▸ **Reversed**(): [`Mx3dGeomConic`](Mx3dGeomConic.md)

Return the new geometric curve object in reverse.

#### Returns

[`Mx3dGeomConic`](Mx3dGeomConic.md)

New geometric curve object.

#### Inherited from

[Mx3dGeomCurve](Mx3dGeomCurve.md).[Reversed](Mx3dGeomCurve.md#reversed)

___

### Rotate

▸ **Rotate**(`A1`, `Ang`): `void`

Rotate geometric objects.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|A1 | [Mx3dGeAxis] (Mx3dGeAxis. md) | Axis object|
|Ang | number | Rotation angle|

#### Returns

`void`

#### Inherited from

[Mx3dGeomCurve](Mx3dGeomCurve.md).[Rotate](Mx3dGeomCurve.md#rotate)

___

### Rotated

▸ **Rotated**(`A1`, `Ang`): [`Mx3dGeomConic`](Mx3dGeomConic.md)

Return the rotated new geometric object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|A1 | [Mx3dGeAxis] (Mx3dGeAxis. md) | Axis object|
|Ang | number | Rotation angle|

#### Returns

[`Mx3dGeomConic`](Mx3dGeomConic.md)

New geometric objects.

#### Inherited from

[Mx3dGeomCurve](Mx3dGeomCurve.md).[Rotated](Mx3dGeomCurve.md#rotated)

___

### Scale

▸ **Scale**(`P`, `S`): `void`

Scale geometric objects.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|P | [Mx3dGePoint] (Mx3dGePoint. md) | Point object|
|S | number | scaling ratio|

#### Returns

`void`

#### Inherited from

[Mx3dGeomCurve](Mx3dGeomCurve.md).[Scale](Mx3dGeomCurve.md#scale)

___

### Scaled

▸ **Scaled**(`P`, `S`): [`Mx3dGeomConic`](Mx3dGeomConic.md)

Return the scaled new geometric object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|P | [Mx3dGePoint] (Mx3dGePoint. md) | Point object|
|S | number | scaling ratio|

#### Returns

[`Mx3dGeomConic`](Mx3dGeomConic.md)

New geometric objects.

#### Inherited from

[Mx3dGeomCurve](Mx3dGeomCurve.md).[Scaled](Mx3dGeomCurve.md#scaled)

___

### SetAxis

▸ **SetAxis**(`theA1`): `void`

Set the axis of the quadratic curve.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheA1 | [Mx3dGeAxis] (Mx3dGeAxis. md) | Axis object|

#### Returns

`void`

___

### SetLocation

▸ **SetLocation**(`theP`): `void`

Set the position of the quadratic curve.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheP | [Mx3dGePoint] (Mx3dGePoint. md) | Point object|

#### Returns

`void`

___

### SetPosition

▸ **SetPosition**(`theA2`): `void`

Set the right-hand coordinate system for the quadratic curve.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheA2 | [Mx3dGeCSYSR] (Mx3dGeCSYSR. md) | Right hand coordinate system object|

#### Returns

`void`

___

### Transformed

▸ **Transformed**(`T`): [`Mx3dGeomConic`](Mx3dGeomConic.md)

Return the transformed new geometric object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|T | [Mx3dGetStrf] (Mx3dGetStrf. md) | Transform the object|

#### Returns

[`Mx3dGeomConic`](Mx3dGeomConic.md)

New geometric objects.

#### Inherited from

[Mx3dGeomCurve](Mx3dGeomCurve.md).[Transformed](Mx3dGeomCurve.md#transformed)

___

### TranslateBy2Points

▸ **TranslateBy2Points**(`P1`, `P2`): `void`

Translate geometric objects through two points.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|P1 | [Mx3dGePoint] (Mx3dGePoint. md) | Starting point object|
|P2 | [Mx3dGePoint] (Mx3dGePoint. md) | End point object|

#### Returns

`void`

#### Inherited from

[Mx3dGeomCurve](Mx3dGeomCurve.md).[TranslateBy2Points](Mx3dGeomCurve.md#translateby2points)

___

### TranslateByVec

▸ **TranslateByVec**(`V`): `void`

Translate geometric objects through vectors.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|V | [Mx3dGeVec] (Mx3dGeVec. md) | Vector object|

#### Returns

`void`

#### Inherited from

[Mx3dGeomCurve](Mx3dGeomCurve.md).[TranslateByVec](Mx3dGeomCurve.md#translatebyvec)

___

### TranslatedBy2Points

▸ **TranslatedBy2Points**(`P1`, `P2`): [`Mx3dGeomConic`](Mx3dGeomConic.md)

Return the new geometric object after translating through two points.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|P1 | [Mx3dGePoint] (Mx3dGePoint. md) | Starting point object|
|P2 | [Mx3dGePoint] (Mx3dGePoint. md) | End point object|

#### Returns

[`Mx3dGeomConic`](Mx3dGeomConic.md)

New geometric objects.

#### Inherited from

[Mx3dGeomCurve](Mx3dGeomCurve.md).[TranslatedBy2Points](Mx3dGeomCurve.md#translatedby2points)

___

### TranslatedByVec

▸ **TranslatedByVec**(`V`): [`Mx3dGeomConic`](Mx3dGeomConic.md)

Return the new geometric object after vector translation.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|V | [Mx3dGeVec] (Mx3dGeVec. md) | Vector object|

#### Returns

[`Mx3dGeomConic`](Mx3dGeomConic.md)

New geometric objects.

#### Inherited from

[Mx3dGeomCurve](Mx3dGeomCurve.md).[TranslatedByVec](Mx3dGeomCurve.md#translatedbyvec)

___

### Value

▸ **Value**(`U`): [`Mx3dGePoint`](Mx3dGePoint.md)

Return the point at the given parameter U.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|The parameter value of 'U' | 'number'|

#### Returns

[`Mx3dGePoint`](Mx3dGePoint.md)

The point object at the given parameter.

#### Inherited from

[Mx3dGeomCurve](Mx3dGeomCurve.md).[Value](Mx3dGeomCurve.md#value)

___

### XAxis

▸ **XAxis**(): [`Mx3dGeAxis`](Mx3dGeAxis.md)

Obtain the X-axis of the quadratic curve.

#### Returns

[`Mx3dGeAxis`](Mx3dGeAxis.md)

X-axis object.

___

### YAxis

▸ **YAxis**(): [`Mx3dGeAxis`](Mx3dGeAxis.md)

Obtain the Y-axis of the quadratic curve.

#### Returns

[`Mx3dGeAxis`](Mx3dGeAxis.md)

Y-axis object.
