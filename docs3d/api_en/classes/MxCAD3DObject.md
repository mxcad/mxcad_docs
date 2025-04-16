[mxcad_3d API Document](../README. md)/MxCAD3DObject

# Class: MxCAD3DObject

Document View Object
A document view object corresponds to a Canvas view and a document

## Table of contents

### Constructors

- [constructor](MxCAD3DObject.md#constructor)

### Methods

- [addModelTexture](MxCAD3DObject.md#addmodeltexture)
- [callEvent](MxCAD3DObject.md#callevent)
- [create](MxCAD3DObject.md#create)
- [displayDimension](MxCAD3DObject.md#displaydimension)
- [displaySymbolText](MxCAD3DObject.md#displaysymboltext)
- [enableCustomClipPlane](MxCAD3DObject.md#enablecustomclipplane)
- [enableDirLightSrc](MxCAD3DObject.md#enabledirlightsrc)
- [enableXClipPlane](MxCAD3DObject.md#enablexclipplane)
- [enableYClipPlane](MxCAD3DObject.md#enableyclipplane)
- [enableZClipPlane](MxCAD3DObject.md#enablezclipplane)
- [fitAllObjects](MxCAD3DObject.md#fitallobjects)
- [getCtx](MxCAD3DObject.md#getctx)
- [getDocument](MxCAD3DObject.md#getdocument)
- [getImp](MxCAD3DObject.md#getimp)
- [init](MxCAD3DObject.md#init)
- [off](MxCAD3DObject.md#off)
- [on](MxCAD3DObject.md#on)
- [removeAll](MxCAD3DObject.md#removeall)
- [removeModelTexture](MxCAD3DObject.md#removemodeltexture)
- [removeSelected](MxCAD3DObject.md#removeselected)
- [setCubemapBackground](MxCAD3DObject.md#setcubemapbackground)
- [setCustomClipPlaneDirection](MxCAD3DObject.md#setcustomclipplanedirection)
- [setCustomClipPlanePosition](MxCAD3DObject.md#setcustomclipplaneposition)
- [setCustomClipPlaneReverse](MxCAD3DObject.md#setcustomclipplanereverse)
- [setDisplayMode](MxCAD3DObject.md#setdisplaymode)
- [setGradientBgColor](MxCAD3DObject.md#setgradientbgcolor)
- [setManipulatorEnabled](MxCAD3DObject.md#setmanipulatorenabled)
- [setProj](MxCAD3DObject.md#setproj)
- [setProjectionType](MxCAD3DObject.md#setprojectiontype)
- [setSelectedColor](MxCAD3DObject.md#setselectedcolor)
- [setSelectedMaterial](MxCAD3DObject.md#setselectedmaterial)
- [setXClipPlaneReverse](MxCAD3DObject.md#setxclipplanereverse)
- [setXClipPlaneXPosition](MxCAD3DObject.md#setxclipplanexposition)
- [setYClipPlaneReverse](MxCAD3DObject.md#setyclipplanereverse)
- [setYClipPlaneYPosition](MxCAD3DObject.md#setyclipplaneyposition)
- [setZClipPlaneReverse](MxCAD3DObject.md#setzclipplanereverse)
- [setZClipPlaneZPosition](MxCAD3DObject.md#setzclipplanezposition)
- [showCenterTrihedron](MxCAD3DObject.md#showcentertrihedron)
- [update](MxCAD3DObject.md#update)
- [updateCanvasSize](MxCAD3DObject.md#updatecanvassize)

## Constructors

### constructor

• **new MxCAD3DObject**()

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

### callEvent

▸ **callEvent**(`sEventName`, `param?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `sEventName` | `string` |
| `param?` | `any` |

#### Returns

`boolean`

___

### create

▸ **create**(`config`): `void`

Initialize the current document view object

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|` config ` | [` MxCAD3DConfig `] (../interfaces/MxCAD3DConfig. md) | Initialize the relevant configurations required. Canvas can be a selector string or a canvas object|

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

### getCtx

▸ **getCtx**(): `any`

#### Returns

`any`

___

### getDocument

▸ **getDocument**(): [`Mx3dDbDocument`](Mx3dDbDocument.md)

Retrieve the document of the current document view object

#### Returns

[`Mx3dDbDocument`](Mx3dDbDocument.md)

Return document object

___

### getImp

▸ **getImp**(): `any`

#### Returns

`any`

___

### init

▸ **init**(`imp`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `imp` | `any` |

#### Returns

`void`

___

### off

▸ **off**(`name`, `fun?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `fun?` | [`Function`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function ) |

#### Returns

`void`

___

### on

▸ **on**(`name`, `fun`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | ``"init"`` |
| `fun` | () => `void` |

#### Returns

`void`

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

___

### updateCanvasSize

▸ **updateCanvasSize**(): `void`

#### Returns

`void`
