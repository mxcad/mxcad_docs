[mxcad_3d API Document](../README. md)/Mx3dMkCylinder

# Class: Mx3dMkCylinder

The class representing the modeling cylinder inherits from Mx3dMkObject

## Hierarchy

- [`Mx3dMkObject`](Mx3dMkObject.md)

  ↳ **`Mx3dMkCylinder`**

## Table of contents

### Constructors

- [constructor](Mx3dMkCylinder.md#constructor)

### Methods

- [Build](Mx3dMkCylinder.md#build)
- [Face](Mx3dMkCylinder.md#face)
- [IsDone](Mx3dMkCylinder.md#isdone)
- [Shape](Mx3dMkCylinder.md#shape)
- [Shell](Mx3dMkCylinder.md#shell)
- [Solid](Mx3dMkCylinder.md#solid)

## Constructors

### constructor

• **new Mx3dMkCylinder**(`Axes`, `R`, `H`, `Angle?`)

Constructor that accepts the coordinate system, radius, height, and optional angle parameters of a cylinder.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Axes | [Mx3dGeCSYSR] (Mx3dGeCSYSR. md) | Coordinate system object|
|R | number | radius|
|H | number | height|
| `Angle?` | ` Number ` | (optional) Angle|

#### Overrides

Mx3dMkObject.constructor

## Methods

### Build

▸ **Build**(): `void`

Execute the modeling algorithm for cylinders.

#### Returns

`void`

___

### Face

▸ **Face**(): [`Mx3dShapeFace`](Mx3dShapeFace.md)

Obtain the topological surface shape of the cylinder.

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

Obtain the topological shape of the cylinder.

#### Returns

[`Mx3dShapeObject`](Mx3dShapeObject.md)

Topological shape.

___

### Shell

▸ **Shell**(): [`Mx3dShapeShell`](Mx3dShapeShell.md)

Obtain the topological shell shape of the cylinder.

#### Returns

[`Mx3dShapeShell`](Mx3dShapeShell.md)

Topological shell shape.

___

### Solid

▸ **Solid**(): [`Mx3dShapeSolid`](Mx3dShapeSolid.md)

Obtain the topological solid shape of the cylinder.

#### Returns

[`Mx3dShapeSolid`](Mx3dShapeSolid.md)

Topological entity shape.
