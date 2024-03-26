[mxcad API 文档](../README.md) / MdGeLight

# Class: MdGeLight

光照

## Hierarchy

- [`MdGeObject`](MdGeObject.md)

  ↳ **`MdGeLight`**

## Table of contents

### Constructors

- [constructor](MdGeLight.md#constructor)

### Properties

- [imp](MdGeLight.md#imp)

### Methods

- [Angle](MdGeLight.md#angle)
- [Color](MdGeLight.md#color)
- [Concentration](MdGeLight.md#concentration)
- [ConstAttenuation](MdGeLight.md#constattenuation)
- [CopyFrom](MdGeLight.md#copyfrom)
- [Direction](MdGeLight.md#direction)
- [DisplayPosition](MdGeLight.md#displayposition)
- [HasRange](MdGeLight.md#hasrange)
- [Headlight](MdGeLight.md#headlight)
- [Intensity](MdGeLight.md#intensity)
- [IsEnabled](MdGeLight.md#isenabled)
- [IsHeadlight](MdGeLight.md#isheadlight)
- [LinearAttenuation](MdGeLight.md#linearattenuation)
- [Name](MdGeLight.md#name)
- [Position](MdGeLight.md#position)
- [Range](MdGeLight.md#range)
- [SetAngle](MdGeLight.md#setangle)
- [SetAttenuation](MdGeLight.md#setattenuation)
- [SetCastShadows](MdGeLight.md#setcastshadows)
- [SetColor](MdGeLight.md#setcolor)
- [SetConcentration](MdGeLight.md#setconcentration)
- [SetDirection](MdGeLight.md#setdirection)
- [SetDisplayPosition](MdGeLight.md#setdisplayposition)
- [SetEnabled](MdGeLight.md#setenabled)
- [SetHeadlight](MdGeLight.md#setheadlight)
- [SetIntensity](MdGeLight.md#setintensity)
- [SetName](MdGeLight.md#setname)
- [SetPosition](MdGeLight.md#setposition)
- [SetRange](MdGeLight.md#setrange)
- [SetSmoothAngle](MdGeLight.md#setsmoothangle)
- [SetSmoothRadius](MdGeLight.md#setsmoothradius)
- [Smoothness](MdGeLight.md#smoothness)
- [ToCastShadows](MdGeLight.md#tocastshadows)
- [Type](MdGeLight.md#type)
- [getImp](MdGeLight.md#getimp)
- [initTempObject](MdGeLight.md#inittempobject)

## Constructors

### constructor

• **new MdGeLight**(`p`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `p` | `object` \| [`MxTypeOfLightSource`](../enums/MdGe.MxTypeOfLightSource.md) |

#### Overrides

[MdGeObject](MdGeObject.md).[constructor](MdGeObject.md#constructor)

## Properties

### imp

• `Protected` **imp**: `any` = `0`

#### Inherited from

[MdGeObject](MdGeObject.md).[imp](MdGeObject.md#imp)

## Methods

### Angle

▸ **Angle**(): `number`

#### Returns

`number`

___

### Color

▸ **Color**(): [`MdGeColor`](MdGeColor.md)

#### Returns

[`MdGeColor`](MdGeColor.md)

___

### Concentration

▸ **Concentration**(): `number`

#### Returns

`number`

___

### ConstAttenuation

▸ **ConstAttenuation**(): `number`

#### Returns

`number`

___

### CopyFrom

▸ **CopyFrom**(`theLight`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theLight` | [`MdGeLight`](MdGeLight.md) |

#### Returns

`void`

___

### Direction

▸ **Direction**(): [`MdGeDir`](MdGeDir.md)

#### Returns

[`MdGeDir`](MdGeDir.md)

___

### DisplayPosition

▸ **DisplayPosition**(): [`MdGePoint`](MdGePoint.md)

#### Returns

[`MdGePoint`](MdGePoint.md)

___

### HasRange

▸ **HasRange**(): `boolean`

#### Returns

`boolean`

___

### Headlight

▸ **Headlight**(): `boolean`

#### Returns

`boolean`

___

### Intensity

▸ **Intensity**(): `number`

#### Returns

`number`

___

### IsEnabled

▸ **IsEnabled**(): `boolean`

#### Returns

`boolean`

___

### IsHeadlight

▸ **IsHeadlight**(): `boolean`

#### Returns

`boolean`

___

### LinearAttenuation

▸ **LinearAttenuation**(): `number`

#### Returns

`number`

___

### Name

▸ **Name**(): `string`

#### Returns

`string`

___

### Position

▸ **Position**(): [`MdGePoint`](MdGePoint.md)

#### Returns

[`MdGePoint`](MdGePoint.md)

___

### Range

▸ **Range**(): `number`

#### Returns

`number`

___

### SetAngle

▸ **SetAngle**(`theAngle`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theAngle` | `number` |

#### Returns

`void`

___

### SetAttenuation

▸ **SetAttenuation**(`theConstAttenuation`, `theLinearAttenuation`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theConstAttenuation` | `number` |
| `theLinearAttenuation` | `number` |

#### Returns

`void`

___

### SetCastShadows

▸ **SetCastShadows**(`theToCast`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theToCast` | `boolean` |

#### Returns

`void`

___

### SetColor

▸ **SetColor**(`theColor`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theColor` | [`MdGeColor`](MdGeColor.md) |

#### Returns

`void`

___

### SetConcentration

▸ **SetConcentration**(`theConcentration`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theConcentration` | `number` |

#### Returns

`void`

___

### SetDirection

▸ **SetDirection**(`p1`, `p2?`, `p3?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `p1` | `number` \| [`MdGeDir`](MdGeDir.md) |
| `p2?` | `number` |
| `p3?` | `number` |

#### Returns

`void`

___

### SetDisplayPosition

▸ **SetDisplayPosition**(`thePosition`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `thePosition` | [`MdGePoint`](MdGePoint.md) |

#### Returns

`void`

___

### SetEnabled

▸ **SetEnabled**(`theIsOn`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theIsOn` | `boolean` |

#### Returns

`void`

___

### SetHeadlight

▸ **SetHeadlight**(`theValue`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theValue` | `boolean` |

#### Returns

`void`

___

### SetIntensity

▸ **SetIntensity**(`theValue`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theValue` | `number` |

#### Returns

`void`

___

### SetName

▸ **SetName**(`theName`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theName` | `string` |

#### Returns

`void`

___

### SetPosition

▸ **SetPosition**(`p1`, `p2?`, `p3?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `p1` | `number` \| [`MdGePoint`](MdGePoint.md) |
| `p2?` | `number` |
| `p3?` | `number` |

#### Returns

`void`

___

### SetRange

▸ **SetRange**(`theValue`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theValue` | `number` |

#### Returns

`void`

___

### SetSmoothAngle

▸ **SetSmoothAngle**(`theValue`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theValue` | `number` |

#### Returns

`void`

___

### SetSmoothRadius

▸ **SetSmoothRadius**(`theValue`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theValue` | `number` |

#### Returns

`void`

___

### Smoothness

▸ **Smoothness**(): `number`

#### Returns

`number`

___

### ToCastShadows

▸ **ToCastShadows**(): `boolean`

#### Returns

`boolean`

___

### Type

▸ **Type**(): [`MxTypeOfLightSource`](../enums/MdGe.MxTypeOfLightSource.md)

#### Returns

[`MxTypeOfLightSource`](../enums/MdGe.MxTypeOfLightSource.md)

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
