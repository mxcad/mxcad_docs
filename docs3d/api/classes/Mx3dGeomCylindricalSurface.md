[mxcad_3d API 文档](../README.md) / Mx3dGeomCylindricalSurface

# Class: Mx3dGeomCylindricalSurface

Mx3dGeomCylindricalSurface 类封装了圆柱面几何的功能，继承自 Mx3dGeomElementarySurface。

## Hierarchy

- [`Mx3dGeomElementarySurface`](Mx3dGeomElementarySurface.md)

  ↳ **`Mx3dGeomCylindricalSurface`**

## Table of contents

### Constructors

- [constructor](Mx3dGeomCylindricalSurface.md#constructor)

### Methods

- [Axis](Mx3dGeomCylindricalSurface.md#axis)
- [Bounds](Mx3dGeomCylindricalSurface.md#bounds)
- [Coefficients](Mx3dGeomCylindricalSurface.md#coefficients)
- [Continuity](Mx3dGeomCylindricalSurface.md#continuity)
- [Copy](Mx3dGeomCylindricalSurface.md#copy)
- [D0](Mx3dGeomCylindricalSurface.md#d0)
- [D1](Mx3dGeomCylindricalSurface.md#d1)
- [D2](Mx3dGeomCylindricalSurface.md#d2)
- [D3](Mx3dGeomCylindricalSurface.md#d3)
- [DN](Mx3dGeomCylindricalSurface.md#dn)
- [DynamicType](Mx3dGeomCylindricalSurface.md#dynamictype)
- [Face](Mx3dGeomCylindricalSurface.md#face)
- [IsCNu](Mx3dGeomCylindricalSurface.md#iscnu)
- [IsCNv](Mx3dGeomCylindricalSurface.md#iscnv)
- [IsUClosed](Mx3dGeomCylindricalSurface.md#isuclosed)
- [IsUPeriodic](Mx3dGeomCylindricalSurface.md#isuperiodic)
- [IsVClosed](Mx3dGeomCylindricalSurface.md#isvclosed)
- [IsVPeriodic](Mx3dGeomCylindricalSurface.md#isvperiodic)
- [Location](Mx3dGeomCylindricalSurface.md#location)
- [MirrorByAxis](Mx3dGeomCylindricalSurface.md#mirrorbyaxis)
- [MirrorByCSYSR](Mx3dGeomCylindricalSurface.md#mirrorbycsysr)
- [MirrorByPoint](Mx3dGeomCylindricalSurface.md#mirrorbypoint)
- [MirroredByAxis](Mx3dGeomCylindricalSurface.md#mirroredbyaxis)
- [MirroredByCSYSR](Mx3dGeomCylindricalSurface.md#mirroredbycsysr)
- [MirroredByPoint](Mx3dGeomCylindricalSurface.md#mirroredbypoint)
- [Position](Mx3dGeomCylindricalSurface.md#position)
- [Radius](Mx3dGeomCylindricalSurface.md#radius)
- [Rotate](Mx3dGeomCylindricalSurface.md#rotate)
- [Rotated](Mx3dGeomCylindricalSurface.md#rotated)
- [Scale](Mx3dGeomCylindricalSurface.md#scale)
- [Scaled](Mx3dGeomCylindricalSurface.md#scaled)
- [SetAxis](Mx3dGeomCylindricalSurface.md#setaxis)
- [SetLocation](Mx3dGeomCylindricalSurface.md#setlocation)
- [SetPosition](Mx3dGeomCylindricalSurface.md#setposition)
- [SetRadius](Mx3dGeomCylindricalSurface.md#setradius)
- [Transform](Mx3dGeomCylindricalSurface.md#transform)
- [TransformParameters](Mx3dGeomCylindricalSurface.md#transformparameters)
- [Transformed](Mx3dGeomCylindricalSurface.md#transformed)
- [TranslateBy2Points](Mx3dGeomCylindricalSurface.md#translateby2points)
- [TranslateByVec](Mx3dGeomCylindricalSurface.md#translatebyvec)
- [TranslatedBy2Points](Mx3dGeomCylindricalSurface.md#translatedby2points)
- [TranslatedByVec](Mx3dGeomCylindricalSurface.md#translatedbyvec)
- [UPeriod](Mx3dGeomCylindricalSurface.md#uperiod)
- [UReverse](Mx3dGeomCylindricalSurface.md#ureverse)
- [UReversed](Mx3dGeomCylindricalSurface.md#ureversed)
- [UReversedParameter](Mx3dGeomCylindricalSurface.md#ureversedparameter)
- [VPeriod](Mx3dGeomCylindricalSurface.md#vperiod)
- [VReverse](Mx3dGeomCylindricalSurface.md#vreverse)
- [VReversed](Mx3dGeomCylindricalSurface.md#vreversed)
- [VReversedParameter](Mx3dGeomCylindricalSurface.md#vreversedparameter)
- [Value](Mx3dGeomCylindricalSurface.md#value)
- [DownCast](Mx3dGeomCylindricalSurface.md#downcast)

## Constructors

### constructor

• **new Mx3dGeomCylindricalSurface**(`A3`, `Radius`)

构造函数，创建一个新的圆柱面对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `A3` | [`Mx3dGeCSYSR`](Mx3dGeCSYSR.md) | 圆柱面的局部坐标系。 |
| `Radius` | `number` | 圆柱面的半径。 |

#### Overrides

Mx3dGeomElementarySurface.constructor

## Methods

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

获取圆柱面的参数范围。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `U1U2V1V2` | [dU1: number, dU2: number, dV1: number, dV2: number] | 参数范围 [dU1, dU2, dV1, dV2]。 |

#### Returns

`void`

___

### Coefficients

▸ **Coefficients**(`A1A2A3B1B2B3C1C2C3D`): `void`

获取圆柱面方程的系数。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `A1A2A3B1B2B3C1C2C3D` | [A1: number, A2: number, A3: number, B1: number, B2: number, B3: number, C1: number, C2: number, C3: number, D: number] | 方程系数 [A1, A2, A3, B1, B2, B3, C1, C2, C3, D]。 |

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

创建当前圆柱面的副本。

#### Returns

[`Mx3dGeomObject`](Mx3dGeomObject.md)

圆柱面的副本。

___

### D0

▸ **D0**(`U`, `V`, `P`): `void`

计算当前点在圆柱面上的位置及其法向量。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `U` | `number` | 参数 U。 |
| `V` | `number` | 参数 V。 |
| `P` | [`Mx3dGePoint`](Mx3dGePoint.md) | 存储点的位置。 |

#### Returns

`void`

___

### D1

▸ **D1**(`U`, `V`, `P`, `D1U`, `D1V`): `void`

计算当前点在圆柱面上的位置及其一阶导数。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `U` | `number` | 参数 U。 |
| `V` | `number` | 参数 V。 |
| `P` | [`Mx3dGePoint`](Mx3dGePoint.md) | 存储点的位置。 |
| `D1U` | [`Mx3dGeVec`](Mx3dGeVec.md) | 存储 U 方向的一阶导数。 |
| `D1V` | [`Mx3dGeVec`](Mx3dGeVec.md) | 存储 V 方向的一阶导数。 |

#### Returns

`void`

___

### D2

▸ **D2**(`U`, `V`, `P`, `D1U`, `D1V`, `D2U`, `D2V`, `D2UV`): `void`

计算当前点在圆柱面上的位置及其一阶、二阶导数。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `U` | `number` | 参数 U。 |
| `V` | `number` | 参数 V。 |
| `P` | [`Mx3dGePoint`](Mx3dGePoint.md) | 存储点的位置。 |
| `D1U` | [`Mx3dGeVec`](Mx3dGeVec.md) | 存储 U 方向的一阶导数。 |
| `D1V` | [`Mx3dGeVec`](Mx3dGeVec.md) | 存储 V 方向的一阶导数。 |
| `D2U` | [`Mx3dGeVec`](Mx3dGeVec.md) | 存储 U 方向的二阶导数。 |
| `D2V` | [`Mx3dGeVec`](Mx3dGeVec.md) | 存储 V 方向的二阶导数。 |
| `D2UV` | [`Mx3dGeVec`](Mx3dGeVec.md) | 存储 U 和 V 方向的混合二阶导数。 |

#### Returns

`void`

___

### D3

▸ **D3**(`U`, `V`, `P`, `D1U`, `D1V`, `D2U`, `D2V`, `D2UV`, `D3U`, `D3V`, `D3UUV`, `D3UVV`): `void`

计算当前点在圆柱面上的位置及其一阶、二阶、三阶导数。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `U` | `number` | 参数 U。 |
| `V` | `number` | 参数 V。 |
| `P` | [`Mx3dGePoint`](Mx3dGePoint.md) | 存储点的位置。 |
| `D1U` | [`Mx3dGeVec`](Mx3dGeVec.md) | 存储 U 方向的一阶导数。 |
| `D1V` | [`Mx3dGeVec`](Mx3dGeVec.md) | 存储 V 方向的一阶导数。 |
| `D2U` | [`Mx3dGeVec`](Mx3dGeVec.md) | 存储 U 方向的二阶导数。 |
| `D2V` | [`Mx3dGeVec`](Mx3dGeVec.md) | 存储 V 方向的二阶导数。 |
| `D2UV` | [`Mx3dGeVec`](Mx3dGeVec.md) | 存储 U 和 V 方向的混合二阶导数。 |
| `D3U` | [`Mx3dGeVec`](Mx3dGeVec.md) | 存储 U 方向的三阶导数。 |
| `D3V` | [`Mx3dGeVec`](Mx3dGeVec.md) | 存储 V 方向的三阶导数。 |
| `D3UUV` | [`Mx3dGeVec`](Mx3dGeVec.md) | 存储 U 和 U 方向的混合三阶导数。 |
| `D3UVV` | [`Mx3dGeVec`](Mx3dGeVec.md) | 存储 U 和 V 方向的混合三阶导数。 |

#### Returns

`void`

___

### DN

▸ **DN**(`U`, `V`, `Nu`, `Nv`): [`Mx3dGeVec`](Mx3dGeVec.md)

计算指定阶数的导数向量。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `U` | `number` | 参数 U。 |
| `V` | `number` | 参数 V。 |
| `Nu` | `number` | 导数阶数在 U 方向。 |
| `Nv` | `number` | 导数阶数在 V 方向。 |

#### Returns

[`Mx3dGeVec`](Mx3dGeVec.md)

导数向量。

___

### DynamicType

▸ **DynamicType**(): `string`

获取当前对象的动态类型信息。

#### Returns

`string`

对象的类型字符串。

#### Overrides

[Mx3dGeomElementarySurface](Mx3dGeomElementarySurface.md).[DynamicType](Mx3dGeomElementarySurface.md#dynamictype)

___

### Face

▸ **Face**(`TolDegen`): [`Mx3dShapeFace`](Mx3dShapeFace.md)

创建圆柱面的面对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `TolDegen` | `number` | 面的退化容差。 |

#### Returns

[`Mx3dShapeFace`](Mx3dShapeFace.md)

面对象。

▸ **Face**(`W`, `Inside`): [`Mx3dShapeFace`](Mx3dShapeFace.md)

创建圆柱面的面对象，指定是否包含内部区域。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `W` | [`Mx3dShapeWire`](Mx3dShapeWire.md) | 轮廓线。 |
| `Inside` | `boolean` | 是否包含内部区域。 |

#### Returns

[`Mx3dShapeFace`](Mx3dShapeFace.md)

面对象。

▸ **Face**(`UMin`, `UMax`, `VMin`, `VMax`, `TolDegen`): [`Mx3dShapeFace`](Mx3dShapeFace.md)

创建圆柱面的面对象，指定参数范围。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `UMin` | `number` | 参数 U 的最小值。 |
| `UMax` | `number` | 参数 U 的最大值。 |
| `VMin` | `number` | 参数 V 的最小值。 |
| `VMax` | `number` | 参数 V 的最大值。 |
| `TolDegen` | `number` | 面的退化容差。 |

#### Returns

[`Mx3dShapeFace`](Mx3dShapeFace.md)

面对象。

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

判断圆柱面在 U 方向是否闭合。

#### Returns

`boolean`

如果是闭合的，返回 true，否则返回 false。

___

### IsUPeriodic

▸ **IsUPeriodic**(): `boolean`

判断圆柱面在 U 方向是否周期性。

#### Returns

`boolean`

如果是周期性的，返回 true，否则返回 false。

___

### IsVClosed

▸ **IsVClosed**(): `boolean`

判断圆柱面在 V 方向是否闭合。

#### Returns

`boolean`

如果是闭合的，返回 true，否则返回 false。

___

### IsVPeriodic

▸ **IsVPeriodic**(): `boolean`

判断圆柱面在 V 方向是否周期性。

#### Returns

`boolean`

如果是周期性的，返回 true，否则返回 false。

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

▸ **MirroredByAxis**(`A1`): [`Mx3dGeomCylindricalSurface`](Mx3dGeomCylindricalSurface.md)

返回通过轴镜像变换后的新几何对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `A1` | [`Mx3dGeAxis`](Mx3dGeAxis.md) | 轴对象。 |

#### Returns

[`Mx3dGeomCylindricalSurface`](Mx3dGeomCylindricalSurface.md)

新的几何对象。

#### Inherited from

[Mx3dGeomElementarySurface](Mx3dGeomElementarySurface.md).[MirroredByAxis](Mx3dGeomElementarySurface.md#mirroredbyaxis)

___

### MirroredByCSYSR

▸ **MirroredByCSYSR**(`A2`): [`Mx3dGeomCylindricalSurface`](Mx3dGeomCylindricalSurface.md)

返回通过右手坐标系镜像变换后的新几何对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `A2` | [`Mx3dGeCSYSR`](Mx3dGeCSYSR.md) | 右手坐标系对象。 |

#### Returns

[`Mx3dGeomCylindricalSurface`](Mx3dGeomCylindricalSurface.md)

新的几何对象。

#### Inherited from

[Mx3dGeomElementarySurface](Mx3dGeomElementarySurface.md).[MirroredByCSYSR](Mx3dGeomElementarySurface.md#mirroredbycsysr)

___

### MirroredByPoint

▸ **MirroredByPoint**(`P`): [`Mx3dGeomCylindricalSurface`](Mx3dGeomCylindricalSurface.md)

返回通过点镜像变换后的新几何对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `P` | [`Mx3dGePoint`](Mx3dGePoint.md) | 点对象。 |

#### Returns

[`Mx3dGeomCylindricalSurface`](Mx3dGeomCylindricalSurface.md)

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

返回圆柱面的半径。

#### Returns

`number`

半径值。

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

▸ **Rotated**(`A1`, `Ang`): [`Mx3dGeomCylindricalSurface`](Mx3dGeomCylindricalSurface.md)

返回旋转后的新几何对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `A1` | [`Mx3dGeAxis`](Mx3dGeAxis.md) | 轴对象。 |
| `Ang` | `number` | 旋转角度。 |

#### Returns

[`Mx3dGeomCylindricalSurface`](Mx3dGeomCylindricalSurface.md)

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

▸ **Scaled**(`P`, `S`): [`Mx3dGeomCylindricalSurface`](Mx3dGeomCylindricalSurface.md)

返回缩放后的新几何对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `P` | [`Mx3dGePoint`](Mx3dGePoint.md) | 点对象。 |
| `S` | `number` | 缩放比例。 |

#### Returns

[`Mx3dGeomCylindricalSurface`](Mx3dGeomCylindricalSurface.md)

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

设置圆柱面的半径。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `R` | `number` | 新的半径值。 |

#### Returns

`void`

___

### Transform

▸ **Transform**(`T`): `void`

应用变换 T 到圆柱面。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `T` | [`Mx3dGeTrsf`](Mx3dGeTrsf.md) | 变换矩阵。 |

#### Returns

`void`

___

### TransformParameters

▸ **TransformParameters**(`UV`, `T`): `void`

变换参数 U 和 V。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `UV` | [dU: number, dV: number] | 原始参数 [dU, dV]。 |
| `T` | [`Mx3dGeTrsf`](Mx3dGeTrsf.md) | 变换矩阵。 |

#### Returns

`void`

#### Overrides

[Mx3dGeomElementarySurface](Mx3dGeomElementarySurface.md).[TransformParameters](Mx3dGeomElementarySurface.md#transformparameters)

___

### Transformed

▸ **Transformed**(`T`): [`Mx3dGeomCylindricalSurface`](Mx3dGeomCylindricalSurface.md)

返回变换后的新几何对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `T` | [`Mx3dGeTrsf`](Mx3dGeTrsf.md) | 变换对象。 |

#### Returns

[`Mx3dGeomCylindricalSurface`](Mx3dGeomCylindricalSurface.md)

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

▸ **TranslatedBy2Points**(`P1`, `P2`): [`Mx3dGeomCylindricalSurface`](Mx3dGeomCylindricalSurface.md)

返回通过两个点平移后的新几何对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `P1` | [`Mx3dGePoint`](Mx3dGePoint.md) | 起始点对象。 |
| `P2` | [`Mx3dGePoint`](Mx3dGePoint.md) | 终止点对象。 |

#### Returns

[`Mx3dGeomCylindricalSurface`](Mx3dGeomCylindricalSurface.md)

新的几何对象。

#### Inherited from

[Mx3dGeomElementarySurface](Mx3dGeomElementarySurface.md).[TranslatedBy2Points](Mx3dGeomElementarySurface.md#translatedby2points)

___

### TranslatedByVec

▸ **TranslatedByVec**(`V`): [`Mx3dGeomCylindricalSurface`](Mx3dGeomCylindricalSurface.md)

返回通过向量平移后的新几何对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `V` | [`Mx3dGeVec`](Mx3dGeVec.md) | 向量对象。 |

#### Returns

[`Mx3dGeomCylindricalSurface`](Mx3dGeomCylindricalSurface.md)

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

▸ **UReversed**(): [`Mx3dGeomCylindricalSurface`](Mx3dGeomCylindricalSurface.md)

反转 U 方向的参数化。

#### Returns

[`Mx3dGeomCylindricalSurface`](Mx3dGeomCylindricalSurface.md)

返回当前对象以实现链式调用。

#### Inherited from

[Mx3dGeomElementarySurface](Mx3dGeomElementarySurface.md).[UReversed](Mx3dGeomElementarySurface.md#ureversed)

___

### UReversedParameter

▸ **UReversedParameter**(`U`): `number`

返回参数 U 在反向圆柱面上的对应参数值。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `U` | `number` | 参数 U。 |

#### Returns

`number`

反向参数值。

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

▸ **VReversed**(): [`Mx3dGeomCylindricalSurface`](Mx3dGeomCylindricalSurface.md)

反转 V 方向的参数化。

#### Returns

[`Mx3dGeomCylindricalSurface`](Mx3dGeomCylindricalSurface.md)

返回当前对象以实现链式调用。

#### Inherited from

[Mx3dGeomElementarySurface](Mx3dGeomElementarySurface.md).[VReversed](Mx3dGeomElementarySurface.md#vreversed)

___

### VReversedParameter

▸ **VReversedParameter**(`V`): `number`

返回参数 V 在反向圆柱面上的对应参数值。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `V` | `number` | 参数 V。 |

#### Returns

`number`

反向参数值。

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

▸ `Static` **DownCast**(`theObject`): [`Mx3dGeomCylindricalSurface`](Mx3dGeomCylindricalSurface.md)

父类对象转 Mx3dGeomCylindricalSurface 类对象

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theObject` | [`Mx3dGeomObject`](Mx3dGeomObject.md) | 父类对象 |

#### Returns

[`Mx3dGeomCylindricalSurface`](Mx3dGeomCylindricalSurface.md)

Mx3dGeomCylindricalSurface 类对象
