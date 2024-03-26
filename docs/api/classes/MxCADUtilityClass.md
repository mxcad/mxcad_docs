[mxcad API 文档](../README.md) / MxCADUtilityClass

# Class: MxCADUtilityClass

MxCADUtilityClass 类提供了一系列与绘图相关的工具方法

## Table of contents

### Constructors

- [constructor](MxCADUtilityClass.md#constructor)

### Properties

- [imp](MxCADUtilityClass.md#imp)

### Methods

- [builderHatchFromPoint](MxCADUtilityClass.md#builderhatchfrompoint)
- [calcBulge](MxCADUtilityClass.md#calcbulge)
- [eraseObject](MxCADUtilityClass.md#eraseobject)
- [findEntAtPoint](MxCADUtilityClass.md#findentatpoint)
- [getCorner](MxCADUtilityClass.md#getcorner)
- [getCurrentSelect](MxCADUtilityClass.md#getcurrentselect)
- [getMcDbEntitysBoundingBox](MxCADUtilityClass.md#getmcdbentitysboundingbox)
- [highlightEntity](MxCADUtilityClass.md#highlightentity)
- [init](MxCADUtilityClass.md#init)
- [selectEnt](MxCADUtilityClass.md#selectent)
- [userSelect](MxCADUtilityClass.md#userselect)

## Constructors

### constructor

• **new MxCADUtilityClass**()

## Properties

### imp

• `Private` **imp**: `any`

## Methods

### builderHatchFromPoint

▸ **builderHatchFromPoint**(`pt`): ``null`` \| [`McDbHatch`](McDbHatch.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `pt` | [`McGePoint3d`](McGePoint3d.md) |

#### Returns

``null`` \| [`McDbHatch`](McDbHatch.md)

___

### calcBulge

▸ **calcBulge**(`pt1`, `pt2`, `pt3`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pt1` | [`McGePoint3d`](McGePoint3d.md) |
| `pt2` | [`McGePoint3d`](McGePoint3d.md) |
| `pt3` | [`McGePoint3d`](McGePoint3d.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `ret` | `boolean` |
| `val` | `number` |

___

### eraseObject

▸ **eraseObject**(`lId`, `isErase?`): `boolean`

eraseObject 方法用于删除指定的图形对象

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `lId` | `number` | `undefined` | 需要删除的图形对象的 ID |
| `isErase` | `boolean` | `true` | - |

#### Returns

`boolean`

返回一个布尔值，表示是否删除成功

___

### findEntAtPoint

▸ **findEntAtPoint**(`dX`, `dY`, `dZ`, `dSearhRange?`, `filter?`): [`McObjectId`](McObjectId.md)

findEntAtPoint 方法用于在指定坐标点附近查找图形对象

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `dX` | `number` | `undefined` | 坐标点的 X 坐标值 |
| `dY` | `number` | `undefined` | 坐标点的 Y 坐标值 |
| `dZ` | `number` | `undefined` | 坐标点的 Z 坐标值 |
| `dSearhRange` | `number` | `-1` | 查找范围，默认为 -1（表示查找整个绘图区域） |
| `filter` | ``null`` \| [`MxCADResbuf`](MxCADResbuf.md) | `null` | 过滤器，用于过滤查找到的图形对象，默认为 null（表示不进行过滤） |

#### Returns

[`McObjectId`](McObjectId.md)

返回查找到的图形对象的 ID

___

### getCorner

▸ **getCorner**(`strPrompt?`, `pt1?`, `detailedResult?`, `drawSelectCroner?`, `isDisableAllTrace?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<``null`` \| { `pt1`: [`McGePoint3d`](McGePoint3d.md) ; `pt2`: [`McGePoint3d`](McGePoint3d.md)  }\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `strPrompt?` | `string` | `undefined` |
| `pt1?` | [`McGePoint3d`](McGePoint3d.md) | `undefined` |
| `detailedResult?` | [`Function`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function ) | `undefined` |
| `drawSelectCroner` | `boolean` | `false` |
| `isDisableAllTrace` | `boolean` | `false` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<``null`` \| { `pt1`: [`McGePoint3d`](McGePoint3d.md) ; `pt2`: [`McGePoint3d`](McGePoint3d.md)  }\>

___

### getCurrentSelect

▸ **getCurrentSelect**(`filter?`): [`McObjectId`](McObjectId.md)[]

得到当前选中的对象。

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `filter` | ``null`` \| [`MxCADResbuf`](MxCADResbuf.md) | `null` |

#### Returns

[`McObjectId`](McObjectId.md)[]

___

### getMcDbEntitysBoundingBox

▸ **getMcDbEntitysBoundingBox**(`aryId`): `undefined` \| { `maxPt`: [`McGePoint3d`](McGePoint3d.md) ; `minPt`: [`McGePoint3d`](McGePoint3d.md)  }

#### Parameters

| Name | Type |
| :------ | :------ |
| `aryId` | [`McObjectId`](McObjectId.md)[] |

#### Returns

`undefined` \| { `maxPt`: [`McGePoint3d`](McGePoint3d.md) ; `minPt`: [`McGePoint3d`](McGePoint3d.md)  }

___

### highlightEntity

▸ **highlightEntity**(`lId`, `isHighlight?`): `any`

highlightEntity 方法用于高亮指定的图形对象

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `lId` | `number` | `undefined` | 需要高亮的图形对象的 ID |
| `isHighlight` | `boolean` | `true` | 是否需要高亮，默认为 true |

#### Returns

`any`

___

### init

▸ **init**(): `void`

#### Returns

`void`

___

### selectEnt

▸ **selectEnt**(`strPrompt?`, `filter?`, `isSelectMxDraw?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`McObjectId`](McObjectId.md)[]\>

selectEnt 方法用于在指定位置选择图形对象

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `strPrompt?` | `string` | `undefined` | 选择时的提示信息，默认为 null（表示不显示提示信息） |
| `filter` | ``null`` \| [`MxCADResbuf`](MxCADResbuf.md) | `null` | 过滤器，用于过滤选择到的图形对象，默认为 null（表示不进行过滤） |
| `isSelectMxDraw` | `boolean` | `true` | - |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`McObjectId`](McObjectId.md)[]\>

返回一个 Promise，其中包含选择到的图形对象的 ID 数组

___

### userSelect

▸ **userSelect**(`strPrompt?`, `filter?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`McObjectId`](McObjectId.md)[]\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `strPrompt?` | `string` | `undefined` |
| `filter` | ``null`` \| [`MxCADResbuf`](MxCADResbuf.md) | `null` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`McObjectId`](McObjectId.md)[]\>
