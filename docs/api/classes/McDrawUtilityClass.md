[mxcad API 文档](../README.md) / McDrawUtilityClass

# Class: McDrawUtilityClass

McDrawUtilityClass 类提供了一系列与绘图相关的工具方法

## Table of contents

### Constructors

- [constructor](McDrawUtilityClass.md#constructor)

### Properties

- [imp](McDrawUtilityClass.md#imp)

### Methods

- [eraseEntity](McDrawUtilityClass.md#eraseentity)
- [findEntAtPoint](McDrawUtilityClass.md#findentatpoint)
- [highlightEntity](McDrawUtilityClass.md#highlightentity)
- [init](McDrawUtilityClass.md#init)
- [selectEnt](McDrawUtilityClass.md#selectent)

## Constructors

### constructor

• **new McDrawUtilityClass**()

## Properties

### imp

• `Private` **imp**: `any`

## Methods

### eraseEntity

▸ **eraseEntity**(`lId`): `boolean`

eraseEntity 方法用于删除指定的图形对象

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `lId` | `number` | 需要删除的图形对象的 ID |

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
| `filter` | ``null`` \| [`McDrawResbuf`](McDrawResbuf.md) | `null` | 过滤器，用于过滤查找到的图形对象，默认为 null（表示不进行过滤） |

#### Returns

[`McObjectId`](McObjectId.md)

返回查找到的图形对象的 ID

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

▸ `Private` **init**(): `void`

#### Returns

`void`

___

### selectEnt

▸ **selectEnt**(`strPrompt?`, `filter?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`McObjectId`](McObjectId.md)[]\>

selectEnt 方法用于在指定位置选择图形对象

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `strPrompt?` | `string` | `undefined` | 选择时的提示信息，默认为 null（表示不显示提示信息） |
| `filter` | ``null`` \| [`McDrawResbuf`](McDrawResbuf.md) | `null` | 过滤器，用于过滤选择到的图形对象，默认为 null（表示不进行过滤） |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`McObjectId`](McObjectId.md)[]\>

返回一个 Promise，其中包含选择到的图形对象的 ID 数组
