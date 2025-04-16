[mxcad_3d API 文档](../README.md) / Mx3dMkCylinder

# Class: Mx3dMkCylinder

表示建模圆柱的类，继承自 Mx3dMkObject

## Hierarchy

- [`Mx3dMkObject`](Mx3dMkObject.md)

  ↳ **`Mx3dMkCylinder`**

## Table of contents

### Constructors

- [constructor](Mx3dMkCylinder.md#constructor)

### Methods

- [Build](Mx3dMkCylinder.md#build)
- [Face](Mx3dMkCylinder.md#face)
- [IsDone](Mx3dMkCylinder.md#isdone)
- [Shape](Mx3dMkCylinder.md#shape)
- [Shell](Mx3dMkCylinder.md#shell)
- [Solid](Mx3dMkCylinder.md#solid)

## Constructors

### constructor

• **new Mx3dMkCylinder**(`Axes`, `R`, `H`, `Angle?`)

构造函数，接受圆柱的坐标系、半径、高度，以及可选的角度参数。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Axes` | [`Mx3dGeCSYSR`](Mx3dGeCSYSR.md) | 坐标系对象。 |
| `R` | `number` | 半径。 |
| `H` | `number` | 高度。 |
| `Angle?` | `number` | （可选）角度。 |

#### Overrides

Mx3dMkObject.constructor

## Methods

### Build

▸ **Build**(): `void`

执行圆柱的建模算法。

#### Returns

`void`

___

### Face

▸ **Face**(): [`Mx3dShapeFace`](Mx3dShapeFace.md)

获取圆柱的拓扑面形状。

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

获取圆柱的拓扑形状。

#### Returns

[`Mx3dShapeObject`](Mx3dShapeObject.md)

拓扑形状。

___

### Shell

▸ **Shell**(): [`Mx3dShapeShell`](Mx3dShapeShell.md)

获取圆柱的拓扑外壳形状。

#### Returns

[`Mx3dShapeShell`](Mx3dShapeShell.md)

拓扑壳形状。

___

### Solid

▸ **Solid**(): [`Mx3dShapeSolid`](Mx3dShapeSolid.md)

获取圆柱的拓扑实体形状。

#### Returns

[`Mx3dShapeSolid`](Mx3dShapeSolid.md)

拓扑实体形状。
