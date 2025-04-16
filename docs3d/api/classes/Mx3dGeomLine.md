[mxcad_3d API 文档](../README.md) / Mx3dGeomLine

# Class: Mx3dGeomLine

表示几何直线的类，继承自 Mx3dGeomCurve。

## Hierarchy

- [`Mx3dGeomCurve`](Mx3dGeomCurve.md)

  ↳ **`Mx3dGeomLine`**

## Table of contents

### Constructors

- [constructor](Mx3dGeomLine.md#constructor)

### Methods

- [Continuity](Mx3dGeomLine.md#continuity)
- [Copy](Mx3dGeomLine.md#copy)
- [D0](Mx3dGeomLine.md#d0)
- [D1](Mx3dGeomLine.md#d1)
- [D2](Mx3dGeomLine.md#d2)
- [D3](Mx3dGeomLine.md#d3)
- [DN](Mx3dGeomLine.md#dn)
- [DynamicType](Mx3dGeomLine.md#dynamictype)
- [Edge](Mx3dGeomLine.md#edge)
- [FirstParameter](Mx3dGeomLine.md#firstparameter)
- [IsCN](Mx3dGeomLine.md#iscn)
- [IsClosed](Mx3dGeomLine.md#isclosed)
- [IsPeriodic](Mx3dGeomLine.md#isperiodic)
- [LastParameter](Mx3dGeomLine.md#lastparameter)
- [MirrorByAxis](Mx3dGeomLine.md#mirrorbyaxis)
- [MirrorByCSYSR](Mx3dGeomLine.md#mirrorbycsysr)
- [MirrorByPoint](Mx3dGeomLine.md#mirrorbypoint)
- [MirroredByAxis](Mx3dGeomLine.md#mirroredbyaxis)
- [MirroredByCSYSR](Mx3dGeomLine.md#mirroredbycsysr)
- [MirroredByPoint](Mx3dGeomLine.md#mirroredbypoint)
- [OffsetCurve](Mx3dGeomLine.md#offsetcurve)
- [ParametricTransformation](Mx3dGeomLine.md#parametrictransformation)
- [Period](Mx3dGeomLine.md#period)
- [Position](Mx3dGeomLine.md#position)
- [Reverse](Mx3dGeomLine.md#reverse)
- [Reversed](Mx3dGeomLine.md#reversed)
- [ReversedParameter](Mx3dGeomLine.md#reversedparameter)
- [Rotate](Mx3dGeomLine.md#rotate)
- [Rotated](Mx3dGeomLine.md#rotated)
- [Scale](Mx3dGeomLine.md#scale)
- [Scaled](Mx3dGeomLine.md#scaled)
- [SetDirection](Mx3dGeomLine.md#setdirection)
- [SetLocation](Mx3dGeomLine.md#setlocation)
- [SetPosition](Mx3dGeomLine.md#setposition)
- [Transform](Mx3dGeomLine.md#transform)
- [Transformed](Mx3dGeomLine.md#transformed)
- [TransformedParameter](Mx3dGeomLine.md#transformedparameter)
- [TranslateBy2Points](Mx3dGeomLine.md#translateby2points)
- [TranslateByVec](Mx3dGeomLine.md#translatebyvec)
- [TranslatedBy2Points](Mx3dGeomLine.md#translatedby2points)
- [TranslatedByVec](Mx3dGeomLine.md#translatedbyvec)
- [Value](Mx3dGeomLine.md#value)
- [DownCast](Mx3dGeomLine.md#downcast)

## Constructors

### constructor

• **new Mx3dGeomLine**(`A1`)

构造函数，接受一个轴作为参数。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `A1` | [`Mx3dGeAxis`](Mx3dGeAxis.md) | 轴对象。 |

#### Overrides

[Mx3dGeomCurve](Mx3dGeomCurve.md).[constructor](Mx3dGeomCurve.md#constructor)

• **new Mx3dGeomLine**(`P`, `V`)

构造函数，接受一个点和一个方向作为参数。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `P` | [`Mx3dGePoint`](Mx3dGePoint.md) | 点对象。 |
| `V` | [`Mx3dGeDir`](Mx3dGeDir.md) | 方向对象。 |

#### Overrides

Mx3dGeomCurve.constructor

## Methods

### Continuity

▸ **Continuity**(): [`MxGAShapeEnum`](../enums/MdGe.MxGAShapeEnum.md)

获取直线的连续性。

#### Returns

[`MxGAShapeEnum`](../enums/MdGe.MxGAShapeEnum.md)

连续性枚举值。

___

### Copy

▸ **Copy**(): [`Mx3dGeomObject`](Mx3dGeomObject.md)

复制直线对象。

#### Returns

[`Mx3dGeomObject`](Mx3dGeomObject.md)

复制的直线对象。

___

### D0

▸ **D0**(`U`, `P`): `void`

获取参数 U 处的点坐标。

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

获取参数 U 处的一阶导数。

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

获取参数 U 处的二阶导数。

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

获取参数 U 处的三阶导数。

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

获取参数 U 处的 N 阶导数。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `U` | `number` | 参数值。 |
| `N` | `number` | 阶数。 |

#### Returns

[`Mx3dGeVec`](Mx3dGeVec.md)

N 阶导数向量。

___

### DynamicType

▸ **DynamicType**(): `string`

返回对象的动态类型。

#### Returns

`string`

动态类型的字符串。

#### Overrides

[Mx3dGeomCurve](Mx3dGeomCurve.md).[DynamicType](Mx3dGeomCurve.md#dynamictype)

___

### Edge

▸ **Edge**(`p1`, `p2`): [`Mx3dShapeEdge`](Mx3dShapeEdge.md)

获取直线的边形状对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `p1` | `number` | 第一个参数。 |
| `p2` | `number` | 第二个参数。 |

#### Returns

[`Mx3dShapeEdge`](Mx3dShapeEdge.md)

直线的边形状对象。

___

### FirstParameter

▸ **FirstParameter**(): `number`

获取直线的第一个参数。

#### Returns

`number`

第一个参数。

___

### IsCN

▸ **IsCN**(`N`): `boolean`

检查直线是否是 C^N 连续的。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `N` | `number` | 阶数。 |

#### Returns

`boolean`

如果直线是 C^N 连续的，返回 true；否则返回 false。

___

### IsClosed

▸ **IsClosed**(): `boolean`

检查直线是否闭合。

#### Returns

`boolean`

如果直线是闭合的，返回 true；否则返回 false。

___

### IsPeriodic

▸ **IsPeriodic**(): `boolean`

检查直线是否周期性。

#### Returns

`boolean`

如果直线是周期性的，返回 true；否则返回 false。

___

### LastParameter

▸ **LastParameter**(): `number`

获取直线的最后一个参数。

#### Returns

`number`

最后一个参数。

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

[Mx3dGeomCurve](Mx3dGeomCurve.md).[MirrorByAxis](Mx3dGeomCurve.md#mirrorbyaxis)

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

[Mx3dGeomCurve](Mx3dGeomCurve.md).[MirrorByCSYSR](Mx3dGeomCurve.md#mirrorbycsysr)

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

[Mx3dGeomCurve](Mx3dGeomCurve.md).[MirrorByPoint](Mx3dGeomCurve.md#mirrorbypoint)

___

### MirroredByAxis

▸ **MirroredByAxis**(`A1`): [`Mx3dGeomLine`](Mx3dGeomLine.md)

返回通过轴镜像变换后的新几何对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `A1` | [`Mx3dGeAxis`](Mx3dGeAxis.md) | 轴对象。 |

#### Returns

[`Mx3dGeomLine`](Mx3dGeomLine.md)

新的几何对象。

#### Inherited from

[Mx3dGeomCurve](Mx3dGeomCurve.md).[MirroredByAxis](Mx3dGeomCurve.md#mirroredbyaxis)

___

### MirroredByCSYSR

▸ **MirroredByCSYSR**(`A2`): [`Mx3dGeomLine`](Mx3dGeomLine.md)

返回通过右手坐标系镜像变换后的新几何对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `A2` | [`Mx3dGeCSYSR`](Mx3dGeCSYSR.md) | 右手坐标系对象。 |

#### Returns

[`Mx3dGeomLine`](Mx3dGeomLine.md)

新的几何对象。

#### Inherited from

[Mx3dGeomCurve](Mx3dGeomCurve.md).[MirroredByCSYSR](Mx3dGeomCurve.md#mirroredbycsysr)

___

### MirroredByPoint

▸ **MirroredByPoint**(`P`): [`Mx3dGeomLine`](Mx3dGeomLine.md)

返回通过点镜像变换后的新几何对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `P` | [`Mx3dGePoint`](Mx3dGePoint.md) | 点对象。 |

#### Returns

[`Mx3dGeomLine`](Mx3dGeomLine.md)

新的几何对象。

#### Inherited from

[Mx3dGeomCurve](Mx3dGeomCurve.md).[MirroredByPoint](Mx3dGeomCurve.md#mirroredbypoint)

___

### OffsetCurve

▸ **OffsetCurve**(`Offset`, `V`, `isNotCheckC0`): [`Mx3dShapeEdge`](Mx3dShapeEdge.md)

获取直线的偏移曲线。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Offset` | `number` | 偏移值。 |
| `V` | [`Mx3dGeDir`](Mx3dGeDir.md) | 方向向量，与偏移方向垂直。 |
| `isNotCheckC0` | `boolean` | 是否不检查 C0 连续性。 |

#### Returns

[`Mx3dShapeEdge`](Mx3dShapeEdge.md)

直线的偏移曲线。

___

### ParametricTransformation

▸ **ParametricTransformation**(`T`): `number`

获取参数变换。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `T` | [`Mx3dGeTrsf`](Mx3dGeTrsf.md) | 变换对象。 |

#### Returns

`number`

参数变换值。

___

### Period

▸ **Period**(): `number`

返回曲线的周期。

#### Returns

`number`

曲线的周期。

#### Inherited from

[Mx3dGeomCurve](Mx3dGeomCurve.md).[Period](Mx3dGeomCurve.md#period)

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

▸ **Reversed**(): [`Mx3dGeomLine`](Mx3dGeomLine.md)

返回反向后的新几何曲线对象。

#### Returns

[`Mx3dGeomLine`](Mx3dGeomLine.md)

新的几何曲线对象。

#### Inherited from

[Mx3dGeomCurve](Mx3dGeomCurve.md).[Reversed](Mx3dGeomCurve.md#reversed)

___

### ReversedParameter

▸ **ReversedParameter**(`U`): `number`

获取反向参数。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `U` | `number` | 参数值。 |

#### Returns

`number`

反向参数值。

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

[Mx3dGeomCurve](Mx3dGeomCurve.md).[Rotate](Mx3dGeomCurve.md#rotate)

___

### Rotated

▸ **Rotated**(`A1`, `Ang`): [`Mx3dGeomLine`](Mx3dGeomLine.md)

返回旋转后的新几何对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `A1` | [`Mx3dGeAxis`](Mx3dGeAxis.md) | 轴对象。 |
| `Ang` | `number` | 旋转角度。 |

#### Returns

[`Mx3dGeomLine`](Mx3dGeomLine.md)

新的几何对象。

#### Inherited from

[Mx3dGeomCurve](Mx3dGeomCurve.md).[Rotated](Mx3dGeomCurve.md#rotated)

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

[Mx3dGeomCurve](Mx3dGeomCurve.md).[Scale](Mx3dGeomCurve.md#scale)

___

### Scaled

▸ **Scaled**(`P`, `S`): [`Mx3dGeomLine`](Mx3dGeomLine.md)

返回缩放后的新几何对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `P` | [`Mx3dGePoint`](Mx3dGePoint.md) | 点对象。 |
| `S` | `number` | 缩放比例。 |

#### Returns

[`Mx3dGeomLine`](Mx3dGeomLine.md)

新的几何对象。

#### Inherited from

[Mx3dGeomCurve](Mx3dGeomCurve.md).[Scaled](Mx3dGeomCurve.md#scaled)

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

设置直线的位置。

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

对直线进行变换。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `T` | [`Mx3dGeTrsf`](Mx3dGeTrsf.md) | 变换对象。 |

#### Returns

`void`

___

### Transformed

▸ **Transformed**(`T`): [`Mx3dGeomLine`](Mx3dGeomLine.md)

返回变换后的新几何对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `T` | [`Mx3dGeTrsf`](Mx3dGeTrsf.md) | 变换对象。 |

#### Returns

[`Mx3dGeomLine`](Mx3dGeomLine.md)

新的几何对象。

#### Inherited from

[Mx3dGeomCurve](Mx3dGeomCurve.md).[Transformed](Mx3dGeomCurve.md#transformed)

___

### TransformedParameter

▸ **TransformedParameter**(`U`, `T`): `number`

获取变换后的参数。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `U` | `number` | 参数值。 |
| `T` | [`Mx3dGeTrsf`](Mx3dGeTrsf.md) | 变换对象。 |

#### Returns

`number`

变换后的参数值。

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

[Mx3dGeomCurve](Mx3dGeomCurve.md).[TranslateBy2Points](Mx3dGeomCurve.md#translateby2points)

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

[Mx3dGeomCurve](Mx3dGeomCurve.md).[TranslateByVec](Mx3dGeomCurve.md#translatebyvec)

___

### TranslatedBy2Points

▸ **TranslatedBy2Points**(`P1`, `P2`): [`Mx3dGeomLine`](Mx3dGeomLine.md)

返回通过两个点平移后的新几何对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `P1` | [`Mx3dGePoint`](Mx3dGePoint.md) | 起始点对象。 |
| `P2` | [`Mx3dGePoint`](Mx3dGePoint.md) | 终止点对象。 |

#### Returns

[`Mx3dGeomLine`](Mx3dGeomLine.md)

新的几何对象。

#### Inherited from

[Mx3dGeomCurve](Mx3dGeomCurve.md).[TranslatedBy2Points](Mx3dGeomCurve.md#translatedby2points)

___

### TranslatedByVec

▸ **TranslatedByVec**(`V`): [`Mx3dGeomLine`](Mx3dGeomLine.md)

返回通过向量平移后的新几何对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `V` | [`Mx3dGeVec`](Mx3dGeVec.md) | 向量对象。 |

#### Returns

[`Mx3dGeomLine`](Mx3dGeomLine.md)

新的几何对象。

#### Inherited from

[Mx3dGeomCurve](Mx3dGeomCurve.md).[TranslatedByVec](Mx3dGeomCurve.md#translatedbyvec)

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

[Mx3dGeomCurve](Mx3dGeomCurve.md).[Value](Mx3dGeomCurve.md#value)

___

### DownCast

▸ `Static` **DownCast**(`theObject`): [`Mx3dGeomLine`](Mx3dGeomLine.md)

父类对象转 Mx3dGeomLine 类对象

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theObject` | [`Mx3dGeomObject`](Mx3dGeomObject.md) | 父类对象 |

#### Returns

[`Mx3dGeomLine`](Mx3dGeomLine.md)

Mx3dGeomLine 类对象
