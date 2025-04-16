[mxcad_3d API Document](../README. md)/Mx3dGeomConicalSurface

# Class: Mx3dGeomConicalSurface

Represents a conical surface in three-dimensional space.
A conical surface is defined by its vertex half angle, reference radius, and coordinate system.

## Hierarchy

- [`Mx3dGeomElementarySurface`](Mx3dGeomElementarySurface.md)

  ↳ **`Mx3dGeomConicalSurface`**

## Table of contents

### Constructors

- [constructor](Mx3dGeomConicalSurface.md#constructor)

### Methods

- [Apex](Mx3dGeomConicalSurface.md#apex)
- [Axis](Mx3dGeomConicalSurface.md#axis)
- [Bounds](Mx3dGeomConicalSurface.md#bounds)
- [Coefficients](Mx3dGeomConicalSurface.md#coefficients)
- [Continuity](Mx3dGeomConicalSurface.md#continuity)
- [Copy](Mx3dGeomConicalSurface.md#copy)
- [D0](Mx3dGeomConicalSurface.md#d0)
- [D1](Mx3dGeomConicalSurface.md#d1)
- [D2](Mx3dGeomConicalSurface.md#d2)
- [D3](Mx3dGeomConicalSurface.md#d3)
- [DN](Mx3dGeomConicalSurface.md#dn)
- [DynamicType](Mx3dGeomConicalSurface.md#dynamictype)
- [Face](Mx3dGeomConicalSurface.md#face)
- [IsCNu](Mx3dGeomConicalSurface.md#iscnu)
- [IsCNv](Mx3dGeomConicalSurface.md#iscnv)
- [IsUClosed](Mx3dGeomConicalSurface.md#isuclosed)
- [IsUPeriodic](Mx3dGeomConicalSurface.md#isuperiodic)
- [IsVClosed](Mx3dGeomConicalSurface.md#isvclosed)
- [IsVPeriodic](Mx3dGeomConicalSurface.md#isvperiodic)
- [Location](Mx3dGeomConicalSurface.md#location)
- [MirrorByAxis](Mx3dGeomConicalSurface.md#mirrorbyaxis)
- [MirrorByCSYSR](Mx3dGeomConicalSurface.md#mirrorbycsysr)
- [MirrorByPoint](Mx3dGeomConicalSurface.md#mirrorbypoint)
- [MirroredByAxis](Mx3dGeomConicalSurface.md#mirroredbyaxis)
- [MirroredByCSYSR](Mx3dGeomConicalSurface.md#mirroredbycsysr)
- [MirroredByPoint](Mx3dGeomConicalSurface.md#mirroredbypoint)
- [Position](Mx3dGeomConicalSurface.md#position)
- [RefRadius](Mx3dGeomConicalSurface.md#refradius)
- [Rotate](Mx3dGeomConicalSurface.md#rotate)
- [Rotated](Mx3dGeomConicalSurface.md#rotated)
- [Scale](Mx3dGeomConicalSurface.md#scale)
- [Scaled](Mx3dGeomConicalSurface.md#scaled)
- [SemiAngle](Mx3dGeomConicalSurface.md#semiangle)
- [SetAxis](Mx3dGeomConicalSurface.md#setaxis)
- [SetLocation](Mx3dGeomConicalSurface.md#setlocation)
- [SetPosition](Mx3dGeomConicalSurface.md#setposition)
- [SetRadius](Mx3dGeomConicalSurface.md#setradius)
- [SetSemiAngle](Mx3dGeomConicalSurface.md#setsemiangle)
- [Transform](Mx3dGeomConicalSurface.md#transform)
- [TransformParameters](Mx3dGeomConicalSurface.md#transformparameters)
- [Transformed](Mx3dGeomConicalSurface.md#transformed)
- [TranslateBy2Points](Mx3dGeomConicalSurface.md#translateby2points)
- [TranslateByVec](Mx3dGeomConicalSurface.md#translatebyvec)
- [TranslatedBy2Points](Mx3dGeomConicalSurface.md#translatedby2points)
- [TranslatedByVec](Mx3dGeomConicalSurface.md#translatedbyvec)
- [UPeriod](Mx3dGeomConicalSurface.md#uperiod)
- [UReverse](Mx3dGeomConicalSurface.md#ureverse)
- [UReversed](Mx3dGeomConicalSurface.md#ureversed)
- [UReversedParameter](Mx3dGeomConicalSurface.md#ureversedparameter)
- [VPeriod](Mx3dGeomConicalSurface.md#vperiod)
- [VReverse](Mx3dGeomConicalSurface.md#vreverse)
- [VReversed](Mx3dGeomConicalSurface.md#vreversed)
- [VReversedParameter](Mx3dGeomConicalSurface.md#vreversedparameter)
- [Value](Mx3dGeomConicalSurface.md#value)
- [DownCast](Mx3dGeomConicalSurface.md#downcast)

## Constructors

### constructor

• **new Mx3dGeomConicalSurface**(`A3`, `Ang`, `Radius`)

Construct a conical surface with a specified coordinate system, half angle, and radius.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|A3 | [Mx3dGeCSYSR] (Mx3dGeCSYSR. md) | The local coordinate system of a conical surface|
|Ang | number | Half angle of a conical surface. Its absolute value should be within the range of [0, PI/2]|
|Radius | number | The radius of a circle on the reference plane of a conical surface|

#### Overrides

Mx3dGeomElementarySurface.constructor

## Methods

### Apex

▸ **Apex**(): [`Mx3dGePoint`](Mx3dGePoint.md)

Calculate and return the vertices of a cone. The vertex is located on the negative side (positive half angle) or positive side (negative half angle) of the rotation axis of the cone.

#### Returns

[`Mx3dGePoint`](Mx3dGePoint.md)

The vertex of a cone.

___

### Axis

▸ **Axis**(): [`Mx3dGeAxis`](Mx3dGeAxis.md)

Obtain the main axis (Z-axis) of the surface.

#### Returns

[`Mx3dGeAxis`](Mx3dGeAxis.md)

Definition of the main axis on the surface.

#### Inherited from

[Mx3dGeomElementarySurface](Mx3dGeomElementarySurface.md).[Axis](Mx3dGeomElementarySurface.md#axis)

___

### Bounds

▸ **Bounds**(`U1U2V1V2`): `void`

Return the parameter range of the conical surface.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|U1U2V1V2 | [dU1: number, dU2: number, dV1: number, dV2: number] | Parameter range array [dU1, dU2, dV1, dV2]|

#### Returns

`void`

___

### Coefficients

▸ **Coefficients**(`A1A2A3B1B2B3C1C2C3D`): `void`

Return the coefficients of the implicit equation for a conical surface.
Equation form: A1.X^2 + A2.Y^2 + A3.Z^2 + 2*(B1.X.Y + B2.X.Z + B3.Y.Z) + 2*(C1.X + C2.Y + C3.Z) + D = 0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|A1A2A3B1B2B3C1C2C3D | [A1: number, A2: number, A3: number, B1: number, B2: number, B3: number, C1: number, C2: number, C3: number, D: number] | Coefficient array [A1, A2, A3, B1, B2, B3, C1, C2, C3, D]|

#### Returns

`void`

___

### Continuity

▸ **Continuity**(): [`MxGAShapeEnum`](../enums/MdGe.MxGAShapeEnum.md)

Return the global continuity of the surface (MxGAShapeenum).

#### Returns

[`MxGAShapeEnum`](../enums/MdGe.MxGAShapeEnum.md)

The continuity of the surface on a global scale.

#### Inherited from

[Mx3dGeomElementarySurface](Mx3dGeomElementarySurface.md).[Continuity](Mx3dGeomElementarySurface.md#continuity)

___

### Copy

▸ **Copy**(): [`Mx3dGeomObject`](Mx3dGeomObject.md)

Create and return a copy of this conical surface.

#### Returns

[`Mx3dGeomObject`](Mx3dGeomObject.md)

A copy of a conical surface.

___

### D0

▸ **D0**(`U`, `V`, `P`): `void`

Calculate and return the point on the surface at the given parameter (U, V).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|The 'U' | 'number' | U parameter|
|V | number | V parameter|
|P | [Mx3dGePoint] (Mx3dGePoint. md) | Result point|

#### Returns

`void`

___

### D1

▸ **D1**(`U`, `V`, `P`, `D1U`, `D1V`): `void`

Calculate and return the points on the surface at the given parameters (U, V) and their first derivatives in the U and V directions.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|The 'U' | 'number' | U parameter|
|V | number | V parameter|
|P | [Mx3dGePoint] (Mx3dGePoint. md) | Result point|
|D1U | [Mx3dGeVec] (Mx3dGeVec. md) | First derivative in the U direction|
|D1V | [Mx3dGeVec] (Mx3dGeVec. md) | First derivative in the V direction|

#### Returns

`void`

___

### D2

▸ **D2**(`U`, `V`, `P`, `D1U`, `D1V`, `D2U`, `D2V`, `D2UV`): `void`

Calculate and return the points on the surface at the given parameters (U, V) and their first and second derivatives in the U and V directions.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|The 'U' | 'number' | U parameter|
|V | number | V parameter|
|P | [Mx3dGePoint] (Mx3dGePoint. md) | Result point|
|D1U | [Mx3dGeVec] (Mx3dGeVec. md) | First derivative in the U direction|
|D1V | [Mx3dGeVec] (Mx3dGeVec. md) | First derivative in the V direction|
|D2U | [Mx3dGeVec] (Mx3dGeVec. md) | Second derivative in the U direction|
|D2V | [Mx3dGeVec] (Mx3dGeVec. md) | Second derivative in the V direction|
|D2UV | [Mx3dGeVec] (Mx3dGeVec. md) | Mixed derivative in the UV direction|

#### Returns

`void`

___

### D3

▸ **D3**(`U`, `V`, `P`, `D1U`, `D1V`, `D2U`, `D2V`, `D2UV`, `D3U`, `D3V`, `D3UUV`, `D3UVV`): `void`

Calculate and return the points on the surface at the given parameters (U, V) and their first, second, and third derivatives in the U and V directions.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|The 'U' | 'number' | U parameter|
|V | number | V parameter|
|P | [Mx3dGePoint] (Mx3dGePoint. md) | Result point|
|D1U | [Mx3dGeVec] (Mx3dGeVec. md) | First derivative in the U direction|
|D1V | [Mx3dGeVec] (Mx3dGeVec. md) | First derivative in the V direction|
|D2U | [Mx3dGeVec] (Mx3dGeVec. md) | Second derivative in the U direction|
|D2V | [Mx3dGeVec] (Mx3dGeVec. md) | Second derivative in the V direction|
|D2UV | [Mx3dGeVec] (Mx3dGeVec. md) | Mixed derivative in the UV direction|
|D3U | [Mx3dGeVec] (Mx3dGeVec. md) | Third derivative in the U direction|
|D3V | [Mx3dGeVec] (Mx3dGeVec. md) | Third derivative in the V direction|
|D3UUV | [Mx3dGeVec] (Mx3dGeVec. md) | Mixed derivative in the UU direction|
|D3UVV | [Mx3dGeVec] (Mx3dGeVec. md) | Mixed derivative in the UV direction|

#### Returns

`void`

___

### DN

▸ **DN**(`U`, `V`, `Nu`, `Nv`): [`Mx3dGeVec`](Mx3dGeVec.md)

Calculate and return the derivative of the specified order at the given parameter (U, V).

**`Throws`**

If Nu+Nv is less than 1, or Nu or Nv is negative, throw an exception.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|The 'U' | 'number' | U parameter|
|V | number | V parameter|
|Nu | number | derivative order in the U direction|
|Nv | number | derivative order in the V direction|

#### Returns

[`Mx3dGeVec`](Mx3dGeVec.md)

The derivative vector of a specified order.

___

### DynamicType

▸ **DynamicType**(): `string`

Return the dynamic type of the object.

#### Returns

`string`

A dynamically typed string representation.

#### Overrides

[Mx3dGeomElementarySurface](Mx3dGeomElementarySurface.md).[DynamicType](Mx3dGeomElementarySurface.md#dynamictype)

___

### Face

▸ **Face**(`TolDegen`): [`Mx3dShapeFace`](Mx3dShapeFace.md)

Create a face based on a conical surface.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TolDegen | number | Simplify surface tolerance|

#### Returns

[`Mx3dShapeFace`](Mx3dShapeFace.md)

The created face object.

▸ **Face**(`W`, `Inside`): [`Mx3dShapeFace`](Mx3dShapeFace.md)

Create a face based on the given lines and directions.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|W | [Mx3dShapeWire] (Mx3dShapeWire. md) | Given line|
|Inside | boolean | Internal directional marker|

#### Returns

[`Mx3dShapeFace`](Mx3dShapeFace.md)

The created face object.

▸ **Face**(`UMin`, `UMax`, `VMin`, `VMax`, `TolDegen`): [`Mx3dShapeFace`](Mx3dShapeFace.md)

Create a face based on the specified parameter range.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|UMin | number | The minimum value of the U parameter|
|UMax | number | The maximum value of the U parameter|
|The minimum value of the VMin | number | V parameter|
|The maximum value of the VMax | number | V parameter|
|TolDegen | number | Simplify surface tolerance|

#### Returns

[`Mx3dShapeFace`](Mx3dShapeFace.md)

The created face object.

___

### IsCNu

▸ **IsCNu**(`N`): `boolean`

Check if the continuity of the surface in the U parameter direction meets the specified level.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|N | number | The continuity level to be checked|

#### Returns

`boolean`

If the continuity level meets the condition, return true; Otherwise, return false.

#### Inherited from

[Mx3dGeomElementarySurface](Mx3dGeomElementarySurface.md).[IsCNu](Mx3dGeomElementarySurface.md#iscnu)

___

### IsCNv

▸ **IsCNv**(`N`): `boolean`

Check if the continuity of the surface in the V-parameter direction meets the specified level.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|N | number | The continuity level to be checked|

#### Returns

`boolean`

If the continuity level meets the condition, return true; Otherwise, return false.

#### Inherited from

[Mx3dGeomElementarySurface](Mx3dGeomElementarySurface.md).[IsCNv](Mx3dGeomElementarySurface.md#iscnv)

___

### IsUClosed

▸ **IsUClosed**(): `boolean`

Check if the U parameter is closed.

#### Returns

`boolean`

Always return true.

___

### IsUPeriodic

▸ **IsUPeriodic**(): `boolean`

Check if the U parameter is periodic.

#### Returns

`boolean`

Always return true.

___

### IsVClosed

▸ **IsVClosed**(): `boolean`

Check if the V parameter is closed.

#### Returns

`boolean`

Always return false.

___

### IsVPeriodic

▸ **IsVPeriodic**(): `boolean`

Check if the V parameter is periodic.

#### Returns

`boolean`

Always return false.

___

### Location

▸ **Location**(): [`Mx3dGePoint`](Mx3dGePoint.md)

Obtain the position points of the local coordinate system on the surface.

#### Returns

[`Mx3dGePoint`](Mx3dGePoint.md)

Surface location points.

#### Inherited from

[Mx3dGeomElementarySurface](Mx3dGeomElementarySurface.md).[Location](Mx3dGeomElementarySurface.md#location)

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

[Mx3dGeomElementarySurface](Mx3dGeomElementarySurface.md).[MirrorByAxis](Mx3dGeomElementarySurface.md#mirrorbyaxis)

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

[Mx3dGeomElementarySurface](Mx3dGeomElementarySurface.md).[MirrorByCSYSR](Mx3dGeomElementarySurface.md#mirrorbycsysr)

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

[Mx3dGeomElementarySurface](Mx3dGeomElementarySurface.md).[MirrorByPoint](Mx3dGeomElementarySurface.md#mirrorbypoint)

___

### MirroredByAxis

▸ **MirroredByAxis**(`A1`): [`Mx3dGeomConicalSurface`](Mx3dGeomConicalSurface.md)

Return the new geometric object transformed through axis mirroring.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|A1 | [Mx3dGeAxis] (Mx3dGeAxis. md) | Axis object|

#### Returns

[`Mx3dGeomConicalSurface`](Mx3dGeomConicalSurface.md)

New geometric objects.

#### Inherited from

[Mx3dGeomElementarySurface](Mx3dGeomElementarySurface.md).[MirroredByAxis](Mx3dGeomElementarySurface.md#mirroredbyaxis)

___

### MirroredByCSYSR

▸ **MirroredByCSYSR**(`A2`): [`Mx3dGeomConicalSurface`](Mx3dGeomConicalSurface.md)

Return the new geometric object after mirror transformation through the right-handed coordinate system.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|A2 | [Mx3dGeCSYSR] (Mx3dGeCSYSR. md) | Right hand coordinate system object|

#### Returns

[`Mx3dGeomConicalSurface`](Mx3dGeomConicalSurface.md)

New geometric objects.

#### Inherited from

[Mx3dGeomElementarySurface](Mx3dGeomElementarySurface.md).[MirroredByCSYSR](Mx3dGeomElementarySurface.md#mirroredbycsysr)

___

### MirroredByPoint

▸ **MirroredByPoint**(`P`): [`Mx3dGeomConicalSurface`](Mx3dGeomConicalSurface.md)

Return the new geometric object after point mirror transformation.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|P | [Mx3dGePoint] (Mx3dGePoint. md) | Point object|

#### Returns

[`Mx3dGeomConicalSurface`](Mx3dGeomConicalSurface.md)

New geometric objects.

#### Inherited from

[Mx3dGeomElementarySurface](Mx3dGeomElementarySurface.md).[MirroredByPoint](Mx3dGeomElementarySurface.md#mirroredbypoint)

___

### Position

▸ **Position**(): [`Mx3dGeCSYSR`](Mx3dGeCSYSR.md)

Obtain the local coordinate system of the surface.

#### Returns

[`Mx3dGeCSYSR`](Mx3dGeCSYSR.md)

The local coordinate system of the surface.

#### Inherited from

[Mx3dGeomElementarySurface](Mx3dGeomElementarySurface.md).[Position](Mx3dGeomElementarySurface.md#position)

___

### RefRadius

▸ **RefRadius**(): `number`

Return the reference radius of the conical surface.

#### Returns

`number`

Reference radius.

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

[Mx3dGeomElementarySurface](Mx3dGeomElementarySurface.md).[Rotate](Mx3dGeomElementarySurface.md#rotate)

___

### Rotated

▸ **Rotated**(`A1`, `Ang`): [`Mx3dGeomConicalSurface`](Mx3dGeomConicalSurface.md)

Return the rotated new geometric object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|A1 | [Mx3dGeAxis] (Mx3dGeAxis. md) | Axis object|
|Ang | number | Rotation angle|

#### Returns

[`Mx3dGeomConicalSurface`](Mx3dGeomConicalSurface.md)

New geometric objects.

#### Inherited from

[Mx3dGeomElementarySurface](Mx3dGeomElementarySurface.md).[Rotated](Mx3dGeomElementarySurface.md#rotated)

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

[Mx3dGeomElementarySurface](Mx3dGeomElementarySurface.md).[Scale](Mx3dGeomElementarySurface.md#scale)

___

### Scaled

▸ **Scaled**(`P`, `S`): [`Mx3dGeomConicalSurface`](Mx3dGeomConicalSurface.md)

Return the scaled new geometric object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|P | [Mx3dGePoint] (Mx3dGePoint. md) | Point object|
|S | number | scaling ratio|

#### Returns

[`Mx3dGeomConicalSurface`](Mx3dGeomConicalSurface.md)

New geometric objects.

#### Inherited from

[Mx3dGeomElementarySurface](Mx3dGeomElementarySurface.md).[Scaled](Mx3dGeomElementarySurface.md#scaled)

___

### SemiAngle

▸ **SemiAngle**(): `number`

Return the half angle of the cone vertex.

#### Returns

`number`

The half angle of a cone.

___

### SetAxis

▸ **SetAxis**(`theA1`): `void`

Set the main axis (Z-axis) of the surface.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheA1 | [Mx3dGeAxis] (Mx3dGeAxis. md) | Definition of the principal axis of the surface|

#### Returns

`void`

#### Inherited from

[Mx3dGeomElementarySurface](Mx3dGeomElementarySurface.md).[SetAxis](Mx3dGeomElementarySurface.md#setaxis)

___

### SetLocation

▸ **SetLocation**(`theLoc`): `void`

Set the position points of the surface local coordinate system.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheLoc | [Mx3dGePoint] (Mx3dGePoint. md) | New location point|

#### Returns

`void`

#### Inherited from

[Mx3dGeomElementarySurface](Mx3dGeomElementarySurface.md).[SetLocation](Mx3dGeomElementarySurface.md#setlocation)

___

### SetPosition

▸ **SetPosition**(`theAx3`): `void`

Set the local coordinate system of the surface.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheAx3 | [Mx3dGeCSYSR] (Mx3dGeCSYSR. md) | A new coordinate system that includes position and orientation|

#### Returns

`void`

#### Inherited from

[Mx3dGeomElementarySurface](Mx3dGeomElementarySurface.md).[SetPosition](Mx3dGeomElementarySurface.md#setposition)

___

### SetRadius

▸ **SetRadius**(`R`): `void`

Set the radius of the conical surface in the placement plane.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|R | number | New radius. It must be a non negative value|

#### Returns

`void`

___

### SetSemiAngle

▸ **SetSemiAngle**(`Ang`): `void`

Set the half angle of the conical surface.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Ang | number | new half corner. Its absolute value should be [0], Within the scope of PI/2|

#### Returns

`void`

___

### Transform

▸ **Transform**(`T`): `void`

Apply transformations to conical surfaces.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|T | [Mx3dGetStrf] (Mx3dGetStrf. md) | Transform|

#### Returns

`void`

___

### TransformParameters

▸ **TransformParameters**(`UV`, `T`): `void`

Transform parameters.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|UV | [dU: number, dV: number] | Parameter array [dU, dV]|
|T | [Mx3dGetStrf] (Mx3dGetStrf. md) | Transform|

#### Returns

`void`

#### Overrides

[Mx3dGeomElementarySurface](Mx3dGeomElementarySurface.md).[TransformParameters](Mx3dGeomElementarySurface.md#transformparameters)

___

### Transformed

▸ **Transformed**(`T`): [`Mx3dGeomConicalSurface`](Mx3dGeomConicalSurface.md)

Return the transformed new geometric object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|T | [Mx3dGetStrf] (Mx3dGetStrf. md) | Transform the object|

#### Returns

[`Mx3dGeomConicalSurface`](Mx3dGeomConicalSurface.md)

New geometric objects.

#### Inherited from

[Mx3dGeomElementarySurface](Mx3dGeomElementarySurface.md).[Transformed](Mx3dGeomElementarySurface.md#transformed)

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

[Mx3dGeomElementarySurface](Mx3dGeomElementarySurface.md).[TranslateBy2Points](Mx3dGeomElementarySurface.md#translateby2points)

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

[Mx3dGeomElementarySurface](Mx3dGeomElementarySurface.md).[TranslateByVec](Mx3dGeomElementarySurface.md#translatebyvec)

___

### TranslatedBy2Points

▸ **TranslatedBy2Points**(`P1`, `P2`): [`Mx3dGeomConicalSurface`](Mx3dGeomConicalSurface.md)

Return the new geometric object after translating through two points.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|P1 | [Mx3dGePoint] (Mx3dGePoint. md) | Starting point object|
|P2 | [Mx3dGePoint] (Mx3dGePoint. md) | End point object|

#### Returns

[`Mx3dGeomConicalSurface`](Mx3dGeomConicalSurface.md)

New geometric objects.

#### Inherited from

[Mx3dGeomElementarySurface](Mx3dGeomElementarySurface.md).[TranslatedBy2Points](Mx3dGeomElementarySurface.md#translatedby2points)

___

### TranslatedByVec

▸ **TranslatedByVec**(`V`): [`Mx3dGeomConicalSurface`](Mx3dGeomConicalSurface.md)

Return the new geometric object after vector translation.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|V | [Mx3dGeVec] (Mx3dGeVec. md) | Vector object|

#### Returns

[`Mx3dGeomConicalSurface`](Mx3dGeomConicalSurface.md)

New geometric objects.

#### Inherited from

[Mx3dGeomElementarySurface](Mx3dGeomElementarySurface.md).[TranslatedByVec](Mx3dGeomElementarySurface.md#translatedbyvec)

___

### UPeriod

▸ **UPeriod**(): `number`

Return the period of the surface in the U direction.

#### Returns

`number`

The period of the surface in the U direction.

#### Inherited from

[Mx3dGeomElementarySurface](Mx3dGeomElementarySurface.md).[UPeriod](Mx3dGeomElementarySurface.md#uperiod)

___

### UReverse

▸ **UReverse**(): `void`

Reverse the parameterization direction of the surface in the U parameter direction.

#### Returns

`void`

#### Inherited from

[Mx3dGeomElementarySurface](Mx3dGeomElementarySurface.md).[UReverse](Mx3dGeomElementarySurface.md#ureverse)

___

### UReversed

▸ **UReversed**(): [`Mx3dGeomConicalSurface`](Mx3dGeomConicalSurface.md)

Parameterization of reversing the U direction.

#### Returns

[`Mx3dGeomConicalSurface`](Mx3dGeomConicalSurface.md)

Return the current object to implement a chain call.

#### Inherited from

[Mx3dGeomElementarySurface](Mx3dGeomElementarySurface.md).[UReversed](Mx3dGeomElementarySurface.md#ureversed)

___

### UReversedParameter

▸ **UReversedParameter**(`U`): `number`

Return the inverted U parameter.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|U | number | Original U parameter|

#### Returns

`number`

The inverted U parameter.

___

### VPeriod

▸ **VPeriod**(): `number`

Return the period of the surface in the V direction.

#### Returns

`number`

The period of the surface in the V direction.

#### Inherited from

[Mx3dGeomElementarySurface](Mx3dGeomElementarySurface.md).[VPeriod](Mx3dGeomElementarySurface.md#vperiod)

___

### VReverse

▸ **VReverse**(): `void`

Reverse the direction of the V parameter.

#### Returns

`void`

#### Overrides

[Mx3dGeomElementarySurface](Mx3dGeomElementarySurface.md).[VReverse](Mx3dGeomElementarySurface.md#vreverse)

___

### VReversed

▸ **VReversed**(): [`Mx3dGeomConicalSurface`](Mx3dGeomConicalSurface.md)

Parameterization of reversing the V direction.

#### Returns

[`Mx3dGeomConicalSurface`](Mx3dGeomConicalSurface.md)

Return the current object to implement a chain call.

#### Inherited from

[Mx3dGeomElementarySurface](Mx3dGeomElementarySurface.md).[VReversed](Mx3dGeomElementarySurface.md#vreversed)

___

### VReversedParameter

▸ **VReversedParameter**(`V`): `number`

Return the inverted V parameter.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|V | number | Original V parameter|

#### Returns

`number`

The inverted V parameter.

___

### Value

▸ **Value**(`U`, `V`): [`Mx3dGePoint`](Mx3dGePoint.md)

Calculate the points on the surface corresponding to the parameters (U, V).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|U | number | Surface parameter U|
|V | number | Surface parameter V|

#### Returns

[`Mx3dGePoint`](Mx3dGePoint.md)

Corresponding point.

#### Inherited from

[Mx3dGeomElementarySurface](Mx3dGeomElementarySurface.md).[Value](Mx3dGeomElementarySurface.md#value)

___

### DownCast

▸ `Static` **DownCast**(`theObject`): [`Mx3dGeomConicalSurface`](Mx3dGeomConicalSurface.md)

Convert parent object to Mx3dGeomConicalSurface class object

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheObject | [Mx3dGeomObject] (Mx3dGeomObject. md) | Parent class object|

#### Returns

[`Mx3dGeomConicalSurface`](Mx3dGeomConicalSurface.md)

Mx3dGeomConicalSurface class object
