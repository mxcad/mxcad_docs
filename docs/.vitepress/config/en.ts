import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'

export const enConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
    "dir": "en",
    themeConfig: {
        nav: [
            { text: 'guide', link: '/en/指南/1.quickGetStart' },
            { text: 'API document', link: '/api/README' },
            { text: "mxdraw document", items: [{
                text: "github",
                link: "https://mxcad.github.io/mxdraw_docs"
            },{
                text: "gitee",
                link: "https://mxcadx.gitee.io/mxdraw_docs"
            }] }
        ]
    }
}