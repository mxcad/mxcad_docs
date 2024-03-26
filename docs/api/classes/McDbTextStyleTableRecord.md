[mxcad API 文档](../README.md) / McDbTextStyleTableRecord

# Class: McDbTextStyleTableRecord

表示一个文字样式表记录对象。

## Hierarchy

- [`McDbObject`](McDbObject.md)

  ↳ **`McDbTextStyleTableRecord`**

## Table of contents

### Constructors

- [constructor](McDbTextStyleTableRecord.md#constructor)

### Properties

- [imp](McDbTextStyleTableRecord.md#imp)

### Accessors

- [bigFontFileName](McDbTextStyleTableRecord.md#bigfontfilename)
- [dxf0](McDbTextStyleTableRecord.md#dxf0)
- [fileName](McDbTextStyleTableRecord.md#filename)
- [flagBits](McDbTextStyleTableRecord.md#flagbits)
- [isShapeFile](McDbTextStyleTableRecord.md#isshapefile)
- [isVertical](McDbTextStyleTableRecord.md#isvertical)
- [name](McDbTextStyleTableRecord.md#name)
- [objectName](McDbTextStyleTableRecord.md#objectname)
- [obliquingAngle](McDbTextStyleTableRecord.md#obliquingangle)
- [textSize](McDbTextStyleTableRecord.md#textsize)
- [xScale](McDbTextStyleTableRecord.md#xscale)

### Methods

- [clone](McDbTextStyleTableRecord.md#clone)
- [erase](McDbTextStyleTableRecord.md#erase)
- [font](McDbTextStyleTableRecord.md#font)
- [getDatabase](McDbTextStyleTableRecord.md#getdatabase)
- [getHandle](McDbTextStyleTableRecord.md#gethandle)
- [getImp](McDbTextStyleTableRecord.md#getimp)
- [getJson](McDbTextStyleTableRecord.md#getjson)
- [getObjectID](McDbTextStyleTableRecord.md#getobjectid)
- [getOwnerID](McDbTextStyleTableRecord.md#getownerid)
- [initTempObject](McDbTextStyleTableRecord.md#inittempobject)
- [isErased](McDbTextStyleTableRecord.md#iserased)
- [isKindOf](McDbTextStyleTableRecord.md#iskindof)
- [isNull](McDbTextStyleTableRecord.md#isnull)
- [setFont](McDbTextStyleTableRecord.md#setfont)
- [setJson](McDbTextStyleTableRecord.md#setjson)
- [unErase](McDbTextStyleTableRecord.md#unerase)

## Constructors

### constructor

• **new McDbTextStyleTableRecord**(`imp?`)

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

### bigFontFileName

• `get` **bigFontFileName**(): `string`

#### Returns

`string`

• `set` **bigFontFileName**(`val`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `string` |

#### Returns

`void`

___

### dxf0

• `get` **dxf0**(): `string`

获取 DXF 代码 0 的值。

#### Returns

`string`

#### Inherited from

McDbObject.dxf0

___

### fileName

• `get` **fileName**(): `string`

#### Returns

`string`

• `set` **fileName**(`val`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `string` |

#### Returns

`void`

___

### flagBits

• `get` **flagBits**(): `number`

#### Returns

`number`

• `set` **flagBits**(`val`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `number` |

#### Returns

`void`

___

### isShapeFile

• `get` **isShapeFile**(): `boolean`

#### Returns

`boolean`

• `set` **isShapeFile**(`val`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `boolean` |

#### Returns

`void`

___

### isVertical

• `get` **isVertical**(): `boolean`

#### Returns

`boolean`

• `set` **isVertical**(`val`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `boolean` |

#### Returns

`void`

___

### name

• `get` **name**(): `string`

获取或设置名称。

#### Returns

`string`

• `set` **name**(`val`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `string` |

#### Returns

`void`

___

### objectName

• `get` **objectName**(): `string`

获取对象名称。

#### Returns

`string`

#### Inherited from

McDbObject.objectName

___

### obliquingAngle

• `get` **obliquingAngle**(): `number`

#### Returns

`number`

• `set` **obliquingAngle**(`val`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `number` |

#### Returns

`void`

___

### textSize

• `get` **textSize**(): `number`

#### Returns

`number`

• `set` **textSize**(`val`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `number` |

#### Returns

`void`

___

### xScale

• `get` **xScale**(): `number`

#### Returns

`number`

• `set` **xScale**(`val`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `number` |

#### Returns

`void`

## Methods

### clone

▸ **clone**(): ``null`` \| [`McDbObject`](McDbObject.md)

克隆对象。

#### Returns

``null`` \| [`McDbObject`](McDbObject.md)

克隆出的对象。

#### Inherited from

[McDbObject](McDbObject.md).[clone](McDbObject.md#clone)

___

### erase

▸ **erase**(): `boolean`

删除对象。

#### Returns

`boolean`

是否删除成功。

#### Inherited from

[McDbObject](McDbObject.md).[erase](McDbObject.md#erase)

___

### font

▸ **font**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `bold` | `boolean` |
| `charset` | `number` |
| `italic` | `boolean` |
| `pitchAndFamily` | `number` |
| `sTypeface` | `string` |

___

### getDatabase

▸ **getDatabase**(): [`McDbDatabase`](McDbDatabase.md)

得到对象所在的数据库

#### Returns

[`McDbDatabase`](McDbDatabase.md)

#### Inherited from

[McDbObject](McDbObject.md).[getDatabase](McDbObject.md#getdatabase)

___

### getHandle

▸ **getHandle**(): `string`

得到对象句柄

#### Returns

`string`

#### Inherited from

[McDbObject](McDbObject.md).[getHandle](McDbObject.md#gethandle)

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

▸ **getObjectID**(): [`McObjectId`](McObjectId.md)

获取对象 ID。

#### Returns

[`McObjectId`](McObjectId.md)

对象 ID。

#### Inherited from

[McDbObject](McDbObject.md).[getObjectID](McDbObject.md#getobjectid)

___

### getOwnerID

▸ **getOwnerID**(): `number`

得到对象拥用者的id

#### Returns

`number`

#### Inherited from

[McDbObject](McDbObject.md).[getOwnerID](McDbObject.md#getownerid)

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

[McDbObject](McDbObject.md).[initTempObject](McDbObject.md#inittempobject)

___

### isErased

▸ **isErased**(): `boolean`

对象是否已经删除

#### Returns

`boolean`

#### Inherited from

[McDbObject](McDbObject.md).[isErased](McDbObject.md#iserased)

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

[McDbObject](McDbObject.md).[isKindOf](McDbObject.md#iskindof)

___

### isNull

▸ **isNull**(): `any`

#### Returns

`any`

#### Inherited from

[McDbObject](McDbObject.md).[isNull](McDbObject.md#isnull)

___

### setFont

▸ **setFont**(`sTypeface`, `bold`, `italic`, `charset`, `pitchAndFamily`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `sTypeface` | `string` |
| `bold` | `boolean` |
| `italic` | `boolean` |
| `charset` | `number` |
| `pitchAndFamily` | `number` |

#### Returns

`boolean`

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

___

### unErase

▸ **unErase**(): `boolean`

反删除对象。

#### Returns

`boolean`

#### Inherited from

[McDbObject](McDbObject.md).[unErase](McDbObject.md#unerase)
