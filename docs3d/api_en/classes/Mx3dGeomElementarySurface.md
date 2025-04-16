[mxcad_3d API Document](../README. md)/Mx3dGeomElementarySurface

# Class: Mx3dGeomElementarySurface

The Mx3dGeomElementarySurface class encapsulates the Elementary Surface class and provides an interface for operating on surfaces with simple parameter equations.
These surfaces include planes, cylinders, cones, spheres, etc. This class inherits from Mx3dGeomSurface and extends related geometric operation functions.

## Hierarchy

- [`Mx3dGeomSurface`](Mx3dGeomSurface.md)

  ↳ **`Mx3dGeomElementarySurface`**

  ↳↳ [`Mx3dGeomPlane`](Mx3dGeomPlane.md)

  ↳↳ [`Mx3dGeomConicalSurface`](Mx3dGeomConicalSurface.md)

  ↳↳ [`Mx3dGeomCylindricalSurface`](Mx3dGeomCylindricalSurface.md)

  ↳↳ [`Mx3dGeomSphericalSurface`](Mx3dGeomSphericalSurface.md)

  ↳↳ [`Mx3dGeomToroidalSurface`](Mx3dGeomToroidalSurface.md)

## Table of contents

### Methods

- [Axis](Mx3dGeomElementarySurface.md#axis)
- [Continuity](Mx3dGeomElementarySurface.md#continuity)
- [DynCast](Mx3dGeomElementarySurface.md#dyncast)
- [DynamicType](Mx3dGeomElementarySurface.md#dynamictype)
- [IsCNu](Mx3dGeomElementarySurface.md#iscnu)
- [IsCNv](Mx3dGeomElementarySurface.md#iscnv)
- [Location](Mx3dGeomElementarySurface.md#location)
- [MirrorByAxis](Mx3dGeomElementarySurface.md#mirrorbyaxis)
- [MirrorByCSYSR](Mx3dGeomElementarySurface.md#mirrorbycsysr)
- [MirrorByPoint](Mx3dGeomElementarySurface.md#mirrorbypoint)
- [MirroredByAxis](Mx3dGeomElementarySurface.md#mirroredbyaxis)
- [MirroredByCSYSR](Mx3dGeomElementarySurface.md#mirroredbycsysr)
- [MirroredByPoint](Mx3dGeomElementarySurface.md#mirroredbypoint)
- [Position](Mx3dGeomElementarySurface.md#position)
- [Rotate](Mx3dGeomElementarySurface.md#rotate)
- [Rotated](Mx3dGeomElementarySurface.md#rotated)
- [Scale](Mx3dGeomElementarySurface.md#scale)
- [Scaled](Mx3dGeomElementarySurface.md#scaled)
- [SetAxis](Mx3dGeomElementarySurface.md#setaxis)
- [SetLocation](Mx3dGeomElementarySurface.md#setlocation)
- [SetPosition](Mx3dGeomElementarySurface.md#setposition)
- [TransformParameters](Mx3dGeomElementarySurface.md#transformparameters)
- [Transformed](Mx3dGeomElementarySurface.md#transformed)
- [TranslateBy2Points](Mx3dGeomElementarySurface.md#translateby2points)
- [TranslateByVec](Mx3dGeomElementarySurface.md#translatebyvec)
- [TranslatedBy2Points](Mx3dGeomElementarySurface.md#translatedby2points)
- [TranslatedByVec](Mx3dGeomElementarySurface.md#translatedbyvec)
- [UPeriod](Mx3dGeomElementarySurface.md#uperiod)
- [UReverse](Mx3dGeomElementarySurface.md#ureverse)
- [UReversed](Mx3dGeomElementarySurface.md#ureversed)
- [VPeriod](Mx3dGeomElementarySurface.md#vperiod)
- [VReverse](Mx3dGeomElementarySurface.md#vreverse)
- [VReversed](Mx3dGeomElementarySurface.md#vreversed)
- [Value](Mx3dGeomElementarySurface.md#value)

## Methods

### Axis

▸ **Axis**(): [`Mx3dGeAxis`](Mx3dGeAxis.md)

Obtain the main axis (Z-axis) of the surface.

#### Returns

[`Mx3dGeAxis`](Mx3dGeAxis.md)

Definition of the main axis on the surface.

___

### Continuity

▸ **Continuity**(): [`MxGAShapeEnum`](../enums/MdGe.MxGAShapeEnum.md)

Return the global continuity of the surface (MxGAShapeenum).

#### Returns

[`MxGAShapeEnum`](../enums/MdGe.MxGAShapeEnum.md)

The continuity of the surface on a global scale.

___

### DynCast

▸ **DynCast**(`theObject`): [`Mx3dGeomElementarySurface`](Mx3dGeomElementarySurface.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theObject` | [`Mx3dGeomObject`](Mx3dGeomObject.md) |

#### Returns

[`Mx3dGeomElementarySurface`](Mx3dGeomElementarySurface.md)

#### Inherited from

[Mx3dGeomSurface](Mx3dGeomSurface.md).[DynCast](Mx3dGeomSurface.md#dyncast)

___

### DynamicType

▸ **DynamicType**(): `string`

Return the dynamic type name of the object.

#### Returns

`string`

The type name string of the object.

#### Overrides

[Mx3dGeomSurface](Mx3dGeomSurface.md).[DynamicType](Mx3dGeomSurface.md#dynamictype)

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

___

### Location

▸ **Location**(): [`Mx3dGePoint`](Mx3dGePoint.md)

Obtain the position points of the local coordinate system on the surface.

#### Returns

[`Mx3dGePoint`](Mx3dGePoint.md)

Surface location points.

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

[Mx3dGeomSurface](Mx3dGeomSurface.md).[MirrorByAxis](Mx3dGeomSurface.md#mirrorbyaxis)

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

[Mx3dGeomSurface](Mx3dGeomSurface.md).[MirrorByCSYSR](Mx3dGeomSurface.md#mirrorbycsysr)

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

[Mx3dGeomSurface](Mx3dGeomSurface.md).[MirrorByPoint](Mx3dGeomSurface.md#mirrorbypoint)

___

### MirroredByAxis

▸ **MirroredByAxis**(`A1`): [`Mx3dGeomElementarySurface`](Mx3dGeomElementarySurface.md)

Return the new geometric object transformed through axis mirroring.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|A1 | [Mx3dGeAxis] (Mx3dGeAxis. md) | Axis object|

#### Returns

[`Mx3dGeomElementarySurface`](Mx3dGeomElementarySurface.md)

New geometric objects.

#### Inherited from

[Mx3dGeomSurface](Mx3dGeomSurface.md).[MirroredByAxis](Mx3dGeomSurface.md#mirroredbyaxis)

___

### MirroredByCSYSR

▸ **MirroredByCSYSR**(`A2`): [`Mx3dGeomElementarySurface`](Mx3dGeomElementarySurface.md)

Return the new geometric object after mirror transformation through the right-handed coordinate system.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|A2 | [Mx3dGeCSYSR] (Mx3dGeCSYSR. md) | Right hand coordinate system object|

#### Returns

[`Mx3dGeomElementarySurface`](Mx3dGeomElementarySurface.md)

New geometric objects.

#### Inherited from

[Mx3dGeomSurface](Mx3dGeomSurface.md).[MirroredByCSYSR](Mx3dGeomSurface.md#mirroredbycsysr)

___

### MirroredByPoint

▸ **MirroredByPoint**(`P`): [`Mx3dGeomElementarySurface`](Mx3dGeomElementarySurface.md)

Return the new geometric object after point mirror transformation.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|P | [Mx3dGePoint] (Mx3dGePoint. md) | Point object|

#### Returns

[`Mx3dGeomElementarySurface`](Mx3dGeomElementarySurface.md)

New geometric objects.

#### Inherited from

[Mx3dGeomSurface](Mx3dGeomSurface.md).[MirroredByPoint](Mx3dGeomSurface.md#mirroredbypoint)

___

### Position

▸ **Position**(): [`Mx3dGeCSYSR`](Mx3dGeCSYSR.md)

Obtain the local coordinate system of the surface.

#### Returns

[`Mx3dGeCSYSR`](Mx3dGeCSYSR.md)

The local coordinate system of the surface.

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

[Mx3dGeomSurface](Mx3dGeomSurface.md).[Rotate](Mx3dGeomSurface.md#rotate)

___

### Rotated

▸ **Rotated**(`A1`, `Ang`): [`Mx3dGeomElementarySurface`](Mx3dGeomElementarySurface.md)

Return the rotated new geometric object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|A1 | [Mx3dGeAxis] (Mx3dGeAxis. md) | Axis object|
|Ang | number | Rotation angle|

#### Returns

[`Mx3dGeomElementarySurface`](Mx3dGeomElementarySurface.md)

New geometric objects.

#### Inherited from

[Mx3dGeomSurface](Mx3dGeomSurface.md).[Rotated](Mx3dGeomSurface.md#rotated)

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

[Mx3dGeomSurface](Mx3dGeomSurface.md).[Scale](Mx3dGeomSurface.md#scale)

___

### Scaled

▸ **Scaled**(`P`, `S`): [`Mx3dGeomElementarySurface`](Mx3dGeomElementarySurface.md)

Return the scaled new geometric object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|P | [Mx3dGePoint] (Mx3dGePoint. md) | Point object|
|S | number | scaling ratio|

#### Returns

[`Mx3dGeomElementarySurface`](Mx3dGeomElementarySurface.md)

New geometric objects.

#### Inherited from

[Mx3dGeomSurface](Mx3dGeomSurface.md).[Scaled](Mx3dGeomSurface.md#scaled)

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

[Mx3dGeomSurface](Mx3dGeomSurface.md).[TransformParameters](Mx3dGeomSurface.md#transformparameters)

___

### Transformed

▸ **Transformed**(`T`): [`Mx3dGeomElementarySurface`](Mx3dGeomElementarySurface.md)

Return the transformed new geometric object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|T | [Mx3dGetStrf] (Mx3dGetStrf. md) | Transform the object|

#### Returns

[`Mx3dGeomElementarySurface`](Mx3dGeomElementarySurface.md)

New geometric objects.

#### Inherited from

[Mx3dGeomSurface](Mx3dGeomSurface.md).[Transformed](Mx3dGeomSurface.md#transformed)

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

[Mx3dGeomSurface](Mx3dGeomSurface.md).[TranslateBy2Points](Mx3dGeomSurface.md#translateby2points)

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

[Mx3dGeomSurface](Mx3dGeomSurface.md).[TranslateByVec](Mx3dGeomSurface.md#translatebyvec)

___

### TranslatedBy2Points

▸ **TranslatedBy2Points**(`P1`, `P2`): [`Mx3dGeomElementarySurface`](Mx3dGeomElementarySurface.md)

Return the new geometric object after translating through two points.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|P1 | [Mx3dGePoint] (Mx3dGePoint. md) | Starting point object|
|P2 | [Mx3dGePoint] (Mx3dGePoint. md) | End point object|

#### Returns

[`Mx3dGeomElementarySurface`](Mx3dGeomElementarySurface.md)

New geometric objects.

#### Inherited from

[Mx3dGeomSurface](Mx3dGeomSurface.md).[TranslatedBy2Points](Mx3dGeomSurface.md#translatedby2points)

___

### TranslatedByVec

▸ **TranslatedByVec**(`V`): [`Mx3dGeomElementarySurface`](Mx3dGeomElementarySurface.md)

Return the new geometric object after vector translation.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|V | [Mx3dGeVec] (Mx3dGeVec. md) | Vector object|

#### Returns

[`Mx3dGeomElementarySurface`](Mx3dGeomElementarySurface.md)

New geometric objects.

#### Inherited from

[Mx3dGeomSurface](Mx3dGeomSurface.md).[TranslatedByVec](Mx3dGeomSurface.md#translatedbyvec)

___

### UPeriod

▸ **UPeriod**(): `number`

Return the period of the surface in the U direction.

#### Returns

`number`

The period of the surface in the U direction.

#### Inherited from

[Mx3dGeomSurface](Mx3dGeomSurface.md).[UPeriod](Mx3dGeomSurface.md#uperiod)

___

### UReverse

▸ **UReverse**(): `void`

Reverse the parameterization direction of the surface in the U parameter direction.

#### Returns

`void`

___

### UReversed

▸ **UReversed**(): [`Mx3dGeomElementarySurface`](Mx3dGeomElementarySurface.md)

Parameterization of reversing the U direction.

#### Returns

[`Mx3dGeomElementarySurface`](Mx3dGeomElementarySurface.md)

Return the current object to implement a chain call.

#### Inherited from

[Mx3dGeomSurface](Mx3dGeomSurface.md).[UReversed](Mx3dGeomSurface.md#ureversed)

___

### VPeriod

▸ **VPeriod**(): `number`

Return the period of the surface in the V direction.

#### Returns

`number`

The period of the surface in the V direction.

#### Inherited from

[Mx3dGeomSurface](Mx3dGeomSurface.md).[VPeriod](Mx3dGeomSurface.md#vperiod)

___

### VReverse

▸ **VReverse**(): `void`

Reverse the parameterization direction of the surface in the V parameter direction.

#### Returns

`void`

___

### VReversed

▸ **VReversed**(): [`Mx3dGeomElementarySurface`](Mx3dGeomElementarySurface.md)

Parameterization of reversing the V direction.

#### Returns

[`Mx3dGeomElementarySurface`](Mx3dGeomElementarySurface.md)

Return the current object to implement a chain call.

#### Inherited from

[Mx3dGeomSurface](Mx3dGeomSurface.md).[VReversed](Mx3dGeomSurface.md#vreversed)

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

[Mx3dGeomSurface](Mx3dGeomSurface.md).[Value](Mx3dGeomSurface.md#value)
