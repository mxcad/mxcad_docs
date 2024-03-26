[mxcad API 文档](../README.md) / MxCADResbuf

# Class: MxCADResbuf

MxCADResbuf 类用于操作 AutoCAD 中的 resbuf 数据。

## Hierarchy

- [`McRxObject`](McRxObject.md)

  ↳ **`MxCADResbuf`**

## Table of contents

### Constructors

- [constructor](MxCADResbuf.md#constructor)

### Properties

- [imp](MxCADResbuf.md#imp)

### Accessors

- [dxf0](MxCADResbuf.md#dxf0)
- [objectName](MxCADResbuf.md#objectname)

### Methods

- [AddDouble](MxCADResbuf.md#adddouble)
- [AddLong](MxCADResbuf.md#addlong)
- [AddMcDbEntityTypes](MxCADResbuf.md#addmcdbentitytypes)
- [AddObject](MxCADResbuf.md#addobject)
- [AddObjectId](MxCADResbuf.md#addobjectid)
- [AddPoint](MxCADResbuf.md#addpoint)
- [AddString](MxCADResbuf.md#addstring)
- [AtDouble](MxCADResbuf.md#atdouble)
- [AtLong](MxCADResbuf.md#atlong)
- [AtObject](MxCADResbuf.md#atobject)
- [AtObjectId](MxCADResbuf.md#atobjectid)
- [AtPoint](MxCADResbuf.md#atpoint)
- [AtString](MxCADResbuf.md#atstring)
- [Clear](MxCADResbuf.md#clear)
- [GetCount](MxCADResbuf.md#getcount)
- [ItemDataType](MxCADResbuf.md#itemdatatype)
- [PrintData](MxCADResbuf.md#printdata)
- [Remove](MxCADResbuf.md#remove)
- [RemoveAll](MxCADResbuf.md#removeall)
- [forEach](MxCADResbuf.md#foreach)
- [getImp](MxCADResbuf.md#getimp)
- [getJson](MxCADResbuf.md#getjson)
- [initTempObject](MxCADResbuf.md#inittempobject)
- [isKindOf](MxCADResbuf.md#iskindof)
- [isNull](MxCADResbuf.md#isnull)
- [setJson](MxCADResbuf.md#setjson)

## Constructors

### constructor

• **new MxCADResbuf**(`imp?`)

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

### dxf0

• `get` **dxf0**(): `string`

获取 DXF 代码 0 的值。

#### Returns

`string`

#### Inherited from

McRxObject.dxf0

___

### objectName

• `get` **objectName**(): `string`

获取对象名称。

#### Returns

`string`

#### Inherited from

McRxObject.objectName

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

### AddLong

▸ **AddLong**(`val`, `lDataType?`): `number`

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

### AddMcDbEntityTypes

▸ **AddMcDbEntityTypes**(`str`): `any`

添加对象类型，用于选择集过滤使用

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

`any`

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
| `pt` | [`McGePoint3d`](McGePoint3d.md) | `undefined` | 点坐标。 |
| `lDataType` | `number` | `-10` | 数据类型。 |

#### Returns

`number`

添加的数据项索引。

___

### AddString

▸ **AddString**(`str`, `lDataType?`, `decodeFromGb2312?`): `number`

添加字符串到 resbuf 中。

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `str` | `string` | `undefined` | 字符串。 |
| `lDataType` | `number` | `-10` | 数据类型。 |
| `decodeFromGb2312` | `boolean` | `true` | - |

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
| `ret` | `boolean` |
| `val` | `number` |

___

### AtLong

▸ **AtLong**(`lItem`): `Object`

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
| `ret` | `boolean` |
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
| `ret` | `boolean` |
| `val` | `undefined` \| [`McDbObject`](McDbObject.md) |

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
| `ret` | `boolean` |
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
| `ret` | `boolean` |
| `val` | [`McGePoint3d`](McGePoint3d.md) |

___

### AtString

▸ **AtString**(`lItem`, `decodeFromGb2312?`): `Object`

获取 resbuf 数据项中的字符串。

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `lItem` | `number` | `undefined` | 数据项索引。 |
| `decodeFromGb2312` | `boolean` | `true` | - |

#### Returns

`Object`

包含字符串和返回值的对象。

| Name | Type |
| :------ | :------ |
| `ret` | `boolean` |
| `val` | `string` |

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

### PrintData

▸ **PrintData**(): `void`

调试输入信息

#### Returns

`void`

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

### forEach

▸ **forEach**(`call`): `void`

遍历数据。

#### Parameters

| Name | Type |
| :------ | :------ |
| `call` | (`val`: `any`, `type`: `number`, `dxf`: `number`) => `void` |

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

▸ **initTempObject**(`imp`): `void`

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

### isKindOf

▸ **isKindOf**(`sObjectName`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `sObjectName` | `string` |

#### Returns

`boolean`

#### Inherited from

[McRxObject](McRxObject.md).[isKindOf](McRxObject.md#iskindof)

___

### isNull

▸ **isNull**(): `any`

#### Returns

`any`

#### Inherited from

[McRxObject](McRxObject.md).[isNull](McRxObject.md#isnull)

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
