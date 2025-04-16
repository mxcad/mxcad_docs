[mxcad_3d API 文档](../README.md) / Mx3dAspectDim

# Class: Mx3dAspectDim

Mx3dAspectDim 类定义了在 3D 表示中显示尺寸的属性。
这包括尺寸测量相关的线条、文本和箭头的设置。

## Hierarchy

- [`Mx3dAspectObject`](Mx3dAspectObject.md)

  ↳ **`Mx3dAspectDim`**

## Table of contents

### Constructors

- [constructor](Mx3dAspectDim.md#constructor)

### Methods

- [ArrowOrientation](Mx3dAspectDim.md#arroworientation)
- [ArrowTailSize](Mx3dAspectDim.md#arrowtailsize)
- [ExtensionSize](Mx3dAspectDim.md#extensionsize)
- [IsArrows3d](Mx3dAspectDim.md#isarrows3d)
- [IsText3d](Mx3dAspectDim.md#istext3d)
- [IsTextShaded](Mx3dAspectDim.md#istextshaded)
- [IsUnitsDisplayed](Mx3dAspectDim.md#isunitsdisplayed)
- [MakeArrows3d](Mx3dAspectDim.md#makearrows3d)
- [MakeText3d](Mx3dAspectDim.md#maketext3d)
- [MakeTextShaded](Mx3dAspectDim.md#maketextshaded)
- [MakeUnitsDisplayed](Mx3dAspectDim.md#makeunitsdisplayed)
- [SetArrowAspect](Mx3dAspectDim.md#setarrowaspect)
- [SetArrowOrientation](Mx3dAspectDim.md#setarroworientation)
- [SetArrowTailSize](Mx3dAspectDim.md#setarrowtailsize)
- [SetCommonColor](Mx3dAspectDim.md#setcommoncolor)
- [SetExtensionSize](Mx3dAspectDim.md#setextensionsize)
- [SetLineAspect](Mx3dAspectDim.md#setlineaspect)
- [SetTextAspect](Mx3dAspectDim.md#settextaspect)
- [SetTextHorizontalPosition](Mx3dAspectDim.md#settexthorizontalposition)
- [SetTextVerticalPosition](Mx3dAspectDim.md#settextverticalposition)
- [SetValueStringFormat](Mx3dAspectDim.md#setvaluestringformat)
- [TextHorizontalPosition](Mx3dAspectDim.md#texthorizontalposition)
- [TextVerticalPosition](Mx3dAspectDim.md#textverticalposition)
- [ValueStringFormat](Mx3dAspectDim.md#valuestringformat)

## Constructors

### constructor

• **new Mx3dAspectDim**()

构造函数，创建一个默认的显示尺寸的属性对象。

#### Overrides

Mx3dAspectObject.constructor

## Methods

### ArrowOrientation

▸ **ArrowOrientation**(): [`MxDimensionArrowOrientation`](../enums/MdGe.MxDimensionArrowOrientation.md)

获取箭头的方向。

#### Returns

[`MxDimensionArrowOrientation`](../enums/MdGe.MxDimensionArrowOrientation.md)

箭头方向。

___

### ArrowTailSize

▸ **ArrowTailSize**(): `number`

获取箭头尾部的大小。

#### Returns

`number`

尺寸值。

___

### ExtensionSize

▸ **ExtensionSize**(): `number`

获取延伸尺寸的大小。

#### Returns

`number`

尺寸值。

___

### IsArrows3d

▸ **IsArrows3d**(): `boolean`

检查箭头是否为 3D。

#### Returns

`boolean`

如果箭头为 3D，返回 true，否则返回 false。

___

### IsText3d

▸ **IsText3d**(): `boolean`

检查尺寸文本是否为 3D。

#### Returns

`boolean`

如果文本为 3D，返回 true，否则返回 false。

___

### IsTextShaded

▸ **IsTextShaded**(): `boolean`

检查 3D 尺寸文本是否有阴影。

#### Returns

`boolean`

如果文本有阴影，返回 true，否则返回 false。

___

### IsUnitsDisplayed

▸ **IsUnitsDisplayed**(): `boolean`

检查是否显示单位。

#### Returns

`boolean`

如果显示单位，返回 true，否则返回 false。

___

### MakeArrows3d

▸ **MakeArrows3d**(`theIsArrows3d`): `void`

设置箭头为 3D 或 2D。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theIsArrows3d` | `boolean` | 如果为 true，将箭头设置为 3D；否则为 2D。 |

#### Returns

`void`

___

### MakeText3d

▸ **MakeText3d**(`isText3d`): `void`

设置尺寸文本为 3D 或 2D。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `isText3d` | `boolean` | 如果为 true，将文本设置为 3D；否则为 2D。 |

#### Returns

`void`

___

### MakeTextShaded

▸ **MakeTextShaded**(`theIsTextShaded`): `void`

开启或关闭 3D 尺寸文本的阴影。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theIsTextShaded` | `boolean` | 如果为 true，开启阴影；否则关闭阴影。 |

#### Returns

`void`

___

### MakeUnitsDisplayed

▸ **MakeUnitsDisplayed**(`theIsDisplayed`): `void`

设置是否显示单位。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theIsDisplayed` | `boolean` | 如果为 true，显示单位；否则不显示。 |

#### Returns

`void`

___

### SetArrowAspect

▸ **SetArrowAspect**(`theAspect`): `void`

设置尺寸箭头的显示属性。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theAspect` | [`Mx3dAspectArrow`](Mx3dAspectArrow.md) | 箭头显示属性。 |

#### Returns

`void`

___

### SetArrowOrientation

▸ **SetArrowOrientation**(`theArrowOrient`): `void`

设置箭头的方向（外部或内部）。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theArrowOrient` | [`MxDimensionArrowOrientation`](../enums/MdGe.MxDimensionArrowOrientation.md) | 箭头方向。 |

#### Returns

`void`

___

### SetArrowTailSize

▸ **SetArrowTailSize**(`theSize`): `void`

设置箭头尾部的大小（无文本的延伸）。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theSize` | `number` | 尺寸值。 |

#### Returns

`void`

___

### SetCommonColor

▸ **SetCommonColor**(`theColor`): `void`

为尺寸的所有部分（线条、箭头和文本）设置相同的颜色。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theColor` | [`Mx3dGeColor`](Mx3dGeColor.md) | 颜色值。 |

#### Returns

`void`

___

### SetExtensionSize

▸ **SetExtensionSize**(`theSize`): `void`

设置延伸尺寸的大小。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theSize` | `number` | 尺寸值。 |

#### Returns

`void`

___

### SetLineAspect

▸ **SetLineAspect**(`theAspect`): `void`

设置尺寸线条的显示属性。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theAspect` | [`Mx3dAspectLine`](Mx3dAspectLine.md) | 线条显示属性。 |

#### Returns

`void`

___

### SetTextAspect

▸ **SetTextAspect**(`theAspect`): `void`

设置尺寸文本的显示属性。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theAspect` | [`Mx3dAspectText`](Mx3dAspectText.md) | 文本显示属性。 |

#### Returns

`void`

___

### SetTextHorizontalPosition

▸ **SetTextHorizontalPosition**(`thePosition`): `void`

设置文本的水平位置。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `thePosition` | [`MxDimensionTextHorizontalPosition`](../enums/MdGe.MxDimensionTextHorizontalPosition.md) | 文本的水平位置。 |

#### Returns

`void`

___

### SetTextVerticalPosition

▸ **SetTextVerticalPosition**(`thePosition`): `void`

设置文本的垂直位置。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `thePosition` | [`MxDimensionTextVerticalPosition`](../enums/MdGe.MxDimensionTextVerticalPosition.md) | 文本的垂直位置。 |

#### Returns

`void`

___

### SetValueStringFormat

▸ **SetValueStringFormat**(`theFormat`): `void`

设置用于格式化尺寸值标签的语法格式。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theFormat` | `string` | 格式字符串。 |

#### Returns

`void`

___

### TextHorizontalPosition

▸ **TextHorizontalPosition**(): [`MxDimensionTextHorizontalPosition`](../enums/MdGe.MxDimensionTextHorizontalPosition.md)

获取文本的水平位置。

#### Returns

[`MxDimensionTextHorizontalPosition`](../enums/MdGe.MxDimensionTextHorizontalPosition.md)

文本的水平位置。

___

### TextVerticalPosition

▸ **TextVerticalPosition**(): [`MxDimensionTextVerticalPosition`](../enums/MdGe.MxDimensionTextVerticalPosition.md)

获取文本的垂直位置。

#### Returns

[`MxDimensionTextVerticalPosition`](../enums/MdGe.MxDimensionTextVerticalPosition.md)

文本的垂直位置。

___

### ValueStringFormat

▸ **ValueStringFormat**(): `string`

获取尺寸值标签的格式。

#### Returns

`string`

格式字符串。
