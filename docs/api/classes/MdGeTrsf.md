[mxcad API 文档](../README.md) / MdGeTrsf

# Class: MdGeTrsf

表示一个变换

## Hierarchy

- [`MdGeObject`](MdGeObject.md)

  ↳ **`MdGeTrsf`**

## Table of contents

### Constructors

- [constructor](MdGeTrsf.md#constructor)

### Properties

- [imp](MdGeTrsf.md#imp)

### Methods

- [Invert](MdGeTrsf.md#invert)
- [Inverted](MdGeTrsf.md#inverted)
- [IsNegative](MdGeTrsf.md#isnegative)
- [Multiplied](MdGeTrsf.md#multiplied)
- [Multiply](MdGeTrsf.md#multiply)
- [Power](MdGeTrsf.md#power)
- [Powered](MdGeTrsf.md#powered)
- [PreMultiply](MdGeTrsf.md#premultiply)
- [ScaleFactor](MdGeTrsf.md#scalefactor)
- [SetMirrorByAxis](MdGeTrsf.md#setmirrorbyaxis)
- [SetMirrorByCSYSR](MdGeTrsf.md#setmirrorbycsysr)
- [SetMirrorByPoint](MdGeTrsf.md#setmirrorbypoint)
- [SetRotation](MdGeTrsf.md#setrotation)
- [SetScale](MdGeTrsf.md#setscale)
- [SetScaleFactor](MdGeTrsf.md#setscalefactor)
- [SetTranslationBy2Points](MdGeTrsf.md#settranslationby2points)
- [SetTranslationByVec](MdGeTrsf.md#settranslationbyvec)
- [SetTranslationPart](MdGeTrsf.md#settranslationpart)
- [SetValues](MdGeTrsf.md#setvalues)
- [Transforms](MdGeTrsf.md#transforms)
- [Value](MdGeTrsf.md#value)
- [getImp](MdGeTrsf.md#getimp)
- [initTempObject](MdGeTrsf.md#inittempobject)

## Constructors

### constructor

• **new MdGeTrsf**(`p?`)

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

### Invert

▸ **Invert**(): `void`

#### Returns

`void`

___

### Inverted

▸ **Inverted**(): [`MdGeTrsf`](MdGeTrsf.md)

#### Returns

[`MdGeTrsf`](MdGeTrsf.md)

___

### IsNegative

▸ **IsNegative**(): `number`

#### Returns

`number`

___

### Multiplied

▸ **Multiplied**(`t`): [`MdGeTrsf`](MdGeTrsf.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `t` | [`MdGeTrsf`](MdGeTrsf.md) |

#### Returns

[`MdGeTrsf`](MdGeTrsf.md)

___

### Multiply

▸ **Multiply**(`t`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `t` | [`MdGeTrsf`](MdGeTrsf.md) |

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

▸ **Powered**(`n`): [`MdGeTrsf`](MdGeTrsf.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

[`MdGeTrsf`](MdGeTrsf.md)

___

### PreMultiply

▸ **PreMultiply**(`t`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `t` | [`MdGeTrsf`](MdGeTrsf.md) |

#### Returns

`void`

___

### ScaleFactor

▸ **ScaleFactor**(): `number`

#### Returns

`number`

___

### SetMirrorByAxis

▸ **SetMirrorByAxis**(`axis`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `axis` | [`MdGeAxis`](MdGeAxis.md) |

#### Returns

`void`

___

### SetMirrorByCSYSR

▸ **SetMirrorByCSYSR**(`csysr`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `csysr` | [`MdGeCSYSR`](MdGeCSYSR.md) |

#### Returns

`void`

___

### SetMirrorByPoint

▸ **SetMirrorByPoint**(`point`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `point` | [`MdGePoint`](MdGePoint.md) |

#### Returns

`void`

___

### SetRotation

▸ **SetRotation**(`axis`, `ang`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `axis` | [`MdGeAxis`](MdGeAxis.md) |
| `ang` | `number` |

#### Returns

`void`

___

### SetScale

▸ **SetScale**(`point`, `s`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `point` | [`MdGePoint`](MdGePoint.md) |
| `s` | `number` |

#### Returns

`void`

___

### SetScaleFactor

▸ **SetScaleFactor**(`s`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `number` |

#### Returns

`void`

___

### SetTranslationBy2Points

▸ **SetTranslationBy2Points**(`point1`, `point2`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `point1` | [`MdGePoint`](MdGePoint.md) |
| `point2` | [`MdGePoint`](MdGePoint.md) |

#### Returns

`void`

___

### SetTranslationByVec

▸ **SetTranslationByVec**(`vec`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `vec` | [`MdGeVec`](MdGeVec.md) |

#### Returns

`void`

___

### SetTranslationPart

▸ **SetTranslationPart**(`vec`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `vec` | [`MdGeVec`](MdGeVec.md) |

#### Returns

`void`

___

### SetValues

▸ **SetValues**(`a11`, `a12`, `a13`, `a14`, `a21`, `a22`, `a23`, `a24`, `a31`, `a32`, `a33`, `a34`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a11` | `number` |
| `a12` | `number` |
| `a13` | `number` |
| `a14` | `number` |
| `a21` | `number` |
| `a22` | `number` |
| `a23` | `number` |
| `a24` | `number` |
| `a31` | `number` |
| `a32` | `number` |
| `a33` | `number` |
| `a34` | `number` |

#### Returns

`void`

___

### Transforms

▸ **Transforms**(`x`, `y`, `z`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `z` | `number` |

#### Returns

`void`

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
