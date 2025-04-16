[mxcad_3d API 文档](../README.md) / Mx3dMkPolygon

# Class: Mx3dMkPolygon

表示建模多段线的类，继承自 Mx3dMkObject。

## Hierarchy

- [`Mx3dMkObject`](Mx3dMkObject.md)

  ↳ **`Mx3dMkPolygon`**

## Table of contents

### Constructors

- [constructor](Mx3dMkPolygon.md#constructor)

### Methods

- [Add](Mx3dMkPolygon.md#add)
- [Added](Mx3dMkPolygon.md#added)
- [Build](Mx3dMkPolygon.md#build)
- [Close](Mx3dMkPolygon.md#close)
- [Edge](Mx3dMkPolygon.md#edge)
- [FirstVertex](Mx3dMkPolygon.md#firstvertex)
- [IsDone](Mx3dMkPolygon.md#isdone)
- [LastVertex](Mx3dMkPolygon.md#lastvertex)
- [Shape](Mx3dMkPolygon.md#shape)
- [Wire](Mx3dMkPolygon.md#wire)

## Constructors

### constructor

• **new Mx3dMkPolygon**()

构造函数，初始化多段线对象。

#### Overrides

Mx3dMkObject.constructor

## Methods

### Add

▸ **Add**(`P`): `void`

添加一个顶点到多段线。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `P` | [`Mx3dGePoint`](Mx3dGePoint.md) | 要添加的点对象。 |

#### Returns

`void`

___

### Added

▸ **Added**(): `boolean`

检查最后添加的顶点是否与前一个顶点重合。

#### Returns

`boolean`

如果最后一个添加的顶点与前一个顶点不重合，则返回 true；否则返回 false。

___

### Build

▸ **Build**(): `void`

执行多段线的建模算法。

#### Returns

`void`

___

### Close

▸ **Close**(): `void`

闭合多段线，形成一个闭合的图形。

#### Returns

`void`

___

### Edge

▸ **Edge**(): [`Mx3dShapeEdge`](Mx3dShapeEdge.md)

获取多段线的Edge对象。

#### Returns

[`Mx3dShapeEdge`](Mx3dShapeEdge.md)

多段线的Edge对象。

___

### FirstVertex

▸ **FirstVertex**(): [`Mx3dShapeVertex`](Mx3dShapeVertex.md)

获取多段线的第一个顶点。

#### Returns

[`Mx3dShapeVertex`](Mx3dShapeVertex.md)

第一个顶点对象。

___

### IsDone

▸ **IsDone**(): `boolean`

检查建模算法是否执行完成。

#### Returns

`boolean`

建模算法执行是否完成的标志，true 完成，false 失败。

___

### LastVertex

▸ **LastVertex**(): [`Mx3dShapeVertex`](Mx3dShapeVertex.md)

获取多段线的最后一个顶点。

#### Returns

[`Mx3dShapeVertex`](Mx3dShapeVertex.md)

最后一个顶点对象。

___

### Shape

▸ **Shape**(): [`Mx3dShapeObject`](Mx3dShapeObject.md)

获取多段线的形状。

#### Returns

[`Mx3dShapeObject`](Mx3dShapeObject.md)

多段线的形状对象。

___

### Wire

▸ **Wire**(): [`Mx3dShapeWire`](Mx3dShapeWire.md)

获取多段线的Wire对象。

#### Returns

[`Mx3dShapeWire`](Mx3dShapeWire.md)

多段线的Wire对象。
