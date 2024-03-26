[mxcad API 文档](../README.md) / MdGeListOfShape

# Class: MdGeListOfShape

表示形状链表

## Hierarchy

- [`MdGeObject`](MdGeObject.md)

  ↳ **`MdGeListOfShape`**

## Table of contents

### Constructors

- [constructor](MdGeListOfShape.md#constructor)

### Properties

- [imp](MdGeListOfShape.md#imp)

### Methods

- [AppendList](MdGeListOfShape.md#appendlist)
- [AppendShape](MdGeListOfShape.md#appendshape)
- [First](MdGeListOfShape.md#first)
- [InsertAfterList](MdGeListOfShape.md#insertafterlist)
- [InsertAfterShape](MdGeListOfShape.md#insertaftershape)
- [InsertBeforeList](MdGeListOfShape.md#insertbeforelist)
- [InsertBeforeShape](MdGeListOfShape.md#insertbeforeshape)
- [Last](MdGeListOfShape.md#last)
- [PrependList](MdGeListOfShape.md#prependlist)
- [PrependShape](MdGeListOfShape.md#prependshape)
- [RemoveFirst](MdGeListOfShape.md#removefirst)
- [Reverse](MdGeListOfShape.md#reverse)
- [Size](MdGeListOfShape.md#size)
- [begin](MdGeListOfShape.md#begin)
- [end](MdGeListOfShape.md#end)
- [getImp](MdGeListOfShape.md#getimp)
- [initTempObject](MdGeListOfShape.md#inittempobject)

## Constructors

### constructor

• **new MdGeListOfShape**(`p?`)

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

### AppendList

▸ **AppendList**(`theOther`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theOther` | [`MdGeListOfShape`](MdGeListOfShape.md) |

#### Returns

`void`

___

### AppendShape

▸ **AppendShape**(`theShape`, `theIter?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theShape` | [`MdGeShape`](MdGeShape.md) |
| `theIter?` | [`MdGeListIteratorOfListOfShape`](MdGeListIteratorOfListOfShape.md) |

#### Returns

`void`

___

### First

▸ **First**(): [`MdGeShape`](MdGeShape.md)

#### Returns

[`MdGeShape`](MdGeShape.md)

___

### InsertAfterList

▸ **InsertAfterList**(`theOther`, `theIter`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theOther` | [`MdGeListOfShape`](MdGeListOfShape.md) |
| `theIter` | [`MdGeListIteratorOfListOfShape`](MdGeListIteratorOfListOfShape.md) |

#### Returns

`void`

___

### InsertAfterShape

▸ **InsertAfterShape**(`theShape`, `theIter`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theShape` | [`MdGeShape`](MdGeShape.md) |
| `theIter` | [`MdGeListIteratorOfListOfShape`](MdGeListIteratorOfListOfShape.md) |

#### Returns

`void`

___

### InsertBeforeList

▸ **InsertBeforeList**(`theOther`, `theIter`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theOther` | [`MdGeListOfShape`](MdGeListOfShape.md) |
| `theIter` | [`MdGeListIteratorOfListOfShape`](MdGeListIteratorOfListOfShape.md) |

#### Returns

`void`

___

### InsertBeforeShape

▸ **InsertBeforeShape**(`theShape`, `theIter`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theShape` | [`MdGeShape`](MdGeShape.md) |
| `theIter` | [`MdGeListIteratorOfListOfShape`](MdGeListIteratorOfListOfShape.md) |

#### Returns

`void`

___

### Last

▸ **Last**(): [`MdGeShape`](MdGeShape.md)

#### Returns

[`MdGeShape`](MdGeShape.md)

___

### PrependList

▸ **PrependList**(`theOther`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theOther` | [`MdGeListOfShape`](MdGeListOfShape.md) |

#### Returns

`void`

___

### PrependShape

▸ **PrependShape**(`theShape`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theShape` | [`MdGeShape`](MdGeShape.md) |

#### Returns

`void`

___

### RemoveFirst

▸ **RemoveFirst**(): `void`

#### Returns

`void`

___

### Reverse

▸ **Reverse**(): `void`

#### Returns

`void`

___

### Size

▸ **Size**(): `number`

#### Returns

`number`

___

### begin

▸ **begin**(): [`MdGeListIteratorOfListOfShape`](MdGeListIteratorOfListOfShape.md)

#### Returns

[`MdGeListIteratorOfListOfShape`](MdGeListIteratorOfListOfShape.md)

___

### end

▸ **end**(): [`MdGeListIteratorOfListOfShape`](MdGeListIteratorOfListOfShape.md)

#### Returns

[`MdGeListIteratorOfListOfShape`](MdGeListIteratorOfListOfShape.md)

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
