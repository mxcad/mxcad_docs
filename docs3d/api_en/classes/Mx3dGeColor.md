[mxcad_3d API Document](../README. md)/Mx3dGeColor

# Class: Mx3dGeColor

The class that represents color objects.

## Hierarchy

- [`Mx3dBaseObject`](Mx3dBaseObject.md)

  ↳ **`Mx3dGeColor`**

## Table of contents

### Constructors

- [constructor](Mx3dGeColor.md#constructor)

### Methods

- [Blue](Mx3dGeColor.md#blue)
- [ChangeContrast](Mx3dGeColor.md#changecontrast)
- [ChangeIntensity](Mx3dGeColor.md#changeintensity)
- [DeltaE2000](Mx3dGeColor.md#deltae2000)
- [Distance](Mx3dGeColor.md#distance)
- [Green](Mx3dGeColor.md#green)
- [Hue](Mx3dGeColor.md#hue)
- [IsDifferent](Mx3dGeColor.md#isdifferent)
- [IsEqual](Mx3dGeColor.md#isequal)
- [Light](Mx3dGeColor.md#light)
- [Name](Mx3dGeColor.md#name)
- [Red](Mx3dGeColor.md#red)
- [Saturation](Mx3dGeColor.md#saturation)
- [SetValues](Mx3dGeColor.md#setvalues)
- [SquareDistance](Mx3dGeColor.md#squaredistance)

## Constructors

### constructor

• **new Mx3dGeColor**()

Create a color object.

#### Overrides

Mx3dBaseObject.constructor

• **new Mx3dGeColor**(`theColorName`)

Create a color object using a color name.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheColorName | [MxNameOfColor] (../enums/MdGe. MxNameOfColor. md) | Color name|

#### Overrides

Mx3dBaseObject.constructor

• **new Mx3dGeColor**(`theR`, `theG`, `theB`, `theType`)

Create a color object using RGB values and color types.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheR | number | red component|
|TheG | Number | Green component|
|TheB | Number | Blue component|
|TheType | [MxTypeOfColor] (../enums/MdGe. MxTypeOfColor. md) | Color type|

#### Overrides

Mx3dBaseObject.constructor

## Methods

### Blue

▸ **Blue**(): `number`

Obtain the value of the blue component.

#### Returns

`number`

Blue component.

___

### ChangeContrast

▸ **ChangeContrast**(`theDelta`): `void`

Change the contrast of colors.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|The Delta | number | contrast variation|

#### Returns

`void`

___

### ChangeIntensity

▸ **ChangeIntensity**(`theDelta`): `void`

Change the intensity of the color.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|The Delta | number | intensity change|

#### Returns

`void`

___

### DeltaE2000

▸ **DeltaE2000**(`theOther`): `number`

Calculate the Delta E2000 difference between colors.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheOther | [Mx3dGeColor] (Mx3dGeColor. md) | Another color object|

#### Returns

`number`

Delta E2000 differential value.

___

### Distance

▸ **Distance**(`theColor`): `number`

Calculate the distance between colors.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheColor | [Mx3dGeColor] (Mx3dGeColor. md) | Another color object|

#### Returns

`number`

Color distance.

___

### Green

▸ **Green**(): `number`

Obtain the value of the green component.

#### Returns

`number`

Green component.

___

### Hue

▸ **Hue**(): `number`

Obtain color tone values.

#### Returns

`number`

Color tone value.

___

### IsDifferent

▸ **IsDifferent**(`theOther`): `boolean`

Determine if the colors are different.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheOther | [Mx3dGeColor] (Mx3dGeColor. md) | Another color object|

#### Returns

`boolean`

Is it different.

___

### IsEqual

▸ **IsEqual**(`theOther`): `boolean`

Determine if the colors are the same.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheOther | [Mx3dGeColor] (Mx3dGeColor. md) | Another color object|

#### Returns

`boolean`

Are they the same.

___

### Light

▸ **Light**(): `number`

Obtain brightness value.

#### Returns

`number`

Brightness value.

___

### Name

▸ **Name**(): [`MxNameOfColor`](../enums/MdGe.MxNameOfColor.md)

Get the name of the color.

#### Returns

[`MxNameOfColor`](../enums/MdGe.MxNameOfColor.md)

Color name.

___

### Red

▸ **Red**(): `number`

Obtain the value of the red component.

#### Returns

`number`

The red component.

___

### Saturation

▸ **Saturation**(): `number`

Obtain saturation value.

#### Returns

`number`

Saturation value.

___

### SetValues

▸ **SetValues**(`theName`): `void`

Set the value of the color.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheName | [MxNameOfColor] (../enums/MdGe. MxNameOfColor. md) | Color name|

#### Returns

`void`

▸ **SetValues**(`theC1`, `theC2`, `theC3`, `theType`): `void`

Set the value of the color.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheC1 | Number | Red component|
|TheC2 | Number | Green component|
|TheC3 | Number | Blue component|
|TheType | [MxTypeOfColor] (../enums/MdGe. MxTypeOfColor. md) | Color type|

#### Returns

`void`

___

### SquareDistance

▸ **SquareDistance**(`theColor`): `number`

Calculate the square distance between colors.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheColor | [Mx3dGeColor] (Mx3dGeColor. md) | Another color object|

#### Returns

`number`

Color squared distance.
