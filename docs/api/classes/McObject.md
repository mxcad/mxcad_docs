[mxcad API 文档](../README.md) / McObject

# Class: McObject

McObject 类

## Table of contents

### Constructors

- [constructor](McObject.md#constructor)

### Properties

- [imp](McObject.md#imp)
- [mxObject](McObject.md#mxobject)
- [currentFileName](McObject.md#currentfilename)

### Accessors

- [DrawColor](McObject.md#drawcolor)
- [DrawDimStyle](McObject.md#drawdimstyle)
- [DrawLayer](McObject.md#drawlayer)
- [DrawLineTypeScale](McObject.md#drawlinetypescale)
- [DrawLineWeight](McObject.md#drawlineweight)
- [DrawLineWidth](McObject.md#drawlinewidth)
- [DrawLinetype](McObject.md#drawlinetype)
- [DrawPatternDefinition](McObject.md#drawpatterndefinition)
- [DrawTextStyle](McObject.md#drawtextstyle)

### Methods

- [AddDimStyle](McObject.md#adddimstyle)
- [AddLayer](McObject.md#addlayer)
- [AddLinetype](McObject.md#addlinetype)
- [AddLinetypeEx](McObject.md#addlinetypeex)
- [AddTextStyle](McObject.md#addtextstyle)
- [CloneMcDbObject](McObject.md#clonemcdbobject)
- [DestroyObject](McObject.md#destroyobject)
- [DrawArc](McObject.md#drawarc)
- [DrawArc2](McObject.md#drawarc2)
- [DrawBlockReference](McObject.md#drawblockreference)
- [DrawCircle](McObject.md#drawcircle)
- [DrawDimAligned](McObject.md#drawdimaligned)
- [DrawDimAngular](McObject.md#drawdimangular)
- [DrawDimDiametric](McObject.md#drawdimdiametric)
- [DrawDimOrdinate](McObject.md#drawdimordinate)
- [DrawDimRadial](McObject.md#drawdimradial)
- [DrawDimRotated](McObject.md#drawdimrotated)
- [DrawEllipse](McObject.md#drawellipse)
- [DrawEllipseArc](McObject.md#drawellipsearc)
- [DrawEntity](McObject.md#drawentity)
- [DrawLine](McObject.md#drawline)
- [DrawMText](McObject.md#drawmtext)
- [DrawPathToHatch](McObject.md#drawpathtohatch)
- [DrawPathToPolyline](McObject.md#drawpathtopolyline)
- [DrawPathToSpline](McObject.md#drawpathtospline)
- [DrawPoint](McObject.md#drawpoint)
- [DrawSolid](McObject.md#drawsolid)
- [DrawText](McObject.md#drawtext)
- [GetDatabase](McObject.md#getdatabase)
- [GetSysVarDouble](McObject.md#getsysvardouble)
- [GetSysVarLong](McObject.md#getsysvarlong)
- [GetSysVarString](McObject.md#getsysvarstring)
- [ObjectIdToMdObjectImp](McObject.md#objectidtomdobjectimp)
- [ObjectIdToObject](McObject.md#objectidtoobject)
- [PathLineTo](McObject.md#pathlineto)
- [PathLineToEx](McObject.md#pathlinetoex)
- [PathMakeClosed](McObject.md#pathmakeclosed)
- [PathMoveTo](McObject.md#pathmoveto)
- [PathMoveToEx](McObject.md#pathmovetoex)
- [SetSysVarDouble](McObject.md#setsysvardouble)
- [SetSysVarLong](McObject.md#setsysvarlong)
- [SetSysVarString](McObject.md#setsysvarstring)
- [getCurrentFileName](McObject.md#getcurrentfilename)
- [getImp](McObject.md#getimp)
- [getMxCppImp](McObject.md#getmxcppimp)
- [initMxObject](McObject.md#initmxobject)
- [openWebFile](McObject.md#openwebfile)
- [saveFile](McObject.md#savefile)
- [saveFileToUrl](McObject.md#savefiletourl)
- [test](McObject.md#test)
- [updateDisplay](McObject.md#updatedisplay)

## Constructors

### constructor

• **new McObject**(`imp`)

构造函数

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `imp` | `any` | 对象实现 |

## Properties

### imp

• `Private` **imp**: `any`

内部对象实现

___

### mxObject

• `Private` **mxObject**: `any`

___

### currentFileName

▪ `Static` **currentFileName**: `string`

当前文件名

## Accessors

### DrawColor

• `get` **DrawColor**(): [`McCmColor`](../interfaces/McCmColor.md)

获取绘制颜色

#### Returns

[`McCmColor`](../interfaces/McCmColor.md)

返回绘制颜色

• `set` **DrawColor**(`val`): `void`

设置绘制颜色

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val` | [`McCmColor`](../interfaces/McCmColor.md) | 绘制颜色 |

#### Returns

`void`

___

### DrawDimStyle

• `get` **DrawDimStyle**(): `string`

获取当前绘制的标注样式

#### Returns

`string`

• `set` **DrawDimStyle**(`val`): `void`

设置当前绘制的标注样式

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val` | `string` | 样式名称 |

#### Returns

`void`

___

### DrawLayer

• `get` **DrawLayer**(): `string`

获取绘制图层

#### Returns

`string`

返回绘制图层

• `set` **DrawLayer**(`val`): `void`

设置绘制图层

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val` | `string` | 绘制图层 |

#### Returns

`void`

___

### DrawLineTypeScale

• `get` **DrawLineTypeScale**(): `number`

获取绘制线型比例

#### Returns

`number`

返回绘制线型比例

• `set` **DrawLineTypeScale**(`val`): `void`

设置绘制线型比例

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val` | `number` | 绘制线型比例 |

#### Returns

`void`

___

### DrawLineWeight

• `get` **DrawLineWeight**(): [`LineWeight`](../enums/McDb.LineWeight.md)

获取绘制线宽

#### Returns

[`LineWeight`](../enums/McDb.LineWeight.md)

返回绘制线宽

• `set` **DrawLineWeight**(`val`): `void`

设置绘制线宽

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val` | [`LineWeight`](../enums/McDb.LineWeight.md) | 绘制线宽 |

#### Returns

`void`

___

### DrawLineWidth

• `get` **DrawLineWidth**(): `string`

获取当前绘制的线宽

#### Returns

`string`

• `set` **DrawLineWidth**(`val`): `void`

设置当前绘制的线宽

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val` | `string` | 线宽 |

#### Returns

`void`

___

### DrawLinetype

• `get` **DrawLinetype**(): `string`

获取绘制线型

#### Returns

`string`

返回绘制线型

• `set` **DrawLinetype**(`val`): `void`

设置绘制线型

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val` | `string` | 绘制线型 |

#### Returns

`void`

___

### DrawPatternDefinition

• `get` **DrawPatternDefinition**(): `string`

获取当前绘制的线型定义

#### Returns

`string`

• `set` **DrawPatternDefinition**(`val`): `void`

设置当前绘制的线型定义

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val` | `string` | 线型定义 |

#### Returns

`void`

___

### DrawTextStyle

• `get` **DrawTextStyle**(): `string`

获取绘制文字样式

#### Returns

`string`

返回绘制文字样式

• `set` **DrawTextStyle**(`val`): `void`

设置绘制文字样式

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val` | `string` | 绘制文字样式 |

#### Returns

`void`

## Methods

### AddDimStyle

▸ **AddDimStyle**(`pszName`, `pszDoubleData`, `pszIntData`, `pszStringData`, `pszIdData`): `void`

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

`void`

___

### AddLayer

▸ **AddLayer**(`pszName`): `void`

添加图层

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pszName` | `string` | 图层名称 |

#### Returns

`void`

___

### AddLinetype

▸ **AddLinetype**(`pszName`, `pszLineDefine`): `void`

添加线型

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pszName` | `string` | 线型名称 |
| `pszLineDefine` | `string` | 线型定义 |

#### Returns

`void`

___

### AddLinetypeEx

▸ **AddLinetypeEx**(`pszName`, `pszLineDefine`, `pszTextStyle`): `void`

添加线型

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pszName` | `string` | 线型名称 |
| `pszLineDefine` | `string` | 线型定义 |
| `pszTextStyle` | `string` | 文字样式 |

#### Returns

`void`

___

### AddTextStyle

▸ **AddTextStyle**(`pszName`, `pszFileName`, `pszBigFontFileName`, `dXScale`): `void`

添加文字样式

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pszName` | `string` | 样式名称 |
| `pszFileName` | `string` | 字体文件名 |
| `pszBigFontFileName` | `string` | 大字体文件名 |
| `dXScale` | `number` | X 方向缩放比例 |

#### Returns

`void`

___

### CloneMcDbObject

▸ **CloneMcDbObject**(`id`): [`McDbObject`](McDbObject.md)

克隆指定 ID 的 McDbObject 对象

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `number` | 对象 ID |

#### Returns

[`McDbObject`](McDbObject.md)

克隆后的 McDbObject 对象

___

### DestroyObject

▸ **DestroyObject**(`pObjectImp`): `void`

销毁指定的 McRxObjectImp 对象

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pObjectImp` | `McRxObjectImp` | 待销毁的 McRxObjectImp 对象 |

#### Returns

`void`

___

### DrawArc

▸ **DrawArc**(`dCenterX`, `dCenterY`, `dRadius`, `dStartAng`, `dEndAng`): `number`

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

`number`

成功返回 1，失败返回 0

___

### DrawArc2

▸ **DrawArc2**(`dStartPointX`, `dStartPointY`, `dMidPointX`, `dMidPointY`, `dEndPointX`, `dEndPointY`): `any`

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

`any`

___

### DrawBlockReference

▸ **DrawBlockReference**(`dPosX`, `dPosY`, `pszBlkName`, `dScale`, `dAng`): `number`

绘制块参照

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dPosX` | `number` | 参照位置 X 坐标 |
| `dPosY` | `number` | 参照位置 Y 坐标 |
| `pszBlkName` | `number` | 块名 |
| `dScale` | `number` | 缩放比例 |
| `dAng` | `number` | 旋转角度，单位为弧度 |

#### Returns

`number`

成功返回 1，失败返回 0

___

### DrawCircle

▸ **DrawCircle**(`dCenterX`, `dCenterY`, `dRadius`): `any`

绘制圆

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dCenterX` | `number` | 圆心 X 坐标 |
| `dCenterY` | `number` | 圆心 Y 坐标 |
| `dRadius` | `number` | 半径 |

#### Returns

`any`

___

### DrawDimAligned

▸ **DrawDimAligned**(`dExtLine1PointX`, `dExtLine1PointY`, `dExtLine2PointX`, `dExtLine2PointY`, `dTextPositionX`, `dTextPositionY`): `number`

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

`number`

成功返回 1，失败返回 0

___

### DrawDimAngular

▸ **DrawDimAngular**(`dAngleVertexX`, `dAngleVertexY`, `dFirstEndPointX`, `dFirstEndPointY`, `dSecondEndPointX`, `dSecondEndPointY`, `dTextPointX`, `dTextPointY`): `number`

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

`number`

成功返回 1，失败返回 0

___

### DrawDimDiametric

▸ **DrawDimDiametric**(`dChordPointX`, `dChordPointY`, `dFarChordPointX`, `dFarChordPointY`, `dLeaderLength`): `number`

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

`number`

成功返回 1，失败返回 0

___

### DrawDimOrdinate

▸ **DrawDimOrdinate**(`dDefinitionPointX`, `dDefinitionPointY`, `dDeaderEndPointX`, `dDeaderEndPointY`, `isUseXAxis`): `number`

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

`number`

绘制结果

___

### DrawDimRadial

▸ **DrawDimRadial**(`dCenterX`, `dCenterY`, `dChordPointX`, `dChordPointY`, `dLeaderLength`): `number`

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

`number`

绘制结果

___

### DrawDimRotated

▸ **DrawDimRotated**(`dExtLine1PointX`, `dExtLine1PointY`, `dExtLine2PointX`, `dExtLine2PointY`, `dDimLineLocationX`, `dDimLineLocationY`, `dRotationAngle`): `number`

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

`number`

成功返回 1，失败返回 0

___

### DrawEllipse

▸ **DrawEllipse**(`dCenterX`, `dCenterY`, `dMajorAxisX`, `dMajorAxisY`, `dRadiusRatio`): `number`

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

`number`

成功返回 1，失败返回 0

___

### DrawEllipseArc

▸ **DrawEllipseArc**(`dCenterX`, `dCenterY`, `dMajorAxisX`, `dMajorAxisY`, `dRadiusRatio`, `dStartAng`, `dEndAng`): `any`

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

`any`

___

### DrawEntity

▸ **DrawEntity**(`entity`): `number`

绘制实体

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `entity` | [`McDbEntity`](McDbEntity.md) | 实体对象 |

#### Returns

`number`

绘制结果

___

### DrawLine

▸ **DrawLine**(`dX1`, `dY1`, `dZ1`, `dX2`, `dY2`, `dZ2`): `number`

绘制直线

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dX1` | `number` | 起点 X 坐标 |
| `dY1` | `number` | 起点 Y 坐标 |
| `dZ1` | `number` | 起点 Z 坐标 |
| `dX2` | `number` | 终点 X 坐标 |
| `dY2` | `number` | 终点 Y 坐标 |
| `dZ2` | `number` | 终点 Z 坐标 |

#### Returns

`number`

绘制的直线 ID

___

### DrawMText

▸ **DrawMText**(`dPosX`, `dPosY`, `pszContents`, `dHeight`, `dWidth`, `dRotation`, `iAttachment`): `number`

绘制多行文本

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dPosX` | `number` | 文本位置 X 坐标 |
| `dPosY` | `number` | 文本位置 Y 坐标 |
| `pszContents` | `string` | 文本内容 |
| `dHeight` | `number` | 文本高度 |
| `dWidth` | `number` | 文本宽度 |
| `dRotation` | `number` | 旋转角度，单位为弧度 |
| `iAttachment` | `number` | 对齐方式 |

#### Returns

`number`

成功返回 1，失败返回 0

___

### DrawPathToHatch

▸ **DrawPathToHatch**(`dPatternScale`): `number`

将路径转换为填充图案

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dPatternScale` | `number` | 图案缩放比例 |

#### Returns

`number`

转换结果

___

### DrawPathToPolyline

▸ **DrawPathToPolyline**(): `number`

将路径转换为折线

#### Returns

`number`

转换结果

___

### DrawPathToSpline

▸ **DrawPathToSpline**(): `number`

将路径转换为样条曲线

#### Returns

`number`

转换结果

___

### DrawPoint

▸ **DrawPoint**(`dX`, `dY`): `any`

绘制点

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dX` | `number` | X 坐标 |
| `dY` | `number` | Y 坐标 |

#### Returns

`any`

___

### DrawSolid

▸ **DrawSolid**(`dX1`, `dY1`, `dX2`, `dY2`, `dX3`, `dY3`, `dX4`, `dY4`): `number`

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

`number`

成功返回实体号，失败返回 0

___

### DrawText

▸ **DrawText**(`dPosX`, `dPosY`, `pszText`, `dHeight`, `dRotation`, `horizontalMode`, `verticalMode`): `number`

绘制单行文本

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dPosX` | `number` | 文本位置 X 坐标 |
| `dPosY` | `number` | 文本位置 Y 坐标 |
| `pszText` | `string` | 文本内容 |
| `dHeight` | `number` | 文本高度 |
| `dRotation` | `number` | 旋转角度，单位为弧度 |
| `horizontalMode` | `number` | 横向对齐方式 |
| `verticalMode` | `number` | 纵向对齐方式 |

#### Returns

`number`

成功返回 1，失败返回 0

___

### GetDatabase

▸ **GetDatabase**(): [`McDbDatabase`](McDbDatabase.md)

获取数据库对象

#### Returns

[`McDbDatabase`](McDbDatabase.md)

数据库对象

___

### GetSysVarDouble

▸ **GetSysVarDouble**(`varName`): `number`

获取系统变量的浮点数值

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `varName` | `string` | 变量名称 |

#### Returns

`number`

变量的浮点数值

___

### GetSysVarLong

▸ **GetSysVarLong**(`varName`): `number`

获取系统变量的整数值

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `varName` | `string` | 变量名称 |

#### Returns

`number`

变量的整数值

___

### GetSysVarString

▸ **GetSysVarString**(`varName`): `string`

获取系统变量的字符串值

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `varName` | `string` | 变量名称 |

#### Returns

`string`

变量的字符串值

___

### ObjectIdToMdObjectImp

▸ **ObjectIdToMdObjectImp**(`lIdIndex`): `any`

将 lIdIndex 转换成 MdObjectImp 对象

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `lIdIndex` | `number` | 对象 ID |

#### Returns

`any`

与 ID 对应的 MdObjectImp 对象

___

### ObjectIdToObject

▸ **ObjectIdToObject**(`lIdIndex`): ``null`` \| [`McDbObject`](McDbObject.md)

将 lIdIndex 转换成 McDbObject 对象

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `lIdIndex` | `number` | 对象 ID |

#### Returns

``null`` \| [`McDbObject`](McDbObject.md)

与 ID 对应的 McDbObject 对象，如果对象不存在则返回 null

___

### PathLineTo

▸ **PathLineTo**(`dX`, `dY`): `void`

从当前位置画一条直线到指定位置

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dX` | `number` | X 坐标 |
| `dY` | `number` | Y 坐标 |

#### Returns

`void`

___

### PathLineToEx

▸ **PathLineToEx**(`dX`, `dY`, `dStartWidth`, `dEndWidth`, `dBulge`): `void`

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

### PathMakeClosed

▸ **PathMakeClosed**(): `void`

闭合路径

#### Returns

`void`

___

### PathMoveTo

▸ **PathMoveTo**(`dX`, `dY`): `void`

将路径移动到指定位置

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dX` | `number` | X 坐标 |
| `dY` | `number` | Y 坐标 |

#### Returns

`void`

___

### PathMoveToEx

▸ **PathMoveToEx**(`dX`, `dY`, `dStartWidth`, `dEndWidth`, `dBulge`): `void`

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

### SetSysVarDouble

▸ **SetSysVarDouble**(`varName`, `val`): `boolean`

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

### SetSysVarLong

▸ **SetSysVarLong**(`varName`, `val`): `boolean`

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

### SetSysVarString

▸ **SetSysVarString**(`varName`, `val`): `any`

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

### getCurrentFileName

▸ **getCurrentFileName**(): `string`

获取当前文件名

#### Returns

`string`

当前文件名

___

### getImp

▸ **getImp**(): `any`

获取对象实现

#### Returns

`any`

对象实现

___

### getMxCppImp

▸ **getMxCppImp**(): `any`

获取 MxCpp 对象实现

#### Returns

`any`

MxCpp 对象实现

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

### openWebFile

▸ **openWebFile**(`sFileUrl`, `retCall?`, `isWorkThread?`): `boolean`

打开网络文件

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `sFileUrl` | `string` | `undefined` | 网络文件路径 |
| `retCall?` | (`iRet`: `number`) => `void` | `undefined` | 回调函数，可选参数，打开文件完成后的回调函数，参数为打开文件的结果,0表示成功，其他值表示失败 |
| `isWorkThread` | `boolean` | `true` | 是否使用工作线程打开文件，默认为 true |

#### Returns

`boolean`

是否成功打开文件

___

### saveFile

▸ **saveFile**(`pszFilePath?`, `call?`, `isDownland?`, `isShowSaveFileDialog?`): `boolean`

保存文件

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `pszFilePath?` | `string` | `undefined` | 文件路径 |
| `call?` | (`data`: `any`) => `void` | `undefined` | 回调函数，可选参数，文件保存完成后的回调函数，参数为文件数据 |
| `isDownland` | `boolean` | `true` | 是否下载文件，默认为 true |
| `isShowSaveFileDialog` | `boolean` | `true` | 是否显示保存文件对话框，默认为 true |

#### Returns

`boolean`

是否成功保存文件

___

### saveFileToUrl

▸ **saveFileToUrl**(`sSaveProgramUrl`): `boolean`

将文件保存并转换为网络路径下载

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `sSaveProgramUrl` | `string` | 要保存文件的路径 |

#### Returns

`boolean`

是否成功保存文件

___

### test

▸ **test**(): `void`

测试方法

#### Returns

`void`

___

### updateDisplay

▸ **updateDisplay**(`modelViewMatrix`, `projectionMatrix`): `void`

更新对象显示

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `modelViewMatrix` | `number`[] | 模型视图矩阵 |
| `projectionMatrix` | `number`[] | 投影矩阵 |

#### Returns

`void`
