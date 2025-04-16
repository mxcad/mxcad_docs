[mxcad_3d API 文档](../README.md) / Mx3dGeomParabola

# Class: Mx3dGeomParabola

表示几何二次曲线(圆锥曲线)的类，继承自 Mx3dGeomCurve。

## Hierarchy

- [`Mx3dGeomConic`](Mx3dGeomConic.md)

  ↳ **`Mx3dGeomParabola`**

## Table of contents

### Constructors

- [constructor](Mx3dGeomParabola.md#constructor)

### Methods

- [Axis](Mx3dGeomParabola.md#axis)
- [Continuity](Mx3dGeomParabola.md#continuity)
- [Copy](Mx3dGeomParabola.md#copy)
- [D0](Mx3dGeomParabola.md#d0)
- [D1](Mx3dGeomParabola.md#d1)
- [D2](Mx3dGeomParabola.md#d2)
- [D3](Mx3dGeomParabola.md#d3)
- [DN](Mx3dGeomParabola.md#dn)
- [Directrix](Mx3dGeomParabola.md#directrix)
- [DynamicType](Mx3dGeomParabola.md#dynamictype)
- [Eccentricity](Mx3dGeomParabola.md#eccentricity)
- [Edge](Mx3dGeomParabola.md#edge)
- [FirstParameter](Mx3dGeomParabola.md#firstparameter)
- [Focal](Mx3dGeomParabola.md#focal)
- [Focus](Mx3dGeomParabola.md#focus)
- [IsCN](Mx3dGeomParabola.md#iscn)
- [IsClosed](Mx3dGeomParabola.md#isclosed)
- [IsPeriodic](Mx3dGeomParabola.md#isperiodic)
- [LastParameter](Mx3dGeomParabola.md#lastparameter)
- [Location](Mx3dGeomParabola.md#location)
- [MirrorByAxis](Mx3dGeomParabola.md#mirrorbyaxis)
- [MirrorByCSYSR](Mx3dGeomParabola.md#mirrorbycsysr)
- [MirrorByPoint](Mx3dGeomParabola.md#mirrorbypoint)
- [MirroredByAxis](Mx3dGeomParabola.md#mirroredbyaxis)
- [MirroredByCSYSR](Mx3dGeomParabola.md#mirroredbycsysr)
- [MirroredByPoint](Mx3dGeomParabola.md#mirroredbypoint)
- [OffsetCurve](Mx3dGeomParabola.md#offsetcurve)
- [Parameter](Mx3dGeomParabola.md#parameter)
- [ParametricTransformation](Mx3dGeomParabola.md#parametrictransformation)
- [Period](Mx3dGeomParabola.md#period)
- [Position](Mx3dGeomParabola.md#position)
- [Reverse](Mx3dGeomParabola.md#reverse)
- [Reversed](Mx3dGeomParabola.md#reversed)
- [ReversedParameter](Mx3dGeomParabola.md#reversedparameter)
- [Rotate](Mx3dGeomParabola.md#rotate)
- [Rotated](Mx3dGeomParabola.md#rotated)
- [Scale](Mx3dGeomParabola.md#scale)
- [Scaled](Mx3dGeomParabola.md#scaled)
- [SetAxis](Mx3dGeomParabola.md#setaxis)
- [SetFocal](Mx3dGeomParabola.md#setfocal)
- [SetLocation](Mx3dGeomParabola.md#setlocation)
- [SetPosition](Mx3dGeomParabola.md#setposition)
- [Transform](Mx3dGeomParabola.md#transform)
- [Transformed](Mx3dGeomParabola.md#transformed)
- [TransformedParameter](Mx3dGeomParabola.md#transformedparameter)
- [TranslateBy2Points](Mx3dGeomParabola.md#translateby2points)
- [TranslateByVec](Mx3dGeomParabola.md#translatebyvec)
- [TranslatedBy2Points](Mx3dGeomParabola.md#translatedby2points)
- [TranslatedByVec](Mx3dGeomParabola.md#translatedbyvec)
- [Value](Mx3dGeomParabola.md#value)
- [XAxis](Mx3dGeomParabola.md#xaxis)
- [YAxis](Mx3dGeomParabola.md#yaxis)
- [DownCast](Mx3dGeomParabola.md#downcast)

## Constructors

### constructor

• **new Mx3dGeomParabola**(`A2`, `Focal`)

构造函数，接受一个坐标系和焦距作为参数。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `A2` | [`Mx3dGeCSYSR`](Mx3dGeCSYSR.md) | 坐标系对象。 |
| `Focal` | `number` | 焦距。 |

#### Overrides

[Mx3dGeomConic](Mx3dGeomConic.md).[constructor](Mx3dGeomConic.md#constructor)

## Methods

### Axis

▸ **Axis**(): [`Mx3dGeAxis`](Mx3dGeAxis.md)

获取二次曲线的轴。

#### Returns

[`Mx3dGeAxis`](Mx3dGeAxis.md)

轴对象。

#### Inherited from

[Mx3dGeomConic](Mx3dGeomConic.md).[Axis](Mx3dGeomConic.md#axis)

___

### Continuity

▸ **Continuity**(): [`MxGAShapeEnum`](../enums/MdGe.MxGAShapeEnum.md)

获取二次曲线的连续性。

#### Returns

[`MxGAShapeEnum`](../enums/MdGe.MxGAShapeEnum.md)

连续性枚举值。

#### Inherited from

[Mx3dGeomConic](Mx3dGeomConic.md).[Continuity](Mx3dGeomConic.md#continuity)

___

### Copy

▸ **Copy**(): [`Mx3dGeomObject`](Mx3dGeomObject.md)

复制抛物线对象。

#### Returns

[`Mx3dGeomObject`](Mx3dGeomObject.md)

复制的抛物线对象。

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

### Directrix

▸ **Directrix**(): [`Mx3dGeAxis`](Mx3dGeAxis.md)

获取准线。

#### Returns

[`Mx3dGeAxis`](Mx3dGeAxis.md)

准线所在轴对象。

___

### DynamicType

▸ **DynamicType**(): `string`

返回对象的动态类型。

#### Returns

`string`

动态类型的字符串。

#### Overrides

[Mx3dGeomConic](Mx3dGeomConic.md).[DynamicType](Mx3dGeomConic.md#dynamictype)

___

### Eccentricity

▸ **Eccentricity**(): `number`

获取离心率。

#### Returns

`number`

离心率值。

___

### Edge

▸ **Edge**(`p1`, `p2`): [`Mx3dShapeEdge`](Mx3dShapeEdge.md)

获取抛物线的边。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `p1` | `number` | 第一个参数。 |
| `p2` | `number` | 第二个参数。 |

#### Returns

[`Mx3dShapeEdge`](Mx3dShapeEdge.md)

抛物线的边对象。

___

### FirstParameter

▸ **FirstParameter**(): `number`

获取抛物线的第一个参数。

#### Returns

`number`

第一个参数。

___

### Focal

▸ **Focal**(): `number`

获取焦距。

#### Returns

`number`

焦距值。

___

### Focus

▸ **Focus**(): [`Mx3dGePoint`](Mx3dGePoint.md)

获取焦点。

#### Returns

[`Mx3dGePoint`](Mx3dGePoint.md)

焦点对象。

___

### IsCN

▸ **IsCN**(`N`): `boolean`

检查二次曲线是否具有指定阶数的连续性。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `N` | `number` | 阶数。 |

#### Returns

`boolean`

如果具有指定阶数的连续性，则返回 true，否则返回 false。

#### Inherited from

[Mx3dGeomConic](Mx3dGeomConic.md).[IsCN](Mx3dGeomConic.md#iscn)

___

### IsClosed

▸ **IsClosed**(): `boolean`

检查抛物线是否闭合。

#### Returns

`boolean`

如果抛物线是闭合的，返回 true；否则返回 false。

___

### IsPeriodic

▸ **IsPeriodic**(): `boolean`

检查抛物线是否周期性。

#### Returns

`boolean`

如果抛物线是周期性的，返回 true；否则返回 false。

___

### LastParameter

▸ **LastParameter**(): `number`

获取抛物线的最后一个参数。

#### Returns

`number`

最后一个参数。

___

### Location

▸ **Location**(): [`Mx3dGePoint`](Mx3dGePoint.md)

获取二次曲线的位置。

#### Returns

[`Mx3dGePoint`](Mx3dGePoint.md)

点对象。

#### Inherited from

[Mx3dGeomConic](Mx3dGeomConic.md).[Location](Mx3dGeomConic.md#location)

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

[Mx3dGeomConic](Mx3dGeomConic.md).[MirrorByAxis](Mx3dGeomConic.md#mirrorbyaxis)

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

[Mx3dGeomConic](Mx3dGeomConic.md).[MirrorByCSYSR](Mx3dGeomConic.md#mirrorbycsysr)

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

[Mx3dGeomConic](Mx3dGeomConic.md).[MirrorByPoint](Mx3dGeomConic.md#mirrorbypoint)

___

### MirroredByAxis

▸ **MirroredByAxis**(`A1`): [`Mx3dGeomParabola`](Mx3dGeomParabola.md)

返回通过轴镜像变换后的新几何对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `A1` | [`Mx3dGeAxis`](Mx3dGeAxis.md) | 轴对象。 |

#### Returns

[`Mx3dGeomParabola`](Mx3dGeomParabola.md)

新的几何对象。

#### Inherited from

[Mx3dGeomConic](Mx3dGeomConic.md).[MirroredByAxis](Mx3dGeomConic.md#mirroredbyaxis)

___

### MirroredByCSYSR

▸ **MirroredByCSYSR**(`A2`): [`Mx3dGeomParabola`](Mx3dGeomParabola.md)

返回通过右手坐标系镜像变换后的新几何对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `A2` | [`Mx3dGeCSYSR`](Mx3dGeCSYSR.md) | 右手坐标系对象。 |

#### Returns

[`Mx3dGeomParabola`](Mx3dGeomParabola.md)

新的几何对象。

#### Inherited from

[Mx3dGeomConic](Mx3dGeomConic.md).[MirroredByCSYSR](Mx3dGeomConic.md#mirroredbycsysr)

___

### MirroredByPoint

▸ **MirroredByPoint**(`P`): [`Mx3dGeomParabola`](Mx3dGeomParabola.md)

返回通过点镜像变换后的新几何对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `P` | [`Mx3dGePoint`](Mx3dGePoint.md) | 点对象。 |

#### Returns

[`Mx3dGeomParabola`](Mx3dGeomParabola.md)

新的几何对象。

#### Inherited from

[Mx3dGeomConic](Mx3dGeomConic.md).[MirroredByPoint](Mx3dGeomConic.md#mirroredbypoint)

___

### OffsetCurve

▸ **OffsetCurve**(`Offset`, `V`, `isNotCheckC0`): [`Mx3dShapeEdge`](Mx3dShapeEdge.md)

获取抛物线的偏移曲线。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Offset` | `number` | 偏移量。 |
| `V` | [`Mx3dGeDir`](Mx3dGeDir.md) | 方向向量，与偏移方向垂直。 |
| `isNotCheckC0` | `boolean` | 是否检查 C0 连续性。 |

#### Returns

[`Mx3dShapeEdge`](Mx3dShapeEdge.md)

偏移曲线的边对象。

___

### Parameter

▸ **Parameter**(): `number`

获取参数。

#### Returns

`number`

参数值。

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

[Mx3dGeomConic](Mx3dGeomConic.md).[Period](Mx3dGeomConic.md#period)

___

### Position

▸ **Position**(): [`Mx3dGeCSYSR`](Mx3dGeCSYSR.md)

获取二次曲线的右手坐标系。

#### Returns

[`Mx3dGeCSYSR`](Mx3dGeCSYSR.md)

右手坐标系对象。

#### Inherited from

[Mx3dGeomConic](Mx3dGeomConic.md).[Position](Mx3dGeomConic.md#position)

___

### Reverse

▸ **Reverse**(): `void`

反转二次曲线的方向。

#### Returns

`void`

#### Inherited from

[Mx3dGeomConic](Mx3dGeomConic.md).[Reverse](Mx3dGeomConic.md#reverse)

___

### Reversed

▸ **Reversed**(): [`Mx3dGeomParabola`](Mx3dGeomParabola.md)

返回反向后的新几何曲线对象。

#### Returns

[`Mx3dGeomParabola`](Mx3dGeomParabola.md)

新的几何曲线对象。

#### Inherited from

[Mx3dGeomConic](Mx3dGeomConic.md).[Reversed](Mx3dGeomConic.md#reversed)

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

[Mx3dGeomConic](Mx3dGeomConic.md).[Rotate](Mx3dGeomConic.md#rotate)

___

### Rotated

▸ **Rotated**(`A1`, `Ang`): [`Mx3dGeomParabola`](Mx3dGeomParabola.md)

返回旋转后的新几何对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `A1` | [`Mx3dGeAxis`](Mx3dGeAxis.md) | 轴对象。 |
| `Ang` | `number` | 旋转角度。 |

#### Returns

[`Mx3dGeomParabola`](Mx3dGeomParabola.md)

新的几何对象。

#### Inherited from

[Mx3dGeomConic](Mx3dGeomConic.md).[Rotated](Mx3dGeomConic.md#rotated)

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

[Mx3dGeomConic](Mx3dGeomConic.md).[Scale](Mx3dGeomConic.md#scale)

___

### Scaled

▸ **Scaled**(`P`, `S`): [`Mx3dGeomParabola`](Mx3dGeomParabola.md)

返回缩放后的新几何对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `P` | [`Mx3dGePoint`](Mx3dGePoint.md) | 点对象。 |
| `S` | `number` | 缩放比例。 |

#### Returns

[`Mx3dGeomParabola`](Mx3dGeomParabola.md)

新的几何对象。

#### Inherited from

[Mx3dGeomConic](Mx3dGeomConic.md).[Scaled](Mx3dGeomConic.md#scaled)

___

### SetAxis

▸ **SetAxis**(`theA1`): `void`

设置二次曲线的轴。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theA1` | [`Mx3dGeAxis`](Mx3dGeAxis.md) | 轴对象。 |

#### Returns

`void`

#### Inherited from

[Mx3dGeomConic](Mx3dGeomConic.md).[SetAxis](Mx3dGeomConic.md#setaxis)

___

### SetFocal

▸ **SetFocal**(`Focal`): `void`

设置焦距。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Focal` | `number` | 焦距。 |

#### Returns

`void`

___

### SetLocation

▸ **SetLocation**(`theP`): `void`

设置二次曲线的位置。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theP` | [`Mx3dGePoint`](Mx3dGePoint.md) | 点对象。 |

#### Returns

`void`

#### Inherited from

[Mx3dGeomConic](Mx3dGeomConic.md).[SetLocation](Mx3dGeomConic.md#setlocation)

___

### SetPosition

▸ **SetPosition**(`theA2`): `void`

设置二次曲线的右手坐标系。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theA2` | [`Mx3dGeCSYSR`](Mx3dGeCSYSR.md) | 右手坐标系对象。 |

#### Returns

`void`

#### Inherited from

[Mx3dGeomConic](Mx3dGeomConic.md).[SetPosition](Mx3dGeomConic.md#setposition)

___

### Transform

▸ **Transform**(`T`): `void`

对抛物线进行变换。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `T` | [`Mx3dGeTrsf`](Mx3dGeTrsf.md) | 变换对象。 |

#### Returns

`void`

___

### Transformed

▸ **Transformed**(`T`): [`Mx3dGeomParabola`](Mx3dGeomParabola.md)

返回变换后的新几何对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `T` | [`Mx3dGeTrsf`](Mx3dGeTrsf.md) | 变换对象。 |

#### Returns

[`Mx3dGeomParabola`](Mx3dGeomParabola.md)

新的几何对象。

#### Inherited from

[Mx3dGeomConic](Mx3dGeomConic.md).[Transformed](Mx3dGeomConic.md#transformed)

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

[Mx3dGeomConic](Mx3dGeomConic.md).[TranslateBy2Points](Mx3dGeomConic.md#translateby2points)

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

[Mx3dGeomConic](Mx3dGeomConic.md).[TranslateByVec](Mx3dGeomConic.md#translatebyvec)

___

### TranslatedBy2Points

▸ **TranslatedBy2Points**(`P1`, `P2`): [`Mx3dGeomParabola`](Mx3dGeomParabola.md)

返回通过两个点平移后的新几何对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `P1` | [`Mx3dGePoint`](Mx3dGePoint.md) | 起始点对象。 |
| `P2` | [`Mx3dGePoint`](Mx3dGePoint.md) | 终止点对象。 |

#### Returns

[`Mx3dGeomParabola`](Mx3dGeomParabola.md)

新的几何对象。

#### Inherited from

[Mx3dGeomConic](Mx3dGeomConic.md).[TranslatedBy2Points](Mx3dGeomConic.md#translatedby2points)

___

### TranslatedByVec

▸ **TranslatedByVec**(`V`): [`Mx3dGeomParabola`](Mx3dGeomParabola.md)

返回通过向量平移后的新几何对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `V` | [`Mx3dGeVec`](Mx3dGeVec.md) | 向量对象。 |

#### Returns

[`Mx3dGeomParabola`](Mx3dGeomParabola.md)

新的几何对象。

#### Inherited from

[Mx3dGeomConic](Mx3dGeomConic.md).[TranslatedByVec](Mx3dGeomConic.md#translatedbyvec)

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

[Mx3dGeomConic](Mx3dGeomConic.md).[Value](Mx3dGeomConic.md#value)

___

### XAxis

▸ **XAxis**(): [`Mx3dGeAxis`](Mx3dGeAxis.md)

获取二次曲线的 X 轴。

#### Returns

[`Mx3dGeAxis`](Mx3dGeAxis.md)

X 轴对象。

#### Inherited from

[Mx3dGeomConic](Mx3dGeomConic.md).[XAxis](Mx3dGeomConic.md#xaxis)

___

### YAxis

▸ **YAxis**(): [`Mx3dGeAxis`](Mx3dGeAxis.md)

获取二次曲线的 Y 轴。

#### Returns

[`Mx3dGeAxis`](Mx3dGeAxis.md)

Y 轴对象。

#### Inherited from

[Mx3dGeomConic](Mx3dGeomConic.md).[YAxis](Mx3dGeomConic.md#yaxis)

___

### DownCast

▸ `Static` **DownCast**(`theObject`): [`Mx3dGeomParabola`](Mx3dGeomParabola.md)

父类对象转 Mx3dGeomParabola 类对象

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theObject` | [`Mx3dGeomObject`](Mx3dGeomObject.md) | 父类对象 |

#### Returns

[`Mx3dGeomParabola`](Mx3dGeomParabola.md)

Mx3dGeomParabola 类对象
