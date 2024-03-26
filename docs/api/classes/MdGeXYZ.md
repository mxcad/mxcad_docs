[mxcad API 文档](../README.md) / MdGeXYZ

# Class: MdGeXYZ

表示一个坐标

## Hierarchy

- [`MdGeObject`](MdGeObject.md)

  ↳ **`MdGeXYZ`**

## Table of contents

### Constructors

- [constructor](MdGeXYZ.md#constructor)

### Properties

- [imp](MdGeXYZ.md#imp)

### Methods

- [Add](MdGeXYZ.md#add)
- [Added](MdGeXYZ.md#added)
- [ChangeCoord](MdGeXYZ.md#changecoord)
- [Coord](MdGeXYZ.md#coord)
- [Cross](MdGeXYZ.md#cross)
- [CrossCross](MdGeXYZ.md#crosscross)
- [CrossCrossed](MdGeXYZ.md#crosscrossed)
- [CrossMagnitude](MdGeXYZ.md#crossmagnitude)
- [CrossSquareMagnitude](MdGeXYZ.md#crosssquaremagnitude)
- [Crossed](MdGeXYZ.md#crossed)
- [Divide](MdGeXYZ.md#divide)
- [Divided](MdGeXYZ.md#divided)
- [Dot](MdGeXYZ.md#dot)
- [DotCross](MdGeXYZ.md#dotcross)
- [IsEqual](MdGeXYZ.md#isequal)
- [Modulus](MdGeXYZ.md#modulus)
- [MultipliedByMat](MdGeXYZ.md#multipliedbymat)
- [MultipliedByS](MdGeXYZ.md#multipliedbys)
- [MultipliedByXYZ](MdGeXYZ.md#multipliedbyxyz)
- [MultiplyByMat](MdGeXYZ.md#multiplybymat)
- [MultiplyByS](MdGeXYZ.md#multiplybys)
- [MultiplyByXYZ](MdGeXYZ.md#multiplybyxyz)
- [Normalize](MdGeXYZ.md#normalize)
- [Normalized](MdGeXYZ.md#normalized)
- [Reverse](MdGeXYZ.md#reverse)
- [Reversed](MdGeXYZ.md#reversed)
- [SetCoord](MdGeXYZ.md#setcoord)
- [SetX](MdGeXYZ.md#setx)
- [SetY](MdGeXYZ.md#sety)
- [SetZ](MdGeXYZ.md#setz)
- [SquareModulus](MdGeXYZ.md#squaremodulus)
- [Subtract](MdGeXYZ.md#subtract)
- [Subtracted](MdGeXYZ.md#subtracted)
- [X](MdGeXYZ.md#x)
- [Y](MdGeXYZ.md#y)
- [Z](MdGeXYZ.md#z)
- [getImp](MdGeXYZ.md#getimp)
- [initTempObject](MdGeXYZ.md#inittempobject)

## Constructors

### constructor

• **new MdGeXYZ**(`p1?`, `p2?`, `p3?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `p1?` | `number` \| `object` |
| `p2?` | `number` |
| `p3?` | `number` |

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
| `other` | [`MdGeXYZ`](MdGeXYZ.md) |

#### Returns

`void`

___

### Added

▸ **Added**(`other`): [`MdGeXYZ`](MdGeXYZ.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`MdGeXYZ`](MdGeXYZ.md) |

#### Returns

[`MdGeXYZ`](MdGeXYZ.md)

___

### ChangeCoord

▸ **ChangeCoord**(`index`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `value` | `number` |

#### Returns

`void`

___

### Coord

▸ **Coord**(`index`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

`number`

___

### Cross

▸ **Cross**(`other`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`MdGeXYZ`](MdGeXYZ.md) |

#### Returns

`void`

___

### CrossCross

▸ **CrossCross**(`coord1`, `coord2`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `coord1` | [`MdGeXYZ`](MdGeXYZ.md) |
| `coord2` | [`MdGeXYZ`](MdGeXYZ.md) |

#### Returns

`void`

___

### CrossCrossed

▸ **CrossCrossed**(`coord1`, `coord2`): [`MdGeXYZ`](MdGeXYZ.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `coord1` | [`MdGeXYZ`](MdGeXYZ.md) |
| `coord2` | [`MdGeXYZ`](MdGeXYZ.md) |

#### Returns

[`MdGeXYZ`](MdGeXYZ.md)

___

### CrossMagnitude

▸ **CrossMagnitude**(`right`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `right` | [`MdGeXYZ`](MdGeXYZ.md) |

#### Returns

`number`

___

### CrossSquareMagnitude

▸ **CrossSquareMagnitude**(`right`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `right` | [`MdGeXYZ`](MdGeXYZ.md) |

#### Returns

`number`

___

### Crossed

▸ **Crossed**(`other`): [`MdGeXYZ`](MdGeXYZ.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`MdGeXYZ`](MdGeXYZ.md) |

#### Returns

[`MdGeXYZ`](MdGeXYZ.md)

___

### Divide

▸ **Divide**(`salar`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `salar` | `number` |

#### Returns

`void`

___

### Divided

▸ **Divided**(`scalar`): [`MdGeXYZ`](MdGeXYZ.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `scalar` | `number` |

#### Returns

[`MdGeXYZ`](MdGeXYZ.md)

___

### Dot

▸ **Dot**(`other`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`MdGeXYZ`](MdGeXYZ.md) |

#### Returns

`number`

___

### DotCross

▸ **DotCross**(`coord1`, `coord2`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `coord1` | [`MdGeXYZ`](MdGeXYZ.md) |
| `coord2` | [`MdGeXYZ`](MdGeXYZ.md) |

#### Returns

`number`

___

### IsEqual

▸ **IsEqual**(`other`, `tolerance`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`MdGeXYZ`](MdGeXYZ.md) |
| `tolerance` | `number` |

#### Returns

`boolean`

___

### Modulus

▸ **Modulus**(): `number`

#### Returns

`number`

___

### MultipliedByMat

▸ **MultipliedByMat**(`matrix`): [`MdGeXYZ`](MdGeXYZ.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `matrix` | [`MdGeMat`](MdGeMat.md) |

#### Returns

[`MdGeXYZ`](MdGeXYZ.md)

___

### MultipliedByS

▸ **MultipliedByS**(`scalar`): [`MdGeXYZ`](MdGeXYZ.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `scalar` | `number` |

#### Returns

[`MdGeXYZ`](MdGeXYZ.md)

___

### MultipliedByXYZ

▸ **MultipliedByXYZ**(`other`): [`MdGeXYZ`](MdGeXYZ.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`MdGeXYZ`](MdGeXYZ.md) |

#### Returns

[`MdGeXYZ`](MdGeXYZ.md)

___

### MultiplyByMat

▸ **MultiplyByMat**(`matrix`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `matrix` | [`MdGeMat`](MdGeMat.md) |

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

### MultiplyByXYZ

▸ **MultiplyByXYZ**(`other`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`MdGeXYZ`](MdGeXYZ.md) |

#### Returns

`void`

___

### Normalize

▸ **Normalize**(): `void`

#### Returns

`void`

___

### Normalized

▸ **Normalized**(): [`MdGeXYZ`](MdGeXYZ.md)

#### Returns

[`MdGeXYZ`](MdGeXYZ.md)

___

### Reverse

▸ **Reverse**(): `void`

#### Returns

`void`

___

### Reversed

▸ **Reversed**(): [`MdGeXYZ`](MdGeXYZ.md)

#### Returns

[`MdGeXYZ`](MdGeXYZ.md)

___

### SetCoord

▸ **SetCoord**(`x`, `y`, `z?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `z?` | `number` |

#### Returns

`void`

___

### SetX

▸ **SetX**(`x`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |

#### Returns

`void`

___

### SetY

▸ **SetY**(`y`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `number` |

#### Returns

`void`

___

### SetZ

▸ **SetZ**(`z`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `z` | `number` |

#### Returns

`void`

___

### SquareModulus

▸ **SquareModulus**(): `number`

#### Returns

`number`

___

### Subtract

▸ **Subtract**(`other`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`MdGeXYZ`](MdGeXYZ.md) |

#### Returns

`void`

___

### Subtracted

▸ **Subtracted**(`other`): [`MdGeXYZ`](MdGeXYZ.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`MdGeXYZ`](MdGeXYZ.md) |

#### Returns

[`MdGeXYZ`](MdGeXYZ.md)

___

### X

▸ **X**(): `number`

#### Returns

`number`

___

### Y

▸ **Y**(): `number`

#### Returns

`number`

___

### Z

▸ **Z**(): `number`

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
