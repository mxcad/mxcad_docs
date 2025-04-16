[mxcad_3d API Document](../README. md)/Mx3dGeHyperbola

# Class: Mx3dGeHyperbola

Represents a hyperbolic object in three-dimensional space.
This class is used to create, manipulate, and query various properties of hyperbolas, including their axis, position, radius, and various transformation states.

## Hierarchy

- [`Mx3dGeObject`](Mx3dGeObject.md)

  ↳ **`Mx3dGeHyperbola`**

## Table of contents

### Constructors

- [constructor](Mx3dGeHyperbola.md#constructor)

### Methods

- [Asymptote1](Mx3dGeHyperbola.md#asymptote1)
- [Asymptote2](Mx3dGeHyperbola.md#asymptote2)
- [Axis](Mx3dGeHyperbola.md#axis)
- [ConjugateBranch1](Mx3dGeHyperbola.md#conjugatebranch1)
- [ConjugateBranch2](Mx3dGeHyperbola.md#conjugatebranch2)
- [Directrix1](Mx3dGeHyperbola.md#directrix1)
- [Directrix2](Mx3dGeHyperbola.md#directrix2)
- [Eccentricity](Mx3dGeHyperbola.md#eccentricity)
- [Focal](Mx3dGeHyperbola.md#focal)
- [Focus1](Mx3dGeHyperbola.md#focus1)
- [Focus2](Mx3dGeHyperbola.md#focus2)
- [Location](Mx3dGeHyperbola.md#location)
- [MajorRadius](Mx3dGeHyperbola.md#majorradius)
- [MinorRadius](Mx3dGeHyperbola.md#minorradius)
- [MirrorByAxis](Mx3dGeHyperbola.md#mirrorbyaxis)
- [MirrorByCSYSR](Mx3dGeHyperbola.md#mirrorbycsysr)
- [MirrorByPoint](Mx3dGeHyperbola.md#mirrorbypoint)
- [MirroredByAxis](Mx3dGeHyperbola.md#mirroredbyaxis)
- [MirroredByCSYSR](Mx3dGeHyperbola.md#mirroredbycsysr)
- [MirroredByPoint](Mx3dGeHyperbola.md#mirroredbypoint)
- [OtherBranch](Mx3dGeHyperbola.md#otherbranch)
- [Parameter](Mx3dGeHyperbola.md#parameter)
- [Position](Mx3dGeHyperbola.md#position)
- [Rotate](Mx3dGeHyperbola.md#rotate)
- [Rotated](Mx3dGeHyperbola.md#rotated)
- [Scale](Mx3dGeHyperbola.md#scale)
- [Scaled](Mx3dGeHyperbola.md#scaled)
- [SetAxis](Mx3dGeHyperbola.md#setaxis)
- [SetLocation](Mx3dGeHyperbola.md#setlocation)
- [SetMajorRadius](Mx3dGeHyperbola.md#setmajorradius)
- [SetMinorRadius](Mx3dGeHyperbola.md#setminorradius)
- [SetPosition](Mx3dGeHyperbola.md#setposition)
- [Transform](Mx3dGeHyperbola.md#transform)
- [Transformed](Mx3dGeHyperbola.md#transformed)
- [TranslateBy2Points](Mx3dGeHyperbola.md#translateby2points)
- [TranslateByVec](Mx3dGeHyperbola.md#translatebyvec)
- [TranslatedBy2Points](Mx3dGeHyperbola.md#translatedby2points)
- [TranslatedByVec](Mx3dGeHyperbola.md#translatedbyvec)
- [XAxis](Mx3dGeHyperbola.md#xaxis)
- [YAxis](Mx3dGeHyperbola.md#yaxis)

## Constructors

### constructor

• **new Mx3dGeHyperbola**()

The default constructor is used to create an undefined hyperbola.

#### Overrides

Mx3dGeObject.constructor

• **new Mx3dGeHyperbola**(`theA2`, `theMajorRadius`, `theMinorRadius`)

Construct a hyperbola based on the given primary and secondary radii and a coordinate system (Mx3dGeCSYSR).
The coordinate system defines the position of hyperbolas, where:
-The origin is the center of the hyperbola,
-The 'X direction' defines the principal axis of the hyperbola,
-The 'Y direction' defines the secondary axis of a hyperbola.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheA2 | [Mx3dGeCSYSR] (Mx3dGeCSYSR. md) | Define the coordinate system for hyperbolic positions|
|The MajorRadius | number | The principal radius of a hyperbola|
|The MinorRadius | Number | The sub radius of a hyperbola|

#### Overrides

Mx3dGeObject.constructor

## Methods

### Asymptote1

▸ **Asymptote1**(): [`Mx3dGeAxis`](Mx3dGeAxis.md)

Obtain the symmetry axis of the hyperbola.

#### Returns

[`Mx3dGeAxis`](Mx3dGeAxis.md)

Return the axis of symmetry of the hyperbola.

___

### Asymptote2

▸ **Asymptote2**(): [`Mx3dGeAxis`](Mx3dGeAxis.md)

Obtain another axis of symmetry.

#### Returns

[`Mx3dGeAxis`](Mx3dGeAxis.md)

Return the other axis of symmetry of the hyperbola.

___

### Axis

▸ **Axis**(): [`Mx3dGeAxis`](Mx3dGeAxis.md)

Obtain the axis of the hyperbola.

#### Returns

[`Mx3dGeAxis`](Mx3dGeAxis.md)

The axis of a hyperbola.

___

### ConjugateBranch1

▸ **ConjugateBranch1**(): [`Mx3dGeHyperbola`](Mx3dGeHyperbola.md)

Obtain conjugate branch 1.

#### Returns

[`Mx3dGeHyperbola`](Mx3dGeHyperbola.md)

Conjugate branch 1 of hyperbola.

___

### ConjugateBranch2

▸ **ConjugateBranch2**(): [`Mx3dGeHyperbola`](Mx3dGeHyperbola.md)

Obtain conjugate branch 2.

#### Returns

[`Mx3dGeHyperbola`](Mx3dGeHyperbola.md)

Conjugate branch 2 of hyperbola.

___

### Directrix1

▸ **Directrix1**(): [`Mx3dGeAxis`](Mx3dGeAxis.md)

Obtain direct line 1.

#### Returns

[`Mx3dGeAxis`](Mx3dGeAxis.md)

The direct line 1 of the hyperbola.

___

### Directrix2

▸ **Directrix2**(): [`Mx3dGeAxis`](Mx3dGeAxis.md)

Obtain direct line 2.

#### Returns

[`Mx3dGeAxis`](Mx3dGeAxis.md)

The direct line 2 of the hyperbola.

___

### Eccentricity

▸ **Eccentricity**(): `number`

Obtain eccentricity.

#### Returns

`number`

The eccentricity of hyperbolas.

___

### Focal

▸ **Focal**(): `number`

Obtain the focal length.

#### Returns

`number`

The focal length of a hyperbola.

___

### Focus1

▸ **Focus1**(): [`Mx3dGePoint`](Mx3dGePoint.md)

Get Focus 1.

#### Returns

[`Mx3dGePoint`](Mx3dGePoint.md)

The first focal point of a hyperbola.

___

### Focus2

▸ **Focus2**(): [`Mx3dGePoint`](Mx3dGePoint.md)

Get Focus 2.

#### Returns

[`Mx3dGePoint`](Mx3dGePoint.md)

The second focal point of the hyperbola.

___

### Location

▸ **Location**(): [`Mx3dGePoint`](Mx3dGePoint.md)

Obtain the current position point of the hyperbola, which is the center point.

#### Returns

[`Mx3dGePoint`](Mx3dGePoint.md)

Location point.

___

### MajorRadius

▸ **MajorRadius**(): `number`

Obtain the major axis radius of the hyperbola.

#### Returns

`number`

A number representing the major axis radius of a hyperbola.

___

### MinorRadius

▸ **MinorRadius**(): `number`

Obtain the short axis radius of the hyperbola.

#### Returns

`number`

A number representing the short axis radius of a hyperbola.

___

### MirrorByAxis

▸ **MirrorByAxis**(`theA1`): `void`

Mirror hyperbolic curves along the axis.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheA1 | [Mx3dGeAxis] (Mx3dGeAxis. md) | Mirror axis (Mx3dGeAxis)|

#### Returns

`void`

___

### MirrorByCSYSR

▸ **MirrorByCSYSR**(`theA2`): `void`

Mirror hyperbolic curves according to the coordinate system.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheA2 | [Mx3dGeCSYSR] (Mx3dGeCSYSR. md) | Mirror coordinate system (Mx3dGeCSYSR)|

#### Returns

`void`

___

### MirrorByPoint

▸ **MirrorByPoint**(`theP`): `void`

Transform hyperbolas through point mirroring.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheP | [Mx3dGePoint] (Mx3dGePoint. md) | An Mx3dGePoint object representing the center point of a mirror image|

#### Returns

`void`

___

### MirroredByAxis

▸ **MirroredByAxis**(`theA1`): [`Mx3dGeHyperbola`](Mx3dGeHyperbola.md)

Obtain the hyperbolic curve mirrored by axis.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheA1 | [Mx3dGeAxis] (Mx3dGeAxis. md) | Mirror axis (Mx3dGeAxis)|

#### Returns

[`Mx3dGeHyperbola`](Mx3dGeHyperbola.md)

The hyperbolic curve (Mx3dGeHyperbola) mirrored along the axis.

___

### MirroredByCSYSR

▸ **MirroredByCSYSR**(`theA2`): [`Mx3dGeHyperbola`](Mx3dGeHyperbola.md)

Obtain the hyperbolic curve mirrored in the coordinate system.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheA2 | [Mx3dGeCSYSR] (Mx3dGeCSYSR. md) | Mirror coordinate system (Mx3dGeCSYSR)|

#### Returns

[`Mx3dGeHyperbola`](Mx3dGeHyperbola.md)

The hyperbolic curve (Mx3dGeHyperbola) mirrored in the coordinate system.

___

### MirroredByPoint

▸ **MirroredByPoint**(`theP`): [`Mx3dGeHyperbola`](Mx3dGeHyperbola.md)

Obtain the hyperbolic curve after point mirroring.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheP | [Mx3dGePoint] (Mx3dGePoint. md) | Mirror Point (Mx3dGePoint)|

#### Returns

[`Mx3dGeHyperbola`](Mx3dGeHyperbola.md)

The hyperbolic curve (Mx3dGeHyperbola) after point mirroring.

___

### OtherBranch

▸ **OtherBranch**(): [`Mx3dGeHyperbola`](Mx3dGeHyperbola.md)

Obtain another branch of the hyperbola that is symmetric about the main axis with the current branch.

#### Returns

[`Mx3dGeHyperbola`](Mx3dGeHyperbola.md)

Another branch.

___

### Parameter

▸ **Parameter**(): `number`

Get the parameters of the hyperbola.

#### Returns

`number`

A number representing the parameters of a hyperbola.

___

### Position

▸ **Position**(): [`Mx3dGeCSYSR`](Mx3dGeCSYSR.md)

Obtain the coordinate system of the hyperbola and define its position and direction.

#### Returns

[`Mx3dGeCSYSR`](Mx3dGeCSYSR.md)

Coordinate system.

___

### Rotate

▸ **Rotate**(`theA1`, `theAng`): `void`

Rotating hyperbola.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheA1 | [Mx3dGeAxis] (Mx3dGeAxis. md) | Rotation axis (Mx3dGeAxis)|
|TheAng | Number | Rotation angle|

#### Returns

`void`

___

### Rotated

▸ **Rotated**(`theA1`, `theAng`): [`Mx3dGeHyperbola`](Mx3dGeHyperbola.md)

Obtain the rotated hyperbola.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheA1 | [Mx3dGeAxis] (Mx3dGeAxis. md) | Rotation axis (Mx3dGeAxis)|
|TheAng | Number | Rotation angle|

#### Returns

[`Mx3dGeHyperbola`](Mx3dGeHyperbola.md)

The rotated hyperbola (Mx3dGeHyperbola).

___

### Scale

▸ **Scale**(`theP`, `theS`): `void`

Scale the hyperbola.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheP | [Mx3dGePoint] (Mx3dGePoint. md) | Zoom Center (Mx3dGePoint)|
|TheS | Number | Scale ratio|

#### Returns

`void`

___

### Scaled

▸ **Scaled**(`theP`, `theS`): [`Mx3dGeHyperbola`](Mx3dGeHyperbola.md)

Obtain the scaled hyperbolic curve.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheP | [Mx3dGePoint] (Mx3dGePoint. md) | Zoom Center (Mx3dGePoint)|
|TheS | Number | Scale ratio|

#### Returns

[`Mx3dGeHyperbola`](Mx3dGeHyperbola.md)

The scaled hyperbola (Mx3dGeHyperbola).

___

### SetAxis

▸ **SetAxis**(`theA1`): `void`

Set the axis of the hyperbola.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheA1 | [Mx3dGeAxis] (Mx3dGeAxis. md) | The new axis to be set|

#### Returns

`void`

___

### SetLocation

▸ **SetLocation**(`theP`): `void`

Set the position of the hyperbola.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheP | [Mx3dGePoint] (Mx3dGePoint. md) | New location point|

#### Returns

`void`

___

### SetMajorRadius

▸ **SetMajorRadius**(`theMajorRadius`): `void`

Set the main radius of the hyperbola.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|` theMajorRadius ` | ` number ` | New main radius value|

#### Returns

`void`

___

### SetMinorRadius

▸ **SetMinorRadius**(`theMinorRadius`): `void`

Set the secondary radius of the hyperbola.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|The MinorRadius | number | new sub radius value|

#### Returns

`void`

___

### SetPosition

▸ **SetPosition**(`theA2`): `void`

Set up a coordinate system for hyperbolas to redefine their position and direction.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheA2 | [Mx3dGeCSYSR] (Mx3dGeCSYSR. md) | New coordinate system|

#### Returns

`void`

___

### Transform

▸ **Transform**(`theT`): `void`

Transform the hyperbola.

#### Parameters

| Name | Type |
| :------ | :------ |
| `theT` | [`Mx3dGeTrsf`](Mx3dGeTrsf.md) |

#### Returns

`void`

___

### Transformed

▸ **Transformed**(`theT`): [`Mx3dGeHyperbola`](Mx3dGeHyperbola.md)

Obtain the transformed hyperbola.

#### Parameters

| Name | Type |
| :------ | :------ |
| `theT` | [`Mx3dGeTrsf`](Mx3dGeTrsf.md) |

#### Returns

[`Mx3dGeHyperbola`](Mx3dGeHyperbola.md)

The transformed hyperbola (Mx3dGeHyperbola).

___

### TranslateBy2Points

▸ **TranslateBy2Points**(`theP1`, `theP2`): `void`

Translate the hyperbola by point.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheP1 | [Mx3dGePoint] (Mx3dGePoint. md) | Starting point (Mx3dGePoint)|
|TheP2 | [Mx3dGePoint] (Mx3dGePoint. md) | Endpoint (Mx3dGePoint)|

#### Returns

`void`

___

### TranslateByVec

▸ **TranslateByVec**(`theV`): `void`

Translate the hyperbola by vector.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheV | [Mx3dGeVec] (Mx3dGeVec. md) | Translation vector (Mx3dGeVector)|

#### Returns

`void`

___

### TranslatedBy2Points

▸ **TranslatedBy2Points**(`theP1`, `theP2`): [`Mx3dGeHyperbola`](Mx3dGeHyperbola.md)

Obtain the hyperbolic curve after point translation.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheP1 | [Mx3dGePoint] (Mx3dGePoint. md) | Starting point (Mx3dGePoint)|
|TheP2 | [Mx3dGePoint] (Mx3dGePoint. md) | Endpoint (Mx3dGePoint)|

#### Returns

[`Mx3dGeHyperbola`](Mx3dGeHyperbola.md)

The hyperbolic curve (Mx3dGeHyperbola) after point translation.

___

### TranslatedByVec

▸ **TranslatedByVec**(`theV`): [`Mx3dGeHyperbola`](Mx3dGeHyperbola.md)

Obtain the hyperbolic curve translated by vector.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheV | [Mx3dGeVec] (Mx3dGeVec. md) | Translation vector (Mx3dGeVector)|

#### Returns

[`Mx3dGeHyperbola`](Mx3dGeHyperbola.md)

Translated hyperbola (Mx3dGeHyperbola).

___

### XAxis

▸ **XAxis**(): [`Mx3dGeAxis`](Mx3dGeAxis.md)

Obtain the X-axis and define the main direction of the hyperbola.

#### Returns

[`Mx3dGeAxis`](Mx3dGeAxis.md)

X-axis.

___

### YAxis

▸ **YAxis**(): [`Mx3dGeAxis`](Mx3dGeAxis.md)

Obtain the Y-axis and define the secondary direction of the hyperbola.

#### Returns

[`Mx3dGeAxis`](Mx3dGeAxis.md)

Y-axis.
