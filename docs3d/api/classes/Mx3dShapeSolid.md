[mxcad_3d API 文档](../README.md) / Mx3dShapeSolid

# Class: Mx3dShapeSolid

实心形状对象

## Hierarchy

- [`Mx3dShapeObject`](Mx3dShapeObject.md)

  ↳ **`Mx3dShapeSolid`**

## Table of contents

### Constructors

- [constructor](Mx3dShapeSolid.md#constructor)

### Methods

- [Centroid](Mx3dShapeSolid.md#centroid)
- [Explore](Mx3dShapeSolid.md#explore)
- [MirrorByAxis](Mx3dShapeSolid.md#mirrorbyaxis)
- [MirrorByCSYSR](Mx3dShapeSolid.md#mirrorbycsysr)
- [MirrorByPoint](Mx3dShapeSolid.md#mirrorbypoint)
- [MirroredByAxis](Mx3dShapeSolid.md#mirroredbyaxis)
- [MirroredByCSYSR](Mx3dShapeSolid.md#mirroredbycsysr)
- [MirroredByPoint](Mx3dShapeSolid.md#mirroredbypoint)
- [Orientation](Mx3dShapeSolid.md#orientation)
- [Quantities](Mx3dShapeSolid.md#quantities)
- [Rotate](Mx3dShapeSolid.md#rotate)
- [Rotated](Mx3dShapeSolid.md#rotated)
- [Scale](Mx3dShapeSolid.md#scale)
- [Scaled](Mx3dShapeSolid.md#scaled)
- [ShapeType](Mx3dShapeSolid.md#shapetype)
- [Transform](Mx3dShapeSolid.md#transform)
- [Transformed](Mx3dShapeSolid.md#transformed)
- [TranslateBy2Points](Mx3dShapeSolid.md#translateby2points)
- [TranslateByVec](Mx3dShapeSolid.md#translatebyvec)
- [TranslatedBy2Points](Mx3dShapeSolid.md#translatedby2points)
- [TranslatedByVec](Mx3dShapeSolid.md#translatedbyvec)
- [clone](Mx3dShapeSolid.md#clone)
- [common](Mx3dShapeSolid.md#common)
- [cut](Mx3dShapeSolid.md#cut)
- [fuse](Mx3dShapeSolid.md#fuse)
- [getBndBox](Mx3dShapeSolid.md#getbndbox)
- [move](Mx3dShapeSolid.md#move)
- [moved](Mx3dShapeSolid.md#moved)
- [reverse](Mx3dShapeSolid.md#reverse)
- [reversed](Mx3dShapeSolid.md#reversed)
- [section](Mx3dShapeSolid.md#section)
- [spliter](Mx3dShapeSolid.md#spliter)

## Constructors

### constructor

• **new Mx3dShapeSolid**(`p?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `p?` | `object` |

#### Overrides

[Mx3dShapeObject](Mx3dShapeObject.md).[constructor](Mx3dShapeObject.md#constructor)

## Methods

### Centroid

▸ **Centroid**(`theAspect`): [`Mx3dGePoint`](Mx3dGePoint.md)

获取形状的质心。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theAspect` | [`MxQuantAspect`](../enums/MdGe.MxQuantAspect.md) | 需要根据形状类型进行设置的质心类型。 |

#### Returns

[`Mx3dGePoint`](Mx3dGePoint.md)

质心点。

#### Inherited from

[Mx3dShapeObject](Mx3dShapeObject.md).[Centroid](Mx3dShapeObject.md#centroid)

___

### Explore

▸ **Explore**(`ToFind`): [`Mx3dShapeObject`](Mx3dShapeObject.md)[]

遍历形状对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ToFind` | [`MxShapeEnum`](../enums/MdGe.MxShapeEnum.md) | 要查找的形状类型。 |

#### Returns

[`Mx3dShapeObject`](Mx3dShapeObject.md)[]

形状对象数组。

#### Inherited from

[Mx3dShapeObject](Mx3dShapeObject.md).[Explore](Mx3dShapeObject.md#explore)

___

### MirrorByAxis

▸ **MirrorByAxis**(`axis`): `void`

根据一个轴镜像当前形状对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `axis` | [`Mx3dGeAxis`](Mx3dGeAxis.md) | 镜像轴。 |

#### Returns

`void`

#### Inherited from

[Mx3dShapeObject](Mx3dShapeObject.md).[MirrorByAxis](Mx3dShapeObject.md#mirrorbyaxis)

___

### MirrorByCSYSR

▸ **MirrorByCSYSR**(`csysr`): `void`

根据一个坐标系镜像当前形状对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `csysr` | [`Mx3dGeCSYSR`](Mx3dGeCSYSR.md) | 镜像坐标系。 |

#### Returns

`void`

#### Inherited from

[Mx3dShapeObject](Mx3dShapeObject.md).[MirrorByCSYSR](Mx3dShapeObject.md#mirrorbycsysr)

___

### MirrorByPoint

▸ **MirrorByPoint**(`theP`): `void`

根据一个点镜像当前形状对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theP` | [`Mx3dGePoint`](Mx3dGePoint.md) | 镜像点。 |

#### Returns

`void`

#### Inherited from

[Mx3dShapeObject](Mx3dShapeObject.md).[MirrorByPoint](Mx3dShapeObject.md#mirrorbypoint)

___

### MirroredByAxis

▸ **MirroredByAxis**(`axis`): [`Mx3dShapeObject`](Mx3dShapeObject.md)

返回根据一个轴镜像后的形状对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `axis` | [`Mx3dGeAxis`](Mx3dGeAxis.md) | 镜像轴。 |

#### Returns

[`Mx3dShapeObject`](Mx3dShapeObject.md)

镜像后的形状对象。

#### Inherited from

[Mx3dShapeObject](Mx3dShapeObject.md).[MirroredByAxis](Mx3dShapeObject.md#mirroredbyaxis)

___

### MirroredByCSYSR

▸ **MirroredByCSYSR**(`csysr`): [`Mx3dShapeObject`](Mx3dShapeObject.md)

返回根据一个坐标系镜像后的形状对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `csysr` | [`Mx3dGeCSYSR`](Mx3dGeCSYSR.md) | 镜像坐标系。 |

#### Returns

[`Mx3dShapeObject`](Mx3dShapeObject.md)

镜像后的形状对象。

#### Inherited from

[Mx3dShapeObject](Mx3dShapeObject.md).[MirroredByCSYSR](Mx3dShapeObject.md#mirroredbycsysr)

___

### MirroredByPoint

▸ **MirroredByPoint**(`theP`): [`Mx3dShapeObject`](Mx3dShapeObject.md)

返回根据一个点镜像后的形状对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theP` | [`Mx3dGePoint`](Mx3dGePoint.md) | 镜像点。 |

#### Returns

[`Mx3dShapeObject`](Mx3dShapeObject.md)

镜像后的形状对象。

#### Inherited from

[Mx3dShapeObject](Mx3dShapeObject.md).[MirroredByPoint](Mx3dShapeObject.md#mirroredbypoint)

___

### Orientation

▸ **Orientation**(): [`MxOrientation`](../enums/MdGe.MxOrientation.md)

获取形状的朝向

#### Returns

[`MxOrientation`](../enums/MdGe.MxOrientation.md)

朝向

#### Inherited from

[Mx3dShapeObject](Mx3dShapeObject.md).[Orientation](Mx3dShapeObject.md#orientation)

___

### Quantities

▸ **Quantities**(`theAspect`): `number`

获取形状的长度，面积，体积等。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theAspect` | [`MxQuantAspect`](../enums/MdGe.MxQuantAspect.md) | 设置获取长度，面积还是体积。 |

#### Returns

`number`

数量值。

#### Inherited from

[Mx3dShapeObject](Mx3dShapeObject.md).[Quantities](Mx3dShapeObject.md#quantities)

___

### Rotate

▸ **Rotate**(`axis`, `ang`): `void`

旋转当前形状对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `axis` | [`Mx3dGeAxis`](Mx3dGeAxis.md) | 旋转轴。 |
| `ang` | `number` | 旋转角度。 |

#### Returns

`void`

#### Inherited from

[Mx3dShapeObject](Mx3dShapeObject.md).[Rotate](Mx3dShapeObject.md#rotate)

___

### Rotated

▸ **Rotated**(`axis`, `ang`): [`Mx3dShapeObject`](Mx3dShapeObject.md)

返回旋转后的形状对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `axis` | [`Mx3dGeAxis`](Mx3dGeAxis.md) | 旋转轴。 |
| `ang` | `number` | 旋转角度。 |

#### Returns

[`Mx3dShapeObject`](Mx3dShapeObject.md)

旋转后的形状对象。

#### Inherited from

[Mx3dShapeObject](Mx3dShapeObject.md).[Rotated](Mx3dShapeObject.md#rotated)

___

### Scale

▸ **Scale**(`point`, `s`): `void`

缩放当前形状对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `point` | [`Mx3dGePoint`](Mx3dGePoint.md) | 缩放中心点。 |
| `s` | `number` | 缩放比例。 |

#### Returns

`void`

#### Inherited from

[Mx3dShapeObject](Mx3dShapeObject.md).[Scale](Mx3dShapeObject.md#scale)

___

### Scaled

▸ **Scaled**(`point`, `s`): [`Mx3dShapeObject`](Mx3dShapeObject.md)

返回缩放后的形状对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `point` | [`Mx3dGePoint`](Mx3dGePoint.md) | 缩放中心点。 |
| `s` | `number` | 缩放比例。 |

#### Returns

[`Mx3dShapeObject`](Mx3dShapeObject.md)

缩放后的形状对象。

#### Inherited from

[Mx3dShapeObject](Mx3dShapeObject.md).[Scaled](Mx3dShapeObject.md#scaled)

___

### ShapeType

▸ **ShapeType**(): [`MxShapeEnum`](../enums/MdGe.MxShapeEnum.md)

获取形状类型。

#### Returns

[`MxShapeEnum`](../enums/MdGe.MxShapeEnum.md)

形状类型。

#### Inherited from

[Mx3dShapeObject](Mx3dShapeObject.md).[ShapeType](Mx3dShapeObject.md#shapetype)

___

### Transform

▸ **Transform**(`trsf`): `void`

根据变换矩阵变换当前形状对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `trsf` | [`Mx3dGeTrsf`](Mx3dGeTrsf.md) | 变换矩阵。 |

#### Returns

`void`

#### Inherited from

[Mx3dShapeObject](Mx3dShapeObject.md).[Transform](Mx3dShapeObject.md#transform)

___

### Transformed

▸ **Transformed**(`trsf`): [`Mx3dShapeObject`](Mx3dShapeObject.md)

返回根据变换矩阵变换后的形状对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `trsf` | [`Mx3dGeTrsf`](Mx3dGeTrsf.md) | 变换矩阵。 |

#### Returns

[`Mx3dShapeObject`](Mx3dShapeObject.md)

变换后的形状对象。

#### Inherited from

[Mx3dShapeObject](Mx3dShapeObject.md).[Transformed](Mx3dShapeObject.md#transformed)

___

### TranslateBy2Points

▸ **TranslateBy2Points**(`point1`, `point2`): `void`

根据两个点平移当前形状对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `point1` | [`Mx3dGePoint`](Mx3dGePoint.md) | 起点。 |
| `point2` | [`Mx3dGePoint`](Mx3dGePoint.md) | 终点。 |

#### Returns

`void`

#### Inherited from

[Mx3dShapeObject](Mx3dShapeObject.md).[TranslateBy2Points](Mx3dShapeObject.md#translateby2points)

___

### TranslateByVec

▸ **TranslateByVec**(`vec`): `void`

根据向量平移当前形状对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vec` | [`Mx3dGeVec`](Mx3dGeVec.md) | 平移向量。 |

#### Returns

`void`

#### Inherited from

[Mx3dShapeObject](Mx3dShapeObject.md).[TranslateByVec](Mx3dShapeObject.md#translatebyvec)

▸ **TranslateByVec**(`theX`, `theY`, `theZ`): `void`

根据坐标平移当前形状对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theX` | `number` | X坐标。 |
| `theY` | `number` | Y坐标。 |
| `theZ` | `number` | Z坐标。 |

#### Returns

`void`

#### Inherited from

[Mx3dShapeObject](Mx3dShapeObject.md).[TranslateByVec](Mx3dShapeObject.md#translatebyvec)

___

### TranslatedBy2Points

▸ **TranslatedBy2Points**(`point1`, `point2`): [`Mx3dShapeObject`](Mx3dShapeObject.md)

返回根据两个点平移后的形状对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `point1` | [`Mx3dGePoint`](Mx3dGePoint.md) | 起点。 |
| `point2` | [`Mx3dGePoint`](Mx3dGePoint.md) | 终点。 |

#### Returns

[`Mx3dShapeObject`](Mx3dShapeObject.md)

平移后的形状对象。

#### Inherited from

[Mx3dShapeObject](Mx3dShapeObject.md).[TranslatedBy2Points](Mx3dShapeObject.md#translatedby2points)

___

### TranslatedByVec

▸ **TranslatedByVec**(`vec`): [`Mx3dShapeObject`](Mx3dShapeObject.md)

返回根据向量平移后的形状对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vec` | [`Mx3dGeVec`](Mx3dGeVec.md) | 平移向量。 |

#### Returns

[`Mx3dShapeObject`](Mx3dShapeObject.md)

平移后的形状对象。

#### Inherited from

[Mx3dShapeObject](Mx3dShapeObject.md).[TranslatedByVec](Mx3dShapeObject.md#translatedbyvec)

▸ **TranslatedByVec**(`theX`, `theY`, `theZ`): [`Mx3dShapeObject`](Mx3dShapeObject.md)

返回根据坐标平移后的形状对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theX` | `number` | X坐标。 |
| `theY` | `number` | Y坐标。 |
| `theZ` | `number` | Z坐标。 |

#### Returns

[`Mx3dShapeObject`](Mx3dShapeObject.md)

平移后的形状对象。

#### Inherited from

[Mx3dShapeObject](Mx3dShapeObject.md).[TranslatedByVec](Mx3dShapeObject.md#translatedbyvec)

___

### clone

▸ **clone**(): [`Mx3dShapeObject`](Mx3dShapeObject.md)

克隆当前形状对象。

#### Returns

[`Mx3dShapeObject`](Mx3dShapeObject.md)

克隆后的形状对象。

#### Inherited from

[Mx3dShapeObject](Mx3dShapeObject.md).[clone](Mx3dShapeObject.md#clone)

___

### common

▸ **common**(`theOther`): [`Mx3dShapeObject`](Mx3dShapeObject.md)

返回当前形状对象与另一个形状对象的公共部分。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theOther` | [`Mx3dShapeObject`](Mx3dShapeObject.md) | 另一个形状对象。 |

#### Returns

[`Mx3dShapeObject`](Mx3dShapeObject.md)

公共部分的形状对象。

#### Inherited from

[Mx3dShapeObject](Mx3dShapeObject.md).[common](Mx3dShapeObject.md#common)

___

### cut

▸ **cut**(`theOther`): [`Mx3dShapeObject`](Mx3dShapeObject.md)

从当前形状对象中减去另一个形状对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theOther` | [`Mx3dShapeObject`](Mx3dShapeObject.md) | 另一个形状对象。 |

#### Returns

[`Mx3dShapeObject`](Mx3dShapeObject.md)

削减后的形状对象。

#### Inherited from

[Mx3dShapeObject](Mx3dShapeObject.md).[cut](Mx3dShapeObject.md#cut)

___

### fuse

▸ **fuse**(`theOther`): [`Mx3dShapeObject`](Mx3dShapeObject.md)

与另一个形状对象融合。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theOther` | [`Mx3dShapeObject`](Mx3dShapeObject.md) | 另一个形状对象。 |

#### Returns

[`Mx3dShapeObject`](Mx3dShapeObject.md)

融合后的形状对象。

#### Inherited from

[Mx3dShapeObject](Mx3dShapeObject.md).[fuse](Mx3dShapeObject.md#fuse)

___

### getBndBox

▸ **getBndBox**(): [`Mx3dGeBndBox`](Mx3dGeBndBox.md)

获取形状对象的边界框。

#### Returns

[`Mx3dGeBndBox`](Mx3dGeBndBox.md)

边界框对象。

#### Inherited from

[Mx3dShapeObject](Mx3dShapeObject.md).[getBndBox](Mx3dShapeObject.md#getbndbox)

___

### move

▸ **move**(`theLocation`): `void`

移动形状对象到指定位置。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theLocation` | [`Mx3dGeLocation`](Mx3dGeLocation.md) | 移动的位置。 |

#### Returns

`void`

#### Inherited from

[Mx3dShapeObject](Mx3dShapeObject.md).[move](Mx3dShapeObject.md#move)

___

### moved

▸ **moved**(`theLocation`): [`Mx3dShapeObject`](Mx3dShapeObject.md)

返回移动后的形状对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theLocation` | [`Mx3dGeLocation`](Mx3dGeLocation.md) | 移动的位置。 |

#### Returns

[`Mx3dShapeObject`](Mx3dShapeObject.md)

移动后的形状对象。

#### Inherited from

[Mx3dShapeObject](Mx3dShapeObject.md).[moved](Mx3dShapeObject.md#moved)

___

### reverse

▸ **reverse**(): `void`

形状反向

#### Returns

`void`

#### Inherited from

[Mx3dShapeObject](Mx3dShapeObject.md).[reverse](Mx3dShapeObject.md#reverse)

___

### reversed

▸ **reversed**(): [`Mx3dShapeObject`](Mx3dShapeObject.md)

获取反向后的新形状

#### Returns

[`Mx3dShapeObject`](Mx3dShapeObject.md)

反向后的新形状

#### Inherited from

[Mx3dShapeObject](Mx3dShapeObject.md).[reversed](Mx3dShapeObject.md#reversed)

___

### section

▸ **section**(`theOther`): [`Mx3dShapeObject`](Mx3dShapeObject.md)

返回当前形状对象与另一个形状对象的相交轮廓。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theOther` | [`Mx3dShapeObject`](Mx3dShapeObject.md) | 另一个形状对象。 |

#### Returns

[`Mx3dShapeObject`](Mx3dShapeObject.md)

相交轮廓的形状对象。

#### Inherited from

[Mx3dShapeObject](Mx3dShapeObject.md).[section](Mx3dShapeObject.md#section)

___

### spliter

▸ **spliter**(`theTools`): [`Mx3dShapeObject`](Mx3dShapeObject.md)[]

使用工具形状对象分割当前形状对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theTools` | [`Mx3dShapeObject`](Mx3dShapeObject.md)[] | 工具形状对象数组。 |

#### Returns

[`Mx3dShapeObject`](Mx3dShapeObject.md)[]

分割后的形状对象数组。

#### Inherited from

[Mx3dShapeObject](Mx3dShapeObject.md).[spliter](Mx3dShapeObject.md#spliter)
