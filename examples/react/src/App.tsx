import {  McObject } from "mxcad"

function App() {

  const mxcad = new McObject()
  console.log(new URL(`../node_modules/mxcad/dist/wasm/2d`, import.meta.url).href)
  mxcad.create({
    canvas: "#myCanvas",
    locateFile: (fileName:any) => {
      return "https://unpkg.com/mxcad/dist/wasm/2d-st/" + fileName
    },
    fileUrl: new URL("./assets/test2.mxweb", import.meta.url).href,
    fontspath: new URL("../node_modules/mxcad/dist/fonts", import.meta.url).href,
  })
  return (<div style={{height: 600, overflow: 'hidden'}}><canvas id="myCanvas" style={{height: 300}}></canvas></div>)
}

export default App
