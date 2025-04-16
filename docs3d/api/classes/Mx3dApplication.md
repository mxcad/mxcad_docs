[mxcad_3d API 文档](../README.md) / Mx3dApplication

# Class: Mx3dApplication

应用程序类，全局单实例

## Table of contents

### Methods

- [createView](Mx3dApplication.md#createview)
- [getCurrentActiveView](Mx3dApplication.md#getcurrentactiveview)

## Methods

### createView

▸ **createView**(`theCanvasSelector`): [`Mx3dView`](Mx3dView.md)

为当前应用程序创建一个视图

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theCanvasSelector` | `string` | canvas的CSS选择器字符串 |

#### Returns

[`Mx3dView`](Mx3dView.md)

返回一个视图对象

___

### getCurrentActiveView

▸ **getCurrentActiveView**(): [`Mx3dView`](Mx3dView.md)

获取当前视图对象

#### Returns

[`Mx3dView`](Mx3dView.md)

返回当前的视图对象
