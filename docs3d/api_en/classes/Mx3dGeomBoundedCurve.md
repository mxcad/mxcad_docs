[mxcad_3d API documentation](../README. md)/Mx3dGeomFundedCurve

# Class: Mx3dGeomBoundedCurve

Base class for representing curves with a limited range

## Hierarchy

- [`Mx3dGeomCurve`](Mx3dGeomCurve.md)

  ↳ **`Mx3dGeomBoundedCurve`**

  ↳↳ [`Mx3dGeomBSplineCurve`](Mx3dGeomBSplineCurve.md)

  ↳↳ [`Mx3dGeomBezierCurve`](Mx3dGeomBezierCurve.md)

## Table of contents

### Methods

- [DynCast](Mx3dGeomBoundedCurve.md#dyncast)
- [DynamicType](Mx3dGeomBoundedCurve.md#dynamictype)
- [MirrorByAxis](Mx3dGeomBoundedCurve.md#mirrorbyaxis)
- [MirrorByCSYSR](Mx3dGeomBoundedCurve.md#mirrorbycsysr)
- [MirrorByPoint](Mx3dGeomBoundedCurve.md#mirrorbypoint)
- [MirroredByAxis](Mx3dGeomBoundedCurve.md#mirroredbyaxis)
- [MirroredByCSYSR](Mx3dGeomBoundedCurve.md#mirroredbycsysr)
- [MirroredByPoint](Mx3dGeomBoundedCurve.md#mirroredbypoint)
- [Period](Mx3dGeomBoundedCurve.md#period)
- [Reversed](Mx3dGeomBoundedCurve.md#reversed)
- [Rotate](Mx3dGeomBoundedCurve.md#rotate)
- [Rotated](Mx3dGeomBoundedCurve.md#rotated)
- [Scale](Mx3dGeomBoundedCurve.md#scale)
- [Scaled](Mx3dGeomBoundedCurve.md#scaled)
- [Transformed](Mx3dGeomBoundedCurve.md#transformed)
- [TranslateBy2Points](Mx3dGeomBoundedCurve.md#translateby2points)
- [TranslateByVec](Mx3dGeomBoundedCurve.md#translatebyvec)
- [TranslatedBy2Points](Mx3dGeomBoundedCurve.md#translatedby2points)
- [TranslatedByVec](Mx3dGeomBoundedCurve.md#translatedbyvec)
- [Value](Mx3dGeomBoundedCurve.md#value)

## Methods

### DynCast

▸ **DynCast**(`theObject`): [`Mx3dGeomBoundedCurve`](Mx3dGeomBoundedCurve.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theObject` | [`Mx3dGeomObject`](Mx3dGeomObject.md) |

#### Returns

[`Mx3dGeomBoundedCurve`](Mx3dGeomBoundedCurve.md)

#### Inherited from

[Mx3dGeomCurve](Mx3dGeomCurve.md).[DynCast](Mx3dGeomCurve.md#dyncast)

___

### DynamicType

▸ **DynamicType**(): `string`

Return the dynamic type of the object.

#### Returns

`string`

A dynamically typed string.

#### Overrides

[Mx3dGeomCurve](Mx3dGeomCurve.md).[DynamicType](Mx3dGeomCurve.md#dynamictype)

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

[Mx3dGeomCurve](Mx3dGeomCurve.md).[MirrorByAxis](Mx3dGeomCurve.md#mirrorbyaxis)

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

[Mx3dGeomCurve](Mx3dGeomCurve.md).[MirrorByCSYSR](Mx3dGeomCurve.md#mirrorbycsysr)

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

[Mx3dGeomCurve](Mx3dGeomCurve.md).[MirrorByPoint](Mx3dGeomCurve.md#mirrorbypoint)

___

### MirroredByAxis

▸ **MirroredByAxis**(`A1`): [`Mx3dGeomBoundedCurve`](Mx3dGeomBoundedCurve.md)

Return the new geometric object transformed through axis mirroring.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|A1 | [Mx3dGeAxis] (Mx3dGeAxis. md) | Axis object|

#### Returns

[`Mx3dGeomBoundedCurve`](Mx3dGeomBoundedCurve.md)

New geometric objects.

#### Inherited from

[Mx3dGeomCurve](Mx3dGeomCurve.md).[MirroredByAxis](Mx3dGeomCurve.md#mirroredbyaxis)

___

### MirroredByCSYSR

▸ **MirroredByCSYSR**(`A2`): [`Mx3dGeomBoundedCurve`](Mx3dGeomBoundedCurve.md)

Return the new geometric object after mirror transformation through the right-handed coordinate system.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|A2 | [Mx3dGeCSYSR] (Mx3dGeCSYSR. md) | Right hand coordinate system object|

#### Returns

[`Mx3dGeomBoundedCurve`](Mx3dGeomBoundedCurve.md)

New geometric objects.

#### Inherited from

[Mx3dGeomCurve](Mx3dGeomCurve.md).[MirroredByCSYSR](Mx3dGeomCurve.md#mirroredbycsysr)

___

### MirroredByPoint

▸ **MirroredByPoint**(`P`): [`Mx3dGeomBoundedCurve`](Mx3dGeomBoundedCurve.md)

Return the new geometric object after point mirror transformation.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|P | [Mx3dGePoint] (Mx3dGePoint. md) | Point object|

#### Returns

[`Mx3dGeomBoundedCurve`](Mx3dGeomBoundedCurve.md)

New geometric objects.

#### Inherited from

[Mx3dGeomCurve](Mx3dGeomCurve.md).[MirroredByPoint](Mx3dGeomCurve.md#mirroredbypoint)

___

### Period

▸ **Period**(): `number`

Return the period of the curve.

#### Returns

`number`

The period of the curve.

#### Inherited from

[Mx3dGeomCurve](Mx3dGeomCurve.md).[Period](Mx3dGeomCurve.md#period)

___

### Reversed

▸ **Reversed**(): [`Mx3dGeomBoundedCurve`](Mx3dGeomBoundedCurve.md)

Return the new geometric curve object in reverse.

#### Returns

[`Mx3dGeomBoundedCurve`](Mx3dGeomBoundedCurve.md)

New geometric curve object.

#### Inherited from

[Mx3dGeomCurve](Mx3dGeomCurve.md).[Reversed](Mx3dGeomCurve.md#reversed)

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

[Mx3dGeomCurve](Mx3dGeomCurve.md).[Rotate](Mx3dGeomCurve.md#rotate)

___

### Rotated

▸ **Rotated**(`A1`, `Ang`): [`Mx3dGeomBoundedCurve`](Mx3dGeomBoundedCurve.md)

Return the rotated new geometric object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|A1 | [Mx3dGeAxis] (Mx3dGeAxis. md) | Axis object|
|Ang | number | Rotation angle|

#### Returns

[`Mx3dGeomBoundedCurve`](Mx3dGeomBoundedCurve.md)

New geometric objects.

#### Inherited from

[Mx3dGeomCurve](Mx3dGeomCurve.md).[Rotated](Mx3dGeomCurve.md#rotated)

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

[Mx3dGeomCurve](Mx3dGeomCurve.md).[Scale](Mx3dGeomCurve.md#scale)

___

### Scaled

▸ **Scaled**(`P`, `S`): [`Mx3dGeomBoundedCurve`](Mx3dGeomBoundedCurve.md)

Return the scaled new geometric object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|P | [Mx3dGePoint] (Mx3dGePoint. md) | Point object|
|S | number | scaling ratio|

#### Returns

[`Mx3dGeomBoundedCurve`](Mx3dGeomBoundedCurve.md)

New geometric objects.

#### Inherited from

[Mx3dGeomCurve](Mx3dGeomCurve.md).[Scaled](Mx3dGeomCurve.md#scaled)

___

### Transformed

▸ **Transformed**(`T`): [`Mx3dGeomBoundedCurve`](Mx3dGeomBoundedCurve.md)

Return the transformed new geometric object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|T | [Mx3dGetStrf] (Mx3dGetStrf. md) | Transform the object|

#### Returns

[`Mx3dGeomBoundedCurve`](Mx3dGeomBoundedCurve.md)

New geometric objects.

#### Inherited from

[Mx3dGeomCurve](Mx3dGeomCurve.md).[Transformed](Mx3dGeomCurve.md#transformed)

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

[Mx3dGeomCurve](Mx3dGeomCurve.md).[TranslateBy2Points](Mx3dGeomCurve.md#translateby2points)

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

[Mx3dGeomCurve](Mx3dGeomCurve.md).[TranslateByVec](Mx3dGeomCurve.md#translatebyvec)

___

### TranslatedBy2Points

▸ **TranslatedBy2Points**(`P1`, `P2`): [`Mx3dGeomBoundedCurve`](Mx3dGeomBoundedCurve.md)

Return the new geometric object after translating through two points.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|P1 | [Mx3dGePoint] (Mx3dGePoint. md) | Starting point object|
|P2 | [Mx3dGePoint] (Mx3dGePoint. md) | End point object|

#### Returns

[`Mx3dGeomBoundedCurve`](Mx3dGeomBoundedCurve.md)

New geometric objects.

#### Inherited from

[Mx3dGeomCurve](Mx3dGeomCurve.md).[TranslatedBy2Points](Mx3dGeomCurve.md#translatedby2points)

___

### TranslatedByVec

▸ **TranslatedByVec**(`V`): [`Mx3dGeomBoundedCurve`](Mx3dGeomBoundedCurve.md)

Return the new geometric object after vector translation.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|V | [Mx3dGeVec] (Mx3dGeVec. md) | Vector object|

#### Returns

[`Mx3dGeomBoundedCurve`](Mx3dGeomBoundedCurve.md)

New geometric objects.

#### Inherited from

[Mx3dGeomCurve](Mx3dGeomCurve.md).[TranslatedByVec](Mx3dGeomCurve.md#translatedbyvec)

___

### Value

▸ **Value**(`U`): [`Mx3dGePoint`](Mx3dGePoint.md)

Return the point at the given parameter U.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|The parameter value of 'U' | 'number'|

#### Returns

[`Mx3dGePoint`](Mx3dGePoint.md)

The point object at the given parameter.

#### Inherited from

[Mx3dGeomCurve](Mx3dGeomCurve.md).[Value](Mx3dGeomCurve.md#value)
