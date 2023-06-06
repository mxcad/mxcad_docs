import { DefaultTheme, defineConfig } from 'vitepress';
import AutoSidebar from 'vite-plugin-vitepress-auto-sidebar';
// import { pagefindPlugin, chineseSearchOptimize } from 'vitepress-plugin-pagefind'
import markdownPlugin from "vitepress-demo-editor/markdownPlugin";
import { enConfig } from './en';
import { zhConfig } from './zh';

enum EnZhDict {
    "指南" = "guide",
    "快速入门" = "quick get start",
    "图形转换" = "Graphical Conversion",
    "常见问题" = "frequently asked question"
}

const getEnMap = (sidebarItem: DefaultTheme.SidebarItem)=> {
    if(sidebarItem.text && EnZhDict[sidebarItem.text]) sidebarItem.text = EnZhDict[sidebarItem.text]
    if(sidebarItem.items) {
        sidebarItem.items = sidebarItem.items.map(getEnMap)
    }
    return sidebarItem
} 
const autoSidebar:any = AutoSidebar({
    deletePrefix: /^(\d\.|index)/, ignoreList: ["assets", "public"], sideBarResolved(data) {
        data["/en/"] = data["/en/"].map((items)=> {
           return getEnMap(items)
        })
        return data
    }
})
export default defineConfig({
    title: 'mxcad',
    base: '/mxcad_docs',
    vite: {
        define: {
            "process.env.BABEL_TYPES_8_BREAKING": "false",
            "process.platform": '"darwin"',
            "Buffer.isBuffer": "undefined",
        },
        resolve: {
            alias: {
                assert: "browser-assert",
                path: "path-browserify",
            },
        },
        plugins: [
            // 全文离线搜索
            // pagefindPlugin({
            //     customSearchQuery: chineseSearchOptimize,
            //     // 排除索引某些页面元素
            //     excludeSelector: [],
            //     btnPlaceholder: '搜索',
            //     placeholder: '搜索文档',
            //     emptyText: '空空如也',
            //     heading: '共: {{searchResult}} 条结果'
            // }),

            // 自动生成侧边栏
            autoSidebar,
            // Cross origin isolation是必需的。SharedArrayBuffer 使用此插件，在本地开发服务器中，可以启用和测试依赖于 SAB 的功能。
            // 由于通过vite.config.headers配置无效  https://github.com/vuejs/vitepress/issues/2195 临时的解决方案
            {
                configureServer(server) {
                    server.middlewares.use((_req, res, next) => {
                        res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
                        res.setHeader("Cross-Origin-Embedder-Policy", "require-corp");
                        next();
                    });
                }
            }
        ],
        server: {
            port: 4001,
        }
    },
    locales: {
        root: { label: '简体中文', lang: 'zh-CN', link: '/zh/', ...zhConfig },
        en: { label: 'English', lang: 'en-US', link: '/en/', ...enConfig },
    },
    markdown: {
        config: (md) => {
            md.use(markdownPlugin as any);
        },
    },
    themeConfig: {
        search: {
            provider: 'local',
            options: {
                disableDetailedView: true
            }
        },
        socialLinks: [
            { icon: 'github', link: 'https://github.com/mxcad/mxcad_docs' },
        ],
        footer: {
            copyright: 'Copyright @ 2023 成都梦想凯德科技有限公司 Rights Reserved'
        },
    }
})