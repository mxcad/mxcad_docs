[mxcad API 文档](../README.md) / McDbEllipse

# Class: McDbEllipse

表示一个椭圆弧。

## Hierarchy

- [`McDbCurve`](McDbCurve.md)

  ↳ **`McDbEllipse`**

## Table of contents

### Constructors

- [constructor](McDbEllipse.md#constructor)

### Properties

- [imp](McDbEllipse.md#imp)

### Accessors

- [center](McDbEllipse.md#center)
- [colorIndex](McDbEllipse.md#colorindex)
- [dxf0](McDbEllipse.md#dxf0)
- [endAngle](McDbEllipse.md#endangle)
- [layer](McDbEllipse.md#layer)
- [layerId](McDbEllipse.md#layerid)
- [linetype](McDbEllipse.md#linetype)
- [linetypeId](McDbEllipse.md#linetypeid)
- [linetypeScale](McDbEllipse.md#linetypescale)
- [lineweight](McDbEllipse.md#lineweight)
- [majorAxis](McDbEllipse.md#majoraxis)
- [minorAxis](McDbEllipse.md#minoraxis)
- [objectName](McDbEllipse.md#objectname)
- [radiusRatio](McDbEllipse.md#radiusratio)
- [startAngle](McDbEllipse.md#startangle)
- [textStyle](McDbEllipse.md#textstyle)
- [textStyleId](McDbEllipse.md#textstyleid)
- [trueColor](McDbEllipse.md#truecolor)
- [visible](McDbEllipse.md#visible)

### Methods

- [IntersectWith](McDbEllipse.md#intersectwith)
- [clone](McDbEllipse.md#clone)
- [deleteXData](McDbEllipse.md#deletexdata)
- [disableDisplay](McDbEllipse.md#disabledisplay)
- [erase](McDbEllipse.md#erase)
- [explode](McDbEllipse.md#explode)
- [getAllAppName](McDbEllipse.md#getallappname)
- [getArea](McDbEllipse.md#getarea)
- [getBoundingBox](McDbEllipse.md#getboundingbox)
- [getClosestPointTo](McDbEllipse.md#getclosestpointto)
- [getDatabase](McDbEllipse.md#getdatabase)
- [getDistAtParam](McDbEllipse.md#getdistatparam)
- [getDistAtPoint](McDbEllipse.md#getdistatpoint)
- [getEndParam](McDbEllipse.md#getendparam)
- [getEndPoint](McDbEllipse.md#getendpoint)
- [getFirstDeriv](McDbEllipse.md#getfirstderiv)
- [getFirstDerivFromParam](McDbEllipse.md#getfirstderivfromparam)
- [getHandle](McDbEllipse.md#gethandle)
- [getImp](McDbEllipse.md#getimp)
- [getJson](McDbEllipse.md#getjson)
- [getLength](McDbEllipse.md#getlength)
- [getObjectID](McDbEllipse.md#getobjectid)
- [getOwnerID](McDbEllipse.md#getownerid)
- [getParamAtDist](McDbEllipse.md#getparamatdist)
- [getParamAtPoint](McDbEllipse.md#getparamatpoint)
- [getPointAtDist](McDbEllipse.md#getpointatdist)
- [getPointAtParam](McDbEllipse.md#getpointatparam)
- [getSamplePoints](McDbEllipse.md#getsamplepoints)
- [getStartParam](McDbEllipse.md#getstartparam)
- [getStartPoint](McDbEllipse.md#getstartpoint)
- [getxData](McDbEllipse.md#getxdata)
- [getxDataDouble](McDbEllipse.md#getxdatadouble)
- [getxDataLong](McDbEllipse.md#getxdatalong)
- [getxDataPoint](McDbEllipse.md#getxdatapoint)
- [getxDataString](McDbEllipse.md#getxdatastring)
- [highlight](McDbEllipse.md#highlight)
- [initTempObject](McDbEllipse.md#inittempobject)
- [isErased](McDbEllipse.md#iserased)
- [isKindOf](McDbEllipse.md#iskindof)
- [isNull](McDbEllipse.md#isnull)
- [mirror](McDbEllipse.md#mirror)
- [move](McDbEllipse.md#move)
- [offsetCurves](McDbEllipse.md#offsetcurves)
- [rotate](McDbEllipse.md#rotate)
- [scaleEntity](McDbEllipse.md#scaleentity)
- [setCenter](McDbEllipse.md#setcenter)
- [setJson](McDbEllipse.md#setjson)
- [setMajorAxis](McDbEllipse.md#setmajoraxis)
- [setMinorAxis](McDbEllipse.md#setminoraxis)
- [setxData](McDbEllipse.md#setxdata)
- [setxDataDouble](McDbEllipse.md#setxdatadouble)
- [setxDataLong](McDbEllipse.md#setxdatalong)
- [setxDataPoint](McDbEllipse.md#setxdatapoint)
- [setxDataString](McDbEllipse.md#setxdatastring)
- [splitCurves](McDbEllipse.md#splitcurves)
- [splitCurvesFromParam](McDbEllipse.md#splitcurvesfromparam)
- [transformBy](McDbEllipse.md#transformby)
- [unErase](McDbEllipse.md#unerase)

## Constructors

### constructor

• **new McDbEllipse**(`cenx?`, `ceny?`, `cenz?`, `majorAxisx?`, `majorAxisy?`, `majorAxisz?`, `radiusRatio?`, `startAngle?`, `endAngle?`)

构造函数。

#### Parameters

| Name | Type |
| :------ | :------ |
| `cenx?` | `number` \| `object` |
| `ceny?` | `number` |
| `cenz?` | `number` |
| `majorAxisx?` | `number` |
| `majorAxisy?` | `number` |
| `majorAxisz?` | `number` |
| `radiusRatio?` | `number` |
| `startAngle?` | `number` |
| `endAngle?` | `number` |

#### Overrides

[McDbCurve](McDbCurve.md).[constructor](McDbCurve.md#constructor)

## Properties

### imp

• `Protected` **imp**: `any` = `0`

内部实现对象。

#### Inherited from

[McDbCurve](McDbCurve.md).[imp](McDbCurve.md#imp)

## Accessors

### center

• `get` **center**(): [`McGePoint3d`](McGePoint3d.md)

获取圆心坐标。

#### Returns

[`McGePoint3d`](McGePoint3d.md)

• `set` **center**(`pt`): `void`

设置圆心坐标。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pt` | [`McGePoint3d`](McGePoint3d.md) | 圆心坐标。 |

#### Returns

`void`

___

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

### dxf0

• `get` **dxf0**(): `string`

获取 DXF 代码 0 的值。

#### Returns

`string`

#### Inherited from

McDbCurve.dxf0

___

### endAngle

• `get` **endAngle**(): `number`

获取椭圆弧的结束角度

#### Returns

`number`

• `set` **endAngle**(`val`): `void`

设置椭圆弧的结束角度

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `number` |

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

### majorAxis

• `get` **majorAxis**(): [`McGeVector3d`](McGeVector3d.md)

获取主轴向量

#### Returns

[`McGeVector3d`](McGeVector3d.md)

• `set` **majorAxis**(`pt`): `void`

设置主轴向量。

#### Parameters

| Name | Type |
| :------ | :------ |
| `pt` | [`McGeVector3d`](McGeVector3d.md) |

#### Returns

`void`

___

### minorAxis

• `get` **minorAxis**(): [`McGeVector3d`](McGeVector3d.md)

获取副轴向量

#### Returns

[`McGeVector3d`](McGeVector3d.md)

• `set` **minorAxis**(`pt`): `void`

设置副轴向量。

#### Parameters

| Name | Type |
| :------ | :------ |
| `pt` | [`McGeVector3d`](McGeVector3d.md) |

#### Returns

`void`

___

### objectName

• `get` **objectName**(): `string`

获取对象名称。

#### Returns

`string`

#### Inherited from

McDbCurve.objectName

___

### radiusRatio

• `get` **radiusRatio**(): `number`

获取椭圆的副轴长度与主轴长度的比值

#### Returns

`number`

• `set` **radiusRatio**(`val`): `void`

设置椭圆的副轴长度与主轴长度的比值

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `number` |

#### Returns

`void`

___

### startAngle

• `get` **startAngle**(): `number`

获取椭圆弧的开始角度

#### Returns

`number`

• `set` **startAngle**(`val`): `void`

设置椭圆弧的开始角度

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `number` |

#### Returns

`void`

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

### setCenter

▸ **setCenter**(`x`, `y`, `z?`): `void`

设置圆心坐标。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | 圆心 x 坐标。 |
| `y` | `number` | 圆心 y 坐标。 |
| `z?` | `number` | 圆心 z 坐标。 |

#### Returns

`void`

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

### setMajorAxis

▸ **setMajorAxis**(`x`, `y`, `z?`): `void`

设置主轴向量

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | 圆心 x 坐标。 |
| `y` | `number` | 圆心 y 坐标。 |
| `z?` | `number` | 圆心 z 坐标。 |

#### Returns

`void`

___

### setMinorAxis

▸ **setMinorAxis**(`x`, `y`, `z?`): `void`

设置副轴向量

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | 圆心 x 坐标。 |
| `y` | `number` | 圆心 y 坐标。 |
| `z?` | `number` | 圆心 z 坐标。 |

#### Returns

`void`

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
