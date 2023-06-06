[mxcad API 文档](../README.md) / MxCppType

# Class: MxCppType

MxCppType 类

## Table of contents

### Constructors

- [constructor](MxCppType.md#constructor)

### Properties

- [App](MxCppType.md#app)
- [mxcadassemblyimp](MxCppType.md#mxcadassemblyimp)

### Methods

- [NewMcCmColor](MxCppType.md#newmccmcolor)
- [NewMcGePoint3d](MxCppType.md#newmcgepoint3d)
- [NewMcGePoint3d2](MxCppType.md#newmcgepoint3d2)
- [getCallResult](MxCppType.md#getcallresult)

## Constructors

### constructor

• **new MxCppType**()

## Properties

### App

• **App**: [`McAppType`](McAppType.md)

McAppType 实例

___

### mxcadassemblyimp

• `Optional` **mxcadassemblyimp**: `any`

MxCpp 程序集

## Methods

### NewMcCmColor

▸ **NewMcCmColor**(): [`McCmColor`](../interfaces/McCmColor.md)

创建新的 McCmColor 实例

#### Returns

[`McCmColor`](../interfaces/McCmColor.md)

McCmColor 实例

___

### NewMcGePoint3d

▸ **NewMcGePoint3d**(`pt?`, `isDoc?`): [`McGePoint3d`](../interfaces/McGePoint3d.md)

创建新的 McGePoint3d 实例

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pt?` | `any` | 点坐标 |
| `isDoc?` | `boolean` | 是否为文档坐标 |

#### Returns

[`McGePoint3d`](../interfaces/McGePoint3d.md)

McGePoint3d 实例

___

### NewMcGePoint3d2

▸ **NewMcGePoint3d2**(`x`, `y`, `z?`): [`McGePoint3d`](../interfaces/McGePoint3d.md)

创建新的 McGePoint3d 实例

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | x 坐标 |
| `y` | `number` | y 坐标 |
| `z?` | `number` | z 坐标 |

#### Returns

[`McGePoint3d`](../interfaces/McGePoint3d.md)

McGePoint3d 实例

___

### getCallResult

▸ **getCallResult**(): `number`

获取上一次调用的结果

#### Returns

`number`

调用结果
