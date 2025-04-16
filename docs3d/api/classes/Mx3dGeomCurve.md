[mxcad_3d API 文档](../README.md) / Mx3dGeomCurve

# Class: Mx3dGeomCurve

表示几何曲线的类，继承自 Mx3dGeomObject。

## Hierarchy

- [`Mx3dGeomObject`](Mx3dGeomObject.md)

  ↳ **`Mx3dGeomCurve`**

  ↳↳ [`Mx3dGeomConic`](Mx3dGeomConic.md)

  ↳↳ [`Mx3dGeomLine`](Mx3dGeomLine.md)

  ↳↳ [`Mx3dGeomBoundedCurve`](Mx3dGeomBoundedCurve.md)

## Table of contents

### Constructors

- [constructor](Mx3dGeomCurve.md#constructor)

### Methods

- [DynCast](Mx3dGeomCurve.md#dyncast)
- [DynamicType](Mx3dGeomCurve.md#dynamictype)
- [MirrorByAxis](Mx3dGeomCurve.md#mirrorbyaxis)
- [MirrorByCSYSR](Mx3dGeomCurve.md#mirrorbycsysr)
- [MirrorByPoint](Mx3dGeomCurve.md#mirrorbypoint)
- [MirroredByAxis](Mx3dGeomCurve.md#mirroredbyaxis)
- [MirroredByCSYSR](Mx3dGeomCurve.md#mirroredbycsysr)
- [MirroredByPoint](Mx3dGeomCurve.md#mirroredbypoint)
- [Period](Mx3dGeomCurve.md#period)
- [Reversed](Mx3dGeomCurve.md#reversed)
- [Rotate](Mx3dGeomCurve.md#rotate)
- [Rotated](Mx3dGeomCurve.md#rotated)
- [Scale](Mx3dGeomCurve.md#scale)
- [Scaled](Mx3dGeomCurve.md#scaled)
- [Transformed](Mx3dGeomCurve.md#transformed)
- [TranslateBy2Points](Mx3dGeomCurve.md#translateby2points)
- [TranslateByVec](Mx3dGeomCurve.md#translatebyvec)
- [TranslatedBy2Points](Mx3dGeomCurve.md#translatedby2points)
- [TranslatedByVec](Mx3dGeomCurve.md#translatedbyvec)
- [Value](Mx3dGeomCurve.md#value)

## Constructors

### constructor

• **new Mx3dGeomCurve**(`p?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `p?` | `object` |

#### Overrides

[Mx3dGeomObject](Mx3dGeomObject.md).[constructor](Mx3dGeomObject.md#constructor)

## Methods

### DynCast

▸ **DynCast**(`theObject`): [`Mx3dGeomCurve`](Mx3dGeomCurve.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theObject` | [`Mx3dGeomObject`](Mx3dGeomObject.md) |

#### Returns

[`Mx3dGeomCurve`](Mx3dGeomCurve.md)

#### Inherited from

[Mx3dGeomObject](Mx3dGeomObject.md).[DynCast](Mx3dGeomObject.md#dyncast)

___

### DynamicType

▸ **DynamicType**(): `string`

返回对象的动态类型。

#### Returns

`string`

动态类型的字符串。

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

▸ **MirroredByAxis**(`A1`): [`Mx3dGeomCurve`](Mx3dGeomCurve.md)

返回通过轴镜像变换后的新几何对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `A1` | [`Mx3dGeAxis`](Mx3dGeAxis.md) | 轴对象。 |

#### Returns

[`Mx3dGeomCurve`](Mx3dGeomCurve.md)

新的几何对象。

#### Inherited from

[Mx3dGeomObject](Mx3dGeomObject.md).[MirroredByAxis](Mx3dGeomObject.md#mirroredbyaxis)

___

### MirroredByCSYSR

▸ **MirroredByCSYSR**(`A2`): [`Mx3dGeomCurve`](Mx3dGeomCurve.md)

返回通过右手坐标系镜像变换后的新几何对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `A2` | [`Mx3dGeCSYSR`](Mx3dGeCSYSR.md) | 右手坐标系对象。 |

#### Returns

[`Mx3dGeomCurve`](Mx3dGeomCurve.md)

新的几何对象。

#### Inherited from

[Mx3dGeomObject](Mx3dGeomObject.md).[MirroredByCSYSR](Mx3dGeomObject.md#mirroredbycsysr)

___

### MirroredByPoint

▸ **MirroredByPoint**(`P`): [`Mx3dGeomCurve`](Mx3dGeomCurve.md)

返回通过点镜像变换后的新几何对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `P` | [`Mx3dGePoint`](Mx3dGePoint.md) | 点对象。 |

#### Returns

[`Mx3dGeomCurve`](Mx3dGeomCurve.md)

新的几何对象。

#### Inherited from

[Mx3dGeomObject](Mx3dGeomObject.md).[MirroredByPoint](Mx3dGeomObject.md#mirroredbypoint)

___

### Period

▸ **Period**(): `number`

返回曲线的周期。

#### Returns

`number`

曲线的周期。

___

### Reversed

▸ **Reversed**(): [`Mx3dGeomCurve`](Mx3dGeomCurve.md)

返回反向后的新几何曲线对象。

#### Returns

[`Mx3dGeomCurve`](Mx3dGeomCurve.md)

新的几何曲线对象。

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

▸ **Rotated**(`A1`, `Ang`): [`Mx3dGeomCurve`](Mx3dGeomCurve.md)

返回旋转后的新几何对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `A1` | [`Mx3dGeAxis`](Mx3dGeAxis.md) | 轴对象。 |
| `Ang` | `number` | 旋转角度。 |

#### Returns

[`Mx3dGeomCurve`](Mx3dGeomCurve.md)

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

▸ **Scaled**(`P`, `S`): [`Mx3dGeomCurve`](Mx3dGeomCurve.md)

返回缩放后的新几何对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `P` | [`Mx3dGePoint`](Mx3dGePoint.md) | 点对象。 |
| `S` | `number` | 缩放比例。 |

#### Returns

[`Mx3dGeomCurve`](Mx3dGeomCurve.md)

新的几何对象。

#### Inherited from

[Mx3dGeomObject](Mx3dGeomObject.md).[Scaled](Mx3dGeomObject.md#scaled)

___

### Transformed

▸ **Transformed**(`T`): [`Mx3dGeomCurve`](Mx3dGeomCurve.md)

返回变换后的新几何对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `T` | [`Mx3dGeTrsf`](Mx3dGeTrsf.md) | 变换对象。 |

#### Returns

[`Mx3dGeomCurve`](Mx3dGeomCurve.md)

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

▸ **TranslatedBy2Points**(`P1`, `P2`): [`Mx3dGeomCurve`](Mx3dGeomCurve.md)

返回通过两个点平移后的新几何对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `P1` | [`Mx3dGePoint`](Mx3dGePoint.md) | 起始点对象。 |
| `P2` | [`Mx3dGePoint`](Mx3dGePoint.md) | 终止点对象。 |

#### Returns

[`Mx3dGeomCurve`](Mx3dGeomCurve.md)

新的几何对象。

#### Inherited from

[Mx3dGeomObject](Mx3dGeomObject.md).[TranslatedBy2Points](Mx3dGeomObject.md#translatedby2points)

___

### TranslatedByVec

▸ **TranslatedByVec**(`V`): [`Mx3dGeomCurve`](Mx3dGeomCurve.md)

返回通过向量平移后的新几何对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `V` | [`Mx3dGeVec`](Mx3dGeVec.md) | 向量对象。 |

#### Returns

[`Mx3dGeomCurve`](Mx3dGeomCurve.md)

新的几何对象。

#### Inherited from

[Mx3dGeomObject](Mx3dGeomObject.md).[TranslatedByVec](Mx3dGeomObject.md#translatedbyvec)

___

### Value

▸ **Value**(`U`): [`Mx3dGePoint`](Mx3dGePoint.md)

返回给定参数 U 处的点。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `U` | `number` | 参数值。 |

#### Returns

[`Mx3dGePoint`](Mx3dGePoint.md)

给定参数处的点对象。
