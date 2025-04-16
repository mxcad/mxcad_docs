[mxcad_3d API 文档](../README.md) / Mx3dView

# Class: Mx3dView

管理对象生命周期的基类

## Hierarchy

- [`Mx3dBaseObject`](Mx3dBaseObject.md)

  ↳ **`Mx3dView`**

## Table of contents

### Methods

- [addModelTexture](Mx3dView.md#addmodeltexture)
- [displayDimension](Mx3dView.md#displaydimension)
- [displaySymbolText](Mx3dView.md#displaysymboltext)
- [enableCustomClipPlane](Mx3dView.md#enablecustomclipplane)
- [enableDirLightSrc](Mx3dView.md#enabledirlightsrc)
- [enableXClipPlane](Mx3dView.md#enablexclipplane)
- [enableYClipPlane](Mx3dView.md#enableyclipplane)
- [enableZClipPlane](Mx3dView.md#enablezclipplane)
- [fitAllObjects](Mx3dView.md#fitallobjects)
- [getDocument](Mx3dView.md#getdocument)
- [removeAll](Mx3dView.md#removeall)
- [removeModelTexture](Mx3dView.md#removemodeltexture)
- [removeSelected](Mx3dView.md#removeselected)
- [setCubemapBackground](Mx3dView.md#setcubemapbackground)
- [setCustomClipPlaneDirection](Mx3dView.md#setcustomclipplanedirection)
- [setCustomClipPlanePosition](Mx3dView.md#setcustomclipplaneposition)
- [setCustomClipPlaneReverse](Mx3dView.md#setcustomclipplanereverse)
- [setDisplayMode](Mx3dView.md#setdisplaymode)
- [setGradientBgColor](Mx3dView.md#setgradientbgcolor)
- [setManipulatorEnabled](Mx3dView.md#setmanipulatorenabled)
- [setProj](Mx3dView.md#setproj)
- [setProjectionType](Mx3dView.md#setprojectiontype)
- [setSelectedColor](Mx3dView.md#setselectedcolor)
- [setSelectedMaterial](Mx3dView.md#setselectedmaterial)
- [setXClipPlaneReverse](Mx3dView.md#setxclipplanereverse)
- [setXClipPlaneXPosition](Mx3dView.md#setxclipplanexposition)
- [setYClipPlaneReverse](Mx3dView.md#setyclipplanereverse)
- [setYClipPlaneYPosition](Mx3dView.md#setyclipplaneyposition)
- [setZClipPlaneReverse](Mx3dView.md#setzclipplanereverse)
- [setZClipPlaneZPosition](Mx3dView.md#setzclipplanezposition)
- [showCenterTrihedron](Mx3dView.md#showcentertrihedron)
- [update](Mx3dView.md#update)

## Methods

### addModelTexture

▸ **addModelTexture**(`theFileName`): `void`

为当前选中对象设置纹理贴图

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theFileName` | `string` | 图片在文件系统中的完整路径 |

#### Returns

`void`

___

### displayDimension

▸ **displayDimension**(`theDimension`): `void`

显示标注符号

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theDimension` | [`Mx3dDimObject`](Mx3dDimObject.md) | 标注符号对象 |

#### Returns

`void`

___

### displaySymbolText

▸ **displaySymbolText**(`theSymbol`): `void`

显示文字符号

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theSymbol` | [`Mx3dSymbolText`](Mx3dSymbolText.md) | 文字符号对象 |

#### Returns

`void`

___

### enableCustomClipPlane

▸ **enableCustomClipPlane**(`theToEnabled`): `void`

开启/关闭用户自定义剖切面

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theToEnabled` | `boolean` | 是否开启用户自定义剖切面 |

#### Returns

`void`

___

### enableDirLightSrc

▸ **enableDirLightSrc**(`theToEnabled`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theToEnabled` | `boolean` |

#### Returns

`void`

___

### enableXClipPlane

▸ **enableXClipPlane**(`theToEnabled`): `void`

开启/关闭X轴剖切面

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theToEnabled` | `boolean` | 是否开启X轴剖切面 |

#### Returns

`void`

___

### enableYClipPlane

▸ **enableYClipPlane**(`theToEnabled`): `void`

开启/关闭Y轴剖切面

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theToEnabled` | `boolean` | 是否开启Y轴剖切面 |

#### Returns

`void`

___

### enableZClipPlane

▸ **enableZClipPlane**(`theToEnabled`): `void`

开启/关闭Z轴剖切面

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theToEnabled` | `boolean` | 是否开启Z轴剖切面 |

#### Returns

`void`

___

### fitAllObjects

▸ **fitAllObjects**(`theAuto`): `void`

视图中的所有对象缩放至适应整个视图

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theAuto` | `boolean` | 自动缩放 |

#### Returns

`void`

___

### getDocument

▸ **getDocument**(): [`Mx3dDbDocument`](Mx3dDbDocument.md)

获取当前文档视图对象的文档

#### Returns

[`Mx3dDbDocument`](Mx3dDbDocument.md)

返回文档对象

___

### removeAll

▸ **removeAll**(`theUpdateView?`): `void`

移除所有

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `theUpdateView` | `boolean` | `true` | 移除后是否立即更新视图 |

#### Returns

`void`

___

### removeModelTexture

▸ **removeModelTexture**(): `void`

移除当前选择对象的纹理贴图

#### Returns

`void`

___

### removeSelected

▸ **removeSelected**(): `void`

移除选中

#### Returns

`void`

___

### setCubemapBackground

▸ **setCubemapBackground**(`theRight`, `theLeft`, `theTop`, `theBottom`, `theFront`, `theBack`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theRight` | `string` |
| `theLeft` | `string` |
| `theTop` | `string` |
| `theBottom` | `string` |
| `theFront` | `string` |
| `theBack` | `string` |

#### Returns

`void`

___

### setCustomClipPlaneDirection

▸ **setCustomClipPlaneDirection**(`x`, `y`, `z`): `void`

设置用户自定义剖切面的法向

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | 法向的x分量 |
| `y` | `number` | 法向的y分量 |
| `z` | `number` | 法向的z分量 |

#### Returns

`void`

___

### setCustomClipPlanePosition

▸ **setCustomClipPlanePosition**(`thePosition`): `void`

设置用户自定义剖切面的位置

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `thePosition` | `number` | 剖切平面相对于世界坐标系原点的位置 |

#### Returns

`void`

___

### setCustomClipPlaneReverse

▸ **setCustomClipPlaneReverse**(): `void`

翻转用户自定义剖切面

#### Returns

`void`

___

### setDisplayMode

▸ **setDisplayMode**(`theMode`): `void`

设置当前的显示模式

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theMode` | [`MxGlobalDisplayMode`](../enums/MdGe.MxGlobalDisplayMode.md) | 显示模式 |

#### Returns

`void`

___

### setGradientBgColor

▸ **setGradientBgColor**(`theColor1`, `theColor2`, `theMethod`): `void`

设置渐变背景色

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theColor1` | [`Mx3dGeColor`](Mx3dGeColor.md) | 颜色对象1 |
| `theColor2` | [`Mx3dGeColor`](Mx3dGeColor.md) | 颜色对象2 |
| `theMethod` | [`MxGradientFillMethod`](../enums/MdGe.MxGradientFillMethod.md) | 渐变方式 |

#### Returns

`void`

___

### setManipulatorEnabled

▸ **setManipulatorEnabled**(`isEnabled`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `isEnabled` | `boolean` |

#### Returns

`void`

___

### setProj

▸ **setProj**(`theOrientation`, `theIsYup`): `void`

设置视图方向

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theOrientation` | [`MxV3dTypeOfOrientation`](../enums/MdGe.MxV3dTypeOfOrientation.md) | 视图方向 |
| `theIsYup` | `boolean` | 是否Y轴向上 |

#### Returns

`void`

___

### setProjectionType

▸ **setProjectionType**(`theProjection`): `void`

设置视图投影模式

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theProjection` | [`MxCameraProjection`](../enums/MdGe.MxCameraProjection.md) | 投影模式 |

#### Returns

`void`

___

### setSelectedColor

▸ **setSelectedColor**(`color`): `void`

设置当前选中对象的颜色

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`Mx3dGeColor`](Mx3dGeColor.md) | 颜色 |

#### Returns

`void`

___

### setSelectedMaterial

▸ **setSelectedMaterial**(`material`): `void`

设置选中对象的材质

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `material` | [`Mx3dGeMaterial`](Mx3dGeMaterial.md) | 材质 |

#### Returns

`void`

___

### setXClipPlaneReverse

▸ **setXClipPlaneReverse**(): `void`

翻转X轴剖切面

#### Returns

`void`

___

### setXClipPlaneXPosition

▸ **setXClipPlaneXPosition**(`thePosition`): `void`

设置X轴剖切面的位置

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `thePosition` | `number` | 剖切平面相对于世界坐标系原点的位置 |

#### Returns

`void`

___

### setYClipPlaneReverse

▸ **setYClipPlaneReverse**(): `void`

翻转Y轴剖切面

#### Returns

`void`

___

### setYClipPlaneYPosition

▸ **setYClipPlaneYPosition**(`thePosition`): `void`

设置Y轴剖切面的位置

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `thePosition` | `number` | 剖切平面相对于世界坐标系原点的位置 |

#### Returns

`void`

___

### setZClipPlaneReverse

▸ **setZClipPlaneReverse**(): `void`

翻转Z轴剖切面

#### Returns

`void`

___

### setZClipPlaneZPosition

▸ **setZClipPlaneZPosition**(`thePosition`): `void`

设置Z轴剖切面的位置

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `thePosition` | `number` | 剖切平面相对于世界坐标系原点的位置 |

#### Returns

`void`

___

### showCenterTrihedron

▸ **showCenterTrihedron**(`theToShow`): `void`

显示中心坐标轴

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theToShow` | `boolean` | true显示，false不显示 |

#### Returns

`void`

___

### update

▸ **update**(`isUpAllData?`, `isRemoveAll?`): `void`

更新显示

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `isUpAllData` | `boolean` | `true` | 是否更新所有数据 |
| `isRemoveAll` | `boolean` | `true` | 是否首先移除所有数据 |

#### Returns

`void`
