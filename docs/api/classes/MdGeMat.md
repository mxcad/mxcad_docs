[mxcad API 文档](../README.md) / MdGeMat

# Class: MdGeMat

表示一个矩阵

## Hierarchy

- [`MdGeObject`](MdGeObject.md)

  ↳ **`MdGeMat`**

## Table of contents

### Constructors

- [constructor](MdGeMat.md#constructor)

### Properties

- [imp](MdGeMat.md#imp)

### Methods

- [Add](MdGeMat.md#add)
- [Added](MdGeMat.md#added)
- [ChangeValue](MdGeMat.md#changevalue)
- [Column](MdGeMat.md#column)
- [Determinant](MdGeMat.md#determinant)
- [Diagonal](MdGeMat.md#diagonal)
- [Divide](MdGeMat.md#divide)
- [Divided](MdGeMat.md#divided)
- [Invert](MdGeMat.md#invert)
- [Inverted](MdGeMat.md#inverted)
- [IsSingular](MdGeMat.md#issingular)
- [MultipliedByMat](MdGeMat.md#multipliedbymat)
- [MultipliedByS](MdGeMat.md#multipliedbys)
- [MultiplyByMat](MdGeMat.md#multiplybymat)
- [MultiplyByS](MdGeMat.md#multiplybys)
- [Power](MdGeMat.md#power)
- [Powered](MdGeMat.md#powered)
- [PreMultiplyByMat](MdGeMat.md#premultiplybymat)
- [Row](MdGeMat.md#row)
- [SetCol](MdGeMat.md#setcol)
- [SetCols](MdGeMat.md#setcols)
- [SetCross](MdGeMat.md#setcross)
- [SetDiagonal](MdGeMat.md#setdiagonal)
- [SetDot](MdGeMat.md#setdot)
- [SetIdentity](MdGeMat.md#setidentity)
- [SetRotation](MdGeMat.md#setrotation)
- [SetRow](MdGeMat.md#setrow)
- [SetRows](MdGeMat.md#setrows)
- [SetScale](MdGeMat.md#setscale)
- [SetValue](MdGeMat.md#setvalue)
- [Subtract](MdGeMat.md#subtract)
- [Subtracted](MdGeMat.md#subtracted)
- [Transpose](MdGeMat.md#transpose)
- [Transposed](MdGeMat.md#transposed)
- [Value](MdGeMat.md#value)
- [getImp](MdGeMat.md#getimp)
- [initTempObject](MdGeMat.md#inittempobject)

## Constructors

### constructor

• **new MdGeMat**(`p1?`, `p2?`, `p3?`, `p4?`, `p5?`, `p6?`, `p7?`, `p8?`, `p9?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `p1?` | `number` \| `object` \| [`MdGeXYZ`](MdGeXYZ.md) |
| `p2?` | `number` \| [`MdGeXYZ`](MdGeXYZ.md) |
| `p3?` | `number` \| [`MdGeXYZ`](MdGeXYZ.md) |
| `p4?` | `number` |
| `p5?` | `number` |
| `p6?` | `number` |
| `p7?` | `number` |
| `p8?` | `number` |
| `p9?` | `number` |

#### Overrides

[MdGeObject](MdGeObject.md).[constructor](MdGeObject.md#constructor)

## Properties

### imp

• `Protected` **imp**: `any` = `0`

#### Inherited from

[MdGeObject](MdGeObject.md).[imp](MdGeObject.md#imp)

## Methods

### Add

▸ **Add**(`other`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`MdGeMat`](MdGeMat.md) |

#### Returns

`void`

___

### Added

▸ **Added**(`other`): [`MdGeMat`](MdGeMat.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`MdGeMat`](MdGeMat.md) |

#### Returns

[`MdGeMat`](MdGeMat.md)

___

### ChangeValue

▸ **ChangeValue**(`row`, `col`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `row` | `number` |
| `col` | `number` |
| `value` | `number` |

#### Returns

`void`

___

### Column

▸ **Column**(`col`): [`MdGeXYZ`](MdGeXYZ.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `col` | `number` |

#### Returns

[`MdGeXYZ`](MdGeXYZ.md)

___

### Determinant

▸ **Determinant**(): `number`

#### Returns

`number`

___

### Diagonal

▸ **Diagonal**(): [`MdGeXYZ`](MdGeXYZ.md)

#### Returns

[`MdGeXYZ`](MdGeXYZ.md)

___

### Divide

▸ **Divide**(`scalar`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `scalar` | `number` |

#### Returns

`void`

___

### Divided

▸ **Divided**(`scalar`): [`MdGeMat`](MdGeMat.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `scalar` | `number` |

#### Returns

[`MdGeMat`](MdGeMat.md)

___

### Invert

▸ **Invert**(): `void`

#### Returns

`void`

___

### Inverted

▸ **Inverted**(): [`MdGeMat`](MdGeMat.md)

#### Returns

[`MdGeMat`](MdGeMat.md)

___

### IsSingular

▸ **IsSingular**(): `boolean`

#### Returns

`boolean`

___

### MultipliedByMat

▸ **MultipliedByMat**(`other`): [`MdGeMat`](MdGeMat.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`MdGeMat`](MdGeMat.md) |

#### Returns

[`MdGeMat`](MdGeMat.md)

___

### MultipliedByS

▸ **MultipliedByS**(`scalar`): [`MdGeMat`](MdGeMat.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `scalar` | `number` |

#### Returns

[`MdGeMat`](MdGeMat.md)

___

### MultiplyByMat

▸ **MultiplyByMat**(`other`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`MdGeMat`](MdGeMat.md) |

#### Returns

`void`

___

### MultiplyByS

▸ **MultiplyByS**(`scalar`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `scalar` | `number` |

#### Returns

`void`

___

### Power

▸ **Power**(`n`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

`void`

___

### Powered

▸ **Powered**(`n`): [`MdGeMat`](MdGeMat.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

[`MdGeMat`](MdGeMat.md)

___

### PreMultiplyByMat

▸ **PreMultiplyByMat**(`other`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`MdGeMat`](MdGeMat.md) |

#### Returns

`void`

___

### Row

▸ **Row**(`row`): [`MdGeXYZ`](MdGeXYZ.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `row` | `number` |

#### Returns

[`MdGeXYZ`](MdGeXYZ.md)

___

### SetCol

▸ **SetCol**(`col`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `col` | `number` |
| `value` | [`MdGeXYZ`](MdGeXYZ.md) |

#### Returns

`void`

___

### SetCols

▸ **SetCols**(`col1`, `col2`, `col3`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `col1` | [`MdGeXYZ`](MdGeXYZ.md) |
| `col2` | [`MdGeXYZ`](MdGeXYZ.md) |
| `col3` | [`MdGeXYZ`](MdGeXYZ.md) |

#### Returns

`void`

___

### SetCross

▸ **SetCross**(`ref`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ref` | [`MdGeXYZ`](MdGeXYZ.md) |

#### Returns

`void`

___

### SetDiagonal

▸ **SetDiagonal**(`x1`, `x2`, `x3`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x1` | `number` |
| `x2` | `number` |
| `x3` | `number` |

#### Returns

`void`

___

### SetDot

▸ **SetDot**(`ref`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ref` | [`MdGeXYZ`](MdGeXYZ.md) |

#### Returns

`void`

___

### SetIdentity

▸ **SetIdentity**(): `void`

#### Returns

`void`

___

### SetRotation

▸ **SetRotation**(`axis`, `ang`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `axis` | [`MdGeXYZ`](MdGeXYZ.md) |
| `ang` | `number` |

#### Returns

`void`

___

### SetRow

▸ **SetRow**(`row`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `row` | `number` |
| `value` | [`MdGeXYZ`](MdGeXYZ.md) |

#### Returns

`void`

___

### SetRows

▸ **SetRows**(`row1`, `row2`, `row3`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `row1` | [`MdGeXYZ`](MdGeXYZ.md) |
| `row2` | [`MdGeXYZ`](MdGeXYZ.md) |
| `row3` | [`MdGeXYZ`](MdGeXYZ.md) |

#### Returns

`void`

___

### SetScale

▸ **SetScale**(`s`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `number` |

#### Returns

`void`

___

### SetValue

▸ **SetValue**(`row`, `col`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `row` | `number` |
| `col` | `number` |
| `value` | `number` |

#### Returns

`void`

___

### Subtract

▸ **Subtract**(`other`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`MdGeMat`](MdGeMat.md) |

#### Returns

`void`

___

### Subtracted

▸ **Subtracted**(`other`): [`MdGeMat`](MdGeMat.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`MdGeMat`](MdGeMat.md) |

#### Returns

[`MdGeMat`](MdGeMat.md)

___

### Transpose

▸ **Transpose**(): `void`

#### Returns

`void`

___

### Transposed

▸ **Transposed**(): [`MdGeMat`](MdGeMat.md)

#### Returns

[`MdGeMat`](MdGeMat.md)

___

### Value

▸ **Value**(`row`, `col`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `row` | `number` |
| `col` | `number` |

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
