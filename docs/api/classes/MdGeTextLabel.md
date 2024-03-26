[mxcad API 文档](../README.md) / MdGeTextLabel

# Class: MdGeTextLabel

表示文字标签

## Hierarchy

- [`MdGeObject`](MdGeObject.md)

  ↳ **`MdGeTextLabel`**

## Table of contents

### Constructors

- [constructor](MdGeTextLabel.md#constructor)

### Properties

- [imp](MdGeTextLabel.md#imp)

### Methods

- [Display](MdGeTextLabel.md#display)
- [FontAspect](MdGeTextLabel.md#fontaspect)
- [HasFlipping](MdGeTextLabel.md#hasflipping)
- [HasOrientation3D](MdGeTextLabel.md#hasorientation3d)
- [HasOwnAnchorPoint](MdGeTextLabel.md#hasownanchorpoint)
- [Orientation3D](MdGeTextLabel.md#orientation3d)
- [Position](MdGeTextLabel.md#position)
- [SetAngle](MdGeTextLabel.md#setangle)
- [SetColor](MdGeTextLabel.md#setcolor)
- [SetColorSubTitle](MdGeTextLabel.md#setcolorsubtitle)
- [SetDisplayType](MdGeTextLabel.md#setdisplaytype)
- [SetFlipping](MdGeTextLabel.md#setflipping)
- [SetFont](MdGeTextLabel.md#setfont)
- [SetFontAspect](MdGeTextLabel.md#setfontaspect)
- [SetHJustification](MdGeTextLabel.md#sethjustification)
- [SetHeight](MdGeTextLabel.md#setheight)
- [SetOrientation3D](MdGeTextLabel.md#setorientation3d)
- [SetOwnAnchorPoint](MdGeTextLabel.md#setownanchorpoint)
- [SetPositon](MdGeTextLabel.md#setpositon)
- [SetText](MdGeTextLabel.md#settext)
- [SetVJustification](MdGeTextLabel.md#setvjustification)
- [SetZoomable](MdGeTextLabel.md#setzoomable)
- [UnsetOrientation3D](MdGeTextLabel.md#unsetorientation3d)
- [getImp](MdGeTextLabel.md#getimp)
- [initTempObject](MdGeTextLabel.md#inittempobject)

## Constructors

### constructor

• **new MdGeTextLabel**(`p1?`, `p2?`, `p3?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `p1?` | `string` \| `object` |
| `p2?` | `number` |
| `p3?` | [`MdGePoint`](MdGePoint.md) |

#### Overrides

[MdGeObject](MdGeObject.md).[constructor](MdGeObject.md#constructor)

## Properties

### imp

• `Protected` **imp**: `any` = `0`

#### Inherited from

[MdGeObject](MdGeObject.md).[imp](MdGeObject.md#imp)

## Methods

### Display

▸ **Display**(): `void`

#### Returns

`void`

___

### FontAspect

▸ **FontAspect**(): [`MxFontAspect`](../enums/MdGe.MxFontAspect.md)

#### Returns

[`MxFontAspect`](../enums/MdGe.MxFontAspect.md)

___

### HasFlipping

▸ **HasFlipping**(): `boolean`

#### Returns

`boolean`

___

### HasOrientation3D

▸ **HasOrientation3D**(): `boolean`

#### Returns

`boolean`

___

### HasOwnAnchorPoint

▸ **HasOwnAnchorPoint**(): `boolean`

#### Returns

`boolean`

___

### Orientation3D

▸ **Orientation3D**(): [`MdGeCSYSR`](MdGeCSYSR.md)

#### Returns

[`MdGeCSYSR`](MdGeCSYSR.md)

___

### Position

▸ **Position**(): [`MdGePoint`](MdGePoint.md)

#### Returns

[`MdGePoint`](MdGePoint.md)

___

### SetAngle

▸ **SetAngle**(`theAngle`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theAngle` | `number` |

#### Returns

`void`

___

### SetColor

▸ **SetColor**(`theR`, `theG`, `theB`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theR` | `number` |
| `theG` | `number` |
| `theB` | `number` |

#### Returns

`void`

___

### SetColorSubTitle

▸ **SetColorSubTitle**(`theR`, `theG`, `theB`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theR` | `number` |
| `theG` | `number` |
| `theB` | `number` |

#### Returns

`void`

___

### SetDisplayType

▸ **SetDisplayType**(`theDisplayType`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theDisplayType` | [`MxTypeOfDisplayText`](../enums/MdGe.MxTypeOfDisplayText.md) |

#### Returns

`void`

___

### SetFlipping

▸ **SetFlipping**(`theIsFlipping`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theIsFlipping` | `boolean` |

#### Returns

`void`

___

### SetFont

▸ **SetFont**(`theFont`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theFont` | `string` |

#### Returns

`void`

___

### SetFontAspect

▸ **SetFontAspect**(`theFontAspect`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theFontAspect` | [`MxFontAspect`](../enums/MdGe.MxFontAspect.md) |

#### Returns

`void`

___

### SetHJustification

▸ **SetHJustification**(`theHJust`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theHJust` | [`MxHorizontalTextAlignment`](../enums/MdGe.MxHorizontalTextAlignment.md) |

#### Returns

`void`

___

### SetHeight

▸ **SetHeight**(`height`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `height` | `number` |

#### Returns

`void`

___

### SetOrientation3D

▸ **SetOrientation3D**(`theOrientation`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theOrientation` | [`MdGeCSYSR`](MdGeCSYSR.md) |

#### Returns

`void`

___

### SetOwnAnchorPoint

▸ **SetOwnAnchorPoint**(`theOwnAnchorPoint`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theOwnAnchorPoint` | `boolean` |

#### Returns

`void`

___

### SetPositon

▸ **SetPositon**(`position`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `position` | [`MdGePoint`](MdGePoint.md) |

#### Returns

`void`

___

### SetText

▸ **SetText**(`text`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |

#### Returns

`void`

___

### SetVJustification

▸ **SetVJustification**(`theVJust`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theVJust` | [`MxVerticalTextAlignment`](../enums/MdGe.MxVerticalTextAlignment.md) |

#### Returns

`void`

___

### SetZoomable

▸ **SetZoomable**(`theIsZoomable`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theIsZoomable` | `boolean` |

#### Returns

`void`

___

### UnsetOrientation3D

▸ **UnsetOrientation3D**(): `void`

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
