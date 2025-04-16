[mxcad_3d API Document](../README. md)/Mx3dGeomToroidalSurface

# Class: Mx3dGeomToroidalSurface

Representing a Toroidal Surface in three-dimensional space.
This type encapsulates the functionality of manipulating torus properties and methods.

## Hierarchy

- [`Mx3dGeomElementarySurface`](Mx3dGeomElementarySurface.md)

  ↳ **`Mx3dGeomToroidalSurface`**

## Table of contents

### Constructors

- [constructor](Mx3dGeomToroidalSurface.md#constructor)

### Methods

- [Area](Mx3dGeomToroidalSurface.md#area)
- [Axis](Mx3dGeomToroidalSurface.md#axis)
- [Bounds](Mx3dGeomToroidalSurface.md#bounds)
- [Coefficients](Mx3dGeomToroidalSurface.md#coefficients)
- [Continuity](Mx3dGeomToroidalSurface.md#continuity)
- [Copy](Mx3dGeomToroidalSurface.md#copy)
- [D0](Mx3dGeomToroidalSurface.md#d0)
- [D1](Mx3dGeomToroidalSurface.md#d1)
- [D2](Mx3dGeomToroidalSurface.md#d2)
- [D3](Mx3dGeomToroidalSurface.md#d3)
- [DN](Mx3dGeomToroidalSurface.md#dn)
- [DynamicType](Mx3dGeomToroidalSurface.md#dynamictype)
- [Face](Mx3dGeomToroidalSurface.md#face)
- [IsCNu](Mx3dGeomToroidalSurface.md#iscnu)
- [IsCNv](Mx3dGeomToroidalSurface.md#iscnv)
- [IsUClosed](Mx3dGeomToroidalSurface.md#isuclosed)
- [IsUPeriodic](Mx3dGeomToroidalSurface.md#isuperiodic)
- [IsVClosed](Mx3dGeomToroidalSurface.md#isvclosed)
- [IsVPeriodic](Mx3dGeomToroidalSurface.md#isvperiodic)
- [Location](Mx3dGeomToroidalSurface.md#location)
- [MajorRadius](Mx3dGeomToroidalSurface.md#majorradius)
- [MinorRadius](Mx3dGeomToroidalSurface.md#minorradius)
- [MirrorByAxis](Mx3dGeomToroidalSurface.md#mirrorbyaxis)
- [MirrorByCSYSR](Mx3dGeomToroidalSurface.md#mirrorbycsysr)
- [MirrorByPoint](Mx3dGeomToroidalSurface.md#mirrorbypoint)
- [MirroredByAxis](Mx3dGeomToroidalSurface.md#mirroredbyaxis)
- [MirroredByCSYSR](Mx3dGeomToroidalSurface.md#mirroredbycsysr)
- [MirroredByPoint](Mx3dGeomToroidalSurface.md#mirroredbypoint)
- [Position](Mx3dGeomToroidalSurface.md#position)
- [Rotate](Mx3dGeomToroidalSurface.md#rotate)
- [Rotated](Mx3dGeomToroidalSurface.md#rotated)
- [Scale](Mx3dGeomToroidalSurface.md#scale)
- [Scaled](Mx3dGeomToroidalSurface.md#scaled)
- [SetAxis](Mx3dGeomToroidalSurface.md#setaxis)
- [SetLocation](Mx3dGeomToroidalSurface.md#setlocation)
- [SetMajorRadius](Mx3dGeomToroidalSurface.md#setmajorradius)
- [SetMinorRadius](Mx3dGeomToroidalSurface.md#setminorradius)
- [SetPosition](Mx3dGeomToroidalSurface.md#setposition)
- [Transform](Mx3dGeomToroidalSurface.md#transform)
- [TransformParameters](Mx3dGeomToroidalSurface.md#transformparameters)
- [Transformed](Mx3dGeomToroidalSurface.md#transformed)
- [TranslateBy2Points](Mx3dGeomToroidalSurface.md#translateby2points)
- [TranslateByVec](Mx3dGeomToroidalSurface.md#translatebyvec)
- [TranslatedBy2Points](Mx3dGeomToroidalSurface.md#translatedby2points)
- [TranslatedByVec](Mx3dGeomToroidalSurface.md#translatedbyvec)
- [UPeriod](Mx3dGeomToroidalSurface.md#uperiod)
- [UReverse](Mx3dGeomToroidalSurface.md#ureverse)
- [UReversed](Mx3dGeomToroidalSurface.md#ureversed)
- [UReversedParameter](Mx3dGeomToroidalSurface.md#ureversedparameter)
- [VPeriod](Mx3dGeomToroidalSurface.md#vperiod)
- [VReverse](Mx3dGeomToroidalSurface.md#vreverse)
- [VReversed](Mx3dGeomToroidalSurface.md#vreversed)
- [VReversedParameter](Mx3dGeomToroidalSurface.md#vreversedparameter)
- [Value](Mx3dGeomToroidalSurface.md#value)
- [Volume](Mx3dGeomToroidalSurface.md#volume)
- [DownCast](Mx3dGeomToroidalSurface.md#downcast)

## Constructors

### constructor

• **new Mx3dGeomToroidalSurface**(`A3`, `MajorRadius`, `MinorRadius`)

Construct a torus with a given coordinate system and primary and secondary radii.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|A3 | Mx3dGeCSYSR (Mx3dGeCSYSR. md) | Surface Local Coordinate System (Mx3dGeCSYSR)|
|MajorRadius | number | The main radius of the torus|
|MinorRadius | number | The minor radius of the torus|

#### Overrides

Mx3dGeomElementarySurface.constructor

## Methods

### Area

▸ **Area**(): `number`

Calculate and return the surface area of the torus.

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

Set the boundary of the parameter range.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|U1U2V1V2 | [dU1: number, dU2: number, dV1: number, dV2: number] | Parameter range [U1, U2, V1, V2]|

#### Returns

`void`

___

### Coefficients

▸ **Coefficients**(`Coef`): `void`

Obtain implicit equation coefficients.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Coef | number [] | coefficient array, with a length of at least 31|

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

Create a new object that is a copy of this torus.

#### Returns

[`Mx3dGeomObject`](Mx3dGeomObject.md)

Copy of the torus (Mx3dGeomObject).

___

### D0

▸ **D0**(`U`, `V`, `P`): `void`

Calculate and return the point at the specified U and V parameters.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|U | number | parameter U|
|V | number | parameter V|
|P | [Mx3dGePoint] (Mx3dGePoint. md) | Output Point (Mx3dGePoint)|

#### Returns

`void`

___

### D1

▸ **D1**(`U`, `V`, `P`, `D1U`, `D1V`): `void`

Calculate the first derivative of the current point and the U and V directions.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|U | number | parameter U|
|V | number | parameter V|
|P | [Mx3dGePoint] (Mx3dGePoint. md) | Output Point (Mx3dGePoint)|
|D1U | [Mx3dGeVec] (Mx3dGeVec. md) | Output the first derivative in the U direction (Mx3dGeVec)|
|D1V | [Mx3dGeVec] (Mx3dGeVec. md) | Output the first derivative in the V direction (Mx3dGeVec)|

#### Returns

`void`

___

### D2

▸ **D2**(`U`, `V`, `P`, `D1U`, `D1V`, `D2U`, `D2V`, `D2UV`): `void`

Calculate the current point, first and second derivatives.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|U | number | parameter U|
|V | number | parameter V|
|P | [Mx3dGePoint] (Mx3dGePoint. md) | Output Point (Mx3dGePoint)|
|D1U | [Mx3dGeVec] (Mx3dGeVec. md) | Output the first derivative in the U direction (Mx3dGeVec)|
|D1V | [Mx3dGeVec] (Mx3dGeVec. md) | Output the first derivative in the V direction (Mx3dGeVec)|
|D2U | [Mx3dGeVec] (Mx3dGeVec. md) | Output the second derivative in the U direction (Mx3dGeVec)|
|D2V | [Mx3dGeVec] (Mx3dGeVec. md) | Output the second derivative in the V direction (Mx3dGeVec)|
|D2UV | [Mx3dGeVec] (Mx3dGeVec. md) | Output the second-order mixed derivative in the U and V directions (Mx3dGeVec)|

#### Returns

`void`

___

### D3

▸ **D3**(`U`, `V`, `P`, `D1U`, `D1V`, `D2U`, `D2V`, `D2UV`, `D3U`, `D3V`, `D3UUV`, `D3UVV`): `void`

Calculate the current point, first, second, and third derivatives.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|U | number | parameter U|
|V | number | parameter V|
|P | [Mx3dGePoint] (Mx3dGePoint. md) | Output Point (Mx3dGePoint)|
|D1U | [Mx3dGeVec] (Mx3dGeVec. md) | Output the first derivative in the U direction (Mx3dGeVec)|
|D1V | [Mx3dGeVec] (Mx3dGeVec. md) | Output the first derivative in the V direction (Mx3dGeVec)|
|D2U | [Mx3dGeVec] (Mx3dGeVec. md) | Output the second derivative in the U direction (Mx3dGeVec)|
|D2V | [Mx3dGeVec] (Mx3dGeVec. md) | Output the second derivative in the V direction (Mx3dGeVec)|
|D2UV | [Mx3dGeVec] (Mx3dGeVec. md) | Output the second-order mixed derivative in the U and V directions (Mx3dGeVec)|
|D3U | [Mx3dGeVec] (Mx3dGeVec. md) | Output the third derivative in the U direction (Mx3dGeVec)|
|D3V | [Mx3dGeVec] (Mx3dGeVec. md) | Output the third derivative in the V direction (Mx3dGeVec)|
|D3UUV | [Mx3dGeVec] (Mx3dGeVec. md) | Output the second-order mixed third-order derivative in the U direction (Mx3dGeVec)|
|D3UVV | [Mx3dGeVec] (Mx3dGeVec. md) | Output the second-order mixed third-order derivative in the V direction (Mx3dGeVec)|

#### Returns

`void`

___

### DN

▸ **DN**(`U`, `V`, `Nu`, `Nv`): [`Mx3dGeVec`](Mx3dGeVec.md)

Calculate the higher-order derivative at the specified parameters (U, V).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|U | number | parameter U|
|V | number | parameter V|
|Nu | number | The U-direction order of higher-order derivatives|
|Nv | number | The V-direction order of higher-order derivatives|

#### Returns

[`Mx3dGeVec`](Mx3dGeVec.md)

Higher order derivative (Mx3dGeVec).

___

### DynamicType

▸ **DynamicType**(): `string`

Return the dynamic type string of the object.

#### Returns

`string`

Dynamic type string.

#### Overrides

[Mx3dGeomElementarySurface](Mx3dGeomElementarySurface.md).[DynamicType](Mx3dGeomElementarySurface.md#dynamictype)

___

### Face

▸ **Face**(`TolDegen`): [`Mx3dShapeFace`](Mx3dShapeFace.md)

Create a plane representing a torus (represented by a face).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TolDegen | number | Degradation tolerance|

#### Returns

[`Mx3dShapeFace`](Mx3dShapeFace.md)

Flat (Mx3dShapeFace).

▸ **Face**(`W`, `Inside`): [`Mx3dShapeFace`](Mx3dShapeFace.md)

Create a plane representing a torus (represented by lines).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|W | [Mx3dShapeWire] (Mx3dShapeWire. md) | Line (Mx3dShapeWire)|
|Inside | boolean | indicates whether the torus is inside|

#### Returns

[`Mx3dShapeFace`](Mx3dShapeFace.md)

Flat (Mx3dShapeFace).

▸ **Face**(`UMin`, `UMax`, `VMin`, `VMax`, `TolDegen`): [`Mx3dShapeFace`](Mx3dShapeFace.md)

Create a plane representing a torus (specifying the range of U, V).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|UMin | number | minimum U parameter|
|UMax | number | Maximum U parameter|
|VMin | number | minimum V parameter|
|VMax | number | maximum V parameter|
|TolDegen | number | Degradation tolerance|

#### Returns

[`Mx3dShapeFace`](Mx3dShapeFace.md)

Flat (Mx3dShapeFace).

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

Check if the torus U direction is closed.

#### Returns

`boolean`

If the U direction is closed, return true; otherwise, return false.

___

### IsUPeriodic

▸ **IsUPeriodic**(): `boolean`

Check if the U direction of the torus is periodic.

#### Returns

`boolean`

If the U direction is periodic, return true; otherwise, return false.

___

### IsVClosed

▸ **IsVClosed**(): `boolean`

Check if the V-direction of the torus is closed.

#### Returns

`boolean`

If the V direction is closed, return true; otherwise, return false.

___

### IsVPeriodic

▸ **IsVPeriodic**(): `boolean`

Check if the V-direction of the torus is periodic.

#### Returns

`boolean`

If the V direction is periodic, return true; otherwise, return false.

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

### MajorRadius

▸ **MajorRadius**(): `number`

Return the main radius of the torus.

#### Returns

`number`

Main radius.

___

### MinorRadius

▸ **MinorRadius**(): `number`

Return the secondary radius of the torus.

#### Returns

`number`

Secondary radius.

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

▸ **MirroredByAxis**(`A1`): [`Mx3dGeomToroidalSurface`](Mx3dGeomToroidalSurface.md)

Return the new geometric object transformed through axis mirroring.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|A1 | [Mx3dGeAxis] (Mx3dGeAxis. md) | Axis object|

#### Returns

[`Mx3dGeomToroidalSurface`](Mx3dGeomToroidalSurface.md)

New geometric objects.

#### Inherited from

[Mx3dGeomElementarySurface](Mx3dGeomElementarySurface.md).[MirroredByAxis](Mx3dGeomElementarySurface.md#mirroredbyaxis)

___

### MirroredByCSYSR

▸ **MirroredByCSYSR**(`A2`): [`Mx3dGeomToroidalSurface`](Mx3dGeomToroidalSurface.md)

Return the new geometric object after mirror transformation through the right-handed coordinate system.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|A2 | [Mx3dGeCSYSR] (Mx3dGeCSYSR. md) | Right hand coordinate system object|

#### Returns

[`Mx3dGeomToroidalSurface`](Mx3dGeomToroidalSurface.md)

New geometric objects.

#### Inherited from

[Mx3dGeomElementarySurface](Mx3dGeomElementarySurface.md).[MirroredByCSYSR](Mx3dGeomElementarySurface.md#mirroredbycsysr)

___

### MirroredByPoint

▸ **MirroredByPoint**(`P`): [`Mx3dGeomToroidalSurface`](Mx3dGeomToroidalSurface.md)

Return the new geometric object after point mirror transformation.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|P | [Mx3dGePoint] (Mx3dGePoint. md) | Point object|

#### Returns

[`Mx3dGeomToroidalSurface`](Mx3dGeomToroidalSurface.md)

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

▸ **Rotated**(`A1`, `Ang`): [`Mx3dGeomToroidalSurface`](Mx3dGeomToroidalSurface.md)

Return the rotated new geometric object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|A1 | [Mx3dGeAxis] (Mx3dGeAxis. md) | Axis object|
|Ang | number | Rotation angle|

#### Returns

[`Mx3dGeomToroidalSurface`](Mx3dGeomToroidalSurface.md)

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

▸ **Scaled**(`P`, `S`): [`Mx3dGeomToroidalSurface`](Mx3dGeomToroidalSurface.md)

Return the scaled new geometric object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|P | [Mx3dGePoint] (Mx3dGePoint. md) | Point object|
|S | number | scaling ratio|

#### Returns

[`Mx3dGeomToroidalSurface`](Mx3dGeomToroidalSurface.md)

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

### SetMajorRadius

▸ **SetMajorRadius**(`MajorRadius`): `void`

Set the main radius of the torus.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|MajorRadius | number | New primary radius. It must be non negative|

#### Returns

`void`

___

### SetMinorRadius

▸ **SetMinorRadius**(`MinorRadius`): `void`

Set the secondary radius of the torus.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|MinorRadius | number | New secondary radius. It must be non negative|

#### Returns

`void`

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

### Transform

▸ **Transform**(`T`): `void`

Apply the transformation T to the torus.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|T | [Mx3dGeTsf] (Mx3dGeTsf. md) | Transform (Mx3dGeTsf)|

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

▸ **Transformed**(`T`): [`Mx3dGeomToroidalSurface`](Mx3dGeomToroidalSurface.md)

Return the transformed new geometric object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|T | [Mx3dGetStrf] (Mx3dGetStrf. md) | Transform the object|

#### Returns

[`Mx3dGeomToroidalSurface`](Mx3dGeomToroidalSurface.md)

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

▸ **TranslatedBy2Points**(`P1`, `P2`): [`Mx3dGeomToroidalSurface`](Mx3dGeomToroidalSurface.md)

Return the new geometric object after translating through two points.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|P1 | [Mx3dGePoint] (Mx3dGePoint. md) | Starting point object|
|P2 | [Mx3dGePoint] (Mx3dGePoint. md) | End point object|

#### Returns

[`Mx3dGeomToroidalSurface`](Mx3dGeomToroidalSurface.md)

New geometric objects.

#### Inherited from

[Mx3dGeomElementarySurface](Mx3dGeomElementarySurface.md).[TranslatedBy2Points](Mx3dGeomElementarySurface.md#translatedby2points)

___

### TranslatedByVec

▸ **TranslatedByVec**(`V`): [`Mx3dGeomToroidalSurface`](Mx3dGeomToroidalSurface.md)

Return the new geometric object after vector translation.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|V | [Mx3dGeVec] (Mx3dGeVec. md) | Vector object|

#### Returns

[`Mx3dGeomToroidalSurface`](Mx3dGeomToroidalSurface.md)

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

▸ **UReversed**(): [`Mx3dGeomToroidalSurface`](Mx3dGeomToroidalSurface.md)

Parameterization of reversing the U direction.

#### Returns

[`Mx3dGeomToroidalSurface`](Mx3dGeomToroidalSurface.md)

Return the current object to implement a chain call.

#### Inherited from

[Mx3dGeomElementarySurface](Mx3dGeomElementarySurface.md).[UReversed](Mx3dGeomElementarySurface.md#ureversed)

___

### UReversedParameter

▸ **UReversedParameter**(`U`): `number`

Calculate the parameter value of the torus U direction reversed on a given U parameter.

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

▸ **VReversed**(): [`Mx3dGeomToroidalSurface`](Mx3dGeomToroidalSurface.md)

Parameterization of reversing the V direction.

#### Returns

[`Mx3dGeomToroidalSurface`](Mx3dGeomToroidalSurface.md)

Return the current object to implement a chain call.

#### Inherited from

[Mx3dGeomElementarySurface](Mx3dGeomElementarySurface.md).[VReversed](Mx3dGeomElementarySurface.md#vreversed)

___

### VReversedParameter

▸ **VReversedParameter**(`V`): `number`

Calculate the parameter value of the torus V direction reversed on the given V parameter.

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

Calculate and return the volume of the torus.

#### Returns

`number`

Volume.

___

### DownCast

▸ `Static` **DownCast**(`theObject`): [`Mx3dGeomToroidalSurface`](Mx3dGeomToroidalSurface.md)

Convert parent object to Mx3dGeomToroidalSurface class object

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheObject | [Mx3dGeomObject] (Mx3dGeomObject. md) | Parent class object|

#### Returns

[`Mx3dGeomToroidalSurface`](Mx3dGeomToroidalSurface.md)

Mx3dGeomToroidalSurface class object
