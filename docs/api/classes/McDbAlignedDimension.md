[mxcad API 文档](../README.md) / McDbAlignedDimension

# Class: McDbAlignedDimension

对齐标注尺寸类

## Hierarchy

- [`McDbDimension`](McDbDimension.md)

  ↳ **`McDbAlignedDimension`**

## Table of contents

### Constructors

- [constructor](McDbAlignedDimension.md#constructor)

### Properties

- [imp](McDbAlignedDimension.md#imp)

### Accessors

- [colorIndex](McDbAlignedDimension.md#colorindex)
- [dimLinePoint](McDbAlignedDimension.md#dimlinepoint)
- [dimensionStyle](McDbAlignedDimension.md#dimensionstyle)
- [dimensionText](McDbAlignedDimension.md#dimensiontext)
- [dxf0](McDbAlignedDimension.md#dxf0)
- [elevation](McDbAlignedDimension.md#elevation)
- [horizontalRotation](McDbAlignedDimension.md#horizontalrotation)
- [layer](McDbAlignedDimension.md#layer)
- [layerId](McDbAlignedDimension.md#layerid)
- [linetype](McDbAlignedDimension.md#linetype)
- [linetypeId](McDbAlignedDimension.md#linetypeid)
- [linetypeScale](McDbAlignedDimension.md#linetypescale)
- [lineweight](McDbAlignedDimension.md#lineweight)
- [objectName](McDbAlignedDimension.md#objectname)
- [oblique](McDbAlignedDimension.md#oblique)
- [textAttachment](McDbAlignedDimension.md#textattachment)
- [textPosition](McDbAlignedDimension.md#textposition)
- [textRotation](McDbAlignedDimension.md#textrotation)
- [textStyle](McDbAlignedDimension.md#textstyle)
- [textStyleId](McDbAlignedDimension.md#textstyleid)
- [trueColor](McDbAlignedDimension.md#truecolor)
- [visible](McDbAlignedDimension.md#visible)
- [xLine1Point](McDbAlignedDimension.md#xline1point)
- [xLine2Point](McDbAlignedDimension.md#xline2point)

### Methods

- [GetAllText](McDbAlignedDimension.md#getalltext)
- [IntersectWith](McDbAlignedDimension.md#intersectwith)
- [clone](McDbAlignedDimension.md#clone)
- [deleteXData](McDbAlignedDimension.md#deletexdata)
- [disableDisplay](McDbAlignedDimension.md#disabledisplay)
- [erase](McDbAlignedDimension.md#erase)
- [explode](McDbAlignedDimension.md#explode)
- [getAllAppName](McDbAlignedDimension.md#getallappname)
- [getArea](McDbAlignedDimension.md#getarea)
- [getBoundingBox](McDbAlignedDimension.md#getboundingbox)
- [getDatabase](McDbAlignedDimension.md#getdatabase)
- [getDimVarDouble](McDbAlignedDimension.md#getdimvardouble)
- [getDimVarInt](McDbAlignedDimension.md#getdimvarint)
- [getDimVarObjectId](McDbAlignedDimension.md#getdimvarobjectid)
- [getDimVarString](McDbAlignedDimension.md#getdimvarstring)
- [getHandle](McDbAlignedDimension.md#gethandle)
- [getImp](McDbAlignedDimension.md#getimp)
- [getJson](McDbAlignedDimension.md#getjson)
- [getObjectID](McDbAlignedDimension.md#getobjectid)
- [getOwnerID](McDbAlignedDimension.md#getownerid)
- [getxData](McDbAlignedDimension.md#getxdata)
- [getxDataDouble](McDbAlignedDimension.md#getxdatadouble)
- [getxDataLong](McDbAlignedDimension.md#getxdatalong)
- [getxDataPoint](McDbAlignedDimension.md#getxdatapoint)
- [getxDataString](McDbAlignedDimension.md#getxdatastring)
- [highlight](McDbAlignedDimension.md#highlight)
- [initTempObject](McDbAlignedDimension.md#inittempobject)
- [isErased](McDbAlignedDimension.md#iserased)
- [isKindOf](McDbAlignedDimension.md#iskindof)
- [isNull](McDbAlignedDimension.md#isnull)
- [isUsingDefaultTextPosition](McDbAlignedDimension.md#isusingdefaulttextposition)
- [mirror](McDbAlignedDimension.md#mirror)
- [move](McDbAlignedDimension.md#move)
- [recomputeDimBlock](McDbAlignedDimension.md#recomputedimblock)
- [rotate](McDbAlignedDimension.md#rotate)
- [scaleEntity](McDbAlignedDimension.md#scaleentity)
- [setDimVarDouble](McDbAlignedDimension.md#setdimvardouble)
- [setDimVarInt](McDbAlignedDimension.md#setdimvarint)
- [setDimVarObjectId](McDbAlignedDimension.md#setdimvarobjectid)
- [setDimVarString](McDbAlignedDimension.md#setdimvarstring)
- [setJson](McDbAlignedDimension.md#setjson)
- [setxData](McDbAlignedDimension.md#setxdata)
- [setxDataDouble](McDbAlignedDimension.md#setxdatadouble)
- [setxDataLong](McDbAlignedDimension.md#setxdatalong)
- [setxDataPoint](McDbAlignedDimension.md#setxdatapoint)
- [setxDataString](McDbAlignedDimension.md#setxdatastring)
- [transformBy](McDbAlignedDimension.md#transformby)
- [unErase](McDbAlignedDimension.md#unerase)
- [useDefaultTextPosition](McDbAlignedDimension.md#usedefaulttextposition)
- [useSetTextPosition](McDbAlignedDimension.md#usesettextposition)

## Constructors

### constructor

• **new McDbAlignedDimension**(`imp?`)

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
