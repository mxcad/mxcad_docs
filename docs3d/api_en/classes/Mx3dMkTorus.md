[mxcad_3d API Document](../README. md)/Mx3dMkTorus

# Class: Mx3dMkTorus

The class representing the modeling of a circular ring inherits from Mx3dMkObject

## Hierarchy

- [`Mx3dMkObject`](Mx3dMkObject.md)

  ↳ **`Mx3dMkTorus`**

## Table of contents

### Constructors

- [constructor](Mx3dMkTorus.md#constructor)

### Methods

- [Build](Mx3dMkTorus.md#build)
- [Face](Mx3dMkTorus.md#face)
- [IsDone](Mx3dMkTorus.md#isdone)
- [Shape](Mx3dMkTorus.md#shape)
- [Shell](Mx3dMkTorus.md#shell)
- [Solid](Mx3dMkTorus.md#solid)

## Constructors

### constructor

• **new Mx3dMkTorus**(`Axes`, `R1`, `R2`)

Constructor that accepts coordinate system objects, primary and secondary radii of the torus as parameters.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Axes | [Mx3dGeCSYSR] (Mx3dGeCSYSR. md) | Coordinate system object|
|R1 | number | principal radius of the circular ring|
|R2 | number | sub radius of the circular ring|

#### Overrides

Mx3dMkObject.constructor

• **new Mx3dMkTorus**(`Axes`, `R1`, `R2`, `angle`)

Constructor that accepts coordinate system objects, primary and secondary radii of a torus, and an angle parameter.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Axes | [Mx3dGeCSYSR] (Mx3dGeCSYSR. md) | Coordinate system object|
|R1 | number | principal radius of the circular ring|
|R2 | number | sub radius of the circular ring|
|Angle | number | angle parameter|

#### Overrides

Mx3dMkObject.constructor

• **new Mx3dMkTorus**(`Axes`, `R1`, `R2`, `angle1`, `angle2`)

Constructor, accepting coordinate system objects, primary radius, secondary radius, and two angle parameters of the torus.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Axes | [Mx3dGeCSYSR] (Mx3dGeCSYSR. md) | Coordinate system object|
|R1 | number | principal radius of the circular ring|
|R2 | number | sub radius of the circular ring|
|Angle1 | Number | The first angle parameter|
|Angle2 | Number | Second angle parameter|

#### Overrides

Mx3dMkObject.constructor

• **new Mx3dMkTorus**(`Axes`, `R1`, `R2`, `angle1`, `angle2`, `angle`)

Constructor that accepts coordinate system objects, primary radius, secondary radius, and three angle parameters for a torus.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Axes | [Mx3dGeCSYSR] (Mx3dGeCSYSR. md) | Coordinate system object|
|R1 | number | principal radius of the circular ring|
|R2 | number | sub radius of the circular ring|
|Angle1 | Number | The first angle parameter|
|Angle2 | Number | Second angle parameter|
| `angle` | `number` | - |

#### Overrides

Mx3dMkObject.constructor

## Methods

### Build

▸ **Build**(): `void`

Execute modeling algorithms for circular bodies.

#### Returns

`void`

___

### Face

▸ **Face**(): [`Mx3dShapeFace`](Mx3dShapeFace.md)

Obtain the topological surface shape of the torus.

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

Obtain the topological shape of the torus.

#### Returns

[`Mx3dShapeObject`](Mx3dShapeObject.md)

Topological shape.

___

### Shell

▸ **Shell**(): [`Mx3dShapeShell`](Mx3dShapeShell.md)

Obtain the topological shell shape of the torus.

#### Returns

[`Mx3dShapeShell`](Mx3dShapeShell.md)

Topological shell shape.

___

### Solid

▸ **Solid**(): [`Mx3dShapeSolid`](Mx3dShapeSolid.md)

Obtain the topological solid shape of the torus.

#### Returns

[`Mx3dShapeSolid`](Mx3dShapeSolid.md)

Topological entity shape.
