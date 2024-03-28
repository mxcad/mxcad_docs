import{a5 as u,L as h,M as i,Q as l,a6 as v,a7 as E,a8 as T,a9 as D,aa as G,ab as f,ac as S,ad as P,ae as A,af as O,d as R,u as _,v as N,l as I,ag as L,ah as w,ai as V,aj as H}from"./chunks/framework.24f0af87.js";import{t as m}from"./chunks/theme.12bb47b1.js";let g={},y={};function F(r){g=r}function B(r){y=r}function ar(){j(),k()}function j(){const r=window;r._vue||(r._vue=g)}function k(){const r=window;r._app||(r._app=y)}const U=`import { camelize } from '@vue/shared';\r
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
`,W=`import { BaseTransitionProps } from '@vue/runtime-core';\r
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
`;let b=!0,c;async function sr(){const r=await i(()=>import("./chunks/editor.main.d83c2780.02f6c32a.js"),["assets/chunks/editor.main.d83c2780.02f6c32a.js","assets/chunks/framework.24f0af87.js"]).then(e=>e.e);return b&&typeof c=="function"&&(b=!1,c(r)),r.languages.typescript.typescriptDefaults.setCompilerOptions({target:r.languages.typescript.ScriptTarget.Latest,allowNonTsExtensions:!0,moduleResolution:r.languages.typescript.ModuleResolutionKind.NodeJs,module:r.languages.typescript.ModuleKind.CommonJS,noEmit:!0,esModuleInterop:!0,jsx:r.languages.typescript.JsxEmit.Preserve,allowJs:!0}),r.languages.typescript.typescriptDefaults.setDiagnosticsOptions({noSemanticValidation:!1,noSyntaxValidation:!1}),r.languages.typescript.typescriptDefaults.addExtraLib(W,"jsx:type"),r.languages.typescript.typescriptDefaults.addExtraLib(`
    declare module 'vue' { ${U} }
  `,"ts:vue"),await Promise.all([(async()=>{const[{default:e},{default:n},{default:t}]=await Promise.all([i(()=>import("./chunks/editor.worker.9c35f395.dcede9b5.js"),[]),i(()=>import("./chunks/html.worker.b57725c2.47285f38.js"),[]),i(()=>import("./chunks/ts.worker.3260b66b.5dceb272.js"),[])]);window.MonacoEnvironment={getWorker(s,o){return o==="html"||o==="handlebars"||o==="razor"?new n:o==="typescript"||o==="javascript"?new t:new e}}})()]),r}function Y(r){c=r||null}const z=Symbol(),d={};function M(r,e){d[r]=e}function dr(r){const e=window;return e.importMaps||(e.importMaps=d),r=K(r),r=r.replace(/import(.*?)from\s+['"](.*?)['"]/g,(n,t,s)=>{const o=s,p=d[o];return p?(d[`${o}`]||(d[`${o}`]=p),`const ${t} = importMaps['${s}']`):n}),r}function K(r){return r.replace(/import(.*?)from\s+['"]vue['"]/g,(e,n)=>(n=n.replace(/\sas\s/g,":"),`const ${n} = _vue`)).replace(/import 'vue'/g,"")}const lr=()=>Math.random().toString(36).slice(2,12),X=r=>typeof r=="object"&&r!==null,Z=r=>function(e,n,t,...s){return Array.isArray(t)&&(t=t.map(o=>Array.isArray(o)?o:X(o)&&!o.__v_isVNode?r.createTextVNode(String(o)):o)),r.createVNode(e,n,t,...s)},J=function(r,e){e=Object.assign({ms:300,defaultDirection:"row"},e);const n=h(()=>i(()=>import("./chunks/Demo.10a78ca5.9fa69cb3.js"),["assets/chunks/Demo.10a78ca5.9fa69cb3.js","assets/chunks/framework.24f0af87.js","assets/chunks/theme.12bb47b1.js"]));r.component("Demo",n),r.config.errorHandler=function(t){console.error(t)},F(Object.assign({},u,{createVNode:Z(u)})),B(r),r.provide(z,e),Y(e.onMonacoCreated)};const q=`import * as three from 'three';
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
    zoomW(minPt: THREE.Vector3, maxPt: THREE.Vector3, isWorld?: boolean): void;\r
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
    zoomW(minPt: THREE.Vector3, maxPt: THREE.Vector3, isWorld?: boolean): void;\r
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
    drawMcDbEntity(mcdbEntity: any): any;\r
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
`,$=`// Generated by dts-bundle-generator v6.13.0\r
\r
<<<<<<< HEAD\r
import { DetailedResult, DynamicInputType, McEdGetPointWorldDrawObject, MrxDbgUiPrBaseReturn, MxCursorType, MxDbEntity, MxDrawObject } from 'mxdraw';\r
=======\r
import { DetailedResult, DynamicInputType, McEdGetPointWorldDrawObject, MrxDbgUiPrBaseReturn, MrxDbgUiPrPoint, MxCursorType, MxDbEntity, MxDrawObject } from 'mxdraw';\r
>>>>>>> 8c441820 (init)\r
import * as THREE from 'three';\r
\r
export declare function b64Encode(str: string): string;\r
export declare function b64Decode(str: string): string;\r
export type FileTypes = {\r
	description?: string;\r
	accept: {\r
		[type: string]: string[];\r
	};\r
}[];\r
/**  文件下载保存（另存为只支持 Chrome86 或 Edge 86 以及 Opera 72）兼容 iE10等较低版本的浏览器  */\r
export declare function saveAsFileDialog({ blob, filename, types }: {\r
	blob: Blob;\r
	filename?: string;\r
	types?: FileTypes;\r
}): Promise<(FileSystemFileHandle & {\r
	createWritable: () => Promise<WritableStreamDefaultWriter<any>>;\r
}) | undefined>;\r
export declare function downloadFile(blob: any, filename: string): void;\r
export declare function downloadFileFromUrl(url: string, filename: string): void;\r
export declare const getJsonFromUrl: (url: string) => Promise<any>;\r
export declare const getFileFromUrl: (url: string) => Promise<Response | undefined>;\r
<<<<<<< HEAD\r
export declare function _ML_String(strId: string, str: string): string;\r
export declare function IsZero(val: number): boolean;\r
=======\r
/** 接收输入的提示字符串\r
 * @param strId 字符串的ID 起一个符合定义的ID名称\r
 * @param str 提示字符串\r
 *  */\r
export declare function _ML_String(strId: string, str: string): string;\r
export declare function IsZero(val: number): boolean;\r
export declare function postMemoryFile(memoryData: any, url: string, filename: string, retCall: (code: number, message: string) => void, param?: any): void;\r
export declare function postEmscriptenIndexedDBFile(filekey: string, url: string, retCall: (code: number, message: string) => void, param?: any): void;\r
>>>>>>> 8c441820 (init)\r
export declare const MxTools: {\r
	b64Encode: typeof b64Encode;\r
	b64Decode: typeof b64Decode;\r
	saveAsFileDialog: typeof saveAsFileDialog;\r
	downloadFile: typeof downloadFile;\r
	downloadFileFromUrl: typeof downloadFileFromUrl;\r
	getJsonFromUrl: (url: string) => Promise<any>;\r
	getFileFromUrl: (url: string) => Promise<Response | undefined>;\r
	_ML_String: typeof _ML_String;\r
	IsZero: typeof IsZero;\r
<<<<<<< HEAD\r
=======\r
	postEmscriptenIndexedDBFile: typeof postEmscriptenIndexedDBFile;\r
	postMemoryFile: typeof postMemoryFile;\r
>>>>>>> 8c441820 (init)\r
};\r
/**\r
 * 表示一个 Rx 对象的基类。\r
 */\r
export declare class McRxObject {\r
	/**\r
	 * 内部实现对象。\r
	 */\r
<<<<<<< HEAD\r
	protected imp: any;\r
=======\r
	imp: any;\r
>>>>>>> 8c441820 (init)\r
	/**\r
	 * 构造函数。\r
	 * @param imp 内部实现对象。\r
	 */\r
	constructor(imp?: any);\r
<<<<<<< HEAD\r
=======\r
	protected constructor_MxCADResbuf(imp: any): void;\r
>>>>>>> 8c441820 (init)\r
	/**\r
	 * 获取内部实现对象。\r
	 * @returns 内部实现对象。\r
	 */\r
	getImp(): any;\r
	/**\r
	 * 初始化临时对象。\r
	 * @param imp 内部实现对象。\r
	 */\r
	initTempObject(imp: any): void;\r
	/**\r
	 * 获取对象名称。\r
	 */\r
	get objectName(): string;\r
	/**\r
	 * 获取 DXF 代码 0 的值。\r
	 */\r
	get dxf0(): string;\r
	/**\r
	 * 获取 JSON 格式的字符串。\r
	 * @returns JSON 格式的字符串。\r
	 */\r
	getJson(): string;\r
	/**\r
	 * 设置 JSON 格式的字符串。\r
	 * @param str JSON 格式的字符串。\r
	 * @returns 是否设置成功。\r
	 */\r
	setJson(str: string): boolean;\r
	isKindOf(sObjectName: string): boolean;\r
	isNull(): any;\r
}\r
/**\r
 * 枚举类型 McObjectIdType 表示对象的类型。\r
 *\r
 * @remarks\r
 * - kMxCAD：  CAD 对象。\r
 * - kMxDraw： 绘图对象。\r
 * - kInvalid：无效对象。\r
 */\r
export declare enum McObjectIdType {\r
<<<<<<< HEAD\r
	kMxCAD = 0,\r
	kMxDraw = 1,\r
=======\r
	/** CAD 对象 */\r
	kMxCAD = 0,\r
	/** 绘图对象 */\r
	kMxDraw = 1,\r
	/** 无效对象 */\r
>>>>>>> 8c441820 (init)\r
	kInvalid = 2\r
}\r
/**\r
 * McObjectId类表示一个模型对象的唯一标识符。\r
 */\r
export declare class McObjectId {\r
	id: number;\r
	type: McObjectIdType;\r
	/**\r
	 * 创建一个McObjectId实例。\r
	 * @param id 对象的唯一标识符。\r
	 * @param type 对象的类型。\r
	 */\r
	constructor(id?: number, type?: McObjectIdType);\r
	/**\r
	* id是否有效.\r
	*/\r
	isValid(): boolean;\r
	/**\r
	 * id是否为NULL.\r
	 */\r
	isNull(): boolean;\r
	/**\r
	* id是指向的以像，是否是删除状态.\r
	*/\r
	isErase(): boolean;\r
	/**\r
	 * 删除对象。\r
	 */\r
	erase(isErase?: boolean): void;\r
	/**\r
	 * 返回MxCAD McDbObject对象。\r
	 */\r
	getMcDbObject(): McDbObject | null;\r
	/**\r
	* 判断一个对象的类型\r
	*/\r
	isKindOf(className: string): boolean;\r
	/**\r
  * 返回MxCAD McDbEntity 对象。\r
  */\r
	getMcDbEntity(): McDbEntity | null;\r
	/**\r
	* 返回MxCAD McDbCurve 对象。\r
	*/\r
	getMcDbCurve(): McDbCurve | null;\r
	/**\r
  * 返回MxCAD McDbBlockTableRecord 对象。\r
  */\r
	getMcDbBlockTableRecord(): McDbBlockTableRecord | null;\r
	/**\r
  * 返回MxCAD McDbLayerTableRecord 对象。\r
  */\r
	getMcDbLayerTableRecord(): McDbLayerTableRecord | null;\r
	/**\r
 * 返回MxCAD McDbLinetypeTableRecord 对象。\r
 */\r
	getMcDbLinetypeTableRecord(): McDbLinetypeTableRecord | null;\r
	/**\r
* 返回MxCAD McDbTextStyleTableRecord 对象。\r
*/\r
	getMcDbTextStyleTableRecord(): McDbTextStyleTableRecord | null;\r
	/**\r
	* 返回MxCAD McDbDimension 对象。\r
	*/\r
	getMcDbDimension(): McDbDimension | null;\r
<<<<<<< HEAD\r
=======\r
	syncMcDbCustomEntity(): void;\r
	getMcDbCustomEntity(): McDbCustomEntity | null;\r
>>>>>>> 8c441820 (init)\r
	clone(): McDbObject | null;\r
	/**\r
	 * 返回id指向的对象名称.\r
	 */\r
	getObjectName(): string;\r
	/**\r
	 * 返回MxDraw对象。\r
	 */\r
	getMxDbEntity(): MxDbEntity | null;\r
	getMcDbRasterImageDef(): McDbRasterImageDef | null;\r
<<<<<<< HEAD\r
=======\r
	getMcDbDictionary(): McDbDictionary | null;\r
	getMcDbXrecord(): McDbXrecord | null;\r
>>>>>>> 8c441820 (init)\r
}\r
/**\r
 * 表示一个数据库对象。\r
 */\r
export declare class McDbObject extends McRxObject {\r
	/**\r
	 * 构造函数。\r
	 * @param imp 内部实现对象。\r
	 */\r
	constructor(imp?: any);\r
	/**\r
	 * 获取对象 ID。\r
	 * @returns 对象 ID。\r
	 */\r
	getObjectID(): McObjectId;\r
	/**\r
	 * 删除对象。\r
	 * @returns 是否删除成功。\r
	 */\r
	erase(): boolean;\r
	/**\r
	 * 对象是否已经删除\r
	 */\r
	isErased(): boolean;\r
	/**\r
	 * 反删除对象。\r
	 */\r
	unErase(): boolean;\r
	/**\r
	 * 克隆对象。\r
	 * @returns 克隆出的对象。\r
	 */\r
	clone(): McDbObject | null;\r
	/**\r
	* 得到对象句柄\r
	*/\r
	getHandle(): string;\r
	/**\r
	* 得到对象所在的数据库\r
	*/\r
	getDatabase(): McDbDatabase;\r
	/**\r
	 * 得到对象拥用者的id\r
	 */\r
	getOwnerID(): number;\r
<<<<<<< HEAD\r
=======\r
	getDatabaseIndexId(): number;\r
	moveGripPointsAt(iIndex: number, dXOffset: number, dYOffset: number, dZOffset: number): any;\r
	getGripPoints(): McGePoint3dArray;\r
	tempRelationObject(): number;\r
	freeTempRelationObject(): void;\r
>>>>>>> 8c441820 (init)\r
}\r
export declare class McDbObjectArray {\r
	aryVal: McDbObject[];\r
	constructor(imp?: any);\r
	forEach(call: (val: McDbObject, index: number) => void): void;\r
	length(): number;\r
	empty(): boolean;\r
}\r
/**\r
 * 表示三维点的对象。\r
 */\r
export declare class McGePoint3d {\r
	static kOrigin: McGePoint3d;\r
	imp: any;\r
	/**\r
	 * 构造函数。\r
	 * @param dX X 坐标。\r
	 * @param dY Y 坐标。\r
	 * @param dZ Z 坐标。\r
	 */\r
	constructor(dX?: number | object, dY?: number, dZ?: number);\r
<<<<<<< HEAD\r
	toVector3(): THREE.Vector3;\r
=======\r
	/**  得对应的three.js 向量 */\r
	toVector3(): THREE.Vector3;\r
	/** 将three.js 的向量设置成点 */\r
>>>>>>> 8c441820 (init)\r
	setFromVector3(val: THREE.Vector3): this;\r
	/**\r
	 * 复制对象的值\r
	 */\r
	copy(val: McGePoint3d): this;\r
	/**\r
	 * 使用矩阵变换该点\r
	 */\r
	transformBy(leftSide: McGeMatrix3d): this;\r
	/**\r
	* 计算点加上向量后的新位置\r
	*/\r
	addvec(vec: McGeVector3d): this;\r
	av(vec: McGeVector3d): this;\r
	/**\r
	 * 计算点减去向量后的新位置\r
	 */\r
	subvec(vec: McGeVector3d): this;\r
	sv(vec: McGeVector3d): this;\r
	/**\r
	 * 返回两点相减后得到的一个新的向量\r
	 */\r
	sub(pt: McGePoint3d): McGeVector3d;\r
	/**\r
	 * 计算两点距离\r
	 */\r
	distanceTo(pnt: McGePoint3d): number;\r
	/**\r
	* 判断两个点是否相等\r
	*/\r
	isEqualTo(pnt: McGePoint3d): boolean;\r
	/**\r
	 * 刻隆一个对对象\r
	 */\r
	clone(): McGePoint3d;\r
	c(): McGePoint3d;\r
	/**\r
	 * X 坐标。\r
	 */\r
	get x(): number;\r
	set x(val: number);\r
	/**\r
	 * Y 坐标。\r
	 */\r
	get y(): number;\r
	set y(val: number);\r
	/**\r
	 * Z 坐标。\r
	 */\r
	get z(): number;\r
	set z(val: number);\r
}\r
/**\r
 * 表示三维向量的对象。\r
 */\r
export declare class McGeVector3d {\r
<<<<<<< HEAD\r
	static kXAxis: McGeVector3d;\r
	static kYAxis: McGeVector3d;\r
	static kZAxis: McGeVector3d;\r
=======\r
	/** X轴 */\r
	static kXAxis: McGeVector3d;\r
	/** Y轴 */\r
	static kYAxis: McGeVector3d;\r
	/** Z轴 */\r
	static kZAxis: McGeVector3d;\r
	/** 取反z轴 */\r
>>>>>>> 8c441820 (init)\r
	static kNegateZAxis: McGeVector3d;\r
	imp: any;\r
	/**\r
	 * 构造函数。\r
	 * @param dX X 坐标。\r
	 * @param dY Y 坐标。\r
	 * @param dZ Z 坐标。\r
	 */\r
	constructor(dX?: number | object, dY?: number, dZ?: number);\r
<<<<<<< HEAD\r
=======\r
	/** 转换为THREE.Vector3  */\r
>>>>>>> 8c441820 (init)\r
	toVector3(): THREE.Vector3;\r
	/**\r
	 * 复制对象的值\r
	 */\r
	copy(val: McGeVector3d): this;\r
	/**\r
	 * 刻隆一个对对象\r
	 */\r
	clone(): McGeVector3d;\r
	c(): McGeVector3d;\r
<<<<<<< HEAD\r
	rotateBy(ang: number, axis?: McGeVector3d): this;\r
	negate(): this;\r
	perpVector(): this;\r
	angleTo1(vec: McGeVector3d): number;\r
	angleTo2(vec: McGeVector3d, refVec: McGeVector3d): number;\r
	normalize(): this;\r
	length(): number;\r
	isUnitLength(): boolean;\r
	isZeroLength(): boolean;\r
	dotProduct(vec: McGeVector3d): number;\r
	crossProduct(vec: McGeVector3d): McGeVector3d;\r
	isEqualTo(vec: McGeVector3d): boolean;\r
=======\r
	/** 旋转\r
	 * @param ang 旋转角度。\r
	 * @param axis 旋转轴向量\r
	 *  */\r
	rotateBy(ang: number, axis?: McGeVector3d): this;\r
	/** 向量取反 */\r
	negate(): this;\r
	/** 垂直的向量 */\r
	perpVector(): this;\r
	/** 计算角度 */\r
	angleTo1(vec: McGeVector3d): number;\r
	/** 计算角度 */\r
	angleTo2(vec: McGeVector3d, refVec?: McGeVector3d): number;\r
	/** 归一化操作 */\r
	normalize(): this;\r
	/** 向量长度 */\r
	length(): number;\r
	/** 是否为单位向量 */\r
	isUnitLength(): boolean;\r
	/** 是否为零向量 */\r
	isZeroLength(): boolean;\r
	/** 点积 */\r
	dotProduct(vec: McGeVector3d): number;\r
	/** 交叉积 */\r
	crossProduct(vec: McGeVector3d): McGeVector3d;\r
	/** 判断比较向量是否相等 */\r
	isEqualTo(vec: McGeVector3d): boolean;\r
	/** 向量与某个值相乘 */\r
>>>>>>> 8c441820 (init)\r
	mult(val: number): this;\r
	/**\r
	 * X 坐标。\r
	 */\r
	get x(): number;\r
	set x(val: number);\r
	/**\r
	 * Y 坐标。\r
	 */\r
	get y(): number;\r
	set y(val: number);\r
	/**\r
	 * Z 坐标。\r
	 */\r
	get z(): number;\r
	set z(val: number);\r
}\r
export declare class McGeMatrix3d {\r
<<<<<<< HEAD\r
=======\r
	/** 乘法的单位矩阵  */\r
>>>>>>> 8c441820 (init)\r
	static kIdentity: McGeMatrix3d;\r
	imp: any;\r
	/**\r
	 * 构造函数。\r
	 */\r
	constructor(imp?: object);\r
	/**\r
	 * 复制对象的值\r
	 */\r
	copy(val: McGeMatrix3d): this;\r
	/**\r
	 * 刻隆一个对对象\r
	 */\r
	clone(): McGeMatrix3d;\r
	/**\r
	 * 将矩阵设置为单位矩阵。\r
	 */\r
	setToIdentity(): this;\r
	/**\r
	 * 左乘指定的矩阵。\r
	 * @param leftSide 左侧矩阵。\r
	 */\r
	preMultBy(leftSide: McGeMatrix3d): this;\r
	/**\r
	 * 右乘指定的矩阵。\r
	 * @param rightSide 右侧矩阵。\r
	 */\r
	postMultBy(rightSide: McGeMatrix3d): this;\r
	/**\r
	 * 将矩阵设置为两个矩阵的乘积。\r
	 * @param mat1 第一个矩阵。\r
	 * @param mat2 第二个矩阵。\r
	 */\r
	setToProduct(mat1: McGeMatrix3d, mat2: McGeMatrix3d): this;\r
	/**\r
	 * 求矩阵的逆矩阵。\r
	 */\r
	invert(): this;\r
	/**\r
	 * 判断矩阵是否为奇异矩阵。\r
	 * @returns 如果是奇异矩阵返回 true，否则返回 false。\r
	 */\r
	isSingular(): boolean;\r
	/**\r
	 * 将矩阵转置。\r
	 */\r
	transposeIt(): this;\r
	/**\r
	 * 判断矩阵是否与指定的矩阵相等。\r
	 * @param mat 指定的矩阵。\r
	 * @returns 如果相等返回 true，否则返回 false。\r
	 */\r
	isEqualTo(mat: McGeMatrix3d): boolean;\r
	/**\r
	 * 求矩阵的行列式。\r
	 * @returns 矩阵的行列式。\r
	 */\r
	det(): number;\r
	/**\r
	 * 将矩阵设置为指定的坐标系。\r
	 * @param origin 坐标系原点。\r
	 * @param xAxis X 轴向量。\r
	 * @param yAxis Y 轴向量。\r
	 * @param zAxis Z 轴向量。\r
	 */\r
	setCoordSystem(origin: McGePoint3d, xAxis: McGeVector3d, yAxis: McGeVector3d, zAxis: McGeVector3d): this;\r
	/**\r
	 * 将矩阵设置为平移矩阵。\r
	 * @param vec 平移向量。\r
	 */\r
	setToTranslation(vec: McGeVector3d): this;\r
	/**\r
	 * 将矩阵设置为绕指定轴旋转指定角度的矩阵。\r
	 * @param angle 旋转角度。\r
	 * @param axis 旋转轴向量。\r
	 * @param center 旋转中心点。\r
	 */\r
	setToRotation(angle: number, axis: McGeVector3d, center: McGePoint3d): this;\r
	/**\r
	 * 将矩阵设置为缩放矩阵。\r
	 * @param scaleAll 缩放因子。\r
	 * @param center 缩放中心点。\r
	 */\r
	setToScaling(scaleAll: number, center: McGePoint3d): this;\r
	/**\r
   * 将矩阵设置为镜向矩阵\r
   */\r
	setMirror(pt1: McGePoint3d, pt2: McGePoint3d): this;\r
	/**\r
	 * 获取矩阵的缩放因子。\r
	 * @returns 矩阵的缩放因子。\r
	 */\r
	scale(): number;\r
	/**\r
	 * 获取矩阵中指定位置的元素值。\r
	 * @param row 行索引。\r
	 * @param col 列索引。\r
	 * @returns 指定位置的元素值。\r
	 */\r
	getData(row: number, col: number): number;\r
}\r
/**\r
 * 整数数组\r
 */\r
export declare class McGeLongArray {\r
	imp: any;\r
	/**\r
	 * 构造函数。\r
	 */\r
	constructor(imp?: object);\r
	/**\r
	 * 复制对象的值\r
	 */\r
	copy(val: McGeLongArray): this;\r
	copyFormAryId(aryId: McObjectId[]): this;\r
	/**\r
	* 添加一个值\r
	*/\r
	append(val: number): void;\r
	/**\r
	 * 返回数组长度\r
	 */\r
	length(): number;\r
	/**\r
	 * 得到数据元素的值\r
	 */\r
	at(index: number): number;\r
	/**\r
	 * 设置数据元素的值\r
	 */\r
	setAt(index: number, val: number): void;\r
	clear(): void;\r
	/**\r
	* 遍历数组\r
	*/\r
	forEach(call: (val: number, index: number) => void): void;\r
}\r
/**\r
 * 表示字符串的数组\r
 */\r
export declare class McGeStringArray {\r
	imp: any;\r
	/**\r
	 * 构造函数。\r
	 */\r
	constructor(imp?: object);\r
	/**\r
	 * 复制对象的值\r
	 */\r
	copy(val: McGeStringArray): this;\r
	/**\r
	* 添加一个值\r
	*/\r
	append(val: number): void;\r
	/**\r
	 * 返回数组长度\r
	 */\r
	length(): number;\r
	/**\r
	 * 得到数据元素的值\r
	 */\r
	at(index: number, decodeFromGb2312?: boolean): string;\r
	/**\r
	 * 设置数据元素的值\r
	 */\r
	setAt(index: number, val: string, decodeFromGb2312?: boolean): void;\r
	/**\r
	 * 遍历数组\r
	 */\r
	forEach(call: (val: string, index: number) => void, decodeFromGb2312?: boolean): void;\r
	clear(): void;\r
}\r
/**\r
 * 表示三维点的数组\r
 */\r
export declare class McGePoint3dArray {\r
	imp: any;\r
	/**\r
	 * 构造函数。\r
	 */\r
	constructor(imp?: object);\r
	/**\r
	 * 复制对象的值\r
	 */\r
	copy(val: McGePoint3dArray): this;\r
	/**\r
	* 添加一个值\r
	*/\r
	append(val: McGePoint3d): void;\r
	/**\r
	 * 返回数组长度\r
	 */\r
	length(): number;\r
	/**\r
	 * 返回数组为空\r
	 */\r
	isEmpty(): boolean;\r
	/**\r
	 * 得到数据元素的值\r
	 */\r
	at(index: number): McGePoint3d;\r
	/**\r
	 * 设置数据元素的值\r
	 */\r
	setAt(index: number, val: McGePoint3d): void;\r
	clear(): void;\r
	/**\r
	 * 遍历数组\r
	 */\r
	forEach(call: (val: McGePoint3d, index: number) => void): void;\r
}\r
/**\r
 * 整数数组\r
 */\r
export declare class MdGeDoubleArray {\r
	imp: any;\r
	/**\r
	 * 构造函数。\r
	 */\r
	constructor(imp?: object);\r
	/**\r
	 * 复制对象的值\r
	 */\r
	copy(val: MdGeDoubleArray): this;\r
	/**\r
	* 添加一个值\r
	*/\r
	append(val: number): void;\r
	/**\r
	 * 返回数组长度\r
	 */\r
	length(): number;\r
	/**\r
	 * 得到数据元素的值\r
	 */\r
	at(index: number): number;\r
	/**\r
	 * 设置数据元素的值\r
	 */\r
	setAt(index: number, val: number): void;\r
	clear(): void;\r
	/**\r
	 * 遍历数组\r
	 */\r
	forEach(call: (val: number, index: number) => void): void;\r
}\r
<<<<<<< HEAD\r
export declare function getFilterImp(filter?: MxCADResbuf | null): any;\r
export declare enum MxCADResbufDataType {\r
	kLong = 1071,\r
	kDouble = 1040,\r
	kString = 1000,\r
	kPoint = 1010,\r
	kEntityType = 5020,\r
	kEntityId = -8000,\r
	kEntity = -8500,\r
=======\r
declare class MxCoordConvertType {\r
	doc2cad(pt: McGePoint3d): McGePoint3d;\r
	cad2doc(pt: McGePoint3d): McGePoint3d;\r
	doc2cad1(pt: THREE.Vector3): McGePoint3d;\r
	doc2cad2(x: number, y: number, z: number): McGePoint3d;\r
	cad2doc1(pt: McGePoint3d): THREE.Vector3;\r
	cad2doc2(x: number, y: number, z: number): THREE.Vector3;\r
}\r
export declare let MxCoordConvert: MxCoordConvertType;\r
export declare function getFilterImp(filter?: MxCADResbuf | null): any;\r
/*** AutoLISP 中 resbuf 结构中可能的数据类型 */\r
export declare enum MxCADResbufDataType {\r
	/** 长整型 */\r
	kLong = 1071,\r
	/** 双精度浮点数 */\r
	kDouble = 1040,\r
	/** 字符串 */\r
	kString = 1000,\r
	/** 点坐标 */\r
	kPoint = 1010,\r
	/** 实体类型 */\r
	kEntityType = 5020,\r
	/** 实体ID */\r
	kEntityId = -8000,\r
	/** 实体 */\r
	kEntity = -8500,\r
	/** 扩展数据名称 */\r
>>>>>>> 8c441820 (init)\r
	kExDataName = 1001\r
}\r
/**\r
 * MxCADResbuf 类用于操作 AutoCAD 中的 resbuf 数据。\r
 */\r
export declare class MxCADResbuf extends McRxObject {\r
	/**\r
	 * 构造函数。\r
	 * @param imp 实现对象。\r
	 */\r
	constructor(imp?: any);\r
	/**\r
	 * 清空 resbuf 数据。\r
	 */\r
	Clear(): void;\r
	/**\r
	 * 遍历数据。\r
	 */\r
	forEach(call: (val: any, type: number, dxf: number) => void): void;\r
	/**\r
	 * 获取 resbuf 数据项个数。\r
	 * @returns resbuf 数据项个数。\r
	 */\r
	GetCount(): number;\r
	/**\r
	 * 获取 resbuf 数据项中的 double 类型值。\r
	 * @param lItem 数据项索引。\r
	 * @returns 包含 double 类型值和返回值的对象。\r
	 */\r
	AtDouble(lItem: number): {\r
		val: number;\r
		ret: boolean;\r
	};\r
	/**\r
	 * 获取 resbuf 数据项中的 long 类型值。\r
	 * @param lItem 数据项索引。\r
	 * @returns 包含 long 类型值和返回值的对象。\r
	 */\r
	AtLong(lItem: number): {\r
		val: number;\r
		ret: boolean;\r
	};\r
	/**\r
	 * 获取 resbuf 数据项中的 McRxObject 对象。\r
	 * @param lItem 数据项索引。\r
	 * @returns 包含 long 类型值和返回值的对象。\r
	*/\r
	AtObject(lItem: number): {\r
		val: McDbObject | undefined;\r
		ret: boolean;\r
	};\r
	/**\r
	 * 添加 McRxObject 对象到 resbuf 中\r
	*/\r
	AddObject(pObj: McRxObject): void;\r
	/**\r
	 * 获取 resbuf 数据项中的 ObjectId。\r
	 * @param lItem 数据项索引。\r
	 * @returns 包含 ObjectId 和返回值的对象。\r
	 */\r
	AtObjectId(lItem: number): {\r
		val: McObjectId;\r
		ret: boolean;\r
	};\r
	/**\r
	 * 获取 resbuf 数据项中的字符串。\r
	 * @param lItem 数据项索引。\r
	 * @returns 包含字符串和返回值的对象。\r
	 */\r
	AtString(lItem: number, decodeFromGb2312?: boolean): {\r
		val: string;\r
		ret: boolean;\r
	};\r
	/**\r
	 * 获取 resbuf 数据项中的点坐标。\r
	 * @param lItem 数据项索引。\r
	 * @returns 包含点坐标和返回值的对象。\r
	 */\r
	AtPoint(lItem: number): {\r
		val: McGePoint3d;\r
		ret: boolean;\r
	};\r
	/**\r
	 * 获取 resbuf 数据项中的数据类型。\r
	 * @returns 数据类型。\r
	 */\r
<<<<<<< HEAD\r
	ItemDataType(): number;\r
=======\r
	ItemDataType(index: number): number;\r
	/**\r
	 * 获取 resbuf 数据项中的数据的DXF值\r
	 * @returns 数据类型。\r
	 */\r
	ItemDataDxf(index: number): number;\r
>>>>>>> 8c441820 (init)\r
	/**\r
	 * 添加 double 类型值到 resbuf 中。\r
	 * @param val double 类型值。\r
	 * @param lDataType 数据类型。\r
	 * @returns 添加的数据项索引。\r
	 */\r
	AddDouble(val: number, lDataType?: number): number;\r
	/**\r
	 * 添加 long 类型值到 resbuf 中。\r
	 * @param val long 类型值。\r
	 * @param lDataType 数据类型。\r
	 * @returns 添加的数据项索引。\r
	 */\r
	AddLong(val: number, lDataType?: number): number;\r
	/**\r
	 * 添加 ObjectId 到 resbuf 中。\r
	 * @param val ObjectId。\r
	 * @param lDataType 数据类型。\r
	 * @returns 添加的数据项索引。\r
	 */\r
	AddObjectId(val: number, lDataType?: number): number;\r
	/**\r
	 * 添加字符串到 resbuf 中。\r
	 * @param str 字符串。\r
	 * @param lDataType 数据类型。\r
	 * @returns 添加的数据项索引。\r
	 */\r
	AddString(str: string, lDataType?: number, decodeFromGb2312?: boolean): number;\r
	/**\r
<<<<<<< HEAD\r
	 * 添加对象类型，用于选择集过滤使用\r
=======\r
	 * 添加实体类型，用于选择集过滤使用\r
	 * @param str 多个类型用,连接 例如: "TEXT,MTEXT"\r
	 * @description 实体的类型表\r
	 * | 类型 | 描述 |\r
	 * | ------- | ------- |\r
	 * | TEXT  | 文字  |\r
	 * | MTEXT  | 多行文字  |\r
	 * | CIRCLE  | 圆  |\r
	 * | ARC  | 圆弧  |\r
	 * | LINE  | 线  |\r
	 * | LWPOLYLINE | 多段线 |\r
	 * | INSERT | 图块 |\r
	 * | ELLIPSE | 椭圆 |\r
	 * | SPLINE | 样条线 |\r
	 * | LinkLine | 超链接 |\r
>>>>>>> 8c441820 (init)\r
	 */\r
	AddMcDbEntityTypes(str: string): any;\r
	/**\r
	 * 添加点坐标到 resbuf 中。\r
	 * @param pt 点坐标。\r
	 * @param lDataType 数据类型。\r
	 * @returns 添加的数据项索引。\r
	 */\r
	AddPoint(pt: McGePoint3d, lDataType?: number): number;\r
	/**\r
	 * 移除所有 resbuf 数据项。\r
	 */\r
	RemoveAll(): void;\r
	/**\r
	 * 移除指定索引的 resbuf 数据项。\r
	 * @param lItem 数据项索引。\r
	 */\r
	Remove(lItem: number): void;\r
	/**\r
	 * 调试输入信息\r
	 */\r
	PrintData(): void;\r
}\r
/**\r
 * MxCADUtilityClass 类提供了一系列与绘图相关的工具方法\r
 */\r
export declare class MxCADUtilityClass {\r
	private imp;\r
	constructor();\r
	/**\r
	 * eraseObject 方法用于删除指定的图形对象\r
	 * @param lId - 需要删除的图形对象的 ID\r
	 * @returns 返回一个布尔值，表示是否删除成功\r
	 */\r
	eraseObject(lId: number, isErase?: boolean): boolean;\r
	/**\r
	 * highlightEntity 方法用于高亮指定的图形对象\r
	 * @param lId - 需要高亮的图形对象的 ID\r
	 * @param isHighlight - 是否需要高亮，默认为 true\r
	 */\r
	highlightEntity(lId: number, isHighlight?: boolean): any;\r
	/**\r
	 * findEntAtPoint 方法用于在指定坐标点附近查找图形对象\r
	 * @param dX - 坐标点的 X 坐标值\r
	 * @param dY - 坐标点的 Y 坐标值\r
	 * @param dZ - 坐标点的 Z 坐标值\r
	 * @param dSearhRange - 查找范围，默认为 -1（表示查找整个绘图区域）\r
	 * @param filter - 过滤器，用于过滤查找到的图形对象，默认为 null（表示不进行过滤）\r
	 * @returns 返回查找到的图形对象的 ID\r
	 */\r
	findEntAtPoint(dX: number, dY: number, dZ: number, dSearhRange?: number, filter?: MxCADResbuf | null): McObjectId;\r
	/**\r
	 * selectEnt 方法用于在指定位置选择图形对象\r
	 * @param strPrompt - 选择时的提示信息，默认为 null（表示不显示提示信息）\r
	 * @param filter - 过滤器，用于过滤选择到的图形对象，默认为 null（表示不进行过滤）\r
<<<<<<< HEAD\r
	 * @returns 返回一个 Promise，其中包含选择到的图形对象的 ID 数组\r
	 */\r
	selectEnt(strPrompt?: string, filter?: MxCADResbuf | null, isSelectMxDraw?: boolean): Promise<McObjectId[]>;\r
=======\r
	 * @param isSelectMxDraw 是否选择批注图形 默认true\r
	 * @param init 选择图形前初始化函数( 会在实例化{@link https://mxcadx.gitee.io/mxdraw_api_docs/classes/MrxDbgUiPrPoint.html | mxdraw取点类}时触发，得到取点实例)\r
	 * @param callbackGetPoint 回调函数 获取选中图形时的坐标点\r
	 * @returns 返回一个 Promise，其中包含选择到的图形对象的 ID 数组\r
	 */\r
	selectEnt(strPrompt?: string, filter?: MxCADResbuf | null, isSelectMxDraw?: boolean, init?: (getPoint: MrxDbgUiPrPoint) => any, callbackGetPoint?: (point: McGePoint3d) => void): Promise<McObjectId[]>;\r
>>>>>>> 8c441820 (init)\r
	/**\r
   * 得到当前选中的对象。\r
   */\r
	getCurrentSelect(filter?: MxCADResbuf | null): McObjectId[];\r
<<<<<<< HEAD\r
	userSelect(strPrompt?: string, filter?: MxCADResbuf | null): Promise<McObjectId[]>;\r
	init(): void;\r
	getCorner(strPrompt?: string, pt1?: McGePoint3d, detailedResult?: Function, drawSelectCroner?: boolean, isDisableAllTrace?: boolean): Promise<{\r
		pt1: McGePoint3d;\r
		pt2: McGePoint3d;\r
	} | null>;\r
=======\r
	/** 用户选择\r
	 * @param strPrompt 字符串提示\r
	 * @param filter 过滤对象\r
	 * @returns 得到选择的对象ID\r
	 *  */\r
	userSelect(strPrompt?: string, filter?: MxCADResbuf | null, init?: (ss: MxCADSelectionSet, getPoint: MrxDbgUiPrPoint) => any): Promise<McObjectId[]>;\r
	init(): void;\r
	/** 获取角点(鼠标点击的两个点)\r
	 * @param strPrompt 字符串提示\r
	 * @param pt1 第一个点 (已知一个角点的情况)\r
	 * @param detailedResult {@link DetailedResult} 交互结果讲台的回调\r
	 * @param drawSelectCroner 绘制选择对象的选框(true有背景false无背景)\r
	 * @param isDisableAllTrace 是否禁用所有跟踪\r
	 *  */\r
	getCorner(strPrompt?: string, pt1?: McGePoint3d, detailedResult?: (retcode: DetailedResult) => any, drawSelectCroner?: boolean, isDisableAllTrace?: boolean, init?: (getPoint: MxCADUiPrPoint) => any): Promise<{\r
		pt1: McGePoint3d;\r
		pt2: McGePoint3d;\r
	} | null>;\r
	/** 获取多个实体形成的包围盒\r
	 * @param aryId 实体对象ID数组\r
	 *  */\r
>>>>>>> 8c441820 (init)\r
	getMcDbEntitysBoundingBox(aryId: McObjectId[]): {\r
		minPt: McGePoint3d;\r
		maxPt: McGePoint3d;\r
	} | undefined;\r
<<<<<<< HEAD\r
=======\r
	/** 计算凸度\r
	 * @param pt1 开始点\r
	 * @param pt2 中点\r
	 * @param pt3 结束点\r
	 *  */\r
>>>>>>> 8c441820 (init)\r
	calcBulge(pt1: McGePoint3d, pt2: McGePoint3d, pt3: McGePoint3d): {\r
		val: number;\r
		ret: boolean;\r
	};\r
<<<<<<< HEAD\r
	builderHatchFromPoint(pt: McGePoint3d): McDbHatch | null;\r
}\r
export declare let MxCADUtility: MxCADUtilityClass;\r
export declare enum MxCADSelectionSetStatus {\r
	kSelected = 0,\r
	kNone = 1,\r
	kCanceled = 2,\r
	kRejected = 3,\r
	kKeyword = 4\r
}\r
export declare class MxCADSelectionSet extends McRxObject {\r
	isWhileSelect: boolean;\r
=======\r
	/** 通过一个点坐标填充对应位置实体的填充 */\r
	builderHatchFromPoint(pt: McGePoint3d): McDbHatch | null;\r
}\r
/** 提供了一系列与绘图相关的工具方法 */\r
export declare let MxCADUtility: MxCADUtilityClass;\r
/** 选择集状态枚举 */\r
export declare enum MxCADSelectionSetStatus {\r
	/** 构造选择集成功 */\r
	kSelected = 0,\r
	/** 当交互构造选择集时，用户直接按下了 Enter 键。 */\r
	kNone = 1,\r
	/** 当交互构造选择集时，用户按下了 Esc 键取消。 */\r
	kCanceled = 2,\r
	/** 拒绝执行的无效请求(关键字错误)。 */\r
	kRejected = 3,\r
	/** 输入了关键值 */\r
	kKeyword = 4\r
}\r
/** 选择集 用于选择实体 */\r
export declare class MxCADSelectionSet extends McRxObject {\r
	/** 是否循环选择 */\r
	isWhileSelect: boolean;\r
	/** 选择是否高亮 */\r
>>>>>>> 8c441820 (init)\r
	isSelectHighlight: boolean;\r
	private selectPt1;\r
	private selectPt2;\r
	constructor();\r
<<<<<<< HEAD\r
=======\r
	/** 得到选择形成的两个对角点 */\r
>>>>>>> 8c441820 (init)\r
	getSelectPoint(): {\r
		pt1: McGePoint3d;\r
		pt2: McGePoint3d;\r
	};\r
<<<<<<< HEAD\r
	allSelect(filter?: MxCADResbuf | null): number;\r
	pointSelect(dX: number, dY: number, filter?: MxCADResbuf | null, dTol?: number): number;\r
	crossingSelect(dX1: number, dY1: number, dX2: number, dY2: number, filter?: MxCADResbuf | null): number;\r
	count(): number;\r
	item(lItem: number): McObjectId;\r
	forEach(call: (val: McObjectId) => void): void;\r
	getIds(): McObjectId[];\r
	userSelect(strPrompt?: string, filter?: MxCADResbuf | null): Promise<boolean>;\r
=======\r
	/** 全选\r
	 * @param filter 过滤对象\r
	 *  */\r
	allSelect(filter?: MxCADResbuf | null): number;\r
	/** 根据一个坐标点选择一个实体对象的索引\r
	 * @param dX 坐标x\r
	 * @param dY 坐标y\r
	 * @param filter 过滤对象\r
	 *  */\r
	pointSelect(dX: number, dY: number, filter?: MxCADResbuf | null, dTol?: number): number;\r
	/** 根据两个对角点选择一个实体对象的索引\r
	 * @param\r
	 *  */\r
	crossingSelect(dX1: number, dY1: number, dX2: number, dY2: number, filter?: MxCADResbuf | null): number;\r
	/** 获取当前选中的个数 */\r
	count(): number;\r
	/** 选择集为空 */\r
	isNull(): boolean;\r
	/** 根据对象索引 得到对应对象ID */\r
	item(lItem: number): McObjectId;\r
	/** 遍历已选中的实体 */\r
	forEach(call: (val: McObjectId) => void): void;\r
	/** 得到当前已选中的所有对象ID */\r
	getIds(): McObjectId[];\r
	/** 用户选择\r
	 * @param  strPrompt 字符串提示\r
	 * @param filter 提示\r
	 * @param init 用户选择前的初始化操作\r
	 *  */\r
	userSelect(strPrompt?: string, filter?: MxCADResbuf | null, init?: (getPoint: MrxDbgUiPrPoint) => any): Promise<boolean>;\r
>>>>>>> 8c441820 (init)\r
}\r
export declare class MxCADUiPrBase {\r
	protected imp: any;\r
	protected mxobj: MxDrawObject;\r
	constructor(imp: any);\r
	protected doc2cad1(pt: THREE.Vector3): McGePoint3d;\r
	protected doc2cad2(x: number, y: number, z: number): McGePoint3d;\r
	protected cad2doc1(pt: McGePoint3d): THREE.Vector3;\r
	protected cad2doc2(x: number, y: number, z: number): THREE.Vector3;\r
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
	* 清除上一次的输入点数据。\r
	* @returns 选择的关键字\r
	*/\r
	clearLastInputPoint(): void;\r
	/**\r
	* 设置上一次的输入点。\r
	* @returns 选择的关键字\r
	*/\r
	setLastInputPoint(pt: McGePoint3d): void;\r
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
	setUserDraw(pDraw: ((currentPoint: McGePoint3d, pWorldDraw: McEdGetPointWorldDrawObject) => void)): void;\r
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
	* 是否禁用捕捉\r
	*/\r
	isDisableOsnap(): boolean;\r
<<<<<<< HEAD\r
	setDisableDynamicTrace(isDisable: boolean): void;\r
	isDisableDynamicTrace(): boolean;\r
	setDisablePolarAxisTrace(isDisable: boolean): void;\r
	isDisablePolarAxisTrace(): boolean;\r
	setDisableGridTrace(isDisable: boolean): void;\r
	isDisableGridTrace(): boolean;\r
	setDisableOrthoTrace(isDisable: boolean): void;\r
	isDisableOrthoTrace(): boolean;\r
=======\r
	/** 设置是否禁用动态跟踪 */\r
	setDisableDynamicTrace(isDisable: boolean): void;\r
	/** 是否禁用动态跟踪 */\r
	isDisableDynamicTrace(): boolean;\r
	/** 设置是否禁用极轴跟踪 */\r
	setDisablePolarAxisTrace(isDisable: boolean): void;\r
	/** 是否禁用极轴跟踪 */\r
	isDisablePolarAxisTrace(): boolean;\r
	/** 设置是否禁用格网追踪 */\r
	setDisableGridTrace(isDisable: boolean): void;\r
	/** 是否禁用格网追踪 */\r
	isDisableGridTrace(): boolean;\r
	/** 设置是否禁用正射追踪 */\r
	setDisableOrthoTrace(isDisable: boolean): void;\r
	/** 是否禁用正射追踪  */\r
	isDisableOrthoTrace(): boolean;\r
	/** 禁用所有跟踪 */\r
>>>>>>> 8c441820 (init)\r
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
<<<<<<< HEAD\r
export declare class MxCADUiPrPoint extends MxCADUiPrBase {\r
	constructor();\r
	go(): Promise<McGePoint3d | null>;\r
	/**\r
	 * 得以获取的点对象，Three.js坐标\r
	 * @returns 点对象 THREE.THREE.Vector3\r
=======\r
/** UI交互取点 (鼠标点击画布) */\r
export declare class MxCADUiPrPoint extends MxCADUiPrBase {\r
	constructor();\r
	private goResolve;\r
	/** 提前结束本次go方法运行\r
	 * @param val go方法获取的点坐标或者其他任意值\r
	 * @returns boolean 是否成功结束运行go方法\r
	 *  */\r
	abortGo(val?: any): boolean;\r
	/**\r
	 *  运行go方法, 将返回用户交互的Promise任务\r
	 *  @description\r
	 * 当鼠标点击画布后 Promise完成, 得到其点击的坐标点\r
	 * 其他交互操作方式将返回null 如按下Esc取消键或在交互中输入对应的关键词\r
	 *  */\r
	go(): Promise<McGePoint3d | null>;\r
	/**\r
	 * 得以获取的点\r
	 * @returns 点坐标\r
>>>>>>> 8c441820 (init)\r
	 */\r
	value(): McGePoint3d;\r
	/**\r
	 * 得到 Three.js 坐标.\r
	 * @returns 点对象 MdGePoint3d\r
	 */\r
	getDocValue(): McGePoint3d;\r
	/**\r
	 * 得到动态拖动的基点\r
	 * @returns 基点 THREE.THREE.Vector3\r
	 */\r
	basePt(): McGePoint3d;\r
	/**\r
	 * 设置动态拖动的基点\r
	 * @param basePt 基点 THREE.THREE.Vector3\r
	 * @returns 点对象 DWG图纸坐标\r
	 */\r
	setBasePt(basePt: McGePoint3d): void;\r
	/**\r
	 * 设置动态拖动的基点用于动态绘制。\r
	 * @param useIt 是否设置,setBasePt会自设置true.\r
	 * @returns void\r
	 */\r
	setUseBasePt(useIt: boolean): void;\r
}\r
<<<<<<< HEAD\r
=======\r
/** UI交互获取距离\r
 * @description 根据两个点确定一段距离\r
 */\r
>>>>>>> 8c441820 (init)\r
export declare class MxCADUiPrDist extends MxCADUiPrBase {\r
	constructor();\r
	/**\r
	 * 得以获取的距离\r
	 */\r
	value(): number;\r
	/**\r
	 * 得到动态拖动的基点\r
	 * @returns 基点 McGePoint3d\r
	 */\r
	basePt(): McGePoint3d;\r
	/**\r
	 * 设置动态拖动的基点\r
	 * @param basePt 基点 McGePoint3d\r
	 * @returns 点对象 DWG图纸坐标\r
	 */\r
	setBasePt(basePt: McGePoint3d): void;\r
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
	go(): Promise<number | null>;\r
}\r
<<<<<<< HEAD\r
=======\r
/** UI交互 根据两个点计算得到角度 */\r
>>>>>>> 8c441820 (init)\r
export declare class MxCADUiPrAngle extends MxCADUiPrBase {\r
	constructor();\r
	/**\r
	 * 得以获取的距离\r
	 */\r
	value(): number;\r
	/**\r
	 * 得到动态拖动的基点\r
	 * @returns 基点 McGePoint3d\r
	 */\r
	basePt(): McGePoint3d;\r
	/**\r
	 * 设置动态拖动的基点\r
	 * @param basePt 基点 McGePoint3d\r
	 * @returns 点对象 DWG图纸坐标\r
	 */\r
	setBasePt(basePt: McGePoint3d): void;\r
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
	go(): Promise<number | null>;\r
}\r
<<<<<<< HEAD\r
=======\r
/** UI交互 根据用户输入得到整型数字 */\r
>>>>>>> 8c441820 (init)\r
export declare class MxCADUiPrInt extends MxCADUiPrBase {\r
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
	go(): Promise<number | null>;\r
}\r
<<<<<<< HEAD\r
=======\r
/** UI交互 根据用户输入得到关键词 */\r
>>>>>>> 8c441820 (init)\r
export declare class MxCADUiPrKeyWord extends MxCADUiPrBase {\r
	constructor();\r
	/**\r
	 * 开始动态拖动\r
	 * @param retcall  回调参数status {@link MrxDbgUiPrBaseReturn | 状态值}\r
	 * @returns void\r
	 */\r
	go(): Promise<string | null>;\r
}\r
<<<<<<< HEAD\r
=======\r
/** UI交互 根据用户输入得到字符串 */\r
>>>>>>> 8c441820 (init)\r
export declare class MxCADUiPrString extends MxCADUiPrBase {\r
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
	go(): Promise<string | null>;\r
}\r
<<<<<<< HEAD\r
=======\r
/** UI交互 根据用户鼠标点击的坐标得到对应的实体 */\r
>>>>>>> 8c441820 (init)\r
export declare class MxCADUiPrEntity extends MxCADUiPrBase {\r
	private filter?;\r
	private id;\r
	constructor();\r
	setFilter(filter: MxCADResbuf): void;\r
	getFilter(): MxCADResbuf | undefined;\r
	go(): Promise<McObjectId>;\r
	/**\r
   * 得以获取对象时的输入点\r
   */\r
	pickPoint(): McGePoint3d;\r
	/**\r
	 * 得以获取对象时的id\r
	 */\r
	value(): McObjectId;\r
	/**\r
	 * 得以获取对象时的输入点的CAD图纸坐标.\r
	 * @returns 点对象 MdGePoint3d\r
	 */\r
	getDocPickPoint(): McGePoint3d;\r
}\r
/**\r
 * 表示数据库实体。\r
 */\r
export declare class McDbEntity extends McDbObject {\r
	/**\r
	 * 构造函数。\r
	 * @param imp 内部实现对象。\r
	 */\r
	constructor(imp?: any);\r
	/**\r
	 * 打碎对象，返回打后对象数据链表\r
	 */\r
	explode(): MxCADResbuf;\r
	/**\r
	 * 得到对象颜色\r
	 */\r
	get trueColor(): McCmColor;\r
	/**\r
	 * 设置对象颜色\r
	 */\r
	set trueColor(val: McCmColor);\r
	/**\r
	 * 得到对象颜色索引\r
	 */\r
	get colorIndex(): number;\r
	/**\r
	 * 设置对象颜色索引\r
	 */\r
	set colorIndex(val: number);\r
	/**\r
	 * 得到对象图层名\r
	 */\r
	get layer(): string;\r
	/**\r
	 * 设置对象图层名\r
	 */\r
	set layer(val: string);\r
	/**\r
	* 得到对象线型名\r
	*/\r
	get linetype(): string;\r
	/**\r
	 * 设置对象线型名\r
	 */\r
	set linetype(val: string);\r
	/**\r
	 * 得到对象线型比例\r
	 */\r
	get linetypeScale(): number;\r
	/**\r
	 * 设置对象线型比例\r
	 */\r
	set linetypeScale(val: number);\r
	/**\r
	 * 对象是否可见\r
	 */\r
	get visible(): boolean;\r
	/**\r
	 * 设置是否可见\r
	 */\r
	set visible(val: boolean);\r
	/**\r
	 * 得到对象线重\r
	 */\r
	get lineweight(): number;\r
	/**\r
	 * 设置对象线重\r
	 */\r
	set lineweight(val: number);\r
	/**\r
	 * 得到对象文字样式\r
	 */\r
	get textStyle(): string;\r
	/**\r
	 * 设置对象文字样式\r
	 */\r
	set textStyle(val: string);\r
	/**\r
	 *设置对象是否高亮\r
	 */\r
	highlight(isHighlight: boolean): void;\r
	/**\r
	 *移动对象\r
	 */\r
	move(fromPoint: McGePoint3d, toPoint: McGePoint3d): boolean;\r
	/**\r
	 *旋转对象\r
	 */\r
	rotate(basePoint: McGePoint3d, dRotationAngle: number): boolean;\r
	/**\r
	 *镜向对象\r
	 */\r
	mirror(point1: McGePoint3d, point2: McGePoint3d): boolean;\r
	/**\r
	 *缩放对象\r
	 */\r
	scaleEntity(basePoint: McGePoint3d, dScaleFactor: number): boolean;\r
	/**\r
	 *变换对象\r
	 */\r
	transformBy(transformationMatrix: McGeMatrix3d): boolean;\r
	/**\r
	 *得到对象的最小外包\r
	 */\r
	getBoundingBox(): {\r
		minPt: McGePoint3d;\r
		maxPt: McGePoint3d;\r
		ret: boolean;\r
	};\r
	/**\r
   *得到对象的扩展数据\r
   */\r
	getxData(appName?: string): MxCADResbuf;\r
	/**\r
	 *设置对象的扩展数据\r
	 */\r
	setxData(xdata: MxCADResbuf): boolean;\r
	getxDataString(appName: string): {\r
		val: string;\r
		ret: boolean;\r
	};\r
	setxDataString(appName: string, val: string): boolean;\r
	getxDataDouble(appName: string): {\r
		val: number;\r
		ret: boolean;\r
	};\r
	setxDataDouble(appName: string, val: number): boolean;\r
	getxDataLong(appName: string): {\r
		val: number;\r
		ret: boolean;\r
	};\r
	setxDataLong(appName: string, val: number): boolean;\r
	getxDataPoint(appName: string): {\r
		val: McGePoint3d;\r
		ret: boolean;\r
	};\r
	setxDataPoint(appName: string, val: McGePoint3d): boolean;\r
	deleteXData(appName: string): boolean;\r
	getAllAppName(): McGeStringArray;\r
<<<<<<< HEAD\r
	get layerId(): McObjectId;\r
	set layerId(id: McObjectId);\r
	get linetypeId(): McObjectId;\r
	set linetypeId(id: McObjectId);\r
	get textStyleId(): McObjectId;\r
	set textStyleId(id: McObjectId);\r
=======\r
	/** 图层ID对象 */\r
	get layerId(): McObjectId;\r
	set layerId(id: McObjectId);\r
	/** 线型ID对象 */\r
	get linetypeId(): McObjectId;\r
	set linetypeId(id: McObjectId);\r
	/** 文字样式ID对象 */\r
	get textStyleId(): McObjectId;\r
	set textStyleId(id: McObjectId);\r
	/** 与其他实体相交, 得到交点\r
	* @param intersectObject 需要相交的是实体对象\r
	* @param exOption 相交的选项\r
	* @returns 得到所有交点\r
	*  */\r
>>>>>>> 8c441820 (init)\r
	IntersectWith(intersectObject: McDbEntity, exOption: McDb.Intersect): McGePoint3dArray;\r
	/**\r
	 * 计算面积\r
	 */\r
	getArea(): {\r
		val: number;\r
		ret: boolean;\r
	};\r
	/**\r
<<<<<<< HEAD\r
	 * 暂时禁用对象的自动更新显示.\r
	 */\r
	disableDisplay(isDisable: boolean): void;\r
=======\r
	 * 禁用对象的自动更新显示.\r
	 */\r
	disableDisplay(isDisable: boolean): void;\r
	/**\r
   * 显示调用对象更新显示.\r
   */\r
	updateDisplay(): void;\r
	syncData(_toCpp?: boolean): boolean;\r
	/**\r
	* 对象的显示顺序\r
	*/\r
	get drawOrder(): number;\r
	/**\r
	* 对象的显示顺序\r
	*/\r
	set drawOrder(order: number);\r
>>>>>>> 8c441820 (init)\r
}\r
/**\r
 * 表示数据库曲线。\r
 */\r
export declare class McDbCurve extends McDbEntity {\r
	/**\r
	 * 构造函数。\r
	 * @param imp 内部实现对象。\r
	 */\r
	constructor(imp?: any);\r
	/**\r
	 * 获取起始参数。\r
	 * @returns 起始参数及执行结果。\r
	 */\r
	getStartParam(): {\r
		val: number;\r
		ret: boolean;\r
	};\r
	/**\r
	 * 获取结束参数。\r
	 * @returns 结束参数及执行结果。\r
	 */\r
	getEndParam(): {\r
		val: number;\r
		ret: boolean;\r
	};\r
	/**\r
	 * 获取参数位置上的距离。\r
	 * @param param 参数位置。\r
	 * @returns 距离及执行结果。\r
	 */\r
	getDistAtParam(param: number): {\r
		val: number;\r
		ret: boolean;\r
	};\r
	/**\r
	 * 获取距离位置上的参数。\r
	 * @param dist 距离位置。\r
	 * @returns 参数及执行结果。\r
	 */\r
	getParamAtDist(dist: number): {\r
		val: number;\r
		ret: boolean;\r
	};\r
	/**\r
	 * 获取距离位置上的点。\r
	 * @param pt 距离位置。\r
	 * @returns 点及执行结果。\r
	 */\r
	getDistAtPoint(pt: McGePoint3d): {\r
		val: number;\r
		ret: boolean;\r
	};\r
	/**\r
	 * 获取距离位置上的点。\r
	 * @param dist 距离位置。\r
	 * @returns 点及执行结果。\r
	 */\r
	getPointAtDist(dist: number): {\r
		val: McGePoint3d;\r
		ret: boolean;\r
	};\r
	/**\r
	 * 得到曲线的开始点\r
	 */\r
	getStartPoint(): {\r
		val: McGePoint3d;\r
		ret: boolean;\r
	};\r
	/**\r
	 * 得到曲线的结束点\r
	 */\r
	getEndPoint(): {\r
		val: McGePoint3d;\r
		ret: boolean;\r
	};\r
	/**\r
	 * 得到曲线参数所在的点坐标\r
	 */\r
	getPointAtParam(param: number): {\r
		val: McGePoint3d;\r
		ret: boolean;\r
	};\r
	/**\r
	 * 得到曲线某点位置的曲线参数\r
	 */\r
	getParamAtPoint(pt: McGePoint3d): {\r
		val: number;\r
		ret: boolean;\r
	};\r
	/**\r
	 * 通过曲线参数得到曲线的一阶导数\r
	 */\r
	getFirstDerivFromParam(param: number): {\r
		val: McGeVector3d;\r
		ret: boolean;\r
	};\r
	/**\r
	 * 通过曲线上某点得到曲线的一阶导数\r
	 */\r
	getFirstDeriv(pt: McGePoint3d): {\r
		val: McGeVector3d;\r
		ret: boolean;\r
	};\r
	/**\r
	 * 得到一个点到曲线的最近点\r
	 */\r
	getClosestPointTo(givenPnt: McGePoint3d, isExtend: boolean): {\r
		val: McGePoint3d;\r
		ret: boolean;\r
	};\r
	/**\r
	 * 得到偏移曲线\r
	 */\r
	offsetCurves(dOffsetDist: number, ptOffsetRef: McGePoint3d): McDbObjectArray;\r
	/**\r
	 * 打断曲线\r
	 */\r
	splitCurves(pts: McGePoint3d[]): McDbObjectArray;\r
	splitCurvesFromParam(params: number[]): McDbObjectArray;\r
	/**\r
	 * 把曲线离散成一堆点\r
	 */\r
	getSamplePoints(dApproxEps: number): MxCADResbuf;\r
	/**\r
	 * 得到曲线长度\r
	 */\r
	getLength(): {\r
		val: number;\r
		ret: boolean;\r
	};\r
}\r
/**\r
 * 表示一个直线对象。\r
 */\r
export declare class McDbLine extends McDbCurve {\r
	/**\r
	 * 构造函数。\r
	 * @param imp C++ 实现对象。\r
	 */\r
	constructor(x1?: object | number, y1?: object | number, z1?: number, x2?: number, y2?: number, z2?: number);\r
	/**\r
	 * 获取起点。\r
	 */\r
	get startPoint(): McGePoint3d;\r
	/**\r
	 * 设置起点。\r
	 * @param pt 新的起点。\r
	 */\r
	set startPoint(pt: McGePoint3d);\r
	/**\r
	 * 获取终点。\r
	 */\r
	get endPoint(): McGePoint3d;\r
	/**\r
	 * 设置终点。\r
	 * @param pt 新的终点。\r
	 */\r
	set endPoint(pt: McGePoint3d);\r
}\r
/**\r
 * 表示一个 CAD 文字实体。\r
 */\r
export declare class McDbText extends McDbEntity {\r
	/**\r
	 * 构造函数。\r
	 * @param imp 实现对象。\r
	 */\r
	constructor(imp?: any);\r
	/**\r
	 * 获取或设置文字的位置。\r
	 */\r
	get position(): McGePoint3d;\r
	set position(pt: McGePoint3d);\r
	/**\r
	 * 获取或设置文字的对齐点。\r
	 */\r
	get alignmentPoint(): McGePoint3d;\r
	set alignmentPoint(pt: McGePoint3d);\r
	/**\r
	 * 获取或设置文字的倾斜角度。\r
	 */\r
	get oblique(): number;\r
	set oblique(val: number);\r
	/**\r
	 * 获取或设置文字的旋转角度。\r
	 */\r
	get rotation(): number;\r
	set rotation(pt: number);\r
	/**\r
	 * 获取或设置文字的高度。\r
	 */\r
	get height(): number;\r
	set height(val: number);\r
	/**\r
	 * 获取或设置文字的宽度因子。\r
	 */\r
	get widthFactor(): number;\r
	set widthFactor(val: number);\r
	/**\r
	 * 获取或设置文字的字符串。\r
	 */\r
	get textString(): string;\r
	set textString(val: string);\r
	/**\r
	 * 获取或设置文字的水平对齐方式。\r
	 */\r
	get horizontalMode(): McDb.TextHorzMode;\r
	set horizontalMode(val: McDb.TextHorzMode);\r
	/**\r
	 * 获取或设置文字的垂直对齐方式。\r
	 */\r
	get verticalMode(): McDb.TextVertMode;\r
	set verticalMode(val: McDb.TextVertMode);\r
}\r
/**\r
 * 表示一个 CAD 属性文字实体。\r
 */\r
export declare class McDbAttribute extends McDbText {\r
	/**\r
	 * 构造函数。\r
	 * @param imp 实现对象。\r
	 */\r
	constructor(imp?: any);\r
	/**\r
	* 获取或设置文字的字符串。\r
	*/\r
	get tag(): string;\r
	set tag(val: string);\r
	/**\r
	* 是否可见\r
	*/\r
	get isInvisible(): boolean;\r
	set isInvisible(val: boolean);\r
}\r
/**\r
* 块引用属性定义文字对象\r
*/\r
export declare class McDbAttributeDefinition extends McDbText {\r
	/**\r
	 * 构造函数。\r
	 * @param imp 实现对象。\r
	 */\r
	constructor(imp?: any);\r
	/**\r
	* 获取或设置文字的字符串。\r
	*/\r
	get tag(): string;\r
	set tag(val: string);\r
	/**\r
	* 是否可见\r
	*/\r
	get isInvisible(): boolean;\r
	set isInvisible(val: boolean);\r
	get prompt(): string;\r
	set prompt(val: string);\r
	get isConstant(): boolean;\r
	set isConstant(val: boolean);\r
	get isVerifiable(): boolean;\r
	set isVerifiable(val: boolean);\r
	get isPreset(): boolean;\r
	set isPreset(val: boolean);\r
}\r
/**\r
 * 文本实体类\r
 */\r
export declare class McDbMText extends McDbEntity {\r
	/**\r
	 * 构造函数\r
	 * @param imp 实现对象\r
	 */\r
	constructor(imp?: any);\r
	/**\r
	 * 获取位置\r
	 * @returns 位置点\r
	 */\r
	get location(): McGePoint3d;\r
	/**\r
	 * 设置位置\r
	 * @param pt 位置点\r
	 */\r
	set location(pt: McGePoint3d);\r
	/**\r
	 * 获取旋转角度\r
	 * @returns 旋转角度\r
	 */\r
	get rotation(): number;\r
	/**\r
	 * 设置旋转角度\r
	 * @param val 旋转角度\r
	 */\r
	set rotation(val: number);\r
	/**\r
	 * 获取宽度\r
	 * @returns 宽度\r
	 */\r
	get width(): number;\r
	/**\r
	 * 设置宽度\r
	 * @param val 宽度\r
	 */\r
	set width(val: number);\r
	/**\r
	 * 获取文本高度\r
	 * @returns 文本高度\r
	 */\r
	get textHeight(): number;\r
	/**\r
	 * 设置文本高度\r
	 * @param val 文本高度\r
	 */\r
	set textHeight(val: number);\r
	/**\r
	 * 获取附着点\r
	 * @returns 附着点\r
	 */\r
	get attachment(): McDb.AttachmentPoint;\r
	/**\r
	 * 设置附着点\r
	 * @param val 附着点\r
	 */\r
	set attachment(val: McDb.AttachmentPoint);\r
	/**\r
	 * 获取文本内容\r
	 * @returns 文本内容\r
	 */\r
	get contents(): string;\r
	/**\r
	 * 设置文本内容\r
	 * @param val 文本内容\r
	 */\r
	set contents(val: string);\r
}\r
/**\r
 * 表示一个圆形。\r
 */\r
export declare class McDbCircle extends McDbCurve {\r
	/**\r
	 * 构造函数。\r
	 * @param imp 内部对象。\r
	 */\r
	constructor(x?: object | number, y?: number, z?: number, radius?: number);\r
	/**\r
	 * 设置圆心坐标。\r
	 * @param x 圆心 x 坐标。\r
	 * @param y 圆心 y 坐标。\r
	 * @param z 圆心 z 坐标。\r
	 */\r
	setCenter(x: number, y: number, z?: number): void;\r
	/**\r
	 * 获取圆心坐标。\r
	 */\r
	get center(): McGePoint3d;\r
	/**\r
	 * 设置圆心坐标。\r
	 * @param pt 圆心坐标。\r
	 */\r
	set center(pt: McGePoint3d);\r
	/**\r
	 * 获取圆半径。\r
	 */\r
	get radius(): number;\r
	/**\r
	 * 设置圆半径。\r
	 * @param r 圆半径。\r
	 */\r
	set radius(r: number);\r
}\r
/**\r
 * 多段线类\r
 */\r
export declare class McDbPolyline extends McDbCurve {\r
	/**\r
	 * 构造函数\r
	 * @param imp 实现对象\r
	 */\r
	constructor(imp?: any);\r
	/**\r
	 * 获取是否闭合\r
	 */\r
	get isClosed(): boolean;\r
	/**\r
	 * 设置是否闭合\r
	 * @param val 是否闭合\r
	 */\r
	set isClosed(val: boolean);\r
	/**\r
	 * 获取常量宽度\r
	 */\r
	get constantWidth(): number;\r
	/**\r
	 * 设置常量宽度\r
	 * @param val 常量宽度\r
	 */\r
	set constantWidth(val: number);\r
	/**\r
	 * 在指定位置添加顶点\r
	 * @param index 位置\r
	 * @param pt 点\r
	 * @param bulge 凸度\r
	 * @param startWidth 起始宽度\r
	 * @param endWidth 结束宽度\r
	 */\r
	addVertexAt(pt: McGePoint3d | THREE.Vector3, bulge?: number, startWidth?: number, endWidth?: number, index?: number): boolean;\r
	/**\r
	 * 移除指定位置的顶点\r
	 * @param index 位置\r
	 */\r
	removeVertexAt(index: number): boolean;\r
	/**\r
	 * 获取顶点数量\r
	 */\r
	numVerts(): number;\r
	/**\r
	 * 获取指定位置的点\r
	 * @param index 位置\r
	 * @returns val: 点, ret: 返回值\r
	 */\r
	getPointAt(index: number): {\r
		val: McGePoint3d;\r
		ret: number;\r
	};\r
	/**\r
	 * 获取指定位置的凸度\r
	 * @param index 位置\r
	 */\r
	getBulgeAt(index: number): number;\r
	/**\r
	 * 获取指定位置的起始和结束宽度\r
	 * @param index 位置\r
	 * @returns val1: 起始宽度, val2: 结束宽度, ret: 返回值\r
	 */\r
	getWidthsAt(index: number): {\r
		val1: number;\r
		val2: number;\r
		ret: boolean;\r
	};\r
	/**\r
	 * 设置指定位置的点\r
	 * @param index 位置\r
	 * @param pt 点\r
	 */\r
	setPointAt(index: number, pt: McGePoint3d): boolean;\r
	/**\r
	 * 设置指定位置的凸度\r
	 * @param index 位置\r
	 * @param bulge 凸度\r
	 */\r
	setBulgeAt(index: number, bulge: number): boolean;\r
	/**\r
   * 修改线段的开始宽度，和结束宽度\r
   * @param index 位置\r
   * @param bulge 凸度\r
   */\r
	setWidthsAt(index: number, dStartWdith: number, dEntWdith: number): boolean;\r
}\r
/**\r
 * 表示一个 CAD 图块引用实体。\r
 */\r
export declare class McDbBlockReference extends McDbEntity {\r
	/**\r
	 * 初始化一个新的 McDbBlockReference 实例。\r
	 * @param imp 可选，用于初始化实例的 C++ 对象。\r
	 */\r
	constructor(imp?: any);\r
	/**\r
	 * 获取或设置该实体所引用的图块的 ID。\r
	 */\r
	get blockTableRecordId(): McObjectId;\r
	set blockTableRecordId(val: McObjectId);\r
	/**\r
	 * 获取或设置该实体的位置。\r
	 */\r
	get position(): McGePoint3d;\r
	set position(pt: McGePoint3d);\r
	/**\r
	 * 获取或设置该实体的缩放因子。\r
	 */\r
	get scaleFactors(): McGePoint3d;\r
	set scaleFactors(val: McGePoint3d);\r
	setScale(val: number): void;\r
	getScale(): number;\r
	/**\r
	 * 获取或设置该实体的旋转角度。\r
	 */\r
	get rotation(): number;\r
	set rotation(val: number);\r
	/**\r
	 * 获取或设置该实体所引用的图块的变换矩阵。\r
	 */\r
	get blockTransform(): McGeMatrix3d;\r
	set blockTransform(val: McGeMatrix3d);\r
	/**\r
   * 获取块名\r
   * @returns 块名\r
   */\r
	get blockName(): string;\r
	/**\r
   * 添加属性文字对象\r
   * @returns 块名\r
   */\r
	appendAttribute(attrib: McDbAttribute): McObjectId;\r
	/**\r
  * 得到块引用的所有属性文字对象id\r
  * @returns 块名\r
  */\r
	getAllAttribute(): McObjectId[];\r
	/**\r
   * 通过块表记录中的属性定义创建属性文字对象\r
   */\r
	createAttribute(): boolean;\r
}\r
/**\r
 * MdDbDimension 尺寸类\r
 */\r
export declare class McDbDimension extends McDbEntity {\r
	/**\r
	 * 构造函数\r
	 * @param imp 实现对象\r
	 */\r
	constructor(imp?: any);\r
	/**\r
	 * 获取文本位置\r
	 * @returns 文本位置\r
	 */\r
	get textPosition(): McGePoint3d;\r
	/**\r
	 * 设置文本位置\r
	 * @param pt 文本位置\r
	 */\r
	set textPosition(pt: McGePoint3d);\r
	/**\r
	 * 是否使用默认文本位置\r
	 * @returns 是否使用默认文本位置\r
	 */\r
	isUsingDefaultTextPosition(): boolean;\r
	/**\r
	 * 使用设置的文本位置\r
	 */\r
	useSetTextPosition(): void;\r
	/**\r
	 * 使用默认文本位置\r
	 */\r
	useDefaultTextPosition(): void;\r
	/**\r
	 * 获取高度\r
	 * @returns 高度\r
	 */\r
	get elevation(): number;\r
	/**\r
	 * 设置高度\r
	 * @param val 高度\r
	 */\r
	set elevation(val: number);\r
	/**\r
	 * 获取标注文本\r
	 * @returns 标注文本\r
	 */\r
	get dimensionText(): string;\r
	/**\r
	 * 设置标注文本\r
	 * @param val 标注文本\r
	 */\r
	set dimensionText(val: string);\r
	/**\r
	 * 获取文本旋转角度\r
	 * @returns 文本旋转角度\r
	 */\r
	get textRotation(): number;\r
	/**\r
	 * 设置文本旋转角度\r
	 * @param val 文本旋转角度\r
	 */\r
	set textRotation(val: number);\r
	/**\r
	 * 获取标注样式\r
	 * @returns 标注样式\r
	 */\r
	get dimensionStyle(): McObjectId;\r
	/**\r
	 * 设置标注样式\r
	 * @param val 标注样式\r
	 */\r
	set dimensionStyle(val: McObjectId);\r
	/**\r
	 * 获取文本附着点\r
	 * @returns 文本附着点\r
	 */\r
	get textAttachment(): McDb.AttachmentPoint;\r
	/**\r
	 * 设置文本附着点\r
	 * @param val 文本附着点\r
	 */\r
	set textAttachment(val: McDb.AttachmentPoint);\r
	/**\r
	 * 获取水平旋转角度\r
	 * @returns 水平旋转角度\r
	 */\r
	get horizontalRotation(): number;\r
	/**\r
	 * 设置水平旋转角度\r
	 * @param val 水平旋转角度\r
	 */\r
	set horizontalRotation(val: number);\r
	/**\r
	 * 重新计算标注块\r
	 */\r
	recomputeDimBlock(): void;\r
	/**\r
	 * 获取标注变量整数值\r
	 * @param iType 标注变量类型\r
	 * @returns 标注变量整数值\r
	 */\r
	getDimVarInt(iType: number): number;\r
	/**\r
	 * 设置标注变量整数值\r
	 * @param iType 标注变量类型\r
	 * @param val 标注变量整数值\r
	 */\r
	setDimVarInt(iType: number, val: number): void;\r
	/**\r
	 * 获取标注变量浮点数值\r
	 * @param iType 标注变量类型\r
	 * @returns 标注变量浮点数值\r
	 */\r
	getDimVarDouble(iType: number): number;\r
	/**\r
	 * 设置标注变量浮点数值\r
	 * @param iType 标注变量类型\r
	 * @param val 标注变量浮点数值\r
	 */\r
	setDimVarDouble(iType: number, val: number): void;\r
	/**\r
	 * 获取标注变量字符串值\r
	 * @param iType 标注变量类型\r
	 * @returns 标注变量字符串值\r
	 */\r
	getDimVarString(iType: number): string;\r
	/**\r
	 * 设置标注变量字符串值\r
	 * @param iType 标注变量类型\r
	 * @param val 标注变量字符串值\r
	 */\r
	setDimVarString(iType: number, val: string): void;\r
	/**\r
	 * 获取标注变量对象 ID\r
	 * @param iType 标注变量类型\r
	 * @returns 标注变量对象 ID\r
	 */\r
	getDimVarObjectId(iType: number): McObjectId;\r
	/**\r
	 * 设置标注变量对象 ID\r
	 * @param iType 标注变量类型\r
	 * @param val 标注变量对象 ID\r
	 */\r
	setDimVarObjectId(iType: number, val: McObjectId): void;\r
	/**\r
	 * 得到标注对象中的所有文字内容\r
	 */\r
	GetAllText(): McGeStringArray;\r
}\r
/**\r
 * 对齐标注尺寸类\r
 */\r
export declare class McDbAlignedDimension extends McDbDimension {\r
	constructor(imp?: any);\r
	/**\r
	 * 获取第一条线的端点\r
	 * @returns 第一条线的端点\r
	 */\r
	get xLine1Point(): McGePoint3d;\r
	/**\r
	 * 设置第一条线的端点\r
	 * @param pt 第一条线的端点\r
	 */\r
	set xLine1Point(pt: McGePoint3d);\r
	/**\r
	 * 获取第二条线的端点\r
	 * @returns 第二条线的端点\r
	 */\r
	get xLine2Point(): McGePoint3d;\r
	/**\r
	 * 设置第二条线的端点\r
	 * @param pt 第二条线的端点\r
	 */\r
	set xLine2Point(pt: McGePoint3d);\r
	/**\r
	 * 获取标注线的端点\r
	 * @returns 标注线的端点\r
	 */\r
	get dimLinePoint(): McGePoint3d;\r
	/**\r
	 * 设置标注线的端点\r
	 * @param pt 标注线的端点\r
	 */\r
	set dimLinePoint(pt: McGePoint3d);\r
	/**\r
	 * 获取倾斜角度\r
	 * @returns 倾斜角度\r
	 */\r
	get oblique(): number;\r
	/**\r
	 * 设置倾斜角度\r
	 * @param val 倾斜角度\r
	 */\r
	set oblique(val: number);\r
}\r
/**\r
 * 旋转标注尺寸类\r
 */\r
export declare class McDbRotatedDimension extends McDbDimension {\r
	constructor(imp?: any);\r
	/**\r
	 * 获取第一条线的端点\r
	 * @returns 第一条线的端点\r
	 */\r
	get xLine1Point(): McGePoint3d;\r
	/**\r
	 * 设置第一条线的端点\r
	 * @param pt 第一条线的端点\r
	 */\r
	set xLine1Point(pt: McGePoint3d);\r
	/**\r
	 * 获取第二条线的端点\r
	 * @returns 第二条线的端点\r
	 */\r
	get xLine2Point(): McGePoint3d;\r
	/**\r
	 * 设置第二条线的端点\r
	 * @param pt 第二条线的端点\r
	 */\r
	set xLine2Point(pt: McGePoint3d);\r
	/**\r
	 * 获取标注线的端点\r
	 * @returns 标注线的端点\r
	 */\r
	get dimLinePoint(): McGePoint3d;\r
	/**\r
	 * 设置标注线的端点\r
	 * @param pt 标注线的端点\r
	 */\r
	set dimLinePoint(pt: McGePoint3d);\r
	/**\r
	 * 获取倾斜角度\r
	 * @returns 倾斜角度\r
	 */\r
	get oblique(): number;\r
	/**\r
	 * 设置倾斜角度\r
	 * @param val 倾斜角度\r
	 */\r
	set oblique(val: number);\r
	/**\r
	 * 获取旋转角度\r
	 * @returns 旋转角度\r
	 */\r
	get rotation(): number;\r
	/**\r
	 * 设置旋转角度\r
	 * @param val 旋转角度\r
	 */\r
	set rotation(val: number);\r
}\r
/**\r
 * 表示一个圆弧。\r
 */\r
export declare class McDbArc extends McDbCurve {\r
	/**\r
	 * 构造函数。\r
	 * @param imp 内部对象。\r
	 */\r
	constructor(imp?: any);\r
	/**\r
	 * 设置圆心坐标。\r
	 * @param x 圆心 x 坐标。\r
	 * @param y 圆心 y 坐标。\r
	 * @param z 圆心 z 坐标。\r
	 */\r
	setCenter(x: number, y: number, z?: number): void;\r
	/**\r
	 * 获取圆心坐标。\r
	 */\r
	get center(): McGePoint3d;\r
	/**\r
	 * 设置圆心坐标。\r
	 * @param pt 圆心坐标。\r
	 */\r
	set center(pt: McGePoint3d);\r
	/**\r
	 * 获取圆半径。\r
	 */\r
	get radius(): number;\r
	/**\r
	 * 设置圆半径。\r
	 * @param r 圆半径。\r
	 */\r
	set radius(r: number);\r
	/**\r
	 * 获取开始角度。\r
	 */\r
	get startAngle(): number;\r
	/**\r
	 * 设置开始角度。\r
	 * @param r 角度。\r
	 */\r
	set startAngle(r: number);\r
	/**\r
	 * 获取结束角度。\r
	 */\r
	get endAngle(): number;\r
	/**\r
	 * 设置结束角度。\r
	 * @param r 角度。\r
	 */\r
	set endAngle(r: number);\r
	/**\r
	 * 3点计算圆弧\r
	 */\r
	computeArc(dStartPointX: number, dStartPointY: number, dMidPointX: number, dMidPointY: number, dEndPointX: number, dEndPointY: number): boolean;\r
}\r
/**\r
 * 表示一个椭圆弧。\r
 */\r
export declare class McDbEllipse extends McDbCurve {\r
	/**\r
	 * 构造函数。\r
	 * @param imp 内部对象。\r
	 */\r
	constructor(cenx?: object | number, ceny?: number, cenz?: number, majorAxisx?: number, majorAxisy?: number, majorAxisz?: number, radiusRatio?: number, startAngle?: number, endAngle?: number);\r
	/**\r
	 * 设置圆心坐标。\r
	 * @param x 圆心 x 坐标。\r
	 * @param y 圆心 y 坐标。\r
	 * @param z 圆心 z 坐标。\r
	 */\r
	setCenter(x: number, y: number, z?: number): void;\r
	/**\r
	 * 获取圆心坐标。\r
	 */\r
	get center(): McGePoint3d;\r
	/**\r
	 * 设置圆心坐标。\r
	 * @param pt 圆心坐标。\r
	 */\r
	set center(pt: McGePoint3d);\r
	/**\r
	 * 设置主轴向量\r
	 * @param x 圆心 x 坐标。\r
	 * @param y 圆心 y 坐标。\r
	 * @param z 圆心 z 坐标。\r
	 */\r
	setMajorAxis(x: number, y: number, z?: number): void;\r
	/**\r
	 * 获取主轴向量\r
	 */\r
	get majorAxis(): McGeVector3d;\r
	/**\r
	 * 设置主轴向量。\r
	 */\r
	set majorAxis(pt: McGeVector3d);\r
	/**\r
	 * 设置副轴向量\r
	 * @param x 圆心 x 坐标。\r
	 * @param y 圆心 y 坐标。\r
	 * @param z 圆心 z 坐标。\r
	 */\r
	setMinorAxis(x: number, y: number, z?: number): void;\r
	/**\r
	 * 获取副轴向量\r
	 */\r
	get minorAxis(): McGeVector3d;\r
	/**\r
	 * 设置副轴向量。\r
	 */\r
	set minorAxis(pt: McGeVector3d);\r
	/**\r
	 * 获取椭圆的副轴长度与主轴长度的比值\r
	 */\r
	get radiusRatio(): number;\r
	/**\r
	 * 设置椭圆的副轴长度与主轴长度的比值\r
	 */\r
	set radiusRatio(val: number);\r
	/**\r
	 * 获取椭圆弧的开始角度\r
	 */\r
	get startAngle(): number;\r
	/**\r
	 * 设置椭圆弧的开始角度\r
	 */\r
	set startAngle(val: number);\r
	/**\r
	 * 获取椭圆弧的结束角度\r
	 */\r
	get endAngle(): number;\r
	/**\r
	 * 设置椭圆弧的结束角度\r
	 */\r
	set endAngle(val: number);\r
}\r
/**\r
 * 表示一个点对象.\r
 */\r
export declare class McDbPoint extends McDbEntity {\r
	/**\r
	 * 构造函数。\r
	 * @param imp 内部对象。\r
	 */\r
	constructor(x?: object | number, y?: number, z?: number);\r
	/**\r
	 * 设置点坐标。\r
	 */\r
	setPosition(x: number, y: number, z?: number): void;\r
	/**\r
	 * 获取点坐标。\r
	 */\r
	get position(): McGePoint3d;\r
	/**\r
	 * 设置点坐标。\r
	 */\r
	set position(pt: McGePoint3d);\r
}\r
/**\r
<<<<<<< HEAD\r
 * 表示McDbHatch\r
=======\r
 * 表示填充对象\r
>>>>>>> 8c441820 (init)\r
 */\r
export declare class McDbHatch extends McDbEntity {\r
	/**\r
	 * 构造函数。\r
	 * @param imp 内部对象。\r
	 */\r
	constructor(x?: object);\r
<<<<<<< HEAD\r
	get numLoops(): number;\r
	loopTypeAt(loopIndex: number): number;\r
=======\r
	/** 闭合区域次数 */\r
	get numLoops(): number;\r
	/** 某次闭合区域索引中的类型 */\r
	loopTypeAt(loopIndex: number): number;\r
	/** 获取索引的值\r
	 * @param loopIndex  index 闭合区域的索引\r
	 * @returns { Object } ret 是否成功获取 | lootype 类型 | vertices 坐标集合 | bulges凸度集合\r
	 * @example\r
	 * \`\`\`ts\r
	 * import { McDbHatch } from "mxcad"\r
	 * const hatch = new McDbHatch()\r
	 * const numLoops = hatch.numLoops;\r
	 * for (let i = 0; i < numLoops; i++) {\r
	 *    const loop = hatch.getLoopAt(i);\r
	 *    console.log(loop)\r
	 * };\r
	 * \`\`\`\r
	 *  */\r
>>>>>>> 8c441820 (init)\r
	getLoopAt(loopIndex: number): {\r
		ret: boolean;\r
		lootype: number;\r
		vertices: McGePoint3d[];\r
		bulges: number[];\r
	};\r
<<<<<<< HEAD\r
	patternType(): number;\r
	patternName(): string;\r
	setPattern(type: number, patName: string): void;\r
	get patternAngle(): number;\r
	set patternAngle(angle: number);\r
	get patternScale(): number;\r
	set patternScale(scale: number);\r
=======\r
	/** 填充图案类型 */\r
	patternType(): number;\r
	/** 填充图案名称 */\r
	patternName(): string;\r
	/** 设置填充图案 */\r
	setPattern(type: number, patName: string): void;\r
	/** 填充图案角度 */\r
	get patternAngle(): number;\r
	set patternAngle(angle: number);\r
	/** 填充图案缩放比例 */\r
	get patternScale(): number;\r
	set patternScale(scale: number);\r
	/** 填充图案空间 */\r
>>>>>>> 8c441820 (init)\r
	get patternSpace(): number;\r
	set patternSpace(space: number);\r
	get patternDouble(): boolean;\r
	set patternDouble(isDouble: boolean);\r
<<<<<<< HEAD\r
	get numPatternDefinitions(): number;\r
=======\r
	/** 图案定义的数量 */\r
	get numPatternDefinitions(): number;\r
	/** 获取对应图案定义的数据\r
	 * @param index 索引\r
	 * @returns { Object } ret 是否成功获取 | angle 角度 | baseX, baseY 基点位置 | offsetX, offsetY 偏移位置 | aryDashes 短划线数据\r
	 *  */\r
>>>>>>> 8c441820 (init)\r
	getPatternDefinitionAt(index: number): {\r
		ret: boolean;\r
		angle: number;\r
		baseX: number;\r
		baseY: number;\r
		offsetX: number;\r
		offsetY: number;\r
		aryDashes: number[];\r
	};\r
<<<<<<< HEAD\r
	addPatternDefinition(angle: number, baseX: number, baseY: number, offsetX: number, offsetY: number, dashes: number[]): boolean;\r
	clearPatternDefinition(): boolean;\r
	hatchStyle(): McDb.HatchStyle;\r
	setHatchStyle(val: McDb.HatchStyle): void;\r
	evaluateHatch(): boolean;\r
	appendLoop(loopType: number, vertices: McGePoint3dArray, bulges: number[]): boolean;\r
	removeLoopAt(loopIndex: number): boolean;\r
	removeAllLoop(): boolean;\r
	setLoopAt(loopIndex: number, loopType: number, vertices: McGePoint3dArray, bulges: number[]): boolean;\r
=======\r
	/** 添加图案定义\r
	 * @param angle 角度 如 45\r
	 * @param baseX 基点x坐标\r
	 * @param baseY 基点y坐标\r
	 * @param offsetX 偏移x坐标\r
	 * @param offsetY 偏移y坐标\r
	 * @param dashes 短划线数据\r
	 * @example\r
	 * \`\`\`ts\r
	 * import { McDbHatch } from "mxcad"\r
	 * const hatch = new McDbHatch()\r
	 * hatch.addPatternDefinition(45, 0, 0, 0, 0.25, [45, 0.17677695, 0, 0, 0.25, 0.125, -0.0625])\r
	 * \`\`\`\r
	 * @returns { Boolean } 是否成功添加图案定义\r
	 *  */\r
	addPatternDefinition(angle: number, baseX: number, baseY: number, offsetX: number, offsetY: number, dashes: number[]): boolean;\r
	/** 清空图案定义 */\r
	clearPatternDefinition(): boolean;\r
	/** 填充样式 */\r
	hatchStyle(): McDb.HatchStyle;\r
	/** 设置填充样式 */\r
	setHatchStyle(val: McDb.HatchStyle): void;\r
	evaluateHatch(): boolean;\r
	/** 追加闭合区域\r
	 * @param loopType 闭合区域类型\r
	 * @param vertices 坐标集合\r
	 * @param bulges 凸度集合\r
	 *  */\r
	appendLoop(vertices: McGePoint3dArray, bulges: number[], loopType?: number): boolean;\r
	/** 追加圆构造的闭合区域\r
	* @param loopType 闭合区域类型\r
	* @param vertices 坐标集合\r
	* @param bulges 凸度集合\r
	*  */\r
	appendCircleLoop(dCenX: number, dCenY: number, dR: number, dPrecision?: number, loopType?: number): any;\r
	/** 删除某个索引下的闭合区域 */\r
	removeLoopAt(loopIndex: number): boolean;\r
	/** 删除所有闭合区域 */\r
	removeAllLoop(): boolean;\r
	/** 设置某个索引下的闭合区域数据\r
	 * @param loopIndex 闭合区域索引\r
	 * @param loopType 闭合区域类型\r
	 * @param vertices 坐标集合\r
	 * @param bulges 凸度集合\r
	 *  */\r
	setLoopAt(loopIndex: number, vertices: McGePoint3dArray, bulges: number[], loopType?: number): boolean;\r
>>>>>>> 8c441820 (init)\r
	isSolid(): boolean;\r
}\r
/**\r
 * McDbProxyEntity\r
 */\r
export declare class McDbProxyEntity extends McDbEntity {\r
	/**\r
	* 构造函数。\r
	* @param imp 内部对象。\r
	*/\r
	constructor(x?: object);\r
	getAllTextContent(): McGeStringArray;\r
	getAllEntityIds(): McObjectId[];\r
	getOriginalClassName(): string;\r
}\r
/**\r
 * McDbRasterImage\r
 */\r
export declare class McDbRasterImage extends McDbEntity {\r
	/**\r
	* 构造函数。\r
	* @param imp 内部对象。\r
	*/\r
	constructor(x?: object);\r
	setOrientation(origin: McGePoint3d, uCorner: McGeVector3d, vOnPlane: McGeVector3d): boolean;\r
	getOrientation(): {\r
		origin: McGePoint3d;\r
		uCorner: McGeVector3d;\r
		vOnPlane: McGeVector3d;\r
	};\r
	setImageDefId(imageId: McObjectId): void;\r
	imageDefId(): McObjectId;\r
	setClipBoundary(type: McDb.ClipBoundaryType, aryPoint: McGePoint3dArray): boolean;\r
	clipBoundary(): McGePoint3dArray;\r
	clipBoundaryType(): McDb.ClipBoundaryType;\r
}\r
/**\r
 * McDb 命名空间包含 AutoCAD 中的一些常用枚举。\r
 * @public\r
 */\r
export declare namespace McDb {\r
	/**\r
	 * 文本水平对齐方式枚举。\r
	 * @public\r
	 */\r
	enum TextHorzMode {\r
		/** 左对齐 */\r
		kTextLeft = 0,\r
		/** 居中对齐 */\r
		kTextCenter = 1,\r
		/** 右对齐 */\r
		kTextRight = 2,\r
		/** 水平对齐 */\r
		kTextAlign = 3,\r
		/** 垂直中间对齐 */\r
		kTextMid = 4,\r
		/** 自适应 */\r
		kTextFit = 5\r
	}\r
<<<<<<< HEAD\r
	enum Intersect {\r
		kOnBothOperands = 0,\r
		kExtendThis = 1,\r
		kExtendArg = 2,\r
=======\r
	/** 相交的类型\r
	 * 调用 {@link McDbEntity.IntersectWith} 方法的第二个参数\r
	 *  */\r
	enum Intersect {\r
		/** 两个实体都不延伸 */\r
		kOnBothOperands = 0,\r
		/** 只延伸原实体\r
		 * 指调用 {@link McDbEntity.IntersectWith} 方法的实例本身\r
		 *  */\r
		kExtendThis = 1,\r
		/**只延伸作为参数的实体\r
		 * 指 {@link McDbEntity.IntersectWith} 的第一个参数\r
		 *  */\r
		kExtendArg = 2,\r
		/** 两个实体都延伸  */\r
>>>>>>> 8c441820 (init)\r
		kExtendBoth = 3\r
	}\r
	/**\r
	 * 文本垂直对齐方式枚举。\r
	 * @public\r
	 */\r
	enum TextVertMode {\r
		/** 基线对齐 */\r
		kTextBase = 0,\r
		/** 底部对齐 */\r
		kTextBottom = 1,\r
		/** 垂直中间对齐 */\r
		kTextVertMid = 2,\r
		/** 顶部对齐 */\r
		kTextTop = 3\r
	}\r
	/**\r
	 * 实体附着点枚举。\r
	 * @public\r
	 */\r
	enum AttachmentPoint {\r
		kTopLeft = 1,\r
		kTopCenter = 2,\r
		kTopRight = 3,\r
		kMiddleLeft = 4,\r
		kMiddleCenter = 5,\r
		kMiddleRight = 6,\r
		kBottomLeft = 7,\r
		kBottomCenter = 8,\r
		kBottomRight = 9,\r
		kBaseLeft = 10,\r
		kBaseCenter = 11,\r
		kBaseRight = 12,\r
		kBaseAlign = 13,\r
		kBottomAlign = 14,\r
		kMiddleAlign = 15,\r
		kTopAlign = 16,\r
		kBaseFit = 17,\r
		kBottomFit = 18,\r
		kMiddleFit = 19,\r
		kTopFit = 20,\r
		kBaseMid = 21,\r
		kBottomMid = 22,\r
		kMiddleMid = 23,\r
		kTopMid = 24\r
	}\r
	/**\r
	 * 线宽枚举。\r
	 * @public\r
	 */\r
	enum LineWeight {\r
		kLnWt000 = 0,\r
		kLnWt005 = 5,\r
		kLnWt009 = 9,\r
		kLnWt013 = 13,\r
		kLnWt015 = 15,\r
		kLnWt018 = 18,\r
		kLnWt020 = 20,\r
		kLnWt025 = 25,\r
		kLnWt030 = 30,\r
		kLnWt035 = 35,\r
		kLnWt040 = 40,\r
		kLnWt050 = 50,\r
		kLnWt053 = 53,\r
		kLnWt060 = 60,\r
		kLnWt070 = 70,\r
		kLnWt080 = 80,\r
		kLnWt090 = 90,\r
		kLnWt100 = 100,\r
		kLnWt106 = 106,\r
		kLnWt120 = 120,\r
		kLnWt140 = 140,\r
		kLnWt158 = 158,\r
		kLnWt200 = 200,\r
		kLnWt211 = 211,\r
		kLnWtByLayer = -1,\r
		kLnWtByBlock = -2,\r
		kLnWtByLwDefault = -3\r
	}\r
	/**\r
<<<<<<< HEAD\r
	* 填充用的闭合区域的类型\r
	* @public\r
	*/\r
	enum HatchLoopType {\r
		kDefault = 0,\r
		kExternal = 1,\r
		kPolyline = 2,\r
		kDerived = 4,\r
		kTextbox = 8,\r
		kOutermost = 16,\r
		kNotClosed = 32,\r
		kSelfIntersecting = 64,\r
		kTextIsland = 128\r
	}\r
	/**\r
	 * 填充用的闭合区域中的边的曲线类型\r
	 * @public\r
	 */\r
	enum HatchEdgeType {\r
		kLine = 1,\r
		kCirArc = 2,\r
		kEllArc = 3,\r
		kSpline = 4\r
	}\r
	/**\r
   * 填充图案来源类型\r
   * @public\r
   */\r
	enum HatchPatternType {\r
		kUserDefined = 0,\r
		kPreDefined = 1,\r
		kCustomDefined = 2\r
	}\r
	enum HatchStyle {\r
		kNormal = 0,\r
		kOuter = 1,\r
		kIgnore = 2\r
	}\r
	enum ClipBoundaryType {\r
		kInvalid = 0,\r
		kRect = 1,\r
=======\r
	* 表示图案填充中不同类型的闭合区域\r
	* @public\r
	*/\r
	enum HatchLoopType {\r
		/** 默认填充闭合区域类型  */\r
		kDefault = 0,\r
		/** 外部填充闭合区域类型 表示外部轮廓或边界 */\r
		kExternal = 1,\r
		/** 多段线填充闭合区域类型 表示由多个线段组成的区域*/\r
		kPolyline = 2,\r
		/** 派生填充闭合区域类型 表示从其他图形元素派生而来的填充区域*/\r
		kDerived = 4,\r
		/** 文本框填充闭合区域类型 表示包含文本的区域*/\r
		kTextbox = 8,\r
		/** 最外层填充闭合区域类型 表示填充区域的最外层边界*/\r
		kOutermost = 16,\r
		/** 未闭合填充闭合区域类型 表示填充区域的边界没有闭合*/\r
		kNotClosed = 32,\r
		/** 自相交填充闭合区域类型 表示填充区域的边界自相交*/\r
		kSelfIntersecting = 64,\r
		/** 文本岛填充闭合区域类型  表示包含文本的孤立区域*/\r
		kTextIsland = 128\r
	}\r
	/**\r
	 * 表示填充区域中的边的曲线类型\r
	 * @public\r
	 */\r
	enum HatchEdgeType {\r
		/** 表示直线类型的边 */\r
		kLine = 1,\r
		/** 圆弧类型的边 */\r
		kCirArc = 2,\r
		/** 椭圆弧类型的边 */\r
		kEllArc = 3,\r
		/** 样条曲线类型的边 */\r
		kSpline = 4\r
	}\r
	/**\r
   *  表示填充图案的来源类型\r
   * @public\r
   */\r
	enum HatchPatternType {\r
		/** 用户自定义的填充图案 */\r
		kUserDefined = 0,\r
		/** 预定义的填充图案 */\r
		kPreDefined = 1,\r
		/** 自定义定义的填充图案 */\r
		kCustomDefined = 2\r
	}\r
	/**\r
	 * 表示填充图案的风格\r
	 * @public\r
	 * */\r
	enum HatchStyle {\r
		/** 普通风格 标准的、普通的填充图案风格 */\r
		kNormal = 0,\r
		/** 外部风格 填充会强调区域的外部边界 用于使外部区域在绘图中更为显眼 */\r
		kOuter = 1,\r
		/** 忽略风格 表示在某些情况下应忽略填充图案的风格 在特定的绘图需求下，不需要显示填充图案的情况*/\r
		kIgnore = 2\r
	}\r
	/** 指定裁剪操作中使用的边界类型*/\r
	enum ClipBoundaryType {\r
		/** 无效的裁剪边界类型 */\r
		kInvalid = 0,\r
		/** 矩形裁剪边界类型 */\r
		kRect = 1,\r
		/** 多边形裁剪边界类型 */\r
>>>>>>> 8c441820 (init)\r
		kPoly = 2\r
	}\r
}\r
/**\r
 * 表示一个颜色对象，可以通过颜色索引或 RGB 值来设置颜色。\r
 */\r
export declare class McCmColor {\r
	private imp;\r
	/**\r
	 * 构造函数。\r
	 */\r
	constructor(red?: number | object, green?: number, blue?: number);\r
	getImp(): any;\r
	/**\r
	 * 复制对象的值\r
	 */\r
	copy(val: McCmColor): this;\r
	/**\r
	 * 刻隆一个对对象\r
	 */\r
	clone(): McCmColor;\r
	/**\r
	 * 设置颜色索引。\r
	 * @param colorIndex 颜色索引。\r
	 */\r
	setColorIndex(colorIndex: number): void;\r
	/**\r
	 * 设置 RGB 值。\r
	 * @param red 红色值。\r
	 * @param green 绿色值。\r
	 * @param blue 蓝色值。\r
	 */\r
	setRGB(red: number, green: number, blue: number): void;\r
	/**\r
	 * 红色值。\r
	 */\r
	get red(): number;\r
	set red(val: number);\r
	/**\r
	 * 绿色值。\r
	 */\r
	get green(): number;\r
	set green(val: number);\r
	/**\r
	 * 蓝色值。\r
	 */\r
	get blue(): number;\r
	set blue(val: number);\r
	/**\r
	 * n\r
	 */\r
	get n(): number;\r
	set n(val: number);\r
	/**\r
	 * 方法。\r
	 */\r
	get method(): number;\r
	set method(val: number);\r
	/**\r
	 * 颜色索引。。\r
	 */\r
	get colorIndex(): number;\r
	set colorIndex(val: number);\r
	/**\r
   *得到颜色说明字符串\r
   */\r
	getColorString(): string;\r
	/**\r
   *得到颜色值字符串，十六进制格式，layerId:颜色随层时会取layerId指向的层颜色，blkRefId:颜色随块时，会取blkRefId指向的块颜色.\r
   */\r
	getColorValue(layerId?: McObjectId, blkRefId?: McObjectId): string;\r
<<<<<<< HEAD\r
=======\r
	/** 获取 css 颜色的样式 如rgb(0, 0, 0) */\r
	getStyle(): string;\r
>>>>>>> 8c441820 (init)\r
}\r
/**\r
 * 表示一个线形表记录对象。\r
 */\r
export declare class McDbLinetypeTableRecord extends McDbObject {\r
	/**\r
	 * 构造函数。\r
	 * @param imp 内部实现对象。\r
	 */\r
	constructor(imp?: any);\r
	/**\r
	 * 获取或设置名称。\r
	 */\r
	get name(): string;\r
	set name(val: string);\r
	get numDashes(): number;\r
	set numDashes(val: number);\r
	dashLengthAt(index: number): number;\r
	setDashLengthAt(index: number, value: number): boolean;\r
	get comments(): string;\r
	set comments(val: string);\r
	shapeStyleAt(index: number): number;\r
	setShapeStyleAt(index: number, value: number): boolean;\r
	shapeNumberAt(index: number): number;\r
	setShapeNumberAt(index: number, shapeNumber: number): boolean;\r
	shapeOffsetAt(index: number): McGeVector3d;\r
	setShapeOffsetAt(index: number, offset: McGeVector3d): boolean;\r
	shapeScaleAt(index: number): number;\r
	setShapeScaleAt(index: number, scale: number): boolean;\r
	get isScaledToFit(): boolean;\r
	set isScaledToFit(scaledToFit: boolean);\r
	shapeIsUcsOrientedAt(index: number): boolean;\r
	setShapeIsUcsOrientedAt(index: number, isUcsOriented: boolean): boolean;\r
	shapeRotationAt(index: number): number;\r
	setShapeRotationAt(index: number, rotation: number): boolean;\r
	textAt(index: number): string;\r
	setTextAt(index: number, text: string): boolean;\r
}\r
/**\r
 * 表示一个文字样式表记录对象。\r
 */\r
export declare class McDbTextStyleTableRecord extends McDbObject {\r
	/**\r
	 * 构造函数。\r
	 * @param imp 内部实现对象。\r
	 */\r
	constructor(imp?: any);\r
	/**\r
<<<<<<< HEAD\r
	 * 获取或设置名称。\r
=======\r
	 * 获取或设置文字样式名称。\r
>>>>>>> 8c441820 (init)\r
	 */\r
	get name(): string;\r
	set name(val: string);\r
	get isShapeFile(): boolean;\r
	set isShapeFile(val: boolean);\r
	get isVertical(): boolean;\r
	set isVertical(val: boolean);\r
<<<<<<< HEAD\r
	get textSize(): number;\r
	set textSize(val: number);\r
	get xScale(): number;\r
	set xScale(val: number);\r
=======\r
	/** 文字大小(高度) */\r
	get textSize(): number;\r
	set textSize(val: number);\r
	/** 宽度因子 */\r
	get xScale(): number;\r
	set xScale(val: number);\r
	/** 倾斜角度 */\r
>>>>>>> 8c441820 (init)\r
	get obliquingAngle(): number;\r
	set obliquingAngle(val: number);\r
	get flagBits(): number;\r
	set flagBits(val: number);\r
<<<<<<< HEAD\r
	get fileName(): string;\r
	set fileName(val: string);\r
	get bigFontFileName(): string;\r
	set bigFontFileName(val: string);\r
	setFont(sTypeface: string, bold: boolean, italic: boolean, charset: number, pitchAndFamily: number): boolean;\r
=======\r
	/** 字体名称 */\r
	get fileName(): string;\r
	set fileName(val: string);\r
	/** 大字体名称 */\r
	get bigFontFileName(): string;\r
	set bigFontFileName(val: string);\r
	/** 设置字体样式 */\r
	setFont(sTypeface: string, bold: boolean, italic: boolean, charset: number, pitchAndFamily: number): boolean;\r
	/** 获取字体样式 */\r
>>>>>>> 8c441820 (init)\r
	font(): {\r
		sTypeface: string;\r
		bold: boolean;\r
		italic: boolean;\r
		charset: number;\r
		pitchAndFamily: number;\r
	};\r
}\r
/**\r
 * 表示一个图层表记录对象。\r
 */\r
export declare class McDbLayerTableRecord extends McDbObject {\r
	/**\r
	 * 构造函数。\r
	 * @param imp 内部实现对象。\r
	 */\r
	constructor(imp?: any);\r
	/**\r
	 * 获取或设置图层名称。\r
	 */\r
	get name(): string;\r
	set name(val: string);\r
	/**\r
	 * 获取或设置图层是否被冻结。\r
	 */\r
	get isFrozen(): boolean;\r
	set isFrozen(val: boolean);\r
	/**\r
	 * 获取或设置图层是否被关闭。\r
	 */\r
	get isOff(): boolean;\r
	set isOff(val: boolean);\r
	/**\r
	 * 获取或设置图层是否被锁定。\r
	 */\r
	get isLocked(): boolean;\r
	set isLocked(val: boolean);\r
	/**\r
	 * 获取或设置图层颜色。\r
	 */\r
	get color(): McCmColor;\r
	set color(val: McCmColor);\r
	/**\r
	 * 获取或设置图层线型对象 ID。\r
	 */\r
	get linetypeObjectId(): McObjectId;\r
	set linetypeObjectId(val: McObjectId);\r
	/**\r
	 * 获取或设置图层线宽。\r
	 */\r
	get lineWeight(): McDb.LineWeight;\r
	set lineWeight(val: McDb.LineWeight);\r
}\r
/**\r
 * 表示数据库层表。\r
 */\r
export declare class McDbLayerTable extends McDbObject {\r
	/**\r
	 * 构造函数。\r
	 * @param imp 内部实现对象。\r
	 */\r
	constructor(imp?: any);\r
	getAllRecordId(skipDeleted?: boolean): McObjectId[];\r
	add(rec: McDbLayerTableRecord): McObjectId;\r
	get(sName: string, skipDeleted?: boolean): McObjectId;\r
<<<<<<< HEAD\r
	has(sName: string): boolean;\r
=======\r
	has(sName: string, skipDeleted?: boolean): boolean;\r
>>>>>>> 8c441820 (init)\r
}\r
/**\r
 * 表示数据库线型表。\r
 */\r
export declare class McDbLinetypeTable extends McDbObject {\r
	/**\r
	 * 构造函数。\r
	 * @param imp 内部实现对象。\r
	 */\r
	constructor(imp?: any);\r
	getAllRecordId(skipDeleted?: boolean): McObjectId[];\r
	add(rec: McDbLinetypeTableRecord): McObjectId;\r
	get(sName: string, skipDeleted?: boolean): McObjectId;\r
<<<<<<< HEAD\r
	has(sName: string): boolean;\r
=======\r
	has(sName: string, skipDeleted?: boolean): boolean;\r
>>>>>>> 8c441820 (init)\r
}\r
/**\r
 * 表示数据库文字样式表。\r
 */\r
export declare class McDbTextStyleTable extends McDbObject {\r
	/**\r
	 * 构造函数。\r
	 * @param imp 内部实现对象。\r
	 */\r
	constructor(imp?: any);\r
	getAllRecordId(skipDeleted?: boolean): McObjectId[];\r
	add(rec: McDbTextStyleTableRecord): McObjectId;\r
	get(sName: string, skipDeleted?: boolean): McObjectId;\r
<<<<<<< HEAD\r
	has(sName: string): boolean;\r
=======\r
	has(sName: string, skipDeleted?: boolean): boolean;\r
>>>>>>> 8c441820 (init)\r
}\r
/**\r
 * 表示数据库。\r
 */\r
export declare class McDbDatabase extends McRxObject {\r
	/**\r
	 * 构造函数。\r
	 * @param imp 内部实现对象。\r
	 */\r
	constructor(imp?: any);\r
	/**\r
	 * 获取层表。\r
	 * @returns 层表。\r
	 */\r
	getLayerTable(): McDbLayerTable;\r
	get layerTable(): McDbLayerTable;\r
	/**\r
	 * 获取线型表。\r
	 * @returns 线型表。\r
	 */\r
	getLinetypeTable(): McDbLinetypeTable;\r
	get linetypeTable(): McDbLinetypeTable;\r
	/**\r
	 * 获取文字样式表。\r
	 * @returns 文字样式表。\r
	 */\r
	getTextStyleTable(): McDbTextStyleTable;\r
	get textStyleTable(): McDbTextStyleTable;\r
	/**\r
	 * 获取块表。\r
	 * @returns 块表。\r
	 */\r
	getBlockTable(): McDbBlockTable;\r
<<<<<<< HEAD\r
=======\r
	/**\r
	 * 得到图纸的字典对象。\r
	 * @returns McDbDictionary\r
	 */\r
	getNamedObjectsDictionary(): McDbDictionary;\r
>>>>>>> 8c441820 (init)\r
	get blockTable(): McDbBlockTable;\r
	/**\r
	 *返回当前空间块表记录\r
	 * @returns 块表记录\r
	 */\r
	get currentSpace(): McDbBlockTableRecord;\r
	/**\r
	 * 获取当前线型比例。\r
	 * @returns 当前线型比例。\r
	 */\r
	getCurrentlyLineTypeScale(): number;\r
	/**\r
	 * 设置当前线型比例。\r
	 * @param val 线型比例。\r
	 * @returns 当前线型比例。\r
	 */\r
	setCurrentlyLineTypeScale(val: number): number;\r
	/**\r
	 * 获取当前线型名称。\r
	 * @returns 当前线型名称。\r
	 */\r
	getCurrentlyLineTypeName(): string;\r
	/**\r
	 * 设置当前线型名称。\r
	 * @param sName 线型名称。\r
	 */\r
	setCurrentlyLineTypeName(sName: string): void;\r
	/**\r
	 * 获取当前层名称。\r
	 * @returns 当前层名称。\r
	 */\r
	getCurrentlyLayerName(): string;\r
	/**\r
	 * 设置当前层名称。\r
	 * @param sName 层名称。\r
	 */\r
	setCurrentlyLayerName(sName: string): void;\r
	/**\r
	 * 获取当前CAD颜色。\r
	 * @returns 当前CAD颜色。\r
	 */\r
	getCurrentlyTrueColor(): McCmColor;\r
	/**\r
   * 获取当前绘图使用的颜色\r
   */\r
	getCurrentlyDrawColor(): THREE.Color;\r
	/**\r
	 * 设置当前CAD颜色。\r
	 * @param color CAD颜色。\r
	 */\r
	setCurrentlyTrueColor(color: McCmColor): any;\r
	/**\r
	 * 获取当前颜色索引。\r
	 * @returns 当前颜色索引。\r
	 */\r
	getCurrentlyColorIndex(): number;\r
	/**\r
	 * 设置当前颜色索引。\r
	 * @param colorIndex 颜色索引。\r
	 */\r
	setCurrentlyColorIndex(colorIndex: number): any;\r
	/**\r
	 * 获取当前文字样式名称。\r
	 * @returns 当前文字样式名称。\r
	 */\r
	getCurrentlyTextStyleName(): string;\r
	/**\r
	 * 设置当前文字样式名称。\r
	 * @param sName 文字样式名称。\r
	 */\r
	setCurrentlyTextStyle(sName: string): void;\r
	/**\r
	* 根据对象的句柄返回对象id.\r
	*/\r
	handleToIdIndex(sHandle: string): McObjectId;\r
	/**\r
	* 当前数据库是否被修改\r
	*/\r
	isModifyed(): boolean;\r
	/**\r
   * 把当前数据库修改状态重置成未修改状态\r
   */\r
	resetModificationStatus(): void;\r
}\r
<<<<<<< HEAD\r
export declare class McDbBlockTableRecord extends McDbObject {\r
	constructor(imp?: any);\r
	appendAcDbEntity(pEntity: McDbEntity): McObjectId;\r
	getAllEntityId(skipDeleted?: boolean): McObjectId[];\r
=======\r
/** 图块记录 */\r
export declare class McDbBlockTableRecord extends McDbObject {\r
	constructor(imp?: any);\r
	/** 给图块添加对应实体 */\r
	appendAcDbEntity(pEntity: McDbEntity): McObjectId;\r
	/** 获取图块中所有实体的对象ID */\r
	getAllEntityId(skipDeleted?: boolean): McObjectId[];\r
	/** 返回块表记录中所有对象的最小，最大显示顺序. */\r
	getMinMaxDrawOrder(): {\r
		minDrawOrder: number;\r
		maxDrawOrder: number;\r
	};\r
	/** 图块原点 */\r
>>>>>>> 8c441820 (init)\r
	get origin(): McGePoint3d;\r
	set origin(origin: McGePoint3d);\r
	/**\r
   *得到最小外包\r
   */\r
	getBoundingBox(): {\r
		minPt: McGePoint3d;\r
		maxPt: McGePoint3d;\r
		ret: boolean;\r
	};\r
	invalidBoundingBoxBuffer(): void;\r
	/**\r
   * 获取或设置名称。\r
   */\r
	get name(): string;\r
	set name(val: string);\r
}\r
export declare class McDbBlockTable extends McDbObject {\r
	constructor(imp?: any);\r
	getAllRecordId(skipDeleted?: boolean): McObjectId[];\r
	add(rec: McDbBlockTableRecord | string): McObjectId;\r
	get(sName: string, skipDeleted?: boolean): McObjectId;\r
	has(sName: string): boolean;\r
}\r
export declare class McDbRasterImageDef extends McDbObject {\r
	constructor(imp?: any);\r
	set sourceFileName(sPathName: string);\r
	get sourceFileName(): string;\r
}\r
<<<<<<< HEAD\r
=======\r
export declare class McDbDictionary extends McDbObject {\r
	constructor(imp?: any);\r
	getAllObject(): McObjectId[];\r
	getAllObjectName(): McGeStringArray;\r
	remove(sName: string): boolean;\r
	addObject(sName: string, obj: McDbObject): McObjectId;\r
	getAt(sName: string, isGetErased?: boolean): McObjectId;\r
}\r
export declare class McDbXrecord extends McDbObject {\r
	constructor(imp?: any);\r
	setData(xdata: MxCADResbuf): boolean;\r
	getData(): MxCADResbuf;\r
}\r
declare class MxAI {\r
	private serverUrl;\r
	private mapFun;\r
	init(serverUrl: string): void;\r
	addFunction(name: string, call: any): void;\r
	registTool(tool: any): void;\r
	reloadTools(param: any): void;\r
	chat_tool(str: string): void;\r
}\r
>>>>>>> 8c441820 (init)\r
export declare enum FetchAttributes {\r
	EMSCRIPTEN_FETCH_LOAD_TO_MEMORY = 1,\r
	EMSCRIPTEN_FETCH_PERSIST_FILE = 4,\r
	EMSCRIPTEN_FETCH_APPEND = 8,\r
	EMSCRIPTEN_FETCH_REPLACE = 16\r
}\r
declare class McRxObjectImp {\r
}\r
/**\r
 * McObject 类\r
 */\r
export declare class McObject {\r
	/** 内部对象实现 */\r
	private imp;\r
	private event;\r
	/** 当前文件名 */\r
	private currentFileName;\r
	private firstTimeOpenFile;\r
	/**\r
	 * 构造函数\r
	 * @param imp 对象实现\r
	 */\r
<<<<<<< HEAD\r
	constructor(imp: any);\r
	on(name: string, fun: object): void;\r
	private callEvent;\r
	/**\r
	 * 初始化对象模型\r
	 * @param mxObject 对象模型\r
	 */\r
	initMxObject(mxObject: any): void;\r
=======\r
	constructor(imp?: any);\r
>>>>>>> 8c441820 (init)\r
	/**\r
	 * 返回与MxCAD对象绑定的MxDraw对象。\r
	 */\r
	getMxDrawObject(): MxDrawObject;\r
	/**\r
   * 返回与MxCAD对象绑定的MxDraw对象。\r
   */\r
	get mxdraw(): MxDrawObject;\r
	/**\r
	 * 获取对象实现\r
	 * @returns 对象实现\r
	 */\r
	getImp(): any;\r
	/**\r
<<<<<<< HEAD\r
=======\r
	 * 初始对象\r
	 * @param imp 对象实现，默认该函数会被系统自动调用。\r
	 */\r
	init(imp: any): void;\r
	/**\r
	 * 创建mxcad对象 。\r
	 * @param imp\r
	 */\r
	create(config: MxCadConfig): void;\r
	/** 监听对象选择事件\r
	 * @example\r
	 * \`\`\`ts\r
	 * import { MxCpp } from "mxcad"\r
	 * MxCpp.getCurrentMxCAD().on("selectChange", (ids)=> {\r
	 *      let ent = id.getMcDbEntity()\r
	 *      if(!ent) return\r
	 *      console.log(ent.objectName)\r
	 * })\r
	 * \`\`\`\r
	 *  */\r
	on(name: "selectChange", fun: (ids: McObjectId[]) => void | ((ids: McObjectId[]) => void)[]): void;\r
	on(name: "openFileComplete", fun: () => void): void;\r
	on(name: "init", fun: () => void): void;\r
	on(name: "init_mxdraw", fun: (mxdraw: MxDrawObject) => void): void;\r
	on(name: "init_before_mxdraw", fun: (mxdraw: MxDrawObject) => void): void;\r
	on(name: "init_mxcad", fun: (mxcad: McObject) => void): void;\r
	on(name: "databaseModify", fun: () => void): void;\r
	off(name: string, fun?: Function): void;\r
	callEvent(sEventName: string, param?: any): boolean;\r
	/**\r
	 * 初始化对象模型\r
	 * @description\r
	 * @param mxObject 初始化{@link https://mxcadx.gitee.io/mxdraw_docs | mxdraw} 创建的绘图控件\r
	 */\r
	initMxObject(mxObject: any): void;\r
	/**\r
>>>>>>> 8c441820 (init)\r
	 * 重绘图上所有对象，在调用ZoomAll,ZoomW后，因为是异步执行，可能需要延迟调用Regen才会启作用。\r
	 */\r
	regen(delayTime?: number): void;\r
	/**\r
	 * 显示全部\r
	 */\r
	zoomAll(): boolean;\r
	/**\r
	 * 缩放当前显示范围，它是相对于当前显示范围进行缩放\r
	 * @param scale scale缩放比例\r
	 * @returns void\r
	 * @example\r
	 * \`\`\`typescript\r
	 * \`\`\`\r
	 */\r
	zoomScale(scale: number): void;\r
	/**\r
	 * 把对象添加当前选择中\r
	 * @param id 对象id\r
	 * @returns void\r
	 * @example\r
	 * \`\`\`typescript\r
<<<<<<< HEAD\r
	 * \`\`\`\r
	 */\r
	addCurrentSelect(id: McObjectId): void;\r
=======\r
	 * import { McApp } from "mxcad"\r
	 * let mxcad = MxCpp.getCurrentMxCAD();\r
	 * let id = mxcad.drawLine(0,0,1000,1000);\r
	 * mxcad.addCurrentSelect(id);\r
	 * \`\`\`\r
	 */\r
	addCurrentSelect(id: McObjectId | McObjectId[], isDisplayGrid?: boolean): void;\r
>>>>>>> 8c441820 (init)\r
	/**\r
  * 把当前显示范围移到指定的显示范围\r
  * @param minPt 坐标1 McGePoint3d\r
  * @param maxPt 坐标2 McGePoint3d\r
  * @param isWorld 默认为felse DWG图纸坐标，设置为true是THREEJS坐标\r
  * @returns void\r
  * @example\r
  * \`\`\`typescript\r
<<<<<<< HEAD\r
=======\r
  * import { McApp, McGePoint3d } from "mxcad"\r
  * const mxcad = MxCpp.getCurrentMxCAD()\r
  * mxcad.zoomW(new McGePoint3d(0, 0), new McGePoint3d(30, 30))\r
>>>>>>> 8c441820 (init)\r
  * \`\`\`\r
  */\r
	zoomW(minPt: McGePoint3d, maxPt: McGePoint3d): void;\r
	/**\r
	 * 把当前显示范围移到指定的位置,dCenX,dCenY是DWG图纸坐标。\r
	 * @returns void\r
	 * @example\r
	 * \`\`\`typescript\r
<<<<<<< HEAD\r
=======\r
	 * import { McApp, McGePoint3d } from "mxcad"\r
	 * const mxcad = MxCpp.getCurrentMxCAD()\r
	 * mxcad.zoomCenter(0, 0)\r
>>>>>>> 8c441820 (init)\r
	 * \`\`\`\r
	 */\r
	zoomCenter(dCenX: number, dCenY: number): void;\r
	/**\r
	 * 设置显示视区的角度，单位是PI.\r
	 * @returns void\r
<<<<<<< HEAD\r
	 * @example\r
	 * \`\`\`typescript\r
=======\r
	 * @param viewangle 旋转角度 Math.PI\r
	 * @example\r
	 * \`\`\`typescript\r
	 * import { McApp } from "mxcad"\r
	 * const mxcad = MxCpp.getCurrentMxCAD()\r
	 * mxcad.zoomAngle(Math.PI / 2)\r
>>>>>>> 8c441820 (init)\r
	 * \`\`\`\r
	 */\r
	zoomAngle(viewangle: number): void;\r
	/**\r
	 * 打开网络文件\r
	 * @param sFileUrl 网络文件路径\r
	 * @param retCall 回调函数，可选参数，打开文件完成后的回调函数，参数为打开文件的结果,0表示成功，其他值表示失败\r
	 * @param isWorkThread 是否使用工作线程打开文件，默认为 true\r
	 * @param fetchAttributes 1：EMSCRIPTEN_FETCH_LOAD_TO_MEMORY,把图纸数据加载内存中，0:EMSCRIPTEN_FETCH_LOAD_TO_MEMORY | EMSCRIPTEN_FETCH_PERSIST_FILE | EMSCRIPTEN_FETCH_APPEND，把图纸数据加到IndexedDB。\r
	 * @returns 是否成功打开文件\r
	 */\r
<<<<<<< HEAD\r
	openWebFile(sFileUrl: string, retCall?: (iRet: number) => void, isWorkThread?: boolean, initialParameter?: object, fetchAttributes?: number): boolean;\r
=======\r
	openWebFile(sFileUrl: string, retCall?: (iRet: number) => void, isWorkThread?: boolean, initialParameter?: object, fetchAttributes?: number, isFetchTzFile?: boolean): boolean;\r
>>>>>>> 8c441820 (init)\r
	/**\r
	*清空当前图上内容，新建一个文件\r
	*/\r
	newFile(): boolean;\r
	/**\r
	 * 插件图块文件\r
<<<<<<< HEAD\r
	 * @param sFileUrl 网络文件路径\r
	 * @param sBlkName 插入的图块的块名\r
	 * @param isWorkThread 是否使用工作线程打开文件，默认为 true\r
	 * @param fetchAttributes 1：EMSCRIPTEN_FETCH_LOAD_TO_MEMORY,把图纸数据加载内存中，0:EMSCRIPTEN_FETCH_LOAD_TO_MEMORY | EMSCRIPTEN_FETCH_PERSIST_FILE | EMSCRIPTEN_FETCH_APPEND，把图纸数据加到IndexedDB。\r
	 */\r
=======\r
	 * @param sFileUrl 网络文件路径 该文件为mxweb格式\r
	 * @param sBlkName 插入的图块的块名\r
	 * @param isWorkThread 是否使用工作线程打开文件，默认为 true\r
	 * @param fetchAttributes 1：EMSCRIPTEN_FETCH_LOAD_TO_MEMORY,把图纸数据加载内存中，0:EMSCRIPTEN_FETCH_LOAD_TO_MEMORY | EMSCRIPTEN_FETCH_PERSIST_FILE | EMSCRIPTEN_FETCH_APPEND，把图纸数据加到IndexedDB。\r
	 * @example\r
	 * \`\`\`ts\r
	 * import { MxCpp } from "mxcad"\r
	 * const mxcad = MxCpp.getCurrentMxCAD()\r
	 * const blkrecId = await mxcad.insertBlock("./blkrec.mxweb", "sBlkName");\r
	 * \`\`\`\r
	*/\r
>>>>>>> 8c441820 (init)\r
	insertBlock(sFileUrl: string, sBlkName: string, isWorkThread?: boolean, fetchAttributes?: number): Promise<McObjectId>;\r
	/**\r
	 * 获取当前文件名\r
	 * @returns 当前文件名\r
	 */\r
	getCurrentFileName(): string;\r
	/**\r
	 * 将文件保存并转换为网络路径下载\r
<<<<<<< HEAD\r
	 * @param sSaveProgramUrl 要保存文件的路径\r
	 * @param call 保存文件的结果回调\r
	 * @returns 是否成功保存文件\r
	 */\r
	saveFileToUrl(sSaveProgramUrl: string, call: (iResult: number, sServerResult: string) => void): boolean;\r
=======\r
	 * @param sSaveProgramUrl 后端 POST请求接口, 接口具体实现: 先下载MxDraw云图开发包<https://www.mxdraw.com/download.html>并解压\r
	 * 找到MxDrawCloudServer\\Bin\\MxCAD\\MxCADSaveFile\\server.js 可以找到对应的实现接口"/mxcad/savefiledwg",\r
	 * "/mxcad/savefiledwg":保存dwg文件到服务器\r
	 * "/mxcad/savefile":保存mxweb文件到服务器\r
	 * 如果没有找到则在该项目下寻找这个接口的定义, 必须符合该接口的定义才能作为参数\r
	 * @param call 保存文件的结果回调 这里接收到的参数请自己根据接口定义中保存图纸的位置, ref.file 不是完整请求路径，只是保存后的图纸名称\r
	 * @returns 是否成功保存文件\r
	 * @example\r
	 * \`\`\`ts\r
	 * import { MxCpp } from "mxcad"\r
	 * const mxcad = MxCpp.getCurrentMxCAD()\r
	 *  MxCpp.getCurrentMxCAD().saveFileToUrl("http://localhost:3337/mxcad/savefiledwg", (iResult, sserverResult) => {\r
	 *    let ret = JSON.parse(sserverResult);\r
	 *    if (ret.ret == "ok") {\r
	 *        console.log(ret.file)\r
	 *    }\r
	 * })\r
	 * \`\`\`\r
	 */\r
	saveFileToUrl(sSaveProgramUrl: string, call: (iResult: number, sServerResult: string) => void, filename?: string, param?: any): boolean;\r
>>>>>>> 8c441820 (init)\r
	/**\r
	 * 保存文件\r
	 * @param filename 另存为的新文件名称\r
	 * @param call 回调函数，可选参数，文件保存完成后的回调函数，参数为文件数据\r
	 * @param isDownland 是否下载文件，默认为 true\r
	 * @param isShowSaveFileDialog 是否显示保存文件对话框，默认为 true\r
	 * @returns 是否成功保存文件\r
<<<<<<< HEAD\r
=======\r
	 * @example\r
	 * \`\`\`ts\r
	 * import { MxCpp } from "mxcad"\r
	 * const mxcad = MxCpp.App.getCurrentMxCAD()\r
	 * const fileName =  mxcad.getCurrentFileName()\r
	 * mxcad.saveFile("test", (data)=> {\r
	 *   const blob = new Blob([data.buffer], { type: "application/octet-stream" });\r
	 * }, false, false)\r
	 * \`\`\`\r
>>>>>>> 8c441820 (init)\r
	 */\r
	saveFile(filename?: string, call?: (data: any) => void, isDownland?: boolean, isShowSaveFileDialog?: boolean, parameter?: object): boolean;\r
	/**\r
	 * 获取数据库对象\r
	 * @returns 数据库对象\r
	 */\r
	getDatabase(): McDbDatabase;\r
	/**\r
	* 返回数据库对象\r
	*/\r
	get database(): McDbDatabase;\r
	/**\r
	 * 设置浏览模式\r
	 */\r
	setBrowse(browse: boolean): void;\r
	/**\r
	 * 获取系统变量的字符串值\r
	 * @param varName 变量名称\r
	 * @returns 变量的字符串值\r
	 */\r
	getSysVarString(varName: string): string;\r
	/**\r
	 * 设置系统变量的字符串值\r
	 * @param varName 变量名称\r
	 * @param val 变量的字符串值\r
	 * @returns 是否成功设置变量值\r
	 */\r
	setSysVarString(varName: string, val: string): any;\r
	/**\r
	 * 获取系统变量的浮点数值\r
	 * @param varName 变量名称\r
	 * @returns 变量的浮点数值\r
	 */\r
	getSysVarDouble(varName: string): number;\r
	/**\r
  * 获取系统变量的点数值\r
  * @param varName 变量名称\r
  * @returns 变量的点数值\r
  */\r
	getSysVarPoint(varName: string): McGePoint3d;\r
	/**\r
   * 设置系统变量的点数值\r
   * @param varName 变量名称\r
   * @param val 变量的点数值\r
   * @returns 是否成功设置变量值\r
   */\r
	setSysVarPoint(varName: string, pt: McGePoint3d): boolean;\r
	/**\r
	* 设置系统变量的2维点数值\r
	* @param varName 变量名称\r
	* @param val 变量的点数值\r
	* @returns 是否成功设置变量值\r
	*/\r
	setSysVarPoint2d(varName: string, pt: McGePoint3d): boolean;\r
	/**\r
	 * 设置系统变量的浮点数值\r
	 * @param varName 变量名称\r
	 * @param val 变量的浮点数值\r
	 * @returns 是否成功设置变量值\r
	 */\r
	setSysVarDouble(varName: string, val: number): boolean;\r
	/**\r
	 * 获取系统变量的整数值\r
	 * @param varName 变量名称\r
	 * @returns 变量的整数值\r
	 */\r
	getSysVarLong(varName: string): number;\r
	/**\r
	 * 设置系统变量的整数值\r
	 * @param varName 变量名称\r
	 * @param val 变量的整数值\r
	 * @returns 是否成功设置变量值\r
	 */\r
	setSysVarLong(varName: string, val: number): boolean;\r
	/**\r
	 * 获取绘制颜色\r
	 * @returns 返回绘制颜色\r
	 */\r
	get drawColor(): McCmColor;\r
	/**\r
	 * 设置绘制颜色\r
	 * @param val 绘制颜色\r
	 */\r
	set drawColor(val: McCmColor);\r
	/**\r
   * 设置绘制颜色索引\r
   * @param val 绘制颜色,ColorIndexType\r
   */\r
	get drawColorIndex(): number;\r
	/**\r
	 * 设置绘制颜色索引\r
	 * @param val 绘制颜色,ColorIndexType\r
	 */\r
	set drawColorIndex(val: number);\r
	/**\r
	 * 获取绘制线宽\r
	 * @returns 返回绘制线宽\r
	 */\r
	get drawLineWeight(): McDb.LineWeight;\r
	/**\r
	 * 设置绘制线宽\r
	 * @param val 绘制线宽\r
	 */\r
	set drawLineWeight(val: McDb.LineWeight);\r
	/**\r
	 * 获取绘制线型比例\r
	 * @returns 返回绘制线型比例\r
	 */\r
	get drawLineTypeScale(): number;\r
	/**\r
	 * 设置绘制线型比例\r
	 * @param val 绘制线型比例\r
	 */\r
	set drawLineTypeScale(val: number);\r
	/**\r
	 * 获取绘制线型\r
	 * @returns 返回绘制线型\r
	 */\r
	get drawLinetype(): string;\r
	/**\r
	 * 设置绘制线型\r
	 * @param val 绘制线型\r
	 */\r
	set drawLinetype(val: string);\r
	/**\r
	 * 获取绘制文字样式\r
	 * @returns 返回绘制文字样式\r
	 */\r
	get drawTextStyle(): string;\r
	/**\r
	 * 设置绘制文字样式\r
	 * @param val 绘制文字样式\r
	 */\r
	set drawTextStyle(val: string);\r
	/**\r
	 * 获取绘制图层\r
	 * @returns 返回绘制图层\r
	 */\r
	get drawLayer(): string;\r
	/**\r
	 * 设置绘制图层\r
	 * @param val 绘制图层\r
	 */\r
	set drawLayer(val: string);\r
	/**\r
	 * 添加图层\r
	 * @param pszName 图层名称\r
<<<<<<< HEAD\r
=======\r
	 * @example\r
	 * \`\`\`ts\r
	 * import { McApp } from "mxcad"\r
	 * const mxcad = McApp.getCurrentMxCAD()\r
	 * mxcad.addLayer("图层名称")\r
	 * \`\`\`\r
>>>>>>> 8c441820 (init)\r
	 */\r
	addLayer(string: string): McObjectId;\r
	/**\r
	 * 添加文字样式\r
	 * @param pszName 样式名称\r
	 * @param pszFileName 字体文件名\r
	 * @param pszBigFontFileName 大字体文件名\r
	 * @param dXScale X 方向缩放比例\r
	 */\r
<<<<<<< HEAD\r
	addTextStyle(sName: string, sFileName: string, sBigFontFileName: string, dXScale: number): McObjectId;\r
=======\r
	addTextStyle(sName: string, sFileName: string, sBigFontFileName: string, dXScale?: number): McObjectId;\r
	/**\r
	 * 添加使用TrueType字体的文字样式\r
	 * @param pszName 样式名称\r
	 * @param sTrueTypeFontName TrueType字体名,为空使用默认TrueType字体.\r
	 * @param dXScale X 方向缩放比例\r
	 */\r
	AddTureTypeTextStyle(sName: string, sTrueTypeFontName?: string, dXScale?: number): McObjectId;\r
>>>>>>> 8c441820 (init)\r
	/**\r
	 * 添加线型\r
	 * @param pszName 线型名称\r
	 * @param pszLineDefine 线型定义\r
	 */\r
	addLinetype(sName: string, sLineDefine: string): McObjectId;\r
	/**\r
	 * 添加线型\r
	 * @param pszName 线型名称\r
	 * @param pszLineDefine 线型定义\r
	 * @param pszTextStyle 文字样式\r
	 */\r
	addLinetypeEx(sName: string, sLineDefine: string, sTextStyle?: string): McObjectId;\r
	/**\r
	 * 绘制直线\r
	 * @param dX1 起点 X 坐标\r
	 * @param dY1 起点 Y 坐标\r
	 * @param dZ1 起点 Z 坐标\r
	 * @param dX2 终点 X 坐标\r
	 * @param dY2 终点 Y 坐标\r
	 * @param dZ2 终点 Z 坐标\r
	 * @returns 绘制的直线 ID\r
	 */\r
	drawLine(dX1: number, dY1: number, dX2: number, dY2: number): McObjectId;\r
	drawLine3d(dX1: number, dY1: number, dZ1: number, dX2: number, dY2: number, dZ2: number): McObjectId;\r
	/**\r
	 * 添加标注样式\r
	 * @param pszName 样式名称\r
	 * @param pszDoubleData 双精度型数据\r
	 * @param pszIntData 整型数据\r
	 * @param pszStringData 字符串型数据\r
	 * @param pszIdData ID 型数据\r
	 */\r
	addDimStyle(pszName: string, pszDoubleData: string, pszIntData: string, pszStringData: string, pszIdData: string): McObjectId;\r
	/**\r
	 * 获取当前绘制的标注样式\r
	 */\r
	get drawDimStyle(): string;\r
	/**\r
	 * 设置当前绘制的标注样式\r
	 * @param val 样式名称\r
	 */\r
	set drawDimStyle(val: string);\r
	/**\r
	 * 把当前路径做上排除标记，主要用于填充的绘制，把这个路径组成的闭合区域在填充中挖去\r
	 */\r
	pathMakeExclude(isExclude: boolean): void;\r
	/**\r
	 * 增加一个图案定义\r
	 */\r
	addPatternDefinition(sName: string, sDefinitionData: string): void;\r
	/**\r
	 * 获取当前绘制的线型定义\r
	 */\r
	get drawPatternDefinition(): string;\r
	/**\r
	 * 设置当前绘制的线型定义\r
	 * @param val 线型定义\r
	 */\r
	set drawPatternDefinition(val: string);\r
	/**\r
	 * 获取当前绘制的线宽\r
	 */\r
	get drawLineWidth(): number;\r
	/**\r
	 * 设置当前绘制的线宽\r
	 * @param val 线宽\r
	 */\r
	set drawLineWidth(val: number);\r
	/**\r
	 * 绘制圆弧\r
	 * @param dCenterX 圆心 X 坐标\r
	 * @param dCenterY 圆心 Y 坐标\r
	 * @param dRadius 半径\r
	 * @param dStartAng 起始角度，单位为弧度\r
	 * @param dEndAng 结束角度，单位为弧度\r
	 * @returns 成功返回 1，失败返回 0\r
	 */\r
	drawArc(dCenterX: number, dCenterY: number, dRadius: number, dStartAng: number, dEndAng: number): McObjectId;\r
	/**\r
	 * 绘制圆弧\r
	 * @param dStartPointX 起始点 X 坐标\r
	 * @param dStartPointY 起始点 Y 坐标\r
	 * @param dMidPointX 中间点 X 坐标\r
	 * @param dMidPointY 中间点 Y 坐标\r
	 * @param dEndPointX 结束点 X 坐标\r
	 * @param dEndPointY 结束点 Y 坐标\r
	 */\r
	drawArc2(dStartPointX: number, dStartPointY: number, dMidPointX: number, dMidPointY: number, dEndPointX: number, dEndPointY: number): McObjectId;\r
	/**\r
	* 绘制圆弧\r
	* @param dStartPointX 起始点 X 坐标\r
	* @param dStartPointY 起始点 Y 坐标\r
	* @param dEndPointX 结束点 X 坐标\r
	* @param dEndPointY 结束点 Y 坐标\r
	* @param dBulge 凸度\r
	*/\r
	drawArc3(dStartPointX: number, dStartPointY: number, dEndPointX: number, dEndPointY: number, dBulge: number): McObjectId;\r
	/**\r
	 * 绘制圆\r
	 * @param dCenterX 圆心 X 坐标\r
	 * @param dCenterY 圆心 Y 坐标\r
	 * @param dRadius 半径\r
	 */\r
	drawCircle(dCenterX: number, dCenterY: number, dRadius: number): McObjectId;\r
	/**\r
<<<<<<< HEAD\r
=======\r
	*加载一个外部图片到当前上下文，方便后面使用.\r
   */\r
	loadImage(imageUrl: string, call: (image: any) => void): void;\r
	/**\r
	 * 绘制一个图片\r
	 * @param dPosX 图片 X 坐标\r
	 * @param dPosY 图片 Y 坐标\r
	 * @param dWidth 图片宽度\r
	 * @param dHeight 图片高度\r
	 * @param dAng 图片角度\r
	 * @param imageUrl 图片路径\r
	 */\r
	drawImage(dPosX: number, dPosY: number, dWidth: number, dHeight: number, dAng: number, imageUrl: string): McObjectId;\r
	/**\r
	 * 添加一个图片定义到cad数据库中 。\r
	 * @param imageUrl 图片路径\r
	 * @param sName 图片定义名称\r
	 */\r
	addImageDefine(imageUrl: string, sName?: string): McObjectId;\r
	/**\r
>>>>>>> 8c441820 (init)\r
	 * 绘制椭圆\r
	 * @param dCenterX 椭圆中心 X 坐标\r
	 * @param dCenterY 椭圆中心 Y 坐标\r
	 * @param dMajorAxisX 长轴 X 坐标\r
	 * @param dMajorAxisY 长轴 Y 坐标\r
	 * @param dRadiusRatio 短轴与长轴的比例\r
	 * @returns 成功返回 1，失败返回 0\r
	 */\r
	drawEllipse(dCenterX: number, dCenterY: number, dMajorAxisX: number, dMajorAxisY: number, dRadiusRatio: number): McObjectId;\r
	/**\r
	 * 绘制椭圆弧\r
	 * @param dCenterX 椭圆中心 X 坐标\r
	 * @param dCenterY 椭圆中心 Y 坐标\r
	 * @param dMajorAxisX 长轴 X 坐标\r
	 * @param dMajorAxisY 长轴 Y 坐标\r
	 * @param dRadiusRatio 短轴与长轴的比例\r
	 * @param dStartAng 起始角度，单位为弧度\r
	 * @param dEndAng 结束角度，单位为弧度\r
	 */\r
	drawEllipseArc(dCenterX: number, dCenterY: number, dMajorAxisX: number, dMajorAxisY: number, dRadiusRatio: number, dStartAng: number, dEndAng: number): McObjectId;\r
	/**\r
	 * 绘制点\r
	 * @param dX X 坐标\r
	 * @param dY Y 坐标\r
	 */\r
	drawPoint(dX: number, dY: number): McObjectId;\r
	/**\r
	 * 绘制实体\r
	 * @param dX1 第一个点 X 坐标\r
	 * @param dY1 第一个点 Y 坐标\r
	 * @param dX2 第二个点 X 坐标\r
	 * @param dY2 第二个点 Y 坐标\r
	 * @param dX3 第三个点 X 坐标\r
	 * @param dY3 第三个点 Y 坐标\r
	 * @param dX4 第四个点 X 坐标\r
	 * @param dY4 第四个点 Y 坐标\r
	 * @returns 成功返回实体号，失败返回 0\r
	 */\r
	drawSolid(dX1: number, dY1: number, dX2: number, dY2: number, dX3: number, dY3: number, dX4: number, dY4: number): McObjectId;\r
	/**\r
	 * 绘制多行文本\r
	 * @param dPosX 文本位置 X 坐标\r
	 * @param dPosY 文本位置 Y 坐标\r
	 * @param pszContents 文本内容\r
	 * @param dHeight 文本高度\r
	 * @param dWidth 文本宽度\r
	 * @param dRotation 旋转角度，单位为弧度\r
	 * @param iAttachment 对齐方式\r
	 * @returns 成功返回 1，失败返回 0\r
	 */\r
	drawMText(dPosX: number, dPosY: number, sContents: string, dHeight: number, dWidth: number, dRotation: number, iAttachment: McDb.AttachmentPoint): McObjectId;\r
	/**\r
	 * 绘制单行文本\r
	 * @param dPosX 文本位置 X 坐标\r
	 * @param dPosY 文本位置 Y 坐标\r
	 * @param pszText 文本内容\r
	 * @param dHeight 文本高度\r
	 * @param dRotation 旋转角度，单位为弧度\r
	 * @param horizontalMode 横向对齐方式\r
	 * @param verticalMode 纵向对齐方式\r
	 * @returns 成功返回 1，失败返回 0\r
	 */\r
	drawText(dPosX: number, dPosY: number, pszText: string, dHeight: number, dRotation: number, horizontalMode: McDb.TextHorzMode, verticalMode: McDb.TextVertMode): McObjectId;\r
	/**\r
	 * 绘制块参照\r
	 * @param dPosX 参照位置 X 坐标\r
	 * @param dPosY 参照位置 Y 坐标\r
	 * @param pszBlkName 块名\r
	 * @param dScale 缩放比例\r
	 * @param dAng 旋转角度，单位为弧度\r
	 * @returns 成功返回 1，失败返回 0\r
	 */\r
	drawBlockReference(dPosX: number, dPosY: number, sBlkName: string, dScale: number, dAng: number): McObjectId;\r
	/**\r
	 * 绘制对齐标注\r
	 * @param dExtLine1PointX 第一条尺线起点 X 坐标\r
	 * @param dExtLine1PointY 第一条尺线起点 Y 坐标\r
	 * @param dExtLine2PointX 第二条尺线起点 X 坐标\r
	 * @param dExtLine2PointY 第二条尺线起点 Y 坐标\r
	 * @param dTextPositionX 文本位置 X 坐标\r
	 * @param dTextPositionY 文本位置 Y 坐标\r
	 * @returns 成功返回 1，失败返回 0\r
	 */\r
	drawDimAligned(dExtLine1PointX: number, dExtLine1PointY: number, dExtLine2PointX: number, dExtLine2PointY: number, dTextPositionX: number, dTextPositionY: number): McObjectId;\r
	/**\r
	 * 绘制角度标注\r
	 * @param dAngleVertexX 角度顶点 X 坐标\r
	 * @param dAngleVertexY 角度顶点 Y 坐标\r
	 * @param dFirstEndPointX 第一条尺线起点 X 坐标\r
	 * @param dFirstEndPointY 第一条尺线起点 Y 坐标\r
	 * @param dSecondEndPointX 第二条尺线起点 X 坐标\r
	 * @param dSecondEndPointY 第二条尺线起点 Y 坐标\r
	 * @param dTextPointX 文本位置 X 坐标\r
	 * @param dTextPointY 文本位置 Y 坐标\r
	 * @returns 成功返回 1，失败返回 0\r
	 */\r
	drawDimAngular(dAngleVertexX: number, dAngleVertexY: number, dFirstEndPointX: number, dFirstEndPointY: number, dSecondEndPointX: number, dSecondEndPointY: number, dTextPointX: number, dTextPointY: number): McObjectId;\r
	/**\r
	 * 绘制直径标注\r
	 * @param dChordPointX 弦线端点 X 坐标\r
	 * @param dChordPointY 弦线端点 Y 坐标\r
	 * @param dFarChordPointX 弦线远端点 X 坐标\r
	 * @param dFarChordPointY 弦线远端点 Y 坐标\r
	 * @param dLeaderLength 引线长度\r
	 * @returns 成功返回 1，失败返回 0\r
	 */\r
	drawDimDiametric(dChordPointX: number, dChordPointY: number, dFarChordPointX: number, dFarChordPointY: number, dLeaderLength: number): McObjectId;\r
	/**\r
	 * 绘制旋转标注\r
	 * @param dExtLine1PointX 第一条尺线起点 X 坐标\r
	 * @param dExtLine1PointY 第一条尺线起点 Y 坐标\r
	 * @param dExtLine2PointX 第二条尺线起点 X 坐标\r
	 * @param dExtLine2PointY 第二条尺线起点 Y 坐标\r
	 * @param dDimLineLocationX 标注线位置 X 坐标\r
	 * @param dDimLineLocationY 标注线位置 Y 坐标\r
	 * @param dRotationAngle 旋转角度，单位为弧度\r
	 * @returns 成功返回 1，失败返回 0\r
	 */\r
	drawDimRotated(dExtLine1PointX: number, dExtLine1PointY: number, dExtLine2PointX: number, dExtLine2PointY: number, dDimLineLocationX: number, dDimLineLocationY: number, dRotationAngle: number): McObjectId;\r
	/**\r
	 * 绘制标注线性尺寸\r
	 * @param dDefinitionPointX - 定义点 X 坐标\r
	 * @param dDefinitionPointY - 定义点 Y 坐标\r
	 * @param dDeaderEndPointX - 标注终点 X 坐标\r
	 * @param dDeaderEndPointY - 标注终点 Y 坐标\r
	 * @param isUseXAxis - 是否沿 X 轴方向标注\r
	 * @returns 绘制结果\r
	 */\r
	drawDimOrdinate(dDefinitionPointX: number, dDefinitionPointY: number, dDeaderEndPointX: number, dDeaderEndPointY: number, isUseXAxis: boolean): McObjectId;\r
	/**\r
	 * 绘制标注径向尺寸\r
	 * @param dCenterX - 中心点 X 坐标\r
	 * @param dCenterY - 中心点 Y 坐标\r
	 * @param dChordPointX - 弦线端点 X 坐标\r
	 * @param dChordPointY - 弦线端点 Y 坐标\r
	 * @param dLeaderLength - 标注线长度\r
	 * @returns 绘制结果\r
	 */\r
	drawDimRadial(dCenterX: number, dCenterY: number, dChordPointX: number, dChordPointY: number, dLeaderLength: number): McObjectId;\r
	/**\r
	 * 将路径移动到指定位置\r
	 * @param dX - X 坐标\r
	 * @param dY - Y 坐标\r
	 */\r
	pathMoveTo(dX: number, dY: number): void;\r
	/**\r
	 * 移动路径到指定位置，同时指定起始宽度、终止宽度和凸度\r
	 * @param dX - X 坐标\r
	 * @param dY - Y 坐标\r
	 * @param dStartWidth - 起始宽度\r
	 * @param dEndWidth - 终止宽度\r
	 * @param dBulge - 凸度\r
	 */\r
	pathMoveToEx(dX: number, dY: number, dStartWidth: number, dEndWidth: number, dBulge: number): void;\r
	/**\r
	 * 从当前位置画一条直线到指定位置\r
	 * @param dX - X 坐标\r
	 * @param dY - Y 坐标\r
	 */\r
	pathLineTo(dX: number, dY: number): void;\r
	/**\r
	 * 从当前位置画一条直线到指定位置，同时指定起始宽度、终止宽度和凸度\r
	 * @param dX - X 坐标\r
	 * @param dY - Y 坐标\r
	 * @param dStartWidth - 起始宽度\r
	 * @param dEndWidth - 终止宽度\r
	 * @param dBulge - 凸度\r
	 */\r
	pathLineToEx(dX: number, dY: number, dStartWidth: number, dEndWidth: number, dBulge: number): void;\r
	/**\r
<<<<<<< HEAD\r
=======\r
	 * 根据圆对象创建一个路径\r
	*/\r
	pathCircle(dCenX: number, dCenY: number, dR: number, dPrecision?: number, dWidth?: number): boolean;\r
	/**\r
>>>>>>> 8c441820 (init)\r
	 * 将路径转换为折线\r
	 * @returns 转换结果\r
	 */\r
	drawPathToPolyline(): McObjectId;\r
	/**\r
	 * 将路径转换为样条曲线\r
	 * @returns 转换结果\r
	 */\r
	drawPathToSpline(): McObjectId;\r
	/**\r
	 * 闭合路径\r
	 */\r
	pathMakeClosed(): void;\r
	/**\r
	 * 将路径转换为填充图案\r
	 * @param dPatternScale - 图案缩放比例\r
	 * @returns 转换结果\r
	 */\r
<<<<<<< HEAD\r
	drawPathToHatch(dPatternScale: number): McObjectId;\r
=======\r
	drawPathToHatch(dPatternScale?: number): McObjectId;\r
>>>>>>> 8c441820 (init)\r
	/**\r
	 * 绘制实体\r
	 * @param entity - 实体对象\r
	 * @returns 绘制结果\r
	 */\r
	drawEntity(entity: McDbEntity): McObjectId;\r
	/**\r
	* 绘制填充对象\r
	* @param entity - 填充对象对象\r
	* @returns 绘制对象id\r
	*/\r
	drawHatch(hatch: McDbHatch, dPatternScale?: number): McObjectId;\r
	/**\r
  * 将 lIdIndex 转换成 McDbObject 对象\r
  * @param lIdIndex - 对象 ID\r
  * @returns 与 ID 对应的 McDbObject 对象，如果对象不存在则返回 null\r
  */\r
	objectIdToObject(lIdIndex: number): McDbObject | null;\r
	/**\r
	 * 销毁指定的 McRxObjectImp 对象\r
	 * @param pObjectImp - 待销毁的 McRxObjectImp 对象\r
	 */\r
	destroyObject(pObjectImp: McRxObjectImp): void;\r
	/**\r
	* 得到所有布局名\r
	*/\r
	getAllLayoutName(): McGeStringArray;\r
	/**\r
<<<<<<< HEAD\r
  * 设置所有布局名\r
=======\r
  * 设置当前布局名\r
>>>>>>> 8c441820 (init)\r
  */\r
	setCurrentLayout(layoutName: string): void;\r
	/**\r
	 * 返加MxCpp对象，它会在MxDraw模块中调用。\r
	*/\r
	getMxCpp(): any;\r
	/**\r
<<<<<<< HEAD\r
	* 当前绘图坐标到CAD图纸坐标.\r
   */\r
	doc2cad(pt: McGePoint3d): McGePoint3d;\r
	/**\r
   * CAD图纸坐标到当前绘图坐标\r
  */\r
	cad2doc(pt: McGePoint3d): McGePoint3d;\r
	doc2cad1(pt: THREE.Vector3): McGePoint3d;\r
	doc2cad2(x: number, y: number, z: number): McGePoint3d;\r
	cad2doc1(pt: McGePoint3d): THREE.Vector3;\r
	cad2doc2(x: number, y: number, z: number): THREE.Vector3;\r
	/**\r
=======\r
>>>>>>> 8c441820 (init)\r
   * 返回当前视区的显示范围,cad坐标。\r
   */\r
	getViewCADCoord(): {\r
		pt1: McGePoint3d;\r
		pt2: McGePoint3d;\r
		pt3: McGePoint3d;\r
		pt4: McGePoint3d;\r
	};\r
	/**\r
	 * 更新显示\r
	*/\r
	updateDisplay(isImmediate?: boolean, delayTime?: number): void;\r
	/**\r
	* 更新图层的显示\r
   */\r
	updateLayerDisplayStatus(): void;\r
	/**\r
   * 初始化用户注册数据.\r
  */\r
	initRegist(sRegist: string): void;\r
	/**\r
	 * 当前程序是否是试用版本.\r
	*/\r
	isTryVersion(): boolean;\r
	/**\r
	* 设置视区的背景色.\r
<<<<<<< HEAD\r
=======\r
	* @example\r
	* \`\`\`ts\r
	* import { McApp } from "mxcad"\r
	* const mxcad = McApp.getCurrentMxCAD()\r
	* mxcad.setViewBackgroundColor(255, 255, 255)\r
	* \`\`\`\r
>>>>>>> 8c441820 (init)\r
   */\r
	setViewBackgroundColor(red: number, green: number, blue: number): void;\r
	/**\r
	 * 返回当前数据库中设置的绘制颜色，它会自动依据背景色，把黑白色转换。\r
	*/\r
	getCurrentDatabaseDrawColor(): THREE.Color;\r
	/**\r
	 * 回退到上一个命令或标记处\r
	*/\r
	undo(): void;\r
	/**\r
	 *反回退，重做。\r
	*/\r
	redo(): void;\r
	/**\r
	 *在当前设置一个回退标记.\r
	*/\r
	undoMark(): void;\r
}\r
/**\r
 * McAppType 类，提供了 MxCAD 的一些基本操作。\r
 */\r
export declare class McAppType {\r
	private imp;\r
	MxCADAssist: any;\r
	private objectIdToObjectCalls;\r
<<<<<<< HEAD\r
=======\r
	private classNameToCreateCalls;\r
>>>>>>> 8c441820 (init)\r
	/**\r
	 * 初始化 McAppType 对象。\r
	 * @param imp 传入的 imp 对象。\r
	 */\r
	init(imp: any): void;\r
	/**\r
	 * 获取 imp 对象。\r
	 * @returns 返回 imp 对象。\r
	 */\r
	getImp(): any;\r
	/**\r
	 * 获取最后一次调用的结果。\r
	 * @returns 返回最后一次调用的结果。\r
	 */\r
	getLastCallResult(): number;\r
	/**\r
	 * 销毁对象。\r
	 * @param pObject 要销毁的对象。\r
	 */\r
	destroyObject(pObject: McRxObjectImp): void;\r
	/**\r
	 * 获取当前的 MxDraw 对象。\r
	 * @returns 返回当前的 McObject 对象。\r
	 */\r
	getCurrentMxCAD(): McObject;\r
	/**\r
	 * 将 RGB 值转换为索引。\r
	 * @param red 红色值。\r
	 * @param green 绿色值。\r
	 * @param blue 蓝色值。\r
	 * @param bAutoNearest 是否自动获取最近的颜色值。\r
	 * @returns 返回转换后的索引值。\r
	 */\r
	mcedRGB2Index(red: number, green: number, blue: number, bAutoNearest?: boolean): number;\r
	/**\r
	 * 设置默认的视区的背景色.\r
	*/\r
	setDefaultViewBackgroundColor(red: number, green: number, blue: number): void;\r
	/**\r
   * 判断一个对象id是否指类类型名对象\r
   */\r
	objectIdIsKindOf(lIdIndex: number, className: string): boolean;\r
<<<<<<< HEAD\r
	private initObjectIdToObjectCalls;\r
=======\r
	private initCalls;\r
>>>>>>> 8c441820 (init)\r
	/**\r
	 * 将对象 id 转换为 McDbObject 对象。\r
	 * @param lIdIndex 对象的 id。\r
	 * @returns 返回转换后的 McDbObject 对象，如果转换失败，则返回 null。\r
	 */\r
	objectIdToObject(lIdIndex: number): McDbObject | null;\r
	/**\r
	 * 创建克隆对象。\r
	 * @param clonobjImp 被克隆的对象。\r
	 * @returns 返回创建的 McDbObject 对象。\r
	 */\r
	createCloneObject(clonobjImp: any): McDbObject | null;\r
	/**\r
	* 调置字体加载位置，默值是fonts\r
	*/\r
	setFontFilePath(path: string): void;\r
	/**\r
<<<<<<< HEAD\r
=======\r
	* 调置默认的TrueType字体\r
	*/\r
	setDefaultTrueTypeFontFile(sTrueTypeFontName: string): void;\r
	/**\r
>>>>>>> 8c441820 (init)\r
	* 调置需要通过网络加载的字体\r
	*/\r
	addNetworkLoadingFont(paths: string | string[]): void;\r
	/**\r
	* 得当前程序的版本信息\r
	*/\r
	getVersionString(): string;\r
}\r
/**\r
 * MxCppType 类\r
 */\r
export declare class MxCppType {\r
	/**\r
	 * MxCpp 程序集\r
	 */\r
	mxcadassemblyimp?: any;\r
	/**\r
	 * McAppType 实例\r
	 */\r
	App: McAppType;\r
	/**\r
	* PropertiesWindow 属必窗口功能调用实例\r
	*/\r
	PropertiesWindow: MxPropertiesWindowCustom;\r
	/**\r
<<<<<<< HEAD\r
=======\r
   * Mx AI实例\r
   */\r
	Ai: MxAI;\r
	/**\r
>>>>>>> 8c441820 (init)\r
	 * 获取上一次调用的结果\r
	 * @returns {number} 调用结果\r
	 */\r
	getCallResult(): number;\r
	/**\r
	 * 创建新的 McGePoint3d 实例\r
	 * @param {any} pt 点坐标\r
	 * @returns {McGePoint3d} McGePoint3d 实例\r
	 */\r
	newMcGePoint3d(pt?: any): McGePoint3d;\r
	/**\r
 * 创建新的 McGeVector3d 实例\r
 * @param {any} pt 点坐标\r
 * @returns {McGePoint3d} McGePoint3d 实例\r
 */\r
	newMcGeVector3d(pt?: any): McGeVector3d;\r
	/**\r
	 * 返回当前活动的CAD对象\r
	 */\r
	getCurrentMxCAD(): McObject;\r
	/**\r
	 * 返回当前活动的CAD对象的数据库对象.\r
	 */\r
	getCurrentDatabase(): McDbDatabase;\r
	/**\r
	* 把hex格式的Gb2312编码的转成utf8\r
	*/\r
<<<<<<< HEAD\r
	decodeFromGb2312(str: string): string;\r
=======\r
	decodeFromGb2312(strHex: string): string;\r
	/**\r
   * 把utf8转成hex格式的Gb2312编码\r
   */\r
	encodeToGb2312(str: string): string;\r
>>>>>>> 8c441820 (init)\r
}\r
/**\r
 * MxCADUI 模块提供插件程序使用的接口.\r
 */\r
export interface MxCADUI {\r
	getUploadFileConfig: () => {\r
		baseUrl: string;\r
		saveDwgUrl: string;\r
		mxfilepath: string;\r
		saveUrl: string;\r
<<<<<<< HEAD\r
	};\r
	setRegistData: (sData: string) => void;\r
}\r
export declare enum MxPropertiesWindowCustomValueType {\r
	kInt = 1,\r
	kDouble = 2,\r
	kString = 3\r
}\r
=======\r
		printPdfUrl: string;\r
	};\r
	init: (plugin: MxCADPluginBase) => void;\r
	mxcad: McObject;\r
	mxmap: MxMap;\r
}\r
export declare class MxCADPluginMapDefaultData {\r
	mapOrigin: number[];\r
	cadOrigin: number[];\r
	meterInCADUnits: number;\r
	mapbox_accessToken: string;\r
	openFile?: string;\r
	rasterTileLayerList: any[];\r
	rasterTileKey?: string;\r
	viewColor?: {\r
		red: number;\r
		green: number;\r
		blue: number;\r
	};\r
}\r
export declare class MxCADPluginBase {\r
	sRegistData: string;\r
	mxcadui?: MxCADUI;\r
	openFile?: string;\r
	map_default_data?: MxCADPluginMapDefaultData;\r
}\r
/** 自定义属性窗口的值的类型 */\r
export declare enum MxPropertiesWindowCustomValueType {\r
	/** 整数 */\r
	kInt = 1,\r
	/** 双精度浮点数 */\r
	kDouble = 2,\r
	/** 字符串 */\r
	kString = 3\r
}\r
/** 自定义属性窗口需要的值 */\r
>>>>>>> 8c441820 (init)\r
export declare class MxPropertiesWindowCustomValue {\r
	sVarName: string;\r
	iVarType: number;\r
	val: any;\r
	isOnlyRead: boolean;\r
}\r
/**\r
 * MxPropertiesWindowCustom 属性窗口添加自定义属性.\r
 */\r
export declare class MxPropertiesWindowCustom {\r
	private getPropertiesCall;\r
	private setPropertiesCall;\r
<<<<<<< HEAD\r
	onEvent_getProperties(call: (id: McObjectId) => MxPropertiesWindowCustomValue[]): void;\r
	onEvent_setProperties(call: (id: McObjectId, prop: MxPropertiesWindowCustomValue) => void): void;\r
	setEntitySupportCustom(id: McObjectId, isCustomProperties?: boolean): void;\r
	getEntityProperties(id: McObjectId): MxPropertiesWindowCustomValue[];\r
	setEntityProperties(id: McObjectId, prop: MxPropertiesWindowCustomValue): void;\r
}\r
=======\r
	/** 插件程序程序调用，注册返回对象自定属性函数。 */\r
	onEvent_getProperties(call: (id: McObjectId) => MxPropertiesWindowCustomValue[]): void;\r
	/** 插件程序程序调用，注册设置对象自定属性函数。 */\r
	onEvent_setProperties(call: (id: McObjectId, prop: MxPropertiesWindowCustomValue) => void): void;\r
	/** 插件程序程序调用，设置该对象状态支持自定义属性在属性窗口显示。 */\r
	setEntitySupportCustom(id: McObjectId, isCustomProperties?: boolean): void;\r
	/** 属性UI程序调用 */\r
	getEntityProperties(id: McObjectId): MxPropertiesWindowCustomValue[];\r
	/** 属性UI程序调用 */\r
	setEntityProperties(id: McObjectId, prop: MxPropertiesWindowCustomValue): void;\r
}\r
export declare enum MxCADCloneType {\r
	/** 正常Clone */\r
	kClone = 1,\r
	/** 动态拖动Clone */\r
	kDragClone = 2,\r
	/** 数据归档 */\r
	kCPPClone = 3\r
}\r
export declare abstract class IMcDbDwgFiler {\r
	private type;\r
	constructor(type: MxCADCloneType);\r
	getType(): MxCADCloneType;\r
	abstract writePoint(name: string, pt: McGePoint3d): void;\r
	abstract readPoint(name: string): {\r
		pt: McGePoint3d;\r
		ret: boolean;\r
	};\r
}\r
export declare class MxCADWorldDraw {\r
	private imp;\r
	constructor(lPtrWorldDraw: number);\r
	drawEntity(entity: McDbEntity): void;\r
}\r
/**\r
 * 自定义实体。\r
 */\r
export declare abstract class McDbCustomEntity extends McDbEntity {\r
	/**\r
	 * 构造函数。\r
	 * @param imp 内部实现对象。\r
	 */\r
	constructor(imp?: any);\r
	rxInit(): void;\r
	clone(): McDbObject | null;\r
	syncData(toCpp?: boolean): boolean;\r
	protected assertWrite(autoUndo?: boolean): void;\r
	moveGripPointsAt(_iIndex: number, _dXOffset: number, _dYOffset: number, _dZOffset: number): void;\r
	getGripPoints(): McGePoint3dArray;\r
	tempRelationObject(): number;\r
	freeTempRelationObject(): void;\r
	abstract create(imp?: any): McDbCustomEntity;\r
	abstract getTypeName(): string;\r
	abstract dwgInFields(filter: IMcDbDwgFiler): boolean;\r
	abstract dwgOutFields(filter: IMcDbDwgFiler): boolean;\r
	abstract worldDraw(draw: MxCADWorldDraw): void;\r
}\r
>>>>>>> 8c441820 (init)\r
export declare let MxCpp: MxCppType;\r
export declare function loadMxCADassembly(call?: (MxCpp: MxCppType) => void, locateFile?: (fileName: string, base?: string | URL) => string, wasmBinary?: ArrayBuffer, fontspath?: string, networkFonts?: string[]): Promise<MxCppType>;\r
export declare function MxCheckTheBrowser(): {\r
	ok: boolean;\r
	error: string;\r
	var: any;\r
};\r
/** createMxCad 的参数配置 */\r
export interface MxCadConfig {\r
	/** 获取加载wasm相关文件(wasm/js/worker.js)路径位置\r
	 * @param fileName wasm相关的文件名称\r
	 * @param base 相对于js调用位置的http URL绝对路径\r
	 * @returns filePath 默认采用base + fileName\r
	 * @abstract 本质上locateFile配置函数就是返回wasm相关文件在自己的服务器上的位置\r
	 *           在npm包中\`node_modules/mxcad/dist/wasm/2d/\`下的文件就是支持2d的相关wasm文件\r
	 * @example\r
	 * \`\`\`js\r
	 * // 在vite中只需要如下代码:\r
	 * locateFile(fileName) { return new URL("/node_modules/mxcad/dist/wasm/2d/\${fileName}", import.meta.url).href}\r
	 * \`\`\`\r
	 */\r
	locateFile?: (fileName: string, base?: string | URL) => string;\r
	/**  WebAssembly 模块二进制文件 默认情况无需配置 **/\r
	wasmBinary?: ArrayBuffer;\r
	/**\r
	 * 当通过 MxFun.getCurrentDraw 未发现当前mxDraw实例时，\r
	 * 会通过 canvas属性(值可以是css选择器字符串也可以是一个canvas元素)来创建mxdraw实例\r
	 * 如果想要获得这个mxDraw实例 只需要调用mxdraw包中导出的 MxFun.getCurrentDraw方法即可\r
<<<<<<< HEAD\r
=======\r
	 * 如果gis模式下，canvas变量不会使用，会自动使用mapbox的canvas.\r
>>>>>>> 8c441820 (init)\r
	 *   */\r
	canvas?: string | HTMLCanvasElement;\r
	/**\r
	 * mxdraw和mxcad 核心代码加载完成初始化的回调\r
	 * onInit默认值函数如下实例所示（请根据你的业务需求自行修改）\r
	 * @example\r
	 * \`\`\`js\r
	 * import { MxFun } from "mxdraw"\r
	 * onInit() {\r
	 *  MxFun.setIniset({\r
	 *       // 启用对象选择功能.\r
	 *      EnableIntelliSelect: true,\r
	 *       // 选择类型\r
	 *      IntelliSelectType: 1,\r
	 *       // 是否开启多个选择\r
	 *      multipleSelect: false,\r
	 *   });\r
	 * }\r
	 * \`\`\`\r
	 * */\r
	onInit?: Function;\r
	/** 需要初始化打开的文件url路径 */\r
	fileUrl?: string;\r
	/** 监听打开文件成功回调事件 */\r
	onOpenFileComplete?: Function;\r
	/** 字体文件加载路径，默认是fonts */\r
	fontspath?: string;\r
	/** 服务器上可供加载的字体列表 */\r
	networkFonts?: string[];\r
<<<<<<< HEAD\r
	/** 打开文件参数设置 */\r
	openParameter?: object;\r
	/**鼠标中间键操作设置 */\r
=======\r
	/** 打开文件参数设置，如，打开文件不使用缓存：{fetchAttributes:FetchAttributes.EMSCRIPTEN_FETCH_LOAD_TO_MEMORY}*/\r
	openParameter?: object;\r
	/**鼠标中间键操作设置,默认为鼠标中间移动视区 */\r
>>>>>>> 8c441820 (init)\r
	middlePan?: number | boolean;\r
	/**注册数据 */\r
	registdata?: string;\r
	/**注册文件 */\r
	registfile?: string;\r
	/**视区背景颜色 */\r
	viewBackgroundColor?: {\r
		red: number;\r
		green: number;\r
		blue: number;\r
	};\r
<<<<<<< HEAD\r
=======\r
	/**地图模块 */\r
	map?: any;\r
	/**多选模式 */\r
	multipleSelect?: boolean;\r
>>>>>>> 8c441820 (init)\r
}\r
/** 创建MxCad实例\r
 * @example\r
 * 通过创建实例实现图纸展示以下基于vite打包工具\r
 * \`\`\`ts\r
 * createMxCad({\r
 *   canvas: "#myCanvas",\r
 *   locateFile: (fileName)=> new URL(\`/node_modules/mxcad/dist/wasm/2d/\${fileName}\`, import.meta.url).href,\r
 *   fileUrl: new URL("../assets/test.mxweb", import.meta.url).href\r
 * })\r
 * \`\`\`\r
 */\r
<<<<<<< HEAD\r
export declare const createMxCad: (config?: MxCadConfig) => Promise<McObject>;\r
=======\r
export declare const createMxCad: (config?: MxCadConfig, mxcadobj?: McObject) => Promise<McObject>;\r
>>>>>>> 8c441820 (init)\r
/** 排除接口包含某些类型的属性名称 */\r
export type NonPropertyNames<T, P> = {\r
	[K in keyof T]: T[K] extends P ? never : K;\r
}[keyof T];\r
/** 排除接口包含某些类型的属性\r
 * @param T 需要排除类型的接口\r
 * @param P 需要排除类型接口属性的类型\r
 * @example\r
 * \`\`\`ts\r
 * interface MyInterface {\r
 *  name: string;\r
 *  age: number;\r
 *  sayHello(): void;\r
 *  walk(distance: number): void;\r
 * }\r
 * ExcludePropertiesContainingThisType<MyInterface, Function>\r
 * \`\`\`\r
 */\r
export type ExcludePropertiesContainingThisType<T, P> = Pick<T, NonPropertyNames<T, P>>;\r
/** 颜色方法类型 */\r
export declare enum ColorMethod {\r
	/** 颜色随层 */\r
	kByLayer = 1,\r
	/** 颜色随块 */\r
	kByBlock = 2,\r
	/** 颜色值 */\r
	kByColor = 3,\r
	/** 颜色索引值 */\r
	kByACI = 4,\r
	kByPen = 5,\r
	kForeground = 6,\r
	kLayerOff = 7,\r
	kLayerFrozen = 8,\r
	kNone = 9\r
}\r
/** 颜色索引类型 */\r
export declare enum ColorIndexType {\r
	/** 随块 */\r
	kByblock = 0,\r
	/** 红色 */\r
	kRed = 1,\r
	/** 黄色 */\r
	kYellow = 2,\r
	/** 绿色 */\r
	kGreen = 3,\r
	/** 青色 */\r
	KCyan = 4,\r
	/** 蓝色*/\r
	kBlue = 5,\r
	/** 洋红色*/\r
	kMagenta = 6,\r
	/** 白色(反色)*/\r
	kWhite = 7,\r
	/** 随层 */\r
	kBylayer = 256\r
}\r
export type ConstructorArguments<T> = T extends new (...args: infer U) => any ? U : never;\r
export type McCmColorJSON = ExcludePropertiesContainingThisType<McCmColor, Function>;\r
export type THREEColorArgs = [\r
	(string | number | THREE.Color)\r
] | ConstructorArguments<typeof THREE.Color> | [\r
];\r
export type CreateColorArgs = THREEColorArgs | [\r
	(Partial<McCmColorJSON> | McCmColor)\r
];\r
export declare const getColorUtils: (...ages: THREEColorArgs) => THREE.Color;\r
export declare const createMcCmColor: (...ages: CreateColorArgs) => McCmColor;\r
export declare const setMcCmColor: (mcCmColor: McCmColor, ...ages: CreateColorArgs) => void;\r
<<<<<<< HEAD\r
/** 根据McCmColor颜色 生成css颜色值 */\r
export declare const getStyle: (mcCmColor: McCmColor | McCmColorJSON) => string;\r
/** 对象继承 */\r
export declare class ObjectInheritance {\r
	constructor(obj: any);\r
}\r
export declare const getIndexColors: () => Color[];\r
/***\r
 * Color 颜色类\r
 * @param ages 与new THREE.Color 的参数一样 也可以是自身\r
 * @example\r
 * \`\`\`js\r
 * import { Color, ColorIndexType } from "mxcad"\r
 * new Color()\r
 * new Color("#fff")\r
 * new Color("rgb(255, 255, 255)")\r
 * new Color(255, 255, 255)\r
 * new Color(0XFFFFFF)\r
 * new Color(new Mx.MxFun.getMxFunTHREE().Color())\r
 * new Color({\r
 *  colorIndex: ColorIndexType.kByblock,\r
 * })\r
 * // 获取css 颜色样式\r
 * new Color().getStyle()\r
 * \`\`\`\r
 * */\r
export declare class Color extends ObjectInheritance {\r
	/** 全部的颜色索引 */\r
	static get indexColors(): Color[];\r
	toJSON: () => McCmColorJSON;\r
	/** 获取css样式 */\r
	getStyle: () => string;\r
	/** 设置颜色 */\r
	set: (...ages: CreateColorArgs) => this;\r
	h: number;\r
	s: number;\r
	l: number;\r
	/** 设置HSL 值 */\r
	setHSL: (h: number, s: number, l: number) => this;\r
	constructor(...ages: CreateColorArgs | [\r
		Color\r
	]);\r
}\r
export interface Color extends McCmColor {\r
}\r
/** 绘制文字 */\r
export declare function drawText(): Promise<void>;\r
/** 绘制圆*/\r
export declare function drawCircle(): void;\r
export declare function drawLine(): Promise<void>;\r
export declare function drawMText(): Promise<void>;\r
export declare function drawPolyLine(): Promise<void>;\r
export declare function drawPolygon(): Promise<void>;\r
export declare function drawArc(): Promise<void>;\r
export declare function drawEllipticalArc(): void;\r
=======\r
/** 绘制文字\r
 * @param height 文字高度\r
 * @param text 文字内容\r
 * @param position 文字位置\r
 * @param angle 文件角度\r
 * @param color 文字颜色\r
 */\r
export declare function drawText(): Promise<McObjectId | undefined>;\r
export declare function drawCircle(): Promise<McObjectId | undefined>;\r
export declare function drawLine(): Promise<void>;\r
export declare function drawMText(): Promise<McObjectId | undefined>;\r
export declare function drawPolyLine(): Promise<void>;\r
export declare function drawPolygon(): Promise<void>;\r
export declare function drawArc(): Promise<void>;\r
export declare function drawEllipticalArc(): Promise<McObjectId | undefined>;\r
>>>>>>> 8c441820 (init)\r
export declare function Mx_Erase(): Promise<void>;\r
export declare const drawRectang: () => Promise<void>;\r
declare const getWasmURL: (wasmURL: string, baseURL?: string | URL) => string;\r
export type EventType = string | symbol;\r
export type PubSubEvent = Record<EventType, (...ages: any) => any>;\r
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
}\r
/** wasm importObject 的可配置选项 */\r
export interface WasmConfig {\r
	/** 二进制数据 设置wasmBinary 则 locateFile 不生效**/\r
	wasmBinary?: ArrayBuffer;\r
	/** 手动指定wasm文件位置 */\r
	locateFile?: typeof getWasmURL;\r
	/** 打印 */\r
	print?: (theText: string) => string;\r
	/** 打印错误 */\r
	printErr?: (theText: string) => void;\r
	/** 监听运行时初始化 */\r
	onRuntimeInitialized?: () => void;\r
}\r
/** MxDraw3d的构造函数参数 的可配置选项 */\r
export interface MxDraw3dConfig extends WasmConfig {\r
	[x: string]: any;\r
	canvas: string | HTMLCanvasElement;\r
	/** canvas最小宽度 默认300 */\r
	minWidth?: number;\r
	/** canvas最小高度 默认300 */\r
	minHeight?: number;\r
	/** 指定更新Canvas大小的函数，不指定则默认自动处理(指定该函数则 minHeight, minWidth无效) */\r
	updateCanvasSize?: () => void;\r
}\r
export declare class MxDraw3d extends PubSub<{\r
	"eventModesSelected": (ids: number[]) => void;\r
	"eventAddToTree": (node: string) => void;\r
	"eventRemoveFromTree": (ids: number[]) => void;\r
	"eventFileSave": (fileName: string) => void;\r
	"eventRebuildTree": (tree_str: string) => void;\r
<<<<<<< HEAD\r
=======\r
	"eventUpdatePointer": (pointer: number[]) => void;\r
	"eventUpdateViewSize": (pointer: number[]) => void;\r
>>>>>>> 8c441820 (init)\r
}> implements MxDraw3dConfig {\r
	[x: string]: any;\r
	/** 监听wasm 文件加载成功事件 */\r
	static onloadWasmMxDraw3dModel: (mxDraw3d: MxDraw3d) => void;\r
	canvas: HTMLCanvasElement;\r
	constructor(options: MxDraw3dConfig);\r
}\r
export interface MxDraw3d extends WasmConfig {\r
	canvas: HTMLCanvasElement;\r
	_malloc: (len: number) => number;\r
	_free: (ptr: number) => void;\r
	HEAPU8: Uint8Array;\r
	ctx: WebGLRenderingContext | WebGL2RenderingContext | null;\r
	/** 设置Canvas大小\r
	* @param w 宽度\r
	* @param h 高度\r
	* @param noUpdate 不更新调整侦听器大小 默认 是true\r
	*  */\r
	setCanvasSize(w: number, h: number, noUpdate?: boolean): void;\r
	/** 暂停主循环 */\r
	pauseMainLoop(): void;\r
	/** 恢复主循环 */\r
	resumeMainLoop(): void;\r
	/** 从内存打开\r
	 * @param fileName 表示文件名称 (可通过浏览器 File对象的name属性或者自定义) 是生成渲染3D对象的唯一标识\r
	 * @param dataBuffer 文件数据的缓冲区\r
	 * @param len 缓冲区的长度\r
	 * @param is 是否为压缩格式\r
	 *  */\r
	openFromMemory(fileName: string, dataBuffer: number, len: number, is?: boolean): boolean;\r
	/** 从内存打开\r
	* @param fileName 表示文件名称 (可通过浏览器 File对象的name属性或者自定义) 是生成渲染3D对象的唯一标识\r
	* @param dataBuffer 文件数据的缓冲区\r
	* @param len 缓冲区的长度\r
	* @param is 是否为压缩格式\r
	*  */\r
	openBRepFromMemory(fileName: string, dataBuffer: Buffer, len: number, is?: boolean): boolean;\r
	/** 从Url打开\r
	 * @param name 名称 是生成渲染3D对象的唯一标识\r
	 * @param fileUrl 文件路径\r
	 *  */\r
	openFromUrl: (name: string, fileUrl: string) => void;\r
	/** 获取视图宽度 */\r
	getViewWidth: () => number;\r
	/** 获取视图高度 */\r
	getViewHeight: () => number;\r
	/** 获取视图缩放比例 */\r
	getViewScale: () => number;\r
	/** 获取视图中鼠标X位置 */\r
	getViewCursorX: () => number;\r
	/** 获取视图中鼠标Y位置 */\r
	getViewCursorY: () => number;\r
	/** 获取视图中鼠标Z位置 */\r
	getViewCursorZ: () => number;\r
	/** 删除选中实体 */\r
	removeSelectedObjects: () => void;\r
	/** 设置显示/隐藏模型 */\r
	setObjectShowState: (theId: number, theToShow: boolean) => void;\r
	/** 获取文件的长度 */\r
	getFileSize: (theFileName: string) => number;\r
	/** 获取文件的BufferPointer */\r
	getFileArryBufferPointer: (theFileName: string) => number;\r
	/** 新建文档 */\r
	creatDocument: () => boolean;\r
	/** 执行undo */\r
	executeUndo: () => boolean;\r
	/** 执行redo */\r
	executeRedo: () => boolean;\r
	/** 加载贴图图片 */\r
	loadTextureImg: (fileUrl: string, fileName: string) => void;\r
	/** 适应选中的对象 */\r
	fitSelectedObjects: () => void;\r
	/** 设置多维数据集贴图背景 */\r
	setCubemapBackground(url: string): void;\r
	/** 完成初始化 */\r
	ready: Promise<MxDraw3d>;\r
	/*** 显示地面或地面网格 */\r
	displayGround(is: boolean): void;\r
	/**\r
	 * 显示对象\r
	 * @param 唯一标识名称 是openFromUrl、openBRepFromMemory、 openFromMemory、 (open3DFile参数 file的name属性)\r
	 * */\r
	displayObject(name: string): boolean;\r
	/**\r
	 * 擦除对象\r
	 * @param 唯一标识名称 是openFromUrl、openBRepFromMemory、 openFromMemory、 (open3DFile参数 file的name属性)\r
	 * */\r
	eraseObject(name: string): boolean;\r
	/** 适应所有对象 */\r
	fitAllObjects(is: boolean): void;\r
	/** 删除所有对象 */\r
	removeAllObjects(): void;\r
	/** 高亮entry对应模型 */\r
	highLightSelShape(theEntry: number): void;\r
<<<<<<< HEAD\r
=======\r
	/** 高亮 */\r
	highLightSelLabelShape(labelEntryStr: string): void;\r
	/** 通过Entry来进行删除对象 */\r
	removeObjectByEntry(theEntry: string): void;\r
	/** 激活选择模式 */\r
	activateSelectionMode(selectionType: MdGe.MxShapeEnum): void;\r
	/** 失活所有选择模式 */\r
	deactivateAllSelectionMode(): void;\r
	/** 开启关闭操作器 */\r
	setManipulatorEnabled(isEnabled: boolean): void;\r
	/** 管理剖切平面 */\r
	enableXClipPlane(theToEnabled: boolean): void;\r
	setXClipPlaneXPosition(thePosition: number): void;\r
	setXClipPlaneReverse(): void;\r
	enableYClipPlane(theToEnabled: boolean): void;\r
	setYClipPlaneYPosition(thePosition: number): void;\r
	setYClipPlaneReverse(): void;\r
	enableZClipPlane(theToEnabled: boolean): void;\r
	setZClipPlaneZPosition(thePosition: number): void;\r
	setZClipPlaneReverse(): void;\r
	enableCustomClipPlane(theToEnabled: boolean): void;\r
	setCustomClipPlanePosition(thePosition: number): void;\r
	setCustomClipPlaneReverse(): void;\r
	setCustomClipPlaneDirection(x: number, y: number, z: number): void;\r
	/** 散开模型 */\r
	explodeModels(theExplodeFactor: number): void;\r
	/** 设置显示模式 */\r
	setDisplayMode(theMode: MdGe.MxGlobalDisplayMode): void;\r
	/** 显示隐藏中心坐标轴体 */\r
	showCenterTrihedron(theToShow: boolean): void;\r
	/** 显示隐藏 */\r
	setObjectShowStateByLabel(labelEntryStr: string, theToShow: boolean): void;\r
>>>>>>> 8c441820 (init)\r
	/** 更新画布大小 */\r
	updateCanvasSize: () => void;\r
	/** 通过浏览器器File对象打开3D文件\r
	 * @param file File对象\r
	 */\r
	open3DFile: (file: File) => void;\r
	/** 表示一个形状 */\r
	MdGeShape: typeof MdGeShape;\r
	/** 表示一个点 */\r
	MdGePoint: typeof MdGePoint;\r
	/** 表示一个向量 */\r
	MdGeVec: typeof MdGeVec;\r
	/** 表示一个Wire形状 */\r
	MdGeWire: typeof MdGeWire;\r
	/** 表示一个Edge形状 */\r
	MdGeEdge: typeof MdGeEdge;\r
	/** 表示一个Vertex形状 */\r
	MdGeVertex: typeof MdGeVertex;\r
	/** 表示一个Face形状 */\r
	MdGeFace: typeof MdGeFace;\r
	/** 表示一个Shell形状 */\r
	MdGeShell: typeof MdGeShell;\r
	/** 表示一个Solid形状 */\r
	MdGeSolid: typeof MdGeSolid;\r
	/** 表示一个CompSolid形状 */\r
	MdGeCompSolid: typeof MdGeCompSolid;\r
	/** 表示一个Compound形状 */\r
	MdGeCompound: typeof MdGeCompound;\r
	/** 表示一个矩阵 */\r
	MdGeMat: typeof MdGeMat;\r
	/** 表示一个坐标 */\r
	MdGeXYZ: typeof MdGeXYZ;\r
	/** 表示一个变换 */\r
	MdGeTrsf: typeof MdGeTrsf;\r
	/** 表示一个方向 */\r
	MdGeDir: typeof MdGeDir;\r
	/** 表示一个轴 */\r
	MdGeAxis: typeof MdGeAxis;\r
	/** 表示一个右手坐标系 */\r
	MdGeCSYSR: typeof MdGeCSYSR;\r
	/** 表示角度标注 */\r
	MdGeAngleDim: typeof MdGeAngleDim;\r
	/** 表示一维整数数组 */\r
	MdGeArray1OfInteger: typeof MdGeArray1OfInteger;\r
	/** 表示一维点数组 */\r
	MdGeArray1OfPnt: typeof MdGeArray1OfPnt;\r
	/** 表示一维实数数组 */\r
	MdGeArray1OfReal: typeof MdGeArray1OfReal;\r
	/** 表示二维点数组 */\r
	MdGeArray2OfPnt: typeof MdGeArray2OfPnt;\r
	/** 表示二维实数数组 */\r
	MdGeArray2OfReal: typeof MdGeArray2OfReal;\r
	/** 表示贝塞尔曲线 */\r
	MdGeBezierCurve: typeof MdGeBezierCurve;\r
	/** 表示贝塞尔曲面 */\r
	MdGeBezierSurface: typeof MdGeBezierSurface;\r
	/** 表示倒斜角 */\r
	MdGeChamfer: typeof MdGeChamfer;\r
	/** 表示一个圆 */\r
	MdGeCircle: typeof MdGeCircle;\r
	/** 表示一个坐标系（左手或右手） */\r
	MdGeCSYS: typeof MdGeCSYS;\r
	/** 表示一个圆锥 */\r
	MdGeCone: typeof MdGeCone;\r
	/** 表示一个圆柱 */\r
	MdGeCylinder: typeof MdGeCylinder;\r
	/** 表示一个平面 */\r
	MdGePlane: typeof MdGePlane;\r
	/** 表示直径标注 */\r
	MdGeDiameterDim: typeof MdGeDiameterDim;\r
	/** 表示一个椭圆 */\r
	MdGeEllipse: typeof MdGeEllipse;\r
	MxShapeEnum: typeof MdGe.MxShapeEnum;\r
	MxHorizontalTextAlignment: typeof MdGe.MxHorizontalTextAlignment;\r
	MxVerticalTextAlignment: typeof MdGe.MxVerticalTextAlignment;\r
	MxFontAspect: typeof MdGe.MxFontAspect;\r
	MxTypeOfDisplayText: typeof MdGe.MxTypeOfDisplayText;\r
	MxCF3dFilletShapeEnum: typeof MdGe.MxCF3dFilletShapeEnum;\r
	MxCFDSChamfMode: typeof MdGe.MxCFDSChamfMode;\r
	MxGFTrihedron: typeof MdGe.MxGFTrihedron;\r
	MxGAShapeEnum: typeof MdGe.MxGAShapeEnum;\r
	MxOffsetModeEnum: typeof MdGe.MxOffsetModeEnum;\r
	MxGAJoinTypeEnum: typeof MdGe.MxGAJoinTypeEnum;\r
	MxNameOfMaterial: typeof MdGe.MxNameOfMaterial;\r
	MxTypeOfMaterial: typeof MdGe.MxTypeOfMaterial;\r
	MxTypeOfReflection: typeof MdGe.MxTypeOfReflection;\r
	MxNameOfColor: typeof MdGe.MxNameOfColor;\r
	MxTypeOfColor: typeof MdGe.MxTypeOfColor;\r
	MxDisplayMode: typeof MdGe.MxDisplayMode;\r
	MxTypeOfAngle: typeof MdGe.MxTypeOfAngle;\r
	MxTypeOfAngleArrowVisibility: typeof MdGe.MxTypeOfAngleArrowVisibility;\r
	MxTypeOfLine: typeof MdGe.MxTypeOfLine;\r
	MxTextPath: typeof MdGe.MxTextPath;\r
	MxDimensionArrowOrientation: typeof MdGe.MxDimensionArrowOrientation;\r
	MxDimensionTextVerticalPosition: typeof MdGe.MxDimensionTextVerticalPosition;\r
	MxDimensionTextHorizontalPosition: typeof MdGe.MxDimensionTextHorizontalPosition;\r
	MxKindOfDimension: typeof MdGe.MxKindOfDimension;\r
<<<<<<< HEAD\r
=======\r
	MxDocColorType: typeof MdGe.MxDocColorType;\r
	MxKindOfInteractive: typeof MdGe.MxKindOfInteractive;\r
	MxPrs3dTypeOfHLR: typeof MdGe.MxPrs3dTypeOfHLR;\r
	MxDisplayStatus: typeof MdGe.MxDisplayStatus;\r
>>>>>>> 8c441820 (init)\r
	/** 表示拓扑元素遍历 */\r
	MdGeExplorer: typeof MdGeExplorer;\r
	/** 表示倒圆角 */\r
	MdGeFillet: typeof MdGeFillet;\r
	/** 表示双曲线 */\r
	MdGeHypr: typeof MdGeHypr;\r
	/** 表示一个Box */\r
	MdGeBox: typeof MdGeBox;\r
	/** 表示B样条曲线 */\r
	MdGeBSplineCurve: typeof MdGeBSplineCurve;\r
	/** 表示B样条曲面 */\r
	MdGeBSplineSurface: typeof MdGeBSplineSurface;\r
	/** 表示插值B样条曲线 */\r
	MdGeInterpolateBSpl: typeof MdGeInterpolateBSpl;\r
	/** 表示长度标注 */\r
	MdGeLengthDim: typeof MdGeLengthDim;\r
	/** 表示一条直线 */\r
	MdGeLine: typeof MdGeLine;\r
	/** 表示形状链表迭代器 */\r
	MdGeListIteratorOfListOfShape: typeof MdGeListIteratorOfListOfShape;\r
	/** 表示形状链表 */\r
	MdGeListOfShape: typeof MdGeListOfShape;\r
	/** 表示放样 */\r
	MdGeLoft: typeof MdGeLoft;\r
	/** 表示薄实体 */\r
	MdGeMakeThickSolid: typeof MdGeMakeThickSolid;\r
	/** 表示抛物线 */\r
	MdGeParab: typeof MdGeParab;\r
	/** 表示管道 */\r
	MdGePipe: typeof MdGePipe;\r
	/** 表示拟合点B样条曲线 */\r
	MdGePointsToBSpl: typeof MdGePointsToBSpl;\r
	/** 表示拟合B样条曲面 */\r
	MdGePointsToBSplSurface: typeof MdGePointsToBSplSurface;\r
	/** 表示拉伸体 */\r
	MdGePrism: typeof MdGePrism;\r
	/** 表示半径标注 */\r
	MdGeRadiusDim: typeof MdGeRadiusDim;\r
	/** 表示一个矩形 */\r
	MdGeRect: typeof MdGeRect;\r
	/** 表示旋转体 */\r
	MdGeRevol: typeof MdGeRevol;\r
	/** 表示一个球体 */\r
	MdGeSphere: typeof MdGeSphere;\r
	/** 表示文字 */\r
	MdGeText: typeof MdGeText;\r
	/** 表示文字标签 */\r
	MdGeTextLabel: typeof MdGeTextLabel;\r
	/** 拓扑转换类 */\r
	MdGeTopo: typeof MdGeTopo;\r
	mdGeTopo: MdGeTopo;\r
	/** 表示圆环 */\r
	MdGeTorus: typeof MdGeTorus;\r
	/** 形状变换类 */\r
	MdGeTransform: typeof MdGeTransform;\r
	/** 表示一个楔形 */\r
	MdGeWedge: typeof MdGeWedge;\r
	/** 表示BRep工具 */\r
	MdGeBRep: typeof MdGeBRep;\r
	mdGeBRep: MdGeBRep;\r
	/** 表示几何平面句柄 */\r
	MdGeHGeomPlane: typeof MdGeHGeomPlane;\r
	mdGeHGeomPlane: MdGeHGeomPlane;\r
	/** 表示几何曲面句柄 */\r
	MdGeHGeomSurface: typeof MdGeHGeomSurface;\r
	/** 所有类的父类，除MdGeTopo，MdGeBRep */\r
	MdGeObject: typeof MdGeObject;\r
	/** 表示颜色 */\r
	MdGeColor: typeof MdGeColor;\r
	/** 表示材质 */\r
	MdGeMaterialAspect: typeof MdGeMaterialAspect;\r
	/** 表示形状序列集合 */\r
	MdGeSequenceOfShape: typeof MdGeSequenceOfShape;\r
	/** 表示形状序列集合迭代器 */\r
	MdGeSequenceIteratorOfSequenceOfShape: typeof MdGeSequenceIteratorOfSequenceOfShape;\r
	/** 表示合并Edges成Wires */\r
	MdGeMakeWires: typeof MdGeMakeWires;\r
	/** 表示Wire生成Face */\r
	MdGeMakeFace: typeof MdGeMakeFace;\r
	/** 表示三点圆弧 */\r
	MdGeMakeArcOfCircle: typeof MdGeMakeArcOfCircle;\r
	/** 表示光照 */\r
	MdGeLight: typeof MdGeLight;\r
	/** 箭头样式 */\r
	MdGeArrowAspect: typeof MdGeArrowAspect;\r
	/** 标注样式 */\r
	MdGeDimAspect: typeof MdGeDimAspect;\r
	/** 线样式 */\r
	MdGeLineAspect: typeof MdGeLineAspect;\r
	/** 文本样式 */\r
	MdGeTextAspect: typeof MdGeTextAspect;\r
<<<<<<< HEAD\r
=======\r
	/** 应用程序 */\r
	MdGeApplication: typeof MdGeApplication;\r
	mdGeApplication: MdGeApplication;\r
	/** 文档 */\r
	MdGeDocument: typeof MdGeDocument;\r
	mdGeDocument: MdGeDocument;\r
	/** 文档图形工具 */\r
	MdGeDocShapeTool: typeof MdGeDocShapeTool;\r
	/** 文档颜色工具 */\r
	MdGeDocColorTool: typeof MdGeDocColorTool;\r
	/** 文档标签元素 */\r
	MdGeLabel: typeof MdGeLabel;\r
	/** 文档标签元素序列 */\r
	MdGeLabelSequence: typeof MdGeLabelSequence;\r
	/** Location */\r
	MdGeLocation: typeof MdGeLocation;\r
	/** MdGeLabelTree */\r
	MdGeLabelTree: typeof MdGeLabelTree;\r
	mdGeLabelTree: MdGeLabelTree;\r
	/** 文档读取器 */\r
	MdGeDocReader: typeof MdGeDocReader;\r
	/** 文件写入器 */\r
	MdGeDocWriter: typeof MdGeDocWriter;\r
	/** 上下文 */\r
	MdGeAisContext: typeof MdGeAisContext;\r
	mdGeAisContext: MdGeAisContext;\r
	/** ais对象 */\r
	MdGeAisObject: typeof MdGeAisObject;\r
	/** ais形状 */\r
	MdGeAisShape: typeof MdGeAisShape;\r
	/** 包围盒 */\r
	MdGeBndBox: typeof MdGeBndBox;\r
	/** aistextured形状 */\r
	MdGeAisTexturedShape: typeof MdGeAisTexturedShape;\r
	/** MdGeSpliter */\r
	MdGeSpliter: typeof MdGeSpliter;\r
>>>>>>> 8c441820 (init)\r
}\r
/**\r
 * 所有类的父类， 除去MdGeTopo以及MdGeBrep\r
 */\r
export declare class MdGeObject {\r
	protected imp: any;\r
	constructor(imp?: any);\r
	getImp(): any;\r
	protected initTempObject(imp: any): void;\r
}\r
/**\r
 * 表示一个形状。\r
 */\r
/**\r
 * 表示一个形状\r
 */\r
export declare class MdGeShape extends MdGeObject {\r
	constructor(p?: object);\r
	Fuse(other: MdGeShape): MdGeShape;\r
	Cut(remove: MdGeShape): MdGeShape;\r
	Common(other: MdGeShape): MdGeShape;\r
	Section(other: MdGeShape): MdGeShape;\r
	ShapeType(): MdGe.MxShapeEnum;\r
	Quantities(): MdGeArray1OfReal;\r
	MirrorByPoint(theP: MdGePoint): void;\r
	MirroredByPoint(theP: MdGePoint): MdGeShape;\r
	MirrorByAxis(axis: MdGeAxis): void;\r
	MirroredByAxis(axis: MdGeAxis): MdGeShape;\r
	MirrorByCSYSR(csysr: MdGeCSYSR): void;\r
	MirroredByCSYSR(csysr: MdGeCSYSR): MdGeShape;\r
	Rotate(axis: MdGeAxis, ang: number): void;\r
	Rotated(axis: MdGeAxis, ang: number): MdGeShape;\r
	Scale(point: MdGePoint, s: number): void;\r
	Scaled(point: MdGePoint, s: number): MdGeShape;\r
	Transform(trsf: MdGeTrsf): void;\r
	Transformed(trsf: MdGeTrsf): MdGeShape;\r
	TranslateByVec(vec: MdGeVec): void;\r
	TranslatedByVec(vec: MdGeVec): MdGeShape;\r
	TranslateBy2Points(point1: MdGePoint, point2: MdGePoint): void;\r
	TranslatedBy2Points(point1: MdGePoint, point2: MdGePoint): MdGeShape;\r
	SetTextureFileName(path: string): void;\r
	SetMaterialAspect(material: MdGeMaterialAspect): void;\r
	SetColor(color: MdGeColor): void;\r
	TextureRepeat(): boolean;\r
	URepeat(): number;\r
	VRepeat(): number;\r
	SetTextureRepeat(theToRepeat: boolean, theURepeat: number, theVRepeat: number): void;\r
	TextureScale(): boolean;\r
	TextureScaleU(): number;\r
	TextureScaleV(): number;\r
	SetTextureScale(theToSetTextureScale: boolean, theScaleU: number, theScaleV: number): void;\r
	TextureOrigin(): boolean;\r
	TextureUOrigin(): number;\r
	TextureVOrigin(): number;\r
	SetTextureOrigin(theToSetTextureOrigin: boolean, theUOrigin: number, theVOrigin: number): void;\r
	IsNull(): boolean;\r
<<<<<<< HEAD\r
	Draw(): void;\r
=======\r
	SetShapeName(theShapeName: string): void;\r
	GetShapeName(): string;\r
	GetBndBox(): MdGeBndBox;\r
	Draw(): string;\r
>>>>>>> 8c441820 (init)\r
}\r
/**\r
 * 表示一个点形状\r
 */\r
export declare class MdGeVertex extends MdGeShape {\r
<<<<<<< HEAD\r
	constructor(p1?: object | number, p2?: number, p3?: number);\r
=======\r
	constructor(p1?: MdGePoint | number | object, p2?: number, p3?: number);\r
>>>>>>> 8c441820 (init)\r
}\r
/**\r
 * 表示一个Edge形状\r
 */\r
export declare class MdGeEdge extends MdGeShape {\r
	constructor(p1?: MdGePoint | object, p2?: MdGePoint);\r
	Wire(): MdGeWire;\r
	AddedEdge(edge: MdGeEdge): MdGeWire;\r
	AddedWire(wire: MdGeWire): MdGeWire;\r
}\r
/**\r
 * 表示一个Wire形状\r
 */\r
export declare class MdGeWire extends MdGeShape {\r
	constructor(p?: object);\r
	AddedEdge(edge: MdGeEdge): MdGeWire;\r
	AddedWire(wire: MdGeWire): MdGeWire;\r
}\r
/**\r
 * 表示一个Face形状\r
 */\r
export declare class MdGeFace extends MdGeShape {\r
	constructor(p?: object);\r
}\r
/**\r
 * 表示一个Shell形状\r
 */\r
export declare class MdGeShell extends MdGeShape {\r
	constructor(p?: object);\r
}\r
/**\r
 * 表示一个Solid形状\r
 */\r
export declare class MdGeSolid extends MdGeShape {\r
	constructor(p?: object);\r
}\r
/**\r
 * 表示一个CompSolid形状\r
 */\r
export declare class MdGeCompSolid extends MdGeShape {\r
	constructor(p?: object);\r
}\r
/**\r
 * 表示一个Compound形状\r
 */\r
export declare class MdGeCompound extends MdGeShape {\r
	constructor(p?: object);\r
}\r
/**\r
 * 表示一个矩阵。\r
 */\r
/**\r
 * 表示一个矩阵\r
 */\r
export declare class MdGeMat extends MdGeObject {\r
	constructor(p1?: MdGeXYZ | number | object, p2?: MdGeXYZ | number, p3?: MdGeXYZ | number, p4?: number, p5?: number, p6?: number, p7?: number, p8?: number, p9?: number);\r
	SetCol(col: number, value: MdGeXYZ): void;\r
	SetCols(col1: MdGeXYZ, col2: MdGeXYZ, col3: MdGeXYZ): void;\r
	SetCross(ref: MdGeXYZ): void;\r
	SetDiagonal(x1: number, x2: number, x3: number): void;\r
	SetDot(ref: MdGeXYZ): void;\r
	SetIdentity(): void;\r
	SetRotation(axis: MdGeXYZ, ang: number): void;\r
	SetRow(row: number, value: MdGeXYZ): void;\r
	SetRows(row1: MdGeXYZ, row2: MdGeXYZ, row3: MdGeXYZ): void;\r
	SetScale(s: number): void;\r
	SetValue(row: number, col: number, value: number): void;\r
	Column(col: number): MdGeXYZ;\r
	Determinant(): number;\r
	Diagonal(): MdGeXYZ;\r
	Row(row: number): MdGeXYZ;\r
	Value(row: number, col: number): number;\r
	ChangeValue(row: number, col: number, value: number): void;\r
	IsSingular(): boolean;\r
	Add(other: MdGeMat): void;\r
	Added(other: MdGeMat): MdGeMat;\r
	Divide(scalar: number): void;\r
	Divided(scalar: number): MdGeMat;\r
	Invert(): void;\r
	Inverted(): MdGeMat;\r
	MultipliedByMat(other: MdGeMat): MdGeMat;\r
	MultiplyByMat(other: MdGeMat): void;\r
	PreMultiplyByMat(other: MdGeMat): void;\r
	MultipliedByS(scalar: number): MdGeMat;\r
	MultiplyByS(scalar: number): void;\r
	Power(n: number): void;\r
	Powered(n: number): MdGeMat;\r
	Subtract(other: MdGeMat): void;\r
	Subtracted(other: MdGeMat): MdGeMat;\r
	Transpose(): void;\r
	Transposed(): MdGeMat;\r
}\r
/**\r
 * 表示一个坐标。\r
 */\r
/**\r
 * 表示一个坐标\r
 */\r
export declare class MdGeXYZ extends MdGeObject {\r
	constructor(p1?: number | object, p2?: number, p3?: number);\r
	SetCoord(x: number, y: number, z?: number): void;\r
	SetX(x: number): void;\r
	SetY(y: number): void;\r
	SetZ(z: number): void;\r
	Coord(index: number): number;\r
	ChangeCoord(index: number, value: number): void;\r
	X(): number;\r
	Y(): number;\r
	Z(): number;\r
	Modulus(): number;\r
	SquareModulus(): number;\r
	IsEqual(other: MdGeXYZ, tolerance: number): boolean;\r
	Add(other: MdGeXYZ): void;\r
	Added(other: MdGeXYZ): MdGeXYZ;\r
	Cross(other: MdGeXYZ): void;\r
	Crossed(other: MdGeXYZ): MdGeXYZ;\r
	CrossMagnitude(right: MdGeXYZ): number;\r
	CrossSquareMagnitude(right: MdGeXYZ): number;\r
	CrossCross(coord1: MdGeXYZ, coord2: MdGeXYZ): void;\r
	CrossCrossed(coord1: MdGeXYZ, coord2: MdGeXYZ): MdGeXYZ;\r
	Divide(salar: number): void;\r
	Divided(scalar: number): MdGeXYZ;\r
	Dot(other: MdGeXYZ): number;\r
	DotCross(coord1: MdGeXYZ, coord2: MdGeXYZ): number;\r
	MultiplyByS(scalar: number): void;\r
	MultiplyByXYZ(other: MdGeXYZ): void;\r
	MultiplyByMat(matrix: MdGeMat): void;\r
	MultipliedByS(scalar: number): MdGeXYZ;\r
	MultipliedByXYZ(other: MdGeXYZ): MdGeXYZ;\r
	MultipliedByMat(matrix: MdGeMat): MdGeXYZ;\r
	Normalize(): void;\r
	Normalized(): MdGeXYZ;\r
	Reverse(): void;\r
	Reversed(): MdGeXYZ;\r
	Subtract(other: MdGeXYZ): void;\r
	Subtracted(other: MdGeXYZ): MdGeXYZ;\r
}\r
/**\r
 * 表示一个变换。\r
 */\r
/**\r
 * 表示一个变换\r
 */\r
export declare class MdGeTrsf extends MdGeObject {\r
	constructor(p?: object);\r
	SetMirrorByPoint(point: MdGePoint): void;\r
	SetMirrorByAxis(axis: MdGeAxis): void;\r
	SetMirrorByCSYSR(csysr: MdGeCSYSR): void;\r
	SetRotation(axis: MdGeAxis, ang: number): void;\r
	SetScale(point: MdGePoint, s: number): void;\r
	SetTranslationByVec(vec: MdGeVec): void;\r
	SetTranslationBy2Points(point1: MdGePoint, point2: MdGePoint): void;\r
	SetTranslationPart(vec: MdGeVec): void;\r
	SetScaleFactor(s: number): void;\r
	SetValues(a11: number, a12: number, a13: number, a14: number, a21: number, a22: number, a23: number, a24: number, a31: number, a32: number, a33: number, a34: number): void;\r
	IsNegative(): number;\r
	ScaleFactor(): number;\r
	Value(row: number, col: number): number;\r
	Invert(): void;\r
	Inverted(): MdGeTrsf;\r
	Multiplied(t: MdGeTrsf): MdGeTrsf;\r
	Multiply(t: MdGeTrsf): void;\r
	PreMultiply(t: MdGeTrsf): void;\r
	Power(n: number): void;\r
	Powered(n: number): MdGeTrsf;\r
	Transforms(x: number, y: number, z: number): void;\r
}\r
/**\r
 * 表示一个方向。\r
 */\r
/**\r
 * 表示一个方向\r
 */\r
export declare class MdGeDir extends MdGeObject {\r
	constructor(p1?: MdGeVec | number | object, p2?: number, p3?: number);\r
	SetCoord(p1: number, p2: number, p3?: number): void;\r
	SetX(theXv: number): void;\r
	SetY(theYv: number): void;\r
	SetZ(theZv: number): void;\r
	SetXYZ(theCoord: MdGeXYZ): void;\r
	Coord(theIndex: number): number;\r
	X(): number;\r
	Y(): number;\r
	Z(): number;\r
	XYZ(): MdGeXYZ;\r
	IsEqual(theOther: MdGeDir, theAngularTolerance: number): boolean;\r
	IsNormal(theOther: MdGeDir, theAngularTolerance: number): boolean;\r
	IsOpposite(theOther: MdGeDir, theAngularTolerance: number): boolean;\r
	IsParallel(theOther: MdGeDir, theAngularTolerance: number): boolean;\r
	Angle(theOther: MdGeDir): number;\r
	AngleWithRef(theOther: MdGeDir, theVRef: MdGeDir): number;\r
	Cross(theRight: MdGeDir): void;\r
	Crossed(theRight: MdGeDir): MdGeDir;\r
	CrossCross(theV1: MdGeDir, theV2: MdGeDir): void;\r
	CrossCrossed(theV1: MdGeDir, theV2: MdGeDir): MdGeDir;\r
	Dot(theOther: MdGeDir): number;\r
	DotCross(theV1: MdGeDir, theV2: MdGeDir): number;\r
	Reverse(): void;\r
	Reversed(): MdGeDir;\r
	MirrorByVec(theV: MdGeDir): void;\r
	MirroredByVec(theV: MdGeDir): MdGeDir;\r
	MirrorByAxis(theA1: MdGeAxis): void;\r
	MirroredByAxis(theA1: MdGeAxis): MdGeDir;\r
	MirrorByCSYSR(theA2: MdGeCSYSR): void;\r
	MirroredByCSYSR(theA2: MdGeCSYSR): MdGeDir;\r
	Rotate(theA1: MdGeAxis, theAng: number): void;\r
	Rotated(theA1: MdGeAxis, theAng: number): MdGeDir;\r
	Transform(theT: MdGeTrsf): void;\r
	Transformed(theT: MdGeTrsf): MdGeDir;\r
}\r
/**\r
 * 表示一个轴。\r
 */\r
/**\r
 * 表示一个轴\r
 */\r
export declare class MdGeAxis extends MdGeObject {\r
	constructor(p1?: MdGePoint | object, p2?: MdGeDir);\r
	Direction(): MdGeDir;\r
	Location(): MdGePoint;\r
	SetDirection(dir: MdGeDir): void;\r
	SetLocation(loc: MdGePoint): void;\r
}\r
/**\r
 * 表示右手坐标系。\r
 */\r
/**\r
 * 表示右手坐标系。\r
 */\r
export declare class MdGeCSYSR extends MdGeObject {\r
	constructor(p1?: MdGePoint | object, p2?: MdGeDir, p3?: MdGeDir);\r
	Origin(): MdGePoint;\r
	XDirection(): MdGeDir;\r
	YDirection(): MdGeDir;\r
	ZDirection(): MdGeDir;\r
	SetOrigin(p1: MdGePoint | number, p2?: number, p3?: number): void;\r
	SetXDirection(x_dir: MdGeDir): void;\r
	SetYDirection(y_dir: MdGeDir): void;\r
	SetZDirection(z_dir: MdGeDir): void;\r
	Angle(theOther: MdGeCSYSR): number;\r
	Axis(): MdGeAxis;\r
	IsCoplanarWithCSYSR(Other: MdGeCSYSR, LinearTolerance: number, AngularTolerance: number): boolean;\r
	IsCoplanarWithAxis(A1: MdGeAxis, LinearTolerance: number, AngularTolerance: number): boolean;\r
	MirrorByPoint(P: MdGePoint): void;\r
	MirroredByPoint(P: MdGePoint): MdGeCSYSR;\r
	MirrorByAxis(A1: MdGeAxis): void;\r
	MirroredByAxis(A1: MdGeAxis): MdGeCSYSR;\r
	MirrorByCSYSR(A2: MdGeCSYSR): void;\r
	MirroredByCSYSR(A2: MdGeCSYSR): MdGeCSYSR;\r
	Rotate(theA1: MdGeAxis, theAng: number): void;\r
	Rotated(theA1: MdGeAxis, theAng: number): MdGeCSYSR;\r
	Scale(theP: MdGePoint, theS: number): void;\r
	Scaled(theP: MdGePoint, theS: number): MdGeCSYSR;\r
	Transform(theT: MdGeTrsf): void;\r
	Transformed(theT: MdGeTrsf): MdGeCSYSR;\r
	TranslateByVec(theV: MdGeVec): void;\r
	TranslatedByVec(theV: MdGeVec): MdGeCSYSR;\r
	TranslateBy2Points(theP1: MdGePoint, theP2: MdGePoint): void;\r
	TranslatedBy2Points(theP1: MdGePoint, theP2: MdGePoint): MdGeCSYSR;\r
}\r
/**\r
 * 表示一个点。\r
 */\r
/**\r
 * 表示一个点。\r
 */\r
export declare class MdGePoint extends MdGeObject {\r
	constructor(p1?: number | object, p2?: number, p3?: number);\r
	X(): number;\r
	Y(): number;\r
	Z(): number;\r
	SetX(x: number): void;\r
	SetY(y: number): void;\r
	SetZ(z: number): void;\r
	SetXYZ(x: number, y: number, z: number): void;\r
	BaryCenter(alpha: number, point: MdGePoint, beta: number): void;\r
	IsEqual(other: MdGePoint, linearTolerance: number): boolean;\r
	Distance(other: MdGePoint): number;\r
	SquareDistance(other: MdGePoint): number;\r
	MirrorByPoint(point: MdGePoint): void;\r
	MirroredByPoint(point: MdGePoint): MdGePoint;\r
	MirrorByAxis(axis: MdGeAxis): void;\r
	MirroredByAxis(axis: MdGeAxis): MdGePoint;\r
	MirrorByCSYSR(csysr: MdGeCSYSR): void;\r
	MirroredByCSYSR(csysr: MdGeCSYSR): MdGePoint;\r
	Rotate(axis: MdGeAxis, ang: number): void;\r
	Rotated(axis: MdGeAxis, ang: number): MdGePoint;\r
	Scale(point: MdGePoint, s: number): void;\r
	Scaled(point: MdGePoint, s: number): MdGePoint;\r
	Transform(trsf: MdGeTrsf): void;\r
	Transformed(trsf: MdGeTrsf): MdGePoint;\r
	TranslateByVec(vec: MdGeVec): void;\r
	TranslatedByVec(vec: MdGeVec): MdGePoint;\r
	TranslateBy2Points(point1: MdGePoint, point2: MdGePoint): void;\r
	TranslatedBy2Points(point1: MdGePoint, point2: MdGePoint): MdGePoint;\r
	Shape(): MdGeShape;\r
	Vertex(): MdGeVertex;\r
}\r
/**\r
 * 表示一个向量。\r
 */\r
/**\r
 * 表示一个向量。\r
 */\r
export declare class MdGeVec extends MdGeObject {\r
	constructor(p1?: MdGePoint | number | object, p2?: MdGePoint | number, p3?: number);\r
	SetCoord(p1: number, p2: number, p3?: number): void;\r
	X(): number;\r
	Y(): number;\r
	Z(): number;\r
	SetX(x: number): void;\r
	SetY(y: number): void;\r
	SetZ(z: number): void;\r
	SetXYZ(x: number, y: number, z: number): void;\r
	Coord(theIndex: number): number;\r
	IsEqual(other: MdGeVec, linearTolerance: number, angularTolerance: number): boolean;\r
	IsNormal(other: MdGeVec, angularTolerance: number): boolean;\r
	IsOpposite(other: MdGeVec, angularTolerance: number): boolean;\r
	IsParallel(other: MdGeVec, angularTolerance: number): boolean;\r
	Angle(other: MdGeVec): number;\r
	AngleWithRef(other: MdGeVec, ref: MdGeVec): number;\r
	Magnitude(): number;\r
	SquareMagnitude(): number;\r
	Add(other: MdGeVec): void;\r
	Added(other: MdGeVec): MdGeVec;\r
	Subtract(right: MdGeVec): void;\r
	Subtracted(right: MdGeVec): MdGeVec;\r
	Multiply(scalar: number): void;\r
	Multiplied(scalar: number): MdGeVec;\r
	Divide(scalar: number): void;\r
	Divided(scalar: number): MdGeVec;\r
	Cross(right: MdGeVec): void;\r
	Crossed(right: MdGeVec): MdGeVec;\r
	CrossMagnitude(right: MdGeVec): number;\r
	CrossSquareMagnitude(right: MdGeVec): number;\r
	CrossCross(v1: MdGeVec, v2: MdGeVec): void;\r
	CrossCrossed(v1: MdGeVec, v2: MdGeVec): MdGeVec;\r
	Dot(other: MdGeVec): number;\r
	DotCross(v1: MdGeVec, v2: MdGeVec): number;\r
	Normalize(): void;\r
	Normalized(): MdGeVec;\r
	Reverse(): void;\r
	Reversed(): MdGeVec;\r
	SetLinearForm(p1: MdGeVec | number, p2: MdGeVec, p3?: MdGeVec | number, p4?: MdGeVec, p5?: MdGeVec | number, p6?: MdGeVec, p7?: MdGeVec): void;\r
	MirrorByVec(vec: MdGeVec): void;\r
	MirroredByVec(vec: MdGeVec): MdGeVec;\r
	MirrorByAxis(axis: MdGeAxis): void;\r
	MirroredByAxis(axis: MdGeAxis): MdGeVec;\r
	MirrorByCSYSR(csysr: MdGeCSYSR): void;\r
	MirroredByCSYSR(csysr: MdGeCSYSR): MdGeVec;\r
	Rotate(axis: MdGeAxis, ang: number): void;\r
	Rotated(axis: MdGeAxis, ang: number): MdGeVec;\r
	Scale(s: number): void;\r
	Scaled(s: number): MdGeVec;\r
	Transform(t: MdGeTrsf): void;\r
	Transformed(t: MdGeTrsf): MdGeVec;\r
}\r
/**\r
 * 表示一个Wire形状。\r
 */\r
/**\r
 * 表示一个Edge形状。\r
 */\r
/**\r
 * 表示一个Vertex形状。\r
 */\r
/**\r
 * 表示一个Face形状。\r
 */\r
/**\r
 * 表示一个Shell形状。\r
 */\r
/**\r
 * 表示一个Solid形状。\r
 */\r
/**\r
 * 表示一个CompSolid形状。\r
 */\r
/**\r
 * 表示一个Compound形状。\r
 */\r
/**\r
 * 表示角度标注。\r
 */\r
/**\r
 * 表示角度标注\r
 */\r
export declare class MdGeAngleDim extends MdGeObject {\r
	constructor(p1?: MdGeEdge | MdGePoint | object, p2?: MdGeEdge | MdGePoint, p3?: MdGePoint);\r
	FirstPoint(): MdGePoint;\r
	SecondPoint(): MdGePoint;\r
	CenterPoint(): MdGePoint;\r
	FirstShape(): MdGeShape;\r
	SecondShape(): MdGeShape;\r
	ThirdShape(): MdGeShape;\r
	SetMeasuredGeometry(p1: MdGeFace | MdGeEdge | MdGePoint, p2?: MdGeEdge | MdGePoint, p3?: MdGePoint): void;\r
	SetTextPosition(theTextPos: MdGePoint): void;\r
	GetTextPosition(): MdGePoint;\r
	GetDisplayUnits(): string;\r
	GetModelUnits(): string;\r
	SetDisplayUnits(theUnits: string): void;\r
	SetModelUnits(theUnits: string): void;\r
	SetType(theType: MdGe.MxTypeOfAngle): void;\r
	GetType(): MdGe.MxTypeOfAngle;\r
	SetArrowsVisibility(theType: MdGe.MxTypeOfAngleArrowVisibility): void;\r
	GetArrowsVisibility(): MdGe.MxTypeOfAngleArrowVisibility;\r
	GetValue(): number;\r
	SetComputedValue(): void;\r
	SetCustomValue(theValue: number): void;\r
	GetPlane(): MdGePlane;\r
	GetGeometryType(): number;\r
	SetCustomPlane(thePlane: MdGePlane): void;\r
	UnsetCustomPlane(): void;\r
	IsTextPositionCustom(): boolean;\r
	DimensionAspect(): MdGeDimAspect;\r
	SetDimensionAspect(theDimensionAspect: MdGeDimAspect): void;\r
	KindOfDimension(): MdGe.MxKindOfDimension;\r
	AcceptDisplayMode(theMode: number): boolean;\r
	UnsetFixedTextPosition(): void;\r
	SelToleranceForText2d(): number;\r
	SetSelToleranceForText2d(theTol: number): void;\r
	GetFlyout(): number;\r
	SetFlyout(theFlyout: number): void;\r
	IsValid(): boolean;\r
	Display(): void;\r
}\r
/**\r
 * 表示一维整数数组。\r
 */\r
/**\r
 * 表示一维整数数组。\r
 */\r
export declare class MdGeArray1OfInteger extends MdGeObject {\r
	constructor(p1?: number | object, p2?: number);\r
	Init(theInteger: number): void;\r
	Size(): number;\r
	Length(): number;\r
	IsEmpty(): boolean;\r
	Lower(): number;\r
	Upper(): number;\r
	IsDeletable(): boolean;\r
	IsAllocated(): boolean;\r
	First(): number;\r
	Last(): number;\r
	Value(theIndex: number): number;\r
	SetValue(theIndex: number, theInteger: number): void;\r
	Resize(theLower: number, theUpper: number, theToCopyData: boolean): void;\r
}\r
/**\r
 * 表示一维点数组。\r
 */\r
/**\r
 * 表示一维点数组。\r
 */\r
export declare class MdGeArray1OfPnt extends MdGeObject {\r
	constructor(p1?: number | object, p2?: number);\r
	Init(thePnt: MdGePoint): void;\r
	Size(): number;\r
	Length(): number;\r
	IsEmpty(): boolean;\r
	Lower(): number;\r
	Upper(): number;\r
	IsDeletable(): boolean;\r
	IsAllocated(): boolean;\r
	First(): MdGePoint;\r
	Last(): MdGePoint;\r
	Value(theIndex: number): MdGePoint;\r
	SetValue(theIndex: number, thePnt: MdGePoint): void;\r
	Resize(theLower: number, theUpper: number, theToCopyData: boolean): void;\r
}\r
/**\r
 * 表示一维实数数组。\r
 */\r
/**\r
 * 表示一维实数数组。\r
 */\r
export declare class MdGeArray1OfReal extends MdGeObject {\r
	constructor(p1?: number | object, p2?: number);\r
	Init(theReal: number): void;\r
	Size(): number;\r
	Length(): number;\r
	IsEmpty(): boolean;\r
	Lower(): number;\r
	Upper(): number;\r
	IsDeletable(): boolean;\r
	IsAllocated(): boolean;\r
	First(): number;\r
	Last(): number;\r
	Value(theIndex: number): number;\r
	SetValue(theIndex: number, theReal: number): void;\r
	Resize(theLower: number, theUpper: number, theToCopyData: boolean): void;\r
}\r
/**\r
 * 表示二维点数组。\r
 */\r
/**\r
 * 表示二维点数组。\r
 */\r
export declare class MdGeArray2OfPnt extends MdGeObject {\r
	constructor(p1?: number | MdGePoint | object, p2?: number, p3?: number, p4?: number, p5?: number);\r
	Init(thePoint: MdGePoint): void;\r
	Size(): number;\r
	Length(): number;\r
	NbRows(): number;\r
	NbColumns(): number;\r
	RowLength(): number;\r
	ColLength(): number;\r
	LowerRow(): number;\r
	UpperRow(): number;\r
	LowerCol(): number;\r
	UpperCol(): number;\r
	IsDeletable(): boolean;\r
	Value(theRow: number, theCol: number): MdGePoint;\r
	SetValue(theRow: number, theCol: number, thePoint: MdGePoint): void;\r
	Resize(theRowLower: number, theRowUpper: number, theColLower: number, theColUpper: number, theToCopyData: boolean): void;\r
}\r
/**\r
 * 表示二维实数数组。\r
 */\r
/**\r
 * 表示二维实数数组。\r
 */\r
export declare class MdGeArray2OfReal extends MdGeObject {\r
	constructor(p1?: number | object, p2?: number, p3?: number, p4?: number, p5?: number);\r
	Init(theReal: number): void;\r
	Size(): number;\r
	Length(): number;\r
	NbRows(): number;\r
	NbColumns(): number;\r
	RowLength(): number;\r
	ColLength(): number;\r
	LowerRow(): number;\r
	UpperRow(): number;\r
	LowerCol(): number;\r
	UpperCol(): number;\r
	IsDeletable(): boolean;\r
	Value(theRow: number, theCol: number): number;\r
	SetValue(theRow: number, theCol: number, theReal: number): void;\r
	Resize(theRowLower: number, theRowUpper: number, theColLower: number, theColUpper: number, theToCopyData: boolean): void;\r
}\r
/**\r
 * 表示贝塞尔曲线\r
 */\r
/**\r
 * 表示贝塞尔曲线\r
 */\r
export declare class MdGeBezierCurve extends MdGeObject {\r
	constructor(p1?: MdGeArray1OfPnt | object, p2?: MdGeArray1OfReal);\r
	Increase(Degree: number): void;\r
	InsertPoleAfter(p1: number, p2: MdGePoint, p3?: number): void;\r
	InsertPoleBefore(p1: number, p2: MdGePoint, p3?: number): void;\r
	RemovePole(Index: number): void;\r
	Reverse(): void;\r
	ReversedParameter(U: number): number;\r
	Segment(U1: number, U2: number): void;\r
	SetPole(p1: number, p2: MdGePoint, p3?: number): void;\r
	SetWeight(Index: number, Weight: number): void;\r
	IsClosed(): boolean;\r
	IsCN(N: number): boolean;\r
	IsPeriodic(): boolean;\r
	IsRational(): boolean;\r
	Continuity(): MdGe.MxGAShapeEnum;\r
	Degree(): number;\r
	DN(U: number, N: number): MdGeVec;\r
	StartPoint(): MdGePoint;\r
	EndPoint(): MdGePoint;\r
	FirstParameter(): number;\r
	LastParameter(): number;\r
	NbPoles(): number;\r
	Pole(Index: number): MdGePoint;\r
	Poles(): MdGeArray1OfPnt;\r
	Weight(Index: number): number;\r
	Weights(): MdGeArray1OfReal;\r
	Transform(T: MdGeTrsf): void;\r
	static MaxDegree(): number;\r
	Shape(): MdGeShape;\r
	Edge(): MdGeEdge;\r
	Wire(): MdGeWire;\r
}\r
/**\r
 * 表示贝塞尔曲面\r
 */\r
/**\r
 * 表示贝塞尔曲面\r
 */\r
export declare class MdGeBezierSurface extends MdGeObject {\r
	constructor(p1?: MdGeArray2OfPnt | object, p2?: MdGeArray2OfReal);\r
	ExchangeUV(): void;\r
	Increase(UDeg: number, VDeg: number): void;\r
	InsertPoleColAfter(p1: number, p2: MdGeArray1OfPnt, p3?: MdGeArray1OfReal): void;\r
	InsertPoleColBefore(p1: number, p2: MdGeArray1OfPnt, p3?: MdGeArray1OfReal): void;\r
	InsertPoleRowAfter(p1: number, p2: MdGeArray1OfPnt, p3?: MdGeArray1OfReal): void;\r
	InsertPoleRowBefore(p1: number, p2: MdGeArray1OfPnt, p3?: MdGeArray1OfReal): void;\r
	RemovePoleCol(VIndex: number): void;\r
	RemovePoleRow(UIndex: number): void;\r
	Segment(U1: number, U2: number, V1: number, V2: number): void;\r
	SetPole(p1: number, p2: number, p3: MdGePoint, p4?: number): void;\r
	SetPoleCol(p1: number, p2: MdGeArray1OfPnt, p3?: MdGeArray1OfReal): void;\r
	SetPoleRow(p1: number, p2: MdGeArray1OfPnt, p3?: MdGeArray1OfReal): void;\r
	SetWeight(UIndex: number, VIndex: number, Weight: number): void;\r
	SetWeightCol(VIndex: number, CPoleWeights: MdGeArray1OfReal): void;\r
	SetWeightRow(UIndex: number, CPoleWeights: MdGeArray1OfReal): void;\r
	UReverse(): void;\r
	UReversedParameter(U: number): number;\r
	VReverse(): void;\r
	VReversedParameter(V: number): number;\r
	Continuity(): MdGe.MxGAShapeEnum;\r
	DN(U: number, V: number, Nu: number, Nv: number): MdGeVec;\r
	NbUPoles(): number;\r
	NbVPoles(): number;\r
	Pole(UIndex: number, VIndex: number): MdGePoint;\r
	Poles(): MdGeArray2OfPnt;\r
	UDegree(): number;\r
	VDegree(): number;\r
	Weight(UIndex: number, VIndex: number): number;\r
	Weights(): MdGeArray2OfReal;\r
	IsUClosed(): boolean;\r
	IsVClosed(): boolean;\r
	IsCNu(N: number): boolean;\r
	IsCNv(N: number): boolean;\r
	IsUPeriodic(): boolean;\r
	IsVPeriodic(): boolean;\r
	IsURational(): boolean;\r
	IsVRational(): boolean;\r
	Transform(T: MdGeTrsf): void;\r
	static MaxDegree(): number;\r
	Shape(): MdGeShape;\r
	Face(): MdGeFace;\r
}\r
/**\r
 * 表示倒斜角\r
 */\r
/**\r
 * 表示倒斜角\r
 */\r
export declare class MdGeChamfer extends MdGeObject {\r
	constructor(p?: MdGeShape | object);\r
	Add(p1: MdGeEdge | number, p2?: MdGeEdge | number, p3?: MdGeEdge, p4?: MdGeFace): void;\r
	SetDist(Dis: number, IC: number, F: MdGeFace): void;\r
	GetDist(IC: number, Dis: number): void;\r
	SetDists(Dis1: number, Dis2: number, IC: number, F: MdGeFace): void;\r
	Dists(IC: number, Dis1: number, Dis2: number): void;\r
	AddDA(Dis: number, Angle: number, E: MdGeEdge, F: MdGeFace): void;\r
	SetDistAngle(Dis: number, Angle: number, IC: number, F: MdGeFace): void;\r
	GetDistAngle(IC: number, Dis: number, Angle: number): void;\r
	SetMode(theMode: MdGe.MxCFDSChamfMode): void;\r
	IsSymetric(IC: number): boolean;\r
	IsTwoDistances(IC: number): boolean;\r
	IsDistanceAngle(IC: number): boolean;\r
	ResetContour(IC: number): void;\r
	NbContours(): number;\r
	Contour(E: MdGeEdge): number;\r
	NbEdges(I: number): number;\r
	Edge(I: number, J: number): MdGeEdge;\r
	Remove(E: MdGeEdge): void;\r
	Length(IC: number): number;\r
	FirstVertex(IC: number): MdGeVertex;\r
	LastVertex(IC: number): MdGeVertex;\r
	Abscissa(IC: number, V: MdGeVertex): number;\r
	RelativeAbscissa(IC: number, V: MdGeVertex): number;\r
	ClosedAndTangent(IC: number): boolean;\r
	Closed(IC: number): boolean;\r
	Reset(): void;\r
	Simulate(IC: number): void;\r
	NbSurf(IC: number): number;\r
	Shape(): MdGeShape;\r
}\r
/**\r
 * 表示一个圆\r
 */\r
/**\r
 * 表示一个圆。\r
 */\r
export declare class MdGeCircle extends MdGeObject {\r
	constructor(p1?: MdGeCSYSR | object, p2?: number);\r
	SetAxis(theA1: MdGeAxis): void;\r
	SetLocation(theP: MdGePoint): void;\r
	SetPosition(theA2: MdGeCSYSR): void;\r
	SetRadius(theRadius: number): void;\r
	Area(): number;\r
	Axis(): MdGeAxis;\r
	Length(): number;\r
	Location(): MdGePoint;\r
	Position(): MdGeCSYSR;\r
	Radius(): number;\r
	XAxis(): MdGeAxis;\r
	YAxis(): MdGeAxis;\r
	Distance(theP: MdGePoint): number;\r
	SquareDistance(theP: MdGePoint): number;\r
	Contains(theP: MdGePoint, theLinearTolerance: number): boolean;\r
	MirrorByPoint(theP: MdGePoint): void;\r
	MirroredByPoint(theP: MdGePoint): MdGeCircle;\r
	MirrorByAxis(theA1: MdGeAxis): void;\r
	MirroredByAxis(theA1: MdGeAxis): MdGeCircle;\r
	MirrorByCSYSR(theA2: MdGeCSYSR): void;\r
	MirroredByCSYSR(theA2: MdGeCSYSR): MdGeCircle;\r
	Rotate(theA1: MdGeAxis, theAng: number): void;\r
	Rotated(theA1: MdGeAxis, theAng: number): MdGeCircle;\r
	Scale(theP: MdGePoint, theS: number): void;\r
	Scaled(theP: MdGePoint, theS: number): MdGeCircle;\r
	Transform(theT: MdGeTrsf): void;\r
	Transformed(theT: MdGeTrsf): MdGeCircle;\r
	TranslateByVec(theV: MdGeVec): void;\r
	TranslatedByVec(theV: MdGeVec): MdGeCircle;\r
	TranslateBy2Points(theP1: MdGePoint, theP2: MdGePoint): void;\r
	TranslatedBy2Points(theP1: MdGePoint, theP2: MdGePoint): MdGeCircle;\r
	Shape(): MdGeShape;\r
	Edge(p1?: number, p2?: number): MdGeEdge;\r
	Wire(): MdGeWire;\r
}\r
/**\r
 * 表示一个坐标系（左手或右手）\r
 */\r
/**\r
 * 表示一个坐标系（左手或右手）\r
 */\r
export declare class MdGeCSYS extends MdGeObject {\r
	constructor(p1?: MdGePoint | object, p2?: MdGeDir, p3?: MdGeDir);\r
	XReverse(): void;\r
	YReverse(): void;\r
	ZReverse(): void;\r
	SetZAxis(z_axis: MdGeAxis): void;\r
	SetZDirection(z_dir: MdGeDir): void;\r
	SetOrigin(p1: MdGePoint | number, p2?: number, p3?: number): void;\r
	SetXDirection(x_dir: MdGeDir): void;\r
	SetYDirection(y_dir: MdGeDir): void;\r
	Angle(other: MdGeCSYS): number;\r
	ZAxis(): MdGeAxis;\r
	CSYSR(): MdGeCSYSR;\r
	ZDirection(): MdGeDir;\r
	Origin(): MdGePoint;\r
	XDirection(): MdGeDir;\r
	YDirection(): MdGeDir;\r
	Direct(): boolean;\r
	IsCoplanarWithCSYS(other: MdGeCSYS, linearTolerance: number, angularTolerance: number): boolean;\r
	IsCoplanarWithAxis(axis: MdGeAxis, linearTolerance: number, angularTolerance: number): boolean;\r
	MirrorByPoint(point: MdGePoint): void;\r
	MirroredByPoint(point: MdGePoint): MdGeCSYS;\r
	MirrorByAxis(axis: MdGeAxis): void;\r
	MirroredByAxis(axis: MdGeAxis): MdGeCSYS;\r
	MirrorByCSYSR(csysr: MdGeCSYSR): void;\r
	MirroredByCSYSR(csysr: MdGeCSYSR): MdGeCSYS;\r
	Rotate(axis: MdGeAxis, ang: number): void;\r
	Rotated(axis: MdGeAxis, ang: number): MdGeCSYS;\r
	Scale(point: MdGePoint, s: number): void;\r
	Scaled(point: MdGePoint, s: number): MdGeCSYS;\r
	Transform(t: MdGeTrsf): void;\r
	Transformed(t: MdGeTrsf): MdGeCSYS;\r
	TranslateByVec(vec: MdGeVec): void;\r
	TranslatedByVec(vec: MdGeVec): MdGeCSYS;\r
	TranslateBy2Points(point1: MdGePoint, point2: MdGePoint): void;\r
	TranslatedBy2Points(point1: MdGePoint, point2: MdGePoint): MdGeCSYS;\r
}\r
/**\r
 * 表示一个圆锥\r
 */\r
/**\r
 * 表示一个圆锥\r
 */\r
export declare class MdGeCone extends MdGeObject {\r
	constructor(p1?: MdGeCSYS | object, p2?: number, p3?: number);\r
	SetAxis(theA1: MdGeAxis): void;\r
	SetLocation(theLoc: MdGePoint): void;\r
	SetPosition(theA3: MdGeCSYS): void;\r
	SetRadius(theR: number): void;\r
	SetSemiAngle(theAng: number): void;\r
	Apex(): MdGePoint;\r
	UReverse(): void;\r
	VReverse(): void;\r
	Direct(): boolean;\r
	Axis(): MdGeAxis;\r
	Location(): MdGePoint;\r
	Position(): MdGeCSYS;\r
	RefRadius(): number;\r
	SemiAngle(): number;\r
	XAxis(): MdGeAxis;\r
	YAxis(): MdGeAxis;\r
	MirrorByPoint(theP: MdGePoint): void;\r
	MirroredByPoint(theP: MdGePoint): MdGeCone;\r
	MirrorByAxis(theA1: MdGeAxis): void;\r
	MirroredByAxis(theA1: MdGeAxis): MdGeCone;\r
	MirrorByCSYSR(theA2: MdGeCSYSR): void;\r
	MirroredByCSYSR(theA2: MdGeCSYSR): MdGeCone;\r
	Rotate(theA1: MdGeAxis, theAng: number): void;\r
	Rotated(theA1: MdGeAxis, theAng: number): MdGeCone;\r
	Scale(theP: MdGePoint, theS: number): void;\r
	Scaled(theP: MdGePoint, theS: number): MdGeCone;\r
	Transform(theT: MdGeTrsf): void;\r
	Transformed(theT: MdGeTrsf): MdGeCone;\r
	TranslateByVec(theV: MdGeVec): void;\r
	TranslatedByVec(theV: MdGeVec): MdGeCone;\r
	TranslateBy2Points(theP1: MdGePoint, theP2: MdGePoint): void;\r
	TranslatedBy2Points(theP1: MdGePoint, theP2: MdGePoint): MdGeCone;\r
	Shape(H: number, Angle?: number): MdGeShape;\r
	Face(p1?: number | MdGeWire, p2?: number | boolean, p3?: number, p4?: number): MdGeFace;\r
}\r
/**\r
 * 表示一个圆柱\r
 */\r
/**\r
 * 表示一个圆柱。\r
 */\r
export declare class MdGeCylinder extends MdGeObject {\r
	constructor(p1?: MdGeCSYS | object, p2?: number);\r
	SetAxis(theA1: MdGeAxis): void;\r
	SetLocation(theLoc: MdGePoint): void;\r
	SetPosition(theA3: MdGeCSYS): void;\r
	SetRadius(theR: number): void;\r
	UReverse(): void;\r
	VReverse(): void;\r
	Direct(): boolean;\r
	Axis(): MdGeAxis;\r
	Location(): MdGePoint;\r
	Position(): MdGeCSYS;\r
	Radius(): number;\r
	XAxis(): MdGeAxis;\r
	YAxis(): MdGeAxis;\r
	MirrorByPoint(theP: MdGePoint): void;\r
	MirroredByPoint(theP: MdGePoint): MdGeCylinder;\r
	MirrorByAxis(theA1: MdGeAxis): void;\r
	MirroredByAxis(theA1: MdGeAxis): MdGeCylinder;\r
	MirrorByCSYSR(theA2: MdGeCSYSR): void;\r
	MirroredByCSYSR(theA2: MdGeCSYSR): MdGeCylinder;\r
	Rotate(theA1: MdGeAxis, theAng: number): void;\r
	Rotated(theA1: MdGeAxis, theAng: number): MdGeCylinder;\r
	Scale(theP: MdGePoint, theS: number): void;\r
	Scaled(theP: MdGePoint, theS: number): MdGeCylinder;\r
	Transform(theT: MdGeTrsf): void;\r
	Transformed(theT: MdGeTrsf): MdGeCylinder;\r
	TranslateByVec(theV: MdGeVec): void;\r
	TranslatedByVec(theV: MdGeVec): MdGeCylinder;\r
	TranslateBy2Points(theP1: MdGePoint, theP2: MdGePoint): void;\r
	TranslatedBy2Points(theP1: MdGePoint, theP2: MdGePoint): MdGeCylinder;\r
	Shape(H: number, Angle?: number): MdGeShape;\r
	Face(p1?: MdGeWire | number, p2?: boolean | number, p3?: number, p4?: number): MdGeFace;\r
}\r
/**\r
 * 表示一个平面\r
 */\r
/**\r
 * 表示一个平面\r
 */\r
export declare class MdGePlane extends MdGeObject {\r
	constructor(p1?: MdGeCSYS | MdGePoint | number | object, p2?: MdGeDir | number, p3?: number, p4?: number);\r
	SetAxis(theA1: MdGeAxis): void;\r
	SetLocation(theLoc: MdGePoint): void;\r
	SetPosition(theA3: MdGeCSYS): void;\r
	UReverse(): void;\r
	VReverse(): void;\r
	Direct(): boolean;\r
	Axis(): MdGeAxis;\r
	Location(): MdGePoint;\r
	Position(): MdGeCSYS;\r
	DistanceToPoint(theP: MdGePoint): number;\r
	DistanceToPlane(theOther: MdGePlane): number;\r
	SquareDistanceToPoint(theP: MdGePoint): number;\r
	SquareDistanceToPlane(theOther: MdGePlane): number;\r
	XAxis(): MdGeAxis;\r
	YAxis(): MdGeAxis;\r
	Contains(theP: MdGePoint, theLinearTolerance: number): boolean;\r
	MirrorByPoint(theP: MdGePoint): void;\r
	MirroredByPoint(theP: MdGePoint): MdGePlane;\r
	MirrorByAxis(theA1: MdGeAxis): void;\r
	MirroredByAxis(theA1: MdGeAxis): MdGePlane;\r
	MirrorByCSYSR(theA2: MdGeCSYSR): void;\r
	MirroredByCSYSR(theA2: MdGeCSYSR): MdGePlane;\r
	Rotate(theA1: MdGeAxis, theAng: number): void;\r
	Rotated(theA1: MdGeAxis, theAng: number): MdGePlane;\r
	Scale(theP: MdGePoint, theS: number): void;\r
	Scaled(theP: MdGePoint, theS: number): MdGePlane;\r
	Transform(theT: MdGeTrsf): void;\r
	Transformed(theT: MdGeTrsf): MdGePlane;\r
	TranslateByVec(theV: MdGeVec): void;\r
	TranslatedByVec(theV: MdGeVec): MdGePlane;\r
	TranslateBy2Points(theP1: MdGePoint, theP2: MdGePoint): void;\r
	TranslatedBy2Points(theP1: MdGePoint, theP2: MdGePoint): MdGePlane;\r
	Face(p1?: MdGeWire | number, p2?: boolean | number, p3?: number, p4?: number): MdGeFace;\r
}\r
/**\r
 * 表示直径标注\r
 */\r
/**\r
 * 表示直径标注\r
 */\r
export declare class MdGeDiameterDim extends MdGeObject {\r
	constructor(p1?: MdGeCircle | object, p2?: MdGePlane);\r
	Circle(): MdGeCircle;\r
	AnchorPoint(): MdGePoint;\r
	Shape(): MdGeShape;\r
	SetMeasuredGeometry(theCircle: MdGeCircle): void;\r
	SetTextPosition(theTextPos: MdGePoint): void;\r
	GetTextPosition(): MdGePoint;\r
	SetDisplayUnits(theUnits: string): void;\r
	SetModelUnits(theUnits: string): void;\r
	GetValue(): number;\r
	SetComputedValue(): void;\r
	SetCustomValue(theValue: number): void;\r
	GetPlane(): MdGePlane;\r
	GetGeometryType(): number;\r
	SetCustomPlane(thePlane: MdGePlane): void;\r
	UnsetCustomPlane(): void;\r
	IsTextPositionCustom(): boolean;\r
	DimensionAspect(): MdGeDimAspect;\r
	SetDimensionAspect(theDimensionAspect: MdGeDimAspect): void;\r
	KindOfDimension(): MdGe.MxKindOfDimension;\r
	AcceptDisplayMode(theMode: number): boolean;\r
	UnsetFixedTextPosition(): void;\r
	SelToleranceForText2d(): number;\r
	SetSelToleranceForText2d(theTol: number): void;\r
	GetFlyout(): number;\r
	SetFlyout(theFlyout: number): void;\r
	IsValid(): boolean;\r
	Display(): void;\r
}\r
/**\r
 * 表示一个椭圆\r
 */\r
/**\r
 * 表示一个椭圆\r
 */\r
export declare class MdGeEllipse extends MdGeObject {\r
	constructor(p1?: MdGeCSYSR | object, p2?: number, p3?: number);\r
	SetAxis(theA1: MdGeAxis): void;\r
	SetLocation(theP: MdGePoint): void;\r
	SetMajorRadius(theMajorRadius: number): void;\r
	SetMinorRadius(theMinorRadius: number): void;\r
	SetPosition(theA2: MdGeCSYSR): void;\r
	Area(): number;\r
	Axis(): MdGeAxis;\r
	Directrix1(): MdGeAxis;\r
	Directrix2(): MdGeAxis;\r
	Eccentricity(): number;\r
	Focal(): number;\r
	Focus1(): MdGePoint;\r
	Focus2(): MdGePoint;\r
	Location(): MdGePoint;\r
	MajorRadius(): number;\r
	MinorRadius(): number;\r
	Parameter(): number;\r
	Position(): MdGeCSYSR;\r
	XAxis(): MdGeAxis;\r
	YAxis(): MdGeAxis;\r
	MirrorByPoint(theP: MdGePoint): void;\r
	MirroredByPoint(theP: MdGePoint): MdGeEllipse;\r
	MirrorByAxis(theA1: MdGeAxis): void;\r
	MirroredByAxis(theA1: MdGeAxis): MdGeEllipse;\r
	MirrorByCSYSR(theA2: MdGeCSYSR): void;\r
	MirroredByCSYSR(theA2: MdGeCSYSR): MdGeEllipse;\r
	Rotate(theA1: MdGeAxis, theAng: number): void;\r
	Rotated(theA1: MdGeAxis, theAng: number): MdGeEllipse;\r
	Scale(theP: MdGePoint, theS: number): void;\r
	Scaled(theP: MdGePoint, theS: number): MdGeEllipse;\r
	Transform(theT: MdGeTrsf): void;\r
	Transformed(theT: MdGeTrsf): MdGeEllipse;\r
	Shape(): MdGeShape;\r
	Wire(): MdGeWire;\r
	Edge(p1?: number, p2?: number): MdGeEdge;\r
}\r
export declare namespace MdGe {\r
	enum MxShapeEnum {\r
		Enum_COMPOUND = 0,\r
		Enum_COMPSOLID = 1,\r
		Enum_SOLID = 2,\r
		Enum_SHELL = 3,\r
		Enum_FACE = 4,\r
		Enum_WIRE = 5,\r
		Enum_EDGE = 6,\r
		Enum_VERTEX = 7,\r
		Enum_SHAPE = 8\r
	}\r
	enum MxHorizontalTextAlignment {\r
		HTA_LEFT = 0,\r
		HTA_CENTER = 1,\r
		HTA_RIGHT = 2\r
	}\r
	enum MxVerticalTextAlignment {\r
		CVTA_BOTTOM = 0,\r
		CVTA_CENTER = 1,\r
		CVTA_TOP = 2,\r
		CVTA_TOPFIRSTLINE = 3\r
	}\r
	enum MxFontAspect {\r
		FA_UNDEFINED = -1,\r
		FA_Regular = 0,\r
		FA_Bold = 1,\r
		FA_Italic = 2,\r
		FA_BoldItalic = 3\r
	}\r
	enum MxTypeOfDisplayText {\r
		TODT_NORMAL = 0,\r
		TODT_SUBTITLE = 1,\r
		TODT_DEKALE = 2,\r
		TODT_BLEND = 3,\r
		TODT_DIMENSION = 4,\r
		TODT_SHADOW = 5\r
	}\r
	enum MxCF3dFilletShapeEnum {\r
		Enum_Rational = 0,\r
		Enum_QuasiAngular = 1,\r
		Enum_Polynomial = 2\r
	}\r
	enum MxCFDSChamfMode {\r
		Enum_ClassicChamfer = 0,\r
		Enum_ConstThroatChamfer = 1,\r
		Enum_ConstThroatWithPenetrationChamfer = 2\r
	}\r
	enum MxGFTrihedron {\r
		GF_IsCorrectedFrenet = 0,\r
		GF_IsFixed = 1,\r
		GF_IsFrenet = 2,\r
		GF_IsConstantNormal = 3,\r
		GF_IsDarboux = 4,\r
		GF_IsGuideAC = 5,\r
		GF_IsGuidePlan = 6,\r
		GF_IsGuideACWithContact = 7,\r
		GF_IsGuidePlanWithContact = 8,\r
		GF_IsDiscreteTrihedron = 9\r
	}\r
	enum MxGAShapeEnum {\r
		GA_C0 = 0,\r
		GA_G1 = 1,\r
		GA_C1 = 2,\r
		GA_G2 = 3,\r
		GA_C2 = 4,\r
		GA_C3 = 5,\r
		GA_CN = 6\r
	}\r
	enum MxOffsetModeEnum {\r
		Offset_Skin = 0,\r
		Offset_Pipe = 1,\r
		Offset_RectoVerso = 2\r
	}\r
	enum MxGAJoinTypeEnum {\r
		GA_Arc = 0,\r
		GA_Tangent = 1,\r
		GA_Intersection = 2\r
	}\r
	enum MxNameOfMaterial {\r
		Material_NOM_Brass = 0,\r
		Material_NOM_Bronze = 1,\r
		Material_NOM_Copper = 2,\r
		Material_NOM_Gold = 3,\r
		Material_NOM_Pewter = 4,\r
		Material_NOM_Plastered = 5,\r
		Material_NOM_Plastified = 6,\r
		Material_NOM_Silver = 7,\r
		Material_NOM_Steel = 8,\r
		Material_NOM_Stone = 9,\r
		Material_NOM_ShinyPlastified = 10,\r
		Material_NOM_Satin = 11,\r
		Material_NOM_Metalized = 12,\r
		Material_NOM_Ionized = 13,\r
		Material_NOM_Chrome = 14,\r
		Material_NOM_Aluminum = 15,\r
		Material_NOM_Obsidian = 16,\r
		Material_NOM_Neon = 17,\r
		Material_NOM_Jade = 18,\r
		Material_NOM_Charcoal = 19,\r
		Material_NOM_Water = 20,\r
		Material_NOM_Glass = 21,\r
		Material_NOM_Diamond = 22,\r
		Material_NOM_Transparent = 23,\r
		Material_NOM_DEFAULT = 24,\r
		Material_NOM_UserDefined = 25\r
	}\r
	enum MxTypeOfMaterial {\r
		Material_TOM_ASPECT = 0,\r
		Material_TOM_PHYSIC = 1\r
	}\r
	enum MxTypeOfReflection {\r
		Reflection_TOR_AMBIENT = 0,\r
		Reflection_TOR_DIFFUSE = 1,\r
		Reflection_TOR_SPECULAR = 2,\r
		Reflection_TOR_EMISSION = 3\r
	}\r
	enum MxNameOfColor {\r
		Color_NOC_BLACK = 0,\r
		Color_NOC_MATRABLUE = 1,\r
		Color_NOC_MATRAGRAY = 2,\r
		Color_NOC_ALICEBLUE = 3,\r
		Color_NOC_ANTIQUEWHITE = 4,\r
		Color_NOC_ANTIQUEWHITE1 = 5,\r
		Color_NOC_ANTIQUEWHITE2 = 6,\r
		Color_NOC_ANTIQUEWHITE3 = 7,\r
		Color_NOC_ANTIQUEWHITE4 = 8,\r
		Color_NOC_AQUAMARINE1 = 9,\r
		Color_NOC_AQUAMARINE2 = 10,\r
		Color_NOC_AQUAMARINE4 = 11,\r
		Color_NOC_AZURE = 12,\r
		Color_NOC_AZURE2 = 13,\r
		Color_NOC_AZURE3 = 14,\r
		Color_NOC_AZURE4 = 15,\r
		Color_NOC_BEIGE = 16,\r
		Color_NOC_BISQUE = 17,\r
		Color_NOC_BISQUE2 = 18,\r
		Color_NOC_BISQUE3 = 19,\r
		Color_NOC_BISQUE4 = 20,\r
		Color_NOC_BLANCHEDALMOND = 21,\r
		Color_NOC_BLUE = 22,\r
		Color_NOC_BLUE1 = 22,\r
		Color_NOC_BLUE2 = 23,\r
		Color_NOC_BLUE3 = 24,\r
		Color_NOC_BLUE4 = 25,\r
		Color_NOC_BLUEVIOLET = 26,\r
		Color_NOC_BROWN = 27,\r
		Color_NOC_BROWN1 = 28,\r
		Color_NOC_BROWN2 = 29,\r
		Color_NOC_BROWN3 = 30,\r
		Color_NOC_BROWN4 = 31,\r
		Color_NOC_BURLYWOOD = 32,\r
		Color_NOC_BURLYWOOD1 = 33,\r
		Color_NOC_BURLYWOOD2 = 34,\r
		Color_NOC_BURLYWOOD3 = 35,\r
		Color_NOC_BURLYWOOD4 = 36,\r
		Color_NOC_CADETBLUE = 37,\r
		Color_NOC_CADETBLUE1 = 38,\r
		Color_NOC_CADETBLUE2 = 39,\r
		Color_NOC_CADETBLUE3 = 40,\r
		Color_NOC_CADETBLUE4 = 41,\r
		Color_NOC_CHARTREUSE = 42,\r
		Color_NOC_CHARTREUSE1 = 42,\r
		Color_NOC_CHARTREUSE2 = 43,\r
		Color_NOC_CHARTREUSE3 = 44,\r
		Color_NOC_CHARTREUSE4 = 45,\r
		Color_NOC_CHOCOLATE = 46,\r
		Color_NOC_CHOCOLATE1 = 47,\r
		Color_NOC_CHOCOLATE2 = 48,\r
		Color_NOC_CHOCOLATE3 = 49,\r
		Color_NOC_CHOCOLATE4 = 50,\r
		Color_NOC_CORAL = 51,\r
		Color_NOC_CORAL1 = 52,\r
		Color_NOC_CORAL2 = 53,\r
		Color_NOC_CORAL3 = 54,\r
		Color_NOC_CORAL4 = 55,\r
		Color_NOC_CORNFLOWERBLUE = 56,\r
		Color_NOC_CORNSILK1 = 57,\r
		Color_NOC_CORNSILK2 = 58,\r
		Color_NOC_CORNSILK3 = 59,\r
		Color_NOC_CORNSILK4 = 60,\r
		Color_NOC_CYAN = 61,\r
		Color_NOC_CYAN1 = 61,\r
		Color_NOC_CYAN2 = 62,\r
		Color_NOC_CYAN3 = 63,\r
		Color_NOC_CYAN4 = 64,\r
		Color_NOC_DARKGOLDENROD = 65,\r
		Color_NOC_DARKGOLDENROD1 = 66,\r
		Color_NOC_DARKGOLDENROD2 = 67,\r
		Color_NOC_DARKGOLDENROD3 = 68,\r
		Color_NOC_DARKGOLDENROD4 = 69,\r
		Color_NOC_DARKGREEN = 70,\r
		Color_NOC_DARKKHAKI = 71,\r
		Color_NOC_DARKOLIVEGREEN = 72,\r
		Color_NOC_DARKOLIVEGREEN1 = 73,\r
		Color_NOC_DARKOLIVEGREEN2 = 74,\r
		Color_NOC_DARKOLIVEGREEN3 = 75,\r
		Color_NOC_DARKOLIVEGREEN4 = 76,\r
		Color_NOC_DARKORANGE = 77,\r
		Color_NOC_DARKORANGE1 = 78,\r
		Color_NOC_DARKORANGE2 = 79,\r
		Color_NOC_DARKORANGE3 = 80,\r
		Color_NOC_DARKORANGE4 = 81,\r
		Color_NOC_DARKORCHID = 82,\r
		Color_NOC_DARKORCHID1 = 83,\r
		Color_NOC_DARKORCHID2 = 84,\r
		Color_NOC_DARKORCHID3 = 85,\r
		Color_NOC_DARKORCHID4 = 86,\r
		Color_NOC_DARKSALMON = 87,\r
		Color_NOC_DARKSEAGREEN = 88,\r
		Color_NOC_DARKSEAGREEN1 = 89,\r
		Color_NOC_DARKSEAGREEN2 = 90,\r
		Color_NOC_DARKSEAGREEN3 = 91,\r
		Color_NOC_DARKSEAGREEN4 = 92,\r
		Color_NOC_DARKSLATEBLUE = 93,\r
		Color_NOC_DARKSLATEGRAY1 = 94,\r
		Color_NOC_DARKSLATEGRAY2 = 95,\r
		Color_NOC_DARKSLATEGRAY3 = 96,\r
		Color_NOC_DARKSLATEGRAY4 = 97,\r
		Color_NOC_DARKSLATEGRAY = 98,\r
		Color_NOC_DARKTURQUOISE = 99,\r
		Color_NOC_DARKVIOLET = 100,\r
		Color_NOC_DEEPPINK = 101,\r
		Color_NOC_DEEPPINK2 = 102,\r
		Color_NOC_DEEPPINK3 = 103,\r
		Color_NOC_DEEPPINK4 = 104,\r
		Color_NOC_DEEPSKYBLUE1 = 105,\r
		Color_NOC_DEEPSKYBLUE2 = 106,\r
		Color_NOC_DEEPSKYBLUE3 = 107,\r
		Color_NOC_DEEPSKYBLUE4 = 108,\r
		Color_NOC_DODGERBLUE1 = 109,\r
		Color_NOC_DODGERBLUE2 = 110,\r
		Color_NOC_DODGERBLUE3 = 111,\r
		Color_NOC_DODGERBLUE4 = 112,\r
		Color_NOC_FIREBRICK = 113,\r
		Color_NOC_FIREBRICK1 = 114,\r
		Color_NOC_FIREBRICK2 = 115,\r
		Color_NOC_FIREBRICK3 = 116,\r
		Color_NOC_FIREBRICK4 = 117,\r
		Color_NOC_FLORALWHITE = 118,\r
		Color_NOC_FORESTGREEN = 119,\r
		Color_NOC_GAINSBORO = 120,\r
		Color_NOC_GHOSTWHITE = 121,\r
		Color_NOC_GOLD = 122,\r
		Color_NOC_GOLD1 = 122,\r
		Color_NOC_GOLD2 = 123,\r
		Color_NOC_GOLD3 = 124,\r
		Color_NOC_GOLD4 = 125,\r
		Color_NOC_GOLDENROD = 126,\r
		Color_NOC_GOLDENROD1 = 127,\r
		Color_NOC_GOLDENROD2 = 128,\r
		Color_NOC_GOLDENROD3 = 129,\r
		Color_NOC_GOLDENROD4 = 130,\r
		Color_NOC_GRAY = 131,\r
		Color_NOC_GRAY0 = 132,\r
		Color_NOC_GRAY1 = 133,\r
		Color_NOC_GRAY2 = 134,\r
		Color_NOC_GRAY3 = 135,\r
		Color_NOC_GRAY4 = 136,\r
		Color_NOC_GRAY5 = 137,\r
		Color_NOC_GRAY6 = 138,\r
		Color_NOC_GRAY7 = 139,\r
		Color_NOC_GRAY8 = 140,\r
		Color_NOC_GRAY9 = 141,\r
		Color_NOC_GRAY10 = 142,\r
		Color_NOC_GRAY11 = 143,\r
		Color_NOC_GRAY12 = 144,\r
		Color_NOC_GRAY13 = 145,\r
		Color_NOC_GRAY14 = 146,\r
		Color_NOC_GRAY15 = 147,\r
		Color_NOC_GRAY16 = 148,\r
		Color_NOC_GRAY17 = 149,\r
		Color_NOC_GRAY18 = 150,\r
		Color_NOC_GRAY19 = 151,\r
		Color_NOC_GRAY20 = 152,\r
		Color_NOC_GRAY21 = 153,\r
		Color_NOC_GRAY22 = 154,\r
		Color_NOC_GRAY23 = 155,\r
		Color_NOC_GRAY24 = 156,\r
		Color_NOC_GRAY25 = 157,\r
		Color_NOC_GRAY26 = 158,\r
		Color_NOC_GRAY27 = 159,\r
		Color_NOC_GRAY28 = 160,\r
		Color_NOC_GRAY29 = 161,\r
		Color_NOC_GRAY30 = 162,\r
		Color_NOC_GRAY31 = 163,\r
		Color_NOC_GRAY32 = 164,\r
		Color_NOC_GRAY33 = 165,\r
		Color_NOC_GRAY34 = 166,\r
		Color_NOC_GRAY35 = 167,\r
		Color_NOC_GRAY36 = 168,\r
		Color_NOC_GRAY37 = 169,\r
		Color_NOC_GRAY38 = 170,\r
		Color_NOC_GRAY39 = 171,\r
		Color_NOC_GRAY40 = 172,\r
		Color_NOC_GRAY41 = 173,\r
		Color_NOC_GRAY42 = 174,\r
		Color_NOC_GRAY43 = 175,\r
		Color_NOC_GRAY44 = 176,\r
		Color_NOC_GRAY45 = 177,\r
		Color_NOC_GRAY46 = 178,\r
		Color_NOC_GRAY47 = 179,\r
		Color_NOC_GRAY48 = 180,\r
		Color_NOC_GRAY49 = 181,\r
		Color_NOC_GRAY50 = 182,\r
		Color_NOC_GRAY51 = 183,\r
		Color_NOC_GRAY52 = 184,\r
		Color_NOC_GRAY53 = 185,\r
		Color_NOC_GRAY54 = 186,\r
		Color_NOC_GRAY55 = 187,\r
		Color_NOC_GRAY56 = 188,\r
		Color_NOC_GRAY57 = 189,\r
		Color_NOC_GRAY58 = 190,\r
		Color_NOC_GRAY59 = 191,\r
		Color_NOC_GRAY60 = 192,\r
		Color_NOC_GRAY61 = 193,\r
		Color_NOC_GRAY62 = 194,\r
		Color_NOC_GRAY63 = 195,\r
		Color_NOC_GRAY64 = 196,\r
		Color_NOC_GRAY65 = 197,\r
		Color_NOC_GRAY66 = 198,\r
		Color_NOC_GRAY67 = 199,\r
		Color_NOC_GRAY68 = 200,\r
		Color_NOC_GRAY69 = 201,\r
		Color_NOC_GRAY70 = 202,\r
		Color_NOC_GRAY71 = 203,\r
		Color_NOC_GRAY72 = 204,\r
		Color_NOC_GRAY73 = 205,\r
		Color_NOC_GRAY74 = 206,\r
		Color_NOC_GRAY75 = 207,\r
		Color_NOC_GRAY76 = 208,\r
		Color_NOC_GRAY77 = 209,\r
		Color_NOC_GRAY78 = 210,\r
		Color_NOC_GRAY79 = 211,\r
		Color_NOC_GRAY80 = 212,\r
		Color_NOC_GRAY81 = 213,\r
		Color_NOC_GRAY82 = 214,\r
		Color_NOC_GRAY83 = 215,\r
		Color_NOC_GRAY85 = 216,\r
		Color_NOC_GRAY86 = 217,\r
		Color_NOC_GRAY87 = 218,\r
		Color_NOC_GRAY88 = 219,\r
		Color_NOC_GRAY89 = 220,\r
		Color_NOC_GRAY90 = 221,\r
		Color_NOC_GRAY91 = 222,\r
		Color_NOC_GRAY92 = 223,\r
		Color_NOC_GRAY93 = 224,\r
		Color_NOC_GRAY94 = 225,\r
		Color_NOC_GRAY95 = 226,\r
		Color_NOC_GRAY97 = 227,\r
		Color_NOC_GRAY98 = 228,\r
		Color_NOC_GRAY99 = 229,\r
		Color_NOC_GREEN = 230,\r
		Color_NOC_GREEN1 = 230,\r
		Color_NOC_GREEN2 = 231,\r
		Color_NOC_GREEN3 = 232,\r
		Color_NOC_GREEN4 = 233,\r
		Color_NOC_GREENYELLOW = 234,\r
		Color_NOC_HONEYDEW = 235,\r
		Color_NOC_HONEYDEW2 = 236,\r
		Color_NOC_HONEYDEW3 = 237,\r
		Color_NOC_HONEYDEW4 = 238,\r
		Color_NOC_HOTPINK = 239,\r
		Color_NOC_HOTPINK1 = 240,\r
		Color_NOC_HOTPINK2 = 241,\r
		Color_NOC_HOTPINK3 = 242,\r
		Color_NOC_HOTPINK4 = 243,\r
		Color_NOC_INDIANRED = 244,\r
		Color_NOC_INDIANRED1 = 245,\r
		Color_NOC_INDIANRED2 = 246,\r
		Color_NOC_INDIANRED3 = 247,\r
		Color_NOC_INDIANRED4 = 248,\r
		Color_NOC_IVORY = 249,\r
		Color_NOC_IVORY2 = 250,\r
		Color_NOC_IVORY3 = 251,\r
		Color_NOC_IVORY4 = 252,\r
		Color_NOC_KHAKI = 253,\r
		Color_NOC_KHAKI1 = 254,\r
		Color_NOC_KHAKI2 = 255,\r
		Color_NOC_KHAKI3 = 256,\r
		Color_NOC_KHAKI4 = 257,\r
		Color_NOC_LAVENDER = 258,\r
		Color_NOC_LAVENDERBLUSH1 = 259,\r
		Color_NOC_LAVENDERBLUSH2 = 260,\r
		Color_NOC_LAVENDERBLUSH3 = 261,\r
		Color_NOC_LAVENDERBLUSH4 = 262,\r
		Color_NOC_LAWNGREEN = 263,\r
		Color_NOC_LEMONCHIFFON1 = 264,\r
		Color_NOC_LEMONCHIFFON2 = 265,\r
		Color_NOC_LEMONCHIFFON3 = 266,\r
		Color_NOC_LEMONCHIFFON4 = 267,\r
		Color_NOC_LIGHTBLUE = 268,\r
		Color_NOC_LIGHTBLUE1 = 269,\r
		Color_NOC_LIGHTBLUE2 = 270,\r
		Color_NOC_LIGHTBLUE3 = 271,\r
		Color_NOC_LIGHTBLUE4 = 272,\r
		Color_NOC_LIGHTCORAL = 273,\r
		Color_NOC_LIGHTCYAN = 274,\r
		Color_NOC_LIGHTCYAN1 = 274,\r
		Color_NOC_LIGHTCYAN2 = 275,\r
		Color_NOC_LIGHTCYAN3 = 276,\r
		Color_NOC_LIGHTCYAN4 = 277,\r
		Color_NOC_LIGHTGOLDENROD = 278,\r
		Color_NOC_LIGHTGOLDENROD1 = 279,\r
		Color_NOC_LIGHTGOLDENROD2 = 280,\r
		Color_NOC_LIGHTGOLDENROD3 = 281,\r
		Color_NOC_LIGHTGOLDENROD4 = 282,\r
		Color_NOC_LIGHTGOLDENRODYELLOW = 283,\r
		Color_NOC_LIGHTGRAY = 284,\r
		Color_NOC_LIGHTPINK = 285,\r
		Color_NOC_LIGHTPINK1 = 286,\r
		Color_NOC_LIGHTPINK2 = 287,\r
		Color_NOC_LIGHTPINK3 = 288,\r
		Color_NOC_LIGHTPINK4 = 289,\r
		Color_NOC_LIGHTSALMON1 = 290,\r
		Color_NOC_LIGHTSALMON2 = 291,\r
		Color_NOC_LIGHTSALMON3 = 292,\r
		Color_NOC_LIGHTSALMON4 = 293,\r
		Color_NOC_LIGHTSEAGREEN = 294,\r
		Color_NOC_LIGHTSKYBLUE = 295,\r
		Color_NOC_LIGHTSKYBLUE1 = 296,\r
		Color_NOC_LIGHTSKYBLUE2 = 297,\r
		Color_NOC_LIGHTSKYBLUE3 = 298,\r
		Color_NOC_LIGHTSKYBLUE4 = 299,\r
		Color_NOC_LIGHTSLATEBLUE = 300,\r
		Color_NOC_LIGHTSLATEGRAY = 301,\r
		Color_NOC_LIGHTSTEELBLUE = 302,\r
		Color_NOC_LIGHTSTEELBLUE1 = 303,\r
		Color_NOC_LIGHTSTEELBLUE2 = 304,\r
		Color_NOC_LIGHTSTEELBLUE3 = 305,\r
		Color_NOC_LIGHTSTEELBLUE4 = 306,\r
		Color_NOC_LIGHTYELLOW = 307,\r
		Color_NOC_LIGHTYELLOW2 = 308,\r
		Color_NOC_LIGHTYELLOW3 = 309,\r
		Color_NOC_LIGHTYELLOW4 = 310,\r
		Color_NOC_LIMEGREEN = 311,\r
		Color_NOC_LINEN = 312,\r
		Color_NOC_MAGENTA = 313,\r
		Color_NOC_MAGENTA1 = 313,\r
		Color_NOC_MAGENTA2 = 314,\r
		Color_NOC_MAGENTA3 = 315,\r
		Color_NOC_MAGENTA4 = 316,\r
		Color_NOC_MAROON = 317,\r
		Color_NOC_MAROON1 = 318,\r
		Color_NOC_MAROON2 = 319,\r
		Color_NOC_MAROON3 = 320,\r
		Color_NOC_MAROON4 = 321,\r
		Color_NOC_MEDIUMAQUAMARINE = 322,\r
		Color_NOC_MEDIUMORCHID = 323,\r
		Color_NOC_MEDIUMORCHID1 = 324,\r
		Color_NOC_MEDIUMORCHID2 = 325,\r
		Color_NOC_MEDIUMORCHID3 = 326,\r
		Color_NOC_MEDIUMORCHID4 = 327,\r
		Color_NOC_MEDIUMPURPLE = 328,\r
		Color_NOC_MEDIUMPURPLE1 = 329,\r
		Color_NOC_MEDIUMPURPLE2 = 330,\r
		Color_NOC_MEDIUMPURPLE3 = 331,\r
		Color_NOC_MEDIUMPURPLE4 = 332,\r
		Color_NOC_MEDIUMSEAGREEN = 333,\r
		Color_NOC_MEDIUMSLATEBLUE = 334,\r
		Color_NOC_MEDIUMSPRINGGREEN = 335,\r
		Color_NOC_MEDIUMTURQUOISE = 336,\r
		Color_NOC_MEDIUMVIOLETRED = 337,\r
		Color_NOC_MIDNIGHTBLUE = 338,\r
		Color_NOC_MINTCREAM = 339,\r
		Color_NOC_MISTYROSE = 340,\r
		Color_NOC_MISTYROSE2 = 341,\r
		Color_NOC_MISTYROSE3 = 342,\r
		Color_NOC_MISTYROSE4 = 343,\r
		Color_NOC_MOCCASIN = 344,\r
		Color_NOC_NAVAJOWHITE1 = 345,\r
		Color_NOC_NAVAJOWHITE2 = 346,\r
		Color_NOC_NAVAJOWHITE3 = 347,\r
		Color_NOC_NAVAJOWHITE4 = 348,\r
		Color_NOC_NAVYBLUE = 349,\r
		Color_NOC_OLDLACE = 350,\r
		Color_NOC_OLIVEDRAB = 351,\r
		Color_NOC_OLIVEDRAB1 = 352,\r
		Color_NOC_OLIVEDRAB2 = 353,\r
		Color_NOC_OLIVEDRAB3 = 354,\r
		Color_NOC_OLIVEDRAB4 = 355,\r
		Color_NOC_ORANGE = 356,\r
		Color_NOC_ORANGE1 = 356,\r
		Color_NOC_ORANGE2 = 357,\r
		Color_NOC_ORANGE3 = 358,\r
		Color_NOC_ORANGE4 = 359,\r
		Color_NOC_ORANGERED = 360,\r
		Color_NOC_ORANGERED1 = 360,\r
		Color_NOC_ORANGERED2 = 361,\r
		Color_NOC_ORANGERED3 = 362,\r
		Color_NOC_ORANGERED4 = 363,\r
		Color_NOC_ORCHID = 364,\r
		Color_NOC_ORCHID1 = 365,\r
		Color_NOC_ORCHID2 = 366,\r
		Color_NOC_ORCHID3 = 367,\r
		Color_NOC_ORCHID4 = 368,\r
		Color_NOC_PALEGOLDENROD = 369,\r
		Color_NOC_PALEGREEN = 370,\r
		Color_NOC_PALEGREEN1 = 371,\r
		Color_NOC_PALEGREEN2 = 372,\r
		Color_NOC_PALEGREEN3 = 373,\r
		Color_NOC_PALEGREEN4 = 374,\r
		Color_NOC_PALETURQUOISE = 375,\r
		Color_NOC_PALETURQUOISE1 = 376,\r
		Color_NOC_PALETURQUOISE2 = 377,\r
		Color_NOC_PALETURQUOISE3 = 378,\r
		Color_NOC_PALETURQUOISE4 = 379,\r
		Color_NOC_PALEVIOLETRED = 380,\r
		Color_NOC_PALEVIOLETRED1 = 381,\r
		Color_NOC_PALEVIOLETRED2 = 382,\r
		Color_NOC_PALEVIOLETRED3 = 383,\r
		Color_NOC_PALEVIOLETRED4 = 384,\r
		Color_NOC_PAPAYAWHIP = 385,\r
		Color_NOC_PEACHPUFF = 386,\r
		Color_NOC_PEACHPUFF2 = 387,\r
		Color_NOC_PEACHPUFF3 = 388,\r
		Color_NOC_PEACHPUFF4 = 389,\r
		Color_NOC_PERU = 390,\r
		Color_NOC_PINK = 391,\r
		Color_NOC_PINK1 = 392,\r
		Color_NOC_PINK2 = 393,\r
		Color_NOC_PINK3 = 394,\r
		Color_NOC_PINK4 = 395,\r
		Color_NOC_PLUM = 396,\r
		Color_NOC_PLUM1 = 397,\r
		Color_NOC_PLUM2 = 398,\r
		Color_NOC_PLUM3 = 399,\r
		Color_NOC_PLUM4 = 400,\r
		Color_NOC_POWDERBLUE = 401,\r
		Color_NOC_PURPLE = 402,\r
		Color_NOC_PURPLE1 = 403,\r
		Color_NOC_PURPLE2 = 404,\r
		Color_NOC_PURPLE3 = 405,\r
		Color_NOC_PURPLE4 = 406,\r
		Color_NOC_RED = 407,\r
		Color_NOC_RED1 = 407,\r
		Color_NOC_RED2 = 408,\r
		Color_NOC_RED3 = 409,\r
		Color_NOC_RED4 = 410,\r
		Color_NOC_ROSYBROWN = 411,\r
		Color_NOC_ROSYBROWN1 = 412,\r
		Color_NOC_ROSYBROWN2 = 413,\r
		Color_NOC_ROSYBROWN3 = 414,\r
		Color_NOC_ROSYBROWN4 = 415,\r
		Color_NOC_ROYALBLUE = 416,\r
		Color_NOC_ROYALBLUE1 = 417,\r
		Color_NOC_ROYALBLUE2 = 418,\r
		Color_NOC_ROYALBLUE3 = 419,\r
		Color_NOC_ROYALBLUE4 = 420,\r
		Color_NOC_SADDLEBROWN = 421,\r
		Color_NOC_SALMON = 422,\r
		Color_NOC_SALMON1 = 423,\r
		Color_NOC_SALMON2 = 424,\r
		Color_NOC_SALMON3 = 425,\r
		Color_NOC_SALMON4 = 426,\r
		Color_NOC_SANDYBROWN = 427,\r
		Color_NOC_SEAGREEN = 428,\r
		Color_NOC_SEAGREEN1 = 429,\r
		Color_NOC_SEAGREEN2 = 430,\r
		Color_NOC_SEAGREEN3 = 431,\r
		Color_NOC_SEAGREEN4 = 432,\r
		Color_NOC_SEASHELL = 433,\r
		Color_NOC_SEASHELL2 = 434,\r
		Color_NOC_SEASHELL3 = 435,\r
		Color_NOC_SEASHELL4 = 436,\r
		Color_NOC_BEET = 437,\r
		Color_NOC_TEAL = 438,\r
		Color_NOC_SIENNA = 439,\r
		Color_NOC_SIENNA1 = 440,\r
		Color_NOC_SIENNA2 = 441,\r
		Color_NOC_SIENNA3 = 442,\r
		Color_NOC_SIENNA4 = 443,\r
		Color_NOC_SKYBLUE = 444,\r
		Color_NOC_SKYBLUE1 = 445,\r
		Color_NOC_SKYBLUE2 = 446,\r
		Color_NOC_SKYBLUE3 = 447,\r
		Color_NOC_SKYBLUE4 = 448,\r
		Color_NOC_SLATEBLUE = 449,\r
		Color_NOC_SLATEBLUE1 = 450,\r
		Color_NOC_SLATEBLUE2 = 451,\r
		Color_NOC_SLATEBLUE3 = 452,\r
		Color_NOC_SLATEBLUE4 = 453,\r
		Color_NOC_SLATEGRAY1 = 454,\r
		Color_NOC_SLATEGRAY2 = 455,\r
		Color_NOC_SLATEGRAY3 = 456,\r
		Color_NOC_SLATEGRAY4 = 457,\r
		Color_NOC_SLATEGRAY = 458,\r
		Color_NOC_SNOW = 459,\r
		Color_NOC_SNOW2 = 460,\r
		Color_NOC_SNOW3 = 461,\r
		Color_NOC_SNOW4 = 462,\r
		Color_NOC_SPRINGGREEN = 463,\r
		Color_NOC_SPRINGGREEN2 = 464,\r
		Color_NOC_SPRINGGREEN3 = 465,\r
		Color_NOC_SPRINGGREEN4 = 466,\r
		Color_NOC_STEELBLUE = 467,\r
		Color_NOC_STEELBLUE1 = 468,\r
		Color_NOC_STEELBLUE2 = 469,\r
		Color_NOC_STEELBLUE3 = 470,\r
		Color_NOC_STEELBLUE4 = 471,\r
		Color_NOC_TAN = 472,\r
		Color_NOC_TAN1 = 473,\r
		Color_NOC_TAN2 = 474,\r
		Color_NOC_TAN3 = 475,\r
		Color_NOC_TAN4 = 476,\r
		Color_NOC_THISTLE = 477,\r
		Color_NOC_THISTLE1 = 478,\r
		Color_NOC_THISTLE2 = 479,\r
		Color_NOC_THISTLE3 = 480,\r
		Color_NOC_THISTLE4 = 481,\r
		Color_NOC_TOMATO = 482,\r
		Color_NOC_TOMATO1 = 482,\r
		Color_NOC_TOMATO2 = 483,\r
		Color_NOC_TOMATO3 = 484,\r
		Color_NOC_TOMATO4 = 485,\r
		Color_NOC_TURQUOISE = 486,\r
		Color_NOC_TURQUOISE1 = 487,\r
		Color_NOC_TURQUOISE2 = 488,\r
		Color_NOC_TURQUOISE3 = 489,\r
		Color_NOC_TURQUOISE4 = 490,\r
		Color_NOC_VIOLET = 491,\r
		Color_NOC_VIOLETRED = 492,\r
		Color_NOC_VIOLETRED1 = 493,\r
		Color_NOC_VIOLETRED2 = 494,\r
		Color_NOC_VIOLETRED3 = 495,\r
		Color_NOC_VIOLETRED4 = 496,\r
		Color_NOC_WHEAT = 497,\r
		Color_NOC_WHEAT1 = 498,\r
		Color_NOC_WHEAT2 = 499,\r
		Color_NOC_WHEAT3 = 500,\r
		Color_NOC_WHEAT4 = 501,\r
		Color_NOC_WHITESMOKE = 502,\r
		Color_NOC_YELLOW = 503,\r
		Color_NOC_YELLOW1 = 503,\r
		Color_NOC_YELLOW2 = 504,\r
		Color_NOC_YELLOW3 = 505,\r
		Color_NOC_YELLOW4 = 506,\r
		Color_NOC_YELLOWGREEN = 507,\r
		Color_NOC_WHITE = 508\r
	}\r
	enum MxTypeOfColor {\r
		Color_TOC_RGB = 0,\r
		Color_TOC_sRGB = 1,\r
		Color_TOC_HLS = 2,\r
		Color_TOC_CIELab = 3,\r
		Color_TOC_CIELch = 4\r
	}\r
	enum MxDisplayMode {\r
		DM_WireFrame = 0,\r
		DM_Shaded = 1\r
	}\r
	enum MxTypeOfLightSource {\r
		LightSource_TOLS_AMBIENT = 0,\r
		LightSource_TOLS_DIRECTIONAL = 1,\r
		LightSource_TOLS_POSITIONAL = 2,\r
		LightSource_TOLS_SPOT = 3\r
	}\r
	enum MxCameraProjection {\r
		CProjection_Orthographic = 0,\r
		CProjection_Perspective = 1,\r
		CProjection_Stereo = 2,\r
		CProjection_MonoLeftEye = 3,\r
		CProjection_MonoRightEye = 4\r
	}\r
	enum MxV3dTypeOfOrientation {\r
		Orientation_Xpos = 0,\r
		Orientation_Ypos = 1,\r
		Orientation_Zpos = 2,\r
		Orientation_Xneg = 3,\r
		Orientation_Yneg = 4,\r
		Orientation_Zneg = 5,\r
		Orientation_XposYpos = 6,\r
		Orientation_XposZpos = 7,\r
		Orientation_YposZpos = 8,\r
		Orientation_XnegYneg = 9,\r
		Orientation_XnegYpos = 10,\r
		Orientation_XnegZneg = 11,\r
		Orientation_XnegZpos = 12,\r
		Orientation_YnegZneg = 13,\r
		Orientation_YnegZpos = 14,\r
		Orientation_XposYneg = 15,\r
		Orientation_XposZneg = 16,\r
		Orientation_YposZneg = 17,\r
		Orientation_XposYposZpos = 18,\r
		Orientation_XposYnegZpos = 19,\r
		Orientation_XposYposZneg = 20,\r
		Orientation_XnegYposZpos = 21,\r
		Orientation_XposYnegZneg = 22,\r
		Orientation_XnegYposZneg = 23,\r
		Orientation_XnegYnegZpos = 24,\r
		Orientation_XnegYnegZneg = 25,\r
		Orientation_TypeOfOrientation_Zup_AxoLeft = 24,\r
		Orientation_TypeOfOrientation_Zup_AxoRight = 19,\r
		Orientation_TypeOfOrientation_Zup_Front = 4,\r
		Orientation_TypeOfOrientation_Zup_Back = 1,\r
		Orientation_TypeOfOrientation_Zup_Top = 2,\r
		Orientation_TypeOfOrientation_Zup_Bottom = 5,\r
		Orientation_TypeOfOrientation_Zup_Left = 3,\r
		Orientation_TypeOfOrientation_Zup_Right = 0,\r
		Orientation_TypeOfOrientation_Yup_AxoLeft = 21,\r
		Orientation_TypeOfOrientation_Yup_AxoRight = 18,\r
		Orientation_TypeOfOrientation_Yup_Front = 2,\r
		Orientation_TypeOfOrientation_Yup_Back = 5,\r
		Orientation_TypeOfOrientation_Yup_Top = 1,\r
		Orientation_TypeOfOrientation_Yup_Bottom = 4,\r
		Orientation_TypeOfOrientation_Yup_Left = 0,\r
		Orientation_TypeOfOrientation_Yup_Right = 3\r
	}\r
	enum MxTypeOfAngle {\r
		Angle_TypeOfAngle_Interior = 0,\r
		Angle_TypeOfAngle_Exterior = 1\r
	}\r
	enum MxTypeOfAngleArrowVisibility {\r
		Visibility_TOAAV_Both = 0,\r
		Visibility_TOAAV_First = 1,\r
		Visibility_TOAAV_Second = 2,\r
		Visibility_TOAAV_None = 3\r
	}\r
	enum MxTypeOfLine {\r
		Line_TOL_EMPTY = -1,\r
		Line_TOL_SOLID = 0,\r
		Line_TOL_DASH = 1,\r
		Line_TOL_DOT = 2,\r
		Line_TOL_DOTDASH = 3,\r
		Line_TOL_USERDEFINED = 4\r
	}\r
	enum MxTextPath {\r
		TextPath_TP_UP = 0,\r
		TextPath_TP_DOWN = 1,\r
		TextPath_TP_LEFT = 2,\r
		TextPath_TP_RIGHT = 3\r
	}\r
	enum MxDimensionArrowOrientation {\r
		DimensionArrowOrientation_DAO_Internal = 0,\r
		DimensionArrowOrientation_DAO_External = 1,\r
		DimensionArrowOrientation_DAO_Fit = 2\r
	}\r
	enum MxDimensionTextVerticalPosition {\r
		DimensionTextVerticalPosition_DTVP_Above = 0,\r
		DimensionTextVerticalPosition_DTVP_Below = 1,\r
		DimensionTextVerticalPosition_DTVP_Center = 2\r
	}\r
	enum MxDimensionTextHorizontalPosition {\r
		DimensionTextHorizontalPosition_DTHP_Left = 0,\r
		DimensionTextHorizontalPosition_DTHP_Right = 1,\r
		DimensionTextHorizontalPosition_DTHP_Center = 2,\r
		DimensionTextHorizontalPosition_DTHP_Fit = 3\r
	}\r
	enum MxKindOfDimension {\r
		KindOfDimension_KOD_NONE = 0,\r
		KindOfDimension_KOD_LENGTH = 1,\r
		KindOfDimension_KOD_PLANEANGLE = 2,\r
		KindOfDimension_KOD_SOLIDANGLE = 3,\r
		KindOfDimension_KOD_AREA = 4,\r
		KindOfDimension_KOD_VOLUME = 5,\r
		KindOfDimension_KOD_MASS = 6,\r
		KindOfDimension_KOD_TIME = 7,\r
		KindOfDimension_KOD_RADIUS = 8,\r
		KindOfDimension_KOD_DIAMETER = 9,\r
		KindOfDimension_KOD_CHAMF2D = 10,\r
		KindOfDimension_KOD_CHAMF3D = 11,\r
		KindOfDimension_KOD_OFFSET = 12,\r
		KindOfDimension_KOD_ELLIPSERADIUS = 13\r
	}\r
<<<<<<< HEAD\r
=======\r
	enum MxDocColorType {\r
		DocColor_ColorGen = 0,\r
		DocColor_ColorSurf = 1,\r
		DocColor_ColorCurv = 2\r
	}\r
	enum MxKindOfInteractive {\r
		KindOfInteractive_None = 0,\r
		KindOfInteractive_Datum = 1,\r
		KindOfInteractive_Shape = 2,\r
		KindOfInteractive_Object = 3,\r
		KindOfInteractive_Relation = 4,\r
		KindOfInteractive_Dimension = 5,\r
		KindOfInteractive_LightSource = 6,\r
		KOI_None = 0,\r
		KOI_Datum = 1,\r
		KOI_Shape = 2,\r
		KOI_Object = 3,\r
		KOI_Relation = 4,\r
		KOI_Dimension = 5\r
	}\r
	enum MxPrs3dTypeOfHLR {\r
		TOH_NotSet = 0,\r
		TOH_PolyAlgo = 1,\r
		TOH_Algo = 2\r
	}\r
	enum MxDisplayStatus {\r
		DisplayStatus_Displayed = 0,\r
		DisplayStatus_Erased = 1,\r
		DisplayStatus_None = 2,\r
		DS_Displayed = 0,\r
		DS_Erased = 1,\r
		DS_None = 2\r
	}\r
	enum MxGlobalDisplayMode {\r
		DisplayMode_Wireframe = 0,\r
		DisplayMode_HiddenLineRemoval = 1,\r
		DisplayMode_Shaded = 2,\r
		DisplayMode_ShadedWithFaceBoundary = 3,\r
		DisplayMode_Transparency = 4\r
	}\r
>>>>>>> 8c441820 (init)\r
}\r
/**\r
 * 表示拓扑元素遍历\r
 */\r
/**\r
 * 表示拓扑元素遍历\r
 */\r
export declare class MdGeExplorer extends MdGeObject {\r
	constructor(p1?: MdGeShape | object, p2?: MdGe.MxShapeEnum, p3?: MdGe.MxShapeEnum);\r
	Init(S: MdGeShape, ToFind: MdGe.MxShapeEnum, ToAvoid?: MdGe.MxShapeEnum): void;\r
	More(): boolean;\r
	Next(): void;\r
	Value(): MdGeShape;\r
	Current(): MdGeShape;\r
	ReInit(): void;\r
	ExploredShape(): MdGeShape;\r
	Depth(): number;\r
	Clear(): void;\r
}\r
/**\r
 * 表示倒圆角\r
 */\r
/**\r
 * 表示倒圆角\r
 */\r
export declare class MdGeFillet extends MdGeObject {\r
	constructor(p1?: MdGeShape | object, p2?: MdGe.MxCF3dFilletShapeEnum);\r
	SetParams(Tang: number, Tesp: number, T2d: number, TApp3d: number, TolApp2d: number, Fleche: number): void;\r
	Add(p1: MdGeEdge | number, p2?: MdGeEdge | number, p3?: MdGeEdge): void;\r
	SetRadius(p1: number, p2: number, p3: number, p4?: number): void;\r
	ResetContour(IC: number): void;\r
	IsConstant(IC: number, E?: MdGeEdge): boolean;\r
	Radius(IC: number, E?: MdGeEdge): number;\r
	SetRadiusForEdge(Radius: number, IC: number, E: MdGeEdge): void;\r
	SetRadiusForVertex(Radius: number, IC: number, V: MdGeVertex): void;\r
	SetFilletShape(FShape: MdGe.MxCF3dFilletShapeEnum): void;\r
	GetFilletShape(): MdGe.MxCF3dFilletShapeEnum;\r
	NbContours(): number;\r
	Contour(E: MdGeEdge): number;\r
	NbEdges(I: number): number;\r
	Edge(I: number, J: number): MdGeEdge;\r
	Remove(E: MdGeEdge): void;\r
	Length(IC: number): number;\r
	FirstVertex(IC: number): MdGeVertex;\r
	LastVertex(IC: number): MdGeVertex;\r
	Abscissa(IC: number, V: MdGeVertex): number;\r
	RelativeAbscissa(IC: number, V: MdGeVertex): number;\r
	ClosedAndTangent(IC: number): boolean;\r
	Closed(IC: number): boolean;\r
	Reset(): void;\r
	NbSurfaces(): number;\r
	Simulate(IC: number): void;\r
	NbSurf(IC: number): number;\r
	NbFaultyContours(): number;\r
	FaultyContour(I: number): number;\r
	NbComputedSurfaces(IC: number): number;\r
	NbFaultyVertices(): number;\r
	FaultyVertex(IV: number): MdGeVertex;\r
	HasResult(): boolean;\r
	BadShape(): MdGeShape;\r
	Shape(): MdGeShape;\r
}\r
/**\r
 * 表示双曲线\r
 */\r
/**\r
 * 表示双曲线。\r
 */\r
export declare class MdGeHypr extends MdGeObject {\r
	constructor(p1?: MdGeCSYSR | object, p2?: number, p3?: number);\r
	SetAxis(theA1: MdGeAxis): void;\r
	SetLocation(theP: MdGePoint): void;\r
	SetMajorRadius(theMajorRadius: number): void;\r
	SetMinorRadius(theMinorRadius: number): void;\r
	SetPosition(theA2: MdGeCSYSR): void;\r
	Asymptote1(): MdGeAxis;\r
	Asymptote2(): MdGeAxis;\r
	Axis(): MdGeAxis;\r
	ConjugateBranch1(): MdGeHypr;\r
	ConjugateBranch2(): MdGeHypr;\r
	Directrix1(): MdGeAxis;\r
	Directrix2(): MdGeAxis;\r
	Eccentricity(): number;\r
	Focal(): number;\r
	Focus1(): MdGePoint;\r
	Focus2(): MdGePoint;\r
	Location(): MdGePoint;\r
	MajorRadius(): number;\r
	MinorRadius(): number;\r
	OtherBranch(): MdGeHypr;\r
	Parameter(): number;\r
	Position(): MdGeCSYSR;\r
	XAxis(): MdGeAxis;\r
	YAxis(): MdGeAxis;\r
	MirrorByPoint(theP: MdGePoint): void;\r
	MirroredByPoint(theP: MdGePoint): MdGeHypr;\r
	MirrorByAxis(theA1: MdGeAxis): void;\r
	MirroredByAxis(theA1: MdGeAxis): MdGeHypr;\r
	MirrorByCSYSR(theA2: MdGeCSYSR): void;\r
	MirroredByCSYSR(theA2: MdGeCSYSR): MdGeHypr;\r
	Rotate(theA1: MdGeAxis, theAng: number): void;\r
	Rotated(theA1: MdGeAxis, theAng: number): MdGeHypr;\r
	Scale(theP: MdGePoint, theS: number): void;\r
	Scaled(theP: MdGePoint, theS: number): MdGeHypr;\r
	Transform(theT: MdGeTrsf): void;\r
	Transformed(theT: MdGeTrsf): MdGeHypr;\r
	TranslateByVec(theV: MdGeVec): void;\r
	TranslatedByVec(theV: MdGeVec): MdGeHypr;\r
	TranslateBy2Points(theP1: MdGePoint, theP2: MdGePoint): void;\r
	TranslatedBy2Points(theP1: MdGePoint, theP2: MdGePoint): MdGeHypr;\r
	Shape(): MdGeShape;\r
	Wire(): MdGeWire;\r
	Edge(p1?: number, p2?: number): MdGeEdge;\r
}\r
/**\r
 * 表示一个Box\r
 */\r
/**\r
 * 表示一个Box\r
 */\r
export declare class MdGeBox extends MdGeObject {\r
	constructor(p1?: MdGePoint | number | MdGeCSYSR | object, p2?: MdGePoint | number, p3?: number, p4?: number);\r
	Init(p1: MdGePoint | number | MdGeCSYSR, p2: MdGePoint | number, p3?: number, p4?: number): void;\r
	Shape(): MdGeShape;\r
	Shell(): MdGeShell;\r
	Solid(): MdGeSolid;\r
	BottomFace(): MdGeFace;\r
	BackFace(): MdGeFace;\r
	FrontFace(): MdGeFace;\r
	LeftFace(): MdGeFace;\r
	RightFace(): MdGeFace;\r
	TopFace(): MdGeFace;\r
}\r
/**\r
 * 表示B样条曲线\r
 */\r
/**\r
 * 表示B样条曲线\r
 */\r
export declare class MdGeBSplineCurve extends MdGeObject {\r
	constructor(p1?: MdGeArray1OfPnt | object, p2?: MdGeArray1OfReal, p3?: MdGeArray1OfInteger, p4?: number, p5?: boolean);\r
	IncreaseDegree(Degree: number): void;\r
	IncreaseMultiplicity(p1: number, p2: number, p3?: number): void;\r
	IncrementMultiplicity(I1: number, I2: number, M: number): void;\r
	InsertKnot(U: number, M?: number, ParametricTolerance?: number, Add?: boolean): void;\r
	InsertKnots(Knots: MdGeArray1OfReal, Mults: MdGeArray1OfInteger, ParametricTolerance?: number, Add?: boolean): void;\r
	RemoveKnot(Index: number, M: number, Tolerance: number): boolean;\r
	Reverse(): void;\r
	ReversedParameter(U: number): number;\r
	SetKnot(Index: number, K: number, M?: number): void;\r
	SetKnots(K: MdGeArray1OfReal): void;\r
	SetPeriodic(): void;\r
	SetOrigin(p1: number, p2?: number): void;\r
	SetNotPeriodic(): void;\r
	SetPole(Index: number, P: MdGePoint, Weight?: number): void;\r
	SetWeight(Index: number, Weight: number): void;\r
	IsCN(N: number): boolean;\r
	IsG1(theTf: number, theTl: number, theAngTol: number): boolean;\r
	IsClosed(): boolean;\r
	IsPeriodic(): boolean;\r
	IsRational(): boolean;\r
	Continuity(): MdGe.MxGAShapeEnum;\r
	Degree(): number;\r
	DN(U: number, N: number): MdGeVec;\r
	LocalValue(U: number, FromK1: number, ToK2: number): MdGePoint;\r
	LocalDN(U: number, FromK1: number, ToK2: number, N: number): MdGeVec;\r
	EndPoint(): MdGePoint;\r
	FirstUKnotIndex(): number;\r
	FirstParameter(): number;\r
	Knot(Index: number): number;\r
	Knots(): MdGeArray1OfReal;\r
	KnotSequence(): MdGeArray1OfReal;\r
	LastUKnotIndex(): number;\r
	LastParameter(): number;\r
	Multiplicity(Index: number): number;\r
	Multiplicities(): MdGeArray1OfInteger;\r
	NbKnots(): number;\r
	NbPoles(): number;\r
	Pole(Index: number): MdGePoint;\r
	Poles(): MdGeArray1OfPnt;\r
	StartPoint(): MdGePoint;\r
	Weight(Index: number): number;\r
	Weights(): MdGeArray1OfReal;\r
	Transform(T: MdGeTrsf): void;\r
	Shape(): MdGeShape;\r
	Edge(): MdGeEdge;\r
	Wire(): MdGeWire;\r
}\r
/**\r
 * 表示B样条曲面\r
 */\r
/**\r
 * 表示B样条曲面\r
 */\r
export declare class MdGeBSplineSurface extends MdGeObject {\r
	constructor(p1?: MdGeArray2OfPnt | object, p2?: MdGeArray1OfReal, p3?: MdGeArray1OfReal, p4?: MdGeArray1OfInteger, p5?: MdGeArray1OfInteger, p6?: number, p7?: number, p8?: boolean, p9?: boolean);\r
	ExchangeUV(): void;\r
	SetUPeriodic(): void;\r
	SetVPeriodic(): void;\r
	SetUOrigin(Index: number): void;\r
	SetVOrigin(Index: number): void;\r
	SetVNotPeriodic(): void;\r
	UReverse(): void;\r
	VReverse(): void;\r
	UReversedParameter(U: number): number;\r
	VReversedParameter(V: number): number;\r
	IncreaseDegree(UDegree: number, VDegree: number): void;\r
	InsertUKnots(Knots: MdGeArray1OfReal, Mults: MdGeArray1OfInteger, ParametricTolerance?: number, Add?: boolean): void;\r
	InsertVKnots(Knots: MdGeArray1OfReal, Mults: MdGeArray1OfInteger, ParametricTolerance?: number, Add?: boolean): void;\r
	RemoveUKnot(Index: number, M: number, Tolerance: number): boolean;\r
	RemoveVKnot(Index: number, M: number, Tolerance: number): boolean;\r
	IncreaseUMultiplicity(p1: number, p2: number, p3?: number): void;\r
	IncreaseVMultiplicity(p1: number, p2: number, p3?: number): void;\r
	IncrementUMultiplicity(FromI1: number, ToI2: number, Step: number): void;\r
	IncrementVMultiplicity(FromI1: number, ToI2: number, Step: number): void;\r
	InsertUKnot(U: number, M: number, ParametricTolerance: number, Add?: boolean): void;\r
	InsertVKnot(V: number, M: number, ParametricTolerance: number, Add?: boolean): void;\r
	SetUKnot(UIndex: number, K: number, M?: number): void;\r
	SetVKnot(VIndex: number, K: number, M?: number): void;\r
	SetUKnots(UK: MdGeArray1OfReal): void;\r
	SetVKnots(VK: MdGeArray1OfReal): void;\r
	SetPole(UIndex: number, VIndex: number, P: MdGePoint, Weight?: number): void;\r
	SetPoleCol(VIndex: number, CPoles: MdGeArray1OfPnt, CPoleWeights?: MdGeArray1OfReal): void;\r
	SetPoleRow(UIndex: number, CPoles: MdGeArray1OfPnt, CPoleWeights?: MdGeArray1OfReal): void;\r
	SetWeight(UIndex: number, VIndex: number, Weight: number): void;\r
	SetWeightCol(VIndex: number, CPoleWeights: MdGeArray1OfReal): void;\r
	SetWeightRow(UIndex: number, CPoleWeights: MdGeArray1OfReal): void;\r
	IsUClosed(): boolean;\r
	IsVClosed(): boolean;\r
	IsCNu(N: number): boolean;\r
	IsCNv(N: number): boolean;\r
	IsUPeriodic(): boolean;\r
	IsURational(): boolean;\r
	IsVPeriodic(): boolean;\r
	IsVRational(): boolean;\r
	Continuity(): MdGe.MxGAShapeEnum;\r
	FirstUKnotIndex(): number;\r
	FirstVKnotIndex(): number;\r
	LastUKnotIndex(): number;\r
	LastVKnotIndex(): number;\r
	NbUKnots(): number;\r
	NbUPoles(): number;\r
	NbVKnots(): number;\r
	NbVPoles(): number;\r
	Pole(UIndex: number, VIndex: number): MdGePoint;\r
	Poles(): MdGeArray2OfPnt;\r
	UDegree(): number;\r
	UKnot(UIndex: number): number;\r
	UKnots(): MdGeArray1OfReal;\r
	UKnotSequence(): MdGeArray1OfReal;\r
	UMultiplicity(UIndex: number): number;\r
	UMultiplicities(): MdGeArray1OfInteger;\r
	VDegree(): number;\r
	VKnot(VIndex: number): number;\r
	VKnots(): MdGeArray1OfReal;\r
	VKnotSequence(): MdGeArray1OfReal;\r
	VMultiplicity(VIndex: number): number;\r
	VMultiplicities(): MdGeArray1OfInteger;\r
	Weight(UIndex: number, VIndex: number): number;\r
	Weights(): MdGeArray2OfReal;\r
	DN(U: number, V: number, Nu: number, Nv: number): MdGeVec;\r
	LocalDN(U: number, V: number, FromUK1: number, ToUK2: number, FromVK1: number, ToVK2: number, Nu: number, Nv: number): MdGeVec;\r
	LocalValue(U: number, V: number, FromUK1: number, ToUK2: number, FromVK1: number, ToVK2: number): MdGePoint;\r
	Transform(T: MdGeTrsf): void;\r
	static MaxDegree(): number;\r
	Shape(): MdGeShape;\r
	Face(): MdGeFace;\r
}\r
/**\r
 * 表示插值B样条曲线\r
 */\r
/**\r
 * 表示插值B样条曲线\r
 */\r
export declare class MdGeInterpolateBSpl extends MdGeObject {\r
	constructor(p1?: MdGeArray1OfPnt | object, p2?: boolean | MdGeArray1OfReal, p3?: number | boolean, p4?: number);\r
	Load(InitialTangent: MdGeVec, FinalTangent: MdGeVec, Scale?: boolean): void;\r
	Perform(): void;\r
	Curve(): MdGeBSplineCurve;\r
	IsDone(): boolean;\r
}\r
/**\r
 * 表示长度标注\r
 */\r
/**\r
 * 表示长度标注\r
 */\r
export declare class MdGeLengthDim extends MdGeObject {\r
	constructor(p1?: MdGeEdge | MdGePoint | object, p2?: MdGePlane | MdGePoint, p3?: MdGePlane);\r
	FirstPoint(): MdGePoint;\r
	SecondPoint(): MdGePoint;\r
	FirstShape(): MdGeShape;\r
	SecondShape(): MdGeShape;\r
	SetMeasuredGeometry(theFirstPoint: MdGePoint, theSecondPoint: MdGePoint, thePlane: MdGePlane): void;\r
	SetMeasuredShapes(theFirstShape: MdGeShape, theSecondShape: MdGeShape): void;\r
	SetTextPosition(theTextPos: MdGePoint): void;\r
	GetTextPosition(): MdGePoint;\r
	SetDirection(theDirection: MdGeDir, theUseDirection?: boolean): void;\r
	GetValue(): number;\r
	SetComputedValue(): void;\r
	SetCustomValue(theValue: number): void;\r
	GetPlane(): MdGePlane;\r
	GetGeometryType(): number;\r
	SetCustomPlane(thePlane: MdGePlane): void;\r
	UnsetCustomPlane(): void;\r
	IsTextPositionCustom(): boolean;\r
	DimensionAspect(): MdGeDimAspect;\r
	SetDimensionAspect(theDimensionAspect: MdGeDimAspect): void;\r
	KindOfDimension(): MdGe.MxKindOfDimension;\r
	AcceptDisplayMode(theMode: number): boolean;\r
	UnsetFixedTextPosition(): void;\r
	SelToleranceForText2d(): number;\r
	SetSelToleranceForText2d(theTol: number): void;\r
	GetFlyout(): number;\r
	SetFlyout(theFlyout: number): void;\r
	IsValid(): boolean;\r
	Display(): void;\r
}\r
/**\r
 * 表示一条直线\r
 */\r
/**\r
 * 表示一条直线\r
 */\r
export declare class MdGeLine extends MdGeObject {\r
	constructor(p1?: MdGePoint | object, p2?: MdGeDir);\r
	Reverse(): void;\r
	Reversed(): MdGeLine;\r
	SetDirection(theV: MdGeDir): void;\r
	SetLocation(theP: MdGePoint): void;\r
	SetPosition(theA1: MdGeAxis): void;\r
	Direction(): MdGeDir;\r
	Location(): MdGePoint;\r
	Position(): MdGeAxis;\r
	Angle(theOther: MdGeLine): number;\r
	Contains(theP: MdGePoint, theLinearTolerance: number): boolean;\r
	DistanceToPoint(theP: MdGePoint): number;\r
	DistanceToLine(theOther: MdGeLine): number;\r
	SquareDistanceToPoint(theP: MdGePoint): number;\r
	SquareDistanceToLine(theOther: MdGeLine): number;\r
	Normal(theP: MdGePoint): MdGeLine;\r
	MirrorByPoint(theP: MdGePoint): void;\r
	MirroredByPoint(theP: MdGePoint): MdGeLine;\r
	MirrorByAxis(theA1: MdGeAxis): void;\r
	MirroredByAxis(theA1: MdGeAxis): MdGeLine;\r
	MirrorByCSYSR(theA2: MdGeCSYSR): void;\r
	MirroredByCSYSR(theA2: MdGeCSYSR): MdGeLine;\r
	Rotate(theA1: MdGeAxis, theAng: number): void;\r
	Rotated(theA1: MdGeAxis, theAng: number): MdGeLine;\r
	Scale(theP: MdGePoint, theS: number): void;\r
	Scaled(theP: MdGePoint, theS: number): MdGeLine;\r
	Transform(theT: MdGeTrsf): void;\r
	Transformed(theT: MdGeTrsf): MdGeLine;\r
	TranslateByVec(theV: MdGeVec): void;\r
	TranslatedByVec(theV: MdGeVec): MdGeLine;\r
	TranslateBy2Points(theP1: MdGePoint, theP2: MdGePoint): void;\r
	TranslatedBy2Points(theP1: MdGePoint, theP2: MdGePoint): MdGeLine;\r
	Shape(): MdGeShape;\r
	Wire(): MdGeWire;\r
	Edge(p1?: number, p2?: number): MdGeEdge;\r
}\r
/**\r
 * 表示形状链表迭代器\r
 */\r
/**\r
 * 表示形状链表迭代器\r
 */\r
export declare class MdGeListIteratorOfListOfShape extends MdGeObject {\r
	constructor(p?: object);\r
	More(): boolean;\r
	Next(): void;\r
	Value(): MdGeShape;\r
	ChangeValue(theShape: MdGeShape): void;\r
}\r
/**\r
 * 表示形状链表\r
 */\r
/**\r
 * 表示形状链表\r
 */\r
export declare class MdGeListOfShape extends MdGeObject {\r
	constructor(p?: object);\r
	begin(): MdGeListIteratorOfListOfShape;\r
	end(): MdGeListIteratorOfListOfShape;\r
	Size(): number;\r
	First(): MdGeShape;\r
	Last(): MdGeShape;\r
	AppendShape(theShape: MdGeShape, theIter?: MdGeListIteratorOfListOfShape): void;\r
	AppendList(theOther: MdGeListOfShape): void;\r
	PrependShape(theShape: MdGeShape): void;\r
	PrependList(theOther: MdGeListOfShape): void;\r
	RemoveFirst(): void;\r
	InsertBeforeShape(theShape: MdGeShape, theIter: MdGeListIteratorOfListOfShape): void;\r
	InsertBeforeList(theOther: MdGeListOfShape, theIter: MdGeListIteratorOfListOfShape): void;\r
	InsertAfterShape(theShape: MdGeShape, theIter: MdGeListIteratorOfListOfShape): void;\r
	InsertAfterList(theOther: MdGeListOfShape, theIter: MdGeListIteratorOfListOfShape): void;\r
	Reverse(): void;\r
}\r
/**\r
 * 表示放样\r
 */\r
/**\r
 * 表示放样\r
 */\r
export declare class MdGeLoft extends MdGeObject {\r
	constructor(p1?: boolean | object, p2?: boolean, p3?: number);\r
	Init(isSolid?: boolean, ruled?: boolean, pres3d?: number): void;\r
	AddWire(wire: MdGeWire): void;\r
	AddVertex(aVertex: MdGeVertex): void;\r
	CheckCompatibility(check?: boolean): void;\r
	SetSmoothing(UseSmoothing: boolean): void;\r
	SetContinuity(C: MdGe.MxGAShapeEnum): void;\r
	SetMaxDegree(MaxDeg: number): void;\r
	Continuity(): MdGe.MxGAShapeEnum;\r
	MaxDegree(): number;\r
	UseSmoothing(): boolean;\r
	FirstShape(): MdGeShape;\r
	LastShape(): MdGeShape;\r
	GeneratedFace(Edge: MdGeShape): MdGeShape;\r
	SetMutableInput(theIsMutableInput: boolean): void;\r
	IsMutableInput(): boolean;\r
	Shape(): MdGeShape;\r
}\r
/**\r
 * 表示薄实体\r
 */\r
/**\r
 * 表示薄实体\r
 */\r
export declare class MdGeMakeThickSolid extends MdGeObject {\r
	constructor(p?: object);\r
	MakeThickSolidBySimple(theS: MdGeShape, theOffsetValue: number): void;\r
	MakeThickSolidByJoin(S: MdGeShape, ClosingFaces: MdGeListOfShape, Offset: number, Tol: number, Mode?: MdGe.MxOffsetModeEnum, Intersection?: boolean, SelfInter?: boolean, Join?: MdGe.MxGAJoinTypeEnum, RemoveIntEdges?: boolean): void;\r
	Shape(): MdGeShape;\r
}\r
/**\r
 * 表示抛物线\r
 */\r
/**\r
 * 表示抛物线\r
 */\r
export declare class MdGeParab extends MdGeObject {\r
	constructor(p1?: MdGeCSYSR | object, p2?: number);\r
	SetAxis(theA1: MdGeAxis): void;\r
	SetFocal(theFocal: number): void;\r
	SetLocation(theP: MdGePoint): void;\r
	SetPosition(theA2: MdGeCSYSR): void;\r
	Axis(): MdGeAxis;\r
	Directrix(): MdGeAxis;\r
	Focal(): number;\r
	Focus(): MdGePoint;\r
	Location(): MdGePoint;\r
	Parameter(): number;\r
	Position(): MdGeCSYSR;\r
	XAxis(): MdGeAxis;\r
	YAxis(): MdGeAxis;\r
	MirrorByPoint(theP: MdGePoint): void;\r
	MirroredByPoint(theP: MdGePoint): MdGeParab;\r
	MirrorByAxis(theA1: MdGeAxis): void;\r
	MirroredByAxis(theA1: MdGeAxis): MdGeParab;\r
	MirrorByCSYSR(theA2: MdGeCSYSR): void;\r
	MirroredByCSYSR(theA2: MdGeCSYSR): MdGeParab;\r
	Rotate(theA1: MdGeAxis, theAng: number): void;\r
	Rotated(theA1: MdGeAxis, theAng: number): MdGeParab;\r
	Scale(theP: MdGePoint, theS: number): void;\r
	Scaled(theP: MdGePoint, theS: number): MdGeParab;\r
	Transform(theT: MdGeTrsf): void;\r
	Transformed(theT: MdGeTrsf): MdGeParab;\r
	TranslateByVec(theV: MdGeVec): void;\r
	TranslatedByVec(theV: MdGeVec): MdGeParab;\r
	TranslateBy2Points(theP1: MdGePoint, theP2: MdGePoint): void;\r
	TranslatedBy2Points(theP1: MdGePoint, theP2: MdGePoint): MdGeParab;\r
	Shape(): MdGeShape;\r
	Wire(): MdGeWire;\r
	Edge(p1?: number, p2?: number): MdGeEdge;\r
}\r
/**\r
 * 表示管道\r
 */\r
/**\r
 * 表示管道\r
 */\r
export declare class MdGePipe extends MdGeObject {\r
	constructor(p1?: MdGeWire | object, p2?: MdGeShape, p3?: MdGe.MxGFTrihedron, p4?: boolean);\r
	FirstShape(): MdGeShape;\r
	LastShape(): MdGeShape;\r
	Generated(SSpine: MdGeShape, SProfile: MdGeShape): MdGeShape;\r
	ErrorOnSurface(): number;\r
	Shape(): MdGeShape;\r
}\r
/**\r
 * 表示拟合点B样条曲线\r
 */\r
/**\r
 * 表示拟合B样条曲线\r
 */\r
export declare class MdGePointsToBSpl extends MdGeObject {\r
	constructor(p1?: MdGeArray1OfPnt | object, p2?: number, p3?: number, p4?: MdGe.MxGAShapeEnum, p5?: number);\r
	Init(Points: MdGeArray1OfPnt, Parameters: MdGeArray1OfReal, DegMin?: number, DegMax?: number, Continuity?: MdGe.MxGAShapeEnum, Tol3D?: number): void;\r
	Curve(): MdGeBSplineCurve;\r
	IsDone(): boolean;\r
}\r
/**\r
 * 表示拟合B样条曲面\r
 */\r
/**\r
 * 表示拟合B样条曲面\r
 */\r
export declare class MdGePointsToBSplSurface extends MdGeObject {\r
	constructor(p1?: MdGeArray2OfPnt, p2?: number, p3?: number, p4?: MdGe.MxGAShapeEnum, p5?: number);\r
	Init(Points: MdGeArray2OfPnt, DegMin?: number, DegMax?: number, Continuity?: MdGe.MxGAShapeEnum, Tol3D?: number): void;\r
	Interpolate(p1: MdGeArray2OfPnt | MdGeArray2OfReal, p2?: boolean | number, p3?: number, p4?: number, p5?: number): void;\r
	IsDone(): boolean;\r
	Surface(): MdGeBSplineSurface;\r
}\r
/**\r
 * 表示拉伸体\r
 */\r
/**\r
 * 表示拉伸体\r
 */\r
export declare class MdGePrism extends MdGeObject {\r
	constructor(p1?: MdGeShape | object, p2?: MdGeVec, p3?: boolean, p4?: boolean);\r
	FirstShape(theShape?: MdGeShape): MdGeShape;\r
	LastShape(theShape?: MdGeShape): MdGeShape;\r
	IsDeleted(S: MdGeShape): boolean;\r
	Shape(): MdGeShape;\r
}\r
/**\r
 * 表示半径标注\r
 */\r
/**\r
 * 表示半径标注\r
 */\r
export declare class MdGeRadiusDim extends MdGeObject {\r
	constructor(p1?: MdGeCircle | object, p2?: MdGePoint);\r
	Circle(): MdGeCircle;\r
	AnchorPoint(): MdGePoint;\r
	Shape(): MdGeShape;\r
	SetMeasuredGeometry(theCircle: MdGeCircle, theAnchorPoint?: MdGePoint, theHasAnchor?: boolean): void;\r
	SetTextPosition(theTextPos: MdGePoint): void;\r
	GetTextPosition(): MdGePoint;\r
	GetValue(): number;\r
	SetComputedValue(): void;\r
	SetCustomValue(theValue: number): void;\r
	GetPlane(): MdGePlane;\r
	GetGeometryType(): number;\r
	SetCustomPlane(thePlane: MdGePlane): void;\r
	UnsetCustomPlane(): void;\r
	IsTextPositionCustom(): boolean;\r
	DimensionAspect(): MdGeDimAspect;\r
	SetDimensionAspect(theDimensionAspect: MdGeDimAspect): void;\r
	KindOfDimension(): MdGe.MxKindOfDimension;\r
	AcceptDisplayMode(theMode: number): boolean;\r
	UnsetFixedTextPosition(): void;\r
	SelToleranceForText2d(): number;\r
	SetSelToleranceForText2d(theTol: number): void;\r
	GetFlyout(): number;\r
	SetFlyout(theFlyout: number): void;\r
	IsValid(): boolean;\r
	Display(): void;\r
}\r
/**\r
 * 表示一个矩形\r
 */\r
/**\r
 * 表示一个矩形\r
 */\r
export declare class MdGeRect extends MdGeObject {\r
	constructor(p1?: MdGeCSYSR | object, p2?: number, p3?: number);\r
	Position(): MdGeCSYSR;\r
	SetPosition(thePosition: MdGeCSYSR): void;\r
	X(): number;\r
	Y(): number;\r
	SetX(theX: number): void;\r
	SetY(theY: number): void;\r
	Shape(): MdGeShape;\r
	Face(): MdGeFace;\r
	Wire(): MdGeWire;\r
	LeftEdge(): MdGeEdge;\r
	RightEdge(): MdGeEdge;\r
	TopEdge(): MdGeEdge;\r
	BottomEdge(): MdGeEdge;\r
	Area(): number;\r
}\r
/**\r
 * 表示旋转体\r
 */\r
/**\r
 * 表示旋转体\r
 */\r
export declare class MdGeRevol extends MdGeObject {\r
	constructor(p1?: MdGeShape | object, p2?: MdGeAxis, p3?: number, p4?: boolean);\r
	FirstShape(theShape?: MdGeShape): MdGeShape;\r
	LastShape(theShape?: MdGeShape): MdGeShape;\r
	IsDeleted(S: MdGeShape): boolean;\r
	HasDegenerated(): boolean;\r
	Shape(): MdGeShape;\r
}\r
/**\r
 * 表示一个球体\r
 */\r
/**\r
 * 表示一个球体\r
 */\r
export declare class MdGeSphere extends MdGeObject {\r
	constructor(p1?: MdGeCSYS | number | object, p2?: number, p3?: number, p4?: number);\r
	SetLocation(theLoc: MdGePoint): void;\r
	SetPosition(theA3: MdGeCSYS): void;\r
	SetRadius(theR: number): void;\r
	Area(): number;\r
	UReverse(): void;\r
	VReverse(): void;\r
	Direct(): boolean;\r
	Location(): MdGePoint;\r
	Position(): MdGeCSYS;\r
	Radius(): number;\r
	Volume(): number;\r
	XAxis(): MdGeAxis;\r
	YAxis(): MdGeAxis;\r
	MirrorByPoint(theP: MdGePoint): void;\r
	MirroredByPoint(theP: MdGePoint): MdGeSphere;\r
	MirrorByAxis(theA1: MdGeAxis): void;\r
	MirroredByAxis(theA1: MdGeAxis): MdGeSphere;\r
	MirrorByCSYSR(theA2: MdGeCSYSR): void;\r
	MirroredByCSYSR(theA2: MdGeCSYSR): MdGeSphere;\r
	Rotate(theA1: MdGeAxis, theAng: number): void;\r
	Rotated(theA1: MdGeAxis, theAng: number): MdGeSphere;\r
	Scale(theP: MdGePoint, theS: number): void;\r
	Scaled(theP: MdGePoint, theS: number): MdGeSphere;\r
	Transform(theT: MdGeTrsf): void;\r
	Transformed(theT: MdGeTrsf): MdGeSphere;\r
	TranslateByVec(theV: MdGeVec): void;\r
	TranslatedByVec(theV: MdGeVec): MdGeSphere;\r
	TranslateBy2Points(theP1: MdGePoint, theP2: MdGePoint): void;\r
	TranslatedBy2Points(theP1: MdGePoint, theP2: MdGePoint): MdGeSphere;\r
	Face(p1?: MdGeWire | number, p2?: boolean | number, p3?: number, p4?: number): MdGeFace;\r
	Shape(p1?: number, p2?: number, p3?: number): MdGeShape;\r
}\r
/**\r
 * 表示文字\r
 */\r
/**\r
 * 表示文字\r
 */\r
export declare class MdGeText extends MdGeObject {\r
	constructor(p1?: string | object, p2?: number, p3?: MdGeCSYSR);\r
	SetText(theText: string): void;\r
	Position(): MdGePoint;\r
	SetPosition(thePoint: MdGePoint): void;\r
	Orientation(): MdGeCSYSR;\r
	HasPlane(): boolean;\r
	SetOrientation(theOrientation: MdGeCSYSR): void;\r
	ResetOrientation(): void;\r
	HasOwnAnchorPoint(): boolean;\r
	SetOwnAnchorPoint(theHasOwnAnchor: boolean): void;\r
	Height(): number;\r
	SetHeight(theHeight: number): void;\r
	HorizontalAlignment(): MdGe.MxHorizontalTextAlignment;\r
	SetHorizontalAlignment(theJustification: MdGe.MxHorizontalTextAlignment): void;\r
	VerticalAlignment(): MdGe.MxVerticalTextAlignment;\r
	SetVerticalAlignment(theJustification: MdGe.MxVerticalTextAlignment): void;\r
	Shape(): MdGeShape;\r
}\r
/**\r
 * 表示文字标签\r
 */\r
/**\r
 * 表示文字标签\r
 */\r
export declare class MdGeTextLabel extends MdGeObject {\r
	constructor(p1?: string | object, p2?: number, p3?: MdGePoint);\r
<<<<<<< HEAD\r
=======\r
	SetColor(theColor: MdGeColor): void;\r
>>>>>>> 8c441820 (init)\r
	SetColor(theR: number, theG: number, theB: number): void;\r
	SetText(text: string): void;\r
	SetPositon(position: MdGePoint): void;\r
	SetHJustification(theHJust: MdGe.MxHorizontalTextAlignment): void;\r
	SetVJustification(theVJust: MdGe.MxVerticalTextAlignment): void;\r
	SetAngle(theAngle: number): void;\r
	SetZoomable(theIsZoomable: boolean): void;\r
	SetHeight(height: number): void;\r
	SetFontAspect(theFontAspect: MdGe.MxFontAspect): void;\r
	SetFont(theFont: string): void;\r
	SetOrientation3D(theOrientation: MdGeCSYSR): void;\r
	UnsetOrientation3D(): void;\r
	Position(): MdGePoint;\r
	FontAspect(): MdGe.MxFontAspect;\r
	Orientation3D(): MdGeCSYSR;\r
	HasOrientation3D(): boolean;\r
	SetFlipping(theIsFlipping: boolean): void;\r
	HasFlipping(): boolean;\r
	HasOwnAnchorPoint(): boolean;\r
	SetOwnAnchorPoint(theOwnAnchorPoint: boolean): void;\r
	SetDisplayType(theDisplayType: MdGe.MxTypeOfDisplayText): void;\r
	SetColorSubTitle(theR: number, theG: number, theB: number): void;\r
	Display(): void;\r
}\r
/**\r
 * 拓扑转换类\r
 */\r
/**\r
 * 拓扑转换类\r
 */\r
export declare class MdGeTopo {\r
	protected imp: any;\r
	constructor();\r
	Vertex(S: MdGeShape): MdGeVertex;\r
	Edge(S: MdGeShape): MdGeEdge;\r
	Wire(S: MdGeShape): MdGeWire;\r
	Face(S: MdGeShape): MdGeFace;\r
	Shell(S: MdGeShape): MdGeShell;\r
	Solid(S: MdGeShape): MdGeSolid;\r
	CompSolid(S: MdGeShape): MdGeCompSolid;\r
	Compound(S: MdGeShape): MdGeCompound;\r
	DestroyObject(pObj: object): void;\r
	SetRegisterFuncPtr(jsFunPtr: number): void;\r
}\r
/**\r
 * 表示圆环\r
 */\r
/**\r
 * 表示圆环\r
 */\r
export declare class MdGeTorus extends MdGeObject {\r
	constructor(p1?: MdGeCSYS | object, p2?: number, p3?: number);\r
	SetAxis(theA1: MdGeAxis): void;\r
	SetLocation(theLoc: MdGePoint): void;\r
	SetMajorRadius(theMajorRadius: number): void;\r
	SetMinorRadius(theMinorRadius: number): void;\r
	SetPosition(theA3: MdGeCSYS): void;\r
	Area(): number;\r
	UReverse(): void;\r
	VReverse(): void;\r
	Direct(): boolean;\r
	Axis(): MdGeAxis;\r
	Location(): MdGePoint;\r
	Position(): MdGeCSYS;\r
	MajorRadius(): number;\r
	MinorRadius(): number;\r
	Volume(): number;\r
	XAxis(): MdGeAxis;\r
	YAxis(): MdGeAxis;\r
	MirrorByPoint(theP: MdGePoint): void;\r
	MirroredByPoint(theP: MdGePoint): MdGeTorus;\r
	MirrorByAxis(theA1: MdGeAxis): void;\r
	MirroredByAxis(theA1: MdGeAxis): MdGeTorus;\r
	MirrorByCSYSR(theA2: MdGeCSYSR): void;\r
	MirroredByCSYSR(theA2: MdGeCSYSR): MdGeTorus;\r
	Rotate(theA1: MdGeAxis, theAng: number): void;\r
	Rotated(theA1: MdGeAxis, theAng: number): MdGeTorus;\r
	Scale(theP: MdGePoint, theS: number): void;\r
	Scaled(theP: MdGePoint, theS: number): MdGeTorus;\r
	Transform(theT: MdGeTrsf): void;\r
	Transformed(theT: MdGeTrsf): MdGeTorus;\r
	TranslateByVec(theV: MdGeVec): void;\r
	TranslatedByVec(theV: MdGeVec): MdGeTorus;\r
	TranslateBy2Points(theP1: MdGePoint, theP2: MdGePoint): void;\r
	TranslatedBy2Points(theP1: MdGePoint, theP2: MdGePoint): MdGeTorus;\r
	Face(p1?: MdGeWire | number, p2?: boolean | number, p3?: number, p4?: number): MdGeFace;\r
	Shape(p1?: number, p2?: number, p3?: number): MdGeShape;\r
}\r
/**\r
 * 形状变换类\r
 */\r
/**\r
 * 形状变换类\r
 */\r
export declare class MdGeTransform extends MdGeObject {\r
	constructor(p1?: MdGeTrsf | MdGeShape | object, p2?: MdGeTrsf, p3?: boolean, p4?: boolean);\r
	Perform(theShape: MdGeShape, theCopyGeom?: boolean, theCopyMesh?: boolean): void;\r
	ModifiedShape(S: MdGeShape): MdGeShape;\r
	Shape(): MdGeShape;\r
}\r
/**\r
 * 表示一个楔形\r
 */\r
/**\r
 * 表示一个楔形\r
 */\r
export declare class MdGeWedge extends MdGeObject {\r
	constructor(p1?: number | MdGeCSYSR | object, p2?: number, p3?: number, p4?: number, p5?: number, p6?: number, p7?: number, p8?: number);\r
	Shell(): MdGeShell;\r
	Solid(): MdGeSolid;\r
	Shape(): MdGeShape;\r
}\r
/**\r
 * 表示几何曲面句柄\r
 */\r
/**\r
 * 表示几何曲面句柄\r
 */\r
export declare class MdGeHGeomSurface extends MdGeObject {\r
	constructor(p?: object);\r
	DynamicType(): string;\r
}\r
/**\r
 * 表示几何平面句柄\r
 */\r
/**\r
 * 表示几何平面句柄\r
 */\r
export declare class MdGeHGeomPlane extends MdGeObject {\r
	constructor(p?: object);\r
	DownCast(hGeomSurface: MdGeHGeomSurface): MdGeHGeomPlane;\r
	Axis(): MdGeAxis;\r
	Location(): MdGePoint;\r
	Position(): MdGeCSYS;\r
}\r
/**\r
 * 表示BRep工具\r
 */\r
/**\r
 * 表示Brep工具\r
 */\r
export declare class MdGeBRep {\r
	protected imp: any;\r
	constructor();\r
	IsClosed(p1: MdGeShape | MdGeEdge, p2?: MdGeFace): boolean | undefined;\r
	Surface(F: MdGeFace): MdGeHGeomSurface;\r
	Tolerance(F: MdGeFace): number;\r
	NaturalRestriction(F: MdGeFace): boolean;\r
	IsGeometric(F: MdGeFace): boolean;\r
	SameParameter(E: MdGeEdge): boolean;\r
	SameRange(E: MdGeEdge): boolean;\r
	Degenerated(E: MdGeEdge): boolean;\r
	HasContinuity(E: MdGeEdge, F1?: MdGeFace, F2?: MdGeFace): boolean | undefined;\r
	Continuity(E: MdGeEdge, F1: MdGeFace, F2: MdGeFace): MdGe.MxGAShapeEnum;\r
	MaxContinuity(theEdge: MdGeEdge): MdGe.MxGAShapeEnum;\r
	Pnt(V: MdGeVertex): MdGePoint;\r
	Parameter(V: MdGeVertex, E: MdGeEdge, F?: MdGeFace): number;\r
	MaxTolerance(theShape: MdGeShape, theSubShape: MdGe.MxShapeEnum): number;\r
	openBrepFromUrl(theModelPath: string): MdGeShape;\r
	openStepFromUrl(theModelPath: string): MdGeShape;\r
	openStlFromUrl(theModelPath: string): MdGeShape;\r
	openIgesFromUrl(theModelPath: string): MdGeShape;\r
	openObjFromUrl(theModelPath: string): MdGeShape;\r
	openGltfFromUrl(theModelPath: string): MdGeShape;\r
	openVrmlFromUrl(theModelPath: string): MdGeShape;\r
	openStepFromUrlByOCAF(theModelPath: string): string;\r
	openIgesFromUrlByOCAF(theModelPath: string): string;\r
	openObjFromUrlByOCAF(theModelPath: string): string;\r
	openStlFromUrlByOCAF(theModelPath: string): string;\r
	openGltfFromUrlByOCAF(theModelPath: string): string;\r
	openVrmlFromUrlByOCAF(theModelPath: string): string;\r
	getLabelAttributes(theEntry: string): string;\r
	refreshDocTree(): string;\r
	saveStepFile(fileName: string): void;\r
<<<<<<< HEAD\r
=======\r
	ptCanvasToView(x: number, y: number): MdGePoint;\r
>>>>>>> 8c441820 (init)\r
	RemoveAllLights(): void;\r
	AddLight(theLight: MdGeLight): void;\r
	EnableAllLights(): void;\r
	DisableAllLights(): void;\r
	EnableLight(theName: string): boolean;\r
	DisableLight(theName: string): boolean;\r
	DeleteAllLights(): void;\r
	OutputDefinedLights(): void;\r
	OutputActiveLights(): void;\r
	SetAllLightsOn(): void;\r
	SetAllLightsOff(): void;\r
	SetLightOn(theName: string): boolean;\r
	SetLightOff(theName: string): boolean;\r
	SetProjectionType(theProjection: MdGe.MxCameraProjection): void;\r
	SetProj(theOrientation: MdGe.MxV3dTypeOfOrientation, theIsYup: boolean): void;\r
	ChangeSelectedColor(color: MdGeColor): void;\r
<<<<<<< HEAD\r
=======\r
	SetColorByEntry(theEntry: string, theColor: MdGeColor): void;\r
>>>>>>> 8c441820 (init)\r
	AddModelTexture(theFileName: string): void;\r
	RemoveModelTexture(): void;\r
	ChangeSelectedMaterial(material: MdGeMaterialAspect): void;\r
	AddClipPlane(pln: MdGePlane): void;\r
	GetSelectedShapes(): MdGeListOfShape;\r
<<<<<<< HEAD\r
=======\r
	setObjectColor(theEntry: string, theColor: MdGeColor): void;\r
	moveObjectByTrsf(theEntry: string, theTrsf: MdGeTrsf): void;\r
	printSelObjInfo(): void;\r
	drawAisObjChildren(): void;\r
	getVertexPosition(theVertex: MdGeVertex): MdGePoint;\r
	getCircleCenter(theEdge: MdGeEdge): MdGePoint;\r
	getCircleDiameter(theEdge: MdGeEdge): number;\r
	getMinDistance(theShape1: MdGeShape, theShape2: MdGeShape): number;\r
	getAngle(theEdge1: MdGeEdge, theEdge2: MdGeEdge): number;\r
	getLength(theEdge: MdGeEdge): number;\r
	getArea(theFace: MdGeFace): number;\r
	someTests(): void;\r
	selPoint(): Promise<MdGePoint>;\r
	selFace(): Promise<[\r
		face: MdGeFace,\r
		pt: MdGePoint\r
	]>;\r
>>>>>>> 8c441820 (init)\r
}\r
/**\r
 * 表示颜色\r
 */\r
/**\r
 * 表示颜色\r
 */\r
export declare class MdGeColor extends MdGeObject {\r
	constructor(p1?: MdGe.MxNameOfColor | number | object, p2?: number, p3?: number, p4?: MdGe.MxTypeOfColor);\r
	Name(): MdGe.MxNameOfColor;\r
	SetValues(p1: MdGe.MxNameOfColor | number, p2?: number, p3?: number, p4?: MdGe.MxTypeOfColor): void;\r
	Red(): number;\r
	Green(): number;\r
	Blue(): number;\r
	Hue(): number;\r
	Light(): number;\r
	ChangeIntensity(theDelta: number): void;\r
	Saturation(): number;\r
	ChangeContrast(theDelta: number): void;\r
	IsDifferent(theOther: MdGeColor): boolean;\r
	IsEqual(theOther: MdGeColor): boolean;\r
	Distance(theColor: MdGeColor): number;\r
	SquareDistance(theColor: MdGeColor): number;\r
	DeltaE2000(theOther: MdGeColor): number;\r
	StringName(theColor: MdGe.MxNameOfColor): string;\r
}\r
/**\r
 * 表示材质\r
 */\r
/**\r
 * 表示材质\r
 */\r
export declare class MdGeMaterialAspect extends MdGeObject {\r
	constructor(p?: MdGe.MxNameOfMaterial | object);\r
	NumberOfMaterials(): number;\r
	MaterialFromName(theName: string): MdGe.MxNameOfMaterial;\r
	Name(): MdGe.MxNameOfMaterial;\r
	RequestedName(): MdGe.MxNameOfMaterial;\r
	MaterialName(): string;\r
	SetMaterialName(theName: string): void;\r
	Reset(): void;\r
	Color(): MdGeColor;\r
	SetColor(theColor: MdGeColor): void;\r
	Transparency(): number;\r
	Alpha(): number;\r
	SetTransparency(theValue: number): void;\r
	SetAlpha(theValue: number): void;\r
	AmbientColor(): MdGeColor;\r
	SetAmbientColor(theColor: MdGeColor): void;\r
	DiffuseColor(): MdGeColor;\r
	SetDiffuseColor(theColor: MdGeColor): void;\r
	SpecularColor(): MdGeColor;\r
	SetSpecularColor(theColor: MdGeColor): void;\r
	EmissiveColor(): MdGeColor;\r
	SetEmissiveColor(theColor: MdGeColor): void;\r
	Shininess(): number;\r
	SetShininess(theValue: number): void;\r
	IncreaseShine(theDelta: number): void;\r
	RefractionIndex(): number;\r
	SetRefractionIndex(theValue: number): void;\r
	ReflectionMode(theType: MdGe.MxTypeOfReflection): boolean;\r
	MaterialType(): MdGe.MxTypeOfMaterial;\r
	SetMaterialType(theType: MdGe.MxTypeOfMaterial): void;\r
	IsDifferent(theOther: MdGeMaterialAspect): boolean;\r
	IsEqual(theOther: MdGeMaterialAspect): boolean;\r
}\r
/**\r
 * 表示形状序列集合\r
 */\r
export declare class MdGeSequenceOfShape extends MdGeObject {\r
	constructor(p?: object);\r
	begin(): MdGeSequenceIteratorOfSequenceOfShape;\r
	end(): MdGeSequenceIteratorOfSequenceOfShape;\r
	Size(): number;\r
	Length(): number;\r
	Lower(): number;\r
	Upper(): number;\r
	IsEmpty(): boolean;\r
	Reverse(): void;\r
	Exchange(I: number, J: number): void;\r
	Remove(p1: number, p2?: number): void;\r
	Append(theShape: MdGeShape): void;\r
	Prepend(theShape: MdGeShape): void;\r
	InsertBefore(theIndex: number, theShape: MdGeShape): void;\r
	InsertAfter(theIndex: number, theShape: MdGeShape): void;\r
	First(): MdGeShape;\r
	Last(): MdGeShape;\r
	Value(theIndex: number): MdGeShape;\r
	SetValue(theIndex: number, theShape: MdGeShape): void;\r
}\r
/**\r
 * 表示形状序列迭代器\r
 */\r
export declare class MdGeSequenceIteratorOfSequenceOfShape extends MdGeObject {\r
	constructor(p?: object);\r
	More(): boolean;\r
	Next(): void;\r
	Value(): MdGeShape;\r
	IsEqual(theOther: MdGeSequenceIteratorOfSequenceOfShape): boolean;\r
}\r
/**\r
 * 表示由Edges链接形成Wires\r
 */\r
export declare class MdGeMakeWires extends MdGeObject {\r
	constructor(p?: object);\r
	ConnectEdgesToWires(edges: MdGeSequenceOfShape, toler: number, shared: boolean): MdGeSequenceOfShape;\r
	ConnectWiresToWires(iwires: MdGeSequenceOfShape, toler: number, shared: boolean): MdGeSequenceOfShape;\r
}\r
/**\r
 * 表示Wire生成Face\r
 */\r
export declare class MdGeMakeFace extends MdGeObject {\r
	constructor(p?: MdGeWire | object);\r
	Add(wire: MdGeWire): void;\r
	Face(): MdGeFace;\r
}\r
/**\r
 * 三点圆弧\r
 */\r
export declare class MdGeMakeArcOfCircle extends MdGeObject {\r
	constructor(p1: MdGePoint | object, p2?: MdGePoint, p3?: MdGePoint);\r
	Edge(): MdGeEdge;\r
}\r
/**\r
 * 光照\r
 */\r
export declare class MdGeLight extends MdGeObject {\r
	constructor(p: MdGe.MxTypeOfLightSource | object);\r
	CopyFrom(theLight: MdGeLight): void;\r
	Type(): MdGe.MxTypeOfLightSource;\r
	Name(): string;\r
	SetName(theName: string): void;\r
	Color(): MdGeColor;\r
	SetColor(theColor: MdGeColor): void;\r
	IsEnabled(): boolean;\r
	SetEnabled(theIsOn: boolean): void;\r
	ToCastShadows(): boolean;\r
	SetCastShadows(theToCast: boolean): void;\r
	IsHeadlight(): boolean;\r
	Headlight(): boolean;\r
	SetHeadlight(theValue: boolean): void;\r
	Position(): MdGePoint;\r
	SetPosition(p1: MdGePoint | number, p2?: number, p3?: number): void;\r
	ConstAttenuation(): number;\r
	LinearAttenuation(): number;\r
	SetAttenuation(theConstAttenuation: number, theLinearAttenuation: number): void;\r
	Direction(): MdGeDir;\r
	SetDirection(p1: MdGeDir | number, p2?: number, p3?: number): void;\r
	DisplayPosition(): MdGePoint;\r
	SetDisplayPosition(thePosition: MdGePoint): void;\r
	Angle(): number;\r
	SetAngle(theAngle: number): void;\r
	Concentration(): number;\r
	SetConcentration(theConcentration: number): void;\r
	Intensity(): number;\r
	SetIntensity(theValue: number): void;\r
	Smoothness(): number;\r
	SetSmoothRadius(theValue: number): void;\r
	SetSmoothAngle(theValue: number): void;\r
	HasRange(): boolean;\r
	Range(): number;\r
	SetRange(theValue: number): void;\r
}\r
export declare class MdGeArrowAspect extends MdGeObject {\r
	constructor(p1?: number | object, p2?: number);\r
	SetAngle(anAngle: number): void;\r
	Angle(): number;\r
	SetLength(theLength: number): void;\r
	Length(): number;\r
	SetZoomable(theIsZoomable: boolean): void;\r
	IsZoomable(): boolean;\r
	SetColor(theColor: MdGeColor): void;\r
}\r
export declare class MdGeDimAspect extends MdGeObject {\r
	constructor(p?: object);\r
	LineAspect(): MdGeLineAspect;\r
	SetLineAspect(theAspect: MdGeLineAspect): void;\r
	TextAspect(): MdGeTextAspect;\r
	SetTextAspect(theAspect: MdGeTextAspect): void;\r
	IsText3d(): boolean;\r
	MakeText3d(isText3d: boolean): void;\r
	IsTextShaded(): boolean;\r
	MakeTextShaded(theIsTextShaded: boolean): void;\r
	IsArrows3d(): boolean;\r
	MakeArrows3d(theIsArrows3d: boolean): void;\r
	IsUnitsDisplayed(): boolean;\r
	MakeUnitsDisplayed(theIsDisplayed: boolean): void;\r
	SetArrowOrientation(theArrowOrient: MdGe.MxDimensionArrowOrientation): void;\r
	ArrowOrientation(): MdGe.MxDimensionArrowOrientation;\r
	SetTextVerticalPosition(thePosition: MdGe.MxDimensionTextVerticalPosition): void;\r
	TextVerticalPosition(): MdGe.MxDimensionTextVerticalPosition;\r
	SetTextHorizontalPosition(thePosition: MdGe.MxDimensionTextHorizontalPosition): void;\r
	TextHorizontalPosition(): MdGe.MxDimensionTextHorizontalPosition;\r
	ArrowAspect(): MdGeArrowAspect;\r
	SetArrowAspect(theAspect: MdGeArrowAspect): void;\r
	SetCommonColor(theColor: MdGeColor): void;\r
	SetExtensionSize(theSize: number): void;\r
	ExtensionSize(): number;\r
	SetArrowTailSize(theSize: number): void;\r
	ArrowTailSize(): number;\r
	SetValueStringFormat(theFormat: string): void;\r
	ValueStringFormat(): string;\r
}\r
export declare class MdGeLineAspect extends MdGeObject {\r
	constructor(p1: MdGeColor | object, p2?: MdGe.MxTypeOfLine, p3?: number);\r
	SetColor(theColor: MdGeColor): void;\r
	SetTypeOfLine(theType: MdGe.MxTypeOfLine): void;\r
	SetWidth(theWidth: number): void;\r
}\r
export declare class MdGeTextAspect extends MdGeObject {\r
	constructor(p?: object);\r
	SetColor(theColor: MdGeColor): void;\r
	SetFont(theFont: string): void;\r
	SetHeight(theHeight: number): void;\r
	SetAngle(theAngle: number): void;\r
	Height(): number;\r
	Angle(): number;\r
	SetHorizontalJustification(theJustification: MdGe.MxHorizontalTextAlignment): void;\r
	SetVerticalJustification(theJustification: MdGe.MxVerticalTextAlignment): void;\r
	SetOrientation(theOrientation: MdGe.MxTextPath): void;\r
	HorizontalJustification(): MdGe.MxHorizontalTextAlignment;\r
	VerticalJustification(): MdGe.MxVerticalTextAlignment;\r
	MxTextPath(): MdGe.MxTextPath;\r
}\r
<<<<<<< HEAD\r
export declare function loadMxCADassembly3d(config: MxDraw3dConfig, call?: (mxDraw3d: MxDraw3d) => void): Promise<MxDraw3d>;\r
=======\r
export declare class MdGeApplication extends MdGeObject {\r
	constructor(p?: object);\r
	NbDocuments(): number;\r
	GetDocument(index: number): MdGeDocument;\r
	NewDocument(format: string): MdGeDocument;\r
	InitDocument(aDoc: MdGeDocument): void;\r
	Close(aDoc: MdGeDocument): void;\r
}\r
export declare class MdGeDocument extends MdGeObject {\r
	constructor(p: object);\r
	IsSaved(): boolean;\r
	IsChanged(): boolean;\r
	SetSaved(): void;\r
	SetSavedTime(theTime: number): void;\r
	GetSavedTime(): number;\r
	GetName(): string;\r
	GetPath(): string;\r
	Main(): MdGeLabel;\r
	IsEmpty(): boolean;\r
	IsValid(): boolean;\r
	SetModified(L: MdGeLabel): void;\r
	PurgeModified(): void;\r
	NewCommand(): void;\r
	HasOpenCommand(): boolean;\r
	OpenCommand(): void;\r
	CommitCommand(): boolean;\r
	AbortCommand(): void;\r
	GetUndoLimit(): number;\r
	SetUndoLimit(L: number): void;\r
	ClearUndos(): void;\r
	ClearRedos(): void;\r
	GetAvailableUndos(): number;\r
	Undo(): boolean;\r
	GetAvailableRedos(): number;\r
	Redo(): boolean;\r
	RemoveFirstUndo(): void;\r
	InitDeltaCompaction(): boolean;\r
	PerformDeltaCompaction(): boolean;\r
	UpdateReferences(aDocEntry: string): void;\r
	Recompute(): void;\r
	StorageFormat(): string;\r
	ChangeStorageFormat(newStorageFormat: string): void;\r
	SetEmptyLabelsSavingMode(isAllowed: boolean): void;\r
	EmptyLabelsSavingMode(): boolean;\r
	SetNestedTransactionMode(isAllowed: boolean): void;\r
	IsNestedTransactionMode(): boolean;\r
	SetModificationMode(theTransactionOnly: boolean): void;\r
	ModificationMode(): boolean;\r
	BeforeClose(): void;\r
}\r
export declare class MdGeDocShapeTool extends MdGeObject {\r
	constructor(p: MdGeLabel | object);\r
	IsTopLevel(L: MdGeLabel): boolean;\r
	IsFree(L: MdGeLabel): boolean;\r
	IsShape(L: MdGeLabel): boolean;\r
	IsSimpleShape(L: MdGeLabel): boolean;\r
	IsReference(L: MdGeLabel): boolean;\r
	IsAssembly(L: MdGeLabel): boolean;\r
	IsComponent(L: MdGeLabel): boolean;\r
	IsCompound(L: MdGeLabel): boolean;\r
	IsSubShape(shapeL: MdGeLabel, sub?: MdGeShape): boolean;\r
	Search(S: MdGeShape, findInstance: boolean, findComponent: boolean, findSubshape: boolean): MdGeLabel;\r
	FindShape(S: MdGeShape, findInstance: boolean): MdGeLabel;\r
	GetShape(L: MdGeLabel): MdGeShape;\r
	NewShape(): MdGeLabel;\r
	SetShape(L: MdGeLabel, S: MdGeShape): void;\r
	AddShape(S: MdGeShape, makeAssembly: boolean, makePrepare: boolean): MdGeLabel;\r
	RemoveShape(L: MdGeLabel, removeCompletely: boolean): boolean;\r
	Init(): void;\r
	SetAutoNaming(V: boolean): void;\r
	AutoNaming(): boolean;\r
	ComputeShapes(L: MdGeLabel): void;\r
	ComputeSimpleShapes(): void;\r
	GetShapes(): MdGeLabelSequence;\r
	GetFreeShapes(): MdGeLabelSequence;\r
	GetLocation(L: MdGeLabel): MdGeLocation;\r
	GetReferredShape(L: MdGeLabel): MdGeLabel;\r
	NbComponents(L: MdGeLabel, getsubchilds: boolean): number;\r
	GetComponents(L: MdGeLabel, getsubchilds: boolean): MdGeLabelSequence;\r
	AddComponent(assembly: MdGeLabel, comp: MdGeLabel, Loc: MdGeLocation): MdGeLabel;\r
	RemoveComponent(comp: MdGeLabel): void;\r
	UpdateAssemblies(): void;\r
	FindSubShape(shapeL: MdGeLabel, sub: MdGeShape): MdGeLabel;\r
	AddSubShape(shapeL: MdGeLabel, sub: MdGeShape): MdGeLabel;\r
	FindMainShapeUsingMap(sub: MdGeShape): MdGeLabel;\r
	FindMainShape(sub: MdGeShape): MdGeLabel;\r
	GetSubShapes(L: MdGeLabel): MdGeLabelSequence;\r
	BaseLabel(): MdGeLabel;\r
	FindComponent(theShape: MdGeShape): MdGeLabelSequence;\r
	SetLocation(theShapeLabel: MdGeLabel, theLoc: MdGeLocation): MdGeLabel;\r
	Expand(Shape: MdGeLabel): boolean;\r
}\r
export declare class MdGeDocColorTool extends MdGeObject {\r
	constructor(p: MdGeLabel | object);\r
	AutoNaming(): boolean;\r
	SetAutoNaming(theIsAutoNaming: boolean): void;\r
	BaseLabel(): MdGeLabel;\r
	IsColor(lab: MdGeLabel): boolean;\r
	GetColor(lab: MdGeLabel): MdGeColor;\r
	GetColorLabel(L: MdGeLabel, type: MdGe.MxDocColorType): MdGeLabel;\r
	FindColor(col: MdGeColor): MdGeLabel;\r
	AddColor(col: MdGeColor): MdGeLabel;\r
	RemoveColor(lab: MdGeLabel): void;\r
	GetColors(): MdGeLabelSequence;\r
	SetColor(L: MdGeLabel, colorL: MdGeLabel, type: MdGe.MxDocColorType): void;\r
	UnSetColor(L: MdGeLabel, type: MdGe.MxDocColorType): void;\r
	IsSet(L: MdGeLabel, type: MdGe.MxDocColorType): boolean;\r
	IsVisible(L: MdGeLabel): boolean;\r
	SetVisibility(shapeLabel: MdGeLabel, isvisible: boolean): void;\r
	IsColorByLayer(L: MdGeLabel): boolean;\r
	SetColorByLayer(shapeLabel: MdGeLabel, isColorByLayer: boolean): void;\r
	ReverseChainsOfTreeNodes(): boolean;\r
}\r
export declare class MdGeLabel extends MdGeObject {\r
	constructor(p?: object);\r
	Nullify(): void;\r
	Tag(): number;\r
	Father(): MdGeLabel;\r
	IsNull(): boolean;\r
	Imported(aStatus: boolean): void;\r
	IsImported(): boolean;\r
	IsEqual(aLabel: MdGeLabel): boolean;\r
	IsDifferent(aLabel: MdGeLabel): boolean;\r
	IsRoot(): boolean;\r
	MayBeModified(): boolean;\r
	AttributesModified(): boolean;\r
	HasAttribute(): boolean;\r
	NbAttributes(): number;\r
	Depth(): number;\r
	IsDescendant(aLabel: MdGeLabel): boolean;\r
	Root(): MdGeLabel;\r
	HasChild(): boolean;\r
	NbChildren(): number;\r
	FindChild(aTag: number, create: boolean): MdGeLabel;\r
	NewChild(): MdGeLabel;\r
	Transaction(): number;\r
	HasLowerNode(otherLabel: MdGeLabel): boolean;\r
	HasGreaterNode(otherLabel: MdGeLabel): boolean;\r
}\r
export declare class MdGeLabelSequence extends MdGeObject {\r
	constructor(p?: object);\r
	Size(): number;\r
	Length(): number;\r
	Lower(): number;\r
	Upper(): number;\r
	IsEmpty(): boolean;\r
	Reverse(): void;\r
	Exchange(I: number, J: number): void;\r
	Remove(theFromIndex: number, theToIndex: number): void;\r
	Append(theItem: MdGeLabel): void;\r
	Prepend(theItem: MdGeLabel): void;\r
	InsertBefore(theIndex: number, theItem: MdGeLabel): void;\r
	InsertAfter(theIndex: number, theItem: MdGeLabel): number;\r
	First(): MdGeLabel;\r
	Last(): MdGeLabel;\r
	Value(theIndex: number): MdGeLabel;\r
	SetValue(theIndex: number, theItem: MdGeLabel): void;\r
}\r
export declare class MdGeLocation extends MdGeObject {\r
	constructor(p?: MdGeTrsf | object);\r
	IsIdentity(): boolean;\r
	Identity(): void;\r
	FirstPower(): number;\r
	NextLocation(): MdGeLocation;\r
	Transformation(): MdGeTrsf;\r
	Inverted(): MdGeLocation;\r
	Multiplied(Other: MdGeLocation): MdGeLocation;\r
	Divided(Other: MdGeLocation): MdGeLocation;\r
	Predivided(Other: MdGeLocation): MdGeLocation;\r
	Powered(pwr: number): MdGeLocation;\r
	IsEqual(Other: MdGeLocation): number;\r
	IsDifferent(Other: MdGeLocation): boolean;\r
	Clear(): void;\r
	ScalePrec(): number;\r
}\r
export declare class MdGeLabelTree extends MdGeObject {\r
	constructor(p?: object);\r
	nodeSiblingPrevious(id: number): number;\r
	nodeSiblingNext(id: number): number;\r
	nodeChildFirst(id: number): number;\r
	nodeChildLast(id: number): number;\r
	nodeParent(id: number): number;\r
	nodeRoot(id: number): number;\r
	nodeData(id: number): MdGeLabel;\r
	nodeIsRoot(id: number): boolean;\r
	nodeIsLeaf(id: number): boolean;\r
	roots(): MdGeArray1OfInteger;\r
	clear(): void;\r
	appendChild(parentId: number, data: MdGeLabel): number;\r
}\r
export declare class MdGeDocReader extends MdGeObject {\r
	constructor(p: string | object);\r
	ReadFile(filename: string): boolean;\r
	ReadFile2(filename: string): boolean;\r
}\r
export declare class MdGeDocWriter extends MdGeObject {\r
	constructor(p: string | object);\r
	WriteFile(theDoc: MdGeDocument, fileName: string): boolean;\r
}\r
export declare class MdGeAisContext extends MdGeObject {\r
	constructor(p?: object);\r
	DisplayStatus(anIobj: MdGeAisObject): MdGe.MxDisplayStatus;\r
	IsDisplayed(aniobj: MdGeAisObject, aMode?: number): boolean;\r
	SetAutoActivateSelection(theIsAuto: boolean): void;\r
	GetAutoActivateSelection(): boolean;\r
	Display(theIObj: MdGeAisObject, theToUpdateViewer: boolean): void;\r
	Display(theIObj: MdGeAisObject, theDispMode: number, theSelectionMode: number, theToUpdateViewer: boolean, theDispStatus: MdGe.MxDisplayStatus): void;\r
	Load(theObj: MdGeAisObject, theSelectionMode: number): void;\r
	Erase(theIObj: MdGeAisObject, theToUpdateViewer: boolean): void;\r
	EraseAll(theToUpdateViewer: boolean): void;\r
	DisplayAll(theToUpdateViewer: boolean): void;\r
	EraseSelected(theToUpdateViewer: boolean): void;\r
	DisplaySelected(theToUpdateViewer: boolean): void;\r
	ClearPrs(theIObj: MdGeAisObject, theMode: number, theToUpdateViewer: boolean): void;\r
	Remove(theIObj: MdGeAisObject, theToUpdateViewer: boolean): void;\r
	RemoveAll(theToUpdateViewer: boolean): void;\r
	Redisplay(theIObj: MdGeAisObject, theToUpdateViewer: boolean, theAllModes: boolean): void;\r
	RedisplayType(theTypeOfObject: MdGe.MxKindOfInteractive, theSignature: number, theToUpdateViewer: boolean): void;\r
	RecomputePrsOnly(theIObj: MdGeAisObject, theToUpdateViewer: boolean, theAllModes: boolean): void;\r
	RecomputeSelectionOnly(anIObj: MdGeAisObject): void;\r
	Update(theIObj: MdGeAisObject, theUpdateViewer: boolean): void;\r
}\r
export declare class MdGeAisObject extends MdGeObject {\r
	constructor(p?: object);\r
}\r
export declare class MdGeAisShape extends MdGeAisObject {\r
	constructor(shap: MdGeShape | object);\r
	Signature(): number;\r
	Type(): MdGe.MxKindOfInteractive;\r
	Shape(): MdGeShape;\r
	SetShape(theShape: MdGeShape): void;\r
	SetTypeOfHLR(theTypeOfHLR: MdGe.MxPrs3dTypeOfHLR): void;\r
	TypeOfHLR(): MdGe.MxPrs3dTypeOfHLR;\r
	SetColor(theColor: MdGeColor): void;\r
	UnsetColor(): void;\r
	SetWidth(aValue: number): void;\r
	UnsetWidth(): number;\r
	SetMaterial(aName: MdGeMaterialAspect): void;\r
	UnsetMaterial(): void;\r
	SetTransparency(aValue: number): void;\r
	UnsetTransparency(): void;\r
	BoundingBox(): MdGeBndBox;\r
	GetColor(): MdGeColor;\r
	Material(): MdGe.MxNameOfMaterial;\r
	Transparency(): number;\r
}\r
export declare class MdGeBndBox extends MdGeObject {\r
	constructor(theMin?: MdGePoint | object, theMax?: MdGePoint);\r
	SetWhole(): void;\r
	SetVoid(): void;\r
	Set(P: MdGePoint, D: MdGeDir): void;\r
	Update(aXmin: number, aYmin: number, aZmin: number, aXmax: number, aYmax: number, aZmax: number): void;\r
	GetGap(): number;\r
	SetGap(Tol: number): void;\r
	Enlarge(Tol: number): void;\r
	CornerMin(): MdGePoint;\r
	CornerMax(): MdGePoint;\r
	OpenXmin(): void;\r
	OpenXmax(): void;\r
	OpenYmin(): void;\r
	OpenYmax(): void;\r
	OpenZmin(): void;\r
	OpenZmax(): void;\r
	IsOpen(): boolean;\r
	IsOpenXmin(): boolean;\r
	IsOpenXmax(): boolean;\r
	IsOpenYmin(): boolean;\r
	IsOpenYmax(): boolean;\r
	IsOpenZmin(): boolean;\r
	IsOpenZmax(): boolean;\r
	IsWhole(): boolean;\r
	IsVoid(): boolean;\r
	IsXThin(tol: number): boolean;\r
	IsYThin(tol: number): boolean;\r
	IsZThin(tol: number): boolean;\r
	IsThin(tol: number): boolean;\r
	Transformed(T: MdGeTrsf): MdGeBndBox;\r
	AddBndBox(Other: MdGeBndBox): void;\r
	AddPoint(P: MdGePoint): void;\r
	AddPointDir(P: MdGePoint, D: MdGeDir): void;\r
	AddDir(D: MdGeDir): void;\r
	IsOutPoint(P: MdGePoint): boolean;\r
	IsOutLine(L: MdGeLine): boolean;\r
	IsOutPlane(P: MdGePlane): boolean;\r
	IsOutBndBox(Other: MdGeBndBox, T?: MdGeTrsf): boolean;\r
	IsOutTBT(T1: MdGeTrsf, Other: MdGeBndBox, T2: MdGeTrsf): boolean;\r
	IsOutPPD(P1: MdGePoint, P2: MdGePoint, D: MdGeDir): boolean;\r
	Distance(Other: MdGeBndBox): number;\r
	SquareExtent(): number;\r
	FinitePart(): MdGeBndBox;\r
	HasFinitePart(): boolean;\r
}\r
export declare class MdGeAisTexturedShape extends MdGeAisObject {\r
	constructor(mshap: MdGeShape | object);\r
	SetTextureFileName(theTextureFileName: string): void;\r
	TextureMapState(): boolean;\r
	SetTextureMapOn(): void;\r
	SetTextureMapOff(): void;\r
	TextureFile(): string;\r
	UpdateAttributes(): void;\r
	SetColor(theColor: MdGeColor): void;\r
	UnsetColor(): void;\r
	SetMaterial(theAspect: MdGeMaterialAspect): void;\r
	UnsetMaterial(): void;\r
	EnableTextureModulate(): void;\r
	DisableTextureModulate(): void;\r
	TextureRepeat(): boolean;\r
	URepeat(): number;\r
	VRepeat(): number;\r
	SetTextureRepeat(theToRepeat: boolean, theURepeat: number, theVRepeat: number): void;\r
	TextureOrigin(): boolean;\r
	TextureUOrigin(): number;\r
	TextureVOrigin(): number;\r
	SetTextureOrigin(theToSetTextureOrigin: boolean, theUOrigin: number, theVOrigin: number): void;\r
	TextureScale(): boolean;\r
	TextureScaleU(): number;\r
	TextureScaleV(): number;\r
	SetTextureScale(theToSetTextureScale: boolean, theScaleU: number, theScaleV: number): void;\r
	IsShowTriangles(): boolean;\r
	SetShowTriangles(theToShowTriangles: boolean): void;\r
	TextureModulate(): boolean;\r
}\r
export declare class MdGeSpliter extends MdGeObject {\r
	constructor(p?: object);\r
	SetTools(theLS: MdGeShape[]): void;\r
	SetArguments(theLS: MdGeShape[]): void;\r
	Build(): void;\r
	IsDone(): boolean;\r
	HasWarnings(): boolean;\r
	Shapes(): MdGeShape[];\r
}\r
export declare function loadMxCADassembly3d(config: MxDraw3dConfig, call?: (mxDraw3d: MxDraw3d) => void): Promise<MxDraw3d>;\r
export type Map = any;\r
export declare class MxMap {\r
	private imp;\r
	private map;\r
	private originLngLatLike;\r
	private originCAD;\r
	private meterInCADUnits;\r
	private modelAltitude;\r
	private loadOldEditionMethod;\r
	mxcad: McObject;\r
	constructor();\r
	setLoadOldEditionMethod(): void;\r
	getMxDrawObject(): MxDrawObject;\r
	initMapbox(map: Map): void;\r
	getMapbox(): Map;\r
	mercatorCoord2CAD(x: number, y: number): THREE.Vector3;\r
	mercatorCoordToCAD(x: number, y: number): THREE.Vector3;\r
	cadToMercatorCoord(pt: THREE.Vector3): THREE.Vector3;\r
	lnglatToCAD(lng: number, lat: number): THREE.Vector3;\r
	cadTolnglat(pt: THREE.Vector3): number[];\r
	map_meters_to_lnglat(x: number, y: number): number[];\r
	map_lnglat_to_meters(lng: number, lat: number): number[];\r
	lnglat_to_mercator(lng: number, lat: number): THREE.Vector3;\r
	mercator_to_lnglat(x: number, y: number, z: number): number[];\r
	outOfChina(lng: number, lat: number): boolean;\r
	cadLongToMercatorCoord(len: number): number;\r
	setCoordinatePointAlignment(originLngLatLike: number[], originCAD: number[], meterInCADUnits: number): void;\r
	create(map: Map, config: MxCadConfig | any): Promise<void>;\r
}\r
export declare function MxMapAddRasterTileLayer(map: any, layerList: any[], key?: string): void;\r
export declare function MxMapAddGoogleCnLayer(map: any, types: string[]): void;\r
/**84转火星*/\r
export declare function mx_gps84_To_gcj02(lng: any, lat: any): {\r
	lng: any;\r
	lat: any;\r
};\r
/**火星转84*/\r
export declare function mx_gcj02_To_gps84(lng: any, lat: any): {\r
	lng: number;\r
	lat: number;\r
};\r
>>>>>>> 8c441820 (init)\r
\r
export {};\r
`;let x=!0;const Q={...m,enhanceApp(r){const{app:e}=r;m.enhanceApp(r),e.mixin({async mounted(){x&&(x=!1,await i(()=>import("./chunks/mxdraw.esm.e3fce7b7.js"),[]).then(n=>{M("mxdraw",n.default||n)}),await i(()=>import("./chunks/index.2962c9e1.js"),["assets/chunks/index.2962c9e1.js","assets/chunks/mxdraw.esm.e3fce7b7.js","assets/chunks/commonjsHelpers.edff4021.js"]).then(n=>{M("mxcad",n.default||n)}))}}),e.use(J,{defaultDirection:"column",ms:300,handleError(n){},onMonacoCreated(n){n.languages.typescript.typescriptDefaults.addExtraLib(`
          declare module 'mxdraw' { 
            ${q} 
          }
          `,"mxdraw"),n.languages.typescript.typescriptDefaults.addExtraLib(`
          declare module 'mxcad' { 
            ${$} 
          }
          `,"mxcad")}})}};function C(r){if(r.extends){const e=C(r.extends);return{...e,...r,async enhanceApp(n){e.enhanceApp&&await e.enhanceApp(n),r.enhanceApp&&await r.enhanceApp(n)}}}return r}const a=C(Q),rr=R({name:"VitePressApp",setup(){const{site:r}=_();return N(()=>{I(()=>{document.documentElement.lang=r.value.lang,document.documentElement.dir=r.value.dir})}),L(),w(),V(),a.setup&&a.setup(),()=>H(a.Layout)}});async function er(){const r=tr(),e=nr();e.provide(E,r);const n=T(r.route);return e.provide(D,n),e.component("Content",G),e.component("ClientOnly",f),Object.defineProperties(e.config.globalProperties,{$frontmatter:{get(){return n.frontmatter.value}},$params:{get(){return n.page.value.params}}}),a.enhanceApp&&await a.enhanceApp({app:e,router:r,siteData:S}),{app:e,router:r,data:n}}function nr(){return P(rr)}function tr(){let r=l,e;return A(n=>{let t=O(n);return r&&(e=t),(r||e===t)&&(t=t.replace(/\.js$/,".lean.js")),l&&(r=!1),i(()=>import(t),[])},a.NotFound)}l&&er().then(({app:r,router:e,data:n})=>{e.go().then(()=>{v(e.route,n.site),r.mount("#app")})});export{ar as A,sr as O,lr as P,dr as R,er as createApp,z as v};
