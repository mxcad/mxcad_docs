[mxcad_3d API 文档](../README.md) / Mx3dGeLocation

# Class: Mx3dGeLocation

表示3D几何系统中的位置。
提供了操作3D位置和变换的各种方法。

## Hierarchy

- [`Mx3dGeObject`](Mx3dGeObject.md)

  ↳ **`Mx3dGeLocation`**

## Table of contents

### Constructors

- [constructor](Mx3dGeLocation.md#constructor)

### Methods

- [Clear](Mx3dGeLocation.md#clear)
- [Divided](Mx3dGeLocation.md#divided)
- [FirstPower](Mx3dGeLocation.md#firstpower)
- [Identity](Mx3dGeLocation.md#identity)
- [Inverted](Mx3dGeLocation.md#inverted)
- [IsDifferent](Mx3dGeLocation.md#isdifferent)
- [IsEqual](Mx3dGeLocation.md#isequal)
- [IsIdentity](Mx3dGeLocation.md#isidentity)
- [Multiplied](Mx3dGeLocation.md#multiplied)
- [NextLocation](Mx3dGeLocation.md#nextlocation)
- [Powered](Mx3dGeLocation.md#powered)
- [Predivided](Mx3dGeLocation.md#predivided)
- [ScalePrec](Mx3dGeLocation.md#scaleprec)

## Constructors

### constructor

• **new Mx3dGeLocation**()

默认构造函数，创建一个单位位置。

#### Overrides

Mx3dGeObject.constructor

• **new Mx3dGeLocation**(`theTrsf`)

构造函数，使用指定的变换初始化位置。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theTrsf` | [`Mx3dGeTrsf`](Mx3dGeTrsf.md) | 用于初始化位置的变换对象。 |

#### Overrides

Mx3dGeObject.constructor

## Methods

### Clear

▸ **Clear**(): `void`

清除当前位置的变换。

#### Returns

`void`

___

### Divided

▸ **Divided**(`Other`): [`Mx3dGeLocation`](Mx3dGeLocation.md)

计算当前位置与另一个位置的除法。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Other` | [`Mx3dGeLocation`](Mx3dGeLocation.md) | 另一个位置对象。 |

#### Returns

[`Mx3dGeLocation`](Mx3dGeLocation.md)

除法后的位置对象。

___

### FirstPower

▸ **FirstPower**(): `number`

获取位置的第一幂。

#### Returns

`number`

位置的第一幂值。

___

### Identity

▸ **Identity**(): `void`

将当前位置设置为单位变换。

#### Returns

`void`

___

### Inverted

▸ **Inverted**(): [`Mx3dGeLocation`](Mx3dGeLocation.md)

计算当前位置的逆变换。

#### Returns

[`Mx3dGeLocation`](Mx3dGeLocation.md)

逆变换后的位置对象。

___

### IsDifferent

▸ **IsDifferent**(`Other`): `boolean`

检查当前位置是否与另一个位置不同。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Other` | [`Mx3dGeLocation`](Mx3dGeLocation.md) | 另一个位置对象。 |

#### Returns

`boolean`

如果当前位置与另一个位置不同，则返回true；否则返回false。

___

### IsEqual

▸ **IsEqual**(`Other`): `boolean`

检查当前位置是否与另一个位置相等。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Other` | [`Mx3dGeLocation`](Mx3dGeLocation.md) | 另一个位置对象。 |

#### Returns

`boolean`

如果当前位置与另一个位置相等，则返回true；否则返回false。

___

### IsIdentity

▸ **IsIdentity**(): `boolean`

检查当前位置是否为单位变换。

#### Returns

`boolean`

如果当前位置为单位变换，则返回true；否则返回false。

___

### Multiplied

▸ **Multiplied**(`theLocation`): [`Mx3dGeLocation`](Mx3dGeLocation.md)

计算当前位置与另一个位置的乘积。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theLocation` | [`Mx3dGeLocation`](Mx3dGeLocation.md) | 另一个位置对象。 |

#### Returns

[`Mx3dGeLocation`](Mx3dGeLocation.md)

乘积后的位置对象。

___

### NextLocation

▸ **NextLocation**(): [`Mx3dGeLocation`](Mx3dGeLocation.md)

获取下一个位置对象。

#### Returns

[`Mx3dGeLocation`](Mx3dGeLocation.md)

下一个位置对象。

___

### Powered

▸ **Powered**(`pwr`): [`Mx3dGeLocation`](Mx3dGeLocation.md)

计算当前位置的幂运算。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pwr` | `number` | 幂的值。 |

#### Returns

[`Mx3dGeLocation`](Mx3dGeLocation.md)

幂运算后的位置对象。

___

### Predivided

▸ **Predivided**(`Other`): [`Mx3dGeLocation`](Mx3dGeLocation.md)

计算当前位置与另一个位置的左除（前除）。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Other` | [`Mx3dGeLocation`](Mx3dGeLocation.md) | 另一个位置对象。 |

#### Returns

[`Mx3dGeLocation`](Mx3dGeLocation.md)

左除后的位置对象。

___

### ScalePrec

▸ **ScalePrec**(): `number`

获取位置的缩放精度。

#### Returns

`number`

位置的缩放精度值。
