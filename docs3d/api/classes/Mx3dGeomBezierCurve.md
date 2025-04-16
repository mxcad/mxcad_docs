[mxcad_3d API 文档](../README.md) / Mx3dGeomBezierCurve

# Class: Mx3dGeomBezierCurve

Mx3dGeomBezierCurve 表示Bezier曲线，提供了一系列方法来操作和查询Bezier曲线的属性。

## Hierarchy

- [`Mx3dGeomBoundedCurve`](Mx3dGeomBoundedCurve.md)

  ↳ **`Mx3dGeomBezierCurve`**

## Table of contents

### Constructors

- [constructor](Mx3dGeomBezierCurve.md#constructor)

### Methods

- [Continuity](Mx3dGeomBezierCurve.md#continuity)
- [Copy](Mx3dGeomBezierCurve.md#copy)
- [D0](Mx3dGeomBezierCurve.md#d0)
- [D1](Mx3dGeomBezierCurve.md#d1)
- [D2](Mx3dGeomBezierCurve.md#d2)
- [D3](Mx3dGeomBezierCurve.md#d3)
- [DN](Mx3dGeomBezierCurve.md#dn)
- [Degree](Mx3dGeomBezierCurve.md#degree)
- [DynamicType](Mx3dGeomBezierCurve.md#dynamictype)
- [Edge](Mx3dGeomBezierCurve.md#edge)
- [EndPoint](Mx3dGeomBezierCurve.md#endpoint)
- [FirstParameter](Mx3dGeomBezierCurve.md#firstparameter)
- [Increase](Mx3dGeomBezierCurve.md#increase)
- [InsertPoleAfter](Mx3dGeomBezierCurve.md#insertpoleafter)
- [InsertPoleBefore](Mx3dGeomBezierCurve.md#insertpolebefore)
- [IsCN](Mx3dGeomBezierCurve.md#iscn)
- [IsClosed](Mx3dGeomBezierCurve.md#isclosed)
- [IsPeriodic](Mx3dGeomBezierCurve.md#isperiodic)
- [IsRational](Mx3dGeomBezierCurve.md#isrational)
- [LastParameter](Mx3dGeomBezierCurve.md#lastparameter)
- [MirrorByAxis](Mx3dGeomBezierCurve.md#mirrorbyaxis)
- [MirrorByCSYSR](Mx3dGeomBezierCurve.md#mirrorbycsysr)
- [MirrorByPoint](Mx3dGeomBezierCurve.md#mirrorbypoint)
- [MirroredByAxis](Mx3dGeomBezierCurve.md#mirroredbyaxis)
- [MirroredByCSYSR](Mx3dGeomBezierCurve.md#mirroredbycsysr)
- [MirroredByPoint](Mx3dGeomBezierCurve.md#mirroredbypoint)
- [NbPoles](Mx3dGeomBezierCurve.md#nbpoles)
- [OffsetCurve](Mx3dGeomBezierCurve.md#offsetcurve)
- [Period](Mx3dGeomBezierCurve.md#period)
- [Pole](Mx3dGeomBezierCurve.md#pole)
- [Poles](Mx3dGeomBezierCurve.md#poles)
- [RemovePole](Mx3dGeomBezierCurve.md#removepole)
- [Reverse](Mx3dGeomBezierCurve.md#reverse)
- [Reversed](Mx3dGeomBezierCurve.md#reversed)
- [ReversedParameter](Mx3dGeomBezierCurve.md#reversedparameter)
- [Rotate](Mx3dGeomBezierCurve.md#rotate)
- [Rotated](Mx3dGeomBezierCurve.md#rotated)
- [Scale](Mx3dGeomBezierCurve.md#scale)
- [Scaled](Mx3dGeomBezierCurve.md#scaled)
- [Segment](Mx3dGeomBezierCurve.md#segment)
- [SetPole](Mx3dGeomBezierCurve.md#setpole)
- [SetWeight](Mx3dGeomBezierCurve.md#setweight)
- [StartPoint](Mx3dGeomBezierCurve.md#startpoint)
- [Transform](Mx3dGeomBezierCurve.md#transform)
- [Transformed](Mx3dGeomBezierCurve.md#transformed)
- [TranslateBy2Points](Mx3dGeomBezierCurve.md#translateby2points)
- [TranslateByVec](Mx3dGeomBezierCurve.md#translatebyvec)
- [TranslatedBy2Points](Mx3dGeomBezierCurve.md#translatedby2points)
- [TranslatedByVec](Mx3dGeomBezierCurve.md#translatedbyvec)
- [Value](Mx3dGeomBezierCurve.md#value)
- [Weight](Mx3dGeomBezierCurve.md#weight)
- [Weights](Mx3dGeomBezierCurve.md#weights)
- [Wire](Mx3dGeomBezierCurve.md#wire)
- [DownCast](Mx3dGeomBezierCurve.md#downcast)

## Constructors

### constructor

• **new Mx3dGeomBezierCurve**(`CurvePoles`, `PoleWeights?`)

构造函数，创建一个Bezier曲线。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `CurvePoles` | [`Mx3dGePoint`](Mx3dGePoint.md)[] | 控制点数组。 |
| `PoleWeights?` | `number`[] | 控制点权重数组（可选）。 |

#### Overrides

Mx3dGeomBoundedCurve.constructor

## Methods

### Continuity

▸ **Continuity**(): [`MxGAShapeEnum`](../enums/MdGe.MxGAShapeEnum.md)

获取曲线的连续性类型。

#### Returns

[`MxGAShapeEnum`](../enums/MdGe.MxGAShapeEnum.md)

曲线的连续性类型。

___

### Copy

▸ **Copy**(): [`Mx3dGeomObject`](Mx3dGeomObject.md)

复制曲线对象。

#### Returns

[`Mx3dGeomObject`](Mx3dGeomObject.md)

复制的曲线对象。

___

### D0

▸ **D0**(`U`, `P`): `void`

计算曲线在指定参数值处的点。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `U` | `number` | 参数值。 |
| `P` | [`Mx3dGePoint`](Mx3dGePoint.md) | 计算得到的点。 |

#### Returns

`void`

___

### D1

▸ **D1**(`U`, `P`, `V1`): `void`

计算曲线在指定参数值处的点及其一阶导数。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `U` | `number` | 参数值。 |
| `P` | [`Mx3dGePoint`](Mx3dGePoint.md) | 计算得到的点。 |
| `V1` | [`Mx3dGeVec`](Mx3dGeVec.md) | 计算得到的一阶导数。 |

#### Returns

`void`

___

### D2

▸ **D2**(`U`, `P`, `V1`, `V2`): `void`

计算曲线在指定参数值处的点及其一阶和二阶导数。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `U` | `number` | 参数值。 |
| `P` | [`Mx3dGePoint`](Mx3dGePoint.md) | 计算得到的点。 |
| `V1` | [`Mx3dGeVec`](Mx3dGeVec.md) | 计算得到的一阶导数。 |
| `V2` | [`Mx3dGeVec`](Mx3dGeVec.md) | 计算得到的二阶导数。 |

#### Returns

`void`

___

### D3

▸ **D3**(`U`, `P`, `V1`, `V2`, `V3`): `void`

计算曲线在指定参数值处的点及其一阶、二阶和三阶导数。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `U` | `number` | 参数值。 |
| `P` | [`Mx3dGePoint`](Mx3dGePoint.md) | 计算得到的点。 |
| `V1` | [`Mx3dGeVec`](Mx3dGeVec.md) | 计算得到的一阶导数。 |
| `V2` | [`Mx3dGeVec`](Mx3dGeVec.md) | 计算得到的二阶导数。 |
| `V3` | [`Mx3dGeVec`](Mx3dGeVec.md) | 计算得到的三阶导数。 |

#### Returns

`void`

___

### DN

▸ **DN**(`U`, `N`): [`Mx3dGeVec`](Mx3dGeVec.md)

计算曲线在指定参数值处的N阶导数。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `U` | `number` | 参数值。 |
| `N` | `number` | 导数的阶数。 |

#### Returns

[`Mx3dGeVec`](Mx3dGeVec.md)

计算得到的N阶导数。

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

创建一条边。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `p1` | `number` | 边的起点参数。 |
| `p2` | `number` | 边的终点参数。 |

#### Returns

[`Mx3dShapeEdge`](Mx3dShapeEdge.md)

创建的边对象。

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

获取曲线的第一个参数值。

#### Returns

`number`

曲线的第一个参数值。

___

### Increase

▸ **Increase**(`Degree`): `void`

提高Bezier曲线的阶数。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Degree` | `number` | 新的阶数。 |

#### Returns

`void`

___

### InsertPoleAfter

▸ **InsertPoleAfter**(`Index`, `P`, `Weight?`): `void`

在指定索引之后插入一个控制点。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Index` | `number` | 插入点的索引。 |
| `P` | [`Mx3dGePoint`](Mx3dGePoint.md) | 新的控制点。 |
| `Weight?` | `number` | 新的控制点的权重（可选）。 |

#### Returns

`void`

___

### InsertPoleBefore

▸ **InsertPoleBefore**(`Index`, `P`, `Weight?`): `void`

在指定索引之前插入一个控制点。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Index` | `number` | 插入点的索引。 |
| `P` | [`Mx3dGePoint`](Mx3dGePoint.md) | 新的控制点。 |
| `Weight?` | `number` | 新的控制点的权重（可选）。 |

#### Returns

`void`

___

### IsCN

▸ **IsCN**(`N`): `boolean`

检查曲线的连续性。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `N` | `number` | 连续性的阶数。 |

#### Returns

`boolean`

曲线是否具有指定阶数的连续性。

___

### IsClosed

▸ **IsClosed**(): `boolean`

检查曲线是否闭合。

#### Returns

`boolean`

曲线是否闭合。

___

### IsPeriodic

▸ **IsPeriodic**(): `boolean`

检查曲线的参数化是否周期性。

#### Returns

`boolean`

曲线是否周期性。

___

### IsRational

▸ **IsRational**(): `boolean`

检查曲线是否是有理Bezier曲线。

#### Returns

`boolean`

曲线是否是有理的。

___

### LastParameter

▸ **LastParameter**(): `number`

获取曲线的最后一个参数值。

#### Returns

`number`

曲线的最后一个参数值。

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

▸ **MirroredByAxis**(`A1`): [`Mx3dGeomBezierCurve`](Mx3dGeomBezierCurve.md)

返回通过轴镜像变换后的新几何对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `A1` | [`Mx3dGeAxis`](Mx3dGeAxis.md) | 轴对象。 |

#### Returns

[`Mx3dGeomBezierCurve`](Mx3dGeomBezierCurve.md)

新的几何对象。

#### Inherited from

[Mx3dGeomBoundedCurve](Mx3dGeomBoundedCurve.md).[MirroredByAxis](Mx3dGeomBoundedCurve.md#mirroredbyaxis)

___

### MirroredByCSYSR

▸ **MirroredByCSYSR**(`A2`): [`Mx3dGeomBezierCurve`](Mx3dGeomBezierCurve.md)

返回通过右手坐标系镜像变换后的新几何对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `A2` | [`Mx3dGeCSYSR`](Mx3dGeCSYSR.md) | 右手坐标系对象。 |

#### Returns

[`Mx3dGeomBezierCurve`](Mx3dGeomBezierCurve.md)

新的几何对象。

#### Inherited from

[Mx3dGeomBoundedCurve](Mx3dGeomBoundedCurve.md).[MirroredByCSYSR](Mx3dGeomBoundedCurve.md#mirroredbycsysr)

___

### MirroredByPoint

▸ **MirroredByPoint**(`P`): [`Mx3dGeomBezierCurve`](Mx3dGeomBezierCurve.md)

返回通过点镜像变换后的新几何对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `P` | [`Mx3dGePoint`](Mx3dGePoint.md) | 点对象。 |

#### Returns

[`Mx3dGeomBezierCurve`](Mx3dGeomBezierCurve.md)

新的几何对象。

#### Inherited from

[Mx3dGeomBoundedCurve](Mx3dGeomBoundedCurve.md).[MirroredByPoint](Mx3dGeomBoundedCurve.md#mirroredbypoint)

___

### NbPoles

▸ **NbPoles**(): `number`

获取曲线的控制点数量。

#### Returns

`number`

曲线的控制点数量。

___

### OffsetCurve

▸ **OffsetCurve**(`Offset`, `V`, `isNotCheckC0`): [`Mx3dShapeEdge`](Mx3dShapeEdge.md)

创建偏移曲线。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Offset` | `number` | 偏移量。 |
| `V` | `UniDir` | 偏移方向，与偏移方向垂直。 |
| `isNotCheckC0` | `boolean` | 是否检查C0连续性。 |

#### Returns

[`Mx3dShapeEdge`](Mx3dShapeEdge.md)

创建的偏移曲线。

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

获取指定索引的控制点。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Index` | `number` | 控制点的索引。 |

#### Returns

[`Mx3dGePoint`](Mx3dGePoint.md)

指定的控制点。

___

### Poles

▸ **Poles**(): [`Mx3dGePoint`](Mx3dGePoint.md)[]

获取所有控制点。

#### Returns

[`Mx3dGePoint`](Mx3dGePoint.md)[]

所有控制点的数组。

___

### RemovePole

▸ **RemovePole**(`Index`): `void`

删除指定索引的控制点。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Index` | `number` | 要删除的控制点的索引。 |

#### Returns

`void`

___

### Reverse

▸ **Reverse**(): `void`

反转Bezier曲线的参数方向。

#### Returns

`void`

___

### Reversed

▸ **Reversed**(): [`Mx3dGeomBezierCurve`](Mx3dGeomBezierCurve.md)

返回反向后的新几何曲线对象。

#### Returns

[`Mx3dGeomBezierCurve`](Mx3dGeomBezierCurve.md)

新的几何曲线对象。

#### Inherited from

[Mx3dGeomBoundedCurve](Mx3dGeomBoundedCurve.md).[Reversed](Mx3dGeomBoundedCurve.md#reversed)

___

### ReversedParameter

▸ **ReversedParameter**(`U`): `number`

获取反转后的参数值。

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

▸ **Rotated**(`A1`, `Ang`): [`Mx3dGeomBezierCurve`](Mx3dGeomBezierCurve.md)

返回旋转后的新几何对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `A1` | [`Mx3dGeAxis`](Mx3dGeAxis.md) | 轴对象。 |
| `Ang` | `number` | 旋转角度。 |

#### Returns

[`Mx3dGeomBezierCurve`](Mx3dGeomBezierCurve.md)

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

▸ **Scaled**(`P`, `S`): [`Mx3dGeomBezierCurve`](Mx3dGeomBezierCurve.md)

返回缩放后的新几何对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `P` | [`Mx3dGePoint`](Mx3dGePoint.md) | 点对象。 |
| `S` | `number` | 缩放比例。 |

#### Returns

[`Mx3dGeomBezierCurve`](Mx3dGeomBezierCurve.md)

新的几何对象。

#### Inherited from

[Mx3dGeomBoundedCurve](Mx3dGeomBoundedCurve.md).[Scaled](Mx3dGeomBoundedCurve.md#scaled)

___

### Segment

▸ **Segment**(`U1`, `U2`): `void`

截取Bezier曲线的一部分。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `U1` | `number` | 起始参数值。 |
| `U2` | `number` | 结束参数值。 |

#### Returns

`void`

___

### SetPole

▸ **SetPole**(`Index`, `P`, `Weight?`): `void`

设置指定索引的控制点。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Index` | `number` | 要设置的控制点的索引。 |
| `P` | [`Mx3dGePoint`](Mx3dGePoint.md) | 新的控制点。 |
| `Weight?` | `number` | 新的控制点的权重（可选）。 |

#### Returns

`void`

___

### SetWeight

▸ **SetWeight**(`Index`, `Weight`): `void`

设置指定索引的控制点权重。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Index` | `number` | 要设置的控制点的索引。 |
| `Weight` | `number` | 新的权重值。 |

#### Returns

`void`

___

### StartPoint

▸ **StartPoint**(): [`Mx3dGePoint`](Mx3dGePoint.md)

获取曲线的起始点。

#### Returns

[`Mx3dGePoint`](Mx3dGePoint.md)

曲线的起始点。

___

### Transform

▸ **Transform**(`T`): `void`

对曲线应用变换。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `T` | [`Mx3dGeTrsf`](Mx3dGeTrsf.md) | 变换矩阵。 |

#### Returns

`void`

___

### Transformed

▸ **Transformed**(`T`): [`Mx3dGeomBezierCurve`](Mx3dGeomBezierCurve.md)

返回变换后的新几何对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `T` | [`Mx3dGeTrsf`](Mx3dGeTrsf.md) | 变换对象。 |

#### Returns

[`Mx3dGeomBezierCurve`](Mx3dGeomBezierCurve.md)

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

▸ **TranslatedBy2Points**(`P1`, `P2`): [`Mx3dGeomBezierCurve`](Mx3dGeomBezierCurve.md)

返回通过两个点平移后的新几何对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `P1` | [`Mx3dGePoint`](Mx3dGePoint.md) | 起始点对象。 |
| `P2` | [`Mx3dGePoint`](Mx3dGePoint.md) | 终止点对象。 |

#### Returns

[`Mx3dGeomBezierCurve`](Mx3dGeomBezierCurve.md)

新的几何对象。

#### Inherited from

[Mx3dGeomBoundedCurve](Mx3dGeomBoundedCurve.md).[TranslatedBy2Points](Mx3dGeomBoundedCurve.md#translatedby2points)

___

### TranslatedByVec

▸ **TranslatedByVec**(`V`): [`Mx3dGeomBezierCurve`](Mx3dGeomBezierCurve.md)

返回通过向量平移后的新几何对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `V` | [`Mx3dGeVec`](Mx3dGeVec.md) | 向量对象。 |

#### Returns

[`Mx3dGeomBezierCurve`](Mx3dGeomBezierCurve.md)

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

获取指定索引的控制点权重。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Index` | `number` | 控制点的索引。 |

#### Returns

`number`

指定的控制点权重。

___

### Weights

▸ **Weights**(): `number`[]

获取所有控制点的权重。

#### Returns

`number`[]

所有控制点权重的数组。

___

### Wire

▸ **Wire**(): [`Mx3dShapeWire`](Mx3dShapeWire.md)

创建一条线。

#### Returns

[`Mx3dShapeWire`](Mx3dShapeWire.md)

创建的线对象。

___

### DownCast

▸ `Static` **DownCast**(`theObject`): [`Mx3dGeomBezierCurve`](Mx3dGeomBezierCurve.md)

父类对象转 Mx3dGeomBezierCurve 类对象

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theObject` | [`Mx3dGeomObject`](Mx3dGeomObject.md) | 父类对象 |

#### Returns

[`Mx3dGeomBezierCurve`](Mx3dGeomBezierCurve.md)

Mx3dGeomBezierCurve 类对象
