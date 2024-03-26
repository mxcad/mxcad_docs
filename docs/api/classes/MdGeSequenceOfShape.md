[mxcad API 文档](../README.md) / MdGeSequenceOfShape

# Class: MdGeSequenceOfShape

表示形状序列集合

## Hierarchy

- [`MdGeObject`](MdGeObject.md)

  ↳ **`MdGeSequenceOfShape`**

## Table of contents

### Constructors

- [constructor](MdGeSequenceOfShape.md#constructor)

### Properties

- [imp](MdGeSequenceOfShape.md#imp)

### Methods

- [Append](MdGeSequenceOfShape.md#append)
- [Exchange](MdGeSequenceOfShape.md#exchange)
- [First](MdGeSequenceOfShape.md#first)
- [InsertAfter](MdGeSequenceOfShape.md#insertafter)
- [InsertBefore](MdGeSequenceOfShape.md#insertbefore)
- [IsEmpty](MdGeSequenceOfShape.md#isempty)
- [Last](MdGeSequenceOfShape.md#last)
- [Length](MdGeSequenceOfShape.md#length)
- [Lower](MdGeSequenceOfShape.md#lower)
- [Prepend](MdGeSequenceOfShape.md#prepend)
- [Remove](MdGeSequenceOfShape.md#remove)
- [Reverse](MdGeSequenceOfShape.md#reverse)
- [SetValue](MdGeSequenceOfShape.md#setvalue)
- [Size](MdGeSequenceOfShape.md#size)
- [Upper](MdGeSequenceOfShape.md#upper)
- [Value](MdGeSequenceOfShape.md#value)
- [begin](MdGeSequenceOfShape.md#begin)
- [end](MdGeSequenceOfShape.md#end)
- [getImp](MdGeSequenceOfShape.md#getimp)
- [initTempObject](MdGeSequenceOfShape.md#inittempobject)

## Constructors

### constructor

• **new MdGeSequenceOfShape**(`p?`)

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

### Append

▸ **Append**(`theShape`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theShape` | [`MdGeShape`](MdGeShape.md) |

#### Returns

`void`

___

### Exchange

▸ **Exchange**(`I`, `J`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `I` | `number` |
| `J` | `number` |

#### Returns

`void`

___

### First

▸ **First**(): [`MdGeShape`](MdGeShape.md)

#### Returns

[`MdGeShape`](MdGeShape.md)

___

### InsertAfter

▸ **InsertAfter**(`theIndex`, `theShape`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theIndex` | `number` |
| `theShape` | [`MdGeShape`](MdGeShape.md) |

#### Returns

`void`

___

### InsertBefore

▸ **InsertBefore**(`theIndex`, `theShape`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theIndex` | `number` |
| `theShape` | [`MdGeShape`](MdGeShape.md) |

#### Returns

`void`

___

### IsEmpty

▸ **IsEmpty**(): `boolean`

#### Returns

`boolean`

___

### Last

▸ **Last**(): [`MdGeShape`](MdGeShape.md)

#### Returns

[`MdGeShape`](MdGeShape.md)

___

### Length

▸ **Length**(): `number`

#### Returns

`number`

___

### Lower

▸ **Lower**(): `number`

#### Returns

`number`

___

### Prepend

▸ **Prepend**(`theShape`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theShape` | [`MdGeShape`](MdGeShape.md) |

#### Returns

`void`

___

### Remove

▸ **Remove**(`p1`, `p2?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `p1` | `number` |
| `p2?` | `number` |

#### Returns

`void`

___

### Reverse

▸ **Reverse**(): `void`

#### Returns

`void`

___

### SetValue

▸ **SetValue**(`theIndex`, `theShape`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theIndex` | `number` |
| `theShape` | [`MdGeShape`](MdGeShape.md) |

#### Returns

`void`

___

### Size

▸ **Size**(): `number`

#### Returns

`number`

___

### Upper

▸ **Upper**(): `number`

#### Returns

`number`

___

### Value

▸ **Value**(`theIndex`): [`MdGeShape`](MdGeShape.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theIndex` | `number` |

#### Returns

[`MdGeShape`](MdGeShape.md)

___

### begin

▸ **begin**(): [`MdGeSequenceIteratorOfSequenceOfShape`](MdGeSequenceIteratorOfSequenceOfShape.md)

#### Returns

[`MdGeSequenceIteratorOfSequenceOfShape`](MdGeSequenceIteratorOfSequenceOfShape.md)

___

### end

▸ **end**(): [`MdGeSequenceIteratorOfSequenceOfShape`](MdGeSequenceIteratorOfSequenceOfShape.md)

#### Returns

[`MdGeSequenceIteratorOfSequenceOfShape`](MdGeSequenceIteratorOfSequenceOfShape.md)

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
