[mxcad API 文档](../README.md) / McObject

# Class: McObject

McObject 类

## Table of contents

### Constructors

- [constructor](McObject.md#constructor)

### Properties

- [currentFileName](McObject.md#currentfilename)
- [event](McObject.md#event)
- [firstTimeOpenFile](McObject.md#firsttimeopenfile)
- [imp](McObject.md#imp)

### Accessors

- [database](McObject.md#database)
- [drawColor](McObject.md#drawcolor)
- [drawColorIndex](McObject.md#drawcolorindex)
- [drawDimStyle](McObject.md#drawdimstyle)
- [drawLayer](McObject.md#drawlayer)
- [drawLineTypeScale](McObject.md#drawlinetypescale)
- [drawLineWeight](McObject.md#drawlineweight)
- [drawLineWidth](McObject.md#drawlinewidth)
- [drawLinetype](McObject.md#drawlinetype)
- [drawPatternDefinition](McObject.md#drawpatterndefinition)
- [drawTextStyle](McObject.md#drawtextstyle)
- [mxdraw](McObject.md#mxdraw)

### Methods

- [addCurrentSelect](McObject.md#addcurrentselect)
- [addDimStyle](McObject.md#adddimstyle)
- [addLayer](McObject.md#addlayer)
- [addLinetype](McObject.md#addlinetype)
- [addLinetypeEx](McObject.md#addlinetypeex)
- [addPatternDefinition](McObject.md#addpatterndefinition)
- [addTextStyle](McObject.md#addtextstyle)
- [cad2doc](McObject.md#cad2doc)
- [cad2doc1](McObject.md#cad2doc1)
- [cad2doc2](McObject.md#cad2doc2)
- [callEvent](McObject.md#callevent)
- [destroyObject](McObject.md#destroyobject)
- [doc2cad](McObject.md#doc2cad)
- [doc2cad1](McObject.md#doc2cad1)
- [doc2cad2](McObject.md#doc2cad2)
- [drawArc](McObject.md#drawarc)
- [drawArc2](McObject.md#drawarc2)
- [drawArc3](McObject.md#drawarc3)
- [drawBlockReference](McObject.md#drawblockreference)
- [drawCircle](McObject.md#drawcircle)
- [drawDimAligned](McObject.md#drawdimaligned)
- [drawDimAngular](McObject.md#drawdimangular)
- [drawDimDiametric](McObject.md#drawdimdiametric)
- [drawDimOrdinate](McObject.md#drawdimordinate)
- [drawDimRadial](McObject.md#drawdimradial)
- [drawDimRotated](McObject.md#drawdimrotated)
- [drawEllipse](McObject.md#drawellipse)
- [drawEllipseArc](McObject.md#drawellipsearc)
- [drawEntity](McObject.md#drawentity)
- [drawHatch](McObject.md#drawhatch)
- [drawLine](McObject.md#drawline)
- [drawLine3d](McObject.md#drawline3d)
- [drawMText](McObject.md#drawmtext)
- [drawPathToHatch](McObject.md#drawpathtohatch)
- [drawPathToPolyline](McObject.md#drawpathtopolyline)
- [drawPathToSpline](McObject.md#drawpathtospline)
- [drawPoint](McObject.md#drawpoint)
- [drawSolid](McObject.md#drawsolid)
- [drawText](McObject.md#drawtext)
- [getAllLayoutName](McObject.md#getalllayoutname)
- [getCurrentDatabaseDrawColor](McObject.md#getcurrentdatabasedrawcolor)
- [getCurrentFileName](McObject.md#getcurrentfilename)
- [getDatabase](McObject.md#getdatabase)
- [getImp](McObject.md#getimp)
- [getMxCpp](McObject.md#getmxcpp)
- [getMxDrawObject](McObject.md#getmxdrawobject)
- [getSysVarDouble](McObject.md#getsysvardouble)
- [getSysVarLong](McObject.md#getsysvarlong)
- [getSysVarPoint](McObject.md#getsysvarpoint)
- [getSysVarString](McObject.md#getsysvarstring)
- [getViewCADCoord](McObject.md#getviewcadcoord)
- [initMxObject](McObject.md#initmxobject)
- [initRegist](McObject.md#initregist)
- [insertBlock](McObject.md#insertblock)
- [isTryVersion](McObject.md#istryversion)
- [newFile](McObject.md#newfile)
- [objectIdToObject](McObject.md#objectidtoobject)
- [on](McObject.md#on)
- [openWebFile](McObject.md#openwebfile)
- [pathLineTo](McObject.md#pathlineto)
- [pathLineToEx](McObject.md#pathlinetoex)
- [pathMakeClosed](McObject.md#pathmakeclosed)
- [pathMakeExclude](McObject.md#pathmakeexclude)
- [pathMoveTo](McObject.md#pathmoveto)
- [pathMoveToEx](McObject.md#pathmovetoex)
- [redo](McObject.md#redo)
- [regen](McObject.md#regen)
- [saveFile](McObject.md#savefile)
- [saveFileToUrl](McObject.md#savefiletourl)
- [setBrowse](McObject.md#setbrowse)
- [setCurrentLayout](McObject.md#setcurrentlayout)
- [setSysVarDouble](McObject.md#setsysvardouble)
- [setSysVarLong](McObject.md#setsysvarlong)
- [setSysVarPoint](McObject.md#setsysvarpoint)
- [setSysVarPoint2d](McObject.md#setsysvarpoint2d)
- [setSysVarString](McObject.md#setsysvarstring)
- [setViewBackgroundColor](McObject.md#setviewbackgroundcolor)
- [undo](McObject.md#undo)
- [undoMark](McObject.md#undomark)
- [updateDisplay](McObject.md#updatedisplay)
- [updateLayerDisplayStatus](McObject.md#updatelayerdisplaystatus)
- [zoomAll](McObject.md#zoomall)
- [zoomAngle](McObject.md#zoomangle)
- [zoomCenter](McObject.md#zoomcenter)
- [zoomScale](McObject.md#zoomscale)
- [zoomW](McObject.md#zoomw)

## Constructors

### constructor

• **new McObject**(`imp`)

构造函数

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `imp` | `any` | 对象实现 |

## Properties

### currentFileName

• `Private` **currentFileName**: `string` = `""`

当前文件名

___

### event

• `Private` **event**: `any` = `{}`

___

### firstTimeOpenFile

• `Private` **firstTimeOpenFile**: `boolean` = `true`

___

### imp

• `Private` **imp**: `any`

内部对象实现

## Accessors

### database

• `get` **database**(): [`McDbDatabase`](McDbDatabase.md)

返回数据库对象

#### Returns

[`McDbDatabase`](McDbDatabase.md)

___

### drawColor

• `get` **drawColor**(): [`McCmColor`](McCmColor.md)

获取绘制颜色

#### Returns

[`McCmColor`](McCmColor.md)

返回绘制颜色

• `set` **drawColor**(`val`): `void`

设置绘制颜色

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val` | [`McCmColor`](McCmColor.md) | 绘制颜色 |

#### Returns

`void`

___

### drawColorIndex

• `get` **drawColorIndex**(): `number`

设置绘制颜色索引

#### Returns

`number`

• `set` **drawColorIndex**(`val`): `void`

设置绘制颜色索引

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val` | `number` | 绘制颜色,ColorIndexType |

#### Returns

`void`

___

### drawDimStyle

• `get` **drawDimStyle**(): `string`

获取当前绘制的标注样式

#### Returns

`string`

• `set` **drawDimStyle**(`val`): `void`

设置当前绘制的标注样式

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val` | `string` | 样式名称 |

#### Returns

`void`

___

### drawLayer

• `get` **drawLayer**(): `string`

获取绘制图层

#### Returns

`string`

返回绘制图层

• `set` **drawLayer**(`val`): `void`

设置绘制图层

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val` | `string` | 绘制图层 |

#### Returns

`void`

___

### drawLineTypeScale

• `get` **drawLineTypeScale**(): `number`

获取绘制线型比例

#### Returns

`number`

返回绘制线型比例

• `set` **drawLineTypeScale**(`val`): `void`

设置绘制线型比例

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val` | `number` | 绘制线型比例 |

#### Returns

`void`

___

### drawLineWeight

• `get` **drawLineWeight**(): [`LineWeight`](../enums/McDb.LineWeight.md)

获取绘制线宽

#### Returns

[`LineWeight`](../enums/McDb.LineWeight.md)

返回绘制线宽

• `set` **drawLineWeight**(`val`): `void`

设置绘制线宽

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val` | [`LineWeight`](../enums/McDb.LineWeight.md) | 绘制线宽 |

#### Returns

`void`

___

### drawLineWidth

• `get` **drawLineWidth**(): `number`

获取当前绘制的线宽

#### Returns

`number`

• `set` **drawLineWidth**(`val`): `void`

设置当前绘制的线宽

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val` | `number` | 线宽 |

#### Returns

`void`

___

### drawLinetype

• `get` **drawLinetype**(): `string`

获取绘制线型

#### Returns

`string`

返回绘制线型

• `set` **drawLinetype**(`val`): `void`

设置绘制线型

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val` | `string` | 绘制线型 |

#### Returns

`void`

___

### drawPatternDefinition

• `get` **drawPatternDefinition**(): `string`

获取当前绘制的线型定义

#### Returns

`string`

• `set` **drawPatternDefinition**(`val`): `void`

设置当前绘制的线型定义

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val` | `string` | 线型定义 |

#### Returns

`void`

___

### drawTextStyle

• `get` **drawTextStyle**(): `string`

获取绘制文字样式

#### Returns

`string`

返回绘制文字样式

• `set` **drawTextStyle**(`val`): `void`

设置绘制文字样式

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val` | `string` | 绘制文字样式 |

#### Returns

`void`

___

### mxdraw

• `get` **mxdraw**(): `MxDrawObject`

返回与MxCAD对象绑定的MxDraw对象。

#### Returns

`MxDrawObject`

## Methods

### addCurrentSelect

▸ **addCurrentSelect**(`id`): `void`

把对象添加当前选择中

**`Example`**

```typescript
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | [`McObjectId`](McObjectId.md) | 对象id |

#### Returns

`void`

void

___

### addDimStyle

▸ **addDimStyle**(`pszName`, `pszDoubleData`, `pszIntData`, `pszStringData`, `pszIdData`): [`McObjectId`](McObjectId.md)

添加标注样式

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pszName` | `string` | 样式名称 |
| `pszDoubleData` | `string` | 双精度型数据 |
| `pszIntData` | `string` | 整型数据 |
| `pszStringData` | `string` | 字符串型数据 |
| `pszIdData` | `string` | ID 型数据 |

#### Returns

[`McObjectId`](McObjectId.md)

___

### addLayer

▸ **addLayer**(`string`): [`McObjectId`](McObjectId.md)

添加图层

#### Parameters

| Name | Type |
| :------ | :------ |
| `string` | `string` |

#### Returns

[`McObjectId`](McObjectId.md)

___

### addLinetype

▸ **addLinetype**(`sName`, `sLineDefine`): [`McObjectId`](McObjectId.md)

添加线型

#### Parameters

| Name | Type |
| :------ | :------ |
| `sName` | `string` |
| `sLineDefine` | `string` |

#### Returns

[`McObjectId`](McObjectId.md)

___

### addLinetypeEx

▸ **addLinetypeEx**(`sName`, `sLineDefine`, `sTextStyle?`): [`McObjectId`](McObjectId.md)

添加线型

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `sName` | `string` | `undefined` |
| `sLineDefine` | `string` | `undefined` |
| `sTextStyle` | `string` | `""` |

#### Returns

[`McObjectId`](McObjectId.md)

___

### addPatternDefinition

▸ **addPatternDefinition**(`sName`, `sDefinitionData`): `void`

增加一个图案定义

#### Parameters

| Name | Type |
| :------ | :------ |
| `sName` | `string` |
| `sDefinitionData` | `string` |

#### Returns

`void`

___

### addTextStyle

▸ **addTextStyle**(`sName`, `sFileName`, `sBigFontFileName`, `dXScale`): [`McObjectId`](McObjectId.md)

添加文字样式

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `sName` | `string` | - |
| `sFileName` | `string` | - |
| `sBigFontFileName` | `string` | - |
| `dXScale` | `number` | X 方向缩放比例 |

#### Returns

[`McObjectId`](McObjectId.md)

___

### cad2doc

▸ **cad2doc**(`pt`): [`McGePoint3d`](McGePoint3d.md)

CAD图纸坐标到当前绘图坐标

#### Parameters

| Name | Type |
| :------ | :------ |
| `pt` | [`McGePoint3d`](McGePoint3d.md) |

#### Returns

[`McGePoint3d`](McGePoint3d.md)

___

### cad2doc1

▸ **cad2doc1**(`pt`): `Vector3`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pt` | [`McGePoint3d`](McGePoint3d.md) |

#### Returns

`Vector3`

___

### cad2doc2

▸ **cad2doc2**(`x`, `y`, `z`): `Vector3`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `z` | `number` |

#### Returns

`Vector3`

___

### callEvent

▸ `Private` **callEvent**(`sEventName`, `param?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `sEventName` | `string` |
| `param?` | `any` |

#### Returns

`boolean`

___

### destroyObject

▸ **destroyObject**(`pObjectImp`): `void`

销毁指定的 McRxObjectImp 对象

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pObjectImp` | `McRxObjectImp` | 待销毁的 McRxObjectImp 对象 |

#### Returns

`void`

___

### doc2cad

▸ **doc2cad**(`pt`): [`McGePoint3d`](McGePoint3d.md)

当前绘图坐标到CAD图纸坐标.

#### Parameters

| Name | Type |
| :------ | :------ |
| `pt` | [`McGePoint3d`](McGePoint3d.md) |

#### Returns

[`McGePoint3d`](McGePoint3d.md)

___

### doc2cad1

▸ **doc2cad1**(`pt`): [`McGePoint3d`](McGePoint3d.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `pt` | `Vector3` |

#### Returns

[`McGePoint3d`](McGePoint3d.md)

___

### doc2cad2

▸ **doc2cad2**(`x`, `y`, `z`): [`McGePoint3d`](McGePoint3d.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `z` | `number` |

#### Returns

[`McGePoint3d`](McGePoint3d.md)

___

### drawArc

▸ **drawArc**(`dCenterX`, `dCenterY`, `dRadius`, `dStartAng`, `dEndAng`): [`McObjectId`](McObjectId.md)

绘制圆弧

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dCenterX` | `number` | 圆心 X 坐标 |
| `dCenterY` | `number` | 圆心 Y 坐标 |
| `dRadius` | `number` | 半径 |
| `dStartAng` | `number` | 起始角度，单位为弧度 |
| `dEndAng` | `number` | 结束角度，单位为弧度 |

#### Returns

[`McObjectId`](McObjectId.md)

成功返回 1，失败返回 0

___

### drawArc2

▸ **drawArc2**(`dStartPointX`, `dStartPointY`, `dMidPointX`, `dMidPointY`, `dEndPointX`, `dEndPointY`): [`McObjectId`](McObjectId.md)

绘制圆弧

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dStartPointX` | `number` | 起始点 X 坐标 |
| `dStartPointY` | `number` | 起始点 Y 坐标 |
| `dMidPointX` | `number` | 中间点 X 坐标 |
| `dMidPointY` | `number` | 中间点 Y 坐标 |
| `dEndPointX` | `number` | 结束点 X 坐标 |
| `dEndPointY` | `number` | 结束点 Y 坐标 |

#### Returns

[`McObjectId`](McObjectId.md)

___

### drawArc3

▸ **drawArc3**(`dStartPointX`, `dStartPointY`, `dEndPointX`, `dEndPointY`, `dBulge`): [`McObjectId`](McObjectId.md)

绘制圆弧

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dStartPointX` | `number` | 起始点 X 坐标 |
| `dStartPointY` | `number` | 起始点 Y 坐标 |
| `dEndPointX` | `number` | 结束点 X 坐标 |
| `dEndPointY` | `number` | 结束点 Y 坐标 |
| `dBulge` | `number` | 凸度 |

#### Returns

[`McObjectId`](McObjectId.md)

___

### drawBlockReference

▸ **drawBlockReference**(`dPosX`, `dPosY`, `sBlkName`, `dScale`, `dAng`): [`McObjectId`](McObjectId.md)

绘制块参照

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dPosX` | `number` | 参照位置 X 坐标 |
| `dPosY` | `number` | 参照位置 Y 坐标 |
| `sBlkName` | `string` | - |
| `dScale` | `number` | 缩放比例 |
| `dAng` | `number` | 旋转角度，单位为弧度 |

#### Returns

[`McObjectId`](McObjectId.md)

成功返回 1，失败返回 0

___

### drawCircle

▸ **drawCircle**(`dCenterX`, `dCenterY`, `dRadius`): [`McObjectId`](McObjectId.md)

绘制圆

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dCenterX` | `number` | 圆心 X 坐标 |
| `dCenterY` | `number` | 圆心 Y 坐标 |
| `dRadius` | `number` | 半径 |

#### Returns

[`McObjectId`](McObjectId.md)

___

### drawDimAligned

▸ **drawDimAligned**(`dExtLine1PointX`, `dExtLine1PointY`, `dExtLine2PointX`, `dExtLine2PointY`, `dTextPositionX`, `dTextPositionY`): [`McObjectId`](McObjectId.md)

绘制对齐标注

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dExtLine1PointX` | `number` | 第一条尺线起点 X 坐标 |
| `dExtLine1PointY` | `number` | 第一条尺线起点 Y 坐标 |
| `dExtLine2PointX` | `number` | 第二条尺线起点 X 坐标 |
| `dExtLine2PointY` | `number` | 第二条尺线起点 Y 坐标 |
| `dTextPositionX` | `number` | 文本位置 X 坐标 |
| `dTextPositionY` | `number` | 文本位置 Y 坐标 |

#### Returns

[`McObjectId`](McObjectId.md)

成功返回 1，失败返回 0

___

### drawDimAngular

▸ **drawDimAngular**(`dAngleVertexX`, `dAngleVertexY`, `dFirstEndPointX`, `dFirstEndPointY`, `dSecondEndPointX`, `dSecondEndPointY`, `dTextPointX`, `dTextPointY`): [`McObjectId`](McObjectId.md)

绘制角度标注

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dAngleVertexX` | `number` | 角度顶点 X 坐标 |
| `dAngleVertexY` | `number` | 角度顶点 Y 坐标 |
| `dFirstEndPointX` | `number` | 第一条尺线起点 X 坐标 |
| `dFirstEndPointY` | `number` | 第一条尺线起点 Y 坐标 |
| `dSecondEndPointX` | `number` | 第二条尺线起点 X 坐标 |
| `dSecondEndPointY` | `number` | 第二条尺线起点 Y 坐标 |
| `dTextPointX` | `number` | 文本位置 X 坐标 |
| `dTextPointY` | `number` | 文本位置 Y 坐标 |

#### Returns

[`McObjectId`](McObjectId.md)

成功返回 1，失败返回 0

___

### drawDimDiametric

▸ **drawDimDiametric**(`dChordPointX`, `dChordPointY`, `dFarChordPointX`, `dFarChordPointY`, `dLeaderLength`): [`McObjectId`](McObjectId.md)

绘制直径标注

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dChordPointX` | `number` | 弦线端点 X 坐标 |
| `dChordPointY` | `number` | 弦线端点 Y 坐标 |
| `dFarChordPointX` | `number` | 弦线远端点 X 坐标 |
| `dFarChordPointY` | `number` | 弦线远端点 Y 坐标 |
| `dLeaderLength` | `number` | 引线长度 |

#### Returns

[`McObjectId`](McObjectId.md)

成功返回 1，失败返回 0

___

### drawDimOrdinate

▸ **drawDimOrdinate**(`dDefinitionPointX`, `dDefinitionPointY`, `dDeaderEndPointX`, `dDeaderEndPointY`, `isUseXAxis`): [`McObjectId`](McObjectId.md)

绘制标注线性尺寸

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dDefinitionPointX` | `number` | 定义点 X 坐标 |
| `dDefinitionPointY` | `number` | 定义点 Y 坐标 |
| `dDeaderEndPointX` | `number` | 标注终点 X 坐标 |
| `dDeaderEndPointY` | `number` | 标注终点 Y 坐标 |
| `isUseXAxis` | `boolean` | 是否沿 X 轴方向标注 |

#### Returns

[`McObjectId`](McObjectId.md)

绘制结果

___

### drawDimRadial

▸ **drawDimRadial**(`dCenterX`, `dCenterY`, `dChordPointX`, `dChordPointY`, `dLeaderLength`): [`McObjectId`](McObjectId.md)

绘制标注径向尺寸

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dCenterX` | `number` | 中心点 X 坐标 |
| `dCenterY` | `number` | 中心点 Y 坐标 |
| `dChordPointX` | `number` | 弦线端点 X 坐标 |
| `dChordPointY` | `number` | 弦线端点 Y 坐标 |
| `dLeaderLength` | `number` | 标注线长度 |

#### Returns

[`McObjectId`](McObjectId.md)

绘制结果

___

### drawDimRotated

▸ **drawDimRotated**(`dExtLine1PointX`, `dExtLine1PointY`, `dExtLine2PointX`, `dExtLine2PointY`, `dDimLineLocationX`, `dDimLineLocationY`, `dRotationAngle`): [`McObjectId`](McObjectId.md)

绘制旋转标注

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dExtLine1PointX` | `number` | 第一条尺线起点 X 坐标 |
| `dExtLine1PointY` | `number` | 第一条尺线起点 Y 坐标 |
| `dExtLine2PointX` | `number` | 第二条尺线起点 X 坐标 |
| `dExtLine2PointY` | `number` | 第二条尺线起点 Y 坐标 |
| `dDimLineLocationX` | `number` | 标注线位置 X 坐标 |
| `dDimLineLocationY` | `number` | 标注线位置 Y 坐标 |
| `dRotationAngle` | `number` | 旋转角度，单位为弧度 |

#### Returns

[`McObjectId`](McObjectId.md)

成功返回 1，失败返回 0

___

### drawEllipse

▸ **drawEllipse**(`dCenterX`, `dCenterY`, `dMajorAxisX`, `dMajorAxisY`, `dRadiusRatio`): [`McObjectId`](McObjectId.md)

绘制椭圆

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dCenterX` | `number` | 椭圆中心 X 坐标 |
| `dCenterY` | `number` | 椭圆中心 Y 坐标 |
| `dMajorAxisX` | `number` | 长轴 X 坐标 |
| `dMajorAxisY` | `number` | 长轴 Y 坐标 |
| `dRadiusRatio` | `number` | 短轴与长轴的比例 |

#### Returns

[`McObjectId`](McObjectId.md)

成功返回 1，失败返回 0

___

### drawEllipseArc

▸ **drawEllipseArc**(`dCenterX`, `dCenterY`, `dMajorAxisX`, `dMajorAxisY`, `dRadiusRatio`, `dStartAng`, `dEndAng`): [`McObjectId`](McObjectId.md)

绘制椭圆弧

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dCenterX` | `number` | 椭圆中心 X 坐标 |
| `dCenterY` | `number` | 椭圆中心 Y 坐标 |
| `dMajorAxisX` | `number` | 长轴 X 坐标 |
| `dMajorAxisY` | `number` | 长轴 Y 坐标 |
| `dRadiusRatio` | `number` | 短轴与长轴的比例 |
| `dStartAng` | `number` | 起始角度，单位为弧度 |
| `dEndAng` | `number` | 结束角度，单位为弧度 |

#### Returns

[`McObjectId`](McObjectId.md)

___

### drawEntity

▸ **drawEntity**(`entity`): [`McObjectId`](McObjectId.md)

绘制实体

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `entity` | [`McDbEntity`](McDbEntity.md) | 实体对象 |

#### Returns

[`McObjectId`](McObjectId.md)

绘制结果

___

### drawHatch

▸ **drawHatch**(`hatch`, `dPatternScale?`): [`McObjectId`](McObjectId.md)

绘制填充对象

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `hatch` | [`McDbHatch`](McDbHatch.md) | `undefined` |
| `dPatternScale` | `number` | `1.0` |

#### Returns

[`McObjectId`](McObjectId.md)

绘制对象id

___

### drawLine

▸ **drawLine**(`dX1`, `dY1`, `dX2`, `dY2`): [`McObjectId`](McObjectId.md)

绘制直线

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dX1` | `number` | 起点 X 坐标 |
| `dY1` | `number` | 起点 Y 坐标 |
| `dX2` | `number` | 终点 X 坐标 |
| `dY2` | `number` | 终点 Y 坐标 |

#### Returns

[`McObjectId`](McObjectId.md)

绘制的直线 ID

___

### drawLine3d

▸ **drawLine3d**(`dX1`, `dY1`, `dZ1`, `dX2`, `dY2`, `dZ2`): [`McObjectId`](McObjectId.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `dX1` | `number` |
| `dY1` | `number` |
| `dZ1` | `number` |
| `dX2` | `number` |
| `dY2` | `number` |
| `dZ2` | `number` |

#### Returns

[`McObjectId`](McObjectId.md)

___

### drawMText

▸ **drawMText**(`dPosX`, `dPosY`, `sContents`, `dHeight`, `dWidth`, `dRotation`, `iAttachment`): [`McObjectId`](McObjectId.md)

绘制多行文本

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dPosX` | `number` | 文本位置 X 坐标 |
| `dPosY` | `number` | 文本位置 Y 坐标 |
| `sContents` | `string` | - |
| `dHeight` | `number` | 文本高度 |
| `dWidth` | `number` | 文本宽度 |
| `dRotation` | `number` | 旋转角度，单位为弧度 |
| `iAttachment` | [`AttachmentPoint`](../enums/McDb.AttachmentPoint.md) | 对齐方式 |

#### Returns

[`McObjectId`](McObjectId.md)

成功返回 1，失败返回 0

___

### drawPathToHatch

▸ **drawPathToHatch**(`dPatternScale`): [`McObjectId`](McObjectId.md)

将路径转换为填充图案

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dPatternScale` | `number` | 图案缩放比例 |

#### Returns

[`McObjectId`](McObjectId.md)

转换结果

___

### drawPathToPolyline

▸ **drawPathToPolyline**(): [`McObjectId`](McObjectId.md)

将路径转换为折线

#### Returns

[`McObjectId`](McObjectId.md)

转换结果

___

### drawPathToSpline

▸ **drawPathToSpline**(): [`McObjectId`](McObjectId.md)

将路径转换为样条曲线

#### Returns

[`McObjectId`](McObjectId.md)

转换结果

___

### drawPoint

▸ **drawPoint**(`dX`, `dY`): [`McObjectId`](McObjectId.md)

绘制点

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dX` | `number` | X 坐标 |
| `dY` | `number` | Y 坐标 |

#### Returns

[`McObjectId`](McObjectId.md)

___

### drawSolid

▸ **drawSolid**(`dX1`, `dY1`, `dX2`, `dY2`, `dX3`, `dY3`, `dX4`, `dY4`): [`McObjectId`](McObjectId.md)

绘制实体

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dX1` | `number` | 第一个点 X 坐标 |
| `dY1` | `number` | 第一个点 Y 坐标 |
| `dX2` | `number` | 第二个点 X 坐标 |
| `dY2` | `number` | 第二个点 Y 坐标 |
| `dX3` | `number` | 第三个点 X 坐标 |
| `dY3` | `number` | 第三个点 Y 坐标 |
| `dX4` | `number` | 第四个点 X 坐标 |
| `dY4` | `number` | 第四个点 Y 坐标 |

#### Returns

[`McObjectId`](McObjectId.md)

成功返回实体号，失败返回 0

___

### drawText

▸ **drawText**(`dPosX`, `dPosY`, `pszText`, `dHeight`, `dRotation`, `horizontalMode`, `verticalMode`): [`McObjectId`](McObjectId.md)

绘制单行文本

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dPosX` | `number` | 文本位置 X 坐标 |
| `dPosY` | `number` | 文本位置 Y 坐标 |
| `pszText` | `string` | 文本内容 |
| `dHeight` | `number` | 文本高度 |
| `dRotation` | `number` | 旋转角度，单位为弧度 |
| `horizontalMode` | [`TextHorzMode`](../enums/McDb.TextHorzMode.md) | 横向对齐方式 |
| `verticalMode` | [`TextVertMode`](../enums/McDb.TextVertMode.md) | 纵向对齐方式 |

#### Returns

[`McObjectId`](McObjectId.md)

成功返回 1，失败返回 0

___

### getAllLayoutName

▸ **getAllLayoutName**(): [`McGeStringArray`](McGeStringArray.md)

得到所有布局名

#### Returns

[`McGeStringArray`](McGeStringArray.md)

___

### getCurrentDatabaseDrawColor

▸ **getCurrentDatabaseDrawColor**(): `Color`

返回当前数据库中设置的绘制颜色，它会自动依据背景色，把黑白色转换。

#### Returns

`Color`

___

### getCurrentFileName

▸ **getCurrentFileName**(): `string`

获取当前文件名

#### Returns

`string`

当前文件名

___

### getDatabase

▸ **getDatabase**(): [`McDbDatabase`](McDbDatabase.md)

获取数据库对象

#### Returns

[`McDbDatabase`](McDbDatabase.md)

数据库对象

___

### getImp

▸ **getImp**(): `any`

获取对象实现

#### Returns

`any`

对象实现

___

### getMxCpp

▸ **getMxCpp**(): `any`

返加MxCpp对象，它会在MxDraw模块中调用。

#### Returns

`any`

___

### getMxDrawObject

▸ **getMxDrawObject**(): `MxDrawObject`

返回与MxCAD对象绑定的MxDraw对象。

#### Returns

`MxDrawObject`

___

### getSysVarDouble

▸ **getSysVarDouble**(`varName`): `number`

获取系统变量的浮点数值

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `varName` | `string` | 变量名称 |

#### Returns

`number`

变量的浮点数值

___

### getSysVarLong

▸ **getSysVarLong**(`varName`): `number`

获取系统变量的整数值

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `varName` | `string` | 变量名称 |

#### Returns

`number`

变量的整数值

___

### getSysVarPoint

▸ **getSysVarPoint**(`varName`): [`McGePoint3d`](McGePoint3d.md)

获取系统变量的点数值

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `varName` | `string` | 变量名称 |

#### Returns

[`McGePoint3d`](McGePoint3d.md)

变量的点数值

___

### getSysVarString

▸ **getSysVarString**(`varName`): `string`

获取系统变量的字符串值

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `varName` | `string` | 变量名称 |

#### Returns

`string`

变量的字符串值

___

### getViewCADCoord

▸ **getViewCADCoord**(): `Object`

返回当前视区的显示范围,cad坐标。

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `pt1` | [`McGePoint3d`](McGePoint3d.md) |
| `pt2` | [`McGePoint3d`](McGePoint3d.md) |
| `pt3` | [`McGePoint3d`](McGePoint3d.md) |
| `pt4` | [`McGePoint3d`](McGePoint3d.md) |

___

### initMxObject

▸ **initMxObject**(`mxObject`): `void`

初始化对象模型

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mxObject` | `any` | 对象模型 |

#### Returns

`void`

___

### initRegist

▸ **initRegist**(`sRegist`): `void`

初始化用户注册数据.

#### Parameters

| Name | Type |
| :------ | :------ |
| `sRegist` | `string` |

#### Returns

`void`

___

### insertBlock

▸ **insertBlock**(`sFileUrl`, `sBlkName`, `isWorkThread?`, `fetchAttributes?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`McObjectId`](McObjectId.md)\>

插件图块文件

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `sFileUrl` | `string` | `undefined` | 网络文件路径 |
| `sBlkName` | `string` | `undefined` | 插入的图块的块名 |
| `isWorkThread` | `boolean` | `true` | 是否使用工作线程打开文件，默认为 true |
| `fetchAttributes` | `number` | `0` | 1：EMSCRIPTEN_FETCH_LOAD_TO_MEMORY,把图纸数据加载内存中，0:EMSCRIPTEN_FETCH_LOAD_TO_MEMORY \| EMSCRIPTEN_FETCH_PERSIST_FILE \| EMSCRIPTEN_FETCH_APPEND，把图纸数据加到IndexedDB。 |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`McObjectId`](McObjectId.md)\>

___

### isTryVersion

▸ **isTryVersion**(): `boolean`

当前程序是否是试用版本.

#### Returns

`boolean`

___

### newFile

▸ **newFile**(): `boolean`

清空当前图上内容，新建一个文件

#### Returns

`boolean`

___

### objectIdToObject

▸ **objectIdToObject**(`lIdIndex`): ``null`` \| [`McDbObject`](McDbObject.md)

将 lIdIndex 转换成 McDbObject 对象

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `lIdIndex` | `number` | 对象 ID |

#### Returns

``null`` \| [`McDbObject`](McDbObject.md)

与 ID 对应的 McDbObject 对象，如果对象不存在则返回 null

___

### on

▸ **on**(`name`, `fun`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `fun` | `object` |

#### Returns

`void`

___

### openWebFile

▸ **openWebFile**(`sFileUrl`, `retCall?`, `isWorkThread?`, `initialParameter?`, `fetchAttributes?`): `boolean`

打开网络文件

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `sFileUrl` | `string` | `undefined` | 网络文件路径 |
| `retCall?` | (`iRet`: `number`) => `void` | `undefined` | 回调函数，可选参数，打开文件完成后的回调函数，参数为打开文件的结果,0表示成功，其他值表示失败 |
| `isWorkThread` | `boolean` | `true` | 是否使用工作线程打开文件，默认为 true |
| `initialParameter?` | `object` | `undefined` | - |
| `fetchAttributes` | `number` | `0` | 1：EMSCRIPTEN_FETCH_LOAD_TO_MEMORY,把图纸数据加载内存中，0:EMSCRIPTEN_FETCH_LOAD_TO_MEMORY \| EMSCRIPTEN_FETCH_PERSIST_FILE \| EMSCRIPTEN_FETCH_APPEND，把图纸数据加到IndexedDB。 |

#### Returns

`boolean`

是否成功打开文件

___

### pathLineTo

▸ **pathLineTo**(`dX`, `dY`): `void`

从当前位置画一条直线到指定位置

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dX` | `number` | X 坐标 |
| `dY` | `number` | Y 坐标 |

#### Returns

`void`

___

### pathLineToEx

▸ **pathLineToEx**(`dX`, `dY`, `dStartWidth`, `dEndWidth`, `dBulge`): `void`

从当前位置画一条直线到指定位置，同时指定起始宽度、终止宽度和凸度

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dX` | `number` | X 坐标 |
| `dY` | `number` | Y 坐标 |
| `dStartWidth` | `number` | 起始宽度 |
| `dEndWidth` | `number` | 终止宽度 |
| `dBulge` | `number` | 凸度 |

#### Returns

`void`

___

### pathMakeClosed

▸ **pathMakeClosed**(): `void`

闭合路径

#### Returns

`void`

___

### pathMakeExclude

▸ **pathMakeExclude**(`isExclude`): `void`

把当前路径做上排除标记，主要用于填充的绘制，把这个路径组成的闭合区域在填充中挖去

#### Parameters

| Name | Type |
| :------ | :------ |
| `isExclude` | `boolean` |

#### Returns

`void`

___

### pathMoveTo

▸ **pathMoveTo**(`dX`, `dY`): `void`

将路径移动到指定位置

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dX` | `number` | X 坐标 |
| `dY` | `number` | Y 坐标 |

#### Returns

`void`

___

### pathMoveToEx

▸ **pathMoveToEx**(`dX`, `dY`, `dStartWidth`, `dEndWidth`, `dBulge`): `void`

移动路径到指定位置，同时指定起始宽度、终止宽度和凸度

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dX` | `number` | X 坐标 |
| `dY` | `number` | Y 坐标 |
| `dStartWidth` | `number` | 起始宽度 |
| `dEndWidth` | `number` | 终止宽度 |
| `dBulge` | `number` | 凸度 |

#### Returns

`void`

___

### redo

▸ **redo**(): `void`

反回退，重做。

#### Returns

`void`

___

### regen

▸ **regen**(`delayTime?`): `void`

重绘图上所有对象，在调用ZoomAll,ZoomW后，因为是异步执行，可能需要延迟调用Regen才会启作用。

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `delayTime` | `number` | `0` |

#### Returns

`void`

___

### saveFile

▸ **saveFile**(`filename?`, `call?`, `isDownland?`, `isShowSaveFileDialog?`, `parameter?`): `boolean`

保存文件

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `filename?` | `string` | `undefined` | 另存为的新文件名称 |
| `call?` | (`data`: `any`) => `void` | `undefined` | 回调函数，可选参数，文件保存完成后的回调函数，参数为文件数据 |
| `isDownland` | `boolean` | `true` | 是否下载文件，默认为 true |
| `isShowSaveFileDialog` | `boolean` | `true` | 是否显示保存文件对话框，默认为 true |
| `parameter?` | `object` | `undefined` | - |

#### Returns

`boolean`

是否成功保存文件

___

### saveFileToUrl

▸ **saveFileToUrl**(`sSaveProgramUrl`, `call`): `boolean`

将文件保存并转换为网络路径下载

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `sSaveProgramUrl` | `string` | 要保存文件的路径 |
| `call` | (`iResult`: `number`, `sServerResult`: `string`) => `void` | 保存文件的结果回调 |

#### Returns

`boolean`

是否成功保存文件

___

### setBrowse

▸ **setBrowse**(`browse`): `void`

设置浏览模式

#### Parameters

| Name | Type |
| :------ | :------ |
| `browse` | `boolean` |

#### Returns

`void`

___

### setCurrentLayout

▸ **setCurrentLayout**(`layoutName`): `void`

设置所有布局名

#### Parameters

| Name | Type |
| :------ | :------ |
| `layoutName` | `string` |

#### Returns

`void`

___

### setSysVarDouble

▸ **setSysVarDouble**(`varName`, `val`): `boolean`

设置系统变量的浮点数值

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `varName` | `string` | 变量名称 |
| `val` | `number` | 变量的浮点数值 |

#### Returns

`boolean`

是否成功设置变量值

___

### setSysVarLong

▸ **setSysVarLong**(`varName`, `val`): `boolean`

设置系统变量的整数值

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `varName` | `string` | 变量名称 |
| `val` | `number` | 变量的整数值 |

#### Returns

`boolean`

是否成功设置变量值

___

### setSysVarPoint

▸ **setSysVarPoint**(`varName`, `pt`): `boolean`

设置系统变量的点数值

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `varName` | `string` | 变量名称 |
| `pt` | [`McGePoint3d`](McGePoint3d.md) | - |

#### Returns

`boolean`

是否成功设置变量值

___

### setSysVarPoint2d

▸ **setSysVarPoint2d**(`varName`, `pt`): `boolean`

设置系统变量的2维点数值

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `varName` | `string` | 变量名称 |
| `pt` | [`McGePoint3d`](McGePoint3d.md) | - |

#### Returns

`boolean`

是否成功设置变量值

___

### setSysVarString

▸ **setSysVarString**(`varName`, `val`): `any`

设置系统变量的字符串值

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `varName` | `string` | 变量名称 |
| `val` | `string` | 变量的字符串值 |

#### Returns

`any`

是否成功设置变量值

___

### setViewBackgroundColor

▸ **setViewBackgroundColor**(`red`, `green`, `blue`): `void`

设置视区的背景色.

#### Parameters

| Name | Type |
| :------ | :------ |
| `red` | `number` |
| `green` | `number` |
| `blue` | `number` |

#### Returns

`void`

___

### undo

▸ **undo**(): `void`

回退到上一个命令或标记处

#### Returns

`void`

___

### undoMark

▸ **undoMark**(): `void`

在当前设置一个回退标记.

#### Returns

`void`

___

### updateDisplay

▸ **updateDisplay**(`isImmediate?`, `delayTime?`): `void`

更新显示

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `isImmediate` | `boolean` | `false` |
| `delayTime` | `number` | `0` |

#### Returns

`void`

___

### updateLayerDisplayStatus

▸ **updateLayerDisplayStatus**(): `void`

更新图层的显示

#### Returns

`void`

___

### zoomAll

▸ **zoomAll**(): `boolean`

显示全部

#### Returns

`boolean`

___

### zoomAngle

▸ **zoomAngle**(`viewangle`): `void`

设置显示视区的角度，单位是PI.

**`Example`**

```typescript
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `viewangle` | `number` |

#### Returns

`void`

void

___

### zoomCenter

▸ **zoomCenter**(`dCenX`, `dCenY`): `void`

把当前显示范围移到指定的位置,dCenX,dCenY是DWG图纸坐标。

**`Example`**

```typescript
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `dCenX` | `number` |
| `dCenY` | `number` |

#### Returns

`void`

void

___

### zoomScale

▸ **zoomScale**(`scale`): `void`

缩放当前显示范围，它是相对于当前显示范围进行缩放

**`Example`**

```typescript
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scale` | `number` | scale缩放比例 |

#### Returns

`void`

void

___

### zoomW

▸ **zoomW**(`minPt`, `maxPt`): `void`

把当前显示范围移到指定的显示范围

**`Example`**

```typescript
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `minPt` | [`McGePoint3d`](McGePoint3d.md) | 坐标1 McGePoint3d |
| `maxPt` | [`McGePoint3d`](McGePoint3d.md) | 坐标2 McGePoint3d |

#### Returns

`void`

void
