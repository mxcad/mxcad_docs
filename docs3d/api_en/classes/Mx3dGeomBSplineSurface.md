[mxcad_3d API Document](../README. md)/Mx3dGeomBSpline Surface

# Class: Mx3dGeomBSplineSurface

Represents a B-spline surface, inherited from Mx3dGeomSounddSurface.
Provide multiple operations and query methods to process B-spline surfaces.

## Hierarchy

- [`Mx3dGeomBoundedSurface`](Mx3dGeomBoundedSurface.md)

  ↳ **`Mx3dGeomBSplineSurface`**

## Table of contents

### Constructors

- [constructor](Mx3dGeomBSplineSurface.md#constructor)

### Methods

- [Bounds](Mx3dGeomBSplineSurface.md#bounds)
- [CheckAndSegment](Mx3dGeomBSplineSurface.md#checkandsegment)
- [Continuity](Mx3dGeomBSplineSurface.md#continuity)
- [Copy](Mx3dGeomBSplineSurface.md#copy)
- [D0](Mx3dGeomBSplineSurface.md#d0)
- [D1](Mx3dGeomBSplineSurface.md#d1)
- [D2](Mx3dGeomBSplineSurface.md#d2)
- [D3](Mx3dGeomBSplineSurface.md#d3)
- [DN](Mx3dGeomBSplineSurface.md#dn)
- [DynamicType](Mx3dGeomBSplineSurface.md#dynamictype)
- [ExchangeUV](Mx3dGeomBSplineSurface.md#exchangeuv)
- [Face](Mx3dGeomBSplineSurface.md#face)
- [FirstUKnotIndex](Mx3dGeomBSplineSurface.md#firstuknotindex)
- [FirstVKnotIndex](Mx3dGeomBSplineSurface.md#firstvknotindex)
- [IncreaseDegree](Mx3dGeomBSplineSurface.md#increasedegree)
- [IncreaseUMultiplicity](Mx3dGeomBSplineSurface.md#increaseumultiplicity)
- [IncreaseVMultiplicity](Mx3dGeomBSplineSurface.md#increasevmultiplicity)
- [IncrementUMultiplicity](Mx3dGeomBSplineSurface.md#incrementumultiplicity)
- [IncrementVMultiplicity](Mx3dGeomBSplineSurface.md#incrementvmultiplicity)
- [InsertUKnot](Mx3dGeomBSplineSurface.md#insertuknot)
- [InsertUKnots](Mx3dGeomBSplineSurface.md#insertuknots)
- [InsertVKnot](Mx3dGeomBSplineSurface.md#insertvknot)
- [InsertVKnots](Mx3dGeomBSplineSurface.md#insertvknots)
- [IsCNu](Mx3dGeomBSplineSurface.md#iscnu)
- [IsCNv](Mx3dGeomBSplineSurface.md#iscnv)
- [IsUClosed](Mx3dGeomBSplineSurface.md#isuclosed)
- [IsUPeriodic](Mx3dGeomBSplineSurface.md#isuperiodic)
- [IsURational](Mx3dGeomBSplineSurface.md#isurational)
- [IsVClosed](Mx3dGeomBSplineSurface.md#isvclosed)
- [IsVPeriodic](Mx3dGeomBSplineSurface.md#isvperiodic)
- [IsVRational](Mx3dGeomBSplineSurface.md#isvrational)
- [LastUKnotIndex](Mx3dGeomBSplineSurface.md#lastuknotindex)
- [LastVKnotIndex](Mx3dGeomBSplineSurface.md#lastvknotindex)
- [LocalD0](Mx3dGeomBSplineSurface.md#locald0)
- [LocalD1](Mx3dGeomBSplineSurface.md#locald1)
- [LocalD2](Mx3dGeomBSplineSurface.md#locald2)
- [LocalD3](Mx3dGeomBSplineSurface.md#locald3)
- [LocalDN](Mx3dGeomBSplineSurface.md#localdn)
- [LocalValue](Mx3dGeomBSplineSurface.md#localvalue)
- [LocateU](Mx3dGeomBSplineSurface.md#locateu)
- [LocateV](Mx3dGeomBSplineSurface.md#locatev)
- [MirrorByAxis](Mx3dGeomBSplineSurface.md#mirrorbyaxis)
- [MirrorByCSYSR](Mx3dGeomBSplineSurface.md#mirrorbycsysr)
- [MirrorByPoint](Mx3dGeomBSplineSurface.md#mirrorbypoint)
- [MirroredByAxis](Mx3dGeomBSplineSurface.md#mirroredbyaxis)
- [MirroredByCSYSR](Mx3dGeomBSplineSurface.md#mirroredbycsysr)
- [MirroredByPoint](Mx3dGeomBSplineSurface.md#mirroredbypoint)
- [MovePoint](Mx3dGeomBSplineSurface.md#movepoint)
- [NbUKnots](Mx3dGeomBSplineSurface.md#nbuknots)
- [NbUPoles](Mx3dGeomBSplineSurface.md#nbupoles)
- [NbVKnots](Mx3dGeomBSplineSurface.md#nbvknots)
- [NbVPoles](Mx3dGeomBSplineSurface.md#nbvpoles)
- [PeriodicNormalization](Mx3dGeomBSplineSurface.md#periodicnormalization)
- [Pole](Mx3dGeomBSplineSurface.md#pole)
- [Poles](Mx3dGeomBSplineSurface.md#poles)
- [RemoveUKnot](Mx3dGeomBSplineSurface.md#removeuknot)
- [RemoveVKnot](Mx3dGeomBSplineSurface.md#removevknot)
- [Rotate](Mx3dGeomBSplineSurface.md#rotate)
- [Rotated](Mx3dGeomBSplineSurface.md#rotated)
- [Scale](Mx3dGeomBSplineSurface.md#scale)
- [Scaled](Mx3dGeomBSplineSurface.md#scaled)
- [Segment](Mx3dGeomBSplineSurface.md#segment)
- [SetPole](Mx3dGeomBSplineSurface.md#setpole)
- [SetPoleCol](Mx3dGeomBSplineSurface.md#setpolecol)
- [SetPoleRow](Mx3dGeomBSplineSurface.md#setpolerow)
- [SetUKnot](Mx3dGeomBSplineSurface.md#setuknot)
- [SetUKnots](Mx3dGeomBSplineSurface.md#setuknots)
- [SetUNotPeriodic](Mx3dGeomBSplineSurface.md#setunotperiodic)
- [SetUOrigin](Mx3dGeomBSplineSurface.md#setuorigin)
- [SetUPeriodic](Mx3dGeomBSplineSurface.md#setuperiodic)
- [SetVKnot](Mx3dGeomBSplineSurface.md#setvknot)
- [SetVKnots](Mx3dGeomBSplineSurface.md#setvknots)
- [SetVNotPeriodic](Mx3dGeomBSplineSurface.md#setvnotperiodic)
- [SetVOrigin](Mx3dGeomBSplineSurface.md#setvorigin)
- [SetVPeriodic](Mx3dGeomBSplineSurface.md#setvperiodic)
- [SetWeight](Mx3dGeomBSplineSurface.md#setweight)
- [SetWeightCol](Mx3dGeomBSplineSurface.md#setweightcol)
- [SetWeightRow](Mx3dGeomBSplineSurface.md#setweightrow)
- [Transform](Mx3dGeomBSplineSurface.md#transform)
- [TransformParameters](Mx3dGeomBSplineSurface.md#transformparameters)
- [Transformed](Mx3dGeomBSplineSurface.md#transformed)
- [TranslateBy2Points](Mx3dGeomBSplineSurface.md#translateby2points)
- [TranslateByVec](Mx3dGeomBSplineSurface.md#translatebyvec)
- [TranslatedBy2Points](Mx3dGeomBSplineSurface.md#translatedby2points)
- [TranslatedByVec](Mx3dGeomBSplineSurface.md#translatedbyvec)
- [UDegree](Mx3dGeomBSplineSurface.md#udegree)
- [UKnot](Mx3dGeomBSplineSurface.md#uknot)
- [UKnotSequence](Mx3dGeomBSplineSurface.md#uknotsequence)
- [UKnots](Mx3dGeomBSplineSurface.md#uknots)
- [UMultiplicities](Mx3dGeomBSplineSurface.md#umultiplicities)
- [UMultiplicity](Mx3dGeomBSplineSurface.md#umultiplicity)
- [UPeriod](Mx3dGeomBSplineSurface.md#uperiod)
- [UReverse](Mx3dGeomBSplineSurface.md#ureverse)
- [UReversed](Mx3dGeomBSplineSurface.md#ureversed)
- [UReversedParameter](Mx3dGeomBSplineSurface.md#ureversedparameter)
- [VDegree](Mx3dGeomBSplineSurface.md#vdegree)
- [VKnot](Mx3dGeomBSplineSurface.md#vknot)
- [VKnotSequence](Mx3dGeomBSplineSurface.md#vknotsequence)
- [VKnots](Mx3dGeomBSplineSurface.md#vknots)
- [VMultiplicities](Mx3dGeomBSplineSurface.md#vmultiplicities)
- [VMultiplicity](Mx3dGeomBSplineSurface.md#vmultiplicity)
- [VPeriod](Mx3dGeomBSplineSurface.md#vperiod)
- [VReverse](Mx3dGeomBSplineSurface.md#vreverse)
- [VReversed](Mx3dGeomBSplineSurface.md#vreversed)
- [VReversedParameter](Mx3dGeomBSplineSurface.md#vreversedparameter)
- [Value](Mx3dGeomBSplineSurface.md#value)
- [Weight](Mx3dGeomBSplineSurface.md#weight)
- [Weights](Mx3dGeomBSplineSurface.md#weights)
- [DownCast](Mx3dGeomBSplineSurface.md#downcast)

## Constructors

### constructor

• **new Mx3dGeomBSplineSurface**(`Poles`, `dUKnots`, `dVKnots`, `iUMults`, `iVMults`, `UDegree`, `VDegree`, `UPeriodic`, `VPeriodic`)

Constructor is used to create a B-spline surface.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Poles | [Mx3dGePoint. md] [] | Control point array, a two-dimensional array representing control points in the U and V directions|
|DUKnots | number [] | Node sequence in the U direction|
|DVKnots | number [] | Node sequence in the V direction|
|The multiplicity of U-direction nodes in iUMults | number []|
|The multiplicity of nodes in the V direction in iVMults | number []|
|UDegree | number | The order of the curve in the U direction|
|VDegree | number | order of the curve in the V direction|
|UPeriodic | boolean | Is the U direction periodic|
|VPeriodic | boolean | Is the V direction periodic|

#### Overrides

Mx3dGeomBoundedSurface.constructor

• **new Mx3dGeomBSplineSurface**(`Poles`, `dWeights`, `dUKnots`, `dVKnots`, `iUMults`, `iVMults`, `UDegree`, `VDegree`, `UPeriodic`, `VPeriodic`)

The constructor is used to create a weighted B-spline surface.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Poles | [Mx3dGePoint. md] [] | Control point array, a two-dimensional array representing control points in the U and V directions|
|DWeights | number [] [] | A two-dimensional array of control point weights|
|DUKnots | number [] | Node sequence in the U direction|
|DVKnots | number [] | Node sequence in the V direction|
|The multiplicity of U-direction nodes in iUMults | number []|
|The multiplicity of nodes in the V direction in iVMults | number []|
|UDegree | number | The order of the curve in the U direction|
|VDegree | number | order of the curve in the V direction|
|UPeriodic | boolean | Is the U direction periodic|
|VPeriodic | boolean | Is the V direction periodic|

#### Overrides

Mx3dGeomBoundedSurface.constructor

## Methods

### Bounds

▸ **Bounds**(`U1U2V1V2`): `void`

Obtain the boundary of the surface.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|U1U2V1V2 | [dU1: number, dU2: number, dV1: number, dV2: number] | Boundary parameter|

#### Returns

`void`

___

### CheckAndSegment

▸ **CheckAndSegment**(`U1`, `U2`, `V1`, `V2`): `void`

Check and retrieve surface fragments within the specified range of U and V.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|U1 | number | Starting U parameter|
|U2 | number | End the U parameter|
|V1 | number | Starting V parameter|
|V2 | number | End the V parameter|

#### Returns

`void`

___

### Continuity

▸ **Continuity**(): [`MxGAShapeEnum`](../enums/MdGe.MxGAShapeEnum.md)

Obtain the continuity of the surface.

#### Returns

[`MxGAShapeEnum`](../enums/MdGe.MxGAShapeEnum.md)

Return the continuity type of the surface.

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

Calculate the zero derivative of the specified parameter point.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|U | number | parameter U value|
|V | number | parameter V value|
|P | [Mx3dGePoint] (Mx3dGePoint. md) | The point returned|

#### Returns

`void`

___

### D1

▸ **D1**(`U`, `V`, `P`, `D1U`, `D1V`): `void`

Calculate the first derivative of a specified parameter point.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|U | number | parameter U value|
|V | number | parameter V value|
|P | [Mx3dGePoint] (Mx3dGePoint. md) | The point returned|
|D1U | [Mx3dGeVec] (Mx3dGeVec. md) | First derivative in the U direction|
|D1V | [Mx3dGeVec] (Mx3dGeVec. md) | First derivative in the V direction|

#### Returns

`void`

___

### D2

▸ **D2**(`U`, `V`, `P`, `D1U`, `D1V`, `D2U`, `D2V`, `D2UV`): `void`

Calculate the second derivative of the specified parameter point.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|U | number | parameter U value|
|V | number | parameter V value|
|P | [Mx3dGePoint] (Mx3dGePoint. md) | The point returned|
|D1U | [Mx3dGeVec] (Mx3dGeVec. md) | First derivative in the U direction|
|D1V | [Mx3dGeVec] (Mx3dGeVec. md) | First derivative in the V direction|
|D2U | [Mx3dGeVec] (Mx3dGeVec. md) | Second derivative in the U direction|
|D2V | [Mx3dGeVec] (Mx3dGeVec. md) | Second derivative in the V direction|
|D2UV | [Mx3dGeVec] (Mx3dGeVec. md) | Mixed second derivative in the U and V directions|

#### Returns

`void`

___

### D3

▸ **D3**(`U`, `V`, `P`, `D1U`, `D1V`, `D2U`, `D2V`, `D2UV`, `D3U`, `D3V`, `D3UUV`, `D3UVV`): `void`

Calculate the third derivative of the specified parameter point.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|U | number | parameter U value|
|V | number | parameter V value|
|P | [Mx3dGePoint] (Mx3dGePoint. md) | The point returned|
|D1U | [Mx3dGeVec] (Mx3dGeVec. md) | First derivative in the U direction|
|D1V | [Mx3dGeVec] (Mx3dGeVec. md) | First derivative in the V direction|
|D2U | [Mx3dGeVec] (Mx3dGeVec. md) | Second derivative in the U direction|
|D2V | [Mx3dGeVec] (Mx3dGeVec. md) | Second derivative in the V direction|
|D2UV | [Mx3dGeVec] (Mx3dGeVec. md) | Mixed second derivative in the U and V directions|
|D3U | [Mx3dGeVec] (Mx3dGeVec. md) | Third derivative in the U direction|
|D3V | [Mx3dGeVec] (Mx3dGeVec. md) | Third derivative in the V direction|
|D3UUV | [Mx3dGeVec] (Mx3dGeVec. md) | Mixed third derivative in the U and U directions|
|D3UVV | [Mx3dGeVec] (Mx3dGeVec. md) | Mixed third derivative in the U and V directions|

#### Returns

`void`

___

### DN

▸ **DN**(`U`, `V`, `Nu`, `Nv`): [`Mx3dGeVec`](Mx3dGeVec.md)

Calculate the Nth derivative of the specified parameter point.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|U | number | parameter U value|
|V | number | parameter V value|
|Nu | number | derivative order U|
|Nv | number | derivative order V|

#### Returns

[`Mx3dGeVec`](Mx3dGeVec.md)

Return the derivative vector.

___

### DynamicType

▸ **DynamicType**(): `string`

Get the dynamic type name.

#### Returns

`string`

Returns a string of the type name.

#### Overrides

[Mx3dGeomBoundedSurface](Mx3dGeomBoundedSurface.md).[DynamicType](Mx3dGeomBoundedSurface.md#dynamictype)

___

### ExchangeUV

▸ **ExchangeUV**(): `void`

Exchange node sequences in the U and V directions.

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

### FirstUKnotIndex

▸ **FirstUKnotIndex**(): `number`

Retrieve the first node index in the U direction.

#### Returns

`number`

Return the index of the first node.

___

### FirstVKnotIndex

▸ **FirstVKnotIndex**(): `number`

Retrieve the index of the first node in the V direction.

#### Returns

`number`

Return the index of the first node.

___

### IncreaseDegree

▸ **IncreaseDegree**(`UDegree`, `VDegree`): `void`

Increase the order of the surface in the U and V directions.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|UDegree | number | Improved U-direction order|
|VDegree | number | Increased order in the V direction|

#### Returns

`void`

___

### IncreaseUMultiplicity

▸ **IncreaseUMultiplicity**(`UIndex`, `M`): `void`

Increase the multiplicity of U-direction nodes.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|UIndes | number | Node index|
|M | number | Multiplicity increment|

#### Returns

`void`

▸ **IncreaseUMultiplicity**(`FromI1`, `ToI2`, `M`): `void`

Increase the multiplicity of U-direction nodes within the specified interval.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|FromI1 | number | Starting index|
|ToI2 | number | End index|
|M | number | Multiplicity increment|

#### Returns

`void`

___

### IncreaseVMultiplicity

▸ **IncreaseVMultiplicity**(`VIndex`, `M`): `void`

Increase the multiplicity of nodes in the V direction.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|VIndes | number | Node index|
|M | number | Multiplicity increment|

#### Returns

`void`

▸ **IncreaseVMultiplicity**(`FromI1`, `ToI2`, `M`): `void`

Increase the multiplicity of nodes in the V direction within the specified interval.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|FromI1 | number | Starting index|
|ToI2 | number | End index|
|M | number | Multiplicity increment|

#### Returns

`void`

___

### IncrementUMultiplicity

▸ **IncrementUMultiplicity**(`FromI1`, `ToI2`, `Step`): `void`

Increase the multiplicity of U-direction nodes within the specified interval, step by step.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|FromI1 | number | Starting index|
|ToI2 | number | End index|
|Step | Number | Incremental Step|

#### Returns

`void`

___

### IncrementVMultiplicity

▸ **IncrementVMultiplicity**(`FromI1`, `ToI2`, `Step`): `void`

Increase the multiplicity of nodes in the V direction within the specified interval, step by step.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|FromI1 | number | Starting index|
|ToI2 | number | End index|
|Step | Number | Incremental Step|

#### Returns

`void`

___

### InsertUKnot

▸ **InsertUKnot**(`U`, `M`, `ParametricTolerance`, `Add`): `void`

Insert U-direction node.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|U | number | node value|
|M | number | multiplicity|
|Parametric Tolerance | number | Parameter Tolerance|
|Add | boolean | Whether to add to the surface|

#### Returns

`void`

___

### InsertUKnots

▸ **InsertUKnots**(`dKnots`, `iMults`, `dParametricTolerance`, `Add`): `void`

Insert U-direction node.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|DKnots | number [] | Node value array|
|IMults | number [] | Node multiplicity array|
|DParameterTolerance | number | Parameter tolerance|
|Add | boolean | Whether to add to the surface|

#### Returns

`void`

___

### InsertVKnot

▸ **InsertVKnot**(`V`, `M`, `ParametricTolerance`, `Add`): `void`

Insert a node in the V direction.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|V | number | node value|
|M | number | multiplicity|
|Parametric Tolerance | number | Parameter Tolerance|
|Add | boolean | Whether to add to the surface|

#### Returns

`void`

___

### InsertVKnots

▸ **InsertVKnots**(`dKnots`, `iMults`, `dParametricTolerance`, `Add`): `void`

Insert a node in the V direction.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|DKnots | number [] | Node value array|
|IMults | number [] | Node multiplicity array|
|DParameterTolerance | number | Parameter tolerance|
|Add | boolean | Whether to add to the surface|

#### Returns

`void`

___

### IsCNu

▸ **IsCNu**(`N`): `boolean`

Check if the U direction is a continuous N-order.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|N | number | continuous order|

#### Returns

`boolean`

Return whether it is a continuous N-order.

___

### IsCNv

▸ **IsCNv**(`N`): `boolean`

Check if the V direction is a continuous N-order.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|N | number | continuous order|

#### Returns

`boolean`

Return whether it is a continuous N-order.

___

### IsUClosed

▸ **IsUClosed**(): `boolean`

Check if the U direction is periodic.

#### Returns

`boolean`

Return whether it is periodic.

___

### IsUPeriodic

▸ **IsUPeriodic**(): `boolean`

Check if the U direction is periodic.

#### Returns

`boolean`

Return whether it is periodic.

___

### IsURational

▸ **IsURational**(): `boolean`

Check if the U direction is reasonable.

#### Returns

`boolean`

Return whether it is reasonable.

___

### IsVClosed

▸ **IsVClosed**(): `boolean`

Check if the V direction is periodic.

#### Returns

`boolean`

Return whether it is periodic.

___

### IsVPeriodic

▸ **IsVPeriodic**(): `boolean`

Check if the V direction is periodic.

#### Returns

`boolean`

Return whether it is periodic.

___

### IsVRational

▸ **IsVRational**(): `boolean`

Check if the V direction is reasonable.

#### Returns

`boolean`

Return whether it is reasonable.

___

### LastUKnotIndex

▸ **LastUKnotIndex**(): `number`

Retrieve the index of the last node in the U direction.

#### Returns

`number`

Return the index of the last node.

___

### LastVKnotIndex

▸ **LastVKnotIndex**(): `number`

Retrieve the index of the last node in the V direction.

#### Returns

`number`

Return the index of the last node.

___

### LocalD0

▸ **LocalD0**(`U`, `V`, `FromUK1`, `ToUK2`, `FromVK1`, `ToVK2`, `P`): `void`

Calculate the zero order derivative of local parameter points.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|U | number | parameter U value|
|V | number | parameter V value|
|FromUK1 | number | Starting node from the U direction|
|ToUK2 | number | End node in the U direction|
|FromVK1 | number | Starting node from the V direction|
|ToVK2 | number | End node in the V direction|
|P | [Mx3dGePoint] (Mx3dGePoint. md) | The point returned|

#### Returns

`void`

___

### LocalD1

▸ **LocalD1**(`U`, `V`, `FromUK1`, `ToUK2`, `FromVK1`, `ToVK2`, `P`, `D1U`, `D1V`): `void`

Calculate the first derivative of local parameter points.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|U | number | parameter U value|
|V | number | parameter V value|
|FromUK1 | number | Starting node from the U direction|
|ToUK2 | number | End node in the U direction|
|FromVK1 | number | Starting node from the V direction|
|ToVK2 | number | End node in the V direction|
|P | [Mx3dGePoint] (Mx3dGePoint. md) | The point returned|
|D1U | [Mx3dGeVec] (Mx3dGeVec. md) | First derivative in the U direction|
|D1V | [Mx3dGeVec] (Mx3dGeVec. md) | First derivative in the V direction|

#### Returns

`void`

___

### LocalD2

▸ **LocalD2**(`U`, `V`, `FromUK1`, `ToUK2`, `FromVK1`, `ToVK2`, `P`, `D1U`, `D1V`, `D2U`, `D2V`, `D2UV`): `void`

Calculate the second derivative of local parameter points.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|U | number | parameter U value|
|V | number | parameter V value|
|FromUK1 | number | Starting node from the U direction|
|ToUK2 | number | End node in the U direction|
|FromVK1 | number | Starting node from the V direction|
|ToVK2 | number | End node in the V direction|
|P | [Mx3dGePoint] (Mx3dGePoint. md) | The point returned|
|D1U | [Mx3dGeVec] (Mx3dGeVec. md) | First derivative in the U direction|
|D1V | [Mx3dGeVec] (Mx3dGeVec. md) | First derivative in the V direction|
|D2U | [Mx3dGeVec] (Mx3dGeVec. md) | Second derivative in the U direction|
|D2V | [Mx3dGeVec] (Mx3dGeVec. md) | Second derivative in the V direction|
|D2UV | [Mx3dGeVec] (Mx3dGeVec. md) | Mixed second derivative in the U and V directions|

#### Returns

`void`

___

### LocalD3

▸ **LocalD3**(`U`, `V`, `FromUK1`, `ToUK2`, `FromVK1`, `ToVK2`, `P`, `D1U`, `D1V`, `D2U`, `D2V`, `D2UV`, `D3U`, `D3V`, `D3UUV`, `D3UVV`): `void`

Calculate the third derivative of local parameter points.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|U | number | parameter U value|
|V | number | parameter V value|
|FromUK1 | number | Starting node from the U direction|
|ToUK2 | number | End node in the U direction|
|FromVK1 | number | Starting node from the V direction|
|ToVK2 | number | End node in the V direction|
|P | [Mx3dGePoint] (Mx3dGePoint. md) | The point returned|
|D1U | [Mx3dGeVec] (Mx3dGeVec. md) | First derivative in the U direction|
|D1V | [Mx3dGeVec] (Mx3dGeVec. md) | First derivative in the V direction|
|D2U | [Mx3dGeVec] (Mx3dGeVec. md) | Second derivative in the U direction|
|D2V | [Mx3dGeVec] (Mx3dGeVec. md) | Second derivative in the V direction|
|D2UV | [Mx3dGeVec] (Mx3dGeVec. md) | Mixed second derivative in the U and V directions|
|D3U | [Mx3dGeVec] (Mx3dGeVec. md) | Third derivative in the U direction|
|D3V | [Mx3dGeVec] (Mx3dGeVec. md) | Third derivative in the V direction|
|D3UUV | [Mx3dGeVec] (Mx3dGeVec. md) | Mixed third derivative in the U and U directions|
|D3UVV | [Mx3dGeVec] (Mx3dGeVec. md) | Mixed third derivative in the U and V directions|

#### Returns

`void`

___

### LocalDN

▸ **LocalDN**(`U`, `V`, `FromUK1`, `ToUK2`, `FromVK1`, `ToVK2`, `Nu`, `Nv`): [`Mx3dGeVec`](Mx3dGeVec.md)

Calculate the Nth derivative of local parameter points.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|U | number | parameter U value|
|V | number | parameter V value|
|FromUK1 | number | Starting node from the U direction|
|ToUK2 | number | End node in the U direction|
|FromVK1 | number | Starting node from the V direction|
|ToVK2 | number | End node in the V direction|
|Nu | number | derivative order U|
|Nv | number | derivative order V|

#### Returns

[`Mx3dGeVec`](Mx3dGeVec.md)

Return the derivative vector.

___

### LocalValue

▸ **LocalValue**(`U`, `V`, `FromUK1`, `ToUK2`, `FromVK1`, `ToVK2`): [`Mx3dGePoint`](Mx3dGePoint.md)

Calculate points on the surface within a local range.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|U | number | parameter U value|
|V | number | parameter V value|
|FromUK1 | number | U-direction starting index|
|ToUK2 | number | End index in the U direction|
|FromVK1 | number | V-direction starting index|
|ToVK2 | number | End index in the V direction|

#### Returns

[`Mx3dGePoint`](Mx3dGePoint.md)

Return the two-dimensional point of the calculation point.

___

### LocateU

▸ **LocateU**(`U`, `ParametricTolerance`, `I1I2`, `WithKnotRepetition`): `void`

Locate the node in the U direction.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|The parameter value of 'U' | 'number'|
|Parametric Tolerance | number | Parameter Tolerance|
|I1I2 | [iI1: number, iI2: number] | Returns the index of the starting and ending nodes|
|WithKnotRepectation | boolean | Does it contain node duplicates|

#### Returns

`void`

___

### LocateV

▸ **LocateV**(`V`, `ParametricTolerance`, `I1I2`, `WithKnotRepetition`): `void`

Locate the node in the V direction.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|V | number | parameter value|
|Parametric Tolerance | number | Parameter Tolerance|
|I1I2 | [iI1: number, iI2: number] | Returns the index of the starting and ending nodes|
|WithKnotRepectation | boolean | Does it contain node duplicates|

#### Returns

`void`

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

▸ **MirroredByAxis**(`A1`): [`Mx3dGeomBSplineSurface`](Mx3dGeomBSplineSurface.md)

Return the new geometric object transformed through axis mirroring.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|A1 | [Mx3dGeAxis] (Mx3dGeAxis. md) | Axis object|

#### Returns

[`Mx3dGeomBSplineSurface`](Mx3dGeomBSplineSurface.md)

New geometric objects.

#### Inherited from

[Mx3dGeomBoundedSurface](Mx3dGeomBoundedSurface.md).[MirroredByAxis](Mx3dGeomBoundedSurface.md#mirroredbyaxis)

___

### MirroredByCSYSR

▸ **MirroredByCSYSR**(`A2`): [`Mx3dGeomBSplineSurface`](Mx3dGeomBSplineSurface.md)

Return the new geometric object after mirror transformation through the right-handed coordinate system.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|A2 | [Mx3dGeCSYSR] (Mx3dGeCSYSR. md) | Right hand coordinate system object|

#### Returns

[`Mx3dGeomBSplineSurface`](Mx3dGeomBSplineSurface.md)

New geometric objects.

#### Inherited from

[Mx3dGeomBoundedSurface](Mx3dGeomBoundedSurface.md).[MirroredByCSYSR](Mx3dGeomBoundedSurface.md#mirroredbycsysr)

___

### MirroredByPoint

▸ **MirroredByPoint**(`P`): [`Mx3dGeomBSplineSurface`](Mx3dGeomBSplineSurface.md)

Return the new geometric object after point mirror transformation.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|P | [Mx3dGePoint] (Mx3dGePoint. md) | Point object|

#### Returns

[`Mx3dGeomBSplineSurface`](Mx3dGeomBSplineSurface.md)

New geometric objects.

#### Inherited from

[Mx3dGeomBoundedSurface](Mx3dGeomBoundedSurface.md).[MirroredByPoint](Mx3dGeomBoundedSurface.md#mirroredbypoint)

___

### MovePoint

▸ **MovePoint**(`U`, `V`, `P`, `UIndex1`, `UIndex2`, `VIndex1`, `VIndex2`, `UFULVFVL`): `void`

Move the control points for the specified U and V indices.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|U | number | U parameter value|
|V | number | V parameter value|
|P | [Mx3dGePoint] (Mx3dGePoint. md) | New control point|
|UIndex1 | number | U-direction starting index|
|UIndex2 | number | End index in the U direction|
|VIndex1 | number | V-direction starting index|
|VIndex2 | Number | End index in the V direction|
|UFULVFVL | [iUF: number, iUL: number, iVF: number, iVL: number] | Index array|

#### Returns

`void`

___

### NbUKnots

▸ **NbUKnots**(): `number`

Obtain the number of U-direction nodes.

#### Returns

`number`

Return the number of nodes.

___

### NbUPoles

▸ **NbUPoles**(): `number`

Obtain the number of U-direction control points.

#### Returns

`number`

Return the number of control points.

___

### NbVKnots

▸ **NbVKnots**(): `number`

Obtain the number of nodes in the V direction.

#### Returns

`number`

Return the number of nodes.

___

### NbVPoles

▸ **NbVPoles**(): `number`

Obtain the number of control points in the V direction.

#### Returns

`number`

Return the number of control points.

___

### PeriodicNormalization

▸ **PeriodicNormalization**(`UV`): `void`

Normalize the node sequence periodically.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|UV | [dU: number, dV: number] | represents parameters in the U and V directions|

#### Returns

`void`

___

### Pole

▸ **Pole**(`UIndex`, `VIndex`): [`Mx3dGePoint`](Mx3dGePoint.md)

Retrieve control points for the specified U and V indices.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|UIndes | number | U-direction index|
|VIndes | number | V-direction index|

#### Returns

[`Mx3dGePoint`](Mx3dGePoint.md)

Return to control point.

___

### Poles

▸ **Poles**(): [`Mx3dGePoint`](Mx3dGePoint.md)[][]

Obtain all control points.

#### Returns

[`Mx3dGePoint`](Mx3dGePoint.md)[][]

Return the control point array.

___

### RemoveUKnot

▸ **RemoveUKnot**(`iIndex`, `iM`, `dTolerance`): `boolean`

Remove the U-direction node.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|IIndex | Number | Node Index|
|IM | number | multiplicity|
|DTolerance | number | tolerance value|

#### Returns

`boolean`

Return whether the removal was successful.

___

### RemoveVKnot

▸ **RemoveVKnot**(`iIndex`, `iM`, `dTolerance`): `boolean`

Remove the node in the V direction.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|IIndex | Number | Node Index|
|IM | number | multiplicity|
|DTolerance | number | tolerance value|

#### Returns

`boolean`

Return whether the removal was successful.

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

▸ **Rotated**(`A1`, `Ang`): [`Mx3dGeomBSplineSurface`](Mx3dGeomBSplineSurface.md)

Return the rotated new geometric object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|A1 | [Mx3dGeAxis] (Mx3dGeAxis. md) | Axis object|
|Ang | number | Rotation angle|

#### Returns

[`Mx3dGeomBSplineSurface`](Mx3dGeomBSplineSurface.md)

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

▸ **Scaled**(`P`, `S`): [`Mx3dGeomBSplineSurface`](Mx3dGeomBSplineSurface.md)

Return the scaled new geometric object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|P | [Mx3dGePoint] (Mx3dGePoint. md) | Point object|
|S | number | scaling ratio|

#### Returns

[`Mx3dGeomBSplineSurface`](Mx3dGeomBSplineSurface.md)

New geometric objects.

#### Inherited from

[Mx3dGeomBoundedSurface](Mx3dGeomBoundedSurface.md).[Scaled](Mx3dGeomBoundedSurface.md#scaled)

___

### Segment

▸ **Segment**(`U1`, `U2`, `V1`, `V2`): `void`

Retrieve surface fragments within the specified range of U and V.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|U1 | number | Starting U parameter|
|U2 | number | End the U parameter|
|V1 | number | Starting V parameter|
|V2 | number | End the V parameter|

#### Returns

`void`

___

### SetPole

▸ **SetPole**(`UIndex`, `VIndex`, `P`): `void`

Set control points for specified U and V indices.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|UIndes | number | U-direction index|
|VIndes | number | V-direction index|
|P | [Mx3dGePoint] (Mx3dGePoint. md) | Control point|

#### Returns

`void`

▸ **SetPole**(`UIndex`, `VIndex`, `P`, `Weight`): `void`

Set control points and weights for the specified U and V indices.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|UIndes | number | U-direction index|
|VIndes | number | V-direction index|
|P | [Mx3dGePoint] (Mx3dGePoint. md) | Control point|
|Weight | number | weight value|

#### Returns

`void`

___

### SetPoleCol

▸ **SetPoleCol**(`VIndex`, `CPoles`): `void`

Set the control point column for the specified V-direction index.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|VIndes | number | V-direction index|
|CPoles | [Mx3dGePoint] (Mx3dGePoint. md) [] | Control point array|

#### Returns

`void`

▸ **SetPoleCol**(`VIndex`, `CPoles`, `dCPoleWeights`): `void`

Set the control point column and weight for the specified V-direction index.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|VIndes | number | V-direction index|
|CPoles | [Mx3dGePoint] (Mx3dGePoint. md) [] | Control point array|
|DCPoleWeights | number [] | Control point weight array|

#### Returns

`void`

___

### SetPoleRow

▸ **SetPoleRow**(`UIndex`, `CPoles`): `void`

Set the control point row for the specified U-direction index.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|UIndes | number | U-direction index|
|CPoles | [Mx3dGePoint] (Mx3dGePoint. md) [] | Control point array|

#### Returns

`void`

▸ **SetPoleRow**(`UIndex`, `CPoles`, `dCPoleWeights`): `void`

Set the control point row and weight for the specified U-direction index.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|UIndes | number | U-direction index|
|CPoles | [Mx3dGePoint] (Mx3dGePoint. md) [] | Control point array|
|DCPoleWeights | number [] | Control point weight array|

#### Returns

`void`

___

### SetUKnot

▸ **SetUKnot**(`UIndex`, `K`): `void`

Set the node value in the U direction.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|UIndes | number | Node index|
|K | number | New node value|

#### Returns

`void`

▸ **SetUKnot**(`UIndex`, `K`, `M`): `void`

Set node values in the U direction, including multiplicity.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|UIndes | number | Node index|
|K | number | New node value|
|M | number | multiplicity|

#### Returns

`void`

___

### SetUKnots

▸ **SetUKnots**(`dUK`): `void`

Set the sequence of U-direction nodes.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|DUK | number [] | New U-direction node sequence|

#### Returns

`void`

___

### SetUNotPeriodic

▸ **SetUNotPeriodic**(): `void`

Set the U direction to non periodic.

#### Returns

`void`

___

### SetUOrigin

▸ **SetUOrigin**(`Index`): `void`

Set the origin index in the U direction.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Index | Number | Origin Index|

#### Returns

`void`

___

### SetUPeriodic

▸ **SetUPeriodic**(): `void`

Set the U direction to periodic.

#### Returns

`void`

___

### SetVKnot

▸ **SetVKnot**(`VIndex`, `K`): `void`

Set the node values in the V direction.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|VIndes | number | Node index|
|K | number | New node value|

#### Returns

`void`

▸ **SetVKnot**(`VIndex`, `K`, `M`): `void`

Set node values in the V direction, including multiplicity.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|VIndes | number | Node index|
|K | number | New node value|
|M | number | multiplicity|

#### Returns

`void`

___

### SetVKnots

▸ **SetVKnots**(`dVK`): `void`

Set the sequence of nodes in the V direction.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|DVK | number [] | New V-direction node sequence|

#### Returns

`void`

___

### SetVNotPeriodic

▸ **SetVNotPeriodic**(): `void`

Set the V direction to non periodic.

#### Returns

`void`

___

### SetVOrigin

▸ **SetVOrigin**(`Index`): `void`

Set the origin index in the V direction.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Index | Number | Origin Index|

#### Returns

`void`

___

### SetVPeriodic

▸ **SetVPeriodic**(): `void`

Set the V direction to periodic.

#### Returns

`void`

___

### SetWeight

▸ **SetWeight**(`UIndex`, `VIndex`, `Weight`): `void`

Set the weight values for the specified U and V indices.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|UIndes | number | U-direction index|
|VIndes | number | V-direction index|
|Weight | number | weight value|

#### Returns

`void`

___

### SetWeightCol

▸ **SetWeightCol**(`VIndex`, `dCPoleWeights`): `void`

Set the weight column for the specified V-direction index.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|VIndes | number | V-direction index|
|DCPoleWeights | number [] | Weight array|

#### Returns

`void`

___

### SetWeightRow

▸ **SetWeightRow**(`UIndex`, `dCPoleWeights`): `void`

Set the weight row for the specified U-direction index.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|UIndes | number | U-direction index|
|DCPoleWeights | number [] | Weight array|

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

▸ **Transformed**(`T`): [`Mx3dGeomBSplineSurface`](Mx3dGeomBSplineSurface.md)

Return the transformed new geometric object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|T | [Mx3dGetStrf] (Mx3dGetStrf. md) | Transform the object|

#### Returns

[`Mx3dGeomBSplineSurface`](Mx3dGeomBSplineSurface.md)

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

▸ **TranslatedBy2Points**(`P1`, `P2`): [`Mx3dGeomBSplineSurface`](Mx3dGeomBSplineSurface.md)

Return the new geometric object after translating through two points.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|P1 | [Mx3dGePoint] (Mx3dGePoint. md) | Starting point object|
|P2 | [Mx3dGePoint] (Mx3dGePoint. md) | End point object|

#### Returns

[`Mx3dGeomBSplineSurface`](Mx3dGeomBSplineSurface.md)

New geometric objects.

#### Inherited from

[Mx3dGeomBoundedSurface](Mx3dGeomBoundedSurface.md).[TranslatedBy2Points](Mx3dGeomBoundedSurface.md#translatedby2points)

___

### TranslatedByVec

▸ **TranslatedByVec**(`V`): [`Mx3dGeomBSplineSurface`](Mx3dGeomBSplineSurface.md)

Return the new geometric object after vector translation.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|V | [Mx3dGeVec] (Mx3dGeVec. md) | Vector object|

#### Returns

[`Mx3dGeomBSplineSurface`](Mx3dGeomBSplineSurface.md)

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

### UKnot

▸ **UKnot**(`UIndex`): `number`

Get the node value in the specified U direction.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|UIndes | number | Node index|

#### Returns

`number`

Return the node value.

___

### UKnotSequence

▸ **UKnotSequence**(): `number`[]

Obtain the sequence of U-direction nodes.

#### Returns

`number`[]

Return the node sequence.

___

### UKnots

▸ **UKnots**(): `number`[]

Retrieve the U-direction node array.

#### Returns

`number`[]

Return a node array.

___

### UMultiplicities

▸ **UMultiplicities**(): `number`[]

Retrieve the U-direction node multiplicity array.

#### Returns

`number`[]

Return an array of node multiplicity.

___

### UMultiplicity

▸ **UMultiplicity**(`UIndex`): `number`

Obtain U-direction node multiplicity.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|UIndes | number | Node index|

#### Returns

`number`

Return node multiplicity.

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

Reverse the sequence of U-direction nodes.

#### Returns

`void`

___

### UReversed

▸ **UReversed**(): [`Mx3dGeomBSplineSurface`](Mx3dGeomBSplineSurface.md)

Parameterization of reversing the U direction.

#### Returns

[`Mx3dGeomBSplineSurface`](Mx3dGeomBSplineSurface.md)

Return the current object to implement a chain call.

#### Inherited from

[Mx3dGeomBoundedSurface](Mx3dGeomBoundedSurface.md).[UReversed](Mx3dGeomBoundedSurface.md#ureversed)

___

### UReversedParameter

▸ **UReversedParameter**(`U`): `number`

Calculate the U-direction reverse parameter.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|The parameter value of 'U' | 'number'|

#### Returns

`number`

Return the reversed parameter value.

___

### VDegree

▸ **VDegree**(): `number`

Obtain the order in the V direction.

#### Returns

`number`

Return the order in the V direction.

___

### VKnot

▸ **VKnot**(`VIndex`): `number`

Get the node value in the specified V direction.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|VIndes | number | Node index|

#### Returns

`number`

Return the node value.

___

### VKnotSequence

▸ **VKnotSequence**(): `number`[]

Obtain the sequence of nodes in the V direction.

#### Returns

`number`[]

Return the node sequence.

___

### VKnots

▸ **VKnots**(): `number`[]

Retrieve the array of nodes in the V direction.

#### Returns

`number`[]

Return a node array.

___

### VMultiplicities

▸ **VMultiplicities**(): `number`[]

Retrieve the multiplicity array of nodes in the V direction.

#### Returns

`number`[]

Return an array of node multiplicity.

___

### VMultiplicity

▸ **VMultiplicity**(`VIndex`): `number`

Obtain the multiplicity of nodes in the V direction.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|VIndes | number | Node index|

#### Returns

`number`

Return node multiplicity.

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

Reverse the sequence of nodes in the V direction.

#### Returns

`void`

___

### VReversed

▸ **VReversed**(): [`Mx3dGeomBSplineSurface`](Mx3dGeomBSplineSurface.md)

Parameterization of reversing the V direction.

#### Returns

[`Mx3dGeomBSplineSurface`](Mx3dGeomBSplineSurface.md)

Return the current object to implement a chain call.

#### Inherited from

[Mx3dGeomBoundedSurface](Mx3dGeomBoundedSurface.md).[VReversed](Mx3dGeomBoundedSurface.md#vreversed)

___

### VReversedParameter

▸ **VReversedParameter**(`V`): `number`

Calculate the reverse parameter in the V direction.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|V | number | parameter value|

#### Returns

`number`

Return the reversed parameter value.

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

Retrieve the weight values for the specified U and V indices.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|UIndes | number | U-direction index|
|VIndes | number | V-direction index|

#### Returns

`number`

Return weight values.

___

### Weights

▸ **Weights**(): `number`[][]

Retrieve all weight arrays.

#### Returns

`number`[][]

Return the weight array.

___

### DownCast

▸ `Static` **DownCast**(`theObject`): [`Mx3dGeomBSplineSurface`](Mx3dGeomBSplineSurface.md)

Convert parent object to Mx3dGeomBSpline Surface class object

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheObject | [Mx3dGeomObject] (Mx3dGeomObject. md) | Parent class object|

#### Returns

[`Mx3dGeomBSplineSurface`](Mx3dGeomBSplineSurface.md)

Mx3dGeomBSpline Surface class object
