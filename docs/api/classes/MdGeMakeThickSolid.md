[mxcad API 文档](../README.md) / MdGeMakeThickSolid

# Class: MdGeMakeThickSolid

表示薄实体

## Hierarchy

- [`MdGeObject`](MdGeObject.md)

  ↳ **`MdGeMakeThickSolid`**

## Table of contents

### Constructors

- [constructor](MdGeMakeThickSolid.md#constructor)

### Properties

- [imp](MdGeMakeThickSolid.md#imp)

### Methods

- [MakeThickSolidByJoin](MdGeMakeThickSolid.md#makethicksolidbyjoin)
- [MakeThickSolidBySimple](MdGeMakeThickSolid.md#makethicksolidbysimple)
- [Shape](MdGeMakeThickSolid.md#shape)
- [getImp](MdGeMakeThickSolid.md#getimp)
- [initTempObject](MdGeMakeThickSolid.md#inittempobject)

## Constructors

### constructor

• **new MdGeMakeThickSolid**(`p?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `p?` | `object` |

#### Overrides

[MdGeObject](MdGeObject.md).[constructor](MdGeObject.md#constructor)

## Properties

### imp

• `Protected` **imp**: `any` = `0`

#### Inherited from

[MdGeObject](MdGeObject.md).[imp](MdGeObject.md#imp)

## Methods

### MakeThickSolidByJoin

▸ **MakeThickSolidByJoin**(`S`, `ClosingFaces`, `Offset`, `Tol`, `Mode?`, `Intersection?`, `SelfInter?`, `Join?`, `RemoveIntEdges?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `S` | [`MdGeShape`](MdGeShape.md) |
| `ClosingFaces` | [`MdGeListOfShape`](MdGeListOfShape.md) |
| `Offset` | `number` |
| `Tol` | `number` |
| `Mode?` | [`MxOffsetModeEnum`](../enums/MdGe.MxOffsetModeEnum.md) |
| `Intersection?` | `boolean` |
| `SelfInter?` | `boolean` |
| `Join?` | [`MxGAJoinTypeEnum`](../enums/MdGe.MxGAJoinTypeEnum.md) |
| `RemoveIntEdges?` | `boolean` |

#### Returns

`void`

___

### MakeThickSolidBySimple

▸ **MakeThickSolidBySimple**(`theS`, `theOffsetValue`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theS` | [`MdGeShape`](MdGeShape.md) |
| `theOffsetValue` | `number` |

#### Returns

`void`

___

### Shape

▸ **Shape**(): [`MdGeShape`](MdGeShape.md)

#### Returns

[`MdGeShape`](MdGeShape.md)

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
