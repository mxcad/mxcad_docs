[mxcad_3d API Document](../README. md)/Mx3dGeomCurve

# Class: Mx3dGeomCurve

The class representing geometric curves inherits from Mx3dGeomObject.

## Hierarchy

- [`Mx3dGeomObject`](Mx3dGeomObject.md)

  ↳ **`Mx3dGeomCurve`**

  ↳↳ [`Mx3dGeomConic`](Mx3dGeomConic.md)

  ↳↳ [`Mx3dGeomLine`](Mx3dGeomLine.md)

  ↳↳ [`Mx3dGeomBoundedCurve`](Mx3dGeomBoundedCurve.md)

## Table of contents

### Constructors

- [constructor](Mx3dGeomCurve.md#constructor)

### Methods

- [DynCast](Mx3dGeomCurve.md#dyncast)
- [DynamicType](Mx3dGeomCurve.md#dynamictype)
- [MirrorByAxis](Mx3dGeomCurve.md#mirrorbyaxis)
- [MirrorByCSYSR](Mx3dGeomCurve.md#mirrorbycsysr)
- [MirrorByPoint](Mx3dGeomCurve.md#mirrorbypoint)
- [MirroredByAxis](Mx3dGeomCurve.md#mirroredbyaxis)
- [MirroredByCSYSR](Mx3dGeomCurve.md#mirroredbycsysr)
- [MirroredByPoint](Mx3dGeomCurve.md#mirroredbypoint)
- [Period](Mx3dGeomCurve.md#period)
- [Reversed](Mx3dGeomCurve.md#reversed)
- [Rotate](Mx3dGeomCurve.md#rotate)
- [Rotated](Mx3dGeomCurve.md#rotated)
- [Scale](Mx3dGeomCurve.md#scale)
- [Scaled](Mx3dGeomCurve.md#scaled)
- [Transformed](Mx3dGeomCurve.md#transformed)
- [TranslateBy2Points](Mx3dGeomCurve.md#translateby2points)
- [TranslateByVec](Mx3dGeomCurve.md#translatebyvec)
- [TranslatedBy2Points](Mx3dGeomCurve.md#translatedby2points)
- [TranslatedByVec](Mx3dGeomCurve.md#translatedbyvec)
- [Value](Mx3dGeomCurve.md#value)

## Constructors

### constructor

• **new Mx3dGeomCurve**(`p?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `p?` | `object` |

#### Overrides

[Mx3dGeomObject](Mx3dGeomObject.md).[constructor](Mx3dGeomObject.md#constructor)

## Methods

### DynCast

▸ **DynCast**(`theObject`): [`Mx3dGeomCurve`](Mx3dGeomCurve.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theObject` | [`Mx3dGeomObject`](Mx3dGeomObject.md) |

#### Returns

[`Mx3dGeomCurve`](Mx3dGeomCurve.md)

#### Inherited from

[Mx3dGeomObject](Mx3dGeomObject.md).[DynCast](Mx3dGeomObject.md#dyncast)

___

### DynamicType

▸ **DynamicType**(): `string`

Return the dynamic type of the object.

#### Returns

`string`

A dynamically typed string.

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

▸ **MirroredByAxis**(`A1`): [`Mx3dGeomCurve`](Mx3dGeomCurve.md)

Return the new geometric object transformed through axis mirroring.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|A1 | [Mx3dGeAxis] (Mx3dGeAxis. md) | Axis object|

#### Returns

[`Mx3dGeomCurve`](Mx3dGeomCurve.md)

New geometric objects.

#### Inherited from

[Mx3dGeomObject](Mx3dGeomObject.md).[MirroredByAxis](Mx3dGeomObject.md#mirroredbyaxis)

___

### MirroredByCSYSR

▸ **MirroredByCSYSR**(`A2`): [`Mx3dGeomCurve`](Mx3dGeomCurve.md)

Return the new geometric object after mirror transformation through the right-handed coordinate system.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|A2 | [Mx3dGeCSYSR] (Mx3dGeCSYSR. md) | Right hand coordinate system object|

#### Returns

[`Mx3dGeomCurve`](Mx3dGeomCurve.md)

New geometric objects.

#### Inherited from

[Mx3dGeomObject](Mx3dGeomObject.md).[MirroredByCSYSR](Mx3dGeomObject.md#mirroredbycsysr)

___

### MirroredByPoint

▸ **MirroredByPoint**(`P`): [`Mx3dGeomCurve`](Mx3dGeomCurve.md)

Return the new geometric object after point mirror transformation.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|P | [Mx3dGePoint] (Mx3dGePoint. md) | Point object|

#### Returns

[`Mx3dGeomCurve`](Mx3dGeomCurve.md)

New geometric objects.

#### Inherited from

[Mx3dGeomObject](Mx3dGeomObject.md).[MirroredByPoint](Mx3dGeomObject.md#mirroredbypoint)

___

### Period

▸ **Period**(): `number`

Return the period of the curve.

#### Returns

`number`

The period of the curve.

___

### Reversed

▸ **Reversed**(): [`Mx3dGeomCurve`](Mx3dGeomCurve.md)

Return the new geometric curve object in reverse.

#### Returns

[`Mx3dGeomCurve`](Mx3dGeomCurve.md)

New geometric curve object.

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

▸ **Rotated**(`A1`, `Ang`): [`Mx3dGeomCurve`](Mx3dGeomCurve.md)

Return the rotated new geometric object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|A1 | [Mx3dGeAxis] (Mx3dGeAxis. md) | Axis object|
|Ang | number | Rotation angle|

#### Returns

[`Mx3dGeomCurve`](Mx3dGeomCurve.md)

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

▸ **Scaled**(`P`, `S`): [`Mx3dGeomCurve`](Mx3dGeomCurve.md)

Return the scaled new geometric object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|P | [Mx3dGePoint] (Mx3dGePoint. md) | Point object|
|S | number | scaling ratio|

#### Returns

[`Mx3dGeomCurve`](Mx3dGeomCurve.md)

New geometric objects.

#### Inherited from

[Mx3dGeomObject](Mx3dGeomObject.md).[Scaled](Mx3dGeomObject.md#scaled)

___

### Transformed

▸ **Transformed**(`T`): [`Mx3dGeomCurve`](Mx3dGeomCurve.md)

Return the transformed new geometric object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|T | [Mx3dGetStrf] (Mx3dGetStrf. md) | Transform the object|

#### Returns

[`Mx3dGeomCurve`](Mx3dGeomCurve.md)

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

▸ **TranslatedBy2Points**(`P1`, `P2`): [`Mx3dGeomCurve`](Mx3dGeomCurve.md)

Return the new geometric object after translating through two points.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|P1 | [Mx3dGePoint] (Mx3dGePoint. md) | Starting point object|
|P2 | [Mx3dGePoint] (Mx3dGePoint. md) | End point object|

#### Returns

[`Mx3dGeomCurve`](Mx3dGeomCurve.md)

New geometric objects.

#### Inherited from

[Mx3dGeomObject](Mx3dGeomObject.md).[TranslatedBy2Points](Mx3dGeomObject.md#translatedby2points)

___

### TranslatedByVec

▸ **TranslatedByVec**(`V`): [`Mx3dGeomCurve`](Mx3dGeomCurve.md)

Return the new geometric object after vector translation.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|V | [Mx3dGeVec] (Mx3dGeVec. md) | Vector object|

#### Returns

[`Mx3dGeomCurve`](Mx3dGeomCurve.md)

New geometric objects.

#### Inherited from

[Mx3dGeomObject](Mx3dGeomObject.md).[TranslatedByVec](Mx3dGeomObject.md#translatedbyvec)

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
