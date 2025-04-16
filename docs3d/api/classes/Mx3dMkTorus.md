[mxcad_3d API 文档](../README.md) / Mx3dMkTorus

# Class: Mx3dMkTorus

表示建模圆环体的类，继承自 Mx3dMkObject

## Hierarchy

- [`Mx3dMkObject`](Mx3dMkObject.md)

  ↳ **`Mx3dMkTorus`**

## Table of contents

### Constructors

- [constructor](Mx3dMkTorus.md#constructor)

### Methods

- [Build](Mx3dMkTorus.md#build)
- [Face](Mx3dMkTorus.md#face)
- [IsDone](Mx3dMkTorus.md#isdone)
- [Shape](Mx3dMkTorus.md#shape)
- [Shell](Mx3dMkTorus.md#shell)
- [Solid](Mx3dMkTorus.md#solid)

## Constructors

### constructor

• **new Mx3dMkTorus**(`Axes`, `R1`, `R2`)

构造函数，接受坐标系对象、圆环体主半径和次半径作为参数。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Axes` | [`Mx3dGeCSYSR`](Mx3dGeCSYSR.md) | 坐标系对象。 |
| `R1` | `number` | 圆环体主半径。 |
| `R2` | `number` | 圆环体次半径。 |

#### Overrides

Mx3dMkObject.constructor

• **new Mx3dMkTorus**(`Axes`, `R1`, `R2`, `angle`)

构造函数，接受坐标系对象、圆环体主半径、次半径和一个角度参数。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Axes` | [`Mx3dGeCSYSR`](Mx3dGeCSYSR.md) | 坐标系对象。 |
| `R1` | `number` | 圆环体主半径。 |
| `R2` | `number` | 圆环体次半径。 |
| `angle` | `number` | 角度参数。 |

#### Overrides

Mx3dMkObject.constructor

• **new Mx3dMkTorus**(`Axes`, `R1`, `R2`, `angle1`, `angle2`)

构造函数，接受坐标系对象、圆环体主半径、次半径和两个角度参数。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Axes` | [`Mx3dGeCSYSR`](Mx3dGeCSYSR.md) | 坐标系对象。 |
| `R1` | `number` | 圆环体主半径。 |
| `R2` | `number` | 圆环体次半径。 |
| `angle1` | `number` | 第一个角度参数。 |
| `angle2` | `number` | 第二个角度参数。 |

#### Overrides

Mx3dMkObject.constructor

• **new Mx3dMkTorus**(`Axes`, `R1`, `R2`, `angle1`, `angle2`, `angle`)

构造函数，接受坐标系对象、圆环体主半径、次半径和三个角度参数。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Axes` | [`Mx3dGeCSYSR`](Mx3dGeCSYSR.md) | 坐标系对象。 |
| `R1` | `number` | 圆环体主半径。 |
| `R2` | `number` | 圆环体次半径。 |
| `angle1` | `number` | 第一个角度参数。 |
| `angle2` | `number` | 第二个角度参数。 |
| `angle` | `number` | - |

#### Overrides

Mx3dMkObject.constructor

## Methods

### Build

▸ **Build**(): `void`

执行圆环体的建模算法。

#### Returns

`void`

___

### Face

▸ **Face**(): [`Mx3dShapeFace`](Mx3dShapeFace.md)

获取圆环体的拓扑面形状。

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

获取圆环体的拓扑形状。

#### Returns

[`Mx3dShapeObject`](Mx3dShapeObject.md)

拓扑形状。

___

### Shell

▸ **Shell**(): [`Mx3dShapeShell`](Mx3dShapeShell.md)

获取圆环体的拓扑外壳形状。

#### Returns

[`Mx3dShapeShell`](Mx3dShapeShell.md)

拓扑壳形状。

___

### Solid

▸ **Solid**(): [`Mx3dShapeSolid`](Mx3dShapeSolid.md)

获取圆环体的拓扑实体形状。

#### Returns

[`Mx3dShapeSolid`](Mx3dShapeSolid.md)

拓扑实体形状。
