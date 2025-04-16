[mxcad_3d API Document](../README. md)/Mx3dWireTool

# Class: Mx3dWireTool

Interface for handling wire

## Table of contents

### Constructors

- [constructor](Mx3dWireTool.md#constructor)

### Methods

- [ConnectEdgesToWires](Mx3dWireTool.md#connectedgestowires)
- [ConnectWiresToWires](Mx3dWireTool.md#connectwirestowires)
- [EdgeToWire](Mx3dWireTool.md#edgetowire)

## Constructors

### constructor

• **new Mx3dWireTool**()

## Methods

### ConnectEdgesToWires

▸ `Static` **ConnectEdgesToWires**(`edges`, `toler?`, `shared?`): [`Mx3dShapeObject`](Mx3dShapeObject.md)[]

Connect a set of edges into the longest line (line). The standard for connection is that the distance between the endpoints of edges should be less than the given tolerance.
This method converts the input set of edges into a set of lines with the maximum length.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
|` edges ` | [` Mx3dShapeObject `] (Mx3dShapeObject. md) [] | ` undefined ` | Array of edge objects to be connected|
|Tolerant value when connecting edges|
|Shared | boolean | false | If true, only connect when adjacent edges share the same vertex; If false, connect when the distance between the endpoints of adjacent edges is less than the tolerance|

#### Returns

[`Mx3dShapeObject`](Mx3dShapeObject.md)[]

A new array of line objects containing the maximum length of connected lines.

___

### ConnectWiresToWires

▸ `Static` **ConnectWiresToWires**(`wires`, `toler?`, `shared?`): [`Mx3dShapeObject`](Mx3dShapeObject.md)[]

Connect a set of lines into the longest line (line). The standard for connection is that the distance between the endpoints of the line should be less than the given tolerance.
This method converts the input line set into the maximum length line set.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
|Wires | [Mx3dShapeObject] (Mx3dShapeObject. md) [] | undefined | Array of line objects to be connected|
|Toler | number | 1e-6 | Tolerance value when connecting lines|
|Shared | boolean | false | If true, only connect when adjacent lines share the same vertex; If false, connect when the distance between the endpoints of adjacent lines is less than the tolerance|

#### Returns

[`Mx3dShapeObject`](Mx3dShapeObject.md)[]

A new array of line objects containing the maximum length of connected lines.

___

### EdgeToWire

▸ `Static` **EdgeToWire**(`theEdge`): [`Mx3dShapeWire`](Mx3dShapeWire.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theEdge` | [`Mx3dShapeEdge`](Mx3dShapeEdge.md) |

#### Returns

[`Mx3dShapeWire`](Mx3dShapeWire.md)
