
import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'

export const zhConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
    dir: "zh",
    themeConfig: {
        nav: [
            { text: '指南', link: '/zh/指南/1.快速入门' },
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