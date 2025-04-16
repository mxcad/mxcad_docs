[mxcad_3d API 文档](../README.md) / Mx3dMkCone

# Class: Mx3dMkCone

表示建模圆锥的类，继承自 Mx3dMkObject

## Hierarchy

- [`Mx3dMkObject`](Mx3dMkObject.md)

  ↳ **`Mx3dMkCone`**

## Table of contents

### Constructors

- [constructor](Mx3dMkCone.md#constructor)

### Methods

- [Build](Mx3dMkCone.md#build)
- [Face](Mx3dMkCone.md#face)
- [IsDone](Mx3dMkCone.md#isdone)
- [Shape](Mx3dMkCone.md#shape)
- [Shell](Mx3dMkCone.md#shell)
- [Solid](Mx3dMkCone.md#solid)

## Constructors

### constructor

• **new Mx3dMkCone**(`Axes`, `R1`, `R2`, `H`, `angle?`)

构造函数，接受圆锥的坐标系、底面半径、顶面半径、高度，以及可选的角度参数。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Axes` | [`Mx3dGeCSYSR`](Mx3dGeCSYSR.md) | 坐标系对象。 |
| `R1` | `number` | 底面半径。 |
| `R2` | `number` | 顶面半径。 |
| `H` | `number` | 高度。 |
| `angle?` | `number` | （可选）角度。 |

#### Overrides

Mx3dMkObject.constructor

## Methods

### Build

▸ **Build**(): `void`

执行圆锥的建模算法。

#### Returns

`void`

___

### Face

▸ **Face**(): [`Mx3dShapeFace`](Mx3dShapeFace.md)

获取圆锥的拓扑面形状。

#### Returns

[`Mx3dShapeFace`](Mx3dShapeFace.md)

拓扑面形状。

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

获取圆锥的拓扑形状。

#### Returns

[`Mx3dShapeObject`](Mx3dShapeObject.md)

拓扑形状。

___

### Shell

▸ **Shell**(): [`Mx3dShapeShell`](Mx3dShapeShell.md)

获取圆锥的拓扑外壳形状。

#### Returns

[`Mx3dShapeShell`](Mx3dShapeShell.md)

拓扑壳形状。

___

### Solid

▸ **Solid**(): [`Mx3dShapeSolid`](Mx3dShapeSolid.md)

获取圆锥的拓扑实体形状。

#### Returns

[`Mx3dShapeSolid`](Mx3dShapeSolid.md)

拓扑实体形状。
