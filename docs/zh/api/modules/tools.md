[mxcad_2d API 文档](../README.md) / tools

# Module: tools

该模块包含用于mxcad帮助工具相关的导出, 所有导出的内容都可以通过mxcad包导入直接使用

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

检查一个数值是否接近于零的

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val` | `number` | 数值 |

#### Returns

`boolean`

布尔值

___

### \_ML\_String

▸ **_ML_String**(`strId`, `str`): `string`

接收输入的提示字符串

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `strId` | `string` | 字符串的ID 起一个符合定义的ID名称 |
| `str` | `string` | 提示字符串 |

#### Returns

`string`

___

### b64Decode

▸ **b64Decode**(`str`): `string`

将 Base64 编码的字符串解码为原始数据

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | Base64 编码 |

#### Returns

`string`

原始数据

___

### b64Encode

▸ **b64Encode**(`str`): `string`

将数据进行 Base64 编码

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | 目标数据 |

#### Returns

`string`

Base64 编码

___

### copyMcDbEntityProperties

▸ **copyMcDbEntityProperties**(`fromEnt`, `toEnt`): `void`

复制一个 McDbEntity 对象的属性到另一个 McDbEntity 对象中

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fromEnt` | [`McDbEntity`](../classes/2d.McDbEntity.md) | 源 McDbEntity 对象 |
| `toEnt` | [`McDbEntity`](../classes/2d.McDbEntity.md) | 目标 McDbEntity 对象 |

#### Returns

`void`

**`Description`**

该函数会将源对象的图层、线型、线型比例、线宽、真实颜色和文字样式等属性复制到目标对象中。
该函数主要用于在 MxCAD 中进行对象属性的批量复制，以便快速创建具有相同属性的新对象。

___

### crateHexString

▸ **crateHexString**(`str`): `string`

把字符串转成16进制格式编辑

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

`string`

16进制字符串

**`String`**

str 目标字符串

___

### createCursor

▸ **createCursor**(`cursorSize?`, `targetFrameSize?`, `color?`): `any`

创建一个自定义的鼠标光标对象

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `cursorSize` | `number` | `128` | 鼠标大小 |
| `targetFrameSize` | `number` | `10` | 目标框大小 |
| `color` | `string` | `"#ffffff"` | 光标颜色 |

#### Returns

`any`

**`Description`**

该函数会根据传入的参数，生成一个包含不同类型光标的对象，包括矩形、十字、普通和抓取光标。

___

### createMdGeLongLongArrayFormAryId

▸ **createMdGeLongLongArrayFormAryId**(`aryId`): `any`

创建一个 MdGeLongLongArray 对象，并将传入的 McObjectId 数组中的 id 值添加到该对象中。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `aryId` | [`McObjectId`](../classes/2d.McObjectId.md)[] | McObjectId 数组 |

#### Returns

`any`

MdGeLongLongArray 对象

**`Description`**

该函数会创建一个新的 MdGeLongLongArray 对象，并遍历传入的 McObjectId 数组，将每个对象的 id 值添加到 MdGeLongLongArray 中。
该函数主要用于在 MxCAD 中处理对象 ID 的集合，以便进行批量操作或传递给其他函数使用。

**`Example`**

```ts
import { MxCADUtility, MxCADResbuf, MxCpp } from "mxdraw";
// 选择多个对象并合并它们
   async function Mx_Join() {
     let filter = new MxCADResbuf();
     filter.AddMcDbEntityTypes("LWPOLYLINE,ARC,LINE");
     let aryId = await MxCADUtility.userSelect("选择要合并的对象", filter);
     if (aryId.length == 0) {
       return;
     }
     
     MxCpp.App.MxCADAssist.MxJoin(createMdGeLongLongArrayFormAryId(aryId));
   }
```

___

### downloadFile

▸ **downloadFile**(`blob`, `filename`): `void`

在浏览器中下载一个文件

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `blob` | `any` | Blob 对象，它包含了要下载的文件的数据 |
| `filename` | `string` | 将要保存的文件的文件名 |

#### Returns

`void`

___

### downloadFileFromUrl

▸ **downloadFileFromUrl**(`url`, `filename`): `void`

从指定的 URL 下载文件到用户的计算机中

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | 下载文件的 URL 地址 |
| `filename` | `string` | 将要保存的文件的文件名 |

#### Returns

`void`

___

### getFileFromUrl

▸ **getFileFromUrl**(`url`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`undefined` \| [`Response`]( https://developer.mozilla.org/docs/Web/API/Response )\>

从指定URL中获取文件

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | 文件的 URL 地址 |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`undefined` \| [`Response`]( https://developer.mozilla.org/docs/Web/API/Response )\>

目标文件

___

### getJsonFromUrl

▸ **getJsonFromUrl**(`url`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`any`\>

从指定URL中获取文件json字符串

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | 文件的 URL 地址 |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`any`\>

json字符串

___

### postEmscriptenIndexedDBFile

▸ **postEmscriptenIndexedDBFile**(`filekey`, `url`, `retCall`, `param?`): `void`

从 IndexedDB（Indexed Database，索引数据库）中获取文件，并将其上传到指定的 URL

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `filekey` | `string` | 从 IndexedDB 中获取的文件的键（key） |
| `url` | `string` | 数据将要发送到的目标 URL 地址，用于上传文件 |
| `retCall` | (`code`: `number`, `message`: `string`) => `void` | 回调函数 |
| `param?` | `any` | 可选的额外参数，可以用来传递额外的数据或配置信息给上传函数 |

#### Returns

`void`

___

### postMemoryFile

▸ **postMemoryFile**(`memoryData`, `url`, `filename`, `retCall`, `param?`): `void`

将内存中的数据发送到指定的 URL，以实现文件上传功能

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `memoryData` | `any` | 内存中数据的对象或者数据结构 |
| `url` | `string` | 数据将要发送到的目标 URL 地址 |
| `filename` | `string` | 上传的文件的文件名 |
| `retCall` | (`code`: `number`, `message`: `string`) => `void` | 回调函数 |
| `param?` | `any` | 可选的额外参数，可以用来传递额外的数据或配置信息给上传函数 |

#### Returns

`void`

___

### saveAsFileDialog

▸ **saveAsFileDialog**(`«destructured»`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`undefined` \| ``false`` \| [`FileSystemFileHandle`]( https://developer.mozilla.org/docs/Web/API/FileSystemFileHandle ) & \{ `createWritable`: () => [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`WritableStreamDefaultWriter`]( https://developer.mozilla.org/docs/Web/API/WritableStreamDefaultWriter )\<`any`\>\>  }\>

文件下载保存弹框（另存为只支持 Chrome86 或 Edge 86 以及 Opera 72）兼容 iE10等较低版本的浏览器

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
// 导出DWG文件
   import { MxCpp, MxTools } from "mxcad";

   async function Mx_Export_DWG() {
       const baseUrl = "http://localhost:1337";
       const mxfilepath = "/mxcad/file/";
       const saveDwgUrl = baseUrl + "/mxcad/savedwg";
       // 把mxweb文件 ，保存到服务器上，然后转换成 dwg文件 ，再下载。
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
                               description: "dwg图纸",
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
