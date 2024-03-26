
import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'

export const zhConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
    dir: "zh",
    themeConfig: {
        nav: [
            { text: '官网', items: [
                {
                    text: "梦想CAD控件",
                    link: "https://www.mxdraw.com/"
                },
                {
                    text: "CAD梦想画图",
                    link: "https://www.mxdraw3d.com/"
                }
            ]},
<<<<<<< HEAD
            { text: '指南', link: '/zh/1.指南/1.快速入门' },
=======
            { text: '指南', link: '/zh/1.开始/1.简介' },
>>>>>>> 8c441820 (init)
            { text: 'API文档', link: '/api/README' },
            { text: "mxdraw文档", items: [{
                text: "github",
                link: "https://mxcad.github.io/mxdraw_docs"
            },{
                text: "gitee",
                link: "https://mxcadx.gitee.io/mxdraw_docs"
            }] }
        ],
    }
}