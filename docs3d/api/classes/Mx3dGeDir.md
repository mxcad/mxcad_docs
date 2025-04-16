[mxcad_3d API 文档](../README.md) / Mx3dGeDir

# Class: Mx3dGeDir

表示方向的向量，模长始终为1

## Hierarchy

- [`Mx3dGeObject`](Mx3dGeObject.md)

  ↳ **`Mx3dGeDir`**

## Table of contents

### Constructors

- [constructor](Mx3dGeDir.md#constructor)

### Methods

- [Angle](Mx3dGeDir.md#angle)
- [AngleWithRef](Mx3dGeDir.md#anglewithref)
- [Cross](Mx3dGeDir.md#cross)
- [CrossCross](Mx3dGeDir.md#crosscross)
- [CrossCrossed](Mx3dGeDir.md#crosscrossed)
- [Crossed](Mx3dGeDir.md#crossed)
- [Dot](Mx3dGeDir.md#dot)
- [DotCross](Mx3dGeDir.md#dotcross)
- [IsEqual](Mx3dGeDir.md#isequal)
- [IsNormal](Mx3dGeDir.md#isnormal)
- [IsOpposite](Mx3dGeDir.md#isopposite)
- [IsParallel](Mx3dGeDir.md#isparallel)
- [MirrorByAxis](Mx3dGeDir.md#mirrorbyaxis)
- [MirrorByCSYSR](Mx3dGeDir.md#mirrorbycsysr)
- [MirrorByVec](Mx3dGeDir.md#mirrorbyvec)
- [MirroredByAxis](Mx3dGeDir.md#mirroredbyaxis)
- [MirroredByCSYSR](Mx3dGeDir.md#mirroredbycsysr)
- [MirroredByVec](Mx3dGeDir.md#mirroredbyvec)
- [Reverse](Mx3dGeDir.md#reverse)
- [Reversed](Mx3dGeDir.md#reversed)
- [Rotate](Mx3dGeDir.md#rotate)
- [Rotated](Mx3dGeDir.md#rotated)
- [SetX](Mx3dGeDir.md#setx)
- [SetXYZ](Mx3dGeDir.md#setxyz)
- [SetY](Mx3dGeDir.md#sety)
- [SetZ](Mx3dGeDir.md#setz)
- [Transform](Mx3dGeDir.md#transform)
- [Transformed](Mx3dGeDir.md#transformed)
- [X](Mx3dGeDir.md#x)
- [Y](Mx3dGeDir.md#y)
- [Z](Mx3dGeDir.md#z)

## Constructors

### constructor

• **new Mx3dGeDir**()

构造函数

#### Overrides

Mx3dGeObject.constructor

• **new Mx3dGeDir**(`theXv`, `theYv`, `theZv`)

构造函数

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theXv` | `number` | X方向 |
| `theYv` | `number` | Y方向 |
| `theZv` | `number` | Z方向 |

#### Overrides

Mx3dGeObject.constructor

## Methods

### Angle

▸ **Angle**(`theOther`): `number`

获取与另一个方向的夹角，范围[0,PI]

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theOther` | [`Mx3dGeDir`](Mx3dGeDir.md) | 另一个方向 |

#### Returns

`number`

夹角

___

### AngleWithRef

▸ **AngleWithRef**(`theOther`, `theVRef`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theOther` | [`Mx3dGeDir`](Mx3dGeDir.md) |
| `theVRef` | [`Mx3dGeDir`](Mx3dGeDir.md) |

#### Returns

`number`

___

### Cross

▸ **Cross**(`theRight`): `void`

[me] = [me] ^ theRight，[me]代表自身，^代表叉乘

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theRight` | [`Mx3dGeDir`](Mx3dGeDir.md) | 另一个方向向量 |

#### Returns

`void`

___

### CrossCross

▸ **CrossCross**(`theV1`, `theV2`): `void`

[me] ^ (theV1 ^ theV2)，[me]代表自身，^代表叉乘

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theV1` | [`Mx3dGeDir`](Mx3dGeDir.md) | 另一个方向向量 |
| `theV2` | [`Mx3dGeDir`](Mx3dGeDir.md) | 另一个方向向量 |

#### Returns

`void`

___

### CrossCrossed

▸ **CrossCrossed**(`theV1`, `theV2`): [`Mx3dGeDir`](Mx3dGeDir.md)

[res] ^ (theV1 ^ theV2)，[me]代表自身，[res]代表结果，^代表叉乘

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theV1` | [`Mx3dGeDir`](Mx3dGeDir.md) | 另一个方向向量 |
| `theV2` | [`Mx3dGeDir`](Mx3dGeDir.md) | 另一个方向向量 |

#### Returns

[`Mx3dGeDir`](Mx3dGeDir.md)

叉乘结果

___

### Crossed

▸ **Crossed**(`theRight`): [`Mx3dGeDir`](Mx3dGeDir.md)

[res] = [me] ^ theRight，[me]代表自身，[res]代表结果，^代表叉乘

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theRight` | [`Mx3dGeDir`](Mx3dGeDir.md) | 另一个方向向量 |

#### Returns

[`Mx3dGeDir`](Mx3dGeDir.md)

叉乘结果

___

### Dot

▸ **Dot**(`theOther`): `number`

[res] = [me] * theOther，[me]代表自身，[res]代表结果，*代表点乘

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theOther` | [`Mx3dGeDir`](Mx3dGeDir.md) | 另一个方向向量 |

#### Returns

`number`

点乘结果

___

### DotCross

▸ **DotCross**(`theV1`, `theV2`): `number`

[res] = [me] * (theV1 ^ theV2)，[me]代表自身，[res]代表结果，^代表叉乘，*代表点乘

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theV1` | [`Mx3dGeDir`](Mx3dGeDir.md) | 另一个方向向量 |
| `theV2` | [`Mx3dGeDir`](Mx3dGeDir.md) | 另一个方向向量 |

#### Returns

`number`

最后点乘结果

___

### IsEqual

▸ **IsEqual**(`theOther`, `theAngularTolerance`): `boolean`

判断是否和另外一个方向相等

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theOther` | [`Mx3dGeDir`](Mx3dGeDir.md) | 另一个方向 |
| `theAngularTolerance` | `number` | 角度精度 |

#### Returns

`boolean`

是否是同一方向

___

### IsNormal

▸ **IsNormal**(`theOther`, `theAngularTolerance`): `boolean`

判断是否和另外一个方向垂直

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theOther` | [`Mx3dGeDir`](Mx3dGeDir.md) | 另一个方向 |
| `theAngularTolerance` | `number` | 角度精度 |

#### Returns

`boolean`

是否垂直

___

### IsOpposite

▸ **IsOpposite**(`theOther`, `theAngularTolerance`): `boolean`

判断是否和另外一个方向相反

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theOther` | [`Mx3dGeDir`](Mx3dGeDir.md) | 另一个方向 |
| `theAngularTolerance` | `number` | 角度精度 |

#### Returns

`boolean`

是否相反

___

### IsParallel

▸ **IsParallel**(`theOther`, `theAngularTolerance`): `boolean`

判断是否和另外一个方向平行（同向或反向均为平行）

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theOther` | [`Mx3dGeDir`](Mx3dGeDir.md) | 另一个方向 |
| `theAngularTolerance` | `number` | 角度精度 |

#### Returns

`boolean`

是否平行

___

### MirrorByAxis

▸ **MirrorByAxis**(`theA1`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theA1` | [`Mx3dGeAxis`](Mx3dGeAxis.md) |

#### Returns

`void`

___

### MirrorByCSYSR

▸ **MirrorByCSYSR**(`theA2`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theA2` | [`Mx3dGeCSYSR`](Mx3dGeCSYSR.md) |

#### Returns

`void`

___

### MirrorByVec

▸ **MirrorByVec**(`theV`): `void`

按照一个镜像中心方向向量镜像

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theV` | [`Mx3dGeDir`](Mx3dGeDir.md) | 镜像中心方向 |

#### Returns

`void`

___

### MirroredByAxis

▸ **MirroredByAxis**(`theA1`): [`Mx3dGeDir`](Mx3dGeDir.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theA1` | [`Mx3dGeAxis`](Mx3dGeAxis.md) |

#### Returns

[`Mx3dGeDir`](Mx3dGeDir.md)

___

### MirroredByCSYSR

▸ **MirroredByCSYSR**(`theA2`): [`Mx3dGeDir`](Mx3dGeDir.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theA2` | [`Mx3dGeCSYSR`](Mx3dGeCSYSR.md) |

#### Returns

[`Mx3dGeDir`](Mx3dGeDir.md)

___

### MirroredByVec

▸ **MirroredByVec**(`theV`): [`Mx3dGeDir`](Mx3dGeDir.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theV` | [`Mx3dGeDir`](Mx3dGeDir.md) |

#### Returns

[`Mx3dGeDir`](Mx3dGeDir.md)

___

### Reverse

▸ **Reverse**(): `void`

翻转方向

#### Returns

`void`

___

### Reversed

▸ **Reversed**(): [`Mx3dGeDir`](Mx3dGeDir.md)

获取翻转方向后的结果

#### Returns

[`Mx3dGeDir`](Mx3dGeDir.md)

翻转方向后的结果

___

### Rotate

▸ **Rotate**(`theA1`, `theAng`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theA1` | [`Mx3dGeAxis`](Mx3dGeAxis.md) |
| `theAng` | `number` |

#### Returns

`void`

___

### Rotated

▸ **Rotated**(`theA1`, `theAng`): [`Mx3dGeDir`](Mx3dGeDir.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theA1` | [`Mx3dGeAxis`](Mx3dGeAxis.md) |
| `theAng` | `number` |

#### Returns

[`Mx3dGeDir`](Mx3dGeDir.md)

___

### SetX

▸ **SetX**(`theX`): `void`

设置X方向的大小

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theX` | `number` | X方向的大小 |

#### Returns

`void`

___

### SetXYZ

▸ **SetXYZ**(`theXv`, `theYv`, `theZv`): `void`

设置X,Y,Z方向的大小

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theXv` | `number` | X方向的大小 |
| `theYv` | `number` | Y方向的大小 |
| `theZv` | `number` | Z方向的大小 |

#### Returns

`void`

___

### SetY

▸ **SetY**(`theY`): `void`

设置Y方向的大小

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theY` | `number` | Y方向的大小 |

#### Returns

`void`

___

### SetZ

▸ **SetZ**(`theZ`): `void`

设置Z方向的大小

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theZ` | `number` | Z方向的大小 |

#### Returns

`void`

___

### Transform

▸ **Transform**(`theT`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theT` | [`Mx3dGeTrsf`](Mx3dGeTrsf.md) |

#### Returns

`void`

___

### Transformed

▸ **Transformed**(`theT`): [`Mx3dGeDir`](Mx3dGeDir.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theT` | [`Mx3dGeTrsf`](Mx3dGeTrsf.md) |

#### Returns

[`Mx3dGeDir`](Mx3dGeDir.md)

___

### X

▸ **X**(): `number`

获取X方向的大小

#### Returns

`number`

X方向的大小

___

### Y

▸ **Y**(): `number`

获取Y方向的大小

#### Returns

`number`

Y方向的大小

___

### Z

▸ **Z**(): `number`

获取Z方向的大小

#### Returns

`number`

Z方向的大小
