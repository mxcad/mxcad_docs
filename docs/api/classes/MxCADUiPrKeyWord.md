[mxcad API 文档](../README.md) / MxCADUiPrKeyWord

# Class: MxCADUiPrKeyWord

## Hierarchy

- [`MxCADUiPrBase`](MxCADUiPrBase.md)

  ↳ **`MxCADUiPrKeyWord`**

## Table of contents

### Constructors

- [constructor](MxCADUiPrKeyWord.md#constructor)

### Properties

- [imp](MxCADUiPrKeyWord.md#imp)
- [mxobj](MxCADUiPrKeyWord.md#mxobj)

### Methods

- [cad2doc1](MxCADUiPrKeyWord.md#cad2doc1)
- [cad2doc2](MxCADUiPrKeyWord.md#cad2doc2)
- [clearLastInputPoint](MxCADUiPrKeyWord.md#clearlastinputpoint)
- [disableAllTrace](MxCADUiPrKeyWord.md#disablealltrace)
- [doc2cad1](MxCADUiPrKeyWord.md#doc2cad1)
- [doc2cad2](MxCADUiPrKeyWord.md#doc2cad2)
- [drawReserve](MxCADUiPrKeyWord.md#drawreserve)
- [getCursorType](MxCADUiPrKeyWord.md#getcursortype)
- [getDetailedResult](MxCADUiPrKeyWord.md#getdetailedresult)
- [getDynamicInputType](MxCADUiPrKeyWord.md#getdynamicinputtype)
- [getInputToucheType](MxCADUiPrKeyWord.md#getinputtouchetype)
- [getStatus](MxCADUiPrKeyWord.md#getstatus)
- [go](MxCADUiPrKeyWord.md#go)
- [isDisableDynInput](MxCADUiPrKeyWord.md#isdisabledyninput)
- [isDisableDynamicTrace](MxCADUiPrKeyWord.md#isdisabledynamictrace)
- [isDisableGridTrace](MxCADUiPrKeyWord.md#isdisablegridtrace)
- [isDisableOrthoTrace](MxCADUiPrKeyWord.md#isdisableorthotrace)
- [isDisableOsnap](MxCADUiPrKeyWord.md#isdisableosnap)
- [isDisablePolarAxisTrace](MxCADUiPrKeyWord.md#isdisablepolaraxistrace)
- [isKeyWordPicked](MxCADUiPrKeyWord.md#iskeywordpicked)
- [keyWordPicked](MxCADUiPrKeyWord.md#keywordpicked)
- [keyWords](MxCADUiPrKeyWord.md#keywords)
- [message](MxCADUiPrKeyWord.md#message)
- [setCursorType](MxCADUiPrKeyWord.md#setcursortype)
- [setDisableDynInput](MxCADUiPrKeyWord.md#setdisabledyninput)
- [setDisableDynamicTrace](MxCADUiPrKeyWord.md#setdisabledynamictrace)
- [setDisableGridTrace](MxCADUiPrKeyWord.md#setdisablegridtrace)
- [setDisableOrthoTrace](MxCADUiPrKeyWord.md#setdisableorthotrace)
- [setDisableOsnap](MxCADUiPrKeyWord.md#setdisableosnap)
- [setDisablePolarAxisTrace](MxCADUiPrKeyWord.md#setdisablepolaraxistrace)
- [setDynamicInputType](MxCADUiPrKeyWord.md#setdynamicinputtype)
- [setInputToucheType](MxCADUiPrKeyWord.md#setinputtouchetype)
- [setKeyWords](MxCADUiPrKeyWord.md#setkeywords)
- [setLastInputPoint](MxCADUiPrKeyWord.md#setlastinputpoint)
- [setMessage](MxCADUiPrKeyWord.md#setmessage)
- [setUserDraw](MxCADUiPrKeyWord.md#setuserdraw)
- [setUserInputControls](MxCADUiPrKeyWord.md#setuserinputcontrols)
- [userInputControls](MxCADUiPrKeyWord.md#userinputcontrols)

## Constructors

### constructor

• **new MxCADUiPrKeyWord**()

#### Overrides

[MxCADUiPrBase](MxCADUiPrBase.md).[constructor](MxCADUiPrBase.md#constructor)

## Properties

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

### getDynamicInputType

▸ **getDynamicInputType**(): `DynamicInputType`

返回动态输入类型

#### Returns

`DynamicInputType`

#### Inherited from

[MxCADUiPrBase](MxCADUiPrBase.md).[getDynamicInputType](MxCADUiPrBase.md#getdynamicinputtype)

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

▸ **go**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<``null`` \| `string`\>

开始动态拖动

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<``null`` \| `string`\>

void

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
