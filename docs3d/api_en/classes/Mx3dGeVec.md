[mxcad_3d API documentation](../README. md)/Mx3dGeVec

# Class: Mx3dGeVec

A class that represents a three-dimensional vector. Used for 3D geometric operations.

## Hierarchy

- [`Mx3dGeObject`](Mx3dGeObject.md)

  ↳ **`Mx3dGeVec`**

## Table of contents

### Constructors

- [constructor](Mx3dGeVec.md#constructor)

### Methods

- [Add](Mx3dGeVec.md#add)
- [Added](Mx3dGeVec.md#added)
- [Angle](Mx3dGeVec.md#angle)
- [AngleWithRef](Mx3dGeVec.md#anglewithref)
- [Cross](Mx3dGeVec.md#cross)
- [CrossCross](Mx3dGeVec.md#crosscross)
- [CrossCrossed](Mx3dGeVec.md#crosscrossed)
- [CrossMagnitude](Mx3dGeVec.md#crossmagnitude)
- [CrossSquareMagnitude](Mx3dGeVec.md#crosssquaremagnitude)
- [Crossed](Mx3dGeVec.md#crossed)
- [Divide](Mx3dGeVec.md#divide)
- [Divided](Mx3dGeVec.md#divided)
- [Dot](Mx3dGeVec.md#dot)
- [DotCross](Mx3dGeVec.md#dotcross)
- [IsEqual](Mx3dGeVec.md#isequal)
- [IsNormal](Mx3dGeVec.md#isnormal)
- [IsOpposite](Mx3dGeVec.md#isopposite)
- [IsParallel](Mx3dGeVec.md#isparallel)
- [Magnitude](Mx3dGeVec.md#magnitude)
- [MirrorByAxis](Mx3dGeVec.md#mirrorbyaxis)
- [MirrorByCSYSR](Mx3dGeVec.md#mirrorbycsysr)
- [MirrorByVec](Mx3dGeVec.md#mirrorbyvec)
- [MirroredByAxis](Mx3dGeVec.md#mirroredbyaxis)
- [MirroredByCSYSR](Mx3dGeVec.md#mirroredbycsysr)
- [MirroredByVec](Mx3dGeVec.md#mirroredbyvec)
- [Multiplied](Mx3dGeVec.md#multiplied)
- [Multiply](Mx3dGeVec.md#multiply)
- [Normalize](Mx3dGeVec.md#normalize)
- [Normalized](Mx3dGeVec.md#normalized)
- [Reverse](Mx3dGeVec.md#reverse)
- [Reversed](Mx3dGeVec.md#reversed)
- [Rotate](Mx3dGeVec.md#rotate)
- [Rotated](Mx3dGeVec.md#rotated)
- [Scale](Mx3dGeVec.md#scale)
- [Scaled](Mx3dGeVec.md#scaled)
- [SetLinearForm](Mx3dGeVec.md#setlinearform)
- [SetX](Mx3dGeVec.md#setx)
- [SetXYZ](Mx3dGeVec.md#setxyz)
- [SetY](Mx3dGeVec.md#sety)
- [SetZ](Mx3dGeVec.md#setz)
- [SquareMagnitude](Mx3dGeVec.md#squaremagnitude)
- [Subtract](Mx3dGeVec.md#subtract)
- [Subtracted](Mx3dGeVec.md#subtracted)
- [Transform](Mx3dGeVec.md#transform)
- [Transformed](Mx3dGeVec.md#transformed)
- [X](Mx3dGeVec.md#x)
- [Y](Mx3dGeVec.md#y)
- [Z](Mx3dGeVec.md#z)

## Constructors

### constructor

• **new Mx3dGeVec**()

Construct a new Mx3dGeVec instance.
It can be without parameters, or with three numerical parameters, or with two points.

#### Overrides

Mx3dGeObject.constructor

• **new Mx3dGeVec**(`x`, `y`, `z`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `z` | `number` |

#### Overrides

Mx3dGeObject.constructor

• **new Mx3dGeVec**(`thePoint1`, `thePoint2`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `thePoint1` | [`Mx3dGePoint`](Mx3dGePoint.md) |
| `thePoint2` | [`Mx3dGePoint`](Mx3dGePoint.md) |

#### Overrides

Mx3dGeObject.constructor

## Methods

### Add

▸ **Add**(`other`): `void`

Add the current vector to another vector.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Other | [Mx3dGeVec] (Mx3dGeVec. md) | Another vector|

#### Returns

`void`

___

### Added

▸ **Added**(`other`): [`Mx3dGeVec`](Mx3dGeVec.md)

Return the result of adding the current vector to another vector.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Other | [Mx3dGeVec] (Mx3dGeVec. md) | Another vector|

#### Returns

[`Mx3dGeVec`](Mx3dGeVec.md)

The vector after addition.

___

### Angle

▸ **Angle**(`other`): `number`

Calculate the angle between two vectors.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Other | [Mx3dGeVec] (Mx3dGeVec. md) | Another vector|

#### Returns

`number`

Angle value.

___

### AngleWithRef

▸ **AngleWithRef**(`other`, `ref`): `number`

Calculate the angle between two vectors with a reference vector.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Other | [Mx3dGeVec] (Mx3dGeVec. md) | Another vector|
|Ref | [Mx3dGeVec] (Mx3dGeVec. md) | Reference vector|

#### Returns

`number`

Angle values with reference vectors.

___

### Cross

▸ **Cross**(`right`): `void`

Calculate the cross product of two vectors.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|` right ` | [` Mx3dGeVec `] (Mx3dGeVec. md) | Another vector|

#### Returns

`void`

___

### CrossCross

▸ **CrossCross**(`v1`, `v2`): `void`

Calculate the cross product of three vectors.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|V1 | [Mx3dGeVec] (Mx3dGeVec. md) | Vector 1|
|V2 | [Mx3dGeVec] (Mx3dGeVec. md) | Vector 2|

#### Returns

`void`

___

### CrossCrossed

▸ **CrossCrossed**(`v1`, `v2`): [`Mx3dGeVec`](Mx3dGeVec.md)

Return the cross product of three vectors.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|V1 | [Mx3dGeVec] (Mx3dGeVec. md) | Vector 1|
|V2 | [Mx3dGeVec] (Mx3dGeVec. md) | Vector 2|

#### Returns

[`Mx3dGeVec`](Mx3dGeVec.md)

The vector after cross product.

___

### CrossMagnitude

▸ **CrossMagnitude**(`right`): `number`

Calculate the modulus of the cross product of two vectors.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|` right ` | [` Mx3dGeVec `] (Mx3dGeVec. md) | Another vector|

#### Returns

`number`

The module of cross product.

___

### CrossSquareMagnitude

▸ **CrossSquareMagnitude**(`right`): `number`

Calculate the square of the cross product modulus of two vectors.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|` right ` | [` Mx3dGeVec `] (Mx3dGeVec. md) | Another vector|

#### Returns

`number`

The square of the cross product modulus.

___

### Crossed

▸ **Crossed**(`right`): [`Mx3dGeVec`](Mx3dGeVec.md)

Return the cross product of two vectors.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|` right ` | [` Mx3dGeVec `] (Mx3dGeVec. md) | Another vector|

#### Returns

[`Mx3dGeVec`](Mx3dGeVec.md)

The vector after cross product.

___

### Divide

▸ **Divide**(`scalar`): `void`

Divide the current vector by a scalar.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Scalar | Number | Scalar value|

#### Returns

`void`

___

### Divided

▸ **Divided**(`scalar`): [`Mx3dGeVec`](Mx3dGeVec.md)

Returns the result of dividing the current vector by a scalar.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Scalar | Number | Scalar value|

#### Returns

[`Mx3dGeVec`](Mx3dGeVec.md)

The vector divided by the scalar.

___

### Dot

▸ **Dot**(`other`): `number`

Calculate the dot product of two vectors.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Other | [Mx3dGeVec] (Mx3dGeVec. md) | Another vector|

#### Returns

`number`

Dot product value.

___

### DotCross

▸ **DotCross**(`v1`, `v2`): `number`

Calculate the dot cross product of three vectors.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|V1 | [Mx3dGeVec] (Mx3dGeVec. md) | Vector 1|
|V2 | [Mx3dGeVec] (Mx3dGeVec. md) | Vector 2|

#### Returns

`number`

Point cross product value.

___

### IsEqual

▸ **IsEqual**(`other`, `linearTolerance`, `angularTolerance`): `boolean`

Determine whether two vectors are equal.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Other | [Mx3dGeVec] (Mx3dGeVec. md) | Another vector|
|Linear Tolerance | Number | Linear Tolerance|
|Angular Tolerance | Number | Angular Tolerance|

#### Returns

`boolean`

Is it equal.

___

### IsNormal

▸ **IsNormal**(`other`, `angularTolerance`): `boolean`

Determine whether two vectors are normal vectors to each other.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Other | [Mx3dGeVec] (Mx3dGeVec. md) | Another vector|
|Angular Tolerance | Number | Angular Tolerance|

#### Returns

`boolean`

Are they normal vectors to each other.

___

### IsOpposite

▸ **IsOpposite**(`other`, `angularTolerance`): `boolean`

Determine whether two vectors are opposite to each other.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Other | [Mx3dGeVec] (Mx3dGeVec. md) | Another vector|
|Angular Tolerance | Number | Angular Tolerance|

#### Returns

`boolean`

Are they mutually opposite.

___

### IsParallel

▸ **IsParallel**(`other`, `angularTolerance`): `boolean`

Determine whether two vectors are parallel.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Other | [Mx3dGeVec] (Mx3dGeVec. md) | Another vector|
|Angular Tolerance | Number | Angular Tolerance|

#### Returns

`boolean`

Is it parallel.

___

### Magnitude

▸ **Magnitude**(): `number`

Obtain the modulus of the vector.

#### Returns

`number`

The modulus of a vector.

___

### MirrorByAxis

▸ **MirrorByAxis**(`axis`): `void`

Mirror the current vector based on an axis.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Axis | [Mx3dGeAxis] (Mx3dGeAxis. md) | Mirror axis|

#### Returns

`void`

___

### MirrorByCSYSR

▸ **MirrorByCSYSR**(`csysr`): `void`

Mirror the current vector based on a coordinate system.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Csysr | [Mx3dGeCSYSR] (Mx3dGeCSYSR. md) | Coordinate system|

#### Returns

`void`

___

### MirrorByVec

▸ **MirrorByVec**(`vec`): `void`

Mirror the current vector based on a vector.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Vec | [Mx3dGeVec] (Mx3dGeVec. md) | Mirror vector|

#### Returns

`void`

___

### MirroredByAxis

▸ **MirroredByAxis**(`axis`): [`Mx3dGeVec`](Mx3dGeVec.md)

Return the vector mirrored based on an axis.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Axis | [Mx3dGeAxis] (Mx3dGeAxis. md) | Mirror axis|

#### Returns

[`Mx3dGeVec`](Mx3dGeVec.md)

The vector after mirroring.

___

### MirroredByCSYSR

▸ **MirroredByCSYSR**(`csysr`): [`Mx3dGeVec`](Mx3dGeVec.md)

Return the vector mirrored based on a coordinate system.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Csysr | [Mx3dGeCSYSR] (Mx3dGeCSYSR. md) | Coordinate system|

#### Returns

[`Mx3dGeVec`](Mx3dGeVec.md)

The vector after mirroring.

___

### MirroredByVec

▸ **MirroredByVec**(`vec`): [`Mx3dGeVec`](Mx3dGeVec.md)

Return the vector mirrored based on a vector.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Vec | [Mx3dGeVec] (Mx3dGeVec. md) | Mirror vector|

#### Returns

[`Mx3dGeVec`](Mx3dGeVec.md)

The vector after mirroring.

___

### Multiplied

▸ **Multiplied**(`scalar`): [`Mx3dGeVec`](Mx3dGeVec.md)

Returns the result of multiplying the current vector by a scalar.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Scalar | Number | Scalar value|

#### Returns

[`Mx3dGeVec`](Mx3dGeVec.md)

The vector multiplied by a scalar.

___

### Multiply

▸ **Multiply**(`scalar`): `void`

Multiply the current vector by a scalar.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Scalar | Number | Scalar value|

#### Returns

`void`

___

### Normalize

▸ **Normalize**(): `void`

Normalize the current vector.

#### Returns

`void`

___

### Normalized

▸ **Normalized**(): [`Mx3dGeVec`](Mx3dGeVec.md)

Return the normalized vector.

#### Returns

[`Mx3dGeVec`](Mx3dGeVec.md)

Normalized vector.

___

### Reverse

▸ **Reverse**(): `void`

Reverse the direction of the current vector.

#### Returns

`void`

___

### Reversed

▸ **Reversed**(): [`Mx3dGeVec`](Mx3dGeVec.md)

Return the reversed vector.

#### Returns

[`Mx3dGeVec`](Mx3dGeVec.md)

The reversed vector.

___

### Rotate

▸ **Rotate**(`axis`, `ang`): `void`

Rotate the current vector.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Axis | [Mx3dGeAxis] (Mx3dGeAxis. md) | Rotation axis|
|'ang' | 'number' | Rotation angle|

#### Returns

`void`

___

### Rotated

▸ **Rotated**(`axis`, `ang`): [`Mx3dGeVec`](Mx3dGeVec.md)

Return the rotated vector.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Axis | [Mx3dGeAxis] (Mx3dGeAxis. md) | Rotation axis|
|'ang' | 'number' | Rotation angle|

#### Returns

[`Mx3dGeVec`](Mx3dGeVec.md)

The rotated vector.

___

### Scale

▸ **Scale**(`s`): `void`

Scale the current vector.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|S | number | scaling factor|

#### Returns

`void`

___

### Scaled

▸ **Scaled**(`s`): [`Mx3dGeVec`](Mx3dGeVec.md)

Return the scaled vector.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|S | number | scaling factor|

#### Returns

[`Mx3dGeVec`](Mx3dGeVec.md)

The scaled vector.

___

### SetLinearForm

▸ **SetLinearForm**(`v1`, `v2`): `void`

Set the current vector as a linear combination.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|V1 | [Mx3dGeVec] (Mx3dGeVec. md) | Vector 1|
|V2 | [Mx3dGeVec] (Mx3dGeVec. md) | Vector 2|

#### Returns

`void`

▸ **SetLinearForm**(`a1`, `v1`, `v2`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a1` | `number` |
| `v1` | [`Mx3dGeVec`](Mx3dGeVec.md) |
| `v2` | [`Mx3dGeVec`](Mx3dGeVec.md) |

#### Returns

`void`

▸ **SetLinearForm**(`a1`, `v1`, `a2`, `v2`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a1` | `number` |
| `v1` | [`Mx3dGeVec`](Mx3dGeVec.md) |
| `a2` | `number` |
| `v2` | [`Mx3dGeVec`](Mx3dGeVec.md) |

#### Returns

`void`

▸ **SetLinearForm**(`a1`, `v1`, `a2`, `v2`, `v3`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a1` | `number` |
| `v1` | [`Mx3dGeVec`](Mx3dGeVec.md) |
| `a2` | `number` |
| `v2` | [`Mx3dGeVec`](Mx3dGeVec.md) |
| `v3` | [`Mx3dGeVec`](Mx3dGeVec.md) |

#### Returns

`void`

▸ **SetLinearForm**(`a1`, `v1`, `a2`, `v2`, `a3`, `v3`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a1` | `number` |
| `v1` | [`Mx3dGeVec`](Mx3dGeVec.md) |
| `a2` | `number` |
| `v2` | [`Mx3dGeVec`](Mx3dGeVec.md) |
| `a3` | `number` |
| `v3` | [`Mx3dGeVec`](Mx3dGeVec.md) |

#### Returns

`void`

▸ **SetLinearForm**(`a1`, `v1`, `a2`, `v2`, `a3`, `v3`, `v4`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a1` | `number` |
| `v1` | [`Mx3dGeVec`](Mx3dGeVec.md) |
| `a2` | `number` |
| `v2` | [`Mx3dGeVec`](Mx3dGeVec.md) |
| `a3` | `number` |
| `v3` | [`Mx3dGeVec`](Mx3dGeVec.md) |
| `v4` | [`Mx3dGeVec`](Mx3dGeVec.md) |

#### Returns

`void`

___

### SetX

▸ **SetX**(`x`): `void`

Set the x-component of the vector.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|X | number | New x component|

#### Returns

`void`

___

### SetXYZ

▸ **SetXYZ**(`x`, `y`, `z`): `void`

Set the x of the vector, Y and z components.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|X | number | New x component|
|Y | number | New y component|
|Z | number | New z component|

#### Returns

`void`

___

### SetY

▸ **SetY**(`y`): `void`

Set the y-component of the vector.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Y | number | New y component|

#### Returns

`void`

___

### SetZ

▸ **SetZ**(`z`): `void`

Set the z-component of the vector.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Z | number | New z component|

#### Returns

`void`

___

### SquareMagnitude

▸ **SquareMagnitude**(): `number`

Obtain the square of the vector modulus.

#### Returns

`number`

The square of the vector modulus.

___

### Subtract

▸ **Subtract**(`right`): `void`

Subtract another vector from the current vector.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|` right ` | [` Mx3dGeVec `] (Mx3dGeVec. md) | Another vector|

#### Returns

`void`

___

### Subtracted

▸ **Subtracted**(`right`): [`Mx3dGeVec`](Mx3dGeVec.md)

Return the result of subtracting another vector from the current vector.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|` right ` | [` Mx3dGeVec `] (Mx3dGeVec. md) | Another vector|

#### Returns

[`Mx3dGeVec`](Mx3dGeVec.md)

Subtracted vector.

___

### Transform

▸ **Transform**(`t`): `void`

Transform the current vector based on the coordinate system.

#### Parameters

| Name | Type |
| :------ | :------ |
| `t` | [`Mx3dGeTrsf`](Mx3dGeTrsf.md) |

#### Returns

`void`

___

### Transformed

▸ **Transformed**(`t`): [`Mx3dGeVec`](Mx3dGeVec.md)

Return the vector transformed according to the coordinate system.

#### Parameters

| Name | Type |
| :------ | :------ |
| `t` | [`Mx3dGeTrsf`](Mx3dGeTrsf.md) |

#### Returns

[`Mx3dGeVec`](Mx3dGeVec.md)

The transformed vector.

___

### X

▸ **X**(): `number`

Obtain the x-component of the vector.

#### Returns

`number`

X component.

___

### Y

▸ **Y**(): `number`

Obtain the y-component of the vector.

#### Returns

`number`

Y component.

___

### Z

▸ **Z**(): `number`

Obtain the z-component of the vector.

#### Returns

`number`

Z component.
