[mxcad_3d API 文档](../README.md) / Mx3dGeomPlane

# Class: Mx3dGeomPlane

Mx3dGeomPlane 类，提供描述和操作3D空间中平面的功能。
一个平面由坐标系 (Mx3dGeCSYSR) 定义，可以通过其法向量、原点和参数方向来描述。

## Hierarchy

- [`Mx3dGeomElementarySurface`](Mx3dGeomElementarySurface.md)

  ↳ **`Mx3dGeomPlane`**

## Table of contents

### Constructors

- [constructor](Mx3dGeomPlane.md#constructor)

### Methods

- [Axis](Mx3dGeomPlane.md#axis)
- [Bounds](Mx3dGeomPlane.md#bounds)
- [Coefficients](Mx3dGeomPlane.md#coefficients)
- [Continuity](Mx3dGeomPlane.md#continuity)
- [Copy](Mx3dGeomPlane.md#copy)
- [D0](Mx3dGeomPlane.md#d0)
- [D1](Mx3dGeomPlane.md#d1)
- [D2](Mx3dGeomPlane.md#d2)
- [D3](Mx3dGeomPlane.md#d3)
- [DN](Mx3dGeomPlane.md#dn)
- [DynamicType](Mx3dGeomPlane.md#dynamictype)
- [Face](Mx3dGeomPlane.md#face)
- [IsCNu](Mx3dGeomPlane.md#iscnu)
- [IsCNv](Mx3dGeomPlane.md#iscnv)
- [IsUClosed](Mx3dGeomPlane.md#isuclosed)
- [IsUPeriodic](Mx3dGeomPlane.md#isuperiodic)
- [IsVClosed](Mx3dGeomPlane.md#isvclosed)
- [IsVPeriodic](Mx3dGeomPlane.md#isvperiodic)
- [Location](Mx3dGeomPlane.md#location)
- [MirrorByAxis](Mx3dGeomPlane.md#mirrorbyaxis)
- [MirrorByCSYSR](Mx3dGeomPlane.md#mirrorbycsysr)
- [MirrorByPoint](Mx3dGeomPlane.md#mirrorbypoint)
- [MirroredByAxis](Mx3dGeomPlane.md#mirroredbyaxis)
- [MirroredByCSYSR](Mx3dGeomPlane.md#mirroredbycsysr)
- [MirroredByPoint](Mx3dGeomPlane.md#mirroredbypoint)
- [Position](Mx3dGeomPlane.md#position)
- [Rotate](Mx3dGeomPlane.md#rotate)
- [Rotated](Mx3dGeomPlane.md#rotated)
- [Scale](Mx3dGeomPlane.md#scale)
- [Scaled](Mx3dGeomPlane.md#scaled)
- [SetAxis](Mx3dGeomPlane.md#setaxis)
- [SetLocation](Mx3dGeomPlane.md#setlocation)
- [SetPosition](Mx3dGeomPlane.md#setposition)
- [Transform](Mx3dGeomPlane.md#transform)
- [TransformParameters](Mx3dGeomPlane.md#transformparameters)
- [Transformed](Mx3dGeomPlane.md#transformed)
- [TranslateBy2Points](Mx3dGeomPlane.md#translateby2points)
- [TranslateByVec](Mx3dGeomPlane.md#translatebyvec)
- [TranslatedBy2Points](Mx3dGeomPlane.md#translatedby2points)
- [TranslatedByVec](Mx3dGeomPlane.md#translatedbyvec)
- [UPeriod](Mx3dGeomPlane.md#uperiod)
- [UReverse](Mx3dGeomPlane.md#ureverse)
- [UReversed](Mx3dGeomPlane.md#ureversed)
- [UReversedParameter](Mx3dGeomPlane.md#ureversedparameter)
- [VPeriod](Mx3dGeomPlane.md#vperiod)
- [VReverse](Mx3dGeomPlane.md#vreverse)
- [VReversed](Mx3dGeomPlane.md#vreversed)
- [VReversedParameter](Mx3dGeomPlane.md#vreversedparameter)
- [Value](Mx3dGeomPlane.md#value)
- [DownCast](Mx3dGeomPlane.md#downcast)

## Constructors

### constructor

• **new Mx3dGeomPlane**(`A3`)

根据指定的轴向位置构造一个位于3D空间中的平面。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `A3` | [`Mx3dGeCSYSR`](Mx3dGeCSYSR.md) | 定义平面位置和方向的坐标系 (Mx3dGeCSYSR)。 |

#### Overrides

Mx3dGeomElementarySurface.constructor

• **new Mx3dGeomPlane**(`P`, `V`)

根据一个点和法向量构造一个平面。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `P` | `UniPoint` | 平面的原点。 |
| `V` | `UniDir` | 法向量，指向平面的方向。 |

#### Overrides

Mx3dGeomElementarySurface.constructor

• **new Mx3dGeomPlane**(`A`, `B`, `C`, `D`)

根据平面方程的系数构造一个平面。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `A` | `number` | 方程 Ax + By + Cz + D = 0 的系数 A。 |
| `B` | `number` | 方程 Ax + By + Cz + D = 0 的系数 B。 |
| `C` | `number` | 方程 Ax + By + Cz + D = 0 的系数 C。 |
| `D` | `number` | 方程 Ax + By + Cz + D = 0 的系数 D。 |

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

计算平面的参数范围。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `U1U2V1V2` | [dU1: number, dU2: number, dV1: number, dV2: number] | 参数范围数组 [dU1, dU2, dV1, dV2]。 |

#### Returns

`void`

___

### Coefficients

▸ **Coefficients**(`ABCD`): `void`

计算平面方程的系数。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ABCD` | [dA: number, dB: number, dC: number, dD: number] | 系数数组 [dA, dB, dC, dD]。 |

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

创建一个新的对象，作为该平面的副本。

#### Returns

[`Mx3dGeomObject`](Mx3dGeomObject.md)

返回新的平面对象 (Mx3dGeomObject)。

___

### D0

▸ **D0**(`U`, `V`, `P`): `void`

计算在指定的 U 和 V 参数值处的点。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `U` | `number` | U 参数值。 |
| `V` | `number` | V 参数值。 |
| `P` | [`Mx3dGePoint`](Mx3dGePoint.md) | 用于存储计算点的目标对象 (Mx3dGePoint)。 计算公式为 P = O + U * XDir + V * YDir， 其中 O 为平面的原点，XDir 和 YDir 分别是 U 和 V 参数方向的基向量。 |

#### Returns

`void`

___

### D1

▸ **D1**(`U`, `V`, `P`, `D1U`, `D1V`): `void`

计算在指定的 U 和 V 参数值处的点及其一阶导数。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `U` | `number` | U 参数值。 |
| `V` | `number` | V 参数值。 |
| `P` | [`Mx3dGePoint`](Mx3dGePoint.md) | 用于存储计算点的目标对象 (Mx3dGePoint)。 |
| `D1U` | [`Mx3dGeVec`](Mx3dGeVec.md) | 用于存储 U 方向第一导数的目标对象 (Mx3dGeVec)。 |
| `D1V` | [`Mx3dGeVec`](Mx3dGeVec.md) | 用于存储 V 方向第一导数的目标对象 (Mx3dGeVec)。 计算公式为： - 点：P = O + U * XDir + V * YDir。 - 第一导数：D1U 和 D1V 分别为 XDir 和 YDir 的偏导数。 |

#### Returns

`void`

___

### D2

▸ **D2**(`U`, `V`, `P`, `D1U`, `D1V`, `D2U`, `D2V`, `D2UV`): `void`

计算在指定的 U 和 V 参数值处的点、第一阶和第二阶导数。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `U` | `number` | U 参数值。 |
| `V` | `number` | V 参数值。 |
| `P` | [`Mx3dGePoint`](Mx3dGePoint.md) | 用于存储计算点的目标对象 (Mx3dGePoint)。 |
| `D1U` | [`Mx3dGeVec`](Mx3dGeVec.md) | 用于存储 U 方向第一导数的目标对象 (Mx3dGeVec)。 |
| `D1V` | [`Mx3dGeVec`](Mx3dGeVec.md) | 用于存储 V 方向第一导数的目标对象 (Mx3dGeVec)。 |
| `D2U` | [`Mx3dGeVec`](Mx3dGeVec.md) | 用于存储 U 方向第二导数的目标对象 (Mx3dGeVec)。 |
| `D2V` | [`Mx3dGeVec`](Mx3dGeVec.md) | 用于存储 V 方向第二导数的目标对象 (Mx3dGeVec)。 |
| `D2UV` | [`Mx3dGeVec`](Mx3dGeVec.md) | 用于存储 UV 方向第二导数的目标对象 (Mx3dGeVec)。 计算公式为： - 点：P = O + U * XDir + V * YDir。 - 第一导数：D1U 和 D1V 分别为 XDir 和 YDir 的偏导数。 - 第二导数：D2U、D2V 和 D2UV 为二阶偏导数。 |

#### Returns

`void`

___

### D3

▸ **D3**(`U`, `V`, `P`, `D1U`, `D1V`, `D2U`, `D2V`, `D2UV`, `D3U`, `D3V`, `D3UUV`, `D3UVV`): `void`

计算在指定的 U 和 V 参数值处的点、第一、第二和第三阶导数。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `U` | `number` | U 参数值。 |
| `V` | `number` | V 参数值。 |
| `P` | [`Mx3dGePoint`](Mx3dGePoint.md) | 用于存储计算点的目标对象 (Mx3dGePoint)。 |
| `D1U` | [`Mx3dGeVec`](Mx3dGeVec.md) | 用于存储 U 方向第一导数的目标对象 (Mx3dGeVec)。 |
| `D1V` | [`Mx3dGeVec`](Mx3dGeVec.md) | 用于存储 V 方向第一导数的目标对象 (Mx3dGeVec)。 |
| `D2U` | [`Mx3dGeVec`](Mx3dGeVec.md) | 用于存储 U 方向第二导数的目标对象 (Mx3dGeVec)。 |
| `D2V` | [`Mx3dGeVec`](Mx3dGeVec.md) | 用于存储 V 方向第二导数的目标对象 (Mx3dGeVec)。 |
| `D2UV` | [`Mx3dGeVec`](Mx3dGeVec.md) | 用于存储 UV 方向第二导数的目标对象 (Mx3dGeVec)。 |
| `D3U` | [`Mx3dGeVec`](Mx3dGeVec.md) | 用于存储 U 方向第三导数的目标对象 (Mx3dGeVec)。 |
| `D3V` | [`Mx3dGeVec`](Mx3dGeVec.md) | 用于存储 V 方向第三导数的目标对象 (Mx3dGeVec)。 |
| `D3UUV` | [`Mx3dGeVec`](Mx3dGeVec.md) | 用于存储 UUU 方向第三导数的目标对象 (Mx3dGeVec)。 |
| `D3UVV` | [`Mx3dGeVec`](Mx3dGeVec.md) | 用于存储 UVV 方向第三导数的目标对象 (Mx3dGeVec)。 计算公式为： - 点：P = O + U * XDir + V * YDir。 - 第一导数：D1U 和 D1V 分别为 XDir 和 YDir 的偏导数。 - 第二导数：D2U、D2V 和 D2UV 为二阶偏导数。 - 第三导数：D3U、D3V、D3UUV 和 D3UVV 为三阶偏导数。 |

#### Returns

`void`

___

### DN

▸ **DN**(`U`, `V`, `Nu`, `Nv`): [`Mx3dGeVec`](Mx3dGeVec.md)

计算在指定的 U 和 V 参数值处的指定阶数的导数。

**`Throws`**

错误：如果 Nu + Nv < 1 或 Nu < 0 或 Nv < 0，则抛出异常。
计算公式为计算指定阶数的偏导数，返回对应的向量。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `U` | `number` | U 参数值。 |
| `V` | `number` | V 参数值。 |
| `Nu` | `number` | U 方向的导数阶数。 |
| `Nv` | `number` | V 方向的导数阶数。 |

#### Returns

[`Mx3dGeVec`](Mx3dGeVec.md)

返回计算的向量对象 (Mx3dGeVec)。

___

### DynamicType

▸ **DynamicType**(): `string`

返回对象的动态类型字符串。

#### Returns

`string`

类型名称字符串。

#### Overrides

[Mx3dGeomElementarySurface](Mx3dGeomElementarySurface.md).[DynamicType](Mx3dGeomElementarySurface.md#dynamictype)

___

### Face

▸ **Face**(`TolDegen`): [`Mx3dShapeFace`](Mx3dShapeFace.md)

根据公差生成一个平面面。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `TolDegen` | `number` | 公差值。 |

#### Returns

[`Mx3dShapeFace`](Mx3dShapeFace.md)

生成的平面面 (Mx3dShapeFace)。

▸ **Face**(`W`, `Inside`): [`Mx3dShapeFace`](Mx3dShapeFace.md)

根据给定的轮廓线和是否在内部生成一个平面面。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `W` | [`Mx3dShapeWire`](Mx3dShapeWire.md) | 轮廓线 (Mx3dShapeWire)。 |
| `Inside` | `boolean` | 是否在内部。 |

#### Returns

[`Mx3dShapeFace`](Mx3dShapeFace.md)

生成的平面面 (Mx3dShapeFace)。

▸ **Face**(`UMin`, `UMax`, `VMin`, `VMax`, `TolDegen`): [`Mx3dShapeFace`](Mx3dShapeFace.md)

根据 U 和 V 范围以及公差生成一个平面面。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `UMin` | `number` | U 方向的最小值。 |
| `UMax` | `number` | U 方向的最大值。 |
| `VMin` | `number` | V 方向的最小值。 |
| `VMax` | `number` | V 方向的最大值。 |
| `TolDegen` | `number` | 公差值。 |

#### Returns

[`Mx3dShapeFace`](Mx3dShapeFace.md)

生成的平面面 (Mx3dShapeFace)。

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

判断平面在 U 方向上是否闭合。

#### Returns

`boolean`

返回 false。

___

### IsUPeriodic

▸ **IsUPeriodic**(): `boolean`

判断平面在 U 方向上是否周期性。

#### Returns

`boolean`

返回 false。

___

### IsVClosed

▸ **IsVClosed**(): `boolean`

判断平面在 V 方向上是否闭合。

#### Returns

`boolean`

返回 false。

___

### IsVPeriodic

▸ **IsVPeriodic**(): `boolean`

判断平面在 V 方向上是否周期性。

#### Returns

`boolean`

返回 false。

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

▸ **MirroredByAxis**(`A1`): [`Mx3dGeomPlane`](Mx3dGeomPlane.md)

返回通过轴镜像变换后的新几何对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `A1` | [`Mx3dGeAxis`](Mx3dGeAxis.md) | 轴对象。 |

#### Returns

[`Mx3dGeomPlane`](Mx3dGeomPlane.md)

新的几何对象。

#### Inherited from

[Mx3dGeomElementarySurface](Mx3dGeomElementarySurface.md).[MirroredByAxis](Mx3dGeomElementarySurface.md#mirroredbyaxis)

___

### MirroredByCSYSR

▸ **MirroredByCSYSR**(`A2`): [`Mx3dGeomPlane`](Mx3dGeomPlane.md)

返回通过右手坐标系镜像变换后的新几何对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `A2` | [`Mx3dGeCSYSR`](Mx3dGeCSYSR.md) | 右手坐标系对象。 |

#### Returns

[`Mx3dGeomPlane`](Mx3dGeomPlane.md)

新的几何对象。

#### Inherited from

[Mx3dGeomElementarySurface](Mx3dGeomElementarySurface.md).[MirroredByCSYSR](Mx3dGeomElementarySurface.md#mirroredbycsysr)

___

### MirroredByPoint

▸ **MirroredByPoint**(`P`): [`Mx3dGeomPlane`](Mx3dGeomPlane.md)

返回通过点镜像变换后的新几何对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `P` | [`Mx3dGePoint`](Mx3dGePoint.md) | 点对象。 |

#### Returns

[`Mx3dGeomPlane`](Mx3dGeomPlane.md)

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

▸ **Rotated**(`A1`, `Ang`): [`Mx3dGeomPlane`](Mx3dGeomPlane.md)

返回旋转后的新几何对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `A1` | [`Mx3dGeAxis`](Mx3dGeAxis.md) | 轴对象。 |
| `Ang` | `number` | 旋转角度。 |

#### Returns

[`Mx3dGeomPlane`](Mx3dGeomPlane.md)

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

▸ **Scaled**(`P`, `S`): [`Mx3dGeomPlane`](Mx3dGeomPlane.md)

返回缩放后的新几何对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `P` | [`Mx3dGePoint`](Mx3dGePoint.md) | 点对象。 |
| `S` | `number` | 缩放比例。 |

#### Returns

[`Mx3dGeomPlane`](Mx3dGeomPlane.md)

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

### Transform

▸ **Transform**(`T`): `void`

应用变换 T 到平面上。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `T` | [`Mx3dGeTrsf`](Mx3dGeTrsf.md) | 变换 (Mx3dGeTrsf)。 |

#### Returns

`void`

___

### TransformParameters

▸ **TransformParameters**(`UV`, `T`): `void`

将 U 和 V 参数以及变换 T 应用于平面。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `UV` | [dU: number, dV: number] | 参数值数组 [dU, dV]。 |
| `T` | [`Mx3dGeTrsf`](Mx3dGeTrsf.md) | 变换 (Mx3dGeTrsf)。 |

#### Returns

`void`

#### Overrides

[Mx3dGeomElementarySurface](Mx3dGeomElementarySurface.md).[TransformParameters](Mx3dGeomElementarySurface.md#transformparameters)

___

### Transformed

▸ **Transformed**(`T`): [`Mx3dGeomPlane`](Mx3dGeomPlane.md)

返回变换后的新几何对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `T` | [`Mx3dGeTrsf`](Mx3dGeTrsf.md) | 变换对象。 |

#### Returns

[`Mx3dGeomPlane`](Mx3dGeomPlane.md)

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

▸ **TranslatedBy2Points**(`P1`, `P2`): [`Mx3dGeomPlane`](Mx3dGeomPlane.md)

返回通过两个点平移后的新几何对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `P1` | [`Mx3dGePoint`](Mx3dGePoint.md) | 起始点对象。 |
| `P2` | [`Mx3dGePoint`](Mx3dGePoint.md) | 终止点对象。 |

#### Returns

[`Mx3dGeomPlane`](Mx3dGeomPlane.md)

新的几何对象。

#### Inherited from

[Mx3dGeomElementarySurface](Mx3dGeomElementarySurface.md).[TranslatedBy2Points](Mx3dGeomElementarySurface.md#translatedby2points)

___

### TranslatedByVec

▸ **TranslatedByVec**(`V`): [`Mx3dGeomPlane`](Mx3dGeomPlane.md)

返回通过向量平移后的新几何对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `V` | [`Mx3dGeVec`](Mx3dGeVec.md) | 向量对象。 |

#### Returns

[`Mx3dGeomPlane`](Mx3dGeomPlane.md)

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

翻转平面在 U 参数方向上的方向。

#### Returns

`void`

#### Overrides

[Mx3dGeomElementarySurface](Mx3dGeomElementarySurface.md).[UReverse](Mx3dGeomElementarySurface.md#ureverse)

___

### UReversed

▸ **UReversed**(): [`Mx3dGeomPlane`](Mx3dGeomPlane.md)

反转 U 方向的参数化。

#### Returns

[`Mx3dGeomPlane`](Mx3dGeomPlane.md)

返回当前对象以实现链式调用。

#### Inherited from

[Mx3dGeomElementarySurface](Mx3dGeomElementarySurface.md).[UReversed](Mx3dGeomElementarySurface.md#ureversed)

___

### UReversedParameter

▸ **UReversedParameter**(`U`): `number`

计算在平面翻转 U 参数方向后的 U 参数值。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `U` | `number` | 原始的 U 参数。 |

#### Returns

`number`

翻转后的 U 参数。

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

翻转平面在 V 参数方向上的方向。

#### Returns

`void`

#### Overrides

[Mx3dGeomElementarySurface](Mx3dGeomElementarySurface.md).[VReverse](Mx3dGeomElementarySurface.md#vreverse)

___

### VReversed

▸ **VReversed**(): [`Mx3dGeomPlane`](Mx3dGeomPlane.md)

反转 V 方向的参数化。

#### Returns

[`Mx3dGeomPlane`](Mx3dGeomPlane.md)

返回当前对象以实现链式调用。

#### Inherited from

[Mx3dGeomElementarySurface](Mx3dGeomElementarySurface.md).[VReversed](Mx3dGeomElementarySurface.md#vreversed)

___

### VReversedParameter

▸ **VReversedParameter**(`V`): `number`

计算在平面翻转 V 参数方向后的 V 参数值。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `V` | `number` | 原始的 V 参数。 |

#### Returns

`number`

翻转后的 V 参数。

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

▸ `Static` **DownCast**(`theObject`): [`Mx3dGeomPlane`](Mx3dGeomPlane.md)

父类对象转 Mx3dGeomPlane 类对象

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theObject` | [`Mx3dGeomObject`](Mx3dGeomObject.md) | 父类对象 |

#### Returns

[`Mx3dGeomPlane`](Mx3dGeomPlane.md)

Mx3dGeomPlane 类对象
