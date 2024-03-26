[mxcad API 文档](../README.md) / Color

# Class: Color

Color 颜色类

**`Param`**

与new THREE.Color 的参数一样 也可以是自身

**`Example`**

```js
import { Color, ColorIndexType } from "mxcad"
new Color()
new Color("#fff")
new Color("rgb(255, 255, 255)")
new Color(255, 255, 255)
new Color(0XFFFFFF)
new Color(new Mx.MxFun.getMxFunTHREE().Color())
new Color({
 colorIndex: ColorIndexType.kByblock,
})
// 获取css 颜色样式
new Color().getStyle()
```

## Hierarchy

- [`ObjectInheritance`](ObjectInheritance.md)

- [`McCmColor`](McCmColor.md)

  ↳ **`Color`**

## Table of contents

### Constructors

- [constructor](Color.md#constructor)

### Properties

- [getStyle](Color.md#getstyle)
- [h](Color.md#h)
- [l](Color.md#l)
- [s](Color.md#s)
- [set](Color.md#set)
- [setHSL](Color.md#sethsl)
- [toJSON](Color.md#tojson)

### Accessors

- [blue](Color.md#blue)
- [colorIndex](Color.md#colorindex)
- [green](Color.md#green)
- [method](Color.md#method)
- [n](Color.md#n)
- [red](Color.md#red)
- [indexColors](Color.md#indexcolors)

### Methods

- [clone](Color.md#clone)
- [copy](Color.md#copy)
- [getColorString](Color.md#getcolorstring)
- [getColorValue](Color.md#getcolorvalue)
- [getImp](Color.md#getimp)
- [setColorIndex](Color.md#setcolorindex)
- [setRGB](Color.md#setrgb)

## Constructors

### constructor

• **new Color**(`...ages`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `...ages` | [`CreateColorArgs`](../README.md#createcolorargs) \| [[`Color`](Color.md)] |

#### Overrides

[McCmColor](McCmColor.md).[constructor](McCmColor.md#constructor)

## Properties

### getStyle

• **getStyle**: () => `string`

#### Type declaration

▸ (): `string`

获取css样式

##### Returns

`string`

___

### h

• **h**: `number`

___

### l

• **l**: `number`

___

### s

• **s**: `number`

___

### set

• **set**: (...`ages`: [`CreateColorArgs`](../README.md#createcolorargs)) => [`Color`](Color.md)

#### Type declaration

▸ (`...ages`): [`Color`](Color.md)

设置颜色

##### Parameters

| Name | Type |
| :------ | :------ |
| `...ages` | [`CreateColorArgs`](../README.md#createcolorargs) |

##### Returns

[`Color`](Color.md)

___

### setHSL

• **setHSL**: (`h`: `number`, `s`: `number`, `l`: `number`) => [`Color`](Color.md)

#### Type declaration

▸ (`h`, `s`, `l`): [`Color`](Color.md)

设置HSL 值

##### Parameters

| Name | Type |
| :------ | :------ |
| `h` | `number` |
| `s` | `number` |
| `l` | `number` |

##### Returns

[`Color`](Color.md)

___

### toJSON

• **toJSON**: () => [`McCmColorJSON`](../README.md#mccmcolorjson)

#### Type declaration

▸ (): [`McCmColorJSON`](../README.md#mccmcolorjson)

##### Returns

[`McCmColorJSON`](../README.md#mccmcolorjson)

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

___

### indexColors

• `Static` `get` **indexColors**(): [`Color`](Color.md)[]

全部的颜色索引

#### Returns

[`Color`](Color.md)[]

## Methods

### clone

▸ **clone**(): [`McCmColor`](McCmColor.md)

刻隆一个对对象

#### Returns

[`McCmColor`](McCmColor.md)

#### Inherited from

[McCmColor](McCmColor.md).[clone](McCmColor.md#clone)

___

### copy

▸ **copy**(`val`): [`Color`](Color.md)

复制对象的值

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | [`McCmColor`](McCmColor.md) |

#### Returns

[`Color`](Color.md)

#### Inherited from

[McCmColor](McCmColor.md).[copy](McCmColor.md#copy)

___

### getColorString

▸ **getColorString**(): `string`

得到颜色说明字符串

#### Returns

`string`

#### Inherited from

[McCmColor](McCmColor.md).[getColorString](McCmColor.md#getcolorstring)

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

#### Inherited from

[McCmColor](McCmColor.md).[getColorValue](McCmColor.md#getcolorvalue)

___

### getImp

▸ **getImp**(): `any`

#### Returns

`any`

#### Inherited from

[McCmColor](McCmColor.md).[getImp](McCmColor.md#getimp)

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

#### Inherited from

[McCmColor](McCmColor.md).[setColorIndex](McCmColor.md#setcolorindex)

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

#### Inherited from

[McCmColor](McCmColor.md).[setRGB](McCmColor.md#setrgb)
