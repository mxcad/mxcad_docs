[mxcad API 文档](../README.md) / McCmColor

# Class: McCmColor

表示一个颜色对象，可以通过颜色索引或 RGB 值来设置颜色。

## Hierarchy

- **`McCmColor`**

  ↳ [`Color`](Color.md)

## Table of contents

### Constructors

- [constructor](McCmColor.md#constructor)

### Properties

- [imp](McCmColor.md#imp)

### Accessors

- [blue](McCmColor.md#blue)
- [colorIndex](McCmColor.md#colorindex)
- [green](McCmColor.md#green)
- [method](McCmColor.md#method)
- [n](McCmColor.md#n)
- [red](McCmColor.md#red)

### Methods

- [clone](McCmColor.md#clone)
- [copy](McCmColor.md#copy)
- [getColorString](McCmColor.md#getcolorstring)
- [getColorValue](McCmColor.md#getcolorvalue)
- [getImp](McCmColor.md#getimp)
- [setColorIndex](McCmColor.md#setcolorindex)
- [setRGB](McCmColor.md#setrgb)

## Constructors

### constructor

• **new McCmColor**(`red?`, `green?`, `blue?`)

构造函数。

#### Parameters

| Name | Type |
| :------ | :------ |
| `red?` | `number` \| `object` |
| `green?` | `number` |
| `blue?` | `number` |

## Properties

### imp

• `Private` **imp**: `any`

## Accessors

### blue

• `get` **blue**(): `number`

蓝色值。

#### Returns

`number`

• `set` **blue**(`val`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `number` |

#### Returns

`void`

___

### colorIndex

• `get` **colorIndex**(): `number`

颜色索引。。

#### Returns

`number`

• `set` **colorIndex**(`val`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `number` |

#### Returns

`void`

___

### green

• `get` **green**(): `number`

绿色值。

#### Returns

`number`

• `set` **green**(`val`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `number` |

#### Returns

`void`

___

### method

• `get` **method**(): `number`

方法。

#### Returns

`number`

• `set` **method**(`val`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `number` |

#### Returns

`void`

___

### n

• `get` **n**(): `number`

n

#### Returns

`number`

• `set` **n**(`val`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `number` |

#### Returns

`void`

___

### red

• `get` **red**(): `number`

红色值。

#### Returns

`number`

• `set` **red**(`val`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `number` |

#### Returns

`void`

## Methods

### clone

▸ **clone**(): [`McCmColor`](McCmColor.md)

刻隆一个对对象

#### Returns

[`McCmColor`](McCmColor.md)

___

### copy

▸ **copy**(`val`): [`McCmColor`](McCmColor.md)

复制对象的值

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | [`McCmColor`](McCmColor.md) |

#### Returns

[`McCmColor`](McCmColor.md)

___

### getColorString

▸ **getColorString**(): `string`

得到颜色说明字符串

#### Returns

`string`

___

### getColorValue

▸ **getColorValue**(`layerId?`, `blkRefId?`): `string`

得到颜色值字符串，十六进制格式，layerId:颜色随层时会取layerId指向的层颜色，blkRefId:颜色随块时，会取blkRefId指向的块颜色.

#### Parameters

| Name | Type |
| :------ | :------ |
| `layerId?` | [`McObjectId`](McObjectId.md) |
| `blkRefId?` | [`McObjectId`](McObjectId.md) |

#### Returns

`string`

___

### getImp

▸ **getImp**(): `any`

#### Returns

`any`

___

### setColorIndex

▸ **setColorIndex**(`colorIndex`): `void`

设置颜色索引。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `colorIndex` | `number` | 颜色索引。 |

#### Returns

`void`

___

### setRGB

▸ **setRGB**(`red`, `green`, `blue`): `void`

设置 RGB 值。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `red` | `number` | 红色值。 |
| `green` | `number` | 绿色值。 |
| `blue` | `number` | 蓝色值。 |

#### Returns

`void`
