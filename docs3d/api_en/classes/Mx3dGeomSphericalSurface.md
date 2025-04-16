[mxcad_3d API Document](../README. md)/Mx3dGeomSphericalSurface

# Class: Mx3dGeomSphericalSurface

Representing a sphere in three-dimensional space.
This type encapsulates the functionality of manipulating spherical properties and methods.

## Hierarchy

- [`Mx3dGeomElementarySurface`](Mx3dGeomElementarySurface.md)

  ↳ **`Mx3dGeomSphericalSurface`**

## Table of contents

### Constructors

- [constructor](Mx3dGeomSphericalSurface.md#constructor)

### Methods

- [Area](Mx3dGeomSphericalSurface.md#area)
- [Axis](Mx3dGeomSphericalSurface.md#axis)
- [Bounds](Mx3dGeomSphericalSurface.md#bounds)
- [Coefficients](Mx3dGeomSphericalSurface.md#coefficients)
- [Continuity](Mx3dGeomSphericalSurface.md#continuity)
- [Copy](Mx3dGeomSphericalSurface.md#copy)
- [D0](Mx3dGeomSphericalSurface.md#d0)
- [D1](Mx3dGeomSphericalSurface.md#d1)
- [D2](Mx3dGeomSphericalSurface.md#d2)
- [D3](Mx3dGeomSphericalSurface.md#d3)
- [DN](Mx3dGeomSphericalSurface.md#dn)
- [DynamicType](Mx3dGeomSphericalSurface.md#dynamictype)
- [Face](Mx3dGeomSphericalSurface.md#face)
- [IsCNu](Mx3dGeomSphericalSurface.md#iscnu)
- [IsCNv](Mx3dGeomSphericalSurface.md#iscnv)
- [IsUClosed](Mx3dGeomSphericalSurface.md#isuclosed)
- [IsUPeriodic](Mx3dGeomSphericalSurface.md#isuperiodic)
- [IsVClosed](Mx3dGeomSphericalSurface.md#isvclosed)
- [IsVPeriodic](Mx3dGeomSphericalSurface.md#isvperiodic)
- [Location](Mx3dGeomSphericalSurface.md#location)
- [MirrorByAxis](Mx3dGeomSphericalSurface.md#mirrorbyaxis)
- [MirrorByCSYSR](Mx3dGeomSphericalSurface.md#mirrorbycsysr)
- [MirrorByPoint](Mx3dGeomSphericalSurface.md#mirrorbypoint)
- [MirroredByAxis](Mx3dGeomSphericalSurface.md#mirroredbyaxis)
- [MirroredByCSYSR](Mx3dGeomSphericalSurface.md#mirroredbycsysr)
- [MirroredByPoint](Mx3dGeomSphericalSurface.md#mirroredbypoint)
- [Position](Mx3dGeomSphericalSurface.md#position)
- [Radius](Mx3dGeomSphericalSurface.md#radius)
- [Rotate](Mx3dGeomSphericalSurface.md#rotate)
- [Rotated](Mx3dGeomSphericalSurface.md#rotated)
- [Scale](Mx3dGeomSphericalSurface.md#scale)
- [Scaled](Mx3dGeomSphericalSurface.md#scaled)
- [SetAxis](Mx3dGeomSphericalSurface.md#setaxis)
- [SetLocation](Mx3dGeomSphericalSurface.md#setlocation)
- [SetPosition](Mx3dGeomSphericalSurface.md#setposition)
- [SetRadius](Mx3dGeomSphericalSurface.md#setradius)
- [Transform](Mx3dGeomSphericalSurface.md#transform)
- [TransformParameters](Mx3dGeomSphericalSurface.md#transformparameters)
- [Transformed](Mx3dGeomSphericalSurface.md#transformed)
- [TranslateBy2Points](Mx3dGeomSphericalSurface.md#translateby2points)
- [TranslateByVec](Mx3dGeomSphericalSurface.md#translatebyvec)
- [TranslatedBy2Points](Mx3dGeomSphericalSurface.md#translatedby2points)
- [TranslatedByVec](Mx3dGeomSphericalSurface.md#translatedbyvec)
- [UPeriod](Mx3dGeomSphericalSurface.md#uperiod)
- [UReverse](Mx3dGeomSphericalSurface.md#ureverse)
- [UReversed](Mx3dGeomSphericalSurface.md#ureversed)
- [UReversedParameter](Mx3dGeomSphericalSurface.md#ureversedparameter)
- [VPeriod](Mx3dGeomSphericalSurface.md#vperiod)
- [VReverse](Mx3dGeomSphericalSurface.md#vreverse)
- [VReversed](Mx3dGeomSphericalSurface.md#vreversed)
- [VReversedParameter](Mx3dGeomSphericalSurface.md#vreversedparameter)
- [Value](Mx3dGeomSphericalSurface.md#value)
- [Volume](Mx3dGeomSphericalSurface.md#volume)
- [DownCast](Mx3dGeomSphericalSurface.md#downcast)

## Constructors

### constructor

• **new Mx3dGeomSphericalSurface**(`A3`, `Radius`)

Construct a sphere with a given coordinate system and radius.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|A3 | Mx3dGeCSYSR (Mx3dGeCSYSR. md) | Surface Local Coordinate System (Mx3dGeCSYSR)|
|Radius | number | The radius of a sphere|

#### Overrides

Mx3dGeomElementarySurface.constructor

## Methods

### Area

▸ **Area**(): `number`

Calculate the spherical area.

#### Returns

`number`

Surface area.

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

Retrieve the boundary of the parameter field.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|U1U2V1V2 | [dU1: number, dU2: number, dV1: number, dV2: number] | Array containing boundaries: [dU1, dU2, dV1, dV2]。 |

#### Returns

`void`

___

### Coefficients

▸ **Coefficients**(`A1A2A3B1B2B3C1C2C3D`): `void`

Set the coefficients of the spherical implicit equation.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|A1A2A3B1B2B3C1C2C3D | [A1: number, A2: number, A3: number, B1: number, B2: number, B3: number, C1: number, C2: number, C3: number, D: number] | Coefficient array: [A1, A2, A3, B1, B2, B3, C1, C2, C3, D]。 |

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

Create a copy of the sphere.

#### Returns

[`Mx3dGeomObject`](Mx3dGeomObject.md)

A new instance of a sphere.

___

### D0

▸ **D0**(`U`, `V`, `P`): `void`

Calculate the surface points for the given U and V parameters.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|The 'U' | 'number' | U parameter|
|V | number | V parameter|
|P | [Mx3dGePoint] (Mx3dGePoint. md) | Points on the surface|

#### Returns

`void`

___

### D1

▸ **D1**(`U`, `V`, `P`, `D1U`, `D1V`): `void`

Calculate the point and its first derivative for the given U and V parameters.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|The 'U' | 'number' | U parameter|
|V | number | V parameter|
|P | [Mx3dGePoint] (Mx3dGePoint. md) | Points on the surface|
|D1U | [Mx3dGeVec] (Mx3dGeVec. md) | Derivative in the U direction|
|D1V | [Mx3dGeVec] (Mx3dGeVec. md) | Derivative in the V direction|

#### Returns

`void`

___

### D2

▸ **D2**(`U`, `V`, `P`, `D1U`, `D1V`, `D2U`, `D2V`, `D2UV`): `void`

Calculate the point, first and second derivatives of the given U and V parameters.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|The 'U' | 'number' | U parameter|
|V | number | V parameter|
|P | [Mx3dGePoint] (Mx3dGePoint. md) | Points on the surface|
|D1U | [Mx3dGeVec] (Mx3dGeVec. md) | First derivative in the U direction|
|D1V | [Mx3dGeVec] (Mx3dGeVec. md) | First derivative in the V direction|
|D2U | [Mx3dGeVec] (Mx3dGeVec. md) | Second derivative in the U direction|
|D2V | [Mx3dGeVec] (Mx3dGeVec. md) | Second derivative in the V direction|
|D2UV | [Mx3dGeVec] (Mx3dGeVec. md) | Second order mixed derivative|

#### Returns

`void`

___

### D3

▸ **D3**(`U`, `V`, `P`, `D1U`, `D1V`, `D2U`, `D2V`, `D2UV`, `D3U`, `D3V`, `D3UUV`, `D3UVV`): `void`

Calculate the point, first, second, and third derivatives of the given U and V parameters.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|The 'U' | 'number' | U parameter|
|V | number | V parameter|
|P | [Mx3dGePoint] (Mx3dGePoint. md) | Points on the surface|
|D1U | [Mx3dGeVec] (Mx3dGeVec. md) | First derivative in the U direction|
|D1V | [Mx3dGeVec] (Mx3dGeVec. md) | First derivative in the V direction|
|D2U | [Mx3dGeVec] (Mx3dGeVec. md) | Second derivative in the U direction|
|D2V | [Mx3dGeVec] (Mx3dGeVec. md) | Second derivative in the V direction|
|D2UV | [Mx3dGeVec] (Mx3dGeVec. md) | Second order mixed derivative|
|D3U | [Mx3dGeVec] (Mx3dGeVec. md) | Third derivative in the U direction|
|D3V | [Mx3dGeVec] (Mx3dGeVec. md) | Third derivative in the V direction|
|D3UUV | [Mx3dGeVec] (Mx3dGeVec. md) | Third order mixed derivatives (U and U)|
|D3UVV | [Mx3dGeVec] (Mx3dGeVec. md) | Third order mixed derivative (U and V)|

#### Returns

`void`

___

### DN

▸ **DN**(`U`, `V`, `Nu`, `Nv`): [`Mx3dGeVec`](Mx3dGeVec.md)

Calculate the specified order derivative in the U and V directions.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|The 'U' | 'number' | U parameter|
|V | number | V parameter|
|Nu | number | derivative order in the U direction|
|Nv | number | derivative order in the V direction|

#### Returns

[`Mx3dGeVec`](Mx3dGeVec.md)

Nth derivative vector.

___

### DynamicType

▸ **DynamicType**(): `string`

Return the dynamic type of the object.

#### Returns

`string`

A dynamically typed string.

#### Overrides

[Mx3dGeomElementarySurface](Mx3dGeomElementarySurface.md).[DynamicType](Mx3dGeomElementarySurface.md#dynamictype)

___

### Face

▸ **Face**(`TolDegen`): [`Mx3dShapeFace`](Mx3dShapeFace.md)

Generate surfaces using degraded tolerance.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TolDegen | number | Degradation tolerance|

#### Returns

[`Mx3dShapeFace`](Mx3dShapeFace.md)

Surface representation of the surface.

▸ **Face**(`W`, `Inside`): [`Mx3dShapeFace`](Mx3dShapeFace.md)

Generate surface faces using wireframes and internal markers.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|W | [Mx3dShapeWire] (Mx3dShapeWire. md) | Define the wireframe of the boundary|
|Inside | boolean | Boolean value, indicating whether the face is within the wireframe|

#### Returns

[`Mx3dShapeFace`](Mx3dShapeFace.md)

Surface representation of the surface.

▸ **Face**(`UMin`, `UMax`, `VMin`, `VMax`, `TolDegen`): [`Mx3dShapeFace`](Mx3dShapeFace.md)

Generate surfaces with specified parameter ranges and degradation tolerances.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|UMin | number | The minimum U value of the parameter range|
|UMax | number | The maximum U value within the parameter range|
|VMin | number | The minimum V value of the parameter range|
|VMax | number | The maximum V value within the parameter range|
|TolDegen | number | Degradation tolerance, used to handle geometric degradation situations|

#### Returns

[`Mx3dShapeFace`](Mx3dShapeFace.md)

A surface representation is usually a closed surface segment.

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

Check if the surface is closed in the U direction.

#### Returns

`boolean`

If the U direction is closed, it is True; otherwise, it is False.

___

### IsUPeriodic

▸ **IsUPeriodic**(): `boolean`

Check if the surface is periodic in the U direction.

#### Returns

`boolean`

If the U direction is periodic, it is True; otherwise, it is False.

___

### IsVClosed

▸ **IsVClosed**(): `boolean`

Check if the surface is closed in the V direction.

#### Returns

`boolean`

If the V direction is closed, it is True; otherwise, it is False.

___

### IsVPeriodic

▸ **IsVPeriodic**(): `boolean`

Check if the surface is periodic in the V direction.

#### Returns

`boolean`

If the V direction is periodic, it is True; otherwise, it is False.

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

▸ **MirroredByAxis**(`A1`): [`Mx3dGeomSphericalSurface`](Mx3dGeomSphericalSurface.md)

Return the new geometric object transformed through axis mirroring.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|A1 | [Mx3dGeAxis] (Mx3dGeAxis. md) | Axis object|

#### Returns

[`Mx3dGeomSphericalSurface`](Mx3dGeomSphericalSurface.md)

New geometric objects.

#### Inherited from

[Mx3dGeomElementarySurface](Mx3dGeomElementarySurface.md).[MirroredByAxis](Mx3dGeomElementarySurface.md#mirroredbyaxis)

___

### MirroredByCSYSR

▸ **MirroredByCSYSR**(`A2`): [`Mx3dGeomSphericalSurface`](Mx3dGeomSphericalSurface.md)

Return the new geometric object after mirror transformation through the right-handed coordinate system.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|A2 | [Mx3dGeCSYSR] (Mx3dGeCSYSR. md) | Right hand coordinate system object|

#### Returns

[`Mx3dGeomSphericalSurface`](Mx3dGeomSphericalSurface.md)

New geometric objects.

#### Inherited from

[Mx3dGeomElementarySurface](Mx3dGeomElementarySurface.md).[MirroredByCSYSR](Mx3dGeomElementarySurface.md#mirroredbycsysr)

___

### MirroredByPoint

▸ **MirroredByPoint**(`P`): [`Mx3dGeomSphericalSurface`](Mx3dGeomSphericalSurface.md)

Return the new geometric object after point mirror transformation.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|P | [Mx3dGePoint] (Mx3dGePoint. md) | Point object|

#### Returns

[`Mx3dGeomSphericalSurface`](Mx3dGeomSphericalSurface.md)

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

### Radius

▸ **Radius**(): `number`

Return the radius of the sphere.

#### Returns

`number`

The radius of the ball.

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

▸ **Rotated**(`A1`, `Ang`): [`Mx3dGeomSphericalSurface`](Mx3dGeomSphericalSurface.md)

Return the rotated new geometric object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|A1 | [Mx3dGeAxis] (Mx3dGeAxis. md) | Axis object|
|Ang | number | Rotation angle|

#### Returns

[`Mx3dGeomSphericalSurface`](Mx3dGeomSphericalSurface.md)

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

▸ **Scaled**(`P`, `S`): [`Mx3dGeomSphericalSurface`](Mx3dGeomSphericalSurface.md)

Return the scaled new geometric object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|P | [Mx3dGePoint] (Mx3dGePoint. md) | Point object|
|S | number | scaling ratio|

#### Returns

[`Mx3dGeomSphericalSurface`](Mx3dGeomSphericalSurface.md)

New geometric objects.

#### Inherited from

[Mx3dGeomElementarySurface](Mx3dGeomElementarySurface.md).[Scaled](Mx3dGeomElementarySurface.md#scaled)

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

Set the spherical radius.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|R | number | New spherical radius. It must be non negative|

#### Returns

`void`

___

### Transform

▸ **Transform**(`T`): `void`

Apply transformation to a sphere.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|T | [Mx3dGetStrf] (Mx3dGetStrf. md) | The transformation to be applied|

#### Returns

`void`

___

### TransformParameters

▸ **TransformParameters**(`UV`, `T`): `void`

Transform the surface parameters according to the given transformation matrix T.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|UV | [dU: number, dV: number] | Parameter array containing the values of U and V|
|T | [Mx3dGetStrf] (Mx3dGetStrf. md) | Transform matrix|

#### Returns

`void`

#### Inherited from

[Mx3dGeomElementarySurface](Mx3dGeomElementarySurface.md).[TransformParameters](Mx3dGeomElementarySurface.md#transformparameters)

___

### Transformed

▸ **Transformed**(`T`): [`Mx3dGeomSphericalSurface`](Mx3dGeomSphericalSurface.md)

Return the transformed new geometric object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|T | [Mx3dGetStrf] (Mx3dGetStrf. md) | Transform the object|

#### Returns

[`Mx3dGeomSphericalSurface`](Mx3dGeomSphericalSurface.md)

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

▸ **TranslatedBy2Points**(`P1`, `P2`): [`Mx3dGeomSphericalSurface`](Mx3dGeomSphericalSurface.md)

Return the new geometric object after translating through two points.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|P1 | [Mx3dGePoint] (Mx3dGePoint. md) | Starting point object|
|P2 | [Mx3dGePoint] (Mx3dGePoint. md) | End point object|

#### Returns

[`Mx3dGeomSphericalSurface`](Mx3dGeomSphericalSurface.md)

New geometric objects.

#### Inherited from

[Mx3dGeomElementarySurface](Mx3dGeomElementarySurface.md).[TranslatedBy2Points](Mx3dGeomElementarySurface.md#translatedby2points)

___

### TranslatedByVec

▸ **TranslatedByVec**(`V`): [`Mx3dGeomSphericalSurface`](Mx3dGeomSphericalSurface.md)

Return the new geometric object after vector translation.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|V | [Mx3dGeVec] (Mx3dGeVec. md) | Vector object|

#### Returns

[`Mx3dGeomSphericalSurface`](Mx3dGeomSphericalSurface.md)

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

▸ **UReversed**(): [`Mx3dGeomSphericalSurface`](Mx3dGeomSphericalSurface.md)

Parameterization of reversing the U direction.

#### Returns

[`Mx3dGeomSphericalSurface`](Mx3dGeomSphericalSurface.md)

Return the current object to implement a chain call.

#### Inherited from

[Mx3dGeomElementarySurface](Mx3dGeomElementarySurface.md).[UReversed](Mx3dGeomElementarySurface.md#ureversed)

___

### UReversedParameter

▸ **UReversedParameter**(`U`): `number`

Calculate the U-parameter value after reversing the U-parameter direction at a given point.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|U | number | The original U parameter|

#### Returns

`number`

The inverted U parameter value.

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

Reverse the parameterization direction of the surface in the V parameter direction.

#### Returns

`void`

#### Inherited from

[Mx3dGeomElementarySurface](Mx3dGeomElementarySurface.md).[VReverse](Mx3dGeomElementarySurface.md#vreverse)

___

### VReversed

▸ **VReversed**(): [`Mx3dGeomSphericalSurface`](Mx3dGeomSphericalSurface.md)

Parameterization of reversing the V direction.

#### Returns

[`Mx3dGeomSphericalSurface`](Mx3dGeomSphericalSurface.md)

Return the current object to implement a chain call.

#### Inherited from

[Mx3dGeomElementarySurface](Mx3dGeomElementarySurface.md).[VReversed](Mx3dGeomElementarySurface.md#vreversed)

___

### VReversedParameter

▸ **VReversedParameter**(`V`): `number`

Calculate the value of the V parameter after reversing its direction at a given point.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|V | number | The original V parameter|

#### Returns

`number`

The inverted value of the V parameter.

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

### Volume

▸ **Volume**(): `number`

Calculate the volume of the sphere.

#### Returns

`number`

Surface volume.

___

### DownCast

▸ `Static` **DownCast**(`theObject`): [`Mx3dGeomSphericalSurface`](Mx3dGeomSphericalSurface.md)

Convert parent class object to Mx3dGeomSphericalSurface class object

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheObject | [Mx3dGeomObject] (Mx3dGeomObject. md) | Parent class object|

#### Returns

[`Mx3dGeomSphericalSurface`](Mx3dGeomSphericalSurface.md)

Mx3dGeomSphericalSurface class object
