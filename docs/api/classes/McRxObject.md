[mxcad API 文档](../README.md) / McRxObject

# Class: McRxObject

表示一个 Rx 对象的基类。

## Hierarchy

- **`McRxObject`**

  ↳ [`MxCADResbuf`](MxCADResbuf.md)

  ↳ [`MxCADSelectionSet`](MxCADSelectionSet.md)

  ↳ [`McDbObject`](McDbObject.md)

  ↳ [`McDbDatabase`](McDbDatabase.md)

## Table of contents

### Constructors

- [constructor](McRxObject.md#constructor)

### Properties

- [imp](McRxObject.md#imp)

### Accessors

- [dxf0](McRxObject.md#dxf0)
- [objectName](McRxObject.md#objectname)

### Methods

- [getImp](McRxObject.md#getimp)
- [getJson](McRxObject.md#getjson)
- [initTempObject](McRxObject.md#inittempobject)
- [isKindOf](McRxObject.md#iskindof)
- [isNull](McRxObject.md#isnull)
- [setJson](McRxObject.md#setjson)

## Constructors

### constructor

• **new McRxObject**(`imp?`)

构造函数。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `imp?` | `any` | 内部实现对象。 |

## Properties

### imp

• `Protected` **imp**: `any` = `0`

内部实现对象。

## Accessors

### dxf0

• `get` **dxf0**(): `string`

获取 DXF 代码 0 的值。

#### Returns

`string`

___

### objectName

• `get` **objectName**(): `string`

获取对象名称。

#### Returns

`string`

## Methods

### getImp

▸ **getImp**(): `any`

获取内部实现对象。

#### Returns

`any`

内部实现对象。

___

### getJson

▸ **getJson**(): `string`

获取 JSON 格式的字符串。

#### Returns

`string`

JSON 格式的字符串。

___

### initTempObject

▸ **initTempObject**(`imp`): `void`

初始化临时对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `imp` | `any` | 内部实现对象。 |

#### Returns

`void`

___

### isKindOf

▸ **isKindOf**(`sObjectName`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `sObjectName` | `string` |

#### Returns

`boolean`

___

### isNull

▸ **isNull**(): `any`

#### Returns

`any`

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
