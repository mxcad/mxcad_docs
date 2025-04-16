[mxcad_3d API Document](../README. md)/Mx3dGeomEclipse

# Class: Mx3dGeomEllipse

A class representing geometric ellipses with parameters, inherited from Mx3dGeomConic.

## Hierarchy

- [`Mx3dGeomConic`](Mx3dGeomConic.md)

  ↳ **`Mx3dGeomEllipse`**

## Table of contents

### Constructors

- [constructor](Mx3dGeomEllipse.md#constructor)

### Methods

- [Axis](Mx3dGeomEllipse.md#axis)
- [Continuity](Mx3dGeomEllipse.md#continuity)
- [Copy](Mx3dGeomEllipse.md#copy)
- [D0](Mx3dGeomEllipse.md#d0)
- [D1](Mx3dGeomEllipse.md#d1)
- [D2](Mx3dGeomEllipse.md#d2)
- [D3](Mx3dGeomEllipse.md#d3)
- [DN](Mx3dGeomEllipse.md#dn)
- [Directrix1](Mx3dGeomEllipse.md#directrix1)
- [Directrix2](Mx3dGeomEllipse.md#directrix2)
- [DynamicType](Mx3dGeomEllipse.md#dynamictype)
- [Eccentricity](Mx3dGeomEllipse.md#eccentricity)
- [Edge](Mx3dGeomEllipse.md#edge)
- [FirstParameter](Mx3dGeomEllipse.md#firstparameter)
- [Focal](Mx3dGeomEllipse.md#focal)
- [Focus1](Mx3dGeomEllipse.md#focus1)
- [Focus2](Mx3dGeomEllipse.md#focus2)
- [IsCN](Mx3dGeomEllipse.md#iscn)
- [IsClosed](Mx3dGeomEllipse.md#isclosed)
- [IsPeriodic](Mx3dGeomEllipse.md#isperiodic)
- [LastParameter](Mx3dGeomEllipse.md#lastparameter)
- [Location](Mx3dGeomEllipse.md#location)
- [MajorRadius](Mx3dGeomEllipse.md#majorradius)
- [MinorRadius](Mx3dGeomEllipse.md#minorradius)
- [MirrorByAxis](Mx3dGeomEllipse.md#mirrorbyaxis)
- [MirrorByCSYSR](Mx3dGeomEllipse.md#mirrorbycsysr)
- [MirrorByPoint](Mx3dGeomEllipse.md#mirrorbypoint)
- [MirroredByAxis](Mx3dGeomEllipse.md#mirroredbyaxis)
- [MirroredByCSYSR](Mx3dGeomEllipse.md#mirroredbycsysr)
- [MirroredByPoint](Mx3dGeomEllipse.md#mirroredbypoint)
- [OffsetCurve](Mx3dGeomEllipse.md#offsetcurve)
- [Parameter](Mx3dGeomEllipse.md#parameter)
- [Period](Mx3dGeomEllipse.md#period)
- [Position](Mx3dGeomEllipse.md#position)
- [Reverse](Mx3dGeomEllipse.md#reverse)
- [Reversed](Mx3dGeomEllipse.md#reversed)
- [ReversedParameter](Mx3dGeomEllipse.md#reversedparameter)
- [Rotate](Mx3dGeomEllipse.md#rotate)
- [Rotated](Mx3dGeomEllipse.md#rotated)
- [Scale](Mx3dGeomEllipse.md#scale)
- [Scaled](Mx3dGeomEllipse.md#scaled)
- [SetAxis](Mx3dGeomEllipse.md#setaxis)
- [SetLocation](Mx3dGeomEllipse.md#setlocation)
- [SetMajorRadius](Mx3dGeomEllipse.md#setmajorradius)
- [SetMinorRadius](Mx3dGeomEllipse.md#setminorradius)
- [SetPosition](Mx3dGeomEllipse.md#setposition)
- [Transform](Mx3dGeomEllipse.md#transform)
- [Transformed](Mx3dGeomEllipse.md#transformed)
- [TranslateBy2Points](Mx3dGeomEllipse.md#translateby2points)
- [TranslateByVec](Mx3dGeomEllipse.md#translatebyvec)
- [TranslatedBy2Points](Mx3dGeomEllipse.md#translatedby2points)
- [TranslatedByVec](Mx3dGeomEllipse.md#translatedbyvec)
- [Value](Mx3dGeomEllipse.md#value)
- [Wire](Mx3dGeomEllipse.md#wire)
- [XAxis](Mx3dGeomEllipse.md#xaxis)
- [YAxis](Mx3dGeomEllipse.md#yaxis)
- [DownCast](Mx3dGeomEllipse.md#downcast)

## Constructors

### constructor

• **new Mx3dGeomEllipse**(`A2`, `MajorRadius`, `MinorRadius`)

Constructor that accepts a coordinate system, major axis radius, and minor axis radius as parameters.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|A2 | [Mx3dGeCSYSR] (Mx3dGeCSYSR. md) | Coordinate system object|
|MajorRadius | number | major axis radius|
|MinorRadius | number | short axis radius|

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

Copy an elliptical object.

#### Returns

[`Mx3dGeomObject`](Mx3dGeomObject.md)

Copy the elliptical object.

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

### Directrix1

▸ **Directrix1**(): [`Mx3dGeAxis`](Mx3dGeAxis.md)

Obtain the first guide line.

#### Returns

[`Mx3dGeAxis`](Mx3dGeAxis.md)

Alignment object.

___

### Directrix2

▸ **Directrix2**(): [`Mx3dGeAxis`](Mx3dGeAxis.md)

Obtain the second guideline.

#### Returns

[`Mx3dGeAxis`](Mx3dGeAxis.md)

Alignment object.

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

Retrieve the edge shape object of an ellipse.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|P1 | Number | The first parameter|
|P2 | number | Second parameter|

#### Returns

[`Mx3dShapeEdge`](Mx3dShapeEdge.md)

Elliptical edge shaped object.

___

### FirstParameter

▸ **FirstParameter**(): `number`

Get the first parameter of the ellipse.

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

### Focus1

▸ **Focus1**(): [`Mx3dGePoint`](Mx3dGePoint.md)

Get the first focus.

#### Returns

[`Mx3dGePoint`](Mx3dGePoint.md)

The first focal object.

___

### Focus2

▸ **Focus2**(): [`Mx3dGePoint`](Mx3dGePoint.md)

Get the second focus.

#### Returns

[`Mx3dGePoint`](Mx3dGePoint.md)

The second focal object.

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

Check if the ellipse is closed.

#### Returns

`boolean`

If the ellipse is closed, return true; Otherwise, return false.

___

### IsPeriodic

▸ **IsPeriodic**(): `boolean`

Check if the ellipse is periodic.

#### Returns

`boolean`

If the ellipse is periodic, return true; Otherwise, return false.

___

### LastParameter

▸ **LastParameter**(): `number`

Get the last parameter of the ellipse.

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

### MajorRadius

▸ **MajorRadius**(): `number`

Obtain the long axis radius.

#### Returns

`number`

Long axis radius value.

___

### MinorRadius

▸ **MinorRadius**(): `number`

Obtain the short axis radius.

#### Returns

`number`

Short axis radius value.

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

▸ **MirroredByAxis**(`A1`): [`Mx3dGeomEllipse`](Mx3dGeomEllipse.md)

Return the new geometric object transformed through axis mirroring.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|A1 | [Mx3dGeAxis] (Mx3dGeAxis. md) | Axis object|

#### Returns

[`Mx3dGeomEllipse`](Mx3dGeomEllipse.md)

New geometric objects.

#### Inherited from

[Mx3dGeomConic](Mx3dGeomConic.md).[MirroredByAxis](Mx3dGeomConic.md#mirroredbyaxis)

___

### MirroredByCSYSR

▸ **MirroredByCSYSR**(`A2`): [`Mx3dGeomEllipse`](Mx3dGeomEllipse.md)

Return the new geometric object after mirror transformation through the right-handed coordinate system.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|A2 | [Mx3dGeCSYSR] (Mx3dGeCSYSR. md) | Right hand coordinate system object|

#### Returns

[`Mx3dGeomEllipse`](Mx3dGeomEllipse.md)

New geometric objects.

#### Inherited from

[Mx3dGeomConic](Mx3dGeomConic.md).[MirroredByCSYSR](Mx3dGeomConic.md#mirroredbycsysr)

___

### MirroredByPoint

▸ **MirroredByPoint**(`P`): [`Mx3dGeomEllipse`](Mx3dGeomEllipse.md)

Return the new geometric object after point mirror transformation.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|P | [Mx3dGePoint] (Mx3dGePoint. md) | Point object|

#### Returns

[`Mx3dGeomEllipse`](Mx3dGeomEllipse.md)

New geometric objects.

#### Inherited from

[Mx3dGeomConic](Mx3dGeomConic.md).[MirroredByPoint](Mx3dGeomConic.md#mirroredbypoint)

___

### OffsetCurve

▸ **OffsetCurve**(`Offset`, `V`, `isNotCheckC0`): [`Mx3dShapeEdge`](Mx3dShapeEdge.md)

Obtain the offset curve of the ellipse.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Offset | number | offset value|
|V | [Mx3dGeDir] (Mx3dGeDir. md) | Direction vector, perpendicular to the offset direction|
|IsNotCheckC0 | boolean | Do not check C0 continuity|

#### Returns

[`Mx3dShapeEdge`](Mx3dShapeEdge.md)

The offset curve of an ellipse.

___

### Parameter

▸ **Parameter**(): `number`

Get parameters.

#### Returns

`number`

Parameter values.

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

▸ **Reversed**(): [`Mx3dGeomEllipse`](Mx3dGeomEllipse.md)

Return the new geometric curve object in reverse.

#### Returns

[`Mx3dGeomEllipse`](Mx3dGeomEllipse.md)

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

▸ **Rotated**(`A1`, `Ang`): [`Mx3dGeomEllipse`](Mx3dGeomEllipse.md)

Return the rotated new geometric object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|A1 | [Mx3dGeAxis] (Mx3dGeAxis. md) | Axis object|
|Ang | number | Rotation angle|

#### Returns

[`Mx3dGeomEllipse`](Mx3dGeomEllipse.md)

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

▸ **Scaled**(`P`, `S`): [`Mx3dGeomEllipse`](Mx3dGeomEllipse.md)

Return the scaled new geometric object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|P | [Mx3dGePoint] (Mx3dGePoint. md) | Point object|
|S | number | scaling ratio|

#### Returns

[`Mx3dGeomEllipse`](Mx3dGeomEllipse.md)

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

### SetMajorRadius

▸ **SetMajorRadius**(`MajorRadius`): `void`

Set the long axis radius.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|MajorRadius | number | major axis radius|

#### Returns

`void`

___

### SetMinorRadius

▸ **SetMinorRadius**(`MinorRadius`): `void`

Set the short axis radius.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|MinorRadius | number | short axis radius|

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

#### Inherited from

[Mx3dGeomConic](Mx3dGeomConic.md).[SetPosition](Mx3dGeomConic.md#setposition)

___

### Transform

▸ **Transform**(`T`): `void`

Transform the ellipse.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|T | [Mx3dGetStrf] (Mx3dGetStrf. md) | Transform the object|

#### Returns

`void`

___

### Transformed

▸ **Transformed**(`T`): [`Mx3dGeomEllipse`](Mx3dGeomEllipse.md)

Return the transformed new geometric object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|T | [Mx3dGetStrf] (Mx3dGetStrf. md) | Transform the object|

#### Returns

[`Mx3dGeomEllipse`](Mx3dGeomEllipse.md)

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

▸ **TranslatedBy2Points**(`P1`, `P2`): [`Mx3dGeomEllipse`](Mx3dGeomEllipse.md)

Return the new geometric object after translating through two points.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|P1 | [Mx3dGePoint] (Mx3dGePoint. md) | Starting point object|
|P2 | [Mx3dGePoint] (Mx3dGePoint. md) | End point object|

#### Returns

[`Mx3dGeomEllipse`](Mx3dGeomEllipse.md)

New geometric objects.

#### Inherited from

[Mx3dGeomConic](Mx3dGeomConic.md).[TranslatedBy2Points](Mx3dGeomConic.md#translatedby2points)

___

### TranslatedByVec

▸ **TranslatedByVec**(`V`): [`Mx3dGeomEllipse`](Mx3dGeomEllipse.md)

Return the new geometric object after vector translation.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|V | [Mx3dGeVec] (Mx3dGeVec. md) | Vector object|

#### Returns

[`Mx3dGeomEllipse`](Mx3dGeomEllipse.md)

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

Retrieve an elliptical wire shaped object.

#### Returns

[`Mx3dShapeWire`](Mx3dShapeWire.md)

Elliptical wire shaped object.

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

▸ `Static` **DownCast**(`theObject`): [`Mx3dGeomEllipse`](Mx3dGeomEllipse.md)

Convert parent class object to Mx3dGeomEllipse class object

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheObject | [Mx3dGeomObject] (Mx3dGeomObject. md) | Parent class object|

#### Returns

[`Mx3dGeomEllipse`](Mx3dGeomEllipse.md)

Mx3dGeomEllipse class object
