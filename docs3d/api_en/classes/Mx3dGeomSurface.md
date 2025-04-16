[mxcad_3d API Document](../README. md)/Mx3dGeomSurface

# Class: Mx3dGeomSurface

The Mx3dGeomSurface class provides methods for 3D surface manipulation.

## Hierarchy

- [`Mx3dGeomObject`](Mx3dGeomObject.md)

  ↳ **`Mx3dGeomSurface`**

  ↳↳ [`Mx3dGeomElementarySurface`](Mx3dGeomElementarySurface.md)

  ↳↳ [`Mx3dGeomBoundedSurface`](Mx3dGeomBoundedSurface.md)

## Table of contents

### Methods

- [DynCast](Mx3dGeomSurface.md#dyncast)
- [DynamicType](Mx3dGeomSurface.md#dynamictype)
- [MirrorByAxis](Mx3dGeomSurface.md#mirrorbyaxis)
- [MirrorByCSYSR](Mx3dGeomSurface.md#mirrorbycsysr)
- [MirrorByPoint](Mx3dGeomSurface.md#mirrorbypoint)
- [MirroredByAxis](Mx3dGeomSurface.md#mirroredbyaxis)
- [MirroredByCSYSR](Mx3dGeomSurface.md#mirroredbycsysr)
- [MirroredByPoint](Mx3dGeomSurface.md#mirroredbypoint)
- [Rotate](Mx3dGeomSurface.md#rotate)
- [Rotated](Mx3dGeomSurface.md#rotated)
- [Scale](Mx3dGeomSurface.md#scale)
- [Scaled](Mx3dGeomSurface.md#scaled)
- [TransformParameters](Mx3dGeomSurface.md#transformparameters)
- [Transformed](Mx3dGeomSurface.md#transformed)
- [TranslateBy2Points](Mx3dGeomSurface.md#translateby2points)
- [TranslateByVec](Mx3dGeomSurface.md#translatebyvec)
- [TranslatedBy2Points](Mx3dGeomSurface.md#translatedby2points)
- [TranslatedByVec](Mx3dGeomSurface.md#translatedbyvec)
- [UPeriod](Mx3dGeomSurface.md#uperiod)
- [UReversed](Mx3dGeomSurface.md#ureversed)
- [VPeriod](Mx3dGeomSurface.md#vperiod)
- [VReversed](Mx3dGeomSurface.md#vreversed)
- [Value](Mx3dGeomSurface.md#value)

## Methods

### DynCast

▸ **DynCast**(`theObject`): [`Mx3dGeomSurface`](Mx3dGeomSurface.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theObject` | [`Mx3dGeomObject`](Mx3dGeomObject.md) |

#### Returns

[`Mx3dGeomSurface`](Mx3dGeomSurface.md)

#### Inherited from

[Mx3dGeomObject](Mx3dGeomObject.md).[DynCast](Mx3dGeomObject.md#dyncast)

___

### DynamicType

▸ **DynamicType**(): `string`

Return the dynamic type of the object.

#### Returns

`string`

A dynamically typed string representation.

___

### MirrorByAxis

▸ **MirrorByAxis**(`A1`): `void`

Mirror transform geometric objects through axes.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|A1 | [Mx3dGeAxis] (Mx3dGeAxis. md) | Axis object|

#### Returns

`void`

#### Inherited from

[Mx3dGeomObject](Mx3dGeomObject.md).[MirrorByAxis](Mx3dGeomObject.md#mirrorbyaxis)

___

### MirrorByCSYSR

▸ **MirrorByCSYSR**(`A2`): `void`

Mirror transform geometric objects using a right-handed coordinate system.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|A2 | [Mx3dGeCSYSR] (Mx3dGeCSYSR. md) | Right hand coordinate system object|

#### Returns

`void`

#### Inherited from

[Mx3dGeomObject](Mx3dGeomObject.md).[MirrorByCSYSR](Mx3dGeomObject.md#mirrorbycsysr)

___

### MirrorByPoint

▸ **MirrorByPoint**(`P`): `void`

Mirror transform geometric objects through points.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|P | [Mx3dGePoint] (Mx3dGePoint. md) | Point object|

#### Returns

`void`

#### Inherited from

[Mx3dGeomObject](Mx3dGeomObject.md).[MirrorByPoint](Mx3dGeomObject.md#mirrorbypoint)

___

### MirroredByAxis

▸ **MirroredByAxis**(`A1`): [`Mx3dGeomSurface`](Mx3dGeomSurface.md)

Return the new geometric object transformed through axis mirroring.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|A1 | [Mx3dGeAxis] (Mx3dGeAxis. md) | Axis object|

#### Returns

[`Mx3dGeomSurface`](Mx3dGeomSurface.md)

New geometric objects.

#### Inherited from

[Mx3dGeomObject](Mx3dGeomObject.md).[MirroredByAxis](Mx3dGeomObject.md#mirroredbyaxis)

___

### MirroredByCSYSR

▸ **MirroredByCSYSR**(`A2`): [`Mx3dGeomSurface`](Mx3dGeomSurface.md)

Return the new geometric object after mirror transformation through the right-handed coordinate system.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|A2 | [Mx3dGeCSYSR] (Mx3dGeCSYSR. md) | Right hand coordinate system object|

#### Returns

[`Mx3dGeomSurface`](Mx3dGeomSurface.md)

New geometric objects.

#### Inherited from

[Mx3dGeomObject](Mx3dGeomObject.md).[MirroredByCSYSR](Mx3dGeomObject.md#mirroredbycsysr)

___

### MirroredByPoint

▸ **MirroredByPoint**(`P`): [`Mx3dGeomSurface`](Mx3dGeomSurface.md)

Return the new geometric object after point mirror transformation.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|P | [Mx3dGePoint] (Mx3dGePoint. md) | Point object|

#### Returns

[`Mx3dGeomSurface`](Mx3dGeomSurface.md)

New geometric objects.

#### Inherited from

[Mx3dGeomObject](Mx3dGeomObject.md).[MirroredByPoint](Mx3dGeomObject.md#mirroredbypoint)

___

### Rotate

▸ **Rotate**(`A1`, `Ang`): `void`

Rotate geometric objects.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|A1 | [Mx3dGeAxis] (Mx3dGeAxis. md) | Axis object|
|Ang | number | Rotation angle|

#### Returns

`void`

#### Inherited from

[Mx3dGeomObject](Mx3dGeomObject.md).[Rotate](Mx3dGeomObject.md#rotate)

___

### Rotated

▸ **Rotated**(`A1`, `Ang`): [`Mx3dGeomSurface`](Mx3dGeomSurface.md)

Return the rotated new geometric object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|A1 | [Mx3dGeAxis] (Mx3dGeAxis. md) | Axis object|
|Ang | number | Rotation angle|

#### Returns

[`Mx3dGeomSurface`](Mx3dGeomSurface.md)

New geometric objects.

#### Inherited from

[Mx3dGeomObject](Mx3dGeomObject.md).[Rotated](Mx3dGeomObject.md#rotated)

___

### Scale

▸ **Scale**(`P`, `S`): `void`

Scale geometric objects.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|P | [Mx3dGePoint] (Mx3dGePoint. md) | Point object|
|S | number | scaling ratio|

#### Returns

`void`

#### Inherited from

[Mx3dGeomObject](Mx3dGeomObject.md).[Scale](Mx3dGeomObject.md#scale)

___

### Scaled

▸ **Scaled**(`P`, `S`): [`Mx3dGeomSurface`](Mx3dGeomSurface.md)

Return the scaled new geometric object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|P | [Mx3dGePoint] (Mx3dGePoint. md) | Point object|
|S | number | scaling ratio|

#### Returns

[`Mx3dGeomSurface`](Mx3dGeomSurface.md)

New geometric objects.

#### Inherited from

[Mx3dGeomObject](Mx3dGeomObject.md).[Scaled](Mx3dGeomObject.md#scaled)

___

### TransformParameters

▸ **TransformParameters**(`UV`, `T`): `void`

Transform the surface parameters according to the given transformation matrix T.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|UV | [dU: number, dV: number] | Parameter array containing the values of U and V|
|T | [Mx3dGetStrf] (Mx3dGetStrf. md) | Transform matrix|

#### Returns

`void`

___

### Transformed

▸ **Transformed**(`T`): [`Mx3dGeomSurface`](Mx3dGeomSurface.md)

Return the transformed new geometric object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|T | [Mx3dGetStrf] (Mx3dGetStrf. md) | Transform the object|

#### Returns

[`Mx3dGeomSurface`](Mx3dGeomSurface.md)

New geometric objects.

#### Inherited from

[Mx3dGeomObject](Mx3dGeomObject.md).[Transformed](Mx3dGeomObject.md#transformed)

___

### TranslateBy2Points

▸ **TranslateBy2Points**(`P1`, `P2`): `void`

Translate geometric objects through two points.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|P1 | [Mx3dGePoint] (Mx3dGePoint. md) | Starting point object|
|P2 | [Mx3dGePoint] (Mx3dGePoint. md) | End point object|

#### Returns

`void`

#### Inherited from

[Mx3dGeomObject](Mx3dGeomObject.md).[TranslateBy2Points](Mx3dGeomObject.md#translateby2points)

___

### TranslateByVec

▸ **TranslateByVec**(`V`): `void`

Translate geometric objects through vectors.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|V | [Mx3dGeVec] (Mx3dGeVec. md) | Vector object|

#### Returns

`void`

#### Inherited from

[Mx3dGeomObject](Mx3dGeomObject.md).[TranslateByVec](Mx3dGeomObject.md#translatebyvec)

___

### TranslatedBy2Points

▸ **TranslatedBy2Points**(`P1`, `P2`): [`Mx3dGeomSurface`](Mx3dGeomSurface.md)

Return the new geometric object after translating through two points.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|P1 | [Mx3dGePoint] (Mx3dGePoint. md) | Starting point object|
|P2 | [Mx3dGePoint] (Mx3dGePoint. md) | End point object|

#### Returns

[`Mx3dGeomSurface`](Mx3dGeomSurface.md)

New geometric objects.

#### Inherited from

[Mx3dGeomObject](Mx3dGeomObject.md).[TranslatedBy2Points](Mx3dGeomObject.md#translatedby2points)

___

### TranslatedByVec

▸ **TranslatedByVec**(`V`): [`Mx3dGeomSurface`](Mx3dGeomSurface.md)

Return the new geometric object after vector translation.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|V | [Mx3dGeVec] (Mx3dGeVec. md) | Vector object|

#### Returns

[`Mx3dGeomSurface`](Mx3dGeomSurface.md)

New geometric objects.

#### Inherited from

[Mx3dGeomObject](Mx3dGeomObject.md).[TranslatedByVec](Mx3dGeomObject.md#translatedbyvec)

___

### UPeriod

▸ **UPeriod**(): `number`

Return the period of the surface in the U direction.

#### Returns

`number`

The period of the surface in the U direction.

___

### UReversed

▸ **UReversed**(): [`Mx3dGeomSurface`](Mx3dGeomSurface.md)

Parameterization of reversing the U direction.

#### Returns

[`Mx3dGeomSurface`](Mx3dGeomSurface.md)

Return the current object to implement a chain call.

___

### VPeriod

▸ **VPeriod**(): `number`

Return the period of the surface in the V direction.

#### Returns

`number`

The period of the surface in the V direction.

___

### VReversed

▸ **VReversed**(): [`Mx3dGeomSurface`](Mx3dGeomSurface.md)

Parameterization of reversing the V direction.

#### Returns

[`Mx3dGeomSurface`](Mx3dGeomSurface.md)

Return the current object to implement a chain call.

___

### Value

▸ **Value**(`U`, `V`): [`Mx3dGePoint`](Mx3dGePoint.md)

Calculate the points on the surface corresponding to the parameters (U, V).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|U | number | Surface parameter U|
|V | number | Surface parameter V|

#### Returns

[`Mx3dGePoint`](Mx3dGePoint.md)

Corresponding point.
