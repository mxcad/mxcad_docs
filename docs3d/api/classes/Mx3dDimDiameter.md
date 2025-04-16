[mxcad_3d API 文档](../README.md) / Mx3dDimDiameter

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

构造直径尺寸，针对指定的圆形。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theCircle` | [`Mx3dGeCircle`](Mx3dGeCircle.md) | 要测量的圆形。 |

#### Overrides

Mx3dDimObject.constructor

• **new Mx3dDimDiameter**(`theCircle`, `thePlane`)

构造直径尺寸，针对指定的圆形，并按照给定的平面进行定向。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theCircle` | [`Mx3dGeCircle`](Mx3dGeCircle.md) | 要测量的圆形。 |
| `thePlane` | [`Mx3dGePlane`](Mx3dGePlane.md) | 定义尺寸首选定向的平面。 |

#### Overrides

Mx3dDimObject.constructor

## Methods

### AnchorPoint

▸ **AnchorPoint**(): [`Mx3dGePoint`](Mx3dGePoint.md)

#### Returns

[`Mx3dGePoint`](Mx3dGePoint.md)

返回圆上的锚点，用于此直径尺寸。

___

### Circle

▸ **Circle**(): [`Mx3dGeCircle`](Mx3dGeCircle.md)

#### Returns

[`Mx3dGeCircle`](Mx3dGeCircle.md)

返回该尺寸正在测量的圆形。

___

### GetFlyout

▸ **GetFlyout**(): `number`

获取尺寸线位置距离。

#### Returns

`number`

返回尺寸线位置距离。

___

### GetGeometryType

▸ **GetGeometryType**(): `number`

获取几何类型。

#### Returns

`number`

返回几何类型。

___

### GetPlane

▸ **GetPlane**(): [`Mx3dGePlane`](Mx3dGePlane.md)

获取当前的平面。

#### Returns

[`Mx3dGePlane`](Mx3dGePlane.md)

返回当前的平面。

___

### GetTextPosition

▸ **GetTextPosition**(): [`Mx3dGePoint`](Mx3dGePoint.md)

获取文本位置。

#### Returns

[`Mx3dGePoint`](Mx3dGePoint.md)

返回文本位置点。

___

### GetValue

▸ **GetValue**(): `number`

获取当前的尺寸值。

#### Returns

`number`

返回当前的尺寸值。

___

### IsTextPositionCustom

▸ **IsTextPositionCustom**(): `boolean`

判断文本位置是否为自定义。

#### Returns

`boolean`

返回布尔值，表示文本位置是否为自定义。

___

### IsValid

▸ **IsValid**(): `boolean`

判断当前尺寸是否有效。

#### Returns

`boolean`

返回布尔值，表示尺寸是否有效。

___

### KindOfDimension

▸ **KindOfDimension**(): [`MxKindOfDimension`](../enums/MdGe.MxKindOfDimension.md)

获取尺寸类型。

#### Returns

[`MxKindOfDimension`](../enums/MdGe.MxKindOfDimension.md)

返回尺寸类型。

___

### SelToleranceForText2d

▸ **SelToleranceForText2d**(): `number`

获取二维文本的选择容差。

#### Returns

`number`

返回二维文本的选择容差。

___

### SetComputedValue

▸ **SetComputedValue**(): `void`

设置计算的尺寸值。

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

设置自定义尺寸值。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theValue` | `number` | 自定义尺寸值。 |

#### Returns

`void`

___

### SetDimensionAspect

▸ **SetDimensionAspect**(`theDimensionAspect`): `void`

设置尺寸的显示外观。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theDimensionAspect` | [`Mx3dAspectDim`](Mx3dAspectDim.md) | 尺寸外观。 |

#### Returns

`void`

___

### SetDisplayUnits

▸ **SetDisplayUnits**(`theUnits`): `void`

设置显示单位。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theUnits` | `string` | 单位字符串。 |

#### Returns

`void`

___

### SetFlyout

▸ **SetFlyout**(`theFlyout`): `void`

设置尺寸线位置距离。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theFlyout` | `number` | 尺寸线位置距离值。 |

#### Returns

`void`

___

### SetMeasuredGeometry

▸ **SetMeasuredGeometry**(`theCircle`): `void`

设置要测量的几何体。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theCircle` | [`Mx3dGeCircle`](Mx3dGeCircle.md) | 要测量的圆形。 |

#### Returns

`void`

___

### SetModelUnits

▸ **SetModelUnits**(`theUnits`): `void`

设置模型单位。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theUnits` | `string` | 单位字符串。 |

#### Returns

`void`

___

### SetSelToleranceForText2d

▸ **SetSelToleranceForText2d**(`theTol`): `void`

设置二维文本的选择容差。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theTol` | `number` | 容差值。 |

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

### Shape

▸ **Shape**(): [`Mx3dShapeObject`](Mx3dShapeObject.md)

#### Returns

[`Mx3dShapeObject`](Mx3dShapeObject.md)

返回正在测量的形状对象。

___

### UnsetCustomPlane

▸ **UnsetCustomPlane**(): `void`

取消自定义平面。

#### Returns

`void`

___

### UnsetFixedTextPosition

▸ **UnsetFixedTextPosition**(): `void`

取消固定文本位置。

#### Returns

`void`
