[mxcad_3d API Document](../README. md)/Mx3dGeMaterial

# Class: Mx3dGeMaterial

Representing material properties in 3D graphics, encapsulating various properties and setting methods of materials.

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

Create a default material object.

#### Overrides

Mx3dBaseObject.constructor

• **new Mx3dGeMaterial**(`theName`)

Create a material object with a specified name.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheName | [MxNameOfMaterial] (../enums/MdGe. MxNameOfMaterial. md) | Material name, see MdGe MxNameOfMaterial。 |

#### Overrides

Mx3dBaseObject.constructor

## Methods

### Alpha

▸ **Alpha**(): `number`

Return the opacity coefficient (0.0 is completely transparent, 1.0 is completely opaque).

#### Returns

`number`

Transparency coefficient.

___

### AmbientColor

▸ **AmbientColor**(): [`Mx3dGeColor`](Mx3dGeColor.md)

Return the ambient light color.

#### Returns

[`Mx3dGeColor`](Mx3dGeColor.md)

Environmental light color.

___

### Color

▸ **Color**(): [`Mx3dGeColor`](Mx3dGeColor.md)

Return the color of the material.

#### Returns

[`Mx3dGeColor`](Mx3dGeColor.md)

The color of the material.

___

### DiffuseColor

▸ **DiffuseColor**(): [`Mx3dGeColor`](Mx3dGeColor.md)

Return diffuse color.

#### Returns

[`Mx3dGeColor`](Mx3dGeColor.md)

Diffuse reflection color.

___

### EmissiveColor

▸ **EmissiveColor**(): [`Mx3dGeColor`](Mx3dGeColor.md)

Return the glowing color.

#### Returns

[`Mx3dGeColor`](Mx3dGeColor.md)

Luminous color.

___

### IncreaseShine

▸ **IncreaseShine**(`theDelta`): `void`

Increase glossiness.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|The Delta | number | percentage increase|

#### Returns

`void`

___

### IsDifferent

▸ **IsDifferent**(`theOther`): `boolean`

Check if the current material is different from another material.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheOther | [Mx3dGeMaterial. md] | Another material object|

#### Returns

`boolean`

If the current material is different from another material, return true; otherwise, return false.

___

### IsEqual

▸ **IsEqual**(`theOther`): `boolean`

Check if the current material is equal to another material.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheOther | [Mx3dGeMaterial. md] | Another material object|

#### Returns

`boolean`

If the current material is equal to another material, return true; otherwise, return false.

___

### MaterialName

▸ **MaterialName**(): `string`

Return the name of the material (in string form).

#### Returns

`string`

The string name of the material.

___

### MaterialType

▸ **MaterialType**(): [`MxTypeOfMaterial`](../enums/MdGe.MxTypeOfMaterial.md)

Return the material type.

#### Returns

[`MxTypeOfMaterial`](../enums/MdGe.MxTypeOfMaterial.md)

Material type, see MdGe MxTypeOfMaterial。

___

### Name

▸ **Name**(): [`MxNameOfMaterial`](../enums/MdGe.MxNameOfMaterial.md)

Return the name of the material.

#### Returns

[`MxNameOfMaterial`](../enums/MdGe.MxNameOfMaterial.md)

Material name.

___

### ReflectionMode

▸ **ReflectionMode**(`theType`): `boolean`

Check if the specified type of reflection mode is enabled.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheType | [MxTypeOfReflection] (../enums/MdGe. MxTypeOfReflection. md) | Reflection type, see MdGe MxTypeOfReflection。 |

#### Returns

`boolean`

If the reflection mode of the specified type is enabled, return true; otherwise, return false.

___

### RefractionIndex

▸ **RefractionIndex**(): `number`

Return refractive index.

#### Returns

`number`

Refractive index value.

___

### RequestedName

▸ **RequestedName**(): [`MxNameOfMaterial`](../enums/MdGe.MxNameOfMaterial.md)

Return the requested material name.

#### Returns

[`MxNameOfMaterial`](../enums/MdGe.MxNameOfMaterial.md)

The name of the requested material.

___

### Reset

▸ **Reset**(): `void`

Reset material properties to default values.

#### Returns

`void`

___

### SetAlpha

▸ **SetAlpha**(`theValue`): `void`

Set the opacity coefficient.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheValue | Number | Opacity coefficient (0.0 to 1.0)|

#### Returns

`void`

___

### SetAmbientColor

▸ **SetAmbientColor**(`theColor`): `void`

Set the ambient light color.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheColor | [Mx3dGeColor] (Mx3dGeColor. md) | New ambient light color|

#### Returns

`void`

___

### SetColor

▸ **SetColor**(`theColor`): `void`

Set the color of the material.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheColor | [Mx3dGeColor] (Mx3dGeColor. md) | New color|

#### Returns

`void`

___

### SetDiffuseColor

▸ **SetDiffuseColor**(`theColor`): `void`

Set diffuse reflection color.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheColor | [Mx3dGeColor] (Mx3dGeColor. md) | New diffuse color|

#### Returns

`void`

___

### SetEmissiveColor

▸ **SetEmissiveColor**(`theColor`): `void`

Set the glowing color.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheColor | [Mx3dGeColor] (Mx3dGeColor. md) | New glowing color|

#### Returns

`void`

___

### SetMaterialName

▸ **SetMaterialName**(`theName`): `void`

Set the name of the material.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheName | String | New material name|

#### Returns

`void`

___

### SetMaterialType

▸ **SetMaterialType**(`theType`): `void`

Set the material type.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheType | [MxTypeOfMaterial] (../enums/MdGe. MxTypeOfMaterial. md) | New material types, see MdGe MxTypeOfMaterial。 |

#### Returns

`void`

___

### SetRefractionIndex

▸ **SetRefractionIndex**(`theValue`): `void`

Set the refractive index.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheValue | Number | The new refractive index value must be greater than or equal to 1.0|

#### Returns

`void`

___

### SetShininess

▸ **SetShininess**(`theValue`): `void`

Set the glossiness of the material.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheValue | Number | New glossiness value (usually between 0 and 1)|

#### Returns

`void`

___

### SetSpecularColor

▸ **SetSpecularColor**(`theColor`): `void`

Set the specular reflection color.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheColor | [Mx3dGeColor] (Mx3dGeColor. md) | New specular reflection color|

#### Returns

`void`

___

### SetTransparency

▸ **SetTransparency**(`theValue`): `void`

Set the transparency coefficient.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheValue | Number | Transparency coefficient (0.0 to 1.0)|

#### Returns

`void`

___

### Shininess

▸ **Shininess**(): `number`

Return the glossiness of the material.

#### Returns

`number`

Glossiness value.

___

### SpecularColor

▸ **SpecularColor**(): [`Mx3dGeColor`](Mx3dGeColor.md)

Return the specular reflection color.

#### Returns

[`Mx3dGeColor`](Mx3dGeColor.md)

Mirror reflection color.

___

### StringName

▸ **StringName**(): `string`

Return the string representation of the material.

#### Returns

`string`

The string name of the material.

___

### Transparency

▸ **Transparency**(): `number`

Return the transparency coefficient (0.0 is completely transparent, 1.0 is completely opaque).

#### Returns

`number`

Transparency coefficient.
