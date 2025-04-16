[mxcad_3d API 文档](../README.md) / Mx3dGeomHyperbola

# Class: Mx3dGeomHyperbola

表示参数几何双曲线的类，继承自 Mx3dGeomConic。

## Hierarchy

- [`Mx3dGeomConic`](Mx3dGeomConic.md)

  ↳ **`Mx3dGeomHyperbola`**

## Table of contents

### Constructors

- [constructor](Mx3dGeomHyperbola.md#constructor)

### Methods

- [Asymptote1](Mx3dGeomHyperbola.md#asymptote1)
- [Asymptote2](Mx3dGeomHyperbola.md#asymptote2)
- [Axis](Mx3dGeomHyperbola.md#axis)
- [ConjugateBranch1](Mx3dGeomHyperbola.md#conjugatebranch1)
- [ConjugateBranch2](Mx3dGeomHyperbola.md#conjugatebranch2)
- [Continuity](Mx3dGeomHyperbola.md#continuity)
- [Copy](Mx3dGeomHyperbola.md#copy)
- [D0](Mx3dGeomHyperbola.md#d0)
- [D1](Mx3dGeomHyperbola.md#d1)
- [D2](Mx3dGeomHyperbola.md#d2)
- [D3](Mx3dGeomHyperbola.md#d3)
- [DN](Mx3dGeomHyperbola.md#dn)
- [Directrix1](Mx3dGeomHyperbola.md#directrix1)
- [Directrix2](Mx3dGeomHyperbola.md#directrix2)
- [DynamicType](Mx3dGeomHyperbola.md#dynamictype)
- [Eccentricity](Mx3dGeomHyperbola.md#eccentricity)
- [Edge](Mx3dGeomHyperbola.md#edge)
- [FirstParameter](Mx3dGeomHyperbola.md#firstparameter)
- [Focal](Mx3dGeomHyperbola.md#focal)
- [Focus1](Mx3dGeomHyperbola.md#focus1)
- [Focus2](Mx3dGeomHyperbola.md#focus2)
- [IsCN](Mx3dGeomHyperbola.md#iscn)
- [IsClosed](Mx3dGeomHyperbola.md#isclosed)
- [IsPeriodic](Mx3dGeomHyperbola.md#isperiodic)
- [LastParameter](Mx3dGeomHyperbola.md#lastparameter)
- [Location](Mx3dGeomHyperbola.md#location)
- [MajorRadius](Mx3dGeomHyperbola.md#majorradius)
- [MinorRadius](Mx3dGeomHyperbola.md#minorradius)
- [MirrorByAxis](Mx3dGeomHyperbola.md#mirrorbyaxis)
- [MirrorByCSYSR](Mx3dGeomHyperbola.md#mirrorbycsysr)
- [MirrorByPoint](Mx3dGeomHyperbola.md#mirrorbypoint)
- [MirroredByAxis](Mx3dGeomHyperbola.md#mirroredbyaxis)
- [MirroredByCSYSR](Mx3dGeomHyperbola.md#mirroredbycsysr)
- [MirroredByPoint](Mx3dGeomHyperbola.md#mirroredbypoint)
- [OffsetCurve](Mx3dGeomHyperbola.md#offsetcurve)
- [OtherBranch](Mx3dGeomHyperbola.md#otherbranch)
- [Parameter](Mx3dGeomHyperbola.md#parameter)
- [Period](Mx3dGeomHyperbola.md#period)
- [Position](Mx3dGeomHyperbola.md#position)
- [Reverse](Mx3dGeomHyperbola.md#reverse)
- [Reversed](Mx3dGeomHyperbola.md#reversed)
- [ReversedParameter](Mx3dGeomHyperbola.md#reversedparameter)
- [Rotate](Mx3dGeomHyperbola.md#rotate)
- [Rotated](Mx3dGeomHyperbola.md#rotated)
- [Scale](Mx3dGeomHyperbola.md#scale)
- [Scaled](Mx3dGeomHyperbola.md#scaled)
- [SetAxis](Mx3dGeomHyperbola.md#setaxis)
- [SetLocation](Mx3dGeomHyperbola.md#setlocation)
- [SetMajorRadius](Mx3dGeomHyperbola.md#setmajorradius)
- [SetMinorRadius](Mx3dGeomHyperbola.md#setminorradius)
- [SetPosition](Mx3dGeomHyperbola.md#setposition)
- [Transform](Mx3dGeomHyperbola.md#transform)
- [Transformed](Mx3dGeomHyperbola.md#transformed)
- [TranslateBy2Points](Mx3dGeomHyperbola.md#translateby2points)
- [TranslateByVec](Mx3dGeomHyperbola.md#translatebyvec)
- [TranslatedBy2Points](Mx3dGeomHyperbola.md#translatedby2points)
- [TranslatedByVec](Mx3dGeomHyperbola.md#translatedbyvec)
- [Value](Mx3dGeomHyperbola.md#value)
- [XAxis](Mx3dGeomHyperbola.md#xaxis)
- [YAxis](Mx3dGeomHyperbola.md#yaxis)
- [DownCast](Mx3dGeomHyperbola.md#downcast)

## Constructors

### constructor

• **new Mx3dGeomHyperbola**(`A2`, `MajorRadius`, `MinorRadius`)

构造函数，接受一个坐标系、长轴半径和短轴半径作为参数。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `A2` | [`Mx3dGeCSYSR`](Mx3dGeCSYSR.md) | 坐标系对象。 |
| `MajorRadius` | `number` | 长轴半径。 |
| `MinorRadius` | `number` | 短轴半径。 |

#### Overrides

[Mx3dGeomConic](Mx3dGeomConic.md).[constructor](Mx3dGeomConic.md#constructor)

## Methods

### Asymptote1

▸ **Asymptote1**(): [`Mx3dGeAxis`](Mx3dGeAxis.md)

获取第一个渐近线。

#### Returns

[`Mx3dGeAxis`](Mx3dGeAxis.md)

渐近线对象。

___

### Asymptote2

▸ **Asymptote2**(): [`Mx3dGeAxis`](Mx3dGeAxis.md)

获取第二个渐近线。

#### Returns

[`Mx3dGeAxis`](Mx3dGeAxis.md)

渐近线对象。

___

### Axis

▸ **Axis**(): [`Mx3dGeAxis`](Mx3dGeAxis.md)

获取二次曲线的轴。

#### Returns

[`Mx3dGeAxis`](Mx3dGeAxis.md)

轴对象。

#### Inherited from

[Mx3dGeomConic](Mx3dGeomConic.md).[Axis](Mx3dGeomConic.md#axis)

___

### ConjugateBranch1

▸ **ConjugateBranch1**(): [`Mx3dGeomHyperbola`](Mx3dGeomHyperbola.md)

获取第一个共轭支。

#### Returns

[`Mx3dGeomHyperbola`](Mx3dGeomHyperbola.md)

第一个共轭支对象。

___

### ConjugateBranch2

▸ **ConjugateBranch2**(): [`Mx3dGeomHyperbola`](Mx3dGeomHyperbola.md)

获取第二个共轭支。

#### Returns

[`Mx3dGeomHyperbola`](Mx3dGeomHyperbola.md)

第二个共轭支对象。

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

复制双曲线对象。

#### Returns

[`Mx3dGeomObject`](Mx3dGeomObject.md)

复制的双曲线对象。

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

### Directrix1

▸ **Directrix1**(): [`Mx3dGeAxis`](Mx3dGeAxis.md)

获取第一个准线。

#### Returns

[`Mx3dGeAxis`](Mx3dGeAxis.md)

准线对象。

___

### Directrix2

▸ **Directrix2**(): [`Mx3dGeAxis`](Mx3dGeAxis.md)

获取第二个准线。

#### Returns

[`Mx3dGeAxis`](Mx3dGeAxis.md)

准线对象。

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

获取双曲线的边。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `p1` | `number` | 第一个参数。 |
| `p2` | `number` | 第二个参数。 |

#### Returns

[`Mx3dShapeEdge`](Mx3dShapeEdge.md)

双曲线的边对象。

___

### FirstParameter

▸ **FirstParameter**(): `number`

获取双曲线的第一个参数。

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

### Focus1

▸ **Focus1**(): [`Mx3dGePoint`](Mx3dGePoint.md)

获取第一个焦点。

#### Returns

[`Mx3dGePoint`](Mx3dGePoint.md)

第一个焦点对象。

___

### Focus2

▸ **Focus2**(): [`Mx3dGePoint`](Mx3dGePoint.md)

获取第二个焦点。

#### Returns

[`Mx3dGePoint`](Mx3dGePoint.md)

第二个焦点对象。

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

检查双曲线是否闭合。

#### Returns

`boolean`

如果双曲线是闭合的，返回 true；否则返回 false。

___

### IsPeriodic

▸ **IsPeriodic**(): `boolean`

检查双曲线是否周期性。

#### Returns

`boolean`

如果双曲线是周期性的，返回 true；否则返回 false。

___

### LastParameter

▸ **LastParameter**(): `number`

获取双曲线的最后一个参数。

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

### MajorRadius

▸ **MajorRadius**(): `number`

获取长轴半径。

#### Returns

`number`

长轴半径值。

___

### MinorRadius

▸ **MinorRadius**(): `number`

获取短轴半径。

#### Returns

`number`

短轴半径值。

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

▸ **MirroredByAxis**(`A1`): [`Mx3dGeomHyperbola`](Mx3dGeomHyperbola.md)

返回通过轴镜像变换后的新几何对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `A1` | [`Mx3dGeAxis`](Mx3dGeAxis.md) | 轴对象。 |

#### Returns

[`Mx3dGeomHyperbola`](Mx3dGeomHyperbola.md)

新的几何对象。

#### Inherited from

[Mx3dGeomConic](Mx3dGeomConic.md).[MirroredByAxis](Mx3dGeomConic.md#mirroredbyaxis)

___

### MirroredByCSYSR

▸ **MirroredByCSYSR**(`A2`): [`Mx3dGeomHyperbola`](Mx3dGeomHyperbola.md)

返回通过右手坐标系镜像变换后的新几何对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `A2` | [`Mx3dGeCSYSR`](Mx3dGeCSYSR.md) | 右手坐标系对象。 |

#### Returns

[`Mx3dGeomHyperbola`](Mx3dGeomHyperbola.md)

新的几何对象。

#### Inherited from

[Mx3dGeomConic](Mx3dGeomConic.md).[MirroredByCSYSR](Mx3dGeomConic.md#mirroredbycsysr)

___

### MirroredByPoint

▸ **MirroredByPoint**(`P`): [`Mx3dGeomHyperbola`](Mx3dGeomHyperbola.md)

返回通过点镜像变换后的新几何对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `P` | [`Mx3dGePoint`](Mx3dGePoint.md) | 点对象。 |

#### Returns

[`Mx3dGeomHyperbola`](Mx3dGeomHyperbola.md)

新的几何对象。

#### Inherited from

[Mx3dGeomConic](Mx3dGeomConic.md).[MirroredByPoint](Mx3dGeomConic.md#mirroredbypoint)

___

### OffsetCurve

▸ **OffsetCurve**(`Offset`, `V`, `isNotCheckC0`): [`Mx3dShapeEdge`](Mx3dShapeEdge.md)

获取双曲线的偏移曲线。

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

### OtherBranch

▸ **OtherBranch**(): [`Mx3dGeomHyperbola`](Mx3dGeomHyperbola.md)

获取另一支双曲线。

#### Returns

[`Mx3dGeomHyperbola`](Mx3dGeomHyperbola.md)

另一支双曲线对象。

___

### Parameter

▸ **Parameter**(): `number`

获取参数。

#### Returns

`number`

参数值。

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

▸ **Reversed**(): [`Mx3dGeomHyperbola`](Mx3dGeomHyperbola.md)

返回反向后的新几何曲线对象。

#### Returns

[`Mx3dGeomHyperbola`](Mx3dGeomHyperbola.md)

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

▸ **Rotated**(`A1`, `Ang`): [`Mx3dGeomHyperbola`](Mx3dGeomHyperbola.md)

返回旋转后的新几何对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `A1` | [`Mx3dGeAxis`](Mx3dGeAxis.md) | 轴对象。 |
| `Ang` | `number` | 旋转角度。 |

#### Returns

[`Mx3dGeomHyperbola`](Mx3dGeomHyperbola.md)

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

▸ **Scaled**(`P`, `S`): [`Mx3dGeomHyperbola`](Mx3dGeomHyperbola.md)

返回缩放后的新几何对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `P` | [`Mx3dGePoint`](Mx3dGePoint.md) | 点对象。 |
| `S` | `number` | 缩放比例。 |

#### Returns

[`Mx3dGeomHyperbola`](Mx3dGeomHyperbola.md)

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

### SetMajorRadius

▸ **SetMajorRadius**(`MajorRadius`): `void`

设置长轴半径。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `MajorRadius` | `number` | 长轴半径。 |

#### Returns

`void`

___

### SetMinorRadius

▸ **SetMinorRadius**(`MinorRadius`): `void`

设置短轴半径。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `MinorRadius` | `number` | 短轴半径。 |

#### Returns

`void`

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

对双曲线进行变换。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `T` | [`Mx3dGeTrsf`](Mx3dGeTrsf.md) | 变换对象。 |

#### Returns

`void`

___

### Transformed

▸ **Transformed**(`T`): [`Mx3dGeomHyperbola`](Mx3dGeomHyperbola.md)

返回变换后的新几何对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `T` | [`Mx3dGeTrsf`](Mx3dGeTrsf.md) | 变换对象。 |

#### Returns

[`Mx3dGeomHyperbola`](Mx3dGeomHyperbola.md)

新的几何对象。

#### Inherited from

[Mx3dGeomConic](Mx3dGeomConic.md).[Transformed](Mx3dGeomConic.md#transformed)

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

▸ **TranslatedBy2Points**(`P1`, `P2`): [`Mx3dGeomHyperbola`](Mx3dGeomHyperbola.md)

返回通过两个点平移后的新几何对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `P1` | [`Mx3dGePoint`](Mx3dGePoint.md) | 起始点对象。 |
| `P2` | [`Mx3dGePoint`](Mx3dGePoint.md) | 终止点对象。 |

#### Returns

[`Mx3dGeomHyperbola`](Mx3dGeomHyperbola.md)

新的几何对象。

#### Inherited from

[Mx3dGeomConic](Mx3dGeomConic.md).[TranslatedBy2Points](Mx3dGeomConic.md#translatedby2points)

___

### TranslatedByVec

▸ **TranslatedByVec**(`V`): [`Mx3dGeomHyperbola`](Mx3dGeomHyperbola.md)

返回通过向量平移后的新几何对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `V` | [`Mx3dGeVec`](Mx3dGeVec.md) | 向量对象。 |

#### Returns

[`Mx3dGeomHyperbola`](Mx3dGeomHyperbola.md)

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

▸ `Static` **DownCast**(`theObject`): [`Mx3dGeomHyperbola`](Mx3dGeomHyperbola.md)

父类对象转 Mx3dGeomHyperbola 类对象

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theObject` | [`Mx3dGeomObject`](Mx3dGeomObject.md) | 父类对象 |

#### Returns

[`Mx3dGeomHyperbola`](Mx3dGeomHyperbola.md)

Mx3dGeomHyperbola 类对象
