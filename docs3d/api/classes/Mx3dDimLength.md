[mxcad_3d API 文档](../README.md) / Mx3dDimLength

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

构造一个空的长度尺寸对象。

#### Overrides

Mx3dDimObject.constructor

• **new Mx3dDimLength**(`theEdge`, `thePlane`)

构造长度尺寸，针对指定的边和平面。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theEdge` | [`Mx3dShapeEdge`](Mx3dShapeEdge.md) | 测量的边。 |
| `thePlane` | [`Mx3dGePlane`](Mx3dGePlane.md) | 测量的平面。 |

#### Overrides

Mx3dDimObject.constructor

• **new Mx3dDimLength**(`theFirstPoint`, `theSecondPoint`, `thePlane`)

构造长度尺寸，针对指定的两点和平面。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theFirstPoint` | [`Mx3dGePoint`](Mx3dGePoint.md) | 第一点。 |
| `theSecondPoint` | [`Mx3dGePoint`](Mx3dGePoint.md) | 第二点。 |
| `thePlane` | [`Mx3dGePlane`](Mx3dGePlane.md) | 测量的平面。 |

#### Overrides

Mx3dDimObject.constructor

## Methods

### FirstPoint

▸ **FirstPoint**(): [`Mx3dGePoint`](Mx3dGePoint.md)

返回长度尺寸的第一点。

#### Returns

[`Mx3dGePoint`](Mx3dGePoint.md)

第一点。

___

### FirstShape

▸ **FirstShape**(): [`Mx3dShapeObject`](Mx3dShapeObject.md)

返回长度尺寸的第一形状对象。

#### Returns

[`Mx3dShapeObject`](Mx3dShapeObject.md)

第一形状对象。

___

### GetFlyout

▸ **GetFlyout**(): `number`

获取尺寸线位置距离。

#### Returns

`number`

尺寸线位置距离。

___

### GetGeometryType

▸ **GetGeometryType**(): `number`

获取几何类型。

#### Returns

`number`

几何类型。

___

### GetPlane

▸ **GetPlane**(): [`Mx3dGePlane`](Mx3dGePlane.md)

获取测量平面。

#### Returns

[`Mx3dGePlane`](Mx3dGePlane.md)

测量平面。

___

### GetTextPosition

▸ **GetTextPosition**(): [`Mx3dGePoint`](Mx3dGePoint.md)

获取文本位置。

#### Returns

[`Mx3dGePoint`](Mx3dGePoint.md)

文本位置。

___

### GetValue

▸ **GetValue**(): `number`

获取尺寸值。

#### Returns

`number`

尺寸值。

___

### IsTextPositionCustom

▸ **IsTextPositionCustom**(): `boolean`

检查文本位置是否自定义。

#### Returns

`boolean`

如果文本位置是自定义的，则返回 true；否则，返回 false。

___

### IsValid

▸ **IsValid**(): `boolean`

检查尺寸是否有效。

#### Returns

`boolean`

如果尺寸有效，则返回 true；否则，返回 false。

___

### KindOfDimension

▸ **KindOfDimension**(): [`MxKindOfDimension`](../enums/MdGe.MxKindOfDimension.md)

获取尺寸类型。

#### Returns

[`MxKindOfDimension`](../enums/MdGe.MxKindOfDimension.md)

尺寸类型。

___

### SecondPoint

▸ **SecondPoint**(): [`Mx3dGePoint`](Mx3dGePoint.md)

返回长度尺寸的第二点。

#### Returns

[`Mx3dGePoint`](Mx3dGePoint.md)

第二点。

___

### SecondShape

▸ **SecondShape**(): [`Mx3dShapeObject`](Mx3dShapeObject.md)

返回长度尺寸的第二形状对象。

#### Returns

[`Mx3dShapeObject`](Mx3dShapeObject.md)

第二形状对象。

___

### SelToleranceForText2d

▸ **SelToleranceForText2d**(): `number`

获取2D文本选择公差。

#### Returns

`number`

2D文本选择公差。

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
| `theValue` | `number` | 自定义值。 |

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

### SetDirection

▸ **SetDirection**(`theDirection`, `theUseDirection`): `void`

设置自定义方向。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theDirection` | [`Mx3dGeDir`](Mx3dGeDir.md) | 方向。 |
| `theUseDirection` | `boolean` | 是否使用自定义方向。 |

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

▸ **SetMeasuredGeometry**(`theFirstPoint`, `theSecondPoint`, `thePlane`): `void`

设置测量几何，基于指定的两点和平面。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theFirstPoint` | [`Mx3dGePoint`](Mx3dGePoint.md) | 第一点。 |
| `theSecondPoint` | [`Mx3dGePoint`](Mx3dGePoint.md) | 第二点。 |
| `thePlane` | [`Mx3dGePlane`](Mx3dGePlane.md) | 测量的平面。 |

#### Returns

`void`

___

### SetMeasuredShapes

▸ **SetMeasuredShapes**(`theFirstShape`, `theSecondShape`): `void`

设置测量几何，基于指定的形状。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theFirstShape` | [`Mx3dShapeObject`](Mx3dShapeObject.md) | 第一形状对象。 |
| `theSecondShape` | [`Mx3dShapeObject`](Mx3dShapeObject.md) | 第二形状对象。 |

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
| `theTextPos` | [`Mx3dGePoint`](Mx3dGePoint.md) | 文本位置。 |

#### Returns

`void`

___

### UnsetCustomPlane

▸ **UnsetCustomPlane**(): `void`

取消自定义平面设置。

#### Returns

`void`

___

### UnsetFixedTextPosition

▸ **UnsetFixedTextPosition**(): `void`

取消固定文本位置。

#### Returns

`void`
