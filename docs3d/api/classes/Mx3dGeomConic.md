[mxcad_3d API 文档](../README.md) / Mx3dGeomConic

# Class: Mx3dGeomConic

表示几何二次曲线(圆锥曲线)的类，继承自 Mx3dGeomCurve。

## Hierarchy

- [`Mx3dGeomCurve`](Mx3dGeomCurve.md)

  ↳ **`Mx3dGeomConic`**

  ↳↳ [`Mx3dGeomCircle`](Mx3dGeomCircle.md)

  ↳↳ [`Mx3dGeomEllipse`](Mx3dGeomEllipse.md)

  ↳↳ [`Mx3dGeomHyperbola`](Mx3dGeomHyperbola.md)

  ↳↳ [`Mx3dGeomParabola`](Mx3dGeomParabola.md)

## Table of contents

### Constructors

- [constructor](Mx3dGeomConic.md#constructor)

### Methods

- [Axis](Mx3dGeomConic.md#axis)
- [Continuity](Mx3dGeomConic.md#continuity)
- [DynCast](Mx3dGeomConic.md#dyncast)
- [DynamicType](Mx3dGeomConic.md#dynamictype)
- [IsCN](Mx3dGeomConic.md#iscn)
- [Location](Mx3dGeomConic.md#location)
- [MirrorByAxis](Mx3dGeomConic.md#mirrorbyaxis)
- [MirrorByCSYSR](Mx3dGeomConic.md#mirrorbycsysr)
- [MirrorByPoint](Mx3dGeomConic.md#mirrorbypoint)
- [MirroredByAxis](Mx3dGeomConic.md#mirroredbyaxis)
- [MirroredByCSYSR](Mx3dGeomConic.md#mirroredbycsysr)
- [MirroredByPoint](Mx3dGeomConic.md#mirroredbypoint)
- [Period](Mx3dGeomConic.md#period)
- [Position](Mx3dGeomConic.md#position)
- [Reverse](Mx3dGeomConic.md#reverse)
- [Reversed](Mx3dGeomConic.md#reversed)
- [Rotate](Mx3dGeomConic.md#rotate)
- [Rotated](Mx3dGeomConic.md#rotated)
- [Scale](Mx3dGeomConic.md#scale)
- [Scaled](Mx3dGeomConic.md#scaled)
- [SetAxis](Mx3dGeomConic.md#setaxis)
- [SetLocation](Mx3dGeomConic.md#setlocation)
- [SetPosition](Mx3dGeomConic.md#setposition)
- [Transformed](Mx3dGeomConic.md#transformed)
- [TranslateBy2Points](Mx3dGeomConic.md#translateby2points)
- [TranslateByVec](Mx3dGeomConic.md#translatebyvec)
- [TranslatedBy2Points](Mx3dGeomConic.md#translatedby2points)
- [TranslatedByVec](Mx3dGeomConic.md#translatedbyvec)
- [Value](Mx3dGeomConic.md#value)
- [XAxis](Mx3dGeomConic.md#xaxis)
- [YAxis](Mx3dGeomConic.md#yaxis)

## Constructors

### constructor

• **new Mx3dGeomConic**(`p?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `p?` | `object` |

#### Overrides

[Mx3dGeomCurve](Mx3dGeomCurve.md).[constructor](Mx3dGeomCurve.md#constructor)

## Methods

### Axis

▸ **Axis**(): [`Mx3dGeAxis`](Mx3dGeAxis.md)

获取二次曲线的轴。

#### Returns

[`Mx3dGeAxis`](Mx3dGeAxis.md)

轴对象。

___

### Continuity

▸ **Continuity**(): [`MxGAShapeEnum`](../enums/MdGe.MxGAShapeEnum.md)

获取二次曲线的连续性。

#### Returns

[`MxGAShapeEnum`](../enums/MdGe.MxGAShapeEnum.md)

连续性枚举值。

___

### DynCast

▸ **DynCast**(`theObject`): [`Mx3dGeomConic`](Mx3dGeomConic.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theObject` | [`Mx3dGeomObject`](Mx3dGeomObject.md) |

#### Returns

[`Mx3dGeomConic`](Mx3dGeomConic.md)

#### Inherited from

[Mx3dGeomCurve](Mx3dGeomCurve.md).[DynCast](Mx3dGeomCurve.md#dyncast)

___

### DynamicType

▸ **DynamicType**(): `string`

返回对象的动态类型。

#### Returns

`string`

动态类型的字符串。

#### Overrides

[Mx3dGeomCurve](Mx3dGeomCurve.md).[DynamicType](Mx3dGeomCurve.md#dynamictype)

___

### IsCN

▸ **IsCN**(`N`): `boolean`

检查二次曲线是否具有指定阶数的连续性。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `N` | `number` | 阶数。 |

#### Returns

`boolean`

如果具有指定阶数的连续性，则返回 true，否则返回 false。

___

### Location

▸ **Location**(): [`Mx3dGePoint`](Mx3dGePoint.md)

获取二次曲线的位置。

#### Returns

[`Mx3dGePoint`](Mx3dGePoint.md)

点对象。

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

#### Inherited from

[Mx3dGeomCurve](Mx3dGeomCurve.md).[MirrorByAxis](Mx3dGeomCurve.md#mirrorbyaxis)

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

#### Inherited from

[Mx3dGeomCurve](Mx3dGeomCurve.md).[MirrorByCSYSR](Mx3dGeomCurve.md#mirrorbycsysr)

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

#### Inherited from

[Mx3dGeomCurve](Mx3dGeomCurve.md).[MirrorByPoint](Mx3dGeomCurve.md#mirrorbypoint)

___

### MirroredByAxis

▸ **MirroredByAxis**(`A1`): [`Mx3dGeomConic`](Mx3dGeomConic.md)

返回通过轴镜像变换后的新几何对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `A1` | [`Mx3dGeAxis`](Mx3dGeAxis.md) | 轴对象。 |

#### Returns

[`Mx3dGeomConic`](Mx3dGeomConic.md)

新的几何对象。

#### Inherited from

[Mx3dGeomCurve](Mx3dGeomCurve.md).[MirroredByAxis](Mx3dGeomCurve.md#mirroredbyaxis)

___

### MirroredByCSYSR

▸ **MirroredByCSYSR**(`A2`): [`Mx3dGeomConic`](Mx3dGeomConic.md)

返回通过右手坐标系镜像变换后的新几何对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `A2` | [`Mx3dGeCSYSR`](Mx3dGeCSYSR.md) | 右手坐标系对象。 |

#### Returns

[`Mx3dGeomConic`](Mx3dGeomConic.md)

新的几何对象。

#### Inherited from

[Mx3dGeomCurve](Mx3dGeomCurve.md).[MirroredByCSYSR](Mx3dGeomCurve.md#mirroredbycsysr)

___

### MirroredByPoint

▸ **MirroredByPoint**(`P`): [`Mx3dGeomConic`](Mx3dGeomConic.md)

返回通过点镜像变换后的新几何对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `P` | [`Mx3dGePoint`](Mx3dGePoint.md) | 点对象。 |

#### Returns

[`Mx3dGeomConic`](Mx3dGeomConic.md)

新的几何对象。

#### Inherited from

[Mx3dGeomCurve](Mx3dGeomCurve.md).[MirroredByPoint](Mx3dGeomCurve.md#mirroredbypoint)

___

### Period

▸ **Period**(): `number`

返回曲线的周期。

#### Returns

`number`

曲线的周期。

#### Inherited from

[Mx3dGeomCurve](Mx3dGeomCurve.md).[Period](Mx3dGeomCurve.md#period)

___

### Position

▸ **Position**(): [`Mx3dGeCSYSR`](Mx3dGeCSYSR.md)

获取二次曲线的右手坐标系。

#### Returns

[`Mx3dGeCSYSR`](Mx3dGeCSYSR.md)

右手坐标系对象。

___

### Reverse

▸ **Reverse**(): `void`

反转二次曲线的方向。

#### Returns

`void`

___

### Reversed

▸ **Reversed**(): [`Mx3dGeomConic`](Mx3dGeomConic.md)

返回反向后的新几何曲线对象。

#### Returns

[`Mx3dGeomConic`](Mx3dGeomConic.md)

新的几何曲线对象。

#### Inherited from

[Mx3dGeomCurve](Mx3dGeomCurve.md).[Reversed](Mx3dGeomCurve.md#reversed)

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

#### Inherited from

[Mx3dGeomCurve](Mx3dGeomCurve.md).[Rotate](Mx3dGeomCurve.md#rotate)

___

### Rotated

▸ **Rotated**(`A1`, `Ang`): [`Mx3dGeomConic`](Mx3dGeomConic.md)

返回旋转后的新几何对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `A1` | [`Mx3dGeAxis`](Mx3dGeAxis.md) | 轴对象。 |
| `Ang` | `number` | 旋转角度。 |

#### Returns

[`Mx3dGeomConic`](Mx3dGeomConic.md)

新的几何对象。

#### Inherited from

[Mx3dGeomCurve](Mx3dGeomCurve.md).[Rotated](Mx3dGeomCurve.md#rotated)

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

#### Inherited from

[Mx3dGeomCurve](Mx3dGeomCurve.md).[Scale](Mx3dGeomCurve.md#scale)

___

### Scaled

▸ **Scaled**(`P`, `S`): [`Mx3dGeomConic`](Mx3dGeomConic.md)

返回缩放后的新几何对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `P` | [`Mx3dGePoint`](Mx3dGePoint.md) | 点对象。 |
| `S` | `number` | 缩放比例。 |

#### Returns

[`Mx3dGeomConic`](Mx3dGeomConic.md)

新的几何对象。

#### Inherited from

[Mx3dGeomCurve](Mx3dGeomCurve.md).[Scaled](Mx3dGeomCurve.md#scaled)

___

### SetAxis

▸ **SetAxis**(`theA1`): `void`

设置二次曲线的轴。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theA1` | [`Mx3dGeAxis`](Mx3dGeAxis.md) | 轴对象。 |

#### Returns

`void`

___

### SetLocation

▸ **SetLocation**(`theP`): `void`

设置二次曲线的位置。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theP` | [`Mx3dGePoint`](Mx3dGePoint.md) | 点对象。 |

#### Returns

`void`

___

### SetPosition

▸ **SetPosition**(`theA2`): `void`

设置二次曲线的右手坐标系。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theA2` | [`Mx3dGeCSYSR`](Mx3dGeCSYSR.md) | 右手坐标系对象。 |

#### Returns

`void`

___

### Transformed

▸ **Transformed**(`T`): [`Mx3dGeomConic`](Mx3dGeomConic.md)

返回变换后的新几何对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `T` | [`Mx3dGeTrsf`](Mx3dGeTrsf.md) | 变换对象。 |

#### Returns

[`Mx3dGeomConic`](Mx3dGeomConic.md)

新的几何对象。

#### Inherited from

[Mx3dGeomCurve](Mx3dGeomCurve.md).[Transformed](Mx3dGeomCurve.md#transformed)

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

#### Inherited from

[Mx3dGeomCurve](Mx3dGeomCurve.md).[TranslateBy2Points](Mx3dGeomCurve.md#translateby2points)

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

#### Inherited from

[Mx3dGeomCurve](Mx3dGeomCurve.md).[TranslateByVec](Mx3dGeomCurve.md#translatebyvec)

___

### TranslatedBy2Points

▸ **TranslatedBy2Points**(`P1`, `P2`): [`Mx3dGeomConic`](Mx3dGeomConic.md)

返回通过两个点平移后的新几何对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `P1` | [`Mx3dGePoint`](Mx3dGePoint.md) | 起始点对象。 |
| `P2` | [`Mx3dGePoint`](Mx3dGePoint.md) | 终止点对象。 |

#### Returns

[`Mx3dGeomConic`](Mx3dGeomConic.md)

新的几何对象。

#### Inherited from

[Mx3dGeomCurve](Mx3dGeomCurve.md).[TranslatedBy2Points](Mx3dGeomCurve.md#translatedby2points)

___

### TranslatedByVec

▸ **TranslatedByVec**(`V`): [`Mx3dGeomConic`](Mx3dGeomConic.md)

返回通过向量平移后的新几何对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `V` | [`Mx3dGeVec`](Mx3dGeVec.md) | 向量对象。 |

#### Returns

[`Mx3dGeomConic`](Mx3dGeomConic.md)

新的几何对象。

#### Inherited from

[Mx3dGeomCurve](Mx3dGeomCurve.md).[TranslatedByVec](Mx3dGeomCurve.md#translatedbyvec)

___

### Value

▸ **Value**(`U`): [`Mx3dGePoint`](Mx3dGePoint.md)

返回给定参数 U 处的点。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `U` | `number` | 参数值。 |

#### Returns

[`Mx3dGePoint`](Mx3dGePoint.md)

给定参数处的点对象。

#### Inherited from

[Mx3dGeomCurve](Mx3dGeomCurve.md).[Value](Mx3dGeomCurve.md#value)

___

### XAxis

▸ **XAxis**(): [`Mx3dGeAxis`](Mx3dGeAxis.md)

获取二次曲线的 X 轴。

#### Returns

[`Mx3dGeAxis`](Mx3dGeAxis.md)

X 轴对象。

___

### YAxis

▸ **YAxis**(): [`Mx3dGeAxis`](Mx3dGeAxis.md)

获取二次曲线的 Y 轴。

#### Returns

[`Mx3dGeAxis`](Mx3dGeAxis.md)

Y 轴对象。
