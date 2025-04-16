[mxcad_3d API documentation](../README. md)/Mx3dShapeObject

# Class: Mx3dShapeObject

Represents the base class for three-dimensional shape objects.

## Hierarchy

- [`Mx3dBaseObject`](Mx3dBaseObject.md)

  ↳ **`Mx3dShapeObject`**

  ↳↳ [`Mx3dShapeFace`](Mx3dShapeFace.md)

  ↳↳ [`Mx3dShapeVertex`](Mx3dShapeVertex.md)

  ↳↳ [`Mx3dShapeEdge`](Mx3dShapeEdge.md)

  ↳↳ [`Mx3dShapeWire`](Mx3dShapeWire.md)

  ↳↳ [`Mx3dShapeShell`](Mx3dShapeShell.md)

  ↳↳ [`Mx3dShapeSolid`](Mx3dShapeSolid.md)

  ↳↳ [`Mx3dShapeCompSolid`](Mx3dShapeCompSolid.md)

  ↳↳ [`Mx3dShapeCompound`](Mx3dShapeCompound.md)

## Table of contents

### Constructors

- [constructor](Mx3dShapeObject.md#constructor)

### Methods

- [Centroid](Mx3dShapeObject.md#centroid)
- [Explore](Mx3dShapeObject.md#explore)
- [MirrorByAxis](Mx3dShapeObject.md#mirrorbyaxis)
- [MirrorByCSYSR](Mx3dShapeObject.md#mirrorbycsysr)
- [MirrorByPoint](Mx3dShapeObject.md#mirrorbypoint)
- [MirroredByAxis](Mx3dShapeObject.md#mirroredbyaxis)
- [MirroredByCSYSR](Mx3dShapeObject.md#mirroredbycsysr)
- [MirroredByPoint](Mx3dShapeObject.md#mirroredbypoint)
- [Orientation](Mx3dShapeObject.md#orientation)
- [Quantities](Mx3dShapeObject.md#quantities)
- [Rotate](Mx3dShapeObject.md#rotate)
- [Rotated](Mx3dShapeObject.md#rotated)
- [Scale](Mx3dShapeObject.md#scale)
- [Scaled](Mx3dShapeObject.md#scaled)
- [ShapeType](Mx3dShapeObject.md#shapetype)
- [Transform](Mx3dShapeObject.md#transform)
- [Transformed](Mx3dShapeObject.md#transformed)
- [TranslateBy2Points](Mx3dShapeObject.md#translateby2points)
- [TranslateByVec](Mx3dShapeObject.md#translatebyvec)
- [TranslatedBy2Points](Mx3dShapeObject.md#translatedby2points)
- [TranslatedByVec](Mx3dShapeObject.md#translatedbyvec)
- [clone](Mx3dShapeObject.md#clone)
- [common](Mx3dShapeObject.md#common)
- [cut](Mx3dShapeObject.md#cut)
- [fuse](Mx3dShapeObject.md#fuse)
- [getBndBox](Mx3dShapeObject.md#getbndbox)
- [move](Mx3dShapeObject.md#move)
- [moved](Mx3dShapeObject.md#moved)
- [reverse](Mx3dShapeObject.md#reverse)
- [reversed](Mx3dShapeObject.md#reversed)
- [section](Mx3dShapeObject.md#section)
- [spliter](Mx3dShapeObject.md#spliter)

## Constructors

### constructor

• **new Mx3dShapeObject**(`p?`)

Create a shape object and choose to pass in an object parameter.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `p?` | ` Object ` | Optional object parameters|

#### Overrides

Mx3dBaseObject.constructor

## Methods

### Centroid

▸ **Centroid**(`theAspect`): [`Mx3dGePoint`](Mx3dGePoint.md)

Obtain the centroid of the shape.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|The centroid type that needs to be set based on the shape type is MxQuantAspect (../ennus/MdGe. MxQuantAspect. md)|

#### Returns

[`Mx3dGePoint`](Mx3dGePoint.md)

Center of mass point.

___

### Explore

▸ **Explore**(`ToFind`): [`Mx3dShapeObject`](Mx3dShapeObject.md)[]

Traverse shape objects.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|ToFind | [MxShapeenum] (../enums/MdGe. MxShapeenum. md) | The type of shape to search for|

#### Returns

[`Mx3dShapeObject`](Mx3dShapeObject.md)[]

Shape object array.

___

### MirrorByAxis

▸ **MirrorByAxis**(`axis`): `void`

Mirror the current shape object based on an axis.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Axis | [Mx3dGeAxis] (Mx3dGeAxis. md) | Mirror axis|

#### Returns

`void`

___

### MirrorByCSYSR

▸ **MirrorByCSYSR**(`csysr`): `void`

Mirror the current shape object based on a coordinate system.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Csysr | [Mx3dGeCSYSR] (Mx3dGeCSYSR. md) | Mirror coordinate system|

#### Returns

`void`

___

### MirrorByPoint

▸ **MirrorByPoint**(`theP`): `void`

Mirror the current shape object based on a point.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheP | [Mx3dGePoint] (Mx3dGePoint. md) | Mirror point|

#### Returns

`void`

___

### MirroredByAxis

▸ **MirroredByAxis**(`axis`): [`Mx3dShapeObject`](Mx3dShapeObject.md)

Return the shape object mirrored based on an axis.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Axis | [Mx3dGeAxis] (Mx3dGeAxis. md) | Mirror axis|

#### Returns

[`Mx3dShapeObject`](Mx3dShapeObject.md)

The mirrored shape object.

___

### MirroredByCSYSR

▸ **MirroredByCSYSR**(`csysr`): [`Mx3dShapeObject`](Mx3dShapeObject.md)

Return the shape object mirrored based on a coordinate system.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Csysr | [Mx3dGeCSYSR] (Mx3dGeCSYSR. md) | Mirror coordinate system|

#### Returns

[`Mx3dShapeObject`](Mx3dShapeObject.md)

The mirrored shape object.

___

### MirroredByPoint

▸ **MirroredByPoint**(`theP`): [`Mx3dShapeObject`](Mx3dShapeObject.md)

Returns a shape object that has been mirrored based on a point.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheP | [Mx3dGePoint] (Mx3dGePoint. md) | Mirror point|

#### Returns

[`Mx3dShapeObject`](Mx3dShapeObject.md)

The mirrored shape object.

___

### Orientation

▸ **Orientation**(): [`MxOrientation`](../enums/MdGe.MxOrientation.md)

Obtain the orientation of the shape

#### Returns

[`MxOrientation`](../enums/MdGe.MxOrientation.md)

orientation

___

### Quantities

▸ **Quantities**(`theAspect`): `number`

Obtain the length, area, volume, etc. of the shape.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|The Aspect | [MxQuantAspect] (../ennus/MdGe. MxQuantAspect. md) | Set whether to obtain length, area, or volume|

#### Returns

`number`

Quantity value.

___

### Rotate

▸ **Rotate**(`axis`, `ang`): `void`

Rotate the current shape object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Axis | [Mx3dGeAxis] (Mx3dGeAxis. md) | Rotation axis|
|'ang' | 'number' | Rotation angle|

#### Returns

`void`

___

### Rotated

▸ **Rotated**(`axis`, `ang`): [`Mx3dShapeObject`](Mx3dShapeObject.md)

Return the rotated shape object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Axis | [Mx3dGeAxis] (Mx3dGeAxis. md) | Rotation axis|
|'ang' | 'number' | Rotation angle|

#### Returns

[`Mx3dShapeObject`](Mx3dShapeObject.md)

The rotated shape object.

___

### Scale

▸ **Scale**(`point`, `s`): `void`

Scale the current shape object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Point | [Mx3dGePoint] (Mx3dGePoint. md) | Zoom center point|
|S | number | scaling ratio|

#### Returns

`void`

___

### Scaled

▸ **Scaled**(`point`, `s`): [`Mx3dShapeObject`](Mx3dShapeObject.md)

Return the scaled shape object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Point | [Mx3dGePoint] (Mx3dGePoint. md) | Zoom center point|
|S | number | scaling ratio|

#### Returns

[`Mx3dShapeObject`](Mx3dShapeObject.md)

The scaled shape object.

___

### ShapeType

▸ **ShapeType**(): [`MxShapeEnum`](../enums/MdGe.MxShapeEnum.md)

Get the shape type.

#### Returns

[`MxShapeEnum`](../enums/MdGe.MxShapeEnum.md)

Shape type.

___

### Transform

▸ **Transform**(`trsf`): `void`

Transform the current shape object based on the transformation matrix.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Trsf | [Mx3dGetTrsf] (Mx3dGetTrsf. md) | Transform matrix|

#### Returns

`void`

___

### Transformed

▸ **Transformed**(`trsf`): [`Mx3dShapeObject`](Mx3dShapeObject.md)

Return the shape object transformed according to the transformation matrix.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Trsf | [Mx3dGetTrsf] (Mx3dGetTrsf. md) | Transform matrix|

#### Returns

[`Mx3dShapeObject`](Mx3dShapeObject.md)

The transformed shape object.

___

### TranslateBy2Points

▸ **TranslateBy2Points**(`point1`, `point2`): `void`

Translate the current shape object based on two points.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Point1 | [Mx3dGePoint] (Mx3dGePoint. md) | Starting point|
|Point2 | [Mx3dGePoint] (Mx3dGePoint. md) | Endpoint|

#### Returns

`void`

___

### TranslateByVec

▸ **TranslateByVec**(`vec`): `void`

Translate the current shape object based on the vector.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Vec | [Mx3dGeVec] (Mx3dGeVec. md) | Translation vector|

#### Returns

`void`

▸ **TranslateByVec**(`theX`, `theY`, `theZ`): `void`

Translate the current shape object based on its coordinates.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheX | number | X coordinate|
|TheY | Number | Y coordinate|
|TheZ | Number | Z coordinate|

#### Returns

`void`

___

### TranslatedBy2Points

▸ **TranslatedBy2Points**(`point1`, `point2`): [`Mx3dShapeObject`](Mx3dShapeObject.md)

Return the shape object that has been translated based on two points.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Point1 | [Mx3dGePoint] (Mx3dGePoint. md) | Starting point|
|Point2 | [Mx3dGePoint] (Mx3dGePoint. md) | Endpoint|

#### Returns

[`Mx3dShapeObject`](Mx3dShapeObject.md)

The shape object after translation.

___

### TranslatedByVec

▸ **TranslatedByVec**(`vec`): [`Mx3dShapeObject`](Mx3dShapeObject.md)

Return the shape object translated based on the vector.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Vec | [Mx3dGeVec] (Mx3dGeVec. md) | Translation vector|

#### Returns

[`Mx3dShapeObject`](Mx3dShapeObject.md)

The shape object after translation.

▸ **TranslatedByVec**(`theX`, `theY`, `theZ`): [`Mx3dShapeObject`](Mx3dShapeObject.md)

Return the shape object after coordinate translation.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheX | number | X coordinate|
|TheY | Number | Y coordinate|
|TheZ | Number | Z coordinate|

#### Returns

[`Mx3dShapeObject`](Mx3dShapeObject.md)

The shape object after translation.

___

### clone

▸ **clone**(): [`Mx3dShapeObject`](Mx3dShapeObject.md)

Clone the current shape object.

#### Returns

[`Mx3dShapeObject`](Mx3dShapeObject.md)

The cloned shape object.

___

### common

▸ **common**(`theOther`): [`Mx3dShapeObject`](Mx3dShapeObject.md)

Return the common part between the current shape object and another shape object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|` theOther ` | [` Mx3dShapeObject `] (Mx3dShapeObject. md) | Another shape object|

#### Returns

[`Mx3dShapeObject`](Mx3dShapeObject.md)

The shape object of the public part.

___

### cut

▸ **cut**(`theOther`): [`Mx3dShapeObject`](Mx3dShapeObject.md)

Subtract another shape object from the current shape object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|` theOther ` | [` Mx3dShapeObject `] (Mx3dShapeObject. md) | Another shape object|

#### Returns

[`Mx3dShapeObject`](Mx3dShapeObject.md)

The reduced shape object.

___

### fuse

▸ **fuse**(`theOther`): [`Mx3dShapeObject`](Mx3dShapeObject.md)

Merge with another shape object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|` theOther ` | [` Mx3dShapeObject `] (Mx3dShapeObject. md) | Another shape object|

#### Returns

[`Mx3dShapeObject`](Mx3dShapeObject.md)

The fused shape object.

___

### getBndBox

▸ **getBndBox**(): [`Mx3dGeBndBox`](Mx3dGeBndBox.md)

Get the bounding box of the shape object.

#### Returns

[`Mx3dGeBndBox`](Mx3dGeBndBox.md)

Boundary box object.

___

### move

▸ **move**(`theLocation`): `void`

Move the shape object to the specified position.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheLocation | [Mx3dGeLocation. md] | The location of the movement|

#### Returns

`void`

___

### moved

▸ **moved**(`theLocation`): [`Mx3dShapeObject`](Mx3dShapeObject.md)

Return the shape object after movement.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheLocation | [Mx3dGeLocation. md] | The location of the movement|

#### Returns

[`Mx3dShapeObject`](Mx3dShapeObject.md)

The shape object after movement.

___

### reverse

▸ **reverse**(): `void`

Shape reversed

#### Returns

`void`

___

### reversed

▸ **reversed**(): [`Mx3dShapeObject`](Mx3dShapeObject.md)

Obtain the new shape after reversing

#### Returns

[`Mx3dShapeObject`](Mx3dShapeObject.md)

New shape after reversal

___

### section

▸ **section**(`theOther`): [`Mx3dShapeObject`](Mx3dShapeObject.md)

Returns the intersecting contour between the current shape object and another shape object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|` theOther ` | [` Mx3dShapeObject `] (Mx3dShapeObject. md) | Another shape object|

#### Returns

[`Mx3dShapeObject`](Mx3dShapeObject.md)

Shape objects with intersecting contours.

___

### spliter

▸ **spliter**(`theTools`): [`Mx3dShapeObject`](Mx3dShapeObject.md)[]

Use the tool shape object to segment the current shape object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheTools | [Mx3dShapeObject] (Mx3dShapeObject. md) [] | Tool Shape Object Array|

#### Returns

[`Mx3dShapeObject`](Mx3dShapeObject.md)[]

The segmented array of shape objects.
