[mxcad API 文档](../README.md) / McAppType

# Class: McAppType

McAppType 类，提供了 MxCAD 的一些基本操作。

## Table of contents

### Constructors

- [constructor](McAppType.md#constructor)

### Properties

- [MxCADAssist](McAppType.md#mxcadassist)
- [imp](McAppType.md#imp)
- [objectIdToObjectCalls](McAppType.md#objectidtoobjectcalls)

### Methods

- [addNetworkLoadingFont](McAppType.md#addnetworkloadingfont)
- [createCloneObject](McAppType.md#createcloneobject)
- [destroyObject](McAppType.md#destroyobject)
- [getCurrentMxCAD](McAppType.md#getcurrentmxcad)
- [getImp](McAppType.md#getimp)
- [getLastCallResult](McAppType.md#getlastcallresult)
- [getVersionString](McAppType.md#getversionstring)
- [init](McAppType.md#init)
- [initObjectIdToObjectCalls](McAppType.md#initobjectidtoobjectcalls)
- [mcedRGB2Index](McAppType.md#mcedrgb2index)
- [objectIdIsKindOf](McAppType.md#objectidiskindof)
- [objectIdToObject](McAppType.md#objectidtoobject)
- [setDefaultViewBackgroundColor](McAppType.md#setdefaultviewbackgroundcolor)
- [setFontFilePath](McAppType.md#setfontfilepath)

## Constructors

### constructor

• **new McAppType**()

## Properties

### MxCADAssist

• **MxCADAssist**: `any`

___

### imp

• `Private` **imp**: `any`

___

### objectIdToObjectCalls

• `Private` **objectIdToObjectCalls**: `any` = `{}`

## Methods

### addNetworkLoadingFont

▸ **addNetworkLoadingFont**(`paths`): `void`

调置需要通过网络加载的字体

#### Parameters

| Name | Type |
| :------ | :------ |
| `paths` | `string` \| `string`[] |

#### Returns

`void`

___

### createCloneObject

▸ **createCloneObject**(`clonobjImp`): ``null`` \| [`McDbObject`](McDbObject.md)

创建克隆对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `clonobjImp` | `any` | 被克隆的对象。 |

#### Returns

``null`` \| [`McDbObject`](McDbObject.md)

返回创建的 McDbObject 对象。

___

### destroyObject

▸ **destroyObject**(`pObject`): `void`

销毁对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pObject` | `McRxObjectImp` | 要销毁的对象。 |

#### Returns

`void`

___

### getCurrentMxCAD

▸ **getCurrentMxCAD**(): [`McObject`](McObject.md)

获取当前的 MxDraw 对象。

#### Returns

[`McObject`](McObject.md)

返回当前的 McObject 对象。

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

### getVersionString

▸ **getVersionString**(): `string`

得当前程序的版本信息

#### Returns

`string`

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

### initObjectIdToObjectCalls

▸ `Private` **initObjectIdToObjectCalls**(): `void`

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

___

### objectIdIsKindOf

▸ **objectIdIsKindOf**(`lIdIndex`, `className`): `boolean`

判断一个对象id是否指类类型名对象

#### Parameters

| Name | Type |
| :------ | :------ |
| `lIdIndex` | `number` |
| `className` | `string` |

#### Returns

`boolean`

___

### objectIdToObject

▸ **objectIdToObject**(`lIdIndex`): ``null`` \| [`McDbObject`](McDbObject.md)

将对象 id 转换为 McDbObject 对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `lIdIndex` | `number` | 对象的 id。 |

#### Returns

``null`` \| [`McDbObject`](McDbObject.md)

返回转换后的 McDbObject 对象，如果转换失败，则返回 null。

___

### setDefaultViewBackgroundColor

▸ **setDefaultViewBackgroundColor**(`red`, `green`, `blue`): `void`

设置默认的视区的背景色.

#### Parameters

| Name | Type |
| :------ | :------ |
| `red` | `number` |
| `green` | `number` |
| `blue` | `number` |

#### Returns

`void`

___

### setFontFilePath

▸ **setFontFilePath**(`path`): `void`

调置字体加载位置，默值是fonts

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |

#### Returns

`void`
