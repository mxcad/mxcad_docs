[mxcad API 文档](../README.md) / MxCADSelectionSet

# Class: MxCADSelectionSet

表示一个 Rx 对象的基类。

## Hierarchy

- [`McRxObject`](McRxObject.md)

  ↳ **`MxCADSelectionSet`**

## Table of contents

### Constructors

- [constructor](MxCADSelectionSet.md#constructor)

### Properties

- [imp](MxCADSelectionSet.md#imp)
- [isSelectHighlight](MxCADSelectionSet.md#isselecthighlight)
- [isWhileSelect](MxCADSelectionSet.md#iswhileselect)
- [selectPt1](MxCADSelectionSet.md#selectpt1)
- [selectPt2](MxCADSelectionSet.md#selectpt2)

### Accessors

- [dxf0](MxCADSelectionSet.md#dxf0)
- [objectName](MxCADSelectionSet.md#objectname)

### Methods

- [allSelect](MxCADSelectionSet.md#allselect)
- [count](MxCADSelectionSet.md#count)
- [crossingSelect](MxCADSelectionSet.md#crossingselect)
- [forEach](MxCADSelectionSet.md#foreach)
- [getIds](MxCADSelectionSet.md#getids)
- [getImp](MxCADSelectionSet.md#getimp)
- [getJson](MxCADSelectionSet.md#getjson)
- [getSelectPoint](MxCADSelectionSet.md#getselectpoint)
- [initTempObject](MxCADSelectionSet.md#inittempobject)
- [isKindOf](MxCADSelectionSet.md#iskindof)
- [isNull](MxCADSelectionSet.md#isnull)
- [item](MxCADSelectionSet.md#item)
- [pointSelect](MxCADSelectionSet.md#pointselect)
- [setJson](MxCADSelectionSet.md#setjson)
- [userSelect](MxCADSelectionSet.md#userselect)

## Constructors

### constructor

• **new MxCADSelectionSet**()

#### Overrides

[McRxObject](McRxObject.md).[constructor](McRxObject.md#constructor)

## Properties

### imp

• `Protected` **imp**: `any` = `0`

内部实现对象。

#### Inherited from

[McRxObject](McRxObject.md).[imp](McRxObject.md#imp)

___

### isSelectHighlight

• **isSelectHighlight**: `boolean` = `true`

___

### isWhileSelect

• **isWhileSelect**: `boolean` = `true`

___

### selectPt1

• `Private` **selectPt1**: [`McGePoint3d`](McGePoint3d.md)

___

### selectPt2

• `Private` **selectPt2**: [`McGePoint3d`](McGePoint3d.md)

## Accessors

### dxf0

• `get` **dxf0**(): `string`

获取 DXF 代码 0 的值。

#### Returns

`string`

#### Inherited from

McRxObject.dxf0

___

### objectName

• `get` **objectName**(): `string`

获取对象名称。

#### Returns

`string`

#### Inherited from

McRxObject.objectName

## Methods

### allSelect

▸ **allSelect**(`filter?`): `number`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `filter` | ``null`` \| [`MxCADResbuf`](MxCADResbuf.md) | `null` |

#### Returns

`number`

___

### count

▸ **count**(): `number`

#### Returns

`number`

___

### crossingSelect

▸ **crossingSelect**(`dX1`, `dY1`, `dX2`, `dY2`, `filter?`): `number`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `dX1` | `number` | `undefined` |
| `dY1` | `number` | `undefined` |
| `dX2` | `number` | `undefined` |
| `dY2` | `number` | `undefined` |
| `filter` | ``null`` \| [`MxCADResbuf`](MxCADResbuf.md) | `null` |

#### Returns

`number`

___

### forEach

▸ **forEach**(`call`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `call` | (`val`: [`McObjectId`](McObjectId.md)) => `void` |

#### Returns

`void`

___

### getIds

▸ **getIds**(): [`McObjectId`](McObjectId.md)[]

#### Returns

[`McObjectId`](McObjectId.md)[]

___

### getImp

▸ **getImp**(): `any`

获取内部实现对象。

#### Returns

`any`

内部实现对象。

#### Inherited from

[McRxObject](McRxObject.md).[getImp](McRxObject.md#getimp)

___

### getJson

▸ **getJson**(): `string`

获取 JSON 格式的字符串。

#### Returns

`string`

JSON 格式的字符串。

#### Inherited from

[McRxObject](McRxObject.md).[getJson](McRxObject.md#getjson)

___

### getSelectPoint

▸ **getSelectPoint**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `pt1` | [`McGePoint3d`](McGePoint3d.md) |
| `pt2` | [`McGePoint3d`](McGePoint3d.md) |

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

[McRxObject](McRxObject.md).[initTempObject](McRxObject.md#inittempobject)

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

[McRxObject](McRxObject.md).[isKindOf](McRxObject.md#iskindof)

___

### isNull

▸ **isNull**(): `any`

#### Returns

`any`

#### Inherited from

[McRxObject](McRxObject.md).[isNull](McRxObject.md#isnull)

___

### item

▸ **item**(`lItem`): [`McObjectId`](McObjectId.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `lItem` | `number` |

#### Returns

[`McObjectId`](McObjectId.md)

___

### pointSelect

▸ **pointSelect**(`dX`, `dY`, `filter?`, `dTol?`): `number`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `dX` | `number` | `undefined` |
| `dY` | `number` | `undefined` |
| `filter` | ``null`` \| [`MxCADResbuf`](MxCADResbuf.md) | `null` |
| `dTol` | `number` | `-1` |

#### Returns

`number`

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

[McRxObject](McRxObject.md).[setJson](McRxObject.md#setjson)

___

### userSelect

▸ **userSelect**(`strPrompt?`, `filter?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`boolean`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `strPrompt?` | `string` | `undefined` |
| `filter` | ``null`` \| [`MxCADResbuf`](MxCADResbuf.md) | `null` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`boolean`\>
