[mxcad_3d API documentation](../README. md)/Mx3dMkPipe

# Class: Mx3dMkPipe

The class representing the swept volume of the modeling path inherits from Mx3dMkObject

## Hierarchy

- [`Mx3dMkObject`](Mx3dMkObject.md)

  ↳ **`Mx3dMkPipe`**

## Table of contents

### Constructors

- [constructor](Mx3dMkPipe.md#constructor)

### Methods

- [Build](Mx3dMkPipe.md#build)
- [IsDone](Mx3dMkPipe.md#isdone)
- [Shape](Mx3dMkPipe.md#shape)

## Constructors

### constructor

• **new Mx3dMkPipe**(`Spine`, `Profile`)

Constructor that accepts a path and a cross-sectional shape to create a swept body.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Spine | [Mx3dShapeWire] (Mx3dShapeWire. md) | Path line|
|Profile | [Mx3dShapeObject] (Mx3dShapeObject. md) | Section shape|

#### Overrides

Mx3dMkObject.constructor

• **new Mx3dMkPipe**(`Spine`, `Profile`, `aMode`, `ForceApproxC1`)

Constructor that accepts a path, a cross-sectional shape, a pattern, and a boolean value to create a swept body.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Spine | [Mx3dShapeWire] (Mx3dShapeWire. md) | Path line|
|Profile | [Mx3dShapeObject] (Mx3dShapeObject. md) | Section shape|
|AMode | [MxGFTrihedron] (../enums/MdGe. MxGFTrihedron. md) | mode|
|ForceApproxC1 | boolean | Forces approximation of C1 continuity|

#### Overrides

Mx3dMkObject.constructor

## Methods

### Build

▸ **Build**(): `void`

Execute modeling algorithm for path swept bodies.

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

Obtain the topological shape of the path swept body.

#### Returns

[`Mx3dShapeObject`](Mx3dShapeObject.md)

Topological shape.
