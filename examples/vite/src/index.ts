import { loadCoreCode, MxFun } from "mxdraw"

import { loadMxCADassembly } from "../../../dist/mxcad.es.js"
const canvas = document.createElement("canvas")
canvas.id = "myCanvas"
const canvasBox = document.createElement("div")
canvasBox.style.overflow = "hidden"
canvasBox.style.height = "80vh"
canvasBox.appendChild(canvas)
document.body.appendChild(canvasBox)
window.onload = async () => {
    await loadCoreCode()
    await loadMxCADassembly((MxCpp) => {
        console.log(MxCpp)
        MxFun.setIniset({
            EnableIntelliSelect: true
        })
        MxFun.createMxObject({
            canvasId: "myCanvas",
            isCPPMxCAD: true,
            // @ts-ignore
            callback(mxDraw, dom) {
                mxDraw.initRendererParam({ webgl2: true });
                mxDraw.setMouseMiddlePan(true);
                mxDraw.on("initObject", () => {
                    if (mxDraw.isWebgl2()) {
                        console.log("MxTip: use webgl2");
                    } else {
                        console.log("MxTip: use webgl1");
                    }
                    const THREE = MxFun.getMxFunTHREE()
                    let size = new THREE.Vector2();
                    mxDraw.getRenderer().getSize(size);
                    const mxcadObj = MxCpp.App.CreateMxCAD(size.width, size.height, "myCanvas", mxDraw.isWebgl2(), mxDraw.getId());
                    mxDraw.initMxCpp(mxcadObj);
                    mxcadObj.openWebFile(new URL("../../public/test2.mxweb", import.meta.url).href);
                });
            }
        })
    }, (fileName:string)=> {
        return new URL(`/node_modules/mxcad/dist/wasm/2d/${fileName}`, import.meta.url).href
    })
}
