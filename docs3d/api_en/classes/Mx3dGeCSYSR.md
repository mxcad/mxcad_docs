[mxcad_3d API Document](../README. md)/Mx3dGeCSYSR

# Class: Mx3dGeCSYSR

The class representing the right-handed coordinate system.

## Hierarchy

- [`Mx3dGeObject`](Mx3dGeObject.md)

  ↳ **`Mx3dGeCSYSR`**

## Table of contents

### Constructors

- [constructor](Mx3dGeCSYSR.md#constructor)

### Methods

- [Angle](Mx3dGeCSYSR.md#angle)
- [Axis](Mx3dGeCSYSR.md#axis)
- [Direction](Mx3dGeCSYSR.md#direction)
- [IsCoplanarWithAxis](Mx3dGeCSYSR.md#iscoplanarwithaxis)
- [IsCoplanarWithCSYSR](Mx3dGeCSYSR.md#iscoplanarwithcsysr)
- [Location](Mx3dGeCSYSR.md#location)
- [MirrorByAxis](Mx3dGeCSYSR.md#mirrorbyaxis)
- [MirrorByCSYSR](Mx3dGeCSYSR.md#mirrorbycsysr)
- [MirrorByPoint](Mx3dGeCSYSR.md#mirrorbypoint)
- [MirroredByAxis](Mx3dGeCSYSR.md#mirroredbyaxis)
- [MirroredByCSYSR](Mx3dGeCSYSR.md#mirroredbycsysr)
- [MirroredByPoint](Mx3dGeCSYSR.md#mirroredbypoint)
- [Rotate](Mx3dGeCSYSR.md#rotate)
- [Rotated](Mx3dGeCSYSR.md#rotated)
- [Scale](Mx3dGeCSYSR.md#scale)
- [Scaled](Mx3dGeCSYSR.md#scaled)
- [SetDirection](Mx3dGeCSYSR.md#setdirection)
- [SetLocation](Mx3dGeCSYSR.md#setlocation)
- [SetXDirection](Mx3dGeCSYSR.md#setxdirection)
- [SetYDirection](Mx3dGeCSYSR.md#setydirection)
- [Transform](Mx3dGeCSYSR.md#transform)
- [Transformed](Mx3dGeCSYSR.md#transformed)
- [TranslateBy2Points](Mx3dGeCSYSR.md#translateby2points)
- [TranslateByVec](Mx3dGeCSYSR.md#translatebyvec)
- [TranslatedBy2Points](Mx3dGeCSYSR.md#translatedby2points)
- [TranslatedByVec](Mx3dGeCSYSR.md#translatedbyvec)
- [XDirection](Mx3dGeCSYSR.md#xdirection)
- [YDirection](Mx3dGeCSYSR.md#ydirection)

## Constructors

### constructor

• **new Mx3dGeCSYSR**()

Create a default right-handed coordinate system object.

#### Overrides

Mx3dGeObject.constructor

• **new Mx3dGeCSYSR**(`origin`, `z_axis`, `x_vec`)

Create a right-handed coordinate system object using the origin, Z-axis direction, and X-axis vector.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Origin | [Mx3dGePoint] (Mx3dGePoint. md) | The origin of the coordinate system|
|The Z-axis direction of the coordinate system is Mx3dGeDir (Mx3dGeDir. md)|
|The X-axis vector of the coordinate system [Mx3dGeDir] (Mx3dGeDir. md)|

#### Overrides

Mx3dGeObject.constructor

• **new Mx3dGeCSYSR**(`origin`, `z_axis`)

Create a right-handed coordinate system object using the origin and Z-axis direction, with the X and Y directions automatically determined.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Origin | [Mx3dGePoint] (Mx3dGePoint. md) | The origin of the coordinate system|
|The Z-axis direction of the coordinate system is Mx3dGeDir (Mx3dGeDir. md)|

#### Overrides

Mx3dGeObject.constructor

## Methods

### Angle

▸ **Angle**(`theOther`): `number`

Calculate the angle with another right-handed coordinate system.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|` theOther ` | [` Mx3dGeCSYSR `] (Mx3dGeCSYSR. md) | Another right-handed coordinate system|

#### Returns

`number`

The angle between two coordinate systems.

___

### Axis

▸ **Axis**(): [`Mx3dGeAxis`](Mx3dGeAxis.md)

Obtain the axis of the right-hand coordinate system.

#### Returns

[`Mx3dGeAxis`](Mx3dGeAxis.md)

The axis of the right-hand coordinate system.

___

### Direction

▸ **Direction**(): [`Mx3dGeDir`](Mx3dGeDir.md)

Obtain the Z-axis direction of the right-hand coordinate system.

#### Returns

[`Mx3dGeDir`](Mx3dGeDir.md)

Z-axis direction.

___

### IsCoplanarWithAxis

▸ **IsCoplanarWithAxis**(`A1`, `LinearTolerance`, `AngularTolerance`): `boolean`

Determine whether the right-hand coordinate system is coplanar with an axis.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|A1 | [Mx3dGeAxis] (Mx3dGeAxis. md) | Axis object|
|LinearTolerance | number | Linear tolerance|
|AngularTolerance | number | Angle tolerance|

#### Returns

`boolean`

Is it coplanar.

___

### IsCoplanarWithCSYSR

▸ **IsCoplanarWithCSYSR**(`Other`, `LinearTolerance`, `AngularTolerance`): `boolean`

Determine whether the right-handed coordinate system is coplanar with another right-handed coordinate system.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Other | [Mx3dGeCSYSR] (Mx3dGeCSYSR. md) | Another right-handed coordinate system|
|LinearTolerance | number | Linear tolerance|
|AngularTolerance | number | Angle tolerance|

#### Returns

`boolean`

Is it coplanar.

___

### Location

▸ **Location**(): [`Mx3dGePoint`](Mx3dGePoint.md)

Obtain the origin position of the right-hand coordinate system.

#### Returns

[`Mx3dGePoint`](Mx3dGePoint.md)

Origin position.

___

### MirrorByAxis

▸ **MirrorByAxis**(`A1`): `void`

Mirror the right-handed coordinate system through an axis.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|A1 | [Mx3dGeAxis] (Mx3dGeAxis. md) | Mirror axis|

#### Returns

`void`

___

### MirrorByCSYSR

▸ **MirrorByCSYSR**(`A2`): `void`

Mirror the current right-handed coordinate system using the right-handed coordinate system.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|A2 | [Mx3dGeCSYSR] (Mx3dGeCSYSR. md) | Right hand coordinate system object|

#### Returns

`void`

___

### MirrorByPoint

▸ **MirrorByPoint**(`P`): `void`

Mirror the right-hand coordinate system through a point.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|P | [Mx3dGePoint] (Mx3dGePoint. md) | Mirror point|

#### Returns

`void`

___

### MirroredByAxis

▸ **MirroredByAxis**(`A1`): [`Mx3dGeCSYSR`](Mx3dGeCSYSR.md)

Mirror the right-handed coordinate system through an axis and return the mirrored right-handed coordinate system object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|A1 | [Mx3dGeAxis] (Mx3dGeAxis. md) | Mirror axis|

#### Returns

[`Mx3dGeCSYSR`](Mx3dGeCSYSR.md)

Mirror the right-handed coordinate system object.

___

### MirroredByCSYSR

▸ **MirroredByCSYSR**(`A2`): [`Mx3dGeCSYSR`](Mx3dGeCSYSR.md)

Mirror the current right-handed coordinate system using the right-handed coordinate system and return the mirrored right-handed coordinate system object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|A2 | [Mx3dGeCSYSR] (Mx3dGeCSYSR. md) | Right hand coordinate system object|

#### Returns

[`Mx3dGeCSYSR`](Mx3dGeCSYSR.md)

Mirror the right-handed coordinate system object.

___

### MirroredByPoint

▸ **MirroredByPoint**(`P`): [`Mx3dGeCSYSR`](Mx3dGeCSYSR.md)

Mirror the right-handed coordinate system through a point and return the mirrored right-handed coordinate system object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|P | [Mx3dGePoint] (Mx3dGePoint. md) | Mirror point|

#### Returns

[`Mx3dGeCSYSR`](Mx3dGeCSYSR.md)

Mirror the right-handed coordinate system object.

___

### Rotate

▸ **Rotate**(`theA1`, `theAng`): `void`

Rotate the right-hand coordinate system around the axis.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheA1 | [Mx3dGeAxis] (Mx3dGeAxis. md) | Rotation axis|
|TheAng | Number | Rotation angle|

#### Returns

`void`

___

### Rotated

▸ **Rotated**(`theA1`, `theAng`): [`Mx3dGeCSYSR`](Mx3dGeCSYSR.md)

Rotate the right-handed coordinate system around the axis and return the rotated right-handed coordinate system object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheA1 | [Mx3dGeAxis] (Mx3dGeAxis. md) | Rotation axis|
|TheAng | Number | Rotation angle|

#### Returns

[`Mx3dGeCSYSR`](Mx3dGeCSYSR.md)

Rotate the right-handed coordinate system object.

___

### Scale

▸ **Scale**(`theP`, `theS`): `void`

Scale the right-hand coordinate system.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheP | [Mx3dGePoint] (Mx3dGePoint. md) | Zoom center point|
|TheS | Number | Scale ratio|

#### Returns

`void`

___

### Scaled

▸ **Scaled**(`theP`, `theS`): [`Mx3dGeCSYSR`](Mx3dGeCSYSR.md)

Scale the right-handed coordinate system and return the scaled right-handed coordinate system object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheP | [Mx3dGePoint] (Mx3dGePoint. md) | Zoom center point|
|TheS | Number | Scale ratio|

#### Returns

[`Mx3dGeCSYSR`](Mx3dGeCSYSR.md)

The scaled right-handed coordinate system object.

___

### SetDirection

▸ **SetDirection**(`z_dir`): `void`

Set the Z-axis direction of the right-hand coordinate system.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Z-dir | [Mx3dGeDir] (Mx3dGeDir. md) | Z-axis direction|

#### Returns

`void`

___

### SetLocation

▸ **SetLocation**(`origin`): `void`

Set the origin position of the right-hand coordinate system.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Origin | [Mx3dGePoint] (Mx3dGePoint. md) | The origin of the coordinate system|

#### Returns

`void`

▸ **SetLocation**(`theX`, `theY`, `theZ`): `void`

Set the origin position of the right-hand coordinate system.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|The X coordinate of the origin|
|The Y coordinate of the origin|
|The Z coordinate of the origin|

#### Returns

`void`

___

### SetXDirection

▸ **SetXDirection**(`x_dir`): `void`

Set the X-axis direction of the right-hand coordinate system.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|X_dir | [Mx3dGePoint] (Mx3dGePoint. md) | X-axis direction|

#### Returns

`void`

___

### SetYDirection

▸ **SetYDirection**(`y_dir`): `void`

Set the Y-axis direction of the right-hand coordinate system.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Y_dir | [Mx3dGeDir] (Mx3dGeDir. md) | Y-axis direction|

#### Returns

`void`

___

### Transform

▸ **Transform**(`theT`): `void`

Transform the right-handed coordinate system.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|` theT ` | [` Mx3dGeTsf `] (Mx3dGeTsf. md) | Transform matrix|

#### Returns

`void`

___

### Transformed

▸ **Transformed**(`theT`): [`Mx3dGeCSYSR`](Mx3dGeCSYSR.md)

Transform the right-handed coordinate system and return the transformed right-handed coordinate system object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|` theT ` | [` Mx3dGeTsf `] (Mx3dGeTsf. md) | Transform matrix|

#### Returns

[`Mx3dGeCSYSR`](Mx3dGeCSYSR.md)

The transformed right-handed coordinate system object.

___

### TranslateBy2Points

▸ **TranslateBy2Points**(`theP1`, `theP2`): `void`

Translate the right-hand coordinate system through two points.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheP1 | [Mx3dGePoint] (Mx3dGePoint. md) | Starting point|
|TheP2 | [Mx3dGePoint] (Mx3dGePoint. md) | Endpoint|

#### Returns

`void`

___

### TranslateByVec

▸ **TranslateByVec**(`theV`): `void`

Translate the right-hand coordinate system through vectors.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheV | [Mx3dGeVec] (Mx3dGeVec. md) | Translation vector|

#### Returns

`void`

___

### TranslatedBy2Points

▸ **TranslatedBy2Points**(`theP1`, `theP2`): [`Mx3dGeCSYSR`](Mx3dGeCSYSR.md)

Translate the right-handed coordinate system by two points and return the translated right-handed coordinate system object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheP1 | [Mx3dGePoint] (Mx3dGePoint. md) | Starting point|
|TheP2 | [Mx3dGePoint] (Mx3dGePoint. md) | Endpoint|

#### Returns

[`Mx3dGeCSYSR`](Mx3dGeCSYSR.md)

Translated right-handed coordinate system object.

___

### TranslatedByVec

▸ **TranslatedByVec**(`theV`): [`Mx3dGeCSYSR`](Mx3dGeCSYSR.md)

Translate the right-handed coordinate system through vectors and return the translated right-handed coordinate system object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheV | [Mx3dGeVec] (Mx3dGeVec. md) | Translation vector|

#### Returns

[`Mx3dGeCSYSR`](Mx3dGeCSYSR.md)

Translated right-handed coordinate system object.

___

### XDirection

▸ **XDirection**(): [`Mx3dGeDir`](Mx3dGeDir.md)

Obtain the X-axis direction of the right-hand coordinate system.

#### Returns

[`Mx3dGeDir`](Mx3dGeDir.md)

X-axis direction.

___

### YDirection

▸ **YDirection**(): [`Mx3dGeDir`](Mx3dGeDir.md)

Obtain the Y-axis direction of the right-handed coordinate system.

#### Returns

[`Mx3dGeDir`](Mx3dGeDir.md)

Y-axis direction.
