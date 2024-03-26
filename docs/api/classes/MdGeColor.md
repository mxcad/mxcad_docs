[mxcad API 文档](../README.md) / MdGeColor

# Class: MdGeColor

表示颜色

## Hierarchy

- [`MdGeObject`](MdGeObject.md)

  ↳ **`MdGeColor`**

## Table of contents

### Constructors

- [constructor](MdGeColor.md#constructor)

### Properties

- [imp](MdGeColor.md#imp)

### Methods

- [Blue](MdGeColor.md#blue)
- [ChangeContrast](MdGeColor.md#changecontrast)
- [ChangeIntensity](MdGeColor.md#changeintensity)
- [DeltaE2000](MdGeColor.md#deltae2000)
- [Distance](MdGeColor.md#distance)
- [Green](MdGeColor.md#green)
- [Hue](MdGeColor.md#hue)
- [IsDifferent](MdGeColor.md#isdifferent)
- [IsEqual](MdGeColor.md#isequal)
- [Light](MdGeColor.md#light)
- [Name](MdGeColor.md#name)
- [Red](MdGeColor.md#red)
- [Saturation](MdGeColor.md#saturation)
- [SetValues](MdGeColor.md#setvalues)
- [SquareDistance](MdGeColor.md#squaredistance)
- [StringName](MdGeColor.md#stringname)
- [getImp](MdGeColor.md#getimp)
- [initTempObject](MdGeColor.md#inittempobject)

## Constructors

### constructor

• **new MdGeColor**(`p1?`, `p2?`, `p3?`, `p4?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `p1?` | `number` \| `object` |
| `p2?` | `number` |
| `p3?` | `number` |
| `p4?` | [`MxTypeOfColor`](../enums/MdGe.MxTypeOfColor.md) |

#### Overrides

[MdGeObject](MdGeObject.md).[constructor](MdGeObject.md#constructor)

## Properties

### imp

• `Protected` **imp**: `any` = `0`

#### Inherited from

[MdGeObject](MdGeObject.md).[imp](MdGeObject.md#imp)

## Methods

### Blue

▸ **Blue**(): `number`

#### Returns

`number`

___

### ChangeContrast

▸ **ChangeContrast**(`theDelta`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theDelta` | `number` |

#### Returns

`void`

___

### ChangeIntensity

▸ **ChangeIntensity**(`theDelta`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theDelta` | `number` |

#### Returns

`void`

___

### DeltaE2000

▸ **DeltaE2000**(`theOther`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theOther` | [`MdGeColor`](MdGeColor.md) |

#### Returns

`number`

___

### Distance

▸ **Distance**(`theColor`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theColor` | [`MdGeColor`](MdGeColor.md) |

#### Returns

`number`

___

### Green

▸ **Green**(): `number`

#### Returns

`number`

___

### Hue

▸ **Hue**(): `number`

#### Returns

`number`

___

### IsDifferent

▸ **IsDifferent**(`theOther`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theOther` | [`MdGeColor`](MdGeColor.md) |

#### Returns

`boolean`

___

### IsEqual

▸ **IsEqual**(`theOther`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theOther` | [`MdGeColor`](MdGeColor.md) |

#### Returns

`boolean`

___

### Light

▸ **Light**(): `number`

#### Returns

`number`

___

### Name

▸ **Name**(): [`MxNameOfColor`](../enums/MdGe.MxNameOfColor.md)

#### Returns

[`MxNameOfColor`](../enums/MdGe.MxNameOfColor.md)

___

### Red

▸ **Red**(): `number`

#### Returns

`number`

___

### Saturation

▸ **Saturation**(): `number`

#### Returns

`number`

___

### SetValues

▸ **SetValues**(`p1`, `p2?`, `p3?`, `p4?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `p1` | `number` |
| `p2?` | `number` |
| `p3?` | `number` |
| `p4?` | [`MxTypeOfColor`](../enums/MdGe.MxTypeOfColor.md) |

#### Returns

`void`

___

### SquareDistance

▸ **SquareDistance**(`theColor`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theColor` | [`MdGeColor`](MdGeColor.md) |

#### Returns

`number`

___

### StringName

▸ **StringName**(`theColor`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theColor` | [`MxNameOfColor`](../enums/MdGe.MxNameOfColor.md) |

#### Returns

`string`

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
