[mxcad API 文档](../README.md) / MxCppType

# Class: MxCppType

MxCppType 类

## Table of contents

### Constructors

- [constructor](MxCppType.md#constructor)

### Properties

- [App](MxCppType.md#app)
- [PropertiesWindow](MxCppType.md#propertieswindow)
- [mxcadassemblyimp](MxCppType.md#mxcadassemblyimp)

### Methods

- [decodeFromGb2312](MxCppType.md#decodefromgb2312)
- [getCallResult](MxCppType.md#getcallresult)
- [getCurrentDatabase](MxCppType.md#getcurrentdatabase)
- [getCurrentMxCAD](MxCppType.md#getcurrentmxcad)
- [newMcGePoint3d](MxCppType.md#newmcgepoint3d)
- [newMcGeVector3d](MxCppType.md#newmcgevector3d)

## Constructors

### constructor

• **new MxCppType**()

## Properties

### App

• **App**: [`McAppType`](McAppType.md)

McAppType 实例

___

### PropertiesWindow

• **PropertiesWindow**: [`MxPropertiesWindowCustom`](MxPropertiesWindowCustom.md)

PropertiesWindow 属必窗口功能调用实例

___

### mxcadassemblyimp

• `Optional` **mxcadassemblyimp**: `any`

MxCpp 程序集

## Methods

### decodeFromGb2312

▸ **decodeFromGb2312**(`str`): `string`

把hex格式的Gb2312编码的转成utf8

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

`string`

___

### getCallResult

▸ **getCallResult**(): `number`

获取上一次调用的结果

#### Returns

`number`

调用结果

___

### getCurrentDatabase

▸ **getCurrentDatabase**(): [`McDbDatabase`](McDbDatabase.md)

返回当前活动的CAD对象的数据库对象.

#### Returns

[`McDbDatabase`](McDbDatabase.md)

___

### getCurrentMxCAD

▸ **getCurrentMxCAD**(): [`McObject`](McObject.md)

返回当前活动的CAD对象

#### Returns

[`McObject`](McObject.md)

___

### newMcGePoint3d

▸ **newMcGePoint3d**(`pt?`): [`McGePoint3d`](McGePoint3d.md)

创建新的 McGePoint3d 实例

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pt?` | `any` | 点坐标 |

#### Returns

[`McGePoint3d`](McGePoint3d.md)

McGePoint3d 实例

___

### newMcGeVector3d

▸ **newMcGeVector3d**(`pt?`): [`McGeVector3d`](McGeVector3d.md)

创建新的 McGeVector3d 实例

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pt?` | `any` | 点坐标 |

#### Returns

[`McGeVector3d`](McGeVector3d.md)

McGePoint3d 实例
