[mxcad API 文档](../README.md) / MdGeArray1OfReal

# Class: MdGeArray1OfReal

表示一维实数数组。

## Hierarchy

- [`MdGeObject`](MdGeObject.md)

  ↳ **`MdGeArray1OfReal`**

## Table of contents

### Constructors

- [constructor](MdGeArray1OfReal.md#constructor)

### Properties

- [imp](MdGeArray1OfReal.md#imp)

### Methods

- [First](MdGeArray1OfReal.md#first)
- [Init](MdGeArray1OfReal.md#init)
- [IsAllocated](MdGeArray1OfReal.md#isallocated)
- [IsDeletable](MdGeArray1OfReal.md#isdeletable)
- [IsEmpty](MdGeArray1OfReal.md#isempty)
- [Last](MdGeArray1OfReal.md#last)
- [Length](MdGeArray1OfReal.md#length)
- [Lower](MdGeArray1OfReal.md#lower)
- [Resize](MdGeArray1OfReal.md#resize)
- [SetValue](MdGeArray1OfReal.md#setvalue)
- [Size](MdGeArray1OfReal.md#size)
- [Upper](MdGeArray1OfReal.md#upper)
- [Value](MdGeArray1OfReal.md#value)
- [getImp](MdGeArray1OfReal.md#getimp)
- [initTempObject](MdGeArray1OfReal.md#inittempobject)

## Constructors

### constructor

• **new MdGeArray1OfReal**(`p1?`, `p2?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `p1?` | `number` \| `object` |
| `p2?` | `number` |

#### Overrides

[MdGeObject](MdGeObject.md).[constructor](MdGeObject.md#constructor)

## Properties

### imp

• `Protected` **imp**: `any` = `0`

#### Inherited from

[MdGeObject](MdGeObject.md).[imp](MdGeObject.md#imp)

## Methods

### First

▸ **First**(): `number`

#### Returns

`number`

___

### Init

▸ **Init**(`theReal`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theReal` | `number` |

#### Returns

`void`

___

### IsAllocated

▸ **IsAllocated**(): `boolean`

#### Returns

`boolean`

___

### IsDeletable

▸ **IsDeletable**(): `boolean`

#### Returns

`boolean`

___

### IsEmpty

▸ **IsEmpty**(): `boolean`

#### Returns

`boolean`

___

### Last

▸ **Last**(): `number`

#### Returns

`number`

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

### Resize

▸ **Resize**(`theLower`, `theUpper`, `theToCopyData`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theLower` | `number` |
| `theUpper` | `number` |
| `theToCopyData` | `boolean` |

#### Returns

`void`

___

### SetValue

▸ **SetValue**(`theIndex`, `theReal`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theIndex` | `number` |
| `theReal` | `number` |

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

▸ **Value**(`theIndex`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theIndex` | `number` |

#### Returns

`number`

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
