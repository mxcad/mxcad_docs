[mxcad API 文档](../README.md) / MdGeTextAspect

# Class: MdGeTextAspect

所有类的父类， 除去MdGeTopo以及MdGeBrep

## Hierarchy

- [`MdGeObject`](MdGeObject.md)

  ↳ **`MdGeTextAspect`**

## Table of contents

### Constructors

- [constructor](MdGeTextAspect.md#constructor)

### Properties

- [imp](MdGeTextAspect.md#imp)

### Methods

- [Angle](MdGeTextAspect.md#angle)
- [Height](MdGeTextAspect.md#height)
- [HorizontalJustification](MdGeTextAspect.md#horizontaljustification)
- [MxTextPath](MdGeTextAspect.md#mxtextpath)
- [SetAngle](MdGeTextAspect.md#setangle)
- [SetColor](MdGeTextAspect.md#setcolor)
- [SetFont](MdGeTextAspect.md#setfont)
- [SetHeight](MdGeTextAspect.md#setheight)
- [SetHorizontalJustification](MdGeTextAspect.md#sethorizontaljustification)
- [SetOrientation](MdGeTextAspect.md#setorientation)
- [SetVerticalJustification](MdGeTextAspect.md#setverticaljustification)
- [VerticalJustification](MdGeTextAspect.md#verticaljustification)
- [getImp](MdGeTextAspect.md#getimp)
- [initTempObject](MdGeTextAspect.md#inittempobject)

## Constructors

### constructor

• **new MdGeTextAspect**(`p?`)

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

### Angle

▸ **Angle**(): `number`

#### Returns

`number`

___

### Height

▸ **Height**(): `number`

#### Returns

`number`

___

### HorizontalJustification

▸ **HorizontalJustification**(): [`MxHorizontalTextAlignment`](../enums/MdGe.MxHorizontalTextAlignment.md)

#### Returns

[`MxHorizontalTextAlignment`](../enums/MdGe.MxHorizontalTextAlignment.md)

___

### MxTextPath

▸ **MxTextPath**(): [`MxTextPath`](../enums/MdGe.MxTextPath.md)

#### Returns

[`MxTextPath`](../enums/MdGe.MxTextPath.md)

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

▸ **SetColor**(`theColor`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theColor` | [`MdGeColor`](MdGeColor.md) |

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

### SetHeight

▸ **SetHeight**(`theHeight`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theHeight` | `number` |

#### Returns

`void`

___

### SetHorizontalJustification

▸ **SetHorizontalJustification**(`theJustification`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theJustification` | [`MxHorizontalTextAlignment`](../enums/MdGe.MxHorizontalTextAlignment.md) |

#### Returns

`void`

___

### SetOrientation

▸ **SetOrientation**(`theOrientation`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theOrientation` | [`MxTextPath`](../enums/MdGe.MxTextPath.md) |

#### Returns

`void`

___

### SetVerticalJustification

▸ **SetVerticalJustification**(`theJustification`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theJustification` | [`MxVerticalTextAlignment`](../enums/MdGe.MxVerticalTextAlignment.md) |

#### Returns

`void`

___

### VerticalJustification

▸ **VerticalJustification**(): [`MxVerticalTextAlignment`](../enums/MdGe.MxVerticalTextAlignment.md)

#### Returns

[`MxVerticalTextAlignment`](../enums/MdGe.MxVerticalTextAlignment.md)

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
