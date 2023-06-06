[mxcad API 文档](../README.md) / McDbCircle

# Class: McDbCircle

表示一个圆形。

## Hierarchy

- [`McDbCurve`](McDbCurve.md)

  ↳ **`McDbCircle`**

## Table of contents

### Constructors

- [constructor](McDbCircle.md#constructor)

### Properties

- [imp](McDbCircle.md#imp)

### Accessors

- [Dxf0](McDbCircle.md#dxf0)
- [ObjectName](McDbCircle.md#objectname)
- [center](McDbCircle.md#center)
- [radius](McDbCircle.md#radius)

### Methods

- [Clone](McDbCircle.md#clone)
- [Erase](McDbCircle.md#erase)
- [explode](McDbCircle.md#explode)
- [getDistAtParam](McDbCircle.md#getdistatparam)
- [getDistAtPoint](McDbCircle.md#getdistatpoint)
- [getEndParam](McDbCircle.md#getendparam)
- [getImp](McDbCircle.md#getimp)
- [getJson](McDbCircle.md#getjson)
- [getObjectID](McDbCircle.md#getobjectid)
- [getParamAtDist](McDbCircle.md#getparamatdist)
- [getPointAtDist](McDbCircle.md#getpointatdist)
- [getStartParam](McDbCircle.md#getstartparam)
- [initTempObject](McDbCircle.md#inittempobject)
- [setCenter](McDbCircle.md#setcenter)
- [setJson](McDbCircle.md#setjson)

## Constructors

### constructor

• **new McDbCircle**(`imp?`)

构造函数。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `imp?` | `any` | 内部对象。 |

#### Overrides

[McDbCurve](McDbCurve.md).[constructor](McDbCurve.md#constructor)

## Properties

### imp

• `Protected` **imp**: `any` = `0`

内部实现对象。

#### Inherited from

[McDbCurve](McDbCurve.md).[imp](McDbCurve.md#imp)

## Accessors

### Dxf0

• `get` **Dxf0**(): `string`

获取 DXF 代码 0 的值。

#### Returns

`string`

#### Inherited from

McDbCurve.Dxf0

___

### ObjectName

• `get` **ObjectName**(): `string`

获取对象名称。

#### Returns

`string`

#### Inherited from

McDbCurve.ObjectName

___

### center

• `get` **center**(): [`McGePoint3d`](../interfaces/McGePoint3d.md)

获取圆心坐标。

#### Returns

[`McGePoint3d`](../interfaces/McGePoint3d.md)

• `set` **center**(`pt`): `void`

设置圆心坐标。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pt` | [`McGePoint3d`](../interfaces/McGePoint3d.md) | 圆心坐标。 |

#### Returns

`void`

___

### radius

• `get` **radius**(): `number`

获取圆半径。

#### Returns

`number`

• `set` **radius**(`r`): `void`

设置圆半径。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `r` | `number` | 圆半径。 |

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

[McDbCurve](McDbCurve.md).[Clone](McDbCurve.md#clone)

___

### Erase

▸ **Erase**(): `boolean`

删除对象。

#### Returns

`boolean`

是否删除成功。

#### Inherited from

[McDbCurve](McDbCurve.md).[Erase](McDbCurve.md#erase)

___

### explode

▸ **explode**(): [`McDrawResbuf`](McDrawResbuf.md)

打碎对象，返回打后对象数据链表

#### Returns

[`McDrawResbuf`](McDrawResbuf.md)

#### Inherited from

[McDbCurve](McDbCurve.md).[explode](McDbCurve.md#explode)

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

#### Inherited from

[McDbCurve](McDbCurve.md).[getDistAtParam](McDbCurve.md#getdistatparam)

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

#### Inherited from

[McDbCurve](McDbCurve.md).[getDistAtPoint](McDbCurve.md#getdistatpoint)

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

#### Inherited from

[McDbCurve](McDbCurve.md).[getEndParam](McDbCurve.md#getendparam)

___

### getImp

▸ **getImp**(): `any`

获取内部实现对象。

#### Returns

`any`

内部实现对象。

#### Inherited from

[McDbCurve](McDbCurve.md).[getImp](McDbCurve.md#getimp)

___

### getJson

▸ **getJson**(): `string`

获取 JSON 格式的字符串。

#### Returns

`string`

JSON 格式的字符串。

#### Inherited from

[McDbCurve](McDbCurve.md).[getJson](McDbCurve.md#getjson)

___

### getObjectID

▸ **getObjectID**(): `number`

获取对象 ID。

#### Returns

`number`

对象 ID。

#### Inherited from

[McDbCurve](McDbCurve.md).[getObjectID](McDbCurve.md#getobjectid)

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

#### Inherited from

[McDbCurve](McDbCurve.md).[getParamAtDist](McDbCurve.md#getparamatdist)

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

#### Inherited from

[McDbCurve](McDbCurve.md).[getPointAtDist](McDbCurve.md#getpointatdist)

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

#### Inherited from

[McDbCurve](McDbCurve.md).[getStartParam](McDbCurve.md#getstartparam)

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

[McDbCurve](McDbCurve.md).[initTempObject](McDbCurve.md#inittempobject)

___

### setCenter

▸ **setCenter**(`x`, `y`, `z?`): `void`

设置圆心坐标。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | 圆心 x 坐标。 |
| `y` | `number` | 圆心 y 坐标。 |
| `z?` | `number` | 圆心 z 坐标。 |

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

[McDbCurve](McDbCurve.md).[setJson](McDbCurve.md#setjson)
