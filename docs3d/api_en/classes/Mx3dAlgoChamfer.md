[mxcad_3d API documentation](../README. md)/Mx3dAlgoChamfer

# Class: Mx3dAlgoChamfer

Inverted angle algorithm

## Hierarchy

- [`Mx3dAlgoObject`](Mx3dAlgoObject.md)

  ↳ **`Mx3dAlgoChamfer`**

## Table of contents

### Constructors

- [constructor](Mx3dAlgoChamfer.md#constructor)

### Methods

- [Add](Mx3dAlgoChamfer.md#add)
- [Shape](Mx3dAlgoChamfer.md#shape)

## Constructors

### constructor

• **new Mx3dAlgoChamfer**(`S`)

Constructor, input the object that requires a reverse angle

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|S | [Mx3dShapeObject] (Mx3dShapeObject. md)|

#### Overrides

Mx3dAlgoObject.constructor

## Methods

### Add

▸ **Add**(`Dis`, `E`): `void`

Add edges on objects that require a reverse angle

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Dis | number | Inverted angle distance|
|E | [Mx3dShapeEdge] (Mx3dShapeEdge. md) | Edges on objects|

#### Returns

`void`

___

### Shape

▸ **Shape**(): [`Mx3dShapeObject`](Mx3dShapeObject.md)

Obtain the shape object after obtaining the inverted angle

#### Returns

[`Mx3dShapeObject`](Mx3dShapeObject.md)

Shape object after oblique angle reversal
