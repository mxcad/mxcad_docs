[mxcad_3d API Document](../README. md)/Mx3dGeomPlane

# Class: Mx3dGeomPlane

The Mx3dGeomPlane class provides the ability to describe and manipulate planes in 3D space.
A plane is defined by a coordinate system (Mx3dGeCSYSR) and can be described by its normal vector, origin, and parameter direction.

## Hierarchy

- [`Mx3dGeomElementarySurface`](Mx3dGeomElementarySurface.md)

  ↳ **`Mx3dGeomPlane`**

## Table of contents

### Constructors

- [constructor](Mx3dGeomPlane.md#constructor)

### Methods

- [Axis](Mx3dGeomPlane.md#axis)
- [Bounds](Mx3dGeomPlane.md#bounds)
- [Coefficients](Mx3dGeomPlane.md#coefficients)
- [Continuity](Mx3dGeomPlane.md#continuity)
- [Copy](Mx3dGeomPlane.md#copy)
- [D0](Mx3dGeomPlane.md#d0)
- [D1](Mx3dGeomPlane.md#d1)
- [D2](Mx3dGeomPlane.md#d2)
- [D3](Mx3dGeomPlane.md#d3)
- [DN](Mx3dGeomPlane.md#dn)
- [DynamicType](Mx3dGeomPlane.md#dynamictype)
- [Face](Mx3dGeomPlane.md#face)
- [IsCNu](Mx3dGeomPlane.md#iscnu)
- [IsCNv](Mx3dGeomPlane.md#iscnv)
- [IsUClosed](Mx3dGeomPlane.md#isuclosed)
- [IsUPeriodic](Mx3dGeomPlane.md#isuperiodic)
- [IsVClosed](Mx3dGeomPlane.md#isvclosed)
- [IsVPeriodic](Mx3dGeomPlane.md#isvperiodic)
- [Location](Mx3dGeomPlane.md#location)
- [MirrorByAxis](Mx3dGeomPlane.md#mirrorbyaxis)
- [MirrorByCSYSR](Mx3dGeomPlane.md#mirrorbycsysr)
- [MirrorByPoint](Mx3dGeomPlane.md#mirrorbypoint)
- [MirroredByAxis](Mx3dGeomPlane.md#mirroredbyaxis)
- [MirroredByCSYSR](Mx3dGeomPlane.md#mirroredbycsysr)
- [MirroredByPoint](Mx3dGeomPlane.md#mirroredbypoint)
- [Position](Mx3dGeomPlane.md#position)
- [Rotate](Mx3dGeomPlane.md#rotate)
- [Rotated](Mx3dGeomPlane.md#rotated)
- [Scale](Mx3dGeomPlane.md#scale)
- [Scaled](Mx3dGeomPlane.md#scaled)
- [SetAxis](Mx3dGeomPlane.md#setaxis)
- [SetLocation](Mx3dGeomPlane.md#setlocation)
- [SetPosition](Mx3dGeomPlane.md#setposition)
- [Transform](Mx3dGeomPlane.md#transform)
- [TransformParameters](Mx3dGeomPlane.md#transformparameters)
- [Transformed](Mx3dGeomPlane.md#transformed)
- [TranslateBy2Points](Mx3dGeomPlane.md#translateby2points)
- [TranslateByVec](Mx3dGeomPlane.md#translatebyvec)
- [TranslatedBy2Points](Mx3dGeomPlane.md#translatedby2points)
- [TranslatedByVec](Mx3dGeomPlane.md#translatedbyvec)
- [UPeriod](Mx3dGeomPlane.md#uperiod)
- [UReverse](Mx3dGeomPlane.md#ureverse)
- [UReversed](Mx3dGeomPlane.md#ureversed)
- [UReversedParameter](Mx3dGeomPlane.md#ureversedparameter)
- [VPeriod](Mx3dGeomPlane.md#vperiod)
- [VReverse](Mx3dGeomPlane.md#vreverse)
- [VReversed](Mx3dGeomPlane.md#vreversed)
- [VReversedParameter](Mx3dGeomPlane.md#vreversedparameter)
- [Value](Mx3dGeomPlane.md#value)
- [DownCast](Mx3dGeomPlane.md#downcast)

## Constructors

### constructor

• **new Mx3dGeomPlane**(`A3`)

Construct a plane in 3D space based on the specified axial position.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|A3 | [Mx3dGeCSYSR] (Mx3dGeCSYSR. md) | Define the coordinate system for plane position and orientation (Mx3dGeCSYSR)|

#### Overrides

Mx3dGeomElementarySurface.constructor

• **new Mx3dGeomPlane**(`P`, `V`)

Construct a plane based on a point and a normal vector.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|P | UniPoint | The origin of the plane|
|V | UniDirt | Normal vector, pointing in the direction of the plane|

#### Overrides

Mx3dGeomElementarySurface.constructor

• **new Mx3dGeomPlane**(`A`, `B`, `C`, `D`)

Construct a plane based on the coefficients of the plane equation.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|A | number | The coefficient A of the equation Ax+By+Cz+D=0|
|The coefficient B of the equation Ax+By+Cz+D=0|
|The coefficient C of the equation Ax+By+Cz+D=0|
|The coefficient D of the equation Ax+By+Cz+D=0|

#### Overrides

Mx3dGeomElementarySurface.constructor

## Methods

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

Calculate the parameter range of the plane.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|U1U2V1V2 | [dU1: number, dU2: number, dV1: number, dV2: number] | Parameter range array [dU1, dU2, dV1, dV2]|

#### Returns

`void`

___

### Coefficients

▸ **Coefficients**(`ABCD`): `void`

Calculate the coefficients of the plane equation.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|ABCD | [dA: number, dB: number, dC: number, dD: number] | Coefficient array [dA, dB, dC, dD]|

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

Create a new object as a copy of the plane.

#### Returns

[`Mx3dGeomObject`](Mx3dGeomObject.md)

Return a new flat object (Mx3dGeomObject).

___

### D0

▸ **D0**(`U`, `V`, `P`): `void`

Calculate the point at the specified U and V parameter values.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|U | number | U parameter value|
|V | number | V parameter value|
|P | [Mx3dGePoint] (Mx3dGePoint. md) | Used to store the target object (Mx3dGePoint) for computing points. The calculation formula is P=O+U * XDir+V * YDir, where O is the origin of the plane, XDir and YDir are the basis vectors in the U and V parameter directions, respectively|

#### Returns

`void`

___

### D1

▸ **D1**(`U`, `V`, `P`, `D1U`, `D1V`): `void`

Calculate the point and its first derivative at the specified U and V parameter values.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|U | number | U parameter value|
|V | number | V parameter value|
|P | [Mx3dGePoint] (Mx3dGePoint. md) | Used to store the target object (Mx3dGePoint) for computing points|
|D1U | [Mx3dGeVec] (Mx3dGeVec. md) | Used to store the target object (Mx3dGeVec) of the first derivative in the U direction|
|D1V | [Mx3dGeVec] (Mx3dGeVec. md) | Used to store the target object (Mx3dGeVec) for the first derivative in the V direction. The calculation formula is: - point: P = O + U * XDir + V * YDir。 -  The first derivative: D1U and D1V are partial derivatives of XDir and YDir, respectively|

#### Returns

`void`

___

### D2

▸ **D2**(`U`, `V`, `P`, `D1U`, `D1V`, `D2U`, `D2V`, `D2UV`): `void`

Calculate the point, first and second derivatives at the specified U and V parameter values.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|U | number | U parameter value|
|V | number | V parameter value|
|P | [Mx3dGePoint] (Mx3dGePoint. md) | Used to store the target object (Mx3dGePoint) for computing points|
|D1U | [Mx3dGeVec] (Mx3dGeVec. md) | Used to store the target object (Mx3dGeVec) of the first derivative in the U direction|
|D1V | [Mx3dGeVec] (Mx3dGeVec. md) | Used to store the target object (Mx3dGeVec) for the first derivative in the V direction|
|D2U | [Mx3dGeVec] (Mx3dGeVec. md) | Used to store the target object (Mx3dGeVec) of the second derivative in the U direction|
|D2V | [Mx3dGeVec] (Mx3dGeVec. md) | Used to store the target object (Mx3dGeVec) for the second derivative in the V direction|
|D2UV | [Mx3dGeVec] (Mx3dGeVec. md) | Used to store the target object (Mx3dGeVec) of the second derivative in the UV direction. The calculation formula is: - point: P = O + U * XDir + V * YDir。 -  The first derivative: D1U and D1V are partial derivatives of XDir and YDir, respectively- Second derivative: D2U, D2V, and D2UV are second-order partial derivatives|

#### Returns

`void`

___

### D3

▸ **D3**(`U`, `V`, `P`, `D1U`, `D1V`, `D2U`, `D2V`, `D2UV`, `D3U`, `D3V`, `D3UUV`, `D3UVV`): `void`

Calculate the point, first, second, and third derivatives at the specified U and V parameter values.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|U | number | U parameter value|
|V | number | V parameter value|
|P | [Mx3dGePoint] (Mx3dGePoint. md) | Used to store the target object (Mx3dGePoint) for computing points|
|D1U | [Mx3dGeVec] (Mx3dGeVec. md) | Used to store the target object (Mx3dGeVec) of the first derivative in the U direction|
|D1V | [Mx3dGeVec] (Mx3dGeVec. md) | Used to store the target object (Mx3dGeVec) for the first derivative in the V direction|
|D2U | [Mx3dGeVec] (Mx3dGeVec. md) | Used to store the target object (Mx3dGeVec) of the second derivative in the U direction|
|D2V | [Mx3dGeVec] (Mx3dGeVec. md) | Used to store the target object (Mx3dGeVec) for the second derivative in the V direction|
|D2UV | [Mx3dGeVec] (Mx3dGeVec. md) | Used to store the target object (Mx3dGeVec) of the second derivative in the UV direction|
|D3U | [Mx3dGeVec] (Mx3dGeVec. md) | Used to store the target object (Mx3dGeVec) for the third derivative in the U direction|
|D3V | [Mx3dGeVec] (Mx3dGeVec. md) | Used to store the target object (Mx3dGeVec) for the third derivative in the V direction|
|D3UUV | [Mx3dGeVec] (Mx3dGeVec. md) | Used to store the target object (Mx3dGeVec) of the third derivative in the UUU direction|
|D3UVV | [Mx3dGeVec] (Mx3dGeVec. md) | Used to store the target object (Mx3dGeVec) of the third derivative in the UVV direction. The calculation formula is: - point: P = O + U * XDir + V * YDir。 -  The first derivative: D1U and D1V are partial derivatives of XDir and YDir, respectively- Second derivative: D2U, D2V, and D2UV are second-order partial derivatives- Third derivative: D3U, D3V, D3UUV, and D3UVV are third order partial derivatives|

#### Returns

`void`

___

### DN

▸ **DN**(`U`, `V`, `Nu`, `Nv`): [`Mx3dGeVec`](Mx3dGeVec.md)

Calculate the derivative of the specified order at the specified U and V parameter values.

**`Throws`**

Error: If Nu+Nv<1 or Nu<0 or Nv<0, throw an exception.
The calculation formula is to calculate the partial derivative of a specified order and return the corresponding vector.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|U | number | U parameter value|
|V | number | V parameter value|
|Nu | number | derivative order in the U direction|
|Nv | number | derivative order in the V direction|

#### Returns

[`Mx3dGeVec`](Mx3dGeVec.md)

Return the computed vector object (Mx3dGeVec).

___

### DynamicType

▸ **DynamicType**(): `string`

Return the dynamic type string of the object.

#### Returns

`string`

Type name string.

#### Overrides

[Mx3dGeomElementarySurface](Mx3dGeomElementarySurface.md).[DynamicType](Mx3dGeomElementarySurface.md#dynamictype)

___

### Face

▸ **Face**(`TolDegen`): [`Mx3dShapeFace`](Mx3dShapeFace.md)

Generate a flat surface based on tolerances.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Toleden | number | tolerance value|

#### Returns

[`Mx3dShapeFace`](Mx3dShapeFace.md)

The generated flat surface (Mx3dShapeFace).

▸ **Face**(`W`, `Inside`): [`Mx3dShapeFace`](Mx3dShapeFace.md)

Generate a planar surface based on the given contour line and whether it is internally generated.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|W | [Mx3dShapeWire] (Mx3dShapeWire. md) | Contour Line (Mx3dShapeWire)|
|Inside | boolean | Is it inside|

#### Returns

[`Mx3dShapeFace`](Mx3dShapeFace.md)

The generated flat surface (Mx3dShapeFace).

▸ **Face**(`UMin`, `UMax`, `VMin`, `VMax`, `TolDegen`): [`Mx3dShapeFace`](Mx3dShapeFace.md)

Generate a flat surface based on the range of U and V and tolerances.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|UMin | number | The minimum value in the U direction|
|UMax | number | maximum value in the U direction|
|VMin | number | minimum value in the V direction|
|VMax | number | maximum value in the V direction|
|Toleden | number | tolerance value|

#### Returns

[`Mx3dShapeFace`](Mx3dShapeFace.md)

The generated flat surface (Mx3dShapeFace).

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

Determine whether the plane is closed in the U direction.

#### Returns

`boolean`

Return false.

___

### IsUPeriodic

▸ **IsUPeriodic**(): `boolean`

Determine whether the plane is periodic in the U direction.

#### Returns

`boolean`

Return false.

___

### IsVClosed

▸ **IsVClosed**(): `boolean`

Determine whether the plane is closed in the V direction.

#### Returns

`boolean`

Return false.

___

### IsVPeriodic

▸ **IsVPeriodic**(): `boolean`

Determine whether the plane is periodic in the V direction.

#### Returns

`boolean`

Return false.

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

▸ **MirroredByAxis**(`A1`): [`Mx3dGeomPlane`](Mx3dGeomPlane.md)

Return the new geometric object transformed through axis mirroring.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|A1 | [Mx3dGeAxis] (Mx3dGeAxis. md) | Axis object|

#### Returns

[`Mx3dGeomPlane`](Mx3dGeomPlane.md)

New geometric objects.

#### Inherited from

[Mx3dGeomElementarySurface](Mx3dGeomElementarySurface.md).[MirroredByAxis](Mx3dGeomElementarySurface.md#mirroredbyaxis)

___

### MirroredByCSYSR

▸ **MirroredByCSYSR**(`A2`): [`Mx3dGeomPlane`](Mx3dGeomPlane.md)

Return the new geometric object after mirror transformation through the right-handed coordinate system.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|A2 | [Mx3dGeCSYSR] (Mx3dGeCSYSR. md) | Right hand coordinate system object|

#### Returns

[`Mx3dGeomPlane`](Mx3dGeomPlane.md)

New geometric objects.

#### Inherited from

[Mx3dGeomElementarySurface](Mx3dGeomElementarySurface.md).[MirroredByCSYSR](Mx3dGeomElementarySurface.md#mirroredbycsysr)

___

### MirroredByPoint

▸ **MirroredByPoint**(`P`): [`Mx3dGeomPlane`](Mx3dGeomPlane.md)

Return the new geometric object after point mirror transformation.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|P | [Mx3dGePoint] (Mx3dGePoint. md) | Point object|

#### Returns

[`Mx3dGeomPlane`](Mx3dGeomPlane.md)

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

▸ **Rotated**(`A1`, `Ang`): [`Mx3dGeomPlane`](Mx3dGeomPlane.md)

Return the rotated new geometric object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|A1 | [Mx3dGeAxis] (Mx3dGeAxis. md) | Axis object|
|Ang | number | Rotation angle|

#### Returns

[`Mx3dGeomPlane`](Mx3dGeomPlane.md)

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

▸ **Scaled**(`P`, `S`): [`Mx3dGeomPlane`](Mx3dGeomPlane.md)

Return the scaled new geometric object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|P | [Mx3dGePoint] (Mx3dGePoint. md) | Point object|
|S | number | scaling ratio|

#### Returns

[`Mx3dGeomPlane`](Mx3dGeomPlane.md)

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

### Transform

▸ **Transform**(`T`): `void`

Apply transformation T to the plane.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|T | [Mx3dGeTsf] (Mx3dGeTsf. md) | Transform (Mx3dGeTsf)|

#### Returns

`void`

___

### TransformParameters

▸ **TransformParameters**(`UV`, `T`): `void`

Apply the U and V parameters, as well as the transformation T, to the plane.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|UV | [dU: number, dV: number] | Parameter value array [dU, dV]|
|T | [Mx3dGeTsf] (Mx3dGeTsf. md) | Transform (Mx3dGeTsf)|

#### Returns

`void`

#### Overrides

[Mx3dGeomElementarySurface](Mx3dGeomElementarySurface.md).[TransformParameters](Mx3dGeomElementarySurface.md#transformparameters)

___

### Transformed

▸ **Transformed**(`T`): [`Mx3dGeomPlane`](Mx3dGeomPlane.md)

Return the transformed new geometric object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|T | [Mx3dGetStrf] (Mx3dGetStrf. md) | Transform the object|

#### Returns

[`Mx3dGeomPlane`](Mx3dGeomPlane.md)

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

▸ **TranslatedBy2Points**(`P1`, `P2`): [`Mx3dGeomPlane`](Mx3dGeomPlane.md)

Return the new geometric object after translating through two points.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|P1 | [Mx3dGePoint] (Mx3dGePoint. md) | Starting point object|
|P2 | [Mx3dGePoint] (Mx3dGePoint. md) | End point object|

#### Returns

[`Mx3dGeomPlane`](Mx3dGeomPlane.md)

New geometric objects.

#### Inherited from

[Mx3dGeomElementarySurface](Mx3dGeomElementarySurface.md).[TranslatedBy2Points](Mx3dGeomElementarySurface.md#translatedby2points)

___

### TranslatedByVec

▸ **TranslatedByVec**(`V`): [`Mx3dGeomPlane`](Mx3dGeomPlane.md)

Return the new geometric object after vector translation.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|V | [Mx3dGeVec] (Mx3dGeVec. md) | Vector object|

#### Returns

[`Mx3dGeomPlane`](Mx3dGeomPlane.md)

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

Flip the direction of the plane in the U parameter direction.

#### Returns

`void`

#### Overrides

[Mx3dGeomElementarySurface](Mx3dGeomElementarySurface.md).[UReverse](Mx3dGeomElementarySurface.md#ureverse)

___

### UReversed

▸ **UReversed**(): [`Mx3dGeomPlane`](Mx3dGeomPlane.md)

Parameterization of reversing the U direction.

#### Returns

[`Mx3dGeomPlane`](Mx3dGeomPlane.md)

Return the current object to implement a chain call.

#### Inherited from

[Mx3dGeomElementarySurface](Mx3dGeomElementarySurface.md).[UReversed](Mx3dGeomElementarySurface.md#ureversed)

___

### UReversedParameter

▸ **UReversedParameter**(`U`): `number`

Calculate the U-parameter value after flipping the U-parameter direction in the plane.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|U | number | The original U parameter|

#### Returns

`number`

Flipped U parameter.

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

Flip the direction of the plane in the direction of the V parameter.

#### Returns

`void`

#### Overrides

[Mx3dGeomElementarySurface](Mx3dGeomElementarySurface.md).[VReverse](Mx3dGeomElementarySurface.md#vreverse)

___

### VReversed

▸ **VReversed**(): [`Mx3dGeomPlane`](Mx3dGeomPlane.md)

Parameterization of reversing the V direction.

#### Returns

[`Mx3dGeomPlane`](Mx3dGeomPlane.md)

Return the current object to implement a chain call.

#### Inherited from

[Mx3dGeomElementarySurface](Mx3dGeomElementarySurface.md).[VReversed](Mx3dGeomElementarySurface.md#vreversed)

___

### VReversedParameter

▸ **VReversedParameter**(`V`): `number`

Calculate the V parameter value after flipping the V parameter direction in the plane.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|V | number | The original V parameter|

#### Returns

`number`

The flipped V parameter.

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

▸ `Static` **DownCast**(`theObject`): [`Mx3dGeomPlane`](Mx3dGeomPlane.md)

Convert parent class object to Mx3dGeomPlane class object

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheObject | [Mx3dGeomObject] (Mx3dGeomObject. md) | Parent class object|

#### Returns

[`Mx3dGeomPlane`](Mx3dGeomPlane.md)

Mx3dGeomPlane class object
