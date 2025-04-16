[mxcad_3d API Document](../README. md)/Mx3dGeomBizierCurve

# Class: Mx3dGeomBezierCurve

Mx3dGeomBezierCurve represents the Bezier curve and provides a series of methods to manipulate and query the properties of the Bezier curve.

## Hierarchy

- [`Mx3dGeomBoundedCurve`](Mx3dGeomBoundedCurve.md)

  ↳ **`Mx3dGeomBezierCurve`**

## Table of contents

### Constructors

- [constructor](Mx3dGeomBezierCurve.md#constructor)

### Methods

- [Continuity](Mx3dGeomBezierCurve.md#continuity)
- [Copy](Mx3dGeomBezierCurve.md#copy)
- [D0](Mx3dGeomBezierCurve.md#d0)
- [D1](Mx3dGeomBezierCurve.md#d1)
- [D2](Mx3dGeomBezierCurve.md#d2)
- [D3](Mx3dGeomBezierCurve.md#d3)
- [DN](Mx3dGeomBezierCurve.md#dn)
- [Degree](Mx3dGeomBezierCurve.md#degree)
- [DynamicType](Mx3dGeomBezierCurve.md#dynamictype)
- [Edge](Mx3dGeomBezierCurve.md#edge)
- [EndPoint](Mx3dGeomBezierCurve.md#endpoint)
- [FirstParameter](Mx3dGeomBezierCurve.md#firstparameter)
- [Increase](Mx3dGeomBezierCurve.md#increase)
- [InsertPoleAfter](Mx3dGeomBezierCurve.md#insertpoleafter)
- [InsertPoleBefore](Mx3dGeomBezierCurve.md#insertpolebefore)
- [IsCN](Mx3dGeomBezierCurve.md#iscn)
- [IsClosed](Mx3dGeomBezierCurve.md#isclosed)
- [IsPeriodic](Mx3dGeomBezierCurve.md#isperiodic)
- [IsRational](Mx3dGeomBezierCurve.md#isrational)
- [LastParameter](Mx3dGeomBezierCurve.md#lastparameter)
- [MirrorByAxis](Mx3dGeomBezierCurve.md#mirrorbyaxis)
- [MirrorByCSYSR](Mx3dGeomBezierCurve.md#mirrorbycsysr)
- [MirrorByPoint](Mx3dGeomBezierCurve.md#mirrorbypoint)
- [MirroredByAxis](Mx3dGeomBezierCurve.md#mirroredbyaxis)
- [MirroredByCSYSR](Mx3dGeomBezierCurve.md#mirroredbycsysr)
- [MirroredByPoint](Mx3dGeomBezierCurve.md#mirroredbypoint)
- [NbPoles](Mx3dGeomBezierCurve.md#nbpoles)
- [OffsetCurve](Mx3dGeomBezierCurve.md#offsetcurve)
- [Period](Mx3dGeomBezierCurve.md#period)
- [Pole](Mx3dGeomBezierCurve.md#pole)
- [Poles](Mx3dGeomBezierCurve.md#poles)
- [RemovePole](Mx3dGeomBezierCurve.md#removepole)
- [Reverse](Mx3dGeomBezierCurve.md#reverse)
- [Reversed](Mx3dGeomBezierCurve.md#reversed)
- [ReversedParameter](Mx3dGeomBezierCurve.md#reversedparameter)
- [Rotate](Mx3dGeomBezierCurve.md#rotate)
- [Rotated](Mx3dGeomBezierCurve.md#rotated)
- [Scale](Mx3dGeomBezierCurve.md#scale)
- [Scaled](Mx3dGeomBezierCurve.md#scaled)
- [Segment](Mx3dGeomBezierCurve.md#segment)
- [SetPole](Mx3dGeomBezierCurve.md#setpole)
- [SetWeight](Mx3dGeomBezierCurve.md#setweight)
- [StartPoint](Mx3dGeomBezierCurve.md#startpoint)
- [Transform](Mx3dGeomBezierCurve.md#transform)
- [Transformed](Mx3dGeomBezierCurve.md#transformed)
- [TranslateBy2Points](Mx3dGeomBezierCurve.md#translateby2points)
- [TranslateByVec](Mx3dGeomBezierCurve.md#translatebyvec)
- [TranslatedBy2Points](Mx3dGeomBezierCurve.md#translatedby2points)
- [TranslatedByVec](Mx3dGeomBezierCurve.md#translatedbyvec)
- [Value](Mx3dGeomBezierCurve.md#value)
- [Weight](Mx3dGeomBezierCurve.md#weight)
- [Weights](Mx3dGeomBezierCurve.md#weights)
- [Wire](Mx3dGeomBezierCurve.md#wire)
- [DownCast](Mx3dGeomBezierCurve.md#downcast)

## Constructors

### constructor

• **new Mx3dGeomBezierCurve**(`CurvePoles`, `PoleWeights?`)

Constructor, create a Bezier curve.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|CurveHoles | [Mx3dGePoint] (Mx3dGePoint. md) [] | Control point array|
| `PoleWeights?` | ` Number ` [] | Control point weight array (optional)|

#### Overrides

Mx3dGeomBoundedCurve.constructor

## Methods

### Continuity

▸ **Continuity**(): [`MxGAShapeEnum`](../enums/MdGe.MxGAShapeEnum.md)

Obtain the continuity type of the curve.

#### Returns

[`MxGAShapeEnum`](../enums/MdGe.MxGAShapeEnum.md)

The continuity type of the curve.

___

### Copy

▸ **Copy**(): [`Mx3dGeomObject`](Mx3dGeomObject.md)

Copy the curve object.

#### Returns

[`Mx3dGeomObject`](Mx3dGeomObject.md)

The copied curve object.

___

### D0

▸ **D0**(`U`, `P`): `void`

Calculate the point of the curve at the specified parameter value.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|The parameter value of 'U' | 'number'|
|P | [Mx3dGePoint] (Mx3dGePoint. md) | Calculated point|

#### Returns

`void`

___

### D1

▸ **D1**(`U`, `P`, `V1`): `void`

Calculate the point and its first derivative of the curve at the specified parameter value.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|The parameter value of 'U' | 'number'|
|P | [Mx3dGePoint] (Mx3dGePoint. md) | Calculated point|
|V1 | [Mx3dGeVec] (Mx3dGeVec. md) | Calculated first derivative|

#### Returns

`void`

___

### D2

▸ **D2**(`U`, `P`, `V1`, `V2`): `void`

Calculate the points and their first and second derivatives of the curve at the specified parameter values.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|The parameter value of 'U' | 'number'|
|P | [Mx3dGePoint] (Mx3dGePoint. md) | Calculated point|
|V1 | [Mx3dGeVec] (Mx3dGeVec. md) | Calculated first derivative|
|V2 | [Mx3dGeVec] (Mx3dGeVec. md) | Calculated second derivative|

#### Returns

`void`

___

### D3

▸ **D3**(`U`, `P`, `V1`, `V2`, `V3`): `void`

Calculate the points and their first, second, and third derivatives of the curve at the specified parameter values.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|The parameter value of 'U' | 'number'|
|P | [Mx3dGePoint] (Mx3dGePoint. md) | Calculated point|
|V1 | [Mx3dGeVec] (Mx3dGeVec. md) | Calculated first derivative|
|V2 | [Mx3dGeVec] (Mx3dGeVec. md) | Calculated second derivative|
|V3 | [Mx3dGeVec] (Mx3dGeVec. md) | Calculated third derivative|

#### Returns

`void`

___

### DN

▸ **DN**(`U`, `N`): [`Mx3dGeVec`](Mx3dGeVec.md)

Calculate the Nth derivative of the curve at the specified parameter values.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|The parameter value of 'U' | 'number'|
|N | number | The order of the derivative|

#### Returns

[`Mx3dGeVec`](Mx3dGeVec.md)

Calculate the Nth derivative.

___

### Degree

▸ **Degree**(): `number`

Obtain the order of the curve.

#### Returns

`number`

The order of the curve.

___

### DynamicType

▸ **DynamicType**(): `string`

Return the dynamic type of the object.

#### Returns

`string`

A dynamically typed string.

#### Overrides

[Mx3dGeomBoundedCurve](Mx3dGeomBoundedCurve.md).[DynamicType](Mx3dGeomBoundedCurve.md#dynamictype)

___

### Edge

▸ **Edge**(`p1`, `p2`): [`Mx3dShapeEdge`](Mx3dShapeEdge.md)

Create an edge.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|P1 | Number | The starting parameter of the edge|
|P2 | number | End parameter of edge|

#### Returns

[`Mx3dShapeEdge`](Mx3dShapeEdge.md)

The created edge object.

___

### EndPoint

▸ **EndPoint**(): [`Mx3dGePoint`](Mx3dGePoint.md)

Obtain the endpoint of the curve.

#### Returns

[`Mx3dGePoint`](Mx3dGePoint.md)

The endpoint of the curve.

___

### FirstParameter

▸ **FirstParameter**(): `number`

Obtain the first parameter value of the curve.

#### Returns

`number`

The first parameter value of the curve.

___

### Increase

▸ **Increase**(`Degree`): `void`

Increase the order of Bezier curves.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Degree | number | New order|

#### Returns

`void`

___

### InsertPoleAfter

▸ **InsertPoleAfter**(`Index`, `P`, `Weight?`): `void`

Insert a control point after specifying the index.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Index | Number | The index of the insertion point|
|P | [Mx3dGePoint] (Mx3dGePoint. md) | New control point|
| `Weight?` | ` Number ` | The weight of the new control point (optional)|

#### Returns

`void`

___

### InsertPoleBefore

▸ **InsertPoleBefore**(`Index`, `P`, `Weight?`): `void`

Insert a control point before specifying the index.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Index | Number | The index of the insertion point|
|P | [Mx3dGePoint] (Mx3dGePoint. md) | New control point|
| `Weight?` | ` Number ` | The weight of the new control point (optional)|

#### Returns

`void`

___

### IsCN

▸ **IsCN**(`N`): `boolean`

Check the continuity of the curve.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|N | number | The order of continuity|

#### Returns

`boolean`

Does the curve have continuity of a specified order.

___

### IsClosed

▸ **IsClosed**(): `boolean`

Check if the curve is closed.

#### Returns

`boolean`

Is the curve closed.

___

### IsPeriodic

▸ **IsPeriodic**(): `boolean`

Check if the parameterization of the curve is periodic.

#### Returns

`boolean`

Is the curve periodic.

___

### IsRational

▸ **IsRational**(): `boolean`

Check if the curve is a rational Bezier curve.

#### Returns

`boolean`

Is the curve reasonable.

___

### LastParameter

▸ **LastParameter**(): `number`

Obtain the last parameter value of the curve.

#### Returns

`number`

The last parameter value of the curve.

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

[Mx3dGeomBoundedCurve](Mx3dGeomBoundedCurve.md).[MirrorByAxis](Mx3dGeomBoundedCurve.md#mirrorbyaxis)

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

[Mx3dGeomBoundedCurve](Mx3dGeomBoundedCurve.md).[MirrorByCSYSR](Mx3dGeomBoundedCurve.md#mirrorbycsysr)

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

[Mx3dGeomBoundedCurve](Mx3dGeomBoundedCurve.md).[MirrorByPoint](Mx3dGeomBoundedCurve.md#mirrorbypoint)

___

### MirroredByAxis

▸ **MirroredByAxis**(`A1`): [`Mx3dGeomBezierCurve`](Mx3dGeomBezierCurve.md)

Return the new geometric object transformed through axis mirroring.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|A1 | [Mx3dGeAxis] (Mx3dGeAxis. md) | Axis object|

#### Returns

[`Mx3dGeomBezierCurve`](Mx3dGeomBezierCurve.md)

New geometric objects.

#### Inherited from

[Mx3dGeomBoundedCurve](Mx3dGeomBoundedCurve.md).[MirroredByAxis](Mx3dGeomBoundedCurve.md#mirroredbyaxis)

___

### MirroredByCSYSR

▸ **MirroredByCSYSR**(`A2`): [`Mx3dGeomBezierCurve`](Mx3dGeomBezierCurve.md)

Return the new geometric object after mirror transformation through the right-handed coordinate system.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|A2 | [Mx3dGeCSYSR] (Mx3dGeCSYSR. md) | Right hand coordinate system object|

#### Returns

[`Mx3dGeomBezierCurve`](Mx3dGeomBezierCurve.md)

New geometric objects.

#### Inherited from

[Mx3dGeomBoundedCurve](Mx3dGeomBoundedCurve.md).[MirroredByCSYSR](Mx3dGeomBoundedCurve.md#mirroredbycsysr)

___

### MirroredByPoint

▸ **MirroredByPoint**(`P`): [`Mx3dGeomBezierCurve`](Mx3dGeomBezierCurve.md)

Return the new geometric object after point mirror transformation.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|P | [Mx3dGePoint] (Mx3dGePoint. md) | Point object|

#### Returns

[`Mx3dGeomBezierCurve`](Mx3dGeomBezierCurve.md)

New geometric objects.

#### Inherited from

[Mx3dGeomBoundedCurve](Mx3dGeomBoundedCurve.md).[MirroredByPoint](Mx3dGeomBoundedCurve.md#mirroredbypoint)

___

### NbPoles

▸ **NbPoles**(): `number`

Obtain the number of control points for the curve.

#### Returns

`number`

The number of control points on the curve.

___

### OffsetCurve

▸ **OffsetCurve**(`Offset`, `V`, `isNotCheckC0`): [`Mx3dShapeEdge`](Mx3dShapeEdge.md)

Create an offset curve.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Offset | Number | Offset|
|The offset direction is perpendicular to the offset direction|
|IsNotCheckC0 | boolean | Check for C0 continuity|

#### Returns

[`Mx3dShapeEdge`](Mx3dShapeEdge.md)

The created offset curve.

___

### Period

▸ **Period**(): `number`

Return the period of the curve.

#### Returns

`number`

The period of the curve.

#### Inherited from

[Mx3dGeomBoundedCurve](Mx3dGeomBoundedCurve.md).[Period](Mx3dGeomBoundedCurve.md#period)

___

### Pole

▸ **Pole**(`Index`): [`Mx3dGePoint`](Mx3dGePoint.md)

Retrieve the control point of the specified index.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Index | Number | The index of the control point|

#### Returns

[`Mx3dGePoint`](Mx3dGePoint.md)

Designated control points.

___

### Poles

▸ **Poles**(): [`Mx3dGePoint`](Mx3dGePoint.md)[]

Obtain all control points.

#### Returns

[`Mx3dGePoint`](Mx3dGePoint.md)[]

An array of all control points.

___

### RemovePole

▸ **RemovePole**(`Index`): `void`

Delete the control point of the specified index.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Index | Number | The index of the control point to be deleted|

#### Returns

`void`

___

### Reverse

▸ **Reverse**(): `void`

Reverse the parameter direction of Bezier curve.

#### Returns

`void`

___

### Reversed

▸ **Reversed**(): [`Mx3dGeomBezierCurve`](Mx3dGeomBezierCurve.md)

Return the new geometric curve object in reverse.

#### Returns

[`Mx3dGeomBezierCurve`](Mx3dGeomBezierCurve.md)

New geometric curve object.

#### Inherited from

[Mx3dGeomBoundedCurve](Mx3dGeomBoundedCurve.md).[Reversed](Mx3dGeomBoundedCurve.md#reversed)

___

### ReversedParameter

▸ **ReversedParameter**(`U`): `number`

Retrieve the inverted parameter values.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|U | number | Original parameter value|

#### Returns

`number`

Inverted parameter values.

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

[Mx3dGeomBoundedCurve](Mx3dGeomBoundedCurve.md).[Rotate](Mx3dGeomBoundedCurve.md#rotate)

___

### Rotated

▸ **Rotated**(`A1`, `Ang`): [`Mx3dGeomBezierCurve`](Mx3dGeomBezierCurve.md)

Return the rotated new geometric object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|A1 | [Mx3dGeAxis] (Mx3dGeAxis. md) | Axis object|
|Ang | number | Rotation angle|

#### Returns

[`Mx3dGeomBezierCurve`](Mx3dGeomBezierCurve.md)

New geometric objects.

#### Inherited from

[Mx3dGeomBoundedCurve](Mx3dGeomBoundedCurve.md).[Rotated](Mx3dGeomBoundedCurve.md#rotated)

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

[Mx3dGeomBoundedCurve](Mx3dGeomBoundedCurve.md).[Scale](Mx3dGeomBoundedCurve.md#scale)

___

### Scaled

▸ **Scaled**(`P`, `S`): [`Mx3dGeomBezierCurve`](Mx3dGeomBezierCurve.md)

Return the scaled new geometric object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|P | [Mx3dGePoint] (Mx3dGePoint. md) | Point object|
|S | number | scaling ratio|

#### Returns

[`Mx3dGeomBezierCurve`](Mx3dGeomBezierCurve.md)

New geometric objects.

#### Inherited from

[Mx3dGeomBoundedCurve](Mx3dGeomBoundedCurve.md).[Scaled](Mx3dGeomBoundedCurve.md#scaled)

___

### Segment

▸ **Segment**(`U1`, `U2`): `void`

Extract a portion of the Bezier curve.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|U1 | number | Starting parameter value|
|U2 | number | End parameter value|

#### Returns

`void`

___

### SetPole

▸ **SetPole**(`Index`, `P`, `Weight?`): `void`

Set the control point for the specified index.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Index | Number | The index of the control point to be set|
|P | [Mx3dGePoint] (Mx3dGePoint. md) | New control point|
| `Weight?` | ` Number ` | The weight of the new control point (optional)|

#### Returns

`void`

___

### SetWeight

▸ **SetWeight**(`Index`, `Weight`): `void`

Set the control point weights for the specified index.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Index | Number | The index of the control point to be set|
|Weight | number | New weight values|

#### Returns

`void`

___

### StartPoint

▸ **StartPoint**(): [`Mx3dGePoint`](Mx3dGePoint.md)

Obtain the starting point of the curve.

#### Returns

[`Mx3dGePoint`](Mx3dGePoint.md)

The starting point of the curve.

___

### Transform

▸ **Transform**(`T`): `void`

Apply transformations to curves.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|T | [Mx3dGetStrf] (Mx3dGetStrf. md) | Transform matrix|

#### Returns

`void`

___

### Transformed

▸ **Transformed**(`T`): [`Mx3dGeomBezierCurve`](Mx3dGeomBezierCurve.md)

Return the transformed new geometric object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|T | [Mx3dGetStrf] (Mx3dGetStrf. md) | Transform the object|

#### Returns

[`Mx3dGeomBezierCurve`](Mx3dGeomBezierCurve.md)

New geometric objects.

#### Inherited from

[Mx3dGeomBoundedCurve](Mx3dGeomBoundedCurve.md).[Transformed](Mx3dGeomBoundedCurve.md#transformed)

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

[Mx3dGeomBoundedCurve](Mx3dGeomBoundedCurve.md).[TranslateBy2Points](Mx3dGeomBoundedCurve.md#translateby2points)

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

[Mx3dGeomBoundedCurve](Mx3dGeomBoundedCurve.md).[TranslateByVec](Mx3dGeomBoundedCurve.md#translatebyvec)

___

### TranslatedBy2Points

▸ **TranslatedBy2Points**(`P1`, `P2`): [`Mx3dGeomBezierCurve`](Mx3dGeomBezierCurve.md)

Return the new geometric object after translating through two points.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|P1 | [Mx3dGePoint] (Mx3dGePoint. md) | Starting point object|
|P2 | [Mx3dGePoint] (Mx3dGePoint. md) | End point object|

#### Returns

[`Mx3dGeomBezierCurve`](Mx3dGeomBezierCurve.md)

New geometric objects.

#### Inherited from

[Mx3dGeomBoundedCurve](Mx3dGeomBoundedCurve.md).[TranslatedBy2Points](Mx3dGeomBoundedCurve.md#translatedby2points)

___

### TranslatedByVec

▸ **TranslatedByVec**(`V`): [`Mx3dGeomBezierCurve`](Mx3dGeomBezierCurve.md)

Return the new geometric object after vector translation.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|V | [Mx3dGeVec] (Mx3dGeVec. md) | Vector object|

#### Returns

[`Mx3dGeomBezierCurve`](Mx3dGeomBezierCurve.md)

New geometric objects.

#### Inherited from

[Mx3dGeomBoundedCurve](Mx3dGeomBoundedCurve.md).[TranslatedByVec](Mx3dGeomBoundedCurve.md#translatedbyvec)

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

[Mx3dGeomBoundedCurve](Mx3dGeomBoundedCurve.md).[Value](Mx3dGeomBoundedCurve.md#value)

___

### Weight

▸ **Weight**(`Index`): `number`

Retrieve the control point weights for the specified index.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Index | Number | The index of the control point|

#### Returns

`number`

Designated control point weights.

___

### Weights

▸ **Weights**(): `number`[]

Obtain the weights of all control points.

#### Returns

`number`[]

An array of all control point weights.

___

### Wire

▸ **Wire**(): [`Mx3dShapeWire`](Mx3dShapeWire.md)

Create a line.

#### Returns

[`Mx3dShapeWire`](Mx3dShapeWire.md)

The created line object.

___

### DownCast

▸ `Static` **DownCast**(`theObject`): [`Mx3dGeomBezierCurve`](Mx3dGeomBezierCurve.md)

Convert parent class object to Mx3dGeomBizierCurve class object

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheObject | [Mx3dGeomObject] (Mx3dGeomObject. md) | Parent class object|

#### Returns

[`Mx3dGeomBezierCurve`](Mx3dGeomBezierCurve.md)

Mx3dGeomBizierCurve class object
