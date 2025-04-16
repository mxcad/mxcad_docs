[mxcad_3d API 文档](../README.md) / Mx3dBrepCastGeom

# Class: Mx3dBrepCastGeom

拓扑转换为参数几何的接口

## Table of contents

### Constructors

- [constructor](Mx3dBrepCastGeom.md#constructor)

### Methods

- [Curve](Mx3dBrepCastGeom.md#curve)
- [Surface](Mx3dBrepCastGeom.md#surface)

## Constructors

### constructor

• **new Mx3dBrepCastGeom**()

## Methods

### Curve

▸ `Static` **Curve**(`E`, `SEParam`): [`Mx3dGeomCurve`](Mx3dGeomCurve.md)

将拓扑边Edge转换为参数几何曲线

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `E` | [`Mx3dShapeEdge`](Mx3dShapeEdge.md) | 拓扑Edge |
| `SEParam` | [FirstParam: number, LastParam: number] | 返回转换后曲线的起始参数 |

#### Returns

[`Mx3dGeomCurve`](Mx3dGeomCurve.md)

参数几何曲线

___

### Surface

▸ `Static` **Surface**(`F`): [`Mx3dGeomSurface`](Mx3dGeomSurface.md)

将拓扑面转换为参数几何曲面

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `F` | [`Mx3dShapeFace`](Mx3dShapeFace.md) | 拓扑面 |

#### Returns

[`Mx3dGeomSurface`](Mx3dGeomSurface.md)

参数几何曲面
