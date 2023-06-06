[mxcad API 文档](../README.md) / McDbAlignedDimension

# Class: McDbAlignedDimension

对齐标注尺寸类

## Hierarchy

- [`McDbDimension`](McDbDimension.md)

  ↳ **`McDbAlignedDimension`**

## Table of contents

### Constructors

- [constructor](McDbAlignedDimension.md#constructor)

### Properties

- [imp](McDbAlignedDimension.md#imp)

### Accessors

- [Dxf0](McDbAlignedDimension.md#dxf0)
- [ObjectName](McDbAlignedDimension.md#objectname)
- [dimLinePoint](McDbAlignedDimension.md#dimlinepoint)
- [dimensionStyle](McDbAlignedDimension.md#dimensionstyle)
- [dimensionText](McDbAlignedDimension.md#dimensiontext)
- [elevation](McDbAlignedDimension.md#elevation)
- [horizontalRotation](McDbAlignedDimension.md#horizontalrotation)
- [oblique](McDbAlignedDimension.md#oblique)
- [textAttachment](McDbAlignedDimension.md#textattachment)
- [textPosition](McDbAlignedDimension.md#textposition)
- [textRotation](McDbAlignedDimension.md#textrotation)
- [xLine1Point](McDbAlignedDimension.md#xline1point)
- [xLine2Point](McDbAlignedDimension.md#xline2point)

### Methods

- [Clone](McDbAlignedDimension.md#clone)
- [Erase](McDbAlignedDimension.md#erase)
- [explode](McDbAlignedDimension.md#explode)
- [getDimVarDouble](McDbAlignedDimension.md#getdimvardouble)
- [getDimVarInt](McDbAlignedDimension.md#getdimvarint)
- [getDimVarObjectId](McDbAlignedDimension.md#getdimvarobjectid)
- [getDimVarString](McDbAlignedDimension.md#getdimvarstring)
- [getImp](McDbAlignedDimension.md#getimp)
- [getJson](McDbAlignedDimension.md#getjson)
- [getObjectID](McDbAlignedDimension.md#getobjectid)
- [initTempObject](McDbAlignedDimension.md#inittempobject)
- [isUsingDefaultTextPosition](McDbAlignedDimension.md#isusingdefaulttextposition)
- [recomputeDimBlock](McDbAlignedDimension.md#recomputedimblock)
- [setDimVarDouble](McDbAlignedDimension.md#setdimvardouble)
- [setDimVarInt](McDbAlignedDimension.md#setdimvarint)
- [setDimVarObjectId](McDbAlignedDimension.md#setdimvarobjectid)
- [setDimVarString](McDbAlignedDimension.md#setdimvarstring)
- [setJson](McDbAlignedDimension.md#setjson)
- [useDefaultTextPosition](McDbAlignedDimension.md#usedefaulttextposition)
- [useSetTextPosition](McDbAlignedDimension.md#usesettextposition)

## Constructors

### constructor

• **new McDbAlignedDimension**(`imp?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `imp?` | `any` |

#### Overrides

[McDbDimension](McDbDimension.md).[constructor](McDbDimension.md#constructor)

## Properties

### imp

• `Protected` **imp**: `any` = `0`

内部实现对象。

#### Inherited from

[McDbDimension](McDbDimension.md).[imp](McDbDimension.md#imp)

## Accessors

### Dxf0

• `get` **Dxf0**(): `string`

获取 DXF 代码 0 的值。

#### Returns

`string`

#### Inherited from

McDbDimension.Dxf0

___

### ObjectName

• `get` **ObjectName**(): `string`

获取对象名称。

#### Returns

`string`

#### Inherited from

McDbDimension.ObjectName

___

### dimLinePoint

• `get` **dimLinePoint**(): [`McGePoint3d`](../interfaces/McGePoint3d.md)

获取标注线的端点

#### Returns

[`McGePoint3d`](../interfaces/McGePoint3d.md)

标注线的端点

• `set` **dimLinePoint**(`pt`): `void`

设置标注线的端点

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pt` | [`McGePoint3d`](../interfaces/McGePoint3d.md) | 标注线的端点 |

#### Returns

`void`

___

### dimensionStyle

• `get` **dimensionStyle**(): [`McObjectId`](McObjectId.md)

获取标注样式

#### Returns

[`McObjectId`](McObjectId.md)

标注样式

#### Inherited from

McDbDimension.dimensionStyle

• `set` **dimensionStyle**(`val`): `void`

设置标注样式

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val` | [`McObjectId`](McObjectId.md) | 标注样式 |

#### Returns

`void`

#### Inherited from

McDbDimension.dimensionStyle

___

### dimensionText

• `get` **dimensionText**(): `string`

获取标注文本

#### Returns

`string`

标注文本

#### Inherited from

McDbDimension.dimensionText

• `set` **dimensionText**(`val`): `void`

设置标注文本

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val` | `string` | 标注文本 |

#### Returns

`void`

#### Inherited from

McDbDimension.dimensionText

___

### elevation

• `get` **elevation**(): `number`

获取高度

#### Returns

`number`

高度

#### Inherited from

McDbDimension.elevation

• `set` **elevation**(`val`): `void`

设置高度

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val` | `number` | 高度 |

#### Returns

`void`

#### Inherited from

McDbDimension.elevation

___

### horizontalRotation

• `get` **horizontalRotation**(): `number`

获取水平旋转角度

#### Returns

`number`

水平旋转角度

#### Inherited from

McDbDimension.horizontalRotation

• `set` **horizontalRotation**(`val`): `void`

设置水平旋转角度

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val` | `number` | 水平旋转角度 |

#### Returns

`void`

#### Inherited from

McDbDimension.horizontalRotation

___

### oblique

• `get` **oblique**(): `number`

获取倾斜角度

#### Returns

`number`

倾斜角度

• `set` **oblique**(`val`): `void`

设置倾斜角度

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val` | `number` | 倾斜角度 |

#### Returns

`void`

___

### textAttachment

• `get` **textAttachment**(): [`AttachmentPoint`](../enums/McDb.AttachmentPoint.md)

获取文本附着点

#### Returns

[`AttachmentPoint`](../enums/McDb.AttachmentPoint.md)

文本附着点

#### Inherited from

McDbDimension.textAttachment

• `set` **textAttachment**(`val`): `void`

设置文本附着点

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val` | [`AttachmentPoint`](../enums/McDb.AttachmentPoint.md) | 文本附着点 |

#### Returns

`void`

#### Inherited from

McDbDimension.textAttachment

___

### textPosition

• `get` **textPosition**(): [`McGePoint3d`](../interfaces/McGePoint3d.md)

获取文本位置

#### Returns

[`McGePoint3d`](../interfaces/McGePoint3d.md)

文本位置

#### Inherited from

McDbDimension.textPosition

• `set` **textPosition**(`pt`): `void`

设置文本位置

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pt` | [`McGePoint3d`](../interfaces/McGePoint3d.md) | 文本位置 |

#### Returns

`void`

#### Inherited from

McDbDimension.textPosition

___

### textRotation

• `get` **textRotation**(): `number`

获取文本旋转角度

#### Returns

`number`

文本旋转角度

#### Inherited from

McDbDimension.textRotation

• `set` **textRotation**(`val`): `void`

设置文本旋转角度

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val` | `number` | 文本旋转角度 |

#### Returns

`void`

#### Inherited from

McDbDimension.textRotation

___

### xLine1Point

• `get` **xLine1Point**(): [`McGePoint3d`](../interfaces/McGePoint3d.md)

获取第一条线的端点

#### Returns

[`McGePoint3d`](../interfaces/McGePoint3d.md)

第一条线的端点

• `set` **xLine1Point**(`pt`): `void`

设置第一条线的端点

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pt` | [`McGePoint3d`](../interfaces/McGePoint3d.md) | 第一条线的端点 |

#### Returns

`void`

___

### xLine2Point

• `get` **xLine2Point**(): [`McGePoint3d`](../interfaces/McGePoint3d.md)

获取第二条线的端点

#### Returns

[`McGePoint3d`](../interfaces/McGePoint3d.md)

第二条线的端点

• `set` **xLine2Point**(`pt`): `void`

设置第二条线的端点

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pt` | [`McGePoint3d`](../interfaces/McGePoint3d.md) | 第二条线的端点 |

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

[McDbDimension](McDbDimension.md).[Clone](McDbDimension.md#clone)

___

### Erase

▸ **Erase**(): `boolean`

删除对象。

#### Returns

`boolean`

是否删除成功。

#### Inherited from

[McDbDimension](McDbDimension.md).[Erase](McDbDimension.md#erase)

___

### explode

▸ **explode**(): [`McDrawResbuf`](McDrawResbuf.md)

打碎对象，返回打后对象数据链表

#### Returns

[`McDrawResbuf`](McDrawResbuf.md)

#### Inherited from

[McDbDimension](McDbDimension.md).[explode](McDbDimension.md#explode)

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

#### Inherited from

[McDbDimension](McDbDimension.md).[getDimVarDouble](McDbDimension.md#getdimvardouble)

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

#### Inherited from

[McDbDimension](McDbDimension.md).[getDimVarInt](McDbDimension.md#getdimvarint)

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

#### Inherited from

[McDbDimension](McDbDimension.md).[getDimVarObjectId](McDbDimension.md#getdimvarobjectid)

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

#### Inherited from

[McDbDimension](McDbDimension.md).[getDimVarString](McDbDimension.md#getdimvarstring)

___

### getImp

▸ **getImp**(): `any`

获取内部实现对象。

#### Returns

`any`

内部实现对象。

#### Inherited from

[McDbDimension](McDbDimension.md).[getImp](McDbDimension.md#getimp)

___

### getJson

▸ **getJson**(): `string`

获取 JSON 格式的字符串。

#### Returns

`string`

JSON 格式的字符串。

#### Inherited from

[McDbDimension](McDbDimension.md).[getJson](McDbDimension.md#getjson)

___

### getObjectID

▸ **getObjectID**(): `number`

获取对象 ID。

#### Returns

`number`

对象 ID。

#### Inherited from

[McDbDimension](McDbDimension.md).[getObjectID](McDbDimension.md#getobjectid)

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

[McDbDimension](McDbDimension.md).[initTempObject](McDbDimension.md#inittempobject)

___

### isUsingDefaultTextPosition

▸ **isUsingDefaultTextPosition**(): `boolean`

是否使用默认文本位置

#### Returns

`boolean`

是否使用默认文本位置

#### Inherited from

[McDbDimension](McDbDimension.md).[isUsingDefaultTextPosition](McDbDimension.md#isusingdefaulttextposition)

___

### recomputeDimBlock

▸ **recomputeDimBlock**(): `void`

重新计算标注块

#### Returns

`void`

#### Inherited from

[McDbDimension](McDbDimension.md).[recomputeDimBlock](McDbDimension.md#recomputedimblock)

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

#### Inherited from

[McDbDimension](McDbDimension.md).[setDimVarDouble](McDbDimension.md#setdimvardouble)

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

#### Inherited from

[McDbDimension](McDbDimension.md).[setDimVarInt](McDbDimension.md#setdimvarint)

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

#### Inherited from

[McDbDimension](McDbDimension.md).[setDimVarObjectId](McDbDimension.md#setdimvarobjectid)

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

#### Inherited from

[McDbDimension](McDbDimension.md).[setDimVarString](McDbDimension.md#setdimvarstring)

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

[McDbDimension](McDbDimension.md).[setJson](McDbDimension.md#setjson)

___

### useDefaultTextPosition

▸ **useDefaultTextPosition**(): `void`

使用默认文本位置

#### Returns

`void`

#### Inherited from

[McDbDimension](McDbDimension.md).[useDefaultTextPosition](McDbDimension.md#usedefaulttextposition)

___

### useSetTextPosition

▸ **useSetTextPosition**(): `void`

使用设置的文本位置

#### Returns

`void`

#### Inherited from

[McDbDimension](McDbDimension.md).[useSetTextPosition](McDbDimension.md#usesettextposition)
