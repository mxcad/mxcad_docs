[mxcad_3d API 文档](../README.md) / Mx3dAlgoFillet2d

# Class: Mx3dAlgoFillet2d

二维倒圆角算法

## Hierarchy

- [`Mx3dAlgoObject`](Mx3dAlgoObject.md)

  ↳ **`Mx3dAlgoFillet2d`**

## Table of contents

### Constructors

- [constructor](Mx3dAlgoFillet2d.md#constructor)

### Methods

- [Init](Mx3dAlgoFillet2d.md#init)
- [NbResults](Mx3dAlgoFillet2d.md#nbresults)
- [Perform](Mx3dAlgoFillet2d.md#perform)
- [Result](Mx3dAlgoFillet2d.md#result)

## Constructors

### constructor

• **new Mx3dAlgoFillet2d**()

默认构造函数

#### Overrides

Mx3dAlgoObject.constructor

• **new Mx3dAlgoFillet2d**(`theWire`, `thePlane`)

构造函数，传入Wire和Wire所在平面

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theWire` | [`Mx3dShapeWire`](Mx3dShapeWire.md) | 要倒圆角的Wire |
| `thePlane` | [`Mx3dGePlane`](Mx3dGePlane.md) | Wire所在平面 |

#### Overrides

Mx3dAlgoObject.constructor

• **new Mx3dAlgoFillet2d**(`theEdge1`, `theEdge2`, `thePlane`)

构造函数，传入两条位于同一平面Edge，和所在平面

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theEdge1` | [`Mx3dShapeEdge`](Mx3dShapeEdge.md) | 第一条Edge |
| `theEdge2` | [`Mx3dShapeEdge`](Mx3dShapeEdge.md) | 第二条Edge |
| `thePlane` | [`Mx3dGePlane`](Mx3dGePlane.md) | 所在平面 |

#### Overrides

Mx3dAlgoObject.constructor

## Methods

### Init

▸ **Init**(`theWire`, `thePlane`): `void`

初始化函数，传入Wire和Wire所在平面

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theWire` | [`Mx3dShapeWire`](Mx3dShapeWire.md) | 要倒圆角的Wire |
| `thePlane` | [`Mx3dGePlane`](Mx3dGePlane.md) | Wire所在平面 |

#### Returns

`void`

▸ **Init**(`theEdge1`, `theEdge2`, `thePlane`): `void`

初始化函数，传入两条位于同一平面Edge，和所在平面

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theEdge1` | [`Mx3dShapeEdge`](Mx3dShapeEdge.md) | 第一条Edge |
| `theEdge2` | [`Mx3dShapeEdge`](Mx3dShapeEdge.md) | 第二条Edge |
| `thePlane` | [`Mx3dGePlane`](Mx3dGePlane.md) | 所在平面 |

#### Returns

`void`

___

### NbResults

▸ **NbResults**(`thePoint`): `number`

获取圆角执行结果的数量

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `thePoint` | [`Mx3dGePoint`](Mx3dGePoint.md) | 计算圆角处的点 |

#### Returns

`number`

圆角执行结果的数量

___

### Perform

▸ **Perform**(`theRadius`): `boolean`

执行圆角算法

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theRadius` | `number` | 圆角的半径 |

#### Returns

`boolean`

算法是否执行成功

___

### Result

▸ **Result**(`thePoint`, `theEdge1`, `theEdge2`, `iSolution?`): [`Mx3dShapeEdge`](Mx3dShapeEdge.md)

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `thePoint` | [`Mx3dGePoint`](Mx3dGePoint.md) | `undefined` | 设置要获取位于原曲线位于哪个交点的结果 |
| `theEdge1` | [`Mx3dShapeEdge`](Mx3dShapeEdge.md) | `undefined` | 返回的第一条Edge |
| `theEdge2` | [`Mx3dShapeEdge`](Mx3dShapeEdge.md) | `undefined` | 返回的第二条Edge |
| `iSolution` | `number` | `-1` | 默认-1，获取最靠近thePoint的结果 |

#### Returns

[`Mx3dShapeEdge`](Mx3dShapeEdge.md)
