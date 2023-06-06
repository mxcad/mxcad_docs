[mxcad API 文档](../README.md) / McDrawSelSet

# Class: McDrawSelSet

表示一个 Rx 对象的基类。

## Hierarchy

- [`McRxObject`](McRxObject.md)

  ↳ **`McDrawSelSet`**

## Table of contents

### Constructors

- [constructor](McDrawSelSet.md#constructor)

### Properties

- [imp](McDrawSelSet.md#imp)

### Accessors

- [Dxf0](McDrawSelSet.md#dxf0)
- [ObjectName](McDrawSelSet.md#objectname)

### Methods

- [allSelect](McDrawSelSet.md#allselect)
- [count](McDrawSelSet.md#count)
- [crossingSelect](McDrawSelSet.md#crossingselect)
- [getImp](McDrawSelSet.md#getimp)
- [getJson](McDrawSelSet.md#getjson)
- [initTempObject](McDrawSelSet.md#inittempobject)
- [item](McDrawSelSet.md#item)
- [pointSelect](McDrawSelSet.md#pointselect)
- [setJson](McDrawSelSet.md#setjson)

## Constructors

### constructor

• **new McDrawSelSet**()

#### Overrides

[McRxObject](McRxObject.md).[constructor](McRxObject.md#constructor)

## Properties

### imp

• `Protected` **imp**: `any` = `0`

内部实现对象。

#### Inherited from

[McRxObject](McRxObject.md).[imp](McRxObject.md#imp)

## Accessors

### Dxf0

• `get` **Dxf0**(): `string`

获取 DXF 代码 0 的值。

#### Returns

`string`

#### Inherited from

McRxObject.Dxf0

___

### ObjectName

• `get` **ObjectName**(): `string`

获取对象名称。

#### Returns

`string`

#### Inherited from

McRxObject.ObjectName

## Methods

### allSelect

▸ **allSelect**(`filter?`): `number`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `filter` | ``null`` \| [`McDrawResbuf`](McDrawResbuf.md) | `null` |

#### Returns

`number`

___

### count

▸ **count**(): `number`

#### Returns

`number`

___

### crossingSelect

▸ **crossingSelect**(`dX1`, `dY1`, `dX2`, `dY2`, `filter?`): `number`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `dX1` | `number` | `undefined` |
| `dY1` | `number` | `undefined` |
| `dX2` | `number` | `undefined` |
| `dY2` | `number` | `undefined` |
| `filter` | ``null`` \| [`McDrawResbuf`](McDrawResbuf.md) | `null` |

#### Returns

`number`

___

### getImp

▸ **getImp**(): `any`

获取内部实现对象。

#### Returns

`any`

内部实现对象。

#### Inherited from

[McRxObject](McRxObject.md).[getImp](McRxObject.md#getimp)

___

### getJson

▸ **getJson**(): `string`

获取 JSON 格式的字符串。

#### Returns

`string`

JSON 格式的字符串。

#### Inherited from

[McRxObject](McRxObject.md).[getJson](McRxObject.md#getjson)

___

### initTempObject

▸ `Protected` **initTempObject**(`imp`): `void`

初始化临时对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `imp` | `any` | 内部实现对象。 |

#### Returns

`void`

#### Inherited from

[McRxObject](McRxObject.md).[initTempObject](McRxObject.md#inittempobject)

___

### item

▸ **item**(`lItem`): [`McObjectId`](McObjectId.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `lItem` | `number` |

#### Returns

[`McObjectId`](McObjectId.md)

___

### pointSelect

▸ **pointSelect**(`dX`, `dY`, `filter?`, `dTol?`): `number`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `dX` | `number` | `undefined` |
| `dY` | `number` | `undefined` |
| `filter` | ``null`` \| [`McDrawResbuf`](McDrawResbuf.md) | `null` |
| `dTol` | `number` | `-1` |

#### Returns

`number`

___

### setJson

▸ **setJson**(`str`): `boolean`

设置 JSON 格式的字符串。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | JSON 格式的字符串。 |

#### Returns

`boolean`

是否设置成功。

#### Inherited from

[McRxObject](McRxObject.md).[setJson](McRxObject.md#setjson)
