[mxcad_3d API 文档](../README.md) / Mx3dGeAxis

# Class: Mx3dGeAxis

表示一个轴

## Hierarchy

- [`Mx3dGeObject`](Mx3dGeObject.md)

  ↳ **`Mx3dGeAxis`**

## Table of contents

### Constructors

- [constructor](Mx3dGeAxis.md#constructor)

### Methods

- [Direction](Mx3dGeAxis.md#direction)
- [Location](Mx3dGeAxis.md#location)
- [SetDirection](Mx3dGeAxis.md#setdirection)
- [SetLocation](Mx3dGeAxis.md#setlocation)

## Constructors

### constructor

• **new Mx3dGeAxis**()

默认构造

#### Overrides

Mx3dGeObject.constructor

• **new Mx3dGeAxis**(`theLoc`, `theDir`)

构造函数

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theLoc` | `UniPoint` | 轴的原点 |
| `theDir` | `UniDir` | 轴的方向 |

#### Overrides

Mx3dGeObject.constructor

## Methods

### Direction

▸ **Direction**(): [`Mx3dGeDir`](Mx3dGeDir.md)

获取轴的方向

#### Returns

[`Mx3dGeDir`](Mx3dGeDir.md)

方向

___

### Location

▸ **Location**(): [`Mx3dGePoint`](Mx3dGePoint.md)

获取轴的原点

#### Returns

[`Mx3dGePoint`](Mx3dGePoint.md)

原点

___

### SetDirection

▸ **SetDirection**(`theDir`): `void`

设置轴的方向

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theDir` | [`Mx3dGeDir`](Mx3dGeDir.md) | 方向 |

#### Returns

`void`

___

### SetLocation

▸ **SetLocation**(`theLoc`): `void`

设置轴的原点

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theLoc` | `UniPoint` | 原点 |

#### Returns

`void`
