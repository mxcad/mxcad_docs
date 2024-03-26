[mxcad API 文档](../README.md) / MdGePointsToBSplSurface

# Class: MdGePointsToBSplSurface

表示拟合B样条曲面

## Hierarchy

- [`MdGeObject`](MdGeObject.md)

  ↳ **`MdGePointsToBSplSurface`**

## Table of contents

### Constructors

- [constructor](MdGePointsToBSplSurface.md#constructor)

### Properties

- [imp](MdGePointsToBSplSurface.md#imp)

### Methods

- [Init](MdGePointsToBSplSurface.md#init)
- [Interpolate](MdGePointsToBSplSurface.md#interpolate)
- [IsDone](MdGePointsToBSplSurface.md#isdone)
- [Surface](MdGePointsToBSplSurface.md#surface)
- [getImp](MdGePointsToBSplSurface.md#getimp)
- [initTempObject](MdGePointsToBSplSurface.md#inittempobject)

## Constructors

### constructor

• **new MdGePointsToBSplSurface**(`p1?`, `p2?`, `p3?`, `p4?`, `p5?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `p1?` | [`MdGeArray2OfPnt`](MdGeArray2OfPnt.md) |
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

### Init

▸ **Init**(`Points`, `DegMin?`, `DegMax?`, `Continuity?`, `Tol3D?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `Points` | [`MdGeArray2OfPnt`](MdGeArray2OfPnt.md) |
| `DegMin?` | `number` |
| `DegMax?` | `number` |
| `Continuity?` | [`MxGAShapeEnum`](../enums/MdGe.MxGAShapeEnum.md) |
| `Tol3D?` | `number` |

#### Returns

`void`

___

### Interpolate

▸ **Interpolate**(`p1`, `p2?`, `p3?`, `p4?`, `p5?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `p1` | [`MdGeArray2OfPnt`](MdGeArray2OfPnt.md) \| [`MdGeArray2OfReal`](MdGeArray2OfReal.md) |
| `p2?` | `number` \| `boolean` |
| `p3?` | `number` |
| `p4?` | `number` |
| `p5?` | `number` |

#### Returns

`void`

___

### IsDone

▸ **IsDone**(): `boolean`

#### Returns

`boolean`

___

### Surface

▸ **Surface**(): [`MdGeBSplineSurface`](MdGeBSplineSurface.md)

#### Returns

[`MdGeBSplineSurface`](MdGeBSplineSurface.md)

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
