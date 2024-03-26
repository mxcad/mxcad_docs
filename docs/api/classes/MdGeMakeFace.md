[mxcad API 文档](../README.md) / MdGeMakeFace

# Class: MdGeMakeFace

表示Wire生成Face

## Hierarchy

- [`MdGeObject`](MdGeObject.md)

  ↳ **`MdGeMakeFace`**

## Table of contents

### Constructors

- [constructor](MdGeMakeFace.md#constructor)

### Properties

- [imp](MdGeMakeFace.md#imp)

### Methods

- [Add](MdGeMakeFace.md#add)
- [Face](MdGeMakeFace.md#face)
- [getImp](MdGeMakeFace.md#getimp)
- [initTempObject](MdGeMakeFace.md#inittempobject)

## Constructors

### constructor

• **new MdGeMakeFace**(`p?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `p?` | `object` \| [`MdGeWire`](MdGeWire.md) |

#### Overrides

[MdGeObject](MdGeObject.md).[constructor](MdGeObject.md#constructor)

## Properties

### imp

• `Protected` **imp**: `any` = `0`

#### Inherited from

[MdGeObject](MdGeObject.md).[imp](MdGeObject.md#imp)

## Methods

### Add

▸ **Add**(`wire`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `wire` | [`MdGeWire`](MdGeWire.md) |

#### Returns

`void`

___

### Face

▸ **Face**(): [`MdGeFace`](MdGeFace.md)

#### Returns

[`MdGeFace`](MdGeFace.md)

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
