[mxcad_3d API 文档](../README.md) / Mx3dGeCSYS

# Class: Mx3dGeCSYS

表示通用坐标系的类。

## Hierarchy

- [`Mx3dGeObject`](Mx3dGeObject.md)

  ↳ **`Mx3dGeCSYS`**

## Table of contents

### Constructors

- [constructor](Mx3dGeCSYS.md#constructor)

### Methods

- [Angle](Mx3dGeCSYS.md#angle)
- [Axis](Mx3dGeCSYS.md#axis)
- [CSYSR](Mx3dGeCSYS.md#csysr)
- [Direct](Mx3dGeCSYS.md#direct)
- [Direction](Mx3dGeCSYS.md#direction)
- [IsCoplanarWithAxis](Mx3dGeCSYS.md#iscoplanarwithaxis)
- [IsCoplanarWithCSYS](Mx3dGeCSYS.md#iscoplanarwithcsys)
- [Location](Mx3dGeCSYS.md#location)
- [MirrorByAxis](Mx3dGeCSYS.md#mirrorbyaxis)
- [MirrorByCSYSR](Mx3dGeCSYS.md#mirrorbycsysr)
- [MirrorByPoint](Mx3dGeCSYS.md#mirrorbypoint)
- [MirroredByAxis](Mx3dGeCSYS.md#mirroredbyaxis)
- [MirroredByCSYSR](Mx3dGeCSYS.md#mirroredbycsysr)
- [MirroredByPoint](Mx3dGeCSYS.md#mirroredbypoint)
- [Rotate](Mx3dGeCSYS.md#rotate)
- [Rotated](Mx3dGeCSYS.md#rotated)
- [Scale](Mx3dGeCSYS.md#scale)
- [Scaled](Mx3dGeCSYS.md#scaled)
- [SetAxis](Mx3dGeCSYS.md#setaxis)
- [SetDirection](Mx3dGeCSYS.md#setdirection)
- [SetLocation](Mx3dGeCSYS.md#setlocation)
- [SetXDirection](Mx3dGeCSYS.md#setxdirection)
- [SetYDirection](Mx3dGeCSYS.md#setydirection)
- [Transform](Mx3dGeCSYS.md#transform)
- [Transformed](Mx3dGeCSYS.md#transformed)
- [TranslateBy2Points](Mx3dGeCSYS.md#translateby2points)
- [TranslateByVec](Mx3dGeCSYS.md#translatebyvec)
- [TranslatedBy2Points](Mx3dGeCSYS.md#translatedby2points)
- [TranslatedByVec](Mx3dGeCSYS.md#translatedbyvec)
- [XDirection](Mx3dGeCSYS.md#xdirection)
- [XReverse](Mx3dGeCSYS.md#xreverse)
- [YDirection](Mx3dGeCSYS.md#ydirection)
- [YReverse](Mx3dGeCSYS.md#yreverse)
- [ZReverse](Mx3dGeCSYS.md#zreverse)

## Constructors

### constructor

• **new Mx3dGeCSYS**()

创建一个默认的坐标系对象。

#### Overrides

Mx3dGeObject.constructor

• **new Mx3dGeCSYS**(`csysr`)

使用右手坐标系创建一个坐标系对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `csysr` | [`Mx3dGeCSYSR`](Mx3dGeCSYSR.md) | 右手坐标系对象。 |

#### Overrides

Mx3dGeObject.constructor

• **new Mx3dGeCSYS**(`origin`, `z_axis`)

使用原点和 Z 轴方向创建一个坐标系对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `origin` | [`Mx3dGePoint`](Mx3dGePoint.md) | 坐标系的原点。 |
| `z_axis` | [`Mx3dGeDir`](Mx3dGeDir.md) | 坐标系的 Z 轴方向。 |

#### Overrides

Mx3dGeObject.constructor

• **new Mx3dGeCSYS**(`origin`, `z_axis`, `x_vec`)

使用原点、Z 轴方向和 X 轴向量创建一个坐标系对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `origin` | [`Mx3dGePoint`](Mx3dGePoint.md) | 坐标系的原点。 |
| `z_axis` | [`Mx3dGeDir`](Mx3dGeDir.md) | 坐标系的 Z 轴方向。 |
| `x_vec` | [`Mx3dGeDir`](Mx3dGeDir.md) | 坐标系的 X 轴向量。 |

#### Overrides

Mx3dGeObject.constructor

## Methods

### Angle

▸ **Angle**(`other`): `number`

计算与另一个坐标系的角度。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `other` | [`Mx3dGeCSYS`](Mx3dGeCSYS.md) | 另一个坐标系。 |

#### Returns

`number`

两个坐标系之间的角度。

___

### Axis

▸ **Axis**(): [`Mx3dGeAxis`](Mx3dGeAxis.md)

获取坐标系的轴。

#### Returns

[`Mx3dGeAxis`](Mx3dGeAxis.md)

坐标系的轴。

___

### CSYSR

▸ **CSYSR**(): [`Mx3dGeCSYSR`](Mx3dGeCSYSR.md)

获取右手坐标系。

#### Returns

[`Mx3dGeCSYSR`](Mx3dGeCSYSR.md)

右手坐标系对象。

___

### Direct

▸ **Direct**(): `boolean`

判断坐标系是否为直接的。

#### Returns

`boolean`

是否为直接的。

___

### Direction

▸ **Direction**(): [`Mx3dGeDir`](Mx3dGeDir.md)

获取坐标系的方向。

#### Returns

[`Mx3dGeDir`](Mx3dGeDir.md)

坐标系的方向。

___

### IsCoplanarWithAxis

▸ **IsCoplanarWithAxis**(`axis`, `linearTolerance`, `angularTolerance`): `boolean`

判断坐标系是否与一个轴共面。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `axis` | [`Mx3dGeAxis`](Mx3dGeAxis.md) | 轴对象。 |
| `linearTolerance` | `number` | 线性公差。 |
| `angularTolerance` | `number` | 角度公差。 |

#### Returns

`boolean`

是否共面。

___

### IsCoplanarWithCSYS

▸ **IsCoplanarWithCSYS**(`other`, `linearTolerance`, `angularTolerance`): `boolean`

判断坐标系是否与另一个坐标系共面。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `other` | [`Mx3dGeCSYS`](Mx3dGeCSYS.md) | 另一个坐标系。 |
| `linearTolerance` | `number` | 线性公差。 |
| `angularTolerance` | `number` | 角度公差。 |

#### Returns

`boolean`

是否共面。

___

### Location

▸ **Location**(): [`Mx3dGePoint`](Mx3dGePoint.md)

获取坐标系的原点位置。

#### Returns

[`Mx3dGePoint`](Mx3dGePoint.md)

坐标系的原点位置。

___

### MirrorByAxis

▸ **MirrorByAxis**(`axis`): `void`

通过一个轴对坐标系进行镜像。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `axis` | [`Mx3dGeAxis`](Mx3dGeAxis.md) | 镜像轴。 |

#### Returns

`void`

___

### MirrorByCSYSR

▸ **MirrorByCSYSR**(`csysr`): `void`

通过右手坐标系对当前坐标系进行镜像。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `csysr` | [`Mx3dGeCSYSR`](Mx3dGeCSYSR.md) | 右手坐标系对象。 |

#### Returns

`void`

___

### MirrorByPoint

▸ **MirrorByPoint**(`point`): `void`

通过一个点对坐标系进行镜像。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `point` | [`Mx3dGePoint`](Mx3dGePoint.md) | 镜像点。 |

#### Returns

`void`

___

### MirroredByAxis

▸ **MirroredByAxis**(`axis`): [`Mx3dGeCSYS`](Mx3dGeCSYS.md)

通过一个轴对坐标系进行镜像，并返回镜像后的坐标系对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `axis` | [`Mx3dGeAxis`](Mx3dGeAxis.md) | 镜像轴。 |

#### Returns

[`Mx3dGeCSYS`](Mx3dGeCSYS.md)

镜像后的坐标系对象。

___

### MirroredByCSYSR

▸ **MirroredByCSYSR**(`csysr`): [`Mx3dGeCSYS`](Mx3dGeCSYS.md)

通过右手坐标系对当前坐标系进行镜像，并返回镜像后的坐标系对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `csysr` | [`Mx3dGeCSYSR`](Mx3dGeCSYSR.md) | 右手坐标系对象。 |

#### Returns

[`Mx3dGeCSYS`](Mx3dGeCSYS.md)

镜像后的坐标系对象。

___

### MirroredByPoint

▸ **MirroredByPoint**(`point`): [`Mx3dGeCSYS`](Mx3dGeCSYS.md)

通过一个点对坐标系进行镜像，并返回镜像后的坐标系对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `point` | [`Mx3dGePoint`](Mx3dGePoint.md) | 镜像点。 |

#### Returns

[`Mx3dGeCSYS`](Mx3dGeCSYS.md)

镜像后的坐标系对象。

___

### Rotate

▸ **Rotate**(`axis`, `ang`): `void`

绕轴旋转坐标系。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `axis` | [`Mx3dGeAxis`](Mx3dGeAxis.md) | 旋转轴。 |
| `ang` | `number` | 旋转角度。 |

#### Returns

`void`

___

### Rotated

▸ **Rotated**(`axis`, `ang`): [`Mx3dGeCSYS`](Mx3dGeCSYS.md)

绕轴旋转坐标系，并返回旋转后的坐标系对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `axis` | [`Mx3dGeAxis`](Mx3dGeAxis.md) | 旋转轴。 |
| `ang` | `number` | 旋转角度。 |

#### Returns

[`Mx3dGeCSYS`](Mx3dGeCSYS.md)

旋转后的坐标系对象。

___

### Scale

▸ **Scale**(`point`, `s`): `void`

按比例缩放坐标系。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `point` | [`Mx3dGePoint`](Mx3dGePoint.md) | 缩放的基点。 |
| `s` | `number` | 缩放比例。 |

#### Returns

`void`

___

### Scaled

▸ **Scaled**(`point`, `s`): [`Mx3dGeCSYS`](Mx3dGeCSYS.md)

按比例缩放坐标系，并返回缩放后的坐标系对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `point` | [`Mx3dGePoint`](Mx3dGePoint.md) | 缩放的基点。 |
| `s` | `number` | 缩放比例。 |

#### Returns

[`Mx3dGeCSYS`](Mx3dGeCSYS.md)

缩放后的坐标系对象。

___

### SetAxis

▸ **SetAxis**(`z_axis`): `void`

设置坐标系的轴。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `z_axis` | [`Mx3dGeAxis`](Mx3dGeAxis.md) | 坐标系的 Z 轴。 |

#### Returns

`void`

___

### SetDirection

▸ **SetDirection**(`z_dir`): `void`

设置坐标系的方向。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `z_dir` | [`Mx3dGeDir`](Mx3dGeDir.md) | 坐标系的 Z 轴方向。 |

#### Returns

`void`

___

### SetLocation

▸ **SetLocation**(`origin`): `void`

设置坐标系的原点位置。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `origin` | [`Mx3dGePoint`](Mx3dGePoint.md) | 坐标系的原点。 |

#### Returns

`void`

▸ **SetLocation**(`theX`, `theY`, `theZ`): `void`

设置坐标系的原点位置。

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

设置坐标系的 X 轴方向。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x_dir` | [`Mx3dGeDir`](Mx3dGeDir.md) | X 轴方向。 |

#### Returns

`void`

___

### SetYDirection

▸ **SetYDirection**(`y_dir`): `void`

设置坐标系的 Y 轴方向。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `y_dir` | [`Mx3dGeDir`](Mx3dGeDir.md) | Y 轴方向。 |

#### Returns

`void`

___

### Transform

▸ **Transform**(`t`): `void`

变换坐标系。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `t` | [`Mx3dGeTrsf`](Mx3dGeTrsf.md) | 变换对象。 |

#### Returns

`void`

___

### Transformed

▸ **Transformed**(`t`): [`Mx3dGeCSYS`](Mx3dGeCSYS.md)

变换坐标系，并返回变换后的坐标系对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `t` | [`Mx3dGeTrsf`](Mx3dGeTrsf.md) | 变换对象。 |

#### Returns

[`Mx3dGeCSYS`](Mx3dGeCSYS.md)

变换后的坐标系对象。

___

### TranslateBy2Points

▸ **TranslateBy2Points**(`point1`, `point2`): `void`

通过两个点平移坐标系。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `point1` | [`Mx3dGePoint`](Mx3dGePoint.md) | 起点。 |
| `point2` | [`Mx3dGePoint`](Mx3dGePoint.md) | 终点。 |

#### Returns

`void`

___

### TranslateByVec

▸ **TranslateByVec**(`vec`): `void`

按向量平移坐标系。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vec` | [`Mx3dGeVec`](Mx3dGeVec.md) | 平移向量。 |

#### Returns

`void`

___

### TranslatedBy2Points

▸ **TranslatedBy2Points**(`point1`, `point2`): [`Mx3dGeCSYS`](Mx3dGeCSYS.md)

通过两个点平移坐标系，并返回平移后的坐标系对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `point1` | [`Mx3dGePoint`](Mx3dGePoint.md) | 起点。 |
| `point2` | [`Mx3dGePoint`](Mx3dGePoint.md) | 终点。 |

#### Returns

[`Mx3dGeCSYS`](Mx3dGeCSYS.md)

平移后的坐标系对象。

___

### TranslatedByVec

▸ **TranslatedByVec**(`vec`): [`Mx3dGeCSYS`](Mx3dGeCSYS.md)

按向量平移坐标系，并返回平移后的坐标系对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vec` | [`Mx3dGeVec`](Mx3dGeVec.md) | 平移向量。 |

#### Returns

[`Mx3dGeCSYS`](Mx3dGeCSYS.md)

平移后的坐标系对象。

___

### XDirection

▸ **XDirection**(): [`Mx3dGeDir`](Mx3dGeDir.md)

获取坐标系的 X 轴方向。

#### Returns

[`Mx3dGeDir`](Mx3dGeDir.md)

X 轴方向。

___

### XReverse

▸ **XReverse**(): `void`

反转 X 轴方向。

#### Returns

`void`

___

### YDirection

▸ **YDirection**(): [`Mx3dGeDir`](Mx3dGeDir.md)

获取坐标系的 Y 轴方向。

#### Returns

[`Mx3dGeDir`](Mx3dGeDir.md)

Y 轴方向。

___

### YReverse

▸ **YReverse**(): `void`

反转 Y 轴方向。

#### Returns

`void`

___

### ZReverse

▸ **ZReverse**(): `void`

反转 Z 轴方向。

#### Returns

`void`
