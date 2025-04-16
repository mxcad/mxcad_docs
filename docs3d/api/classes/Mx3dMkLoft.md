[mxcad_3d API 文档](../README.md) / Mx3dMkLoft

# Class: Mx3dMkLoft

表示建模放样体的类，继承自 Mx3dMkObject。

## Hierarchy

- [`Mx3dMkObject`](Mx3dMkObject.md)

  ↳ **`Mx3dMkLoft`**

## Table of contents

### Constructors

- [constructor](Mx3dMkLoft.md#constructor)

### Methods

- [AddVertex](Mx3dMkLoft.md#addvertex)
- [AddWire](Mx3dMkLoft.md#addwire)
- [Build](Mx3dMkLoft.md#build)
- [Continuity](Mx3dMkLoft.md#continuity)
- [IsDone](Mx3dMkLoft.md#isdone)
- [SetContinuity](Mx3dMkLoft.md#setcontinuity)
- [SetSmoothing](Mx3dMkLoft.md#setsmoothing)
- [Shape](Mx3dMkLoft.md#shape)
- [UseSmoothing](Mx3dMkLoft.md#usesmoothing)

## Constructors

### constructor

• **new Mx3dMkLoft**(`isSolid?`, `ruled?`, `pres3d?`)

构造函数，初始化放样体对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `isSolid?` | `boolean` | 是否创建实体放样体，默认为 false。 |
| `ruled?` | `boolean` | 是否使用规则放样，默认为 false。 |
| `pres3d?` | `number` | 放样体的平面分辨率，默认为 0。 |

#### Overrides

Mx3dMkObject.constructor

## Methods

### AddVertex

▸ **AddVertex**(`aVertex`): `void`

添加一个顶点到放样体。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `aVertex` | [`Mx3dShapeVertex`](Mx3dShapeVertex.md) | 要添加的顶点对象。 |

#### Returns

`void`

___

### AddWire

▸ **AddWire**(`wire`): `void`

添加一个Wire到放样体。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `wire` | [`Mx3dShapeWire`](Mx3dShapeWire.md) | 要添加的Wire对象。 |

#### Returns

`void`

___

### Build

▸ **Build**(): `void`

执行放样体的建模算法。

#### Returns

`void`

___

### Continuity

▸ **Continuity**(): [`MxGAShapeEnum`](../enums/MdGe.MxGAShapeEnum.md)

获取放样体的连续性。

#### Returns

[`MxGAShapeEnum`](../enums/MdGe.MxGAShapeEnum.md)

当前放样体的连续性枚举值。

___

### IsDone

▸ **IsDone**(): `boolean`

检查建模算法是否执行完成。

#### Returns

`boolean`

建模算法执行是否完成的标志，true 完成，false 失败。

___

### SetContinuity

▸ **SetContinuity**(`C`): `void`

设置放样体的连续性。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `C` | [`MxGAShapeEnum`](../enums/MdGe.MxGAShapeEnum.md) | 形状的连续性枚举值。 |

#### Returns

`void`

___

### SetSmoothing

▸ **SetSmoothing**(`UseSmoothing`): `void`

设置是否使用平滑处理。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `UseSmoothing` | `boolean` | 使用平滑处理的标志。 |

#### Returns

`void`

___

### Shape

▸ **Shape**(): [`Mx3dShapeObject`](Mx3dShapeObject.md)

获取放样体的形状。

#### Returns

[`Mx3dShapeObject`](Mx3dShapeObject.md)

放样体的形状对象。

___

### UseSmoothing

▸ **UseSmoothing**(): `boolean`

检查是否使用平滑处理。

#### Returns

`boolean`

平滑处理的使用状态，true 为使用，false 为不使用。
