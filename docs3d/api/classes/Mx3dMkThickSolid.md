[mxcad_3d API 文档](../README.md) / Mx3dMkThickSolid

# Class: Mx3dMkThickSolid

表示建模厚壁固体的类，继承自 Mx3dMkObject。

## Hierarchy

- [`Mx3dMkObject`](Mx3dMkObject.md)

  ↳ **`Mx3dMkThickSolid`**

## Table of contents

### Constructors

- [constructor](Mx3dMkThickSolid.md#constructor)

### Methods

- [Build](Mx3dMkThickSolid.md#build)
- [IsDone](Mx3dMkThickSolid.md#isdone)
- [MakeThickSolidByJoin](Mx3dMkThickSolid.md#makethicksolidbyjoin)
- [MakeThickSolidBySimple](Mx3dMkThickSolid.md#makethicksolidbysimple)
- [Shape](Mx3dMkThickSolid.md#shape)

## Constructors

### constructor

• **new Mx3dMkThickSolid**()

构造函数，初始化厚壁固体对象。

#### Overrides

Mx3dMkObject.constructor

## Methods

### Build

▸ **Build**(): `void`

执行厚壁固体的建模算法。
此方法完成厚壁固体的构建过程。

#### Returns

`void`

___

### IsDone

▸ **IsDone**(): `boolean`

检查建模算法是否执行完成。

#### Returns

`boolean`

如果建模算法执行完成，则返回 true；否则返回 false。

___

### MakeThickSolidByJoin

▸ **MakeThickSolidByJoin**(`S`, `ClosingFaces`, `Offset`, `Tol`, `Mode?`, `Intersection?`, `SelfInter?`, `Join?`, `RemoveIntEdges?`): `void`

使用连接算法构建厚壁固体。
该方法基于一个固体和一组闭合面来创建厚壁固体。

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `S` | [`Mx3dShapeObject`](Mx3dShapeObject.md) | `undefined` | 要使用的初始固体对象。 |
| `ClosingFaces` | [`Mx3dShapeObject`](Mx3dShapeObject.md)[] | `undefined` | 要移除的面对象数组。 |
| `Offset` | `number` | `undefined` | 厚度值，定义壁的厚度。正值表示外侧，负值表示内侧。 |
| `Tol` | `number` | `undefined` | 公差值，定义生成形状的重合度标准。 |
| `Mode` | [`MxOffsetModeEnum`](../enums/MdGe.MxOffsetModeEnum.md) | `MdGe.MxOffsetModeEnum.Offset_Skin` | 构造模式，默认为 BRepOffset_Skin，定义自由边的平行线构造方式。 |
| `Intersection` | `boolean` | `false` | 是否计算交集，默认不计算。 |
| `SelfInter` | `boolean` | `false` | 是否消除自交，默认不消除。 |
| `Join` | [`MxGAJoinTypeEnum`](../enums/MdGe.MxGAJoinTypeEnum.md) | `MdGe.MxGAJoinTypeEnum.GA_Arc` | 连接类型，默认为 GeomAbs_Arc，用于填充平行线之间的空隙。 |
| `RemoveIntEdges` | `boolean` | `false` | 是否移除内部边，默认不移除。 |

#### Returns

`void`

___

### MakeThickSolidBySimple

▸ **MakeThickSolidBySimple**(`theS`, `theOffsetValue`): `void`

使用简单算法构建厚壁固体。
该方法基于一个固体和一个偏移值来创建厚壁固体。此算法不支持面移除。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theS` | [`Mx3dShapeObject`](Mx3dShapeObject.md) | 要使用的初始固体对象。 |
| `theOffsetValue` | `number` | 厚度值，定义壁的厚度。 |

#### Returns

`void`

___

### Shape

▸ **Shape**(): [`Mx3dShapeObject`](Mx3dShapeObject.md)

获取厚壁固体的形状对象。

#### Returns

[`Mx3dShapeObject`](Mx3dShapeObject.md)

厚壁固体的形状对象。
