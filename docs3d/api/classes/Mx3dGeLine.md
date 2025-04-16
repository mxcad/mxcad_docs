[mxcad_3d API 文档](../README.md) / Mx3dGeLine

# Class: Mx3dGeLine

表示非参数几何直线的类。

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

使用轴创建一条直线。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `A1` | [`Mx3dGeAxis`](Mx3dGeAxis.md) | 轴对象。 |

#### Overrides

Mx3dGeCurve.constructor

• **new Mx3dGeLine**(`P`, `V`)

使用点和方向创建一条直线。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `P` | [`Mx3dGePoint`](Mx3dGePoint.md) | 起点。 |
| `V` | [`Mx3dGeDir`](Mx3dGeDir.md) | 方向。 |

#### Overrides

Mx3dGeCurve.constructor

## Methods

### Continuity

▸ **Continuity**(): [`MxGAShapeEnum`](../enums/MdGe.MxGAShapeEnum.md)

获取直线的连续性。

#### Returns

[`MxGAShapeEnum`](../enums/MdGe.MxGAShapeEnum.md)

连续性枚举值。

___

### D0

▸ **D0**(`U`, `P`): `void`

获取给定参数的点。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `U` | `number` | 参数值。 |
| `P` | [`Mx3dGePoint`](Mx3dGePoint.md) | 点对象。 |

#### Returns

`void`

___

### D1

▸ **D1**(`U`, `P`, `V1`): `void`

获取给定参数的点和一阶导数向量。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `U` | `number` | 参数值。 |
| `P` | [`Mx3dGePoint`](Mx3dGePoint.md) | 点对象。 |
| `V1` | [`Mx3dGeVec`](Mx3dGeVec.md) | 一阶导数向量。 |

#### Returns

`void`

___

### D2

▸ **D2**(`U`, `P`, `V1`, `V2`): `void`

获取给定参数的点、一阶导数向量和二阶导数向量。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `U` | `number` | 参数值。 |
| `P` | [`Mx3dGePoint`](Mx3dGePoint.md) | 点对象。 |
| `V1` | [`Mx3dGeVec`](Mx3dGeVec.md) | 一阶导数向量。 |
| `V2` | [`Mx3dGeVec`](Mx3dGeVec.md) | 二阶导数向量。 |

#### Returns

`void`

___

### D3

▸ **D3**(`U`, `P`, `V1`, `V2`, `V3`): `void`

获取给定参数的点、一阶导数向量、二阶导数向量和三阶导数向量。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `U` | `number` | 参数值。 |
| `P` | [`Mx3dGePoint`](Mx3dGePoint.md) | 点对象。 |
| `V1` | [`Mx3dGeVec`](Mx3dGeVec.md) | 一阶导数向量。 |
| `V2` | [`Mx3dGeVec`](Mx3dGeVec.md) | 二阶导数向量。 |
| `V3` | [`Mx3dGeVec`](Mx3dGeVec.md) | 三阶导数向量。 |

#### Returns

`void`

___

### DN

▸ **DN**(`U`, `N`): [`Mx3dGeVec`](Mx3dGeVec.md)

获取给定参数的N阶导数向量。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `U` | `number` | 参数值。 |
| `N` | `number` | 导数阶数。 |

#### Returns

[`Mx3dGeVec`](Mx3dGeVec.md)

N阶导数向量。

___

### Edge

▸ **Edge**(`p1`, `p2`): [`Mx3dShapeEdge`](Mx3dShapeEdge.md)

获取指定参数区间内的边界。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `p1` | `number` | 起始参数。 |
| `p2` | `number` | 终止参数。 |

#### Returns

[`Mx3dShapeEdge`](Mx3dShapeEdge.md)

边界对象。

___

### FirstParameter

▸ **FirstParameter**(): `number`

获取直线的起始参数。

#### Returns

`number`

起始参数。

___

### IsCN

▸ **IsCN**(`N`): `boolean`

检查直线的连续性等级。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `N` | `number` | 连续性等级。 |

#### Returns

`boolean`

是否达到指定连续性等级。

___

### IsClosed

▸ **IsClosed**(): `boolean`

检查直线是否闭合。

#### Returns

`boolean`

是否闭合。

___

### IsPeriodic

▸ **IsPeriodic**(): `boolean`

检查直线是否是周期性的。

#### Returns

`boolean`

是否周期性。

___

### LastParameter

▸ **LastParameter**(): `number`

获取直线的终止参数。

#### Returns

`number`

终止参数。

___

### ParametricTransformation

▸ **ParametricTransformation**(`T`): `number`

获取参数变换的结果。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `T` | [`Mx3dGeTrsf`](Mx3dGeTrsf.md) | 变换对象。 |

#### Returns

`number`

参数变换结果。

___

### Period

▸ **Period**(): `number`

获取直线的周期。

#### Returns

`number`

周期。

___

### Position

▸ **Position**(): [`Mx3dGeAxis`](Mx3dGeAxis.md)

获取直线的位置。

#### Returns

[`Mx3dGeAxis`](Mx3dGeAxis.md)

轴对象。

___

### Reverse

▸ **Reverse**(): `void`

反转直线的方向。

#### Returns

`void`

___

### Reversed

▸ **Reversed**(): [`Mx3dGeLine`](Mx3dGeLine.md)

获取反转方向后的新直线。

#### Returns

[`Mx3dGeLine`](Mx3dGeLine.md)

反转后的新直线对象。

___

### ReversedParameter

▸ **ReversedParameter**(`U`): `number`

获取反转参数。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `U` | `number` | 原参数。 |

#### Returns

`number`

反转后的参数。

___

### SetDirection

▸ **SetDirection**(`V`): `void`

设置直线的方向。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `V` | [`Mx3dGeDir`](Mx3dGeDir.md) | 方向对象。 |

#### Returns

`void`

___

### SetLocation

▸ **SetLocation**(`P`): `void`

设置直线的起点。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `P` | [`Mx3dGePoint`](Mx3dGePoint.md) | 点对象。 |

#### Returns

`void`

___

### SetPosition

▸ **SetPosition**(`A1`): `void`

设置直线的位置。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `A1` | [`Mx3dGeAxis`](Mx3dGeAxis.md) | 轴对象。 |

#### Returns

`void`

___

### Transform

▸ **Transform**(`T`): `void`

对直线应用变换。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `T` | [`Mx3dGeTrsf`](Mx3dGeTrsf.md) | 变换对象。 |

#### Returns

`void`

___

### TransformedParameter

▸ **TransformedParameter**(`U`, `T`): `number`

获取变换后的参数。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `U` | `number` | 原参数。 |
| `T` | [`Mx3dGeTrsf`](Mx3dGeTrsf.md) | 变换对象。 |

#### Returns

`number`

变换后的参数。

___

### Value

▸ **Value**(`U`): [`Mx3dGePoint`](Mx3dGePoint.md)

获取给定参数对应的点。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `U` | `number` | 参数值。 |

#### Returns

[`Mx3dGePoint`](Mx3dGePoint.md)

点对象。
