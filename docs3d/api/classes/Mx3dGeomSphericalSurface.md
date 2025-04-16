[mxcad_3d API 文档](../README.md) / Mx3dGeomSphericalSurface

# Class: Mx3dGeomSphericalSurface

表示三维空间中的球面。
此类封装了操作球面属性和方法的功能。

## Hierarchy

- [`Mx3dGeomElementarySurface`](Mx3dGeomElementarySurface.md)

  ↳ **`Mx3dGeomSphericalSurface`**

## Table of contents

### Constructors

- [constructor](Mx3dGeomSphericalSurface.md#constructor)

### Methods

- [Area](Mx3dGeomSphericalSurface.md#area)
- [Axis](Mx3dGeomSphericalSurface.md#axis)
- [Bounds](Mx3dGeomSphericalSurface.md#bounds)
- [Coefficients](Mx3dGeomSphericalSurface.md#coefficients)
- [Continuity](Mx3dGeomSphericalSurface.md#continuity)
- [Copy](Mx3dGeomSphericalSurface.md#copy)
- [D0](Mx3dGeomSphericalSurface.md#d0)
- [D1](Mx3dGeomSphericalSurface.md#d1)
- [D2](Mx3dGeomSphericalSurface.md#d2)
- [D3](Mx3dGeomSphericalSurface.md#d3)
- [DN](Mx3dGeomSphericalSurface.md#dn)
- [DynamicType](Mx3dGeomSphericalSurface.md#dynamictype)
- [Face](Mx3dGeomSphericalSurface.md#face)
- [IsCNu](Mx3dGeomSphericalSurface.md#iscnu)
- [IsCNv](Mx3dGeomSphericalSurface.md#iscnv)
- [IsUClosed](Mx3dGeomSphericalSurface.md#isuclosed)
- [IsUPeriodic](Mx3dGeomSphericalSurface.md#isuperiodic)
- [IsVClosed](Mx3dGeomSphericalSurface.md#isvclosed)
- [IsVPeriodic](Mx3dGeomSphericalSurface.md#isvperiodic)
- [Location](Mx3dGeomSphericalSurface.md#location)
- [MirrorByAxis](Mx3dGeomSphericalSurface.md#mirrorbyaxis)
- [MirrorByCSYSR](Mx3dGeomSphericalSurface.md#mirrorbycsysr)
- [MirrorByPoint](Mx3dGeomSphericalSurface.md#mirrorbypoint)
- [MirroredByAxis](Mx3dGeomSphericalSurface.md#mirroredbyaxis)
- [MirroredByCSYSR](Mx3dGeomSphericalSurface.md#mirroredbycsysr)
- [MirroredByPoint](Mx3dGeomSphericalSurface.md#mirroredbypoint)
- [Position](Mx3dGeomSphericalSurface.md#position)
- [Radius](Mx3dGeomSphericalSurface.md#radius)
- [Rotate](Mx3dGeomSphericalSurface.md#rotate)
- [Rotated](Mx3dGeomSphericalSurface.md#rotated)
- [Scale](Mx3dGeomSphericalSurface.md#scale)
- [Scaled](Mx3dGeomSphericalSurface.md#scaled)
- [SetAxis](Mx3dGeomSphericalSurface.md#setaxis)
- [SetLocation](Mx3dGeomSphericalSurface.md#setlocation)
- [SetPosition](Mx3dGeomSphericalSurface.md#setposition)
- [SetRadius](Mx3dGeomSphericalSurface.md#setradius)
- [Transform](Mx3dGeomSphericalSurface.md#transform)
- [TransformParameters](Mx3dGeomSphericalSurface.md#transformparameters)
- [Transformed](Mx3dGeomSphericalSurface.md#transformed)
- [TranslateBy2Points](Mx3dGeomSphericalSurface.md#translateby2points)
- [TranslateByVec](Mx3dGeomSphericalSurface.md#translatebyvec)
- [TranslatedBy2Points](Mx3dGeomSphericalSurface.md#translatedby2points)
- [TranslatedByVec](Mx3dGeomSphericalSurface.md#translatedbyvec)
- [UPeriod](Mx3dGeomSphericalSurface.md#uperiod)
- [UReverse](Mx3dGeomSphericalSurface.md#ureverse)
- [UReversed](Mx3dGeomSphericalSurface.md#ureversed)
- [UReversedParameter](Mx3dGeomSphericalSurface.md#ureversedparameter)
- [VPeriod](Mx3dGeomSphericalSurface.md#vperiod)
- [VReverse](Mx3dGeomSphericalSurface.md#vreverse)
- [VReversed](Mx3dGeomSphericalSurface.md#vreversed)
- [VReversedParameter](Mx3dGeomSphericalSurface.md#vreversedparameter)
- [Value](Mx3dGeomSphericalSurface.md#value)
- [Volume](Mx3dGeomSphericalSurface.md#volume)
- [DownCast](Mx3dGeomSphericalSurface.md#downcast)

## Constructors

### constructor

• **new Mx3dGeomSphericalSurface**(`A3`, `Radius`)

构造一个具有给定坐标系统和半径的球面。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `A3` | [`Mx3dGeCSYSR`](Mx3dGeCSYSR.md) | 表面局部坐标系统（Mx3dGeCSYSR）。 |
| `Radius` | `number` | 球的半径。 |

#### Overrides

Mx3dGeomElementarySurface.constructor

## Methods

### Area

▸ **Area**(): `number`

计算球面面积。

#### Returns

`number`

表面面积。

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

检索参数域的边界。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `U1U2V1V2` | [dU1: number, dU2: number, dV1: number, dV2: number] | 包含边界的数组：[dU1, dU2, dV1, dV2]。 |

#### Returns

`void`

___

### Coefficients

▸ **Coefficients**(`A1A2A3B1B2B3C1C2C3D`): `void`

设置球面隐式方程的系数。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `A1A2A3B1B2B3C1C2C3D` | [A1: number, A2: number, A3: number, B1: number, B2: number, B3: number, C1: number, C2: number, C3: number, D: number] | 系数数组：[A1, A2, A3, B1, B2, B3, C1, C2, C3, D]。 |

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

创建球面的副本。

#### Returns

[`Mx3dGeomObject`](Mx3dGeomObject.md)

球面的新实例。

___

### D0

▸ **D0**(`U`, `V`, `P`): `void`

计算给定U和V参数的表面点。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `U` | `number` | U参数。 |
| `V` | `number` | V参数。 |
| `P` | [`Mx3dGePoint`](Mx3dGePoint.md) | 表面上的点。 |

#### Returns

`void`

___

### D1

▸ **D1**(`U`, `V`, `P`, `D1U`, `D1V`): `void`

计算给定U和V参数的点及其一阶导数。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `U` | `number` | U参数。 |
| `V` | `number` | V参数。 |
| `P` | [`Mx3dGePoint`](Mx3dGePoint.md) | 表面上的点。 |
| `D1U` | [`Mx3dGeVec`](Mx3dGeVec.md) | U方向的导数。 |
| `D1V` | [`Mx3dGeVec`](Mx3dGeVec.md) | V方向的导数。 |

#### Returns

`void`

___

### D2

▸ **D2**(`U`, `V`, `P`, `D1U`, `D1V`, `D2U`, `D2V`, `D2UV`): `void`

计算给定U和V参数的点、一阶和二阶导数。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `U` | `number` | U参数。 |
| `V` | `number` | V参数。 |
| `P` | [`Mx3dGePoint`](Mx3dGePoint.md) | 表面上的点。 |
| `D1U` | [`Mx3dGeVec`](Mx3dGeVec.md) | U方向的一阶导数。 |
| `D1V` | [`Mx3dGeVec`](Mx3dGeVec.md) | V方向的一阶导数。 |
| `D2U` | [`Mx3dGeVec`](Mx3dGeVec.md) | U方向的二阶导数。 |
| `D2V` | [`Mx3dGeVec`](Mx3dGeVec.md) | V方向的二阶导数。 |
| `D2UV` | [`Mx3dGeVec`](Mx3dGeVec.md) | 二阶混合导数。 |

#### Returns

`void`

___

### D3

▸ **D3**(`U`, `V`, `P`, `D1U`, `D1V`, `D2U`, `D2V`, `D2UV`, `D3U`, `D3V`, `D3UUV`, `D3UVV`): `void`

计算给定U和V参数的点、一阶、二阶和三阶导数。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `U` | `number` | U参数。 |
| `V` | `number` | V参数。 |
| `P` | [`Mx3dGePoint`](Mx3dGePoint.md) | 表面上的点。 |
| `D1U` | [`Mx3dGeVec`](Mx3dGeVec.md) | U方向的一阶导数。 |
| `D1V` | [`Mx3dGeVec`](Mx3dGeVec.md) | V方向的一阶导数。 |
| `D2U` | [`Mx3dGeVec`](Mx3dGeVec.md) | U方向的二阶导数。 |
| `D2V` | [`Mx3dGeVec`](Mx3dGeVec.md) | V方向的二阶导数。 |
| `D2UV` | [`Mx3dGeVec`](Mx3dGeVec.md) | 二阶混合导数。 |
| `D3U` | [`Mx3dGeVec`](Mx3dGeVec.md) | U方向的三阶导数。 |
| `D3V` | [`Mx3dGeVec`](Mx3dGeVec.md) | V方向的三阶导数。 |
| `D3UUV` | [`Mx3dGeVec`](Mx3dGeVec.md) | 三阶混合导数（U和U）。 |
| `D3UVV` | [`Mx3dGeVec`](Mx3dGeVec.md) | 三阶混合导数（U和V）。 |

#### Returns

`void`

___

### DN

▸ **DN**(`U`, `V`, `Nu`, `Nv`): [`Mx3dGeVec`](Mx3dGeVec.md)

计算在U和V方向上的指定阶数导数。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `U` | `number` | U参数。 |
| `V` | `number` | V参数。 |
| `Nu` | `number` | U方向上的导数阶数。 |
| `Nv` | `number` | V方向上的导数阶数。 |

#### Returns

[`Mx3dGeVec`](Mx3dGeVec.md)

第N阶导数向量。

___

### DynamicType

▸ **DynamicType**(): `string`

返回对象的动态类型。

#### Returns

`string`

动态类型的字符串。

#### Overrides

[Mx3dGeomElementarySurface](Mx3dGeomElementarySurface.md).[DynamicType](Mx3dGeomElementarySurface.md#dynamictype)

___

### Face

▸ **Face**(`TolDegen`): [`Mx3dShapeFace`](Mx3dShapeFace.md)

使用退化容差生成表面的面。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `TolDegen` | `number` | 退化容差。 |

#### Returns

[`Mx3dShapeFace`](Mx3dShapeFace.md)

表面表示的面。

▸ **Face**(`W`, `Inside`): [`Mx3dShapeFace`](Mx3dShapeFace.md)

使用线框和内部标志生成表面的面。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `W` | [`Mx3dShapeWire`](Mx3dShapeWire.md) | 定义边界的线框。 |
| `Inside` | `boolean` | 布尔值，表示面是否在线框内。 |

#### Returns

[`Mx3dShapeFace`](Mx3dShapeFace.md)

表面表示的面。

▸ **Face**(`UMin`, `UMax`, `VMin`, `VMax`, `TolDegen`): [`Mx3dShapeFace`](Mx3dShapeFace.md)

使用指定的参数范围和退化容差生成表面的面。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `UMin` | `number` | 参数范围的最小U值。 |
| `UMax` | `number` | 参数范围的最大U值。 |
| `VMin` | `number` | 参数范围的最小V值。 |
| `VMax` | `number` | 参数范围的最大V值。 |
| `TolDegen` | `number` | 退化容差，用于处理几何退化情况。 |

#### Returns

[`Mx3dShapeFace`](Mx3dShapeFace.md)

表面表示的面，通常是一个闭合的曲面片段。

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

检查表面在U方向是否闭合。

#### Returns

`boolean`

如果U方向闭合则为True，否则为False。

___

### IsUPeriodic

▸ **IsUPeriodic**(): `boolean`

检查表面在U方向是否周期性。

#### Returns

`boolean`

如果U方向周期性则为True，否则为False。

___

### IsVClosed

▸ **IsVClosed**(): `boolean`

检查表面在V方向是否闭合。

#### Returns

`boolean`

如果V方向闭合则为True，否则为False。

___

### IsVPeriodic

▸ **IsVPeriodic**(): `boolean`

检查表面在V方向是否周期性。

#### Returns

`boolean`

如果V方向周期性则为True，否则为False。

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

▸ **MirroredByAxis**(`A1`): [`Mx3dGeomSphericalSurface`](Mx3dGeomSphericalSurface.md)

返回通过轴镜像变换后的新几何对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `A1` | [`Mx3dGeAxis`](Mx3dGeAxis.md) | 轴对象。 |

#### Returns

[`Mx3dGeomSphericalSurface`](Mx3dGeomSphericalSurface.md)

新的几何对象。

#### Inherited from

[Mx3dGeomElementarySurface](Mx3dGeomElementarySurface.md).[MirroredByAxis](Mx3dGeomElementarySurface.md#mirroredbyaxis)

___

### MirroredByCSYSR

▸ **MirroredByCSYSR**(`A2`): [`Mx3dGeomSphericalSurface`](Mx3dGeomSphericalSurface.md)

返回通过右手坐标系镜像变换后的新几何对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `A2` | [`Mx3dGeCSYSR`](Mx3dGeCSYSR.md) | 右手坐标系对象。 |

#### Returns

[`Mx3dGeomSphericalSurface`](Mx3dGeomSphericalSurface.md)

新的几何对象。

#### Inherited from

[Mx3dGeomElementarySurface](Mx3dGeomElementarySurface.md).[MirroredByCSYSR](Mx3dGeomElementarySurface.md#mirroredbycsysr)

___

### MirroredByPoint

▸ **MirroredByPoint**(`P`): [`Mx3dGeomSphericalSurface`](Mx3dGeomSphericalSurface.md)

返回通过点镜像变换后的新几何对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `P` | [`Mx3dGePoint`](Mx3dGePoint.md) | 点对象。 |

#### Returns

[`Mx3dGeomSphericalSurface`](Mx3dGeomSphericalSurface.md)

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

### Radius

▸ **Radius**(): `number`

返回球面半径。

#### Returns

`number`

球的半径。

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

▸ **Rotated**(`A1`, `Ang`): [`Mx3dGeomSphericalSurface`](Mx3dGeomSphericalSurface.md)

返回旋转后的新几何对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `A1` | [`Mx3dGeAxis`](Mx3dGeAxis.md) | 轴对象。 |
| `Ang` | `number` | 旋转角度。 |

#### Returns

[`Mx3dGeomSphericalSurface`](Mx3dGeomSphericalSurface.md)

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

▸ **Scaled**(`P`, `S`): [`Mx3dGeomSphericalSurface`](Mx3dGeomSphericalSurface.md)

返回缩放后的新几何对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `P` | [`Mx3dGePoint`](Mx3dGePoint.md) | 点对象。 |
| `S` | `number` | 缩放比例。 |

#### Returns

[`Mx3dGeomSphericalSurface`](Mx3dGeomSphericalSurface.md)

新的几何对象。

#### Inherited from

[Mx3dGeomElementarySurface](Mx3dGeomElementarySurface.md).[Scaled](Mx3dGeomElementarySurface.md#scaled)

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

设置球面半径。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `R` | `number` | 新的球面半径。必须为非负数。 |

#### Returns

`void`

___

### Transform

▸ **Transform**(`T`): `void`

应用变换到球面。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `T` | [`Mx3dGeTrsf`](Mx3dGeTrsf.md) | 要应用的变换。 |

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

[Mx3dGeomElementarySurface](Mx3dGeomElementarySurface.md).[TransformParameters](Mx3dGeomElementarySurface.md#transformparameters)

___

### Transformed

▸ **Transformed**(`T`): [`Mx3dGeomSphericalSurface`](Mx3dGeomSphericalSurface.md)

返回变换后的新几何对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `T` | [`Mx3dGeTrsf`](Mx3dGeTrsf.md) | 变换对象。 |

#### Returns

[`Mx3dGeomSphericalSurface`](Mx3dGeomSphericalSurface.md)

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

▸ **TranslatedBy2Points**(`P1`, `P2`): [`Mx3dGeomSphericalSurface`](Mx3dGeomSphericalSurface.md)

返回通过两个点平移后的新几何对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `P1` | [`Mx3dGePoint`](Mx3dGePoint.md) | 起始点对象。 |
| `P2` | [`Mx3dGePoint`](Mx3dGePoint.md) | 终止点对象。 |

#### Returns

[`Mx3dGeomSphericalSurface`](Mx3dGeomSphericalSurface.md)

新的几何对象。

#### Inherited from

[Mx3dGeomElementarySurface](Mx3dGeomElementarySurface.md).[TranslatedBy2Points](Mx3dGeomElementarySurface.md#translatedby2points)

___

### TranslatedByVec

▸ **TranslatedByVec**(`V`): [`Mx3dGeomSphericalSurface`](Mx3dGeomSphericalSurface.md)

返回通过向量平移后的新几何对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `V` | [`Mx3dGeVec`](Mx3dGeVec.md) | 向量对象。 |

#### Returns

[`Mx3dGeomSphericalSurface`](Mx3dGeomSphericalSurface.md)

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

▸ **UReversed**(): [`Mx3dGeomSphericalSurface`](Mx3dGeomSphericalSurface.md)

反转 U 方向的参数化。

#### Returns

[`Mx3dGeomSphericalSurface`](Mx3dGeomSphericalSurface.md)

返回当前对象以实现链式调用。

#### Inherited from

[Mx3dGeomElementarySurface](Mx3dGeomElementarySurface.md).[UReversed](Mx3dGeomElementarySurface.md#ureversed)

___

### UReversedParameter

▸ **UReversedParameter**(`U`): `number`

计算在给定点上U参数方向反转后的U参数值。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `U` | `number` | 原始的U参数。 |

#### Returns

`number`

反转后的U参数值。

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

反转表面在 V 参数方向上的参数化方向。

#### Returns

`void`

#### Inherited from

[Mx3dGeomElementarySurface](Mx3dGeomElementarySurface.md).[VReverse](Mx3dGeomElementarySurface.md#vreverse)

___

### VReversed

▸ **VReversed**(): [`Mx3dGeomSphericalSurface`](Mx3dGeomSphericalSurface.md)

反转 V 方向的参数化。

#### Returns

[`Mx3dGeomSphericalSurface`](Mx3dGeomSphericalSurface.md)

返回当前对象以实现链式调用。

#### Inherited from

[Mx3dGeomElementarySurface](Mx3dGeomElementarySurface.md).[VReversed](Mx3dGeomElementarySurface.md#vreversed)

___

### VReversedParameter

▸ **VReversedParameter**(`V`): `number`

计算在给定点上V参数方向反转后的V参数值。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `V` | `number` | 原始的V参数。 |

#### Returns

`number`

反转后的V参数值。

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

### Volume

▸ **Volume**(): `number`

计算球面体积。

#### Returns

`number`

表面体积。

___

### DownCast

▸ `Static` **DownCast**(`theObject`): [`Mx3dGeomSphericalSurface`](Mx3dGeomSphericalSurface.md)

父类对象转 Mx3dGeomSphericalSurface 类对象

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theObject` | [`Mx3dGeomObject`](Mx3dGeomObject.md) | 父类对象 |

#### Returns

[`Mx3dGeomSphericalSurface`](Mx3dGeomSphericalSurface.md)

Mx3dGeomSphericalSurface 类对象
