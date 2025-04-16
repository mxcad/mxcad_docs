[mxcad_3d API Document](../README. md)/Mx3dGeCircuit

# Class: Mx3dGeCircle

Non parametric geometric circle

## Hierarchy

- [`Mx3dGeObject`](Mx3dGeObject.md)

  ↳ **`Mx3dGeCircle`**

## Table of contents

### Constructors

- [constructor](Mx3dGeCircle.md#constructor)

### Methods

- [Area](Mx3dGeCircle.md#area)
- [Axis](Mx3dGeCircle.md#axis)
- [Contains](Mx3dGeCircle.md#contains)
- [Distance](Mx3dGeCircle.md#distance)
- [Length](Mx3dGeCircle.md#length)
- [Location](Mx3dGeCircle.md#location)
- [MirrorByAxis](Mx3dGeCircle.md#mirrorbyaxis)
- [MirrorByCSYSR](Mx3dGeCircle.md#mirrorbycsysr)
- [MirrorByPoint](Mx3dGeCircle.md#mirrorbypoint)
- [MirroredByAxis](Mx3dGeCircle.md#mirroredbyaxis)
- [MirroredByCSYSR](Mx3dGeCircle.md#mirroredbycsysr)
- [MirroredByPoint](Mx3dGeCircle.md#mirroredbypoint)
- [Position](Mx3dGeCircle.md#position)
- [Radius](Mx3dGeCircle.md#radius)
- [Rotate](Mx3dGeCircle.md#rotate)
- [Rotated](Mx3dGeCircle.md#rotated)
- [Scale](Mx3dGeCircle.md#scale)
- [Scaled](Mx3dGeCircle.md#scaled)
- [SetAxis](Mx3dGeCircle.md#setaxis)
- [SetLocation](Mx3dGeCircle.md#setlocation)
- [SetPosition](Mx3dGeCircle.md#setposition)
- [SetRadius](Mx3dGeCircle.md#setradius)
- [SquareDistance](Mx3dGeCircle.md#squaredistance)
- [Transform](Mx3dGeCircle.md#transform)
- [Transformed](Mx3dGeCircle.md#transformed)
- [TranslateBy2Points](Mx3dGeCircle.md#translateby2points)
- [TranslateByVec](Mx3dGeCircle.md#translatebyvec)
- [TranslatedBy2Points](Mx3dGeCircle.md#translatedby2points)
- [TranslatedByVec](Mx3dGeCircle.md#translatedbyvec)
- [XAxis](Mx3dGeCircle.md#xaxis)
- [YAxis](Mx3dGeCircle.md#yaxis)

## Constructors

### constructor

• **new Mx3dGeCircle**()

Create a default circular object.

#### Overrides

Mx3dGeObject.constructor

• **new Mx3dGeCircle**(`theA2`, `theRadius`)

Create a circular object with a coordinate system and radius.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheA2 | [Mx3dGeCSYSR] (Mx3dGeCSYSR. md) | Coordinate system|
|TheRadius | Number | The radius of a circle|

#### Overrides

Mx3dGeObject.constructor

## Methods

### Area

▸ **Area**(): `number`

Return the area of a circle.

#### Returns

`number`

The area of a circle.

___

### Axis

▸ **Axis**(): [`Mx3dGeAxis`](Mx3dGeAxis.md)

Return the axis of the circle.

#### Returns

[`Mx3dGeAxis`](Mx3dGeAxis.md)

The axis of a circle.

___

### Contains

▸ **Contains**(`theP`, `theLinearTolerance`): `boolean`

Determine whether a point is on a circle.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheP | [Mx3dGePoint] (Mx3dGePoint. md) | Point|
|The LinearTolerance | Number | Linear Tolerance|

#### Returns

`boolean`

If the point is on a circle, return true; otherwise, return false.

___

### Distance

▸ **Distance**(`theP`): `number`

Calculate the distance from a circle to a point.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheP | [Mx3dGePoint] (Mx3dGePoint. md) | Point|

#### Returns

`number`

Distance value.

___

### Length

▸ **Length**(): `number`

Return the circumference of a circle.

#### Returns

`number`

The circumference of a circle.

___

### Location

▸ **Location**(): [`Mx3dGePoint`](Mx3dGePoint.md)

Return the position of the circle.

#### Returns

[`Mx3dGePoint`](Mx3dGePoint.md)

The position point of the circle.

___

### MirrorByAxis

▸ **MirrorByAxis**(`theA1`): `void`

Mirror the current circle based on an axis.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheA1 | [Mx3dGeAxis] (Mx3dGeAxis. md) | Mirror axis|

#### Returns

`void`

___

### MirrorByCSYSR

▸ **MirrorByCSYSR**(`theA2`): `void`

Mirror the current circle based on a coordinate system.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheA2 | [Mx3dGeCSYSR] (Mx3dGeCSYSR. md) | Mirror coordinate system|

#### Returns

`void`

___

### MirrorByPoint

▸ **MirrorByPoint**(`theP`): `void`

Mirror the current circle based on a point.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheP | [Mx3dGePoint] (Mx3dGePoint. md) | Mirror point|

#### Returns

`void`

___

### MirroredByAxis

▸ **MirroredByAxis**(`theA1`): [`Mx3dGeCircle`](Mx3dGeCircle.md)

Return the circle mirrored based on an axis.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheA1 | [Mx3dGeAxis] (Mx3dGeAxis. md) | Mirror axis|

#### Returns

[`Mx3dGeCircle`](Mx3dGeCircle.md)

The circle after mirroring.

___

### MirroredByCSYSR

▸ **MirroredByCSYSR**(`theA2`): [`Mx3dGeCircle`](Mx3dGeCircle.md)

Return the circle mirrored based on a coordinate system.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheA2 | [Mx3dGeCSYSR] (Mx3dGeCSYSR. md) | Mirror coordinate system|

#### Returns

[`Mx3dGeCircle`](Mx3dGeCircle.md)

The circle after mirroring.

___

### MirroredByPoint

▸ **MirroredByPoint**(`theP`): [`Mx3dGeCircle`](Mx3dGeCircle.md)

Return the circle mirrored based on a point.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheP | [Mx3dGePoint] (Mx3dGePoint. md) | Mirror point|

#### Returns

[`Mx3dGeCircle`](Mx3dGeCircle.md)

The circle after mirroring.

___

### Position

▸ **Position**(): [`Mx3dGeCSYSR`](Mx3dGeCSYSR.md)

Return the coordinate system of a circle.

#### Returns

[`Mx3dGeCSYSR`](Mx3dGeCSYSR.md)

The coordinate system of a circle.

___

### Radius

▸ **Radius**(): `number`

Return the radius of the circle.

#### Returns

`number`

The radius of a circle.

___

### Rotate

▸ **Rotate**(`theA1`, `theAng`): `void`

Rotate the current circle.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheA1 | [Mx3dGeAxis] (Mx3dGeAxis. md) | Rotation axis|
|TheAng | Number | Rotation angle|

#### Returns

`void`

___

### Rotated

▸ **Rotated**(`theA1`, `theAng`): [`Mx3dGeCircle`](Mx3dGeCircle.md)

Return the rotated circle.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheA1 | [Mx3dGeAxis] (Mx3dGeAxis. md) | Rotation axis|
|TheAng | Number | Rotation angle|

#### Returns

[`Mx3dGeCircle`](Mx3dGeCircle.md)

The rotated circle.

___

### Scale

▸ **Scale**(`theP`, `theS`): `void`

Scale the current circle.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheP | [Mx3dGePoint] (Mx3dGePoint. md) | Zoom center point|
|TheS | Number | Scale ratio|

#### Returns

`void`

___

### Scaled

▸ **Scaled**(`theP`, `theS`): [`Mx3dGeCircle`](Mx3dGeCircle.md)

Return the scaled circle.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheP | [Mx3dGePoint] (Mx3dGePoint. md) | Zoom center point|
|TheS | Number | Scale ratio|

#### Returns

[`Mx3dGeCircle`](Mx3dGeCircle.md)

The scaled circle.

___

### SetAxis

▸ **SetAxis**(`theA1`): `void`

Set the axis of the circle.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheA1 | [Mx3dGeAxis] (Mx3dGeAxis. md) | The axis of a circle|

#### Returns

`void`

___

### SetLocation

▸ **SetLocation**(`theP`): `void`

Set the position of the circle.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheP | [Mx3dGePoint] (Mx3dGePoint. md) | The position point of the circle|

#### Returns

`void`

___

### SetPosition

▸ **SetPosition**(`theA2`): `void`

Set the coordinate system for the circle.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheA2 | [Mx3dGeCSYSR] (Mx3dGeCSYSR. md) | The coordinate system of a circle|

#### Returns

`void`

___

### SetRadius

▸ **SetRadius**(`theRadius`): `void`

Set the radius of the circle.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheRadius | Number | The radius of a circle|

#### Returns

`void`

___

### SquareDistance

▸ **SquareDistance**(`theP`): `number`

Calculate the square distance from a circle to a point.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheP | [Mx3dGePoint] (Mx3dGePoint. md) | Point|

#### Returns

`number`

Square distance value.

___

### Transform

▸ **Transform**(`theT`): `void`

Transform the current circle according to the transformation matrix.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|` theT ` | [` Mx3dGeTsf `] (Mx3dGeTsf. md) | Transform matrix|

#### Returns

`void`

___

### Transformed

▸ **Transformed**(`theT`): [`Mx3dGeCircle`](Mx3dGeCircle.md)

Return the circle transformed according to the transformation matrix.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|` theT ` | [` Mx3dGeTsf `] (Mx3dGeTsf. md) | Transform matrix|

#### Returns

[`Mx3dGeCircle`](Mx3dGeCircle.md)

The transformed circle.

___

### TranslateBy2Points

▸ **TranslateBy2Points**(`theP1`, `theP2`): `void`

Translate the current circle based on two points.

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

Translate the current circle based on the vector.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheV | [Mx3dGeVec] (Mx3dGeVec. md) | Translation vector|

#### Returns

`void`

___

### TranslatedBy2Points

▸ **TranslatedBy2Points**(`theP1`, `theP2`): [`Mx3dGeCircle`](Mx3dGeCircle.md)

Return the circle translated based on two points.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheP1 | [Mx3dGePoint] (Mx3dGePoint. md) | Starting point|
|TheP2 | [Mx3dGePoint] (Mx3dGePoint. md) | Endpoint|

#### Returns

[`Mx3dGeCircle`](Mx3dGeCircle.md)

The circle after translation.

___

### TranslatedByVec

▸ **TranslatedByVec**(`theV`): [`Mx3dGeCircle`](Mx3dGeCircle.md)

Return the circle translated according to the vector.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheV | [Mx3dGeVec] (Mx3dGeVec. md) | Translation vector|

#### Returns

[`Mx3dGeCircle`](Mx3dGeCircle.md)

The circle after translation.

___

### XAxis

▸ **XAxis**(): [`Mx3dGeAxis`](Mx3dGeAxis.md)

Return the X-axis of the circle.

#### Returns

[`Mx3dGeAxis`](Mx3dGeAxis.md)

The X-axis of a circle.

___

### YAxis

▸ **YAxis**(): [`Mx3dGeAxis`](Mx3dGeAxis.md)

Return the Y-axis of the circle.

#### Returns

[`Mx3dGeAxis`](Mx3dGeAxis.md)

The Y-axis of a circle.
