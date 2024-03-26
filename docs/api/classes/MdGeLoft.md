[mxcad API 文档](../README.md) / MdGeLoft

# Class: MdGeLoft

表示放样

## Hierarchy

- [`MdGeObject`](MdGeObject.md)

  ↳ **`MdGeLoft`**

## Table of contents

### Constructors

- [constructor](MdGeLoft.md#constructor)

### Properties

- [imp](MdGeLoft.md#imp)

### Methods

- [AddVertex](MdGeLoft.md#addvertex)
- [AddWire](MdGeLoft.md#addwire)
- [CheckCompatibility](MdGeLoft.md#checkcompatibility)
- [Continuity](MdGeLoft.md#continuity)
- [FirstShape](MdGeLoft.md#firstshape)
- [GeneratedFace](MdGeLoft.md#generatedface)
- [Init](MdGeLoft.md#init)
- [IsMutableInput](MdGeLoft.md#ismutableinput)
- [LastShape](MdGeLoft.md#lastshape)
- [MaxDegree](MdGeLoft.md#maxdegree)
- [SetContinuity](MdGeLoft.md#setcontinuity)
- [SetMaxDegree](MdGeLoft.md#setmaxdegree)
- [SetMutableInput](MdGeLoft.md#setmutableinput)
- [SetSmoothing](MdGeLoft.md#setsmoothing)
- [Shape](MdGeLoft.md#shape)
- [UseSmoothing](MdGeLoft.md#usesmoothing)
- [getImp](MdGeLoft.md#getimp)
- [initTempObject](MdGeLoft.md#inittempobject)

## Constructors

### constructor

• **new MdGeLoft**(`p1?`, `p2?`, `p3?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `p1?` | `boolean` \| `object` |
| `p2?` | `boolean` |
| `p3?` | `number` |

#### Overrides

[MdGeObject](MdGeObject.md).[constructor](MdGeObject.md#constructor)

## Properties

### imp

• `Protected` **imp**: `any` = `0`

#### Inherited from

[MdGeObject](MdGeObject.md).[imp](MdGeObject.md#imp)

## Methods

### AddVertex

▸ **AddVertex**(`aVertex`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `aVertex` | [`MdGeVertex`](MdGeVertex.md) |

#### Returns

`void`

___

### AddWire

▸ **AddWire**(`wire`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `wire` | [`MdGeWire`](MdGeWire.md) |

#### Returns

`void`

___

### CheckCompatibility

▸ **CheckCompatibility**(`check?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `check?` | `boolean` |

#### Returns

`void`

___

### Continuity

▸ **Continuity**(): [`MxGAShapeEnum`](../enums/MdGe.MxGAShapeEnum.md)

#### Returns

[`MxGAShapeEnum`](../enums/MdGe.MxGAShapeEnum.md)

___

### FirstShape

▸ **FirstShape**(): [`MdGeShape`](MdGeShape.md)

#### Returns

[`MdGeShape`](MdGeShape.md)

___

### GeneratedFace

▸ **GeneratedFace**(`Edge`): [`MdGeShape`](MdGeShape.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `Edge` | [`MdGeShape`](MdGeShape.md) |

#### Returns

[`MdGeShape`](MdGeShape.md)

___

### Init

▸ **Init**(`isSolid?`, `ruled?`, `pres3d?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `isSolid?` | `boolean` |
| `ruled?` | `boolean` |
| `pres3d?` | `number` |

#### Returns

`void`

___

### IsMutableInput

▸ **IsMutableInput**(): `boolean`

#### Returns

`boolean`

___

### LastShape

▸ **LastShape**(): [`MdGeShape`](MdGeShape.md)

#### Returns

[`MdGeShape`](MdGeShape.md)

___

### MaxDegree

▸ **MaxDegree**(): `number`

#### Returns

`number`

___

### SetContinuity

▸ **SetContinuity**(`C`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `C` | [`MxGAShapeEnum`](../enums/MdGe.MxGAShapeEnum.md) |

#### Returns

`void`

___

### SetMaxDegree

▸ **SetMaxDegree**(`MaxDeg`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `MaxDeg` | `number` |

#### Returns

`void`

___

### SetMutableInput

▸ **SetMutableInput**(`theIsMutableInput`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theIsMutableInput` | `boolean` |

#### Returns

`void`

___

### SetSmoothing

▸ **SetSmoothing**(`UseSmoothing`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `UseSmoothing` | `boolean` |

#### Returns

`void`

___

### Shape

▸ **Shape**(): [`MdGeShape`](MdGeShape.md)

#### Returns

[`MdGeShape`](MdGeShape.md)

___

### UseSmoothing

▸ **UseSmoothing**(): `boolean`

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
