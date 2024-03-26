[mxcad API 文档](../README.md) / MdGeAngleDim

# Class: MdGeAngleDim

表示角度标注

## Hierarchy

- [`MdGeObject`](MdGeObject.md)

  ↳ **`MdGeAngleDim`**

## Table of contents

### Constructors

- [constructor](MdGeAngleDim.md#constructor)

### Properties

- [imp](MdGeAngleDim.md#imp)

### Methods

- [AcceptDisplayMode](MdGeAngleDim.md#acceptdisplaymode)
- [CenterPoint](MdGeAngleDim.md#centerpoint)
- [DimensionAspect](MdGeAngleDim.md#dimensionaspect)
- [Display](MdGeAngleDim.md#display)
- [FirstPoint](MdGeAngleDim.md#firstpoint)
- [FirstShape](MdGeAngleDim.md#firstshape)
- [GetArrowsVisibility](MdGeAngleDim.md#getarrowsvisibility)
- [GetDisplayUnits](MdGeAngleDim.md#getdisplayunits)
- [GetFlyout](MdGeAngleDim.md#getflyout)
- [GetGeometryType](MdGeAngleDim.md#getgeometrytype)
- [GetModelUnits](MdGeAngleDim.md#getmodelunits)
- [GetPlane](MdGeAngleDim.md#getplane)
- [GetTextPosition](MdGeAngleDim.md#gettextposition)
- [GetType](MdGeAngleDim.md#gettype)
- [GetValue](MdGeAngleDim.md#getvalue)
- [IsTextPositionCustom](MdGeAngleDim.md#istextpositioncustom)
- [IsValid](MdGeAngleDim.md#isvalid)
- [KindOfDimension](MdGeAngleDim.md#kindofdimension)
- [SecondPoint](MdGeAngleDim.md#secondpoint)
- [SecondShape](MdGeAngleDim.md#secondshape)
- [SelToleranceForText2d](MdGeAngleDim.md#seltolerancefortext2d)
- [SetArrowsVisibility](MdGeAngleDim.md#setarrowsvisibility)
- [SetComputedValue](MdGeAngleDim.md#setcomputedvalue)
- [SetCustomPlane](MdGeAngleDim.md#setcustomplane)
- [SetCustomValue](MdGeAngleDim.md#setcustomvalue)
- [SetDimensionAspect](MdGeAngleDim.md#setdimensionaspect)
- [SetDisplayUnits](MdGeAngleDim.md#setdisplayunits)
- [SetFlyout](MdGeAngleDim.md#setflyout)
- [SetMeasuredGeometry](MdGeAngleDim.md#setmeasuredgeometry)
- [SetModelUnits](MdGeAngleDim.md#setmodelunits)
- [SetSelToleranceForText2d](MdGeAngleDim.md#setseltolerancefortext2d)
- [SetTextPosition](MdGeAngleDim.md#settextposition)
- [SetType](MdGeAngleDim.md#settype)
- [ThirdShape](MdGeAngleDim.md#thirdshape)
- [UnsetCustomPlane](MdGeAngleDim.md#unsetcustomplane)
- [UnsetFixedTextPosition](MdGeAngleDim.md#unsetfixedtextposition)
- [getImp](MdGeAngleDim.md#getimp)
- [initTempObject](MdGeAngleDim.md#inittempobject)

## Constructors

### constructor

• **new MdGeAngleDim**(`p1?`, `p2?`, `p3?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `p1?` | `object` \| [`MdGePoint`](MdGePoint.md) \| [`MdGeEdge`](MdGeEdge.md) |
| `p2?` | [`MdGePoint`](MdGePoint.md) \| [`MdGeEdge`](MdGeEdge.md) |
| `p3?` | [`MdGePoint`](MdGePoint.md) |

#### Overrides

[MdGeObject](MdGeObject.md).[constructor](MdGeObject.md#constructor)

## Properties

### imp

• `Protected` **imp**: `any` = `0`

#### Inherited from

[MdGeObject](MdGeObject.md).[imp](MdGeObject.md#imp)

## Methods

### AcceptDisplayMode

▸ **AcceptDisplayMode**(`theMode`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theMode` | `number` |

#### Returns

`boolean`

___

### CenterPoint

▸ **CenterPoint**(): [`MdGePoint`](MdGePoint.md)

#### Returns

[`MdGePoint`](MdGePoint.md)

___

### DimensionAspect

▸ **DimensionAspect**(): [`MdGeDimAspect`](MdGeDimAspect.md)

#### Returns

[`MdGeDimAspect`](MdGeDimAspect.md)

___

### Display

▸ **Display**(): `void`

#### Returns

`void`

___

### FirstPoint

▸ **FirstPoint**(): [`MdGePoint`](MdGePoint.md)

#### Returns

[`MdGePoint`](MdGePoint.md)

___

### FirstShape

▸ **FirstShape**(): [`MdGeShape`](MdGeShape.md)

#### Returns

[`MdGeShape`](MdGeShape.md)

___

### GetArrowsVisibility

▸ **GetArrowsVisibility**(): [`MxTypeOfAngleArrowVisibility`](../enums/MdGe.MxTypeOfAngleArrowVisibility.md)

#### Returns

[`MxTypeOfAngleArrowVisibility`](../enums/MdGe.MxTypeOfAngleArrowVisibility.md)

___

### GetDisplayUnits

▸ **GetDisplayUnits**(): `string`

#### Returns

`string`

___

### GetFlyout

▸ **GetFlyout**(): `number`

#### Returns

`number`

___

### GetGeometryType

▸ **GetGeometryType**(): `number`

#### Returns

`number`

___

### GetModelUnits

▸ **GetModelUnits**(): `string`

#### Returns

`string`

___

### GetPlane

▸ **GetPlane**(): [`MdGePlane`](MdGePlane.md)

#### Returns

[`MdGePlane`](MdGePlane.md)

___

### GetTextPosition

▸ **GetTextPosition**(): [`MdGePoint`](MdGePoint.md)

#### Returns

[`MdGePoint`](MdGePoint.md)

___

### GetType

▸ **GetType**(): [`MxTypeOfAngle`](../enums/MdGe.MxTypeOfAngle.md)

#### Returns

[`MxTypeOfAngle`](../enums/MdGe.MxTypeOfAngle.md)

___

### GetValue

▸ **GetValue**(): `number`

#### Returns

`number`

___

### IsTextPositionCustom

▸ **IsTextPositionCustom**(): `boolean`

#### Returns

`boolean`

___

### IsValid

▸ **IsValid**(): `boolean`

#### Returns

`boolean`

___

### KindOfDimension

▸ **KindOfDimension**(): [`MxKindOfDimension`](../enums/MdGe.MxKindOfDimension.md)

#### Returns

[`MxKindOfDimension`](../enums/MdGe.MxKindOfDimension.md)

___

### SecondPoint

▸ **SecondPoint**(): [`MdGePoint`](MdGePoint.md)

#### Returns

[`MdGePoint`](MdGePoint.md)

___

### SecondShape

▸ **SecondShape**(): [`MdGeShape`](MdGeShape.md)

#### Returns

[`MdGeShape`](MdGeShape.md)

___

### SelToleranceForText2d

▸ **SelToleranceForText2d**(): `number`

#### Returns

`number`

___

### SetArrowsVisibility

▸ **SetArrowsVisibility**(`theType`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theType` | [`MxTypeOfAngleArrowVisibility`](../enums/MdGe.MxTypeOfAngleArrowVisibility.md) |

#### Returns

`void`

___

### SetComputedValue

▸ **SetComputedValue**(): `void`

#### Returns

`void`

___

### SetCustomPlane

▸ **SetCustomPlane**(`thePlane`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `thePlane` | [`MdGePlane`](MdGePlane.md) |

#### Returns

`void`

___

### SetCustomValue

▸ **SetCustomValue**(`theValue`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theValue` | `number` |

#### Returns

`void`

___

### SetDimensionAspect

▸ **SetDimensionAspect**(`theDimensionAspect`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theDimensionAspect` | [`MdGeDimAspect`](MdGeDimAspect.md) |

#### Returns

`void`

___

### SetDisplayUnits

▸ **SetDisplayUnits**(`theUnits`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theUnits` | `string` |

#### Returns

`void`

___

### SetFlyout

▸ **SetFlyout**(`theFlyout`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theFlyout` | `number` |

#### Returns

`void`

___

### SetMeasuredGeometry

▸ **SetMeasuredGeometry**(`p1`, `p2?`, `p3?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `p1` | [`MdGePoint`](MdGePoint.md) \| [`MdGeEdge`](MdGeEdge.md) \| [`MdGeFace`](MdGeFace.md) |
| `p2?` | [`MdGePoint`](MdGePoint.md) \| [`MdGeEdge`](MdGeEdge.md) |
| `p3?` | [`MdGePoint`](MdGePoint.md) |

#### Returns

`void`

___

### SetModelUnits

▸ **SetModelUnits**(`theUnits`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theUnits` | `string` |

#### Returns

`void`

___

### SetSelToleranceForText2d

▸ **SetSelToleranceForText2d**(`theTol`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theTol` | `number` |

#### Returns

`void`

___

### SetTextPosition

▸ **SetTextPosition**(`theTextPos`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theTextPos` | [`MdGePoint`](MdGePoint.md) |

#### Returns

`void`

___

### SetType

▸ **SetType**(`theType`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theType` | [`MxTypeOfAngle`](../enums/MdGe.MxTypeOfAngle.md) |

#### Returns

`void`

___

### ThirdShape

▸ **ThirdShape**(): [`MdGeShape`](MdGeShape.md)

#### Returns

[`MdGeShape`](MdGeShape.md)

___

### UnsetCustomPlane

▸ **UnsetCustomPlane**(): `void`

#### Returns

`void`

___

### UnsetFixedTextPosition

▸ **UnsetFixedTextPosition**(): `void`

#### Returns

`void`

___

### getImp

▸ **getImp**(): `any`

#### Returns

`any`

#### Inherited from

[MdGeObject](MdGeObject.md).[getImp](MdGeObject.md#getimp)

___

### initTempObject

▸ `Protected` **initTempObject**(`imp`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `imp` | `any` |

#### Returns

`void`

#### Inherited from

[MdGeObject](MdGeObject.md).[initTempObject](MdGeObject.md#inittempobject)
