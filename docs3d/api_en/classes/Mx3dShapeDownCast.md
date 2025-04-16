[mxcad_3d API documentation](../README. md)/Mx3dShapeDownCast

# Class: Mx3dShapeDownCast

Downward type conversion interface for shape objects

## Table of contents

### Constructors

- [constructor](Mx3dShapeDownCast.md#constructor)

### Methods

- [CompSolid](Mx3dShapeDownCast.md#compsolid)
- [Compound](Mx3dShapeDownCast.md#compound)
- [Edge](Mx3dShapeDownCast.md#edge)
- [Face](Mx3dShapeDownCast.md#face)
- [Shell](Mx3dShapeDownCast.md#shell)
- [Solid](Mx3dShapeDownCast.md#solid)
- [Vertex](Mx3dShapeDownCast.md#vertex)
- [Wire](Mx3dShapeDownCast.md#wire)

## Constructors

### constructor

• **new Mx3dShapeDownCast**()

## Methods

### CompSolid

▸ `Static` **CompSolid**(`S`): [`Mx3dShapeCompSolid`](Mx3dShapeCompSolid.md)

Convert Mx3dShapeObject object to Mx3dShapeCompSolid object (the actual type of Mx3dShapeObject needs to be Mx3dShapeCompSolid)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|S | [Mx3dShapeObject] (Mx3dShapeObject. md) | Shape object to be converted|

#### Returns

[`Mx3dShapeCompSolid`](Mx3dShapeCompSolid.md)

Converted subclass shape object

___

### Compound

▸ `Static` **Compound**(`S`): [`Mx3dShapeCompound`](Mx3dShapeCompound.md)

Convert Mx3dShapeObject object to Mx3dShapeCompound object (the actual type of Mx3dShapeObject needs to be Mx3dShapeCompound)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|S | [Mx3dShapeObject] (Mx3dShapeObject. md) | Shape object to be converted|

#### Returns

[`Mx3dShapeCompound`](Mx3dShapeCompound.md)

Converted subclass shape object

___

### Edge

▸ `Static` **Edge**(`S`): [`Mx3dShapeEdge`](Mx3dShapeEdge.md)

Convert Mx3dShapeObject object to Mx3dShapeEdge object (the actual type of Mx3dShapeObject needs to be Mx3dShapeEdge)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|S | [Mx3dShapeObject] (Mx3dShapeObject. md) | Shape object to be converted|

#### Returns

[`Mx3dShapeEdge`](Mx3dShapeEdge.md)

Converted subclass shape object

___

### Face

▸ `Static` **Face**(`S`): [`Mx3dShapeFace`](Mx3dShapeFace.md)

Convert Mx3dShapeObject object to Mx3dShapeFace object (the actual type of Mx3dShapeObject needs to be Mx3dShapeFace)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|S | [Mx3dShapeObject] (Mx3dShapeObject. md) | Shape object to be converted|

#### Returns

[`Mx3dShapeFace`](Mx3dShapeFace.md)

Converted subclass shape object

___

### Shell

▸ `Static` **Shell**(`S`): [`Mx3dShapeShell`](Mx3dShapeShell.md)

Convert Mx3dShapeObject object to Mx3dShapeShell object (the actual type of Mx3dShapeObject needs to be Mx3dShapeShell)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|S | [Mx3dShapeObject] (Mx3dShapeObject. md) | Shape object to be converted|

#### Returns

[`Mx3dShapeShell`](Mx3dShapeShell.md)

Converted subclass shape object

___

### Solid

▸ `Static` **Solid**(`S`): [`Mx3dShapeSolid`](Mx3dShapeSolid.md)

Convert Mx3dShapeObject object to Mx3dShapeSolid object (the actual type of Mx3dShapeObject needs to be Mx3dShapeSolid)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|S | [Mx3dShapeObject] (Mx3dShapeObject. md) | Shape object to be converted|

#### Returns

[`Mx3dShapeSolid`](Mx3dShapeSolid.md)

Converted subclass shape object

___

### Vertex

▸ `Static` **Vertex**(`S`): [`Mx3dShapeVertex`](Mx3dShapeVertex.md)

Convert Mx3dShapeObject object to Mx3dShapeVertex object (the actual type of Mx3dShapeObject needs to be Mx3dShapeVertex)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|S | [Mx3dShapeObject] (Mx3dShapeObject. md) | Shape object to be converted|

#### Returns

[`Mx3dShapeVertex`](Mx3dShapeVertex.md)

Converted subclass shape object

___

### Wire

▸ `Static` **Wire**(`S`): [`Mx3dShapeWire`](Mx3dShapeWire.md)

Convert Mx3dShapeObject object to Mx3dShapeWire object (the actual type of Mx3dShapeObject needs to be Mx3dShapeWire)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|S | [Mx3dShapeObject] (Mx3dShapeObject. md) | Shape object to be converted|

#### Returns

[`Mx3dShapeWire`](Mx3dShapeWire.md)

Converted subclass shape object
