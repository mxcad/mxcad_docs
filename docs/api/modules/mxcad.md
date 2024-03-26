[mxcad API 文档](../README.md) / mxcad

# Module: mxcad

mxcad库所有导出的内容 包换[2d](2d.md) [3d](3d.md) 模块中的所有导出

## Table of contents

### References

- [Color](mxcad.md#color)
- [ColorIndexType](mxcad.md#colorindextype)
- [ColorMethod](mxcad.md#colormethod)
- [CreateColorArgs](mxcad.md#createcolorargs)
- [FetchAttributes](mxcad.md#fetchattributes)
- [McAppType](mxcad.md#mcapptype)
- [McCmColor](mxcad.md#mccmcolor)
- [McCmColorJSON](mxcad.md#mccmcolorjson)
- [McDb](mxcad.md#mcdb)
- [McDbAlignedDimension](mxcad.md#mcdbaligneddimension)
- [McDbArc](mxcad.md#mcdbarc)
- [McDbAttribute](mxcad.md#mcdbattribute)
- [McDbAttributeDefinition](mxcad.md#mcdbattributedefinition)
- [McDbBlockReference](mxcad.md#mcdbblockreference)
- [McDbBlockTable](mxcad.md#mcdbblocktable)
- [McDbBlockTableRecord](mxcad.md#mcdbblocktablerecord)
- [McDbCircle](mxcad.md#mcdbcircle)
- [McDbCurve](mxcad.md#mcdbcurve)
- [McDbDatabase](mxcad.md#mcdbdatabase)
- [McDbDimension](mxcad.md#mcdbdimension)
- [McDbEllipse](mxcad.md#mcdbellipse)
- [McDbEntity](mxcad.md#mcdbentity)
- [McDbHatch](mxcad.md#mcdbhatch)
- [McDbLayerTable](mxcad.md#mcdblayertable)
- [McDbLayerTableRecord](mxcad.md#mcdblayertablerecord)
- [McDbLine](mxcad.md#mcdbline)
- [McDbLinetypeTable](mxcad.md#mcdblinetypetable)
- [McDbLinetypeTableRecord](mxcad.md#mcdblinetypetablerecord)
- [McDbMText](mxcad.md#mcdbmtext)
- [McDbObject](mxcad.md#mcdbobject)
- [McDbObjectArray](mxcad.md#mcdbobjectarray)
- [McDbPoint](mxcad.md#mcdbpoint)
- [McDbPolyline](mxcad.md#mcdbpolyline)
- [McDbProxyEntity](mxcad.md#mcdbproxyentity)
- [McDbRasterImage](mxcad.md#mcdbrasterimage)
- [McDbRasterImageDef](mxcad.md#mcdbrasterimagedef)
- [McDbRotatedDimension](mxcad.md#mcdbrotateddimension)
- [McDbText](mxcad.md#mcdbtext)
- [McDbTextStyleTable](mxcad.md#mcdbtextstyletable)
- [McDbTextStyleTableRecord](mxcad.md#mcdbtextstyletablerecord)
- [McGeLongArray](mxcad.md#mcgelongarray)
- [McGeMatrix3d](mxcad.md#mcgematrix3d)
- [McGePoint3d](mxcad.md#mcgepoint3d)
- [McGePoint3dArray](mxcad.md#mcgepoint3darray)
- [McGeStringArray](mxcad.md#mcgestringarray)
- [McGeVector3d](mxcad.md#mcgevector3d)
- [McObject](mxcad.md#mcobject)
- [McObjectId](mxcad.md#mcobjectid)
- [McObjectIdType](mxcad.md#mcobjectidtype)
- [McRxObject](mxcad.md#mcrxobject)
- [MdGe](mxcad.md#mdge)
- [MdGeAngleDim](mxcad.md#mdgeangledim)
- [MdGeArray1OfInteger](mxcad.md#mdgearray1ofinteger)
- [MdGeArray1OfPnt](mxcad.md#mdgearray1ofpnt)
- [MdGeArray1OfReal](mxcad.md#mdgearray1ofreal)
- [MdGeArray2OfPnt](mxcad.md#mdgearray2ofpnt)
- [MdGeArray2OfReal](mxcad.md#mdgearray2ofreal)
- [MdGeArrowAspect](mxcad.md#mdgearrowaspect)
- [MdGeAxis](mxcad.md#mdgeaxis)
- [MdGeBRep](mxcad.md#mdgebrep)
- [MdGeBSplineCurve](mxcad.md#mdgebsplinecurve)
- [MdGeBSplineSurface](mxcad.md#mdgebsplinesurface)
- [MdGeBezierCurve](mxcad.md#mdgebeziercurve)
- [MdGeBezierSurface](mxcad.md#mdgebeziersurface)
- [MdGeBox](mxcad.md#mdgebox)
- [MdGeCSYS](mxcad.md#mdgecsys)
- [MdGeCSYSR](mxcad.md#mdgecsysr)
- [MdGeChamfer](mxcad.md#mdgechamfer)
- [MdGeCircle](mxcad.md#mdgecircle)
- [MdGeColor](mxcad.md#mdgecolor)
- [MdGeCompSolid](mxcad.md#mdgecompsolid)
- [MdGeCompound](mxcad.md#mdgecompound)
- [MdGeCone](mxcad.md#mdgecone)
- [MdGeCylinder](mxcad.md#mdgecylinder)
- [MdGeDiameterDim](mxcad.md#mdgediameterdim)
- [MdGeDimAspect](mxcad.md#mdgedimaspect)
- [MdGeDir](mxcad.md#mdgedir)
- [MdGeDoubleArray](mxcad.md#mdgedoublearray)
- [MdGeEdge](mxcad.md#mdgeedge)
- [MdGeEllipse](mxcad.md#mdgeellipse)
- [MdGeExplorer](mxcad.md#mdgeexplorer)
- [MdGeFace](mxcad.md#mdgeface)
- [MdGeFillet](mxcad.md#mdgefillet)
- [MdGeHGeomPlane](mxcad.md#mdgehgeomplane)
- [MdGeHGeomSurface](mxcad.md#mdgehgeomsurface)
- [MdGeHypr](mxcad.md#mdgehypr)
- [MdGeInterpolateBSpl](mxcad.md#mdgeinterpolatebspl)
- [MdGeLengthDim](mxcad.md#mdgelengthdim)
- [MdGeLight](mxcad.md#mdgelight)
- [MdGeLine](mxcad.md#mdgeline)
- [MdGeLineAspect](mxcad.md#mdgelineaspect)
- [MdGeListIteratorOfListOfShape](mxcad.md#mdgelistiteratoroflistofshape)
- [MdGeListOfShape](mxcad.md#mdgelistofshape)
- [MdGeLoft](mxcad.md#mdgeloft)
- [MdGeMakeArcOfCircle](mxcad.md#mdgemakearcofcircle)
- [MdGeMakeFace](mxcad.md#mdgemakeface)
- [MdGeMakeThickSolid](mxcad.md#mdgemakethicksolid)
- [MdGeMakeWires](mxcad.md#mdgemakewires)
- [MdGeMat](mxcad.md#mdgemat)
- [MdGeMaterialAspect](mxcad.md#mdgematerialaspect)
- [MdGeObject](mxcad.md#mdgeobject)
- [MdGeParab](mxcad.md#mdgeparab)
- [MdGePipe](mxcad.md#mdgepipe)
- [MdGePlane](mxcad.md#mdgeplane)
- [MdGePoint](mxcad.md#mdgepoint)
- [MdGePointsToBSpl](mxcad.md#mdgepointstobspl)
- [MdGePointsToBSplSurface](mxcad.md#mdgepointstobsplsurface)
- [MdGePrism](mxcad.md#mdgeprism)
- [MdGeRadiusDim](mxcad.md#mdgeradiusdim)
- [MdGeRect](mxcad.md#mdgerect)
- [MdGeRevol](mxcad.md#mdgerevol)
- [MdGeSequenceIteratorOfSequenceOfShape](mxcad.md#mdgesequenceiteratorofsequenceofshape)
- [MdGeSequenceOfShape](mxcad.md#mdgesequenceofshape)
- [MdGeShape](mxcad.md#mdgeshape)
- [MdGeShell](mxcad.md#mdgeshell)
- [MdGeSolid](mxcad.md#mdgesolid)
- [MdGeSphere](mxcad.md#mdgesphere)
- [MdGeText](mxcad.md#mdgetext)
- [MdGeTextAspect](mxcad.md#mdgetextaspect)
- [MdGeTextLabel](mxcad.md#mdgetextlabel)
- [MdGeTopo](mxcad.md#mdgetopo)
- [MdGeTorus](mxcad.md#mdgetorus)
- [MdGeTransform](mxcad.md#mdgetransform)
- [MdGeTrsf](mxcad.md#mdgetrsf)
- [MdGeVec](mxcad.md#mdgevec)
- [MdGeVertex](mxcad.md#mdgevertex)
- [MdGeWedge](mxcad.md#mdgewedge)
- [MdGeWire](mxcad.md#mdgewire)
- [MdGeXYZ](mxcad.md#mdgexyz)
- [MxCADResbuf](mxcad.md#mxcadresbuf)
- [MxCADResbufDataType](mxcad.md#mxcadresbufdatatype)
- [MxCADSelectionSet](mxcad.md#mxcadselectionset)
- [MxCADSelectionSetStatus](mxcad.md#mxcadselectionsetstatus)
- [MxCADUI](mxcad.md#mxcadui)
- [MxCADUiPrAngle](mxcad.md#mxcaduiprangle)
- [MxCADUiPrBase](mxcad.md#mxcaduiprbase)
- [MxCADUiPrDist](mxcad.md#mxcaduiprdist)
- [MxCADUiPrEntity](mxcad.md#mxcaduiprentity)
- [MxCADUiPrInt](mxcad.md#mxcaduiprint)
- [MxCADUiPrKeyWord](mxcad.md#mxcaduiprkeyword)
- [MxCADUiPrPoint](mxcad.md#mxcaduiprpoint)
- [MxCADUiPrString](mxcad.md#mxcaduiprstring)
- [MxCADUtility](mxcad.md#mxcadutility)
- [MxCADUtilityClass](mxcad.md#mxcadutilityclass)
- [MxCadConfig](mxcad.md#mxcadconfig)
- [MxCheckTheBrowser](mxcad.md#mxcheckthebrowser)
- [MxCpp](mxcad.md#mxcpp)
- [MxCppType](mxcad.md#mxcpptype)
- [MxDraw3d](mxcad.md#mxdraw3d)
- [MxDraw3dConfig](mxcad.md#mxdraw3dconfig)
- [MxPropertiesWindowCustom](mxcad.md#mxpropertieswindowcustom)
- [MxPropertiesWindowCustomValue](mxcad.md#mxpropertieswindowcustomvalue)
- [MxPropertiesWindowCustomValueType](mxcad.md#mxpropertieswindowcustomvaluetype)
- [Mx\_Erase](mxcad.md#mx_erase)
- [ObjectInheritance](mxcad.md#objectinheritance)
- [THREEColorArgs](mxcad.md#threecolorargs)
- [WasmConfig](mxcad.md#wasmconfig)
- [createMcCmColor](mxcad.md#createmccmcolor)
- [createMxCad](mxcad.md#createmxcad)
- [drawArc](mxcad.md#drawarc)
- [drawCircle](mxcad.md#drawcircle)
- [drawEllipticalArc](mxcad.md#drawellipticalarc)
- [drawLine](mxcad.md#drawline)
- [drawMText](mxcad.md#drawmtext)
- [drawPolyLine](mxcad.md#drawpolyline)
- [drawPolygon](mxcad.md#drawpolygon)
- [drawRectang](mxcad.md#drawrectang)
- [drawText](mxcad.md#drawtext)
- [getColorUtils](mxcad.md#getcolorutils)
- [getFilterImp](mxcad.md#getfilterimp)
- [getIndexColors](mxcad.md#getindexcolors)
- [getStyle](mxcad.md#getstyle)
- [loadMxCADassembly](mxcad.md#loadmxcadassembly)
- [loadMxCADassembly3d](mxcad.md#loadmxcadassembly3d)
- [setMcCmColor](mxcad.md#setmccmcolor)

### Variables

- [MxTools](mxcad.md#mxtools)

### Functions

- [IsZero](mxcad.md#iszero)
- [\_ML\_String](mxcad.md#_ml_string)
- [b64Decode](mxcad.md#b64decode)
- [b64Encode](mxcad.md#b64encode)
- [downloadFile](mxcad.md#downloadfile)
- [downloadFileFromUrl](mxcad.md#downloadfilefromurl)
- [getFileFromUrl](mxcad.md#getfilefromurl)
- [getJsonFromUrl](mxcad.md#getjsonfromurl)
- [saveAsFileDialog](mxcad.md#saveasfiledialog)

## References

### Color

Re-exports [Color](../classes/2d.Color.md)

___

### ColorIndexType

Re-exports [ColorIndexType](../enums/2d.ColorIndexType.md)

___

### ColorMethod

Re-exports [ColorMethod](../enums/2d.ColorMethod.md)

___

### CreateColorArgs

Re-exports [CreateColorArgs](2d.md#createcolorargs)

___

### FetchAttributes

Re-exports [FetchAttributes](../enums/2d.FetchAttributes.md)

___

### McAppType

Re-exports [McAppType](../classes/2d.McAppType.md)

___

### McCmColor

Re-exports [McCmColor](../classes/2d.McCmColor.md)

___

### McCmColorJSON

Re-exports [McCmColorJSON](2d.md#mccmcolorjson)

___

### McDb

Re-exports [McDb](2d.McDb.md)

___

### McDbAlignedDimension

Re-exports [McDbAlignedDimension](../classes/2d.McDbAlignedDimension.md)

___

### McDbArc

Re-exports [McDbArc](../classes/2d.McDbArc.md)

___

### McDbAttribute

Re-exports [McDbAttribute](../classes/2d.McDbAttribute.md)

___

### McDbAttributeDefinition

Re-exports [McDbAttributeDefinition](../classes/2d.McDbAttributeDefinition.md)

___

### McDbBlockReference

Re-exports [McDbBlockReference](../classes/2d.McDbBlockReference.md)

___

### McDbBlockTable

Re-exports [McDbBlockTable](../classes/2d.McDbBlockTable.md)

___

### McDbBlockTableRecord

Re-exports [McDbBlockTableRecord](../classes/2d.McDbBlockTableRecord.md)

___

### McDbCircle

Re-exports [McDbCircle](../classes/2d.McDbCircle.md)

___

### McDbCurve

Re-exports [McDbCurve](../classes/2d.McDbCurve.md)

___

### McDbDatabase

Re-exports [McDbDatabase](../classes/2d.McDbDatabase.md)

___

### McDbDimension

Re-exports [McDbDimension](../classes/2d.McDbDimension.md)

___

### McDbEllipse

Re-exports [McDbEllipse](../classes/2d.McDbEllipse.md)

___

### McDbEntity

Re-exports [McDbEntity](../classes/2d.McDbEntity.md)

___

### McDbHatch

Re-exports [McDbHatch](../classes/2d.McDbHatch.md)

___

### McDbLayerTable

Re-exports [McDbLayerTable](../classes/2d.McDbLayerTable.md)

___

### McDbLayerTableRecord

Re-exports [McDbLayerTableRecord](../classes/2d.McDbLayerTableRecord.md)

___

### McDbLine

Re-exports [McDbLine](../classes/2d.McDbLine.md)

___

### McDbLinetypeTable

Re-exports [McDbLinetypeTable](../classes/2d.McDbLinetypeTable.md)

___

### McDbLinetypeTableRecord

Re-exports [McDbLinetypeTableRecord](../classes/2d.McDbLinetypeTableRecord.md)

___

### McDbMText

Re-exports [McDbMText](../classes/2d.McDbMText.md)

___

### McDbObject

Re-exports [McDbObject](../classes/2d.McDbObject.md)

___

### McDbObjectArray

Re-exports [McDbObjectArray](../classes/2d.McDbObjectArray.md)

___

### McDbPoint

Re-exports [McDbPoint](../classes/2d.McDbPoint.md)

___

### McDbPolyline

Re-exports [McDbPolyline](../classes/2d.McDbPolyline.md)

___

### McDbProxyEntity

Re-exports [McDbProxyEntity](../classes/2d.McDbProxyEntity.md)

___

### McDbRasterImage

Re-exports [McDbRasterImage](../classes/2d.McDbRasterImage.md)

___

### McDbRasterImageDef

Re-exports [McDbRasterImageDef](../classes/2d.McDbRasterImageDef.md)

___

### McDbRotatedDimension

Re-exports [McDbRotatedDimension](../classes/2d.McDbRotatedDimension.md)

___

### McDbText

Re-exports [McDbText](../classes/2d.McDbText.md)

___

### McDbTextStyleTable

Re-exports [McDbTextStyleTable](../classes/2d.McDbTextStyleTable.md)

___

### McDbTextStyleTableRecord

Re-exports [McDbTextStyleTableRecord](../classes/2d.McDbTextStyleTableRecord.md)

___

### McGeLongArray

Re-exports [McGeLongArray](../classes/2d.McGeLongArray.md)

___

### McGeMatrix3d

Re-exports [McGeMatrix3d](../classes/2d.McGeMatrix3d.md)

___

### McGePoint3d

Re-exports [McGePoint3d](../classes/2d.McGePoint3d.md)

___

### McGePoint3dArray

Re-exports [McGePoint3dArray](../classes/2d.McGePoint3dArray.md)

___

### McGeStringArray

Re-exports [McGeStringArray](../classes/2d.McGeStringArray.md)

___

### McGeVector3d

Re-exports [McGeVector3d](../classes/2d.McGeVector3d.md)

___

### McObject

Re-exports [McObject](../classes/2d.McObject.md)

___

### McObjectId

Re-exports [McObjectId](../classes/2d.McObjectId.md)

___

### McObjectIdType

Re-exports [McObjectIdType](../enums/2d.McObjectIdType.md)

___

### McRxObject

Re-exports [McRxObject](../classes/2d.McRxObject.md)

___

### MdGe

Re-exports [MdGe](3d.MdGe.md)

___

### MdGeAngleDim

Re-exports [MdGeAngleDim](../classes/3d.MdGeAngleDim.md)

___

### MdGeArray1OfInteger

Re-exports [MdGeArray1OfInteger](../classes/3d.MdGeArray1OfInteger.md)

___

### MdGeArray1OfPnt

Re-exports [MdGeArray1OfPnt](../classes/3d.MdGeArray1OfPnt.md)

___

### MdGeArray1OfReal

Re-exports [MdGeArray1OfReal](../classes/3d.MdGeArray1OfReal.md)

___

### MdGeArray2OfPnt

Re-exports [MdGeArray2OfPnt](../classes/3d.MdGeArray2OfPnt.md)

___

### MdGeArray2OfReal

Re-exports [MdGeArray2OfReal](../classes/3d.MdGeArray2OfReal.md)

___

### MdGeArrowAspect

Re-exports [MdGeArrowAspect](../classes/3d.MdGeArrowAspect.md)

___

### MdGeAxis

Re-exports [MdGeAxis](../classes/3d.MdGeAxis.md)

___

### MdGeBRep

Re-exports [MdGeBRep](../classes/3d.MdGeBRep.md)

___

### MdGeBSplineCurve

Re-exports [MdGeBSplineCurve](../classes/3d.MdGeBSplineCurve.md)

___

### MdGeBSplineSurface

Re-exports [MdGeBSplineSurface](../classes/3d.MdGeBSplineSurface.md)

___

### MdGeBezierCurve

Re-exports [MdGeBezierCurve](../classes/3d.MdGeBezierCurve.md)

___

### MdGeBezierSurface

Re-exports [MdGeBezierSurface](../classes/3d.MdGeBezierSurface.md)

___

### MdGeBox

Re-exports [MdGeBox](../classes/3d.MdGeBox.md)

___

### MdGeCSYS

Re-exports [MdGeCSYS](../classes/3d.MdGeCSYS.md)

___

### MdGeCSYSR

Re-exports [MdGeCSYSR](../classes/3d.MdGeCSYSR.md)

___

### MdGeChamfer

Re-exports [MdGeChamfer](../classes/3d.MdGeChamfer.md)

___

### MdGeCircle

Re-exports [MdGeCircle](../classes/3d.MdGeCircle.md)

___

### MdGeColor

Re-exports [MdGeColor](../classes/3d.MdGeColor.md)

___

### MdGeCompSolid

Re-exports [MdGeCompSolid](../classes/3d.MdGeCompSolid.md)

___

### MdGeCompound

Re-exports [MdGeCompound](../classes/3d.MdGeCompound.md)

___

### MdGeCone

Re-exports [MdGeCone](../classes/3d.MdGeCone.md)

___

### MdGeCylinder

Re-exports [MdGeCylinder](../classes/3d.MdGeCylinder.md)

___

### MdGeDiameterDim

Re-exports [MdGeDiameterDim](../classes/3d.MdGeDiameterDim.md)

___

### MdGeDimAspect

Re-exports [MdGeDimAspect](../classes/3d.MdGeDimAspect.md)

___

### MdGeDir

Re-exports [MdGeDir](../classes/3d.MdGeDir.md)

___

### MdGeDoubleArray

Re-exports [MdGeDoubleArray](../classes/2d.MdGeDoubleArray.md)

___

### MdGeEdge

Re-exports [MdGeEdge](../classes/3d.MdGeEdge.md)

___

### MdGeEllipse

Re-exports [MdGeEllipse](../classes/3d.MdGeEllipse.md)

___

### MdGeExplorer

Re-exports [MdGeExplorer](../classes/3d.MdGeExplorer.md)

___

### MdGeFace

Re-exports [MdGeFace](../classes/3d.MdGeFace.md)

___

### MdGeFillet

Re-exports [MdGeFillet](../classes/3d.MdGeFillet.md)

___

### MdGeHGeomPlane

Re-exports [MdGeHGeomPlane](../classes/3d.MdGeHGeomPlane.md)

___

### MdGeHGeomSurface

Re-exports [MdGeHGeomSurface](../classes/3d.MdGeHGeomSurface.md)

___

### MdGeHypr

Re-exports [MdGeHypr](../classes/3d.MdGeHypr.md)

___

### MdGeInterpolateBSpl

Re-exports [MdGeInterpolateBSpl](../classes/3d.MdGeInterpolateBSpl.md)

___

### MdGeLengthDim

Re-exports [MdGeLengthDim](../classes/3d.MdGeLengthDim.md)

___

### MdGeLight

Re-exports [MdGeLight](../classes/3d.MdGeLight.md)

___

### MdGeLine

Re-exports [MdGeLine](../classes/3d.MdGeLine.md)

___

### MdGeLineAspect

Re-exports [MdGeLineAspect](../classes/3d.MdGeLineAspect.md)

___

### MdGeListIteratorOfListOfShape

Re-exports [MdGeListIteratorOfListOfShape](../classes/3d.MdGeListIteratorOfListOfShape.md)

___

### MdGeListOfShape

Re-exports [MdGeListOfShape](../classes/3d.MdGeListOfShape.md)

___

### MdGeLoft

Re-exports [MdGeLoft](../classes/3d.MdGeLoft.md)

___

### MdGeMakeArcOfCircle

Re-exports [MdGeMakeArcOfCircle](../classes/3d.MdGeMakeArcOfCircle.md)

___

### MdGeMakeFace

Re-exports [MdGeMakeFace](../classes/3d.MdGeMakeFace.md)

___

### MdGeMakeThickSolid

Re-exports [MdGeMakeThickSolid](../classes/3d.MdGeMakeThickSolid.md)

___

### MdGeMakeWires

Re-exports [MdGeMakeWires](../classes/3d.MdGeMakeWires.md)

___

### MdGeMat

Re-exports [MdGeMat](../classes/3d.MdGeMat.md)

___

### MdGeMaterialAspect

Re-exports [MdGeMaterialAspect](../classes/3d.MdGeMaterialAspect.md)

___

### MdGeObject

Re-exports [MdGeObject](../classes/3d.MdGeObject.md)

___

### MdGeParab

Re-exports [MdGeParab](../classes/3d.MdGeParab.md)

___

### MdGePipe

Re-exports [MdGePipe](../classes/3d.MdGePipe.md)

___

### MdGePlane

Re-exports [MdGePlane](../classes/3d.MdGePlane.md)

___

### MdGePoint

Re-exports [MdGePoint](../classes/3d.MdGePoint.md)

___

### MdGePointsToBSpl

Re-exports [MdGePointsToBSpl](../classes/3d.MdGePointsToBSpl.md)

___

### MdGePointsToBSplSurface

Re-exports [MdGePointsToBSplSurface](../classes/3d.MdGePointsToBSplSurface.md)

___

### MdGePrism

Re-exports [MdGePrism](../classes/3d.MdGePrism.md)

___

### MdGeRadiusDim

Re-exports [MdGeRadiusDim](../classes/3d.MdGeRadiusDim.md)

___

### MdGeRect

Re-exports [MdGeRect](../classes/3d.MdGeRect.md)

___

### MdGeRevol

Re-exports [MdGeRevol](../classes/3d.MdGeRevol.md)

___

### MdGeSequenceIteratorOfSequenceOfShape

Re-exports [MdGeSequenceIteratorOfSequenceOfShape](../classes/3d.MdGeSequenceIteratorOfSequenceOfShape.md)

___

### MdGeSequenceOfShape

Re-exports [MdGeSequenceOfShape](../classes/3d.MdGeSequenceOfShape.md)

___

### MdGeShape

Re-exports [MdGeShape](../classes/3d.MdGeShape.md)

___

### MdGeShell

Re-exports [MdGeShell](../classes/3d.MdGeShell.md)

___

### MdGeSolid

Re-exports [MdGeSolid](../classes/3d.MdGeSolid.md)

___

### MdGeSphere

Re-exports [MdGeSphere](../classes/3d.MdGeSphere.md)

___

### MdGeText

Re-exports [MdGeText](../classes/3d.MdGeText.md)

___

### MdGeTextAspect

Re-exports [MdGeTextAspect](../classes/3d.MdGeTextAspect.md)

___

### MdGeTextLabel

Re-exports [MdGeTextLabel](../classes/3d.MdGeTextLabel.md)

___

### MdGeTopo

Re-exports [MdGeTopo](../classes/3d.MdGeTopo.md)

___

### MdGeTorus

Re-exports [MdGeTorus](../classes/3d.MdGeTorus.md)

___

### MdGeTransform

Re-exports [MdGeTransform](../classes/3d.MdGeTransform.md)

___

### MdGeTrsf

Re-exports [MdGeTrsf](../classes/3d.MdGeTrsf.md)

___

### MdGeVec

Re-exports [MdGeVec](../classes/3d.MdGeVec.md)

___

### MdGeVertex

Re-exports [MdGeVertex](../classes/3d.MdGeVertex.md)

___

### MdGeWedge

Re-exports [MdGeWedge](../classes/3d.MdGeWedge.md)

___

### MdGeWire

Re-exports [MdGeWire](../classes/3d.MdGeWire.md)

___

### MdGeXYZ

Re-exports [MdGeXYZ](../classes/3d.MdGeXYZ.md)

___

### MxCADResbuf

Re-exports [MxCADResbuf](../classes/2d.MxCADResbuf.md)

___

### MxCADResbufDataType

Re-exports [MxCADResbufDataType](../enums/2d.MxCADResbufDataType.md)

___

### MxCADSelectionSet

Re-exports [MxCADSelectionSet](../classes/2d.MxCADSelectionSet.md)

___

### MxCADSelectionSetStatus

Re-exports [MxCADSelectionSetStatus](../enums/2d.MxCADSelectionSetStatus.md)

___

### MxCADUI

Re-exports [MxCADUI](../interfaces/2d.MxCADUI.md)

___

### MxCADUiPrAngle

Re-exports [MxCADUiPrAngle](../classes/2d.MxCADUiPrAngle.md)

___

### MxCADUiPrBase

Re-exports [MxCADUiPrBase](../classes/2d.MxCADUiPrBase.md)

___

### MxCADUiPrDist

Re-exports [MxCADUiPrDist](../classes/2d.MxCADUiPrDist.md)

___

### MxCADUiPrEntity

Re-exports [MxCADUiPrEntity](../classes/2d.MxCADUiPrEntity.md)

___

### MxCADUiPrInt

Re-exports [MxCADUiPrInt](../classes/2d.MxCADUiPrInt.md)

___

### MxCADUiPrKeyWord

Re-exports [MxCADUiPrKeyWord](../classes/2d.MxCADUiPrKeyWord.md)

___

### MxCADUiPrPoint

Re-exports [MxCADUiPrPoint](../classes/2d.MxCADUiPrPoint.md)

___

### MxCADUiPrString

Re-exports [MxCADUiPrString](../classes/2d.MxCADUiPrString.md)

___

### MxCADUtility

Re-exports [MxCADUtility](2d.md#mxcadutility)

___

### MxCADUtilityClass

Re-exports [MxCADUtilityClass](../classes/2d.MxCADUtilityClass.md)

___

### MxCadConfig

Re-exports [MxCadConfig](../interfaces/2d.MxCadConfig.md)

___

### MxCheckTheBrowser

Re-exports [MxCheckTheBrowser](2d.md#mxcheckthebrowser)

___

### MxCpp

Re-exports [MxCpp](2d.md#mxcpp)

___

### MxCppType

Re-exports [MxCppType](../classes/2d.MxCppType.md)

___

### MxDraw3d

Re-exports [MxDraw3d](../classes/3d.MxDraw3d.md)

___

### MxDraw3dConfig

Re-exports [MxDraw3dConfig](../interfaces/3d.MxDraw3dConfig.md)

___

### MxPropertiesWindowCustom

Re-exports [MxPropertiesWindowCustom](../classes/2d.MxPropertiesWindowCustom.md)

___

### MxPropertiesWindowCustomValue

Re-exports [MxPropertiesWindowCustomValue](../classes/2d.MxPropertiesWindowCustomValue.md)

___

### MxPropertiesWindowCustomValueType

Re-exports [MxPropertiesWindowCustomValueType](../enums/2d.MxPropertiesWindowCustomValueType.md)

___

### Mx\_Erase

Re-exports [Mx_Erase](2d.md#mx_erase)

___

### ObjectInheritance

Re-exports [ObjectInheritance](../classes/2d.ObjectInheritance.md)

___

### THREEColorArgs

Re-exports [THREEColorArgs](2d.md#threecolorargs)

___

### WasmConfig

Re-exports [WasmConfig](../interfaces/3d.WasmConfig.md)

___

### createMcCmColor

Re-exports [createMcCmColor](2d.md#createmccmcolor)

___

### createMxCad

Re-exports [createMxCad](2d.md#createmxcad)

___

### drawArc

Re-exports [drawArc](2d.md#drawarc)

___

### drawCircle

Re-exports [drawCircle](2d.md#drawcircle)

___

### drawEllipticalArc

Re-exports [drawEllipticalArc](2d.md#drawellipticalarc)

___

### drawLine

Re-exports [drawLine](2d.md#drawline)

___

### drawMText

Re-exports [drawMText](2d.md#drawmtext)

___

### drawPolyLine

Re-exports [drawPolyLine](2d.md#drawpolyline)

___

### drawPolygon

Re-exports [drawPolygon](2d.md#drawpolygon)

___

### drawRectang

Re-exports [drawRectang](2d.md#drawrectang)

___

### drawText

Re-exports [drawText](2d.md#drawtext)

___

### getColorUtils

Re-exports [getColorUtils](2d.md#getcolorutils)

___

### getFilterImp

Re-exports [getFilterImp](2d.md#getfilterimp)

___

### getIndexColors

Re-exports [getIndexColors](2d.md#getindexcolors)

___

### getStyle

Re-exports [getStyle](2d.md#getstyle)

___

### loadMxCADassembly

Re-exports [loadMxCADassembly](2d.md#loadmxcadassembly)

___

### loadMxCADassembly3d

Re-exports [loadMxCADassembly3d](3d.md#loadmxcadassembly3d)

___

### setMcCmColor

Re-exports [setMcCmColor](2d.md#setmccmcolor)

## Variables

### MxTools

• `Const` **MxTools**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `IsZero` | (`val`: `number`) => `boolean` |
| `_ML_String` | (`strId`: `string`, `str`: `string`) => `string` |
| `b64Decode` | (`str`: `string`) => `string` |
| `b64Encode` | (`str`: `string`) => `string` |
| `downloadFile` | (`blob`: `any`, `filename`: `string`) => `void` |
| `downloadFileFromUrl` | (`url`: `string`, `filename`: `string`) => `void` |
| `getFileFromUrl` | (`url`: `string`) => [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`undefined` \| [`Response`]( https://developer.mozilla.org/en-US/docs/Web/API/Response )\> |
| `getJsonFromUrl` | (`url`: `string`) => [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`any`\> |
| `saveAsFileDialog` | (`__namedParameters`: { `blob`: [`Blob`]( https://developer.mozilla.org/en-US/docs/Web/API/Blob ) ; `filename?`: `string` ; `types?`: `FileTypes`  }) => [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`undefined` \| [`FileSystemFileHandle`]( https://developer.mozilla.org/en-US/docs/Web/API/FileSystemFileHandle ) & { `createWritable`: () => [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`WritableStreamDefaultWriter`]( https://developer.mozilla.org/en-US/docs/Web/API/WritableStreamDefaultWriter )<`any`\>\>  }\> |

## Functions

### IsZero

▸ **IsZero**(`val`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `number` |

#### Returns

`boolean`

___

### \_ML\_String

▸ **_ML_String**(`strId`, `str`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `strId` | `string` |
| `str` | `string` |

#### Returns

`string`

___

### b64Decode

▸ **b64Decode**(`str`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

`string`

___

### b64Encode

▸ **b64Encode**(`str`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

`string`

___

### downloadFile

▸ **downloadFile**(`blob`, `filename`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `blob` | `any` |
| `filename` | `string` |

#### Returns

`void`

___

### downloadFileFromUrl

▸ **downloadFileFromUrl**(`url`, `filename`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `filename` | `string` |

#### Returns

`void`

___

### getFileFromUrl

▸ **getFileFromUrl**(`url`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`undefined` \| [`Response`]( https://developer.mozilla.org/en-US/docs/Web/API/Response )\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`undefined` \| [`Response`]( https://developer.mozilla.org/en-US/docs/Web/API/Response )\>

___

### getJsonFromUrl

▸ **getJsonFromUrl**(`url`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`any`\>

___

### saveAsFileDialog

▸ **saveAsFileDialog**(`«destructured»`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`undefined` \| [`FileSystemFileHandle`]( https://developer.mozilla.org/en-US/docs/Web/API/FileSystemFileHandle ) & { `createWritable`: () => [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`WritableStreamDefaultWriter`]( https://developer.mozilla.org/en-US/docs/Web/API/WritableStreamDefaultWriter )<`any`\>\>  }\>

文件下载保存（另存为只支持 Chrome86 或 Edge 86 以及 Opera 72）兼容 iE10等较低版本的浏览器

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `blob` | [`Blob`]( https://developer.mozilla.org/en-US/docs/Web/API/Blob ) |
| › `filename?` | `string` |
| › `types?` | `FileTypes` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`undefined` \| [`FileSystemFileHandle`]( https://developer.mozilla.org/en-US/docs/Web/API/FileSystemFileHandle ) & { `createWritable`: () => [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`WritableStreamDefaultWriter`]( https://developer.mozilla.org/en-US/docs/Web/API/WritableStreamDefaultWriter )<`any`\>\>  }\>
