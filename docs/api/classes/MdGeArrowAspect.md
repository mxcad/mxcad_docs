[mxcad API 文档](../README.md) / MdGeArrowAspect

# Class: MdGeArrowAspect

所有类的父类， 除去MdGeTopo以及MdGeBrep

## Hierarchy

- [`MdGeObject`](MdGeObject.md)

  ↳ **`MdGeArrowAspect`**

## Table of contents

### Constructors

- [constructor](MdGeArrowAspect.md#constructor)

### Properties

- [imp](MdGeArrowAspect.md#imp)

### Methods

- [Angle](MdGeArrowAspect.md#angle)
- [IsZoomable](MdGeArrowAspect.md#iszoomable)
- [Length](MdGeArrowAspect.md#length)
- [SetAngle](MdGeArrowAspect.md#setangle)
- [SetColor](MdGeArrowAspect.md#setcolor)
- [SetLength](MdGeArrowAspect.md#setlength)
- [SetZoomable](MdGeArrowAspect.md#setzoomable)
- [getImp](MdGeArrowAspect.md#getimp)
- [initTempObject](MdGeArrowAspect.md#inittempobject)

## Constructors

### constructor

• **new MdGeArrowAspect**(`p1?`, `p2?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `p1?` | `number` \| `object` |
| `p2?` | `number` |

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

### IsZoomable

▸ **IsZoomable**(): `boolean`

#### Returns

`boolean`

___

### Length

▸ **Length**(): `number`

#### Returns

`number`

___

### SetAngle

▸ **SetAngle**(`anAngle`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `anAngle` | `number` |

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

### SetLength

▸ **SetLength**(`theLength`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theLength` | `number` |

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
