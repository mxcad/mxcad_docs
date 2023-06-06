[mxcad API 文档](../README.md) / McDbPolyline

# Class: McDbPolyline

多段线类

## Hierarchy

- [`McDbCurve`](McDbCurve.md)

  ↳ **`McDbPolyline`**

## Table of contents

### Constructors

- [constructor](McDbPolyline.md#constructor)

### Properties

- [imp](McDbPolyline.md#imp)

### Accessors

- [Dxf0](McDbPolyline.md#dxf0)
- [ObjectName](McDbPolyline.md#objectname)
- [constantWidth](McDbPolyline.md#constantwidth)
- [isClosed](McDbPolyline.md#isclosed)

### Methods

- [Clone](McDbPolyline.md#clone)
- [Erase](McDbPolyline.md#erase)
- [addVertexAt](McDbPolyline.md#addvertexat)
- [explode](McDbPolyline.md#explode)
- [getBulgeAt](McDbPolyline.md#getbulgeat)
- [getDistAtParam](McDbPolyline.md#getdistatparam)
- [getDistAtPoint](McDbPolyline.md#getdistatpoint)
- [getEndParam](McDbPolyline.md#getendparam)
- [getImp](McDbPolyline.md#getimp)
- [getJson](McDbPolyline.md#getjson)
- [getObjectID](McDbPolyline.md#getobjectid)
- [getParamAtDist](McDbPolyline.md#getparamatdist)
- [getPointAt](McDbPolyline.md#getpointat)
- [getPointAtDist](McDbPolyline.md#getpointatdist)
- [getStartParam](McDbPolyline.md#getstartparam)
- [getWidthsAt](McDbPolyline.md#getwidthsat)
- [initTempObject](McDbPolyline.md#inittempobject)
- [numVerts](McDbPolyline.md#numverts)
- [removeVertexAt](McDbPolyline.md#removevertexat)
- [setBulgeAt](McDbPolyline.md#setbulgeat)
- [setJson](McDbPolyline.md#setjson)
- [setPointAt](McDbPolyline.md#setpointat)

## Constructors

### constructor

• **new McDbPolyline**(`imp?`)

构造函数

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `imp?` | `any` | 实现对象 |

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

### constantWidth

• `get` **constantWidth**(): `number`

获取常量宽度

#### Returns

`number`

• `set` **constantWidth**(`val`): `void`

设置常量宽度

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val` | `number` | 常量宽度 |

#### Returns

`void`

___

### isClosed

• `get` **isClosed**(): `boolean`

获取是否闭合

#### Returns

`boolean`

• `set` **isClosed**(`val`): `void`

设置是否闭合

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val` | `boolean` | 是否闭合 |

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

### addVertexAt

▸ **addVertexAt**(`index`, `pt`, `bulge`, `startWidth`, `endWidth`): `boolean`

在指定位置添加顶点

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 位置 |
| `pt` | [`McGePoint3d`](../interfaces/McGePoint3d.md) | 点 |
| `bulge` | `number` | 凸度 |
| `startWidth` | `number` | 起始宽度 |
| `endWidth` | `number` | 结束宽度 |

#### Returns

`boolean`

___

### explode

▸ **explode**(): [`McDrawResbuf`](McDrawResbuf.md)

打碎对象，返回打后对象数据链表

#### Returns

[`McDrawResbuf`](McDrawResbuf.md)

#### Inherited from

[McDbCurve](McDbCurve.md).[explode](McDbCurve.md#explode)

___

### getBulgeAt

▸ **getBulgeAt**(`index`): `number`

获取指定位置的凸度

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 位置 |

#### Returns

`number`

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

### getPointAt

▸ **getPointAt**(`index`): `Object`

获取指定位置的点

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 位置 |

#### Returns

`Object`

val: 点, ret: 返回值

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

### getWidthsAt

▸ **getWidthsAt**(`index`): `Object`

获取指定位置的起始和结束宽度

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 位置 |

#### Returns

`Object`

val1: 起始宽度, val2: 结束宽度, ret: 返回值

| Name | Type |
| :------ | :------ |
| `ret` | `number` |
| `val1` | `number` |
| `val2` | `number` |

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

### numVerts

▸ **numVerts**(): `number`

获取顶点数量

#### Returns

`number`

___

### removeVertexAt

▸ **removeVertexAt**(`index`): `boolean`

移除指定位置的顶点

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 位置 |

#### Returns

`boolean`

___

### setBulgeAt

▸ **setBulgeAt**(`index`, `bulge`): `boolean`

设置指定位置的凸度

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 位置 |
| `bulge` | `number` | 凸度 |

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

[McDbCurve](McDbCurve.md).[setJson](McDbCurve.md#setjson)

___

### setPointAt

▸ **setPointAt**(`index`, `pt`): `boolean`

设置指定位置的点

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 位置 |
| `pt` | [`McGePoint3d`](../interfaces/McGePoint3d.md) | 点 |

#### Returns

`boolean`
