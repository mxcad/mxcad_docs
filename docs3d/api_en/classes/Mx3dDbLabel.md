[mxcad_3d API Document](../README. md)/Mx3dDbLabel

# Class: Mx3dDbLabel

The document tag class inherits from Mx3dDbObject and provides various operations on tags.

## Hierarchy

- [`Mx3dDbObject`](Mx3dDbObject.md)

  ↳ **`Mx3dDbLabel`**

## Table of contents

### Methods

- [addChildLabel](Mx3dDbLabel.md#addchildlabel)
- [addComponent](Mx3dDbLabel.md#addcomponent)
- [addSubShape](Mx3dDbLabel.md#addsubshape)
- [getAttributeStr](Mx3dDbLabel.md#getattributestr)
- [getChildLabels](Mx3dDbLabel.md#getchildlabels)
- [getColor](Mx3dDbLabel.md#getcolor)
- [getEntry](Mx3dDbLabel.md#getentry)
- [getLocation](Mx3dDbLabel.md#getlocation)
- [getName](Mx3dDbLabel.md#getname)
- [getParentLabel](Mx3dDbLabel.md#getparentlabel)
- [getReferredLabel](Mx3dDbLabel.md#getreferredlabel)
- [getShape](Mx3dDbLabel.md#getshape)
- [hasChildLabel](Mx3dDbLabel.md#haschildlabel)
- [hasParentLabel](Mx3dDbLabel.md#hasparentlabel)
- [hasShape](Mx3dDbLabel.md#hasshape)
- [isAssembly](Mx3dDbLabel.md#isassembly)
- [isComponent](Mx3dDbLabel.md#iscomponent)
- [isCompound](Mx3dDbLabel.md#iscompound)
- [isFree](Mx3dDbLabel.md#isfree)
- [isReference](Mx3dDbLabel.md#isreference)
- [isSetColor](Mx3dDbLabel.md#issetcolor)
- [isShape](Mx3dDbLabel.md#isshape)
- [isSimpleShape](Mx3dDbLabel.md#issimpleshape)
- [isSubShape](Mx3dDbLabel.md#issubshape)
- [isTopLevel](Mx3dDbLabel.md#istoplevel)
- [setColor](Mx3dDbLabel.md#setcolor)
- [setMaterial](Mx3dDbLabel.md#setmaterial)
- [setName](Mx3dDbLabel.md#setname)
- [setShape](Mx3dDbLabel.md#setshape)
- [setTexture](Mx3dDbLabel.md#settexture)

## Methods

### addChildLabel

▸ **addChildLabel**(): [`Mx3dDbLabel`](Mx3dDbLabel.md)

Add a sub tag.

#### Returns

[`Mx3dDbLabel`](Mx3dDbLabel.md)

Return the newly added sub label object.

___

### addComponent

▸ **addComponent**(`comp`, `Loc`): [`Mx3dDbLabel`](Mx3dDbLabel.md)

Add a component.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Comp | [Mx3dDbLabel] (Mx3dDbLabel. md) | Component label object|
|Loc | [Mx3dGeLocation] (Mx3dGeLocation. md) | Position object|

#### Returns

[`Mx3dDbLabel`](Mx3dDbLabel.md)

Return the added component label object.

___

### addSubShape

▸ **addSubShape**(`theShape`): [`Mx3dDbLabel`](Mx3dDbLabel.md)

Add a sub shape.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|The Shape | [Mx3dShapeObject] (Mx3dShapeObject. md) | Shape object|

#### Returns

[`Mx3dDbLabel`](Mx3dDbLabel.md)

Return the newly added sub label object.

___

### getAttributeStr

▸ **getAttributeStr**(): `string`

Get tag attribute string, JSON string.

#### Returns

`string`

Return the tag attribute string.

___

### getChildLabels

▸ **getChildLabels**(): [`Mx3dDbLabel`](Mx3dDbLabel.md)[]

Retrieve all sub tags.

#### Returns

[`Mx3dDbLabel`](Mx3dDbLabel.md)[]

Return an array of sub tags.

___

### getColor

▸ **getColor**(): [`Mx3dGeColor`](Mx3dGeColor.md)

Get the label color.

#### Returns

[`Mx3dGeColor`](Mx3dGeColor.md)

Return the color object.

___

### getEntry

▸ **getEntry**(): `string`

Retrieve a tag entry, which is a unique sequence of numerical characters.

#### Returns

`string`

Return the string of the label entry.

___

### getLocation

▸ **getLocation**(): [`Mx3dGeLocation`](Mx3dGeLocation.md)

Retrieve the location of the label.

#### Returns

[`Mx3dGeLocation`](Mx3dGeLocation.md)

Return the location object.

___

### getName

▸ **getName**(): `string`

Get the tag name.

#### Returns

`string`

Returns a string of tag names.

___

### getParentLabel

▸ **getParentLabel**(): [`Mx3dDbLabel`](Mx3dDbLabel.md)

Get the parent tag.

#### Returns

[`Mx3dDbLabel`](Mx3dDbLabel.md)

Return the parent label object.

___

### getReferredLabel

▸ **getReferredLabel**(): [`Mx3dDbLabel`](Mx3dDbLabel.md)

Retrieve the referenced label.

#### Returns

[`Mx3dDbLabel`](Mx3dDbLabel.md)

Return the referenced label object.

___

### getShape

▸ **getShape**(): [`Mx3dShapeObject`](Mx3dShapeObject.md)

Obtain the shape of the label.

#### Returns

[`Mx3dShapeObject`](Mx3dShapeObject.md)

Return the shape object.

___

### hasChildLabel

▸ **hasChildLabel**(): `boolean`

Check if the label has sub labels.

#### Returns

`boolean`

Return a Boolean value indicating whether there are sub labels.

___

### hasParentLabel

▸ **hasParentLabel**(): `boolean`

Check if the tag has a parent tag.

#### Returns

`boolean`

Returns a Boolean value indicating whether there is a parent label.

___

### hasShape

▸ **hasShape**(): `boolean`

Check if the label has a shape.

#### Returns

`boolean`

Returns a Boolean value indicating whether there is a shape.

___

### isAssembly

▸ **isAssembly**(): `boolean`

Check if the label is assembled.

#### Returns

`boolean`

Return a Boolean value indicating whether it is an assembly.

___

### isComponent

▸ **isComponent**(): `boolean`

Check if the label is a component.

#### Returns

`boolean`

Returns a Boolean value indicating whether it is a component.

___

### isCompound

▸ **isCompound**(): `boolean`

Check if the label is a composite shape.

#### Returns

`boolean`

Returns a Boolean value indicating whether it is a composite shape.

___

### isFree

▸ **isFree**(): `boolean`

Check if the label is a free label.

#### Returns

`boolean`

Returns a Boolean value indicating whether it is a free label.

___

### isReference

▸ **isReference**(): `boolean`

Check if the label is a reference.

#### Returns

`boolean`

Returns a Boolean value indicating whether it is a reference.

___

### isSetColor

▸ **isSetColor**(): `boolean`

Check if the label has set the color.

#### Returns

`boolean`

Returns a Boolean value indicating whether a color has been set.

___

### isShape

▸ **isShape**(): `boolean`

Check if the label is shaped.

#### Returns

`boolean`

Returns a Boolean value indicating whether it is a shape.

___

### isSimpleShape

▸ **isSimpleShape**(): `boolean`

Check if the label has a simple shape.

#### Returns

`boolean`

Returns a Boolean value indicating whether it is a simple shape.

___

### isSubShape

▸ **isSubShape**(): `boolean`

Check if the label is a sub shape.

#### Returns

`boolean`

Returns a Boolean value indicating whether it is a sub shape.

___

### isTopLevel

▸ **isTopLevel**(): `boolean`

Check if the label is a top-level label.

#### Returns

`boolean`

Returns a Boolean value indicating whether it is a top-level label.

___

### setColor

▸ **setColor**(`theColor`): `void`

Set label color.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheColor | [Mx3dGeColor] (Mx3dGeColor. md) | Color object|

#### Returns

`void`

___

### setMaterial

▸ **setMaterial**(`theMaterial`): `void`

Set the material for the label shape.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|The Material | [Mx3dGeMaterial. md] | Material object|

#### Returns

`void`

___

### setName

▸ **setName**(`theName`): `void`

Set the label name.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheName | string | Label name|

#### Returns

`void`

___

### setShape

▸ **setShape**(`theShape`): `void`

Set the shape of the label.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|The Shape | [Mx3dShapeObject] (Mx3dShapeObject. md) | Shape object|

#### Returns

`void`

___

### setTexture

▸ **setTexture**(`theFilePath`, `theScaleU?`, `theScaleV?`, `theRepeatU?`, `theRepeatV?`, `theOriginU?`, `theOriginV?`): `void`

Set the texture of the label shape.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
|TheFilePath | string | undefined | Texture file path|
|TheScaleU | number | 1 | U-direction scaling ratio, default value is 1|
|TheScaleV | number | 1 | V-direction scaling ratio, default value is 1|
|The RepeatU | number | 1 | number of repetitions in the U direction, with a default value of 1|
|The RepeatV | number | 1 | number of repetitions in the V direction, with a default value of 1|
|The OriginU | number | 0 | U direction starting position, default value is 0|
|The OriginV | number | 0 | starting position in the V direction, with a default value of 0|

#### Returns

`void`
