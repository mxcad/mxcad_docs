[mxcad_3d API 文档](../README.md) / Mx3dGeColor

# Class: Mx3dGeColor

表示颜色对象的类。

## Hierarchy

- [`Mx3dBaseObject`](Mx3dBaseObject.md)

  ↳ **`Mx3dGeColor`**

## Table of contents

### Constructors

- [constructor](Mx3dGeColor.md#constructor)

### Methods

- [Blue](Mx3dGeColor.md#blue)
- [ChangeContrast](Mx3dGeColor.md#changecontrast)
- [ChangeIntensity](Mx3dGeColor.md#changeintensity)
- [DeltaE2000](Mx3dGeColor.md#deltae2000)
- [Distance](Mx3dGeColor.md#distance)
- [Green](Mx3dGeColor.md#green)
- [Hue](Mx3dGeColor.md#hue)
- [IsDifferent](Mx3dGeColor.md#isdifferent)
- [IsEqual](Mx3dGeColor.md#isequal)
- [Light](Mx3dGeColor.md#light)
- [Name](Mx3dGeColor.md#name)
- [Red](Mx3dGeColor.md#red)
- [Saturation](Mx3dGeColor.md#saturation)
- [SetValues](Mx3dGeColor.md#setvalues)
- [SquareDistance](Mx3dGeColor.md#squaredistance)

## Constructors

### constructor

• **new Mx3dGeColor**()

创建一个颜色对象。

#### Overrides

Mx3dBaseObject.constructor

• **new Mx3dGeColor**(`theColorName`)

使用颜色名称创建一个颜色对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theColorName` | [`MxNameOfColor`](../enums/MdGe.MxNameOfColor.md) | 颜色名称。 |

#### Overrides

Mx3dBaseObject.constructor

• **new Mx3dGeColor**(`theR`, `theG`, `theB`, `theType`)

使用 RGB 值和颜色类型创建一个颜色对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theR` | `number` | 红色分量。 |
| `theG` | `number` | 绿色分量。 |
| `theB` | `number` | 蓝色分量。 |
| `theType` | [`MxTypeOfColor`](../enums/MdGe.MxTypeOfColor.md) | 颜色类型。 |

#### Overrides

Mx3dBaseObject.constructor

## Methods

### Blue

▸ **Blue**(): `number`

获取蓝色分量的值。

#### Returns

`number`

蓝色分量。

___

### ChangeContrast

▸ **ChangeContrast**(`theDelta`): `void`

改变颜色的对比度。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theDelta` | `number` | 对比度变化量。 |

#### Returns

`void`

___

### ChangeIntensity

▸ **ChangeIntensity**(`theDelta`): `void`

改变颜色的强度。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theDelta` | `number` | 强度变化量。 |

#### Returns

`void`

___

### DeltaE2000

▸ **DeltaE2000**(`theOther`): `number`

计算颜色之间的 Delta E2000 差异。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theOther` | [`Mx3dGeColor`](Mx3dGeColor.md) | 另一个颜色对象。 |

#### Returns

`number`

Delta E2000 差异值。

___

### Distance

▸ **Distance**(`theColor`): `number`

计算颜色之间的距离。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theColor` | [`Mx3dGeColor`](Mx3dGeColor.md) | 另一个颜色对象。 |

#### Returns

`number`

颜色距离。

___

### Green

▸ **Green**(): `number`

获取绿色分量的值。

#### Returns

`number`

绿色分量。

___

### Hue

▸ **Hue**(): `number`

获取色调值。

#### Returns

`number`

色调值。

___

### IsDifferent

▸ **IsDifferent**(`theOther`): `boolean`

判断颜色是否不同。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theOther` | [`Mx3dGeColor`](Mx3dGeColor.md) | 另一个颜色对象。 |

#### Returns

`boolean`

是否不同。

___

### IsEqual

▸ **IsEqual**(`theOther`): `boolean`

判断颜色是否相同。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theOther` | [`Mx3dGeColor`](Mx3dGeColor.md) | 另一个颜色对象。 |

#### Returns

`boolean`

是否相同。

___

### Light

▸ **Light**(): `number`

获取亮度值。

#### Returns

`number`

亮度值。

___

### Name

▸ **Name**(): [`MxNameOfColor`](../enums/MdGe.MxNameOfColor.md)

获取颜色的名称。

#### Returns

[`MxNameOfColor`](../enums/MdGe.MxNameOfColor.md)

颜色名称。

___

### Red

▸ **Red**(): `number`

获取红色分量的值。

#### Returns

`number`

红色分量。

___

### Saturation

▸ **Saturation**(): `number`

获取饱和度值。

#### Returns

`number`

饱和度值。

___

### SetValues

▸ **SetValues**(`theName`): `void`

设置颜色的值。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theName` | [`MxNameOfColor`](../enums/MdGe.MxNameOfColor.md) | 颜色名称。 |

#### Returns

`void`

▸ **SetValues**(`theC1`, `theC2`, `theC3`, `theType`): `void`

设置颜色的值。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theC1` | `number` | 红色分量。 |
| `theC2` | `number` | 绿色分量。 |
| `theC3` | `number` | 蓝色分量。 |
| `theType` | [`MxTypeOfColor`](../enums/MdGe.MxTypeOfColor.md) | 颜色类型。 |

#### Returns

`void`

___

### SquareDistance

▸ **SquareDistance**(`theColor`): `number`

计算颜色之间的平方距离。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theColor` | [`Mx3dGeColor`](Mx3dGeColor.md) | 另一个颜色对象。 |

#### Returns

`number`

颜色平方距离。
