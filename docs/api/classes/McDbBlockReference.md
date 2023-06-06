[mxcad API 文档](../README.md) / McDbBlockReference

# Class: McDbBlockReference

表示一个 CAD 图块引用实体。

## Hierarchy

- [`McDbEntity`](McDbEntity.md)

  ↳ **`McDbBlockReference`**

## Table of contents

### Constructors

- [constructor](McDbBlockReference.md#constructor)

### Properties

- [imp](McDbBlockReference.md#imp)

### Accessors

- [Dxf0](McDbBlockReference.md#dxf0)
- [ObjectName](McDbBlockReference.md#objectname)
- [blockTableRecordId](McDbBlockReference.md#blocktablerecordid)
- [blockTransform](McDbBlockReference.md#blocktransform)
- [position](McDbBlockReference.md#position)
- [rotation](McDbBlockReference.md#rotation)
- [scaleFactors](McDbBlockReference.md#scalefactors)

### Methods

- [Clone](McDbBlockReference.md#clone)
- [Erase](McDbBlockReference.md#erase)
- [explode](McDbBlockReference.md#explode)
- [getImp](McDbBlockReference.md#getimp)
- [getJson](McDbBlockReference.md#getjson)
- [getObjectID](McDbBlockReference.md#getobjectid)
- [initTempObject](McDbBlockReference.md#inittempobject)
- [setJson](McDbBlockReference.md#setjson)

## Constructors

### constructor

• **new McDbBlockReference**(`imp?`)

初始化一个新的 MdDbBlockReference 实例。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `imp?` | `any` | 可选，用于初始化实例的 C++ 对象。 |

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

### blockTableRecordId

• `get` **blockTableRecordId**(): [`McObjectId`](McObjectId.md)

获取或设置该实体所引用的图块的 ID。

#### Returns

[`McObjectId`](McObjectId.md)

• `set` **blockTableRecordId**(`val`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | [`McObjectId`](McObjectId.md) |

#### Returns

`void`

___

### blockTransform

• `get` **blockTransform**(): [`McGeMatrix3d`](../interfaces/McGeMatrix3d.md)

获取或设置该实体所引用的图块的变换矩阵。

#### Returns

[`McGeMatrix3d`](../interfaces/McGeMatrix3d.md)

• `set` **blockTransform**(`val`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | [`McGeMatrix3d`](../interfaces/McGeMatrix3d.md) |

#### Returns

`void`

___

### position

• `get` **position**(): [`McGePoint3d`](../interfaces/McGePoint3d.md)

获取或设置该实体的位置。

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

获取或设置该实体的旋转角度。

#### Returns

`number`

• `set` **rotation**(`val`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `number` |

#### Returns

`void`

___

### scaleFactors

• `get` **scaleFactors**(): `number`

获取或设置该实体的缩放因子。

#### Returns

`number`

• `set` **scaleFactors**(`val`): `void`

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
