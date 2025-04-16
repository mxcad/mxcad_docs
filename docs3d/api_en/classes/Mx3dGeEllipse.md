[mxcad_3d API Document](../README. md)/Mx3dGeEclipse

# Class: Mx3dGeEllipse

Represents an elliptical object in three-dimensional space, inherited from the Mx3dGeObject class.
Supports constructing ellipses with different parameters and provides rich attribute access and operation methods.

## Hierarchy

- [`Mx3dGeObject`](Mx3dGeObject.md)

  ↳ **`Mx3dGeEllipse`**

## Table of contents

### Constructors

- [constructor](Mx3dGeEllipse.md#constructor)

### Methods

- [Area](Mx3dGeEllipse.md#area)
- [Axis](Mx3dGeEllipse.md#axis)
- [Directrix1](Mx3dGeEllipse.md#directrix1)
- [Directrix2](Mx3dGeEllipse.md#directrix2)
- [Eccentricity](Mx3dGeEllipse.md#eccentricity)
- [Focal](Mx3dGeEllipse.md#focal)
- [Focus1](Mx3dGeEllipse.md#focus1)
- [Focus2](Mx3dGeEllipse.md#focus2)
- [Location](Mx3dGeEllipse.md#location)
- [MajorRadius](Mx3dGeEllipse.md#majorradius)
- [MinorRadius](Mx3dGeEllipse.md#minorradius)
- [MirrorByAxis](Mx3dGeEllipse.md#mirrorbyaxis)
- [MirrorByCSYSR](Mx3dGeEllipse.md#mirrorbycsysr)
- [MirrorByPoint](Mx3dGeEllipse.md#mirrorbypoint)
- [MirroredByAxis](Mx3dGeEllipse.md#mirroredbyaxis)
- [MirroredByCSYSR](Mx3dGeEllipse.md#mirroredbycsysr)
- [MirroredByPoint](Mx3dGeEllipse.md#mirroredbypoint)
- [Parameter](Mx3dGeEllipse.md#parameter)
- [Position](Mx3dGeEllipse.md#position)
- [Rotate](Mx3dGeEllipse.md#rotate)
- [Rotated](Mx3dGeEllipse.md#rotated)
- [Scale](Mx3dGeEllipse.md#scale)
- [Scaled](Mx3dGeEllipse.md#scaled)
- [SetAxis](Mx3dGeEllipse.md#setaxis)
- [SetLocation](Mx3dGeEllipse.md#setlocation)
- [SetMajorRadius](Mx3dGeEllipse.md#setmajorradius)
- [SetMinorRadius](Mx3dGeEllipse.md#setminorradius)
- [SetPosition](Mx3dGeEllipse.md#setposition)
- [Transform](Mx3dGeEllipse.md#transform)
- [Transformed](Mx3dGeEllipse.md#transformed)
- [TranslateBy2Points](Mx3dGeEllipse.md#translateby2points)
- [TranslateByVec](Mx3dGeEllipse.md#translatebyvec)
- [TranslatedBy2Points](Mx3dGeEllipse.md#translatedby2points)
- [TranslatedByVec](Mx3dGeEllipse.md#translatedbyvec)
- [XAxis](Mx3dGeEllipse.md#xaxis)
- [YAxis](Mx3dGeEllipse.md#yaxis)

## Constructors

### constructor

• **new Mx3dGeEllipse**()

Construct an uninitialized instance of an ellipse.

#### Overrides

Mx3dGeObject.constructor

• **new Mx3dGeEllipse**(`theA2`, `theMajorRadius`, `theMinorRadius`)

Construct an ellipse based on the given coordinate system and radius.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheA2 | [Mx3dGeCSYSR] (Mx3dGeCSYSR. md) | The coordinate system where the ellipse is located|
|` theMajorRadius ` | ` number ` | Main radius|
|The MinorRadius | Number | Sub radius|

#### Overrides

Mx3dGeObject.constructor

## Methods

### Area

▸ **Area**(): `number`

Calculate and return the area of an ellipse.

#### Returns

`number`

The area of an ellipse

___

### Axis

▸ **Axis**(): [`Mx3dGeAxis`](Mx3dGeAxis.md)

Return the axis of the ellipse.

#### Returns

[`Mx3dGeAxis`](Mx3dGeAxis.md)

The axis of an ellipse

___

### Directrix1

▸ **Directrix1**(): [`Mx3dGeAxis`](Mx3dGeAxis.md)

The first direct line of the ellipse is a straight line perpendicular to the main axis, located on the ellipse and satisfying a specific geometric relationship.

#### Returns

[`Mx3dGeAxis`](Mx3dGeAxis.md)

Line 1

___

### Directrix2

▸ **Directrix2**(): [`Mx3dGeAxis`](Mx3dGeAxis.md)

The second direct line of the ellipse is a straight line perpendicular to the main axis, located on the ellipse and satisfying a specific geometric relationship.

#### Returns

[`Mx3dGeAxis`](Mx3dGeAxis.md)

Line 2

___

### Eccentricity

▸ **Eccentricity**(): `number`

Calculate and return the eccentricity of the ellipse, which is the ratio of the focal length to the semi major axis.

#### Returns

`number`

Eccentricity

___

### Focal

▸ **Focal**(): `number`

Calculate and return the focal length of the ellipse and the distance between the two focal points.

#### Returns

`number`

focal length

___

### Focus1

▸ **Focus1**(): [`Mx3dGePoint`](Mx3dGePoint.md)

Obtain the first focal point of the ellipse.

#### Returns

[`Mx3dGePoint`](Mx3dGePoint.md)

First Focus

___

### Focus2

▸ **Focus2**(): [`Mx3dGePoint`](Mx3dGePoint.md)

Obtain the second focal point of the ellipse.

#### Returns

[`Mx3dGePoint`](Mx3dGePoint.md)

Two focal points

___

### Location

▸ **Location**(): [`Mx3dGePoint`](Mx3dGePoint.md)

Get the current position of the ellipse, which is the center point.

#### Returns

[`Mx3dGePoint`](Mx3dGePoint.md)

current location

___

### MajorRadius

▸ **MajorRadius**(): `number`

Obtain the principal radius of the ellipse.

#### Returns

`number`

Main radius

___

### MinorRadius

▸ **MinorRadius**(): `number`

Obtain the secondary radius of the ellipse.

#### Returns

`number`

Secondary radius

___

### MirrorByAxis

▸ **MirrorByAxis**(`theA1`): `void`

Mirror the ellipse to specify the axis of symmetry.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheA1 | [Mx3dGeAxis] (Mx3dGeAxis. md) | Axis of mirror operation|

#### Returns

`void`

___

### MirrorByCSYSR

▸ **MirrorByCSYSR**(`theA2`): `void`

Perform a mirror operation on an ellipse to specify the plane of the coordinate system as the symmetry plane.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheA2 | [Mx3dGeCSYSR] (Mx3dGeCSYSR. md) | Coordinate system for mirror operation|

#### Returns

`void`

___

### MirrorByPoint

▸ **MirrorByPoint**(`theP`): `void`

Perform a mirror operation on the ellipse and perform a symmetric transformation around a specified point as the center.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheP | [Mx3dGePoint] (Mx3dGePoint. md) | The center point of the mirror operation|

#### Returns

`void`

___

### MirroredByAxis

▸ **MirroredByAxis**(`theA1`): [`Mx3dGeEllipse`](Mx3dGeEllipse.md)

Return the elliptical copy mirrored along the specified axis.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheA1 | [Mx3dGeAxis] (Mx3dGeAxis. md) | Axis of mirror operation|

#### Returns

[`Mx3dGeEllipse`](Mx3dGeEllipse.md)

Mirrored elliptical copy

___

### MirroredByCSYSR

▸ **MirroredByCSYSR**(`theA2`): [`Mx3dGeEllipse`](Mx3dGeEllipse.md)

Returns a copy of the ellipse mirrored along the plane of the specified coordinate system.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheA2 | [Mx3dGeCSYSR] (Mx3dGeCSYSR. md) | Coordinate system for mirror operation|

#### Returns

[`Mx3dGeEllipse`](Mx3dGeEllipse.md)

Mirrored elliptical copy

___

### MirroredByPoint

▸ **MirroredByPoint**(`theP`): [`Mx3dGeEllipse`](Mx3dGeEllipse.md)

Return the elliptical copy mirrored along the specified point.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheP | [Mx3dGePoint] (Mx3dGePoint. md) | The center point of the mirror operation|

#### Returns

[`Mx3dGeEllipse`](Mx3dGeEllipse.md)

Mirrored elliptical copy

___

### Parameter

▸ **Parameter**(): `number`

Obtaining the parameters of an ellipse may refer to the parameters in the parameter equation corresponding to a point on the ellipse.

#### Returns

`number`

Parameter values

___

### Position

▸ **Position**(): [`Mx3dGeCSYSR`](Mx3dGeCSYSR.md)

Obtain the position coordinate system of the ellipse and define the coordinate framework where the ellipse is located.

#### Returns

[`Mx3dGeCSYSR`](Mx3dGeCSYSR.md)

Position coordinate system

___

### Rotate

▸ **Rotate**(`theA1`, `theAng`): `void`

Rotate an ellipse and perform a rotation operation around a specified axis at a given angle.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheA1 | [Mx3dGeAxis] (Mx3dGeAxis. md) | Rotation axis|
|TheAng | number | Rotation angle (radians)|

#### Returns

`void`

___

### Rotated

▸ **Rotated**(`theA1`, `theAng`): [`Mx3dGeEllipse`](Mx3dGeEllipse.md)

Return the rotated elliptical copy.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheA1 | [Mx3dGeAxis] (Mx3dGeAxis. md) | Rotation axis|
|TheAng | number | Rotation angle (radians)|

#### Returns

[`Mx3dGeEllipse`](Mx3dGeEllipse.md)

Rotating elliptical copy

___

### Scale

▸ **Scale**(`theP`, `theS`): `void`

Scaling an ellipse, starting from a specified point and scaling according to a given ratio.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheP | [Mx3dGePoint] (Mx3dGePoint. md) | Zoom center point|
|TheS | number | scaling ratio|

#### Returns

`void`

___

### Scaled

▸ **Scaled**(`theP`, `theS`): [`Mx3dGeEllipse`](Mx3dGeEllipse.md)

Return the scaled copy of the ellipse.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheP | [Mx3dGePoint] (Mx3dGePoint. md) | Zoom center point|
|TheS | number | scaling ratio|

#### Returns

[`Mx3dGeEllipse`](Mx3dGeEllipse.md)

Scaling the elliptical copy

___

### SetAxis

▸ **SetAxis**(`theA1`): `void`

Set the axis of the ellipse.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheA1 | [Mx3dGeAxis] (Mx3dGeAxis. md) | New axis|

#### Returns

`void`

___

### SetLocation

▸ **SetLocation**(`theP`): `void`

Set the position of the ellipse.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheP | [Mx3dGePoint] (Mx3dGePoint. md) | New location point|

#### Returns

`void`

___

### SetMajorRadius

▸ **SetMajorRadius**(`theMajorRadius`): `void`

Set the main radius of the ellipse.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|` theMajorRadius ` | ` number ` | New main radius|

#### Returns

`void`

___

### SetMinorRadius

▸ **SetMinorRadius**(`theMinorRadius`): `void`

Set the secondary radius of the ellipse.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheMinorRadius | Number | New sub radius|

#### Returns

`void`

___

### SetPosition

▸ **SetPosition**(`theA2`): `void`

Set the coordinate system of the ellipse.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheA2 | [Mx3dGeCSYSR] (Mx3dGeCSYSR. md) | New coordinate system|

#### Returns

`void`

___

### Transform

▸ **Transform**(`theT`): `void`

Transform ellipses using transformation matrices.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|` theT ` | [` Mx3dGeTsf `] (Mx3dGeTsf. md) | Transformation Matrix|

#### Returns

`void`

___

### Transformed

▸ **Transformed**(`theT`): [`Mx3dGeEllipse`](Mx3dGeEllipse.md)

Return the transformed copy of the ellipse.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|` theT ` | [` Mx3dGeTsf `] (Mx3dGeTsf. md) | Transformation Matrix|

#### Returns

[`Mx3dGeEllipse`](Mx3dGeEllipse.md)

The transformed elliptical copy

___

### TranslateBy2Points

▸ **TranslateBy2Points**(`theP1`, `theP2`): `void`

Elliptical distance translation refers to the movement of an ellipse from one point to another.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheP1 | [Mx3dGePoint] (Mx3dGePoint. md) | Starting Point|
|TheP2 | [Mx3dGePoint] (Mx3dGePoint. md) | Endpoint|

#### Returns

`void`

___

### TranslateByVec

▸ **TranslateByVec**(`theV`): `void`

Translate along the specified vector along the circle.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheV | [Mx3dGeVec] (Mx3dGeVec. md) | Translation vector|

#### Returns

`void`

___

### TranslatedBy2Points

▸ **TranslatedBy2Points**(`theP1`, `theP2`): [`Mx3dGeEllipse`](Mx3dGeEllipse.md)

Return the elliptical copy after equidistant translation.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheP1 | [Mx3dGePoint] (Mx3dGePoint. md) | Starting Point|
|TheP2 | [Mx3dGePoint] (Mx3dGePoint. md) | Endpoint|

#### Returns

[`Mx3dGeEllipse`](Mx3dGeEllipse.md)

Translated elliptical copy

___

### TranslatedByVec

▸ **TranslatedByVec**(`theV`): [`Mx3dGeEllipse`](Mx3dGeEllipse.md)

Return the translated elliptical copy.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheV | [Mx3dGeVec] (Mx3dGeVec. md) | Translation vector|

#### Returns

[`Mx3dGeEllipse`](Mx3dGeEllipse.md)

Translated elliptical copy

___

### XAxis

▸ **XAxis**(): [`Mx3dGeAxis`](Mx3dGeAxis.md)

Obtain the main axis of the ellipse, which is the axis along the main radius direction.

#### Returns

[`Mx3dGeAxis`](Mx3dGeAxis.md)

The main axis of an ellipse

___

### YAxis

▸ **YAxis**(): [`Mx3dGeAxis`](Mx3dGeAxis.md)

Obtain the minor axis of the ellipse, which is the axis along the minor radius direction.

#### Returns

[`Mx3dGeAxis`](Mx3dGeAxis.md)

The secondary axis of an ellipse
