[mxcad_3d API Document](../README. md)/Mx3dGeLine

# Class: Mx3dGeLine

A class that represents non parametric geometric lines.

## Hierarchy

- [`Mx3dGeCurve`](Mx3dGeCurve.md)

  ↳ **`Mx3dGeLine`**

## Table of contents

### Constructors

- [constructor](Mx3dGeLine.md#constructor)

### Methods

- [Continuity](Mx3dGeLine.md#continuity)
- [D0](Mx3dGeLine.md#d0)
- [D1](Mx3dGeLine.md#d1)
- [D2](Mx3dGeLine.md#d2)
- [D3](Mx3dGeLine.md#d3)
- [DN](Mx3dGeLine.md#dn)
- [Edge](Mx3dGeLine.md#edge)
- [FirstParameter](Mx3dGeLine.md#firstparameter)
- [IsCN](Mx3dGeLine.md#iscn)
- [IsClosed](Mx3dGeLine.md#isclosed)
- [IsPeriodic](Mx3dGeLine.md#isperiodic)
- [LastParameter](Mx3dGeLine.md#lastparameter)
- [ParametricTransformation](Mx3dGeLine.md#parametrictransformation)
- [Period](Mx3dGeLine.md#period)
- [Position](Mx3dGeLine.md#position)
- [Reverse](Mx3dGeLine.md#reverse)
- [Reversed](Mx3dGeLine.md#reversed)
- [ReversedParameter](Mx3dGeLine.md#reversedparameter)
- [SetDirection](Mx3dGeLine.md#setdirection)
- [SetLocation](Mx3dGeLine.md#setlocation)
- [SetPosition](Mx3dGeLine.md#setposition)
- [Transform](Mx3dGeLine.md#transform)
- [TransformedParameter](Mx3dGeLine.md#transformedparameter)
- [Value](Mx3dGeLine.md#value)

## Constructors

### constructor

• **new Mx3dGeLine**(`A1`)

Create a straight line using an axis.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|A1 | [Mx3dGeAxis] (Mx3dGeAxis. md) | Axis object|

#### Overrides

Mx3dGeCurve.constructor

• **new Mx3dGeLine**(`P`, `V`)

Create a straight line using points and directions.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|P | [Mx3dGePoint] (Mx3dGePoint. md) | Starting point|
|V | [Mx3dGeDir] (Mx3dGeDir. md) | Direction|

#### Overrides

Mx3dGeCurve.constructor

## Methods

### Continuity

▸ **Continuity**(): [`MxGAShapeEnum`](../enums/MdGe.MxGAShapeEnum.md)

Obtain the continuity of a straight line.

#### Returns

[`MxGAShapeEnum`](../enums/MdGe.MxGAShapeEnum.md)

Continuity enumeration values.

___

### D0

▸ **D0**(`U`, `P`): `void`

Get the point of the given parameter.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|The parameter value of 'U' | 'number'|
|P | [Mx3dGePoint] (Mx3dGePoint. md) | Point object|

#### Returns

`void`

___

### D1

▸ **D1**(`U`, `P`, `V1`): `void`

Obtain the point and first derivative vector of the given parameters.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|The parameter value of 'U' | 'number'|
|P | [Mx3dGePoint] (Mx3dGePoint. md) | Point object|
|V1 | [Mx3dGeVec] (Mx3dGeVec. md) | First derivative vector|

#### Returns

`void`

___

### D2

▸ **D2**(`U`, `P`, `V1`, `V2`): `void`

Obtain the point, first derivative vector, and second derivative vector of the given parameters.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|The parameter value of 'U' | 'number'|
|P | [Mx3dGePoint] (Mx3dGePoint. md) | Point object|
|V1 | [Mx3dGeVec] (Mx3dGeVec. md) | First derivative vector|
|V2 | [Mx3dGeVec] (Mx3dGeVec. md) | Second derivative vector|

#### Returns

`void`

___

### D3

▸ **D3**(`U`, `P`, `V1`, `V2`, `V3`): `void`

Obtain the point, first derivative vector, second derivative vector, and third derivative vector of the given parameters.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|The parameter value of 'U' | 'number'|
|P | [Mx3dGePoint] (Mx3dGePoint. md) | Point object|
|V1 | [Mx3dGeVec] (Mx3dGeVec. md) | First derivative vector|
|V2 | [Mx3dGeVec] (Mx3dGeVec. md) | Second derivative vector|
|V3 | [Mx3dGeVec] (Mx3dGeVec. md) | Third derivative vector|

#### Returns

`void`

___

### DN

▸ **DN**(`U`, `N`): [`Mx3dGeVec`](Mx3dGeVec.md)

Obtain the Nth derivative vector of the given parameters.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|The parameter value of 'U' | 'number'|
|N | number | derivative order|

#### Returns

[`Mx3dGeVec`](Mx3dGeVec.md)

N-order derivative vector.

___

### Edge

▸ **Edge**(`p1`, `p2`): [`Mx3dShapeEdge`](Mx3dShapeEdge.md)

Retrieve the boundary within the specified parameter interval.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|P1 | Number | Starting parameter|
|P2 | number | Terminate parameter|

#### Returns

[`Mx3dShapeEdge`](Mx3dShapeEdge.md)

Boundary objects.

___

### FirstParameter

▸ **FirstParameter**(): `number`

Get the starting parameters of the line.

#### Returns

`number`

Starting parameters.

___

### IsCN

▸ **IsCN**(`N`): `boolean`

Check the continuity level of the straight line.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|N | number | Continuity level|

#### Returns

`boolean`

Has the specified continuity level been reached.

___

### IsClosed

▸ **IsClosed**(): `boolean`

Check if the straight line is closed.

#### Returns

`boolean`

Is it closed.

___

### IsPeriodic

▸ **IsPeriodic**(): `boolean`

Check if the straight line is periodic.

#### Returns

`boolean`

Is it periodic.

___

### LastParameter

▸ **LastParameter**(): `number`

Get the termination parameter of the line.

#### Returns

`number`

Terminate parameter.

___

### ParametricTransformation

▸ **ParametricTransformation**(`T`): `number`

Obtain the result of parameter transformation.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|T | [Mx3dGetStrf] (Mx3dGetStrf. md) | Transform the object|

#### Returns

`number`

Parameter transformation result.

___

### Period

▸ **Period**(): `number`

Obtain the period of the straight line.

#### Returns

`number`

Cycle.

___

### Position

▸ **Position**(): [`Mx3dGeAxis`](Mx3dGeAxis.md)

Obtain the position of the straight line.

#### Returns

[`Mx3dGeAxis`](Mx3dGeAxis.md)

Axis object.

___

### Reverse

▸ **Reverse**(): `void`

Reverse the direction of a straight line.

#### Returns

`void`

___

### Reversed

▸ **Reversed**(): [`Mx3dGeLine`](Mx3dGeLine.md)

Obtain a new straight line with reversed direction.

#### Returns

[`Mx3dGeLine`](Mx3dGeLine.md)

The reversed new line object.

___

### ReversedParameter

▸ **ReversedParameter**(`U`): `number`

Get the inversion parameter.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|U | number | Original parameter|

#### Returns

`number`

Inverted parameters.

___

### SetDirection

▸ **SetDirection**(`V`): `void`

Set the direction of the line.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|V | [Mx3dGeDir] (Mx3dGeDir. md) | Directional object|

#### Returns

`void`

___

### SetLocation

▸ **SetLocation**(`P`): `void`

Set the starting point of the line.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|P | [Mx3dGePoint] (Mx3dGePoint. md) | Point object|

#### Returns

`void`

___

### SetPosition

▸ **SetPosition**(`A1`): `void`

Set the position of the line.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|A1 | [Mx3dGeAxis] (Mx3dGeAxis. md) | Axis object|

#### Returns

`void`

___

### Transform

▸ **Transform**(`T`): `void`

Apply transformations to straight lines.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|T | [Mx3dGetStrf] (Mx3dGetStrf. md) | Transform the object|

#### Returns

`void`

___

### TransformedParameter

▸ **TransformedParameter**(`U`, `T`): `number`

Obtain the transformed parameters.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|U | number | Original parameter|
|T | [Mx3dGetStrf] (Mx3dGetStrf. md) | Transform the object|

#### Returns

`number`

The transformed parameters.

___

### Value

▸ **Value**(`U`): [`Mx3dGePoint`](Mx3dGePoint.md)

Retrieve the point corresponding to the given parameter.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|The parameter value of 'U' | 'number'|

#### Returns

[`Mx3dGePoint`](Mx3dGePoint.md)

Point object.
