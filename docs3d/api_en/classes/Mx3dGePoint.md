[mxcad_3d API documentation](../README. md)/Mx3dGePoint

# Class: Mx3dGePoint

Represents a point in three-dimensional space.

Provide constructors and methods for obtaining and setting the coordinates of points.

## Hierarchy

- [`Mx3dGeObject`](Mx3dGeObject.md)

  ↳ **`Mx3dGePoint`**

## Table of contents

### Constructors

- [constructor](Mx3dGePoint.md#constructor)

### Methods

- [Vertex](Mx3dGePoint.md#vertex)
- [X](Mx3dGePoint.md#x)
- [Y](Mx3dGePoint.md#y)
- [Z](Mx3dGePoint.md#z)
- [setX](Mx3dGePoint.md#setx)
- [setXYZ](Mx3dGePoint.md#setxyz)
- [setY](Mx3dGePoint.md#sety)
- [setZ](Mx3dGePoint.md#setz)

## Constructors

### constructor

• **new Mx3dGePoint**()

By default, construct a point located at the origin (0,0,0).

#### Overrides

Mx3dGeObject.constructor

• **new Mx3dGePoint**(`theXYZ`)

Construct a point using the given coordinate array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheXYZ | Vector | contains X, Y. An array of Z-coordinate values|

#### Overrides

Mx3dGeObject.constructor

• **new Mx3dGePoint**(`theX`, `theY`, `theZ`)

Using the given X, Y. Construct a point based on the Z-coordinate value.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheX | Number | X coordinate value|
|TheY | Number | Y coordinate value|
|TheZ | Number | Z coordinate value|

#### Overrides

Mx3dGeObject.constructor

## Methods

### Vertex

▸ **Vertex**(): [`Mx3dShapeVertex`](Mx3dShapeVertex.md)

Obtain the topological point shape of the current point

#### Returns

[`Mx3dShapeVertex`](Mx3dShapeVertex.md)

Topological point shape

___

### X

▸ **X**(): `number`

Obtain the X coordinate value of a point in the world coordinate system

#### Returns

`number`

X-coordinate value

___

### Y

▸ **Y**(): `number`

Obtain the Y-coordinate value of a point in the world coordinate system

#### Returns

`number`

Y coordinate value

___

### Z

▸ **Z**(): `number`

Obtain the Z-coordinate value of a point in the world coordinate system

#### Returns

`number`

Z-coordinate value

___

### setX

▸ **setX**(`theX`): `void`

Set the X coordinate value of the point in the world coordinate system

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheX | number | X coordinate value|

#### Returns

`void`

___

### setXYZ

▸ **setXYZ**(`theX`, `theY`, `theZ`): `void`

Set the X, Y, Z coordinate values of the point in the world coordinate system

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheX | number | X coordinate value|
|TheY | number | Y coordinate value|
|TheZ | number | Z coordinate value|

#### Returns

`void`

___

### setY

▸ **setY**(`theY`): `void`

Set the Y coordinate value of the point in the world coordinate system

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheY | number | Y coordinate value|

#### Returns

`void`

___

### setZ

▸ **setZ**(`theZ`): `void`

Set the Z-coordinate value of the point in the world coordinate system

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheZ | number | Z coordinate value|

#### Returns

`void`
