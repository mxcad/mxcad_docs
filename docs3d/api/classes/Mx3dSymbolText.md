[mxcad_3d API 文档](../README.md) / Mx3dSymbolText

# Class: Mx3dSymbolText

表示一个文字符号，继承自 Mx3dSymbolObject

## Hierarchy

- [`Mx3dSymbolObject`](Mx3dSymbolObject.md)

  ↳ **`Mx3dSymbolText`**

## Table of contents

### Constructors

- [constructor](Mx3dSymbolText.md#constructor)

### Methods

- [FontAspect](Mx3dSymbolText.md#fontaspect)
- [HasFlipping](Mx3dSymbolText.md#hasflipping)
- [HasOrientation3D](Mx3dSymbolText.md#hasorientation3d)
- [HasOwnAnchorPoint](Mx3dSymbolText.md#hasownanchorpoint)
- [Orientation3D](Mx3dSymbolText.md#orientation3d)
- [Position](Mx3dSymbolText.md#position)
- [SetAngle](Mx3dSymbolText.md#setangle)
- [SetColor](Mx3dSymbolText.md#setcolor)
- [SetColorSubTitle](Mx3dSymbolText.md#setcolorsubtitle)
- [SetDisplayType](Mx3dSymbolText.md#setdisplaytype)
- [SetFlipping](Mx3dSymbolText.md#setflipping)
- [SetFont](Mx3dSymbolText.md#setfont)
- [SetFontAspect](Mx3dSymbolText.md#setfontaspect)
- [SetHJustification](Mx3dSymbolText.md#sethjustification)
- [SetHeight](Mx3dSymbolText.md#setheight)
- [SetOrientation3D](Mx3dSymbolText.md#setorientation3d)
- [SetOwnAnchorPoint](Mx3dSymbolText.md#setownanchorpoint)
- [SetPositon](Mx3dSymbolText.md#setpositon)
- [SetText](Mx3dSymbolText.md#settext)
- [SetVJustification](Mx3dSymbolText.md#setvjustification)
- [SetZoomable](Mx3dSymbolText.md#setzoomable)
- [UnsetOrientation3D](Mx3dSymbolText.md#unsetorientation3d)

## Constructors

### constructor

• **new Mx3dSymbolText**()

创建一个默认的文字符号对象。

#### Overrides

Mx3dSymbolObject.constructor

• **new Mx3dSymbolText**(`text`, `height`, `position`)

使用文本、高度和位置创建一个文字符号对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `text` | `string` | 文本内容。 |
| `height` | `number` | 文本高度。 |
| `position` | [`Mx3dGePoint`](Mx3dGePoint.md) | 文本位置。 |

#### Overrides

Mx3dSymbolObject.constructor

## Methods

### FontAspect

▸ **FontAspect**(): [`MxFontAspect`](../enums/MdGe.MxFontAspect.md)

获取字体样式。

#### Returns

[`MxFontAspect`](../enums/MdGe.MxFontAspect.md)

字体外观样式。

___

### HasFlipping

▸ **HasFlipping**(): `boolean`

检查是否翻转。

#### Returns

`boolean`

是否翻转。

___

### HasOrientation3D

▸ **HasOrientation3D**(): `boolean`

检查是否有3D方向。

#### Returns

`boolean`

是否有3D方向。

___

### HasOwnAnchorPoint

▸ **HasOwnAnchorPoint**(): `boolean`

检查是否有自定义锚点。

#### Returns

`boolean`

是否有自定义锚点。

___

### Orientation3D

▸ **Orientation3D**(): [`Mx3dGeCSYSR`](Mx3dGeCSYSR.md)

获取3D方向。

#### Returns

[`Mx3dGeCSYSR`](Mx3dGeCSYSR.md)

3D方向。

___

### Position

▸ **Position**(): [`Mx3dGePoint`](Mx3dGePoint.md)

获取文本位置。

#### Returns

[`Mx3dGePoint`](Mx3dGePoint.md)

文本位置。

___

### SetAngle

▸ **SetAngle**(`theAngle`): `void`

设置文本角度。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theAngle` | `number` | 文本角度。 |

#### Returns

`void`

___

### SetColor

▸ **SetColor**(`theColor`): `void`

设置文本颜色。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theColor` | [`Mx3dGeColor`](Mx3dGeColor.md) | 颜色对象。 |

#### Returns

`void`

▸ **SetColor**(`theR`, `theG`, `theB`): `void`

设置文本颜色。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theR` | `number` | 红色分量。 |
| `theG` | `number` | 绿色分量。 |
| `theB` | `number` | 蓝色分量。 |

#### Returns

`void`

___

### SetColorSubTitle

▸ **SetColorSubTitle**(`theR`, `theG`, `theB`): `void`

设置副标题颜色。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theR` | `number` | 红色分量。 |
| `theG` | `number` | 绿色分量。 |
| `theB` | `number` | 蓝色分量。 |

#### Returns

`void`

___

### SetDisplayType

▸ **SetDisplayType**(`theDisplayType`): `void`

设置显示类型。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theDisplayType` | [`MxTypeOfDisplayText`](../enums/MdGe.MxTypeOfDisplayText.md) | 显示类型。 |

#### Returns

`void`

___

### SetFlipping

▸ **SetFlipping**(`theIsFlipping`): `void`

设置是否翻转。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theIsFlipping` | `boolean` | 是否翻转。 |

#### Returns

`void`

___

### SetFont

▸ **SetFont**(`theFont`): `void`

设置字体。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theFont` | `string` | 字体名称。 |

#### Returns

`void`

___

### SetFontAspect

▸ **SetFontAspect**(`theFontAspect`): `void`

设置字体样式。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theFontAspect` | [`MxFontAspect`](../enums/MdGe.MxFontAspect.md) | 字体样式。 |

#### Returns

`void`

___

### SetHJustification

▸ **SetHJustification**(`theHJust`): `void`

设置水平对齐方式。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theHJust` | [`MxHorizontalTextAlignment`](../enums/MdGe.MxHorizontalTextAlignment.md) | 水平对齐方式。 |

#### Returns

`void`

___

### SetHeight

▸ **SetHeight**(`height`): `void`

设置文本高度。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `height` | `number` | 文本高度。 |

#### Returns

`void`

___

### SetOrientation3D

▸ **SetOrientation3D**(`theOrientation`): `void`

设置3D方向。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theOrientation` | [`Mx3dGeCSYSR`](Mx3dGeCSYSR.md) | 3D方向。 |

#### Returns

`void`

___

### SetOwnAnchorPoint

▸ **SetOwnAnchorPoint**(`theOwnAnchorPoint`): `void`

设置是否有自定义锚点。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theOwnAnchorPoint` | `boolean` | 是否有自定义锚点。 |

#### Returns

`void`

___

### SetPositon

▸ **SetPositon**(`position`): `void`

设置文本位置。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `position` | [`Mx3dGePoint`](Mx3dGePoint.md) | 文本位置。 |

#### Returns

`void`

___

### SetText

▸ **SetText**(`text`): `void`

设置文本内容。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `text` | `string` | 文本内容。 |

#### Returns

`void`

___

### SetVJustification

▸ **SetVJustification**(`theVJust`): `void`

设置垂直对齐方式。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theVJust` | [`MxVerticalTextAlignment`](../enums/MdGe.MxVerticalTextAlignment.md) | 垂直对齐方式。 |

#### Returns

`void`

___

### SetZoomable

▸ **SetZoomable**(`theIsZoomable`): `void`

设置是否可缩放。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theIsZoomable` | `boolean` | 是否可缩放。 |

#### Returns

`void`

___

### UnsetOrientation3D

▸ **UnsetOrientation3D**(): `void`

取消3D方向设置。

#### Returns

`void`
