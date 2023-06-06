mxcad API 文档

# mxcad API 文档

## Table of contents

### Namespaces

- [McDb](modules/McDb.md)

### Enumerations

- [McObjectIdType](enums/McObjectIdType.md)

### Classes

- [McAppType](classes/McAppType.md)
- [McDbAlignedDimension](classes/McDbAlignedDimension.md)
- [McDbBlockReference](classes/McDbBlockReference.md)
- [McDbBlockTable](classes/McDbBlockTable.md)
- [McDbBlockTableIterator](classes/McDbBlockTableIterator.md)
- [McDbBlockTableRecord](classes/McDbBlockTableRecord.md)
- [McDbBlockTableRecordIterator](classes/McDbBlockTableRecordIterator.md)
- [McDbCircle](classes/McDbCircle.md)
- [McDbCurve](classes/McDbCurve.md)
- [McDbDatabase](classes/McDbDatabase.md)
- [McDbDimension](classes/McDbDimension.md)
- [McDbEntity](classes/McDbEntity.md)
- [McDbLayerTable](classes/McDbLayerTable.md)
- [McDbLayerTableRecord](classes/McDbLayerTableRecord.md)
- [McDbLine](classes/McDbLine.md)
- [McDbLinetypeTable](classes/McDbLinetypeTable.md)
- [McDbMText](classes/McDbMText.md)
- [McDbObject](classes/McDbObject.md)
- [McDbPolyline](classes/McDbPolyline.md)
- [McDbRotatedDimension](classes/McDbRotatedDimension.md)
- [McDbText](classes/McDbText.md)
- [McDbTextStyleTable](classes/McDbTextStyleTable.md)
- [McDrawResbuf](classes/McDrawResbuf.md)
- [McDrawSelSet](classes/McDrawSelSet.md)
- [McDrawUtilityClass](classes/McDrawUtilityClass.md)
- [McObject](classes/McObject.md)
- [McObjectId](classes/McObjectId.md)
- [McRxObject](classes/McRxObject.md)
- [MxCppType](classes/MxCppType.md)
- [MxDraw3d](classes/MxDraw3d.md)

### Interfaces

- [McCmColor](interfaces/McCmColor.md)
- [McGeMatrix3d](interfaces/McGeMatrix3d.md)
- [McGePoint3d](interfaces/McGePoint3d.md)
- [McGeVector3d](interfaces/McGeVector3d.md)
- [MxCadConfig](interfaces/MxCadConfig.md)
- [MxDraw3dConfig](interfaces/MxDraw3dConfig.md)
- [WasmConfig](interfaces/WasmConfig.md)

### Variables

- [McDrawUtility](README.md#mcdrawutility)
- [MxCpp](README.md#mxcpp)
- [MxTools](README.md#mxtools)

### Functions

- [b64Decode](README.md#b64decode)
- [b64Encode](README.md#b64encode)
- [createMxCad](README.md#createmxcad)
- [downloadFile](README.md#downloadfile)
- [drawArc](README.md#drawarc)
- [drawCircle](README.md#drawcircle)
- [drawEllipticalArc](README.md#drawellipticalarc)
- [drawLine](README.md#drawline)
- [drawMText](README.md#drawmtext)
- [drawPolyLine](README.md#drawpolyline)
- [drawPolygon](README.md#drawpolygon)
- [drawText](README.md#drawtext)
- [getFilterImp](README.md#getfilterimp)
- [loadMxCADassembly](README.md#loadmxcadassembly)
- [loadMxCADassembly3d](README.md#loadmxcadassembly3d)
- [mxErase](README.md#mxerase)
- [saveAsFileDialog](README.md#saveasfiledialog)

## Variables

### McDrawUtility

• **McDrawUtility**: [`McDrawUtilityClass`](classes/McDrawUtilityClass.md)

___

### MxCpp

• **MxCpp**: [`MxCppType`](classes/MxCppType.md)

___

### MxTools

• `Const` **MxTools**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `b64Decode` | (`str`: `string`) => `string` |
| `b64Encode` | (`str`: `string`) => `string` |
| `downloadFile` | (`blob`: `any`, `filename`: `string`) => `void` |
| `saveAsFileDialog` | (`__namedParameters`: { `blob`: [`Blob`]( https://developer.mozilla.org/en-US/docs/Web/API/Blob ) ; `filename?`: `string` ; `types?`: `FileTypes`  }) => [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\> |

## Functions

### b64Decode

▸ **b64Decode**(`str`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

`string`

___

### b64Encode

▸ **b64Encode**(`str`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

`string`

___

### createMxCad

▸ **createMxCad**(`config?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`McObject`](classes/McObject.md)\>

创建MxCad实例

#### Parameters

| Name | Type |
| :------ | :------ |
| `config?` | [`MxCadConfig`](interfaces/MxCadConfig.md) |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`McObject`](classes/McObject.md)\>

___

### downloadFile

▸ **downloadFile**(`blob`, `filename`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `blob` | `any` |
| `filename` | `string` |

#### Returns

`void`

___

### drawArc

▸ **drawArc**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

___

### drawCircle

▸ **drawCircle**(): `void`

绘制圆

#### Returns

`void`

___

### drawEllipticalArc

▸ **drawEllipticalArc**(): `void`

#### Returns

`void`

___

### drawLine

▸ **drawLine**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

绘制线段

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

___

### drawMText

▸ **drawMText**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

___

### drawPolyLine

▸ **drawPolyLine**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

绘制多义线段

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

___

### drawPolygon

▸ **drawPolygon**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

___

### drawText

▸ **drawText**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

绘制文字

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

___

### getFilterImp

▸ **getFilterImp**(`filter?`): `any`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `filter` | ``null`` \| [`McDrawResbuf`](classes/McDrawResbuf.md) | `null` |

#### Returns

`any`

___

### loadMxCADassembly

▸ **loadMxCADassembly**(`call?`, `locateFile?`, `wasmBinary?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`MxCppType`](classes/MxCppType.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `call?` | (`MxCpp`: [`MxCppType`](classes/MxCppType.md)) => `void` |
| `locateFile` | (`fileName`: `string`, `base`: `string` \| [`URL`]( https://developer.mozilla.org/en-US/docs/Web/API/URL )) => `string` |
| `wasmBinary?` | [`ArrayBuffer`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer ) |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`MxCppType`](classes/MxCppType.md)\>

___

### loadMxCADassembly3d

▸ **loadMxCADassembly3d**(`config`, `call?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`MxDraw3d`](classes/MxDraw3d.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`MxDraw3dConfig`](interfaces/MxDraw3dConfig.md) |
| `call?` | (`mxDraw3d`: [`MxDraw3d`](classes/MxDraw3d.md)) => `void` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`MxDraw3d`](classes/MxDraw3d.md)\>

___

### mxErase

▸ **mxErase**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

___

### saveAsFileDialog

▸ **saveAsFileDialog**(`«destructured»`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

文件下载保存（另存为只支持 Chrome86 或 Edge 86 以及 Opera 72）兼容 iE10等较低版本的浏览器

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `blob` | [`Blob`]( https://developer.mozilla.org/en-US/docs/Web/API/Blob ) |
| › `filename?` | `string` |
| › `types?` | `FileTypes` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>
