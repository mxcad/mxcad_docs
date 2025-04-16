[mxcad_3d API 文档](../README.md) / Mx3dAspectLine

# Class: Mx3dAspectLine

表示线样式。

## Hierarchy

- [`Mx3dAspectObject`](Mx3dAspectObject.md)

  ↳ **`Mx3dAspectLine`**

## Table of contents

### Constructors

- [constructor](Mx3dAspectLine.md#constructor)

### Methods

- [SetColor](Mx3dAspectLine.md#setcolor)
- [SetTypeOfLine](Mx3dAspectLine.md#settypeofline)
- [SetWidth](Mx3dAspectLine.md#setwidth)

## Constructors

### constructor

• **new Mx3dAspectLine**(`theColor`, `theType`, `theWidth`)

构造函数，创建一个指定颜色，线型，线宽的线样式对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theColor` | [`Mx3dGeColor`](Mx3dGeColor.md) | 颜色。 |
| `theType` | [`MxTypeOfLine`](../enums/MdGe.MxTypeOfLine.md) | 线型。 |
| `theWidth` | `number` | 线宽。 |

#### Overrides

Mx3dAspectObject.constructor

## Methods

### SetColor

▸ **SetColor**(`theColor`): `void`

设置线样式对象的颜色。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theColor` | [`Mx3dGeColor`](Mx3dGeColor.md) | 要设置的颜色对象（Mx3dGeColor）。 |

#### Returns

`void`

___

### SetTypeOfLine

▸ **SetTypeOfLine**(`theType`): `void`

设置线样式对象的线型。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theType` | [`MxTypeOfLine`](../enums/MdGe.MxTypeOfLine.md) | 线型。 |

#### Returns

`void`

___

### SetWidth

▸ **SetWidth**(`theWidth`): `void`

设置线样式对象的线宽。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theWidth` | `number` | 线宽。 |

#### Returns

`void`
