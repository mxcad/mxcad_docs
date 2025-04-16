[mxcad_3d API 文档](../README.md) / Mx3dGeomBezierSurface

# Class: Mx3dGeomBezierSurface

表示一个Bezier曲面，继承自Mx3dGeomBoundedSurface。
提供多种操作和查询方法来处理Bezier曲面。

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

构造函数用于创建一个Bezier曲面。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `SurfacePoles` | [`Mx3dGePoint`](Mx3dGePoint.md)[][] | 控制点数组，二维数组形式。 |
| `PoleWeights?` | `number`[][] | 控制点权重数组（可选）。 |

#### Overrides

Mx3dGeomBoundedSurface.constructor

## Methods

### Bounds

▸ **Bounds**(`U1U2V1V2`): `void`

获取曲面的边界范围。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `U1U2V1V2` | [dU1: number, dU2: number, dV1: number, dV2: number] | 范围数组。 |

#### Returns

`void`

___

### Continuity

▸ **Continuity**(): [`MxGAShapeEnum`](../enums/MdGe.MxGAShapeEnum.md)

获取曲面的连续性。

#### Returns

[`MxGAShapeEnum`](../enums/MdGe.MxGAShapeEnum.md)

返回连续性枚举值。

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

计算曲面在指定点的零阶导数。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `U` | `number` | 参数U值。 |
| `V` | `number` | 参数V值。 |
| `P` | [`Mx3dGePoint`](Mx3dGePoint.md) | 输出点。 |

#### Returns

`void`

___

### D1

▸ **D1**(`U`, `V`, `P`, `D1U`, `D1V`): `void`

计算曲面在指定点的一级导数。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `U` | `number` | 参数U值。 |
| `V` | `number` | 参数V值。 |
| `P` | [`Mx3dGePoint`](Mx3dGePoint.md) | 输出点。 |
| `D1U` | [`Mx3dGeVec`](Mx3dGeVec.md) | 输出U方向的一阶导数向量。 |
| `D1V` | [`Mx3dGeVec`](Mx3dGeVec.md) | 输出V方向的一阶导数向量。 |

#### Returns

`void`

___

### D2

▸ **D2**(`U`, `V`, `P`, `D1U`, `D1V`, `D2U`, `D2V`, `D2UV`): `void`

计算曲面在指定点的二阶导数。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `U` | `number` | 参数U值。 |
| `V` | `number` | 参数V值。 |
| `P` | [`Mx3dGePoint`](Mx3dGePoint.md) | 输出点。 |
| `D1U` | [`Mx3dGeVec`](Mx3dGeVec.md) | 输出U方向的一阶导数向量。 |
| `D1V` | [`Mx3dGeVec`](Mx3dGeVec.md) | 输出V方向的一阶导数向量。 |
| `D2U` | [`Mx3dGeVec`](Mx3dGeVec.md) | 输出U方向的二阶导数向量。 |
| `D2V` | [`Mx3dGeVec`](Mx3dGeVec.md) | 输出V方向的二阶导数向量。 |
| `D2UV` | [`Mx3dGeVec`](Mx3dGeVec.md) | 输出UV方向的二阶导数向量。 |

#### Returns

`void`

___

### D3

▸ **D3**(`U`, `V`, `P`, `D1U`, `D1V`, `D2U`, `D2V`, `D2UV`, `D3U`, `D3V`, `D3UUV`, `D3UVV`): `void`

计算曲面在指定点的三阶导数。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `U` | `number` | 参数U值。 |
| `V` | `number` | 参数V值。 |
| `P` | [`Mx3dGePoint`](Mx3dGePoint.md) | 输出点。 |
| `D1U` | [`Mx3dGeVec`](Mx3dGeVec.md) | 输出U方向的一阶导数向量。 |
| `D1V` | [`Mx3dGeVec`](Mx3dGeVec.md) | 输出V方向的一阶导数向量。 |
| `D2U` | [`Mx3dGeVec`](Mx3dGeVec.md) | 输出U方向的二阶导数向量。 |
| `D2V` | [`Mx3dGeVec`](Mx3dGeVec.md) | 输出V方向的二阶导数向量。 |
| `D2UV` | [`Mx3dGeVec`](Mx3dGeVec.md) | 输出UV方向的二阶导数向量。 |
| `D3U` | [`Mx3dGeVec`](Mx3dGeVec.md) | 输出U方向的三阶导数向量。 |
| `D3V` | [`Mx3dGeVec`](Mx3dGeVec.md) | 输出V方向的三阶导数向量。 |
| `D3UUV` | [`Mx3dGeVec`](Mx3dGeVec.md) | 输出UU方向的三阶导数向量。 |
| `D3UVV` | [`Mx3dGeVec`](Mx3dGeVec.md) | 输出UV方向的三阶导数向量。 |

#### Returns

`void`

___

### DN

▸ **DN**(`U`, `V`, `Nu`, `Nv`): [`Mx3dGeVec`](Mx3dGeVec.md)

计算曲面在指定点的N阶导数。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `U` | `number` | 参数U值。 |
| `V` | `number` | 参数V值。 |
| `Nu` | `number` | U方向阶数。 |
| `Nv` | `number` | V方向阶数。 |

#### Returns

[`Mx3dGeVec`](Mx3dGeVec.md)

返回导数向量。

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

返回对象的动态类型字符串。

#### Returns

`string`

动态类型字符串。

#### Inherited from

[Mx3dGeomBoundedSurface](Mx3dGeomBoundedSurface.md).[DynamicType](Mx3dGeomBoundedSurface.md#dynamictype)

___

### ExchangeUV

▸ **ExchangeUV**(): `void`

交换U和V方向的顺序。

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

### Increase

▸ **Increase**(`UDeg`, `VDeg`): `void`

增加曲面的阶数。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `UDeg` | `number` | U方向的增加阶数。 |
| `VDeg` | `number` | V方向的增加阶数。 |

#### Returns

`void`

___

### InsertPoleColAfter

▸ **InsertPoleColAfter**(`VIndex`, `CPoles`, `CPoleWeights?`): `void`

在指定列后插入一个新的控制点列。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `VIndex` | `number` | 列的索引。 |
| `CPoles` | [`Mx3dGePoint`](Mx3dGePoint.md)[] | 要插入的控制点数组。 |
| `CPoleWeights?` | `number`[] | 控制点权重数组（可选）。 |

#### Returns

`void`

___

### InsertPoleColBefore

▸ **InsertPoleColBefore**(`VIndex`, `CPoles`, `CPoleWeights?`): `void`

在指定列前插入一个新的控制点列。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `VIndex` | `number` | 列的索引。 |
| `CPoles` | [`Mx3dGePoint`](Mx3dGePoint.md)[] | 要插入的控制点数组。 |
| `CPoleWeights?` | `number`[] | 控制点权重数组（可选）。 |

#### Returns

`void`

___

### InsertPoleRowAfter

▸ **InsertPoleRowAfter**(`UIndex`, `CPoles`, `CPoleWeights?`): `void`

在指定行后插入一个新的控制点行。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `UIndex` | `number` | 行的索引。 |
| `CPoles` | [`Mx3dGePoint`](Mx3dGePoint.md)[] | 要插入的控制点数组。 |
| `CPoleWeights?` | `number`[] | 控制点权重数组（可选）。 |

#### Returns

`void`

___

### InsertPoleRowBefore

▸ **InsertPoleRowBefore**(`UIndex`, `CPoles`, `CPoleWeights?`): `void`

在指定行前插入一个新的控制点行。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `UIndex` | `number` | 行的索引。 |
| `CPoles` | [`Mx3dGePoint`](Mx3dGePoint.md)[] | 要插入的控制点数组。 |
| `CPoleWeights?` | `number`[] | 控制点权重数组（可选）。 |

#### Returns

`void`

___

### IsCNu

▸ **IsCNu**(`N`): `boolean`

判断U方向上的连续阶数。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `N` | `number` | 阶数。 |

#### Returns

`boolean`

返回是否连续的布尔值。

___

### IsCNv

▸ **IsCNv**(`N`): `boolean`

判断V方向上的连续阶数。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `N` | `number` | 阶数。 |

#### Returns

`boolean`

返回是否连续的布尔值。

___

### IsUClosed

▸ **IsUClosed**(): `boolean`

判断U方向是否闭合。

#### Returns

`boolean`

返回是否闭合的布尔值。

___

### IsUPeriodic

▸ **IsUPeriodic**(): `boolean`

判断U方向是否周期性。

#### Returns

`boolean`

返回是否周期性的布尔值。

___

### IsURational

▸ **IsURational**(): `boolean`

判断U方向是否为有理曲面。

#### Returns

`boolean`

返回是否有理曲面的布尔值。

___

### IsVClosed

▸ **IsVClosed**(): `boolean`

判断V方向是否闭合。

#### Returns

`boolean`

返回是否闭合的布尔值。

___

### IsVPeriodic

▸ **IsVPeriodic**(): `boolean`

判断V方向是否周期性。

#### Returns

`boolean`

返回是否周期性的布尔值。

___

### IsVRational

▸ **IsVRational**(): `boolean`

判断V方向是否为有理曲面。

#### Returns

`boolean`

返回是否有理曲面的布尔值。

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

▸ **MirroredByAxis**(`A1`): [`Mx3dGeomBezierSurface`](Mx3dGeomBezierSurface.md)

返回通过轴镜像变换后的新几何对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `A1` | [`Mx3dGeAxis`](Mx3dGeAxis.md) | 轴对象。 |

#### Returns

[`Mx3dGeomBezierSurface`](Mx3dGeomBezierSurface.md)

新的几何对象。

#### Inherited from

[Mx3dGeomBoundedSurface](Mx3dGeomBoundedSurface.md).[MirroredByAxis](Mx3dGeomBoundedSurface.md#mirroredbyaxis)

___

### MirroredByCSYSR

▸ **MirroredByCSYSR**(`A2`): [`Mx3dGeomBezierSurface`](Mx3dGeomBezierSurface.md)

返回通过右手坐标系镜像变换后的新几何对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `A2` | [`Mx3dGeCSYSR`](Mx3dGeCSYSR.md) | 右手坐标系对象。 |

#### Returns

[`Mx3dGeomBezierSurface`](Mx3dGeomBezierSurface.md)

新的几何对象。

#### Inherited from

[Mx3dGeomBoundedSurface](Mx3dGeomBoundedSurface.md).[MirroredByCSYSR](Mx3dGeomBoundedSurface.md#mirroredbycsysr)

___

### MirroredByPoint

▸ **MirroredByPoint**(`P`): [`Mx3dGeomBezierSurface`](Mx3dGeomBezierSurface.md)

返回通过点镜像变换后的新几何对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `P` | [`Mx3dGePoint`](Mx3dGePoint.md) | 点对象。 |

#### Returns

[`Mx3dGeomBezierSurface`](Mx3dGeomBezierSurface.md)

新的几何对象。

#### Inherited from

[Mx3dGeomBoundedSurface](Mx3dGeomBoundedSurface.md).[MirroredByPoint](Mx3dGeomBoundedSurface.md#mirroredbypoint)

___

### NbUPoles

▸ **NbUPoles**(): `number`

获取U方向上的控制点数量。

#### Returns

`number`

返回U方向控制点数量。

___

### NbVPoles

▸ **NbVPoles**(): `number`

获取V方向上的控制点数量。

#### Returns

`number`

返回V方向控制点数量。

___

### Pole

▸ **Pole**(`UIndex`, `VIndex`): [`Mx3dGePoint`](Mx3dGePoint.md)

获取指定控制点位置。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `UIndex` | `number` | U方向的索引。 |
| `VIndex` | `number` | V方向的索引。 |

#### Returns

[`Mx3dGePoint`](Mx3dGePoint.md)

返回控制点位置。

___

### Poles

▸ **Poles**(): [`Mx3dGePoint`](Mx3dGePoint.md)[][]

获取所有控制点数组。

#### Returns

[`Mx3dGePoint`](Mx3dGePoint.md)[][]

返回控制点二维数组。

___

### RemovePoleCol

▸ **RemovePoleCol**(`VIndex`): `void`

移除指定列的控制点。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `VIndex` | `number` | 列的索引。 |

#### Returns

`void`

___

### RemovePoleRow

▸ **RemovePoleRow**(`UIndex`): `void`

移除指定行的控制点。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `UIndex` | `number` | 行的索引。 |

#### Returns

`void`

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

▸ **Rotated**(`A1`, `Ang`): [`Mx3dGeomBezierSurface`](Mx3dGeomBezierSurface.md)

返回旋转后的新几何对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `A1` | [`Mx3dGeAxis`](Mx3dGeAxis.md) | 轴对象。 |
| `Ang` | `number` | 旋转角度。 |

#### Returns

[`Mx3dGeomBezierSurface`](Mx3dGeomBezierSurface.md)

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

▸ **Scaled**(`P`, `S`): [`Mx3dGeomBezierSurface`](Mx3dGeomBezierSurface.md)

返回缩放后的新几何对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `P` | [`Mx3dGePoint`](Mx3dGePoint.md) | 点对象。 |
| `S` | `number` | 缩放比例。 |

#### Returns

[`Mx3dGeomBezierSurface`](Mx3dGeomBezierSurface.md)

新的几何对象。

#### Inherited from

[Mx3dGeomBoundedSurface](Mx3dGeomBoundedSurface.md).[Scaled](Mx3dGeomBoundedSurface.md#scaled)

___

### Segment

▸ **Segment**(`U1`, `U2`, `V1`, `V2`): `void`

定义曲面的一个部分，指定U和V的范围。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `U1` | `number` | 起始U值。 |
| `U2` | `number` | 结束U值。 |
| `V1` | `number` | 起始V值。 |
| `V2` | `number` | 结束V值。 |

#### Returns

`void`

___

### SetPole

▸ **SetPole**(`UIndex`, `VIndex`, `P`, `Weight?`): `void`

设置指定位置的控制点和权重。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `UIndex` | `number` | U方向的索引。 |
| `VIndex` | `number` | V方向的索引。 |
| `P` | [`Mx3dGePoint`](Mx3dGePoint.md) | 控制点位置。 |
| `Weight?` | `number` | 控制点权重（可选）。 |

#### Returns

`void`

___

### SetPoleCol

▸ **SetPoleCol**(`VIndex`, `CPoles`, `CPoleWeights?`): `void`

设置指定列的控制点和权重。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `VIndex` | `number` | 列的索引。 |
| `CPoles` | [`Mx3dGePoint`](Mx3dGePoint.md)[] | 控制点数组。 |
| `CPoleWeights?` | `number`[] | 控制点权重数组（可选）。 |

#### Returns

`void`

___

### SetPoleRow

▸ **SetPoleRow**(`UIndex`, `CPoles`, `CPoleWeights?`): `void`

设置指定行的控制点和权重。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `UIndex` | `number` | 行的索引。 |
| `CPoles` | [`Mx3dGePoint`](Mx3dGePoint.md)[] | 控制点数组。 |
| `CPoleWeights?` | `number`[] | 控制点权重数组（可选）。 |

#### Returns

`void`

___

### SetWeight

▸ **SetWeight**(`UIndex`, `VIndex`, `Weight`): `void`

设置指定控制点的权重。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `UIndex` | `number` | U方向的索引。 |
| `VIndex` | `number` | V方向的索引。 |
| `Weight` | `number` | 权重值。 |

#### Returns

`void`

___

### SetWeightCol

▸ **SetWeightCol**(`VIndex`, `CPoleWeights`): `void`

设置指定列的控制点权重。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `VIndex` | `number` | 列的索引。 |
| `CPoleWeights` | `number`[] | 控制点权重数组。 |

#### Returns

`void`

___

### SetWeightRow

▸ **SetWeightRow**(`UIndex`, `CPoleWeights`): `void`

设置指定行的控制点权重。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `UIndex` | `number` | 行的索引。 |
| `CPoleWeights` | `number`[] | 控制点权重数组。 |

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

▸ **Transformed**(`T`): [`Mx3dGeomBezierSurface`](Mx3dGeomBezierSurface.md)

返回变换后的新几何对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `T` | [`Mx3dGeTrsf`](Mx3dGeTrsf.md) | 变换对象。 |

#### Returns

[`Mx3dGeomBezierSurface`](Mx3dGeomBezierSurface.md)

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

▸ **TranslatedBy2Points**(`P1`, `P2`): [`Mx3dGeomBezierSurface`](Mx3dGeomBezierSurface.md)

返回通过两个点平移后的新几何对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `P1` | [`Mx3dGePoint`](Mx3dGePoint.md) | 起始点对象。 |
| `P2` | [`Mx3dGePoint`](Mx3dGePoint.md) | 终止点对象。 |

#### Returns

[`Mx3dGeomBezierSurface`](Mx3dGeomBezierSurface.md)

新的几何对象。

#### Inherited from

[Mx3dGeomBoundedSurface](Mx3dGeomBoundedSurface.md).[TranslatedBy2Points](Mx3dGeomBoundedSurface.md#translatedby2points)

___

### TranslatedByVec

▸ **TranslatedByVec**(`V`): [`Mx3dGeomBezierSurface`](Mx3dGeomBezierSurface.md)

返回通过向量平移后的新几何对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `V` | [`Mx3dGeVec`](Mx3dGeVec.md) | 向量对象。 |

#### Returns

[`Mx3dGeomBezierSurface`](Mx3dGeomBezierSurface.md)

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

反转U方向的参数。

#### Returns

`void`

___

### UReversed

▸ **UReversed**(): [`Mx3dGeomBezierSurface`](Mx3dGeomBezierSurface.md)

反转 U 方向的参数化。

#### Returns

[`Mx3dGeomBezierSurface`](Mx3dGeomBezierSurface.md)

返回当前对象以实现链式调用。

#### Inherited from

[Mx3dGeomBoundedSurface](Mx3dGeomBoundedSurface.md).[UReversed](Mx3dGeomBoundedSurface.md#ureversed)

___

### UReversedParameter

▸ **UReversedParameter**(`U`): `number`

计算反向U参数。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `U` | `number` | 参数U值。 |

#### Returns

`number`

返回反向参数。

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

反转V方向的参数。

#### Returns

`void`

___

### VReversed

▸ **VReversed**(): [`Mx3dGeomBezierSurface`](Mx3dGeomBezierSurface.md)

反转 V 方向的参数化。

#### Returns

[`Mx3dGeomBezierSurface`](Mx3dGeomBezierSurface.md)

返回当前对象以实现链式调用。

#### Inherited from

[Mx3dGeomBoundedSurface](Mx3dGeomBoundedSurface.md).[VReversed](Mx3dGeomBoundedSurface.md#vreversed)

___

### VReversedParameter

▸ **VReversedParameter**(`V`): `number`

计算反向V参数。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `V` | `number` | 参数V值。 |

#### Returns

`number`

返回反向参数。

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

获取指定控制点的权重。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `UIndex` | `number` | U方向的索引。 |
| `VIndex` | `number` | V方向的索引。 |

#### Returns

`number`

返回权重值。

___

### Weights

▸ **Weights**(): `number`[][]

获取所有控制点权重数组。

#### Returns

`number`[][]

返回控制点权重二维数组。

___

### DownCast

▸ `Static` **DownCast**(`theObject`): [`Mx3dGeomBezierSurface`](Mx3dGeomBezierSurface.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theObject` | [`Mx3dGeomObject`](Mx3dGeomObject.md) |

#### Returns

[`Mx3dGeomBezierSurface`](Mx3dGeomBezierSurface.md)
