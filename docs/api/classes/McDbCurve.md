[mxcad API 文档](../README.md) / McDbCurve

# Class: McDbCurve

表示数据库曲线。

## Hierarchy

- [`McDbEntity`](McDbEntity.md)

  ↳ **`McDbCurve`**

  ↳↳ [`McDbLine`](McDbLine.md)

  ↳↳ [`McDbCircle`](McDbCircle.md)

  ↳↳ [`McDbPolyline`](McDbPolyline.md)

## Table of contents

### Constructors

- [constructor](McDbCurve.md#constructor)

### Properties

- [imp](McDbCurve.md#imp)

### Accessors

- [Dxf0](McDbCurve.md#dxf0)
- [ObjectName](McDbCurve.md#objectname)

### Methods

- [Clone](McDbCurve.md#clone)
- [Erase](McDbCurve.md#erase)
- [explode](McDbCurve.md#explode)
- [getDistAtParam](McDbCurve.md#getdistatparam)
- [getDistAtPoint](McDbCurve.md#getdistatpoint)
- [getEndParam](McDbCurve.md#getendparam)
- [getImp](McDbCurve.md#getimp)
- [getJson](McDbCurve.md#getjson)
- [getObjectID](McDbCurve.md#getobjectid)
- [getParamAtDist](McDbCurve.md#getparamatdist)
- [getPointAtDist](McDbCurve.md#getpointatdist)
- [getStartParam](McDbCurve.md#getstartparam)
- [initTempObject](McDbCurve.md#inittempobject)
- [setJson](McDbCurve.md#setjson)

## Constructors

### constructor

• **new McDbCurve**(`imp?`)

构造函数。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `imp?` | `any` | 内部实现对象。 |

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

### getDistAtParam

▸ **getDistAtParam**(`param`): `Object`

获取参数位置上的距离。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `param` | `number` | 参数位置。 |

#### Returns

`Object`

距离及执行结果。

| Name | Type |
| :------ | :------ |
| `ret` | `number` |
| `val` | `number` |

___

### getDistAtPoint

▸ **getDistAtPoint**(`pt`): `Object`

获取距离位置上的点。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pt` | [`McGePoint3d`](../interfaces/McGePoint3d.md) | 距离位置。 |

#### Returns

`Object`

点及执行结果。

| Name | Type |
| :------ | :------ |
| `ret` | `number` |
| `val` | `number` |

___

### getEndParam

▸ **getEndParam**(): `Object`

获取结束参数。

#### Returns

`Object`

结束参数及执行结果。

| Name | Type |
| :------ | :------ |
| `ret` | `number` |
| `val` | `number` |

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

### getParamAtDist

▸ **getParamAtDist**(`dist`): `Object`

获取距离位置上的参数。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dist` | `number` | 距离位置。 |

#### Returns

`Object`

参数及执行结果。

| Name | Type |
| :------ | :------ |
| `ret` | `number` |
| `val` | `number` |

___

### getPointAtDist

▸ **getPointAtDist**(`dist`): `Object`

获取距离位置上的点。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dist` | `number` | 距离位置。 |

#### Returns

`Object`

点及执行结果。

| Name | Type |
| :------ | :------ |
| `ret` | `number` |
| `val` | [`McGePoint3d`](../interfaces/McGePoint3d.md) |

___

### getStartParam

▸ **getStartParam**(): `Object`

获取起始参数。

#### Returns

`Object`

起始参数及执行结果。

| Name | Type |
| :------ | :------ |
| `ret` | `number` |
| `val` | `number` |

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
