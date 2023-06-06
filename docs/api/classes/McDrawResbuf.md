[mxcad API 文档](../README.md) / McDrawResbuf

# Class: McDrawResbuf

McDrawResbuf 类用于操作 AutoCAD 中的 resbuf 数据。

## Hierarchy

- [`McRxObject`](McRxObject.md)

  ↳ **`McDrawResbuf`**

## Table of contents

### Constructors

- [constructor](McDrawResbuf.md#constructor)

### Properties

- [imp](McDrawResbuf.md#imp)

### Accessors

- [Dxf0](McDrawResbuf.md#dxf0)
- [ObjectName](McDrawResbuf.md#objectname)

### Methods

- [AddDouble](McDrawResbuf.md#adddouble)
- [AddObject](McDrawResbuf.md#addobject)
- [AddObjectId](McDrawResbuf.md#addobjectid)
- [AddPoint](McDrawResbuf.md#addpoint)
- [AddString](McDrawResbuf.md#addstring)
- [Addlong](McDrawResbuf.md#addlong)
- [AtDouble](McDrawResbuf.md#atdouble)
- [AtObject](McDrawResbuf.md#atobject)
- [AtObjectId](McDrawResbuf.md#atobjectid)
- [AtPoint](McDrawResbuf.md#atpoint)
- [AtString](McDrawResbuf.md#atstring)
- [Atlong](McDrawResbuf.md#atlong)
- [Clear](McDrawResbuf.md#clear)
- [GetCount](McDrawResbuf.md#getcount)
- [ItemDataType](McDrawResbuf.md#itemdatatype)
- [Remove](McDrawResbuf.md#remove)
- [RemoveAll](McDrawResbuf.md#removeall)
- [getImp](McDrawResbuf.md#getimp)
- [getJson](McDrawResbuf.md#getjson)
- [initTempObject](McDrawResbuf.md#inittempobject)
- [setJson](McDrawResbuf.md#setjson)

## Constructors

### constructor

• **new McDrawResbuf**(`imp?`)

构造函数。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `imp?` | `any` | 实现对象。 |

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

### AddDouble

▸ **AddDouble**(`val`, `lDataType?`): `number`

添加 double 类型值到 resbuf 中。

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `val` | `number` | `undefined` | double 类型值。 |
| `lDataType` | `number` | `-10` | 数据类型。 |

#### Returns

`number`

添加的数据项索引。

___

### AddObject

▸ **AddObject**(`pObj`): `void`

添加 McRxObject 对象到 resbuf 中

#### Parameters

| Name | Type |
| :------ | :------ |
| `pObj` | [`McRxObject`](McRxObject.md) |

#### Returns

`void`

___

### AddObjectId

▸ **AddObjectId**(`val`, `lDataType?`): `number`

添加 ObjectId 到 resbuf 中。

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `val` | `number` | `undefined` | ObjectId。 |
| `lDataType` | `number` | `-10` | 数据类型。 |

#### Returns

`number`

添加的数据项索引。

___

### AddPoint

▸ **AddPoint**(`pt`, `lDataType?`): `number`

添加点坐标到 resbuf 中。

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `pt` | [`McGePoint3d`](../interfaces/McGePoint3d.md) | `undefined` | 点坐标。 |
| `lDataType` | `number` | `-10` | 数据类型。 |

#### Returns

`number`

添加的数据项索引。

___

### AddString

▸ **AddString**(`str`, `lDataType?`): `number`

添加字符串到 resbuf 中。

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `str` | `string` | `undefined` | 字符串。 |
| `lDataType` | `number` | `-10` | 数据类型。 |

#### Returns

`number`

添加的数据项索引。

___

### Addlong

▸ **Addlong**(`val`, `lDataType?`): `number`

添加 long 类型值到 resbuf 中。

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `val` | `number` | `undefined` | long 类型值。 |
| `lDataType` | `number` | `-10` | 数据类型。 |

#### Returns

`number`

添加的数据项索引。

___

### AtDouble

▸ **AtDouble**(`lItem`): `Object`

获取 resbuf 数据项中的 double 类型值。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `lItem` | `number` | 数据项索引。 |

#### Returns

`Object`

包含 double 类型值和返回值的对象。

| Name | Type |
| :------ | :------ |
| `ret` | `number` |
| `val` | `number` |

___

### AtObject

▸ **AtObject**(`lItem`): `Object`

获取 resbuf 数据项中的 McRxObject 对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `lItem` | `number` | 数据项索引。 |

#### Returns

`Object`

包含 long 类型值和返回值的对象。

| Name | Type |
| :------ | :------ |
| `ret` | `number` |
| `val` | `undefined` \| [`McRxObject`](McRxObject.md) |

___

### AtObjectId

▸ **AtObjectId**(`lItem`): `Object`

获取 resbuf 数据项中的 ObjectId。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `lItem` | `number` | 数据项索引。 |

#### Returns

`Object`

包含 ObjectId 和返回值的对象。

| Name | Type |
| :------ | :------ |
| `ret` | `number` |
| `val` | [`McObjectId`](McObjectId.md) |

___

### AtPoint

▸ **AtPoint**(`lItem`): `Object`

获取 resbuf 数据项中的点坐标。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `lItem` | `number` | 数据项索引。 |

#### Returns

`Object`

包含点坐标和返回值的对象。

| Name | Type |
| :------ | :------ |
| `ret` | `number` |
| `val` | [`McGePoint3d`](../interfaces/McGePoint3d.md) |

___

### AtString

▸ **AtString**(`lItem`): `Object`

获取 resbuf 数据项中的字符串。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `lItem` | `number` | 数据项索引。 |

#### Returns

`Object`

包含字符串和返回值的对象。

| Name | Type |
| :------ | :------ |
| `ret` | `number` |
| `val` | `string` |

___

### Atlong

▸ **Atlong**(`lItem`): `Object`

获取 resbuf 数据项中的 long 类型值。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `lItem` | `number` | 数据项索引。 |

#### Returns

`Object`

包含 long 类型值和返回值的对象。

| Name | Type |
| :------ | :------ |
| `ret` | `number` |
| `val` | `number` |

___

### Clear

▸ **Clear**(): `void`

清空 resbuf 数据。

#### Returns

`void`

___

### GetCount

▸ **GetCount**(): `number`

获取 resbuf 数据项个数。

#### Returns

`number`

resbuf 数据项个数。

___

### ItemDataType

▸ **ItemDataType**(): `number`

获取 resbuf 数据项中的数据类型。

#### Returns

`number`

数据类型。

___

### Remove

▸ **Remove**(`lItem`): `void`

移除指定索引的 resbuf 数据项。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `lItem` | `number` | 数据项索引。 |

#### Returns

`void`

___

### RemoveAll

▸ **RemoveAll**(): `void`

移除所有 resbuf 数据项。

#### Returns

`void`

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
