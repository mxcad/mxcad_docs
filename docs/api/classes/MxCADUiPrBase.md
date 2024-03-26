[mxcad API 文档](../README.md) / MxCADUiPrBase

# Class: MxCADUiPrBase

## Hierarchy

- **`MxCADUiPrBase`**

  ↳ [`MxCADUiPrPoint`](MxCADUiPrPoint.md)

  ↳ [`MxCADUiPrDist`](MxCADUiPrDist.md)

  ↳ [`MxCADUiPrAngle`](MxCADUiPrAngle.md)

  ↳ [`MxCADUiPrInt`](MxCADUiPrInt.md)

  ↳ [`MxCADUiPrKeyWord`](MxCADUiPrKeyWord.md)

  ↳ [`MxCADUiPrString`](MxCADUiPrString.md)

  ↳ [`MxCADUiPrEntity`](MxCADUiPrEntity.md)

## Table of contents

### Constructors

- [constructor](MxCADUiPrBase.md#constructor)

### Properties

- [imp](MxCADUiPrBase.md#imp)
- [mxobj](MxCADUiPrBase.md#mxobj)

### Methods

- [cad2doc1](MxCADUiPrBase.md#cad2doc1)
- [cad2doc2](MxCADUiPrBase.md#cad2doc2)
- [clearLastInputPoint](MxCADUiPrBase.md#clearlastinputpoint)
- [disableAllTrace](MxCADUiPrBase.md#disablealltrace)
- [doc2cad1](MxCADUiPrBase.md#doc2cad1)
- [doc2cad2](MxCADUiPrBase.md#doc2cad2)
- [drawReserve](MxCADUiPrBase.md#drawreserve)
- [getCursorType](MxCADUiPrBase.md#getcursortype)
- [getDetailedResult](MxCADUiPrBase.md#getdetailedresult)
- [getDynamicInputType](MxCADUiPrBase.md#getdynamicinputtype)
- [getInputToucheType](MxCADUiPrBase.md#getinputtouchetype)
- [getStatus](MxCADUiPrBase.md#getstatus)
- [isDisableDynInput](MxCADUiPrBase.md#isdisabledyninput)
- [isDisableDynamicTrace](MxCADUiPrBase.md#isdisabledynamictrace)
- [isDisableGridTrace](MxCADUiPrBase.md#isdisablegridtrace)
- [isDisableOrthoTrace](MxCADUiPrBase.md#isdisableorthotrace)
- [isDisableOsnap](MxCADUiPrBase.md#isdisableosnap)
- [isDisablePolarAxisTrace](MxCADUiPrBase.md#isdisablepolaraxistrace)
- [isKeyWordPicked](MxCADUiPrBase.md#iskeywordpicked)
- [keyWordPicked](MxCADUiPrBase.md#keywordpicked)
- [keyWords](MxCADUiPrBase.md#keywords)
- [message](MxCADUiPrBase.md#message)
- [setCursorType](MxCADUiPrBase.md#setcursortype)
- [setDisableDynInput](MxCADUiPrBase.md#setdisabledyninput)
- [setDisableDynamicTrace](MxCADUiPrBase.md#setdisabledynamictrace)
- [setDisableGridTrace](MxCADUiPrBase.md#setdisablegridtrace)
- [setDisableOrthoTrace](MxCADUiPrBase.md#setdisableorthotrace)
- [setDisableOsnap](MxCADUiPrBase.md#setdisableosnap)
- [setDisablePolarAxisTrace](MxCADUiPrBase.md#setdisablepolaraxistrace)
- [setDynamicInputType](MxCADUiPrBase.md#setdynamicinputtype)
- [setInputToucheType](MxCADUiPrBase.md#setinputtouchetype)
- [setKeyWords](MxCADUiPrBase.md#setkeywords)
- [setLastInputPoint](MxCADUiPrBase.md#setlastinputpoint)
- [setMessage](MxCADUiPrBase.md#setmessage)
- [setUserDraw](MxCADUiPrBase.md#setuserdraw)
- [setUserInputControls](MxCADUiPrBase.md#setuserinputcontrols)
- [userInputControls](MxCADUiPrBase.md#userinputcontrols)

## Constructors

### constructor

• **new MxCADUiPrBase**(`imp`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `imp` | `any` |

## Properties

### imp

• `Protected` **imp**: `any`

___

### mxobj

• `Protected` **mxobj**: `MxDrawObject`

## Methods

### cad2doc1

▸ `Protected` **cad2doc1**(`pt`): `Vector3`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pt` | [`McGePoint3d`](McGePoint3d.md) |

#### Returns

`Vector3`

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

___

### clearLastInputPoint

▸ **clearLastInputPoint**(): `void`

清除上一次的输入点数据。

#### Returns

`void`

选择的关键字

___

### disableAllTrace

▸ **disableAllTrace**(`isDisable?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `isDisable` | `boolean` | `true` |

#### Returns

`void`

___

### doc2cad1

▸ `Protected` **doc2cad1**(`pt`): [`McGePoint3d`](McGePoint3d.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `pt` | `Vector3` |

#### Returns

[`McGePoint3d`](McGePoint3d.md)

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

___

### getCursorType

▸ **getCursorType**(): `MxCursorType`

返回光标类型

#### Returns

`MxCursorType`

___

### getDetailedResult

▸ **getDetailedResult**(): `DetailedResult`

返回交互操作退出的详细原因

#### Returns

`DetailedResult`

___

### getDynamicInputType

▸ **getDynamicInputType**(): `DynamicInputType`

返回动态输入类型

#### Returns

`DynamicInputType`

___

### getInputToucheType

▸ **getInputToucheType**(): `number`

返回需要的Touche输入类型

#### Returns

`number`

___

### getStatus

▸ **getStatus**(): `MrxDbgUiPrBaseReturn`

#### Returns

`MrxDbgUiPrBaseReturn`

___

### isDisableDynInput

▸ **isDisableDynInput**(): `boolean`

是否禁用动态输入框

#### Returns

`boolean`

___

### isDisableDynamicTrace

▸ **isDisableDynamicTrace**(): `boolean`

#### Returns

`boolean`

___

### isDisableGridTrace

▸ **isDisableGridTrace**(): `boolean`

#### Returns

`boolean`

___

### isDisableOrthoTrace

▸ **isDisableOrthoTrace**(): `boolean`

#### Returns

`boolean`

___

### isDisableOsnap

▸ **isDisableOsnap**(): `boolean`

是否禁用捕捉

#### Returns

`boolean`

___

### isDisablePolarAxisTrace

▸ **isDisablePolarAxisTrace**(): `boolean`

#### Returns

`boolean`

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

___

### keyWordPicked

▸ **keyWordPicked**(): `string`

返回用户选择的关键字

#### Returns

`string`

选择的关键字

___

### keyWords

▸ **keyWords**(): `string`

返回关键字列表

#### Returns

`string`

关键词列表

___

### message

▸ **message**(): `string`

提示字符串

#### Returns

`string`

提示消息

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

___

### setDisableDynamicTrace

▸ **setDisableDynamicTrace**(`isDisable`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `isDisable` | `boolean` |

#### Returns

`void`

___

### setDisableGridTrace

▸ **setDisableGridTrace**(`isDisable`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `isDisable` | `boolean` |

#### Returns

`void`

___

### setDisableOrthoTrace

▸ **setDisableOrthoTrace**(`isDisable`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `isDisable` | `boolean` |

#### Returns

`void`

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

___

### setDisablePolarAxisTrace

▸ **setDisablePolarAxisTrace**(`isDisable`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `isDisable` | `boolean` |

#### Returns

`void`

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

___

### userInputControls

▸ **userInputControls**(): `number`

返回输入控制设置，UserInputControls

#### Returns

`number`
