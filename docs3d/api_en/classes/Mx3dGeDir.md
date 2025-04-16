[mxcad_3d API Document](../README. md)/Mx3dGeDir

# Class: Mx3dGeDir

The vector representing direction always has a modulus of 1

## Hierarchy

- [`Mx3dGeObject`](Mx3dGeObject.md)

  ↳ **`Mx3dGeDir`**

## Table of contents

### Constructors

- [constructor](Mx3dGeDir.md#constructor)

### Methods

- [Angle](Mx3dGeDir.md#angle)
- [AngleWithRef](Mx3dGeDir.md#anglewithref)
- [Cross](Mx3dGeDir.md#cross)
- [CrossCross](Mx3dGeDir.md#crosscross)
- [CrossCrossed](Mx3dGeDir.md#crosscrossed)
- [Crossed](Mx3dGeDir.md#crossed)
- [Dot](Mx3dGeDir.md#dot)
- [DotCross](Mx3dGeDir.md#dotcross)
- [IsEqual](Mx3dGeDir.md#isequal)
- [IsNormal](Mx3dGeDir.md#isnormal)
- [IsOpposite](Mx3dGeDir.md#isopposite)
- [IsParallel](Mx3dGeDir.md#isparallel)
- [MirrorByAxis](Mx3dGeDir.md#mirrorbyaxis)
- [MirrorByCSYSR](Mx3dGeDir.md#mirrorbycsysr)
- [MirrorByVec](Mx3dGeDir.md#mirrorbyvec)
- [MirroredByAxis](Mx3dGeDir.md#mirroredbyaxis)
- [MirroredByCSYSR](Mx3dGeDir.md#mirroredbycsysr)
- [MirroredByVec](Mx3dGeDir.md#mirroredbyvec)
- [Reverse](Mx3dGeDir.md#reverse)
- [Reversed](Mx3dGeDir.md#reversed)
- [Rotate](Mx3dGeDir.md#rotate)
- [Rotated](Mx3dGeDir.md#rotated)
- [SetX](Mx3dGeDir.md#setx)
- [SetXYZ](Mx3dGeDir.md#setxyz)
- [SetY](Mx3dGeDir.md#sety)
- [SetZ](Mx3dGeDir.md#setz)
- [Transform](Mx3dGeDir.md#transform)
- [Transformed](Mx3dGeDir.md#transformed)
- [X](Mx3dGeDir.md#x)
- [Y](Mx3dGeDir.md#y)
- [Z](Mx3dGeDir.md#z)

## Constructors

### constructor

• **new Mx3dGeDir**()

Constructor function

#### Overrides

Mx3dGeObject.constructor

• **new Mx3dGeDir**(`theXv`, `theYv`, `theZv`)

Constructor function

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheXv | number | X direction|
|TheYv | number | Y direction|
|TheZv | number | Z direction|

#### Overrides

Mx3dGeObject.constructor

## Methods

### Angle

▸ **Angle**(`theOther`): `number`

Obtain the angle with another direction, range [0, PI]

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheOther | [Mx3dGeDir] (Mx3dGeDir. md) | Another direction|

#### Returns

`number`

included angle

___

### AngleWithRef

▸ **AngleWithRef**(`theOther`, `theVRef`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theOther` | [`Mx3dGeDir`](Mx3dGeDir.md) |
| `theVRef` | [`Mx3dGeDir`](Mx3dGeDir.md) |

#### Returns

`number`

___

### Cross

▸ **Cross**(`theRight`): `void`

[me]=[me] ^ theRight, [me] represents self, ^ represents cross product

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheRight | [Mx3dGeDir] (Mx3dGeDir. md) | Another direction vector|

#### Returns

`void`

___

### CrossCross

▸ **CrossCross**(`theV1`, `theV2`): `void`

[me] ^ (theV1 ^ theV2), [me] represents self, ^ represents cross product

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheV1 | [Mx3dGeDir] (Mx3dGeDir. md) | Another direction vector|
|TheV2 | [Mx3dGeDir] (Mx3dGeDir. md) | Another direction vector|

#### Returns

`void`

___

### CrossCrossed

▸ **CrossCrossed**(`theV1`, `theV2`): [`Mx3dGeDir`](Mx3dGeDir.md)

[res] ^ (theV1 ^ theV2), [me] represents self, [res] represents result, ^ represents cross product

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheV1 | [Mx3dGeDir] (Mx3dGeDir. md) | Another direction vector|
|TheV2 | [Mx3dGeDir] (Mx3dGeDir. md) | Another direction vector|

#### Returns

[`Mx3dGeDir`](Mx3dGeDir.md)

Cross product result

___

### Crossed

▸ **Crossed**(`theRight`): [`Mx3dGeDir`](Mx3dGeDir.md)

[res]=[me] ^ theRight, [me] represents self, [res] represents result, ^ represents cross product

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheRight | [Mx3dGeDir] (Mx3dGeDir. md) | Another direction vector|

#### Returns

[`Mx3dGeDir`](Mx3dGeDir.md)

Cross product result

___

### Dot

▸ **Dot**(`theOther`): `number`

[res]=[me] * theOther, [me] represents self, [res] represents result, * represents dot multiplication

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheOther | [Mx3dGeDir] (Mx3dGeDir. md) | Another direction vector|

#### Returns

`number`

Point multiplication result

___

### DotCross

▸ **DotCross**(`theV1`, `theV2`): `number`

[res]=[me] * (theV1 ^ theV2), [me] represents self, [res] represents result, ^ represents cross product, * represents dot product

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheV1 | [Mx3dGeDir] (Mx3dGeDir. md) | Another direction vector|
|TheV2 | [Mx3dGeDir] (Mx3dGeDir. md) | Another direction vector|

#### Returns

`number`

Final multiplication result

___

### IsEqual

▸ **IsEqual**(`theOther`, `theAngularTolerance`): `boolean`

Determine if it is equal to another direction

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheOther | [Mx3dGeDir] (Mx3dGeDir. md) | Another direction|
|The Angular Tolerance | Number | Angle Accuracy|

#### Returns

`boolean`

Is it in the same direction

___

### IsNormal

▸ **IsNormal**(`theOther`, `theAngularTolerance`): `boolean`

Determine if it is perpendicular to another direction

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheOther | [Mx3dGeDir] (Mx3dGeDir. md) | Another direction|
|The Angular Tolerance | Number | Angle Accuracy|

#### Returns

`boolean`

Is it vertical

___

### IsOpposite

▸ **IsOpposite**(`theOther`, `theAngularTolerance`): `boolean`

Determine if it is in the opposite direction to another direction

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheOther | [Mx3dGeDir] (Mx3dGeDir. md) | Another direction|
|The Angular Tolerance | Number | Angle Accuracy|

#### Returns

`boolean`

Is it the opposite

___

### IsParallel

▸ **IsParallel**(`theOther`, `theAngularTolerance`): `boolean`

Determine whether it is parallel to another direction (parallel in either the same or opposite direction)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheOther | [Mx3dGeDir] (Mx3dGeDir. md) | Another direction|
|The Angular Tolerance | Number | Angle Accuracy|

#### Returns

`boolean`

Is it parallel

___

### MirrorByAxis

▸ **MirrorByAxis**(`theA1`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theA1` | [`Mx3dGeAxis`](Mx3dGeAxis.md) |

#### Returns

`void`

___

### MirrorByCSYSR

▸ **MirrorByCSYSR**(`theA2`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theA2` | [`Mx3dGeCSYSR`](Mx3dGeCSYSR.md) |

#### Returns

`void`

___

### MirrorByVec

▸ **MirrorByVec**(`theV`): `void`

Mirror according to a vector in the direction of the mirror center

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheV | [Mx3dGeDir] (Mx3dGeDir. md) | Mirror center direction|

#### Returns

`void`

___

### MirroredByAxis

▸ **MirroredByAxis**(`theA1`): [`Mx3dGeDir`](Mx3dGeDir.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theA1` | [`Mx3dGeAxis`](Mx3dGeAxis.md) |

#### Returns

[`Mx3dGeDir`](Mx3dGeDir.md)

___

### MirroredByCSYSR

▸ **MirroredByCSYSR**(`theA2`): [`Mx3dGeDir`](Mx3dGeDir.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theA2` | [`Mx3dGeCSYSR`](Mx3dGeCSYSR.md) |

#### Returns

[`Mx3dGeDir`](Mx3dGeDir.md)

___

### MirroredByVec

▸ **MirroredByVec**(`theV`): [`Mx3dGeDir`](Mx3dGeDir.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theV` | [`Mx3dGeDir`](Mx3dGeDir.md) |

#### Returns

[`Mx3dGeDir`](Mx3dGeDir.md)

___

### Reverse

▸ **Reverse**(): `void`

Flip direction

#### Returns

`void`

___

### Reversed

▸ **Reversed**(): [`Mx3dGeDir`](Mx3dGeDir.md)

Obtain the result after flipping direction

#### Returns

[`Mx3dGeDir`](Mx3dGeDir.md)

The result after flipping the direction

___

### Rotate

▸ **Rotate**(`theA1`, `theAng`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theA1` | [`Mx3dGeAxis`](Mx3dGeAxis.md) |
| `theAng` | `number` |

#### Returns

`void`

___

### Rotated

▸ **Rotated**(`theA1`, `theAng`): [`Mx3dGeDir`](Mx3dGeDir.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theA1` | [`Mx3dGeAxis`](Mx3dGeAxis.md) |
| `theAng` | `number` |

#### Returns

[`Mx3dGeDir`](Mx3dGeDir.md)

___

### SetX

▸ **SetX**(`theX`): `void`

Set the size in the X direction

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheX | Number | Size in the X direction|

#### Returns

`void`

___

### SetXYZ

▸ **SetXYZ**(`theXv`, `theYv`, `theZv`): `void`

Set the size in the X, Y, Z directions

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheXv | Number | Size in the X direction|
|TheYv | Number | Size in the Y direction|
|TheZv | Number | Size in the Z direction|

#### Returns

`void`

___

### SetY

▸ **SetY**(`theY`): `void`

Set the size in the Y direction

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheY | Number | Size in the Y direction|

#### Returns

`void`

___

### SetZ

▸ **SetZ**(`theZ`): `void`

Set the size in the Z direction

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheZ | Number | Size in the Z direction|

#### Returns

`void`

___

### Transform

▸ **Transform**(`theT`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theT` | [`Mx3dGeTrsf`](Mx3dGeTrsf.md) |

#### Returns

`void`

___

### Transformed

▸ **Transformed**(`theT`): [`Mx3dGeDir`](Mx3dGeDir.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theT` | [`Mx3dGeTrsf`](Mx3dGeTrsf.md) |

#### Returns

[`Mx3dGeDir`](Mx3dGeDir.md)

___

### X

▸ **X**(): `number`

Obtain the size in the X direction

#### Returns

`number`

The size in the X direction

___

### Y

▸ **Y**(): `number`

Obtain the size in the Y direction

#### Returns

`number`

The size in the Y direction

___

### Z

▸ **Z**(): `number`

Obtain the size in the Z direction

#### Returns

`number`

The size in the Z direction
