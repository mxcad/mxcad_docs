import{a5 as p,L as y,M as a,Q as l,a6 as G,a7 as v,a8 as D,a9 as P,aa as T,ab as S,ac as f,ad as E,ae as N,af as w,d as A,u as O,v as R,l as V,ag as I,ah as _,ai as L,aj as j}from"./chunks/framework.24f0af87.js";import{t as u}from"./chunks/theme.d2e99eb5.js";let h={},C={};function H(e){h=e}function B(e){C=e}function ie(){F(),U()}function F(){const e=window;e._vue||(e._vue=h)}function U(){const e=window;e._app||(e._app=C)}const k=`import { camelize } from '@vue/shared';\r
import { capitalize } from '@vue/shared';\r
import { ComponentPropsOptions as ComponentPropsOptions_2 } from '@vue/runtime-core';\r
import { computed as computed_2 } from '@vue/reactivity';\r
import { ComputedGetter } from '@vue/reactivity';\r
import { ComputedRef } from '@vue/reactivity';\r
import { ComputedSetter } from '@vue/reactivity';\r
import { customRef } from '@vue/reactivity';\r
import { CustomRefFactory } from '@vue/reactivity';\r
import { DebuggerEvent } from '@vue/reactivity';\r
import { DebuggerEventExtraInfo } from '@vue/reactivity';\r
import { DebuggerOptions } from '@vue/reactivity';\r
import { DeepReadonly } from '@vue/reactivity';\r
import { effect } from '@vue/reactivity';\r
import { EffectScheduler } from '@vue/reactivity';\r
import { EffectScope } from '@vue/reactivity';\r
import { effectScope } from '@vue/reactivity';\r
import { getCurrentScope } from '@vue/reactivity';\r
import { IfAny } from '@vue/shared';\r
import { isProxy } from '@vue/reactivity';\r
import { isReactive } from '@vue/reactivity';\r
import { isReadonly } from '@vue/reactivity';\r
import { isRef } from '@vue/reactivity';\r
import { isShallow } from '@vue/reactivity';\r
import { LooseRequired } from '@vue/shared';\r
import { markRaw } from '@vue/reactivity';\r
import { normalizeClass } from '@vue/shared';\r
import { normalizeProps } from '@vue/shared';\r
import { normalizeStyle } from '@vue/shared';\r
import { onScopeDispose } from '@vue/reactivity';\r
import { proxyRefs } from '@vue/reactivity';\r
import { reactive } from '@vue/reactivity';\r
import { ReactiveEffect } from '@vue/reactivity';\r
import { ReactiveEffectOptions } from '@vue/reactivity';\r
import { ReactiveEffectRunner } from '@vue/reactivity';\r
import { ReactiveFlags } from '@vue/reactivity';\r
import { readonly } from '@vue/reactivity';\r
import { Ref } from '@vue/reactivity';\r
import { ref } from '@vue/reactivity';\r
import { ShallowReactive } from '@vue/reactivity';\r
import { shallowReactive } from '@vue/reactivity';\r
import { shallowReadonly } from '@vue/reactivity';\r
import { ShallowRef } from '@vue/reactivity';\r
import { shallowRef } from '@vue/reactivity';\r
import { ShallowUnwrapRef } from '@vue/reactivity';\r
import { ShapeFlags } from '@vue/shared';\r
import { SlotFlags } from '@vue/shared';\r
import { stop as stop_2 } from '@vue/reactivity';\r
import { toDisplayString } from '@vue/shared';\r
import { toHandlerKey } from '@vue/shared';\r
import { toRaw } from '@vue/reactivity';\r
import { ToRef } from '@vue/reactivity';\r
import { toRef } from '@vue/reactivity';\r
import { ToRefs } from '@vue/reactivity';\r
import { toRefs } from '@vue/reactivity';\r
import { TrackOpTypes } from '@vue/reactivity';\r
import { TriggerOpTypes } from '@vue/reactivity';\r
import { triggerRef } from '@vue/reactivity';\r
import { UnionToIntersection } from '@vue/shared';\r
import { unref } from '@vue/reactivity';\r
import { UnwrapNestedRefs } from '@vue/reactivity';\r
import { UnwrapRef } from '@vue/reactivity';\r
import { WritableComputedOptions } from '@vue/reactivity';\r
import { WritableComputedRef } from '@vue/reactivity';\r
\r
/**\r
 * Default allowed non-declared props on component in TSX\r
 */\r
export declare interface AllowedComponentProps {\r
    class?: unknown;\r
    style?: unknown;\r
}\r
\r
export declare interface App<HostElement = any> {\r
    version: string;\r
    config: AppConfig;\r
    use(plugin: Plugin_2, ...options: any[]): this;\r
    mixin(mixin: ComponentOptions): this;\r
    component(name: string): Component | undefined;\r
    component(name: string, component: Component): this;\r
    directive(name: string): Directive | undefined;\r
    directive(name: string, directive: Directive): this;\r
    mount(rootContainer: HostElement | string, isHydrate?: boolean, isSVG?: boolean): ComponentPublicInstance;\r
    unmount(): void;\r
    provide<T>(key: InjectionKey<T> | string, value: T): this;\r
    _uid: number;\r
    _component: ConcreteComponent;\r
    _props: Data | null;\r
    _container: HostElement | null;\r
    _context: AppContext;\r
    _instance: ComponentInternalInstance | null;\r
    /**\r
     * v2 compat only\r
     */\r
    filter?(name: string): Function | undefined;\r
    filter?(name: string, filter: Function): this;\r
    /* Excluded from this release type: _createRoot */\r
}\r
\r
export declare interface AppConfig {\r
    readonly isNativeTag?: (tag: string) => boolean;\r
    performance: boolean;\r
    optionMergeStrategies: Record<string, OptionMergeFunction>;\r
    globalProperties: Record<string, any>;\r
    errorHandler?: (err: unknown, instance: ComponentPublicInstance | null, info: string) => void;\r
    warnHandler?: (msg: string, instance: ComponentPublicInstance | null, trace: string) => void;\r
    /**\r
     * Options to pass to \`@vue/compiler-dom\`.\r
     * Only supported in runtime compiler build.\r
     */\r
    compilerOptions: RuntimeCompilerOptions;\r
    /**\r
     * @deprecated use config.compilerOptions.isCustomElement\r
     */\r
    isCustomElement?: (tag: string) => boolean;\r
    /**\r
     * Temporary config for opt-in to unwrap injected refs.\r
     * TODO deprecate in 3.3\r
     */\r
    unwrapInjectedRef?: boolean;\r
}\r
\r
export declare interface AppContext {\r
    app: App;\r
    config: AppConfig;\r
    mixins: ComponentOptions[];\r
    components: Record<string, Component>;\r
    directives: Record<string, Directive>;\r
    provides: Record<string | symbol, any>;\r
    /* Excluded from this release type: optionsCache */\r
    /* Excluded from this release type: propsCache */\r
    /* Excluded from this release type: emitsCache */\r
    /* Excluded from this release type: reload */\r
    /* Excluded from this release type: filters */\r
}\r
\r
declare interface AppRecord {\r
    id: number;\r
    app: App;\r
    version: string;\r
    types: Record<string, string | Symbol>;\r
}\r
\r
export declare type AsyncComponentLoader<T = any> = () => Promise<AsyncComponentResolveResult<T>>;\r
\r
export declare interface AsyncComponentOptions<T = any> {\r
    loader: AsyncComponentLoader<T>;\r
    loadingComponent?: Component;\r
    errorComponent?: Component;\r
    delay?: number;\r
    timeout?: number;\r
    suspensible?: boolean;\r
    onError?: (error: Error, retry: () => void, fail: () => void, attempts: number) => any;\r
}\r
\r
declare type AsyncComponentResolveResult<T = Component> = T | {\r
    default: T;\r
};\r
\r
export declare const BaseTransition: new () => {\r
    $props: BaseTransitionProps<any>;\r
};\r
\r
export declare interface BaseTransitionProps<HostElement = RendererElement> {\r
    mode?: 'in-out' | 'out-in' | 'default';\r
    appear?: boolean;\r
    persisted?: boolean;\r
    onBeforeEnter?: Hook<(el: HostElement) => void>;\r
    onEnter?: Hook<(el: HostElement, done: () => void) => void>;\r
    onAfterEnter?: Hook<(el: HostElement) => void>;\r
    onEnterCancelled?: Hook<(el: HostElement) => void>;\r
    onBeforeLeave?: Hook<(el: HostElement) => void>;\r
    onLeave?: Hook<(el: HostElement, done: () => void) => void>;\r
    onAfterLeave?: Hook<(el: HostElement) => void>;\r
    onLeaveCancelled?: Hook<(el: HostElement) => void>;\r
    onBeforeAppear?: Hook<(el: HostElement) => void>;\r
    onAppear?: Hook<(el: HostElement, done: () => void) => void>;\r
    onAfterAppear?: Hook<(el: HostElement) => void>;\r
    onAppearCancelled?: Hook<(el: HostElement) => void>;\r
}\r
\r
declare const enum BooleanFlags {\r
    shouldCast = 0,\r
    shouldCastTrue = 1\r
}\r
\r
export declare function callWithAsyncErrorHandling(fn: Function | Function[], instance: ComponentInternalInstance | null, type: ErrorTypes, args?: unknown[]): any[];\r
\r
export declare function callWithErrorHandling(fn: Function, instance: ComponentInternalInstance | null, type: ErrorTypes, args?: unknown[]): any;\r
\r
export { camelize }\r
\r
export { capitalize }\r
\r
/**\r
 * Use this for features with the same syntax but with mutually exclusive\r
 * behavior in 2 vs 3. Only warn if compat is enabled.\r
 * e.g. render function\r
 */\r
declare function checkCompatEnabled(key: DeprecationTypes, instance: ComponentInternalInstance | null, ...args: any[]): boolean;\r
\r
declare interface ClassComponent {\r
    new (...args: any[]): ComponentPublicInstance<any, any, any, any, any>;\r
    __vccOpts: ComponentOptions;\r
}\r
\r
export declare function cloneVNode<T, U>(vnode: VNode<T, U>, extraProps?: (Data & VNodeProps) | null, mergeRef?: boolean): VNode<T, U>;\r
\r
declare const Comment_2: unique symbol;\r
export { Comment_2 as Comment }\r
\r
declare type CompatConfig = Partial<Record<DeprecationTypes, boolean | 'suppress-warning'>> & {\r
    MODE?: 2 | 3 | ((comp: Component | null) => 2 | 3);\r
};\r
\r
/* Excluded from this release type: compatUtils */\r
\r
/**\r
 * @deprecated the default \`Vue\` export has been removed in Vue 3. The type for\r
 * the default export is provided only for migration purposes. Please use\r
 * named imports instead - e.g. \`import { createApp } from 'vue'\`.\r
 */\r
export declare type CompatVue = Pick<App, 'version' | 'component' | 'directive'> & {\r
    configureCompat: typeof configureCompat;\r
    new (options?: ComponentOptions): LegacyPublicInstance;\r
    version: string;\r
    config: AppConfig & LegacyConfig;\r
    nextTick: typeof nextTick;\r
    use(plugin: Plugin_2, ...options: any[]): CompatVue;\r
    mixin(mixin: ComponentOptions): CompatVue;\r
    component(name: string): Component | undefined;\r
    component(name: string, component: Component): CompatVue;\r
    directive(name: string): Directive | undefined;\r
    directive(name: string, directive: Directive): CompatVue;\r
    compile(template: string): RenderFunction;\r
    /**\r
     * @deprecated Vue 3 no longer supports extending constructors.\r
     */\r
    extend: (options?: ComponentOptions) => CompatVue;\r
    /**\r
     * @deprecated Vue 3 no longer needs set() for adding new properties.\r
     */\r
    set(target: any, key: string | number | symbol, value: any): void;\r
    /**\r
     * @deprecated Vue 3 no longer needs delete() for property deletions.\r
     */\r
    delete(target: any, key: string | number | symbol): void;\r
    /**\r
     * @deprecated use \`reactive\` instead.\r
     */\r
    observable: typeof reactive;\r
    /**\r
     * @deprecated filters have been removed from Vue 3.\r
     */\r
    filter(name: string, arg?: any): null;\r
    /* Excluded from this release type: cid */\r
    /* Excluded from this release type: options */\r
    /* Excluded from this release type: util */\r
    /* Excluded from this release type: super */\r
};\r
\r
declare interface CompiledSlotDescriptor {\r
    name: string;\r
    fn: Slot;\r
}\r
\r
/**\r
 * A type used in public APIs where a component type is expected.\r
 * The constructor type is an artificial type returned by defineComponent().\r
 */\r
export declare type Component<Props = any, RawBindings = any, D = any, C extends ComputedOptions = ComputedOptions, M extends MethodOptions = MethodOptions> = ConcreteComponent<Props, RawBindings, D, C, M> | ComponentPublicInstanceConstructor<Props>;\r
\r
/**\r
 * Interface for declaring custom options.\r
 *\r
 * @example\r
 * \`\`\`ts\r
 * declare module '@vue/runtime-core' {\r
 *   interface ComponentCustomOptions {\r
 *     beforeRouteUpdate?(\r
 *       to: Route,\r
 *       from: Route,\r
 *       next: () => void\r
 *     ): void\r
 *   }\r
 * }\r
 * \`\`\`\r
 */\r
export declare interface ComponentCustomOptions {\r
}\r
\r
/**\r
 * Custom properties added to component instances in any way and can be accessed through \`this\`\r
 *\r
 * @example\r
 * Here is an example of adding a property \`$router\` to every component instance:\r
 * \`\`\`ts\r
 * import { createApp } from 'vue'\r
 * import { Router, createRouter } from 'vue-router'\r
 *\r
 * declare module '@vue/runtime-core' {\r
 *   interface ComponentCustomProperties {\r
 *     $router: Router\r
 *   }\r
 * }\r
 *\r
 * // effectively adding the router to every component instance\r
 * const app = createApp({})\r
 * const router = createRouter()\r
 * app.config.globalProperties.$router = router\r
 *\r
 * const vm = app.mount('#app')\r
 * // we can access the router from the instance\r
 * vm.$router.push('/')\r
 * \`\`\`\r
 */\r
export declare interface ComponentCustomProperties {\r
}\r
\r
/**\r
 * For extending allowed non-declared props on components in TSX\r
 */\r
export declare interface ComponentCustomProps {\r
}\r
\r
declare type ComponentInjectOptions = string[] | ObjectInjectOptions;\r
\r
/**\r
 * We expose a subset of properties on the internal instance as they are\r
 * useful for advanced external libraries and tools.\r
 */\r
export declare interface ComponentInternalInstance {\r
    uid: number;\r
    type: ConcreteComponent;\r
    parent: ComponentInternalInstance | null;\r
    root: ComponentInternalInstance;\r
    appContext: AppContext;\r
    /**\r
     * Vnode representing this component in its parent's vdom tree\r
     */\r
    vnode: VNode;\r
    /* Excluded from this release type: next */\r
    /**\r
     * Root vnode of this component's own vdom tree\r
     */\r
    subTree: VNode;\r
    /**\r
     * Render effect instance\r
     */\r
    effect: ReactiveEffect;\r
    /**\r
     * Bound effect runner to be passed to schedulers\r
     */\r
    update: SchedulerJob;\r
    /* Excluded from this release type: render */\r
    /* Excluded from this release type: ssrRender */\r
    /* Excluded from this release type: provides */\r
    /* Excluded from this release type: scope */\r
    /* Excluded from this release type: accessCache */\r
    /* Excluded from this release type: renderCache */\r
    /* Excluded from this release type: components */\r
    /* Excluded from this release type: directives */\r
    /* Excluded from this release type: filters */\r
    /* Excluded from this release type: propsOptions */\r
    /* Excluded from this release type: emitsOptions */\r
    /* Excluded from this release type: inheritAttrs */\r
    /**\r
     * is custom element?\r
     */\r
    isCE?: boolean;\r
    /**\r
     * custom element specific HMR method\r
     */\r
    ceReload?: (newStyles?: string[]) => void;\r
    proxy: ComponentPublicInstance | null;\r
    exposed: Record<string, any> | null;\r
    exposeProxy: Record<string, any> | null;\r
    /* Excluded from this release type: withProxy */\r
    /* Excluded from this release type: ctx */\r
    data: Data;\r
    props: Data;\r
    attrs: Data;\r
    slots: InternalSlots;\r
    refs: Data;\r
    emit: EmitFn;\r
    /* Excluded from this release type: emitted */\r
    /* Excluded from this release type: propsDefaults */\r
    /* Excluded from this release type: setupState */\r
    /* Excluded from this release type: devtoolsRawSetupState */\r
    /* Excluded from this release type: setupContext */\r
    /* Excluded from this release type: suspense */\r
    /* Excluded from this release type: suspenseId */\r
    /* Excluded from this release type: asyncDep */\r
    /* Excluded from this release type: asyncResolved */\r
    isMounted: boolean;\r
    isUnmounted: boolean;\r
    isDeactivated: boolean;\r
    /* Excluded from this release type: bc */\r
    /* Excluded from this release type: c */\r
    /* Excluded from this release type: bm */\r
    /* Excluded from this release type: m */\r
    /* Excluded from this release type: bu */\r
    /* Excluded from this release type: u */\r
    /* Excluded from this release type: bum */\r
    /* Excluded from this release type: um */\r
    /* Excluded from this release type: rtc */\r
    /* Excluded from this release type: rtg */\r
    /* Excluded from this release type: a */\r
    /* Excluded from this release type: da */\r
    /* Excluded from this release type: ec */\r
    /* Excluded from this release type: sp */\r
    /**\r
     * For caching bound $forceUpdate on public proxy access\r
     */\r
    f?: () => void;\r
    /**\r
     * For caching bound $nextTick on public proxy access\r
     */\r
    n?: () => Promise<void>;\r
}\r
\r
declare interface ComponentInternalOptions {\r
    /* Excluded from this release type: __scopeId */\r
    /* Excluded from this release type: __cssModules */\r
    /* Excluded from this release type: __hmrId */\r
    /**\r
     * Compat build only, for bailing out of certain compatibility behavior\r
     */\r
    __isBuiltIn?: boolean;\r
    /**\r
     * This one should be exposed so that devtools can make use of it\r
     */\r
    __file?: string;\r
    /**\r
     * name inferred from filename\r
     */\r
    __name?: string;\r
}\r
\r
export declare type ComponentObjectPropsOptions<P = Data> = {\r
    [K in keyof P]: Prop<P[K]> | null;\r
};\r
\r
export declare type ComponentOptions<Props = {}, RawBindings = any, D = any, C extends ComputedOptions = any, M extends MethodOptions = any, Mixin extends ComponentOptionsMixin = any, Extends extends ComponentOptionsMixin = any, E extends EmitsOptions = any> = ComponentOptionsBase<Props, RawBindings, D, C, M, Mixin, Extends, E> & ThisType<CreateComponentPublicInstance<{}, RawBindings, D, C, M, Mixin, Extends, E, Readonly<Props>>>;\r
\r
export declare interface ComponentOptionsBase<Props, RawBindings, D, C extends ComputedOptions, M extends MethodOptions, Mixin extends ComponentOptionsMixin, Extends extends ComponentOptionsMixin, E extends EmitsOptions, EE extends string = string, Defaults = {}> extends LegacyOptions<Props, D, C, M, Mixin, Extends>, ComponentInternalOptions, ComponentCustomOptions {\r
    setup?: (this: void, props: Readonly<LooseRequired<Props & UnionToIntersection<ExtractOptionProp<Mixin>> & UnionToIntersection<ExtractOptionProp<Extends>>>>, ctx: SetupContext<E>) => Promise<RawBindings> | RawBindings | RenderFunction | void;\r
    name?: string;\r
    template?: string | object;\r
    render?: Function;\r
    components?: Record<string, Component>;\r
    directives?: Record<string, Directive>;\r
    inheritAttrs?: boolean;\r
    emits?: (E | EE[]) & ThisType<void>;\r
    expose?: string[];\r
    serverPrefetch?(): Promise<any>;\r
    compilerOptions?: RuntimeCompilerOptions;\r
    /* Excluded from this release type: ssrRender */\r
    /* Excluded from this release type: __ssrInlineRender */\r
    /* Excluded from this release type: __asyncLoader */\r
    /* Excluded from this release type: __asyncResolved */\r
    call?: (this: unknown, ...args: unknown[]) => never;\r
    __isFragment?: never;\r
    __isTeleport?: never;\r
    __isSuspense?: never;\r
    __defaults?: Defaults;\r
}\r
\r
export declare type ComponentOptionsMixin = ComponentOptionsBase<any, any, any, any, any, any, any, any, any, any>;\r
\r
export declare type ComponentOptionsWithArrayProps<PropNames extends string = string, RawBindings = {}, D = {}, C extends ComputedOptions = {}, M extends MethodOptions = {}, Mixin extends ComponentOptionsMixin = ComponentOptionsMixin, Extends extends ComponentOptionsMixin = ComponentOptionsMixin, E extends EmitsOptions = EmitsOptions, EE extends string = string, Props = Readonly<{\r
    [key in PropNames]?: any;\r
}> & EmitsToProps<E>> = ComponentOptionsBase<Props, RawBindings, D, C, M, Mixin, Extends, E, EE, {}> & {\r
    props: PropNames[];\r
} & ThisType<CreateComponentPublicInstance<Props, RawBindings, D, C, M, Mixin, Extends, E>>;\r
\r
export declare type ComponentOptionsWithObjectProps<PropsOptions = ComponentObjectPropsOptions, RawBindings = {}, D = {}, C extends ComputedOptions = {}, M extends MethodOptions = {}, Mixin extends ComponentOptionsMixin = ComponentOptionsMixin, Extends extends ComponentOptionsMixin = ComponentOptionsMixin, E extends EmitsOptions = EmitsOptions, EE extends string = string, Props = Readonly<ExtractPropTypes<PropsOptions>> & EmitsToProps<E>, Defaults = ExtractDefaultPropTypes<PropsOptions>> = ComponentOptionsBase<Props, RawBindings, D, C, M, Mixin, Extends, E, EE, Defaults> & {\r
    props: PropsOptions & ThisType<void>;\r
} & ThisType<CreateComponentPublicInstance<Props, RawBindings, D, C, M, Mixin, Extends, E, Props, Defaults, false>>;\r
\r
export declare type ComponentOptionsWithoutProps<Props = {}, RawBindings = {}, D = {}, C extends ComputedOptions = {}, M extends MethodOptions = {}, Mixin extends ComponentOptionsMixin = ComponentOptionsMixin, Extends extends ComponentOptionsMixin = ComponentOptionsMixin, E extends EmitsOptions = EmitsOptions, EE extends string = string, PE = Props & EmitsToProps<E>> = ComponentOptionsBase<PE, RawBindings, D, C, M, Mixin, Extends, E, EE, {}> & {\r
    props?: undefined;\r
} & ThisType<CreateComponentPublicInstance<PE, RawBindings, D, C, M, Mixin, Extends, E>>;\r
\r
export declare type ComponentPropsOptions<P = Data> = ComponentObjectPropsOptions<P> | string[];\r
\r
export declare type ComponentProvideOptions = ObjectProvideOptions | Function;\r
\r
export declare type ComponentPublicInstance<P = {}, // props type extracted from props option\r
B = {}, // raw bindings returned from setup()\r
D = {}, // return from data()\r
C extends ComputedOptions = {}, M extends MethodOptions = {}, E extends EmitsOptions = {}, PublicProps = P, Defaults = {}, MakeDefaultsOptional extends boolean = false, Options = ComponentOptionsBase<any, any, any, any, any, any, any, any, any>> = {\r
    $: ComponentInternalInstance;\r
    $data: D;\r
    $props: MakeDefaultsOptional extends true ? Partial<Defaults> & Omit<P & PublicProps, keyof Defaults> : P & PublicProps;\r
    $attrs: Data;\r
    $refs: Data;\r
    $slots: Slots;\r
    $root: ComponentPublicInstance | null;\r
    $parent: ComponentPublicInstance | null;\r
    $emit: EmitFn<E>;\r
    $el: any;\r
    $options: Options & MergedComponentOptionsOverride;\r
    $forceUpdate: () => void;\r
    $nextTick: typeof nextTick;\r
    $watch(source: string | Function, cb: Function, options?: WatchOptions): WatchStopHandle;\r
} & P & ShallowUnwrapRef<B> & UnwrapNestedRefs<D> & ExtractComputedReturns<C> & M & ComponentCustomProperties;\r
\r
declare type ComponentPublicInstanceConstructor<T extends ComponentPublicInstance<Props, RawBindings, D, C, M> = ComponentPublicInstance<any>, Props = any, RawBindings = any, D = any, C extends ComputedOptions = ComputedOptions, M extends MethodOptions = MethodOptions> = {\r
    __isFragment?: never;\r
    __isTeleport?: never;\r
    __isSuspense?: never;\r
    new (...args: any[]): T;\r
};\r
\r
declare type ComponentWatchOptionItem = WatchOptionItem | WatchOptionItem[];\r
\r
declare type ComponentWatchOptions = Record<string, ComponentWatchOptionItem>;\r
\r
export declare const computed: typeof computed_2;\r
\r
export { ComputedGetter }\r
\r
export declare type ComputedOptions = Record<string, ComputedGetter<any> | WritableComputedOptions<any>>;\r
\r
export { ComputedRef }\r
\r
export { ComputedSetter }\r
\r
/**\r
 * Concrete component type matches its actual value: it's either an options\r
 * object, or a function. Use this where the code expects to work with actual\r
 * values, e.g. checking if its a function or not. This is mostly for internal\r
 * implementation code.\r
 */\r
export declare type ConcreteComponent<Props = {}, RawBindings = any, D = any, C extends ComputedOptions = ComputedOptions, M extends MethodOptions = MethodOptions> = ComponentOptions<Props, RawBindings, D, C, M> | FunctionalComponent<Props, any>;\r
\r
declare function configureCompat(config: CompatConfig): void;\r
\r
declare interface Constructor<P = any> {\r
    __isFragment?: never;\r
    __isTeleport?: never;\r
    __isSuspense?: never;\r
    new (...args: any[]): {\r
        $props: P;\r
    };\r
}\r
\r
export declare type CreateAppFunction<HostElement> = (rootComponent: Component, rootProps?: Data | null) => App<HostElement>;\r
\r
/**\r
 * Create a block root vnode. Takes the same exact arguments as \`createVNode\`.\r
 * A block root keeps track of dynamic nodes within the block in the\r
 * \`dynamicChildren\` array.\r
 *\r
 * @private\r
 */\r
export declare function createBlock(type: VNodeTypes | ClassComponent, props?: Record<string, any> | null, children?: any, patchFlag?: number, dynamicProps?: string[]): VNode;\r
\r
/**\r
 * @private\r
 */\r
export declare function createCommentVNode(text?: string, asBlock?: boolean): VNode;\r
\r
declare function createCompatVue(createApp: CreateAppFunction<Element>, createSingletonApp: CreateAppFunction<Element>): CompatVue;\r
\r
declare function createComponentInstance(vnode: VNode, parent: ComponentInternalInstance | null, suspense: SuspenseBoundary | null): ComponentInternalInstance;\r
\r
export declare type CreateComponentPublicInstance<P = {}, B = {}, D = {}, C extends ComputedOptions = {}, M extends MethodOptions = {}, Mixin extends ComponentOptionsMixin = ComponentOptionsMixin, Extends extends ComponentOptionsMixin = ComponentOptionsMixin, E extends EmitsOptions = {}, PublicProps = P, Defaults = {}, MakeDefaultsOptional extends boolean = false, PublicMixin = IntersectionMixin<Mixin> & IntersectionMixin<Extends>, PublicP = UnwrapMixinsType<PublicMixin, 'P'> & EnsureNonVoid<P>, PublicB = UnwrapMixinsType<PublicMixin, 'B'> & EnsureNonVoid<B>, PublicD = UnwrapMixinsType<PublicMixin, 'D'> & EnsureNonVoid<D>, PublicC extends ComputedOptions = UnwrapMixinsType<PublicMixin, 'C'> & EnsureNonVoid<C>, PublicM extends MethodOptions = UnwrapMixinsType<PublicMixin, 'M'> & EnsureNonVoid<M>, PublicDefaults = UnwrapMixinsType<PublicMixin, 'Defaults'> & EnsureNonVoid<Defaults>> = ComponentPublicInstance<PublicP, PublicB, PublicD, PublicC, PublicM, E, PublicProps, PublicDefaults, MakeDefaultsOptional, ComponentOptionsBase<P, B, D, C, M, Mixin, Extends, E, string, Defaults>>;\r
\r
/**\r
 * @private\r
 */\r
export declare function createElementBlock(type: string | typeof Fragment, props?: Record<string, any> | null, children?: any, patchFlag?: number, dynamicProps?: string[], shapeFlag?: number): VNode<RendererNode, RendererElement, {\r
    [key: string]: any;\r
}>;\r
\r
export declare function createElementVNode(type: VNodeTypes | ClassComponent | typeof NULL_DYNAMIC_COMPONENT, props?: (Data & VNodeProps) | null, children?: unknown, patchFlag?: number, dynamicProps?: string[] | null, shapeFlag?: number | ShapeFlags, isBlockNode?: boolean, needFullChildrenNormalization?: boolean): VNode<RendererNode, RendererElement, {\r
    [key: string]: any;\r
}>;\r
\r
export declare function createHydrationRenderer(options: RendererOptions<Node, Element>): HydrationRenderer;\r
\r
/* Excluded from this release type: createPropsRestProxy */\r
\r
declare function createRecord(id: string, initialDef: HMRComponent): boolean;\r
\r
/**\r
 * The createRenderer function accepts two generic arguments:\r
 * HostNode and HostElement, corresponding to Node and Element types in the\r
 * host environment. For example, for runtime-dom, HostNode would be the DOM\r
 * \`Node\` interface and HostElement would be the DOM \`Element\` interface.\r
 *\r
 * Custom renderers can pass in the platform specific types like this:\r
 *\r
 * \`\`\` js\r
 * const { render, createApp } = createRenderer<Node, Element>({\r
 *   patchProp,\r
 *   ...nodeOps\r
 * })\r
 * \`\`\`\r
 */\r
export declare function createRenderer<HostNode = RendererNode, HostElement = RendererElement>(options: RendererOptions<HostNode, HostElement>): Renderer<HostElement>;\r
\r
/**\r
 * Compiler runtime helper for creating dynamic slots object\r
 * @private\r
 */\r
export declare function createSlots(slots: Record<string, Slot>, dynamicSlots: (CompiledSlotDescriptor | CompiledSlotDescriptor[] | undefined)[]): Record<string, Slot>;\r
\r
/**\r
 * @private\r
 */\r
export declare function createStaticVNode(content: string, numberOfNodes: number): VNode;\r
\r
declare function createSuspenseBoundary(vnode: VNode, parent: SuspenseBoundary | null, parentComponent: ComponentInternalInstance | null, container: RendererElement, hiddenContainer: RendererElement, anchor: RendererNode | null, isSVG: boolean, slotScopeIds: string[] | null, optimized: boolean, rendererInternals: RendererInternals, isHydrating?: boolean): SuspenseBoundary;\r
\r
/**\r
 * @private\r
 */\r
export declare function createTextVNode(text?: string, flag?: number): VNode;\r
\r
export declare const createVNode: typeof _createVNode;\r
\r
declare function _createVNode(type: VNodeTypes | ClassComponent | typeof NULL_DYNAMIC_COMPONENT, props?: (Data & VNodeProps) | null, children?: unknown, patchFlag?: number, dynamicProps?: string[] | null, isBlockNode?: boolean): VNode;\r
\r
export { customRef }\r
\r
export { CustomRefFactory }\r
\r
declare type Data = Record<string, unknown>;\r
\r
export { DebuggerEvent }\r
\r
export { DebuggerEventExtraInfo }\r
\r
declare type DebuggerHook = (e: DebuggerEvent) => void;\r
\r
export { DebuggerOptions }\r
\r
export { DeepReadonly }\r
\r
declare type DefaultFactory<T> = (props: Data) => T | null | undefined;\r
\r
declare type DefaultKeys<T> = {\r
    [K in keyof T]: T[K] extends {\r
        default: any;\r
    } | BooleanConstructor | {\r
        type: BooleanConstructor;\r
    } ? T[K] extends {\r
        type: BooleanConstructor;\r
        required: true;\r
    } ? never : K : never;\r
}[keyof T];\r
\r
export declare function defineAsyncComponent<T extends Component = {\r
    new (): ComponentPublicInstance;\r
}>(source: AsyncComponentLoader<T> | AsyncComponentOptions<T>): T;\r
\r
export declare type DefineComponent<PropsOrPropOptions = {}, RawBindings = {}, D = {}, C extends ComputedOptions = ComputedOptions, M extends MethodOptions = MethodOptions, Mixin extends ComponentOptionsMixin = ComponentOptionsMixin, Extends extends ComponentOptionsMixin = ComponentOptionsMixin, E extends EmitsOptions = {}, EE extends string = string, PP = PublicProps, Props = Readonly<PropsOrPropOptions extends ComponentPropsOptions ? ExtractPropTypes<PropsOrPropOptions> : PropsOrPropOptions> & ({} extends E ? {} : EmitsToProps<E>), Defaults = ExtractDefaultPropTypes<PropsOrPropOptions>> = ComponentPublicInstanceConstructor<CreateComponentPublicInstance<Props, RawBindings, D, C, M, Mixin, Extends, E, PP & Props, Defaults, true> & Props> & ComponentOptionsBase<Props, RawBindings, D, C, M, Mixin, Extends, E, EE, Defaults> & PP;\r
\r
export declare function defineComponent<Props, RawBindings = object>(setup: (props: Readonly<Props>, ctx: SetupContext) => RawBindings | RenderFunction): DefineComponent<Props, RawBindings>;\r
\r
export declare function defineComponent<Props = {}, RawBindings = {}, D = {}, C extends ComputedOptions = {}, M extends MethodOptions = {}, Mixin extends ComponentOptionsMixin = ComponentOptionsMixin, Extends extends ComponentOptionsMixin = ComponentOptionsMixin, E extends EmitsOptions = EmitsOptions, EE extends string = string>(options: ComponentOptionsWithoutProps<Props, RawBindings, D, C, M, Mixin, Extends, E, EE>): DefineComponent<Props, RawBindings, D, C, M, Mixin, Extends, E, EE>;\r
\r
export declare function defineComponent<PropNames extends string, RawBindings, D, C extends ComputedOptions = {}, M extends MethodOptions = {}, Mixin extends ComponentOptionsMixin = ComponentOptionsMixin, Extends extends ComponentOptionsMixin = ComponentOptionsMixin, E extends EmitsOptions = Record<string, any>, EE extends string = string>(options: ComponentOptionsWithArrayProps<PropNames, RawBindings, D, C, M, Mixin, Extends, E, EE>): DefineComponent<Readonly<{\r
    [key in PropNames]?: any;\r
}>, RawBindings, D, C, M, Mixin, Extends, E, EE>;\r
\r
export declare function defineComponent<PropsOptions extends Readonly<ComponentPropsOptions>, RawBindings, D, C extends ComputedOptions = {}, M extends MethodOptions = {}, Mixin extends ComponentOptionsMixin = ComponentOptionsMixin, Extends extends ComponentOptionsMixin = ComponentOptionsMixin, E extends EmitsOptions = Record<string, any>, EE extends string = string>(options: ComponentOptionsWithObjectProps<PropsOptions, RawBindings, D, C, M, Mixin, Extends, E, EE>): DefineComponent<PropsOptions, RawBindings, D, C, M, Mixin, Extends, E, EE>;\r
\r
/**\r
 * Vue \`<script setup>\` compiler macro for declaring a component's emitted\r
 * events. The expected argument is the same as the component \`emits\` option.\r
 *\r
 * Example runtime declaration:\r
 * \`\`\`js\r
 * const emit = defineEmits(['change', 'update'])\r
 * \`\`\`\r
 *\r
 * Example type-based declaration:\r
 * \`\`\`ts\r
 * const emit = defineEmits<{\r
 *   (event: 'change'): void\r
 *   (event: 'update', id: number): void\r
 * }>()\r
 *\r
 * emit('change')\r
 * emit('update', 1)\r
 * \`\`\`\r
 *\r
 * This is only usable inside \`<script setup>\`, is compiled away in the\r
 * output and should **not** be actually called at runtime.\r
 */\r
export declare function defineEmits<EE extends string = string>(emitOptions: EE[]): EmitFn<EE[]>;\r
\r
export declare function defineEmits<E extends EmitsOptions = EmitsOptions>(emitOptions: E): EmitFn<E>;\r
\r
export declare function defineEmits<TypeEmit>(): TypeEmit;\r
\r
/**\r
 * Vue \`<script setup>\` compiler macro for declaring a component's exposed\r
 * instance properties when it is accessed by a parent component via template\r
 * refs.\r
 *\r
 * \`<script setup>\` components are closed by default - i.e. variables inside\r
 * the \`<script setup>\` scope is not exposed to parent unless explicitly exposed\r
 * via \`defineExpose\`.\r
 *\r
 * This is only usable inside \`<script setup>\`, is compiled away in the\r
 * output and should **not** be actually called at runtime.\r
 */\r
export declare function defineExpose<Exposed extends Record<string, any> = Record<string, any>>(exposed?: Exposed): void;\r
\r
/**\r
 * Vue \`<script setup>\` compiler macro for declaring component props. The\r
 * expected argument is the same as the component \`props\` option.\r
 *\r
 * Example runtime declaration:\r
 * \`\`\`js\r
 * // using Array syntax\r
 * const props = defineProps(['foo', 'bar'])\r
 * // using Object syntax\r
 * const props = defineProps({\r
 *   foo: String,\r
 *   bar: {\r
 *     type: Number,\r
 *     required: true\r
 *   }\r
 * })\r
 * \`\`\`\r
 *\r
 * Equivalent type-based declaration:\r
 * \`\`\`ts\r
 * // will be compiled into equivalent runtime declarations\r
 * const props = defineProps<{\r
 *   foo?: string\r
 *   bar: number\r
 * }>()\r
 * \`\`\`\r
 *\r
 * This is only usable inside \`<script setup>\`, is compiled away in the\r
 * output and should **not** be actually called at runtime.\r
 */\r
export declare function defineProps<PropNames extends string = string>(props: PropNames[]): Readonly<{\r
    [key in PropNames]?: any;\r
}>;\r
\r
export declare function defineProps<PP extends ComponentObjectPropsOptions = ComponentObjectPropsOptions>(props: PP): Readonly<ExtractPropTypes<PP>>;\r
\r
export declare function defineProps<TypeProps>(): Readonly<TypeProps>;\r
\r
export declare const enum DeprecationTypes {\r
    GLOBAL_MOUNT = "GLOBAL_MOUNT",\r
    GLOBAL_MOUNT_CONTAINER = "GLOBAL_MOUNT_CONTAINER",\r
    GLOBAL_EXTEND = "GLOBAL_EXTEND",\r
    GLOBAL_PROTOTYPE = "GLOBAL_PROTOTYPE",\r
    GLOBAL_SET = "GLOBAL_SET",\r
    GLOBAL_DELETE = "GLOBAL_DELETE",\r
    GLOBAL_OBSERVABLE = "GLOBAL_OBSERVABLE",\r
    GLOBAL_PRIVATE_UTIL = "GLOBAL_PRIVATE_UTIL",\r
    CONFIG_SILENT = "CONFIG_SILENT",\r
    CONFIG_DEVTOOLS = "CONFIG_DEVTOOLS",\r
    CONFIG_KEY_CODES = "CONFIG_KEY_CODES",\r
    CONFIG_PRODUCTION_TIP = "CONFIG_PRODUCTION_TIP",\r
    CONFIG_IGNORED_ELEMENTS = "CONFIG_IGNORED_ELEMENTS",\r
    CONFIG_WHITESPACE = "CONFIG_WHITESPACE",\r
    CONFIG_OPTION_MERGE_STRATS = "CONFIG_OPTION_MERGE_STRATS",\r
    INSTANCE_SET = "INSTANCE_SET",\r
    INSTANCE_DELETE = "INSTANCE_DELETE",\r
    INSTANCE_DESTROY = "INSTANCE_DESTROY",\r
    INSTANCE_EVENT_EMITTER = "INSTANCE_EVENT_EMITTER",\r
    INSTANCE_EVENT_HOOKS = "INSTANCE_EVENT_HOOKS",\r
    INSTANCE_CHILDREN = "INSTANCE_CHILDREN",\r
    INSTANCE_LISTENERS = "INSTANCE_LISTENERS",\r
    INSTANCE_SCOPED_SLOTS = "INSTANCE_SCOPED_SLOTS",\r
    INSTANCE_ATTRS_CLASS_STYLE = "INSTANCE_ATTRS_CLASS_STYLE",\r
    OPTIONS_DATA_FN = "OPTIONS_DATA_FN",\r
    OPTIONS_DATA_MERGE = "OPTIONS_DATA_MERGE",\r
    OPTIONS_BEFORE_DESTROY = "OPTIONS_BEFORE_DESTROY",\r
    OPTIONS_DESTROYED = "OPTIONS_DESTROYED",\r
    WATCH_ARRAY = "WATCH_ARRAY",\r
    PROPS_DEFAULT_THIS = "PROPS_DEFAULT_THIS",\r
    V_ON_KEYCODE_MODIFIER = "V_ON_KEYCODE_MODIFIER",\r
    CUSTOM_DIR = "CUSTOM_DIR",\r
    ATTR_FALSE_VALUE = "ATTR_FALSE_VALUE",\r
    ATTR_ENUMERATED_COERCION = "ATTR_ENUMERATED_COERCION",\r
    TRANSITION_CLASSES = "TRANSITION_CLASSES",\r
    TRANSITION_GROUP_ROOT = "TRANSITION_GROUP_ROOT",\r
    COMPONENT_ASYNC = "COMPONENT_ASYNC",\r
    COMPONENT_FUNCTIONAL = "COMPONENT_FUNCTIONAL",\r
    COMPONENT_V_MODEL = "COMPONENT_V_MODEL",\r
    RENDER_FUNCTION = "RENDER_FUNCTION",\r
    FILTERS = "FILTERS",\r
    PRIVATE_APIS = "PRIVATE_APIS"\r
}\r
\r
export declare let devtools: DevtoolsHook;\r
\r
declare interface DevtoolsHook {\r
    enabled?: boolean;\r
    emit: (event: string, ...payload: any[]) => void;\r
    on: (event: string, handler: Function) => void;\r
    once: (event: string, handler: Function) => void;\r
    off: (event: string, handler: Function) => void;\r
    appRecords: AppRecord[];\r
}\r
\r
export declare type Directive<T = any, V = any> = ObjectDirective<T, V> | FunctionDirective<T, V>;\r
\r
export declare type DirectiveArguments = Array<[Directive] | [Directive, any] | [Directive, any, string] | [Directive, any, string, DirectiveModifiers]>;\r
\r
export declare interface DirectiveBinding<V = any> {\r
    instance: ComponentPublicInstance | null;\r
    value: V;\r
    oldValue: V | null;\r
    arg?: string;\r
    modifiers: DirectiveModifiers;\r
    dir: ObjectDirective<any, V>;\r
}\r
\r
export declare type DirectiveHook<T = any, Prev = VNode<any, T> | null, V = any> = (el: T, binding: DirectiveBinding<V>, vnode: VNode<any, T>, prevVNode: Prev) => void;\r
\r
declare type DirectiveModifiers = Record<string, boolean>;\r
\r
export { effect }\r
\r
export { EffectScheduler }\r
\r
export { EffectScope }\r
\r
export { effectScope }\r
\r
declare type EmitFn<Options = ObjectEmitsOptions, Event extends keyof Options = keyof Options> = Options extends Array<infer V> ? (event: V, ...args: any[]) => void : {} extends Options ? (event: string, ...args: any[]) => void : UnionToIntersection<{\r
    [key in Event]: Options[key] extends (...args: infer Args) => any ? (event: key, ...args: Args) => void : (event: key, ...args: any[]) => void;\r
}[Event]>;\r
\r
export declare type EmitsOptions = ObjectEmitsOptions | string[];\r
\r
declare type EmitsToProps<T extends EmitsOptions> = T extends string[] ? {\r
    [K in string & \`on\${Capitalize<T[number]>}\`]?: (...args: any[]) => any;\r
} : T extends ObjectEmitsOptions ? {\r
    [K in string & \`on\${Capitalize<string & keyof T>}\`]?: K extends \`on\${infer C}\` ? T[Uncapitalize<C>] extends null ? (...args: any[]) => any : (...args: T[Uncapitalize<C>] extends (...args: infer P) => any ? P : never) => any : never;\r
} : {};\r
\r
declare type EnsureNonVoid<T> = T extends void ? {} : T;\r
\r
declare type ErrorCapturedHook<TError = unknown> = (err: TError, instance: ComponentPublicInstance | null, info: string) => boolean | void;\r
\r
export declare const enum ErrorCodes {\r
    SETUP_FUNCTION = 0,\r
    RENDER_FUNCTION = 1,\r
    WATCH_GETTER = 2,\r
    WATCH_CALLBACK = 3,\r
    WATCH_CLEANUP = 4,\r
    NATIVE_EVENT_HANDLER = 5,\r
    COMPONENT_EVENT_HANDLER = 6,\r
    VNODE_HOOK = 7,\r
    DIRECTIVE_HOOK = 8,\r
    TRANSITION_HOOK = 9,\r
    APP_ERROR_HANDLER = 10,\r
    APP_WARN_HANDLER = 11,\r
    FUNCTION_REF = 12,\r
    ASYNC_COMPONENT_LOADER = 13,\r
    SCHEDULER = 14\r
}\r
\r
declare type ErrorTypes = LifecycleHooks | ErrorCodes;\r
\r
declare type ExtractComputedReturns<T extends any> = {\r
    [key in keyof T]: T[key] extends {\r
        get: (...args: any[]) => infer TReturn;\r
    } ? TReturn : T[key] extends (...args: any[]) => infer TReturn ? TReturn : never;\r
};\r
\r
export declare type ExtractDefaultPropTypes<O> = O extends object ? {\r
    [K in keyof Pick<O, DefaultKeys<O>>]: InferPropType<O[K]>;\r
} : {};\r
\r
declare type ExtractMixin<T> = {\r
    Mixin: MixinToOptionTypes<T>;\r
}[T extends ComponentOptionsMixin ? 'Mixin' : never];\r
\r
declare type ExtractOptionProp<T> = T extends ComponentOptionsBase<infer P, // Props\r
any, // RawBindings\r
any, // D\r
any, // C\r
any, // M\r
any, // Mixin\r
any, // Extends\r
any> ? unknown extends P ? {} : P : {};\r
\r
export declare type ExtractPropTypes<O> = {\r
    [K in keyof Pick<O, RequiredKeys<O>>]: InferPropType<O[K]>;\r
} & {\r
    [K in keyof Pick<O, OptionalKeys<O>>]?: InferPropType<O[K]>;\r
};\r
\r
export declare const Fragment: {\r
    new (): {\r
        $props: VNodeProps;\r
    };\r
    __isFragment: true;\r
};\r
\r
export declare interface FunctionalComponent<P = {}, E extends EmitsOptions = {}> extends ComponentInternalOptions {\r
    (props: P, ctx: Omit<SetupContext<E>, 'expose'>): any;\r
    props?: ComponentPropsOptions<P>;\r
    emits?: E | (keyof E)[];\r
    inheritAttrs?: boolean;\r
    displayName?: string;\r
    compatConfig?: CompatConfig;\r
}\r
\r
export declare type FunctionDirective<T = any, V = any> = DirectiveHook<T, any, V>;\r
\r
export declare const getCurrentInstance: () => ComponentInternalInstance | null;\r
\r
export { getCurrentScope }\r
\r
export declare function getTransitionRawChildren(children: VNode[], keepComment?: boolean, parentKey?: VNode['key']): VNode[];\r
\r
export declare function guardReactiveProps(props: (Data & VNodeProps) | null): (Data & VNodeProps) | null;\r
\r
export declare function h(type: string, children?: RawChildren): VNode;\r
\r
export declare function h(type: string, props?: RawProps | null, children?: RawChildren | RawSlots): VNode;\r
\r
export declare function h(type: typeof Text_2 | typeof Comment_2, children?: string | number | boolean): VNode;\r
\r
export declare function h(type: typeof Text_2 | typeof Comment_2, props?: null, children?: string | number | boolean): VNode;\r
\r
export declare function h(type: typeof Fragment, children?: VNodeArrayChildren): VNode;\r
\r
export declare function h(type: typeof Fragment, props?: RawProps | null, children?: VNodeArrayChildren): VNode;\r
\r
export declare function h(type: typeof Teleport, props: RawProps & TeleportProps, children: RawChildren): VNode;\r
\r
export declare function h(type: typeof Suspense, children?: RawChildren): VNode;\r
\r
export declare function h(type: typeof Suspense, props?: (RawProps & SuspenseProps) | null, children?: RawChildren | RawSlots): VNode;\r
\r
export declare function h<P, E extends EmitsOptions = {}>(type: FunctionalComponent<P, E>, props?: (RawProps & P) | ({} extends P ? null : never), children?: RawChildren | RawSlots): VNode;\r
\r
export declare function h(type: Component, children?: RawChildren): VNode;\r
\r
export declare function h<P>(type: ConcreteComponent | string, children?: RawChildren): VNode;\r
\r
export declare function h<P>(type: ConcreteComponent<P> | string, props?: (RawProps & P) | ({} extends P ? null : never), children?: RawChildren): VNode;\r
\r
export declare function h(type: Component, props: null, children?: RawChildren | RawSlots): VNode;\r
\r
export declare function h<P>(type: ComponentOptions<P>, props?: (RawProps & P) | ({} extends P ? null : never), children?: RawChildren | RawSlots): VNode;\r
\r
export declare function h(type: Constructor, children?: RawChildren): VNode;\r
\r
export declare function h<P>(type: Constructor<P>, props?: (RawProps & P) | ({} extends P ? null : never), children?: RawChildren | RawSlots): VNode;\r
\r
export declare function h(type: DefineComponent, children?: RawChildren): VNode;\r
\r
export declare function h<P>(type: DefineComponent<P>, props?: (RawProps & P) | ({} extends P ? null : never), children?: RawChildren | RawSlots): VNode;\r
\r
export declare function handleError(err: unknown, instance: ComponentInternalInstance | null, type: ErrorTypes, throwInDev?: boolean): void;\r
\r
declare type HMRComponent = ComponentOptions | ClassComponent;\r
\r
export declare interface HMRRuntime {\r
    createRecord: typeof createRecord;\r
    rerender: typeof rerender;\r
    reload: typeof reload;\r
}\r
\r
declare type Hook<T = () => void> = T | T[];\r
\r
declare function hydrateSuspense(node: Node, vnode: VNode, parentComponent: ComponentInternalInstance | null, parentSuspense: SuspenseBoundary | null, isSVG: boolean, slotScopeIds: string[] | null, optimized: boolean, rendererInternals: RendererInternals, hydrateNode: (node: Node, vnode: VNode, parentComponent: ComponentInternalInstance | null, parentSuspense: SuspenseBoundary | null, slotScopeIds: string[] | null, optimized: boolean) => Node | null): Node | null;\r
\r
declare function hydrateTeleport(node: Node, vnode: TeleportVNode, parentComponent: ComponentInternalInstance | null, parentSuspense: SuspenseBoundary | null, slotScopeIds: string[] | null, optimized: boolean, { o: { nextSibling, parentNode, querySelector } }: RendererInternals<Node, Element>, hydrateChildren: (node: Node | null, vnode: VNode, container: Element, parentComponent: ComponentInternalInstance | null, parentSuspense: SuspenseBoundary | null, slotScopeIds: string[] | null, optimized: boolean) => Node | null): Node | null;\r
\r
export declare interface HydrationRenderer extends Renderer<Element | ShadowRoot> {\r
    hydrate: RootHydrateFunction;\r
}\r
\r
declare type InferDefault<P, T> = T extends null | number | string | boolean | symbol | Function ? T | ((props: P) => T) : (props: P) => T;\r
\r
declare type InferDefaults<T> = {\r
    [K in keyof T]?: InferDefault<T, NotUndefined<T[K]>>;\r
};\r
\r
declare type InferPropType<T> = [T] extends [null] ? any : [T] extends [{\r
    type: null | true;\r
}] ? any : [T] extends [ObjectConstructor | {\r
    type: ObjectConstructor;\r
}] ? Record<string, any> : [T] extends [BooleanConstructor | {\r
    type: BooleanConstructor;\r
}] ? boolean : [T] extends [DateConstructor | {\r
    type: DateConstructor;\r
}] ? Date : [T] extends [(infer U)[] | {\r
    type: (infer U)[];\r
}] ? U extends DateConstructor ? Date | InferPropType<U> : InferPropType<U> : [T] extends [Prop<infer V, infer D>] ? unknown extends V ? IfAny<V, V, D> : V : T;\r
\r
export declare function initCustomFormatter(): void;\r
\r
export declare function inject<T>(key: InjectionKey<T> | string): T | undefined;\r
\r
export declare function inject<T>(key: InjectionKey<T> | string, defaultValue: T, treatDefaultAsFactory?: false): T;\r
\r
export declare function inject<T>(key: InjectionKey<T> | string, defaultValue: T | (() => T), treatDefaultAsFactory: true): T;\r
\r
export declare interface InjectionKey<T> extends Symbol {\r
}\r
\r
/* Excluded from this release type: InternalRenderFunction */\r
\r
declare type InternalSlots = {\r
    [name: string]: Slot | undefined;\r
};\r
\r
declare type IntersectionMixin<T> = IsDefaultMixinComponent<T> extends true ? OptionTypesType<{}, {}, {}, {}, {}> : UnionToIntersection<ExtractMixin<T>>;\r
\r
declare function isCompatEnabled(key: DeprecationTypes, instance: ComponentInternalInstance | null, enableForBuiltIn?: boolean): boolean;\r
\r
declare type IsDefaultMixinComponent<T> = T extends ComponentOptionsMixin ? ComponentOptionsMixin extends T ? true : false : false;\r
\r
export declare function isMemoSame(cached: VNode, memo: any[]): boolean;\r
\r
export { isProxy }\r
\r
export { isReactive }\r
\r
export { isReadonly }\r
\r
export { isRef }\r
\r
export declare const isRuntimeOnly: () => boolean;\r
\r
export { isShallow }\r
\r
export declare function isVNode(value: any): value is VNode;\r
\r
export declare const KeepAlive: {\r
    new (): {\r
        $props: VNodeProps & KeepAliveProps;\r
    };\r
    __isKeepAlive: true;\r
};\r
\r
export declare interface KeepAliveProps {\r
    include?: MatchPattern;\r
    exclude?: MatchPattern;\r
    max?: number | string;\r
}\r
\r
export declare type LegacyConfig = {\r
    /**\r
     * @deprecated \`config.silent\` option has been removed\r
     */\r
    silent?: boolean;\r
    /**\r
     * @deprecated use false compile-time feature flag instead\r
     * https://github.com/vuejs/core/tree/main/packages/vue#bundler-build-feature-flags\r
     */\r
    devtools?: boolean;\r
    /**\r
     * @deprecated use \`config.isCustomElement\` instead\r
     * https://v3-migration.vuejs.org/breaking-changes/global-api.html#config-ignoredelements-is-now-config-iscustomelement\r
     */\r
    ignoredElements?: (string | RegExp)[];\r
    /**\r
     * @deprecated\r
     * https://v3-migration.vuejs.org/breaking-changes/keycode-modifiers.html\r
     */\r
    keyCodes?: Record<string, number | number[]>;\r
    /**\r
     * @deprecated\r
     * https://v3-migration.vuejs.org/breaking-changes/global-api.html#config-productiontip-removed\r
     */\r
    productionTip?: boolean;\r
};\r
\r
declare interface LegacyOptions<Props, D, C extends ComputedOptions, M extends MethodOptions, Mixin extends ComponentOptionsMixin, Extends extends ComponentOptionsMixin> {\r
    compatConfig?: CompatConfig;\r
    [key: string]: any;\r
    data?: (this: CreateComponentPublicInstance<Props, {}, {}, {}, MethodOptions, Mixin, Extends>, vm: CreateComponentPublicInstance<Props, {}, {}, {}, MethodOptions, Mixin, Extends>) => D;\r
    computed?: C;\r
    methods?: M;\r
    watch?: ComponentWatchOptions;\r
    provide?: ComponentProvideOptions;\r
    inject?: ComponentInjectOptions;\r
    filters?: Record<string, Function>;\r
    mixins?: Mixin[];\r
    extends?: Extends;\r
    beforeCreate?(): void;\r
    created?(): void;\r
    beforeMount?(): void;\r
    mounted?(): void;\r
    beforeUpdate?(): void;\r
    updated?(): void;\r
    activated?(): void;\r
    deactivated?(): void;\r
    /** @deprecated use \`beforeUnmount\` instead */\r
    beforeDestroy?(): void;\r
    beforeUnmount?(): void;\r
    /** @deprecated use \`unmounted\` instead */\r
    destroyed?(): void;\r
    unmounted?(): void;\r
    renderTracked?: DebuggerHook;\r
    renderTriggered?: DebuggerHook;\r
    errorCaptured?: ErrorCapturedHook;\r
    /**\r
     * runtime compile only\r
     * @deprecated use \`compilerOptions.delimiters\` instead.\r
     */\r
    delimiters?: [string, string];\r
    /**\r
     * #3468\r
     *\r
     * type-only, used to assist Mixin's type inference,\r
     * typescript will try to simplify the inferred \`Mixin\` type,\r
     * with the \`__differentiator\`, typescript won't be able to combine different mixins,\r
     * because the \`__differentiator\` will be different\r
     */\r
    __differentiator?: keyof D | keyof C | keyof M;\r
}\r
\r
declare type LegacyPublicInstance = ComponentPublicInstance & LegacyPublicProperties;\r
\r
declare interface LegacyPublicProperties {\r
    $set(target: object, key: string, value: any): void;\r
    $delete(target: object, key: string): void;\r
    $mount(el?: string | Element): this;\r
    $destroy(): void;\r
    $scopedSlots: Slots;\r
    $on(event: string | string[], fn: Function): this;\r
    $once(event: string, fn: Function): this;\r
    $off(event?: string | string[], fn?: Function): this;\r
    $children: LegacyPublicProperties[];\r
    $listeners: Record<string, Function | Function[]>;\r
}\r
\r
declare type LifecycleHook<TFn = Function> = TFn[] | null;\r
\r
declare const enum LifecycleHooks {\r
    BEFORE_CREATE = "bc",\r
    CREATED = "c",\r
    BEFORE_MOUNT = "bm",\r
    MOUNTED = "m",\r
    BEFORE_UPDATE = "bu",\r
    UPDATED = "u",\r
    BEFORE_UNMOUNT = "bum",\r
    UNMOUNTED = "um",\r
    DEACTIVATED = "da",\r
    ACTIVATED = "a",\r
    RENDER_TRIGGERED = "rtg",\r
    RENDER_TRACKED = "rtc",\r
    ERROR_CAPTURED = "ec",\r
    SERVER_PREFETCH = "sp"\r
}\r
\r
declare type MapSources<T, Immediate> = {\r
    [K in keyof T]: T[K] extends WatchSource<infer V> ? Immediate extends true ? V | undefined : V : T[K] extends object ? Immediate extends true ? T[K] | undefined : T[K] : never;\r
};\r
\r
export { markRaw }\r
\r
declare type MatchPattern = string | RegExp | (string | RegExp)[];\r
\r
declare type MergedComponentOptions = ComponentOptions & MergedComponentOptionsOverride;\r
\r
declare type MergedComponentOptionsOverride = {\r
    beforeCreate?: MergedHook;\r
    created?: MergedHook;\r
    beforeMount?: MergedHook;\r
    mounted?: MergedHook;\r
    beforeUpdate?: MergedHook;\r
    updated?: MergedHook;\r
    activated?: MergedHook;\r
    deactivated?: MergedHook;\r
    /** @deprecated use \`beforeUnmount\` instead */\r
    beforeDestroy?: MergedHook;\r
    beforeUnmount?: MergedHook;\r
    /** @deprecated use \`unmounted\` instead */\r
    destroyed?: MergedHook;\r
    unmounted?: MergedHook;\r
    renderTracked?: MergedHook<DebuggerHook>;\r
    renderTriggered?: MergedHook<DebuggerHook>;\r
    errorCaptured?: MergedHook<ErrorCapturedHook>;\r
};\r
\r
/* Excluded from this release type: mergeDefaults */\r
\r
declare type MergedHook<T = () => void> = T | T[];\r
\r
export declare function mergeProps(...args: (Data & VNodeProps)[]): Data;\r
\r
export declare interface MethodOptions {\r
    [key: string]: Function;\r
}\r
\r
declare type MixinToOptionTypes<T> = T extends ComponentOptionsBase<infer P, infer B, infer D, infer C, infer M, infer Mixin, infer Extends, any, any, infer Defaults> ? OptionTypesType<P & {}, B & {}, D & {}, C & {}, M & {}, Defaults & {}> & IntersectionMixin<Mixin> & IntersectionMixin<Extends> : never;\r
\r
declare type MountChildrenFn = (children: VNodeArrayChildren, container: RendererElement, anchor: RendererNode | null, parentComponent: ComponentInternalInstance | null, parentSuspense: SuspenseBoundary | null, isSVG: boolean, slotScopeIds: string[] | null, optimized: boolean, start?: number) => void;\r
\r
declare type MountComponentFn = (initialVNode: VNode, container: RendererElement, anchor: RendererNode | null, parentComponent: ComponentInternalInstance | null, parentSuspense: SuspenseBoundary | null, isSVG: boolean, optimized: boolean) => void;\r
\r
declare type MoveFn = (vnode: VNode, container: RendererElement, anchor: RendererNode | null, type: MoveType, parentSuspense?: SuspenseBoundary | null) => void;\r
\r
declare function moveTeleport(vnode: VNode, container: RendererElement, parentAnchor: RendererNode | null, { o: { insert }, m: move }: RendererInternals, moveType?: TeleportMoveTypes): void;\r
\r
declare const enum MoveType {\r
    ENTER = 0,\r
    LEAVE = 1,\r
    REORDER = 2\r
}\r
\r
declare type MultiWatchSources = (WatchSource<unknown> | object)[];\r
\r
declare type NextFn = (vnode: VNode) => RendererNode | null;\r
\r
export declare function nextTick<T = void>(this: T, fn?: (this: T) => void): Promise<void>;\r
\r
export { normalizeClass }\r
\r
declare type NormalizedProp = null | (PropOptions & {\r
    [BooleanFlags.shouldCast]?: boolean;\r
    [BooleanFlags.shouldCastTrue]?: boolean;\r
});\r
\r
declare type NormalizedProps = Record<string, NormalizedProp>;\r
\r
declare type NormalizedPropsOptions = [NormalizedProps, string[]] | [];\r
\r
export { normalizeProps }\r
\r
export { normalizeStyle }\r
\r
declare function normalizeSuspenseChildren(vnode: VNode): void;\r
\r
declare function normalizeVNode(child: VNodeChild): VNode;\r
\r
declare type NotUndefined<T> = T extends undefined ? never : T;\r
\r
declare const NULL_DYNAMIC_COMPONENT: unique symbol;\r
\r
export declare interface ObjectDirective<T = any, V = any> {\r
    created?: DirectiveHook<T, null, V>;\r
    beforeMount?: DirectiveHook<T, null, V>;\r
    mounted?: DirectiveHook<T, null, V>;\r
    beforeUpdate?: DirectiveHook<T, VNode<any, T>, V>;\r
    updated?: DirectiveHook<T, VNode<any, T>, V>;\r
    beforeUnmount?: DirectiveHook<T, null, V>;\r
    unmounted?: DirectiveHook<T, null, V>;\r
    getSSRProps?: SSRDirectiveHook;\r
    deep?: boolean;\r
}\r
\r
export declare type ObjectEmitsOptions = Record<string, ((...args: any[]) => any) | null>;\r
\r
declare type ObjectInjectOptions = Record<string | symbol, string | symbol | {\r
    from?: string | symbol;\r
    default?: unknown;\r
}>;\r
\r
declare type ObjectProvideOptions = Record<string | symbol, unknown>;\r
\r
declare type ObjectWatchOptionItem = {\r
    handler: WatchCallback | string;\r
} & WatchOptions;\r
\r
export declare function onActivated(hook: Function, target?: ComponentInternalInstance | null): void;\r
\r
export declare const onBeforeMount: (hook: () => any, target?: ComponentInternalInstance | null) => false | Function | undefined;\r
\r
export declare const onBeforeUnmount: (hook: () => any, target?: ComponentInternalInstance | null) => false | Function | undefined;\r
\r
export declare const onBeforeUpdate: (hook: () => any, target?: ComponentInternalInstance | null) => false | Function | undefined;\r
\r
declare type OnCleanup = (cleanupFn: () => void) => void;\r
\r
export declare function onDeactivated(hook: Function, target?: ComponentInternalInstance | null): void;\r
\r
export declare function onErrorCaptured<TError = Error>(hook: ErrorCapturedHook<TError>, target?: ComponentInternalInstance | null): void;\r
\r
export declare const onMounted: (hook: () => any, target?: ComponentInternalInstance | null) => false | Function | undefined;\r
\r
export declare const onRenderTracked: (hook: DebuggerHook, target?: ComponentInternalInstance | null) => false | Function | undefined;\r
\r
export declare const onRenderTriggered: (hook: DebuggerHook, target?: ComponentInternalInstance | null) => false | Function | undefined;\r
\r
export { onScopeDispose }\r
\r
export declare const onServerPrefetch: (hook: () => any, target?: ComponentInternalInstance | null) => false | Function | undefined;\r
\r
export declare const onUnmounted: (hook: () => any, target?: ComponentInternalInstance | null) => false | Function | undefined;\r
\r
export declare const onUpdated: (hook: () => any, target?: ComponentInternalInstance | null) => false | Function | undefined;\r
\r
/**\r
 * Open a block.\r
 * This must be called before \`createBlock\`. It cannot be part of \`createBlock\`\r
 * because the children of the block are evaluated before \`createBlock\` itself\r
 * is called. The generated code typically looks like this:\r
 *\r
 * \`\`\`js\r
 * function render() {\r
 *   return (openBlock(),createBlock('div', null, [...]))\r
 * }\r
 * \`\`\`\r
 * disableTracking is true when creating a v-for fragment block, since a v-for\r
 * fragment always diffs its children.\r
 *\r
 * @private\r
 */\r
export declare function openBlock(disableTracking?: boolean): void;\r
\r
declare type OptionalKeys<T> = Exclude<keyof T, RequiredKeys<T>>;\r
\r
export declare type OptionMergeFunction = (to: unknown, from: unknown) => any;\r
\r
declare type OptionTypesKeys = 'P' | 'B' | 'D' | 'C' | 'M' | 'Defaults';\r
\r
declare type OptionTypesType<P = {}, B = {}, D = {}, C extends ComputedOptions = {}, M extends MethodOptions = {}, Defaults = {}> = {\r
    P: P;\r
    B: B;\r
    D: D;\r
    C: C;\r
    M: M;\r
    Defaults: Defaults;\r
};\r
\r
declare type PatchBlockChildrenFn = (oldChildren: VNode[], newChildren: VNode[], fallbackContainer: RendererElement, parentComponent: ComponentInternalInstance | null, parentSuspense: SuspenseBoundary | null, isSVG: boolean, slotScopeIds: string[] | null) => void;\r
\r
declare type PatchChildrenFn = (n1: VNode | null, n2: VNode, container: RendererElement, anchor: RendererNode | null, parentComponent: ComponentInternalInstance | null, parentSuspense: SuspenseBoundary | null, isSVG: boolean, slotScopeIds: string[] | null, optimized: boolean) => void;\r
\r
declare type PatchFn = (n1: VNode | null, // null means this is a mount\r
n2: VNode, container: RendererElement, anchor?: RendererNode | null, parentComponent?: ComponentInternalInstance | null, parentSuspense?: SuspenseBoundary | null, isSVG?: boolean, slotScopeIds?: string[] | null, optimized?: boolean) => void;\r
\r
declare type Plugin_2 = (PluginInstallFunction & {\r
    install?: PluginInstallFunction;\r
}) | {\r
    install: PluginInstallFunction;\r
};\r
export { Plugin_2 as Plugin }\r
\r
declare type PluginInstallFunction = (app: App, ...options: any[]) => any;\r
\r
/**\r
 * Technically we no longer need this after 3.0.8 but we need to keep the same\r
 * API for backwards compat w/ code generated by compilers.\r
 * @private\r
 */\r
export declare function popScopeId(): void;\r
\r
export declare type Prop<T, D = T> = PropOptions<T, D> | PropType<T>;\r
\r
declare type PropConstructor<T = any> = {\r
    new (...args: any[]): T & {};\r
} | {\r
    (): T;\r
} | PropMethod<T>;\r
\r
declare type PropMethod<T, TConstructor = any> = [T] extends [\r
((...args: any) => any) | undefined\r
] ? {\r
    new (): TConstructor;\r
    (): T;\r
    readonly prototype: TConstructor;\r
} : never;\r
\r
declare interface PropOptions<T = any, D = T> {\r
    type?: PropType<T> | true | null;\r
    required?: boolean;\r
    default?: D | DefaultFactory<D> | null | undefined | object;\r
    validator?(value: unknown): boolean;\r
}\r
\r
declare type PropsWithDefaults<Base, Defaults> = Base & {\r
    [K in keyof Defaults]: K extends keyof Base ? NotUndefined<Base[K]> : never;\r
};\r
\r
export declare type PropType<T> = PropConstructor<T> | PropConstructor<T>[];\r
\r
export declare function provide<T>(key: InjectionKey<T> | string | number, value: T): void;\r
\r
export { proxyRefs }\r
\r
declare type PublicProps = VNodeProps & AllowedComponentProps & ComponentCustomProps;\r
\r
/**\r
 * Set scope id when creating hoisted vnodes.\r
 * @private compiler helper\r
 */\r
export declare function pushScopeId(id: string | null): void;\r
\r
export declare function queuePostFlushCb(cb: SchedulerJobs): void;\r
\r
declare type RawChildren = string | number | boolean | VNode | VNodeArrayChildren | (() => any);\r
\r
declare type RawProps = VNodeProps & {\r
    __v_isVNode?: never;\r
    [Symbol.iterator]?: never;\r
} & Record<string, any>;\r
\r
declare type RawSlots = {\r
    [name: string]: unknown;\r
    $stable?: boolean;\r
    /* Excluded from this release type: _ctx */\r
    /* Excluded from this release type: _ */\r
};\r
\r
export { reactive }\r
\r
export { ReactiveEffect }\r
\r
export { ReactiveEffectOptions }\r
\r
export { ReactiveEffectRunner }\r
\r
export { ReactiveFlags }\r
\r
export { readonly }\r
\r
export { Ref }\r
\r
export { ref }\r
\r
/**\r
 * For runtime-dom to register the compiler.\r
 * Note the exported method uses any to avoid d.ts relying on the compiler types.\r
 */\r
export declare function registerRuntimeCompiler(_compile: any): void;\r
\r
declare function reload(id: string, newComp: HMRComponent): void;\r
\r
declare type RemoveFn = (vnode: VNode) => void;\r
\r
declare function renderComponentRoot(instance: ComponentInternalInstance): VNode;\r
\r
export declare interface Renderer<HostElement = RendererElement> {\r
    render: RootRenderFunction<HostElement>;\r
    createApp: CreateAppFunction<HostElement>;\r
}\r
\r
export declare interface RendererElement extends RendererNode {\r
}\r
\r
declare interface RendererInternals<HostNode = RendererNode, HostElement = RendererElement> {\r
    p: PatchFn;\r
    um: UnmountFn;\r
    r: RemoveFn;\r
    m: MoveFn;\r
    mt: MountComponentFn;\r
    mc: MountChildrenFn;\r
    pc: PatchChildrenFn;\r
    pbc: PatchBlockChildrenFn;\r
    n: NextFn;\r
    o: RendererOptions<HostNode, HostElement>;\r
}\r
\r
export declare interface RendererNode {\r
    [key: string]: any;\r
}\r
\r
export declare interface RendererOptions<HostNode = RendererNode, HostElement = RendererElement> {\r
    patchProp(el: HostElement, key: string, prevValue: any, nextValue: any, isSVG?: boolean, prevChildren?: VNode<HostNode, HostElement>[], parentComponent?: ComponentInternalInstance | null, parentSuspense?: SuspenseBoundary | null, unmountChildren?: UnmountChildrenFn): void;\r
    insert(el: HostNode, parent: HostElement, anchor?: HostNode | null): void;\r
    remove(el: HostNode): void;\r
    createElement(type: string, isSVG?: boolean, isCustomizedBuiltIn?: string, vnodeProps?: (VNodeProps & {\r
        [key: string]: any;\r
    }) | null): HostElement;\r
    createText(text: string): HostNode;\r
    createComment(text: string): HostNode;\r
    setText(node: HostNode, text: string): void;\r
    setElementText(node: HostElement, text: string): void;\r
    parentNode(node: HostNode): HostElement | null;\r
    nextSibling(node: HostNode): HostNode | null;\r
    querySelector?(selector: string): HostElement | null;\r
    setScopeId?(el: HostElement, id: string): void;\r
    cloneNode?(node: HostNode): HostNode;\r
    insertStaticContent?(content: string, parent: HostElement, anchor: HostNode | null, isSVG: boolean, start?: HostNode | null, end?: HostNode | null): [HostNode, HostNode];\r
}\r
\r
export declare type RenderFunction = () => VNodeChild;\r
\r
/**\r
 * v-for string\r
 * @private\r
 */\r
export declare function renderList(source: string, renderItem: (value: string, index: number) => VNodeChild): VNodeChild[];\r
\r
/**\r
 * v-for number\r
 */\r
export declare function renderList(source: number, renderItem: (value: number, index: number) => VNodeChild): VNodeChild[];\r
\r
/**\r
 * v-for array\r
 */\r
export declare function renderList<T>(source: T[], renderItem: (value: T, index: number) => VNodeChild): VNodeChild[];\r
\r
/**\r
 * v-for iterable\r
 */\r
export declare function renderList<T>(source: Iterable<T>, renderItem: (value: T, index: number) => VNodeChild): VNodeChild[];\r
\r
/**\r
 * v-for object\r
 */\r
export declare function renderList<T>(source: T, renderItem: <K extends keyof T>(value: T[K], key: K, index: number) => VNodeChild): VNodeChild[];\r
\r
/**\r
 * Compiler runtime helper for rendering \`<slot/>\`\r
 * @private\r
 */\r
export declare function renderSlot(slots: Slots, name: string, props?: Data, fallback?: () => VNodeArrayChildren, noSlotted?: boolean): VNode;\r
\r
declare type RequiredKeys<T> = {\r
    [K in keyof T]: T[K] extends {\r
        required: true;\r
    } | {\r
        default: any;\r
    } | BooleanConstructor | {\r
        type: BooleanConstructor;\r
    } ? T[K] extends {\r
        default: undefined | (() => undefined);\r
    } ? never : K : never;\r
}[keyof T];\r
\r
declare function rerender(id: string, newRender?: Function): void;\r
\r
/**\r
 * @private\r
 */\r
export declare function resolveComponent(name: string, maybeSelfReference?: boolean): ConcreteComponent | string;\r
\r
/**\r
 * @private\r
 */\r
export declare function resolveDirective(name: string): Directive | undefined;\r
\r
/**\r
 * @private\r
 */\r
export declare function resolveDynamicComponent(component: unknown): VNodeTypes;\r
\r
/* Excluded from this release type: resolveFilter */\r
\r
/* Excluded from this release type: resolveFilter_2 */\r
\r
export declare function resolveTransitionHooks(vnode: VNode, props: BaseTransitionProps<any>, state: TransitionState, instance: ComponentInternalInstance): TransitionHooks;\r
\r
export declare type RootHydrateFunction = (vnode: VNode<Node, Element>, container: (Element | ShadowRoot) & {\r
    _vnode?: VNode;\r
}) => void;\r
\r
export declare type RootRenderFunction<HostElement = RendererElement> = (vnode: VNode | null, container: HostElement, isSVG?: boolean) => void;\r
\r
/**\r
 * Subset of compiler options that makes sense for the runtime.\r
 */\r
export declare interface RuntimeCompilerOptions {\r
    isCustomElement?: (tag: string) => boolean;\r
    whitespace?: 'preserve' | 'condense';\r
    comments?: boolean;\r
    delimiters?: [string, string];\r
}\r
\r
declare interface SchedulerJob extends Function {\r
    id?: number;\r
    active?: boolean;\r
    computed?: boolean;\r
    /**\r
     * Indicates whether the effect is allowed to recursively trigger itself\r
     * when managed by the scheduler.\r
     *\r
     * By default, a job cannot trigger itself because some built-in method calls,\r
     * e.g. Array.prototype.push actually performs reads as well (#1740) which\r
     * can lead to confusing infinite loops.\r
     * The allowed cases are component update functions and watch callbacks.\r
     * Component update functions may update child component props, which in turn\r
     * trigger flush: "pre" watch callbacks that mutates state that the parent\r
     * relies on (#1801). Watch callbacks doesn't track its dependencies so if it\r
     * triggers itself again, it's likely intentional and it is the user's\r
     * responsibility to perform recursive state mutation that eventually\r
     * stabilizes (#1727).\r
     */\r
    allowRecurse?: boolean;\r
    /**\r
     * Attached by renderer.ts when setting up a component's render effect\r
     * Used to obtain component information when reporting max recursive updates.\r
     * dev only.\r
     */\r
    ownerInstance?: ComponentInternalInstance;\r
}\r
\r
declare type SchedulerJobs = SchedulerJob | SchedulerJob[];\r
\r
/**\r
 * Block tracking sometimes needs to be disabled, for example during the\r
 * creation of a tree that needs to be cached by v-once. The compiler generates\r
 * code like this:\r
 *\r
 * \`\`\` js\r
 * _cache[1] || (\r
 *   setBlockTracking(-1),\r
 *   _cache[1] = createVNode(...),\r
 *   setBlockTracking(1),\r
 *   _cache[1]\r
 * )\r
 * \`\`\`\r
 *\r
 * @private\r
 */\r
export declare function setBlockTracking(value: number): void;\r
\r
/**\r
 * Note: rendering calls maybe nested. The function returns the parent rendering\r
 * instance if present, which should be restored after the render is done:\r
 *\r
 * \`\`\`js\r
 * const prev = setCurrentRenderingInstance(i)\r
 * // ...render\r
 * setCurrentRenderingInstance(prev)\r
 * \`\`\`\r
 */\r
declare function setCurrentRenderingInstance(instance: ComponentInternalInstance | null): ComponentInternalInstance | null;\r
\r
export declare function setDevtoolsHook(hook: DevtoolsHook, target: any): void;\r
\r
export declare function setTransitionHooks(vnode: VNode, hooks: TransitionHooks): void;\r
\r
declare function setupComponent(instance: ComponentInternalInstance, isSSR?: boolean): Promise<void> | undefined;\r
\r
export declare interface SetupContext<E = EmitsOptions> {\r
    attrs: Data;\r
    slots: Slots;\r
    emit: EmitFn<E>;\r
    expose: (exposed?: Record<string, any>) => void;\r
}\r
\r
declare type SetupRenderEffectFn = (instance: ComponentInternalInstance, initialVNode: VNode, container: RendererElement, anchor: RendererNode | null, parentSuspense: SuspenseBoundary | null, isSVG: boolean, optimized: boolean) => void;\r
\r
export { ShallowReactive }\r
\r
export { shallowReactive }\r
\r
export { shallowReadonly }\r
\r
export { ShallowRef }\r
\r
export { shallowRef }\r
\r
export { ShallowUnwrapRef }\r
\r
export declare type Slot = (...args: any[]) => VNode[];\r
\r
export declare type Slots = Readonly<InternalSlots>;\r
\r
/**\r
 * Use this for features where legacy usage is still possible, but will likely\r
 * lead to runtime error if compat is disabled. (warn in all cases)\r
 */\r
declare function softAssertCompatEnabled(key: DeprecationTypes, instance: ComponentInternalInstance | null, ...args: any[]): boolean;\r
\r
export declare const ssrContextKey: unique symbol;\r
\r
declare type SSRDirectiveHook = (binding: DirectiveBinding, vnode: VNode) => Data | undefined;\r
\r
/* Excluded from this release type: ssrUtils */\r
\r
export declare const Static: unique symbol;\r
\r
export { stop_2 as stop }\r
\r
export declare const Suspense: {\r
    new (): {\r
        $props: VNodeProps & SuspenseProps;\r
    };\r
    __isSuspense: true;\r
};\r
\r
export declare interface SuspenseBoundary {\r
    vnode: VNode<RendererNode, RendererElement, SuspenseProps>;\r
    parent: SuspenseBoundary | null;\r
    parentComponent: ComponentInternalInstance | null;\r
    isSVG: boolean;\r
    container: RendererElement;\r
    hiddenContainer: RendererElement;\r
    anchor: RendererNode | null;\r
    activeBranch: VNode | null;\r
    pendingBranch: VNode | null;\r
    deps: number;\r
    pendingId: number;\r
    timeout: number;\r
    isInFallback: boolean;\r
    isHydrating: boolean;\r
    isUnmounted: boolean;\r
    effects: Function[];\r
    resolve(force?: boolean): void;\r
    fallback(fallbackVNode: VNode): void;\r
    move(container: RendererElement, anchor: RendererNode | null, type: MoveType): void;\r
    next(): RendererNode | null;\r
    registerDep(instance: ComponentInternalInstance, setupRenderEffect: SetupRenderEffectFn): void;\r
    unmount(parentSuspense: SuspenseBoundary | null, doRemove?: boolean): void;\r
}\r
\r
declare const SuspenseImpl: {\r
    name: string;\r
    __isSuspense: boolean;\r
    process(n1: VNode | null, n2: VNode, container: RendererElement, anchor: RendererNode | null, parentComponent: ComponentInternalInstance | null, parentSuspense: SuspenseBoundary | null, isSVG: boolean, slotScopeIds: string[] | null, optimized: boolean, rendererInternals: RendererInternals): void;\r
    hydrate: typeof hydrateSuspense;\r
    create: typeof createSuspenseBoundary;\r
    normalize: typeof normalizeSuspenseChildren;\r
};\r
\r
export declare interface SuspenseProps {\r
    onResolve?: () => void;\r
    onPending?: () => void;\r
    onFallback?: () => void;\r
    timeout?: string | number;\r
}\r
\r
export declare const Teleport: {\r
    new (): {\r
        $props: VNodeProps & TeleportProps;\r
    };\r
    __isTeleport: true;\r
};\r
\r
declare const TeleportImpl: {\r
    __isTeleport: boolean;\r
    process(n1: TeleportVNode | null, n2: TeleportVNode, container: RendererElement, anchor: RendererNode | null, parentComponent: ComponentInternalInstance | null, parentSuspense: SuspenseBoundary | null, isSVG: boolean, slotScopeIds: string[] | null, optimized: boolean, internals: RendererInternals): void;\r
    remove(vnode: VNode, parentComponent: ComponentInternalInstance | null, parentSuspense: SuspenseBoundary | null, optimized: boolean, { um: unmount, o: { remove: hostRemove } }: RendererInternals, doRemove: Boolean): void;\r
    move: typeof moveTeleport;\r
    hydrate: typeof hydrateTeleport;\r
};\r
\r
declare const enum TeleportMoveTypes {\r
    TARGET_CHANGE = 0,\r
    TOGGLE = 1,\r
    REORDER = 2\r
}\r
\r
export declare interface TeleportProps {\r
    to: string | RendererElement | null | undefined;\r
    disabled?: boolean;\r
}\r
\r
declare type TeleportVNode = VNode<RendererNode, RendererElement, TeleportProps>;\r
\r
declare const Text_2: unique symbol;\r
export { Text_2 as Text }\r
\r
export { toDisplayString }\r
\r
export { toHandlerKey }\r
\r
/**\r
 * For prefixing keys in v-on="obj" with "on"\r
 * @private\r
 */\r
export declare function toHandlers(obj: Record<string, any>): Record<string, any>;\r
\r
export { toRaw }\r
\r
export { ToRef }\r
\r
export { toRef }\r
\r
export { ToRefs }\r
\r
export { toRefs }\r
\r
export { TrackOpTypes }\r
\r
/**\r
 * Internal API for registering an arguments transform for createVNode\r
 * used for creating stubs in the test-utils\r
 * It is *internal* but needs to be exposed for test-utils to pick up proper\r
 * typings\r
 */\r
export declare function transformVNodeArgs(transformer?: typeof vnodeArgsTransformer): void;\r
\r
export declare interface TransitionHooks<HostElement extends RendererElement = RendererElement> {\r
    mode: BaseTransitionProps['mode'];\r
    persisted: boolean;\r
    beforeEnter(el: HostElement): void;\r
    enter(el: HostElement): void;\r
    leave(el: HostElement, remove: () => void): void;\r
    clone(vnode: VNode): TransitionHooks<HostElement>;\r
    afterLeave?(): void;\r
    delayLeave?(el: HostElement, earlyRemove: () => void, delayedLeave: () => void): void;\r
    delayedLeave?(): void;\r
}\r
\r
export declare interface TransitionState {\r
    isMounted: boolean;\r
    isLeaving: boolean;\r
    isUnmounting: boolean;\r
    leavingVNodes: Map<any, Record<string, VNode>>;\r
}\r
\r
export { TriggerOpTypes }\r
\r
export { triggerRef }\r
\r
declare type UnmountChildrenFn = (children: VNode[], parentComponent: ComponentInternalInstance | null, parentSuspense: SuspenseBoundary | null, doRemove?: boolean, optimized?: boolean, start?: number) => void;\r
\r
declare type UnmountFn = (vnode: VNode, parentComponent: ComponentInternalInstance | null, parentSuspense: SuspenseBoundary | null, doRemove?: boolean, optimized?: boolean) => void;\r
\r
export { unref }\r
\r
declare type UnwrapMixinsType<T, Type extends OptionTypesKeys> = T extends OptionTypesType ? T[Type] : never;\r
\r
export { UnwrapNestedRefs }\r
\r
export { UnwrapRef }\r
\r
export declare function useAttrs(): SetupContext['attrs'];\r
\r
export declare function useSlots(): SetupContext['slots'];\r
\r
export declare const useSSRContext: <T = Record<string, any>>() => T | undefined;\r
\r
export declare function useTransitionState(): TransitionState;\r
\r
export declare const version: string;\r
\r
export declare interface VNode<HostNode = RendererNode, HostElement = RendererElement, ExtraProps = {\r
    [key: string]: any;\r
}> {\r
    /* Excluded from this release type: __v_isVNode */\r
    /* Excluded from this release type: __v_skip */\r
    type: VNodeTypes;\r
    props: (VNodeProps & ExtraProps) | null;\r
    key: string | number | symbol | null;\r
    ref: VNodeNormalizedRef | null;\r
    /**\r
     * SFC only. This is assigned on vnode creation using currentScopeId\r
     * which is set alongside currentRenderingInstance.\r
     */\r
    scopeId: string | null;\r
    /* Excluded from this release type: slotScopeIds */\r
    children: VNodeNormalizedChildren;\r
    component: ComponentInternalInstance | null;\r
    dirs: DirectiveBinding[] | null;\r
    transition: TransitionHooks<HostElement> | null;\r
    el: HostNode | null;\r
    anchor: HostNode | null;\r
    target: HostElement | null;\r
    targetAnchor: HostNode | null;\r
    /* Excluded from this release type: staticCount */\r
    suspense: SuspenseBoundary | null;\r
    /* Excluded from this release type: ssContent */\r
    /* Excluded from this release type: ssFallback */\r
    shapeFlag: number;\r
    patchFlag: number;\r
    /* Excluded from this release type: dynamicProps */\r
    /* Excluded from this release type: dynamicChildren */\r
    appContext: AppContext | null;\r
    /* Excluded from this release type: memo */\r
    /* Excluded from this release type: isCompatRoot */\r
    /* Excluded from this release type: ce */\r
}\r
\r
declare let vnodeArgsTransformer: ((args: Parameters<typeof _createVNode>, instance: ComponentInternalInstance | null) => Parameters<typeof _createVNode>) | undefined;\r
\r
export declare type VNodeArrayChildren = Array<VNodeArrayChildren | VNodeChildAtom>;\r
\r
export declare type VNodeChild = VNodeChildAtom | VNodeArrayChildren;\r
\r
declare type VNodeChildAtom = VNode | string | number | boolean | null | undefined | void;\r
\r
declare type VNodeMountHook = (vnode: VNode) => void;\r
\r
export declare type VNodeNormalizedChildren = string | VNodeArrayChildren | RawSlots | null;\r
\r
declare type VNodeNormalizedRef = VNodeNormalizedRefAtom | VNodeNormalizedRefAtom[];\r
\r
declare type VNodeNormalizedRefAtom = {\r
    i: ComponentInternalInstance;\r
    r: VNodeRef;\r
    k?: string;\r
    f?: boolean;\r
};\r
\r
export declare type VNodeProps = {\r
    key?: string | number | symbol;\r
    ref?: VNodeRef;\r
    ref_for?: boolean;\r
    ref_key?: string;\r
    onVnodeBeforeMount?: VNodeMountHook | VNodeMountHook[];\r
    onVnodeMounted?: VNodeMountHook | VNodeMountHook[];\r
    onVnodeBeforeUpdate?: VNodeUpdateHook | VNodeUpdateHook[];\r
    onVnodeUpdated?: VNodeUpdateHook | VNodeUpdateHook[];\r
    onVnodeBeforeUnmount?: VNodeMountHook | VNodeMountHook[];\r
    onVnodeUnmounted?: VNodeMountHook | VNodeMountHook[];\r
};\r
\r
export declare type VNodeRef = string | Ref | ((ref: Element | ComponentPublicInstance | null, refs: Record<string, any>) => void);\r
\r
export declare type VNodeTypes = string | VNode | Component | typeof Text_2 | typeof Static | typeof Comment_2 | typeof Fragment | typeof TeleportImpl | typeof SuspenseImpl;\r
\r
declare type VNodeUpdateHook = (vnode: VNode, oldVNode: VNode) => void;\r
\r
export declare function warn(msg: string, ...args: any[]): void;\r
\r
declare function warnDeprecation(key: DeprecationTypes, instance: ComponentInternalInstance | null, ...args: any[]): void;\r
\r
export declare function watch<T extends MultiWatchSources, Immediate extends Readonly<boolean> = false>(sources: [...T], cb: WatchCallback<MapSources<T, false>, MapSources<T, Immediate>>, options?: WatchOptions<Immediate>): WatchStopHandle;\r
\r
export declare function watch<T extends Readonly<MultiWatchSources>, Immediate extends Readonly<boolean> = false>(source: T, cb: WatchCallback<MapSources<T, false>, MapSources<T, Immediate>>, options?: WatchOptions<Immediate>): WatchStopHandle;\r
\r
export declare function watch<T, Immediate extends Readonly<boolean> = false>(source: WatchSource<T>, cb: WatchCallback<T, Immediate extends true ? T | undefined : T>, options?: WatchOptions<Immediate>): WatchStopHandle;\r
\r
export declare function watch<T extends object, Immediate extends Readonly<boolean> = false>(source: T, cb: WatchCallback<T, Immediate extends true ? T | undefined : T>, options?: WatchOptions<Immediate>): WatchStopHandle;\r
\r
export declare type WatchCallback<V = any, OV = any> = (value: V, oldValue: OV, onCleanup: OnCleanup) => any;\r
\r
export declare type WatchEffect = (onCleanup: OnCleanup) => void;\r
\r
export declare function watchEffect(effect: WatchEffect, options?: WatchOptionsBase): WatchStopHandle;\r
\r
declare type WatchOptionItem = string | WatchCallback | ObjectWatchOptionItem;\r
\r
export declare interface WatchOptions<Immediate = boolean> extends WatchOptionsBase {\r
    immediate?: Immediate;\r
    deep?: boolean;\r
}\r
\r
export declare interface WatchOptionsBase extends DebuggerOptions {\r
    flush?: 'pre' | 'post' | 'sync';\r
}\r
\r
export declare function watchPostEffect(effect: WatchEffect, options?: DebuggerOptions): WatchStopHandle;\r
\r
export declare type WatchSource<T = any> = Ref<T> | ComputedRef<T> | (() => T);\r
\r
export declare type WatchStopHandle = () => void;\r
\r
export declare function watchSyncEffect(effect: WatchEffect, options?: DebuggerOptions): WatchStopHandle;\r
\r
/* Excluded from this release type: withAsyncContext */\r
\r
/**\r
 * Wrap a slot function to memoize current rendering instance\r
 * @private compiler helper\r
 */\r
export declare function withCtx(fn: Function, ctx?: ComponentInternalInstance | null, isNonScopedSlot?: boolean): Function;\r
\r
/**\r
 * Vue \`<script setup>\` compiler macro for providing props default values when\r
 * using type-based \`defineProps\` declaration.\r
 *\r
 * Example usage:\r
 * \`\`\`ts\r
 * withDefaults(defineProps<{\r
 *   size?: number\r
 *   labels?: string[]\r
 * }>(), {\r
 *   size: 3,\r
 *   labels: () => ['default label']\r
 * })\r
 * \`\`\`\r
 *\r
 * This is only usable inside \`<script setup>\`, is compiled away in the output\r
 * and should **not** be actually called at runtime.\r
 */\r
export declare function withDefaults<Props, Defaults extends InferDefaults<Props>>(props: Props, defaults: Defaults): PropsWithDefaults<Props, Defaults>;\r
\r
/**\r
 * Adds directives to a VNode.\r
 */\r
export declare function withDirectives<T extends VNode>(vnode: T, directives: DirectiveArguments): T;\r
\r
export declare function withMemo(memo: any[], render: () => VNode<any, any>, cache: any[], index: number): VNode<any, any, {\r
    [key: string]: any;\r
}>;\r
\r
/**\r
 * Only for backwards compat\r
 * @private\r
 */\r
export declare const withScopeId: (_id: string) => typeof withCtx;\r
\r
export { WritableComputedOptions }\r
\r
export { WritableComputedRef }\r
\r
export { }\r

// Note: this file is auto concatenated to the end of the bundled d.ts during
// build.

declare module '@vue/reactivity' {
  export interface RefUnwrapBailTypes {
    runtimeCoreBailTypes:
      | VNode
      | {
          // directly bailing on ComponentPublicInstance results in recursion
          // so we use this as a bail hint
          $: ComponentInternalInstance
        }
  }
}

// Note: this file is auto concatenated to the end of the bundled d.ts during
// build.
type _defineProps = typeof defineProps
type _defineEmits = typeof defineEmits
type _defineExpose = typeof defineExpose
type _withDefaults = typeof withDefaults

declare global {
  const defineProps: _defineProps
  const defineEmits: _defineEmits
  const defineExpose: _defineExpose
  const withDefaults: _withDefaults
}
`,Y=`import { BaseTransitionProps } from '@vue/runtime-core';\r
import { ComponentInternalInstance } from '@vue/runtime-core';\r
import { ComponentOptionsMixin } from '@vue/runtime-core';\r
import { ComponentOptionsWithArrayProps } from '@vue/runtime-core';\r
import { ComponentOptionsWithObjectProps } from '@vue/runtime-core';\r
import { ComponentOptionsWithoutProps } from '@vue/runtime-core';\r
import { ComponentPropsOptions } from '@vue/runtime-core';\r
import { ComponentPublicInstance } from '@vue/runtime-core';\r
import { ComputedOptions } from '@vue/runtime-core';\r
import { ConcreteComponent } from '@vue/runtime-core';\r
import { CreateAppFunction } from '@vue/runtime-core';\r
import { EmitsOptions } from '@vue/runtime-core';\r
import { ExtractPropTypes } from '@vue/runtime-core';\r
import { FunctionalComponent } from '@vue/runtime-core';\r
import { MethodOptions } from '@vue/runtime-core';\r
import { ObjectDirective } from '@vue/runtime-core';\r
import { RenderFunction } from '@vue/runtime-core';\r
import { RootHydrateFunction } from '@vue/runtime-core';\r
import { RootRenderFunction } from '@vue/runtime-core';\r
import { SetupContext } from '@vue/runtime-core';\r
\r
declare const ANIMATION = "animation";\r
\r
declare type AssignerFn = (value: any) => void;\r
\r
declare const BaseClass: {\r
    new (): HTMLElement;\r
    prototype: HTMLElement;\r
};\r
\r
export declare const createApp: CreateAppFunction<Element>;\r
\r
export declare const createSSRApp: CreateAppFunction<Element>;\r
\r
export declare function defineCustomElement<Props, RawBindings = object>(setup: (props: Readonly<Props>, ctx: SetupContext) => RawBindings | RenderFunction): VueElementConstructor<Props>;\r
\r
export declare function defineCustomElement<Props = {}, RawBindings = {}, D = {}, C extends ComputedOptions = {}, M extends MethodOptions = {}, Mixin extends ComponentOptionsMixin = ComponentOptionsMixin, Extends extends ComponentOptionsMixin = ComponentOptionsMixin, E extends EmitsOptions = EmitsOptions, EE extends string = string>(options: ComponentOptionsWithoutProps<Props, RawBindings, D, C, M, Mixin, Extends, E, EE> & {\r
    styles?: string[];\r
}): VueElementConstructor<Props>;\r
\r
export declare function defineCustomElement<PropNames extends string, RawBindings, D, C extends ComputedOptions = {}, M extends MethodOptions = {}, Mixin extends ComponentOptionsMixin = ComponentOptionsMixin, Extends extends ComponentOptionsMixin = ComponentOptionsMixin, E extends EmitsOptions = Record<string, any>, EE extends string = string>(options: ComponentOptionsWithArrayProps<PropNames, RawBindings, D, C, M, Mixin, Extends, E, EE> & {\r
    styles?: string[];\r
}): VueElementConstructor<{\r
    [K in PropNames]: any;\r
}>;\r
\r
export declare function defineCustomElement<PropsOptions extends Readonly<ComponentPropsOptions>, RawBindings, D, C extends ComputedOptions = {}, M extends MethodOptions = {}, Mixin extends ComponentOptionsMixin = ComponentOptionsMixin, Extends extends ComponentOptionsMixin = ComponentOptionsMixin, E extends EmitsOptions = Record<string, any>, EE extends string = string>(options: ComponentOptionsWithObjectProps<PropsOptions, RawBindings, D, C, M, Mixin, Extends, E, EE> & {\r
    styles?: string[];\r
}): VueElementConstructor<ExtractPropTypes<PropsOptions>>;\r
\r
export declare function defineCustomElement(options: {\r
    new (...args: any[]): ComponentPublicInstance;\r
}): VueElementConstructor;\r
\r
export declare const defineSSRCustomElement: typeof defineCustomElement;\r
\r
export declare const hydrate: RootHydrateFunction;\r
\r
/* Excluded from this release type: initDirectivesForSSR */\r
\r
declare type InnerComponentDef = ConcreteComponent & {\r
    styles?: string[];\r
};\r
\r
declare type ModelDirective<T> = ObjectDirective<T & {\r
    _assign: AssignerFn;\r
}>;\r
\r
export declare const render: RootRenderFunction<Element | ShadowRoot>;\r
\r
declare const TRANSITION = "transition";\r
\r
export declare const Transition: FunctionalComponent<TransitionProps>;\r
\r
export declare const TransitionGroup: new () => {\r
    $props: TransitionGroupProps;\r
};\r
\r
export declare type TransitionGroupProps = Omit<TransitionProps, 'mode'> & {\r
    tag?: string;\r
    moveClass?: string;\r
};\r
\r
export declare interface TransitionProps extends BaseTransitionProps<Element> {\r
    name?: string;\r
    type?: typeof TRANSITION | typeof ANIMATION;\r
    css?: boolean;\r
    duration?: number | {\r
        enter: number;\r
        leave: number;\r
    };\r
    enterFromClass?: string;\r
    enterActiveClass?: string;\r
    enterToClass?: string;\r
    appearFromClass?: string;\r
    appearActiveClass?: string;\r
    appearToClass?: string;\r
    leaveFromClass?: string;\r
    leaveActiveClass?: string;\r
    leaveToClass?: string;\r
}\r
\r
export declare function useCssModule(name?: string): Record<string, string>;\r
\r
/**\r
 * Runtime helper for SFC's CSS variable injection feature.\r
 * @private\r
 */\r
export declare function useCssVars(getter: (ctx: any) => Record<string, string>): void;\r
\r
export declare const vModelCheckbox: ModelDirective<HTMLInputElement>;\r
\r
export declare const vModelDynamic: ObjectDirective<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>;\r
\r
export declare const vModelRadio: ModelDirective<HTMLInputElement>;\r
\r
export declare const vModelSelect: ModelDirective<HTMLSelectElement>;\r
\r
export declare const vModelText: ModelDirective<HTMLInputElement | HTMLTextAreaElement>;\r
\r
export declare const vShow: ObjectDirective<VShowElement>;\r
\r
declare interface VShowElement extends HTMLElement {\r
    _vod: string;\r
}\r
\r
export declare class VueElement extends BaseClass {\r
    private _def;\r
    private _props;\r
    /* Excluded from this release type: _instance */\r
    private _connected;\r
    private _resolved;\r
    private _numberProps;\r
    private _styles?;\r
    constructor(_def: InnerComponentDef, _props?: Record<string, any>, hydrate?: RootHydrateFunction);\r
    connectedCallback(): void;\r
    disconnectedCallback(): void;\r
    /**\r
     * resolve inner component definition (handle possible async component)\r
     */\r
    private _resolveDef;\r
    protected _setAttr(key: string): void;\r
    /* Excluded from this release type: _getProp */\r
    /* Excluded from this release type: _setProp */\r
    private _update;\r
    private _createVNode;\r
    private _applyStyles;\r
}\r
\r
export declare type VueElementConstructor<P = {}> = {\r
    new (initialProps?: Record<string, any>): VueElement & P;\r
};\r
\r
/**\r
 * @private\r
 */\r
export declare const withKeys: (fn: Function, modifiers: string[]) => (event: KeyboardEvent) => any;\r
\r
/**\r
 * @private\r
 */\r
export declare const withModifiers: (fn: Function, modifiers: string[]) => (event: Event, ...args: unknown[]) => any;\r
\r
\r
export * from "@vue/runtime-core";\r
\r
export { }\r

// Note: this file is auto concatenated to the end of the bundled d.ts during
// build.

// This code is based on react definition in DefinitelyTyped published under the MIT license.
//      Repository: https://github.com/DefinitelyTyped/DefinitelyTyped
//      Path in the repository: types/react/index.d.ts
//
// Copyrights of original definition are:
//      AssureSign <http://www.assuresign.com>
//      Microsoft <https://microsoft.com>
//                 John Reilly <https://github.com/johnnyreilly>
//      Benoit Benezech <https://github.com/bbenezech>
//      Patricio Zavolinsky <https://github.com/pzavolinsky>
//      Digiguru <https://github.com/digiguru>
//      Eric Anderson <https://github.com/ericanderson>
//      Dovydas Navickas <https://github.com/DovydasNavickas>
//                 Josh Rutherford <https://github.com/theruther4d>
//                 Guilherme Hübner <https://github.com/guilhermehubner>
//                 Ferdy Budhidharma <https://github.com/ferdaber>
//                 Johann Rakotoharisoa <https://github.com/jrakotoharisoa>
//                 Olivier Pascal <https://github.com/pascaloliv>
//                 Martin Hochel <https://github.com/hotell>
//                 Frank Li <https://github.com/franklixuefei>
//                 Jessica Franco <https://github.com/Jessidhia>
//                 Saransh Kataria <https://github.com/saranshkataria>
//                 Kanitkorn Sujautra <https://github.com/lukyth>
//                 Sebastian Silbermann <https://github.com/eps1lon>

import { VNode } from '@vue/runtime-core'
import * as CSS from 'csstype'

export interface CSSProperties
  extends CSS.Properties<string | number>,
    CSS.PropertiesHyphen<string | number> {
  /**
   * The index signature was removed to enable closed typing for style
   * using CSSType. You're able to use type assertion or module augmentation
   * to add properties or an index signature of your own.
   *
   * For examples and more information, visit:
   * https://github.com/frenic/csstype#what-should-i-do-when-i-get-type-errors
   */
  [v: \`--\${string}\`]: string | number | undefined
}

type Booleanish = boolean | 'true' | 'false'
type Numberish = number | string

// All the WAI-ARIA 1.1 attributes from https://www.w3.org/TR/wai-aria-1.1/
interface AriaAttributes {
  /** Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application. */
  'aria-activedescendant'?: string
  /** Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute. */
  'aria-atomic'?: Booleanish
  /**
   * Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be
   * presented if they are made.
   */
  'aria-autocomplete'?: 'none' | 'inline' | 'list' | 'both'
  /** Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user. */
  'aria-busy'?: Booleanish
  /**
   * Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.
   * @see aria-pressed @see aria-selected.
   */
  'aria-checked'?: Booleanish | 'mixed'
  /**
   * Defines the total number of columns in a table, grid, or treegrid.
   * @see aria-colindex.
   */
  'aria-colcount'?: Numberish
  /**
   * Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.
   * @see aria-colcount @see aria-colspan.
   */
  'aria-colindex'?: Numberish
  /**
   * Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.
   * @see aria-colindex @see aria-rowspan.
   */
  'aria-colspan'?: Numberish
  /**
   * Identifies the element (or elements) whose contents or presence are controlled by the current element.
   * @see aria-owns.
   */
  'aria-controls'?: string
  /** Indicates the element that represents the current item within a container or set of related elements. */
  'aria-current'?: Booleanish | 'page' | 'step' | 'location' | 'date' | 'time'
  /**
   * Identifies the element (or elements) that describes the object.
   * @see aria-labelledby
   */
  'aria-describedby'?: string
  /**
   * Identifies the element that provides a detailed, extended description for the object.
   * @see aria-describedby.
   */
  'aria-details'?: string
  /**
   * Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.
   * @see aria-hidden @see aria-readonly.
   */
  'aria-disabled'?: Booleanish
  /**
   * Indicates what functions can be performed when a dragged object is released on the drop target.
   * @deprecated in ARIA 1.1
   */
  'aria-dropeffect'?: 'none' | 'copy' | 'execute' | 'link' | 'move' | 'popup'
  /**
   * Identifies the element that provides an error message for the object.
   * @see aria-invalid @see aria-describedby.
   */
  'aria-errormessage'?: string
  /** Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed. */
  'aria-expanded'?: Booleanish
  /**
   * Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,
   * allows assistive technology to override the general default of reading in document source order.
   */
  'aria-flowto'?: string
  /**
   * Indicates an element's "grabbed" state in a drag-and-drop operation.
   * @deprecated in ARIA 1.1
   */
  'aria-grabbed'?: Booleanish
  /** Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element. */
  'aria-haspopup'?: Booleanish | 'menu' | 'listbox' | 'tree' | 'grid' | 'dialog'
  /**
   * Indicates whether the element is exposed to an accessibility API.
   * @see aria-disabled.
   */
  'aria-hidden'?: Booleanish
  /**
   * Indicates the entered value does not conform to the format expected by the application.
   * @see aria-errormessage.
   */
  'aria-invalid'?: Booleanish | 'grammar' | 'spelling'
  /** Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element. */
  'aria-keyshortcuts'?: string
  /**
   * Defines a string value that labels the current element.
   * @see aria-labelledby.
   */
  'aria-label'?: string
  /**
   * Identifies the element (or elements) that labels the current element.
   * @see aria-describedby.
   */
  'aria-labelledby'?: string
  /** Defines the hierarchical level of an element within a structure. */
  'aria-level'?: Numberish
  /** Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region. */
  'aria-live'?: 'off' | 'assertive' | 'polite'
  /** Indicates whether an element is modal when displayed. */
  'aria-modal'?: Booleanish
  /** Indicates whether a text box accepts multiple lines of input or only a single line. */
  'aria-multiline'?: Booleanish
  /** Indicates that the user may select more than one item from the current selectable descendants. */
  'aria-multiselectable'?: Booleanish
  /** Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous. */
  'aria-orientation'?: 'horizontal' | 'vertical'
  /**
   * Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship
   * between DOM elements where the DOM hierarchy cannot be used to represent the relationship.
   * @see aria-controls.
   */
  'aria-owns'?: string
  /**
   * Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.
   * A hint could be a sample value or a brief description of the expected format.
   */
  'aria-placeholder'?: string
  /**
   * Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.
   * @see aria-setsize.
   */
  'aria-posinset'?: Numberish
  /**
   * Indicates the current "pressed" state of toggle buttons.
   * @see aria-checked @see aria-selected.
   */
  'aria-pressed'?: Booleanish | 'mixed'
  /**
   * Indicates that the element is not editable, but is otherwise operable.
   * @see aria-disabled.
   */
  'aria-readonly'?: Booleanish
  /**
   * Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.
   * @see aria-atomic.
   */
  'aria-relevant'?: 'additions' | 'additions text' | 'all' | 'removals' | 'text'
  /** Indicates that user input is required on the element before a form may be submitted. */
  'aria-required'?: Booleanish
  /** Defines a human-readable, author-localized description for the role of an element. */
  'aria-roledescription'?: string
  /**
   * Defines the total number of rows in a table, grid, or treegrid.
   * @see aria-rowindex.
   */
  'aria-rowcount'?: Numberish
  /**
   * Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.
   * @see aria-rowcount @see aria-rowspan.
   */
  'aria-rowindex'?: Numberish
  /**
   * Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.
   * @see aria-rowindex @see aria-colspan.
   */
  'aria-rowspan'?: Numberish
  /**
   * Indicates the current "selected" state of various widgets.
   * @see aria-checked @see aria-pressed.
   */
  'aria-selected'?: Booleanish
  /**
   * Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.
   * @see aria-posinset.
   */
  'aria-setsize'?: Numberish
  /** Indicates if items in a table or grid are sorted in ascending or descending order. */
  'aria-sort'?: 'none' | 'ascending' | 'descending' | 'other'
  /** Defines the maximum allowed value for a range widget. */
  'aria-valuemax'?: Numberish
  /** Defines the minimum allowed value for a range widget. */
  'aria-valuemin'?: Numberish
  /**
   * Defines the current value for a range widget.
   * @see aria-valuetext.
   */
  'aria-valuenow'?: Numberish
  /** Defines the human readable text alternative of aria-valuenow for a range widget. */
  'aria-valuetext'?: string
}

// Vue's style normalization supports nested arrays
export type StyleValue = string | CSSProperties | Array<StyleValue>

export interface HTMLAttributes extends AriaAttributes, EventHandlers<Events> {
  innerHTML?: string

  class?: any
  style?: StyleValue

  // Standard HTML Attributes
  accesskey?: string
  contenteditable?: Booleanish | 'inherit'
  contextmenu?: string
  dir?: string
  draggable?: Booleanish
  hidden?: Booleanish
  id?: string
  lang?: string
  placeholder?: string
  spellcheck?: Booleanish
  tabindex?: Numberish
  title?: string
  translate?: 'yes' | 'no'

  // Unknown
  radiogroup?: string // <command>, <menuitem>

  // WAI-ARIA
  role?: string

  // RDFa Attributes
  about?: string
  datatype?: string
  inlist?: any
  prefix?: string
  property?: string
  resource?: string
  typeof?: string
  vocab?: string

  // Non-standard Attributes
  autocapitalize?: string
  autocorrect?: string
  autosave?: string
  color?: string
  itemprop?: string
  itemscope?: Booleanish
  itemtype?: string
  itemid?: string
  itemref?: string
  results?: Numberish
  security?: string
  unselectable?: 'on' | 'off'

  // Living Standard
  /**
   * Hints at the type of data that might be entered by the user while editing the element or its contents
   * @see https://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-inputmode-attribute
   */
  inputmode?:
    | 'none'
    | 'text'
    | 'tel'
    | 'url'
    | 'email'
    | 'numeric'
    | 'decimal'
    | 'search'
  /**
   * Specify that a standard HTML element should behave like a defined custom built-in element
   * @see https://html.spec.whatwg.org/multipage/custom-elements.html#attr-is
   */
  is?: string
}

export interface AnchorHTMLAttributes extends HTMLAttributes {
  download?: any
  href?: string
  hreflang?: string
  media?: string
  ping?: string
  rel?: string
  target?: string
  type?: string
  referrerpolicy?: string
}

export interface AreaHTMLAttributes extends HTMLAttributes {
  alt?: string
  coords?: string
  download?: any
  href?: string
  hreflang?: string
  media?: string
  rel?: string
  shape?: string
  target?: string
}

export interface AudioHTMLAttributes extends MediaHTMLAttributes {}

export interface BaseHTMLAttributes extends HTMLAttributes {
  href?: string
  target?: string
}

export interface BlockquoteHTMLAttributes extends HTMLAttributes {
  cite?: string
}

export interface ButtonHTMLAttributes extends HTMLAttributes {
  autofocus?: Booleanish
  disabled?: Booleanish
  form?: string
  formaction?: string
  formenctype?: string
  formmethod?: string
  formnovalidate?: Booleanish
  formtarget?: string
  name?: string
  type?: 'submit' | 'reset' | 'button'
  value?: string | string[] | number
}

export interface CanvasHTMLAttributes extends HTMLAttributes {
  height?: Numberish
  width?: Numberish
}

export interface ColHTMLAttributes extends HTMLAttributes {
  span?: Numberish
  width?: Numberish
}

export interface ColgroupHTMLAttributes extends HTMLAttributes {
  span?: Numberish
}

export interface DataHTMLAttributes extends HTMLAttributes {
  value?: string | string[] | number
}

export interface DetailsHTMLAttributes extends HTMLAttributes {
  open?: Booleanish
}

export interface DelHTMLAttributes extends HTMLAttributes {
  cite?: string
  datetime?: string
}

export interface DialogHTMLAttributes extends HTMLAttributes {
  open?: Booleanish
}

export interface EmbedHTMLAttributes extends HTMLAttributes {
  height?: Numberish
  src?: string
  type?: string
  width?: Numberish
}

export interface FieldsetHTMLAttributes extends HTMLAttributes {
  disabled?: Booleanish
  form?: string
  name?: string
}

export interface FormHTMLAttributes extends HTMLAttributes {
  acceptcharset?: string
  action?: string
  autocomplete?: string
  enctype?: string
  method?: string
  name?: string
  novalidate?: Booleanish
  target?: string
}

export interface HtmlHTMLAttributes extends HTMLAttributes {
  manifest?: string
}

export interface IframeHTMLAttributes extends HTMLAttributes {
  allow?: string
  allowfullscreen?: Booleanish
  allowtransparency?: Booleanish
  frameborder?: Numberish
  height?: Numberish
  marginheight?: Numberish
  marginwidth?: Numberish
  name?: string
  referrerpolicy?: string
  sandbox?: string
  scrolling?: string
  seamless?: Booleanish
  src?: string
  srcdoc?: string
  width?: Numberish
}

export interface ImgHTMLAttributes extends HTMLAttributes {
  alt?: string
  crossorigin?: 'anonymous' | 'use-credentials' | ''
  decoding?: 'async' | 'auto' | 'sync'
  height?: Numberish
  sizes?: string
  src?: string
  srcset?: string
  usemap?: string
  width?: Numberish
}

export interface InsHTMLAttributes extends HTMLAttributes {
  cite?: string
  datetime?: string
}

export interface InputHTMLAttributes extends HTMLAttributes {
  accept?: string
  alt?: string
  autocomplete?: string
  autofocus?: Booleanish
  capture?: boolean | 'user' | 'environment' // https://www.w3.org/tr/html-media-capture/#the-capture-attribute
  checked?: Booleanish | any[] | Set<any> // for IDE v-model multi-checkbox support
  crossorigin?: string
  disabled?: Booleanish
  form?: string
  formaction?: string
  formenctype?: string
  formmethod?: string
  formnovalidate?: Booleanish
  formtarget?: string
  height?: Numberish
  indeterminate?: boolean
  list?: string
  max?: Numberish
  maxlength?: Numberish
  min?: Numberish
  minlength?: Numberish
  multiple?: Booleanish
  name?: string
  pattern?: string
  placeholder?: string
  readonly?: Booleanish
  required?: Booleanish
  size?: Numberish
  src?: string
  step?: Numberish
  type?: string
  value?: any // we support :value to be bound to anything w/ v-model
  width?: Numberish
}

export interface KeygenHTMLAttributes extends HTMLAttributes {
  autofocus?: Booleanish
  challenge?: string
  disabled?: Booleanish
  form?: string
  keytype?: string
  keyparams?: string
  name?: string
}

export interface LabelHTMLAttributes extends HTMLAttributes {
  for?: string
  form?: string
}

export interface LiHTMLAttributes extends HTMLAttributes {
  value?: string | string[] | number
}

export interface LinkHTMLAttributes extends HTMLAttributes {
  as?: string
  crossorigin?: string
  href?: string
  hreflang?: string
  integrity?: string
  media?: string
  rel?: string
  sizes?: string
  type?: string
}

export interface MapHTMLAttributes extends HTMLAttributes {
  name?: string
}

export interface MenuHTMLAttributes extends HTMLAttributes {
  type?: string
}

export interface MediaHTMLAttributes extends HTMLAttributes {
  autoplay?: Booleanish
  controls?: Booleanish
  controlslist?: string
  crossorigin?: string
  loop?: Booleanish
  mediagroup?: string
  muted?: Booleanish
  playsinline?: Booleanish
  preload?: string
  src?: string
}

export interface MetaHTMLAttributes extends HTMLAttributes {
  charset?: string
  content?: string
  httpequiv?: string
  name?: string
}

export interface MeterHTMLAttributes extends HTMLAttributes {
  form?: string
  high?: Numberish
  low?: Numberish
  max?: Numberish
  min?: Numberish
  optimum?: Numberish
  value?: string | string[] | number
}

export interface QuoteHTMLAttributes extends HTMLAttributes {
  cite?: string
}

export interface ObjectHTMLAttributes extends HTMLAttributes {
  classid?: string
  data?: string
  form?: string
  height?: Numberish
  name?: string
  type?: string
  usemap?: string
  width?: Numberish
  wmode?: string
}

export interface OlHTMLAttributes extends HTMLAttributes {
  reversed?: Booleanish
  start?: Numberish
  type?: '1' | 'a' | 'A' | 'i' | 'I'
}

export interface OptgroupHTMLAttributes extends HTMLAttributes {
  disabled?: Booleanish
  label?: string
}

export interface OptionHTMLAttributes extends HTMLAttributes {
  disabled?: Booleanish
  label?: string
  selected?: Booleanish
  value?: any // we support :value to be bound to anything w/ v-model
}

export interface OutputHTMLAttributes extends HTMLAttributes {
  for?: string
  form?: string
  name?: string
}

export interface ParamHTMLAttributes extends HTMLAttributes {
  name?: string
  value?: string | string[] | number
}

export interface ProgressHTMLAttributes extends HTMLAttributes {
  max?: Numberish
  value?: string | string[] | number
}

export interface ScriptHTMLAttributes extends HTMLAttributes {
  async?: Booleanish
  charset?: string
  crossorigin?: string
  defer?: Booleanish
  integrity?: string
  nomodule?: Booleanish
  nonce?: string
  src?: string
  type?: string
}

export interface SelectHTMLAttributes extends HTMLAttributes {
  autocomplete?: string
  autofocus?: Booleanish
  disabled?: Booleanish
  form?: string
  multiple?: Booleanish
  name?: string
  required?: Booleanish
  size?: Numberish
  value?: any // we support :value to be bound to anything w/ v-model
}

export interface SourceHTMLAttributes extends HTMLAttributes {
  media?: string
  sizes?: string
  src?: string
  srcset?: string
  type?: string
}

export interface StyleHTMLAttributes extends HTMLAttributes {
  media?: string
  nonce?: string
  scoped?: Booleanish
  type?: string
}

export interface TableHTMLAttributes extends HTMLAttributes {
  cellpadding?: Numberish
  cellspacing?: Numberish
  summary?: string
}

export interface TextareaHTMLAttributes extends HTMLAttributes {
  autocomplete?: string
  autofocus?: Booleanish
  cols?: Numberish
  dirname?: string
  disabled?: Booleanish
  form?: string
  maxlength?: Numberish
  minlength?: Numberish
  name?: string
  placeholder?: string
  readonly?: boolean
  required?: Booleanish
  rows?: Numberish
  value?: string | string[] | number
  wrap?: string
}

export interface TdHTMLAttributes extends HTMLAttributes {
  align?: 'left' | 'center' | 'right' | 'justify' | 'char'
  colspan?: Numberish
  headers?: string
  rowspan?: Numberish
  scope?: string
  valign?: 'top' | 'middle' | 'bottom' | 'baseline'
}

export interface ThHTMLAttributes extends HTMLAttributes {
  align?: 'left' | 'center' | 'right' | 'justify' | 'char'
  colspan?: Numberish
  headers?: string
  rowspan?: Numberish
  scope?: string
}

export interface TimeHTMLAttributes extends HTMLAttributes {
  datetime?: string
}

export interface TrackHTMLAttributes extends HTMLAttributes {
  default?: Booleanish
  kind?: string
  label?: string
  src?: string
  srclang?: string
}

export interface VideoHTMLAttributes extends MediaHTMLAttributes {
  height?: Numberish
  playsinline?: Booleanish
  poster?: string
  width?: Numberish
  disablePictureInPicture?: Booleanish
}

export interface WebViewHTMLAttributes extends HTMLAttributes {
  allowfullscreen?: Booleanish
  allowpopups?: Booleanish
  autoFocus?: Booleanish
  autosize?: Booleanish
  blinkfeatures?: string
  disableblinkfeatures?: string
  disableguestresize?: Booleanish
  disablewebsecurity?: Booleanish
  guestinstance?: string
  httpreferrer?: string
  nodeintegration?: Booleanish
  partition?: string
  plugins?: Booleanish
  preload?: string
  src?: string
  useragent?: string
  webpreferences?: string
}

export interface SVGAttributes extends AriaAttributes, EventHandlers<Events> {
  innerHTML?: string

  /**
   * SVG Styling Attributes
   * @see https://www.w3.org/TR/SVG/styling.html#ElementSpecificStyling
   */
  class?: any
  style?: string | CSSProperties

  color?: string
  height?: Numberish
  id?: string
  lang?: string
  max?: Numberish
  media?: string
  method?: string
  min?: Numberish
  name?: string
  target?: string
  type?: string
  width?: Numberish

  // Other HTML properties supported by SVG elements in browsers
  role?: string
  tabindex?: Numberish

  // SVG Specific attributes
  'accent-height'?: Numberish
  accumulate?: 'none' | 'sum'
  additive?: 'replace' | 'sum'
  'alignment-baseline'?:
    | 'auto'
    | 'baseline'
    | 'before-edge'
    | 'text-before-edge'
    | 'middle'
    | 'central'
    | 'after-edge'
    | 'text-after-edge'
    | 'ideographic'
    | 'alphabetic'
    | 'hanging'
    | 'mathematical'
    | 'inherit'
  allowReorder?: 'no' | 'yes'
  alphabetic?: Numberish
  amplitude?: Numberish
  'arabic-form'?: 'initial' | 'medial' | 'terminal' | 'isolated'
  ascent?: Numberish
  attributeName?: string
  attributeType?: string
  autoReverse?: Numberish
  azimuth?: Numberish
  baseFrequency?: Numberish
  'baseline-shift'?: Numberish
  baseProfile?: Numberish
  bbox?: Numberish
  begin?: Numberish
  bias?: Numberish
  by?: Numberish
  calcMode?: Numberish
  'cap-height'?: Numberish
  clip?: Numberish
  'clip-path'?: string
  clipPathUnits?: Numberish
  'clip-rule'?: Numberish
  'color-interpolation'?: Numberish
  'color-interpolation-filters'?: 'auto' | 'sRGB' | 'linearRGB' | 'inherit'
  'color-profile'?: Numberish
  'color-rendering'?: Numberish
  contentScriptType?: Numberish
  contentStyleType?: Numberish
  cursor?: Numberish
  cx?: Numberish
  cy?: Numberish
  d?: string
  decelerate?: Numberish
  descent?: Numberish
  diffuseConstant?: Numberish
  direction?: Numberish
  display?: Numberish
  divisor?: Numberish
  'dominant-baseline'?: Numberish
  dur?: Numberish
  dx?: Numberish
  dy?: Numberish
  edgeMode?: Numberish
  elevation?: Numberish
  'enable-background'?: Numberish
  end?: Numberish
  exponent?: Numberish
  externalResourcesRequired?: Numberish
  fill?: string
  'fill-opacity'?: Numberish
  'fill-rule'?: 'nonzero' | 'evenodd' | 'inherit'
  filter?: string
  filterRes?: Numberish
  filterUnits?: Numberish
  'flood-color'?: Numberish
  'flood-opacity'?: Numberish
  focusable?: Numberish
  'font-family'?: string
  'font-size'?: Numberish
  'font-size-adjust'?: Numberish
  'font-stretch'?: Numberish
  'font-style'?: Numberish
  'font-variant'?: Numberish
  'font-weight'?: Numberish
  format?: Numberish
  from?: Numberish
  fx?: Numberish
  fy?: Numberish
  g1?: Numberish
  g2?: Numberish
  'glyph-name'?: Numberish
  'glyph-orientation-horizontal'?: Numberish
  'glyph-orientation-vertical'?: Numberish
  glyphRef?: Numberish
  gradientTransform?: string
  gradientUnits?: string
  hanging?: Numberish
  'horiz-adv-x'?: Numberish
  'horiz-origin-x'?: Numberish
  href?: string
  ideographic?: Numberish
  'image-rendering'?: Numberish
  in2?: Numberish
  in?: string
  intercept?: Numberish
  k1?: Numberish
  k2?: Numberish
  k3?: Numberish
  k4?: Numberish
  k?: Numberish
  kernelMatrix?: Numberish
  kernelUnitLength?: Numberish
  kerning?: Numberish
  keyPoints?: Numberish
  keySplines?: Numberish
  keyTimes?: Numberish
  lengthAdjust?: Numberish
  'letter-spacing'?: Numberish
  'lighting-color'?: Numberish
  limitingConeAngle?: Numberish
  local?: Numberish
  'marker-end'?: string
  markerHeight?: Numberish
  'marker-mid'?: string
  'marker-start'?: string
  markerUnits?: Numberish
  markerWidth?: Numberish
  mask?: string
  maskContentUnits?: Numberish
  maskUnits?: Numberish
  mathematical?: Numberish
  mode?: Numberish
  numOctaves?: Numberish
  offset?: Numberish
  opacity?: Numberish
  operator?: Numberish
  order?: Numberish
  orient?: Numberish
  orientation?: Numberish
  origin?: Numberish
  overflow?: Numberish
  'overline-position'?: Numberish
  'overline-thickness'?: Numberish
  'paint-order'?: Numberish
  'panose-1'?: Numberish
  pathLength?: Numberish
  patternContentUnits?: string
  patternTransform?: Numberish
  patternUnits?: string
  'pointer-events'?: Numberish
  points?: string
  pointsAtX?: Numberish
  pointsAtY?: Numberish
  pointsAtZ?: Numberish
  preserveAlpha?: Numberish
  preserveAspectRatio?: string
  primitiveUnits?: Numberish
  r?: Numberish
  radius?: Numberish
  refX?: Numberish
  refY?: Numberish
  renderingIntent?: Numberish
  repeatCount?: Numberish
  repeatDur?: Numberish
  requiredExtensions?: Numberish
  requiredFeatures?: Numberish
  restart?: Numberish
  result?: string
  rotate?: Numberish
  rx?: Numberish
  ry?: Numberish
  scale?: Numberish
  seed?: Numberish
  'shape-rendering'?: Numberish
  slope?: Numberish
  spacing?: Numberish
  specularConstant?: Numberish
  specularExponent?: Numberish
  speed?: Numberish
  spreadMethod?: string
  startOffset?: Numberish
  stdDeviation?: Numberish
  stemh?: Numberish
  stemv?: Numberish
  stitchTiles?: Numberish
  'stop-color'?: string
  'stop-opacity'?: Numberish
  'strikethrough-position'?: Numberish
  'strikethrough-thickness'?: Numberish
  string?: Numberish
  stroke?: string
  'stroke-dasharray'?: Numberish
  'stroke-dashoffset'?: Numberish
  'stroke-linecap'?: 'butt' | 'round' | 'square' | 'inherit'
  'stroke-linejoin'?: 'miter' | 'round' | 'bevel' | 'inherit'
  'stroke-miterlimit'?: Numberish
  'stroke-opacity'?: Numberish
  'stroke-width'?: Numberish
  surfaceScale?: Numberish
  systemLanguage?: Numberish
  tableValues?: Numberish
  targetX?: Numberish
  targetY?: Numberish
  'text-anchor'?: string
  'text-decoration'?: Numberish
  textLength?: Numberish
  'text-rendering'?: Numberish
  to?: Numberish
  transform?: string
  u1?: Numberish
  u2?: Numberish
  'underline-position'?: Numberish
  'underline-thickness'?: Numberish
  unicode?: Numberish
  'unicode-bidi'?: Numberish
  'unicode-range'?: Numberish
  'unitsPer-em'?: Numberish
  'v-alphabetic'?: Numberish
  values?: string
  'vector-effect'?: Numberish
  version?: string
  'vert-adv-y'?: Numberish
  'vert-origin-x'?: Numberish
  'vert-origin-y'?: Numberish
  'v-hanging'?: Numberish
  'v-ideographic'?: Numberish
  viewBox?: string
  viewTarget?: Numberish
  visibility?: Numberish
  'v-mathematical'?: Numberish
  widths?: Numberish
  'word-spacing'?: Numberish
  'writing-mode'?: Numberish
  x1?: Numberish
  x2?: Numberish
  x?: Numberish
  xChannelSelector?: string
  'x-height'?: Numberish
  xlinkActuate?: string
  xlinkArcrole?: string
  xlinkHref?: string
  xlinkRole?: string
  xlinkShow?: string
  xlinkTitle?: string
  xlinkType?: string
  xmlns?: string
  y1?: Numberish
  y2?: Numberish
  y?: Numberish
  yChannelSelector?: string
  z?: Numberish
  zoomAndPan?: string
}

interface IntrinsicElementAttributes {
  a: AnchorHTMLAttributes
  abbr: HTMLAttributes
  address: HTMLAttributes
  area: AreaHTMLAttributes
  article: HTMLAttributes
  aside: HTMLAttributes
  audio: AudioHTMLAttributes
  b: HTMLAttributes
  base: BaseHTMLAttributes
  bdi: HTMLAttributes
  bdo: HTMLAttributes
  blockquote: BlockquoteHTMLAttributes
  body: HTMLAttributes
  br: HTMLAttributes
  button: ButtonHTMLAttributes
  canvas: CanvasHTMLAttributes
  caption: HTMLAttributes
  cite: HTMLAttributes
  code: HTMLAttributes
  col: ColHTMLAttributes
  colgroup: ColgroupHTMLAttributes
  data: DataHTMLAttributes
  datalist: HTMLAttributes
  dd: HTMLAttributes
  del: DelHTMLAttributes
  details: DetailsHTMLAttributes
  dfn: HTMLAttributes
  dialog: DialogHTMLAttributes
  div: HTMLAttributes
  dl: HTMLAttributes
  dt: HTMLAttributes
  em: HTMLAttributes
  embed: EmbedHTMLAttributes
  fieldset: FieldsetHTMLAttributes
  figcaption: HTMLAttributes
  figure: HTMLAttributes
  footer: HTMLAttributes
  form: FormHTMLAttributes
  h1: HTMLAttributes
  h2: HTMLAttributes
  h3: HTMLAttributes
  h4: HTMLAttributes
  h5: HTMLAttributes
  h6: HTMLAttributes
  head: HTMLAttributes
  header: HTMLAttributes
  hgroup: HTMLAttributes
  hr: HTMLAttributes
  html: HtmlHTMLAttributes
  i: HTMLAttributes
  iframe: IframeHTMLAttributes
  img: ImgHTMLAttributes
  input: InputHTMLAttributes
  ins: InsHTMLAttributes
  kbd: HTMLAttributes
  keygen: KeygenHTMLAttributes
  label: LabelHTMLAttributes
  legend: HTMLAttributes
  li: LiHTMLAttributes
  link: LinkHTMLAttributes
  main: HTMLAttributes
  map: MapHTMLAttributes
  mark: HTMLAttributes
  menu: MenuHTMLAttributes
  meta: MetaHTMLAttributes
  meter: MeterHTMLAttributes
  nav: HTMLAttributes
  noindex: HTMLAttributes
  noscript: HTMLAttributes
  object: ObjectHTMLAttributes
  ol: OlHTMLAttributes
  optgroup: OptgroupHTMLAttributes
  option: OptionHTMLAttributes
  output: OutputHTMLAttributes
  p: HTMLAttributes
  param: ParamHTMLAttributes
  picture: HTMLAttributes
  pre: HTMLAttributes
  progress: ProgressHTMLAttributes
  q: QuoteHTMLAttributes
  rp: HTMLAttributes
  rt: HTMLAttributes
  ruby: HTMLAttributes
  s: HTMLAttributes
  samp: HTMLAttributes
  script: ScriptHTMLAttributes
  section: HTMLAttributes
  select: SelectHTMLAttributes
  small: HTMLAttributes
  source: SourceHTMLAttributes
  span: HTMLAttributes
  strong: HTMLAttributes
  style: StyleHTMLAttributes
  sub: HTMLAttributes
  summary: HTMLAttributes
  sup: HTMLAttributes
  table: TableHTMLAttributes
  template: HTMLAttributes
  tbody: HTMLAttributes
  td: TdHTMLAttributes
  textarea: TextareaHTMLAttributes
  tfoot: HTMLAttributes
  th: ThHTMLAttributes
  thead: HTMLAttributes
  time: TimeHTMLAttributes
  title: HTMLAttributes
  tr: HTMLAttributes
  track: TrackHTMLAttributes
  u: HTMLAttributes
  ul: HTMLAttributes
  var: HTMLAttributes
  video: VideoHTMLAttributes
  wbr: HTMLAttributes
  webview: WebViewHTMLAttributes

  // SVG
  svg: SVGAttributes

  animate: SVGAttributes
  animateMotion: SVGAttributes
  animateTransform: SVGAttributes
  circle: SVGAttributes
  clipPath: SVGAttributes
  defs: SVGAttributes
  desc: SVGAttributes
  ellipse: SVGAttributes
  feBlend: SVGAttributes
  feColorMatrix: SVGAttributes
  feComponentTransfer: SVGAttributes
  feComposite: SVGAttributes
  feConvolveMatrix: SVGAttributes
  feDiffuseLighting: SVGAttributes
  feDisplacementMap: SVGAttributes
  feDistantLight: SVGAttributes
  feDropShadow: SVGAttributes
  feFlood: SVGAttributes
  feFuncA: SVGAttributes
  feFuncB: SVGAttributes
  feFuncG: SVGAttributes
  feFuncR: SVGAttributes
  feGaussianBlur: SVGAttributes
  feImage: SVGAttributes
  feMerge: SVGAttributes
  feMergeNode: SVGAttributes
  feMorphology: SVGAttributes
  feOffset: SVGAttributes
  fePointLight: SVGAttributes
  feSpecularLighting: SVGAttributes
  feSpotLight: SVGAttributes
  feTile: SVGAttributes
  feTurbulence: SVGAttributes
  filter: SVGAttributes
  foreignObject: SVGAttributes
  g: SVGAttributes
  image: SVGAttributes
  line: SVGAttributes
  linearGradient: SVGAttributes
  marker: SVGAttributes
  mask: SVGAttributes
  metadata: SVGAttributes
  mpath: SVGAttributes
  path: SVGAttributes
  pattern: SVGAttributes
  polygon: SVGAttributes
  polyline: SVGAttributes
  radialGradient: SVGAttributes
  rect: SVGAttributes
  stop: SVGAttributes
  switch: SVGAttributes
  symbol: SVGAttributes
  text: SVGAttributes
  textPath: SVGAttributes
  tspan: SVGAttributes
  use: SVGAttributes
  view: SVGAttributes
}

export interface Events {
  // clipboard events
  onCopy: ClipboardEvent
  onCut: ClipboardEvent
  onPaste: ClipboardEvent

  // composition events
  onCompositionend: CompositionEvent
  onCompositionstart: CompositionEvent
  onCompositionupdate: CompositionEvent

  // drag drop events
  onDrag: DragEvent
  onDragend: DragEvent
  onDragenter: DragEvent
  onDragexit: DragEvent
  onDragleave: DragEvent
  onDragover: DragEvent
  onDragstart: DragEvent
  onDrop: DragEvent

  // focus events
  onFocus: FocusEvent
  onFocusin: FocusEvent
  onFocusout: FocusEvent
  onBlur: FocusEvent

  // form events
  onChange: Event
  onBeforeinput: Event
  onInput: Event
  onReset: Event
  onSubmit: Event
  onInvalid: Event

  // image events
  onLoad: Event
  onError: Event

  // keyboard events
  onKeydown: KeyboardEvent
  onKeypress: KeyboardEvent
  onKeyup: KeyboardEvent

  // mouse events
  onAuxclick: MouseEvent
  onClick: MouseEvent
  onContextmenu: MouseEvent
  onDblclick: MouseEvent
  onMousedown: MouseEvent
  onMouseenter: MouseEvent
  onMouseleave: MouseEvent
  onMousemove: MouseEvent
  onMouseout: MouseEvent
  onMouseover: MouseEvent
  onMouseup: MouseEvent

  // media events
  onAbort: Event
  onCanplay: Event
  onCanplaythrough: Event
  onDurationchange: Event
  onEmptied: Event
  onEncrypted: Event
  onEnded: Event
  onLoadeddata: Event
  onLoadedmetadata: Event
  onLoadstart: Event
  onPause: Event
  onPlay: Event
  onPlaying: Event
  onProgress: Event
  onRatechange: Event
  onSeeked: Event
  onSeeking: Event
  onStalled: Event
  onSuspend: Event
  onTimeupdate: Event
  onVolumechange: Event
  onWaiting: Event

  // selection events
  onSelect: Event

  // UI events
  onScroll: UIEvent

  // touch events
  onTouchcancel: TouchEvent
  onTouchend: TouchEvent
  onTouchmove: TouchEvent
  onTouchstart: TouchEvent

  // pointer events
  onPointerdown: PointerEvent
  onPointermove: PointerEvent
  onPointerup: PointerEvent
  onPointercancel: PointerEvent
  onPointerenter: PointerEvent
  onPointerleave: PointerEvent
  onPointerover: PointerEvent
  onPointerout: PointerEvent

  // wheel events
  onWheel: WheelEvent

  // animation events
  onAnimationstart: AnimationEvent
  onAnimationend: AnimationEvent
  onAnimationiteration: AnimationEvent

  // transition events
  onTransitionend: TransitionEvent
  onTransitionstart: TransitionEvent
}

type EventHandlers<E> = {
  [K in keyof E]?: E[K] extends Function ? E[K] : (payload: E[K]) => void
}

// use namespace import to avoid collision with generated types which use
// named imports.
import * as RuntimeCore from '@vue/runtime-core'

type ReservedProps = {
  key?: string | number | symbol
  ref?: RuntimeCore.VNodeRef
  ref_for?: boolean
  ref_key?: string
}

type ElementAttrs<T> = T & ReservedProps

type NativeElements = {
  [K in keyof IntrinsicElementAttributes]: ElementAttrs<
    IntrinsicElementAttributes[K]
  >
}

declare global {
  namespace JSX {
    interface Element extends VNode {}
    interface ElementClass {
      $props: {}
    }
    interface ElementAttributesProperty {
      $props: {}
    }
    interface IntrinsicElements extends NativeElements {
      // allow arbitrary elements
      // @ts-ignore suppress ts:2374 = Duplicate string index signature.
      [name: string]: any
    }
    interface IntrinsicAttributes extends ReservedProps {}
  }
}

// suppress ts:2669
export {}

// Note: this file is auto concatenated to the end of the bundled d.ts during
// build.

declare module '@vue/reactivity' {
  export interface RefUnwrapBailTypes {
    runtimeDOMBailTypes: Node | Window
  }
}
`;let M=!0,c;async function de(){const e=await a(()=>import("./chunks/editor.main.d83c2780.02f6c32a.js"),["assets/chunks/editor.main.d83c2780.02f6c32a.js","assets/chunks/framework.24f0af87.js"]).then(n=>n.e);return M&&typeof c=="function"&&(M=!1,c(e)),e.languages.typescript.typescriptDefaults.setCompilerOptions({target:e.languages.typescript.ScriptTarget.Latest,allowNonTsExtensions:!0,moduleResolution:e.languages.typescript.ModuleResolutionKind.NodeJs,module:e.languages.typescript.ModuleKind.CommonJS,noEmit:!0,esModuleInterop:!0,jsx:e.languages.typescript.JsxEmit.Preserve,allowJs:!0}),e.languages.typescript.typescriptDefaults.setDiagnosticsOptions({noSemanticValidation:!1,noSyntaxValidation:!1}),e.languages.typescript.typescriptDefaults.addExtraLib(Y,"jsx:type"),e.languages.typescript.typescriptDefaults.addExtraLib(`
    declare module 'vue' { ${k} }
  `,"ts:vue"),await Promise.all([(async()=>{const[{default:n},{default:r},{default:t}]=await Promise.all([a(()=>import("./chunks/editor.worker.9c35f395.dcede9b5.js"),[]),a(()=>import("./chunks/html.worker.b57725c2.47285f38.js"),[]),a(()=>import("./chunks/ts.worker.3260b66b.5dceb272.js"),[])]);window.MonacoEnvironment={getWorker(d,o){return o==="html"||o==="handlebars"||o==="razor"?new r:o==="typescript"||o==="javascript"?new t:new n}}})()]),e}function W(e){c=e||null}const K=Symbol(),s={};function x(e,n){s[e]=n}function se(e){const n=window;return n.importMaps||(n.importMaps=s),e=z(e),e=e.replace(/import(.*?)from\s+['"](.*?)['"]/g,(r,t,d)=>{const o=d,m=s[o];return m?(s[`${o}`]||(s[`${o}`]=m),`const ${t} = importMaps['${d}']`):r}),e}function z(e){return e.replace(/import(.*?)from\s+['"]vue['"]/g,(n,r)=>(r=r.replace(/\sas\s/g,":"),`const ${r} = _vue`)).replace(/import 'vue'/g,"")}const le=()=>Math.random().toString(36).slice(2,12),X=e=>typeof e=="object"&&e!==null,Z=e=>function(n,r,t,...d){return Array.isArray(t)&&(t=t.map(o=>Array.isArray(o)?o:X(o)&&!o.__v_isVNode?e.createTextVNode(String(o)):o)),e.createVNode(n,r,t,...d)},q=function(e,n){n=Object.assign({ms:300,defaultDirection:"row"},n);const r=y(()=>a(()=>import("./chunks/Demo.10a78ca5.57e8f492.js"),["assets/chunks/Demo.10a78ca5.57e8f492.js","assets/chunks/framework.24f0af87.js","assets/chunks/theme.d2e99eb5.js"]));e.component("Demo",r),e.config.errorHandler=function(t){console.error(t)},H(Object.assign({},p,{createVNode:Z(p)})),B(e),e.provide(K,n),W(n.onMonacoCreated)};const J=`import * as three from 'three';
import { Color } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

/**\r
 * 加载MxDraw库的核心代码 才能使用Mx的其他模块\r
 * @returns Promise<{@link MxFun}>\r
 * @example\r
 * \`\`\`\r
 * Mx.loadCoreCode().then(()=> console.log("加载完成", Mx.MxFun))\r
 * \`\`\`\r
 */\r
declare function loadCoreCode(): Promise<void>;

type EventType = string | symbol;\r
type PubSubEvent = Record<EventType, (...ages: any) => any>;\r
declare class PubSub<Events extends PubSubEvent = PubSubEvent> {\r
    events: {\r
        [x: EventType]: Events[keyof Events][];\r
    };\r
    constructor();\r
    /**\r
     * 订阅\r
     * @param event 事件名称\r
     * @param callback 事件回调\r
     */\r
    on<Key extends keyof Events>(event: Key, callback: Events[keyof Events]): void;\r
    /**\r
     * 发布\r
     * @param event 事件名称\r
     * @param data 载荷\r
     */\r
    emit<Key extends keyof Events>(event: Key | number, ...data: Parameters<Events[Key]>): void;\r
    /**\r
     * 销毁事件\r
     * @param event 事件名称\r
     * @param callback 事件方法\r
     */\r
    off<Key extends keyof Events>(event: Key, callback?: Events[keyof Events]): void;\r
}

type RendererEventsType = {\r
    "click": () => void;\r
    "hover": () => void;\r
    "mousemove": () => void;\r
    "mouseout": () => void;\r
    "mouseover": () => void;\r
    "mousedown": () => void;\r
    "mouseup": () => void;\r
};\r
/**\r
 * Node 节点\r
 * @type E 事件类型 { "name": { name: string, id:number } } key-val key对应事件名称 val 对应回调值\r
 * @example\r
 * \`\`\`ts\r
 * class ObjClass extends Node<{"added": { node: Node, id: number }}> {}\r
 * \`\`\`\r
 * */\r
declare class Node<E extends PubSubEvent = PubSubEvent, T extends Node<E, Node<E, any>> = Node<E, Node<E, any>>> extends PubSub<E> {\r
    /** 它的父节点 */\r
    parent: (this | T | null);\r
    /** 它的子节点集合 */\r
    children: (this | T)[];\r
    /** 添加子节点 */\r
    add(...ages: (this | T)[]): this;\r
    /** 移除子节点 **/\r
    remove(...ages: (this | T)[]): this;\r
    /** 从父节点中移除 */\r
    removeFromParent(): this;\r
    /** 清除 children */\r
    clear(): this;\r
    /** 根据属性名称找到对应的Node节点\r
     * @param name 属性名称\r
     * @param value 属性值\r
     * @example\r
     * \`\`\`ts\r
     * new Node().getNodeByProperty("id", "23548")\r
     * \`\`\`\r
     *   */\r
    getNodeByProperty<V = any>(name: string, value: V): (this | T) | undefined;\r
    /** 根据属性名称找到对应的Node节点\r
    * @param name 属性名称\r
    * @param value 属性值\r
    * @example\r
    * \`\`\`ts\r
    * new Node().getNodeByProperty("id", "23548")\r
    * \`\`\`\r
    *   */\r
    getNodesByProperty<V = any>(name: string, value: V): (T | this)[];\r
    /** 遍历它的所有子节点包括孙子节点，直到它包含的节点全部遍历完成并都执行传入的方法\r
     * @param callback 回调函数\r
     *  */\r
    traverse(callback: (node: this) => void): void;\r
    /***\r
     * 让它的父节点依次冒泡执行传入的方法的方法\r
     * @param callback 回调函数，第一个参数是父节点, callback的返回值为false 将停止继续传递\r
     * */\r
    traverseParent<V extends (Node<any, any>) = this>(callback: (node: V) => boolean | void): void;\r
    /***\r
     * 发布\r
     * @param event — 事件名称\r
     * @param data — 载荷\r
    **/\r
    emit<Key extends keyof E>(event: number | Key, ...data: Parameters<E[Key]>): void;\r
}\r
declare class RenderOrderNode<E extends PubSubEvent = PubSubEvent, T extends Node<any, any> = Node<any, any>> extends Node<E & RendererEventsType, T> {\r
    constructor();\r
    /**\r
   * 显示顺序\r
   * */\r
    renderOrder: number;\r
    /**\r
     * 设置显示顺序 (通过显示顺序控制图层)\r
     * @param renderOrder 显示顺序\r
     */\r
    setRenderOrder(renderOrder: number): void;\r
    /**\r
     * 得到显示顺序\r
     * @returns number\r
     */\r
    getRenderOrder(): number;\r
    /**\r
     * top 同层级下最上层\r
     * **/\r
    top(): void;\r
    /**\r
     * bottom 同层级下最上层\r
     * */\r
    bottom(): void;\r
    /** 恢复默认显示顺序 */\r
    restoreDefaultRenderOrder(): void;\r
}

/** @module McGiWorldDrawType*/\r
/**\r
 * 动态绘制类型\r
 * @example \`\`\`typescript\r
\r
 * \`\`\`\r
 */\r
declare enum McGiWorldDrawType {\r
    /** 正常绘制 */\r
    kWorldDraw = 1,\r
    /** 动态拖动的绘制 */\r
    kDynDragDraw = 2,\r
    /** 对选择高亮的绘制 */\r
    kSelectDraw = 3\r
}

/**\r
 * 动态绘制类型\r
 * @example \`\`\`typescript\r
\r
 * \`\`\`\r
 */\r
declare enum MxCloneType {\r
    /** 正常Clone */\r
    kClone = 1,\r
    /** 动态拖动Clone */\r
    kDragClone = 2,\r
    /** 数据归档 */\r
    kMxFileClone = 3,\r
    /** 保存数据到DWG文件 */\r
    kSaveDwgClone = 4\r
}\r
/**\r
 * 命令标记\r
 * @example \`\`\`typescript\r
\r
 * \`\`\`\r
 */\r
declare enum MxCommandFlag {\r
    MCRX_CMD_MODAL = 0,\r
    MCRX_CMD_TRANSPARENT = 1,\r
    MCRX_CMD_NO_UNDO_MARKER = 2,\r
    MCRX_CMD_NOPRV = 4\r
}\r
/**\r
 * 控件对象缺省的绘制顺序\r
 * @example \`\`\`typescript\r
\r
 * \`\`\`\r
 */\r
declare enum MxDefaultRenderOrder {\r
    kCADMeshRenderOrder = 10,\r
    kCADCurveRenderOrder = 20,\r
    kMxEntityRenderOrder = 30,\r
    kGripRenderOrder = 110,\r
    kDynJigRenderOrder = 120\r
}\r
/**\r
 * 交互操作，需要的输入的触摸类型.\r
 * @example \`\`\`typescript\r
 * \`\`\`\r
 */\r
declare enum InputToucheType {\r
    kGetBegan = 1,\r
    kGetEnd = 2\r
}\r
type MxColorType = number | string | THREE.Color;\r
type UnstableColor = MxColorType | undefined;

type MxType_MxCloneType = MxCloneType;
declare const MxType_MxCloneType: typeof MxCloneType;
type MxType_MxCommandFlag = MxCommandFlag;
declare const MxType_MxCommandFlag: typeof MxCommandFlag;
type MxType_MxDefaultRenderOrder = MxDefaultRenderOrder;
declare const MxType_MxDefaultRenderOrder: typeof MxDefaultRenderOrder;
type MxType_InputToucheType = InputToucheType;
declare const MxType_InputToucheType: typeof InputToucheType;
type MxType_MxColorType = MxColorType;
type MxType_UnstableColor = UnstableColor;
declare namespace MxType {
  export {
    MxType_MxCloneType as MxCloneType,
    MxType_MxCommandFlag as MxCommandFlag,
    MxType_MxDefaultRenderOrder as MxDefaultRenderOrder,
    MxType_InputToucheType as InputToucheType,
    MxType_MxColorType as MxColorType,
    MxType_UnstableColor as UnstableColor,
  };
}

/** @module McGiWorldDraw*/\r
\r
/**\r
 * McGiWorldDraw 用于构建一个动态绘制回调对象的规范接口\r
 * @abstract 是  {@link MxDbEntity.worldDraw }必须实现的抽象回调方法中的回调对象 通过回调对象完成一些动态绘制任务\r
 * @example \`\`\`typescript\r
 *\r
 * \`\`\`\r
 */\r
interface McGiWorldDraw {\r
    /**\r
     * 得到WorldDraw的绘制类型.\r
     * @returns McGiWorldDrawType\r
     * @example\r
     * \`\`\` typescript\r
     *\r
     * \`\`\`\r
     *\r
     */\r
    getType(): McGiWorldDrawType;\r
    /**\r
     * 绘制一个Three.js对象\r
     * @param ent Three.js对象\r
     * @returns void\r
     * @example\r
     * \`\`\` typescript\r
     *\r
     * \`\`\`\r
     *\r
     */\r
    drawEntity(ent: THREE.Object3D): void;\r
    /**\r
     * 返回动态绘制的控件对像\r
     * @returns MxDrawObject\r
     * @example\r
     * \`\`\` typescript\r
     *\r
     * \`\`\`\r
     *\r
     */\r
    getMxObject(): MxDrawObject;\r
    /**\r
     * 设置绘制颜色\r
     * @param iColor 颜色值\r
     * @returns\r
     * @example\r
     * \`\`\` typescript\r
     *\r
     * \`\`\`\r
     *\r
     */\r
    setColor(iColor: UnstableColor): void;\r
    /**\r
     * 返回绘制颜色\r
     * @returns\r
     * @example\r
     * \`\`\` typescript\r
     *\r
     * \`\`\`\r
     *\r
     */\r
    getColor(): number;\r
    /**\r
     * 设置绘制的线宽\r
     * @returns\r
     * @example\r
     * \`\`\` typescript\r
     *\r
     * \`\`\`\r
     *\r
     */\r
    setLineWidth(iLineWidth: number): void;\r
    /**\r
     * 返回绘制的线宽\r
     * @returns\r
     * @example\r
     * \`\`\` typescript\r
     *\r
     * \`\`\`\r
     *\r
     */\r
    getLineWidth(): number;\r
    /**\r
     * 绘制直线\r
     * @param pt1 第一个点 THREE.Vector3\r
     * @param pt2 第二个点\r
     * @returns\r
     * @example\r
     * \`\`\` typescript\r
     *\r
     * \`\`\`\r
     *\r
     */\r
    drawLine(pt1: THREE.Vector3 | number, pt2: THREE.Vector3 | number, x2?: number, y2?: number): void;\r
    /**\r
     * 绘制连续的直线\r
     * @param points 点数组\r
     * @returns\r
     * @example\r
     * \`\`\` typescript\r
     *\r
     * \`\`\`\r
     *\r
     */\r
    drawLines(points: THREE.Vector3[] | THREE.Vector2[]): void;\r
    /**\r
     * 根据几何数据绘制直线\r
     * @param points 点数组\r
     * @returns\r
     * @example\r
     * \`\`\` typescript\r
     *\r
     * \`\`\`\r
     *\r
     */\r
    drawGeometryLines(geometry: THREE.Geometry): void;\r
    /**\r
     * 绘制圆\r
     * @param cen 圆的中心点 THREE.Vector3\r
     * @param dRadius 圆的半径\r
     * @returns\r
     * @example\r
     * \`\`\` typescript\r
     *\r
     * \`\`\`\r
     *\r
     */\r
    drawCircle(cen: THREE.Vector3, dRadius: number): void;\r
    /**\r
     * 绘文本\r
     * @param sText 文本信息\r
     * @param iSize 文字大小\r
     * @param dAngle  角度\r
     * @param pt 位置\r
     * @returns\r
     * @example\r
     * \`\`\` typescript\r
     *\r
     * \`\`\`\r
     *\r
     */\r
    drawText(sText: string, iSize: number, dAngle: number, pt: THREE.Vector3, width?: number, callGetFontStyle?: (iFontSize: number) => string): THREE.Sprite | null;\r
    /**\r
     * 设置DrawOrder,默认值为100.\r
     * @returns\r
     * @example\r
     * \`\`\` typescript\r
     *\r
     * \`\`\`\r
     *\r
     */\r
    setRenderOrder(iRenderOrder: number): void;\r
    /**\r
     * 得到DrawOrder\r
     * @returns\r
     * @example\r
     * \`\`\` typescript\r
     *\r
     * \`\`\`\r
     *\r
     */\r
    getRenderOrder(): number;\r
    /**\r
     * 设置宽度单位是屏幕像素，默认是屏幕像素，设置false,单位是Threejs坐标。\r
     * @returns\r
     * @example\r
     * \`\`\` typescript\r
     *\r
     * \`\`\`\r
     *\r
     */\r
    setLineWidthByPixels(isPixels: boolean): void;\r
    /**\r
     * 得到宽度单位\r
     * @returns\r
     * @example\r
     * \`\`\` typescript\r
     *\r
     * \`\`\`\r
     *\r
     */\r
    getLineWidthIsPixels(): boolean;\r
    /**\r
     * 设置虚线显示数据。\r
     * @returns\r
     * @example\r
     * \`\`\` typescript\r
     *\r
     * \`\`\`\r
     *\r
     */\r
    setDash(dDashArray: number, dDashRatio: number): void;\r
    /**\r
     * 得到虚线显示数据。\r
     * @returns\r
     * @example\r
     * \`\`\` typescript\r
     *\r
     * \`\`\`\r
     *\r
     */\r
    getDash(): any;\r
    /**\r
     * 设置虚线显示\r
     * @returns\r
     * @example\r
     * \`\`\` typescript\r
     *\r
     * \`\`\`\r
     *\r
     */\r
    setDashLineDisplay(isDashLine: boolean): void;\r
    /**\r
     *是否虚线显示\r
     * @returns\r
     * @example\r
     * \`\`\` typescript\r
     *\r
     * \`\`\`\r
     *\r
     */\r
    isDashLineDisplay(): boolean;\r
    /**\r
     *绘制选择线。\r
     * @returns\r
     * @example\r
     * \`\`\` typescript\r
     *\r
     * \`\`\`\r
     *\r
     */\r
    drawSelectLine(pt1: THREE.Vector3 | number, pt2: THREE.Vector3 | number, x2?: number, y2?: number): void;\r
    /**\r
     * 设置变换矩阵\r
     * @param\r
     */\r
    setMatrix(matrix: THREE.Matrix4 | null): void;\r
    /**\r
     * 返回变换矩阵\r
     * @param\r
     */\r
    getMatrix(): THREE.Matrix4 | null;\r
    /**\r
     *设置透明度\r
     * @returns\r
     * @example\r
     * \`\`\` typescript\r
     *\r
     * \`\`\`\r
     *\r
     */\r
    setOpacity(opacity: number): void;\r
    /**\r
     *返回透明度\r
     * @returns\r
     * @example\r
     * \`\`\` typescript\r
     *\r
     * \`\`\`\r
     *\r
     */\r
    getOpacity(): number;\r
    /**\r
     *绘制纯色填充\r
     * @returns\r
     * @example\r
     * \`\`\` typescript\r
     *\r
     * \`\`\`\r
     *\r
     */\r
    drawSolid(points: THREE.Vector3[]): void;\r
    /**\r
     *把一个对象的绘图属性设置到当前绘图上下文\r
     * @returns\r
     * @example\r
     * \`\`\` typescript\r
     *\r
     * \`\`\`\r
     *\r
     */\r
    setupForEntity(ent: MxDbEntity): void;\r
    /**\r
     *设置drawEntity函数，绘制的three.js对象，附加一个扩展数据，方便在后续选择对象，得到该扩展数据.、\r
     *只会对一次的drawEntity调用有效.\r
     * @returns\r
     * @example\r
     * \`\`\` typescript\r
     *\r
     * \`\`\`\r
     *\r
     */\r
    setXData(xData: any): void;\r
}

type MxDbEntityEventsType = {\r
    onStartGripEidt: () => void;\r
    onEndGripEidt: () => void;\r
};\r
/**\r
 * MxDbEntity 用于构建一个自定义对象的抽象类(该类无法实例化 请通过继承的方式对其抽象方法进行实现)\r
 * @description MxDbEntity 属于 abstract class(抽象类) 主要用途是通过继承这个类实现一个用于动态绘制的图形对象\r
 * 继承实现这个类必须实现的抽象方法：（方法名称前有'Abstract'标签就是必须实现的方法）\r
 * @example \`\`\`typescript\r
 * import THREE from "three"\r
 * import { McGiWorldDraw, MxDbEntity } from "mxdraw"\r
 * class MxLineEntity extends MxDbEntity {\r
 *    constructor() {\r
 *       super(); // 在派生类的构造函数中必须调用 super()\r
 *    }\r
 *    private pt1: THREE.Vector3 = new THREE.Vector3();\r
 *    private pt2: THREE.Vector3 = new THREE.Vector3();\r
 *    worldDraw(pWorldDraw: McGiWorldDraw) {\r
 *        pWorldDraw.drawLine(this.pt1,this.pt2);\r
 *    }\r
 *    ...\r
 * }\r
 * \`\`\`\r
 */\r
type EntityEvent = MxDbEntityEventsType;\r
declare abstract class MxDbEntity extends RenderOrderNode<EntityEvent, MxDbEntity> {\r
    constructor();\r
    /** 该类注册的cmd命令名称 */\r
    static cmd: string;\r
    /** 该类注册的cmd命令绘制函数 */\r
    static draw: Function;\r
    /** 该类是否已注册 */\r
    static isRegister: boolean;\r
    /** 注册该类的cmd命令和初始化 (引入该类时自动注册 当该类的isRegister为ture时表示已经注册) */\r
    static register(): void;\r
    /** 使用该类的cmd命令 执行默认的绘制功能 */\r
    static use<T extends MxDbEntity = MxDbEntity>(callback?: (obj: T) => any, data?: any): Promise<T>;\r
    /**\r
     * 颜色值\r
     * */\r
    color: UnstableColor;\r
    /**\r
     * 设置透明度 0 ~ 1,1表示完全不透明，0表示全透明.\r
     * */\r
    opacity: number;\r
    /**\r
     * 该对象是否可见\r
     * */\r
    visible: boolean;\r
    /**\r
     * 用户自定义数据.\r
     * */\r
    userData: {\r
        [key: string]: any;\r
    };\r
    protected sGuid: string;\r
    dLineWidth: number;\r
    lineWidthByPixels: boolean;\r
    dDashArray: number;\r
    dDashRatio: number;\r
    layer: string;\r
    protected use_smallcoord_display: boolean;\r
    abstract getTypeName(): string;\r
    initGuid(guid: string): void;\r
    toSmallcoord2(mxobj: MxDrawObject, x: number, y: number, z?: number): THREE.Vector3;\r
    toSmallcoord(mxobj: MxDrawObject, pt: THREE.Vector3): THREE.Vector3;\r
    isUseSmallcoordDisplay(): boolean;\r
    setUseSmallcoordDisplay(use_smallcoord_display: boolean): void;\r
    /**\r
     * 自定义对象的绘制函数。在方法中定义如何绘制图形\r
     * @param  pWorldDraw 绘制对象{@link McGiWorldDraw }\r
     * @returns void\r
     */\r
    abstract worldDraw(pWorldDraw: McGiWorldDraw): void;\r
    /**\r
     * 返回自定义对象的夹点.\r
     * @param\r
     * @returns Array<THREE.Vector3>\r
     */\r
    abstract getGripPoints(): Array<THREE.Vector3>;\r
    /**\r
     * 移动自定义对象的夹点.\r
     * @param\r
     * @returns boolean\r
     */\r
    abstract moveGripPointsAt(index: number, offset: THREE.Vector3): boolean;\r
    /**\r
     * 自定义对象数据输入，辅助函数.\r
     * @param obj 数据对象\r
     * @param aryProp 属性名称列表\r
     * @param hooks.getVal 交互数据输入钩子函数 return null | undefined 默认深拷贝 ; return Value 返回数据\r
     * @param hooks.getCacheVal 归档数据构子函数 return null | undefined 默认深拷贝 ; return Value 返回数据\r
     * @returns boolean\r
     * @example\r
     * \`\`\` typescript\r
     *  class MxLine extends MxDbEntity {\r
     *    dwgIn(obj) {\r
     *        // 必须调用 同步自定义数据对象输入\r
     *       this.dwgInHelp(obj,["xxx"])\r
     *    }\r
     *  }\r
     * \`\`\`\r
     */\r
    protected dwgInHelp<T extends (string | {\r
        key: string;\r
        default: any;\r
    })[]>(obj: any, aryProp: T, hooks?: {\r
        getVal?: (v: any) => any;\r
        getCacheVal?: (v: any) => any;\r
    }): boolean;\r
    /**\r
     * 自定义对象数据输出 辅助函数.\r
     * @param\r
     * @returns object\r
     * @example\r
     * \`\`\` typescript\r
     *  class MxLine extends MxDbEntity {\r
     *    dwgOut(obj) {\r
     *        // 必须调用 同步自定义数据对象输出\r
     *       this.dwgOutHelp(obj,["xxx"])\r
     *    }\r
     *  }\r
     * \`\`\`\r
     */\r
    protected dwgOutHelp(obj: any, aryProp: (string | {\r
        key: string;\r
        default: any;\r
    })[]): any;\r
    /**\r
     * 新创建一个自定义对象 (默认调用该对象的构造函数来创建新的对象)\r
     * @param { T } options\r
     * @returns MxDbEntity\r
     */\r
    create(options?: {}): any;\r
    /**\r
     * 自定义对象数据输入，必须要实现该函数\r
     * @param\r
     * @returns boolean\r
     * @example\r
     * \`\`\` typescript\r
     *  class MxLine extends MxDbEntity {\r
     *    dwgIn(obj) {\r
     *        // 必须调用 同步自定义数据对象输入\r
     *       this.onDwgIn(obj)\r
     *    }\r
     *  }\r
     * \`\`\`\r
     */\r
    abstract dwgIn(obj: {\r
        type: MxType.MxCloneType;\r
        [x: string]: any;\r
    }): boolean;\r
    /**\r
     * 自定义对象数据输出，必须要实现该函数\r
     * @param\r
     * @returns object\r
     * @example\r
     * \`\`\` typescript\r
     *  class MxLine extends MxDbEntity {\r
     *    dwgOut(obj) {\r
     *        // 必须调用 同步自定义数据对象输出\r
     *       this.onDwgOut(obj)\r
     *    }\r
     *  }\r
     * \`\`\`\r
     */\r
    abstract dwgOut(obj: {\r
        type: MxType.MxCloneType;\r
        [x: string]: any;\r
    }): object;\r
    /**\r
     * 自定义实体的矩阵 坐标变换 (需要重写该方法实现如果通过矩阵对自定义实体进行操作 默认不会进行任何操作)\r
     * @param _mat THREE.Matrix4 变化矩阵\r
     * @returns void\r
     */\r
    transformBy(_mat: THREE.Matrix4): void;\r
    /**\r
     * 返回对象最小外包.\r
     * @param\r
     * @returns void\r
     */\r
    getGeomExtents(): THREE.Box3 | null;\r
    /**\r
     * 对一个点到这个对象的最近点 。\r
     * iOperationType == 0正常操作求值最近点.\r
     * iOperationType == 1点选择操作求值最近点.\r
     * @param\r
     * @returns void\r
     */\r
    getClosestPointTo(pt: THREE.Vector3, iOperationType?: number): THREE.Vector3 | null;\r
    private getImp;\r
    /**\r
     * 更新显示\r
     * @param 为true 重绘时立即更新显示,默认值false\r
     * @returns boolean\r
  \r
     */\r
    setNeedUpdateDisplay(isImmediate?: boolean): boolean;\r
    /**\r
     * 返回对象所在的控件对象。\r
     * @returns {@link MxDrawObject}\r
     */\r
    getMxObject(): MxDrawObject | null;\r
    /**\r
     * 视区显示比较发生成变化，继承类可以向应该事件，更新显示大小。\r
     * @returns boolean\r
     */\r
    protected onViewChange(): boolean;\r
    /**\r
     * 得到对象的id.\r
     * @returns number\r
     */\r
    objectId(): number;\r
    /**\r
     * 删除对象\r
     * @returns boolean\r
     */\r
    erase(): boolean;\r
    /**\r
     * 设置图层\r
     * @returns boolean\r
     */\r
    setLayer(layer: string): void;\r
    /**\r
     * 得到图层\r
     * @returns boolean\r
     */\r
    getLayer(): string;\r
    /**\r
     * 设置颜色\r
     * @param color 颜色值\r
     * @returns boolean\r
     */\r
    setColor(color: MxColorType): this;\r
    /**\r
     * 得到颜色\r
     * @returns boolean\r
     */\r
    getColor(): MxColorType;\r
    /**\r
     * 复制克隆对象。\r
     * @param type {@link MxType.MxCloneType} 传入参数区分是正常拷贝还是动态拷贝\r
     * @returns MxDbEntity\r
     */\r
    clone(type?: number): any;\r
    /**\r
     * 自定义对象内部数据输入同步（重写实现dwgIn抽象方法时 必须在实现中调用 this.onDwgIn(obj)）\r
     * @param obj dwgIn抽象方法的回调数据\r
     */\r
    protected onDwgIn(obj: any): void;\r
    /**\r
     * 自定义对象内部数据输出同步（重写实现dwgIn抽象方法 必须在实现中调用 this.onDwgIn(obj)\r
     * @param obj dwgOut抽象方法的回调数据\r
     */\r
    protected onDwgOut(obj: any): void;\r
    /**\r
     * 初始自定义对象的类型信息.(如果需要实现该图形对象的保存数据和恢复数据的功能, 需要在项目中初始化一次该图形对象的类)\r
     * @returns\r
     */\r
    rxInit(): void;\r
    /**\r
     * 设置显示顺序 (通过显示顺序控制图层)\r
     * @param renderOrder 显示顺序\r
     */\r
    setRenderOrder(renderOrder: number): void;\r
    /**\r
     * 得到显示顺序\r
     * @returns number\r
     */\r
    getRenderOrder(): number;\r
    /**\r
     * 设置线宽是否随像素\r
     * @returns number\r
     */\r
    setLineWidthByPixels(isPixels: boolean): this;\r
    /**\r
     * 线宽是否随像素\r
     * @returns number\r
     */\r
    getLineWidthByPixels(): boolean;\r
    /**\r
     * 设置线宽\r
     * @returns number\r
     */\r
    setLineWidth(dLineWidth: number): this;\r
    /**\r
     * 得到线宽\r
     * @returns number\r
     */\r
    getLineWidth(): number;\r
    /**\r
     * 返回曲线长度\r
     * @returns number\r
     */\r
    getGetLength(): number;\r
    /**\r
     * 设置虚线 +实线的长度.\r
     * dDashRatio确定虚线，与实线的比率.\r
     * @returns number\r
     */\r
    setDashLen(dashLen: number): this;\r
    /**\r
     * 设置虚线，与实线的比率\r
     * @returns number\r
     */\r
    setDashRatio(dDashRatio: number): this;\r
    /**\r
     * 设置实线虚线总段数 = 1 / dashArray\r
     * @returns number\r
     */\r
    setDashArray(dDashArray: number): this;\r
    /**\r
     * 设置虚线数据\r
     * @returns number\r
     */\r
    setDash(dDashArray: number, dDashRatio: number): this;\r
    /**\r
     * 得到虚线数据\r
     * @returns number\r
     */\r
    getDash(): any;\r
    /**\r
     * 设置虚线显示。并初始化一个默认值。\r
     * @returns number\r
     */\r
    setDashLineDisplay(isDashLine: boolean): this;\r
    /**\r
     * 是否虚线显示\r
     * @returns number\r
     */\r
    isDashLineDisplay(): boolean;\r
    /**\r
     * 返回唯一标识guid\r
     * @returns string\r
     */\r
    guid(): string;\r
    /**\r
     * 修改唯一标识guid\r
     * @returns string\r
     */\r
    setGuid(val: string): string;\r
    /**\r
     * 添加一个事件处理\r
     * @returns void\r
     */\r
    addEvent: <Key extends keyof MxDbEntityEventsType | keyof RendererEventsType>(event: Key, callback: (() => void) | (() => void) | (() => void) | (() => void) | (() => void) | (() => void) | (() => void) | (() => void) | (() => void)) => void;\r
    /**\r
     * 删除一个事件处理\r
     * @returns void\r
     */\r
    removeEvent: <Key extends keyof MxDbEntityEventsType | keyof RendererEventsType>(event: Key, callback?: (() => void) | (() => void) | (() => void) | (() => void) | (() => void) | (() => void) | (() => void) | (() => void) | (() => void) | undefined) => void;\r
    private callEvent;\r
    /**\r
     * 对象结束开始编辑\r
     * @returns string\r
     */\r
    onEndGripEidt(): void;\r
    /**\r
     * 对象开始开始编辑\r
     * @returns string\r
     */\r
    onStartGripEidt(): any;\r
    /**\r
     * 把一个对象变成一个json字体串.\r
     * @returns void\r
     */\r
    toJsonString(type?: MxType.MxCloneType): string;\r
    /**\r
     * 从一个josn字符串加载数据.\r
     * @returns void\r
     */\r
    fromJsonString(str: string): boolean;\r
}

/** @module MxDbGroup */\r
/**\r
 * MxDbGroup 组对象对象.\r
 *\r
 */\r
interface MxDbGroup {\r
    name(): string;\r
    append(id: number): void;\r
    clear(): void;\r
    getAll(): number[];\r
    has(id: number): boolean;\r
    delete(id: number): boolean;\r
}

/** @module MxDbLayerTableRecord */\r
/**\r
 * MxDbDatabase 当前数据库对象.\r
 *\r
 */\r
interface MxDbLayerTableRecord {\r
    getName(): string;\r
    setVisible(visible: boolean): void;\r
    getVisible(): boolean;\r
}

/** @module MxDbDatabase */\r
\r
/**\r
 * MxDbDatabase 当前数据库对象.\r
 *\r
 */\r
declare class MxDbDatabase {\r
    private _mxDatabase;\r
    constructor(mxDatabase: any);\r
    /**\r
     * 添加图层.\r
     * @example\r
     * \`\`\`typescript\r
     *\r
     * \`\`\`\r
     */\r
    addLayer(layer: string): MxDbLayerTableRecord;\r
    /**\r
     * 显示或隐藏图层\r
     * @example\r
     * \`\`\`typescript\r
     *\r
     * \`\`\`\r
     */\r
    showLayer(layer: string, isVisible: boolean): void;\r
    /**\r
     * 设置当前图层\r
     * @example\r
     * \`\`\`typescript\r
     *\r
     * \`\`\`\r
     */\r
    setCurrentLayer(layer: string): MxDbLayerTableRecord;\r
    /**\r
     * 得到图层对象.\r
     * @example\r
     * \`\`\`typescript\r
     *\r
     * \`\`\`\r
     */\r
    getLayer(layer: string): MxDbLayerTableRecord;\r
    /**\r
     * 添加对象到当前数据库.\r
     * @example\r
     * \`\`\`typescript\r
     *\r
     * \`\`\`\r
     */\r
    addEntity(ent: MxDbEntity): number;\r
    /**\r
     * 根据组名，得到组对象。\r
     * @example\r
     * \`\`\`typescript\r
     *\r
     * \`\`\`\r
     */\r
    getGroup(sName: string): MxDbGroup;\r
    /**\r
     * 添加一个组，如果组已经存在，直接返回该组。\r
     * @example\r
     * \`\`\`typescript\r
     *\r
     * \`\`\`\r
     */\r
    addGroup(sName: string): MxDbGroup;\r
    /**\r
     * 得到一个实体所在的所有组。\r
     * @example\r
     * \`\`\`typescript\r
     *\r
     * \`\`\`\r
     */\r
    getEntityInGroup(id: number): MxDbGroup[];\r
    /**\r
     * 删除一个组.\r
     * @example\r
     * \`\`\`typescript\r
     *\r
     * \`\`\`\r
     */\r
    deleteGroup(sName: string): MxDbGroup;\r
}

declare class MxVueComandLine {\r
    [x: string]: any;\r
    msCmdText: string;\r
    msCmdDisplay: string;\r
    msCmdTip: string;\r
    mUpDisplayFun: ((data: {\r
        msCmdTip: string;\r
        msCmdDisplay: string;\r
        msCmdText: string;\r
    }) => void) | undefined;\r
    mxFunObject: undefined;\r
    mountUpDisplayFun: (fun: ((data: {\r
        msCmdTip: string;\r
        msCmdDisplay: string;\r
        msCmdText: string;\r
    }) => void) | undefined) => void;\r
    upDisplay(): void;\r
    setCmdText: (str: string) => void;\r
    getCmdText: () => string;\r
    getCmdDisplay: () => string;\r
    setCmdDisplay: (str: string) => void;\r
    addCmdDisplay: (str: string) => void;\r
    setCmdTip: (str: string) => void;\r
    getCmdTip: () => string;\r
}\r
declare class MxDynamicInput {\r
    [x: string]: any;\r
    mType: number;\r
    mPos: number[];\r
    mTip: string;\r
    mValue1: string;\r
    mValue1Pos: number[];\r
    mValue2: string;\r
    mValue2Pos: number[];\r
    misShow: boolean;\r
    focusIndex: number;\r
    mOnKeydownEvent: ((arg0: any) => void) | undefined;\r
    mFocusValue: string;\r
    setFocusValue: (value: string) => void;\r
    getFocusValue: () => string;\r
    getFocusIndex: () => number;\r
    setFocusIndex: (index: number) => void;\r
    mountKeydownEvent: (fun: ((arg0: any) => void) | undefined) => void;\r
    onKeydown: (keyCode: any) => void;\r
    setType: (type: number) => void;\r
    getType: () => number;\r
    isShow: () => boolean;\r
    setPos: (pos: number[]) => void;\r
    setTip: (tip: string) => void;\r
    setValue1: (val: string) => void;\r
    getValue1: () => string;\r
    setValue1Pos: (pos: number[]) => void;\r
    setValue2: (val: string) => void;\r
    getValue2: () => string;\r
    setValue2Pos: (pos: number[]) => void;\r
    setShow: (isShow: boolean) => void;\r
    getData: () => {\r
        list: Array<{\r
            value: string;\r
            readonly: boolean;\r
            show?: boolean;\r
            pos?: number[];\r
        }>;\r
        pos: number[];\r
        postype: number;\r
    } | undefined;\r
}\r
declare class MxVueInterface {\r
    [x: string]: any;\r
    mSetCoordFun: ((coordTip: string) => void) | undefined;\r
    mUpdateCursorFun: ((cursorType: string) => void) | undefined;\r
    mOnKeydownEvent: ((arg0: any) => void) | undefined;\r
    mCursorType: string;\r
    mComandLine: MxVueComandLine;\r
    mdynamicInput: MxDynamicInput;\r
    mMxEvents: {\r
        [key: string]: Function;\r
    };\r
    mxFunObject: any;\r
    mFooterData: any;\r
    mLinetypeComboxData: any;\r
    mTitle: any;\r
    mTopButtonBarData: any;\r
    mMenuBarData: any;\r
    mRighButtonBarData: any;\r
    mLeftButtonBarData: any;\r
    mTitleButtonBarData: any;\r
    mLayerComboxData: any;\r
    mColorComboxData: any;\r
    mountSetCoordFun: (fun: ((coordTip: string) => void) | undefined) => void;\r
    mountUpdateCursorFun: (fun: ((cursorType: string) => void) | undefined) => void;\r
    mountKeydownEvent: (fun: ((arg0: any) => void) | undefined) => void;\r
    onKeydown: (keyCode: number) => void;\r
    setTipCoord: (str: any) => void;\r
    getCursorType: () => string;\r
    setCursorType: (curtype: string | number) => void;\r
    getTitle: () => any;\r
    getTopButtonBarData: () => any;\r
    getMenuBarData: () => any;\r
    getRighButtonBarData: () => any;\r
    getLeftButtonBarData: () => any;\r
    getTitleButtonBarData: () => any;\r
    getLayerComboxData: () => any;\r
    getColorComboxData: () => any;\r
    getLinetypeComboxData: () => any;\r
    getFooterData: () => any;\r
    sendStringToExecute: (sCmd: any) => void;\r
    getCmdLine: () => MxVueComandLine;\r
    getDynamicInput: () => MxDynamicInput;\r
    init: (mxFun: any) => void;\r
    OnMxEvent: (event: {\r
        [x: string]: any;\r
    }) => void;\r
    mountMxEvent: (name: string | number, call: any) => void;\r
}

/**\r
 * 创建图纸展示控件实例\r
 * @param canvasId 提供一个canvas元素或者唯一的ID或者class类亦或者Jquery选中的元素\r
 * @paramType string | HTMLCanvasElement | JQuery<HTMLElement>\r
 * @param cadFile 提供要展示的图纸名称\r
 * @paramType string\r
 * @param callback 图纸展示控件创建完成后的回调函数 回调参数mxDraw和dom\r
 * @paramType function\r
 * @param isNewFile 是否新建文件\r
 * @paramType boolean\r
 * @return void\r
 * @example\r
 * \`\`\` typescript\r
 * Mx.MxFun.createMxObject({\r
 *   canvasId: "my-app",\r
 *   cadFile： "test2.dwg",\r
 *   callback(mxDraw, { canvas, canvasParent }) {\r
 *       console.log(mxDraw, canvas, canvasParent)\r
 *   },\r
 *   isNewFile: true\r
 * })\r
 * \`\`\`\r
 */\r
declare function createMxObject(this: MxFunType, { canvasId, cadFile, callback, isNewFile, useWebsocket, isAutoResize, mapBox, isMxCAD, userIdentitySign, isCPPMxCAD }: {\r
    canvasId?: string;\r
    cadFile?: string | string[];\r
    callback?: (mxDraw: MxDrawObject, dom: {\r
        canvas: HTMLCanvasElement;\r
        canvasParent: CanvasParent;\r
    }) => void;\r
    isNewFile?: boolean;\r
    useWebsocket?: boolean;\r
    isAutoResize?: boolean;\r
    mapBox?: any;\r
    isMxCAD?: boolean;\r
    userIdentitySign?: string;\r
    isCPPMxCAD?: boolean;\r
}): void;

declare let mxUiData: MxVueInterface;\r
interface MxFunClass {\r
    /** mxdraw引入初始化(一般用于在这个阶段注册命令) */\r
    on(name: 'init'): void;\r
    /**\r
     * 注册一个系统事件的监听\r
     * init 事件会在模块加载完成后触发。\r
     * */\r
    on(eventName: string, call: any): void;\r
}\r
/**\r
 * MxFun 模块\r
 * 导出库时已实例化，只需要调用实例方法 例如：\r
 * \`\`\`typescript\r
 *  Mx.MxFun.createMxObject\r
 * \`\`\`\r
 */\r
declare class MxFunClass {\r
    createMxObject: typeof createMxObject;\r
    /**\r
     * 为程序设置服务器地址\r
     * @param MXSERVER 服务器地址\r
     * @return void\r
     * @example\r
     * \`\`\` typescript\r
     * Mx.MxFun.setMxServer("ws://localhost:5090")\r
     * \`\`\`\r
     */\r
    setMxServer(MXSERVER?: string): void;\r
    /**\r
     * 屏幕转文档坐标\r
     * @param  x 坐标x\r
     * @param  y 坐标y\r
     * @param  z 坐标z\r
     * @return THREE.Vector3 文档坐标\r
     * @example\r
     * \`\`\` typescript\r
     * const vector3 = Mx.MxFun.screenCoord2Doc(36, 21, 0)\r
     * console.log(vector3)\r
     * \`\`\`\r
     */\r
    screenCoord2Doc(x: number | THREE.Vector3, y?: number): THREE.Vector3;\r
    /**\r
     * 文档转屏幕坐标.\r
     * @param  x 坐标x\r
     * @param  y 坐标y\r
     * @param  z 坐标z\r
     * @return THREE.Vector3 屏幕坐标\r
     * @example\r
     * \`\`\` typescript\r
     * const vector3 = Mx.MxFun.docCoord2Screen(36, 21, 0)\r
     * console.log(vector3)\r
     * \`\`\`\r
     */\r
    docCoord2Screen(x: number | THREE.Vector3, y?: number): THREE.Vector3;\r
    /**\r
     * 获取当前绘图控件对象\r
     * @return MxDrawObjectType 当前绘图控件对象\r
     * @example\r
     * \`\`\` typescript\r
     * const mxDraw = Mx.MxFun.getCurrentDraw()\r
     * mxDraw.getScene()\r
     * \`\`\`\r
     */\r
    getCurrentDraw(): MxDrawObject;\r
    /**\r
     * 添加一个MxDbEntity实体到当前绘图对象上。\r
     * @param ent  实体对象\r
     * @returns number 返回对象的id.\r
     * @example\r
     * \`\`\`typescript\r
     *\r
     *\r
     * \`\`\`\r
     */\r
    addToCurrentSpace(ent: MxDbEntity): number;\r
    /**\r
     * 初始化插件的UI数据对象。\r
     * @param uiDataObj\r
     * @return\r
     * @example\r
     * \`\`\` typescript\r
     * \`\`\`\r
     */\r
    initUiDataObject(uiDataObj: typeof mxUiData): void;\r
    /**\r
     * 获取UI数据对象\r
     * @param uiDataObj\r
     * @return  mxUiData\r
     * @example\r
     * \`\`\` typescript\r
     * \`\`\`\r
     */\r
    getUIData(): MxVueInterface;\r
    /**\r
     * 获得到当前数据库对象.\r
     * @return MxDbDatabase\r
     * @example\r
     * \`\`\` typescript\r
     * \`\`\`\r
     */\r
    getCurrentDatabase(): MxDbDatabase;\r
    /**\r
     * 梦想开发测试\r
     * @param p\r
     * @return any\r
     * @example\r
     * \`\`\` typescript\r
     * console.log(Mx.MxFun.TestMX());\r
     * \`\`\`\r
     */\r
    testMX(p?: any): any;\r
    /**\r
     * 加载一个图片对象，返回Three.js材质对象，该函数具有缓存功能，下次加载同样的图片，可以直接返回.\r
     * @param p\r
     * @return any\r
     * @example\r
     * \`\`\` typescript\r
     *\r
     * \`\`\`\r
     */\r
    loadImageMaterial(imageUrlPath: string, callResult?: (material: THREE.MeshLambertMaterial) => void | null): Promise<THREE.MeshLambertMaterial | null>;\r
    /**\r
     * 在图上选择一个对象。\r
     * @param strPrompt  提示字符串\r
     * @param filter  过滤条件\r
     * @returns number 返回对象的id\r
     * @example\r
     * \`\`\`typescript\r
     *\r
     *\r
     * \`\`\`\r
     */\r
    selectEnt(strPrompt: string, filter?: any): Promise<number>;\r
    /** 初始化MxDbEntity的类型 */\r
    initMxDbEntityType: (entity: MxDbEntity) => void;\r
    /** 获取THREE */\r
    getTHREE: () => typeof three;\r
    /**\r
     * 设置加载dwg文件，直接使用html get协议加载数据，这样就不需要梦想后台服务器程序。\r
     * @param isStaticLoad 是否启用html get协议加载数据文件\r
     * @return void\r
     * @example\r
     * \`\`\` typescript\r
     * Mx.MxFun.enablStaticLoad(true)\r
     * \`\`\`\r
     */\r
    enablStaticLoad: (isStaticLoad?: boolean) => void;\r
    /**\r
     * 设置加载dwg文件，直接使用html get协议加载数据时，使用的服务器地址。\r
     * @param server 服务网络地址.\r
     * @return void\r
     * @example\r
     * \`\`\` typescript\r
     * Mx.MxFun.setStaticServer("http://localhost:3000/demo");\r
     * \`\`\`\r
     */\r
    setStaticServer: (server: string) => void;\r
    /**\r
     * 注册命令\r
     * @param cmdName 命令名\r
     * @param fun 命令函数,cmdFlag取值MxCommandFlag枚举的逻辑或\r
     * @return void\r
     * @example\r
     * \`\`\` typescript\r
     * Mx.MxFun.addCommand("draw", ()=> {\r
     *   console.log("draw")\r
     * })\r
     * \`\`\`\r
     */\r
    addCommand: (cmdName: string, fun: Function, cmdFlag?: number) => void;\r
    /**\r
     * 执行命令\r
     * @param cmdName 命令名\r
     * @return boolean 命令执行成功为true\r
     * @example\r
     * \`\`\` typescript\r
     * if(Mx.MxFun.sendStringToExecute("draw")) {\r
     *   console.log("成功执行draw命令")\r
     * }\r
     * \`\`\`\r
     */\r
    sendStringToExecute: (cmdName: string, ages?: any) => boolean;\r
    /**\r
     * 调用后台服务程序中的NodeJS用户定义函数 后台程序使用Mx.MxFun.registFun注册用户定义函数\r
     * @param funName 函数名\r
     * @param param 函数参数\r
     * @param retfun 函数返回值回调\r
     * @return void\r
     * @example\r
     * \`\`\` typescript\r
     * Mx.MxFun.call("getDrawObject", {\r
     *   cadFile: "test.dwg"\r
     * }, (res)=> {\r
     *   console.log(res)\r
     * })\r
     * \`\`\`\r
     */\r
    call: (funName: string, param?: any, retfun?: Function) => void;\r
    /**\r
     * 屏幕坐标长度转THREE.JS坐标长度\r
     * @param len 屏幕坐标长度\r
     * @return number THREE.JS坐标长度\r
     * @example\r
     * \`\`\` typescript\r
     * const len = Mx.MxFun.screenCoordLong2World(36)\r
     * console.log(len)\r
     * \`\`\`\r
     */\r
    screenCoordLong2World: (len: number) => number;\r
    /**\r
     * 屏幕坐标长度转文档坐标长度\r
     * @param len 屏幕坐标长度\r
     * @return number 文档坐标长度\r
     * @example\r
     * \`\`\` typescript\r
     * const len = Mx.MxFun.screenCoordLong2Doc(36)\r
     * console.log(len)\r
     * \`\`\`\r
     */\r
    screenCoordLong2Doc: (len: number) => number;\r
    /**\r
     * 文档坐标长度转屏幕坐标长度\r
     * @param len 文档坐标长度\r
     * @return number 屏幕坐标长度\r
     * @example\r
     * \`\`\` typescript\r
     * const len = Mx.MxFun.docCoordLong2Screen(36)\r
     * console.log(len)\r
     * \`\`\`\r
     */\r
    docCoordLong2Screen: (len: number) => number;\r
    /**\r
     * THREE.JS坐标长度转屏幕坐标长度\r
     * @param len THREE.JS坐标长度\r
     * @return number 屏幕坐标长度\r
     * @example\r
     * \`\`\` typescript\r
     * const len = Mx.MxFun.worldCoordLong2Doc(36)\r
     * console.log(len)\r
     * \`\`\`\r
     */\r
    worldCoordLong2Doc: (len: number) => number;\r
    /**\r
     * DWG文档坐标长度到ThreeJS坐标长度\r
     * @returns number\r
     * @example\r
     * \`\`\`typescript\r
     *\r
     *\r
     * \`\`\`\r
     */\r
    docCoordLong2World: (l: number) => number;\r
    /**\r
     * 屏幕坐标转THREE.JS坐标.\r
     * @param  x 坐标x\r
     * @param  y 坐标y\r
     * @param  z 坐标z\r
     * @return THREE.Vector3 THREE.JS坐标\r
     * @example\r
     * \`\`\` typescript\r
     * const vector3 = Mx.MxFun.screenCoord2World(36, 21, 0)\r
     * console.log(vector3)\r
     * \`\`\`\r
     */\r
    screenCoord2World: (x: number | THREE.Vector3, y?: number, z?: number) => THREE.Vector3;\r
    /**\r
     * THREE.JS坐标转屏幕坐标.,屏幕坐标的Y轴向下。坐标原点在左上角.\r
     * @param  x 坐标x\r
     * @param  y 坐标y\r
     * @param  z 坐标z\r
     * @return THREE.Vector3 屏幕坐标\r
     * @example\r
     * \`\`\` typescript\r
     * const vector3 = Mx.MxFun.worldCoord2Screen(36, 21, 0)\r
     * console.log(vector3)\r
     * \`\`\`\r
     */\r
    worldCoord2Screen: (x: number | THREE.Vector3, y?: number, z?: number) => THREE.Vector3;\r
    /**\r
     * 文档坐标转THREE.JS坐标\r
     * 说明： 文档坐标，THREE.JS坐标的X轴都是从左到右，Y轴是下到上,但是屏幕像素坐标系：X轴都是从左到右，Y轴是上到下\r
     * @param  x 坐标x\r
     * @param  y 坐标y\r
     * @param  z 坐标z\r
     * @return THREE.Vector3 THREE.JS坐标\r
     * @example\r
     * \`\`\` typescript\r
     * const vector3 = Mx.MxFun.docCoord2World(36, 21, 0)\r
     * console.log(vector3)\r
     * \`\`\`\r
     */\r
    docCoord2World: (x: number, y: number, z: number) => THREE.Vector3;\r
    /**\r
     * THREE.JS坐标转文档坐标.\r
     * @param  x 坐标x\r
     * @param  y 坐标y\r
     * @param  z 坐标z\r
     * @return THREE.Vector3 文档坐标\r
     * @example\r
     * \`\`\` typescript\r
     * const vector3 = Mx.MxFun.worldCoord2Doc(36, 21, 0)\r
     * console.log(vector3)\r
     * \`\`\`\r
     */\r
    worldCoord2Doc: (x: number, y: number, z: number) => THREE.Vector3;\r
    /**\r
     * 更新显示，使用Three.js绘制了对象，调用该函数更新显示。\r
     * @return void\r
     * @example\r
     * \`\`\` typescript\r
     * Mx.MxFun.updateDisplay()\r
     * \`\`\`\r
     */\r
    updateDisplay: () => void;\r
    /**\r
     * 设置窗口鼠标等事件的回调操作\r
     * @param fun  参数1 type： 鼠标事件类型 "mouseup"鼠标释放 、"mousedown" 鼠标按下 参数2 event：事件对象 返回值: number 为0，表示事件往下传递，如果非0，表示事件已经被处理，不要往下传递了\r
     * @return void\r
     * @example\r
     * \`\`\` typescript\r
     * Mx.MxFun.addWindowsEvent((type, event)=> {\r
     *   console.log(event)\r
     *   if(type = "mouseup") {\r
     *       console.log("鼠标释放")\r
     *   }else {\r
     *       console.log("鼠标按下")\r
     *   }\r
     *  // 事件往下传递\r
     *  // return 0\r
     *  // 事件已处理不再传递\r
     *   return -1\r
     * })\r
     * \`\`\`\r
     */\r
    addWindowsEvent: (fun: (type: string, event: any) => number) => void;\r
    /**\r
     * 当前是否有命令在运行\r
     * @return boolean\r
     * @example\r
     * \`\`\` typescript\r
     * if(Mx.MxFun.isRunningCommand()) {\r
     *    // 当前已有命令在运行\r
     * }\r
     * \`\`\`\r
     */\r
    isRunningCommand: () => boolean;\r
    /**\r
     * 窗口缩放，把指定的范围内的图形放到视区中\r
     * @param dLBx 矩形框范围的左下角X坐标\r
     * @param dLBy 矩形框范围的左下角X坐标\r
     * @param dRTx 矩形框范围的左下角X坐标\r
     * @param dRTy 矩形框范围的左下角X坐标\r
     * @param isWorld 传入的坐标是否是thruee.js坐标，默认传文档坐标\r
     * @return void\r
     * @example\r
     * \`\`\` typescript\r
     * Mx.MxFun.zoomW(21, 22, 300, 310, false)\r
     * \`\`\`\r
     */\r
    zoomW: (dLBx: number, dLBy: number, dRTx: number, dRTy: number, isWorld?: boolean) => void;\r
    zoomAll: () => void;\r
    /**\r
     * 显示或隐藏图层\r
     * @param idLayer 图层id,或层名\r
     * @param isShow 是否显示\r
     * @return void\r
     * @example\r
     * \`\`\` typescript\r
     * Mx.MxFun.showLayer(366, true)\r
     * Mx.MxFun.showLayer("2363", fasle)\r
     * \`\`\`\r
     */\r
    showLayer: (idLayer: number | string, isShow: boolean) => void;\r
    /**\r
     * 输出字符串到命令行.\r
     * @param sval 输出字符串\r
     * @param ...val 剩余参数 命令cmd\r
     * @return void\r
     * @example\r
     * \`\`\` typescript\r
     * Mx.MxFun.acutPrintf("{0}:", "draw")\r
     * \`\`\`\r
     */\r
    acutPrintf: (format: string, ...val: string[]) => void;\r
    /**\r
     * 得到地址栏参数\r
     * @param name\r
     * @return string 地址栏参数\r
     * @example\r
     * \`\`\` typescript\r
     *  if(Mx.MxFun.getQueryString("mousetest") === "y")\r
     * \`\`\`\r
     */\r
    getQueryString: (name: string) => string;\r
    /**\r
     * 设置控件的配制参数.\r
     * @param name\r
     * @return object 配制参数.\r
     * @example\r
     * \`\`\` typescript\r
     *       Mx.MxFun.setIniset({\r
     *           EnableIntelliSelect: true\r
     *       })\r
     * \`\`\`\r
     */\r
    setIniset: (iniObj: iniConfig) => void;\r
    /**\r
     * 重新打开cad文件，该函数在控件创建完后，需要再次重新打开文件，调用。\r
     * @param sFile 打的cad文件路径\r
     * @return any\r
     * @example\r
     * \`\`\` typescript\r
     * \`\`\`\r
     */\r
    openFile: (sFile: string | string[], useWebsocket?: boolean) => boolean;\r
    /**\r
     * 调用服务器后台CAD命令.\r
     * */\r
    callCommand: (cmd: string, param: string, retCall?: (param: any) => void) => void;\r
    /**\r
     * CAD坐标到文档坐标.\r
     * 默认情况下，cad等于doc,当前m_isCorrectLargeCoordinates为true时，doc变成了把cad图纸修改到小范围坐标系下的坐标。\r
     * @returns number\r
     * @example\r
     * \`\`\`typescript\r
     *\r
     *\r
     * \`\`\`\r
     */\r
    cadCoord2Doc: (x: number, y: number, z: number) => THREE.Vector3;\r
    /**\r
     * 文档坐标坐标到CAD.\r
     * 默认情况下，cad等于doc,当前m_isCorrectLargeCoordinates为true时，doc变成了把cad图纸修改到小范围坐标系下的坐标。\r
     * @returns number\r
     * @example\r
     * \`\`\`typescript\r
     *\r
     *\r
     * \`\`\`\r
     */\r
    docCoord2Cad: (x: number, y: number, z: number) => THREE.Vector3;\r
    /**\r
     * 通过id得到对象.\r
     * @returns 返MxDbEntity\r
     * @example\r
     * \`\`\`typescript\r
     *\r
     *\r
     * \`\`\`\r
     */\r
    getMxEntity: (id: number) => MxDbEntity | undefined;\r
    /**\r
     * 停止运行当前命令\r
     * @returns\r
     * @example\r
     * \`\`\`typescript\r
     *\r
     *\r
     * \`\`\`\r
     */\r
    stopRunCommand: () => void;\r
    /**\r
     * 设置当前运行MxCAD的MxCPP环境对象。\r
     */\r
    initMxCpp: (mxcppimp: any) => void;\r
    /**\r
     * Three.js坐标转MxCAD的DWG坐标长度\r
     */\r
    docCoordLong2Cad: (l: number) => number;\r
    /**\r
     * MxCAD的DWG坐标长度转Three.js坐标.\r
     */\r
    cadCoordLong2Doc: (l: number) => number;\r
    /**\r
     * View坐标长度转MxCAD的DWG坐标.\r
     */\r
    viewCoordLong2Cad: (l: number) => number;\r
    /**\r
     * MxCAD的DWG坐标长度转View坐标.\r
     */\r
    cadCoordLong2View: (l: number) => number;\r
    /**\r
     * 监听命令行消息动态更新的数据\r
     * 在取点对象中设置的命令以及我们提供的图形对象中是有一套命令提示和参数化绘图，而该回调函数主要用来监听消息变化\r
     * @parma callback 回调函数中data中的msCmdTip表示命令提示 msCmdText表示当前用户输入的输入内容  msCmdDisplay表示所有的消息记录\r
     * */\r
    listenForCommandLineInput(callback: ((data: {\r
        msCmdTip: string;\r
        msCmdDisplay: string;\r
        msCmdText: string;\r
    }) => void) | undefined): void;\r
    /**\r
     * 设置命令行消息数据 (在监听input输入框的onKeydown事件的回调函数中调用)\r
     * @param msCmdText 用户输入的数据 input输入框输入的文本信息\r
     * @param keyCode 按键Code input输入框的onKeydown事件的event事件对象的keyCode属性\r
     * */\r
    setCommandLineInputData(msCmdText: string, keyCode: number): void;\r
    /**\r
     * 监听指针(鼠标光标)移动变化的坐标信息\r
     * @parma callback 回调函数中返回坐标信息\r
     * */\r
    listenForCoordTip(callback: (coordTip: string) => void): void;\r
    /**\r
     * 监听光标更新\r
     * @parma cursorType当前使用的光标类型\r
     * */\r
    listenForUpdateCursor(callback: ((cursorType: string) => void) | undefined): void;\r
    /**\r
     * 返回mxfun.min.js中的THREE.JS对象，可以用它来创建mxfun.min.js中THREE对象。\r
     * */\r
    getMxFunTHREE: () => typeof three;\r
    /**\r
     * 返回mxfun.min.js中的ThreeJsTool对象\r
     * */\r
    getMxFunThreeTool(): any;\r
    /**\r
     * 创建十字光标图片\r
     * */\r
    ceneratecursor(cursorSize?: number, squareSize?: number, isRoss?: boolean, color?: string): HTMLImageElement;\r
    /**\r
     * 得到当前鼠标位置,返回的是屏幕坐标 。\r
     * @example\r
     * \`\`\`typescript\r
     *\r
     *\r
     * \`\`\`\r
     */\r
    getCurrentMousePostion(): THREE.Vector3;\r
    /**\r
     * 触发一个系统事件的调用\r
     * */\r
    callEvent: (eventName: string, param?: any) => any;\r
    /**\r
     * 得到当前网页路径\r
     * init 事件会在模块加载完成后触发。\r
     * */\r
    getLocationPageUrl: () => string;\r
    /**\r
     * 得到当前主机路径\r
     * init 事件会在模块加载完成后触发。\r
     * */\r
    getHostUrl: () => string;\r
    /** 监听use或者调用自定义图形定义的绘制命令后创建图形对象的回调 */\r
    onUseCreateMxDbEntity(callback: (...ages: [MxDbEntity]) => any): void;\r
    /**\r
     * 初始快捷命令。\r
     * */\r
    initQuickCommand: (aryQuickCommand: string[][]) => void;\r
    /**\r
     * 初始化语言表\r
     * */\r
    InitLanguageString: (mapid2str: Object) => void;\r
    /**\r
     * 得以语言字符串\r
     * */\r
    getLanguageString: (id: string, sDef?: string) => string;\r
    /**\r
     * 把一个颜色变量转成一个数组颜色\r
     * */\r
    getNumberColor: (iColor: number | string | THREE.Color) => number;\r
    /**\r
     * 发送一个消息到ifarme的父窗口\r
     * */\r
    postMessageToParentFrame: (param: any) => boolean;\r
}\r
declare const MxFun: MxFunClass;

interface CanvasParent extends HTMLElement {\r
    tabindex?: number;\r
}\r
/** 控件配置 **/\r
interface iniConfig {\r
    /** 启用智能选择 */\r
    EnableIntelliSelect?: boolean;\r
    /** 启动O 捕捉功能 */\r
    EnableOsnapFunction?: boolean;\r
    /** 启动夹点编辑 */\r
    EnableGripEidt?: boolean;\r
    /** 多选 */\r
    multipleSelect?: boolean;\r
    /**自动重置渲染器 */\r
    autoResetRenderer?: boolean;\r
    /** 更正大坐标 */\r
    correctLargeCoordinates?: boolean;\r
    /** 请求标头缓存控制 */\r
    requestHeaderCacheControl?: boolean;\r
    /** 选择方式控制 */\r
    IntelliSelectType?: number;\r
    /** 禁用动态输入框 */\r
    ForbiddenDynInput?: boolean;\r
    /** 夹点和拾取框的大小,单位是屏幕上的像素 */\r
    inputRectWidth?: number;\r
    /** 夹点颜色 */\r
    gripPointColor?: number;\r
}\r
type MxFunType = MxFunClass;

/** @module MxDrawObject */\r
\r
interface MxDrawObjectType {\r
    renderer: THREE.WebGLRenderer;\r
    addEvent(arg0: string, arg1: (...parmes: any) => any): void;\r
    setIniset(arg0: iniConfig): void;\r
    getScene(): THREE.Scene;\r
    getCamera(): THREE.Camera;\r
    setMouseRightRotate(isRotate: boolean): void;\r
    getFullDisplayRange(): object;\r
    getCanvas(): HTMLCanvasElement;\r
    updateDisplay(isImmediate: boolean): void;\r
    createCanvasImageData(fun: (imageData: string) => void, param?: object): void;\r
    setViewColor(color: number): void;\r
    setSize(width: number, height: number): void;\r
    getIntersectObjects(ptMouse: THREE.Vector2): THREE.Intersection[];\r
    getViewWidth(): number;\r
    getViewHeight(): number;\r
    zoomInitialStates(): void;\r
    zoomScale(scale: number): void;\r
    zoomW(minPt: THREE.Vector3, maxPt: THREE.Vector3, isWorld?: boolean, animate?: boolean, autoRegen?: boolean): void;\r
    zoomCenter(dCenX: number, dCenY: number): void;\r
    initZoomW(pt1Doc: THREE.Vector3, pt2Doc: THREE.Vector3): void;\r
    addMxEntity(ent: any): number;\r
    eraseMxEntity(id: number): boolean;\r
    screenCoord2World(x: number, y: number, z?: number): THREE.Vector3;\r
    worldCoord2Screen(x: number, y: number, z: number): THREE.Vector3;\r
    screenCoord2Doc(x: number, y: number, z: number): THREE.Vector3;\r
    worldCoordLong2Doc(l: number): number;\r
    docCoordLong2World(l: number): number;\r
    docCoord2World(x: number, y: number, z: number): THREE.Vector3;\r
    worldCoord2Doc(x: number, y: number, z: number): THREE.Vector3;\r
    docCoord2Screen(x: number, y: number, z: number): THREE.Vector3;\r
    screenCoordLong2Doc(l: number): number;\r
    docCoordLong2Screen(l: number): number;\r
    screenCoordLong2World(l: number): number;\r
    worldCoordLong2Screen(l: number): number;\r
    initRendererParam(param: object): void;\r
    getMxAllSelect(): Array<number>;\r
    addMxCurrentSelect(id: number, isFireSelectChange: boolean, isDisplayGrid: boolean): boolean;\r
    clearMxCurrentSelect(): boolean;\r
    getMxEntityUserObject(id: number): MxDbEntity;\r
    findMxEntityAtPoint(ptMouse: THREE.Vector3, isDocCoord?: boolean, retWordDrawXDataCall?: (id: number, data: any) => void): Array<MxDbEntity>;\r
    setMouseMiddlePan(isPan: boolean | number): void;\r
    resetThreeJSControls(): void;\r
    getAllMxEntity(): Array<MxDbEntity>;\r
    enableZoom(isEnable: boolean): void;\r
    enablePan(isEnable: boolean): void;\r
    addObject(obj: THREE.Object3D | null, isAddToSelect?: boolean): void;\r
    addViewObject(obj: THREE.Object3D): void;\r
    removeViewObject(obj: THREE.Object3D): void;\r
    removeObject(obj: THREE.Object3D, isRemoveSelectObject?: boolean): void;\r
    saveMxEntityToJson(isSaveToDWG?: boolean): object;\r
    loadMxEntityFromJson(dataString: object): Promise<boolean>;\r
    eraseAllMxEntity(): void;\r
    makeCurrent(): void;\r
    getViewCenterDocCoord(): THREE.Vector3;\r
    updateCanvasSize(): void;\r
}\r
type MxDrawEvents = {\r
    "loadComplete": () => void;\r
    "render": () => void;\r
    "addResizeEvent": (resize: Function) => void;\r
    "initObject": () => void;\r
    "openFileComplete": (iResult: number) => void;\r
    "saveFileComplete": (iResult: number, sServerResult: string) => void;\r
    "uiSetLayerData": (layerList: {\r
        name: string;\r
        id: number;\r
        off?: number;\r
        color?: string;\r
        colorValue?: number;\r
        zerolayer?: number;\r
        isState?: boolean;\r
    }[]) => void;\r
    "viewchange": () => void;\r
    "MxEntitySelectChange": (ids: number[]) => void;\r
    "objectGripEdit": (entity: MxDbEntity) => void;\r
    "whetherEditTheGripPoint": (entity: MxDbEntity) => void;\r
    "databaseModify": () => void;\r
} & RendererEventsType;\r
/**\r
 * 引入mxdraw库不会挂载MxDrawObject 只能在以下特定函数中获取\r
 * @function\r
 * {@link MxFun.createMxObject}中callback回调参数\`mxDraw\`的构造类\r
 * @function\r
 * {@link MxFun.getCurrentDraw} 方法返回值的构造类\r
 *\r
 */\r
declare class MxDrawObject extends Node<MxDrawEvents, Node<any, any>> {\r
    private _mxdrawObj;\r
    private rootLayer;\r
    constructor(Mxdraw: MxDrawObjectType);\r
    /**\r
     * 得执行的内部MxObject对象.\r
     * @example\r
     * \`\`\`typescript\r
     *\r
     *\r
     * \`\`\`\r
     */\r
    getMxObjectImplement(): any;\r
    /**\r
     * @instance\r
     */\r
    renderer: THREE.WebGLRenderer;\r
    /**\r
     * 获取Three.js绘图场景\r
     * @returns THREE.Scene\r
     */\r
    getScene(): THREE.Scene;\r
    /**\r
     * 设置多选模式。\r
     */\r
    setMultipleSelect(isMultipleSelect: boolean): void;\r
    /**\r
     * 获取Three.js相机对象\r
     * @returns THREE.Camera\r
     */\r
    getCamera(): THREE.Camera;\r
    /**\r
     * 获取Three renderer渲染器\r
     * @returns THREE.WebGLRenderer\r
     */\r
    getRenderer(): THREE.WebGLRenderer;\r
    /**\r
     * 设置鼠标按下是否旋视区\r
     * @param isRotate  是否旋视区\r
     * @returns void\r
     * @example\r
     * \`\`\`typescript\r
     * Mx.MxFun.getCurrentDraw().setMouseRightRotate(false)\r
     * \`\`\`\r
     *\r
     */\r
    setMouseRightRotate(isRotate?: boolean): void;\r
    /**\r
     * 得到全部显示所有图形所需要的显示的范围 ，Three.js的坐标系。world坐标。\r
     * @returns {minPt: value,maxPt: value}\r
     * @example\r
     * \`\`\`typescript\r
     * Mx.MxFun.getCurrentDraw().getFullDisplayRange()\r
     * \`\`\`\r
     */\r
    getFullDisplayRange(): object;\r
    /**\r
     * 获取Canvas对象.\r
     * @returns HTMLCanvasElement\r
     */\r
    getCanvas(): HTMLCanvasElement;\r
    /**\r
     * 通知Three.js更新显示\r
     * @returns void\r
     */\r
    updateDisplay(isImmediate?: boolean): void;\r
    /**\r
     * 通知Three.js生成ImgeData显示I数据.\r
     * @param fn 回调函数或者imageData\r
     * @param param 函数载荷\r
     * @returns void\r
     * @example\r
     * \`\`\`typescript\r
     * Mx.MxFun.getCurrentDraw().createCanvasImageData((imageData)=> {\r
     *      console.log(imageData)\r
     * })\r
     * \`\`\`\r
     */\r
    createCanvasImageData(fn: (imageData: string) => void, param?: object): void;\r
    /**\r
     * 设置视区背景色,\r
     * @param color 如0xFFFFFF 白色\r
     * @returns void\r
     * @example\r
     * \`\`\`typescript\r
     * Mx.MxFun.getCurrentDraw().setViewColor(0xFFFFFF)\r
     * \`\`\`\r
     */\r
    setViewColor(color: number): void;\r
    /**\r
   * 返回视区背景色,\r
   * @param color 如0xFFFFFF 白色\r
   * @returns void\r
   * @example\r
   * \`\`\`typescript\r
   *\r
   * \`\`\`\r
   */\r
    getViewColor(): number;\r
    /**\r
     * 设置视区背景色,\r
     * @param width 宽度\r
     * @param height 宽度\r
     * @returns void\r
     * @example\r
     * \`\`\`typescript\r
     * Mx.MxFun.getCurrentDraw().setSize(0xFFFFFF)\r
     * \`\`\`\r
     */\r
    setSize(width: number, height: number): void;\r
    /**\r
     * 获取某屏幕点下的绘制对象，ptMouse是.,\r
     * @param ptMouse THREE.Vector2 屏幕坐标\r
     * @returns THREE.Intersection[]\r
     * @example\r
     * \`\`\`typescript\r
     * Mx.MxFun.getCurrentDraw().getIntersectObjects(new THREE.Vector2(2, 3))\r
     * \`\`\`\r
     */\r
    getIntersectObjects(ptMouse: THREE.Vector2): THREE.Intersection[];\r
    /**\r
     * 添加THREE.Object3D对象到当前场景\r
     * @param obj THREE.Object3D\r
     * @param isAddToSelect 默认值为true  是否把对象添加选择对象集中,调用 getIntersectObjects可以找到\r
     * @returns void\r
     * @example\r
     * \`\`\`typescript\r
     * Mx.MxFun.getCurrentDraw().addObject(new THREE.Object3D(), false)\r
     * \`\`\`\r
     */\r
    addObject(obj: THREE.Object3D, isAddToSelect?: boolean): void;\r
    /**\r
     * 添加THREE.Object3D对象到视区场景，对象坐标系是窗口视区坐标系。0,0点在左下角.\r
     * @param obj THREE.Object3D\r
     * @returns void\r
     * @example\r
     * \`\`\`typescript\r
     * Mx.MxFun.getCurrentDraw().addViewObject(new THREE.Object3D())\r
     * \`\`\`\r
     */\r
    addViewObject(obj: THREE.Object3D): void;\r
    /**\r
     * 得到对象画布的宽度，单位屏幕像素\r
     * @returns number\r
     * @example\r
     * \`\`\`typescript\r
     * Mx.MxFun.getCurrentDraw().getViewWidth()\r
     * \`\`\`\r
     */\r
    getViewWidth(): number;\r
    /**\r
     * 得到对象画布的高度，单位屏幕像素\r
     * @returns number\r
     * @example\r
     * \`\`\`typescript\r
     * Mx.MxFun.getCurrentDraw().getViewHeight()\r
     * \`\`\`\r
     */\r
    getViewHeight(): number;\r
    /**\r
     * 删除addObject函数添加的THREE.Object3D对象\r
     * @param obj THREE.Object3D\r
     * @param isRemoveSelectObject 默认值为true  删除选择集中的对象\r
     * @returns void\r
     * @example\r
     * \`\`\`typescript\r
     * Mx.MxFun.getCurrentDraw().removeObject(new THREE.Object3D(), false)\r
     * \`\`\`\r
     */\r
    removeObject(obj: THREE.Object3D, isRemoveSelectObject?: boolean): void;\r
    /**\r
     * 把视区显示范围恢复到初始显示范围.\r
     * @returns void\r
     */\r
    zoomInitialStates(): void;\r
    /**\r
     * 缩放当前显示范围，它是相对于当前显示范围进行缩放\r
     * @param scale scale缩放比例\r
     * @returns void\r
     * @example\r
     * \`\`\`typescript\r
     * Mx.MxFun.getCurrentDraw().zoomScale(0.8)\r
     * \`\`\`\r
     */\r
    zoomScale(scale: number): void;\r
    /**\r
     * 把当前显示范围移到指定的显示范围\r
     * @param minPt 坐标1 THREE.Vector3\r
     * @param maxPt 坐标2 THREE.Vector3\r
     * @param isWorld 默认为felse DWG图纸坐标，设置为true是THREEJS坐标\r
     * @returns void\r
     * @example\r
     * \`\`\`typescript\r
     * Mx.MxFun.getCurrentDraw().zoomW(new THREE.Vector3(0,10,10), new THREE.Vector3(3,8,20), true)\r
     * \`\`\`\r
     */\r
    zoomW(minPt: THREE.Vector3, maxPt: THREE.Vector3, isWorld?: boolean, animate?: boolean, autoRegen?: boolean): void;\r
    /**\r
    * 保存当前显示范围.\r
    */\r
    saveZoom(): void;\r
    /**\r
  * 恢复当前显示范围.\r
  */\r
    recoverZoom(): void;\r
    /**\r
     * 把当前显示范围移到指定的位置,dCenX,dCenY是DWG图纸坐标。\r
     * @param minPt DWG图纸坐标1 THREE.Vector3\r
     * @param maxPt DWG图纸坐标2 THREE.Vector3\r
     * @returns void\r
     * @example\r
     * \`\`\`typescript\r
     * Mx.MxFun.getCurrentDraw().zoomCenter(new THREE.Vector3(0,10,10), new THREE.Vector3(3,8,20))\r
     * \`\`\`\r
     */\r
    zoomCenter(dCenX: number, dCenY: number): void;\r
    /**\r
     * 初始化控件默认加载后，显示视区范围，默认使用图纸转换时的显示范围。。\r
     * @param minPt DWG文档坐标1显示区域的左下角 THREE.Vector3\r
     * @param maxPt DWG文档坐标2显示区域的右上角 THREE.Vector3\r
     * @returns void\r
     * @example\r
     * \`\`\`typescript\r
     * Mx.MxFun.getCurrentDraw().initZoomW(new THREE.Vector3(0,10,10), new THREE.Vector3(3,8,20))\r
     *\r
     * \`\`\`\r
     */\r
    initZoomW(pt1Doc: THREE.Vector3, pt2Doc: THREE.Vector3): void;\r
    /**\r
     * 控件对象的事件监听\r
     * @param eventNaem 事件名称\r
     * @param fun 回调函数\r
     * @returns void\r
     * @example\r
     * \`\`\`typescript\r
     * Mx.MxFun.getCurrentDraw().addEvent("addResizeEvent", ()=> {})\r
     * Mx.MxFun.getCurrentDraw().addEvent("viewchange", ()=> {})\r
     * 图纸加载完成\r
     * Mx.MxFun.getCurrentDraw().addEvent("loadComplete", ()=> {})\r
     * 视区重绘事件.\r
     * Mx.MxFun.getCurrentDraw().addEvent("render", (renderer)=> {})\r
     * 视区大小被修改事件.,viewsize={viewWidth:viewWidth,viewHeight:viewHeight}\r
     * Mx.MxFun.getCurrentDraw().addEvent("viewsizechange", (viewsize)=> {})\r
     * 实体选择状态发生改变的事件.\r
     * Mx.MxFun.getCurrentDraw().addEvent("MxEntitySelectChange", (aryId:Array<number>)=> {})\r
     * \`\`\`\r
     */\r
    addEvent(eventNaem: keyof MxDrawEvents, fun: MxDrawEvents[keyof MxDrawEvents]): void;\r
    on(event: keyof MxDrawEvents, callback: MxDrawEvents[keyof MxDrawEvents]): void;\r
    off(event: keyof MxDrawEvents, callback: MxDrawEvents[keyof MxDrawEvents]): boolean;\r
    /**\r
     * 移除事件函数。\r
     * @param options { eventNaem: string, fun:any; }\r
     * @returns boolean\r
     * @example\r
     * \`\`\`\r
     */\r
    removeEventFuction(eventNaem: keyof MxDrawEvents, fun: MxDrawEvents[keyof MxDrawEvents]): boolean;\r
    /**\r
     * INI设置\r
     * @param options { EnableOsnapFunction: boolean; }\r
     * @returns void\r
     * @example\r
     * \`\`\`typescript\r
     * Mx.MxFun.getCurrentDraw().setIniset(options: { EnableOsnapFunction: true })\r
     *\r
     * \`\`\`\r
     */\r
    setIniset(options: iniConfig): void;\r
    /**\r
     * 返回当前视区的显示范围,cad坐标。\r
     * @returns {pt1:THREE.Vector3,pt2:THREE.Vector3,pt3:THREE.Vector3,pt4:THREE.Vector3}\r
     */\r
    getViewDocCoord(): {\r
        pt1: THREE.Vector3;\r
        pt2: THREE.Vector3;\r
        pt3: THREE.Vector3;\r
        pt4: THREE.Vector3;\r
    };\r
    /**\r
     * 屏幕坐标到ThreeJS坐标\r
     * @returns THREE.Vector3\r
     * @example\r
     * \`\`\`typescript\r
     *\r
     *\r
     * \`\`\`\r
     */\r
    screenCoord2World(x: number, y: number, z?: number): THREE.Vector3;\r
    /**\r
     * ThreeJS坐标到屏幕坐标,屏幕坐标的Y轴向下。坐标原点在左上角.\r
     * @returns THREE.Vector3\r
     * @example\r
     * \`\`\`typescript\r
     *\r
     *\r
     * \`\`\`\r
     */\r
    worldCoord2Screen(x: number, y: number, z: number): THREE.Vector3;\r
    /**\r
     * 屏幕坐标到DWG文档坐标\r
     * @returns THREE.Vector3\r
     * @example\r
     * \`\`\`typescript\r
     *\r
     *\r
     * \`\`\`\r
     */\r
    screenCoord2Doc(x: number, y: number): THREE.Vector3;\r
    /**\r
     * ThreeJS坐标长度到DWG文档坐标长度\r
     * @returns number\r
     * @example\r
     * \`\`\`typescript\r
     *\r
     *\r
     * \`\`\`\r
     */\r
    worldCoordLong2Doc(l: number): number;\r
    /**\r
     * DWG文档坐标长度到ThreeJS坐标长度\r
     * @returns number\r
     * @example\r
     * \`\`\`typescript\r
     *\r
     *\r
     * \`\`\`\r
     */\r
    docCoordLong2World(l: number): number;\r
    /**\r
     * DWG文档坐标到ThreeJS坐标\r
     * @returns number\r
     * @example\r
     * \`\`\`typescript\r
     *\r
     *\r
     * \`\`\`\r
     */\r
    docCoord2World(x: number, y: number, z: number): THREE.Vector3;\r
    /**\r
     * DWG文档坐标到ThreeJS坐标\r
     * @returns THREE.Vector3\r
     * @example\r
     * \`\`\`typescript\r
     *\r
     *\r
     * \`\`\`\r
     */\r
    docCoord2World2(pt: THREE.Vector3): THREE.Vector3;\r
    /**\r
     * ThreeJS坐标到DWG文档坐标\r
     * @returns number\r
     * @example\r
     * \`\`\`typescript\r
     *\r
     *\r
     * \`\`\`\r
     */\r
    worldCoord2Doc(x: number, y: number, z: number): THREE.Vector3;\r
    /**\r
     * ThreeJS坐标到DWG文档坐标\r
     * @returns THREE.Vector3\r
     * @example\r
     * \`\`\`typescript\r
     *\r
     *\r
     * \`\`\`\r
     */\r
    worldCoord2Doc2(pt: THREE.Vector3): THREE.Vector3;\r
    /**\r
     * DWG文档坐标到屏幕坐标\r
     * @returns number\r
     * @example\r
     * \`\`\`typescript\r
     *\r
     *\r
     * \`\`\`\r
     */\r
    docCoord2Screen(x: number, y: number): THREE.Vector3;\r
    /**\r
     * 屏幕坐标长度到DWG文档坐标长度\r
     * @returns number\r
     * @example\r
     * \`\`\`typescript\r
     *\r
     *\r
     * \`\`\`\r
     */\r
    screenCoordLong2Doc(l: number): number;\r
    /**\r
     * DWG文档坐标长度到屏幕坐标长度\r
     * @returns number\r
     * @example\r
     * \`\`\`typescript\r
     *\r
     *\r
     * \`\`\`\r
     */\r
    docCoordLong2Screen(l: number): number;\r
    /**\r
     * 屏幕坐标长度到ThreeJS坐标长度\r
     * @returns number\r
     * @example\r
     * \`\`\`typescript\r
     *\r
     *\r
     * \`\`\`\r
     */\r
    screenCoordLong2World(l: number): number;\r
    /**\r
     * ThreeJS坐标长度到屏幕坐标长度\r
     * @returns number\r
     * @example\r
     * \`\`\`typescript\r
     *\r
     *\r
     * \`\`\`\r
     */\r
    worldCoordLong2Screen(l: number): number;\r
    /**\r
     * 初始WebGL Renderer的创建参数,该函数在MxFun.createMxObject函数调用时，调用。\r
     * @param param\r
     * @returns void\r
     * @example\r
     * \`\`\`typescript\r
     * mxObj.initRendererParam({preserveDrawingBuffer: true})\r
     *\r
     * \`\`\`\r
     */\r
    initRendererParam(param: object): void;\r
    /**\r
     * 添加一个自定义实体到图上。\r
     * @param ent 自定义实体对象\r
     * @returns number 返回对象的id.\r
     * @example\r
     * \`\`\`typescript\r
     *\r
     *\r
     * \`\`\`\r
     */\r
    addMxEntity(ent: MxDbEntity): number;\r
    /**\r
     * 得到图上当前选择的对象.\r
     * @returns Array<number> 返回对象的id数组.\r
     * @example\r
     * \`\`\`typescript\r
     *\r
     *\r
     * \`\`\`\r
     */\r
    getMxCurrentSelect(): Array<number>;\r
    /**\r
   * 得到图上当前选择的MxCAD对象.\r
   * @returns Array<number> 返回对象的id数组.\r
   * @example\r
   * \`\`\`typescript\r
   *\r
   *\r
   * \`\`\`\r
   */\r
    getMxCADCurrentSelect(): Array<number>;\r
    /**\r
   * 得到图上当前选择对象时，选择范围点.\r
   * @example\r
   * \`\`\`typescript\r
   *\r
   *\r
   * \`\`\`\r
   */\r
    getSelectPoints(): {\r
        point1: THREE.Vector3;\r
        point2: THREE.Vector3;\r
        isvalid: boolean;\r
    };\r
    /**\r
     * 把mxdraw对象添加到当前选择集中\r
     * @returns void\r
     * @example\r
     * \`\`\`typescript\r
     *\r
     *\r
     * \`\`\`\r
     */\r
    addMxCurrentSelect(id: number, isFireSelectChange?: boolean, isDisplayGrid?: boolean): boolean;\r
    /**\r
   * 把MxCAD对象添加到当前选择中.\r
   * @returns void\r
   * @example\r
   * \`\`\`typescript\r
   *\r
   *\r
   * \`\`\`\r
   */\r
    addMxCADCurrentSelect(id: number, isFireSelectChange?: boolean, isDisplayGrid?: boolean): boolean;\r
    /**\r
   * 触发选择状态改变事件\r
   * @returns void\r
   * @example\r
   * \`\`\`typescript\r
   *\r
   *\r
   * \`\`\`\r
   */\r
    fireSelectChange(isMxCAD: boolean): void;\r
    /**\r
     * 清除当前所有选择\r
     * @returns void\r
     * @example\r
     * \`\`\`typescript\r
     *\r
     *\r
     * \`\`\`\r
     */\r
    clearMxCurrentSelect(): boolean;\r
    /**\r
     *通过id获取绘制的对象.\r
     * @param id 返回对象的id\r
     * @returns MxDbEntity\r
     * @example\r
     * \`\`\`typescript\r
     *\r
     *\r
     * \`\`\`\r
     */\r
    getMxEntity(id: number): MxDbEntity;\r
    /**\r
     * 查找某点位置处的用户自绘对象.\r
     * @param ptMouse 查找的点位 THREE.Vector3,默认是文档坐标\r
     * @returns MxDbEntity[] 返回用户自绘对象数组\r
     * @example\r
     * \`\`\`typescript\r
     *\r
     *\r
     * \`\`\`\r
     */\r
    findMxEntityAtPoint(ptMouse: THREE.Vector3, isDocCoord?: boolean, retWordDrawXDataCall?: (id: number, data: any) => void): Array<MxDbEntity>;\r
    /**\r
     *得到所有用户自绘对象.\r
     * @returns MxDbEntity[] 返回用户自绘对象数组\r
     * @example\r
     * \`\`\`typescript\r
     *\r
     *\r
     * \`\`\`\r
     */\r
    getAllMxEntity(): Array<MxDbEntity>;\r
    /**\r
   * 设置鼠标中键移动视区。\r
   * @param iMethod 设置是否可以鼠标中键移动视区,iMethod= true,iMethod=1\r
   * iMethod = 0,中键不移动视区，左键移动\r
   * iMethod = 1,中键移动视区，左键不移动\r
   * iMethod = 2,中键移动视区，左键移动视区\r
   * @returns\r
   * @example\r
   * \`\`\`typescript\r
   *\r
   *\r
   * \`\`\`\r
   */\r
    setViewMovementMethod(iMethod: boolean | number): void;\r
    /**\r
     * setMouseMiddlePan函数与setViewMovementMethod一样，为了兼容老程序暂没删除，将来会删除\r
     */\r
    setMouseMiddlePan(iPan: boolean | number): void;\r
    /**\r
     *重新设置ThreeJS Controls状态.\r
     * @returns\r
     * @example\r
     * \`\`\`typescript\r
     *\r
     *\r
     * \`\`\`\r
     */\r
    resetThreeJSControls(): void;\r
    /**\r
     * 启用或禁用鼠标中键滚动缩放视区\r
     * @param isEnable 是否启用\r
     * @returns\r
     * @example\r
     * \`\`\`typescript\r
     *\r
     *\r
     * \`\`\`\r
     */\r
    enableZoom(isEnable: boolean): void;\r
    /**\r
     * 启用或禁用鼠标移动视区\r
     * @param isEnable 是否启用\r
     * @returns\r
     * @example\r
     * \`\`\`typescript\r
     *\r
     *\r
     * \`\`\`\r
     */\r
    enablePan(isEnable: boolean): void;\r
    /**\r
     * 删除MxEntity\r
     * @param id 实体id.\r
     * @returns\r
     * @example\r
     * \`\`\`typescript\r
     *\r
     *\r
     * \`\`\`\r
     */\r
    eraseMxEntity(id: number): boolean;\r
    /**\r
     * 移除安视图坐标绘制的对象.\r
     * @param obj 对象.\r
     * @returns\r
     * @example\r
     * \`\`\`typescript\r
     *\r
     *\r
     * \`\`\`\r
     */\r
    removeViewObject(obj: THREE.Object3D): void;\r
    /**\r
     * 保存所有MxEntity的数据到json字符串.\r
     * @param\r
     * @returns json字符串\r
     * @example\r
     * \`\`\`typescript\r
     *\r
     *\r
     * \`\`\`\r
     */\r
    saveMxEntityToJson(isSaveToDWG?: boolean): string;\r
    /**\r
     * 保存所有MxEntity的数据到js对象.\r
     * @param\r
     * @returns js对象\r
     * @example\r
     * \`\`\`typescript\r
     *\r
     *\r
     * \`\`\`\r
     */\r
    saveMxEntityToObject(isSaveToDWG?: boolean): object;\r
    /**\r
     * 从json字符串恢复MxEntity\r
     * @param dataString json字符串.\r
     * @returns\r
     * @example\r
     * \`\`\`typescript\r
     *\r
     *\r
     * \`\`\`\r
     */\r
    loadMxEntityFromJson(dataString: string | object, aryPreloadSVG?: string[] | null): Promise<boolean>;\r
    /**\r
     * 删除所有的MxEntity\r
     * @param\r
     * @returns\r
     * @example\r
     * \`\`\`typescript\r
     *\r
     *\r
     * \`\`\`\r
     */\r
    eraseAllMxEntity(): void;\r
    /**\r
     * 把该控件对象，设置成当前控件.\r
     * @param\r
     * @returns\r
     * @example\r
     * \`\`\`typescript\r
     *\r
     *\r
     * \`\`\`\r
     */\r
    makeCurrent(): void;\r
    /**\r
     * 得到视区中心的文档坐标.\r
     * @param\r
     * @returns\r
     * @example\r
     * \`\`\`typescript\r
     *\r
     *\r
     * \`\`\`\r
     */\r
    getViewCenterDocCoord(): THREE.Vector3;\r
    /**\r
     * 画布大小，自动修改到它父亲div大小。\r
     * @param\r
     * @returns\r
     * @example\r
     * \`\`\`typescript\r
     *\r
     *\r
     * \`\`\`\r
     */\r
    updateCanvasSize(): void;\r
    /**\r
     * 新建图纸.\r
     * @param ptin1,ptin2新建图纸的显示范围.\r
     * @returns\r
     * @example\r
     * \`\`\`typescript\r
     *\r
     *\r
     * \`\`\`\r
     */\r
    newFile(ptin1: THREE.Vector3 | number, ptin2: THREE.Vector3 | number, x2?: number, y2?: number): boolean;\r
    /**\r
     * 停止当前加载\r
     * @example\r
     * \`\`\`typescript\r
     *\r
     * \`\`\`\r
     */\r
    stopAllLoading(): void;\r
    /**\r
     * 得到Three.js的 OrbitControls对象.\r
     * @example\r
     * \`\`\`typescript\r
     *\r
     * \`\`\`\r
     */\r
    getOrbitControls(): OrbitControls;\r
    /**\r
     * 禁用或启用视区的移动，放大，缩小等操作.\r
     * @example\r
     * \`\`\`typescript\r
     *\r
     * \`\`\`\r
     */\r
    enableViewControls(isEnable: boolean): void;\r
    /**\r
     * 得到当前图形数据库对象\r
     * @example\r
     * \`\`\`typescript\r
     *\r
     * \`\`\`\r
     */\r
    getMxDatabase(): MxDbDatabase;\r
    /**\r
     * 设置鼠标中键的滚动的缩放比例,在PC上，默认值4，手机上默认值，1.5\r
     * 返回之前设置值。\r
     * @example\r
     * \`\`\`typescript\r
     *\r
     * \`\`\`\r
     */\r
    setZoomSpeed(zoomSpeed: number): number;\r
    /**\r
     * 重新计数Renderer状态, this.renderer.info.reset();\r
     * @return\r
     * @example\r
     * \`\`\` typescript\r
     * \`\`\`\r
     */\r
    resetRenderer(): any;\r
    /**\r
     * 设置服务器发送文件请求时，需要带的参数.注意：带参数后，可能会出现跨域访问失败\r
     * @return\r
     * @example\r
     * \`\`\` typescript\r
     * \`\`\` mxobj.setRequestHeader("{'data':'value1'}");\r
     */\r
    setRequestHeader(val: string): any;\r
    /**\r
     * 在MxCAD模式下，关闭与服务器的socket连接 。\r
     * @return\r
     * @example\r
     */\r
    closeWebSocket(): any;\r
    /**\r
     * CAD坐标到文档坐标.\r
     * @returns number\r
     * @example\r
     * \`\`\`typescript\r
     *\r
     *\r
     * \`\`\`\r
     */\r
    cadCoord2Doc(x: number, y: number, z: number): THREE.Vector3;\r
    cadCoord2Doc2(pt: THREE.Vector3): THREE.Vector3;\r
    toSmallcoord(pt: THREE.Vector3): THREE.Vector3;\r
    toSmallcoord2(x: number, y: number, z?: number): THREE.Vector3;\r
    /**\r
     * 文档坐标坐标到CAD.\r
     * @returns number\r
     * @example\r
     * \`\`\`typescript\r
     *\r
     *\r
     * \`\`\`\r
     */\r
    docCoord2Cad(x: number, y: number, z: number): THREE.Vector3;\r
    docCoord2Cad2(pt: THREE.Vector3): THREE.Vector3;\r
    /**\r
   * 视区坐标到CAD坐标.\r
   * @returns number\r
   * @example\r
   * \`\`\`typescript\r
   *\r
   *\r
   * \`\`\`\r
   */\r
    viewCoord2Cad(x: number, y: number, z: number): THREE.Vector3;\r
    /**\r
     *CAD坐标到视区坐标.\r
     * @returns number\r
     * @example\r
     * \`\`\`typescript\r
     *\r
     *\r
     * \`\`\`\r
     */\r
    cadCoord2View(x: number, y: number, z: number): THREE.Vector3;\r
    /**\r
     *CAD长度到视区长度\r
     * @returns number\r
     * @example\r
     * \`\`\`typescript\r
     *\r
     *\r
     * \`\`\`\r
     */\r
    cadCoordLong2View(l: number): number;\r
    /**\r
     *视区长度到CAD长度\r
     * @returns number\r
     * @example\r
     * \`\`\`typescript\r
     *\r
     *\r
     * \`\`\`\r
     */\r
    viewCoordLong2Cad(l: number): number;\r
    /**\r
     *Doc长度到CAD长度\r
     * @returns number\r
     * @example\r
     * \`\`\`typescript\r
     *\r
     *\r
     * \`\`\`\r
     */\r
    docCoordLong2Cad(l: number): number;\r
    /**\r
     *CAD长度到Doc长度\r
     * @returns number\r
     * @example\r
     * \`\`\`typescript\r
     *\r
     *\r
     * \`\`\`\r
     */\r
    cadCoordLong2Doc(l: number): number;\r
    /**\r
     * 设置视区的旋转角度\r
     * @example\r
     * \`\`\`typescript\r
     *\r
     *\r
     * \`\`\`\r
     */\r
    setViewAngle(ang: number): void;\r
    /**\r
     * 得到视区的旋转角度\r
     * @example\r
     * \`\`\`typescript\r
     *\r
     *\r
     * \`\`\`\r
     */\r
    getViewAngle(): number;\r
    /**\r
     * 得到系统变量\r
     * @example\r
     * \`\`\`typescript\r
     *\r
     *\r
     * \`\`\`\r
     */\r
    getSysVar(sName: string): any;\r
    /**\r
     * 设置系统变量\r
     * @example\r
     * \`\`\`typescript\r
     *\r
     *\r
     * \`\`\`\r
     */\r
    setSysVar(sName: string, val: any): void;\r
    /**\r
     * 是否是CppMxCAD模式运行.\r
     * @example\r
     * \`\`\`typescript\r
     *\r
     *\r
     * \`\`\`\r
     */\r
    isMxCAD(): boolean;\r
    /**\r
     * 得到所有布局名\r
     * @example\r
     * \`\`\`typescript\r
     *\r
     *\r
     * \`\`\`\r
     */\r
    getAllLayoutName(): string[];\r
    /**\r
     * 得到数据库Json字符串数据.\r
     * @example\r
     * \`\`\`typescript\r
     *\r
     *\r
     * \`\`\`\r
     */\r
    getDtabaseJsonString(): string;\r
    /**\r
     * 跳转另一个布局页面.\r
     * @example\r
     * \`\`\`typescript\r
     *\r
     *\r
     * \`\`\`\r
     */\r
    gotoLayout(layout: string): void;\r
    /**\r
     * 初始cpp对象.\r
     * @example\r
     * \`\`\`typescript\r
     *\r
     *\r
     * \`\`\`\r
     */\r
    initMxCpp(mcppObjectImp: any): void;\r
    /**\r
     * 当前是否支持 opengles3\r
     * @example\r
     * \`\`\`typescript\r
     *\r
     *\r
     * \`\`\`\r
     */\r
    isWebgl2(): boolean;\r
    /**\r
     * 返回对象的ID.\r
     * @example\r
     * \`\`\`typescript\r
     *\r
     *\r
     * \`\`\`\r
     */\r
    getId(): number;\r
    /**\r
     * 添加鼠标键盘响应事件.\r
     * @example\r
     * \`\`\`typescript\r
     * // mousedown,touchstart,mouseup,mousemove,touchend,touchmove\r
     * //事件返回0,事件会继续传递，返回1事件不再被后续程序处理.\r
     * mxobj.addControlsEvent("touchstart",(event)=>{\r
     *         return 0;\r
     *       })\r
     *\r
     * \`\`\`\r
     */\r
    addControlsEvent(type: string, call: (event: any) => number, isFront?: boolean): number;\r
    /**\r
     * 清除图上所有数据\r
     * @example\r
     * \`\`\`typescript\r
     *\r
     *\r
     * \`\`\`\r
     */\r
    clearAllObject(): any;\r
    /**\r
    * 设置点选支持多选，默认不支持。\r
    * @example\r
    * \`\`\`typescript\r
    *\r
    *\r
    * \`\`\`\r
    */\r
    setPointMultipleSelect(isMultipleSelect?: boolean): void;\r
    /**\r
    * 当前是否为白色白背景色\r
    * @example\r
    * \`\`\`typescript\r
    *\r
    *\r
    * \`\`\`\r
    */\r
    isWhiteViewColor(): boolean;\r
    /**\r
   * 根据当前颜色，自动对color进行反色，比如：背景色是白色，自动取黑色.\r
   * @example\r
   * \`\`\`typescript\r
   *\r
   *\r
   * \`\`\`\r
   */\r
    automaticInversionColor(color: number): number;\r
    /**\r
    * 启动或停止动画渲染\r
    * @example\r
    * \`\`\`typescript\r
    *\r
    *\r
    * \`\`\`\r
    */\r
    renderLoop(isLoop?: boolean): void;\r
}

/**\r
 * 使用canvas大小调整侦听器 (只有在 {@link MxFun.createMxObject} 的callbakc回调中调用才有效) 不调用该方法则默认使用window窗口监听从而自动调整画布大小，canvas大小或者其canvas父级元素变化不会自动调整。\r
 * > 注意：调用方法会加载[element-resize-event-polyfill](https://www.npmjs.com/package/element-resize-event-polyfill)}依赖包  可以通过resize监听dom元素大小变化 \`dom.addEventListener('resize', callback)\`\r
 * > 注意: MxFun.createMxObject 方法调用后默认会依据canvasParent父级元素作为自动调整的参考大小 所以传入的canvas也会默认监听canvas父级元素，适配大小请将canvas和canvasParent当作一个整体。\r
 * @param mxdrawObj 调用{@link MxFun.createMxObject}的callback回调函数拿到的 mxDraw 对象参数\r
 * @param canvas 调用{@link MxFun?.createMxObject}的callback回调函数拿到的dom.canvas作为要监听的元素\r
 * @param time 大小监听节流函数节流时间 默认 100\r
 * @param autoAdjust 是否自动调整大小 默认true\r
 * @param callback 监听回调\r
 */\r
declare function useCanvasResizeListener(mxdrawObj: MxDrawObject, canvas: HTMLCanvasElement, time?: number): Promise<void>;

/** @module McGePoint3d */\r
/**\r
 * McGePoint3d\r
 * @example \`\`\`typescript\r
 * \`\`\`\r
 */\r
interface McGePoint3d {\r
    x: number;\r
    y: number;\r
    z: number;\r
}

/** @module McGePoint3dArray */\r
\r
/**\r
 * McGePoint3dArray\r
 * @example \`\`\`typescript\r
 * \`\`\`\r
 */\r
interface McGePoint3dArray {\r
    /**\r
     *\r
     * @returns\r
     */\r
    append(pt: McGePoint3d): void;\r
}

interface MxassemblyType {\r
    McGePoint3d: any;\r
    McGePoint3dArray: any;\r
    McGeTool: any;\r
}\r
declare class MxassemblyClass {\r
    constructor();\r
    private mxassembly;\r
    private initImp;\r
    NewMcGePoint3d(x?: number, y?: number, z?: number): McGePoint3d;\r
    NewMcGePoint3dArray(aryPoint?: Array<THREE.Vector3>): McGePoint3dArray;\r
}\r
/**\r
 * Mxassembly 模块\r
 * 导出库时已实例化，只需要调用实例方法 例如：\r
 * \`\`\`typescript\r
 * \`\`\`\r
 */\r
declare const Mxassembly: MxassemblyClass;

declare class Store<T extends {}> {\r
    actions: {\r
        [x: string | number]: Function;\r
    };\r
    mutations: {\r
        [x: string | number]: Function;\r
    };\r
    state: T;\r
    status: string;\r
    events: PubSub<{\r
        "MxUiMain": (call: Function) => void;\r
        "MxMain": (call: Function) => void;\r
        "use:create:MxDbEntity": (obj: MxDbEntity) => void;\r
        "use:error": (e: any) => void;\r
        "MxDbEntityRegister": () => void;\r
        "stateChange": (state: any) => void;\r
    }>;\r
    constructor(params: {\r
        state: T;\r
        mutations: {\r
            [x: string | number]: Function;\r
        };\r
        actions: {\r
            [x: string | number]: Function;\r
        };\r
    });\r
    /**\r
     * 调用active方法 触发修改状态前的异步行为\r
     * @param actionKey 方法名称\r
     * @param payload 执行参数\r
     */\r
    dispatch<T>(actionKey: string | number, payload: T | any): boolean;\r
    /**\r
     * 调用mutation 的方法 修改state中属性的状态\r
     * @param mutationKey 方法名称\r
     * @param payload 执行参数\r
     */\r
    commit<T>(mutationKey: string | number, payload: T | any): boolean;\r
}

type stateType = {\r
    [x: string]: any;\r
    MxFun: any | null;\r
    Mxassembly: MxassemblyType | null;\r
    isCreateDrawObj: boolean;\r
};\r
declare const store: Store<stateType>;

/**\r
 * MxThreeJS 模块\r
 * ##### 使用说明:\r
 *\r
 * > 基于three.js实现创建直线对象、加载图片、SVG等功能，以下是使用的流程:\r
 * - 模块中大部分方法返回的{@link http://www.yanhuangxueyuan.com/threejs/docs/index.html#api/zh/core/Object3D | THREE.Object3D}类型继承创建的对象都可以通过取点对象{@link MrxDbgUiPrPointClass.value} 得到鼠标对应位置\r
 * - {@link MrxDbgUiPrPointClass.go}和{@link MrxDbgUiPrPointClass.goWhile}方法监听鼠标点击事件回调中通过\r
 * - {@link MxDrawObject.addObject} 方法添加到场景{@link MxDrawObject.getScene}中\r
 * - 最后调用{@link MxFun.updateDisplay} 更新视图显示完成\r
 *\r
 * > 提示: 在实际开发中MxThreeJS是配合着{@link MxDrawObject} 和 {@link MrxDbgUiPrPointClass} 完成绘制线段、文字、图片等功能,当然你也可以使用{@link http://www.yanhuangxueyuan.com/threejs/docs/index.html | three.js}来完成MxThreeJS模块的这些工作\r
 *\r
 * > 该模块导出库时已实例化为对象，只需要调用实例方法 例如：\r
 *\r
 * \`\`\`typescript\r
 * // html\r
 * <button id="line">line</button>\r
 *\r
 * // js\r
 * import Mx from "mxdraw"\r
 * import Three from "three"\r
 * Mx.loadCoreCode().then(()=> {\r
 *  Mx.MxFun.setMxServer()\r
 *  Mx.MxFun.createMxObject({\r
 *    callback(mxDraw, dom) {\r
 *      document.getElementById("line").onclick = ()=> {\r
 *       const getPoint = new Mx.MrxDbgUiPrPointClass()\r
 *       let lastPt, isLine\r
 *       getPoint.goWhile(()=> {\r
 *         const pt1 = getPoint.value()\r
 *         if(isLine) {\r
 *              const line = Mx.MxThreeJS.createLine(pt1, lastPt, 0xffffff)\r
 *              const currentDraw = Mx.MxFun.getCurrentDraw()\r
 *              currentDraw.addObject(line)\r
 *              Mx.MxFun.updateDisplay()\r
 *          }\r
 *          lastPt = pt1.clone()\r
 *          isLine = !isLine\r
 *       })\r
 *      }\r
 *    }\r
 * })\r
 * })\r
 * \`\`\`\r
 */\r
declare class MxThreeJS$1 {\r
    /**\r
     * 创建Three.js直线对象。\r
     * @param vPt1  {@link http://www.yanhuangxueyuan.com/threejs/docs/index.html#api/zh/math/Vector3 | THREE.Vector3} 点1\r
     * @param vPt2  {@link http://www.yanhuangxueyuan.com/threejs/docs/index.html#api/zh/math/Vector3 | THREE.Vector3} 点2\r
     * @param iColor 颜色Color\r
     * @returns  {@link http://www.yanhuangxueyuan.com/threejs/docs/index.html#api/zh/objects/Line |THREE.Line}\r
     * @example\r
     * \`\`\`typescript\r
     * Mx.MxThreeJS.createLine(new Three.Vector3(1,10,0), new Three.Vector3(1,300,0), 0)\r
     * \`\`\`\r
     */\r
    createLine(vPt1: THREE.Vector3, vPt2: THREE.Vector3, iColor: number | string | THREE.Color): THREE.Line;\r
    /**\r
     * 创建Three.js圆对象。\r
     * @param mCenterPt 圆中心点\r
     * @param dRadius 圆半径\r
     * @param iColor 颜色\r
     * @returns THREE.Object3D\r
     * @example\r
     * \`\`\`typescript\r
     * Mx.MxThreeJS.createCircle(new Three.Vector3(1,10,0), 10, 0)\r
     * \`\`\`\r
     */\r
    createCircle(mCenterPt: THREE.Vector3, dRadius: number, iColor: number | string | THREE.Color): THREE.Object3D;\r
    /**\r
     * 创建Three.js点对象。\r
     * @param mPt 点位置\r
     * @param iColor 颜色\r
     * @param size 大小\r
     * @returns THREE.Points\r
     * @example\r
     * \`\`\`typescript\r
     * Mx.MxThreeJS.createPoint(new Three.Vector3(1,10,0), 0)\r
     * \`\`\`\r
     */\r
    createPoint(mPt: THREE.Vector3, iColor: number | string | THREE.Color, size?: number): THREE.Points;\r
    /**\r
     * 创建Three.js 文字\r
     * @param message 文字信息\r
     * @param pt 位置\r
     * @param iSize 文字大小\r
     * @param fAngle 旋转角度\r
     * @param iColor 颜色\r
     * @returns THREE.Sprite\r
     * @example\r
     * \`\`\`typescript\r
     * Mx.MxThreeJS.creatTextSprite("hello",new Three.Vector3(1,10,0), 90, 60, 0)\r
     * \`\`\`\r
     */\r
    creatTextSprite: (message: string, pt: THREE.Vector3, iSize: number, fAngle: number, iColor: number | string | THREE.Color) => THREE.Sprite | null;\r
    /**\r
     * 计算creatTextSprite函数，创建的文字对象，的尺寸.\r
     * @param message 文字信息\r
     * @param iHeight 文字大小\r
     * @param iWidth 文字宽度.\r
     * @returns {spritewidth:number,spriteheight:number,textwidth:number,singleline:boolean}\r
     * @example\r
     * \`\`\`typescript\r
     *\r
     * \`\`\`\r
     */\r
    clacTextSpriteSize: (message: string, iHeight: number, iWidth?: number) => {\r
        spritewidth: number;\r
        spriteheight: number;\r
        textwidth: number;\r
        singleline: boolean;\r
    };\r
    /**\r
     * 计算文字宽度.\r
     * @param message 文字信息\r
     * @param iHeight 文字大小\r
     * @returns number\r
     * @example\r
     * \`\`\`typescript\r
     *\r
     * \`\`\`\r
     */\r
    clacTextSize: (message: string, iHeight: number) => number;\r
    /**\r
     * 根据三角形数组，创建Three.js Mesh\r
     * @param points 由三个点组成的数组\r
     * @param iColor 颜色\r
     * @param opacity 透明度\r
     * @returns THREE.Mesh\r
     * @example\r
     * \`\`\`typescript\r
     * Mx.MxThreeJS.createTriangle(\r
     * [new THREE.Vector3(1,2,2),new THREE.Vector3(1,65,4),new THREE.Vector3(12,2,2)],\r
     *  0,\r
     *  1\r
     * )\r
     * \`\`\`\r
     */\r
    createTriangle(points: Array<THREE.Vector3>, iColor: number | string | THREE.Color, opacity?: number): THREE.Mesh | null;\r
    /**\r
     * 创建连续直线\r
     * @param points 由多个点组成的数组\r
     * @param iColor 颜色\r
     * @returns THREE.Line\r
     * @example\r
     * \`\`\`typescript\r
     * Mx.MxThreeJS.createLines([new THREE.Vector3(1,2,2),new THREE.Vector3(1,65,4),new THREE.Vector3(12,2,2)], 0)\r
     * \`\`\`\r
     */\r
    createLines(points: Array<THREE.Vector3>, iColor: number | string | THREE.Color): THREE.Line;\r
    /**\r
     * 创建虚线\r
     * @param points 由多个点组成的数组\r
     * @param iColor 颜色\r
     * @param dashSize 短划线的大小\r
     * @param gapSize 短划线之间的距离\r
     * @returns THREE.Line\r
     * @example\r
     * \`\`\`typescript\r
     * Mx.MxThreeJS.createDashedLines([new THREE.Vector3(1,2,2),new THREE.Vector3(1,65,4),new THREE.Vector3(12,2,2)], 10, 20, 2)\r
     * \`\`\`\r
     */\r
    createDashedLines(points: Array<THREE.Vector3>, iColor: number | string | THREE.Color, dashSize: number, gapSize: number): THREE.Line;\r
    /**\r
     * 创建Image\r
     * @param pos 图片中心点位置,屏幕坐标，屏幕坐标的Y轴向上。坐标原点在左下角.\r
     * @param w 图片宽度\r
     * @param h 图片高度\r
     * @param imageUrlPath 图片URl地址\r
     * @param callResult 图片加载完成的回调 回调参数：THREE.Mesh\r
     * @returns void\r
     * @example\r
     * \`\`\`typescript\r
     * Mx.MxThreeJS.createImage(new THREE.Vector3(12,2,2), 10, 20, "../img/icon.png", (mesh)=> {\r
     *      console.log(mesh)\r
     * })\r
     * \`\`\`\r
     */\r
    createImage: (pos: THREE.Vector3, w: number, h: number, imageUrlPath: string, callResult?: (mesh: THREE.Mesh | null) => void) => void | Promise<THREE.Mesh | null>;\r
    /**\r
     * 加载SVG\r
     * @param url SVG路径地址,该函数具有缓存功能，下次加载同样的图片，可以直接返回.\r
     * @param color 颜色\r
     * @param callResult SVG加载完成的回调 回调参数：THREE.Object3D和Array<THREE.MeshBasicMaterial>\r
     * @returns void | THREE.Object3D | null\r
     * @example\r
     * \`\`\`typescript\r
     * Mx.MxThreeJS.loadSVG("../img/icon.svg", 10, 20, 1.5, new THREE.Color(0xff0000), (threeobj, aryMeterial)=> {\r
     *      console.log(threeobj, aryMeterial)\r
     * })\r
     * \`\`\`\r
     */\r
    loadSVG: (url: string, color?: number | string | THREE.Color, callResult?: (threeobj: THREE.Object3D, aryMeterial: Array<THREE.MeshBasicMaterial>) => void, loadSet?: any) => Promise<THREE.Object3D | null>;\r
}

declare const MxThreeJS: MxThreeJS$1;

/** @module McGeTool */\r
\r
/**\r
 * McGeTool\r
 * @example \`\`\`typescript\r
 * \`\`\`\r
 */\r
declare class McGeToolClass {\r
    private mxgeTool;\r
    private initImp;\r
    /**\r
     * 计算闭合的区域面积\r
     * @param aryPoint 构成区域面积的顶点位置集合\r
     * @return number\r
     * @example\r
     * \`\`\`\r
     */\r
    calcArea(aryPoint: McGePoint3dArray | THREE.Vector3[]): number;\r
    /**\r
     * 判断点是否在一个闭合的多边形区域。\r
     * @param pt 点的坐标位置\r
     * @param aryPoint 闭合多边形区域的顶点坐标集合\r
     * @return any\r
     * @example\r
     * \`\`\` typescript\r
     *      let aryPoint:Array<THREE.Vector3> = [];\r
     *      aryPoint.push(new THREE.Vector3(0,0,0));\r
     *      aryPoint.push(new THREE.Vector3(0,100,0));\r
     *      aryPoint.push(new THREE.Vector3(100,100,0));\r
     *      aryPoint.push(new THREE.Vector3(100,0,0));\r
     *      let pt:THREE.Vector3 = new THREE.Vector3(150,150);\r
     *      if(McGeTool.pointInPolyline(pt,aryPoint) ){\r
     *        console.log("in");\r
     *      }\r
     * \`\`\`\r
     */\r
    pointInPolyline(pt: McGePoint3d, aryPoint: McGePoint3dArray | THREE.Vector3[]): boolean;\r
}\r
declare const McGeTool: McGeToolClass;

/** @module McGeTool */\r
\r
/**\r
 * MrxDbgUtils\r
 * 当常用的工具类.\r
 * @example \`\`\`typescript\r
 * \`\`\`\r
 */\r
declare class MrxDbgUtilsClass {\r
    private imp;\r
    private initImp;\r
    /**\r
     * 查找某个位置的对象.\r
     * @param pt 查找位置\r
     * @return 返回找到的对象id数组.\r
     * @example\r
     * \`\`\`\r
     */\r
    findEntAtPoint(pt: THREE.Vector3, filter?: any, mxObj?: MxDrawObject, isDocCoord?: boolean, retWordDrawXDataCall?: (id: number, data: any) => void): Promise<number[]>;\r
    /**\r
     * 交互选择对象.\r
     * @param strPrompt 提示字符串\r
     * @return 返回找到的对象id数组.\r
     * @example\r
     * \`\`\`\r
     */\r
    selectEnt(strPrompt?: string, filter?: any): Promise<number[]>;\r
    /**\r
     * 交互动态绘制一个矩形框.\r
     * @param pt1 矩形框绘制基点.\r
     * @param strPrompt 提示字符串\r
     * @example\r
     * \`\`\`\r
     */\r
    getCorner(pt1: THREE.Vector3, strPrompt?: string, drawSelectCroner?: boolean, detailedResult?: Function, isDisableAllTrace?: boolean): Promise<THREE.Vector3 | null>;\r
}\r
declare const MrxDbgUtils: MrxDbgUtilsClass;

interface MxPaintBrushPropsType {\r
    /** 基础颜色 */\r
    color?: MxColorType;\r
    /** 渲染顺序 */\r
    renderOrder?: number;\r
    /** 透明度 */\r
    opacity?: number;\r
    /** 是否可见 */\r
    visible?: boolean;\r
    /** 线段宽度 */\r
    dLineWidth?: number;\r
    /** 线段宽度是否按照屏幕尺寸计算 */\r
    lineWidthByPixels?: boolean;\r
    /** 实线虚线总段数 破折号之间的长度和间距。\r
     * @describe\r
     * 0: 表示实线了, 0.1:有10段, 0.5:表示有两段 1: 有一段*/\r
    dashArray?: number;\r
    /** 虚线长度和实线长度的比率 (0 -全实线，1 -全虚线[不可见])\r
     * @describe\r
     * 例如取值为0.5, 虚线长度 / (实线长度 + 虚线长度) = 0.5,表示，实线与虚线长度相等*/\r
    dDashRatio?: number;\r
    /** 设置图层 */\r
    layer?: string;\r
    /** 自定义数据（必须保证JSON.parse(JSON.stringify(userData))不报错） */\r
    userData?: {\r
        [key: string]: any;\r
    };\r
    /** 其它自定义对象上的属性 */\r
    [propName: string]: any;\r
}\r
/** 自定义对象绘制时使用全局默认属性的画笔对象 */\r
declare const MxPaintBrush: {\r
    /** 获取当前的画笔属性 */\r
    getProps(): MxPaintBrushPropsType;\r
    /** 设置当前画笔属性 */\r
    setProps(props: MxPaintBrushPropsType): MxPaintBrushPropsType;\r
    /** 使用画笔设置自定义对象的默认属性\r
     * @param entity MxDbEntity类的实例\r
     *  */\r
    use(entity: MxDbEntity): MxDbEntity & MxPaintBrushPropsType;\r
};

/**\r
 * McEdGetPointWorldDrawObject 用于构建一个动态绘制回调对象\r
 * @example \`\`\`typescript\r
 *  Mx.McEdGetPointWorldDrawObject()\r
 * \`\`\`\r
 */\r
declare class McEdGetPointWorldDrawObject {\r
    [x: string]: any;\r
    private _McEdGetPointWorldDraw;\r
    constructor();\r
    /**\r
     * 绘制圆\r
     * @param cen 圆心位置\r
     * @param dRadius 圆半径\r
     * @returns void\r
     * @example\r
     * \`\`\` typescript\r
     * pWorldDraw.drawCircle(new HTREE.Vector3(0,100,5), 6)\r
     * \`\`\`\r
     *\r
     */\r
    drawCircle(cen: THREE.Vector3, dRadius: number): void;\r
    /**\r
     * 绘制直线\r
     * @param pt1 开始点\r
     * @param pt2 结束点\r
     * @returns void\r
     * @example\r
     * \`\`\` typescript\r
     * pWorldDraw.drawLine(new HTREE.Vector3(0,100,5), new HTREE.Vector3(0,600,5))\r
     * \`\`\`\r
     *\r
     */\r
    drawLine(pt1: THREE.Vector3, pt2: THREE.Vector3): void;\r
    /**\r
     * 绘制一个填充区域\r
     * @returns void\r
     * @example\r
     * \`\`\` typescript\r
     * \`\`\`\r
     *\r
     */\r
    drawSolid(points: THREE.Vector3[], opacity?: number): void;\r
    /**\r
     * 绘制矩形框\r
     * @param pt1 矩形框对角点1\r
     * @param pt2 矩形框对角点2\r
     * @returns void\r
     * @example\r
     * \`\`\` typescript\r
     * pWorldDraw.drawRect(new HTREE.Vector3(0,100,5), new HTREE.Vector3(0,600,5))\r
     * \`\`\`\r
     *\r
     */\r
    drawRect(pt1: THREE.Vector3, pt2: THREE.Vector3): void;\r
    /**\r
     * 绘制一个Three.js对象.\r
     * @param ent THREE.Object3D对象\r
     * @returns void\r
     * @example\r
     * \`\`\` typescript\r
     * pWorldDraw.drawEntity(new THREE.Object3D()))\r
     * \`\`\`\r
     *\r
     */\r
    drawEntity(ent: THREE.Object3D | null, renderOrder?: number): void;\r
    /**\r
     * 绘制一个MxCAD数据库对象\r
     * @param mcdbEntity MxCAD数据库对象\r
     * @returns void\r
     * @example\r
     * \`\`\` typescript\r
     * \`\`\`\r
     *\r
     */\r
    drawMcDbEntity(mcdbEntity: any, isUseDatabaseCurrentProperties?: boolean): any;\r
    /**\r
     * 绘制一个MxCAD数据库对象\r
     * @param mcdbEntity MxCAD数据库对象\r
     * @returns void\r
     * @example\r
     * \`\`\` typescript\r
     * \`\`\`\r
     *\r
     */\r
    drawMcDbLine(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): any;\r
    /**\r
     * 绘制一个文档对象\r
     * @param sText 文本\r
     * @param iSize 大小\r
     * @param dAngle 角度\r
     * @param pt 位置\r
     * @returns void\r
     * @example\r
     * \`\`\` typescript\r
     * pWorldDraw.drawText("字符串" ,36 ,90 ,new HTREE.Vector3(0,100,5))\r
     * \`\`\`\r
     *\r
     */\r
    drawText(sText: string, iSize: number, dAngle: number, pt: THREE.Vector3): void;\r
    /**\r
     * 设置动态绘制回调函数。\r
     * @param call 回调函数 currentPoint 回调参数 当前位置 pWorldDraw 回调参数文档绘制对象\r
     * @returns void\r
     * @example\r
     * \`\`\` typescript\r
     * pWorldDraw.setDraw((currentPoint, pWorldDraw)=> {\r
     *\r
     * })\r
     * \`\`\`\r
     */\r
    setDraw(call: (currentPoint: THREE.Vector3, pWorldDraw?: any) => void): void;\r
    /**\r
     * 设置绘制对象颜色.\r
     * @param iColor 颜色\r
     * @returns void\r
     * @example\r
     * \`\`\` typescript\r
     * pWorldDraw.setColor(0xFFFFFF)\r
     * \`\`\`\r
     */\r
    setColor(iColor: number | string | THREE.Color): void;\r
    /**\r
     * 得到绘制对象颜色.\r
     * @returns 颜色\r
     * @example\r
     * \`\`\` typescript\r
     * pWorldDraw.getColor()\r
     * \`\`\`\r
     */\r
    getColor(): number | string | THREE.Color;\r
    /**\r
     * 动态绘制一个自定义实体\r
     * @returns\r
     * @example\r
     * \`\`\` typescript\r
     *\r
     * \`\`\`\r
     */\r
    drawCustomEntity(ent: any, renderOrder?: number): void;\r
}

/** @module MrxDbgUiPrBaseReturn*/\r
/**\r
 * MrxDbgUiPrBaseReturn枚举\r
 * @description\r
 * 用于适配{@link MrxDbgUiPrPoint.go} 和 {@link MrxDbgUiPrPoint.goWhile} 方法中的回调参数\`status\`\r
 * @example\r
 * \`\`\`\r
 * const Point = new Mx.MrxDbgUiPrPoint()\r
 * Point.go((status)=> {\r
 *  if(Mx.MrxDbgUiPrBaseReturn.kCancel === status) {\r
 *    // 取消\r
 *  }\r
 * })\r
 *\r
 * \`\`\`\r
 * @enum\r
 * */\r
declare enum MrxDbgUiPrBaseReturn {\r
    /** 取消 */\r
    kCancel = -2,\r
    /** 空输入，当输入关键字和实体时会返回此值 */\r
    kNone = -1,\r
    /** 获取用户输入成功 */\r
    kOk = 0,\r
    /** 用户输入了关键字*/\r
    kKeyWord = 1\r
}

/** @module MrxDbgUiPrPointClass */\r
\r
/** 鼠标样式类型 */\r
declare enum MxCursorType {\r
    /** 正常 */\r
    kNormal = 0,\r
    /** 矩形 */\r
    kRect = 1,\r
    /**十字 */\r
    kCross = 2\r
}\r
/** 动态输入显示类型 */\r
declare enum DynamicInputType {\r
    /** 不进行动态显示 */\r
    kNoInput = 0,\r
    /** X,Y坐标输入 */\r
    kXYCoordInput = 1,\r
    /** 输入与前一个点的距离和与水平的夹角,并能动态跟踪. */\r
    kDistanceInput = 2,\r
    /** 仅显示提示 */\r
    kDynTip = 3,\r
    /** 自动确定输入类型. */\r
    kAutoInput = 4,\r
    /** 输入与前一个点的距离和与水平的夹角 */\r
    kAngleInput = 5\r
}\r
/** 当前交互操作返回值类型 */\r
declare enum DetailedResult {\r
    /** 未知操作 */\r
    kUnknown = 1,\r
    /** 移动触摸按下 */\r
    kTouchDownIn = 2,\r
    /** 移动触摸抬起 */\r
    kTouchUpIn = 3,\r
    /** 鼠标左键输入。 */\r
    kMouseLeftIn = 4,\r
    /** 鼠标左键输入抬起。 */\r
    kMouseLeftUpIn = 5,\r
    /** 鼠标右键输入 */\r
    kMouseRightIn = 6,\r
    /** 命令行输入有效内容退出,比如输入了关键字 */\r
    kKeyIn = 7,\r
    /** 坐标输入（文字提示输入对应数字也行） */\r
    kCoordIn = 8,\r
    /** 空回车输入 */\r
    kNullEnterIn = 9,\r
    /** 空回空格输入 */\r
    kNullSpaceIn = 10,\r
    /** ESC输入 */\r
    kEcsIn = 11,\r
    /** 新命令，使用当前命令退出. */\r
    kNewCommadIn = 12,\r
    /** 程序终止. */\r
    kCodeAbort = 13\r
}\r
/** 用户输入函数控制操作符 */\r
declare enum UserInputControls {\r
    /** 由正射模式控制 */\r
    kGovernedByOrthoMode = 1,\r
    /** 接受用户空输入 */\r
    kNullResponseAccepted = 2,\r
    /** 不回显Ctrl c的取消 */\r
    kDontEchoCancelForCtrlC = 4,\r
    /** 不更新最后一点 */\r
    kDontUpdateLastPoint = 8,\r
    /** 无图纸限制检查 */\r
    kNoDwgLimitsChecking = 16,\r
    /** 不接受0输入 */\r
    kNoZeroResponseAccepted = 32,\r
    /** 不接受负数输入 */\r
    kNoNegativeResponseAccepted = 64,\r
    /** 接受3d坐标 */\r
    kAccept3dCoordinates = 128,\r
    /** 接受鼠标向上移动作为指针 */\r
    kAcceptMouseUpAsPoint = 256,\r
    /** 任何空格都会终止输入 */\r
    kAnyBlankTerminatesInput = 512,\r
    /** 首字母空格终止输入 */\r
    kInitialBlankTerminatesInput = 1024,\r
    /** 接受其他输入字符串 */\r
    kAcceptOtherInputString = 2048,\r
    /** 由UCS检测控制 */\r
    kGovernedByUCSDetect = 4096,\r
    /** 无z方向正交 */\r
    kNoZDirectionOrtho = 8192,\r
    /** 接受空格输入 */\r
    kSpacesInAccepted = 16384\r
}\r
declare class MrxDbgUiPrBase {\r
    protected imp: any;\r
    protected status: MrxDbgUiPrBaseReturn;\r
    constructor(imp: any);\r
    /**\r
     * 返回关键字列表\r
     * @returns 关键词列表\r
     */\r
    keyWords(): string;\r
    /**\r
     * 设置关键字列表\r
     * @param keyWordList 关键词列表\r
     * @returns void\r
     */\r
    setKeyWords(keyWordList: string): void;\r
    /**\r
     * 提示字符串\r
     * @returns 提示消息\r
     */\r
    message(): string;\r
    /**\r
     * 设置提示字符串\r
     * @param message 提示消息\r
     * @returns 提示消息\r
     */\r
    setMessage(message: string): void;\r
    /**\r
     * 清除上一次的输入点\r
     * @returns 选择的关键字\r
     */\r
    clearLastInputPoint(): void;\r
    /**\r
     * 设置上一次的输入点。\r
     * @returns 选择的关键字\r
     */\r
    setLastInputPoint(pt: THREE.Vector3 | undefined): void;\r
    /**\r
     * 返回用户选择的关键字\r
     * @returns 选择的关键字\r
     */\r
    keyWordPicked(): string;\r
    /**\r
     * 测试某一个关键字是否被用户选择\r
     * @param matchKeyWord 要检测的关键字\r
     * @returns true为真\r
     */\r
    isKeyWordPicked(matchKeyWord: string): boolean;\r
    /**\r
     * 设置交互过程的动态绘制调用对象\r
     * @param pDraw {@link McEdGetPointWorldDrawObject | 动态绘制调用对象}\r
     * @returns void\r
     */\r
    setUserDraw(pDraw: McEdGetPointWorldDrawObject | ((currentPoint: THREE.Vector3, pWorldDraw: McEdGetPointWorldDrawObject) => void)): void;\r
    /**\r
     * 返回交互操作退出的详细原因\r
     */\r
    getDetailedResult(): DetailedResult;\r
    getStatus(): MrxDbgUiPrBaseReturn;\r
    /**\r
     * 把动态绘制的对象，保留到图上。\r
     * @param callAddEntity 回调参数ent 类型：THREE.THREE.Object3D\r
     * @returns 点对象 DWG图纸坐标\r
     */\r
    drawReserve(callAddEntity?: (ent: THREE.Object3D) => void): void;\r
    /**\r
     * 设置需要的Touche输入类型,默认值是 {@link MxType.InputToucheType.kGetBegan}\r
     */\r
    setInputToucheType(toucheType: number): void;\r
    /**\r
     * 返回需要的Touche输入类型\r
     */\r
    getInputToucheType(): number;\r
    /**\r
     * 设置光标类型\r
     */\r
    setCursorType(type: MxCursorType): void;\r
    /**\r
     * 返回光标类型\r
     */\r
    getCursorType(): MxCursorType;\r
    /**\r
     * 设置动态输入类型\r
     */\r
    setDynamicInputType(type: DynamicInputType): void;\r
    /**\r
     * 返回动态输入类型\r
     */\r
    getDynamicInputType(): DynamicInputType;\r
    /**\r
     * 是否禁用动态输入框\r
     */\r
    isDisableDynInput(): boolean;\r
    /**\r
     * 设置是否禁用动态输入框\r
     */\r
    setDisableDynInput(isDisable: boolean): void;\r
    /**\r
     * 设置是否禁用捕捉\r
     */\r
    setDisableOsnap(isDisable: boolean): void;\r
    /**\r
     * 是否输入点遍移一个距离\r
     */\r
    isOffsetInputPostion(): boolean;\r
    /**\r
     * 设置输入点遍移一个距离\r
     */\r
    setOffsetInputPostion(isOffset: boolean): void;\r
    /**\r
     * 是否禁用捕捉\r
     */\r
    isDisableOsnap(): boolean;\r
    setDisableDynamicTrace(isDisable: boolean): void;\r
    isDisableDynamicTrace(): boolean;\r
    setDisablePolarAxisTrace(isDisable: boolean): void;\r
    isDisablePolarAxisTrace(): boolean;\r
    setDisableGridTrace(isDisable: boolean): void;\r
    isDisableGridTrace(): boolean;\r
    setDisableOrthoTrace(isDisable: boolean): void;\r
    isDisableOrthoTrace(): boolean;\r
    disableAllTrace(isDisable?: boolean): void;\r
    /**\r
     * 返回输入控制设置，UserInputControls\r
     */\r
    userInputControls(): number;\r
    /**\r
     * 设置输入控制设置，UserInputControls\r
     */\r
    setUserInputControls(contros: number): void;\r
}\r
/**\r
 * MrxDbgUiPrPoint 用于构建一个取点对象\r
 * @example \`\`\`typescript\r
 *  new Mx.MrxDbgUiPrPoint()\r
 * \`\`\`\r
 */\r
declare class MrxDbgUiPrPoint extends MrxDbgUiPrBase {\r
    constructor();\r
    /**\r
     * 得以获取的点对象，Three.js坐标\r
     * @returns 点对象 THREE.THREE.Vector3\r
     */\r
    value(): THREE.Vector3;\r
    /**\r
     * 得到 MxCAD下CAD图纸坐标.\r
     * @returns 点对象 MdGePoint3d\r
     */\r
    getCADValue(): any;\r
    /**\r
     * 得以获取的点对象，DWG图纸坐标.\r
     * @returns 点对象 DWG图纸坐标\r
     */\r
    valueDocCoord(): THREE.Vector3;\r
    /**\r
     * 得到动态拖动的基点\r
     * @returns 基点 THREE.THREE.Vector3\r
     */\r
    basePt(): THREE.Vector3;\r
    /**\r
     * 设置动态拖动的基点\r
     * @param basePt 基点 THREE.THREE.Vector3\r
     * @returns 点对象 DWG图纸坐标\r
     */\r
    setBasePt(basePt: THREE.Vector3): void;\r
    /**\r
     * 设置使用动态拖动的基点\r
     * @param useIt 是否设置 默认为false\r
     * @returns void\r
     */\r
    setUseBasePt(useIt: boolean): void;\r
    /**\r
     * 开始动态拖动\r
     * @param retcall  回调参数status {@link MrxDbgUiPrBaseReturn | 状态值}\r
     * @returns void\r
     */\r
    go(retcall?: (status: MrxDbgUiPrBaseReturn) => void): Promise<THREE.Vector3 | null>;\r
    /**\r
     * 动态拖动，连续取点，直到ESC退出。\r
     * @param retcall 回调参数status {@link MrxDbgUiPrBaseReturn | 状态值}\r
     * @param exitcall 回调参数status {@link MrxDbgUiPrBaseReturn | 状态值}\r
     * @returns void\r
     */\r
    goWhile(retcall: (status: MrxDbgUiPrBaseReturn) => any, exitcall?: (status: MrxDbgUiPrBaseReturn) => any): void;\r
    /**\r
     * 停止当前动态拖动\r
     * @returns void\r
     */\r
    abort(cause: DetailedResult): void;\r
}

declare function drawMxDbImage(): void;

/**\r
 * MxDbImage 图片对象.\r
 */\r
declare class MxDbImage extends MxDbEntity {\r
    static cmd: string;\r
    static draw: typeof drawMxDbImage;\r
    private pt1;\r
    private pt2;\r
    private imagePath;\r
    private isLoadMaterialFromPath;\r
    private material;\r
    private angle;\r
    getTypeName(): string;\r
    /** 返回图片的旋转角度,相对图片中心点旋转.\r
     * @param\r
     * */\r
    getAngle(): number;\r
    /** 设置图片的旋转角度,相对图片中心点旋转.\r
     * @param\r
     * */\r
    setAngle(angle: number): void;\r
    worldDraw(pWorldDraw: McGiWorldDraw): void;\r
    /** 设置图片路径\r
     * @param sPath 路径\r
     * */\r
    setImagePath(sPath: string): void;\r
    /** 获取图片路径 */\r
    getImagePath(): string;\r
    /** 设置图片材质\r
     * @param material  THREE.MeshLambertMaterial\r
     * */\r
    setMaterial(material: THREE.MeshLambertMaterial): void;\r
    /** 加载图片材质\r
     * */\r
    loadMaterial(imagePath?: string): void;\r
    /** 设置图片对角点1\r
     * @param pt1 THREE.Vector3坐标点\r
     * */\r
    setPoint1(pt1: THREE.Vector3): void;\r
    /** 获得图片对角点1 */\r
    getPoint1(): THREE.Vector3;\r
    /** 设置图片对角点2\r
     * @param pt2 THREE.Vector3坐标点\r
     *  */\r
    setPoint2(pt2: THREE.Vector3): void;\r
    /** 获得图片对角点2 */\r
    getPoint2(): THREE.Vector3;\r
    getGripPoints(): Array<THREE.Vector3>;\r
    moveGripPointsAt(index: number, offset: THREE.Vector3): boolean;\r
    dwgIn(obj: any): boolean;\r
    dwgOut(obj: any): object;\r
    create(): MxDbEntity;\r
}

/** @module MxDbSVG*/\r
/**\r
 * MxDbSVGText 为SVG提供文字数据\r
 * */\r
declare class MxDbSVGText {\r
    /** 文字的位置 */\r
    txtPos: THREE.Vector3;\r
    /** 文字内容 */\r
    txt: string;\r
    /** 文字高度 */\r
    txtHeight: number;\r
    /** 文字颜色 */\r
    color: number | string | THREE.Color | undefined;\r
    /** THREE.Sprite */\r
    _txtObject: THREE.Sprite | null;\r
    /** 比例 */\r
    _txtAspectRatio: number;\r
    /** 文字是否能独立移动 */\r
    move: boolean;\r
    /** 文字移动到距图片远处，自动绘制一个连接线 */\r
    drawConnectingLine: boolean;\r
    /** 连接线的临时绘制对象 */\r
    _connectingLine: THREE.Line | null;\r
    /** 字体样式 */\r
    fontStyle: string;\r
    /** 下划线 */\r
    underline: boolean;\r
    /** 下划线的临时绘制对象 */\r
    _underLine: THREE.Line | null;\r
}

declare function drawMxDbSVG(): Promise<void>;

/** @module MxDbSVG*/\r
\r
/**\r
 * MxDbSVG 绘制SVG图形.\r
 */\r
declare class MxDbSVG extends MxDbEntity {\r
    static cmd: string;\r
    static draw: typeof drawMxDbSVG;\r
    private svgPos;\r
    private svg;\r
    private svgPath;\r
    private svgSize;\r
    private svgAlignmentRatio;\r
    private imagePath;\r
    private isLoadMaterialFromPath;\r
    private material;\r
    /** 延z轴旋转的数值 */\r
    svgRotate: number;\r
    /** 是否倒置SVG图形 */\r
    svgReverse: boolean;\r
    svgMirror: boolean;\r
    private svgChildColor;\r
    svgMargin: THREE.Vector2;\r
    private isSvgDirtyLocation;\r
    private isLoadFromPath;\r
    private aryText;\r
    private svgBoxSize;\r
    /** 固定尺寸，图片和文字大小，取屏幕像素绘图单位。 */\r
    fixedSize: boolean;\r
    /**使用svg的颜色 */\r
    useSvgColor: boolean;\r
    setSvgChildColor(aryColor: number[]): void;\r
    getSvgChildColor(): number[];\r
    private calcVewSize;\r
    calcSvgDrawRect(mxObj: MxDrawObject): any;\r
    private calcImageDrawRect;\r
    worldDraw(pWorldDraw: McGiWorldDraw): void;\r
    /**\r
     * 设置SVG的路径\r
     * @param path 路径\r
     * @param preload 是否提前加载SVG\r
     * */\r
    setSvgPath(path: string, preload?: boolean): Promise<void>;\r
    /**\r
     * 获取SVG的路径\r
     * */\r
    getSvgPath(): string;\r
    /**\r
     * 设置SVG显示位置\r
     * @param pos  THREE.Vector3\r
     * */\r
    setSvgPostion(pos: THREE.Vector3): void;\r
    /** 设置图片路径\r
     * @param sPath 路径\r
     * */\r
    setImagePath(sPath: string, material?: THREE.MeshLambertMaterial): void;\r
    /** 获取图片路径 */\r
    getImagePath(): string;\r
    /**\r
     * 获取SVG显示位置\r
     * */\r
    getSvgPostion(): THREE.Vector3;\r
    /**\r
     * 设置SVG大小\r
     * @param size THREE.Vector2 x表示宽度y表示高度\r
     * */\r
    setSvgSize(size: THREE.Vector2): void;\r
    getSvgSize(): THREE.Vector2;\r
    /** 设置SVG 的调整比例\r
     * @param alignmentRatio THREE.Vector2\r
     *  */\r
    setSvgAlignmentRatio(alignmentRatio: THREE.Vector2): void;\r
    getSvgAlignmentRatio(): THREE.Vector2;\r
    /** 获取文字数组下标中的文字\r
     * @param index 数组下标\r
     * @return {@link MxDbSVGText}\r
     *  */\r
    getText(index: number): MxDbSVGText | null;\r
    /** 添加文字\r
     * @param txt {@link MxDbSVGText}\r
     *  */\r
    addText(txt: MxDbSVGText): void;\r
    getGripPoints(): Array<THREE.Vector3>;\r
    moveGripPointsAt(index: number, offset: THREE.Vector3): boolean;\r
    private calcSvgPosition;\r
    dwgIn(obj: any): boolean;\r
    dwgOut(obj: any): object;\r
    create(): MxDbSVG;\r
    transformBy(mat: THREE.Matrix4): void;\r
    getTypeName(): string;\r
    /**\r
     * 设置颜色\r
     * @param color 颜色值\r
     * */\r
    setColor(color: number | string | THREE.Color): this;\r
    /**\r
     * 设置svg对象\r
     * */\r
    setSvg(svg: any): void;\r
    private calcSvgBoxSize;\r
    reComputeSVG(): void;\r
    protected onViewChange(): boolean;\r
}

declare function drawMxDbPolyline(): void;

/**\r
 * MxDbPolyline 多义线对象(多个点构成的线段)\r
 */\r
declare class MxDbPolyline extends MxDbEntity {\r
    static cmd: string;\r
    static draw: typeof drawMxDbPolyline;\r
    /** 顶点位置集合 */\r
    points: THREE.Vector3[];\r
    getTypeName(): string;\r
    worldDraw(pWorldDraw: McGiWorldDraw): void;\r
    getGripPoints(): THREE.Vector3[];\r
    moveGripPointsAt(index: number, offset: THREE.Vector3): boolean;\r
    create(): MxDbEntity;\r
    dwgIn(obj: any): boolean;\r
    dwgOut(obj: any): object;\r
    /** 添加顶点位置 */\r
    addVertexAt(pt: THREE.Vector3): void;\r
    /** 顶点数量 */\r
    numVerts(): number;\r
    getPointAt(index: number): THREE.Vector3 | null;\r
    /**  设置顶点\r
     * @param index 替换的顶点在当前points集合的下标位置\r
     * @param pt 要替换设置的顶点\r
     *  */\r
    setPointAt(index: number, pt: THREE.Vector3): boolean;\r
}

declare function drawMxDb2LineAngularDimension(): MxDb2LineAngularDimension;

declare class MxDb2LineAngularDimension extends MxDbEntity {\r
    static cmd: string;\r
    static draw: typeof drawMxDb2LineAngularDimension;\r
    /**\r
     * MxDb2LineAngularDimension\r
     * 显示角度测量的图形\r
     * @param  options.points [point1(起始点)、point2(角顶点)、point3(结束点)]\r
     * @param  options.colors [起始线段颜色, 结束线段颜色, 标注角度圆弧颜色, 文字标注的角度颜色]\r
     * @example\r
     * \`\`\` typescript\r
     * const draw = Mx.MxFun.getCurrentDraw();\r
     * const points = [ getPoint.value(),\r
     *          getPoint.value().add(new THREE.Vector3(8880, 0, 0)),\r
     *          getPoint.value().add(new THREE.Vector3(0, 6666, 0)),\r
     *       ]\r
     * const colors = ['#F00880','#00ff1a', void 0, 0XFF0000]\r
     * const obj = new Mx.MxDb2LineAngularDimension().setPoints(points).setColor(colors).setLineWidth(6)\r
     * draw.addMxEntity(obj)\r
     * \`\`\`\r
     **/\r
    constructor(options?: {\r
        /** 传入三个位置THREE向量 分别对应 属性: point1(起始点)、point2(角顶点)、point3(结束点) 计算角度 */\r
        points?: THREE.Vector3[];\r
        /**  colors 各标注的颜色设置:\r
         * [起始线段颜色, 结束线段颜色, 标注角度圆弧颜色, 文字标注的角度颜色]\r
         * 某一项为null或undefined采用绘制颜色 */\r
        colors?: UnstableColor[];\r
    });\r
    point1: three.Vector3;\r
    point2: three.Vector3;\r
    point3: three.Vector3;\r
    /**\r
     * colors 各标注的颜色设置:\r
     * [起始线段颜色, 结束线段颜色, 标注角度圆弧颜色, 文字标注的角度颜色]\r
     * 某一项为null或undefined采用绘制颜色\r
     * */\r
    colors: UnstableColor[];\r
    private calculateLineAngle;\r
    /**\r
     * 设置point1 、 point2、point3 向量位置\r
     * @param { THREE.Vector3[] } points\r
     */\r
    setPoints(points: THREE.Vector3[]): this;\r
    /**\r
     * 设置颜色组合\r
     * @param colors [起始线段颜色, 结束线段颜色, 标注角度圆弧颜色, 文字标注的角度颜色]\r
     * 某一项为null或undefined采用绘制颜色 || 单颜色\r
     * */\r
    setColor(colors: UnstableColor[] | MxColorType): this;\r
    worldDraw(pWorldDraw: McGiWorldDraw): void;\r
    getGripPoints(): three.Vector3[];\r
    moveGripPointsAt(index: number, offset: THREE.Vector3): boolean;\r
    dwgIn(obj: any): boolean;\r
    dwgOut(obj: any): any;\r
    create(): MxDb2LineAngularDimension;\r
    transformBy(mat: THREE.Matrix4): void;\r
    getTypeName(): string;\r
}

/** 简单颜色滤镜矩阵 */\r
interface ChannelParamTypes {\r
    r?: number;\r
    g?: number;\r
    b?: number;\r
}\r
declare class MxFilters {\r
    private uniformObj;\r
    private filtersStr;\r
    private filtersTypes;\r
    private VSHADER_SOURCE;\r
    private FSHADER_SOURCE;\r
    private _matrix;\r
    /**\r
     * 过滤或增强某个颜色通道\r
     * @param {ChannelParamTypes}\r
     * */\r
    channel({ r, g, b }: ChannelParamTypes): this;\r
    /**\r
     * 改变亮度\r
     * @param {number} p\r
     * p = 0 全暗，p > 0 且 p < 1 调暗，p = 1 原色， p > 1 调亮\r
     * */\r
    brightness(p: number): this;\r
    /**\r
     * 饱和度\r
     * @param {number} p\r
     * p = 0 完全灰度化，p = 1 原色，p > 1 增强饱和度\r
     * */\r
    saturate(p: number): this;\r
    /**\r
     * 对比度\r
     * @param {number} p\r
     *  p = 1 原色， p < 1 减弱对比度，p > 1 增强对比度\r
     * */\r
    contrast(p: number): this;\r
    /**\r
     * 透明度\r
     * @param {number} p\r
     * p = 0 全透明，p = 1 原色\r
     * */\r
    opacity(p: number): this;\r
    /**\r
     * 反色\r
     * @param {number} p\r
     * p = 0 原色， p = 1 完全反色\r
     * */\r
    invert(p: number): this;\r
    /**\r
     * 灰度\r
     * @param {number} p 0~1\r
     * */\r
    grayscale(p?: number): this;\r
    /**\r
     * 深褐色\r
     * @param {number} p 0~1\r
     * */\r
    sepia(p?: number): this;\r
    /**\r
     * 色相旋转，将色调沿极坐标转过deg角度\r
     * @param {number} deg 0~360\r
     * */\r
    hueRotate(deg: number): this;\r
    /**\r
     * 色相旋转，将色调沿极坐标转过deg角度\r
     * @param {number} deg 0~360\r
     * */\r
    /**\r
     * 卷积\r
     * @param {Matrix3} cKernel 3*3的矩阵\r
     * @param {number} stStep 1 / 9\r
     * @param {number} scaleFactor 521\r
     * */\r
    convolution(cKernel: THREE.Matrix3, stStep?: number, scaleFactor?: number): this;\r
    /**\r
     * 重置所有滤镜效果\r
     * */\r
    reset(): this;\r
    _getFilterShaderData(texture: THREE.Texture): {\r
        uniforms: {\r
            e_Texture: {\r
                value: three.Texture;\r
            };\r
            colorMatrix: {\r
                value: three.Matrix4;\r
            };\r
        };\r
        vertexShader: string;\r
        fragmentShader: string;\r
    };\r
    _getFilterColor(color?: string | number | THREE.Color, opacity?: number): three.Color;\r
    /** 转成JSON字符串 */\r
    toJSON(): string;\r
    /** 还原序列化的数据 */\r
    static fromJSON(json: string): MxFilters;\r
}

/** 动态绘制形状\r
 * 基于THREE.Shape计算实现的形状\r
 * 通过扩展可以实现各种2d 3d形状\r
 *  **/\r
declare class MxDbShape extends MxDbEntity {\r
    protected _paths: THREE.CurvePath<THREE.Vector3 | THREE.Vector2>;\r
    protected points: THREE.Vector3[];\r
    protected closedLine: THREE.Curve<THREE.Vector3>;\r
    protected isLoadMaterialFromPath: boolean;\r
    protected material: THREE.MeshLambertMaterial | null;\r
    /** 描边颜色 */\r
    stroke: UnstableColor;\r
    setStroke(stroke: UnstableColor): this;\r
    /** 描边线段的宽度 */\r
    strokeLineWidth: number;\r
    setStrokeLineWidth(strokeLineWidth: number): this;\r
    /** 描边是否为虚线 */\r
    isStrokeDashLine: boolean;\r
    setIsStrokeDashLine(isStrokeDashLine: boolean): this;\r
    /** 填充 */\r
    isFill: boolean;\r
    setIsFill(isFill: boolean): this;\r
    /** 填充图片路径 */\r
    protected _fillImageSrc: string | false | null | undefined;\r
    get fillImageSrc(): string | false | null | undefined;\r
    set fillImageSrc(src: string | false | null | undefined);\r
    /**\r
     * 设置图片值\r
     * fillImageSrc 当设置为null | false 时取消图片填充\r
     * */\r
    setFillImageSrc(fillImageSrc: string | null | false | undefined): this;\r
    /**\r
     * fillImageParam 填充背景图片的参数设置(如果使用了滤镜则部分参数功能失效)\r
     * */\r
    fillImageParam: {\r
        offset?: THREE.Vector2;\r
        repeat?: THREE.Vector2;\r
        rotation?: number;\r
        center?: THREE.Vector2;\r
    } | undefined;\r
    setFillImageParam(param: MxDbShape['fillImageParam']): void;\r
    /** 线段细分数值 */\r
    curveSegments: number;\r
    setCurveSegments(curveSegments: number): this;\r
    /** 闭合 */\r
    closed: boolean;\r
    setClosed(closed: boolean): this;\r
    /**\r
     * 设置滤镜对象{@link MxFilters} 默认为undefined | null 则不使用该滤镜效果\r
     * */\r
    filter: MxFilters | undefined | null;\r
    /** 获取当前滤镜对象 {@link MxFilters} */\r
    getFilter(): MxFilters | undefined | null;\r
    setFilter(filter: MxFilters | undefined | null): void;\r
    _cornerRadius: number[] | number;\r
    /** 圆角半径 (一个向量点对应一个角的半径值)*/\r
    get cornerRadius(): number | number[];\r
    set cornerRadius(radius: number | number[]);\r
    /**\r
     * 设置圆角 圆角的半径（如果参数为数组则一个角度对应一个圆角半径）\r
     * @param { number | number[] } radius 圆角半径 为数组时[3, 2, 1, 4]分别对应左上角圆角半径3  右上角2  右下角1 左下角4； 或者直接设置半径值 则四个角统一半径\r
     * @param isScreenCoord 是否根据屏幕坐标设置\r
     * */\r
    setCornerRadius(radius: number | number[], isScreenCoord?: boolean): void;\r
    /** 需要输入和输出的属性 */\r
    protected _propertyDbKeys: string[];\r
    getTypeName(): string;\r
    /** 获取坐标集合 */\r
    protected getShapePoints(paths: THREE.CurvePath<THREE.Vector3 | THREE.Vector2>): three.Vector3[];\r
    /*** 创建路径 */\r
    protected createPaths(shapes: THREE.Curve<THREE.Vector3 | THREE.Vector2> | THREE.Curve<THREE.Vector3 | THREE.Vector2>[]): three.CurvePath<three.Vector3 | three.Vector2>;\r
    /** 动态绘制函数*/\r
    protected _draw(pWorldDraw: McGiWorldDraw, vertices: THREE.Vector3[]): void;\r
    /** 获取生成圆角后的点 */\r
    getCornerRadiusPoints(points: THREE.Vector3[]): three.Vector3[];\r
    /** 绘制描边 */\r
    protected _drawStoreLine(pWorldDraw: McGiWorldDraw, points: THREE.Vector3[], draw?: (pWorldDraw: McGiWorldDraw) => void): void;\r
    /** 获取线段闭合后的曲线点数 */\r
    getClosedPoints(points: THREE.Vector3[]): three.Vector3[];\r
    /** 获取长度 */\r
    getTotalLength(): number | undefined;\r
    getGetLength(): number;\r
    /** 获取面积 */\r
    getArea(): number;\r
    worldDraw(pWorldDraw: McGiWorldDraw): void;\r
    /** 图片填充 */\r
    _fillImg(pWorldDraw: McGiWorldDraw, points: THREE.Vector3[]): void;\r
    getGripPoints(): THREE.Vector3[];\r
    moveGripPointsAt(index: number, offset: THREE.Vector3): boolean;\r
    dwgIn(obj: any): boolean;\r
    dwgOut(obj: any): object;\r
    transformBy(mat: THREE.Matrix4): void;\r
}

/*** 椭圆(弧)形状 */\r
declare class MxDbEllipseShape extends MxDbShape {\r
    constructor();\r
    getTypeName(): string;\r
    /** 圆心 */\r
    center: three.Vector3;\r
    setCenter(center: THREE.Vector3): this;\r
    /** X轴椭圆弧半径 默认当前坐标转换下的10像素 */\r
    xRadius: number;\r
    setXRadius(xRadius: number): this;\r
    /**  Y轴椭圆弧半径 默认当前坐标转换下的10像素 */\r
    yRadius: number;\r
    setYRadius(yRadius: number): this;\r
    /** 弧开始角度 默认0*/\r
    startAngle: number;\r
    setStartAngle(startAngle: number): this;\r
    /** 弧结束角度 默认0*/\r
    endAngle: number;\r
    setEndAngle(endAngle: number): this;\r
    /** 以顺时针方向创建（扫过）弧线 默认false */\r
    clockwise: boolean;\r
    setClockwise(clockwise: boolean): this;\r
    /** 旋转角度 */\r
    rotation: number;\r
    setRotation(rotation: number): this;\r
    /** 是否闭合到中心位置 */\r
    isClosedToCenter: boolean;\r
    setIsClosedToCenter(isClosedToCenter: boolean): this;\r
    worldDraw(pWorldDraw: McGiWorldDraw): void;\r
    /** 绘制椭圆形状 */\r
    drawEllipseShape(pWorldDraw: McGiWorldDraw): {\r
        /** 圆心角 */\r
        centralAngle: number;\r
        /** 圆弧曲线 */\r
        curve: three.EllipseCurve;\r
        /** 构成圆弧的向量点 */\r
        points: three.Vector3[];\r
    };\r
    /** 创建圆弧 */\r
    createEllipseCurve(x?: number, y?: number, xRadius?: number, yRadius?: number, startAngle?: number, endAngle?: number, clockwise?: boolean, rotation?: number): three.EllipseCurve;\r
    /** 获取圆角的点集合(椭圆不需要) */\r
    getCornerRadiusPoints(points: THREE.Vector3[]): three.Vector3[];\r
    getClosedPoints(points: THREE.Vector3[]): THREE.Vector3[];\r
    getClosedLine(points: THREE.Vector3[]): three.CatmullRomCurve3;\r
    getGripPoints(): three.Vector3[];\r
    moveGripPointsAt(index: number, offset: THREE.Vector3): boolean;\r
}

/*** 圆(弧)形状 */\r
declare class MxDbCircleShape extends MxDbEllipseShape {\r
    getTypeName(): string;\r
    /*** 圆半径 */\r
    get radius(): number;\r
    set radius(radius: number);\r
    setRadius(radius: number): this;\r
    setXRadius(xRadius: number): this;\r
    setYRadius(yRadius: number): this;\r
}

declare function drawMx3PointArc(): void;

/** 三点动态绘制圆弧 point1圆弧起始点 point2是圆弧结束点, point3圆弧任意一点  */\r
declare class Mx3PointArc extends MxDbCircleShape {\r
    static cmd: string;\r
    static draw: typeof drawMx3PointArc;\r
    static isRegister: boolean;\r
    constructor();\r
    point1: three.Vector3;\r
    point2: three.Vector3;\r
    point3: three.Vector3;\r
    /** 自动确定顺逆时针绘制 */\r
    autoClockwise: boolean;\r
    closed: boolean;\r
    /** 圆心角 */\r
    centralAngle: number;\r
    getTypeName(): string;\r
    create(): Mx3PointArc;\r
    worldDraw(pWorldDraw: McGiWorldDraw): void;\r
    getGripPoints(): THREE.Vector3[];\r
    /** 计算三个控制点的角度 */\r
    compute3PointAngle(point1?: three.Vector3, point2?: three.Vector3, point3?: three.Vector3): number[];\r
    /** 根据三个控制点更新圆心 */\r
    upDateCenter(point1?: three.Vector3, point2?: three.Vector3, point3?: three.Vector3): three.Vector3;\r
    /** 根据圆心和一个控制点自动更新半径大小 */\r
    upDateRadius(point?: three.Vector3): number;\r
    /** 根据 三个控制点到圆心的角度  更新顺逆时针绘制 */\r
    upDataClockwise(angle1: number, angle2: number, angle3: number): void;\r
    /** 更新数据信息 */\r
    updateDataInfo(): void;\r
    /** 获取圆弧线中点坐标 */\r
    getArcMidPoint(): three.Vector3;\r
    moveGripPointsAt(index: number, offset: THREE.Vector3): boolean;\r
}

declare class Mx2PointArc extends Mx3PointArc {\r
    static cmd: string;\r
    static draw: () => Promise<void>;\r
    static isRegister: boolean;\r
    getTypeName(): string;\r
    create(): Mx2PointArc;\r
    get startPoint(): three.Vector3;\r
    set startPoint(v: three.Vector3);\r
    get endPoint(): three.Vector3;\r
    set endPoint(v: three.Vector3);\r
}

declare function drawMxDbCoord(): void;

/**\r
 * MxDbCoord 引线坐标测量\r
 */\r
declare class MxDbCoord extends MxDbEntity {\r
    static cmd: string;\r
    static draw: typeof drawMxDbCoord;\r
    /** 测量点位置 */\r
    point1: THREE.Vector3;\r
    /** 测量结果显示位置 */\r
    point2: THREE.Vector3;\r
    worldDraw(pWorldDraw: McGiWorldDraw): void;\r
    getGripPoints(): Array<THREE.Vector3>;\r
    moveGripPointsAt(index: number, offset: THREE.Vector3): boolean;\r
    dwgIn(obj: any): boolean;\r
    dwgOut(obj: any): object;\r
    create(): MxDbEntity;\r
    transformBy(mat: THREE.Matrix4): void;\r
    getTypeName(): string;\r
}

/** 绘制 MxDbLine */\r
declare function drawMxDbLine(): Promise<void>;

/**\r
 * MxDbLine 直线对象.\r
 */\r
declare class MxDbLine extends MxDbEntity {\r
    static cmd: string;\r
    static draw: typeof drawMxDbLine;\r
    /** 直线的开始点 */\r
    pt1: THREE.Vector3;\r
    /** 直线的结束点 */\r
    pt2: THREE.Vector3;\r
    getTypeName(): string;\r
    worldDraw(pWorldDraw: McGiWorldDraw): void;\r
    /** 设置的开始点 */\r
    setPoint1(pt1: THREE.Vector3): void;\r
    getPoint1(): THREE.Vector3;\r
    /** 设置的结束点 */\r
    setPoint2(pt2: THREE.Vector3): void;\r
    getPoint2(): THREE.Vector3;\r
    getGripPoints(): Array<THREE.Vector3>;\r
    moveGripPointsAt(index: number, offset: THREE.Vector3): boolean;\r
    dwgIn(obj: any): boolean;\r
    dwgOut(obj: any): object;\r
    create(): MxDbEntity;\r
    getGeomExtents(): THREE.Box3 | null;\r
    /**\r
     * 返回曲线长度.\r
     * @returns number\r
     */\r
    getGetLength(): number;\r
}

declare function drawMxDbRect(): Promise<void>;

/**\r
 * MxRectEntity 矩形对象.\r
 */\r
declare class MxDbRect extends MxDbEntity {\r
    static cmd: string;\r
    static draw: typeof drawMxDbRect;\r
    private cornerRadius;\r
    /**\r
     * pt1: 构成矩形的第一个点\r
     * */\r
    pt1: THREE.Vector3;\r
    /**\r
     * pt1: 构成矩形的第二个点(对角点)\r
     * */\r
    pt2: THREE.Vector3;\r
    /**\r
     * 是否需要颜色填充.\r
     * */\r
    isSolidColorFill: boolean;\r
    /**\r
     * fillImageParam 填充背景图片的参数设置(如果使用了滤镜则部分参数功能失效)\r
     * */\r
    private fillImageParam;\r
    /**\r
     * 设置滤镜对象{@link MxFilters} 默认为undefined | null 则不使用该滤镜效果\r
     * */\r
    private filter;\r
    /**\r
     * fillImageSrc(优先级低于fillColor属性) 填充背景图片的地址\r
     * */\r
    private fillImageSrc;\r
    private isLoadMaterialFromPath;\r
    private material;\r
    worldDraw(pWorldDraw: McGiWorldDraw): void;\r
    getGripPoints(): Array<THREE.Vector3>;\r
    moveGripPointsAt(index: number, offset: THREE.Vector3): boolean;\r
    dwgIn(obj: any): boolean;\r
    dwgOut(obj: any): object;\r
    create(): MxDbRect;\r
    transformBy(mat: THREE.Matrix4): void;\r
    /**\r
     * setRadius 设置圆角 圆角的半径  如[3, 2, 1, 4]分别对应左上角圆角半径3  右上角2  右下角1 左下角4\r
     * @param { number | number[] } radius 圆角半径 为数组时[3, 2, 1, 4]分别对应左上角圆角半径3  右上角2  右下角1 左下角4； 或者直接设置半径值 则四个角统一半径\r
     * */\r
    setRadius(radius: number | number[], isScreenCoord?: boolean): void;\r
    getTypeName(): string;\r
    /** 获取当前滤镜对象 {@link MxFilters} */\r
    getFilter(): MxFilters | undefined | null;\r
    /** 设置当前滤镜对象\r
     * @param filter {@link MxFilters}\r
     *  */\r
    setFilter(filter: MxFilters | undefined | null): void;\r
    /** 设置填充的背景图片路径 */\r
    setFillImagePath(sPath: string | undefined): void;\r
    /** 获取填充的背景图片路径 */\r
    getFillImagePath(): string | undefined;\r
}

declare function drawMxDbAlignedDimension(): MxDbAlignedDimension;

/** @module MxDbAlignedDimension*/\r
\r
/**\r
 * MxDbAlignedDimension 尺寸标注\r
 */\r
declare class MxDbAlignedDimension extends MxDbEntity {\r
    static cmd: string;\r
    static draw: typeof drawMxDbAlignedDimension;\r
    /**\r
     * MxDbAlignedDimension\r
     * 尺寸标注\r
     * @param options.points 提供两个向量测量尺寸\r
     * @param options.fontColor 字体颜色\r
     * @example \`\`\`typescript\r
     * const draw = Mx.MxFun.getCurrentDraw();\r
     * const v3 = new THREE.Vector3()\r
     * const points = [v3 , v3.clone().add(new THREE.Vector3(8880, 0, 0))]\r
     * const colors = ['#F00880','#00ff1a']\r
     * draw.addMxEntity(\r
     *   new Mx.MxDbAlignedDimension({ points })\r
     *   .setColor(colors)\r
     *   .setLineWidth(6)\r
     * )\r
     * \`\`\`\r
     **/\r
    constructor(options?: {\r
        /** [point1, point2] 两个向量位置 */\r
        points?: THREE.Vector3[];\r
        /** 字体颜色 */\r
        fontColor?: MxColorType;\r
    });\r
    point1: THREE.Vector3;\r
    point2: THREE.Vector3;\r
    fontColor: UnstableColor;\r
    /**\r
     * 设置两个点位置向量\r
     * @param { THREE.Vector3[] } points [THREE.Vector3, THREE.Vector3]\r
     */\r
    setPoints(points: THREE.Vector3[]): void;\r
    getTypeName(): string;\r
    private getDirection;\r
    /**\r
     * 获取尺寸距离\r
     * */\r
    getDimText(): string;\r
    worldDraw(pWorldDraw: McGiWorldDraw): void;\r
    /**\r
     * 设置测量的开始点\r
     * @parma pt1 three.js坐标点位\r
     * */\r
    setPoint1(pt1: THREE.Vector3): void;\r
    /**\r
     * 设置测量的结束点\r
     * @parma pt1 three.js坐标点位\r
     * */\r
    setPoint2(pt2: THREE.Vector3): void;\r
    setColor(color: UnstableColor | UnstableColor[]): this;\r
    getGripPoints(): Array<THREE.Vector3>;\r
    moveGripPointsAt(index: number, offset: THREE.Vector3): boolean;\r
    dwgIn(obj: any): boolean;\r
    dwgOut(obj: any): object;\r
    create(): MxDbAlignedDimension;\r
}

declare function drawMxDbArea(): void;

/**\r
 * MxDbArea 任意不规则多边形\r
 * */\r
declare class MxDbArea extends MxDbEntity {\r
    static cmd: string;\r
    static draw: typeof drawMxDbArea;\r
    /** 构成多边形的顶点集合 */\r
    points: Array<THREE.Vector3>;\r
    isFill: boolean;\r
    fillColor: MxColorType;\r
    fillOpacity: number;\r
    getTypeName(): string;\r
    create(): MxDbEntity;\r
    /** 在worldDraw动态绘制时会计算当前顶点坐标集合的面积,并显示渲染计算后的计算结果\r
     * @returns 返回的计算后的面积结果\r
     *  */\r
    getDimText(): string;\r
    worldDraw(pWorldDraw: McGiWorldDraw): void;\r
    getGripPoints(): Array<THREE.Vector3>;\r
    moveGripPointsAt(index: number, offset: THREE.Vector3): boolean;\r
    dwgIn(obj: any): boolean;\r
    dwgOut(obj: any): object;\r
    /**\r
     * 添加构成多边形的点\r
     * @param pt 位置坐标\r
     *  */\r
    addPoint(pt: THREE.Vector3): void;\r
    /**\r
     * 获取构成多边形的顶点集合\r
     *  */\r
    getPoints(): Array<THREE.Vector3>;\r
    /**\r
     * 清空构成多边形的顶点集合\r
     *  */\r
    clearPoint(): void;\r
}

declare function drawMxDbLeadTag(): Promise<void>;

/**\r
 * MxDbLeadTag 引出标注\r
 * */\r
declare class MxDbLeadTag extends MxDbEntity {\r
    static cmd: string;\r
    static draw: typeof drawMxDbLeadTag;\r
    point: three.Vector3;\r
    leadLen: number;\r
    text: string;\r
    textHeight: number;\r
    getTypeName(): string;\r
    private createDots;\r
    worldDraw(pWorldDraw: McGiWorldDraw): void;\r
    getGripPoints(): THREE.Vector3[];\r
    onViewChange(): boolean;\r
    moveGripPointsAt(index: number, offset: THREE.Vector3): boolean;\r
    dwgIn(obj: any): boolean;\r
    dwgOut(obj: any): any;\r
}

declare function drawMxDbAnyLine(): void;

/** @module MxDbAnyLine*/\r
\r
/**\r
 * MxDbAnyLine\r
 * 任意线段\r
 */\r
declare class MxDbAnyLine extends MxDbEntity {\r
    static cmd: string;\r
    static draw: typeof drawMxDbAnyLine;\r
    /** 构成线段的顶点坐标集合 */\r
    points: THREE.Vector3[];\r
    getTypeName(): string;\r
    create(): MxDbAnyLine;\r
    worldDraw(pWorldDraw: McGiWorldDraw): void;\r
    /** 设置线段points\r
     * @param points 构成线段的多个点\r
     */\r
    setPoints(points: THREE.Vector3[]): this;\r
    /** 获取线段的包围盒的中心点坐标 */\r
    getCenter(): THREE.Vector3;\r
    getGripPoints(): THREE.Vector3[];\r
    moveGripPointsAt(index: number, offset: THREE.Vector3): boolean;\r
    dwgIn(obj: any): boolean;\r
    dwgOut(obj: any): object;\r
}

declare function drawMxDbCloudLine(): void;

/**\r
 * MxDbCloudLine 对象. 绘制任意的云线\r
 */\r
declare class MxDbCloudLine extends MxDbEntity {\r
    static isRegister: boolean;\r
    static cmd: string;\r
    static draw: typeof drawMxDbCloudLine;\r
    private points;\r
    private radius;\r
    private cachePoint;\r
    constructor();\r
    getTypeName(): string;\r
    create(): MxDbEntity;\r
    /** 设置构成云线的每个圆弧半径长度\r
     * @parma radius 圆弧半径\r
     *  */\r
    setRadius(radius: number): void;\r
    /**\r
     * 获取云线的圆弧半径\r
     * */\r
    getRadius(): number;\r
    getCachePoint(): THREE.Vector3[] | null;\r
    private clacNewArcDiameterPoint;\r
    private createCloudArcCurvePoints;\r
    /**\r
     * 添加云线的顶点坐标, 该顶点坐标会根据上一个构成云线的点计算出下一个云线的顶点位置\r
     * @param pt 坐标位置\r
     * @param isAddToDrawGeometry 如果为true 将立即添加顶点并绘制下一个圆弧\r
     * */\r
    addPoint(pt: THREE.Vector3, isAddToDrawGeometry?: boolean): void;\r
    /**\r
     * 绘制两点之间的云线(与addPoint不同的是它不是只绘制一个半圆弧,而是绘制两点之间相连接的所有半圆弧)\r
     * @param pt1 云线开始点\r
     * @param pt2 云线结束点\r
     * */\r
    addLine(pt1: THREE.Vector3, pt2: THREE.Vector3): three.Vector3;\r
    /** 重新计算云线的的所有顶点坐标, 如绘制完云线后 重新设置了圆弧半径, 在worldDraw动态绘制时会调用该方法 */\r
    reCalculateDrawGeometryPoint(): THREE.Vector3[] | null;\r
    worldDraw(pWorldDraw: McGiWorldDraw): void;\r
    /**\r
     * 获取云线包围盒的中心点\r
     * */\r
    getCenter(): THREE.Vector3;\r
    getGripPoints(): THREE.Vector3[];\r
    moveGripPointsAt(index: number, offset: THREE.Vector3): boolean;\r
    dwgIn(obj: any): boolean;\r
    dwgOut(obj: any): object;\r
}

declare function drawMxDbRegularPolygon(): void;

declare class MxDbRegularPolygon extends MxDbShape {\r
    static cmd: string;\r
    static draw: typeof drawMxDbRegularPolygon;\r
    /** 正多边形的中心点位置 */\r
    centerPoint: three.Vector3;\r
    /** 正多边形两条边之间的交点位置 */\r
    otherPoint: three.Vector3;\r
    /** 正多边形边的数量 */\r
    sidesNumber: number;\r
    getTypeName(): string;\r
    /**\r
     * MxDbRegularPolygon 正多边形\r
     */\r
    constructor();\r
    worldDraw(pWorldDraw: McGiWorldDraw): void;\r
    getGripPoints(): THREE.Vector3[];\r
    moveGripPointsAt(index: number, offset: THREE.Vector3): boolean;\r
}

declare function drawMxDbLeadComment(): void;

/**\r
 * MxDbLeadComment 引线文字标注\r
 * */\r
declare class MxDbLeadComment extends MxDbEntity {\r
    static cmd: string;\r
    static draw: typeof drawMxDbLeadComment;\r
    /** 标注点 */\r
    point1: THREE.Vector3;\r
    /** 文字显示位置 */\r
    point2: THREE.Vector3;\r
    /** 文字内容 */\r
    text: string;\r
    /** 文字高度 */\r
    textHeight: number;\r
    textWidth: number;\r
    /** 文字大小，取屏幕像素绘图单位。 */\r
    fixedSize: boolean;\r
    constructor();\r
    getTypeName(): string;\r
    create(): MxDbEntity;\r
    worldDraw(pWorldDraw: McGiWorldDraw): void;\r
    getGripPoints(): Array<THREE.Vector3>;\r
    moveGripPointsAt(index: number, offset: THREE.Vector3): boolean;\r
    dwgIn(obj: any): boolean;\r
    dwgOut(obj: any): object;\r
    protected onViewChange(): boolean;\r
}

declare function drawMxDbRectBoxLeadComment(): void;

/**\r
 * MxDbRectBoxLeadComment 引线审图标注\r
 * */\r
declare class MxDbRectBoxLeadComment extends MxDbEntity {\r
    static cmd: string;\r
    static draw: typeof drawMxDbRectBoxLeadComment;\r
    /** 云线矩形的对角点1 */\r
    point1: THREE.Vector3;\r
    /** 云线矩形的对角点2 */\r
    point2: THREE.Vector3;\r
    /** 要标注的内容位置 */\r
    point3: THREE.Vector3;\r
    /** 要显示的文字内容*/\r
    text: string;\r
    /**文字高度*/\r
    textHeight: number;\r
    /** 云线的半圆弧半径 */\r
    radius: number;\r
    textWidth: number;\r
    /** 文字大小，取屏幕像素绘图单位。 */\r
    fixedSize: boolean;\r
    constructor();\r
    getTypeName(): string;\r
    create(): MxDbEntity;\r
    getCloudLine(): any;\r
    worldDraw(pWorldDraw: McGiWorldDraw): void;\r
    getGripPoints(): Array<THREE.Vector3>;\r
    moveGripPointsAt(index: number, offset: THREE.Vector3): boolean;\r
    dwgIn(obj: any): boolean;\r
    dwgOut(obj: any): object;\r
    protected onViewChange(): boolean;\r
}

declare function drawMxDbEllipse(): void;

/** 通过两个构成矩形的点绘制椭圆形 */\r
declare class MxDbEllipse extends MxDbEllipseShape {\r
    static cmd: string;\r
    static draw: typeof drawMxDbEllipse;\r
    constructor();\r
    getTypeName(): string;\r
    create(): MxDbEllipse;\r
    /** 开始点 */\r
    point1: three.Vector3;\r
    setPoint1(point1: THREE.Vector3): this;\r
    /** 结束点 */\r
    point2: three.Vector3;\r
    setPoint2(point2: THREE.Vector3): this;\r
    isClosedToCenter: boolean;\r
    closed: boolean;\r
    worldDraw(pWorldDraw: McGiWorldDraw): void;\r
    getGripPoints(): THREE.Vector3[];\r
    moveGripPointsAt(index: number, offset: THREE.Vector3): boolean;\r
}

declare function drawMxDbText(): Promise<void>;

type SpriteTextColorType = THREE.Color | string | number | CanvasGradient | CanvasPattern | undefined;\r
type SpriteTextObj = SpriteText;\r
type TextFontWeight = 'normal' | 'bold' | 'lighter' | 'bolder' | 'inherit' | number;\r
type TextFontStyle = 'normal' | 'italic' | 'oblique';\r
declare class SpriteText extends THREE.Sprite {\r
    constructor(options?: SpriteTextOptions);\r
    text: string;\r
    textHeight: number;\r
    color: SpriteTextColorType;\r
    backgroundColor: SpriteTextColorType;\r
    padding: number | number[];\r
    borderWidth: number;\r
    borderRadius: number;\r
    borderColor: SpriteTextColorType;\r
    fontFace: string;\r
    fontSize: number;\r
    fontWeight: TextFontWeight;\r
    strokeWidth: number;\r
    strokeColor: SpriteTextColorType;\r
    textAlign: CanvasTextAlign;\r
    textShadowBlur: number;\r
    textShadowColor: string | number | THREE.Color | undefined;\r
    textShadowOffsetX: number;\r
    textShadowOffsetY: number;\r
    angle: number;\r
    textScale: number;\r
    underline: boolean;\r
    fontStyle: TextFontStyle;\r
    fontVariant: string;\r
    _genCanvas(): void;\r
    dispose(): void;\r
}\r
interface SpriteTextOptions {\r
    text?: string;\r
    textHeight?: number;\r
    color?: SpriteTextColorType;\r
    backgroundColor?: SpriteTextColorType | undefined;\r
    padding?: number | number[];\r
    borderWidth?: number;\r
    borderRadius?: number;\r
    borderColor?: SpriteTextColorType;\r
    strokeWidth?: number;\r
    strokeColor?: SpriteTextColorType;\r
    fontFace?: string;\r
    fontSize?: number;\r
    fontWeight?: TextFontWeight;\r
    textAlign?: CanvasTextAlign;\r
    textBaseline?: CanvasTextBaseline;\r
    textShadowBlur?: number;\r
    textShadowColor?: string | number | THREE.Color | undefined;\r
    textShadowOffsetX?: number;\r
    textShadowOffsetY?: number;\r
    angle?: number;\r
    scale?: number;\r
    underline?: boolean;\r
    fontStyle?: TextFontStyle;\r
    fontVariant?: string;\r
}

/**\r
 * MxDbText 绘制文字\r
 * @describe 适用于标签标注类型的文字(永远面向相机的平面)\r
 * @example\r
 * \`\`\` js\r
 *  obj = new MxDbText()\r
    obj.rxInit()\r
    obj.position = new THREE.Vector3()\r
    obj.backgroundColor = '#ff0000'\r
    obj.padding = 5\r
    obj.strokeWidth = 3\r
    obj.strokeColor = "#3a8bd2"\r
    obj.borderColor = "#ff00ff"\r
    obj.borderWidth = 2\r
    obj.borderRadius = 2\r
    obj.opacity = 0.8\r
    obj.text  = 'This is\\nsome multi-line\\ntext'\r
    obj.height = 100000\r
    obj.color = "#fff000"\r
 * \`\`\`\r
 */\r
declare class MxDbText extends MxDbEntity {\r
    static cmd: string;\r
    static draw: typeof drawMxDbText;\r
    /** 文字所在位置*/\r
    position: three.Vector3;\r
    setPosition(position: THREE.Vector3): this;\r
    private _text;\r
    /** 文字内容*/\r
    get text(): string;\r
    set text(text: string);\r
    setText(text: string): this;\r
    private _height;\r
    /** 文字高度*/\r
    get height(): number;\r
    set height(height: number);\r
    setHeight(height: number): this;\r
    private _backgroundColor;\r
    /** 背景颜色 */\r
    get backgroundColor(): SpriteTextColorType;\r
    set backgroundColor(color: SpriteTextColorType);\r
    setBackgroundColor(backgroundColor: SpriteTextColorType): this;\r
    private _padding;\r
    /** 填充范围 */\r
    get padding(): number | number[];\r
    set padding(padding: number | number[]);\r
    setPadding(padding: number | number[]): this;\r
    private _borderWidth;\r
    /** 边框宽度 */\r
    get borderWidth(): number;\r
    set borderWidth(borderWidth: number);\r
    setBorderWidth(borderWidth: number): this;\r
    private _borderRadius;\r
    /** 边框圆角 */\r
    get borderRadius(): number;\r
    set borderRadius(borderRadius: number);\r
    setBorderRadius(borderRadius: number): this;\r
    private _borderColor;\r
    /** 边框颜色 */\r
    get borderColor(): SpriteTextColorType;\r
    set borderColor(borderColor: SpriteTextColorType);\r
    setBorderColor(borderColor: SpriteTextColorType): this;\r
    private _fontFace;\r
    /** 客户端字体 */\r
    get fontFace(): string;\r
    set fontFace(fontFace: string);\r
    setFontFace(fontFace: string): this;\r
    private _fontSize;\r
    /** 字体大小 */\r
    get fontSize(): number;\r
    set fontSize(fontSize: number);\r
    setFontSize(fontSize: number): this;\r
    private _fontWeight;\r
    /** 字体粗细 */\r
    get fontWeight(): TextFontWeight;\r
    set fontWeight(fontWeight: TextFontWeight);\r
    setFontWeight(fontWeight: TextFontWeight): this;\r
    private _strokeWidth;\r
    /** 笔划宽度 */\r
    get strokeWidth(): number;\r
    set strokeWidth(strokeWidth: number);\r
    setStrokeWidth(strokeWidth: number): this;\r
    private _strokeColor;\r
    /** 笔划颜色 */\r
    get strokeColor(): SpriteTextColorType;\r
    set strokeColor(strokeColor: SpriteTextColorType);\r
    setStrokeColor(strokeColor: SpriteTextColorType): this;\r
    private _textAlign;\r
    /** 文本格式 */\r
    get textAlign(): CanvasTextAlign;\r
    set textAlign(textAlign: CanvasTextAlign);\r
    setTextAlign(textAlign: CanvasTextAlign): this;\r
    private _textShadowBlur;\r
    /** 文字阴影模糊程度 */\r
    get textShadowBlur(): number;\r
    set textShadowBlur(textShadowBlur: number);\r
    setTextShadowBlur(textShadowBlur: number): this;\r
    private _textShadowColor;\r
    /**  文字阴影颜色*/\r
    get textShadowColor(): string | number | Color | undefined;\r
    set textShadowColor(textShadowColor: string | number | Color | undefined);\r
    setTextShadowColor(textShadowColor: string | number | Color | undefined): this;\r
    private _textShadowOffsetX;\r
    /** 文字阴影X轴偏移量 */\r
    get textShadowOffsetX(): number;\r
    set textShadowOffsetX(textShadowOffsetX: number);\r
    setTextShadowOffsetX(textShadowOffsetX: number): this;\r
    private _textShadowOffsetY;\r
    /** 文字阴影X轴偏移量 */\r
    get textShadowOffsetY(): number;\r
    set textShadowOffsetY(textShadowOffsetY: number);\r
    setTextShadowOffsetY(textShadowOffsetY: number): this;\r
    private _angle;\r
    /** 角度*/\r
    get angle(): number;\r
    set angle(angle: number);\r
    setAngle(angle: number): this;\r
    private _scale;\r
    /** 缩放倍数 */\r
    get scale(): number;\r
    set scale(scale: number);\r
    setScale(scale: number): this;\r
    private _underline;\r
    /** 下划线 */\r
    get underline(): boolean;\r
    set underline(underline: boolean);\r
    setUnderline(underline: boolean): void;\r
    /** SpriteText实例 */\r
    protected spriteText: SpriteTextObj;\r
    getTypeName(): string;\r
    worldDraw(pWorldDraw: McGiWorldDraw): void;\r
    /**创建精灵文字对象 */\r
    protected createSpriteText(): void;\r
    getGripPoints(): THREE.Vector3[];\r
    moveGripPointsAt(index: number, offset: THREE.Vector3): boolean;\r
    create(): MxDbEntity;\r
    dwgIn(obj: any): boolean;\r
    dwgOut(obj: any): object;\r
    getGeomExtents(): THREE.Box3 | null;\r
    erase(): boolean;\r
}

/**\r
 * MxDbHatch 填充对象\r
 */\r
declare class MxDbHatch extends MxDbEntity {\r
    points: THREE.Vector3[];\r
    worldDraw(pWorldDraw: McGiWorldDraw): void;\r
    getTypeName(): string;\r
    moveGripPointsAt(index: number, offset: THREE.Vector3): boolean;\r
    /** 设置顶点坐标 */\r
    setPoints(points: THREE.Vector3[]): void;\r
    getGripPoints(): THREE.Vector3[];\r
    dwgIn(obj: any): boolean;\r
    dwgOut(obj: any): any;\r
}

/***\r
 * 渐变线段\r
 * @augments MxDbEntity\r
 * */\r
declare class MxDbGradientLine extends MxDbEntity {\r
    /** 点集合 */\r
    points: THREE.Vector3[];\r
    /** 渐变色 */\r
    colors: (THREE.Color | string | number)[];\r
    /**\r
     * 定义线两端的样式\r
     *  @access public\r
     * */\r
    linecap: 'butt' | 'round' | 'square';\r
    /**\r
     * 定义线连接节点的样式\r
     * @access public\r
     * */\r
    linejoin: 'round' | 'bevel' | 'miter';\r
    /**\r
     * 定义线形状是否闭合，从而创建多边形或斑点\r
     * @access public\r
     * */\r
    closed: boolean;\r
    /**\r
     * 曲线的类型: chordal: 弦线、 centripetal： 向心线、 catmullrom: Catmull-Rom曲线 默认：centripetal\r
     * @access public\r
     * */\r
    curveType: 'chordal' | 'centripetal' | 'catmullrom';\r
    /**\r
     *  当curveType为catmullrom时，定义catmullrom的张力。 张力: 数值越大，曲线越弯曲。值为0将导致没有插值。默认值是0\r
     *  @access public\r
     *\r
     */\r
    tension: number;\r
    /**\r
     * 如果没有提供张力，但bezierType赋值为'quadratic'| 'cubic'，则使用点集合中的点绘制一条bezier线  默认: undefined\r
     * @summary quadratic: 三维二次贝塞尔曲线 => 起点 – 中间的控制点 – 终点\r
     * @summary cubic: 三维三次贝塞尔曲线 => 起点v – 第一个控制点 – 第二个控制点 – 终点\r
     */\r
    bezierType: 'quadratic' | 'cubic' | undefined;\r
    protected curve?: THREE.CatmullRomCurve3 | THREE.CurvePath<THREE.Vector3>;\r
    create(): MxDbGradientLine;\r
    getTypeName(): string;\r
    setPoints(points: THREE.Vector3[]): this;\r
    setColors(colors: (THREE.Color | string | number)[]): this;\r
    addColor(color: THREE.Color): this;\r
    setLinecap(linecap: 'butt' | 'round' | 'square'): void;\r
    setClosed(closed: boolean): void;\r
    setCurveType(curveType: 'chordal' | 'centripetal' | 'catmullrom'): void;\r
    setTension(tension: number): void;\r
    setBezierType(bezierType: 'quadratic' | 'cubic'): void;\r
    worldDraw(pWorldDraw: McGiWorldDraw): void;\r
    getGripPoints(): THREE.Vector3[];\r
    getPoints(): three.Vector3[];\r
    moveGripPointsAt(index: number, offset: THREE.Vector3): boolean;\r
    move(index: number, offset: THREE.Vector3): this;\r
    dwgIn(obj: any): boolean;\r
    dwgOut(obj: any): object;\r
}

declare function drawMxDbEllipseArc(): void;

/**\r
 * 根据中心点、椭圆开始点和结束点确定椭圆弧\r
 *  */\r
declare class MxDbEllipseArc extends MxDbEllipseShape {\r
    static cmd: string;\r
    static draw: typeof drawMxDbEllipseArc;\r
    getTypeName(): string;\r
    constructor();\r
    /** 椭圆弧决定开始点 控制x轴半径和开始角度 */\r
    startPoint: THREE.Vector3;\r
    setStartPoint(startPoint: THREE.Vector3): this;\r
    /** 椭圆弧决定结束点 控制y轴半径和结束角度*/\r
    endPoint: THREE.Vector3;\r
    setEndPoint(endPoint: THREE.Vector3): this;\r
    worldDraw(pWorldDraw: McGiWorldDraw): void;\r
    getGripPoints(): three.Vector3[];\r
    moveGripPointsAt(index: number, offset: THREE.Vector3): boolean;\r
}

declare function drawMxDbCircleArc(): void;

declare class MxDbCircleArc extends MxDbCircleShape {\r
    static cmd: string;\r
    static draw: typeof drawMxDbCircleArc;\r
    /** 根据圆心、起始点、结束点位置动态绘制圆弧 **/\r
    constructor();\r
    getTypeName(): string;\r
    /** 圆弧开始点 设置开始点将自动计算 radius、startAngle、endAngle */\r
    startPoint: THREE.Vector3;\r
    setStartPoint(startPoint: THREE.Vector3): this;\r
    /** 圆弧结束点 设置结束点将自动计算 radius、startAngle、endAngle */\r
    endPoint: THREE.Vector3;\r
    setEndPoint(endPoint: THREE.Vector3): this;\r
    worldDraw(pWorldDraw: McGiWorldDraw): void;\r
    computePointAngle(point: THREE.Vector3): number;\r
    getGripPoints(): three.Vector3[];\r
    moveGripPointsAt(index: number, offset: THREE.Vector3): boolean;\r
}

declare class MxDbArcShape extends MxDbCircleArc {\r
    /** 环形 */\r
    constructor();\r
    getTypeName(): string;\r
    center: three.Vector3;\r
    innerRadius: number;\r
    outerRadius: number;\r
    worldDraw(pWorldDraw: McGiWorldDraw): void;\r
    drawArcShape(pWorldDraw: McGiWorldDraw): void;\r
    getGripPoints(): THREE.Vector3[];\r
    moveGripPointsAt(index: number, offset: THREE.Vector3): boolean;\r
}

declare function drawMxDbArcShape(): void;

declare class MxDbArcShapeDraw extends MxDbArcShape {\r
    static isRegister: boolean;\r
    static cmd: string;\r
    static draw: typeof drawMxDbArcShape;\r
    getTypeName(): string;\r
    /** 绘制弧形 */\r
    constructor();\r
    outerRadiusPoint: three.Vector3;\r
    interRadiusPoint: three.Vector3;\r
    worldDraw(pWorldDraw: McGiWorldDraw): void;\r
    getGripPoints(): THREE.Vector3[];\r
    moveGripPointsAt(index: number, offset: THREE.Vector3): boolean;\r
}

declare function drawMxDbRingShape(): void;

/** 环形 */\r
declare class MxDbRingShape extends MxDbArcShape {\r
    static isRegister: boolean;\r
    static cmd: string;\r
    static draw: typeof drawMxDbRingShape;\r
    getTypeName(): string;\r
    worldDraw(pWorldDraw: McGiWorldDraw): void;\r
}

declare function drawMxDbStarShape(): void;

/** 星形 */\r
declare class MxDbStarShape extends MxDbShape {\r
    static cmd: string;\r
    static draw: typeof drawMxDbStarShape;\r
    getTypeName(): string;\r
    constructor();\r
    center: three.Vector3;\r
    /** 顶点数量 */\r
    numPoints: number;\r
    /** 内部半径 */\r
    innerRadius: number;\r
    /** 外部半径 */\r
    outerRadius: number;\r
    worldDraw(pWorldDraw: McGiWorldDraw): void;\r
    getGripPoints(): THREE.Vector3[];\r
    moveGripPointsAt(index: number, offset: THREE.Vector3): boolean;\r
}

/** 等边多边形 */\r
declare class MxDbRegularPolygonShape extends MxDbShape {\r
    center: three.Vector3;\r
    sidesNumber: number;\r
    radius: number;\r
    getTypeName(): string;\r
    constructor();\r
    worldDraw(pWorldDraw: McGiWorldDraw): void;\r
    _drawPolygonShape(pWorldDraw: McGiWorldDraw): void;\r
    _getPoints(): {\r
        x: number;\r
        y: number;\r
    }[];\r
    getGripPoints(): THREE.Vector3[];\r
    moveGripPointsAt(index: number, offset: THREE.Vector3): boolean;\r
}

declare function drawMxDbArrow(): void;

declare class MxDbArrow extends MxDbShape {\r
    static cmd: string;\r
    static draw: typeof drawMxDbArrow;\r
    /** 箭头图形  */\r
    constructor();\r
    /** 开始是否为尖角 */\r
    isSharpCorner: boolean;\r
    /** 内部偏移量 */\r
    innerOffset: number;\r
    /** 外部偏移量 */\r
    outerOffset: number;\r
    /** 顶部偏移量 */\r
    topOffset: number;\r
    startPoint: three.Vector3;\r
    endPoint: three.Vector3;\r
    worldDraw(pWorldDraw: McGiWorldDraw): void;\r
    getArrowVertex(p1: THREE.Vector3, p2: THREE.Vector3, isSharpCorner?: boolean): three.Vector3[] | undefined;\r
    getGripPoints(): THREE.Vector3[];\r
    moveGripPointsAt(index: number, offset: THREE.Vector3): boolean;\r
    getCornerRadiusPoints(points: THREE.Vector3[]): three.Vector3[];\r
}

/** 线形状 */\r
declare class MxDbLineShape extends MxDbShape {\r
    points: THREE.Vector3[];\r
    setPoints(points: THREE.Vector3[]): this;\r
    addPoint(point: THREE.Vector3): this;\r
    removePoint(index: number): this;\r
    constructor();\r
    getTypeName(): string;\r
    worldDraw(pWorldDraw: McGiWorldDraw): void;\r
    getGripPoints(): Array<THREE.Vector3>;\r
    moveGripPointsAt(index: number, offset: THREE.Vector3): boolean;\r
    /** 获取包围盒 */\r
    getGeomExtents(): THREE.Box3 | null;\r
    /**\r
     * 返回曲线长度.\r
     * @returns number\r
     */\r
    getGetLength(): number;\r
}

/** 图层管理 */\r
declare class Layer extends RenderOrderNode<{}, MxDbEntity> {\r
    isLayer: boolean;\r
    name: string;\r
    constructor(name?: string);\r
    get visible(): boolean;\r
    set visible(val: boolean);\r
    /** 设置层是否可见 */\r
    setVisible(val: boolean): void;\r
    private _database;\r
    private getDatabase;\r
    private getLayer;\r
    private getLayerMap;\r
    private getEntityMap;\r
    private getCurrentName;\r
    private callLayerContextFun;\r
    /** 默认的层名称 **/\r
    getRootLayerName: () => string;\r
    /*** 获取该数据库下的所有层的名称 */\r
    getNames(): string[];\r
    /*** 获取该层包含的所有MxDbEntity */\r
    getAllEntity(): MxDbEntity[];\r
    /** 将MxDbEntity添加到层\r
     * @param entityList 可以是id也可以是MxDbEntity实例\r
     * @example\r
     * \`\`\`\r
     * new Layer().add(new MxDbLine(), new MxDbLine(), 3)\r
     * \`\`\`\r
     */\r
    add(...entityList: MxDbEntity[]): this;\r
    /*** 移除该层的MxDbEntity,  MxDbEntity回退到默认层*/\r
    remove(...entityList: MxDbEntity[]): this;\r
}

declare function drawMxDbSplineCurve(): Promise<void>;

declare class MxDbSplineCurve extends MxDbEntity {\r
    static draw: typeof drawMxDbSplineCurve;\r
    static cmd: string;\r
    /** 圆中心点 */\r
    points: THREE.Vector3[];\r
    /** 闭合 */\r
    closed: boolean;\r
    /** 曲线的张力 */\r
    tension: number;\r
    /** 曲线类型： centripetal、chordal和catmullrom */\r
    curveType: string;\r
    worldDraw(pWorldDraw: McGiWorldDraw): void;\r
    getGripPoints(): THREE.Vector3[];\r
    moveGripPointsAt(index: number, offset: THREE.Vector3): boolean;\r
    create(): MxDbEntity;\r
    dwgIn(obj: any): boolean;\r
    dwgOut(obj: any): object;\r
    getTypeName(): string;\r
}

/** @module MrxDbgUiPrDistClass */\r
\r
/**\r
 * MrxDbgUiPrDist 用于构建一个取点对象\r
 * @example \`\`\`typescript\r
 *  new Mx.MrxDbgUiPrPoint()\r
 * \`\`\`\r
 */\r
declare class MrxDbgUiPrDist extends MrxDbgUiPrBase {\r
    constructor();\r
    /**\r
     * 得以获取的距离\r
     */\r
    value(): number;\r
    /**\r
     * 得到动态拖动的基点\r
     * @returns 基点 THREE.THREE.Vector3\r
     */\r
    basePt(): THREE.Vector3;\r
    /**\r
     * 设置动态拖动的基点\r
     * @param basePt 基点 THREE.THREE.Vector3\r
     * @returns 点对象 DWG图纸坐标\r
     */\r
    setBasePt(basePt: THREE.Vector3): void;\r
    /**\r
     * 设置使用动态拖动的基点\r
     * @param useIt 是否设置 默认为false\r
     * @returns void\r
     */\r
    setUseBasePt(useIt: boolean): void;\r
    /**\r
     * 开始动态拖动\r
     * @param retcall  回调参数status {@link MrxDbgUiPrBaseReturn | 状态值}\r
     * @returns void\r
     */\r
    go(retcall?: (status: MrxDbgUiPrBaseReturn) => void): Promise<number | null>;\r
}

/** @module MrxDbgUiPrIntClass */\r
\r
/**\r
 * MrxDbgUiPrInt 交互输入一个整数\r
 * @example \`\`\`typescript\r
 *  new Mx.MrxDbgUiPrInt()\r
 * \`\`\`\r
 */\r
declare class MrxDbgUiPrInt extends MrxDbgUiPrBase {\r
    constructor();\r
    /**\r
     * 得以获取的距离\r
     */\r
    value(): number;\r
    /**\r
     * 开始动态拖动\r
     * @param retcall  回调参数status {@link MrxDbgUiPrBaseReturn | 状态值}\r
     * @returns void\r
     */\r
    go(retcall?: (status: MrxDbgUiPrBaseReturn) => void): Promise<number | null>;\r
}

/** @module MrxDbgUiPrStringClass */\r
\r
/**\r
 * MrxDbgUiPrString 交互输入字符串\r
 * @example \`\`\`typescript\r
 *  new Mx.MrxDbgUiPrString()\r
 * \`\`\`\r
 */\r
declare class MrxDbgUiPrString extends MrxDbgUiPrBase {\r
    constructor();\r
    /**\r
     * 得以获取的距离\r
     */\r
    value(): string;\r
    /**\r
     * 开始动态拖动\r
     * @param retcall  回调参数status {@link MrxDbgUiPrBaseReturn | 状态值}\r
     * @returns void\r
     */\r
    go(retcall?: (status: MrxDbgUiPrBaseReturn) => void): Promise<string | null>;\r
}

/** @module MrxDbgUiPrKeyWordClass */\r
\r
/**\r
 * MrxDbgUiPrKeyWord 交互输入关键值选项\r
 * @example \`\`\`typescript\r
 *  new Mx.MrxDbgUiPrKeyWord()\r
 * \`\`\`\r
 */\r
declare class MrxDbgUiPrKeyWord extends MrxDbgUiPrBase {\r
    constructor();\r
    /**\r
     * 开始动态拖动\r
     * @param retcall  回调参数status {@link MrxDbgUiPrBaseReturn | 状态值}\r
     * @returns void\r
     */\r
    go(retcall?: (status: MrxDbgUiPrBaseReturn) => void): Promise<string | null>;\r
}

/** @module MrxDbgUiPrAngleClass */\r
\r
/**\r
 * MrxDbgUiPrAngle 交互输入一个角度对象\r
 * @example \`\`\`typescript\r
 *  new Mx.MrxDbgUiPrAngle()\r
 * \`\`\`\r
 */\r
declare class MrxDbgUiPrAngle extends MrxDbgUiPrBase {\r
    constructor();\r
    /**\r
     * 得以获取的距离\r
     */\r
    value(): number;\r
    /**\r
     * 得到动态拖动的基点\r
     * @returns 基点 THREE.THREE.Vector3\r
     */\r
    basePt(): THREE.Vector3;\r
    /**\r
     * 设置动态拖动的基点\r
     * @param basePt 基点 THREE.THREE.Vector3\r
     * @returns 点对象 DWG图纸坐标\r
     */\r
    setBasePt(basePt: THREE.Vector3): void;\r
    /**\r
     * 设置使用动态拖动的基点\r
     * @param useIt 是否设置 默认为false\r
     * @returns void\r
     */\r
    setUseBasePt(useIt: boolean): void;\r
    /**\r
     * 开始动态拖动\r
     * @param retcall  回调参数status {@link MrxDbgUiPrBaseReturn | 状态值}\r
     * @returns void\r
     */\r
    go(retcall?: (status: MrxDbgUiPrBaseReturn) => void): Promise<number | null>;\r
}

declare const Mx_loadCoreCode: typeof loadCoreCode;
declare const Mx_useCanvasResizeListener: typeof useCanvasResizeListener;
declare const Mx_store: typeof store;
declare const Mx_MxFun: typeof MxFun;
declare const Mx_MxThreeJS: typeof MxThreeJS;
declare const Mx_MxType: typeof MxType;
declare const Mx_Mxassembly: typeof Mxassembly;
declare const Mx_McGeTool: typeof McGeTool;
declare const Mx_MrxDbgUtils: typeof MrxDbgUtils;
declare const Mx_MxPaintBrush: typeof MxPaintBrush;
type Mx_MrxDbgUiPrPoint = MrxDbgUiPrPoint;
declare const Mx_MrxDbgUiPrPoint: typeof MrxDbgUiPrPoint;
type Mx_McEdGetPointWorldDrawObject = McEdGetPointWorldDrawObject;
declare const Mx_McEdGetPointWorldDrawObject: typeof McEdGetPointWorldDrawObject;
type Mx_MrxDbgUiPrBaseReturn = MrxDbgUiPrBaseReturn;
declare const Mx_MrxDbgUiPrBaseReturn: typeof MrxDbgUiPrBaseReturn;
type Mx_MxDbEntity = MxDbEntity;
declare const Mx_MxDbEntity: typeof MxDbEntity;
type Mx_MxDbImage = MxDbImage;
declare const Mx_MxDbImage: typeof MxDbImage;
type Mx_MxDbSVG = MxDbSVG;
declare const Mx_MxDbSVG: typeof MxDbSVG;
type Mx_MxDbSVGText = MxDbSVGText;
declare const Mx_MxDbSVGText: typeof MxDbSVGText;
type Mx_MxDbPolyline = MxDbPolyline;
declare const Mx_MxDbPolyline: typeof MxDbPolyline;
type Mx_MxDb2LineAngularDimension = MxDb2LineAngularDimension;
declare const Mx_MxDb2LineAngularDimension: typeof MxDb2LineAngularDimension;
type Mx_Mx3PointArc = Mx3PointArc;
declare const Mx_Mx3PointArc: typeof Mx3PointArc;
type Mx_Mx2PointArc = Mx2PointArc;
declare const Mx_Mx2PointArc: typeof Mx2PointArc;
type Mx_MxDbCoord = MxDbCoord;
declare const Mx_MxDbCoord: typeof MxDbCoord;
type Mx_MxDbLine = MxDbLine;
declare const Mx_MxDbLine: typeof MxDbLine;
type Mx_MxDbRect = MxDbRect;
declare const Mx_MxDbRect: typeof MxDbRect;
type Mx_MxDbAlignedDimension = MxDbAlignedDimension;
declare const Mx_MxDbAlignedDimension: typeof MxDbAlignedDimension;
type Mx_MxFilters = MxFilters;
declare const Mx_MxFilters: typeof MxFilters;
type Mx_McGiWorldDraw = McGiWorldDraw;
type Mx_McGiWorldDrawType = McGiWorldDrawType;
declare const Mx_McGiWorldDrawType: typeof McGiWorldDrawType;
type Mx_MxDbArea = MxDbArea;
declare const Mx_MxDbArea: typeof MxDbArea;
type Mx_MxDbLeadTag = MxDbLeadTag;
declare const Mx_MxDbLeadTag: typeof MxDbLeadTag;
type Mx_MxDbAnyLine = MxDbAnyLine;
declare const Mx_MxDbAnyLine: typeof MxDbAnyLine;
type Mx_MxDbCloudLine = MxDbCloudLine;
declare const Mx_MxDbCloudLine: typeof MxDbCloudLine;
type Mx_MxDbRegularPolygon = MxDbRegularPolygon;
declare const Mx_MxDbRegularPolygon: typeof MxDbRegularPolygon;
type Mx_McGePoint3d = McGePoint3d;
type Mx_McGePoint3dArray = McGePoint3dArray;
type Mx_MxDbLeadComment = MxDbLeadComment;
declare const Mx_MxDbLeadComment: typeof MxDbLeadComment;
type Mx_MxDbRectBoxLeadComment = MxDbRectBoxLeadComment;
declare const Mx_MxDbRectBoxLeadComment: typeof MxDbRectBoxLeadComment;
type Mx_MxDbEllipse = MxDbEllipse;
declare const Mx_MxDbEllipse: typeof MxDbEllipse;
type Mx_MxDbText = MxDbText;
declare const Mx_MxDbText: typeof MxDbText;
type Mx_MxDrawObject = MxDrawObject;
declare const Mx_MxDrawObject: typeof MxDrawObject;
type Mx_MxDbHatch = MxDbHatch;
declare const Mx_MxDbHatch: typeof MxDbHatch;
type Mx_MxDbLayerTableRecord = MxDbLayerTableRecord;
type Mx_MxDbDatabase = MxDbDatabase;
declare const Mx_MxDbDatabase: typeof MxDbDatabase;
type Mx_MxDbGroup = MxDbGroup;
type Mx_MxDbGradientLine = MxDbGradientLine;
declare const Mx_MxDbGradientLine: typeof MxDbGradientLine;
type Mx_MxDbShape = MxDbShape;
declare const Mx_MxDbShape: typeof MxDbShape;
type Mx_MxDbEllipseShape = MxDbEllipseShape;
declare const Mx_MxDbEllipseShape: typeof MxDbEllipseShape;
type Mx_MxDbEllipseArc = MxDbEllipseArc;
declare const Mx_MxDbEllipseArc: typeof MxDbEllipseArc;
type Mx_MxDbCircleShape = MxDbCircleShape;
declare const Mx_MxDbCircleShape: typeof MxDbCircleShape;
type Mx_MxDbCircleArc = MxDbCircleArc;
declare const Mx_MxDbCircleArc: typeof MxDbCircleArc;
type Mx_MxDbArcShapeDraw = MxDbArcShapeDraw;
declare const Mx_MxDbArcShapeDraw: typeof MxDbArcShapeDraw;
type Mx_MxDbRingShape = MxDbRingShape;
declare const Mx_MxDbRingShape: typeof MxDbRingShape;
type Mx_MxDbStarShape = MxDbStarShape;
declare const Mx_MxDbStarShape: typeof MxDbStarShape;
type Mx_MxDbRegularPolygonShape = MxDbRegularPolygonShape;
declare const Mx_MxDbRegularPolygonShape: typeof MxDbRegularPolygonShape;
type Mx_MxDbArrow = MxDbArrow;
declare const Mx_MxDbArrow: typeof MxDbArrow;
type Mx_MxDbLineShape = MxDbLineShape;
declare const Mx_MxDbLineShape: typeof MxDbLineShape;
type Mx_Layer = Layer;
declare const Mx_Layer: typeof Layer;
type Mx_MxDbSplineCurve = MxDbSplineCurve;
declare const Mx_MxDbSplineCurve: typeof MxDbSplineCurve;
type Mx_MrxDbgUiPrBase = MrxDbgUiPrBase;
declare const Mx_MrxDbgUiPrBase: typeof MrxDbgUiPrBase;
type Mx_MxCursorType = MxCursorType;
declare const Mx_MxCursorType: typeof MxCursorType;
type Mx_DetailedResult = DetailedResult;
declare const Mx_DetailedResult: typeof DetailedResult;
type Mx_DynamicInputType = DynamicInputType;
declare const Mx_DynamicInputType: typeof DynamicInputType;
type Mx_UserInputControls = UserInputControls;
declare const Mx_UserInputControls: typeof UserInputControls;
type Mx_MrxDbgUiPrDist = MrxDbgUiPrDist;
declare const Mx_MrxDbgUiPrDist: typeof MrxDbgUiPrDist;
type Mx_MrxDbgUiPrInt = MrxDbgUiPrInt;
declare const Mx_MrxDbgUiPrInt: typeof MrxDbgUiPrInt;
type Mx_MrxDbgUiPrString = MrxDbgUiPrString;
declare const Mx_MrxDbgUiPrString: typeof MrxDbgUiPrString;
type Mx_MrxDbgUiPrKeyWord = MrxDbgUiPrKeyWord;
declare const Mx_MrxDbgUiPrKeyWord: typeof MrxDbgUiPrKeyWord;
type Mx_MrxDbgUiPrAngle = MrxDbgUiPrAngle;
declare const Mx_MrxDbgUiPrAngle: typeof MrxDbgUiPrAngle;
declare namespace Mx {
  export {
    Mx_loadCoreCode as loadCoreCode,
    Mx_useCanvasResizeListener as useCanvasResizeListener,
    Mx_store as store,
    Mx_MxFun as MxFun,
    Mx_MxThreeJS as MxThreeJS,
    Mx_MxType as MxType,
    Mx_Mxassembly as Mxassembly,
    Mx_McGeTool as McGeTool,
    Mx_MrxDbgUtils as MrxDbgUtils,
    Mx_MxPaintBrush as MxPaintBrush,
    Mx_MrxDbgUiPrPoint as MrxDbgUiPrPoint,
    Mx_McEdGetPointWorldDrawObject as McEdGetPointWorldDrawObject,
    Mx_MrxDbgUiPrBaseReturn as MrxDbgUiPrBaseReturn,
    Mx_MxDbEntity as MxDbEntity,
    Mx_MxDbImage as MxDbImage,
    Mx_MxDbSVG as MxDbSVG,
    Mx_MxDbSVGText as MxDbSVGText,
    Mx_MxDbPolyline as MxDbPolyline,
    Mx_MxDb2LineAngularDimension as MxDb2LineAngularDimension,
    Mx_Mx3PointArc as Mx3PointArc,
    Mx_Mx2PointArc as Mx2PointArc,
    Mx_MxDbCoord as MxDbCoord,
    Mx_MxDbLine as MxDbLine,
    Mx_MxDbRect as MxDbRect,
    Mx_MxDbAlignedDimension as MxDbAlignedDimension,
    Mx_MxFilters as MxFilters,
    Mx_McGiWorldDraw as McGiWorldDraw,
    Mx_McGiWorldDrawType as McGiWorldDrawType,
    Mx_MxDbArea as MxDbArea,
    Mx_MxDbLeadTag as MxDbLeadTag,
    Mx_MxDbAnyLine as MxDbAnyLine,
    Mx_MxDbCloudLine as MxDbCloudLine,
    Mx_MxDbRegularPolygon as MxDbRegularPolygon,
    Mx_McGePoint3d as McGePoint3d,
    Mx_McGePoint3dArray as McGePoint3dArray,
    Mx_MxDbLeadComment as MxDbLeadComment,
    Mx_MxDbRectBoxLeadComment as MxDbRectBoxLeadComment,
    Mx_MxDbEllipse as MxDbEllipse,
    Mx_MxDbText as MxDbText,
    Mx_MxDrawObject as MxDrawObject,
    Mx_MxDbHatch as MxDbHatch,
    Mx_MxDbLayerTableRecord as MxDbLayerTableRecord,
    Mx_MxDbDatabase as MxDbDatabase,
    Mx_MxDbGroup as MxDbGroup,
    Mx_MxDbGradientLine as MxDbGradientLine,
    Mx_MxDbShape as MxDbShape,
    Mx_MxDbEllipseShape as MxDbEllipseShape,
    Mx_MxDbEllipseArc as MxDbEllipseArc,
    Mx_MxDbCircleShape as MxDbCircleShape,
    Mx_MxDbCircleArc as MxDbCircleArc,
    Mx_MxDbArcShapeDraw as MxDbArcShapeDraw,
    Mx_MxDbRingShape as MxDbRingShape,
    Mx_MxDbStarShape as MxDbStarShape,
    Mx_MxDbRegularPolygonShape as MxDbRegularPolygonShape,
    Mx_MxDbArrow as MxDbArrow,
    Mx_MxDbLineShape as MxDbLineShape,
    Mx_Layer as Layer,
    Mx_MxDbSplineCurve as MxDbSplineCurve,
    Mx_MrxDbgUiPrBase as MrxDbgUiPrBase,
    Mx_MxCursorType as MxCursorType,
    Mx_DetailedResult as DetailedResult,
    Mx_DynamicInputType as DynamicInputType,
    Mx_UserInputControls as UserInputControls,
    Mx_MrxDbgUiPrDist as MrxDbgUiPrDist,
    Mx_MrxDbgUiPrInt as MrxDbgUiPrInt,
    Mx_MrxDbgUiPrString as MrxDbgUiPrString,
    Mx_MrxDbgUiPrKeyWord as MrxDbgUiPrKeyWord,
    Mx_MrxDbgUiPrAngle as MrxDbgUiPrAngle,
  };
}

declare global {\r
    type THREE = typeof THREE;\r
    interface Window {\r
        THREE: typeof THREE;\r
    }\r
}

export { DetailedResult, DynamicInputType, Layer, McEdGetPointWorldDrawObject, McGePoint3d, McGePoint3dArray, McGeTool, McGiWorldDraw, McGiWorldDrawType, MrxDbgUiPrAngle, MrxDbgUiPrBase, MrxDbgUiPrBaseReturn, MrxDbgUiPrDist, MrxDbgUiPrInt, MrxDbgUiPrKeyWord, MrxDbgUiPrPoint, MrxDbgUiPrString, MrxDbgUtils, Mx2PointArc, Mx3PointArc, MxCursorType, MxDb2LineAngularDimension, MxDbAlignedDimension, MxDbAnyLine, MxDbArcShapeDraw, MxDbArea, MxDbArrow, MxDbCircleArc, MxDbCircleShape, MxDbCloudLine, MxDbCoord, MxDbDatabase, MxDbEllipse, MxDbEllipseArc, MxDbEllipseShape, MxDbEntity, MxDbGradientLine, MxDbGroup, MxDbHatch, MxDbImage, MxDbLayerTableRecord, MxDbLeadComment, MxDbLeadTag, MxDbLine, MxDbLineShape, MxDbPolyline, MxDbRect, MxDbRectBoxLeadComment, MxDbRegularPolygon, MxDbRegularPolygonShape, MxDbRingShape, MxDbSVG, MxDbSVGText, MxDbShape, MxDbSplineCurve, MxDbStarShape, MxDbText, MxDrawObject, MxFilters, MxFun, MxPaintBrush, MxThreeJS, MxType, Mxassembly, UserInputControls, Mx as default, loadCoreCode, store, useCanvasResizeListener };
`,$=`// Generated by dts-bundle-generator v6.13.0

import { DetailedResult, DynamicInputType, McEdGetPointWorldDrawObject, MrxDbgUiPrBaseReturn, MrxDbgUiPrPoint, MxCursorType, MxDbEntity, MxDrawObject } from 'mxdraw';
import * as THREE from 'three';

/**
 * 将数据进行 Base64 编码
 * @param str 目标数据
 * @return Base64 编码
*/
export declare function b64Encode(str: string): string;
/**
 * 将 Base64 编码的字符串解码为原始数据
 * @param str Base64 编码
 * @returns 原始数据
 */
export declare function b64Decode(str: string): string;
export type FileTypes = {
	description?: string;
	accept: {
		[type: string]: string[];
	};
}[];
/**
 *  文件下载保存（另存为只支持 Chrome86 或 Edge 86 以及 Opera 72）兼容 iE10等较低版本的浏览器
 */
export declare function saveAsFileDialog({ blob, filename, types }: {
	blob: Blob;
	filename?: string;
	types?: FileTypes;
}): Promise<(FileSystemFileHandle & {
	createWritable: () => Promise<WritableStreamDefaultWriter<any>>;
}) | undefined>;
/**
 * 在浏览器中下载一个文件
 * @param blob Blob 对象，它包含了要下载的文件的数据
 * @param filename 将要保存的文件的文件名
 */
export declare function downloadFile(blob: any, filename: string): void;
/**
 * 从指定的 URL 下载文件到用户的计算机中
 * @param url 下载文件的 URL 地址
 * @param filename 将要保存的文件的文件名
 */
export declare function downloadFileFromUrl(url: string, filename: string): void;
/**
 * 从指定URL中获取文件json字符串
 * @param url 文件的 URL 地址
 * @returns json字符串
 */
export declare const getJsonFromUrl: (url: string) => Promise<any>;
/**
 * 从指定URL中获取文件
 * @param url 文件的 URL 地址
 * @returns 目标文件
 */
export declare const getFileFromUrl: (url: string) => Promise<Response | undefined>;
/** 接收输入的提示字符串
 * @param strId 字符串的ID 起一个符合定义的ID名称
 * @param str 提示字符串
 *  */
export declare function _ML_String(strId: string, str: string): string;
/**
 * 检查一个数值是否接近于零的
 * @param val 数值
 * @returns 布尔值
 */
export declare function IsZero(val: number): boolean;
/**
 * 将内存中的数据发送到指定的 URL，以实现文件上传功能
 * @param memoryData 内存中数据的对象或者数据结构
 * @param url 数据将要发送到的目标 URL 地址
 * @param filename 上传的文件的文件名
 * @param retCall 回调函数
 * @param param 可选的额外参数，可以用来传递额外的数据或配置信息给上传函数
 */
export declare function postMemoryFile(memoryData: any, url: string, filename: string, retCall: (code: number, message: string) => void, param?: any): void;
/**
 * 从 IndexedDB（Indexed Database，索引数据库）中获取文件，并将其上传到指定的 URL
 * @param filekey 从 IndexedDB 中获取的文件的键（key）
 * @param url 数据将要发送到的目标 URL 地址，用于上传文件
 * @param retCall 回调函数
 * @param param 可选的额外参数，可以用来传递额外的数据或配置信息给上传函数
 */
export declare function postEmscriptenIndexedDBFile(filekey: string, url: string, retCall: (code: number, message: string) => void, param?: any): void;
export declare const MxTools: {
	b64Encode: typeof b64Encode;
	b64Decode: typeof b64Decode;
	saveAsFileDialog: typeof saveAsFileDialog;
	downloadFile: typeof downloadFile;
	downloadFileFromUrl: typeof downloadFileFromUrl;
	getJsonFromUrl: (url: string) => Promise<any>;
	getFileFromUrl: (url: string) => Promise<Response | undefined>;
	_ML_String: typeof _ML_String;
	IsZero: typeof IsZero;
	postEmscriptenIndexedDBFile: typeof postEmscriptenIndexedDBFile;
	postMemoryFile: typeof postMemoryFile;
};
/**
 * 表示一个 Rx 对象的基类。
 */
export declare class McRxObject {
	/**
	 * 内部实现对象。
	 */
	imp: any;
	/**
	 * 构造函数。
	 * @param imp 内部实现对象。
	 */
	constructor(imp?: any);
	protected constructor_MxCADResbuf(imp: any): void;
	/**
	 * 获取内部实现对象。
	 * @returns 内部实现对象。
	 */
	getImp(): any;
	/**
	 * 初始化临时对象。
	 * @param imp 内部实现对象。
	 */
	initTempObject(imp: any): void;
	/**
	 * 获取对象名称。
	 */
	get objectName(): string;
	/**
	 * 获取 DXF 代码 0 的值。
	 */
	get dxf0(): string;
	/**
	 * 获取 JSON 格式的字符串。
	 * @returns JSON 格式的字符串。
	 */
	getJson(): string;
	/**
	 * 设置 JSON 格式的字符串。
	 * @param str JSON 格式的字符串。
	 * @returns 是否设置成功。
	 */
	setJson(str: string): boolean;
	/** 判断对象类型
	 * @param sObjectName 类型名
	 * @returns 返回对象是否是目标类型
	 */
	isKindOf(sObjectName: string): boolean;
	/** 判断是否为空对象 */
	isNull(): any;
}
/**
 * 枚举类型 McObjectIdType 表示对象的类型。
 *
 * @remarks
 * - kMxCAD：  CAD 对象。
 * - kMxDraw： 绘图对象。
 * - kInvalid：无效对象。
 */
export declare enum McObjectIdType {
	/** CAD 对象 */
	kMxCAD = 0,
	/** 绘图对象 */
	kMxDraw = 1,
	/** 无效对象 */
	kInvalid = 2
}
/**
 * McObjectId类表示一个模型对象的唯一标识符。
 */
export declare class McObjectId {
	/** 对象ID */
	id: number;
	/** 对象类型 */
	type: McObjectIdType;
	/**
	 * 创建一个McObjectId实例。
	 * @param id 对象的唯一标识符。
	 * @param type 对象的类型。
	 */
	constructor(id?: number, type?: McObjectIdType);
	/**
	* id是否有效.
	*/
	isValid(): boolean;
	/**
	 * id是否为NULL.
	 */
	isNull(): boolean;
	/**
	* id是指向的以像，是否是删除状态.
	*/
	isErase(): boolean;
	/**
	 * 删除对象。
	 * @param isErase 是否删除
	 */
	erase(isErase?: boolean): void;
	/**
	 * 返回MxCAD McDbObject对象。
	 */
	getMcDbObject(): McDbObject | null;
	/**
	* 判断一个对象的类型
	* @param className 类型名
	* @example
	* \`\`\`ts
	* import { McDbLine, McGePoint3d, MxCpp } from 'mxcad';
	*
	* const line = new McDbLine(new McGePoint3d(0,0,0),new McGePoint3d(20,20,0) );
	* const objectId = MxCpp.getCurrentCAD().drawEntity(line);
	* console.log(objectId.isKindOf('McDbLine'))
	* \`\`\`
	*/
	isKindOf(className: string): boolean;
	/**
  * 返回MxCAD McDbEntity 对象。
  */
	getMcDbEntity(): McDbEntity | null;
	/**
	* 返回MxCAD McDbCurve 对象。
	*/
	getMcDbCurve(): McDbCurve | null;
	/**
  * 返回MxCAD McDbBlockTableRecord 对象。
  */
	getMcDbBlockTableRecord(): McDbBlockTableRecord | null;
	/**
  * 返回MxCAD McDbLayerTableRecord 对象。
  */
	getMcDbLayerTableRecord(): McDbLayerTableRecord | null;
	/**
 * 返回MxCAD McDbLinetypeTableRecord 对象。
 */
	getMcDbLinetypeTableRecord(): McDbLinetypeTableRecord | null;
	/**
* 返回MxCAD McDbTextStyleTableRecord 对象。
*/
	getMcDbTextStyleTableRecord(): McDbTextStyleTableRecord | null;
	/**
	* 返回MxCAD McDbDimension 对象。
	*/
	getMcDbDimension(): McDbDimension | null;
	/** 同步自定义实体 */
	syncMcDbCustomEntity(): void;
	/** 获取自定义实体 */
	getMcDbCustomEntity(): McDbCustomEntity | null;
	/** 克隆对象 */
	clone(): McDbObject | null;
	/**
	 * 返回id指向的对象名称.
	 */
	getObjectName(): string;
	/**
	 * 返回MxDraw对象。
	 */
	getMxDbEntity(): MxDbEntity | null;
	/** 获取栅格图像信息 */
	getMcDbRasterImageDef(): McDbRasterImageDef | null;
	/** 获取数据库中的字典信息 */
	getMcDbDictionary(): McDbDictionary | null;
	/** 获取扩展记录信息 */
	getMcDbXrecord(): McDbXrecord | null;
}
/**
 * 表示一个数据库对象，并提供了数据库中的对象的一些基本操作函数，如内存的分配，对象删除，对象Id，归档等操作。
 */
export declare class McDbObject extends McRxObject {
	/**
	 * 构造函数。
	 * @param imp 内部实现对象。
	 */
	constructor(imp?: any);
	/**
	 * 获取对象 ID。
	 * @returns 对象 ID。
	 */
	getObjectID(): McObjectId;
	/**
	 * 删除对象。
	 * @returns 是否删除成功。
	 */
	erase(): boolean;
	/**
	 * 对象是否已经删除
	 */
	isErased(): boolean;
	/**
	 * 反删除对象。
	 */
	unErase(): boolean;
	/**
	 * 克隆对象。
	 * @returns 克隆出的对象。
	 */
	clone(): McDbObject | null;
	/**
	* 得到对象句柄
	*/
	getHandle(): string;
	/**
	* 得到对象所在的数据库
	*/
	getDatabase(): McDbDatabase;
	/**
	 * 得到对象拥用者的id
	 */
	getOwnerID(): number;
	/**
	 * 得到对象的扩展字典数据.
	 */
	getExtensionDictionary(): McDbDictionary;
	/**
	 * 是否有扩展字典数据.
	 */
	isHaveExtensionDictionary(): boolean;
	/**
	 * 创建对象的扩展字典数据.
	 */
	createExtensionDictionary(): boolean;
	/** 获取对象的索引ID */
	getDatabaseIndexId(): number;
	/** 移动对象的控制点
	 * @param iIndex 索引
	 * @param dXOffset X轴偏移量
	 * @param dYOffset Y轴偏移量
	 * @param dZOffset Z轴偏移量
	*/
	moveGripPointsAt(iIndex: number, dXOffset: number, dYOffset: number, dZOffset: number): any;
	/** 获取对象的控制点 */
	getGripPoints(): McGePoint3dArray;
	/** 与对象相关的临时关系数 */
	tempRelationObject(): number;
	/** 释放临时关系对象 */
	freeTempRelationObject(): void;
}
/** McDbObject 的一个数组，该数组存储了多个 McDbObject 对象的引用。 */
export declare class McDbObjectArray {
	/** 对象数组 */
	aryVal: McDbObject[];
	/**
	 * 构造函数。
	 * @param imp 内部实现对象。
	 */
	constructor(imp?: any);
	/** 遍历对象 */
	forEach(call: (val: McDbObject, index: number) => void): void;
	/** 数组长度 */
	length(): number;
	/** 清空数组 */
	empty(): boolean;
}
/**
 * 表示三维点的对象。
 */
export declare class McGePoint3d {
	/**
	 * 坐标系的原点
	 * @example
	 * \`\`\`ts
	 * const origin = McGePoint3d.kOrigin;
	 * \`\`\`
	 * */
	static kOrigin: McGePoint3d;
	/** 内部实现对象 */
	imp: any;
	/**
	 * 构造函数。
	 * @param dX X 坐标。
	 * @param dY Y 坐标。
	 * @param dZ Z 坐标。
	 * @example
	 * \`\`\`ts
	 * import { McGePoint3d } from 'mxcad'
	 *
	 * const point = new McGePoint3d(20,10,0);
	 * \`\`\`
	 */
	constructor(dX?: number | object, dY?: number, dZ?: number);
	/**
	 * 将当前对象的坐标信息转换为 THREE.Vector3 类的实例
	 * @return THREE.Vector3实例对象
	 * @example
	 * \`\`\`ts
	 * import { McGePoint3d } from "mxcad";
	 * const pt = new McGePoint3d(20,10,0);
	 * const pt_vec = pt.toVector3();
	 * \`\`\`
	*/
	toVector3(): THREE.Vector3;
	/** 将three.js 的向量设置成点
	 * @example
	 * \`\`\`ts
	 * import { McGePoint3d } from "mxcad";
	 * import THREE from "three";
	 *
	 * const pt_vec = new THREE.Vector3(20,50,0);
	 * const pt = pt_vec.setFromVector3();
	 * \`\`\`
	*/
	setFromVector3(val: THREE.Vector3): this;
	/**
	 * 复制点对象的值
	 * @param val 点对象
	 * @return 复制后的点对象
	 * @example
	 * \`\`\`ts
	 * import { McGePoint3d } from "mxcad"
	 *
	 * const point1 = new McGePoint3d(20,10,0);
	 * const point2 = new McGePoint3d();
	 * point2.copy(point1);
	 * \`\`\`
	 */
	copy(val: McGePoint3d): this;
	/**
	 * 使用矩阵变换该点
	 * @param leftSide 变换矩阵
	 * @returns 变换后的点对象
	 * @example
	 * \`\`\`ts
	 * import { McGePoint3d, McGeVector3d, McGeMatrix3d } from "mxcad"
	 *
	 * const point = new McGePoint3d(20,10,0);
	   let matrix = new McGeMatrix3d();
	   matrix.setToTranslation(new McGeVector3d(10,10,0));//平移
	   point.transformBy(matrix);
	 * \`\`\`
	 */
	transformBy(leftSide: McGeMatrix3d): this;
	/**
	* 计算点加上向量后的新位置
	* @param vec 向量
	* @return 计算后的点对象
	* @example
	* \`\`\`ts
	* import { McGePoint3d, McGeVector3d } from "mxcad";
	*
	* const pt1 = new McGePoint3d(20,10,0);
	* const pt = pt1.clone().addvec(new McGeVector3d(10,10,0))
	* \`\`\`
	*/
	addvec(vec: McGeVector3d): this;
	/**
	 * 计算点加上向量后的新位置
	 * @param vec 向量
	 * @return 计算后的点对象
	 */
	av(vec: McGeVector3d): this;
	/**
	 * 计算点减去向量后的新位置
	 * @param vec 向量
	 * @return 计算后的点对象
	 * @example
	 * \`\`\`ts
	 * import { McGePoint3d, McGeVector3d } from "mxcad";
	 *
	 * const pt1 = new McGePoint3d(20,10,0);
	 * const pt = pt1.clone().subvec(new McGeVector3d(10,10,0));
	 * \`\`\`
	 */
	subvec(vec: McGeVector3d): this;
	/**
	 * 计算点减去向量后的新位置
	 * @param vec 向量
	 * @return 计算后的点对象
	 */
	sv(vec: McGeVector3d): this;
	/**
	 * 返回两点相减后得到的一个新的向量
	 * @param pt 三维点对象
	 * @return 三维点向量
	 * @example
	 * \`\`\`ts
	 * import { McGePoint3d } from "mxcad";
	 *
	 * const pt1 = new McGePoint3d(20,10,0);
	 * const pt2 = new McGePoint3d(50,20,0);
	 * const vec = pt1.sub(pt2);
	 * \`\`\`
	 */
	sub(pt: McGePoint3d): McGeVector3d;
	/**
	 * 计算两点距离
	 * @param pnt 三维点对象
	 * @return 两点距离
	 * @example
	 * \`\`\`ts
	 * import { McGePoint3d } from "mxcad";
	 *
	 * const pt1 = new McGePoint3d(20,10,0);
	 * const pt2 = new McGePoint3d(50,20,0);
	 * const dist = pt1.distanceTo(pt2);
	 * \`\`\`
	 */
	distanceTo(pnt: McGePoint3d): number;
	/**
	* 判断两个点是否相等
	* @param pnt 三维点对象
	* @return 布尔值
	* @example
	* \`\`\`ts
	* import { McGePoint3d } from "mxcad"
	*
	* const pt1 = new McGePoint3d(10,20,0);
	* const pt2 = new McGePoint3d(10,10,0);
	* const res = pt1.isEqualTo(pt2);
	* console.log(res)//输出false
	* \`\`\`
	*/
	isEqualTo(pnt: McGePoint3d): boolean;
	/**
	 * 刻隆一个点对象
	 * @return 三维点对象
	 * @example
	 * \`\`\`ts
	 * import { McGePoint3d } from "mxcad"
	 *
	 * const pt1 = new McGePoint3d(10,10,0);
	 * const pt2 = pt1.clone();
	 * \`\`\`
	 */
	clone(): McGePoint3d;
	/**
	 * 刻隆一个点对象
	 * @return 三维点对象
	 */
	c(): McGePoint3d;
	/**
	 * 获取或设置 X 坐标。
	 * @param val X轴坐标值
	 * @example
	 * \`\`\`ts
	 * import { McGePoint3d } from "mxcad'
	 *
	 * const point = new McGePoint3d();
	 * point.x = 10;
	 * console.log(point.x)//输出10
	 * \`\`\`
	 */
	get x(): number;
	set x(val: number);
	/**
	 * 获取或设置 Y 坐标。
	 * @param val Y轴坐标值
	 * @example
	 * \`\`\`ts
	 * import { McGePoint3d } from "mxcad'
	 *
	 * const point = new McGePoint3d();
	 * point.y = 10;
	 * console.log(point.y)//输出10
	 * \`\`\`
	 */
	get y(): number;
	set y(val: number);
	/**
	 *获取或设置 Z 坐标。
	 * @param val Z轴坐标值
	 * @example
	 * \`\`\`ts
	 * import { McGePoint3d } from "mxcad'
	 *
	 * const point = new McGePoint3d();
	 * point.z = 10;
	 * console.log(point.z)//输出10
	 * \`\`\`
	 */
	get z(): number;
	set z(val: number);
}
/**
 * 表示三维向量的对象。
 * @example
 * \`\`\`ts
 * //求失量与X轴的夹角
 * const angle1 = vetT.angleTo2(McGeVector3d.McGeVector3d.kXAxis ,McGeVector3d.kNegateZAxis)
 * \`\`\`
 * \`\`\`ts
 * //求出vetFx逆时针到vetT的角度
 * const angle2 = vetFx.angleTo2(vetT, McGeVector3d.kZAxis)
 * \`\`\`
 * \`\`\`ts
 * //判断向量vetT在向量VetFX的左边,还是在右边的调用
 * const angle3 = vetFx.angleTo2(vetT, McGeVector3d.kZAxis);
   if(angle >= 0.0 && angle <= PI ){
	   //向量vetT在vetFX的左边.
	} else {
	  //向量vetT在vetFX的右边.
	}
   // 或
   if (vetFX.dotProduct(vetT.perpVector()) < 0){
	 //  vetFX在vetT的左边。
   }
 * \`\`\`
 */
export declare class McGeVector3d {
	/**
	 * X轴单位向量, 指向正 X 轴方向
	 * @example
	 * \`\`\`ts
	 * import { McGeVector3d } from "mxcad"
	 *
	 * const x_vec = McGeVector3d.kXAxis;
	 * \`\`\`
	 * */
	static kXAxis: McGeVector3d;
	/**
	 * Y轴单位向量, 指向正 Y 轴方向
	 * @example
	 * \`\`\`ts
	 * import { McGeVector3d } from "mxcad"
	 *
	 * const y_vec = McGeVector3d.kYAxis;
	 * \`\`\`
	 */
	static kYAxis: McGeVector3d;
	/**
	* Z轴单位向量, 指向正 Z 轴方向
	* @example
	* \`\`\`ts
	* import { McGeVector3d } from "mxcad"
	*
	* const y_vec = McGeVector3d.kZAxis;
	* \`\`\`
	 */
	static kZAxis: McGeVector3d;
	/**
	 * Z轴单位向量, 指向负 Z 轴方向
	 * @example
	 * \`\`\`ts
	 * import { McGeVector3d } from "mxcad"
	 *
	 * const zNegate_vec = McGeVector3d.kNegateZAxis;
	 * \`\`\`
	 */
	static kNegateZAxis: McGeVector3d;
	/** 内部实现对象 */
	imp: any;
	/**
	 * 构造函数。
	 * @param dX X 坐标。
	 * @param dY Y 坐标。
	 * @param dZ Z 坐标。
	 * @example
	 * \`\`\`ts
	 * import { MdGeVector3d } from "mxcad";
	 *
	 * const vec = new MdGeVector3d(20,10,0)
	 * \`\`\`
	 */
	constructor(dX?: number | object, dY?: number, dZ?: number);
	/** 转换为THREE.Vector3
	 * @example
	 * \`\`\`ts
	 * import { McGeVector3d } from "mxcad";
	 *
	 * const vec = new McGeVector3d(20,10,0);
	 * const v = vec.toVector3();
	 * \`\`\`
	 * */
	toVector3(): THREE.Vector3;
	/**
	 * 复制对象的值
	 * @param val 三维向量对象
	 * @return 复制后的三维向量对象
	 * @example
	 * \`\`\`ts
	 * import { McGeVector3d } from "mxcad"
	 *
	 * const vec1 = new McGeVector3d(20,10,0);
	 * const vec2 = new McGeVector3d();
	 * vec2.copy(vec1);
	 * \`\`\`
	 */
	copy(val: McGeVector3d): this;
	/**
	 * 刻隆一个向量对象
	 * @return 三维向量对象
	 * @example
	 * \`\`\`ts
	 * import { McGeVector3d } from "mxcad"
	 *
	 * const vec1 = new McGeVector3d(20,10,0);
	 * const vec2 = vec1.clone();
	 * \`\`\`
	 */
	clone(): McGeVector3d;
	/**
	 * 刻隆一个向量对象
	 * @return 三维向量对象
	 */
	c(): McGeVector3d;
	/** 旋转
	 * @param ang 旋转角度。
	 * @param axis 旋转轴向量
	 * @example
	 * \`\`\`ts
	 * import { McGeVector3d } from "mxcad";
	 *
	 * const vec = new McGeVector3d(20,10,0);
	 * vec.rotateBy(Math.PI * 0.5);
	 * \`\`\`
	 *  */
	rotateBy(ang: number, axis?: McGeVector3d): this;
	/**
	 * 向量取反
	 * @example
	 * \`\`\`ts
	 * import { McGeVector3d } from "mxcad";
	 *
	 * const vec = new McGeVector3d(20,10,0);
	 * vec_neg = vec.clone().negate()
	 * \`\`\`
	 * */
	negate(): this;
	/**
	 * 垂直向量
	 * @example
	 * \`\`\`ts
	 * import { McGeVector3d } from "mxcad";
	 *
	 * const vec = new McGeVector3d(20,10,0);
	 * vec_perp = vec.clone().perpVector()
	 * \`\`\`
	 * */
	perpVector(): this;
	/** 计算两向量在[0, Pi]范围内所夹的角度
	 * @example
	 * \`\`\`ts
	 * import { McGeVector3d } from "mxcad";
	 *
	 * const vec1 = new McGeVector3d(20,10,0);
	 * const vec2 = new McGeVector3d(50,0,0);
	 * const angle = vec1.angleTo1(vec2);
	 * \`\`\`
	 * */
	angleTo1(vec: McGeVector3d): number;
	/** 计算两向量在[0, 2*Pi]范围内所夹的角度
	 * @example
	 * \`\`\`ts
	 * import { McGeVector3d } from "mxcad";
	 *
	 * const vec1 = new McGeVector3d(20,10,0);
	 * const angle = vec1.angleTo2(McGeVector3d.kXAxis, McGeVector3d.kNegateZAxis);
	 * \`\`\`
	 * */
	angleTo2(vec: McGeVector3d, refVec?: McGeVector3d): number;
	/**
	 * 向量归一化操作
	 * @return 三维向量对象
	 * @example
	 * \`\`\`ts
	 * import { McGeVector3d } from "mxcad";
	 *
	 * const vec1 = new McGeVector3d(20,10,0);
	 * vec1.normalize();
	 * \`\`\`
	 * */
	normalize(): this;
	/**
	 * 获取向量长度
	 * @return 向量长度
	 * @example
	 * \`\`\`ts
	 * import { McGeVector3d } from "mxcad";
	 *
	 * const vec1 = new McGeVector3d(20,10,0);
	 * const length = vec1.length();
	 * \`\`\`
	 * */
	length(): number;
	/**
	 * 检查当前向量是否为单位长度
	 * @return 布尔值
	 * @example
	 * \`\`\`ts
	 * import { McGeVector3d } from "mxcad";
	 *
	 * const vec1 = new McGeVector3d(20,10,0);
	 * const res = vec1.isUnitLength();
	 * console.log(res)//输出false
	 * \`\`\`
	 * */
	isUnitLength(): boolean;
	/**
	 * 是否为零向量
	 * @return 布尔值
	 * @example
	 * \`\`\`ts
	 * import { McGeVector3d } from "mxcad";
	 *
	 * const vec1 = new McGeVector3d(20,10,0);
	 * const res = vec1.isZeroLength();
	 * console.log(res)//输出false
	 * \`\`\`
	 * */
	isZeroLength(): boolean;
	/**
	 * 两向量的点积
	 * @param vec 三维向量对象
	 * @return 点积结果
	 * @example
	 \`\`\`ts
	 //判断两个向量方向相同还是相反
	  const db = vec1.dotProduct(vec2);
	  if(db < 0 ){
		  //向量返向.
	  }
	 // 两个向量点乘如果等于0,表示向量垂直。
	 // 两个向量点乘如果等于1,表示向量方向完全向同。
	 // 两个向量点乘如果等于-1,表示向量方向完全反向。
	 \`\`\`
	 * */
	dotProduct(vec: McGeVector3d): number;
	/**
	 * 两向量的交叉积
	 * @return 三维向量对象
	 * @example
	 * \`\`\`ts
	 * import { McGeVector3d } from "mxcad";
	 *
	 * const vec1 = new McGeVector3d(20,10,0);
	 * const vec2 = new McGeVector3d(10,10,0);
	 * const vec = vec2.crossProduct(vec1)
	 * \`\`\`
	 * */
	crossProduct(vec: McGeVector3d): McGeVector3d;
	/**
	 * 判断比较两个向量是否相等
	 * @param vec 三维向量对象
	 * @return 布尔值
	 * \`\`\`ts
	 * import { McGeVector3d } from "mxcad";
	 *
	 * const vec1 = new McGeVector3d(20,10,0);
	 * const vec2 = new McGeVector3d(10,10,0);
	 * const res = vec1.isEqualTo(vec2)
	 * \`\`\`
	 * */
	isEqualTo(vec: McGeVector3d): boolean;
	/**
	 * 向量与某个值相乘，修改向量长度
	 * @param val 数字
	 * @return 三维向量对象
	 * @example
	 * \`\`\`ts
	 * import { McGeVector3d } from "mxcad";
	 *
	 * const vec1 = new McGeVector3d(20,10,0);
	 * const vec = vec1.clone().normalize().mult(20)
	 * \`\`\`
	 * */
	mult(val: number): this;
	/**
	 * 获取或设置向量 X 坐标。
	 * @param val x轴坐标
	 * @example
	 * \`\`\`ts
	 * import { McGeVector3d } from "mxcad";
	 *
	 * const vec1 = new McGeVector3d();
	 * vec1.x = 10;
	 * \`\`\`
	 */
	get x(): number;
	set x(val: number);
	/**
	 * 获取或设置向量 Y 坐标。
	 * @param val y轴坐标
	 * @example
	 * \`\`\`ts
	 * import { McGeVector3d } from "mxcad";
	 *
	 * const vec1 = new McGeVector3d();
	 * vec1.y = 10;
	 * \`\`\`
	 */
	get y(): number;
	set y(val: number);
	/**
	 * 获取或设置向量 Z 坐标。
	 * @param val z轴坐标
	 * @example
	 * \`\`\`ts
	 * import { McGeVector3d } from "mxcad";
	 *
	 * const vec1 = new McGeVector3d();
	 * vec1.z = 0;
	 * \`\`\`
	 */
	get z(): number;
	set z(val: number);
}
/** 表示三维矩阵对象 */
export declare class McGeMatrix3d {
	/** 乘法的单位矩阵  */
	static kIdentity: McGeMatrix3d;
	/** 内部实现对象 */
	imp: any;
	/**
	 * 构造函数。
	 * @param imp 内部实现对象
	 * @example
	 * \`\`\`ts
	 * import { McGeMatrix3d } from "mxcad"
	 *
	 * const matrix = new McGeMatrix3d()
	 * \`\`\`
	 */
	constructor(imp?: object);
	/**
	 * 复制对象的值
	 * @param val 三维矩阵对象
	 * @return 复制后的三维矩阵对象
	 * \`\`\`ts
	 * // matrix1 一个三维矩阵对象
	 * const matrix = new McGeMatrix3d();
	 * matrix.copy(matrix1)
	 * \`\`\`
	 */
	copy(val: McGeMatrix3d): this;
	/**
	 * 刻隆一个三维矩阵对象
	 * @return 三维矩阵对象
	 * @example
	 * \`\`\`ts
	 * // matrix1 一个三维矩阵对象
	 * const matrix = matrix1.clone()
	 * \`\`\`
	 */
	clone(): McGeMatrix3d;
	/**
	 * 将矩阵设置为单位矩阵。
	 * @example
	 * \`\`\`ts
	 * // matrix 表示一个三维矩阵对象
	 * matrix.setToIdentity()
	 * \`\`\`
	 */
	setToIdentity(): this;
	/**
	 * 左乘指定的矩阵。
	 * @param leftSide 左侧矩阵。
	 * @return 返回左乘后的矩阵
	 * @example
	 * \`\`\`ts
	 * // matrix1 表示一个三维矩阵对象
	 * const matrix = new McGeMatrix3d()
	 * matrix.preMultBy(matrix1);
	 * \`\`\`
	 */
	preMultBy(leftSide: McGeMatrix3d): this;
	/**
	 * 右乘指定的矩阵。
	 * @return 返回右乘后的矩阵
	 * @example
	 * \`\`\`ts
	 * // matrix1 表示一个三维矩阵对象
	 * const matrix = new McGeMatrix3d()
	 * matrix.postMultBy(matrix1);
	 * \`\`\`
	 */
	postMultBy(rightSide: McGeMatrix3d): this;
	/**
	 * 将矩阵设置为两个矩阵的乘积。
	 * @param mat1 第一个矩阵。
	 * @param mat2 第二个矩阵。
	 * @example
	 * \`\`\`ts
	 * // matrix1 matrix2 表示两个三维矩阵对象
	 * const matrix = new McGeMatrix3d()
	 * matrix.setToProduct(matrix1, matrix2);
	 * \`\`\`
	 */
	setToProduct(mat1: McGeMatrix3d, mat2: McGeMatrix3d): this;
	/**
	 * 求矩阵的逆矩阵。
	 * @example
	 * \`\`\`ts
	 * // matrix表示一个三维矩阵对象
	 * const mat_invert = matrix.clone().invert();
	 * \`\`\`
	 */
	invert(): this;
	/**
	 * 判断矩阵是否为奇异矩阵。
	 * @returns 如果是奇异矩阵返回 true，否则返回 false。
	 * @example
	 * \`\`\`ts
	 * // matrix表示一个三维矩阵对象
	 * const res = matrix.isSingular();
	 * console.log(res)
	 * \`\`\`
	 */
	isSingular(): boolean;
	/**
	 * 将矩阵转置。
	 * @example
	 * \`\`\`ts
	 * // matrix表示一个三维矩阵对象
	 * const mst_trs = matrix.clone().transposeIt();
	 * \`\`\`
	 */
	transposeIt(): this;
	/**
	 * 判断矩阵是否与指定的矩阵相等。
	 * @param mat 指定的矩阵。
	 * @returns 如果相等返回 true，否则返回 false。
	 * @example
	 * \`\`\`ts
	 * // matrix1 matrix2 表示两个三维矩阵对象
	 * const res = matrix1.isEqualTo(matrix2);
	 * console.log(res)
	 * \`\`\`
	 */
	isEqualTo(mat: McGeMatrix3d): boolean;
	/**
	 * 求矩阵的行列式。
	 * @returns 矩阵的行列式。
	 * @example
	 * \`\`\`ts
	 * // matrix 表示一个三维矩阵对象
	 * const detNum = matrix.det();
	 * console.log(detNum)
	 * \`\`\`
	 */
	det(): number;
	/**
	 * 将矩阵设置为指定的坐标系。
	 * @param origin 坐标系原点。
	 * @param xAxis X 轴向量。
	 * @param yAxis Y 轴向量。
	 * @param zAxis Z 轴向量。
	 * @example
	 * \`\`\`ts
	 * import { McGeMatrix3d , McGePoint3d, McGeVector3d} from "mxcad"
	 *
	 * const m1 = new McGeMatrix3d()
	 * m1.setCoordSystem(new McGePoint3d(), new McGeVector3d(), new McGeVector3d(), new McGeVector3d())
	 * \`\`\`
	 */
	setCoordSystem(origin: McGePoint3d, xAxis: McGeVector3d, yAxis: McGeVector3d, zAxis: McGeVector3d): this;
	/**
	 * 将矩阵设置为平移矩阵。
	 * @param vec 平移向量。
	 * @example
	 * \`\`\`ts
	 *import { McGeMatrix3d, McDbEntity } from "mxcad";
  
	  let matrix = new McGeMatrix3d();
	  const event = new McDbEntity();
	  matrix.setToTranslation(new McGeVector3d(20,10,0));//平移
	  event.transformBy(matrix);
	 * \`\`\`
	 */
	setToTranslation(vec: McGeVector3d): this;
	/**
	 * 将矩阵设置为绕指定轴旋转指定角度的矩阵。
	 * @param angle 旋转角度。
	 * @param axis 旋转轴向量。
	 * @param center 旋转中心点。
	 * @example
	 * \`\`\`ts
	 *import { McGeMatrix3d, McDbEntity } from "mxcad";
  
	  let matrix = new McGeMatrix3d();
	  const event = new McDbEntity();
	  matrix.setToRotation(Math.PI, McGeVector3d.kZAxis / 180.0, new McGeVector3d(20,10,0));//平移
	  event.transformBy(matrix);
	 * \`\`\`
	 */
	setToRotation(angle: number, axis: McGeVector3d, center: McGePoint3d): this;
	/**
	 * 将矩阵设置为缩放矩阵。
	 * @param scaleAll 缩放因子。
	 * @param center 缩放中心点。
	 * @example
	 * \`\`\`ts
	 *import { McGeMatrix3d, McDbEntity } from "mxcad";
  
	  let matrix = new McGeMatrix3d();
	  const event = new McDbEntity();
	  matrix.setToScaling(0.5, new McGeVector3d(0, 0, 0));//平移
	  event.transformBy(matrix);
	 * \`\`\`
	 */
	setToScaling(scaleAll: number, center: McGePoint3d): this;
	/**
   * 将矩阵设置为镜向矩阵
   * @example
   * \`\`\`ts
   *import { McGeMatrix3d, McDbEntity } from "mxcad";
  
	const matrix = new McGeMatrix3d();
	const event = new McDbEntity();
	matrix.setMirror(new McGeVector3d(0, 0, 0), new McGeVector3d(20, 0, 0));//平移
	event.transformBy(matrix);
   * \`\`\`
   */
	setMirror(pt1: McGePoint3d, pt2: McGePoint3d): this;
	/**
	 * 获取矩阵的缩放因子。
	 * @returns 矩阵的缩放因子。
	 * @example
	 * \`\`\`ts
	 * // matrix 表示一个三维矩阵对象
	 * const scaleNum = matrix.scale()
	 * console.log(scaleNum)
	 * \`\`\`
	 */
	scale(): number;
	/**
	 * 获取矩阵中指定位置的元素值。
	 * @param row 行索引。
	 * @param col 列索引。
	 * @returns 指定位置的元素值。
	 * @example
	 * \`\`\`ts
	 * // matrix 表示一个三维矩阵对象
	 * const data = matrix.getData(2,3)
	 * console.log(data)
	 * \`\`\`
	 */
	getData(row: number, col: number): number;
}
/**
 * 整数数组
 */
export declare class McGeLongArray {
	/** 内部实现对象 */
	imp: any;
	/**
	 * 构造函数。
	 * @param imp 内部实现对象
	 * @example
	 * \`\`\`ts
	 * import { McGeLongArray } from "mxcad"
	 *
	  // 创建一个新的 McGeLongArray 实例
	  const myArray = new McGeLongArray();
  
	  // 通过传入一个对象初始化 McGeLongArray
	  const initialValues = { data: [1, 2, 3, 4] };
	  const myArray2 = new McGeLongArray(initialValues);
	 * \`\`\`
	 */
	constructor(imp?: object);
	/**
	 * 复制对象的值
	 * @param val 整数数组
	 * @example
	 * \`\`\`ts
	 * import { McGeLongArray } from "mxcad"
	 *
	   const array1 = new McGeLongArray();
	   const array2 = new McGeLongArray();
	   array2.append(10);
	   array2.append(20);
  
	   // 复制 array2 的值到 array1
	   array1.copy(array2);
	 * \`\`\`
	 */
	copy(val: McGeLongArray): this;
	/**
	 * 从 McObjectId 数组中复制值
	 * @param aryId McObjectId 数组
	 * @example
	 * \`\`\`ts
	 * //objectIdArray 为一个对象id数组
	   const array = new McGeLongArray();
	   array.copyFormAryId(objectIdArray);
	 * \`\`\`
	 */
	copyFormAryId(aryId: McObjectId[]): this;
	/**
	* 向数组中添加一个值
	* @param val 整数值
	* @example
	* \`\`\`ts
	* import { McGeLongArray } from "mxcad";
	*
	  const array = new McGeLongArray();
	  array.append(5);
	  array.append(10)
	* \`\`\`
	*/
	append(val: number): void;
	/**
	 * 返回数组长度
	 * @return 数组长度
	 * @example
	 * \`\`\`ts
	 * import { McGeLongArray } from "mxcad"
	 *
	   const array = new McGeLongArray();
	   console.log(array.length()); // 输出: 0
	 * \`\`\`
	 */
	length(): number;
	/**
	 * 根据数组索引得到数据元素的值
	 * @param index 数组索引
	 * @return 返回元素值
	 * @example
	 * \`\`\`ts
	 * import { McGeLongArray } from "mxcad"
	 *
	   const array = new McGeLongArray();
	   array.append(5);
	   array.append(10);
  
	   console.log(array.at(0)); // 输出: 5
	   console.log(array.at(1)); // 输出: 10
	 * \`\`\`
	 */
	at(index: number): number;
	/**
	 * 通过数组索引设置数据元素的值
	 * @param index 数组索引值
	 * @param val 整数数值
	 * @example
	 * \`\`\`ts
	 * import { McGeLongArray } from "mxcad"
	 *
	   const array = new McGeLongArray();
	   array.append(5);
	   array.append(10);
  
	   array.setAt(0, 15);
	   console.log(array.at(0)); // 输出: 15
	 * \`\`\`
	 */
	setAt(index: number, val: number): void;
	/**
	 * 清空数组
	 * @example
	 * \`\`\`ts
	 * // array为整数数组
	 * array.clear()
	 * \`\`\`
	 */
	clear(): void;
	/**
	* 遍历数组
	* @param call 回调函数
	* @example
	* \`\`\`ts
	* import { McGeLongArray } from "mxcad"
	*
	  const array = new McGeLongArray();
	  array.append(5);
	  array.append(10);
  
	  array.forEach((val, index) => {
		console.log(\`Index \${index}: Value \${val}\`);
	  });
	  // 输出:
	  // Index 0: Value 5
	  // Index 1: Value 10
	* \`\`\`
	*/
	forEach(call: (val: number, index: number) => void): void;
}
/**
 * 表示字符串的数组
 */
export declare class McGeStringArray {
	/** 内部实现对象 */
	imp: any;
	/**
	 * 构造函数。
	 * @param imp 内部构造函数
	 * @example
	 * \`\`\`ts
	 * import { McGeStringArray } from "mxcad";
	 *
	   // 创建一个新的 McGeStringArray 实例
	   const myArray = new McGeStringArray();
  
	   // 通过传入一个对象初始化 McGeStringArray
	   const initialValues = { data: ["apple", "banana", "orange"] };
	   const myArray2 = new McGeStringArray(initialValues);
	 * \`\`\`
	 */
	constructor(imp?: object);
	/**
	 * 复制对象的值
	 * @example
	 * \`\`\`ts
	 * import { McGeStringArray } from "mxcad";
	 *
	   const array1 = new McGeStringArray();
	   const array2 = new McGeStringArray();
	   array2.append("apple");
	   array2.append("banana");
  
	   // 复制 array2 的值到 array1
	   array1.copy(array2);
	 * \`\`\`
	 */
	copy(val: McGeStringArray): this;
	/**
	* 添加一个值
	* @param val 字符串
	* @example
	* \`\`\`ts
	* import { McGeStringArray } from "mxcad";
	*
	* const array = new McGeStringArray();
	  array.append("apple");
	  array.append("banana");
	* \`\`\`
	*/
	append(val: string): void;
	/**
	 * 返回数组长度
	 * @return 数组长度
	 * @example
	 * \`\`\`ts
	 * import { McGeStringArray } from "mxcad";
	 *
	 * const array = new McGeStringArray();
	 * console.log(array.length()); // 输出: 0
	 * \`\`\`
	 */
	length(): number;
	/**
	 * 根据数组索引得到数据元素的值
	 * @param index 数组索引
	 * @return 字符串
	 * @example
	 * \`\`\`ts
	 * import { McGeStringArray } from "mxcad";
	 *
	   const array = new McGeStringArray();
	   array.append("apple");
	   array.append("banana");
  
	   console.log(array.at(0)); // 输出: "apple"
	   console.log(array.at(1)); // 输出: "banana"
	 * \`\`\`
	 */
	at(index: number, decodeFromGb2312?: boolean): string;
	/**
	 * 通过数组索引设置数据元素的值
	 * @param index 数组索引
	 * @param val 字符串
	 * @example
	 * \`\`\`ts
	 * import { McGeStringArray } from "mxcad";
	 *
	   const array = new McGeStringArray();
	   array.append("apple");
	   array.append("banana");
  
	   array.setAt(0, "orange");
	   console.log(array.at(0)); // 输出: "orange"
	 * \`\`\`
	 */
	setAt(index: number, val: string, decodeFromGb2312?: boolean): void;
	/**
	 * 遍历数组
	 * @param call 回调函数
	 * @example
	 * \`\`\`ts
	 * import { McGeStringArray } from "mxcad";
	 *
	   const array = new McGeStringArray();
	   array.append("apple");
	   array.append("banana");
  
	   array.forEach((val, index) => {
		 console.log(\`Index \${index}: Value \${val}\`);
	   });
	   // 输出:
	   // Index 0: Value apple
	   // Index 1: Value banana
	 * \`\`\`
	 */
	forEach(call: (val: string, index: number) => void, decodeFromGb2312?: boolean): void;
	/**
	 * 清空数组
	 * @example
	 * \`\`\`ts
	 * import { McGeStringArray } from "mxcad";
	 *
	   const array = new McGeStringArray();
	   array.append("apple");
	   array.append("banana");
  
	   array.clear();
	   console.log(array.length()); // 输出: 0
	 * \`\`\`
	 * */
	clear(): void;
}
/**
 * 表示三维点的数组
 */
export declare class McGePoint3dArray {
	/** 内部实现对象 */
	imp: any;
	/**
	 * 构造函数。
	 * @param imp 内部实现对象
	 * @example
	 * \`\`\`ts
	 * import { McGePoint3dArray, McGePoint3d } from "mxcad";
	 *
	   // 创建一个新的 McGePoint3dArray 实例
	   const myArray = new McGePoint3dArray();
  
	   // 通过传入一个对象初始化 McGePoint3dArray
	   const initialValues = [
		 new McGePoint3d({ x: 1, y: 2, z: 3 }),
		 new McGePoint3d({ x: 4, y: 5, z: 6 }),
	   ];
	   const myArray2 = new McGePoint3dArray(initialValues);
	 * \`\`\`
	 */
	constructor(imp?: object);
	/**
	 * 复制对象的值
	 * @param val 三维点的数组
	 * @example
	 * \`\`\`ts
	 * import { McGePoint3d, McGePoint3dArray } from "mxcad"
	 *
	   const array1 = new McGePoint3dArray();
	   const array2 = new McGePoint3dArray();
	   array2.append(new McGePoint3d({ x: 1, y: 2, z: 3 }));
	   array2.append(new McGePoint3d({ x: 4, y: 5, z: 6 }));
  
	   // 复制 array2 的值到 array1
	   array1.copy(array2);
	 * \`\`\`
	 */
	copy(val: McGePoint3dArray | McGePoint3d[]): this;
	/**
	* 添加一个值
	* @param val 三维点对象
	* @example
	* \`\`\`ts
	* import { McGePoint3d, McGePoint3dArray } from "mxcad"
	*
	* const array = new McGePoint3dArray();
	  array.append(new McGePoint3d({ x: 1, y: 2, z: 3 }));
	  array.append(new McGePoint3d({ x: 4, y: 5, z: 6 }));
	* \`\`\`
	*/
	append(val: McGePoint3d): void;
	/**
	 * 返回数组长度
	 * @return 数组长度
	 * @example
	 * \`\`\`ts
	 * import { McGePoint3dArray } from "mxcad"
	 *const array = new McGePoint3dArray();
	  console.log(array.length()); // 输出: 0
	 * \`\`\`
	 */
	length(): number;
	/**
	 * 返回数组为空
	 * @return 布尔值
	 * @example
	 * \`\`\`ts
	 * import { McGePoint3dArray, McGePoint3d } from "mxcad"
	   const array = new McGePoint3dArray();
	   console.log(array.isEmpty()); // 输出: true
  
	   array.append(new McGePoint3d({ x: 1, y: 2, z: 3 }));
	   console.log(array.isEmpty()); // 输出: false
	 * \`\`\`
	 */
	isEmpty(): boolean;
	/**
	 * 根据数组索引值得到数据元素的值
	 * @param index 数组索引
	 * @example
	 * \`\`\`ts
	 * import { McGePoint3dArray, McGePoint3d } from "mxcad"
	 *
	   const array = new McGePoint3dArray();
	   array.append(new McGePoint3d({ x: 1, y: 2, z: 3 }));
	   array.append(new McGePoint3d({ x: 4, y: 5, z: 6 }));
  
	   const point = array.at(0);
	   console.log(point); // 输出: McGePoint3d { x: 1, y: 2, z: 3 }
	 * \`\`\`
	 */
	at(index: number): McGePoint3d;
	/**
	 * 通过数组索引设置数据元素的值
	 * @param index 数组索引
	 * @param val 三维点对象
	 * @example
	 * \`\`\`ts
	 * import { McGePoint3dArray, McGePoint3d } from "mxcad"
	 *
	   const array = new McGePoint3dArray();
	   array.append(new McGePoint3d({ x: 1, y: 2, z: 3 }));
	   array.append(new McGePoint3d({ x: 4, y: 5, z: 6 }));
  
	   array.setAt(0, new McGePoint3d({ x: 7, y: 8, z: 9 }));
	   console.log(array.at(0)); // 输出: McGePoint3d { x: 7, y: 8, z: 9 }
	 * \`\`\`
	 */
	setAt(index: number, val: McGePoint3d): void;
	/**
	 * 清空数组
	 * @example
	 * \`\`\`ts
	 * import { McGePoint3dArray, McGePoint3d } from "mxcad"
	 *
	   const array = new McGePoint3dArray();
	   array.append(new McGePoint3d({ x: 1, y: 2, z: 3 }));
	   array.append(new McGePoint3d({ x: 4, y: 5, z: 6 }));
  
	   array.clear();
	   console.log(array.length()); // 输出: 0
	 * \`\`\`
	 * */
	clear(): void;
	/**
	 * 遍历数组
	 * @param call 回调函数
	 * @example
	 * \`\`\`ts
	 * import { McGePoint3dArray, McGePoint3d } from "mxcad"
	 *
	   const array = new McGePoint3dArray();
	   array.append(new McGePoint3d({ x: 1, y: 2, z: 3 }));
	   array.append(new McGePoint3d({ x: 4, y: 5, z: 6 }));
  
	   array.forEach((point, index) => {
		 console.log(\`Index \${index}: Point \${point}\`);
	   });
	   // 输出:
	   // Index 0: Point McGePoint3d { x: 1, y: 2, z: 3 }
	   // Index 1: Point McGePoint3d { x: 4, y: 5, z: 6 }
	 * \`\`\`
	 */
	forEach(call: (val: McGePoint3d, index: number) => void): void;
}
/**
 * 双精度浮点数数组
 */
export declare class McGeDoubleArray {
	/** 内部实现对象 */
	imp: any;
	/**
	 * 构造函数。
	 * @param imp 内部实现对象
	 * @example
	 * \`\`\`ts
	 * import { McGeDoubleArray } from "mxcad"
  
	   const array = new McGeDoubleArray();
	 * \`\`\`
	 */
	constructor(imp?: object);
	/**
	 * 复制对象的值
	 * @param val 双精度浮点数数组
	 * @example
	 * \`\`\`ts
	 * import { McGeDoubleArray } from "mxcad"
	 *
	  // array1 表示一个双精度浮点数数组
	  const array2 = new McGeDoubleArray();
	  array2.copy(array1);
  
	  // 现在array2与array1具有相同的值
	 * \`\`\`
	 */
	copy(val: McGeDoubleArray): this;
	/**
	* 添加一个值
	* @param val 双精度浮点数
	* @example
	* \`\`\`ts
	* import { McGeDoubleArray } from "mxcad"
	*
	  // 创建数组实例
	  const array = new McGeDoubleArray();
	  array.append(3.14159);
	* \`\`\`
	*/
	append(val: number): void;
	/**
	 * 返回数组长度
	 * @return 数组长度
	 * @example
	 * \`\`\`ts
	 * import { McGeDoubleArray } from "mxcad"
  
	   const array = new McGeDoubleArray();
	   const length = array.length();//0
	 * \`\`\`
	 */
	length(): number;
	/**
	 * 通过数组索引得到数据元素的值
	 * @param index 数组索引
	 * @example
	 * \`\`\`ts
	 * import { McGeDoubleArray } from "mxcad"
  
	   const array = new McGeDoubleArray();
	   // 获取特定索引位置的值
	   const value = array.at(2); // 假设索引为2的位置有值
	 * \`\`\`
	 */
	at(index: number): number;
	/**
	 * 通过数组索引设置数据元素的值
	 * @param 数组索引
	 * @param val 双精度浮点数
	 * @example
	 * \`\`\`ts
	 * import { McGeDoubleArray } from "mxcad"
  
	   const array = new McGeDoubleArray();
	   array.setAt(1, 3.14159); // 将索引为1的位置的值设置为3.14159
	 * \`\`\`
	 */
	setAt(index: number, val: number): void;
	/**
	 * 清空数组
	 * @example
	 * \`\`\`ts
	 * // array 表示一个McGeDoubleArray数组
	   array.clear();
	 * \`\`\`
	 * */
	clear(): void;
	/**
	 * 遍历数组
	 * @param call 回调函数
	 * @example
	 * \`\`\`ts
	 * import { McGeDoubleArray } from "mxcad"
  
	   const array = new McGeDoubleArray();
	   array.append(3.14159);
	   array.forEach((val,index)=>{
		 console.log(\`Value at index \${index}: \${value}\`);
	   })
	 * \`\`\`
	 */
	forEach(call: (val: number, index: number) => void): void;
}
/**
 * 范围对象
 */
export declare class McGeBound {
	/**
	 *  最小点
	 * @example
	 * \`\`\`ts
	 * import { McGeBound, McGePoint3d } from "mxcad"
	 *
	  // 创建 McGeBound 实例
	  const bound = new McGeBound();
	  // 访问最小点属性并设置其值
	  bound.minPoint = new McGePoint3d(0, 0, 0);
	  \`\`\`
	*/
	minPoint: McGePoint3d;
	/**
	 * 最大点
	 * @example
	 * \`\`\`ts
	 * import { McGeBound, McGePoint3d } from "mxcad"
	 *
	  // 创建 McGeBound 实例
	  const bound = new McGeBound();
	  // 访问最大点属性并设置其值
	  bound.maxPoint = new McGePoint3d(20, 10, 0);
	  \`\`\`
	 * */
	maxPoint: McGePoint3d;
	/**
	 * 是否有效
	 * @example
	 * \`\`\`ts
	 * import { McGeBound } from "mxcad"
	 *
	  // 创建 McGeBound 实例
	  const bound = new McGeBound();
	  // 访问是否有效属性并设置其值
	  bound.isValid = true;;
	  \`\`\`
	 * */
	isValid: boolean;
	/**
	 * 构造函数。
	 * @param pts 三维点数组
	 * @example
	 * \`\`\`ts
	 * import { McGeBound, McGePoint3d } from "mxcad"
	 *
	   const points = [new McGePoint3d(1, 2, 3), new McGePoint3d(4, 5, 6)];
	   const bound = new McGeBound(points);
	 * \`\`\`
	 */
	constructor(pts?: McGePoint3dArray | McGePoint3d[]);
	/**
	 * 添加一个点
	 * @param pt 三维点对象
	 * @example
	 * \`\`\`ts
	 * import { McGeBound, McGePoint3d } from "mxcad"
	 * // 创建 McGeBound 实例
	   const bound = new McGeBound();
	   // 添加一个点到边界
	   const point = new McGePoint3d(3, 4, 5);
	   bound.addPoint(point);
	 * \`\`\`
	 */
	addPoint(pt: McGePoint3d): void;
	/**
	 * 添加一组点
	 * @param pts 三维点对象数组
	 * @example
	 * \`\`\`ts
	 * import { McGeBound } from "mxcad"
	 *
	   // 创建 McGeBound 实例
	   const bound = new McGeBound();
  
	   // 创建一组点
	   const points = [new McGePoint3d(1, 2, 3), new McGePoint3d(4, 5, 6), new McGePoint3d(7, 8, 9)];
  
	   // 添加一组点到边界
	   bound.addPoints(points);
	 * \`\`\`
	 */
	addPoints(pts: McGePoint3dArray | McGePoint3d[]): void;
}
/** 坐标转换类型 */
export declare class MxCoordConvertType {
	/** 文档坐标转cad坐标
	 * @param pt 三维点的对象
	 * @returns 三维点的对象
	 * @example
	 * \`\`\`ts
	 * import { MxCpp, McGePoint3d } from 'mxcad';
	 * const mxcad = MxCpp.getCurrentCAD();
	 * let pt1CAD = mxcad.doc2cad1(new McGePoint3d(20,0,0));
	 * console.log(pt1CAD)
	 * \`\`\`
	*/
	doc2cad(pt: McGePoint3d): McGePoint3d;
	/** cad坐标转文档坐标
	 * @param pt 三维点的对象
	 * @returns 三维点的对象
	 * @example
	 * \`\`\`ts
	 * import { MxCpp, McGePoint3d } from 'mxcad';
	 * const mxcad = MxCpp.getCurrentCAD();
	 * let pt1DOC = mxcad.cad2doc(new McGePoint3d(20,0,0));
	 * console.log(pt1DOC)
	 * \`\`\`
	 */
	cad2doc(pt: McGePoint3d): McGePoint3d;
	/** 文档坐标转cad坐标
	 * @param pt THREE.js点对象
	 * @returns 三维点的对象
	 * @example
	 * \`\`\`ts
	 * import { MxCpp, McGePoint3d } from 'mxcad';
	 * import THREE from "three"
	 *
	 * const mxcad = MxCpp.getCurrentCAD();
	 * let pt = mxcad.doc2cad1(new THREE.Vector3(20, 10));
	 * console.log(pt)
	 * \`\`\`
	 */
	doc2cad1(pt: THREE.Vector3): McGePoint3d;
	/** cad坐标转文档坐标
	 * @param x X轴坐标
	 * @param y Y轴坐标
	 * @param z Z轴坐标
	 * @returns 三维点的对象
	 * @example
	 * \`\`\`ts
	 * import { MxCpp, McGePoint3d } from 'mxcad';
	 * import THREE from "three"
	 *
	 * const mxcad = MxCpp.getCurrentCAD();
	 * let pt = mxcad.doc2cad1(20, 10, 0);
	 * console.log(pt)
	 * \`\`\`
	*/
	doc2cad2(x: number, y: number, z: number): McGePoint3d;
	/** cad坐标转文档坐标
	 * @param pt 三维点的对象
	 * @returns THREE.js点对象
	 */
	cad2doc1(pt: McGePoint3d): THREE.Vector3;
	/** cad坐标转文档坐标
	 * @param x X轴坐标
	 * @param y Y轴坐标
	 * @param z Z轴坐标
	 * @returns THREE.js点对象
	 * @example
	 * \`\`\`ts
	 * import { MxCpp, McGePoint3d } from 'mxcad';
	 * const mxcad = MxCpp.getCurrentCAD();
	 * let pt = mxcad.cad2doc2(20,0,0);
	 * console.log(pt)
	 * \`\`\`
	*/
	cad2doc2(x: number, y: number, z: number): THREE.Vector3;
}
/** 提供坐标转换方法 */
export declare let MxCoordConvert: MxCoordConvertType;
export declare function getFilterImp(filter?: MxCADResbuf | null): any;
/**
 * MxCADResbuf 类用于操作 AutoCAD 中的 resbuf 数据。
 * @example
 * \`\`\`ts
 * import { MxCADResbuf } from "mxcad"
 * // 定义过滤器
	const filter = new MxCADResbuf()
	filter.AddMcDbEntityTypes("TEXT,MTEXT")
 * \`\`\`
 */
export declare class MxCADResbuf extends McRxObject {
	/**
	 * 构造函数。
	 * @param imp 实现对象。
	 */
	constructor(imp?: any);
	/**
	 * 清空 resbuf 数据。
	 */
	Clear(): void;
	/**
	 * 遍历数据。
	 */
	forEach(call: (val: any, type: number, dxf: number) => void): void;
	/**
	 * 获取 resbuf 数据项个数。
	 * @returns resbuf 数据项个数。
	 */
	GetCount(): number;
	/**
	 * 获取 resbuf 数据项中的 double 类型值。
	 * @param lItem 数据项索引。
	 * @returns 包含 double 类型值和返回值的对象。
	 */
	AtDouble(lItem: number): {
		val: number;
		ret: boolean;
	};
	/**
	 * 获取 resbuf 数据项中的 long 类型值。
	 * @param lItem 数据项索引。
	 * @returns 包含 long 类型值和返回值的对象。
	 */
	AtLong(lItem: number): {
		val: number;
		ret: boolean;
	};
	/**
	 * 获取 resbuf 数据项中的 McRxObject 对象。
	 * @param lItem 数据项索引。
	 * @returns 包含 long 类型值和返回值的对象。
	*/
	AtObject(lItem: number): {
		val: McDbObject | undefined;
		ret: boolean;
	};
	/**
	 * 添加 McRxObject 对象到 resbuf 中
	*/
	AddObject(pObj: McRxObject): void;
	/**
	 * 获取 resbuf 数据项中的 ObjectId。
	 * @param lItem 数据项索引。
	 * @returns 包含 ObjectId 和返回值的对象。
	 */
	AtObjectId(lItem: number): {
		val: McObjectId;
		ret: boolean;
	};
	/**
	 * 获取 resbuf 数据项中的字符串。
	 * @param lItem 数据项索引。
	 * @returns 包含字符串和返回值的对象。
	 */
	AtString(lItem: number, decodeFromGb2312?: boolean): {
		val: string;
		ret: boolean;
	};
	/**
	 * 获取 resbuf 数据项中的点坐标。
	 * @param lItem 数据项索引。
	 * @returns 包含点坐标和返回值的对象。
	 */
	AtPoint(lItem: number): {
		val: McGePoint3d;
		ret: boolean;
	};
	/**
	 * 获取 resbuf 数据项中的数据类型。
	 * @returns 数据类型。
	 */
	ItemDataType(index: number): number;
	/**
	 * 获取 resbuf 数据项中的数据的DXF值
	 * @returns 数据类型。
	 */
	ItemDataDxf(index: number): number;
	/**
	 * 添加 double 类型值到 resbuf 中。
	 * @param val double 类型值。
	 * @param lDataType 数据类型。
	 * @returns 添加的数据项索引。
	 */
	AddDouble(val: number, lDataType?: number): number;
	/**
	 * 添加 long 类型值到 resbuf 中。
	 * @param val long 类型值。
	 * @param lDataType 数据类型。
	 * @returns 添加的数据项索引。
	 */
	AddLong(val: number, lDataType?: number): number;
	/**
	 * 添加 ObjectId 到 resbuf 中。
	 * @param val ObjectId。
	 * @param lDataType 数据类型。
	 * @returns 添加的数据项索引。
	 */
	AddObjectId(val: number, lDataType?: number): number;
	/**
	 * 添加字符串到 resbuf 中。
	 * @param str 字符串。
	 * @param lDataType 数据类型。
	 * @returns 添加的数据项索引。
	 */
	AddString(str: string, lDataType?: number, decodeFromGb2312?: boolean): number;
	/**
	 * 添加实体类型，用于选择集过滤使用
	 * @param str 多个类型用,连接 例如: "TEXT,MTEXT"
	 * @description 实体的类型表
	 * | 类型 | 描述 |
	 * | ------- | ------- |
	 * | TEXT  | 文字  |
	 * | MTEXT  | 多行文字  |
	 * | CIRCLE  | 圆  |
	 * | ARC  | 圆弧  |
	 * | LINE  | 线  |
	 * | LWPOLYLINE | 多段线 |
	 * | INSERT | 图块 |
	 * | ELLIPSE | 椭圆 |
	 * | SPLINE | 样条线 |
	 * | LinkLine | 超链接 |
	 */
	AddMcDbEntityTypes(str: string): any;
	/**
	 * 添加点坐标到 resbuf 中。
	 * @param pt 点坐标。
	 * @param lDataType 数据类型。
	 * @returns 添加的数据项索引。
	 */
	AddPoint(pt: McGePoint3d, lDataType?: number): number;
	/**
	 * 移除所有 resbuf 数据项。
	 */
	RemoveAll(): void;
	/**
	 * 移除指定索引的 resbuf 数据项。
	 * @param lItem 数据项索引。
	 */
	Remove(lItem: number): void;
	/**
	 * 调试输入信息
	 */
	PrintData(): void;
}
/**
 * MxCADUtilityClass 类提供了一系列与绘图相关的工具方法。
 * @example
 * \`\`\`ts
 * import { MxCADUtility, MxCADUiPrPoint } from "mxcad"
 * //点选
 *  const getPoint = new MxCADUiPrPoint()
	const point = await getPoint.go()
	if(!point) return
	let objId = MxCADUtility.findEntAtPoint(point.x, point.y,point.z,-1,filter)
	// 选中对象设置高亮
	MxCADUtility.highlightEntity(objId.id, true)
	console.log(objId)
 * \`\`\`
 */
export declare class MxCADUtilityClass {
	/** 内部实现对象 */
	private imp;
	constructor();
	/**
	 * eraseObject 方法用于删除指定的图形对象
	 * @param lId - 需要删除的图形对象的 ID
	 * @returns 返回一个布尔值，表示是否删除成功
	 */
	eraseObject(lId: number, isErase?: boolean): boolean;
	/**
	 * highlightEntity 方法用于高亮指定的图形对象
	 * @param lId - 需要高亮的图形对象的 ID
	 * @param isHighlight - 是否需要高亮，默认为 true
	 */
	highlightEntity(lId: number, isHighlight?: boolean): any;
	/**
	 * findEntAtPoint 方法用于在指定坐标点附近查找图形对象
	 * @param dX - 坐标点的 X 坐标值
	 * @param dY - 坐标点的 Y 坐标值
	 * @param dZ - 坐标点的 Z 坐标值
	 * @param dSearhRange - 查找范围，默认为 -1（表示查找整个绘图区域）
	 * @param filter - 过滤器，用于过滤查找到的图形对象，默认为 null（表示不进行过滤）
	 * @returns 返回查找到的图形对象的 ID
	 * @example
	 * \`\`\`ts
	 * import { MxCADUiPrPoint, MxCADUtility, MxCpp } from "mxcad"
	 *  const mxcad = MxCpp.getCurrentCAD();
		const getPoint = new MxCADUiPrPoint();
		getPoint.setMessage('请选择对象\\n');
		const point = await getPoint.go();
		if (!point) break;
		let objId = MxCADUtility.findEntAtPoint(point.x, point.y, point.z, -1, filter);
		mxcad.addCurrentSelect(objId);
	 * \`\`\`
	 */
	findEntAtPoint(dX: number, dY: number, dZ: number, dSearhRange?: number, filter?: MxCADResbuf | null): McObjectId;
	/**
	 * selectEnt 方法用于在指定位置选择图形对象
	 * @param strPrompt - 选择时的提示信息，默认为 null（表示不显示提示信息）
	 * @param filter - 过滤器，用于过滤选择到的图形对象，默认为 null（表示不进行过滤）
	 * @param isSelectMxDraw 是否选择批注图形 默认true
	 * @param init 选择图形前初始化函数( 会在实例化{@link https://mxcadx.gitee.io/mxdraw_api_docs/classes/MrxDbgUiPrPoint.html | mxdraw取点类}时触发，得到取点实例)
	 * @param callbackGetPoint 回调函数 获取选中图形时的坐标点
	 * @returns 返回一个 Promise，其中包含选择到的图形对象的 ID 数组
	 */
	selectEnt(strPrompt?: string, filter?: MxCADResbuf | null, isSelectMxDraw?: boolean, init?: (getPoint: MrxDbgUiPrPoint) => any, callbackGetPoint?: (point: McGePoint3d) => void): Promise<McObjectId[]>;
	/**
* 得到图上当前选择对象时，选择范围点.
* @returns { object } point1 角点1 | point2 角点2 | isvalid 是否有效
* @example
* \`\`\`ts
*import { MxCADUtility } from "mxcad"
let ids = MxCADUtility.getCurrentSelect()
let pt1!: McGePoint3d, pt2!: McGePoint3d
const { point1, point2 } = MxCADUtility.getCurrentSelectPoints()
console.log(pt1, pt2)
*
* \`\`\`
*/
	getCurrentSelectPoints(): {
		point1: McGePoint3d;
		point2: McGePoint3d;
		isvalid: boolean;
	};
	/**
   * 得到当前选中的对象。
   * @param filter 过滤对象
   * @example
   * \`\`\`ts
   * import { MxCADResbuf, MxCADUtility } from "mxcad";
   * const filter = new MxCADResbuf();
	 filter.AddMcDbEntityTypes('TEXT');
   * const objIds = MxCADUtility.getCurrentSelect();
	 console.log(objIds);
   * \`\`\`
   */
	getCurrentSelect(filter?: MxCADResbuf | null): McObjectId[];
	/** 用户选择
	 * @param strPrompt 字符串提示
	 * @param filter 过滤对象
	 * @returns 得到选择的对象ID
	 * @example
	 * \`\`\`ts
	 * import { MxCADResbuf, MxCADUtility } from 'mxcad';
		let filter = new MxCADResbuf();
		filter.AddMcDbEntityTypes("CIRCLE,ARC,LINE,LWPOLYLINE,ELLIPSE");
		let aryId = await MxCADUtility.userSelect("选择目标曲线", filter);
		console.log(aryId);
	 * \`\`\`
	 *  */
	userSelect(strPrompt?: string, filter?: MxCADResbuf | null, init?: (ss: MxCADSelectionSet, getPoint: MrxDbgUiPrPoint) => any): Promise<McObjectId[]>;
	/** 初始化 */
	init(): void;
	/** 获取角点(鼠标点击的两个点)
	 * @param strPrompt 字符串提示
	 * @param pt1 第一个点 (已知一个角点的情况)
	 * @param detailedResult {@link DetailedResult} 交互结果讲台的回调
	 * @param drawSelectCroner 绘制选择对象的选框(true有背景false无背景)
	 * @param isDisableAllTrace 是否禁用所有跟踪
	 *  */
	getCorner(strPrompt?: string, pt1?: McGePoint3d, detailedResult?: (retcode: DetailedResult) => any, drawSelectCroner?: boolean, isDisableAllTrace?: boolean, init?: (getPoint: MxCADUiPrPoint) => any): Promise<{
		pt1: McGePoint3d;
		pt2: McGePoint3d;
	} | null>;
	/** 获取多个实体形成的包围盒
	 * @param aryId 实体对象ID数组
	 *  */
	getMcDbEntitysBoundingBox(aryId: McObjectId[]): {
		minPt: McGePoint3d;
		maxPt: McGePoint3d;
	} | undefined;
	/** 计算凸度
	 * @param pt1 开始点
	 * @param pt2 中点
	 * @param pt3 结束点
	 * @returns 计算凸度结果
	 *  */
	calcBulge(pt1: McGePoint3d, pt2: McGePoint3d, pt3: McGePoint3d): {
		val: number;
		ret: boolean;
	};
	/** 通过一个点坐标填充对应位置实体的填充
	 * @param pt 点对象
	 * @example
	 * \`\`\`ts
	 * import { MxCADUiPrPoint, MxCADUtility } from 'mxcad'
		const getPoint = new MxCADUiPrPoint();
		getPoint.setMessage("\\n指定填充区域内部一点:");
		getPoint.disableAllTrace(true);
		getPoint.setDisableOsnap(true);
		let pt = (await getPoint.go()) as McGePoint3d;
		if (!pt) return;

		let hatch = MxCADUtility.builderHatchFromPoint(pt);
	 * \`\`\`
	 * */
	builderHatchFromPoint(pt: McGePoint3d): McDbHatch | null;
}
/** 提供了一系列与绘图相关的工具方法 */
export declare let MxCADUtility: MxCADUtilityClass;
/** 选择集状态枚举 */
export declare enum MxCADSelectionSetStatus {
	/** 构造选择集成功 */
	kSelected = 0,
	/** 当交互构造选择集时，用户直接按下了 Enter 键。 */
	kNone = 1,
	/** 当交互构造选择集时，用户按下了 Esc 键取消。 */
	kCanceled = 2,
	/** 拒绝执行的无效请求(关键字错误)。 */
	kRejected = 3,
	/** 输入了关键值 */
	kKeyword = 4
}
/** 选择集 用于选择实体 */
export declare class MxCADSelectionSet extends McRxObject {
	/** 是否循环选择 */
	isWhileSelect: boolean;
	/** 选择是否高亮 */
	isSelectHighlight: boolean;
	/** 选择角点1 */
	private selectPt1;
	/** 选择角点2 */
	private selectPt2;
	/** 构造函数 */
	constructor();
	/** 得到选择形成的两个对角点 */
	getSelectPoint(): {
		pt1: McGePoint3d;
		pt2: McGePoint3d;
	};
	/** 全选
	 * @param filter 过滤对象
	 * @example
	 * \`\`\`ts
	 * import { MxCADSelectionSet } from "mxcad";
	 *
		let ss = new MxCADSelectionSet();
		ss.allSelect();
	 * \`\`\`
	 *  */
	allSelect(filter?: MxCADResbuf | null): number;
	/** 根据一个坐标点选择一个实体对象的索引
	 * @param dX 坐标x
	 * @param dY 坐标y
	 * @param filter 过滤对象
	 *  */
	pointSelect(dX: number, dY: number, filter?: MxCADResbuf | null, dTol?: number): number;
	/** 根据两个对角点选择一个实体对象的索引
	 * @param dX1 角点1 X轴值
	 * @param dY1 角点1 Y轴值
	 * @param dX2 角点2 X轴值
	 * @param dY2 角点2 Y轴值
	 * @param filter 过滤对象
	 *  */
	crossingSelect(dX1: number, dY1: number, dX2: number, dY2: number, filter?: MxCADResbuf | null): number;
	/** 获取当前选中的个数 */
	count(): number;
	/** 选择集为空 */
	isNull(): boolean;
	/** 根据对象索引 得到对应对象ID
	 * @param lItem 对象索引
	 * */
	item(lItem: number): McObjectId;
	/** 遍历已选中的实体
	 * @example
	 * \`\`\`ts
	 * import { MxCADSelectionSet } from "mxcad";
	 *
		let ss = new MxCADSelectionSet();
		ss.allSelect();
		ss.forEach((id) => {
			let ent: any = id.getMcDbEntity();
		})
	 * \`\`\`
	 * */
	forEach(call: (val: McObjectId) => void): void;
	/** 得到当前已选中的所有对象ID
	 * @returns 选中id对象数组
	 * */
	getIds(): McObjectId[];
	/** 用户选择
	 * @param  strPrompt 字符串提示
	 * @param filter 提示
	 * @param init 用户选择前的初始化操作
	 * @example
	 * \`\`\`ts
	 * import { MxCADResbuf, MxCADSelectionSet } from "mxcad";
	 *
	   let filter = new MxCADResbuf();
	   filter.AddMcDbEntityTypes("INSERT");
	   let ss = new MxCADSelectionSet();
	   if (!await ss.userSelect("选择要刷的目标块:", filter)) return;
	   if (ss.count() == 0) return;
	   let ids = ss.getIds();
	   console.log(ids);
	 * \`\`\`
	 *  */
	userSelect(strPrompt?: string, filter?: MxCADResbuf | null, init?: (getPoint: MrxDbgUiPrPoint) => any): Promise<boolean>;
}
/** MxCADUiPrBase 作为 MxCADUiPr* 系列的基类，提供了一些基础的功能。 */
export declare class MxCADUiPrBase {
	/** 内部实现对象 */
	protected imp: any;
	/** MxDraw 实例对象 */
	protected mxobj: MxDrawObject;
	/** 构造函数
	 * @param imp 内部实现对象
	 */
	constructor(imp: any);
	/** 文档坐标转cad坐标
	 * @param pt THREE.js坐标
	 * @returns 三维点对象
	 */
	protected doc2cad1(pt: THREE.Vector3): McGePoint3d;
	/** 文档坐标转cad坐标
	 * @param x X轴值
	 * @param y Y轴值
	 * @param z Z轴值
	 * @returns 三维点对象
	 */
	protected doc2cad2(x: number, y: number, z: number): McGePoint3d;
	/** cad坐标转文档坐标
	 * @param pt 三维点对象
	 * @returns THREE.js点对象
	 */
	protected cad2doc1(pt: McGePoint3d): THREE.Vector3;
	/** cad坐标转文档坐标
	 * @param x X轴值
	 * @param y Y轴值
	 * @param z Z轴值
	 * @returns THREE.js点对象
	 */
	protected cad2doc2(x: number, y: number, z: number): THREE.Vector3;
	/**
   * 返回关键字列表
   * @returns 关键词列表
   */
	keyWords(): string;
	/**
	 * 设置关键字列表
	 * @param keyWordList 关键词列表
	 * @returns void
	 * @example
	 * \`\`\`ts
	 * //以 MxCADUiPrPoint 类示例
	 * import { MxCADUiPrPoint } from 'mxcad'
		const getPoint = new MxCADUiPrPoint();
		getPoint.setKeyWords("[选项1(A)/选项2(B)]")
	 * \`\`\`
	 */
	setKeyWords(keyWordList: string): void;
	/**
	* 清除上一次的输入点数据。
	* @returns 选择的关键字
	*/
	clearLastInputPoint(): void;
	/**
	* 设置上一次的输入点。
	* @param pt 点对象
	* @returns 选择的关键字
	*/
	setLastInputPoint(pt: McGePoint3d): void;
	/**
	 * 提示字符串
	 * @returns 提示消息
	 */
	message(): string;
	/**
	 * 设置提示字符串
	 * @param message 提示消息
	 * @returns 提示消息
	 * @example
	 * \`\`\`ts
	 * //以 MxCADUiPrPoint 类示例
	 * import { MxCADUiPrPoint } from 'mxcad'
		const getPoint = new MxCADUiPrPoint();
		getPoint.setMessage("\\n提示消息")
	 * \`\`\`
	 */
	setMessage(message: string): void;
	/**
	 * 返回用户选择的关键字
	 * @returns 选择的关键字
	 * @example
	 * \`\`\`ts
	 * //以 MxCADUiPrPoint 类示例
	 * import { MxCADUiPrPoint } from 'mxcad';
	 *
	   const getPoint = new MxCADUiPrPoint();
	   getPoint.setKeyWords("[选项1(A)/选项2(B)]");
	   const pt = await getPoint.go();
	   const key = getPoint.keyWordPicked();
	   console.log(key)
	 * \`\`\`
	 */
	keyWordPicked(): string;
	/**
	 * 测试某一个关键字是否被用户选择
	 * @param matchKeyWord 要检测的关键字
	 * @returns true为真
	 * @example
	 * \`\`\`ts
	 * //以 MxCADUiPrPoint 类示例
	 * import { MxCADUiPrPoint } from 'mxcad';
	 *
	   const getPoint = new MxCADUiPrPoint();
	   getPoint.setKeyWords("[选项1(A)/选项2(B)]");
	   const pt = await getPoint.go();
	   if(getPoint.isKeyWordPicked('A')){
		console.log('选项1')
	   }else if(getPoint.isKeyWordPicked('B')){
		console.log('选项2')
	   }
	 * \`\`\`
	 */
	isKeyWordPicked(matchKeyWord: string): boolean;
	/**
	 * 设置交互过程的动态绘制调用对象
	 * @param pDraw {@link McEdGetPointWorldDrawObject | 动态绘制调用对象}
	 * @returns void
	 * @example
	 * \`\`\`ts
	 * //以 MxCADUiPrPoint 类示例
	 * import { MxCADUiPrPoint } from 'mxcad';
	 *
	   const getPoint = new MxCADUiPrPoint();
	   getPoint.setUserDraw((pt,pw)=>{
		 console.log(pt, pw)
	   })
	   const pt = await getPoint.go();
	 * \`\`\`
	 */
	setUserDraw(pDraw: ((currentPoint: McGePoint3d, pWorldDraw: McEdGetPointWorldDrawObject) => void)): void;
	/**
	* 返回交互操作退出的详细原因
	* @returns 当前交互操作返回值类型
	* @example
	* \`\`\`ts
	* import { MxCADUiPrDist, DetailedResult } from 'mxcad';
	*
	   const getDist = new MxCADUiPrDist();
	   const val = await getDist.go();
	   if (!val) return;
	   if (getDist.getDetailedResult() === DetailedResult.kCoordIn) {
		  console.log('提示输入', val)
		}
	* \`\`\`
	*/
	getDetailedResult(): DetailedResult;
	/** 获取操作状态 */
	getStatus(): MrxDbgUiPrBaseReturn;
	/**
	 * 把动态绘制的对象，保留到图上。
	 * @param callAddEntity 回调参数ent 类型：THREE.THREE.Object3D
	 * @returns 点对象 DWG图纸坐标
	 */
	drawReserve(callAddEntity?: (ent: THREE.Object3D) => void): void;
	/**
	 * 设置需要的Touche输入类型,默认值是 {@link MxType.InputToucheType.kGetBegan}
	 */
	setInputToucheType(toucheType: number): void;
	/**
	 * 返回需要的Touche输入类型
	 */
	getInputToucheType(): number;
	/**
	 * 设置光标类型
	 * @param type 鼠标样式类型
	 */
	setCursorType(type: MxCursorType): void;
	/**
	 * 返回光标类型
	 */
	getCursorType(): MxCursorType;
	/**
	 * 设置动态输入类型
	 * @param type 动态输入显示类型
	 */
	setDynamicInputType(type: DynamicInputType): void;
	/**
	 * 返回动态输入类型
	 * @returns 动态输入显示类型
	 */
	getDynamicInputType(): DynamicInputType;
	/**
	 * 是否禁用动态输入框
	*/
	isDisableDynInput(): boolean;
	/**
	* 设置是否禁用动态输入框
	*/
	setDisableDynInput(isDisable: boolean): void;
	/**
	* 设置是否禁用捕捉
	*/
	setDisableOsnap(isDisable: boolean): void;
	/**
	* 是否禁用捕捉
	*/
	isDisableOsnap(): boolean;
	/**
  * 是否输入点遍移一个距离
  */
	isOffsetInputPostion(): boolean;
	/**
	 * 设置输入点遍移一个距离
	 */
	setOffsetInputPostion(isOffset: boolean): void;
	/** 设置是否禁用动态跟踪
	 * @param isDisable 是否禁用
	 *  */
	setDisableDynamicTrace(isDisable: boolean): void;
	/** 是否禁用动态跟踪 */
	isDisableDynamicTrace(): boolean;
	/** 设置是否禁用极轴跟踪
	 * @param isDisable 是否禁用
	 * */
	setDisablePolarAxisTrace(isDisable: boolean): void;
	/** 是否禁用极轴跟踪 */
	isDisablePolarAxisTrace(): boolean;
	/** 设置是否禁用格网追踪
	 * @param isDisable 是否禁用
	 * */
	setDisableGridTrace(isDisable: boolean): void;
	/** 是否禁用格网追踪 */
	isDisableGridTrace(): boolean;
	/** 设置是否禁用正射追踪
	 * @param isDisable 是否禁用
	 * */
	setDisableOrthoTrace(isDisable: boolean): void;
	/** 是否禁用正射追踪  */
	isDisableOrthoTrace(): boolean;
	/** 禁用所有跟踪 */
	disableAllTrace(isDisable?: boolean): void;
	/**
   * 返回输入控制设置，UserInputControls
   */
	userInputControls(): number;
	/**
	* 设置输入控制设置，UserInputControls
	*/
	setUserInputControls(contros: number): void;
	/**
	* 停止当前动态拖动
	* @returns void
	*/
	abort(cause?: DetailedResult): void;
}
/**
 * UI交互取点 (鼠标点击画布)
 * @example
 * \`\`\`ts
 * import { MxCADUiPrPoint } from 'mxcad'
 * const getPoint = new MxCADUiPrPoint()
   const point = await getPoint.go()
   console.log(point)
 * \`\`\`
 */
export declare class MxCADUiPrPoint extends MxCADUiPrBase {
	constructor();
	/**
	 *  运行go方法, 将返回用户交互的Promise任务
	 *  @description
	 * 当鼠标点击画布后 Promise完成, 得到其点击的坐标点
	 * 其他交互操作方式将返回null 如按下Esc取消键或在交互中输入对应的关键词
	 *  */
	go(): Promise<McGePoint3d | null>;
	/**
	 * 得以获取的点
	 * @returns 点坐标
	 */
	value(): McGePoint3d;
	/**
	 * 得到 Three.js 坐标.
	 * @returns 点对象 MdGePoint3d
	 */
	getDocValue(): McGePoint3d;
	/**
	 * 得到动态拖动的基点
	 * @returns 基点 THREE.THREE.Vector3
	 */
	basePt(): McGePoint3d;
	/**
	 * 设置动态拖动的基点
	 * @param basePt 基点 THREE.THREE.Vector3
	 * @returns 点对象 DWG图纸坐标
	 */
	setBasePt(basePt: McGePoint3d): void;
	/**
	 * 设置动态拖动的基点用于动态绘制。
	 * @param useIt 是否设置,setBasePt会自设置true.
	 * @returns void
	 */
	setUseBasePt(useIt: boolean): void;
}
/** UI交互获取距离
 * @description 根据两个点确定一段距离
 * @example
 * \`\`\`ts
 * import { MxCADUiPrDist } from 'mxcad'
 *
 *  const getDist = new MxCADUiPrDist()
	getDist.setMessage("提示用户设置距离:")
	const distVal = await getDist.go()
	console.log(distVal)
 * \`\`\`
 */
export declare class MxCADUiPrDist extends MxCADUiPrBase {
	/** 构造函数 */
	constructor();
	/**
	 * 得以获取的距离
	 */
	value(): number;
	/**
	 * 得到动态拖动的基点
	 * @returns 基点 McGePoint3d
	 */
	basePt(): McGePoint3d;
	/**
	 * 设置动态拖动的基点
	 * @param basePt 基点 McGePoint3d
	 * @returns 点对象 DWG图纸坐标
	 */
	setBasePt(basePt: McGePoint3d): void;
	/**
	 * 设置使用动态拖动的基点
	 * @param useIt 是否设置 默认为false
	 * @returns void
	 */
	setUseBasePt(useIt: boolean): void;
	/**
	 * 开始动态拖动
	 * @param retcall  回调参数status {@link MrxDbgUiPrBaseReturn | 状态值}
	 * @returns void
	 */
	go(): Promise<number | null>;
}
/**
 * UI交互 根据两个点计算得到角度
 * @example
 * \`\`\`ts
 * import { MxCADUiPrAngle } from 'mxcad'
 *
	const getAngle = new MxCADUiPrAngle()
	getAngle.setMessage("提示用户设置角度:")
	const angleVal = await getAngle.go()
	console.log(angleVal)
 * \`\`\`
 */
export declare class MxCADUiPrAngle extends MxCADUiPrBase {
	/** 构造函数 */
	constructor();
	/**
	 * 得以获取的距离
	 */
	value(): number;
	/**
	 * 得到动态拖动的基点
	 * @returns 基点 McGePoint3d
	 */
	basePt(): McGePoint3d;
	/**
	 * 设置动态拖动的基点
	 * @param basePt 基点 McGePoint3d
	 * @returns 点对象 DWG图纸坐标
	 */
	setBasePt(basePt: McGePoint3d): void;
	/**
	 * 设置使用动态拖动的基点
	 * @param useIt 是否设置 默认为false
	 * @returns void
	 */
	setUseBasePt(useIt: boolean): void;
	/**
	 * 开始动态拖动
	 * @param retcall  回调参数status {@link MrxDbgUiPrBaseReturn | 状态值}
	 * @returns void
	 */
	go(): Promise<number | null>;
}
/**
 *  UI交互 根据用户输入得到整型数字
 * @example
 * \`\`\`ts
 * import { MxCADUiPrInt } from 'mxcad'
 *
 *  const getInt = new MxCADUiPrInt()
	getInt.setMessage("提示用户输入数字:")
	const intVal = await getInt.go()
	console.log(intVal)
 * \`\`\`
 */
export declare class MxCADUiPrInt extends MxCADUiPrBase {
	/** 构造函数 */
	constructor();
	/**
	 * 得以获取的整数
	 */
	value(): number;
	/**
	 * 开始动态拖动
	 * @param retcall  回调参数status {@link MrxDbgUiPrBaseReturn | 状态值}
	 * @returns void
	 */
	go(): Promise<number | null>;
}
/**
 * UI交互 根据用户输入得到关键词
 * @example
 * \`\`\`ts
 * import { MxCADUiPrKeyWord } from 'mxcad'
 *
 *  const getKey = new MxCADUiPrKeyWord
	getKey.setMessage("提示用户关键词 A、 B、 C:")
	getKey.setKeyWords("A B C")
	const keyVal = await getKey.go()
	console.log(keyVal)
 * \`\`\`
 */
export declare class MxCADUiPrKeyWord extends MxCADUiPrBase {
	constructor();
	/**
	 * 开始动态拖动
	 * @param retcall  回调参数status {@link MrxDbgUiPrBaseReturn | 状态值}
	 * @returns void
	 */
	go(): Promise<string | null>;
}
/**
 * UI交互 根据用户输入得到字符串
 * @example
 * \`\`\`ts
 * import { MxCADUiPrString } from 'mxcad'
 *
	const getStr = new MxCADUiPrString()
	getStr.setMessage("提示用户输入字符串:")
	const strVal = await getStr.go()
	console.log(strVal)
 * \`\`\`
 */
export declare class MxCADUiPrString extends MxCADUiPrBase {
	constructor();
	/**
  * 得以获取的字符串
  */
	value(): string;
	/**
	 * 开始动态拖动
	 * @param retcall  回调参数status {@link MrxDbgUiPrBaseReturn | 状态值}
	 * @returns void
	 */
	go(): Promise<string | null>;
}
/**
 * UI交互 根据用户鼠标点击的坐标得到对应的实体
 * @example
 * \`\`\`ts
	import { MxCADUiPrEntity, MxCpp } from "mxcad"

	const mxcad = MxCpp.getCurrentMxCAD();
	let getEnt = new MxCADUiPrEntity();
	let id = await getEnt.go();
	// 通过ID对象得到图形数据对象
	let ent = id.getMcDbEntity();
 * \`\`\`
 */
export declare class MxCADUiPrEntity extends MxCADUiPrBase {
	private filter?;
	private id;
	constructor();
	/** 设置或获取过滤器 */
	setFilter(filter: MxCADResbuf): void;
	getFilter(): MxCADResbuf | undefined;
	/**
	 * 开始动态拖动
	 * @param retcall  回调参数status {@link MrxDbgUiPrBaseReturn | 状态值}
	 * @returns void
	 */
	go(): Promise<McObjectId>;
	/**
   * 得以获取对象时的输入点
   */
	pickPoint(): McGePoint3d;
	/**
	 * 得以获取对象时的id
	 */
	value(): McObjectId;
	/**
	 * 得以获取对象时的输入点的CAD图纸坐标.
	 * @returns 点对象 MdGePoint3d
	 */
	getDocPickPoint(): McGePoint3d;
}
/**
 * 具有一个图形表示的所有数据库对象的基类，包括了显示实体的通用属性操作，如线型，图层，文字样式，颜色，几何外包等
 */
export declare class McDbEntity extends McDbObject {
	/**
	 * 构造函数。
	 * @param imp 内部实现对象。
	 */
	constructor(imp?: any);
	/**
	 * 打碎对象，返回打后对象数据链表
	 */
	explode(): MxCADResbuf;
	/**
	 * 得到对象颜色
	 * @example
	 * \`\`\`ts
	  import { McDbEntity, McCmColor} from 'mxcad'
	  const ent = new McDbEntity();
	  ent.trueColor = new McCmColor(255, 0, 0);
	  console.log(ent.trueColor)
	 * \`\`\`
	 */
	get trueColor(): McCmColor;
	/**
	 * 设置对象颜色
	 */
	set trueColor(val: McCmColor);
	/**
	 * 得到对象颜色索引
	 * @example
	 * \`\`\`ts
	  import { McDbEntity, ColorIndexType } from 'mxcad'
	  const ent = new McDbEntity();
	  ent.colorIndex = ColorIndexType.kByblock;
	  console.log(ent.colorIndex)
	 * \`\`\`
	 */
	get colorIndex(): number;
	/**
	 * 设置对象颜色索引
	 * @param val 颜色索引（ColorIndexType）
	 */
	set colorIndex(val: number);
	/**
	 * 得到对象图层名
	 */
	get layer(): string;
	/**
	 * 设置对象图层名
	 * @param val 图层名
	 * @example
	 * \`\`\`ts
	  import { McDbEntity } from 'mxcad'
	  const ent = new McDbEntity();
	  ent.layer = "newLayerName";
	  console.log(ent.layer)
	  \`\`\`
	 */
	set layer(val: string);
	/**
	* 得到对象线型名
	*/
	get linetype(): string;
	/**
	 * 设置对象线型名
	 * @param  val 线型名
	 * @example
	 * \`\`\`ts
	 * import { McDbEntity } from 'mxcad'
	 * const ent = new McDbEntity()
	 * ent.linetype = "MyLineType";
	 * console.log(ent.linetype)
	 * \`\`\`
	 */
	set linetype(val: string);
	/**
	 * 得到对象线型比例
	 */
	get linetypeScale(): number;
	/**
	 * 设置对象线型比例
	 * @param val 线型比例
	 * @example
	 * \`\`\`ts
	 * import { McDbEntity } from 'mxcad'
	 * const ent = new McDbEntity()
	 * ent.linetypeScale = 0.8;
	 * console.log(ent.linetypeScale)
	 * \`\`\`
	 */
	set linetypeScale(val: number);
	/**
	 * 对象是否可见
	 */
	get visible(): boolean;
	/**
	 * 设置是否可见
	 * @param val 布尔值
	 * @example
	 * \`\`\`ts
	 * import { McDbEntity } from 'mxcad'
	 * const ent = new McDbEntity()
	 * ent.visible = true;
	 * console.log(ent.visible)
	 * \`\`\`
	 */
	set visible(val: boolean);
	/**
	 * 得到对象线重
	 */
	get lineweight(): number;
	/**
	 * 设置对象线重
	 * @param val 线重
	 * @example
	 * \`\`\`ts
	 * import { McDbEntity } from 'mxcad'
	 * const ent = new McDbEntity()
	 * ent.lineweight = 20;
	 * console.log(ent.lineweight)
	 * \`\`\`
	 */
	set lineweight(val: number);
	/**
	 * 得到对象文字样式
	 */
	get textStyle(): string;
	/**
	 * 设置对象文字样式
	 * @param val 文字样式名
	 * @example
	 * \`\`\`ts
	 * import { McDbEntity } from 'mxcad'
	 * const ent = new McDbEntity()
	 * ent.textStyle = "st_style";
	 * \`\`\`
	 */
	set textStyle(val: string);
	/**
	 * 设置对象是否高亮
	 * @param isHighlight 是否高亮
	 * @example
	 * \`\`\`ts
	 * import { McDbEntity } from 'mxcad'
	 * const ent = new McDbEntity()
	 * ent.isHighlight(true);
	 * \`\`\`
	 */
	highlight(isHighlight: boolean): void;
	/**
	 * 移动对象
	 * @param fromPoint 移动开始点
	 * @param toPoint 移动结束点
	 * @example
	 * \`\`\`ts
	 * import { McDbEntity, McGePoint3d } from 'mxcad'
	 * const ent = new McDbEntity()
	 * ent.move(new McGePoint3d(0,0,0), new McGePoint3d(20,0,0))
	 * \`\`\`
	 */
	move(fromPoint: McGePoint3d, toPoint: McGePoint3d): boolean;
	/**
	 * 旋转对象
	 * @param basePoint 旋转基点
	 * @param dRotationAngle 旋转角度
	 * @example
	 * \`\`\`ts
	 * import { McDbEntity, McGePoint3d } from 'mxcad'
	 * const ent = new McDbEntity()
	 * ent.rotate(new McGePoint3d(0,0,0), Math.PI)
	 * \`\`\`
	 */
	rotate(basePoint: McGePoint3d, dRotationAngle: number): boolean;
	/**
	 * 镜向对象
	 * @param point1 镜像基点
	 * @example
	 * \`\`\`ts
	 * import { McDbEntity, McGePoint3d } from 'mxcad'
	 * const ent = new McDbEntity()
	 * ent.mirror(new McGePoint3d(0,0,0), new McGePoint3d(20,10,0))
	 * \`\`\`
	 */
	mirror(point1: McGePoint3d, point2: McGePoint3d): boolean;
	/**
	 * 缩放对象
	 * @param basePoint 缩放基点
	 * @param dScaleFactor 缩放因子（<1 缩小； >1 放大）
	 * @example
	 * \`\`\`ts
	 * import { McDbEntity, McGePoint3d } from 'mxcad'
	 * const ent = new McDbEntity()
	 * ent.scaleEntity(new McGePoint3d(0,0,0), 0.5)
	 * \`\`\`
	 */
	scaleEntity(basePoint: McGePoint3d, dScaleFactor: number): boolean;
	/**
	 * 变换对象
	 * @param transformationMatrix 变换矩阵
	 * @example
	 * \`\`\`ts
	 * import { McGeMatrix3d, McDbEntity, McGeVector3d} from 'mxcad'
	 *  const ent = new McDbEntity()
		let matrix = new McGeMatrix3d();
		matrix.setToTranslation(new McGeVector3d(20,0,0));//平移
		ent.transformBy(matrix);
	 * \`\`\`
	 */
	transformBy(transformationMatrix: McGeMatrix3d): boolean;
	/**
	 * 得到对象的最小外包
	 * @param minPt 实例对象的最小点
	 * @param maxPt 实例对象的最大点
	 * @param ret 是否获取成功
	 * @example
	 * \`\`\`ts
	 * import { McDbText, McGePoint3d } from 'mxcad'
	 * const text = new McDbText();
	 * text.textString = "测试Test";
	   text.height = 20;
	   text.position = text.alignmentPoint = new McGePoint3d(0,0,0);
	 * const { minPt, maxPt, ret } = text.getBoundingBox()
	 * \`\`\`
	 */
	getBoundingBox(): {
		minPt: McGePoint3d;
		maxPt: McGePoint3d;
		ret: boolean;
	};
	/**
   * 得到对象的扩展数据
   * @param appName XData 类型
   */
	getxData(appName?: string): MxCADResbuf;
	/**
	 *设置对象的扩展数据
	  @param xdata resbuf 数据
	 */
	setxData(xdata: MxCADResbuf): boolean;
	/**
	 * 获取与特定实体关联的 XData 信息，并以字符串形式返回
	 * @param appName XData 类型
	 * @returns { object } val XData信息 | ret 是否返回成功
	 */
	getxDataString(appName: string): {
		val: string;
		ret: boolean;
	};
	/**
	 * 设置与特定实体关联的 XData 信息，并以字符串形式设置
	 * @param appName XData 类型
	 * @param val XData信息
	 * @returns 是否设置成功
	 */
	setxDataString(appName: string, val: string): boolean;
	/**
	 * 获取或设置实体的指定 XData 类型中的 double 值
	 * @param appName XData 类型
	 * @returns double 值
	 */
	getxDataDouble(appName: string): {
		val: number;
		ret: boolean;
	};
	setxDataDouble(appName: string, val: number): boolean;
	/**
	 * 获取或设置实体的指定 XData 类型中的 long（整数）值
	 *  @param appName XData 类型
	 * @returns long 值
	 */
	getxDataLong(appName: string): {
		val: number;
		ret: boolean;
	};
	setxDataLong(appName: string, val: number): boolean;
	/**
	 * 获取或设置实体的指定 XData 类型中的点对象
	 * @param appName XData 类型
	 */
	getxDataPoint(appName: string): {
		val: McGePoint3d;
		ret: boolean;
	};
	setxDataPoint(appName: string, val: McGePoint3d): boolean;
	/**
	 * 删除实体的指定 XData 类型中的点（McGePoint3d）值
	 * @param appName XData 类型
	 */
	deleteXData(appName: string): boolean;
	/** 获取实体中包含的所有 XData 记录的应用程序名（AppName） */
	getAllAppName(): McGeStringArray;
	/** 图层ID对象 */
	get layerId(): McObjectId;
	set layerId(id: McObjectId);
	/** 线型ID对象 */
	get linetypeId(): McObjectId;
	set linetypeId(id: McObjectId);
	/** 文字样式ID对象 */
	get textStyleId(): McObjectId;
	set textStyleId(id: McObjectId);
	/** 与其他实体相交, 得到交点
	* @param intersectObject 需要相交的是实体对象
	* @param exOption 相交的选项
	* @returns 得到所有交点
	* @example
	* \`\`\`ts
	* import { McDbLine, McDb } from 'mxcad'
	* const line1 = new McDbLine(new McGePoint3d(0,0,0), new McGePoint3d(20,1,0));
	* const line2 = new McDbLine(new McGePoint3d(10,10,0), new McGePoint3d(11,1,0));
	* const ptArr = line1.IntersectWith(line2, McDb.Intersect.kExtendBoth)
	* \`\`\`
	*  */
	IntersectWith(intersectObject: McDbEntity, exOption: McDb.Intersect): McGePoint3dArray;
	/**
	 * 计算面积
	 * @returns { object } val 面积值 | ret 是否获取成功
	 */
	getArea(): {
		val: number;
		ret: boolean;
	};
	/**
	 * 禁用对象的自动更新显示.
	 * @param isDisable 是否禁用对象自动更新显示
	 * @example
	* \`\`\`ts
	* import { McDbLine } from 'mxcad'
	* const line1 = new McDbLine(new McGePoint3d(0,0,0), new McGePoint3d(20,1,0));
	* line1.disableDisplay(true)
	* \`\`\`
	 */
	disableDisplay(isDisable: boolean): void;
	/**
   * 显示调用对象更新显示.
   */
	updateDisplay(): void;
	/**
	 * 同步实体的数据。这个方法可能是在修改了实体的属性或者附加了新的数据之后调用的，以确保所有的改变都被正确地保存到实体的数据库记录中。
	 * @param _toCpp 是否同步数据
	 */
	syncData(_toCpp?: boolean): boolean;
	/**
	* 对象的显示顺序
	*/
	get drawOrder(): number;
	/**
	* 对象的显示顺序
	* @param order 顺序值
	*/
	set drawOrder(order: number);
}
/**
 * 表示数据库曲线。实现了曲线的相关操作，如求曲线的长度，最近点，面积，曲线上任一点在曲线上的长度 切向方向，曲线交点，坐标变换，打断，偏移，离散等功能。
 */
export declare class McDbCurve extends McDbEntity {
	/**
	 * 构造函数。
	 * @param imp 内部实现对象。
	 */
	constructor(imp?: any);
	/**
	 * 获取起始参数。
	 * @returns 起始参数及执行结果。
	 */
	getStartParam(): {
		val: number;
		ret: boolean;
	};
	/**
	 * 获取结束参数。
	 * @returns 结束参数及执行结果。
	 */
	getEndParam(): {
		val: number;
		ret: boolean;
	};
	/**
	 * 获取参数位置上的距离。
	 * @param param 参数位置。
	 * @returns 距离及执行结果。
	 */
	getDistAtParam(param: number): {
		val: number;
		ret: boolean;
	};
	/**
	 * 获取距离位置上的参数。
	 * @param dist 距离位置。
	 * @returns 参数及执行结果。
	 */
	getParamAtDist(dist: number): {
		val: number;
		ret: boolean;
	};
	/**
	 * 获取曲线上点的距离位置。
	 * @param pt 距离位置。
	 * @returns 点及执行结果。
	 */
	getDistAtPoint(pt: McGePoint3d): {
		val: number;
		ret: boolean;
	};
	/**
	 * 获取距离位置上的点。
	 * @param dist 距离位置。
	 * @returns 点及执行结果。
	 */
	getPointAtDist(dist: number): {
		val: McGePoint3d;
		ret: boolean;
	};
	/**
	 * 得到曲线的开始点
	 * @returns 曲线的开始点及执行结果。
	 */
	getStartPoint(): {
		val: McGePoint3d;
		ret: boolean;
	};
	/**
	 * 得到曲线的结束点
	 * @returns 曲线的结束点及执行结果。
	 */
	getEndPoint(): {
		val: McGePoint3d;
		ret: boolean;
	};
	/**
	 * 得到曲线参数所在的点坐标
	 * @param param 曲线参数
	 * @returns 点对象及执行结果。
	 */
	getPointAtParam(param: number): {
		val: McGePoint3d;
		ret: boolean;
	};
	/**
	 * 得到曲线某点位置的曲线参数
	 * @param pt 曲线上的点
	 * @returns 曲线参数及执行结果。
	 */
	getParamAtPoint(pt: McGePoint3d): {
		val: number;
		ret: boolean;
	};
	/**
	 * 通过曲线参数得到曲线的一阶导数
	 * @param param 曲线参数
	 * @returns 曲线一阶导数及执行结果。
	 */
	getFirstDerivFromParam(param: number): {
		val: McGeVector3d;
		ret: boolean;
	};
	/**
	 * 通过曲线上某点得到曲线的一阶导数
	 * @param pt 曲线上的点
	 * @returns 曲线一阶导数及执行结果。
	 */
	getFirstDeriv(pt: McGePoint3d): {
		val: McGeVector3d;
		ret: boolean;
	};
	/**
	 * 得到一个点到曲线的最近点
	 * @param givenPnt 参考点
	 * @param isExtend 是否延展实体
	 * @returns 点对象及执行结果。
	 */
	getClosestPointTo(givenPnt: McGePoint3d, isExtend: boolean): {
		val: McGePoint3d;
		ret: boolean;
	};
	/**
	 * 得到偏移曲线
	 * @param dOffsetDist 偏移距离
	 * @param ptOffsetRef 偏移点
	 * @returns 偏移后的对象数组。
	 * @example
	 * \`\`\`ts
	 * import { MxCADUiPrPoint, MxCpp } from 'mxcad'
		let getFristPoint = new MxCADUiPrPoint();
		let offsetDist = 10 ;
		let getEvent = new MxCADUiPrEntity();
		getEvent.setMessage('指定偏移对象');
		let event_id = await getEvent.go();
		if (!event_id) return;
		let event = (await event_id.getMcDbEntity()) as McDbCurve;
		let getoOffPt = new MxCADUiPrPoint();
		getoOffPt.setMessage('指定偏移点');
		let offPt = await getoOffPt.go();
		if (!offPt) return;
		let objArr = event.offsetCurves(offsetDist, offPt);
		if (objArr.length() === 0) return;
		objArr.forEach((obj: McDbObject) => {
			MxCpp.getCurrentCAD().drawEntity(obj as McDbEntity);
		});
	 * \`\`\`
	 */
	offsetCurves(dOffsetDist: number, ptOffsetRef: McGePoint3d): McDbObjectArray;
	/**
	 * 打断曲线
	 * @param pts 断点数组
	 * @returns 打断后的曲线数组。
	 * @example
	 * \`\`\`ts
	 * import { MxCpp } from "mxcad"
	 * // PointsArr:断点数组 event:McDbCurve
		event.splitCurves(PointsArr).forEach((e:McDbCurve, index:number) => {
			if(index % 2 === 0){
				MxCpp.getCurrentCAD().drawEntity(e as McDbEntity)
			}
		})
	 * \`\`\`
	 */
	splitCurves(pts: McGePoint3d[]): McDbObjectArray;
	/**
	 * 根据曲线参数打断曲线
	 * @param params 曲线参数数组
	 * @returns 打断后的曲线数组。
	 */
	splitCurvesFromParam(params: number[]): McDbObjectArray;
	/**
	 * 把曲线离散成一堆点
	 * @param dApproxEps 采样间隔
	 * @returns resbuf 数据
	 */
	getSamplePoints(dApproxEps: number): MxCADResbuf;
	/**
	 * 得到曲线长度
	 * @returns
	 * @example
	 * \`\`\`ts
	 * import { MxCpp, MxCADResbuf, MxCADUtility, MxCADUiPrPoint} from "mxcad"
	
	 *  const mxcad = MxCpp.App.getCurrentMxCAD();
		let filter = new MxCADResbuf();
		filter.AddMcDbEntityTypes("CIRCLE,ARC,LINE,LWPOLYLINE,ELLIPSE");
		let aryId = await MxCADUtility.userSelect("选择目标曲线", filter);
		if (aryId.length == 0)  return;
		aryId.forEach(async (id) => {
			let event = id.getMcDbEntity() as McDbCurve;
			let length = event.getLength().val;
			console.log(length)
		});
	 * \`\`\`
	 */
	getLength(): {
		val: number;
		ret: boolean;
	};
}
/**
 * 表示一个直线对象。
 * @example
 * \`\`\`ts
 * //绘直线 pt1,pt2是直线的两个点
 * import { MxCpp, McDbLine } from "mxcad"'
 *
 * const line = new McDbLine();
 * line.startPoint = pt1;
 * line.endPoint = pt2;
 * MxCpp.getCurrentMxCAD().drawEntity(line);
 * \`\`\`
 */
export declare class McDbLine extends McDbCurve {
	/**
	 * 构造函数。
	 * @param imp C++ 实现对象。
	 */
	constructor(x1?: object | number, y1?: object | number, z1?: number, x2?: number, y2?: number, z2?: number);
	/**
	 * 获取起点。
	 */
	get startPoint(): McGePoint3d;
	/**
	 * 设置起点。
	 * @param pt 新的起点。
	 */
	set startPoint(pt: McGePoint3d);
	/**
	 * 获取终点。
	 */
	get endPoint(): McGePoint3d;
	/**
	 * 设置终点。
	 * @param pt 新的终点。
	 */
	set endPoint(pt: McGePoint3d);
}
/**
 * 表示一个 CAD 文字实体。
 * @example
 * \`\`\`ts
 * //绘垂直中间对齐的文字 pt(McGePoint3d) 文字位置点
 * import { MxCpp, McDbText } from "mxcad"
 *
 * const text = new McDbText();
 * text.textString = "测试文字";
 * text.horizontalMode = McDb.TextHorzMode.kTextMid;
 * text.alignmentPoint = text.position = pt;
 * MxCpp.getCurrentMxCAD().drawEntity(text);
 *
 * \`\`\`
 */
export declare class McDbText extends McDbEntity {
	/**
	 * 构造函数。
	 * @param imp 实现对象。
	 */
	constructor(imp?: any);
	/**
	 * 获取或设置文字的位置。
	 */
	get position(): McGePoint3d;
	set position(pt: McGePoint3d);
	/**
	 * 获取或设置文字的对齐点。
	 */
	get alignmentPoint(): McGePoint3d;
	set alignmentPoint(pt: McGePoint3d);
	/**
	 * 获取或设置文字的倾斜角度。
	 */
	get oblique(): number;
	set oblique(val: number);
	/**
	 * 获取或设置文字的旋转角度。
	 */
	get rotation(): number;
	set rotation(pt: number);
	/**
	 * 获取或设置文字的高度。
	 */
	get height(): number;
	set height(val: number);
	/**
	 * 获取或设置文字的宽度因子。
	 */
	get widthFactor(): number;
	set widthFactor(val: number);
	/**
	 * 获取或设置文字的字符串。
	 */
	get textString(): string;
	set textString(val: string);
	/**
	 * 获取或设置文字的水平对齐方式。
	 */
	get horizontalMode(): McDb.TextHorzMode;
	set horizontalMode(val: McDb.TextHorzMode);
	/**
	 * 获取或设置文字的垂直对齐方式。
	 */
	get verticalMode(): McDb.TextVertMode;
	set verticalMode(val: McDb.TextVertMode);
}
/**
 * 块引用中的属性定义文字类
 * @example
 * \`\`\`ts
 * import { McDbBlockReference, McDbAttribute } from "mxcad"
 *
 * // 遍历块中的属性文字 ent:块实体
 *  let blkRef: McDbBlockReference = ent;
	let aryId = blkRef.getAllAttribute();
	aryId.forEach((id) => {
		let attribt: McDbAttribute = id.getMcDbEntity() as any;
		console.log(attribt.textString);
		console.log(attribt.tag);
	})
 * \`\`\`
 */
export declare class McDbAttribute extends McDbText {
	/**
	 * 构造函数。
	 * @param imp 实现对象。
	 */
	constructor(imp?: any);
	/**
	* 获取或设置文字的字符串。
	*/
	get tag(): string;
	set tag(val: string);
	/**
	* 是否可见
	*/
	get isInvisible(): boolean;
	set isInvisible(val: boolean);
}
/**
 * 块引用属性定义文字对象
 * @example
 * \`\`\`ts
 * import { McDbAttributeDefinition, McDbBlockReference, McDbAttribute } from "mxcad"
 *
 *  // 在块中插入属性文字 ent:块实体
	let blkRef: McDbBlockReference = ent;
	const blkrecId = blkRef.blockTableRecordId
	let blkRecord: any = blkrecId.getMcDbBlockTableRecord();
	let ids = blkRecord.getAllEntityId();
	ids.forEach((id: any, index: any) => {
	if (!id.isKindOf("McDbAttributeDefinition")) return;
	let attribDef = id.getMcDbEntity() as McDbAttributeDefinition;
	let tag = attribDef.tag;
	let txt = attribDef.textString;

	let attrib = new McDbAttribute();
	attrib.position = attribDef.position;
	attrib.alignmentPoint = attribDef.alignmentPoint
	attrib.height = attribDef.height
	attrib.trueColor = attribDef.trueColor
	attrib.widthFactor = attribDef.widthFactor
	if (txt.length > 0) attrib.textString = txt;
	else attrib.textString = "test" + index;
	attrib.tag = tag;
	attrib.isInvisible = attribDef.isInvisible;
	attrib.transformBy(blkRef.blockTransform);
	attrib = blkRef.appendAttribute(attrib).getMcDbEntity() as McDbAttribute;
	attrib.textStyle = attribDef.textStyle
	attrib.layer = attribDef.layer
  })
 * \`\`\`
*/
export declare class McDbAttributeDefinition extends McDbText {
	/**
	 * 构造函数。
	 * @param imp 实现对象。
	 */
	constructor(imp?: any);
	/**
	* 获取或设置文字的字符串。
	*/
	get tag(): string;
	set tag(val: string);
	/**
	* 是否可见
	*/
	get isInvisible(): boolean;
	set isInvisible(val: boolean);
	/** 插入块实例时，用于提示用户输入值的文本 */
	get prompt(): string;
	set prompt(val: string);
	/** 指示属性是否是常量 */
	get isConstant(): boolean;
	set isConstant(val: boolean);
	/** 属性是否可验证 */
	get isVerifiable(): boolean;
	set isVerifiable(val: boolean);
	/** 属性是否预设 */
	get isPreset(): boolean;
	set isPreset(val: boolean);
}
/**
 * 多行文本实体类
 * @example
 * \`\`\`ts
 * import { McDbMText, MxCpp } from 'mxcad'
 * // 绘制多行文本
 *  const mText = new McDbMText();
	mText.textHeight = 10;
	mText.attachment = McDb.AttachmentPoint.kMiddleLeft;
	mText.contents = '控件：\\\\P 多行文本';
	mText.location = new McGePoint3d(0,0,0);
	MxCpp.getCurrentMxCAD().drawEntity(mText);
 * \`\`\`
 */
export declare class McDbMText extends McDbEntity {
	/**
	 * 构造函数
	 * @param imp 实现对象
	 */
	constructor(imp?: any);
	/**
	 * 获取位置
	 * @returns 位置点
	 */
	get location(): McGePoint3d;
	/**
	 * 设置位置
	 * @param pt 位置点
	 */
	set location(pt: McGePoint3d);
	/**
	 * 获取旋转角度
	 * @returns 旋转角度
	 */
	get rotation(): number;
	/**
	 * 设置旋转角度
	 * @param val 旋转角度
	 */
	set rotation(val: number);
	/**
	 * 获取宽度
	 * @returns 宽度
	 */
	get width(): number;
	/**
	 * 设置宽度
	 * @param val 宽度
	 */
	set width(val: number);
	/**
	 * 获取文本高度
	 * @returns 文本高度
	 */
	get textHeight(): number;
	/**
	 * 设置文本高度
	 * @param val 文本高度
	 */
	set textHeight(val: number);
	/**
	 * 获取附着点
	 * @returns 附着点
	 */
	get attachment(): McDb.AttachmentPoint;
	/**
	 * 设置附着点
	 * @param val 附着点
	 */
	set attachment(val: McDb.AttachmentPoint);
	/**
	 * 获取文本内容
	 * @returns 文本内容
	 */
	get contents(): string;
	/**
	 * 设置文本内容
	 * @param val 文本内容
	 */
	set contents(val: string);
}
/**
 * 表示圆实体类。
 * @example
 * \`\`\`ts
 * import { McDbCircle, MxCpp } from 'mxcad'
 *
 * //绘制一个圆心在原点，半径为20的圆
 * const circle = new McDbCircle(new McGePoint3d(0,0,0), 20);
 * MxCpp.getCurrentMxCAD().drawEntity(circle);
 *
 * \`\`\`
 */
export declare class McDbCircle extends McDbCurve {
	/**
	 * 构造函数。
	 * @param imp 内部对象。
	 */
	constructor(x?: object | number, y?: number, z?: number, radius?: number);
	/**
	 * 设置圆心坐标。
	 * @param x 圆心 x 坐标。
	 * @param y 圆心 y 坐标。
	 * @param z 圆心 z 坐标。
	 */
	setCenter(x: number, y: number, z?: number): void;
	/**
	 * 获取圆心坐标。
	 */
	get center(): McGePoint3d;
	/**
	 * 设置圆心坐标。
	 * @param pt 圆心坐标。
	 */
	set center(pt: McGePoint3d);
	/**
	 * 获取圆半径。
	 */
	get radius(): number;
	/**
	 * 设置圆半径。
	 * @param r 圆半径。
	 */
	set radius(r: number);
}
/**
 * 多段线类
 * @example
 * \`\`\`ts
 * import { McDbPolyline, MxCpp } from 'mxcad'
 * //绘制线宽为10的矩形，pt1,pt2,pt3,pt4为矩形的4点个顶点
 * const pl = new McDbPolyline();
 * pl.constantWidth = 10;
 * pl.addVertexAt(pt1);
 * pl.addVertexAt(pt2);
 * pl.addVertexAt(pt3);
 * pl.addVertexAt(pt4);
 * pl.isClosed = true;
 * MxCpp.getCurrentMxCAD().drawEntity(pl);
 * \`\`\`
 */
export declare class McDbPolyline extends McDbCurve {
	/**
	 * 构造函数
	 * @param imp 实现对象
	 */
	constructor(imp?: any);
	/**
	 * 获取是否闭合
	 */
	get isClosed(): boolean;
	/**
	 * 设置是否闭合
	 * @param val 是否闭合
	 */
	set isClosed(val: boolean);
	/**
	 * 获取常量宽度
	 */
	get constantWidth(): number;
	/**
	 * 设置常量宽度
	 * @param val 常量宽度
	 */
	set constantWidth(val: number);
	/**
	 * 在指定位置添加顶点
	 * @param index 位置
	 * @param pt 点
	 * @param bulge 凸度
	 * @param startWidth 起始宽度
	 * @param endWidth 结束宽度
	 */
	addVertexAt(pt: McGePoint3d | THREE.Vector3, bulge?: number, startWidth?: number, endWidth?: number, index?: number): boolean;
	/**
	 * 移除指定位置的顶点
	 * @param index 位置
	 */
	removeVertexAt(index: number): boolean;
	/**
	 * 获取顶点数量
	 */
	numVerts(): number;
	/**
	 * 获取指定位置的点
	 * @param index 位置
	 * @returns val: 点, ret: 返回值
	 */
	getPointAt(index: number): {
		val: McGePoint3d;
		ret: number;
	};
	/**
	 * 获取指定位置的凸度
	 * @param index 位置
	 */
	getBulgeAt(index: number): number;
	/**
	 * 获取指定位置的起始和结束宽度
	 * @param index 位置
	 * @returns val1: 起始宽度, val2: 结束宽度, ret: 返回值
	 */
	getWidthsAt(index: number): {
		val1: number;
		val2: number;
		ret: boolean;
	};
	/**
	 * 设置指定位置的点
	 * @param index 位置
	 * @param pt 点
	 */
	setPointAt(index: number, pt: McGePoint3d): boolean;
	/**
	 * 设置指定位置的凸度
	 * @param index 位置
	 * @param bulge 凸度
	 */
	setBulgeAt(index: number, bulge: number): boolean;
	/**
   * 修改线段的开始宽度，和结束宽度
   * @param index 位置
   * @param bulge 凸度
   */
	setWidthsAt(index: number, dStartWdith: number, dEntWdith: number): boolean;
	/**
	 * 设置多线段类型
	 */
	getType(): McDb.PolylineType;
	/**
   * 返回多线段类型
   */
	setType(type: McDb.PolylineType): boolean;
}
/**
 * 表示一个 CAD 图块引用实体，一个块参考用于放置、缩放和显示它参考的McDbBlockTableRecord中的一个实体集合的实例
 */
export declare class McDbBlockReference extends McDbEntity {
	/**
	 * 初始化一个新的 McDbBlockReference 实例。
	 * @param imp 可选，用于初始化实例的 C++ 对象。
	 */
	constructor(imp?: any);
	/**
	 * 获取或设置该实体所引用的图块的 ID。
	 */
	get blockTableRecordId(): McObjectId;
	set blockTableRecordId(val: McObjectId);
	/**
	 * 获取或设置该实体的位置。
	 */
	get position(): McGePoint3d;
	set position(pt: McGePoint3d);
	/**
	 * 获取或设置该实体的缩放因子。
	 */
	get scaleFactors(): McGePoint3d;
	set scaleFactors(val: McGePoint3d);
	setScale(val: number): void;
	getScale(): number;
	/**
	 * 获取或设置该实体的旋转角度。
	 */
	get rotation(): number;
	set rotation(val: number);
	/**
	 * 获取或设置该实体所引用的图块的变换矩阵。
	 */
	get blockTransform(): McGeMatrix3d;
	set blockTransform(val: McGeMatrix3d);
	/**
   * 获取块名
   * @returns 块名
   */
	get blockName(): string;
	/**
   * 添加属性文字对象
   * @returns 块名
   */
	appendAttribute(attrib: McDbAttribute): McObjectId;
	/**
  * 得到块引用的所有属性文字对象id
  * @returns 块名
  */
	getAllAttribute(): McObjectId[];
	/**
   * 通过块表记录中的属性定义创建属性文字对象
   */
	createAttribute(): boolean;
}
/**
 * 表示AutoCAD中所有标注实体类型的类的基类
 */
export declare class McDbDimension extends McDbEntity {
	/**
	 * 构造函数
	 * @param imp 实现对象
	 */
	constructor(imp?: any);
	/**
	 * 获取文本位置
	 * @returns 文本位置
	 */
	get textPosition(): McGePoint3d;
	/**
	 * 设置文本位置
	 * @param pt 文本位置
	 */
	set textPosition(pt: McGePoint3d);
	/**
	 * 是否使用默认文本位置
	 * @returns 是否使用默认文本位置
	 */
	isUsingDefaultTextPosition(): boolean;
	/**
	 * 使用设置的文本位置
	 */
	useSetTextPosition(): void;
	/**
	 * 使用默认文本位置
	 */
	useDefaultTextPosition(): void;
	/**
	 * 获取高度
	 * @returns 高度
	 */
	get elevation(): number;
	/**
	 * 设置高度
	 * @param val 高度
	 */
	set elevation(val: number);
	/**
	 * 获取标注文本
	 * @returns 标注文本
	 */
	get dimensionText(): string;
	/**
	 * 设置标注文本
	 * @param val 标注文本
	 */
	set dimensionText(val: string);
	/**
	 * 获取文本旋转角度
	 * @returns 文本旋转角度
	 */
	get textRotation(): number;
	/**
	 * 设置文本旋转角度
	 * @param val 文本旋转角度
	 */
	set textRotation(val: number);
	/**
	 * 获取标注样式
	 * @returns 标注样式
	 */
	get dimensionStyle(): McObjectId;
	/**
	 * 设置标注样式
	 * @param val 标注样式
	 */
	set dimensionStyle(val: McObjectId);
	/**
	 * 获取文本附着点
	 * @returns 文本附着点
	 */
	get textAttachment(): McDb.AttachmentPoint;
	/**
	 * 设置文本附着点
	 * @param val 文本附着点
	 */
	set textAttachment(val: McDb.AttachmentPoint);
	/**
	 * 获取水平旋转角度
	 * @returns 水平旋转角度
	 */
	get horizontalRotation(): number;
	/**
	 * 设置水平旋转角度
	 * @param val 水平旋转角度
	 */
	set horizontalRotation(val: number);
	/**
	 * 重新计算标注块
	 */
	recomputeDimBlock(): void;
	/**
	 * 获取标注变量整数值
	 * @param iType 标注变量类型
	 * @returns 标注变量整数值
	 */
	getDimVarInt(iType: number): number;
	/**
	 * 设置标注变量整数值
	 * @param iType 标注变量类型
	 * @param val 标注变量整数值
	 */
	setDimVarInt(iType: number, val: number): void;
	/**
	 * 获取标注变量浮点数值
	 * @param iType 标注变量类型
	 * @returns 标注变量浮点数值
	 */
	getDimVarDouble(iType: number): number;
	/**
	 * 设置标注变量浮点数值
	 * @param iType 标注变量类型
	 * @param val 标注变量浮点数值
	 */
	setDimVarDouble(iType: number, val: number): void;
	/**
	 * 获取标注变量字符串值
	 * @param iType 标注变量类型
	 * @returns 标注变量字符串值
	 */
	getDimVarString(iType: number): string;
	/**
	 * 设置标注变量字符串值
	 * @param iType 标注变量类型
	 * @param val 标注变量字符串值
	 */
	setDimVarString(iType: number, val: string): void;
	/**
	 * 获取标注变量对象 ID
	 * @param iType 标注变量类型
	 * @returns 标注变量对象 ID
	 */
	getDimVarObjectId(iType: number): McObjectId;
	/**
	 * 设置标注变量对象 ID
	 * @param iType 标注变量类型
	 * @param val 标注变量对象 ID
	 */
	setDimVarObjectId(iType: number, val: McObjectId): void;
	/**
	 * 得到标注对象中的所有文字内容
	 */
	GetAllText(): McGeStringArray;
}
/**
 * 对齐标注尺寸类。
 * @example
 * \`\`\`ts
 * import { McDbAlignedDimension, MxCpp } from "mxcad"
 *
 * //绘制对齐标注
 *  const mDimension = new McDbAlignedDimension()
	mDimension.xLine1Point = new McGePoint3d(-1800, 800)
	mDimension.xLine2Point = new McGePoint3d(1800,800)
	mDimension.dimLinePoint = new McGePoint3d(800, 500)
	mDimension.textAttachment = McDb.AttachmentPoint.kTopLeft
	mDimension.trueColor = new McCmColor(200, 255, 0)
	mDimension.oblique = 0
	MxCpp.getCurrentMxCAD().drawEntity(mDimension);
 * \`\`\`
 */
export declare class McDbAlignedDimension extends McDbDimension {
	/**
	 * 构造函数
	 * @param imp 内部实现对象
	 */
	constructor(imp?: any);
	/**
	 * 获取第一条线的端点
	 * @returns 第一条线的端点
	 */
	get xLine1Point(): McGePoint3d;
	/**
	 * 设置第一条线的端点
	 * @param pt 第一条线的端点
	 */
	set xLine1Point(pt: McGePoint3d);
	/**
	 * 获取第二条线的端点
	 * @returns 第二条线的端点
	 */
	get xLine2Point(): McGePoint3d;
	/**
	 * 设置第二条线的端点
	 * @param pt 第二条线的端点
	 */
	set xLine2Point(pt: McGePoint3d);
	/**
	 * 获取标注线的端点
	 * @returns 标注线的端点
	 */
	get dimLinePoint(): McGePoint3d;
	/**
	 * 设置标注线的端点
	 * @param pt 标注线的端点
	 */
	set dimLinePoint(pt: McGePoint3d);
	/**
	 * 获取倾斜角度
	 * @returns 倾斜角度
	 */
	get oblique(): number;
	/**
	 * 设置倾斜角度
	 * @param val 倾斜角度
	 */
	set oblique(val: number);
}
/**
 * 旋转标注尺寸类。
 *  * @example
 * \`\`\`ts
 * import { McDbRotatedDimension, MxCpp } from "mxcad"
 *
 * //旋转标注
	const rDimension = new McDbRotatedDimension()
	rDimension.xLine1Point = new McGePoint3d(-1800, -800)
	rDimension.xLine2Point = new McGePoint3d(1800, -800)
	rDimension.dimLinePoint = new McGePoint3d(-800, -500)
	rDimension.textAttachment = McDb.AttachmentPoint.kTopLeft
	rDimension.textRotation = 0.6
	rDimension.trueColor = new McCmColor(200, 255, 0)
	rDimension.oblique = 0
	rDimension.rotation = 0
	rDimension.dimensionText = "标注文本"
	MxCpp.getCurrentMxCAD().drawEntity(rDimension);
 * \`\`\`
 */
export declare class McDbRotatedDimension extends McDbDimension {
	constructor(imp?: any);
	/**
	 * 获取第一条线的端点
	 * @returns 第一条线的端点
	 */
	get xLine1Point(): McGePoint3d;
	/**
	 * 设置第一条线的端点
	 * @param pt 第一条线的端点
	 */
	set xLine1Point(pt: McGePoint3d);
	/**
	 * 获取第二条线的端点
	 * @returns 第二条线的端点
	 */
	get xLine2Point(): McGePoint3d;
	/**
	 * 设置第二条线的端点
	 * @param pt 第二条线的端点
	 */
	set xLine2Point(pt: McGePoint3d);
	/**
	 * 获取标注线的端点
	 * @returns 标注线的端点
	 */
	get dimLinePoint(): McGePoint3d;
	/**
	 * 设置标注线的端点
	 * @param pt 标注线的端点
	 */
	set dimLinePoint(pt: McGePoint3d);
	/**
	 * 获取倾斜角度
	 * @returns 倾斜角度
	 */
	get oblique(): number;
	/**
	 * 设置倾斜角度
	 * @param val 倾斜角度
	 */
	set oblique(val: number);
	/**
	 * 获取旋转角度
	 * @returns 旋转角度
	 */
	get rotation(): number;
	/**
	 * 设置旋转角度
	 * @param val 旋转角度
	 */
	set rotation(val: number);
}
/**
 * 表示一个圆弧。
 * @example
 * \`\`\`ts
 * import { McDbArc, MxCpp } from "mxcad"
   // 绘制圆弧
	const arc = new McDbArc()
	arc.center = new McGePoint3d(0,0,0),
	arc.radius = 20
	arc.startAngle = Math.PI / 2
	arc.endAngle = Math.PI * 3 / 2
	arc.trueColor = new McCmColor(255, 233, 0)
	MxCpp.getCurrentMxCAD().drawEntity(arc)
 * \`\`\`
 */
export declare class McDbArc extends McDbCurve {
	/**
	 * 构造函数。
	 * @param imp 内部对象。
	 */
	constructor(imp?: any);
	/**
	 * 设置圆心坐标。
	 * @param x 圆心 x 坐标。
	 * @param y 圆心 y 坐标。
	 * @param z 圆心 z 坐标。
	 */
	setCenter(x: number, y: number, z?: number): void;
	/**
	 * 获取圆心坐标。
	 */
	get center(): McGePoint3d;
	/**
	 * 设置圆心坐标。
	 * @param pt 圆心坐标。
	 */
	set center(pt: McGePoint3d);
	/**
	 * 获取圆半径。
	 */
	get radius(): number;
	/**
	 * 设置圆半径。
	 * @param r 圆半径。
	 */
	set radius(r: number);
	/**
	 * 获取开始角度。
	 */
	get startAngle(): number;
	/**
	 * 设置开始角度。
	 * @param r 角度。
	 */
	set startAngle(r: number);
	/**
	 * 获取结束角度。
	 */
	get endAngle(): number;
	/**
	 * 设置结束角度。
	 * @param r 角度。
	 */
	set endAngle(r: number);
	/**
	 * 3点计算圆弧
	 */
	computeArc(dStartPointX: number, dStartPointY: number, dMidPointX: number, dMidPointY: number, dEndPointX: number, dEndPointY: number): boolean;
}
/**
 * 表示椭圆椭圆弧实体。它包含了创建、修改了获取椭圆椭圆弧属性的方法。
 * @example
 * \`\`\`ts
 * import { McDbEllipse, MxCpp } from "mxcad"
 * //绘制椭圆弧
	const ellipse_arc = new McDbEllipse()
	ellipse_arc.center = new McGePoint3d(-380, -200),
	ellipse_arc.majorAxis = new McGeVector3d(0, 150, 0)
	ellipse_arc.minorAxis = new McGeVector3d(280, 0, 0)
	ellipse_arc.startAngle = Math.PI / 2
	ellipse_arc.endAngle = Math.PI * 3 / 2
	ellipse_arc.trueColor = new McCmColor(0, 255, 255)
	MxCpp.getCurrentMxCAD().drawEntity(ellipse_arc)
 *
 * \`\`\`
 */
export declare class McDbEllipse extends McDbCurve {
	/**
	 * 构造函数。
	 * @param imp 内部对象。
	 */
	constructor(cenx?: object | number, ceny?: number, cenz?: number, majorAxisx?: number, majorAxisy?: number, majorAxisz?: number, radiusRatio?: number, startAngle?: number, endAngle?: number);
	/**
	 * 设置圆心坐标。
	 * @param x 圆心 x 坐标。
	 * @param y 圆心 y 坐标。
	 * @param z 圆心 z 坐标。
	 */
	setCenter(x: number, y: number, z?: number): void;
	/**
	 * 获取圆心坐标。
	 */
	get center(): McGePoint3d;
	/**
	 * 设置圆心坐标。
	 * @param pt 圆心坐标。
	 */
	set center(pt: McGePoint3d);
	/**
	 * 设置主轴向量
	 * @param x 圆心 x 坐标。
	 * @param y 圆心 y 坐标。
	 * @param z 圆心 z 坐标。
	 */
	setMajorAxis(x: number, y: number, z?: number): void;
	/**
	 * 获取主轴向量
	 */
	get majorAxis(): McGeVector3d;
	/**
	 * 设置主轴向量。
	 */
	set majorAxis(pt: McGeVector3d);
	/**
	 * 设置副轴向量
	 * @param x 圆心 x 坐标。
	 * @param y 圆心 y 坐标。
	 * @param z 圆心 z 坐标。
	 */
	setMinorAxis(x: number, y: number, z?: number): void;
	/**
	 * 获取副轴向量
	 */
	get minorAxis(): McGeVector3d;
	/**
	 * 设置副轴向量。
	 */
	set minorAxis(pt: McGeVector3d);
	/**
	 * 获取椭圆的副轴长度与主轴长度的比值
	 */
	get radiusRatio(): number;
	/**
	 * 设置椭圆的副轴长度与主轴长度的比值
	 */
	set radiusRatio(val: number);
	/**
	 * 获取椭圆弧的开始角度
	 */
	get startAngle(): number;
	/**
	 * 设置椭圆弧的开始角度
	 */
	set startAngle(val: number);
	/**
	 * 获取椭圆弧的结束角度
	 */
	get endAngle(): number;
	/**
	 * 设置椭圆弧的结束角度
	 */
	set endAngle(val: number);
}
/**
 * 表示一个点对象。
 * @example
 * \`\`\`ts
 * //绘制一个点对象
	const point = new McDbPoint()
	const color = new McCmColor(0,255,0)
	point.trueColor = color
	point.setPosition(0, 0)
	MxCpp.getCurrentMxCAD().drawEntity(point)
 * \`\`\`
 */
export declare class McDbPoint extends McDbEntity {
	/**
	 * 构造函数。
	 * @param imp 内部对象。
	 */
	constructor(x?: object | number, y?: number, z?: number);
	/**
	 * 设置点坐标。
	 */
	setPosition(x: number, y: number, z?: number): void;
	/**
	 * 获取点坐标。
	 */
	get position(): McGePoint3d;
	/**
	 * 设置点坐标。
	 */
	set position(pt: McGePoint3d);
}
/**
 * 表示图案填充类，实现实心颜色填充和各种图案填充效果
 * @example
 * \`\`\`ts
 * import { MxCADUiPrPoint, MxCADUtility, McDbHatch, MxCpp, McDb} from "mxcad"
 * //选点填充
	const getPoint = new MxCADUiPrPoint();
	console.log("\\n指定填充区域内部一点:");
	let pt = (await getPoint.go()) as McGePoint3d;
	if (!pt) return;

	let hatch:McDbHatch = MxCADUtility.builderHatchFromPoint(pt);
	if (!hatch) {
		console.log("没有找到闭合区域\\n")
		return;
	}
	hatch.clearPatternDefinition();
	hatch.addPatternDefinition(45, 1, 1, 1, 0.25, [45, 0.17677695, 0, 0, 0.25, 0.125, -0.0625])
	hatch.setPattern(McDb.HatchPatternType.kCustomDefined, 'test')
	hatch.trueColor = new McCmColor(0, 133, 122)
	MxCpp.getCurrentMxCAD().drawEntity(hatch);
 * \`\`\`
 */
export declare class McDbHatch extends McDbEntity {
	/**
	 * 构造函数。
	 * @param imp 内部对象。
	 */
	constructor(x?: object);
	/** 闭合区域次数 */
	get numLoops(): number;
	/** 某次闭合区域索引中的类型 */
	loopTypeAt(loopIndex: number): number;
	/** 获取索引的值
	 * @param loopIndex  index 闭合区域的索引
	 * @returns { Object } ret 是否成功获取 | lootype 类型 | vertices 坐标集合 | bulges凸度集合
	 * @example
	 * \`\`\`ts
	 * import { McDbHatch } from "mxcad"
	 * const hatch = new McDbHatch()
	 * const numLoops = hatch.numLoops;
	 * for (let i = 0; i < numLoops; i++) {
	 *    const loop = hatch.getLoopAt(i);
	 *    console.log(loop)
	 * };
	 * \`\`\`
	 *  */
	getLoopAt(loopIndex: number): {
		ret: boolean;
		lootype: number;
		vertices: McGePoint3d[];
		bulges: number[];
	};
	/** 填充图案类型 */
	patternType(): number;
	/** 填充图案名称 */
	patternName(): string;
	/** 设置填充图案 */
	setPattern(type: number, patName: string): void;
	/** 填充图案角度 */
	get patternAngle(): number;
	set patternAngle(angle: number);
	/** 填充图案缩放比例 */
	get patternScale(): number;
	set patternScale(scale: number);
	/** 填充图案空间 */
	get patternSpace(): number;
	set patternSpace(space: number);
	get patternDouble(): boolean;
	set patternDouble(isDouble: boolean);
	/** 图案定义的数量 */
	get numPatternDefinitions(): number;
	/** 获取对应图案定义的数据
	 * @param index 索引
	 * @returns { Object } ret 是否成功获取 | angle 角度 | baseX, baseY 基点位置 | offsetX, offsetY 偏移位置 | aryDashes 短划线数据
	 *  */
	getPatternDefinitionAt(index: number): {
		ret: boolean;
		angle: number;
		baseX: number;
		baseY: number;
		offsetX: number;
		offsetY: number;
		aryDashes: number[];
	};
	/** 添加图案定义
	 * @param angle 角度 如 45
	 * @param baseX 基点x坐标
	 * @param baseY 基点y坐标
	 * @param offsetX 偏移x坐标
	 * @param offsetY 偏移y坐标
	 * @param dashes 短划线数据
	 * @example
	 * \`\`\`ts
	 * import { McDbHatch } from "mxcad"
	 * const hatch = new McDbHatch()
	 * hatch.addPatternDefinition(45, 0, 0, 0, 0.25, [45, 0.17677695, 0, 0, 0.25, 0.125, -0.0625])
	 * \`\`\`
	 * @returns { Boolean } 是否成功添加图案定义
	 *  */
	addPatternDefinition(angle: number, baseX: number, baseY: number, offsetX: number, offsetY: number, dashes: number[]): boolean;
	/** 清空图案定义 */
	clearPatternDefinition(): boolean;
	/** 填充样式 */
	hatchStyle(): McDb.HatchStyle;
	/** 设置填充样式 */
	setHatchStyle(val: McDb.HatchStyle): void;
	evaluateHatch(): boolean;
	/** 追加闭合区域
	 * @param loopType 闭合区域类型
	 * @param vertices 坐标集合
	 * @param bulges 凸度集合
	 *  */
	appendLoop(vertices: McGePoint3dArray, bulges?: number[], loopType?: number): boolean;
	/** 追加圆构造的闭合区域
	* @param loopType 闭合区域类型
	* @param vertices 坐标集合
	* @param bulges 凸度集合
	*  */
	appendCircleLoop(dCenX: number, dCenY: number, dR: number, dPrecision?: number, loopType?: number): any;
	/** 删除某个索引下的闭合区域 */
	removeLoopAt(loopIndex: number): boolean;
	/** 删除所有闭合区域 */
	removeAllLoop(): boolean;
	/** 设置某个索引下的闭合区域数据
	 * @param loopIndex 闭合区域索引
	 * @param loopType 闭合区域类型
	 * @param vertices 坐标集合
	 * @param bulges 凸度集合
	 *  */
	setLoopAt(loopIndex: number, vertices: McGePoint3dArray, bulges: number[], loopType?: number): boolean;
	isSolid(): boolean;
}
/**
 * 代理实体类型，是一种特殊类型的实体，其几何形状和属性信息存储在外部源中，例如外部文件或数据库。
 */
export declare class McDbProxyEntity extends McDbEntity {
	/**
	* 构造函数。
	* @param imp 内部对象。
	*/
	constructor(x?: object);
	/** 获取代理实体中所有的文本内容 */
	getAllTextContent(): McGeStringArray;
	/** 获取代理实体的所有原始实体ID */
	getAllEntityIds(): McObjectId[];
	/** 获取代理实体的原始类名。 */
	getOriginalClassName(): string;
}
/**
 * 光栅图片类，该类用于在CAD中显示光栅图形
 */
export declare class McDbRasterImage extends McDbEntity {
	/**
	* 构造函数。
	* @param imp 内部对象。
	*/
	constructor(x?: object);
	/** 设置或获取图像的方向 */
	setOrientation(origin: McGePoint3d, uCorner: McGeVector3d, vOnPlane: McGeVector3d): boolean;
	getOrientation(): {
		origin: McGePoint3d;
		uCorner: McGeVector3d;
		vOnPlane: McGeVector3d;
	};
	/** 设置或获取图像的定义ID */
	setImageDefId(imageId: McObjectId): void;
	imageDefId(): McObjectId;
	/** 设置或设置图像对象的裁剪边界 */
	setClipBoundary(type: McDb.ClipBoundaryType, aryPoint: McGePoint3dArray): boolean;
	clipBoundary(): McGePoint3dArray;
	/** 获取裁剪边界的类型 */
	clipBoundaryType(): McDb.ClipBoundaryType;
}
/**
 * Dxf组码
 * @public
 */
export declare enum DxfCode {
	/** 实体类型 */
	kEntityType = 5020,
	/** 实体图层 */
	kLayer = 8,
	/** 块名 */
	kBlockName = 2,
	/** 颜色 */
	kColor = 62,
	/** XData 类型 */
	kAppName = -3,
	/** 长整型 */
	kLong = 1071,
	/** 双精度浮点数 */
	kDouble = 1040,
	/** 字符串 */
	kString = 1000,
	/** 点坐标 */
	kPoint = 1010,
	/** 实体ID */
	kEntityId = -8000,
	/** 实体 */
	kEntity = -8500,
	/** 扩展数据名称 */
	kExDataName = 1001
}
/**
 * McDb 命名空间包含 AutoCAD 中的一些常用枚举。
 * @public
 */
export declare namespace McDb {
	/**
	 * 多线类型
	 * @public
	 */
	enum PolylineType {
		/** LW Polyline */
		kLwPolyline = 0,
		/** 3D Polyline */
		k3dPolyline = 2
	}
	/**
	 * 文本水平对齐方式枚举。
	 * @public
	 */
	enum TextHorzMode {
		/** 左对齐 */
		kTextLeft = 0,
		/** 居中对齐 */
		kTextCenter = 1,
		/** 右对齐 */
		kTextRight = 2,
		/** 水平对齐 */
		kTextAlign = 3,
		/** 垂直中间对齐 */
		kTextMid = 4,
		/** 自适应 */
		kTextFit = 5
	}
	/** 相交的类型
	 * 调用 {@link McDbEntity.IntersectWith} 方法的第二个参数
	 *  */
	enum Intersect {
		/** 两个实体都不延伸 */
		kOnBothOperands = 0,
		/** 只延伸原实体
		 * 指调用 {@link McDbEntity.IntersectWith} 方法的实例本身
		 *  */
		kExtendThis = 1,
		/**只延伸作为参数的实体
		 * 指 {@link McDbEntity.IntersectWith} 的第一个参数
		 *  */
		kExtendArg = 2,
		/** 两个实体都延伸  */
		kExtendBoth = 3
	}
	/**
	 * 文本垂直对齐方式枚举。
	 * @public
	 */
	enum TextVertMode {
		/** 基线对齐 */
		kTextBase = 0,
		/** 底部对齐 */
		kTextBottom = 1,
		/** 垂直中间对齐 */
		kTextVertMid = 2,
		/** 顶部对齐 */
		kTextTop = 3
	}
	/**
	 * 实体附着点枚举。
	 * @public
	 */
	enum AttachmentPoint {
		/** 左上对齐 */
		kTopLeft = 1,
		/** 中上对齐 */
		kTopCenter = 2,
		/** 右上对齐 */
		kTopRight = 3,
		/** 中左对齐 */
		kMiddleLeft = 4,
		/** 中心点对齐 */
		kMiddleCenter = 5,
		/** 中右对齐 */
		kMiddleRight = 6,
		/** 左下对齐 */
		kBottomLeft = 7,
		/** 底部中间对齐 */
		kBottomCenter = 8,
		/** 右下对齐 */
		kBottomRight = 9,
		kBaseLeft = 10,
		kBaseCenter = 11,
		kBaseRight = 12,
		kBaseAlign = 13,
		kBottomAlign = 14,
		kMiddleAlign = 15,
		kTopAlign = 16,
		kBaseFit = 17,
		kBottomFit = 18,
		kMiddleFit = 19,
		kTopFit = 20,
		kBaseMid = 21,
		kBottomMid = 22,
		kMiddleMid = 23,
		kTopMid = 24
	}
	/**
	 * 线宽枚举。
	 * @public
	 */
	enum LineWeight {
		kLnWt000 = 0,
		kLnWt005 = 5,
		kLnWt009 = 9,
		kLnWt013 = 13,
		kLnWt015 = 15,
		kLnWt018 = 18,
		kLnWt020 = 20,
		kLnWt025 = 25,
		kLnWt030 = 30,
		kLnWt035 = 35,
		kLnWt040 = 40,
		kLnWt050 = 50,
		kLnWt053 = 53,
		kLnWt060 = 60,
		kLnWt070 = 70,
		kLnWt080 = 80,
		kLnWt090 = 90,
		kLnWt100 = 100,
		kLnWt106 = 106,
		kLnWt120 = 120,
		kLnWt140 = 140,
		kLnWt158 = 158,
		kLnWt200 = 200,
		kLnWt211 = 211,
		kLnWtByLayer = -1,
		kLnWtByBlock = -2,
		kLnWtByLwDefault = -3
	}
	/**
	* 表示图案填充中不同类型的闭合区域
	* @public
	*/
	enum HatchLoopType {
		/** 默认填充闭合区域类型  */
		kDefault = 0,
		/** 外部填充闭合区域类型 表示外部轮廓或边界 */
		kExternal = 1,
		/** 多段线填充闭合区域类型 表示由多个线段组成的区域*/
		kPolyline = 2,
		/** 派生填充闭合区域类型 表示从其他图形元素派生而来的填充区域*/
		kDerived = 4,
		/** 文本框填充闭合区域类型 表示包含文本的区域*/
		kTextbox = 8,
		/** 最外层填充闭合区域类型 表示填充区域的最外层边界*/
		kOutermost = 16,
		/** 未闭合填充闭合区域类型 表示填充区域的边界没有闭合*/
		kNotClosed = 32,
		/** 自相交填充闭合区域类型 表示填充区域的边界自相交*/
		kSelfIntersecting = 64,
		/** 文本岛填充闭合区域类型  表示包含文本的孤立区域*/
		kTextIsland = 128
	}
	/**
	 * 表示填充区域中的边的曲线类型
	 * @public
	 */
	enum HatchEdgeType {
		/** 表示直线类型的边 */
		kLine = 1,
		/** 圆弧类型的边 */
		kCirArc = 2,
		/** 椭圆弧类型的边 */
		kEllArc = 3,
		/** 样条曲线类型的边 */
		kSpline = 4
	}
	/**
   *  表示填充图案的来源类型
   * @public
   */
	enum HatchPatternType {
		/** 用户自定义的填充图案 */
		kUserDefined = 0,
		/** 预定义的填充图案 */
		kPreDefined = 1,
		/** 自定义定义的填充图案 */
		kCustomDefined = 2
	}
	/**
	 * 表示填充图案的风格
	 * @public
	 * */
	enum HatchStyle {
		/** 普通风格 标准的、普通的填充图案风格 */
		kNormal = 0,
		/** 外部风格 填充会强调区域的外部边界 用于使外部区域在绘图中更为显眼 */
		kOuter = 1,
		/** 忽略风格 表示在某些情况下应忽略填充图案的风格 在特定的绘图需求下，不需要显示填充图案的情况*/
		kIgnore = 2
	}
	/** 指定裁剪操作中使用的边界类型*/
	enum ClipBoundaryType {
		/** 无效的裁剪边界类型 */
		kInvalid = 0,
		/** 矩形裁剪边界类型 */
		kRect = 1,
		/** 多边形裁剪边界类型 */
		kPoly = 2
	}
}
/**
 * 表示一个颜色对象，可以通过颜色索引或 RGB 值来设置颜色。
 * @example
 * \`\`\`ts
 * import { McCmColor, McDbEntity} from "mxcad"
 * const ent = new McDbEntity();
 * const color = new McCmColor(255,0,0);
 * ent.trueColor = color;
 * \`\`\`
 */
export declare class McCmColor {
	/** 内部实现对象 */
	private imp;
	/**
	 * 构造函数。设置 RGB 值。
	 * @param red 红
	 * @param green 绿
	 * @param blue 蓝
	 * @example
	 * \`\`\`ts
	 * import { McCmColor } from "mxcad"
	 *
	 * const red_color:McCmColor = new McCmColor(255, 0, 0);
	 *
	 * const colorObj = { red:0, green:255, blue:0};
	 * const green_color:McCmColor = new McCmColor(colorObj);
	 * \`\`\`
	 */
	constructor(red?: number | object, green?: number, blue?: number);
	/**
	 * 获取内部实现对象
	 * @return 内部实现对象
	 */
	getImp(): any;
	/**
	 * 复制颜色对象的值。
	 * @param val 颜色对象
	 * @example
	 * \`\`\`ts
	 * import { McCmColor } from "mxcad"
	 *
	 * const color:McCmColor = new McCmColor();
	 * const red_color:McCmColor = new McCmColor(255, 0, 0);
	 * color.copy(red_color);
	 * \`\`\`
	 */
	copy(val: McCmColor): this;
	/**
	 * 刻隆一个颜色对象
	 * @return 返回克隆后的颜色对象
	 * @example
	 * \`\`\`ts
	 * import { McCmColor } from "mxcad"
	 *
	 * const red_color:McCmColor = new McCmColor(255, 0, 0);
	 * const copy_color:McCmColor = red_color.clone();
	 * \`\`\`
	 */
	clone(): McCmColor;
	/**
	 * 设置颜色索引,根据颜色索引值设置颜色类型。
	 * @param colorIndex 颜色索引。
	 */
	setColorIndex(colorIndex: number): void;
	/**
	 * 设置 RGB 值。
	 * @param red 红色值。
	 * @param green 绿色值。
	 * @param blue 蓝色值。
	 * @example
	 * \`\`\`ts
	 * import { McCmColor } from "mxcad"
	 *
	 * const color = new McCmColor();
	 * color.setRGB(255,0,0);
	 * \`\`\`
	 */
	setRGB(red: number, green: number, blue: number): void;
	/**
	 * 获取或设置rgb值中的红色值，设置数值范围0~255。
	 * @param val 颜色数值
	 */
	get red(): number;
	set red(val: number);
	/**
	 * 获取或设置rgb值中的绿色值，设置数值范围0~255。
	 * @param val 颜色数值
	 */
	get green(): number;
	set green(val: number);
	/**
	 * 获取或设置rgb值中的蓝色值，设置数值范围0~255。
	 * @param val 颜色数值
	 */
	get blue(): number;
	set blue(val: number);
	/**
	 * n
	 */
	get n(): number;
	set n(val: number);
	/**
	 * 方法。
	 */
	get method(): number;
	set method(val: number);
	/**
	 * 获取或设置颜色索引。
	 * @param val 颜色索引
	 */
	get colorIndex(): number;
	set colorIndex(val: number);
	/**
	 * 得到颜色说明字符串
	 * @returns 颜色说明字符串
	 */
	getColorString(): string;
	/**
	* 得到颜色值字符串，十六进制格式，layerId:颜色随层时会取layerId指向的层颜色，blkRefId:颜色随块时，会取blkRefId指向的块颜色
	* @param layerId 图层ID
	* @param blkRefId 块记录ID
	* @returns 颜色值字符串
	*/
	getColorValue(layerId?: McObjectId, blkRefId?: McObjectId): string;
	/** 获取 css 颜色的样式 如rgb(0, 0, 0) */
	getStyle(): string;
}
/**
 * 表示一个线型表记录对象，实现了对线型的属性相关操作函数。
 * @example
 * \`\`\`ts
 * // 添加线型
	import { McCmColor, MxCpp, McDbLinetypeTableRecord, McDb } from "mxcad"

	const mxcad = MxCpp.getCurrentMxCAD();
	// 拿到当前线型样式表
	let linetypeTable = mxcad.getDatabase().getLinetypeTable();
	let newLinetypeRecord = new McDbLinetypeTableRecord();
	newLinetypeRecord.numDashes = 0.2
	newLinetypeRecord.name = "TestMyLine"
	if (linetypeTable.add(newLinetypeRecord).isValid()) {
	console.log("add ok");
	}
 * \`\`\`
 */
export declare class McDbLinetypeTableRecord extends McDbObject {
	/**
	 * 构造函数。
	 * @param imp 内部实现对象。
	 */
	constructor(imp?: any);
	/**
	 * 获取或设置线型名称。
	 */
	get name(): string;
	set name(val: string);
	/**
	* 获取或设置线型的虚线数量。
	*/
	get numDashes(): number;
	set numDashes(val: number);
	/**
	 * 获取或设置指定索引处的虚线长度。
	 * @param index 线型定义数组中索引。
	 */
	dashLengthAt(index: number): number;
	setDashLengthAt(index: number, value: number): boolean;
	/**
	 * 获取或设置线型说明字符串。
	 */
	get comments(): string;
	set comments(val: string);
	/**
	 *  获取或设置指定索引处的形状样式。
	 * @param index 线型定义数组中索引。
	 */
	shapeStyleAt(index: number): number;
	setShapeStyleAt(index: number, value: number): boolean;
	/**
	 *  获取或设置指定索引处的形状编号。
	 * @param index 线型定义数组中索引。
	 */
	shapeNumberAt(index: number): number;
	setShapeNumberAt(index: number, shapeNumber: number): boolean;
	/**
	 *  获取或设置指定索引处的形状偏移量。
	 * @param index 线型定义数组中索引。
	 */
	shapeOffsetAt(index: number): McGeVector3d;
	setShapeOffsetAt(index: number, offset: McGeVector3d): boolean;
	/**
	 *  获取或设置指定索引处的形状缩放比例。
	 * @param index 线型定义数组中索引。
	 */
	shapeScaleAt(index: number): number;
	setShapeScaleAt(index: number, scale: number): boolean;
	/**
	 *  获取或设置线型是否根据绘图比例进行缩放。
	 * @param index 线型定义数组中索引。
	 */
	get isScaledToFit(): boolean;
	set isScaledToFit(scaledToFit: boolean);
	/**
	 * 获取或设置指定形状是否按照用户坐标系（UCS）方向排列。
	 * @param index 线型定义数组中索引。
	 */
	shapeIsUcsOrientedAt(index: number): boolean;
	setShapeIsUcsOrientedAt(index: number, isUcsOriented: boolean): boolean;
	/**
	 *  获取或设置指定索引处的形状旋转角度。
	 * @param index 线型定义数组中索引。
	 */
	shapeRotationAt(index: number): number;
	setShapeRotationAt(index: number, rotation: number): boolean;
	/**
	 *  获取或设置指定索引处的文本信息。
	 * @param index 线型定义数组中索引。
	 */
	textAt(index: number): string;
	setTextAt(index: number, text: string): boolean;
}
/**
 * 表示一个文字样式表记录对象，实现了对文字的属性相关操作函数。
 * @example
 * \`\`\`ts
 * // 添加文字样式
	import { McCmColor, MxCpp, McDbTextStyleTableRecord, McDb } from "mxcad"

	const mxcad = MxCpp.getCurrentMxCAD();
	// 拿到当前文字样式表
	const textSyleTable = mxcad.getDatabase().getTextStyleTable();
	let newTextStyleRecord = new McDbTextStyleTableRecord();
	newTextStyleRecord.fileName = "txt.shx";
	newTextStyleRecord.bigFontFileName = "hztxt.shx";
	newTextStyleRecord.textSize = 10;
	newTextStyleRecord.name = sMyTextStyle;
	newTextStyleRecord.xScale = 0.7;
	if (textSyleTable.add(newTextStyleRecord).isValid()) {
	console.log("add ok");
	}
 * \`\`\`
 */
export declare class McDbTextStyleTableRecord extends McDbObject {
	/**
	 * 构造函数。
	 * @param imp 内部实现对象。
	 */
	constructor(imp?: any);
	/**
	 * 获取或设置文字样式名称。
	 */
	get name(): string;
	set name(val: string);
	/** 获取或设置文本样式是否使用形状字体 */
	get isShapeFile(): boolean;
	set isShapeFile(val: boolean);
	/** 获取或设置文本样式是否使用斜体 */
	get isVertical(): boolean;
	set isVertical(val: boolean);
	/** 文字大小(高度) */
	get textSize(): number;
	set textSize(val: number);
	/** 宽度因子 */
	get xScale(): number;
	set xScale(val: number);
	/** 倾斜角度 */
	get obliquingAngle(): number;
	set obliquingAngle(val: number);
	/** 获取或设置文本样式表记录的一组标志位 */
	get flagBits(): number;
	set flagBits(val: number);
	/** 字体名称 */
	get fileName(): string;
	set fileName(val: string);
	/** 大字体名称 */
	get bigFontFileName(): string;
	set bigFontFileName(val: string);
	/** 设置字体样式 */
	setFont(sTypeface: string, bold: boolean, italic: boolean, charset: number, pitchAndFamily: number): boolean;
	/** 获取字体样式 */
	font(): {
		sTypeface: string;
		bold: boolean;
		italic: boolean;
		charset: number;
		pitchAndFamily: number;
	};
}
/**
 * 表示一个图层表记录对象，实现了对图层的属性相关操作函数。
 * @example
 * \`\`\`ts
 * //添加图层
 * import { McCmColor, MxCpp, McDbLayerTableRecord, McDb } from "mxcad"
 *
 * const mxcad = MxCpp.getCurrentMxCAD();
 * const layer = new McDbLayerTableRecord()
 * layer.color = new McCmColor(0, 0, 0)
 * layer.isFrozen = true
 * layer.isLocked = true
 * layer.isOff = true
 * layer.lineWeight = McDb.LineWeight.kLnWt018
 * layer.name = "图层名称"
 * const layerTable = mxcad.getDatabase().getLayerTable();
 * const objId = layerTable.add(layer)
 * mxcad.updateDisplay()
 * \`\`\`
 */
export declare class McDbLayerTableRecord extends McDbObject {
	/**
	 * 构造函数。
	 * @param imp 内部实现对象。
	 */
	constructor(imp?: any);
	/**
	 * 获取或设置图层名称。
	 */
	get name(): string;
	set name(val: string);
	/**
	 * 获取或设置图层是否被冻结。
	 */
	get isFrozen(): boolean;
	set isFrozen(val: boolean);
	/**
	 * 获取或设置图层是否被关闭。
	 */
	get isOff(): boolean;
	set isOff(val: boolean);
	/**
	 * 获取或设置图层是否被锁定。
	 */
	get isLocked(): boolean;
	set isLocked(val: boolean);
	/**
	 * 获取或设置图层颜色。
	 */
	get color(): McCmColor;
	set color(val: McCmColor);
	/**
	 * 获取或设置图层线型对象 ID。
	 */
	get linetypeObjectId(): McObjectId;
	set linetypeObjectId(val: McObjectId);
	/**
	 * 获取或设置图层线宽。
	 */
	get lineWeight(): McDb.LineWeight;
	set lineWeight(val: McDb.LineWeight);
}
/**
 * 表示数据库层表，所有图层信息都存放在层表中。
 * @example
 * \`\`\`ts
 * //获取所有图层
 * import { MxCpp, McDbLayerTable } from "mxcad"
 *
 * let layerTable:McDbLayerTable = MxCpp.getCurrentMxCAD().getDatabase().getLayerTable();
 * let aryId = layerTable.getAllRecordId();
 * aryId.forEach((id) => {
 *     let layerRec = id.getMcDbLayerTableRecord();
 *    if (layerRec === null) return;
 *    console.log(layerRec);
 *     console.log("layerRec.color:" + layerRec.color.getColorString());
 *     console.log("layerRec.name:" + layerRec.name);
 * });
 * \`\`\`
 */
export declare class McDbLayerTable extends McDbObject {
	/**
	 * 构造函数。
	 * @param imp 内部实现对象。
	 */
	constructor(imp?: any);
	/**
	 * 获取层表中的所有图层记录的ID。
	 * @param skipDeleted 是否跳过已删除图层。
	 * @returns 图层ID数组
	 */
	getAllRecordId(skipDeleted?: boolean): McObjectId[];
	/**
	 * 向图层表中添加图层记录。
	 * @param rec 图层表记录对象。
	 * @returns 新增图层记录对象ID。
	 */
	add(rec: McDbLayerTableRecord): McObjectId;
	/**
	 * 查找图层表中的图层记录。
	 * @param sName 图层名称。
	 * @param skipDeleted 是否跳过已删除图层。
	 * @returns 图层记录对象ID。
	 */
	get(sName: string, skipDeleted?: boolean): McObjectId;
	/**
	 * 检查图层表中是否存在指定名称的图层记录。
	 * @param sName 图层名称。
	 * @param skipDeleted 是否跳过已删除图层。
	 * @returns 布尔值。
	 */
	has(sName: string, skipDeleted?: boolean): boolean;
}
/**
 * 表示数据库线型表，所有的线型定义都存放在这里。
 * @example
 * \`\`\`ts
 * //获取所有线型
 * import { MxCpp, McDbLinetypeTable } from "mxcad"
 *
 * let mxcad = MxCpp.getCurrentMxCAD();
 * let linetypeTable: McDbLinetypeTable = mxcad.getDatabase().getLinetypeTable();
 * let aryId = linetypeTable.getAllRecordId();
 * aryId.forEach((id) => {
 * let linetypeRec = id.getMcDbLinetypeTableRecord();
 * if (linetypeRec === null) return;
 * console.log(linetypeRec);
 * console.log("linetypeRec.name:" + linetypeRec.name);
 * });
 * \`\`\`
 */
export declare class McDbLinetypeTable extends McDbObject {
	/**
	 * 构造函数。
	 * @param imp 内部实现对象。
	 */
	constructor(imp?: any);
	/**
	 * 获取线型表中的所有线型记录的ID。
	 * @param skipDeleted 是否跳过已删除线型。
	 * @returns ret 线型ID数组。
	 */
	getAllRecordId(skipDeleted?: boolean): McObjectId[];
	/**
	 * 向线型表中添加线型记录。
	 * @param rec 线型表记录对象。
	 * @returns 新增线型记录对象ID。
	 */
	add(rec: McDbLinetypeTableRecord): McObjectId;
	/**
	 * 查找线型表中的线型记录。
	 * @param sName 线型名称。
	 * @param skipDeleted 是否跳过已删除线型。
	 * @returns 线型记录对象ID。
	 */
	get(sName: string, skipDeleted?: boolean): McObjectId;
	/**
	 * 检查线型表中是否存在指定名称的线型记录。
	 * @param sName 线型名称。
	 * @param skipDeleted 是否跳过已删除线型。
	 * @returns 布尔值。
	 */
	has(sName: string, skipDeleted?: boolean): boolean;
}
/**
 * 表示数据库文字样式表。
 * @example
 * \`\`\`ts
 * // 获取所有文字样式
 * import { MxCpp, McDbTextStyleTable } from "mxcad"
 *
 * let mxcad = MxCpp.getCurrentMxCAD();
 * let textSyleTable: McDbTextStyleTable = mxcad.getDatabase().getTextStyleTable();
 * let aryId = textSyleTable.getAllRecordId();
 * aryId.forEach((id) => {
 *     let textSyleRec = id.getMcDbTextStyleTableRecord();
 *     if (textSyleRec === null) return;
 *     console.log(textSyleRec);
 *     console.log("textSyleRec.fileName:" + textSyleRec.fileName);
 *     console.log("textSyleRec.name:" + textSyleRec.name);
 * });
 * \`\`\`
 */
export declare class McDbTextStyleTable extends McDbObject {
	/**
	 * 构造函数。
	 * @param imp 内部实现对象。
	 */
	constructor(imp?: any);
	/**
	 * 获取文字样式表中的所有文字样式记录的ID。
	 * @param skipDeleted 是否跳过已删除文字样式。
	 * @returns ret 文字样式ID数组。
	 */
	getAllRecordId(skipDeleted?: boolean): McObjectId[];
	/**
	 * 向文字样式表中添加文字样式记录。
	 * @param rec 文字样式表记录对象。
	 * @returns 新增文字样式记录对象ID。
	 */
	add(rec: McDbTextStyleTableRecord): McObjectId;
	/**
	 * 查找文字样式表中的文字样式记录。
	 * @param sName 文字样式名称。
	 * @param skipDeleted 是否跳过已删除文字样式。
	 * @returns 文字样式记录对象ID。
	 */
	get(sName: string, skipDeleted?: boolean): McObjectId;
	/**
	 * 检查文字样式表中是否存在指定名称的文字样式记录。
	 * @param sName 文字样式名称。
	 * @param skipDeleted 是否跳过已删除文字样式。
	 * @returns 布尔值。
	 */
	has(sName: string, skipDeleted?: boolean): boolean;
}
/**
 * 表示数据库，图形中的所有信息都存放在该对象中，调用mxcad.getDatabase()函数得到控件的数据库。
 */
export declare class McDbDatabase extends McRxObject {
	/**
	 * 构造函数。
	 * @param imp 内部实现对象。
	 */
	constructor(imp?: any);
	/**
	 * 获取层表。
	 * @returns 层表。
	 */
	getLayerTable(): McDbLayerTable;
	get layerTable(): McDbLayerTable;
	/**
	 * 获取线型表。
	 * @returns 线型表。
	 */
	getLinetypeTable(): McDbLinetypeTable;
	get linetypeTable(): McDbLinetypeTable;
	/**
	 * 获取文字样式表。
	 * @returns 文字样式表。
	 */
	getTextStyleTable(): McDbTextStyleTable;
	get textStyleTable(): McDbTextStyleTable;
	/**
	 * 获取块表。
	 * @returns 块表。
	 */
	getBlockTable(): McDbBlockTable;
	/**
	 * 得到图纸的字典对象。
	 * @returns McDbDictionary
	 */
	getNamedObjectsDictionary(): McDbDictionary;
	get blockTable(): McDbBlockTable;
	/**
	 *返回当前空间块表记录
	 * @returns 块表记录
	 */
	get currentSpace(): McDbBlockTableRecord;
	/**
	 * 获取当前线型比例。
	 * @returns 当前线型比例。
	 */
	getCurrentlyLineTypeScale(): number;
	/**
	 * 设置当前线型比例。
	 * @param val 线型比例。
	 * @returns 当前线型比例。
	 */
	setCurrentlyLineTypeScale(val: number): number;
	/**
	 * 获取当前线型名称。
	 * @returns 当前线型名称。
	 */
	getCurrentlyLineTypeName(): string;
	/**
	 * 设置当前线型名称。
	 * @param sName 线型名称。
	 */
	setCurrentlyLineTypeName(sName: string): void;
	/**
	 * 获取当前层名称。
	 * @returns 当前层名称。
	 */
	getCurrentlyLayerName(): string;
	/**
	 * 设置当前层名称。
	 * @param sName 层名称。
	 */
	setCurrentlyLayerName(sName: string): void;
	/**
	 * 获取当前CAD颜色。
	 * @returns 当前CAD颜色。
	 */
	getCurrentlyTrueColor(): McCmColor;
	/**
   * 获取当前绘图使用的颜色
   */
	getCurrentlyDrawColor(): THREE.Color;
	/**
	 * 设置当前CAD颜色。
	 * @param color CAD颜色。
	 */
	setCurrentlyTrueColor(color: McCmColor): any;
	/**
	 * 获取当前颜色索引。
	 * @returns 当前颜色索引（ColorIndexType）。
	 */
	getCurrentlyColorIndex(): number;
	/**
	 * 设置当前颜色索引（ColorIndexType）。
	 * @param colorIndex 颜色索引。
	 */
	setCurrentlyColorIndex(colorIndex: number): any;
	/**
	 * 获取当前文字样式名称。
	 * @returns 当前文字样式名称。
	 */
	getCurrentlyTextStyleName(): string;
	/**
	 * 设置当前文字样式名称。
	 * @param sName 文字样式名称。
	 */
	setCurrentlyTextStyle(sName: string): void;
	/**
	* 根据对象的句柄返回对象id.
	*/
	handleToIdIndex(sHandle: string): McObjectId;
	/**
	* 当前数据库是否被修改
	*/
	isModifyed(): boolean;
	/**
   * 把当前数据库修改状态重置成未修改状态
   */
	resetModificationStatus(): void;
}
/**
 * 数据库的块表记录对象，实现了对图块的属性相关操作函数。
 * @example
 * \`\`\`ts
 * // 添加图块
	import { MxCpp, McDbBlockTableRecord, McDbBlockReference, McDbLine, McCmColor } from "mxcad"

	let mxcad = MxCpp.getCurrentMxCAD();
	let blkTable =  mxcad.getDatabase().getBlockTable();
	let blkRecId = blkTable.add(new McDbBlockTableRecord());

	// 根据ObjectId再次得到刚刚添加的图块记录
	let blkTableRecord:McDbBlockTableRecord = blkRecId.getMcDbBlockTableRecord()

	// 添加两条线段再图块记录中 这里每条线段的具体属性比如开始点和结束点自行赋值
	const line = new McDbLine(80, 80, 0, -80, -80, 0)
	line.trueColor = new McCmColor(255, 0, 0)
	const line1 = new McDbLine(-80, 80, 0, 80, -80, 0)
	blkTableRecord.appendAcDbEntity(line);
	blkTableRecord.appendAcDbEntity(line1);

	// 设置图块的基点 一般是包围盒内的点， 可以任意指定
	blkTableRecord.origin = new McGePoint3d(0,0,0);

	// 实例化块参照 这里需要设置我们刚刚添加图块记录得到的ObjectId
	let blkRef = new McDbBlockReference();
	blkRef.blockTableRecordId = blkRecId;
	// 最后设置位置 渲染图块
	blkRef.position = new McGePoint3d(0,0,0);

	mxcad.drawEntity(blkRef);
 * \`\`\`
*/
export declare class McDbBlockTableRecord extends McDbObject {
	/**
	 * 构造函数。
	 * @param imp 内部实现对象。
	 */
	constructor(imp?: any);
	/** 给图块添加对应实体 */
	appendAcDbEntity(pEntity: McDbEntity): McObjectId;
	/** 获取图块中所有实体的对象ID */
	getAllEntityId(skipDeleted?: boolean): McObjectId[];
	/** 返回块表记录中所有对象的最小，最大显示顺序. */
	getMinMaxDrawOrder(): {
		minDrawOrder: number;
		maxDrawOrder: number;
	};
	/** 图块原点 */
	get origin(): McGePoint3d;
	set origin(origin: McGePoint3d);
	/**
   *得到最小外包
   */
	getBoundingBox(): {
		minPt: McGePoint3d;
		maxPt: McGePoint3d;
		ret: boolean;
	};
	/** 块表记录的无效边界框缓冲大小 */
	invalidBoundingBoxBuffer(): void;
	/**
   * 获取或设置名称。
   */
	get name(): string;
	set name(val: string);
}
/**
 * 数据库中的块表类，块表中存放着块表记录。
 * @example
 * \`\`\`ts
 * //遍历所有图块
 * import { MxCpp, McDbBlockTable } from "mxcad"
 *
 * let mxcad = MxCpp.App.getCurrentMxCAD();
 * let blockTable: McDbBlockTable = mxcad.getDatabase().getBlockTable();
 * let aryId = blockTable.getAllRecordId();
 * aryId.forEach((id) => {
 * let blkRec = id.getMcDbBlockTableRecord();
 * if (blkRec === null) return;
 *     console.log(blkRec);
 *     console.log("blkRec.name:" + blkRec.name);
 *     console.log("blkRec.origin:" + blkRec.origin);
 * });
 * \`\`\`
 */
export declare class McDbBlockTable extends McDbObject {
	/**
	 * 构造函数。
	 * @param imp 内部实现对象。
	 */
	constructor(imp?: any);
	/**
	 * 获取块表中的所有图块记录的ID。
	 * @param skipDeleted 是否跳过已删除图块记录。
	 * @returns ret 图块记录ID数组。
	 */
	getAllRecordId(skipDeleted?: boolean): McObjectId[];
	/**
	 * 向块表中添加图块记录。
	 * @param rec 图块记录对象。
	 * @returns 新增图块记录对象ID。
	 */
	add(rec: McDbBlockTableRecord | string): McObjectId;
	/**
	 * 查找块表中的图块记录。
	 * @param sName 图块记录名称。
	 * @param skipDeleted 是否跳过已删除图块记录。
	 * @returns 图块记录对象ID。
	 */
	get(sName: string, skipDeleted?: boolean): McObjectId;
	/**
	 * 检查块表中是否存在指定名称的图块记录。
	 * @param sName 图块记录名称。
	 * @param skipDeleted 是否跳过已删除图块记录。
	 * @returns 布尔值。
	 */
	has(sName: string): boolean;
}
/** 光栅图片类，该类用于在CAD中显示光栅图形 */
export declare class McDbRasterImageDef extends McDbObject {
	/**
	 * 构造函数。
	 * @param imp 内部实现对象。
	 */
	constructor(imp?: any);
	/**
	 * 获取或设置栅格图像文件的路径。
	 * @param sPathName 文件的路径
	 */
	set sourceFileName(sPathName: string);
	get sourceFileName(): string;
	saveToBase64(sUrl: string): boolean;
}
/**
 * 数据库中的字典类，用户的自定义数据可以存放在字典中，它可以理解一个映射表，字符串是关键字，可以映射到任何一个对象。字典中可以再包含字典。
 * @example
 * \`\`\`ts
 * //遍历字典
 * import { McDbDictionary, McDbXrecord } from "mxcad"
 *
 * function MxTest_DictionaryData(dict: McDbDictionary) {
 *   let aryName = dict.getAllObjectName();
 *   aryName.forEach((name) => {
 *     console.log(name);
 *     let id = dict.getAt(name);
 *     let obj = id.getMcDbObject();
 *     if (obj instanceof McDbDictionary) {
 *       let dict: McDbDictionary = obj;
 *       console.log(dict);
 *       MxTest_DictionaryData(dict);
 *     }
 *     else if (obj instanceof McDbXrecord) {
 *       let xrec: McDbXrecord = obj;
 *       let data = xrec.getData()
 *       data.PrintData();
 *     }
 *   })
 * }
 *
 * function MxTest_GetNamedObjectsDictionary() {
 *   let mxcad = MxCpp.getCurrentMxCAD();
 *   let dict = mxcad.getDatabase().getNamedObjectsDictionary();
 *   let aryName = dict.getAllObjectName();
 *   aryName.forEach((name) => {
 *     console.log(name);
 *     let id = dict.getAt(name);
 *     let obj = id.getMcDbObject();
 *     if (obj instanceof McDbDictionary) {
 *       let dict: McDbDictionary = obj;
 *       console.log(dict);
 *       MxTest_DictionaryData(dict);
 *     }
 *   })
 * }
 *
 * MxTest_GetNamedObjectsDictionary()
 * \`\`\`
 */
export declare class McDbDictionary extends McDbObject {
	/**
	 * 构造函数。
	 * @param imp 内部实现对象。
	 */
	constructor(imp?: any);
	/**
	 * 获取字典中的所有对象。
	 * @returns 对象ID数组
	 */
	getAllObject(): McObjectId[];
	/**
	 * 获取字典中所有的对象名。
	 * @returns 对象名数组
	 */
	getAllObjectName(): McGeStringArray;
	/**
	 * 移除指定对象
	 * @param sName 对象名称
	 * @returns 布尔值
	 */
	remove(sName: string): boolean;
	/**
	 * 向字典中添加对象
	 * @param sName 对象名称
	 * @param obj 对象
	 * @returns 对象ID
	 */
	addObject(sName: string, obj: McDbObject): McObjectId;
	/**
	 * 获取字典中指定对象
	 * @param sName 对象名称
	 * @param isGetErased 是否获取已删除的对象
	 * @returns 对象ID
	 */
	getAt(sName: string, isGetErased?: boolean): McObjectId;
}
/**
 * 扩展记录类型，实体可以设置它的扩展记录，用于存放更多的信息。
 * @example
 * \`\`\`ts
 * //写扩展记录
 * import { MxCpp, McDbDictionary, McDbXrecord, MxCADResbuf } from "mxcad"
 *
 * let mxcad = MxCpp.getCurrentMxCAD();
 * let dict = mxcad.getDatabase().getNamedObjectsDictionary();
 *
 * let sName = "MyDict";
 * let idDict = dict.getAt(sName);
 * if (idDict.isNull()) {
 *    let newDict = new McDbDictionary;
 *    idDict = dict.addObject(sName, newDict);
 * }
 * let myDict = idDict.getMcDbDictionary();
 * if (myDict) {
 *    let xrec = new McDbXrecord();
 *    let data = new MxCADResbuf();
 *    data.AddString("TestData");
 *    xrec.setData(data);
 *    myDict.addObject("MyRecord", xrec);
 *    console.log("write xrecord ok");
 * }
 *
 * // 读取扩展数据。
 * async function MxTest_ReadxData() {
 *   let selEntity = new MxCADUiPrEntity();
 *   selEntity.setMessage("选择对象");
 *   let id = await selEntity.go();
 *   if (!id.isValid()) return;
 *
 *   let ent = id.getMcDbEntity();
 *   if (ent === null) return;
 *
 *   let data = ent.getxData();
 *   data.forEach((val, type, dxf) => {
 *     console.log(JSON.stringify({ val: val, type: type, dxf: dxf }));
 *   })
 *
 *   //let data = ent.getxDataString("DataName");
 *   //MxFun.acutPrintf(data.val + "\\n");
 * }
 * \`\`\`
 */
export declare class McDbXrecord extends McDbObject {
	/**
	 * 构造函数。
	 * @param imp 内部实现对象。
	 */
	constructor(imp?: any);
	/**
	 * 设置或获取扩展记录中的数据。
	 */
	setData(xdata: MxCADResbuf): boolean;
	getData(): MxCADResbuf;
}
declare class MxAI {
	private serverUrl;
	private mapFun;
	init(serverUrl: string): void;
	addFunction(name: string, call: any): void;
	registTool(tool: any): void;
	reloadTools(param: any): void;
	chat_tool(str: string): void;
}
/** 排除接口包含某些类型的属性名称 */
export type NonPropertyNames<T, P> = {
	[K in keyof T]: T[K] extends P ? never : K;
}[keyof T];
/** 排除接口包含某些类型的属性
 * @param T 需要排除类型的接口
 * @param P 需要排除类型接口属性的类型
 * @example
 * \`\`\`ts
 * interface MyInterface {
 *  name: string;
 *  age: number;
 *  sayHello(): void;
 *  walk(distance: number): void;
 * }
 * ExcludePropertiesContainingThisType<MyInterface, Function>
 * \`\`\`
 */
export type ExcludePropertiesContainingThisType<T, P> = Pick<T, NonPropertyNames<T, P>>;
/** 颜色方法类型 */
export declare enum ColorMethod {
	/** 颜色随层 */
	kByLayer = 1,
	/** 颜色随块 */
	kByBlock = 2,
	/** 颜色值 */
	kByColor = 3,
	/** 颜色索引值 */
	kByACI = 4,
	kByPen = 5,
	kForeground = 6,
	kLayerOff = 7,
	kLayerFrozen = 8,
	kNone = 9
}
/** 颜色索引类型 */
export declare enum ColorIndexType {
	/** 随块 */
	kByblock = 0,
	/** 红色 */
	kRed = 1,
	/** 黄色 */
	kYellow = 2,
	/** 绿色 */
	kGreen = 3,
	/** 青色 */
	KCyan = 4,
	/** 蓝色*/
	kBlue = 5,
	/** 洋红色*/
	kMagenta = 6,
	/** 白色(反色)*/
	kWhite = 7,
	/** 随层 */
	kBylayer = 256
}
export type ConstructorArguments<T> = T extends new (...args: infer U) => any ? U : never;
/**
 * McCmColor的JSON版本
 */
export type McCmColorJSON = ExcludePropertiesContainingThisType<McCmColor, Function>;
/** THREE.Color 构造函数参数类型组成的元组：字符串、数字、THREE.Color */
export type THREEColorArgs = [
	(string | number | THREE.Color)
] | ConstructorArguments<typeof THREE.Color> | [
];
/** 用于指定在创建颜色时可以接受的不同类型的参数形式 */
export type CreateColorArgs = THREEColorArgs | [
	(Partial<McCmColorJSON> | McCmColor)
];
/**
 * 获取颜色工具
 * @param ages 颜色参数
 * @returns THREE.Color
 * */
export declare const getColorUtils: (...ages: THREEColorArgs) => THREE.Color;
/**
 * 创建颜色对象
 * @param ages 颜色参数类型
 * @returns 颜色对象
 */
export declare const createMcCmColor: (...ages: CreateColorArgs) => McCmColor;
/**
 * 设置颜色
 * @param mcCmColor 颜色对象
 * @param ages 颜色参数类型
 */
export declare const setMcCmColor: (mcCmColor: McCmColor, ...ages: CreateColorArgs) => void;
/**
 * 枚举 Fetch 属性类型
 */
export declare enum FetchAttributes {
	/** 将获取的数据加载到内存中 */
	EMSCRIPTEN_FETCH_LOAD_TO_MEMORY = 1,
	/** 持久化文件 */
	EMSCRIPTEN_FETCH_PERSIST_FILE = 4,
	/** 追加数据 */
	EMSCRIPTEN_FETCH_APPEND = 8,
	/** 替换数据 */
	EMSCRIPTEN_FETCH_REPLACE = 16
}
declare class McRxObjectImp {
}
/**
 * McObject 类, 封装了与 MxCAD 对象相关的功能，并提供了一些方法来操作和管理这些功能
 */
export declare class McObject {
	/** 内部对象实现 */
	private imp;
	/** 内部事件 */
	private event;
	/** 当前文件名 */
	private currentFileName;
	/** 是否是第一次打开文件 */
	private firstTimeOpenFile;
	/**
	 * 构造函数
	 * @param imp 对象实现
	 * @example
	 * \`\`\`ts
	 * import { McObject } from 'mxcad'
	 *
	 * const mxcad = new McObject;
	 * \`\`\`
	 */
	constructor(imp?: any);
	/**
	 * 返回与MxCAD对象绑定的MxDraw对象。
	 * @returns MxDraw对象
	 * @example
	 * \`\`\`ts
	 * import { McObject } from 'mxcad'
	 *
	 * const mxcad = new McObject()
	 * const mxdraw = mxcad.getMxDrawObject()
	 * \`\`\`
	 */
	getMxDrawObject(): MxDrawObject;
	/**
   * 返回与MxCAD对象绑定的MxDraw对象。
   * @returns MxDraw对象
	 * @example
	 * \`\`\`ts
	 * import { McObject } from 'mxcad'
	 *
	 * const mxcad = new McObject()
	 * const mxdraw = mxcad.mxdraw
	 * \`\`\`
   */
	get mxdraw(): MxDrawObject;
	/**
	 * 获取内部实现对象
	 * @returns 内部实现对象
	 */
	getImp(): any;
	/**
	 * 初始对象
	 * @param imp 对象实现，默认该函数会被系统自动调用。
	 *
	 */
	init(imp: any): void;
	/**
	 * 创建mxcad对象 。
	 * @param config createMxCad 的参数配置
	 * @example
	 * \`\`\`ts
	 * import { McObject } from "mxcad"

		// 创建mxcad示例对象
		const mxcad = new McObject()
		mxcad.create({
			// canvas元素的id
			canvas: "#myCanvas",
			// 获取加载wasm相关文件(wasm/js/worker.js)路径位置
			locateFile: (fileName)=> new URL(\`/node_modules/mxcad/dist/wasm/2d/\${fileName}\`, import.meta.url).href,
			// 需要初始化打开的文件url路径
			fileUrl: new URL("../src/assets/test.mxweb", import.meta.url).href,
			// 提供加载字体的目录路径
			fontspath:  new URL("node_modules/mxcad/dist/fonts", import.meta.url).href,
		})
	 * \`\`\`
	 */
	create(config: MxCadConfig): void;
	/** 监听对象选择事件
	 * @example
	 * \`\`\`ts
	 * import { MxCpp, McObject } from "mxcad"
	 *
	 * const mxcad:McObject = MxCpp.getCurrentMxCAD();
	 * .on("selectChange", (ids)=> {
	 *      let ent = id.getMcDbEntity()
	 *      if(!ent) return
	 *      console.log(ent.objectName)
	 * })
	 * \`\`\`
	 *  */
	on(name: "selectChange", fun: (ids: McObjectId[]) => void | ((ids: McObjectId[]) => void)[]): void;
	/** 监听文件完全打开 */
	on(name: "openFileComplete", fun: () => void): void;
	/** 监听项目初始化 */
	on(name: "init", fun: () => void): void;
	/** 监听 mxdraw 初始化 */
	on(name: "init_mxdraw", fun: (mxdraw: MxDrawObject) => void): void;
	/** 监听 mxdraw 初始化前的事件 */
	on(name: "init_before_mxdraw", fun: (mxdraw: MxDrawObject) => void): void;
	/** 监听 mxcad 初始化 */
	on(name: "init_mxcad", fun: (mxcad: McObject) => void): void;
	/** 监听数据库修改事件 */
	on(name: "databaseModify", fun: () => void): void;
	/**
	 * 关闭事件监听
	 * @param name 监听事件名
	 * @param fun 监听事件
	 * @example
	 * \`\`\`ts
	 * import { MxCpp, McObject } from "mxcad"
	 *
	 * const mxcad:McObject = MxCpp.getCurrentMxCAD();
	 * mxcad.off("selectChange");
	 * \`\`\`
	 */
	off(name: string, fun?: Function): void;
	/**
	 * 触发一个系统事件的调用
	 * @param name 事件名
	 * @param param 事件参数
	 * @example
	 * \`\`\`ts
	 * import { MxCpp, McObject } from "mxcad"
	 *
	 * const mxcad:McObject = MxCpp.getCurrentMxCAD();
	 * mxcad.callEvent("init");
	 * \`\`\`
	 */
	callEvent(sEventName: string, param?: any): boolean;
	/**
	 * 初始化对象模型
	 * @description
	 * @param mxObject 初始化{@link https://mxcadx.gitee.io/mxdraw_docs | mxdraw} 创建的绘图控件
	 */
	initMxObject(mxObject: any): void;
	/**
	 * 重绘图上所有对象，在调用ZoomAll,ZoomW后，因为是异步执行，可能需要延迟调用Regen才会启作用。
	 * @example
	 * \`\`\`ts
	 * import { MxCpp, McObject } from 'mxcad'
	 *  const mxcad:McObject = MxCpp.getCurrentMxCAD()
	   //绘制一个带有宽度的圆
		mxcad.addLinetype("CircleLineType", "30,-5,7,-7");

		//设计当前线型为"CircleLineType"
		mxcad.drawLinetype = ("CircleLineType");

		mxcad.drawLineWidth = 40;

		mxcad.drawCircle(600, 800, 120);

		mxcad.zoomAll();
		mxcad.regen();
		mxcad.updateDisplay();
	 * \`\`\`
	 */
	regen(delayTime?: number): void;
	/**
	 * 显示全部
	 */
	zoomAll(): boolean;
	/**
	 * 缩放当前显示范围，它是相对于当前显示范围进行缩放
	 * @param scale scale缩放比例
	 * @returns void
	 * @example
	 * \`\`\`ts
	 * import { MxCpp, McObject } from 'mxcad'
	 *  const mxcad:McObject = MxCpp.getCurrentMxCAD()
		mxcad.drawLine(350, 220, 600, 220);
		mxcad.zoomScale(o.6);
	 * \`\`\`
	 */
	zoomScale(scale: number): void;
	/**
	 * 把对象添加当前选择中
	 * @param id 对象id
	 * @returns void
	 * @example
	 * \`\`\`typescript
	 * import { MxCpp, McObject } from "mxcad"
	 * let mxcad:McObject = MxCpp.getCurrentMxCAD();
	 * let id = mxcad.drawLine(0,0,1000,1000);
	 * mxcad.addCurrentSelect(id);
	 * \`\`\`
	 */
	addCurrentSelect(id: McObjectId | McObjectId[], isDisplayGrid?: boolean): void;
	/**
  * 把当前显示范围移到指定的显示范围
  * @param minPt 坐标1 McGePoint3d
  * @param maxPt 坐标2 McGePoint3d
  * @param isWorld 默认为felse DWG图纸坐标，设置为true是THREEJS坐标
  * @returns void
  * @example
  * \`\`\`typescript
  * import { MxApp, McGePoint3d, McObject } from "mxcad"
  * const mxcad:McObject = MxCpp.getCurrentMxCAD()
  * mxcad.zoomW(new McGePoint3d(0, 0), new McGePoint3d(30, 30))
  * \`\`\`
  */
	zoomW(minPt: McGePoint3d, maxPt: McGePoint3d): void;
	/**
	 * 把当前显示范围移到指定的位置,dCenX,dCenY是DWG图纸坐标。
	 * @returns void
	 * @example
	 * \`\`\`typescript
	 * import { MxCpp, McGePoint3d, McObject } from "mxcad"
	 * const mxcad:McObject = MxCpp.getCurrentMxCAD()
	 * mxcad.zoomCenter(0, 0)
	 * \`\`\`
	 */
	zoomCenter(dCenX: number, dCenY: number): void;
	/**
	 * 设置显示视区的角度，单位是PI.
	 * @returns void
	 * @param viewangle 旋转角度 Math.PI
	 * @example
	 * \`\`\`typescript
	 * import { MxCpp, McObject } from "mxcad"
	 * const mxcad:McObject = MxCpp.getCurrentMxCAD()
	 * mxcad.zoomAngle(Math.PI / 2)
	 * \`\`\`
	 */
	zoomAngle(viewangle: number): void;
	/**
	 * 打开网络文件
	 * @param sFileUrl 网络文件路径
	 * @param retCall 回调函数，可选参数，打开文件完成后的回调函数，参数为打开文件的结果,0表示成功，其他值表示失败
	 * @param isWorkThread 是否使用工作线程打开文件，默认为 true
	 * @param fetchAttributes 1：EMSCRIPTEN_FETCH_LOAD_TO_MEMORY,把图纸数据加载内存中，0:EMSCRIPTEN_FETCH_LOAD_TO_MEMORY | EMSCRIPTEN_FETCH_PERSIST_FILE | EMSCRIPTEN_FETCH_APPEND，把图纸数据加到IndexedDB。
	 * @returns 是否成功打开文件
	 * @example
	 * \`\`\`ts
	 * import { MxCpp } from "mxcad";
	 * const mxcad = MxCpp.getCurrentMxCAD();
	 * mxcad.openWebFile("http://localhost:1337/mxcad/file/a9cbed3d3a351b79f24484e87bd78338.DWG.mxweb");
	 * \`\`\`
	 */
	openWebFile(sFileUrl: string, retCall?: (iRet: number) => void, isWorkThread?: boolean, initialParameter?: object, fetchAttributes?: number, isFetchTzFile?: boolean): boolean;
	/**
	* 清空当前图上内容，新建一个文件
	* @example
	* \`\`\`ts
	* import { MxCpp, McObject } from "mxcad" ;
	*
	* let mxcad:McObject = MxCpp.getCurrentMxCAD();
	* mxcad.newFile();
	* \`\`\`
	*/
	newFile(): boolean;
	/**
	 * 插件图块文件
	 * @param sFileUrl 网络文件路径 该文件为mxweb格式
	 * @param sBlkName 插入的图块的块名
	 * @param isWorkThread 是否使用工作线程打开文件，默认为 true
	 * @param fetchAttributes 1：EMSCRIPTEN_FETCH_LOAD_TO_MEMORY,把图纸数据加载内存中，0:EMSCRIPTEN_FETCH_LOAD_TO_MEMORY | EMSCRIPTEN_FETCH_PERSIST_FILE | EMSCRIPTEN_FETCH_APPEND，把图纸数据加到IndexedDB。
	 * @param isUpdataInsertBlock 是否更新已经存在的块，默认不会更新
	 * @param isUpdataSameNameBlock 是插入块的过程中，如果发现原数据库已经相同名称的块，是否也一同更新，默认不会更新
	 * @example
	 * \`\`\`ts
	 * import { MxCpp, McObject } from "mxcad"
	 * const mxcad:McObject = MxCpp.getCurrentMxCAD()
	 * const blkrecId = await mxcad.insertBlock("./blkrec.mxweb", "sBlkName");
	 * \`\`\`
	*/
	insertBlock(sFileUrl: string, sBlkName: string, isWorkThread?: boolean, fetchAttributes?: number, isUpdataInsertBlock?: boolean, isUpdataSameNameBlock?: boolean): Promise<McObjectId>;
	/**
	 * 获取当前文件名
	 * @returns 当前文件名
	 */
	getCurrentFileName(): string;
	/**
	 * 将文件保存并转换为网络路径下载
	 * @param sSaveProgramUrl 后端 POST请求接口, 接口具体实现: 先下载MxDraw云图开发包<https://www.mxdraw.com/download.html>并解压
	 * 找到MxDrawCloudServer\\Bin\\MxCAD\\MxCADSaveFile\\server.js 可以找到对应的实现接口"/mxcad/savefiledwg",
	 * "/mxcad/savefiledwg":保存dwg文件到服务器
	 * "/mxcad/savefile":保存mxweb文件到服务器
	 * 如果没有找到则在该项目下寻找这个接口的定义, 必须符合该接口的定义才能作为参数
	 * @param call 保存文件的结果回调 这里接收到的参数请自己根据接口定义中保存图纸的位置, ref.file 不是完整请求路径，只是保存后的图纸名称
	 * @returns 是否成功保存文件
	 * @example
	 * \`\`\`ts
	 * import { MxCpp, McObject } from "mxcad"
	 * const mxcad:McObject = MxCpp.getCurrentMxCAD()
	 *  MxCpp.getCurrentMxCAD().saveFileToUrl("http://localhost:3337/mxcad/savefiledwg", (iResult, sserverResult) => {
	 *    let ret = JSON.parse(sserverResult);
	 *    if (ret.ret == "ok") {
	 *        console.log(ret.file)
	 *    }
	 * })
	 * \`\`\`
	 */
	saveFileToUrl(sSaveProgramUrl: string, call: (iResult: number, sServerResult: string) => void, filename?: string, param?: any): boolean;
	/**
	 * 保存文件
	 * @param filename 另存为的新文件名称
	 * @param call 回调函数，可选参数，文件保存完成后的回调函数，参数为文件数据
	 * @param isDownland 是否下载文件，默认为 true
	 * @param isShowSaveFileDialog 是否显示保存文件对话框，默认为 true
	 * @returns 是否成功保存文件
	 * @example
	 * \`\`\`ts
	 * import { MxCpp, McObject } from "mxcad"
	 * const mxcad:McObject = MxCpp.App.getCurrentMxCAD()
	 * const fileName =  mxcad.getCurrentFileName()
	 * mxcad.saveFile("test", (data)=> {
	 *   const blob = new Blob([data.buffer], { type: "application/octet-stream" });
	 * }, false, false)
	 * \`\`\`
	 */
	saveFile(filename?: string, call?: (data: any) => void, isDownland?: boolean, isShowSaveFileDialog?: boolean, parameter?: object): boolean;
	/**
	 * 获取数据库对象
	 * @returns 数据库对象
	 * @example
	 * \`\`\`ts
	 * import { MxCpp, McObject } from "mxcad"
	 * const mxcad:McObject = MxCpp.App.getCurrentMxCAD()
	 * let layerTable = mxcad.getDatabase().getLayerTable();
	 * \`\`\`
	 */
	getDatabase(): McDbDatabase;
	/**
	* 返回数据库对象
	*/
	get database(): McDbDatabase;
	/**
	 * 设置浏览模式
	 */
	setBrowse(browse: boolean): void;
	/**
	 * 获取系统变量的字符串值
	 * @param varName 变量名称
	 * @returns 变量的字符串值
	 */
	getSysVarString(varName: string): string;
	/**
	 * 设置系统变量的字符串值
	 * @param varName 变量名称
	 * @param val 变量的字符串值
	 * @returns 是否成功设置变量值
	 */
	setSysVarString(varName: string, val: string): any;
	/**
	 * 获取系统变量的浮点数值
	 * @param varName 变量名称
	 * @returns 变量的浮点数值
	 */
	getSysVarDouble(varName: string): number;
	/**
  * 获取系统变量的点数值
  * @param varName 变量名称
  * @returns 变量的点数值
  */
	getSysVarPoint(varName: string): McGePoint3d;
	/**
   * 设置系统变量的点数值
   * @param varName 变量名称
   * @param val 变量的点数值
   * @returns 是否成功设置变量值
   */
	setSysVarPoint(varName: string, pt: McGePoint3d): boolean;
	/**
	* 设置系统变量的2维点数值
	* @param varName 变量名称
	* @param val 变量的点数值
	* @returns 是否成功设置变量值
	*/
	setSysVarPoint2d(varName: string, pt: McGePoint3d): boolean;
	/**
	 * 设置系统变量的浮点数值
	 * @param varName 变量名称
	 * @param val 变量的浮点数值
	 * @returns 是否成功设置变量值
	 */
	setSysVarDouble(varName: string, val: number): boolean;
	/**
	 * 获取系统变量的整数值
	 * @param varName 变量名称
	 * @returns 变量的整数值
	 */
	getSysVarLong(varName: string): number;
	/**
	 * 设置系统变量的整数值
	 * @param varName 变量名称
	 * @param val 变量的整数值
	 * @returns 是否成功设置变量值
	 */
	setSysVarLong(varName: string, val: number): boolean;
	/**
	 * 获取绘制颜色
	 * @returns 返回绘制颜色
	 */
	get drawColor(): McCmColor;
	/**
	 * 设置绘制颜色
	 * @param val 绘制颜色
	 * @example
	 * \`\`\`ts
	 * import { MxCpp, McObject } from 'mxcad';
	 * const mxcad:McObject = MxCpp.App.getCurrentMxCAD();
	 * mxcad.drawColor = new McCmColor(0, 0, 255);
	 * \`\`\`
	 */
	set drawColor(val: McCmColor);
	/**
   * 设置绘制颜色索引
   * @returns val 颜色索引类型
   */
	get drawColorIndex(): ColorIndexType;
	/**
	 * 设置绘制颜色索引
	 * @param val 颜色索引类型
	 * @example
	 * \`\`\`ts
	 * import { MxCpp, ColorIndexType, McObject } from "mxcad" ;
	 * const mxcad:McObject = MxCpp.App.getCurrentMxCAD();
	 * mxcad.drawColorIndex = ColorIndexType.kMagenta;
	 * \`\`\`
	 */
	set drawColorIndex(val: ColorIndexType);
	/**
	 * 获取绘制线宽
	 * @returns 返回绘制线宽
	 */
	get drawLineWeight(): McDb.LineWeight;
	/**
	 * 设置绘制线宽
	 * @param val 绘制线宽
	 * @example
	 * \`\`\`ts
	 * import { MxCpp, McDb, McObject } from "mxcad" ;
	 *
	 * const mxcad: McObject = MxCpp.App.getCurrentMxCAD();
	 * mxcad.drawLineWeight(McDb.LineWeight.kLnWtByLayer)
	 * \`\`\`
	 */
	set drawLineWeight(val: McDb.LineWeight);
	/**
	 * 获取绘制线型比例
	 * @returns 返回绘制线型比例
	 */
	get drawLineTypeScale(): number;
	/**
	 * 设置绘制线型比例
	 * @param val 绘制线型比例
	 */
	set drawLineTypeScale(val: number);
	/**
	 * 获取绘制线型
	 * @returns 返回绘制线型
	 */
	get drawLinetype(): string;
	/**
	 * 设置绘制线型
	 * @param val 绘制线型
	 * @example
	 * \`\`\`ts
	 * import { MxCpp, McObject } from "mxcad" ;
	 *
	 * const mxcad: McObject = MxCpp.App.getCurrentMxCAD();
	 * mxcad.addLinetype("MyLineType3", "30,-10");
	 * mxcad.drawLinetype = "MyLineType3";
	 * \`\`\`
	 */
	set drawLinetype(val: string);
	/**
	 * 获取绘制文字样式
	 * @returns 返回绘制文字样式
	 */
	get drawTextStyle(): string;
	/**
	 * 设置绘制文字样式
	 * @param val 绘制文字样式
	 * @example
	 * \`\`\`ts
	 * import { MxCpp, McObject } from "mxcad" ;
	 *
	 * const mxcad: McObject = MxCpp.App.getCurrentMxCAD();
	 * mxcad.addTextStyle("MyTextStyle", "italicc.shx", "gbcbig.shx", 0.7);
	 * mxcad.drawTextStyle = "MyTextStyle";
	 * \`\`\`
	 */
	set drawTextStyle(val: string);
	/**
	 * 获取绘制图层
	 * @returns 返回绘制图层
	 */
	get drawLayer(): string;
	/**
	 * 设置绘制图层
	 * @param val 绘制图层
	 * @example
	 * \`\`\`ts
	 * import { MxCpp, McObject } from 'mxcad'
	   const mxcad:McObject = MxCpp.getCurrentMxCAD();
		mxcad.drawLayer = "MtextLayer";
	 * \`\`\`
	 */
	set drawLayer(val: string);
	/**
	 * 添加图层
	 * @param pszName 图层名称
	 * @example
	 * \`\`\`ts
	 * import { MxCpp, McObject } from "mxcad"
	 * const mxcad:McObject = MxCpp.getCurrentMxCAD()
	 * mxcad.addLayer("图层名称")
	 * \`\`\`
	 */
	addLayer(string: string): McObjectId;
	/**
	 * 添加文字样式
	 * @param pszName 样式名称
	 * @param pszFileName 字体文件名
	 * @param pszBigFontFileName 大字体文件名
	 * @param dXScale X 方向缩放比例
	 * @example
	 * \`\`\`ts
	 * import { MxCpp, McObject } from "mxcad"
	 * const mxcad:McObject = MxCpp.getCurrentMxCAD()
	 * mxcad.addTextStyle("MyLineTypeTextStyle", "txt.shx", "hztxt.shx", 1);
	 * \`\`\`
	 */
	addTextStyle(sName: string, sFileName: string, sBigFontFileName: string, dXScale?: number): McObjectId;
	/**
	 * 添加使用TrueType字体的文字样式
	 * @param pszName 样式名称
	 * @param sTrueTypeFontName TrueType字体名,为空使用默认TrueType字体.
	 * @param dXScale X 方向缩放比例
	 * @example
	 * \`\`\`ts
	 * import { MxCpp, McObject } from "mxcad"
	 * const mxcad:McObject = MxCpp.getCurrentMxCAD()
	 * mxcad.AddTureTypeTextStyle("MyTrueTypeTextStyle");
	 * \`\`\`
	 */
	AddTureTypeTextStyle(sName: string, sTrueTypeFontName?: string, dXScale?: number): McObjectId;
	/**
	 * 添加线型
	 * @param pszName 线型名称
	 * @param pszLineDefine 线型定义
	 * @example
	 * \`\`\`ts
	 * import { MxCpp, McObject } from "mxcad"
	 * const mxcad:McObject = MxCpp.getCurrentMxCAD()
	 * //定义虚线数据据,"MyLineType"是线型名，"6,-8"是虚线的一个单位定义，6是实线长，-8是空格长。
	 * mxcad.addLinetype("MyLineType", "6,-10");
	 * \`\`\`
	 */
	addLinetype(sName: string, sLineDefine: string): McObjectId;
	/**
	 * 添加线型
	 * @param pszName 线型名称
	 * @param pszLineDefine 线型定义
	 * @param pszTextStyle 文字样式
	 * @example
	 * \`\`\`ts
	 * import { MxCpp, McObject } from "mxcad"
	 * const mxcad:McObject = MxCpp.getCurrentMxCAD()
	 * let lintype = mxcad.addLinetypeEx("TestMyLine", '.5,-.2,["HW",STANDARD,S=.1,R=0.0,X=-0.1,Y=-.05],-.2', "");
	 * \`\`\`
	 */
	addLinetypeEx(sName: string, sLineDefine: string, sTextStyle?: string): McObjectId;
	/**
	 * 绘制直线
	 * @param dX1 起点 X 坐标
	 * @param dY1 起点 Y 坐标
	 * @param dZ1 起点 Z 坐标
	 * @param dX2 终点 X 坐标
	 * @param dY2 终点 Y 坐标
	 * @param dZ2 终点 Z 坐标
	 * @example
	 * \`\`\`ts
	 * import { MxCpp, McObject } from "mxcad"
	 * const mxcad:McObject = MxCpp.getCurrentMxCAD()
	 * mxcad.drawLine(0, 60, 100, 60);
	 * \`\`\`
	 */
	drawLine(dX1: number, dY1: number, dX2: number, dY2: number): McObjectId;
	drawLine3d(dX1: number, dY1: number, dZ1: number, dX2: number, dY2: number, dZ2: number): McObjectId;
	/**
	 * 添加标注样式
	 * @param pszName 样式名称
	 * @param pszDoubleData 双精度型数据
	 * @param pszIntData 整型数据
	 * @param pszStringData 字符串型数据
	 * @param pszIdData ID 型数据
	 * @example
	 * \`\`\`ts
	 * import { MxCpp, McObject } from "mxcad"
	 * const mxcad:McObject = MxCpp.getCurrentMxCAD()
	 * mxcad.addDimStyle("MyDimStyle2", "41,0.18,141,0.09,40,200", "77,1,271,3", "", "");
	 * \`\`\`
	 */
	addDimStyle(pszName: string, pszDoubleData: string, pszIntData: string, pszStringData: string, pszIdData: string): McObjectId;
	/**
	 * 获取当前绘制的标注样式
	 */
	get drawDimStyle(): string;
	/**
	 * 设置当前绘制的标注样式
	 * @param val 样式名称
	 * @example
	 * \`\`\`ts
	 * import { MxCpp, McObject } from "mxcad"
	 * const mxcad:McObject = MxCpp.getCurrentMxCAD()
	 * mxcad.drawDimStyle = "MyDimStyle2"
	 * \`\`\`
	 */
	set drawDimStyle(val: string);
	/**
	 * 把当前路径做上排除标记，主要用于填充的绘制，把这个路径组成的闭合区域在填充中挖去
	 * @param isExclude 是否排除
	 * @example
	 * \`\`\`ts
	 * import { MxCpp, McObject } from "mxcad"
	 * const mxcad:McObject = MxCpp.getCurrentMxCAD()
	   //绘制一个实心有圆弧边界填充,中间挖去一块.
		mxcad.pathMoveToEx(440, 3310, 0, 0, 0);
		mxcad.pathLineTo(480, 3310);
		mxcad.pathLineTo(480, 3360);
		mxcad.pathLineTo(450, 3340);
		// 把上面定义的路径定义填充排除区域.
		mxcad.pathMakeExclude(true);
	 * \`\`\`
	 */
	pathMakeExclude(isExclude: boolean): void;
	/**
	 * 增加一个图案定义
	 * @param sName 图案名称
	 * @param sDefinitionData 图案默认定义数据
	 * @example
	 * \`\`\`ts
	 * import { MxCpp, McObject } from "mxcad"
	 *  const mxcad:McObject = MxCpp.getCurrentMxCAD()
		//angle, x-origin,y-origin, delta-x,delta-y,dash-1,dash-2, …
		//45 = angle 是图案线角度.
		//0 = x-origin 是第一个填充线经过的点位置X坐标
		//0 = y-origin 是第一个填充线经过的点位置Y坐标
		//0 = delta-x   是下一个填充线相对前一个线的X方向偏移
		//0.125 = delta-y   是下一个填充线相对前一个线的Y方向偏移
		mxcad.addPatternDefinition("MyHatchPattern1", "((45, 0,0, 0,0.125))");
	 * \`\`\`
	 */
	addPatternDefinition(sName: string, sDefinitionData: string): void;
	/**
	 * 获取当前绘制的线型定义
	 * @example
	 * \`\`\`ts
	 * import { MxCpp, McObject } from "mxcad"
	 * const mxcad: McObject = MxCpp.getCurrentMxCAD()
	 * mxcad.drawPatternDefinition = "MyHatchPattern1";
	 * \`\`\`
	 */
	get drawPatternDefinition(): string;
	/**
	 * 设置当前绘制的线型定义
	 * @param val 线型定义
	 */
	set drawPatternDefinition(val: string);
	/**
	 * 获取当前绘制的线宽
	 * @example
	 * \`\`\`ts
	 * import { MxCpp, McObject } from "mxcad"
	 * const mxcad: McObject = MxCpp.getCurrentMxCAD()
	 * mxcad.drawLineWidth = 4;
	 * \`\`\`
	 */
	get drawLineWidth(): number;
	/**
	 * 设置当前绘制的线宽
	 * @param val 线宽
	 */
	set drawLineWidth(val: number);
	/**
	 * 绘制圆弧
	 * @param dCenterX 圆心 X 坐标
	 * @param dCenterY 圆心 Y 坐标
	 * @param dRadius 半径
	 * @param dStartAng 起始角度，单位为弧度
	 * @param dEndAng 结束角度，单位为弧度
	 * @returns 成功返回 1，失败返回 0
	 * @example
	 * \`\`\`ts
	 * import { MxCpp, McObject } from "mxcad"
	 * const mxcad: McObject = MxCpp.getCurrentMxCAD()
	 * mxcad.drawArc(300, 1000, 100, 30, 200);
	 * \`\`\`
	 */
	drawArc(dCenterX: number, dCenterY: number, dRadius: number, dStartAng: number, dEndAng: number): McObjectId;
	/**
	 * 绘制圆弧
	 * @param dStartPointX 起始点 X 坐标
	 * @param dStartPointY 起始点 Y 坐标
	 * @param dMidPointX 中间点 X 坐标
	 * @param dMidPointY 中间点 Y 坐标
	 * @param dEndPointX 结束点 X 坐标
	 * @param dEndPointY 结束点 Y 坐标
	 * @example
	 * \`\`\`ts
	 * import { MxCpp, McObject } from "mxcad"
	 * const mxcad:McObject = MxCpp.getCurrentMxCAD()
	 * //由圆弧上三个点绘制圆弧
	 * mxcad.drawArc2(800, 1000, 900, 1200, 1000, 900);
	 * \`\`\`
	 */
	drawArc2(dStartPointX: number, dStartPointY: number, dMidPointX: number, dMidPointY: number, dEndPointX: number, dEndPointY: number): McObjectId;
	/**
	* 绘制圆弧
	* @param dStartPointX 起始点 X 坐标
	* @param dStartPointY 起始点 Y 坐标
	* @param dEndPointX 结束点 X 坐标
	* @param dEndPointY 结束点 Y 坐标
	* @param dBulge 凸度
	* @example
	* \`\`\`ts
	* import { MxCpp, McObject } from "mxcad"
	* const mxcad:McObject = MxCpp.getCurrentMxCAD()
	 //由圆弧上的开始点，结束度和凸度会圆弧
	  mxcad.drawLineWidth = 40;
	  mxcad.drawArc3(1200, 1000, 1400, 1000, 0.6);
	* \`\`\`
	*/
	drawArc3(dStartPointX: number, dStartPointY: number, dEndPointX: number, dEndPointY: number, dBulge: number): McObjectId;
	/**
	 * 绘制圆
	 * @param dCenterX 圆心 X 坐标
	 * @param dCenterY 圆心 Y 坐标
	 * @param dRadius 半径
	 * @example
	 * \`\`\`ts
	 * import { MxCpp, McObject } from "mxcad"
	 * const mxcad:McObject = MxCpp.getCurrentMxCAD()
	   mxcad.drawCircle(0, 0, 120);
	 * \`\`\`
	 */
	drawCircle(dCenterX: number, dCenterY: number, dRadius: number): McObjectId;
	/**
	 * 加载一个外部图片到当前上下文，方便后面使用。
	 * @param imageUrl 图片路径
	 * @param call 回调函数
	 * @example
	 * \`\`\`ts
	 * import { MxCpp, McObject } from "mxcad"
	 * const mxcad: McObject = MxCpp.getCurrentMxCAD()
	 *  mxcad.loadImage(imagUrl, (image) => {
		if (!image) {
			console.log("loadImage failed");
			return;
		}
		let width = mxcad.mxdraw.viewCoordLong2Cad(100);
		let height = (image.height / image.width) * width;
		idImage = mxcad.drawImage((pt as any).x, (pt as any).y, width, height, 0, imagUrl,true);
		mxcad.updateDisplay();
	});
	 * \`\`\`
	*/
	loadImage(imageUrl: string, call: (image: any) => void): void;
	/**
	 * 绘制一个图片
	 * @param dPosX 图片 X 坐标
	 * @param dPosY 图片 Y 坐标
	 * @param dWidth 图片宽度
	 * @param dHeight 图片高度
	 * @param dAng 图片角度
	 * @param imageUrl 图片路径
	 */
	drawImage(dPosX: number, dPosY: number, dWidth: number, dHeight: number, dAng: number, imageUrl: string, isConvertBase64?: boolean): McObjectId;
	/**
	 * 添加一个图片定义到cad数据库中 。
	 * @param imageUrl 图片路径
	 * @param sName 图片定义名称
	 * @example
	 * \`\`\`ts
	 * import { MxCpp, McObject } from "mxcad"
		let mxcad:McObject = MxCpp.getCurrentMxCAD();
		let imagUrl = "https://cdn.pixabay.com/photo/2022/11/15/12/23/winter-7593872_960_720.jpg";
		mxcad.loadImage(imagUrl, (imagedata) => {
			if (!imagedata) {
				console.log("loadImage failed");
				return;
			}
			let imagedefid = mxcad.addImageDefine(imagUrl,"winter-7593872_960_720.jpg",true);
			mxcad.updateDisplay();
		});
	 * \`\`\`
	 */
	addImageDefine(imageUrl: string, sName?: string, isConvertBase64?: boolean): McObjectId;
	/**
	 * 绘制椭圆
	 * @param dCenterX 椭圆中心 X 坐标
	 * @param dCenterY 椭圆中心 Y 坐标
	 * @param dMajorAxisX 长轴 X 坐标
	 * @param dMajorAxisY 长轴 Y 坐标
	 * @param dRadiusRatio 短轴与长轴的比例
	 * @returns 成功返回 1，失败返回 0
	 * @example
	 * \`\`\`ts
	 * import { MxCpp, McObject } from "mxcad"
	 * const mxcad:McObject = MxCpp.getCurrentMxCAD()
	   mxcad.drawEllipse(0, 1400, 100, 0, 0.7);
	 * \`\`\`
	 */
	drawEllipse(dCenterX: number, dCenterY: number, dMajorAxisX: number, dMajorAxisY: number, dRadiusRatio: number): McObjectId;
	/**
	 * 绘制椭圆弧
	 * @param dCenterX 椭圆中心 X 坐标
	 * @param dCenterY 椭圆中心 Y 坐标
	 * @param dMajorAxisX 长轴 X 坐标
	 * @param dMajorAxisY 长轴 Y 坐标
	 * @param dRadiusRatio 短轴与长轴的比例
	 * @param dStartAng 起始角度，单位为弧度
	 * @param dEndAng 结束角度，单位为弧度
	 * @example
	 * \`\`\`ts
	 * import { MxCpp, McObject } from "mxcad"
	 * const mxcad:McObject = MxCpp.getCurrentMxCAD()
	   mxcad.drawEllipseArc(0, 1600, 80, 30, 0.4, 30, 200);
	 * \`\`\`
	 */
	drawEllipseArc(dCenterX: number, dCenterY: number, dMajorAxisX: number, dMajorAxisY: number, dRadiusRatio: number, dStartAng: number, dEndAng: number): McObjectId;
	/**
	 * 绘制点
	 * @param dX X 坐标
	 * @param dY Y 坐标
	 */
	drawPoint(dX: number, dY: number): McObjectId;
	/**
	 * 绘制实体
	 * @param dX1 第一个点 X 坐标
	 * @param dY1 第一个点 Y 坐标
	 * @param dX2 第二个点 X 坐标
	 * @param dY2 第二个点 Y 坐标
	 * @param dX3 第三个点 X 坐标
	 * @param dY3 第三个点 Y 坐标
	 * @param dX4 第四个点 X 坐标
	 * @param dY4 第四个点 Y 坐标
	 * @returns 成功返回实体号，失败返回 0
	 */
	drawSolid(dX1: number, dY1: number, dX2: number, dY2: number, dX3: number, dY3: number, dX4: number, dY4: number): McObjectId;
	/**
	 * 绘制多行文本
	 * @param dPosX 文本位置 X 坐标
	 * @param dPosY 文本位置 Y 坐标
	 * @param pszContents 文本内容
	 * @param dHeight 文本高度
	 * @param dWidth 文本宽度
	 * @param dRotation 旋转角度，单位为弧度
	 * @param iAttachment 对齐方式
	 * @returns 成功返回 1，失败返回 0
	 * @example
	 * \`\`\`ts
	 * import { MxCpp, McObject } from "mxcad"
	 * const mxcad:McObject = MxCpp.getCurrentMxCAD()
	   mxcad.drawMText(0, -100, "控件:\\\\P多行文字测试", 50, 400, 0, 1);
	 * \`\`\`
	 */
	drawMText(dPosX: number, dPosY: number, sContents: string, dHeight: number, dWidth: number, dRotation: number, iAttachment: McDb.AttachmentPoint): McObjectId;
	/**
	 * 绘制单行文本
	 * @param dPosX 文本位置 X 坐标
	 * @param dPosY 文本位置 Y 坐标
	 * @param pszText 文本内容
	 * @param dHeight 文本高度
	 * @param dRotation 旋转角度，单位为弧度
	 * @param horizontalMode 横向对齐方式
	 * @param verticalMode 纵向对齐方式
	 * @returns 成功返回 1，失败返回 0
	 * @example
	 * \`\`\`ts
	 * import { MxCpp, McObject } from "mxcad"
	 * const mxcad:McObject = MxCpp.getCurrentMxCAD()
	   mxcad.drawText(0, 1900, "绘图控件文字测试", 100, 0, 0, 1);
	 * \`\`\`
	 */
	drawText(dPosX: number, dPosY: number, pszText: string, dHeight: number, dRotation: number, horizontalMode: McDb.TextHorzMode, verticalMode: McDb.TextVertMode): McObjectId;
	/**
	 * 绘制块参照
	 * @param dPosX 参照位置 X 坐标
	 * @param dPosY 参照位置 Y 坐标
	 * @param pszBlkName 块名
	 * @param dScale 缩放比例
	 * @param dAng 旋转角度，单位为弧度
	 * @returns 成功返回 1，失败返回 0
	 */
	drawBlockReference(dPosX: number, dPosY: number, sBlkName: string, dScale: number, dAng: number): McObjectId;
	/**
	 * 绘制对齐标注
	 * @param dExtLine1PointX 第一条尺线起点 X 坐标
	 * @param dExtLine1PointY 第一条尺线起点 Y 坐标
	 * @param dExtLine2PointX 第二条尺线起点 X 坐标
	 * @param dExtLine2PointY 第二条尺线起点 Y 坐标
	 * @param dTextPositionX 文本位置 X 坐标
	 * @param dTextPositionY 文本位置 Y 坐标
	 * @returns 成功返回 1，失败返回 0
	 * @example
	 * \`\`\`ts
	 * import { MxCpp, McObject } from "mxcad"
	 * const mxcad:McObject = MxCpp.getCurrentMxCAD()
	   mxcad.drawDimAligned(0, 4000, 300, 4500, 150, 4600);
	 * \`\`\`
	 */
	drawDimAligned(dExtLine1PointX: number, dExtLine1PointY: number, dExtLine2PointX: number, dExtLine2PointY: number, dTextPositionX: number, dTextPositionY: number): McObjectId;
	/**
	 * 绘制角度标注
	 * @param dAngleVertexX 角度顶点 X 坐标
	 * @param dAngleVertexY 角度顶点 Y 坐标
	 * @param dFirstEndPointX 第一条尺线起点 X 坐标
	 * @param dFirstEndPointY 第一条尺线起点 Y 坐标
	 * @param dSecondEndPointX 第二条尺线起点 X 坐标
	 * @param dSecondEndPointY 第二条尺线起点 Y 坐标
	 * @param dTextPointX 文本位置 X 坐标
	 * @param dTextPointY 文本位置 Y 坐标
	 * @returns 成功返回 1，失败返回 0
	 * @example
	 * \`\`\`ts
	 * import { MxCpp, McObject } from "mxcad"
	 * const mxcad:McObject = MxCpp.getCurrentMxCAD()
	   mxcad.drawDimAngular(500, 5000, 0, 5500, 1000, 5500, 500, 5500);
	 * \`\`\`
	 */
	drawDimAngular(dAngleVertexX: number, dAngleVertexY: number, dFirstEndPointX: number, dFirstEndPointY: number, dSecondEndPointX: number, dSecondEndPointY: number, dTextPointX: number, dTextPointY: number): McObjectId;
	/**
	 * 绘制直径标注
	 * @param dChordPointX 弦线端点 X 坐标
	 * @param dChordPointY 弦线端点 Y 坐标
	 * @param dFarChordPointX 弦线远端点 X 坐标
	 * @param dFarChordPointY 弦线远端点 Y 坐标
	 * @param dLeaderLength 引线长度
	 * @returns 成功返回 1，失败返回 0
	 * @example
	 * \`\`\`ts
	 * import { MxCpp, McObject } from "mxcad"
	 * const mxcad:McObject = MxCpp.getCurrentMxCAD()
	   mxcad.drawDimDiametric(500, 0, -500, 0, 20);
	 * \`\`\`
	 */
	drawDimDiametric(dChordPointX: number, dChordPointY: number, dFarChordPointX: number, dFarChordPointY: number, dLeaderLength: number): McObjectId;
	/**
	 * 绘制旋转标注
	 * @param dExtLine1PointX 第一条尺线起点 X 坐标
	 * @param dExtLine1PointY 第一条尺线起点 Y 坐标
	 * @param dExtLine2PointX 第二条尺线起点 X 坐标
	 * @param dExtLine2PointY 第二条尺线起点 Y 坐标
	 * @param dDimLineLocationX 标注线位置 X 坐标
	 * @param dDimLineLocationY 标注线位置 Y 坐标
	 * @param dRotationAngle 旋转角度，单位为弧度
	 * @returns 成功返回 1，失败返回 0
	 * @example
	 * \`\`\`ts
	 * import { MxCpp, McObject } from "mxcad"
	 * const mxcad:McObject = MxCpp.getCurrentMxCAD()
	   mxcad.drawDimRotated(0, 7000, 600, 7000, 250, 7050, 0);
	 * \`\`\`
	 */
	drawDimRotated(dExtLine1PointX: number, dExtLine1PointY: number, dExtLine2PointX: number, dExtLine2PointY: number, dDimLineLocationX: number, dDimLineLocationY: number, dRotationAngle: number): McObjectId;
	/**
	 * 绘制标注线性尺寸
	 * @param dDefinitionPointX - 定义点 X 坐标
	 * @param dDefinitionPointY - 定义点 Y 坐标
	 * @param dDeaderEndPointX - 标注终点 X 坐标
	 * @param dDeaderEndPointY - 标注终点 Y 坐标
	 * @param isUseXAxis - 是否沿 X 轴方向标注
	 * @returns 绘制结果
	 * @example
	 * \`\`\`ts
	 * import { MxCpp, McObject } from "mxcad"
	 * const mxcad:McObject = MxCpp.getCurrentMxCAD()
	   mxcad.drawDimOrdinate(500, 0, -500, 0, true);
	 * \`\`\`
	 */
	drawDimOrdinate(dDefinitionPointX: number, dDefinitionPointY: number, dDeaderEndPointX: number, dDeaderEndPointY: number, isUseXAxis: boolean): McObjectId;
	/**
	 * 绘制标注径向尺寸
	 * @param dCenterX - 中心点 X 坐标
	 * @param dCenterY - 中心点 Y 坐标
	 * @param dChordPointX - 弦线端点 X 坐标
	 * @param dChordPointY - 弦线端点 Y 坐标
	 * @param dLeaderLength - 标注线长度
	 * @returns 绘制结果
	 * @example
	 * \`\`\`ts
	 * import { MxCpp, McObject } from "mxcad"
	 * const mxcad:McObject = MxCpp.getCurrentMxCAD()
	   mxcad.drawDimOrdinate(0, 0, 0, 500, 20);
	 * \`\`\`
	 */
	drawDimRadial(dCenterX: number, dCenterY: number, dChordPointX: number, dChordPointY: number, dLeaderLength: number): McObjectId;
	/**
	 * 将路径移动到指定位置
	 * @param dX - X 坐标
	 * @param dY - Y 坐标
	 * @example
	 * \`\`\`ts
	 * import { MxCpp, McObject } from "mxcad"
	 * const mxcad:McObject = MxCpp.getCurrentMxCAD()
		mxcad.pathMoveTo(0, 300);
	 * \`\`\`
	 */
	pathMoveTo(dX: number, dY: number): void;
	/**
	 * 移动路径到指定位置，同时指定起始宽度、终止宽度和凸度
	 * @param dX - X 坐标
	 * @param dY - Y 坐标
	 * @param dStartWidth - 起始宽度
	 * @param dEndWidth - 终止宽度
	 * @example
	 * \`\`\`ts
	 * import { MxCpp, McObject } from "mxcad"
	 * const mxcad:McObject = MxCpp.getCurrentMxCAD()
	   mxcad.pathMoveToEx(1000, 300, 10, 10, 0);
	 * \`\`\`
	 */
	pathMoveToEx(dX: number, dY: number, dStartWidth: number, dEndWidth: number, dBulge: number): void;
	/**
	 * 从当前位置画一条直线到指定位置
	 * @param dX - X 坐标
	 * @param dY - Y 坐标
	 * @example
	 * \`\`\`ts
	 * import { MxCpp, McObject } from "mxcad"
	 * const mxcad:McObject = MxCpp.getCurrentMxCAD()
	   mxcad.pathLineTo(100, 300);
	 * \`\`\`
	 */
	pathLineTo(dX: number, dY: number): void;
	/**
	 * 从当前位置画一条直线到指定位置，同时指定起始宽度、终止宽度和凸度
	 * @param dX - X 坐标
	 * @param dY - Y 坐标
	 * @param dStartWidth - 起始宽度
	 * @param dEndWidth - 终止宽度
	 * @param dBulge - 凸度
	 * @example
	 * \`\`\`ts
	 * import { MxCpp, McObject } from "mxcad"
	 * const mxcad:McObject = MxCpp.getCurrentMxCAD()
	   mxcad.pathLineToEx(1000, 500, 30, 0, 0);
	 * \`\`\`
	 */
	pathLineToEx(dX: number, dY: number, dStartWidth: number, dEndWidth: number, dBulge: number): void;
	/**
	 * 根据圆对象创建一个路径
	 * @example
	 * \`\`\`ts
	 * import { MxCpp, McObject } from "mxcad"
	 * const mxcad:McObject = MxCpp.getCurrentMxCAD()
	   mxcad.pathCircle(0, 0, 20);
	 * \`\`\`
	*/
	pathCircle(dCenX: number, dCenY: number, dR: number, dPrecision?: number, dWidth?: number): boolean;
	/**
	 * 将路径转换为折线
	 * @returns 转换结果
	 */
	drawPathToPolyline(): McObjectId;
	/**
	 * 将路径转换为样条曲线
	 * @returns 转换结果
	 */
	drawPathToSpline(): McObjectId;
	/**
	 * 闭合路径
	 */
	pathMakeClosed(): void;
	/**
	 * 将路径转换为填充图案
	 * @param dPatternScale - 图案缩放比例
	 * @returns 转换结果
	 */
	drawPathToHatch(dPatternScale?: number): McObjectId;
	/**
	 * 绘制实体
	 * @param entity - 实体对象
	 * @returns 绘制结果
	 * @example
	 * \`\`\`ts
	 * import { McDbPolyline, MxCpp } from
	 * let pl = new McDbPolyline();
	   pl.addVertexAt(new McGePoint3d(100, 100, 100));
	   pl.addVertexAt(new McGePoint3d(200, 100, 500));
	   pl.addVertexAt(new McGePoint3d(300, 400, 200));
	   MxCpp.getCurrentCAD().drawEntity(pl);
	 * \`\`\`
	 */
	drawEntity(entity: McDbEntity): McObjectId;
	/**
	* 绘制填充对象
	* @param entity - 填充对象对象
	* @returns 绘制对象id
	*/
	drawHatch(hatch: McDbHatch, dPatternScale?: number): McObjectId;
	/**
  * 将 lIdIndex 转换成 McDbObject 对象
  * @param lIdIndex - 对象 ID
  * @returns 与 ID 对应的 McDbObject 对象，如果对象不存在则返回 null
  */
	objectIdToObject(lIdIndex: number): McDbObject | null;
	/**
	 * 销毁指定的 McRxObjectImp 对象
	 * @param pObjectImp - 待销毁的 McRxObjectImp 对象
	 */
	destroyObject(pObjectImp: McRxObjectImp): void;
	/**
	* 得到所有布局名
	*/
	getAllLayoutName(): McGeStringArray;
	/**
	* 设置当前布局名
	* @param layoutName 布局名称
	*/
	setCurrentLayout(layoutName: string): void;
	/**
	 * 返加MxCpp对象，它会在MxDraw模块中调用。
	*/
	getMxCpp(): any;
	/**
   * 返回当前视区的显示范围,cad坐标。
   * @returns 当前视区显示范围
   */
	getViewCADCoord(): {
		pt1: McGePoint3d;
		pt2: McGePoint3d;
		pt3: McGePoint3d;
		pt4: McGePoint3d;
	};
	/**
	 * 更新显示
	 * @param isImmediate 是否立即更新
	 * @param delayTime 延迟更新时间
	*/
	updateDisplay(isImmediate?: boolean, delayTime?: number): void;
	/**
	* 更新图层的显示
   */
	updateLayerDisplayStatus(): void;
	/**
   * 初始化用户注册数据.
   * @param sRegist 注册数据
  */
	initRegist(sRegist: string): void;
	/**
	 * 当前程序是否是试用版本.
	*/
	isTryVersion(): boolean;
	/**
	* 设置视区的背景色.
	* @example
	* \`\`\`ts
	* import { MxCpp, McObject } from "mxcad"
	* const mxcad:McObject = MxCpp.getCurrentMxCAD()
	* mxcad.setViewBackgroundColor(255, 255, 255)
	* \`\`\`
   */
	setViewBackgroundColor(red: number, green: number, blue: number): void;
	/**
	 * 返回当前数据库中设置的绘制颜色，它会自动依据背景色，把黑白色转换。
	*/
	getCurrentDatabaseDrawColor(): THREE.Color;
	/**
	 * 回退到上一个命令或标记处
	*/
	undo(): void;
	/**
	 *反回退，重做。
	*/
	redo(): void;
	/**
	 *在当前设置一个回退标记.
	*/
	undoMark(): void;
}
/**
 * McAppType 类，提供了 MxCAD 的一些基本操作。
 * @example
 * \`\`\`ts
 * import { MxCpp } from "mxcad";
 * const McAppType = MxCpp.App
 * \`\`\`
 */
export declare class McAppType {
	/** 内部实现对象 */
	private imp;
	/** MxCAD辅助 */
	MxCADAssist: any;
	/** id 转换为 McDbObject */
	private objectIdToObjectCalls;
	/** 根据类型转为实例 */
	private classNameToCreateCalls;
	/** shx字体 */
	private shxFonts;
	/** shx big 字体 */
	private shxBigFonts;
	/** TrueType字体 */
	private trueFonts;
	/**
	 * 初始化 McAppType 对象。
	 * @param imp 传入的 imp 对象。
	 */
	init(imp: any): void;
	/**
	 * 获取 imp 对象。
	 * @returns 返回 imp 对象。
	 */
	getImp(): any;
	/**
	 * 获取最后一次调用的结果。
	 * @returns 返回最后一次调用的结果。
	 */
	getLastCallResult(): number;
	/**
	 * 销毁对象。
	 * @param pObject 要销毁的对象。
	 */
	destroyObject(pObject: McRxObjectImp): void;
	/**
	 * 获取当前的 MxDraw 对象。
	 * @returns 返回当前的 McObject 对象。
	 * @example
	 * \`\`\`ts
	 * import { MxCpp } from 'mxcad'
	 * const mxcad = MxCpp.App.getCurrentMxCAD()
	 * \`\`\`
	 */
	getCurrentMxCAD(): McObject;
	/**
	 * 将 RGB 值转换为索引。
	 * @param red 红色值。
	 * @param green 绿色值。
	 * @param blue 蓝色值。
	 * @param bAutoNearest 是否自动获取最近的颜色值。
	 * @returns 返回转换后的索引值。
	 * @example
	 * \`\`\`ts
	 * import { MxCpp } from 'mxcad'
	 * const colorIndex = MxCpp.App.mcedRGB2Index(255, 0, 0, bAutoNearest)
	 * \`\`\`
	 */
	mcedRGB2Index(red: number, green: number, blue: number, bAutoNearest?: boolean): number;
	/**
	 * 设置默认的视区的背景色.
	 * @param red 红色值。
	 * @param green 绿色值。
	 * @param blue 蓝色值。
	 * @example
	 * \`\`\`ts
	 * import { MxCpp } from 'mxcad'
	 * MxCpp.App.setDefaultViewBackgroundColor(0, 0, 0)
	 * \`\`\`
	*/
	setDefaultViewBackgroundColor(red: number, green: number, blue: number): void;
	/**
   * 判断一个对象id是否指类类型名对象
   * @param lIdIndex 对象id索引
   * @param className 对象名称
   */
	objectIdIsKindOf(lIdIndex: number, className: string): boolean;
	/**
	 * 初始化绘图环境、加载插件、设置绘图参数、创建对象等操作
	 */
	private initCalls;
	/**
	 * 将对象 id 转换为 McDbObject 对象。
	 * @param lIdIndex 对象的 id。
	 * @returns 返回转换后的 McDbObject 对象，如果转换失败，则返回 null。
	 */
	objectIdToObject(lIdIndex: number): McDbObject | null;
	/**
	 * 创建克隆对象。
	 * @param clonobjImp 被克隆的对象。
	 * @returns 返回创建的 McDbObject 对象。
	 */
	createCloneObject(clonobjImp: any): McDbObject | null;
	/**
	* 配置字体加载位置，默值是fonts
	* @param path 字体文件路径
	*/
	setFontFilePath(path: string): void;
	/**
	* 配置默认的TrueType字体
	* @param sTrueTypeFontName TrueType字体名
	*/
	setDefaultTrueTypeFontFile(sTrueTypeFontName: string): void;
	/**
	* 配置需要通过网络加载的shx字体
	* @param fontfiles 加载的字体文件
	* @example
	* \`\`\`ts
	* import { MxCpp } from 'mxcad'
	* MxCpp.App.addNetworkLoadingFont( ["txt.shx","simplex.shx","aaa.shx","ltypeshp.shx","complex.shx"]);
	* \`\`\`
	*/
	addNetworkLoadingFont(fontfiles: string | string[]): void;
	/**
	* 配置需要通过网络加载的bigfont shx字体
	* @param fontfiles 加载的字体文件
	* @example
	* \`\`\`ts
	* import { MxCpp } from 'mxcad'
	* MxCpp.App.addNetworkLoadingBigFont(["hztxt.shx", "gbcbig.shx"])
	* \`\`\`
	*/
	addNetworkLoadingBigFont(fontfiles: string | string[]): void;
	/**
	* 配置需要通过网络加载的Truetype字体
	* @param fontname 字体名
	* @param fontzhName 字体中文名
	* @param fontfile 加载字体文件
	* @example
	* \`\`\`ts
	* import { MxCpp } from 'mxcad'
	* MxCpp.App.addNetworkLoadingTrueTypeFont(["simsun","syadobe"],["思原宋体","思原黑体"],["stadobe.otf","syadobe.otf"]);
	* \`\`\`
	*/
	addNetworkLoadingTrueTypeFont(fontname: string[], fontzhName: string[], fontfile: string[]): void;
	/**
	* 得到当前支持的所有shx字体.
	*/
	getShxFonts(): string[];
	/**
	* 得到当前支持的所有bigfont shx字体.
	*/
	getShxBigFonts(): string[];
	/**
	* 通知cad程序，将来要使用的字体需要加载，方便后面程序使用.
	* @param vecShxFonst shx字体
	* @param vecBigShxFonst bigfont shx字体
	* @param vecTureTypeFonts Truetype字体
	* @param retCall 回调函数
	* @example
	* \`\`\`ts
	* import { MxCpp } from 'mxcad'
		MxCpp.App.loadFonts([], [], ["syadobe","simsun"], () => {
			console.log("加载字体完成");
		});
	* \`\`\`
	*/
	loadFonts(vecShxFonst: string[], vecBigShxFonst: string[], vecTureTypeFonts: string[], retCall: () => void): void;
	/**
	* 得到当前支持的所有TrueType字体.
	* @returns { object } name 字体名| zhname 字体中文名 | file 字体文件
	*/
	getTrueTypeFonts(): {
		name: string;
		zhname: string;
		file: string;
	}[];
	/**
	* 得当前程序的版本信息
	*/
	getVersionString(): string;
}
/**
 * MxCppType 类封装了一系列与 CAD 相关的操作，包括创建点、向量、获取当前对象等
 */
export declare class MxCppType {
	/**
	 * MxCpp 程序集
	 */
	mxcadassemblyimp?: any;
	/**
	 * McAppType 实例
	 */
	App: McAppType;
	/**
	* PropertiesWindow 属必窗口功能调用实例
	*/
	PropertiesWindow: MxPropertiesWindowCustom;
	/**
   * Mx AI实例
   */
	Ai: MxAI;
	/**
	 * 获取上一次调用的结果
	 * @returns {number} 调用结果
	 */
	getCallResult(): number;
	/**
	 * 创建新的 McGePoint3d 实例
	 * @param {any} pt 点坐标
	 * @returns {McGePoint3d} McGePoint3d 实例
	 */
	newMcGePoint3d(pt?: any): McGePoint3d;
	/**
 * 创建新的 McGeVector3d 实例
 * @param {any} pt 点坐标
 * @returns {McGePoint3d} McGePoint3d 实例
 */
	newMcGeVector3d(pt?: any): McGeVector3d;
	/**
	 * 返回当前活动的CAD对象
	 */
	getCurrentMxCAD(): McObject;
	/**
	 * 返回当前活动的CAD对象的数据库对象.
	 */
	getCurrentDatabase(): McDbDatabase;
	/**
	* 把hex格式的Gb2312编码的转成utf8
	*/
	decodeFromGb2312(strHex: string): string;
	/**
   * 把utf8转成hex格式的Gb2312编码
   */
	encodeToGb2312(str: string): string;
}
/**
 * MxCADUI 模块提供插件程序使用的接口.
 */
export interface MxCADUI {
	/**
	 * 获取文件下载配置
	 */
	getUploadFileConfig: () => {
		baseUrl: string;
		saveDwgUrl: string;
		mxfilepath: string;
		saveUrl: string;
		printPdfUrl: string;
	};
	/**
	 * 初始化
	 * @param plugin 基础配置
	 */
	init: (plugin: MxCADPluginBase) => void;
	mxcad: McObject;
	mxmap: MxMap;
}
/**
 * 初始化、管理或查询地图相关联的默认数据
 */
export declare class MxCADPluginMapDefaultData {
	/**  地图与CAD图纸的对齐位置 */
	mapOrigin: number[];
	/** CAD图纸与地图的对齐点 */
	cadOrigin: number[];
	meterInCADUnits: number;
	/** mapbox地图token */
	mapbox_accessToken: string;
	/** 需要打开的cad图纸 */
	openFile?: string;
	/** 栅格瓦片图层列表 */
	rasterTileLayerList: any[];
	/** 矢量瓦片关键词*/
	rasterTileKey?: string;
	providers?: any;
	/** 背景颜色 */
	viewColor?: {
		red: number;
		green: number;
		blue: number;
	};
}
/** mxcad 基础配置 */
export declare class MxCADPluginBase {
	/** 注册数据 */
	sRegistData: string;
	/**插件程序使用的接口  */
	mxcadui?: MxCADUI;
	/** 打开的文件 */
	openFile?: string;
	/** 地图默认配置 */
	map_default_data?: MxCADPluginMapDefaultData;
}
/** 自定义属性窗口的值的类型 */
export declare enum MxPropertiesWindowCustomValueType {
	/** 整数 */
	kInt = 1,
	/** 双精度浮点数 */
	kDouble = 2,
	/** 字符串 */
	kString = 3
}
/** 自定义属性窗口需要的值 */
export declare class MxPropertiesWindowCustomValue {
	/** 自定义属性窗口名 */
	sVarName: string;
	/** 自定义属性窗口类型 */
	iVarType: number;
	/** 自定义属性窗口值 */
	val: any;
	/** 是否只读 */
	isOnlyRead: boolean;
}
/**
 * MxPropertiesWindowCustom 属性窗口添加自定义属性.
 */
export declare class MxPropertiesWindowCustom {
	private getPropertiesCall;
	private setPropertiesCall;
	/** 插件程序程序调用，注册返回对象自定属性函数。 */
	onEvent_getProperties(call: (id: McObjectId) => MxPropertiesWindowCustomValue[]): void;
	/** 插件程序程序调用，注册设置对象自定属性函数。 */
	onEvent_setProperties(call: (id: McObjectId, prop: MxPropertiesWindowCustomValue) => void): void;
	/** 插件程序程序调用，设置该对象状态支持自定义属性在属性窗口显示。 */
	setEntitySupportCustom(id: McObjectId, isCustomProperties?: boolean): void;
	/** 属性UI程序调用 */
	getEntityProperties(id: McObjectId): MxPropertiesWindowCustomValue[];
	/** 属性UI程序调用 */
	setEntityProperties(id: McObjectId, prop: MxPropertiesWindowCustomValue): void;
}
/**
 * 指定执行克隆操作时的行为类型
 */
export declare enum MxCADCloneType {
	/** 正常Clone */
	kClone = 1,
	/** 动态拖动Clone */
	kDragClone = 2,
	/** 数据归档 */
	kCPPClone = 3
}
/**
 * 用于处理 AutoCAD DWG 文件的读写操作。这个接口提供了一组方法，允许开发者在 AutoCAD 插件中进行 DWG 文件的读取和写入。
 */
export declare abstract class IMcDbDwgFiler {
	/**
	 * 指定对象克隆类型为正常克隆
	 */
	private type;
	/**
	 * 构造函数
	 * @param type 克隆类型
	 */
	constructor(type: MxCADCloneType);
	/**
	 * 获取对象的类型信息
	 * @returns 克隆类型
	 */
	getType(): MxCADCloneType;
	/**
	 * 向已打开的 DWG 文件中写入一组点对象。
	 * @param name 点对象数组名称
	 * @param vals 点对象数组
	 */
	writePoints(name: string, vals: McGePoint3d[]): void;
	/**
	 * 从打开的 DWG 文件中读取一组点对象。
	 * @param name 点对象数组名称
	 * @returns { Object } ret 是否成功获取 | val 点对象数组
	 */
	readPoints(name: string): {
		val: McGePoint3d[];
		ret: boolean;
	};
	/**
	 * 向已打开的 DWG 文件中写入一个点对象。
	 * @param name 点对象名称
	 * @param val 点对象
	 */
	abstract writePoint(name: string, val: McGePoint3d): void;
	/**
	 * 从打开的 DWG 文件中读取一个点对象。
	 * @param name 点对象名称
	 * @returns { Object } ret 是否成功获取 | val 点对象数组
	 */
	abstract readPoint(name: string): {
		val: McGePoint3d;
		ret: boolean;
	};
	/**
	 * 向已打开的 DWG 文件中写入一个长整数。
	 * @param name 长整数名称
	 * @param val 长整数值
	 */
	abstract writeLong(name: string, val: number): void;
	/**
	 * 从打开的 DWG 文件中读取一个长整数。
	 * @param name 长整数名称
	 * @returns { Object } ret 是否成功获取 | val 长整数值
	 */
	abstract readLong(name: string): {
		val: number;
		ret: boolean;
	};
	/**
	 * 向已打开的 DWG 文件中写入一个浮点数。
	 * @param name 浮点数名称
	 * @param val 浮点数值
	 */
	abstract writeDouble(name: string, val: number): void;
	/**
	 * 从打开的 DWG 文件中读取一个浮点数。
	 * @param name 浮点数名称
	 * @returns { Object } ret 是否成功获取 | val 浮点数值
	 */
	abstract readDouble(name: string): {
		val: number;
		ret: boolean;
	};
	/**
	 * 向已打开的 DWG 文件中写入一个字符串。
	 * @param name 字符串名称
	 * @param val 字符串值
	 */
	abstract writeString(name: string, val: string): void;
	/**
	 * 从打开的 DWG 文件中读取一个字符串。
	 * @param name 字符串名称
	 * @returns { Object } ret 是否成功获取 | val 字符串值
	 */
	abstract readString(name: string): {
		val: string;
		ret: boolean;
	};
}
/**
 * 在 AutoCAD 中实现自定义的绘图逻辑，例如绘制图形、标注、符号等。
 */
export declare class MxCADWorldDraw {
	/** 内部对象实现 */
	private imp;
	/**
	 * 构造函数
	 * @param lPtrWorldDraw 传递指向绘图设备的指针
	 */
	constructor(lPtrWorldDraw: number);
	/**
	 * 绘制实例对象
	 */
	drawEntity(entity: McDbEntity): void;
	/**
	 * 设置或获取颜色
	 * @param val 颜色对象（McCmColor）
	 */
	set trueColor(val: McCmColor);
	get trueColor(): McCmColor;
}
/**
 * 自定义实体。
 * @example
 * \`\`\`ts
 *  import { IMcDbDwgFiler, McDbCustomEntity, McDbLine, McDbPolyline, McGePoint3d, McGePoint3dArray, MxCADUiPrPoint, MxCADWorldDraw, MxCpp } from "mxcad";
	import { MxFun } from "mxdraw";

	class McDbTestLineCustomEntity extends McDbCustomEntity {

	private pt1: McGePoint3d = new McGePoint3d();
	private pt2: McGePoint3d = new McGePoint3d();

	constructor(imp?: any) {
		super(imp);
	}

	public create(imp: any) {
		return new McDbTestLineCustomEntity(imp)
	}

	public getTypeName(): string {
		return "McDbTestLineCustomEntity";
	}

	public dwgInFields(filter: IMcDbDwgFiler): boolean {
		this.pt1 = filter.readPoint("pt1").val;
		this.pt2 = filter.readPoint("pt2").val;
		return true;
	}

	public dwgOutFields(filter: IMcDbDwgFiler): boolean {
		filter.writePoint("pt1", this.pt1);
		filter.writePoint("pt2", this.pt2);
		return true;
	}

	public moveGripPointsAt(iIndex: number, dXOffset: number, dYOffset: number, dZOffset: number) {
		this.assertWrite();
		if (iIndex == 0) {
		this.pt1.x += dXOffset;
		this.pt1.y += dYOffset;
		this.pt1.z += dZOffset;
		}
		else if (iIndex == 1) {
		this.pt2.x += dXOffset;
		this.pt2.y += dYOffset;
		this.pt2.z += dZOffset;
		}
	};

	public getGripPoints(): McGePoint3dArray {
		let ret = new McGePoint3dArray()
		ret.append(this.pt1);
		ret.append(this.pt2);
		return ret;
	};

	public worldDraw(draw: MxCADWorldDraw): void {
		// let tmpline = new McDbLine(this.pt1, this.pt2);
		let pl= new McDbPolyline()
		pl.addVertexAt(this.pt1)
		pl.addVertexAt(this.pt2)
		pl.addVertexAt(new McGePoint3d())
		draw.drawEntity(pl);
	}

	public setPoint1(pt1: McGePoint3d) {
		this.assertWrite();
		this.pt1 = pt1.clone();
	}

	public setPoint2(pt2: McGePoint3d) {
		this.assertWrite();
		this.pt2 = pt2.clone();
	}

	public getPoint1() {
		return this.pt1;
	}

	public getPoint2() {
		return this.pt2;
	}
	}
 * \`\`\`
 */
export declare abstract class McDbCustomEntity extends McDbEntity {
	/**
	 * 构造函数。
	 * @param imp 内部实现对象。
	 */
	constructor(imp?: any);
	/**
	* 自定义实体注册
	* @example
	* \`\`\`ts
	* import { MxFun } from 'mxdraw
	* MxFun.on("mxcadApplicationCreatedMxCADObject", (param) => {
	* //McDbTestLineCustomEntity 自定义实体
	*   new McDbTestLineCustomEntity().rxInit();
		MxFun.addCommand("MxTest_DrawCustomEntity");
	* })
	* \`\`\`
	*/
	rxInit(): void;
	/**
	* 复制实体
	*/
	clone(): McDbObject | null;
	/** js 对像的数据与McDbCustomEntity::m_mapData的同步。 */
	syncData(toCpp?: boolean): boolean;
	tempRelationObject(): number;
	freeTempRelationObject(): void;
	protected assertWrite(autoUndo?: boolean): void;
	/**
	 * 移动自定义对象的夹点。
	 * @param _iIndex 夹点索引
	 * @param _dXOffset X轴偏移量
	 * @param _dYOffset Y轴偏移量
	 * @param _dZOffset Z轴偏移量
	 * @example
	 * \`\`\`ts
	 * import { McDbCustomEntity, MxCADWorldDraw, McDbLine } from 'mxcad'
	 * class McDbTestLineCustomEntity extends McDbCustomEntity {
			public moveGripPointsAt(iIndex: number, dXOffset: number, dYOffset: number, dZOffset: number) {
				this.assertWrite();
				if (iIndex == 0) {
				this.pt1.x += dXOffset;
				this.pt1.y += dYOffset;
				this.pt1.z += dZOffset;
				}
				else if (iIndex == 1) {
				this.pt2.x += dXOffset;
				this.pt2.y += dYOffset;
				this.pt2.z += dZOffset;
				}
			};
		}
	 * \`\`\`
	 */
	moveGripPointsAt(_iIndex: number, _dXOffset: number, _dYOffset: number, _dZOffset: number): void;
	/**
	 * 获取自定义对象的夹点。
	 * @returns 夹点对象数组
	 */
	getGripPoints(): McGePoint3dArray;
	abstract create(imp?: any): McDbCustomEntity;
	/**
	 * 获取自定义实体的类型名称。
	 * @returns 自定义实体的类型名称
	 */
	abstract getTypeName(): string;
	/**
	 * 从 DWG 文件中读取自定义实体的数据字段
	 * @example
	 * \`\`\`ts
	  import { McDbCustomEntity, IMcDbDwgFiler } from 'mxcad'
	  class McDbTestLineCustomEntity extends McDbCustomEntity {
		public dwgInFields(filter: IMcDbDwgFiler): boolean {
		this.pt1 = filter.readPoint("pt1").val;
		this.pt2 = filter.readPoint("pt2").val;
		return true;
		}
		}
	 * \`\`\`
	 */
	abstract dwgInFields(filter: IMcDbDwgFiler): boolean;
	/**
	 * 将自定义实体的数据字段写入到 DWG 文件中
	 * @example
	 * \`\`\`ts
	  import { McDbCustomEntity, IMcDbDwgFiler } from 'mxcad'
	  class McDbTestLineCustomEntity extends McDbCustomEntity {
		public dwgOutFields(filter: IMcDbDwgFiler): boolean {
			filter.writePoint("pt1", this.pt1);
			filter.writePoint("pt2", this.pt2);
			return true;
		}
		}
	 * \`\`\`
	 */
	abstract dwgOutFields(filter: IMcDbDwgFiler): boolean;
	/**
	 * 绘制自定义实体
	 * @example
	 * \`\`\`ts
	 * import { McDbCustomEntity, MxCADWorldDraw, McDbLine } from 'mxcad'
	 * class McDbTestLineCustomEntity extends McDbCustomEntity {
	 *     public worldDraw(draw: MxCADWorldDraw): void {
			let tmpline = new McDbLine(this.pt1, this.pt2);
			draw.drawEntity(tmpline);
		   }
		}
	 * \`\`\`
	 */
	abstract worldDraw(draw: MxCADWorldDraw): void;
}
export declare let MxCpp: MxCppType;
export declare function loadMxCADassembly(call?: (MxCpp: MxCppType) => void, locateFile?: (fileName: string, base?: string | URL) => string, wasmBinary?: ArrayBuffer, fontspath?: string, networkFonts?: string[]): Promise<MxCppType>;
export declare function MxCheckTheBrowser(): {
	ok: boolean;
	error: string;
	var: any;
};
/** createMxCad 的参数配置 */
export interface MxCadConfig {
	/** 获取加载wasm相关文件(wasm/js/worker.js)路径位置
	 * @param fileName wasm相关的文件名称
	 * @param base 相对于js调用位置的http URL绝对路径
	 * @returns filePath 默认采用base + fileName
	 * @abstract 本质上locateFile配置函数就是返回wasm相关文件在自己的服务器上的位置
	 *           在npm包中\`node_modules/mxcad/dist/wasm/2d/\`下的文件就是支持2d的相关wasm文件
	 * @example
	 * \`\`\`js
	 * // 在vite中只需要如下代码:
	 * locateFile(fileName) { return new URL("/node_modules/mxcad/dist/wasm/2d/\${fileName}", import.meta.url).href}
	 * \`\`\`
	 */
	locateFile?: (fileName: string, base?: string | URL) => string;
	/**  WebAssembly 模块二进制文件 默认情况无需配置 **/
	wasmBinary?: ArrayBuffer;
	/**
	 * 当通过 MxFun.getCurrentDraw 未发现当前mxDraw实例时，
	 * 会通过 canvas属性(值可以是css选择器字符串也可以是一个canvas元素)来创建mxdraw实例
	 * 如果想要获得这个mxDraw实例 只需要调用mxdraw包中导出的 MxFun.getCurrentDraw方法即可
	 * 如果gis模式下，canvas变量不会使用，会自动使用mapbox的canvas.
	 *   */
	canvas?: string | HTMLCanvasElement;
	/**
	 * mxdraw和mxcad 核心代码加载完成初始化的回调
	 * onInit默认值函数如下实例所示（请根据你的业务需求自行修改）
	 * @example
	 * \`\`\`js
	 * import { MxFun } from "mxdraw"
	 * onInit() {
	 *  MxFun.setIniset({
	 *       // 启用对象选择功能.
	 *      EnableIntelliSelect: true,
	 *       // 选择类型
	 *      IntelliSelectType: 1,
	 *       // 是否开启多个选择
	 *      multipleSelect: false,
	 *   });
	 * }
	 * \`\`\`
	 * */
	onInit?: Function;
	/** 需要初始化打开的文件url路径 */
	fileUrl?: string;
	/** 监听打开文件成功回调事件 */
	onOpenFileComplete?: Function;
	/** 字体文件加载路径，默认是fonts */
	fontspath?: string;
	/** 服务器上可供加载的字体列表 */
	networkFonts?: string[];
	/** 打开文件参数设置，如，打开文件不使用缓存：{fetchAttributes:FetchAttributes.EMSCRIPTEN_FETCH_LOAD_TO_MEMORY}*/
	openParameter?: object;
	/**鼠标中间键操作设置,默认为鼠标中间移动视区 */
	middlePan?: number | boolean;
	/**注册数据 */
	registdata?: string;
	/**注册文件 */
	registfile?: string;
	/**视区背景颜色 */
	viewBackgroundColor?: {
		red: number;
		green: number;
		blue: number;
	};
	/**地图模块 */
	map?: any;
	/**多选模式 */
	multipleSelect?: boolean;
}
/** 创建MxCad实例
 * @param config 参数配置
 * @param mxcadobj 对象
 * @example
 * //通过创建实例实现图纸展示以下基于vite打包工具
 * \`\`\`ts
 * createMxCad({
 *   canvas: "#myCanvas",
 *   locateFile: (fileName)=> new URL(\`/node_modules/mxcad/dist/wasm/2d/\${fileName}\`, import.meta.url).href,
 *   fileUrl: new URL("../assets/test.mxweb", import.meta.url).href
 * })
 * \`\`\`
 */
export declare const createMxCad: (config?: MxCadConfig, mxcadobj?: McObject) => Promise<McObject>;
/** 绘制文字
 * @param height 文字高度
 * @param text 文字内容
 * @param position 文字位置
 * @param angle 文件角度
 * @param color 文字颜色
 */
export declare function drawText(): Promise<McObjectId | undefined>;
/**
 * 绘圆
 */
export declare function drawCircle(): Promise<McObjectId | undefined>;
/**
 * 绘直线
 */
export declare function drawLine(): Promise<void>;
/**
 * 绘多行文本
 */
export declare function drawMText(): Promise<McObjectId | undefined>;
/** 绘多义线 */
export declare function drawPolyLine(): Promise<void>;
/** 绘制正多边形 */
export declare function drawPolygon(): Promise<void>;
/**
 * 绘制圆弧
 */
export declare function drawArc(): Promise<void>;
/**
 * 绘制椭圆或椭圆弧
 */
export declare function drawEllipticalArc(): Promise<McObjectId | undefined>;
/**
 * 删除对象
 */
export declare function Mx_Erase(): Promise<void>;
/**
 * 绘制矩形
 */
export declare const drawRectang: () => Promise<void>;
declare const getWasmURL: (wasmURL: string, baseURL?: string | URL) => string;
export type EventType = string | symbol;
export type PubSubEvent = Record<EventType, (...ages: any) => any>;
declare class PubSub<Events extends PubSubEvent = PubSubEvent> {
	events: {
		[x: EventType]: Events[keyof Events][];
	};
	constructor();
	/**
	 * 订阅
	 * @param event 事件名称
	 * @param callback 事件回调
	 */
	on<Key extends keyof Events>(event: Key, callback: Events[keyof Events]): void;
	/**
	 * 发布
	 * @param event 事件名称
	 * @param data 载荷
	 */
	emit<Key extends keyof Events>(event: Key | number, ...data: Parameters<Events[Key]>): void;
	/**
	 * 销毁事件
	 * @param event 事件名称
	 * @param callback 事件方法
	 */
	off<Key extends keyof Events>(event: Key, callback?: Events[keyof Events]): void;
}
export declare namespace MdGe {
	enum MxShapeEnum {
		Enum_COMPOUND = 0,
		Enum_COMPSOLID = 1,
		Enum_SOLID = 2,
		Enum_SHELL = 3,
		Enum_FACE = 4,
		Enum_WIRE = 5,
		Enum_EDGE = 6,
		Enum_VERTEX = 7,
		Enum_SHAPE = 8
	}
	enum MxHorizontalTextAlignment {
		HTA_LEFT = 0,
		HTA_CENTER = 1,
		HTA_RIGHT = 2
	}
	enum MxVerticalTextAlignment {
		CVTA_BOTTOM = 0,
		CVTA_CENTER = 1,
		CVTA_TOP = 2,
		CVTA_TOPFIRSTLINE = 3
	}
	enum MxFontAspect {
		FA_UNDEFINED = -1,
		FA_Regular = 0,
		FA_Bold = 1,
		FA_Italic = 2,
		FA_BoldItalic = 3
	}
	enum MxTypeOfDisplayText {
		TODT_NORMAL = 0,
		TODT_SUBTITLE = 1,
		TODT_DEKALE = 2,
		TODT_BLEND = 3,
		TODT_DIMENSION = 4,
		TODT_SHADOW = 5
	}
	enum MxCF3dFilletShapeEnum {
		Enum_Rational = 0,
		Enum_QuasiAngular = 1,
		Enum_Polynomial = 2
	}
	enum MxCFDSChamfMode {
		Enum_ClassicChamfer = 0,
		Enum_ConstThroatChamfer = 1,
		Enum_ConstThroatWithPenetrationChamfer = 2
	}
	enum MxGFTrihedron {
		GF_IsCorrectedFrenet = 0,
		GF_IsFixed = 1,
		GF_IsFrenet = 2,
		GF_IsConstantNormal = 3,
		GF_IsDarboux = 4,
		GF_IsGuideAC = 5,
		GF_IsGuidePlan = 6,
		GF_IsGuideACWithContact = 7,
		GF_IsGuidePlanWithContact = 8,
		GF_IsDiscreteTrihedron = 9
	}
	enum MxGAShapeEnum {
		GA_C0 = 0,
		GA_G1 = 1,
		GA_C1 = 2,
		GA_G2 = 3,
		GA_C2 = 4,
		GA_C3 = 5,
		GA_CN = 6
	}
	enum MxOffsetModeEnum {
		Offset_Skin = 0,
		Offset_Pipe = 1,
		Offset_RectoVerso = 2
	}
	enum MxGAJoinTypeEnum {
		GA_Arc = 0,
		GA_Tangent = 1,
		GA_Intersection = 2
	}
	enum MxNameOfMaterial {
		Material_NOM_Brass = 0,
		Material_NOM_Bronze = 1,
		Material_NOM_Copper = 2,
		Material_NOM_Gold = 3,
		Material_NOM_Pewter = 4,
		Material_NOM_Plastered = 5,
		Material_NOM_Plastified = 6,
		Material_NOM_Silver = 7,
		Material_NOM_Steel = 8,
		Material_NOM_Stone = 9,
		Material_NOM_ShinyPlastified = 10,
		Material_NOM_Satin = 11,
		Material_NOM_Metalized = 12,
		Material_NOM_Ionized = 13,
		Material_NOM_Chrome = 14,
		Material_NOM_Aluminum = 15,
		Material_NOM_Obsidian = 16,
		Material_NOM_Neon = 17,
		Material_NOM_Jade = 18,
		Material_NOM_Charcoal = 19,
		Material_NOM_Water = 20,
		Material_NOM_Glass = 21,
		Material_NOM_Diamond = 22,
		Material_NOM_Transparent = 23,
		Material_NOM_DEFAULT = 24,
		Material_NOM_UserDefined = 25
	}
	enum MxTypeOfMaterial {
		Material_TOM_ASPECT = 0,
		Material_TOM_PHYSIC = 1
	}
	enum MxTypeOfReflection {
		Reflection_TOR_AMBIENT = 0,
		Reflection_TOR_DIFFUSE = 1,
		Reflection_TOR_SPECULAR = 2,
		Reflection_TOR_EMISSION = 3
	}
	enum MxNameOfColor {
		Color_NOC_BLACK = 0,
		Color_NOC_MATRABLUE = 1,
		Color_NOC_MATRAGRAY = 2,
		Color_NOC_ALICEBLUE = 3,
		Color_NOC_ANTIQUEWHITE = 4,
		Color_NOC_ANTIQUEWHITE1 = 5,
		Color_NOC_ANTIQUEWHITE2 = 6,
		Color_NOC_ANTIQUEWHITE3 = 7,
		Color_NOC_ANTIQUEWHITE4 = 8,
		Color_NOC_AQUAMARINE1 = 9,
		Color_NOC_AQUAMARINE2 = 10,
		Color_NOC_AQUAMARINE4 = 11,
		Color_NOC_AZURE = 12,
		Color_NOC_AZURE2 = 13,
		Color_NOC_AZURE3 = 14,
		Color_NOC_AZURE4 = 15,
		Color_NOC_BEIGE = 16,
		Color_NOC_BISQUE = 17,
		Color_NOC_BISQUE2 = 18,
		Color_NOC_BISQUE3 = 19,
		Color_NOC_BISQUE4 = 20,
		Color_NOC_BLANCHEDALMOND = 21,
		Color_NOC_BLUE = 22,
		Color_NOC_BLUE1 = 22,
		Color_NOC_BLUE2 = 23,
		Color_NOC_BLUE3 = 24,
		Color_NOC_BLUE4 = 25,
		Color_NOC_BLUEVIOLET = 26,
		Color_NOC_BROWN = 27,
		Color_NOC_BROWN1 = 28,
		Color_NOC_BROWN2 = 29,
		Color_NOC_BROWN3 = 30,
		Color_NOC_BROWN4 = 31,
		Color_NOC_BURLYWOOD = 32,
		Color_NOC_BURLYWOOD1 = 33,
		Color_NOC_BURLYWOOD2 = 34,
		Color_NOC_BURLYWOOD3 = 35,
		Color_NOC_BURLYWOOD4 = 36,
		Color_NOC_CADETBLUE = 37,
		Color_NOC_CADETBLUE1 = 38,
		Color_NOC_CADETBLUE2 = 39,
		Color_NOC_CADETBLUE3 = 40,
		Color_NOC_CADETBLUE4 = 41,
		Color_NOC_CHARTREUSE = 42,
		Color_NOC_CHARTREUSE1 = 42,
		Color_NOC_CHARTREUSE2 = 43,
		Color_NOC_CHARTREUSE3 = 44,
		Color_NOC_CHARTREUSE4 = 45,
		Color_NOC_CHOCOLATE = 46,
		Color_NOC_CHOCOLATE1 = 47,
		Color_NOC_CHOCOLATE2 = 48,
		Color_NOC_CHOCOLATE3 = 49,
		Color_NOC_CHOCOLATE4 = 50,
		Color_NOC_CORAL = 51,
		Color_NOC_CORAL1 = 52,
		Color_NOC_CORAL2 = 53,
		Color_NOC_CORAL3 = 54,
		Color_NOC_CORAL4 = 55,
		Color_NOC_CORNFLOWERBLUE = 56,
		Color_NOC_CORNSILK1 = 57,
		Color_NOC_CORNSILK2 = 58,
		Color_NOC_CORNSILK3 = 59,
		Color_NOC_CORNSILK4 = 60,
		Color_NOC_CYAN = 61,
		Color_NOC_CYAN1 = 61,
		Color_NOC_CYAN2 = 62,
		Color_NOC_CYAN3 = 63,
		Color_NOC_CYAN4 = 64,
		Color_NOC_DARKGOLDENROD = 65,
		Color_NOC_DARKGOLDENROD1 = 66,
		Color_NOC_DARKGOLDENROD2 = 67,
		Color_NOC_DARKGOLDENROD3 = 68,
		Color_NOC_DARKGOLDENROD4 = 69,
		Color_NOC_DARKGREEN = 70,
		Color_NOC_DARKKHAKI = 71,
		Color_NOC_DARKOLIVEGREEN = 72,
		Color_NOC_DARKOLIVEGREEN1 = 73,
		Color_NOC_DARKOLIVEGREEN2 = 74,
		Color_NOC_DARKOLIVEGREEN3 = 75,
		Color_NOC_DARKOLIVEGREEN4 = 76,
		Color_NOC_DARKORANGE = 77,
		Color_NOC_DARKORANGE1 = 78,
		Color_NOC_DARKORANGE2 = 79,
		Color_NOC_DARKORANGE3 = 80,
		Color_NOC_DARKORANGE4 = 81,
		Color_NOC_DARKORCHID = 82,
		Color_NOC_DARKORCHID1 = 83,
		Color_NOC_DARKORCHID2 = 84,
		Color_NOC_DARKORCHID3 = 85,
		Color_NOC_DARKORCHID4 = 86,
		Color_NOC_DARKSALMON = 87,
		Color_NOC_DARKSEAGREEN = 88,
		Color_NOC_DARKSEAGREEN1 = 89,
		Color_NOC_DARKSEAGREEN2 = 90,
		Color_NOC_DARKSEAGREEN3 = 91,
		Color_NOC_DARKSEAGREEN4 = 92,
		Color_NOC_DARKSLATEBLUE = 93,
		Color_NOC_DARKSLATEGRAY1 = 94,
		Color_NOC_DARKSLATEGRAY2 = 95,
		Color_NOC_DARKSLATEGRAY3 = 96,
		Color_NOC_DARKSLATEGRAY4 = 97,
		Color_NOC_DARKSLATEGRAY = 98,
		Color_NOC_DARKTURQUOISE = 99,
		Color_NOC_DARKVIOLET = 100,
		Color_NOC_DEEPPINK = 101,
		Color_NOC_DEEPPINK2 = 102,
		Color_NOC_DEEPPINK3 = 103,
		Color_NOC_DEEPPINK4 = 104,
		Color_NOC_DEEPSKYBLUE1 = 105,
		Color_NOC_DEEPSKYBLUE2 = 106,
		Color_NOC_DEEPSKYBLUE3 = 107,
		Color_NOC_DEEPSKYBLUE4 = 108,
		Color_NOC_DODGERBLUE1 = 109,
		Color_NOC_DODGERBLUE2 = 110,
		Color_NOC_DODGERBLUE3 = 111,
		Color_NOC_DODGERBLUE4 = 112,
		Color_NOC_FIREBRICK = 113,
		Color_NOC_FIREBRICK1 = 114,
		Color_NOC_FIREBRICK2 = 115,
		Color_NOC_FIREBRICK3 = 116,
		Color_NOC_FIREBRICK4 = 117,
		Color_NOC_FLORALWHITE = 118,
		Color_NOC_FORESTGREEN = 119,
		Color_NOC_GAINSBORO = 120,
		Color_NOC_GHOSTWHITE = 121,
		Color_NOC_GOLD = 122,
		Color_NOC_GOLD1 = 122,
		Color_NOC_GOLD2 = 123,
		Color_NOC_GOLD3 = 124,
		Color_NOC_GOLD4 = 125,
		Color_NOC_GOLDENROD = 126,
		Color_NOC_GOLDENROD1 = 127,
		Color_NOC_GOLDENROD2 = 128,
		Color_NOC_GOLDENROD3 = 129,
		Color_NOC_GOLDENROD4 = 130,
		Color_NOC_GRAY = 131,
		Color_NOC_GRAY0 = 132,
		Color_NOC_GRAY1 = 133,
		Color_NOC_GRAY2 = 134,
		Color_NOC_GRAY3 = 135,
		Color_NOC_GRAY4 = 136,
		Color_NOC_GRAY5 = 137,
		Color_NOC_GRAY6 = 138,
		Color_NOC_GRAY7 = 139,
		Color_NOC_GRAY8 = 140,
		Color_NOC_GRAY9 = 141,
		Color_NOC_GRAY10 = 142,
		Color_NOC_GRAY11 = 143,
		Color_NOC_GRAY12 = 144,
		Color_NOC_GRAY13 = 145,
		Color_NOC_GRAY14 = 146,
		Color_NOC_GRAY15 = 147,
		Color_NOC_GRAY16 = 148,
		Color_NOC_GRAY17 = 149,
		Color_NOC_GRAY18 = 150,
		Color_NOC_GRAY19 = 151,
		Color_NOC_GRAY20 = 152,
		Color_NOC_GRAY21 = 153,
		Color_NOC_GRAY22 = 154,
		Color_NOC_GRAY23 = 155,
		Color_NOC_GRAY24 = 156,
		Color_NOC_GRAY25 = 157,
		Color_NOC_GRAY26 = 158,
		Color_NOC_GRAY27 = 159,
		Color_NOC_GRAY28 = 160,
		Color_NOC_GRAY29 = 161,
		Color_NOC_GRAY30 = 162,
		Color_NOC_GRAY31 = 163,
		Color_NOC_GRAY32 = 164,
		Color_NOC_GRAY33 = 165,
		Color_NOC_GRAY34 = 166,
		Color_NOC_GRAY35 = 167,
		Color_NOC_GRAY36 = 168,
		Color_NOC_GRAY37 = 169,
		Color_NOC_GRAY38 = 170,
		Color_NOC_GRAY39 = 171,
		Color_NOC_GRAY40 = 172,
		Color_NOC_GRAY41 = 173,
		Color_NOC_GRAY42 = 174,
		Color_NOC_GRAY43 = 175,
		Color_NOC_GRAY44 = 176,
		Color_NOC_GRAY45 = 177,
		Color_NOC_GRAY46 = 178,
		Color_NOC_GRAY47 = 179,
		Color_NOC_GRAY48 = 180,
		Color_NOC_GRAY49 = 181,
		Color_NOC_GRAY50 = 182,
		Color_NOC_GRAY51 = 183,
		Color_NOC_GRAY52 = 184,
		Color_NOC_GRAY53 = 185,
		Color_NOC_GRAY54 = 186,
		Color_NOC_GRAY55 = 187,
		Color_NOC_GRAY56 = 188,
		Color_NOC_GRAY57 = 189,
		Color_NOC_GRAY58 = 190,
		Color_NOC_GRAY59 = 191,
		Color_NOC_GRAY60 = 192,
		Color_NOC_GRAY61 = 193,
		Color_NOC_GRAY62 = 194,
		Color_NOC_GRAY63 = 195,
		Color_NOC_GRAY64 = 196,
		Color_NOC_GRAY65 = 197,
		Color_NOC_GRAY66 = 198,
		Color_NOC_GRAY67 = 199,
		Color_NOC_GRAY68 = 200,
		Color_NOC_GRAY69 = 201,
		Color_NOC_GRAY70 = 202,
		Color_NOC_GRAY71 = 203,
		Color_NOC_GRAY72 = 204,
		Color_NOC_GRAY73 = 205,
		Color_NOC_GRAY74 = 206,
		Color_NOC_GRAY75 = 207,
		Color_NOC_GRAY76 = 208,
		Color_NOC_GRAY77 = 209,
		Color_NOC_GRAY78 = 210,
		Color_NOC_GRAY79 = 211,
		Color_NOC_GRAY80 = 212,
		Color_NOC_GRAY81 = 213,
		Color_NOC_GRAY82 = 214,
		Color_NOC_GRAY83 = 215,
		Color_NOC_GRAY85 = 216,
		Color_NOC_GRAY86 = 217,
		Color_NOC_GRAY87 = 218,
		Color_NOC_GRAY88 = 219,
		Color_NOC_GRAY89 = 220,
		Color_NOC_GRAY90 = 221,
		Color_NOC_GRAY91 = 222,
		Color_NOC_GRAY92 = 223,
		Color_NOC_GRAY93 = 224,
		Color_NOC_GRAY94 = 225,
		Color_NOC_GRAY95 = 226,
		Color_NOC_GRAY97 = 227,
		Color_NOC_GRAY98 = 228,
		Color_NOC_GRAY99 = 229,
		Color_NOC_GREEN = 230,
		Color_NOC_GREEN1 = 230,
		Color_NOC_GREEN2 = 231,
		Color_NOC_GREEN3 = 232,
		Color_NOC_GREEN4 = 233,
		Color_NOC_GREENYELLOW = 234,
		Color_NOC_HONEYDEW = 235,
		Color_NOC_HONEYDEW2 = 236,
		Color_NOC_HONEYDEW3 = 237,
		Color_NOC_HONEYDEW4 = 238,
		Color_NOC_HOTPINK = 239,
		Color_NOC_HOTPINK1 = 240,
		Color_NOC_HOTPINK2 = 241,
		Color_NOC_HOTPINK3 = 242,
		Color_NOC_HOTPINK4 = 243,
		Color_NOC_INDIANRED = 244,
		Color_NOC_INDIANRED1 = 245,
		Color_NOC_INDIANRED2 = 246,
		Color_NOC_INDIANRED3 = 247,
		Color_NOC_INDIANRED4 = 248,
		Color_NOC_IVORY = 249,
		Color_NOC_IVORY2 = 250,
		Color_NOC_IVORY3 = 251,
		Color_NOC_IVORY4 = 252,
		Color_NOC_KHAKI = 253,
		Color_NOC_KHAKI1 = 254,
		Color_NOC_KHAKI2 = 255,
		Color_NOC_KHAKI3 = 256,
		Color_NOC_KHAKI4 = 257,
		Color_NOC_LAVENDER = 258,
		Color_NOC_LAVENDERBLUSH1 = 259,
		Color_NOC_LAVENDERBLUSH2 = 260,
		Color_NOC_LAVENDERBLUSH3 = 261,
		Color_NOC_LAVENDERBLUSH4 = 262,
		Color_NOC_LAWNGREEN = 263,
		Color_NOC_LEMONCHIFFON1 = 264,
		Color_NOC_LEMONCHIFFON2 = 265,
		Color_NOC_LEMONCHIFFON3 = 266,
		Color_NOC_LEMONCHIFFON4 = 267,
		Color_NOC_LIGHTBLUE = 268,
		Color_NOC_LIGHTBLUE1 = 269,
		Color_NOC_LIGHTBLUE2 = 270,
		Color_NOC_LIGHTBLUE3 = 271,
		Color_NOC_LIGHTBLUE4 = 272,
		Color_NOC_LIGHTCORAL = 273,
		Color_NOC_LIGHTCYAN = 274,
		Color_NOC_LIGHTCYAN1 = 274,
		Color_NOC_LIGHTCYAN2 = 275,
		Color_NOC_LIGHTCYAN3 = 276,
		Color_NOC_LIGHTCYAN4 = 277,
		Color_NOC_LIGHTGOLDENROD = 278,
		Color_NOC_LIGHTGOLDENROD1 = 279,
		Color_NOC_LIGHTGOLDENROD2 = 280,
		Color_NOC_LIGHTGOLDENROD3 = 281,
		Color_NOC_LIGHTGOLDENROD4 = 282,
		Color_NOC_LIGHTGOLDENRODYELLOW = 283,
		Color_NOC_LIGHTGRAY = 284,
		Color_NOC_LIGHTPINK = 285,
		Color_NOC_LIGHTPINK1 = 286,
		Color_NOC_LIGHTPINK2 = 287,
		Color_NOC_LIGHTPINK3 = 288,
		Color_NOC_LIGHTPINK4 = 289,
		Color_NOC_LIGHTSALMON1 = 290,
		Color_NOC_LIGHTSALMON2 = 291,
		Color_NOC_LIGHTSALMON3 = 292,
		Color_NOC_LIGHTSALMON4 = 293,
		Color_NOC_LIGHTSEAGREEN = 294,
		Color_NOC_LIGHTSKYBLUE = 295,
		Color_NOC_LIGHTSKYBLUE1 = 296,
		Color_NOC_LIGHTSKYBLUE2 = 297,
		Color_NOC_LIGHTSKYBLUE3 = 298,
		Color_NOC_LIGHTSKYBLUE4 = 299,
		Color_NOC_LIGHTSLATEBLUE = 300,
		Color_NOC_LIGHTSLATEGRAY = 301,
		Color_NOC_LIGHTSTEELBLUE = 302,
		Color_NOC_LIGHTSTEELBLUE1 = 303,
		Color_NOC_LIGHTSTEELBLUE2 = 304,
		Color_NOC_LIGHTSTEELBLUE3 = 305,
		Color_NOC_LIGHTSTEELBLUE4 = 306,
		Color_NOC_LIGHTYELLOW = 307,
		Color_NOC_LIGHTYELLOW2 = 308,
		Color_NOC_LIGHTYELLOW3 = 309,
		Color_NOC_LIGHTYELLOW4 = 310,
		Color_NOC_LIMEGREEN = 311,
		Color_NOC_LINEN = 312,
		Color_NOC_MAGENTA = 313,
		Color_NOC_MAGENTA1 = 313,
		Color_NOC_MAGENTA2 = 314,
		Color_NOC_MAGENTA3 = 315,
		Color_NOC_MAGENTA4 = 316,
		Color_NOC_MAROON = 317,
		Color_NOC_MAROON1 = 318,
		Color_NOC_MAROON2 = 319,
		Color_NOC_MAROON3 = 320,
		Color_NOC_MAROON4 = 321,
		Color_NOC_MEDIUMAQUAMARINE = 322,
		Color_NOC_MEDIUMORCHID = 323,
		Color_NOC_MEDIUMORCHID1 = 324,
		Color_NOC_MEDIUMORCHID2 = 325,
		Color_NOC_MEDIUMORCHID3 = 326,
		Color_NOC_MEDIUMORCHID4 = 327,
		Color_NOC_MEDIUMPURPLE = 328,
		Color_NOC_MEDIUMPURPLE1 = 329,
		Color_NOC_MEDIUMPURPLE2 = 330,
		Color_NOC_MEDIUMPURPLE3 = 331,
		Color_NOC_MEDIUMPURPLE4 = 332,
		Color_NOC_MEDIUMSEAGREEN = 333,
		Color_NOC_MEDIUMSLATEBLUE = 334,
		Color_NOC_MEDIUMSPRINGGREEN = 335,
		Color_NOC_MEDIUMTURQUOISE = 336,
		Color_NOC_MEDIUMVIOLETRED = 337,
		Color_NOC_MIDNIGHTBLUE = 338,
		Color_NOC_MINTCREAM = 339,
		Color_NOC_MISTYROSE = 340,
		Color_NOC_MISTYROSE2 = 341,
		Color_NOC_MISTYROSE3 = 342,
		Color_NOC_MISTYROSE4 = 343,
		Color_NOC_MOCCASIN = 344,
		Color_NOC_NAVAJOWHITE1 = 345,
		Color_NOC_NAVAJOWHITE2 = 346,
		Color_NOC_NAVAJOWHITE3 = 347,
		Color_NOC_NAVAJOWHITE4 = 348,
		Color_NOC_NAVYBLUE = 349,
		Color_NOC_OLDLACE = 350,
		Color_NOC_OLIVEDRAB = 351,
		Color_NOC_OLIVEDRAB1 = 352,
		Color_NOC_OLIVEDRAB2 = 353,
		Color_NOC_OLIVEDRAB3 = 354,
		Color_NOC_OLIVEDRAB4 = 355,
		Color_NOC_ORANGE = 356,
		Color_NOC_ORANGE1 = 356,
		Color_NOC_ORANGE2 = 357,
		Color_NOC_ORANGE3 = 358,
		Color_NOC_ORANGE4 = 359,
		Color_NOC_ORANGERED = 360,
		Color_NOC_ORANGERED1 = 360,
		Color_NOC_ORANGERED2 = 361,
		Color_NOC_ORANGERED3 = 362,
		Color_NOC_ORANGERED4 = 363,
		Color_NOC_ORCHID = 364,
		Color_NOC_ORCHID1 = 365,
		Color_NOC_ORCHID2 = 366,
		Color_NOC_ORCHID3 = 367,
		Color_NOC_ORCHID4 = 368,
		Color_NOC_PALEGOLDENROD = 369,
		Color_NOC_PALEGREEN = 370,
		Color_NOC_PALEGREEN1 = 371,
		Color_NOC_PALEGREEN2 = 372,
		Color_NOC_PALEGREEN3 = 373,
		Color_NOC_PALEGREEN4 = 374,
		Color_NOC_PALETURQUOISE = 375,
		Color_NOC_PALETURQUOISE1 = 376,
		Color_NOC_PALETURQUOISE2 = 377,
		Color_NOC_PALETURQUOISE3 = 378,
		Color_NOC_PALETURQUOISE4 = 379,
		Color_NOC_PALEVIOLETRED = 380,
		Color_NOC_PALEVIOLETRED1 = 381,
		Color_NOC_PALEVIOLETRED2 = 382,
		Color_NOC_PALEVIOLETRED3 = 383,
		Color_NOC_PALEVIOLETRED4 = 384,
		Color_NOC_PAPAYAWHIP = 385,
		Color_NOC_PEACHPUFF = 386,
		Color_NOC_PEACHPUFF2 = 387,
		Color_NOC_PEACHPUFF3 = 388,
		Color_NOC_PEACHPUFF4 = 389,
		Color_NOC_PERU = 390,
		Color_NOC_PINK = 391,
		Color_NOC_PINK1 = 392,
		Color_NOC_PINK2 = 393,
		Color_NOC_PINK3 = 394,
		Color_NOC_PINK4 = 395,
		Color_NOC_PLUM = 396,
		Color_NOC_PLUM1 = 397,
		Color_NOC_PLUM2 = 398,
		Color_NOC_PLUM3 = 399,
		Color_NOC_PLUM4 = 400,
		Color_NOC_POWDERBLUE = 401,
		Color_NOC_PURPLE = 402,
		Color_NOC_PURPLE1 = 403,
		Color_NOC_PURPLE2 = 404,
		Color_NOC_PURPLE3 = 405,
		Color_NOC_PURPLE4 = 406,
		Color_NOC_RED = 407,
		Color_NOC_RED1 = 407,
		Color_NOC_RED2 = 408,
		Color_NOC_RED3 = 409,
		Color_NOC_RED4 = 410,
		Color_NOC_ROSYBROWN = 411,
		Color_NOC_ROSYBROWN1 = 412,
		Color_NOC_ROSYBROWN2 = 413,
		Color_NOC_ROSYBROWN3 = 414,
		Color_NOC_ROSYBROWN4 = 415,
		Color_NOC_ROYALBLUE = 416,
		Color_NOC_ROYALBLUE1 = 417,
		Color_NOC_ROYALBLUE2 = 418,
		Color_NOC_ROYALBLUE3 = 419,
		Color_NOC_ROYALBLUE4 = 420,
		Color_NOC_SADDLEBROWN = 421,
		Color_NOC_SALMON = 422,
		Color_NOC_SALMON1 = 423,
		Color_NOC_SALMON2 = 424,
		Color_NOC_SALMON3 = 425,
		Color_NOC_SALMON4 = 426,
		Color_NOC_SANDYBROWN = 427,
		Color_NOC_SEAGREEN = 428,
		Color_NOC_SEAGREEN1 = 429,
		Color_NOC_SEAGREEN2 = 430,
		Color_NOC_SEAGREEN3 = 431,
		Color_NOC_SEAGREEN4 = 432,
		Color_NOC_SEASHELL = 433,
		Color_NOC_SEASHELL2 = 434,
		Color_NOC_SEASHELL3 = 435,
		Color_NOC_SEASHELL4 = 436,
		Color_NOC_BEET = 437,
		Color_NOC_TEAL = 438,
		Color_NOC_SIENNA = 439,
		Color_NOC_SIENNA1 = 440,
		Color_NOC_SIENNA2 = 441,
		Color_NOC_SIENNA3 = 442,
		Color_NOC_SIENNA4 = 443,
		Color_NOC_SKYBLUE = 444,
		Color_NOC_SKYBLUE1 = 445,
		Color_NOC_SKYBLUE2 = 446,
		Color_NOC_SKYBLUE3 = 447,
		Color_NOC_SKYBLUE4 = 448,
		Color_NOC_SLATEBLUE = 449,
		Color_NOC_SLATEBLUE1 = 450,
		Color_NOC_SLATEBLUE2 = 451,
		Color_NOC_SLATEBLUE3 = 452,
		Color_NOC_SLATEBLUE4 = 453,
		Color_NOC_SLATEGRAY1 = 454,
		Color_NOC_SLATEGRAY2 = 455,
		Color_NOC_SLATEGRAY3 = 456,
		Color_NOC_SLATEGRAY4 = 457,
		Color_NOC_SLATEGRAY = 458,
		Color_NOC_SNOW = 459,
		Color_NOC_SNOW2 = 460,
		Color_NOC_SNOW3 = 461,
		Color_NOC_SNOW4 = 462,
		Color_NOC_SPRINGGREEN = 463,
		Color_NOC_SPRINGGREEN2 = 464,
		Color_NOC_SPRINGGREEN3 = 465,
		Color_NOC_SPRINGGREEN4 = 466,
		Color_NOC_STEELBLUE = 467,
		Color_NOC_STEELBLUE1 = 468,
		Color_NOC_STEELBLUE2 = 469,
		Color_NOC_STEELBLUE3 = 470,
		Color_NOC_STEELBLUE4 = 471,
		Color_NOC_TAN = 472,
		Color_NOC_TAN1 = 473,
		Color_NOC_TAN2 = 474,
		Color_NOC_TAN3 = 475,
		Color_NOC_TAN4 = 476,
		Color_NOC_THISTLE = 477,
		Color_NOC_THISTLE1 = 478,
		Color_NOC_THISTLE2 = 479,
		Color_NOC_THISTLE3 = 480,
		Color_NOC_THISTLE4 = 481,
		Color_NOC_TOMATO = 482,
		Color_NOC_TOMATO1 = 482,
		Color_NOC_TOMATO2 = 483,
		Color_NOC_TOMATO3 = 484,
		Color_NOC_TOMATO4 = 485,
		Color_NOC_TURQUOISE = 486,
		Color_NOC_TURQUOISE1 = 487,
		Color_NOC_TURQUOISE2 = 488,
		Color_NOC_TURQUOISE3 = 489,
		Color_NOC_TURQUOISE4 = 490,
		Color_NOC_VIOLET = 491,
		Color_NOC_VIOLETRED = 492,
		Color_NOC_VIOLETRED1 = 493,
		Color_NOC_VIOLETRED2 = 494,
		Color_NOC_VIOLETRED3 = 495,
		Color_NOC_VIOLETRED4 = 496,
		Color_NOC_WHEAT = 497,
		Color_NOC_WHEAT1 = 498,
		Color_NOC_WHEAT2 = 499,
		Color_NOC_WHEAT3 = 500,
		Color_NOC_WHEAT4 = 501,
		Color_NOC_WHITESMOKE = 502,
		Color_NOC_YELLOW = 503,
		Color_NOC_YELLOW1 = 503,
		Color_NOC_YELLOW2 = 504,
		Color_NOC_YELLOW3 = 505,
		Color_NOC_YELLOW4 = 506,
		Color_NOC_YELLOWGREEN = 507,
		Color_NOC_WHITE = 508
	}
	enum MxTypeOfColor {
		Color_TOC_RGB = 0,
		Color_TOC_sRGB = 1,
		Color_TOC_HLS = 2,
		Color_TOC_CIELab = 3,
		Color_TOC_CIELch = 4
	}
	enum MxDisplayMode {
		DM_WireFrame = 0,
		DM_Shaded = 1
	}
	enum MxTypeOfLightSource {
		LightSource_TOLS_AMBIENT = 0,
		LightSource_TOLS_DIRECTIONAL = 1,
		LightSource_TOLS_POSITIONAL = 2,
		LightSource_TOLS_SPOT = 3
	}
	enum MxCameraProjection {
		CProjection_Orthographic = 0,
		CProjection_Perspective = 1,
		CProjection_Stereo = 2,
		CProjection_MonoLeftEye = 3,
		CProjection_MonoRightEye = 4
	}
	enum MxV3dTypeOfOrientation {
		Orientation_Xpos = 0,
		Orientation_Ypos = 1,
		Orientation_Zpos = 2,
		Orientation_Xneg = 3,
		Orientation_Yneg = 4,
		Orientation_Zneg = 5,
		Orientation_XposYpos = 6,
		Orientation_XposZpos = 7,
		Orientation_YposZpos = 8,
		Orientation_XnegYneg = 9,
		Orientation_XnegYpos = 10,
		Orientation_XnegZneg = 11,
		Orientation_XnegZpos = 12,
		Orientation_YnegZneg = 13,
		Orientation_YnegZpos = 14,
		Orientation_XposYneg = 15,
		Orientation_XposZneg = 16,
		Orientation_YposZneg = 17,
		Orientation_XposYposZpos = 18,
		Orientation_XposYnegZpos = 19,
		Orientation_XposYposZneg = 20,
		Orientation_XnegYposZpos = 21,
		Orientation_XposYnegZneg = 22,
		Orientation_XnegYposZneg = 23,
		Orientation_XnegYnegZpos = 24,
		Orientation_XnegYnegZneg = 25,
		Orientation_TypeOfOrientation_Zup_AxoLeft = 24,
		Orientation_TypeOfOrientation_Zup_AxoRight = 19,
		Orientation_TypeOfOrientation_Zup_Front = 4,
		Orientation_TypeOfOrientation_Zup_Back = 1,
		Orientation_TypeOfOrientation_Zup_Top = 2,
		Orientation_TypeOfOrientation_Zup_Bottom = 5,
		Orientation_TypeOfOrientation_Zup_Left = 3,
		Orientation_TypeOfOrientation_Zup_Right = 0,
		Orientation_TypeOfOrientation_Yup_AxoLeft = 21,
		Orientation_TypeOfOrientation_Yup_AxoRight = 18,
		Orientation_TypeOfOrientation_Yup_Front = 2,
		Orientation_TypeOfOrientation_Yup_Back = 5,
		Orientation_TypeOfOrientation_Yup_Top = 1,
		Orientation_TypeOfOrientation_Yup_Bottom = 4,
		Orientation_TypeOfOrientation_Yup_Left = 0,
		Orientation_TypeOfOrientation_Yup_Right = 3
	}
	enum MxTypeOfAngle {
		Angle_TypeOfAngle_Interior = 0,
		Angle_TypeOfAngle_Exterior = 1
	}
	enum MxTypeOfAngleArrowVisibility {
		Visibility_TOAAV_Both = 0,
		Visibility_TOAAV_First = 1,
		Visibility_TOAAV_Second = 2,
		Visibility_TOAAV_None = 3
	}
	enum MxTypeOfLine {
		Line_TOL_EMPTY = -1,
		Line_TOL_SOLID = 0,
		Line_TOL_DASH = 1,
		Line_TOL_DOT = 2,
		Line_TOL_DOTDASH = 3,
		Line_TOL_USERDEFINED = 4
	}
	enum MxTextPath {
		TextPath_TP_UP = 0,
		TextPath_TP_DOWN = 1,
		TextPath_TP_LEFT = 2,
		TextPath_TP_RIGHT = 3
	}
	enum MxDimensionArrowOrientation {
		DimensionArrowOrientation_DAO_Internal = 0,
		DimensionArrowOrientation_DAO_External = 1,
		DimensionArrowOrientation_DAO_Fit = 2
	}
	enum MxDimensionTextVerticalPosition {
		DimensionTextVerticalPosition_DTVP_Above = 0,
		DimensionTextVerticalPosition_DTVP_Below = 1,
		DimensionTextVerticalPosition_DTVP_Center = 2
	}
	enum MxDimensionTextHorizontalPosition {
		DimensionTextHorizontalPosition_DTHP_Left = 0,
		DimensionTextHorizontalPosition_DTHP_Right = 1,
		DimensionTextHorizontalPosition_DTHP_Center = 2,
		DimensionTextHorizontalPosition_DTHP_Fit = 3
	}
	enum MxKindOfDimension {
		KindOfDimension_KOD_NONE = 0,
		KindOfDimension_KOD_LENGTH = 1,
		KindOfDimension_KOD_PLANEANGLE = 2,
		KindOfDimension_KOD_SOLIDANGLE = 3,
		KindOfDimension_KOD_AREA = 4,
		KindOfDimension_KOD_VOLUME = 5,
		KindOfDimension_KOD_MASS = 6,
		KindOfDimension_KOD_TIME = 7,
		KindOfDimension_KOD_RADIUS = 8,
		KindOfDimension_KOD_DIAMETER = 9,
		KindOfDimension_KOD_CHAMF2D = 10,
		KindOfDimension_KOD_CHAMF3D = 11,
		KindOfDimension_KOD_OFFSET = 12,
		KindOfDimension_KOD_ELLIPSERADIUS = 13
	}
	enum MxDocColorType {
		DocColor_ColorGen = 0,
		DocColor_ColorSurf = 1,
		DocColor_ColorCurv = 2
	}
	enum MxKindOfInteractive {
		KindOfInteractive_None = 0,
		KindOfInteractive_Datum = 1,
		KindOfInteractive_Shape = 2,
		KindOfInteractive_Object = 3,
		KindOfInteractive_Relation = 4,
		KindOfInteractive_Dimension = 5,
		KindOfInteractive_LightSource = 6,
		KOI_None = 0,
		KOI_Datum = 1,
		KOI_Shape = 2,
		KOI_Object = 3,
		KOI_Relation = 4,
		KOI_Dimension = 5
	}
	enum MxPrs3dTypeOfHLR {
		TOH_NotSet = 0,
		TOH_PolyAlgo = 1,
		TOH_Algo = 2
	}
	enum MxDisplayStatus {
		DisplayStatus_Displayed = 0,
		DisplayStatus_Erased = 1,
		DisplayStatus_None = 2,
		DS_Displayed = 0,
		DS_Erased = 1,
		DS_None = 2
	}
	enum MxGlobalDisplayMode {
		DisplayMode_Wireframe = 0,
		DisplayMode_HiddenLineRemoval = 1,
		DisplayMode_Shaded = 2,
		DisplayMode_ShadedWithFaceBoundary = 3,
		DisplayMode_Transparency = 4
	}
	enum MxGradientFillMethod {
		GradientFillMethod_None = 0,
		GradientFillMethod_Horizontal = 1,
		GradientFillMethod_Vertical = 2,
		GradientFillMethod_Diagonal1 = 3,
		GradientFillMethod_Diagonal2 = 4,
		GradientFillMethod_Corner1 = 5,
		GradientFillMethod_Corner2 = 6,
		GradientFillMethod_Corner3 = 7,
		GradientFillMethod_Corner4 = 8,
		GradientFillMethod_Elliptical = 9,
		GFM_NONE = 0,
		GFM_HOR = 1,
		GFM_VER = 2,
		GFM_DIAG1 = 3,
		GFM_DIAG2 = 4,
		GFM_CORNER1 = 5,
		GFM_CORNER2 = 6,
		GFM_CORNER3 = 7,
		GFM_CORNER4 = 8
	}
	enum MxFormat {
		Format_Unknown = 0,
		Format_Image = 1,
		Format_3DS = 2,
		Format_3MF = 3,
		Format_AMF = 4,
		Format_COLLADA = 5,
		Format_DXF = 6,
		Format_FBX = 7,
		Format_GLTF = 8,
		Format_IGES = 9,
		Format_OBJ = 10,
		Format_OCCBREP = 11,
		Format_OFF = 12,
		Format_PLY = 13,
		Format_STEP = 14,
		Format_STL = 15,
		Format_VRML = 16,
		Format_X3D = 17,
		Format_Blender = 18
	}
	enum MxQuantAspect {
		Quant_Length = 0,
		Quant_Area = 1,
		Quant_Volume = 2
	}
}
/** wasm importObject 的可配置选项 */
export interface WasmConfig {
	/** 二进制数据 设置wasmBinary 则 locateFile 不生效**/
	wasmBinary?: ArrayBuffer;
	/** 手动指定wasm文件位置 */
	locateFile?: typeof getWasmURL;
	/** 打印 */
	print?: (theText: string) => string;
	/** 打印错误 */
	printErr?: (theText: string) => void;
	/** 监听运行时初始化 */
	onRuntimeInitialized?: () => void;
}
/** MxDraw3d的构造函数参数 的可配置选项 */
export interface MxDraw3dConfig extends WasmConfig {
	[x: string]: any;
	canvas: string | HTMLCanvasElement;
	/** canvas最小宽度 默认300 */
	minWidth?: number;
	/** canvas最小高度 默认300 */
	minHeight?: number;
	/** 指定更新Canvas大小的函数，不指定则默认自动处理(指定该函数则 minHeight, minWidth无效) */
	updateCanvasSize?: () => void;
}
export declare class MxDraw3d extends PubSub<{
	"eventModesSelected": (ids: number[]) => void;
	"eventAddToTree": (node: string) => void;
	"eventRemoveFromTree": (ids: number[]) => void;
	"eventFileSave": (fileName: string) => void;
	"eventRebuildTree": (tree_str: string) => void;
	"eventUpdatePointer": (pointer: number[]) => void;
	"eventUpdateViewSize": (pointer: number[]) => void;
}> implements MxDraw3dConfig {
	[x: string]: any;
	/** 监听wasm 文件加载成功事件 */
	static onloadWasmMxDraw3dModel: (mxDraw3d: MxDraw3d) => void;
	canvas: HTMLCanvasElement;
	constructor(options: MxDraw3dConfig);
}
export interface MxDraw3d extends WasmConfig {
	canvas: HTMLCanvasElement;
	_malloc: (len: number) => number;
	_free: (ptr: number) => void;
	HEAPU8: Uint8Array;
	ctx: WebGLRenderingContext | WebGL2RenderingContext | null;
	/** 设置Canvas大小
	* @param w 宽度
	* @param h 高度
	* @param noUpdate 不更新调整侦听器大小 默认 是true
	*  */
	setCanvasSize(w: number, h: number, noUpdate?: boolean): void;
	/** 暂停主循环 */
	pauseMainLoop(): void;
	/** 恢复主循环 */
	resumeMainLoop(): void;
	/** 从内存打开
	 * @param fileName 表示文件名称 (可通过浏览器 File对象的name属性或者自定义) 是生成渲染3D对象的唯一标识
	 * @param dataBuffer 文件数据的缓冲区
	 * @param len 缓冲区的长度
	 * @param is 是否为压缩格式
	 *  */
	openFromMemory(fileName: string, dataBuffer: number, len: number, is?: boolean): boolean;
	/** 从内存打开
	* @param fileName 表示文件名称 (可通过浏览器 File对象的name属性或者自定义) 是生成渲染3D对象的唯一标识
	* @param dataBuffer 文件数据的缓冲区
	* @param len 缓冲区的长度
	* @param is 是否为压缩格式
	*  */
	openBRepFromMemory(fileName: string, dataBuffer: Buffer, len: number, is?: boolean): boolean;
	/** 从Url打开
	 * @param name 名称 是生成渲染3D对象的唯一标识
	 * @param fileUrl 文件路径
	 *  */
	openFromUrl: (name: string, fileUrl: string) => void;
	/** 获取视图宽度 */
	getViewWidth: () => number;
	/** 获取视图高度 */
	getViewHeight: () => number;
	/** 获取视图缩放比例 */
	getViewScale: () => number;
	/** 获取视图中鼠标X位置 */
	getViewCursorX: () => number;
	/** 获取视图中鼠标Y位置 */
	getViewCursorY: () => number;
	/** 获取视图中鼠标Z位置 */
	getViewCursorZ: () => number;
	/** 删除选中实体 */
	removeSelectedObjects: () => void;
	/** 设置显示/隐藏模型 */
	setObjectShowState: (theId: number, theToShow: boolean) => void;
	/** 获取文件的长度 */
	getFileSize: (theFileName: string) => number;
	/** 获取文件的BufferPointer */
	getFileArryBufferPointer: (theFileName: string) => number;
	/** 新建文档 */
	creatDocument: () => boolean;
	/** 执行undo */
	executeUndo: () => boolean;
	/** 执行redo */
	executeRedo: () => boolean;
	/** 加载贴图图片 */
	loadTextureImg: (fileUrl: string, fileName: string) => void;
	/** 适应选中的对象 */
	fitSelectedObjects: () => void;
	/** 设置多维数据集贴图背景 */
	setCubemapBackground(url: string): void;
	/** 完成初始化 */
	ready: Promise<MxDraw3d>;
	/*** 显示地面或地面网格 */
	displayGround(is: boolean): void;
	/**
	 * 显示对象
	 * @param 唯一标识名称 是openFromUrl、openBRepFromMemory、 openFromMemory、 (open3DFile参数 file的name属性)
	 * */
	displayObject(name: string): boolean;
	/**
	 * 擦除对象
	 * @param 唯一标识名称 是openFromUrl、openBRepFromMemory、 openFromMemory、 (open3DFile参数 file的name属性)
	 * */
	eraseObject(name: string): boolean;
	/** 适应所有对象 */
	fitAllObjects(is: boolean): void;
	/** 删除所有对象 */
	removeAllObjects(): void;
	/** 高亮entry对应模型 */
	highLightSelShape(theEntry: number): void;
	/** 高亮 */
	highLightSelLabelShape(labelEntryStr: string): void;
	/** 通过Entry来进行删除对象 */
	removeObjectByEntry(theEntry: string): void;
	/** 激活选择模式 */
	activateSelectionMode(selectionType: MdGe.MxShapeEnum): void;
	/** 失活所有选择模式 */
	deactivateAllSelectionMode(): void;
	/** 开启关闭操作器 */
	setManipulatorEnabled(isEnabled: boolean): void;
	/** 管理剖切平面 */
	enableXClipPlane(theToEnabled: boolean): void;
	setXClipPlaneXPosition(thePosition: number): void;
	setXClipPlaneReverse(): void;
	enableYClipPlane(theToEnabled: boolean): void;
	setYClipPlaneYPosition(thePosition: number): void;
	setYClipPlaneReverse(): void;
	enableZClipPlane(theToEnabled: boolean): void;
	setZClipPlaneZPosition(thePosition: number): void;
	setZClipPlaneReverse(): void;
	enableCustomClipPlane(theToEnabled: boolean): void;
	setCustomClipPlanePosition(thePosition: number): void;
	setCustomClipPlaneReverse(): void;
	setCustomClipPlaneDirection(x: number, y: number, z: number): void;
	/** 散开模型 */
	explodeModels(theExplodeFactor: number): void;
	/** 设置显示模式 */
	setDisplayMode(theMode: MdGe.MxGlobalDisplayMode): void;
	/** 显示隐藏中心坐标轴体 */
	showCenterTrihedron(theToShow: boolean): void;
	/** 显示隐藏 */
	setObjectShowStateByLabel(labelEntryStr: string, theToShow: boolean): void;
	/** 更新画布大小 */
	updateCanvasSize: () => void;
	/** 通过浏览器器File对象打开3D文件
	 * @param file File对象
	 */
	open3DFile: (file: File) => void;
	/** 表示一个形状 */
	MdGeShape: typeof MdGeShape;
	/** 表示一个点 */
	MdGePoint: typeof MdGePoint;
	/** 表示一个向量 */
	MdGeVec: typeof MdGeVec;
	/** 表示一个Wire形状 */
	MdGeWire: typeof MdGeWire;
	/** 表示一个Edge形状 */
	MdGeEdge: typeof MdGeEdge;
	/** 表示一个Vertex形状 */
	MdGeVertex: typeof MdGeVertex;
	/** 表示一个Face形状 */
	MdGeFace: typeof MdGeFace;
	/** 表示一个Shell形状 */
	MdGeShell: typeof MdGeShell;
	/** 表示一个Solid形状 */
	MdGeSolid: typeof MdGeSolid;
	/** 表示一个CompSolid形状 */
	MdGeCompSolid: typeof MdGeCompSolid;
	/** 表示一个Compound形状 */
	MdGeCompound: typeof MdGeCompound;
	/** 表示一个矩阵 */
	MdGeMat: typeof MdGeMat;
	/** 表示一个坐标 */
	MdGeXYZ: typeof MdGeXYZ;
	/** 表示一个变换 */
	MdGeTrsf: typeof MdGeTrsf;
	/** 表示一个方向 */
	MdGeDir: typeof MdGeDir;
	/** 表示一个轴 */
	MdGeAxis: typeof MdGeAxis;
	/** 表示一个右手坐标系 */
	MdGeCSYSR: typeof MdGeCSYSR;
	/** 表示角度标注 */
	MdGeAngleDim: typeof MdGeAngleDim;
	/** 表示一维整数数组 */
	MdGeArray1OfInteger: typeof MdGeArray1OfInteger;
	/** 表示一维点数组 */
	MdGeArray1OfPnt: typeof MdGeArray1OfPnt;
	/** 表示一维实数数组 */
	MdGeArray1OfReal: typeof MdGeArray1OfReal;
	/** 表示二维点数组 */
	MdGeArray2OfPnt: typeof MdGeArray2OfPnt;
	/** 表示二维实数数组 */
	MdGeArray2OfReal: typeof MdGeArray2OfReal;
	/** 表示贝塞尔曲线 */
	MdGeBezierCurve: typeof MdGeBezierCurve;
	/** 表示贝塞尔曲面 */
	MdGeBezierSurface: typeof MdGeBezierSurface;
	/** 表示倒斜角 */
	MdGeChamfer: typeof MdGeChamfer;
	/** 表示一个圆 */
	MdGeCircle: typeof MdGeCircle;
	/** 表示一个坐标系（左手或右手） */
	MdGeCSYS: typeof MdGeCSYS;
	/** 表示一个圆锥 */
	MdGeCone: typeof MdGeCone;
	/** 表示一个圆柱 */
	MdGeCylinder: typeof MdGeCylinder;
	/** 表示一个平面 */
	MdGePlane: typeof MdGePlane;
	/** 表示直径标注 */
	MdGeDiameterDim: typeof MdGeDiameterDim;
	/** 表示一个椭圆 */
	MdGeEllipse: typeof MdGeEllipse;
	MxShapeEnum: typeof MdGe.MxShapeEnum;
	MxHorizontalTextAlignment: typeof MdGe.MxHorizontalTextAlignment;
	MxVerticalTextAlignment: typeof MdGe.MxVerticalTextAlignment;
	MxFontAspect: typeof MdGe.MxFontAspect;
	MxTypeOfDisplayText: typeof MdGe.MxTypeOfDisplayText;
	MxCF3dFilletShapeEnum: typeof MdGe.MxCF3dFilletShapeEnum;
	MxCFDSChamfMode: typeof MdGe.MxCFDSChamfMode;
	MxGFTrihedron: typeof MdGe.MxGFTrihedron;
	MxGAShapeEnum: typeof MdGe.MxGAShapeEnum;
	MxOffsetModeEnum: typeof MdGe.MxOffsetModeEnum;
	MxGAJoinTypeEnum: typeof MdGe.MxGAJoinTypeEnum;
	MxNameOfMaterial: typeof MdGe.MxNameOfMaterial;
	MxTypeOfMaterial: typeof MdGe.MxTypeOfMaterial;
	MxTypeOfReflection: typeof MdGe.MxTypeOfReflection;
	MxNameOfColor: typeof MdGe.MxNameOfColor;
	MxTypeOfColor: typeof MdGe.MxTypeOfColor;
	MxDisplayMode: typeof MdGe.MxDisplayMode;
	MxTypeOfAngle: typeof MdGe.MxTypeOfAngle;
	MxTypeOfAngleArrowVisibility: typeof MdGe.MxTypeOfAngleArrowVisibility;
	MxTypeOfLine: typeof MdGe.MxTypeOfLine;
	MxTextPath: typeof MdGe.MxTextPath;
	MxDimensionArrowOrientation: typeof MdGe.MxDimensionArrowOrientation;
	MxDimensionTextVerticalPosition: typeof MdGe.MxDimensionTextVerticalPosition;
	MxDimensionTextHorizontalPosition: typeof MdGe.MxDimensionTextHorizontalPosition;
	MxKindOfDimension: typeof MdGe.MxKindOfDimension;
	MxDocColorType: typeof MdGe.MxDocColorType;
	MxKindOfInteractive: typeof MdGe.MxKindOfInteractive;
	MxPrs3dTypeOfHLR: typeof MdGe.MxPrs3dTypeOfHLR;
	MxDisplayStatus: typeof MdGe.MxDisplayStatus;
	/** 表示拓扑元素遍历 */
	MdGeExplorer: typeof MdGeExplorer;
	/** 表示倒圆角 */
	MdGeFillet: typeof MdGeFillet;
	/** 表示双曲线 */
	MdGeHypr: typeof MdGeHypr;
	/** 表示一个Box */
	MdGeBox: typeof MdGeBox;
	/** 表示B样条曲线 */
	MdGeBSplineCurve: typeof MdGeBSplineCurve;
	/** 表示B样条曲面 */
	MdGeBSplineSurface: typeof MdGeBSplineSurface;
	/** 表示插值B样条曲线 */
	MdGeInterpolateBSpl: typeof MdGeInterpolateBSpl;
	/** 表示长度标注 */
	MdGeLengthDim: typeof MdGeLengthDim;
	/** 表示一条直线 */
	MdGeLine: typeof MdGeLine;
	/** 表示形状链表迭代器 */
	MdGeListIteratorOfListOfShape: typeof MdGeListIteratorOfListOfShape;
	/** 表示形状链表 */
	MdGeListOfShape: typeof MdGeListOfShape;
	/** 表示放样 */
	MdGeLoft: typeof MdGeLoft;
	/** 表示薄实体 */
	MdGeMakeThickSolid: typeof MdGeMakeThickSolid;
	/** 表示抛物线 */
	MdGeParab: typeof MdGeParab;
	/** 表示管道 */
	MdGePipe: typeof MdGePipe;
	/** 表示拟合点B样条曲线 */
	MdGePointsToBSpl: typeof MdGePointsToBSpl;
	/** 表示拟合B样条曲面 */
	MdGePointsToBSplSurface: typeof MdGePointsToBSplSurface;
	/** 表示拉伸体 */
	MdGePrism: typeof MdGePrism;
	/** 表示半径标注 */
	MdGeRadiusDim: typeof MdGeRadiusDim;
	/** 表示一个矩形 */
	MdGeRect: typeof MdGeRect;
	/** 表示旋转体 */
	MdGeRevol: typeof MdGeRevol;
	/** 表示一个球体 */
	MdGeSphere: typeof MdGeSphere;
	/** 表示文字 */
	MdGeText: typeof MdGeText;
	/** 表示文字标签 */
	MdGeTextLabel: typeof MdGeTextLabel;
	/** 拓扑转换类 */
	MdGeTopo: typeof MdGeTopo;
	mdGeTopo: MdGeTopo;
	/** 表示圆环 */
	MdGeTorus: typeof MdGeTorus;
	/** 形状变换类 */
	MdGeTransform: typeof MdGeTransform;
	/** 表示一个楔形 */
	MdGeWedge: typeof MdGeWedge;
	/** 表示BRep工具 */
	MdGeBRep: typeof MdGeBRep;
	mdGeBRep: MdGeBRep;
	/** 表示几何平面句柄 */
	MdGeHGeomPlane: typeof MdGeHGeomPlane;
	mdGeHGeomPlane: MdGeHGeomPlane;
	/** 表示几何曲面句柄 */
	MdGeHGeomSurface: typeof MdGeHGeomSurface;
	/** 所有类的父类，除MdGeTopo，MdGeBRep */
	Mx3dBaseObject: typeof Mx3dBaseObject;
	/** 表示颜色 */
	MdGeColor: typeof MdGeColor;
	/** 表示材质 */
	MdGeMaterialAspect: typeof MdGeMaterialAspect;
	/** 表示形状序列集合 */
	MdGeSequenceOfShape: typeof MdGeSequenceOfShape;
	/** 表示形状序列集合迭代器 */
	MdGeSequenceIteratorOfSequenceOfShape: typeof MdGeSequenceIteratorOfSequenceOfShape;
	/** 表示合并Edges成Wires */
	MdGeMakeWires: typeof MdGeMakeWires;
	/** 表示Wire生成Face */
	MdGeMakeFace: typeof MdGeMakeFace;
	/** 表示三点圆弧 */
	MdGeMakeArcOfCircle: typeof MdGeMakeArcOfCircle;
	/** 表示光照 */
	MdGeLight: typeof MdGeLight;
	/** 箭头样式 */
	MdGeArrowAspect: typeof MdGeArrowAspect;
	/** 标注样式 */
	MdGeDimAspect: typeof MdGeDimAspect;
	/** 线样式 */
	MdGeLineAspect: typeof MdGeLineAspect;
	/** 文本样式 */
	MdGeTextAspect: typeof MdGeTextAspect;
	/** 应用程序 */
	MdGeApplication: typeof MdGeApplication;
	mdGeApplication: MdGeApplication;
	/** 文档 */
	MdGeDocument: typeof MdGeDocument;
	mdGeDocument: MdGeDocument;
	/** 文档图形工具 */
	MdGeDocShapeTool: typeof MdGeDocShapeTool;
	/** 文档颜色工具 */
	MdGeDocColorTool: typeof MdGeDocColorTool;
	/** 文档标签元素 */
	MdGeLabel: typeof MdGeLabel;
	/** 文档标签元素序列 */
	MdGeLabelSequence: typeof MdGeLabelSequence;
	/** Location */
	MdGeLocation: typeof MdGeLocation;
	/** MdGeLabelTree */
	MdGeLabelTree: typeof MdGeLabelTree;
	mdGeLabelTree: MdGeLabelTree;
	/** 文档读取器 */
	MdGeDocReader: typeof MdGeDocReader;
	/** 文件写入器 */
	MdGeDocWriter: typeof MdGeDocWriter;
	/** 上下文 */
	MdGeAisContext: typeof MdGeAisContext;
	mdGeAisContext: MdGeAisContext;
	/** ais对象 */
	MdGeAisObject: typeof MdGeAisObject;
	/** ais形状 */
	MdGeAisShape: typeof MdGeAisShape;
	/** 包围盒 */
	MdGeBndBox: typeof MdGeBndBox;
	/** aistextured形状 */
	MdGeAisTexturedShape: typeof MdGeAisTexturedShape;
	/** MdGeSpliter */
	MdGeSpliter: typeof MdGeSpliter;
	Mx3dGeBndBox: typeof Mx3dGeBndBox;
	Mx3dGeColor: typeof Mx3dGeColor;
	Mx3dDbDocument: typeof Mx3dDbDocument;
	Mx3dDbLabel: typeof Mx3dDbLabel;
	Mx3dLabelSequence: typeof Mx3dLabelSequence;
	Mx3dLabelSequenceIterator: typeof Mx3dLabelSequenceIterator;
	Mx3dGeLocation: typeof Mx3dGeLocation;
	Mx3dGePoint: typeof Mx3dGePoint;
	Mx3dShapeObject: typeof Mx3dShapeObject;
	Mx3dGeObject: typeof Mx3dGeObject;
	Mx3dDbObject: typeof Mx3dDbObject;
	Mx3dApplication: typeof Mx3dApplication;
	app: Mx3dApplication;
}
/**
 * 所有类的父类， 除去MdGeTopo以及MdGeBrep
 */
export declare class Mx3dBaseObject {
	protected imp: any;
	constructor(imp?: any);
	getImp(): any;
	protected initTempObject(imp: any): void;
}
export declare class Mx3dShapeObject extends Mx3dBaseObject {
	constructor(p?: object);
	getBndBox(): Mx3dGeBndBox;
	Draw(): void;
}
export declare class Mx3dGeObject extends Mx3dBaseObject {
	constructor(p?: object);
}
export declare class Mx3dDbObject extends Mx3dBaseObject {
	constructor(p?: object);
}
/**
 * 表示一个形状。
 */
/**
 * 表示一个形状
 */
export declare class MdGeShape extends Mx3dBaseObject {
	constructor(p?: object);
	Fuse(other: MdGeShape): MdGeShape;
	Cut(remove: MdGeShape): MdGeShape;
	Common(other: MdGeShape): MdGeShape;
	Section(other: MdGeShape): MdGeShape;
	ShapeType(): MdGe.MxShapeEnum;
	Quantities(): MdGeArray1OfReal;
	MirrorByPoint(theP: MdGePoint): void;
	MirroredByPoint(theP: MdGePoint): MdGeShape;
	MirrorByAxis(axis: MdGeAxis): void;
	MirroredByAxis(axis: MdGeAxis): MdGeShape;
	MirrorByCSYSR(csysr: MdGeCSYSR): void;
	MirroredByCSYSR(csysr: MdGeCSYSR): MdGeShape;
	Rotate(axis: MdGeAxis, ang: number): void;
	Rotated(axis: MdGeAxis, ang: number): MdGeShape;
	Scale(point: MdGePoint, s: number): void;
	Scaled(point: MdGePoint, s: number): MdGeShape;
	Transform(trsf: MdGeTrsf): void;
	Transformed(trsf: MdGeTrsf): MdGeShape;
	TranslateByVec(vec: MdGeVec): void;
	TranslatedByVec(vec: MdGeVec): MdGeShape;
	TranslateBy2Points(point1: MdGePoint, point2: MdGePoint): void;
	TranslatedBy2Points(point1: MdGePoint, point2: MdGePoint): MdGeShape;
	SetTextureFileName(path: string): void;
	SetMaterialAspect(material: MdGeMaterialAspect): void;
	SetColor(color: MdGeColor): void;
	TextureRepeat(): boolean;
	URepeat(): number;
	VRepeat(): number;
	SetTextureRepeat(theToRepeat: boolean, theURepeat: number, theVRepeat: number): void;
	TextureScale(): boolean;
	TextureScaleU(): number;
	TextureScaleV(): number;
	SetTextureScale(theToSetTextureScale: boolean, theScaleU: number, theScaleV: number): void;
	TextureOrigin(): boolean;
	TextureUOrigin(): number;
	TextureVOrigin(): number;
	SetTextureOrigin(theToSetTextureOrigin: boolean, theUOrigin: number, theVOrigin: number): void;
	IsNull(): boolean;
	SetShapeName(theShapeName: string): void;
	GetShapeName(): string;
	GetBndBox(): MdGeBndBox;
	Draw(): string;
}
/**
 * 表示一个点形状
 */
export declare class MdGeVertex extends MdGeShape {
	constructor(p1?: MdGePoint | number | object, p2?: number, p3?: number);
}
/**
 * 表示一个Edge形状
 */
export declare class MdGeEdge extends MdGeShape {
	constructor(p1?: MdGePoint | object, p2?: MdGePoint);
	Wire(): MdGeWire;
	AddedEdge(edge: MdGeEdge): MdGeWire;
	AddedWire(wire: MdGeWire): MdGeWire;
}
/**
 * 表示一个Wire形状
 */
export declare class MdGeWire extends MdGeShape {
	constructor(p?: object);
	AddedEdge(edge: MdGeEdge): MdGeWire;
	AddedWire(wire: MdGeWire): MdGeWire;
}
/**
 * 表示一个Face形状
 */
export declare class MdGeFace extends MdGeShape {
	constructor(p?: object);
}
/**
 * 表示一个Shell形状
 */
export declare class MdGeShell extends MdGeShape {
	constructor(p?: object);
}
/**
 * 表示一个Solid形状
 */
export declare class MdGeSolid extends MdGeShape {
	constructor(p?: object);
}
/**
 * 表示一个CompSolid形状
 */
export declare class MdGeCompSolid extends MdGeShape {
	constructor(p?: object);
}
/**
 * 表示一个Compound形状
 */
export declare class MdGeCompound extends MdGeShape {
	constructor(p?: object);
}
/**
 * 表示一个矩阵。
 */
/**
 * 表示一个矩阵
 */
export declare class MdGeMat extends Mx3dBaseObject {
	constructor(p1?: MdGeXYZ | number | object, p2?: MdGeXYZ | number, p3?: MdGeXYZ | number, p4?: number, p5?: number, p6?: number, p7?: number, p8?: number, p9?: number);
	SetCol(col: number, value: MdGeXYZ): void;
	SetCols(col1: MdGeXYZ, col2: MdGeXYZ, col3: MdGeXYZ): void;
	SetCross(ref: MdGeXYZ): void;
	SetDiagonal(x1: number, x2: number, x3: number): void;
	SetDot(ref: MdGeXYZ): void;
	SetIdentity(): void;
	SetRotation(axis: MdGeXYZ, ang: number): void;
	SetRow(row: number, value: MdGeXYZ): void;
	SetRows(row1: MdGeXYZ, row2: MdGeXYZ, row3: MdGeXYZ): void;
	SetScale(s: number): void;
	SetValue(row: number, col: number, value: number): void;
	Column(col: number): MdGeXYZ;
	Determinant(): number;
	Diagonal(): MdGeXYZ;
	Row(row: number): MdGeXYZ;
	Value(row: number, col: number): number;
	ChangeValue(row: number, col: number, value: number): void;
	IsSingular(): boolean;
	Add(other: MdGeMat): void;
	Added(other: MdGeMat): MdGeMat;
	Divide(scalar: number): void;
	Divided(scalar: number): MdGeMat;
	Invert(): void;
	Inverted(): MdGeMat;
	MultipliedByMat(other: MdGeMat): MdGeMat;
	MultiplyByMat(other: MdGeMat): void;
	PreMultiplyByMat(other: MdGeMat): void;
	MultipliedByS(scalar: number): MdGeMat;
	MultiplyByS(scalar: number): void;
	Power(n: number): void;
	Powered(n: number): MdGeMat;
	Subtract(other: MdGeMat): void;
	Subtracted(other: MdGeMat): MdGeMat;
	Transpose(): void;
	Transposed(): MdGeMat;
}
/**
 * 表示一个坐标。
 */
/**
 * 表示一个坐标
 */
export declare class MdGeXYZ extends Mx3dBaseObject {
	constructor(p1?: number | object, p2?: number, p3?: number);
	SetCoord(x: number, y: number, z?: number): void;
	SetX(x: number): void;
	SetY(y: number): void;
	SetZ(z: number): void;
	Coord(index: number): number;
	ChangeCoord(index: number, value: number): void;
	X(): number;
	Y(): number;
	Z(): number;
	Modulus(): number;
	SquareModulus(): number;
	IsEqual(other: MdGeXYZ, tolerance: number): boolean;
	Add(other: MdGeXYZ): void;
	Added(other: MdGeXYZ): MdGeXYZ;
	Cross(other: MdGeXYZ): void;
	Crossed(other: MdGeXYZ): MdGeXYZ;
	CrossMagnitude(right: MdGeXYZ): number;
	CrossSquareMagnitude(right: MdGeXYZ): number;
	CrossCross(coord1: MdGeXYZ, coord2: MdGeXYZ): void;
	CrossCrossed(coord1: MdGeXYZ, coord2: MdGeXYZ): MdGeXYZ;
	Divide(salar: number): void;
	Divided(scalar: number): MdGeXYZ;
	Dot(other: MdGeXYZ): number;
	DotCross(coord1: MdGeXYZ, coord2: MdGeXYZ): number;
	MultiplyByS(scalar: number): void;
	MultiplyByXYZ(other: MdGeXYZ): void;
	MultiplyByMat(matrix: MdGeMat): void;
	MultipliedByS(scalar: number): MdGeXYZ;
	MultipliedByXYZ(other: MdGeXYZ): MdGeXYZ;
	MultipliedByMat(matrix: MdGeMat): MdGeXYZ;
	Normalize(): void;
	Normalized(): MdGeXYZ;
	Reverse(): void;
	Reversed(): MdGeXYZ;
	Subtract(other: MdGeXYZ): void;
	Subtracted(other: MdGeXYZ): MdGeXYZ;
}
/**
 * 表示一个变换。
 */
/**
 * 表示一个变换
 */
export declare class MdGeTrsf extends Mx3dBaseObject {
	constructor(p?: object);
	SetMirrorByPoint(point: MdGePoint): void;
	SetMirrorByAxis(axis: MdGeAxis): void;
	SetMirrorByCSYSR(csysr: MdGeCSYSR): void;
	SetRotation(axis: MdGeAxis, ang: number): void;
	SetScale(point: MdGePoint, s: number): void;
	SetTranslationByVec(vec: MdGeVec): void;
	SetTranslationBy2Points(point1: MdGePoint, point2: MdGePoint): void;
	SetTranslationPart(vec: MdGeVec): void;
	SetScaleFactor(s: number): void;
	SetValues(a11: number, a12: number, a13: number, a14: number, a21: number, a22: number, a23: number, a24: number, a31: number, a32: number, a33: number, a34: number): void;
	IsNegative(): number;
	ScaleFactor(): number;
	Value(row: number, col: number): number;
	Invert(): void;
	Inverted(): MdGeTrsf;
	Multiplied(t: MdGeTrsf): MdGeTrsf;
	Multiply(t: MdGeTrsf): void;
	PreMultiply(t: MdGeTrsf): void;
	Power(n: number): void;
	Powered(n: number): MdGeTrsf;
	Transforms(x: number, y: number, z: number): void;
}
/**
 * 表示一个方向。
 */
/**
 * 表示一个方向
 */
export declare class MdGeDir extends Mx3dBaseObject {
	constructor(p1?: MdGeVec | number | object, p2?: number, p3?: number);
	SetCoord(p1: number, p2: number, p3?: number): void;
	SetX(theXv: number): void;
	SetY(theYv: number): void;
	SetZ(theZv: number): void;
	SetXYZ(theCoord: MdGeXYZ): void;
	Coord(theIndex: number): number;
	X(): number;
	Y(): number;
	Z(): number;
	XYZ(): MdGeXYZ;
	IsEqual(theOther: MdGeDir, theAngularTolerance: number): boolean;
	IsNormal(theOther: MdGeDir, theAngularTolerance: number): boolean;
	IsOpposite(theOther: MdGeDir, theAngularTolerance: number): boolean;
	IsParallel(theOther: MdGeDir, theAngularTolerance: number): boolean;
	Angle(theOther: MdGeDir): number;
	AngleWithRef(theOther: MdGeDir, theVRef: MdGeDir): number;
	Cross(theRight: MdGeDir): void;
	Crossed(theRight: MdGeDir): MdGeDir;
	CrossCross(theV1: MdGeDir, theV2: MdGeDir): void;
	CrossCrossed(theV1: MdGeDir, theV2: MdGeDir): MdGeDir;
	Dot(theOther: MdGeDir): number;
	DotCross(theV1: MdGeDir, theV2: MdGeDir): number;
	Reverse(): void;
	Reversed(): MdGeDir;
	MirrorByVec(theV: MdGeDir): void;
	MirroredByVec(theV: MdGeDir): MdGeDir;
	MirrorByAxis(theA1: MdGeAxis): void;
	MirroredByAxis(theA1: MdGeAxis): MdGeDir;
	MirrorByCSYSR(theA2: MdGeCSYSR): void;
	MirroredByCSYSR(theA2: MdGeCSYSR): MdGeDir;
	Rotate(theA1: MdGeAxis, theAng: number): void;
	Rotated(theA1: MdGeAxis, theAng: number): MdGeDir;
	Transform(theT: MdGeTrsf): void;
	Transformed(theT: MdGeTrsf): MdGeDir;
}
/**
 * 表示一个轴。
 */
/**
 * 表示一个轴
 */
export declare class MdGeAxis extends Mx3dBaseObject {
	constructor(p1?: MdGePoint | object, p2?: MdGeDir);
	Direction(): MdGeDir;
	Location(): MdGePoint;
	SetDirection(dir: MdGeDir): void;
	SetLocation(loc: MdGePoint): void;
}
/**
 * 表示右手坐标系。
 */
/**
 * 表示右手坐标系。
 */
export declare class MdGeCSYSR extends Mx3dBaseObject {
	constructor(p1?: MdGePoint | object, p2?: MdGeDir, p3?: MdGeDir);
	Origin(): MdGePoint;
	XDirection(): MdGeDir;
	YDirection(): MdGeDir;
	ZDirection(): MdGeDir;
	SetOrigin(p1: MdGePoint | number, p2?: number, p3?: number): void;
	SetXDirection(x_dir: MdGeDir): void;
	SetYDirection(y_dir: MdGeDir): void;
	SetZDirection(z_dir: MdGeDir): void;
	Angle(theOther: MdGeCSYSR): number;
	Axis(): MdGeAxis;
	IsCoplanarWithCSYSR(Other: MdGeCSYSR, LinearTolerance: number, AngularTolerance: number): boolean;
	IsCoplanarWithAxis(A1: MdGeAxis, LinearTolerance: number, AngularTolerance: number): boolean;
	MirrorByPoint(P: MdGePoint): void;
	MirroredByPoint(P: MdGePoint): MdGeCSYSR;
	MirrorByAxis(A1: MdGeAxis): void;
	MirroredByAxis(A1: MdGeAxis): MdGeCSYSR;
	MirrorByCSYSR(A2: MdGeCSYSR): void;
	MirroredByCSYSR(A2: MdGeCSYSR): MdGeCSYSR;
	Rotate(theA1: MdGeAxis, theAng: number): void;
	Rotated(theA1: MdGeAxis, theAng: number): MdGeCSYSR;
	Scale(theP: MdGePoint, theS: number): void;
	Scaled(theP: MdGePoint, theS: number): MdGeCSYSR;
	Transform(theT: MdGeTrsf): void;
	Transformed(theT: MdGeTrsf): MdGeCSYSR;
	TranslateByVec(theV: MdGeVec): void;
	TranslatedByVec(theV: MdGeVec): MdGeCSYSR;
	TranslateBy2Points(theP1: MdGePoint, theP2: MdGePoint): void;
	TranslatedBy2Points(theP1: MdGePoint, theP2: MdGePoint): MdGeCSYSR;
}
/**
 * 表示一个点。
 */
/**
 * 表示一个点。
 */
export declare class MdGePoint extends Mx3dBaseObject {
	constructor(p1?: number | object, p2?: number, p3?: number);
	X(): number;
	Y(): number;
	Z(): number;
	SetX(x: number): void;
	SetY(y: number): void;
	SetZ(z: number): void;
	SetXYZ(x: number, y: number, z: number): void;
	BaryCenter(alpha: number, point: MdGePoint, beta: number): void;
	IsEqual(other: MdGePoint, linearTolerance: number): boolean;
	Distance(other: MdGePoint): number;
	SquareDistance(other: MdGePoint): number;
	MirrorByPoint(point: MdGePoint): void;
	MirroredByPoint(point: MdGePoint): MdGePoint;
	MirrorByAxis(axis: MdGeAxis): void;
	MirroredByAxis(axis: MdGeAxis): MdGePoint;
	MirrorByCSYSR(csysr: MdGeCSYSR): void;
	MirroredByCSYSR(csysr: MdGeCSYSR): MdGePoint;
	Rotate(axis: MdGeAxis, ang: number): void;
	Rotated(axis: MdGeAxis, ang: number): MdGePoint;
	Scale(point: MdGePoint, s: number): void;
	Scaled(point: MdGePoint, s: number): MdGePoint;
	Transform(trsf: MdGeTrsf): void;
	Transformed(trsf: MdGeTrsf): MdGePoint;
	TranslateByVec(vec: MdGeVec): void;
	TranslatedByVec(vec: MdGeVec): MdGePoint;
	TranslateBy2Points(point1: MdGePoint, point2: MdGePoint): void;
	TranslatedBy2Points(point1: MdGePoint, point2: MdGePoint): MdGePoint;
	Shape(): MdGeShape;
	Vertex(): MdGeVertex;
}
/**
 * 表示一个向量。
 */
/**
 * 表示一个向量。
 */
export declare class MdGeVec extends Mx3dBaseObject {
	constructor(p1?: MdGePoint | number | object, p2?: MdGePoint | number, p3?: number);
	SetCoord(p1: number, p2: number, p3?: number): void;
	X(): number;
	Y(): number;
	Z(): number;
	SetX(x: number): void;
	SetY(y: number): void;
	SetZ(z: number): void;
	SetXYZ(x: number, y: number, z: number): void;
	Coord(theIndex: number): number;
	IsEqual(other: MdGeVec, linearTolerance: number, angularTolerance: number): boolean;
	IsNormal(other: MdGeVec, angularTolerance: number): boolean;
	IsOpposite(other: MdGeVec, angularTolerance: number): boolean;
	IsParallel(other: MdGeVec, angularTolerance: number): boolean;
	Angle(other: MdGeVec): number;
	AngleWithRef(other: MdGeVec, ref: MdGeVec): number;
	Magnitude(): number;
	SquareMagnitude(): number;
	Add(other: MdGeVec): void;
	Added(other: MdGeVec): MdGeVec;
	Subtract(right: MdGeVec): void;
	Subtracted(right: MdGeVec): MdGeVec;
	Multiply(scalar: number): void;
	Multiplied(scalar: number): MdGeVec;
	Divide(scalar: number): void;
	Divided(scalar: number): MdGeVec;
	Cross(right: MdGeVec): void;
	Crossed(right: MdGeVec): MdGeVec;
	CrossMagnitude(right: MdGeVec): number;
	CrossSquareMagnitude(right: MdGeVec): number;
	CrossCross(v1: MdGeVec, v2: MdGeVec): void;
	CrossCrossed(v1: MdGeVec, v2: MdGeVec): MdGeVec;
	Dot(other: MdGeVec): number;
	DotCross(v1: MdGeVec, v2: MdGeVec): number;
	Normalize(): void;
	Normalized(): MdGeVec;
	Reverse(): void;
	Reversed(): MdGeVec;
	SetLinearForm(p1: MdGeVec | number, p2: MdGeVec, p3?: MdGeVec | number, p4?: MdGeVec, p5?: MdGeVec | number, p6?: MdGeVec, p7?: MdGeVec): void;
	MirrorByVec(vec: MdGeVec): void;
	MirroredByVec(vec: MdGeVec): MdGeVec;
	MirrorByAxis(axis: MdGeAxis): void;
	MirroredByAxis(axis: MdGeAxis): MdGeVec;
	MirrorByCSYSR(csysr: MdGeCSYSR): void;
	MirroredByCSYSR(csysr: MdGeCSYSR): MdGeVec;
	Rotate(axis: MdGeAxis, ang: number): void;
	Rotated(axis: MdGeAxis, ang: number): MdGeVec;
	Scale(s: number): void;
	Scaled(s: number): MdGeVec;
	Transform(t: MdGeTrsf): void;
	Transformed(t: MdGeTrsf): MdGeVec;
}
/**
 * 表示一个Wire形状。
 */
/**
 * 表示一个Edge形状。
 */
/**
 * 表示一个Vertex形状。
 */
/**
 * 表示一个Face形状。
 */
/**
 * 表示一个Shell形状。
 */
/**
 * 表示一个Solid形状。
 */
/**
 * 表示一个CompSolid形状。
 */
/**
 * 表示一个Compound形状。
 */
/**
 * 表示角度标注。
 */
/**
 * 表示角度标注
 */
export declare class MdGeAngleDim extends Mx3dBaseObject {
	constructor(p1?: MdGeEdge | MdGePoint | object, p2?: MdGeEdge | MdGePoint, p3?: MdGePoint);
	FirstPoint(): MdGePoint;
	SecondPoint(): MdGePoint;
	CenterPoint(): MdGePoint;
	FirstShape(): MdGeShape;
	SecondShape(): MdGeShape;
	ThirdShape(): MdGeShape;
	SetMeasuredGeometry(p1: MdGeFace | MdGeEdge | MdGePoint, p2?: MdGeEdge | MdGePoint, p3?: MdGePoint): void;
	SetTextPosition(theTextPos: MdGePoint): void;
	GetTextPosition(): MdGePoint;
	GetDisplayUnits(): string;
	GetModelUnits(): string;
	SetDisplayUnits(theUnits: string): void;
	SetModelUnits(theUnits: string): void;
	SetType(theType: MdGe.MxTypeOfAngle): void;
	GetType(): MdGe.MxTypeOfAngle;
	SetArrowsVisibility(theType: MdGe.MxTypeOfAngleArrowVisibility): void;
	GetArrowsVisibility(): MdGe.MxTypeOfAngleArrowVisibility;
	GetValue(): number;
	SetComputedValue(): void;
	SetCustomValue(theValue: number): void;
	GetPlane(): MdGePlane;
	GetGeometryType(): number;
	SetCustomPlane(thePlane: MdGePlane): void;
	UnsetCustomPlane(): void;
	IsTextPositionCustom(): boolean;
	DimensionAspect(): MdGeDimAspect;
	SetDimensionAspect(theDimensionAspect: MdGeDimAspect): void;
	KindOfDimension(): MdGe.MxKindOfDimension;
	AcceptDisplayMode(theMode: number): boolean;
	UnsetFixedTextPosition(): void;
	SelToleranceForText2d(): number;
	SetSelToleranceForText2d(theTol: number): void;
	GetFlyout(): number;
	SetFlyout(theFlyout: number): void;
	IsValid(): boolean;
	Display(): void;
}
/**
 * 表示一维整数数组。
 */
/**
 * 表示一维整数数组。
 */
export declare class MdGeArray1OfInteger extends Mx3dBaseObject {
	constructor(p1?: number | object, p2?: number);
	Init(theInteger: number): void;
	Size(): number;
	Length(): number;
	IsEmpty(): boolean;
	Lower(): number;
	Upper(): number;
	IsDeletable(): boolean;
	IsAllocated(): boolean;
	First(): number;
	Last(): number;
	Value(theIndex: number): number;
	SetValue(theIndex: number, theInteger: number): void;
	Resize(theLower: number, theUpper: number, theToCopyData: boolean): void;
}
/**
 * 表示一维点数组。
 */
/**
 * 表示一维点数组。
 */
export declare class MdGeArray1OfPnt extends Mx3dBaseObject {
	constructor(p1?: number | object, p2?: number);
	Init(thePnt: MdGePoint): void;
	Size(): number;
	Length(): number;
	IsEmpty(): boolean;
	Lower(): number;
	Upper(): number;
	IsDeletable(): boolean;
	IsAllocated(): boolean;
	First(): MdGePoint;
	Last(): MdGePoint;
	Value(theIndex: number): MdGePoint;
	SetValue(theIndex: number, thePnt: MdGePoint): void;
	Resize(theLower: number, theUpper: number, theToCopyData: boolean): void;
}
/**
 * 表示一维实数数组。
 */
/**
 * 表示一维实数数组。
 */
export declare class MdGeArray1OfReal extends Mx3dBaseObject {
	constructor(p1?: number | object, p2?: number);
	Init(theReal: number): void;
	Size(): number;
	Length(): number;
	IsEmpty(): boolean;
	Lower(): number;
	Upper(): number;
	IsDeletable(): boolean;
	IsAllocated(): boolean;
	First(): number;
	Last(): number;
	Value(theIndex: number): number;
	SetValue(theIndex: number, theReal: number): void;
	Resize(theLower: number, theUpper: number, theToCopyData: boolean): void;
}
/**
 * 表示二维点数组。
 */
/**
 * 表示二维点数组。
 */
export declare class MdGeArray2OfPnt extends Mx3dBaseObject {
	constructor(p1?: number | MdGePoint | object, p2?: number, p3?: number, p4?: number, p5?: number);
	Init(thePoint: MdGePoint): void;
	Size(): number;
	Length(): number;
	NbRows(): number;
	NbColumns(): number;
	RowLength(): number;
	ColLength(): number;
	LowerRow(): number;
	UpperRow(): number;
	LowerCol(): number;
	UpperCol(): number;
	IsDeletable(): boolean;
	Value(theRow: number, theCol: number): MdGePoint;
	SetValue(theRow: number, theCol: number, thePoint: MdGePoint): void;
	Resize(theRowLower: number, theRowUpper: number, theColLower: number, theColUpper: number, theToCopyData: boolean): void;
}
/**
 * 表示二维实数数组。
 */
/**
 * 表示二维实数数组。
 */
export declare class MdGeArray2OfReal extends Mx3dBaseObject {
	constructor(p1?: number | object, p2?: number, p3?: number, p4?: number, p5?: number);
	Init(theReal: number): void;
	Size(): number;
	Length(): number;
	NbRows(): number;
	NbColumns(): number;
	RowLength(): number;
	ColLength(): number;
	LowerRow(): number;
	UpperRow(): number;
	LowerCol(): number;
	UpperCol(): number;
	IsDeletable(): boolean;
	Value(theRow: number, theCol: number): number;
	SetValue(theRow: number, theCol: number, theReal: number): void;
	Resize(theRowLower: number, theRowUpper: number, theColLower: number, theColUpper: number, theToCopyData: boolean): void;
}
/**
 * 表示贝塞尔曲线
 */
/**
 * 表示贝塞尔曲线
 */
export declare class MdGeBezierCurve extends Mx3dBaseObject {
	constructor(p1?: MdGeArray1OfPnt | object, p2?: MdGeArray1OfReal);
	Increase(Degree: number): void;
	InsertPoleAfter(p1: number, p2: MdGePoint, p3?: number): void;
	InsertPoleBefore(p1: number, p2: MdGePoint, p3?: number): void;
	RemovePole(Index: number): void;
	Reverse(): void;
	ReversedParameter(U: number): number;
	Segment(U1: number, U2: number): void;
	SetPole(p1: number, p2: MdGePoint, p3?: number): void;
	SetWeight(Index: number, Weight: number): void;
	IsClosed(): boolean;
	IsCN(N: number): boolean;
	IsPeriodic(): boolean;
	IsRational(): boolean;
	Continuity(): MdGe.MxGAShapeEnum;
	Degree(): number;
	DN(U: number, N: number): MdGeVec;
	StartPoint(): MdGePoint;
	EndPoint(): MdGePoint;
	FirstParameter(): number;
	LastParameter(): number;
	NbPoles(): number;
	Pole(Index: number): MdGePoint;
	Poles(): MdGeArray1OfPnt;
	Weight(Index: number): number;
	Weights(): MdGeArray1OfReal;
	Transform(T: MdGeTrsf): void;
	static MaxDegree(): number;
	Shape(): MdGeShape;
	Edge(): MdGeEdge;
	Wire(): MdGeWire;
}
/**
 * 表示贝塞尔曲面
 */
/**
 * 表示贝塞尔曲面
 */
export declare class MdGeBezierSurface extends Mx3dBaseObject {
	constructor(p1?: MdGeArray2OfPnt | object, p2?: MdGeArray2OfReal);
	ExchangeUV(): void;
	Increase(UDeg: number, VDeg: number): void;
	InsertPoleColAfter(p1: number, p2: MdGeArray1OfPnt, p3?: MdGeArray1OfReal): void;
	InsertPoleColBefore(p1: number, p2: MdGeArray1OfPnt, p3?: MdGeArray1OfReal): void;
	InsertPoleRowAfter(p1: number, p2: MdGeArray1OfPnt, p3?: MdGeArray1OfReal): void;
	InsertPoleRowBefore(p1: number, p2: MdGeArray1OfPnt, p3?: MdGeArray1OfReal): void;
	RemovePoleCol(VIndex: number): void;
	RemovePoleRow(UIndex: number): void;
	Segment(U1: number, U2: number, V1: number, V2: number): void;
	SetPole(p1: number, p2: number, p3: MdGePoint, p4?: number): void;
	SetPoleCol(p1: number, p2: MdGeArray1OfPnt, p3?: MdGeArray1OfReal): void;
	SetPoleRow(p1: number, p2: MdGeArray1OfPnt, p3?: MdGeArray1OfReal): void;
	SetWeight(UIndex: number, VIndex: number, Weight: number): void;
	SetWeightCol(VIndex: number, CPoleWeights: MdGeArray1OfReal): void;
	SetWeightRow(UIndex: number, CPoleWeights: MdGeArray1OfReal): void;
	UReverse(): void;
	UReversedParameter(U: number): number;
	VReverse(): void;
	VReversedParameter(V: number): number;
	Continuity(): MdGe.MxGAShapeEnum;
	DN(U: number, V: number, Nu: number, Nv: number): MdGeVec;
	NbUPoles(): number;
	NbVPoles(): number;
	Pole(UIndex: number, VIndex: number): MdGePoint;
	Poles(): MdGeArray2OfPnt;
	UDegree(): number;
	VDegree(): number;
	Weight(UIndex: number, VIndex: number): number;
	Weights(): MdGeArray2OfReal;
	IsUClosed(): boolean;
	IsVClosed(): boolean;
	IsCNu(N: number): boolean;
	IsCNv(N: number): boolean;
	IsUPeriodic(): boolean;
	IsVPeriodic(): boolean;
	IsURational(): boolean;
	IsVRational(): boolean;
	Transform(T: MdGeTrsf): void;
	static MaxDegree(): number;
	Shape(): MdGeShape;
	Face(): MdGeFace;
}
/**
 * 表示倒斜角
 */
/**
 * 表示倒斜角
 */
export declare class MdGeChamfer extends Mx3dBaseObject {
	constructor(p?: MdGeShape | object);
	Add(p1: MdGeEdge | number, p2?: MdGeEdge | number, p3?: MdGeEdge, p4?: MdGeFace): void;
	SetDist(Dis: number, IC: number, F: MdGeFace): void;
	GetDist(IC: number, Dis: number): void;
	SetDists(Dis1: number, Dis2: number, IC: number, F: MdGeFace): void;
	Dists(IC: number, Dis1: number, Dis2: number): void;
	AddDA(Dis: number, Angle: number, E: MdGeEdge, F: MdGeFace): void;
	SetDistAngle(Dis: number, Angle: number, IC: number, F: MdGeFace): void;
	GetDistAngle(IC: number, Dis: number, Angle: number): void;
	SetMode(theMode: MdGe.MxCFDSChamfMode): void;
	IsSymetric(IC: number): boolean;
	IsTwoDistances(IC: number): boolean;
	IsDistanceAngle(IC: number): boolean;
	ResetContour(IC: number): void;
	NbContours(): number;
	Contour(E: MdGeEdge): number;
	NbEdges(I: number): number;
	Edge(I: number, J: number): MdGeEdge;
	Remove(E: MdGeEdge): void;
	Length(IC: number): number;
	FirstVertex(IC: number): MdGeVertex;
	LastVertex(IC: number): MdGeVertex;
	Abscissa(IC: number, V: MdGeVertex): number;
	RelativeAbscissa(IC: number, V: MdGeVertex): number;
	ClosedAndTangent(IC: number): boolean;
	Closed(IC: number): boolean;
	Reset(): void;
	Simulate(IC: number): void;
	NbSurf(IC: number): number;
	Shape(): MdGeShape;
}
/**
 * 表示一个圆
 */
/**
 * 表示一个圆。
 */
export declare class MdGeCircle extends Mx3dBaseObject {
	constructor(p1?: MdGeCSYSR | object, p2?: number);
	SetAxis(theA1: MdGeAxis): void;
	SetLocation(theP: MdGePoint): void;
	SetPosition(theA2: MdGeCSYSR): void;
	SetRadius(theRadius: number): void;
	Area(): number;
	Axis(): MdGeAxis;
	Length(): number;
	Location(): MdGePoint;
	Position(): MdGeCSYSR;
	Radius(): number;
	XAxis(): MdGeAxis;
	YAxis(): MdGeAxis;
	Distance(theP: MdGePoint): number;
	SquareDistance(theP: MdGePoint): number;
	Contains(theP: MdGePoint, theLinearTolerance: number): boolean;
	MirrorByPoint(theP: MdGePoint): void;
	MirroredByPoint(theP: MdGePoint): MdGeCircle;
	MirrorByAxis(theA1: MdGeAxis): void;
	MirroredByAxis(theA1: MdGeAxis): MdGeCircle;
	MirrorByCSYSR(theA2: MdGeCSYSR): void;
	MirroredByCSYSR(theA2: MdGeCSYSR): MdGeCircle;
	Rotate(theA1: MdGeAxis, theAng: number): void;
	Rotated(theA1: MdGeAxis, theAng: number): MdGeCircle;
	Scale(theP: MdGePoint, theS: number): void;
	Scaled(theP: MdGePoint, theS: number): MdGeCircle;
	Transform(theT: MdGeTrsf): void;
	Transformed(theT: MdGeTrsf): MdGeCircle;
	TranslateByVec(theV: MdGeVec): void;
	TranslatedByVec(theV: MdGeVec): MdGeCircle;
	TranslateBy2Points(theP1: MdGePoint, theP2: MdGePoint): void;
	TranslatedBy2Points(theP1: MdGePoint, theP2: MdGePoint): MdGeCircle;
	Shape(): MdGeShape;
	Edge(p1?: number, p2?: number): MdGeEdge;
	Wire(): MdGeWire;
}
/**
 * 表示一个坐标系（左手或右手）
 */
/**
 * 表示一个坐标系（左手或右手）
 */
export declare class MdGeCSYS extends Mx3dBaseObject {
	constructor(p1?: MdGePoint | object, p2?: MdGeDir, p3?: MdGeDir);
	XReverse(): void;
	YReverse(): void;
	ZReverse(): void;
	SetZAxis(z_axis: MdGeAxis): void;
	SetZDirection(z_dir: MdGeDir): void;
	SetOrigin(p1: MdGePoint | number, p2?: number, p3?: number): void;
	SetXDirection(x_dir: MdGeDir): void;
	SetYDirection(y_dir: MdGeDir): void;
	Angle(other: MdGeCSYS): number;
	ZAxis(): MdGeAxis;
	CSYSR(): MdGeCSYSR;
	ZDirection(): MdGeDir;
	Origin(): MdGePoint;
	XDirection(): MdGeDir;
	YDirection(): MdGeDir;
	Direct(): boolean;
	IsCoplanarWithCSYS(other: MdGeCSYS, linearTolerance: number, angularTolerance: number): boolean;
	IsCoplanarWithAxis(axis: MdGeAxis, linearTolerance: number, angularTolerance: number): boolean;
	MirrorByPoint(point: MdGePoint): void;
	MirroredByPoint(point: MdGePoint): MdGeCSYS;
	MirrorByAxis(axis: MdGeAxis): void;
	MirroredByAxis(axis: MdGeAxis): MdGeCSYS;
	MirrorByCSYSR(csysr: MdGeCSYSR): void;
	MirroredByCSYSR(csysr: MdGeCSYSR): MdGeCSYS;
	Rotate(axis: MdGeAxis, ang: number): void;
	Rotated(axis: MdGeAxis, ang: number): MdGeCSYS;
	Scale(point: MdGePoint, s: number): void;
	Scaled(point: MdGePoint, s: number): MdGeCSYS;
	Transform(t: MdGeTrsf): void;
	Transformed(t: MdGeTrsf): MdGeCSYS;
	TranslateByVec(vec: MdGeVec): void;
	TranslatedByVec(vec: MdGeVec): MdGeCSYS;
	TranslateBy2Points(point1: MdGePoint, point2: MdGePoint): void;
	TranslatedBy2Points(point1: MdGePoint, point2: MdGePoint): MdGeCSYS;
}
/**
 * 表示一个圆锥
 */
/**
 * 表示一个圆锥
 */
export declare class MdGeCone extends Mx3dBaseObject {
	constructor(p1?: MdGeCSYS | object, p2?: number, p3?: number);
	SetAxis(theA1: MdGeAxis): void;
	SetLocation(theLoc: MdGePoint): void;
	SetPosition(theA3: MdGeCSYS): void;
	SetRadius(theR: number): void;
	SetSemiAngle(theAng: number): void;
	Apex(): MdGePoint;
	UReverse(): void;
	VReverse(): void;
	Direct(): boolean;
	Axis(): MdGeAxis;
	Location(): MdGePoint;
	Position(): MdGeCSYS;
	RefRadius(): number;
	SemiAngle(): number;
	XAxis(): MdGeAxis;
	YAxis(): MdGeAxis;
	MirrorByPoint(theP: MdGePoint): void;
	MirroredByPoint(theP: MdGePoint): MdGeCone;
	MirrorByAxis(theA1: MdGeAxis): void;
	MirroredByAxis(theA1: MdGeAxis): MdGeCone;
	MirrorByCSYSR(theA2: MdGeCSYSR): void;
	MirroredByCSYSR(theA2: MdGeCSYSR): MdGeCone;
	Rotate(theA1: MdGeAxis, theAng: number): void;
	Rotated(theA1: MdGeAxis, theAng: number): MdGeCone;
	Scale(theP: MdGePoint, theS: number): void;
	Scaled(theP: MdGePoint, theS: number): MdGeCone;
	Transform(theT: MdGeTrsf): void;
	Transformed(theT: MdGeTrsf): MdGeCone;
	TranslateByVec(theV: MdGeVec): void;
	TranslatedByVec(theV: MdGeVec): MdGeCone;
	TranslateBy2Points(theP1: MdGePoint, theP2: MdGePoint): void;
	TranslatedBy2Points(theP1: MdGePoint, theP2: MdGePoint): MdGeCone;
	Shape(H: number, Angle?: number): MdGeShape;
	Face(p1?: number | MdGeWire, p2?: number | boolean, p3?: number, p4?: number): MdGeFace;
}
/**
 * 表示一个圆柱
 */
/**
 * 表示一个圆柱。
 */
export declare class MdGeCylinder extends Mx3dBaseObject {
	constructor(p1?: MdGeCSYS | object, p2?: number);
	SetAxis(theA1: MdGeAxis): void;
	SetLocation(theLoc: MdGePoint): void;
	SetPosition(theA3: MdGeCSYS): void;
	SetRadius(theR: number): void;
	UReverse(): void;
	VReverse(): void;
	Direct(): boolean;
	Axis(): MdGeAxis;
	Location(): MdGePoint;
	Position(): MdGeCSYS;
	Radius(): number;
	XAxis(): MdGeAxis;
	YAxis(): MdGeAxis;
	MirrorByPoint(theP: MdGePoint): void;
	MirroredByPoint(theP: MdGePoint): MdGeCylinder;
	MirrorByAxis(theA1: MdGeAxis): void;
	MirroredByAxis(theA1: MdGeAxis): MdGeCylinder;
	MirrorByCSYSR(theA2: MdGeCSYSR): void;
	MirroredByCSYSR(theA2: MdGeCSYSR): MdGeCylinder;
	Rotate(theA1: MdGeAxis, theAng: number): void;
	Rotated(theA1: MdGeAxis, theAng: number): MdGeCylinder;
	Scale(theP: MdGePoint, theS: number): void;
	Scaled(theP: MdGePoint, theS: number): MdGeCylinder;
	Transform(theT: MdGeTrsf): void;
	Transformed(theT: MdGeTrsf): MdGeCylinder;
	TranslateByVec(theV: MdGeVec): void;
	TranslatedByVec(theV: MdGeVec): MdGeCylinder;
	TranslateBy2Points(theP1: MdGePoint, theP2: MdGePoint): void;
	TranslatedBy2Points(theP1: MdGePoint, theP2: MdGePoint): MdGeCylinder;
	Shape(H: number, Angle?: number): MdGeShape;
	Face(p1?: MdGeWire | number, p2?: boolean | number, p3?: number, p4?: number): MdGeFace;
	Shape3d(H: number, Angle?: number): Mx3dShapeObject;
}
/**
 * 表示一个平面
 */
/**
 * 表示一个平面
 */
export declare class MdGePlane extends Mx3dBaseObject {
	constructor(p1?: MdGeCSYS | MdGePoint | number | object, p2?: MdGeDir | number, p3?: number, p4?: number);
	SetAxis(theA1: MdGeAxis): void;
	SetLocation(theLoc: MdGePoint): void;
	SetPosition(theA3: MdGeCSYS): void;
	UReverse(): void;
	VReverse(): void;
	Direct(): boolean;
	Axis(): MdGeAxis;
	Location(): MdGePoint;
	Position(): MdGeCSYS;
	DistanceToPoint(theP: MdGePoint): number;
	DistanceToPlane(theOther: MdGePlane): number;
	SquareDistanceToPoint(theP: MdGePoint): number;
	SquareDistanceToPlane(theOther: MdGePlane): number;
	XAxis(): MdGeAxis;
	YAxis(): MdGeAxis;
	Contains(theP: MdGePoint, theLinearTolerance: number): boolean;
	MirrorByPoint(theP: MdGePoint): void;
	MirroredByPoint(theP: MdGePoint): MdGePlane;
	MirrorByAxis(theA1: MdGeAxis): void;
	MirroredByAxis(theA1: MdGeAxis): MdGePlane;
	MirrorByCSYSR(theA2: MdGeCSYSR): void;
	MirroredByCSYSR(theA2: MdGeCSYSR): MdGePlane;
	Rotate(theA1: MdGeAxis, theAng: number): void;
	Rotated(theA1: MdGeAxis, theAng: number): MdGePlane;
	Scale(theP: MdGePoint, theS: number): void;
	Scaled(theP: MdGePoint, theS: number): MdGePlane;
	Transform(theT: MdGeTrsf): void;
	Transformed(theT: MdGeTrsf): MdGePlane;
	TranslateByVec(theV: MdGeVec): void;
	TranslatedByVec(theV: MdGeVec): MdGePlane;
	TranslateBy2Points(theP1: MdGePoint, theP2: MdGePoint): void;
	TranslatedBy2Points(theP1: MdGePoint, theP2: MdGePoint): MdGePlane;
	Face(p1?: MdGeWire | number, p2?: boolean | number, p3?: number, p4?: number): MdGeFace;
}
/**
 * 表示直径标注
 */
/**
 * 表示直径标注
 */
export declare class MdGeDiameterDim extends Mx3dBaseObject {
	constructor(p1?: MdGeCircle | object, p2?: MdGePlane);
	Circle(): MdGeCircle;
	AnchorPoint(): MdGePoint;
	Shape(): MdGeShape;
	SetMeasuredGeometry(theCircle: MdGeCircle): void;
	SetTextPosition(theTextPos: MdGePoint): void;
	GetTextPosition(): MdGePoint;
	SetDisplayUnits(theUnits: string): void;
	SetModelUnits(theUnits: string): void;
	GetValue(): number;
	SetComputedValue(): void;
	SetCustomValue(theValue: number): void;
	GetPlane(): MdGePlane;
	GetGeometryType(): number;
	SetCustomPlane(thePlane: MdGePlane): void;
	UnsetCustomPlane(): void;
	IsTextPositionCustom(): boolean;
	DimensionAspect(): MdGeDimAspect;
	SetDimensionAspect(theDimensionAspect: MdGeDimAspect): void;
	KindOfDimension(): MdGe.MxKindOfDimension;
	AcceptDisplayMode(theMode: number): boolean;
	UnsetFixedTextPosition(): void;
	SelToleranceForText2d(): number;
	SetSelToleranceForText2d(theTol: number): void;
	GetFlyout(): number;
	SetFlyout(theFlyout: number): void;
	IsValid(): boolean;
	Display(): void;
}
/**
 * 表示一个椭圆
 */
/**
 * 表示一个椭圆
 */
export declare class MdGeEllipse extends Mx3dBaseObject {
	constructor(p1?: MdGeCSYSR | object, p2?: number, p3?: number);
	SetAxis(theA1: MdGeAxis): void;
	SetLocation(theP: MdGePoint): void;
	SetMajorRadius(theMajorRadius: number): void;
	SetMinorRadius(theMinorRadius: number): void;
	SetPosition(theA2: MdGeCSYSR): void;
	Area(): number;
	Axis(): MdGeAxis;
	Directrix1(): MdGeAxis;
	Directrix2(): MdGeAxis;
	Eccentricity(): number;
	Focal(): number;
	Focus1(): MdGePoint;
	Focus2(): MdGePoint;
	Location(): MdGePoint;
	MajorRadius(): number;
	MinorRadius(): number;
	Parameter(): number;
	Position(): MdGeCSYSR;
	XAxis(): MdGeAxis;
	YAxis(): MdGeAxis;
	MirrorByPoint(theP: MdGePoint): void;
	MirroredByPoint(theP: MdGePoint): MdGeEllipse;
	MirrorByAxis(theA1: MdGeAxis): void;
	MirroredByAxis(theA1: MdGeAxis): MdGeEllipse;
	MirrorByCSYSR(theA2: MdGeCSYSR): void;
	MirroredByCSYSR(theA2: MdGeCSYSR): MdGeEllipse;
	Rotate(theA1: MdGeAxis, theAng: number): void;
	Rotated(theA1: MdGeAxis, theAng: number): MdGeEllipse;
	Scale(theP: MdGePoint, theS: number): void;
	Scaled(theP: MdGePoint, theS: number): MdGeEllipse;
	Transform(theT: MdGeTrsf): void;
	Transformed(theT: MdGeTrsf): MdGeEllipse;
	Shape(): MdGeShape;
	Wire(): MdGeWire;
	Edge(p1?: number, p2?: number): MdGeEdge;
}
/**
 * 表示拓扑元素遍历
 */
/**
 * 表示拓扑元素遍历
 */
export declare class MdGeExplorer extends Mx3dBaseObject {
	constructor(p1?: MdGeShape | object, p2?: MdGe.MxShapeEnum, p3?: MdGe.MxShapeEnum);
	Init(S: MdGeShape, ToFind: MdGe.MxShapeEnum, ToAvoid?: MdGe.MxShapeEnum): void;
	More(): boolean;
	Next(): void;
	Value(): MdGeShape;
	Current(): MdGeShape;
	ReInit(): void;
	ExploredShape(): MdGeShape;
	Depth(): number;
	Clear(): void;
}
/**
 * 表示倒圆角
 */
/**
 * 表示倒圆角
 */
export declare class MdGeFillet extends Mx3dBaseObject {
	constructor(p1?: MdGeShape | object, p2?: MdGe.MxCF3dFilletShapeEnum);
	SetParams(Tang: number, Tesp: number, T2d: number, TApp3d: number, TolApp2d: number, Fleche: number): void;
	Add(p1: MdGeEdge | number, p2?: MdGeEdge | number, p3?: MdGeEdge): void;
	SetRadius(p1: number, p2: number, p3: number, p4?: number): void;
	ResetContour(IC: number): void;
	IsConstant(IC: number, E?: MdGeEdge): boolean;
	Radius(IC: number, E?: MdGeEdge): number;
	SetRadiusForEdge(Radius: number, IC: number, E: MdGeEdge): void;
	SetRadiusForVertex(Radius: number, IC: number, V: MdGeVertex): void;
	SetFilletShape(FShape: MdGe.MxCF3dFilletShapeEnum): void;
	GetFilletShape(): MdGe.MxCF3dFilletShapeEnum;
	NbContours(): number;
	Contour(E: MdGeEdge): number;
	NbEdges(I: number): number;
	Edge(I: number, J: number): MdGeEdge;
	Remove(E: MdGeEdge): void;
	Length(IC: number): number;
	FirstVertex(IC: number): MdGeVertex;
	LastVertex(IC: number): MdGeVertex;
	Abscissa(IC: number, V: MdGeVertex): number;
	RelativeAbscissa(IC: number, V: MdGeVertex): number;
	ClosedAndTangent(IC: number): boolean;
	Closed(IC: number): boolean;
	Reset(): void;
	NbSurfaces(): number;
	Simulate(IC: number): void;
	NbSurf(IC: number): number;
	NbFaultyContours(): number;
	FaultyContour(I: number): number;
	NbComputedSurfaces(IC: number): number;
	NbFaultyVertices(): number;
	FaultyVertex(IV: number): MdGeVertex;
	HasResult(): boolean;
	BadShape(): MdGeShape;
	Shape(): MdGeShape;
}
/**
 * 表示双曲线
 */
/**
 * 表示双曲线。
 */
export declare class MdGeHypr extends Mx3dBaseObject {
	constructor(p1?: MdGeCSYSR | object, p2?: number, p3?: number);
	SetAxis(theA1: MdGeAxis): void;
	SetLocation(theP: MdGePoint): void;
	SetMajorRadius(theMajorRadius: number): void;
	SetMinorRadius(theMinorRadius: number): void;
	SetPosition(theA2: MdGeCSYSR): void;
	Asymptote1(): MdGeAxis;
	Asymptote2(): MdGeAxis;
	Axis(): MdGeAxis;
	ConjugateBranch1(): MdGeHypr;
	ConjugateBranch2(): MdGeHypr;
	Directrix1(): MdGeAxis;
	Directrix2(): MdGeAxis;
	Eccentricity(): number;
	Focal(): number;
	Focus1(): MdGePoint;
	Focus2(): MdGePoint;
	Location(): MdGePoint;
	MajorRadius(): number;
	MinorRadius(): number;
	OtherBranch(): MdGeHypr;
	Parameter(): number;
	Position(): MdGeCSYSR;
	XAxis(): MdGeAxis;
	YAxis(): MdGeAxis;
	MirrorByPoint(theP: MdGePoint): void;
	MirroredByPoint(theP: MdGePoint): MdGeHypr;
	MirrorByAxis(theA1: MdGeAxis): void;
	MirroredByAxis(theA1: MdGeAxis): MdGeHypr;
	MirrorByCSYSR(theA2: MdGeCSYSR): void;
	MirroredByCSYSR(theA2: MdGeCSYSR): MdGeHypr;
	Rotate(theA1: MdGeAxis, theAng: number): void;
	Rotated(theA1: MdGeAxis, theAng: number): MdGeHypr;
	Scale(theP: MdGePoint, theS: number): void;
	Scaled(theP: MdGePoint, theS: number): MdGeHypr;
	Transform(theT: MdGeTrsf): void;
	Transformed(theT: MdGeTrsf): MdGeHypr;
	TranslateByVec(theV: MdGeVec): void;
	TranslatedByVec(theV: MdGeVec): MdGeHypr;
	TranslateBy2Points(theP1: MdGePoint, theP2: MdGePoint): void;
	TranslatedBy2Points(theP1: MdGePoint, theP2: MdGePoint): MdGeHypr;
	Shape(): MdGeShape;
	Wire(): MdGeWire;
	Edge(p1?: number, p2?: number): MdGeEdge;
}
/**
 * 表示一个Box
 */
/**
 * 表示一个Box
 */
export declare class MdGeBox extends Mx3dBaseObject {
	constructor(p1?: MdGePoint | number | MdGeCSYSR | object, p2?: MdGePoint | number, p3?: number, p4?: number);
	Init(p1: MdGePoint | number | MdGeCSYSR, p2: MdGePoint | number, p3?: number, p4?: number): void;
	Shape(): MdGeShape;
	Shell(): MdGeShell;
	Solid(): MdGeSolid;
	BottomFace(): MdGeFace;
	BackFace(): MdGeFace;
	FrontFace(): MdGeFace;
	LeftFace(): MdGeFace;
	RightFace(): MdGeFace;
	TopFace(): MdGeFace;
}
/**
 * 表示B样条曲线
 */
/**
 * 表示B样条曲线
 */
export declare class MdGeBSplineCurve extends Mx3dBaseObject {
	constructor(p1?: MdGeArray1OfPnt | object, p2?: MdGeArray1OfReal, p3?: MdGeArray1OfInteger, p4?: number, p5?: boolean);
	IncreaseDegree(Degree: number): void;
	IncreaseMultiplicity(p1: number, p2: number, p3?: number): void;
	IncrementMultiplicity(I1: number, I2: number, M: number): void;
	InsertKnot(U: number, M?: number, ParametricTolerance?: number, Add?: boolean): void;
	InsertKnots(Knots: MdGeArray1OfReal, Mults: MdGeArray1OfInteger, ParametricTolerance?: number, Add?: boolean): void;
	RemoveKnot(Index: number, M: number, Tolerance: number): boolean;
	Reverse(): void;
	ReversedParameter(U: number): number;
	SetKnot(Index: number, K: number, M?: number): void;
	SetKnots(K: MdGeArray1OfReal): void;
	SetPeriodic(): void;
	SetOrigin(p1: number, p2?: number): void;
	SetNotPeriodic(): void;
	SetPole(Index: number, P: MdGePoint, Weight?: number): void;
	SetWeight(Index: number, Weight: number): void;
	IsCN(N: number): boolean;
	IsG1(theTf: number, theTl: number, theAngTol: number): boolean;
	IsClosed(): boolean;
	IsPeriodic(): boolean;
	IsRational(): boolean;
	Continuity(): MdGe.MxGAShapeEnum;
	Degree(): number;
	DN(U: number, N: number): MdGeVec;
	LocalValue(U: number, FromK1: number, ToK2: number): MdGePoint;
	LocalDN(U: number, FromK1: number, ToK2: number, N: number): MdGeVec;
	EndPoint(): MdGePoint;
	FirstUKnotIndex(): number;
	FirstParameter(): number;
	Knot(Index: number): number;
	Knots(): MdGeArray1OfReal;
	KnotSequence(): MdGeArray1OfReal;
	LastUKnotIndex(): number;
	LastParameter(): number;
	Multiplicity(Index: number): number;
	Multiplicities(): MdGeArray1OfInteger;
	NbKnots(): number;
	NbPoles(): number;
	Pole(Index: number): MdGePoint;
	Poles(): MdGeArray1OfPnt;
	StartPoint(): MdGePoint;
	Weight(Index: number): number;
	Weights(): MdGeArray1OfReal;
	Transform(T: MdGeTrsf): void;
	Shape(): MdGeShape;
	Edge(): MdGeEdge;
	Wire(): MdGeWire;
}
/**
 * 表示B样条曲面
 */
/**
 * 表示B样条曲面
 */
export declare class MdGeBSplineSurface extends Mx3dBaseObject {
	constructor(p1?: MdGeArray2OfPnt | object, p2?: MdGeArray1OfReal, p3?: MdGeArray1OfReal, p4?: MdGeArray1OfInteger, p5?: MdGeArray1OfInteger, p6?: number, p7?: number, p8?: boolean, p9?: boolean);
	ExchangeUV(): void;
	SetUPeriodic(): void;
	SetVPeriodic(): void;
	SetUOrigin(Index: number): void;
	SetVOrigin(Index: number): void;
	SetVNotPeriodic(): void;
	UReverse(): void;
	VReverse(): void;
	UReversedParameter(U: number): number;
	VReversedParameter(V: number): number;
	IncreaseDegree(UDegree: number, VDegree: number): void;
	InsertUKnots(Knots: MdGeArray1OfReal, Mults: MdGeArray1OfInteger, ParametricTolerance?: number, Add?: boolean): void;
	InsertVKnots(Knots: MdGeArray1OfReal, Mults: MdGeArray1OfInteger, ParametricTolerance?: number, Add?: boolean): void;
	RemoveUKnot(Index: number, M: number, Tolerance: number): boolean;
	RemoveVKnot(Index: number, M: number, Tolerance: number): boolean;
	IncreaseUMultiplicity(p1: number, p2: number, p3?: number): void;
	IncreaseVMultiplicity(p1: number, p2: number, p3?: number): void;
	IncrementUMultiplicity(FromI1: number, ToI2: number, Step: number): void;
	IncrementVMultiplicity(FromI1: number, ToI2: number, Step: number): void;
	InsertUKnot(U: number, M: number, ParametricTolerance: number, Add?: boolean): void;
	InsertVKnot(V: number, M: number, ParametricTolerance: number, Add?: boolean): void;
	SetUKnot(UIndex: number, K: number, M?: number): void;
	SetVKnot(VIndex: number, K: number, M?: number): void;
	SetUKnots(UK: MdGeArray1OfReal): void;
	SetVKnots(VK: MdGeArray1OfReal): void;
	SetPole(UIndex: number, VIndex: number, P: MdGePoint, Weight?: number): void;
	SetPoleCol(VIndex: number, CPoles: MdGeArray1OfPnt, CPoleWeights?: MdGeArray1OfReal): void;
	SetPoleRow(UIndex: number, CPoles: MdGeArray1OfPnt, CPoleWeights?: MdGeArray1OfReal): void;
	SetWeight(UIndex: number, VIndex: number, Weight: number): void;
	SetWeightCol(VIndex: number, CPoleWeights: MdGeArray1OfReal): void;
	SetWeightRow(UIndex: number, CPoleWeights: MdGeArray1OfReal): void;
	IsUClosed(): boolean;
	IsVClosed(): boolean;
	IsCNu(N: number): boolean;
	IsCNv(N: number): boolean;
	IsUPeriodic(): boolean;
	IsURational(): boolean;
	IsVPeriodic(): boolean;
	IsVRational(): boolean;
	Continuity(): MdGe.MxGAShapeEnum;
	FirstUKnotIndex(): number;
	FirstVKnotIndex(): number;
	LastUKnotIndex(): number;
	LastVKnotIndex(): number;
	NbUKnots(): number;
	NbUPoles(): number;
	NbVKnots(): number;
	NbVPoles(): number;
	Pole(UIndex: number, VIndex: number): MdGePoint;
	Poles(): MdGeArray2OfPnt;
	UDegree(): number;
	UKnot(UIndex: number): number;
	UKnots(): MdGeArray1OfReal;
	UKnotSequence(): MdGeArray1OfReal;
	UMultiplicity(UIndex: number): number;
	UMultiplicities(): MdGeArray1OfInteger;
	VDegree(): number;
	VKnot(VIndex: number): number;
	VKnots(): MdGeArray1OfReal;
	VKnotSequence(): MdGeArray1OfReal;
	VMultiplicity(VIndex: number): number;
	VMultiplicities(): MdGeArray1OfInteger;
	Weight(UIndex: number, VIndex: number): number;
	Weights(): MdGeArray2OfReal;
	DN(U: number, V: number, Nu: number, Nv: number): MdGeVec;
	LocalDN(U: number, V: number, FromUK1: number, ToUK2: number, FromVK1: number, ToVK2: number, Nu: number, Nv: number): MdGeVec;
	LocalValue(U: number, V: number, FromUK1: number, ToUK2: number, FromVK1: number, ToVK2: number): MdGePoint;
	Transform(T: MdGeTrsf): void;
	static MaxDegree(): number;
	Shape(): MdGeShape;
	Face(): MdGeFace;
}
/**
 * 表示插值B样条曲线
 */
/**
 * 表示插值B样条曲线
 */
export declare class MdGeInterpolateBSpl extends Mx3dBaseObject {
	constructor(p1?: MdGeArray1OfPnt | object, p2?: boolean | MdGeArray1OfReal, p3?: number | boolean, p4?: number);
	Load(InitialTangent: MdGeVec, FinalTangent: MdGeVec, Scale?: boolean): void;
	Perform(): void;
	Curve(): MdGeBSplineCurve;
	IsDone(): boolean;
}
/**
 * 表示长度标注
 */
/**
 * 表示长度标注
 */
export declare class MdGeLengthDim extends Mx3dBaseObject {
	constructor(p1?: MdGeEdge | MdGePoint | object, p2?: MdGePlane | MdGePoint, p3?: MdGePlane);
	FirstPoint(): MdGePoint;
	SecondPoint(): MdGePoint;
	FirstShape(): MdGeShape;
	SecondShape(): MdGeShape;
	SetMeasuredGeometry(theFirstPoint: MdGePoint, theSecondPoint: MdGePoint, thePlane: MdGePlane): void;
	SetMeasuredShapes(theFirstShape: MdGeShape, theSecondShape: MdGeShape): void;
	SetTextPosition(theTextPos: MdGePoint): void;
	GetTextPosition(): MdGePoint;
	SetDirection(theDirection: MdGeDir, theUseDirection?: boolean): void;
	GetValue(): number;
	SetComputedValue(): void;
	SetCustomValue(theValue: number): void;
	GetPlane(): MdGePlane;
	GetGeometryType(): number;
	SetCustomPlane(thePlane: MdGePlane): void;
	UnsetCustomPlane(): void;
	IsTextPositionCustom(): boolean;
	DimensionAspect(): MdGeDimAspect;
	SetDimensionAspect(theDimensionAspect: MdGeDimAspect): void;
	KindOfDimension(): MdGe.MxKindOfDimension;
	AcceptDisplayMode(theMode: number): boolean;
	UnsetFixedTextPosition(): void;
	SelToleranceForText2d(): number;
	SetSelToleranceForText2d(theTol: number): void;
	GetFlyout(): number;
	SetFlyout(theFlyout: number): void;
	IsValid(): boolean;
	Display(): void;
}
/**
 * 表示一条直线
 */
/**
 * 表示一条直线
 */
export declare class MdGeLine extends Mx3dBaseObject {
	constructor(p1?: MdGePoint | object, p2?: MdGeDir);
	Reverse(): void;
	Reversed(): MdGeLine;
	SetDirection(theV: MdGeDir): void;
	SetLocation(theP: MdGePoint): void;
	SetPosition(theA1: MdGeAxis): void;
	Direction(): MdGeDir;
	Location(): MdGePoint;
	Position(): MdGeAxis;
	Angle(theOther: MdGeLine): number;
	Contains(theP: MdGePoint, theLinearTolerance: number): boolean;
	DistanceToPoint(theP: MdGePoint): number;
	DistanceToLine(theOther: MdGeLine): number;
	SquareDistanceToPoint(theP: MdGePoint): number;
	SquareDistanceToLine(theOther: MdGeLine): number;
	Normal(theP: MdGePoint): MdGeLine;
	MirrorByPoint(theP: MdGePoint): void;
	MirroredByPoint(theP: MdGePoint): MdGeLine;
	MirrorByAxis(theA1: MdGeAxis): void;
	MirroredByAxis(theA1: MdGeAxis): MdGeLine;
	MirrorByCSYSR(theA2: MdGeCSYSR): void;
	MirroredByCSYSR(theA2: MdGeCSYSR): MdGeLine;
	Rotate(theA1: MdGeAxis, theAng: number): void;
	Rotated(theA1: MdGeAxis, theAng: number): MdGeLine;
	Scale(theP: MdGePoint, theS: number): void;
	Scaled(theP: MdGePoint, theS: number): MdGeLine;
	Transform(theT: MdGeTrsf): void;
	Transformed(theT: MdGeTrsf): MdGeLine;
	TranslateByVec(theV: MdGeVec): void;
	TranslatedByVec(theV: MdGeVec): MdGeLine;
	TranslateBy2Points(theP1: MdGePoint, theP2: MdGePoint): void;
	TranslatedBy2Points(theP1: MdGePoint, theP2: MdGePoint): MdGeLine;
	Shape(): MdGeShape;
	Wire(): MdGeWire;
	Edge(p1?: number, p2?: number): MdGeEdge;
}
/**
 * 表示形状链表迭代器
 */
/**
 * 表示形状链表迭代器
 */
export declare class MdGeListIteratorOfListOfShape extends Mx3dBaseObject {
	constructor(p?: object);
	More(): boolean;
	Next(): void;
	Value(): MdGeShape;
	ChangeValue(theShape: MdGeShape): void;
}
/**
 * 表示形状链表
 */
/**
 * 表示形状链表
 */
export declare class MdGeListOfShape extends Mx3dBaseObject {
	constructor(p?: object);
	begin(): MdGeListIteratorOfListOfShape;
	end(): MdGeListIteratorOfListOfShape;
	Size(): number;
	First(): MdGeShape;
	Last(): MdGeShape;
	AppendShape(theShape: MdGeShape, theIter?: MdGeListIteratorOfListOfShape): void;
	AppendList(theOther: MdGeListOfShape): void;
	PrependShape(theShape: MdGeShape): void;
	PrependList(theOther: MdGeListOfShape): void;
	RemoveFirst(): void;
	InsertBeforeShape(theShape: MdGeShape, theIter: MdGeListIteratorOfListOfShape): void;
	InsertBeforeList(theOther: MdGeListOfShape, theIter: MdGeListIteratorOfListOfShape): void;
	InsertAfterShape(theShape: MdGeShape, theIter: MdGeListIteratorOfListOfShape): void;
	InsertAfterList(theOther: MdGeListOfShape, theIter: MdGeListIteratorOfListOfShape): void;
	Reverse(): void;
}
/**
 * 表示放样
 */
/**
 * 表示放样
 */
export declare class MdGeLoft extends Mx3dBaseObject {
	constructor(p1?: boolean | object, p2?: boolean, p3?: number);
	Init(isSolid?: boolean, ruled?: boolean, pres3d?: number): void;
	AddWire(wire: MdGeWire): void;
	AddVertex(aVertex: MdGeVertex): void;
	CheckCompatibility(check?: boolean): void;
	SetSmoothing(UseSmoothing: boolean): void;
	SetContinuity(C: MdGe.MxGAShapeEnum): void;
	SetMaxDegree(MaxDeg: number): void;
	Continuity(): MdGe.MxGAShapeEnum;
	MaxDegree(): number;
	UseSmoothing(): boolean;
	FirstShape(): MdGeShape;
	LastShape(): MdGeShape;
	GeneratedFace(Edge: MdGeShape): MdGeShape;
	SetMutableInput(theIsMutableInput: boolean): void;
	IsMutableInput(): boolean;
	Shape(): MdGeShape;
}
/**
 * 表示薄实体
 */
/**
 * 表示薄实体
 */
export declare class MdGeMakeThickSolid extends Mx3dBaseObject {
	constructor(p?: object);
	MakeThickSolidBySimple(theS: MdGeShape, theOffsetValue: number): void;
	MakeThickSolidByJoin(S: MdGeShape, ClosingFaces: MdGeListOfShape, Offset: number, Tol: number, Mode?: MdGe.MxOffsetModeEnum, Intersection?: boolean, SelfInter?: boolean, Join?: MdGe.MxGAJoinTypeEnum, RemoveIntEdges?: boolean): void;
	Shape(): MdGeShape;
}
/**
 * 表示抛物线
 */
/**
 * 表示抛物线
 */
export declare class MdGeParab extends Mx3dBaseObject {
	constructor(p1?: MdGeCSYSR | object, p2?: number);
	SetAxis(theA1: MdGeAxis): void;
	SetFocal(theFocal: number): void;
	SetLocation(theP: MdGePoint): void;
	SetPosition(theA2: MdGeCSYSR): void;
	Axis(): MdGeAxis;
	Directrix(): MdGeAxis;
	Focal(): number;
	Focus(): MdGePoint;
	Location(): MdGePoint;
	Parameter(): number;
	Position(): MdGeCSYSR;
	XAxis(): MdGeAxis;
	YAxis(): MdGeAxis;
	MirrorByPoint(theP: MdGePoint): void;
	MirroredByPoint(theP: MdGePoint): MdGeParab;
	MirrorByAxis(theA1: MdGeAxis): void;
	MirroredByAxis(theA1: MdGeAxis): MdGeParab;
	MirrorByCSYSR(theA2: MdGeCSYSR): void;
	MirroredByCSYSR(theA2: MdGeCSYSR): MdGeParab;
	Rotate(theA1: MdGeAxis, theAng: number): void;
	Rotated(theA1: MdGeAxis, theAng: number): MdGeParab;
	Scale(theP: MdGePoint, theS: number): void;
	Scaled(theP: MdGePoint, theS: number): MdGeParab;
	Transform(theT: MdGeTrsf): void;
	Transformed(theT: MdGeTrsf): MdGeParab;
	TranslateByVec(theV: MdGeVec): void;
	TranslatedByVec(theV: MdGeVec): MdGeParab;
	TranslateBy2Points(theP1: MdGePoint, theP2: MdGePoint): void;
	TranslatedBy2Points(theP1: MdGePoint, theP2: MdGePoint): MdGeParab;
	Shape(): MdGeShape;
	Wire(): MdGeWire;
	Edge(p1?: number, p2?: number): MdGeEdge;
}
/**
 * 表示管道
 */
/**
 * 表示管道
 */
export declare class MdGePipe extends Mx3dBaseObject {
	constructor(p1?: MdGeWire | object, p2?: MdGeShape, p3?: MdGe.MxGFTrihedron, p4?: boolean);
	FirstShape(): MdGeShape;
	LastShape(): MdGeShape;
	Generated(SSpine: MdGeShape, SProfile: MdGeShape): MdGeShape;
	ErrorOnSurface(): number;
	Shape(): MdGeShape;
}
/**
 * 表示拟合点B样条曲线
 */
/**
 * 表示拟合B样条曲线
 */
export declare class MdGePointsToBSpl extends Mx3dBaseObject {
	constructor(p1?: MdGeArray1OfPnt | object, p2?: number, p3?: number, p4?: MdGe.MxGAShapeEnum, p5?: number);
	Init(Points: MdGeArray1OfPnt, Parameters: MdGeArray1OfReal, DegMin?: number, DegMax?: number, Continuity?: MdGe.MxGAShapeEnum, Tol3D?: number): void;
	Curve(): MdGeBSplineCurve;
	IsDone(): boolean;
}
/**
 * 表示拟合B样条曲面
 */
/**
 * 表示拟合B样条曲面
 */
export declare class MdGePointsToBSplSurface extends Mx3dBaseObject {
	constructor(p1?: MdGeArray2OfPnt, p2?: number, p3?: number, p4?: MdGe.MxGAShapeEnum, p5?: number);
	Init(Points: MdGeArray2OfPnt, DegMin?: number, DegMax?: number, Continuity?: MdGe.MxGAShapeEnum, Tol3D?: number): void;
	Interpolate(p1: MdGeArray2OfPnt | MdGeArray2OfReal, p2?: boolean | number, p3?: number, p4?: number, p5?: number): void;
	IsDone(): boolean;
	Surface(): MdGeBSplineSurface;
}
/**
 * 表示拉伸体
 */
/**
 * 表示拉伸体
 */
export declare class MdGePrism extends Mx3dBaseObject {
	constructor(p1?: MdGeShape | object, p2?: MdGeVec, p3?: boolean, p4?: boolean);
	FirstShape(theShape?: MdGeShape): MdGeShape;
	LastShape(theShape?: MdGeShape): MdGeShape;
	IsDeleted(S: MdGeShape): boolean;
	Shape(): MdGeShape;
}
/**
 * 表示半径标注
 */
/**
 * 表示半径标注
 */
export declare class MdGeRadiusDim extends Mx3dBaseObject {
	constructor(p1?: MdGeCircle | object, p2?: MdGePoint);
	Circle(): MdGeCircle;
	AnchorPoint(): MdGePoint;
	Shape(): MdGeShape;
	SetMeasuredGeometry(theCircle: MdGeCircle, theAnchorPoint?: MdGePoint, theHasAnchor?: boolean): void;
	SetTextPosition(theTextPos: MdGePoint): void;
	GetTextPosition(): MdGePoint;
	GetValue(): number;
	SetComputedValue(): void;
	SetCustomValue(theValue: number): void;
	GetPlane(): MdGePlane;
	GetGeometryType(): number;
	SetCustomPlane(thePlane: MdGePlane): void;
	UnsetCustomPlane(): void;
	IsTextPositionCustom(): boolean;
	DimensionAspect(): MdGeDimAspect;
	SetDimensionAspect(theDimensionAspect: MdGeDimAspect): void;
	KindOfDimension(): MdGe.MxKindOfDimension;
	AcceptDisplayMode(theMode: number): boolean;
	UnsetFixedTextPosition(): void;
	SelToleranceForText2d(): number;
	SetSelToleranceForText2d(theTol: number): void;
	GetFlyout(): number;
	SetFlyout(theFlyout: number): void;
	IsValid(): boolean;
	Display(): void;
}
/**
 * 表示一个矩形
 */
/**
 * 表示一个矩形
 */
export declare class MdGeRect extends Mx3dBaseObject {
	constructor(p1?: MdGeCSYSR | object, p2?: number, p3?: number);
	Position(): MdGeCSYSR;
	SetPosition(thePosition: MdGeCSYSR): void;
	X(): number;
	Y(): number;
	SetX(theX: number): void;
	SetY(theY: number): void;
	Shape(): MdGeShape;
	Face(): MdGeFace;
	Wire(): MdGeWire;
	LeftEdge(): MdGeEdge;
	RightEdge(): MdGeEdge;
	TopEdge(): MdGeEdge;
	BottomEdge(): MdGeEdge;
	Area(): number;
}
/**
 * 表示旋转体
 */
/**
 * 表示旋转体
 */
export declare class MdGeRevol extends Mx3dBaseObject {
	constructor(p1?: MdGeShape | object, p2?: MdGeAxis, p3?: number, p4?: boolean);
	FirstShape(theShape?: MdGeShape): MdGeShape;
	LastShape(theShape?: MdGeShape): MdGeShape;
	IsDeleted(S: MdGeShape): boolean;
	HasDegenerated(): boolean;
	Shape(): MdGeShape;
}
/**
 * 表示一个球体
 */
/**
 * 表示一个球体
 */
export declare class MdGeSphere extends Mx3dBaseObject {
	constructor(p1?: MdGeCSYS | number | object, p2?: number, p3?: number, p4?: number);
	SetLocation(theLoc: MdGePoint): void;
	SetPosition(theA3: MdGeCSYS): void;
	SetRadius(theR: number): void;
	Area(): number;
	UReverse(): void;
	VReverse(): void;
	Direct(): boolean;
	Location(): MdGePoint;
	Position(): MdGeCSYS;
	Radius(): number;
	Volume(): number;
	XAxis(): MdGeAxis;
	YAxis(): MdGeAxis;
	MirrorByPoint(theP: MdGePoint): void;
	MirroredByPoint(theP: MdGePoint): MdGeSphere;
	MirrorByAxis(theA1: MdGeAxis): void;
	MirroredByAxis(theA1: MdGeAxis): MdGeSphere;
	MirrorByCSYSR(theA2: MdGeCSYSR): void;
	MirroredByCSYSR(theA2: MdGeCSYSR): MdGeSphere;
	Rotate(theA1: MdGeAxis, theAng: number): void;
	Rotated(theA1: MdGeAxis, theAng: number): MdGeSphere;
	Scale(theP: MdGePoint, theS: number): void;
	Scaled(theP: MdGePoint, theS: number): MdGeSphere;
	Transform(theT: MdGeTrsf): void;
	Transformed(theT: MdGeTrsf): MdGeSphere;
	TranslateByVec(theV: MdGeVec): void;
	TranslatedByVec(theV: MdGeVec): MdGeSphere;
	TranslateBy2Points(theP1: MdGePoint, theP2: MdGePoint): void;
	TranslatedBy2Points(theP1: MdGePoint, theP2: MdGePoint): MdGeSphere;
	Face(p1?: MdGeWire | number, p2?: boolean | number, p3?: number, p4?: number): MdGeFace;
	Shape(p1?: number, p2?: number, p3?: number): MdGeShape;
}
/**
 * 表示文字
 */
/**
 * 表示文字
 */
export declare class MdGeText extends Mx3dBaseObject {
	constructor(p1?: string | object, p2?: number, p3?: MdGeCSYSR);
	SetText(theText: string): void;
	Position(): MdGePoint;
	SetPosition(thePoint: MdGePoint): void;
	Orientation(): MdGeCSYSR;
	HasPlane(): boolean;
	SetOrientation(theOrientation: MdGeCSYSR): void;
	ResetOrientation(): void;
	HasOwnAnchorPoint(): boolean;
	SetOwnAnchorPoint(theHasOwnAnchor: boolean): void;
	Height(): number;
	SetHeight(theHeight: number): void;
	HorizontalAlignment(): MdGe.MxHorizontalTextAlignment;
	SetHorizontalAlignment(theJustification: MdGe.MxHorizontalTextAlignment): void;
	VerticalAlignment(): MdGe.MxVerticalTextAlignment;
	SetVerticalAlignment(theJustification: MdGe.MxVerticalTextAlignment): void;
	Shape(): MdGeShape;
}
/**
 * 表示文字标签
 */
/**
 * 表示文字标签
 */
export declare class MdGeTextLabel extends Mx3dBaseObject {
	constructor(p1?: string | object, p2?: number, p3?: MdGePoint);
	SetColor(theColor: MdGeColor): void;
	SetColor(theR: number, theG: number, theB: number): void;
	SetText(text: string): void;
	SetPositon(position: MdGePoint): void;
	SetHJustification(theHJust: MdGe.MxHorizontalTextAlignment): void;
	SetVJustification(theVJust: MdGe.MxVerticalTextAlignment): void;
	SetAngle(theAngle: number): void;
	SetZoomable(theIsZoomable: boolean): void;
	SetHeight(height: number): void;
	SetFontAspect(theFontAspect: MdGe.MxFontAspect): void;
	SetFont(theFont: string): void;
	SetOrientation3D(theOrientation: MdGeCSYSR): void;
	UnsetOrientation3D(): void;
	Position(): MdGePoint;
	FontAspect(): MdGe.MxFontAspect;
	Orientation3D(): MdGeCSYSR;
	HasOrientation3D(): boolean;
	SetFlipping(theIsFlipping: boolean): void;
	HasFlipping(): boolean;
	HasOwnAnchorPoint(): boolean;
	SetOwnAnchorPoint(theOwnAnchorPoint: boolean): void;
	SetDisplayType(theDisplayType: MdGe.MxTypeOfDisplayText): void;
	SetColorSubTitle(theR: number, theG: number, theB: number): void;
	Display(): void;
}
/**
 * 拓扑转换类
 */
/**
 * 拓扑转换类
 */
export declare class MdGeTopo {
	protected imp: any;
	constructor();
	Vertex(S: MdGeShape): MdGeVertex;
	Edge(S: MdGeShape): MdGeEdge;
	Wire(S: MdGeShape): MdGeWire;
	Face(S: MdGeShape): MdGeFace;
	Shell(S: MdGeShape): MdGeShell;
	Solid(S: MdGeShape): MdGeSolid;
	CompSolid(S: MdGeShape): MdGeCompSolid;
	Compound(S: MdGeShape): MdGeCompound;
	DestroyObject(pObj: object): void;
	SetRegisterFuncPtr(jsFunPtr: number): void;
}
/**
 * 表示圆环
 */
/**
 * 表示圆环
 */
export declare class MdGeTorus extends Mx3dBaseObject {
	constructor(p1?: MdGeCSYS | object, p2?: number, p3?: number);
	SetAxis(theA1: MdGeAxis): void;
	SetLocation(theLoc: MdGePoint): void;
	SetMajorRadius(theMajorRadius: number): void;
	SetMinorRadius(theMinorRadius: number): void;
	SetPosition(theA3: MdGeCSYS): void;
	Area(): number;
	UReverse(): void;
	VReverse(): void;
	Direct(): boolean;
	Axis(): MdGeAxis;
	Location(): MdGePoint;
	Position(): MdGeCSYS;
	MajorRadius(): number;
	MinorRadius(): number;
	Volume(): number;
	XAxis(): MdGeAxis;
	YAxis(): MdGeAxis;
	MirrorByPoint(theP: MdGePoint): void;
	MirroredByPoint(theP: MdGePoint): MdGeTorus;
	MirrorByAxis(theA1: MdGeAxis): void;
	MirroredByAxis(theA1: MdGeAxis): MdGeTorus;
	MirrorByCSYSR(theA2: MdGeCSYSR): void;
	MirroredByCSYSR(theA2: MdGeCSYSR): MdGeTorus;
	Rotate(theA1: MdGeAxis, theAng: number): void;
	Rotated(theA1: MdGeAxis, theAng: number): MdGeTorus;
	Scale(theP: MdGePoint, theS: number): void;
	Scaled(theP: MdGePoint, theS: number): MdGeTorus;
	Transform(theT: MdGeTrsf): void;
	Transformed(theT: MdGeTrsf): MdGeTorus;
	TranslateByVec(theV: MdGeVec): void;
	TranslatedByVec(theV: MdGeVec): MdGeTorus;
	TranslateBy2Points(theP1: MdGePoint, theP2: MdGePoint): void;
	TranslatedBy2Points(theP1: MdGePoint, theP2: MdGePoint): MdGeTorus;
	Face(p1?: MdGeWire | number, p2?: boolean | number, p3?: number, p4?: number): MdGeFace;
	Shape(p1?: number, p2?: number, p3?: number): MdGeShape;
}
/**
 * 形状变换类
 */
/**
 * 形状变换类
 */
export declare class MdGeTransform extends Mx3dBaseObject {
	constructor(p1?: MdGeTrsf | MdGeShape | object, p2?: MdGeTrsf, p3?: boolean, p4?: boolean);
	Perform(theShape: MdGeShape, theCopyGeom?: boolean, theCopyMesh?: boolean): void;
	ModifiedShape(S: MdGeShape): MdGeShape;
	Shape(): MdGeShape;
}
/**
 * 表示一个楔形
 */
/**
 * 表示一个楔形
 */
export declare class MdGeWedge extends Mx3dBaseObject {
	constructor(p1?: number | MdGeCSYSR | object, p2?: number, p3?: number, p4?: number, p5?: number, p6?: number, p7?: number, p8?: number);
	Shell(): MdGeShell;
	Solid(): MdGeSolid;
	Shape(): MdGeShape;
}
/**
 * 表示几何曲面句柄
 */
/**
 * 表示几何曲面句柄
 */
export declare class MdGeHGeomSurface extends Mx3dBaseObject {
	constructor(p?: object);
	DynamicType(): string;
}
/**
 * 表示几何平面句柄
 */
/**
 * 表示几何平面句柄
 */
export declare class MdGeHGeomPlane extends Mx3dBaseObject {
	constructor(p?: object);
	DownCast(hGeomSurface: MdGeHGeomSurface): MdGeHGeomPlane;
	Axis(): MdGeAxis;
	Location(): MdGePoint;
	Position(): MdGeCSYS;
}
/**
 * 表示BRep工具
 */
/**
 * 表示Brep工具
 */
export declare class MdGeBRep {
	protected imp: any;
	constructor();
	IsClosed(p1: MdGeShape | MdGeEdge, p2?: MdGeFace): boolean | undefined;
	Surface(F: MdGeFace): MdGeHGeomSurface;
	Tolerance(F: MdGeFace): number;
	NaturalRestriction(F: MdGeFace): boolean;
	IsGeometric(F: MdGeFace): boolean;
	SameParameter(E: MdGeEdge): boolean;
	SameRange(E: MdGeEdge): boolean;
	Degenerated(E: MdGeEdge): boolean;
	HasContinuity(E: MdGeEdge, F1?: MdGeFace, F2?: MdGeFace): boolean | undefined;
	Continuity(E: MdGeEdge, F1: MdGeFace, F2: MdGeFace): MdGe.MxGAShapeEnum;
	MaxContinuity(theEdge: MdGeEdge): MdGe.MxGAShapeEnum;
	Pnt(V: MdGeVertex): MdGePoint;
	Parameter(V: MdGeVertex, E: MdGeEdge, F?: MdGeFace): number;
	MaxTolerance(theShape: MdGeShape, theSubShape: MdGe.MxShapeEnum): number;
	openBrepFromUrl(theModelPath: string): MdGeShape;
	openStepFromUrl(theModelPath: string): MdGeShape;
	openStlFromUrl(theModelPath: string): MdGeShape;
	openIgesFromUrl(theModelPath: string): MdGeShape;
	openObjFromUrl(theModelPath: string): MdGeShape;
	openGltfFromUrl(theModelPath: string): MdGeShape;
	openVrmlFromUrl(theModelPath: string): MdGeShape;
	openStepFromUrlByOCAF(theModelPath: string): string;
	openIgesFromUrlByOCAF(theModelPath: string): string;
	openObjFromUrlByOCAF(theModelPath: string): string;
	openStlFromUrlByOCAF(theModelPath: string): string;
	openGltfFromUrlByOCAF(theModelPath: string): string;
	openVrmlFromUrlByOCAF(theModelPath: string): string;
	getLabelAttributes(theEntry: string): string;
	refreshDocTree(): string;
	saveStepFile(fileName: string, theDoc: Mx3dDbDocument): void;
	ptCanvasToView(x: number, y: number): MdGePoint;
	RemoveAllLights(): void;
	AddLight(theLight: MdGeLight): void;
	EnableAllLights(): void;
	DisableAllLights(): void;
	EnableLight(theName: string): boolean;
	DisableLight(theName: string): boolean;
	DeleteAllLights(): void;
	OutputDefinedLights(): void;
	OutputActiveLights(): void;
	SetAllLightsOn(): void;
	SetAllLightsOff(): void;
	SetLightOn(theName: string): boolean;
	SetLightOff(theName: string): boolean;
	SetProjectionType(theProjection: MdGe.MxCameraProjection): void;
	SetProj(theOrientation: MdGe.MxV3dTypeOfOrientation, theIsYup: boolean): void;
	ChangeSelectedColor(color: MdGeColor): void;
	SetColorByEntry(theEntry: string, theColor: MdGeColor): void;
	AddModelTexture(theFileName: string): void;
	RemoveModelTexture(): void;
	ChangeSelectedMaterial(material: MdGeMaterialAspect): void;
	AddClipPlane(pln: MdGePlane): void;
	GetSelectedShapes(): MdGeListOfShape;
	setObjectColor(theEntry: string, theColor: MdGeColor): void;
	moveObjectByTrsf(theEntry: string, theTrsf: MdGeTrsf): void;
	printSelObjInfo(): void;
	drawAisObjChildren(): void;
	setGradientBgColor(theColor1: MdGeColor, theColor2: MdGeColor, theMethod: MdGe.MxGradientFillMethod): void;
	getVertexPosition(theVertex: MdGeVertex): MdGePoint;
	getCircleCenter(theEdge: MdGeEdge): MdGePoint;
	getCircleDiameter(theEdge: MdGeEdge): number;
	getMinDistance(theShape1: MdGeShape, theShape2: MdGeShape): number;
	getAngle(theEdge1: MdGeEdge, theEdge2: MdGeEdge): number;
	getLength(theEdge: MdGeEdge): number;
	getArea(theFace: MdGeFace): number;
	someTests(): void;
	selPoint(): Promise<MdGePoint>;
	selFace(): Promise<[
		face: MdGeFace,
		pt: MdGePoint
	]>;
}
/**
 * 表示颜色
 */
/**
 * 表示颜色
 */
export declare class MdGeColor extends Mx3dBaseObject {
	constructor(p1?: MdGe.MxNameOfColor | number | object, p2?: number, p3?: number, p4?: MdGe.MxTypeOfColor);
	Name(): MdGe.MxNameOfColor;
	SetValues(p1: MdGe.MxNameOfColor | number, p2?: number, p3?: number, p4?: MdGe.MxTypeOfColor): void;
	Red(): number;
	Green(): number;
	Blue(): number;
	Hue(): number;
	Light(): number;
	ChangeIntensity(theDelta: number): void;
	Saturation(): number;
	ChangeContrast(theDelta: number): void;
	IsDifferent(theOther: MdGeColor): boolean;
	IsEqual(theOther: MdGeColor): boolean;
	Distance(theColor: MdGeColor): number;
	SquareDistance(theColor: MdGeColor): number;
	DeltaE2000(theOther: MdGeColor): number;
	StringName(theColor: MdGe.MxNameOfColor): string;
}
/**
 * 表示材质
 */
/**
 * 表示材质
 */
export declare class MdGeMaterialAspect extends Mx3dBaseObject {
	constructor(p?: MdGe.MxNameOfMaterial | object);
	NumberOfMaterials(): number;
	MaterialFromName(theName: string): MdGe.MxNameOfMaterial;
	Name(): MdGe.MxNameOfMaterial;
	RequestedName(): MdGe.MxNameOfMaterial;
	MaterialName(): string;
	SetMaterialName(theName: string): void;
	Reset(): void;
	Color(): MdGeColor;
	SetColor(theColor: MdGeColor): void;
	Transparency(): number;
	Alpha(): number;
	SetTransparency(theValue: number): void;
	SetAlpha(theValue: number): void;
	AmbientColor(): MdGeColor;
	SetAmbientColor(theColor: MdGeColor): void;
	DiffuseColor(): MdGeColor;
	SetDiffuseColor(theColor: MdGeColor): void;
	SpecularColor(): MdGeColor;
	SetSpecularColor(theColor: MdGeColor): void;
	EmissiveColor(): MdGeColor;
	SetEmissiveColor(theColor: MdGeColor): void;
	Shininess(): number;
	SetShininess(theValue: number): void;
	IncreaseShine(theDelta: number): void;
	RefractionIndex(): number;
	SetRefractionIndex(theValue: number): void;
	ReflectionMode(theType: MdGe.MxTypeOfReflection): boolean;
	MaterialType(): MdGe.MxTypeOfMaterial;
	SetMaterialType(theType: MdGe.MxTypeOfMaterial): void;
	IsDifferent(theOther: MdGeMaterialAspect): boolean;
	IsEqual(theOther: MdGeMaterialAspect): boolean;
}
/**
 * 表示形状序列集合
 */
export declare class MdGeSequenceOfShape extends Mx3dBaseObject {
	constructor(p?: object);
	begin(): MdGeSequenceIteratorOfSequenceOfShape;
	end(): MdGeSequenceIteratorOfSequenceOfShape;
	Size(): number;
	Length(): number;
	Lower(): number;
	Upper(): number;
	IsEmpty(): boolean;
	Reverse(): void;
	Exchange(I: number, J: number): void;
	Remove(p1: number, p2?: number): void;
	Append(theShape: MdGeShape): void;
	Prepend(theShape: MdGeShape): void;
	InsertBefore(theIndex: number, theShape: MdGeShape): void;
	InsertAfter(theIndex: number, theShape: MdGeShape): void;
	First(): MdGeShape;
	Last(): MdGeShape;
	Value(theIndex: number): MdGeShape;
	SetValue(theIndex: number, theShape: MdGeShape): void;
}
/**
 * 表示形状序列迭代器
 */
export declare class MdGeSequenceIteratorOfSequenceOfShape extends Mx3dBaseObject {
	constructor(p?: object);
	More(): boolean;
	Next(): void;
	Value(): MdGeShape;
	IsEqual(theOther: MdGeSequenceIteratorOfSequenceOfShape): boolean;
}
/**
 * 表示由Edges链接形成Wires
 */
export declare class MdGeMakeWires extends Mx3dBaseObject {
	constructor(p?: object);
	ConnectEdgesToWires(edges: MdGeSequenceOfShape, toler: number, shared: boolean): MdGeSequenceOfShape;
	ConnectWiresToWires(iwires: MdGeSequenceOfShape, toler: number, shared: boolean): MdGeSequenceOfShape;
}
/**
 * 表示Wire生成Face
 */
export declare class MdGeMakeFace extends Mx3dBaseObject {
	constructor(p?: MdGeWire | object);
	Add(wire: MdGeWire): void;
	Face(): MdGeFace;
}
/**
 * 三点圆弧
 */
export declare class MdGeMakeArcOfCircle extends Mx3dBaseObject {
	constructor(p1: MdGePoint | object, p2?: MdGePoint, p3?: MdGePoint);
	Edge(): MdGeEdge;
}
/**
 * 光照
 */
export declare class MdGeLight extends Mx3dBaseObject {
	constructor(p: MdGe.MxTypeOfLightSource | object);
	CopyFrom(theLight: MdGeLight): void;
	Type(): MdGe.MxTypeOfLightSource;
	Name(): string;
	SetName(theName: string): void;
	Color(): MdGeColor;
	SetColor(theColor: MdGeColor): void;
	IsEnabled(): boolean;
	SetEnabled(theIsOn: boolean): void;
	ToCastShadows(): boolean;
	SetCastShadows(theToCast: boolean): void;
	IsHeadlight(): boolean;
	Headlight(): boolean;
	SetHeadlight(theValue: boolean): void;
	Position(): MdGePoint;
	SetPosition(p1: MdGePoint | number, p2?: number, p3?: number): void;
	ConstAttenuation(): number;
	LinearAttenuation(): number;
	SetAttenuation(theConstAttenuation: number, theLinearAttenuation: number): void;
	Direction(): MdGeDir;
	SetDirection(p1: MdGeDir | number, p2?: number, p3?: number): void;
	DisplayPosition(): MdGePoint;
	SetDisplayPosition(thePosition: MdGePoint): void;
	Angle(): number;
	SetAngle(theAngle: number): void;
	Concentration(): number;
	SetConcentration(theConcentration: number): void;
	Intensity(): number;
	SetIntensity(theValue: number): void;
	Smoothness(): number;
	SetSmoothRadius(theValue: number): void;
	SetSmoothAngle(theValue: number): void;
	HasRange(): boolean;
	Range(): number;
	SetRange(theValue: number): void;
}
export declare class MdGeArrowAspect extends Mx3dBaseObject {
	constructor(p1?: number | object, p2?: number);
	SetAngle(anAngle: number): void;
	Angle(): number;
	SetLength(theLength: number): void;
	Length(): number;
	SetZoomable(theIsZoomable: boolean): void;
	IsZoomable(): boolean;
	SetColor(theColor: MdGeColor): void;
}
export declare class MdGeDimAspect extends Mx3dBaseObject {
	constructor(p?: object);
	LineAspect(): MdGeLineAspect;
	SetLineAspect(theAspect: MdGeLineAspect): void;
	TextAspect(): MdGeTextAspect;
	SetTextAspect(theAspect: MdGeTextAspect): void;
	IsText3d(): boolean;
	MakeText3d(isText3d: boolean): void;
	IsTextShaded(): boolean;
	MakeTextShaded(theIsTextShaded: boolean): void;
	IsArrows3d(): boolean;
	MakeArrows3d(theIsArrows3d: boolean): void;
	IsUnitsDisplayed(): boolean;
	MakeUnitsDisplayed(theIsDisplayed: boolean): void;
	SetArrowOrientation(theArrowOrient: MdGe.MxDimensionArrowOrientation): void;
	ArrowOrientation(): MdGe.MxDimensionArrowOrientation;
	SetTextVerticalPosition(thePosition: MdGe.MxDimensionTextVerticalPosition): void;
	TextVerticalPosition(): MdGe.MxDimensionTextVerticalPosition;
	SetTextHorizontalPosition(thePosition: MdGe.MxDimensionTextHorizontalPosition): void;
	TextHorizontalPosition(): MdGe.MxDimensionTextHorizontalPosition;
	ArrowAspect(): MdGeArrowAspect;
	SetArrowAspect(theAspect: MdGeArrowAspect): void;
	SetCommonColor(theColor: MdGeColor): void;
	SetExtensionSize(theSize: number): void;
	ExtensionSize(): number;
	SetArrowTailSize(theSize: number): void;
	ArrowTailSize(): number;
	SetValueStringFormat(theFormat: string): void;
	ValueStringFormat(): string;
}
export declare class MdGeLineAspect extends Mx3dBaseObject {
	constructor(p1: MdGeColor | object, p2?: MdGe.MxTypeOfLine, p3?: number);
	SetColor(theColor: MdGeColor): void;
	SetTypeOfLine(theType: MdGe.MxTypeOfLine): void;
	SetWidth(theWidth: number): void;
}
export declare class MdGeTextAspect extends Mx3dBaseObject {
	constructor(p?: object);
	SetColor(theColor: MdGeColor): void;
	SetFont(theFont: string): void;
	SetHeight(theHeight: number): void;
	SetAngle(theAngle: number): void;
	Height(): number;
	Angle(): number;
	SetHorizontalJustification(theJustification: MdGe.MxHorizontalTextAlignment): void;
	SetVerticalJustification(theJustification: MdGe.MxVerticalTextAlignment): void;
	SetOrientation(theOrientation: MdGe.MxTextPath): void;
	HorizontalJustification(): MdGe.MxHorizontalTextAlignment;
	VerticalJustification(): MdGe.MxVerticalTextAlignment;
	MxTextPath(): MdGe.MxTextPath;
}
export declare class MdGeApplication extends Mx3dBaseObject {
	constructor(p?: object);
	NbDocuments(): number;
	GetDocument(index: number): MdGeDocument;
	NewDocument(format: string): MdGeDocument;
	InitDocument(aDoc: MdGeDocument): void;
	Close(aDoc: MdGeDocument): void;
}
export declare class MdGeDocument extends Mx3dBaseObject {
	constructor(p: object);
	IsSaved(): boolean;
	IsChanged(): boolean;
	SetSaved(): void;
	SetSavedTime(theTime: number): void;
	GetSavedTime(): number;
	GetName(): string;
	GetPath(): string;
	Main(): MdGeLabel;
	IsEmpty(): boolean;
	IsValid(): boolean;
	SetModified(L: MdGeLabel): void;
	PurgeModified(): void;
	NewCommand(): void;
	HasOpenCommand(): boolean;
	OpenCommand(): void;
	CommitCommand(): boolean;
	AbortCommand(): void;
	GetUndoLimit(): number;
	SetUndoLimit(L: number): void;
	ClearUndos(): void;
	ClearRedos(): void;
	GetAvailableUndos(): number;
	Undo(): boolean;
	GetAvailableRedos(): number;
	Redo(): boolean;
	RemoveFirstUndo(): void;
	InitDeltaCompaction(): boolean;
	PerformDeltaCompaction(): boolean;
	UpdateReferences(aDocEntry: string): void;
	Recompute(): void;
	StorageFormat(): string;
	ChangeStorageFormat(newStorageFormat: string): void;
	SetEmptyLabelsSavingMode(isAllowed: boolean): void;
	EmptyLabelsSavingMode(): boolean;
	SetNestedTransactionMode(isAllowed: boolean): void;
	IsNestedTransactionMode(): boolean;
	SetModificationMode(theTransactionOnly: boolean): void;
	ModificationMode(): boolean;
	BeforeClose(): void;
}
export declare class MdGeDocShapeTool extends Mx3dBaseObject {
	constructor(p: MdGeLabel | object);
	IsTopLevel(L: MdGeLabel): boolean;
	IsFree(L: MdGeLabel): boolean;
	IsShape(L: MdGeLabel): boolean;
	IsSimpleShape(L: MdGeLabel): boolean;
	IsReference(L: MdGeLabel): boolean;
	IsAssembly(L: MdGeLabel): boolean;
	IsComponent(L: MdGeLabel): boolean;
	IsCompound(L: MdGeLabel): boolean;
	IsSubShape(shapeL: MdGeLabel, sub?: MdGeShape): boolean;
	Search(S: MdGeShape, findInstance: boolean, findComponent: boolean, findSubshape: boolean): MdGeLabel;
	FindShape(S: MdGeShape, findInstance: boolean): MdGeLabel;
	GetShape(L: MdGeLabel): MdGeShape;
	NewShape(): MdGeLabel;
	SetShape(L: MdGeLabel, S: MdGeShape): void;
	AddShape(S: MdGeShape, makeAssembly: boolean, makePrepare: boolean): MdGeLabel;
	RemoveShape(L: MdGeLabel, removeCompletely: boolean): boolean;
	Init(): void;
	SetAutoNaming(V: boolean): void;
	AutoNaming(): boolean;
	ComputeShapes(L: MdGeLabel): void;
	ComputeSimpleShapes(): void;
	GetShapes(): MdGeLabelSequence;
	GetFreeShapes(): MdGeLabelSequence;
	GetLocation(L: MdGeLabel): MdGeLocation;
	GetReferredShape(L: MdGeLabel): MdGeLabel;
	NbComponents(L: MdGeLabel, getsubchilds: boolean): number;
	GetComponents(L: MdGeLabel, getsubchilds: boolean): MdGeLabelSequence;
	AddComponent(assembly: MdGeLabel, comp: MdGeLabel, Loc: MdGeLocation): MdGeLabel;
	RemoveComponent(comp: MdGeLabel): void;
	UpdateAssemblies(): void;
	FindSubShape(shapeL: MdGeLabel, sub: MdGeShape): MdGeLabel;
	AddSubShape(shapeL: MdGeLabel, sub: MdGeShape): MdGeLabel;
	FindMainShapeUsingMap(sub: MdGeShape): MdGeLabel;
	FindMainShape(sub: MdGeShape): MdGeLabel;
	GetSubShapes(L: MdGeLabel): MdGeLabelSequence;
	BaseLabel(): MdGeLabel;
	FindComponent(theShape: MdGeShape): MdGeLabelSequence;
	SetLocation(theShapeLabel: MdGeLabel, theLoc: MdGeLocation): MdGeLabel;
	Expand(Shape: MdGeLabel): boolean;
}
export declare class MdGeDocColorTool extends Mx3dBaseObject {
	constructor(p: MdGeLabel | object);
	AutoNaming(): boolean;
	SetAutoNaming(theIsAutoNaming: boolean): void;
	BaseLabel(): MdGeLabel;
	IsColor(lab: MdGeLabel): boolean;
	GetColor(lab: MdGeLabel): MdGeColor;
	GetColorLabel(L: MdGeLabel, type: MdGe.MxDocColorType): MdGeLabel;
	FindColor(col: MdGeColor): MdGeLabel;
	AddColor(col: MdGeColor): MdGeLabel;
	RemoveColor(lab: MdGeLabel): void;
	GetColors(): MdGeLabelSequence;
	SetColor(L: MdGeLabel, colorL: MdGeLabel, type: MdGe.MxDocColorType): void;
	UnSetColor(L: MdGeLabel, type: MdGe.MxDocColorType): void;
	IsSet(L: MdGeLabel, type: MdGe.MxDocColorType): boolean;
	IsVisible(L: MdGeLabel): boolean;
	SetVisibility(shapeLabel: MdGeLabel, isvisible: boolean): void;
	IsColorByLayer(L: MdGeLabel): boolean;
	SetColorByLayer(shapeLabel: MdGeLabel, isColorByLayer: boolean): void;
	ReverseChainsOfTreeNodes(): boolean;
}
export declare class MdGeLabel extends Mx3dBaseObject {
	constructor(p?: object);
	Nullify(): void;
	Tag(): number;
	Father(): MdGeLabel;
	IsNull(): boolean;
	Imported(aStatus: boolean): void;
	IsImported(): boolean;
	IsEqual(aLabel: MdGeLabel): boolean;
	IsDifferent(aLabel: MdGeLabel): boolean;
	IsRoot(): boolean;
	MayBeModified(): boolean;
	AttributesModified(): boolean;
	HasAttribute(): boolean;
	NbAttributes(): number;
	Depth(): number;
	IsDescendant(aLabel: MdGeLabel): boolean;
	Root(): MdGeLabel;
	HasChild(): boolean;
	NbChildren(): number;
	FindChild(aTag: number, create: boolean): MdGeLabel;
	NewChild(): MdGeLabel;
	Transaction(): number;
	HasLowerNode(otherLabel: MdGeLabel): boolean;
	HasGreaterNode(otherLabel: MdGeLabel): boolean;
}
export declare class MdGeLabelSequence extends Mx3dBaseObject {
	constructor(p?: object);
	Size(): number;
	Length(): number;
	Lower(): number;
	Upper(): number;
	IsEmpty(): boolean;
	Reverse(): void;
	Exchange(I: number, J: number): void;
	Remove(theFromIndex: number, theToIndex: number): void;
	Append(theItem: MdGeLabel): void;
	Prepend(theItem: MdGeLabel): void;
	InsertBefore(theIndex: number, theItem: MdGeLabel): void;
	InsertAfter(theIndex: number, theItem: MdGeLabel): number;
	First(): MdGeLabel;
	Last(): MdGeLabel;
	Value(theIndex: number): MdGeLabel;
	SetValue(theIndex: number, theItem: MdGeLabel): void;
}
export declare class MdGeLocation extends Mx3dBaseObject {
	constructor(p?: MdGeTrsf | object);
	IsIdentity(): boolean;
	Identity(): void;
	FirstPower(): number;
	NextLocation(): MdGeLocation;
	Transformation(): MdGeTrsf;
	Inverted(): MdGeLocation;
	Multiplied(Other: MdGeLocation): MdGeLocation;
	Divided(Other: MdGeLocation): MdGeLocation;
	Predivided(Other: MdGeLocation): MdGeLocation;
	Powered(pwr: number): MdGeLocation;
	IsEqual(Other: MdGeLocation): number;
	IsDifferent(Other: MdGeLocation): boolean;
	Clear(): void;
	ScalePrec(): number;
}
export declare class MdGeLabelTree extends Mx3dBaseObject {
	constructor(p?: object);
	nodeSiblingPrevious(id: number): number;
	nodeSiblingNext(id: number): number;
	nodeChildFirst(id: number): number;
	nodeChildLast(id: number): number;
	nodeParent(id: number): number;
	nodeRoot(id: number): number;
	nodeData(id: number): MdGeLabel;
	nodeIsRoot(id: number): boolean;
	nodeIsLeaf(id: number): boolean;
	roots(): MdGeArray1OfInteger;
	clear(): void;
	appendChild(parentId: number, data: MdGeLabel): number;
}
export declare class MdGeDocReader extends Mx3dBaseObject {
	constructor(p: string | object);
	ReadFile(filename: string): boolean;
	ReadFile2(filename: string): boolean;
}
export declare class MdGeDocWriter extends Mx3dBaseObject {
	constructor(p: string | object);
	WriteFile(theDoc: MdGeDocument, fileName: string): boolean;
}
export declare class MdGeAisContext extends Mx3dBaseObject {
	constructor(p?: object);
	DisplayStatus(anIobj: MdGeAisObject): MdGe.MxDisplayStatus;
	IsDisplayed(aniobj: MdGeAisObject, aMode?: number): boolean;
	SetAutoActivateSelection(theIsAuto: boolean): void;
	GetAutoActivateSelection(): boolean;
	Display(theIObj: MdGeAisObject, theToUpdateViewer: boolean): void;
	Display(theIObj: MdGeAisObject, theDispMode: number, theSelectionMode: number, theToUpdateViewer: boolean, theDispStatus: MdGe.MxDisplayStatus): void;
	Load(theObj: MdGeAisObject, theSelectionMode: number): void;
	Erase(theIObj: MdGeAisObject, theToUpdateViewer: boolean): void;
	EraseAll(theToUpdateViewer: boolean): void;
	DisplayAll(theToUpdateViewer: boolean): void;
	EraseSelected(theToUpdateViewer: boolean): void;
	DisplaySelected(theToUpdateViewer: boolean): void;
	ClearPrs(theIObj: MdGeAisObject, theMode: number, theToUpdateViewer: boolean): void;
	Remove(theIObj: MdGeAisObject, theToUpdateViewer: boolean): void;
	RemoveAll(theToUpdateViewer: boolean): void;
	Redisplay(theIObj: MdGeAisObject, theToUpdateViewer: boolean, theAllModes: boolean): void;
	RedisplayType(theTypeOfObject: MdGe.MxKindOfInteractive, theSignature: number, theToUpdateViewer: boolean): void;
	RecomputePrsOnly(theIObj: MdGeAisObject, theToUpdateViewer: boolean, theAllModes: boolean): void;
	RecomputeSelectionOnly(anIObj: MdGeAisObject): void;
	Update(theIObj: MdGeAisObject, theUpdateViewer: boolean): void;
}
export declare class MdGeAisObject extends Mx3dBaseObject {
	constructor(p?: object);
}
export declare class MdGeAisShape extends MdGeAisObject {
	constructor(shap: MdGeShape | object);
	Signature(): number;
	Type(): MdGe.MxKindOfInteractive;
	Shape(): MdGeShape;
	SetShape(theShape: MdGeShape): void;
	SetTypeOfHLR(theTypeOfHLR: MdGe.MxPrs3dTypeOfHLR): void;
	TypeOfHLR(): MdGe.MxPrs3dTypeOfHLR;
	SetColor(theColor: MdGeColor): void;
	UnsetColor(): void;
	SetWidth(aValue: number): void;
	UnsetWidth(): number;
	SetMaterial(aName: MdGeMaterialAspect): void;
	UnsetMaterial(): void;
	SetTransparency(aValue: number): void;
	UnsetTransparency(): void;
	BoundingBox(): MdGeBndBox;
	GetColor(): MdGeColor;
	Material(): MdGe.MxNameOfMaterial;
	Transparency(): number;
}
export declare class MdGeBndBox extends Mx3dBaseObject {
	constructor(theMin?: MdGePoint | object, theMax?: MdGePoint);
	SetWhole(): void;
	SetVoid(): void;
	Set(P: MdGePoint, D: MdGeDir): void;
	Update(aXmin: number, aYmin: number, aZmin: number, aXmax: number, aYmax: number, aZmax: number): void;
	GetGap(): number;
	SetGap(Tol: number): void;
	Enlarge(Tol: number): void;
	CornerMin(): MdGePoint;
	CornerMax(): MdGePoint;
	OpenXmin(): void;
	OpenXmax(): void;
	OpenYmin(): void;
	OpenYmax(): void;
	OpenZmin(): void;
	OpenZmax(): void;
	IsOpen(): boolean;
	IsOpenXmin(): boolean;
	IsOpenXmax(): boolean;
	IsOpenYmin(): boolean;
	IsOpenYmax(): boolean;
	IsOpenZmin(): boolean;
	IsOpenZmax(): boolean;
	IsWhole(): boolean;
	IsVoid(): boolean;
	IsXThin(tol: number): boolean;
	IsYThin(tol: number): boolean;
	IsZThin(tol: number): boolean;
	IsThin(tol: number): boolean;
	Transformed(T: MdGeTrsf): MdGeBndBox;
	AddBndBox(Other: MdGeBndBox): void;
	AddPoint(P: MdGePoint): void;
	AddPointDir(P: MdGePoint, D: MdGeDir): void;
	AddDir(D: MdGeDir): void;
	IsOutPoint(P: MdGePoint): boolean;
	IsOutLine(L: MdGeLine): boolean;
	IsOutPlane(P: MdGePlane): boolean;
	IsOutBndBox(Other: MdGeBndBox, T?: MdGeTrsf): boolean;
	IsOutTBT(T1: MdGeTrsf, Other: MdGeBndBox, T2: MdGeTrsf): boolean;
	IsOutPPD(P1: MdGePoint, P2: MdGePoint, D: MdGeDir): boolean;
	Distance(Other: MdGeBndBox): number;
	SquareExtent(): number;
	FinitePart(): MdGeBndBox;
	HasFinitePart(): boolean;
}
export declare class MdGeAisTexturedShape extends MdGeAisObject {
	constructor(mshap: MdGeShape | object);
	SetTextureFileName(theTextureFileName: string): void;
	TextureMapState(): boolean;
	SetTextureMapOn(): void;
	SetTextureMapOff(): void;
	TextureFile(): string;
	UpdateAttributes(): void;
	SetColor(theColor: MdGeColor): void;
	UnsetColor(): void;
	SetMaterial(theAspect: MdGeMaterialAspect): void;
	UnsetMaterial(): void;
	EnableTextureModulate(): void;
	DisableTextureModulate(): void;
	TextureRepeat(): boolean;
	URepeat(): number;
	VRepeat(): number;
	SetTextureRepeat(theToRepeat: boolean, theURepeat: number, theVRepeat: number): void;
	TextureOrigin(): boolean;
	TextureUOrigin(): number;
	TextureVOrigin(): number;
	SetTextureOrigin(theToSetTextureOrigin: boolean, theUOrigin: number, theVOrigin: number): void;
	TextureScale(): boolean;
	TextureScaleU(): number;
	TextureScaleV(): number;
	SetTextureScale(theToSetTextureScale: boolean, theScaleU: number, theScaleV: number): void;
	IsShowTriangles(): boolean;
	SetShowTriangles(theToShowTriangles: boolean): void;
	TextureModulate(): boolean;
}
export declare class MdGeSpliter extends Mx3dBaseObject {
	constructor(p?: object);
	SetTools(theLS: MdGeShape[]): void;
	SetArguments(theLS: MdGeShape[]): void;
	Build(): void;
	IsDone(): boolean;
	HasWarnings(): boolean;
	Shapes(): MdGeShape[];
}
export declare class Mx3dApplication {
	protected imp: any;
	constructor(p?: object);
	getApp(): Mx3dApplication;
	getDoc(theDocName: string): Mx3dDbDocument;
	newDoc(theDocName: string): Mx3dDbDocument;
}
export declare class Mx3dGeBndBox extends Mx3dGeObject {
	constructor(p1?: Mx3dGePoint | object, p2?: Mx3dGePoint);
}
export declare class Mx3dGeColor extends Mx3dBaseObject {
	constructor(p1?: MdGe.MxNameOfColor | number | object, p2?: number, p3?: number);
}
export declare class Mx3dDbDocument extends Mx3dDbObject {
	constructor(p?: object);
	read(theFilePath: string, theFormat: MdGe.MxFormat): boolean;
	getAccessLabel(): Mx3dDbLabel;
	getShapesLabel(): Mx3dDbLabel;
	getColorsLabel(): Mx3dDbLabel;
	getLayersLabel(): Mx3dDbLabel;
	addShapeLabel(): Mx3dDbLabel;
	getTopFreeLabels(): Mx3dLabelSequence;
	getDocName(): string;
}
export declare class Mx3dDbLabel extends Mx3dDbObject {
	constructor(p?: object);
	setShape(theShape: Mx3dShapeObject): boolean;
	getShape(): Mx3dShapeObject;
	hasChildLabel(): boolean;
	getChildLabels(): Mx3dLabelSequence;
	hasParentLabel(): boolean;
	getParentLabel(): Mx3dDbLabel;
	addChildLabel(): Mx3dDbLabel;
	addChildShape(theShape: Mx3dShapeObject): Mx3dDbLabel;
	isReference(): boolean;
	isAssembly(): boolean;
	isSimpleShape(): boolean;
	isTopLevel(): boolean;
	isFree(): boolean;
	isShape(): boolean;
	isComponent(): boolean;
	isCompound(): boolean;
	isSubShape(): boolean;
	getReferredLabel(): Mx3dDbLabel;
	addAssemblyLabel(theShape: Mx3dShapeObject): Mx3dDbLabel;
	getLocation(): Mx3dGeLocation;
	isSetColor(): boolean;
	setColor(theColor: Mx3dGeColor): void;
	getColor(): Mx3dGeColor;
	getName(): string;
	getEntry(): string;
	getAttributeStr(): string;
}
export declare class Mx3dLabelSequence extends Mx3dBaseObject {
	constructor(p?: object);
}
export declare class Mx3dLabelSequenceIterator extends Mx3dBaseObject {
	constructor(theLabelSequence: Mx3dLabelSequence | object);
	More(): boolean;
	Next(): void;
	Value(): Mx3dDbLabel;
}
export declare class Mx3dGeLocation extends Mx3dGeObject {
	constructor(p?: object);
	Multiplied(theLocation: Mx3dGeLocation): Mx3dGeLocation;
}
export declare class Mx3dGePoint extends Mx3dGeObject {
	constructor(p1?: number | object, p2?: number, p3?: number);
	X(): number;
	Y(): number;
	Z(): number;
	setX(theX: number): void;
	setY(theY: number): void;
	setZ(theZ: number): void;
}
export declare function loadMxCADassembly3d(config: MxDraw3dConfig, call?: (mxDraw3d: MxDraw3d) => void): Promise<MxDraw3d>;
/**
 * MxCppType 类
 */
export declare class MxApp3DType extends PubSub<{
	eventModesSelected: (ids: number[]) => void;
	eventAddToTree: (node: string) => void;
	eventRemoveFromTree: (ids: number[]) => void;
	eventFileSave: (fileName: string) => void;
	eventRebuildTree: (tree_str: string) => void;
	eventUpdatePointer: (pointer: number[]) => void;
	eventUpdateViewSize: (pointer: number[]) => void;
}> {
	init(imp: any): void;
	imp?: any;
	cpp_app: any;
	tool: any;
	globalMethods: any;
}
export declare let MxApp3D: MxApp3DType;
export interface MxCAD3DConfig {
	[x: string]: any;
	canvas: string | HTMLCanvasElement;
	/** canvas最小宽度 默认300 */
	minWidth?: number;
	/** canvas最小高度 默认300 */
	minHeight?: number;
	/** 指定更新Canvas大小的函数，不指定则默认自动处理(指定该函数则 minHeight, minWidth无效) */
	updateCanvasSize?: () => void;
	locateFile?: (fileName: string, base?: string | URL) => string;
}
export declare class MxCAD3DObject {
	private event;
	private imp;
	private canvas;
	private ctx;
	private updateCanvasSizeFun;
	constructor();
	getDocument(): MxNewMx3dDbDocument;
	removeAll(theUpdateView?: boolean): void;
	update(isUpAllData?: boolean, isRemoveAll?: boolean): void;
	getModelCounts(): number;
	setProjectionType(theProjection: MdGe.MxCameraProjection): void;
	showCenterTrihedron(theToShow: boolean): void;
	fitAllObjects(theAuto: boolean): void;
	enableXClipPlane(theToEnabled: boolean): void;
	setXClipPlaneXPosition(thePosition: number): void;
	setXClipPlaneReverse(): void;
	enableYClipPlane(theToEnabled: boolean): void;
	setYClipPlaneYPosition(thePosition: number): void;
	setYClipPlaneReverse(): void;
	enableZClipPlane(theToEnabled: boolean): void;
	setZClipPlaneZPosition(thePosition: number): void;
	setZClipPlaneReverse(): void;
	enableCustomClipPlane(theToEnabled: boolean): void;
	setCustomClipPlanePosition(thePosition: number): void;
	setCustomClipPlaneReverse(): void;
	setCustomClipPlaneDirection(x: number, y: number, z: number): void;
	displaySymbolText(theSymbol: MxNewMx3dSymbolText): void;
	displayDimension(theDimension: MxNewMx3dDimObject): void;
	addModelTexture(theFileName: string): void;
	removeModelTexture(): void;
	setGradientBgColor(theColor1: MxNewMx3dGeColor, theColor2: MxNewMx3dGeColor, theMethod: MdGe.MxGradientFillMethod): void;
	setProj(theOrientation: MdGe.MxV3dTypeOfOrientation, theIsYup: boolean): void;
	setSelectedColor(color: MxNewMx3dGeColor): void;
	getImp(): any;
	getCtx(): any;
	updateCanvasSize(): void;
	init(imp: any): void;
	open3DFile(file: File): void;
	on(name: "init", fun: () => void): void;
	off(name: string, fun?: Function): void;
	callEvent(sEventName: string, param?: any): boolean;
	create(config: MxCAD3DConfig): void;
}
export type UniPoint = MxNewMx3dGePoint | [
	theX: number,
	theY: number,
	theZ: number
];
export type UniDir = MxNewMx3dGeDir | [
	theX: number,
	theY: number,
	theZ: number
];
export type UniVec = MxNewMx3dGeVec | [
	theX: number,
	theY: number,
	theZ: number
];
/**
 * 应用程序类，全局单实例
 */
export declare class MxNewMx3dApplication {
	protected imp: any;
	constructor();
	/**
	 * 为当前应用程序创建一个视图
	 * @param theCanvasSelector canvas的CSS选择器字符串
	 * @returns 返回一个视图对象
	 */
	createView(theCanvasSelector: string): MxNewMx3dView;
	/**
	 * 获取当前视图对象
	 * @returns 返回当前的视图对象
	 */
	getCurrentActiveView(): MxNewMx3dView;
}
/**
 * 管理对象生命周期的基类
 */
export declare class MxNewMx3dBaseObject {
	protected imp: any;
	constructor(imp?: any);
	getImp(): any;
	protected initTempObject(imp: any): void;
}
/**
 * 尺寸标准的基类
 */
export declare class MxNewMx3dDimObject extends MxNewMx3dBaseObject {
	constructor(p?: object);
}
/**
 * 符号的基类
 */
export declare class MxNewMx3dSymbolObject extends MxNewMx3dBaseObject {
	constructor(p?: object);
}
/**
 * 模型算法的基类
 */
export declare class MxNewMx3dAlgoObject extends MxNewMx3dBaseObject {
	constructor(p?: object);
}
/**
 * 样式基类
 */
export declare class MxNewMx3dAspectObject extends MxNewMx3dBaseObject {
	constructor(p?: object);
}
/**
 * 数学几何基类
 */
export declare class MxNewMx3dGeObject extends MxNewMx3dBaseObject {
	constructor(p?: object);
}
/**
 * 曲线基类
 */
export declare class MxNewMx3dGeCurve extends MxNewMx3dGeObject {
	constructor(p?: object);
}
/**
 * 圆锥曲线基类
 */
export declare class MxNewMx3dGeConic extends MxNewMx3dGeCurve {
	constructor(p?: object);
}
/**
 * 几何点
 */
export declare class MxNewMx3dGePoint extends MxNewMx3dGeObject {
	constructor();
	constructor(theXYZ: [
		theX: number,
		theY: number,
		theZ: number
	]);
	constructor(theX: number, theY: number, theZ: number);
	X(): number;
	Y(): number;
	Z(): number;
	setX(theX: number): void;
	setY(theY: number): void;
	setZ(theZ: number): void;
	setXYZ(theX: number, theY: number, theZ: number): void;
	Vertex(): MxNewMx3dShapeVertex;
}
export declare class MxNewMx3dGeTrsf extends MxNewMx3dGeObject {
	constructor();
	SetMirrorByPoint(point: UniPoint): void;
	SetMirrorByAxis(axis: MxNewMx3dGeAxis): void;
	SetMirrorByCSYSR(csysr: MxNewMx3dGeCSYSR): void;
	SetRotation(axis: MxNewMx3dGeAxis, ang: number): void;
	SetScale(point: UniPoint, s: number): void;
	SetTranslationByVec(vec: UniVec): void;
	SetTranslationBy2Points(point1: UniPoint, point2: UniPoint): void;
	SetTranslationPart(vec: MxNewMx3dGeVec): void;
	SetScaleFactor(s: number): void;
	SetValues(a11: number, a12: number, a13: number, a14: number, a21: number, a22: number, a23: number, a24: number, a31: number, a32: number, a33: number, a34: number): void;
	IsNegative(): number;
	ScaleFactor(): number;
	Value(row: number, col: number): number;
	Invert(): void;
	Inverted(): MxNewMx3dGeTrsf;
	Multiplied(t: MxNewMx3dGeTrsf): MxNewMx3dGeTrsf;
	Multiply(t: MxNewMx3dGeTrsf): void;
	PreMultiply(t: MxNewMx3dGeTrsf): void;
	Power(n: number): void;
	Powered(n: number): MxNewMx3dGeTrsf;
	Transforms(x: number, y: number, z: number): void;
}
export declare class MxNewMx3dGeAxis extends MxNewMx3dGeObject {
	constructor();
	constructor(theLoc: UniPoint, theDir: UniDir);
	Direction(): MxNewMx3dGeDir;
	Location(): MxNewMx3dGePoint;
	SetDirection(theDir: MxNewMx3dGeDir): void;
	SetLocation(theLoc: UniPoint): void;
}
export declare class MxNewMx3dGeDir extends MxNewMx3dGeObject {
	constructor();
	constructor(theXv: number, theYv: number, theZv: number);
	X(): number;
	Y(): number;
	Z(): number;
	SetX(theX: number): void;
	SetY(theY: number): void;
	SetZ(theZ: number): void;
	SetXYZ(theXv: number, theYv: number, theZv: number): void;
	IsEqual(theOther: MxNewMx3dGeDir, theAngularTolerance: number): boolean;
	IsNormal(theOther: MxNewMx3dGeDir, theAngularTolerance: number): boolean;
	IsOpposite(theOther: MxNewMx3dGeDir, theAngularTolerance: number): boolean;
	IsParallel(theOther: MxNewMx3dGeDir, theAngularTolerance: number): boolean;
	Angle(theOther: MxNewMx3dGeDir): number;
	AngleWithRef(theOther: MxNewMx3dGeDir, theVRef: MxNewMx3dGeDir): number;
	Cross(theRight: MxNewMx3dGeDir): void;
	Crossed(theRight: MxNewMx3dGeDir): MxNewMx3dGeDir;
	CrossCross(theV1: MxNewMx3dGeDir, theV2: MxNewMx3dGeDir): void;
	CrossCrossed(theV1: MxNewMx3dGeDir, theV2: MxNewMx3dGeDir): MxNewMx3dGeDir;
	Dot(theOther: MxNewMx3dGeDir): number;
	DotCross(theV1: MxNewMx3dGeDir, theV2: MxNewMx3dGeDir): number;
	Reverse(): void;
	Reversed(): MxNewMx3dGeDir;
	MirrorByVec(theV: MxNewMx3dGeDir): void;
	MirroredByVec(theV: MxNewMx3dGeDir): MxNewMx3dGeDir;
	MirrorByAxis(theA1: MxNewMx3dGeAxis): void;
	MirroredByAxis(theA1: MxNewMx3dGeAxis): MxNewMx3dGeDir;
	MirrorByCSYSR(theA2: MxNewMx3dGeCSYSR): void;
	MirroredByCSYSR(theA2: MxNewMx3dGeCSYSR): MxNewMx3dGeDir;
	Rotate(theA1: MxNewMx3dGeAxis, theAng: number): void;
	Rotated(theA1: MxNewMx3dGeAxis, theAng: number): MxNewMx3dGeDir;
	Transform(theT: MxNewMx3dGeTrsf): void;
	Transformed(theT: MxNewMx3dGeTrsf): MxNewMx3dGeDir;
}
export declare class MxNewMx3dGeEllipse extends MxNewMx3dGeObject {
	constructor();
	constructor(theA2: MxNewMx3dGeCSYSR, theMajorRadius: number, theMinorRadius: number);
	SetAxis(theA1: MxNewMx3dGeAxis): void;
	SetLocation(theP: MxNewMx3dGePoint): void;
	SetMajorRadius(theMajorRadius: number): void;
	SetMinorRadius(theMinorRadius: number): void;
	SetPosition(theA2: MxNewMx3dGeCSYSR): void;
	Area(): number;
	Axis(): MxNewMx3dGeAxis;
	Directrix1(): MxNewMx3dGeAxis;
	Directrix2(): MxNewMx3dGeAxis;
	Eccentricity(): number;
	Focal(): number;
	Focus1(): MxNewMx3dGePoint;
	Focus2(): MxNewMx3dGePoint;
	Location(): MxNewMx3dGePoint;
	MajorRadius(): number;
	MinorRadius(): number;
	Parameter(): number;
	Position(): MxNewMx3dGeCSYSR;
	XAxis(): MxNewMx3dGeAxis;
	YAxis(): MxNewMx3dGeAxis;
	MirrorByPoint(theP: MxNewMx3dGePoint): void;
	MirroredByPoint(theP: MxNewMx3dGePoint): MxNewMx3dGeEllipse;
	MirrorByAxis(theA1: MxNewMx3dGeAxis): void;
	MirroredByAxis(theA1: MxNewMx3dGeAxis): MxNewMx3dGeEllipse;
	MirrorByCSYSR(theA2: MxNewMx3dGeCSYSR): void;
	MirroredByCSYSR(theA2: MxNewMx3dGeCSYSR): MxNewMx3dGeEllipse;
	Rotate(theA1: MxNewMx3dGeAxis, theAng: number): void;
	Rotated(theA1: MxNewMx3dGeAxis, theAng: number): MxNewMx3dGeEllipse;
	Scale(theP: MxNewMx3dGePoint, theS: number): void;
	Scaled(theP: MxNewMx3dGePoint, theS: number): MxNewMx3dGeEllipse;
	Transform(theT: MxNewMx3dGeTrsf): void;
	Transformed(theT: MxNewMx3dGeTrsf): MxNewMx3dGeEllipse;
	TranslateByVec(theV: MxNewMx3dGeVec): void;
	TranslatedByVec(theV: MxNewMx3dGeVec): MxNewMx3dGeEllipse;
	TranslateBy2Points(theP1: MxNewMx3dGePoint, theP2: MxNewMx3dGePoint): void;
	TranslatedBy2Points(theP1: MxNewMx3dGePoint, theP2: MxNewMx3dGePoint): MxNewMx3dGeEllipse;
}
export declare class MxNewMx3dGeHyperbola extends MxNewMx3dGeObject {
	constructor();
	constructor(theA2: MxNewMx3dGeCSYSR, theMajorRadius: number, theMinorRadius: number);
	SetAxis(theA1: MxNewMx3dGeAxis): void;
	SetLocation(theP: MxNewMx3dGePoint): void;
	SetMajorRadius(theMajorRadius: number): void;
	SetMinorRadius(theMinorRadius: number): void;
	SetPosition(theA2: MxNewMx3dGeCSYSR): void;
	Asymptote1(): MxNewMx3dGeAxis;
	Asymptote2(): MxNewMx3dGeAxis;
	Axis(): MxNewMx3dGeAxis;
	ConjugateBranch1(): MxNewMx3dGeHyperbola;
	ConjugateBranch2(): MxNewMx3dGeHyperbola;
	Directrix1(): MxNewMx3dGeAxis;
	Directrix2(): MxNewMx3dGeAxis;
	Eccentricity(): number;
	Focal(): number;
	Focus1(): MxNewMx3dGePoint;
	Focus2(): MxNewMx3dGePoint;
	Location(): MxNewMx3dGePoint;
	MajorRadius(): number;
	MinorRadius(): number;
	OtherBranch(): MxNewMx3dGeHyperbola;
	Parameter(): number;
	Position(): MxNewMx3dGeCSYSR;
	XAxis(): MxNewMx3dGeAxis;
	YAxis(): MxNewMx3dGeAxis;
	MirrorByPoint(theP: MxNewMx3dGePoint): void;
	MirroredByPoint(theP: MxNewMx3dGePoint): MxNewMx3dGeHyperbola;
	MirrorByAxis(theA1: MxNewMx3dGeAxis): void;
	MirroredByAxis(theA1: MxNewMx3dGeAxis): MxNewMx3dGeHyperbola;
	MirrorByCSYSR(theA2: MxNewMx3dGeCSYSR): void;
	MirroredByCSYSR(theA2: MxNewMx3dGeCSYSR): MxNewMx3dGeHyperbola;
	Rotate(theA1: MxNewMx3dGeAxis, theAng: number): void;
	Rotated(theA1: MxNewMx3dGeAxis, theAng: number): MxNewMx3dGeHyperbola;
	Scale(theP: MxNewMx3dGePoint, theS: number): void;
	Scaled(theP: MxNewMx3dGePoint, theS: number): MxNewMx3dGeHyperbola;
	Transform(theT: MxNewMx3dGeTrsf): void;
	Transformed(theT: MxNewMx3dGeTrsf): MxNewMx3dGeHyperbola;
	TranslateByVec(theV: MxNewMx3dGeVec): void;
	TranslatedByVec(theV: MxNewMx3dGeVec): MxNewMx3dGeHyperbola;
	TranslateBy2Points(theP1: MxNewMx3dGePoint, theP2: MxNewMx3dGePoint): void;
	TranslatedBy2Points(theP1: MxNewMx3dGePoint, theP2: MxNewMx3dGePoint): MxNewMx3dGeHyperbola;
}
export declare class MxNewMx3dGeVec extends MxNewMx3dGeObject {
	constructor();
	constructor(x: number, y: number, z: number);
	constructor(thePoint1: MxNewMx3dGePoint, thePoint2: MxNewMx3dGePoint);
	X(): number;
	Y(): number;
	Z(): number;
	SetX(x: number): void;
	SetY(y: number): void;
	SetZ(z: number): void;
	SetXYZ(x: number, y: number, z: number): void;
	IsEqual(other: MxNewMx3dGeVec, linearTolerance: number, angularTolerance: number): boolean;
	IsNormal(other: MxNewMx3dGeVec, angularTolerance: number): boolean;
	IsOpposite(other: MxNewMx3dGeVec, angularTolerance: number): boolean;
	IsParallel(other: MxNewMx3dGeVec, angularTolerance: number): boolean;
	Angle(other: MxNewMx3dGeVec): number;
	AngleWithRef(other: MxNewMx3dGeVec, ref: MxNewMx3dGeVec): number;
	Magnitude(): number;
	SquareMagnitude(): number;
	Add(other: MxNewMx3dGeVec): void;
	Added(other: MxNewMx3dGeVec): MxNewMx3dGeVec;
	Subtract(right: MxNewMx3dGeVec): void;
	Subtracted(right: MxNewMx3dGeVec): MxNewMx3dGeVec;
	Multiply(scalar: number): void;
	Multiplied(scalar: number): MxNewMx3dGeVec;
	Divide(scalar: number): void;
	Divided(scalar: number): MxNewMx3dGeVec;
	Cross(right: MxNewMx3dGeVec): void;
	Crossed(right: MxNewMx3dGeVec): MxNewMx3dGeVec;
	CrossMagnitude(right: MxNewMx3dGeVec): number;
	CrossSquareMagnitude(right: MxNewMx3dGeVec): number;
	CrossCross(v1: MxNewMx3dGeVec, v2: MxNewMx3dGeVec): void;
	CrossCrossed(v1: MxNewMx3dGeVec, v2: MxNewMx3dGeVec): MxNewMx3dGeVec;
	Dot(other: MxNewMx3dGeVec): number;
	DotCross(v1: MxNewMx3dGeVec, v2: MxNewMx3dGeVec): number;
	Normalize(): void;
	Normalized(): MxNewMx3dGeVec;
	Reverse(): void;
	Reversed(): MxNewMx3dGeVec;
	SetLinearForm(v1: MxNewMx3dGeVec, v2: MxNewMx3dGeVec): void;
	SetLinearForm(a1: number, v1: MxNewMx3dGeVec, v2: MxNewMx3dGeVec): void;
	SetLinearForm(a1: number, v1: MxNewMx3dGeVec, a2: number, v2: MxNewMx3dGeVec): void;
	SetLinearForm(a1: number, v1: MxNewMx3dGeVec, a2: number, v2: MxNewMx3dGeVec, v3: MxNewMx3dGeVec): void;
	SetLinearForm(a1: number, v1: MxNewMx3dGeVec, a2: number, v2: MxNewMx3dGeVec, a3: number, v3: MxNewMx3dGeVec): void;
	SetLinearForm(a1: number, v1: MxNewMx3dGeVec, a2: number, v2: MxNewMx3dGeVec, a3: number, v3: MxNewMx3dGeVec, v4: MxNewMx3dGeVec): void;
	MirrorByVec(vec: MxNewMx3dGeVec): void;
	MirroredByVec(vec: MxNewMx3dGeVec): MxNewMx3dGeVec;
	MirrorByAxis(axis: MxNewMx3dGeAxis): void;
	MirroredByAxis(axis: MxNewMx3dGeAxis): MxNewMx3dGeVec;
	MirrorByCSYSR(csysr: MxNewMx3dGeCSYSR): void;
	MirroredByCSYSR(csysr: MxNewMx3dGeCSYSR): MxNewMx3dGeVec;
	Rotate(axis: MxNewMx3dGeAxis, ang: number): void;
	Rotated(axis: MxNewMx3dGeAxis, ang: number): MxNewMx3dGeVec;
	Scale(s: number): void;
	Scaled(s: number): MxNewMx3dGeVec;
	Transform(t: MxNewMx3dGeTrsf): void;
	Transformed(t: MxNewMx3dGeTrsf): MxNewMx3dGeVec;
}
export declare class MxNewMx3dGeBndBox extends MxNewMx3dGeObject {
	constructor();
	constructor(theMin: MxNewMx3dGePoint, theMax: MxNewMx3dGePoint);
	SetWhole(): void;
	SetVoid(): void;
	Set(P: MxNewMx3dGePoint, D: MxNewMx3dGeDir): void;
	Update(aXmin: number, aYmin: number, aZmin: number, aXmax: number, aYmax: number, aZmax: number): void;
	GetGap(): number;
	SetGap(Tol: number): void;
	Enlarge(Tol: number): void;
	CornerMin(): MxNewMx3dGePoint;
	CornerMax(): MxNewMx3dGePoint;
	OpenXmin(): void;
	OpenXmax(): void;
	OpenYmin(): void;
	OpenYmax(): void;
	OpenZmin(): void;
	OpenZmax(): void;
	IsOpen(): boolean;
	IsOpenXmin(): boolean;
	IsOpenXmax(): boolean;
	IsOpenYmin(): boolean;
	IsOpenYmax(): boolean;
	IsOpenZmin(): boolean;
	IsOpenZmax(): boolean;
	IsWhole(): boolean;
	IsVoid(): boolean;
	IsXThin(tol: number): boolean;
	IsYThin(tol: number): boolean;
	IsZThin(tol: number): boolean;
	IsThin(tol: number): boolean;
	Transformed(T: MxNewMx3dGeTrsf): MxNewMx3dGeBndBox;
	AddBndBox(Other: MxNewMx3dGeBndBox): void;
	AddPoint(P: MxNewMx3dGePoint): void;
	AddPointDir(P: MxNewMx3dGePoint, D: MxNewMx3dGeDir): void;
	AddDir(D: MxNewMx3dGeDir): void;
	IsOutPoint(P: MxNewMx3dGePoint): boolean;
	IsOutBndBox(Other: MxNewMx3dGeBndBox): boolean;
	IsOutBndBox(Other: MxNewMx3dGeBndBox, T: MxNewMx3dGeTrsf): boolean;
	IsOutTBT(T1: MxNewMx3dGeTrsf, Other: MxNewMx3dGeBndBox, T2: MxNewMx3dGeTrsf): boolean;
	IsOutPPD(P1: MxNewMx3dGePoint, P2: MxNewMx3dGePoint, D: MxNewMx3dGeDir): boolean;
	Distance(Other: MxNewMx3dGeBndBox): number;
	SquareExtent(): number;
	FinitePart(): MxNewMx3dGeBndBox;
	HasFinitePart(): boolean;
}
export declare class MxNewMx3dGeBox extends MxNewMx3dGeObject {
	constructor(P1: MxNewMx3dGePoint, P2: MxNewMx3dGePoint);
	constructor(dx: number, dy: number, dz: number);
	constructor(Axes: MxNewMx3dGeCSYSR, dx: number, dy: number, dz: number);
	Shape(): MxNewMx3dShapeObject;
}
export declare class MxNewMx3dGeCircle extends MxNewMx3dGeObject {
	constructor();
	constructor(theA2: MxNewMx3dGeCSYSR, theRadius: number);
	SetAxis(theA1: MxNewMx3dGeAxis): void;
	SetLocation(theP: MxNewMx3dGePoint): void;
	SetPosition(theA2: MxNewMx3dGeCSYSR): void;
	SetRadius(theRadius: number): void;
	Area(): number;
	Axis(): MxNewMx3dGeAxis;
	Length(): number;
	Location(): MxNewMx3dGePoint;
	Position(): MxNewMx3dGeCSYSR;
	Radius(): number;
	XAxis(): MxNewMx3dGeAxis;
	YAxis(): MxNewMx3dGeAxis;
	Distance(theP: MxNewMx3dGePoint): number;
	SquareDistance(theP: MxNewMx3dGePoint): number;
	Contains(theP: MxNewMx3dGePoint, theLinearTolerance: number): boolean;
	MirrorByPoint(theP: MxNewMx3dGePoint): void;
	MirroredByPoint(theP: MxNewMx3dGePoint): MxNewMx3dGeCircle;
	MirrorByAxis(theA1: MxNewMx3dGeAxis): void;
	MirroredByAxis(theA1: MxNewMx3dGeAxis): MxNewMx3dGeCircle;
	MirrorByCSYSR(theA2: MxNewMx3dGeCSYSR): void;
	MirroredByCSYSR(theA2: MxNewMx3dGeCSYSR): MxNewMx3dGeCircle;
	Rotate(theA1: MxNewMx3dGeAxis, theAng: number): void;
	Rotated(theA1: MxNewMx3dGeAxis, theAng: number): MxNewMx3dGeCircle;
	Scale(theP: MxNewMx3dGePoint, theS: number): void;
	Scaled(theP: MxNewMx3dGePoint, theS: number): MxNewMx3dGeCircle;
	Transform(theT: MxNewMx3dGeTrsf): void;
	Transformed(theT: MxNewMx3dGeTrsf): MxNewMx3dGeCircle;
	TranslateByVec(theV: MxNewMx3dGeVec): void;
	TranslatedByVec(theV: MxNewMx3dGeVec): MxNewMx3dGeCircle;
	TranslateBy2Points(theP1: MxNewMx3dGePoint, theP2: MxNewMx3dGePoint): void;
	TranslatedBy2Points(theP1: MxNewMx3dGePoint, theP2: MxNewMx3dGePoint): MxNewMx3dGeCircle;
}
export declare class MxNewMx3dShapeObject extends MxNewMx3dBaseObject {
	constructor(p?: object);
	getBndBox(): MxNewMx3dGeBndBox;
	move(theLocation: MxNewMx3dGeLocation): void;
	moved(theLocation: MxNewMx3dGeLocation): MxNewMx3dShapeObject;
	clone(): MxNewMx3dShapeObject;
	fuse(theOther: MxNewMx3dShapeObject): MxNewMx3dShapeObject;
	cut(theOther: MxNewMx3dShapeObject): MxNewMx3dShapeObject;
	common(theOther: MxNewMx3dShapeObject): MxNewMx3dShapeObject;
	section(theOther: MxNewMx3dShapeObject): MxNewMx3dShapeObject;
	spliter(theTools: MxNewMx3dShapeObject[]): MxNewMx3dShapeObject[];
	MirrorByPoint(theP: MxNewMx3dGePoint): void;
	MirroredByPoint(theP: MxNewMx3dGePoint): MxNewMx3dShapeObject;
	MirrorByAxis(axis: MxNewMx3dGeAxis): void;
	MirroredByAxis(axis: MxNewMx3dGeAxis): MxNewMx3dShapeObject;
	MirrorByCSYSR(csysr: MxNewMx3dGeCSYSR): void;
	MirroredByCSYSR(csysr: MxNewMx3dGeCSYSR): MxNewMx3dShapeObject;
	Rotate(axis: MxNewMx3dGeAxis, ang: number): void;
	Rotated(axis: MxNewMx3dGeAxis, ang: number): MxNewMx3dShapeObject;
	Scale(point: MxNewMx3dGePoint, s: number): void;
	Scaled(point: MxNewMx3dGePoint, s: number): MxNewMx3dShapeObject;
	Transform(trsf: MxNewMx3dGeTrsf): void;
	Transformed(trsf: MxNewMx3dGeTrsf): MxNewMx3dShapeObject;
	TranslateByVec(vec: MxNewMx3dGeVec): void;
	TranslateByVec(theX: number, theY: number, theZ: number): void;
	TranslatedByVec(vec: MxNewMx3dGeVec): MxNewMx3dShapeObject;
	TranslatedByVec(theX: number, theY: number, theZ: number): MxNewMx3dShapeObject;
	TranslateBy2Points(point1: MxNewMx3dGePoint, point2: MxNewMx3dGePoint): void;
	TranslatedBy2Points(point1: MxNewMx3dGePoint, point2: MxNewMx3dGePoint): MxNewMx3dShapeObject;
	Explore(ToFind: MdGe.MxShapeEnum): MxNewMx3dShapeObject[];
	ShapeType(): MdGe.MxShapeEnum;
	Quantities(theAspect: MdGe.MxQuantAspect): number;
	Centroid(theAspect: MdGe.MxQuantAspect): MxNewMx3dGePoint;
}
export declare class MxNewMx3dShapeFace extends MxNewMx3dShapeObject {
	constructor(p?: object);
}
export declare class MxNewMx3dShapeVertex extends MxNewMx3dShapeObject {
	constructor(p?: object);
}
export declare class MxNewMx3dShapeEdge extends MxNewMx3dShapeObject {
	constructor();
	constructor(pt1: MxNewMx3dGePoint, pt2: MxNewMx3dGePoint);
}
export declare class MxNewMx3dShapeWire extends MxNewMx3dShapeObject {
	constructor(p?: object);
}
export declare class MxNewMx3dShapeShell extends MxNewMx3dShapeObject {
	constructor(p?: object);
}
export declare class MxNewMx3dShapeSolid extends MxNewMx3dShapeObject {
	constructor(p?: object);
}
export declare class MxNewMx3dShapeCompSolid extends MxNewMx3dShapeObject {
	constructor(p?: object);
}
export declare class MxNewMx3dShapeCompound extends MxNewMx3dShapeObject {
	constructor(p?: object);
}
export declare class MxNewMx3dAlgoFillet extends MxNewMx3dAlgoObject {
	constructor(S: MxNewMx3dShapeObject, FShape: MdGe.MxCF3dFilletShapeEnum);
	Add(Radius: number, E: MxNewMx3dShapeEdge): void;
	Shape(): MxNewMx3dShapeObject;
}
export declare class MxNewMx3dAlgoChamfer extends MxNewMx3dAlgoObject {
	constructor(S: MxNewMx3dShapeObject);
	Add(Dis: number, E: MxNewMx3dShapeEdge): void;
	Shape(): MxNewMx3dShapeObject;
}
export declare class MxNewMx3dShapeObjectSequence extends MxNewMx3dBaseObject {
	constructor();
	Length(): number;
	Value(theIndex: number): MxNewMx3dShapeObject;
	Remove(theIndex: number): void;
	Remove(theFromIndex: number, theToIndex: number): void;
	Append(theShape: MxNewMx3dShapeObject): void;
	Prepend(theShape: MxNewMx3dShapeObject): void;
}
export declare class MxNewMx3dDbObject extends MxNewMx3dBaseObject {
	constructor(p?: object);
}
export declare class MxNewMx3dView extends MxNewMx3dBaseObject {
	constructor(p: object);
	getDoc(): MxNewMx3dDbDocument;
	removeAll(theUpdateView?: boolean): void;
	update(isUpAllData: boolean, isRemoveAll?: boolean): void;
	getModelCounts(): number;
	setProjectionType(theProjection: MdGe.MxCameraProjection): void;
	showCenterTrihedron(theToShow: boolean): void;
	fitAllObjects(theAuto: boolean): void;
	enableXClipPlane(theToEnabled: boolean): void;
	setXClipPlaneXPosition(thePosition: number): void;
	setXClipPlaneReverse(): void;
	enableYClipPlane(theToEnabled: boolean): void;
	setYClipPlaneYPosition(thePosition: number): void;
	setYClipPlaneReverse(): void;
	enableZClipPlane(theToEnabled: boolean): void;
	setZClipPlaneZPosition(thePosition: number): void;
	setZClipPlaneReverse(): void;
	enableCustomClipPlane(theToEnabled: boolean): void;
	setCustomClipPlanePosition(thePosition: number): void;
	setCustomClipPlaneReverse(): void;
	setCustomClipPlaneDirection(x: number, y: number, z: number): void;
	displaySymbolText(theSymbol: MxNewMx3dSymbolText): void;
	displayDimension(theDimension: MxNewMx3dDimObject): void;
	addModelTexture(theFileName: string): void;
	removeModelTexture(): void;
	setGradientBgColor(theColor1: MxNewMx3dGeColor, theColor2: MxNewMx3dGeColor, theMethod: MdGe.MxGradientFillMethod): void;
	setProj(theOrientation: MdGe.MxV3dTypeOfOrientation, theIsYup: boolean): void;
	setSelectedColor(color: MxNewMx3dGeColor): void;
}
export declare class MxNewMx3dGeColor extends MxNewMx3dBaseObject {
	constructor();
	constructor(theColorName: MdGe.MxNameOfColor);
	constructor(theR: number, theG: number, theB: number, theType: MdGe.MxTypeOfColor);
	Name(): MdGe.MxNameOfColor;
	SetValues(theName: MdGe.MxNameOfColor): void;
	SetValues(theC1: number, theC2: number, theC3: number, theType: MdGe.MxTypeOfColor): void;
	Red(): number;
	Green(): number;
	Blue(): number;
	Hue(): number;
	Light(): number;
	ChangeIntensity(theDelta: number): void;
	Saturation(): number;
	ChangeContrast(theDelta: number): void;
	IsDifferent(theOther: MxNewMx3dGeColor): boolean;
	IsEqual(theOther: MxNewMx3dGeColor): boolean;
	Distance(theColor: MxNewMx3dGeColor): number;
	SquareDistance(theColor: MxNewMx3dGeColor): number;
	DeltaE2000(theOther: MxNewMx3dGeColor): number;
}
/**
 * 左手坐标系
 */
export declare class MxNewMx3dGeCSYS extends MxNewMx3dGeObject {
	constructor();
	constructor(csysr: MxNewMx3dGeCSYSR);
	constructor(origin: MxNewMx3dGePoint, z_axis: MxNewMx3dGeDir);
	constructor(origin: MxNewMx3dGePoint, z_axis: MxNewMx3dGeDir, x_vec: MxNewMx3dGeDir);
	XReverse(): void;
	YReverse(): void;
	ZReverse(): void;
	SetAxis(z_axis: MxNewMx3dGeAxis): void;
	SetDirection(z_dir: MxNewMx3dGeDir): void;
	SetLocation(origin: MxNewMx3dGePoint): void;
	SetLocation(theX: number, theY: number, theZ: number): void;
	SetXDirection(x_dir: MxNewMx3dGeDir): void;
	SetYDirection(y_dir: MxNewMx3dGeDir): void;
	Angle(other: MxNewMx3dGeCSYS): number;
	Axis(): MxNewMx3dGeAxis;
	CSYSR(): MxNewMx3dGeCSYSR;
	Direction(): MxNewMx3dGeDir;
	Location(): MxNewMx3dGePoint;
	XDirection(): MxNewMx3dGeDir;
	YDirection(): MxNewMx3dGeDir;
	Direct(): boolean;
	IsCoplanarWithCSYS(other: MxNewMx3dGeCSYS, linearTolerance: number, angularTolerance: number): boolean;
	IsCoplanarWithAxis(axis: MxNewMx3dGeAxis, linearTolerance: number, angularTolerance: number): boolean;
	MirrorByPoint(point: MxNewMx3dGePoint): void;
	MirroredByPoint(point: MxNewMx3dGePoint): MxNewMx3dGeCSYS;
	MirrorByAxis(axis: MxNewMx3dGeAxis): void;
	MirroredByAxis(axis: MxNewMx3dGeAxis): MxNewMx3dGeCSYS;
	MirrorByCSYSR(csysr: MxNewMx3dGeCSYSR): void;
	MirroredByCSYSR(csysr: MxNewMx3dGeCSYSR): MxNewMx3dGeCSYS;
	Rotate(axis: MxNewMx3dGeAxis, ang: number): void;
	Rotated(axis: MxNewMx3dGeAxis, ang: number): MxNewMx3dGeCSYS;
	Scale(point: MxNewMx3dGePoint, s: number): void;
	Scaled(point: MxNewMx3dGePoint, s: number): MxNewMx3dGeCSYS;
	Transform(t: MxNewMx3dGeTrsf): void;
	Transformed(t: MxNewMx3dGeTrsf): MxNewMx3dGeCSYS;
	TranslateByVec(vec: MxNewMx3dGeVec): void;
	TranslatedByVec(vec: MxNewMx3dGeVec): MxNewMx3dGeCSYS;
	TranslateBy2Points(point1: MxNewMx3dGePoint, point2: MxNewMx3dGePoint): void;
	TranslatedBy2Points(point1: MxNewMx3dGePoint, point2: MxNewMx3dGePoint): MxNewMx3dGeCSYS;
}
/**
 * 右手坐标系
 */
export declare class MxNewMx3dGeCSYSR extends MxNewMx3dGeObject {
	constructor();
	constructor(origin: MxNewMx3dGePoint, z_axis: MxNewMx3dGeDir, x_vec: MxNewMx3dGeDir);
	Location(): MxNewMx3dGePoint;
	XDirection(): MxNewMx3dGeDir;
	YDirection(): MxNewMx3dGeDir;
	Direction(): MxNewMx3dGeDir;
	SetLocation(origin: MxNewMx3dGePoint): void;
	SetLocation(theX: number, theY: number, theZ: number): void;
	SetXDirection(x_dir: MxNewMx3dGePoint): void;
	SetYDirection(y_dir: MxNewMx3dGeDir): void;
	SetDirection(z_dir: MxNewMx3dGeDir): void;
	Angle(theOther: MxNewMx3dGeCSYSR): number;
	Axis(): MxNewMx3dGeAxis;
	IsCoplanarWithCSYSR(Other: MxNewMx3dGeCSYSR, LinearTolerance: number, AngularTolerance: number): boolean;
	IsCoplanarWithAxis(A1: MxNewMx3dGeAxis, LinearTolerance: number, AngularTolerance: number): boolean;
	MirrorByPoint(P: MxNewMx3dGePoint): void;
	MirroredByPoint(P: MxNewMx3dGePoint): MxNewMx3dGeCSYSR;
	MirrorByAxis(A1: MxNewMx3dGeAxis): void;
	MirroredByAxis(A1: MxNewMx3dGeAxis): MxNewMx3dGeCSYSR;
	MirrorByCSYSR(A2: MxNewMx3dGeCSYSR): void;
	MirroredByCSYSR(A2: MxNewMx3dGeCSYSR): MxNewMx3dGeCSYSR;
	Rotate(theA1: MxNewMx3dGeAxis, theAng: number): void;
	Rotated(theA1: MxNewMx3dGeAxis, theAng: number): MxNewMx3dGeCSYSR;
	Scale(theP: MxNewMx3dGePoint, theS: number): void;
	Scaled(theP: MxNewMx3dGePoint, theS: number): MxNewMx3dGeCSYSR;
	Transform(theT: MxNewMx3dGeTrsf): void;
	Transformed(theT: MxNewMx3dGeTrsf): MxNewMx3dGeCSYSR;
	TranslateByVec(theV: MxNewMx3dGeVec): void;
	TranslatedByVec(theV: MxNewMx3dGeVec): MxNewMx3dGeCSYSR;
	TranslateBy2Points(theP1: MxNewMx3dGePoint, theP2: MxNewMx3dGePoint): void;
	TranslatedBy2Points(theP1: MxNewMx3dGePoint, theP2: MxNewMx3dGePoint): MxNewMx3dGeCSYSR;
}
/**
 * 圆柱体
 */
export declare class MxNewMx3dGeCylinder extends MxNewMx3dGeObject {
	constructor();
	constructor(theA3: MxNewMx3dGeCSYS, theRadius: number);
	SetAxis(theA1: MxNewMx3dGeAxis): void;
	SetLocation(theLoc: MxNewMx3dGePoint): void;
	SetPosition(theA3: MxNewMx3dGeCSYS): void;
	SetRadius(theR: number): void;
	UReverse(): void;
	VReverse(): void;
	Direct(): boolean;
	Axis(): MxNewMx3dGeAxis;
	Location(): MxNewMx3dGePoint;
	Position(): MxNewMx3dGeCSYS;
	Radius(): number;
	XAxis(): MxNewMx3dGeAxis;
	YAxis(): MxNewMx3dGeAxis;
	MirrorByPoint(theP: MxNewMx3dGePoint): void;
	MirroredByPoint(theP: MxNewMx3dGePoint): MxNewMx3dGeCylinder;
	MirrorByAxis(theA1: MxNewMx3dGeAxis): void;
	MirroredByAxis(theA1: MxNewMx3dGeAxis): MxNewMx3dGeCylinder;
	MirrorByCSYSR(theA2: MxNewMx3dGeCSYSR): void;
	MirroredByCSYSR(theA2: MxNewMx3dGeCSYSR): MxNewMx3dGeCylinder;
	Rotate(theA1: MxNewMx3dGeAxis, theAng: number): void;
	Rotated(theA1: MxNewMx3dGeAxis, theAng: number): MxNewMx3dGeCylinder;
	Scale(theP: MxNewMx3dGePoint, theS: number): void;
	Scaled(theP: MxNewMx3dGePoint, theS: number): MxNewMx3dGeCylinder;
	Transform(theT: MxNewMx3dGeTrsf): void;
	Transformed(theT: MxNewMx3dGeTrsf): MxNewMx3dGeCylinder;
	TranslateByVec(theV: MxNewMx3dGeVec): void;
	TranslatedByVec(theV: MxNewMx3dGeVec): MxNewMx3dGeCylinder;
	TranslateBy2Points(theP1: MxNewMx3dGePoint, theP2: MxNewMx3dGePoint): void;
	TranslatedBy2Points(theP1: MxNewMx3dGePoint, theP2: MxNewMx3dGePoint): MxNewMx3dGeCylinder;
	Shape(H: number, Angle?: number): MxNewMx3dShapeObject;
}
export declare class MxNewMx3dDbDocument extends MxNewMx3dDbObject {
	constructor();
	read(theFile: File, theFormat: MdGe.MxFormat): Promise<boolean>;
	getAccessLabel(): MxNewMx3dDbLabel;
	getShapesLabel(): MxNewMx3dDbLabel;
	getColorsLabel(): MxNewMx3dDbLabel;
	getLayersLabel(): MxNewMx3dDbLabel;
	addShapeLabel(): MxNewMx3dDbLabel;
	removeShapeLabel(theLabel: MxNewMx3dDbLabel): boolean;
	removeComponent(theLabel: MxNewMx3dDbLabel): void;
	getTopFreeLabels(): MxNewMx3dDbLabel[];
	getDocName(): string;
	getView(): MxNewMx3dView;
	addColorLabel(theColor: MxNewMx3dGeColor): MxNewMx3dDbLabel;
	write(theFilePath: string, theFormat: MdGe.MxFormat): boolean;
}
export declare class MxNewMx3dDbLabel extends MxNewMx3dDbObject {
	constructor(p?: object);
	setShape(theShape: MxNewMx3dShapeObject): void;
	getShape(): MxNewMx3dShapeObject;
	hasChildLabel(): boolean;
	getChildLabels(): MxNewMx3dDbLabel[];
	hasParentLabel(): boolean;
	getParentLabel(): MxNewMx3dDbLabel;
	addChildLabel(): MxNewMx3dDbLabel;
	addSubShape(theShape: MxNewMx3dShapeObject): MxNewMx3dDbLabel;
	isReference(): boolean;
	isAssembly(): boolean;
	isSimpleShape(): boolean;
	isTopLevel(): boolean;
	isFree(): boolean;
	isShape(): boolean;
	isComponent(): boolean;
	isCompound(): boolean;
	isSubShape(): boolean;
	getReferredLabel(): MxNewMx3dDbLabel;
	getLocation(): MxNewMx3dGeLocation;
	addComponent(comp: MxNewMx3dDbLabel, Loc: MxNewMx3dGeLocation): MxNewMx3dDbLabel;
	isSetColor(): boolean;
	setColor(theColor: MxNewMx3dGeColor): void;
	getColor(): MxNewMx3dGeColor;
	getName(): string;
	getEntry(): string;
	getAttributeStr(): string;
	setTexture(theFilePath: string, theScaleU?: number, theScaleV?: number, theRepeatU?: number, theRepeatV?: number, theOriginU?: number, theOriginV?: number): void;
	setMaterial(theMaterial: MxNewMx3dGeMaterial): void;
}
export declare class MxNewMx3dLabelSequence extends MxNewMx3dBaseObject {
	constructor();
	Length(): number;
	Value(theIndex: number): MxNewMx3dDbLabel;
}
export declare class MxNewMx3dGeLocation extends MxNewMx3dGeObject {
	constructor();
	constructor(theTrsf: MxNewMx3dGeTrsf);
	IsIdentity(): boolean;
	Identity(): void;
	FirstPower(): number;
	NextLocation(): MxNewMx3dGeLocation;
	Inverted(): MxNewMx3dGeLocation;
	Multiplied(theLocation: MxNewMx3dGeLocation): MxNewMx3dGeLocation;
	Divided(Other: MxNewMx3dGeLocation): MxNewMx3dGeLocation;
	Predivided(Other: MxNewMx3dGeLocation): MxNewMx3dGeLocation;
	Powered(pwr: number): MxNewMx3dGeLocation;
	IsEqual(Other: MxNewMx3dGeLocation): boolean;
	IsDifferent(Other: MxNewMx3dGeLocation): boolean;
	Clear(): void;
	ScalePrec(): number;
}
export declare class MxNewMx3dGePlane extends MxNewMx3dGeObject {
	constructor();
	constructor(theA3: MxNewMx3dGeCSYS);
	constructor(theP: MxNewMx3dGePoint, theV: MxNewMx3dGeDir);
	constructor(theA: number, theB: number, theC: number, theD: number);
	SetAxis(theA1: MxNewMx3dGeAxis): void;
	SetLocation(theLoc: MxNewMx3dGePoint): void;
	SetPosition(theA3: MxNewMx3dGeCSYS): void;
	UReverse(): void;
	VReverse(): void;
	Direct(): boolean;
	Axis(): MxNewMx3dGeAxis;
	Location(): MxNewMx3dGePoint;
	Position(): MxNewMx3dGeCSYS;
	DistanceToPoint(theP: MxNewMx3dGePoint): number;
	DistanceToPlane(theOther: MxNewMx3dGePlane): number;
	SquareDistanceToPoint(theP: MxNewMx3dGePoint): number;
	SquareDistanceToPlane(theOther: MxNewMx3dGePlane): number;
	XAxis(): MxNewMx3dGeAxis;
	YAxis(): MxNewMx3dGeAxis;
	Contains(theP: MxNewMx3dGePoint, theLinearTolerance: number): boolean;
	MirrorByPoint(theP: MxNewMx3dGePoint): void;
	MirroredByPoint(theP: MxNewMx3dGePoint): MxNewMx3dGePlane;
	MirrorByAxis(theA1: MxNewMx3dGeAxis): void;
	MirroredByAxis(theA1: MxNewMx3dGeAxis): MxNewMx3dGePlane;
	MirrorByCSYSR(theA2: MxNewMx3dGeCSYSR): void;
	MirroredByCSYSR(theA2: MxNewMx3dGeCSYSR): MxNewMx3dGePlane;
	Rotate(theA1: MxNewMx3dGeAxis, theAng: number): void;
	Rotated(theA1: MxNewMx3dGeAxis, theAng: number): MxNewMx3dGePlane;
	Scale(theP: MxNewMx3dGePoint, theS: number): void;
	Scaled(theP: MxNewMx3dGePoint, theS: number): MxNewMx3dGePlane;
	Transform(theT: MxNewMx3dGeTrsf): void;
	Transformed(theT: MxNewMx3dGeTrsf): MxNewMx3dGePlane;
	TranslateByVec(theV: MxNewMx3dGeVec): void;
	TranslatedByVec(theV: MxNewMx3dGeVec): MxNewMx3dGePlane;
	TranslateBy2Points(theP1: MxNewMx3dGePoint, theP2: MxNewMx3dGePoint): void;
	TranslatedBy2Points(theP1: MxNewMx3dGePoint, theP2: MxNewMx3dGePoint): MxNewMx3dGePlane;
	Shape(): MxNewMx3dShapeObject;
	Shape(UMin: number, UMax: number, VMin: number, VMax: number): MxNewMx3dShapeObject;
}
export declare class MxNewMx3dSymbolText extends MxNewMx3dSymbolObject {
	constructor();
	constructor(text: string, height: number, position: MxNewMx3dGePoint);
	SetColor(theColor: MxNewMx3dGeColor): void;
	SetColor(theR: number, theG: number, theB: number): void;
	SetText(text: string): void;
	SetPositon(position: MxNewMx3dGePoint): void;
	SetHJustification(theHJust: MdGe.MxHorizontalTextAlignment): void;
	SetVJustification(theVJust: MdGe.MxVerticalTextAlignment): void;
	SetAngle(theAngle: number): void;
	SetZoomable(theIsZoomable: boolean): void;
	SetHeight(height: number): void;
	SetFontAspect(theFontAspect: MdGe.MxFontAspect): void;
	SetFont(theFont: string): void;
	SetOrientation3D(theOrientation: MxNewMx3dGeCSYSR): void;
	UnsetOrientation3D(): void;
	Position(): MxNewMx3dGePoint;
	FontAspect(): MdGe.MxFontAspect;
	Orientation3D(): MxNewMx3dGeCSYSR;
	HasOrientation3D(): boolean;
	SetFlipping(theIsFlipping: boolean): void;
	HasFlipping(): boolean;
	HasOwnAnchorPoint(): boolean;
	SetOwnAnchorPoint(theOwnAnchorPoint: boolean): void;
	SetDisplayType(theDisplayType: MdGe.MxTypeOfDisplayText): void;
	SetColorSubTitle(theR: number, theG: number, theB: number): void;
}
export declare class Mx3dShapeDownCast {
	static Vertex(S: MxNewMx3dShapeObject): MxNewMx3dShapeVertex;
	static Edge(S: MxNewMx3dShapeObject): MxNewMx3dShapeEdge;
	static Wire(S: MxNewMx3dShapeObject): MxNewMx3dShapeWire;
	static Face(S: MxNewMx3dShapeObject): MxNewMx3dShapeFace;
	static Shell(S: MxNewMx3dShapeObject): MxNewMx3dShapeShell;
	static Solid(S: MxNewMx3dShapeObject): MxNewMx3dShapeSolid;
	static CompSolid(S: MxNewMx3dShapeObject): MxNewMx3dShapeCompSolid;
	static Compound(S: MxNewMx3dShapeObject): MxNewMx3dShapeCompound;
}
export declare class Mx3dBrepCastGeom {
	static Surface(F: MxNewMx3dShapeFace): MxNewMx3dGeomSurface;
}
export declare class Mx3dUtils {
	static LoadFileFromUrl(theFileUrl: string, theSaveFileName: string): void;
	static LoadShapeFromFile(theFilePath: string, theFormat: MdGe.MxFormat): MxNewMx3dShapeObject[];
}
export declare class MxNewMx3dGeLine extends MxNewMx3dGeCurve {
	constructor(A1: MxNewMx3dGeAxis);
	constructor(P: MxNewMx3dGePoint, V: MxNewMx3dGeDir);
	SetDirection(V: MxNewMx3dGeDir): void;
	SetLocation(P: MxNewMx3dGePoint): void;
	SetPosition(A1: MxNewMx3dGeAxis): void;
	Position(): MxNewMx3dGeAxis;
	Reverse(): void;
	Reversed(): MxNewMx3dGeLine;
	ReversedParameter(U: number): number;
	FirstParameter(): number;
	LastParameter(): number;
	IsClosed(): boolean;
	IsPeriodic(): boolean;
	Continuity(): MdGe.MxGAShapeEnum;
	IsCN(N: number): boolean;
	D0(U: number, P: MxNewMx3dGePoint): void;
	D1(U: number, P: MxNewMx3dGePoint, V1: MxNewMx3dGeVec): void;
	D2(U: number, P: MxNewMx3dGePoint, V1: MxNewMx3dGeVec, V2: MxNewMx3dGeVec): void;
	D3(U: number, P: MxNewMx3dGePoint, V1: MxNewMx3dGeVec, V2: MxNewMx3dGeVec, V3: MxNewMx3dGeVec): void;
	DN(U: number, N: number): MxNewMx3dGeVec;
	Transform(T: MxNewMx3dGeTrsf): void;
	TransformedParameter(U: number, T: MxNewMx3dGeTrsf): number;
	ParametricTransformation(T: MxNewMx3dGeTrsf): number;
	Period(): number;
	Value(U: number): MxNewMx3dGePoint;
	Edge(p1: number, p2: number): MxNewMx3dShapeEdge;
}
export interface MxNewMx3dGeomObject {
	DynCast(theObject: MxNewMx3dGeomObject): this;
}
export declare class MxNewMx3dGeomObject extends MxNewMx3dBaseObject {
	constructor(p?: object);
	MirrorByPoint(P: MxNewMx3dGePoint): void;
	MirrorByAxis(A1: MxNewMx3dGeAxis): void;
	MirrorByCSYSR(A2: MxNewMx3dGeCSYSR): void;
	Rotate(A1: MxNewMx3dGeAxis, Ang: number): void;
	Scale(P: MxNewMx3dGePoint, S: number): void;
	TranslateByVec(V: MxNewMx3dGeVec): void;
	TranslateBy2Points(P1: MxNewMx3dGePoint, P2: MxNewMx3dGePoint): void;
	MirroredByPoint(P: MxNewMx3dGePoint): this;
	MirroredByAxis(A1: MxNewMx3dGeAxis): this;
	MirroredByCSYSR(A2: MxNewMx3dGeCSYSR): this;
	Rotated(A1: MxNewMx3dGeAxis, Ang: number): this;
	Scaled(P: MxNewMx3dGePoint, S: number): this;
	Transformed(T: MxNewMx3dGeTrsf): this;
	TranslatedByVec(V: MxNewMx3dGeVec): this;
	TranslatedBy2Points(P1: MxNewMx3dGePoint, P2: MxNewMx3dGePoint): this;
}
export declare class MxNewMx3dGeomCurve extends MxNewMx3dGeomObject {
	constructor(p?: object);
	Reversed(): this;
	Period(): number;
	Value(U: number): MxNewMx3dGePoint;
}
export declare class MxNewMx3dGeomConic extends MxNewMx3dGeomCurve {
	constructor(p?: object);
	SetAxis(theA1: MxNewMx3dGeAxis): void;
	SetLocation(theP: MxNewMx3dGePoint): void;
	SetPosition(theA2: MxNewMx3dGeCSYSR): void;
	Axis(): MxNewMx3dGeAxis;
	Location(): MxNewMx3dGePoint;
	Position(): MxNewMx3dGeCSYSR;
	XAxis(): MxNewMx3dGeAxis;
	YAxis(): MxNewMx3dGeAxis;
	Reverse(): void;
	Continuity(): MdGe.MxGAShapeEnum;
	IsCN(N: number): boolean;
}
export declare class MxNewMx3dGeomCircle extends MxNewMx3dGeomConic {
	constructor(theCSYSR: MxNewMx3dGeCSYSR, theRadius: number);
	SetRadius(R: number): void;
	Radius(): number;
	ReversedParameter(U: number): number;
	Eccentricity(): number;
	FirstParameter(): number;
	LastParameter(): number;
	IsClosed(): boolean;
	IsPeriodic(): boolean;
	D0(U: number, P: MxNewMx3dGePoint): void;
	D1(U: number, P: MxNewMx3dGePoint, V1: MxNewMx3dGeVec): void;
	D2(U: number, P: MxNewMx3dGePoint, V1: MxNewMx3dGeVec, V2: MxNewMx3dGeVec): void;
	D3(U: number, P: MxNewMx3dGePoint, V1: MxNewMx3dGeVec, V2: MxNewMx3dGeVec, V3: MxNewMx3dGeVec): void;
	DN(U: number, N: number): MxNewMx3dGeVec;
	Transform(T: MxNewMx3dGeTrsf): void;
	Copy(): MxNewMx3dGeomObject;
	Edge(p1: number, p2: number): MxNewMx3dShapeEdge;
	Wire(): MxNewMx3dShapeWire;
	OffsetCurve(Offset: number, V: MxNewMx3dGeDir, isNotCheckC0: boolean): MxNewMx3dShapeEdge;
	static MakeArcOfCircle(thePt1: UniPoint, thePt2: UniPoint, thePt3: UniPoint): MxNewMx3dShapeEdge;
	DynCast(theObject: MxNewMx3dGeomObject): this;
	static DownCast(theObject: MxNewMx3dGeomObject): MxNewMx3dGeomCircle;
}
export declare class MxNewMx3dGeomLine extends MxNewMx3dGeomCurve {
	constructor(A1: MxNewMx3dGeAxis);
	constructor(P: MxNewMx3dGePoint, V: MxNewMx3dGeDir);
	SetDirection(V: MxNewMx3dGeDir): void;
	SetLocation(P: MxNewMx3dGePoint): void;
	SetPosition(A1: MxNewMx3dGeAxis): void;
	Position(): MxNewMx3dGeAxis;
	Reverse(): void;
	ReversedParameter(U: number): number;
	FirstParameter(): number;
	LastParameter(): number;
	IsClosed(): boolean;
	IsPeriodic(): boolean;
	Continuity(): MdGe.MxGAShapeEnum;
	IsCN(N: number): boolean;
	D0(U: number, P: MxNewMx3dGePoint): void;
	D1(U: number, P: MxNewMx3dGePoint, V1: MxNewMx3dGeVec): void;
	D2(U: number, P: MxNewMx3dGePoint, V1: MxNewMx3dGeVec, V2: MxNewMx3dGeVec): void;
	D3(U: number, P: MxNewMx3dGePoint, V1: MxNewMx3dGeVec, V2: MxNewMx3dGeVec, V3: MxNewMx3dGeVec): void;
	DN(U: number, N: number): MxNewMx3dGeVec;
	Transform(T: MxNewMx3dGeTrsf): void;
	TransformedParameter(U: number, T: MxNewMx3dGeTrsf): number;
	ParametricTransformation(T: MxNewMx3dGeTrsf): number;
	Copy(): MxNewMx3dGeomObject;
	Edge(p1: number, p2: number): MxNewMx3dShapeEdge;
	OffsetCurve(Offset: number, V: MxNewMx3dGeDir, isNotCheckC0: boolean): MxNewMx3dShapeEdge;
	DynCast(theObject: MxNewMx3dGeomObject): this;
	static DownCast(theObject: MxNewMx3dGeomObject): MxNewMx3dGeomLine;
}
export declare class MxNewMx3dGeomEllipse extends MxNewMx3dGeomConic {
	constructor(A2: MxNewMx3dGeCSYSR, MajorRadius: number, MinorRadius: number);
	SetMajorRadius(MajorRadius: number): void;
	SetMinorRadius(MinorRadius: number): void;
	ReversedParameter(U: number): number;
	Directrix1(): MxNewMx3dGeAxis;
	Directrix2(): MxNewMx3dGeAxis;
	Eccentricity(): number;
	Focal(): number;
	Focus1(): MxNewMx3dGePoint;
	Focus2(): MxNewMx3dGePoint;
	MajorRadius(): number;
	MinorRadius(): number;
	Parameter(): number;
	FirstParameter(): number;
	LastParameter(): number;
	IsClosed(): boolean;
	IsPeriodic(): boolean;
	D0(U: number, P: MxNewMx3dGePoint): void;
	D1(U: number, P: MxNewMx3dGePoint, V1: MxNewMx3dGeVec): void;
	D2(U: number, P: MxNewMx3dGePoint, V1: MxNewMx3dGeVec, V2: MxNewMx3dGeVec): void;
	D3(U: number, P: MxNewMx3dGePoint, V1: MxNewMx3dGeVec, V2: MxNewMx3dGeVec, V3: MxNewMx3dGeVec): void;
	DN(U: number, N: number): MxNewMx3dGeVec;
	Transform(T: MxNewMx3dGeTrsf): void;
	Copy(): MxNewMx3dGeomObject;
	Edge(p1: number, p2: number): MxNewMx3dShapeEdge;
	Wire(): MxNewMx3dShapeWire;
	OffsetCurve(Offset: number, V: MxNewMx3dGeDir, isNotCheckC0: boolean): MxNewMx3dShapeEdge;
	DynCast(theObject: MxNewMx3dGeomObject): this;
	static DownCast(theObject: MxNewMx3dGeomObject): MxNewMx3dGeomEllipse;
}
export declare class MxNewMx3dGeomHyperbola extends MxNewMx3dGeomConic {
	constructor(A2: MxNewMx3dGeCSYSR, MajorRadius: number, MinorRadius: number);
	SetMajorRadius(MajorRadius: number): void;
	SetMinorRadius(MinorRadius: number): void;
	ReversedParameter(U: number): number;
	FirstParameter(): number;
	LastParameter(): number;
	IsClosed(): boolean;
	IsPeriodic(): boolean;
	Asymptote1(): MxNewMx3dGeAxis;
	Asymptote2(): MxNewMx3dGeAxis;
	ConjugateBranch1(): MxNewMx3dGeomHyperbola;
	ConjugateBranch2(): MxNewMx3dGeomHyperbola;
	Directrix1(): MxNewMx3dGeAxis;
	Directrix2(): MxNewMx3dGeAxis;
	Eccentricity(): number;
	Focal(): number;
	Focus1(): MxNewMx3dGePoint;
	Focus2(): MxNewMx3dGePoint;
	MajorRadius(): number;
	MinorRadius(): number;
	OtherBranch(): MxNewMx3dGeomHyperbola;
	Parameter(): number;
	D0(U: number, P: MxNewMx3dGePoint): void;
	D1(U: number, P: MxNewMx3dGePoint, V1: MxNewMx3dGeVec): void;
	D2(U: number, P: MxNewMx3dGePoint, V1: MxNewMx3dGeVec, V2: MxNewMx3dGeVec): void;
	D3(U: number, P: MxNewMx3dGePoint, V1: MxNewMx3dGeVec, V2: MxNewMx3dGeVec, V3: MxNewMx3dGeVec): void;
	DN(U: number, N: number): MxNewMx3dGeVec;
	Transform(T: MxNewMx3dGeTrsf): void;
	Copy(): MxNewMx3dGeomObject;
	Edge(p1: number, p2: number): MxNewMx3dShapeEdge;
	OffsetCurve(Offset: number, V: MxNewMx3dGeDir, isNotCheckC0: boolean): MxNewMx3dShapeEdge;
	DynCast(theObject: MxNewMx3dGeomObject): this;
	static DownCast(theObject: MxNewMx3dGeomObject): MxNewMx3dGeomHyperbola;
}
export declare class MxNewMx3dGeomParabola extends MxNewMx3dGeomConic {
	constructor(A2: MxNewMx3dGeCSYSR, Focal: number);
	SetFocal(Focal: number): void;
	ReversedParameter(U: number): number;
	FirstParameter(): number;
	LastParameter(): number;
	IsClosed(): boolean;
	IsPeriodic(): boolean;
	Directrix(): MxNewMx3dGeAxis;
	Eccentricity(): number;
	Focus(): MxNewMx3dGePoint;
	Focal(): number;
	Parameter(): number;
	D0(U: number, P: MxNewMx3dGePoint): void;
	D1(U: number, P: MxNewMx3dGePoint, V1: MxNewMx3dGeVec): void;
	D2(U: number, P: MxNewMx3dGePoint, V1: MxNewMx3dGeVec, V2: MxNewMx3dGeVec): void;
	D3(U: number, P: MxNewMx3dGePoint, V1: MxNewMx3dGeVec, V2: MxNewMx3dGeVec, V3: MxNewMx3dGeVec): void;
	DN(U: number, N: number): MxNewMx3dGeVec;
	Transform(T: MxNewMx3dGeTrsf): void;
	TransformedParameter(U: number, T: MxNewMx3dGeTrsf): number;
	ParametricTransformation(T: MxNewMx3dGeTrsf): number;
	Copy(): MxNewMx3dGeomObject;
	Edge(p1: number, p2: number): MxNewMx3dShapeEdge;
	OffsetCurve(Offset: number, V: MxNewMx3dGeDir, isNotCheckC0: boolean): MxNewMx3dShapeEdge;
	DynCast(theObject: MxNewMx3dGeomObject): this;
	static DownCast(theObject: MxNewMx3dGeomObject): MxNewMx3dGeomParabola;
}
export declare class MxNewMx3dMkObject extends MxNewMx3dBaseObject {
	constructor(p?: object);
}
export declare class MxNewMx3dMkBox extends MxNewMx3dMkObject {
	constructor(thePnt1: UniPoint, thePnt2: UniPoint);
	constructor(theDX: number, theDY: number, theDZ: number);
	constructor(theAxes: MxNewMx3dGeCSYSR, theDX: number, theDY: number, theDZ: number);
	Build(): void;
	Shape(): MxNewMx3dShapeObject;
	Shell(): MxNewMx3dShapeShell;
	Solid(): MxNewMx3dShapeSolid;
	BottomFace(): MxNewMx3dShapeFace;
	BackFace(): MxNewMx3dShapeFace;
	FrontFace(): MxNewMx3dShapeFace;
	LeftFace(): MxNewMx3dShapeFace;
	RightFace(): MxNewMx3dShapeFace;
	TopFace(): MxNewMx3dShapeFace;
	IsDone(): boolean;
}
export declare class MxNewMx3dMkCone extends MxNewMx3dMkObject {
	constructor(Axes: MxNewMx3dGeCSYSR, R1: number, R2: number, H: number, angle?: number);
	Build(): void;
	Shape(): MxNewMx3dShapeObject;
	Face(): MxNewMx3dShapeFace;
	Shell(): MxNewMx3dShapeShell;
	Solid(): MxNewMx3dShapeSolid;
	IsDone(): boolean;
}
export declare class MxNewMx3dMkCylinder extends MxNewMx3dMkObject {
	constructor(Axes: MxNewMx3dGeCSYSR, R: number, H: number, Angle?: number);
	Build(): void;
	Shape(): MxNewMx3dShapeObject;
	Face(): MxNewMx3dShapeFace;
	Shell(): MxNewMx3dShapeShell;
	Solid(): MxNewMx3dShapeSolid;
	IsDone(): boolean;
}
export declare class MxNewMx3dMkRevol extends MxNewMx3dMkObject {
	constructor(S: MxNewMx3dShapeObject, A: MxNewMx3dGeAxis, D?: number);
	Build(): void;
	Shape(): MxNewMx3dShapeObject;
	IsDone(): boolean;
}
export declare class MxNewMx3dMkSphere extends MxNewMx3dMkObject {
	constructor(Axes: MxNewMx3dGeCSYSR, R: number);
	constructor(Axes: MxNewMx3dGeCSYSR, R: number, angle: number);
	constructor(Axes: MxNewMx3dGeCSYSR, R: number, angle1: number, angle2: number);
	constructor(Axes: MxNewMx3dGeCSYSR, R: number, angle1: number, angle2: number, angle3: number);
	Build(): void;
	Shape(): MxNewMx3dShapeObject;
	Face(): MxNewMx3dShapeFace;
	Shell(): MxNewMx3dShapeShell;
	Solid(): MxNewMx3dShapeSolid;
	IsDone(): boolean;
}
export declare class MxNewMx3dMkTorus extends MxNewMx3dMkObject {
	constructor(Axes: MxNewMx3dGeCSYSR, R1: number, R2: number);
	constructor(Axes: MxNewMx3dGeCSYSR, R1: number, R2: number, angle: number);
	constructor(Axes: MxNewMx3dGeCSYSR, R1: number, R2: number, angle1: number, angle2: number);
	constructor(Axes: MxNewMx3dGeCSYSR, R1: number, R2: number, angle1: number, angle2: number, angle: number);
	Build(): void;
	Shape(): MxNewMx3dShapeObject;
	Face(): MxNewMx3dShapeFace;
	Shell(): MxNewMx3dShapeShell;
	Solid(): MxNewMx3dShapeSolid;
	IsDone(): boolean;
}
export declare class MxNewMx3dMkPipe extends MxNewMx3dMkObject {
	constructor(Spine: MxNewMx3dShapeWire, Profile: MxNewMx3dShapeObject);
	constructor(Spine: MxNewMx3dShapeWire, Profile: MxNewMx3dShapeObject, aMode: MdGe.MxGFTrihedron, ForceApproxC1: boolean);
	Build(): void;
	Shape(): MxNewMx3dShapeObject;
	IsDone(): boolean;
}
export declare class MxNewMx3dMkPrism extends MxNewMx3dMkObject {
	constructor(S: MxNewMx3dShapeObject, V: MxNewMx3dGeVec, Copy: boolean, Canonize: boolean);
	constructor(S: MxNewMx3dShapeObject, D: MxNewMx3dGeDir, Inf: boolean, Copy: boolean, Canonize: boolean);
	Build(): void;
	Shape(): MxNewMx3dShapeObject;
	IsDone(): boolean;
}
export declare class MxNewMx3dMkWedge extends MxNewMx3dMkObject {
	constructor(dx: number, dy: number, dz: number, ltx: number);
	constructor(Axes: MxNewMx3dGeCSYSR, dx: number, dy: number, dz: number, ltx: number);
	constructor(dx: number, dy: number, dz: number, xmin: number, zmin: number, xmax: number, zmax: number);
	constructor(Axes: MxNewMx3dGeCSYSR, dx: number, dy: number, dz: number, xmin: number, zmin: number, xmax: number, zmax: number);
	Build(): void;
	Shape(): MxNewMx3dShapeObject;
	Shell(): MxNewMx3dShapeShell;
	Solid(): MxNewMx3dShapeSolid;
	IsDone(): boolean;
}
export declare class MxNewMx3dMkLoft extends MxNewMx3dMkObject {
	constructor(isSolid?: boolean, ruled?: boolean, pres3d?: number);
	AddWire(wire: MxNewMx3dShapeWire): void;
	AddVertex(aVertex: MxNewMx3dShapeVertex): void;
	SetSmoothing(UseSmoothing: boolean): void;
	SetContinuity(C: MdGe.MxGAShapeEnum): void;
	Continuity(): MdGe.MxGAShapeEnum;
	UseSmoothing(): boolean;
	Build(): void;
	Shape(): MxNewMx3dShapeObject;
	IsDone(): boolean;
}
export declare class MxNewMx3dMkPolygon extends MxNewMx3dMkObject {
	constructor();
	Add(P: MxNewMx3dGePoint): void;
	Added(): boolean;
	Close(): void;
	FirstVertex(): MxNewMx3dShapeVertex;
	LastVertex(): MxNewMx3dShapeVertex;
	Build(): void;
	Shape(): MxNewMx3dShapeObject;
	IsDone(): boolean;
	Edge(): MxNewMx3dShapeEdge;
	Wire(): MxNewMx3dShapeWire;
}
export declare class MxNewMx3dMkFace extends MxNewMx3dMkObject {
	constructor(theWire: MxNewMx3dShapeWire, OnlyPlane?: boolean);
	Build(): void;
	Shape(): MxNewMx3dShapeObject;
	Face(): MxNewMx3dShapeFace;
	IsDone(): boolean;
}
export declare class MxNewMx3dMkThickSolid extends MxNewMx3dMkObject {
	constructor();
	MakeThickSolidBySimple(theS: MxNewMx3dShapeObject, theOffsetValue: number): void;
	MakeThickSolidByJoin(S: MxNewMx3dShapeObject, ClosingFaces: MxNewMx3dShapeObject[], Offset: number, Tol: number, Mode?: MdGe.MxOffsetModeEnum, Intersection?: boolean, SelfInter?: boolean, Join?: MdGe.MxGAJoinTypeEnum, RemoveIntEdges?: boolean): void;
	Build(): void;
	Shape(): MxNewMx3dShapeObject;
	IsDone(): boolean;
}
export declare class Mx3dWireTool {
	static ConnectEdgesToWires(edges: MxNewMx3dShapeObject[], toler: number, shared: boolean): MxNewMx3dShapeObject[];
	static ConnectWiresToWires(wires: MxNewMx3dShapeObject[], toler: number, shared: boolean): MxNewMx3dShapeObject[];
	static EdgeToWire(theEdge: MxNewMx3dShapeEdge): MxNewMx3dShapeWire;
}
/**
 * 表示二维点数组。
 */
export declare class MxNewMdGeArray2OfPnt extends MxNewMx3dBaseObject {
	constructor(p1?: number | MxNewMx3dGePoint | object, p2?: number, p3?: number, p4?: number, p5?: number);
	Init(thePoint: MxNewMx3dGePoint): void;
	Size(): number;
	Length(): number;
	NbRows(): number;
	NbColumns(): number;
	RowLength(): number;
	ColLength(): number;
	LowerRow(): number;
	UpperRow(): number;
	LowerCol(): number;
	UpperCol(): number;
	IsDeletable(): boolean;
	Value(theRow: number, theCol: number): MxNewMx3dGePoint;
	SetValue(theRow: number, theCol: number, thePoint: MxNewMx3dGePoint): void;
	Resize(theRowLower: number, theRowUpper: number, theColLower: number, theColUpper: number, theToCopyData: boolean): void;
}
/**
 * 表示二维实数数组。
 */
export declare class MxNewMdGeArray2OfReal extends MxNewMx3dBaseObject {
	constructor(p1?: number | object, p2?: number, p3?: number, p4?: number, p5?: number);
	Init(theReal: number): void;
	Size(): number;
	Length(): number;
	NbRows(): number;
	NbColumns(): number;
	RowLength(): number;
	ColLength(): number;
	LowerRow(): number;
	UpperRow(): number;
	LowerCol(): number;
	UpperCol(): number;
	IsDeletable(): boolean;
	Value(theRow: number, theCol: number): number;
	SetValue(theRow: number, theCol: number, theReal: number): void;
	Resize(theRowLower: number, theRowUpper: number, theColLower: number, theColUpper: number, theToCopyData: boolean): void;
}
export declare class MxNewMx3dGeomBoundedCurve extends MxNewMx3dGeomCurve {
	constructor(p?: object);
}
export declare class MxNewMx3dGeomBSplineCurve extends MxNewMx3dGeomBoundedCurve {
	constructor(Poles: MxNewMx3dGePoint[], Knots: number[], Multiplicities: number[], Degree: number);
	constructor(Poles: MxNewMx3dGePoint[], Weights: number[], Knots: number[], Multiplicities: number[], Degree: number);
	IncreaseDegree(Degree: number): void;
	IncreaseMultiplicity(Index: number, M: number): void;
	IncreaseMultiplicity(I1: number, I2: number, M: number): void;
	IncrementMultiplicity(I1: number, I2: number, M: number): void;
	InsertKnot(U: number, M?: number, ParametricTolerance?: number, Add?: boolean): void;
	InsertKnots(Knots: number[], Mults: number[], ParametricTolerance?: number, Add?: boolean): void;
	RemoveKnot(Index: number, M: number, Tolerance: number): boolean;
	Reverse(): void;
	ReversedParameter(U: number): number;
	Segment(U1: number, U2: number): void;
	SetKnot(Index: number, K: number): void;
	SetKnot(Index: number, K: number, M: number): void;
	SetKnots(dK: number[]): void;
	SetPeriodic(): void;
	SetOrigin(Index: number): void;
	SetOrigin(U: number, Tol: number): void;
	SetNotPeriodic(): void;
	SetPole(Index: number, P: UniPoint): void;
	SetPole(Index: number, P: UniPoint, Weight: number): void;
	SetWeight(Index: number, Weight: number): void;
	IsCN(N: number): boolean;
	IsG1(theTf: number, theTl: number, theAngTol: number): boolean;
	IsClosed(): boolean;
	IsPeriodic(): boolean;
	IsRational(): boolean;
	Continuity(): MdGe.MxGAShapeEnum;
	Degree(): number;
	D0(U: number, P: MxNewMx3dGePoint): void;
	D1(U: number, P: MxNewMx3dGePoint, V1: MxNewMx3dGeVec): void;
	D2(U: number, P: MxNewMx3dGePoint, V1: MxNewMx3dGeVec, V2: MxNewMx3dGeVec): void;
	D3(U: number, P: MxNewMx3dGePoint, V1: MxNewMx3dGeVec, V2: MxNewMx3dGeVec, V3: MxNewMx3dGeVec): void;
	DN(U: number, N: number): MxNewMx3dGeVec;
	LocalValue(U: number, FromK1: number, ToK2: number): MxNewMx3dGePoint;
	LocalD0(U: number, FromK1: number, ToK2: number, P: MxNewMx3dGePoint): void;
	LocalD1(U: number, FromK1: number, ToK2: number, P: MxNewMx3dGePoint, V1: MxNewMx3dGeVec): void;
	LocalD2(U: number, FromK1: number, ToK2: number, P: MxNewMx3dGePoint, V1: MxNewMx3dGeVec, V2: MxNewMx3dGeVec): void;
	LocalD3(U: number, FromK1: number, ToK2: number, P: MxNewMx3dGePoint, V1: MxNewMx3dGeVec, V2: MxNewMx3dGeVec, V3: MxNewMx3dGeVec): void;
	LocalDN(U: number, FromK1: number, ToK2: number, N: number): MxNewMx3dGeVec;
	EndPoint(): MxNewMx3dGePoint;
	FirstUKnotIndex(): number;
	FirstParameter(): number;
	Knot(Index: number): number;
	Knots(): number[];
	LastUKnotIndex(): number;
	LastParameter(): number;
	Multiplicity(Index: number): number;
	Multiplicities(): number[];
	NbKnots(): number;
	NbPoles(): number;
	Pole(Index: number): MxNewMx3dGePoint;
	Poles(): MxNewMx3dGePoint[];
	StartPoint(): MxNewMx3dGePoint;
	Weight(Index: number): number;
	Weights(): number[];
	Transform(T: MxNewMx3dGeTrsf): void;
	Copy(): MxNewMx3dGeomObject;
	Edge(p1: number, p2: number): MxNewMx3dShapeEdge;
	Wire(): MxNewMx3dShapeWire;
	OffsetCurve(Offset: number, V: UniDir, isNotCheckC0: boolean): MxNewMx3dShapeEdge;
	IsEqual(theOther: MxNewMx3dGeomBSplineCurve, thePreci: number): boolean;
	DynCast(theObject: MxNewMx3dGeomObject): this;
	static DownCast(theObject: MxNewMx3dGeomObject): MxNewMx3dGeomBSplineCurve;
}
export declare class MxNewMx3dGeomBezierCurve extends MxNewMx3dGeomBoundedCurve {
	constructor(CurvePoles: MxNewMx3dGePoint[], PoleWeights?: number[]);
	Increase(Degree: number): void;
	InsertPoleAfter(Index: number, P: MxNewMx3dGePoint, Weight?: number): void;
	InsertPoleBefore(Index: number, P: MxNewMx3dGePoint, Weight?: number): void;
	RemovePole(Index: number): void;
	Reverse(): void;
	ReversedParameter(U: number): number;
	Segment(U1: number, U2: number): void;
	SetPole(Index: number, P: MxNewMx3dGePoint, Weight?: number): void;
	SetWeight(Index: number, Weight: number): void;
	IsClosed(): boolean;
	IsCN(N: number): boolean;
	IsPeriodic(): boolean;
	IsRational(): boolean;
	Continuity(): MdGe.MxGAShapeEnum;
	Degree(): number;
	D0(U: number, P: MxNewMx3dGePoint): void;
	D1(U: number, P: MxNewMx3dGePoint, V1: MxNewMx3dGeVec): void;
	D2(U: number, P: MxNewMx3dGePoint, V1: MxNewMx3dGeVec, V2: MxNewMx3dGeVec): void;
	D3(U: number, P: MxNewMx3dGePoint, V1: MxNewMx3dGeVec, V2: MxNewMx3dGeVec, V3: MxNewMx3dGeVec): void;
	DN(U: number, N: number): MxNewMx3dGeVec;
	StartPoint(): MxNewMx3dGePoint;
	EndPoint(): MxNewMx3dGePoint;
	FirstParameter(): number;
	LastParameter(): number;
	NbPoles(): number;
	Pole(Index: number): MxNewMx3dGePoint;
	Poles(): MxNewMx3dGePoint[];
	Weight(Index: number): number;
	Weights(): number[];
	Transform(T: MxNewMx3dGeTrsf): void;
	Copy(): MxNewMx3dGeomObject;
	Edge(p1: number, p2: number): MxNewMx3dShapeEdge;
	Wire(): MxNewMx3dShapeWire;
	OffsetCurve(Offset: number, V: UniDir, isNotCheckC0: boolean): MxNewMx3dShapeEdge;
	DynCast(theObject: MxNewMx3dGeomObject): this;
	static DownCast(theObject: MxNewMx3dGeomObject): MxNewMx3dGeomBezierCurve;
}
export declare class MxNewMx3dGeomSurface extends MxNewMx3dGeomObject {
	constructor(p?: object);
	UReversed(): this;
	VReversed(): this;
	TransformParameters(UV: [
		dU: number,
		dV: number
	], T: MxNewMx3dGeTrsf): void;
	UPeriod(): number;
	VPeriod(): number;
	Value(U: number, V: number): MxNewMx3dGePoint;
	DynamicType(): string;
}
export declare class MxNewMx3dGeomElementarySurface extends MxNewMx3dGeomSurface {
	constructor(p?: object);
	SetAxis(theA1: MxNewMx3dGeAxis): void;
	SetLocation(theLoc: MxNewMx3dGePoint): void;
	SetPosition(theAx3: MxNewMx3dGeCSYSR): void;
	Axis(): MxNewMx3dGeAxis;
	Location(): MxNewMx3dGePoint;
	Position(): MxNewMx3dGeCSYSR;
	UReverse(): void;
	VReverse(): void;
	Continuity(): MdGe.MxGAShapeEnum;
	IsCNu(N: number): boolean;
	IsCNv(N: number): boolean;
	DynamicType(): string;
}
export declare class MxNewMx3dGeomPlane extends MxNewMx3dGeomElementarySurface {
	constructor(A3: MxNewMx3dGeCSYSR);
	constructor(P: UniPoint, V: UniDir);
	constructor(A: number, B: number, C: number, D: number);
	UReverse(): void;
	UReversedParameter(U: number): number;
	VReverse(): void;
	VReversedParameter(V: number): number;
	TransformParameters(UV: [
		dU: number,
		dV: number
	], T: MxNewMx3dGeTrsf): void;
	Bounds(U1U2V1V2: [
		dU1: number,
		dU2: number,
		dV1: number,
		dV2: number
	]): void;
	Coefficients(ABCD: [
		dA: number,
		dB: number,
		dC: number,
		dD: number
	]): void;
	IsUClosed(): boolean;
	IsVClosed(): boolean;
	IsUPeriodic(): boolean;
	IsVPeriodic(): boolean;
	D0(U: number, V: number, P: MxNewMx3dGePoint): void;
	D1(U: number, V: number, P: MxNewMx3dGePoint, D1U: MxNewMx3dGeVec, D1V: MxNewMx3dGeVec): void;
	D2(U: number, V: number, P: MxNewMx3dGePoint, D1U: MxNewMx3dGeVec, D1V: MxNewMx3dGeVec, D2U: MxNewMx3dGeVec, D2V: MxNewMx3dGeVec, D2UV: MxNewMx3dGeVec): void;
	D3(U: number, V: number, P: MxNewMx3dGePoint, D1U: MxNewMx3dGeVec, D1V: MxNewMx3dGeVec, D2U: MxNewMx3dGeVec, D2V: MxNewMx3dGeVec, D2UV: MxNewMx3dGeVec, D3U: MxNewMx3dGeVec, D3V: MxNewMx3dGeVec, D3UUV: MxNewMx3dGeVec, D3UVV: MxNewMx3dGeVec): void;
	DN(U: number, V: number, Nu: number, Nv: number): MxNewMx3dGeVec;
	Transform(T: MxNewMx3dGeTrsf): void;
	Copy(): MxNewMx3dGeomObject;
	DynamicType(): string;
	DynCast(theObject: MxNewMx3dGeomObject): this;
	static DownCast(theObject: MxNewMx3dGeomObject): MxNewMx3dGeomPlane;
	Face(TolDegen: number): MxNewMx3dShapeFace;
	Face(W: MxNewMx3dShapeWire, Inside: boolean): MxNewMx3dShapeFace;
	Face(UMin: number, UMax: number, VMin: number, VMax: number, TolDegen: number): MxNewMx3dShapeFace;
}
export declare class MxNewMx3dGeomConicalSurface extends MxNewMx3dGeomElementarySurface {
	constructor(A3: MxNewMx3dGeCSYSR, Ang: number, Radius: number);
	SetRadius(R: number): void;
	SetSemiAngle(Ang: number): void;
	UReversedParameter(U: number): number;
	VReversedParameter(V: number): number;
	VReverse(): void;
	TransformParameters(UV: [
		dU: number,
		dV: number
	], T: MxNewMx3dGeTrsf): void;
	Apex(): MxNewMx3dGePoint;
	Bounds(U1U2V1V2: [
		dU1: number,
		dU2: number,
		dV1: number,
		dV2: number
	]): void;
	Coefficients(A1A2A3B1B2B3C1C2C3D: [
		A1: number,
		A2: number,
		A3: number,
		B1: number,
		B2: number,
		B3: number,
		C1: number,
		C2: number,
		C3: number,
		D: number
	]): void;
	RefRadius(): number;
	SemiAngle(): number;
	IsUClosed(): boolean;
	IsVClosed(): boolean;
	IsUPeriodic(): boolean;
	IsVPeriodic(): boolean;
	D0(U: number, V: number, P: MxNewMx3dGePoint): void;
	D1(U: number, V: number, P: MxNewMx3dGePoint, D1U: MxNewMx3dGeVec, D1V: MxNewMx3dGeVec): void;
	D2(U: number, V: number, P: MxNewMx3dGePoint, D1U: MxNewMx3dGeVec, D1V: MxNewMx3dGeVec, D2U: MxNewMx3dGeVec, D2V: MxNewMx3dGeVec, D2UV: MxNewMx3dGeVec): void;
	D3(U: number, V: number, P: MxNewMx3dGePoint, D1U: MxNewMx3dGeVec, D1V: MxNewMx3dGeVec, D2U: MxNewMx3dGeVec, D2V: MxNewMx3dGeVec, D2UV: MxNewMx3dGeVec, D3U: MxNewMx3dGeVec, D3V: MxNewMx3dGeVec, D3UUV: MxNewMx3dGeVec, D3UVV: MxNewMx3dGeVec): void;
	DN(U: number, V: number, Nu: number, Nv: number): MxNewMx3dGeVec;
	Transform(T: MxNewMx3dGeTrsf): void;
	Copy(): MxNewMx3dGeomObject;
	DynamicType(): string;
	DynCast(theObject: MxNewMx3dGeomObject): this;
	static DownCast(theObject: MxNewMx3dGeomObject): MxNewMx3dGeomConicalSurface;
	Face(TolDegen: number): MxNewMx3dShapeFace;
	Face(W: MxNewMx3dShapeWire, Inside: boolean): MxNewMx3dShapeFace;
	Face(UMin: number, UMax: number, VMin: number, VMax: number, TolDegen: number): MxNewMx3dShapeFace;
}
export declare class MxNewMx3dGeomCylindricalSurface extends MxNewMx3dGeomElementarySurface {
	constructor(A3: MxNewMx3dGeCSYSR, Radius: number);
	SetRadius(R: number): void;
	UReversedParameter(U: number): number;
	VReversedParameter(V: number): number;
	TransformParameters(UV: [
		dU: number,
		dV: number
	], T: MxNewMx3dGeTrsf): void;
	Bounds(U1U2V1V2: [
		dU1: number,
		dU2: number,
		dV1: number,
		dV2: number
	]): void;
	Coefficients(A1A2A3B1B2B3C1C2C3D: [
		A1: number,
		A2: number,
		A3: number,
		B1: number,
		B2: number,
		B3: number,
		C1: number,
		C2: number,
		C3: number,
		D: number
	]): void;
	Radius(): number;
	IsUClosed(): boolean;
	IsVClosed(): boolean;
	IsUPeriodic(): boolean;
	IsVPeriodic(): boolean;
	D0(U: number, V: number, P: MxNewMx3dGePoint): void;
	D1(U: number, V: number, P: MxNewMx3dGePoint, D1U: MxNewMx3dGeVec, D1V: MxNewMx3dGeVec): void;
	D2(U: number, V: number, P: MxNewMx3dGePoint, D1U: MxNewMx3dGeVec, D1V: MxNewMx3dGeVec, D2U: MxNewMx3dGeVec, D2V: MxNewMx3dGeVec, D2UV: MxNewMx3dGeVec): void;
	D3(U: number, V: number, P: MxNewMx3dGePoint, D1U: MxNewMx3dGeVec, D1V: MxNewMx3dGeVec, D2U: MxNewMx3dGeVec, D2V: MxNewMx3dGeVec, D2UV: MxNewMx3dGeVec, D3U: MxNewMx3dGeVec, D3V: MxNewMx3dGeVec, D3UUV: MxNewMx3dGeVec, D3UVV: MxNewMx3dGeVec): void;
	DN(U: number, V: number, Nu: number, Nv: number): MxNewMx3dGeVec;
	Transform(T: MxNewMx3dGeTrsf): void;
	Copy(): MxNewMx3dGeomObject;
	DynamicType(): string;
	DynCast(theObject: MxNewMx3dGeomObject): this;
	static DownCast(theObject: MxNewMx3dGeomObject): MxNewMx3dGeomCylindricalSurface;
	Face(TolDegen: number): MxNewMx3dShapeFace;
	Face(W: MxNewMx3dShapeWire, Inside: boolean): MxNewMx3dShapeFace;
	Face(UMin: number, UMax: number, VMin: number, VMax: number, TolDegen: number): MxNewMx3dShapeFace;
}
export declare class MxNewMx3dGeomSphericalSurface extends MxNewMx3dGeomElementarySurface {
	constructor(A3: MxNewMx3dGeCSYSR, Radius: number);
	SetRadius(R: number): void;
	UReversedParameter(U: number): number;
	VReversedParameter(V: number): number;
	Area(): number;
	Bounds(U1U2V1V2: [
		dU1: number,
		dU2: number,
		dV1: number,
		dV2: number
	]): void;
	Coefficients(A1A2A3B1B2B3C1C2C3D: [
		A1: number,
		A2: number,
		A3: number,
		B1: number,
		B2: number,
		B3: number,
		C1: number,
		C2: number,
		C3: number,
		D: number
	]): void;
	Radius(): number;
	Volume(): number;
	IsUClosed(): boolean;
	IsVClosed(): boolean;
	IsUPeriodic(): boolean;
	IsVPeriodic(): boolean;
	D0(U: number, V: number, P: MxNewMx3dGePoint): void;
	D1(U: number, V: number, P: MxNewMx3dGePoint, D1U: MxNewMx3dGeVec, D1V: MxNewMx3dGeVec): void;
	D2(U: number, V: number, P: MxNewMx3dGePoint, D1U: MxNewMx3dGeVec, D1V: MxNewMx3dGeVec, D2U: MxNewMx3dGeVec, D2V: MxNewMx3dGeVec, D2UV: MxNewMx3dGeVec): void;
	D3(U: number, V: number, P: MxNewMx3dGePoint, D1U: MxNewMx3dGeVec, D1V: MxNewMx3dGeVec, D2U: MxNewMx3dGeVec, D2V: MxNewMx3dGeVec, D2UV: MxNewMx3dGeVec, D3U: MxNewMx3dGeVec, D3V: MxNewMx3dGeVec, D3UUV: MxNewMx3dGeVec, D3UVV: MxNewMx3dGeVec): void;
	DN(U: number, V: number, Nu: number, Nv: number): MxNewMx3dGeVec;
	Transform(T: MxNewMx3dGeTrsf): void;
	Copy(): MxNewMx3dGeomObject;
	DynamicType(): string;
	DynCast(theObject: MxNewMx3dGeomObject): this;
	static DownCast(theObject: MxNewMx3dGeomObject): MxNewMx3dGeomSphericalSurface;
	Face(TolDegen: number): MxNewMx3dShapeFace;
	Face(W: MxNewMx3dShapeWire, Inside: boolean): MxNewMx3dShapeFace;
	Face(UMin: number, UMax: number, VMin: number, VMax: number, TolDegen: number): MxNewMx3dShapeFace;
}
export declare class MxNewMx3dGeomToroidalSurface extends MxNewMx3dGeomElementarySurface {
	constructor(A3: MxNewMx3dGeCSYSR, MajorRadius: number, MinorRadius: number);
	SetMajorRadius(MajorRadius: number): void;
	SetMinorRadius(MinorRadius: number): void;
	UReversedParameter(U: number): number;
	VReversedParameter(V: number): number;
	Area(): number;
	Bounds(U1U2V1V2: [
		dU1: number,
		dU2: number,
		dV1: number,
		dV2: number
	]): void;
	Coefficients(Coef: number[]): void;
	MajorRadius(): number;
	MinorRadius(): number;
	Volume(): number;
	IsUClosed(): boolean;
	IsVClosed(): boolean;
	IsUPeriodic(): boolean;
	IsVPeriodic(): boolean;
	D0(U: number, V: number, P: MxNewMx3dGePoint): void;
	D1(U: number, V: number, P: MxNewMx3dGePoint, D1U: MxNewMx3dGeVec, D1V: MxNewMx3dGeVec): void;
	D2(U: number, V: number, P: MxNewMx3dGePoint, D1U: MxNewMx3dGeVec, D1V: MxNewMx3dGeVec, D2U: MxNewMx3dGeVec, D2V: MxNewMx3dGeVec, D2UV: MxNewMx3dGeVec): void;
	D3(U: number, V: number, P: MxNewMx3dGePoint, D1U: MxNewMx3dGeVec, D1V: MxNewMx3dGeVec, D2U: MxNewMx3dGeVec, D2V: MxNewMx3dGeVec, D2UV: MxNewMx3dGeVec, D3U: MxNewMx3dGeVec, D3V: MxNewMx3dGeVec, D3UUV: MxNewMx3dGeVec, D3UVV: MxNewMx3dGeVec): void;
	DN(U: number, V: number, Nu: number, Nv: number): MxNewMx3dGeVec;
	Transform(T: MxNewMx3dGeTrsf): void;
	Copy(): MxNewMx3dGeomObject;
	DynamicType(): string;
	DynCast(theObject: MxNewMx3dGeomObject): this;
	static DownCast(theObject: MxNewMx3dGeomObject): MxNewMx3dGeomToroidalSurface;
	Face(TolDegen: number): MxNewMx3dShapeFace;
	Face(W: MxNewMx3dShapeWire, Inside: boolean): MxNewMx3dShapeFace;
	Face(UMin: number, UMax: number, VMin: number, VMax: number, TolDegen: number): MxNewMx3dShapeFace;
}
export declare class MxNewMx3dGeomBoundedSurface extends MxNewMx3dGeomSurface {
	constructor(p?: object);
	DynamicType(): string;
}
export declare class MxNewMx3dGeomBSplineSurface extends MxNewMx3dGeomBoundedSurface {
	constructor(Poles: MxNewMx3dGePoint[][], dUKnots: number[], dVKnots: number[], iUMults: number[], iVMults: number[], UDegree: number, VDegree: number, UPeriodic: boolean, VPeriodic: boolean);
	constructor(Poles: MxNewMx3dGePoint[][], dWeights: number[][], dUKnots: number[], dVKnots: number[], iUMults: number[], iVMults: number[], UDegree: number, VDegree: number, UPeriodic: boolean, VPeriodic: boolean);
	ExchangeUV(): void;
	SetUPeriodic(): void;
	SetVPeriodic(): void;
	PeriodicNormalization(UV: [
		dU: number,
		dV: number
	]): void;
	SetUOrigin(Index: number): void;
	SetVOrigin(Index: number): void;
	SetUNotPeriodic(): void;
	SetVNotPeriodic(): void;
	UReverse(): void;
	VReverse(): void;
	UReversedParameter(U: number): number;
	VReversedParameter(V: number): number;
	IncreaseDegree(UDegree: number, VDegree: number): void;
	InsertUKnots(dKnots: number[], iMults: number[], dParametricTolerance: number, Add: boolean): void;
	InsertVKnots(dKnots: number[], iMults: number[], dParametricTolerance: number, Add: boolean): void;
	RemoveUKnot(iIndex: number, iM: number, dTolerance: number): boolean;
	RemoveVKnot(iIndex: number, iM: number, dTolerance: number): boolean;
	IncreaseUMultiplicity(UIndex: number, M: number): void;
	IncreaseUMultiplicity(FromI1: number, ToI2: number, M: number): void;
	IncrementUMultiplicity(FromI1: number, ToI2: number, Step: number): void;
	IncreaseVMultiplicity(VIndex: number, M: number): void;
	IncreaseVMultiplicity(FromI1: number, ToI2: number, M: number): void;
	IncrementVMultiplicity(FromI1: number, ToI2: number, Step: number): void;
	InsertUKnot(U: number, M: number, ParametricTolerance: number, Add: boolean): void;
	InsertVKnot(V: number, M: number, ParametricTolerance: number, Add: boolean): void;
	Segment(U1: number, U2: number, V1: number, V2: number): void;
	CheckAndSegment(U1: number, U2: number, V1: number, V2: number): void;
	SetUKnot(UIndex: number, K: number): void;
	SetUKnot(UIndex: number, K: number, M: number): void;
	SetVKnot(VIndex: number, K: number): void;
	SetVKnot(VIndex: number, K: number, M: number): void;
	SetUKnots(dUK: number[]): void;
	SetVKnots(dVK: number[]): void;
	LocateU(U: number, ParametricTolerance: number, I1I2: [
		iI1: number,
		iI2: number
	], WithKnotRepetition: boolean): void;
	LocateV(V: number, ParametricTolerance: number, I1I2: [
		iI1: number,
		iI2: number
	], WithKnotRepetition: boolean): void;
	SetPole(UIndex: number, VIndex: number, P: MxNewMx3dGePoint): void;
	SetPole(UIndex: number, VIndex: number, P: MxNewMx3dGePoint, Weight: number): void;
	SetPoleCol(VIndex: number, CPoles: MxNewMx3dGePoint[]): void;
	SetPoleCol(VIndex: number, CPoles: MxNewMx3dGePoint[], dCPoleWeights: number[]): void;
	SetPoleRow(UIndex: number, CPoles: MxNewMx3dGePoint[]): void;
	SetPoleRow(UIndex: number, CPoles: MxNewMx3dGePoint[], dCPoleWeights: number[]): void;
	SetWeight(UIndex: number, VIndex: number, Weight: number): void;
	SetWeightCol(VIndex: number, dCPoleWeights: number[]): void;
	SetWeightRow(UIndex: number, dCPoleWeights: number[]): void;
	MovePoint(U: number, V: number, P: MxNewMx3dGePoint, UIndex1: number, UIndex2: number, VIndex1: number, VIndex2: number, UFULVFVL: [
		iUF: number,
		iUL: number,
		iVF: number,
		iVL: number
	]): void;
	IsUClosed(): boolean;
	IsVClosed(): boolean;
	IsCNu(N: number): boolean;
	IsCNv(N: number): boolean;
	IsUPeriodic(): boolean;
	IsURational(): boolean;
	IsVPeriodic(): boolean;
	IsVRational(): boolean;
	Bounds(U1U2V1V2: [
		dU1: number,
		dU2: number,
		dV1: number,
		dV2: number
	]): void;
	Continuity(): MdGe.MxGAShapeEnum;
	FirstUKnotIndex(): number;
	FirstVKnotIndex(): number;
	LastUKnotIndex(): number;
	LastVKnotIndex(): number;
	NbUKnots(): number;
	NbUPoles(): number;
	NbVKnots(): number;
	NbVPoles(): number;
	Pole(UIndex: number, VIndex: number): MxNewMx3dGePoint;
	Poles(): MxNewMx3dGePoint[][];
	UDegree(): number;
	UKnot(UIndex: number): number;
	UKnots(): number[];
	UKnotSequence(): number[];
	UMultiplicity(UIndex: number): number;
	UMultiplicities(): number[];
	VDegree(): number;
	VKnot(VIndex: number): number;
	VKnots(): number[];
	VKnotSequence(): number[];
	VMultiplicity(VIndex: number): number;
	VMultiplicities(): number[];
	Weight(UIndex: number, VIndex: number): number;
	Weights(): number[][];
	D0(U: number, V: number, P: MxNewMx3dGePoint): void;
	D1(U: number, V: number, P: MxNewMx3dGePoint, D1U: MxNewMx3dGeVec, D1V: MxNewMx3dGeVec): void;
	D2(U: number, V: number, P: MxNewMx3dGePoint, D1U: MxNewMx3dGeVec, D1V: MxNewMx3dGeVec, D2U: MxNewMx3dGeVec, D2V: MxNewMx3dGeVec, D2UV: MxNewMx3dGeVec): void;
	D3(U: number, V: number, P: MxNewMx3dGePoint, D1U: MxNewMx3dGeVec, D1V: MxNewMx3dGeVec, D2U: MxNewMx3dGeVec, D2V: MxNewMx3dGeVec, D2UV: MxNewMx3dGeVec, D3U: MxNewMx3dGeVec, D3V: MxNewMx3dGeVec, D3UUV: MxNewMx3dGeVec, D3UVV: MxNewMx3dGeVec): void;
	DN(U: number, V: number, Nu: number, Nv: number): MxNewMx3dGeVec;
	LocalD0(U: number, V: number, FromUK1: number, ToUK2: number, FromVK1: number, ToVK2: number, P: MxNewMx3dGePoint): void;
	LocalD1(U: number, V: number, FromUK1: number, ToUK2: number, FromVK1: number, ToVK2: number, P: MxNewMx3dGePoint, D1U: MxNewMx3dGeVec, D1V: MxNewMx3dGeVec): void;
	LocalD2(U: number, V: number, FromUK1: number, ToUK2: number, FromVK1: number, ToVK2: number, P: MxNewMx3dGePoint, D1U: MxNewMx3dGeVec, D1V: MxNewMx3dGeVec, D2U: MxNewMx3dGeVec, D2V: MxNewMx3dGeVec, D2UV: MxNewMx3dGeVec): void;
	LocalD3(U: number, V: number, FromUK1: number, ToUK2: number, FromVK1: number, ToVK2: number, P: MxNewMx3dGePoint, D1U: MxNewMx3dGeVec, D1V: MxNewMx3dGeVec, D2U: MxNewMx3dGeVec, D2V: MxNewMx3dGeVec, D2UV: MxNewMx3dGeVec, D3U: MxNewMx3dGeVec, D3V: MxNewMx3dGeVec, D3UUV: MxNewMx3dGeVec, D3UVV: MxNewMx3dGeVec): void;
	LocalDN(U: number, V: number, FromUK1: number, ToUK2: number, FromVK1: number, ToVK2: number, Nu: number, Nv: number): MxNewMx3dGeVec;
	LocalValue(U: number, V: number, FromUK1: number, ToUK2: number, FromVK1: number, ToVK2: number): MxNewMx3dGePoint;
	Transform(T: MxNewMx3dGeTrsf): void;
	Copy(): MxNewMx3dGeomObject;
	DynamicType(): string;
	DynCast(theObject: MxNewMx3dGeomObject): this;
	static DownCast(theObject: MxNewMx3dGeomObject): MxNewMx3dGeomBSplineSurface;
	Face(TolDegen: number): MxNewMx3dShapeFace;
	Face(W: MxNewMx3dShapeWire, Inside: boolean): MxNewMx3dShapeFace;
	Face(UMin: number, UMax: number, VMin: number, VMax: number, TolDegen: number): MxNewMx3dShapeFace;
}
export declare class MxNewMx3dGeomBezierSurface extends MxNewMx3dGeomBoundedSurface {
	constructor(SurfacePoles: MxNewMx3dGePoint[][], PoleWeights?: number[][]);
	ExchangeUV(): void;
	Increase(UDeg: number, VDeg: number): void;
	InsertPoleColAfter(VIndex: number, CPoles: MxNewMx3dGePoint[], CPoleWeights?: number[]): void;
	InsertPoleColBefore(VIndex: number, CPoles: MxNewMx3dGePoint[], CPoleWeights?: number[]): void;
	InsertPoleRowAfter(UIndex: number, CPoles: MxNewMx3dGePoint[], CPoleWeights?: number[]): void;
	InsertPoleRowBefore(UIndex: number, CPoles: MxNewMx3dGePoint[], CPoleWeights?: number[]): void;
	RemovePoleCol(VIndex: number): void;
	RemovePoleRow(UIndex: number): void;
	Segment(U1: number, U2: number, V1: number, V2: number): void;
	SetPole(UIndex: number, VIndex: number, P: MxNewMx3dGePoint, Weight?: number): void;
	SetPoleCol(VIndex: number, CPoles: MxNewMx3dGePoint[], CPoleWeights?: number[]): void;
	SetPoleRow(UIndex: number, CPoles: MxNewMx3dGePoint[], CPoleWeights?: number[]): void;
	SetWeight(UIndex: number, VIndex: number, Weight: number): void;
	SetWeightCol(VIndex: number, CPoleWeights: number[]): void;
	SetWeightRow(UIndex: number, CPoleWeights: number[]): void;
	UReverse(): void;
	UReversedParameter(U: number): number;
	VReverse(): void;
	VReversedParameter(V: number): number;
	Bounds(U1U2V1V2: [
		dU1: number,
		dU2: number,
		dV1: number,
		dV2: number
	]): void;
	Continuity(): MdGe.MxGAShapeEnum;
	D0(U: number, V: number, P: MxNewMx3dGePoint): void;
	D1(U: number, V: number, P: MxNewMx3dGePoint, D1U: MxNewMx3dGeVec, D1V: MxNewMx3dGeVec): void;
	D2(U: number, V: number, P: MxNewMx3dGePoint, D1U: MxNewMx3dGeVec, D1V: MxNewMx3dGeVec, D2U: MxNewMx3dGeVec, D2V: MxNewMx3dGeVec, D2UV: MxNewMx3dGeVec): void;
	D3(U: number, V: number, P: MxNewMx3dGePoint, D1U: MxNewMx3dGeVec, D1V: MxNewMx3dGeVec, D2U: MxNewMx3dGeVec, D2V: MxNewMx3dGeVec, D2UV: MxNewMx3dGeVec, D3U: MxNewMx3dGeVec, D3V: MxNewMx3dGeVec, D3UUV: MxNewMx3dGeVec, D3UVV: MxNewMx3dGeVec): void;
	DN(U: number, V: number, Nu: number, Nv: number): MxNewMx3dGeVec;
	NbUPoles(): number;
	NbVPoles(): number;
	Pole(UIndex: number, VIndex: number): MxNewMx3dGePoint;
	Poles(): MxNewMx3dGePoint[][];
	UDegree(): number;
	Weight(UIndex: number, VIndex: number): number;
	Weights(): number[][];
	IsUClosed(): boolean;
	IsVClosed(): boolean;
	IsCNu(N: number): boolean;
	IsCNv(N: number): boolean;
	IsUPeriodic(): boolean;
	IsVPeriodic(): boolean;
	IsURational(): boolean;
	IsVRational(): boolean;
	Transform(T: MxNewMx3dGeTrsf): void;
	Copy(): MxNewMx3dGeomObject;
	DynCast(theObject: MxNewMx3dGeomObject): this;
	static DownCast(theObject: MxNewMx3dGeomObject): MxNewMx3dGeomBezierSurface;
	Face(TolDegen: number): MxNewMx3dShapeFace;
	Face(W: MxNewMx3dShapeWire, Inside: boolean): MxNewMx3dShapeFace;
	Face(UMin: number, UMax: number, VMin: number, VMax: number, TolDegen: number): MxNewMx3dShapeFace;
}
export declare class MxNewMx3dGeMaterial extends MxNewMx3dBaseObject {
	constructor();
	constructor(theName: MdGe.MxNameOfMaterial);
	Name(): MdGe.MxNameOfMaterial;
	RequestedName(): MdGe.MxNameOfMaterial;
	StringName(): string;
	MaterialName(): string;
	SetMaterialName(theName: string): void;
	Reset(): void;
	Color(): MxNewMx3dGeColor;
	SetColor(theColor: MxNewMx3dGeColor): void;
	Transparency(): number;
	Alpha(): number;
	SetTransparency(theValue: number): void;
	SetAlpha(theValue: number): void;
	AmbientColor(): MxNewMx3dGeColor;
	SetAmbientColor(theColor: MxNewMx3dGeColor): void;
	DiffuseColor(): MxNewMx3dGeColor;
	SetDiffuseColor(theColor: MxNewMx3dGeColor): void;
	SpecularColor(): MxNewMx3dGeColor;
	SetSpecularColor(theColor: MxNewMx3dGeColor): void;
	EmissiveColor(): MxNewMx3dGeColor;
	SetEmissiveColor(theColor: MxNewMx3dGeColor): void;
	Shininess(): number;
	SetShininess(theValue: number): void;
	IncreaseShine(theDelta: number): void;
	RefractionIndex(): number;
	SetRefractionIndex(theValue: number): void;
	ReflectionMode(theType: MdGe.MxTypeOfReflection): boolean;
	MaterialType(): MdGe.MxTypeOfMaterial;
	SetMaterialType(theType: MdGe.MxTypeOfMaterial): void;
	IsDifferent(theOther: MxNewMx3dGeMaterial): boolean;
	IsEqual(theOther: MxNewMx3dGeMaterial): boolean;
}
export declare class MxNewMx3dAspectLine extends MxNewMx3dAspectObject {
	constructor(theColor: MxNewMx3dGeColor, theType: MdGe.MxTypeOfLine, theWidth: number);
	SetColor(theColor: MxNewMx3dGeColor): void;
	SetTypeOfLine(theType: MdGe.MxTypeOfLine): void;
	SetWidth(theWidth: number): void;
}
export declare class MxNewMx3dAspectText extends MxNewMx3dAspectObject {
	constructor(p?: object);
	SetColor(theColor: MxNewMx3dGeColor): void;
	SetFont(theFont: string): void;
	SetHeight(theHeight: number): void;
	SetAngle(theAngle: number): void;
	Height(): number;
	Angle(): number;
	SetHorizontalJustification(theJustification: MdGe.MxHorizontalTextAlignment): void;
	SetVerticalJustification(theJustification: MdGe.MxVerticalTextAlignment): void;
	SetOrientation(theOrientation: MdGe.MxTextPath): void;
	HorizontalJustification(): MdGe.MxHorizontalTextAlignment;
	VerticalJustification(): MdGe.MxVerticalTextAlignment;
	Orientation(): MdGe.MxTextPath;
}
export declare class MxNewMx3dAspectArrow extends MxNewMx3dAspectObject {
	constructor();
	constructor(anAngle: number, aLength: number);
	SetAngle(anAngle: number): void;
	Angle(): number;
	SetLength(theLength: number): void;
	Length(): number;
	SetZoomable(theIsZoomable: boolean): void;
	IsZoomable(): boolean;
	SetColor(theColor: MxNewMx3dGeColor): void;
}
export declare class MxNewMx3dAspectDim extends MxNewMx3dAspectObject {
	constructor(p?: object);
	SetLineAspect(theAspect: MxNewMx3dAspectLine): void;
	SetTextAspect(theAspect: MxNewMx3dAspectText): void;
	IsText3d(): boolean;
	MakeText3d(isText3d: boolean): void;
	IsTextShaded(): boolean;
	MakeTextShaded(theIsTextShaded: boolean): void;
	IsArrows3d(): boolean;
	MakeArrows3d(theIsArrows3d: boolean): void;
	IsUnitsDisplayed(): boolean;
	MakeUnitsDisplayed(theIsDisplayed: boolean): void;
	SetArrowOrientation(theArrowOrient: MdGe.MxDimensionArrowOrientation): void;
	ArrowOrientation(): MdGe.MxDimensionArrowOrientation;
	SetTextVerticalPosition(thePosition: MdGe.MxDimensionTextVerticalPosition): void;
	TextVerticalPosition(): MdGe.MxDimensionTextVerticalPosition;
	SetTextHorizontalPosition(thePosition: MdGe.MxDimensionTextHorizontalPosition): void;
	TextHorizontalPosition(): MdGe.MxDimensionTextHorizontalPosition;
	SetArrowAspect(theAspect: MxNewMx3dAspectArrow): void;
	SetCommonColor(theColor: MxNewMx3dGeColor): void;
	SetExtensionSize(theSize: number): void;
	ExtensionSize(): number;
	SetArrowTailSize(theSize: number): void;
	ArrowTailSize(): number;
	SetValueStringFormat(theFormat: string): void;
	ValueStringFormat(): string;
}
export declare class MxNewMx3dDimDiameter extends MxNewMx3dDimObject {
	constructor(theCircle: MxNewMx3dGeCircle);
	constructor(theCircle: MxNewMx3dGeCircle, thePlane: MxNewMx3dGePlane);
	Circle(): MxNewMx3dGeCircle;
	AnchorPoint(): MxNewMx3dGePoint;
	Shape(): MxNewMx3dShapeObject;
	SetMeasuredGeometry(theCircle: MxNewMx3dGeCircle): void;
	SetTextPosition(theTextPos: MxNewMx3dGePoint): void;
	GetTextPosition(): MxNewMx3dGePoint;
	SetDisplayUnits(theUnits: string): void;
	SetModelUnits(theUnits: string): void;
	GetValue(): number;
	SetComputedValue(): void;
	SetCustomValue(theValue: number): void;
	GetPlane(): MxNewMx3dGePlane;
	GetGeometryType(): number;
	SetCustomPlane(thePlane: MxNewMx3dGePlane): void;
	UnsetCustomPlane(): void;
	IsTextPositionCustom(): boolean;
	SetDimensionAspect(theDimensionAspect: MxNewMx3dAspectDim): void;
	KindOfDimension(): MdGe.MxKindOfDimension;
	UnsetFixedTextPosition(): void;
	SelToleranceForText2d(): number;
	SetSelToleranceForText2d(theTol: number): void;
	GetFlyout(): number;
	SetFlyout(theFlyout: number): void;
	IsValid(): boolean;
}
export declare class MxNewMx3dDimRadius extends MxNewMx3dDimObject {
	constructor(theCircle: MxNewMx3dGeCircle);
	constructor(theCircle: MxNewMx3dGeCircle, theAnchorPoint: MxNewMx3dGePoint);
	Circle(): MxNewMx3dGeCircle;
	AnchorPoint(): MxNewMx3dGePoint;
	Shape(): MxNewMx3dShapeObject;
	SetMeasuredGeometry(theCircle: MxNewMx3dGeCircle): void;
	SetMeasuredGeometry(theCircle: MxNewMx3dGeCircle, theAnchorPoint: MxNewMx3dGePoint, theHasAnchor: boolean): void;
	SetTextPosition(theTextPos: MxNewMx3dGePoint): void;
	GetTextPosition(): MxNewMx3dGePoint;
	GetValue(): number;
	SetComputedValue(): void;
	SetCustomValue(theValue: number): void;
	GetPlane(): MxNewMx3dGePlane;
	GetGeometryType(): number;
	SetCustomPlane(thePlane: MxNewMx3dGePlane): void;
	UnsetCustomPlane(): void;
	IsTextPositionCustom(): boolean;
	SetDimensionAspect(theDimensionAspect: MxNewMx3dAspectDim): void;
	KindOfDimension(): MdGe.MxKindOfDimension;
	UnsetFixedTextPosition(): void;
	SelToleranceForText2d(): number;
	SetSelToleranceForText2d(theTol: number): void;
	GetFlyout(): number;
	SetFlyout(theFlyout: number): void;
	IsValid(): boolean;
}
export declare class MxNewMx3dDimAngle extends MxNewMx3dDimObject {
	constructor(theFirstEdge: MxNewMx3dShapeEdge, theSecondEdge: MxNewMx3dShapeEdge);
	constructor(theFirstPoint: MxNewMx3dGePoint, theSecondPoint: MxNewMx3dGePoint, theThirdPoint: MxNewMx3dGePoint);
	FirstPoint(): MxNewMx3dGePoint;
	SecondPoint(): MxNewMx3dGePoint;
	CenterPoint(): MxNewMx3dGePoint;
	FirstShape(): MxNewMx3dShapeObject;
	SecondShape(): MxNewMx3dShapeObject;
	ThirdShape(): MxNewMx3dShapeObject;
	SetMeasuredGeometry(theCone: MxNewMx3dShapeFace): void;
	SetMeasuredGeometry(theFirstEdge: MxNewMx3dShapeEdge, theSecondEdge: MxNewMx3dShapeEdge): void;
	SetMeasuredGeometry(theFirstPoint: MxNewMx3dGePoint, theSecondPoint: MxNewMx3dGePoint, theThridPoint: MxNewMx3dGePoint): void;
	SetTextPosition(theTextPos: MxNewMx3dGePoint): void;
	GetTextPosition(): MxNewMx3dGePoint;
	GetDisplayUnits(): string;
	GetModelUnits(): string;
	SetDisplayUnits(theUnits: string): void;
	SetModelUnits(theUnits: string): void;
	SetType(theType: MdGe.MxTypeOfAngle): void;
	GetType(): MdGe.MxTypeOfAngle;
	SetArrowsVisibility(theType: MdGe.MxTypeOfAngleArrowVisibility): void;
	GetArrowsVisibility(): MdGe.MxTypeOfAngleArrowVisibility;
	GetValue(): number;
	SetComputedValue(): void;
	SetCustomValue(theValue: number): void;
	GetPlane(): MxNewMx3dGePlane;
	GetGeometryType(): number;
	SetCustomPlane(thePlane: MxNewMx3dGePlane): void;
	UnsetCustomPlane(): void;
	IsTextPositionCustom(): boolean;
	SetDimensionAspect(theDimensionAspect: MxNewMx3dAspectDim): void;
	KindOfDimension(): MdGe.MxKindOfDimension;
	UnsetFixedTextPosition(): void;
	SelToleranceForText2d(): number;
	SetSelToleranceForText2d(theTol: number): void;
	GetFlyout(): number;
	SetFlyout(theFlyout: number): void;
	IsValid(): boolean;
}
export declare class MxNewMx3dDimLength extends MxNewMx3dDimObject {
	constructor();
	constructor(theEdge: MxNewMx3dShapeEdge, thePlane: MxNewMx3dGePlane);
	constructor(theFirstPoint: MxNewMx3dGePoint, theSecondPoint: MxNewMx3dGePoint, thePlane: MxNewMx3dGePlane);
	FirstPoint(): MxNewMx3dGePoint;
	SecondPoint(): MxNewMx3dGePoint;
	FirstShape(): MxNewMx3dShapeObject;
	SecondShape(): MxNewMx3dShapeObject;
	SetMeasuredGeometry(theFirstPoint: MxNewMx3dGePoint, theSecondPoint: MxNewMx3dGePoint, thePlane: MxNewMx3dGePlane): void;
	SetMeasuredShapes(theFirstShape: MxNewMx3dShapeObject, theSecondShape: MxNewMx3dShapeObject): void;
	SetTextPosition(theTextPos: MxNewMx3dGePoint): void;
	GetTextPosition(): MxNewMx3dGePoint;
	SetDirection(theDirection: MxNewMx3dGeDir, theUseDirection: boolean): void;
	GetValue(): number;
	SetComputedValue(): void;
	SetCustomValue(theValue: number): void;
	GetPlane(): MxNewMx3dGePlane;
	GetGeometryType(): number;
	SetCustomPlane(thePlane: MxNewMx3dGePlane): void;
	UnsetCustomPlane(): void;
	IsTextPositionCustom(): boolean;
	SetDimensionAspect(theDimensionAspect: MxNewMx3dAspectDim): void;
	KindOfDimension(): MdGe.MxKindOfDimension;
	UnsetFixedTextPosition(): void;
	SelToleranceForText2d(): number;
	SetSelToleranceForText2d(theTol: number): void;
	GetFlyout(): number;
	SetFlyout(theFlyout: number): void;
	IsValid(): boolean;
}
export type Map = any;
/**
 * cad地图对象
 * @example
 * \`\`\`ts
 * import { MxMap } from 'mxcad';
 * let mx_map = new MxMap;
 * \`\`\`
 */
export declare class MxMap {
	private imp;
	private map;
	private originLngLatLike;
	private originCAD;
	private meterInCADUnits;
	private modelAltitude;
	private loadOldEditionMethod;
	/**mxcad对象 */
	mxcad: McObject;
	constructor();
	/**
	 * 用于设置加载旧版本地图
	 */
	setLoadOldEditionMethod(): void;
	/**
	 * 获取当前mxdraw对象
	 * @return mxdraw对象
	 * */
	getMxDrawObject(): MxDrawObject;
	/**
	 * 初始化mapbox
	 * @param map map对象
	 */
	initMapbox(map: Map): void;
	/**
	 * 获取mapbox的map对象
	 * @return map对象
	 */
	getMapbox(): Map;
	/**
	 * mapbox的墨卡托坐标系到cad
	* @param x X轴坐标
	* @param y Y轴坐标
	* @returns 三维点对象
	 */
	mercatorCoord2CAD(x: number, y: number): THREE.Vector3;
	/**
	 * mapbox的墨卡托坐标系到cad
	 * @param x X轴坐标
	 * @param y Y轴坐标
	 * @returns 三维点对象
	 */
	mercatorCoordToCAD(x: number, y: number): THREE.Vector3;
	/**
	 * cad到mapbox的墨卡托坐标系
	 * @param pt 三维点对象
	 * @returns 三维点对象
	 */
	cadToMercatorCoord(pt: THREE.Vector3): THREE.Vector3;
	/**
	 * 经纬度到cad坐标
	 * @param lng 经度
	 * @param lat 纬度
	 * @return 三维点对象
	 */
	lnglatToCAD(lng: number, lat: number): THREE.Vector3;
	/**
	 * cad坐标转换为经度和纬度
	 * @param pt 三维点对象
	 * @returns 经纬度
	 */
	cadTolnglat(pt: THREE.Vector3): number[];
	/**
	 * 地图墨卡托坐标系到经纬度
	 * @param x X轴坐标
	 * @param y Y轴坐标
	 * @returns 经纬度
	 */
	map_meters_to_lnglat(x: number, y: number): number[];
	/**
	 * 将地理坐标系下的坐标（经度和纬度）转换为平面坐标系下的坐标（米）
	 * @param lng 经度
	 * @param lat 维度
	 * @returns 平面坐标
	 */
	map_lnglat_to_meters(lng: number, lat: number): number[];
	/**
	 * 经纬度到mapbox的墨卡托坐标系坐标
	 * @param lng 经度
	 * @param lat 维度
	 * @returns 三维点对象
	 */
	lnglat_to_mercator(lng: number, lat: number): THREE.Vector3;
	/**
	 * mapbox的墨卡托坐标系到经纬度
	 * @param x X轴坐标
	 * @param y Y轴坐标
	 * @param z Z轴坐标
	 * @returns 经纬度
	 */
	mercator_to_lnglat(x: number, y: number, z: number): number[];
	/**
	 * 是否超出中国范围
	 * @param lng 经度
	 * @param lat 维度
	 * @returns 布尔值
	 */
	outOfChina(lng: number, lat: number): boolean;
	/**
	 * 将经度坐标转换为墨卡托投影下的坐标
	 * @param len 经度
	 * @return 墨卡托投影下的坐标
	 */
	cadLongToMercatorCoord(len: number): number;
	/**
	 * 设置坐标点的对齐方式
	 * @param originLngLatLike 经度和纬度的原点坐标
	 * @param originCAD 绘图坐标系下的起始点，即AutoCAD 中的原点坐标。
	 * @param meterInCADUnits 地理坐标系和 AutoCAD 绘图使用的坐标单位转换
	 */
	setCoordinatePointAlignment(originLngLatLike: number[], originCAD: number[], meterInCADUnits: number): void;
	/**
	 * 创建地图
	 * @param map map对象
	 * @param MxCadConfig createMxCad 的参数配置
	 */
	create(map: Map, config: MxCadConfig | any): Promise<void>;
}
/**
 * 加载地图图层
 * @param map map对象
 * @param layerList 图层列表
 * @param key 访问瓦片图层的 API 密钥或者令牌
 * @param providers 指定瓦片图层的提供者信息
 */
export declare function MxMapAddRasterTileLayer(map: any, layerList: any[], key?: string, providers?: any): void;
/**
 * 加载GoogleCnLayer地图图层,火星坐标系
 * @param map map对象
 * @param types 谷歌地图图层的类型
 * @param urls 谷歌地图图层的URL
 */
export declare function MxMapAddGoogleCnLayer(map: any, types: string[], urls?: string[]): void;
/**
 * GPS 坐标（WGS 84 坐标系）转换为国测局坐标（GCJ-02 坐标系）
 * @param lng 经度
 * @param lat 纬度
 * @returns 转换后的经纬度
 */
export declare function mx_gps84_To_gcj02(lng: any, lat: any): {
	lng: any;
	lat: any;
};
/**
 * 国测局坐标（GCJ-02 坐标系）转换为GPS 坐标（WGS 84 坐标系）
 * @param lng 经度
 * @param lat 纬度
 * @returns @returns 转换后的经纬度
 */
export declare function mx_gcj02_To_gps84(lng: any, lat: any): {
	lng: number;
	lat: number;
};

export {};
`;let b=!0;const Q={...u,enhanceApp(e){const{app:n}=e;u.enhanceApp(e),n.mixin({async mounted(){b&&(b=!1,await a(()=>import("./chunks/mxdraw.esm.56912c27.js"),[]).then(r=>{x("mxdraw",r.default||r)}),await a(()=>import("./chunks/index.df660003.js"),["assets/chunks/index.df660003.js","assets/chunks/mxdraw.esm.56912c27.js","assets/chunks/commonjsHelpers.edff4021.js"]).then(r=>{x("mxcad",r.default||r)}))}}),n.use(q,{defaultDirection:"column",ms:300,handleError(r){},onMonacoCreated(r){r.languages.typescript.typescriptDefaults.addExtraLib(`
          declare module 'mxdraw' { 
            ${J} 
          }
          `,"mxdraw"),r.languages.typescript.typescriptDefaults.addExtraLib(`
          declare module 'mxcad' { 
            ${$} 
          }
          `,"mxcad")}})}};function g(e){if(e.extends){const n=g(e.extends);return{...n,...e,async enhanceApp(r){n.enhanceApp&&await n.enhanceApp(r),e.enhanceApp&&await e.enhanceApp(r)}}}return e}const i=g(Q),ee=A({name:"VitePressApp",setup(){const{site:e}=O();return R(()=>{V(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),I(),_(),L(),i.setup&&i.setup(),()=>j(i.Layout)}});async function ne(){const e=te(),n=re();n.provide(v,e);const r=D(e.route);return n.provide(P,r),n.component("Content",T),n.component("ClientOnly",S),Object.defineProperties(n.config.globalProperties,{$frontmatter:{get(){return r.frontmatter.value}},$params:{get(){return r.page.value.params}}}),i.enhanceApp&&await i.enhanceApp({app:n,router:e,siteData:f}),{app:n,router:e,data:r}}function re(){return E(ee)}function te(){let e=l,n;return N(r=>{let t=w(r);return e&&(n=t),(e||n===t)&&(t=t.replace(/\.js$/,".lean.js")),l&&(e=!1),a(()=>import(t),[])},i.NotFound)}l&&ne().then(({app:e,router:n,data:r})=>{n.go().then(()=>{G(n.route,r.site),e.mount("#app")})});export{ie as A,de as O,le as P,se as R,ne as createApp,K as v};
