[mxcad API 文档](../README.md) / McGeVector3d

# Class: McGeVector3d

表示三维向量的对象。

## Table of contents

### Constructors

- [constructor](McGeVector3d.md#constructor)

### Properties

- [imp](McGeVector3d.md#imp)
- [kNegateZAxis](McGeVector3d.md#knegatezaxis)
- [kXAxis](McGeVector3d.md#kxaxis)
- [kYAxis](McGeVector3d.md#kyaxis)
- [kZAxis](McGeVector3d.md#kzaxis)

### Accessors

- [x](McGeVector3d.md#x)
- [y](McGeVector3d.md#y)
- [z](McGeVector3d.md#z)

### Methods

- [angleTo1](McGeVector3d.md#angleto1)
- [angleTo2](McGeVector3d.md#angleto2)
- [c](McGeVector3d.md#c)
- [clone](McGeVector3d.md#clone)
- [copy](McGeVector3d.md#copy)
- [crossProduct](McGeVector3d.md#crossproduct)
- [dotProduct](McGeVector3d.md#dotproduct)
- [isEqualTo](McGeVector3d.md#isequalto)
- [isUnitLength](McGeVector3d.md#isunitlength)
- [isZeroLength](McGeVector3d.md#iszerolength)
- [length](McGeVector3d.md#length)
- [mult](McGeVector3d.md#mult)
- [negate](McGeVector3d.md#negate)
- [normalize](McGeVector3d.md#normalize)
- [perpVector](McGeVector3d.md#perpvector)
- [rotateBy](McGeVector3d.md#rotateby)
- [toVector3](McGeVector3d.md#tovector3)

## Constructors

### constructor

• **new McGeVector3d**(`dX?`, `dY?`, `dZ?`)

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

### kNegateZAxis

▪ `Static` **kNegateZAxis**: [`McGeVector3d`](McGeVector3d.md)

___

### kXAxis

▪ `Static` **kXAxis**: [`McGeVector3d`](McGeVector3d.md)

___

### kYAxis

▪ `Static` **kYAxis**: [`McGeVector3d`](McGeVector3d.md)

___

### kZAxis

▪ `Static` **kZAxis**: [`McGeVector3d`](McGeVector3d.md)

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

### angleTo1

▸ **angleTo1**(`vec`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `vec` | [`McGeVector3d`](McGeVector3d.md) |

#### Returns

`number`

___

### angleTo2

▸ **angleTo2**(`vec`, `refVec`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `vec` | [`McGeVector3d`](McGeVector3d.md) |
| `refVec` | [`McGeVector3d`](McGeVector3d.md) |

#### Returns

`number`

___

### c

▸ **c**(): [`McGeVector3d`](McGeVector3d.md)

#### Returns

[`McGeVector3d`](McGeVector3d.md)

___

### clone

▸ **clone**(): [`McGeVector3d`](McGeVector3d.md)

刻隆一个对对象

#### Returns

[`McGeVector3d`](McGeVector3d.md)

___

### copy

▸ **copy**(`val`): [`McGeVector3d`](McGeVector3d.md)

复制对象的值

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | [`McGeVector3d`](McGeVector3d.md) |

#### Returns

[`McGeVector3d`](McGeVector3d.md)

___

### crossProduct

▸ **crossProduct**(`vec`): [`McGeVector3d`](McGeVector3d.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `vec` | [`McGeVector3d`](McGeVector3d.md) |

#### Returns

[`McGeVector3d`](McGeVector3d.md)

___

### dotProduct

▸ **dotProduct**(`vec`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `vec` | [`McGeVector3d`](McGeVector3d.md) |

#### Returns

`number`

___

### isEqualTo

▸ **isEqualTo**(`vec`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `vec` | [`McGeVector3d`](McGeVector3d.md) |

#### Returns

`boolean`

___

### isUnitLength

▸ **isUnitLength**(): `boolean`

#### Returns

`boolean`

___

### isZeroLength

▸ **isZeroLength**(): `boolean`

#### Returns

`boolean`

___

### length

▸ **length**(): `number`

#### Returns

`number`

___

### mult

▸ **mult**(`val`): [`McGeVector3d`](McGeVector3d.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `number` |

#### Returns

[`McGeVector3d`](McGeVector3d.md)

___

### negate

▸ **negate**(): [`McGeVector3d`](McGeVector3d.md)

#### Returns

[`McGeVector3d`](McGeVector3d.md)

___

### normalize

▸ **normalize**(): [`McGeVector3d`](McGeVector3d.md)

#### Returns

[`McGeVector3d`](McGeVector3d.md)

___

### perpVector

▸ **perpVector**(): [`McGeVector3d`](McGeVector3d.md)

#### Returns

[`McGeVector3d`](McGeVector3d.md)

___

### rotateBy

▸ **rotateBy**(`ang`, `axis?`): [`McGeVector3d`](McGeVector3d.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `ang` | `number` |
| `axis?` | [`McGeVector3d`](McGeVector3d.md) |

#### Returns

[`McGeVector3d`](McGeVector3d.md)

___

### toVector3

▸ **toVector3**(): `Vector3`

#### Returns

`Vector3`
