[mxcad API 文档](../README.md) / McDbDimension

# Class: McDbDimension

MdDbDimension 尺寸类

## Hierarchy

- [`McDbEntity`](McDbEntity.md)

  ↳ **`McDbDimension`**

  ↳↳ [`McDbAlignedDimension`](McDbAlignedDimension.md)

  ↳↳ [`McDbRotatedDimension`](McDbRotatedDimension.md)

## Table of contents

### Constructors

- [constructor](McDbDimension.md#constructor)

### Properties

- [imp](McDbDimension.md#imp)

### Accessors

- [Dxf0](McDbDimension.md#dxf0)
- [ObjectName](McDbDimension.md#objectname)
- [dimensionStyle](McDbDimension.md#dimensionstyle)
- [dimensionText](McDbDimension.md#dimensiontext)
- [elevation](McDbDimension.md#elevation)
- [horizontalRotation](McDbDimension.md#horizontalrotation)
- [textAttachment](McDbDimension.md#textattachment)
- [textPosition](McDbDimension.md#textposition)
- [textRotation](McDbDimension.md#textrotation)

### Methods

- [Clone](McDbDimension.md#clone)
- [Erase](McDbDimension.md#erase)
- [explode](McDbDimension.md#explode)
- [getDimVarDouble](McDbDimension.md#getdimvardouble)
- [getDimVarInt](McDbDimension.md#getdimvarint)
- [getDimVarObjectId](McDbDimension.md#getdimvarobjectid)
- [getDimVarString](McDbDimension.md#getdimvarstring)
- [getImp](McDbDimension.md#getimp)
- [getJson](McDbDimension.md#getjson)
- [getObjectID](McDbDimension.md#getobjectid)
- [initTempObject](McDbDimension.md#inittempobject)
- [isUsingDefaultTextPosition](McDbDimension.md#isusingdefaulttextposition)
- [recomputeDimBlock](McDbDimension.md#recomputedimblock)
- [setDimVarDouble](McDbDimension.md#setdimvardouble)
- [setDimVarInt](McDbDimension.md#setdimvarint)
- [setDimVarObjectId](McDbDimension.md#setdimvarobjectid)
- [setDimVarString](McDbDimension.md#setdimvarstring)
- [setJson](McDbDimension.md#setjson)
- [useDefaultTextPosition](McDbDimension.md#usedefaulttextposition)
- [useSetTextPosition](McDbDimension.md#usesettextposition)

## Constructors

### constructor

• **new McDbDimension**(`imp?`)

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

### dimensionStyle

• `get` **dimensionStyle**(): [`McObjectId`](McObjectId.md)

获取标注样式

#### Returns

[`McObjectId`](McObjectId.md)

标注样式

• `set` **dimensionStyle**(`val`): `void`

设置标注样式

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val` | [`McObjectId`](McObjectId.md) | 标注样式 |

#### Returns

`void`

___

### dimensionText

• `get` **dimensionText**(): `string`

获取标注文本

#### Returns

`string`

标注文本

• `set` **dimensionText**(`val`): `void`

设置标注文本

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val` | `string` | 标注文本 |

#### Returns

`void`

___

### elevation

• `get` **elevation**(): `number`

获取高度

#### Returns

`number`

高度

• `set` **elevation**(`val`): `void`

设置高度

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val` | `number` | 高度 |

#### Returns

`void`

___

### horizontalRotation

• `get` **horizontalRotation**(): `number`

获取水平旋转角度

#### Returns

`number`

水平旋转角度

• `set` **horizontalRotation**(`val`): `void`

设置水平旋转角度

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val` | `number` | 水平旋转角度 |

#### Returns

`void`

___

### textAttachment

• `get` **textAttachment**(): [`AttachmentPoint`](../enums/McDb.AttachmentPoint.md)

获取文本附着点

#### Returns

[`AttachmentPoint`](../enums/McDb.AttachmentPoint.md)

文本附着点

• `set` **textAttachment**(`val`): `void`

设置文本附着点

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val` | [`AttachmentPoint`](../enums/McDb.AttachmentPoint.md) | 文本附着点 |

#### Returns

`void`

___

### textPosition

• `get` **textPosition**(): [`McGePoint3d`](../interfaces/McGePoint3d.md)

获取文本位置

#### Returns

[`McGePoint3d`](../interfaces/McGePoint3d.md)

文本位置

• `set` **textPosition**(`pt`): `void`

设置文本位置

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pt` | [`McGePoint3d`](../interfaces/McGePoint3d.md) | 文本位置 |

#### Returns

`void`

___

### textRotation

• `get` **textRotation**(): `number`

获取文本旋转角度

#### Returns

`number`

文本旋转角度

• `set` **textRotation**(`val`): `void`

设置文本旋转角度

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val` | `number` | 文本旋转角度 |

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

### getDimVarDouble

▸ **getDimVarDouble**(`iType`): `number`

获取标注变量浮点数值

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `iType` | `number` | 标注变量类型 |

#### Returns

`number`

标注变量浮点数值

___

### getDimVarInt

▸ **getDimVarInt**(`iType`): `number`

获取标注变量整数值

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `iType` | `number` | 标注变量类型 |

#### Returns

`number`

标注变量整数值

___

### getDimVarObjectId

▸ **getDimVarObjectId**(`iType`): [`McObjectId`](McObjectId.md)

获取标注变量对象 ID

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `iType` | `number` | 标注变量类型 |

#### Returns

[`McObjectId`](McObjectId.md)

标注变量对象 ID

___

### getDimVarString

▸ **getDimVarString**(`iType`): `string`

获取标注变量字符串值

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `iType` | `number` | 标注变量类型 |

#### Returns

`string`

标注变量字符串值

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

### isUsingDefaultTextPosition

▸ **isUsingDefaultTextPosition**(): `boolean`

是否使用默认文本位置

#### Returns

`boolean`

是否使用默认文本位置

___

### recomputeDimBlock

▸ **recomputeDimBlock**(): `void`

重新计算标注块

#### Returns

`void`

___

### setDimVarDouble

▸ **setDimVarDouble**(`iType`, `val`): `void`

设置标注变量浮点数值

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `iType` | `number` | 标注变量类型 |
| `val` | `number` | 标注变量浮点数值 |

#### Returns

`void`

___

### setDimVarInt

▸ **setDimVarInt**(`iType`, `val`): `void`

设置标注变量整数值

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `iType` | `number` | 标注变量类型 |
| `val` | `number` | 标注变量整数值 |

#### Returns

`void`

___

### setDimVarObjectId

▸ **setDimVarObjectId**(`iType`, `val`): `void`

设置标注变量对象 ID

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `iType` | `number` | 标注变量类型 |
| `val` | [`McObjectId`](McObjectId.md) | 标注变量对象 ID |

#### Returns

`void`

___

### setDimVarString

▸ **setDimVarString**(`iType`, `val`): `void`

设置标注变量字符串值

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `iType` | `number` | 标注变量类型 |
| `val` | `string` | 标注变量字符串值 |

#### Returns

`void`

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

___

### useDefaultTextPosition

▸ **useDefaultTextPosition**(): `void`

使用默认文本位置

#### Returns

`void`

___

### useSetTextPosition

▸ **useSetTextPosition**(): `void`

使用设置的文本位置

#### Returns

`void`
