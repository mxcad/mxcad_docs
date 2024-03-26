[mxcad API 文档](../README.md) / MdGeArray1OfPnt

# Class: MdGeArray1OfPnt

表示一维点数组。

## Hierarchy

- [`MdGeObject`](MdGeObject.md)

  ↳ **`MdGeArray1OfPnt`**

## Table of contents

### Constructors

- [constructor](MdGeArray1OfPnt.md#constructor)

### Properties

- [imp](MdGeArray1OfPnt.md#imp)

### Methods

- [First](MdGeArray1OfPnt.md#first)
- [Init](MdGeArray1OfPnt.md#init)
- [IsAllocated](MdGeArray1OfPnt.md#isallocated)
- [IsDeletable](MdGeArray1OfPnt.md#isdeletable)
- [IsEmpty](MdGeArray1OfPnt.md#isempty)
- [Last](MdGeArray1OfPnt.md#last)
- [Length](MdGeArray1OfPnt.md#length)
- [Lower](MdGeArray1OfPnt.md#lower)
- [Resize](MdGeArray1OfPnt.md#resize)
- [SetValue](MdGeArray1OfPnt.md#setvalue)
- [Size](MdGeArray1OfPnt.md#size)
- [Upper](MdGeArray1OfPnt.md#upper)
- [Value](MdGeArray1OfPnt.md#value)
- [getImp](MdGeArray1OfPnt.md#getimp)
- [initTempObject](MdGeArray1OfPnt.md#inittempobject)

## Constructors

### constructor

• **new MdGeArray1OfPnt**(`p1?`, `p2?`)

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

▸ **First**(): [`MdGePoint`](MdGePoint.md)

#### Returns

[`MdGePoint`](MdGePoint.md)

___

### Init

▸ **Init**(`thePnt`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `thePnt` | [`MdGePoint`](MdGePoint.md) |

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

▸ **Last**(): [`MdGePoint`](MdGePoint.md)

#### Returns

[`MdGePoint`](MdGePoint.md)

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

▸ **SetValue**(`theIndex`, `thePnt`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theIndex` | `number` |
| `thePnt` | [`MdGePoint`](MdGePoint.md) |

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

▸ **Value**(`theIndex`): [`MdGePoint`](MdGePoint.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theIndex` | `number` |

#### Returns

[`MdGePoint`](MdGePoint.md)

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
