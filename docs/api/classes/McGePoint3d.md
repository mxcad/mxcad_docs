[mxcad API 文档](../README.md) / McGePoint3d

# Class: McGePoint3d

表示三维点的对象。

## Table of contents

### Constructors

- [constructor](McGePoint3d.md#constructor)

### Properties

- [imp](McGePoint3d.md#imp)
- [kOrigin](McGePoint3d.md#korigin)

### Accessors

- [x](McGePoint3d.md#x)
- [y](McGePoint3d.md#y)
- [z](McGePoint3d.md#z)

### Methods

- [addvec](McGePoint3d.md#addvec)
- [av](McGePoint3d.md#av)
- [c](McGePoint3d.md#c)
- [clone](McGePoint3d.md#clone)
- [copy](McGePoint3d.md#copy)
- [distanceTo](McGePoint3d.md#distanceto)
- [isEqualTo](McGePoint3d.md#isequalto)
- [setFromVector3](McGePoint3d.md#setfromvector3)
- [sub](McGePoint3d.md#sub)
- [subvec](McGePoint3d.md#subvec)
- [sv](McGePoint3d.md#sv)
- [toVector3](McGePoint3d.md#tovector3)
- [transformBy](McGePoint3d.md#transformby)

## Constructors

### constructor

• **new McGePoint3d**(`dX?`, `dY?`, `dZ?`)

构造函数。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dX?` | `number` \| `object` | X 坐标。 |
| `dY?` | `number` | Y 坐标。 |
| `dZ?` | `number` | Z 坐标。 |

## Properties

### imp

• **imp**: `any`

___

### kOrigin

▪ `Static` **kOrigin**: [`McGePoint3d`](McGePoint3d.md)

## Accessors

### x

• `get` **x**(): `number`

X 坐标。

#### Returns

`number`

• `set` **x**(`val`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `number` |

#### Returns

`void`

___

### y

• `get` **y**(): `number`

Y 坐标。

#### Returns

`number`

• `set` **y**(`val`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `number` |

#### Returns

`void`

___

### z

• `get` **z**(): `number`

Z 坐标。

#### Returns

`number`

• `set` **z**(`val`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `number` |

#### Returns

`void`

## Methods

### addvec

▸ **addvec**(`vec`): [`McGePoint3d`](McGePoint3d.md)

计算点加上向量后的新位置

#### Parameters

| Name | Type |
| :------ | :------ |
| `vec` | [`McGeVector3d`](McGeVector3d.md) |

#### Returns

[`McGePoint3d`](McGePoint3d.md)

___

### av

▸ **av**(`vec`): [`McGePoint3d`](McGePoint3d.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `vec` | [`McGeVector3d`](McGeVector3d.md) |

#### Returns

[`McGePoint3d`](McGePoint3d.md)

___

### c

▸ **c**(): [`McGePoint3d`](McGePoint3d.md)

#### Returns

[`McGePoint3d`](McGePoint3d.md)

___

### clone

▸ **clone**(): [`McGePoint3d`](McGePoint3d.md)

刻隆一个对对象

#### Returns

[`McGePoint3d`](McGePoint3d.md)

___

### copy

▸ **copy**(`val`): [`McGePoint3d`](McGePoint3d.md)

复制对象的值

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | [`McGePoint3d`](McGePoint3d.md) |

#### Returns

[`McGePoint3d`](McGePoint3d.md)

___

### distanceTo

▸ **distanceTo**(`pnt`): `number`

计算两点距离

#### Parameters

| Name | Type |
| :------ | :------ |
| `pnt` | [`McGePoint3d`](McGePoint3d.md) |

#### Returns

`number`

___

### isEqualTo

▸ **isEqualTo**(`pnt`): `boolean`

判断两个点是否相等

#### Parameters

| Name | Type |
| :------ | :------ |
| `pnt` | [`McGePoint3d`](McGePoint3d.md) |

#### Returns

`boolean`

___

### setFromVector3

▸ **setFromVector3**(`val`): [`McGePoint3d`](McGePoint3d.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `Vector3` |

#### Returns

[`McGePoint3d`](McGePoint3d.md)

___

### sub

▸ **sub**(`pt`): [`McGeVector3d`](McGeVector3d.md)

返回两点相减后得到的一个新的向量

#### Parameters

| Name | Type |
| :------ | :------ |
| `pt` | [`McGePoint3d`](McGePoint3d.md) |

#### Returns

[`McGeVector3d`](McGeVector3d.md)

___

### subvec

▸ **subvec**(`vec`): [`McGePoint3d`](McGePoint3d.md)

计算点减去向量后的新位置

#### Parameters

| Name | Type |
| :------ | :------ |
| `vec` | [`McGeVector3d`](McGeVector3d.md) |

#### Returns

[`McGePoint3d`](McGePoint3d.md)

___

### sv

▸ **sv**(`vec`): [`McGePoint3d`](McGePoint3d.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `vec` | [`McGeVector3d`](McGeVector3d.md) |

#### Returns

[`McGePoint3d`](McGePoint3d.md)

___

### toVector3

▸ **toVector3**(): `Vector3`

#### Returns

`Vector3`

___

### transformBy

▸ **transformBy**(`leftSide`): [`McGePoint3d`](McGePoint3d.md)

使用矩阵变换该点

#### Parameters

| Name | Type |
| :------ | :------ |
| `leftSide` | [`McGeMatrix3d`](McGeMatrix3d.md) |

#### Returns

[`McGePoint3d`](McGePoint3d.md)
