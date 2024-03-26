[mxcad API 文档](../README.md) / MdGeObject

# Class: MdGeObject

所有类的父类， 除去MdGeTopo以及MdGeBrep

## Hierarchy

- **`MdGeObject`**

  ↳ [`MdGeShape`](MdGeShape.md)

  ↳ [`MdGeMat`](MdGeMat.md)

  ↳ [`MdGeXYZ`](MdGeXYZ.md)

  ↳ [`MdGeTrsf`](MdGeTrsf.md)

  ↳ [`MdGeDir`](MdGeDir.md)

  ↳ [`MdGeAxis`](MdGeAxis.md)

  ↳ [`MdGeCSYSR`](MdGeCSYSR.md)

  ↳ [`MdGePoint`](MdGePoint.md)

  ↳ [`MdGeVec`](MdGeVec.md)

  ↳ [`MdGeAngleDim`](MdGeAngleDim.md)

  ↳ [`MdGeArray1OfInteger`](MdGeArray1OfInteger.md)

  ↳ [`MdGeArray1OfPnt`](MdGeArray1OfPnt.md)

  ↳ [`MdGeArray1OfReal`](MdGeArray1OfReal.md)

  ↳ [`MdGeArray2OfPnt`](MdGeArray2OfPnt.md)

  ↳ [`MdGeArray2OfReal`](MdGeArray2OfReal.md)

  ↳ [`MdGeBezierCurve`](MdGeBezierCurve.md)

  ↳ [`MdGeBezierSurface`](MdGeBezierSurface.md)

  ↳ [`MdGeChamfer`](MdGeChamfer.md)

  ↳ [`MdGeCircle`](MdGeCircle.md)

  ↳ [`MdGeCSYS`](MdGeCSYS.md)

  ↳ [`MdGeCone`](MdGeCone.md)

  ↳ [`MdGeCylinder`](MdGeCylinder.md)

  ↳ [`MdGePlane`](MdGePlane.md)

  ↳ [`MdGeDiameterDim`](MdGeDiameterDim.md)

  ↳ [`MdGeEllipse`](MdGeEllipse.md)

  ↳ [`MdGeExplorer`](MdGeExplorer.md)

  ↳ [`MdGeFillet`](MdGeFillet.md)

  ↳ [`MdGeHypr`](MdGeHypr.md)

  ↳ [`MdGeBox`](MdGeBox.md)

  ↳ [`MdGeBSplineCurve`](MdGeBSplineCurve.md)

  ↳ [`MdGeBSplineSurface`](MdGeBSplineSurface.md)

  ↳ [`MdGeInterpolateBSpl`](MdGeInterpolateBSpl.md)

  ↳ [`MdGeLengthDim`](MdGeLengthDim.md)

  ↳ [`MdGeLine`](MdGeLine.md)

  ↳ [`MdGeListIteratorOfListOfShape`](MdGeListIteratorOfListOfShape.md)

  ↳ [`MdGeListOfShape`](MdGeListOfShape.md)

  ↳ [`MdGeLoft`](MdGeLoft.md)

  ↳ [`MdGeMakeThickSolid`](MdGeMakeThickSolid.md)

  ↳ [`MdGeParab`](MdGeParab.md)

  ↳ [`MdGePipe`](MdGePipe.md)

  ↳ [`MdGePointsToBSpl`](MdGePointsToBSpl.md)

  ↳ [`MdGePointsToBSplSurface`](MdGePointsToBSplSurface.md)

  ↳ [`MdGePrism`](MdGePrism.md)

  ↳ [`MdGeRadiusDim`](MdGeRadiusDim.md)

  ↳ [`MdGeRect`](MdGeRect.md)

  ↳ [`MdGeRevol`](MdGeRevol.md)

  ↳ [`MdGeSphere`](MdGeSphere.md)

  ↳ [`MdGeText`](MdGeText.md)

  ↳ [`MdGeTextLabel`](MdGeTextLabel.md)

  ↳ [`MdGeTorus`](MdGeTorus.md)

  ↳ [`MdGeTransform`](MdGeTransform.md)

  ↳ [`MdGeWedge`](MdGeWedge.md)

  ↳ [`MdGeHGeomSurface`](MdGeHGeomSurface.md)

  ↳ [`MdGeHGeomPlane`](MdGeHGeomPlane.md)

  ↳ [`MdGeColor`](MdGeColor.md)

  ↳ [`MdGeMaterialAspect`](MdGeMaterialAspect.md)

  ↳ [`MdGeSequenceOfShape`](MdGeSequenceOfShape.md)

  ↳ [`MdGeSequenceIteratorOfSequenceOfShape`](MdGeSequenceIteratorOfSequenceOfShape.md)

  ↳ [`MdGeMakeWires`](MdGeMakeWires.md)

  ↳ [`MdGeMakeFace`](MdGeMakeFace.md)

  ↳ [`MdGeMakeArcOfCircle`](MdGeMakeArcOfCircle.md)

  ↳ [`MdGeLight`](MdGeLight.md)

  ↳ [`MdGeArrowAspect`](MdGeArrowAspect.md)

  ↳ [`MdGeDimAspect`](MdGeDimAspect.md)

  ↳ [`MdGeLineAspect`](MdGeLineAspect.md)

  ↳ [`MdGeTextAspect`](MdGeTextAspect.md)

## Table of contents

### Constructors

- [constructor](MdGeObject.md#constructor)

### Properties

- [imp](MdGeObject.md#imp)

### Methods

- [getImp](MdGeObject.md#getimp)
- [initTempObject](MdGeObject.md#inittempobject)

## Constructors

### constructor

• **new MdGeObject**(`imp?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `imp?` | `any` |

## Properties

### imp

• `Protected` **imp**: `any` = `0`

## Methods

### getImp

▸ **getImp**(): `any`

#### Returns

`any`

___

### initTempObject

▸ `Protected` **initTempObject**(`imp`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `imp` | `any` |

#### Returns

`void`
