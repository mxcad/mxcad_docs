[mxcad API 文档](../README.md) / MxCADUiPrEntity

# Class: MxCADUiPrEntity

## Hierarchy

- [`MxCADUiPrBase`](MxCADUiPrBase.md)

  ↳ **`MxCADUiPrEntity`**

## Table of contents

### Constructors

- [constructor](MxCADUiPrEntity.md#constructor)

### Properties

- [filter](MxCADUiPrEntity.md#filter)
- [id](MxCADUiPrEntity.md#id)
- [imp](MxCADUiPrEntity.md#imp)
- [mxobj](MxCADUiPrEntity.md#mxobj)

### Methods

- [cad2doc1](MxCADUiPrEntity.md#cad2doc1)
- [cad2doc2](MxCADUiPrEntity.md#cad2doc2)
- [clearLastInputPoint](MxCADUiPrEntity.md#clearlastinputpoint)
- [disableAllTrace](MxCADUiPrEntity.md#disablealltrace)
- [doc2cad1](MxCADUiPrEntity.md#doc2cad1)
- [doc2cad2](MxCADUiPrEntity.md#doc2cad2)
- [drawReserve](MxCADUiPrEntity.md#drawreserve)
- [getCursorType](MxCADUiPrEntity.md#getcursortype)
- [getDetailedResult](MxCADUiPrEntity.md#getdetailedresult)
- [getDocPickPoint](MxCADUiPrEntity.md#getdocpickpoint)
- [getDynamicInputType](MxCADUiPrEntity.md#getdynamicinputtype)
- [getFilter](MxCADUiPrEntity.md#getfilter)
- [getInputToucheType](MxCADUiPrEntity.md#getinputtouchetype)
- [getStatus](MxCADUiPrEntity.md#getstatus)
- [go](MxCADUiPrEntity.md#go)
- [isDisableDynInput](MxCADUiPrEntity.md#isdisabledyninput)
- [isDisableDynamicTrace](MxCADUiPrEntity.md#isdisabledynamictrace)
- [isDisableGridTrace](MxCADUiPrEntity.md#isdisablegridtrace)
- [isDisableOrthoTrace](MxCADUiPrEntity.md#isdisableorthotrace)
- [isDisableOsnap](MxCADUiPrEntity.md#isdisableosnap)
- [isDisablePolarAxisTrace](MxCADUiPrEntity.md#isdisablepolaraxistrace)
- [isKeyWordPicked](MxCADUiPrEntity.md#iskeywordpicked)
- [keyWordPicked](MxCADUiPrEntity.md#keywordpicked)
- [keyWords](MxCADUiPrEntity.md#keywords)
- [message](MxCADUiPrEntity.md#message)
- [pickPoint](MxCADUiPrEntity.md#pickpoint)
- [setCursorType](MxCADUiPrEntity.md#setcursortype)
- [setDisableDynInput](MxCADUiPrEntity.md#setdisabledyninput)
- [setDisableDynamicTrace](MxCADUiPrEntity.md#setdisabledynamictrace)
- [setDisableGridTrace](MxCADUiPrEntity.md#setdisablegridtrace)
- [setDisableOrthoTrace](MxCADUiPrEntity.md#setdisableorthotrace)
- [setDisableOsnap](MxCADUiPrEntity.md#setdisableosnap)
- [setDisablePolarAxisTrace](MxCADUiPrEntity.md#setdisablepolaraxistrace)
- [setDynamicInputType](MxCADUiPrEntity.md#setdynamicinputtype)
- [setFilter](MxCADUiPrEntity.md#setfilter)
- [setInputToucheType](MxCADUiPrEntity.md#setinputtouchetype)
- [setKeyWords](MxCADUiPrEntity.md#setkeywords)
- [setLastInputPoint](MxCADUiPrEntity.md#setlastinputpoint)
- [setMessage](MxCADUiPrEntity.md#setmessage)
- [setUserDraw](MxCADUiPrEntity.md#setuserdraw)
- [setUserInputControls](MxCADUiPrEntity.md#setuserinputcontrols)
- [userInputControls](MxCADUiPrEntity.md#userinputcontrols)
- [value](MxCADUiPrEntity.md#value)

## Constructors

### constructor

• **new MxCADUiPrEntity**()

#### Overrides

[MxCADUiPrBase](MxCADUiPrBase.md).[constructor](MxCADUiPrBase.md#constructor)

## Properties

### filter

• `Private` `Optional` **filter**: [`MxCADResbuf`](MxCADResbuf.md)

___

### id

• `Private` **id**: [`McObjectId`](McObjectId.md)

___

### imp

• `Protected` **imp**: `any`

#### Inherited from

[MxCADUiPrBase](MxCADUiPrBase.md).[imp](MxCADUiPrBase.md#imp)

___

### mxobj

• `Protected` **mxobj**: `MxDrawObject`

#### Inherited from

[MxCADUiPrBase](MxCADUiPrBase.md).[mxobj](MxCADUiPrBase.md#mxobj)

## Methods

### cad2doc1

▸ `Protected` **cad2doc1**(`pt`): `Vector3`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pt` | [`McGePoint3d`](McGePoint3d.md) |

#### Returns

`Vector3`

#### Inherited from

[MxCADUiPrBase](MxCADUiPrBase.md).[cad2doc1](MxCADUiPrBase.md#cad2doc1)

___

### cad2doc2

▸ `Protected` **cad2doc2**(`x`, `y`, `z`): `Vector3`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `z` | `number` |

#### Returns

`Vector3`

#### Inherited from

[MxCADUiPrBase](MxCADUiPrBase.md).[cad2doc2](MxCADUiPrBase.md#cad2doc2)

___

### clearLastInputPoint

▸ **clearLastInputPoint**(): `void`

清除上一次的输入点数据。

#### Returns

`void`

选择的关键字

#### Inherited from

[MxCADUiPrBase](MxCADUiPrBase.md).[clearLastInputPoint](MxCADUiPrBase.md#clearlastinputpoint)

___

### disableAllTrace

▸ **disableAllTrace**(`isDisable?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `isDisable` | `boolean` | `true` |

#### Returns

`void`

#### Inherited from

[MxCADUiPrBase](MxCADUiPrBase.md).[disableAllTrace](MxCADUiPrBase.md#disablealltrace)

___

### doc2cad1

▸ `Protected` **doc2cad1**(`pt`): [`McGePoint3d`](McGePoint3d.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `pt` | `Vector3` |

#### Returns

[`McGePoint3d`](McGePoint3d.md)

#### Inherited from

[MxCADUiPrBase](MxCADUiPrBase.md).[doc2cad1](MxCADUiPrBase.md#doc2cad1)

___

### doc2cad2

▸ `Protected` **doc2cad2**(`x`, `y`, `z`): [`McGePoint3d`](McGePoint3d.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `z` | `number` |

#### Returns

[`McGePoint3d`](McGePoint3d.md)

#### Inherited from

[MxCADUiPrBase](MxCADUiPrBase.md).[doc2cad2](MxCADUiPrBase.md#doc2cad2)

___

### drawReserve

▸ **drawReserve**(`callAddEntity?`): `void`

把动态绘制的对象，保留到图上。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callAddEntity?` | (`ent`: `Object3D`) => `void` | 回调参数ent 类型：THREE.THREE.Object3D |

#### Returns

`void`

点对象 DWG图纸坐标

#### Inherited from

[MxCADUiPrBase](MxCADUiPrBase.md).[drawReserve](MxCADUiPrBase.md#drawreserve)

___

### getCursorType

▸ **getCursorType**(): `MxCursorType`

返回光标类型

#### Returns

`MxCursorType`

#### Inherited from

[MxCADUiPrBase](MxCADUiPrBase.md).[getCursorType](MxCADUiPrBase.md#getcursortype)

___

### getDetailedResult

▸ **getDetailedResult**(): `DetailedResult`

返回交互操作退出的详细原因

#### Returns

`DetailedResult`

#### Inherited from

[MxCADUiPrBase](MxCADUiPrBase.md).[getDetailedResult](MxCADUiPrBase.md#getdetailedresult)

___

### getDocPickPoint

▸ **getDocPickPoint**(): [`McGePoint3d`](McGePoint3d.md)

得以获取对象时的输入点的CAD图纸坐标.

#### Returns

[`McGePoint3d`](McGePoint3d.md)

点对象 MdGePoint3d

___

### getDynamicInputType

▸ **getDynamicInputType**(): `DynamicInputType`

返回动态输入类型

#### Returns

`DynamicInputType`

#### Inherited from

[MxCADUiPrBase](MxCADUiPrBase.md).[getDynamicInputType](MxCADUiPrBase.md#getdynamicinputtype)

___

### getFilter

▸ **getFilter**(): `undefined` \| [`MxCADResbuf`](MxCADResbuf.md)

#### Returns

`undefined` \| [`MxCADResbuf`](MxCADResbuf.md)

___

### getInputToucheType

▸ **getInputToucheType**(): `number`

返回需要的Touche输入类型

#### Returns

`number`

#### Inherited from

[MxCADUiPrBase](MxCADUiPrBase.md).[getInputToucheType](MxCADUiPrBase.md#getinputtouchetype)

___

### getStatus

▸ **getStatus**(): `MrxDbgUiPrBaseReturn`

#### Returns

`MrxDbgUiPrBaseReturn`

#### Inherited from

[MxCADUiPrBase](MxCADUiPrBase.md).[getStatus](MxCADUiPrBase.md#getstatus)

___

### go

▸ **go**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`McObjectId`](McObjectId.md)\>

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`McObjectId`](McObjectId.md)\>

___

### isDisableDynInput

▸ **isDisableDynInput**(): `boolean`

是否禁用动态输入框

#### Returns

`boolean`

#### Inherited from

[MxCADUiPrBase](MxCADUiPrBase.md).[isDisableDynInput](MxCADUiPrBase.md#isdisabledyninput)

___

### isDisableDynamicTrace

▸ **isDisableDynamicTrace**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[MxCADUiPrBase](MxCADUiPrBase.md).[isDisableDynamicTrace](MxCADUiPrBase.md#isdisabledynamictrace)

___

### isDisableGridTrace

▸ **isDisableGridTrace**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[MxCADUiPrBase](MxCADUiPrBase.md).[isDisableGridTrace](MxCADUiPrBase.md#isdisablegridtrace)

___

### isDisableOrthoTrace

▸ **isDisableOrthoTrace**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[MxCADUiPrBase](MxCADUiPrBase.md).[isDisableOrthoTrace](MxCADUiPrBase.md#isdisableorthotrace)

___

### isDisableOsnap

▸ **isDisableOsnap**(): `boolean`

是否禁用捕捉

#### Returns

`boolean`

#### Inherited from

[MxCADUiPrBase](MxCADUiPrBase.md).[isDisableOsnap](MxCADUiPrBase.md#isdisableosnap)

___

### isDisablePolarAxisTrace

▸ **isDisablePolarAxisTrace**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[MxCADUiPrBase](MxCADUiPrBase.md).[isDisablePolarAxisTrace](MxCADUiPrBase.md#isdisablepolaraxistrace)

___

### isKeyWordPicked

▸ **isKeyWordPicked**(`matchKeyWord`): `boolean`

测试某一个关键字是否被用户选择

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `matchKeyWord` | `string` | 要检测的关键字 |

#### Returns

`boolean`

true为真

#### Inherited from

[MxCADUiPrBase](MxCADUiPrBase.md).[isKeyWordPicked](MxCADUiPrBase.md#iskeywordpicked)

___

### keyWordPicked

▸ **keyWordPicked**(): `string`

返回用户选择的关键字

#### Returns

`string`

选择的关键字

#### Inherited from

[MxCADUiPrBase](MxCADUiPrBase.md).[keyWordPicked](MxCADUiPrBase.md#keywordpicked)

___

### keyWords

▸ **keyWords**(): `string`

返回关键字列表

#### Returns

`string`

关键词列表

#### Inherited from

[MxCADUiPrBase](MxCADUiPrBase.md).[keyWords](MxCADUiPrBase.md#keywords)

___

### message

▸ **message**(): `string`

提示字符串

#### Returns

`string`

提示消息

#### Inherited from

[MxCADUiPrBase](MxCADUiPrBase.md).[message](MxCADUiPrBase.md#message)

___

### pickPoint

▸ **pickPoint**(): [`McGePoint3d`](McGePoint3d.md)

得以获取对象时的输入点

#### Returns

[`McGePoint3d`](McGePoint3d.md)

___

### setCursorType

▸ **setCursorType**(`type`): `void`

设置光标类型

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `MxCursorType` |

#### Returns

`void`

#### Inherited from

[MxCADUiPrBase](MxCADUiPrBase.md).[setCursorType](MxCADUiPrBase.md#setcursortype)

___

### setDisableDynInput

▸ **setDisableDynInput**(`isDisable`): `void`

设置是否禁用动态输入框

#### Parameters

| Name | Type |
| :------ | :------ |
| `isDisable` | `boolean` |

#### Returns

`void`

#### Inherited from

[MxCADUiPrBase](MxCADUiPrBase.md).[setDisableDynInput](MxCADUiPrBase.md#setdisabledyninput)

___

### setDisableDynamicTrace

▸ **setDisableDynamicTrace**(`isDisable`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `isDisable` | `boolean` |

#### Returns

`void`

#### Inherited from

[MxCADUiPrBase](MxCADUiPrBase.md).[setDisableDynamicTrace](MxCADUiPrBase.md#setdisabledynamictrace)

___

### setDisableGridTrace

▸ **setDisableGridTrace**(`isDisable`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `isDisable` | `boolean` |

#### Returns

`void`

#### Inherited from

[MxCADUiPrBase](MxCADUiPrBase.md).[setDisableGridTrace](MxCADUiPrBase.md#setdisablegridtrace)

___

### setDisableOrthoTrace

▸ **setDisableOrthoTrace**(`isDisable`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `isDisable` | `boolean` |

#### Returns

`void`

#### Inherited from

[MxCADUiPrBase](MxCADUiPrBase.md).[setDisableOrthoTrace](MxCADUiPrBase.md#setdisableorthotrace)

___

### setDisableOsnap

▸ **setDisableOsnap**(`isDisable`): `void`

设置是否禁用捕捉

#### Parameters

| Name | Type |
| :------ | :------ |
| `isDisable` | `boolean` |

#### Returns

`void`

#### Inherited from

[MxCADUiPrBase](MxCADUiPrBase.md).[setDisableOsnap](MxCADUiPrBase.md#setdisableosnap)

___

### setDisablePolarAxisTrace

▸ **setDisablePolarAxisTrace**(`isDisable`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `isDisable` | `boolean` |

#### Returns

`void`

#### Inherited from

[MxCADUiPrBase](MxCADUiPrBase.md).[setDisablePolarAxisTrace](MxCADUiPrBase.md#setdisablepolaraxistrace)

___

### setDynamicInputType

▸ **setDynamicInputType**(`type`): `void`

设置动态输入类型

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `DynamicInputType` |

#### Returns

`void`

#### Inherited from

[MxCADUiPrBase](MxCADUiPrBase.md).[setDynamicInputType](MxCADUiPrBase.md#setdynamicinputtype)

___

### setFilter

▸ **setFilter**(`filter`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `filter` | [`MxCADResbuf`](MxCADResbuf.md) |

#### Returns

`void`

___

### setInputToucheType

▸ **setInputToucheType**(`toucheType`): `void`

设置需要的Touche输入类型,默认值是 MxType.InputToucheType.kGetBegan

#### Parameters

| Name | Type |
| :------ | :------ |
| `toucheType` | `number` |

#### Returns

`void`

#### Inherited from

[MxCADUiPrBase](MxCADUiPrBase.md).[setInputToucheType](MxCADUiPrBase.md#setinputtouchetype)

___

### setKeyWords

▸ **setKeyWords**(`keyWordList`): `void`

设置关键字列表

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `keyWordList` | `string` | 关键词列表 |

#### Returns

`void`

void

#### Inherited from

[MxCADUiPrBase](MxCADUiPrBase.md).[setKeyWords](MxCADUiPrBase.md#setkeywords)

___

### setLastInputPoint

▸ **setLastInputPoint**(`pt`): `void`

设置上一次的输入点。

#### Parameters

| Name | Type |
| :------ | :------ |
| `pt` | [`McGePoint3d`](McGePoint3d.md) |

#### Returns

`void`

选择的关键字

#### Inherited from

[MxCADUiPrBase](MxCADUiPrBase.md).[setLastInputPoint](MxCADUiPrBase.md#setlastinputpoint)

___

### setMessage

▸ **setMessage**(`message`): `void`

设置提示字符串

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | `string` | 提示消息 |

#### Returns

`void`

提示消息

#### Inherited from

[MxCADUiPrBase](MxCADUiPrBase.md).[setMessage](MxCADUiPrBase.md#setmessage)

___

### setUserDraw

▸ **setUserDraw**(`pDraw`): `void`

设置交互过程的动态绘制调用对象

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pDraw` | (`currentPoint`: [`McGePoint3d`](McGePoint3d.md), `pWorldDraw`: `McEdGetPointWorldDrawObject`) => `void` | McEdGetPointWorldDrawObject \| 动态绘制调用对象 |

#### Returns

`void`

void

#### Inherited from

[MxCADUiPrBase](MxCADUiPrBase.md).[setUserDraw](MxCADUiPrBase.md#setuserdraw)

___

### setUserInputControls

▸ **setUserInputControls**(`contros`): `void`

设置输入控制设置，UserInputControls

#### Parameters

| Name | Type |
| :------ | :------ |
| `contros` | `number` |

#### Returns

`void`

#### Inherited from

[MxCADUiPrBase](MxCADUiPrBase.md).[setUserInputControls](MxCADUiPrBase.md#setuserinputcontrols)

___

### userInputControls

▸ **userInputControls**(): `number`

返回输入控制设置，UserInputControls

#### Returns

`number`

#### Inherited from

[MxCADUiPrBase](MxCADUiPrBase.md).[userInputControls](MxCADUiPrBase.md#userinputcontrols)

___

### value

▸ **value**(): [`McObjectId`](McObjectId.md)

得以获取对象时的id

#### Returns

[`McObjectId`](McObjectId.md)
