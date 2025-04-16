[mxcad_3d API 文档](../README.md) / Mx3dGeomBSplineCurve

# Class: Mx3dGeomBSplineCurve

代表一个B样条曲线。
该类继承自Mx3dGeomBoundedCurve并封装了B样条曲线的操作和属性。

## Hierarchy

- [`Mx3dGeomBoundedCurve`](Mx3dGeomBoundedCurve.md)

  ↳ **`Mx3dGeomBSplineCurve`**

## Table of contents

### Constructors

- [constructor](Mx3dGeomBSplineCurve.md#constructor)

### Methods

- [Continuity](Mx3dGeomBSplineCurve.md#continuity)
- [Copy](Mx3dGeomBSplineCurve.md#copy)
- [D0](Mx3dGeomBSplineCurve.md#d0)
- [D1](Mx3dGeomBSplineCurve.md#d1)
- [D2](Mx3dGeomBSplineCurve.md#d2)
- [D3](Mx3dGeomBSplineCurve.md#d3)
- [DN](Mx3dGeomBSplineCurve.md#dn)
- [Degree](Mx3dGeomBSplineCurve.md#degree)
- [DynamicType](Mx3dGeomBSplineCurve.md#dynamictype)
- [Edge](Mx3dGeomBSplineCurve.md#edge)
- [EndPoint](Mx3dGeomBSplineCurve.md#endpoint)
- [FirstParameter](Mx3dGeomBSplineCurve.md#firstparameter)
- [FirstUKnotIndex](Mx3dGeomBSplineCurve.md#firstuknotindex)
- [IncreaseDegree](Mx3dGeomBSplineCurve.md#increasedegree)
- [IncreaseMultiplicity](Mx3dGeomBSplineCurve.md#increasemultiplicity)
- [IncrementMultiplicity](Mx3dGeomBSplineCurve.md#incrementmultiplicity)
- [InsertKnot](Mx3dGeomBSplineCurve.md#insertknot)
- [InsertKnots](Mx3dGeomBSplineCurve.md#insertknots)
- [IsCN](Mx3dGeomBSplineCurve.md#iscn)
- [IsClosed](Mx3dGeomBSplineCurve.md#isclosed)
- [IsEqual](Mx3dGeomBSplineCurve.md#isequal)
- [IsG1](Mx3dGeomBSplineCurve.md#isg1)
- [IsPeriodic](Mx3dGeomBSplineCurve.md#isperiodic)
- [IsRational](Mx3dGeomBSplineCurve.md#isrational)
- [Knot](Mx3dGeomBSplineCurve.md#knot)
- [Knots](Mx3dGeomBSplineCurve.md#knots)
- [LastParameter](Mx3dGeomBSplineCurve.md#lastparameter)
- [LastUKnotIndex](Mx3dGeomBSplineCurve.md#lastuknotindex)
- [LocalD0](Mx3dGeomBSplineCurve.md#locald0)
- [LocalD1](Mx3dGeomBSplineCurve.md#locald1)
- [LocalD2](Mx3dGeomBSplineCurve.md#locald2)
- [LocalD3](Mx3dGeomBSplineCurve.md#locald3)
- [LocalDN](Mx3dGeomBSplineCurve.md#localdn)
- [LocalValue](Mx3dGeomBSplineCurve.md#localvalue)
- [MirrorByAxis](Mx3dGeomBSplineCurve.md#mirrorbyaxis)
- [MirrorByCSYSR](Mx3dGeomBSplineCurve.md#mirrorbycsysr)
- [MirrorByPoint](Mx3dGeomBSplineCurve.md#mirrorbypoint)
- [MirroredByAxis](Mx3dGeomBSplineCurve.md#mirroredbyaxis)
- [MirroredByCSYSR](Mx3dGeomBSplineCurve.md#mirroredbycsysr)
- [MirroredByPoint](Mx3dGeomBSplineCurve.md#mirroredbypoint)
- [Multiplicities](Mx3dGeomBSplineCurve.md#multiplicities)
- [Multiplicity](Mx3dGeomBSplineCurve.md#multiplicity)
- [NbKnots](Mx3dGeomBSplineCurve.md#nbknots)
- [NbPoles](Mx3dGeomBSplineCurve.md#nbpoles)
- [OffsetCurve](Mx3dGeomBSplineCurve.md#offsetcurve)
- [Period](Mx3dGeomBSplineCurve.md#period)
- [Pole](Mx3dGeomBSplineCurve.md#pole)
- [Poles](Mx3dGeomBSplineCurve.md#poles)
- [RemoveKnot](Mx3dGeomBSplineCurve.md#removeknot)
- [Reverse](Mx3dGeomBSplineCurve.md#reverse)
- [Reversed](Mx3dGeomBSplineCurve.md#reversed)
- [ReversedParameter](Mx3dGeomBSplineCurve.md#reversedparameter)
- [Rotate](Mx3dGeomBSplineCurve.md#rotate)
- [Rotated](Mx3dGeomBSplineCurve.md#rotated)
- [Scale](Mx3dGeomBSplineCurve.md#scale)
- [Scaled](Mx3dGeomBSplineCurve.md#scaled)
- [Segment](Mx3dGeomBSplineCurve.md#segment)
- [SetKnot](Mx3dGeomBSplineCurve.md#setknot)
- [SetKnots](Mx3dGeomBSplineCurve.md#setknots)
- [SetNotPeriodic](Mx3dGeomBSplineCurve.md#setnotperiodic)
- [SetOrigin](Mx3dGeomBSplineCurve.md#setorigin)
- [SetPeriodic](Mx3dGeomBSplineCurve.md#setperiodic)
- [SetPole](Mx3dGeomBSplineCurve.md#setpole)
- [SetWeight](Mx3dGeomBSplineCurve.md#setweight)
- [StartPoint](Mx3dGeomBSplineCurve.md#startpoint)
- [Transform](Mx3dGeomBSplineCurve.md#transform)
- [Transformed](Mx3dGeomBSplineCurve.md#transformed)
- [TranslateBy2Points](Mx3dGeomBSplineCurve.md#translateby2points)
- [TranslateByVec](Mx3dGeomBSplineCurve.md#translatebyvec)
- [TranslatedBy2Points](Mx3dGeomBSplineCurve.md#translatedby2points)
- [TranslatedByVec](Mx3dGeomBSplineCurve.md#translatedbyvec)
- [Value](Mx3dGeomBSplineCurve.md#value)
- [Weight](Mx3dGeomBSplineCurve.md#weight)
- [Weights](Mx3dGeomBSplineCurve.md#weights)
- [Wire](Mx3dGeomBSplineCurve.md#wire)
- [DownCast](Mx3dGeomBSplineCurve.md#downcast)

## Constructors

### constructor

• **new Mx3dGeomBSplineCurve**(`Poles`, `Knots`, `Multiplicities`, `Degree`)

构造函数用于创建一个B样条曲线。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Poles` | [`Mx3dGePoint`](Mx3dGePoint.md)[] | 控制点的数组。 |
| `Knots` | `number`[] | 节点序列的数组。 |
| `Multiplicities` | `number`[] | 节点的多重性。 |
| `Degree` | `number` | 曲线的阶数。 |

#### Overrides

Mx3dGeomBoundedCurve.constructor

• **new Mx3dGeomBSplineCurve**(`Poles`, `Weights`, `Knots`, `Multiplicities`, `Degree`)

构造函数用于创建一个带权重的B样条曲线。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Poles` | [`Mx3dGePoint`](Mx3dGePoint.md)[] | 控制点的数组。 |
| `Weights` | `number`[] | 控制点的权重数组。 |
| `Knots` | `number`[] | 节点序列的数组。 |
| `Multiplicities` | `number`[] | 节点的多重性。 |
| `Degree` | `number` | 曲线的阶数。 |

#### Overrides

Mx3dGeomBoundedCurve.constructor

## Methods

### Continuity

▸ **Continuity**(): [`MxGAShapeEnum`](../enums/MdGe.MxGAShapeEnum.md)

获取曲线的连续性。

#### Returns

[`MxGAShapeEnum`](../enums/MdGe.MxGAShapeEnum.md)

曲线的连续性。

___

### Copy

▸ **Copy**(): [`Mx3dGeomObject`](Mx3dGeomObject.md)

创建当前B样条曲线的副本。

#### Returns

[`Mx3dGeomObject`](Mx3dGeomObject.md)

返回一个新的B样条曲线对象。

___

### D0

▸ **D0**(`U`, `P`): `void`

在给定参数处计算曲线的点。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `U` | `number` | 参数。 |
| `P` | [`Mx3dGePoint`](Mx3dGePoint.md) | 结果点。 |

#### Returns

`void`

___

### D1

▸ **D1**(`U`, `P`, `V1`): `void`

在给定参数处计算曲线的点和一阶导数。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `U` | `number` | 参数。 |
| `P` | [`Mx3dGePoint`](Mx3dGePoint.md) | 结果点。 |
| `V1` | [`Mx3dGeVec`](Mx3dGeVec.md) | 一阶导数。 |

#### Returns

`void`

___

### D2

▸ **D2**(`U`, `P`, `V1`, `V2`): `void`

在给定参数处计算曲线的点、一阶导数和二阶导数。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `U` | `number` | 参数。 |
| `P` | [`Mx3dGePoint`](Mx3dGePoint.md) | 结果点。 |
| `V1` | [`Mx3dGeVec`](Mx3dGeVec.md) | 一阶导数。 |
| `V2` | [`Mx3dGeVec`](Mx3dGeVec.md) | 二阶导数。 |

#### Returns

`void`

___

### D3

▸ **D3**(`U`, `P`, `V1`, `V2`, `V3`): `void`

在给定参数处计算曲线的点、一阶导数、二阶导数和三阶导数。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `U` | `number` | 参数。 |
| `P` | [`Mx3dGePoint`](Mx3dGePoint.md) | 结果点。 |
| `V1` | [`Mx3dGeVec`](Mx3dGeVec.md) | 一阶导数。 |
| `V2` | [`Mx3dGeVec`](Mx3dGeVec.md) | 二阶导数。 |
| `V3` | [`Mx3dGeVec`](Mx3dGeVec.md) | 三阶导数。 |

#### Returns

`void`

___

### DN

▸ **DN**(`U`, `N`): [`Mx3dGeVec`](Mx3dGeVec.md)

在给定参数处计算曲线的N阶导数。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `U` | `number` | 参数。 |
| `N` | `number` | 阶数。 |

#### Returns

[`Mx3dGeVec`](Mx3dGeVec.md)

N阶导数。

___

### Degree

▸ **Degree**(): `number`

获取曲线的阶数。

#### Returns

`number`

曲线的阶数。

___

### DynamicType

▸ **DynamicType**(): `string`

返回对象的动态类型。

#### Returns

`string`

动态类型的字符串。

#### Overrides

[Mx3dGeomBoundedCurve](Mx3dGeomBoundedCurve.md).[DynamicType](Mx3dGeomBoundedCurve.md#dynamictype)

___

### Edge

▸ **Edge**(`p1`, `p2`): [`Mx3dShapeEdge`](Mx3dShapeEdge.md)

获取曲线的边。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `p1` | `number` | 边的起始点参数。 |
| `p2` | `number` | 边的终止点参数。 |

#### Returns

[`Mx3dShapeEdge`](Mx3dShapeEdge.md)

返回指定参数范围内的曲线边。

___

### EndPoint

▸ **EndPoint**(): [`Mx3dGePoint`](Mx3dGePoint.md)

获取曲线的终点。

#### Returns

[`Mx3dGePoint`](Mx3dGePoint.md)

曲线的终点。

___

### FirstParameter

▸ **FirstParameter**(): `number`

返回曲线的第一个参数值。
通常用于确定曲线的起始点。

#### Returns

`number`

第一个参数值。

___

### FirstUKnotIndex

▸ **FirstUKnotIndex**(): `number`

获取曲线的第一个节点索引。

#### Returns

`number`

第一个节点索引。

___

### IncreaseDegree

▸ **IncreaseDegree**(`Degree`): `void`

提高曲线的阶数。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Degree` | `number` | 新的阶数。 |

#### Returns

`void`

___

### IncreaseMultiplicity

▸ **IncreaseMultiplicity**(`Index`, `M`): `void`

提高指定索引处的节点多重性。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Index` | `number` | 节点的索引。 |
| `M` | `number` | 新的多重性。 |

#### Returns

`void`

▸ **IncreaseMultiplicity**(`I1`, `I2`, `M`): `void`

提高指定范围内的节点多重性。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `I1` | `number` | 范围起始索引。 |
| `I2` | `number` | 范围结束索引。 |
| `M` | `number` | 新的多重性。 |

#### Returns

`void`

___

### IncrementMultiplicity

▸ **IncrementMultiplicity**(`I1`, `I2`, `M`): `void`

增量提高指定范围内的节点多重性。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `I1` | `number` | 起始索引。 |
| `I2` | `number` | 结束索引。 |
| `M` | `number` | 增加的多重性值。 |

#### Returns

`void`

___

### InsertKnot

▸ **InsertKnot**(`U`, `M?`, `ParametricTolerance?`, `Add?`): `void`

插入一个新的节点。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `U` | `number` | 新节点的位置。 |
| `M?` | `number` | 新节点的多重性（可选）。 |
| `ParametricTolerance?` | `number` | 参数容差（可选）。 |
| `Add?` | `boolean` | 是否添加节点而不是替换（可选）。 |

#### Returns

`void`

___

### InsertKnots

▸ **InsertKnots**(`Knots`, `Mults`, `ParametricTolerance?`, `Add?`): `void`

插入多个新的节点。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Knots` | `number`[] | 新节点的位置数组。 |
| `Mults` | `number`[] | 新节点的多重性数组。 |
| `ParametricTolerance?` | `number` | 参数容差（可选）。 |
| `Add?` | `boolean` | 是否添加节点而不是替换（可选）。 |

#### Returns

`void`

___

### IsCN

▸ **IsCN**(`N`): `boolean`

检查曲线在指定阶数下是否连续。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `N` | `number` | 阶数。 |

#### Returns

`boolean`

如果曲线在指定阶数下是连续的，则返回true；否则返回false。

___

### IsClosed

▸ **IsClosed**(): `boolean`

检查曲线是否闭合。

#### Returns

`boolean`

如果曲线闭合，则返回true；否则返回false。

___

### IsEqual

▸ **IsEqual**(`theOther`, `thePreci`): `boolean`

比较当前曲线与另一条曲线的相等性。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theOther` | [`Mx3dGeomBSplineCurve`](Mx3dGeomBSplineCurve.md) | 另一个B样条曲线对象。 |
| `thePreci` | `number` | 比较精度。 |

#### Returns

`boolean`

如果两条曲线在指定精度下相等，返回true；否则返回false。

___

### IsG1

▸ **IsG1**(`theTf`, `theTl`, `theAngTol`): `boolean`

检查曲线在指定范围内是否满足G1连续性。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theTf` | `number` | 起始参数。 |
| `theTl` | `number` | 结束参数。 |
| `theAngTol` | `number` | 角度公差。 |

#### Returns

`boolean`

如果曲线在指定范围内满足G1连续性，则返回true；否则返回false。

___

### IsPeriodic

▸ **IsPeriodic**(): `boolean`

检查曲线是否周期性。

#### Returns

`boolean`

如果曲线是周期性的，则返回true；否则返回false。

___

### IsRational

▸ **IsRational**(): `boolean`

检查曲线是否是有理的。

#### Returns

`boolean`

如果曲线是有理的，则返回true；否则返回false。

___

### Knot

▸ **Knot**(`Index`): `number`

获取曲线在指定索引处的节点。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Index` | `number` | 节点的索引。 |

#### Returns

`number`

节点。

___

### Knots

▸ **Knots**(): `number`[]

获取曲线的节点序列。

#### Returns

`number`[]

节点序列的数组。

___

### LastParameter

▸ **LastParameter**(): `number`

返回曲线的最后一个参数值。
通常用于确定曲线的终点。

#### Returns

`number`

最后一个参数值。

___

### LastUKnotIndex

▸ **LastUKnotIndex**(): `number`

获取曲线的最后一个节点索引。

#### Returns

`number`

最后一个节点索引。

___

### LocalD0

▸ **LocalD0**(`U`, `FromK1`, `ToK2`, `P`): `void`

在指定范围内计算局部参数的点。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `U` | `number` | 参数。 |
| `FromK1` | `number` | 起始节点索引。 |
| `ToK2` | `number` | 结束节点索引。 |
| `P` | [`Mx3dGePoint`](Mx3dGePoint.md) | 结果点。 |

#### Returns

`void`

___

### LocalD1

▸ **LocalD1**(`U`, `FromK1`, `ToK2`, `P`, `V1`): `void`

在指定范围内计算局部参数的点和一阶导数。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `U` | `number` | 参数。 |
| `FromK1` | `number` | 起始节点索引。 |
| `ToK2` | `number` | 结束节点索引。 |
| `P` | [`Mx3dGePoint`](Mx3dGePoint.md) | 结果点。 |
| `V1` | [`Mx3dGeVec`](Mx3dGeVec.md) | 一阶导数。 |

#### Returns

`void`

___

### LocalD2

▸ **LocalD2**(`U`, `FromK1`, `ToK2`, `P`, `V1`, `V2`): `void`

在指定范围内计算局部参数的点、一阶导数和二阶导数。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `U` | `number` | 参数。 |
| `FromK1` | `number` | 起始节点索引。 |
| `ToK2` | `number` | 结束节点索引。 |
| `P` | [`Mx3dGePoint`](Mx3dGePoint.md) | 结果点。 |
| `V1` | [`Mx3dGeVec`](Mx3dGeVec.md) | 一阶导数。 |
| `V2` | [`Mx3dGeVec`](Mx3dGeVec.md) | 二阶导数。 |

#### Returns

`void`

___

### LocalD3

▸ **LocalD3**(`U`, `FromK1`, `ToK2`, `P`, `V1`, `V2`, `V3`): `void`

在指定范围内计算局部参数的点、一阶导数、二阶导数和三阶导数。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `U` | `number` | 参数。 |
| `FromK1` | `number` | 起始节点索引。 |
| `ToK2` | `number` | 结束节点索引。 |
| `P` | [`Mx3dGePoint`](Mx3dGePoint.md) | 结果点。 |
| `V1` | [`Mx3dGeVec`](Mx3dGeVec.md) | 一阶导数。 |
| `V2` | [`Mx3dGeVec`](Mx3dGeVec.md) | 二阶导数。 |
| `V3` | [`Mx3dGeVec`](Mx3dGeVec.md) | 三阶导数。 |

#### Returns

`void`

___

### LocalDN

▸ **LocalDN**(`U`, `FromK1`, `ToK2`, `N`): [`Mx3dGeVec`](Mx3dGeVec.md)

在指定范围内计算局部参数的N阶导数。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `U` | `number` | 参数。 |
| `FromK1` | `number` | 起始节点索引。 |
| `ToK2` | `number` | 结束节点索引。 |
| `N` | `number` | 阶数。 |

#### Returns

[`Mx3dGeVec`](Mx3dGeVec.md)

N阶导数。

___

### LocalValue

▸ **LocalValue**(`U`, `FromK1`, `ToK2`): [`Mx3dGePoint`](Mx3dGePoint.md)

在指定范围内计算局部参数的点。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `U` | `number` | 参数。 |
| `FromK1` | `number` | 起始节点索引。 |
| `ToK2` | `number` | 结束节点索引。 |

#### Returns

[`Mx3dGePoint`](Mx3dGePoint.md)

局部参数的点。

___

### MirrorByAxis

▸ **MirrorByAxis**(`A1`): `void`

通过轴对几何对象进行镜像变换。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `A1` | [`Mx3dGeAxis`](Mx3dGeAxis.md) | 轴对象。 |

#### Returns

`void`

#### Inherited from

[Mx3dGeomBoundedCurve](Mx3dGeomBoundedCurve.md).[MirrorByAxis](Mx3dGeomBoundedCurve.md#mirrorbyaxis)

___

### MirrorByCSYSR

▸ **MirrorByCSYSR**(`A2`): `void`

通过右手坐标系对几何对象进行镜像变换。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `A2` | [`Mx3dGeCSYSR`](Mx3dGeCSYSR.md) | 右手坐标系对象。 |

#### Returns

`void`

#### Inherited from

[Mx3dGeomBoundedCurve](Mx3dGeomBoundedCurve.md).[MirrorByCSYSR](Mx3dGeomBoundedCurve.md#mirrorbycsysr)

___

### MirrorByPoint

▸ **MirrorByPoint**(`P`): `void`

通过点对几何对象进行镜像变换。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `P` | [`Mx3dGePoint`](Mx3dGePoint.md) | 点对象。 |

#### Returns

`void`

#### Inherited from

[Mx3dGeomBoundedCurve](Mx3dGeomBoundedCurve.md).[MirrorByPoint](Mx3dGeomBoundedCurve.md#mirrorbypoint)

___

### MirroredByAxis

▸ **MirroredByAxis**(`A1`): [`Mx3dGeomBSplineCurve`](Mx3dGeomBSplineCurve.md)

返回通过轴镜像变换后的新几何对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `A1` | [`Mx3dGeAxis`](Mx3dGeAxis.md) | 轴对象。 |

#### Returns

[`Mx3dGeomBSplineCurve`](Mx3dGeomBSplineCurve.md)

新的几何对象。

#### Inherited from

[Mx3dGeomBoundedCurve](Mx3dGeomBoundedCurve.md).[MirroredByAxis](Mx3dGeomBoundedCurve.md#mirroredbyaxis)

___

### MirroredByCSYSR

▸ **MirroredByCSYSR**(`A2`): [`Mx3dGeomBSplineCurve`](Mx3dGeomBSplineCurve.md)

返回通过右手坐标系镜像变换后的新几何对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `A2` | [`Mx3dGeCSYSR`](Mx3dGeCSYSR.md) | 右手坐标系对象。 |

#### Returns

[`Mx3dGeomBSplineCurve`](Mx3dGeomBSplineCurve.md)

新的几何对象。

#### Inherited from

[Mx3dGeomBoundedCurve](Mx3dGeomBoundedCurve.md).[MirroredByCSYSR](Mx3dGeomBoundedCurve.md#mirroredbycsysr)

___

### MirroredByPoint

▸ **MirroredByPoint**(`P`): [`Mx3dGeomBSplineCurve`](Mx3dGeomBSplineCurve.md)

返回通过点镜像变换后的新几何对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `P` | [`Mx3dGePoint`](Mx3dGePoint.md) | 点对象。 |

#### Returns

[`Mx3dGeomBSplineCurve`](Mx3dGeomBSplineCurve.md)

新的几何对象。

#### Inherited from

[Mx3dGeomBoundedCurve](Mx3dGeomBoundedCurve.md).[MirroredByPoint](Mx3dGeomBoundedCurve.md#mirroredbypoint)

___

### Multiplicities

▸ **Multiplicities**(): `number`[]

返回曲线的所有节点多重性值。
节点多重性用于定义曲线在特定参数值处的重复程度。

#### Returns

`number`[]

节点多重性值的数组。

___

### Multiplicity

▸ **Multiplicity**(`Index`): `number`

获取指定索引处的节点多重性。
节点多重性用于定义曲线在特定参数值处的重复程度。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Index` | `number` | 节点索引。 |

#### Returns

`number`

节点的多重性值。

___

### NbKnots

▸ **NbKnots**(): `number`

获取曲线的节点数。

#### Returns

`number`

节点数。

___

### NbPoles

▸ **NbPoles**(): `number`

获取曲线的控制点数。

#### Returns

`number`

控制点数。

___

### OffsetCurve

▸ **OffsetCurve**(`Offset`, `V`, `isNotCheckC0`): [`Mx3dShapeEdge`](Mx3dShapeEdge.md)

创建曲线的偏移副本。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Offset` | `number` | 偏移量。 |
| `V` | `UniDir` | 偏移方向，与偏移方向垂直。 |
| `isNotCheckC0` | `boolean` | 是否不检查C0连续性。 |

#### Returns

[`Mx3dShapeEdge`](Mx3dShapeEdge.md)

返回偏移后的曲线边对象。

___

### Period

▸ **Period**(): `number`

返回曲线的周期。

#### Returns

`number`

曲线的周期。

#### Inherited from

[Mx3dGeomBoundedCurve](Mx3dGeomBoundedCurve.md).[Period](Mx3dGeomBoundedCurve.md#period)

___

### Pole

▸ **Pole**(`Index`): [`Mx3dGePoint`](Mx3dGePoint.md)

获取指定索引处的控制点。
控制点定义了曲线的形状和位置。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Index` | `number` | 控制点的索引。 |

#### Returns

[`Mx3dGePoint`](Mx3dGePoint.md)

指定索引处的控制点对象。

___

### Poles

▸ **Poles**(): [`Mx3dGePoint`](Mx3dGePoint.md)[]

获取曲线的控制点序列。

#### Returns

[`Mx3dGePoint`](Mx3dGePoint.md)[]

控制点序列的数组。

___

### RemoveKnot

▸ **RemoveKnot**(`Index`, `M`, `Tolerance`): `boolean`

移除一个节点。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Index` | `number` | 节点的索引。 |
| `M` | `number` | 节点的多重性。 |
| `Tolerance` | `number` | 容差。 |

#### Returns

`boolean`

是否成功移除节点。

___

### Reverse

▸ **Reverse**(): `void`

反转曲线。

#### Returns

`void`

___

### Reversed

▸ **Reversed**(): [`Mx3dGeomBSplineCurve`](Mx3dGeomBSplineCurve.md)

返回反向后的新几何曲线对象。

#### Returns

[`Mx3dGeomBSplineCurve`](Mx3dGeomBSplineCurve.md)

新的几何曲线对象。

#### Inherited from

[Mx3dGeomBoundedCurve](Mx3dGeomBoundedCurve.md).[Reversed](Mx3dGeomBoundedCurve.md#reversed)

___

### ReversedParameter

▸ **ReversedParameter**(`U`): `number`

获取反转参数值。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `U` | `number` | 原参数值。 |

#### Returns

`number`

反转后的参数值。

___

### Rotate

▸ **Rotate**(`A1`, `Ang`): `void`

旋转几何对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `A1` | [`Mx3dGeAxis`](Mx3dGeAxis.md) | 轴对象。 |
| `Ang` | `number` | 旋转角度。 |

#### Returns

`void`

#### Inherited from

[Mx3dGeomBoundedCurve](Mx3dGeomBoundedCurve.md).[Rotate](Mx3dGeomBoundedCurve.md#rotate)

___

### Rotated

▸ **Rotated**(`A1`, `Ang`): [`Mx3dGeomBSplineCurve`](Mx3dGeomBSplineCurve.md)

返回旋转后的新几何对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `A1` | [`Mx3dGeAxis`](Mx3dGeAxis.md) | 轴对象。 |
| `Ang` | `number` | 旋转角度。 |

#### Returns

[`Mx3dGeomBSplineCurve`](Mx3dGeomBSplineCurve.md)

新的几何对象。

#### Inherited from

[Mx3dGeomBoundedCurve](Mx3dGeomBoundedCurve.md).[Rotated](Mx3dGeomBoundedCurve.md#rotated)

___

### Scale

▸ **Scale**(`P`, `S`): `void`

缩放几何对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `P` | [`Mx3dGePoint`](Mx3dGePoint.md) | 点对象。 |
| `S` | `number` | 缩放比例。 |

#### Returns

`void`

#### Inherited from

[Mx3dGeomBoundedCurve](Mx3dGeomBoundedCurve.md).[Scale](Mx3dGeomBoundedCurve.md#scale)

___

### Scaled

▸ **Scaled**(`P`, `S`): [`Mx3dGeomBSplineCurve`](Mx3dGeomBSplineCurve.md)

返回缩放后的新几何对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `P` | [`Mx3dGePoint`](Mx3dGePoint.md) | 点对象。 |
| `S` | `number` | 缩放比例。 |

#### Returns

[`Mx3dGeomBSplineCurve`](Mx3dGeomBSplineCurve.md)

新的几何对象。

#### Inherited from

[Mx3dGeomBoundedCurve](Mx3dGeomBoundedCurve.md).[Scaled](Mx3dGeomBoundedCurve.md#scaled)

___

### Segment

▸ **Segment**(`U1`, `U2`): `void`

截取曲线的一个段。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `U1` | `number` | 段的起始参数值。 |
| `U2` | `number` | 段的结束参数值。 |

#### Returns

`void`

___

### SetKnot

▸ **SetKnot**(`Index`, `K`): `void`

设置节点。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Index` | `number` | 节点索引。 |
| `K` | `number` | 新的节点值。 |

#### Returns

`void`

▸ **SetKnot**(`Index`, `K`, `M`): `void`

设置节点并指定其多重性。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Index` | `number` | 节点索引。 |
| `K` | `number` | 新的节点值。 |
| `M` | `number` | 节点的多重性。 |

#### Returns

`void`

___

### SetKnots

▸ **SetKnots**(`dK`): `void`

设置所有节点。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dK` | `number`[] | 节点值数组。 |

#### Returns

`void`

___

### SetNotPeriodic

▸ **SetNotPeriodic**(): `void`

设置曲线为非周期性。

#### Returns

`void`

___

### SetOrigin

▸ **SetOrigin**(`Index`): `void`

设置原点。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Index` | `number` | 原点索引。 |

#### Returns

`void`

▸ **SetOrigin**(`U`, `Tol`): `void`

设置原点并指定容差。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `U` | `number` | 原点参数值。 |
| `Tol` | `number` | 容差。 |

#### Returns

`void`

___

### SetPeriodic

▸ **SetPeriodic**(): `void`

设置曲线为周期性。

#### Returns

`void`

___

### SetPole

▸ **SetPole**(`Index`, `P`): `void`

设置指定索引处的控制点。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Index` | `number` | 控制点的索引。 |
| `P` | `UniPoint` | 控制点。 |

#### Returns

`void`

▸ **SetPole**(`Index`, `P`, `Weight`): `void`

设置指定索引处的控制点和权重。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Index` | `number` | 控制点的索引。 |
| `P` | `UniPoint` | 控制点。 |
| `Weight` | `number` | 权重。 |

#### Returns

`void`

___

### SetWeight

▸ **SetWeight**(`Index`, `Weight`): `void`

设置指定索引处的权重。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Index` | `number` | 权重的索引。 |
| `Weight` | `number` | 权重。 |

#### Returns

`void`

___

### StartPoint

▸ **StartPoint**(): [`Mx3dGePoint`](Mx3dGePoint.md)

获取曲线的起点。

#### Returns

[`Mx3dGePoint`](Mx3dGePoint.md)

曲线的起点。

___

### Transform

▸ **Transform**(`T`): `void`

应用给定的变换矩阵变换曲线。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `T` | [`Mx3dGeTrsf`](Mx3dGeTrsf.md) | 变换矩阵。 |

#### Returns

`void`

___

### Transformed

▸ **Transformed**(`T`): [`Mx3dGeomBSplineCurve`](Mx3dGeomBSplineCurve.md)

返回变换后的新几何对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `T` | [`Mx3dGeTrsf`](Mx3dGeTrsf.md) | 变换对象。 |

#### Returns

[`Mx3dGeomBSplineCurve`](Mx3dGeomBSplineCurve.md)

新的几何对象。

#### Inherited from

[Mx3dGeomBoundedCurve](Mx3dGeomBoundedCurve.md).[Transformed](Mx3dGeomBoundedCurve.md#transformed)

___

### TranslateBy2Points

▸ **TranslateBy2Points**(`P1`, `P2`): `void`

通过两个点平移几何对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `P1` | [`Mx3dGePoint`](Mx3dGePoint.md) | 起始点对象。 |
| `P2` | [`Mx3dGePoint`](Mx3dGePoint.md) | 终止点对象。 |

#### Returns

`void`

#### Inherited from

[Mx3dGeomBoundedCurve](Mx3dGeomBoundedCurve.md).[TranslateBy2Points](Mx3dGeomBoundedCurve.md#translateby2points)

___

### TranslateByVec

▸ **TranslateByVec**(`V`): `void`

通过向量平移几何对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `V` | [`Mx3dGeVec`](Mx3dGeVec.md) | 向量对象。 |

#### Returns

`void`

#### Inherited from

[Mx3dGeomBoundedCurve](Mx3dGeomBoundedCurve.md).[TranslateByVec](Mx3dGeomBoundedCurve.md#translatebyvec)

___

### TranslatedBy2Points

▸ **TranslatedBy2Points**(`P1`, `P2`): [`Mx3dGeomBSplineCurve`](Mx3dGeomBSplineCurve.md)

返回通过两个点平移后的新几何对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `P1` | [`Mx3dGePoint`](Mx3dGePoint.md) | 起始点对象。 |
| `P2` | [`Mx3dGePoint`](Mx3dGePoint.md) | 终止点对象。 |

#### Returns

[`Mx3dGeomBSplineCurve`](Mx3dGeomBSplineCurve.md)

新的几何对象。

#### Inherited from

[Mx3dGeomBoundedCurve](Mx3dGeomBoundedCurve.md).[TranslatedBy2Points](Mx3dGeomBoundedCurve.md#translatedby2points)

___

### TranslatedByVec

▸ **TranslatedByVec**(`V`): [`Mx3dGeomBSplineCurve`](Mx3dGeomBSplineCurve.md)

返回通过向量平移后的新几何对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `V` | [`Mx3dGeVec`](Mx3dGeVec.md) | 向量对象。 |

#### Returns

[`Mx3dGeomBSplineCurve`](Mx3dGeomBSplineCurve.md)

新的几何对象。

#### Inherited from

[Mx3dGeomBoundedCurve](Mx3dGeomBoundedCurve.md).[TranslatedByVec](Mx3dGeomBoundedCurve.md#translatedbyvec)

___

### Value

▸ **Value**(`U`): [`Mx3dGePoint`](Mx3dGePoint.md)

返回给定参数 U 处的点。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `U` | `number` | 参数值。 |

#### Returns

[`Mx3dGePoint`](Mx3dGePoint.md)

给定参数处的点对象。

#### Inherited from

[Mx3dGeomBoundedCurve](Mx3dGeomBoundedCurve.md).[Value](Mx3dGeomBoundedCurve.md#value)

___

### Weight

▸ **Weight**(`Index`): `number`

获取指定索引处的权重值。
权重值用于定义B样条曲线的局部形状和重要性。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Index` | `number` | 权重值的索引。 |

#### Returns

`number`

指定索引处的权重值。

___

### Weights

▸ **Weights**(): `number`[]

获取曲线的权重序列。

#### Returns

`number`[]

权重序列的数组。

___

### Wire

▸ **Wire**(): [`Mx3dShapeWire`](Mx3dShapeWire.md)

获取曲线的Wire。

#### Returns

[`Mx3dShapeWire`](Mx3dShapeWire.md)

返回表示曲线的Wire对象。

___

### DownCast

▸ `Static` **DownCast**(`theObject`): [`Mx3dGeomBSplineCurve`](Mx3dGeomBSplineCurve.md)

父类对象转 Mx3dGeomBSplineCurve 类对象

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theObject` | [`Mx3dGeomObject`](Mx3dGeomObject.md) | 父类对象 |

#### Returns

[`Mx3dGeomBSplineCurve`](Mx3dGeomBSplineCurve.md)

Mx3dGeomBSplineCurve 类对象
