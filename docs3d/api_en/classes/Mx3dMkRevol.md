[mxcad_3d API Document](../README. md)/Mx3dMkRevol

# Class: Mx3dMkRevol

A class representing the modeling of a rotating body, inherited from Mx3dMkObject

## Hierarchy

- [`Mx3dMkObject`](Mx3dMkObject.md)

  ↳ **`Mx3dMkRevol`**

## Table of contents

### Constructors

- [constructor](Mx3dMkRevol.md#constructor)

### Methods

- [Build](Mx3dMkRevol.md#build)
- [IsDone](Mx3dMkRevol.md#isdone)
- [Shape](Mx3dMkRevol.md#shape)

## Constructors

### constructor

• **new Mx3dMkRevol**(`S`, `A`, `D?`)

Constructor that accepts a shape object, rotation axis, and optional rotation angle parameter.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|S | [Mx3dShapeObject] (Mx3dShapeObject. md) | Shape object|
|A | [Mx3dGeAxis] (Mx3dGeAxis. md) | Rotation axis|
| `D?` | ` Number ` | (optional) Rotation angle|

#### Overrides

Mx3dMkObject.constructor

## Methods

### Build

▸ **Build**(): `void`

Execute modeling algorithms for rotating bodies.

#### Returns

`void`

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

Obtain the topological shape of the rotating body.

#### Returns

[`Mx3dShapeObject`](Mx3dShapeObject.md)

Topological shape.
