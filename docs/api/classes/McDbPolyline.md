[mxcad API 文档](../README.md) / McDbPolyline

# Class: McDbPolyline

多段线类

## Hierarchy

- [`McDbCurve`](McDbCurve.md)

  ↳ **`McDbPolyline`**

## Table of contents

### Constructors

- [constructor](McDbPolyline.md#constructor)

### Properties

- [imp](McDbPolyline.md#imp)

### Accessors

- [colorIndex](McDbPolyline.md#colorindex)
- [constantWidth](McDbPolyline.md#constantwidth)
- [dxf0](McDbPolyline.md#dxf0)
- [isClosed](McDbPolyline.md#isclosed)
- [layer](McDbPolyline.md#layer)
- [layerId](McDbPolyline.md#layerid)
- [linetype](McDbPolyline.md#linetype)
- [linetypeId](McDbPolyline.md#linetypeid)
- [linetypeScale](McDbPolyline.md#linetypescale)
- [lineweight](McDbPolyline.md#lineweight)
- [objectName](McDbPolyline.md#objectname)
- [textStyle](McDbPolyline.md#textstyle)
- [textStyleId](McDbPolyline.md#textstyleid)
- [trueColor](McDbPolyline.md#truecolor)
- [visible](McDbPolyline.md#visible)

### Methods

- [IntersectWith](McDbPolyline.md#intersectwith)
- [addVertexAt](McDbPolyline.md#addvertexat)
- [clone](McDbPolyline.md#clone)
- [deleteXData](McDbPolyline.md#deletexdata)
- [disableDisplay](McDbPolyline.md#disabledisplay)
- [erase](McDbPolyline.md#erase)
- [explode](McDbPolyline.md#explode)
- [getAllAppName](McDbPolyline.md#getallappname)
- [getArea](McDbPolyline.md#getarea)
- [getBoundingBox](McDbPolyline.md#getboundingbox)
- [getBulgeAt](McDbPolyline.md#getbulgeat)
- [getClosestPointTo](McDbPolyline.md#getclosestpointto)
- [getDatabase](McDbPolyline.md#getdatabase)
- [getDistAtParam](McDbPolyline.md#getdistatparam)
- [getDistAtPoint](McDbPolyline.md#getdistatpoint)
- [getEndParam](McDbPolyline.md#getendparam)
- [getEndPoint](McDbPolyline.md#getendpoint)
- [getFirstDeriv](McDbPolyline.md#getfirstderiv)
- [getFirstDerivFromParam](McDbPolyline.md#getfirstderivfromparam)
- [getHandle](McDbPolyline.md#gethandle)
- [getImp](McDbPolyline.md#getimp)
- [getJson](McDbPolyline.md#getjson)
- [getLength](McDbPolyline.md#getlength)
- [getObjectID](McDbPolyline.md#getobjectid)
- [getOwnerID](McDbPolyline.md#getownerid)
- [getParamAtDist](McDbPolyline.md#getparamatdist)
- [getParamAtPoint](McDbPolyline.md#getparamatpoint)
- [getPointAt](McDbPolyline.md#getpointat)
- [getPointAtDist](McDbPolyline.md#getpointatdist)
- [getPointAtParam](McDbPolyline.md#getpointatparam)
- [getSamplePoints](McDbPolyline.md#getsamplepoints)
- [getStartParam](McDbPolyline.md#getstartparam)
- [getStartPoint](McDbPolyline.md#getstartpoint)
- [getWidthsAt](McDbPolyline.md#getwidthsat)
- [getxData](McDbPolyline.md#getxdata)
- [getxDataDouble](McDbPolyline.md#getxdatadouble)
- [getxDataLong](McDbPolyline.md#getxdatalong)
- [getxDataPoint](McDbPolyline.md#getxdatapoint)
- [getxDataString](McDbPolyline.md#getxdatastring)
- [highlight](McDbPolyline.md#highlight)
- [initTempObject](McDbPolyline.md#inittempobject)
- [isErased](McDbPolyline.md#iserased)
- [isKindOf](McDbPolyline.md#iskindof)
- [isNull](McDbPolyline.md#isnull)
- [mirror](McDbPolyline.md#mirror)
- [move](McDbPolyline.md#move)
- [numVerts](McDbPolyline.md#numverts)
- [offsetCurves](McDbPolyline.md#offsetcurves)
- [removeVertexAt](McDbPolyline.md#removevertexat)
- [rotate](McDbPolyline.md#rotate)
- [scaleEntity](McDbPolyline.md#scaleentity)
- [setBulgeAt](McDbPolyline.md#setbulgeat)
- [setJson](McDbPolyline.md#setjson)
- [setPointAt](McDbPolyline.md#setpointat)
- [setWidthsAt](McDbPolyline.md#setwidthsat)
- [setxData](McDbPolyline.md#setxdata)
- [setxDataDouble](McDbPolyline.md#setxdatadouble)
- [setxDataLong](McDbPolyline.md#setxdatalong)
- [setxDataPoint](McDbPolyline.md#setxdatapoint)
- [setxDataString](McDbPolyline.md#setxdatastring)
- [splitCurves](McDbPolyline.md#splitcurves)
- [splitCurvesFromParam](McDbPolyline.md#splitcurvesfromparam)
- [transformBy](McDbPolyline.md#transformby)
- [unErase](McDbPolyline.md#unerase)

## Constructors

### constructor

• **new McDbPolyline**(`imp?`)

构造函数

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `imp?` | `any` | 实现对象 |

#### Overrides

[McDbCurve](McDbCurve.md).[constructor](McDbCurve.md#constructor)

## Properties

### imp

• `Protected` **imp**: `any` = `0`

内部实现对象。

#### Inherited from

[McDbCurve](McDbCurve.md).[imp](McDbCurve.md#imp)

## Accessors

### colorIndex

• `get` **colorIndex**(): `number`

得到对象颜色索引

#### Returns

`number`

#### Inherited from

McDbCurve.colorIndex

• `set` **colorIndex**(`val`): `void`

设置对象颜色索引

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `number` |

#### Returns

`void`

#### Inherited from

McDbCurve.colorIndex

___

### constantWidth

• `get` **constantWidth**(): `number`

获取常量宽度

#### Returns

`number`

• `set` **constantWidth**(`val`): `void`

设置常量宽度

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val` | `number` | 常量宽度 |

#### Returns

`void`

___

### dxf0

• `get` **dxf0**(): `string`

获取 DXF 代码 0 的值。

#### Returns

`string`

#### Inherited from

McDbCurve.dxf0

___

### isClosed

• `get` **isClosed**(): `boolean`

获取是否闭合

#### Returns

`boolean`

• `set` **isClosed**(`val`): `void`

设置是否闭合

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val` | `boolean` | 是否闭合 |

#### Returns

`void`

___

### layer

• `get` **layer**(): `string`

得到对象图层名

#### Returns

`string`

#### Inherited from

McDbCurve.layer

• `set` **layer**(`val`): `void`

设置对象图层名

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `string` |

#### Returns

`void`

#### Inherited from

McDbCurve.layer

___

### layerId

• `get` **layerId**(): [`McObjectId`](McObjectId.md)

#### Returns

[`McObjectId`](McObjectId.md)

#### Inherited from

McDbCurve.layerId

• `set` **layerId**(`id`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`McObjectId`](McObjectId.md) |

#### Returns

`void`

#### Inherited from

McDbCurve.layerId

___

### linetype

• `get` **linetype**(): `string`

得到对象线型名

#### Returns

`string`

#### Inherited from

McDbCurve.linetype

• `set` **linetype**(`val`): `void`

设置对象线型名

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `string` |

#### Returns

`void`

#### Inherited from

McDbCurve.linetype

___

### linetypeId

• `get` **linetypeId**(): [`McObjectId`](McObjectId.md)

#### Returns

[`McObjectId`](McObjectId.md)

#### Inherited from

McDbCurve.linetypeId

• `set` **linetypeId**(`id`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`McObjectId`](McObjectId.md) |

#### Returns

`void`

#### Inherited from

McDbCurve.linetypeId

___

### linetypeScale

• `get` **linetypeScale**(): `number`

得到对象线型比例

#### Returns

`number`

#### Inherited from

McDbCurve.linetypeScale

• `set` **linetypeScale**(`val`): `void`

设置对象线型比例

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `number` |

#### Returns

`void`

#### Inherited from

McDbCurve.linetypeScale

___

### lineweight

• `get` **lineweight**(): `number`

得到对象线重

#### Returns

`number`

#### Inherited from

McDbCurve.lineweight

• `set` **lineweight**(`val`): `void`

设置对象线重

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `number` |

#### Returns

`void`

#### Inherited from

McDbCurve.lineweight

___

### objectName

• `get` **objectName**(): `string`

获取对象名称。

#### Returns

`string`

#### Inherited from

McDbCurve.objectName

___

### textStyle

• `get` **textStyle**(): `string`

得到对象文字样式

#### Returns

`string`

#### Inherited from

McDbCurve.textStyle

• `set` **textStyle**(`val`): `void`

设置对象文字样式

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `string` |

#### Returns

`void`

#### Inherited from

McDbCurve.textStyle

___

### textStyleId

• `get` **textStyleId**(): [`McObjectId`](McObjectId.md)

#### Returns

[`McObjectId`](McObjectId.md)

#### Inherited from

McDbCurve.textStyleId

• `set` **textStyleId**(`id`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`McObjectId`](McObjectId.md) |

#### Returns

`void`

#### Inherited from

McDbCurve.textStyleId

___

### trueColor

• `get` **trueColor**(): [`McCmColor`](McCmColor.md)

得到对象颜色

#### Returns

[`McCmColor`](McCmColor.md)

#### Inherited from

McDbCurve.trueColor

• `set` **trueColor**(`val`): `void`

设置对象颜色

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | [`McCmColor`](McCmColor.md) |

#### Returns

`void`

#### Inherited from

McDbCurve.trueColor

___

### visible

• `get` **visible**(): `boolean`

对象是否可见

#### Returns

`boolean`

#### Inherited from

McDbCurve.visible

• `set` **visible**(`val`): `void`

设置是否可见

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `boolean` |

#### Returns

`void`

#### Inherited from

McDbCurve.visible

## Methods

### IntersectWith

▸ **IntersectWith**(`intersectObject`, `exOption`): [`McGePoint3dArray`](McGePoint3dArray.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `intersectObject` | [`McDbEntity`](McDbEntity.md) |
| `exOption` | [`Intersect`](../enums/McDb.Intersect.md) |

#### Returns

[`McGePoint3dArray`](McGePoint3dArray.md)

#### Inherited from

[McDbCurve](McDbCurve.md).[IntersectWith](McDbCurve.md#intersectwith)

___

### addVertexAt

▸ **addVertexAt**(`pt`, `bulge?`, `startWidth?`, `endWidth?`, `index?`): `boolean`

在指定位置添加顶点

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `pt` | `Vector3` \| [`McGePoint3d`](McGePoint3d.md) | `undefined` | 点 |
| `bulge` | `number` | `0` | 凸度 |
| `startWidth` | `number` | `0` | 起始宽度 |
| `endWidth` | `number` | `0` | 结束宽度 |
| `index` | `number` | `0` | 位置 |

#### Returns

`boolean`

___

### clone

▸ **clone**(): ``null`` \| [`McDbObject`](McDbObject.md)

克隆对象。

#### Returns

``null`` \| [`McDbObject`](McDbObject.md)

克隆出的对象。

#### Inherited from

[McDbCurve](McDbCurve.md).[clone](McDbCurve.md#clone)

___

### deleteXData

▸ **deleteXData**(`appName`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `appName` | `string` |

#### Returns

`boolean`

#### Inherited from

[McDbCurve](McDbCurve.md).[deleteXData](McDbCurve.md#deletexdata)

___

### disableDisplay

▸ **disableDisplay**(`isDisable`): `void`

暂时禁用对象的自动更新显示.

#### Parameters

| Name | Type |
| :------ | :------ |
| `isDisable` | `boolean` |

#### Returns

`void`

#### Inherited from

[McDbCurve](McDbCurve.md).[disableDisplay](McDbCurve.md#disabledisplay)

___

### erase

▸ **erase**(): `boolean`

删除对象。

#### Returns

`boolean`

是否删除成功。

#### Inherited from

[McDbCurve](McDbCurve.md).[erase](McDbCurve.md#erase)

___

### explode

▸ **explode**(): [`MxCADResbuf`](MxCADResbuf.md)

打碎对象，返回打后对象数据链表

#### Returns

[`MxCADResbuf`](MxCADResbuf.md)

#### Inherited from

[McDbCurve](McDbCurve.md).[explode](McDbCurve.md#explode)

___

### getAllAppName

▸ **getAllAppName**(): [`McGeStringArray`](McGeStringArray.md)

#### Returns

[`McGeStringArray`](McGeStringArray.md)

#### Inherited from

[McDbCurve](McDbCurve.md).[getAllAppName](McDbCurve.md#getallappname)

___

### getArea

▸ **getArea**(): `Object`

计算面积

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `ret` | `boolean` |
| `val` | `number` |

#### Inherited from

[McDbCurve](McDbCurve.md).[getArea](McDbCurve.md#getarea)

___

### getBoundingBox

▸ **getBoundingBox**(): `Object`

得到对象的最小外包

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `maxPt` | [`McGePoint3d`](McGePoint3d.md) |
| `minPt` | [`McGePoint3d`](McGePoint3d.md) |
| `ret` | `boolean` |

#### Inherited from

[McDbCurve](McDbCurve.md).[getBoundingBox](McDbCurve.md#getboundingbox)

___

### getBulgeAt

▸ **getBulgeAt**(`index`): `number`

获取指定位置的凸度

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 位置 |

#### Returns

`number`

___

### getClosestPointTo

▸ **getClosestPointTo**(`givenPnt`, `isExtend`): `Object`

得到一个点到曲线的最近点

#### Parameters

| Name | Type |
| :------ | :------ |
| `givenPnt` | [`McGePoint3d`](McGePoint3d.md) |
| `isExtend` | `boolean` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `ret` | `boolean` |
| `val` | [`McGePoint3d`](McGePoint3d.md) |

#### Inherited from

[McDbCurve](McDbCurve.md).[getClosestPointTo](McDbCurve.md#getclosestpointto)

___

### getDatabase

▸ **getDatabase**(): [`McDbDatabase`](McDbDatabase.md)

得到对象所在的数据库

#### Returns

[`McDbDatabase`](McDbDatabase.md)

#### Inherited from

[McDbCurve](McDbCurve.md).[getDatabase](McDbCurve.md#getdatabase)

___

### getDistAtParam

▸ **getDistAtParam**(`param`): `Object`

获取参数位置上的距离。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `param` | `number` | 参数位置。 |

#### Returns

`Object`

距离及执行结果。

| Name | Type |
| :------ | :------ |
| `ret` | `boolean` |
| `val` | `number` |

#### Inherited from

[McDbCurve](McDbCurve.md).[getDistAtParam](McDbCurve.md#getdistatparam)

___

### getDistAtPoint

▸ **getDistAtPoint**(`pt`): `Object`

获取距离位置上的点。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pt` | [`McGePoint3d`](McGePoint3d.md) | 距离位置。 |

#### Returns

`Object`

点及执行结果。

| Name | Type |
| :------ | :------ |
| `ret` | `boolean` |
| `val` | `number` |

#### Inherited from

[McDbCurve](McDbCurve.md).[getDistAtPoint](McDbCurve.md#getdistatpoint)

___

### getEndParam

▸ **getEndParam**(): `Object`

获取结束参数。

#### Returns

`Object`

结束参数及执行结果。

| Name | Type |
| :------ | :------ |
| `ret` | `boolean` |
| `val` | `number` |

#### Inherited from

[McDbCurve](McDbCurve.md).[getEndParam](McDbCurve.md#getendparam)

___

### getEndPoint

▸ **getEndPoint**(): `Object`

得到曲线的结束点

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `ret` | `boolean` |
| `val` | [`McGePoint3d`](McGePoint3d.md) |

#### Inherited from

[McDbCurve](McDbCurve.md).[getEndPoint](McDbCurve.md#getendpoint)

___

### getFirstDeriv

▸ **getFirstDeriv**(`pt`): `Object`

通过曲线上某点得到曲线的一阶导数

#### Parameters

| Name | Type |
| :------ | :------ |
| `pt` | [`McGePoint3d`](McGePoint3d.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `ret` | `boolean` |
| `val` | [`McGeVector3d`](McGeVector3d.md) |

#### Inherited from

[McDbCurve](McDbCurve.md).[getFirstDeriv](McDbCurve.md#getfirstderiv)

___

### getFirstDerivFromParam

▸ **getFirstDerivFromParam**(`param`): `Object`

通过曲线参数得到曲线的一阶导数

#### Parameters

| Name | Type |
| :------ | :------ |
| `param` | `number` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `ret` | `boolean` |
| `val` | [`McGeVector3d`](McGeVector3d.md) |

#### Inherited from

[McDbCurve](McDbCurve.md).[getFirstDerivFromParam](McDbCurve.md#getfirstderivfromparam)

___

### getHandle

▸ **getHandle**(): `string`

得到对象句柄

#### Returns

`string`

#### Inherited from

[McDbCurve](McDbCurve.md).[getHandle](McDbCurve.md#gethandle)

___

### getImp

▸ **getImp**(): `any`

获取内部实现对象。

#### Returns

`any`

内部实现对象。

#### Inherited from

[McDbCurve](McDbCurve.md).[getImp](McDbCurve.md#getimp)

___

### getJson

▸ **getJson**(): `string`

获取 JSON 格式的字符串。

#### Returns

`string`

JSON 格式的字符串。

#### Inherited from

[McDbCurve](McDbCurve.md).[getJson](McDbCurve.md#getjson)

___

### getLength

▸ **getLength**(): `Object`

得到曲线长度

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `ret` | `boolean` |
| `val` | `number` |

#### Inherited from

[McDbCurve](McDbCurve.md).[getLength](McDbCurve.md#getlength)

___

### getObjectID

▸ **getObjectID**(): [`McObjectId`](McObjectId.md)

获取对象 ID。

#### Returns

[`McObjectId`](McObjectId.md)

对象 ID。

#### Inherited from

[McDbCurve](McDbCurve.md).[getObjectID](McDbCurve.md#getobjectid)

___

### getOwnerID

▸ **getOwnerID**(): `number`

得到对象拥用者的id

#### Returns

`number`

#### Inherited from

[McDbCurve](McDbCurve.md).[getOwnerID](McDbCurve.md#getownerid)

___

### getParamAtDist

▸ **getParamAtDist**(`dist`): `Object`

获取距离位置上的参数。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dist` | `number` | 距离位置。 |

#### Returns

`Object`

参数及执行结果。

| Name | Type |
| :------ | :------ |
| `ret` | `boolean` |
| `val` | `number` |

#### Inherited from

[McDbCurve](McDbCurve.md).[getParamAtDist](McDbCurve.md#getparamatdist)

___

### getParamAtPoint

▸ **getParamAtPoint**(`pt`): `Object`

得到曲线某点位置的曲线参数

#### Parameters

| Name | Type |
| :------ | :------ |
| `pt` | [`McGePoint3d`](McGePoint3d.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `ret` | `boolean` |
| `val` | `number` |

#### Inherited from

[McDbCurve](McDbCurve.md).[getParamAtPoint](McDbCurve.md#getparamatpoint)

___

### getPointAt

▸ **getPointAt**(`index`): `Object`

获取指定位置的点

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 位置 |

#### Returns

`Object`

val: 点, ret: 返回值

| Name | Type |
| :------ | :------ |
| `ret` | `number` |
| `val` | [`McGePoint3d`](McGePoint3d.md) |

___

### getPointAtDist

▸ **getPointAtDist**(`dist`): `Object`

获取距离位置上的点。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dist` | `number` | 距离位置。 |

#### Returns

`Object`

点及执行结果。

| Name | Type |
| :------ | :------ |
| `ret` | `boolean` |
| `val` | [`McGePoint3d`](McGePoint3d.md) |

#### Inherited from

[McDbCurve](McDbCurve.md).[getPointAtDist](McDbCurve.md#getpointatdist)

___

### getPointAtParam

▸ **getPointAtParam**(`param`): `Object`

得到曲线参数所在的点坐标

#### Parameters

| Name | Type |
| :------ | :------ |
| `param` | `number` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `ret` | `boolean` |
| `val` | [`McGePoint3d`](McGePoint3d.md) |

#### Inherited from

[McDbCurve](McDbCurve.md).[getPointAtParam](McDbCurve.md#getpointatparam)

___

### getSamplePoints

▸ **getSamplePoints**(`dApproxEps`): [`MxCADResbuf`](MxCADResbuf.md)

把曲线离散成一堆点

#### Parameters

| Name | Type |
| :------ | :------ |
| `dApproxEps` | `number` |

#### Returns

[`MxCADResbuf`](MxCADResbuf.md)

#### Inherited from

[McDbCurve](McDbCurve.md).[getSamplePoints](McDbCurve.md#getsamplepoints)

___

### getStartParam

▸ **getStartParam**(): `Object`

获取起始参数。

#### Returns

`Object`

起始参数及执行结果。

| Name | Type |
| :------ | :------ |
| `ret` | `boolean` |
| `val` | `number` |

#### Inherited from

[McDbCurve](McDbCurve.md).[getStartParam](McDbCurve.md#getstartparam)

___

### getStartPoint

▸ **getStartPoint**(): `Object`

得到曲线的开始点

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `ret` | `boolean` |
| `val` | [`McGePoint3d`](McGePoint3d.md) |

#### Inherited from

[McDbCurve](McDbCurve.md).[getStartPoint](McDbCurve.md#getstartpoint)

___

### getWidthsAt

▸ **getWidthsAt**(`index`): `Object`

获取指定位置的起始和结束宽度

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 位置 |

#### Returns

`Object`

val1: 起始宽度, val2: 结束宽度, ret: 返回值

| Name | Type |
| :------ | :------ |
| `ret` | `boolean` |
| `val1` | `number` |
| `val2` | `number` |

___

### getxData

▸ **getxData**(`appName?`): [`MxCADResbuf`](MxCADResbuf.md)

得到对象的扩展数据

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `appName` | `string` | `""` |

#### Returns

[`MxCADResbuf`](MxCADResbuf.md)

#### Inherited from

[McDbCurve](McDbCurve.md).[getxData](McDbCurve.md#getxdata)

___

### getxDataDouble

▸ **getxDataDouble**(`appName`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `appName` | `string` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `ret` | `boolean` |
| `val` | `number` |

#### Inherited from

[McDbCurve](McDbCurve.md).[getxDataDouble](McDbCurve.md#getxdatadouble)

___

### getxDataLong

▸ **getxDataLong**(`appName`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `appName` | `string` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `ret` | `boolean` |
| `val` | `number` |

#### Inherited from

[McDbCurve](McDbCurve.md).[getxDataLong](McDbCurve.md#getxdatalong)

___

### getxDataPoint

▸ **getxDataPoint**(`appName`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `appName` | `string` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `ret` | `boolean` |
| `val` | [`McGePoint3d`](McGePoint3d.md) |

#### Inherited from

[McDbCurve](McDbCurve.md).[getxDataPoint](McDbCurve.md#getxdatapoint)

___

### getxDataString

▸ **getxDataString**(`appName`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `appName` | `string` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `ret` | `boolean` |
| `val` | `string` |

#### Inherited from

[McDbCurve](McDbCurve.md).[getxDataString](McDbCurve.md#getxdatastring)

___

### highlight

▸ **highlight**(`isHighlight`): `void`

设置对象是否高亮

#### Parameters

| Name | Type |
| :------ | :------ |
| `isHighlight` | `boolean` |

#### Returns

`void`

#### Inherited from

[McDbCurve](McDbCurve.md).[highlight](McDbCurve.md#highlight)

___

### initTempObject

▸ **initTempObject**(`imp`): `void`

初始化临时对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `imp` | `any` | 内部实现对象。 |

#### Returns

`void`

#### Inherited from

[McDbCurve](McDbCurve.md).[initTempObject](McDbCurve.md#inittempobject)

___

### isErased

▸ **isErased**(): `boolean`

对象是否已经删除

#### Returns

`boolean`

#### Inherited from

[McDbCurve](McDbCurve.md).[isErased](McDbCurve.md#iserased)

___

### isKindOf

▸ **isKindOf**(`sObjectName`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `sObjectName` | `string` |

#### Returns

`boolean`

#### Inherited from

[McDbCurve](McDbCurve.md).[isKindOf](McDbCurve.md#iskindof)

___

### isNull

▸ **isNull**(): `any`

#### Returns

`any`

#### Inherited from

[McDbCurve](McDbCurve.md).[isNull](McDbCurve.md#isnull)

___

### mirror

▸ **mirror**(`point1`, `point2`): `boolean`

镜向对象

#### Parameters

| Name | Type |
| :------ | :------ |
| `point1` | [`McGePoint3d`](McGePoint3d.md) |
| `point2` | [`McGePoint3d`](McGePoint3d.md) |

#### Returns

`boolean`

#### Inherited from

[McDbCurve](McDbCurve.md).[mirror](McDbCurve.md#mirror)

___

### move

▸ **move**(`fromPoint`, `toPoint`): `boolean`

移动对象

#### Parameters

| Name | Type |
| :------ | :------ |
| `fromPoint` | [`McGePoint3d`](McGePoint3d.md) |
| `toPoint` | [`McGePoint3d`](McGePoint3d.md) |

#### Returns

`boolean`

#### Inherited from

[McDbCurve](McDbCurve.md).[move](McDbCurve.md#move)

___

### numVerts

▸ **numVerts**(): `number`

获取顶点数量

#### Returns

`number`

___

### offsetCurves

▸ **offsetCurves**(`dOffsetDist`, `ptOffsetRef`): [`McDbObjectArray`](McDbObjectArray.md)

得到偏移曲线

#### Parameters

| Name | Type |
| :------ | :------ |
| `dOffsetDist` | `number` |
| `ptOffsetRef` | [`McGePoint3d`](McGePoint3d.md) |

#### Returns

[`McDbObjectArray`](McDbObjectArray.md)

#### Inherited from

[McDbCurve](McDbCurve.md).[offsetCurves](McDbCurve.md#offsetcurves)

___

### removeVertexAt

▸ **removeVertexAt**(`index`): `boolean`

移除指定位置的顶点

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 位置 |

#### Returns

`boolean`

___

### rotate

▸ **rotate**(`basePoint`, `dRotationAngle`): `boolean`

旋转对象

#### Parameters

| Name | Type |
| :------ | :------ |
| `basePoint` | [`McGePoint3d`](McGePoint3d.md) |
| `dRotationAngle` | `number` |

#### Returns

`boolean`

#### Inherited from

[McDbCurve](McDbCurve.md).[rotate](McDbCurve.md#rotate)

___

### scaleEntity

▸ **scaleEntity**(`basePoint`, `dScaleFactor`): `boolean`

缩放对象

#### Parameters

| Name | Type |
| :------ | :------ |
| `basePoint` | [`McGePoint3d`](McGePoint3d.md) |
| `dScaleFactor` | `number` |

#### Returns

`boolean`

#### Inherited from

[McDbCurve](McDbCurve.md).[scaleEntity](McDbCurve.md#scaleentity)

___

### setBulgeAt

▸ **setBulgeAt**(`index`, `bulge`): `boolean`

设置指定位置的凸度

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 位置 |
| `bulge` | `number` | 凸度 |

#### Returns

`boolean`

___

### setJson

▸ **setJson**(`str`): `boolean`

设置 JSON 格式的字符串。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | JSON 格式的字符串。 |

#### Returns

`boolean`

是否设置成功。

#### Inherited from

[McDbCurve](McDbCurve.md).[setJson](McDbCurve.md#setjson)

___

### setPointAt

▸ **setPointAt**(`index`, `pt`): `boolean`

设置指定位置的点

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 位置 |
| `pt` | [`McGePoint3d`](McGePoint3d.md) | 点 |

#### Returns

`boolean`

___

### setWidthsAt

▸ **setWidthsAt**(`index`, `dStartWdith`, `dEntWdith`): `boolean`

修改线段的开始宽度，和结束宽度

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 位置 |
| `dStartWdith` | `number` | - |
| `dEntWdith` | `number` | - |

#### Returns

`boolean`

___

### setxData

▸ **setxData**(`xdata`): `boolean`

设置对象的扩展数据

#### Parameters

| Name | Type |
| :------ | :------ |
| `xdata` | [`MxCADResbuf`](MxCADResbuf.md) |

#### Returns

`boolean`

#### Inherited from

[McDbCurve](McDbCurve.md).[setxData](McDbCurve.md#setxdata)

___

### setxDataDouble

▸ **setxDataDouble**(`appName`, `val`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `appName` | `string` |
| `val` | `number` |

#### Returns

`boolean`

#### Inherited from

[McDbCurve](McDbCurve.md).[setxDataDouble](McDbCurve.md#setxdatadouble)

___

### setxDataLong

▸ **setxDataLong**(`appName`, `val`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `appName` | `string` |
| `val` | `number` |

#### Returns

`boolean`

#### Inherited from

[McDbCurve](McDbCurve.md).[setxDataLong](McDbCurve.md#setxdatalong)

___

### setxDataPoint

▸ **setxDataPoint**(`appName`, `val`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `appName` | `string` |
| `val` | [`McGePoint3d`](McGePoint3d.md) |

#### Returns

`boolean`

#### Inherited from

[McDbCurve](McDbCurve.md).[setxDataPoint](McDbCurve.md#setxdatapoint)

___

### setxDataString

▸ **setxDataString**(`appName`, `val`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `appName` | `string` |
| `val` | `string` |

#### Returns

`boolean`

#### Inherited from

[McDbCurve](McDbCurve.md).[setxDataString](McDbCurve.md#setxdatastring)

___

### splitCurves

▸ **splitCurves**(`pts`): [`McDbObjectArray`](McDbObjectArray.md)

打断曲线

#### Parameters

| Name | Type |
| :------ | :------ |
| `pts` | [`McGePoint3d`](McGePoint3d.md)[] |

#### Returns

[`McDbObjectArray`](McDbObjectArray.md)

#### Inherited from

[McDbCurve](McDbCurve.md).[splitCurves](McDbCurve.md#splitcurves)

___

### splitCurvesFromParam

▸ **splitCurvesFromParam**(`params`): [`McDbObjectArray`](McDbObjectArray.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `number`[] |

#### Returns

[`McDbObjectArray`](McDbObjectArray.md)

#### Inherited from

[McDbCurve](McDbCurve.md).[splitCurvesFromParam](McDbCurve.md#splitcurvesfromparam)

___

### transformBy

▸ **transformBy**(`transformationMatrix`): `boolean`

变换对象

#### Parameters

| Name | Type |
| :------ | :------ |
| `transformationMatrix` | [`McGeMatrix3d`](McGeMatrix3d.md) |

#### Returns

`boolean`

#### Inherited from

[McDbCurve](McDbCurve.md).[transformBy](McDbCurve.md#transformby)

___

### unErase

▸ **unErase**(): `boolean`

反删除对象。

#### Returns

`boolean`

#### Inherited from

[McDbCurve](McDbCurve.md).[unErase](McDbCurve.md#unerase)
