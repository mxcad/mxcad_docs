import DefaultTheme from 'vitepress/theme'

import { vuePlugin, addImportMap } from "vitepress-demo-editor";
import "vitepress-demo-editor/dist/style.css";
//  @ts-ignore
import mxdrawType from "mxdraw/dist/lib/MxModule.d.ts?raw"
//  @ts-ignore
import mxcadType from "../../../dist/mxcad.d.ts?raw"

import "./style/index.css"

let first = true;

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    const { app } = ctx
    DefaultTheme.enhanceApp(ctx)
    // app.config.unwrapInjectedRef has been deprecated. 3.3 now alawys unwraps injected refs in Options API.
    app.mixin({
      async mounted() {
        if (!first) return;
        first = false;
        await import("mxdraw/dist/mxdraw.es.js").then((mxdraw) => {
          addImportMap("mxdraw", mxdraw.default || mxdraw);
        });
        // ../../../dist/mxcad.es.js
        //  @ts-ignore
        await import("../../../src/index.ts").then((mxcad) => {
          addImportMap("mxcad", mxcad.default || mxcad);
        });
      },
    });
    app.use(vuePlugin, {
      defaultDirection: "column", // 默认显示方向
      ms: 300, // 编辑器防抖时间
      handleError(errs) {}, // 错误信息
      onMonacoCreated(monaco) {
        monaco.languages.typescript.typescriptDefaults.addExtraLib(
          `
          declare module 'mxdraw' { 
            ${mxdrawType} 
          }
          `,
          "mxdraw"
        );

        monaco.languages.typescript.typescriptDefaults.addExtraLib(
          `
          declare module 'mxcad' { 
            ${mxcadType} 
          }
          `,
          "mxcad"
        );
      }, // monaco 创建成功时触发
    });

  },
} as typeof DefaultTheme