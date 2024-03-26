[mxcad API 文档](../README.md) / MdGeLengthDim

# Class: MdGeLengthDim

表示长度标注

## Hierarchy

- [`MdGeObject`](MdGeObject.md)

  ↳ **`MdGeLengthDim`**

## Table of contents

### Constructors

- [constructor](MdGeLengthDim.md#constructor)

### Properties

- [imp](MdGeLengthDim.md#imp)

### Methods

- [AcceptDisplayMode](MdGeLengthDim.md#acceptdisplaymode)
- [DimensionAspect](MdGeLengthDim.md#dimensionaspect)
- [Display](MdGeLengthDim.md#display)
- [FirstPoint](MdGeLengthDim.md#firstpoint)
- [FirstShape](MdGeLengthDim.md#firstshape)
- [GetFlyout](MdGeLengthDim.md#getflyout)
- [GetGeometryType](MdGeLengthDim.md#getgeometrytype)
- [GetPlane](MdGeLengthDim.md#getplane)
- [GetTextPosition](MdGeLengthDim.md#gettextposition)
- [GetValue](MdGeLengthDim.md#getvalue)
- [IsTextPositionCustom](MdGeLengthDim.md#istextpositioncustom)
- [IsValid](MdGeLengthDim.md#isvalid)
- [KindOfDimension](MdGeLengthDim.md#kindofdimension)
- [SecondPoint](MdGeLengthDim.md#secondpoint)
- [SecondShape](MdGeLengthDim.md#secondshape)
- [SelToleranceForText2d](MdGeLengthDim.md#seltolerancefortext2d)
- [SetComputedValue](MdGeLengthDim.md#setcomputedvalue)
- [SetCustomPlane](MdGeLengthDim.md#setcustomplane)
- [SetCustomValue](MdGeLengthDim.md#setcustomvalue)
- [SetDimensionAspect](MdGeLengthDim.md#setdimensionaspect)
- [SetDirection](MdGeLengthDim.md#setdirection)
- [SetFlyout](MdGeLengthDim.md#setflyout)
- [SetMeasuredGeometry](MdGeLengthDim.md#setmeasuredgeometry)
- [SetMeasuredShapes](MdGeLengthDim.md#setmeasuredshapes)
- [SetSelToleranceForText2d](MdGeLengthDim.md#setseltolerancefortext2d)
- [SetTextPosition](MdGeLengthDim.md#settextposition)
- [UnsetCustomPlane](MdGeLengthDim.md#unsetcustomplane)
- [UnsetFixedTextPosition](MdGeLengthDim.md#unsetfixedtextposition)
- [getImp](MdGeLengthDim.md#getimp)
- [initTempObject](MdGeLengthDim.md#inittempobject)

## Constructors

### constructor

• **new MdGeLengthDim**(`p1?`, `p2?`, `p3?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `p1?` | `object` \| [`MdGePoint`](MdGePoint.md) \| [`MdGeEdge`](MdGeEdge.md) |
| `p2?` | [`MdGePoint`](MdGePoint.md) \| [`MdGePlane`](MdGePlane.md) |
| `p3?` | [`MdGePlane`](MdGePlane.md) |

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

### SetDirection

▸ **SetDirection**(`theDirection`, `theUseDirection?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theDirection` | [`MdGeDir`](MdGeDir.md) |
| `theUseDirection?` | `boolean` |

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

▸ **SetMeasuredGeometry**(`theFirstPoint`, `theSecondPoint`, `thePlane`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theFirstPoint` | [`MdGePoint`](MdGePoint.md) |
| `theSecondPoint` | [`MdGePoint`](MdGePoint.md) |
| `thePlane` | [`MdGePlane`](MdGePlane.md) |

#### Returns

`void`

___

### SetMeasuredShapes

▸ **SetMeasuredShapes**(`theFirstShape`, `theSecondShape`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theFirstShape` | [`MdGeShape`](MdGeShape.md) |
| `theSecondShape` | [`MdGeShape`](MdGeShape.md) |

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
