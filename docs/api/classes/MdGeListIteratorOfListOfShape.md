[mxcad API 文档](../README.md) / MdGeListIteratorOfListOfShape

# Class: MdGeListIteratorOfListOfShape

表示形状链表迭代器

## Hierarchy

- [`MdGeObject`](MdGeObject.md)

  ↳ **`MdGeListIteratorOfListOfShape`**

## Table of contents

### Constructors

- [constructor](MdGeListIteratorOfListOfShape.md#constructor)

### Properties

- [imp](MdGeListIteratorOfListOfShape.md#imp)

### Methods

- [ChangeValue](MdGeListIteratorOfListOfShape.md#changevalue)
- [More](MdGeListIteratorOfListOfShape.md#more)
- [Next](MdGeListIteratorOfListOfShape.md#next)
- [Value](MdGeListIteratorOfListOfShape.md#value)
- [getImp](MdGeListIteratorOfListOfShape.md#getimp)
- [initTempObject](MdGeListIteratorOfListOfShape.md#inittempobject)

## Constructors

### constructor

• **new MdGeListIteratorOfListOfShape**(`p?`)

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

### ChangeValue

▸ **ChangeValue**(`theShape`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theShape` | [`MdGeShape`](MdGeShape.md) |

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
