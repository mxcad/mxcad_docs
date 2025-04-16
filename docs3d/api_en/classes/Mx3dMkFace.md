[mxcad_3d API Document](../README. md)/Mx3dMkFace

# Class: Mx3dMkFace

The class representing the modeling surface inherits from Mx3dMkObject.

## Hierarchy

- [`Mx3dMkObject`](Mx3dMkObject.md)

  ↳ **`Mx3dMkFace`**

## Table of contents

### Constructors

- [constructor](Mx3dMkFace.md#constructor)

### Methods

- [Add](Mx3dMkFace.md#add)
- [Build](Mx3dMkFace.md#build)
- [Face](Mx3dMkFace.md#face)
- [IsDone](Mx3dMkFace.md#isdone)
- [Shape](Mx3dMkFace.md#shape)

## Constructors

### constructor

• **new Mx3dMkFace**(`theWire`, `OnlyPlane?`)

Constructor that accepts a Wire object and a Boolean value to initialize a face object.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
|The Wire | [Mx3dShapeFace. md] \ | [Mx3dShapeWire] (Mx3dShapeWire. md) | undefined | The line object or face shape object to be used (wire can be added to form a Hole)|
|OnlyPlane | boolean | false | Whether it is limited to flat construction only, defaults to false|

#### Overrides

Mx3dMkObject.constructor

## Methods

### Add

▸ **Add**(`W`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `W` | [`Mx3dShapeWire`](Mx3dShapeWire.md) |

#### Returns

`void`

___

### Build

▸ **Build**(): `void`

Modeling algorithm for execution surface.

#### Returns

`void`

___

### Face

▸ **Face**(): [`Mx3dShapeFace`](Mx3dShapeFace.md)

Obtain the specific object of the face.

#### Returns

[`Mx3dShapeFace`](Mx3dShapeFace.md)

The specific object of the face.

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

Obtain the shape object of the face.

#### Returns

[`Mx3dShapeObject`](Mx3dShapeObject.md)

Shape object of the face.
