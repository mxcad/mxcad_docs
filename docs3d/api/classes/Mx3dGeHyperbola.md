[mxcad_3d API 文档](../README.md) / Mx3dGeHyperbola

# Class: Mx3dGeHyperbola

表示一个三维空间中的双曲线对象。
该类用于创建、操作和查询双曲线的各种属性，包括其轴、位置、半径以及各种变换状态。

## Hierarchy

- [`Mx3dGeObject`](Mx3dGeObject.md)

  ↳ **`Mx3dGeHyperbola`**

## Table of contents

### Constructors

- [constructor](Mx3dGeHyperbola.md#constructor)

### Methods

- [Asymptote1](Mx3dGeHyperbola.md#asymptote1)
- [Asymptote2](Mx3dGeHyperbola.md#asymptote2)
- [Axis](Mx3dGeHyperbola.md#axis)
- [ConjugateBranch1](Mx3dGeHyperbola.md#conjugatebranch1)
- [ConjugateBranch2](Mx3dGeHyperbola.md#conjugatebranch2)
- [Directrix1](Mx3dGeHyperbola.md#directrix1)
- [Directrix2](Mx3dGeHyperbola.md#directrix2)
- [Eccentricity](Mx3dGeHyperbola.md#eccentricity)
- [Focal](Mx3dGeHyperbola.md#focal)
- [Focus1](Mx3dGeHyperbola.md#focus1)
- [Focus2](Mx3dGeHyperbola.md#focus2)
- [Location](Mx3dGeHyperbola.md#location)
- [MajorRadius](Mx3dGeHyperbola.md#majorradius)
- [MinorRadius](Mx3dGeHyperbola.md#minorradius)
- [MirrorByAxis](Mx3dGeHyperbola.md#mirrorbyaxis)
- [MirrorByCSYSR](Mx3dGeHyperbola.md#mirrorbycsysr)
- [MirrorByPoint](Mx3dGeHyperbola.md#mirrorbypoint)
- [MirroredByAxis](Mx3dGeHyperbola.md#mirroredbyaxis)
- [MirroredByCSYSR](Mx3dGeHyperbola.md#mirroredbycsysr)
- [MirroredByPoint](Mx3dGeHyperbola.md#mirroredbypoint)
- [OtherBranch](Mx3dGeHyperbola.md#otherbranch)
- [Parameter](Mx3dGeHyperbola.md#parameter)
- [Position](Mx3dGeHyperbola.md#position)
- [Rotate](Mx3dGeHyperbola.md#rotate)
- [Rotated](Mx3dGeHyperbola.md#rotated)
- [Scale](Mx3dGeHyperbola.md#scale)
- [Scaled](Mx3dGeHyperbola.md#scaled)
- [SetAxis](Mx3dGeHyperbola.md#setaxis)
- [SetLocation](Mx3dGeHyperbola.md#setlocation)
- [SetMajorRadius](Mx3dGeHyperbola.md#setmajorradius)
- [SetMinorRadius](Mx3dGeHyperbola.md#setminorradius)
- [SetPosition](Mx3dGeHyperbola.md#setposition)
- [Transform](Mx3dGeHyperbola.md#transform)
- [Transformed](Mx3dGeHyperbola.md#transformed)
- [TranslateBy2Points](Mx3dGeHyperbola.md#translateby2points)
- [TranslateByVec](Mx3dGeHyperbola.md#translatebyvec)
- [TranslatedBy2Points](Mx3dGeHyperbola.md#translatedby2points)
- [TranslatedByVec](Mx3dGeHyperbola.md#translatedbyvec)
- [XAxis](Mx3dGeHyperbola.md#xaxis)
- [YAxis](Mx3dGeHyperbola.md#yaxis)

## Constructors

### constructor

• **new Mx3dGeHyperbola**()

默认构造函数，用于创建一个未定义的双曲线。

#### Overrides

Mx3dGeObject.constructor

• **new Mx3dGeHyperbola**(`theA2`, `theMajorRadius`, `theMinorRadius`)

根据给定的主半径和次半径以及一个坐标系统（Mx3dGeCSYSR）来构造一个双曲线。
坐标系统定义了双曲线的位置，其中：
- 原点为双曲线中心，
- "X方向"定义了双曲线的主轴，
- "Y方向"定义了双曲线的次轴。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theA2` | [`Mx3dGeCSYSR`](Mx3dGeCSYSR.md) | 定义双曲线位置的坐标系统。 |
| `theMajorRadius` | `number` | 双曲线的主半径。 |
| `theMinorRadius` | `number` | 双曲线的次半径。 |

#### Overrides

Mx3dGeObject.constructor

## Methods

### Asymptote1

▸ **Asymptote1**(): [`Mx3dGeAxis`](Mx3dGeAxis.md)

获取双曲线的对称轴。

#### Returns

[`Mx3dGeAxis`](Mx3dGeAxis.md)

返回双曲线的对称轴。

___

### Asymptote2

▸ **Asymptote2**(): [`Mx3dGeAxis`](Mx3dGeAxis.md)

获取另一条对称轴。

#### Returns

[`Mx3dGeAxis`](Mx3dGeAxis.md)

返回双曲线的另一条对称轴。

___

### Axis

▸ **Axis**(): [`Mx3dGeAxis`](Mx3dGeAxis.md)

获取双曲线的轴线。

#### Returns

[`Mx3dGeAxis`](Mx3dGeAxis.md)

双曲线的轴线。

___

### ConjugateBranch1

▸ **ConjugateBranch1**(): [`Mx3dGeHyperbola`](Mx3dGeHyperbola.md)

获取共轭分支1。

#### Returns

[`Mx3dGeHyperbola`](Mx3dGeHyperbola.md)

双曲线的共轭分支1。

___

### ConjugateBranch2

▸ **ConjugateBranch2**(): [`Mx3dGeHyperbola`](Mx3dGeHyperbola.md)

获取共轭分支2。

#### Returns

[`Mx3dGeHyperbola`](Mx3dGeHyperbola.md)

双曲线的共轭分支2。

___

### Directrix1

▸ **Directrix1**(): [`Mx3dGeAxis`](Mx3dGeAxis.md)

获取直接线1。

#### Returns

[`Mx3dGeAxis`](Mx3dGeAxis.md)

双曲线的直接线1。

___

### Directrix2

▸ **Directrix2**(): [`Mx3dGeAxis`](Mx3dGeAxis.md)

获取直接线2。

#### Returns

[`Mx3dGeAxis`](Mx3dGeAxis.md)

双曲线的直接线2。

___

### Eccentricity

▸ **Eccentricity**(): `number`

获取离心率。

#### Returns

`number`

双曲线的离心率。

___

### Focal

▸ **Focal**(): `number`

获取焦距。

#### Returns

`number`

双曲线的焦距。

___

### Focus1

▸ **Focus1**(): [`Mx3dGePoint`](Mx3dGePoint.md)

获取焦点1。

#### Returns

[`Mx3dGePoint`](Mx3dGePoint.md)

双曲线的第一个焦点。

___

### Focus2

▸ **Focus2**(): [`Mx3dGePoint`](Mx3dGePoint.md)

获取焦点2。

#### Returns

[`Mx3dGePoint`](Mx3dGePoint.md)

双曲线的第二个焦点。

___

### Location

▸ **Location**(): [`Mx3dGePoint`](Mx3dGePoint.md)

获取双曲线的当前位置点，即中心点。

#### Returns

[`Mx3dGePoint`](Mx3dGePoint.md)

位置点。

___

### MajorRadius

▸ **MajorRadius**(): `number`

获取双曲线的长轴半径。

#### Returns

`number`

一个 number，表示双曲线的长轴半径。

___

### MinorRadius

▸ **MinorRadius**(): `number`

获取双曲线的短轴半径。

#### Returns

`number`

一个 number，表示双曲线的短轴半径。

___

### MirrorByAxis

▸ **MirrorByAxis**(`theA1`): `void`

按轴镜像双曲线。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theA1` | [`Mx3dGeAxis`](Mx3dGeAxis.md) | 镜像轴 (Mx3dGeAxis)。 |

#### Returns

`void`

___

### MirrorByCSYSR

▸ **MirrorByCSYSR**(`theA2`): `void`

按坐标系镜像双曲线。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theA2` | [`Mx3dGeCSYSR`](Mx3dGeCSYSR.md) | 镜像的坐标系 (Mx3dGeCSYSR)。 |

#### Returns

`void`

___

### MirrorByPoint

▸ **MirrorByPoint**(`theP`): `void`

通过点镜像变换双曲线。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theP` | [`Mx3dGePoint`](Mx3dGePoint.md) | 一个 Mx3dGePoint 对象，表示镜像的中心点。 |

#### Returns

`void`

___

### MirroredByAxis

▸ **MirroredByAxis**(`theA1`): [`Mx3dGeHyperbola`](Mx3dGeHyperbola.md)

获取按轴镜像后的双曲线。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theA1` | [`Mx3dGeAxis`](Mx3dGeAxis.md) | 镜像轴 (Mx3dGeAxis)。 |

#### Returns

[`Mx3dGeHyperbola`](Mx3dGeHyperbola.md)

按轴镜像后的双曲线 (Mx3dGeHyperbola)。

___

### MirroredByCSYSR

▸ **MirroredByCSYSR**(`theA2`): [`Mx3dGeHyperbola`](Mx3dGeHyperbola.md)

获取按坐标系镜像后的双曲线。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theA2` | [`Mx3dGeCSYSR`](Mx3dGeCSYSR.md) | 镜像的坐标系 (Mx3dGeCSYSR)。 |

#### Returns

[`Mx3dGeHyperbola`](Mx3dGeHyperbola.md)

按坐标系镜像后的双曲线 (Mx3dGeHyperbola)。

___

### MirroredByPoint

▸ **MirroredByPoint**(`theP`): [`Mx3dGeHyperbola`](Mx3dGeHyperbola.md)

获取按点镜像后的双曲线。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theP` | [`Mx3dGePoint`](Mx3dGePoint.md) | 镜像点 (Mx3dGePoint)。 |

#### Returns

[`Mx3dGeHyperbola`](Mx3dGeHyperbola.md)

按点镜像后的双曲线 (Mx3dGeHyperbola)。

___

### OtherBranch

▸ **OtherBranch**(): [`Mx3dGeHyperbola`](Mx3dGeHyperbola.md)

获取双曲线的另一分支，与当前分支关于主轴对称。

#### Returns

[`Mx3dGeHyperbola`](Mx3dGeHyperbola.md)

另一分支。

___

### Parameter

▸ **Parameter**(): `number`

获取双曲线的参数。

#### Returns

`number`

一个 number，表示双曲线的参数。

___

### Position

▸ **Position**(): [`Mx3dGeCSYSR`](Mx3dGeCSYSR.md)

获取双曲线的坐标系统，定义其位置和方向。

#### Returns

[`Mx3dGeCSYSR`](Mx3dGeCSYSR.md)

坐标系。

___

### Rotate

▸ **Rotate**(`theA1`, `theAng`): `void`

旋转双曲线。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theA1` | [`Mx3dGeAxis`](Mx3dGeAxis.md) | 旋转轴 (Mx3dGeAxis)。 |
| `theAng` | `number` | 旋转角度。 |

#### Returns

`void`

___

### Rotated

▸ **Rotated**(`theA1`, `theAng`): [`Mx3dGeHyperbola`](Mx3dGeHyperbola.md)

获取旋转后的双曲线。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theA1` | [`Mx3dGeAxis`](Mx3dGeAxis.md) | 旋转轴 (Mx3dGeAxis)。 |
| `theAng` | `number` | 旋转角度。 |

#### Returns

[`Mx3dGeHyperbola`](Mx3dGeHyperbola.md)

旋转后的双曲线 (Mx3dGeHyperbola)。

___

### Scale

▸ **Scale**(`theP`, `theS`): `void`

缩放双曲线。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theP` | [`Mx3dGePoint`](Mx3dGePoint.md) | 缩放中心 (Mx3dGePoint)。 |
| `theS` | `number` | 缩放比例。 |

#### Returns

`void`

___

### Scaled

▸ **Scaled**(`theP`, `theS`): [`Mx3dGeHyperbola`](Mx3dGeHyperbola.md)

获取缩放后的双曲线。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theP` | [`Mx3dGePoint`](Mx3dGePoint.md) | 缩放中心 (Mx3dGePoint)。 |
| `theS` | `number` | 缩放比例。 |

#### Returns

[`Mx3dGeHyperbola`](Mx3dGeHyperbola.md)

缩放后的双曲线 (Mx3dGeHyperbola)。

___

### SetAxis

▸ **SetAxis**(`theA1`): `void`

设置双曲线的轴。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theA1` | [`Mx3dGeAxis`](Mx3dGeAxis.md) | 要设置的新轴。 |

#### Returns

`void`

___

### SetLocation

▸ **SetLocation**(`theP`): `void`

设置双曲线的位置。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theP` | [`Mx3dGePoint`](Mx3dGePoint.md) | 新的位置点。 |

#### Returns

`void`

___

### SetMajorRadius

▸ **SetMajorRadius**(`theMajorRadius`): `void`

设置双曲线的主半径。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theMajorRadius` | `number` | 新的主半径值。 |

#### Returns

`void`

___

### SetMinorRadius

▸ **SetMinorRadius**(`theMinorRadius`): `void`

设置双曲线的次半径。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theMinorRadius` | `number` | 新的次半径值。 |

#### Returns

`void`

___

### SetPosition

▸ **SetPosition**(`theA2`): `void`

设置双曲线的坐标系统，从而重新定义其位置和方向。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theA2` | [`Mx3dGeCSYSR`](Mx3dGeCSYSR.md) | 新的坐标系统。 |

#### Returns

`void`

___

### Transform

▸ **Transform**(`theT`): `void`

对双曲线进行变换。

#### Parameters

| Name | Type |
| :------ | :------ |
| `theT` | [`Mx3dGeTrsf`](Mx3dGeTrsf.md) |

#### Returns

`void`

___

### Transformed

▸ **Transformed**(`theT`): [`Mx3dGeHyperbola`](Mx3dGeHyperbola.md)

获取变换后的双曲线。

#### Parameters

| Name | Type |
| :------ | :------ |
| `theT` | [`Mx3dGeTrsf`](Mx3dGeTrsf.md) |

#### Returns

[`Mx3dGeHyperbola`](Mx3dGeHyperbola.md)

变换后的双曲线 (Mx3dGeHyperbola)。

___

### TranslateBy2Points

▸ **TranslateBy2Points**(`theP1`, `theP2`): `void`

按点平移双曲线。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theP1` | [`Mx3dGePoint`](Mx3dGePoint.md) | 起点 (Mx3dGePoint)。 |
| `theP2` | [`Mx3dGePoint`](Mx3dGePoint.md) | 终点 (Mx3dGePoint)。 |

#### Returns

`void`

___

### TranslateByVec

▸ **TranslateByVec**(`theV`): `void`

按向量平移双曲线。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theV` | [`Mx3dGeVec`](Mx3dGeVec.md) | 平移向量 (Mx3dGeVector)。 |

#### Returns

`void`

___

### TranslatedBy2Points

▸ **TranslatedBy2Points**(`theP1`, `theP2`): [`Mx3dGeHyperbola`](Mx3dGeHyperbola.md)

获取按点平移后的双曲线。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theP1` | [`Mx3dGePoint`](Mx3dGePoint.md) | 起点 (Mx3dGePoint)。 |
| `theP2` | [`Mx3dGePoint`](Mx3dGePoint.md) | 终点 (Mx3dGePoint)。 |

#### Returns

[`Mx3dGeHyperbola`](Mx3dGeHyperbola.md)

按点平移后的双曲线 (Mx3dGeHyperbola)。

___

### TranslatedByVec

▸ **TranslatedByVec**(`theV`): [`Mx3dGeHyperbola`](Mx3dGeHyperbola.md)

获取按向量平移后的双曲线。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theV` | [`Mx3dGeVec`](Mx3dGeVec.md) | 平移向量 (Mx3dGeVector)。 |

#### Returns

[`Mx3dGeHyperbola`](Mx3dGeHyperbola.md)

平移后的双曲线 (Mx3dGeHyperbola)。

___

### XAxis

▸ **XAxis**(): [`Mx3dGeAxis`](Mx3dGeAxis.md)

获取X轴，定义双曲线的主要方向。

#### Returns

[`Mx3dGeAxis`](Mx3dGeAxis.md)

X轴。

___

### YAxis

▸ **YAxis**(): [`Mx3dGeAxis`](Mx3dGeAxis.md)

获取Y轴，定义双曲线的次要方向。

#### Returns

[`Mx3dGeAxis`](Mx3dGeAxis.md)

Y轴。
