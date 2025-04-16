[mxcad_3d API Document](../README. md)/Mx3dView

# Class: Mx3dView

Base class for managing the lifecycle of objects

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

Set texture mapping for the currently selected object

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheFileName | string | The complete path of the image in the file system|

#### Returns

`void`

___

### displayDimension

▸ **displayDimension**(`theDimension`): `void`

Display annotation symbols

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheDimension | [Mx3dDimObject] (Mx3dDimObject. md) | Annotation Symbol Object|

#### Returns

`void`

___

### displaySymbolText

▸ **displaySymbolText**(`theSymbol`): `void`

Display text symbols

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheSymbol | [Mx3dSymbolText] (Mx3dSymbolText. md) | Text symbol object|

#### Returns

`void`

___

### enableCustomClipPlane

▸ **enableCustomClipPlane**(`theToEnabled`): `void`

Enable/disable user-defined cutting surfaces

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|` theToEnabled ` | ` boolean ` | Whether to enable user-defined cutting planes|

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

Turn on/off the X-axis section plane

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|` theToEnabled ` | ` boolean ` | Whether to enable the X-axis section plane|

#### Returns

`void`

___

### enableYClipPlane

▸ **enableYClipPlane**(`theToEnabled`): `void`

Turn on/off Y-axis cutting plane

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|` theToEnabled ` | ` boolean ` | Whether to enable Y-axis cutting plane|

#### Returns

`void`

___

### enableZClipPlane

▸ **enableZClipPlane**(`theToEnabled`): `void`

Turn on/off Z-axis cutting plane

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|` theToEnabled ` | ` boolean ` | Whether to enable Z-axis cutting plane|

#### Returns

`void`

___

### fitAllObjects

▸ **fitAllObjects**(`theAuto`): `void`

Scale all objects in the view to fit the entire view

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheAuto | boolean | Auto scaling|

#### Returns

`void`

___

### getDocument

▸ **getDocument**(): [`Mx3dDbDocument`](Mx3dDbDocument.md)

Retrieve the document of the current document view object

#### Returns

[`Mx3dDbDocument`](Mx3dDbDocument.md)

Return document object

___

### removeAll

▸ **removeAll**(`theUpdateView?`): `void`

Remove all

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
|Update View | boolean | true | Update view immediately after removal|

#### Returns

`void`

___

### removeModelTexture

▸ **removeModelTexture**(): `void`

Remove the texture map of the currently selected object

#### Returns

`void`

___

### removeSelected

▸ **removeSelected**(): `void`

Remove Selection

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

Set the normal direction of user-defined cutting planes

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|X | number | normal x-component|
|Y | number | normal y-component|
|Z | number | normal z-component|

#### Returns

`void`

___

### setCustomClipPlanePosition

▸ **setCustomClipPlanePosition**(`thePosition`): `void`

Set the position of user-defined cutting planes

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|ThePosition | Number | The position of the cutting plane relative to the origin of the world coordinate system|

#### Returns

`void`

___

### setCustomClipPlaneReverse

▸ **setCustomClipPlaneReverse**(): `void`

Flip user-defined cutting surface

#### Returns

`void`

___

### setDisplayMode

▸ **setDisplayMode**(`theMode`): `void`

Set the current display mode

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheMode | [MxGlobalDisplay Mode] (../enums/MdGe. MxGlobalDisplay Mode. md) | Display Mode|

#### Returns

`void`

___

### setGradientBgColor

▸ **setGradientBgColor**(`theColor1`, `theColor2`, `theMethod`): `void`

Set gradient background color

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheColor1 | [Mx3dGeColor] (Mx3dGeColor. md) | Color Object 1|
|TheColor2 | [Mx3dGeColor] (Mx3dGeColor. md) | Color Object 2|
|TheMethod | [MxRadiantFillMethod] (../enums/MdGe. MxRadiantFillMethod. md) | Gradient Method|

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

Set view orientation

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|The Orientation | [MxV3dTypeOfOrientation] (../enums/MdGe. MxV3dTypeOfOrientation. md) | View Direction|
|TheIsYup | boolean | Is the Y-axis upward|

#### Returns

`void`

___

### setProjectionType

▸ **setProjectionType**(`theProjection`): `void`

Set the view projection mode

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|The Projection | [MxCameraProduction] (../enums/MdGe. MxCameraProduction. md) | Projection Mode|

#### Returns

`void`

___

### setSelectedColor

▸ **setSelectedColor**(`color`): `void`

Set the color of the currently selected object

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Color | [Mx3dGeColor] (Mx3dGeColor. md) | Color|

#### Returns

`void`

___

### setSelectedMaterial

▸ **setSelectedMaterial**(`material`): `void`

Set the material of the selected object

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Material | [Mx3dGeMaterial] (Mx3dGeMaterial. md) | Material|

#### Returns

`void`

___

### setXClipPlaneReverse

▸ **setXClipPlaneReverse**(): `void`

Flip the X-axis section plane

#### Returns

`void`

___

### setXClipPlaneXPosition

▸ **setXClipPlaneXPosition**(`thePosition`): `void`

Set the position of the X-axis cutting plane

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|ThePosition | Number | The position of the cutting plane relative to the origin of the world coordinate system|

#### Returns

`void`

___

### setYClipPlaneReverse

▸ **setYClipPlaneReverse**(): `void`

Flip the Y-axis section plane

#### Returns

`void`

___

### setYClipPlaneYPosition

▸ **setYClipPlaneYPosition**(`thePosition`): `void`

Set the position of the Y-axis cutting plane

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|ThePosition | Number | The position of the cutting plane relative to the origin of the world coordinate system|

#### Returns

`void`

___

### setZClipPlaneReverse

▸ **setZClipPlaneReverse**(): `void`

Flip the Z-axis section plane

#### Returns

`void`

___

### setZClipPlaneZPosition

▸ **setZClipPlaneZPosition**(`thePosition`): `void`

Set the position of the Z-axis cutting plane

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|ThePosition | Number | The position of the cutting plane relative to the origin of the world coordinate system|

#### Returns

`void`

___

### showCenterTrihedron

▸ **showCenterTrihedron**(`theToShow`): `void`

Display the central coordinate axis

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|` thetoShow ` | ` boolean ` | True displays, false does not display|

#### Returns

`void`

___

### update

▸ **update**(`isUpAllData?`, `isRemoveAll?`): `void`

update display

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
|IsUpAllData | boolean | true | Update all data|
|IsRemoveAll | boolean | true | Do you want to remove all data first|

#### Returns

`void`
