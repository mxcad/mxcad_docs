[mxcad_3d API Document](../README. md)/Mx3dInterpolateBSplineCurve

# Class: Mx3dInterpolateBSplineCurve

Representing the interpolation B-spline curve algorithm.

## Hierarchy

- [`Mx3dBaseObject`](Mx3dBaseObject.md)

  ↳ **`Mx3dInterpolateBSplineCurve`**

## Table of contents

### Constructors

- [constructor](Mx3dInterpolateBSplineCurve.md#constructor)

### Methods

- [Curve](Mx3dInterpolateBSplineCurve.md#curve)
- [IsDone](Mx3dInterpolateBSplineCurve.md#isdone)
- [Load](Mx3dInterpolateBSplineCurve.md#load)
- [LoadEnds](Mx3dInterpolateBSplineCurve.md#loadends)
- [Perform](Mx3dInterpolateBSplineCurve.md#perform)

## Constructors

### constructor

• **new Mx3dInterpolateBSplineCurve**(`Points`, `PeriodicFlag`, `Tolerance`)

Constructor, creating an object for generating B-spline curves.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Points | [Mx3dGePoint] (Mx3dGePoint. md) [] | Interpolation point group|
|PeriodicFlag | boolean | Periodic flag|
|Tolerance | number | precision|

#### Overrides

Mx3dBaseObject.constructor

• **new Mx3dInterpolateBSplineCurve**(`Points`, `Parameters`, `PeriodicFlag`, `Tolerance`)

Constructor, creating an object for generating B-spline curves.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Points | [Mx3dGePoint] (Mx3dGePoint. md) [] | Interpolation point group|
|Parameters | number [] | Parameter value array|
|PeriodicFlag | boolean | Periodic flag|
|Tolerance | number | precision|

#### Overrides

Mx3dBaseObject.constructor

## Methods

### Curve

▸ **Curve**(): [`Mx3dGeomBSplineCurve`](Mx3dGeomBSplineCurve.md)

Obtain the B-spline curve generated by the interpolation algorithm.

#### Returns

[`Mx3dGeomBSplineCurve`](Mx3dGeomBSplineCurve.md)

B-spline curve.

___

### IsDone

▸ **IsDone**(): `boolean`

Determine whether the algorithm has been successfully executed.

#### Returns

`boolean`

Whether the algorithm has executed successfully flag, true successful, False failed.

___

### Load

▸ **Load**(`Tangents`, `TangentFlags`): `void`

Set all interpolation points to be tangential.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Tangents | [Mx3dGeVec] (Mx3dGeVec. md) [] | Tangent array|
|TangentFlags | boolean [] | Apply tangent array|

#### Returns

`void`

___

### LoadEnds

▸ **LoadEnds**(`InitialTangent`, `FinalTangent`): `void`

Set the starting and ending points to be tangential.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|InitialTangent | UniVec | Starting point tangential|
|FinalTangent | UniVec | Tangential endpoint|

#### Returns

`void`

___

### Perform

▸ **Perform**(): `void`

Execute algorithm.

#### Returns

`void`
