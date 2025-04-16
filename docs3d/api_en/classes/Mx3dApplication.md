[mxcad_3d API documentation](../README. md)/Mx3dApplication

# Class: Mx3dApplication

Application class, global single instance

## Table of contents

### Methods

- [createView](Mx3dApplication.md#createview)
- [getCurrentActiveView](Mx3dApplication.md#getcurrentactiveview)

## Methods

### createView

▸ **createView**(`theCanvasSelector`): [`Mx3dView`](Mx3dView.md)

Create a view for the current application

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|The Canvas selector | string | CSS selector string for canvas|

#### Returns

[`Mx3dView`](Mx3dView.md)

Return a view object

___

### getCurrentActiveView

▸ **getCurrentActiveView**(): [`Mx3dView`](Mx3dView.md)

Retrieve the current view object

#### Returns

[`Mx3dView`](Mx3dView.md)

Return the current view object
