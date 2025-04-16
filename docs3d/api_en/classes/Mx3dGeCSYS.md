[mxcad_3d API Document](../README. md)/Mx3dGeCSYS

# Class: Mx3dGeCSYS

A class that represents a universal coordinate system.

## Hierarchy

- [`Mx3dGeObject`](Mx3dGeObject.md)

  ↳ **`Mx3dGeCSYS`**

## Table of contents

### Constructors

- [constructor](Mx3dGeCSYS.md#constructor)

### Methods

- [Angle](Mx3dGeCSYS.md#angle)
- [Axis](Mx3dGeCSYS.md#axis)
- [CSYSR](Mx3dGeCSYS.md#csysr)
- [Direct](Mx3dGeCSYS.md#direct)
- [Direction](Mx3dGeCSYS.md#direction)
- [IsCoplanarWithAxis](Mx3dGeCSYS.md#iscoplanarwithaxis)
- [IsCoplanarWithCSYS](Mx3dGeCSYS.md#iscoplanarwithcsys)
- [Location](Mx3dGeCSYS.md#location)
- [MirrorByAxis](Mx3dGeCSYS.md#mirrorbyaxis)
- [MirrorByCSYSR](Mx3dGeCSYS.md#mirrorbycsysr)
- [MirrorByPoint](Mx3dGeCSYS.md#mirrorbypoint)
- [MirroredByAxis](Mx3dGeCSYS.md#mirroredbyaxis)
- [MirroredByCSYSR](Mx3dGeCSYS.md#mirroredbycsysr)
- [MirroredByPoint](Mx3dGeCSYS.md#mirroredbypoint)
- [Rotate](Mx3dGeCSYS.md#rotate)
- [Rotated](Mx3dGeCSYS.md#rotated)
- [Scale](Mx3dGeCSYS.md#scale)
- [Scaled](Mx3dGeCSYS.md#scaled)
- [SetAxis](Mx3dGeCSYS.md#setaxis)
- [SetDirection](Mx3dGeCSYS.md#setdirection)
- [SetLocation](Mx3dGeCSYS.md#setlocation)
- [SetXDirection](Mx3dGeCSYS.md#setxdirection)
- [SetYDirection](Mx3dGeCSYS.md#setydirection)
- [Transform](Mx3dGeCSYS.md#transform)
- [Transformed](Mx3dGeCSYS.md#transformed)
- [TranslateBy2Points](Mx3dGeCSYS.md#translateby2points)
- [TranslateByVec](Mx3dGeCSYS.md#translatebyvec)
- [TranslatedBy2Points](Mx3dGeCSYS.md#translatedby2points)
- [TranslatedByVec](Mx3dGeCSYS.md#translatedbyvec)
- [XDirection](Mx3dGeCSYS.md#xdirection)
- [XReverse](Mx3dGeCSYS.md#xreverse)
- [YDirection](Mx3dGeCSYS.md#ydirection)
- [YReverse](Mx3dGeCSYS.md#yreverse)
- [ZReverse](Mx3dGeCSYS.md#zreverse)

## Constructors

### constructor

• **new Mx3dGeCSYS**()

Create a default coordinate system object.

#### Overrides

Mx3dGeObject.constructor

• **new Mx3dGeCSYS**(`csysr`)

Create a coordinate system object using the right-handed coordinate system.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Csysr | [Mx3dGeCSYSR] (Mx3dGeCSYSR. md) | Right hand coordinate system object|

#### Overrides

Mx3dGeObject.constructor

• **new Mx3dGeCSYS**(`origin`, `z_axis`)

Create a coordinate system object using the origin and Z-axis direction.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Origin | [Mx3dGePoint] (Mx3dGePoint. md) | The origin of the coordinate system|
|The Z-axis direction of the coordinate system is Mx3dGeDir (Mx3dGeDir. md)|

#### Overrides

Mx3dGeObject.constructor

• **new Mx3dGeCSYS**(`origin`, `z_axis`, `x_vec`)

Create a coordinate system object using the origin, Z-axis direction, and X-axis vector.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Origin | [Mx3dGePoint] (Mx3dGePoint. md) | The origin of the coordinate system|
|The Z-axis direction of the coordinate system is Mx3dGeDir (Mx3dGeDir. md)|
|The X-axis vector of the coordinate system [Mx3dGeDir] (Mx3dGeDir. md)|

#### Overrides

Mx3dGeObject.constructor

## Methods

### Angle

▸ **Angle**(`other`): `number`

Calculate the angle with another coordinate system.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Other | [Mx3dGeCSYS] (Mx3dGeCSYS. md) | Another coordinate system|

#### Returns

`number`

The angle between two coordinate systems.

___

### Axis

▸ **Axis**(): [`Mx3dGeAxis`](Mx3dGeAxis.md)

Obtain the axes of the coordinate system.

#### Returns

[`Mx3dGeAxis`](Mx3dGeAxis.md)

The axis of the coordinate system.

___

### CSYSR

▸ **CSYSR**(): [`Mx3dGeCSYSR`](Mx3dGeCSYSR.md)

Obtain the right-hand coordinate system.

#### Returns

[`Mx3dGeCSYSR`](Mx3dGeCSYSR.md)

Right hand coordinate system object.

___

### Direct

▸ **Direct**(): `boolean`

Determine whether the coordinate system is direct.

#### Returns

`boolean`

Is it direct.

___

### Direction

▸ **Direction**(): [`Mx3dGeDir`](Mx3dGeDir.md)

Obtain the direction of the coordinate system.

#### Returns

[`Mx3dGeDir`](Mx3dGeDir.md)

The direction of the coordinate system.

___

### IsCoplanarWithAxis

▸ **IsCoplanarWithAxis**(`axis`, `linearTolerance`, `angularTolerance`): `boolean`

Determine whether the coordinate system is coplanar with an axis.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Axis | [Mx3dGeAxis] (Mx3dGeAxis. md) | Axis object|
|Linear Tolerance | Number | Linear Tolerance|
|Angular Tolerance | Number | Angular Tolerance|

#### Returns

`boolean`

Is it coplanar.

___

### IsCoplanarWithCSYS

▸ **IsCoplanarWithCSYS**(`other`, `linearTolerance`, `angularTolerance`): `boolean`

Determine whether the coordinate system is coplanar with another coordinate system.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Other | [Mx3dGeCSYS] (Mx3dGeCSYS. md) | Another coordinate system|
|Linear Tolerance | Number | Linear Tolerance|
|Angular Tolerance | Number | Angular Tolerance|

#### Returns

`boolean`

Is it coplanar.

___

### Location

▸ **Location**(): [`Mx3dGePoint`](Mx3dGePoint.md)

Obtain the origin position of the coordinate system.

#### Returns

[`Mx3dGePoint`](Mx3dGePoint.md)

The origin position of the coordinate system.

___

### MirrorByAxis

▸ **MirrorByAxis**(`axis`): `void`

Mirror the coordinate system through an axis.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Axis | [Mx3dGeAxis] (Mx3dGeAxis. md) | Mirror axis|

#### Returns

`void`

___

### MirrorByCSYSR

▸ **MirrorByCSYSR**(`csysr`): `void`

Mirror the current coordinate system using the right-handed coordinate system.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Csysr | [Mx3dGeCSYSR] (Mx3dGeCSYSR. md) | Right hand coordinate system object|

#### Returns

`void`

___

### MirrorByPoint

▸ **MirrorByPoint**(`point`): `void`

Mirror the coordinate system through a point.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Point | [Mx3dGePoint] (Mx3dGePoint. md) | Mirror point|

#### Returns

`void`

___

### MirroredByAxis

▸ **MirroredByAxis**(`axis`): [`Mx3dGeCSYS`](Mx3dGeCSYS.md)

Mirror the coordinate system through an axis and return the mirrored coordinate system object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Axis | [Mx3dGeAxis] (Mx3dGeAxis. md) | Mirror axis|

#### Returns

[`Mx3dGeCSYS`](Mx3dGeCSYS.md)

Mirrored coordinate system object.

___

### MirroredByCSYSR

▸ **MirroredByCSYSR**(`csysr`): [`Mx3dGeCSYS`](Mx3dGeCSYS.md)

Mirror the current coordinate system using the right-hand coordinate system and return the mirrored coordinate system object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Csysr | [Mx3dGeCSYSR] (Mx3dGeCSYSR. md) | Right hand coordinate system object|

#### Returns

[`Mx3dGeCSYS`](Mx3dGeCSYS.md)

Mirrored coordinate system object.

___

### MirroredByPoint

▸ **MirroredByPoint**(`point`): [`Mx3dGeCSYS`](Mx3dGeCSYS.md)

Mirror the coordinate system through a point and return the mirrored coordinate system object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Point | [Mx3dGePoint] (Mx3dGePoint. md) | Mirror point|

#### Returns

[`Mx3dGeCSYS`](Mx3dGeCSYS.md)

Mirrored coordinate system object.

___

### Rotate

▸ **Rotate**(`axis`, `ang`): `void`

Rotate the coordinate system around the axis.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Axis | [Mx3dGeAxis] (Mx3dGeAxis. md) | Rotation axis|
|'ang' | 'number' | Rotation angle|

#### Returns

`void`

___

### Rotated

▸ **Rotated**(`axis`, `ang`): [`Mx3dGeCSYS`](Mx3dGeCSYS.md)

Rotate the coordinate system around the axis and return the rotated coordinate system object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Axis | [Mx3dGeAxis] (Mx3dGeAxis. md) | Rotation axis|
|'ang' | 'number' | Rotation angle|

#### Returns

[`Mx3dGeCSYS`](Mx3dGeCSYS.md)

The rotated coordinate system object.

___

### Scale

▸ **Scale**(`point`, `s`): `void`

Scale the coordinate system proportionally.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Point | [Mx3dGePoint] (Mx3dGePoint. md) | The base point for scaling|
|S | number | scaling ratio|

#### Returns

`void`

___

### Scaled

▸ **Scaled**(`point`, `s`): [`Mx3dGeCSYS`](Mx3dGeCSYS.md)

Scale the coordinate system proportionally and return the scaled coordinate system object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Point | [Mx3dGePoint] (Mx3dGePoint. md) | The base point for scaling|
|S | number | scaling ratio|

#### Returns

[`Mx3dGeCSYS`](Mx3dGeCSYS.md)

The scaled coordinate system object.

___

### SetAxis

▸ **SetAxis**(`z_axis`): `void`

Set the axis of the coordinate system.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|The Z-axis of the coordinate system [Mx3dGeAxis] (Mx3dGeAxis. md)|

#### Returns

`void`

___

### SetDirection

▸ **SetDirection**(`z_dir`): `void`

Set the direction of the coordinate system.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|The Z-axis direction of the coordinate system [Mx3dGeDir] (Mx3dGeDir. md)|

#### Returns

`void`

___

### SetLocation

▸ **SetLocation**(`origin`): `void`

Set the origin position of the coordinate system.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Origin | [Mx3dGePoint] (Mx3dGePoint. md) | The origin of the coordinate system|

#### Returns

`void`

▸ **SetLocation**(`theX`, `theY`, `theZ`): `void`

Set the origin position of the coordinate system.

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

Set the X-axis direction of the coordinate system.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|X_dir | [Mx3dGeDir] (Mx3dGeDir. md) | X-axis direction|

#### Returns

`void`

___

### SetYDirection

▸ **SetYDirection**(`y_dir`): `void`

Set the Y-axis direction of the coordinate system.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Y_dir | [Mx3dGeDir] (Mx3dGeDir. md) | Y-axis direction|

#### Returns

`void`

___

### Transform

▸ **Transform**(`t`): `void`

Transform the coordinate system.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|T | [Mx3dGetStrf] (Mx3dGetStrf. md) | Transform the object|

#### Returns

`void`

___

### Transformed

▸ **Transformed**(`t`): [`Mx3dGeCSYS`](Mx3dGeCSYS.md)

Transform the coordinate system and return the transformed coordinate system object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|T | [Mx3dGetStrf] (Mx3dGetStrf. md) | Transform the object|

#### Returns

[`Mx3dGeCSYS`](Mx3dGeCSYS.md)

The transformed coordinate system object.

___

### TranslateBy2Points

▸ **TranslateBy2Points**(`point1`, `point2`): `void`

Translate the coordinate system through two points.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Point1 | [Mx3dGePoint] (Mx3dGePoint. md) | Starting point|
|Point2 | [Mx3dGePoint] (Mx3dGePoint. md) | Endpoint|

#### Returns

`void`

___

### TranslateByVec

▸ **TranslateByVec**(`vec`): `void`

Translate the coordinate system by vector.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Vec | [Mx3dGeVec] (Mx3dGeVec. md) | Translation vector|

#### Returns

`void`

___

### TranslatedBy2Points

▸ **TranslatedBy2Points**(`point1`, `point2`): [`Mx3dGeCSYS`](Mx3dGeCSYS.md)

Translate the coordinate system through two points and return the translated coordinate system object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Point1 | [Mx3dGePoint] (Mx3dGePoint. md) | Starting point|
|Point2 | [Mx3dGePoint] (Mx3dGePoint. md) | Endpoint|

#### Returns

[`Mx3dGeCSYS`](Mx3dGeCSYS.md)

Translated coordinate system object.

___

### TranslatedByVec

▸ **TranslatedByVec**(`vec`): [`Mx3dGeCSYS`](Mx3dGeCSYS.md)

Translate the coordinate system by vector and return the translated coordinate system object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Vec | [Mx3dGeVec] (Mx3dGeVec. md) | Translation vector|

#### Returns

[`Mx3dGeCSYS`](Mx3dGeCSYS.md)

Translated coordinate system object.

___

### XDirection

▸ **XDirection**(): [`Mx3dGeDir`](Mx3dGeDir.md)

Obtain the X-axis direction of the coordinate system.

#### Returns

[`Mx3dGeDir`](Mx3dGeDir.md)

X-axis direction.

___

### XReverse

▸ **XReverse**(): `void`

Reverse the X-axis direction.

#### Returns

`void`

___

### YDirection

▸ **YDirection**(): [`Mx3dGeDir`](Mx3dGeDir.md)

Obtain the Y-axis direction of the coordinate system.

#### Returns

[`Mx3dGeDir`](Mx3dGeDir.md)

Y-axis direction.

___

### YReverse

▸ **YReverse**(): `void`

Reverse the Y-axis direction.

#### Returns

`void`

___

### ZReverse

▸ **ZReverse**(): `void`

Reverse the Z-axis direction.

#### Returns

`void`
