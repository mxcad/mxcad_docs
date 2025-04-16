[mxcad_3d API 文档](../README.md) / Mx3dAlgoChamfer

# Class: Mx3dAlgoChamfer

倒斜角算法

## Hierarchy

- [`Mx3dAlgoObject`](Mx3dAlgoObject.md)

  ↳ **`Mx3dAlgoChamfer`**

## Table of contents

### Constructors

- [constructor](Mx3dAlgoChamfer.md#constructor)

### Methods

- [Add](Mx3dAlgoChamfer.md#add)
- [Shape](Mx3dAlgoChamfer.md#shape)

## Constructors

### constructor

• **new Mx3dAlgoChamfer**(`S`)

构造函数，输入需要倒斜角的对象

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `S` | [`Mx3dShapeObject`](Mx3dShapeObject.md) | 进行倒斜角算法的对象 |

#### Overrides

Mx3dAlgoObject.constructor

## Methods

### Add

▸ **Add**(`Dis`, `E`): `void`

添加对象上需要倒斜角的边

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Dis` | `number` | 倒斜角距离 |
| `E` | [`Mx3dShapeEdge`](Mx3dShapeEdge.md) | 对象上的边 |

#### Returns

`void`

___

### Shape

▸ **Shape**(): [`Mx3dShapeObject`](Mx3dShapeObject.md)

获取倒斜角后的形状对象

#### Returns

[`Mx3dShapeObject`](Mx3dShapeObject.md)

倒斜角后的形状对象
