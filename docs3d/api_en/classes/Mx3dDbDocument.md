[mxcad_3d API Document](../README. md)/Mx3dDbDocument

# Class: Mx3dDbDocument

Document class, inherited from Mx3dDbObject.

## Hierarchy

- [`Mx3dDbObject`](Mx3dDbObject.md)

  ↳ **`Mx3dDbDocument`**

## Table of contents

### Constructors

- [constructor](Mx3dDbDocument.md#constructor)

### Methods

- [abortCommand](Mx3dDbDocument.md#abortcommand)
- [addColorLabel](Mx3dDbDocument.md#addcolorlabel)
- [addShapeLabel](Mx3dDbDocument.md#addshapelabel)
- [commitCommand](Mx3dDbDocument.md#commitcommand)
- [getAccessLabel](Mx3dDbDocument.md#getaccesslabel)
- [getColorsLabel](Mx3dDbDocument.md#getcolorslabel)
- [getDocName](Mx3dDbDocument.md#getdocname)
- [getLayersLabel](Mx3dDbDocument.md#getlayerslabel)
- [getShapesLabel](Mx3dDbDocument.md#getshapeslabel)
- [getTopFreeLabels](Mx3dDbDocument.md#gettopfreelabels)
- [getView](Mx3dDbDocument.md#getview)
- [newCommand](Mx3dDbDocument.md#newcommand)
- [read](Mx3dDbDocument.md#read)
- [readFile](Mx3dDbDocument.md#readfile)
- [redo](Mx3dDbDocument.md#redo)
- [removeComponent](Mx3dDbDocument.md#removecomponent)
- [removeShapeLabel](Mx3dDbDocument.md#removeshapelabel)
- [undo](Mx3dDbDocument.md#undo)
- [write](Mx3dDbDocument.md#write)

## Constructors

### constructor

• **new Mx3dDbDocument**()

Constructor, used to initialize Mx3dDbDocument instance.

#### Overrides

[Mx3dDbObject](Mx3dDbObject.md).[constructor](Mx3dDbObject.md#constructor)

## Methods

### abortCommand

▸ **abortCommand**(): `void`

Suspend the current transaction.

#### Returns

`void`

___

### addColorLabel

▸ **addColorLabel**(`theColor`): [`Mx3dDbLabel`](Mx3dDbLabel.md)

Add a new color label.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheColor | [Mx3dGeColor] (Mx3dGeColor. md) | Color object|

#### Returns

[`Mx3dDbLabel`](Mx3dDbLabel.md)

Return the newly added color label object.

___

### addShapeLabel

▸ **addShapeLabel**(): [`Mx3dDbLabel`](Mx3dDbLabel.md)

Add a new shape label.

#### Returns

[`Mx3dDbLabel`](Mx3dDbLabel.md)

Return the newly added shape label object.

___

### commitCommand

▸ **commitCommand**(): `boolean`

Submit the current transaction.

#### Returns

`boolean`

Return a Boolean value indicating whether the submission was successful.

___

### getAccessLabel

▸ **getAccessLabel**(): [`Mx3dDbLabel`](Mx3dDbLabel.md)

Obtain the access entry tag.

#### Returns

[`Mx3dDbLabel`](Mx3dDbLabel.md)

Return the access entry label object.

___

### getColorsLabel

▸ **getColorsLabel**(): [`Mx3dDbLabel`](Mx3dDbLabel.md)

Obtain the entrance color label.

#### Returns

[`Mx3dDbLabel`](Mx3dDbLabel.md)

Return the entry color label object.

___

### getDocName

▸ **getDocName**(): `string`

Get the document name.

#### Returns

`string`

Returns a string of the document name.

___

### getLayersLabel

▸ **getLayersLabel**(): [`Mx3dDbLabel`](Mx3dDbLabel.md)

Obtain the entry layer label.

#### Returns

[`Mx3dDbLabel`](Mx3dDbLabel.md)

Return the entry layer label object.

___

### getShapesLabel

▸ **getShapesLabel**(): [`Mx3dDbLabel`](Mx3dDbLabel.md)

Obtain the entrance shape label.

#### Returns

[`Mx3dDbLabel`](Mx3dDbLabel.md)

Return the entrance shape label object.

___

### getTopFreeLabels

▸ **getTopFreeLabels**(): [`Mx3dDbLabel`](Mx3dDbLabel.md)[]

Get a list of top free labels.

#### Returns

[`Mx3dDbLabel`](Mx3dDbLabel.md)[]

Return an array of top-level free labels.

___

### getView

▸ **getView**(): [`Mx3dView`](Mx3dView.md)

Retrieve the view object.

#### Returns

[`Mx3dView`](Mx3dView.md)

Return the view object.

___

### newCommand

▸ **newCommand**(): `void`

Start a transaction.

#### Returns

`void`

___

### read

▸ **read**(`theFile`, `theFormat`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`boolean`\>

Read the model file and parse it into a document.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theFile` | [`File`](  https://developer.mozilla.org/en-US/docs/Web/API/File ）The file object to be read|
|TheFormat | [MxFormat] (../enums/MdGe. MxFormat. md) | Model file format|

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`boolean`\>

Return a Promise, parsed as a Boolean value, indicating success or failure.

___

### readFile

▸ **readFile**(`theFilePath`, `theFormat`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theFilePath` | `string` |
| `theFormat` | [`MxFormat`](../enums/MdGe.MxFormat.md) |

#### Returns

`boolean`

___

### redo

▸ **redo**(): `boolean`

Redo the last revoked transaction.

#### Returns

`boolean`

Returns a Boolean value indicating whether the redo was successful.

___

### removeComponent

▸ **removeComponent**(`theLabel`): `void`

Delete the specified component.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheLabel | [Mx3dDbLabel] (Mx3dDbLabel. md) | The label object to be deleted|

#### Returns

`void`

___

### removeShapeLabel

▸ **removeShapeLabel**(`theLabel`): `boolean`

Delete the specified shape label.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|TheLabel | [Mx3dDbLabel] (Mx3dDbLabel. md) | The shape label object to be deleted|

#### Returns

`boolean`

Return a Boolean value indicating whether the deletion was successful.

___

### undo

▸ **undo**(): `boolean`

Revoke the transaction of the last record.

#### Returns

`boolean`

Return a Boolean value indicating whether the revocation was successful.

___

### write

▸ **write**(`theFilePath`, `theFormat`): `boolean`

Write the document to the specified path.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|The FilePath | string | file path|
|TheFormat | [MxFormat] (../enums/MdGe. MxFormat. md) | File format|

#### Returns

`boolean`

Returns a Boolean value indicating whether the write was successful.
