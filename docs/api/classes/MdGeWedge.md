[mxcad API 文档](../README.md) / MdGeWedge

# Class: MdGeWedge

表示一个楔形

## Hierarchy

- [`MdGeObject`](MdGeObject.md)

  ↳ **`MdGeWedge`**

## Table of contents

### Constructors

- [constructor](MdGeWedge.md#constructor)

### Properties

- [imp](MdGeWedge.md#imp)

### Methods

- [Shape](MdGeWedge.md#shape)
- [Shell](MdGeWedge.md#shell)
- [Solid](MdGeWedge.md#solid)
- [getImp](MdGeWedge.md#getimp)
- [initTempObject](MdGeWedge.md#inittempobject)

## Constructors

### constructor

• **new MdGeWedge**(`p1?`, `p2?`, `p3?`, `p4?`, `p5?`, `p6?`, `p7?`, `p8?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `p1?` | `number` \| `object` \| [`MdGeCSYSR`](MdGeCSYSR.md) |
| `p2?` | `number` |
| `p3?` | `number` |
| `p4?` | `number` |
| `p5?` | `number` |
| `p6?` | `number` |
| `p7?` | `number` |
| `p8?` | `number` |

#### Overrides

[MdGeObject](MdGeObject.md).[constructor](MdGeObject.md#constructor)

## Properties

### imp

• `Protected` **imp**: `any` = `0`

#### Inherited from

[MdGeObject](MdGeObject.md).[imp](MdGeObject.md#imp)

## Methods

### Shape

▸ **Shape**(): [`MdGeShape`](MdGeShape.md)

#### Returns

[`MdGeShape`](MdGeShape.md)

___

### Shell

▸ **Shell**(): [`MdGeShell`](MdGeShell.md)

#### Returns

[`MdGeShell`](MdGeShell.md)

___

### Solid

▸ **Solid**(): [`MdGeSolid`](MdGeSolid.md)

#### Returns

[`MdGeSolid`](MdGeSolid.md)

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
