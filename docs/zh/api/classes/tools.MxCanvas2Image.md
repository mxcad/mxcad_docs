[mxcad_2d API 文档](../README.md) / [tools](../modules/tools.md) / MxCanvas2Image

# Class: MxCanvas2Image

[tools](../modules/tools.md).MxCanvas2Image

用于把浏览器中的 mxcad 的canvas 内容转换为图片并支持下载或生成图片元素。

**`Description`**

该类主要用于在前端页面中将 canvas 绘制结果导出为 PNG、JPEG、BMP、GIF 等常见图片格式，适用于截图、图表导出、图形分享和本地保存等场景。
它能完成：
- 判断当前环境是否支持 canvas、toDataURL、ImageData 等能力；
- 按指定宽高对 canvas 进行缩放；
- 将 canvas 转成 DataURL 或图片对象；
- 保存为图片文件到本地；
- 对 BMP 类型做特殊编码以生成可下载的位图内容。

使用方式：
1. 使用MxCpp.mxcad.mxdraw.createCanvasImageData，函数准备好Canvas的绘图数据
2. 实例化 MxCanvas2Image；
3. 传入 canvas 元素或元素 id；
4. 调用 saveAsImage() 下载图片，或调用 convertToImage() 获取图片节点；
5. 可通过 width、height、type 参数控制导出尺寸和格式；
6. 若需导出 BMP，可按底层编码方式自动生成位图数据。

总结：MxCanvas2Image 是一个专门处理 canvas 导出与下载的工具类，适合在 Web 端把绘制内容快速转换为可保存的图片文件或可展示的 IMG 元素。

**`Example`**

```ts
export async function Mx_Test_Canvas2Image() {
    MxCpp.mxcad.mxdraw.createCanvasImageData(() => {
       let canvas2image = new MxCanvas2Image(document);
       const mxcad = MxCpp.getCurrentMxCAD();
       //canvas2image.saveAsImage(mxcad.mxdraw.getCanvas(), undefined, undefined, "jpg","save.jpg");
       //canvas2image.saveAsImage(mxcad.mxdraw.getCanvas(), undefined, undefined, "png","save.png"); 
       //canvas2image.saveAsImage(mxcad.mxdraw.getCanvas(), 1000, 2000, "bmp","bmp.bmp");
         let zoom = window.devicePixelRatio;
           //let img = canvas2image.convertToImage(mxcad.mxdraw.getCanvas(), undefined, undefined, "bmp");
           let img = canvas2image.convertToImage(mxcad.mxdraw.getCanvas(), undefined, undefined, "jpg");
           img.width = mxcad.mxdraw.getCanvas().width / zoom;
           img.height = mxcad.mxdraw.getCanvas().height / zoom;
            let newWindow: any = window.open();
           newWindow.document.body.appendChild(img);

     }
   ); 
}
```

## Table of contents

### Constructors

- [constructor](tools.MxCanvas2Image.md#constructor)

### Methods

- [convertToImage](tools.MxCanvas2Image.md#converttoimage)
- [saveAsImage](tools.MxCanvas2Image.md#saveasimage)

## Constructors

### constructor

• **new MxCanvas2Image**(`in_document?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `in_document` | `any` | `undefined` |

## Methods

### convertToImage

▸ **convertToImage**(`canvas`, `width`, `height`, `type`): [`HTMLImageElement`]( https://developer.mozilla.org/docs/Web/API/HTMLImageElement )

将当前 canvas 转换为图片元素。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `canvas` | `any` | canvas 元素或其 id。 |
| `width` | `any` | 导出图片的宽度，若未指定则使用 canvas 原始宽度。 |
| `height` | `any` | 导出图片的高度，若未指定则使用 canvas 原始高度。 |
| `type` | `any` | 导出图片的类型，可选值为 'png'、'jpeg'、'bmp'、'gif'，默认值为 'png'。 |

#### Returns

[`HTMLImageElement`]( https://developer.mozilla.org/docs/Web/API/HTMLImageElement )

**`Description`**

该方法会根据传入的 canvas 元素或其 id，按指定的宽高和图片类型，将 canvas 内容转换为图片，并返回一个 HTMLImageElement 对象，可直接插入页面。

___

### saveAsImage

▸ **saveAsImage**(`canvas`, `width`, `height`, `type`, `fileName?`): `void`

将当前 canvas 转换为图片并保存到本地。

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `canvas` | `any` | `undefined` | canvas 元素或其 id。 |
| `width` | `any` | `undefined` | 导出图片的宽度，若未指定则使用 canvas 原始宽度。 |
| `height` | `any` | `undefined` | 导出图片的高度，若未指定则使用 canvas 原始高度。 |
| `type` | `any` | `undefined` | 导出图片的类型，可选值为 'png'、'jpeg'、'bmp'、'gif'，默认值为 'png'。 |
| `fileName` | `string` | `"save.bmp"` | - |

#### Returns

`void`

**`Description`**

该方法会根据传入的 canvas 元素或其 id，按指定的宽高和图片类型，将 canvas 内容转换为图片，并触发浏览器下载。
