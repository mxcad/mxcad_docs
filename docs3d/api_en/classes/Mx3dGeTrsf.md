[mxcad_3d API Document](../README. md)/Mx3dGetTrsf

# Class: Mx3dGeTrsf

Representing geometric transformations

## Hierarchy

- [`Mx3dGeObject`](Mx3dGeObject.md)

  ↳ **`Mx3dGeTrsf`**

## Table of contents

### Constructors

- [constructor](Mx3dGeTrsf.md#constructor)

### Methods

- [Invert](Mx3dGeTrsf.md#invert)
- [Inverted](Mx3dGeTrsf.md#inverted)
- [IsNegative](Mx3dGeTrsf.md#isnegative)
- [Multiplied](Mx3dGeTrsf.md#multiplied)
- [Multiply](Mx3dGeTrsf.md#multiply)
- [Power](Mx3dGeTrsf.md#power)
- [Powered](Mx3dGeTrsf.md#powered)
- [PreMultiply](Mx3dGeTrsf.md#premultiply)
- [ScaleFactor](Mx3dGeTrsf.md#scalefactor)
- [SetMirrorByAxis](Mx3dGeTrsf.md#setmirrorbyaxis)
- [SetMirrorByCSYSR](Mx3dGeTrsf.md#setmirrorbycsysr)
- [SetMirrorByPoint](Mx3dGeTrsf.md#setmirrorbypoint)
- [SetRotation](Mx3dGeTrsf.md#setrotation)
- [SetScale](Mx3dGeTrsf.md#setscale)
- [SetScaleFactor](Mx3dGeTrsf.md#setscalefactor)
- [SetTranslationBy2Points](Mx3dGeTrsf.md#settranslationby2points)
- [SetTranslationByVec](Mx3dGeTrsf.md#settranslationbyvec)
- [SetTranslationPart](Mx3dGeTrsf.md#settranslationpart)
- [SetValues](Mx3dGeTrsf.md#setvalues)
- [Transforms](Mx3dGeTrsf.md#transforms)
- [Value](Mx3dGeTrsf.md#value)

## Constructors

### constructor

• **new Mx3dGeTrsf**()

#### Overrides

Mx3dGeObject.constructor

## Methods

### Invert

▸ **Invert**(): `void`

Transpose the transformation matrix

#### Returns

`void`

___

### Inverted

▸ **Inverted**(): [`Mx3dGeTrsf`](Mx3dGeTrsf.md)

Obtain the transposed matrix of the transformation matrix

#### Returns

[`Mx3dGeTrsf`](Mx3dGeTrsf.md)

Transpose matrix

___

### IsNegative

▸ **IsNegative**(): `boolean`

Determine whether the determinant of this transformation matrix is negative

#### Returns

`boolean`

Is it negative

___

### Multiplied

▸ **Multiplied**(`t`): [`Mx3dGeTrsf`](Mx3dGeTrsf.md)

Obtain the result of matrix multiplication, [res]=[me] * t, where [res] represents the result, [me] represents itself, and t is another transformation matrix

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|T | [Mx3dGetStrf] (Mx3dGetStrf. md) | Another transformation matrix|

#### Returns

[`Mx3dGeTrsf`](Mx3dGeTrsf.md)

The result of matrix multiplication

___

### Multiply

▸ **Multiply**(`t`): `void`

Multiplying oneself by another transformation matrix, [me]=[me] * t, where [me] represents oneself and t is another transformation matrix

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|T | [Mx3dGetStrf] (Mx3dGetStrf. md) | Another transformation matrix|

#### Returns

`void`

___

### Power

▸ **Power**(`n`): `void`

Perform a power n operation on oneself, [me] * [me] *.... * [me], where [me] represents oneself and is multiplied n times

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|N | number | times|

#### Returns

`void`

___

### Powered

▸ **Powered**(`n`): [`Mx3dGeTrsf`](Mx3dGeTrsf.md)

Obtain the result of the nth power operation of the current transformation matrix, [res]=[me] * [me] *.... * [me], where [res] represents the result, [me] represents itself, and n [me] are multiplied

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|N | number | times|

#### Returns

[`Mx3dGeTrsf`](Mx3dGeTrsf.md)

The result to the power of n

___

### PreMultiply

▸ **PreMultiply**(`t`): `void`

Another transformation matrix multiplied by itself, [me]=t * [me], [me] represents itself, and t is another transformation matrix

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|T | [Mx3dGetStrf] (Mx3dGetStrf. md) | Another transformation matrix|

#### Returns

`void`

___

### ScaleFactor

▸ **ScaleFactor**(): `number`

Obtain the scaling ratio of the transformation

#### Returns

`number`

Scale ratio

___

### SetMirrorByAxis

▸ **SetMirrorByAxis**(`axis`): `void`

Set up axis mirroring transformation

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Axis | [Mx3dGeAxis] (Mx3dGeAxis. md) | Mirror Axis|

#### Returns

`void`

___

### SetMirrorByCSYSR

▸ **SetMirrorByCSYSR**(`csysr`): `void`

Set up a coordinate system mirror transformation, where the mirror plane is the XOY plane of the coordinate system

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Csysr | [Mx3dGeCSYSR] (Mx3dGeCSYSR. md) | Mirror coordinate system|

#### Returns

`void`

___

### SetMirrorByPoint

▸ **SetMirrorByPoint**(`point`): `void`

Set up point mirror transformation

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Point | UniPoint | Mirror Point|

#### Returns

`void`

___

### SetRotation

▸ **SetRotation**(`axis`, `ang`): `void`

Set the transformation to rotate a certain angle according to the axis

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Axis | [Mx3dGeAxis] (Mx3dGeAxis. md) | Rotation axis|
|'ang' | 'number' | Rotation angle|

#### Returns

`void`

___

### SetScale

▸ **SetScale**(`point`, `s`): `void`

Set up scaling transformation based on points and a certain proportion

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Point | UniPoint | Zoom Point|
|S | number | scaling ratio|

#### Returns

`void`

___

### SetScaleFactor

▸ **SetScaleFactor**(`s`): `void`

Set zoom ratio

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|S | number | scaling ratio|

#### Returns

`void`

___

### SetTranslationBy2Points

▸ **SetTranslationBy2Points**(`point1`, `point2`): `void`

Set the translation transformation of the vector formed by subtracting the endpoint from the starting point

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Point1 | UniPoint | Starting Point|
|Point2 | UniPoint | Endpoint|

#### Returns

`void`

___

### SetTranslationByVec

▸ **SetTranslationByVec**(`vec`): `void`

Set the translation transformation according to the vector, with the direction and distance of the movement being the direction and magnitude of the vector, respectively

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Vec | UniVec | Vector|

#### Returns

`void`

___

### SetTranslationPart

▸ **SetTranslationPart**(`vec`): `void`

Set up separate translation transformations based on vectors

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Vec | [Mx3dGeVec] (Mx3dGeVec. md) | Vector|

#### Returns

`void`

___

### SetValues

▸ **SetValues**(`a11`, `a12`, `a13`, `a14`, `a21`, `a22`, `a23`, `a24`, `a31`, `a32`, `a33`, `a34`): `void`

Set affine transformation matrix other than translation transformation

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|A11 | number | Line 1, Column 1|
|A12 | number | Line 1, Column 2|
|A13 | number | Line 1, Column 3|
|A14 | number | Line 1, Column 4|
|A21 | number | 2nd row, 1st column|
|A22 | number | 2nd row, 2nd column|
|A23 | number | 2nd row, 3rd column|
|A24 | number | 2nd row, 4th column|
|A31 | number | Line 3, Column 1|
|A32 | number | Line 3, Column 2|
|A33 | number | Line 3, Column 3|
|A34 | Number | Row 3, Column 4|

#### Returns

`void`

___

### Transforms

▸ **Transforms**(`x`, `y`, `z`): `void`

Transform a point using the current transformation matrix. The parameters are referenced and will be modified by the function

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `z` | `number` |

#### Returns

`void`

___

### Value

▸ **Value**(`row`, `col`): `number`

Retrieve the element values of the specified row and column in the transformation matrix

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Row | number | row|
|Col | number | column|

#### Returns

`number`

Element value
