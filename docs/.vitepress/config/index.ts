import { DefaultTheme, defineConfig } from 'vitepress';
import AutoSidebar from 'vite-plugin-vitepress-auto-sidebar';
// import { pagefindPlugin, chineseSearchOptimize } from 'vitepress-plugin-pagefind'
import markdownPlugin from "vitepress-demo-editor/markdownPlugin";
import { enConfig } from './en';
import { zhConfig } from './zh';

enum EnZhDict {
    "开始" = "Satrt" ,
    "简介" = "Brief introduction",
    "快速入门" = "Quick get start",
    "图纸转换" = "Drawing conversion",
    "打开和保存图纸" = "Open and save the drawing",
    "指南" = "Guide",
    "数学库" = "Mathematical library",
    "基础绘图" = "Basic drawing",
    "点" = "Point",
    "直线" = "Straight line",
    "多段线" = "Polyline",
    "圆" = "Circle",
    "圆弧" = "Arc",
    "椭圆" = "Ellipse",
    "尺寸标注" = "Dimension marking",
    "文字" = "Text",
    "自定义实体" = "Custom entity",
    "填充" = "Fill in",
    "路径" = "Path",
    "图块" = "Block",
    "图片" = "Image",
    "交互绘图" = "Interactive drawing",
    "命令行" = "Command line",
    "UI交互" = "UI interaction",
    "动态绘制" = "Dynamic rendering",
    "图纸编辑" = "Drawing editing",
    "选择图形" = "Select pattern",
    "常用编辑操作" = "Common edit operation",
    "视区设置" = "View-area setting",
    "数据库" = "Archive" ,
    "系统变量" = "System variable" ,
    "图层表" = "Layer table" ,
    "文字样式表" = "Literal style sheet" ,
    "线型表" = "Line table" ,
    "块表" = "Block table" ,
    "全局字典" = "Global dictionary" ,
    "实体" = "Entity" ,
    "最佳实践" = "Best practice" ,
    "MxCAD APP应用集成" = "MxCAD APP application integration" ,
    "打包桌面MxCAD APP" = "Package desktop MxCAD APP" ,
    "mapbox与cad图纸结合" = "mapbox combined with cad drawings" ,
    "常见问题" = "Q&A",
    "概述" = "Summarize",
<<<<<<< HEAD
    "事件监听" = "EventListeners",
    "功能示例demo"="Function Example demo",
    "标注测量"="Labeling measurement",
    "绘图工具"="Drawing tool",
    "编辑工具"="Editing tool",
    "测量圆"="Measuring circle",
    "测量面积（多边形、矩形）"="Measuring area (polygon, rectangle)",
    "点到直线距离"="The distance from a point to a line",
    "弧长"="Arc length",
    "连续测量"="Continuous measurement",
    "局部放大"="Local amplification",
    "测量坐标"="Measuring coordinate",
    "中心矩形"="Central rectangle",
    "星形"="star",
    "保温棉"="Thermal insulation cotton",
    "矩形缩放"="Rectangular scaling",
    "临时隐藏"="Temporary Hide",
    "打断"="Interrupt",
    "移动"="Move",
    "缩放"="Zoom",
    "镜像"="Mirror image",
    "旋转"="Rotate",
    "文字工具"="Type tool",
    "文字加框"="Text framing",
    "提取文字"="Extract text",
    "其他" = "Other",
    "偏移" = "Skew",
    "导出jpg" = "Export JPG",
    "导出pdf" = "Export PDF",
    "指定范围输出dwg" = "Specify range output DWG",
    "文字查找" = "Text search",
    "测量角度" = "Measuring Angle",
=======
    "事件监听" = "EventListeners"
>>>>>>> 336a3932e80ac24ad804265e40f4ad4d62d3927c
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
const autoSidebar:any = AutoSidebar({
    deletePrefix: /^(\d+\.|index)/, ignoreList: ["assets", "public"], sideBarResolved(data) {
        data["/en/"] = data["/en/"].map((items)=> {
           return getEnMap(items)
        })
        data["/api/"] = data["/api/"].map((items)=> {
           return getZhApi(items)
        })
        return data
    }
})
export default defineConfig({
    title: 'mxcad',
    base: '/mxcad_docs',
    ignoreDeadLinks: true,
    vite: {
        define: {
            "process.env.BABEL_TYPES_8_BREAKING": "false",
            "process.platform": '"darwin"',
<<<<<<< HEAD
=======
            "Buffer.isBuffer": "undefined",
>>>>>>> 336a3932e80ac24ad804265e40f4ad4d62d3927c
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