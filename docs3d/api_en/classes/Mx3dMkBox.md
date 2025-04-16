[mxcad_3d API Document](../README. md)/Mx3dMkBox

# Class: Mx3dMkBox

The class that represents the modeling rectangular prism inherits from Mx3dMkObject

## Hierarchy

- [`Mx3dMkObject`](Mx3dMkObject.md)

  ↳ **`Mx3dMkBox`**

## Table of contents

### Constructors

- [constructor](Mx3dMkBox.md#constructor)

### Methods

- [BackFace](Mx3dMkBox.md#backface)
- [BottomFace](Mx3dMkBox.md#bottomface)
- [Build](Mx3dMkBox.md#build)
- [FrontFace](Mx3dMkBox.md#frontface)
- [IsDone](Mx3dMkBox.md#isdone)
- [LeftFace](Mx3dMkBox.md#leftface)
- [RightFace](Mx3dMkBox.md#rightface)
- [Shape](Mx3dMkBox.md#shape)
- [Shell](Mx3dMkBox.md#shell)
- [Solid](Mx3dMkBox.md#solid)
- [TopFace](Mx3dMkBox.md#topface)

## Constructors

### constructor

• **new Mx3dMkBox**(`thePnt1`, `thePnt2`)

Constructor that accepts two diagonal points of a rectangular prism as parameters.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|ThePnt1 | UniPoint | The first diagonal point|
|ThePnt2 | UniPoint | Second diagonal point|

#### Overrides

Mx3dMkObject.constructor

• **new Mx3dMkBox**(`theDX`, `theDY`, `theDZ`)

Constructor, taking the (0,0,0) point in the world coordinate system as the first corner, and accepting three values (theDX, theDY, theDZ) as the second corner parameter.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheDX | Number | The second corner point's X-direction component|
|TheDY | Number | The Y-direction component of the second corner point|
|TheDZ | Number | The Z-direction component of the second corner point|

#### Overrides

Mx3dMkObject.constructor

• **new Mx3dMkBox**(`theAxes`, `theDX`, `theDY`, `theDZ`)

Constructor, taking the (0,0,0) point in the theAxes coordinate system as the first corner, and accepting three values (theDX, theDY, theDZ) as the second corner parameter.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|The Axes | [Mx3dGeCSYSR] (Mx3dGeCSYSR. md) | Coordinate system object|
|TheDX | Number | The second corner point's X-direction component|
|TheDY | Number | The Y-direction component of the second corner point|
|TheDZ | Number | The Z-direction component of the second corner point|

#### Overrides

Mx3dMkObject.constructor

## Methods

### BackFace

▸ **BackFace**(): [`Mx3dShapeFace`](Mx3dShapeFace.md)

Obtain the shape of the back topology of the rectangular prism.

#### Returns

[`Mx3dShapeFace`](Mx3dShapeFace.md)

Tuopu surface shape.

___

### BottomFace

▸ **BottomFace**(): [`Mx3dShapeFace`](Mx3dShapeFace.md)

Obtain the shape of the bottom topology of the rectangular prism.

#### Returns

[`Mx3dShapeFace`](Mx3dShapeFace.md)

Tuopu surface shape.

___

### Build

▸ **Build**(): `void`

Execute the modeling algorithm for rectangular prisms.

#### Returns

`void`

___

### FrontFace

▸ **FrontFace**(): [`Mx3dShapeFace`](Mx3dShapeFace.md)

Obtain the shape of the front topology of the rectangular prism.

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

### LeftFace

▸ **LeftFace**(): [`Mx3dShapeFace`](Mx3dShapeFace.md)

Obtain the left side topology shape of the rectangular prism.

#### Returns

[`Mx3dShapeFace`](Mx3dShapeFace.md)

Tuopu surface shape.

___

### RightFace

▸ **RightFace**(): [`Mx3dShapeFace`](Mx3dShapeFace.md)

Obtain the right side topology shape of the rectangular prism.

#### Returns

[`Mx3dShapeFace`](Mx3dShapeFace.md)

Tuopu surface shape.

___

### Shape

▸ **Shape**(): [`Mx3dShapeObject`](Mx3dShapeObject.md)

Obtain the topological shape of a rectangular prism.

#### Returns

[`Mx3dShapeObject`](Mx3dShapeObject.md)

Topological shape.

___

### Shell

▸ **Shell**(): [`Mx3dShapeShell`](Mx3dShapeShell.md)

Obtain the topological shell shape of the rectangular prism.

#### Returns

[`Mx3dShapeShell`](Mx3dShapeShell.md)

Topological shell shape.

___

### Solid

▸ **Solid**(): [`Mx3dShapeSolid`](Mx3dShapeSolid.md)

Obtain the topological solid shape of a rectangular prism.

#### Returns

[`Mx3dShapeSolid`](Mx3dShapeSolid.md)

Topological entity shape.

___

### TopFace

▸ **TopFace**(): [`Mx3dShapeFace`](Mx3dShapeFace.md)

Obtain the top topology shape of the rectangular prism.

#### Returns

[`Mx3dShapeFace`](Mx3dShapeFace.md)

Tuopu surface shape.
