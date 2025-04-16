[mxcad_3d API 文档](../README.md) / Mx3dGeCircle

# Class: Mx3dGeCircle

非参数几何圆

## Hierarchy

- [`Mx3dGeObject`](Mx3dGeObject.md)

  ↳ **`Mx3dGeCircle`**

## Table of contents

### Constructors

- [constructor](Mx3dGeCircle.md#constructor)

### Methods

- [Area](Mx3dGeCircle.md#area)
- [Axis](Mx3dGeCircle.md#axis)
- [Contains](Mx3dGeCircle.md#contains)
- [Distance](Mx3dGeCircle.md#distance)
- [Length](Mx3dGeCircle.md#length)
- [Location](Mx3dGeCircle.md#location)
- [MirrorByAxis](Mx3dGeCircle.md#mirrorbyaxis)
- [MirrorByCSYSR](Mx3dGeCircle.md#mirrorbycsysr)
- [MirrorByPoint](Mx3dGeCircle.md#mirrorbypoint)
- [MirroredByAxis](Mx3dGeCircle.md#mirroredbyaxis)
- [MirroredByCSYSR](Mx3dGeCircle.md#mirroredbycsysr)
- [MirroredByPoint](Mx3dGeCircle.md#mirroredbypoint)
- [Position](Mx3dGeCircle.md#position)
- [Radius](Mx3dGeCircle.md#radius)
- [Rotate](Mx3dGeCircle.md#rotate)
- [Rotated](Mx3dGeCircle.md#rotated)
- [Scale](Mx3dGeCircle.md#scale)
- [Scaled](Mx3dGeCircle.md#scaled)
- [SetAxis](Mx3dGeCircle.md#setaxis)
- [SetLocation](Mx3dGeCircle.md#setlocation)
- [SetPosition](Mx3dGeCircle.md#setposition)
- [SetRadius](Mx3dGeCircle.md#setradius)
- [SquareDistance](Mx3dGeCircle.md#squaredistance)
- [Transform](Mx3dGeCircle.md#transform)
- [Transformed](Mx3dGeCircle.md#transformed)
- [TranslateBy2Points](Mx3dGeCircle.md#translateby2points)
- [TranslateByVec](Mx3dGeCircle.md#translatebyvec)
- [TranslatedBy2Points](Mx3dGeCircle.md#translatedby2points)
- [TranslatedByVec](Mx3dGeCircle.md#translatedbyvec)
- [XAxis](Mx3dGeCircle.md#xaxis)
- [YAxis](Mx3dGeCircle.md#yaxis)

## Constructors

### constructor

• **new Mx3dGeCircle**()

创建一个默认的圆对象。

#### Overrides

Mx3dGeObject.constructor

• **new Mx3dGeCircle**(`theA2`, `theRadius`)

创建一个带有坐标系和半径的圆对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theA2` | [`Mx3dGeCSYSR`](Mx3dGeCSYSR.md) | 坐标系。 |
| `theRadius` | `number` | 圆的半径。 |

#### Overrides

Mx3dGeObject.constructor

## Methods

### Area

▸ **Area**(): `number`

返回圆的面积。

#### Returns

`number`

圆的面积。

___

### Axis

▸ **Axis**(): [`Mx3dGeAxis`](Mx3dGeAxis.md)

返回圆的轴。

#### Returns

[`Mx3dGeAxis`](Mx3dGeAxis.md)

圆的轴。

___

### Contains

▸ **Contains**(`theP`, `theLinearTolerance`): `boolean`

判断一个点是否在圆上。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theP` | [`Mx3dGePoint`](Mx3dGePoint.md) | 点。 |
| `theLinearTolerance` | `number` | 线性容差。 |

#### Returns

`boolean`

如果点在圆上返回true，否则返回false。

___

### Distance

▸ **Distance**(`theP`): `number`

计算圆到一个点的距离。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theP` | [`Mx3dGePoint`](Mx3dGePoint.md) | 点。 |

#### Returns

`number`

距离值。

___

### Length

▸ **Length**(): `number`

返回圆的周长。

#### Returns

`number`

圆的周长。

___

### Location

▸ **Location**(): [`Mx3dGePoint`](Mx3dGePoint.md)

返回圆的位置。

#### Returns

[`Mx3dGePoint`](Mx3dGePoint.md)

圆的位置点。

___

### MirrorByAxis

▸ **MirrorByAxis**(`theA1`): `void`

根据一个轴镜像当前圆。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theA1` | [`Mx3dGeAxis`](Mx3dGeAxis.md) | 镜像轴。 |

#### Returns

`void`

___

### MirrorByCSYSR

▸ **MirrorByCSYSR**(`theA2`): `void`

根据一个坐标系镜像当前圆。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theA2` | [`Mx3dGeCSYSR`](Mx3dGeCSYSR.md) | 镜像坐标系。 |

#### Returns

`void`

___

### MirrorByPoint

▸ **MirrorByPoint**(`theP`): `void`

根据一个点镜像当前圆。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theP` | [`Mx3dGePoint`](Mx3dGePoint.md) | 镜像点。 |

#### Returns

`void`

___

### MirroredByAxis

▸ **MirroredByAxis**(`theA1`): [`Mx3dGeCircle`](Mx3dGeCircle.md)

返回根据一个轴镜像后的圆。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theA1` | [`Mx3dGeAxis`](Mx3dGeAxis.md) | 镜像轴。 |

#### Returns

[`Mx3dGeCircle`](Mx3dGeCircle.md)

镜像后的圆。

___

### MirroredByCSYSR

▸ **MirroredByCSYSR**(`theA2`): [`Mx3dGeCircle`](Mx3dGeCircle.md)

返回根据一个坐标系镜像后的圆。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theA2` | [`Mx3dGeCSYSR`](Mx3dGeCSYSR.md) | 镜像坐标系。 |

#### Returns

[`Mx3dGeCircle`](Mx3dGeCircle.md)

镜像后的圆。

___

### MirroredByPoint

▸ **MirroredByPoint**(`theP`): [`Mx3dGeCircle`](Mx3dGeCircle.md)

返回根据一个点镜像后的圆。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theP` | [`Mx3dGePoint`](Mx3dGePoint.md) | 镜像点。 |

#### Returns

[`Mx3dGeCircle`](Mx3dGeCircle.md)

镜像后的圆。

___

### Position

▸ **Position**(): [`Mx3dGeCSYSR`](Mx3dGeCSYSR.md)

返回圆的坐标系。

#### Returns

[`Mx3dGeCSYSR`](Mx3dGeCSYSR.md)

圆的坐标系。

___

### Radius

▸ **Radius**(): `number`

返回圆的半径。

#### Returns

`number`

圆的半径。

___

### Rotate

▸ **Rotate**(`theA1`, `theAng`): `void`

旋转当前圆。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theA1` | [`Mx3dGeAxis`](Mx3dGeAxis.md) | 旋转轴。 |
| `theAng` | `number` | 旋转角度。 |

#### Returns

`void`

___

### Rotated

▸ **Rotated**(`theA1`, `theAng`): [`Mx3dGeCircle`](Mx3dGeCircle.md)

返回旋转后的圆。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theA1` | [`Mx3dGeAxis`](Mx3dGeAxis.md) | 旋转轴。 |
| `theAng` | `number` | 旋转角度。 |

#### Returns

[`Mx3dGeCircle`](Mx3dGeCircle.md)

旋转后的圆。

___

### Scale

▸ **Scale**(`theP`, `theS`): `void`

缩放当前圆。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theP` | [`Mx3dGePoint`](Mx3dGePoint.md) | 缩放中心点。 |
| `theS` | `number` | 缩放比例。 |

#### Returns

`void`

___

### Scaled

▸ **Scaled**(`theP`, `theS`): [`Mx3dGeCircle`](Mx3dGeCircle.md)

返回缩放后的圆。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theP` | [`Mx3dGePoint`](Mx3dGePoint.md) | 缩放中心点。 |
| `theS` | `number` | 缩放比例。 |

#### Returns

[`Mx3dGeCircle`](Mx3dGeCircle.md)

缩放后的圆。

___

### SetAxis

▸ **SetAxis**(`theA1`): `void`

设置圆的轴。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theA1` | [`Mx3dGeAxis`](Mx3dGeAxis.md) | 圆的轴。 |

#### Returns

`void`

___

### SetLocation

▸ **SetLocation**(`theP`): `void`

设置圆的位置。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theP` | [`Mx3dGePoint`](Mx3dGePoint.md) | 圆的位置点。 |

#### Returns

`void`

___

### SetPosition

▸ **SetPosition**(`theA2`): `void`

设置圆的坐标系。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theA2` | [`Mx3dGeCSYSR`](Mx3dGeCSYSR.md) | 圆的坐标系。 |

#### Returns

`void`

___

### SetRadius

▸ **SetRadius**(`theRadius`): `void`

设置圆的半径。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theRadius` | `number` | 圆的半径。 |

#### Returns

`void`

___

### SquareDistance

▸ **SquareDistance**(`theP`): `number`

计算圆到一个点的平方距离。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theP` | [`Mx3dGePoint`](Mx3dGePoint.md) | 点。 |

#### Returns

`number`

平方距离值。

___

### Transform

▸ **Transform**(`theT`): `void`

根据变换矩阵变换当前圆。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theT` | [`Mx3dGeTrsf`](Mx3dGeTrsf.md) | 变换矩阵。 |

#### Returns

`void`

___

### Transformed

▸ **Transformed**(`theT`): [`Mx3dGeCircle`](Mx3dGeCircle.md)

返回根据变换矩阵变换后的圆。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theT` | [`Mx3dGeTrsf`](Mx3dGeTrsf.md) | 变换矩阵。 |

#### Returns

[`Mx3dGeCircle`](Mx3dGeCircle.md)

变换后的圆。

___

### TranslateBy2Points

▸ **TranslateBy2Points**(`theP1`, `theP2`): `void`

根据两个点平移当前圆。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theP1` | [`Mx3dGePoint`](Mx3dGePoint.md) | 起点。 |
| `theP2` | [`Mx3dGePoint`](Mx3dGePoint.md) | 终点。 |

#### Returns

`void`

___

### TranslateByVec

▸ **TranslateByVec**(`theV`): `void`

根据向量平移当前圆。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theV` | [`Mx3dGeVec`](Mx3dGeVec.md) | 平移向量。 |

#### Returns

`void`

___

### TranslatedBy2Points

▸ **TranslatedBy2Points**(`theP1`, `theP2`): [`Mx3dGeCircle`](Mx3dGeCircle.md)

返回根据两个点平移后的圆。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theP1` | [`Mx3dGePoint`](Mx3dGePoint.md) | 起点。 |
| `theP2` | [`Mx3dGePoint`](Mx3dGePoint.md) | 终点。 |

#### Returns

[`Mx3dGeCircle`](Mx3dGeCircle.md)

平移后的圆。

___

### TranslatedByVec

▸ **TranslatedByVec**(`theV`): [`Mx3dGeCircle`](Mx3dGeCircle.md)

返回根据向量平移后的圆。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theV` | [`Mx3dGeVec`](Mx3dGeVec.md) | 平移向量。 |

#### Returns

[`Mx3dGeCircle`](Mx3dGeCircle.md)

平移后的圆。

___

### XAxis

▸ **XAxis**(): [`Mx3dGeAxis`](Mx3dGeAxis.md)

返回圆的X轴。

#### Returns

[`Mx3dGeAxis`](Mx3dGeAxis.md)

圆的X轴。

___

### YAxis

▸ **YAxis**(): [`Mx3dGeAxis`](Mx3dGeAxis.md)

返回圆的Y轴。

#### Returns

[`Mx3dGeAxis`](Mx3dGeAxis.md)

圆的Y轴。
