[mxcad_3d API documentation](../README. md)/Mx3dGeBendBox

# Class: Mx3dGeBndBox

Represents a bounding box in three-dimensional space.

Provide constructors and methods for manipulating bounding boxes, including setting, updating, transforming, and checking.
The bounding box class is mainly used for calculating and manipulating bounding boxes in space, and is typically used in scenarios such as collision detection and spatial segmentation.

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

Construct an empty bounding box by default.

#### Overrides

Mx3dGeObject.constructor

• **new Mx3dGeBndBox**(`theMin`, `theMax`)

Construct a bounding box using the given minimum and maximum points.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheMin | [Mx3dGePoint] (Mx3dGePoint. md) | The minimum point of the bounding box|
|TheMax | [Mx3dGePoint] (Mx3dGePoint. md) | The maximum point of the bounding box|

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

Set the direction of the bounding box.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|P | [Mx3dGePoint] (Mx3dGePoint. md) | The reference point of the bounding box|
|D | [Mx3dGeDir] (Mx3dGeDir. md) | The direction of the bounding box|

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

Set the bounding box to an invalid state (empty bounding box).

#### Returns

`void`

___

### SetWhole

▸ **SetWhole**(): `void`

Set the bounding box to contain the entire space.

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
