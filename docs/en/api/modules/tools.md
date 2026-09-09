[mxcad_2d API documentation] (../README. md)/tools

# Module: tools

This module contains exports related to the MXCAD helper tool, and all exported content can be imported directly using the MXCAD package

**`Example`**

```js
import { getJsonFromUrl } from "mxcad"
```

## Table of contents

### Classes

- [MxCanvas2Image](../classes/tools.MxCanvas2Image.md)

### Variables

- [MxTools](tools.md#mxtools)

### Functions

- [IsZero](tools.md#iszero)
- [\_ML\_String](tools.md#_ml_string)
- [b64Decode](tools.md#b64decode)
- [b64Encode](tools.md#b64encode)
- [copyMcDbEntityProperties](tools.md#copymcdbentityproperties)
- [crateHexString](tools.md#cratehexstring)
- [createCursor](tools.md#createcursor)
- [createMdGeLongLongArrayFormAryId](tools.md#createmdgelonglongarrayformaryid)
- [downloadFile](tools.md#downloadfile)
- [downloadFileFromUrl](tools.md#downloadfilefromurl)
- [getFileFromUrl](tools.md#getfilefromurl)
- [getJsonFromUrl](tools.md#getjsonfromurl)
- [postEmscriptenIndexedDBFile](tools.md#postemscriptenindexeddbfile)
- [postMemoryFile](tools.md#postmemoryfile)
- [saveAsFileDialog](tools.md#saveasfiledialog)

## Variables

### MxTools

• `Const` **MxTools**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `IsZero` | (`val`: `number`) => `boolean` |
| `_ML_String` | (`strId`: `string`, `str`: `string`) => `string` |
| `b64Decode` | (`str`: `string`) => `string` |
| `b64Encode` | (`str`: `string`) => `string` |
| `copyMcDbEntityProperties` | (`fromEnt`: [`McDbEntity`](../classes/2d.McDbEntity.md), `toEnt`: [`McDbEntity`](../classes/2d.McDbEntity.md)) => `void` |
| `createCursor` | (`cursorSize`: `number`, `targetFrameSize`: `number`, `color`: `string`) => `any` |
| `createMdGeLongLongArrayFormAryId` | (`aryId`: [`McObjectId`](../classes/2d.McObjectId.md)[]) => `any` |
| `downloadFile` | (`blob`: `any`, `filename`: `string`) => `void` |
| `downloadFileFromUrl` | (`url`: `string`, `filename`: `string`) => `void` |
| `getFileFromUrl` | (`url`: `string`) => [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`undefined` \| [`Response`]( https://developer.mozilla.org/docs/Web/API/Response )\> |
| `getJsonFromUrl` | (`url`: `string`) => [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`any`\> |
| `postEmscriptenIndexedDBFile` | (`filekey`: `string`, `url`: `string`, `retCall`: (`code`: `number`, `message`: `string`) => `void`, `param?`: `any`) => `void` |
| `postMemoryFile` | (`memoryData`: `any`, `url`: `string`, `filename`: `string`, `retCall`: (`code`: `number`, `message`: `string`) => `void`, `param?`: `any`) => `void` |
| `saveAsFileDialog` | (`__namedParameters`: \{ `blob`: [`Blob`]( https://developer.mozilla.org/docs/Web/API/Blob ) ; `filename?`: `string` ; `types?`: `FileTypes`  }) => [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`undefined` \| ``false`` \| [`FileSystemFileHandle`]( https://developer.mozilla.org/docs/Web/API/FileSystemFileHandle ) & \{ `createWritable`: () => [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`WritableStreamDefaultWriter`]( https://developer.mozilla.org/docs/Web/API/WritableStreamDefaultWriter )\<`any`\>\>  }\> |

## Functions

### IsZero

▸ **IsZero**(`val`): `boolean`

Check if a value is close to zero

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Val | number | numerical value|

#### Returns

`boolean`

Boolean value

___

### \_ML\_String

▸ **_ML_String**(`strId`, `str`): `string`

Receive input prompt string

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|StrId | string | The ID of a string starts with a defined ID name|
|Str | string | prompt string|

#### Returns

`string`

___

### b64Decode

▸ **b64Decode**(`str`): `string`

Decoding Base64 encoded strings into raw data

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Str | string | Base64 encoding|

#### Returns

`string`

raw data

___

### b64Encode

▸ **b64Encode**(`str`): `string`

Base64 encoding of data

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Str | String | Target Data|

#### Returns

`string`

Base64 encoding

___

### copyMcDbEntityProperties

▸ **copyMcDbEntityProperties**(`fromEnt`, `toEnt`): `void`

Copy the properties of one McDbEntity object to another McDbEntity object

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|From Ent | [McDbEntity] (../classes/2d. McDbEntity. md) | Source McDbEntity object|
|ToEnt | [McDbEntity] (../classes/2d. McDbEntity. md) | Target McDbEntity object|

#### Returns

`void`

**`Description`**

This function copies the layer, linetype, linetype scale, lineweight, true color, and text style attributes of the source object to the target object.
This function is mainly used for batch copying object properties in MxCAD, in order to quickly create new objects with the same properties.

___

### crateHexString

▸ **crateHexString**(`str`): `string`

Convert string to hexadecimal format for editing

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

`string`

Hexadecimal string

**`String`**

Str target string

___

### createCursor

▸ **createCursor**(`cursorSize?`, `targetFrameSize?`, `color?`): `any`

Create a custom mouse cursor object

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
|CursorSize | Number | 128 | Mouse Size|
|TargetFrameSize | number | 10 | Target box size|
|Color | string | "# ffffff" | cursor color|

#### Returns

`any`

**`Description`**

This function will generate an object containing different types of cursor based on the passed parameters, including rectangle, cross, normal, and grab cursor.

___

### createMdGeLongLongArrayFormAryId

▸ **createMdGeLongLongArrayFormAryId**(`aryId`): `any`

Create an MdGeLongLongArray object and add the id value from the passed McObjectid array to the object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|AryId | [McObject Id] (../classes/2d. McObject Id. md) [] | McObject Id array|

#### Returns

`any`

MdGeLongLongArray object

**`Description`**

This function will create a new MdGeLongLongArray object and iterate through the passed McObjectid array, adding the ID value of each object to MdGeLongLongArray.
This function is mainly used to process a set of object IDs in MxCAD for batch operations or to pass to other functions for use.

**`Example`**

```ts
import { MxCADUtility, MxCADResbuf, MxCpp } from "mxdraw";
//Select multiple objects and merge them
   async function Mx_Join() {
     let filter = new MxCADResbuf();
     filter.AddMcDbEntityTypes("LWPOLYLINE,ARC,LINE");
Let aryId=await MxCADUtility. userSelect ("Select objects to merge", filter);
     if (aryId.length == 0) {
       return;
     }
     
     MxCpp.App.MxCADAssist.MxJoin(createMdGeLongLongArrayFormAryId(aryId));
   }
```

___

### downloadFile

▸ **downloadFile**(`blob`, `filename`): `void`

Download a file in the browser

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Blob | any | Blob object, which contains the data of the file to be downloaded|
|Filename | string | The file name of the file to be saved|

#### Returns

`void`

___

### downloadFileFromUrl

▸ **downloadFileFromUrl**(`url`, `filename`): `void`

Download files from the specified URL to the user's computer

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Url | string | URL address for downloading files|
|Filename | string | The file name of the file to be saved|

#### Returns

`void`

___

### getFileFromUrl

▸ **getFileFromUrl**(`url`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`undefined` \| [`Response`]( https://developer.mozilla.org/docs/Web/API/Response )\>

Retrieve files from the specified URL

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|URL address of file 'url' | 'string'|

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`undefined` \| [`Response`]( https://developer.mozilla.org/docs/Web/API/Response )\>

Target file

___

### getJsonFromUrl

▸ **getJsonFromUrl**(`url`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`any`\>

Retrieve the file JSON string from the specified URL

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|URL address of file 'url' | 'string'|

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`any`\>

JSON string

___

### postEmscriptenIndexedDBFile

▸ **postEmscriptenIndexedDBFile**(`filekey`, `url`, `retCall`, `param?`): `void`

Retrieve files from IndexedDB (Indexed Database) and upload them to the specified URL

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Filekey | string | The key of the file obtained from IndexedDB|
|URL address to which the data will be sent, used for uploading files|
|RetCall | (code: number, message: string)=>void | callback function|
| `param?` | ` Any ` | Optional additional parameters that can be used to pass additional data or configuration information to the upload function|

#### Returns

`void`

___

### postMemoryFile

▸ **postMemoryFile**(`memoryData`, `url`, `filename`, `retCall`, `param?`): `void`

Send data from memory to the specified URL for file upload functionality

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|MemoryData | any | Objects or data structures of data in memory|
|URL address to which the data will be sent | string ||
|Filename | string | The file name of the uploaded file|
|RetCall | (code: number, message: string)=>void | callback function|
| `param?` | ` Any ` | Optional additional parameters that can be used to pass additional data or configuration information to the upload function|

#### Returns

`void`

___

### saveAsFileDialog

▸ **saveAsFileDialog**(`«destructured»`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`undefined` \| ``false`` \| [`FileSystemFileHandle`]( https://developer.mozilla.org/docs/Web/API/FileSystemFileHandle ) & \{ `createWritable`: () => [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`WritableStreamDefaultWriter`]( https://developer.mozilla.org/docs/Web/API/WritableStreamDefaultWriter )\<`any`\>\>  }\>

File download save popup (save as only supports Chrome 86 or Edge 86 and Opera 72) compatible with lower versions of browsers such as iE10

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `blob` | [`Blob`]( https://developer.mozilla.org/docs/Web/API/Blob ) |
| › `filename?` | `string` |
| › `types?` | `FileTypes` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`undefined` \| ``false`` \| [`FileSystemFileHandle`]( https://developer.mozilla.org/docs/Web/API/FileSystemFileHandle ) & \{ `createWritable`: () => [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`WritableStreamDefaultWriter`]( https://developer.mozilla.org/docs/Web/API/WritableStreamDefaultWriter )\<`any`\>\>  }\>

**`Example`**

```ts
//Export DWG file
   import { MxCpp, MxTools } from "mxcad";

   async function Mx_Export_DWG() {
       const baseUrl = "http://localhost:1337";
       const mxfilepath = "/mxcad/file/";
       const saveDwgUrl = baseUrl + "/mxcad/savedwg";
//Save the MXWeb file to the server, convert it to a DWG file, and then download it.
       MxCpp.getCurrentMxCAD().saveFileToUrl(saveDwgUrl, (iResult: number, sserverResult: string) => {
           try {
               let ret = JSON.parse(sserverResult);
               if (ret.ret == "ok") {
                   let filePath = baseUrl + mxfilepath + ret.file;
                   fetch(filePath).then(async (res) => {
                       const blob = await res.blob()
                       MxTools.saveAsFileDialog({
                           blob,
                           filename: ret.file,
                           types: [{
Description: "DWG drawings",
                               accept: {
                                   "application/octet-stream": [".dwg"],
                               },
                           }]
                       })
                   })
               }
               else {
                   console.log(sserverResult);
               }
           } catch {
               console.log("Mx: sserverResult error");
           }
       });
   };
```
