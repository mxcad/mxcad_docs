import{_ as t,H as a,o as c,c as r,J as l,E as o,V as D,C as s,a as n}from"./chunks/framework.24f0af87.js";const E=JSON.parse('{"title":"Quick start","description":"","frontmatter":{"head":[["meta",{"name":"Permissions-Policy","content":"interest-cohort=()"}],["meta",{"name":"Cross-Origin-Opener-Policy","content":"same-origin"}],["meta",{"name":"Cross-Origin-Embedder-Policy","content":"require-corp"}]]},"headers":[],"relativePath":"en/指南/1.快速入门.md","filePath":"en/指南/1.快速入门.md"}'),F={name:"en/指南/1.快速入门.md"},y=D("",44),i=s("div",{class:"language-tsx"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"tsx"),s("pre",{class:"shiki material-theme-palenight"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#676E95","font-style":"italic"}},"// This is roughly the process of createMxCad implementation")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#676E95","font-style":"italic"}},"// If you want the entire creation process to be transparent and public,")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#676E95","font-style":"italic"}},"// You can use the following code to create it yourself instead of using createMxCad")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF","font-style":"italic"}},"import"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#A6ACCD"}},"MxFun"),s("span",{style:{color:"#89DDFF"}},","),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#A6ACCD"}},"loadCoreCode"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"}"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"from"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"mxdraw"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF","font-style":"italic"}},"import"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#A6ACCD"}},"loadMxCADassembly"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"}"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"from"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"mxcad"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF","font-style":"italic"}},"export"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"default"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"()"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C792EA"}},"=>"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"  "),s("span",{style:{color:"#82AAFF"}},"loadCoreCode"),s("span",{style:{color:"#F07178"}},"()"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"then"),s("span",{style:{color:"#F07178"}},"("),s("span",{style:{color:"#89DDFF"}},"()"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#C792EA"}},"=>")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"    "),s("span",{style:{color:"#82AAFF"}},"loadMxCADassembly"),s("span",{style:{color:"#F07178"}},"(")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"      "),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#A6ACCD","font-style":"italic"}},"MxCpp"),s("span",{style:{color:"#89DDFF"}},")"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#C792EA"}},"=>"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"        "),s("span",{style:{color:"#A6ACCD"}},"MxFun"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"setIniset"),s("span",{style:{color:"#F07178"}},"("),s("span",{style:{color:"#89DDFF"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"          EnableIntelliSelect"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#FF9CAC"}},"true"),s("span",{style:{color:"#89DDFF"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"        "),s("span",{style:{color:"#89DDFF"}},"}"),s("span",{style:{color:"#F07178"}},")"),s("span",{style:{color:"#89DDFF"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"        "),s("span",{style:{color:"#A6ACCD"}},"MxFun"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"createMxObject"),s("span",{style:{color:"#F07178"}},"("),s("span",{style:{color:"#89DDFF"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"          canvasId"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"myCanvas"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"          isCPPMxCAD"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#FF9CAC"}},"true"),s("span",{style:{color:"#89DDFF"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"          callback"),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#A6ACCD","font-style":"italic"}},"mxDraw"),s("span",{style:{color:"#89DDFF"}},","),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#A6ACCD","font-style":"italic"}},"dom"),s("span",{style:{color:"#89DDFF"}},")"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"            "),s("span",{style:{color:"#A6ACCD"}},"mxDraw"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"initRendererParam"),s("span",{style:{color:"#F07178"}},"("),s("span",{style:{color:"#89DDFF"}},"{"),s("span",{style:{color:"#F07178"}}," webgl2"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#FF9CAC"}},"true"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"}"),s("span",{style:{color:"#F07178"}},")"),s("span",{style:{color:"#89DDFF"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"            "),s("span",{style:{color:"#A6ACCD"}},"mxDraw"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"setMouseMiddlePan"),s("span",{style:{color:"#F07178"}},"("),s("span",{style:{color:"#FF9CAC"}},"true"),s("span",{style:{color:"#F07178"}},")"),s("span",{style:{color:"#89DDFF"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"            "),s("span",{style:{color:"#A6ACCD"}},"mxDraw"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"on"),s("span",{style:{color:"#F07178"}},"("),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"initObject"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},","),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"()"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#C792EA"}},"=>"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"              "),s("span",{style:{color:"#C792EA"}},"const"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#A6ACCD"}},"THREE"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#A6ACCD"}},"MxFun"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"getMxFunTHREE"),s("span",{style:{color:"#F07178"}},"()"),s("span",{style:{color:"#89DDFF"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"              "),s("span",{style:{color:"#C792EA"}},"let"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#A6ACCD"}},"size"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"new"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#A6ACCD"}},"THREE"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"Vector2"),s("span",{style:{color:"#F07178"}},"()"),s("span",{style:{color:"#89DDFF"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"              "),s("span",{style:{color:"#A6ACCD"}},"mxDraw"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"getRenderer"),s("span",{style:{color:"#F07178"}},"()"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"getSize"),s("span",{style:{color:"#F07178"}},"("),s("span",{style:{color:"#A6ACCD"}},"size"),s("span",{style:{color:"#F07178"}},")"),s("span",{style:{color:"#89DDFF"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"              "),s("span",{style:{color:"#C792EA"}},"const"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#A6ACCD"}},"mxcadObj"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#A6ACCD"}},"MxCpp"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#A6ACCD"}},"App"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"CreateMxCAD"),s("span",{style:{color:"#F07178"}},"(")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"                "),s("span",{style:{color:"#A6ACCD"}},"size"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#A6ACCD"}},"width"),s("span",{style:{color:"#89DDFF"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"                "),s("span",{style:{color:"#A6ACCD"}},"size"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#A6ACCD"}},"height"),s("span",{style:{color:"#89DDFF"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"                "),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"myCanvas"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"                "),s("span",{style:{color:"#A6ACCD"}},"mxDraw"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"isWebgl2"),s("span",{style:{color:"#F07178"}},"()"),s("span",{style:{color:"#89DDFF"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"                "),s("span",{style:{color:"#A6ACCD"}},"mxDraw"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"getId"),s("span",{style:{color:"#F07178"}},"()")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"              )"),s("span",{style:{color:"#89DDFF"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"              "),s("span",{style:{color:"#A6ACCD"}},"mxDraw"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"initMxCpp"),s("span",{style:{color:"#F07178"}},"("),s("span",{style:{color:"#A6ACCD"}},"mxcadObj"),s("span",{style:{color:"#F07178"}},")"),s("span",{style:{color:"#89DDFF"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"              "),s("span",{style:{color:"#A6ACCD"}},"mxcadObj"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"openWebFile"),s("span",{style:{color:"#F07178"}},"("),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"test2.mxweb"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#F07178"}},")"),s("span",{style:{color:"#89DDFF"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"            "),s("span",{style:{color:"#89DDFF"}},"}"),s("span",{style:{color:"#F07178"}},")"),s("span",{style:{color:"#89DDFF"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"          "),s("span",{style:{color:"#89DDFF"}},"},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"        "),s("span",{style:{color:"#89DDFF"}},"}"),s("span",{style:{color:"#F07178"}},")"),s("span",{style:{color:"#89DDFF"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"      "),s("span",{style:{color:"#89DDFF"}},"},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"      "),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#A6ACCD","font-style":"italic"}},"fileName"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#FFCB6B"}},"string"),s("span",{style:{color:"#89DDFF"}},")"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#C792EA"}},"=>"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"        "),s("span",{style:{color:"#676E95","font-style":"italic"}},"// CDN loading must use resources in wasm/2d-st, because github restrictions cannot use resources in wasm/2d")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"        "),s("span",{style:{color:"#676E95","font-style":"italic"}},"// To use wasm/2d, it is necessary to follow the same-origin policy of the browser or use other means to circumvent the same-origin policy of the browser")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"        "),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"return"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"https://unpkg.com/mxcad/dist/wasm/2d-st/"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"+"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#A6ACCD"}},"fileName"),s("span",{style:{color:"#89DDFF"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"      "),s("span",{style:{color:"#89DDFF"}},"}")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"    )")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"  )"),s("span",{style:{color:"#89DDFF"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"  "),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"return"),s("span",{style:{color:"#F07178"}}," (")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"    "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"div"),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"style"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"height: 600px; overflow: hidden;"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"      "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"canvas"),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"id"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"myCanvas"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"style"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"height: 300px"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},"></"),s("span",{style:{color:"#F07178"}},"canvas"),s("span",{style:{color:"#89DDFF"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"div"),s("span",{style:{color:"#89DDFF"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"  )"),s("span",{style:{color:"#89DDFF"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"};")])])])],-1);function C(A,d,u,m,h,g){const p=a("demo"),e=a("clientOnly");return c(),r("div",null,[y,l(e,null,{default:o(()=>[l(p,{"initial-value":`// This is roughly the process of createMxCad implementation
// If you want the entire creation process to be transparent and public,
// You can use the following code to create it yourself instead of using createMxCad
import { MxFun, loadCoreCode } from "mxdraw";
import { loadMxCADassembly } from "mxcad";
export default () => {
  loadCoreCode().then(() =>
    loadMxCADassembly(
      (MxCpp) => {
        MxFun.setIniset({
          EnableIntelliSelect: true,
        });
        MxFun.createMxObject({
          canvasId: "myCanvas",
          isCPPMxCAD: true,
          callback(mxDraw, dom) {
            mxDraw.initRendererParam({ webgl2: true });
            mxDraw.setMouseMiddlePan(true);
            mxDraw.on("initObject", () => {
              const THREE = MxFun.getMxFunTHREE();
              let size = new THREE.Vector2();
              mxDraw.getRenderer().getSize(size);
              const mxcadObj = MxCpp.App.CreateMxCAD(
                size.width,
                size.height,
                "myCanvas",
                mxDraw.isWebgl2(),
                mxDraw.getId()
              );
              mxDraw.initMxCpp(mxcadObj);
              mxcadObj.openWebFile("test2.mxweb");
            });
          },
        });
      },
      (fileName: string) => {
        // CDN loading must use resources in wasm/2d-st, because github restrictions cannot use resources in wasm/2d
        // To use wasm/2d, it is necessary to follow the same-origin policy of the browser or use other means to circumvent the same-origin policy of the browser
        return "https://unpkg.com/mxcad/dist/wasm/2d-st/" + fileName;
      }
    )
  );
  return (
    <div style="height: 600px; overflow: hidden;">
      <canvas id="myCanvas" style="height: 300px"></canvas>
    </div>
  );
};
`,direction:"",lang:"tsx",height:"undefined"},{default:o(()=>[i]),_:1})]),_:1})])}const q=t(F,[["render",C]]);export{E as __pageData,q as default};
