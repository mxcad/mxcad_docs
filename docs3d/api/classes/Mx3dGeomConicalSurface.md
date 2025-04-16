[mxcad_3d API 文档](../README.md) / Mx3dGeomConicalSurface

# Class: Mx3dGeomConicalSurface

表示三维空间中的圆锥曲面。
圆锥曲面由其顶点的半角、参考半径和坐标系定义。

## Hierarchy

- [`Mx3dGeomElementarySurface`](Mx3dGeomElementarySurface.md)

  ↳ **`Mx3dGeomConicalSurface`**

## Table of contents

### Constructors

- [constructor](Mx3dGeomConicalSurface.md#constructor)

### Methods

- [Apex](Mx3dGeomConicalSurface.md#apex)
- [Axis](Mx3dGeomConicalSurface.md#axis)
- [Bounds](Mx3dGeomConicalSurface.md#bounds)
- [Coefficients](Mx3dGeomConicalSurface.md#coefficients)
- [Continuity](Mx3dGeomConicalSurface.md#continuity)
- [Copy](Mx3dGeomConicalSurface.md#copy)
- [D0](Mx3dGeomConicalSurface.md#d0)
- [D1](Mx3dGeomConicalSurface.md#d1)
- [D2](Mx3dGeomConicalSurface.md#d2)
- [D3](Mx3dGeomConicalSurface.md#d3)
- [DN](Mx3dGeomConicalSurface.md#dn)
- [DynamicType](Mx3dGeomConicalSurface.md#dynamictype)
- [Face](Mx3dGeomConicalSurface.md#face)
- [IsCNu](Mx3dGeomConicalSurface.md#iscnu)
- [IsCNv](Mx3dGeomConicalSurface.md#iscnv)
- [IsUClosed](Mx3dGeomConicalSurface.md#isuclosed)
- [IsUPeriodic](Mx3dGeomConicalSurface.md#isuperiodic)
- [IsVClosed](Mx3dGeomConicalSurface.md#isvclosed)
- [IsVPeriodic](Mx3dGeomConicalSurface.md#isvperiodic)
- [Location](Mx3dGeomConicalSurface.md#location)
- [MirrorByAxis](Mx3dGeomConicalSurface.md#mirrorbyaxis)
- [MirrorByCSYSR](Mx3dGeomConicalSurface.md#mirrorbycsysr)
- [MirrorByPoint](Mx3dGeomConicalSurface.md#mirrorbypoint)
- [MirroredByAxis](Mx3dGeomConicalSurface.md#mirroredbyaxis)
- [MirroredByCSYSR](Mx3dGeomConicalSurface.md#mirroredbycsysr)
- [MirroredByPoint](Mx3dGeomConicalSurface.md#mirroredbypoint)
- [Position](Mx3dGeomConicalSurface.md#position)
- [RefRadius](Mx3dGeomConicalSurface.md#refradius)
- [Rotate](Mx3dGeomConicalSurface.md#rotate)
- [Rotated](Mx3dGeomConicalSurface.md#rotated)
- [Scale](Mx3dGeomConicalSurface.md#scale)
- [Scaled](Mx3dGeomConicalSurface.md#scaled)
- [SemiAngle](Mx3dGeomConicalSurface.md#semiangle)
- [SetAxis](Mx3dGeomConicalSurface.md#setaxis)
- [SetLocation](Mx3dGeomConicalSurface.md#setlocation)
- [SetPosition](Mx3dGeomConicalSurface.md#setposition)
- [SetRadius](Mx3dGeomConicalSurface.md#setradius)
- [SetSemiAngle](Mx3dGeomConicalSurface.md#setsemiangle)
- [Transform](Mx3dGeomConicalSurface.md#transform)
- [TransformParameters](Mx3dGeomConicalSurface.md#transformparameters)
- [Transformed](Mx3dGeomConicalSurface.md#transformed)
- [TranslateBy2Points](Mx3dGeomConicalSurface.md#translateby2points)
- [TranslateByVec](Mx3dGeomConicalSurface.md#translatebyvec)
- [TranslatedBy2Points](Mx3dGeomConicalSurface.md#translatedby2points)
- [TranslatedByVec](Mx3dGeomConicalSurface.md#translatedbyvec)
- [UPeriod](Mx3dGeomConicalSurface.md#uperiod)
- [UReverse](Mx3dGeomConicalSurface.md#ureverse)
- [UReversed](Mx3dGeomConicalSurface.md#ureversed)
- [UReversedParameter](Mx3dGeomConicalSurface.md#ureversedparameter)
- [VPeriod](Mx3dGeomConicalSurface.md#vperiod)
- [VReverse](Mx3dGeomConicalSurface.md#vreverse)
- [VReversed](Mx3dGeomConicalSurface.md#vreversed)
- [VReversedParameter](Mx3dGeomConicalSurface.md#vreversedparameter)
- [Value](Mx3dGeomConicalSurface.md#value)
- [DownCast](Mx3dGeomConicalSurface.md#downcast)

## Constructors

### constructor

• **new Mx3dGeomConicalSurface**(`A3`, `Ang`, `Radius`)

构造一个具有指定坐标系、半角和半径的圆锥曲面。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `A3` | [`Mx3dGeCSYSR`](Mx3dGeCSYSR.md) | 圆锥曲面的局部坐标系。 |
| `Ang` | `number` | 圆锥曲面的半角。其绝对值应在 [0, PI/2] 范围内。 |
| `Radius` | `number` | 圆锥曲面参考平面上的圆的半径。 |

#### Overrides

Mx3dGeomElementarySurface.constructor

## Methods

### Apex

▸ **Apex**(): [`Mx3dGePoint`](Mx3dGePoint.md)

计算并返回圆锥的顶点。顶点在圆锥的旋转轴的负侧（半角为正）或正侧（半角为负）。

#### Returns

[`Mx3dGePoint`](Mx3dGePoint.md)

圆锥的顶点。

___

### Axis

▸ **Axis**(): [`Mx3dGeAxis`](Mx3dGeAxis.md)

获取表面的主轴（Z轴）。

#### Returns

[`Mx3dGeAxis`](Mx3dGeAxis.md)

表面的主轴定义。

#### Inherited from

[Mx3dGeomElementarySurface](Mx3dGeomElementarySurface.md).[Axis](Mx3dGeomElementarySurface.md#axis)

___

### Bounds

▸ **Bounds**(`U1U2V1V2`): `void`

返回圆锥曲面的参数范围。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `U1U2V1V2` | [dU1: number, dU2: number, dV1: number, dV2: number] | 参数范围数组 [dU1, dU2, dV1, dV2]。 |

#### Returns

`void`

___

### Coefficients

▸ **Coefficients**(`A1A2A3B1B2B3C1C2C3D`): `void`

返回圆锥曲面的隐式方程的系数。
方程形式：A1.X^2 + A2.Y^2 + A3.Z^2 + 2*(B1.X.Y + B2.X.Z + B3.Y.Z) + 2*(C1.X + C2.Y + C3.Z) + D = 0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `A1A2A3B1B2B3C1C2C3D` | [A1: number, A2: number, A3: number, B1: number, B2: number, B3: number, C1: number, C2: number, C3: number, D: number] | 系数数组 [A1, A2, A3, B1, B2, B3, C1, C2, C3, D]。 |

#### Returns

`void`

___

### Continuity

▸ **Continuity**(): [`MxGAShapeEnum`](../enums/MdGe.MxGAShapeEnum.md)

返回表面在全局上的连续性（MxGAShapeEnum）。

#### Returns

[`MxGAShapeEnum`](../enums/MdGe.MxGAShapeEnum.md)

表面在全局上的连续性。

#### Inherited from

[Mx3dGeomElementarySurface](Mx3dGeomElementarySurface.md).[Continuity](Mx3dGeomElementarySurface.md#continuity)

___

### Copy

▸ **Copy**(): [`Mx3dGeomObject`](Mx3dGeomObject.md)

创建并返回一个此圆锥曲面的副本。

#### Returns

[`Mx3dGeomObject`](Mx3dGeomObject.md)

圆锥曲面的副本。

___

### D0

▸ **D0**(`U`, `V`, `P`): `void`

计算并返回曲面上给定参数 (U, V) 处的点。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `U` | `number` | U参数。 |
| `V` | `number` | V参数。 |
| `P` | [`Mx3dGePoint`](Mx3dGePoint.md) | 结果点。 |

#### Returns

`void`

___

### D1

▸ **D1**(`U`, `V`, `P`, `D1U`, `D1V`): `void`

计算并返回曲面上给定参数 (U, V) 处的点及其在U和V方向的第一导数。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `U` | `number` | U参数。 |
| `V` | `number` | V参数。 |
| `P` | [`Mx3dGePoint`](Mx3dGePoint.md) | 结果点。 |
| `D1U` | [`Mx3dGeVec`](Mx3dGeVec.md) | U方向的第一导数。 |
| `D1V` | [`Mx3dGeVec`](Mx3dGeVec.md) | V方向的第一导数。 |

#### Returns

`void`

___

### D2

▸ **D2**(`U`, `V`, `P`, `D1U`, `D1V`, `D2U`, `D2V`, `D2UV`): `void`

计算并返回曲面上给定参数 (U, V) 处的点及其在U和V方向的第一和第二导数。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `U` | `number` | U参数。 |
| `V` | `number` | V参数。 |
| `P` | [`Mx3dGePoint`](Mx3dGePoint.md) | 结果点。 |
| `D1U` | [`Mx3dGeVec`](Mx3dGeVec.md) | U方向的第一导数。 |
| `D1V` | [`Mx3dGeVec`](Mx3dGeVec.md) | V方向的第一导数。 |
| `D2U` | [`Mx3dGeVec`](Mx3dGeVec.md) | U方向的第二导数。 |
| `D2V` | [`Mx3dGeVec`](Mx3dGeVec.md) | V方向的第二导数。 |
| `D2UV` | [`Mx3dGeVec`](Mx3dGeVec.md) | UV方向的混合导数。 |

#### Returns

`void`

___

### D3

▸ **D3**(`U`, `V`, `P`, `D1U`, `D1V`, `D2U`, `D2V`, `D2UV`, `D3U`, `D3V`, `D3UUV`, `D3UVV`): `void`

计算并返回曲面上给定参数 (U, V) 处的点及其在U和V方向的第一、第二和第三导数。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `U` | `number` | U参数。 |
| `V` | `number` | V参数。 |
| `P` | [`Mx3dGePoint`](Mx3dGePoint.md) | 结果点。 |
| `D1U` | [`Mx3dGeVec`](Mx3dGeVec.md) | U方向的第一导数。 |
| `D1V` | [`Mx3dGeVec`](Mx3dGeVec.md) | V方向的第一导数。 |
| `D2U` | [`Mx3dGeVec`](Mx3dGeVec.md) | U方向的第二导数。 |
| `D2V` | [`Mx3dGeVec`](Mx3dGeVec.md) | V方向的第二导数。 |
| `D2UV` | [`Mx3dGeVec`](Mx3dGeVec.md) | UV方向的混合导数。 |
| `D3U` | [`Mx3dGeVec`](Mx3dGeVec.md) | U方向的第三导数。 |
| `D3V` | [`Mx3dGeVec`](Mx3dGeVec.md) | V方向的第三导数。 |
| `D3UUV` | [`Mx3dGeVec`](Mx3dGeVec.md) | UU方向的混合导数。 |
| `D3UVV` | [`Mx3dGeVec`](Mx3dGeVec.md) | UV方向的混合导数。 |

#### Returns

`void`

___

### DN

▸ **DN**(`U`, `V`, `Nu`, `Nv`): [`Mx3dGeVec`](Mx3dGeVec.md)

计算并返回给定参数 (U, V) 处的指定阶数的导数。

**`Throws`**

如果Nu + Nv小于1，或Nu或Nv为负，则抛出异常。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `U` | `number` | U参数。 |
| `V` | `number` | V参数。 |
| `Nu` | `number` | U方向的导数阶数。 |
| `Nv` | `number` | V方向的导数阶数。 |

#### Returns

[`Mx3dGeVec`](Mx3dGeVec.md)

指定阶数的导数向量。

___

### DynamicType

▸ **DynamicType**(): `string`

返回对象的动态类型。

#### Returns

`string`

动态类型的字符串表示。

#### Overrides

[Mx3dGeomElementarySurface](Mx3dGeomElementarySurface.md).[DynamicType](Mx3dGeomElementarySurface.md#dynamictype)

___

### Face

▸ **Face**(`TolDegen`): [`Mx3dShapeFace`](Mx3dShapeFace.md)

根据圆锥曲面创建一个面。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `TolDegen` | `number` | 简化面容差。 |

#### Returns

[`Mx3dShapeFace`](Mx3dShapeFace.md)

创建的面对象。

▸ **Face**(`W`, `Inside`): [`Mx3dShapeFace`](Mx3dShapeFace.md)

根据给定的线和方向创建一个面。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `W` | [`Mx3dShapeWire`](Mx3dShapeWire.md) | 给定的线。 |
| `Inside` | `boolean` | 内部方向标志。 |

#### Returns

[`Mx3dShapeFace`](Mx3dShapeFace.md)

创建的面对象。

▸ **Face**(`UMin`, `UMax`, `VMin`, `VMax`, `TolDegen`): [`Mx3dShapeFace`](Mx3dShapeFace.md)

根据指定的参数范围创建一个面。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `UMin` | `number` | U参数的最小值。 |
| `UMax` | `number` | U参数的最大值。 |
| `VMin` | `number` | V参数的最小值。 |
| `VMax` | `number` | V参数的最大值。 |
| `TolDegen` | `number` | 简化面容差。 |

#### Returns

[`Mx3dShapeFace`](Mx3dShapeFace.md)

创建的面对象。

___

### IsCNu

▸ **IsCNu**(`N`): `boolean`

检查表面在 U 参数方向上的连续性是否达到指定的等级。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `N` | `number` | 要检查的连续性等级。 |

#### Returns

`boolean`

如果连续性等级满足条件，则返回 true；否则返回 false。

#### Inherited from

[Mx3dGeomElementarySurface](Mx3dGeomElementarySurface.md).[IsCNu](Mx3dGeomElementarySurface.md#iscnu)

___

### IsCNv

▸ **IsCNv**(`N`): `boolean`

检查表面在 V 参数方向上的连续性是否达到指定的等级。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `N` | `number` | 要检查的连续性等级。 |

#### Returns

`boolean`

如果连续性等级满足条件，则返回 true；否则返回 false。

#### Inherited from

[Mx3dGeomElementarySurface](Mx3dGeomElementarySurface.md).[IsCNv](Mx3dGeomElementarySurface.md#iscnv)

___

### IsUClosed

▸ **IsUClosed**(): `boolean`

检查U参数是否闭合。

#### Returns

`boolean`

总是返回 true。

___

### IsUPeriodic

▸ **IsUPeriodic**(): `boolean`

检查U参数是否周期性。

#### Returns

`boolean`

总是返回 true。

___

### IsVClosed

▸ **IsVClosed**(): `boolean`

检查V参数是否闭合。

#### Returns

`boolean`

总是返回 false。

___

### IsVPeriodic

▸ **IsVPeriodic**(): `boolean`

检查V参数是否周期性。

#### Returns

`boolean`

总是返回 false。

___

### Location

▸ **Location**(): [`Mx3dGePoint`](Mx3dGePoint.md)

获取表面局部坐标系的位置点。

#### Returns

[`Mx3dGePoint`](Mx3dGePoint.md)

表面位置点。

#### Inherited from

[Mx3dGeomElementarySurface](Mx3dGeomElementarySurface.md).[Location](Mx3dGeomElementarySurface.md#location)

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

[Mx3dGeomElementarySurface](Mx3dGeomElementarySurface.md).[MirrorByAxis](Mx3dGeomElementarySurface.md#mirrorbyaxis)

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

[Mx3dGeomElementarySurface](Mx3dGeomElementarySurface.md).[MirrorByCSYSR](Mx3dGeomElementarySurface.md#mirrorbycsysr)

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

[Mx3dGeomElementarySurface](Mx3dGeomElementarySurface.md).[MirrorByPoint](Mx3dGeomElementarySurface.md#mirrorbypoint)

___

### MirroredByAxis

▸ **MirroredByAxis**(`A1`): [`Mx3dGeomConicalSurface`](Mx3dGeomConicalSurface.md)

返回通过轴镜像变换后的新几何对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `A1` | [`Mx3dGeAxis`](Mx3dGeAxis.md) | 轴对象。 |

#### Returns

[`Mx3dGeomConicalSurface`](Mx3dGeomConicalSurface.md)

新的几何对象。

#### Inherited from

[Mx3dGeomElementarySurface](Mx3dGeomElementarySurface.md).[MirroredByAxis](Mx3dGeomElementarySurface.md#mirroredbyaxis)

___

### MirroredByCSYSR

▸ **MirroredByCSYSR**(`A2`): [`Mx3dGeomConicalSurface`](Mx3dGeomConicalSurface.md)

返回通过右手坐标系镜像变换后的新几何对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `A2` | [`Mx3dGeCSYSR`](Mx3dGeCSYSR.md) | 右手坐标系对象。 |

#### Returns

[`Mx3dGeomConicalSurface`](Mx3dGeomConicalSurface.md)

新的几何对象。

#### Inherited from

[Mx3dGeomElementarySurface](Mx3dGeomElementarySurface.md).[MirroredByCSYSR](Mx3dGeomElementarySurface.md#mirroredbycsysr)

___

### MirroredByPoint

▸ **MirroredByPoint**(`P`): [`Mx3dGeomConicalSurface`](Mx3dGeomConicalSurface.md)

返回通过点镜像变换后的新几何对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `P` | [`Mx3dGePoint`](Mx3dGePoint.md) | 点对象。 |

#### Returns

[`Mx3dGeomConicalSurface`](Mx3dGeomConicalSurface.md)

新的几何对象。

#### Inherited from

[Mx3dGeomElementarySurface](Mx3dGeomElementarySurface.md).[MirroredByPoint](Mx3dGeomElementarySurface.md#mirroredbypoint)

___

### Position

▸ **Position**(): [`Mx3dGeCSYSR`](Mx3dGeCSYSR.md)

获取表面的局部坐标系。

#### Returns

[`Mx3dGeCSYSR`](Mx3dGeCSYSR.md)

表面的局部坐标系。

#### Inherited from

[Mx3dGeomElementarySurface](Mx3dGeomElementarySurface.md).[Position](Mx3dGeomElementarySurface.md#position)

___

### RefRadius

▸ **RefRadius**(): `number`

返回圆锥曲面的参考半径。

#### Returns

`number`

参考半径。

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

[Mx3dGeomElementarySurface](Mx3dGeomElementarySurface.md).[Rotate](Mx3dGeomElementarySurface.md#rotate)

___

### Rotated

▸ **Rotated**(`A1`, `Ang`): [`Mx3dGeomConicalSurface`](Mx3dGeomConicalSurface.md)

返回旋转后的新几何对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `A1` | [`Mx3dGeAxis`](Mx3dGeAxis.md) | 轴对象。 |
| `Ang` | `number` | 旋转角度。 |

#### Returns

[`Mx3dGeomConicalSurface`](Mx3dGeomConicalSurface.md)

新的几何对象。

#### Inherited from

[Mx3dGeomElementarySurface](Mx3dGeomElementarySurface.md).[Rotated](Mx3dGeomElementarySurface.md#rotated)

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

[Mx3dGeomElementarySurface](Mx3dGeomElementarySurface.md).[Scale](Mx3dGeomElementarySurface.md#scale)

___

### Scaled

▸ **Scaled**(`P`, `S`): [`Mx3dGeomConicalSurface`](Mx3dGeomConicalSurface.md)

返回缩放后的新几何对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `P` | [`Mx3dGePoint`](Mx3dGePoint.md) | 点对象。 |
| `S` | `number` | 缩放比例。 |

#### Returns

[`Mx3dGeomConicalSurface`](Mx3dGeomConicalSurface.md)

新的几何对象。

#### Inherited from

[Mx3dGeomElementarySurface](Mx3dGeomElementarySurface.md).[Scaled](Mx3dGeomElementarySurface.md#scaled)

___

### SemiAngle

▸ **SemiAngle**(): `number`

返回圆锥顶点的半角。

#### Returns

`number`

圆锥的半角。

___

### SetAxis

▸ **SetAxis**(`theA1`): `void`

设置表面的主轴（Z轴）。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theA1` | [`Mx3dGeAxis`](Mx3dGeAxis.md) | 表面的主轴定义。 |

#### Returns

`void`

#### Inherited from

[Mx3dGeomElementarySurface](Mx3dGeomElementarySurface.md).[SetAxis](Mx3dGeomElementarySurface.md#setaxis)

___

### SetLocation

▸ **SetLocation**(`theLoc`): `void`

设置表面局部坐标系的位置点。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theLoc` | [`Mx3dGePoint`](Mx3dGePoint.md) | 新的位置点。 |

#### Returns

`void`

#### Inherited from

[Mx3dGeomElementarySurface](Mx3dGeomElementarySurface.md).[SetLocation](Mx3dGeomElementarySurface.md#setlocation)

___

### SetPosition

▸ **SetPosition**(`theAx3`): `void`

设置表面的局部坐标系。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theAx3` | [`Mx3dGeCSYSR`](Mx3dGeCSYSR.md) | 新的坐标系，包含位置和方向。 |

#### Returns

`void`

#### Inherited from

[Mx3dGeomElementarySurface](Mx3dGeomElementarySurface.md).[SetPosition](Mx3dGeomElementarySurface.md#setposition)

___

### SetRadius

▸ **SetRadius**(`R`): `void`

设置放置平面中的圆锥曲面的半径。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `R` | `number` | 新的半径。必须为非负值。 |

#### Returns

`void`

___

### SetSemiAngle

▸ **SetSemiAngle**(`Ang`): `void`

设置圆锥曲面的半角。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Ang` | `number` | 新的半角。其绝对值应在 ]0, PI/2[ 范围内。 |

#### Returns

`void`

___

### Transform

▸ **Transform**(`T`): `void`

对圆锥曲面应用变换。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `T` | [`Mx3dGeTrsf`](Mx3dGeTrsf.md) | 变换。 |

#### Returns

`void`

___

### TransformParameters

▸ **TransformParameters**(`UV`, `T`): `void`

变换参数。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `UV` | [dU: number, dV: number] | 参数数组 [dU, dV]。 |
| `T` | [`Mx3dGeTrsf`](Mx3dGeTrsf.md) | 变换。 |

#### Returns

`void`

#### Overrides

[Mx3dGeomElementarySurface](Mx3dGeomElementarySurface.md).[TransformParameters](Mx3dGeomElementarySurface.md#transformparameters)

___

### Transformed

▸ **Transformed**(`T`): [`Mx3dGeomConicalSurface`](Mx3dGeomConicalSurface.md)

返回变换后的新几何对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `T` | [`Mx3dGeTrsf`](Mx3dGeTrsf.md) | 变换对象。 |

#### Returns

[`Mx3dGeomConicalSurface`](Mx3dGeomConicalSurface.md)

新的几何对象。

#### Inherited from

[Mx3dGeomElementarySurface](Mx3dGeomElementarySurface.md).[Transformed](Mx3dGeomElementarySurface.md#transformed)

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

[Mx3dGeomElementarySurface](Mx3dGeomElementarySurface.md).[TranslateBy2Points](Mx3dGeomElementarySurface.md#translateby2points)

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

[Mx3dGeomElementarySurface](Mx3dGeomElementarySurface.md).[TranslateByVec](Mx3dGeomElementarySurface.md#translatebyvec)

___

### TranslatedBy2Points

▸ **TranslatedBy2Points**(`P1`, `P2`): [`Mx3dGeomConicalSurface`](Mx3dGeomConicalSurface.md)

返回通过两个点平移后的新几何对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `P1` | [`Mx3dGePoint`](Mx3dGePoint.md) | 起始点对象。 |
| `P2` | [`Mx3dGePoint`](Mx3dGePoint.md) | 终止点对象。 |

#### Returns

[`Mx3dGeomConicalSurface`](Mx3dGeomConicalSurface.md)

新的几何对象。

#### Inherited from

[Mx3dGeomElementarySurface](Mx3dGeomElementarySurface.md).[TranslatedBy2Points](Mx3dGeomElementarySurface.md#translatedby2points)

___

### TranslatedByVec

▸ **TranslatedByVec**(`V`): [`Mx3dGeomConicalSurface`](Mx3dGeomConicalSurface.md)

返回通过向量平移后的新几何对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `V` | [`Mx3dGeVec`](Mx3dGeVec.md) | 向量对象。 |

#### Returns

[`Mx3dGeomConicalSurface`](Mx3dGeomConicalSurface.md)

新的几何对象。

#### Inherited from

[Mx3dGeomElementarySurface](Mx3dGeomElementarySurface.md).[TranslatedByVec](Mx3dGeomElementarySurface.md#translatedbyvec)

___

### UPeriod

▸ **UPeriod**(): `number`

返回表面在 U 方向的周期。

#### Returns

`number`

表面在 U 方向的周期。

#### Inherited from

[Mx3dGeomElementarySurface](Mx3dGeomElementarySurface.md).[UPeriod](Mx3dGeomElementarySurface.md#uperiod)

___

### UReverse

▸ **UReverse**(): `void`

反转表面在 U 参数方向上的参数化方向。

#### Returns

`void`

#### Inherited from

[Mx3dGeomElementarySurface](Mx3dGeomElementarySurface.md).[UReverse](Mx3dGeomElementarySurface.md#ureverse)

___

### UReversed

▸ **UReversed**(): [`Mx3dGeomConicalSurface`](Mx3dGeomConicalSurface.md)

反转 U 方向的参数化。

#### Returns

[`Mx3dGeomConicalSurface`](Mx3dGeomConicalSurface.md)

返回当前对象以实现链式调用。

#### Inherited from

[Mx3dGeomElementarySurface](Mx3dGeomElementarySurface.md).[UReversed](Mx3dGeomElementarySurface.md#ureversed)

___

### UReversedParameter

▸ **UReversedParameter**(`U`): `number`

返回反转后的U参数。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `U` | `number` | 原始U参数。 |

#### Returns

`number`

反转后的U参数。

___

### VPeriod

▸ **VPeriod**(): `number`

返回表面在 V 方向的周期。

#### Returns

`number`

表面在 V 方向的周期。

#### Inherited from

[Mx3dGeomElementarySurface](Mx3dGeomElementarySurface.md).[VPeriod](Mx3dGeomElementarySurface.md#vperiod)

___

### VReverse

▸ **VReverse**(): `void`

反转V参数方向。

#### Returns

`void`

#### Overrides

[Mx3dGeomElementarySurface](Mx3dGeomElementarySurface.md).[VReverse](Mx3dGeomElementarySurface.md#vreverse)

___

### VReversed

▸ **VReversed**(): [`Mx3dGeomConicalSurface`](Mx3dGeomConicalSurface.md)

反转 V 方向的参数化。

#### Returns

[`Mx3dGeomConicalSurface`](Mx3dGeomConicalSurface.md)

返回当前对象以实现链式调用。

#### Inherited from

[Mx3dGeomElementarySurface](Mx3dGeomElementarySurface.md).[VReversed](Mx3dGeomElementarySurface.md#vreversed)

___

### VReversedParameter

▸ **VReversedParameter**(`V`): `number`

返回反转后的V参数。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `V` | `number` | 原始V参数。 |

#### Returns

`number`

反转后的V参数。

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

[Mx3dGeomElementarySurface](Mx3dGeomElementarySurface.md).[Value](Mx3dGeomElementarySurface.md#value)

___

### DownCast

▸ `Static` **DownCast**(`theObject`): [`Mx3dGeomConicalSurface`](Mx3dGeomConicalSurface.md)

父类对象转 Mx3dGeomConicalSurface 类对象

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theObject` | [`Mx3dGeomObject`](Mx3dGeomObject.md) | 父类对象 |

#### Returns

[`Mx3dGeomConicalSurface`](Mx3dGeomConicalSurface.md)

Mx3dGeomConicalSurface 类对象
