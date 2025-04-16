[mxcad_3d API 文档](../README.md) / Mx3dMkWedge

# Class: Mx3dMkWedge

表示建模楔形体的类，继承自 Mx3dMkObject。

## Hierarchy

- [`Mx3dMkObject`](Mx3dMkObject.md)

  ↳ **`Mx3dMkWedge`**

## Table of contents

### Constructors

- [constructor](Mx3dMkWedge.md#constructor)

### Methods

- [Build](Mx3dMkWedge.md#build)
- [IsDone](Mx3dMkWedge.md#isdone)
- [Shape](Mx3dMkWedge.md#shape)
- [Shell](Mx3dMkWedge.md#shell)
- [Solid](Mx3dMkWedge.md#solid)

## Constructors

### constructor

• **new Mx3dMkWedge**(`dx`, `dy`, `dz`, `ltx`)

构造函数，接受三个尺寸参数和一个长度参数来创建楔形体。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dx` | `number` | 楔形体的宽度沿x轴方向的尺寸。 |
| `dy` | `number` | 楔形体的宽度沿y轴方向的尺寸。 |
| `dz` | `number` | 楔形体的高度沿z轴方向的尺寸。 |
| `ltx` | `number` | 楔形体的长度参数。 |

#### Overrides

Mx3dMkObject.constructor

• **new Mx3dMkWedge**(`Axes`, `dx`, `dy`, `dz`, `ltx`)

构造函数，接受坐标系和尺寸参数来创建楔形体。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Axes` | [`Mx3dGeCSYSR`](Mx3dGeCSYSR.md) | 坐标系对象。 |
| `dx` | `number` | 楔形体的宽度沿x轴方向的尺寸。 |
| `dy` | `number` | 楔形体的宽度沿y轴方向的尺寸。 |
| `dz` | `number` | 楔形体的高度沿z轴方向的尺寸。 |
| `ltx` | `number` | 楔形体的长度参数。 |

#### Overrides

Mx3dMkObject.constructor

• **new Mx3dMkWedge**(`dx`, `dy`, `dz`, `xmin`, `zmin`, `xmax`, `zmax`)

构造函数，接受尺寸参数和两个边界值来创建楔形体。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dx` | `number` | 楔形体的宽度沿x轴方向的尺寸。 |
| `dy` | `number` | 楔形体的宽度沿y轴方向的尺寸。 |
| `dz` | `number` | 楔形体的高度沿z轴方向的尺寸。 |
| `xmin` | `number` | 楔形体在x轴方向的最小边界值。 |
| `zmin` | `number` | 楔形体在z轴方向的最小边界值。 |
| `xmax` | `number` | 楔形体在x轴方向的最大边界值。 |
| `zmax` | `number` | 楔形体在z轴方向的最大边界值。 |

#### Overrides

Mx3dMkObject.constructor

• **new Mx3dMkWedge**(`Axes`, `dx`, `dy`, `dz`, `xmin`, `zmin`, `xmax`, `zmax`)

构造函数，接受坐标系、尺寸参数和边界值来创建楔形体。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Axes` | [`Mx3dGeCSYSR`](Mx3dGeCSYSR.md) | 坐标系对象。 |
| `dx` | `number` | 楔形体的宽度沿x轴方向的尺寸。 |
| `dy` | `number` | 楔形体的宽度沿y轴方向的尺寸。 |
| `dz` | `number` | 楔形体的高度沿z轴方向的尺寸。 |
| `xmin` | `number` | 楔形体在x轴方向的最小边界值。 |
| `zmin` | `number` | 楔形体在z轴方向的最小边界值。 |
| `xmax` | `number` | 楔形体在x轴方向的最大边界值。 |
| `zmax` | `number` | 楔形体在z轴方向的最大边界值。 |

#### Overrides

Mx3dMkObject.constructor

## Methods

### Build

▸ **Build**(): `void`

执行楔形体的建模算法。

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

获取楔形体的拓扑形状。

#### Returns

[`Mx3dShapeObject`](Mx3dShapeObject.md)

拓扑形状对象。

___

### Shell

▸ **Shell**(): [`Mx3dShapeShell`](Mx3dShapeShell.md)

获取楔形体的壳体形状。

#### Returns

[`Mx3dShapeShell`](Mx3dShapeShell.md)

壳体形状对象。

___

### Solid

▸ **Solid**(): [`Mx3dShapeSolid`](Mx3dShapeSolid.md)

获取楔形体的实体形状。

#### Returns

[`Mx3dShapeSolid`](Mx3dShapeSolid.md)

实体形状对象。
