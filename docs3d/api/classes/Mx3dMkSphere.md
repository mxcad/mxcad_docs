[mxcad_3d API 文档](../README.md) / Mx3dMkSphere

# Class: Mx3dMkSphere

表示建模球体的类，继承自 Mx3dMkObject

## Hierarchy

- [`Mx3dMkObject`](Mx3dMkObject.md)

  ↳ **`Mx3dMkSphere`**

## Table of contents

### Constructors

- [constructor](Mx3dMkSphere.md#constructor)

### Methods

- [Build](Mx3dMkSphere.md#build)
- [Face](Mx3dMkSphere.md#face)
- [IsDone](Mx3dMkSphere.md#isdone)
- [Shape](Mx3dMkSphere.md#shape)
- [Shell](Mx3dMkSphere.md#shell)
- [Solid](Mx3dMkSphere.md#solid)

## Constructors

### constructor

• **new Mx3dMkSphere**(`Axes`, `R`)

构造函数，接受坐标系对象和球体半径作为参数。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Axes` | [`Mx3dGeCSYSR`](Mx3dGeCSYSR.md) | 坐标系对象。 |
| `R` | `number` | 球体半径。 |

#### Overrides

Mx3dMkObject.constructor

• **new Mx3dMkSphere**(`Axes`, `R`, `angle`)

构造函数，接受坐标系对象、球体半径和一个角度参数。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Axes` | [`Mx3dGeCSYSR`](Mx3dGeCSYSR.md) | 坐标系对象。 |
| `R` | `number` | 球体半径。 |
| `angle` | `number` | 角度参数。 |

#### Overrides

Mx3dMkObject.constructor

• **new Mx3dMkSphere**(`Axes`, `R`, `angle1`, `angle2`)

构造函数，接受坐标系对象、球体半径和两个角度参数。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Axes` | [`Mx3dGeCSYSR`](Mx3dGeCSYSR.md) | 坐标系对象。 |
| `R` | `number` | 球体半径。 |
| `angle1` | `number` | 第一个角度参数。 |
| `angle2` | `number` | 第二个角度参数。 |

#### Overrides

Mx3dMkObject.constructor

• **new Mx3dMkSphere**(`Axes`, `R`, `angle1`, `angle2`, `angle3`)

构造函数，接受坐标系对象、球体半径和三个角度参数。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Axes` | [`Mx3dGeCSYSR`](Mx3dGeCSYSR.md) | 坐标系对象。 |
| `R` | `number` | 球体半径。 |
| `angle1` | `number` | 第一个角度参数。 |
| `angle2` | `number` | 第二个角度参数。 |
| `angle3` | `number` | 第三个角度参数。 |

#### Overrides

Mx3dMkObject.constructor

## Methods

### Build

▸ **Build**(): `void`

执行球体的建模算法。

#### Returns

`void`

___

### Face

▸ **Face**(): [`Mx3dShapeFace`](Mx3dShapeFace.md)

获取球体的拓扑面形状。

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

获取球体的拓扑形状。

#### Returns

[`Mx3dShapeObject`](Mx3dShapeObject.md)

拓扑形状。

___

### Shell

▸ **Shell**(): [`Mx3dShapeShell`](Mx3dShapeShell.md)

获取球体的拓扑外壳形状。

#### Returns

[`Mx3dShapeShell`](Mx3dShapeShell.md)

拓扑壳形状。

___

### Solid

▸ **Solid**(): [`Mx3dShapeSolid`](Mx3dShapeSolid.md)

获取球体的拓扑实体形状。

#### Returns

[`Mx3dShapeSolid`](Mx3dShapeSolid.md)

拓扑实体形状。
