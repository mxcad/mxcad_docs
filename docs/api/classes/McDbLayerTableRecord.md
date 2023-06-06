[mxcad API 文档](../README.md) / McDbLayerTableRecord

# Class: McDbLayerTableRecord

表示一个图层表记录对象。

## Hierarchy

- [`McDbObject`](McDbObject.md)

  ↳ **`McDbLayerTableRecord`**

## Table of contents

### Constructors

- [constructor](McDbLayerTableRecord.md#constructor)

### Properties

- [imp](McDbLayerTableRecord.md#imp)

### Accessors

- [Dxf0](McDbLayerTableRecord.md#dxf0)
- [ObjectName](McDbLayerTableRecord.md#objectname)
- [color](McDbLayerTableRecord.md#color)
- [isFrozen](McDbLayerTableRecord.md#isfrozen)
- [isLocked](McDbLayerTableRecord.md#islocked)
- [isOff](McDbLayerTableRecord.md#isoff)
- [lineWeight](McDbLayerTableRecord.md#lineweight)
- [linetypeObjectId](McDbLayerTableRecord.md#linetypeobjectid)
- [name](McDbLayerTableRecord.md#name)

### Methods

- [Clone](McDbLayerTableRecord.md#clone)
- [Erase](McDbLayerTableRecord.md#erase)
- [getImp](McDbLayerTableRecord.md#getimp)
- [getJson](McDbLayerTableRecord.md#getjson)
- [getObjectID](McDbLayerTableRecord.md#getobjectid)
- [initTempObject](McDbLayerTableRecord.md#inittempobject)
- [setJson](McDbLayerTableRecord.md#setjson)

## Constructors

### constructor

• **new McDbLayerTableRecord**(`imp?`)

构造函数。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `imp?` | `any` | 内部实现对象。 |

#### Overrides

[McDbObject](McDbObject.md).[constructor](McDbObject.md#constructor)

## Properties

### imp

• `Protected` **imp**: `any` = `0`

内部实现对象。

#### Inherited from

[McDbObject](McDbObject.md).[imp](McDbObject.md#imp)

## Accessors

### Dxf0

• `get` **Dxf0**(): `string`

获取 DXF 代码 0 的值。

#### Returns

`string`

#### Inherited from

McDbObject.Dxf0

___

### ObjectName

• `get` **ObjectName**(): `string`

获取对象名称。

#### Returns

`string`

#### Inherited from

McDbObject.ObjectName

___

### color

• `get` **color**(): [`McCmColor`](../interfaces/McCmColor.md)

获取或设置图层颜色。

#### Returns

[`McCmColor`](../interfaces/McCmColor.md)

• `set` **color**(`val`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | [`McCmColor`](../interfaces/McCmColor.md) |

#### Returns

`void`

___

### isFrozen

• `get` **isFrozen**(): `boolean`

获取或设置图层是否被冻结。

#### Returns

`boolean`

• `set` **isFrozen**(`val`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `boolean` |

#### Returns

`void`

___

### isLocked

• `get` **isLocked**(): `boolean`

获取或设置图层是否被锁定。

#### Returns

`boolean`

• `set` **isLocked**(`val`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `boolean` |

#### Returns

`void`

___

### isOff

• `get` **isOff**(): `boolean`

获取或设置图层是否被关闭。

#### Returns

`boolean`

• `set` **isOff**(`val`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `boolean` |

#### Returns

`void`

___

### lineWeight

• `get` **lineWeight**(): [`LineWeight`](../enums/McDb.LineWeight.md)

获取或设置图层线宽。

#### Returns

[`LineWeight`](../enums/McDb.LineWeight.md)

• `set` **lineWeight**(`val`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | [`LineWeight`](../enums/McDb.LineWeight.md) |

#### Returns

`void`

___

### linetypeObjectId

• `get` **linetypeObjectId**(): [`McObjectId`](McObjectId.md)

获取或设置图层线型对象 ID。

#### Returns

[`McObjectId`](McObjectId.md)

• `set` **linetypeObjectId**(`val`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | [`McObjectId`](McObjectId.md) |

#### Returns

`void`

___

### name

• `get` **name**(): `string`

获取或设置图层名称。

#### Returns

`string`

• `set` **name**(`val`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `string` |

#### Returns

`void`

## Methods

### Clone

▸ **Clone**(): [`McDbObject`](McDbObject.md)

克隆对象。

#### Returns

[`McDbObject`](McDbObject.md)

克隆出的对象。

#### Inherited from

[McDbObject](McDbObject.md).[Clone](McDbObject.md#clone)

___

### Erase

▸ **Erase**(): `boolean`

删除对象。

#### Returns

`boolean`

是否删除成功。

#### Inherited from

[McDbObject](McDbObject.md).[Erase](McDbObject.md#erase)

___

### getImp

▸ **getImp**(): `any`

获取内部实现对象。

#### Returns

`any`

内部实现对象。

#### Inherited from

[McDbObject](McDbObject.md).[getImp](McDbObject.md#getimp)

___

### getJson

▸ **getJson**(): `string`

获取 JSON 格式的字符串。

#### Returns

`string`

JSON 格式的字符串。

#### Inherited from

[McDbObject](McDbObject.md).[getJson](McDbObject.md#getjson)

___

### getObjectID

▸ **getObjectID**(): `number`

获取对象 ID。

#### Returns

`number`

对象 ID。

#### Inherited from

[McDbObject](McDbObject.md).[getObjectID](McDbObject.md#getobjectid)

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

[McDbObject](McDbObject.md).[initTempObject](McDbObject.md#inittempobject)

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

[McDbObject](McDbObject.md).[setJson](McDbObject.md#setjson)
