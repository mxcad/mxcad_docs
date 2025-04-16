[mxcad_3d API 文档](../README.md) / Mx3dGeEllipse

# Class: Mx3dGeEllipse

表示三维空间中的椭圆对象，继承自Mx3dGeObject类。
支持通过不同参数构造椭圆，并提供了丰富的属性访问与操作方法。

## Hierarchy

- [`Mx3dGeObject`](Mx3dGeObject.md)

  ↳ **`Mx3dGeEllipse`**

## Table of contents

### Constructors

- [constructor](Mx3dGeEllipse.md#constructor)

### Methods

- [Area](Mx3dGeEllipse.md#area)
- [Axis](Mx3dGeEllipse.md#axis)
- [Directrix1](Mx3dGeEllipse.md#directrix1)
- [Directrix2](Mx3dGeEllipse.md#directrix2)
- [Eccentricity](Mx3dGeEllipse.md#eccentricity)
- [Focal](Mx3dGeEllipse.md#focal)
- [Focus1](Mx3dGeEllipse.md#focus1)
- [Focus2](Mx3dGeEllipse.md#focus2)
- [Location](Mx3dGeEllipse.md#location)
- [MajorRadius](Mx3dGeEllipse.md#majorradius)
- [MinorRadius](Mx3dGeEllipse.md#minorradius)
- [MirrorByAxis](Mx3dGeEllipse.md#mirrorbyaxis)
- [MirrorByCSYSR](Mx3dGeEllipse.md#mirrorbycsysr)
- [MirrorByPoint](Mx3dGeEllipse.md#mirrorbypoint)
- [MirroredByAxis](Mx3dGeEllipse.md#mirroredbyaxis)
- [MirroredByCSYSR](Mx3dGeEllipse.md#mirroredbycsysr)
- [MirroredByPoint](Mx3dGeEllipse.md#mirroredbypoint)
- [Parameter](Mx3dGeEllipse.md#parameter)
- [Position](Mx3dGeEllipse.md#position)
- [Rotate](Mx3dGeEllipse.md#rotate)
- [Rotated](Mx3dGeEllipse.md#rotated)
- [Scale](Mx3dGeEllipse.md#scale)
- [Scaled](Mx3dGeEllipse.md#scaled)
- [SetAxis](Mx3dGeEllipse.md#setaxis)
- [SetLocation](Mx3dGeEllipse.md#setlocation)
- [SetMajorRadius](Mx3dGeEllipse.md#setmajorradius)
- [SetMinorRadius](Mx3dGeEllipse.md#setminorradius)
- [SetPosition](Mx3dGeEllipse.md#setposition)
- [Transform](Mx3dGeEllipse.md#transform)
- [Transformed](Mx3dGeEllipse.md#transformed)
- [TranslateBy2Points](Mx3dGeEllipse.md#translateby2points)
- [TranslateByVec](Mx3dGeEllipse.md#translatebyvec)
- [TranslatedBy2Points](Mx3dGeEllipse.md#translatedby2points)
- [TranslatedByVec](Mx3dGeEllipse.md#translatedbyvec)
- [XAxis](Mx3dGeEllipse.md#xaxis)
- [YAxis](Mx3dGeEllipse.md#yaxis)

## Constructors

### constructor

• **new Mx3dGeEllipse**()

构造一个未初始化的椭圆实例。

#### Overrides

Mx3dGeObject.constructor

• **new Mx3dGeEllipse**(`theA2`, `theMajorRadius`, `theMinorRadius`)

根据给定的坐标系和半径构造椭圆。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theA2` | [`Mx3dGeCSYSR`](Mx3dGeCSYSR.md) | 椭圆所在的坐标系 |
| `theMajorRadius` | `number` | 主半径 |
| `theMinorRadius` | `number` | 次半径 |

#### Overrides

Mx3dGeObject.constructor

## Methods

### Area

▸ **Area**(): `number`

计算并返回椭圆的面积。

#### Returns

`number`

椭圆的面积

___

### Axis

▸ **Axis**(): [`Mx3dGeAxis`](Mx3dGeAxis.md)

返回椭圆的轴。

#### Returns

[`Mx3dGeAxis`](Mx3dGeAxis.md)

椭圆的轴

___

### Directrix1

▸ **Directrix1**(): [`Mx3dGeAxis`](Mx3dGeAxis.md)

获取椭圆的第一条直接线，是垂直于主轴的直线，位于椭圆上，满足特定几何关系。

#### Returns

[`Mx3dGeAxis`](Mx3dGeAxis.md)

直线1

___

### Directrix2

▸ **Directrix2**(): [`Mx3dGeAxis`](Mx3dGeAxis.md)

获取椭圆的第二条直接线，是垂直于主轴的直线，位于椭圆上，满足特定几何关系。

#### Returns

[`Mx3dGeAxis`](Mx3dGeAxis.md)

直线2

___

### Eccentricity

▸ **Eccentricity**(): `number`

计算并返回椭圆的离心率，即焦距与半长轴之比。

#### Returns

`number`

离心率

___

### Focal

▸ **Focal**(): `number`

计算并返回椭圆的焦距，两焦点之间的距离。

#### Returns

`number`

焦距

___

### Focus1

▸ **Focus1**(): [`Mx3dGePoint`](Mx3dGePoint.md)

获取椭圆的第一个焦点。

#### Returns

[`Mx3dGePoint`](Mx3dGePoint.md)

第一焦点

___

### Focus2

▸ **Focus2**(): [`Mx3dGePoint`](Mx3dGePoint.md)

获取椭圆的第二个焦点。

#### Returns

[`Mx3dGePoint`](Mx3dGePoint.md)

二焦点

___

### Location

▸ **Location**(): [`Mx3dGePoint`](Mx3dGePoint.md)

获取椭圆的当前位置，即中心点。

#### Returns

[`Mx3dGePoint`](Mx3dGePoint.md)

当前位置

___

### MajorRadius

▸ **MajorRadius**(): `number`

获取椭圆的主半径。

#### Returns

`number`

主半径

___

### MinorRadius

▸ **MinorRadius**(): `number`

获取椭圆的次半径。

#### Returns

`number`

次半径

___

### MirrorByAxis

▸ **MirrorByAxis**(`theA1`): `void`

对椭圆执行镜像操作，以指定轴为对称轴。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theA1` | [`Mx3dGeAxis`](Mx3dGeAxis.md) | 镜像操作的轴 |

#### Returns

`void`

___

### MirrorByCSYSR

▸ **MirrorByCSYSR**(`theA2`): `void`

对椭圆执行镜像操作，以指定坐标系所在的平面为对称面。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theA2` | [`Mx3dGeCSYSR`](Mx3dGeCSYSR.md) | 镜像操作的坐标系 |

#### Returns

`void`

___

### MirrorByPoint

▸ **MirrorByPoint**(`theP`): `void`

对椭圆执行镜像操作，以指定点为中心进行对称变换。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theP` | [`Mx3dGePoint`](Mx3dGePoint.md) | 镜像操作的中心点 |

#### Returns

`void`

___

### MirroredByAxis

▸ **MirroredByAxis**(`theA1`): [`Mx3dGeEllipse`](Mx3dGeEllipse.md)

返回沿指定轴镜像后的椭圆副本。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theA1` | [`Mx3dGeAxis`](Mx3dGeAxis.md) | 镜像操作的轴 |

#### Returns

[`Mx3dGeEllipse`](Mx3dGeEllipse.md)

镜像后的椭圆副本

___

### MirroredByCSYSR

▸ **MirroredByCSYSR**(`theA2`): [`Mx3dGeEllipse`](Mx3dGeEllipse.md)

返回沿指定坐标系所在平面镜像后的椭圆副本。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theA2` | [`Mx3dGeCSYSR`](Mx3dGeCSYSR.md) | 镜像操作的坐标系 |

#### Returns

[`Mx3dGeEllipse`](Mx3dGeEllipse.md)

镜像后的椭圆副本

___

### MirroredByPoint

▸ **MirroredByPoint**(`theP`): [`Mx3dGeEllipse`](Mx3dGeEllipse.md)

返回沿指定点镜像后的椭圆副本。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theP` | [`Mx3dGePoint`](Mx3dGePoint.md) | 镜像操作的中心点 |

#### Returns

[`Mx3dGeEllipse`](Mx3dGeEllipse.md)

镜像后的椭圆副本

___

### Parameter

▸ **Parameter**(): `number`

获取椭圆的参数，可能指椭圆上某点对应的参数方程中的参数。

#### Returns

`number`

参数值

___

### Position

▸ **Position**(): [`Mx3dGeCSYSR`](Mx3dGeCSYSR.md)

获取椭圆的位置坐标系，定义椭圆所在的坐标框架。

#### Returns

[`Mx3dGeCSYSR`](Mx3dGeCSYSR.md)

位置坐标系

___

### Rotate

▸ **Rotate**(`theA1`, `theAng`): `void`

旋转椭圆，围绕指定轴按给定角度执行旋转操作。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theA1` | [`Mx3dGeAxis`](Mx3dGeAxis.md) | 旋转轴 |
| `theAng` | `number` | 旋转角度（弧度） |

#### Returns

`void`

___

### Rotated

▸ **Rotated**(`theA1`, `theAng`): [`Mx3dGeEllipse`](Mx3dGeEllipse.md)

返回旋转后的椭圆副本。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theA1` | [`Mx3dGeAxis`](Mx3dGeAxis.md) | 旋转轴 |
| `theAng` | `number` | 旋转角度（弧度） |

#### Returns

[`Mx3dGeEllipse`](Mx3dGeEllipse.md)

旋转后的椭圆副本

___

### Scale

▸ **Scale**(`theP`, `theS`): `void`

缩放椭圆，从指定点出发按给定比例缩放。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theP` | [`Mx3dGePoint`](Mx3dGePoint.md) | 缩放中心点 |
| `theS` | `number` | 缩放比例 |

#### Returns

`void`

___

### Scaled

▸ **Scaled**(`theP`, `theS`): [`Mx3dGeEllipse`](Mx3dGeEllipse.md)

返回缩放后的椭圆副本。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theP` | [`Mx3dGePoint`](Mx3dGePoint.md) | 缩放中心点 |
| `theS` | `number` | 缩放比例 |

#### Returns

[`Mx3dGeEllipse`](Mx3dGeEllipse.md)

缩放后的椭圆副本

___

### SetAxis

▸ **SetAxis**(`theA1`): `void`

设置椭圆的轴。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theA1` | [`Mx3dGeAxis`](Mx3dGeAxis.md) | 新的轴 |

#### Returns

`void`

___

### SetLocation

▸ **SetLocation**(`theP`): `void`

设置椭圆的位置。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theP` | [`Mx3dGePoint`](Mx3dGePoint.md) | 新的位置点 |

#### Returns

`void`

___

### SetMajorRadius

▸ **SetMajorRadius**(`theMajorRadius`): `void`

设置椭圆的主半径。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theMajorRadius` | `number` | 新的主半径 |

#### Returns

`void`

___

### SetMinorRadius

▸ **SetMinorRadius**(`theMinorRadius`): `void`

设置椭圆的次半径。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theMinorRadius` | `number` | 新的次半径 |

#### Returns

`void`

___

### SetPosition

▸ **SetPosition**(`theA2`): `void`

设置椭圆的坐标系。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theA2` | [`Mx3dGeCSYSR`](Mx3dGeCSYSR.md) | 新的坐标系 |

#### Returns

`void`

___

### Transform

▸ **Transform**(`theT`): `void`

应用变换矩阵转换椭圆。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theT` | [`Mx3dGeTrsf`](Mx3dGeTrsf.md) | 转换矩阵 |

#### Returns

`void`

___

### Transformed

▸ **Transformed**(`theT`): [`Mx3dGeEllipse`](Mx3dGeEllipse.md)

返回经过变换后的椭圆副本。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theT` | [`Mx3dGeTrsf`](Mx3dGeTrsf.md) | 转换矩阵 |

#### Returns

[`Mx3dGeEllipse`](Mx3dGeEllipse.md)

变换后的椭圆副本

___

### TranslateBy2Points

▸ **TranslateBy2Points**(`theP1`, `theP2`): `void`

椭距平移椭圆，从一点移到另一点。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theP1` | [`Mx3dGePoint`](Mx3dGePoint.md) | 起点 |
| `theP2` | [`Mx3dGePoint`](Mx3dGePoint.md) | 终点 |

#### Returns

`void`

___

### TranslateByVec

▸ **TranslateByVec**(`theV`): `void`

沿圆沿指定向量平移。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theV` | [`Mx3dGeVec`](Mx3dGeVec.md) | 平移向量 |

#### Returns

`void`

___

### TranslatedBy2Points

▸ **TranslatedBy2Points**(`theP1`, `theP2`): [`Mx3dGeEllipse`](Mx3dGeEllipse.md)

返回等距平移后的椭圆副本。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theP1` | [`Mx3dGePoint`](Mx3dGePoint.md) | 起点 |
| `theP2` | [`Mx3dGePoint`](Mx3dGePoint.md) | 终点 |

#### Returns

[`Mx3dGeEllipse`](Mx3dGeEllipse.md)

平移后的椭圆副本

___

### TranslatedByVec

▸ **TranslatedByVec**(`theV`): [`Mx3dGeEllipse`](Mx3dGeEllipse.md)

返回平移后的椭圆副本。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theV` | [`Mx3dGeVec`](Mx3dGeVec.md) | 平移向量 |

#### Returns

[`Mx3dGeEllipse`](Mx3dGeEllipse.md)

平移后的椭圆副本

___

### XAxis

▸ **XAxis**(): [`Mx3dGeAxis`](Mx3dGeAxis.md)

获取椭圆的主轴，即沿主半径方向的轴。

#### Returns

[`Mx3dGeAxis`](Mx3dGeAxis.md)

椭圆的主轴

___

### YAxis

▸ **YAxis**(): [`Mx3dGeAxis`](Mx3dGeAxis.md)

获取椭圆的次轴，即沿次半径方向的轴。

#### Returns

[`Mx3dGeAxis`](Mx3dGeAxis.md)

椭圆的次轴
