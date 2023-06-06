[mxcad API 文档](../README.md) / McDbText

# Class: McDbText

表示一个 CAD 文字实体。

## Hierarchy

- [`McDbEntity`](McDbEntity.md)

  ↳ **`McDbText`**

## Table of contents

### Constructors

- [constructor](McDbText.md#constructor)

### Properties

- [imp](McDbText.md#imp)

### Accessors

- [Dxf0](McDbText.md#dxf0)
- [ObjectName](McDbText.md#objectname)
- [alignmentPoint](McDbText.md#alignmentpoint)
- [height](McDbText.md#height)
- [horizontalMode](McDbText.md#horizontalmode)
- [oblique](McDbText.md#oblique)
- [position](McDbText.md#position)
- [rotation](McDbText.md#rotation)
- [textString](McDbText.md#textstring)
- [verticalMode](McDbText.md#verticalmode)
- [widthFactor](McDbText.md#widthfactor)

### Methods

- [Clone](McDbText.md#clone)
- [Erase](McDbText.md#erase)
- [explode](McDbText.md#explode)
- [getImp](McDbText.md#getimp)
- [getJson](McDbText.md#getjson)
- [getObjectID](McDbText.md#getobjectid)
- [initTempObject](McDbText.md#inittempobject)
- [setJson](McDbText.md#setjson)

## Constructors

### constructor

• **new McDbText**(`imp?`)

构造函数。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `imp?` | `any` | 实现对象。 |

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

### alignmentPoint

• `get` **alignmentPoint**(): [`McGePoint3d`](../interfaces/McGePoint3d.md)

获取或设置文字的对齐点。

#### Returns

[`McGePoint3d`](../interfaces/McGePoint3d.md)

• `set` **alignmentPoint**(`pt`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pt` | [`McGePoint3d`](../interfaces/McGePoint3d.md) |

#### Returns

`void`

___

### height

• `get` **height**(): `number`

获取或设置文字的高度。

#### Returns

`number`

• `set` **height**(`val`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `number` |

#### Returns

`void`

___

### horizontalMode

• `get` **horizontalMode**(): [`TextHorzMode`](../enums/McDb.TextHorzMode.md)

获取或设置文字的水平对齐方式。

#### Returns

[`TextHorzMode`](../enums/McDb.TextHorzMode.md)

• `set` **horizontalMode**(`val`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | [`TextHorzMode`](../enums/McDb.TextHorzMode.md) |

#### Returns

`void`

___

### oblique

• `get` **oblique**(): `number`

获取或设置文字的倾斜角度。

#### Returns

`number`

• `set` **oblique**(`val`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `number` |

#### Returns

`void`

___

### position

• `get` **position**(): [`McGePoint3d`](../interfaces/McGePoint3d.md)

获取或设置文字的位置。

#### Returns

[`McGePoint3d`](../interfaces/McGePoint3d.md)

• `set` **position**(`pt`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pt` | [`McGePoint3d`](../interfaces/McGePoint3d.md) |

#### Returns

`void`

___

### rotation

• `get` **rotation**(): `number`

获取或设置文字的旋转角度。

#### Returns

`number`

• `set` **rotation**(`pt`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pt` | `number` |

#### Returns

`void`

___

### textString

• `get` **textString**(): `string`

获取或设置文字的字符串。

#### Returns

`string`

• `set` **textString**(`val`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `string` |

#### Returns

`void`

___

### verticalMode

• `get` **verticalMode**(): [`TextVertMode`](../enums/McDb.TextVertMode.md)

获取或设置文字的垂直对齐方式。

#### Returns

[`TextVertMode`](../enums/McDb.TextVertMode.md)

• `set` **verticalMode**(`val`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | [`TextVertMode`](../enums/McDb.TextVertMode.md) |

#### Returns

`void`

___

### widthFactor

• `get` **widthFactor**(): `number`

获取或设置文字的宽度因子。

#### Returns

`number`

• `set` **widthFactor**(`val`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `number` |

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
