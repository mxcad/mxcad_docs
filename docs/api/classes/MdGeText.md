[mxcad API 文档](../README.md) / MdGeText

# Class: MdGeText

表示文字

## Hierarchy

- [`MdGeObject`](MdGeObject.md)

  ↳ **`MdGeText`**

## Table of contents

### Constructors

- [constructor](MdGeText.md#constructor)

### Properties

- [imp](MdGeText.md#imp)

### Methods

- [HasOwnAnchorPoint](MdGeText.md#hasownanchorpoint)
- [HasPlane](MdGeText.md#hasplane)
- [Height](MdGeText.md#height)
- [HorizontalAlignment](MdGeText.md#horizontalalignment)
- [Orientation](MdGeText.md#orientation)
- [Position](MdGeText.md#position)
- [ResetOrientation](MdGeText.md#resetorientation)
- [SetHeight](MdGeText.md#setheight)
- [SetHorizontalAlignment](MdGeText.md#sethorizontalalignment)
- [SetOrientation](MdGeText.md#setorientation)
- [SetOwnAnchorPoint](MdGeText.md#setownanchorpoint)
- [SetPosition](MdGeText.md#setposition)
- [SetText](MdGeText.md#settext)
- [SetVerticalAlignment](MdGeText.md#setverticalalignment)
- [Shape](MdGeText.md#shape)
- [VerticalAlignment](MdGeText.md#verticalalignment)
- [getImp](MdGeText.md#getimp)
- [initTempObject](MdGeText.md#inittempobject)

## Constructors

### constructor

• **new MdGeText**(`p1?`, `p2?`, `p3?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `p1?` | `string` \| `object` |
| `p2?` | `number` |
| `p3?` | [`MdGeCSYSR`](MdGeCSYSR.md) |

#### Overrides

[MdGeObject](MdGeObject.md).[constructor](MdGeObject.md#constructor)

## Properties

### imp

• `Protected` **imp**: `any` = `0`

#### Inherited from

[MdGeObject](MdGeObject.md).[imp](MdGeObject.md#imp)

## Methods

### HasOwnAnchorPoint

▸ **HasOwnAnchorPoint**(): `boolean`

#### Returns

`boolean`

___

### HasPlane

▸ **HasPlane**(): `boolean`

#### Returns

`boolean`

___

### Height

▸ **Height**(): `number`

#### Returns

`number`

___

### HorizontalAlignment

▸ **HorizontalAlignment**(): [`MxHorizontalTextAlignment`](../enums/MdGe.MxHorizontalTextAlignment.md)

#### Returns

[`MxHorizontalTextAlignment`](../enums/MdGe.MxHorizontalTextAlignment.md)

___

### Orientation

▸ **Orientation**(): [`MdGeCSYSR`](MdGeCSYSR.md)

#### Returns

[`MdGeCSYSR`](MdGeCSYSR.md)

___

### Position

▸ **Position**(): [`MdGePoint`](MdGePoint.md)

#### Returns

[`MdGePoint`](MdGePoint.md)

___

### ResetOrientation

▸ **ResetOrientation**(): `void`

#### Returns

`void`

___

### SetHeight

▸ **SetHeight**(`theHeight`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theHeight` | `number` |

#### Returns

`void`

___

### SetHorizontalAlignment

▸ **SetHorizontalAlignment**(`theJustification`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theJustification` | [`MxHorizontalTextAlignment`](../enums/MdGe.MxHorizontalTextAlignment.md) |

#### Returns

`void`

___

### SetOrientation

▸ **SetOrientation**(`theOrientation`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theOrientation` | [`MdGeCSYSR`](MdGeCSYSR.md) |

#### Returns

`void`

___

### SetOwnAnchorPoint

▸ **SetOwnAnchorPoint**(`theHasOwnAnchor`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theHasOwnAnchor` | `boolean` |

#### Returns

`void`

___

### SetPosition

▸ **SetPosition**(`thePoint`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `thePoint` | [`MdGePoint`](MdGePoint.md) |

#### Returns

`void`

___

### SetText

▸ **SetText**(`theText`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theText` | `string` |

#### Returns

`void`

___

### SetVerticalAlignment

▸ **SetVerticalAlignment**(`theJustification`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theJustification` | [`MxVerticalTextAlignment`](../enums/MdGe.MxVerticalTextAlignment.md) |

#### Returns

`void`

___

### Shape

▸ **Shape**(): [`MdGeShape`](MdGeShape.md)

#### Returns

[`MdGeShape`](MdGeShape.md)

___

### VerticalAlignment

▸ **VerticalAlignment**(): [`MxVerticalTextAlignment`](../enums/MdGe.MxVerticalTextAlignment.md)

#### Returns

[`MxVerticalTextAlignment`](../enums/MdGe.MxVerticalTextAlignment.md)

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
