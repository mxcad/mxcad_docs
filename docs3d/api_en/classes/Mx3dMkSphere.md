[mxcad_3d API Document](../README. md)/Mx3dMkSphere

# Class: Mx3dMkSphere

The class representing the modeled sphere inherits from Mx3dMkObject

## Hierarchy

- [`Mx3dMkObject`](Mx3dMkObject.md)

  ↳ **`Mx3dMkSphere`**

## Table of contents

### Constructors

- [constructor](Mx3dMkSphere.md#constructor)

### Methods

- [Build](Mx3dMkSphere.md#build)
- [Face](Mx3dMkSphere.md#face)
- [IsDone](Mx3dMkSphere.md#isdone)
- [Shape](Mx3dMkSphere.md#shape)
- [Shell](Mx3dMkSphere.md#shell)
- [Solid](Mx3dMkSphere.md#solid)

## Constructors

### constructor

• **new Mx3dMkSphere**(`Axes`, `R`)

Constructor that accepts coordinate system objects and sphere radius as parameters.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Axes | [Mx3dGeCSYSR] (Mx3dGeCSYSR. md) | Coordinate system object|
|R | number | radius of the sphere|

#### Overrides

Mx3dMkObject.constructor

• **new Mx3dMkSphere**(`Axes`, `R`, `angle`)

Constructor that accepts coordinate system objects, sphere radius, and an angle parameter.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Axes | [Mx3dGeCSYSR] (Mx3dGeCSYSR. md) | Coordinate system object|
|R | number | radius of the sphere|
|Angle | number | angle parameter|

#### Overrides

Mx3dMkObject.constructor

• **new Mx3dMkSphere**(`Axes`, `R`, `angle1`, `angle2`)

Constructor that accepts coordinate system objects, sphere radius, and two angle parameters.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Axes | [Mx3dGeCSYSR] (Mx3dGeCSYSR. md) | Coordinate system object|
|R | number | radius of the sphere|
|Angle1 | Number | The first angle parameter|
|Angle2 | Number | Second angle parameter|

#### Overrides

Mx3dMkObject.constructor

• **new Mx3dMkSphere**(`Axes`, `R`, `angle1`, `angle2`, `angle3`)

Constructor that accepts coordinate system objects, sphere radius, and three angle parameters.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Axes | [Mx3dGeCSYSR] (Mx3dGeCSYSR. md) | Coordinate system object|
|R | number | radius of the sphere|
|Angle1 | Number | The first angle parameter|
|Angle2 | Number | Second angle parameter|
|Angle3 | Number | The third angle parameter|

#### Overrides

Mx3dMkObject.constructor

## Methods

### Build

▸ **Build**(): `void`

Execute the modeling algorithm for the sphere.

#### Returns

`void`

___

### Face

▸ **Face**(): [`Mx3dShapeFace`](Mx3dShapeFace.md)

Obtain the topological surface shape of the sphere.

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

Obtain the topological shape of the sphere.

#### Returns

[`Mx3dShapeObject`](Mx3dShapeObject.md)

Topological shape.

___

### Shell

▸ **Shell**(): [`Mx3dShapeShell`](Mx3dShapeShell.md)

Obtain the topological shell shape of the sphere.

#### Returns

[`Mx3dShapeShell`](Mx3dShapeShell.md)

Topological shell shape.

___

### Solid

▸ **Solid**(): [`Mx3dShapeSolid`](Mx3dShapeSolid.md)

Obtain the topological entity shape of the sphere.

#### Returns

[`Mx3dShapeSolid`](Mx3dShapeSolid.md)

Topological entity shape.
