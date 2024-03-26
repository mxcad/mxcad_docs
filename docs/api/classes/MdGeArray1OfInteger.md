[mxcad API 文档](../README.md) / MdGeArray1OfInteger

# Class: MdGeArray1OfInteger

表示一维整数数组。

## Hierarchy

- [`MdGeObject`](MdGeObject.md)

  ↳ **`MdGeArray1OfInteger`**

## Table of contents

### Constructors

- [constructor](MdGeArray1OfInteger.md#constructor)

### Properties

- [imp](MdGeArray1OfInteger.md#imp)

### Methods

- [First](MdGeArray1OfInteger.md#first)
- [Init](MdGeArray1OfInteger.md#init)
- [IsAllocated](MdGeArray1OfInteger.md#isallocated)
- [IsDeletable](MdGeArray1OfInteger.md#isdeletable)
- [IsEmpty](MdGeArray1OfInteger.md#isempty)
- [Last](MdGeArray1OfInteger.md#last)
- [Length](MdGeArray1OfInteger.md#length)
- [Lower](MdGeArray1OfInteger.md#lower)
- [Resize](MdGeArray1OfInteger.md#resize)
- [SetValue](MdGeArray1OfInteger.md#setvalue)
- [Size](MdGeArray1OfInteger.md#size)
- [Upper](MdGeArray1OfInteger.md#upper)
- [Value](MdGeArray1OfInteger.md#value)
- [getImp](MdGeArray1OfInteger.md#getimp)
- [initTempObject](MdGeArray1OfInteger.md#inittempobject)

## Constructors

### constructor

• **new MdGeArray1OfInteger**(`p1?`, `p2?`)

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

▸ **Init**(`theInteger`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theInteger` | `number` |

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

▸ **SetValue**(`theIndex`, `theInteger`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theIndex` | `number` |
| `theInteger` | `number` |

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
