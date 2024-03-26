[mxcad API 文档](../README.md) / MdGeRect

# Class: MdGeRect

表示一个矩形

## Hierarchy

- [`MdGeObject`](MdGeObject.md)

  ↳ **`MdGeRect`**

## Table of contents

### Constructors

- [constructor](MdGeRect.md#constructor)

### Properties

- [imp](MdGeRect.md#imp)

### Methods

- [Area](MdGeRect.md#area)
- [BottomEdge](MdGeRect.md#bottomedge)
- [Face](MdGeRect.md#face)
- [LeftEdge](MdGeRect.md#leftedge)
- [Position](MdGeRect.md#position)
- [RightEdge](MdGeRect.md#rightedge)
- [SetPosition](MdGeRect.md#setposition)
- [SetX](MdGeRect.md#setx)
- [SetY](MdGeRect.md#sety)
- [Shape](MdGeRect.md#shape)
- [TopEdge](MdGeRect.md#topedge)
- [Wire](MdGeRect.md#wire)
- [X](MdGeRect.md#x)
- [Y](MdGeRect.md#y)
- [getImp](MdGeRect.md#getimp)
- [initTempObject](MdGeRect.md#inittempobject)

## Constructors

### constructor

• **new MdGeRect**(`p1?`, `p2?`, `p3?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `p1?` | `object` \| [`MdGeCSYSR`](MdGeCSYSR.md) |
| `p2?` | `number` |
| `p3?` | `number` |

#### Overrides

[MdGeObject](MdGeObject.md).[constructor](MdGeObject.md#constructor)

## Properties

### imp

• `Protected` **imp**: `any` = `0`

#### Inherited from

[MdGeObject](MdGeObject.md).[imp](MdGeObject.md#imp)

## Methods

### Area

▸ **Area**(): `number`

#### Returns

`number`

___

### BottomEdge

▸ **BottomEdge**(): [`MdGeEdge`](MdGeEdge.md)

#### Returns

[`MdGeEdge`](MdGeEdge.md)

___

### Face

▸ **Face**(): [`MdGeFace`](MdGeFace.md)

#### Returns

[`MdGeFace`](MdGeFace.md)

___

### LeftEdge

▸ **LeftEdge**(): [`MdGeEdge`](MdGeEdge.md)

#### Returns

[`MdGeEdge`](MdGeEdge.md)

___

### Position

▸ **Position**(): [`MdGeCSYSR`](MdGeCSYSR.md)

#### Returns

[`MdGeCSYSR`](MdGeCSYSR.md)

___

### RightEdge

▸ **RightEdge**(): [`MdGeEdge`](MdGeEdge.md)

#### Returns

[`MdGeEdge`](MdGeEdge.md)

___

### SetPosition

▸ **SetPosition**(`thePosition`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `thePosition` | [`MdGeCSYSR`](MdGeCSYSR.md) |

#### Returns

`void`

___

### SetX

▸ **SetX**(`theX`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theX` | `number` |

#### Returns

`void`

___

### SetY

▸ **SetY**(`theY`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theY` | `number` |

#### Returns

`void`

___

### Shape

▸ **Shape**(): [`MdGeShape`](MdGeShape.md)

#### Returns

[`MdGeShape`](MdGeShape.md)

___

### TopEdge

▸ **TopEdge**(): [`MdGeEdge`](MdGeEdge.md)

#### Returns

[`MdGeEdge`](MdGeEdge.md)

___

### Wire

▸ **Wire**(): [`MdGeWire`](MdGeWire.md)

#### Returns

[`MdGeWire`](MdGeWire.md)

___

### X

▸ **X**(): `number`

#### Returns

`number`

___

### Y

▸ **Y**(): `number`

#### Returns

`number`

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
