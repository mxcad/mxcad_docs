[mxcad_3d API 文档](../README.md) / Mx3dGeomSurface

# Class: Mx3dGeomSurface

Mx3dGeomSurface 类，提供了 3D 表面操作的方法。

## Hierarchy

- [`Mx3dGeomObject`](Mx3dGeomObject.md)

  ↳ **`Mx3dGeomSurface`**

  ↳↳ [`Mx3dGeomElementarySurface`](Mx3dGeomElementarySurface.md)

  ↳↳ [`Mx3dGeomBoundedSurface`](Mx3dGeomBoundedSurface.md)

## Table of contents

### Methods

- [DynCast](Mx3dGeomSurface.md#dyncast)
- [DynamicType](Mx3dGeomSurface.md#dynamictype)
- [MirrorByAxis](Mx3dGeomSurface.md#mirrorbyaxis)
- [MirrorByCSYSR](Mx3dGeomSurface.md#mirrorbycsysr)
- [MirrorByPoint](Mx3dGeomSurface.md#mirrorbypoint)
- [MirroredByAxis](Mx3dGeomSurface.md#mirroredbyaxis)
- [MirroredByCSYSR](Mx3dGeomSurface.md#mirroredbycsysr)
- [MirroredByPoint](Mx3dGeomSurface.md#mirroredbypoint)
- [Rotate](Mx3dGeomSurface.md#rotate)
- [Rotated](Mx3dGeomSurface.md#rotated)
- [Scale](Mx3dGeomSurface.md#scale)
- [Scaled](Mx3dGeomSurface.md#scaled)
- [TransformParameters](Mx3dGeomSurface.md#transformparameters)
- [Transformed](Mx3dGeomSurface.md#transformed)
- [TranslateBy2Points](Mx3dGeomSurface.md#translateby2points)
- [TranslateByVec](Mx3dGeomSurface.md#translatebyvec)
- [TranslatedBy2Points](Mx3dGeomSurface.md#translatedby2points)
- [TranslatedByVec](Mx3dGeomSurface.md#translatedbyvec)
- [UPeriod](Mx3dGeomSurface.md#uperiod)
- [UReversed](Mx3dGeomSurface.md#ureversed)
- [VPeriod](Mx3dGeomSurface.md#vperiod)
- [VReversed](Mx3dGeomSurface.md#vreversed)
- [Value](Mx3dGeomSurface.md#value)

## Methods

### DynCast

▸ **DynCast**(`theObject`): [`Mx3dGeomSurface`](Mx3dGeomSurface.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theObject` | [`Mx3dGeomObject`](Mx3dGeomObject.md) |

#### Returns

[`Mx3dGeomSurface`](Mx3dGeomSurface.md)

#### Inherited from

[Mx3dGeomObject](Mx3dGeomObject.md).[DynCast](Mx3dGeomObject.md#dyncast)

___

### DynamicType

▸ **DynamicType**(): `string`

返回对象的动态类型。

#### Returns

`string`

动态类型的字符串表示。

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

[Mx3dGeomObject](Mx3dGeomObject.md).[MirrorByAxis](Mx3dGeomObject.md#mirrorbyaxis)

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

[Mx3dGeomObject](Mx3dGeomObject.md).[MirrorByCSYSR](Mx3dGeomObject.md#mirrorbycsysr)

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

[Mx3dGeomObject](Mx3dGeomObject.md).[MirrorByPoint](Mx3dGeomObject.md#mirrorbypoint)

___

### MirroredByAxis

▸ **MirroredByAxis**(`A1`): [`Mx3dGeomSurface`](Mx3dGeomSurface.md)

返回通过轴镜像变换后的新几何对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `A1` | [`Mx3dGeAxis`](Mx3dGeAxis.md) | 轴对象。 |

#### Returns

[`Mx3dGeomSurface`](Mx3dGeomSurface.md)

新的几何对象。

#### Inherited from

[Mx3dGeomObject](Mx3dGeomObject.md).[MirroredByAxis](Mx3dGeomObject.md#mirroredbyaxis)

___

### MirroredByCSYSR

▸ **MirroredByCSYSR**(`A2`): [`Mx3dGeomSurface`](Mx3dGeomSurface.md)

返回通过右手坐标系镜像变换后的新几何对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `A2` | [`Mx3dGeCSYSR`](Mx3dGeCSYSR.md) | 右手坐标系对象。 |

#### Returns

[`Mx3dGeomSurface`](Mx3dGeomSurface.md)

新的几何对象。

#### Inherited from

[Mx3dGeomObject](Mx3dGeomObject.md).[MirroredByCSYSR](Mx3dGeomObject.md#mirroredbycsysr)

___

### MirroredByPoint

▸ **MirroredByPoint**(`P`): [`Mx3dGeomSurface`](Mx3dGeomSurface.md)

返回通过点镜像变换后的新几何对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `P` | [`Mx3dGePoint`](Mx3dGePoint.md) | 点对象。 |

#### Returns

[`Mx3dGeomSurface`](Mx3dGeomSurface.md)

新的几何对象。

#### Inherited from

[Mx3dGeomObject](Mx3dGeomObject.md).[MirroredByPoint](Mx3dGeomObject.md#mirroredbypoint)

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

[Mx3dGeomObject](Mx3dGeomObject.md).[Rotate](Mx3dGeomObject.md#rotate)

___

### Rotated

▸ **Rotated**(`A1`, `Ang`): [`Mx3dGeomSurface`](Mx3dGeomSurface.md)

返回旋转后的新几何对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `A1` | [`Mx3dGeAxis`](Mx3dGeAxis.md) | 轴对象。 |
| `Ang` | `number` | 旋转角度。 |

#### Returns

[`Mx3dGeomSurface`](Mx3dGeomSurface.md)

新的几何对象。

#### Inherited from

[Mx3dGeomObject](Mx3dGeomObject.md).[Rotated](Mx3dGeomObject.md#rotated)

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

[Mx3dGeomObject](Mx3dGeomObject.md).[Scale](Mx3dGeomObject.md#scale)

___

### Scaled

▸ **Scaled**(`P`, `S`): [`Mx3dGeomSurface`](Mx3dGeomSurface.md)

返回缩放后的新几何对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `P` | [`Mx3dGePoint`](Mx3dGePoint.md) | 点对象。 |
| `S` | `number` | 缩放比例。 |

#### Returns

[`Mx3dGeomSurface`](Mx3dGeomSurface.md)

新的几何对象。

#### Inherited from

[Mx3dGeomObject](Mx3dGeomObject.md).[Scaled](Mx3dGeomObject.md#scaled)

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

___

### Transformed

▸ **Transformed**(`T`): [`Mx3dGeomSurface`](Mx3dGeomSurface.md)

返回变换后的新几何对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `T` | [`Mx3dGeTrsf`](Mx3dGeTrsf.md) | 变换对象。 |

#### Returns

[`Mx3dGeomSurface`](Mx3dGeomSurface.md)

新的几何对象。

#### Inherited from

[Mx3dGeomObject](Mx3dGeomObject.md).[Transformed](Mx3dGeomObject.md#transformed)

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

[Mx3dGeomObject](Mx3dGeomObject.md).[TranslateBy2Points](Mx3dGeomObject.md#translateby2points)

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

[Mx3dGeomObject](Mx3dGeomObject.md).[TranslateByVec](Mx3dGeomObject.md#translatebyvec)

___

### TranslatedBy2Points

▸ **TranslatedBy2Points**(`P1`, `P2`): [`Mx3dGeomSurface`](Mx3dGeomSurface.md)

返回通过两个点平移后的新几何对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `P1` | [`Mx3dGePoint`](Mx3dGePoint.md) | 起始点对象。 |
| `P2` | [`Mx3dGePoint`](Mx3dGePoint.md) | 终止点对象。 |

#### Returns

[`Mx3dGeomSurface`](Mx3dGeomSurface.md)

新的几何对象。

#### Inherited from

[Mx3dGeomObject](Mx3dGeomObject.md).[TranslatedBy2Points](Mx3dGeomObject.md#translatedby2points)

___

### TranslatedByVec

▸ **TranslatedByVec**(`V`): [`Mx3dGeomSurface`](Mx3dGeomSurface.md)

返回通过向量平移后的新几何对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `V` | [`Mx3dGeVec`](Mx3dGeVec.md) | 向量对象。 |

#### Returns

[`Mx3dGeomSurface`](Mx3dGeomSurface.md)

新的几何对象。

#### Inherited from

[Mx3dGeomObject](Mx3dGeomObject.md).[TranslatedByVec](Mx3dGeomObject.md#translatedbyvec)

___

### UPeriod

▸ **UPeriod**(): `number`

返回表面在 U 方向的周期。

#### Returns

`number`

表面在 U 方向的周期。

___

### UReversed

▸ **UReversed**(): [`Mx3dGeomSurface`](Mx3dGeomSurface.md)

反转 U 方向的参数化。

#### Returns

[`Mx3dGeomSurface`](Mx3dGeomSurface.md)

返回当前对象以实现链式调用。

___

### VPeriod

▸ **VPeriod**(): `number`

返回表面在 V 方向的周期。

#### Returns

`number`

表面在 V 方向的周期。

___

### VReversed

▸ **VReversed**(): [`Mx3dGeomSurface`](Mx3dGeomSurface.md)

反转 V 方向的参数化。

#### Returns

[`Mx3dGeomSurface`](Mx3dGeomSurface.md)

返回当前对象以实现链式调用。

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
