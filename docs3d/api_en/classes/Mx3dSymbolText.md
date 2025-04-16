[mxcad_3d API Document](../README. md)/Mx3dSymbolText

# Class: Mx3dSymbolText

Represents a text symbol, inherited from Mx3dSymbolObject

## Hierarchy

- [`Mx3dSymbolObject`](Mx3dSymbolObject.md)

  ↳ **`Mx3dSymbolText`**

## Table of contents

### Constructors

- [constructor](Mx3dSymbolText.md#constructor)

### Methods

- [FontAspect](Mx3dSymbolText.md#fontaspect)
- [HasFlipping](Mx3dSymbolText.md#hasflipping)
- [HasOrientation3D](Mx3dSymbolText.md#hasorientation3d)
- [HasOwnAnchorPoint](Mx3dSymbolText.md#hasownanchorpoint)
- [Orientation3D](Mx3dSymbolText.md#orientation3d)
- [Position](Mx3dSymbolText.md#position)
- [SetAngle](Mx3dSymbolText.md#setangle)
- [SetColor](Mx3dSymbolText.md#setcolor)
- [SetColorSubTitle](Mx3dSymbolText.md#setcolorsubtitle)
- [SetDisplayType](Mx3dSymbolText.md#setdisplaytype)
- [SetFlipping](Mx3dSymbolText.md#setflipping)
- [SetFont](Mx3dSymbolText.md#setfont)
- [SetFontAspect](Mx3dSymbolText.md#setfontaspect)
- [SetHJustification](Mx3dSymbolText.md#sethjustification)
- [SetHeight](Mx3dSymbolText.md#setheight)
- [SetOrientation3D](Mx3dSymbolText.md#setorientation3d)
- [SetOwnAnchorPoint](Mx3dSymbolText.md#setownanchorpoint)
- [SetPositon](Mx3dSymbolText.md#setpositon)
- [SetText](Mx3dSymbolText.md#settext)
- [SetVJustification](Mx3dSymbolText.md#setvjustification)
- [SetZoomable](Mx3dSymbolText.md#setzoomable)
- [UnsetOrientation3D](Mx3dSymbolText.md#unsetorientation3d)

## Constructors

### constructor

• **new Mx3dSymbolText**()

Create a default text symbol object.

#### Overrides

Mx3dSymbolObject.constructor

• **new Mx3dSymbolText**(`text`, `height`, `position`)

Create a text symbol object using text, height, and position.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Text | string | Text content|
|Height | Number | Text height|
|Position | [Mx3dGePoint] (Mx3dGePoint. md) | Text position|

#### Overrides

Mx3dSymbolObject.constructor

## Methods

### FontAspect

▸ **FontAspect**(): [`MxFontAspect`](../enums/MdGe.MxFontAspect.md)

Get font style.

#### Returns

[`MxFontAspect`](../enums/MdGe.MxFontAspect.md)

Font appearance style.

___

### HasFlipping

▸ **HasFlipping**(): `boolean`

Check if it has been flipped.

#### Returns

`boolean`

Whether to flip.

___

### HasOrientation3D

▸ **HasOrientation3D**(): `boolean`

Check if there is a 3D orientation.

#### Returns

`boolean`

Is there a 3D orientation.

___

### HasOwnAnchorPoint

▸ **HasOwnAnchorPoint**(): `boolean`

Check if there are custom anchor points.

#### Returns

`boolean`

Is there a custom anchor point.

___

### Orientation3D

▸ **Orientation3D**(): [`Mx3dGeCSYSR`](Mx3dGeCSYSR.md)

Obtain 3D orientation.

#### Returns

[`Mx3dGeCSYSR`](Mx3dGeCSYSR.md)

3D direction.

___

### Position

▸ **Position**(): [`Mx3dGePoint`](Mx3dGePoint.md)

Get the text location.

#### Returns

[`Mx3dGePoint`](Mx3dGePoint.md)

Text location.

___

### SetAngle

▸ **SetAngle**(`theAngle`): `void`

Set the text angle.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheAngle | Number | Text angle|

#### Returns

`void`

___

### SetColor

▸ **SetColor**(`theColor`): `void`

Set text color.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheColor | [Mx3dGeColor] (Mx3dGeColor. md) | Color object|

#### Returns

`void`

▸ **SetColor**(`theR`, `theG`, `theB`): `void`

Set text color.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheR | number | red component|
|TheG | Number | Green component|
|TheB | Number | Blue component|

#### Returns

`void`

___

### SetColorSubTitle

▸ **SetColorSubTitle**(`theR`, `theG`, `theB`): `void`

Set subtitle color.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheR | number | red component|
|TheG | Number | Green component|
|TheB | Number | Blue component|

#### Returns

`void`

___

### SetDisplayType

▸ **SetDisplayType**(`theDisplayType`): `void`

Set display type.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|The Display Type | [MxTypeOfDisplayText] (../enums/MdGe. MxTypeOfDisplayText. md) | Display Type|

#### Returns

`void`

___

### SetFlipping

▸ **SetFlipping**(`theIsFlipping`): `void`

Set whether to flip.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|` theIsFlipping ` | ` boolean ` | Whether to flip|

#### Returns

`void`

___

### SetFont

▸ **SetFont**(`theFont`): `void`

Set the font.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|The font name is' theFont '|' string '|

#### Returns

`void`

___

### SetFontAspect

▸ **SetFontAspect**(`theFontAspect`): `void`

Set font style.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|The FontAspect | [MxFontAspect] (../enums/MdGe. MxFontAspect. md) | Font Style|

#### Returns

`void`

___

### SetHJustification

▸ **SetHJustification**(`theHJust`): `void`

Set the horizontal alignment method.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheHJust | [MxHorizontalTextAlignment] (../enums/MdGe. MxHorizontalTextAlignment. md) | Horizontal alignment method|

#### Returns

`void`

___

### SetHeight

▸ **SetHeight**(`height`): `void`

Set the text height.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Height | Number | Text height|

#### Returns

`void`

___

### SetOrientation3D

▸ **SetOrientation3D**(`theOrientation`): `void`

Set the 3D orientation.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|The Orientation | [Mx3dGeCSYSR] (Mx3dGeCSYSR. md) | 3D direction|

#### Returns

`void`

___

### SetOwnAnchorPoint

▸ **SetOwnAnchorPoint**(`theOwnAnchorPoint`): `void`

Set whether there is a custom anchor point.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Does' theOwnAnchorPoint '|' boolean '| have a custom anchor point|

#### Returns

`void`

___

### SetPositon

▸ **SetPositon**(`position`): `void`

Set the text position.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Position | [Mx3dGePoint] (Mx3dGePoint. md) | Text position|

#### Returns

`void`

___

### SetText

▸ **SetText**(`text`): `void`

Set the text content.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Text | string | Text content|

#### Returns

`void`

___

### SetVJustification

▸ **SetVJustification**(`theVJust`): `void`

Set the vertical alignment method.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheVJust | [MxVerticalTextAlignment] (../enums/MdGe. MxVerticalTextAlignment. md) | Vertical alignment method|

#### Returns

`void`

___

### SetZoomable

▸ **SetZoomable**(`theIsZoomable`): `void`

Set whether it is scalable.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Is' theIsZoomable '|' boolean '| scalable|

#### Returns

`void`

___

### UnsetOrientation3D

▸ **UnsetOrientation3D**(): `void`

Cancel the 3D orientation setting.

#### Returns

`void`
