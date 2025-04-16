[mxcad_3d API 文档](../README.md) / Mx3dGeomBSplineSurface

# Class: Mx3dGeomBSplineSurface

表示一个B样条曲面，继承自Mx3dGeomBoundedSurface。
提供多种操作和查询方法来处理B样条曲面。

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

构造函数用于创建一个B样条曲面。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Poles` | [`Mx3dGePoint`](Mx3dGePoint.md)[][] | 控制点数组，二维数组表示U方向和V方向的控制点。 |
| `dUKnots` | `number`[] | U方向的节点序列。 |
| `dVKnots` | `number`[] | V方向的节点序列。 |
| `iUMults` | `number`[] | U方向节点的多重性。 |
| `iVMults` | `number`[] | V方向节点的多重性。 |
| `UDegree` | `number` | U方向的曲线阶数。 |
| `VDegree` | `number` | V方向的曲线阶数。 |
| `UPeriodic` | `boolean` | U方向是否为周期性。 |
| `VPeriodic` | `boolean` | V方向是否为周期性。 |

#### Overrides

Mx3dGeomBoundedSurface.constructor

• **new Mx3dGeomBSplineSurface**(`Poles`, `dWeights`, `dUKnots`, `dVKnots`, `iUMults`, `iVMults`, `UDegree`, `VDegree`, `UPeriodic`, `VPeriodic`)

构造函数用于创建一个带权的B样条曲面。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Poles` | [`Mx3dGePoint`](Mx3dGePoint.md)[][] | 控制点数组，二维数组表示U方向和V方向的控制点。 |
| `dWeights` | `number`[][] | 控制点权重的二维数组。 |
| `dUKnots` | `number`[] | U方向的节点序列。 |
| `dVKnots` | `number`[] | V方向的节点序列。 |
| `iUMults` | `number`[] | U方向节点的多重性。 |
| `iVMults` | `number`[] | V方向节点的多重性。 |
| `UDegree` | `number` | U方向的曲线阶数。 |
| `VDegree` | `number` | V方向的曲线阶数。 |
| `UPeriodic` | `boolean` | U方向是否为周期性。 |
| `VPeriodic` | `boolean` | V方向是否为周期性。 |

#### Overrides

Mx3dGeomBoundedSurface.constructor

## Methods

### Bounds

▸ **Bounds**(`U1U2V1V2`): `void`

获取曲面的边界。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `U1U2V1V2` | [dU1: number, dU2: number, dV1: number, dV2: number] | 边界参数。 |

#### Returns

`void`

___

### CheckAndSegment

▸ **CheckAndSegment**(`U1`, `U2`, `V1`, `V2`): `void`

检查并获取指定U和V范围内的曲面片段。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `U1` | `number` | 起始U参数。 |
| `U2` | `number` | 结束U参数。 |
| `V1` | `number` | 起始V参数。 |
| `V2` | `number` | 结束V参数。 |

#### Returns

`void`

___

### Continuity

▸ **Continuity**(): [`MxGAShapeEnum`](../enums/MdGe.MxGAShapeEnum.md)

获取曲面的连续性。

#### Returns

[`MxGAShapeEnum`](../enums/MdGe.MxGAShapeEnum.md)

返回曲面的连续性类型。

___

### Copy

▸ **Copy**(): [`Mx3dGeomObject`](Mx3dGeomObject.md)

复制当前曲面对象。

#### Returns

[`Mx3dGeomObject`](Mx3dGeomObject.md)

返回一个新的曲面对象。

___

### D0

▸ **D0**(`U`, `V`, `P`): `void`

计算指定参数点的零阶导数。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `U` | `number` | 参数U值。 |
| `V` | `number` | 参数V值。 |
| `P` | [`Mx3dGePoint`](Mx3dGePoint.md) | 返回的点。 |

#### Returns

`void`

___

### D1

▸ **D1**(`U`, `V`, `P`, `D1U`, `D1V`): `void`

计算指定参数点的一阶导数。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `U` | `number` | 参数U值。 |
| `V` | `number` | 参数V值。 |
| `P` | [`Mx3dGePoint`](Mx3dGePoint.md) | 返回的点。 |
| `D1U` | [`Mx3dGeVec`](Mx3dGeVec.md) | U方向的一阶导数。 |
| `D1V` | [`Mx3dGeVec`](Mx3dGeVec.md) | V方向的一阶导数。 |

#### Returns

`void`

___

### D2

▸ **D2**(`U`, `V`, `P`, `D1U`, `D1V`, `D2U`, `D2V`, `D2UV`): `void`

计算指定参数点的二阶导数。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `U` | `number` | 参数U值。 |
| `V` | `number` | 参数V值。 |
| `P` | [`Mx3dGePoint`](Mx3dGePoint.md) | 返回的点。 |
| `D1U` | [`Mx3dGeVec`](Mx3dGeVec.md) | U方向的一阶导数。 |
| `D1V` | [`Mx3dGeVec`](Mx3dGeVec.md) | V方向的一阶导数。 |
| `D2U` | [`Mx3dGeVec`](Mx3dGeVec.md) | U方向的二阶导数。 |
| `D2V` | [`Mx3dGeVec`](Mx3dGeVec.md) | V方向的二阶导数。 |
| `D2UV` | [`Mx3dGeVec`](Mx3dGeVec.md) | U和V方向的混合二阶导数。 |

#### Returns

`void`

___

### D3

▸ **D3**(`U`, `V`, `P`, `D1U`, `D1V`, `D2U`, `D2V`, `D2UV`, `D3U`, `D3V`, `D3UUV`, `D3UVV`): `void`

计算指定参数点的三阶导数。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `U` | `number` | 参数U值。 |
| `V` | `number` | 参数V值。 |
| `P` | [`Mx3dGePoint`](Mx3dGePoint.md) | 返回的点。 |
| `D1U` | [`Mx3dGeVec`](Mx3dGeVec.md) | U方向的一阶导数。 |
| `D1V` | [`Mx3dGeVec`](Mx3dGeVec.md) | V方向的一阶导数。 |
| `D2U` | [`Mx3dGeVec`](Mx3dGeVec.md) | U方向的二阶导数。 |
| `D2V` | [`Mx3dGeVec`](Mx3dGeVec.md) | V方向的二阶导数。 |
| `D2UV` | [`Mx3dGeVec`](Mx3dGeVec.md) | U和V方向的混合二阶导数。 |
| `D3U` | [`Mx3dGeVec`](Mx3dGeVec.md) | U方向的三阶导数。 |
| `D3V` | [`Mx3dGeVec`](Mx3dGeVec.md) | V方向的三阶导数。 |
| `D3UUV` | [`Mx3dGeVec`](Mx3dGeVec.md) | U和U方向的混合三阶导数。 |
| `D3UVV` | [`Mx3dGeVec`](Mx3dGeVec.md) | U和V方向的混合三阶导数。 |

#### Returns

`void`

___

### DN

▸ **DN**(`U`, `V`, `Nu`, `Nv`): [`Mx3dGeVec`](Mx3dGeVec.md)

计算指定参数点的N阶导数。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `U` | `number` | 参数U值。 |
| `V` | `number` | 参数V值。 |
| `Nu` | `number` | 导数阶数U。 |
| `Nv` | `number` | 导数阶数V。 |

#### Returns

[`Mx3dGeVec`](Mx3dGeVec.md)

返回导数向量。

___

### DynamicType

▸ **DynamicType**(): `string`

获取动态类型名称。

#### Returns

`string`

返回类型名称的字符串。

#### Overrides

[Mx3dGeomBoundedSurface](Mx3dGeomBoundedSurface.md).[DynamicType](Mx3dGeomBoundedSurface.md#dynamictype)

___

### ExchangeUV

▸ **ExchangeUV**(): `void`

交换U和V方向的节点序列。

#### Returns

`void`

___

### Face

▸ **Face**(`TolDegen`): [`Mx3dShapeFace`](Mx3dShapeFace.md)

根据容忍度生成面片。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `TolDegen` | `number` | 容忍度。 |

#### Returns

[`Mx3dShapeFace`](Mx3dShapeFace.md)

返回生成的面片对象。

▸ **Face**(`W`, `Inside`): [`Mx3dShapeFace`](Mx3dShapeFace.md)

根据线条和是否在内部生成面片。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `W` | [`Mx3dShapeWire`](Mx3dShapeWire.md) | 线条对象。 |
| `Inside` | `boolean` | 是否在内部。 |

#### Returns

[`Mx3dShapeFace`](Mx3dShapeFace.md)

返回生成的面片对象。

▸ **Face**(`UMin`, `UMax`, `VMin`, `VMax`, `TolDegen`): [`Mx3dShapeFace`](Mx3dShapeFace.md)

根据U、V范围和容忍度生成面片。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `UMin` | `number` | U方向最小值。 |
| `UMax` | `number` | U方向最大值。 |
| `VMin` | `number` | V方向最小值。 |
| `VMax` | `number` | V方向最大值。 |
| `TolDegen` | `number` | 容忍度。 |

#### Returns

[`Mx3dShapeFace`](Mx3dShapeFace.md)

返回生成的面片对象。

___

### FirstUKnotIndex

▸ **FirstUKnotIndex**(): `number`

获取U方向的第一个节点索引。

#### Returns

`number`

返回第一个节点索引。

___

### FirstVKnotIndex

▸ **FirstVKnotIndex**(): `number`

获取V方向的第一个节点索引。

#### Returns

`number`

返回第一个节点索引。

___

### IncreaseDegree

▸ **IncreaseDegree**(`UDegree`, `VDegree`): `void`

提高曲面的U和V方向阶数。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `UDegree` | `number` | 提高后的U方向阶数。 |
| `VDegree` | `number` | 提高后的V方向阶数。 |

#### Returns

`void`

___

### IncreaseUMultiplicity

▸ **IncreaseUMultiplicity**(`UIndex`, `M`): `void`

增加U方向节点的多重性。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `UIndex` | `number` | 节点索引。 |
| `M` | `number` | 多重性增量。 |

#### Returns

`void`

▸ **IncreaseUMultiplicity**(`FromI1`, `ToI2`, `M`): `void`

增加U方向节点多重性在指定区间内。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `FromI1` | `number` | 起始索引。 |
| `ToI2` | `number` | 结束索引。 |
| `M` | `number` | 多重性增量。 |

#### Returns

`void`

___

### IncreaseVMultiplicity

▸ **IncreaseVMultiplicity**(`VIndex`, `M`): `void`

增加V方向节点的多重性。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `VIndex` | `number` | 节点索引。 |
| `M` | `number` | 多重性增量。 |

#### Returns

`void`

▸ **IncreaseVMultiplicity**(`FromI1`, `ToI2`, `M`): `void`

增加V方向节点多重性在指定区间内。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `FromI1` | `number` | 起始索引。 |
| `ToI2` | `number` | 结束索引。 |
| `M` | `number` | 多重性增量。 |

#### Returns

`void`

___

### IncrementUMultiplicity

▸ **IncrementUMultiplicity**(`FromI1`, `ToI2`, `Step`): `void`

增加U方向节点多重性在指定区间内，按步骤增加。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `FromI1` | `number` | 起始索引。 |
| `ToI2` | `number` | 结束索引。 |
| `Step` | `number` | 增量步骤。 |

#### Returns

`void`

___

### IncrementVMultiplicity

▸ **IncrementVMultiplicity**(`FromI1`, `ToI2`, `Step`): `void`

增加V方向节点多重性在指定区间内，按步骤增加。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `FromI1` | `number` | 起始索引。 |
| `ToI2` | `number` | 结束索引。 |
| `Step` | `number` | 增量步骤。 |

#### Returns

`void`

___

### InsertUKnot

▸ **InsertUKnot**(`U`, `M`, `ParametricTolerance`, `Add`): `void`

插入U方向节点。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `U` | `number` | 节点值。 |
| `M` | `number` | 多重性。 |
| `ParametricTolerance` | `number` | 参数容差。 |
| `Add` | `boolean` | 是否添加到曲面中。 |

#### Returns

`void`

___

### InsertUKnots

▸ **InsertUKnots**(`dKnots`, `iMults`, `dParametricTolerance`, `Add`): `void`

插入U方向节点。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dKnots` | `number`[] | 节点值数组。 |
| `iMults` | `number`[] | 节点多重性数组。 |
| `dParametricTolerance` | `number` | 参数容差。 |
| `Add` | `boolean` | 是否添加到曲面中。 |

#### Returns

`void`

___

### InsertVKnot

▸ **InsertVKnot**(`V`, `M`, `ParametricTolerance`, `Add`): `void`

插入V方向节点。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `V` | `number` | 节点值。 |
| `M` | `number` | 多重性。 |
| `ParametricTolerance` | `number` | 参数容差。 |
| `Add` | `boolean` | 是否添加到曲面中。 |

#### Returns

`void`

___

### InsertVKnots

▸ **InsertVKnots**(`dKnots`, `iMults`, `dParametricTolerance`, `Add`): `void`

插入V方向节点。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dKnots` | `number`[] | 节点值数组。 |
| `iMults` | `number`[] | 节点多重性数组。 |
| `dParametricTolerance` | `number` | 参数容差。 |
| `Add` | `boolean` | 是否添加到曲面中。 |

#### Returns

`void`

___

### IsCNu

▸ **IsCNu**(`N`): `boolean`

检查U方向是否为连续N阶。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `N` | `number` | 连续阶数。 |

#### Returns

`boolean`

返回是否为连续N阶。

___

### IsCNv

▸ **IsCNv**(`N`): `boolean`

检查V方向是否为连续N阶。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `N` | `number` | 连续阶数。 |

#### Returns

`boolean`

返回是否为连续N阶。

___

### IsUClosed

▸ **IsUClosed**(): `boolean`

检查U方向是否为周期性。

#### Returns

`boolean`

返回是否为周期性。

___

### IsUPeriodic

▸ **IsUPeriodic**(): `boolean`

检查U方向是否为周期性。

#### Returns

`boolean`

返回是否为周期性。

___

### IsURational

▸ **IsURational**(): `boolean`

检查U方向是否为有理。

#### Returns

`boolean`

返回是否为有理。

___

### IsVClosed

▸ **IsVClosed**(): `boolean`

检查V方向是否为周期性。

#### Returns

`boolean`

返回是否为周期性。

___

### IsVPeriodic

▸ **IsVPeriodic**(): `boolean`

检查V方向是否为周期性。

#### Returns

`boolean`

返回是否为周期性。

___

### IsVRational

▸ **IsVRational**(): `boolean`

检查V方向是否为有理。

#### Returns

`boolean`

返回是否为有理。

___

### LastUKnotIndex

▸ **LastUKnotIndex**(): `number`

获取U方向的最后一个节点索引。

#### Returns

`number`

返回最后一个节点索引。

___

### LastVKnotIndex

▸ **LastVKnotIndex**(): `number`

获取V方向的最后一个节点索引。

#### Returns

`number`

返回最后一个节点索引。

___

### LocalD0

▸ **LocalD0**(`U`, `V`, `FromUK1`, `ToUK2`, `FromVK1`, `ToVK2`, `P`): `void`

计算局部参数点的零阶导数。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `U` | `number` | 参数U值。 |
| `V` | `number` | 参数V值。 |
| `FromUK1` | `number` | 从U方向的起始节点。 |
| `ToUK2` | `number` | 到U方向的结束节点。 |
| `FromVK1` | `number` | 从V方向的起始节点。 |
| `ToVK2` | `number` | 到V方向的结束节点。 |
| `P` | [`Mx3dGePoint`](Mx3dGePoint.md) | 返回的点。 |

#### Returns

`void`

___

### LocalD1

▸ **LocalD1**(`U`, `V`, `FromUK1`, `ToUK2`, `FromVK1`, `ToVK2`, `P`, `D1U`, `D1V`): `void`

计算局部参数点的一阶导数。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `U` | `number` | 参数U值。 |
| `V` | `number` | 参数V值。 |
| `FromUK1` | `number` | 从U方向的起始节点。 |
| `ToUK2` | `number` | 到U方向的结束节点。 |
| `FromVK1` | `number` | 从V方向的起始节点。 |
| `ToVK2` | `number` | 到V方向的结束节点。 |
| `P` | [`Mx3dGePoint`](Mx3dGePoint.md) | 返回的点。 |
| `D1U` | [`Mx3dGeVec`](Mx3dGeVec.md) | U方向的一阶导数。 |
| `D1V` | [`Mx3dGeVec`](Mx3dGeVec.md) | V方向的一阶导数。 |

#### Returns

`void`

___

### LocalD2

▸ **LocalD2**(`U`, `V`, `FromUK1`, `ToUK2`, `FromVK1`, `ToVK2`, `P`, `D1U`, `D1V`, `D2U`, `D2V`, `D2UV`): `void`

计算局部参数点的二阶导数。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `U` | `number` | 参数U值。 |
| `V` | `number` | 参数V值。 |
| `FromUK1` | `number` | 从U方向的起始节点。 |
| `ToUK2` | `number` | 到U方向的结束节点。 |
| `FromVK1` | `number` | 从V方向的起始节点。 |
| `ToVK2` | `number` | 到V方向的结束节点。 |
| `P` | [`Mx3dGePoint`](Mx3dGePoint.md) | 返回的点。 |
| `D1U` | [`Mx3dGeVec`](Mx3dGeVec.md) | U方向的一阶导数。 |
| `D1V` | [`Mx3dGeVec`](Mx3dGeVec.md) | V方向的一阶导数。 |
| `D2U` | [`Mx3dGeVec`](Mx3dGeVec.md) | U方向的二阶导数。 |
| `D2V` | [`Mx3dGeVec`](Mx3dGeVec.md) | V方向的二阶导数。 |
| `D2UV` | [`Mx3dGeVec`](Mx3dGeVec.md) | U和V方向的混合二阶导数。 |

#### Returns

`void`

___

### LocalD3

▸ **LocalD3**(`U`, `V`, `FromUK1`, `ToUK2`, `FromVK1`, `ToVK2`, `P`, `D1U`, `D1V`, `D2U`, `D2V`, `D2UV`, `D3U`, `D3V`, `D3UUV`, `D3UVV`): `void`

计算局部参数点的三阶导数。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `U` | `number` | 参数U值。 |
| `V` | `number` | 参数V值。 |
| `FromUK1` | `number` | 从U方向的起始节点。 |
| `ToUK2` | `number` | 到U方向的结束节点。 |
| `FromVK1` | `number` | 从V方向的起始节点。 |
| `ToVK2` | `number` | 到V方向的结束节点。 |
| `P` | [`Mx3dGePoint`](Mx3dGePoint.md) | 返回的点。 |
| `D1U` | [`Mx3dGeVec`](Mx3dGeVec.md) | U方向的一阶导数。 |
| `D1V` | [`Mx3dGeVec`](Mx3dGeVec.md) | V方向的一阶导数。 |
| `D2U` | [`Mx3dGeVec`](Mx3dGeVec.md) | U方向的二阶导数。 |
| `D2V` | [`Mx3dGeVec`](Mx3dGeVec.md) | V方向的二阶导数。 |
| `D2UV` | [`Mx3dGeVec`](Mx3dGeVec.md) | U和V方向的混合二阶导数。 |
| `D3U` | [`Mx3dGeVec`](Mx3dGeVec.md) | U方向的三阶导数。 |
| `D3V` | [`Mx3dGeVec`](Mx3dGeVec.md) | V方向的三阶导数。 |
| `D3UUV` | [`Mx3dGeVec`](Mx3dGeVec.md) | U和U方向的混合三阶导数。 |
| `D3UVV` | [`Mx3dGeVec`](Mx3dGeVec.md) | U和V方向的混合三阶导数。 |

#### Returns

`void`

___

### LocalDN

▸ **LocalDN**(`U`, `V`, `FromUK1`, `ToUK2`, `FromVK1`, `ToVK2`, `Nu`, `Nv`): [`Mx3dGeVec`](Mx3dGeVec.md)

计算局部参数点的N阶导数。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `U` | `number` | 参数U值。 |
| `V` | `number` | 参数V值。 |
| `FromUK1` | `number` | 从U方向的起始节点。 |
| `ToUK2` | `number` | 到U方向的结束节点。 |
| `FromVK1` | `number` | 从V方向的起始节点。 |
| `ToVK2` | `number` | 到V方向的结束节点。 |
| `Nu` | `number` | 导数阶数U。 |
| `Nv` | `number` | 导数阶数V。 |

#### Returns

[`Mx3dGeVec`](Mx3dGeVec.md)

返回导数向量。

___

### LocalValue

▸ **LocalValue**(`U`, `V`, `FromUK1`, `ToUK2`, `FromVK1`, `ToVK2`): [`Mx3dGePoint`](Mx3dGePoint.md)

在局部范围内计算曲面上的点。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `U` | `number` | 参数U值。 |
| `V` | `number` | 参数V值。 |
| `FromUK1` | `number` | U方向起始索引。 |
| `ToUK2` | `number` | U方向结束索引。 |
| `FromVK1` | `number` | V方向起始索引。 |
| `ToVK2` | `number` | V方向结束索引。 |

#### Returns

[`Mx3dGePoint`](Mx3dGePoint.md)

返回计算点的二维点。

___

### LocateU

▸ **LocateU**(`U`, `ParametricTolerance`, `I1I2`, `WithKnotRepetition`): `void`

定位U方向的节点。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `U` | `number` | 参数值。 |
| `ParametricTolerance` | `number` | 参数容差。 |
| `I1I2` | [iI1: number, iI2: number] | 返回的起始和结束节点索引。 |
| `WithKnotRepetition` | `boolean` | 是否包含节点重复。 |

#### Returns

`void`

___

### LocateV

▸ **LocateV**(`V`, `ParametricTolerance`, `I1I2`, `WithKnotRepetition`): `void`

定位V方向的节点。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `V` | `number` | 参数值。 |
| `ParametricTolerance` | `number` | 参数容差。 |
| `I1I2` | [iI1: number, iI2: number] | 返回的起始和结束节点索引。 |
| `WithKnotRepetition` | `boolean` | 是否包含节点重复。 |

#### Returns

`void`

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

[Mx3dGeomBoundedSurface](Mx3dGeomBoundedSurface.md).[MirrorByAxis](Mx3dGeomBoundedSurface.md#mirrorbyaxis)

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

[Mx3dGeomBoundedSurface](Mx3dGeomBoundedSurface.md).[MirrorByCSYSR](Mx3dGeomBoundedSurface.md#mirrorbycsysr)

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

[Mx3dGeomBoundedSurface](Mx3dGeomBoundedSurface.md).[MirrorByPoint](Mx3dGeomBoundedSurface.md#mirrorbypoint)

___

### MirroredByAxis

▸ **MirroredByAxis**(`A1`): [`Mx3dGeomBSplineSurface`](Mx3dGeomBSplineSurface.md)

返回通过轴镜像变换后的新几何对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `A1` | [`Mx3dGeAxis`](Mx3dGeAxis.md) | 轴对象。 |

#### Returns

[`Mx3dGeomBSplineSurface`](Mx3dGeomBSplineSurface.md)

新的几何对象。

#### Inherited from

[Mx3dGeomBoundedSurface](Mx3dGeomBoundedSurface.md).[MirroredByAxis](Mx3dGeomBoundedSurface.md#mirroredbyaxis)

___

### MirroredByCSYSR

▸ **MirroredByCSYSR**(`A2`): [`Mx3dGeomBSplineSurface`](Mx3dGeomBSplineSurface.md)

返回通过右手坐标系镜像变换后的新几何对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `A2` | [`Mx3dGeCSYSR`](Mx3dGeCSYSR.md) | 右手坐标系对象。 |

#### Returns

[`Mx3dGeomBSplineSurface`](Mx3dGeomBSplineSurface.md)

新的几何对象。

#### Inherited from

[Mx3dGeomBoundedSurface](Mx3dGeomBoundedSurface.md).[MirroredByCSYSR](Mx3dGeomBoundedSurface.md#mirroredbycsysr)

___

### MirroredByPoint

▸ **MirroredByPoint**(`P`): [`Mx3dGeomBSplineSurface`](Mx3dGeomBSplineSurface.md)

返回通过点镜像变换后的新几何对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `P` | [`Mx3dGePoint`](Mx3dGePoint.md) | 点对象。 |

#### Returns

[`Mx3dGeomBSplineSurface`](Mx3dGeomBSplineSurface.md)

新的几何对象。

#### Inherited from

[Mx3dGeomBoundedSurface](Mx3dGeomBoundedSurface.md).[MirroredByPoint](Mx3dGeomBoundedSurface.md#mirroredbypoint)

___

### MovePoint

▸ **MovePoint**(`U`, `V`, `P`, `UIndex1`, `UIndex2`, `VIndex1`, `VIndex2`, `UFULVFVL`): `void`

移动指定U和V索引的控制点。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `U` | `number` | U参数值。 |
| `V` | `number` | V参数值。 |
| `P` | [`Mx3dGePoint`](Mx3dGePoint.md) | 新的控制点。 |
| `UIndex1` | `number` | U方向起始索引。 |
| `UIndex2` | `number` | U方向结束索引。 |
| `VIndex1` | `number` | V方向起始索引。 |
| `VIndex2` | `number` | V方向结束索引。 |
| `UFULVFVL` | [iUF: number, iUL: number, iVF: number, iVL: number] | 索引数组。 |

#### Returns

`void`

___

### NbUKnots

▸ **NbUKnots**(): `number`

获取U方向节点数目。

#### Returns

`number`

返回节点数目。

___

### NbUPoles

▸ **NbUPoles**(): `number`

获取U方向控制点数目。

#### Returns

`number`

返回控制点数目。

___

### NbVKnots

▸ **NbVKnots**(): `number`

获取V方向节点数目。

#### Returns

`number`

返回节点数目。

___

### NbVPoles

▸ **NbVPoles**(): `number`

获取V方向控制点数目。

#### Returns

`number`

返回控制点数目。

___

### PeriodicNormalization

▸ **PeriodicNormalization**(`UV`): `void`

对节点序列进行周期化规范化。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `UV` | [dU: number, dV: number] | 代表U和V方向的参数。 |

#### Returns

`void`

___

### Pole

▸ **Pole**(`UIndex`, `VIndex`): [`Mx3dGePoint`](Mx3dGePoint.md)

获取指定U和V索引的控制点。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `UIndex` | `number` | U方向索引。 |
| `VIndex` | `number` | V方向索引。 |

#### Returns

[`Mx3dGePoint`](Mx3dGePoint.md)

返回控制点。

___

### Poles

▸ **Poles**(): [`Mx3dGePoint`](Mx3dGePoint.md)[][]

获取所有控制点。

#### Returns

[`Mx3dGePoint`](Mx3dGePoint.md)[][]

返回控制点数组。

___

### RemoveUKnot

▸ **RemoveUKnot**(`iIndex`, `iM`, `dTolerance`): `boolean`

移除U方向节点。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `iIndex` | `number` | 节点索引。 |
| `iM` | `number` | 多重性。 |
| `dTolerance` | `number` | 容差值。 |

#### Returns

`boolean`

返回是否成功移除。

___

### RemoveVKnot

▸ **RemoveVKnot**(`iIndex`, `iM`, `dTolerance`): `boolean`

移除V方向节点。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `iIndex` | `number` | 节点索引。 |
| `iM` | `number` | 多重性。 |
| `dTolerance` | `number` | 容差值。 |

#### Returns

`boolean`

返回是否成功移除。

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

[Mx3dGeomBoundedSurface](Mx3dGeomBoundedSurface.md).[Rotate](Mx3dGeomBoundedSurface.md#rotate)

___

### Rotated

▸ **Rotated**(`A1`, `Ang`): [`Mx3dGeomBSplineSurface`](Mx3dGeomBSplineSurface.md)

返回旋转后的新几何对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `A1` | [`Mx3dGeAxis`](Mx3dGeAxis.md) | 轴对象。 |
| `Ang` | `number` | 旋转角度。 |

#### Returns

[`Mx3dGeomBSplineSurface`](Mx3dGeomBSplineSurface.md)

新的几何对象。

#### Inherited from

[Mx3dGeomBoundedSurface](Mx3dGeomBoundedSurface.md).[Rotated](Mx3dGeomBoundedSurface.md#rotated)

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

[Mx3dGeomBoundedSurface](Mx3dGeomBoundedSurface.md).[Scale](Mx3dGeomBoundedSurface.md#scale)

___

### Scaled

▸ **Scaled**(`P`, `S`): [`Mx3dGeomBSplineSurface`](Mx3dGeomBSplineSurface.md)

返回缩放后的新几何对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `P` | [`Mx3dGePoint`](Mx3dGePoint.md) | 点对象。 |
| `S` | `number` | 缩放比例。 |

#### Returns

[`Mx3dGeomBSplineSurface`](Mx3dGeomBSplineSurface.md)

新的几何对象。

#### Inherited from

[Mx3dGeomBoundedSurface](Mx3dGeomBoundedSurface.md).[Scaled](Mx3dGeomBoundedSurface.md#scaled)

___

### Segment

▸ **Segment**(`U1`, `U2`, `V1`, `V2`): `void`

获取指定U和V范围内的曲面片段。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `U1` | `number` | 起始U参数。 |
| `U2` | `number` | 结束U参数。 |
| `V1` | `number` | 起始V参数。 |
| `V2` | `number` | 结束V参数。 |

#### Returns

`void`

___

### SetPole

▸ **SetPole**(`UIndex`, `VIndex`, `P`): `void`

设置指定U和V索引的控制点。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `UIndex` | `number` | U方向索引。 |
| `VIndex` | `number` | V方向索引。 |
| `P` | [`Mx3dGePoint`](Mx3dGePoint.md) | 控制点。 |

#### Returns

`void`

▸ **SetPole**(`UIndex`, `VIndex`, `P`, `Weight`): `void`

设置指定U和V索引的控制点及权重。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `UIndex` | `number` | U方向索引。 |
| `VIndex` | `number` | V方向索引。 |
| `P` | [`Mx3dGePoint`](Mx3dGePoint.md) | 控制点。 |
| `Weight` | `number` | 权重值。 |

#### Returns

`void`

___

### SetPoleCol

▸ **SetPoleCol**(`VIndex`, `CPoles`): `void`

设置指定V方向索引的控制点列。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `VIndex` | `number` | V方向索引。 |
| `CPoles` | [`Mx3dGePoint`](Mx3dGePoint.md)[] | 控制点数组。 |

#### Returns

`void`

▸ **SetPoleCol**(`VIndex`, `CPoles`, `dCPoleWeights`): `void`

设置指定V方向索引的控制点列及权重。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `VIndex` | `number` | V方向索引。 |
| `CPoles` | [`Mx3dGePoint`](Mx3dGePoint.md)[] | 控制点数组。 |
| `dCPoleWeights` | `number`[] | 控制点权重数组。 |

#### Returns

`void`

___

### SetPoleRow

▸ **SetPoleRow**(`UIndex`, `CPoles`): `void`

设置指定U方向索引的控制点行。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `UIndex` | `number` | U方向索引。 |
| `CPoles` | [`Mx3dGePoint`](Mx3dGePoint.md)[] | 控制点数组。 |

#### Returns

`void`

▸ **SetPoleRow**(`UIndex`, `CPoles`, `dCPoleWeights`): `void`

设置指定U方向索引的控制点行及权重。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `UIndex` | `number` | U方向索引。 |
| `CPoles` | [`Mx3dGePoint`](Mx3dGePoint.md)[] | 控制点数组。 |
| `dCPoleWeights` | `number`[] | 控制点权重数组。 |

#### Returns

`void`

___

### SetUKnot

▸ **SetUKnot**(`UIndex`, `K`): `void`

设置U方向的节点值。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `UIndex` | `number` | 节点索引。 |
| `K` | `number` | 新节点值。 |

#### Returns

`void`

▸ **SetUKnot**(`UIndex`, `K`, `M`): `void`

设置U方向的节点值，包含多重性。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `UIndex` | `number` | 节点索引。 |
| `K` | `number` | 新节点值。 |
| `M` | `number` | 多重性。 |

#### Returns

`void`

___

### SetUKnots

▸ **SetUKnots**(`dUK`): `void`

设置U方向节点序列。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dUK` | `number`[] | 新的U方向节点序列。 |

#### Returns

`void`

___

### SetUNotPeriodic

▸ **SetUNotPeriodic**(): `void`

设置U方向为非周期性。

#### Returns

`void`

___

### SetUOrigin

▸ **SetUOrigin**(`Index`): `void`

设置U方向的原点索引。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Index` | `number` | 原点索引。 |

#### Returns

`void`

___

### SetUPeriodic

▸ **SetUPeriodic**(): `void`

设置U方向为周期性。

#### Returns

`void`

___

### SetVKnot

▸ **SetVKnot**(`VIndex`, `K`): `void`

设置V方向的节点值。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `VIndex` | `number` | 节点索引。 |
| `K` | `number` | 新节点值。 |

#### Returns

`void`

▸ **SetVKnot**(`VIndex`, `K`, `M`): `void`

设置V方向的节点值，包含多重性。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `VIndex` | `number` | 节点索引。 |
| `K` | `number` | 新节点值。 |
| `M` | `number` | 多重性。 |

#### Returns

`void`

___

### SetVKnots

▸ **SetVKnots**(`dVK`): `void`

设置V方向节点序列。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dVK` | `number`[] | 新的V方向节点序列。 |

#### Returns

`void`

___

### SetVNotPeriodic

▸ **SetVNotPeriodic**(): `void`

设置V方向为非周期性。

#### Returns

`void`

___

### SetVOrigin

▸ **SetVOrigin**(`Index`): `void`

设置V方向的原点索引。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Index` | `number` | 原点索引。 |

#### Returns

`void`

___

### SetVPeriodic

▸ **SetVPeriodic**(): `void`

设置V方向为周期性。

#### Returns

`void`

___

### SetWeight

▸ **SetWeight**(`UIndex`, `VIndex`, `Weight`): `void`

设置指定U和V索引的权重值。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `UIndex` | `number` | U方向索引。 |
| `VIndex` | `number` | V方向索引。 |
| `Weight` | `number` | 权重值。 |

#### Returns

`void`

___

### SetWeightCol

▸ **SetWeightCol**(`VIndex`, `dCPoleWeights`): `void`

设置指定V方向索引的权重列。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `VIndex` | `number` | V方向索引。 |
| `dCPoleWeights` | `number`[] | 权重数组。 |

#### Returns

`void`

___

### SetWeightRow

▸ **SetWeightRow**(`UIndex`, `dCPoleWeights`): `void`

设置指定U方向索引的权重行。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `UIndex` | `number` | U方向索引。 |
| `dCPoleWeights` | `number`[] | 权重数组。 |

#### Returns

`void`

___

### Transform

▸ **Transform**(`T`): `void`

应用变换矩阵到曲面。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `T` | [`Mx3dGeTrsf`](Mx3dGeTrsf.md) | 变换矩阵。 |

#### Returns

`void`

___

### TransformParameters

▸ **TransformParameters**(`UV`, `T`): `void`

根据给定的变换矩阵 T 变换表面参数。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `UV` | [dU: number, dV: number] | 参数数组，包含 U 和 V 的值。 |
| `T` | [`Mx3dGeTrsf`](Mx3dGeTrsf.md) | 变换矩阵。 |

#### Returns

`void`

#### Inherited from

[Mx3dGeomBoundedSurface](Mx3dGeomBoundedSurface.md).[TransformParameters](Mx3dGeomBoundedSurface.md#transformparameters)

___

### Transformed

▸ **Transformed**(`T`): [`Mx3dGeomBSplineSurface`](Mx3dGeomBSplineSurface.md)

返回变换后的新几何对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `T` | [`Mx3dGeTrsf`](Mx3dGeTrsf.md) | 变换对象。 |

#### Returns

[`Mx3dGeomBSplineSurface`](Mx3dGeomBSplineSurface.md)

新的几何对象。

#### Inherited from

[Mx3dGeomBoundedSurface](Mx3dGeomBoundedSurface.md).[Transformed](Mx3dGeomBoundedSurface.md#transformed)

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

[Mx3dGeomBoundedSurface](Mx3dGeomBoundedSurface.md).[TranslateBy2Points](Mx3dGeomBoundedSurface.md#translateby2points)

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

[Mx3dGeomBoundedSurface](Mx3dGeomBoundedSurface.md).[TranslateByVec](Mx3dGeomBoundedSurface.md#translatebyvec)

___

### TranslatedBy2Points

▸ **TranslatedBy2Points**(`P1`, `P2`): [`Mx3dGeomBSplineSurface`](Mx3dGeomBSplineSurface.md)

返回通过两个点平移后的新几何对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `P1` | [`Mx3dGePoint`](Mx3dGePoint.md) | 起始点对象。 |
| `P2` | [`Mx3dGePoint`](Mx3dGePoint.md) | 终止点对象。 |

#### Returns

[`Mx3dGeomBSplineSurface`](Mx3dGeomBSplineSurface.md)

新的几何对象。

#### Inherited from

[Mx3dGeomBoundedSurface](Mx3dGeomBoundedSurface.md).[TranslatedBy2Points](Mx3dGeomBoundedSurface.md#translatedby2points)

___

### TranslatedByVec

▸ **TranslatedByVec**(`V`): [`Mx3dGeomBSplineSurface`](Mx3dGeomBSplineSurface.md)

返回通过向量平移后的新几何对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `V` | [`Mx3dGeVec`](Mx3dGeVec.md) | 向量对象。 |

#### Returns

[`Mx3dGeomBSplineSurface`](Mx3dGeomBSplineSurface.md)

新的几何对象。

#### Inherited from

[Mx3dGeomBoundedSurface](Mx3dGeomBoundedSurface.md).[TranslatedByVec](Mx3dGeomBoundedSurface.md#translatedbyvec)

___

### UDegree

▸ **UDegree**(): `number`

获取U方向的阶数。

#### Returns

`number`

返回U方向的阶数。

___

### UKnot

▸ **UKnot**(`UIndex`): `number`

获取指定U方向的节点值。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `UIndex` | `number` | 节点索引。 |

#### Returns

`number`

返回节点值。

___

### UKnotSequence

▸ **UKnotSequence**(): `number`[]

获取U方向节点序列。

#### Returns

`number`[]

返回节点序列。

___

### UKnots

▸ **UKnots**(): `number`[]

获取U方向节点数组。

#### Returns

`number`[]

返回节点数组。

___

### UMultiplicities

▸ **UMultiplicities**(): `number`[]

获取U方向节点多重性数组。

#### Returns

`number`[]

返回节点多重性数组。

___

### UMultiplicity

▸ **UMultiplicity**(`UIndex`): `number`

获取U方向节点多重性。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `UIndex` | `number` | 节点索引。 |

#### Returns

`number`

返回节点多重性。

___

### UPeriod

▸ **UPeriod**(): `number`

返回表面在 U 方向的周期。

#### Returns

`number`

表面在 U 方向的周期。

#### Inherited from

[Mx3dGeomBoundedSurface](Mx3dGeomBoundedSurface.md).[UPeriod](Mx3dGeomBoundedSurface.md#uperiod)

___

### UReverse

▸ **UReverse**(): `void`

反转U方向节点序列。

#### Returns

`void`

___

### UReversed

▸ **UReversed**(): [`Mx3dGeomBSplineSurface`](Mx3dGeomBSplineSurface.md)

反转 U 方向的参数化。

#### Returns

[`Mx3dGeomBSplineSurface`](Mx3dGeomBSplineSurface.md)

返回当前对象以实现链式调用。

#### Inherited from

[Mx3dGeomBoundedSurface](Mx3dGeomBoundedSurface.md).[UReversed](Mx3dGeomBoundedSurface.md#ureversed)

___

### UReversedParameter

▸ **UReversedParameter**(`U`): `number`

计算U方向反向参数。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `U` | `number` | 参数值。 |

#### Returns

`number`

返回反向后的参数值。

___

### VDegree

▸ **VDegree**(): `number`

获取V方向的阶数。

#### Returns

`number`

返回V方向的阶数。

___

### VKnot

▸ **VKnot**(`VIndex`): `number`

获取指定V方向的节点值。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `VIndex` | `number` | 节点索引。 |

#### Returns

`number`

返回节点值。

___

### VKnotSequence

▸ **VKnotSequence**(): `number`[]

获取V方向节点序列。

#### Returns

`number`[]

返回节点序列。

___

### VKnots

▸ **VKnots**(): `number`[]

获取V方向节点数组。

#### Returns

`number`[]

返回节点数组。

___

### VMultiplicities

▸ **VMultiplicities**(): `number`[]

获取V方向节点多重性数组。

#### Returns

`number`[]

返回节点多重性数组。

___

### VMultiplicity

▸ **VMultiplicity**(`VIndex`): `number`

获取V方向节点多重性。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `VIndex` | `number` | 节点索引。 |

#### Returns

`number`

返回节点多重性。

___

### VPeriod

▸ **VPeriod**(): `number`

返回表面在 V 方向的周期。

#### Returns

`number`

表面在 V 方向的周期。

#### Inherited from

[Mx3dGeomBoundedSurface](Mx3dGeomBoundedSurface.md).[VPeriod](Mx3dGeomBoundedSurface.md#vperiod)

___

### VReverse

▸ **VReverse**(): `void`

反转V方向节点序列。

#### Returns

`void`

___

### VReversed

▸ **VReversed**(): [`Mx3dGeomBSplineSurface`](Mx3dGeomBSplineSurface.md)

反转 V 方向的参数化。

#### Returns

[`Mx3dGeomBSplineSurface`](Mx3dGeomBSplineSurface.md)

返回当前对象以实现链式调用。

#### Inherited from

[Mx3dGeomBoundedSurface](Mx3dGeomBoundedSurface.md).[VReversed](Mx3dGeomBoundedSurface.md#vreversed)

___

### VReversedParameter

▸ **VReversedParameter**(`V`): `number`

计算V方向反向参数。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `V` | `number` | 参数值。 |

#### Returns

`number`

返回反向后的参数值。

___

### Value

▸ **Value**(`U`, `V`): [`Mx3dGePoint`](Mx3dGePoint.md)

计算参数 (U, V) 对应的表面上的点。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `U` | `number` | 表面参数 U。 |
| `V` | `number` | 表面参数 V。 |

#### Returns

[`Mx3dGePoint`](Mx3dGePoint.md)

对应的点。

#### Inherited from

[Mx3dGeomBoundedSurface](Mx3dGeomBoundedSurface.md).[Value](Mx3dGeomBoundedSurface.md#value)

___

### Weight

▸ **Weight**(`UIndex`, `VIndex`): `number`

获取指定U和V索引的权重值。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `UIndex` | `number` | U方向索引。 |
| `VIndex` | `number` | V方向索引。 |

#### Returns

`number`

返回权重值。

___

### Weights

▸ **Weights**(): `number`[][]

获取所有权重数组。

#### Returns

`number`[][]

返回权重数组。

___

### DownCast

▸ `Static` **DownCast**(`theObject`): [`Mx3dGeomBSplineSurface`](Mx3dGeomBSplineSurface.md)

父类对象转 Mx3dGeomBSplineSurface 类对象

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theObject` | [`Mx3dGeomObject`](Mx3dGeomObject.md) | 父类对象 |

#### Returns

[`Mx3dGeomBSplineSurface`](Mx3dGeomBSplineSurface.md)

Mx3dGeomBSplineSurface 类对象
