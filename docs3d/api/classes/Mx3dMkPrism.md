[mxcad_3d API 文档](../README.md) / Mx3dMkPrism

# Class: Mx3dMkPrism

表示建模拉伸扫掠体的类，继承自 Mx3dMkObject。

## Hierarchy

- [`Mx3dMkObject`](Mx3dMkObject.md)

  ↳ **`Mx3dMkPrism`**

## Table of contents

### Constructors

- [constructor](Mx3dMkPrism.md#constructor)

### Methods

- [Build](Mx3dMkPrism.md#build)
- [IsDone](Mx3dMkPrism.md#isdone)
- [Shape](Mx3dMkPrism.md#shape)

## Constructors

### constructor

• **new Mx3dMkPrism**(`S`, `V`)

构造函数，接受一个拓扑形状和一个向量来创建拉伸扫掠体。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `S` | [`Mx3dShapeObject`](Mx3dShapeObject.md) | 拓扑形状对象。 |
| `V` | [`Mx3dGeVec`](Mx3dGeVec.md) | 拉伸方向向量。 |

#### Overrides

Mx3dMkObject.constructor

• **new Mx3dMkPrism**(`S`, `D`)

构造函数，接受一个拓扑形状和一个方向来创建拉伸扫掠体。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `S` | [`Mx3dShapeObject`](Mx3dShapeObject.md) | 拓扑形状对象。 |
| `D` | [`Mx3dGeDir`](Mx3dGeDir.md) | 拉伸方向。 |

#### Overrides

Mx3dMkObject.constructor

## Methods

### Build

▸ **Build**(): `void`

执行拉伸扫掠体的建模算法。

#### Returns

`void`

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

获取拉伸扫掠体的形状。

#### Returns

[`Mx3dShapeObject`](Mx3dShapeObject.md)

拉伸扫掠体的形状对象。
