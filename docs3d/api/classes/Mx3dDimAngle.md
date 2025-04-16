[mxcad_3d API 文档](../README.md) / Mx3dDimAngle

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

构造角度尺寸，针对指定的两条交叉边。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theFirstEdge` | [`Mx3dShapeEdge`](Mx3dShapeEdge.md) | 第一条边。 |
| `theSecondEdge` | [`Mx3dShapeEdge`](Mx3dShapeEdge.md) | 第二条边。 |

#### Overrides

Mx3dDimObject.constructor

• **new Mx3dDimAngle**(`theFirstPoint`, `theSecondPoint`, `theThirdPoint`)

构造角度尺寸，针对指定的三点。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theFirstPoint` | [`Mx3dGePoint`](Mx3dGePoint.md) | 第一点。 |
| `theSecondPoint` | [`Mx3dGePoint`](Mx3dGePoint.md) | 第二点（角度中心点）。 |
| `theThirdPoint` | [`Mx3dGePoint`](Mx3dGePoint.md) | 第三点。 |

#### Overrides

Mx3dDimObject.constructor

## Methods

### CenterPoint

▸ **CenterPoint**(): [`Mx3dGePoint`](Mx3dGePoint.md)

#### Returns

[`Mx3dGePoint`](Mx3dGePoint.md)

返回角度的中心点。

___

### FirstPoint

▸ **FirstPoint**(): [`Mx3dGePoint`](Mx3dGePoint.md)

#### Returns

[`Mx3dGePoint`](Mx3dGePoint.md)

返回角度的第一点。

___

### FirstShape

▸ **FirstShape**(): [`Mx3dShapeObject`](Mx3dShapeObject.md)

#### Returns

[`Mx3dShapeObject`](Mx3dShapeObject.md)

返回第一个形状对象。

___

### GetArrowsVisibility

▸ **GetArrowsVisibility**(): [`MxTypeOfAngleArrowVisibility`](../enums/MdGe.MxTypeOfAngleArrowVisibility.md)

#### Returns

[`MxTypeOfAngleArrowVisibility`](../enums/MdGe.MxTypeOfAngleArrowVisibility.md)

返回箭头可见性类型。

___

### GetDisplayUnits

▸ **GetDisplayUnits**(): `string`

#### Returns

`string`

返回显示单位字符串。

___

### GetFlyout

▸ **GetFlyout**(): `number`

#### Returns

`number`

返回尺寸线位置距离。

___

### GetGeometryType

▸ **GetGeometryType**(): `number`

#### Returns

`number`

返回几何类型。

___

### GetModelUnits

▸ **GetModelUnits**(): `string`

#### Returns

`string`

返回模型单位字符串。

___

### GetPlane

▸ **GetPlane**(): [`Mx3dGePlane`](Mx3dGePlane.md)

#### Returns

[`Mx3dGePlane`](Mx3dGePlane.md)

返回角度的平面。

___

### GetTextPosition

▸ **GetTextPosition**(): [`Mx3dGePoint`](Mx3dGePoint.md)

#### Returns

[`Mx3dGePoint`](Mx3dGePoint.md)

返回文本位置点。

___

### GetType

▸ **GetType**(): [`MxTypeOfAngle`](../enums/MdGe.MxTypeOfAngle.md)

#### Returns

[`MxTypeOfAngle`](../enums/MdGe.MxTypeOfAngle.md)

返回当前角度类型。

___

### GetValue

▸ **GetValue**(): `number`

#### Returns

`number`

返回角度值。

___

### IsTextPositionCustom

▸ **IsTextPositionCustom**(): `boolean`

#### Returns

`boolean`

返回文本位置是否自定义。

___

### IsValid

▸ **IsValid**(): `boolean`

#### Returns

`boolean`

返回是否有效。

___

### KindOfDimension

▸ **KindOfDimension**(): [`MxKindOfDimension`](../enums/MdGe.MxKindOfDimension.md)

#### Returns

[`MxKindOfDimension`](../enums/MdGe.MxKindOfDimension.md)

返回尺寸的类型。

___

### SecondPoint

▸ **SecondPoint**(): [`Mx3dGePoint`](Mx3dGePoint.md)

#### Returns

[`Mx3dGePoint`](Mx3dGePoint.md)

返回角度的第二点。

___

### SecondShape

▸ **SecondShape**(): [`Mx3dShapeObject`](Mx3dShapeObject.md)

#### Returns

[`Mx3dShapeObject`](Mx3dShapeObject.md)

返回第二个形状对象。

___

### SelToleranceForText2d

▸ **SelToleranceForText2d**(): `number`

#### Returns

`number`

返回二维文本选择公差。

___

### SetArrowsVisibility

▸ **SetArrowsVisibility**(`theType`): `void`

设置箭头可见性类型。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theType` | [`MxTypeOfAngleArrowVisibility`](../enums/MdGe.MxTypeOfAngleArrowVisibility.md) | 箭头可见性类型。 |

#### Returns

`void`

___

### SetComputedValue

▸ **SetComputedValue**(): `void`

设置计算值。

#### Returns

`void`

___

### SetCustomPlane

▸ **SetCustomPlane**(`thePlane`): `void`

设置自定义平面。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `thePlane` | [`Mx3dGePlane`](Mx3dGePlane.md) | 自定义平面。 |

#### Returns

`void`

___

### SetCustomValue

▸ **SetCustomValue**(`theValue`): `void`

设置自定义值。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theValue` | `number` | 自定义角度值。 |

#### Returns

`void`

___

### SetDimensionAspect

▸ **SetDimensionAspect**(`theDimensionAspect`): `void`

设置尺寸外观。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theDimensionAspect` | [`Mx3dAspectDim`](Mx3dAspectDim.md) | 尺寸外观。 |

#### Returns

`void`

___

### SetDisplayUnits

▸ **SetDisplayUnits**(`theUnits`): `void`

设置显示单位字符串。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theUnits` | `string` | 显示单位。 |

#### Returns

`void`

___

### SetFlyout

▸ **SetFlyout**(`theFlyout`): `void`

设置尺寸线位置距离。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theFlyout` | `number` | 尺寸线位置距离。 |

#### Returns

`void`

___

### SetMeasuredGeometry

▸ **SetMeasuredGeometry**(`theCone`): `void`

设置测量几何体为圆锥面。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theCone` | [`Mx3dShapeFace`](Mx3dShapeFace.md) | 圆锥面。 |

#### Returns

`void`

▸ **SetMeasuredGeometry**(`theFirstEdge`, `theSecondEdge`): `void`

设置测量几何体为两条交叉边。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theFirstEdge` | [`Mx3dShapeEdge`](Mx3dShapeEdge.md) | 第一条边。 |
| `theSecondEdge` | [`Mx3dShapeEdge`](Mx3dShapeEdge.md) | 第二条边。 |

#### Returns

`void`

▸ **SetMeasuredGeometry**(`theFirstPoint`, `theSecondPoint`, `theThridPoint`): `void`

设置测量几何体为三点。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theFirstPoint` | [`Mx3dGePoint`](Mx3dGePoint.md) | 第一点。 |
| `theSecondPoint` | [`Mx3dGePoint`](Mx3dGePoint.md) | 第二点（角度中心点）。 |
| `theThridPoint` | [`Mx3dGePoint`](Mx3dGePoint.md) | 第三点。 |

#### Returns

`void`

___

### SetModelUnits

▸ **SetModelUnits**(`theUnits`): `void`

设置模型单位字符串。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theUnits` | `string` | 模型单位。 |

#### Returns

`void`

___

### SetSelToleranceForText2d

▸ **SetSelToleranceForText2d**(`theTol`): `void`

设置二维文本选择公差。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theTol` | `number` | 选择公差。 |

#### Returns

`void`

___

### SetTextPosition

▸ **SetTextPosition**(`theTextPos`): `void`

设置文本位置。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theTextPos` | [`Mx3dGePoint`](Mx3dGePoint.md) | 文本位置点。 |

#### Returns

`void`

___

### SetType

▸ **SetType**(`theType`): `void`

设置角度类型。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theType` | [`MxTypeOfAngle`](../enums/MdGe.MxTypeOfAngle.md) | 角度类型。 |

#### Returns

`void`

___

### ThirdShape

▸ **ThirdShape**(): [`Mx3dShapeObject`](Mx3dShapeObject.md)

#### Returns

[`Mx3dShapeObject`](Mx3dShapeObject.md)

返回第三个形状对象。

___

### UnsetCustomPlane

▸ **UnsetCustomPlane**(): `void`

取消设置自定义平面。

#### Returns

`void`

___

### UnsetFixedTextPosition

▸ **UnsetFixedTextPosition**(): `void`

取消设置固定文本位置。

#### Returns

`void`
