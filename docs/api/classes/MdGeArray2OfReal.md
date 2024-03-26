[mxcad API 文档](../README.md) / MdGeArray2OfReal

# Class: MdGeArray2OfReal

表示二维实数数组。

## Hierarchy

- [`MdGeObject`](MdGeObject.md)

  ↳ **`MdGeArray2OfReal`**

## Table of contents

### Constructors

- [constructor](MdGeArray2OfReal.md#constructor)

### Properties

- [imp](MdGeArray2OfReal.md#imp)

### Methods

- [ColLength](MdGeArray2OfReal.md#collength)
- [Init](MdGeArray2OfReal.md#init)
- [IsDeletable](MdGeArray2OfReal.md#isdeletable)
- [Length](MdGeArray2OfReal.md#length)
- [LowerCol](MdGeArray2OfReal.md#lowercol)
- [LowerRow](MdGeArray2OfReal.md#lowerrow)
- [NbColumns](MdGeArray2OfReal.md#nbcolumns)
- [NbRows](MdGeArray2OfReal.md#nbrows)
- [Resize](MdGeArray2OfReal.md#resize)
- [RowLength](MdGeArray2OfReal.md#rowlength)
- [SetValue](MdGeArray2OfReal.md#setvalue)
- [Size](MdGeArray2OfReal.md#size)
- [UpperCol](MdGeArray2OfReal.md#uppercol)
- [UpperRow](MdGeArray2OfReal.md#upperrow)
- [Value](MdGeArray2OfReal.md#value)
- [getImp](MdGeArray2OfReal.md#getimp)
- [initTempObject](MdGeArray2OfReal.md#inittempobject)

## Constructors

### constructor

• **new MdGeArray2OfReal**(`p1?`, `p2?`, `p3?`, `p4?`, `p5?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `p1?` | `number` \| `object` |
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

▸ **Init**(`theReal`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theReal` | `number` |

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

▸ **SetValue**(`theRow`, `theCol`, `theReal`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theRow` | `number` |
| `theCol` | `number` |
| `theReal` | `number` |

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

▸ **Value**(`theRow`, `theCol`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theRow` | `number` |
| `theCol` | `number` |

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
