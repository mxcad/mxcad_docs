[mxcad API 文档](../README.md) / MdGeRevol

# Class: MdGeRevol

表示旋转体

## Hierarchy

- [`MdGeObject`](MdGeObject.md)

  ↳ **`MdGeRevol`**

## Table of contents

### Constructors

- [constructor](MdGeRevol.md#constructor)

### Properties

- [imp](MdGeRevol.md#imp)

### Methods

- [FirstShape](MdGeRevol.md#firstshape)
- [HasDegenerated](MdGeRevol.md#hasdegenerated)
- [IsDeleted](MdGeRevol.md#isdeleted)
- [LastShape](MdGeRevol.md#lastshape)
- [Shape](MdGeRevol.md#shape)
- [getImp](MdGeRevol.md#getimp)
- [initTempObject](MdGeRevol.md#inittempobject)

## Constructors

### constructor

• **new MdGeRevol**(`p1?`, `p2?`, `p3?`, `p4?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `p1?` | `object` \| [`MdGeShape`](MdGeShape.md) |
| `p2?` | [`MdGeAxis`](MdGeAxis.md) |
| `p3?` | `number` |
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

### HasDegenerated

▸ **HasDegenerated**(): `boolean`

#### Returns

`boolean`

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
