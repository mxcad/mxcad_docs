[mxcad API 文档](../README.md) / MdGeTopo

# Class: MdGeTopo

拓扑转换类

## Table of contents

### Constructors

- [constructor](MdGeTopo.md#constructor)

### Properties

- [imp](MdGeTopo.md#imp)

### Methods

- [CompSolid](MdGeTopo.md#compsolid)
- [Compound](MdGeTopo.md#compound)
- [DestroyObject](MdGeTopo.md#destroyobject)
- [Edge](MdGeTopo.md#edge)
- [Face](MdGeTopo.md#face)
- [SetRegisterFuncPtr](MdGeTopo.md#setregisterfuncptr)
- [Shell](MdGeTopo.md#shell)
- [Solid](MdGeTopo.md#solid)
- [Vertex](MdGeTopo.md#vertex)
- [Wire](MdGeTopo.md#wire)

## Constructors

### constructor

• **new MdGeTopo**()

## Properties

### imp

• `Protected` **imp**: `any` = `0`

## Methods

### CompSolid

▸ **CompSolid**(`S`): [`MdGeCompSolid`](MdGeCompSolid.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `S` | [`MdGeShape`](MdGeShape.md) |

#### Returns

[`MdGeCompSolid`](MdGeCompSolid.md)

___

### Compound

▸ **Compound**(`S`): [`MdGeCompound`](MdGeCompound.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `S` | [`MdGeShape`](MdGeShape.md) |

#### Returns

[`MdGeCompound`](MdGeCompound.md)

___

### DestroyObject

▸ **DestroyObject**(`pObj`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pObj` | `object` |

#### Returns

`void`

___

### Edge

▸ **Edge**(`S`): [`MdGeEdge`](MdGeEdge.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `S` | [`MdGeShape`](MdGeShape.md) |

#### Returns

[`MdGeEdge`](MdGeEdge.md)

___

### Face

▸ **Face**(`S`): [`MdGeFace`](MdGeFace.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `S` | [`MdGeShape`](MdGeShape.md) |

#### Returns

[`MdGeFace`](MdGeFace.md)

___

### SetRegisterFuncPtr

▸ **SetRegisterFuncPtr**(`jsFunPtr`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsFunPtr` | `number` |

#### Returns

`void`

___

### Shell

▸ **Shell**(`S`): [`MdGeShell`](MdGeShell.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `S` | [`MdGeShape`](MdGeShape.md) |

#### Returns

[`MdGeShell`](MdGeShell.md)

___

### Solid

▸ **Solid**(`S`): [`MdGeSolid`](MdGeSolid.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `S` | [`MdGeShape`](MdGeShape.md) |

#### Returns

[`MdGeSolid`](MdGeSolid.md)

___

### Vertex

▸ **Vertex**(`S`): [`MdGeVertex`](MdGeVertex.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `S` | [`MdGeShape`](MdGeShape.md) |

#### Returns

[`MdGeVertex`](MdGeVertex.md)

___

### Wire

▸ **Wire**(`S`): [`MdGeWire`](MdGeWire.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `S` | [`MdGeShape`](MdGeShape.md) |

#### Returns

[`MdGeWire`](MdGeWire.md)
