[mxcad_3d API 文档](../README.md) / Mx3dDbLabel

# Class: Mx3dDbLabel

文档标签类，继承自 Mx3dDbObject，提供对标签的各种操作。

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

添加一个子标签。

#### Returns

[`Mx3dDbLabel`](Mx3dDbLabel.md)

返回新增的子标签对象。

___

### addComponent

▸ **addComponent**(`comp`, `Loc`): [`Mx3dDbLabel`](Mx3dDbLabel.md)

添加一个组件。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `comp` | [`Mx3dDbLabel`](Mx3dDbLabel.md) | 组件标签对象。 |
| `Loc` | [`Mx3dGeLocation`](Mx3dGeLocation.md) | 位置对象。 |

#### Returns

[`Mx3dDbLabel`](Mx3dDbLabel.md)

返回添加的组件标签对象。

___

### addSubShape

▸ **addSubShape**(`theShape`): [`Mx3dDbLabel`](Mx3dDbLabel.md)

添加一个子形状。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theShape` | [`Mx3dShapeObject`](Mx3dShapeObject.md) | 形状对象。 |

#### Returns

[`Mx3dDbLabel`](Mx3dDbLabel.md)

返回新增的子标签对象。

___

### getAttributeStr

▸ **getAttributeStr**(): `string`

获取标签属性字符串，JSON字符串。

#### Returns

`string`

返回标签属性字符串。

___

### getChildLabels

▸ **getChildLabels**(): [`Mx3dDbLabel`](Mx3dDbLabel.md)[]

获取所有子标签。

#### Returns

[`Mx3dDbLabel`](Mx3dDbLabel.md)[]

返回子标签的数组。

___

### getColor

▸ **getColor**(): [`Mx3dGeColor`](Mx3dGeColor.md)

获取标签颜色。

#### Returns

[`Mx3dGeColor`](Mx3dGeColor.md)

返回颜色对象。

___

### getEntry

▸ **getEntry**(): `string`

获取标签条目，是一个唯一的数字字符序列。

#### Returns

`string`

返回标签条目的字符串。

___

### getLocation

▸ **getLocation**(): [`Mx3dGeLocation`](Mx3dGeLocation.md)

获取标签的位置。

#### Returns

[`Mx3dGeLocation`](Mx3dGeLocation.md)

返回位置对象。

___

### getName

▸ **getName**(): `string`

获取标签名称。

#### Returns

`string`

返回标签名称的字符串。

___

### getParentLabel

▸ **getParentLabel**(): [`Mx3dDbLabel`](Mx3dDbLabel.md)

获取父标签。

#### Returns

[`Mx3dDbLabel`](Mx3dDbLabel.md)

返回父标签对象。

___

### getReferredLabel

▸ **getReferredLabel**(): [`Mx3dDbLabel`](Mx3dDbLabel.md)

获取引用的标签。

#### Returns

[`Mx3dDbLabel`](Mx3dDbLabel.md)

返回引用的标签对象。

___

### getShape

▸ **getShape**(): [`Mx3dShapeObject`](Mx3dShapeObject.md)

获取标签的形状。

#### Returns

[`Mx3dShapeObject`](Mx3dShapeObject.md)

返回形状对象。

___

### hasChildLabel

▸ **hasChildLabel**(): `boolean`

检查标签是否有子标签。

#### Returns

`boolean`

返回布尔值，表示是否有子标签。

___

### hasParentLabel

▸ **hasParentLabel**(): `boolean`

检查标签是否有父标签。

#### Returns

`boolean`

返回布尔值，表示是否有父标签。

___

### hasShape

▸ **hasShape**(): `boolean`

检查标签是否有形状。

#### Returns

`boolean`

返回布尔值，表示是否有形状。

___

### isAssembly

▸ **isAssembly**(): `boolean`

检查标签是否是装配。

#### Returns

`boolean`

返回布尔值，表示是否是装配。

___

### isComponent

▸ **isComponent**(): `boolean`

检查标签是否是组件。

#### Returns

`boolean`

返回布尔值，表示是否是组件。

___

### isCompound

▸ **isCompound**(): `boolean`

检查标签是否是复合形状。

#### Returns

`boolean`

返回布尔值，表示是否是复合形状。

___

### isFree

▸ **isFree**(): `boolean`

检查标签是否是自由标签。

#### Returns

`boolean`

返回布尔值，表示是否是自由标签。

___

### isReference

▸ **isReference**(): `boolean`

检查标签是否是引用。

#### Returns

`boolean`

返回布尔值，表示是否是引用。

___

### isSetColor

▸ **isSetColor**(): `boolean`

检查标签是否设置了颜色。

#### Returns

`boolean`

返回布尔值，表示是否设置了颜色。

___

### isShape

▸ **isShape**(): `boolean`

检查标签是否是形状。

#### Returns

`boolean`

返回布尔值，表示是否是形状。

___

### isSimpleShape

▸ **isSimpleShape**(): `boolean`

检查标签是否是简单形状。

#### Returns

`boolean`

返回布尔值，表示是否是简单形状。

___

### isSubShape

▸ **isSubShape**(): `boolean`

检查标签是否是子形状。

#### Returns

`boolean`

返回布尔值，表示是否是子形状。

___

### isTopLevel

▸ **isTopLevel**(): `boolean`

检查标签是否是顶级标签。

#### Returns

`boolean`

返回布尔值，表示是否是顶级标签。

___

### setColor

▸ **setColor**(`theColor`): `void`

设置标签颜色。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theColor` | [`Mx3dGeColor`](Mx3dGeColor.md) | 颜色对象。 |

#### Returns

`void`

___

### setMaterial

▸ **setMaterial**(`theMaterial`): `void`

设置标签形状的材质。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theMaterial` | [`Mx3dGeMaterial`](Mx3dGeMaterial.md) | 材质对象。 |

#### Returns

`void`

___

### setName

▸ **setName**(`theName`): `void`

设置标签名称。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theName` | `string` | 标签名称。 |

#### Returns

`void`

___

### setShape

▸ **setShape**(`theShape`): `void`

设置标签的形状。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theShape` | [`Mx3dShapeObject`](Mx3dShapeObject.md) | 形状对象。 |

#### Returns

`void`

___

### setTexture

▸ **setTexture**(`theFilePath`, `theScaleU?`, `theScaleV?`, `theRepeatU?`, `theRepeatV?`, `theOriginU?`, `theOriginV?`): `void`

设置标签形状的纹理。

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `theFilePath` | `string` | `undefined` | 纹理文件路径。 |
| `theScaleU` | `number` | `1` | U 方向缩放比例，默认值为 1。 |
| `theScaleV` | `number` | `1` | V 方向缩放比例，默认值为 1。 |
| `theRepeatU` | `number` | `1` | U 方向重复次数，默认值为 1。 |
| `theRepeatV` | `number` | `1` | V 方向重复次数，默认值为 1。 |
| `theOriginU` | `number` | `0` | U 方向起始位置，默认值为 0。 |
| `theOriginV` | `number` | `0` | V 方向起始位置，默认值为 0。 |

#### Returns

`void`
