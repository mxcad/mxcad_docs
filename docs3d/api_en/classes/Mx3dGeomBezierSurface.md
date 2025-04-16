[mxcad_3d API Document](../README. md)/Mx3dGeomBizierSurface

# Class: Mx3dGeomBezierSurface

Represents a Bezier surface, inherited from Mx3dGeomSounddSurface.
Provide multiple operations and query methods to handle Bezier surfaces.

## Hierarchy

- [`Mx3dGeomBoundedSurface`](Mx3dGeomBoundedSurface.md)

  ↳ **`Mx3dGeomBezierSurface`**

## Table of contents

### Constructors

- [constructor](Mx3dGeomBezierSurface.md#constructor)

### Methods

- [Bounds](Mx3dGeomBezierSurface.md#bounds)
- [Continuity](Mx3dGeomBezierSurface.md#continuity)
- [Copy](Mx3dGeomBezierSurface.md#copy)
- [D0](Mx3dGeomBezierSurface.md#d0)
- [D1](Mx3dGeomBezierSurface.md#d1)
- [D2](Mx3dGeomBezierSurface.md#d2)
- [D3](Mx3dGeomBezierSurface.md#d3)
- [DN](Mx3dGeomBezierSurface.md#dn)
- [DynCast](Mx3dGeomBezierSurface.md#dyncast)
- [DynamicType](Mx3dGeomBezierSurface.md#dynamictype)
- [ExchangeUV](Mx3dGeomBezierSurface.md#exchangeuv)
- [Face](Mx3dGeomBezierSurface.md#face)
- [Increase](Mx3dGeomBezierSurface.md#increase)
- [InsertPoleColAfter](Mx3dGeomBezierSurface.md#insertpolecolafter)
- [InsertPoleColBefore](Mx3dGeomBezierSurface.md#insertpolecolbefore)
- [InsertPoleRowAfter](Mx3dGeomBezierSurface.md#insertpolerowafter)
- [InsertPoleRowBefore](Mx3dGeomBezierSurface.md#insertpolerowbefore)
- [IsCNu](Mx3dGeomBezierSurface.md#iscnu)
- [IsCNv](Mx3dGeomBezierSurface.md#iscnv)
- [IsUClosed](Mx3dGeomBezierSurface.md#isuclosed)
- [IsUPeriodic](Mx3dGeomBezierSurface.md#isuperiodic)
- [IsURational](Mx3dGeomBezierSurface.md#isurational)
- [IsVClosed](Mx3dGeomBezierSurface.md#isvclosed)
- [IsVPeriodic](Mx3dGeomBezierSurface.md#isvperiodic)
- [IsVRational](Mx3dGeomBezierSurface.md#isvrational)
- [MirrorByAxis](Mx3dGeomBezierSurface.md#mirrorbyaxis)
- [MirrorByCSYSR](Mx3dGeomBezierSurface.md#mirrorbycsysr)
- [MirrorByPoint](Mx3dGeomBezierSurface.md#mirrorbypoint)
- [MirroredByAxis](Mx3dGeomBezierSurface.md#mirroredbyaxis)
- [MirroredByCSYSR](Mx3dGeomBezierSurface.md#mirroredbycsysr)
- [MirroredByPoint](Mx3dGeomBezierSurface.md#mirroredbypoint)
- [NbUPoles](Mx3dGeomBezierSurface.md#nbupoles)
- [NbVPoles](Mx3dGeomBezierSurface.md#nbvpoles)
- [Pole](Mx3dGeomBezierSurface.md#pole)
- [Poles](Mx3dGeomBezierSurface.md#poles)
- [RemovePoleCol](Mx3dGeomBezierSurface.md#removepolecol)
- [RemovePoleRow](Mx3dGeomBezierSurface.md#removepolerow)
- [Rotate](Mx3dGeomBezierSurface.md#rotate)
- [Rotated](Mx3dGeomBezierSurface.md#rotated)
- [Scale](Mx3dGeomBezierSurface.md#scale)
- [Scaled](Mx3dGeomBezierSurface.md#scaled)
- [Segment](Mx3dGeomBezierSurface.md#segment)
- [SetPole](Mx3dGeomBezierSurface.md#setpole)
- [SetPoleCol](Mx3dGeomBezierSurface.md#setpolecol)
- [SetPoleRow](Mx3dGeomBezierSurface.md#setpolerow)
- [SetWeight](Mx3dGeomBezierSurface.md#setweight)
- [SetWeightCol](Mx3dGeomBezierSurface.md#setweightcol)
- [SetWeightRow](Mx3dGeomBezierSurface.md#setweightrow)
- [Transform](Mx3dGeomBezierSurface.md#transform)
- [TransformParameters](Mx3dGeomBezierSurface.md#transformparameters)
- [Transformed](Mx3dGeomBezierSurface.md#transformed)
- [TranslateBy2Points](Mx3dGeomBezierSurface.md#translateby2points)
- [TranslateByVec](Mx3dGeomBezierSurface.md#translatebyvec)
- [TranslatedBy2Points](Mx3dGeomBezierSurface.md#translatedby2points)
- [TranslatedByVec](Mx3dGeomBezierSurface.md#translatedbyvec)
- [UDegree](Mx3dGeomBezierSurface.md#udegree)
- [UPeriod](Mx3dGeomBezierSurface.md#uperiod)
- [UReverse](Mx3dGeomBezierSurface.md#ureverse)
- [UReversed](Mx3dGeomBezierSurface.md#ureversed)
- [UReversedParameter](Mx3dGeomBezierSurface.md#ureversedparameter)
- [VPeriod](Mx3dGeomBezierSurface.md#vperiod)
- [VReverse](Mx3dGeomBezierSurface.md#vreverse)
- [VReversed](Mx3dGeomBezierSurface.md#vreversed)
- [VReversedParameter](Mx3dGeomBezierSurface.md#vreversedparameter)
- [Value](Mx3dGeomBezierSurface.md#value)
- [Weight](Mx3dGeomBezierSurface.md#weight)
- [Weights](Mx3dGeomBezierSurface.md#weights)
- [DownCast](Mx3dGeomBezierSurface.md#downcast)

## Constructors

### constructor

• **new Mx3dGeomBezierSurface**(`SurfacePoles`, `PoleWeights?`)

Constructor is used to create a Bezier surface.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|SurfacePoles | [Mx3dGePoint. md] [] | Control point array, in the form of a two-dimensional array|
| `PoleWeights?` | ` Number ` [] [] | Control point weight array (optional)|

#### Overrides

Mx3dGeomBoundedSurface.constructor

## Methods

### Bounds

▸ **Bounds**(`U1U2V1V2`): `void`

Obtain the boundary range of the surface.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|U1U2V1V2 | [dU1: number, dU2: number, dV1: number, dV2: number] | Range array|

#### Returns

`void`

___

### Continuity

▸ **Continuity**(): [`MxGAShapeEnum`](../enums/MdGe.MxGAShapeEnum.md)

Obtain the continuity of the surface.

#### Returns

[`MxGAShapeEnum`](../enums/MdGe.MxGAShapeEnum.md)

Return the continuity enumeration value.

___

### Copy

▸ **Copy**(): [`Mx3dGeomObject`](Mx3dGeomObject.md)

Copy the current surface object.

#### Returns

[`Mx3dGeomObject`](Mx3dGeomObject.md)

Return a new surface object.

___

### D0

▸ **D0**(`U`, `V`, `P`): `void`

Calculate the zero derivative of a surface at a specified point.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|U | number | parameter U value|
|V | number | parameter V value|
|P | [Mx3dGePoint] (Mx3dGePoint. md) | Output point|

#### Returns

`void`

___

### D1

▸ **D1**(`U`, `V`, `P`, `D1U`, `D1V`): `void`

Calculate the first derivative of a surface at a specified point.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|U | number | parameter U value|
|V | number | parameter V value|
|P | [Mx3dGePoint] (Mx3dGePoint. md) | Output point|
|D1U | [Mx3dGeVec] (Mx3dGeVec. md) | Output the first-order derivative vector in the U direction|
|D1V | [Mx3dGeVec] (Mx3dGeVec. md) | Output the first derivative vector in the V direction|

#### Returns

`void`

___

### D2

▸ **D2**(`U`, `V`, `P`, `D1U`, `D1V`, `D2U`, `D2V`, `D2UV`): `void`

Calculate the second derivative of a surface at a specified point.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|U | number | parameter U value|
|V | number | parameter V value|
|P | [Mx3dGePoint] (Mx3dGePoint. md) | Output point|
|D1U | [Mx3dGeVec] (Mx3dGeVec. md) | Output the first-order derivative vector in the U direction|
|D1V | [Mx3dGeVec] (Mx3dGeVec. md) | Output the first derivative vector in the V direction|
|D2U | [Mx3dGeVec] (Mx3dGeVec. md) | Output the second derivative vector in the U direction|
|D2V | [Mx3dGeVec] (Mx3dGeVec. md) | Output the second derivative vector in the V direction|
|D2UV | [Mx3dGeVec] (Mx3dGeVec. md) | Output the second derivative vector in the UV direction|

#### Returns

`void`

___

### D3

▸ **D3**(`U`, `V`, `P`, `D1U`, `D1V`, `D2U`, `D2V`, `D2UV`, `D3U`, `D3V`, `D3UUV`, `D3UVV`): `void`

Calculate the third derivative of a surface at a specified point.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|U | number | parameter U value|
|V | number | parameter V value|
|P | [Mx3dGePoint] (Mx3dGePoint. md) | Output point|
|D1U | [Mx3dGeVec] (Mx3dGeVec. md) | Output the first-order derivative vector in the U direction|
|D1V | [Mx3dGeVec] (Mx3dGeVec. md) | Output the first derivative vector in the V direction|
|D2U | [Mx3dGeVec] (Mx3dGeVec. md) | Output the second derivative vector in the U direction|
|D2V | [Mx3dGeVec] (Mx3dGeVec. md) | Output the second derivative vector in the V direction|
|D2UV | [Mx3dGeVec] (Mx3dGeVec. md) | Output the second derivative vector in the UV direction|
|D3U | [Mx3dGeVec] (Mx3dGeVec. md) | Output the third derivative vector in the U direction|
|D3V | [Mx3dGeVec] (Mx3dGeVec. md) | Output the third derivative vector in the V direction|
|D3UUV | [Mx3dGeVec] (Mx3dGeVec. md) | Output the third derivative vector in the UU direction|
|D3UVV | [Mx3dGeVec] (Mx3dGeVec. md) | Output the third derivative vector in the UV direction|

#### Returns

`void`

___

### DN

▸ **DN**(`U`, `V`, `Nu`, `Nv`): [`Mx3dGeVec`](Mx3dGeVec.md)

Calculate the Nth derivative of a surface at a specified point.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|U | number | parameter U value|
|V | number | parameter V value|
|Nu | number | U-direction order|
|Nv | number | order in the V direction|

#### Returns

[`Mx3dGeVec`](Mx3dGeVec.md)

Return the derivative vector.

___

### DynCast

▸ **DynCast**(`theObject`): [`Mx3dGeomBezierSurface`](Mx3dGeomBezierSurface.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theObject` | [`Mx3dGeomObject`](Mx3dGeomObject.md) |

#### Returns

[`Mx3dGeomBezierSurface`](Mx3dGeomBezierSurface.md)

#### Overrides

[Mx3dGeomBoundedSurface](Mx3dGeomBoundedSurface.md).[DynCast](Mx3dGeomBoundedSurface.md#dyncast)

___

### DynamicType

▸ **DynamicType**(): `string`

Return the dynamic type string of the object.

#### Returns

`string`

Dynamic type string.

#### Inherited from

[Mx3dGeomBoundedSurface](Mx3dGeomBoundedSurface.md).[DynamicType](Mx3dGeomBoundedSurface.md#dynamictype)

___

### ExchangeUV

▸ **ExchangeUV**(): `void`

Exchange the order of U and V directions.

#### Returns

`void`

___

### Face

▸ **Face**(`TolDegen`): [`Mx3dShapeFace`](Mx3dShapeFace.md)

Generate patches based on tolerance.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Tolerant | Number | Tolerance|

#### Returns

[`Mx3dShapeFace`](Mx3dShapeFace.md)

Return the generated patch object.

▸ **Face**(`W`, `Inside`): [`Mx3dShapeFace`](Mx3dShapeFace.md)

Generate patches based on lines and whether they are generated internally.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|W | [Mx3dShapeWire] (Mx3dShapeWire. md) | Line object|
|Inside | boolean | Is it inside|

#### Returns

[`Mx3dShapeFace`](Mx3dShapeFace.md)

Return the generated patch object.

▸ **Face**(`UMin`, `UMax`, `VMin`, `VMax`, `TolDegen`): [`Mx3dShapeFace`](Mx3dShapeFace.md)

Generate patches based on U, V range and tolerance.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|UMin | number | minimum value in the U direction|
|UMax | number | maximum value in the U direction|
|VMin | number | minimum value in the V direction|
|VMax | number | maximum value in the V direction|
|Tolerant | Number | Tolerance|

#### Returns

[`Mx3dShapeFace`](Mx3dShapeFace.md)

Return the generated patch object.

___

### Increase

▸ **Increase**(`UDeg`, `VDeg`): `void`

Increase the order of the surface.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|UDeg | number | increase order in the U direction|
|VDeg | number | increase order in the V direction|

#### Returns

`void`

___

### InsertPoleColAfter

▸ **InsertPoleColAfter**(`VIndex`, `CPoles`, `CPoleWeights?`): `void`

Insert a new control point column after the specified column.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Index of column 'VIndes' |' number '||
|CPoles | [Mx3dGePoint] (Mx3dGePoint. md) [] | Control point array to be inserted|
| `CPoleWeights?` | ` Number ` [] | Control point weight array (optional)|

#### Returns

`void`

___

### InsertPoleColBefore

▸ **InsertPoleColBefore**(`VIndex`, `CPoles`, `CPoleWeights?`): `void`

Insert a new control point column before the specified column.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Index of column 'VIndes' |' number '||
|CPoles | [Mx3dGePoint] (Mx3dGePoint. md) [] | Control point array to be inserted|
| `CPoleWeights?` | ` Number ` [] | Control point weight array (optional)|

#### Returns

`void`

___

### InsertPoleRowAfter

▸ **InsertPoleRowAfter**(`UIndex`, `CPoles`, `CPoleWeights?`): `void`

Insert a new control point row after the specified row.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|The index of the 'UIndes' |' number '| row|
|CPoles | [Mx3dGePoint] (Mx3dGePoint. md) [] | Control point array to be inserted|
| `CPoleWeights?` | ` Number ` [] | Control point weight array (optional)|

#### Returns

`void`

___

### InsertPoleRowBefore

▸ **InsertPoleRowBefore**(`UIndex`, `CPoles`, `CPoleWeights?`): `void`

Insert a new control point line before the specified line.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|The index of the 'UIndes' |' number '| row|
|CPoles | [Mx3dGePoint] (Mx3dGePoint. md) [] | Control point array to be inserted|
| `CPoleWeights?` | ` Number ` [] | Control point weight array (optional)|

#### Returns

`void`

___

### IsCNu

▸ **IsCNu**(`N`): `boolean`

Determine the continuous order in the U direction.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|N | number | order|

#### Returns

`boolean`

Returns a Boolean value indicating whether it is continuous.

___

### IsCNv

▸ **IsCNv**(`N`): `boolean`

Determine the continuous order in the V direction.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|N | number | order|

#### Returns

`boolean`

Returns a Boolean value indicating whether it is continuous.

___

### IsUClosed

▸ **IsUClosed**(): `boolean`

Determine whether the U direction is closed.

#### Returns

`boolean`

Returns a Boolean value indicating whether it is closed or not.

___

### IsUPeriodic

▸ **IsUPeriodic**(): `boolean`

Determine whether the U direction is periodic.

#### Returns

`boolean`

Return a Boolean value indicating whether it is periodic.

___

### IsURational

▸ **IsURational**(): `boolean`

Determine whether the U direction is a rational surface.

#### Returns

`boolean`

Returns the Boolean value of a rational surface.

___

### IsVClosed

▸ **IsVClosed**(): `boolean`

Determine whether the V direction is closed.

#### Returns

`boolean`

Returns a Boolean value indicating whether it is closed or not.

___

### IsVPeriodic

▸ **IsVPeriodic**(): `boolean`

Determine whether the V direction is periodic.

#### Returns

`boolean`

Return a Boolean value indicating whether it is periodic.

___

### IsVRational

▸ **IsVRational**(): `boolean`

Determine whether the V direction is a rational surface.

#### Returns

`boolean`

Returns the Boolean value of a rational surface.

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

[Mx3dGeomBoundedSurface](Mx3dGeomBoundedSurface.md).[MirrorByAxis](Mx3dGeomBoundedSurface.md#mirrorbyaxis)

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

[Mx3dGeomBoundedSurface](Mx3dGeomBoundedSurface.md).[MirrorByCSYSR](Mx3dGeomBoundedSurface.md#mirrorbycsysr)

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

[Mx3dGeomBoundedSurface](Mx3dGeomBoundedSurface.md).[MirrorByPoint](Mx3dGeomBoundedSurface.md#mirrorbypoint)

___

### MirroredByAxis

▸ **MirroredByAxis**(`A1`): [`Mx3dGeomBezierSurface`](Mx3dGeomBezierSurface.md)

Return the new geometric object transformed through axis mirroring.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|A1 | [Mx3dGeAxis] (Mx3dGeAxis. md) | Axis object|

#### Returns

[`Mx3dGeomBezierSurface`](Mx3dGeomBezierSurface.md)

New geometric objects.

#### Inherited from

[Mx3dGeomBoundedSurface](Mx3dGeomBoundedSurface.md).[MirroredByAxis](Mx3dGeomBoundedSurface.md#mirroredbyaxis)

___

### MirroredByCSYSR

▸ **MirroredByCSYSR**(`A2`): [`Mx3dGeomBezierSurface`](Mx3dGeomBezierSurface.md)

Return the new geometric object after mirror transformation through the right-handed coordinate system.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|A2 | [Mx3dGeCSYSR] (Mx3dGeCSYSR. md) | Right hand coordinate system object|

#### Returns

[`Mx3dGeomBezierSurface`](Mx3dGeomBezierSurface.md)

New geometric objects.

#### Inherited from

[Mx3dGeomBoundedSurface](Mx3dGeomBoundedSurface.md).[MirroredByCSYSR](Mx3dGeomBoundedSurface.md#mirroredbycsysr)

___

### MirroredByPoint

▸ **MirroredByPoint**(`P`): [`Mx3dGeomBezierSurface`](Mx3dGeomBezierSurface.md)

Return the new geometric object after point mirror transformation.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|P | [Mx3dGePoint] (Mx3dGePoint. md) | Point object|

#### Returns

[`Mx3dGeomBezierSurface`](Mx3dGeomBezierSurface.md)

New geometric objects.

#### Inherited from

[Mx3dGeomBoundedSurface](Mx3dGeomBoundedSurface.md).[MirroredByPoint](Mx3dGeomBoundedSurface.md#mirroredbypoint)

___

### NbUPoles

▸ **NbUPoles**(): `number`

Obtain the number of control points in the U direction.

#### Returns

`number`

Return the number of control points in the U direction.

___

### NbVPoles

▸ **NbVPoles**(): `number`

Obtain the number of control points in the V direction.

#### Returns

`number`

Return the number of control points in the V direction.

___

### Pole

▸ **Pole**(`UIndex`, `VIndex`): [`Mx3dGePoint`](Mx3dGePoint.md)

Retrieve the specified control point location.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|UIndes | number | U-direction index|
|VIndes | number | index in the V direction|

#### Returns

[`Mx3dGePoint`](Mx3dGePoint.md)

Return to the control point location.

___

### Poles

▸ **Poles**(): [`Mx3dGePoint`](Mx3dGePoint.md)[][]

Retrieve all control point arrays.

#### Returns

[`Mx3dGePoint`](Mx3dGePoint.md)[][]

Return a two-dimensional array of control points.

___

### RemovePoleCol

▸ **RemovePoleCol**(`VIndex`): `void`

Remove the control point of the specified column.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Index of column 'VIndes' |' number '||

#### Returns

`void`

___

### RemovePoleRow

▸ **RemovePoleRow**(`UIndex`): `void`

Remove the control point of the specified row.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|The index of the 'UIndes' |' number '| row|

#### Returns

`void`

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

[Mx3dGeomBoundedSurface](Mx3dGeomBoundedSurface.md).[Rotate](Mx3dGeomBoundedSurface.md#rotate)

___

### Rotated

▸ **Rotated**(`A1`, `Ang`): [`Mx3dGeomBezierSurface`](Mx3dGeomBezierSurface.md)

Return the rotated new geometric object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|A1 | [Mx3dGeAxis] (Mx3dGeAxis. md) | Axis object|
|Ang | number | Rotation angle|

#### Returns

[`Mx3dGeomBezierSurface`](Mx3dGeomBezierSurface.md)

New geometric objects.

#### Inherited from

[Mx3dGeomBoundedSurface](Mx3dGeomBoundedSurface.md).[Rotated](Mx3dGeomBoundedSurface.md#rotated)

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

[Mx3dGeomBoundedSurface](Mx3dGeomBoundedSurface.md).[Scale](Mx3dGeomBoundedSurface.md#scale)

___

### Scaled

▸ **Scaled**(`P`, `S`): [`Mx3dGeomBezierSurface`](Mx3dGeomBezierSurface.md)

Return the scaled new geometric object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|P | [Mx3dGePoint] (Mx3dGePoint. md) | Point object|
|S | number | scaling ratio|

#### Returns

[`Mx3dGeomBezierSurface`](Mx3dGeomBezierSurface.md)

New geometric objects.

#### Inherited from

[Mx3dGeomBoundedSurface](Mx3dGeomBoundedSurface.md).[Scaled](Mx3dGeomBoundedSurface.md#scaled)

___

### Segment

▸ **Segment**(`U1`, `U2`, `V1`, `V2`): `void`

Define a part of the surface and specify the range of U and V.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|U1 | number | Starting U value|
|U2 | number | End U value|
|V1 | number | Starting V value|
|V2 | Number | End V value|

#### Returns

`void`

___

### SetPole

▸ **SetPole**(`UIndex`, `VIndex`, `P`, `Weight?`): `void`

Set control points and weights for the specified location.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|UIndes | number | U-direction index|
|VIndes | number | index in the V direction|
|P | [Mx3dGePoint] (Mx3dGePoint. md) | Control point position|
| `Weight?` | ` Number ` | Control point weights (optional)|

#### Returns

`void`

___

### SetPoleCol

▸ **SetPoleCol**(`VIndex`, `CPoles`, `CPoleWeights?`): `void`

Set the control points and weights for the specified column.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Index of column 'VIndes' |' number '||
|CPoles | [Mx3dGePoint] (Mx3dGePoint. md) [] | Control point array|
| `CPoleWeights?` | ` Number ` [] | Control point weight array (optional)|

#### Returns

`void`

___

### SetPoleRow

▸ **SetPoleRow**(`UIndex`, `CPoles`, `CPoleWeights?`): `void`

Set the control points and weights for the specified row.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|The index of the 'UIndes' |' number '| row|
|CPoles | [Mx3dGePoint] (Mx3dGePoint. md) [] | Control point array|
| `CPoleWeights?` | ` Number ` [] | Control point weight array (optional)|

#### Returns

`void`

___

### SetWeight

▸ **SetWeight**(`UIndex`, `VIndex`, `Weight`): `void`

Set the weight of the specified control point.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|UIndes | number | U-direction index|
|VIndes | number | index in the V direction|
|Weight | number | weight value|

#### Returns

`void`

___

### SetWeightCol

▸ **SetWeightCol**(`VIndex`, `CPoleWeights`): `void`

Set the control point weights for the specified column.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Index of column 'VIndes' |' number '||
|CPoleWeights | number [] | Control point weight array|

#### Returns

`void`

___

### SetWeightRow

▸ **SetWeightRow**(`UIndex`, `CPoleWeights`): `void`

Set the control point weights for the specified row.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|The index of the 'UIndes' |' number '| row|
|CPoleWeights | number [] | Control point weight array|

#### Returns

`void`

___

### Transform

▸ **Transform**(`T`): `void`

Apply transformation matrix to surface.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|T | [Mx3dGetStrf] (Mx3dGetStrf. md) | Transform matrix|

#### Returns

`void`

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

[Mx3dGeomBoundedSurface](Mx3dGeomBoundedSurface.md).[TransformParameters](Mx3dGeomBoundedSurface.md#transformparameters)

___

### Transformed

▸ **Transformed**(`T`): [`Mx3dGeomBezierSurface`](Mx3dGeomBezierSurface.md)

Return the transformed new geometric object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|T | [Mx3dGetStrf] (Mx3dGetStrf. md) | Transform the object|

#### Returns

[`Mx3dGeomBezierSurface`](Mx3dGeomBezierSurface.md)

New geometric objects.

#### Inherited from

[Mx3dGeomBoundedSurface](Mx3dGeomBoundedSurface.md).[Transformed](Mx3dGeomBoundedSurface.md#transformed)

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

[Mx3dGeomBoundedSurface](Mx3dGeomBoundedSurface.md).[TranslateBy2Points](Mx3dGeomBoundedSurface.md#translateby2points)

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

[Mx3dGeomBoundedSurface](Mx3dGeomBoundedSurface.md).[TranslateByVec](Mx3dGeomBoundedSurface.md#translatebyvec)

___

### TranslatedBy2Points

▸ **TranslatedBy2Points**(`P1`, `P2`): [`Mx3dGeomBezierSurface`](Mx3dGeomBezierSurface.md)

Return the new geometric object after translating through two points.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|P1 | [Mx3dGePoint] (Mx3dGePoint. md) | Starting point object|
|P2 | [Mx3dGePoint] (Mx3dGePoint. md) | End point object|

#### Returns

[`Mx3dGeomBezierSurface`](Mx3dGeomBezierSurface.md)

New geometric objects.

#### Inherited from

[Mx3dGeomBoundedSurface](Mx3dGeomBoundedSurface.md).[TranslatedBy2Points](Mx3dGeomBoundedSurface.md#translatedby2points)

___

### TranslatedByVec

▸ **TranslatedByVec**(`V`): [`Mx3dGeomBezierSurface`](Mx3dGeomBezierSurface.md)

Return the new geometric object after vector translation.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|V | [Mx3dGeVec] (Mx3dGeVec. md) | Vector object|

#### Returns

[`Mx3dGeomBezierSurface`](Mx3dGeomBezierSurface.md)

New geometric objects.

#### Inherited from

[Mx3dGeomBoundedSurface](Mx3dGeomBoundedSurface.md).[TranslatedByVec](Mx3dGeomBoundedSurface.md#translatedbyvec)

___

### UDegree

▸ **UDegree**(): `number`

Obtain the order in the U direction.

#### Returns

`number`

Return the order in the U direction.

___

### UPeriod

▸ **UPeriod**(): `number`

Return the period of the surface in the U direction.

#### Returns

`number`

The period of the surface in the U direction.

#### Inherited from

[Mx3dGeomBoundedSurface](Mx3dGeomBoundedSurface.md).[UPeriod](Mx3dGeomBoundedSurface.md#uperiod)

___

### UReverse

▸ **UReverse**(): `void`

Reverse the parameter in the U direction.

#### Returns

`void`

___

### UReversed

▸ **UReversed**(): [`Mx3dGeomBezierSurface`](Mx3dGeomBezierSurface.md)

Parameterization of reversing the U direction.

#### Returns

[`Mx3dGeomBezierSurface`](Mx3dGeomBezierSurface.md)

Return the current object to implement a chain call.

#### Inherited from

[Mx3dGeomBoundedSurface](Mx3dGeomBoundedSurface.md).[UReversed](Mx3dGeomBoundedSurface.md#ureversed)

___

### UReversedParameter

▸ **UReversedParameter**(`U`): `number`

Calculate the reverse U parameter.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|U | number | parameter U value|

#### Returns

`number`

Return the reverse parameter.

___

### VPeriod

▸ **VPeriod**(): `number`

Return the period of the surface in the V direction.

#### Returns

`number`

The period of the surface in the V direction.

#### Inherited from

[Mx3dGeomBoundedSurface](Mx3dGeomBoundedSurface.md).[VPeriod](Mx3dGeomBoundedSurface.md#vperiod)

___

### VReverse

▸ **VReverse**(): `void`

Reverse the parameters in the V direction.

#### Returns

`void`

___

### VReversed

▸ **VReversed**(): [`Mx3dGeomBezierSurface`](Mx3dGeomBezierSurface.md)

Parameterization of reversing the V direction.

#### Returns

[`Mx3dGeomBezierSurface`](Mx3dGeomBezierSurface.md)

Return the current object to implement a chain call.

#### Inherited from

[Mx3dGeomBoundedSurface](Mx3dGeomBoundedSurface.md).[VReversed](Mx3dGeomBoundedSurface.md#vreversed)

___

### VReversedParameter

▸ **VReversedParameter**(`V`): `number`

Calculate the reverse V parameter.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|V | number | parameter V value|

#### Returns

`number`

Return the reverse parameter.

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

[Mx3dGeomBoundedSurface](Mx3dGeomBoundedSurface.md).[Value](Mx3dGeomBoundedSurface.md#value)

___

### Weight

▸ **Weight**(`UIndex`, `VIndex`): `number`

Obtain the weight of the specified control point.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|UIndes | number | U-direction index|
|VIndes | number | index in the V direction|

#### Returns

`number`

Return weight values.

___

### Weights

▸ **Weights**(): `number`[][]

Retrieve an array of all control point weights.

#### Returns

`number`[][]

Return a two-dimensional array of control point weights.

___

### DownCast

▸ `Static` **DownCast**(`theObject`): [`Mx3dGeomBezierSurface`](Mx3dGeomBezierSurface.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theObject` | [`Mx3dGeomObject`](Mx3dGeomObject.md) |

#### Returns

[`Mx3dGeomBezierSurface`](Mx3dGeomBezierSurface.md)
