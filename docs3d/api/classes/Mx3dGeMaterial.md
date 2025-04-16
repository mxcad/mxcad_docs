[mxcad_3d API 文档](../README.md) / Mx3dGeMaterial

# Class: Mx3dGeMaterial

表示三维图形中的材料属性，封装了材料的各种属性和设置方法。

## Hierarchy

- [`Mx3dBaseObject`](Mx3dBaseObject.md)

  ↳ **`Mx3dGeMaterial`**

## Table of contents

### Constructors

- [constructor](Mx3dGeMaterial.md#constructor)

### Methods

- [Alpha](Mx3dGeMaterial.md#alpha)
- [AmbientColor](Mx3dGeMaterial.md#ambientcolor)
- [Color](Mx3dGeMaterial.md#color)
- [DiffuseColor](Mx3dGeMaterial.md#diffusecolor)
- [EmissiveColor](Mx3dGeMaterial.md#emissivecolor)
- [IncreaseShine](Mx3dGeMaterial.md#increaseshine)
- [IsDifferent](Mx3dGeMaterial.md#isdifferent)
- [IsEqual](Mx3dGeMaterial.md#isequal)
- [MaterialName](Mx3dGeMaterial.md#materialname)
- [MaterialType](Mx3dGeMaterial.md#materialtype)
- [Name](Mx3dGeMaterial.md#name)
- [ReflectionMode](Mx3dGeMaterial.md#reflectionmode)
- [RefractionIndex](Mx3dGeMaterial.md#refractionindex)
- [RequestedName](Mx3dGeMaterial.md#requestedname)
- [Reset](Mx3dGeMaterial.md#reset)
- [SetAlpha](Mx3dGeMaterial.md#setalpha)
- [SetAmbientColor](Mx3dGeMaterial.md#setambientcolor)
- [SetColor](Mx3dGeMaterial.md#setcolor)
- [SetDiffuseColor](Mx3dGeMaterial.md#setdiffusecolor)
- [SetEmissiveColor](Mx3dGeMaterial.md#setemissivecolor)
- [SetMaterialName](Mx3dGeMaterial.md#setmaterialname)
- [SetMaterialType](Mx3dGeMaterial.md#setmaterialtype)
- [SetRefractionIndex](Mx3dGeMaterial.md#setrefractionindex)
- [SetShininess](Mx3dGeMaterial.md#setshininess)
- [SetSpecularColor](Mx3dGeMaterial.md#setspecularcolor)
- [SetTransparency](Mx3dGeMaterial.md#settransparency)
- [Shininess](Mx3dGeMaterial.md#shininess)
- [SpecularColor](Mx3dGeMaterial.md#specularcolor)
- [StringName](Mx3dGeMaterial.md#stringname)
- [Transparency](Mx3dGeMaterial.md#transparency)

## Constructors

### constructor

• **new Mx3dGeMaterial**()

创建一个默认材料对象。

#### Overrides

Mx3dBaseObject.constructor

• **new Mx3dGeMaterial**(`theName`)

创建一个具有指定名称的材料对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theName` | [`MxNameOfMaterial`](../enums/MdGe.MxNameOfMaterial.md) | 材料名称，参见 MdGe.MxNameOfMaterial。 |

#### Overrides

Mx3dBaseObject.constructor

## Methods

### Alpha

▸ **Alpha**(): `number`

返回反透明度系数（0.0为完全透明，1.0为完全不透明）。

#### Returns

`number`

反透明度系数。

___

### AmbientColor

▸ **AmbientColor**(): [`Mx3dGeColor`](Mx3dGeColor.md)

返回环境光颜色。

#### Returns

[`Mx3dGeColor`](Mx3dGeColor.md)

环境光颜色。

___

### Color

▸ **Color**(): [`Mx3dGeColor`](Mx3dGeColor.md)

返回材料的颜色。

#### Returns

[`Mx3dGeColor`](Mx3dGeColor.md)

材料的颜色。

___

### DiffuseColor

▸ **DiffuseColor**(): [`Mx3dGeColor`](Mx3dGeColor.md)

返回漫反射颜色。

#### Returns

[`Mx3dGeColor`](Mx3dGeColor.md)

漫反射颜色。

___

### EmissiveColor

▸ **EmissiveColor**(): [`Mx3dGeColor`](Mx3dGeColor.md)

返回发光颜色。

#### Returns

[`Mx3dGeColor`](Mx3dGeColor.md)

发光颜色。

___

### IncreaseShine

▸ **IncreaseShine**(`theDelta`): `void`

增加光泽度。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theDelta` | `number` | 增加的百分比。 |

#### Returns

`void`

___

### IsDifferent

▸ **IsDifferent**(`theOther`): `boolean`

检查当前材料是否与另一个材料不同。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theOther` | [`Mx3dGeMaterial`](Mx3dGeMaterial.md) | 另一个材料对象。 |

#### Returns

`boolean`

如果当前材料与另一个材料不同，则返回 true，否则返回 false。

___

### IsEqual

▸ **IsEqual**(`theOther`): `boolean`

检查当前材料是否与另一个材料相等。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theOther` | [`Mx3dGeMaterial`](Mx3dGeMaterial.md) | 另一个材料对象。 |

#### Returns

`boolean`

如果当前材料与另一个材料相等，则返回 true，否则返回 false。

___

### MaterialName

▸ **MaterialName**(): `string`

返回材料的名称（字符串形式）。

#### Returns

`string`

材料的字符串名称。

___

### MaterialType

▸ **MaterialType**(): [`MxTypeOfMaterial`](../enums/MdGe.MxTypeOfMaterial.md)

返回材料类型。

#### Returns

[`MxTypeOfMaterial`](../enums/MdGe.MxTypeOfMaterial.md)

材料类型，参见 MdGe.MxTypeOfMaterial。

___

### Name

▸ **Name**(): [`MxNameOfMaterial`](../enums/MdGe.MxNameOfMaterial.md)

返回材料的名称。

#### Returns

[`MxNameOfMaterial`](../enums/MdGe.MxNameOfMaterial.md)

材料名称。

___

### ReflectionMode

▸ **ReflectionMode**(`theType`): `boolean`

检查指定类型的反射模式是否启用。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theType` | [`MxTypeOfReflection`](../enums/MdGe.MxTypeOfReflection.md) | 反射类型，参见 MdGe.MxTypeOfReflection。 |

#### Returns

`boolean`

如果指定类型的反射模式启用，则返回 true，否则返回 false。

___

### RefractionIndex

▸ **RefractionIndex**(): `number`

返回折射率。

#### Returns

`number`

折射率值。

___

### RequestedName

▸ **RequestedName**(): [`MxNameOfMaterial`](../enums/MdGe.MxNameOfMaterial.md)

返回请求的材料名称。

#### Returns

[`MxNameOfMaterial`](../enums/MdGe.MxNameOfMaterial.md)

请求的材料名称。

___

### Reset

▸ **Reset**(): `void`

重置材料属性为默认值。

#### Returns

`void`

___

### SetAlpha

▸ **SetAlpha**(`theValue`): `void`

设置反透明度系数。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theValue` | `number` | 反透明度系数（0.0至1.0）。 |

#### Returns

`void`

___

### SetAmbientColor

▸ **SetAmbientColor**(`theColor`): `void`

设置环境光颜色。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theColor` | [`Mx3dGeColor`](Mx3dGeColor.md) | 新的环境光颜色。 |

#### Returns

`void`

___

### SetColor

▸ **SetColor**(`theColor`): `void`

设置材料的颜色。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theColor` | [`Mx3dGeColor`](Mx3dGeColor.md) | 新的颜色。 |

#### Returns

`void`

___

### SetDiffuseColor

▸ **SetDiffuseColor**(`theColor`): `void`

设置漫反射颜色。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theColor` | [`Mx3dGeColor`](Mx3dGeColor.md) | 新的漫反射颜色。 |

#### Returns

`void`

___

### SetEmissiveColor

▸ **SetEmissiveColor**(`theColor`): `void`

设置发光颜色。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theColor` | [`Mx3dGeColor`](Mx3dGeColor.md) | 新的发光颜色。 |

#### Returns

`void`

___

### SetMaterialName

▸ **SetMaterialName**(`theName`): `void`

设置材料的名称。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theName` | `string` | 新的材料名称。 |

#### Returns

`void`

___

### SetMaterialType

▸ **SetMaterialType**(`theType`): `void`

设置材料类型。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theType` | [`MxTypeOfMaterial`](../enums/MdGe.MxTypeOfMaterial.md) | 新的材料类型，参见 MdGe.MxTypeOfMaterial。 |

#### Returns

`void`

___

### SetRefractionIndex

▸ **SetRefractionIndex**(`theValue`): `void`

设置折射率。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theValue` | `number` | 新的折射率值，必须大于等于1.0。 |

#### Returns

`void`

___

### SetShininess

▸ **SetShininess**(`theValue`): `void`

设置材料的光泽度。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theValue` | `number` | 新的光泽度值（通常在0到1之间）。 |

#### Returns

`void`

___

### SetSpecularColor

▸ **SetSpecularColor**(`theColor`): `void`

设置镜面反射颜色。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theColor` | [`Mx3dGeColor`](Mx3dGeColor.md) | 新的镜面反射颜色。 |

#### Returns

`void`

___

### SetTransparency

▸ **SetTransparency**(`theValue`): `void`

设置透明度系数。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theValue` | `number` | 透明度系数（0.0至1.0）。 |

#### Returns

`void`

___

### Shininess

▸ **Shininess**(): `number`

返回材料的光泽度。

#### Returns

`number`

光泽度值。

___

### SpecularColor

▸ **SpecularColor**(): [`Mx3dGeColor`](Mx3dGeColor.md)

返回镜面反射颜色。

#### Returns

[`Mx3dGeColor`](Mx3dGeColor.md)

镜面反射颜色。

___

### StringName

▸ **StringName**(): `string`

返回材料的字符串表示形式。

#### Returns

`string`

材料的字符串名称。

___

### Transparency

▸ **Transparency**(): `number`

返回透明度系数（0.0为完全透明，1.0为完全不透明）。

#### Returns

`number`

透明度系数。
