[mxcad_3d API Document](../README. md)/Mx3dGeCylinder

# Class: Mx3dGeCylinder

Represents a class of cylinders.

## Hierarchy

- [`Mx3dGeObject`](Mx3dGeObject.md)

  ↳ **`Mx3dGeCylinder`**

## Table of contents

### Constructors

- [constructor](Mx3dGeCylinder.md#constructor)

### Methods

- [Axis](Mx3dGeCylinder.md#axis)
- [Direct](Mx3dGeCylinder.md#direct)
- [Location](Mx3dGeCylinder.md#location)
- [MirrorByAxis](Mx3dGeCylinder.md#mirrorbyaxis)
- [MirrorByCSYSR](Mx3dGeCylinder.md#mirrorbycsysr)
- [MirrorByPoint](Mx3dGeCylinder.md#mirrorbypoint)
- [MirroredByAxis](Mx3dGeCylinder.md#mirroredbyaxis)
- [MirroredByCSYSR](Mx3dGeCylinder.md#mirroredbycsysr)
- [MirroredByPoint](Mx3dGeCylinder.md#mirroredbypoint)
- [Position](Mx3dGeCylinder.md#position)
- [Radius](Mx3dGeCylinder.md#radius)
- [Rotate](Mx3dGeCylinder.md#rotate)
- [Rotated](Mx3dGeCylinder.md#rotated)
- [Scale](Mx3dGeCylinder.md#scale)
- [Scaled](Mx3dGeCylinder.md#scaled)
- [SetAxis](Mx3dGeCylinder.md#setaxis)
- [SetLocation](Mx3dGeCylinder.md#setlocation)
- [SetPosition](Mx3dGeCylinder.md#setposition)
- [SetRadius](Mx3dGeCylinder.md#setradius)
- [Shape](Mx3dGeCylinder.md#shape)
- [Transform](Mx3dGeCylinder.md#transform)
- [Transformed](Mx3dGeCylinder.md#transformed)
- [TranslateBy2Points](Mx3dGeCylinder.md#translateby2points)
- [TranslateByVec](Mx3dGeCylinder.md#translatebyvec)
- [TranslatedBy2Points](Mx3dGeCylinder.md#translatedby2points)
- [TranslatedByVec](Mx3dGeCylinder.md#translatedbyvec)
- [UReverse](Mx3dGeCylinder.md#ureverse)
- [VReverse](Mx3dGeCylinder.md#vreverse)
- [XAxis](Mx3dGeCylinder.md#xaxis)
- [YAxis](Mx3dGeCylinder.md#yaxis)

## Constructors

### constructor

• **new Mx3dGeCylinder**()

Create a default cylindrical object.

#### Overrides

Mx3dGeObject.constructor

• **new Mx3dGeCylinder**(`theA3`, `theRadius`)

Create a cylindrical object using a coordinate system and radius.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheA3 | [Mx3dGeCSYS] (Mx3dGeCSYS. md) | Coordinate system|
|TheRadius | Number | The radius of a cylinder|

#### Overrides

Mx3dGeObject.constructor

## Methods

### Axis

▸ **Axis**(): [`Mx3dGeAxis`](Mx3dGeAxis.md)

Obtain the axis of the cylinder.

#### Returns

[`Mx3dGeAxis`](Mx3dGeAxis.md)

The axis of a cylinder.

___

### Direct

▸ **Direct**(): `boolean`

Check if the direction of the cylinder is positive.

#### Returns

`boolean`

Is it positive.

___

### Location

▸ **Location**(): [`Mx3dGePoint`](Mx3dGePoint.md)

Get the origin position of the cylinder.

#### Returns

[`Mx3dGePoint`](Mx3dGePoint.md)

Origin position.

___

### MirrorByAxis

▸ **MirrorByAxis**(`theA1`): `void`

Mirror the cylinder through an axis.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheA1 | [Mx3dGeAxis] (Mx3dGeAxis. md) | Mirror axis|

#### Returns

`void`

___

### MirrorByCSYSR

▸ **MirrorByCSYSR**(`theA2`): `void`

Mirror the cylinder using the right-hand coordinate system.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheA2 | [Mx3dGeCSYSR] (Mx3dGeCSYSR. md) | Right hand coordinate system|

#### Returns

`void`

___

### MirrorByPoint

▸ **MirrorByPoint**(`theP`): `void`

Mirror a cylinder through a point.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheP | [Mx3dGePoint] (Mx3dGePoint. md) | Mirror point|

#### Returns

`void`

___

### MirroredByAxis

▸ **MirroredByAxis**(`theA1`): [`Mx3dGeCylinder`](Mx3dGeCylinder.md)

Mirror a cylinder through an axis and return the mirrored cylinder object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheA1 | [Mx3dGeAxis] (Mx3dGeAxis. md) | Mirror axis|

#### Returns

[`Mx3dGeCylinder`](Mx3dGeCylinder.md)

The mirrored cylindrical object.

___

### MirroredByCSYSR

▸ **MirroredByCSYSR**(`theA2`): [`Mx3dGeCylinder`](Mx3dGeCylinder.md)

Mirror the cylinder using the right-hand coordinate system and return the mirrored cylinder object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheA2 | [Mx3dGeCSYSR] (Mx3dGeCSYSR. md) | Right hand coordinate system|

#### Returns

[`Mx3dGeCylinder`](Mx3dGeCylinder.md)

The mirrored cylindrical object.

___

### MirroredByPoint

▸ **MirroredByPoint**(`theP`): [`Mx3dGeCylinder`](Mx3dGeCylinder.md)

Mirror a cylinder through a point and return the mirrored cylinder object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheP | [Mx3dGePoint] (Mx3dGePoint. md) | Mirror point|

#### Returns

[`Mx3dGeCylinder`](Mx3dGeCylinder.md)

The mirrored cylindrical object.

___

### Position

▸ **Position**(): [`Mx3dGeCSYS`](Mx3dGeCSYS.md)

Get the position of the cylinder.

#### Returns

[`Mx3dGeCSYS`](Mx3dGeCSYS.md)

The position of the cylinder.

___

### Radius

▸ **Radius**(): `number`

Get the radius of the cylinder.

#### Returns

`number`

The radius of a cylinder.

___

### Rotate

▸ **Rotate**(`theA1`, `theAng`): `void`

Rotate the cylinder around its axis.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheA1 | [Mx3dGeAxis] (Mx3dGeAxis. md) | Rotation axis|
|TheAng | Number | Rotation angle|

#### Returns

`void`

___

### Rotated

▸ **Rotated**(`theA1`, `theAng`): [`Mx3dGeCylinder`](Mx3dGeCylinder.md)

Rotate the cylinder around its axis and return the rotated cylinder object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheA1 | [Mx3dGeAxis] (Mx3dGeAxis. md) | Rotation axis|
|TheAng | Number | Rotation angle|

#### Returns

[`Mx3dGeCylinder`](Mx3dGeCylinder.md)

The rotated cylindrical object.

___

### Scale

▸ **Scale**(`theP`, `theS`): `void`

Scale the cylinder.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheP | [Mx3dGePoint] (Mx3dGePoint. md) | Zoom center point|
|TheS | Number | Scale ratio|

#### Returns

`void`

___

### Scaled

▸ **Scaled**(`theP`, `theS`): [`Mx3dGeCylinder`](Mx3dGeCylinder.md)

Scale the cylinder and return the scaled cylinder object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheP | [Mx3dGePoint] (Mx3dGePoint. md) | Zoom center point|
|TheS | Number | Scale ratio|

#### Returns

[`Mx3dGeCylinder`](Mx3dGeCylinder.md)

The scaled cylindrical object.

___

### SetAxis

▸ **SetAxis**(`theA1`): `void`

Set the axis of the cylinder.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheA1 | [Mx3dGeAxis] (Mx3dGeAxis. md) | Axis of the cylinder|

#### Returns

`void`

___

### SetLocation

▸ **SetLocation**(`theLoc`): `void`

Set the origin position of the cylinder.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheLoc | [Mx3dGePoint] (Mx3dGePoint. md) | Origin position|

#### Returns

`void`

___

### SetPosition

▸ **SetPosition**(`theA3`): `void`

Set the position of the cylinder.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheA3 | [Mx3dGeCSYS] (Mx3dGeCSYS. md) | Coordinate system|

#### Returns

`void`

___

### SetRadius

▸ **SetRadius**(`theR`): `void`

Set the radius of the cylinder.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheR | Number | The radius of the cylinder|

#### Returns

`void`

___

### Shape

▸ **Shape**(`H`, `Angle?`): [`Mx3dShapeObject`](Mx3dShapeObject.md)

Create an Mx3dShapeObject object to represent the shape of a cylinder.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|H | number | The height of the cylinder|
| `Angle?` | ` Number ` | Optional parameter, representing the angle of the cylinder|

#### Returns

[`Mx3dShapeObject`](Mx3dShapeObject.md)

Return a new Mx3dShapeObject object representing the shape of a cylinder.

___

### Transform

▸ **Transform**(`theT`): `void`

Transform the cylinder.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|` theT ` | [` Mx3dGeTsf `] (Mx3dGeTsf. md) | Transform matrix|

#### Returns

`void`

___

### Transformed

▸ **Transformed**(`theT`): [`Mx3dGeCylinder`](Mx3dGeCylinder.md)

Transform the cylinder and return the transformed cylinder object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|` theT ` | [` Mx3dGeTsf `] (Mx3dGeTsf. md) | Transform matrix|

#### Returns

[`Mx3dGeCylinder`](Mx3dGeCylinder.md)

The transformed cylindrical object.

___

### TranslateBy2Points

▸ **TranslateBy2Points**(`theP1`, `theP2`): `void`

Translate the position of the cylinder along a straight line between two points.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheP1 | [Mx3dGePoint] (Mx3dGePoint. md) | The first point used to determine the starting point of translation|
|TheP2 | [Mx3dGePoint] (Mx3dGePoint. md) | The second point is used to determine the endpoint of the translation|

#### Returns

`void`

___

### TranslateByVec

▸ **TranslateByVec**(`theV`): `void`

Translate the cylinder through a vector.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheV | [Mx3dGeVec] (Mx3dGeVec. md) | Translation vector|

#### Returns

`void`

___

### TranslatedBy2Points

▸ **TranslatedBy2Points**(`theP1`, `theP2`): [`Mx3dGeCylinder`](Mx3dGeCylinder.md)

Create a new cylindrical object and translate its position along a line between two points.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheP1 | [Mx3dGePoint] (Mx3dGePoint. md) | The first point used to determine the starting point of translation|
|TheP2 | [Mx3dGePoint] (Mx3dGePoint. md) | The second point is used to determine the endpoint of the translation|

#### Returns

[`Mx3dGeCylinder`](Mx3dGeCylinder.md)

Return a new Mx3dGeCylinder object, the translated cylinder.

___

### TranslatedByVec

▸ **TranslatedByVec**(`theV`): [`Mx3dGeCylinder`](Mx3dGeCylinder.md)

Translate the cylinder through a vector and return the translated cylinder object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheV | [Mx3dGeVec] (Mx3dGeVec. md) | Translation vector|

#### Returns

[`Mx3dGeCylinder`](Mx3dGeCylinder.md)

Translated cylindrical object.

___

### UReverse

▸ **UReverse**(): `void`

Reverse the U-parameter direction of the cylinder.

#### Returns

`void`

___

### VReverse

▸ **VReverse**(): `void`

Reverse the V-parameter direction of the cylinder.

#### Returns

`void`

___

### XAxis

▸ **XAxis**(): [`Mx3dGeAxis`](Mx3dGeAxis.md)

Obtain the X-axis of the cylinder.

#### Returns

[`Mx3dGeAxis`](Mx3dGeAxis.md)

X-axis.

___

### YAxis

▸ **YAxis**(): [`Mx3dGeAxis`](Mx3dGeAxis.md)

Obtain the Y-axis of the cylinder.

#### Returns

[`Mx3dGeAxis`](Mx3dGeAxis.md)

Y-axis.
