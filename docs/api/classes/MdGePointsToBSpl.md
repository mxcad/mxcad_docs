[mxcad API 文档](../README.md) / MdGePointsToBSpl

# Class: MdGePointsToBSpl

表示拟合B样条曲线

## Hierarchy

- [`MdGeObject`](MdGeObject.md)

  ↳ **`MdGePointsToBSpl`**

## Table of contents

### Constructors

- [constructor](MdGePointsToBSpl.md#constructor)

### Properties

- [imp](MdGePointsToBSpl.md#imp)

### Methods

- [Curve](MdGePointsToBSpl.md#curve)
- [Init](MdGePointsToBSpl.md#init)
- [IsDone](MdGePointsToBSpl.md#isdone)
- [getImp](MdGePointsToBSpl.md#getimp)
- [initTempObject](MdGePointsToBSpl.md#inittempobject)

## Constructors

### constructor

• **new MdGePointsToBSpl**(`p1?`, `p2?`, `p3?`, `p4?`, `p5?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `p1?` | `object` \| [`MdGeArray1OfPnt`](MdGeArray1OfPnt.md) |
| `p2?` | `number` |
| `p3?` | `number` |
| `p4?` | [`MxGAShapeEnum`](../enums/MdGe.MxGAShapeEnum.md) |
| `p5?` | `number` |

#### Overrides

[MdGeObject](MdGeObject.md).[constructor](MdGeObject.md#constructor)

## Properties

### imp

• `Protected` **imp**: `any` = `0`

#### Inherited from

[MdGeObject](MdGeObject.md).[imp](MdGeObject.md#imp)

## Methods

### Curve

▸ **Curve**(): [`MdGeBSplineCurve`](MdGeBSplineCurve.md)

#### Returns

[`MdGeBSplineCurve`](MdGeBSplineCurve.md)

___

### Init

▸ **Init**(`Points`, `Parameters`, `DegMin?`, `DegMax?`, `Continuity?`, `Tol3D?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `Points` | [`MdGeArray1OfPnt`](MdGeArray1OfPnt.md) |
| `Parameters` | [`MdGeArray1OfReal`](MdGeArray1OfReal.md) |
| `DegMin?` | `number` |
| `DegMax?` | `number` |
| `Continuity?` | [`MxGAShapeEnum`](../enums/MdGe.MxGAShapeEnum.md) |
| `Tol3D?` | `number` |

#### Returns

`void`

___

### IsDone

▸ **IsDone**(): `boolean`

#### Returns

`boolean`

___

### getImp

▸ **getImp**(): `any`

#### Returns

`any`

#### Inherited from

[MdGeObject](MdGeObject.md).[getImp](MdGeObject.md#getimp)

___

### initTempObject

▸ `Protected` **initTempObject**(`imp`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `imp` | `any` |

#### Returns

`void`

#### Inherited from

[MdGeObject](MdGeObject.md).[initTempObject](MdGeObject.md#inittempobject)
