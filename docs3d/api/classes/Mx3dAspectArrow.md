[mxcad_3d API 文档](../README.md) / Mx3dAspectArrow

# Class: Mx3dAspectArrow

Mx3dAspectArrow 类用于定义箭头的显示属性。
该类提供了设置箭头角度、长度、颜色和缩放特性的方法。

## Hierarchy

- [`Mx3dAspectObject`](Mx3dAspectObject.md)

  ↳ **`Mx3dAspectArrow`**

## Table of contents

### Constructors

- [constructor](Mx3dAspectArrow.md#constructor)

### Methods

- [Angle](Mx3dAspectArrow.md#angle)
- [IsZoomable](Mx3dAspectArrow.md#iszoomable)
- [Length](Mx3dAspectArrow.md#length)
- [SetAngle](Mx3dAspectArrow.md#setangle)
- [SetColor](Mx3dAspectArrow.md#setcolor)
- [SetLength](Mx3dAspectArrow.md#setlength)
- [SetZoomable](Mx3dAspectArrow.md#setzoomable)

## Constructors

### constructor

• **new Mx3dAspectArrow**()

构造一个箭头显示属性对象。

#### Overrides

Mx3dAspectObject.constructor

• **new Mx3dAspectArrow**(`anAngle`, `aLength`)

构造一个具有指定角度和长度的箭头显示属性对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `anAngle` | `number` | 箭头的角度。 |
| `aLength` | `number` | 箭头的长度。 |

#### Overrides

Mx3dAspectObject.constructor

## Methods

### Angle

▸ **Angle**(): `number`

获取箭头的当前角度。

#### Returns

`number`

当前箭头的角度。

___

### IsZoomable

▸ **IsZoomable**(): `boolean`

检查箭头是否可缩放。

#### Returns

`boolean`

如果箭头是可缩放的，则返回 true；否则返回 false。

___

### Length

▸ **Length**(): `number`

获取箭头的当前长度。

#### Returns

`number`

当前箭头的长度。

___

### SetAngle

▸ **SetAngle**(`anAngle`): `void`

设置箭头的角度。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `anAngle` | `number` | 要设置的箭头角度。 |

#### Returns

`void`

___

### SetColor

▸ **SetColor**(`theColor`): `void`

设置箭头的颜色。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theColor` | [`Mx3dGeColor`](Mx3dGeColor.md) | 要设置的箭头颜色。 |

#### Returns

`void`

___

### SetLength

▸ **SetLength**(`theLength`): `void`

设置箭头的长度。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theLength` | `number` | 要设置的箭头长度。 |

#### Returns

`void`

___

### SetZoomable

▸ **SetZoomable**(`theIsZoomable`): `void`

设置箭头是否可缩放。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theIsZoomable` | `boolean` | 如果为 true，箭头是可缩放的；否则为 false。 |

#### Returns

`void`
