[mxcad_3d API 文档](../README.md) / Mx3dGeomElementarySurface

# Class: Mx3dGeomElementarySurface

Mx3dGeomElementarySurface 类是对几何基础表面（Elementary Surface）类的封装，提供了对简单参数方程表面的操作接口。
这些表面包括平面、圆柱、圆锥、球体等。该类继承自 Mx3dGeomSurface，并扩展了相关的几何操作功能。

## Hierarchy

- [`Mx3dGeomSurface`](Mx3dGeomSurface.md)

  ↳ **`Mx3dGeomElementarySurface`**

  ↳↳ [`Mx3dGeomPlane`](Mx3dGeomPlane.md)

  ↳↳ [`Mx3dGeomConicalSurface`](Mx3dGeomConicalSurface.md)

  ↳↳ [`Mx3dGeomCylindricalSurface`](Mx3dGeomCylindricalSurface.md)

  ↳↳ [`Mx3dGeomSphericalSurface`](Mx3dGeomSphericalSurface.md)

  ↳↳ [`Mx3dGeomToroidalSurface`](Mx3dGeomToroidalSurface.md)

## Table of contents

### Methods

- [Axis](Mx3dGeomElementarySurface.md#axis)
- [Continuity](Mx3dGeomElementarySurface.md#continuity)
- [DynCast](Mx3dGeomElementarySurface.md#dyncast)
- [DynamicType](Mx3dGeomElementarySurface.md#dynamictype)
- [IsCNu](Mx3dGeomElementarySurface.md#iscnu)
- [IsCNv](Mx3dGeomElementarySurface.md#iscnv)
- [Location](Mx3dGeomElementarySurface.md#location)
- [MirrorByAxis](Mx3dGeomElementarySurface.md#mirrorbyaxis)
- [MirrorByCSYSR](Mx3dGeomElementarySurface.md#mirrorbycsysr)
- [MirrorByPoint](Mx3dGeomElementarySurface.md#mirrorbypoint)
- [MirroredByAxis](Mx3dGeomElementarySurface.md#mirroredbyaxis)
- [MirroredByCSYSR](Mx3dGeomElementarySurface.md#mirroredbycsysr)
- [MirroredByPoint](Mx3dGeomElementarySurface.md#mirroredbypoint)
- [Position](Mx3dGeomElementarySurface.md#position)
- [Rotate](Mx3dGeomElementarySurface.md#rotate)
- [Rotated](Mx3dGeomElementarySurface.md#rotated)
- [Scale](Mx3dGeomElementarySurface.md#scale)
- [Scaled](Mx3dGeomElementarySurface.md#scaled)
- [SetAxis](Mx3dGeomElementarySurface.md#setaxis)
- [SetLocation](Mx3dGeomElementarySurface.md#setlocation)
- [SetPosition](Mx3dGeomElementarySurface.md#setposition)
- [TransformParameters](Mx3dGeomElementarySurface.md#transformparameters)
- [Transformed](Mx3dGeomElementarySurface.md#transformed)
- [TranslateBy2Points](Mx3dGeomElementarySurface.md#translateby2points)
- [TranslateByVec](Mx3dGeomElementarySurface.md#translatebyvec)
- [TranslatedBy2Points](Mx3dGeomElementarySurface.md#translatedby2points)
- [TranslatedByVec](Mx3dGeomElementarySurface.md#translatedbyvec)
- [UPeriod](Mx3dGeomElementarySurface.md#uperiod)
- [UReverse](Mx3dGeomElementarySurface.md#ureverse)
- [UReversed](Mx3dGeomElementarySurface.md#ureversed)
- [VPeriod](Mx3dGeomElementarySurface.md#vperiod)
- [VReverse](Mx3dGeomElementarySurface.md#vreverse)
- [VReversed](Mx3dGeomElementarySurface.md#vreversed)
- [Value](Mx3dGeomElementarySurface.md#value)

## Methods

### Axis

▸ **Axis**(): [`Mx3dGeAxis`](Mx3dGeAxis.md)

获取表面的主轴（Z轴）。

#### Returns

[`Mx3dGeAxis`](Mx3dGeAxis.md)

表面的主轴定义。

___

### Continuity

▸ **Continuity**(): [`MxGAShapeEnum`](../enums/MdGe.MxGAShapeEnum.md)

返回表面在全局上的连续性（MxGAShapeEnum）。

#### Returns

[`MxGAShapeEnum`](../enums/MdGe.MxGAShapeEnum.md)

表面在全局上的连续性。

___

### DynCast

▸ **DynCast**(`theObject`): [`Mx3dGeomElementarySurface`](Mx3dGeomElementarySurface.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theObject` | [`Mx3dGeomObject`](Mx3dGeomObject.md) |

#### Returns

[`Mx3dGeomElementarySurface`](Mx3dGeomElementarySurface.md)

#### Inherited from

[Mx3dGeomSurface](Mx3dGeomSurface.md).[DynCast](Mx3dGeomSurface.md#dyncast)

___

### DynamicType

▸ **DynamicType**(): `string`

返回对象的动态类型名称。

#### Returns

`string`

对象的类型名称字符串。

#### Overrides

[Mx3dGeomSurface](Mx3dGeomSurface.md).[DynamicType](Mx3dGeomSurface.md#dynamictype)

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

___

### Location

▸ **Location**(): [`Mx3dGePoint`](Mx3dGePoint.md)

获取表面局部坐标系的位置点。

#### Returns

[`Mx3dGePoint`](Mx3dGePoint.md)

表面位置点。

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

[Mx3dGeomSurface](Mx3dGeomSurface.md).[MirrorByAxis](Mx3dGeomSurface.md#mirrorbyaxis)

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

[Mx3dGeomSurface](Mx3dGeomSurface.md).[MirrorByCSYSR](Mx3dGeomSurface.md#mirrorbycsysr)

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

[Mx3dGeomSurface](Mx3dGeomSurface.md).[MirrorByPoint](Mx3dGeomSurface.md#mirrorbypoint)

___

### MirroredByAxis

▸ **MirroredByAxis**(`A1`): [`Mx3dGeomElementarySurface`](Mx3dGeomElementarySurface.md)

返回通过轴镜像变换后的新几何对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `A1` | [`Mx3dGeAxis`](Mx3dGeAxis.md) | 轴对象。 |

#### Returns

[`Mx3dGeomElementarySurface`](Mx3dGeomElementarySurface.md)

新的几何对象。

#### Inherited from

[Mx3dGeomSurface](Mx3dGeomSurface.md).[MirroredByAxis](Mx3dGeomSurface.md#mirroredbyaxis)

___

### MirroredByCSYSR

▸ **MirroredByCSYSR**(`A2`): [`Mx3dGeomElementarySurface`](Mx3dGeomElementarySurface.md)

返回通过右手坐标系镜像变换后的新几何对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `A2` | [`Mx3dGeCSYSR`](Mx3dGeCSYSR.md) | 右手坐标系对象。 |

#### Returns

[`Mx3dGeomElementarySurface`](Mx3dGeomElementarySurface.md)

新的几何对象。

#### Inherited from

[Mx3dGeomSurface](Mx3dGeomSurface.md).[MirroredByCSYSR](Mx3dGeomSurface.md#mirroredbycsysr)

___

### MirroredByPoint

▸ **MirroredByPoint**(`P`): [`Mx3dGeomElementarySurface`](Mx3dGeomElementarySurface.md)

返回通过点镜像变换后的新几何对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `P` | [`Mx3dGePoint`](Mx3dGePoint.md) | 点对象。 |

#### Returns

[`Mx3dGeomElementarySurface`](Mx3dGeomElementarySurface.md)

新的几何对象。

#### Inherited from

[Mx3dGeomSurface](Mx3dGeomSurface.md).[MirroredByPoint](Mx3dGeomSurface.md#mirroredbypoint)

___

### Position

▸ **Position**(): [`Mx3dGeCSYSR`](Mx3dGeCSYSR.md)

获取表面的局部坐标系。

#### Returns

[`Mx3dGeCSYSR`](Mx3dGeCSYSR.md)

表面的局部坐标系。

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

[Mx3dGeomSurface](Mx3dGeomSurface.md).[Rotate](Mx3dGeomSurface.md#rotate)

___

### Rotated

▸ **Rotated**(`A1`, `Ang`): [`Mx3dGeomElementarySurface`](Mx3dGeomElementarySurface.md)

返回旋转后的新几何对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `A1` | [`Mx3dGeAxis`](Mx3dGeAxis.md) | 轴对象。 |
| `Ang` | `number` | 旋转角度。 |

#### Returns

[`Mx3dGeomElementarySurface`](Mx3dGeomElementarySurface.md)

新的几何对象。

#### Inherited from

[Mx3dGeomSurface](Mx3dGeomSurface.md).[Rotated](Mx3dGeomSurface.md#rotated)

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

[Mx3dGeomSurface](Mx3dGeomSurface.md).[Scale](Mx3dGeomSurface.md#scale)

___

### Scaled

▸ **Scaled**(`P`, `S`): [`Mx3dGeomElementarySurface`](Mx3dGeomElementarySurface.md)

返回缩放后的新几何对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `P` | [`Mx3dGePoint`](Mx3dGePoint.md) | 点对象。 |
| `S` | `number` | 缩放比例。 |

#### Returns

[`Mx3dGeomElementarySurface`](Mx3dGeomElementarySurface.md)

新的几何对象。

#### Inherited from

[Mx3dGeomSurface](Mx3dGeomSurface.md).[Scaled](Mx3dGeomSurface.md#scaled)

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

[Mx3dGeomSurface](Mx3dGeomSurface.md).[TransformParameters](Mx3dGeomSurface.md#transformparameters)

___

### Transformed

▸ **Transformed**(`T`): [`Mx3dGeomElementarySurface`](Mx3dGeomElementarySurface.md)

返回变换后的新几何对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `T` | [`Mx3dGeTrsf`](Mx3dGeTrsf.md) | 变换对象。 |

#### Returns

[`Mx3dGeomElementarySurface`](Mx3dGeomElementarySurface.md)

新的几何对象。

#### Inherited from

[Mx3dGeomSurface](Mx3dGeomSurface.md).[Transformed](Mx3dGeomSurface.md#transformed)

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

[Mx3dGeomSurface](Mx3dGeomSurface.md).[TranslateBy2Points](Mx3dGeomSurface.md#translateby2points)

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

[Mx3dGeomSurface](Mx3dGeomSurface.md).[TranslateByVec](Mx3dGeomSurface.md#translatebyvec)

___

### TranslatedBy2Points

▸ **TranslatedBy2Points**(`P1`, `P2`): [`Mx3dGeomElementarySurface`](Mx3dGeomElementarySurface.md)

返回通过两个点平移后的新几何对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `P1` | [`Mx3dGePoint`](Mx3dGePoint.md) | 起始点对象。 |
| `P2` | [`Mx3dGePoint`](Mx3dGePoint.md) | 终止点对象。 |

#### Returns

[`Mx3dGeomElementarySurface`](Mx3dGeomElementarySurface.md)

新的几何对象。

#### Inherited from

[Mx3dGeomSurface](Mx3dGeomSurface.md).[TranslatedBy2Points](Mx3dGeomSurface.md#translatedby2points)

___

### TranslatedByVec

▸ **TranslatedByVec**(`V`): [`Mx3dGeomElementarySurface`](Mx3dGeomElementarySurface.md)

返回通过向量平移后的新几何对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `V` | [`Mx3dGeVec`](Mx3dGeVec.md) | 向量对象。 |

#### Returns

[`Mx3dGeomElementarySurface`](Mx3dGeomElementarySurface.md)

新的几何对象。

#### Inherited from

[Mx3dGeomSurface](Mx3dGeomSurface.md).[TranslatedByVec](Mx3dGeomSurface.md#translatedbyvec)

___

### UPeriod

▸ **UPeriod**(): `number`

返回表面在 U 方向的周期。

#### Returns

`number`

表面在 U 方向的周期。

#### Inherited from

[Mx3dGeomSurface](Mx3dGeomSurface.md).[UPeriod](Mx3dGeomSurface.md#uperiod)

___

### UReverse

▸ **UReverse**(): `void`

反转表面在 U 参数方向上的参数化方向。

#### Returns

`void`

___

### UReversed

▸ **UReversed**(): [`Mx3dGeomElementarySurface`](Mx3dGeomElementarySurface.md)

反转 U 方向的参数化。

#### Returns

[`Mx3dGeomElementarySurface`](Mx3dGeomElementarySurface.md)

返回当前对象以实现链式调用。

#### Inherited from

[Mx3dGeomSurface](Mx3dGeomSurface.md).[UReversed](Mx3dGeomSurface.md#ureversed)

___

### VPeriod

▸ **VPeriod**(): `number`

返回表面在 V 方向的周期。

#### Returns

`number`

表面在 V 方向的周期。

#### Inherited from

[Mx3dGeomSurface](Mx3dGeomSurface.md).[VPeriod](Mx3dGeomSurface.md#vperiod)

___

### VReverse

▸ **VReverse**(): `void`

反转表面在 V 参数方向上的参数化方向。

#### Returns

`void`

___

### VReversed

▸ **VReversed**(): [`Mx3dGeomElementarySurface`](Mx3dGeomElementarySurface.md)

反转 V 方向的参数化。

#### Returns

[`Mx3dGeomElementarySurface`](Mx3dGeomElementarySurface.md)

返回当前对象以实现链式调用。

#### Inherited from

[Mx3dGeomSurface](Mx3dGeomSurface.md).[VReversed](Mx3dGeomSurface.md#vreversed)

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

[Mx3dGeomSurface](Mx3dGeomSurface.md).[Value](Mx3dGeomSurface.md#value)
