import { createMxCad } from "mxcad"
const canvas = document.createElement("canvas")
canvas.id = "myCanvas"
const canvasBox = document.createElement("div")
canvasBox.style.overflow = "hidden"
canvasBox.style.height = "80vh"
canvasBox.appendChild(canvas)
document.body.appendChild(canvasBox)
window.onload = async () => {
    const mode = "SharedArrayBuffer" in window ? "2d" : "2d-st"
    createMxCad({
         canvas: "#myCanvas",
         locateFile: (fileName)=> {
          return new URL(`/node_modules/mxcad/dist/wasm/${mode}/${fileName}`, import.meta.url).href
         },
         fileUrl: new URL("../../public/test2.mxweb", import.meta.url).href,
         fontspath:  new URL("../node_modules/mxcad/dist/fonts", import.meta.url).href,
      })
}
