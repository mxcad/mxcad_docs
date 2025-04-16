[mxcad_3d API Document](../README. md)/Mx3dDimAngle

# Class: Mx3dDimAngle

## Hierarchy

- [`Mx3dDimObject`](Mx3dDimObject.md)

  ↳ **`Mx3dDimAngle`**

## Table of contents

### Constructors

- [constructor](Mx3dDimAngle.md#constructor)

### Methods

- [CenterPoint](Mx3dDimAngle.md#centerpoint)
- [FirstPoint](Mx3dDimAngle.md#firstpoint)
- [FirstShape](Mx3dDimAngle.md#firstshape)
- [GetArrowsVisibility](Mx3dDimAngle.md#getarrowsvisibility)
- [GetDisplayUnits](Mx3dDimAngle.md#getdisplayunits)
- [GetFlyout](Mx3dDimAngle.md#getflyout)
- [GetGeometryType](Mx3dDimAngle.md#getgeometrytype)
- [GetModelUnits](Mx3dDimAngle.md#getmodelunits)
- [GetPlane](Mx3dDimAngle.md#getplane)
- [GetTextPosition](Mx3dDimAngle.md#gettextposition)
- [GetType](Mx3dDimAngle.md#gettype)
- [GetValue](Mx3dDimAngle.md#getvalue)
- [IsTextPositionCustom](Mx3dDimAngle.md#istextpositioncustom)
- [IsValid](Mx3dDimAngle.md#isvalid)
- [KindOfDimension](Mx3dDimAngle.md#kindofdimension)
- [SecondPoint](Mx3dDimAngle.md#secondpoint)
- [SecondShape](Mx3dDimAngle.md#secondshape)
- [SelToleranceForText2d](Mx3dDimAngle.md#seltolerancefortext2d)
- [SetArrowsVisibility](Mx3dDimAngle.md#setarrowsvisibility)
- [SetComputedValue](Mx3dDimAngle.md#setcomputedvalue)
- [SetCustomPlane](Mx3dDimAngle.md#setcustomplane)
- [SetCustomValue](Mx3dDimAngle.md#setcustomvalue)
- [SetDimensionAspect](Mx3dDimAngle.md#setdimensionaspect)
- [SetDisplayUnits](Mx3dDimAngle.md#setdisplayunits)
- [SetFlyout](Mx3dDimAngle.md#setflyout)
- [SetMeasuredGeometry](Mx3dDimAngle.md#setmeasuredgeometry)
- [SetModelUnits](Mx3dDimAngle.md#setmodelunits)
- [SetSelToleranceForText2d](Mx3dDimAngle.md#setseltolerancefortext2d)
- [SetTextPosition](Mx3dDimAngle.md#settextposition)
- [SetType](Mx3dDimAngle.md#settype)
- [ThirdShape](Mx3dDimAngle.md#thirdshape)
- [UnsetCustomPlane](Mx3dDimAngle.md#unsetcustomplane)
- [UnsetFixedTextPosition](Mx3dDimAngle.md#unsetfixedtextposition)

## Constructors

### constructor

• **new Mx3dDimAngle**(`theFirstEdge`, `theSecondEdge`)

Construct angle dimensions for the specified two intersecting edges.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|The FirstEdge | [Mx3dShapeEdge] (Mx3dShapeEdge. md) | The first edge|
|The Second Edge | [Mx3dShapeEdge] (Mx3dShapeEdge. md) | The second edge|

#### Overrides

Mx3dDimObject.constructor

• **new Mx3dDimAngle**(`theFirstPoint`, `theSecondPoint`, `theThirdPoint`)

Construct angle dimensions for the specified three points.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|The FirstPoint | [Mx3dGePoint] (Mx3dGePoint. md) | The first point|
|The Second Point | [Mx3dGePoint] (Mx3dGePoint. md) | The second point (angular center point)|
|The Third Point | [Mx3dGePoint] (Mx3dGePoint. md) | The third point|

#### Overrides

Mx3dDimObject.constructor

## Methods

### CenterPoint

▸ **CenterPoint**(): [`Mx3dGePoint`](Mx3dGePoint.md)

#### Returns

[`Mx3dGePoint`](Mx3dGePoint.md)

Return the center point of the angle.

___

### FirstPoint

▸ **FirstPoint**(): [`Mx3dGePoint`](Mx3dGePoint.md)

#### Returns

[`Mx3dGePoint`](Mx3dGePoint.md)

Return to the first point of the angle.

___

### FirstShape

▸ **FirstShape**(): [`Mx3dShapeObject`](Mx3dShapeObject.md)

#### Returns

[`Mx3dShapeObject`](Mx3dShapeObject.md)

Return the first shape object.

___

### GetArrowsVisibility

▸ **GetArrowsVisibility**(): [`MxTypeOfAngleArrowVisibility`](../enums/MdGe.MxTypeOfAngleArrowVisibility.md)

#### Returns

[`MxTypeOfAngleArrowVisibility`](../enums/MdGe.MxTypeOfAngleArrowVisibility.md)

Return arrow visibility type.

___

### GetDisplayUnits

▸ **GetDisplayUnits**(): `string`

#### Returns

`string`

Return the display unit string.

___

### GetFlyout

▸ **GetFlyout**(): `number`

#### Returns

`number`

Return the distance of the dimension line position.

___

### GetGeometryType

▸ **GetGeometryType**(): `number`

#### Returns

`number`

Return the geometric type.

___

### GetModelUnits

▸ **GetModelUnits**(): `string`

#### Returns

`string`

Return the model unit string.

___

### GetPlane

▸ **GetPlane**(): [`Mx3dGePlane`](Mx3dGePlane.md)

#### Returns

[`Mx3dGePlane`](Mx3dGePlane.md)

Return the plane of the angle.

___

### GetTextPosition

▸ **GetTextPosition**(): [`Mx3dGePoint`](Mx3dGePoint.md)

#### Returns

[`Mx3dGePoint`](Mx3dGePoint.md)

Return the text location point.

___

### GetType

▸ **GetType**(): [`MxTypeOfAngle`](../enums/MdGe.MxTypeOfAngle.md)

#### Returns

[`MxTypeOfAngle`](../enums/MdGe.MxTypeOfAngle.md)

Return the current angle type.

___

### GetValue

▸ **GetValue**(): `number`

#### Returns

`number`

Return the angle value.

___

### IsTextPositionCustom

▸ **IsTextPositionCustom**(): `boolean`

#### Returns

`boolean`

Return whether the text position is customized.

___

### IsValid

▸ **IsValid**(): `boolean`

#### Returns

`boolean`

Return whether it is valid.

___

### KindOfDimension

▸ **KindOfDimension**(): [`MxKindOfDimension`](../enums/MdGe.MxKindOfDimension.md)

#### Returns

[`MxKindOfDimension`](../enums/MdGe.MxKindOfDimension.md)

Return the type of size.

___

### SecondPoint

▸ **SecondPoint**(): [`Mx3dGePoint`](Mx3dGePoint.md)

#### Returns

[`Mx3dGePoint`](Mx3dGePoint.md)

Return to the second point of the angle.

___

### SecondShape

▸ **SecondShape**(): [`Mx3dShapeObject`](Mx3dShapeObject.md)

#### Returns

[`Mx3dShapeObject`](Mx3dShapeObject.md)

Return the second shape object.

___

### SelToleranceForText2d

▸ **SelToleranceForText2d**(): `number`

#### Returns

`number`

Return the two-dimensional text and select the tolerance.

___

### SetArrowsVisibility

▸ **SetArrowsVisibility**(`theType`): `void`

Set the arrow visibility type.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|` theType ` | [` MxTypeOfAngleArrowVisibility `] (../enums/MdGe. MxTypeOfAngleArrowVisibility. md) | Arrow visibility type|

#### Returns

`void`

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
|` theValue ` | ` number ` | Customize angle values|

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

### SetDisplayUnits

▸ **SetDisplayUnits**(`theUnits`): `void`

Set the display unit string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheUnits | String | Display units|

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

▸ **SetMeasuredGeometry**(`theCone`): `void`

Set the measurement geometry to a conical surface.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|The Cone | [Mx3dShapeFace] (Mx3dShapeFace. md) | Conical surface|

#### Returns

`void`

▸ **SetMeasuredGeometry**(`theFirstEdge`, `theSecondEdge`): `void`

Set the measurement geometry to two intersecting edges.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|The FirstEdge | [Mx3dShapeEdge] (Mx3dShapeEdge. md) | The first edge|
|The Second Edge | [Mx3dShapeEdge] (Mx3dShapeEdge. md) | The second edge|

#### Returns

`void`

▸ **SetMeasuredGeometry**(`theFirstPoint`, `theSecondPoint`, `theThridPoint`): `void`

Set the measurement geometry to three points.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|The FirstPoint | [Mx3dGePoint] (Mx3dGePoint. md) | The first point|
|The Second Point | [Mx3dGePoint] (Mx3dGePoint. md) | The second point (angular center point)|
|TheThridPoint | [Mx3dGePoint] (Mx3dGePoint. md) | Third point|

#### Returns

`void`

___

### SetModelUnits

▸ **SetModelUnits**(`theUnits`): `void`

Set the model unit string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheUnits | String | Model units|

#### Returns

`void`

___

### SetSelToleranceForText2d

▸ **SetSelToleranceForText2d**(`theTol`): `void`

Set tolerance for selecting 2D text.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheTol | Number | Select the tolerance|

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

### SetType

▸ **SetType**(`theType`): `void`

Set the angle type.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheType | [MxTypeOfAngle] (../enums/MdGe. MxTypeOfAngle. md) | Angle type|

#### Returns

`void`

___

### ThirdShape

▸ **ThirdShape**(): [`Mx3dShapeObject`](Mx3dShapeObject.md)

#### Returns

[`Mx3dShapeObject`](Mx3dShapeObject.md)

Return the third shape object.

___

### UnsetCustomPlane

▸ **UnsetCustomPlane**(): `void`

Cancel setting custom plane.

#### Returns

`void`

___

### UnsetFixedTextPosition

▸ **UnsetFixedTextPosition**(): `void`

Cancel setting fixed text position.

#### Returns

`void`
