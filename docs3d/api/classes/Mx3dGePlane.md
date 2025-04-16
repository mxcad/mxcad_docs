[mxcad_3d API 文档](../README.md) / Mx3dGePlane

# Class: Mx3dGePlane

表示3D几何中的平面。
平面对象可通过坐标系、点、方向向量等多种方式定义，并提供了多种几何变换和操作方法。

## Hierarchy

- [`Mx3dGeObject`](Mx3dGeObject.md)

  ↳ **`Mx3dGePlane`**

## Table of contents

### Constructors

- [constructor](Mx3dGePlane.md#constructor)

### Methods

- [Axis](Mx3dGePlane.md#axis)
- [Contains](Mx3dGePlane.md#contains)
- [Direct](Mx3dGePlane.md#direct)
- [DistanceToPlane](Mx3dGePlane.md#distancetoplane)
- [DistanceToPoint](Mx3dGePlane.md#distancetopoint)
- [Location](Mx3dGePlane.md#location)
- [MirrorByAxis](Mx3dGePlane.md#mirrorbyaxis)
- [MirrorByCSYSR](Mx3dGePlane.md#mirrorbycsysr)
- [MirrorByPoint](Mx3dGePlane.md#mirrorbypoint)
- [MirroredByAxis](Mx3dGePlane.md#mirroredbyaxis)
- [MirroredByCSYSR](Mx3dGePlane.md#mirroredbycsysr)
- [MirroredByPoint](Mx3dGePlane.md#mirroredbypoint)
- [Position](Mx3dGePlane.md#position)
- [Rotate](Mx3dGePlane.md#rotate)
- [Rotated](Mx3dGePlane.md#rotated)
- [Scale](Mx3dGePlane.md#scale)
- [Scaled](Mx3dGePlane.md#scaled)
- [SetAxis](Mx3dGePlane.md#setaxis)
- [SetLocation](Mx3dGePlane.md#setlocation)
- [SetPosition](Mx3dGePlane.md#setposition)
- [Shape](Mx3dGePlane.md#shape)
- [SquareDistanceToPlane](Mx3dGePlane.md#squaredistancetoplane)
- [SquareDistanceToPoint](Mx3dGePlane.md#squaredistancetopoint)
- [Transform](Mx3dGePlane.md#transform)
- [Transformed](Mx3dGePlane.md#transformed)
- [TranslateBy2Points](Mx3dGePlane.md#translateby2points)
- [TranslateByVec](Mx3dGePlane.md#translatebyvec)
- [TranslatedBy2Points](Mx3dGePlane.md#translatedby2points)
- [TranslatedByVec](Mx3dGePlane.md#translatedbyvec)
- [UReverse](Mx3dGePlane.md#ureverse)
- [VReverse](Mx3dGePlane.md#vreverse)
- [XAxis](Mx3dGePlane.md#xaxis)
- [YAxis](Mx3dGePlane.md#yaxis)

## Constructors

### constructor

• **new Mx3dGePlane**()

默认构造函数，创建一个平面。

#### Overrides

Mx3dGeObject.constructor

• **new Mx3dGePlane**(`theA3`)

构造函数，使用指定坐标系初始化平面。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theA3` | [`Mx3dGeCSYS`](Mx3dGeCSYS.md) | 用于初始化平面的坐标系（CSYS）对象。 |

#### Overrides

Mx3dGeObject.constructor

• **new Mx3dGePlane**(`theP`, `theV`)

构造函数，使用指定点和向量初始化平面。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theP` | [`Mx3dGePoint`](Mx3dGePoint.md) | 平面上的点。 |
| `theV` | [`Mx3dGeDir`](Mx3dGeDir.md) | 与平面垂直的向量，用于定义平面的方向。 |

#### Overrides

Mx3dGeObject.constructor

• **new Mx3dGePlane**(`theA`, `theB`, `theC`, `theD`)

构造函数，使用平面方程的系数初始化平面。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theA` | `number` | 平面方程中的系数A。 |
| `theB` | `number` | 平面方程中的系数B。 |
| `theC` | `number` | 平面方程中的系数C。 |
| `theD` | `number` | 平面方程中的系数D。 |

#### Overrides

Mx3dGeObject.constructor

## Methods

### Axis

▸ **Axis**(): [`Mx3dGeAxis`](Mx3dGeAxis.md)

获取平面的法向轴向。

#### Returns

[`Mx3dGeAxis`](Mx3dGeAxis.md)

平面的法向轴向对象。

___

### Contains

▸ **Contains**(`theP`, `theLinearTolerance`): `boolean`

检查点是否在平面上。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theP` | [`Mx3dGePoint`](Mx3dGePoint.md) | 需要检查的点。 |
| `theLinearTolerance` | `number` | 线性容差，用于判定点是否在平面上。 |

#### Returns

`boolean`

如果点在平面上，则返回true；否则返回false。

___

### Direct

▸ **Direct**(): `boolean`

检查平面是否是右手坐标系。

#### Returns

`boolean`

如果平面是右手坐标系，则返回true；否则返回false。

___

### DistanceToPlane

▸ **DistanceToPlane**(`theOther`): `number`

计算两个平面之间的距离。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theOther` | [`Mx3dGePlane`](Mx3dGePlane.md) | 另一个平面对象。 |

#### Returns

`number`

两个平面之间的距离值。

___

### DistanceToPoint

▸ **DistanceToPoint**(`theP`): `number`

计算点到平面的距离。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theP` | [`Mx3dGePoint`](Mx3dGePoint.md) | 需要计算距离的点。 |

#### Returns

`number`

点到平面的距离值。

___

### Location

▸ **Location**(): [`Mx3dGePoint`](Mx3dGePoint.md)

获取平面上的位置点。

#### Returns

[`Mx3dGePoint`](Mx3dGePoint.md)

平面上的点对象。

___

### MirrorByAxis

▸ **MirrorByAxis**(`theA1`): `void`

将平面通过指定轴进行镜像。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theA1` | [`Mx3dGeAxis`](Mx3dGeAxis.md) | 镜像轴向。 |

#### Returns

`void`

___

### MirrorByCSYSR

▸ **MirrorByCSYSR**(`theA2`): `void`

将平面通过指定坐标系进行镜像。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theA2` | [`Mx3dGeCSYSR`](Mx3dGeCSYSR.md) | 镜像坐标系。 |

#### Returns

`void`

___

### MirrorByPoint

▸ **MirrorByPoint**(`theP`): `void`

将平面通过指定点进行镜像。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theP` | [`Mx3dGePoint`](Mx3dGePoint.md) | 镜像点。 |

#### Returns

`void`

___

### MirroredByAxis

▸ **MirroredByAxis**(`theA1`): [`Mx3dGePlane`](Mx3dGePlane.md)

返回镜像平面对象（通过指定轴）。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theA1` | [`Mx3dGeAxis`](Mx3dGeAxis.md) | 镜像轴向。 |

#### Returns

[`Mx3dGePlane`](Mx3dGePlane.md)

镜像后的平面对象。

___

### MirroredByCSYSR

▸ **MirroredByCSYSR**(`theA2`): [`Mx3dGePlane`](Mx3dGePlane.md)

返回镜像平面对象（通过指定坐标系）。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theA2` | [`Mx3dGeCSYSR`](Mx3dGeCSYSR.md) | 镜像坐标系。 |

#### Returns

[`Mx3dGePlane`](Mx3dGePlane.md)

镜像后的平面对象。

___

### MirroredByPoint

▸ **MirroredByPoint**(`theP`): [`Mx3dGePlane`](Mx3dGePlane.md)

返回镜像平面对象（通过指定点）。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theP` | [`Mx3dGePoint`](Mx3dGePoint.md) | 镜像点。 |

#### Returns

[`Mx3dGePlane`](Mx3dGePlane.md)

镜像后的平面对象。

___

### Position

▸ **Position**(): [`Mx3dGeCSYS`](Mx3dGeCSYS.md)

获取平面的坐标系位置。

#### Returns

[`Mx3dGeCSYS`](Mx3dGeCSYS.md)

平面的坐标系对象。

___

### Rotate

▸ **Rotate**(`theA1`, `theAng`): `void`

将平面绕指定轴旋转。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theA1` | [`Mx3dGeAxis`](Mx3dGeAxis.md) | 旋转轴向。 |
| `theAng` | `number` | 旋转角度。 |

#### Returns

`void`

___

### Rotated

▸ **Rotated**(`theA1`, `theAng`): [`Mx3dGePlane`](Mx3dGePlane.md)

返回旋转后的平面对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theA1` | [`Mx3dGeAxis`](Mx3dGeAxis.md) | 旋转轴向。 |
| `theAng` | `number` | 旋转角度。 |

#### Returns

[`Mx3dGePlane`](Mx3dGePlane.md)

旋转后的平面对象。

___

### Scale

▸ **Scale**(`theP`, `theS`): `void`

将平面缩放到指定点和比例。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theP` | [`Mx3dGePoint`](Mx3dGePoint.md) | 缩放点。 |
| `theS` | `number` | 缩放比例。 |

#### Returns

`void`

___

### Scaled

▸ **Scaled**(`theP`, `theS`): [`Mx3dGePlane`](Mx3dGePlane.md)

返回缩放后的平面对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theP` | [`Mx3dGePoint`](Mx3dGePoint.md) | 缩放点。 |
| `theS` | `number` | 缩放比例。 |

#### Returns

[`Mx3dGePlane`](Mx3dGePlane.md)

缩放后的平面对象。

___

### SetAxis

▸ **SetAxis**(`theA1`): `void`

设置平面的轴向。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theA1` | [`Mx3dGeAxis`](Mx3dGeAxis.md) | 平面轴向对象。 |

#### Returns

`void`

___

### SetLocation

▸ **SetLocation**(`theLoc`): `void`

设置平面的位置。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theLoc` | [`Mx3dGePoint`](Mx3dGePoint.md) | 平面上的一个点，用于定义平面的具体位置。 |

#### Returns

`void`

___

### SetPosition

▸ **SetPosition**(`theA3`): `void`

设置平面的位置和方向。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theA3` | [`Mx3dGeCSYS`](Mx3dGeCSYS.md) | 用于设置平面位置和方向的坐标系。 |

#### Returns

`void`

___

### Shape

▸ **Shape**(): [`Mx3dShapeObject`](Mx3dShapeObject.md)

获取平面的拓扑形状。

#### Returns

[`Mx3dShapeObject`](Mx3dShapeObject.md)

平面形状对象。

▸ **Shape**(`UMin`, `UMax`, `VMin`, `VMax`): [`Mx3dShapeObject`](Mx3dShapeObject.md)

获取平面在指定范围内的拓扑形状。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `UMin` | `number` | U方向的最小值。 |
| `UMax` | `number` | U方向的最大值。 |
| `VMin` | `number` | V方向的最小值。 |
| `VMax` | `number` | V方向的最大值。 |

#### Returns

[`Mx3dShapeObject`](Mx3dShapeObject.md)

平面形状对象。

___

### SquareDistanceToPlane

▸ **SquareDistanceToPlane**(`theOther`): `number`

计算两个平面之间的平方距离。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theOther` | [`Mx3dGePlane`](Mx3dGePlane.md) | 另一个平面对象。 |

#### Returns

`number`

两个平面之间的平方距离值。

___

### SquareDistanceToPoint

▸ **SquareDistanceToPoint**(`theP`): `number`

计算点到平面的平方距离。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theP` | [`Mx3dGePoint`](Mx3dGePoint.md) | 需要计算平方距离的点。 |

#### Returns

`number`

点到平面的平方距离值。

___

### Transform

▸ **Transform**(`theT`): `void`

对平面应用变换。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theT` | [`Mx3dGeTrsf`](Mx3dGeTrsf.md) | 变换矩阵。 |

#### Returns

`void`

___

### Transformed

▸ **Transformed**(`theT`): [`Mx3dGePlane`](Mx3dGePlane.md)

返回变换后的平面对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theT` | [`Mx3dGeTrsf`](Mx3dGeTrsf.md) | 变换矩阵。 |

#### Returns

[`Mx3dGePlane`](Mx3dGePlane.md)

变换后的平面对象。

___

### TranslateBy2Points

▸ **TranslateBy2Points**(`theP1`, `theP2`): `void`

将平面通过两点平移。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theP1` | [`Mx3dGePoint`](Mx3dGePoint.md) | 第一个点。 |
| `theP2` | [`Mx3dGePoint`](Mx3dGePoint.md) | 第二个点。 |

#### Returns

`void`

___

### TranslateByVec

▸ **TranslateByVec**(`theV`): `void`

将平面沿指定向量平移。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theV` | [`Mx3dGeVec`](Mx3dGeVec.md) | 平移向量。 |

#### Returns

`void`

___

### TranslatedBy2Points

▸ **TranslatedBy2Points**(`theP1`, `theP2`): [`Mx3dGePlane`](Mx3dGePlane.md)

返回通过两点平移后的平面对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theP1` | [`Mx3dGePoint`](Mx3dGePoint.md) | 第一个点。 |
| `theP2` | [`Mx3dGePoint`](Mx3dGePoint.md) | 第二个点。 |

#### Returns

[`Mx3dGePlane`](Mx3dGePlane.md)

平移后的平面对象。

___

### TranslatedByVec

▸ **TranslatedByVec**(`theV`): [`Mx3dGePlane`](Mx3dGePlane.md)

返回平移后的平面对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theV` | [`Mx3dGeVec`](Mx3dGeVec.md) | 平移向量。 |

#### Returns

[`Mx3dGePlane`](Mx3dGePlane.md)

平移后的平面对象。

___

### UReverse

▸ **UReverse**(): `void`

反转U方向。

#### Returns

`void`

___

### VReverse

▸ **VReverse**(): `void`

反转V方向。

#### Returns

`void`

___

### XAxis

▸ **XAxis**(): [`Mx3dGeAxis`](Mx3dGeAxis.md)

获取平面X轴的方向。

#### Returns

[`Mx3dGeAxis`](Mx3dGeAxis.md)

平面X轴的轴向对象。

___

### YAxis

▸ **YAxis**(): [`Mx3dGeAxis`](Mx3dGeAxis.md)

获取平面Y轴的方向。

#### Returns

[`Mx3dGeAxis`](Mx3dGeAxis.md)

平面Y轴的轴向对象。
