[mxcad_3d API 文档](../README.md) / Mx3dGeCylinder

# Class: Mx3dGeCylinder

表示圆柱体的类。

## Hierarchy

- [`Mx3dGeObject`](Mx3dGeObject.md)

  ↳ **`Mx3dGeCylinder`**

## Table of contents

### Constructors

- [constructor](Mx3dGeCylinder.md#constructor)

### Methods

- [Axis](Mx3dGeCylinder.md#axis)
- [Direct](Mx3dGeCylinder.md#direct)
- [Location](Mx3dGeCylinder.md#location)
- [MirrorByAxis](Mx3dGeCylinder.md#mirrorbyaxis)
- [MirrorByCSYSR](Mx3dGeCylinder.md#mirrorbycsysr)
- [MirrorByPoint](Mx3dGeCylinder.md#mirrorbypoint)
- [MirroredByAxis](Mx3dGeCylinder.md#mirroredbyaxis)
- [MirroredByCSYSR](Mx3dGeCylinder.md#mirroredbycsysr)
- [MirroredByPoint](Mx3dGeCylinder.md#mirroredbypoint)
- [Position](Mx3dGeCylinder.md#position)
- [Radius](Mx3dGeCylinder.md#radius)
- [Rotate](Mx3dGeCylinder.md#rotate)
- [Rotated](Mx3dGeCylinder.md#rotated)
- [Scale](Mx3dGeCylinder.md#scale)
- [Scaled](Mx3dGeCylinder.md#scaled)
- [SetAxis](Mx3dGeCylinder.md#setaxis)
- [SetLocation](Mx3dGeCylinder.md#setlocation)
- [SetPosition](Mx3dGeCylinder.md#setposition)
- [SetRadius](Mx3dGeCylinder.md#setradius)
- [Shape](Mx3dGeCylinder.md#shape)
- [Transform](Mx3dGeCylinder.md#transform)
- [Transformed](Mx3dGeCylinder.md#transformed)
- [TranslateBy2Points](Mx3dGeCylinder.md#translateby2points)
- [TranslateByVec](Mx3dGeCylinder.md#translatebyvec)
- [TranslatedBy2Points](Mx3dGeCylinder.md#translatedby2points)
- [TranslatedByVec](Mx3dGeCylinder.md#translatedbyvec)
- [UReverse](Mx3dGeCylinder.md#ureverse)
- [VReverse](Mx3dGeCylinder.md#vreverse)
- [XAxis](Mx3dGeCylinder.md#xaxis)
- [YAxis](Mx3dGeCylinder.md#yaxis)

## Constructors

### constructor

• **new Mx3dGeCylinder**()

创建一个默认的圆柱体对象。

#### Overrides

Mx3dGeObject.constructor

• **new Mx3dGeCylinder**(`theA3`, `theRadius`)

使用坐标系和半径创建一个圆柱体对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theA3` | [`Mx3dGeCSYS`](Mx3dGeCSYS.md) | 坐标系。 |
| `theRadius` | `number` | 圆柱体的半径。 |

#### Overrides

Mx3dGeObject.constructor

## Methods

### Axis

▸ **Axis**(): [`Mx3dGeAxis`](Mx3dGeAxis.md)

获取圆柱体的轴。

#### Returns

[`Mx3dGeAxis`](Mx3dGeAxis.md)

圆柱体的轴。

___

### Direct

▸ **Direct**(): `boolean`

检查圆柱体的方向是否为正向。

#### Returns

`boolean`

是否为正向。

___

### Location

▸ **Location**(): [`Mx3dGePoint`](Mx3dGePoint.md)

获取圆柱体的原点位置。

#### Returns

[`Mx3dGePoint`](Mx3dGePoint.md)

原点位置。

___

### MirrorByAxis

▸ **MirrorByAxis**(`theA1`): `void`

通过一个轴对圆柱体进行镜像。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theA1` | [`Mx3dGeAxis`](Mx3dGeAxis.md) | 镜像轴。 |

#### Returns

`void`

___

### MirrorByCSYSR

▸ **MirrorByCSYSR**(`theA2`): `void`

通过右手坐标系对圆柱体进行镜像。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theA2` | [`Mx3dGeCSYSR`](Mx3dGeCSYSR.md) | 右手坐标系。 |

#### Returns

`void`

___

### MirrorByPoint

▸ **MirrorByPoint**(`theP`): `void`

通过一个点对圆柱体进行镜像。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theP` | [`Mx3dGePoint`](Mx3dGePoint.md) | 镜像点。 |

#### Returns

`void`

___

### MirroredByAxis

▸ **MirroredByAxis**(`theA1`): [`Mx3dGeCylinder`](Mx3dGeCylinder.md)

通过一个轴对圆柱体进行镜像，并返回镜像后的圆柱体对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theA1` | [`Mx3dGeAxis`](Mx3dGeAxis.md) | 镜像轴。 |

#### Returns

[`Mx3dGeCylinder`](Mx3dGeCylinder.md)

镜像后的圆柱体对象。

___

### MirroredByCSYSR

▸ **MirroredByCSYSR**(`theA2`): [`Mx3dGeCylinder`](Mx3dGeCylinder.md)

通过右手坐标系对圆柱体进行镜像，并返回镜像后的圆柱体对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theA2` | [`Mx3dGeCSYSR`](Mx3dGeCSYSR.md) | 右手坐标系。 |

#### Returns

[`Mx3dGeCylinder`](Mx3dGeCylinder.md)

镜像后的圆柱体对象。

___

### MirroredByPoint

▸ **MirroredByPoint**(`theP`): [`Mx3dGeCylinder`](Mx3dGeCylinder.md)

通过一个点对圆柱体进行镜像，并返回镜像后的圆柱体对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theP` | [`Mx3dGePoint`](Mx3dGePoint.md) | 镜像点。 |

#### Returns

[`Mx3dGeCylinder`](Mx3dGeCylinder.md)

镜像后的圆柱体对象。

___

### Position

▸ **Position**(): [`Mx3dGeCSYS`](Mx3dGeCSYS.md)

获取圆柱体的位置。

#### Returns

[`Mx3dGeCSYS`](Mx3dGeCSYS.md)

圆柱体的位置。

___

### Radius

▸ **Radius**(): `number`

获取圆柱体的半径。

#### Returns

`number`

圆柱体的半径。

___

### Rotate

▸ **Rotate**(`theA1`, `theAng`): `void`

绕轴旋转圆柱体。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theA1` | [`Mx3dGeAxis`](Mx3dGeAxis.md) | 旋转轴。 |
| `theAng` | `number` | 旋转角度。 |

#### Returns

`void`

___

### Rotated

▸ **Rotated**(`theA1`, `theAng`): [`Mx3dGeCylinder`](Mx3dGeCylinder.md)

绕轴旋转圆柱体，并返回旋转后的圆柱体对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theA1` | [`Mx3dGeAxis`](Mx3dGeAxis.md) | 旋转轴。 |
| `theAng` | `number` | 旋转角度。 |

#### Returns

[`Mx3dGeCylinder`](Mx3dGeCylinder.md)

旋转后的圆柱体对象。

___

### Scale

▸ **Scale**(`theP`, `theS`): `void`

对圆柱体进行缩放。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theP` | [`Mx3dGePoint`](Mx3dGePoint.md) | 缩放中心点。 |
| `theS` | `number` | 缩放比例。 |

#### Returns

`void`

___

### Scaled

▸ **Scaled**(`theP`, `theS`): [`Mx3dGeCylinder`](Mx3dGeCylinder.md)

对圆柱体进行缩放，并返回缩放后的圆柱体对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theP` | [`Mx3dGePoint`](Mx3dGePoint.md) | 缩放中心点。 |
| `theS` | `number` | 缩放比例。 |

#### Returns

[`Mx3dGeCylinder`](Mx3dGeCylinder.md)

缩放后的圆柱体对象。

___

### SetAxis

▸ **SetAxis**(`theA1`): `void`

设置圆柱体的轴。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theA1` | [`Mx3dGeAxis`](Mx3dGeAxis.md) | 圆柱体的轴。 |

#### Returns

`void`

___

### SetLocation

▸ **SetLocation**(`theLoc`): `void`

设置圆柱体的原点位置。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theLoc` | [`Mx3dGePoint`](Mx3dGePoint.md) | 原点位置。 |

#### Returns

`void`

___

### SetPosition

▸ **SetPosition**(`theA3`): `void`

设置圆柱体的位置。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theA3` | [`Mx3dGeCSYS`](Mx3dGeCSYS.md) | 坐标系。 |

#### Returns

`void`

___

### SetRadius

▸ **SetRadius**(`theR`): `void`

设置圆柱体的半径。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theR` | `number` | 圆柱体的半径。 |

#### Returns

`void`

___

### Shape

▸ **Shape**(`H`, `Angle?`): [`Mx3dShapeObject`](Mx3dShapeObject.md)

创建一个 Mx3dShapeObject 对象，表示圆柱体的形状。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `H` | `number` | 圆柱体的高度。 |
| `Angle?` | `number` | 可选参数，表示圆柱体的角度。 |

#### Returns

[`Mx3dShapeObject`](Mx3dShapeObject.md)

返回一个新的 Mx3dShapeObject 对象，表示圆柱体的形状。

___

### Transform

▸ **Transform**(`theT`): `void`

变换圆柱体。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theT` | [`Mx3dGeTrsf`](Mx3dGeTrsf.md) | 变换矩阵。 |

#### Returns

`void`

___

### Transformed

▸ **Transformed**(`theT`): [`Mx3dGeCylinder`](Mx3dGeCylinder.md)

变换圆柱体，并返回变换后的圆柱体对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theT` | [`Mx3dGeTrsf`](Mx3dGeTrsf.md) | 变换矩阵。 |

#### Returns

[`Mx3dGeCylinder`](Mx3dGeCylinder.md)

变换后的圆柱体对象。

___

### TranslateBy2Points

▸ **TranslateBy2Points**(`theP1`, `theP2`): `void`

将圆柱体的位置沿着两个点之间的直线进行平移。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theP1` | [`Mx3dGePoint`](Mx3dGePoint.md) | 第一个点，用于确定平移的起点。 |
| `theP2` | [`Mx3dGePoint`](Mx3dGePoint.md) | 第二个点，用于确定平移的终点。 |

#### Returns

`void`

___

### TranslateByVec

▸ **TranslateByVec**(`theV`): `void`

通过向量平移圆柱体。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theV` | [`Mx3dGeVec`](Mx3dGeVec.md) | 平移向量。 |

#### Returns

`void`

___

### TranslatedBy2Points

▸ **TranslatedBy2Points**(`theP1`, `theP2`): [`Mx3dGeCylinder`](Mx3dGeCylinder.md)

创建一个新的圆柱体对象，位置沿着两个点之间的直线进行平移。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theP1` | [`Mx3dGePoint`](Mx3dGePoint.md) | 第一个点，用于确定平移的起点。 |
| `theP2` | [`Mx3dGePoint`](Mx3dGePoint.md) | 第二个点，用于确定平移的终点。 |

#### Returns

[`Mx3dGeCylinder`](Mx3dGeCylinder.md)

返回一个新的 Mx3dGeCylinder 对象，平移后的圆柱体。

___

### TranslatedByVec

▸ **TranslatedByVec**(`theV`): [`Mx3dGeCylinder`](Mx3dGeCylinder.md)

通过向量平移圆柱体，并返回平移后的圆柱体对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theV` | [`Mx3dGeVec`](Mx3dGeVec.md) | 平移向量。 |

#### Returns

[`Mx3dGeCylinder`](Mx3dGeCylinder.md)

平移后的圆柱体对象。

___

### UReverse

▸ **UReverse**(): `void`

反转圆柱体的 U 参数方向。

#### Returns

`void`

___

### VReverse

▸ **VReverse**(): `void`

反转圆柱体的 V 参数方向。

#### Returns

`void`

___

### XAxis

▸ **XAxis**(): [`Mx3dGeAxis`](Mx3dGeAxis.md)

获取圆柱体的 X 轴。

#### Returns

[`Mx3dGeAxis`](Mx3dGeAxis.md)

X 轴。

___

### YAxis

▸ **YAxis**(): [`Mx3dGeAxis`](Mx3dGeAxis.md)

获取圆柱体的 Y 轴。

#### Returns

[`Mx3dGeAxis`](Mx3dGeAxis.md)

Y 轴。
