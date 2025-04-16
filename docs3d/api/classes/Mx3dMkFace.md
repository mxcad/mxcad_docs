[mxcad_3d API 文档](../README.md) / Mx3dMkFace

# Class: Mx3dMkFace

表示建模面的类，继承自 Mx3dMkObject。

## Hierarchy

- [`Mx3dMkObject`](Mx3dMkObject.md)

  ↳ **`Mx3dMkFace`**

## Table of contents

### Constructors

- [constructor](Mx3dMkFace.md#constructor)

### Methods

- [Add](Mx3dMkFace.md#add)
- [Build](Mx3dMkFace.md#build)
- [Face](Mx3dMkFace.md#face)
- [IsDone](Mx3dMkFace.md#isdone)
- [Shape](Mx3dMkFace.md#shape)

## Constructors

### constructor

• **new Mx3dMkFace**(`theWire`, `OnlyPlane?`)

构造函数，接受一个Wire对象和一个布尔值来初始化面对象。

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `theWire` | [`Mx3dShapeFace`](Mx3dShapeFace.md) \| [`Mx3dShapeWire`](Mx3dShapeWire.md) | `undefined` | 要使用的线条对象 或 面形状对象(可添加Wire，形成Hole)。 |
| `OnlyPlane` | `boolean` | `false` | 是否仅限于平面构建，默认为 false。 |

#### Overrides

Mx3dMkObject.constructor

## Methods

### Add

▸ **Add**(`W`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `W` | [`Mx3dShapeWire`](Mx3dShapeWire.md) |

#### Returns

`void`

___

### Build

▸ **Build**(): `void`

执行面的建模算法。

#### Returns

`void`

___

### Face

▸ **Face**(): [`Mx3dShapeFace`](Mx3dShapeFace.md)

获取面的具体对象。

#### Returns

[`Mx3dShapeFace`](Mx3dShapeFace.md)

面的具体对象。

___

### IsDone

▸ **IsDone**(): `boolean`

检查建模算法是否执行完成。

#### Returns

`boolean`

建模算法执行是否完成的标志，true 完成，false 失败。

___

### Shape

▸ **Shape**(): [`Mx3dShapeObject`](Mx3dShapeObject.md)

获取面的形状对象。

#### Returns

[`Mx3dShapeObject`](Mx3dShapeObject.md)

面的形状对象。
