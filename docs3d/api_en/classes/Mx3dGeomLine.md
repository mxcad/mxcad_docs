[mxcad_3d API Document](../README. md)/Mx3dGeomLine

# Class: Mx3dGeomLine

The class representing geometric lines inherits from Mx3dGeomCurve.

## Hierarchy

- [`Mx3dGeomCurve`](Mx3dGeomCurve.md)

  ↳ **`Mx3dGeomLine`**

## Table of contents

### Constructors

- [constructor](Mx3dGeomLine.md#constructor)

### Methods

- [Continuity](Mx3dGeomLine.md#continuity)
- [Copy](Mx3dGeomLine.md#copy)
- [D0](Mx3dGeomLine.md#d0)
- [D1](Mx3dGeomLine.md#d1)
- [D2](Mx3dGeomLine.md#d2)
- [D3](Mx3dGeomLine.md#d3)
- [DN](Mx3dGeomLine.md#dn)
- [DynamicType](Mx3dGeomLine.md#dynamictype)
- [Edge](Mx3dGeomLine.md#edge)
- [FirstParameter](Mx3dGeomLine.md#firstparameter)
- [IsCN](Mx3dGeomLine.md#iscn)
- [IsClosed](Mx3dGeomLine.md#isclosed)
- [IsPeriodic](Mx3dGeomLine.md#isperiodic)
- [LastParameter](Mx3dGeomLine.md#lastparameter)
- [MirrorByAxis](Mx3dGeomLine.md#mirrorbyaxis)
- [MirrorByCSYSR](Mx3dGeomLine.md#mirrorbycsysr)
- [MirrorByPoint](Mx3dGeomLine.md#mirrorbypoint)
- [MirroredByAxis](Mx3dGeomLine.md#mirroredbyaxis)
- [MirroredByCSYSR](Mx3dGeomLine.md#mirroredbycsysr)
- [MirroredByPoint](Mx3dGeomLine.md#mirroredbypoint)
- [OffsetCurve](Mx3dGeomLine.md#offsetcurve)
- [ParametricTransformation](Mx3dGeomLine.md#parametrictransformation)
- [Period](Mx3dGeomLine.md#period)
- [Position](Mx3dGeomLine.md#position)
- [Reverse](Mx3dGeomLine.md#reverse)
- [Reversed](Mx3dGeomLine.md#reversed)
- [ReversedParameter](Mx3dGeomLine.md#reversedparameter)
- [Rotate](Mx3dGeomLine.md#rotate)
- [Rotated](Mx3dGeomLine.md#rotated)
- [Scale](Mx3dGeomLine.md#scale)
- [Scaled](Mx3dGeomLine.md#scaled)
- [SetDirection](Mx3dGeomLine.md#setdirection)
- [SetLocation](Mx3dGeomLine.md#setlocation)
- [SetPosition](Mx3dGeomLine.md#setposition)
- [Transform](Mx3dGeomLine.md#transform)
- [Transformed](Mx3dGeomLine.md#transformed)
- [TransformedParameter](Mx3dGeomLine.md#transformedparameter)
- [TranslateBy2Points](Mx3dGeomLine.md#translateby2points)
- [TranslateByVec](Mx3dGeomLine.md#translatebyvec)
- [TranslatedBy2Points](Mx3dGeomLine.md#translatedby2points)
- [TranslatedByVec](Mx3dGeomLine.md#translatedbyvec)
- [Value](Mx3dGeomLine.md#value)
- [DownCast](Mx3dGeomLine.md#downcast)

## Constructors

### constructor

• **new Mx3dGeomLine**(`A1`)

Constructor that accepts an axis as a parameter.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|A1 | [Mx3dGeAxis] (Mx3dGeAxis. md) | Axis object|

#### Overrides

[Mx3dGeomCurve](Mx3dGeomCurve.md).[constructor](Mx3dGeomCurve.md#constructor)

• **new Mx3dGeomLine**(`P`, `V`)

Constructor that accepts a point and a direction as parameters.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|P | [Mx3dGePoint] (Mx3dGePoint. md) | Point object|
|V | [Mx3dGeDir] (Mx3dGeDir. md) | Directional object|

#### Overrides

Mx3dGeomCurve.constructor

## Methods

### Continuity

▸ **Continuity**(): [`MxGAShapeEnum`](../enums/MdGe.MxGAShapeEnum.md)

Obtain the continuity of a straight line.

#### Returns

[`MxGAShapeEnum`](../enums/MdGe.MxGAShapeEnum.md)

Continuity enumeration values.

___

### Copy

▸ **Copy**(): [`Mx3dGeomObject`](Mx3dGeomObject.md)

Copy the line object.

#### Returns

[`Mx3dGeomObject`](Mx3dGeomObject.md)

Copy the line object.

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

[Mx3dGeomCurve](Mx3dGeomCurve.md).[DynamicType](Mx3dGeomCurve.md#dynamictype)

___

### Edge

▸ **Edge**(`p1`, `p2`): [`Mx3dShapeEdge`](Mx3dShapeEdge.md)

Get the edge shape object of a straight line.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|P1 | Number | The first parameter|
|P2 | number | Second parameter|

#### Returns

[`Mx3dShapeEdge`](Mx3dShapeEdge.md)

The edge shape object of a straight line.

___

### FirstParameter

▸ **FirstParameter**(): `number`

Get the first parameter of the line.

#### Returns

`number`

The first parameter.

___

### IsCN

▸ **IsCN**(`N`): `boolean`

Check if the straight line is C ^ N continuous.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|N | number | order|

#### Returns

`boolean`

If the line is C ^ N continuous, return true; Otherwise, return false.

___

### IsClosed

▸ **IsClosed**(): `boolean`

Check if the straight line is closed.

#### Returns

`boolean`

If the line is closed, return true; Otherwise, return false.

___

### IsPeriodic

▸ **IsPeriodic**(): `boolean`

Check if the straight line is periodic.

#### Returns

`boolean`

If the line is periodic, return true; Otherwise, return false.

___

### LastParameter

▸ **LastParameter**(): `number`

Get the last parameter of the line.

#### Returns

`number`

The last parameter.

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

▸ **MirroredByAxis**(`A1`): [`Mx3dGeomLine`](Mx3dGeomLine.md)

Return the new geometric object transformed through axis mirroring.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|A1 | [Mx3dGeAxis] (Mx3dGeAxis. md) | Axis object|

#### Returns

[`Mx3dGeomLine`](Mx3dGeomLine.md)

New geometric objects.

#### Inherited from

[Mx3dGeomCurve](Mx3dGeomCurve.md).[MirroredByAxis](Mx3dGeomCurve.md#mirroredbyaxis)

___

### MirroredByCSYSR

▸ **MirroredByCSYSR**(`A2`): [`Mx3dGeomLine`](Mx3dGeomLine.md)

Return the new geometric object after mirror transformation through the right-handed coordinate system.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|A2 | [Mx3dGeCSYSR] (Mx3dGeCSYSR. md) | Right hand coordinate system object|

#### Returns

[`Mx3dGeomLine`](Mx3dGeomLine.md)

New geometric objects.

#### Inherited from

[Mx3dGeomCurve](Mx3dGeomCurve.md).[MirroredByCSYSR](Mx3dGeomCurve.md#mirroredbycsysr)

___

### MirroredByPoint

▸ **MirroredByPoint**(`P`): [`Mx3dGeomLine`](Mx3dGeomLine.md)

Return the new geometric object after point mirror transformation.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|P | [Mx3dGePoint] (Mx3dGePoint. md) | Point object|

#### Returns

[`Mx3dGeomLine`](Mx3dGeomLine.md)

New geometric objects.

#### Inherited from

[Mx3dGeomCurve](Mx3dGeomCurve.md).[MirroredByPoint](Mx3dGeomCurve.md#mirroredbypoint)

___

### OffsetCurve

▸ **OffsetCurve**(`Offset`, `V`, `isNotCheckC0`): [`Mx3dShapeEdge`](Mx3dShapeEdge.md)

Obtain the offset curve of the straight line.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Offset | number | offset value|
|V | [Mx3dGeDir] (Mx3dGeDir. md) | Direction vector, perpendicular to the offset direction|
|IsNotCheckC0 | boolean | Do not check C0 continuity|

#### Returns

[`Mx3dShapeEdge`](Mx3dShapeEdge.md)

The offset curve of a straight line.

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

[Mx3dGeomCurve](Mx3dGeomCurve.md).[Period](Mx3dGeomCurve.md#period)

___

### Position

▸ **Position**(): [`Mx3dGeAxis`](Mx3dGeAxis.md)

Obtain the position of the straight line.

#### Returns

[`Mx3dGeAxis`](Mx3dGeAxis.md)

Axis object.

___

### Reverse

▸ **Reverse**(): `void`

Reverse the direction of a straight line.

#### Returns

`void`

___

### Reversed

▸ **Reversed**(): [`Mx3dGeomLine`](Mx3dGeomLine.md)

Return the new geometric curve object in reverse.

#### Returns

[`Mx3dGeomLine`](Mx3dGeomLine.md)

New geometric curve object.

#### Inherited from

[Mx3dGeomCurve](Mx3dGeomCurve.md).[Reversed](Mx3dGeomCurve.md#reversed)

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

[Mx3dGeomCurve](Mx3dGeomCurve.md).[Rotate](Mx3dGeomCurve.md#rotate)

___

### Rotated

▸ **Rotated**(`A1`, `Ang`): [`Mx3dGeomLine`](Mx3dGeomLine.md)

Return the rotated new geometric object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|A1 | [Mx3dGeAxis] (Mx3dGeAxis. md) | Axis object|
|Ang | number | Rotation angle|

#### Returns

[`Mx3dGeomLine`](Mx3dGeomLine.md)

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

▸ **Scaled**(`P`, `S`): [`Mx3dGeomLine`](Mx3dGeomLine.md)

Return the scaled new geometric object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|P | [Mx3dGePoint] (Mx3dGePoint. md) | Point object|
|S | number | scaling ratio|

#### Returns

[`Mx3dGeomLine`](Mx3dGeomLine.md)

New geometric objects.

#### Inherited from

[Mx3dGeomCurve](Mx3dGeomCurve.md).[Scaled](Mx3dGeomCurve.md#scaled)

___

### SetDirection

▸ **SetDirection**(`V`): `void`

Set the direction of the line.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|V | [Mx3dGeDir] (Mx3dGeDir. md) | Directional object|

#### Returns

`void`

___

### SetLocation

▸ **SetLocation**(`P`): `void`

Set the position of the line.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|P | [Mx3dGePoint] (Mx3dGePoint. md) | Point object|

#### Returns

`void`

___

### SetPosition

▸ **SetPosition**(`A1`): `void`

Set the position of the line.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|A1 | [Mx3dGeAxis] (Mx3dGeAxis. md) | Axis object|

#### Returns

`void`

___

### Transform

▸ **Transform**(`T`): `void`

Transform the straight line.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|T | [Mx3dGetStrf] (Mx3dGetStrf. md) | Transform the object|

#### Returns

`void`

___

### Transformed

▸ **Transformed**(`T`): [`Mx3dGeomLine`](Mx3dGeomLine.md)

Return the transformed new geometric object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|T | [Mx3dGetStrf] (Mx3dGetStrf. md) | Transform the object|

#### Returns

[`Mx3dGeomLine`](Mx3dGeomLine.md)

New geometric objects.

#### Inherited from

[Mx3dGeomCurve](Mx3dGeomCurve.md).[Transformed](Mx3dGeomCurve.md#transformed)

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

▸ **TranslatedBy2Points**(`P1`, `P2`): [`Mx3dGeomLine`](Mx3dGeomLine.md)

Return the new geometric object after translating through two points.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|P1 | [Mx3dGePoint] (Mx3dGePoint. md) | Starting point object|
|P2 | [Mx3dGePoint] (Mx3dGePoint. md) | End point object|

#### Returns

[`Mx3dGeomLine`](Mx3dGeomLine.md)

New geometric objects.

#### Inherited from

[Mx3dGeomCurve](Mx3dGeomCurve.md).[TranslatedBy2Points](Mx3dGeomCurve.md#translatedby2points)

___

### TranslatedByVec

▸ **TranslatedByVec**(`V`): [`Mx3dGeomLine`](Mx3dGeomLine.md)

Return the new geometric object after vector translation.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|V | [Mx3dGeVec] (Mx3dGeVec. md) | Vector object|

#### Returns

[`Mx3dGeomLine`](Mx3dGeomLine.md)

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

### DownCast

▸ `Static` **DownCast**(`theObject`): [`Mx3dGeomLine`](Mx3dGeomLine.md)

Convert parent object to Mx3dGeomLine class object

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheObject | [Mx3dGeomObject] (Mx3dGeomObject. md) | Parent class object|

#### Returns

[`Mx3dGeomLine`](Mx3dGeomLine.md)

Mx3dGeomLine class object
