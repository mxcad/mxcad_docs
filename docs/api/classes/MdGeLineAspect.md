[mxcad API 文档](../README.md) / MdGeLineAspect

# Class: MdGeLineAspect

所有类的父类， 除去MdGeTopo以及MdGeBrep

## Hierarchy

- [`MdGeObject`](MdGeObject.md)

  ↳ **`MdGeLineAspect`**

## Table of contents

### Constructors

- [constructor](MdGeLineAspect.md#constructor)

### Properties

- [imp](MdGeLineAspect.md#imp)

### Methods

- [SetColor](MdGeLineAspect.md#setcolor)
- [SetTypeOfLine](MdGeLineAspect.md#settypeofline)
- [SetWidth](MdGeLineAspect.md#setwidth)
- [getImp](MdGeLineAspect.md#getimp)
- [initTempObject](MdGeLineAspect.md#inittempobject)

## Constructors

### constructor

• **new MdGeLineAspect**(`p1`, `p2?`, `p3?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `p1` | `object` \| [`MdGeColor`](MdGeColor.md) |
| `p2?` | [`MxTypeOfLine`](../enums/MdGe.MxTypeOfLine.md) |
| `p3?` | `number` |

#### Overrides

[MdGeObject](MdGeObject.md).[constructor](MdGeObject.md#constructor)

## Properties

### imp

• `Protected` **imp**: `any` = `0`

#### Inherited from

[MdGeObject](MdGeObject.md).[imp](MdGeObject.md#imp)

## Methods

### SetColor

▸ **SetColor**(`theColor`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theColor` | [`MdGeColor`](MdGeColor.md) |

#### Returns

`void`

___

### SetTypeOfLine

▸ **SetTypeOfLine**(`theType`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theType` | [`MxTypeOfLine`](../enums/MdGe.MxTypeOfLine.md) |

#### Returns

`void`

___

### SetWidth

▸ **SetWidth**(`theWidth`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theWidth` | `number` |

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
