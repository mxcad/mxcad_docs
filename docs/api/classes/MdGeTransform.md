[mxcad API 文档](../README.md) / MdGeTransform

# Class: MdGeTransform

形状变换类

## Hierarchy

- [`MdGeObject`](MdGeObject.md)

  ↳ **`MdGeTransform`**

## Table of contents

### Constructors

- [constructor](MdGeTransform.md#constructor)

### Properties

- [imp](MdGeTransform.md#imp)

### Methods

- [ModifiedShape](MdGeTransform.md#modifiedshape)
- [Perform](MdGeTransform.md#perform)
- [Shape](MdGeTransform.md#shape)
- [getImp](MdGeTransform.md#getimp)
- [initTempObject](MdGeTransform.md#inittempobject)

## Constructors

### constructor

• **new MdGeTransform**(`p1?`, `p2?`, `p3?`, `p4?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `p1?` | `object` \| [`MdGeShape`](MdGeShape.md) \| [`MdGeTrsf`](MdGeTrsf.md) |
| `p2?` | [`MdGeTrsf`](MdGeTrsf.md) |
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

### ModifiedShape

▸ **ModifiedShape**(`S`): [`MdGeShape`](MdGeShape.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `S` | [`MdGeShape`](MdGeShape.md) |

#### Returns

[`MdGeShape`](MdGeShape.md)

___

### Perform

▸ **Perform**(`theShape`, `theCopyGeom?`, `theCopyMesh?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theShape` | [`MdGeShape`](MdGeShape.md) |
| `theCopyGeom?` | `boolean` |
| `theCopyMesh?` | `boolean` |

#### Returns

`void`

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
