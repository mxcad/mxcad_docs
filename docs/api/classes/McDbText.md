[mxcad API 文档](../README.md) / McDbText

# Class: McDbText

表示一个 CAD 文字实体。

## Hierarchy

- [`McDbEntity`](McDbEntity.md)

  ↳ **`McDbText`**

  ↳↳ [`McDbAttribute`](McDbAttribute.md)

  ↳↳ [`McDbAttributeDefinition`](McDbAttributeDefinition.md)

## Table of contents

### Constructors

- [constructor](McDbText.md#constructor)

### Properties

- [imp](McDbText.md#imp)

### Accessors

- [alignmentPoint](McDbText.md#alignmentpoint)
- [colorIndex](McDbText.md#colorindex)
- [dxf0](McDbText.md#dxf0)
- [height](McDbText.md#height)
- [horizontalMode](McDbText.md#horizontalmode)
- [layer](McDbText.md#layer)
- [layerId](McDbText.md#layerid)
- [linetype](McDbText.md#linetype)
- [linetypeId](McDbText.md#linetypeid)
- [linetypeScale](McDbText.md#linetypescale)
- [lineweight](McDbText.md#lineweight)
- [objectName](McDbText.md#objectname)
- [oblique](McDbText.md#oblique)
- [position](McDbText.md#position)
- [rotation](McDbText.md#rotation)
- [textString](McDbText.md#textstring)
- [textStyle](McDbText.md#textstyle)
- [textStyleId](McDbText.md#textstyleid)
- [trueColor](McDbText.md#truecolor)
- [verticalMode](McDbText.md#verticalmode)
- [visible](McDbText.md#visible)
- [widthFactor](McDbText.md#widthfactor)

### Methods

- [IntersectWith](McDbText.md#intersectwith)
- [clone](McDbText.md#clone)
- [deleteXData](McDbText.md#deletexdata)
- [disableDisplay](McDbText.md#disabledisplay)
- [erase](McDbText.md#erase)
- [explode](McDbText.md#explode)
- [getAllAppName](McDbText.md#getallappname)
- [getArea](McDbText.md#getarea)
- [getBoundingBox](McDbText.md#getboundingbox)
- [getDatabase](McDbText.md#getdatabase)
- [getHandle](McDbText.md#gethandle)
- [getImp](McDbText.md#getimp)
- [getJson](McDbText.md#getjson)
- [getObjectID](McDbText.md#getobjectid)
- [getOwnerID](McDbText.md#getownerid)
- [getxData](McDbText.md#getxdata)
- [getxDataDouble](McDbText.md#getxdatadouble)
- [getxDataLong](McDbText.md#getxdatalong)
- [getxDataPoint](McDbText.md#getxdatapoint)
- [getxDataString](McDbText.md#getxdatastring)
- [highlight](McDbText.md#highlight)
- [initTempObject](McDbText.md#inittempobject)
- [isErased](McDbText.md#iserased)
- [isKindOf](McDbText.md#iskindof)
- [isNull](McDbText.md#isnull)
- [mirror](McDbText.md#mirror)
- [move](McDbText.md#move)
- [rotate](McDbText.md#rotate)
- [scaleEntity](McDbText.md#scaleentity)
- [setJson](McDbText.md#setjson)
- [setxData](McDbText.md#setxdata)
- [setxDataDouble](McDbText.md#setxdatadouble)
- [setxDataLong](McDbText.md#setxdatalong)
- [setxDataPoint](McDbText.md#setxdatapoint)
- [setxDataString](McDbText.md#setxdatastring)
- [transformBy](McDbText.md#transformby)
- [unErase](McDbText.md#unerase)

## Constructors

### constructor

• **new McDbText**(`imp?`)

构造函数。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `imp?` | `any` | 实现对象。 |

#### Overrides

[McDbEntity](McDbEntity.md).[constructor](McDbEntity.md#constructor)

## Properties

### imp

• `Protected` **imp**: `any` = `0`

内部实现对象。

#### Inherited from

[McDbEntity](McDbEntity.md).[imp](McDbEntity.md#imp)

## Accessors

### alignmentPoint

• `get` **alignmentPoint**(): [`McGePoint3d`](McGePoint3d.md)

获取或设置文字的对齐点。

#### Returns

[`McGePoint3d`](McGePoint3d.md)

• `set` **alignmentPoint**(`pt`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pt` | [`McGePoint3d`](McGePoint3d.md) |

#### Returns

`void`

___

### colorIndex

• `get` **colorIndex**(): `number`

得到对象颜色索引

#### Returns

`number`

#### Inherited from

McDbEntity.colorIndex

• `set` **colorIndex**(`val`): `void`

设置对象颜色索引

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `number` |

#### Returns

`void`

#### Inherited from

McDbEntity.colorIndex

___

### dxf0

• `get` **dxf0**(): `string`

获取 DXF 代码 0 的值。

#### Returns

`string`

#### Inherited from

McDbEntity.dxf0

___

### height

• `get` **height**(): `number`

获取或设置文字的高度。

#### Returns

`number`

• `set` **height**(`val`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `number` |

#### Returns

`void`

___

### horizontalMode

• `get` **horizontalMode**(): [`TextHorzMode`](../enums/McDb.TextHorzMode.md)

获取或设置文字的水平对齐方式。

#### Returns

[`TextHorzMode`](../enums/McDb.TextHorzMode.md)

• `set` **horizontalMode**(`val`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | [`TextHorzMode`](../enums/McDb.TextHorzMode.md) |

#### Returns

`void`

___

### layer

• `get` **layer**(): `string`

得到对象图层名

#### Returns

`string`

#### Inherited from

McDbEntity.layer

• `set` **layer**(`val`): `void`

设置对象图层名

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `string` |

#### Returns

`void`

#### Inherited from

McDbEntity.layer

___

### layerId

• `get` **layerId**(): [`McObjectId`](McObjectId.md)

#### Returns

[`McObjectId`](McObjectId.md)

#### Inherited from

McDbEntity.layerId

• `set` **layerId**(`id`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`McObjectId`](McObjectId.md) |

#### Returns

`void`

#### Inherited from

McDbEntity.layerId

___

### linetype

• `get` **linetype**(): `string`

得到对象线型名

#### Returns

`string`

#### Inherited from

McDbEntity.linetype

• `set` **linetype**(`val`): `void`

设置对象线型名

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `string` |

#### Returns

`void`

#### Inherited from

McDbEntity.linetype

___

### linetypeId

• `get` **linetypeId**(): [`McObjectId`](McObjectId.md)

#### Returns

[`McObjectId`](McObjectId.md)

#### Inherited from

McDbEntity.linetypeId

• `set` **linetypeId**(`id`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`McObjectId`](McObjectId.md) |

#### Returns

`void`

#### Inherited from

McDbEntity.linetypeId

___

### linetypeScale

• `get` **linetypeScale**(): `number`

得到对象线型比例

#### Returns

`number`

#### Inherited from

McDbEntity.linetypeScale

• `set` **linetypeScale**(`val`): `void`

设置对象线型比例

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `number` |

#### Returns

`void`

#### Inherited from

McDbEntity.linetypeScale

___

### lineweight

• `get` **lineweight**(): `number`

得到对象线重

#### Returns

`number`

#### Inherited from

McDbEntity.lineweight

• `set` **lineweight**(`val`): `void`

设置对象线重

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `number` |

#### Returns

`void`

#### Inherited from

McDbEntity.lineweight

___

### objectName

• `get` **objectName**(): `string`

获取对象名称。

#### Returns

`string`

#### Inherited from

McDbEntity.objectName

___

### oblique

• `get` **oblique**(): `number`

获取或设置文字的倾斜角度。

#### Returns

`number`

• `set` **oblique**(`val`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `number` |

#### Returns

`void`

___

### position

• `get` **position**(): [`McGePoint3d`](McGePoint3d.md)

获取或设置文字的位置。

#### Returns

[`McGePoint3d`](McGePoint3d.md)

• `set` **position**(`pt`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pt` | [`McGePoint3d`](McGePoint3d.md) |

#### Returns

`void`

___

### rotation

• `get` **rotation**(): `number`

获取或设置文字的旋转角度。

#### Returns

`number`

• `set` **rotation**(`pt`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pt` | `number` |

#### Returns

`void`

___

### textString

• `get` **textString**(): `string`

获取或设置文字的字符串。

#### Returns

`string`

• `set` **textString**(`val`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `string` |

#### Returns

`void`

___

### textStyle

• `get` **textStyle**(): `string`

得到对象文字样式

#### Returns

`string`

#### Inherited from

McDbEntity.textStyle

• `set` **textStyle**(`val`): `void`

设置对象文字样式

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `string` |

#### Returns

`void`

#### Inherited from

McDbEntity.textStyle

___

### textStyleId

• `get` **textStyleId**(): [`McObjectId`](McObjectId.md)

#### Returns

[`McObjectId`](McObjectId.md)

#### Inherited from

McDbEntity.textStyleId

• `set` **textStyleId**(`id`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`McObjectId`](McObjectId.md) |

#### Returns

`void`

#### Inherited from

McDbEntity.textStyleId

___

### trueColor

• `get` **trueColor**(): [`McCmColor`](McCmColor.md)

得到对象颜色

#### Returns

[`McCmColor`](McCmColor.md)

#### Inherited from

McDbEntity.trueColor

• `set` **trueColor**(`val`): `void`

设置对象颜色

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | [`McCmColor`](McCmColor.md) |

#### Returns

`void`

#### Inherited from

McDbEntity.trueColor

___

### verticalMode

• `get` **verticalMode**(): [`TextVertMode`](../enums/McDb.TextVertMode.md)

获取或设置文字的垂直对齐方式。

#### Returns

[`TextVertMode`](../enums/McDb.TextVertMode.md)

• `set` **verticalMode**(`val`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | [`TextVertMode`](../enums/McDb.TextVertMode.md) |

#### Returns

`void`

___

### visible

• `get` **visible**(): `boolean`

对象是否可见

#### Returns

`boolean`

#### Inherited from

McDbEntity.visible

• `set` **visible**(`val`): `void`

设置是否可见

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `boolean` |

#### Returns

`void`

#### Inherited from

McDbEntity.visible

___

### widthFactor

• `get` **widthFactor**(): `number`

获取或设置文字的宽度因子。

#### Returns

`number`

• `set` **widthFactor**(`val`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `number` |

#### Returns

`void`

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

[McDbEntity](McDbEntity.md).[IntersectWith](McDbEntity.md#intersectwith)

___

### clone

▸ **clone**(): ``null`` \| [`McDbObject`](McDbObject.md)

克隆对象。

#### Returns

``null`` \| [`McDbObject`](McDbObject.md)

克隆出的对象。

#### Inherited from

[McDbEntity](McDbEntity.md).[clone](McDbEntity.md#clone)

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

[McDbEntity](McDbEntity.md).[deleteXData](McDbEntity.md#deletexdata)

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

[McDbEntity](McDbEntity.md).[disableDisplay](McDbEntity.md#disabledisplay)

___

### erase

▸ **erase**(): `boolean`

删除对象。

#### Returns

`boolean`

是否删除成功。

#### Inherited from

[McDbEntity](McDbEntity.md).[erase](McDbEntity.md#erase)

___

### explode

▸ **explode**(): [`MxCADResbuf`](MxCADResbuf.md)

打碎对象，返回打后对象数据链表

#### Returns

[`MxCADResbuf`](MxCADResbuf.md)

#### Inherited from

[McDbEntity](McDbEntity.md).[explode](McDbEntity.md#explode)

___

### getAllAppName

▸ **getAllAppName**(): [`McGeStringArray`](McGeStringArray.md)

#### Returns

[`McGeStringArray`](McGeStringArray.md)

#### Inherited from

[McDbEntity](McDbEntity.md).[getAllAppName](McDbEntity.md#getallappname)

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

[McDbEntity](McDbEntity.md).[getArea](McDbEntity.md#getarea)

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

[McDbEntity](McDbEntity.md).[getBoundingBox](McDbEntity.md#getboundingbox)

___

### getDatabase

▸ **getDatabase**(): [`McDbDatabase`](McDbDatabase.md)

得到对象所在的数据库

#### Returns

[`McDbDatabase`](McDbDatabase.md)

#### Inherited from

[McDbEntity](McDbEntity.md).[getDatabase](McDbEntity.md#getdatabase)

___

### getHandle

▸ **getHandle**(): `string`

得到对象句柄

#### Returns

`string`

#### Inherited from

[McDbEntity](McDbEntity.md).[getHandle](McDbEntity.md#gethandle)

___

### getImp

▸ **getImp**(): `any`

获取内部实现对象。

#### Returns

`any`

内部实现对象。

#### Inherited from

[McDbEntity](McDbEntity.md).[getImp](McDbEntity.md#getimp)

___

### getJson

▸ **getJson**(): `string`

获取 JSON 格式的字符串。

#### Returns

`string`

JSON 格式的字符串。

#### Inherited from

[McDbEntity](McDbEntity.md).[getJson](McDbEntity.md#getjson)

___

### getObjectID

▸ **getObjectID**(): [`McObjectId`](McObjectId.md)

获取对象 ID。

#### Returns

[`McObjectId`](McObjectId.md)

对象 ID。

#### Inherited from

[McDbEntity](McDbEntity.md).[getObjectID](McDbEntity.md#getobjectid)

___

### getOwnerID

▸ **getOwnerID**(): `number`

得到对象拥用者的id

#### Returns

`number`

#### Inherited from

[McDbEntity](McDbEntity.md).[getOwnerID](McDbEntity.md#getownerid)

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

[McDbEntity](McDbEntity.md).[getxData](McDbEntity.md#getxdata)

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

[McDbEntity](McDbEntity.md).[getxDataDouble](McDbEntity.md#getxdatadouble)

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

[McDbEntity](McDbEntity.md).[getxDataLong](McDbEntity.md#getxdatalong)

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

[McDbEntity](McDbEntity.md).[getxDataPoint](McDbEntity.md#getxdatapoint)

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

[McDbEntity](McDbEntity.md).[getxDataString](McDbEntity.md#getxdatastring)

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

[McDbEntity](McDbEntity.md).[highlight](McDbEntity.md#highlight)

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

[McDbEntity](McDbEntity.md).[initTempObject](McDbEntity.md#inittempobject)

___

### isErased

▸ **isErased**(): `boolean`

对象是否已经删除

#### Returns

`boolean`

#### Inherited from

[McDbEntity](McDbEntity.md).[isErased](McDbEntity.md#iserased)

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

[McDbEntity](McDbEntity.md).[isKindOf](McDbEntity.md#iskindof)

___

### isNull

▸ **isNull**(): `any`

#### Returns

`any`

#### Inherited from

[McDbEntity](McDbEntity.md).[isNull](McDbEntity.md#isnull)

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

[McDbEntity](McDbEntity.md).[mirror](McDbEntity.md#mirror)

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

[McDbEntity](McDbEntity.md).[move](McDbEntity.md#move)

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

[McDbEntity](McDbEntity.md).[rotate](McDbEntity.md#rotate)

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

[McDbEntity](McDbEntity.md).[scaleEntity](McDbEntity.md#scaleentity)

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

[McDbEntity](McDbEntity.md).[setJson](McDbEntity.md#setjson)

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

[McDbEntity](McDbEntity.md).[setxData](McDbEntity.md#setxdata)

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

[McDbEntity](McDbEntity.md).[setxDataDouble](McDbEntity.md#setxdatadouble)

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

[McDbEntity](McDbEntity.md).[setxDataLong](McDbEntity.md#setxdatalong)

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

[McDbEntity](McDbEntity.md).[setxDataPoint](McDbEntity.md#setxdatapoint)

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

[McDbEntity](McDbEntity.md).[setxDataString](McDbEntity.md#setxdatastring)

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

[McDbEntity](McDbEntity.md).[transformBy](McDbEntity.md#transformby)

___

### unErase

▸ **unErase**(): `boolean`

反删除对象。

#### Returns

`boolean`

#### Inherited from

[McDbEntity](McDbEntity.md).[unErase](McDbEntity.md#unerase)
