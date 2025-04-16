[mxcad_3d API Document](../README. md)/Mx3dGeomCylindricalSurface

# Class: Mx3dGeomCylindricalSurface

The Mx3dGeomCylindricalSurface class encapsulates the functionality of cylindrical geometry and inherits from Mx3dGeomElementarySurface.

## Hierarchy

- [`Mx3dGeomElementarySurface`](Mx3dGeomElementarySurface.md)

  ↳ **`Mx3dGeomCylindricalSurface`**

## Table of contents

### Constructors

- [constructor](Mx3dGeomCylindricalSurface.md#constructor)

### Methods

- [Axis](Mx3dGeomCylindricalSurface.md#axis)
- [Bounds](Mx3dGeomCylindricalSurface.md#bounds)
- [Coefficients](Mx3dGeomCylindricalSurface.md#coefficients)
- [Continuity](Mx3dGeomCylindricalSurface.md#continuity)
- [Copy](Mx3dGeomCylindricalSurface.md#copy)
- [D0](Mx3dGeomCylindricalSurface.md#d0)
- [D1](Mx3dGeomCylindricalSurface.md#d1)
- [D2](Mx3dGeomCylindricalSurface.md#d2)
- [D3](Mx3dGeomCylindricalSurface.md#d3)
- [DN](Mx3dGeomCylindricalSurface.md#dn)
- [DynamicType](Mx3dGeomCylindricalSurface.md#dynamictype)
- [Face](Mx3dGeomCylindricalSurface.md#face)
- [IsCNu](Mx3dGeomCylindricalSurface.md#iscnu)
- [IsCNv](Mx3dGeomCylindricalSurface.md#iscnv)
- [IsUClosed](Mx3dGeomCylindricalSurface.md#isuclosed)
- [IsUPeriodic](Mx3dGeomCylindricalSurface.md#isuperiodic)
- [IsVClosed](Mx3dGeomCylindricalSurface.md#isvclosed)
- [IsVPeriodic](Mx3dGeomCylindricalSurface.md#isvperiodic)
- [Location](Mx3dGeomCylindricalSurface.md#location)
- [MirrorByAxis](Mx3dGeomCylindricalSurface.md#mirrorbyaxis)
- [MirrorByCSYSR](Mx3dGeomCylindricalSurface.md#mirrorbycsysr)
- [MirrorByPoint](Mx3dGeomCylindricalSurface.md#mirrorbypoint)
- [MirroredByAxis](Mx3dGeomCylindricalSurface.md#mirroredbyaxis)
- [MirroredByCSYSR](Mx3dGeomCylindricalSurface.md#mirroredbycsysr)
- [MirroredByPoint](Mx3dGeomCylindricalSurface.md#mirroredbypoint)
- [Position](Mx3dGeomCylindricalSurface.md#position)
- [Radius](Mx3dGeomCylindricalSurface.md#radius)
- [Rotate](Mx3dGeomCylindricalSurface.md#rotate)
- [Rotated](Mx3dGeomCylindricalSurface.md#rotated)
- [Scale](Mx3dGeomCylindricalSurface.md#scale)
- [Scaled](Mx3dGeomCylindricalSurface.md#scaled)
- [SetAxis](Mx3dGeomCylindricalSurface.md#setaxis)
- [SetLocation](Mx3dGeomCylindricalSurface.md#setlocation)
- [SetPosition](Mx3dGeomCylindricalSurface.md#setposition)
- [SetRadius](Mx3dGeomCylindricalSurface.md#setradius)
- [Transform](Mx3dGeomCylindricalSurface.md#transform)
- [TransformParameters](Mx3dGeomCylindricalSurface.md#transformparameters)
- [Transformed](Mx3dGeomCylindricalSurface.md#transformed)
- [TranslateBy2Points](Mx3dGeomCylindricalSurface.md#translateby2points)
- [TranslateByVec](Mx3dGeomCylindricalSurface.md#translatebyvec)
- [TranslatedBy2Points](Mx3dGeomCylindricalSurface.md#translatedby2points)
- [TranslatedByVec](Mx3dGeomCylindricalSurface.md#translatedbyvec)
- [UPeriod](Mx3dGeomCylindricalSurface.md#uperiod)
- [UReverse](Mx3dGeomCylindricalSurface.md#ureverse)
- [UReversed](Mx3dGeomCylindricalSurface.md#ureversed)
- [UReversedParameter](Mx3dGeomCylindricalSurface.md#ureversedparameter)
- [VPeriod](Mx3dGeomCylindricalSurface.md#vperiod)
- [VReverse](Mx3dGeomCylindricalSurface.md#vreverse)
- [VReversed](Mx3dGeomCylindricalSurface.md#vreversed)
- [VReversedParameter](Mx3dGeomCylindricalSurface.md#vreversedparameter)
- [Value](Mx3dGeomCylindricalSurface.md#value)
- [DownCast](Mx3dGeomCylindricalSurface.md#downcast)

## Constructors

### constructor

• **new Mx3dGeomCylindricalSurface**(`A3`, `Radius`)

Constructor, create a new cylindrical object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|A3 | [Mx3dGeCSYSR] (Mx3dGeCSYSR. md) | Local coordinate system of cylindrical surface|
|Radius | number | The radius of a cylindrical surface|

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

Obtain the parameter range of the cylindrical surface.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|U1U2V1V2 | [dU1: number, dU2: number, dV1: number, dV2: number] | Parameter range [dU1, dU2, dV1, dV2]|

#### Returns

`void`

___

### Coefficients

▸ **Coefficients**(`A1A2A3B1B2B3C1C2C3D`): `void`

Obtain the coefficients of the cylindrical surface equation.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|A1A2A3B1B2B3C1C2C3D | [A1: number, A2: number, A3: number, B1: number, B2: number, B3: number, C1: number, C2: number, C3: number, D: number] | Equation coefficients [A1, A2, A3, B1, B2, B3, C1, C2, C3, D]|

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

Create a copy of the current cylindrical surface.

#### Returns

[`Mx3dGeomObject`](Mx3dGeomObject.md)

Copy of cylindrical surface.

___

### D0

▸ **D0**(`U`, `V`, `P`): `void`

Calculate the position of the current point on the cylindrical surface and its normal vector.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|U | number | parameter U|
|V | number | parameter V|
|P | [Mx3dGePoint] (Mx3dGePoint. md) | The location of the storage point|

#### Returns

`void`

___

### D1

▸ **D1**(`U`, `V`, `P`, `D1U`, `D1V`): `void`

Calculate the position of the current point on the cylindrical surface and its first derivative.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|U | number | parameter U|
|V | number | parameter V|
|P | [Mx3dGePoint] (Mx3dGePoint. md) | The location of the storage point|
|D1U | [Mx3dGeVec] (Mx3dGeVec. md) | Stores the first derivative in the U direction|
|D1V | [Mx3dGeVec] (Mx3dGeVec. md) | Stores the first derivative in the V direction|

#### Returns

`void`

___

### D2

▸ **D2**(`U`, `V`, `P`, `D1U`, `D1V`, `D2U`, `D2V`, `D2UV`): `void`

Calculate the position of the current point on the cylindrical surface and its first and second derivatives.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|U | number | parameter U|
|V | number | parameter V|
|P | [Mx3dGePoint] (Mx3dGePoint. md) | The location of the storage point|
|D1U | [Mx3dGeVec] (Mx3dGeVec. md) | Stores the first derivative in the U direction|
|D1V | [Mx3dGeVec] (Mx3dGeVec. md) | Stores the first derivative in the V direction|
|D2U | [Mx3dGeVec] (Mx3dGeVec. md) | Stores the second derivative in the U direction|
|D2V | [Mx3dGeVec] (Mx3dGeVec. md) | Stores the second derivative in the V direction|
|D2UV | [Mx3dGeVec] (Mx3dGeVec. md) | Stores mixed second-order derivatives in the U and V directions|

#### Returns

`void`

___

### D3

▸ **D3**(`U`, `V`, `P`, `D1U`, `D1V`, `D2U`, `D2V`, `D2UV`, `D3U`, `D3V`, `D3UUV`, `D3UVV`): `void`

Calculate the position of the current point on the cylindrical surface and its first, second, and third derivatives.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|U | number | parameter U|
|V | number | parameter V|
|P | [Mx3dGePoint] (Mx3dGePoint. md) | The location of the storage point|
|D1U | [Mx3dGeVec] (Mx3dGeVec. md) | Stores the first derivative in the U direction|
|D1V | [Mx3dGeVec] (Mx3dGeVec. md) | Stores the first derivative in the V direction|
|D2U | [Mx3dGeVec] (Mx3dGeVec. md) | Stores the second derivative in the U direction|
|D2V | [Mx3dGeVec] (Mx3dGeVec. md) | Stores the second derivative in the V direction|
|D2UV | [Mx3dGeVec] (Mx3dGeVec. md) | Stores mixed second-order derivatives in the U and V directions|
|D3U | [Mx3dGeVec] (Mx3dGeVec. md) | Stores the third derivative in the U direction|
|D3V | [Mx3dGeVec] (Mx3dGeVec. md) | Stores the third derivative in the V direction|
|D3UUV | [Mx3dGeVec] (Mx3dGeVec. md) | Stores mixed third-order derivatives in the U and U directions|
|D3UVV | [Mx3dGeVec] (Mx3dGeVec. md) | Stores mixed third-order derivatives in the U and V directions|

#### Returns

`void`

___

### DN

▸ **DN**(`U`, `V`, `Nu`, `Nv`): [`Mx3dGeVec`](Mx3dGeVec.md)

Calculate the derivative vector of a specified order.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|U | number | parameter U|
|V | number | parameter V|
|Nu | number | The derivative order is in the U direction|
|Nv | number | The derivative order is in the V direction|

#### Returns

[`Mx3dGeVec`](Mx3dGeVec.md)

Derivative vector.

___

### DynamicType

▸ **DynamicType**(): `string`

Retrieve the dynamic type information of the current object.

#### Returns

`string`

The type string of the object.

#### Overrides

[Mx3dGeomElementarySurface](Mx3dGeomElementarySurface.md).[DynamicType](Mx3dGeomElementarySurface.md#dynamictype)

___

### Face

▸ **Face**(`TolDegen`): [`Mx3dShapeFace`](Mx3dShapeFace.md)

Create a cylindrical face object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Tolengen | number | surface degradation tolerance|

#### Returns

[`Mx3dShapeFace`](Mx3dShapeFace.md)

Face object.

▸ **Face**(`W`, `Inside`): [`Mx3dShapeFace`](Mx3dShapeFace.md)

Create a cylindrical face object and specify whether it contains an internal area.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|W | [Mx3dShapeWire] (Mx3dShapeWire. md) | Contour Line|
|Does' Inside '|' boolean '| contain an internal area|

#### Returns

[`Mx3dShapeFace`](Mx3dShapeFace.md)

Face object.

▸ **Face**(`UMin`, `UMax`, `VMin`, `VMax`, `TolDegen`): [`Mx3dShapeFace`](Mx3dShapeFace.md)

Create a cylindrical face object and specify the parameter range.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|UMin | number | The minimum value of parameter U|
|UMax | number | The maximum value of parameter U|
|VMin | number | The minimum value of parameter V|
|VMax | number | The maximum value of parameter V|
|Tolengen | number | surface degradation tolerance|

#### Returns

[`Mx3dShapeFace`](Mx3dShapeFace.md)

Face object.

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

Determine whether the cylindrical surface is closed in the U direction.

#### Returns

`boolean`

If it is closed, return true; otherwise, return false.

___

### IsUPeriodic

▸ **IsUPeriodic**(): `boolean`

Determine whether the cylindrical surface is periodic in the U direction.

#### Returns

`boolean`

If it is periodic, return true; otherwise, return false.

___

### IsVClosed

▸ **IsVClosed**(): `boolean`

Determine whether the cylindrical surface is closed in the V direction.

#### Returns

`boolean`

If it is closed, return true; otherwise, return false.

___

### IsVPeriodic

▸ **IsVPeriodic**(): `boolean`

Determine whether the cylindrical surface is periodic in the V direction.

#### Returns

`boolean`

If it is periodic, return true; otherwise, return false.

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

▸ **MirroredByAxis**(`A1`): [`Mx3dGeomCylindricalSurface`](Mx3dGeomCylindricalSurface.md)

Return the new geometric object transformed through axis mirroring.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|A1 | [Mx3dGeAxis] (Mx3dGeAxis. md) | Axis object|

#### Returns

[`Mx3dGeomCylindricalSurface`](Mx3dGeomCylindricalSurface.md)

New geometric objects.

#### Inherited from

[Mx3dGeomElementarySurface](Mx3dGeomElementarySurface.md).[MirroredByAxis](Mx3dGeomElementarySurface.md#mirroredbyaxis)

___

### MirroredByCSYSR

▸ **MirroredByCSYSR**(`A2`): [`Mx3dGeomCylindricalSurface`](Mx3dGeomCylindricalSurface.md)

Return the new geometric object after mirror transformation through the right-handed coordinate system.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|A2 | [Mx3dGeCSYSR] (Mx3dGeCSYSR. md) | Right hand coordinate system object|

#### Returns

[`Mx3dGeomCylindricalSurface`](Mx3dGeomCylindricalSurface.md)

New geometric objects.

#### Inherited from

[Mx3dGeomElementarySurface](Mx3dGeomElementarySurface.md).[MirroredByCSYSR](Mx3dGeomElementarySurface.md#mirroredbycsysr)

___

### MirroredByPoint

▸ **MirroredByPoint**(`P`): [`Mx3dGeomCylindricalSurface`](Mx3dGeomCylindricalSurface.md)

Return the new geometric object after point mirror transformation.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|P | [Mx3dGePoint] (Mx3dGePoint. md) | Point object|

#### Returns

[`Mx3dGeomCylindricalSurface`](Mx3dGeomCylindricalSurface.md)

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

Return the radius of the cylindrical surface.

#### Returns

`number`

Radius value.

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

▸ **Rotated**(`A1`, `Ang`): [`Mx3dGeomCylindricalSurface`](Mx3dGeomCylindricalSurface.md)

Return the rotated new geometric object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|A1 | [Mx3dGeAxis] (Mx3dGeAxis. md) | Axis object|
|Ang | number | Rotation angle|

#### Returns

[`Mx3dGeomCylindricalSurface`](Mx3dGeomCylindricalSurface.md)

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

▸ **Scaled**(`P`, `S`): [`Mx3dGeomCylindricalSurface`](Mx3dGeomCylindricalSurface.md)

Return the scaled new geometric object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|P | [Mx3dGePoint] (Mx3dGePoint. md) | Point object|
|S | number | scaling ratio|

#### Returns

[`Mx3dGeomCylindricalSurface`](Mx3dGeomCylindricalSurface.md)

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

Set the radius of the cylindrical surface.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|R | number | New radius value|

#### Returns

`void`

___

### Transform

▸ **Transform**(`T`): `void`

Apply the transformation T to a cylindrical surface.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|T | [Mx3dGetStrf] (Mx3dGetStrf. md) | Transform matrix|

#### Returns

`void`

___

### TransformParameters

▸ **TransformParameters**(`UV`, `T`): `void`

Transform parameters U and V.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|UV | [dU: number, dV: number] | Original parameter [dU, dV]|
|T | [Mx3dGetStrf] (Mx3dGetStrf. md) | Transform matrix|

#### Returns

`void`

#### Overrides

[Mx3dGeomElementarySurface](Mx3dGeomElementarySurface.md).[TransformParameters](Mx3dGeomElementarySurface.md#transformparameters)

___

### Transformed

▸ **Transformed**(`T`): [`Mx3dGeomCylindricalSurface`](Mx3dGeomCylindricalSurface.md)

Return the transformed new geometric object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|T | [Mx3dGetStrf] (Mx3dGetStrf. md) | Transform the object|

#### Returns

[`Mx3dGeomCylindricalSurface`](Mx3dGeomCylindricalSurface.md)

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

▸ **TranslatedBy2Points**(`P1`, `P2`): [`Mx3dGeomCylindricalSurface`](Mx3dGeomCylindricalSurface.md)

Return the new geometric object after translating through two points.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|P1 | [Mx3dGePoint] (Mx3dGePoint. md) | Starting point object|
|P2 | [Mx3dGePoint] (Mx3dGePoint. md) | End point object|

#### Returns

[`Mx3dGeomCylindricalSurface`](Mx3dGeomCylindricalSurface.md)

New geometric objects.

#### Inherited from

[Mx3dGeomElementarySurface](Mx3dGeomElementarySurface.md).[TranslatedBy2Points](Mx3dGeomElementarySurface.md#translatedby2points)

___

### TranslatedByVec

▸ **TranslatedByVec**(`V`): [`Mx3dGeomCylindricalSurface`](Mx3dGeomCylindricalSurface.md)

Return the new geometric object after vector translation.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|V | [Mx3dGeVec] (Mx3dGeVec. md) | Vector object|

#### Returns

[`Mx3dGeomCylindricalSurface`](Mx3dGeomCylindricalSurface.md)

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

▸ **UReversed**(): [`Mx3dGeomCylindricalSurface`](Mx3dGeomCylindricalSurface.md)

Parameterization of reversing the U direction.

#### Returns

[`Mx3dGeomCylindricalSurface`](Mx3dGeomCylindricalSurface.md)

Return the current object to implement a chain call.

#### Inherited from

[Mx3dGeomElementarySurface](Mx3dGeomElementarySurface.md).[UReversed](Mx3dGeomElementarySurface.md#ureversed)

___

### UReversedParameter

▸ **UReversedParameter**(`U`): `number`

Return the corresponding parameter value of parameter U on the reverse cylindrical surface.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|U | number | parameter U|

#### Returns

`number`

Reverse parameter value.

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

▸ **VReversed**(): [`Mx3dGeomCylindricalSurface`](Mx3dGeomCylindricalSurface.md)

Parameterization of reversing the V direction.

#### Returns

[`Mx3dGeomCylindricalSurface`](Mx3dGeomCylindricalSurface.md)

Return the current object to implement a chain call.

#### Inherited from

[Mx3dGeomElementarySurface](Mx3dGeomElementarySurface.md).[VReversed](Mx3dGeomElementarySurface.md#vreversed)

___

### VReversedParameter

▸ **VReversedParameter**(`V`): `number`

Return the corresponding parameter value of parameter V on the reverse cylindrical surface.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|V | number | parameter V|

#### Returns

`number`

Reverse parameter value.

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

▸ `Static` **DownCast**(`theObject`): [`Mx3dGeomCylindricalSurface`](Mx3dGeomCylindricalSurface.md)

Convert parent object to Mx3dGeomCylindricalSurface class object

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheObject | [Mx3dGeomObject] (Mx3dGeomObject. md) | Parent class object|

#### Returns

[`Mx3dGeomCylindricalSurface`](Mx3dGeomCylindricalSurface.md)

Mx3dGeomCylindricalSurface class object
