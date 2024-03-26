[mxcad API 文档](../README.md) / McDbDimension

# Class: McDbDimension

MdDbDimension 尺寸类

## Hierarchy

- [`McDbEntity`](McDbEntity.md)

  ↳ **`McDbDimension`**

  ↳↳ [`McDbAlignedDimension`](McDbAlignedDimension.md)

  ↳↳ [`McDbRotatedDimension`](McDbRotatedDimension.md)

## Table of contents

### Constructors

- [constructor](McDbDimension.md#constructor)

### Properties

- [imp](McDbDimension.md#imp)

### Accessors

- [colorIndex](McDbDimension.md#colorindex)
- [dimensionStyle](McDbDimension.md#dimensionstyle)
- [dimensionText](McDbDimension.md#dimensiontext)
- [dxf0](McDbDimension.md#dxf0)
- [elevation](McDbDimension.md#elevation)
- [horizontalRotation](McDbDimension.md#horizontalrotation)
- [layer](McDbDimension.md#layer)
- [layerId](McDbDimension.md#layerid)
- [linetype](McDbDimension.md#linetype)
- [linetypeId](McDbDimension.md#linetypeid)
- [linetypeScale](McDbDimension.md#linetypescale)
- [lineweight](McDbDimension.md#lineweight)
- [objectName](McDbDimension.md#objectname)
- [textAttachment](McDbDimension.md#textattachment)
- [textPosition](McDbDimension.md#textposition)
- [textRotation](McDbDimension.md#textrotation)
- [textStyle](McDbDimension.md#textstyle)
- [textStyleId](McDbDimension.md#textstyleid)
- [trueColor](McDbDimension.md#truecolor)
- [visible](McDbDimension.md#visible)

### Methods

- [GetAllText](McDbDimension.md#getalltext)
- [IntersectWith](McDbDimension.md#intersectwith)
- [clone](McDbDimension.md#clone)
- [deleteXData](McDbDimension.md#deletexdata)
- [disableDisplay](McDbDimension.md#disabledisplay)
- [erase](McDbDimension.md#erase)
- [explode](McDbDimension.md#explode)
- [getAllAppName](McDbDimension.md#getallappname)
- [getArea](McDbDimension.md#getarea)
- [getBoundingBox](McDbDimension.md#getboundingbox)
- [getDatabase](McDbDimension.md#getdatabase)
- [getDimVarDouble](McDbDimension.md#getdimvardouble)
- [getDimVarInt](McDbDimension.md#getdimvarint)
- [getDimVarObjectId](McDbDimension.md#getdimvarobjectid)
- [getDimVarString](McDbDimension.md#getdimvarstring)
- [getHandle](McDbDimension.md#gethandle)
- [getImp](McDbDimension.md#getimp)
- [getJson](McDbDimension.md#getjson)
- [getObjectID](McDbDimension.md#getobjectid)
- [getOwnerID](McDbDimension.md#getownerid)
- [getxData](McDbDimension.md#getxdata)
- [getxDataDouble](McDbDimension.md#getxdatadouble)
- [getxDataLong](McDbDimension.md#getxdatalong)
- [getxDataPoint](McDbDimension.md#getxdatapoint)
- [getxDataString](McDbDimension.md#getxdatastring)
- [highlight](McDbDimension.md#highlight)
- [initTempObject](McDbDimension.md#inittempobject)
- [isErased](McDbDimension.md#iserased)
- [isKindOf](McDbDimension.md#iskindof)
- [isNull](McDbDimension.md#isnull)
- [isUsingDefaultTextPosition](McDbDimension.md#isusingdefaulttextposition)
- [mirror](McDbDimension.md#mirror)
- [move](McDbDimension.md#move)
- [recomputeDimBlock](McDbDimension.md#recomputedimblock)
- [rotate](McDbDimension.md#rotate)
- [scaleEntity](McDbDimension.md#scaleentity)
- [setDimVarDouble](McDbDimension.md#setdimvardouble)
- [setDimVarInt](McDbDimension.md#setdimvarint)
- [setDimVarObjectId](McDbDimension.md#setdimvarobjectid)
- [setDimVarString](McDbDimension.md#setdimvarstring)
- [setJson](McDbDimension.md#setjson)
- [setxData](McDbDimension.md#setxdata)
- [setxDataDouble](McDbDimension.md#setxdatadouble)
- [setxDataLong](McDbDimension.md#setxdatalong)
- [setxDataPoint](McDbDimension.md#setxdatapoint)
- [setxDataString](McDbDimension.md#setxdatastring)
- [transformBy](McDbDimension.md#transformby)
- [unErase](McDbDimension.md#unerase)
- [useDefaultTextPosition](McDbDimension.md#usedefaulttextposition)
- [useSetTextPosition](McDbDimension.md#usesettextposition)

## Constructors

### constructor

• **new McDbDimension**(`imp?`)

构造函数

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `imp?` | `any` | 实现对象 |

#### Overrides

[McDbEntity](McDbEntity.md).[constructor](McDbEntity.md#constructor)

## Properties

### imp

• `Protected` **imp**: `any` = `0`

内部实现对象。

#### Inherited from

[McDbEntity](McDbEntity.md).[imp](McDbEntity.md#imp)

## Accessors

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

### dimensionStyle

• `get` **dimensionStyle**(): [`McObjectId`](McObjectId.md)

获取标注样式

#### Returns

[`McObjectId`](McObjectId.md)

标注样式

• `set` **dimensionStyle**(`val`): `void`

设置标注样式

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val` | [`McObjectId`](McObjectId.md) | 标注样式 |

#### Returns

`void`

___

### dimensionText

• `get` **dimensionText**(): `string`

获取标注文本

#### Returns

`string`

标注文本

• `set` **dimensionText**(`val`): `void`

设置标注文本

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val` | `string` | 标注文本 |

#### Returns

`void`

___

### dxf0

• `get` **dxf0**(): `string`

获取 DXF 代码 0 的值。

#### Returns

`string`

#### Inherited from

McDbEntity.dxf0

___

### elevation

• `get` **elevation**(): `number`

获取高度

#### Returns

`number`

高度

• `set` **elevation**(`val`): `void`

设置高度

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val` | `number` | 高度 |

#### Returns

`void`

___

### horizontalRotation

• `get` **horizontalRotation**(): `number`

获取水平旋转角度

#### Returns

`number`

水平旋转角度

• `set` **horizontalRotation**(`val`): `void`

设置水平旋转角度

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val` | `number` | 水平旋转角度 |

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

### textAttachment

• `get` **textAttachment**(): [`AttachmentPoint`](../enums/McDb.AttachmentPoint.md)

获取文本附着点

#### Returns

[`AttachmentPoint`](../enums/McDb.AttachmentPoint.md)

文本附着点

• `set` **textAttachment**(`val`): `void`

设置文本附着点

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val` | [`AttachmentPoint`](../enums/McDb.AttachmentPoint.md) | 文本附着点 |

#### Returns

`void`

___

### textPosition

• `get` **textPosition**(): [`McGePoint3d`](McGePoint3d.md)

获取文本位置

#### Returns

[`McGePoint3d`](McGePoint3d.md)

文本位置

• `set` **textPosition**(`pt`): `void`

设置文本位置

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pt` | [`McGePoint3d`](McGePoint3d.md) | 文本位置 |

#### Returns

`void`

___

### textRotation

• `get` **textRotation**(): `number`

获取文本旋转角度

#### Returns

`number`

文本旋转角度

• `set` **textRotation**(`val`): `void`

设置文本旋转角度

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val` | `number` | 文本旋转角度 |

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

## Methods

### GetAllText

▸ **GetAllText**(): [`McGeStringArray`](McGeStringArray.md)

得到标注对象中的所有文字内容

#### Returns

[`McGeStringArray`](McGeStringArray.md)

___

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

### getDimVarDouble

▸ **getDimVarDouble**(`iType`): `number`

获取标注变量浮点数值

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `iType` | `number` | 标注变量类型 |

#### Returns

`number`

标注变量浮点数值

___

### getDimVarInt

▸ **getDimVarInt**(`iType`): `number`

获取标注变量整数值

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `iType` | `number` | 标注变量类型 |

#### Returns

`number`

标注变量整数值

___

### getDimVarObjectId

▸ **getDimVarObjectId**(`iType`): [`McObjectId`](McObjectId.md)

获取标注变量对象 ID

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `iType` | `number` | 标注变量类型 |

#### Returns

[`McObjectId`](McObjectId.md)

标注变量对象 ID

___

### getDimVarString

▸ **getDimVarString**(`iType`): `string`

获取标注变量字符串值

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `iType` | `number` | 标注变量类型 |

#### Returns

`string`

标注变量字符串值

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

### isUsingDefaultTextPosition

▸ **isUsingDefaultTextPosition**(): `boolean`

是否使用默认文本位置

#### Returns

`boolean`

是否使用默认文本位置

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

### recomputeDimBlock

▸ **recomputeDimBlock**(): `void`

重新计算标注块

#### Returns

`void`

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

### setDimVarDouble

▸ **setDimVarDouble**(`iType`, `val`): `void`

设置标注变量浮点数值

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `iType` | `number` | 标注变量类型 |
| `val` | `number` | 标注变量浮点数值 |

#### Returns

`void`

___

### setDimVarInt

▸ **setDimVarInt**(`iType`, `val`): `void`

设置标注变量整数值

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `iType` | `number` | 标注变量类型 |
| `val` | `number` | 标注变量整数值 |

#### Returns

`void`

___

### setDimVarObjectId

▸ **setDimVarObjectId**(`iType`, `val`): `void`

设置标注变量对象 ID

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `iType` | `number` | 标注变量类型 |
| `val` | [`McObjectId`](McObjectId.md) | 标注变量对象 ID |

#### Returns

`void`

___

### setDimVarString

▸ **setDimVarString**(`iType`, `val`): `void`

设置标注变量字符串值

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `iType` | `number` | 标注变量类型 |
| `val` | `string` | 标注变量字符串值 |

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

___

### useDefaultTextPosition

▸ **useDefaultTextPosition**(): `void`

使用默认文本位置

#### Returns

`void`

___

### useSetTextPosition

▸ **useSetTextPosition**(): `void`

使用设置的文本位置

#### Returns

`void`
