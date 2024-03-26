[mxcad API 文档](../README.md) / MdGeSequenceIteratorOfSequenceOfShape

# Class: MdGeSequenceIteratorOfSequenceOfShape

表示形状序列迭代器

## Hierarchy

- [`MdGeObject`](MdGeObject.md)

  ↳ **`MdGeSequenceIteratorOfSequenceOfShape`**

## Table of contents

### Constructors

- [constructor](MdGeSequenceIteratorOfSequenceOfShape.md#constructor)

### Properties

- [imp](MdGeSequenceIteratorOfSequenceOfShape.md#imp)

### Methods

- [IsEqual](MdGeSequenceIteratorOfSequenceOfShape.md#isequal)
- [More](MdGeSequenceIteratorOfSequenceOfShape.md#more)
- [Next](MdGeSequenceIteratorOfSequenceOfShape.md#next)
- [Value](MdGeSequenceIteratorOfSequenceOfShape.md#value)
- [getImp](MdGeSequenceIteratorOfSequenceOfShape.md#getimp)
- [initTempObject](MdGeSequenceIteratorOfSequenceOfShape.md#inittempobject)

## Constructors

### constructor

• **new MdGeSequenceIteratorOfSequenceOfShape**(`p?`)

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

### IsEqual

▸ **IsEqual**(`theOther`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theOther` | [`MdGeSequenceIteratorOfSequenceOfShape`](MdGeSequenceIteratorOfSequenceOfShape.md) |

#### Returns

`boolean`

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
