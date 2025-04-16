[mxcad_3d API 文档](../README.md) / Mx3dGeomToroidalSurface

# Class: Mx3dGeomToroidalSurface

表示三维空间中的环面（Toroidal Surface）。
此类封装了操作环面属性和方法的功能。

## Hierarchy

- [`Mx3dGeomElementarySurface`](Mx3dGeomElementarySurface.md)

  ↳ **`Mx3dGeomToroidalSurface`**

## Table of contents

### Constructors

- [constructor](Mx3dGeomToroidalSurface.md#constructor)

### Methods

- [Area](Mx3dGeomToroidalSurface.md#area)
- [Axis](Mx3dGeomToroidalSurface.md#axis)
- [Bounds](Mx3dGeomToroidalSurface.md#bounds)
- [Coefficients](Mx3dGeomToroidalSurface.md#coefficients)
- [Continuity](Mx3dGeomToroidalSurface.md#continuity)
- [Copy](Mx3dGeomToroidalSurface.md#copy)
- [D0](Mx3dGeomToroidalSurface.md#d0)
- [D1](Mx3dGeomToroidalSurface.md#d1)
- [D2](Mx3dGeomToroidalSurface.md#d2)
- [D3](Mx3dGeomToroidalSurface.md#d3)
- [DN](Mx3dGeomToroidalSurface.md#dn)
- [DynamicType](Mx3dGeomToroidalSurface.md#dynamictype)
- [Face](Mx3dGeomToroidalSurface.md#face)
- [IsCNu](Mx3dGeomToroidalSurface.md#iscnu)
- [IsCNv](Mx3dGeomToroidalSurface.md#iscnv)
- [IsUClosed](Mx3dGeomToroidalSurface.md#isuclosed)
- [IsUPeriodic](Mx3dGeomToroidalSurface.md#isuperiodic)
- [IsVClosed](Mx3dGeomToroidalSurface.md#isvclosed)
- [IsVPeriodic](Mx3dGeomToroidalSurface.md#isvperiodic)
- [Location](Mx3dGeomToroidalSurface.md#location)
- [MajorRadius](Mx3dGeomToroidalSurface.md#majorradius)
- [MinorRadius](Mx3dGeomToroidalSurface.md#minorradius)
- [MirrorByAxis](Mx3dGeomToroidalSurface.md#mirrorbyaxis)
- [MirrorByCSYSR](Mx3dGeomToroidalSurface.md#mirrorbycsysr)
- [MirrorByPoint](Mx3dGeomToroidalSurface.md#mirrorbypoint)
- [MirroredByAxis](Mx3dGeomToroidalSurface.md#mirroredbyaxis)
- [MirroredByCSYSR](Mx3dGeomToroidalSurface.md#mirroredbycsysr)
- [MirroredByPoint](Mx3dGeomToroidalSurface.md#mirroredbypoint)
- [Position](Mx3dGeomToroidalSurface.md#position)
- [Rotate](Mx3dGeomToroidalSurface.md#rotate)
- [Rotated](Mx3dGeomToroidalSurface.md#rotated)
- [Scale](Mx3dGeomToroidalSurface.md#scale)
- [Scaled](Mx3dGeomToroidalSurface.md#scaled)
- [SetAxis](Mx3dGeomToroidalSurface.md#setaxis)
- [SetLocation](Mx3dGeomToroidalSurface.md#setlocation)
- [SetMajorRadius](Mx3dGeomToroidalSurface.md#setmajorradius)
- [SetMinorRadius](Mx3dGeomToroidalSurface.md#setminorradius)
- [SetPosition](Mx3dGeomToroidalSurface.md#setposition)
- [Transform](Mx3dGeomToroidalSurface.md#transform)
- [TransformParameters](Mx3dGeomToroidalSurface.md#transformparameters)
- [Transformed](Mx3dGeomToroidalSurface.md#transformed)
- [TranslateBy2Points](Mx3dGeomToroidalSurface.md#translateby2points)
- [TranslateByVec](Mx3dGeomToroidalSurface.md#translatebyvec)
- [TranslatedBy2Points](Mx3dGeomToroidalSurface.md#translatedby2points)
- [TranslatedByVec](Mx3dGeomToroidalSurface.md#translatedbyvec)
- [UPeriod](Mx3dGeomToroidalSurface.md#uperiod)
- [UReverse](Mx3dGeomToroidalSurface.md#ureverse)
- [UReversed](Mx3dGeomToroidalSurface.md#ureversed)
- [UReversedParameter](Mx3dGeomToroidalSurface.md#ureversedparameter)
- [VPeriod](Mx3dGeomToroidalSurface.md#vperiod)
- [VReverse](Mx3dGeomToroidalSurface.md#vreverse)
- [VReversed](Mx3dGeomToroidalSurface.md#vreversed)
- [VReversedParameter](Mx3dGeomToroidalSurface.md#vreversedparameter)
- [Value](Mx3dGeomToroidalSurface.md#value)
- [Volume](Mx3dGeomToroidalSurface.md#volume)
- [DownCast](Mx3dGeomToroidalSurface.md#downcast)

## Constructors

### constructor

• **new Mx3dGeomToroidalSurface**(`A3`, `MajorRadius`, `MinorRadius`)

构造一个具有给定坐标系统和主要、次要半径的环面。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `A3` | [`Mx3dGeCSYSR`](Mx3dGeCSYSR.md) | 表面局部坐标系统（Mx3dGeCSYSR）。 |
| `MajorRadius` | `number` | 环面的主要半径。 |
| `MinorRadius` | `number` | 环面的次要半径。 |

#### Overrides

Mx3dGeomElementarySurface.constructor

## Methods

### Area

▸ **Area**(): `number`

计算并返回环面的表面积。

#### Returns

`number`

表面积。

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

设置参数范围的边界。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `U1U2V1V2` | [dU1: number, dU2: number, dV1: number, dV2: number] | 参数范围[U1, U2, V1, V2]。 |

#### Returns

`void`

___

### Coefficients

▸ **Coefficients**(`Coef`): `void`

获取隐式方程系数。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Coef` | `number`[] | 系数数组，长度至少为31。 |

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

创建一个新的对象，它是此环面的副本。

#### Returns

[`Mx3dGeomObject`](Mx3dGeomObject.md)

环面的副本（Mx3dGeomObject）。

___

### D0

▸ **D0**(`U`, `V`, `P`): `void`

计算并返回指定U和V参数处的点。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `U` | `number` | 参数U。 |
| `V` | `number` | 参数V。 |
| `P` | [`Mx3dGePoint`](Mx3dGePoint.md) | 输出点（Mx3dGePoint）。 |

#### Returns

`void`

___

### D1

▸ **D1**(`U`, `V`, `P`, `D1U`, `D1V`): `void`

计算当前点和U、V方向的一阶导数。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `U` | `number` | 参数U。 |
| `V` | `number` | 参数V。 |
| `P` | [`Mx3dGePoint`](Mx3dGePoint.md) | 输出点（Mx3dGePoint）。 |
| `D1U` | [`Mx3dGeVec`](Mx3dGeVec.md) | 输出U方向的一阶导数（Mx3dGeVec）。 |
| `D1V` | [`Mx3dGeVec`](Mx3dGeVec.md) | 输出V方向的一阶导数（Mx3dGeVec）。 |

#### Returns

`void`

___

### D2

▸ **D2**(`U`, `V`, `P`, `D1U`, `D1V`, `D2U`, `D2V`, `D2UV`): `void`

计算当前点、一阶和二阶导数。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `U` | `number` | 参数U。 |
| `V` | `number` | 参数V。 |
| `P` | [`Mx3dGePoint`](Mx3dGePoint.md) | 输出点（Mx3dGePoint）。 |
| `D1U` | [`Mx3dGeVec`](Mx3dGeVec.md) | 输出U方向的一阶导数（Mx3dGeVec）。 |
| `D1V` | [`Mx3dGeVec`](Mx3dGeVec.md) | 输出V方向的一阶导数（Mx3dGeVec）。 |
| `D2U` | [`Mx3dGeVec`](Mx3dGeVec.md) | 输出U方向的二阶导数（Mx3dGeVec）。 |
| `D2V` | [`Mx3dGeVec`](Mx3dGeVec.md) | 输出V方向的二阶导数（Mx3dGeVec）。 |
| `D2UV` | [`Mx3dGeVec`](Mx3dGeVec.md) | 输出U,V方向的二阶混合导数（Mx3dGeVec）。 |

#### Returns

`void`

___

### D3

▸ **D3**(`U`, `V`, `P`, `D1U`, `D1V`, `D2U`, `D2V`, `D2UV`, `D3U`, `D3V`, `D3UUV`, `D3UVV`): `void`

计算当前点、一阶、二阶和三阶导数。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `U` | `number` | 参数U。 |
| `V` | `number` | 参数V。 |
| `P` | [`Mx3dGePoint`](Mx3dGePoint.md) | 输出点（Mx3dGePoint）。 |
| `D1U` | [`Mx3dGeVec`](Mx3dGeVec.md) | 输出U方向的一阶导数（Mx3dGeVec）。 |
| `D1V` | [`Mx3dGeVec`](Mx3dGeVec.md) | 输出V方向的一阶导数（Mx3dGeVec）。 |
| `D2U` | [`Mx3dGeVec`](Mx3dGeVec.md) | 输出U方向的二阶导数（Mx3dGeVec）。 |
| `D2V` | [`Mx3dGeVec`](Mx3dGeVec.md) | 输出V方向的二阶导数（Mx3dGeVec）。 |
| `D2UV` | [`Mx3dGeVec`](Mx3dGeVec.md) | 输出U,V方向的二阶混合导数（Mx3dGeVec）。 |
| `D3U` | [`Mx3dGeVec`](Mx3dGeVec.md) | 输出U方向的三阶导数（Mx3dGeVec）。 |
| `D3V` | [`Mx3dGeVec`](Mx3dGeVec.md) | 输出V方向的三阶导数（Mx3dGeVec）。 |
| `D3UUV` | [`Mx3dGeVec`](Mx3dGeVec.md) | 输出U方向的二阶混合三阶导数（Mx3dGeVec）。 |
| `D3UVV` | [`Mx3dGeVec`](Mx3dGeVec.md) | 输出V方向的二阶混合三阶导数（Mx3dGeVec）。 |

#### Returns

`void`

___

### DN

▸ **DN**(`U`, `V`, `Nu`, `Nv`): [`Mx3dGeVec`](Mx3dGeVec.md)

计算指定参数(U, V)处的高阶导数。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `U` | `number` | 参数U。 |
| `V` | `number` | 参数V。 |
| `Nu` | `number` | 高阶导数的U方向阶数。 |
| `Nv` | `number` | 高阶导数的V方向阶数。 |

#### Returns

[`Mx3dGeVec`](Mx3dGeVec.md)

高阶导数（Mx3dGeVec）。

___

### DynamicType

▸ **DynamicType**(): `string`

返回对象的动态类型字符串。

#### Returns

`string`

动态类型字符串。

#### Overrides

[Mx3dGeomElementarySurface](Mx3dGeomElementarySurface.md).[DynamicType](Mx3dGeomElementarySurface.md#dynamictype)

___

### Face

▸ **Face**(`TolDegen`): [`Mx3dShapeFace`](Mx3dShapeFace.md)

创建一个表示环面的平面（由面容表示）。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `TolDegen` | `number` | 退化容差。 |

#### Returns

[`Mx3dShapeFace`](Mx3dShapeFace.md)

平面（Mx3dShapeFace）。

▸ **Face**(`W`, `Inside`): [`Mx3dShapeFace`](Mx3dShapeFace.md)

创建一个表示环面的平面（由线条表示）。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `W` | [`Mx3dShapeWire`](Mx3dShapeWire.md) | 线条（Mx3dShapeWire）。 |
| `Inside` | `boolean` | 表示环面是否在内部。 |

#### Returns

[`Mx3dShapeFace`](Mx3dShapeFace.md)

平面（Mx3dShapeFace）。

▸ **Face**(`UMin`, `UMax`, `VMin`, `VMax`, `TolDegen`): [`Mx3dShapeFace`](Mx3dShapeFace.md)

创建一个表示环面的平面（指定U, V范围）。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `UMin` | `number` | 最小U参数。 |
| `UMax` | `number` | 最大U参数。 |
| `VMin` | `number` | 最小V参数。 |
| `VMax` | `number` | 最大V参数。 |
| `TolDegen` | `number` | 退化容差。 |

#### Returns

[`Mx3dShapeFace`](Mx3dShapeFace.md)

平面（Mx3dShapeFace）。

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

检查环面U方向是否闭合。

#### Returns

`boolean`

如果U方向闭合则返回true，否则返回false。

___

### IsUPeriodic

▸ **IsUPeriodic**(): `boolean`

检查环面U方向是否周期性。

#### Returns

`boolean`

如果U方向周期性则返回true，否则返回false。

___

### IsVClosed

▸ **IsVClosed**(): `boolean`

检查环面V方向是否闭合。

#### Returns

`boolean`

如果V方向闭合则返回true，否则返回false。

___

### IsVPeriodic

▸ **IsVPeriodic**(): `boolean`

检查环面V方向是否周期性。

#### Returns

`boolean`

如果V方向周期性则返回true，否则返回false。

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

### MajorRadius

▸ **MajorRadius**(): `number`

返回环面的主要半径。

#### Returns

`number`

主要半径。

___

### MinorRadius

▸ **MinorRadius**(): `number`

返回环面的次要半径。

#### Returns

`number`

次要半径。

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

▸ **MirroredByAxis**(`A1`): [`Mx3dGeomToroidalSurface`](Mx3dGeomToroidalSurface.md)

返回通过轴镜像变换后的新几何对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `A1` | [`Mx3dGeAxis`](Mx3dGeAxis.md) | 轴对象。 |

#### Returns

[`Mx3dGeomToroidalSurface`](Mx3dGeomToroidalSurface.md)

新的几何对象。

#### Inherited from

[Mx3dGeomElementarySurface](Mx3dGeomElementarySurface.md).[MirroredByAxis](Mx3dGeomElementarySurface.md#mirroredbyaxis)

___

### MirroredByCSYSR

▸ **MirroredByCSYSR**(`A2`): [`Mx3dGeomToroidalSurface`](Mx3dGeomToroidalSurface.md)

返回通过右手坐标系镜像变换后的新几何对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `A2` | [`Mx3dGeCSYSR`](Mx3dGeCSYSR.md) | 右手坐标系对象。 |

#### Returns

[`Mx3dGeomToroidalSurface`](Mx3dGeomToroidalSurface.md)

新的几何对象。

#### Inherited from

[Mx3dGeomElementarySurface](Mx3dGeomElementarySurface.md).[MirroredByCSYSR](Mx3dGeomElementarySurface.md#mirroredbycsysr)

___

### MirroredByPoint

▸ **MirroredByPoint**(`P`): [`Mx3dGeomToroidalSurface`](Mx3dGeomToroidalSurface.md)

返回通过点镜像变换后的新几何对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `P` | [`Mx3dGePoint`](Mx3dGePoint.md) | 点对象。 |

#### Returns

[`Mx3dGeomToroidalSurface`](Mx3dGeomToroidalSurface.md)

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

▸ **Rotated**(`A1`, `Ang`): [`Mx3dGeomToroidalSurface`](Mx3dGeomToroidalSurface.md)

返回旋转后的新几何对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `A1` | [`Mx3dGeAxis`](Mx3dGeAxis.md) | 轴对象。 |
| `Ang` | `number` | 旋转角度。 |

#### Returns

[`Mx3dGeomToroidalSurface`](Mx3dGeomToroidalSurface.md)

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

▸ **Scaled**(`P`, `S`): [`Mx3dGeomToroidalSurface`](Mx3dGeomToroidalSurface.md)

返回缩放后的新几何对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `P` | [`Mx3dGePoint`](Mx3dGePoint.md) | 点对象。 |
| `S` | `number` | 缩放比例。 |

#### Returns

[`Mx3dGeomToroidalSurface`](Mx3dGeomToroidalSurface.md)

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

### SetMajorRadius

▸ **SetMajorRadius**(`MajorRadius`): `void`

设置环面主要半径。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `MajorRadius` | `number` | 新的主要半径。必须为非负数。 |

#### Returns

`void`

___

### SetMinorRadius

▸ **SetMinorRadius**(`MinorRadius`): `void`

设置环面次要半径。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `MinorRadius` | `number` | 新的次要半径。必须为非负数。 |

#### Returns

`void`

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

### Transform

▸ **Transform**(`T`): `void`

应用变换T到环面。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `T` | [`Mx3dGeTrsf`](Mx3dGeTrsf.md) | 变换（Mx3dGeTrsf）。 |

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

▸ **Transformed**(`T`): [`Mx3dGeomToroidalSurface`](Mx3dGeomToroidalSurface.md)

返回变换后的新几何对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `T` | [`Mx3dGeTrsf`](Mx3dGeTrsf.md) | 变换对象。 |

#### Returns

[`Mx3dGeomToroidalSurface`](Mx3dGeomToroidalSurface.md)

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

▸ **TranslatedBy2Points**(`P1`, `P2`): [`Mx3dGeomToroidalSurface`](Mx3dGeomToroidalSurface.md)

返回通过两个点平移后的新几何对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `P1` | [`Mx3dGePoint`](Mx3dGePoint.md) | 起始点对象。 |
| `P2` | [`Mx3dGePoint`](Mx3dGePoint.md) | 终止点对象。 |

#### Returns

[`Mx3dGeomToroidalSurface`](Mx3dGeomToroidalSurface.md)

新的几何对象。

#### Inherited from

[Mx3dGeomElementarySurface](Mx3dGeomElementarySurface.md).[TranslatedBy2Points](Mx3dGeomElementarySurface.md#translatedby2points)

___

### TranslatedByVec

▸ **TranslatedByVec**(`V`): [`Mx3dGeomToroidalSurface`](Mx3dGeomToroidalSurface.md)

返回通过向量平移后的新几何对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `V` | [`Mx3dGeVec`](Mx3dGeVec.md) | 向量对象。 |

#### Returns

[`Mx3dGeomToroidalSurface`](Mx3dGeomToroidalSurface.md)

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

▸ **UReversed**(): [`Mx3dGeomToroidalSurface`](Mx3dGeomToroidalSurface.md)

反转 U 方向的参数化。

#### Returns

[`Mx3dGeomToroidalSurface`](Mx3dGeomToroidalSurface.md)

返回当前对象以实现链式调用。

#### Inherited from

[Mx3dGeomElementarySurface](Mx3dGeomElementarySurface.md).[UReversed](Mx3dGeomElementarySurface.md#ureversed)

___

### UReversedParameter

▸ **UReversedParameter**(`U`): `number`

计算在给定U参数上的环面U方向反转后的参数值。

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

▸ **VReversed**(): [`Mx3dGeomToroidalSurface`](Mx3dGeomToroidalSurface.md)

反转 V 方向的参数化。

#### Returns

[`Mx3dGeomToroidalSurface`](Mx3dGeomToroidalSurface.md)

返回当前对象以实现链式调用。

#### Inherited from

[Mx3dGeomElementarySurface](Mx3dGeomElementarySurface.md).[VReversed](Mx3dGeomElementarySurface.md#vreversed)

___

### VReversedParameter

▸ **VReversedParameter**(`V`): `number`

计算在给定V参数上的环面V方向反转后的参数值。

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

计算并返回环面的体积。

#### Returns

`number`

体积。

___

### DownCast

▸ `Static` **DownCast**(`theObject`): [`Mx3dGeomToroidalSurface`](Mx3dGeomToroidalSurface.md)

父类对象转 Mx3dGeomToroidalSurface 类对象

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theObject` | [`Mx3dGeomObject`](Mx3dGeomObject.md) | 父类对象 |

#### Returns

[`Mx3dGeomToroidalSurface`](Mx3dGeomToroidalSurface.md)

Mx3dGeomToroidalSurface 类对象
