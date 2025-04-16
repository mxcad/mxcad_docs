[mxcad_3d API Document](../README. md)/Mx3dAspectArrow

# Class: Mx3dAspectArrow

The Mx3dAspectArrow class is used to define the display properties of arrows.
This class provides methods for setting arrow angle, length, color, and scaling properties.

## Hierarchy

- [`Mx3dAspectObject`](Mx3dAspectObject.md)

  ↳ **`Mx3dAspectArrow`**

## Table of contents

### Constructors

- [constructor](Mx3dAspectArrow.md#constructor)

### Methods

- [Angle](Mx3dAspectArrow.md#angle)
- [IsZoomable](Mx3dAspectArrow.md#iszoomable)
- [Length](Mx3dAspectArrow.md#length)
- [SetAngle](Mx3dAspectArrow.md#setangle)
- [SetColor](Mx3dAspectArrow.md#setcolor)
- [SetLength](Mx3dAspectArrow.md#setlength)
- [SetZoomable](Mx3dAspectArrow.md#setzoomable)

## Constructors

### constructor

• **new Mx3dAspectArrow**()

Construct an arrow to display attribute objects.

#### Overrides

Mx3dAspectObject.constructor

• **new Mx3dAspectArrow**(`anAngle`, `aLength`)

Construct an arrow display attribute object with a specified angle and length.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Angle | number | The angle of the arrow|
|ALength | number | The length of the arrow|

#### Overrides

Mx3dAspectObject.constructor

## Methods

### Angle

▸ **Angle**(): `number`

Get the current angle of the arrow.

#### Returns

`number`

The angle of the current arrow.

___

### IsZoomable

▸ **IsZoomable**(): `boolean`

Check if the arrow is scalable.

#### Returns

`boolean`

If the arrow is scalable, return true; Otherwise, return false.

___

### Length

▸ **Length**(): `number`

Get the current length of the arrow.

#### Returns

`number`

The length of the current arrow.

___

### SetAngle

▸ **SetAngle**(`anAngle`): `void`

Set the angle of the arrow.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|An Angle | Number | Arrow angle to be set|

#### Returns

`void`

___

### SetColor

▸ **SetColor**(`theColor`): `void`

Set the color of the arrow.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheColor | [Mx3dGeColor] (Mx3dGeColor. md) | The arrow color to be set|

#### Returns

`void`

___

### SetLength

▸ **SetLength**(`theLength`): `void`

Set the length of the arrow.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|The Length | Number | The length of the arrow to be set|

#### Returns

`void`

___

### SetZoomable

▸ **SetZoomable**(`theIsZoomable`): `void`

Set whether the arrow is scalable.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|If 'theIsZoomable' | 'boolean' | is true, the arrow is scalable; Otherwise, it is false|

#### Returns

`void`
