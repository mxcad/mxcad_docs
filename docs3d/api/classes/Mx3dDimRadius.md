[mxcad_3d API 文档](../README.md) / Mx3dDimRadius

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

构造半径尺寸，针对指定的圆形。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theCircle` | [`Mx3dGeCircle`](Mx3dGeCircle.md) | 要测量的圆形。 |

#### Overrides

Mx3dDimObject.constructor

• **new Mx3dDimRadius**(`theCircle`, `theAnchorPoint`)

构造半径尺寸，针对指定的圆形，并按照给定的锚点进行定向。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theCircle` | [`Mx3dGeCircle`](Mx3dGeCircle.md) | 要测量的圆形。 |
| `theAnchorPoint` | [`Mx3dGePoint`](Mx3dGePoint.md) | 用于定向的锚点，必须位于圆上。 |

#### Overrides

Mx3dDimObject.constructor

## Methods

### AnchorPoint

▸ **AnchorPoint**(): [`Mx3dGePoint`](Mx3dGePoint.md)

获取圆上的锚点，用于此半径尺寸。

#### Returns

[`Mx3dGePoint`](Mx3dGePoint.md)

返回圆上的锚点。

___

### Circle

▸ **Circle**(): [`Mx3dGeCircle`](Mx3dGeCircle.md)

获取正在测量的圆形。

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

获取尺寸平面。

#### Returns

[`Mx3dGePlane`](Mx3dGePlane.md)

返回尺寸平面。

___

### GetTextPosition

▸ **GetTextPosition**(): [`Mx3dGePoint`](Mx3dGePoint.md)

获取文本位置。

#### Returns

[`Mx3dGePoint`](Mx3dGePoint.md)

返回文本位置。

___

### GetValue

▸ **GetValue**(): `number`

获取尺寸值。

#### Returns

`number`

返回尺寸值。

___

### IsTextPositionCustom

▸ **IsTextPositionCustom**(): `boolean`

检查文本位置是否为自定义。

#### Returns

`boolean`

返回是否为自定义文本位置。

___

### IsValid

▸ **IsValid**(): `boolean`

检查该半径尺寸是否有效。

#### Returns

`boolean`

返回是否有效。

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

获取2D文本选择公差。

#### Returns

`number`

返回2D文本选择公差。

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

设置自定义的尺寸值。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theValue` | `number` | 自定义的尺寸值。 |

#### Returns

`void`

___

### SetDimensionAspect

▸ **SetDimensionAspect**(`theDimensionAspect`): `void`

设置尺寸的外观。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theDimensionAspect` | [`Mx3dAspectDim`](Mx3dAspectDim.md) | 尺寸的外观。 |

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

▸ **SetMeasuredGeometry**(`theCircle`): `void`

设置测量的圆形。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theCircle` | [`Mx3dGeCircle`](Mx3dGeCircle.md) | 要测量的圆形。 |

#### Returns

`void`

▸ **SetMeasuredGeometry**(`theCircle`, `theAnchorPoint`, `theHasAnchor`): `void`

设置测量的圆形，并指定锚点。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theCircle` | [`Mx3dGeCircle`](Mx3dGeCircle.md) | 要测量的圆形。 |
| `theAnchorPoint` | [`Mx3dGePoint`](Mx3dGePoint.md) | 用于定向的锚点，必须位于圆上。 |
| `theHasAnchor` | `boolean` | 是否使用锚点。 |

#### Returns

`void`

___

### SetSelToleranceForText2d

▸ **SetSelToleranceForText2d**(`theTol`): `void`

设置2D文本选择公差。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theTol` | `number` | 2D文本选择公差。 |

#### Returns

`void`

___

### SetTextPosition

▸ **SetTextPosition**(`theTextPos`): `void`

设置文本位置。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theTextPos` | [`Mx3dGePoint`](Mx3dGePoint.md) | 文本的位置。 |

#### Returns

`void`

___

### Shape

▸ **Shape**(): [`Mx3dShapeObject`](Mx3dShapeObject.md)

获取测量的形状。

#### Returns

[`Mx3dShapeObject`](Mx3dShapeObject.md)

返回测量的形状。

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
