[mxcad_3d API 文档](../README.md) / Mx3dGeomBoundedSurface

# Class: Mx3dGeomBoundedSurface

表示一定范围内曲面的基类。

## Hierarchy

- [`Mx3dGeomSurface`](Mx3dGeomSurface.md)

  ↳ **`Mx3dGeomBoundedSurface`**

  ↳↳ [`Mx3dGeomBSplineSurface`](Mx3dGeomBSplineSurface.md)

  ↳↳ [`Mx3dGeomBezierSurface`](Mx3dGeomBezierSurface.md)

## Table of contents

### Methods

- [DynCast](Mx3dGeomBoundedSurface.md#dyncast)
- [DynamicType](Mx3dGeomBoundedSurface.md#dynamictype)
- [MirrorByAxis](Mx3dGeomBoundedSurface.md#mirrorbyaxis)
- [MirrorByCSYSR](Mx3dGeomBoundedSurface.md#mirrorbycsysr)
- [MirrorByPoint](Mx3dGeomBoundedSurface.md#mirrorbypoint)
- [MirroredByAxis](Mx3dGeomBoundedSurface.md#mirroredbyaxis)
- [MirroredByCSYSR](Mx3dGeomBoundedSurface.md#mirroredbycsysr)
- [MirroredByPoint](Mx3dGeomBoundedSurface.md#mirroredbypoint)
- [Rotate](Mx3dGeomBoundedSurface.md#rotate)
- [Rotated](Mx3dGeomBoundedSurface.md#rotated)
- [Scale](Mx3dGeomBoundedSurface.md#scale)
- [Scaled](Mx3dGeomBoundedSurface.md#scaled)
- [TransformParameters](Mx3dGeomBoundedSurface.md#transformparameters)
- [Transformed](Mx3dGeomBoundedSurface.md#transformed)
- [TranslateBy2Points](Mx3dGeomBoundedSurface.md#translateby2points)
- [TranslateByVec](Mx3dGeomBoundedSurface.md#translatebyvec)
- [TranslatedBy2Points](Mx3dGeomBoundedSurface.md#translatedby2points)
- [TranslatedByVec](Mx3dGeomBoundedSurface.md#translatedbyvec)
- [UPeriod](Mx3dGeomBoundedSurface.md#uperiod)
- [UReversed](Mx3dGeomBoundedSurface.md#ureversed)
- [VPeriod](Mx3dGeomBoundedSurface.md#vperiod)
- [VReversed](Mx3dGeomBoundedSurface.md#vreversed)
- [Value](Mx3dGeomBoundedSurface.md#value)

## Methods

### DynCast

▸ **DynCast**(`theObject`): [`Mx3dGeomBoundedSurface`](Mx3dGeomBoundedSurface.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theObject` | [`Mx3dGeomObject`](Mx3dGeomObject.md) |

#### Returns

[`Mx3dGeomBoundedSurface`](Mx3dGeomBoundedSurface.md)

#### Inherited from

[Mx3dGeomSurface](Mx3dGeomSurface.md).[DynCast](Mx3dGeomSurface.md#dyncast)

___

### DynamicType

▸ **DynamicType**(): `string`

返回对象的动态类型字符串。

#### Returns

`string`

动态类型字符串。

#### Overrides

[Mx3dGeomSurface](Mx3dGeomSurface.md).[DynamicType](Mx3dGeomSurface.md#dynamictype)

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

▸ **MirroredByAxis**(`A1`): [`Mx3dGeomBoundedSurface`](Mx3dGeomBoundedSurface.md)

返回通过轴镜像变换后的新几何对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `A1` | [`Mx3dGeAxis`](Mx3dGeAxis.md) | 轴对象。 |

#### Returns

[`Mx3dGeomBoundedSurface`](Mx3dGeomBoundedSurface.md)

新的几何对象。

#### Inherited from

[Mx3dGeomSurface](Mx3dGeomSurface.md).[MirroredByAxis](Mx3dGeomSurface.md#mirroredbyaxis)

___

### MirroredByCSYSR

▸ **MirroredByCSYSR**(`A2`): [`Mx3dGeomBoundedSurface`](Mx3dGeomBoundedSurface.md)

返回通过右手坐标系镜像变换后的新几何对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `A2` | [`Mx3dGeCSYSR`](Mx3dGeCSYSR.md) | 右手坐标系对象。 |

#### Returns

[`Mx3dGeomBoundedSurface`](Mx3dGeomBoundedSurface.md)

新的几何对象。

#### Inherited from

[Mx3dGeomSurface](Mx3dGeomSurface.md).[MirroredByCSYSR](Mx3dGeomSurface.md#mirroredbycsysr)

___

### MirroredByPoint

▸ **MirroredByPoint**(`P`): [`Mx3dGeomBoundedSurface`](Mx3dGeomBoundedSurface.md)

返回通过点镜像变换后的新几何对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `P` | [`Mx3dGePoint`](Mx3dGePoint.md) | 点对象。 |

#### Returns

[`Mx3dGeomBoundedSurface`](Mx3dGeomBoundedSurface.md)

新的几何对象。

#### Inherited from

[Mx3dGeomSurface](Mx3dGeomSurface.md).[MirroredByPoint](Mx3dGeomSurface.md#mirroredbypoint)

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

▸ **Rotated**(`A1`, `Ang`): [`Mx3dGeomBoundedSurface`](Mx3dGeomBoundedSurface.md)

返回旋转后的新几何对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `A1` | [`Mx3dGeAxis`](Mx3dGeAxis.md) | 轴对象。 |
| `Ang` | `number` | 旋转角度。 |

#### Returns

[`Mx3dGeomBoundedSurface`](Mx3dGeomBoundedSurface.md)

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

▸ **Scaled**(`P`, `S`): [`Mx3dGeomBoundedSurface`](Mx3dGeomBoundedSurface.md)

返回缩放后的新几何对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `P` | [`Mx3dGePoint`](Mx3dGePoint.md) | 点对象。 |
| `S` | `number` | 缩放比例。 |

#### Returns

[`Mx3dGeomBoundedSurface`](Mx3dGeomBoundedSurface.md)

新的几何对象。

#### Inherited from

[Mx3dGeomSurface](Mx3dGeomSurface.md).[Scaled](Mx3dGeomSurface.md#scaled)

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

▸ **Transformed**(`T`): [`Mx3dGeomBoundedSurface`](Mx3dGeomBoundedSurface.md)

返回变换后的新几何对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `T` | [`Mx3dGeTrsf`](Mx3dGeTrsf.md) | 变换对象。 |

#### Returns

[`Mx3dGeomBoundedSurface`](Mx3dGeomBoundedSurface.md)

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

▸ **TranslatedBy2Points**(`P1`, `P2`): [`Mx3dGeomBoundedSurface`](Mx3dGeomBoundedSurface.md)

返回通过两个点平移后的新几何对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `P1` | [`Mx3dGePoint`](Mx3dGePoint.md) | 起始点对象。 |
| `P2` | [`Mx3dGePoint`](Mx3dGePoint.md) | 终止点对象。 |

#### Returns

[`Mx3dGeomBoundedSurface`](Mx3dGeomBoundedSurface.md)

新的几何对象。

#### Inherited from

[Mx3dGeomSurface](Mx3dGeomSurface.md).[TranslatedBy2Points](Mx3dGeomSurface.md#translatedby2points)

___

### TranslatedByVec

▸ **TranslatedByVec**(`V`): [`Mx3dGeomBoundedSurface`](Mx3dGeomBoundedSurface.md)

返回通过向量平移后的新几何对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `V` | [`Mx3dGeVec`](Mx3dGeVec.md) | 向量对象。 |

#### Returns

[`Mx3dGeomBoundedSurface`](Mx3dGeomBoundedSurface.md)

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

### UReversed

▸ **UReversed**(): [`Mx3dGeomBoundedSurface`](Mx3dGeomBoundedSurface.md)

反转 U 方向的参数化。

#### Returns

[`Mx3dGeomBoundedSurface`](Mx3dGeomBoundedSurface.md)

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

### VReversed

▸ **VReversed**(): [`Mx3dGeomBoundedSurface`](Mx3dGeomBoundedSurface.md)

反转 V 方向的参数化。

#### Returns

[`Mx3dGeomBoundedSurface`](Mx3dGeomBoundedSurface.md)

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
