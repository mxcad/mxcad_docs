[mxcad_3d API Document](../README. md)/Mx3dGePlane

# Class: Mx3dGePlane

Represents a plane in 3D geometry.
Plane objects can be defined in various ways such as coordinate systems, points, direction vectors, etc., and provide multiple geometric transformations and operation methods.

## Hierarchy

- [`Mx3dGeObject`](Mx3dGeObject.md)

  ↳ **`Mx3dGePlane`**

## Table of contents

### Constructors

- [constructor](Mx3dGePlane.md#constructor)

### Methods

- [Axis](Mx3dGePlane.md#axis)
- [Contains](Mx3dGePlane.md#contains)
- [Direct](Mx3dGePlane.md#direct)
- [DistanceToPlane](Mx3dGePlane.md#distancetoplane)
- [DistanceToPoint](Mx3dGePlane.md#distancetopoint)
- [Location](Mx3dGePlane.md#location)
- [MirrorByAxis](Mx3dGePlane.md#mirrorbyaxis)
- [MirrorByCSYSR](Mx3dGePlane.md#mirrorbycsysr)
- [MirrorByPoint](Mx3dGePlane.md#mirrorbypoint)
- [MirroredByAxis](Mx3dGePlane.md#mirroredbyaxis)
- [MirroredByCSYSR](Mx3dGePlane.md#mirroredbycsysr)
- [MirroredByPoint](Mx3dGePlane.md#mirroredbypoint)
- [Position](Mx3dGePlane.md#position)
- [Rotate](Mx3dGePlane.md#rotate)
- [Rotated](Mx3dGePlane.md#rotated)
- [Scale](Mx3dGePlane.md#scale)
- [Scaled](Mx3dGePlane.md#scaled)
- [SetAxis](Mx3dGePlane.md#setaxis)
- [SetLocation](Mx3dGePlane.md#setlocation)
- [SetPosition](Mx3dGePlane.md#setposition)
- [Shape](Mx3dGePlane.md#shape)
- [SquareDistanceToPlane](Mx3dGePlane.md#squaredistancetoplane)
- [SquareDistanceToPoint](Mx3dGePlane.md#squaredistancetopoint)
- [Transform](Mx3dGePlane.md#transform)
- [Transformed](Mx3dGePlane.md#transformed)
- [TranslateBy2Points](Mx3dGePlane.md#translateby2points)
- [TranslateByVec](Mx3dGePlane.md#translatebyvec)
- [TranslatedBy2Points](Mx3dGePlane.md#translatedby2points)
- [TranslatedByVec](Mx3dGePlane.md#translatedbyvec)
- [UReverse](Mx3dGePlane.md#ureverse)
- [VReverse](Mx3dGePlane.md#vreverse)
- [XAxis](Mx3dGePlane.md#xaxis)
- [YAxis](Mx3dGePlane.md#yaxis)

## Constructors

### constructor

• **new Mx3dGePlane**()

The default constructor creates a plane.

#### Overrides

Mx3dGeObject.constructor

• **new Mx3dGePlane**(`theA3`)

Constructor, initializes the plane using the specified coordinate system.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheA3 | [Mx3dGeCSYS] (Mx3dGeCSYS. md) | Used to initialize the coordinate system (CSYS) object of the plane|

#### Overrides

Mx3dGeObject.constructor

• **new Mx3dGePlane**(`theP`, `theV`)

Constructor, initializes a plane using specified points and vectors.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheP | [Mx3dGePoint] (Mx3dGePoint. md) | Point on the plane|
|TheV | [Mx3dGeDir] (Mx3dGeDir. md) | A vector perpendicular to the plane, used to define the direction of the plane|

#### Overrides

Mx3dGeObject.constructor

• **new Mx3dGePlane**(`theA`, `theB`, `theC`, `theD`)

Constructor, initialize the plane using the coefficients of the plane equation.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|The coefficient A in the plane equation|
|The coefficient B in the plane equation|
|The coefficient C in the plane equation|
|The coefficient D in the plane equation|

#### Overrides

Mx3dGeObject.constructor

## Methods

### Axis

▸ **Axis**(): [`Mx3dGeAxis`](Mx3dGeAxis.md)

Obtain the normal axis of the plane.

#### Returns

[`Mx3dGeAxis`](Mx3dGeAxis.md)

The normal axial object of a plane.

___

### Contains

▸ **Contains**(`theP`, `theLinearTolerance`): `boolean`

Check if the checkpoint is on the plane.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheP | [Mx3dGePoint] (Mx3dGePoint. md) | Points that need to be checked|
|The LinearTolerance | number | Linear tolerance is used to determine whether a point is on a plane|

#### Returns

`boolean`

If the point is on a plane, return true; Otherwise, return false.

___

### Direct

▸ **Direct**(): `boolean`

Check if the plane is in a right-handed coordinate system.

#### Returns

`boolean`

If the plane is a right-handed coordinate system, return true; Otherwise, return false.

___

### DistanceToPlane

▸ **DistanceToPlane**(`theOther`): `number`

Calculate the distance between two planes.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|` theOther ` | [` Mx3dGePlane `] (Mx3dGePlane. md) | Another planar object|

#### Returns

`number`

The distance value between two planes.

___

### DistanceToPoint

▸ **DistanceToPoint**(`theP`): `number`

Calculate the distance from a point to a plane.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheP | [Mx3dGePoint] (Mx3dGePoint. md) | Points that require distance calculation|

#### Returns

`number`

The distance value from the point to the plane.

___

### Location

▸ **Location**(): [`Mx3dGePoint`](Mx3dGePoint.md)

Obtain the position point on the plane.

#### Returns

[`Mx3dGePoint`](Mx3dGePoint.md)

Point objects on a plane.

___

### MirrorByAxis

▸ **MirrorByAxis**(`theA1`): `void`

Mirror the plane through the specified axis.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheA1 | [Mx3dGeAxis] (Mx3dGeAxis. md) | Mirror axis|

#### Returns

`void`

___

### MirrorByCSYSR

▸ **MirrorByCSYSR**(`theA2`): `void`

Mirror the plane through the specified coordinate system.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheA2 | [Mx3dGeCSYSR] (Mx3dGeCSYSR. md) | Mirror coordinate system|

#### Returns

`void`

___

### MirrorByPoint

▸ **MirrorByPoint**(`theP`): `void`

Mirror the plane through a specified point.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheP | [Mx3dGePoint] (Mx3dGePoint. md) | Mirror point|

#### Returns

`void`

___

### MirroredByAxis

▸ **MirroredByAxis**(`theA1`): [`Mx3dGePlane`](Mx3dGePlane.md)

Return the mirrored plane object (by specifying the axis).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheA1 | [Mx3dGeAxis] (Mx3dGeAxis. md) | Mirror axis|

#### Returns

[`Mx3dGePlane`](Mx3dGePlane.md)

The mirrored planar object.

___

### MirroredByCSYSR

▸ **MirroredByCSYSR**(`theA2`): [`Mx3dGePlane`](Mx3dGePlane.md)

Return the mirrored plane object (by specifying the coordinate system).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheA2 | [Mx3dGeCSYSR] (Mx3dGeCSYSR. md) | Mirror coordinate system|

#### Returns

[`Mx3dGePlane`](Mx3dGePlane.md)

The mirrored planar object.

___

### MirroredByPoint

▸ **MirroredByPoint**(`theP`): [`Mx3dGePlane`](Mx3dGePlane.md)

Return the mirrored plane object (by specifying a point).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheP | [Mx3dGePoint] (Mx3dGePoint. md) | Mirror point|

#### Returns

[`Mx3dGePlane`](Mx3dGePlane.md)

The mirrored planar object.

___

### Position

▸ **Position**(): [`Mx3dGeCSYS`](Mx3dGeCSYS.md)

Obtain the coordinate system position of the plane.

#### Returns

[`Mx3dGeCSYS`](Mx3dGeCSYS.md)

The coordinate system object of a plane.

___

### Rotate

▸ **Rotate**(`theA1`, `theAng`): `void`

Rotate the plane around the specified axis.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheA1 | [Mx3dGeAxis] (Mx3dGeAxis. md) | Rotation axis|
|TheAng | Number | Rotation angle|

#### Returns

`void`

___

### Rotated

▸ **Rotated**(`theA1`, `theAng`): [`Mx3dGePlane`](Mx3dGePlane.md)

Return the rotated planar object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheA1 | [Mx3dGeAxis] (Mx3dGeAxis. md) | Rotation axis|
|TheAng | Number | Rotation angle|

#### Returns

[`Mx3dGePlane`](Mx3dGePlane.md)

The rotated planar object.

___

### Scale

▸ **Scale**(`theP`, `theS`): `void`

Scale the plane to a specified point and scale.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheP | [Mx3dGePoint] (Mx3dGePoint. md) | Zoom point|
|TheS | Number | Scale ratio|

#### Returns

`void`

___

### Scaled

▸ **Scaled**(`theP`, `theS`): [`Mx3dGePlane`](Mx3dGePlane.md)

Return the scaled planar object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheP | [Mx3dGePoint] (Mx3dGePoint. md) | Zoom point|
|TheS | Number | Scale ratio|

#### Returns

[`Mx3dGePlane`](Mx3dGePlane.md)

The scaled planar object.

___

### SetAxis

▸ **SetAxis**(`theA1`): `void`

Set the axis of the plane.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheA1 | [Mx3dGeAxis] (Mx3dGeAxis. md) | Plane axial object|

#### Returns

`void`

___

### SetLocation

▸ **SetLocation**(`theLoc`): `void`

Set the position of the plane.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheLoc | [Mx3dGePoint. md] | A point on a plane used to define the specific position of the plane|

#### Returns

`void`

___

### SetPosition

▸ **SetPosition**(`theA3`): `void`

Set the position and orientation of the plane.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheA3 | [Mx3dGeCSYS] (Mx3dGeCSYS. md) | Used to set the coordinate system for plane position and orientation|

#### Returns

`void`

___

### Shape

▸ **Shape**(): [`Mx3dShapeObject`](Mx3dShapeObject.md)

Obtain the topological shape of the plane.

#### Returns

[`Mx3dShapeObject`](Mx3dShapeObject.md)

Flat shaped object.

▸ **Shape**(`UMin`, `UMax`, `VMin`, `VMax`): [`Mx3dShapeObject`](Mx3dShapeObject.md)

Obtain the topological shape of the plane within the specified range.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|UMin | number | The minimum value in the U direction|
|UMax | number | maximum value in the U direction|
|VMin | number | minimum value in the V direction|
|VMax | number | maximum value in the V direction|

#### Returns

[`Mx3dShapeObject`](Mx3dShapeObject.md)

Flat shaped object.

___

### SquareDistanceToPlane

▸ **SquareDistanceToPlane**(`theOther`): `number`

Calculate the square distance between two planes.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|` theOther ` | [` Mx3dGePlane `] (Mx3dGePlane. md) | Another planar object|

#### Returns

`number`

The square distance value between two planes.

___

### SquareDistanceToPoint

▸ **SquareDistanceToPoint**(`theP`): `number`

Calculate the square distance from a point to a plane.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheP | [Mx3dGePoint] (Mx3dGePoint. md) | Points that require square distance calculation|

#### Returns

`number`

The square distance value from a point to a plane.

___

### Transform

▸ **Transform**(`theT`): `void`

Apply transformations to the plane.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|` theT ` | [` Mx3dGeTsf `] (Mx3dGeTsf. md) | Transform matrix|

#### Returns

`void`

___

### Transformed

▸ **Transformed**(`theT`): [`Mx3dGePlane`](Mx3dGePlane.md)

Return the transformed planar object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|` theT ` | [` Mx3dGeTsf `] (Mx3dGeTsf. md) | Transform matrix|

#### Returns

[`Mx3dGePlane`](Mx3dGePlane.md)

The transformed planar object.

___

### TranslateBy2Points

▸ **TranslateBy2Points**(`theP1`, `theP2`): `void`

Translate the plane through two points.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheP1 | [Mx3dGePoint] (Mx3dGePoint. md) | The first point|
|TheP2 | [Mx3dGePoint] (Mx3dGePoint. md) | Second point|

#### Returns

`void`

___

### TranslateByVec

▸ **TranslateByVec**(`theV`): `void`

Translate the plane along the specified vector.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheV | [Mx3dGeVec] (Mx3dGeVec. md) | Translation vector|

#### Returns

`void`

___

### TranslatedBy2Points

▸ **TranslatedBy2Points**(`theP1`, `theP2`): [`Mx3dGePlane`](Mx3dGePlane.md)

Return the planar object after two-point translation.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheP1 | [Mx3dGePoint] (Mx3dGePoint. md) | The first point|
|TheP2 | [Mx3dGePoint] (Mx3dGePoint. md) | Second point|

#### Returns

[`Mx3dGePlane`](Mx3dGePlane.md)

Translated planar object.

___

### TranslatedByVec

▸ **TranslatedByVec**(`theV`): [`Mx3dGePlane`](Mx3dGePlane.md)

Return the translated planar object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheV | [Mx3dGeVec] (Mx3dGeVec. md) | Translation vector|

#### Returns

[`Mx3dGePlane`](Mx3dGePlane.md)

Translated planar object.

___

### UReverse

▸ **UReverse**(): `void`

Reverse the U direction.

#### Returns

`void`

___

### VReverse

▸ **VReverse**(): `void`

Reverse the direction of V.

#### Returns

`void`

___

### XAxis

▸ **XAxis**(): [`Mx3dGeAxis`](Mx3dGeAxis.md)

Obtain the direction of the plane's X-axis.

#### Returns

[`Mx3dGeAxis`](Mx3dGeAxis.md)

The axial object of the plane X-axis.

___

### YAxis

▸ **YAxis**(): [`Mx3dGeAxis`](Mx3dGeAxis.md)

Obtain the direction of the Y-axis of the plane.

#### Returns

[`Mx3dGeAxis`](Mx3dGeAxis.md)

The axial object of the plane Y-axis.
