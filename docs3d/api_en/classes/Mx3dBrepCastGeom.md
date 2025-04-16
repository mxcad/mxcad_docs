[mxcad_3d API Document](../README. md)/Mx3dBrepCastGeom

# Class: Mx3dBrepCastGeom

Interface for converting topology to parametric geometry

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

Convert topological edge Edge to parametric geometric curve

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|E | [Mx3dShapeEdge] (Mx3dShapeEdge. md) | Topological Edge|
|SEParam | [FirstParam: number, LastParam: number] | Returns the starting parameters of the converted curve|

#### Returns

[`Mx3dGeomCurve`](Mx3dGeomCurve.md)

Parameter geometry curve

___

### Surface

▸ `Static` **Surface**(`F`): [`Mx3dGeomSurface`](Mx3dGeomSurface.md)

Convert the topological surface into a parametric geometric surface

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|F | [Mx3dShapeFace] (Mx3dShapeFace. md)|

#### Returns

[`Mx3dGeomSurface`](Mx3dGeomSurface.md)

Parameter Geometric Surface
