[mxcad_3d API 文档](../README.md) / Mx3dAspectText

# Class: Mx3dAspectText

表示用于定义文本显示属性的类。
此类封装了设置文本颜色、字体、高度、角度、对齐方式和方向的方法。

## Hierarchy

- [`Mx3dAspectObject`](Mx3dAspectObject.md)

  ↳ **`Mx3dAspectText`**

## Table of contents

### Constructors

- [constructor](Mx3dAspectText.md#constructor)

### Methods

- [Angle](Mx3dAspectText.md#angle)
- [Height](Mx3dAspectText.md#height)
- [HorizontalJustification](Mx3dAspectText.md#horizontaljustification)
- [Orientation](Mx3dAspectText.md#orientation)
- [SetAngle](Mx3dAspectText.md#setangle)
- [SetColor](Mx3dAspectText.md#setcolor)
- [SetFont](Mx3dAspectText.md#setfont)
- [SetHeight](Mx3dAspectText.md#setheight)
- [SetHorizontalJustification](Mx3dAspectText.md#sethorizontaljustification)
- [SetOrientation](Mx3dAspectText.md#setorientation)
- [SetVerticalJustification](Mx3dAspectText.md#setverticaljustification)
- [VerticalJustification](Mx3dAspectText.md#verticaljustification)

## Constructors

### constructor

• **new Mx3dAspectText**()

创建一个默认的文字样式对象。

#### Overrides

Mx3dAspectObject.constructor

## Methods

### Angle

▸ **Angle**(): `number`

获取文本显示的角度。

#### Returns

`number`

文本的角度。

___

### Height

▸ **Height**(): `number`

获取文本显示的高度。

#### Returns

`number`

文本的高度。

___

### HorizontalJustification

▸ **HorizontalJustification**(): [`MxHorizontalTextAlignment`](../enums/MdGe.MxHorizontalTextAlignment.md)

获取文本的水平对齐方式。

#### Returns

[`MxHorizontalTextAlignment`](../enums/MdGe.MxHorizontalTextAlignment.md)

水平对齐方式（MdGe.MxHorizontalTextAlignment）。

___

### Orientation

▸ **Orientation**(): [`MxTextPath`](../enums/MdGe.MxTextPath.md)

获取文本的显示方向。

#### Returns

[`MxTextPath`](../enums/MdGe.MxTextPath.md)

文本方向（MdGe.MxTextPath）。

___

### SetAngle

▸ **SetAngle**(`theAngle`): `void`

设置文本显示的角度。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theAngle` | `number` | 要设置的文本角度。 |

#### Returns

`void`

___

### SetColor

▸ **SetColor**(`theColor`): `void`

设置文本显示的颜色。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theColor` | [`Mx3dGeColor`](Mx3dGeColor.md) | 要设置的颜色对象（Mx3dGeColor）。 |

#### Returns

`void`

___

### SetFont

▸ **SetFont**(`theFont`): `void`

设置文本显示的字体。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theFont` | `string` | 要设置的字体名称。 |

#### Returns

`void`

___

### SetHeight

▸ **SetHeight**(`theHeight`): `void`

设置文本显示的高度。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theHeight` | `number` | 要设置的文本高度。 |

#### Returns

`void`

___

### SetHorizontalJustification

▸ **SetHorizontalJustification**(`theJustification`): `void`

设置文本的水平对齐方式。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theJustification` | [`MxHorizontalTextAlignment`](../enums/MdGe.MxHorizontalTextAlignment.md) | 要设置的水平对齐方式（MdGe.MxHorizontalTextAlignment）。 |

#### Returns

`void`

___

### SetOrientation

▸ **SetOrientation**(`theOrientation`): `void`

设置文本的显示方向。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theOrientation` | [`MxTextPath`](../enums/MdGe.MxTextPath.md) | 要设置的文本方向（MdGe.MxTextPath）。 |

#### Returns

`void`

___

### SetVerticalJustification

▸ **SetVerticalJustification**(`theJustification`): `void`

设置文本的垂直对齐方式。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theJustification` | [`MxVerticalTextAlignment`](../enums/MdGe.MxVerticalTextAlignment.md) | 要设置的垂直对齐方式（MdGe.MxVerticalTextAlignment）。 |

#### Returns

`void`

___

### VerticalJustification

▸ **VerticalJustification**(): [`MxVerticalTextAlignment`](../enums/MdGe.MxVerticalTextAlignment.md)

获取文本的垂直对齐方式。

#### Returns

[`MxVerticalTextAlignment`](../enums/MdGe.MxVerticalTextAlignment.md)

垂直对齐方式（MdGe.MxVerticalTextAlignment）。
