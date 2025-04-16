import { DefaultTheme, defineConfig } from 'vitepress';
import AutoSidebar from 'vite-plugin-vitepress-auto-sidebar';
// import { pagefindPlugin, chineseSearchOptimize } from 'vitepress-plugin-pagefind'
import markdownPlugin from "vitepress-demo-editor/markdownPlugin";
import { enConfig } from './en';
import { zhConfig } from './zh';

enum EnZhDict {
    "开始" = "Satrt" ,
    "开发环境准备" = "Development Environment Setup",
    "简介" = "Brief introduction",
    "快速入门" = "Quick get start",
    "视图文档基础" = "View document basis",
    "拓扑图形基础" = "Topological graph basis",
    "指南" = "Guide",
    "基本几何建模类" = "Basic geometric modeling class",
    "绘制一个Box方块对象" = "Draw a box",
    "基本图形" = "Basic geometry",
    "方块" = "Cuboid",
    "圆柱体" = "Cylinder",
    "圆锥体" = "Cone",
    "球体" = "Sphere",
    "圆环体" = "Torus",
    "楔形体" = "Wedge",
    "拉伸体" = "Prism",
    "旋转体" = "Revol",
    "放样体" = "Loft",
    "路径扫掠体" = "Pipe",
    "几何运算" = "Geometric operation",
    "形位变换" = "Geometric transformation",
    "布尔运算" = "Boolean operation",
    "倒角运算" = "Chamfer & Fillet",
    "几何绘线" = "Drawing curve",
    "几何绘面" = "Drawing surface",
    "标注文字符号" = "Dimension & Text symbol",
    "颜色材质贴图" = "Color & Material & Texture",
    "颜色" = "Color",
    "材质" = "Material",
    "贴图" = "Texture"
} 

enum apiZhDict {
    "modules" = "模块" ,
    "README" = "API文档首页",
    "interfaces" = "接口",
    "enums" = "枚举",
    "classes" = "类",
}

const getEnMap = (sidebarItem: DefaultTheme.SidebarItem)=> {
    if(sidebarItem.text && EnZhDict[sidebarItem.text]) sidebarItem.text = EnZhDict[sidebarItem.text]
    if(sidebarItem.items) {
        sidebarItem.items = sidebarItem.items.map(getEnMap)
    }
    return sidebarItem
} 
const getZhApi = (sidebarItem: DefaultTheme.SidebarItem)=> {
    if(sidebarItem.text && apiZhDict[sidebarItem.text]) sidebarItem.text = apiZhDict[sidebarItem.text]
    if(sidebarItem.items) {
        sidebarItem.items = sidebarItem.items.map(getZhApi)
    }
    return sidebarItem
} 
// const autoSidebar:any = AutoSidebar({
//     deletePrefix: /^(\d+\.|index)/, ignoreList: ["assets", "public"],
//     path:'docs3d'
// })
const autoSidebar:any = AutoSidebar({
    deletePrefix: /^(\d+\.|index)/, ignoreList: ["assets", "public"], sideBarResolved(data) {
        data["/en/"] = data["/en/"].map((items)=> {
           return getEnMap(items)
        })
        data["/api/"] = data["/api/"].map((items)=> {
           return getZhApi(items)
        })
        return data
    },path:'docs3d'
})
export default defineConfig({
    title: 'mxcad3d',
    base: '/mxcad_docs3d',
    ignoreDeadLinks: true,
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