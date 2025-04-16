[mxcad_3d API documentation](../README. md)/Mx3dDimRadius

# Class: Mx3dDimRadius

## Hierarchy

- [`Mx3dDimObject`](Mx3dDimObject.md)

  ↳ **`Mx3dDimRadius`**

## Table of contents

### Constructors

- [constructor](Mx3dDimRadius.md#constructor)

### Methods

- [AnchorPoint](Mx3dDimRadius.md#anchorpoint)
- [Circle](Mx3dDimRadius.md#circle)
- [GetFlyout](Mx3dDimRadius.md#getflyout)
- [GetGeometryType](Mx3dDimRadius.md#getgeometrytype)
- [GetPlane](Mx3dDimRadius.md#getplane)
- [GetTextPosition](Mx3dDimRadius.md#gettextposition)
- [GetValue](Mx3dDimRadius.md#getvalue)
- [IsTextPositionCustom](Mx3dDimRadius.md#istextpositioncustom)
- [IsValid](Mx3dDimRadius.md#isvalid)
- [KindOfDimension](Mx3dDimRadius.md#kindofdimension)
- [SelToleranceForText2d](Mx3dDimRadius.md#seltolerancefortext2d)
- [SetComputedValue](Mx3dDimRadius.md#setcomputedvalue)
- [SetCustomPlane](Mx3dDimRadius.md#setcustomplane)
- [SetCustomValue](Mx3dDimRadius.md#setcustomvalue)
- [SetDimensionAspect](Mx3dDimRadius.md#setdimensionaspect)
- [SetFlyout](Mx3dDimRadius.md#setflyout)
- [SetMeasuredGeometry](Mx3dDimRadius.md#setmeasuredgeometry)
- [SetSelToleranceForText2d](Mx3dDimRadius.md#setseltolerancefortext2d)
- [SetTextPosition](Mx3dDimRadius.md#settextposition)
- [Shape](Mx3dDimRadius.md#shape)
- [UnsetCustomPlane](Mx3dDimRadius.md#unsetcustomplane)
- [UnsetFixedTextPosition](Mx3dDimRadius.md#unsetfixedtextposition)

## Constructors

### constructor

• **new Mx3dDimRadius**(`theCircle`)

Construct radius dimensions for the specified circle.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|The Circle | [Mx3dGeCircle] (Mx3dGeCircle. md) | The circle to be measured|

#### Overrides

Mx3dDimObject.constructor

• **new Mx3dDimRadius**(`theCircle`, `theAnchorPoint`)

Construct a radius dimension for a specified circle and orient it according to the given anchor points.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|The Circle | [Mx3dGeCircle] (Mx3dGeCircle. md) | The circle to be measured|
|The AnchorPoint | [Mx3dGePoint] (Mx3dGePoint. md) | The anchor point used for orientation must be located on a circle|

#### Overrides

Mx3dDimObject.constructor

## Methods

### AnchorPoint

▸ **AnchorPoint**(): [`Mx3dGePoint`](Mx3dGePoint.md)

Obtain anchor points on the circle for this radius dimension.

#### Returns

[`Mx3dGePoint`](Mx3dGePoint.md)

Return the anchor point on the circle.

___

### Circle

▸ **Circle**(): [`Mx3dGeCircle`](Mx3dGeCircle.md)

Get the circle being measured.

#### Returns

[`Mx3dGeCircle`](Mx3dGeCircle.md)

Return the circle being measured for this size.

___

### GetFlyout

▸ **GetFlyout**(): `number`

Obtain the distance of the dimension line position.

#### Returns

`number`

Return the distance of the dimension line position.

___

### GetGeometryType

▸ **GetGeometryType**(): `number`

Get the geometric type.

#### Returns

`number`

Return the geometric type.

___

### GetPlane

▸ **GetPlane**(): [`Mx3dGePlane`](Mx3dGePlane.md)

Obtain the dimension plane.

#### Returns

[`Mx3dGePlane`](Mx3dGePlane.md)

Return to the dimension plane.

___

### GetTextPosition

▸ **GetTextPosition**(): [`Mx3dGePoint`](Mx3dGePoint.md)

Get the text location.

#### Returns

[`Mx3dGePoint`](Mx3dGePoint.md)

Return the text location.

___

### GetValue

▸ **GetValue**(): `number`

Obtain size values.

#### Returns

`number`

Return the size value.

___

### IsTextPositionCustom

▸ **IsTextPositionCustom**(): `boolean`

Check if the text position is customized.

#### Returns

`boolean`

Return whether it is a custom text location.

___

### IsValid

▸ **IsValid**(): `boolean`

Check if the radius size is valid.

#### Returns

`boolean`

Return whether it is valid.

___

### KindOfDimension

▸ **KindOfDimension**(): [`MxKindOfDimension`](../enums/MdGe.MxKindOfDimension.md)

Obtain the size type.

#### Returns

[`MxKindOfDimension`](../enums/MdGe.MxKindOfDimension.md)

Return size type.

___

### SelToleranceForText2d

▸ **SelToleranceForText2d**(): `number`

Obtain 2D text selection tolerance.

#### Returns

`number`

Return 2D text to select tolerance.

___

### SetComputedValue

▸ **SetComputedValue**(): `void`

Set the calculated size value.

#### Returns

`void`

___

### SetCustomPlane

▸ **SetCustomPlane**(`thePlane`): `void`

Set a custom plane.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|ThePlane | [Mx3dGePlane] (Mx3dGePlane. md) | Custom Plane|

#### Returns

`void`

___

### SetCustomValue

▸ **SetCustomValue**(`theValue`): `void`

Set custom size values.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheValue | Number | Custom size value|

#### Returns

`void`

___

### SetDimensionAspect

▸ **SetDimensionAspect**(`theDimensionAspect`): `void`

Set the appearance of the size.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheDimensionAspect | [Mx3dAspectDim] (Mx3dAspectDim. md) | Appearance of dimensions|

#### Returns

`void`

___

### SetFlyout

▸ **SetFlyout**(`theFlyout`): `void`

Set the position distance of the dimension line.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|The Flyout | Number | Position distance of the dimension line|

#### Returns

`void`

___

### SetMeasuredGeometry

▸ **SetMeasuredGeometry**(`theCircle`): `void`

Set the circle for measurement.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|The Circle | [Mx3dGeCircle] (Mx3dGeCircle. md) | The circle to be measured|

#### Returns

`void`

▸ **SetMeasuredGeometry**(`theCircle`, `theAnchorPoint`, `theHasAnchor`): `void`

Set the measured circle and specify the anchor point.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|The Circle | [Mx3dGeCircle] (Mx3dGeCircle. md) | The circle to be measured|
|The AnchorPoint | [Mx3dGePoint] (Mx3dGePoint. md) | The anchor point used for orientation must be located on a circle|
|'theHasAnchor '|' boolean '| Whether to use anchor points|

#### Returns

`void`

___

### SetSelToleranceForText2d

▸ **SetSelToleranceForText2d**(`theTol`): `void`

Set 2D text selection tolerance.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheTol | Number | 2D text selection tolerance|

#### Returns

`void`

___

### SetTextPosition

▸ **SetTextPosition**(`theTextPos`): `void`

Set the text position.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheTextPos | [Mx3dGePoint] (Mx3dGePoint. md) | The position of the text|

#### Returns

`void`

___

### Shape

▸ **Shape**(): [`Mx3dShapeObject`](Mx3dShapeObject.md)

Obtain the measured shape.

#### Returns

[`Mx3dShapeObject`](Mx3dShapeObject.md)

Return the measured shape.

___

### UnsetCustomPlane

▸ **UnsetCustomPlane**(): `void`

Cancel custom plane.

#### Returns

`void`

___

### UnsetFixedTextPosition

▸ **UnsetFixedTextPosition**(): `void`

Cancel fixed text position.

#### Returns

`void`
