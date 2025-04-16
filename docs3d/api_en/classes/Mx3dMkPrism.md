[mxcad_3d API Document](../README. md)/Mx3dMkRisk

# Class: Mx3dMkPrism

The class that represents modeling stretched swept bodies inherits from Mx3dMkObject.

## Hierarchy

- [`Mx3dMkObject`](Mx3dMkObject.md)

  ↳ **`Mx3dMkPrism`**

## Table of contents

### Constructors

- [constructor](Mx3dMkPrism.md#constructor)

### Methods

- [Build](Mx3dMkPrism.md#build)
- [IsDone](Mx3dMkPrism.md#isdone)
- [Shape](Mx3dMkPrism.md#shape)

## Constructors

### constructor

• **new Mx3dMkPrism**(`S`, `V`)

Constructor that accepts a topological shape and a vector to create a stretched swept body.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|S | [Mx3dShapeObject] (Mx3dShapeObject. md) | Topological shape object|
|V | [Mx3dGeVec] (Mx3dGeVec. md) | Stretch direction vector|

#### Overrides

Mx3dMkObject.constructor

• **new Mx3dMkPrism**(`S`, `D`)

Constructor that accepts a topological shape and a direction to create a stretched swept body.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|S | [Mx3dShapeObject] (Mx3dShapeObject. md) | Topological shape object|
|D | [Mx3dGeDir] (Mx3dGeDir. md) | Stretching direction|

#### Overrides

Mx3dMkObject.constructor

## Methods

### Build

▸ **Build**(): `void`

Execute modeling algorithm for stretching swept bodies.

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

Obtain the shape of the stretched swept body.

#### Returns

[`Mx3dShapeObject`](Mx3dShapeObject.md)

Stretch the shape object of the swept body.
