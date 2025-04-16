[mxcad_3d API 文档](../README.md) / Mx3dGePoint

# Class: Mx3dGePoint

表示三维空间中的一个点。

提供构造函数以及获取和设置点的坐标的方法。

## Hierarchy

- [`Mx3dGeObject`](Mx3dGeObject.md)

  ↳ **`Mx3dGePoint`**

## Table of contents

### Constructors

- [constructor](Mx3dGePoint.md#constructor)

### Methods

- [Vertex](Mx3dGePoint.md#vertex)
- [X](Mx3dGePoint.md#x)
- [Y](Mx3dGePoint.md#y)
- [Z](Mx3dGePoint.md#z)
- [setX](Mx3dGePoint.md#setx)
- [setXYZ](Mx3dGePoint.md#setxyz)
- [setY](Mx3dGePoint.md#sety)
- [setZ](Mx3dGePoint.md#setz)

## Constructors

### constructor

• **new Mx3dGePoint**()

默认构造一个位于原点 (0, 0, 0) 的点。

#### Overrides

Mx3dGeObject.constructor

• **new Mx3dGePoint**(`theXYZ`)

使用给定的坐标数组构造一个点。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theXYZ` | `Vector` | 包含X, Y, Z坐标值的数组。 |

#### Overrides

Mx3dGeObject.constructor

• **new Mx3dGePoint**(`theX`, `theY`, `theZ`)

使用给定的X, Y, Z坐标值构造一个点。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theX` | `number` | X坐标值。 |
| `theY` | `number` | Y坐标值。 |
| `theZ` | `number` | Z坐标值。 |

#### Overrides

Mx3dGeObject.constructor

## Methods

### Vertex

▸ **Vertex**(): [`Mx3dShapeVertex`](Mx3dShapeVertex.md)

获取当前点的拓扑点形状

#### Returns

[`Mx3dShapeVertex`](Mx3dShapeVertex.md)

拓扑点形状

___

### X

▸ **X**(): `number`

获取点在世界坐标系下的X坐标值

#### Returns

`number`

X坐标值

___

### Y

▸ **Y**(): `number`

获取点在世界坐标系下的Y坐标值

#### Returns

`number`

Y坐标值

___

### Z

▸ **Z**(): `number`

获取点在世界坐标系下的Z坐标值

#### Returns

`number`

Z坐标值

___

### setX

▸ **setX**(`theX`): `void`

设置点在世界坐标系下的X坐标值

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theX` | `number` | X坐标值 |

#### Returns

`void`

___

### setXYZ

▸ **setXYZ**(`theX`, `theY`, `theZ`): `void`

设置点在世界坐标系下的X,Y,Z坐标值

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theX` | `number` | X坐标值 |
| `theY` | `number` | Y坐标值 |
| `theZ` | `number` | Z坐标值 |

#### Returns

`void`

___

### setY

▸ **setY**(`theY`): `void`

设置点在世界坐标系下的Y坐标值

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theY` | `number` | Y坐标值 |

#### Returns

`void`

___

### setZ

▸ **setZ**(`theZ`): `void`

设置点在世界坐标系下的Z坐标值

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theZ` | `number` | Z坐标值 |

#### Returns

`void`
