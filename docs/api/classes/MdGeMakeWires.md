[mxcad API 文档](../README.md) / MdGeMakeWires

# Class: MdGeMakeWires

表示由Edges链接形成Wires

## Hierarchy

- [`MdGeObject`](MdGeObject.md)

  ↳ **`MdGeMakeWires`**

## Table of contents

### Constructors

- [constructor](MdGeMakeWires.md#constructor)

### Properties

- [imp](MdGeMakeWires.md#imp)

### Methods

- [ConnectEdgesToWires](MdGeMakeWires.md#connectedgestowires)
- [ConnectWiresToWires](MdGeMakeWires.md#connectwirestowires)
- [getImp](MdGeMakeWires.md#getimp)
- [initTempObject](MdGeMakeWires.md#inittempobject)

## Constructors

### constructor

• **new MdGeMakeWires**(`p?`)

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

### ConnectEdgesToWires

▸ **ConnectEdgesToWires**(`edges`, `toler`, `shared`): [`MdGeSequenceOfShape`](MdGeSequenceOfShape.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `edges` | [`MdGeSequenceOfShape`](MdGeSequenceOfShape.md) |
| `toler` | `number` |
| `shared` | `boolean` |

#### Returns

[`MdGeSequenceOfShape`](MdGeSequenceOfShape.md)

___

### ConnectWiresToWires

▸ **ConnectWiresToWires**(`iwires`, `toler`, `shared`): [`MdGeSequenceOfShape`](MdGeSequenceOfShape.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `iwires` | [`MdGeSequenceOfShape`](MdGeSequenceOfShape.md) |
| `toler` | `number` |
| `shared` | `boolean` |

#### Returns

[`MdGeSequenceOfShape`](MdGeSequenceOfShape.md)

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
