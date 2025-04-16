[mxcad_3d API Document](../README. md)/Mx3dMkEdge

# Class: Mx3dMkWedge

The class representing the modeling wedge is inherited from Mx3dMkObject.

## Hierarchy

- [`Mx3dMkObject`](Mx3dMkObject.md)

  ↳ **`Mx3dMkWedge`**

## Table of contents

### Constructors

- [constructor](Mx3dMkWedge.md#constructor)

### Methods

- [Build](Mx3dMkWedge.md#build)
- [IsDone](Mx3dMkWedge.md#isdone)
- [Shape](Mx3dMkWedge.md#shape)
- [Shell](Mx3dMkWedge.md#shell)
- [Solid](Mx3dMkWedge.md#solid)

## Constructors

### constructor

• **new Mx3dMkWedge**(`dx`, `dy`, `dz`, `ltx`)

Constructor that accepts three size parameters and one length parameter to create a wedge shape.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|The width of a wedge-shaped object along the x-axis|
|The width of the wedge-shaped object along the y-axis direction|
|The height dimension of the wedge-shaped object along the z-axis|
|Ltx | number | The length parameter of the wedge|

#### Overrides

Mx3dMkObject.constructor

• **new Mx3dMkWedge**(`Axes`, `dx`, `dy`, `dz`, `ltx`)

Constructor, accepts coordinate system and dimension parameters to create a wedge shape.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Axes | [Mx3dGeCSYSR] (Mx3dGeCSYSR. md) | Coordinate system object|
|The width of a wedge-shaped object along the x-axis|
|The width of the wedge-shaped object along the y-axis direction|
|The height dimension of the wedge-shaped object along the z-axis|
|Ltx | number | The length parameter of the wedge|

#### Overrides

Mx3dMkObject.constructor

• **new Mx3dMkWedge**(`dx`, `dy`, `dz`, `xmin`, `zmin`, `xmax`, `zmax`)

Constructor that accepts size parameters and two boundary values to create a wedge shape.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|The width of a wedge-shaped object along the x-axis|
|The width of the wedge-shaped object along the y-axis direction|
|The height dimension of the wedge-shaped object along the z-axis|
|Xmin | number | The minimum boundary value of a wedge in the x-axis direction|
|Zmin | number | The minimum boundary value of a wedge in the z-axis direction|
|Xmax | number | The maximum boundary value of a wedge in the x-axis direction|
|Zmax | number | The maximum boundary value of a wedge in the z-axis direction|

#### Overrides

Mx3dMkObject.constructor

• **new Mx3dMkWedge**(`Axes`, `dx`, `dy`, `dz`, `xmin`, `zmin`, `xmax`, `zmax`)

Constructor that accepts coordinate system, dimension parameters, and boundary values to create a wedge shape.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Axes | [Mx3dGeCSYSR] (Mx3dGeCSYSR. md) | Coordinate system object|
|The width of a wedge-shaped object along the x-axis|
|The width of the wedge-shaped object along the y-axis direction|
|The height dimension of the wedge-shaped object along the z-axis|
|Xmin | number | The minimum boundary value of a wedge in the x-axis direction|
|Zmin | number | The minimum boundary value of a wedge in the z-axis direction|
|Xmax | number | The maximum boundary value of a wedge in the x-axis direction|
|Zmax | number | The maximum boundary value of a wedge in the z-axis direction|

#### Overrides

Mx3dMkObject.constructor

## Methods

### Build

▸ **Build**(): `void`

Implement the modeling algorithm for wedge-shaped bodies.

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

Obtain the topological shape of the wedge.

#### Returns

[`Mx3dShapeObject`](Mx3dShapeObject.md)

Topological shape object.

___

### Shell

▸ **Shell**(): [`Mx3dShapeShell`](Mx3dShapeShell.md)

Obtain the shell shape of the wedge-shaped object.

#### Returns

[`Mx3dShapeShell`](Mx3dShapeShell.md)

Shell shaped object.

___

### Solid

▸ **Solid**(): [`Mx3dShapeSolid`](Mx3dShapeSolid.md)

Obtain the solid shape of the wedge.

#### Returns

[`Mx3dShapeSolid`](Mx3dShapeSolid.md)

Solid shaped object.
