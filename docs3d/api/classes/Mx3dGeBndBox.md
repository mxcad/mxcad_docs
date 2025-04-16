[mxcad_3d API 文档](../README.md) / Mx3dGeBndBox

# Class: Mx3dGeBndBox

表示三维空间中的一个包围盒。

提供构造函数以及操作包围盒的方法，包括设置、更新、变换和检查等。
包围盒类主要用于空间中的包围体计算与操作，通常用于碰撞检测、空间分割等场景。

## Hierarchy

- [`Mx3dGeObject`](Mx3dGeObject.md)

  ↳ **`Mx3dGeBndBox`**

## Table of contents

### Constructors

- [constructor](Mx3dGeBndBox.md#constructor)

### Methods

- [AddBndBox](Mx3dGeBndBox.md#addbndbox)
- [AddDir](Mx3dGeBndBox.md#adddir)
- [AddPoint](Mx3dGeBndBox.md#addpoint)
- [AddPointDir](Mx3dGeBndBox.md#addpointdir)
- [CornerMax](Mx3dGeBndBox.md#cornermax)
- [CornerMin](Mx3dGeBndBox.md#cornermin)
- [Distance](Mx3dGeBndBox.md#distance)
- [Enlarge](Mx3dGeBndBox.md#enlarge)
- [FinitePart](Mx3dGeBndBox.md#finitepart)
- [GetGap](Mx3dGeBndBox.md#getgap)
- [HasFinitePart](Mx3dGeBndBox.md#hasfinitepart)
- [IsOpen](Mx3dGeBndBox.md#isopen)
- [IsOpenXmax](Mx3dGeBndBox.md#isopenxmax)
- [IsOpenXmin](Mx3dGeBndBox.md#isopenxmin)
- [IsOpenYmax](Mx3dGeBndBox.md#isopenymax)
- [IsOpenYmin](Mx3dGeBndBox.md#isopenymin)
- [IsOpenZmax](Mx3dGeBndBox.md#isopenzmax)
- [IsOpenZmin](Mx3dGeBndBox.md#isopenzmin)
- [IsOutBndBox](Mx3dGeBndBox.md#isoutbndbox)
- [IsOutPPD](Mx3dGeBndBox.md#isoutppd)
- [IsOutPoint](Mx3dGeBndBox.md#isoutpoint)
- [IsOutTBT](Mx3dGeBndBox.md#isouttbt)
- [IsThin](Mx3dGeBndBox.md#isthin)
- [IsVoid](Mx3dGeBndBox.md#isvoid)
- [IsWhole](Mx3dGeBndBox.md#iswhole)
- [IsXThin](Mx3dGeBndBox.md#isxthin)
- [IsYThin](Mx3dGeBndBox.md#isythin)
- [IsZThin](Mx3dGeBndBox.md#iszthin)
- [OpenXmax](Mx3dGeBndBox.md#openxmax)
- [OpenXmin](Mx3dGeBndBox.md#openxmin)
- [OpenYmax](Mx3dGeBndBox.md#openymax)
- [OpenYmin](Mx3dGeBndBox.md#openymin)
- [OpenZmax](Mx3dGeBndBox.md#openzmax)
- [OpenZmin](Mx3dGeBndBox.md#openzmin)
- [Set](Mx3dGeBndBox.md#set)
- [SetGap](Mx3dGeBndBox.md#setgap)
- [SetVoid](Mx3dGeBndBox.md#setvoid)
- [SetWhole](Mx3dGeBndBox.md#setwhole)
- [SquareExtent](Mx3dGeBndBox.md#squareextent)
- [Transformed](Mx3dGeBndBox.md#transformed)
- [Update](Mx3dGeBndBox.md#update)

## Constructors

### constructor

• **new Mx3dGeBndBox**()

默认构造一个空的包围盒。

#### Overrides

Mx3dGeObject.constructor

• **new Mx3dGeBndBox**(`theMin`, `theMax`)

使用给定的最小点和最大点构造一个包围盒。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theMin` | [`Mx3dGePoint`](Mx3dGePoint.md) | 包围盒的最小点。 |
| `theMax` | [`Mx3dGePoint`](Mx3dGePoint.md) | 包围盒的最大点。 |

#### Overrides

Mx3dGeObject.constructor

## Methods

### AddBndBox

▸ **AddBndBox**(`Other`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `Other` | [`Mx3dGeBndBox`](Mx3dGeBndBox.md) |

#### Returns

`void`

___

### AddDir

▸ **AddDir**(`D`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `D` | [`Mx3dGeDir`](Mx3dGeDir.md) |

#### Returns

`void`

___

### AddPoint

▸ **AddPoint**(`P`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `P` | [`Mx3dGePoint`](Mx3dGePoint.md) |

#### Returns

`void`

___

### AddPointDir

▸ **AddPointDir**(`P`, `D`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `P` | [`Mx3dGePoint`](Mx3dGePoint.md) |
| `D` | [`Mx3dGeDir`](Mx3dGeDir.md) |

#### Returns

`void`

___

### CornerMax

▸ **CornerMax**(): [`Mx3dGePoint`](Mx3dGePoint.md)

#### Returns

[`Mx3dGePoint`](Mx3dGePoint.md)

___

### CornerMin

▸ **CornerMin**(): [`Mx3dGePoint`](Mx3dGePoint.md)

#### Returns

[`Mx3dGePoint`](Mx3dGePoint.md)

___

### Distance

▸ **Distance**(`Other`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `Other` | [`Mx3dGeBndBox`](Mx3dGeBndBox.md) |

#### Returns

`number`

___

### Enlarge

▸ **Enlarge**(`Tol`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `Tol` | `number` |

#### Returns

`void`

___

### FinitePart

▸ **FinitePart**(): [`Mx3dGeBndBox`](Mx3dGeBndBox.md)

#### Returns

[`Mx3dGeBndBox`](Mx3dGeBndBox.md)

___

### GetGap

▸ **GetGap**(): `number`

#### Returns

`number`

___

### HasFinitePart

▸ **HasFinitePart**(): `boolean`

#### Returns

`boolean`

___

### IsOpen

▸ **IsOpen**(): `boolean`

#### Returns

`boolean`

___

### IsOpenXmax

▸ **IsOpenXmax**(): `boolean`

#### Returns

`boolean`

___

### IsOpenXmin

▸ **IsOpenXmin**(): `boolean`

#### Returns

`boolean`

___

### IsOpenYmax

▸ **IsOpenYmax**(): `boolean`

#### Returns

`boolean`

___

### IsOpenYmin

▸ **IsOpenYmin**(): `boolean`

#### Returns

`boolean`

___

### IsOpenZmax

▸ **IsOpenZmax**(): `boolean`

#### Returns

`boolean`

___

### IsOpenZmin

▸ **IsOpenZmin**(): `boolean`

#### Returns

`boolean`

___

### IsOutBndBox

▸ **IsOutBndBox**(`Other`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `Other` | [`Mx3dGeBndBox`](Mx3dGeBndBox.md) |

#### Returns

`boolean`

▸ **IsOutBndBox**(`Other`, `T`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `Other` | [`Mx3dGeBndBox`](Mx3dGeBndBox.md) |
| `T` | [`Mx3dGeTrsf`](Mx3dGeTrsf.md) |

#### Returns

`boolean`

___

### IsOutPPD

▸ **IsOutPPD**(`P1`, `P2`, `D`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `P1` | [`Mx3dGePoint`](Mx3dGePoint.md) |
| `P2` | [`Mx3dGePoint`](Mx3dGePoint.md) |
| `D` | [`Mx3dGeDir`](Mx3dGeDir.md) |

#### Returns

`boolean`

___

### IsOutPoint

▸ **IsOutPoint**(`P`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `P` | [`Mx3dGePoint`](Mx3dGePoint.md) |

#### Returns

`boolean`

___

### IsOutTBT

▸ **IsOutTBT**(`T1`, `Other`, `T2`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `T1` | [`Mx3dGeTrsf`](Mx3dGeTrsf.md) |
| `Other` | [`Mx3dGeBndBox`](Mx3dGeBndBox.md) |
| `T2` | [`Mx3dGeTrsf`](Mx3dGeTrsf.md) |

#### Returns

`boolean`

___

### IsThin

▸ **IsThin**(`tol`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tol` | `number` |

#### Returns

`boolean`

___

### IsVoid

▸ **IsVoid**(): `boolean`

#### Returns

`boolean`

___

### IsWhole

▸ **IsWhole**(): `boolean`

#### Returns

`boolean`

___

### IsXThin

▸ **IsXThin**(`tol`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tol` | `number` |

#### Returns

`boolean`

___

### IsYThin

▸ **IsYThin**(`tol`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tol` | `number` |

#### Returns

`boolean`

___

### IsZThin

▸ **IsZThin**(`tol`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tol` | `number` |

#### Returns

`boolean`

___

### OpenXmax

▸ **OpenXmax**(): `void`

#### Returns

`void`

___

### OpenXmin

▸ **OpenXmin**(): `void`

#### Returns

`void`

___

### OpenYmax

▸ **OpenYmax**(): `void`

#### Returns

`void`

___

### OpenYmin

▸ **OpenYmin**(): `void`

#### Returns

`void`

___

### OpenZmax

▸ **OpenZmax**(): `void`

#### Returns

`void`

___

### OpenZmin

▸ **OpenZmin**(): `void`

#### Returns

`void`

___

### Set

▸ **Set**(`P`, `D`): `void`

设置包围盒的方向。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `P` | [`Mx3dGePoint`](Mx3dGePoint.md) | 包围盒的参考点。 |
| `D` | [`Mx3dGeDir`](Mx3dGeDir.md) | 包围盒的方向。 |

#### Returns

`void`

___

### SetGap

▸ **SetGap**(`Tol`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `Tol` | `number` |

#### Returns

`void`

___

### SetVoid

▸ **SetVoid**(): `void`

将包围盒设置为一个无效状态（空的包围盒）。

#### Returns

`void`

___

### SetWhole

▸ **SetWhole**(): `void`

将包围盒设置为包含整个空间。

#### Returns

`void`

___

### SquareExtent

▸ **SquareExtent**(): `number`

#### Returns

`number`

___

### Transformed

▸ **Transformed**(`T`): [`Mx3dGeBndBox`](Mx3dGeBndBox.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `T` | [`Mx3dGeTrsf`](Mx3dGeTrsf.md) |

#### Returns

[`Mx3dGeBndBox`](Mx3dGeBndBox.md)

___

### Update

▸ **Update**(`aXmin`, `aYmin`, `aZmin`, `aXmax`, `aYmax`, `aZmax`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `aXmin` | `number` |
| `aYmin` | `number` |
| `aZmin` | `number` |
| `aXmax` | `number` |
| `aYmax` | `number` |
| `aZmax` | `number` |

#### Returns

`void`
