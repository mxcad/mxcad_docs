[mxcad API 文档](../README.md) / MxDraw3d

# Class: MxDraw3d

MxDraw3d的构造函数参数 的可配置选项

## Hierarchy

- `default`<{ `eventAddToTree`: (`node`: `string`) => `void` ; `eventFileSave`: (`fileName`: `string`) => `void` ; `eventModesSelected`: (`ids`: `number`[]) => `void` ; `eventRebuildTree`: (`tree_str`: `string`) => `void` ; `eventRemoveFromTree`: (`ids`: `number`[]) => `void`  }\>

- [`WasmConfig`](../interfaces/WasmConfig.md)

  ↳ **`MxDraw3d`**

## Implements

- [`MxDraw3dConfig`](../interfaces/MxDraw3dConfig.md)

## Indexable

▪ [x: `string`]: `any`

## Table of contents

### Constructors

- [constructor](MxDraw3d.md#constructor)

### Properties

- [HEAPU8](MxDraw3d.md#heapu8)
- [MdGeAngleDim](MxDraw3d.md#mdgeangledim)
- [MdGeArray1OfInteger](MxDraw3d.md#mdgearray1ofinteger)
- [MdGeArray1OfPnt](MxDraw3d.md#mdgearray1ofpnt)
- [MdGeArray1OfReal](MxDraw3d.md#mdgearray1ofreal)
- [MdGeArray2OfPnt](MxDraw3d.md#mdgearray2ofpnt)
- [MdGeArray2OfReal](MxDraw3d.md#mdgearray2ofreal)
- [MdGeArrowAspect](MxDraw3d.md#mdgearrowaspect)
- [MdGeAxis](MxDraw3d.md#mdgeaxis)
- [MdGeBRep](MxDraw3d.md#mdgebrep)
- [MdGeBSplineCurve](MxDraw3d.md#mdgebsplinecurve)
- [MdGeBSplineSurface](MxDraw3d.md#mdgebsplinesurface)
- [MdGeBezierCurve](MxDraw3d.md#mdgebeziercurve)
- [MdGeBezierSurface](MxDraw3d.md#mdgebeziersurface)
- [MdGeBox](MxDraw3d.md#mdgebox)
- [MdGeCSYS](MxDraw3d.md#mdgecsys)
- [MdGeCSYSR](MxDraw3d.md#mdgecsysr)
- [MdGeChamfer](MxDraw3d.md#mdgechamfer)
- [MdGeCircle](MxDraw3d.md#mdgecircle)
- [MdGeColor](MxDraw3d.md#mdgecolor)
- [MdGeCompSolid](MxDraw3d.md#mdgecompsolid)
- [MdGeCompound](MxDraw3d.md#mdgecompound)
- [MdGeCone](MxDraw3d.md#mdgecone)
- [MdGeCylinder](MxDraw3d.md#mdgecylinder)
- [MdGeDiameterDim](MxDraw3d.md#mdgediameterdim)
- [MdGeDimAspect](MxDraw3d.md#mdgedimaspect)
- [MdGeDir](MxDraw3d.md#mdgedir)
- [MdGeEdge](MxDraw3d.md#mdgeedge)
- [MdGeEllipse](MxDraw3d.md#mdgeellipse)
- [MdGeExplorer](MxDraw3d.md#mdgeexplorer)
- [MdGeFace](MxDraw3d.md#mdgeface)
- [MdGeFillet](MxDraw3d.md#mdgefillet)
- [MdGeHGeomPlane](MxDraw3d.md#mdgehgeomplane)
- [MdGeHGeomSurface](MxDraw3d.md#mdgehgeomsurface)
- [MdGeHypr](MxDraw3d.md#mdgehypr)
- [MdGeInterpolateBSpl](MxDraw3d.md#mdgeinterpolatebspl)
- [MdGeLengthDim](MxDraw3d.md#mdgelengthdim)
- [MdGeLight](MxDraw3d.md#mdgelight)
- [MdGeLine](MxDraw3d.md#mdgeline)
- [MdGeLineAspect](MxDraw3d.md#mdgelineaspect)
- [MdGeListIteratorOfListOfShape](MxDraw3d.md#mdgelistiteratoroflistofshape)
- [MdGeListOfShape](MxDraw3d.md#mdgelistofshape)
- [MdGeLoft](MxDraw3d.md#mdgeloft)
- [MdGeMakeArcOfCircle](MxDraw3d.md#mdgemakearcofcircle)
- [MdGeMakeFace](MxDraw3d.md#mdgemakeface)
- [MdGeMakeThickSolid](MxDraw3d.md#mdgemakethicksolid)
- [MdGeMakeWires](MxDraw3d.md#mdgemakewires)
- [MdGeMat](MxDraw3d.md#mdgemat)
- [MdGeMaterialAspect](MxDraw3d.md#mdgematerialaspect)
- [MdGeObject](MxDraw3d.md#mdgeobject)
- [MdGeParab](MxDraw3d.md#mdgeparab)
- [MdGePipe](MxDraw3d.md#mdgepipe)
- [MdGePlane](MxDraw3d.md#mdgeplane)
- [MdGePoint](MxDraw3d.md#mdgepoint)
- [MdGePointsToBSpl](MxDraw3d.md#mdgepointstobspl)
- [MdGePointsToBSplSurface](MxDraw3d.md#mdgepointstobsplsurface)
- [MdGePrism](MxDraw3d.md#mdgeprism)
- [MdGeRadiusDim](MxDraw3d.md#mdgeradiusdim)
- [MdGeRect](MxDraw3d.md#mdgerect)
- [MdGeRevol](MxDraw3d.md#mdgerevol)
- [MdGeSequenceIteratorOfSequenceOfShape](MxDraw3d.md#mdgesequenceiteratorofsequenceofshape)
- [MdGeSequenceOfShape](MxDraw3d.md#mdgesequenceofshape)
- [MdGeShape](MxDraw3d.md#mdgeshape)
- [MdGeShell](MxDraw3d.md#mdgeshell)
- [MdGeSolid](MxDraw3d.md#mdgesolid)
- [MdGeSphere](MxDraw3d.md#mdgesphere)
- [MdGeText](MxDraw3d.md#mdgetext)
- [MdGeTextAspect](MxDraw3d.md#mdgetextaspect)
- [MdGeTextLabel](MxDraw3d.md#mdgetextlabel)
- [MdGeTopo](MxDraw3d.md#mdgetopo)
- [MdGeTorus](MxDraw3d.md#mdgetorus)
- [MdGeTransform](MxDraw3d.md#mdgetransform)
- [MdGeTrsf](MxDraw3d.md#mdgetrsf)
- [MdGeVec](MxDraw3d.md#mdgevec)
- [MdGeVertex](MxDraw3d.md#mdgevertex)
- [MdGeWedge](MxDraw3d.md#mdgewedge)
- [MdGeWire](MxDraw3d.md#mdgewire)
- [MdGeXYZ](MxDraw3d.md#mdgexyz)
- [MxCF3dFilletShapeEnum](MxDraw3d.md#mxcf3dfilletshapeenum)
- [MxCFDSChamfMode](MxDraw3d.md#mxcfdschamfmode)
- [MxDimensionArrowOrientation](MxDraw3d.md#mxdimensionarroworientation)
- [MxDimensionTextHorizontalPosition](MxDraw3d.md#mxdimensiontexthorizontalposition)
- [MxDimensionTextVerticalPosition](MxDraw3d.md#mxdimensiontextverticalposition)
- [MxDisplayMode](MxDraw3d.md#mxdisplaymode)
- [MxFontAspect](MxDraw3d.md#mxfontaspect)
- [MxGAJoinTypeEnum](MxDraw3d.md#mxgajointypeenum)
- [MxGAShapeEnum](MxDraw3d.md#mxgashapeenum)
- [MxGFTrihedron](MxDraw3d.md#mxgftrihedron)
- [MxHorizontalTextAlignment](MxDraw3d.md#mxhorizontaltextalignment)
- [MxKindOfDimension](MxDraw3d.md#mxkindofdimension)
- [MxNameOfColor](MxDraw3d.md#mxnameofcolor)
- [MxNameOfMaterial](MxDraw3d.md#mxnameofmaterial)
- [MxOffsetModeEnum](MxDraw3d.md#mxoffsetmodeenum)
- [MxShapeEnum](MxDraw3d.md#mxshapeenum)
- [MxTextPath](MxDraw3d.md#mxtextpath)
- [MxTypeOfAngle](MxDraw3d.md#mxtypeofangle)
- [MxTypeOfAngleArrowVisibility](MxDraw3d.md#mxtypeofanglearrowvisibility)
- [MxTypeOfColor](MxDraw3d.md#mxtypeofcolor)
- [MxTypeOfDisplayText](MxDraw3d.md#mxtypeofdisplaytext)
- [MxTypeOfLine](MxDraw3d.md#mxtypeofline)
- [MxTypeOfMaterial](MxDraw3d.md#mxtypeofmaterial)
- [MxTypeOfReflection](MxDraw3d.md#mxtypeofreflection)
- [MxVerticalTextAlignment](MxDraw3d.md#mxverticaltextalignment)
- [\_free](MxDraw3d.md#_free)
- [\_malloc](MxDraw3d.md#_malloc)
- [canvas](MxDraw3d.md#canvas)
- [creatDocument](MxDraw3d.md#creatdocument)
- [ctx](MxDraw3d.md#ctx)
- [events](MxDraw3d.md#events)
- [executeRedo](MxDraw3d.md#executeredo)
- [executeUndo](MxDraw3d.md#executeundo)
- [fitSelectedObjects](MxDraw3d.md#fitselectedobjects)
- [getFileArryBufferPointer](MxDraw3d.md#getfilearrybufferpointer)
- [getFileSize](MxDraw3d.md#getfilesize)
- [getViewCursorX](MxDraw3d.md#getviewcursorx)
- [getViewCursorY](MxDraw3d.md#getviewcursory)
- [getViewCursorZ](MxDraw3d.md#getviewcursorz)
- [getViewHeight](MxDraw3d.md#getviewheight)
- [getViewScale](MxDraw3d.md#getviewscale)
- [getViewWidth](MxDraw3d.md#getviewwidth)
- [loadTextureImg](MxDraw3d.md#loadtextureimg)
- [locateFile](MxDraw3d.md#locatefile)
- [mdGeBRep](MxDraw3d.md#mdgebrep-1)
- [mdGeHGeomPlane](MxDraw3d.md#mdgehgeomplane-1)
- [mdGeTopo](MxDraw3d.md#mdgetopo-1)
- [onRuntimeInitialized](MxDraw3d.md#onruntimeinitialized)
- [open3DFile](MxDraw3d.md#open3dfile)
- [openFromUrl](MxDraw3d.md#openfromurl)
- [print](MxDraw3d.md#print)
- [printErr](MxDraw3d.md#printerr)
- [ready](MxDraw3d.md#ready)
- [removeSelectedObjects](MxDraw3d.md#removeselectedobjects)
- [setObjectShowState](MxDraw3d.md#setobjectshowstate)
- [updateCanvasSize](MxDraw3d.md#updatecanvassize)
- [wasmBinary](MxDraw3d.md#wasmbinary)
- [onloadWasmMxDraw3dModel](MxDraw3d.md#onloadwasmmxdraw3dmodel)

### Methods

- [displayGround](MxDraw3d.md#displayground)
- [displayObject](MxDraw3d.md#displayobject)
- [emit](MxDraw3d.md#emit)
- [eraseObject](MxDraw3d.md#eraseobject)
- [fitAllObjects](MxDraw3d.md#fitallobjects)
- [highLightSelShape](MxDraw3d.md#highlightselshape)
- [off](MxDraw3d.md#off)
- [on](MxDraw3d.md#on)
- [openBRepFromMemory](MxDraw3d.md#openbrepfrommemory)
- [openFromMemory](MxDraw3d.md#openfrommemory)
- [pauseMainLoop](MxDraw3d.md#pausemainloop)
- [removeAllObjects](MxDraw3d.md#removeallobjects)
- [resumeMainLoop](MxDraw3d.md#resumemainloop)
- [setCanvasSize](MxDraw3d.md#setcanvassize)
- [setCubemapBackground](MxDraw3d.md#setcubemapbackground)

## Constructors

### constructor

• **new MxDraw3d**(`options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`MxDraw3dConfig`](../interfaces/MxDraw3dConfig.md) |

#### Overrides

PubSub&lt;{
    &quot;eventModesSelected&quot;: (ids: number[]) &#x3D;\&gt; void
    &quot;eventAddToTree&quot;: (node: string) &#x3D;\&gt; void
    &quot;eventRemoveFromTree&quot;: (ids: number[]) &#x3D;\&gt; void
    &quot;eventFileSave&quot;: (fileName: string) &#x3D;\&gt; void
    &quot;eventRebuildTree&quot;: (tree\_str: string) &#x3D;\&gt; void

}\&gt;.constructor

## Properties

### HEAPU8

• **HEAPU8**: [`Uint8Array`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array )

___

### MdGeAngleDim

• **MdGeAngleDim**: typeof [`MdGeAngleDim`](MdGeAngleDim.md)

表示角度标注

___

### MdGeArray1OfInteger

• **MdGeArray1OfInteger**: typeof [`MdGeArray1OfInteger`](MdGeArray1OfInteger.md)

表示一维整数数组

___

### MdGeArray1OfPnt

• **MdGeArray1OfPnt**: typeof [`MdGeArray1OfPnt`](MdGeArray1OfPnt.md)

表示一维点数组

___

### MdGeArray1OfReal

• **MdGeArray1OfReal**: typeof [`MdGeArray1OfReal`](MdGeArray1OfReal.md)

表示一维实数数组

___

### MdGeArray2OfPnt

• **MdGeArray2OfPnt**: typeof [`MdGeArray2OfPnt`](MdGeArray2OfPnt.md)

表示二维点数组

___

### MdGeArray2OfReal

• **MdGeArray2OfReal**: typeof [`MdGeArray2OfReal`](MdGeArray2OfReal.md)

表示二维实数数组

___

### MdGeArrowAspect

• **MdGeArrowAspect**: typeof [`MdGeArrowAspect`](MdGeArrowAspect.md)

箭头样式

___

### MdGeAxis

• **MdGeAxis**: typeof [`MdGeAxis`](MdGeAxis.md)

表示一个轴

___

### MdGeBRep

• **MdGeBRep**: typeof [`MdGeBRep`](MdGeBRep.md)

表示BRep工具

___

### MdGeBSplineCurve

• **MdGeBSplineCurve**: typeof [`MdGeBSplineCurve`](MdGeBSplineCurve.md)

表示B样条曲线

___

### MdGeBSplineSurface

• **MdGeBSplineSurface**: typeof [`MdGeBSplineSurface`](MdGeBSplineSurface.md)

表示B样条曲面

___

### MdGeBezierCurve

• **MdGeBezierCurve**: typeof [`MdGeBezierCurve`](MdGeBezierCurve.md)

表示贝塞尔曲线

___

### MdGeBezierSurface

• **MdGeBezierSurface**: typeof [`MdGeBezierSurface`](MdGeBezierSurface.md)

表示贝塞尔曲面

___

### MdGeBox

• **MdGeBox**: typeof [`MdGeBox`](MdGeBox.md)

表示一个Box

___

### MdGeCSYS

• **MdGeCSYS**: typeof [`MdGeCSYS`](MdGeCSYS.md)

表示一个坐标系（左手或右手）

___

### MdGeCSYSR

• **MdGeCSYSR**: typeof [`MdGeCSYSR`](MdGeCSYSR.md)

表示一个右手坐标系

___

### MdGeChamfer

• **MdGeChamfer**: typeof [`MdGeChamfer`](MdGeChamfer.md)

表示倒斜角

___

### MdGeCircle

• **MdGeCircle**: typeof [`MdGeCircle`](MdGeCircle.md)

表示一个圆

___

### MdGeColor

• **MdGeColor**: typeof [`MdGeColor`](MdGeColor.md)

表示颜色

___

### MdGeCompSolid

• **MdGeCompSolid**: typeof [`MdGeCompSolid`](MdGeCompSolid.md)

表示一个CompSolid形状

___

### MdGeCompound

• **MdGeCompound**: typeof [`MdGeCompound`](MdGeCompound.md)

表示一个Compound形状

___

### MdGeCone

• **MdGeCone**: typeof [`MdGeCone`](MdGeCone.md)

表示一个圆锥

___

### MdGeCylinder

• **MdGeCylinder**: typeof [`MdGeCylinder`](MdGeCylinder.md)

表示一个圆柱

___

### MdGeDiameterDim

• **MdGeDiameterDim**: typeof [`MdGeDiameterDim`](MdGeDiameterDim.md)

表示直径标注

___

### MdGeDimAspect

• **MdGeDimAspect**: typeof [`MdGeDimAspect`](MdGeDimAspect.md)

标注样式

___

### MdGeDir

• **MdGeDir**: typeof [`MdGeDir`](MdGeDir.md)

表示一个方向

___

### MdGeEdge

• **MdGeEdge**: typeof [`MdGeEdge`](MdGeEdge.md)

表示一个Edge形状

___

### MdGeEllipse

• **MdGeEllipse**: typeof [`MdGeEllipse`](MdGeEllipse.md)

表示一个椭圆

___

### MdGeExplorer

• **MdGeExplorer**: typeof [`MdGeExplorer`](MdGeExplorer.md)

表示拓扑元素遍历

___

### MdGeFace

• **MdGeFace**: typeof [`MdGeFace`](MdGeFace.md)

表示一个Face形状

___

### MdGeFillet

• **MdGeFillet**: typeof [`MdGeFillet`](MdGeFillet.md)

表示倒圆角

___

### MdGeHGeomPlane

• **MdGeHGeomPlane**: typeof [`MdGeHGeomPlane`](MdGeHGeomPlane.md)

表示几何平面句柄

___

### MdGeHGeomSurface

• **MdGeHGeomSurface**: typeof [`MdGeHGeomSurface`](MdGeHGeomSurface.md)

表示几何曲面句柄

___

### MdGeHypr

• **MdGeHypr**: typeof [`MdGeHypr`](MdGeHypr.md)

表示双曲线

___

### MdGeInterpolateBSpl

• **MdGeInterpolateBSpl**: typeof [`MdGeInterpolateBSpl`](MdGeInterpolateBSpl.md)

表示插值B样条曲线

___

### MdGeLengthDim

• **MdGeLengthDim**: typeof [`MdGeLengthDim`](MdGeLengthDim.md)

表示长度标注

___

### MdGeLight

• **MdGeLight**: typeof [`MdGeLight`](MdGeLight.md)

表示光照

___

### MdGeLine

• **MdGeLine**: typeof [`MdGeLine`](MdGeLine.md)

表示一条直线

___

### MdGeLineAspect

• **MdGeLineAspect**: typeof [`MdGeLineAspect`](MdGeLineAspect.md)

线样式

___

### MdGeListIteratorOfListOfShape

• **MdGeListIteratorOfListOfShape**: typeof [`MdGeListIteratorOfListOfShape`](MdGeListIteratorOfListOfShape.md)

表示形状链表迭代器

___

### MdGeListOfShape

• **MdGeListOfShape**: typeof [`MdGeListOfShape`](MdGeListOfShape.md)

表示形状链表

___

### MdGeLoft

• **MdGeLoft**: typeof [`MdGeLoft`](MdGeLoft.md)

表示放样

___

### MdGeMakeArcOfCircle

• **MdGeMakeArcOfCircle**: typeof [`MdGeMakeArcOfCircle`](MdGeMakeArcOfCircle.md)

表示三点圆弧

___

### MdGeMakeFace

• **MdGeMakeFace**: typeof [`MdGeMakeFace`](MdGeMakeFace.md)

表示Wire生成Face

___

### MdGeMakeThickSolid

• **MdGeMakeThickSolid**: typeof [`MdGeMakeThickSolid`](MdGeMakeThickSolid.md)

表示薄实体

___

### MdGeMakeWires

• **MdGeMakeWires**: typeof [`MdGeMakeWires`](MdGeMakeWires.md)

表示合并Edges成Wires

___

### MdGeMat

• **MdGeMat**: typeof [`MdGeMat`](MdGeMat.md)

表示一个矩阵

___

### MdGeMaterialAspect

• **MdGeMaterialAspect**: typeof [`MdGeMaterialAspect`](MdGeMaterialAspect.md)

表示材质

___

### MdGeObject

• **MdGeObject**: typeof [`MdGeObject`](MdGeObject.md)

所有类的父类，除MdGeTopo，MdGeBRep

___

### MdGeParab

• **MdGeParab**: typeof [`MdGeParab`](MdGeParab.md)

表示抛物线

___

### MdGePipe

• **MdGePipe**: typeof [`MdGePipe`](MdGePipe.md)

表示管道

___

### MdGePlane

• **MdGePlane**: typeof [`MdGePlane`](MdGePlane.md)

表示一个平面

___

### MdGePoint

• **MdGePoint**: typeof [`MdGePoint`](MdGePoint.md)

表示一个点

___

### MdGePointsToBSpl

• **MdGePointsToBSpl**: typeof [`MdGePointsToBSpl`](MdGePointsToBSpl.md)

表示拟合点B样条曲线

___

### MdGePointsToBSplSurface

• **MdGePointsToBSplSurface**: typeof [`MdGePointsToBSplSurface`](MdGePointsToBSplSurface.md)

表示拟合B样条曲面

___

### MdGePrism

• **MdGePrism**: typeof [`MdGePrism`](MdGePrism.md)

表示拉伸体

___

### MdGeRadiusDim

• **MdGeRadiusDim**: typeof [`MdGeRadiusDim`](MdGeRadiusDim.md)

表示半径标注

___

### MdGeRect

• **MdGeRect**: typeof [`MdGeRect`](MdGeRect.md)

表示一个矩形

___

### MdGeRevol

• **MdGeRevol**: typeof [`MdGeRevol`](MdGeRevol.md)

表示旋转体

___

### MdGeSequenceIteratorOfSequenceOfShape

• **MdGeSequenceIteratorOfSequenceOfShape**: typeof [`MdGeSequenceIteratorOfSequenceOfShape`](MdGeSequenceIteratorOfSequenceOfShape.md)

表示形状序列集合迭代器

___

### MdGeSequenceOfShape

• **MdGeSequenceOfShape**: typeof [`MdGeSequenceOfShape`](MdGeSequenceOfShape.md)

表示形状序列集合

___

### MdGeShape

• **MdGeShape**: typeof [`MdGeShape`](MdGeShape.md)

表示一个形状

___

### MdGeShell

• **MdGeShell**: typeof [`MdGeShell`](MdGeShell.md)

表示一个Shell形状

___

### MdGeSolid

• **MdGeSolid**: typeof [`MdGeSolid`](MdGeSolid.md)

表示一个Solid形状

___

### MdGeSphere

• **MdGeSphere**: typeof [`MdGeSphere`](MdGeSphere.md)

表示一个球体

___

### MdGeText

• **MdGeText**: typeof [`MdGeText`](MdGeText.md)

表示文字

___

### MdGeTextAspect

• **MdGeTextAspect**: typeof [`MdGeTextAspect`](MdGeTextAspect.md)

文本样式

___

### MdGeTextLabel

• **MdGeTextLabel**: typeof [`MdGeTextLabel`](MdGeTextLabel.md)

表示文字标签

___

### MdGeTopo

• **MdGeTopo**: typeof [`MdGeTopo`](MdGeTopo.md)

拓扑转换类

___

### MdGeTorus

• **MdGeTorus**: typeof [`MdGeTorus`](MdGeTorus.md)

表示圆环

___

### MdGeTransform

• **MdGeTransform**: typeof [`MdGeTransform`](MdGeTransform.md)

形状变换类

___

### MdGeTrsf

• **MdGeTrsf**: typeof [`MdGeTrsf`](MdGeTrsf.md)

表示一个变换

___

### MdGeVec

• **MdGeVec**: typeof [`MdGeVec`](MdGeVec.md)

表示一个向量

___

### MdGeVertex

• **MdGeVertex**: typeof [`MdGeVertex`](MdGeVertex.md)

表示一个Vertex形状

___

### MdGeWedge

• **MdGeWedge**: typeof [`MdGeWedge`](MdGeWedge.md)

表示一个楔形

___

### MdGeWire

• **MdGeWire**: typeof [`MdGeWire`](MdGeWire.md)

表示一个Wire形状

___

### MdGeXYZ

• **MdGeXYZ**: typeof [`MdGeXYZ`](MdGeXYZ.md)

表示一个坐标

___

### MxCF3dFilletShapeEnum

• **MxCF3dFilletShapeEnum**: typeof [`MxCF3dFilletShapeEnum`](../enums/MdGe.MxCF3dFilletShapeEnum.md)

___

### MxCFDSChamfMode

• **MxCFDSChamfMode**: typeof [`MxCFDSChamfMode`](../enums/MdGe.MxCFDSChamfMode.md)

___

### MxDimensionArrowOrientation

• **MxDimensionArrowOrientation**: typeof [`MxDimensionArrowOrientation`](../enums/MdGe.MxDimensionArrowOrientation.md)

___

### MxDimensionTextHorizontalPosition

• **MxDimensionTextHorizontalPosition**: typeof [`MxDimensionTextHorizontalPosition`](../enums/MdGe.MxDimensionTextHorizontalPosition.md)

___

### MxDimensionTextVerticalPosition

• **MxDimensionTextVerticalPosition**: typeof [`MxDimensionTextVerticalPosition`](../enums/MdGe.MxDimensionTextVerticalPosition.md)

___

### MxDisplayMode

• **MxDisplayMode**: typeof [`MxDisplayMode`](../enums/MdGe.MxDisplayMode.md)

___

### MxFontAspect

• **MxFontAspect**: typeof [`MxFontAspect`](../enums/MdGe.MxFontAspect.md)

___

### MxGAJoinTypeEnum

• **MxGAJoinTypeEnum**: typeof [`MxGAJoinTypeEnum`](../enums/MdGe.MxGAJoinTypeEnum.md)

___

### MxGAShapeEnum

• **MxGAShapeEnum**: typeof [`MxGAShapeEnum`](../enums/MdGe.MxGAShapeEnum.md)

___

### MxGFTrihedron

• **MxGFTrihedron**: typeof [`MxGFTrihedron`](../enums/MdGe.MxGFTrihedron.md)

___

### MxHorizontalTextAlignment

• **MxHorizontalTextAlignment**: typeof [`MxHorizontalTextAlignment`](../enums/MdGe.MxHorizontalTextAlignment.md)

___

### MxKindOfDimension

• **MxKindOfDimension**: typeof [`MxKindOfDimension`](../enums/MdGe.MxKindOfDimension.md)

___

### MxNameOfColor

• **MxNameOfColor**: typeof [`MxNameOfColor`](../enums/MdGe.MxNameOfColor.md)

___

### MxNameOfMaterial

• **MxNameOfMaterial**: typeof [`MxNameOfMaterial`](../enums/MdGe.MxNameOfMaterial.md)

___

### MxOffsetModeEnum

• **MxOffsetModeEnum**: typeof [`MxOffsetModeEnum`](../enums/MdGe.MxOffsetModeEnum.md)

___

### MxShapeEnum

• **MxShapeEnum**: typeof [`MxShapeEnum`](../enums/MdGe.MxShapeEnum.md)

___

### MxTextPath

• **MxTextPath**: typeof [`MxTextPath`](../enums/MdGe.MxTextPath.md)

___

### MxTypeOfAngle

• **MxTypeOfAngle**: typeof [`MxTypeOfAngle`](../enums/MdGe.MxTypeOfAngle.md)

___

### MxTypeOfAngleArrowVisibility

• **MxTypeOfAngleArrowVisibility**: typeof [`MxTypeOfAngleArrowVisibility`](../enums/MdGe.MxTypeOfAngleArrowVisibility.md)

___

### MxTypeOfColor

• **MxTypeOfColor**: typeof [`MxTypeOfColor`](../enums/MdGe.MxTypeOfColor.md)

___

### MxTypeOfDisplayText

• **MxTypeOfDisplayText**: typeof [`MxTypeOfDisplayText`](../enums/MdGe.MxTypeOfDisplayText.md)

___

### MxTypeOfLine

• **MxTypeOfLine**: typeof [`MxTypeOfLine`](../enums/MdGe.MxTypeOfLine.md)

___

### MxTypeOfMaterial

• **MxTypeOfMaterial**: typeof [`MxTypeOfMaterial`](../enums/MdGe.MxTypeOfMaterial.md)

___

### MxTypeOfReflection

• **MxTypeOfReflection**: typeof [`MxTypeOfReflection`](../enums/MdGe.MxTypeOfReflection.md)

___

### MxVerticalTextAlignment

• **MxVerticalTextAlignment**: typeof [`MxVerticalTextAlignment`](../enums/MdGe.MxVerticalTextAlignment.md)

___

### \_free

• **\_free**: (`ptr`: `number`) => `void`

#### Type declaration

▸ (`ptr`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `ptr` | `number` |

##### Returns

`void`

___

### \_malloc

• **\_malloc**: (`len`: `number`) => `number`

#### Type declaration

▸ (`len`): `number`

##### Parameters

| Name | Type |
| :------ | :------ |
| `len` | `number` |

##### Returns

`number`

___

### canvas

• **canvas**: [`HTMLCanvasElement`]( https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement )

#### Implementation of

[MxDraw3dConfig](../interfaces/MxDraw3dConfig.md).[canvas](../interfaces/MxDraw3dConfig.md#canvas)

___

### creatDocument

• **creatDocument**: () => `boolean`

#### Type declaration

▸ (): `boolean`

新建文档

##### Returns

`boolean`

___

### ctx

• **ctx**: ``null`` \| [`WebGLRenderingContext`]( https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext ) \| [`WebGL2RenderingContext`]( https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext )

___

### events

• **events**: `Object`

#### Index signature

▪ [x: `EventType`]: `Events`[keyof `Events`][]

#### Inherited from

PubSub.events

___

### executeRedo

• **executeRedo**: () => `boolean`

#### Type declaration

▸ (): `boolean`

执行redo

##### Returns

`boolean`

___

### executeUndo

• **executeUndo**: () => `boolean`

#### Type declaration

▸ (): `boolean`

执行undo

##### Returns

`boolean`

___

### fitSelectedObjects

• **fitSelectedObjects**: () => `void`

#### Type declaration

▸ (): `void`

适应选中的对象

##### Returns

`void`

___

### getFileArryBufferPointer

• **getFileArryBufferPointer**: (`theFileName`: `string`) => `number`

#### Type declaration

▸ (`theFileName`): `number`

获取文件的BufferPointer

##### Parameters

| Name | Type |
| :------ | :------ |
| `theFileName` | `string` |

##### Returns

`number`

___

### getFileSize

• **getFileSize**: (`theFileName`: `string`) => `number`

#### Type declaration

▸ (`theFileName`): `number`

获取文件的长度

##### Parameters

| Name | Type |
| :------ | :------ |
| `theFileName` | `string` |

##### Returns

`number`

___

### getViewCursorX

• **getViewCursorX**: () => `number`

#### Type declaration

▸ (): `number`

获取视图中鼠标X位置

##### Returns

`number`

___

### getViewCursorY

• **getViewCursorY**: () => `number`

#### Type declaration

▸ (): `number`

获取视图中鼠标Y位置

##### Returns

`number`

___

### getViewCursorZ

• **getViewCursorZ**: () => `number`

#### Type declaration

▸ (): `number`

获取视图中鼠标Z位置

##### Returns

`number`

___

### getViewHeight

• **getViewHeight**: () => `number`

#### Type declaration

▸ (): `number`

获取视图高度

##### Returns

`number`

___

### getViewScale

• **getViewScale**: () => `number`

#### Type declaration

▸ (): `number`

获取视图缩放比例

##### Returns

`number`

___

### getViewWidth

• **getViewWidth**: () => `number`

#### Type declaration

▸ (): `number`

获取视图宽度

##### Returns

`number`

___

### loadTextureImg

• **loadTextureImg**: (`fileUrl`: `string`, `fileName`: `string`) => `void`

#### Type declaration

▸ (`fileUrl`, `fileName`): `void`

加载贴图图片

##### Parameters

| Name | Type |
| :------ | :------ |
| `fileUrl` | `string` |
| `fileName` | `string` |

##### Returns

`void`

___

### locateFile

• `Optional` **locateFile**: (`wasmURL`: `string`, `baseURL`: `string` \| [`URL`]( https://developer.mozilla.org/en-US/docs/Web/API/URL )) => `string`

#### Type declaration

▸ (`wasmURL`, `baseURL?`): `string`

手动指定wasm文件位置

##### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `wasmURL` | `string` | `undefined` |
| `baseURL` | `string` \| [`URL`]( https://developer.mozilla.org/en-US/docs/Web/API/URL ) | `self.location.href` |

##### Returns

`string`

#### Implementation of

[MxDraw3dConfig](../interfaces/MxDraw3dConfig.md).[locateFile](../interfaces/MxDraw3dConfig.md#locatefile)

#### Inherited from

[WasmConfig](../interfaces/WasmConfig.md).[locateFile](../interfaces/WasmConfig.md#locatefile)

___

### mdGeBRep

• **mdGeBRep**: [`MdGeBRep`](MdGeBRep.md)

___

### mdGeHGeomPlane

• **mdGeHGeomPlane**: [`MdGeHGeomPlane`](MdGeHGeomPlane.md)

___

### mdGeTopo

• **mdGeTopo**: [`MdGeTopo`](MdGeTopo.md)

___

### onRuntimeInitialized

• `Optional` **onRuntimeInitialized**: () => `void`

#### Type declaration

▸ (): `void`

监听运行时初始化

##### Returns

`void`

#### Implementation of

[MxDraw3dConfig](../interfaces/MxDraw3dConfig.md).[onRuntimeInitialized](../interfaces/MxDraw3dConfig.md#onruntimeinitialized)

#### Inherited from

[WasmConfig](../interfaces/WasmConfig.md).[onRuntimeInitialized](../interfaces/WasmConfig.md#onruntimeinitialized)

___

### open3DFile

• **open3DFile**: (`file`: [`File`]( https://developer.mozilla.org/en-US/docs/Web/API/File )) => `void`

#### Type declaration

▸ (`file`): `void`

通过浏览器器File对象打开3D文件

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `file` | [`File`]( https://developer.mozilla.org/en-US/docs/Web/API/File ) | File对象 |

##### Returns

`void`

___

### openFromUrl

• **openFromUrl**: (`name`: `string`, `fileUrl`: `string`) => `void`

#### Type declaration

▸ (`name`, `fileUrl`): `void`

从Url打开

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | 名称 是生成渲染3D对象的唯一标识 |
| `fileUrl` | `string` | 文件路径 |

##### Returns

`void`

___

### print

• `Optional` **print**: (`theText`: `string`) => `string`

#### Type declaration

▸ (`theText`): `string`

打印

##### Parameters

| Name | Type |
| :------ | :------ |
| `theText` | `string` |

##### Returns

`string`

#### Implementation of

[MxDraw3dConfig](../interfaces/MxDraw3dConfig.md).[print](../interfaces/MxDraw3dConfig.md#print)

#### Inherited from

[WasmConfig](../interfaces/WasmConfig.md).[print](../interfaces/WasmConfig.md#print)

___

### printErr

• `Optional` **printErr**: (`theText`: `string`) => `void`

#### Type declaration

▸ (`theText`): `void`

打印错误

##### Parameters

| Name | Type |
| :------ | :------ |
| `theText` | `string` |

##### Returns

`void`

#### Implementation of

[MxDraw3dConfig](../interfaces/MxDraw3dConfig.md).[printErr](../interfaces/MxDraw3dConfig.md#printerr)

#### Inherited from

[WasmConfig](../interfaces/WasmConfig.md).[printErr](../interfaces/WasmConfig.md#printerr)

___

### ready

• **ready**: [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`MxDraw3d`](MxDraw3d.md)\>

完成初始化

___

### removeSelectedObjects

• **removeSelectedObjects**: () => `void`

#### Type declaration

▸ (): `void`

删除选中实体

##### Returns

`void`

___

### setObjectShowState

• **setObjectShowState**: (`theId`: `number`, `theToShow`: `boolean`) => `void`

#### Type declaration

▸ (`theId`, `theToShow`): `void`

设置显示/隐藏模型

##### Parameters

| Name | Type |
| :------ | :------ |
| `theId` | `number` |
| `theToShow` | `boolean` |

##### Returns

`void`

___

### updateCanvasSize

• **updateCanvasSize**: () => `void`

#### Type declaration

▸ (): `void`

更新画布大小

##### Returns

`void`

#### Implementation of

[MxDraw3dConfig](../interfaces/MxDraw3dConfig.md).[updateCanvasSize](../interfaces/MxDraw3dConfig.md#updatecanvassize)

___

### wasmBinary

• `Optional` **wasmBinary**: [`ArrayBuffer`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer )

二进制数据 设置wasmBinary 则 locateFile 不生效*

#### Implementation of

[MxDraw3dConfig](../interfaces/MxDraw3dConfig.md).[wasmBinary](../interfaces/MxDraw3dConfig.md#wasmbinary)

#### Inherited from

[WasmConfig](../interfaces/WasmConfig.md).[wasmBinary](../interfaces/WasmConfig.md#wasmbinary)

___

### onloadWasmMxDraw3dModel

▪ `Static` **onloadWasmMxDraw3dModel**: (`mxDraw3d`: [`MxDraw3d`](MxDraw3d.md)) => `void`

#### Type declaration

▸ (`mxDraw3d`): `void`

监听wasm 文件加载成功事件

##### Parameters

| Name | Type |
| :------ | :------ |
| `mxDraw3d` | [`MxDraw3d`](MxDraw3d.md) |

##### Returns

`void`

## Methods

### displayGround

▸ **displayGround**(`is`): `void`

* 显示地面或地面网格

#### Parameters

| Name | Type |
| :------ | :------ |
| `is` | `boolean` |

#### Returns

`void`

___

### displayObject

▸ **displayObject**(`name`): `boolean`

显示对象

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`boolean`

___

### emit

▸ **emit**<`Key`\>(`event`, `...data`): `void`

发布

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Key` | extends ``"eventModesSelected"`` \| ``"eventAddToTree"`` \| ``"eventRemoveFromTree"`` \| ``"eventFileSave"`` \| ``"eventRebuildTree"`` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `number` \| `Key` | 事件名称 |
| `...data` | [`Parameters`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#parameterstype )<{ `eventAddToTree`: (`node`: `string`) => `void` ; `eventFileSave`: (`fileName`: `string`) => `void` ; `eventModesSelected`: (`ids`: `number`[]) => `void` ; `eventRebuildTree`: (`tree_str`: `string`) => `void` ; `eventRemoveFromTree`: (`ids`: `number`[]) => `void`  }[`Key`]\> | 载荷 |

#### Returns

`void`

#### Inherited from

PubSub.emit

___

### eraseObject

▸ **eraseObject**(`name`): `boolean`

擦除对象

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`boolean`

___

### fitAllObjects

▸ **fitAllObjects**(`is`): `void`

适应所有对象

#### Parameters

| Name | Type |
| :------ | :------ |
| `is` | `boolean` |

#### Returns

`void`

___

### highLightSelShape

▸ **highLightSelShape**(`theEntry`): `void`

高亮entry对应模型

#### Parameters

| Name | Type |
| :------ | :------ |
| `theEntry` | `number` |

#### Returns

`void`

___

### off

▸ **off**<`Key`\>(`event`, `callback?`): `void`

销毁事件

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Key` | extends ``"eventModesSelected"`` \| ``"eventAddToTree"`` \| ``"eventRemoveFromTree"`` \| ``"eventFileSave"`` \| ``"eventRebuildTree"`` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `Key` | 事件名称 |
| `callback?` | (`ids`: `number`[]) => `void` \| (`node`: `string`) => `void` \| (`ids`: `number`[]) => `void` \| (`fileName`: `string`) => `void` \| (`tree_str`: `string`) => `void` | 事件方法 |

#### Returns

`void`

#### Inherited from

PubSub.off

___

### on

▸ **on**<`Key`\>(`event`, `callback`): `void`

订阅

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Key` | extends ``"eventModesSelected"`` \| ``"eventAddToTree"`` \| ``"eventRemoveFromTree"`` \| ``"eventFileSave"`` \| ``"eventRebuildTree"`` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `Key` | 事件名称 |
| `callback` | (`ids`: `number`[]) => `void` \| (`node`: `string`) => `void` \| (`ids`: `number`[]) => `void` \| (`fileName`: `string`) => `void` \| (`tree_str`: `string`) => `void` | 事件回调 |

#### Returns

`void`

#### Inherited from

PubSub.on

___

### openBRepFromMemory

▸ **openBRepFromMemory**(`fileName`, `dataBuffer`, `len`, `is?`): `boolean`

从内存打开

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fileName` | `string` | 表示文件名称 (可通过浏览器 File对象的name属性或者自定义) 是生成渲染3D对象的唯一标识 |
| `dataBuffer` | `Buffer` | 文件数据的缓冲区 |
| `len` | `number` | 缓冲区的长度 |
| `is?` | `boolean` | 是否为压缩格式 |

#### Returns

`boolean`

___

### openFromMemory

▸ **openFromMemory**(`fileName`, `dataBuffer`, `len`, `is?`): `boolean`

从内存打开

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fileName` | `string` | 表示文件名称 (可通过浏览器 File对象的name属性或者自定义) 是生成渲染3D对象的唯一标识 |
| `dataBuffer` | `number` | 文件数据的缓冲区 |
| `len` | `number` | 缓冲区的长度 |
| `is?` | `boolean` | 是否为压缩格式 |

#### Returns

`boolean`

___

### pauseMainLoop

▸ **pauseMainLoop**(): `void`

暂停主循环

#### Returns

`void`

___

### removeAllObjects

▸ **removeAllObjects**(): `void`

删除所有对象

#### Returns

`void`

___

### resumeMainLoop

▸ **resumeMainLoop**(): `void`

恢复主循环

#### Returns

`void`

___

### setCanvasSize

▸ **setCanvasSize**(`w`, `h`, `noUpdate?`): `void`

设置Canvas大小

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `w` | `number` | 宽度 |
| `h` | `number` | 高度 |
| `noUpdate?` | `boolean` | 不更新调整侦听器大小 默认 是true |

#### Returns

`void`

___

### setCubemapBackground

▸ **setCubemapBackground**(`url`): `void`

设置多维数据集贴图背景

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |

#### Returns

`void`
