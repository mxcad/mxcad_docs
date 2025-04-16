[mxcad_3d API 文档](../README.md) / Mx3dShapeDownCast

# Class: Mx3dShapeDownCast

形状对象的向下类型转换接口

## Table of contents

### Constructors

- [constructor](Mx3dShapeDownCast.md#constructor)

### Methods

- [CompSolid](Mx3dShapeDownCast.md#compsolid)
- [Compound](Mx3dShapeDownCast.md#compound)
- [Edge](Mx3dShapeDownCast.md#edge)
- [Face](Mx3dShapeDownCast.md#face)
- [Shell](Mx3dShapeDownCast.md#shell)
- [Solid](Mx3dShapeDownCast.md#solid)
- [Vertex](Mx3dShapeDownCast.md#vertex)
- [Wire](Mx3dShapeDownCast.md#wire)

## Constructors

### constructor

• **new Mx3dShapeDownCast**()

## Methods

### CompSolid

▸ `Static` **CompSolid**(`S`): [`Mx3dShapeCompSolid`](Mx3dShapeCompSolid.md)

将 Mx3dShapeObject 对象转换为 Mx3dShapeCompSolid 对象(Mx3dShapeObject 的实际类型需要是 Mx3dShapeCompSolid)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `S` | [`Mx3dShapeObject`](Mx3dShapeObject.md) | 需要转换的形状对象 |

#### Returns

[`Mx3dShapeCompSolid`](Mx3dShapeCompSolid.md)

转换后的子类形状对象

___

### Compound

▸ `Static` **Compound**(`S`): [`Mx3dShapeCompound`](Mx3dShapeCompound.md)

将 Mx3dShapeObject 对象转换为 Mx3dShapeCompound 对象(Mx3dShapeObject 的实际类型需要是 Mx3dShapeCompound)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `S` | [`Mx3dShapeObject`](Mx3dShapeObject.md) | 需要转换的形状对象 |

#### Returns

[`Mx3dShapeCompound`](Mx3dShapeCompound.md)

转换后的子类形状对象

___

### Edge

▸ `Static` **Edge**(`S`): [`Mx3dShapeEdge`](Mx3dShapeEdge.md)

将 Mx3dShapeObject 对象转换为 Mx3dShapeEdge 对象(Mx3dShapeObject 的实际类型需要是 Mx3dShapeEdge)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `S` | [`Mx3dShapeObject`](Mx3dShapeObject.md) | 需要转换的形状对象 |

#### Returns

[`Mx3dShapeEdge`](Mx3dShapeEdge.md)

转换后的子类形状对象

___

### Face

▸ `Static` **Face**(`S`): [`Mx3dShapeFace`](Mx3dShapeFace.md)

将 Mx3dShapeObject 对象转换为 Mx3dShapeFace 对象(Mx3dShapeObject 的实际类型需要是 Mx3dShapeFace)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `S` | [`Mx3dShapeObject`](Mx3dShapeObject.md) | 需要转换的形状对象 |

#### Returns

[`Mx3dShapeFace`](Mx3dShapeFace.md)

转换后的子类形状对象

___

### Shell

▸ `Static` **Shell**(`S`): [`Mx3dShapeShell`](Mx3dShapeShell.md)

将 Mx3dShapeObject 对象转换为 Mx3dShapeShell 对象(Mx3dShapeObject 的实际类型需要是 Mx3dShapeShell)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `S` | [`Mx3dShapeObject`](Mx3dShapeObject.md) | 需要转换的形状对象 |

#### Returns

[`Mx3dShapeShell`](Mx3dShapeShell.md)

转换后的子类形状对象

___

### Solid

▸ `Static` **Solid**(`S`): [`Mx3dShapeSolid`](Mx3dShapeSolid.md)

将 Mx3dShapeObject 对象转换为 Mx3dShapeSolid 对象(Mx3dShapeObject 的实际类型需要是 Mx3dShapeSolid)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `S` | [`Mx3dShapeObject`](Mx3dShapeObject.md) | 需要转换的形状对象 |

#### Returns

[`Mx3dShapeSolid`](Mx3dShapeSolid.md)

转换后的子类形状对象

___

### Vertex

▸ `Static` **Vertex**(`S`): [`Mx3dShapeVertex`](Mx3dShapeVertex.md)

将 Mx3dShapeObject 对象转换为 Mx3dShapeVertex 对象(Mx3dShapeObject 的实际类型需要是 Mx3dShapeVertex)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `S` | [`Mx3dShapeObject`](Mx3dShapeObject.md) | 需要转换的形状对象 |

#### Returns

[`Mx3dShapeVertex`](Mx3dShapeVertex.md)

转换后的子类形状对象

___

### Wire

▸ `Static` **Wire**(`S`): [`Mx3dShapeWire`](Mx3dShapeWire.md)

将 Mx3dShapeObject 对象转换为 Mx3dShapeWire 对象(Mx3dShapeObject 的实际类型需要是 Mx3dShapeWire)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `S` | [`Mx3dShapeObject`](Mx3dShapeObject.md) | 需要转换的形状对象 |

#### Returns

[`Mx3dShapeWire`](Mx3dShapeWire.md)

转换后的子类形状对象
