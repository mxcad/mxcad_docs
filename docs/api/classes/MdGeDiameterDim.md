[mxcad API 文档](../README.md) / MdGeDiameterDim

# Class: MdGeDiameterDim

表示直径标注

## Hierarchy

- [`MdGeObject`](MdGeObject.md)

  ↳ **`MdGeDiameterDim`**

## Table of contents

### Constructors

- [constructor](MdGeDiameterDim.md#constructor)

### Properties

- [imp](MdGeDiameterDim.md#imp)

### Methods

- [AcceptDisplayMode](MdGeDiameterDim.md#acceptdisplaymode)
- [AnchorPoint](MdGeDiameterDim.md#anchorpoint)
- [Circle](MdGeDiameterDim.md#circle)
- [DimensionAspect](MdGeDiameterDim.md#dimensionaspect)
- [Display](MdGeDiameterDim.md#display)
- [GetFlyout](MdGeDiameterDim.md#getflyout)
- [GetGeometryType](MdGeDiameterDim.md#getgeometrytype)
- [GetPlane](MdGeDiameterDim.md#getplane)
- [GetTextPosition](MdGeDiameterDim.md#gettextposition)
- [GetValue](MdGeDiameterDim.md#getvalue)
- [IsTextPositionCustom](MdGeDiameterDim.md#istextpositioncustom)
- [IsValid](MdGeDiameterDim.md#isvalid)
- [KindOfDimension](MdGeDiameterDim.md#kindofdimension)
- [SelToleranceForText2d](MdGeDiameterDim.md#seltolerancefortext2d)
- [SetComputedValue](MdGeDiameterDim.md#setcomputedvalue)
- [SetCustomPlane](MdGeDiameterDim.md#setcustomplane)
- [SetCustomValue](MdGeDiameterDim.md#setcustomvalue)
- [SetDimensionAspect](MdGeDiameterDim.md#setdimensionaspect)
- [SetDisplayUnits](MdGeDiameterDim.md#setdisplayunits)
- [SetFlyout](MdGeDiameterDim.md#setflyout)
- [SetMeasuredGeometry](MdGeDiameterDim.md#setmeasuredgeometry)
- [SetModelUnits](MdGeDiameterDim.md#setmodelunits)
- [SetSelToleranceForText2d](MdGeDiameterDim.md#setseltolerancefortext2d)
- [SetTextPosition](MdGeDiameterDim.md#settextposition)
- [Shape](MdGeDiameterDim.md#shape)
- [UnsetCustomPlane](MdGeDiameterDim.md#unsetcustomplane)
- [UnsetFixedTextPosition](MdGeDiameterDim.md#unsetfixedtextposition)
- [getImp](MdGeDiameterDim.md#getimp)
- [initTempObject](MdGeDiameterDim.md#inittempobject)

## Constructors

### constructor

• **new MdGeDiameterDim**(`p1?`, `p2?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `p1?` | `object` \| [`MdGeCircle`](MdGeCircle.md) |
| `p2?` | [`MdGePlane`](MdGePlane.md) |

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

▸ **SetMeasuredGeometry**(`theCircle`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theCircle` | [`MdGeCircle`](MdGeCircle.md) |

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
