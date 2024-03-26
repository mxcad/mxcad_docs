[mxcad API 文档](../README.md) / MdGeExplorer

# Class: MdGeExplorer

表示拓扑元素遍历

## Hierarchy

- [`MdGeObject`](MdGeObject.md)

  ↳ **`MdGeExplorer`**

## Table of contents

### Constructors

- [constructor](MdGeExplorer.md#constructor)

### Properties

- [imp](MdGeExplorer.md#imp)

### Methods

- [Clear](MdGeExplorer.md#clear)
- [Current](MdGeExplorer.md#current)
- [Depth](MdGeExplorer.md#depth)
- [ExploredShape](MdGeExplorer.md#exploredshape)
- [Init](MdGeExplorer.md#init)
- [More](MdGeExplorer.md#more)
- [Next](MdGeExplorer.md#next)
- [ReInit](MdGeExplorer.md#reinit)
- [Value](MdGeExplorer.md#value)
- [getImp](MdGeExplorer.md#getimp)
- [initTempObject](MdGeExplorer.md#inittempobject)

## Constructors

### constructor

• **new MdGeExplorer**(`p1?`, `p2?`, `p3?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `p1?` | `object` \| [`MdGeShape`](MdGeShape.md) |
| `p2?` | [`MxShapeEnum`](../enums/MdGe.MxShapeEnum.md) |
| `p3?` | [`MxShapeEnum`](../enums/MdGe.MxShapeEnum.md) |

#### Overrides

[MdGeObject](MdGeObject.md).[constructor](MdGeObject.md#constructor)

## Properties

### imp

• `Protected` **imp**: `any` = `0`

#### Inherited from

[MdGeObject](MdGeObject.md).[imp](MdGeObject.md#imp)

## Methods

### Clear

▸ **Clear**(): `void`

#### Returns

`void`

___

### Current

▸ **Current**(): [`MdGeShape`](MdGeShape.md)

#### Returns

[`MdGeShape`](MdGeShape.md)

___

### Depth

▸ **Depth**(): `number`

#### Returns

`number`

___

### ExploredShape

▸ **ExploredShape**(): [`MdGeShape`](MdGeShape.md)

#### Returns

[`MdGeShape`](MdGeShape.md)

___

### Init

▸ **Init**(`S`, `ToFind`, `ToAvoid?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `S` | [`MdGeShape`](MdGeShape.md) |
| `ToFind` | [`MxShapeEnum`](../enums/MdGe.MxShapeEnum.md) |
| `ToAvoid?` | [`MxShapeEnum`](../enums/MdGe.MxShapeEnum.md) |

#### Returns

`void`

___

### More

▸ **More**(): `boolean`

#### Returns

`boolean`

___

### Next

▸ **Next**(): `void`

#### Returns

`void`

___

### ReInit

▸ **ReInit**(): `void`

#### Returns

`void`

___

### Value

▸ **Value**(): [`MdGeShape`](MdGeShape.md)

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
