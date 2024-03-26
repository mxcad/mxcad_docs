[mxcad API 文档](../README.md) / MdGeRadiusDim

# Class: MdGeRadiusDim

表示半径标注

## Hierarchy

- [`MdGeObject`](MdGeObject.md)

  ↳ **`MdGeRadiusDim`**

## Table of contents

### Constructors

- [constructor](MdGeRadiusDim.md#constructor)

### Properties

- [imp](MdGeRadiusDim.md#imp)

### Methods

- [AcceptDisplayMode](MdGeRadiusDim.md#acceptdisplaymode)
- [AnchorPoint](MdGeRadiusDim.md#anchorpoint)
- [Circle](MdGeRadiusDim.md#circle)
- [DimensionAspect](MdGeRadiusDim.md#dimensionaspect)
- [Display](MdGeRadiusDim.md#display)
- [GetFlyout](MdGeRadiusDim.md#getflyout)
- [GetGeometryType](MdGeRadiusDim.md#getgeometrytype)
- [GetPlane](MdGeRadiusDim.md#getplane)
- [GetTextPosition](MdGeRadiusDim.md#gettextposition)
- [GetValue](MdGeRadiusDim.md#getvalue)
- [IsTextPositionCustom](MdGeRadiusDim.md#istextpositioncustom)
- [IsValid](MdGeRadiusDim.md#isvalid)
- [KindOfDimension](MdGeRadiusDim.md#kindofdimension)
- [SelToleranceForText2d](MdGeRadiusDim.md#seltolerancefortext2d)
- [SetComputedValue](MdGeRadiusDim.md#setcomputedvalue)
- [SetCustomPlane](MdGeRadiusDim.md#setcustomplane)
- [SetCustomValue](MdGeRadiusDim.md#setcustomvalue)
- [SetDimensionAspect](MdGeRadiusDim.md#setdimensionaspect)
- [SetFlyout](MdGeRadiusDim.md#setflyout)
- [SetMeasuredGeometry](MdGeRadiusDim.md#setmeasuredgeometry)
- [SetSelToleranceForText2d](MdGeRadiusDim.md#setseltolerancefortext2d)
- [SetTextPosition](MdGeRadiusDim.md#settextposition)
- [Shape](MdGeRadiusDim.md#shape)
- [UnsetCustomPlane](MdGeRadiusDim.md#unsetcustomplane)
- [UnsetFixedTextPosition](MdGeRadiusDim.md#unsetfixedtextposition)
- [getImp](MdGeRadiusDim.md#getimp)
- [initTempObject](MdGeRadiusDim.md#inittempobject)

## Constructors

### constructor

• **new MdGeRadiusDim**(`p1?`, `p2?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `p1?` | `object` \| [`MdGeCircle`](MdGeCircle.md) |
| `p2?` | [`MdGePoint`](MdGePoint.md) |

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

### AnchorPoint

▸ **AnchorPoint**(): [`MdGePoint`](MdGePoint.md)

#### Returns

[`MdGePoint`](MdGePoint.md)

___

### Circle

▸ **Circle**(): [`MdGeCircle`](MdGeCircle.md)

#### Returns

[`MdGeCircle`](MdGeCircle.md)

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

### SelToleranceForText2d

▸ **SelToleranceForText2d**(): `number`

#### Returns

`number`

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

▸ **SetMeasuredGeometry**(`theCircle`, `theAnchorPoint?`, `theHasAnchor?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theCircle` | [`MdGeCircle`](MdGeCircle.md) |
| `theAnchorPoint?` | [`MdGePoint`](MdGePoint.md) |
| `theHasAnchor?` | `boolean` |

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

### Shape

▸ **Shape**(): [`MdGeShape`](MdGeShape.md)

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
