[mxcad_3d API 文档](../README.md) / Mx3dMkBox

# Class: Mx3dMkBox

表示建模长方体的类，继承自 Mx3dMkObject

## Hierarchy

- [`Mx3dMkObject`](Mx3dMkObject.md)

  ↳ **`Mx3dMkBox`**

## Table of contents

### Constructors

- [constructor](Mx3dMkBox.md#constructor)

### Methods

- [BackFace](Mx3dMkBox.md#backface)
- [BottomFace](Mx3dMkBox.md#bottomface)
- [Build](Mx3dMkBox.md#build)
- [FrontFace](Mx3dMkBox.md#frontface)
- [IsDone](Mx3dMkBox.md#isdone)
- [LeftFace](Mx3dMkBox.md#leftface)
- [RightFace](Mx3dMkBox.md#rightface)
- [Shape](Mx3dMkBox.md#shape)
- [Shell](Mx3dMkBox.md#shell)
- [Solid](Mx3dMkBox.md#solid)
- [TopFace](Mx3dMkBox.md#topface)

## Constructors

### constructor

• **new Mx3dMkBox**(`thePnt1`, `thePnt2`)

构造函数，接受长方体的两个对角点作为参数。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `thePnt1` | `UniPoint` | 第一个对角点。 |
| `thePnt2` | `UniPoint` | 第二个对角点。 |

#### Overrides

Mx3dMkObject.constructor

• **new Mx3dMkBox**(`theDX`, `theDY`, `theDZ`)

构造函数，以世界坐标系的(0, 0, 0)点作为第一个角点，接受三个数值(theDX, theDY, theDZ)作为第二个角点参数。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theDX` | `number` | 第二个角点X方向分量。 |
| `theDY` | `number` | 第二个角点Y方向分量。 |
| `theDZ` | `number` | 第二个角点Z方向分量。 |

#### Overrides

Mx3dMkObject.constructor

• **new Mx3dMkBox**(`theAxes`, `theDX`, `theDY`, `theDZ`)

构造函数，以 theAxes 坐标系的(0, 0, 0)点作为第一个角点，接受三个数值(theDX, theDY, theDZ)作为第二个角点参数。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theAxes` | [`Mx3dGeCSYSR`](Mx3dGeCSYSR.md) | 坐标系对象。 |
| `theDX` | `number` | 第二个角点X方向分量。 |
| `theDY` | `number` | 第二个角点Y方向分量。 |
| `theDZ` | `number` | 第二个角点Z方向分量。 |

#### Overrides

Mx3dMkObject.constructor

## Methods

### BackFace

▸ **BackFace**(): [`Mx3dShapeFace`](Mx3dShapeFace.md)

获取长方体的背面拓扑面形状。

#### Returns

[`Mx3dShapeFace`](Mx3dShapeFace.md)

拓扑面形状。

___

### BottomFace

▸ **BottomFace**(): [`Mx3dShapeFace`](Mx3dShapeFace.md)

获取长方体的底面拓扑面形状。

#### Returns

[`Mx3dShapeFace`](Mx3dShapeFace.md)

拓扑面形状。

___

### Build

▸ **Build**(): `void`

执行长方体的建模算法。

#### Returns

`void`

___

### FrontFace

▸ **FrontFace**(): [`Mx3dShapeFace`](Mx3dShapeFace.md)

获取长方体的前面拓扑面形状。

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

### LeftFace

▸ **LeftFace**(): [`Mx3dShapeFace`](Mx3dShapeFace.md)

获取长方体的左面拓扑面形状。

#### Returns

[`Mx3dShapeFace`](Mx3dShapeFace.md)

拓扑面形状。

___

### RightFace

▸ **RightFace**(): [`Mx3dShapeFace`](Mx3dShapeFace.md)

获取长方体的右面拓扑面形状。

#### Returns

[`Mx3dShapeFace`](Mx3dShapeFace.md)

拓扑面形状。

___

### Shape

▸ **Shape**(): [`Mx3dShapeObject`](Mx3dShapeObject.md)

获取长方体的拓扑形状。

#### Returns

[`Mx3dShapeObject`](Mx3dShapeObject.md)

拓扑形状。

___

### Shell

▸ **Shell**(): [`Mx3dShapeShell`](Mx3dShapeShell.md)

获取长方体的拓扑外壳形状。

#### Returns

[`Mx3dShapeShell`](Mx3dShapeShell.md)

拓扑壳形状。

___

### Solid

▸ **Solid**(): [`Mx3dShapeSolid`](Mx3dShapeSolid.md)

获取长方体的拓扑实体形状。

#### Returns

[`Mx3dShapeSolid`](Mx3dShapeSolid.md)

拓扑实体形状。

___

### TopFace

▸ **TopFace**(): [`Mx3dShapeFace`](Mx3dShapeFace.md)

获取长方体的顶面拓扑面形状。

#### Returns

[`Mx3dShapeFace`](Mx3dShapeFace.md)

拓扑面形状。
