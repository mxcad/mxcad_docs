[mxcad_3d API 文档](../README.md) / Mx3dGeCSYSR

# Class: Mx3dGeCSYSR

表示右手坐标系的类。

## Hierarchy

- [`Mx3dGeObject`](Mx3dGeObject.md)

  ↳ **`Mx3dGeCSYSR`**

## Table of contents

### Constructors

- [constructor](Mx3dGeCSYSR.md#constructor)

### Methods

- [Angle](Mx3dGeCSYSR.md#angle)
- [Axis](Mx3dGeCSYSR.md#axis)
- [Direction](Mx3dGeCSYSR.md#direction)
- [IsCoplanarWithAxis](Mx3dGeCSYSR.md#iscoplanarwithaxis)
- [IsCoplanarWithCSYSR](Mx3dGeCSYSR.md#iscoplanarwithcsysr)
- [Location](Mx3dGeCSYSR.md#location)
- [MirrorByAxis](Mx3dGeCSYSR.md#mirrorbyaxis)
- [MirrorByCSYSR](Mx3dGeCSYSR.md#mirrorbycsysr)
- [MirrorByPoint](Mx3dGeCSYSR.md#mirrorbypoint)
- [MirroredByAxis](Mx3dGeCSYSR.md#mirroredbyaxis)
- [MirroredByCSYSR](Mx3dGeCSYSR.md#mirroredbycsysr)
- [MirroredByPoint](Mx3dGeCSYSR.md#mirroredbypoint)
- [Rotate](Mx3dGeCSYSR.md#rotate)
- [Rotated](Mx3dGeCSYSR.md#rotated)
- [Scale](Mx3dGeCSYSR.md#scale)
- [Scaled](Mx3dGeCSYSR.md#scaled)
- [SetDirection](Mx3dGeCSYSR.md#setdirection)
- [SetLocation](Mx3dGeCSYSR.md#setlocation)
- [SetXDirection](Mx3dGeCSYSR.md#setxdirection)
- [SetYDirection](Mx3dGeCSYSR.md#setydirection)
- [Transform](Mx3dGeCSYSR.md#transform)
- [Transformed](Mx3dGeCSYSR.md#transformed)
- [TranslateBy2Points](Mx3dGeCSYSR.md#translateby2points)
- [TranslateByVec](Mx3dGeCSYSR.md#translatebyvec)
- [TranslatedBy2Points](Mx3dGeCSYSR.md#translatedby2points)
- [TranslatedByVec](Mx3dGeCSYSR.md#translatedbyvec)
- [XDirection](Mx3dGeCSYSR.md#xdirection)
- [YDirection](Mx3dGeCSYSR.md#ydirection)

## Constructors

### constructor

• **new Mx3dGeCSYSR**()

创建一个默认的右手坐标系对象。

#### Overrides

Mx3dGeObject.constructor

• **new Mx3dGeCSYSR**(`origin`, `z_axis`, `x_vec`)

使用原点、Z 轴方向和 X 轴向量创建一个右手坐标系对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `origin` | [`Mx3dGePoint`](Mx3dGePoint.md) | 坐标系的原点。 |
| `z_axis` | [`Mx3dGeDir`](Mx3dGeDir.md) | 坐标系的 Z 轴方向。 |
| `x_vec` | [`Mx3dGeDir`](Mx3dGeDir.md) | 坐标系的 X 轴向量。 |

#### Overrides

Mx3dGeObject.constructor

• **new Mx3dGeCSYSR**(`origin`, `z_axis`)

使用原点、Z 轴方向创建一个右手坐标系对象，X Y 方向自动确定。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `origin` | [`Mx3dGePoint`](Mx3dGePoint.md) | 坐标系的原点。 |
| `z_axis` | [`Mx3dGeDir`](Mx3dGeDir.md) | 坐标系的 Z 轴方向。 |

#### Overrides

Mx3dGeObject.constructor

## Methods

### Angle

▸ **Angle**(`theOther`): `number`

计算与另一个右手坐标系的角度。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theOther` | [`Mx3dGeCSYSR`](Mx3dGeCSYSR.md) | 另一个右手坐标系。 |

#### Returns

`number`

两个坐标系之间的角度。

___

### Axis

▸ **Axis**(): [`Mx3dGeAxis`](Mx3dGeAxis.md)

获取右手坐标系的轴。

#### Returns

[`Mx3dGeAxis`](Mx3dGeAxis.md)

右手坐标系的轴。

___

### Direction

▸ **Direction**(): [`Mx3dGeDir`](Mx3dGeDir.md)

获取右手坐标系的 Z 轴方向。

#### Returns

[`Mx3dGeDir`](Mx3dGeDir.md)

Z 轴方向。

___

### IsCoplanarWithAxis

▸ **IsCoplanarWithAxis**(`A1`, `LinearTolerance`, `AngularTolerance`): `boolean`

判断右手坐标系是否与一个轴共面。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `A1` | [`Mx3dGeAxis`](Mx3dGeAxis.md) | 轴对象。 |
| `LinearTolerance` | `number` | 线性公差。 |
| `AngularTolerance` | `number` | 角度公差。 |

#### Returns

`boolean`

是否共面。

___

### IsCoplanarWithCSYSR

▸ **IsCoplanarWithCSYSR**(`Other`, `LinearTolerance`, `AngularTolerance`): `boolean`

判断右手坐标系是否与另一个右手坐标系共面。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Other` | [`Mx3dGeCSYSR`](Mx3dGeCSYSR.md) | 另一个右手坐标系。 |
| `LinearTolerance` | `number` | 线性公差。 |
| `AngularTolerance` | `number` | 角度公差。 |

#### Returns

`boolean`

是否共面。

___

### Location

▸ **Location**(): [`Mx3dGePoint`](Mx3dGePoint.md)

获取右手坐标系的原点位置。

#### Returns

[`Mx3dGePoint`](Mx3dGePoint.md)

原点位置。

___

### MirrorByAxis

▸ **MirrorByAxis**(`A1`): `void`

通过一个轴对右手坐标系进行镜像。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `A1` | [`Mx3dGeAxis`](Mx3dGeAxis.md) | 镜像轴。 |

#### Returns

`void`

___

### MirrorByCSYSR

▸ **MirrorByCSYSR**(`A2`): `void`

通过右手坐标系对当前右手坐标系进行镜像。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `A2` | [`Mx3dGeCSYSR`](Mx3dGeCSYSR.md) | 右手坐标系对象。 |

#### Returns

`void`

___

### MirrorByPoint

▸ **MirrorByPoint**(`P`): `void`

通过一个点对右手坐标系进行镜像。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `P` | [`Mx3dGePoint`](Mx3dGePoint.md) | 镜像点。 |

#### Returns

`void`

___

### MirroredByAxis

▸ **MirroredByAxis**(`A1`): [`Mx3dGeCSYSR`](Mx3dGeCSYSR.md)

通过一个轴对右手坐标系进行镜像，并返回镜像后的右手坐标系对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `A1` | [`Mx3dGeAxis`](Mx3dGeAxis.md) | 镜像轴。 |

#### Returns

[`Mx3dGeCSYSR`](Mx3dGeCSYSR.md)

镜像后的右手坐标系对象。

___

### MirroredByCSYSR

▸ **MirroredByCSYSR**(`A2`): [`Mx3dGeCSYSR`](Mx3dGeCSYSR.md)

通过右手坐标系对当前右手坐标系进行镜像，并返回镜像后的右手坐标系对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `A2` | [`Mx3dGeCSYSR`](Mx3dGeCSYSR.md) | 右手坐标系对象。 |

#### Returns

[`Mx3dGeCSYSR`](Mx3dGeCSYSR.md)

镜像后的右手坐标系对象。

___

### MirroredByPoint

▸ **MirroredByPoint**(`P`): [`Mx3dGeCSYSR`](Mx3dGeCSYSR.md)

通过一个点对右手坐标系进行镜像，并返回镜像后的右手坐标系对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `P` | [`Mx3dGePoint`](Mx3dGePoint.md) | 镜像点。 |

#### Returns

[`Mx3dGeCSYSR`](Mx3dGeCSYSR.md)

镜像后的右手坐标系对象。

___

### Rotate

▸ **Rotate**(`theA1`, `theAng`): `void`

绕轴旋转右手坐标系。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theA1` | [`Mx3dGeAxis`](Mx3dGeAxis.md) | 旋转轴。 |
| `theAng` | `number` | 旋转角度。 |

#### Returns

`void`

___

### Rotated

▸ **Rotated**(`theA1`, `theAng`): [`Mx3dGeCSYSR`](Mx3dGeCSYSR.md)

绕轴旋转右手坐标系，并返回旋转后的右手坐标系对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theA1` | [`Mx3dGeAxis`](Mx3dGeAxis.md) | 旋转轴。 |
| `theAng` | `number` | 旋转角度。 |

#### Returns

[`Mx3dGeCSYSR`](Mx3dGeCSYSR.md)

旋转后的右手坐标系对象。

___

### Scale

▸ **Scale**(`theP`, `theS`): `void`

对右手坐标系进行缩放。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theP` | [`Mx3dGePoint`](Mx3dGePoint.md) | 缩放中心点。 |
| `theS` | `number` | 缩放比例。 |

#### Returns

`void`

___

### Scaled

▸ **Scaled**(`theP`, `theS`): [`Mx3dGeCSYSR`](Mx3dGeCSYSR.md)

对右手坐标系进行缩放，并返回缩放后的右手坐标系对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theP` | [`Mx3dGePoint`](Mx3dGePoint.md) | 缩放中心点。 |
| `theS` | `number` | 缩放比例。 |

#### Returns

[`Mx3dGeCSYSR`](Mx3dGeCSYSR.md)

缩放后的右手坐标系对象。

___

### SetDirection

▸ **SetDirection**(`z_dir`): `void`

设置右手坐标系的 Z 轴方向。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `z_dir` | [`Mx3dGeDir`](Mx3dGeDir.md) | Z 轴方向。 |

#### Returns

`void`

___

### SetLocation

▸ **SetLocation**(`origin`): `void`

设置右手坐标系的原点位置。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `origin` | [`Mx3dGePoint`](Mx3dGePoint.md) | 坐标系的原点。 |

#### Returns

`void`

▸ **SetLocation**(`theX`, `theY`, `theZ`): `void`

设置右手坐标系的原点位置。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theX` | `number` | 原点的 X 坐标。 |
| `theY` | `number` | 原点的 Y 坐标。 |
| `theZ` | `number` | 原点的 Z 坐标。 |

#### Returns

`void`

___

### SetXDirection

▸ **SetXDirection**(`x_dir`): `void`

设置右手坐标系的 X 轴方向。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x_dir` | [`Mx3dGePoint`](Mx3dGePoint.md) | X 轴方向。 |

#### Returns

`void`

___

### SetYDirection

▸ **SetYDirection**(`y_dir`): `void`

设置右手坐标系的 Y 轴方向。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `y_dir` | [`Mx3dGeDir`](Mx3dGeDir.md) | Y 轴方向。 |

#### Returns

`void`

___

### Transform

▸ **Transform**(`theT`): `void`

变换右手坐标系。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theT` | [`Mx3dGeTrsf`](Mx3dGeTrsf.md) | 变换矩阵。 |

#### Returns

`void`

___

### Transformed

▸ **Transformed**(`theT`): [`Mx3dGeCSYSR`](Mx3dGeCSYSR.md)

变换右手坐标系，并返回变换后的右手坐标系对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theT` | [`Mx3dGeTrsf`](Mx3dGeTrsf.md) | 变换矩阵。 |

#### Returns

[`Mx3dGeCSYSR`](Mx3dGeCSYSR.md)

变换后的右手坐标系对象。

___

### TranslateBy2Points

▸ **TranslateBy2Points**(`theP1`, `theP2`): `void`

通过两个点平移右手坐标系。

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

通过向量平移右手坐标系。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theV` | [`Mx3dGeVec`](Mx3dGeVec.md) | 平移向量。 |

#### Returns

`void`

___

### TranslatedBy2Points

▸ **TranslatedBy2Points**(`theP1`, `theP2`): [`Mx3dGeCSYSR`](Mx3dGeCSYSR.md)

通过两个点平移右手坐标系，并返回平移后的右手坐标系对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theP1` | [`Mx3dGePoint`](Mx3dGePoint.md) | 起点。 |
| `theP2` | [`Mx3dGePoint`](Mx3dGePoint.md) | 终点。 |

#### Returns

[`Mx3dGeCSYSR`](Mx3dGeCSYSR.md)

平移后的右手坐标系对象。

___

### TranslatedByVec

▸ **TranslatedByVec**(`theV`): [`Mx3dGeCSYSR`](Mx3dGeCSYSR.md)

通过向量平移右手坐标系，并返回平移后的右手坐标系对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theV` | [`Mx3dGeVec`](Mx3dGeVec.md) | 平移向量。 |

#### Returns

[`Mx3dGeCSYSR`](Mx3dGeCSYSR.md)

平移后的右手坐标系对象。

___

### XDirection

▸ **XDirection**(): [`Mx3dGeDir`](Mx3dGeDir.md)

获取右手坐标系的 X 轴方向。

#### Returns

[`Mx3dGeDir`](Mx3dGeDir.md)

X 轴方向。

___

### YDirection

▸ **YDirection**(): [`Mx3dGeDir`](Mx3dGeDir.md)

获取右手坐标系的 Y 轴方向。

#### Returns

[`Mx3dGeDir`](Mx3dGeDir.md)

Y 轴方向。
