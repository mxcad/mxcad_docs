[mxcad API 文档](../README.md) / MdGePrism

# Class: MdGePrism

表示拉伸体

## Hierarchy

- [`MdGeObject`](MdGeObject.md)

  ↳ **`MdGePrism`**

## Table of contents

### Constructors

- [constructor](MdGePrism.md#constructor)

### Properties

- [imp](MdGePrism.md#imp)

### Methods

- [FirstShape](MdGePrism.md#firstshape)
- [IsDeleted](MdGePrism.md#isdeleted)
- [LastShape](MdGePrism.md#lastshape)
- [Shape](MdGePrism.md#shape)
- [getImp](MdGePrism.md#getimp)
- [initTempObject](MdGePrism.md#inittempobject)

## Constructors

### constructor

• **new MdGePrism**(`p1?`, `p2?`, `p3?`, `p4?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `p1?` | `object` \| [`MdGeShape`](MdGeShape.md) |
| `p2?` | [`MdGeVec`](MdGeVec.md) |
| `p3?` | `boolean` |
| `p4?` | `boolean` |

#### Overrides

[MdGeObject](MdGeObject.md).[constructor](MdGeObject.md#constructor)

## Properties

### imp

• `Protected` **imp**: `any` = `0`

#### Inherited from

[MdGeObject](MdGeObject.md).[imp](MdGeObject.md#imp)

## Methods

### FirstShape

▸ **FirstShape**(`theShape?`): [`MdGeShape`](MdGeShape.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theShape?` | [`MdGeShape`](MdGeShape.md) |

#### Returns

[`MdGeShape`](MdGeShape.md)

___

### IsDeleted

▸ **IsDeleted**(`S`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `S` | [`MdGeShape`](MdGeShape.md) |

#### Returns

`boolean`

___

### LastShape

▸ **LastShape**(`theShape?`): [`MdGeShape`](MdGeShape.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theShape?` | [`MdGeShape`](MdGeShape.md) |

#### Returns

[`MdGeShape`](MdGeShape.md)

___

### Shape

▸ **Shape**(): [`MdGeShape`](MdGeShape.md)

#### Returns

[`MdGeShape`](MdGeShape.md)

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
