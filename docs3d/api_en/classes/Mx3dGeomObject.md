[mxcad_3d API Document](../README. md)/Mx3dGeomObject

# Class: Mx3dGeomObject

Represents the base class of parameter geometric objects.

## Hierarchy

- [`Mx3dBaseObject`](Mx3dBaseObject.md)

  ↳ **`Mx3dGeomObject`**

  ↳↳ [`Mx3dGeomCurve`](Mx3dGeomCurve.md)

  ↳↳ [`Mx3dGeomSurface`](Mx3dGeomSurface.md)

## Table of contents

### Constructors

- [constructor](Mx3dGeomObject.md#constructor)

### Methods

- [DynCast](Mx3dGeomObject.md#dyncast)
- [MirrorByAxis](Mx3dGeomObject.md#mirrorbyaxis)
- [MirrorByCSYSR](Mx3dGeomObject.md#mirrorbycsysr)
- [MirrorByPoint](Mx3dGeomObject.md#mirrorbypoint)
- [MirroredByAxis](Mx3dGeomObject.md#mirroredbyaxis)
- [MirroredByCSYSR](Mx3dGeomObject.md#mirroredbycsysr)
- [MirroredByPoint](Mx3dGeomObject.md#mirroredbypoint)
- [Rotate](Mx3dGeomObject.md#rotate)
- [Rotated](Mx3dGeomObject.md#rotated)
- [Scale](Mx3dGeomObject.md#scale)
- [Scaled](Mx3dGeomObject.md#scaled)
- [Transformed](Mx3dGeomObject.md#transformed)
- [TranslateBy2Points](Mx3dGeomObject.md#translateby2points)
- [TranslateByVec](Mx3dGeomObject.md#translatebyvec)
- [TranslatedBy2Points](Mx3dGeomObject.md#translatedby2points)
- [TranslatedByVec](Mx3dGeomObject.md#translatedbyvec)

## Constructors

### constructor

• **new Mx3dGeomObject**(`p?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `p?` | `object` |

## Methods

### DynCast

▸ **DynCast**(`theObject`): [`Mx3dGeomObject`](Mx3dGeomObject.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theObject` | [`Mx3dGeomObject`](Mx3dGeomObject.md) |

#### Returns

[`Mx3dGeomObject`](Mx3dGeomObject.md)

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

___

### MirroredByAxis

▸ **MirroredByAxis**(`A1`): [`Mx3dGeomObject`](Mx3dGeomObject.md)

Return the new geometric object transformed through axis mirroring.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|A1 | [Mx3dGeAxis] (Mx3dGeAxis. md) | Axis object|

#### Returns

[`Mx3dGeomObject`](Mx3dGeomObject.md)

New geometric objects.

___

### MirroredByCSYSR

▸ **MirroredByCSYSR**(`A2`): [`Mx3dGeomObject`](Mx3dGeomObject.md)

Return the new geometric object after mirror transformation through the right-handed coordinate system.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|A2 | [Mx3dGeCSYSR] (Mx3dGeCSYSR. md) | Right hand coordinate system object|

#### Returns

[`Mx3dGeomObject`](Mx3dGeomObject.md)

New geometric objects.

___

### MirroredByPoint

▸ **MirroredByPoint**(`P`): [`Mx3dGeomObject`](Mx3dGeomObject.md)

Return the new geometric object after point mirror transformation.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|P | [Mx3dGePoint] (Mx3dGePoint. md) | Point object|

#### Returns

[`Mx3dGeomObject`](Mx3dGeomObject.md)

New geometric objects.

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

___

### Rotated

▸ **Rotated**(`A1`, `Ang`): [`Mx3dGeomObject`](Mx3dGeomObject.md)

Return the rotated new geometric object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|A1 | [Mx3dGeAxis] (Mx3dGeAxis. md) | Axis object|
|Ang | number | Rotation angle|

#### Returns

[`Mx3dGeomObject`](Mx3dGeomObject.md)

New geometric objects.

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

___

### Scaled

▸ **Scaled**(`P`, `S`): [`Mx3dGeomObject`](Mx3dGeomObject.md)

Return the scaled new geometric object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|P | [Mx3dGePoint] (Mx3dGePoint. md) | Point object|
|S | number | scaling ratio|

#### Returns

[`Mx3dGeomObject`](Mx3dGeomObject.md)

New geometric objects.

___

### Transformed

▸ **Transformed**(`T`): [`Mx3dGeomObject`](Mx3dGeomObject.md)

Return the transformed new geometric object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|T | [Mx3dGetStrf] (Mx3dGetStrf. md) | Transform the object|

#### Returns

[`Mx3dGeomObject`](Mx3dGeomObject.md)

New geometric objects.

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

___

### TranslatedBy2Points

▸ **TranslatedBy2Points**(`P1`, `P2`): [`Mx3dGeomObject`](Mx3dGeomObject.md)

Return the new geometric object after translating through two points.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|P1 | [Mx3dGePoint] (Mx3dGePoint. md) | Starting point object|
|P2 | [Mx3dGePoint] (Mx3dGePoint. md) | End point object|

#### Returns

[`Mx3dGeomObject`](Mx3dGeomObject.md)

New geometric objects.

___

### TranslatedByVec

▸ **TranslatedByVec**(`V`): [`Mx3dGeomObject`](Mx3dGeomObject.md)

Return the new geometric object after vector translation.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|V | [Mx3dGeVec] (Mx3dGeVec. md) | Vector object|

#### Returns

[`Mx3dGeomObject`](Mx3dGeomObject.md)

New geometric objects.
