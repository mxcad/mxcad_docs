[mxcad_3d API documentation](../README. md)/Mx3dAlgoSpell2d

# Class: Mx3dAlgoFillet2d

Two dimensional fillet algorithm

## Hierarchy

- [`Mx3dAlgoObject`](Mx3dAlgoObject.md)

  ↳ **`Mx3dAlgoFillet2d`**

## Table of contents

### Constructors

- [constructor](Mx3dAlgoFillet2d.md#constructor)

### Methods

- [Init](Mx3dAlgoFillet2d.md#init)
- [NbResults](Mx3dAlgoFillet2d.md#nbresults)
- [Perform](Mx3dAlgoFillet2d.md#perform)
- [Result](Mx3dAlgoFillet2d.md#result)

## Constructors

### constructor

• **new Mx3dAlgoFillet2d**()

Default constructor 

#### Overrides

Mx3dAlgoObject.constructor

• **new Mx3dAlgoFillet2d**(`theWire`, `thePlane`)

Constructor, pass in the wire and the plane where the wire is located

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheWire | [Mx3dShapeWire] (Mx3dShapeWire. md) | Wire to be rounded|
|ThePlane | [Mx3dGePlane] (Mx3dGePlane. md) | The plane where the wire is located|

#### Overrides

Mx3dAlgoObject.constructor

• **new Mx3dAlgoFillet2d**(`theEdge1`, `theEdge2`, `thePlane`)

Constructor, passing in two lines located on the same plane Edge and the plane where they are located

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheEdge1 | [Mx3dShapeEdge] (Mx3dShapeEdge. md) | First Edge|
|TheEdge2 | [Mx3dShapeEdge] (Mx3dShapeEdge. md) | Second Edge|
|The Plane | [Mx3dGePlane] (Mx3dGePlane. md) | The plane where it is located|

#### Overrides

Mx3dAlgoObject.constructor

## Methods

### Init

▸ **Init**(`theWire`, `thePlane`): `void`

Initialize function, passing in the wire and the plane where the wire is located

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheWire | [Mx3dShapeWire] (Mx3dShapeWire. md) | Wire to be rounded|
|ThePlane | [Mx3dGePlane] (Mx3dGePlane. md) | The plane where the wire is located|

#### Returns

`void`

▸ **Init**(`theEdge1`, `theEdge2`, `thePlane`): `void`

Initialization function, passing in two lines located on the same plane Edge and the plane where they are located

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheEdge1 | [Mx3dShapeEdge] (Mx3dShapeEdge. md) | First Edge|
|TheEdge2 | [Mx3dShapeEdge] (Mx3dShapeEdge. md) | Second Edge|
|The Plane | [Mx3dGePlane] (Mx3dGePlane. md) | The plane where it is located|

#### Returns

`void`

___

### NbResults

▸ **NbResults**(`thePoint`): `number`

Obtain the number of rounded corner execution results

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|ThePoint | [Mx3dGePoint] (Mx3dGePoint. md) | Calculate the point at the rounded corner|

#### Returns

`number`

The number of rounded corner execution results

___

### Perform

▸ **Perform**(`theRadius`): `boolean`

Execute fillet algorithm

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheRadius | number | radius of rounded corners|

#### Returns

`boolean`

Whether the algorithm has been successfully executed

___

### Result

▸ **Result**(`thePoint`, `theEdge1`, `theEdge2`, `iSolution?`): [`Mx3dShapeEdge`](Mx3dShapeEdge.md)

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
|` thePoint ` | [` Mx3dGePoint `] (Mx3dGePoint. md) | ` undefined ` | Set the result to be obtained at which intersection point of the original curve is located|
|The Edge1 | [Mx3dShapeEdge] (Mx3dShapeEdge. md) | undefined | The first Edge returned|
|` theEdge2 ` | [` Mx3dShapeEdge `] (Mx3dShapeEdge. md) | ` undefined ` | The second Edge returned|
|ISolution | number | -1 | default -1, get the result closest to thePoint|

#### Returns

[`Mx3dShapeEdge`](Mx3dShapeEdge.md)
