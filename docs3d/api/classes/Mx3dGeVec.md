[mxcad_3d API 文档](../README.md) / Mx3dGeVec

# Class: Mx3dGeVec

表示一个三维向量的类。用于三维几何运算。

## Hierarchy

- [`Mx3dGeObject`](Mx3dGeObject.md)

  ↳ **`Mx3dGeVec`**

## Table of contents

### Constructors

- [constructor](Mx3dGeVec.md#constructor)

### Methods

- [Add](Mx3dGeVec.md#add)
- [Added](Mx3dGeVec.md#added)
- [Angle](Mx3dGeVec.md#angle)
- [AngleWithRef](Mx3dGeVec.md#anglewithref)
- [Cross](Mx3dGeVec.md#cross)
- [CrossCross](Mx3dGeVec.md#crosscross)
- [CrossCrossed](Mx3dGeVec.md#crosscrossed)
- [CrossMagnitude](Mx3dGeVec.md#crossmagnitude)
- [CrossSquareMagnitude](Mx3dGeVec.md#crosssquaremagnitude)
- [Crossed](Mx3dGeVec.md#crossed)
- [Divide](Mx3dGeVec.md#divide)
- [Divided](Mx3dGeVec.md#divided)
- [Dot](Mx3dGeVec.md#dot)
- [DotCross](Mx3dGeVec.md#dotcross)
- [IsEqual](Mx3dGeVec.md#isequal)
- [IsNormal](Mx3dGeVec.md#isnormal)
- [IsOpposite](Mx3dGeVec.md#isopposite)
- [IsParallel](Mx3dGeVec.md#isparallel)
- [Magnitude](Mx3dGeVec.md#magnitude)
- [MirrorByAxis](Mx3dGeVec.md#mirrorbyaxis)
- [MirrorByCSYSR](Mx3dGeVec.md#mirrorbycsysr)
- [MirrorByVec](Mx3dGeVec.md#mirrorbyvec)
- [MirroredByAxis](Mx3dGeVec.md#mirroredbyaxis)
- [MirroredByCSYSR](Mx3dGeVec.md#mirroredbycsysr)
- [MirroredByVec](Mx3dGeVec.md#mirroredbyvec)
- [Multiplied](Mx3dGeVec.md#multiplied)
- [Multiply](Mx3dGeVec.md#multiply)
- [Normalize](Mx3dGeVec.md#normalize)
- [Normalized](Mx3dGeVec.md#normalized)
- [Reverse](Mx3dGeVec.md#reverse)
- [Reversed](Mx3dGeVec.md#reversed)
- [Rotate](Mx3dGeVec.md#rotate)
- [Rotated](Mx3dGeVec.md#rotated)
- [Scale](Mx3dGeVec.md#scale)
- [Scaled](Mx3dGeVec.md#scaled)
- [SetLinearForm](Mx3dGeVec.md#setlinearform)
- [SetX](Mx3dGeVec.md#setx)
- [SetXYZ](Mx3dGeVec.md#setxyz)
- [SetY](Mx3dGeVec.md#sety)
- [SetZ](Mx3dGeVec.md#setz)
- [SquareMagnitude](Mx3dGeVec.md#squaremagnitude)
- [Subtract](Mx3dGeVec.md#subtract)
- [Subtracted](Mx3dGeVec.md#subtracted)
- [Transform](Mx3dGeVec.md#transform)
- [Transformed](Mx3dGeVec.md#transformed)
- [X](Mx3dGeVec.md#x)
- [Y](Mx3dGeVec.md#y)
- [Z](Mx3dGeVec.md#z)

## Constructors

### constructor

• **new Mx3dGeVec**()

构造一个新的 Mx3dGeVec 实例。
可以不带参数，或者带三个数值参数，或者带两个点。

#### Overrides

Mx3dGeObject.constructor

• **new Mx3dGeVec**(`x`, `y`, `z`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `z` | `number` |

#### Overrides

Mx3dGeObject.constructor

• **new Mx3dGeVec**(`thePoint1`, `thePoint2`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `thePoint1` | [`Mx3dGePoint`](Mx3dGePoint.md) |
| `thePoint2` | [`Mx3dGePoint`](Mx3dGePoint.md) |

#### Overrides

Mx3dGeObject.constructor

## Methods

### Add

▸ **Add**(`other`): `void`

将当前向量与另一个向量相加。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `other` | [`Mx3dGeVec`](Mx3dGeVec.md) | 另一个向量。 |

#### Returns

`void`

___

### Added

▸ **Added**(`other`): [`Mx3dGeVec`](Mx3dGeVec.md)

返回当前向量与另一个向量相加的结果。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `other` | [`Mx3dGeVec`](Mx3dGeVec.md) | 另一个向量。 |

#### Returns

[`Mx3dGeVec`](Mx3dGeVec.md)

相加后的向量。

___

### Angle

▸ **Angle**(`other`): `number`

计算两个向量之间的角度。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `other` | [`Mx3dGeVec`](Mx3dGeVec.md) | 另一个向量。 |

#### Returns

`number`

角度值。

___

### AngleWithRef

▸ **AngleWithRef**(`other`, `ref`): `number`

计算两个向量之间的带参考向量的角度。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `other` | [`Mx3dGeVec`](Mx3dGeVec.md) | 另一个向量。 |
| `ref` | [`Mx3dGeVec`](Mx3dGeVec.md) | 参考向量。 |

#### Returns

`number`

带参考向量的角度值。

___

### Cross

▸ **Cross**(`right`): `void`

计算两个向量的叉积。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `right` | [`Mx3dGeVec`](Mx3dGeVec.md) | 另一个向量。 |

#### Returns

`void`

___

### CrossCross

▸ **CrossCross**(`v1`, `v2`): `void`

计算三个向量的叉积。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v1` | [`Mx3dGeVec`](Mx3dGeVec.md) | 向量1。 |
| `v2` | [`Mx3dGeVec`](Mx3dGeVec.md) | 向量2。 |

#### Returns

`void`

___

### CrossCrossed

▸ **CrossCrossed**(`v1`, `v2`): [`Mx3dGeVec`](Mx3dGeVec.md)

返回三个向量的叉积结果。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v1` | [`Mx3dGeVec`](Mx3dGeVec.md) | 向量1。 |
| `v2` | [`Mx3dGeVec`](Mx3dGeVec.md) | 向量2。 |

#### Returns

[`Mx3dGeVec`](Mx3dGeVec.md)

叉积后的向量。

___

### CrossMagnitude

▸ **CrossMagnitude**(`right`): `number`

计算两个向量的叉积的模。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `right` | [`Mx3dGeVec`](Mx3dGeVec.md) | 另一个向量。 |

#### Returns

`number`

叉积的模。

___

### CrossSquareMagnitude

▸ **CrossSquareMagnitude**(`right`): `number`

计算两个向量的叉积模的平方。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `right` | [`Mx3dGeVec`](Mx3dGeVec.md) | 另一个向量。 |

#### Returns

`number`

叉积模的平方。

___

### Crossed

▸ **Crossed**(`right`): [`Mx3dGeVec`](Mx3dGeVec.md)

返回两个向量的叉积结果。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `right` | [`Mx3dGeVec`](Mx3dGeVec.md) | 另一个向量。 |

#### Returns

[`Mx3dGeVec`](Mx3dGeVec.md)

叉积后的向量。

___

### Divide

▸ **Divide**(`scalar`): `void`

将当前向量除以一个标量。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scalar` | `number` | 标量值。 |

#### Returns

`void`

___

### Divided

▸ **Divided**(`scalar`): [`Mx3dGeVec`](Mx3dGeVec.md)

返回当前向量除以标量的结果。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scalar` | `number` | 标量值。 |

#### Returns

[`Mx3dGeVec`](Mx3dGeVec.md)

除以标量后的向量。

___

### Dot

▸ **Dot**(`other`): `number`

计算两个向量的点积。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `other` | [`Mx3dGeVec`](Mx3dGeVec.md) | 另一个向量。 |

#### Returns

`number`

点积值。

___

### DotCross

▸ **DotCross**(`v1`, `v2`): `number`

计算三个向量的点-叉积。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v1` | [`Mx3dGeVec`](Mx3dGeVec.md) | 向量1。 |
| `v2` | [`Mx3dGeVec`](Mx3dGeVec.md) | 向量2。 |

#### Returns

`number`

点-叉积值。

___

### IsEqual

▸ **IsEqual**(`other`, `linearTolerance`, `angularTolerance`): `boolean`

判断两个向量是否相等。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `other` | [`Mx3dGeVec`](Mx3dGeVec.md) | 另一个向量。 |
| `linearTolerance` | `number` | 线性公差。 |
| `angularTolerance` | `number` | 角度公差。 |

#### Returns

`boolean`

是否相等。

___

### IsNormal

▸ **IsNormal**(`other`, `angularTolerance`): `boolean`

判断两个向量是否互为法向量。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `other` | [`Mx3dGeVec`](Mx3dGeVec.md) | 另一个向量。 |
| `angularTolerance` | `number` | 角度公差。 |

#### Returns

`boolean`

是否互为法向量。

___

### IsOpposite

▸ **IsOpposite**(`other`, `angularTolerance`): `boolean`

判断两个向量是否互为反向。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `other` | [`Mx3dGeVec`](Mx3dGeVec.md) | 另一个向量。 |
| `angularTolerance` | `number` | 角度公差。 |

#### Returns

`boolean`

是否互为反向。

___

### IsParallel

▸ **IsParallel**(`other`, `angularTolerance`): `boolean`

判断两个向量是否平行。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `other` | [`Mx3dGeVec`](Mx3dGeVec.md) | 另一个向量。 |
| `angularTolerance` | `number` | 角度公差。 |

#### Returns

`boolean`

是否平行。

___

### Magnitude

▸ **Magnitude**(): `number`

获取向量的模。

#### Returns

`number`

向量的模。

___

### MirrorByAxis

▸ **MirrorByAxis**(`axis`): `void`

根据一个轴镜像当前向量。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `axis` | [`Mx3dGeAxis`](Mx3dGeAxis.md) | 镜像轴。 |

#### Returns

`void`

___

### MirrorByCSYSR

▸ **MirrorByCSYSR**(`csysr`): `void`

根据一个坐标系镜像当前向量。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `csysr` | [`Mx3dGeCSYSR`](Mx3dGeCSYSR.md) | 坐标系。 |

#### Returns

`void`

___

### MirrorByVec

▸ **MirrorByVec**(`vec`): `void`

根据一个向量镜像当前向量。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vec` | [`Mx3dGeVec`](Mx3dGeVec.md) | 镜像向量。 |

#### Returns

`void`

___

### MirroredByAxis

▸ **MirroredByAxis**(`axis`): [`Mx3dGeVec`](Mx3dGeVec.md)

返回根据一个轴镜像后的向量。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `axis` | [`Mx3dGeAxis`](Mx3dGeAxis.md) | 镜像轴。 |

#### Returns

[`Mx3dGeVec`](Mx3dGeVec.md)

镜像后的向量。

___

### MirroredByCSYSR

▸ **MirroredByCSYSR**(`csysr`): [`Mx3dGeVec`](Mx3dGeVec.md)

返回根据一个坐标系镜像后的向量。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `csysr` | [`Mx3dGeCSYSR`](Mx3dGeCSYSR.md) | 坐标系。 |

#### Returns

[`Mx3dGeVec`](Mx3dGeVec.md)

镜像后的向量。

___

### MirroredByVec

▸ **MirroredByVec**(`vec`): [`Mx3dGeVec`](Mx3dGeVec.md)

返回根据一个向量镜像后的向量。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vec` | [`Mx3dGeVec`](Mx3dGeVec.md) | 镜像向量。 |

#### Returns

[`Mx3dGeVec`](Mx3dGeVec.md)

镜像后的向量。

___

### Multiplied

▸ **Multiplied**(`scalar`): [`Mx3dGeVec`](Mx3dGeVec.md)

返回当前向量乘以标量的结果。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scalar` | `number` | 标量值。 |

#### Returns

[`Mx3dGeVec`](Mx3dGeVec.md)

乘以标量后的向量。

___

### Multiply

▸ **Multiply**(`scalar`): `void`

将当前向量乘以一个标量。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scalar` | `number` | 标量值。 |

#### Returns

`void`

___

### Normalize

▸ **Normalize**(): `void`

将当前向量归一化。

#### Returns

`void`

___

### Normalized

▸ **Normalized**(): [`Mx3dGeVec`](Mx3dGeVec.md)

返回归一化后的向量。

#### Returns

[`Mx3dGeVec`](Mx3dGeVec.md)

归一化后的向量。

___

### Reverse

▸ **Reverse**(): `void`

反转当前向量的方向。

#### Returns

`void`

___

### Reversed

▸ **Reversed**(): [`Mx3dGeVec`](Mx3dGeVec.md)

返回反转后的向量。

#### Returns

[`Mx3dGeVec`](Mx3dGeVec.md)

反转后的向量。

___

### Rotate

▸ **Rotate**(`axis`, `ang`): `void`

旋转当前向量。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `axis` | [`Mx3dGeAxis`](Mx3dGeAxis.md) | 旋转轴。 |
| `ang` | `number` | 旋转角度。 |

#### Returns

`void`

___

### Rotated

▸ **Rotated**(`axis`, `ang`): [`Mx3dGeVec`](Mx3dGeVec.md)

返回旋转后的向量。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `axis` | [`Mx3dGeAxis`](Mx3dGeAxis.md) | 旋转轴。 |
| `ang` | `number` | 旋转角度。 |

#### Returns

[`Mx3dGeVec`](Mx3dGeVec.md)

旋转后的向量。

___

### Scale

▸ **Scale**(`s`): `void`

缩放当前向量。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `s` | `number` | 缩放系数。 |

#### Returns

`void`

___

### Scaled

▸ **Scaled**(`s`): [`Mx3dGeVec`](Mx3dGeVec.md)

返回缩放后的向量。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `s` | `number` | 缩放系数。 |

#### Returns

[`Mx3dGeVec`](Mx3dGeVec.md)

缩放后的向量。

___

### SetLinearForm

▸ **SetLinearForm**(`v1`, `v2`): `void`

设置当前向量为线性组合。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v1` | [`Mx3dGeVec`](Mx3dGeVec.md) | 向量1。 |
| `v2` | [`Mx3dGeVec`](Mx3dGeVec.md) | 向量2。 |

#### Returns

`void`

▸ **SetLinearForm**(`a1`, `v1`, `v2`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a1` | `number` |
| `v1` | [`Mx3dGeVec`](Mx3dGeVec.md) |
| `v2` | [`Mx3dGeVec`](Mx3dGeVec.md) |

#### Returns

`void`

▸ **SetLinearForm**(`a1`, `v1`, `a2`, `v2`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a1` | `number` |
| `v1` | [`Mx3dGeVec`](Mx3dGeVec.md) |
| `a2` | `number` |
| `v2` | [`Mx3dGeVec`](Mx3dGeVec.md) |

#### Returns

`void`

▸ **SetLinearForm**(`a1`, `v1`, `a2`, `v2`, `v3`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a1` | `number` |
| `v1` | [`Mx3dGeVec`](Mx3dGeVec.md) |
| `a2` | `number` |
| `v2` | [`Mx3dGeVec`](Mx3dGeVec.md) |
| `v3` | [`Mx3dGeVec`](Mx3dGeVec.md) |

#### Returns

`void`

▸ **SetLinearForm**(`a1`, `v1`, `a2`, `v2`, `a3`, `v3`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a1` | `number` |
| `v1` | [`Mx3dGeVec`](Mx3dGeVec.md) |
| `a2` | `number` |
| `v2` | [`Mx3dGeVec`](Mx3dGeVec.md) |
| `a3` | `number` |
| `v3` | [`Mx3dGeVec`](Mx3dGeVec.md) |

#### Returns

`void`

▸ **SetLinearForm**(`a1`, `v1`, `a2`, `v2`, `a3`, `v3`, `v4`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a1` | `number` |
| `v1` | [`Mx3dGeVec`](Mx3dGeVec.md) |
| `a2` | `number` |
| `v2` | [`Mx3dGeVec`](Mx3dGeVec.md) |
| `a3` | `number` |
| `v3` | [`Mx3dGeVec`](Mx3dGeVec.md) |
| `v4` | [`Mx3dGeVec`](Mx3dGeVec.md) |

#### Returns

`void`

___

### SetX

▸ **SetX**(`x`): `void`

设置向量的 x 分量。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | 新的 x 分量。 |

#### Returns

`void`

___

### SetXYZ

▸ **SetXYZ**(`x`, `y`, `z`): `void`

设置向量的 x, y 和 z 分量。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | 新的 x 分量。 |
| `y` | `number` | 新的 y 分量。 |
| `z` | `number` | 新的 z 分量。 |

#### Returns

`void`

___

### SetY

▸ **SetY**(`y`): `void`

设置向量的 y 分量。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `y` | `number` | 新的 y 分量。 |

#### Returns

`void`

___

### SetZ

▸ **SetZ**(`z`): `void`

设置向量的 z 分量。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `z` | `number` | 新的 z 分量。 |

#### Returns

`void`

___

### SquareMagnitude

▸ **SquareMagnitude**(): `number`

获取向量模的平方。

#### Returns

`number`

向量模的平方。

___

### Subtract

▸ **Subtract**(`right`): `void`

从当前向量中减去另一个向量。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `right` | [`Mx3dGeVec`](Mx3dGeVec.md) | 另一个向量。 |

#### Returns

`void`

___

### Subtracted

▸ **Subtracted**(`right`): [`Mx3dGeVec`](Mx3dGeVec.md)

返回当前向量减去另一个向量的结果。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `right` | [`Mx3dGeVec`](Mx3dGeVec.md) | 另一个向量。 |

#### Returns

[`Mx3dGeVec`](Mx3dGeVec.md)

相减后的向量。

___

### Transform

▸ **Transform**(`t`): `void`

根据坐标系变换当前向量。

#### Parameters

| Name | Type |
| :------ | :------ |
| `t` | [`Mx3dGeTrsf`](Mx3dGeTrsf.md) |

#### Returns

`void`

___

### Transformed

▸ **Transformed**(`t`): [`Mx3dGeVec`](Mx3dGeVec.md)

返回根据坐标系变换后的向量。

#### Parameters

| Name | Type |
| :------ | :------ |
| `t` | [`Mx3dGeTrsf`](Mx3dGeTrsf.md) |

#### Returns

[`Mx3dGeVec`](Mx3dGeVec.md)

变换后的向量。

___

### X

▸ **X**(): `number`

获取向量的 x 分量。

#### Returns

`number`

x 分量。

___

### Y

▸ **Y**(): `number`

获取向量的 y 分量。

#### Returns

`number`

y 分量。

___

### Z

▸ **Z**(): `number`

获取向量的 z 分量。

#### Returns

`number`

z 分量。
