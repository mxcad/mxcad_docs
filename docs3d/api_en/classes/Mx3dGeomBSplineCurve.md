[mxcad_3d API Document](../README. md)/Mx3dGeomBSpline Curve

# Class: Mx3dGeomBSplineCurve

Represents a B-spline curve.
This class inherits from Mx3dGeomBoundedCurve and encapsulates the operations and properties of B-spline curves.

## Hierarchy

- [`Mx3dGeomBoundedCurve`](Mx3dGeomBoundedCurve.md)

  ↳ **`Mx3dGeomBSplineCurve`**

## Table of contents

### Constructors

- [constructor](Mx3dGeomBSplineCurve.md#constructor)

### Methods

- [Continuity](Mx3dGeomBSplineCurve.md#continuity)
- [Copy](Mx3dGeomBSplineCurve.md#copy)
- [D0](Mx3dGeomBSplineCurve.md#d0)
- [D1](Mx3dGeomBSplineCurve.md#d1)
- [D2](Mx3dGeomBSplineCurve.md#d2)
- [D3](Mx3dGeomBSplineCurve.md#d3)
- [DN](Mx3dGeomBSplineCurve.md#dn)
- [Degree](Mx3dGeomBSplineCurve.md#degree)
- [DynamicType](Mx3dGeomBSplineCurve.md#dynamictype)
- [Edge](Mx3dGeomBSplineCurve.md#edge)
- [EndPoint](Mx3dGeomBSplineCurve.md#endpoint)
- [FirstParameter](Mx3dGeomBSplineCurve.md#firstparameter)
- [FirstUKnotIndex](Mx3dGeomBSplineCurve.md#firstuknotindex)
- [IncreaseDegree](Mx3dGeomBSplineCurve.md#increasedegree)
- [IncreaseMultiplicity](Mx3dGeomBSplineCurve.md#increasemultiplicity)
- [IncrementMultiplicity](Mx3dGeomBSplineCurve.md#incrementmultiplicity)
- [InsertKnot](Mx3dGeomBSplineCurve.md#insertknot)
- [InsertKnots](Mx3dGeomBSplineCurve.md#insertknots)
- [IsCN](Mx3dGeomBSplineCurve.md#iscn)
- [IsClosed](Mx3dGeomBSplineCurve.md#isclosed)
- [IsEqual](Mx3dGeomBSplineCurve.md#isequal)
- [IsG1](Mx3dGeomBSplineCurve.md#isg1)
- [IsPeriodic](Mx3dGeomBSplineCurve.md#isperiodic)
- [IsRational](Mx3dGeomBSplineCurve.md#isrational)
- [Knot](Mx3dGeomBSplineCurve.md#knot)
- [Knots](Mx3dGeomBSplineCurve.md#knots)
- [LastParameter](Mx3dGeomBSplineCurve.md#lastparameter)
- [LastUKnotIndex](Mx3dGeomBSplineCurve.md#lastuknotindex)
- [LocalD0](Mx3dGeomBSplineCurve.md#locald0)
- [LocalD1](Mx3dGeomBSplineCurve.md#locald1)
- [LocalD2](Mx3dGeomBSplineCurve.md#locald2)
- [LocalD3](Mx3dGeomBSplineCurve.md#locald3)
- [LocalDN](Mx3dGeomBSplineCurve.md#localdn)
- [LocalValue](Mx3dGeomBSplineCurve.md#localvalue)
- [MirrorByAxis](Mx3dGeomBSplineCurve.md#mirrorbyaxis)
- [MirrorByCSYSR](Mx3dGeomBSplineCurve.md#mirrorbycsysr)
- [MirrorByPoint](Mx3dGeomBSplineCurve.md#mirrorbypoint)
- [MirroredByAxis](Mx3dGeomBSplineCurve.md#mirroredbyaxis)
- [MirroredByCSYSR](Mx3dGeomBSplineCurve.md#mirroredbycsysr)
- [MirroredByPoint](Mx3dGeomBSplineCurve.md#mirroredbypoint)
- [Multiplicities](Mx3dGeomBSplineCurve.md#multiplicities)
- [Multiplicity](Mx3dGeomBSplineCurve.md#multiplicity)
- [NbKnots](Mx3dGeomBSplineCurve.md#nbknots)
- [NbPoles](Mx3dGeomBSplineCurve.md#nbpoles)
- [OffsetCurve](Mx3dGeomBSplineCurve.md#offsetcurve)
- [Period](Mx3dGeomBSplineCurve.md#period)
- [Pole](Mx3dGeomBSplineCurve.md#pole)
- [Poles](Mx3dGeomBSplineCurve.md#poles)
- [RemoveKnot](Mx3dGeomBSplineCurve.md#removeknot)
- [Reverse](Mx3dGeomBSplineCurve.md#reverse)
- [Reversed](Mx3dGeomBSplineCurve.md#reversed)
- [ReversedParameter](Mx3dGeomBSplineCurve.md#reversedparameter)
- [Rotate](Mx3dGeomBSplineCurve.md#rotate)
- [Rotated](Mx3dGeomBSplineCurve.md#rotated)
- [Scale](Mx3dGeomBSplineCurve.md#scale)
- [Scaled](Mx3dGeomBSplineCurve.md#scaled)
- [Segment](Mx3dGeomBSplineCurve.md#segment)
- [SetKnot](Mx3dGeomBSplineCurve.md#setknot)
- [SetKnots](Mx3dGeomBSplineCurve.md#setknots)
- [SetNotPeriodic](Mx3dGeomBSplineCurve.md#setnotperiodic)
- [SetOrigin](Mx3dGeomBSplineCurve.md#setorigin)
- [SetPeriodic](Mx3dGeomBSplineCurve.md#setperiodic)
- [SetPole](Mx3dGeomBSplineCurve.md#setpole)
- [SetWeight](Mx3dGeomBSplineCurve.md#setweight)
- [StartPoint](Mx3dGeomBSplineCurve.md#startpoint)
- [Transform](Mx3dGeomBSplineCurve.md#transform)
- [Transformed](Mx3dGeomBSplineCurve.md#transformed)
- [TranslateBy2Points](Mx3dGeomBSplineCurve.md#translateby2points)
- [TranslateByVec](Mx3dGeomBSplineCurve.md#translatebyvec)
- [TranslatedBy2Points](Mx3dGeomBSplineCurve.md#translatedby2points)
- [TranslatedByVec](Mx3dGeomBSplineCurve.md#translatedbyvec)
- [Value](Mx3dGeomBSplineCurve.md#value)
- [Weight](Mx3dGeomBSplineCurve.md#weight)
- [Weights](Mx3dGeomBSplineCurve.md#weights)
- [Wire](Mx3dGeomBSplineCurve.md#wire)
- [DownCast](Mx3dGeomBSplineCurve.md#downcast)

## Constructors

### constructor

• **new Mx3dGeomBSplineCurve**(`Poles`, `Knots`, `Multiplicities`, `Degree`)

The constructor is used to create a B-spline curve.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Poles | [Mx3dGePoint] (Mx3dGePoint. md) [] | Array of control points|
|Knots | number [] | Array of node sequences|
|Multiplicity | Number [] | The multiplicity of nodes|
|Degree | number | The order of the curve|

#### Overrides

Mx3dGeomBoundedCurve.constructor

• **new Mx3dGeomBSplineCurve**(`Poles`, `Weights`, `Knots`, `Multiplicities`, `Degree`)

The constructor is used to create a weighted B-spline curve.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Poles | [Mx3dGePoint] (Mx3dGePoint. md) [] | Array of control points|
|Weights | number [] | Weight array of control points|
|Knots | number [] | Array of node sequences|
|Multiplicity | Number [] | The multiplicity of nodes|
|Degree | number | The order of the curve|

#### Overrides

Mx3dGeomBoundedCurve.constructor

## Methods

### Continuity

▸ **Continuity**(): [`MxGAShapeEnum`](../enums/MdGe.MxGAShapeEnum.md)

Obtain the continuity of the curve.

#### Returns

[`MxGAShapeEnum`](../enums/MdGe.MxGAShapeEnum.md)

The continuity of the curve.

___

### Copy

▸ **Copy**(): [`Mx3dGeomObject`](Mx3dGeomObject.md)

Create a copy of the current B-spline curve.

#### Returns

[`Mx3dGeomObject`](Mx3dGeomObject.md)

Return a new B-spline curve object.

___

### D0

▸ **D0**(`U`, `P`): `void`

Calculate the points of the curve at the given parameters.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|The 'U' | 'number' | parameter|
|P | [Mx3dGePoint] (Mx3dGePoint. md) | Result point|

#### Returns

`void`

___

### D1

▸ **D1**(`U`, `P`, `V1`): `void`

Calculate the points and first derivative of the curve at the given parameters.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|The 'U' | 'number' | parameter|
|P | [Mx3dGePoint] (Mx3dGePoint. md) | Result point|
|V1 | [Mx3dGeVec] (Mx3dGeVec. md) | First derivative|

#### Returns

`void`

___

### D2

▸ **D2**(`U`, `P`, `V1`, `V2`): `void`

Calculate the points, first derivative, and second derivative of the curve at the given parameters.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|The 'U' | 'number' | parameter|
|P | [Mx3dGePoint] (Mx3dGePoint. md) | Result point|
|V1 | [Mx3dGeVec] (Mx3dGeVec. md) | First derivative|
|V2 | [Mx3dGeVec] (Mx3dGeVec. md) | Second derivative|

#### Returns

`void`

___

### D3

▸ **D3**(`U`, `P`, `V1`, `V2`, `V3`): `void`

Calculate the points, first derivative, second derivative, and third derivative of the curve at the given parameters.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|The 'U' | 'number' | parameter|
|P | [Mx3dGePoint] (Mx3dGePoint. md) | Result point|
|V1 | [Mx3dGeVec] (Mx3dGeVec. md) | First derivative|
|V2 | [Mx3dGeVec] (Mx3dGeVec. md) | Second derivative|
|V3 | [Mx3dGeVec] (Mx3dGeVec. md) | Third derivative|

#### Returns

`void`

___

### DN

▸ **DN**(`U`, `N`): [`Mx3dGeVec`](Mx3dGeVec.md)

Calculate the Nth derivative of the curve at the given parameters.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|The 'U' | 'number' | parameter|
|N | number | order|

#### Returns

[`Mx3dGeVec`](Mx3dGeVec.md)

Nth derivative.

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

Obtain the edges of the curve.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|P1 | Number | The starting point parameter of the edge|
|P2 | number | End point parameter of the edge|

#### Returns

[`Mx3dShapeEdge`](Mx3dShapeEdge.md)

Return the curve edges within the specified parameter range.

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

Return the first parameter value of the curve.
Usually used to determine the starting point of a curve.

#### Returns

`number`

The first parameter value.

___

### FirstUKnotIndex

▸ **FirstUKnotIndex**(): `number`

Retrieve the first node index of the curve.

#### Returns

`number`

The first node index.

___

### IncreaseDegree

▸ **IncreaseDegree**(`Degree`): `void`

Increase the order of the curve.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Degree | number | New order|

#### Returns

`void`

___

### IncreaseMultiplicity

▸ **IncreaseMultiplicity**(`Index`, `M`): `void`

Improve the node multiplicity at the specified index.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Index | Number | The index of a node|
|M | number | New multiplicity|

#### Returns

`void`

▸ **IncreaseMultiplicity**(`I1`, `I2`, `M`): `void`

Increase the multiplicity of nodes within the specified range.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|I1 | number | range starting index|
|I2 | number | End of range index|
|M | number | New multiplicity|

#### Returns

`void`

___

### IncrementMultiplicity

▸ **IncrementMultiplicity**(`I1`, `I2`, `M`): `void`

Incremental increase in node multiplicity within a specified range.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|I1 | number | Starting index|
|I2 | number | End index|
|The increased multiplicity value of 'M' | 'number'|

#### Returns

`void`

___

### InsertKnot

▸ **InsertKnot**(`U`, `M?`, `ParametricTolerance?`, `Add?`): `void`

Insert a new node.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|U | number | The location of the new node|
| `M?` | ` Number ` | The multiplicity of new nodes (optional)|
| `ParametricTolerance?` | ` Number ` | Parameter tolerance (optional)|
| `Add?` | ` Boolean | Whether to add nodes instead of replacing them (optional)|

#### Returns

`void`

___

### InsertKnots

▸ **InsertKnots**(`Knots`, `Mults`, `ParametricTolerance?`, `Add?`): `void`

Insert multiple new nodes.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Knots | number [] | Array of new node positions|
|Mults | number [] | Multiplicity array of new nodes|
| `ParametricTolerance?` | ` Number ` | Parameter tolerance (optional)|
| `Add?` | ` Boolean | Whether to add nodes instead of replacing them (optional)|

#### Returns

`void`

___

### IsCN

▸ **IsCN**(`N`): `boolean`

Check if the curve is continuous at the specified order.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|N | number | order|

#### Returns

`boolean`

If the curve is continuous at a specified order, return true; Otherwise, return false.

___

### IsClosed

▸ **IsClosed**(): `boolean`

Check if the curve is closed.

#### Returns

`boolean`

If the curve is closed, return true; Otherwise, return false.

___

### IsEqual

▸ **IsEqual**(`theOther`, `thePreci`): `boolean`

Compare the equality between the current curve and another curve.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|` theOther ` | [` Mx3dGeomBSpline Curve `] (Mx3dGeomBSpline Curve. md) | Another B-spline curve object|
|ThePreci | Number | Compare accuracy|

#### Returns

`boolean`

If two curves are equal at the specified precision, return true; Otherwise, return false.

___

### IsG1

▸ **IsG1**(`theTf`, `theTl`, `theAngTol`): `boolean`

Check if the curve meets G1 continuity within the specified range.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|The Tf | number | starting parameter|
|TheTl | Number | End parameter|
|TheAngTol | Number | Angle tolerance|

#### Returns

`boolean`

If the curve satisfies G1 continuity within the specified range, return true; Otherwise, return false.

___

### IsPeriodic

▸ **IsPeriodic**(): `boolean`

Check if the curve is periodic.

#### Returns

`boolean`

If the curve is periodic, return true; Otherwise, return false.

___

### IsRational

▸ **IsRational**(): `boolean`

Check if the curve is reasonable.

#### Returns

`boolean`

If the curve is rational, return true; Otherwise, return false.

___

### Knot

▸ **Knot**(`Index`): `number`

Retrieve the nodes of the curve at the specified index.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Index | Number | The index of a node|

#### Returns

`number`

Nodes.

___

### Knots

▸ **Knots**(): `number`[]

Obtain the node sequence of the curve.

#### Returns

`number`[]

An array of node sequences.

___

### LastParameter

▸ **LastParameter**(): `number`

Return the last parameter value of the curve.
Usually used to determine the endpoint of a curve.

#### Returns

`number`

The last parameter value.

___

### LastUKnotIndex

▸ **LastUKnotIndex**(): `number`

Retrieve the index of the last node of the curve.

#### Returns

`number`

The last node index.

___

### LocalD0

▸ **LocalD0**(`U`, `FromK1`, `ToK2`, `P`): `void`

Calculate the points of local parameters within the specified range.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|The 'U' | 'number' | parameter|
|FromK1 | number | Starting node index|
|ToK2 | number | End node index|
|P | [Mx3dGePoint] (Mx3dGePoint. md) | Result point|

#### Returns

`void`

___

### LocalD1

▸ **LocalD1**(`U`, `FromK1`, `ToK2`, `P`, `V1`): `void`

Calculate the points and first derivative of local parameters within the specified range.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|The 'U' | 'number' | parameter|
|FromK1 | number | Starting node index|
|ToK2 | number | End node index|
|P | [Mx3dGePoint] (Mx3dGePoint. md) | Result point|
|V1 | [Mx3dGeVec] (Mx3dGeVec. md) | First derivative|

#### Returns

`void`

___

### LocalD2

▸ **LocalD2**(`U`, `FromK1`, `ToK2`, `P`, `V1`, `V2`): `void`

Calculate the points, first derivative, and second derivative of local parameters within the specified range.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|The 'U' | 'number' | parameter|
|FromK1 | number | Starting node index|
|ToK2 | number | End node index|
|P | [Mx3dGePoint] (Mx3dGePoint. md) | Result point|
|V1 | [Mx3dGeVec] (Mx3dGeVec. md) | First derivative|
|V2 | [Mx3dGeVec] (Mx3dGeVec. md) | Second derivative|

#### Returns

`void`

___

### LocalD3

▸ **LocalD3**(`U`, `FromK1`, `ToK2`, `P`, `V1`, `V2`, `V3`): `void`

Calculate the points, first derivative, second derivative, and third derivative of local parameters within the specified range.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|The 'U' | 'number' | parameter|
|FromK1 | number | Starting node index|
|ToK2 | number | End node index|
|P | [Mx3dGePoint] (Mx3dGePoint. md) | Result point|
|V1 | [Mx3dGeVec] (Mx3dGeVec. md) | First derivative|
|V2 | [Mx3dGeVec] (Mx3dGeVec. md) | Second derivative|
|V3 | [Mx3dGeVec] (Mx3dGeVec. md) | Third derivative|

#### Returns

`void`

___

### LocalDN

▸ **LocalDN**(`U`, `FromK1`, `ToK2`, `N`): [`Mx3dGeVec`](Mx3dGeVec.md)

Calculate the Nth derivative of local parameters within the specified range.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|The 'U' | 'number' | parameter|
|FromK1 | number | Starting node index|
|ToK2 | number | End node index|
|N | number | order|

#### Returns

[`Mx3dGeVec`](Mx3dGeVec.md)

Nth derivative.

___

### LocalValue

▸ **LocalValue**(`U`, `FromK1`, `ToK2`): [`Mx3dGePoint`](Mx3dGePoint.md)

Calculate the points of local parameters within the specified range.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|The 'U' | 'number' | parameter|
|FromK1 | number | Starting node index|
|ToK2 | number | End node index|

#### Returns

[`Mx3dGePoint`](Mx3dGePoint.md)

Points of local parameters.

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

▸ **MirroredByAxis**(`A1`): [`Mx3dGeomBSplineCurve`](Mx3dGeomBSplineCurve.md)

Return the new geometric object transformed through axis mirroring.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|A1 | [Mx3dGeAxis] (Mx3dGeAxis. md) | Axis object|

#### Returns

[`Mx3dGeomBSplineCurve`](Mx3dGeomBSplineCurve.md)

New geometric objects.

#### Inherited from

[Mx3dGeomBoundedCurve](Mx3dGeomBoundedCurve.md).[MirroredByAxis](Mx3dGeomBoundedCurve.md#mirroredbyaxis)

___

### MirroredByCSYSR

▸ **MirroredByCSYSR**(`A2`): [`Mx3dGeomBSplineCurve`](Mx3dGeomBSplineCurve.md)

Return the new geometric object after mirror transformation through the right-handed coordinate system.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|A2 | [Mx3dGeCSYSR] (Mx3dGeCSYSR. md) | Right hand coordinate system object|

#### Returns

[`Mx3dGeomBSplineCurve`](Mx3dGeomBSplineCurve.md)

New geometric objects.

#### Inherited from

[Mx3dGeomBoundedCurve](Mx3dGeomBoundedCurve.md).[MirroredByCSYSR](Mx3dGeomBoundedCurve.md#mirroredbycsysr)

___

### MirroredByPoint

▸ **MirroredByPoint**(`P`): [`Mx3dGeomBSplineCurve`](Mx3dGeomBSplineCurve.md)

Return the new geometric object after point mirror transformation.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|P | [Mx3dGePoint] (Mx3dGePoint. md) | Point object|

#### Returns

[`Mx3dGeomBSplineCurve`](Mx3dGeomBSplineCurve.md)

New geometric objects.

#### Inherited from

[Mx3dGeomBoundedCurve](Mx3dGeomBoundedCurve.md).[MirroredByPoint](Mx3dGeomBoundedCurve.md#mirroredbypoint)

___

### Multiplicities

▸ **Multiplicities**(): `number`[]

Return the multiplicity values of all nodes on the curve.
Node multiplicity is used to define the degree of repetition of a curve at specific parameter values.

#### Returns

`number`[]

An array of node multiplicity values.

___

### Multiplicity

▸ **Multiplicity**(`Index`): `number`

Retrieve the node multiplicity at the specified index.
Node multiplicity is used to define the degree of repetition of a curve at specific parameter values.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Index | Number | Node Index|

#### Returns

`number`

The multiplicity value of nodes.

___

### NbKnots

▸ **NbKnots**(): `number`

Obtain the number of nodes on the curve.

#### Returns

`number`

Number of nodes.

___

### NbPoles

▸ **NbPoles**(): `number`

Obtain the number of control points for the curve.

#### Returns

`number`

Control the number of points.

___

### OffsetCurve

▸ **OffsetCurve**(`Offset`, `V`, `isNotCheckC0`): [`Mx3dShapeEdge`](Mx3dShapeEdge.md)

Create an offset copy of the curve.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Offset | Number | Offset|
|The offset direction is perpendicular to the offset direction|
|IsNotCheckC0 | boolean | Do not check C0 continuity|

#### Returns

[`Mx3dShapeEdge`](Mx3dShapeEdge.md)

Return the offset curve edge object.

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

Retrieve the control point at the specified index.
The control points define the shape and position of the curve.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Index | Number | The index of the control point|

#### Returns

[`Mx3dGePoint`](Mx3dGePoint.md)

Specify the control point object at the index.

___

### Poles

▸ **Poles**(): [`Mx3dGePoint`](Mx3dGePoint.md)[]

Obtain the sequence of control points for the curve.

#### Returns

[`Mx3dGePoint`](Mx3dGePoint.md)[]

An array of control point sequences.

___

### RemoveKnot

▸ **RemoveKnot**(`Index`, `M`, `Tolerance`): `boolean`

Remove a node.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Index | Number | The index of a node|
|The multiplicity of M | number | nodes|
|Tolerance | number | Tolerance|

#### Returns

`boolean`

Whether the node has been successfully removed.

___

### Reverse

▸ **Reverse**(): `void`

Reverse the curve.

#### Returns

`void`

___

### Reversed

▸ **Reversed**(): [`Mx3dGeomBSplineCurve`](Mx3dGeomBSplineCurve.md)

Return the new geometric curve object in reverse.

#### Returns

[`Mx3dGeomBSplineCurve`](Mx3dGeomBSplineCurve.md)

New geometric curve object.

#### Inherited from

[Mx3dGeomBoundedCurve](Mx3dGeomBoundedCurve.md).[Reversed](Mx3dGeomBoundedCurve.md#reversed)

___

### ReversedParameter

▸ **ReversedParameter**(`U`): `number`

Get the reverse parameter value.

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

▸ **Rotated**(`A1`, `Ang`): [`Mx3dGeomBSplineCurve`](Mx3dGeomBSplineCurve.md)

Return the rotated new geometric object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|A1 | [Mx3dGeAxis] (Mx3dGeAxis. md) | Axis object|
|Ang | number | Rotation angle|

#### Returns

[`Mx3dGeomBSplineCurve`](Mx3dGeomBSplineCurve.md)

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

▸ **Scaled**(`P`, `S`): [`Mx3dGeomBSplineCurve`](Mx3dGeomBSplineCurve.md)

Return the scaled new geometric object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|P | [Mx3dGePoint] (Mx3dGePoint. md) | Point object|
|S | number | scaling ratio|

#### Returns

[`Mx3dGeomBSplineCurve`](Mx3dGeomBSplineCurve.md)

New geometric objects.

#### Inherited from

[Mx3dGeomBoundedCurve](Mx3dGeomBoundedCurve.md).[Scaled](Mx3dGeomBoundedCurve.md#scaled)

___

### Segment

▸ **Segment**(`U1`, `U2`): `void`

Cut a segment of the curve.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|The starting parameter value of the U1 | number | segment|
|The end parameter value of the U2 | number | segment|

#### Returns

`void`

___

### SetKnot

▸ **SetKnot**(`Index`, `K`): `void`

Set up nodes.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Index | Number | Node Index|
|K | number | New node value|

#### Returns

`void`

▸ **SetKnot**(`Index`, `K`, `M`): `void`

Set nodes and specify their multiplicity.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Index | Number | Node Index|
|K | number | New node value|
|The multiplicity of M | number | nodes|

#### Returns

`void`

___

### SetKnots

▸ **SetKnots**(`dK`): `void`

Set up all nodes.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|DK | number [] | Node value array|

#### Returns

`void`

___

### SetNotPeriodic

▸ **SetNotPeriodic**(): `void`

Set the curve to non periodic.

#### Returns

`void`

___

### SetOrigin

▸ **SetOrigin**(`Index`): `void`

Set the origin point.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Index | Number | Origin Index|

#### Returns

`void`

▸ **SetOrigin**(`U`, `Tol`): `void`

Set the origin and specify the tolerance.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|U | number | Origin parameter value|
|Tol | number | tolerance|

#### Returns

`void`

___

### SetPeriodic

▸ **SetPeriodic**(): `void`

Set the curve to be periodic.

#### Returns

`void`

___

### SetPole

▸ **SetPole**(`Index`, `P`): `void`

Set the control point at the specified index.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Index | Number | The index of the control point|
|P | UniPoint | Control point|

#### Returns

`void`

▸ **SetPole**(`Index`, `P`, `Weight`): `void`

Set control points and weights at the specified index.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Index | Number | The index of the control point|
|P | UniPoint | Control point|
|Weight | Number | Weight|

#### Returns

`void`

___

### SetWeight

▸ **SetWeight**(`Index`, `Weight`): `void`

Set the weight at the specified index.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Index | Number | Index of weights|
|Weight | Number | Weight|

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

Apply the given transformation matrix to transform the curve.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|T | [Mx3dGetStrf] (Mx3dGetStrf. md) | Transform matrix|

#### Returns

`void`

___

### Transformed

▸ **Transformed**(`T`): [`Mx3dGeomBSplineCurve`](Mx3dGeomBSplineCurve.md)

Return the transformed new geometric object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|T | [Mx3dGetStrf] (Mx3dGetStrf. md) | Transform the object|

#### Returns

[`Mx3dGeomBSplineCurve`](Mx3dGeomBSplineCurve.md)

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

▸ **TranslatedBy2Points**(`P1`, `P2`): [`Mx3dGeomBSplineCurve`](Mx3dGeomBSplineCurve.md)

Return the new geometric object after translating through two points.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|P1 | [Mx3dGePoint] (Mx3dGePoint. md) | Starting point object|
|P2 | [Mx3dGePoint] (Mx3dGePoint. md) | End point object|

#### Returns

[`Mx3dGeomBSplineCurve`](Mx3dGeomBSplineCurve.md)

New geometric objects.

#### Inherited from

[Mx3dGeomBoundedCurve](Mx3dGeomBoundedCurve.md).[TranslatedBy2Points](Mx3dGeomBoundedCurve.md#translatedby2points)

___

### TranslatedByVec

▸ **TranslatedByVec**(`V`): [`Mx3dGeomBSplineCurve`](Mx3dGeomBSplineCurve.md)

Return the new geometric object after vector translation.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|V | [Mx3dGeVec] (Mx3dGeVec. md) | Vector object|

#### Returns

[`Mx3dGeomBSplineCurve`](Mx3dGeomBSplineCurve.md)

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

Retrieve the weight value at the specified index.
Weight values are used to define the local shape and importance of B-spline curves.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Index | Number | Index of weight values|

#### Returns

`number`

Specify the weight value at the index.

___

### Weights

▸ **Weights**(): `number`[]

Obtain the weight sequence of the curve.

#### Returns

`number`[]

An array of weight sequences.

___

### Wire

▸ **Wire**(): [`Mx3dShapeWire`](Mx3dShapeWire.md)

Obtain the wire of the curve.

#### Returns

[`Mx3dShapeWire`](Mx3dShapeWire.md)

Return the Wire object representing the curve.

___

### DownCast

▸ `Static` **DownCast**(`theObject`): [`Mx3dGeomBSplineCurve`](Mx3dGeomBSplineCurve.md)

Convert parent object to Mx3dGeomBSpline Curve object

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheObject | [Mx3dGeomObject] (Mx3dGeomObject. md) | Parent class object|

#### Returns

[`Mx3dGeomBSplineCurve`](Mx3dGeomBSplineCurve.md)

Mx3dGeomBSpline Curve class object
