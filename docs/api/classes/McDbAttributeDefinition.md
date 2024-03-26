[mxcad API 文档](../README.md) / McDbAttributeDefinition

# Class: McDbAttributeDefinition

块引用属性定义文字对象

## Hierarchy

- [`McDbText`](McDbText.md)

  ↳ **`McDbAttributeDefinition`**

## Table of contents

### Constructors

- [constructor](McDbAttributeDefinition.md#constructor)

### Properties

- [imp](McDbAttributeDefinition.md#imp)

### Accessors

- [alignmentPoint](McDbAttributeDefinition.md#alignmentpoint)
- [colorIndex](McDbAttributeDefinition.md#colorindex)
- [dxf0](McDbAttributeDefinition.md#dxf0)
- [height](McDbAttributeDefinition.md#height)
- [horizontalMode](McDbAttributeDefinition.md#horizontalmode)
- [isConstant](McDbAttributeDefinition.md#isconstant)
- [isInvisible](McDbAttributeDefinition.md#isinvisible)
- [isPreset](McDbAttributeDefinition.md#ispreset)
- [isVerifiable](McDbAttributeDefinition.md#isverifiable)
- [layer](McDbAttributeDefinition.md#layer)
- [layerId](McDbAttributeDefinition.md#layerid)
- [linetype](McDbAttributeDefinition.md#linetype)
- [linetypeId](McDbAttributeDefinition.md#linetypeid)
- [linetypeScale](McDbAttributeDefinition.md#linetypescale)
- [lineweight](McDbAttributeDefinition.md#lineweight)
- [objectName](McDbAttributeDefinition.md#objectname)
- [oblique](McDbAttributeDefinition.md#oblique)
- [position](McDbAttributeDefinition.md#position)
- [prompt](McDbAttributeDefinition.md#prompt)
- [rotation](McDbAttributeDefinition.md#rotation)
- [tag](McDbAttributeDefinition.md#tag)
- [textString](McDbAttributeDefinition.md#textstring)
- [textStyle](McDbAttributeDefinition.md#textstyle)
- [textStyleId](McDbAttributeDefinition.md#textstyleid)
- [trueColor](McDbAttributeDefinition.md#truecolor)
- [verticalMode](McDbAttributeDefinition.md#verticalmode)
- [visible](McDbAttributeDefinition.md#visible)
- [widthFactor](McDbAttributeDefinition.md#widthfactor)

### Methods

- [IntersectWith](McDbAttributeDefinition.md#intersectwith)
- [clone](McDbAttributeDefinition.md#clone)
- [deleteXData](McDbAttributeDefinition.md#deletexdata)
- [disableDisplay](McDbAttributeDefinition.md#disabledisplay)
- [erase](McDbAttributeDefinition.md#erase)
- [explode](McDbAttributeDefinition.md#explode)
- [getAllAppName](McDbAttributeDefinition.md#getallappname)
- [getArea](McDbAttributeDefinition.md#getarea)
- [getBoundingBox](McDbAttributeDefinition.md#getboundingbox)
- [getDatabase](McDbAttributeDefinition.md#getdatabase)
- [getHandle](McDbAttributeDefinition.md#gethandle)
- [getImp](McDbAttributeDefinition.md#getimp)
- [getJson](McDbAttributeDefinition.md#getjson)
- [getObjectID](McDbAttributeDefinition.md#getobjectid)
- [getOwnerID](McDbAttributeDefinition.md#getownerid)
- [getxData](McDbAttributeDefinition.md#getxdata)
- [getxDataDouble](McDbAttributeDefinition.md#getxdatadouble)
- [getxDataLong](McDbAttributeDefinition.md#getxdatalong)
- [getxDataPoint](McDbAttributeDefinition.md#getxdatapoint)
- [getxDataString](McDbAttributeDefinition.md#getxdatastring)
- [highlight](McDbAttributeDefinition.md#highlight)
- [initTempObject](McDbAttributeDefinition.md#inittempobject)
- [isErased](McDbAttributeDefinition.md#iserased)
- [isKindOf](McDbAttributeDefinition.md#iskindof)
- [isNull](McDbAttributeDefinition.md#isnull)
- [mirror](McDbAttributeDefinition.md#mirror)
- [move](McDbAttributeDefinition.md#move)
- [rotate](McDbAttributeDefinition.md#rotate)
- [scaleEntity](McDbAttributeDefinition.md#scaleentity)
- [setJson](McDbAttributeDefinition.md#setjson)
- [setxData](McDbAttributeDefinition.md#setxdata)
- [setxDataDouble](McDbAttributeDefinition.md#setxdatadouble)
- [setxDataLong](McDbAttributeDefinition.md#setxdatalong)
- [setxDataPoint](McDbAttributeDefinition.md#setxdatapoint)
- [setxDataString](McDbAttributeDefinition.md#setxdatastring)
- [transformBy](McDbAttributeDefinition.md#transformby)
- [unErase](McDbAttributeDefinition.md#unerase)

## Constructors

### constructor

• **new McDbAttributeDefinition**(`imp?`)

构造函数。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `imp?` | `any` | 实现对象。 |

#### Overrides

[McDbText](McDbText.md).[constructor](McDbText.md#constructor)

## Properties

### imp

• `Protected` **imp**: `any` = `0`

内部实现对象。

#### Inherited from

[McDbText](McDbText.md).[imp](McDbText.md#imp)

## Accessors

### alignmentPoint

• `get` **alignmentPoint**(): [`McGePoint3d`](McGePoint3d.md)

获取或设置文字的对齐点。

#### Returns

[`McGePoint3d`](McGePoint3d.md)

#### Inherited from

McDbText.alignmentPoint

• `set` **alignmentPoint**(`pt`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pt` | [`McGePoint3d`](McGePoint3d.md) |

#### Returns

`void`

#### Inherited from

McDbText.alignmentPoint

___

### colorIndex

• `get` **colorIndex**(): `number`

得到对象颜色索引

#### Returns

`number`

#### Inherited from

McDbText.colorIndex

• `set` **colorIndex**(`val`): `void`

设置对象颜色索引

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `number` |

#### Returns

`void`

#### Inherited from

McDbText.colorIndex

___

### dxf0

• `get` **dxf0**(): `string`

获取 DXF 代码 0 的值。

#### Returns

`string`

#### Inherited from

McDbText.dxf0

___

### height

• `get` **height**(): `number`

获取或设置文字的高度。

#### Returns

`number`

#### Inherited from

McDbText.height

• `set` **height**(`val`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `number` |

#### Returns

`void`

#### Inherited from

McDbText.height

___

### horizontalMode

• `get` **horizontalMode**(): [`TextHorzMode`](../enums/McDb.TextHorzMode.md)

获取或设置文字的水平对齐方式。

#### Returns

[`TextHorzMode`](../enums/McDb.TextHorzMode.md)

#### Inherited from

McDbText.horizontalMode

• `set` **horizontalMode**(`val`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | [`TextHorzMode`](../enums/McDb.TextHorzMode.md) |

#### Returns

`void`

#### Inherited from

McDbText.horizontalMode

___

### isConstant

• `get` **isConstant**(): `boolean`

#### Returns

`boolean`

• `set` **isConstant**(`val`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `boolean` |

#### Returns

`void`

___

### isInvisible

• `get` **isInvisible**(): `boolean`

是否可见

#### Returns

`boolean`

• `set` **isInvisible**(`val`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `boolean` |

#### Returns

`void`

___

### isPreset

• `get` **isPreset**(): `boolean`

#### Returns

`boolean`

• `set` **isPreset**(`val`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `boolean` |

#### Returns

`void`

___

### isVerifiable

• `get` **isVerifiable**(): `boolean`

#### Returns

`boolean`

• `set` **isVerifiable**(`val`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `boolean` |

#### Returns

`void`

___

### layer

• `get` **layer**(): `string`

得到对象图层名

#### Returns

`string`

#### Inherited from

McDbText.layer

• `set` **layer**(`val`): `void`

设置对象图层名

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `string` |

#### Returns

`void`

#### Inherited from

McDbText.layer

___

### layerId

• `get` **layerId**(): [`McObjectId`](McObjectId.md)

#### Returns

[`McObjectId`](McObjectId.md)

#### Inherited from

McDbText.layerId

• `set` **layerId**(`id`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`McObjectId`](McObjectId.md) |

#### Returns

`void`

#### Inherited from

McDbText.layerId

___

### linetype

• `get` **linetype**(): `string`

得到对象线型名

#### Returns

`string`

#### Inherited from

McDbText.linetype

• `set` **linetype**(`val`): `void`

设置对象线型名

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `string` |

#### Returns

`void`

#### Inherited from

McDbText.linetype

___

### linetypeId

• `get` **linetypeId**(): [`McObjectId`](McObjectId.md)

#### Returns

[`McObjectId`](McObjectId.md)

#### Inherited from

McDbText.linetypeId

• `set` **linetypeId**(`id`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`McObjectId`](McObjectId.md) |

#### Returns

`void`

#### Inherited from

McDbText.linetypeId

___

### linetypeScale

• `get` **linetypeScale**(): `number`

得到对象线型比例

#### Returns

`number`

#### Inherited from

McDbText.linetypeScale

• `set` **linetypeScale**(`val`): `void`

设置对象线型比例

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `number` |

#### Returns

`void`

#### Inherited from

McDbText.linetypeScale

___

### lineweight

• `get` **lineweight**(): `number`

得到对象线重

#### Returns

`number`

#### Inherited from

McDbText.lineweight

• `set` **lineweight**(`val`): `void`

设置对象线重

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `number` |

#### Returns

`void`

#### Inherited from

McDbText.lineweight

___

### objectName

• `get` **objectName**(): `string`

获取对象名称。

#### Returns

`string`

#### Inherited from

McDbText.objectName

___

### oblique

• `get` **oblique**(): `number`

获取或设置文字的倾斜角度。

#### Returns

`number`

#### Inherited from

McDbText.oblique

• `set` **oblique**(`val`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `number` |

#### Returns

`void`

#### Inherited from

McDbText.oblique

___

### position

• `get` **position**(): [`McGePoint3d`](McGePoint3d.md)

获取或设置文字的位置。

#### Returns

[`McGePoint3d`](McGePoint3d.md)

#### Inherited from

McDbText.position

• `set` **position**(`pt`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pt` | [`McGePoint3d`](McGePoint3d.md) |

#### Returns

`void`

#### Inherited from

McDbText.position

___

### prompt

• `get` **prompt**(): `string`

#### Returns

`string`

• `set` **prompt**(`val`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `string` |

#### Returns

`void`

___

### rotation

• `get` **rotation**(): `number`

获取或设置文字的旋转角度。

#### Returns

`number`

#### Inherited from

McDbText.rotation

• `set` **rotation**(`pt`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pt` | `number` |

#### Returns

`void`

#### Inherited from

McDbText.rotation

___

### tag

• `get` **tag**(): `string`

获取或设置文字的字符串。

#### Returns

`string`

• `set` **tag**(`val`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `string` |

#### Returns

`void`

___

### textString

• `get` **textString**(): `string`

获取或设置文字的字符串。

#### Returns

`string`

#### Inherited from

McDbText.textString

• `set` **textString**(`val`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `string` |

#### Returns

`void`

#### Inherited from

McDbText.textString

___

### textStyle

• `get` **textStyle**(): `string`

得到对象文字样式

#### Returns

`string`

#### Inherited from

McDbText.textStyle

• `set` **textStyle**(`val`): `void`

设置对象文字样式

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `string` |

#### Returns

`void`

#### Inherited from

McDbText.textStyle

___

### textStyleId

• `get` **textStyleId**(): [`McObjectId`](McObjectId.md)

#### Returns

[`McObjectId`](McObjectId.md)

#### Inherited from

McDbText.textStyleId

• `set` **textStyleId**(`id`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`McObjectId`](McObjectId.md) |

#### Returns

`void`

#### Inherited from

McDbText.textStyleId

___

### trueColor

• `get` **trueColor**(): [`McCmColor`](McCmColor.md)

得到对象颜色

#### Returns

[`McCmColor`](McCmColor.md)

#### Inherited from

McDbText.trueColor

• `set` **trueColor**(`val`): `void`

设置对象颜色

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | [`McCmColor`](McCmColor.md) |

#### Returns

`void`

#### Inherited from

McDbText.trueColor

___

### verticalMode

• `get` **verticalMode**(): [`TextVertMode`](../enums/McDb.TextVertMode.md)

获取或设置文字的垂直对齐方式。

#### Returns

[`TextVertMode`](../enums/McDb.TextVertMode.md)

#### Inherited from

McDbText.verticalMode

• `set` **verticalMode**(`val`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | [`TextVertMode`](../enums/McDb.TextVertMode.md) |

#### Returns

`void`

#### Inherited from

McDbText.verticalMode

___

### visible

• `get` **visible**(): `boolean`

对象是否可见

#### Returns

`boolean`

#### Inherited from

McDbText.visible

• `set` **visible**(`val`): `void`

设置是否可见

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `boolean` |

#### Returns

`void`

#### Inherited from

McDbText.visible

___

### widthFactor

• `get` **widthFactor**(): `number`

获取或设置文字的宽度因子。

#### Returns

`number`

#### Inherited from

McDbText.widthFactor

• `set` **widthFactor**(`val`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `number` |

#### Returns

`void`

#### Inherited from

McDbText.widthFactor

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

[McDbText](McDbText.md).[IntersectWith](McDbText.md#intersectwith)

___

### clone

▸ **clone**(): ``null`` \| [`McDbObject`](McDbObject.md)

克隆对象。

#### Returns

``null`` \| [`McDbObject`](McDbObject.md)

克隆出的对象。

#### Inherited from

[McDbText](McDbText.md).[clone](McDbText.md#clone)

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

[McDbText](McDbText.md).[deleteXData](McDbText.md#deletexdata)

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

[McDbText](McDbText.md).[disableDisplay](McDbText.md#disabledisplay)

___

### erase

▸ **erase**(): `boolean`

删除对象。

#### Returns

`boolean`

是否删除成功。

#### Inherited from

[McDbText](McDbText.md).[erase](McDbText.md#erase)

___

### explode

▸ **explode**(): [`MxCADResbuf`](MxCADResbuf.md)

打碎对象，返回打后对象数据链表

#### Returns

[`MxCADResbuf`](MxCADResbuf.md)

#### Inherited from

[McDbText](McDbText.md).[explode](McDbText.md#explode)

___

### getAllAppName

▸ **getAllAppName**(): [`McGeStringArray`](McGeStringArray.md)

#### Returns

[`McGeStringArray`](McGeStringArray.md)

#### Inherited from

[McDbText](McDbText.md).[getAllAppName](McDbText.md#getallappname)

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

[McDbText](McDbText.md).[getArea](McDbText.md#getarea)

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

[McDbText](McDbText.md).[getBoundingBox](McDbText.md#getboundingbox)

___

### getDatabase

▸ **getDatabase**(): [`McDbDatabase`](McDbDatabase.md)

得到对象所在的数据库

#### Returns

[`McDbDatabase`](McDbDatabase.md)

#### Inherited from

[McDbText](McDbText.md).[getDatabase](McDbText.md#getdatabase)

___

### getHandle

▸ **getHandle**(): `string`

得到对象句柄

#### Returns

`string`

#### Inherited from

[McDbText](McDbText.md).[getHandle](McDbText.md#gethandle)

___

### getImp

▸ **getImp**(): `any`

获取内部实现对象。

#### Returns

`any`

内部实现对象。

#### Inherited from

[McDbText](McDbText.md).[getImp](McDbText.md#getimp)

___

### getJson

▸ **getJson**(): `string`

获取 JSON 格式的字符串。

#### Returns

`string`

JSON 格式的字符串。

#### Inherited from

[McDbText](McDbText.md).[getJson](McDbText.md#getjson)

___

### getObjectID

▸ **getObjectID**(): [`McObjectId`](McObjectId.md)

获取对象 ID。

#### Returns

[`McObjectId`](McObjectId.md)

对象 ID。

#### Inherited from

[McDbText](McDbText.md).[getObjectID](McDbText.md#getobjectid)

___

### getOwnerID

▸ **getOwnerID**(): `number`

得到对象拥用者的id

#### Returns

`number`

#### Inherited from

[McDbText](McDbText.md).[getOwnerID](McDbText.md#getownerid)

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

[McDbText](McDbText.md).[getxData](McDbText.md#getxdata)

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

[McDbText](McDbText.md).[getxDataDouble](McDbText.md#getxdatadouble)

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

[McDbText](McDbText.md).[getxDataLong](McDbText.md#getxdatalong)

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

[McDbText](McDbText.md).[getxDataPoint](McDbText.md#getxdatapoint)

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

[McDbText](McDbText.md).[getxDataString](McDbText.md#getxdatastring)

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

[McDbText](McDbText.md).[highlight](McDbText.md#highlight)

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

[McDbText](McDbText.md).[initTempObject](McDbText.md#inittempobject)

___

### isErased

▸ **isErased**(): `boolean`

对象是否已经删除

#### Returns

`boolean`

#### Inherited from

[McDbText](McDbText.md).[isErased](McDbText.md#iserased)

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

[McDbText](McDbText.md).[isKindOf](McDbText.md#iskindof)

___

### isNull

▸ **isNull**(): `any`

#### Returns

`any`

#### Inherited from

[McDbText](McDbText.md).[isNull](McDbText.md#isnull)

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

[McDbText](McDbText.md).[mirror](McDbText.md#mirror)

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

[McDbText](McDbText.md).[move](McDbText.md#move)

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

[McDbText](McDbText.md).[rotate](McDbText.md#rotate)

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

[McDbText](McDbText.md).[scaleEntity](McDbText.md#scaleentity)

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

[McDbText](McDbText.md).[setJson](McDbText.md#setjson)

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

[McDbText](McDbText.md).[setxData](McDbText.md#setxdata)

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

[McDbText](McDbText.md).[setxDataDouble](McDbText.md#setxdatadouble)

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

[McDbText](McDbText.md).[setxDataLong](McDbText.md#setxdatalong)

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

[McDbText](McDbText.md).[setxDataPoint](McDbText.md#setxdatapoint)

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

[McDbText](McDbText.md).[setxDataString](McDbText.md#setxdatastring)

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

[McDbText](McDbText.md).[transformBy](McDbText.md#transformby)

___

### unErase

▸ **unErase**(): `boolean`

反删除对象。

#### Returns

`boolean`

#### Inherited from

[McDbText](McDbText.md).[unErase](McDbText.md#unerase)
