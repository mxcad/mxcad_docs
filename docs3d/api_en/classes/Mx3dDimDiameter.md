[mxcad_3d API documentation](../README. md)/Mx3dDimDiameter

# Class: Mx3dDimDiameter

## Hierarchy

- [`Mx3dDimObject`](Mx3dDimObject.md)

  ↳ **`Mx3dDimDiameter`**

## Table of contents

### Constructors

- [constructor](Mx3dDimDiameter.md#constructor)

### Methods

- [AnchorPoint](Mx3dDimDiameter.md#anchorpoint)
- [Circle](Mx3dDimDiameter.md#circle)
- [GetFlyout](Mx3dDimDiameter.md#getflyout)
- [GetGeometryType](Mx3dDimDiameter.md#getgeometrytype)
- [GetPlane](Mx3dDimDiameter.md#getplane)
- [GetTextPosition](Mx3dDimDiameter.md#gettextposition)
- [GetValue](Mx3dDimDiameter.md#getvalue)
- [IsTextPositionCustom](Mx3dDimDiameter.md#istextpositioncustom)
- [IsValid](Mx3dDimDiameter.md#isvalid)
- [KindOfDimension](Mx3dDimDiameter.md#kindofdimension)
- [SelToleranceForText2d](Mx3dDimDiameter.md#seltolerancefortext2d)
- [SetComputedValue](Mx3dDimDiameter.md#setcomputedvalue)
- [SetCustomPlane](Mx3dDimDiameter.md#setcustomplane)
- [SetCustomValue](Mx3dDimDiameter.md#setcustomvalue)
- [SetDimensionAspect](Mx3dDimDiameter.md#setdimensionaspect)
- [SetDisplayUnits](Mx3dDimDiameter.md#setdisplayunits)
- [SetFlyout](Mx3dDimDiameter.md#setflyout)
- [SetMeasuredGeometry](Mx3dDimDiameter.md#setmeasuredgeometry)
- [SetModelUnits](Mx3dDimDiameter.md#setmodelunits)
- [SetSelToleranceForText2d](Mx3dDimDiameter.md#setseltolerancefortext2d)
- [SetTextPosition](Mx3dDimDiameter.md#settextposition)
- [Shape](Mx3dDimDiameter.md#shape)
- [UnsetCustomPlane](Mx3dDimDiameter.md#unsetcustomplane)
- [UnsetFixedTextPosition](Mx3dDimDiameter.md#unsetfixedtextposition)

## Constructors

### constructor

• **new Mx3dDimDiameter**(`theCircle`)

Construct diameter dimensions for the specified circle.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|The Circle | [Mx3dGeCircle] (Mx3dGeCircle. md) | The circle to be measured|

#### Overrides

Mx3dDimObject.constructor

• **new Mx3dDimDiameter**(`theCircle`, `thePlane`)

Construct a diameter dimension for a specified circle and orient it according to a given plane.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|The Circle | [Mx3dGeCircle] (Mx3dGeCircle. md) | The circle to be measured|
|ThePlane | [Mx3dGePlane] (Mx3dGePlane. md) | Define the preferred orientation plane for size|

#### Overrides

Mx3dDimObject.constructor

## Methods

### AnchorPoint

▸ **AnchorPoint**(): [`Mx3dGePoint`](Mx3dGePoint.md)

#### Returns

[`Mx3dGePoint`](Mx3dGePoint.md)

Return the anchor point on the circle for this diameter dimension.

___

### Circle

▸ **Circle**(): [`Mx3dGeCircle`](Mx3dGeCircle.md)

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

Get the current plane.

#### Returns

[`Mx3dGePlane`](Mx3dGePlane.md)

Return to the current plane.

___

### GetTextPosition

▸ **GetTextPosition**(): [`Mx3dGePoint`](Mx3dGePoint.md)

Get the text location.

#### Returns

[`Mx3dGePoint`](Mx3dGePoint.md)

Return the text location point.

___

### GetValue

▸ **GetValue**(): `number`

Get the current size value.

#### Returns

`number`

Return the current size value.

___

### IsTextPositionCustom

▸ **IsTextPositionCustom**(): `boolean`

Determine whether the text position is customized.

#### Returns

`boolean`

Returns a Boolean value indicating whether the text position is custom.

___

### IsValid

▸ **IsValid**(): `boolean`

Determine if the current size is valid.

#### Returns

`boolean`

Return a Boolean value indicating whether the size is valid.

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

Obtain the selection tolerance for 2D text.

#### Returns

`number`

Return the selection tolerance of two-dimensional text.

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
|` theValue ` | ` number ` | Customize size values|

#### Returns

`void`

___

### SetDimensionAspect

▸ **SetDimensionAspect**(`theDimensionAspect`): `void`

Set the display appearance of the size.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheDimensionAspect | [Mx3dAspectDim] (Mx3dAspectDim. md) | Size and appearance|

#### Returns

`void`

___

### SetDisplayUnits

▸ **SetDisplayUnits**(`theUnits`): `void`

Set display units.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheUnits | String | Unit string|

#### Returns

`void`

___

### SetFlyout

▸ **SetFlyout**(`theFlyout`): `void`

Set the position distance of the dimension line.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|The Flyout | number | dimension line position distance value|

#### Returns

`void`

___

### SetMeasuredGeometry

▸ **SetMeasuredGeometry**(`theCircle`): `void`

Set the geometry to be measured.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|The Circle | [Mx3dGeCircle] (Mx3dGeCircle. md) | The circle to be measured|

#### Returns

`void`

___

### SetModelUnits

▸ **SetModelUnits**(`theUnits`): `void`

Set model units.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheUnits | String | Unit string|

#### Returns

`void`

___

### SetSelToleranceForText2d

▸ **SetSelToleranceForText2d**(`theTol`): `void`

Set the selection tolerance for 2D text.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheTol | Number | Tolerance value|

#### Returns

`void`

___

### SetTextPosition

▸ **SetTextPosition**(`theTextPos`): `void`

Set the text position.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheTextPos | [Mx3dGePoint] (Mx3dGePoint. md) | Text position point|

#### Returns

`void`

___

### Shape

▸ **Shape**(): [`Mx3dShapeObject`](Mx3dShapeObject.md)

#### Returns

[`Mx3dShapeObject`](Mx3dShapeObject.md)

Return the shape object being measured.

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
