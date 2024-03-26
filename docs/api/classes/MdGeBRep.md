[mxcad API 文档](../README.md) / MdGeBRep

# Class: MdGeBRep

表示Brep工具

## Table of contents

### Constructors

- [constructor](MdGeBRep.md#constructor)

### Properties

- [imp](MdGeBRep.md#imp)

### Methods

- [AddClipPlane](MdGeBRep.md#addclipplane)
- [AddLight](MdGeBRep.md#addlight)
- [AddModelTexture](MdGeBRep.md#addmodeltexture)
- [ChangeSelectedColor](MdGeBRep.md#changeselectedcolor)
- [ChangeSelectedMaterial](MdGeBRep.md#changeselectedmaterial)
- [Continuity](MdGeBRep.md#continuity)
- [Degenerated](MdGeBRep.md#degenerated)
- [DeleteAllLights](MdGeBRep.md#deletealllights)
- [DisableAllLights](MdGeBRep.md#disablealllights)
- [DisableLight](MdGeBRep.md#disablelight)
- [EnableAllLights](MdGeBRep.md#enablealllights)
- [EnableLight](MdGeBRep.md#enablelight)
- [GetSelectedShapes](MdGeBRep.md#getselectedshapes)
- [HasContinuity](MdGeBRep.md#hascontinuity)
- [IsClosed](MdGeBRep.md#isclosed)
- [IsGeometric](MdGeBRep.md#isgeometric)
- [MaxContinuity](MdGeBRep.md#maxcontinuity)
- [MaxTolerance](MdGeBRep.md#maxtolerance)
- [NaturalRestriction](MdGeBRep.md#naturalrestriction)
- [OutputActiveLights](MdGeBRep.md#outputactivelights)
- [OutputDefinedLights](MdGeBRep.md#outputdefinedlights)
- [Parameter](MdGeBRep.md#parameter)
- [Pnt](MdGeBRep.md#pnt)
- [RemoveAllLights](MdGeBRep.md#removealllights)
- [RemoveModelTexture](MdGeBRep.md#removemodeltexture)
- [SameParameter](MdGeBRep.md#sameparameter)
- [SameRange](MdGeBRep.md#samerange)
- [SetAllLightsOff](MdGeBRep.md#setalllightsoff)
- [SetAllLightsOn](MdGeBRep.md#setalllightson)
- [SetLightOff](MdGeBRep.md#setlightoff)
- [SetLightOn](MdGeBRep.md#setlighton)
- [SetProj](MdGeBRep.md#setproj)
- [SetProjectionType](MdGeBRep.md#setprojectiontype)
- [Surface](MdGeBRep.md#surface)
- [Tolerance](MdGeBRep.md#tolerance)
- [getLabelAttributes](MdGeBRep.md#getlabelattributes)
- [openBrepFromUrl](MdGeBRep.md#openbrepfromurl)
- [openGltfFromUrl](MdGeBRep.md#opengltffromurl)
- [openGltfFromUrlByOCAF](MdGeBRep.md#opengltffromurlbyocaf)
- [openIgesFromUrl](MdGeBRep.md#openigesfromurl)
- [openIgesFromUrlByOCAF](MdGeBRep.md#openigesfromurlbyocaf)
- [openObjFromUrl](MdGeBRep.md#openobjfromurl)
- [openObjFromUrlByOCAF](MdGeBRep.md#openobjfromurlbyocaf)
- [openStepFromUrl](MdGeBRep.md#openstepfromurl)
- [openStepFromUrlByOCAF](MdGeBRep.md#openstepfromurlbyocaf)
- [openStlFromUrl](MdGeBRep.md#openstlfromurl)
- [openStlFromUrlByOCAF](MdGeBRep.md#openstlfromurlbyocaf)
- [openVrmlFromUrl](MdGeBRep.md#openvrmlfromurl)
- [openVrmlFromUrlByOCAF](MdGeBRep.md#openvrmlfromurlbyocaf)
- [refreshDocTree](MdGeBRep.md#refreshdoctree)
- [saveStepFile](MdGeBRep.md#savestepfile)

## Constructors

### constructor

• **new MdGeBRep**()

## Properties

### imp

• `Protected` **imp**: `any` = `0`

## Methods

### AddClipPlane

▸ **AddClipPlane**(`pln`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pln` | [`MdGePlane`](MdGePlane.md) |

#### Returns

`void`

___

### AddLight

▸ **AddLight**(`theLight`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theLight` | [`MdGeLight`](MdGeLight.md) |

#### Returns

`void`

___

### AddModelTexture

▸ **AddModelTexture**(`theFileName`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theFileName` | `string` |

#### Returns

`void`

___

### ChangeSelectedColor

▸ **ChangeSelectedColor**(`color`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [`MdGeColor`](MdGeColor.md) |

#### Returns

`void`

___

### ChangeSelectedMaterial

▸ **ChangeSelectedMaterial**(`material`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `material` | [`MdGeMaterialAspect`](MdGeMaterialAspect.md) |

#### Returns

`void`

___

### Continuity

▸ **Continuity**(`E`, `F1`, `F2`): [`MxGAShapeEnum`](../enums/MdGe.MxGAShapeEnum.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `E` | [`MdGeEdge`](MdGeEdge.md) |
| `F1` | [`MdGeFace`](MdGeFace.md) |
| `F2` | [`MdGeFace`](MdGeFace.md) |

#### Returns

[`MxGAShapeEnum`](../enums/MdGe.MxGAShapeEnum.md)

___

### Degenerated

▸ **Degenerated**(`E`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `E` | [`MdGeEdge`](MdGeEdge.md) |

#### Returns

`boolean`

___

### DeleteAllLights

▸ **DeleteAllLights**(): `void`

#### Returns

`void`

___

### DisableAllLights

▸ **DisableAllLights**(): `void`

#### Returns

`void`

___

### DisableLight

▸ **DisableLight**(`theName`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theName` | `string` |

#### Returns

`boolean`

___

### EnableAllLights

▸ **EnableAllLights**(): `void`

#### Returns

`void`

___

### EnableLight

▸ **EnableLight**(`theName`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theName` | `string` |

#### Returns

`boolean`

___

### GetSelectedShapes

▸ **GetSelectedShapes**(): [`MdGeListOfShape`](MdGeListOfShape.md)

#### Returns

[`MdGeListOfShape`](MdGeListOfShape.md)

___

### HasContinuity

▸ **HasContinuity**(`E`, `F1?`, `F2?`): `undefined` \| `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `E` | [`MdGeEdge`](MdGeEdge.md) |
| `F1?` | [`MdGeFace`](MdGeFace.md) |
| `F2?` | [`MdGeFace`](MdGeFace.md) |

#### Returns

`undefined` \| `boolean`

___

### IsClosed

▸ **IsClosed**(`p1`, `p2?`): `undefined` \| `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `p1` | [`MdGeShape`](MdGeShape.md) \| [`MdGeEdge`](MdGeEdge.md) |
| `p2?` | [`MdGeFace`](MdGeFace.md) |

#### Returns

`undefined` \| `boolean`

___

### IsGeometric

▸ **IsGeometric**(`F`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `F` | [`MdGeFace`](MdGeFace.md) |

#### Returns

`boolean`

___

### MaxContinuity

▸ **MaxContinuity**(`theEdge`): [`MxGAShapeEnum`](../enums/MdGe.MxGAShapeEnum.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theEdge` | [`MdGeEdge`](MdGeEdge.md) |

#### Returns

[`MxGAShapeEnum`](../enums/MdGe.MxGAShapeEnum.md)

___

### MaxTolerance

▸ **MaxTolerance**(`theShape`, `theSubShape`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theShape` | [`MdGeShape`](MdGeShape.md) |
| `theSubShape` | [`MxShapeEnum`](../enums/MdGe.MxShapeEnum.md) |

#### Returns

`number`

___

### NaturalRestriction

▸ **NaturalRestriction**(`F`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `F` | [`MdGeFace`](MdGeFace.md) |

#### Returns

`boolean`

___

### OutputActiveLights

▸ **OutputActiveLights**(): `void`

#### Returns

`void`

___

### OutputDefinedLights

▸ **OutputDefinedLights**(): `void`

#### Returns

`void`

___

### Parameter

▸ **Parameter**(`V`, `E`, `F?`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `V` | [`MdGeVertex`](MdGeVertex.md) |
| `E` | [`MdGeEdge`](MdGeEdge.md) |
| `F?` | [`MdGeFace`](MdGeFace.md) |

#### Returns

`number`

___

### Pnt

▸ **Pnt**(`V`): [`MdGePoint`](MdGePoint.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `V` | [`MdGeVertex`](MdGeVertex.md) |

#### Returns

[`MdGePoint`](MdGePoint.md)

___

### RemoveAllLights

▸ **RemoveAllLights**(): `void`

#### Returns

`void`

___

### RemoveModelTexture

▸ **RemoveModelTexture**(): `void`

#### Returns

`void`

___

### SameParameter

▸ **SameParameter**(`E`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `E` | [`MdGeEdge`](MdGeEdge.md) |

#### Returns

`boolean`

___

### SameRange

▸ **SameRange**(`E`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `E` | [`MdGeEdge`](MdGeEdge.md) |

#### Returns

`boolean`

___

### SetAllLightsOff

▸ **SetAllLightsOff**(): `void`

#### Returns

`void`

___

### SetAllLightsOn

▸ **SetAllLightsOn**(): `void`

#### Returns

`void`

___

### SetLightOff

▸ **SetLightOff**(`theName`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theName` | `string` |

#### Returns

`boolean`

___

### SetLightOn

▸ **SetLightOn**(`theName`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theName` | `string` |

#### Returns

`boolean`

___

### SetProj

▸ **SetProj**(`theOrientation`, `theIsYup`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theOrientation` | [`MxV3dTypeOfOrientation`](../enums/MdGe.MxV3dTypeOfOrientation.md) |
| `theIsYup` | `boolean` |

#### Returns

`void`

___

### SetProjectionType

▸ **SetProjectionType**(`theProjection`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theProjection` | [`MxCameraProjection`](../enums/MdGe.MxCameraProjection.md) |

#### Returns

`void`

___

### Surface

▸ **Surface**(`F`): [`MdGeHGeomSurface`](MdGeHGeomSurface.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `F` | [`MdGeFace`](MdGeFace.md) |

#### Returns

[`MdGeHGeomSurface`](MdGeHGeomSurface.md)

___

### Tolerance

▸ **Tolerance**(`F`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `F` | [`MdGeFace`](MdGeFace.md) |

#### Returns

`number`

___

### getLabelAttributes

▸ **getLabelAttributes**(`theEntry`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theEntry` | `string` |

#### Returns

`string`

___

### openBrepFromUrl

▸ **openBrepFromUrl**(`theModelPath`): [`MdGeShape`](MdGeShape.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theModelPath` | `string` |

#### Returns

[`MdGeShape`](MdGeShape.md)

___

### openGltfFromUrl

▸ **openGltfFromUrl**(`theModelPath`): [`MdGeShape`](MdGeShape.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theModelPath` | `string` |

#### Returns

[`MdGeShape`](MdGeShape.md)

___

### openGltfFromUrlByOCAF

▸ **openGltfFromUrlByOCAF**(`theModelPath`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theModelPath` | `string` |

#### Returns

`string`

___

### openIgesFromUrl

▸ **openIgesFromUrl**(`theModelPath`): [`MdGeShape`](MdGeShape.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theModelPath` | `string` |

#### Returns

[`MdGeShape`](MdGeShape.md)

___

### openIgesFromUrlByOCAF

▸ **openIgesFromUrlByOCAF**(`theModelPath`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theModelPath` | `string` |

#### Returns

`string`

___

### openObjFromUrl

▸ **openObjFromUrl**(`theModelPath`): [`MdGeShape`](MdGeShape.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theModelPath` | `string` |

#### Returns

[`MdGeShape`](MdGeShape.md)

___

### openObjFromUrlByOCAF

▸ **openObjFromUrlByOCAF**(`theModelPath`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theModelPath` | `string` |

#### Returns

`string`

___

### openStepFromUrl

▸ **openStepFromUrl**(`theModelPath`): [`MdGeShape`](MdGeShape.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theModelPath` | `string` |

#### Returns

[`MdGeShape`](MdGeShape.md)

___

### openStepFromUrlByOCAF

▸ **openStepFromUrlByOCAF**(`theModelPath`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theModelPath` | `string` |

#### Returns

`string`

___

### openStlFromUrl

▸ **openStlFromUrl**(`theModelPath`): [`MdGeShape`](MdGeShape.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theModelPath` | `string` |

#### Returns

[`MdGeShape`](MdGeShape.md)

___

### openStlFromUrlByOCAF

▸ **openStlFromUrlByOCAF**(`theModelPath`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theModelPath` | `string` |

#### Returns

`string`

___

### openVrmlFromUrl

▸ **openVrmlFromUrl**(`theModelPath`): [`MdGeShape`](MdGeShape.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theModelPath` | `string` |

#### Returns

[`MdGeShape`](MdGeShape.md)

___

### openVrmlFromUrlByOCAF

▸ **openVrmlFromUrlByOCAF**(`theModelPath`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theModelPath` | `string` |

#### Returns

`string`

___

### refreshDocTree

▸ **refreshDocTree**(): `string`

#### Returns

`string`

___

### saveStepFile

▸ **saveStepFile**(`fileName`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fileName` | `string` |

#### Returns

`void`
