[mxcad API 文档](../README.md) / MdGeDimAspect

# Class: MdGeDimAspect

所有类的父类， 除去MdGeTopo以及MdGeBrep

## Hierarchy

- [`MdGeObject`](MdGeObject.md)

  ↳ **`MdGeDimAspect`**

## Table of contents

### Constructors

- [constructor](MdGeDimAspect.md#constructor)

### Properties

- [imp](MdGeDimAspect.md#imp)

### Methods

- [ArrowAspect](MdGeDimAspect.md#arrowaspect)
- [ArrowOrientation](MdGeDimAspect.md#arroworientation)
- [ArrowTailSize](MdGeDimAspect.md#arrowtailsize)
- [ExtensionSize](MdGeDimAspect.md#extensionsize)
- [IsArrows3d](MdGeDimAspect.md#isarrows3d)
- [IsText3d](MdGeDimAspect.md#istext3d)
- [IsTextShaded](MdGeDimAspect.md#istextshaded)
- [IsUnitsDisplayed](MdGeDimAspect.md#isunitsdisplayed)
- [LineAspect](MdGeDimAspect.md#lineaspect)
- [MakeArrows3d](MdGeDimAspect.md#makearrows3d)
- [MakeText3d](MdGeDimAspect.md#maketext3d)
- [MakeTextShaded](MdGeDimAspect.md#maketextshaded)
- [MakeUnitsDisplayed](MdGeDimAspect.md#makeunitsdisplayed)
- [SetArrowAspect](MdGeDimAspect.md#setarrowaspect)
- [SetArrowOrientation](MdGeDimAspect.md#setarroworientation)
- [SetArrowTailSize](MdGeDimAspect.md#setarrowtailsize)
- [SetCommonColor](MdGeDimAspect.md#setcommoncolor)
- [SetExtensionSize](MdGeDimAspect.md#setextensionsize)
- [SetLineAspect](MdGeDimAspect.md#setlineaspect)
- [SetTextAspect](MdGeDimAspect.md#settextaspect)
- [SetTextHorizontalPosition](MdGeDimAspect.md#settexthorizontalposition)
- [SetTextVerticalPosition](MdGeDimAspect.md#settextverticalposition)
- [SetValueStringFormat](MdGeDimAspect.md#setvaluestringformat)
- [TextAspect](MdGeDimAspect.md#textaspect)
- [TextHorizontalPosition](MdGeDimAspect.md#texthorizontalposition)
- [TextVerticalPosition](MdGeDimAspect.md#textverticalposition)
- [ValueStringFormat](MdGeDimAspect.md#valuestringformat)
- [getImp](MdGeDimAspect.md#getimp)
- [initTempObject](MdGeDimAspect.md#inittempobject)

## Constructors

### constructor

• **new MdGeDimAspect**(`p?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `p?` | `object` |

#### Overrides

[MdGeObject](MdGeObject.md).[constructor](MdGeObject.md#constructor)

## Properties

### imp

• `Protected` **imp**: `any` = `0`

#### Inherited from

[MdGeObject](MdGeObject.md).[imp](MdGeObject.md#imp)

## Methods

### ArrowAspect

▸ **ArrowAspect**(): [`MdGeArrowAspect`](MdGeArrowAspect.md)

#### Returns

[`MdGeArrowAspect`](MdGeArrowAspect.md)

___

### ArrowOrientation

▸ **ArrowOrientation**(): [`MxDimensionArrowOrientation`](../enums/MdGe.MxDimensionArrowOrientation.md)

#### Returns

[`MxDimensionArrowOrientation`](../enums/MdGe.MxDimensionArrowOrientation.md)

___

### ArrowTailSize

▸ **ArrowTailSize**(): `number`

#### Returns

`number`

___

### ExtensionSize

▸ **ExtensionSize**(): `number`

#### Returns

`number`

___

### IsArrows3d

▸ **IsArrows3d**(): `boolean`

#### Returns

`boolean`

___

### IsText3d

▸ **IsText3d**(): `boolean`

#### Returns

`boolean`

___

### IsTextShaded

▸ **IsTextShaded**(): `boolean`

#### Returns

`boolean`

___

### IsUnitsDisplayed

▸ **IsUnitsDisplayed**(): `boolean`

#### Returns

`boolean`

___

### LineAspect

▸ **LineAspect**(): [`MdGeLineAspect`](MdGeLineAspect.md)

#### Returns

[`MdGeLineAspect`](MdGeLineAspect.md)

___

### MakeArrows3d

▸ **MakeArrows3d**(`theIsArrows3d`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theIsArrows3d` | `boolean` |

#### Returns

`void`

___

### MakeText3d

▸ **MakeText3d**(`isText3d`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `isText3d` | `boolean` |

#### Returns

`void`

___

### MakeTextShaded

▸ **MakeTextShaded**(`theIsTextShaded`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theIsTextShaded` | `boolean` |

#### Returns

`void`

___

### MakeUnitsDisplayed

▸ **MakeUnitsDisplayed**(`theIsDisplayed`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theIsDisplayed` | `boolean` |

#### Returns

`void`

___

### SetArrowAspect

▸ **SetArrowAspect**(`theAspect`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theAspect` | [`MdGeArrowAspect`](MdGeArrowAspect.md) |

#### Returns

`void`

___

### SetArrowOrientation

▸ **SetArrowOrientation**(`theArrowOrient`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theArrowOrient` | [`MxDimensionArrowOrientation`](../enums/MdGe.MxDimensionArrowOrientation.md) |

#### Returns

`void`

___

### SetArrowTailSize

▸ **SetArrowTailSize**(`theSize`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theSize` | `number` |

#### Returns

`void`

___

### SetCommonColor

▸ **SetCommonColor**(`theColor`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theColor` | [`MdGeColor`](MdGeColor.md) |

#### Returns

`void`

___

### SetExtensionSize

▸ **SetExtensionSize**(`theSize`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theSize` | `number` |

#### Returns

`void`

___

### SetLineAspect

▸ **SetLineAspect**(`theAspect`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theAspect` | [`MdGeLineAspect`](MdGeLineAspect.md) |

#### Returns

`void`

___

### SetTextAspect

▸ **SetTextAspect**(`theAspect`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theAspect` | [`MdGeTextAspect`](MdGeTextAspect.md) |

#### Returns

`void`

___

### SetTextHorizontalPosition

▸ **SetTextHorizontalPosition**(`thePosition`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `thePosition` | [`MxDimensionTextHorizontalPosition`](../enums/MdGe.MxDimensionTextHorizontalPosition.md) |

#### Returns

`void`

___

### SetTextVerticalPosition

▸ **SetTextVerticalPosition**(`thePosition`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `thePosition` | [`MxDimensionTextVerticalPosition`](../enums/MdGe.MxDimensionTextVerticalPosition.md) |

#### Returns

`void`

___

### SetValueStringFormat

▸ **SetValueStringFormat**(`theFormat`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theFormat` | `string` |

#### Returns

`void`

___

### TextAspect

▸ **TextAspect**(): [`MdGeTextAspect`](MdGeTextAspect.md)

#### Returns

[`MdGeTextAspect`](MdGeTextAspect.md)

___

### TextHorizontalPosition

▸ **TextHorizontalPosition**(): [`MxDimensionTextHorizontalPosition`](../enums/MdGe.MxDimensionTextHorizontalPosition.md)

#### Returns

[`MxDimensionTextHorizontalPosition`](../enums/MdGe.MxDimensionTextHorizontalPosition.md)

___

### TextVerticalPosition

▸ **TextVerticalPosition**(): [`MxDimensionTextVerticalPosition`](../enums/MdGe.MxDimensionTextVerticalPosition.md)

#### Returns

[`MxDimensionTextVerticalPosition`](../enums/MdGe.MxDimensionTextVerticalPosition.md)

___

### ValueStringFormat

▸ **ValueStringFormat**(): `string`

#### Returns

`string`

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
