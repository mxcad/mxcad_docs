[mxcad_3d API 文档](../README.md) / Mx3dMkPipe

# Class: Mx3dMkPipe

表示建模路径扫掠体的类，继承自 Mx3dMkObject

## Hierarchy

- [`Mx3dMkObject`](Mx3dMkObject.md)

  ↳ **`Mx3dMkPipe`**

## Table of contents

### Constructors

- [constructor](Mx3dMkPipe.md#constructor)

### Methods

- [Build](Mx3dMkPipe.md#build)
- [IsDone](Mx3dMkPipe.md#isdone)
- [Shape](Mx3dMkPipe.md#shape)

## Constructors

### constructor

• **new Mx3dMkPipe**(`Spine`, `Profile`)

构造函数，接受一条路径和一个截面形状来创建扫掠体。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Spine` | [`Mx3dShapeWire`](Mx3dShapeWire.md) | 路径线。 |
| `Profile` | [`Mx3dShapeObject`](Mx3dShapeObject.md) | 截面形状。 |

#### Overrides

Mx3dMkObject.constructor

• **new Mx3dMkPipe**(`Spine`, `Profile`, `aMode`, `ForceApproxC1`)

构造函数，接受一条路径、一个截面形状、一个模式和一个布尔值来创建扫掠体。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Spine` | [`Mx3dShapeWire`](Mx3dShapeWire.md) | 路径线。 |
| `Profile` | [`Mx3dShapeObject`](Mx3dShapeObject.md) | 截面形状。 |
| `aMode` | [`MxGFTrihedron`](../enums/MdGe.MxGFTrihedron.md) | 模式。 |
| `ForceApproxC1` | `boolean` | 强制近似C1连续性。 |

#### Overrides

Mx3dMkObject.constructor

## Methods

### Build

▸ **Build**(): `void`

执行路径扫掠体的建模算法。

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

获取路径扫掠体的拓扑形状。

#### Returns

[`Mx3dShapeObject`](Mx3dShapeObject.md)

拓扑形状。
