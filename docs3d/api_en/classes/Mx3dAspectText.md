[mxcad_3d API Document](../README. md)/Mx3dAspectText

# Class: Mx3dAspectText

Represents a class used to define text display properties.
This type encapsulates methods for setting text color, font, height, angle, alignment, and orientation.

## Hierarchy

- [`Mx3dAspectObject`](Mx3dAspectObject.md)

  ↳ **`Mx3dAspectText`**

## Table of contents

### Constructors

- [constructor](Mx3dAspectText.md#constructor)

### Methods

- [Angle](Mx3dAspectText.md#angle)
- [Height](Mx3dAspectText.md#height)
- [HorizontalJustification](Mx3dAspectText.md#horizontaljustification)
- [Orientation](Mx3dAspectText.md#orientation)
- [SetAngle](Mx3dAspectText.md#setangle)
- [SetColor](Mx3dAspectText.md#setcolor)
- [SetFont](Mx3dAspectText.md#setfont)
- [SetHeight](Mx3dAspectText.md#setheight)
- [SetHorizontalJustification](Mx3dAspectText.md#sethorizontaljustification)
- [SetOrientation](Mx3dAspectText.md#setorientation)
- [SetVerticalJustification](Mx3dAspectText.md#setverticaljustification)
- [VerticalJustification](Mx3dAspectText.md#verticaljustification)

## Constructors

### constructor

• **new Mx3dAspectText**()

Create a default text style object.

#### Overrides

Mx3dAspectObject.constructor

## Methods

### Angle

▸ **Angle**(): `number`

Obtain the angle at which the text is displayed.

#### Returns

`number`

The perspective of the text.

___

### Height

▸ **Height**(): `number`

Get the height of the text display.

#### Returns

`number`

The height of the text.

___

### HorizontalJustification

▸ **HorizontalJustification**(): [`MxHorizontalTextAlignment`](../enums/MdGe.MxHorizontalTextAlignment.md)

Get the horizontal alignment of the text.

#### Returns

[`MxHorizontalTextAlignment`](../enums/MdGe.MxHorizontalTextAlignment.md)

Horizontal alignment method (MdGe. MxHorizontalTextAlignment).

___

### Orientation

▸ **Orientation**(): [`MxTextPath`](../enums/MdGe.MxTextPath.md)

Get the display orientation of the text.

#### Returns

[`MxTextPath`](../enums/MdGe.MxTextPath.md)

Text direction (MdGe. MxTextPath).

___

### SetAngle

▸ **SetAngle**(`theAngle`): `void`

Set the angle of text display.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|The Angle | number | The text angle to be set|

#### Returns

`void`

___

### SetColor

▸ **SetColor**(`theColor`): `void`

Set the color for text display.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheColor | [Mx3dGeColor] (Mx3dGeColor. md) | The color object to be set (Mx3dGeColor)|

#### Returns

`void`

___

### SetFont

▸ **SetFont**(`theFont`): `void`

Set the font for displaying text.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|The font name to be set is' theFont '|' string '|

#### Returns

`void`

___

### SetHeight

▸ **SetHeight**(`theHeight`): `void`

Set the height for displaying text.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheHeight | Number | The text height to be set|

#### Returns

`void`

___

### SetHorizontalJustification

▸ **SetHorizontalJustification**(`theJustification`): `void`

Set the horizontal alignment of the text.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|The Justification | [MxHorizontalTextAlignment] (../enums/MdGe. MxHorizontalTextAlignment. md) | The horizontal alignment method to be set (MdGe. MxHorizontalTextAlignment)|

#### Returns

`void`

___

### SetOrientation

▸ **SetOrientation**(`theOrientation`): `void`

Set the display direction of the text.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|The Orientation | [MxTextPath] (../enums/MdGe. MxTextPath. md) | The text direction to be set (MdGe. MxTextPath)|

#### Returns

`void`

___

### SetVerticalJustification

▸ **SetVerticalJustification**(`theJustification`): `void`

Set the vertical alignment of the text.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|The Justification | [MxVerticalTextAlignment] (../enums/MdGe. MxVerticalTextAlignment. md) | The vertical alignment method to be set (MdGe. MxVerticalTextAlignment)|

#### Returns

`void`

___

### VerticalJustification

▸ **VerticalJustification**(): [`MxVerticalTextAlignment`](../enums/MdGe.MxVerticalTextAlignment.md)

Get the vertical alignment of the text.

#### Returns

[`MxVerticalTextAlignment`](../enums/MdGe.MxVerticalTextAlignment.md)

Vertical alignment method (MdGe. MxVerticalTextAlignment).
