[mxcad_3d API Document](../README. md)/Mx3dMkPolygon

# Class: Mx3dMkPolygon

The class that represents modeling polylines inherits from Mx3dMkObject.

## Hierarchy

- [`Mx3dMkObject`](Mx3dMkObject.md)

  ↳ **`Mx3dMkPolygon`**

## Table of contents

### Constructors

- [constructor](Mx3dMkPolygon.md#constructor)

### Methods

- [Add](Mx3dMkPolygon.md#add)
- [Added](Mx3dMkPolygon.md#added)
- [Build](Mx3dMkPolygon.md#build)
- [Close](Mx3dMkPolygon.md#close)
- [Edge](Mx3dMkPolygon.md#edge)
- [FirstVertex](Mx3dMkPolygon.md#firstvertex)
- [IsDone](Mx3dMkPolygon.md#isdone)
- [LastVertex](Mx3dMkPolygon.md#lastvertex)
- [Shape](Mx3dMkPolygon.md#shape)
- [Wire](Mx3dMkPolygon.md#wire)

## Constructors

### constructor

• **new Mx3dMkPolygon**()

Constructor, initialize polyline object.

#### Overrides

Mx3dMkObject.constructor

## Methods

### Add

▸ **Add**(`P`): `void`

Add a vertex to a polyline.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|P | [Mx3dGePoint] (Mx3dGePoint. md) | Point object to be added|

#### Returns

`void`

___

### Added

▸ **Added**(): `boolean`

Check if the last added vertex coincides with the previous vertex.

#### Returns

`boolean`

If the last added vertex does not coincide with the previous vertex, return true; Otherwise, return false.

___

### Build

▸ **Build**(): `void`

Execute modeling algorithms for polylines.

#### Returns

`void`

___

### Close

▸ **Close**(): `void`

Close polylines to form a closed shape.

#### Returns

`void`

___

### Edge

▸ **Edge**(): [`Mx3dShapeEdge`](Mx3dShapeEdge.md)

Retrieve the Edge object of polylines.

#### Returns

[`Mx3dShapeEdge`](Mx3dShapeEdge.md)

Edge object for polylines.

___

### FirstVertex

▸ **FirstVertex**(): [`Mx3dShapeVertex`](Mx3dShapeVertex.md)

Get the first vertex of the polyline.

#### Returns

[`Mx3dShapeVertex`](Mx3dShapeVertex.md)

The first vertex object.

___

### IsDone

▸ **IsDone**(): `boolean`

Check if the modeling algorithm has been executed successfully.

#### Returns

`boolean`

The flag indicating whether the modeling algorithm execution has been completed, with true indicating completion and false indicating failure.

___

### LastVertex

▸ **LastVertex**(): [`Mx3dShapeVertex`](Mx3dShapeVertex.md)

Get the last vertex of the polyline.

#### Returns

[`Mx3dShapeVertex`](Mx3dShapeVertex.md)

The last vertex object.

___

### Shape

▸ **Shape**(): [`Mx3dShapeObject`](Mx3dShapeObject.md)

Obtain the shape of polylines.

#### Returns

[`Mx3dShapeObject`](Mx3dShapeObject.md)

The shape object of polylines.

___

### Wire

▸ **Wire**(): [`Mx3dShapeWire`](Mx3dShapeWire.md)

Retrieve the Wire object of a polyline.

#### Returns

[`Mx3dShapeWire`](Mx3dShapeWire.md)

Wire object for polylines.
