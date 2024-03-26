[mxcad API 文档](../README.md) / MdGePipe

# Class: MdGePipe

表示管道

## Hierarchy

- [`MdGeObject`](MdGeObject.md)

  ↳ **`MdGePipe`**

## Table of contents

### Constructors

- [constructor](MdGePipe.md#constructor)

### Properties

- [imp](MdGePipe.md#imp)

### Methods

- [ErrorOnSurface](MdGePipe.md#erroronsurface)
- [FirstShape](MdGePipe.md#firstshape)
- [Generated](MdGePipe.md#generated)
- [LastShape](MdGePipe.md#lastshape)
- [Shape](MdGePipe.md#shape)
- [getImp](MdGePipe.md#getimp)
- [initTempObject](MdGePipe.md#inittempobject)

## Constructors

### constructor

• **new MdGePipe**(`p1?`, `p2?`, `p3?`, `p4?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `p1?` | `object` \| [`MdGeWire`](MdGeWire.md) |
| `p2?` | [`MdGeShape`](MdGeShape.md) |
| `p3?` | [`MxGFTrihedron`](../enums/MdGe.MxGFTrihedron.md) |
| `p4?` | `boolean` |

#### Overrides

[MdGeObject](MdGeObject.md).[constructor](MdGeObject.md#constructor)

## Properties

### imp

• `Protected` **imp**: `any` = `0`

#### Inherited from

[MdGeObject](MdGeObject.md).[imp](MdGeObject.md#imp)

## Methods

### ErrorOnSurface

▸ **ErrorOnSurface**(): `number`

#### Returns

`number`

___

### FirstShape

▸ **FirstShape**(): [`MdGeShape`](MdGeShape.md)

#### Returns

[`MdGeShape`](MdGeShape.md)

___

### Generated

▸ **Generated**(`SSpine`, `SProfile`): [`MdGeShape`](MdGeShape.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `SSpine` | [`MdGeShape`](MdGeShape.md) |
| `SProfile` | [`MdGeShape`](MdGeShape.md) |

#### Returns

[`MdGeShape`](MdGeShape.md)

___

### LastShape

▸ **LastShape**(): [`MdGeShape`](MdGeShape.md)

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
