[mxcad API 文档](../README.md) / MdGeArray2OfPnt

# Class: MdGeArray2OfPnt

表示二维点数组。

## Hierarchy

- [`MdGeObject`](MdGeObject.md)

  ↳ **`MdGeArray2OfPnt`**

## Table of contents

### Constructors

- [constructor](MdGeArray2OfPnt.md#constructor)

### Properties

- [imp](MdGeArray2OfPnt.md#imp)

### Methods

- [ColLength](MdGeArray2OfPnt.md#collength)
- [Init](MdGeArray2OfPnt.md#init)
- [IsDeletable](MdGeArray2OfPnt.md#isdeletable)
- [Length](MdGeArray2OfPnt.md#length)
- [LowerCol](MdGeArray2OfPnt.md#lowercol)
- [LowerRow](MdGeArray2OfPnt.md#lowerrow)
- [NbColumns](MdGeArray2OfPnt.md#nbcolumns)
- [NbRows](MdGeArray2OfPnt.md#nbrows)
- [Resize](MdGeArray2OfPnt.md#resize)
- [RowLength](MdGeArray2OfPnt.md#rowlength)
- [SetValue](MdGeArray2OfPnt.md#setvalue)
- [Size](MdGeArray2OfPnt.md#size)
- [UpperCol](MdGeArray2OfPnt.md#uppercol)
- [UpperRow](MdGeArray2OfPnt.md#upperrow)
- [Value](MdGeArray2OfPnt.md#value)
- [getImp](MdGeArray2OfPnt.md#getimp)
- [initTempObject](MdGeArray2OfPnt.md#inittempobject)

## Constructors

### constructor

• **new MdGeArray2OfPnt**(`p1?`, `p2?`, `p3?`, `p4?`, `p5?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `p1?` | `number` \| `object` \| [`MdGePoint`](MdGePoint.md) |
| `p2?` | `number` |
| `p3?` | `number` |
| `p4?` | `number` |
| `p5?` | `number` |

#### Overrides

[MdGeObject](MdGeObject.md).[constructor](MdGeObject.md#constructor)

## Properties

### imp

• `Protected` **imp**: `any` = `0`

#### Inherited from

[MdGeObject](MdGeObject.md).[imp](MdGeObject.md#imp)

## Methods

### ColLength

▸ **ColLength**(): `number`

#### Returns

`number`

___

### Init

▸ **Init**(`thePoint`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `thePoint` | [`MdGePoint`](MdGePoint.md) |

#### Returns

`void`

___

### IsDeletable

▸ **IsDeletable**(): `boolean`

#### Returns

`boolean`

___

### Length

▸ **Length**(): `number`

#### Returns

`number`

___

### LowerCol

▸ **LowerCol**(): `number`

#### Returns

`number`

___

### LowerRow

▸ **LowerRow**(): `number`

#### Returns

`number`

___

### NbColumns

▸ **NbColumns**(): `number`

#### Returns

`number`

___

### NbRows

▸ **NbRows**(): `number`

#### Returns

`number`

___

### Resize

▸ **Resize**(`theRowLower`, `theRowUpper`, `theColLower`, `theColUpper`, `theToCopyData`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theRowLower` | `number` |
| `theRowUpper` | `number` |
| `theColLower` | `number` |
| `theColUpper` | `number` |
| `theToCopyData` | `boolean` |

#### Returns

`void`

___

### RowLength

▸ **RowLength**(): `number`

#### Returns

`number`

___

### SetValue

▸ **SetValue**(`theRow`, `theCol`, `thePoint`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theRow` | `number` |
| `theCol` | `number` |
| `thePoint` | [`MdGePoint`](MdGePoint.md) |

#### Returns

`void`

___

### Size

▸ **Size**(): `number`

#### Returns

`number`

___

### UpperCol

▸ **UpperCol**(): `number`

#### Returns

`number`

___

### UpperRow

▸ **UpperRow**(): `number`

#### Returns

`number`

___

### Value

▸ **Value**(`theRow`, `theCol`): [`MdGePoint`](MdGePoint.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theRow` | `number` |
| `theCol` | `number` |

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
