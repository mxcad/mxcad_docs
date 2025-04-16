[mxcad_3d API Document](../README. md)/Mx3dGeomParabola

# Class: Mx3dGeomParabola

The class representing geometric quadratic curves (conic sections) inherits from Mx3dGeomCurve.

## Hierarchy

- [`Mx3dGeomConic`](Mx3dGeomConic.md)

  ↳ **`Mx3dGeomParabola`**

## Table of contents

### Constructors

- [constructor](Mx3dGeomParabola.md#constructor)

### Methods

- [Axis](Mx3dGeomParabola.md#axis)
- [Continuity](Mx3dGeomParabola.md#continuity)
- [Copy](Mx3dGeomParabola.md#copy)
- [D0](Mx3dGeomParabola.md#d0)
- [D1](Mx3dGeomParabola.md#d1)
- [D2](Mx3dGeomParabola.md#d2)
- [D3](Mx3dGeomParabola.md#d3)
- [DN](Mx3dGeomParabola.md#dn)
- [Directrix](Mx3dGeomParabola.md#directrix)
- [DynamicType](Mx3dGeomParabola.md#dynamictype)
- [Eccentricity](Mx3dGeomParabola.md#eccentricity)
- [Edge](Mx3dGeomParabola.md#edge)
- [FirstParameter](Mx3dGeomParabola.md#firstparameter)
- [Focal](Mx3dGeomParabola.md#focal)
- [Focus](Mx3dGeomParabola.md#focus)
- [IsCN](Mx3dGeomParabola.md#iscn)
- [IsClosed](Mx3dGeomParabola.md#isclosed)
- [IsPeriodic](Mx3dGeomParabola.md#isperiodic)
- [LastParameter](Mx3dGeomParabola.md#lastparameter)
- [Location](Mx3dGeomParabola.md#location)
- [MirrorByAxis](Mx3dGeomParabola.md#mirrorbyaxis)
- [MirrorByCSYSR](Mx3dGeomParabola.md#mirrorbycsysr)
- [MirrorByPoint](Mx3dGeomParabola.md#mirrorbypoint)
- [MirroredByAxis](Mx3dGeomParabola.md#mirroredbyaxis)
- [MirroredByCSYSR](Mx3dGeomParabola.md#mirroredbycsysr)
- [MirroredByPoint](Mx3dGeomParabola.md#mirroredbypoint)
- [OffsetCurve](Mx3dGeomParabola.md#offsetcurve)
- [Parameter](Mx3dGeomParabola.md#parameter)
- [ParametricTransformation](Mx3dGeomParabola.md#parametrictransformation)
- [Period](Mx3dGeomParabola.md#period)
- [Position](Mx3dGeomParabola.md#position)
- [Reverse](Mx3dGeomParabola.md#reverse)
- [Reversed](Mx3dGeomParabola.md#reversed)
- [ReversedParameter](Mx3dGeomParabola.md#reversedparameter)
- [Rotate](Mx3dGeomParabola.md#rotate)
- [Rotated](Mx3dGeomParabola.md#rotated)
- [Scale](Mx3dGeomParabola.md#scale)
- [Scaled](Mx3dGeomParabola.md#scaled)
- [SetAxis](Mx3dGeomParabola.md#setaxis)
- [SetFocal](Mx3dGeomParabola.md#setfocal)
- [SetLocation](Mx3dGeomParabola.md#setlocation)
- [SetPosition](Mx3dGeomParabola.md#setposition)
- [Transform](Mx3dGeomParabola.md#transform)
- [Transformed](Mx3dGeomParabola.md#transformed)
- [TransformedParameter](Mx3dGeomParabola.md#transformedparameter)
- [TranslateBy2Points](Mx3dGeomParabola.md#translateby2points)
- [TranslateByVec](Mx3dGeomParabola.md#translatebyvec)
- [TranslatedBy2Points](Mx3dGeomParabola.md#translatedby2points)
- [TranslatedByVec](Mx3dGeomParabola.md#translatedbyvec)
- [Value](Mx3dGeomParabola.md#value)
- [XAxis](Mx3dGeomParabola.md#xaxis)
- [YAxis](Mx3dGeomParabola.md#yaxis)
- [DownCast](Mx3dGeomParabola.md#downcast)

## Constructors

### constructor

• **new Mx3dGeomParabola**(`A2`, `Focal`)

Constructor that accepts a coordinate system and focal length as parameters.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|A2 | [Mx3dGeCSYSR] (Mx3dGeCSYSR. md) | Coordinate system object|
|Focal length | number | focal length|

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

Copy the parabolic object.

#### Returns

[`Mx3dGeomObject`](Mx3dGeomObject.md)

Copy the parabolic object.

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

### Directrix

▸ **Directrix**(): [`Mx3dGeAxis`](Mx3dGeAxis.md)

Get the guide line.

#### Returns

[`Mx3dGeAxis`](Mx3dGeAxis.md)

The axis object where the guide line is located.

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

Obtain eccentricity.

#### Returns

`number`

Centrifuge rate value.

___

### Edge

▸ **Edge**(`p1`, `p2`): [`Mx3dShapeEdge`](Mx3dShapeEdge.md)

Obtain the edges of the parabola.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|P1 | Number | The first parameter|
|P2 | number | Second parameter|

#### Returns

[`Mx3dShapeEdge`](Mx3dShapeEdge.md)

The edge object of a parabola.

___

### FirstParameter

▸ **FirstParameter**(): `number`

Get the first parameter of the parabola.

#### Returns

`number`

The first parameter.

___

### Focal

▸ **Focal**(): `number`

Obtain the focal length.

#### Returns

`number`

Focal length value.

___

### Focus

▸ **Focus**(): [`Mx3dGePoint`](Mx3dGePoint.md)

Get focus.

#### Returns

[`Mx3dGePoint`](Mx3dGePoint.md)

Focus object.

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

Check if the parabola is closed.

#### Returns

`boolean`

If the parabola is closed, return true; Otherwise, return false.

___

### IsPeriodic

▸ **IsPeriodic**(): `boolean`

Check if the parabola is periodic.

#### Returns

`boolean`

If the parabola is periodic, return true; Otherwise, return false.

___

### LastParameter

▸ **LastParameter**(): `number`

Get the last parameter of the parabola.

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

▸ **MirroredByAxis**(`A1`): [`Mx3dGeomParabola`](Mx3dGeomParabola.md)

Return the new geometric object transformed through axis mirroring.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|A1 | [Mx3dGeAxis] (Mx3dGeAxis. md) | Axis object|

#### Returns

[`Mx3dGeomParabola`](Mx3dGeomParabola.md)

New geometric objects.

#### Inherited from

[Mx3dGeomConic](Mx3dGeomConic.md).[MirroredByAxis](Mx3dGeomConic.md#mirroredbyaxis)

___

### MirroredByCSYSR

▸ **MirroredByCSYSR**(`A2`): [`Mx3dGeomParabola`](Mx3dGeomParabola.md)

Return the new geometric object after mirror transformation through the right-handed coordinate system.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|A2 | [Mx3dGeCSYSR] (Mx3dGeCSYSR. md) | Right hand coordinate system object|

#### Returns

[`Mx3dGeomParabola`](Mx3dGeomParabola.md)

New geometric objects.

#### Inherited from

[Mx3dGeomConic](Mx3dGeomConic.md).[MirroredByCSYSR](Mx3dGeomConic.md#mirroredbycsysr)

___

### MirroredByPoint

▸ **MirroredByPoint**(`P`): [`Mx3dGeomParabola`](Mx3dGeomParabola.md)

Return the new geometric object after point mirror transformation.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|P | [Mx3dGePoint] (Mx3dGePoint. md) | Point object|

#### Returns

[`Mx3dGeomParabola`](Mx3dGeomParabola.md)

New geometric objects.

#### Inherited from

[Mx3dGeomConic](Mx3dGeomConic.md).[MirroredByPoint](Mx3dGeomConic.md#mirroredbypoint)

___

### OffsetCurve

▸ **OffsetCurve**(`Offset`, `V`, `isNotCheckC0`): [`Mx3dShapeEdge`](Mx3dShapeEdge.md)

Obtain the offset curve of the parabola.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Offset | Number | Offset|
|V | [Mx3dGeDir] (Mx3dGeDir. md) | Direction vector, perpendicular to the offset direction|
|IsNotCheckC0 | boolean | Check for C0 continuity|

#### Returns

[`Mx3dShapeEdge`](Mx3dShapeEdge.md)

Offset the edge object of the curve.

___

### Parameter

▸ **Parameter**(): `number`

Get parameters.

#### Returns

`number`

Parameter values.

___

### ParametricTransformation

▸ **ParametricTransformation**(`T`): `number`

Obtain parameter transformation.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|T | [Mx3dGetStrf] (Mx3dGetStrf. md) | Transform the object|

#### Returns

`number`

Parameter transformation value.

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

### Reverse

▸ **Reverse**(): `void`

Reverse the direction of the quadratic curve.

#### Returns

`void`

#### Inherited from

[Mx3dGeomConic](Mx3dGeomConic.md).[Reverse](Mx3dGeomConic.md#reverse)

___

### Reversed

▸ **Reversed**(): [`Mx3dGeomParabola`](Mx3dGeomParabola.md)

Return the new geometric curve object in reverse.

#### Returns

[`Mx3dGeomParabola`](Mx3dGeomParabola.md)

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

▸ **Rotated**(`A1`, `Ang`): [`Mx3dGeomParabola`](Mx3dGeomParabola.md)

Return the rotated new geometric object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|A1 | [Mx3dGeAxis] (Mx3dGeAxis. md) | Axis object|
|Ang | number | Rotation angle|

#### Returns

[`Mx3dGeomParabola`](Mx3dGeomParabola.md)

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

▸ **Scaled**(`P`, `S`): [`Mx3dGeomParabola`](Mx3dGeomParabola.md)

Return the scaled new geometric object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|P | [Mx3dGePoint] (Mx3dGePoint. md) | Point object|
|S | number | scaling ratio|

#### Returns

[`Mx3dGeomParabola`](Mx3dGeomParabola.md)

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

### SetFocal

▸ **SetFocal**(`Focal`): `void`

Set the focal length.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Focal length | number | focal length|

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

### Transform

▸ **Transform**(`T`): `void`

Transform the parabola.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|T | [Mx3dGetStrf] (Mx3dGetStrf. md) | Transform the object|

#### Returns

`void`

___

### Transformed

▸ **Transformed**(`T`): [`Mx3dGeomParabola`](Mx3dGeomParabola.md)

Return the transformed new geometric object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|T | [Mx3dGetStrf] (Mx3dGetStrf. md) | Transform the object|

#### Returns

[`Mx3dGeomParabola`](Mx3dGeomParabola.md)

New geometric objects.

#### Inherited from

[Mx3dGeomConic](Mx3dGeomConic.md).[Transformed](Mx3dGeomConic.md#transformed)

___

### TransformedParameter

▸ **TransformedParameter**(`U`, `T`): `number`

Obtain the transformed parameters.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|The parameter value of 'U' | 'number'|
|T | [Mx3dGetStrf] (Mx3dGetStrf. md) | Transform the object|

#### Returns

`number`

The transformed parameter values.

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

▸ **TranslatedBy2Points**(`P1`, `P2`): [`Mx3dGeomParabola`](Mx3dGeomParabola.md)

Return the new geometric object after translating through two points.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|P1 | [Mx3dGePoint] (Mx3dGePoint. md) | Starting point object|
|P2 | [Mx3dGePoint] (Mx3dGePoint. md) | End point object|

#### Returns

[`Mx3dGeomParabola`](Mx3dGeomParabola.md)

New geometric objects.

#### Inherited from

[Mx3dGeomConic](Mx3dGeomConic.md).[TranslatedBy2Points](Mx3dGeomConic.md#translatedby2points)

___

### TranslatedByVec

▸ **TranslatedByVec**(`V`): [`Mx3dGeomParabola`](Mx3dGeomParabola.md)

Return the new geometric object after vector translation.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|V | [Mx3dGeVec] (Mx3dGeVec. md) | Vector object|

#### Returns

[`Mx3dGeomParabola`](Mx3dGeomParabola.md)

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

▸ `Static` **DownCast**(`theObject`): [`Mx3dGeomParabola`](Mx3dGeomParabola.md)

Convert parent object to Mx3dGeomParabola class object

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheObject | [Mx3dGeomObject] (Mx3dGeomObject. md) | Parent class object|

#### Returns

[`Mx3dGeomParabola`](Mx3dGeomParabola.md)

Mx3dGeomParabola class object
