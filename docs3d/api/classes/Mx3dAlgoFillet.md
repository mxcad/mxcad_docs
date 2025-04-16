[mxcad_3d API 文档](../README.md) / Mx3dAlgoFillet

# Class: Mx3dAlgoFillet

倒圆角算法

## Hierarchy

- [`Mx3dAlgoObject`](Mx3dAlgoObject.md)

  ↳ **`Mx3dAlgoFillet`**

## Table of contents

### Constructors

- [constructor](Mx3dAlgoFillet.md#constructor)

### Methods

- [Add](Mx3dAlgoFillet.md#add)
- [Shape](Mx3dAlgoFillet.md#shape)

## Constructors

### constructor

• **new Mx3dAlgoFillet**(`S`, `FShape`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `S` | [`Mx3dShapeObject`](Mx3dShapeObject.md) |
| `FShape` | [`MxCF3dFilletShapeEnum`](../enums/MdGe.MxCF3dFilletShapeEnum.md) |

#### Overrides

Mx3dAlgoObject.constructor

## Methods

### Add

▸ **Add**(`Radius`, `E`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `Radius` | `number` |
| `E` | [`Mx3dShapeEdge`](Mx3dShapeEdge.md) |

#### Returns

`void`

___

### Shape

▸ **Shape**(): [`Mx3dShapeObject`](Mx3dShapeObject.md)

#### Returns

[`Mx3dShapeObject`](Mx3dShapeObject.md)
