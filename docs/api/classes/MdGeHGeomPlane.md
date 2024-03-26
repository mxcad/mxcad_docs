[mxcad API 文档](../README.md) / MdGeHGeomPlane

# Class: MdGeHGeomPlane

表示几何平面句柄

## Hierarchy

- [`MdGeObject`](MdGeObject.md)

  ↳ **`MdGeHGeomPlane`**

## Table of contents

### Constructors

- [constructor](MdGeHGeomPlane.md#constructor)

### Properties

- [imp](MdGeHGeomPlane.md#imp)

### Methods

- [Axis](MdGeHGeomPlane.md#axis)
- [DownCast](MdGeHGeomPlane.md#downcast)
- [Location](MdGeHGeomPlane.md#location)
- [Position](MdGeHGeomPlane.md#position)
- [getImp](MdGeHGeomPlane.md#getimp)
- [initTempObject](MdGeHGeomPlane.md#inittempobject)

## Constructors

### constructor

• **new MdGeHGeomPlane**(`p?`)

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

### Axis

▸ **Axis**(): [`MdGeAxis`](MdGeAxis.md)

#### Returns

[`MdGeAxis`](MdGeAxis.md)

___

### DownCast

▸ **DownCast**(`hGeomSurface`): [`MdGeHGeomPlane`](MdGeHGeomPlane.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `hGeomSurface` | [`MdGeHGeomSurface`](MdGeHGeomSurface.md) |

#### Returns

[`MdGeHGeomPlane`](MdGeHGeomPlane.md)

___

### Location

▸ **Location**(): [`MdGePoint`](MdGePoint.md)

#### Returns

[`MdGePoint`](MdGePoint.md)

___

### Position

▸ **Position**(): [`MdGeCSYS`](MdGeCSYS.md)

#### Returns

[`MdGeCSYS`](MdGeCSYS.md)

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
