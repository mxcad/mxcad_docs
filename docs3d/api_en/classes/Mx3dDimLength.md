[mxcad_3d API documentation](../README. md)/Mx3dDimLength

# Class: Mx3dDimLength

## Hierarchy

- [`Mx3dDimObject`](Mx3dDimObject.md)

  ↳ **`Mx3dDimLength`**

## Table of contents

### Constructors

- [constructor](Mx3dDimLength.md#constructor)

### Methods

- [FirstPoint](Mx3dDimLength.md#firstpoint)
- [FirstShape](Mx3dDimLength.md#firstshape)
- [GetFlyout](Mx3dDimLength.md#getflyout)
- [GetGeometryType](Mx3dDimLength.md#getgeometrytype)
- [GetPlane](Mx3dDimLength.md#getplane)
- [GetTextPosition](Mx3dDimLength.md#gettextposition)
- [GetValue](Mx3dDimLength.md#getvalue)
- [IsTextPositionCustom](Mx3dDimLength.md#istextpositioncustom)
- [IsValid](Mx3dDimLength.md#isvalid)
- [KindOfDimension](Mx3dDimLength.md#kindofdimension)
- [SecondPoint](Mx3dDimLength.md#secondpoint)
- [SecondShape](Mx3dDimLength.md#secondshape)
- [SelToleranceForText2d](Mx3dDimLength.md#seltolerancefortext2d)
- [SetComputedValue](Mx3dDimLength.md#setcomputedvalue)
- [SetCustomPlane](Mx3dDimLength.md#setcustomplane)
- [SetCustomValue](Mx3dDimLength.md#setcustomvalue)
- [SetDimensionAspect](Mx3dDimLength.md#setdimensionaspect)
- [SetDirection](Mx3dDimLength.md#setdirection)
- [SetFlyout](Mx3dDimLength.md#setflyout)
- [SetMeasuredGeometry](Mx3dDimLength.md#setmeasuredgeometry)
- [SetMeasuredShapes](Mx3dDimLength.md#setmeasuredshapes)
- [SetSelToleranceForText2d](Mx3dDimLength.md#setseltolerancefortext2d)
- [SetTextPosition](Mx3dDimLength.md#settextposition)
- [UnsetCustomPlane](Mx3dDimLength.md#unsetcustomplane)
- [UnsetFixedTextPosition](Mx3dDimLength.md#unsetfixedtextposition)

## Constructors

### constructor

• **new Mx3dDimLength**()

Construct an empty length dimension object.

#### Overrides

Mx3dDimObject.constructor

• **new Mx3dDimLength**(`theEdge`, `thePlane`)

Construct length dimensions for specified edges and planes.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|The Edge | [Mx3dShapeEdge] (Mx3dShapeEdge. md) | The measured edge|
|The Plane | [Mx3dGePlane] (Mx3dGePlane. md) | The measured plane|

#### Overrides

Mx3dDimObject.constructor

• **new Mx3dDimLength**(`theFirstPoint`, `theSecondPoint`, `thePlane`)

Construct length dimensions for specified two points and a plane.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|The FirstPoint | [Mx3dGePoint] (Mx3dGePoint. md) | The first point|
|The Second Point | [Mx3dGePoint] (Mx3dGePoint. md) | Second Point|
|The Plane | [Mx3dGePlane] (Mx3dGePlane. md) | The measured plane|

#### Overrides

Mx3dDimObject.constructor

## Methods

### FirstPoint

▸ **FirstPoint**(): [`Mx3dGePoint`](Mx3dGePoint.md)

Return the first point of the length dimension.

#### Returns

[`Mx3dGePoint`](Mx3dGePoint.md)

The first point.

___

### FirstShape

▸ **FirstShape**(): [`Mx3dShapeObject`](Mx3dShapeObject.md)

Return the first shape object of length dimension.

#### Returns

[`Mx3dShapeObject`](Mx3dShapeObject.md)

The first shape object.

___

### GetFlyout

▸ **GetFlyout**(): `number`

Obtain the distance of the dimension line position.

#### Returns

`number`

Distance of dimension line position.

___

### GetGeometryType

▸ **GetGeometryType**(): `number`

Get the geometric type.

#### Returns

`number`

Geometric type.

___

### GetPlane

▸ **GetPlane**(): [`Mx3dGePlane`](Mx3dGePlane.md)

Obtain the measurement plane.

#### Returns

[`Mx3dGePlane`](Mx3dGePlane.md)

Measure the plane.

___

### GetTextPosition

▸ **GetTextPosition**(): [`Mx3dGePoint`](Mx3dGePoint.md)

Get the text location.

#### Returns

[`Mx3dGePoint`](Mx3dGePoint.md)

Text location.

___

### GetValue

▸ **GetValue**(): `number`

Obtain size values.

#### Returns

`number`

Size value.

___

### IsTextPositionCustom

▸ **IsTextPositionCustom**(): `boolean`

Check if the text position is customized.

#### Returns

`boolean`

If the text position is customized, return true; Otherwise, return false.

___

### IsValid

▸ **IsValid**(): `boolean`

Check if the size is valid.

#### Returns

`boolean`

If the size is valid, return true; Otherwise, return false.

___

### KindOfDimension

▸ **KindOfDimension**(): [`MxKindOfDimension`](../enums/MdGe.MxKindOfDimension.md)

Obtain the size type.

#### Returns

[`MxKindOfDimension`](../enums/MdGe.MxKindOfDimension.md)

Size type.

___

### SecondPoint

▸ **SecondPoint**(): [`Mx3dGePoint`](Mx3dGePoint.md)

Return the second point of the length dimension.

#### Returns

[`Mx3dGePoint`](Mx3dGePoint.md)

Second point.

___

### SecondShape

▸ **SecondShape**(): [`Mx3dShapeObject`](Mx3dShapeObject.md)

Return the second shape object of length dimension.

#### Returns

[`Mx3dShapeObject`](Mx3dShapeObject.md)

The second shape object.

___

### SelToleranceForText2d

▸ **SelToleranceForText2d**(): `number`

Obtain 2D text selection tolerance.

#### Returns

`number`

2D text selection tolerance.

___

### SetComputedValue

▸ **SetComputedValue**(): `void`

Set the calculated value.

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

Set custom values.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|` theValue ` | ` number ` | Custom value|

#### Returns

`void`

___

### SetDimensionAspect

▸ **SetDimensionAspect**(`theDimensionAspect`): `void`

Set the size and appearance.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheDimensionAspect | [Mx3dAspectDim] (Mx3dAspectDim. md) | Size and appearance|

#### Returns

`void`

___

### SetDirection

▸ **SetDirection**(`theDirection`, `theUseDirection`): `void`

Set custom direction.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|The Direction | [Mx3dGeDir] (Mx3dGeDir. md) | Direction|
|` theUseDirection ` | ` boolean ` | Whether to use a custom direction|

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

▸ **SetMeasuredGeometry**(`theFirstPoint`, `theSecondPoint`, `thePlane`): `void`

Set measurement geometry based on specified two points and a plane.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|The FirstPoint | [Mx3dGePoint] (Mx3dGePoint. md) | The first point|
|The Second Point | [Mx3dGePoint] (Mx3dGePoint. md) | Second Point|
|The Plane | [Mx3dGePlane] (Mx3dGePlane. md) | The measured plane|

#### Returns

`void`

___

### SetMeasuredShapes

▸ **SetMeasuredShapes**(`theFirstShape`, `theSecondShape`): `void`

Set the measurement geometry based on the specified shape.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|The FirstShape | [Mx3dShapeObject] (Mx3dShapeObject. md) | The first shape object|
|The Second Shape | [Mx3dShapeObject] (Mx3dShapeObject. md) | Second Shape Object|

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
|TheTextPos | [Mx3dGePoint] (Mx3dGePoint. md) | Text position|

#### Returns

`void`

___

### UnsetCustomPlane

▸ **UnsetCustomPlane**(): `void`

Cancel custom plane settings.

#### Returns

`void`

___

### UnsetFixedTextPosition

▸ **UnsetFixedTextPosition**(): `void`

Cancel fixed text position.

#### Returns

`void`
