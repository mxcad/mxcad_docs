[mxcad API 文档](../README.md) / McDbRotatedDimension

# Class: McDbRotatedDimension

旋转标注尺寸类

## Hierarchy

- [`McDbDimension`](McDbDimension.md)

  ↳ **`McDbRotatedDimension`**

## Table of contents

### Constructors

- [constructor](McDbRotatedDimension.md#constructor)

### Properties

- [imp](McDbRotatedDimension.md#imp)

### Accessors

- [colorIndex](McDbRotatedDimension.md#colorindex)
- [dimLinePoint](McDbRotatedDimension.md#dimlinepoint)
- [dimensionStyle](McDbRotatedDimension.md#dimensionstyle)
- [dimensionText](McDbRotatedDimension.md#dimensiontext)
- [dxf0](McDbRotatedDimension.md#dxf0)
- [elevation](McDbRotatedDimension.md#elevation)
- [horizontalRotation](McDbRotatedDimension.md#horizontalrotation)
- [layer](McDbRotatedDimension.md#layer)
- [layerId](McDbRotatedDimension.md#layerid)
- [linetype](McDbRotatedDimension.md#linetype)
- [linetypeId](McDbRotatedDimension.md#linetypeid)
- [linetypeScale](McDbRotatedDimension.md#linetypescale)
- [lineweight](McDbRotatedDimension.md#lineweight)
- [objectName](McDbRotatedDimension.md#objectname)
- [oblique](McDbRotatedDimension.md#oblique)
- [rotation](McDbRotatedDimension.md#rotation)
- [textAttachment](McDbRotatedDimension.md#textattachment)
- [textPosition](McDbRotatedDimension.md#textposition)
- [textRotation](McDbRotatedDimension.md#textrotation)
- [textStyle](McDbRotatedDimension.md#textstyle)
- [textStyleId](McDbRotatedDimension.md#textstyleid)
- [trueColor](McDbRotatedDimension.md#truecolor)
- [visible](McDbRotatedDimension.md#visible)
- [xLine1Point](McDbRotatedDimension.md#xline1point)
- [xLine2Point](McDbRotatedDimension.md#xline2point)

### Methods

- [GetAllText](McDbRotatedDimension.md#getalltext)
- [IntersectWith](McDbRotatedDimension.md#intersectwith)
- [clone](McDbRotatedDimension.md#clone)
- [deleteXData](McDbRotatedDimension.md#deletexdata)
- [disableDisplay](McDbRotatedDimension.md#disabledisplay)
- [erase](McDbRotatedDimension.md#erase)
- [explode](McDbRotatedDimension.md#explode)
- [getAllAppName](McDbRotatedDimension.md#getallappname)
- [getArea](McDbRotatedDimension.md#getarea)
- [getBoundingBox](McDbRotatedDimension.md#getboundingbox)
- [getDatabase](McDbRotatedDimension.md#getdatabase)
- [getDimVarDouble](McDbRotatedDimension.md#getdimvardouble)
- [getDimVarInt](McDbRotatedDimension.md#getdimvarint)
- [getDimVarObjectId](McDbRotatedDimension.md#getdimvarobjectid)
- [getDimVarString](McDbRotatedDimension.md#getdimvarstring)
- [getHandle](McDbRotatedDimension.md#gethandle)
- [getImp](McDbRotatedDimension.md#getimp)
- [getJson](McDbRotatedDimension.md#getjson)
- [getObjectID](McDbRotatedDimension.md#getobjectid)
- [getOwnerID](McDbRotatedDimension.md#getownerid)
- [getxData](McDbRotatedDimension.md#getxdata)
- [getxDataDouble](McDbRotatedDimension.md#getxdatadouble)
- [getxDataLong](McDbRotatedDimension.md#getxdatalong)
- [getxDataPoint](McDbRotatedDimension.md#getxdatapoint)
- [getxDataString](McDbRotatedDimension.md#getxdatastring)
- [highlight](McDbRotatedDimension.md#highlight)
- [initTempObject](McDbRotatedDimension.md#inittempobject)
- [isErased](McDbRotatedDimension.md#iserased)
- [isKindOf](McDbRotatedDimension.md#iskindof)
- [isNull](McDbRotatedDimension.md#isnull)
- [isUsingDefaultTextPosition](McDbRotatedDimension.md#isusingdefaulttextposition)
- [mirror](McDbRotatedDimension.md#mirror)
- [move](McDbRotatedDimension.md#move)
- [recomputeDimBlock](McDbRotatedDimension.md#recomputedimblock)
- [rotate](McDbRotatedDimension.md#rotate)
- [scaleEntity](McDbRotatedDimension.md#scaleentity)
- [setDimVarDouble](McDbRotatedDimension.md#setdimvardouble)
- [setDimVarInt](McDbRotatedDimension.md#setdimvarint)
- [setDimVarObjectId](McDbRotatedDimension.md#setdimvarobjectid)
- [setDimVarString](McDbRotatedDimension.md#setdimvarstring)
- [setJson](McDbRotatedDimension.md#setjson)
- [setxData](McDbRotatedDimension.md#setxdata)
- [setxDataDouble](McDbRotatedDimension.md#setxdatadouble)
- [setxDataLong](McDbRotatedDimension.md#setxdatalong)
- [setxDataPoint](McDbRotatedDimension.md#setxdatapoint)
- [setxDataString](McDbRotatedDimension.md#setxdatastring)
- [transformBy](McDbRotatedDimension.md#transformby)
- [unErase](McDbRotatedDimension.md#unerase)
- [useDefaultTextPosition](McDbRotatedDimension.md#usedefaulttextposition)
- [useSetTextPosition](McDbRotatedDimension.md#usesettextposition)

## Constructors

### constructor

• **new McDbRotatedDimension**(`imp?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `imp?` | `any` |

#### Overrides

[McDbDimension](McDbDimension.md).[constructor](McDbDimension.md#constructor)

## Properties

### imp

• `Protected` **imp**: `any` = `0`

内部实现对象。

#### Inherited from

[McDbDimension](McDbDimension.md).[imp](McDbDimension.md#imp)

## Accessors

### colorIndex

• `get` **colorIndex**(): `number`

得到对象颜色索引

#### Returns

`number`

#### Inherited from

McDbDimension.colorIndex

• `set` **colorIndex**(`val`): `void`

设置对象颜色索引

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `number` |

#### Returns

`void`

#### Inherited from

McDbDimension.colorIndex

___

### dimLinePoint

• `get` **dimLinePoint**(): [`McGePoint3d`](McGePoint3d.md)

获取标注线的端点

#### Returns

[`McGePoint3d`](McGePoint3d.md)

标注线的端点

• `set` **dimLinePoint**(`pt`): `void`

设置标注线的端点

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pt` | [`McGePoint3d`](McGePoint3d.md) | 标注线的端点 |

#### Returns

`void`

___

### dimensionStyle

• `get` **dimensionStyle**(): [`McObjectId`](McObjectId.md)

获取标注样式

#### Returns

[`McObjectId`](McObjectId.md)

标注样式

#### Inherited from

McDbDimension.dimensionStyle

• `set` **dimensionStyle**(`val`): `void`

设置标注样式

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val` | [`McObjectId`](McObjectId.md) | 标注样式 |

#### Returns

`void`

#### Inherited from

McDbDimension.dimensionStyle

___

### dimensionText

• `get` **dimensionText**(): `string`

获取标注文本

#### Returns

`string`

标注文本

#### Inherited from

McDbDimension.dimensionText

• `set` **dimensionText**(`val`): `void`

设置标注文本

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val` | `string` | 标注文本 |

#### Returns

`void`

#### Inherited from

McDbDimension.dimensionText

___

### dxf0

• `get` **dxf0**(): `string`

获取 DXF 代码 0 的值。

#### Returns

`string`

#### Inherited from

McDbDimension.dxf0

___

### elevation

• `get` **elevation**(): `number`

获取高度

#### Returns

`number`

高度

#### Inherited from

McDbDimension.elevation

• `set` **elevation**(`val`): `void`

设置高度

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val` | `number` | 高度 |

#### Returns

`void`

#### Inherited from

McDbDimension.elevation

___

### horizontalRotation

• `get` **horizontalRotation**(): `number`

获取水平旋转角度

#### Returns

`number`

水平旋转角度

#### Inherited from

McDbDimension.horizontalRotation

• `set` **horizontalRotation**(`val`): `void`

设置水平旋转角度

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val` | `number` | 水平旋转角度 |

#### Returns

`void`

#### Inherited from

McDbDimension.horizontalRotation

___

### layer

• `get` **layer**(): `string`

得到对象图层名

#### Returns

`string`

#### Inherited from

McDbDimension.layer

• `set` **layer**(`val`): `void`

设置对象图层名

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `string` |

#### Returns

`void`

#### Inherited from

McDbDimension.layer

___

### layerId

• `get` **layerId**(): [`McObjectId`](McObjectId.md)

#### Returns

[`McObjectId`](McObjectId.md)

#### Inherited from

McDbDimension.layerId

• `set` **layerId**(`id`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`McObjectId`](McObjectId.md) |

#### Returns

`void`

#### Inherited from

McDbDimension.layerId

___

### linetype

• `get` **linetype**(): `string`

得到对象线型名

#### Returns

`string`

#### Inherited from

McDbDimension.linetype

• `set` **linetype**(`val`): `void`

设置对象线型名

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `string` |

#### Returns

`void`

#### Inherited from

McDbDimension.linetype

___

### linetypeId

• `get` **linetypeId**(): [`McObjectId`](McObjectId.md)

#### Returns

[`McObjectId`](McObjectId.md)

#### Inherited from

McDbDimension.linetypeId

• `set` **linetypeId**(`id`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`McObjectId`](McObjectId.md) |

#### Returns

`void`

#### Inherited from

McDbDimension.linetypeId

___

### linetypeScale

• `get` **linetypeScale**(): `number`

得到对象线型比例

#### Returns

`number`

#### Inherited from

McDbDimension.linetypeScale

• `set` **linetypeScale**(`val`): `void`

设置对象线型比例

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `number` |

#### Returns

`void`

#### Inherited from

McDbDimension.linetypeScale

___

### lineweight

• `get` **lineweight**(): `number`

得到对象线重

#### Returns

`number`

#### Inherited from

McDbDimension.lineweight

• `set` **lineweight**(`val`): `void`

设置对象线重

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `number` |

#### Returns

`void`

#### Inherited from

McDbDimension.lineweight

___

### objectName

• `get` **objectName**(): `string`

获取对象名称。

#### Returns

`string`

#### Inherited from

McDbDimension.objectName

___

### oblique

• `get` **oblique**(): `number`

获取倾斜角度

#### Returns

`number`

倾斜角度

• `set` **oblique**(`val`): `void`

设置倾斜角度

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val` | `number` | 倾斜角度 |

#### Returns

`void`

___

### rotation

• `get` **rotation**(): `number`

获取旋转角度

#### Returns

`number`

旋转角度

• `set` **rotation**(`val`): `void`

设置旋转角度

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val` | `number` | 旋转角度 |

#### Returns

`void`

___

### textAttachment

• `get` **textAttachment**(): [`AttachmentPoint`](../enums/McDb.AttachmentPoint.md)

获取文本附着点

#### Returns

[`AttachmentPoint`](../enums/McDb.AttachmentPoint.md)

文本附着点

#### Inherited from

McDbDimension.textAttachment

• `set` **textAttachment**(`val`): `void`

设置文本附着点

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val` | [`AttachmentPoint`](../enums/McDb.AttachmentPoint.md) | 文本附着点 |

#### Returns

`void`

#### Inherited from

McDbDimension.textAttachment

___

### textPosition

• `get` **textPosition**(): [`McGePoint3d`](McGePoint3d.md)

获取文本位置

#### Returns

[`McGePoint3d`](McGePoint3d.md)

文本位置

#### Inherited from

McDbDimension.textPosition

• `set` **textPosition**(`pt`): `void`

设置文本位置

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pt` | [`McGePoint3d`](McGePoint3d.md) | 文本位置 |

#### Returns

`void`

#### Inherited from

McDbDimension.textPosition

___

### textRotation

• `get` **textRotation**(): `number`

获取文本旋转角度

#### Returns

`number`

文本旋转角度

#### Inherited from

McDbDimension.textRotation

• `set` **textRotation**(`val`): `void`

设置文本旋转角度

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val` | `number` | 文本旋转角度 |

#### Returns

`void`

#### Inherited from

McDbDimension.textRotation

___

### textStyle

• `get` **textStyle**(): `string`

得到对象文字样式

#### Returns

`string`

#### Inherited from

McDbDimension.textStyle

• `set` **textStyle**(`val`): `void`

设置对象文字样式

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `string` |

#### Returns

`void`

#### Inherited from

McDbDimension.textStyle

___

### textStyleId

• `get` **textStyleId**(): [`McObjectId`](McObjectId.md)

#### Returns

[`McObjectId`](McObjectId.md)

#### Inherited from

McDbDimension.textStyleId

• `set` **textStyleId**(`id`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`McObjectId`](McObjectId.md) |

#### Returns

`void`

#### Inherited from

McDbDimension.textStyleId

___

### trueColor

• `get` **trueColor**(): [`McCmColor`](McCmColor.md)

得到对象颜色

#### Returns

[`McCmColor`](McCmColor.md)

#### Inherited from

McDbDimension.trueColor

• `set` **trueColor**(`val`): `void`

设置对象颜色

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | [`McCmColor`](McCmColor.md) |

#### Returns

`void`

#### Inherited from

McDbDimension.trueColor

___

### visible

• `get` **visible**(): `boolean`

对象是否可见

#### Returns

`boolean`

#### Inherited from

McDbDimension.visible

• `set` **visible**(`val`): `void`

设置是否可见

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `boolean` |

#### Returns

`void`

#### Inherited from

McDbDimension.visible

___

### xLine1Point

• `get` **xLine1Point**(): [`McGePoint3d`](McGePoint3d.md)

获取第一条线的端点

#### Returns

[`McGePoint3d`](McGePoint3d.md)

第一条线的端点

• `set` **xLine1Point**(`pt`): `void`

设置第一条线的端点

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pt` | [`McGePoint3d`](McGePoint3d.md) | 第一条线的端点 |

#### Returns

`void`

___

### xLine2Point

• `get` **xLine2Point**(): [`McGePoint3d`](McGePoint3d.md)

获取第二条线的端点

#### Returns

[`McGePoint3d`](McGePoint3d.md)

第二条线的端点

• `set` **xLine2Point**(`pt`): `void`

设置第二条线的端点

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pt` | [`McGePoint3d`](McGePoint3d.md) | 第二条线的端点 |

#### Returns

`void`

## Methods

### GetAllText

▸ **GetAllText**(): [`McGeStringArray`](McGeStringArray.md)

得到标注对象中的所有文字内容

#### Returns

[`McGeStringArray`](McGeStringArray.md)

#### Inherited from

[McDbDimension](McDbDimension.md).[GetAllText](McDbDimension.md#getalltext)

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

[McDbDimension](McDbDimension.md).[IntersectWith](McDbDimension.md#intersectwith)

___

### clone

▸ **clone**(): ``null`` \| [`McDbObject`](McDbObject.md)

克隆对象。

#### Returns

``null`` \| [`McDbObject`](McDbObject.md)

克隆出的对象。

#### Inherited from

[McDbDimension](McDbDimension.md).[clone](McDbDimension.md#clone)

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

[McDbDimension](McDbDimension.md).[deleteXData](McDbDimension.md#deletexdata)

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

[McDbDimension](McDbDimension.md).[disableDisplay](McDbDimension.md#disabledisplay)

___

### erase

▸ **erase**(): `boolean`

删除对象。

#### Returns

`boolean`

是否删除成功。

#### Inherited from

[McDbDimension](McDbDimension.md).[erase](McDbDimension.md#erase)

___

### explode

▸ **explode**(): [`MxCADResbuf`](MxCADResbuf.md)

打碎对象，返回打后对象数据链表

#### Returns

[`MxCADResbuf`](MxCADResbuf.md)

#### Inherited from

[McDbDimension](McDbDimension.md).[explode](McDbDimension.md#explode)

___

### getAllAppName

▸ **getAllAppName**(): [`McGeStringArray`](McGeStringArray.md)

#### Returns

[`McGeStringArray`](McGeStringArray.md)

#### Inherited from

[McDbDimension](McDbDimension.md).[getAllAppName](McDbDimension.md#getallappname)

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

[McDbDimension](McDbDimension.md).[getArea](McDbDimension.md#getarea)

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

[McDbDimension](McDbDimension.md).[getBoundingBox](McDbDimension.md#getboundingbox)

___

### getDatabase

▸ **getDatabase**(): [`McDbDatabase`](McDbDatabase.md)

得到对象所在的数据库

#### Returns

[`McDbDatabase`](McDbDatabase.md)

#### Inherited from

[McDbDimension](McDbDimension.md).[getDatabase](McDbDimension.md#getdatabase)

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

#### Inherited from

[McDbDimension](McDbDimension.md).[getDimVarDouble](McDbDimension.md#getdimvardouble)

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

#### Inherited from

[McDbDimension](McDbDimension.md).[getDimVarInt](McDbDimension.md#getdimvarint)

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

#### Inherited from

[McDbDimension](McDbDimension.md).[getDimVarObjectId](McDbDimension.md#getdimvarobjectid)

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

#### Inherited from

[McDbDimension](McDbDimension.md).[getDimVarString](McDbDimension.md#getdimvarstring)

___

### getHandle

▸ **getHandle**(): `string`

得到对象句柄

#### Returns

`string`

#### Inherited from

[McDbDimension](McDbDimension.md).[getHandle](McDbDimension.md#gethandle)

___

### getImp

▸ **getImp**(): `any`

获取内部实现对象。

#### Returns

`any`

内部实现对象。

#### Inherited from

[McDbDimension](McDbDimension.md).[getImp](McDbDimension.md#getimp)

___

### getJson

▸ **getJson**(): `string`

获取 JSON 格式的字符串。

#### Returns

`string`

JSON 格式的字符串。

#### Inherited from

[McDbDimension](McDbDimension.md).[getJson](McDbDimension.md#getjson)

___

### getObjectID

▸ **getObjectID**(): [`McObjectId`](McObjectId.md)

获取对象 ID。

#### Returns

[`McObjectId`](McObjectId.md)

对象 ID。

#### Inherited from

[McDbDimension](McDbDimension.md).[getObjectID](McDbDimension.md#getobjectid)

___

### getOwnerID

▸ **getOwnerID**(): `number`

得到对象拥用者的id

#### Returns

`number`

#### Inherited from

[McDbDimension](McDbDimension.md).[getOwnerID](McDbDimension.md#getownerid)

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

[McDbDimension](McDbDimension.md).[getxData](McDbDimension.md#getxdata)

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

[McDbDimension](McDbDimension.md).[getxDataDouble](McDbDimension.md#getxdatadouble)

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

[McDbDimension](McDbDimension.md).[getxDataLong](McDbDimension.md#getxdatalong)

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

[McDbDimension](McDbDimension.md).[getxDataPoint](McDbDimension.md#getxdatapoint)

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

[McDbDimension](McDbDimension.md).[getxDataString](McDbDimension.md#getxdatastring)

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

[McDbDimension](McDbDimension.md).[highlight](McDbDimension.md#highlight)

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

[McDbDimension](McDbDimension.md).[initTempObject](McDbDimension.md#inittempobject)

___

### isErased

▸ **isErased**(): `boolean`

对象是否已经删除

#### Returns

`boolean`

#### Inherited from

[McDbDimension](McDbDimension.md).[isErased](McDbDimension.md#iserased)

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

[McDbDimension](McDbDimension.md).[isKindOf](McDbDimension.md#iskindof)

___

### isNull

▸ **isNull**(): `any`

#### Returns

`any`

#### Inherited from

[McDbDimension](McDbDimension.md).[isNull](McDbDimension.md#isnull)

___

### isUsingDefaultTextPosition

▸ **isUsingDefaultTextPosition**(): `boolean`

是否使用默认文本位置

#### Returns

`boolean`

是否使用默认文本位置

#### Inherited from

[McDbDimension](McDbDimension.md).[isUsingDefaultTextPosition](McDbDimension.md#isusingdefaulttextposition)

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

[McDbDimension](McDbDimension.md).[mirror](McDbDimension.md#mirror)

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

[McDbDimension](McDbDimension.md).[move](McDbDimension.md#move)

___

### recomputeDimBlock

▸ **recomputeDimBlock**(): `void`

重新计算标注块

#### Returns

`void`

#### Inherited from

[McDbDimension](McDbDimension.md).[recomputeDimBlock](McDbDimension.md#recomputedimblock)

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

[McDbDimension](McDbDimension.md).[rotate](McDbDimension.md#rotate)

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

[McDbDimension](McDbDimension.md).[scaleEntity](McDbDimension.md#scaleentity)

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

#### Inherited from

[McDbDimension](McDbDimension.md).[setDimVarDouble](McDbDimension.md#setdimvardouble)

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

#### Inherited from

[McDbDimension](McDbDimension.md).[setDimVarInt](McDbDimension.md#setdimvarint)

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

#### Inherited from

[McDbDimension](McDbDimension.md).[setDimVarObjectId](McDbDimension.md#setdimvarobjectid)

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

#### Inherited from

[McDbDimension](McDbDimension.md).[setDimVarString](McDbDimension.md#setdimvarstring)

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

[McDbDimension](McDbDimension.md).[setJson](McDbDimension.md#setjson)

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

[McDbDimension](McDbDimension.md).[setxData](McDbDimension.md#setxdata)

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

[McDbDimension](McDbDimension.md).[setxDataDouble](McDbDimension.md#setxdatadouble)

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

[McDbDimension](McDbDimension.md).[setxDataLong](McDbDimension.md#setxdatalong)

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

[McDbDimension](McDbDimension.md).[setxDataPoint](McDbDimension.md#setxdatapoint)

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

[McDbDimension](McDbDimension.md).[setxDataString](McDbDimension.md#setxdatastring)

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

[McDbDimension](McDbDimension.md).[transformBy](McDbDimension.md#transformby)

___

### unErase

▸ **unErase**(): `boolean`

反删除对象。

#### Returns

`boolean`

#### Inherited from

[McDbDimension](McDbDimension.md).[unErase](McDbDimension.md#unerase)

___

### useDefaultTextPosition

▸ **useDefaultTextPosition**(): `void`

使用默认文本位置

#### Returns

`void`

#### Inherited from

[McDbDimension](McDbDimension.md).[useDefaultTextPosition](McDbDimension.md#usedefaulttextposition)

___

### useSetTextPosition

▸ **useSetTextPosition**(): `void`

使用设置的文本位置

#### Returns

`void`

#### Inherited from

[McDbDimension](McDbDimension.md).[useSetTextPosition](McDbDimension.md#usesettextposition)
