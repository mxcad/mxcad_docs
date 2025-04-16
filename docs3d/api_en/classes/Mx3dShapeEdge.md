[mxcad_3d API documentation](../README. md)/Mx3dShapeEdge

# Class: Mx3dShapeEdge

Representing an edge shape

## Hierarchy

- [`Mx3dShapeObject`](Mx3dShapeObject.md)

  ↳ **`Mx3dShapeEdge`**

## Table of contents

### Constructors

- [constructor](Mx3dShapeEdge.md#constructor)

### Methods

- [Centroid](Mx3dShapeEdge.md#centroid)
- [Explore](Mx3dShapeEdge.md#explore)
- [MirrorByAxis](Mx3dShapeEdge.md#mirrorbyaxis)
- [MirrorByCSYSR](Mx3dShapeEdge.md#mirrorbycsysr)
- [MirrorByPoint](Mx3dShapeEdge.md#mirrorbypoint)
- [MirroredByAxis](Mx3dShapeEdge.md#mirroredbyaxis)
- [MirroredByCSYSR](Mx3dShapeEdge.md#mirroredbycsysr)
- [MirroredByPoint](Mx3dShapeEdge.md#mirroredbypoint)
- [Orientation](Mx3dShapeEdge.md#orientation)
- [Quantities](Mx3dShapeEdge.md#quantities)
- [Rotate](Mx3dShapeEdge.md#rotate)
- [Rotated](Mx3dShapeEdge.md#rotated)
- [Scale](Mx3dShapeEdge.md#scale)
- [Scaled](Mx3dShapeEdge.md#scaled)
- [ShapeType](Mx3dShapeEdge.md#shapetype)
- [Transform](Mx3dShapeEdge.md#transform)
- [Transformed](Mx3dShapeEdge.md#transformed)
- [TranslateBy2Points](Mx3dShapeEdge.md#translateby2points)
- [TranslateByVec](Mx3dShapeEdge.md#translatebyvec)
- [TranslatedBy2Points](Mx3dShapeEdge.md#translatedby2points)
- [TranslatedByVec](Mx3dShapeEdge.md#translatedbyvec)
- [clone](Mx3dShapeEdge.md#clone)
- [common](Mx3dShapeEdge.md#common)
- [cut](Mx3dShapeEdge.md#cut)
- [fuse](Mx3dShapeEdge.md#fuse)
- [getBndBox](Mx3dShapeEdge.md#getbndbox)
- [move](Mx3dShapeEdge.md#move)
- [moved](Mx3dShapeEdge.md#moved)
- [reverse](Mx3dShapeEdge.md#reverse)
- [reversed](Mx3dShapeEdge.md#reversed)
- [section](Mx3dShapeEdge.md#section)
- [spliter](Mx3dShapeEdge.md#spliter)

## Constructors

### constructor

• **new Mx3dShapeEdge**()

#### Overrides

[Mx3dShapeObject](Mx3dShapeObject.md).[constructor](Mx3dShapeObject.md#constructor)

• **new Mx3dShapeEdge**(`pt1`, `pt2`)

Create an edge shape and input the starting and ending points

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Pt1 | [Mx3dGePoint] (Mx3dGePoint. md) | Starting Point|
|Pt2 | [Mx3dGePoint] (Mx3dGePoint. md) | Endpoint|

#### Overrides

Mx3dShapeObject.constructor

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

#### Inherited from

[Mx3dShapeObject](Mx3dShapeObject.md).[Centroid](Mx3dShapeObject.md#centroid)

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

#### Inherited from

[Mx3dShapeObject](Mx3dShapeObject.md).[Explore](Mx3dShapeObject.md#explore)

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

#### Inherited from

[Mx3dShapeObject](Mx3dShapeObject.md).[MirrorByAxis](Mx3dShapeObject.md#mirrorbyaxis)

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

#### Inherited from

[Mx3dShapeObject](Mx3dShapeObject.md).[MirrorByCSYSR](Mx3dShapeObject.md#mirrorbycsysr)

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

#### Inherited from

[Mx3dShapeObject](Mx3dShapeObject.md).[MirrorByPoint](Mx3dShapeObject.md#mirrorbypoint)

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

#### Inherited from

[Mx3dShapeObject](Mx3dShapeObject.md).[MirroredByAxis](Mx3dShapeObject.md#mirroredbyaxis)

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

#### Inherited from

[Mx3dShapeObject](Mx3dShapeObject.md).[MirroredByCSYSR](Mx3dShapeObject.md#mirroredbycsysr)

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

#### Inherited from

[Mx3dShapeObject](Mx3dShapeObject.md).[MirroredByPoint](Mx3dShapeObject.md#mirroredbypoint)

___

### Orientation

▸ **Orientation**(): [`MxOrientation`](../enums/MdGe.MxOrientation.md)

Obtain the orientation of the shape

#### Returns

[`MxOrientation`](../enums/MdGe.MxOrientation.md)

orientation

#### Inherited from

[Mx3dShapeObject](Mx3dShapeObject.md).[Orientation](Mx3dShapeObject.md#orientation)

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

#### Inherited from

[Mx3dShapeObject](Mx3dShapeObject.md).[Quantities](Mx3dShapeObject.md#quantities)

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

#### Inherited from

[Mx3dShapeObject](Mx3dShapeObject.md).[Rotate](Mx3dShapeObject.md#rotate)

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

#### Inherited from

[Mx3dShapeObject](Mx3dShapeObject.md).[Rotated](Mx3dShapeObject.md#rotated)

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

#### Inherited from

[Mx3dShapeObject](Mx3dShapeObject.md).[Scale](Mx3dShapeObject.md#scale)

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

#### Inherited from

[Mx3dShapeObject](Mx3dShapeObject.md).[Scaled](Mx3dShapeObject.md#scaled)

___

### ShapeType

▸ **ShapeType**(): [`MxShapeEnum`](../enums/MdGe.MxShapeEnum.md)

Get the shape type.

#### Returns

[`MxShapeEnum`](../enums/MdGe.MxShapeEnum.md)

Shape type.

#### Inherited from

[Mx3dShapeObject](Mx3dShapeObject.md).[ShapeType](Mx3dShapeObject.md#shapetype)

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

#### Inherited from

[Mx3dShapeObject](Mx3dShapeObject.md).[Transform](Mx3dShapeObject.md#transform)

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

#### Inherited from

[Mx3dShapeObject](Mx3dShapeObject.md).[Transformed](Mx3dShapeObject.md#transformed)

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

#### Inherited from

[Mx3dShapeObject](Mx3dShapeObject.md).[TranslateBy2Points](Mx3dShapeObject.md#translateby2points)

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

#### Inherited from

[Mx3dShapeObject](Mx3dShapeObject.md).[TranslateByVec](Mx3dShapeObject.md#translatebyvec)

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

#### Inherited from

[Mx3dShapeObject](Mx3dShapeObject.md).[TranslateByVec](Mx3dShapeObject.md#translatebyvec)

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

#### Inherited from

[Mx3dShapeObject](Mx3dShapeObject.md).[TranslatedBy2Points](Mx3dShapeObject.md#translatedby2points)

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

#### Inherited from

[Mx3dShapeObject](Mx3dShapeObject.md).[TranslatedByVec](Mx3dShapeObject.md#translatedbyvec)

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

#### Inherited from

[Mx3dShapeObject](Mx3dShapeObject.md).[TranslatedByVec](Mx3dShapeObject.md#translatedbyvec)

___

### clone

▸ **clone**(): [`Mx3dShapeObject`](Mx3dShapeObject.md)

Clone the current shape object.

#### Returns

[`Mx3dShapeObject`](Mx3dShapeObject.md)

The cloned shape object.

#### Inherited from

[Mx3dShapeObject](Mx3dShapeObject.md).[clone](Mx3dShapeObject.md#clone)

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

#### Inherited from

[Mx3dShapeObject](Mx3dShapeObject.md).[common](Mx3dShapeObject.md#common)

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

#### Inherited from

[Mx3dShapeObject](Mx3dShapeObject.md).[cut](Mx3dShapeObject.md#cut)

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

#### Inherited from

[Mx3dShapeObject](Mx3dShapeObject.md).[fuse](Mx3dShapeObject.md#fuse)

___

### getBndBox

▸ **getBndBox**(): [`Mx3dGeBndBox`](Mx3dGeBndBox.md)

Get the bounding box of the shape object.

#### Returns

[`Mx3dGeBndBox`](Mx3dGeBndBox.md)

Boundary box object.

#### Inherited from

[Mx3dShapeObject](Mx3dShapeObject.md).[getBndBox](Mx3dShapeObject.md#getbndbox)

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

#### Inherited from

[Mx3dShapeObject](Mx3dShapeObject.md).[move](Mx3dShapeObject.md#move)

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

#### Inherited from

[Mx3dShapeObject](Mx3dShapeObject.md).[moved](Mx3dShapeObject.md#moved)

___

### reverse

▸ **reverse**(): `void`

Shape reversed

#### Returns

`void`

#### Inherited from

[Mx3dShapeObject](Mx3dShapeObject.md).[reverse](Mx3dShapeObject.md#reverse)

___

### reversed

▸ **reversed**(): [`Mx3dShapeObject`](Mx3dShapeObject.md)

Obtain the new shape after reversing

#### Returns

[`Mx3dShapeObject`](Mx3dShapeObject.md)

New shape after reversal

#### Inherited from

[Mx3dShapeObject](Mx3dShapeObject.md).[reversed](Mx3dShapeObject.md#reversed)

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

#### Inherited from

[Mx3dShapeObject](Mx3dShapeObject.md).[section](Mx3dShapeObject.md#section)

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

#### Inherited from

[Mx3dShapeObject](Mx3dShapeObject.md).[spliter](Mx3dShapeObject.md#spliter)
