[mxcad API 文档](../README.md) / MdGeMaterialAspect

# Class: MdGeMaterialAspect

表示材质

## Hierarchy

- [`MdGeObject`](MdGeObject.md)

  ↳ **`MdGeMaterialAspect`**

## Table of contents

### Constructors

- [constructor](MdGeMaterialAspect.md#constructor)

### Properties

- [imp](MdGeMaterialAspect.md#imp)

### Methods

- [Alpha](MdGeMaterialAspect.md#alpha)
- [AmbientColor](MdGeMaterialAspect.md#ambientcolor)
- [Color](MdGeMaterialAspect.md#color)
- [DiffuseColor](MdGeMaterialAspect.md#diffusecolor)
- [EmissiveColor](MdGeMaterialAspect.md#emissivecolor)
- [IncreaseShine](MdGeMaterialAspect.md#increaseshine)
- [IsDifferent](MdGeMaterialAspect.md#isdifferent)
- [IsEqual](MdGeMaterialAspect.md#isequal)
- [MaterialFromName](MdGeMaterialAspect.md#materialfromname)
- [MaterialName](MdGeMaterialAspect.md#materialname)
- [MaterialType](MdGeMaterialAspect.md#materialtype)
- [Name](MdGeMaterialAspect.md#name)
- [NumberOfMaterials](MdGeMaterialAspect.md#numberofmaterials)
- [ReflectionMode](MdGeMaterialAspect.md#reflectionmode)
- [RefractionIndex](MdGeMaterialAspect.md#refractionindex)
- [RequestedName](MdGeMaterialAspect.md#requestedname)
- [Reset](MdGeMaterialAspect.md#reset)
- [SetAlpha](MdGeMaterialAspect.md#setalpha)
- [SetAmbientColor](MdGeMaterialAspect.md#setambientcolor)
- [SetColor](MdGeMaterialAspect.md#setcolor)
- [SetDiffuseColor](MdGeMaterialAspect.md#setdiffusecolor)
- [SetEmissiveColor](MdGeMaterialAspect.md#setemissivecolor)
- [SetMaterialName](MdGeMaterialAspect.md#setmaterialname)
- [SetMaterialType](MdGeMaterialAspect.md#setmaterialtype)
- [SetRefractionIndex](MdGeMaterialAspect.md#setrefractionindex)
- [SetShininess](MdGeMaterialAspect.md#setshininess)
- [SetSpecularColor](MdGeMaterialAspect.md#setspecularcolor)
- [SetTransparency](MdGeMaterialAspect.md#settransparency)
- [Shininess](MdGeMaterialAspect.md#shininess)
- [SpecularColor](MdGeMaterialAspect.md#specularcolor)
- [Transparency](MdGeMaterialAspect.md#transparency)
- [getImp](MdGeMaterialAspect.md#getimp)
- [initTempObject](MdGeMaterialAspect.md#inittempobject)

## Constructors

### constructor

• **new MdGeMaterialAspect**(`p?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `p?` | `object` \| [`MxNameOfMaterial`](../enums/MdGe.MxNameOfMaterial.md) |

#### Overrides

[MdGeObject](MdGeObject.md).[constructor](MdGeObject.md#constructor)

## Properties

### imp

• `Protected` **imp**: `any` = `0`

#### Inherited from

[MdGeObject](MdGeObject.md).[imp](MdGeObject.md#imp)

## Methods

### Alpha

▸ **Alpha**(): `number`

#### Returns

`number`

___

### AmbientColor

▸ **AmbientColor**(): [`MdGeColor`](MdGeColor.md)

#### Returns

[`MdGeColor`](MdGeColor.md)

___

### Color

▸ **Color**(): [`MdGeColor`](MdGeColor.md)

#### Returns

[`MdGeColor`](MdGeColor.md)

___

### DiffuseColor

▸ **DiffuseColor**(): [`MdGeColor`](MdGeColor.md)

#### Returns

[`MdGeColor`](MdGeColor.md)

___

### EmissiveColor

▸ **EmissiveColor**(): [`MdGeColor`](MdGeColor.md)

#### Returns

[`MdGeColor`](MdGeColor.md)

___

### IncreaseShine

▸ **IncreaseShine**(`theDelta`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theDelta` | `number` |

#### Returns

`void`

___

### IsDifferent

▸ **IsDifferent**(`theOther`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theOther` | [`MdGeMaterialAspect`](MdGeMaterialAspect.md) |

#### Returns

`boolean`

___

### IsEqual

▸ **IsEqual**(`theOther`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theOther` | [`MdGeMaterialAspect`](MdGeMaterialAspect.md) |

#### Returns

`boolean`

___

### MaterialFromName

▸ **MaterialFromName**(`theName`): [`MxNameOfMaterial`](../enums/MdGe.MxNameOfMaterial.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theName` | `string` |

#### Returns

[`MxNameOfMaterial`](../enums/MdGe.MxNameOfMaterial.md)

___

### MaterialName

▸ **MaterialName**(): `string`

#### Returns

`string`

___

### MaterialType

▸ **MaterialType**(): [`MxTypeOfMaterial`](../enums/MdGe.MxTypeOfMaterial.md)

#### Returns

[`MxTypeOfMaterial`](../enums/MdGe.MxTypeOfMaterial.md)

___

### Name

▸ **Name**(): [`MxNameOfMaterial`](../enums/MdGe.MxNameOfMaterial.md)

#### Returns

[`MxNameOfMaterial`](../enums/MdGe.MxNameOfMaterial.md)

___

### NumberOfMaterials

▸ **NumberOfMaterials**(): `number`

#### Returns

`number`

___

### ReflectionMode

▸ **ReflectionMode**(`theType`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theType` | [`MxTypeOfReflection`](../enums/MdGe.MxTypeOfReflection.md) |

#### Returns

`boolean`

___

### RefractionIndex

▸ **RefractionIndex**(): `number`

#### Returns

`number`

___

### RequestedName

▸ **RequestedName**(): [`MxNameOfMaterial`](../enums/MdGe.MxNameOfMaterial.md)

#### Returns

[`MxNameOfMaterial`](../enums/MdGe.MxNameOfMaterial.md)

___

### Reset

▸ **Reset**(): `void`

#### Returns

`void`

___

### SetAlpha

▸ **SetAlpha**(`theValue`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theValue` | `number` |

#### Returns

`void`

___

### SetAmbientColor

▸ **SetAmbientColor**(`theColor`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theColor` | [`MdGeColor`](MdGeColor.md) |

#### Returns

`void`

___

### SetColor

▸ **SetColor**(`theColor`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theColor` | [`MdGeColor`](MdGeColor.md) |

#### Returns

`void`

___

### SetDiffuseColor

▸ **SetDiffuseColor**(`theColor`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theColor` | [`MdGeColor`](MdGeColor.md) |

#### Returns

`void`

___

### SetEmissiveColor

▸ **SetEmissiveColor**(`theColor`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theColor` | [`MdGeColor`](MdGeColor.md) |

#### Returns

`void`

___

### SetMaterialName

▸ **SetMaterialName**(`theName`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theName` | `string` |

#### Returns

`void`

___

### SetMaterialType

▸ **SetMaterialType**(`theType`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theType` | [`MxTypeOfMaterial`](../enums/MdGe.MxTypeOfMaterial.md) |

#### Returns

`void`

___

### SetRefractionIndex

▸ **SetRefractionIndex**(`theValue`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theValue` | `number` |

#### Returns

`void`

___

### SetShininess

▸ **SetShininess**(`theValue`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theValue` | `number` |

#### Returns

`void`

___

### SetSpecularColor

▸ **SetSpecularColor**(`theColor`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theColor` | [`MdGeColor`](MdGeColor.md) |

#### Returns

`void`

___

### SetTransparency

▸ **SetTransparency**(`theValue`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theValue` | `number` |

#### Returns

`void`

___

### Shininess

▸ **Shininess**(): `number`

#### Returns

`number`

___

### SpecularColor

▸ **SpecularColor**(): [`MdGeColor`](MdGeColor.md)

#### Returns

[`MdGeColor`](MdGeColor.md)

___

### Transparency

▸ **Transparency**(): `number`

#### Returns

`number`

___

### getImp

▸ **getImp**(): `any`

#### Returns

`any`

#### Inherited from

[MdGeObject](MdGeObject.md).[getImp](MdGeObject.md#getimp)

___

### initTempObject

▸ `Protected` **initTempObject**(`imp`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `imp` | `any` |

#### Returns

`void`

#### Inherited from

[MdGeObject](MdGeObject.md).[initTempObject](MdGeObject.md#inittempobject)
