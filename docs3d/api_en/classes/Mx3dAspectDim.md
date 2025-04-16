[mxcad_3d API documentation](../README. md)/Mx3dAspectDim

# Class: Mx3dAspectDim

The Mx3dAspectDim class defines the attribute of displaying dimensions in 3D representations.
This includes the setting of lines, text, and arrows related to size measurement.

## Hierarchy

- [`Mx3dAspectObject`](Mx3dAspectObject.md)

  ↳ **`Mx3dAspectDim`**

## Table of contents

### Constructors

- [constructor](Mx3dAspectDim.md#constructor)

### Methods

- [ArrowOrientation](Mx3dAspectDim.md#arroworientation)
- [ArrowTailSize](Mx3dAspectDim.md#arrowtailsize)
- [ExtensionSize](Mx3dAspectDim.md#extensionsize)
- [IsArrows3d](Mx3dAspectDim.md#isarrows3d)
- [IsText3d](Mx3dAspectDim.md#istext3d)
- [IsTextShaded](Mx3dAspectDim.md#istextshaded)
- [IsUnitsDisplayed](Mx3dAspectDim.md#isunitsdisplayed)
- [MakeArrows3d](Mx3dAspectDim.md#makearrows3d)
- [MakeText3d](Mx3dAspectDim.md#maketext3d)
- [MakeTextShaded](Mx3dAspectDim.md#maketextshaded)
- [MakeUnitsDisplayed](Mx3dAspectDim.md#makeunitsdisplayed)
- [SetArrowAspect](Mx3dAspectDim.md#setarrowaspect)
- [SetArrowOrientation](Mx3dAspectDim.md#setarroworientation)
- [SetArrowTailSize](Mx3dAspectDim.md#setarrowtailsize)
- [SetCommonColor](Mx3dAspectDim.md#setcommoncolor)
- [SetExtensionSize](Mx3dAspectDim.md#setextensionsize)
- [SetLineAspect](Mx3dAspectDim.md#setlineaspect)
- [SetTextAspect](Mx3dAspectDim.md#settextaspect)
- [SetTextHorizontalPosition](Mx3dAspectDim.md#settexthorizontalposition)
- [SetTextVerticalPosition](Mx3dAspectDim.md#settextverticalposition)
- [SetValueStringFormat](Mx3dAspectDim.md#setvaluestringformat)
- [TextHorizontalPosition](Mx3dAspectDim.md#texthorizontalposition)
- [TextVerticalPosition](Mx3dAspectDim.md#textverticalposition)
- [ValueStringFormat](Mx3dAspectDim.md#valuestringformat)

## Constructors

### constructor

• **new Mx3dAspectDim**()

Constructor, create a default display size attribute object.

#### Overrides

Mx3dAspectObject.constructor

## Methods

### ArrowOrientation

▸ **ArrowOrientation**(): [`MxDimensionArrowOrientation`](../enums/MdGe.MxDimensionArrowOrientation.md)

Obtain the direction of the arrow.

#### Returns

[`MxDimensionArrowOrientation`](../enums/MdGe.MxDimensionArrowOrientation.md)

Arrow direction.

___

### ArrowTailSize

▸ **ArrowTailSize**(): `number`

Get the size of the arrow tail.

#### Returns

`number`

Size value.

___

### ExtensionSize

▸ **ExtensionSize**(): `number`

Obtain the size of the extension dimension.

#### Returns

`number`

Size value.

___

### IsArrows3d

▸ **IsArrows3d**(): `boolean`

Check if the arrow is in 3D.

#### Returns

`boolean`

If the arrow is 3D, return true; otherwise, return false.

___

### IsText3d

▸ **IsText3d**(): `boolean`

Check if the size text is in 3D.

#### Returns

`boolean`

If the text is 3D, return true; otherwise, return false.

___

### IsTextShaded

▸ **IsTextShaded**(): `boolean`

Check if there are shadows in the 3D size text.

#### Returns

`boolean`

If the text has shadows, return true; otherwise, return false.

___

### IsUnitsDisplayed

▸ **IsUnitsDisplayed**(): `boolean`

Check if the unit is displayed.

#### Returns

`boolean`

If the unit is displayed, return true; otherwise, return false.

___

### MakeArrows3d

▸ **MakeArrows3d**(`theIsArrows3d`): `void`

Set the arrow to 3D or 2D.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|` theIsArrows3d ` | ` boolean ` | If true, set the arrow to 3D; Otherwise, it is 2D|

#### Returns

`void`

___

### MakeText3d

▸ **MakeText3d**(`isText3d`): `void`

Set the size text to 3D or 2D.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|IsText3d | boolean | If true, set the text to 3D; Otherwise, it is 2D|

#### Returns

`void`

___

### MakeTextShaded

▸ **MakeTextShaded**(`theIsTextShaded`): `void`

Turn on or off shadows for 3D sized text.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|If ` theIsTextChaded ` | ` boolean ` | is true, turn on shadows; Otherwise, turn off the shadow|

#### Returns

`void`

___

### MakeUnitsDisplayed

▸ **MakeUnitsDisplayed**(`theIsDisplayed`): `void`

Set whether to display units.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|` theIsDisplayed ` | ` boolean ` | If true, display units; Otherwise, it will not be displayed|

#### Returns

`void`

___

### SetArrowAspect

▸ **SetArrowAspect**(`theAspect`): `void`

Set the display properties of the size arrow.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|The Aspect | [Mx3dAspectArrow] (Mx3dAspectArrow. md) | Arrow display properties|

#### Returns

`void`

___

### SetArrowOrientation

▸ **SetArrowOrientation**(`theArrowOrient`): `void`

Set the direction of the arrow (external or internal).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|The ArrowOrientation | [MxDimension ArrowOrientation] (../enums/MdGe. MxDimension ArrowOrientation. md) | Arrow direction|

#### Returns

`void`

___

### SetArrowTailSize

▸ **SetArrowTailSize**(`theSize`): `void`

Set the size of the arrow tail (without text extension).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheSize | Number | Size value|

#### Returns

`void`

___

### SetCommonColor

▸ **SetCommonColor**(`theColor`): `void`

Set the same color for all parts of the size (lines, arrows, and text).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheColor | [Mx3dGeColor] (Mx3dGeColor. md) | Color value|

#### Returns

`void`

___

### SetExtensionSize

▸ **SetExtensionSize**(`theSize`): `void`

Set the size of the extension dimension.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheSize | Number | Size value|

#### Returns

`void`

___

### SetLineAspect

▸ **SetLineAspect**(`theAspect`): `void`

Set the display properties of dimension lines.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|The Aspect | [Mx3dAspectLine] (Mx3dAspectLine. md) | Line display properties|

#### Returns

`void`

___

### SetTextAspect

▸ **SetTextAspect**(`theAspect`): `void`

Set the display properties of size text.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|The Aspect | [Mx3dAspectText] (Mx3dAspectText. md) | Text display properties|

#### Returns

`void`

___

### SetTextHorizontalPosition

▸ **SetTextHorizontalPosition**(`thePosition`): `void`

Set the horizontal position of the text.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|ThePosition | [MxDimension TextHorizontalPosition] (../enums/MdGe. MxDimension TextHorizontalPosition. md) | The horizontal position of the text|

#### Returns

`void`

___

### SetTextVerticalPosition

▸ **SetTextVerticalPosition**(`thePosition`): `void`

Set the vertical position of the text.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|ThePosition | [MxDimension TextVerticalPosition] (../enums/MdGe. MxDimension TextVerticalPosition. md) | The vertical position of the text|

#### Returns

`void`

___

### SetValueStringFormat

▸ **SetValueStringFormat**(`theFormat`): `void`

Set the syntax format for formatting size value labels.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheFormat | String | Format string|

#### Returns

`void`

___

### TextHorizontalPosition

▸ **TextHorizontalPosition**(): [`MxDimensionTextHorizontalPosition`](../enums/MdGe.MxDimensionTextHorizontalPosition.md)

Retrieve the horizontal position of the text.

#### Returns

[`MxDimensionTextHorizontalPosition`](../enums/MdGe.MxDimensionTextHorizontalPosition.md)

The horizontal position of the text.

___

### TextVerticalPosition

▸ **TextVerticalPosition**(): [`MxDimensionTextVerticalPosition`](../enums/MdGe.MxDimensionTextVerticalPosition.md)

Get the vertical position of the text.

#### Returns

[`MxDimensionTextVerticalPosition`](../enums/MdGe.MxDimensionTextVerticalPosition.md)

The vertical position of the text.

___

### ValueStringFormat

▸ **ValueStringFormat**(): `string`

Obtain the format of the size value label.

#### Returns

`string`

Format string.
