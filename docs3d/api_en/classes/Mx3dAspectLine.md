[mxcad_3d API Document](../README. md)/Mx3dAspectLine

# Class: Mx3dAspectLine

Indicate the line style.

## Hierarchy

- [`Mx3dAspectObject`](Mx3dAspectObject.md)

  ↳ **`Mx3dAspectLine`**

## Table of contents

### Constructors

- [constructor](Mx3dAspectLine.md#constructor)

### Methods

- [SetColor](Mx3dAspectLine.md#setcolor)
- [SetTypeOfLine](Mx3dAspectLine.md#settypeofline)
- [SetWidth](Mx3dAspectLine.md#setwidth)

## Constructors

### constructor

• **new Mx3dAspectLine**(`theColor`, `theType`, `theWidth`)

Constructor, create a line style object that specifies color, line type, and line width.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheColor | [Mx3dGeColor] (Mx3dGeColor. md) | Color|
|TheType | [MxTypeOfLine] (../enums/MdGe. MxTypeOfLine. md) | Line type|
|TheWidth | Number | Line Width|

#### Overrides

Mx3dAspectObject.constructor

## Methods

### SetColor

▸ **SetColor**(`theColor`): `void`

Set the color of the line style object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheColor | [Mx3dGeColor] (Mx3dGeColor. md) | The color object to be set (Mx3dGeColor)|

#### Returns

`void`

___

### SetTypeOfLine

▸ **SetTypeOfLine**(`theType`): `void`

Set the line type of the line style object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheType | [MxTypeOfLine] (../enums/MdGe. MxTypeOfLine. md) | Line type|

#### Returns

`void`

___

### SetWidth

▸ **SetWidth**(`theWidth`): `void`

Set the line width of the line style object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheWidth | Number | Line Width|

#### Returns

`void`
