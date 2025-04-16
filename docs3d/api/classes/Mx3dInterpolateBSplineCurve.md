[mxcad_3d API 文档](../README.md) / Mx3dInterpolateBSplineCurve

# Class: Mx3dInterpolateBSplineCurve

表示插值B样条曲线算法。

## Hierarchy

- [`Mx3dBaseObject`](Mx3dBaseObject.md)

  ↳ **`Mx3dInterpolateBSplineCurve`**

## Table of contents

### Constructors

- [constructor](Mx3dInterpolateBSplineCurve.md#constructor)

### Methods

- [Curve](Mx3dInterpolateBSplineCurve.md#curve)
- [IsDone](Mx3dInterpolateBSplineCurve.md#isdone)
- [Load](Mx3dInterpolateBSplineCurve.md#load)
- [LoadEnds](Mx3dInterpolateBSplineCurve.md#loadends)
- [Perform](Mx3dInterpolateBSplineCurve.md#perform)

## Constructors

### constructor

• **new Mx3dInterpolateBSplineCurve**(`Points`, `PeriodicFlag`, `Tolerance`)

构造函数，创建用于生成B样条曲线的对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Points` | [`Mx3dGePoint`](Mx3dGePoint.md)[] | 插值点数组。 |
| `PeriodicFlag` | `boolean` | 周期性标志。 |
| `Tolerance` | `number` | 精度。 |

#### Overrides

Mx3dBaseObject.constructor

• **new Mx3dInterpolateBSplineCurve**(`Points`, `Parameters`, `PeriodicFlag`, `Tolerance`)

构造函数，创建用于生成B样条曲线的对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Points` | [`Mx3dGePoint`](Mx3dGePoint.md)[] | 插值点数组。 |
| `Parameters` | `number`[] | 参数值数组。 |
| `PeriodicFlag` | `boolean` | 周期性标志。 |
| `Tolerance` | `number` | 精度。 |

#### Overrides

Mx3dBaseObject.constructor

## Methods

### Curve

▸ **Curve**(): [`Mx3dGeomBSplineCurve`](Mx3dGeomBSplineCurve.md)

获取插值算法生成的B样条曲线。

#### Returns

[`Mx3dGeomBSplineCurve`](Mx3dGeomBSplineCurve.md)

B样条曲线。

___

### IsDone

▸ **IsDone**(): `boolean`

判断算法是否执行成功。

#### Returns

`boolean`

算法是否执行成功标志，true 成功， false 失败。

___

### Load

▸ **Load**(`Tangents`, `TangentFlags`): `void`

设置所有插值点切向。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Tangents` | [`Mx3dGeVec`](Mx3dGeVec.md)[] | 切向数组。 |
| `TangentFlags` | `boolean`[] | 是否应用切向数组。 |

#### Returns

`void`

___

### LoadEnds

▸ **LoadEnds**(`InitialTangent`, `FinalTangent`): `void`

设置起点终点切向。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `InitialTangent` | `UniVec` | 起点切向。 |
| `FinalTangent` | `UniVec` | 终点切向。 |

#### Returns

`void`

___

### Perform

▸ **Perform**(): `void`

执行算法。

#### Returns

`void`
