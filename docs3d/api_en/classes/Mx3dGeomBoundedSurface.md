[mxcad_3d API Document](../README. md)/Mx3dGeomSounddSurface

# Class: Mx3dGeomBoundedSurface

Represents the base class of a surface within a certain range.

## Hierarchy

- [`Mx3dGeomSurface`](Mx3dGeomSurface.md)

  ↳ **`Mx3dGeomBoundedSurface`**

  ↳↳ [`Mx3dGeomBSplineSurface`](Mx3dGeomBSplineSurface.md)

  ↳↳ [`Mx3dGeomBezierSurface`](Mx3dGeomBezierSurface.md)

## Table of contents

### Methods

- [DynCast](Mx3dGeomBoundedSurface.md#dyncast)
- [DynamicType](Mx3dGeomBoundedSurface.md#dynamictype)
- [MirrorByAxis](Mx3dGeomBoundedSurface.md#mirrorbyaxis)
- [MirrorByCSYSR](Mx3dGeomBoundedSurface.md#mirrorbycsysr)
- [MirrorByPoint](Mx3dGeomBoundedSurface.md#mirrorbypoint)
- [MirroredByAxis](Mx3dGeomBoundedSurface.md#mirroredbyaxis)
- [MirroredByCSYSR](Mx3dGeomBoundedSurface.md#mirroredbycsysr)
- [MirroredByPoint](Mx3dGeomBoundedSurface.md#mirroredbypoint)
- [Rotate](Mx3dGeomBoundedSurface.md#rotate)
- [Rotated](Mx3dGeomBoundedSurface.md#rotated)
- [Scale](Mx3dGeomBoundedSurface.md#scale)
- [Scaled](Mx3dGeomBoundedSurface.md#scaled)
- [TransformParameters](Mx3dGeomBoundedSurface.md#transformparameters)
- [Transformed](Mx3dGeomBoundedSurface.md#transformed)
- [TranslateBy2Points](Mx3dGeomBoundedSurface.md#translateby2points)
- [TranslateByVec](Mx3dGeomBoundedSurface.md#translatebyvec)
- [TranslatedBy2Points](Mx3dGeomBoundedSurface.md#translatedby2points)
- [TranslatedByVec](Mx3dGeomBoundedSurface.md#translatedbyvec)
- [UPeriod](Mx3dGeomBoundedSurface.md#uperiod)
- [UReversed](Mx3dGeomBoundedSurface.md#ureversed)
- [VPeriod](Mx3dGeomBoundedSurface.md#vperiod)
- [VReversed](Mx3dGeomBoundedSurface.md#vreversed)
- [Value](Mx3dGeomBoundedSurface.md#value)

## Methods

### DynCast

▸ **DynCast**(`theObject`): [`Mx3dGeomBoundedSurface`](Mx3dGeomBoundedSurface.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theObject` | [`Mx3dGeomObject`](Mx3dGeomObject.md) |

#### Returns

[`Mx3dGeomBoundedSurface`](Mx3dGeomBoundedSurface.md)

#### Inherited from

[Mx3dGeomSurface](Mx3dGeomSurface.md).[DynCast](Mx3dGeomSurface.md#dyncast)

___

### DynamicType

▸ **DynamicType**(): `string`

Return the dynamic type string of the object.

#### Returns

`string`

Dynamic type string.

#### Overrides

[Mx3dGeomSurface](Mx3dGeomSurface.md).[DynamicType](Mx3dGeomSurface.md#dynamictype)

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

[Mx3dGeomSurface](Mx3dGeomSurface.md).[MirrorByAxis](Mx3dGeomSurface.md#mirrorbyaxis)

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

[Mx3dGeomSurface](Mx3dGeomSurface.md).[MirrorByCSYSR](Mx3dGeomSurface.md#mirrorbycsysr)

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

[Mx3dGeomSurface](Mx3dGeomSurface.md).[MirrorByPoint](Mx3dGeomSurface.md#mirrorbypoint)

___

### MirroredByAxis

▸ **MirroredByAxis**(`A1`): [`Mx3dGeomBoundedSurface`](Mx3dGeomBoundedSurface.md)

Return the new geometric object transformed through axis mirroring.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|A1 | [Mx3dGeAxis] (Mx3dGeAxis. md) | Axis object|

#### Returns

[`Mx3dGeomBoundedSurface`](Mx3dGeomBoundedSurface.md)

New geometric objects.

#### Inherited from

[Mx3dGeomSurface](Mx3dGeomSurface.md).[MirroredByAxis](Mx3dGeomSurface.md#mirroredbyaxis)

___

### MirroredByCSYSR

▸ **MirroredByCSYSR**(`A2`): [`Mx3dGeomBoundedSurface`](Mx3dGeomBoundedSurface.md)

Return the new geometric object after mirror transformation through the right-handed coordinate system.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|A2 | [Mx3dGeCSYSR] (Mx3dGeCSYSR. md) | Right hand coordinate system object|

#### Returns

[`Mx3dGeomBoundedSurface`](Mx3dGeomBoundedSurface.md)

New geometric objects.

#### Inherited from

[Mx3dGeomSurface](Mx3dGeomSurface.md).[MirroredByCSYSR](Mx3dGeomSurface.md#mirroredbycsysr)

___

### MirroredByPoint

▸ **MirroredByPoint**(`P`): [`Mx3dGeomBoundedSurface`](Mx3dGeomBoundedSurface.md)

Return the new geometric object after point mirror transformation.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|P | [Mx3dGePoint] (Mx3dGePoint. md) | Point object|

#### Returns

[`Mx3dGeomBoundedSurface`](Mx3dGeomBoundedSurface.md)

New geometric objects.

#### Inherited from

[Mx3dGeomSurface](Mx3dGeomSurface.md).[MirroredByPoint](Mx3dGeomSurface.md#mirroredbypoint)

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

[Mx3dGeomSurface](Mx3dGeomSurface.md).[Rotate](Mx3dGeomSurface.md#rotate)

___

### Rotated

▸ **Rotated**(`A1`, `Ang`): [`Mx3dGeomBoundedSurface`](Mx3dGeomBoundedSurface.md)

Return the rotated new geometric object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|A1 | [Mx3dGeAxis] (Mx3dGeAxis. md) | Axis object|
|Ang | number | Rotation angle|

#### Returns

[`Mx3dGeomBoundedSurface`](Mx3dGeomBoundedSurface.md)

New geometric objects.

#### Inherited from

[Mx3dGeomSurface](Mx3dGeomSurface.md).[Rotated](Mx3dGeomSurface.md#rotated)

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

[Mx3dGeomSurface](Mx3dGeomSurface.md).[Scale](Mx3dGeomSurface.md#scale)

___

### Scaled

▸ **Scaled**(`P`, `S`): [`Mx3dGeomBoundedSurface`](Mx3dGeomBoundedSurface.md)

Return the scaled new geometric object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|P | [Mx3dGePoint] (Mx3dGePoint. md) | Point object|
|S | number | scaling ratio|

#### Returns

[`Mx3dGeomBoundedSurface`](Mx3dGeomBoundedSurface.md)

New geometric objects.

#### Inherited from

[Mx3dGeomSurface](Mx3dGeomSurface.md).[Scaled](Mx3dGeomSurface.md#scaled)

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

#### Inherited from

[Mx3dGeomSurface](Mx3dGeomSurface.md).[TransformParameters](Mx3dGeomSurface.md#transformparameters)

___

### Transformed

▸ **Transformed**(`T`): [`Mx3dGeomBoundedSurface`](Mx3dGeomBoundedSurface.md)

Return the transformed new geometric object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|T | [Mx3dGetStrf] (Mx3dGetStrf. md) | Transform the object|

#### Returns

[`Mx3dGeomBoundedSurface`](Mx3dGeomBoundedSurface.md)

New geometric objects.

#### Inherited from

[Mx3dGeomSurface](Mx3dGeomSurface.md).[Transformed](Mx3dGeomSurface.md#transformed)

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

[Mx3dGeomSurface](Mx3dGeomSurface.md).[TranslateBy2Points](Mx3dGeomSurface.md#translateby2points)

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

[Mx3dGeomSurface](Mx3dGeomSurface.md).[TranslateByVec](Mx3dGeomSurface.md#translatebyvec)

___

### TranslatedBy2Points

▸ **TranslatedBy2Points**(`P1`, `P2`): [`Mx3dGeomBoundedSurface`](Mx3dGeomBoundedSurface.md)

Return the new geometric object after translating through two points.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|P1 | [Mx3dGePoint] (Mx3dGePoint. md) | Starting point object|
|P2 | [Mx3dGePoint] (Mx3dGePoint. md) | End point object|

#### Returns

[`Mx3dGeomBoundedSurface`](Mx3dGeomBoundedSurface.md)

New geometric objects.

#### Inherited from

[Mx3dGeomSurface](Mx3dGeomSurface.md).[TranslatedBy2Points](Mx3dGeomSurface.md#translatedby2points)

___

### TranslatedByVec

▸ **TranslatedByVec**(`V`): [`Mx3dGeomBoundedSurface`](Mx3dGeomBoundedSurface.md)

Return the new geometric object after vector translation.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|V | [Mx3dGeVec] (Mx3dGeVec. md) | Vector object|

#### Returns

[`Mx3dGeomBoundedSurface`](Mx3dGeomBoundedSurface.md)

New geometric objects.

#### Inherited from

[Mx3dGeomSurface](Mx3dGeomSurface.md).[TranslatedByVec](Mx3dGeomSurface.md#translatedbyvec)

___

### UPeriod

▸ **UPeriod**(): `number`

Return the period of the surface in the U direction.

#### Returns

`number`

The period of the surface in the U direction.

#### Inherited from

[Mx3dGeomSurface](Mx3dGeomSurface.md).[UPeriod](Mx3dGeomSurface.md#uperiod)

___

### UReversed

▸ **UReversed**(): [`Mx3dGeomBoundedSurface`](Mx3dGeomBoundedSurface.md)

Parameterization of reversing the U direction.

#### Returns

[`Mx3dGeomBoundedSurface`](Mx3dGeomBoundedSurface.md)

Return the current object to implement a chain call.

#### Inherited from

[Mx3dGeomSurface](Mx3dGeomSurface.md).[UReversed](Mx3dGeomSurface.md#ureversed)

___

### VPeriod

▸ **VPeriod**(): `number`

Return the period of the surface in the V direction.

#### Returns

`number`

The period of the surface in the V direction.

#### Inherited from

[Mx3dGeomSurface](Mx3dGeomSurface.md).[VPeriod](Mx3dGeomSurface.md#vperiod)

___

### VReversed

▸ **VReversed**(): [`Mx3dGeomBoundedSurface`](Mx3dGeomBoundedSurface.md)

Parameterization of reversing the V direction.

#### Returns

[`Mx3dGeomBoundedSurface`](Mx3dGeomBoundedSurface.md)

Return the current object to implement a chain call.

#### Inherited from

[Mx3dGeomSurface](Mx3dGeomSurface.md).[VReversed](Mx3dGeomSurface.md#vreversed)

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

#### Inherited from

[Mx3dGeomSurface](Mx3dGeomSurface.md).[Value](Mx3dGeomSurface.md#value)
