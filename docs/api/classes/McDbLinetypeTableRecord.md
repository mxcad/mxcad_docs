[mxcad API 文档](../README.md) / McDbLinetypeTableRecord

# Class: McDbLinetypeTableRecord

表示一个线形表记录对象。

## Hierarchy

- [`McDbObject`](McDbObject.md)

  ↳ **`McDbLinetypeTableRecord`**

## Table of contents

### Constructors

- [constructor](McDbLinetypeTableRecord.md#constructor)

### Properties

- [imp](McDbLinetypeTableRecord.md#imp)

### Accessors

- [comments](McDbLinetypeTableRecord.md#comments)
- [dxf0](McDbLinetypeTableRecord.md#dxf0)
- [isScaledToFit](McDbLinetypeTableRecord.md#isscaledtofit)
- [name](McDbLinetypeTableRecord.md#name)
- [numDashes](McDbLinetypeTableRecord.md#numdashes)
- [objectName](McDbLinetypeTableRecord.md#objectname)

### Methods

- [clone](McDbLinetypeTableRecord.md#clone)
- [dashLengthAt](McDbLinetypeTableRecord.md#dashlengthat)
- [erase](McDbLinetypeTableRecord.md#erase)
- [getDatabase](McDbLinetypeTableRecord.md#getdatabase)
- [getHandle](McDbLinetypeTableRecord.md#gethandle)
- [getImp](McDbLinetypeTableRecord.md#getimp)
- [getJson](McDbLinetypeTableRecord.md#getjson)
- [getObjectID](McDbLinetypeTableRecord.md#getobjectid)
- [getOwnerID](McDbLinetypeTableRecord.md#getownerid)
- [initTempObject](McDbLinetypeTableRecord.md#inittempobject)
- [isErased](McDbLinetypeTableRecord.md#iserased)
- [isKindOf](McDbLinetypeTableRecord.md#iskindof)
- [isNull](McDbLinetypeTableRecord.md#isnull)
- [setDashLengthAt](McDbLinetypeTableRecord.md#setdashlengthat)
- [setJson](McDbLinetypeTableRecord.md#setjson)
- [setShapeIsUcsOrientedAt](McDbLinetypeTableRecord.md#setshapeisucsorientedat)
- [setShapeNumberAt](McDbLinetypeTableRecord.md#setshapenumberat)
- [setShapeOffsetAt](McDbLinetypeTableRecord.md#setshapeoffsetat)
- [setShapeRotationAt](McDbLinetypeTableRecord.md#setshaperotationat)
- [setShapeScaleAt](McDbLinetypeTableRecord.md#setshapescaleat)
- [setShapeStyleAt](McDbLinetypeTableRecord.md#setshapestyleat)
- [setTextAt](McDbLinetypeTableRecord.md#settextat)
- [shapeIsUcsOrientedAt](McDbLinetypeTableRecord.md#shapeisucsorientedat)
- [shapeNumberAt](McDbLinetypeTableRecord.md#shapenumberat)
- [shapeOffsetAt](McDbLinetypeTableRecord.md#shapeoffsetat)
- [shapeRotationAt](McDbLinetypeTableRecord.md#shaperotationat)
- [shapeScaleAt](McDbLinetypeTableRecord.md#shapescaleat)
- [shapeStyleAt](McDbLinetypeTableRecord.md#shapestyleat)
- [textAt](McDbLinetypeTableRecord.md#textat)
- [unErase](McDbLinetypeTableRecord.md#unerase)

## Constructors

### constructor

• **new McDbLinetypeTableRecord**(`imp?`)

构造函数。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `imp?` | `any` | 内部实现对象。 |

#### Overrides

[McDbObject](McDbObject.md).[constructor](McDbObject.md#constructor)

## Properties

### imp

• `Protected` **imp**: `any` = `0`

内部实现对象。

#### Inherited from

[McDbObject](McDbObject.md).[imp](McDbObject.md#imp)

## Accessors

### comments

• `get` **comments**(): `string`

#### Returns

`string`

• `set` **comments**(`val`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `string` |

#### Returns

`void`

___

### dxf0

• `get` **dxf0**(): `string`

获取 DXF 代码 0 的值。

#### Returns

`string`

#### Inherited from

McDbObject.dxf0

___

### isScaledToFit

• `get` **isScaledToFit**(): `boolean`

#### Returns

`boolean`

• `set` **isScaledToFit**(`scaledToFit`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `scaledToFit` | `boolean` |

#### Returns

`void`

___

### name

• `get` **name**(): `string`

获取或设置名称。

#### Returns

`string`

• `set` **name**(`val`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `string` |

#### Returns

`void`

___

### numDashes

• `get` **numDashes**(): `number`

#### Returns

`number`

• `set` **numDashes**(`val`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `number` |

#### Returns

`void`

___

### objectName

• `get` **objectName**(): `string`

获取对象名称。

#### Returns

`string`

#### Inherited from

McDbObject.objectName

## Methods

### clone

▸ **clone**(): ``null`` \| [`McDbObject`](McDbObject.md)

克隆对象。

#### Returns

``null`` \| [`McDbObject`](McDbObject.md)

克隆出的对象。

#### Inherited from

[McDbObject](McDbObject.md).[clone](McDbObject.md#clone)

___

### dashLengthAt

▸ **dashLengthAt**(`index`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

`number`

___

### erase

▸ **erase**(): `boolean`

删除对象。

#### Returns

`boolean`

是否删除成功。

#### Inherited from

[McDbObject](McDbObject.md).[erase](McDbObject.md#erase)

___

### getDatabase

▸ **getDatabase**(): [`McDbDatabase`](McDbDatabase.md)

得到对象所在的数据库

#### Returns

[`McDbDatabase`](McDbDatabase.md)

#### Inherited from

[McDbObject](McDbObject.md).[getDatabase](McDbObject.md#getdatabase)

___

### getHandle

▸ **getHandle**(): `string`

得到对象句柄

#### Returns

`string`

#### Inherited from

[McDbObject](McDbObject.md).[getHandle](McDbObject.md#gethandle)

___

### getImp

▸ **getImp**(): `any`

获取内部实现对象。

#### Returns

`any`

内部实现对象。

#### Inherited from

[McDbObject](McDbObject.md).[getImp](McDbObject.md#getimp)

___

### getJson

▸ **getJson**(): `string`

获取 JSON 格式的字符串。

#### Returns

`string`

JSON 格式的字符串。

#### Inherited from

[McDbObject](McDbObject.md).[getJson](McDbObject.md#getjson)

___

### getObjectID

▸ **getObjectID**(): [`McObjectId`](McObjectId.md)

获取对象 ID。

#### Returns

[`McObjectId`](McObjectId.md)

对象 ID。

#### Inherited from

[McDbObject](McDbObject.md).[getObjectID](McDbObject.md#getobjectid)

___

### getOwnerID

▸ **getOwnerID**(): `number`

得到对象拥用者的id

#### Returns

`number`

#### Inherited from

[McDbObject](McDbObject.md).[getOwnerID](McDbObject.md#getownerid)

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

[McDbObject](McDbObject.md).[initTempObject](McDbObject.md#inittempobject)

___

### isErased

▸ **isErased**(): `boolean`

对象是否已经删除

#### Returns

`boolean`

#### Inherited from

[McDbObject](McDbObject.md).[isErased](McDbObject.md#iserased)

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

[McDbObject](McDbObject.md).[isKindOf](McDbObject.md#iskindof)

___

### isNull

▸ **isNull**(): `any`

#### Returns

`any`

#### Inherited from

[McDbObject](McDbObject.md).[isNull](McDbObject.md#isnull)

___

### setDashLengthAt

▸ **setDashLengthAt**(`index`, `value`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `value` | `number` |

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

[McDbObject](McDbObject.md).[setJson](McDbObject.md#setjson)

___

### setShapeIsUcsOrientedAt

▸ **setShapeIsUcsOrientedAt**(`index`, `isUcsOriented`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `isUcsOriented` | `boolean` |

#### Returns

`boolean`

___

### setShapeNumberAt

▸ **setShapeNumberAt**(`index`, `shapeNumber`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `shapeNumber` | `number` |

#### Returns

`boolean`

___

### setShapeOffsetAt

▸ **setShapeOffsetAt**(`index`, `offset`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `offset` | [`McGeVector3d`](McGeVector3d.md) |

#### Returns

`boolean`

___

### setShapeRotationAt

▸ **setShapeRotationAt**(`index`, `rotation`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `rotation` | `number` |

#### Returns

`boolean`

___

### setShapeScaleAt

▸ **setShapeScaleAt**(`index`, `scale`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `scale` | `number` |

#### Returns

`boolean`

___

### setShapeStyleAt

▸ **setShapeStyleAt**(`index`, `value`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `value` | `number` |

#### Returns

`boolean`

___

### setTextAt

▸ **setTextAt**(`index`, `text`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `text` | `string` |

#### Returns

`boolean`

___

### shapeIsUcsOrientedAt

▸ **shapeIsUcsOrientedAt**(`index`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

`boolean`

___

### shapeNumberAt

▸ **shapeNumberAt**(`index`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

`number`

___

### shapeOffsetAt

▸ **shapeOffsetAt**(`index`): [`McGeVector3d`](McGeVector3d.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

[`McGeVector3d`](McGeVector3d.md)

___

### shapeRotationAt

▸ **shapeRotationAt**(`index`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

`number`

___

### shapeScaleAt

▸ **shapeScaleAt**(`index`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

`number`

___

### shapeStyleAt

▸ **shapeStyleAt**(`index`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

`number`

___

### textAt

▸ **textAt**(`index`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

`string`

___

### unErase

▸ **unErase**(): `boolean`

反删除对象。

#### Returns

`boolean`

#### Inherited from

[McDbObject](McDbObject.md).[unErase](McDbObject.md#unerase)
