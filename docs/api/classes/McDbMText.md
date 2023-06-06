[mxcad API 文档](../README.md) / McDbMText

# Class: McDbMText

文本实体类

## Hierarchy

- [`McDbEntity`](McDbEntity.md)

  ↳ **`McDbMText`**

## Table of contents

### Constructors

- [constructor](McDbMText.md#constructor)

### Properties

- [imp](McDbMText.md#imp)

### Accessors

- [Dxf0](McDbMText.md#dxf0)
- [ObjectName](McDbMText.md#objectname)
- [attachment](McDbMText.md#attachment)
- [contents](McDbMText.md#contents)
- [location](McDbMText.md#location)
- [rotation](McDbMText.md#rotation)
- [textHeight](McDbMText.md#textheight)
- [width](McDbMText.md#width)

### Methods

- [Clone](McDbMText.md#clone)
- [Erase](McDbMText.md#erase)
- [explode](McDbMText.md#explode)
- [getImp](McDbMText.md#getimp)
- [getJson](McDbMText.md#getjson)
- [getObjectID](McDbMText.md#getobjectid)
- [initTempObject](McDbMText.md#inittempobject)
- [setJson](McDbMText.md#setjson)

## Constructors

### constructor

• **new McDbMText**(`imp?`)

构造函数

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `imp?` | `any` | 实现对象 |

#### Overrides

[McDbEntity](McDbEntity.md).[constructor](McDbEntity.md#constructor)

## Properties

### imp

• `Protected` **imp**: `any` = `0`

内部实现对象。

#### Inherited from

[McDbEntity](McDbEntity.md).[imp](McDbEntity.md#imp)

## Accessors

### Dxf0

• `get` **Dxf0**(): `string`

获取 DXF 代码 0 的值。

#### Returns

`string`

#### Inherited from

McDbEntity.Dxf0

___

### ObjectName

• `get` **ObjectName**(): `string`

获取对象名称。

#### Returns

`string`

#### Inherited from

McDbEntity.ObjectName

___

### attachment

• `get` **attachment**(): [`AttachmentPoint`](../enums/McDb.AttachmentPoint.md)

获取附着点

#### Returns

[`AttachmentPoint`](../enums/McDb.AttachmentPoint.md)

附着点

• `set` **attachment**(`val`): `void`

设置附着点

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val` | [`AttachmentPoint`](../enums/McDb.AttachmentPoint.md) | 附着点 |

#### Returns

`void`

___

### contents

• `get` **contents**(): `string`

获取文本内容

#### Returns

`string`

文本内容

• `set` **contents**(`val`): `void`

设置文本内容

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val` | `string` | 文本内容 |

#### Returns

`void`

___

### location

• `get` **location**(): [`McGePoint3d`](../interfaces/McGePoint3d.md)

获取位置

#### Returns

[`McGePoint3d`](../interfaces/McGePoint3d.md)

位置点

• `set` **location**(`pt`): `void`

设置位置

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pt` | [`McGePoint3d`](../interfaces/McGePoint3d.md) | 位置点 |

#### Returns

`void`

___

### rotation

• `get` **rotation**(): `number`

获取旋转角度

#### Returns

`number`

旋转角度

• `set` **rotation**(`val`): `void`

设置旋转角度

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val` | `number` | 旋转角度 |

#### Returns

`void`

___

### textHeight

• `get` **textHeight**(): `number`

获取文本高度

#### Returns

`number`

文本高度

• `set` **textHeight**(`val`): `void`

设置文本高度

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val` | `number` | 文本高度 |

#### Returns

`void`

___

### width

• `get` **width**(): `number`

获取宽度

#### Returns

`number`

宽度

• `set` **width**(`val`): `void`

设置宽度

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val` | `number` | 宽度 |

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

[McDbEntity](McDbEntity.md).[Clone](McDbEntity.md#clone)

___

### Erase

▸ **Erase**(): `boolean`

删除对象。

#### Returns

`boolean`

是否删除成功。

#### Inherited from

[McDbEntity](McDbEntity.md).[Erase](McDbEntity.md#erase)

___

### explode

▸ **explode**(): [`McDrawResbuf`](McDrawResbuf.md)

打碎对象，返回打后对象数据链表

#### Returns

[`McDrawResbuf`](McDrawResbuf.md)

#### Inherited from

[McDbEntity](McDbEntity.md).[explode](McDbEntity.md#explode)

___

### getImp

▸ **getImp**(): `any`

获取内部实现对象。

#### Returns

`any`

内部实现对象。

#### Inherited from

[McDbEntity](McDbEntity.md).[getImp](McDbEntity.md#getimp)

___

### getJson

▸ **getJson**(): `string`

获取 JSON 格式的字符串。

#### Returns

`string`

JSON 格式的字符串。

#### Inherited from

[McDbEntity](McDbEntity.md).[getJson](McDbEntity.md#getjson)

___

### getObjectID

▸ **getObjectID**(): `number`

获取对象 ID。

#### Returns

`number`

对象 ID。

#### Inherited from

[McDbEntity](McDbEntity.md).[getObjectID](McDbEntity.md#getobjectid)

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

[McDbEntity](McDbEntity.md).[initTempObject](McDbEntity.md#inittempobject)

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

[McDbEntity](McDbEntity.md).[setJson](McDbEntity.md#setjson)
