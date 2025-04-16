[mxcad_3d API Document](../README. md)/Mx3dMkCone

# Class: Mx3dMkCone

The class representing the modeling cone inherits from Mx3dMkObject

## Hierarchy

- [`Mx3dMkObject`](Mx3dMkObject.md)

  ↳ **`Mx3dMkCone`**

## Table of contents

### Constructors

- [constructor](Mx3dMkCone.md#constructor)

### Methods

- [Build](Mx3dMkCone.md#build)
- [Face](Mx3dMkCone.md#face)
- [IsDone](Mx3dMkCone.md#isdone)
- [Shape](Mx3dMkCone.md#shape)
- [Shell](Mx3dMkCone.md#shell)
- [Solid](Mx3dMkCone.md#solid)

## Constructors

### constructor

• **new Mx3dMkCone**(`Axes`, `R1`, `R2`, `H`, `angle?`)

Constructor that accepts the coordinate system, base radius, top radius, height, and optional angle parameters of a cone.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Axes | [Mx3dGeCSYSR] (Mx3dGeCSYSR. md) | Coordinate system object|
|R1 | number | Base radius|
|R2 | number | top radius|
|H | number | height|
| `angle?` | ` Number ` | (optional) Angle|

#### Overrides

Mx3dMkObject.constructor

## Methods

### Build

▸ **Build**(): `void`

Execute the modeling algorithm for cones.

#### Returns

`void`

___

### Face

▸ **Face**(): [`Mx3dShapeFace`](Mx3dShapeFace.md)

Obtain the topological surface shape of the cone.

#### Returns

[`Mx3dShapeFace`](Mx3dShapeFace.md)

Tuopu surface shape.

___

### IsDone

▸ **IsDone**(): `boolean`

Check if the modeling algorithm has been executed successfully.

#### Returns

`boolean`

The flag indicating whether the modeling algorithm execution has been completed, with true indicating completion and false indicating failure.

___

### Shape

▸ **Shape**(): [`Mx3dShapeObject`](Mx3dShapeObject.md)

Obtain the topological shape of the cone.

#### Returns

[`Mx3dShapeObject`](Mx3dShapeObject.md)

Topological shape.

___

### Shell

▸ **Shell**(): [`Mx3dShapeShell`](Mx3dShapeShell.md)

Obtain the topological shell shape of the cone.

#### Returns

[`Mx3dShapeShell`](Mx3dShapeShell.md)

Topological shell shape.

___

### Solid

▸ **Solid**(): [`Mx3dShapeSolid`](Mx3dShapeSolid.md)

Obtain the topological solid shape of the cone.

#### Returns

[`Mx3dShapeSolid`](Mx3dShapeSolid.md)

Topological entity shape.
