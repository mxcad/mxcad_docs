[mxcad_3d API 文档](../README.md) / Mx3dGeomObject

# Class: Mx3dGeomObject

表示参数几何对象的基类。

## Hierarchy

- [`Mx3dBaseObject`](Mx3dBaseObject.md)

  ↳ **`Mx3dGeomObject`**

  ↳↳ [`Mx3dGeomCurve`](Mx3dGeomCurve.md)

  ↳↳ [`Mx3dGeomSurface`](Mx3dGeomSurface.md)

## Table of contents

### Constructors

- [constructor](Mx3dGeomObject.md#constructor)

### Methods

- [DynCast](Mx3dGeomObject.md#dyncast)
- [MirrorByAxis](Mx3dGeomObject.md#mirrorbyaxis)
- [MirrorByCSYSR](Mx3dGeomObject.md#mirrorbycsysr)
- [MirrorByPoint](Mx3dGeomObject.md#mirrorbypoint)
- [MirroredByAxis](Mx3dGeomObject.md#mirroredbyaxis)
- [MirroredByCSYSR](Mx3dGeomObject.md#mirroredbycsysr)
- [MirroredByPoint](Mx3dGeomObject.md#mirroredbypoint)
- [Rotate](Mx3dGeomObject.md#rotate)
- [Rotated](Mx3dGeomObject.md#rotated)
- [Scale](Mx3dGeomObject.md#scale)
- [Scaled](Mx3dGeomObject.md#scaled)
- [Transformed](Mx3dGeomObject.md#transformed)
- [TranslateBy2Points](Mx3dGeomObject.md#translateby2points)
- [TranslateByVec](Mx3dGeomObject.md#translatebyvec)
- [TranslatedBy2Points](Mx3dGeomObject.md#translatedby2points)
- [TranslatedByVec](Mx3dGeomObject.md#translatedbyvec)

## Constructors

### constructor

• **new Mx3dGeomObject**(`p?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `p?` | `object` |

## Methods

### DynCast

▸ **DynCast**(`theObject`): [`Mx3dGeomObject`](Mx3dGeomObject.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theObject` | [`Mx3dGeomObject`](Mx3dGeomObject.md) |

#### Returns

[`Mx3dGeomObject`](Mx3dGeomObject.md)

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

___

### MirroredByAxis

▸ **MirroredByAxis**(`A1`): [`Mx3dGeomObject`](Mx3dGeomObject.md)

返回通过轴镜像变换后的新几何对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `A1` | [`Mx3dGeAxis`](Mx3dGeAxis.md) | 轴对象。 |

#### Returns

[`Mx3dGeomObject`](Mx3dGeomObject.md)

新的几何对象。

___

### MirroredByCSYSR

▸ **MirroredByCSYSR**(`A2`): [`Mx3dGeomObject`](Mx3dGeomObject.md)

返回通过右手坐标系镜像变换后的新几何对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `A2` | [`Mx3dGeCSYSR`](Mx3dGeCSYSR.md) | 右手坐标系对象。 |

#### Returns

[`Mx3dGeomObject`](Mx3dGeomObject.md)

新的几何对象。

___

### MirroredByPoint

▸ **MirroredByPoint**(`P`): [`Mx3dGeomObject`](Mx3dGeomObject.md)

返回通过点镜像变换后的新几何对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `P` | [`Mx3dGePoint`](Mx3dGePoint.md) | 点对象。 |

#### Returns

[`Mx3dGeomObject`](Mx3dGeomObject.md)

新的几何对象。

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

___

### Rotated

▸ **Rotated**(`A1`, `Ang`): [`Mx3dGeomObject`](Mx3dGeomObject.md)

返回旋转后的新几何对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `A1` | [`Mx3dGeAxis`](Mx3dGeAxis.md) | 轴对象。 |
| `Ang` | `number` | 旋转角度。 |

#### Returns

[`Mx3dGeomObject`](Mx3dGeomObject.md)

新的几何对象。

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

___

### Scaled

▸ **Scaled**(`P`, `S`): [`Mx3dGeomObject`](Mx3dGeomObject.md)

返回缩放后的新几何对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `P` | [`Mx3dGePoint`](Mx3dGePoint.md) | 点对象。 |
| `S` | `number` | 缩放比例。 |

#### Returns

[`Mx3dGeomObject`](Mx3dGeomObject.md)

新的几何对象。

___

### Transformed

▸ **Transformed**(`T`): [`Mx3dGeomObject`](Mx3dGeomObject.md)

返回变换后的新几何对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `T` | [`Mx3dGeTrsf`](Mx3dGeTrsf.md) | 变换对象。 |

#### Returns

[`Mx3dGeomObject`](Mx3dGeomObject.md)

新的几何对象。

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

___

### TranslatedBy2Points

▸ **TranslatedBy2Points**(`P1`, `P2`): [`Mx3dGeomObject`](Mx3dGeomObject.md)

返回通过两个点平移后的新几何对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `P1` | [`Mx3dGePoint`](Mx3dGePoint.md) | 起始点对象。 |
| `P2` | [`Mx3dGePoint`](Mx3dGePoint.md) | 终止点对象。 |

#### Returns

[`Mx3dGeomObject`](Mx3dGeomObject.md)

新的几何对象。

___

### TranslatedByVec

▸ **TranslatedByVec**(`V`): [`Mx3dGeomObject`](Mx3dGeomObject.md)

返回通过向量平移后的新几何对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `V` | [`Mx3dGeVec`](Mx3dGeVec.md) | 向量对象。 |

#### Returns

[`Mx3dGeomObject`](Mx3dGeomObject.md)

新的几何对象。
