[mxcad_3d API 文档](../README.md) / Mx3dWireTool

# Class: Mx3dWireTool

处理 Wire 的接口

## Table of contents

### Constructors

- [constructor](Mx3dWireTool.md#constructor)

### Methods

- [ConnectEdgesToWires](Mx3dWireTool.md#connectedgestowires)
- [ConnectWiresToWires](Mx3dWireTool.md#connectwirestowires)
- [EdgeToWire](Mx3dWireTool.md#edgetowire)

## Constructors

### constructor

• **new Mx3dWireTool**()

## Methods

### ConnectEdgesToWires

▸ `Static` **ConnectEdgesToWires**(`edges`, `toler?`, `shared?`): [`Mx3dShapeObject`](Mx3dShapeObject.md)[]

将一组边连接成最大长度的线条（线）。连接的标准是边的端点间的距离应小于给定的容差。
该方法将输入的边集合转换为最大长度的线条集合。

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `edges` | [`Mx3dShapeObject`](Mx3dShapeObject.md)[] | `undefined` | 要连接的边对象数组。 |
| `toler` | `number` | `1e-6` | 边连接时的容差值。 |
| `shared` | `boolean` | `false` | 如果为 true，则仅在相邻边共享相同顶点时连接；如果为 false，则在相邻边的端点距离小于容差时连接。 |

#### Returns

[`Mx3dShapeObject`](Mx3dShapeObject.md)[]

一个新的线条对象数组，包含连接后的最大长度的线条。

___

### ConnectWiresToWires

▸ `Static` **ConnectWiresToWires**(`wires`, `toler?`, `shared?`): [`Mx3dShapeObject`](Mx3dShapeObject.md)[]

将一组线条连接成最大长度的线条（线）。连接的标准是线条的端点间的距离应小于给定的容差。
该方法将输入的线条集合转换为最大长度的线条集合。

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `wires` | [`Mx3dShapeObject`](Mx3dShapeObject.md)[] | `undefined` | 要连接的线条对象数组。 |
| `toler` | `number` | `1e-6` | 线条连接时的容差值。 |
| `shared` | `boolean` | `false` | 如果为 true，则仅在相邻线条共享相同顶点时连接；如果为 false，则在相邻线条的端点距离小于容差时连接。 |

#### Returns

[`Mx3dShapeObject`](Mx3dShapeObject.md)[]

一个新的线条对象数组，包含连接后的最大长度的线条。

___

### EdgeToWire

▸ `Static` **EdgeToWire**(`theEdge`): [`Mx3dShapeWire`](Mx3dShapeWire.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theEdge` | [`Mx3dShapeEdge`](Mx3dShapeEdge.md) |

#### Returns

[`Mx3dShapeWire`](Mx3dShapeWire.md)
