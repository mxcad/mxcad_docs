[mxcad_2d API documentation] (../README. md)/[tools] (../modules/tools. md)/MxCanvas2Image

# Class: MxCanvas2Image

[tools](../modules/tools.md).MxCanvas2Image

Used to convert the canvas content of MXCAD in the browser into images and support downloading or generating image elements.

**`Description`**

This class is mainly used to export canvas drawing results to common image formats such as PNG, JPEG, BMP, GIF, etc. on front-end pages, and is suitable for scenarios such as screenshot, chart export, graphic sharing, and local saving.
It can complete:
-Determine whether the current environment supports capabilities such as canvas, toDataURL, ImageData, etc;
-Scale the canvas according to the specified width and height;
-Convert canvas to DataURL or image object;
-Save as an image file locally;
-Perform special encoding on BMP types to generate downloadable bitmap content.

Usage:
1. Use MxCpp.xcad.mxdraw.create CanvasImageData to prepare the drawing data for Canvas
2. Instantiate MxCanvas2Image;
3. Pass in the canvas element or element ID;
4. Call saveAsImage () to download images, or call convertToImage() to obtain image nodes;
5. Export size and format can be controlled through width, height, and type parameters;
If BMP needs to be exported, bitmap data can be automatically generated according to the underlying encoding method.

Summary: MxCanvas2Image is a specialized tool class for handling canvas export and download, suitable for quickly converting drawn content into storable image files or presentable IMG elements on the web.

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

Convert the current canvas to an image element.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
|Canvas | any | Canvas element or its ID|
|Width | any | Export the width of the image. If not specified, use the original canvas width.  |
|Height | any | Export the height of the image. If not specified, use the original canvas height.  |
|Type | any | The type of exported image, with optional values of 'png', 'jpeg', 'bmp', 'gif', and a default value of 'png'.  |

#### Returns

[`HTMLImageElement`]( https://developer.mozilla.org/docs/Web/API/HTMLImageElement )

**`Description`**

This method will convert the canvas content into an image based on the specified width, height, and image type of the passed canvas element or its ID, and return an HTMLImageElement object that can be directly inserted into the page.

___

### saveAsImage

▸ **saveAsImage**(`canvas`, `width`, `height`, `type`, `fileName?`): `void`

Convert the current canvas to an image and save it locally.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
|Canvas | any | undefined | Canvas element or its ID|
|Width | any | undefined | The width of the exported image. If not specified, the original canvas width will be used.  |
|Height | any | undefined | Export the height of the image. If not specified, use the original canvas height.  |
|Type | any | undefined | The type of exported image, with optional values of 'png', 'jpeg', 'bmp', 'gif', and a default value of 'png'.  |
| `fileName` | `string` | `"save.bmp"` | - |

#### Returns

`void`

**`Description`**

This method will convert the canvas content into an image according to the specified width, height, and image type based on the passed canvas element or its ID, and trigger the browser download.
