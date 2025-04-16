[mxcad_3d API 文档](../README.md) / Mx3dMkRevol

# Class: Mx3dMkRevol

表示旋转体建模的类，继承自 Mx3dMkObject

## Hierarchy

- [`Mx3dMkObject`](Mx3dMkObject.md)

  ↳ **`Mx3dMkRevol`**

## Table of contents

### Constructors

- [constructor](Mx3dMkRevol.md#constructor)

### Methods

- [Build](Mx3dMkRevol.md#build)
- [IsDone](Mx3dMkRevol.md#isdone)
- [Shape](Mx3dMkRevol.md#shape)

## Constructors

### constructor

• **new Mx3dMkRevol**(`S`, `A`, `D?`)

构造函数，接受一个形状对象、旋转轴和可选的旋转角度参数。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `S` | [`Mx3dShapeObject`](Mx3dShapeObject.md) | 形状对象。 |
| `A` | [`Mx3dGeAxis`](Mx3dGeAxis.md) | 旋转轴。 |
| `D?` | `number` | （可选）旋转角度。 |

#### Overrides

Mx3dMkObject.constructor

## Methods

### Build

▸ **Build**(): `void`

执行旋转体的建模算法。

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

获取旋转体的拓扑形状。

#### Returns

[`Mx3dShapeObject`](Mx3dShapeObject.md)

拓扑形状。
