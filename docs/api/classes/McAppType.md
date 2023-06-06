[mxcad API 文档](../README.md) / McAppType

# Class: McAppType

McAppType 类，提供了 MxCAD 的一些基本操作。

## Table of contents

### Constructors

- [constructor](McAppType.md#constructor)

### Properties

- [imp](McAppType.md#imp)

### Methods

- [CreateCloneObject](McAppType.md#createcloneobject)
- [CreateMxCAD](McAppType.md#createmxcad)
- [DestroyObject](McAppType.md#destroyobject)
- [GetCurrentMxCAD](McAppType.md#getcurrentmxcad)
- [ObjectIdToObject](McAppType.md#objectidtoobject)
- [getImp](McAppType.md#getimp)
- [getLastCallResult](McAppType.md#getlastcallresult)
- [init](McAppType.md#init)
- [mcedRGB2Index](McAppType.md#mcedrgb2index)

## Constructors

### constructor

• **new McAppType**()

## Properties

### imp

• `Private` **imp**: `any`

## Methods

### CreateCloneObject

▸ **CreateCloneObject**(`clonobjImp`): [`McDbObject`](McDbObject.md)

创建克隆对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `clonobjImp` | `any` | 被克隆的对象。 |

#### Returns

[`McDbObject`](McDbObject.md)

返回创建的 McDbObject 对象。

___

### CreateMxCAD

▸ **CreateMxCAD**(`width`, `height`, `canvasId`, `isWebgl2`, `mxObjectId`): [`McObject`](McObject.md)

创建 MxDraw 对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `width` | `number` | MxDraw 对象的宽度。 |
| `height` | `number` | MxDraw 对象的高度。 |
| `canvasId` | `string` | MxDraw 对象所在的 canvas 的 id。 |
| `isWebgl2` | `boolean` | 是否使用 webgl2。 |
| `mxObjectId` | `number` | MxDraw 对象的 id。 |

#### Returns

[`McObject`](McObject.md)

返回创建的 McObject 对象。

___

### DestroyObject

▸ **DestroyObject**(`pObject`): `void`

销毁对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pObject` | `McRxObjectImp` | 要销毁的对象。 |

#### Returns

`void`

___

### GetCurrentMxCAD

▸ **GetCurrentMxCAD**(): [`McObject`](McObject.md)

获取当前的 MxDraw 对象。

#### Returns

[`McObject`](McObject.md)

返回当前的 McObject 对象。

___

### ObjectIdToObject

▸ **ObjectIdToObject**(`lIdIndex`): ``null`` \| [`McDbObject`](McDbObject.md)

将对象 id 转换为 McDbObject 对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `lIdIndex` | `number` | 对象的 id。 |

#### Returns

``null`` \| [`McDbObject`](McDbObject.md)

返回转换后的 McDbObject 对象，如果转换失败，则返回 null。

___

### getImp

▸ **getImp**(): `any`

获取 imp 对象。

#### Returns

`any`

返回 imp 对象。

___

### getLastCallResult

▸ **getLastCallResult**(): `number`

获取最后一次调用的结果。

#### Returns

`number`

返回最后一次调用的结果。

___

### init

▸ **init**(`imp`): `void`

初始化 McAppType 对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `imp` | `any` | 传入的 imp 对象。 |

#### Returns

`void`

___

### mcedRGB2Index

▸ **mcedRGB2Index**(`red`, `green`, `blue`, `bAutoNearest?`): `number`

将 RGB 值转换为索引。

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `red` | `number` | `undefined` | 红色值。 |
| `green` | `number` | `undefined` | 绿色值。 |
| `blue` | `number` | `undefined` | 蓝色值。 |
| `bAutoNearest` | `boolean` | `true` | 是否自动获取最近的颜色值。 |

#### Returns

`number`

返回转换后的索引值。
