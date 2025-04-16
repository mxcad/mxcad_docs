[mxcad_3d API 文档](../README.md) / Mx3dGeTrsf

# Class: Mx3dGeTrsf

表示几何变换

## Hierarchy

- [`Mx3dGeObject`](Mx3dGeObject.md)

  ↳ **`Mx3dGeTrsf`**

## Table of contents

### Constructors

- [constructor](Mx3dGeTrsf.md#constructor)

### Methods

- [Invert](Mx3dGeTrsf.md#invert)
- [Inverted](Mx3dGeTrsf.md#inverted)
- [IsNegative](Mx3dGeTrsf.md#isnegative)
- [Multiplied](Mx3dGeTrsf.md#multiplied)
- [Multiply](Mx3dGeTrsf.md#multiply)
- [Power](Mx3dGeTrsf.md#power)
- [Powered](Mx3dGeTrsf.md#powered)
- [PreMultiply](Mx3dGeTrsf.md#premultiply)
- [ScaleFactor](Mx3dGeTrsf.md#scalefactor)
- [SetMirrorByAxis](Mx3dGeTrsf.md#setmirrorbyaxis)
- [SetMirrorByCSYSR](Mx3dGeTrsf.md#setmirrorbycsysr)
- [SetMirrorByPoint](Mx3dGeTrsf.md#setmirrorbypoint)
- [SetRotation](Mx3dGeTrsf.md#setrotation)
- [SetScale](Mx3dGeTrsf.md#setscale)
- [SetScaleFactor](Mx3dGeTrsf.md#setscalefactor)
- [SetTranslationBy2Points](Mx3dGeTrsf.md#settranslationby2points)
- [SetTranslationByVec](Mx3dGeTrsf.md#settranslationbyvec)
- [SetTranslationPart](Mx3dGeTrsf.md#settranslationpart)
- [SetValues](Mx3dGeTrsf.md#setvalues)
- [Transforms](Mx3dGeTrsf.md#transforms)
- [Value](Mx3dGeTrsf.md#value)

## Constructors

### constructor

• **new Mx3dGeTrsf**()

#### Overrides

Mx3dGeObject.constructor

## Methods

### Invert

▸ **Invert**(): `void`

将变换矩阵转置

#### Returns

`void`

___

### Inverted

▸ **Inverted**(): [`Mx3dGeTrsf`](Mx3dGeTrsf.md)

获取变换矩阵转置后的矩阵

#### Returns

[`Mx3dGeTrsf`](Mx3dGeTrsf.md)

转置矩阵

___

### IsNegative

▸ **IsNegative**(): `boolean`

判断此变换矩阵的行列式是否为负

#### Returns

`boolean`

是否为负

___

### Multiplied

▸ **Multiplied**(`t`): [`Mx3dGeTrsf`](Mx3dGeTrsf.md)

获取矩阵相乘之后的结果，[res] = [me] * t，[res]代表结果，[me]代表自身，t是另外的变换矩阵

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `t` | [`Mx3dGeTrsf`](Mx3dGeTrsf.md) | 另一个变换矩阵 |

#### Returns

[`Mx3dGeTrsf`](Mx3dGeTrsf.md)

矩阵相乘后的结果

___

### Multiply

▸ **Multiply**(`t`): `void`

自身乘以另外一个变换矩阵，[me] = [me] * t，[me]代表自身，t是另外的变换矩阵

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `t` | [`Mx3dGeTrsf`](Mx3dGeTrsf.md) | 另一个变换矩阵 |

#### Returns

`void`

___

### Power

▸ **Power**(`n`): `void`

自身n幂次方运算，[me] * [me] * .......* [me]，[me]代表自身，乘以n次

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `n` | `number` | 次数 |

#### Returns

`void`

___

### Powered

▸ **Powered**(`n`): [`Mx3dGeTrsf`](Mx3dGeTrsf.md)

获取当前变换矩阵n次幂方运算后的结果，[res] = [me] * [me] * .......* [me]，[res]代表结果，[me]代表自身，n个[me]相乘

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `n` | `number` | 次数 |

#### Returns

[`Mx3dGeTrsf`](Mx3dGeTrsf.md)

n幂次方的结果

___

### PreMultiply

▸ **PreMultiply**(`t`): `void`

另外一个变换矩阵乘以自身，[me] = t * [me]，[me]代表自身，t是另外的变换矩阵

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `t` | [`Mx3dGeTrsf`](Mx3dGeTrsf.md) | 另一个变换矩阵 |

#### Returns

`void`

___

### ScaleFactor

▸ **ScaleFactor**(): `number`

获取变换的缩放比例

#### Returns

`number`

缩放比例

___

### SetMirrorByAxis

▸ **SetMirrorByAxis**(`axis`): `void`

设置按照轴镜像变换

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `axis` | [`Mx3dGeAxis`](Mx3dGeAxis.md) | 镜像轴 |

#### Returns

`void`

___

### SetMirrorByCSYSR

▸ **SetMirrorByCSYSR**(`csysr`): `void`

设置按照坐标系镜像变换，镜像平面是坐标系的XOY平面

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `csysr` | [`Mx3dGeCSYSR`](Mx3dGeCSYSR.md) | 镜像坐标系 |

#### Returns

`void`

___

### SetMirrorByPoint

▸ **SetMirrorByPoint**(`point`): `void`

设置按照点镜像变换

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `point` | `UniPoint` | 镜像点 |

#### Returns

`void`

___

### SetRotation

▸ **SetRotation**(`axis`, `ang`): `void`

设置按照轴旋转一定角度的变换

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `axis` | [`Mx3dGeAxis`](Mx3dGeAxis.md) | 旋转轴 |
| `ang` | `number` | 旋转角度 |

#### Returns

`void`

___

### SetScale

▸ **SetScale**(`point`, `s`): `void`

设置按照点，以一定的比例进行缩放变换

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `point` | `UniPoint` | 缩放点 |
| `s` | `number` | 缩放比例 |

#### Returns

`void`

___

### SetScaleFactor

▸ **SetScaleFactor**(`s`): `void`

设置缩放比例

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `s` | `number` | 缩放比例 |

#### Returns

`void`

___

### SetTranslationBy2Points

▸ **SetTranslationBy2Points**(`point1`, `point2`): `void`

设置按照起点减去终点构成的向量的平移变换

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `point1` | `UniPoint` | 起点 |
| `point2` | `UniPoint` | 终点 |

#### Returns

`void`

___

### SetTranslationByVec

▸ **SetTranslationByVec**(`vec`): `void`

设置按照向量进行平移变换，移动的方向和距离分别是向量的方向和模长

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vec` | `UniVec` | 向量 |

#### Returns

`void`

___

### SetTranslationPart

▸ **SetTranslationPart**(`vec`): `void`

单独设置按照向量的平移变换

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vec` | [`Mx3dGeVec`](Mx3dGeVec.md) | 向量 |

#### Returns

`void`

___

### SetValues

▸ **SetValues**(`a11`, `a12`, `a13`, `a14`, `a21`, `a22`, `a23`, `a24`, `a31`, `a32`, `a33`, `a34`): `void`

设置除了平移变换的仿射变换矩阵

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a11` | `number` | 第1行第1列 |
| `a12` | `number` | 第1行第2列 |
| `a13` | `number` | 第1行第3列 |
| `a14` | `number` | 第1行第4列 |
| `a21` | `number` | 第2行第1列 |
| `a22` | `number` | 第2行第2列 |
| `a23` | `number` | 第2行第3列 |
| `a24` | `number` | 第2行第4列 |
| `a31` | `number` | 第3行第1列 |
| `a32` | `number` | 第3行第2列 |
| `a33` | `number` | 第3行第3列 |
| `a34` | `number` | 第3行第4列 |

#### Returns

`void`

___

### Transforms

▸ **Transforms**(`x`, `y`, `z`): `void`

对一个点用当前变换矩阵进行变换，参数是引用的，会被函数修改

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `z` | `number` |

#### Returns

`void`

___

### Value

▸ **Value**(`row`, `col`): `number`

获取变换矩阵中指定行列的元素值

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `row` | `number` | 行 |
| `col` | `number` | 列 |

#### Returns

`number`

元素值
