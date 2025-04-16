[mxcad_3d API Document](../README. md)/Mx3dGeomCircle

# Class: Mx3dGeomCircle

The class that represents the parameter geometric circle inherits from Mx3dGeomConic.

## Hierarchy

- [`Mx3dGeomConic`](Mx3dGeomConic.md)

  ↳ **`Mx3dGeomCircle`**

## Table of contents

### Constructors

- [constructor](Mx3dGeomCircle.md#constructor)

### Methods

- [Axis](Mx3dGeomCircle.md#axis)
- [Continuity](Mx3dGeomCircle.md#continuity)
- [Copy](Mx3dGeomCircle.md#copy)
- [D0](Mx3dGeomCircle.md#d0)
- [D1](Mx3dGeomCircle.md#d1)
- [D2](Mx3dGeomCircle.md#d2)
- [D3](Mx3dGeomCircle.md#d3)
- [DN](Mx3dGeomCircle.md#dn)
- [DynamicType](Mx3dGeomCircle.md#dynamictype)
- [Eccentricity](Mx3dGeomCircle.md#eccentricity)
- [Edge](Mx3dGeomCircle.md#edge)
- [FirstParameter](Mx3dGeomCircle.md#firstparameter)
- [IsCN](Mx3dGeomCircle.md#iscn)
- [IsClosed](Mx3dGeomCircle.md#isclosed)
- [IsPeriodic](Mx3dGeomCircle.md#isperiodic)
- [LastParameter](Mx3dGeomCircle.md#lastparameter)
- [Location](Mx3dGeomCircle.md#location)
- [MirrorByAxis](Mx3dGeomCircle.md#mirrorbyaxis)
- [MirrorByCSYSR](Mx3dGeomCircle.md#mirrorbycsysr)
- [MirrorByPoint](Mx3dGeomCircle.md#mirrorbypoint)
- [MirroredByAxis](Mx3dGeomCircle.md#mirroredbyaxis)
- [MirroredByCSYSR](Mx3dGeomCircle.md#mirroredbycsysr)
- [MirroredByPoint](Mx3dGeomCircle.md#mirroredbypoint)
- [OffsetCurve](Mx3dGeomCircle.md#offsetcurve)
- [Period](Mx3dGeomCircle.md#period)
- [Position](Mx3dGeomCircle.md#position)
- [Radius](Mx3dGeomCircle.md#radius)
- [Reverse](Mx3dGeomCircle.md#reverse)
- [Reversed](Mx3dGeomCircle.md#reversed)
- [ReversedParameter](Mx3dGeomCircle.md#reversedparameter)
- [Rotate](Mx3dGeomCircle.md#rotate)
- [Rotated](Mx3dGeomCircle.md#rotated)
- [Scale](Mx3dGeomCircle.md#scale)
- [Scaled](Mx3dGeomCircle.md#scaled)
- [SetAxis](Mx3dGeomCircle.md#setaxis)
- [SetLocation](Mx3dGeomCircle.md#setlocation)
- [SetPosition](Mx3dGeomCircle.md#setposition)
- [SetRadius](Mx3dGeomCircle.md#setradius)
- [Transform](Mx3dGeomCircle.md#transform)
- [Transformed](Mx3dGeomCircle.md#transformed)
- [TranslateBy2Points](Mx3dGeomCircle.md#translateby2points)
- [TranslateByVec](Mx3dGeomCircle.md#translatebyvec)
- [TranslatedBy2Points](Mx3dGeomCircle.md#translatedby2points)
- [TranslatedByVec](Mx3dGeomCircle.md#translatedbyvec)
- [Value](Mx3dGeomCircle.md#value)
- [Wire](Mx3dGeomCircle.md#wire)
- [XAxis](Mx3dGeomCircle.md#xaxis)
- [YAxis](Mx3dGeomCircle.md#yaxis)
- [DownCast](Mx3dGeomCircle.md#downcast)
- [MakeArcOfCircle](Mx3dGeomCircle.md#makearcofcircle)

## Constructors

### constructor

• **new Mx3dGeomCircle**(`theCSYSR`, `theRadius`)

Constructor, accepts coordinate system and radius parameters.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheCSYSR | [Mx3dGeCSYSR] (Mx3dGeCSYSR. md) | Coordinate system object|
|TheRadius | Number | The radius of a circle|

#### Overrides

[Mx3dGeomConic](Mx3dGeomConic.md).[constructor](Mx3dGeomConic.md#constructor)

## Methods

### Axis

▸ **Axis**(): [`Mx3dGeAxis`](Mx3dGeAxis.md)

Obtain the axis of the quadratic curve.

#### Returns

[`Mx3dGeAxis`](Mx3dGeAxis.md)

Axis object.

#### Inherited from

[Mx3dGeomConic](Mx3dGeomConic.md).[Axis](Mx3dGeomConic.md#axis)

___

### Continuity

▸ **Continuity**(): [`MxGAShapeEnum`](../enums/MdGe.MxGAShapeEnum.md)

Obtain the continuity of the quadratic curve.

#### Returns

[`MxGAShapeEnum`](../enums/MdGe.MxGAShapeEnum.md)

Continuity enumeration values.

#### Inherited from

[Mx3dGeomConic](Mx3dGeomConic.md).[Continuity](Mx3dGeomConic.md#continuity)

___

### Copy

▸ **Copy**(): [`Mx3dGeomObject`](Mx3dGeomObject.md)

Copy a circular object.

#### Returns

[`Mx3dGeomObject`](Mx3dGeomObject.md)

The copied circular object.

___

### D0

▸ **D0**(`U`, `P`): `void`

Obtain the point coordinates at parameter U.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|The parameter value of 'U' | 'number'|
|P | [Mx3dGePoint] (Mx3dGePoint. md) | Point object|

#### Returns

`void`

___

### D1

▸ **D1**(`U`, `P`, `V1`): `void`

Obtain the first derivative at parameter U.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|The parameter value of 'U' | 'number'|
|P | [Mx3dGePoint] (Mx3dGePoint. md) | Point object|
|V1 | [Mx3dGeVec] (Mx3dGeVec. md) | First derivative vector|

#### Returns

`void`

___

### D2

▸ **D2**(`U`, `P`, `V1`, `V2`): `void`

Obtain the second derivative at parameter U.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|The parameter value of 'U' | 'number'|
|P | [Mx3dGePoint] (Mx3dGePoint. md) | Point object|
|V1 | [Mx3dGeVec] (Mx3dGeVec. md) | First derivative vector|
|V2 | [Mx3dGeVec] (Mx3dGeVec. md) | Second derivative vector|

#### Returns

`void`

___

### D3

▸ **D3**(`U`, `P`, `V1`, `V2`, `V3`): `void`

Obtain the third derivative at parameter U.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|The parameter value of 'U' | 'number'|
|P | [Mx3dGePoint] (Mx3dGePoint. md) | Point object|
|V1 | [Mx3dGeVec] (Mx3dGeVec. md) | First derivative vector|
|V2 | [Mx3dGeVec] (Mx3dGeVec. md) | Second derivative vector|
|V3 | [Mx3dGeVec] (Mx3dGeVec. md) | Third derivative vector|

#### Returns

`void`

___

### DN

▸ **DN**(`U`, `N`): [`Mx3dGeVec`](Mx3dGeVec.md)

Obtain the Nth derivative at parameter U.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|The parameter value of 'U' | 'number'|
|N | number | order|

#### Returns

[`Mx3dGeVec`](Mx3dGeVec.md)

N-order derivative vector.

___

### DynamicType

▸ **DynamicType**(): `string`

Return the dynamic type of the object.

#### Returns

`string`

A dynamically typed string.

#### Overrides

[Mx3dGeomConic](Mx3dGeomConic.md).[DynamicType](Mx3dGeomConic.md#dynamictype)

___

### Eccentricity

▸ **Eccentricity**(): `number`

Obtain the eccentricity of a circle.

#### Returns

`number`

Centrifuge rate.

___

### Edge

▸ **Edge**(`p1`, `p2`): [`Mx3dShapeEdge`](Mx3dShapeEdge.md)

Obtain the edges of the circle.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|P1 | Number | The first parameter|
|P2 | number | Second parameter|

#### Returns

[`Mx3dShapeEdge`](Mx3dShapeEdge.md)

The edge object of a circle.

___

### FirstParameter

▸ **FirstParameter**(): `number`

Get the first parameter of the circle.

#### Returns

`number`

The first parameter.

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

#### Inherited from

[Mx3dGeomConic](Mx3dGeomConic.md).[IsCN](Mx3dGeomConic.md#iscn)

___

### IsClosed

▸ **IsClosed**(): `boolean`

Check if the circle is closed.

#### Returns

`boolean`

If the circle is closed, return true; Otherwise, return false.

___

### IsPeriodic

▸ **IsPeriodic**(): `boolean`

Check if the circle is periodic.

#### Returns

`boolean`

If the circle is periodic, return true; Otherwise, return false.

___

### LastParameter

▸ **LastParameter**(): `number`

Get the last parameter of the circle.

#### Returns

`number`

The last parameter.

___

### Location

▸ **Location**(): [`Mx3dGePoint`](Mx3dGePoint.md)

Obtain the position of the quadratic curve.

#### Returns

[`Mx3dGePoint`](Mx3dGePoint.md)

Point object.

#### Inherited from

[Mx3dGeomConic](Mx3dGeomConic.md).[Location](Mx3dGeomConic.md#location)

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

[Mx3dGeomConic](Mx3dGeomConic.md).[MirrorByAxis](Mx3dGeomConic.md#mirrorbyaxis)

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

[Mx3dGeomConic](Mx3dGeomConic.md).[MirrorByCSYSR](Mx3dGeomConic.md#mirrorbycsysr)

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

[Mx3dGeomConic](Mx3dGeomConic.md).[MirrorByPoint](Mx3dGeomConic.md#mirrorbypoint)

___

### MirroredByAxis

▸ **MirroredByAxis**(`A1`): [`Mx3dGeomCircle`](Mx3dGeomCircle.md)

Return the new geometric object transformed through axis mirroring.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|A1 | [Mx3dGeAxis] (Mx3dGeAxis. md) | Axis object|

#### Returns

[`Mx3dGeomCircle`](Mx3dGeomCircle.md)

New geometric objects.

#### Inherited from

[Mx3dGeomConic](Mx3dGeomConic.md).[MirroredByAxis](Mx3dGeomConic.md#mirroredbyaxis)

___

### MirroredByCSYSR

▸ **MirroredByCSYSR**(`A2`): [`Mx3dGeomCircle`](Mx3dGeomCircle.md)

Return the new geometric object after mirror transformation through the right-handed coordinate system.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|A2 | [Mx3dGeCSYSR] (Mx3dGeCSYSR. md) | Right hand coordinate system object|

#### Returns

[`Mx3dGeomCircle`](Mx3dGeomCircle.md)

New geometric objects.

#### Inherited from

[Mx3dGeomConic](Mx3dGeomConic.md).[MirroredByCSYSR](Mx3dGeomConic.md#mirroredbycsysr)

___

### MirroredByPoint

▸ **MirroredByPoint**(`P`): [`Mx3dGeomCircle`](Mx3dGeomCircle.md)

Return the new geometric object after point mirror transformation.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|P | [Mx3dGePoint] (Mx3dGePoint. md) | Point object|

#### Returns

[`Mx3dGeomCircle`](Mx3dGeomCircle.md)

New geometric objects.

#### Inherited from

[Mx3dGeomConic](Mx3dGeomConic.md).[MirroredByPoint](Mx3dGeomConic.md#mirroredbypoint)

___

### OffsetCurve

▸ **OffsetCurve**(`Offset`, `V`, `isNotCheckC0`): [`Mx3dShapeEdge`](Mx3dShapeEdge.md)

Obtain the offset curve of the circle.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Offset | number | offset value|
|V | [Mx3dGeDir] (Mx3dGeDir. md) | Direction vector|
|IsNotCheckC0 | boolean | Do not check C0 continuity|

#### Returns

[`Mx3dShapeEdge`](Mx3dShapeEdge.md)

The offset curve of a circle.

___

### Period

▸ **Period**(): `number`

Return the period of the curve.

#### Returns

`number`

The period of the curve.

#### Inherited from

[Mx3dGeomConic](Mx3dGeomConic.md).[Period](Mx3dGeomConic.md#period)

___

### Position

▸ **Position**(): [`Mx3dGeCSYSR`](Mx3dGeCSYSR.md)

Obtain the right-hand coordinate system of the quadratic curve.

#### Returns

[`Mx3dGeCSYSR`](Mx3dGeCSYSR.md)

Right hand coordinate system object.

#### Inherited from

[Mx3dGeomConic](Mx3dGeomConic.md).[Position](Mx3dGeomConic.md#position)

___

### Radius

▸ **Radius**(): `number`

Get the radius of the circle.

#### Returns

`number`

The radius of a circle.

___

### Reverse

▸ **Reverse**(): `void`

Reverse the direction of the quadratic curve.

#### Returns

`void`

#### Inherited from

[Mx3dGeomConic](Mx3dGeomConic.md).[Reverse](Mx3dGeomConic.md#reverse)

___

### Reversed

▸ **Reversed**(): [`Mx3dGeomCircle`](Mx3dGeomCircle.md)

Return the new geometric curve object in reverse.

#### Returns

[`Mx3dGeomCircle`](Mx3dGeomCircle.md)

New geometric curve object.

#### Inherited from

[Mx3dGeomConic](Mx3dGeomConic.md).[Reversed](Mx3dGeomConic.md#reversed)

___

### ReversedParameter

▸ **ReversedParameter**(`U`): `number`

Get reverse parameters.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|The parameter value of 'U' | 'number'|

#### Returns

`number`

Reverse parameter value.

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

[Mx3dGeomConic](Mx3dGeomConic.md).[Rotate](Mx3dGeomConic.md#rotate)

___

### Rotated

▸ **Rotated**(`A1`, `Ang`): [`Mx3dGeomCircle`](Mx3dGeomCircle.md)

Return the rotated new geometric object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|A1 | [Mx3dGeAxis] (Mx3dGeAxis. md) | Axis object|
|Ang | number | Rotation angle|

#### Returns

[`Mx3dGeomCircle`](Mx3dGeomCircle.md)

New geometric objects.

#### Inherited from

[Mx3dGeomConic](Mx3dGeomConic.md).[Rotated](Mx3dGeomConic.md#rotated)

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

[Mx3dGeomConic](Mx3dGeomConic.md).[Scale](Mx3dGeomConic.md#scale)

___

### Scaled

▸ **Scaled**(`P`, `S`): [`Mx3dGeomCircle`](Mx3dGeomCircle.md)

Return the scaled new geometric object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|P | [Mx3dGePoint] (Mx3dGePoint. md) | Point object|
|S | number | scaling ratio|

#### Returns

[`Mx3dGeomCircle`](Mx3dGeomCircle.md)

New geometric objects.

#### Inherited from

[Mx3dGeomConic](Mx3dGeomConic.md).[Scaled](Mx3dGeomConic.md#scaled)

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

#### Inherited from

[Mx3dGeomConic](Mx3dGeomConic.md).[SetAxis](Mx3dGeomConic.md#setaxis)

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

#### Inherited from

[Mx3dGeomConic](Mx3dGeomConic.md).[SetLocation](Mx3dGeomConic.md#setlocation)

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

#### Inherited from

[Mx3dGeomConic](Mx3dGeomConic.md).[SetPosition](Mx3dGeomConic.md#setposition)

___

### SetRadius

▸ **SetRadius**(`R`): `void`

Set the radius of the circle.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|R | number | radius|

#### Returns

`void`

___

### Transform

▸ **Transform**(`T`): `void`

Transform the circle.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|T | [Mx3dGetStrf] (Mx3dGetStrf. md) | Transform the object|

#### Returns

`void`

___

### Transformed

▸ **Transformed**(`T`): [`Mx3dGeomCircle`](Mx3dGeomCircle.md)

Return the transformed new geometric object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|T | [Mx3dGetStrf] (Mx3dGetStrf. md) | Transform the object|

#### Returns

[`Mx3dGeomCircle`](Mx3dGeomCircle.md)

New geometric objects.

#### Inherited from

[Mx3dGeomConic](Mx3dGeomConic.md).[Transformed](Mx3dGeomConic.md#transformed)

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

[Mx3dGeomConic](Mx3dGeomConic.md).[TranslateBy2Points](Mx3dGeomConic.md#translateby2points)

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

[Mx3dGeomConic](Mx3dGeomConic.md).[TranslateByVec](Mx3dGeomConic.md#translatebyvec)

___

### TranslatedBy2Points

▸ **TranslatedBy2Points**(`P1`, `P2`): [`Mx3dGeomCircle`](Mx3dGeomCircle.md)

Return the new geometric object after translating through two points.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|P1 | [Mx3dGePoint] (Mx3dGePoint. md) | Starting point object|
|P2 | [Mx3dGePoint] (Mx3dGePoint. md) | End point object|

#### Returns

[`Mx3dGeomCircle`](Mx3dGeomCircle.md)

New geometric objects.

#### Inherited from

[Mx3dGeomConic](Mx3dGeomConic.md).[TranslatedBy2Points](Mx3dGeomConic.md#translatedby2points)

___

### TranslatedByVec

▸ **TranslatedByVec**(`V`): [`Mx3dGeomCircle`](Mx3dGeomCircle.md)

Return the new geometric object after vector translation.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|V | [Mx3dGeVec] (Mx3dGeVec. md) | Vector object|

#### Returns

[`Mx3dGeomCircle`](Mx3dGeomCircle.md)

New geometric objects.

#### Inherited from

[Mx3dGeomConic](Mx3dGeomConic.md).[TranslatedByVec](Mx3dGeomConic.md#translatedbyvec)

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

[Mx3dGeomConic](Mx3dGeomConic.md).[Value](Mx3dGeomConic.md#value)

___

### Wire

▸ **Wire**(): [`Mx3dShapeWire`](Mx3dShapeWire.md)

Obtain the line of the circle.

#### Returns

[`Mx3dShapeWire`](Mx3dShapeWire.md)

A circular line object.

___

### XAxis

▸ **XAxis**(): [`Mx3dGeAxis`](Mx3dGeAxis.md)

Obtain the X-axis of the quadratic curve.

#### Returns

[`Mx3dGeAxis`](Mx3dGeAxis.md)

X-axis object.

#### Inherited from

[Mx3dGeomConic](Mx3dGeomConic.md).[XAxis](Mx3dGeomConic.md#xaxis)

___

### YAxis

▸ **YAxis**(): [`Mx3dGeAxis`](Mx3dGeAxis.md)

Obtain the Y-axis of the quadratic curve.

#### Returns

[`Mx3dGeAxis`](Mx3dGeAxis.md)

Y-axis object.

#### Inherited from

[Mx3dGeomConic](Mx3dGeomConic.md).[YAxis](Mx3dGeomConic.md#yaxis)

___

### DownCast

▸ `Static` **DownCast**(`theObject`): [`Mx3dGeomCircle`](Mx3dGeomCircle.md)

Convert parent class object to Mx3dGeomCircle class object

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheObject | [Mx3dGeomObject] (Mx3dGeomObject. md) | Parent class object|

#### Returns

[`Mx3dGeomCircle`](Mx3dGeomCircle.md)

Mx3dGeomCircle class object

___

### MakeArcOfCircle

▸ `Static` **MakeArcOfCircle**(`thePt1`, `thePt2`, `thePt3`): [`Mx3dShapeEdge`](Mx3dShapeEdge.md)

Three point drawing arc

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|ThePt1 | UniPoint | First Point|
|ThePt2 | UniPoint | Second Point|
|ThePt3 | UniPoint | Third Point|

#### Returns

[`Mx3dShapeEdge`](Mx3dShapeEdge.md)

Circular arc curve
