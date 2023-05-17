import{ac as u,ad as E,ae as i,a0 as l,af as f,ag as T,ah as v,ai as D,aj as C,ak as R,al as w,am as P,an as S,ao as A,d as H,u as O,p as V,k as N,ap as L,aq as I,ar as k,O as _}from"./chunks/framework.42a71e76.js";import{t as m}from"./chunks/theme.602aef63.js";let y={},h={};function F(e){y=e}function j(e){h=e}function ae(){G(),B()}function G(){const e=window;e._vue||(e._vue=y)}function B(){const e=window;e._app||(e._app=h)}const W=`import { camelize } from '@vue/shared';\r
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
`,z=`import { BaseTransitionProps } from '@vue/runtime-core';\r
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
`;let b=!0,p;async function se(){const e=await i(()=>import("./chunks/editor.main.d83c2780.e21a006d.js"),["assets/chunks/editor.main.d83c2780.e21a006d.js","assets/chunks/framework.42a71e76.js"]).then(r=>r.e);return b&&typeof p=="function"&&(b=!1,p(e)),e.languages.typescript.typescriptDefaults.setCompilerOptions({target:e.languages.typescript.ScriptTarget.Latest,allowNonTsExtensions:!0,moduleResolution:e.languages.typescript.ModuleResolutionKind.NodeJs,module:e.languages.typescript.ModuleKind.CommonJS,noEmit:!0,esModuleInterop:!0,jsx:e.languages.typescript.JsxEmit.Preserve,allowJs:!0}),e.languages.typescript.typescriptDefaults.setDiagnosticsOptions({noSemanticValidation:!1,noSyntaxValidation:!1}),e.languages.typescript.typescriptDefaults.addExtraLib(z,"jsx:type"),e.languages.typescript.typescriptDefaults.addExtraLib(`
    declare module 'vue' { ${W} }
  `,"ts:vue"),await Promise.all([(async()=>{const[{default:r},{default:n},{default:t}]=await Promise.all([i(()=>import("./chunks/editor.worker.9c35f395.dcede9b5.js"),[]),i(()=>import("./chunks/html.worker.b57725c2.47285f38.js"),[]),i(()=>import("./chunks/ts.worker.3260b66b.5dceb272.js"),[])]);window.MonacoEnvironment={getWorker(s,o){return o==="html"||o==="handlebars"||o==="razor"?new n:o==="typescript"||o==="javascript"?new t:new r}}})()]),e}function U(e){p=e||null}const X=Symbol(),d={};function x(e,r){d[e]=r}function de(e){const r=window;return r.importMaps||(r.importMaps=d),e=Y(e),e=e.replace(/import(.*?)from\s+['"](.*?)['"]/g,(n,t,s)=>{const o=s,c=d[o];return c?(d[`${o}`]||(d[`${o}`]=c),`const ${t} = importMaps['${s}']`):n}),e}function Y(e){return e.replace(/import(.*?)from\s+['"]vue['"]/g,(r,n)=>(n=n.replace(/\sas\s/g,":"),`const ${n} = _vue`)).replace(/import 'vue'/g,"")}const le=()=>Math.random().toString(36).slice(2,12),K=e=>typeof e=="object"&&e!==null,J=e=>function(r,n,t,...s){return Array.isArray(t)&&(t=t.map(o=>Array.isArray(o)?o:K(o)&&!o.__v_isVNode?e.createTextVNode(String(o)):o)),e.createVNode(r,n,t,...s)},$=function(e,r){r=Object.assign({ms:300,defaultDirection:"row"},r);const n=E(()=>i(()=>import("./chunks/Demo.10a78ca5.58c3964e.js"),["assets/chunks/Demo.10a78ca5.58c3964e.js","assets/chunks/framework.42a71e76.js","assets/chunks/theme.602aef63.js"]));e.component("Demo",n),e.config.errorHandler=function(t){console.error(t)},F(Object.assign({},u,{createVNode:J(u)})),j(e),e.provide(X,r),U(r.onMonacoCreated)};const q=`import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import * as three from 'three';
import { Color } from 'three';

/**\r
 * 加载MxDraw库的核心代码 才能使用Mx的其他模块\r
 * @returns Promise<{@link MxFun}>\r
 * @example\r
 * \`\`\`\r
 * Mx.loadCoreCode().then(()=> console.log("加载完成", Mx.MxFun))\r
 * \`\`\`\r
 */\r
declare function loadCoreCode(): Promise<void>;

/** @module MxCADObject */\r
interface MxCADLayerTableRecord {\r
    id: number;\r
    name: string;\r
    color: number;\r
    off: boolean;\r
}\r
/**\r
 * MxCAD 对象，用来实现在线编辑功能\r
 *\r
 */\r
declare class MxCADObject {\r
    private _mxCAD;\r
    constructor(mxCAD: any);\r
    /**\r
     * 新建一个图纸\r
     * @example\r
     * \`\`\`typescript\r
     *\r
     * \`\`\`\r
     */\r
    newFile(): void;\r
    /** 撤销操作 */\r
    undo(): void;\r
    /**\r
     * 打开个CAD文件\r
     * @example\r
     * \`\`\`typescript\r
     *\r
     * \`\`\`\r
     */\r
    openFile(file: string, retfun?: (ret: Object) => void): void;\r
    /**\r
     * 保存CAD文件\r
     * 文件保存路径，在bin/release/ini.json, 中server.savepath设置。默认保存到，bin/release/public/save目录下。\r
     * @example\r
     * \`\`\`typescript\r
     *\r
     * \`\`\`\r
     */\r
    saveFile(file: string, retfun: (ret: Object) => void): void;\r
    /**\r
     * 从服务器上得到显示数据\r
     * @example\r
     * \`\`\`typescript\r
     *\r
     * \`\`\`\r
     */\r
    getDisplayFromServer(): void;\r
    /**\r
     * 获取打开的文件名称\r
     * @param file 文件路径\r
     * @param retfun 保存文件后的回调函数\r
     *\r
     * */\r
    getFileName(): string;\r
    /**\r
     * 获取全部图层数据\r
     * @retruns 全部图层数据\r
     *\r
     * */\r
    getAllLayerData(): MxCADLayerTableRecord[];\r
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
declare type MxColorType = number | string | THREE.Color;\r
declare type UnstableColor = MxColorType | undefined;

type MxType_MxCloneType = MxCloneType;
declare const MxType_MxCloneType: typeof MxCloneType;
type MxType_MxDefaultRenderOrder = MxDefaultRenderOrder;
declare const MxType_MxDefaultRenderOrder: typeof MxDefaultRenderOrder;
type MxType_InputToucheType = InputToucheType;
declare const MxType_InputToucheType: typeof InputToucheType;
type MxType_MxColorType = MxColorType;
type MxType_UnstableColor = UnstableColor;
declare namespace MxType {
  export {
    MxType_MxCloneType as MxCloneType,
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
    setLineWidthIsPixels(isPixels: boolean): void;\r
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
declare abstract class MxDbEntity {\r
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
    static use(): Promise<void>;\r
    /**\r
     * 颜色值\r
     * */\r
    color: UnstableColor;\r
    /**\r
     * 显示顺序\r
     * */\r
    renderOrder: number;\r
    /**\r
     * 设置透明度 0 ~ 1,1表示完全不透明，0表示全透明.\r
     * */\r
    opacity: number;\r
    /**\r
     * 该矩形对象是否可见\r
     * */\r
    visible: boolean;\r
    /**\r
     * 用户自定义数据.\r
     * */\r
    userData: {\r
        [key: string]: any;\r
    };\r
    sGuid: string;\r
    dLineWidth: number;\r
    lineWidthByPixels: boolean;\r
    dDashArray: number;\r
    dDashRatio: number;\r
    layer: string;\r
    private _event;\r
    abstract getTypeName(): string;\r
    initGuid(guid: string): void;\r
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
    protected callEvent(sEventName: string, param?: any): any;\r
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
     * 添加一个事件处理\r
     * @returns void\r
     */\r
    addEvent(name: string, fun: object): void;\r
    /**\r
     * 删除一个事件处理\r
     * @returns void\r
     */\r
    removeEvent(name: string): void;\r
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

/** @module MxDrawObject */\r
\r
interface MxDrawObjectType {\r
    renderer: THREE.WebGLRenderer;\r
    addEvent(arg0: string, arg1: (...parmes: any) => any): void;\r
    setIniset(arg0: {\r
        EnableOsnapFunction: boolean;\r
    }): void;\r
    getScene(): THREE.Scene;\r
    getCamera(): THREE.Camera;\r
    setMouseRightRotate(isRotate: boolean): void;\r
    getFullDisplayRange(): object;\r
    getCanvas(): HTMLCanvasElement;\r
    updateDisplay(): void;\r
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
    addMxCurrentSelect(id: number): void;\r
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
/**\r
 * 引入mxdraw库不会挂载MxDrawObject 只能在以下特定函数中获取\r
 * @function\r
 * {@link MxFun.createMxObject}中callback回调参数\`mxDraw\`的构造类\r
 * @function\r
 * {@link MxFun.getCurrentDraw} 方法返回值的构造类\r
 * @function\r
 * {@link MxFun.getCurrentMxCAD} 方法返回值的构造类\r
 *\r
 */\r
declare class MxDrawObject {\r
    private _mxdrawObj;\r
    constructor(Mxdraw: MxDrawObjectType);\r
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
    updateDisplay(): void;\r
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
     * 初始化控件默认加载后，显示视区范围，默认使用图纸转换时的显示范围。。\r
     * @param minPt DWG文档坐标1显示区域的左下角 THREE.Vector3\r
     * @param maxPt DWG文档坐标2显示区域的右上角 THREE.Vector3\r
     * @returns void\r
     * @example\r
     * \`\`\`typescript\r
     * Mx.MxFun.getCurrentDraw().addEvent(new THREE.Vector3(0,10,10), new THREE.Vector3(3,8,20))\r
     *\r
     * \`\`\`\r
     */\r
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
    addEvent(eventNaem: string, fun: (...parmes: any) => any): void;\r
    /**\r
   * 移除事件函数。\r
   * @param options { eventNaem: string, fun:any; }\r
   * @returns boolean\r
   * @example\r
   * \`\`\`\r
   */\r
    removeEventFuction(eventNaem: string, fun: any): boolean;\r
    /**\r
     * 控件对象的事件监听\r
     * @param eventNaem 事件名称\r
     * @param fun 回调函数\r
     * @returns void\r
     * @example\r
     * \`\`\`typescript\r
     * Mx.MxFun.getCurrentDraw().on("addResizeEvent", ()=> {})\r
     * Mx.MxFun.getCurrentDraw().on("viewchange", ()=> {})\r
     * 图纸加载完成\r
     * Mx.MxFun.getCurrentDraw().on("loadComplete", ()=> {})\r
     * 视区重绘事件.\r
     * Mx.MxFun.getCurrentDraw().on("render", (renderer)=> {})\r
     * 视区大小被修改事件.,viewsize={viewWidth:viewWidth,viewHeight:viewHeight}\r
     * Mx.MxFun.getCurrentDraw().on("viewsizechange", (viewsize)=> {})\r
     * 实体选择状态发生改变的事件.\r
     * Mx.MxFun.getCurrentDraw().on("MxEntitySelectChange", (aryId:Array<number>)=> {})\r
     * \`\`\`\r
     */\r
    on(eventNaem: string, fun: (...parmes: any) => any): void;\r
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
    setIniset(options: {\r
        EnableOsnapFunction: boolean;\r
    }): void;\r
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
     * 把对象添加到当前选择中.\r
     * @returns void\r
     * @example\r
     * \`\`\`typescript\r
     *\r
     *\r
     * \`\`\`\r
     */\r
    addMxCurrentSelect(id: number): void;\r
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
     * @param iPan 设置是否可以鼠标中键移动视区,\r
     * iPan = 0,中键不移动视区，左键移动\r
     * iPan = 1,中键移动视区，左键不移动\r
     * iPan = 2,中键移动视区，左键移动视区\r
     * @returns\r
     * @example\r
     * \`\`\`typescript\r
     *\r
     *\r
     * \`\`\`\r
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
     * 得到MxCAD对象.\r
     * @return MxCADObject\r
     * @example\r
     * \`\`\` typescript\r
     * \`\`\`\r
     */\r
    getMxCAD(): MxCADObject;\r
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
     * 默认情况下，cad等于doc,当前m_isCorrectLargeCoordinates为true时，doc变成了把cad图纸修改到小范围坐标系下的坐标。\r
     * @returns number\r
     * @example\r
     * \`\`\`typescript\r
     *\r
     *\r
     * \`\`\`\r
     */\r
    cadCoord2Doc(x: number, y: number, z: number): THREE.Vector3;\r
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
    docCoord2Cad(x: number, y: number, z: number): THREE.Vector3;\r
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
     * 是否是MxCAD模式运行.\r
     * @example\r
     * \`\`\`typescript\r
     *\r
     *\r
     * \`\`\`\r
     */\r
    isMxCAD(): boolean;\r
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
    mOnKeydownEvent: ((arg0: any) => void) | undefined;\r
    mFocusValue: string;\r
    setFocusValue: (value: string) => void;\r
    getFocusValue: () => string;\r
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
    setCursorType: (curtype: string) => void;\r
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

declare let mxUiData: MxVueInterface;\r
interface CanvasParent extends HTMLElement {\r
    tabindex?: number;\r
}\r
interface CmdMangerType {\r
    McEdGetPointWorldDrawObjectClass(): any;\r
    getMrxDbgUiPrPointClass(): any;\r
}\r
interface MxFunType {\r
    createMxObject(canvasId: string, arg1: string | string[], arg2: (mxDraw: MxDrawObjectType) => void, is2d: boolean | undefined, isNewCreate?: boolean, isStaticLoad?: boolean, mapBox?: any, isCPPMxCAD?: boolean): void;\r
    setMxServer(MXSERVER: string): void;\r
    addCommand(cmdName: string, fun: Function): void;\r
    sendStringToExecute(sCmd: string, ...params: any[]): boolean;\r
    call(cmd: string, param?: any, retfun?: Function): void;\r
    getCurrentDraw(): MxDrawObjectType;\r
    screenCoordLong2World(len: number): number;\r
    screenCoordLong2Doc(len: number): number;\r
    worldCoordLong2Doc(len: number): number;\r
    docCoordLong2World(len: number): number;\r
    docCoordLong2Screen(len: number): number;\r
    screenCoord2World(x: number | THREE.Vector3, y?: number, z?: number): THREE.Vector3;\r
    worldCoord2Screen(x: number | THREE.Vector3, y?: number, z?: number): THREE.Vector3;\r
    docCoord2World(x: number | THREE.Vector3, y?: number, z?: number): THREE.Vector3;\r
    worldCoord2Doc(x: number | THREE.Vector3, y?: number, z?: number): THREE.Vector3;\r
    screenCoord2Doc(x: number | THREE.Vector3, y?: number, z?: number): THREE.Vector3;\r
    docCoord2Screen(x: number | THREE.Vector3, y?: number, z?: number): THREE.Vector3;\r
    updateDisplay(): void;\r
    addWindowsEvent(fun: (type: string, event: any) => number): void;\r
    isRunningCommand(): boolean;\r
    zoomW(x1: number, y1: number, x2: number, y2: number, isWorld?: boolean): void;\r
    showLayer(idLayer: number | string, isShow: boolean, isSketch?: boolean): void;\r
    acutPrintf(sval: string, ...val: string[]): void;\r
    getCurrentMxCAD(): any;\r
    getQueryString(name: string): string;\r
    setIniset(iniObj: object): void;\r
    upDisplayForLayerData(dataLayers: any): boolean;\r
    enablStaticLoad(isStaticLoad?: boolean): void;\r
    setStaticServer(server: string): void;\r
    initUiDataObject(uiDataObj: any): void;\r
    loadImageMaterial(imageUrlPath: string, callResult: (material: THREE.MeshLambertMaterial) => void): void;\r
    initMxDbEntityType(userObject: any): void;\r
    initDynamicCreate(dynCreate: any): void;\r
    openFile(sFile: string | string[], useWebsocket: boolean): boolean;\r
    getMxJigCmdManager(): CmdMangerType;\r
    loadSVG(url: string, color?: number | string | THREE.Color, callResult?: any, loadSet?: any): void;\r
    getTHREE(): any;\r
}\r
declare class MxFunClass {\r
    constructor();\r
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
    createMxObject({ canvasId, cadFile, callback, isNewFile, useWebsocket, isAutoResize, mapBox, isMxCAD, userIdentitySign, isCPPMxCAD }: {\r
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
    }): void;\r
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
     * 设置加载dwg文件，直接使用html get协议加载数据，这样就不需要梦想后台服务器程序。\r
     * @param isStaticLoad 是否启用html get协议加载数据文件\r
     * @return void\r
     * @example\r
     * \`\`\` typescript\r
     * Mx.MxFun.enablStaticLoad(true)\r
     * \`\`\`\r
     */\r
    enablStaticLoad(isStaticLoad?: boolean): void;\r
    /**\r
     * 设置加载dwg文件，直接使用html get协议加载数据时，使用的服务器地址。\r
     * @param server 服务网络地址.\r
     * @return void\r
     * @example\r
     * \`\`\` typescript\r
     * Mx.MxFun.setStaticServer("http://localhost:3000/demo");\r
     * \`\`\`\r
     */\r
    setStaticServer(server: string): void;\r
    /**\r
     * 注册命令\r
     * @param cmdName 命令名\r
     * @param fun 命令函数\r
     * @return void\r
     * @example\r
     * \`\`\` typescript\r
     * Mx.MxFun.addCommand("draw", ()=> {\r
     *   console.log("draw")\r
     * })\r
     * \`\`\`\r
     */\r
    addCommand(cmdName: string, fun: Function): void;\r
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
    sendStringToExecute(cmdName: string, ...ages: any[]): boolean;\r
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
    call(funName: string, param?: any, retfun?: Function): void;\r
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
     * 获得到当前数据库对象.\r
     * @return MxDbDatabase\r
     * @example\r
     * \`\`\` typescript\r
     * \`\`\`\r
     */\r
    getCurrentDatabase(): MxDbDatabase;\r
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
    screenCoordLong2World(len: number): number;\r
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
    screenCoordLong2Doc(len: number): number;\r
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
    docCoordLong2Screen(len: number): number;\r
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
    worldCoordLong2Doc(len: number): number;\r
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
    screenCoord2World(x: number | THREE.Vector3, y?: number, z?: number): THREE.Vector3;\r
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
    worldCoord2Screen(x: number | THREE.Vector3, y?: number, z?: number): THREE.Vector3;\r
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
    docCoord2World(x: number, y: number, z: number): THREE.Vector3;\r
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
    worldCoord2Doc(x: number, y: number, z: number): THREE.Vector3;\r
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
     * 更新显示，使用Three.js绘制了对象，调用该函数更新显示。\r
     * @return void\r
     * @example\r
     * \`\`\` typescript\r
     * Mx.MxFun.updateDisplay()\r
     * \`\`\`\r
     */\r
    updateDisplay(): void;\r
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
    addWindowsEvent(fun: (type: string, event: any) => number): void;\r
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
    isRunningCommand(): boolean;\r
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
    zoomW(dLBx: number, dLBy: number, dRTx: number, dRTy: number, isWorld?: boolean): void;\r
    /**\r
     * 显示或隐藏图层\r
     * @param idLayer 图层id,或层名\r
     * @param isShow 是否显示\r
     * @param isSketch 暂不使用\r
     * @return void\r
     * @example\r
     * \`\`\` typescript\r
     * Mx.MxFun.showLayer(366, true, false)\r
     * Mx.MxFun.showLayer("2363", fasle, false)\r
     * \`\`\`\r
     */\r
    showLayer(idLayer: number | string, isShow: boolean, isSketch?: boolean): void;\r
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
    acutPrintf: ((sval: string, ...val: string[]) => void) | undefined;\r
    /**\r
     * 获取当前MxCAD对象,该函数在MxCAD模式下使用\r
     * @return MxDrawObjectType MxCAD对象\r
     * @example\r
     * \`\`\` typescript\r
     * const mxcad = Mx.MxFun.getCurrentMxCAD()\r
     * console.log(mxcad)\r
     * \`\`\`\r
     */\r
    getCurrentMxCAD(): MxCADObject;\r
    /**\r
     * 得到地址栏参数\r
     * @param name\r
     * @return string 地址栏参数\r
     * @example\r
     * \`\`\` typescript\r
     *  if(Mx.MxFun.getQueryString("mousetest") === "y")\r
     * \`\`\`\r
     */\r
    getQueryString(name: string): string;\r
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
    setIniset(iniObj: object): void;\r
    /**\r
     * 更新图纸图层数据\r
     * @param dataLayers\r
     * @return boolean 更新成功或失败\r
     * @example\r
     * \`\`\` typescript\r
     * if(Mx.MxFun.upDisplayForLayerData({\r
     *\r
     * })) {\r
     *   console.log("更新成功")\r
     * }\r
     * \`\`\`\r
     */\r
    upDisplayForLayerData(dataLayers: any): boolean;\r
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
     * 重新打开cad文件，该函数在控件创建完后，需要再次重新打开文件，调用。\r
     * @param sFile 打的cad文件路径\r
     * @return any\r
     * @example\r
     * \`\`\` typescript\r
     * \`\`\`\r
     */\r
    openFile(sFile: string | string[], useWebsocket?: boolean): boolean;\r
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
    listenForUpdateCursor: (callback: ((cursorType: string) => void) | undefined) => void;\r
    /**\r
     * 返回mxfun.min.js中的THREE.JS对象，可以用它来创建mxfun.min.js中THREE对象。\r
     * */\r
    getMxFunTHREE(): any;\r
    /**\r
     * 返回mxfun.min.js中的ThreeJsTool对象\r
     * */\r
    getMxFunThreeTool(): any;\r
    /**\r
     * 创建十字光标图片\r
     * */\r
    ceneratecursor(cursorSize?: number, squareSize?: number, isRoss?: boolean, color?: string): HTMLImageElement;\r
    /**\r
     * 调用服务器后台CAD命令.\r
     * */\r
    callCommand(cmd: string, param: string, retCall?: (param: any) => void): any;\r
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
    cadCoord2Doc(x: number, y: number, z: number): THREE.Vector3;\r
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
    docCoord2Cad(x: number, y: number, z: number): THREE.Vector3;\r
    /**\r
     * 通过id得到对象.\r
     * @returns 返MxDbEntity\r
     * @example\r
     * \`\`\`typescript\r
     *\r
     *\r
     * \`\`\`\r
     */\r
    getMxEntity(id: number): MxDbEntity | undefined;\r
    /**\r
     * 得到当前鼠标位置,返回的是屏幕坐标 。\r
     * @returns 返MxDbEntity\r
     * @example\r
     * \`\`\`typescript\r
     *\r
     *\r
     * \`\`\`\r
     */\r
    getCurrentMousePostion(): THREE.Vector3;\r
    /**\r
     * 停止运行当前命令\r
     * @returns\r
     * @example\r
     * \`\`\`typescript\r
     *\r
     *\r
     * \`\`\`\r
     */\r
    stopRunCommand(): any;\r
    /**\r
     * 设置当前运行MxCAD的MxCPP环境对象。\r
     */\r
    initMxCpp(mxcppimp: any): void;\r
    /**\r
     * Three.js坐标转MxCAD的DWG坐标长度\r
     */\r
    docCoordLong2Cad(l: number): number;\r
    /**\r
     * MxCAD的DWG坐标长度转Three.js坐标.\r
     */\r
    cadCoordLong2Doc(l: number): number;\r
    /**\r
     * View坐标长度转MxCAD的DWG坐标.\r
     */\r
    viewCoordLong2Cad(l: number): number;\r
    /**\r
     * MxCAD的DWG坐标长度转View坐标.\r
     */\r
    cadCoordLong2View(l: number): number;\r
}\r
/**\r
 * MxFun 模块\r
 * 导出库时已实例化，只需要调用实例方法 例如：\r
 * \`\`\`typescript\r
 *  Mx.MxFun.createMxObject\r
 * \`\`\`\r
 */\r
declare const MxFun: MxFunClass;

declare class PubSub {\r
    events: {\r
        [x: string]: Function[];\r
    };\r
    constructor();\r
    /**\r
     * 订阅\r
     * @param event 事件名称\r
     * @param callback 事件回调\r
     */\r
    on(event: string, callback: Function): [] | number;\r
    /**\r
     * 发布\r
     * @param event 事件名称\r
     * @param data 载荷\r
     */\r
    emit<T>(event: string | number, ...data: T | any): any[];\r
    /**\r
     * 销毁事件\r
     * @param event 事件名称\r
     * @param callback 事件方法\r
     */\r
    off(event: string, callback: Function): void;\r
}

declare class Store<T extends {}> {\r
    actions: {\r
        [x: string | number]: Function;\r
    };\r
    mutations: {\r
        [x: string | number]: Function;\r
    };\r
    state: T;\r
    status: string;\r
    events: PubSub;\r
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

declare type stateType = {\r
    [x: string]: any;\r
    MxFun: MxFunType | null;\r
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
    getColor(): void;\r
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
declare enum MxCursorType {\r
    kNormal = 0,\r
    kRect = 1,\r
    kCross = 2\r
}\r
/**\r
 * MrxDbgUiPrPoint 用于构建一个取点对象\r
 * @example \`\`\`typescript\r
 *  new Mx.MrxDbgUiPrPoint()\r
 * \`\`\`\r
 */\r
declare class MrxDbgUiPrPoint {\r
    private _MrxDbgUiPrPoint;\r
    constructor();\r
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
     * 把动态绘制的对象，保留到图上。\r
     * @param callAddEntity 回调参数ent 类型：THREE.THREE.Object3D\r
     * @returns 点对象 DWG图纸坐标\r
     */\r
    drawReserve(callAddEntity?: (ent: THREE.Object3D) => void): void;\r
    /**\r
     * 设置需要的Touche输入类型,默认值是 {@link MxType.InputToucheType.kGetBegan}\r
     *\r
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
    protected _fillImageSrc: string | false | null;\r
    get fillImageSrc(): string | false | null;\r
    set fillImageSrc(src: string | false | null);\r
    setFillImageSrc(fillImageSrc: string): this;\r
    /**\r
    * fillImageParam 填充背景图片的参数设置(如果使用了滤镜则部分参数功能失效)\r
    * */\r
    fillImageParam: {\r
        offset?: THREE.Vector2;\r
        repeat?: THREE.Vector2;\r
        rotation?: number;\r
        center?: THREE.Vector2;\r
    } | undefined;\r
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
    /** 圆角半径 (一个向量点对应一个角的半径值)*/\r
    cornerRadius: number[] | number;\r
    /**\r
     * 设置圆角 圆角的半径（如果参数为数组则一个角度对应一个圆角半径）\r
     * @param { number | number[] } radius 圆角半径 为数组时[3, 2, 1, 4]分别对应左上角圆角半径3  右上角2  右下角1 左下角4； 或者直接设置半径值 则四个角统一半径\r
     * */\r
    setCornerRadius(radius: number | number[], isScreenCoord?: boolean): void;\r
    /** 需要输入和输出的属性 */\r
    protected _propertyDbKeys: string[];\r
    getTypeName(): string;\r
    /** 获取坐标集合 */\r
    getShapePoints(paths: THREE.CurvePath<THREE.Vector3 | THREE.Vector2>): three.Vector3[];\r
    /*** 创建路径 */\r
    createPaths(shapes: THREE.Curve<THREE.Vector3 | THREE.Vector2> | THREE.Curve<THREE.Vector3 | THREE.Vector2>[]): three.CurvePath<three.Vector3 | three.Vector2>;\r
    /** 动态绘制函数*/\r
    _draw(pWorldDraw: McGiWorldDraw, vertices: THREE.Vector3[]): void;\r
    /** 获取生成圆角后的点 */\r
    getCornerRadiusPoints(points: THREE.Vector3[]): three.Vector3[];\r
    /** 绘制描边 */\r
    _drawStoreLine(pWorldDraw: McGiWorldDraw, points: THREE.Vector3[], draw?: (pWorldDraw: McGiWorldDraw) => void): void;\r
    /** 获取线段闭合后的曲线点数 */\r
    getClosedPoints(points: THREE.Vector3[]): three.Vector3[];\r
    /** 获取长度 */\r
    getTotalLength(): number;\r
    /** 获取面积 */\r
    getArea(): number;\r
    worldDraw(pWorldDraw: McGiWorldDraw): void;\r
    /** 图片填充 */\r
    _fillImg(pWorldDraw: McGiWorldDraw, points: THREE.Vector3[]): void;\r
    getGripPoints(): THREE.Vector3[];\r
    moveGripPointsAt(index: number, offset: THREE.Vector3): boolean;\r
    dwgIn(obj: any): boolean;\r
    dwgOut(obj: any): object;\r
}

/*** 椭圆(弧)形状 */\r
declare class MxDbEllipseShape extends MxDbShape {\r
    constructor();\r
    getTypeName(): string;\r
    /** 弧中心点 */\r
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
    constructor();\r
    point1: three.Vector3;\r
    point2: three.Vector3;\r
    point3: three.Vector3;\r
    /** 自动确定顺逆时针绘制 */\r
    autoClockwise: boolean;\r
    getTypeName(): string;\r
    create(): Mx3PointArc;\r
    worldDraw(pWorldDraw: McGiWorldDraw): void;\r
    getGripPoints(): THREE.Vector3[];\r
    /** 计算三个控制点的角度 */\r
    compute3PointAngle(): number[];\r
    /** 根据三个控制点更新圆心 */\r
    upDateCenter(point1: THREE.Vector3, point2: THREE.Vector3, point3: THREE.Vector3): three.Vector3;\r
    /** 根据圆心和一个控制点自动更新半径大小 */\r
    upDateRadius(point: THREE.Vector3): number;\r
    /** 根据 三个控制点到圆心的角度  更新顺逆时针绘制 */\r
    upDataClockwise(angle1: number, angle2: number, angle3: number): void;\r
    moveGripPointsAt(index: number, offset: THREE.Vector3): boolean;\r
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

declare type SpriteTextColorType = THREE.Color | string | number | CanvasGradient | CanvasPattern | undefined;\r
declare type SpriteTextObj = SpriteText;\r
declare type TextFontWeight = 'normal' | 'bold' | 'lighter' | 'bolder' | 'inherit' | number;\r
declare type TextFontStyle = 'normal' | 'italic' | 'oblique';\r
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
    /** 箭头图形 */\r
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
type Mx_MxCADObject = MxCADObject;
declare const Mx_MxCADObject: typeof MxCADObject;
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
    Mx_MxCADObject as MxCADObject,
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
  };
}

declare global {\r
    type THREE = typeof THREE;\r
    interface Window {\r
        THREE: typeof THREE;\r
    }\r
}

export { McEdGetPointWorldDrawObject, McGePoint3d, McGePoint3dArray, McGeTool, McGiWorldDraw, McGiWorldDrawType, MrxDbgUiPrBaseReturn, MrxDbgUiPrPoint, MrxDbgUtils, Mx3PointArc, MxCADObject, MxDb2LineAngularDimension, MxDbAlignedDimension, MxDbAnyLine, MxDbArcShapeDraw, MxDbArea, MxDbArrow, MxDbCircleArc, MxDbCircleShape, MxDbCloudLine, MxDbCoord, MxDbDatabase, MxDbEllipse, MxDbEllipseArc, MxDbEllipseShape, MxDbEntity, MxDbGradientLine, MxDbGroup, MxDbHatch, MxDbImage, MxDbLayerTableRecord, MxDbLeadComment, MxDbLeadTag, MxDbLine, MxDbLineShape, MxDbPolyline, MxDbRect, MxDbRectBoxLeadComment, MxDbRegularPolygon, MxDbRegularPolygonShape, MxDbRingShape, MxDbSVG, MxDbSVGText, MxDbShape, MxDbStarShape, MxDbText, MxDrawObject, MxFilters, MxFun, MxPaintBrush, MxThreeJS, MxType, Mxassembly, Mx as default, loadCoreCode, store, useCanvasResizeListener };
`,Z=`// Generated by dts-bundle-generator v6.13.0

import { MxDbEntity } from 'mxdraw';

/*** webAssembly 请求加载wasm文件 获取示例结果
 * @param url wasm 文件路径
 * @param importObject 导入对象
 *  */
export declare function fetchAndInstantiate(url: string, importObject: WebAssembly.Imports): Promise<WebAssembly.WebAssemblyInstantiatedSource>;
export declare function b64Encode(str: string): string;
export declare function b64Decode(str: string): string;
export type FileTypes = {
	description?: string;
	accept: {
		[type: string]: string[];
	};
}[];
/**  文件下载保存（另存为只支持 Chrome86 或 Edge 86 以及 Opera 72）兼容 iE10等较低版本的浏览器  */
export declare function saveAsFileDialog({ blob, filename, types }: {
	blob: Blob;
	filename?: string;
	types?: FileTypes;
}): Promise<void>;
export declare function downloadFile(blob: any, filename: string): void;
export declare const MxTools: {
	b64Encode: typeof b64Encode;
	b64Decode: typeof b64Decode;
	saveAsFileDialog: typeof saveAsFileDialog;
	downloadFile: typeof downloadFile;
};
/** 绘制文字 */
export declare function drawText(): Promise<void>;
/** 绘制圆*/
export declare function drawCircle(): void;
/**
 * McDb 命名空间包含 AutoCAD 中的一些常用枚举。
 * @public
 */
export declare namespace McDb {
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
		kTopLeft = 1,
		kTopCenter = 2,
		kTopRight = 3,
		kMiddleLeft = 4,
		kMiddleCenter = 5,
		kMiddleRight = 6,
		kBottomLeft = 7,
		kBottomCenter = 8,
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
}
declare class McRxObjectImp {
}
/**
 * 表示一个颜色对象，可以通过颜色索引或 RGB 值来设置颜色。
 */
export interface McCmColor {
	/**
	 * 设置颜色索引。
	 * @param colorIndex 颜色索引。
	 */
	setColorIndex(colorIndex: number): void;
	/**
	 * 设置 RGB 值。
	 * @param red 红色值。
	 * @param green 绿色值。
	 * @param blue 蓝色值。
	 */
	setRGB(red: number, green: number, blue: number): void;
	/**
	 * 红色值。
	 */
	red: number;
	/**
	 * 绿色值。
	 */
	green: number;
	/**
	 * 蓝色值。
	 */
	blue: number;
	/**
	 * 方法。
	 */
	method: number;
	n: number;
	/**
	 * 颜色索引。
	 */
	colorIndex: number;
}
/**
 * 表示三维点的对象。
 */
export interface McGePoint3d {
	/**
	 * 构造函数。
	 * @param dX X 坐标。
	 * @param dY Y 坐标。
	 * @param dZ Z 坐标。
	 */
	constructor(dX?: number, dY?: number, dZ?: number): any;
	/**
	 * X 坐标。
	 */
	x: number;
	/**
	 * Y 坐标。
	 */
	y: number;
	/**
	 * Z 坐标。
	 */
	z: number;
}
/**
 * 表示一个 Rx 对象的基类。
 */
export declare class McRxObject {
	/**
	 * 内部实现对象。
	 */
	protected imp: any;
	/**
	 * 构造函数。
	 * @param imp 内部实现对象。
	 */
	constructor(imp?: any);
	/**
	 * 获取内部实现对象。
	 * @returns 内部实现对象。
	 */
	getImp(): any;
	/**
	 * 初始化临时对象。
	 * @param imp 内部实现对象。
	 */
	protected initTempObject(imp: any): void;
	/**
	 * 获取对象名称。
	 */
	get ObjectName(): string;
	/**
	 * 获取 DXF 代码 0 的值。
	 */
	get Dxf0(): string;
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
}
declare class McDbObject extends McRxObject {
	/**
	 * 构造函数。
	 * @param imp 内部实现对象。
	 */
	constructor(imp?: any);
	/**
	 * 获取对象 ID。
	 * @returns 对象 ID。
	 */
	getObjectID(): number;
	/**
	 * 删除对象。
	 * @returns 是否删除成功。
	 */
	Erase(): boolean;
	/**
	 * 克隆对象。
	 * @returns 克隆出的对象。
	 */
	Clone(): McDbObject;
}
/**
 * 表示数据库层表。
 */
export declare class McDbLayerTable extends McDbObject {
	/**
	 * 构造函数。
	 * @param imp 内部实现对象。
	 */
	constructor(imp?: any);
}
declare class McDbLinetypeTable extends McDbObject {
	/**
	 * 构造函数。
	 * @param imp 内部实现对象。
	 */
	constructor(imp?: any);
}
declare class McDbTextStyleTable extends McDbObject {
	/**
	 * 构造函数。
	 * @param imp 内部实现对象。
	 */
	constructor(imp?: any);
}
/**
 * 表示数据库实体。
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
	explode(): McDrawResbuf;
}
/**
 * 表示数据库曲线。
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
		ret: number;
	};
	/**
	 * 获取结束参数。
	 * @returns 结束参数及执行结果。
	 */
	getEndParam(): {
		val: number;
		ret: number;
	};
	/**
	 * 获取参数位置上的距离。
	 * @param param 参数位置。
	 * @returns 距离及执行结果。
	 */
	getDistAtParam(param: number): {
		val: number;
		ret: number;
	};
	/**
	 * 获取距离位置上的参数。
	 * @param dist 距离位置。
	 * @returns 参数及执行结果。
	 */
	getParamAtDist(dist: number): {
		val: number;
		ret: number;
	};
	/**
	 * 获取距离位置上的点。
	 * @param pt 距离位置。
	 * @returns 点及执行结果。
	 */
	getDistAtPoint(pt: McGePoint3d): {
		val: number;
		ret: number;
	};
	/**
	 * 获取距离位置上的点。
	 * @param dist 距离位置。
	 * @returns 点及执行结果。
	 */
	getPointAtDist(dist: number): {
		val: McGePoint3d;
		ret: number;
	};
}
/**
 * 表示数据库。
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
	GetLayerTable(): McDbLayerTable;
	/**
	 * 获取线型表。
	 * @returns 线型表。
	 */
	GetLinetypeTable(): McDbLinetypeTable;
	/**
	 * 获取文字样式表。
	 * @returns 文字样式表。
	 */
	GetTextStyleTable(): McDbTextStyleTable;
	/**
	 * 获取块表。
	 * @returns 块表。
	 */
	GetBlockTable(): McDbBlockTable;
	/**
	 *返回当前空间块表记录
	 * @returns 块表记录
	 */
	CurrentSpace(): McDbBlockTableRecord;
	/**
	 * 获取当前线型比例。
	 * @returns 当前线型比例。
	 */
	GetCurrentlyLineTypeScale(): number;
	/**
	 * 设置当前线型比例。
	 * @param val 线型比例。
	 * @returns 当前线型比例。
	 */
	SetCurrentlyLineTypeScale(val: number): number;
	/**
	 * 获取当前线型名称。
	 * @returns 当前线型名称。
	 */
	GetCurrentlyLineTypeName(): string;
	/**
	 * 设置当前线型名称。
	 * @param sName 线型名称。
	 */
	SetCurrentlyLineTypeName(sName: string): void;
	/**
	 * 获取当前层名称。
	 * @returns 当前层名称。
	 */
	GetCurrentlyLayerName(): string;
	/**
	 * 设置当前层名称。
	 * @param sName 层名称。
	 */
	SetCurrentlyLayerName(sName: string): void;
	/**
	 * 获取当前真彩色。
	 * @returns 当前真彩色。
	 */
	GetCurrentlyTrueColor(): McCmColor;
	/**
	 * 设置当前真彩色。
	 * @param color 真彩色。
	 */
	SetCurrentlyTrueColor(color: McCmColor): any;
	/**
	 * 获取当前颜色索引。
	 * @returns 当前颜色索引。
	 */
	GetCurrentlyColorIndex(): number;
	/**
	 * 设置当前颜色索引。
	 * @param colorIndex 颜色索引。
	 */
	SetCurrentlyColorIndex(colorIndex: number): any;
	/**
	 * 获取当前文字样式名称。
	 * @returns 当前文字样式名称。
	 */
	GetCurrentlyTextStyleName(): string;
	/**
	 * 设置当前文字样式名称。
	 * @param sName 文字样式名称。
	 */
	SetCurrentlyTextStyle(sName: string): void;
}
/**
 * McObject 类
 */
export declare class McObject {
	/** 内部对象实现 */
	private imp;
	private mxObject;
	/** 当前文件名 */
	static currentFileName: string;
	/**
	 * 构造函数
	 * @param imp 对象实现
	 */
	constructor(imp: any);
	/**
	 * 初始化对象模型
	 * @param mxObject 对象模型
	 */
	initMxObject(mxObject: any): void;
	/**
	 * 获取对象实现
	 * @returns 对象实现
	 */
	getImp(): any;
	/**
	 * 获取 MxCpp 对象实现
	 * @returns MxCpp 对象实现
	 */
	getMxCppImp(): any;
	/**
	 * 更新对象显示
	 * @param modelViewMatrix 模型视图矩阵
	 * @param projectionMatrix 投影矩阵
	 */
	updateDisplay(modelViewMatrix: number[], projectionMatrix: number[]): void;
	/**
	 * 测试方法
	 */
	test(): void;
	/**
	 * 打开网络文件
	 * @param sFileUrl 网络文件路径
	 * @param retCall 回调函数，可选参数，打开文件完成后的回调函数，参数为打开文件的结果,0表示成功，其他值表示失败
	 * @param isWorkThread 是否使用工作线程打开文件，默认为 true
	 * @returns 是否成功打开文件
	 */
	openWebFile(sFileUrl: string, retCall?: (iRet: number) => void, isWorkThread?: boolean): boolean;
	/**
	 * 获取当前文件名
	 * @returns 当前文件名
	 */
	getCurrentFileName(): string;
	/**
	 * 将文件保存并转换为网络路径下载
	 * @param sSaveProgramUrl 要保存文件的路径
	 * @returns 是否成功保存文件
	 */
	saveFileToUrl(sSaveProgramUrl: string): boolean;
	/**
	 * 保存文件
	 * @param pszFilePath 文件路径
	 * @param call 回调函数，可选参数，文件保存完成后的回调函数，参数为文件数据
	 * @param isDownland 是否下载文件，默认为 true
	 * @param isShowSaveFileDialog 是否显示保存文件对话框，默认为 true
	 * @returns 是否成功保存文件
	 */
	saveFile(pszFilePath?: string, call?: (data: any) => void, isDownland?: boolean, isShowSaveFileDialog?: boolean): boolean;
	/**
	 * 获取数据库对象
	 * @returns 数据库对象
	 */
	GetDatabase(): McDbDatabase;
	/**
	 * 获取系统变量的字符串值
	 * @param varName 变量名称
	 * @returns 变量的字符串值
	 */
	GetSysVarString(varName: string): string;
	/**
	 * 设置系统变量的字符串值
	 * @param varName 变量名称
	 * @param val 变量的字符串值
	 * @returns 是否成功设置变量值
	 */
	SetSysVarString(varName: string, val: string): any;
	/**
	 * 获取系统变量的浮点数值
	 * @param varName 变量名称
	 * @returns 变量的浮点数值
	 */
	GetSysVarDouble(varName: string): number;
	/**
	 * 设置系统变量的浮点数值
	 * @param varName 变量名称
	 * @param val 变量的浮点数值
	 * @returns 是否成功设置变量值
	 */
	SetSysVarDouble(varName: string, val: number): boolean;
	/**
	 * 获取系统变量的整数值
	 * @param varName 变量名称
	 * @returns 变量的整数值
	 */
	GetSysVarLong(varName: string): number;
	/**
	 * 设置系统变量的整数值
	 * @param varName 变量名称
	 * @param val 变量的整数值
	 * @returns 是否成功设置变量值
	 */
	SetSysVarLong(varName: string, val: number): boolean;
	/**
	 * 获取绘制颜色
	 * @returns 返回绘制颜色
	 */
	get DrawColor(): McCmColor;
	/**
	 * 设置绘制颜色
	 * @param val 绘制颜色
	 */
	set DrawColor(val: McCmColor);
	/**
	 * 获取绘制线宽
	 * @returns 返回绘制线宽
	 */
	get DrawLineWeight(): McDb.LineWeight;
	/**
	 * 设置绘制线宽
	 * @param val 绘制线宽
	 */
	set DrawLineWeight(val: McDb.LineWeight);
	/**
	 * 获取绘制线型比例
	 * @returns 返回绘制线型比例
	 */
	get DrawLineTypeScale(): number;
	/**
	 * 设置绘制线型比例
	 * @param val 绘制线型比例
	 */
	set DrawLineTypeScale(val: number);
	/**
	 * 获取绘制线型
	 * @returns 返回绘制线型
	 */
	get DrawLinetype(): string;
	/**
	 * 设置绘制线型
	 * @param val 绘制线型
	 */
	set DrawLinetype(val: string);
	/**
	 * 获取绘制文字样式
	 * @returns 返回绘制文字样式
	 */
	get DrawTextStyle(): string;
	/**
	 * 设置绘制文字样式
	 * @param val 绘制文字样式
	 */
	set DrawTextStyle(val: string);
	/**
	 * 获取绘制图层
	 * @returns 返回绘制图层
	 */
	get DrawLayer(): string;
	/**
	 * 设置绘制图层
	 * @param val 绘制图层
	 */
	set DrawLayer(val: string);
	/**
	 * 添加图层
	 * @param pszName 图层名称
	 */
	AddLayer(pszName: string): void;
	/**
	 * 添加文字样式
	 * @param pszName 样式名称
	 * @param pszFileName 字体文件名
	 * @param pszBigFontFileName 大字体文件名
	 * @param dXScale X 方向缩放比例
	 */
	AddTextStyle(pszName: string, pszFileName: string, pszBigFontFileName: string, dXScale: number): void;
	/**
	 * 添加线型
	 * @param pszName 线型名称
	 * @param pszLineDefine 线型定义
	 */
	AddLinetype(pszName: string, pszLineDefine: string): void;
	/**
	 * 添加线型
	 * @param pszName 线型名称
	 * @param pszLineDefine 线型定义
	 * @param pszTextStyle 文字样式
	 */
	AddLinetypeEx(pszName: string, pszLineDefine: string, pszTextStyle: string): void;
	/**
	 * 绘制直线
	 * @param dX1 起点 X 坐标
	 * @param dY1 起点 Y 坐标
	 * @param dZ1 起点 Z 坐标
	 * @param dX2 终点 X 坐标
	 * @param dY2 终点 Y 坐标
	 * @param dZ2 终点 Z 坐标
	 * @returns 绘制的直线 ID
	 */
	DrawLine(dX1: number, dY1: number, dZ1: number, dX2: number, dY2: number, dZ2: number): number;
	/**
	 * 添加标注样式
	 * @param pszName 样式名称
	 * @param pszDoubleData 双精度型数据
	 * @param pszIntData 整型数据
	 * @param pszStringData 字符串型数据
	 * @param pszIdData ID 型数据
	 */
	AddDimStyle(pszName: string, pszDoubleData: string, pszIntData: string, pszStringData: string, pszIdData: string): void;
	/**
	 * 获取当前绘制的标注样式
	 */
	get DrawDimStyle(): string;
	/**
	 * 设置当前绘制的标注样式
	 * @param val 样式名称
	 */
	set DrawDimStyle(val: string);
	/**
	 * 获取当前绘制的线型定义
	 */
	get DrawPatternDefinition(): string;
	/**
	 * 设置当前绘制的线型定义
	 * @param val 线型定义
	 */
	set DrawPatternDefinition(val: string);
	/**
	 * 获取当前绘制的线宽
	 */
	get DrawLineWidth(): string;
	/**
	 * 设置当前绘制的线宽
	 * @param val 线宽
	 */
	set DrawLineWidth(val: string);
	/**
	 * 绘制圆弧
	 * @param dCenterX 圆心 X 坐标
	 * @param dCenterY 圆心 Y 坐标
	 * @param dRadius 半径
	 * @param dStartAng 起始角度，单位为弧度
	 * @param dEndAng 结束角度，单位为弧度
	 * @returns 成功返回 1，失败返回 0
	 */
	DrawArc(dCenterX: number, dCenterY: number, dRadius: number, dStartAng: number, dEndAng: number): number;
	/**
	 * 绘制圆弧
	 * @param dStartPointX 起始点 X 坐标
	 * @param dStartPointY 起始点 Y 坐标
	 * @param dMidPointX 中间点 X 坐标
	 * @param dMidPointY 中间点 Y 坐标
	 * @param dEndPointX 结束点 X 坐标
	 * @param dEndPointY 结束点 Y 坐标
	 */
	DrawArc2(dStartPointX: number, dStartPointY: number, dMidPointX: number, dMidPointY: number, dEndPointX: number, dEndPointY: number): any;
	/**
	 * 绘制圆
	 * @param dCenterX 圆心 X 坐标
	 * @param dCenterY 圆心 Y 坐标
	 * @param dRadius 半径
	 */
	DrawCircle(dCenterX: number, dCenterY: number, dRadius: number): any;
	/**
	 * 绘制椭圆
	 * @param dCenterX 椭圆中心 X 坐标
	 * @param dCenterY 椭圆中心 Y 坐标
	 * @param dMajorAxisX 长轴 X 坐标
	 * @param dMajorAxisY 长轴 Y 坐标
	 * @param dRadiusRatio 短轴与长轴的比例
	 * @returns 成功返回 1，失败返回 0
	 */
	DrawEllipse(dCenterX: number, dCenterY: number, dMajorAxisX: number, dMajorAxisY: number, dRadiusRatio: number): number;
	/**
	 * 绘制椭圆弧
	 * @param dCenterX 椭圆中心 X 坐标
	 * @param dCenterY 椭圆中心 Y 坐标
	 * @param dMajorAxisX 长轴 X 坐标
	 * @param dMajorAxisY 长轴 Y 坐标
	 * @param dRadiusRatio 短轴与长轴的比例
	 * @param dStartAng 起始角度，单位为弧度
	 * @param dEndAng 结束角度，单位为弧度
	 */
	DrawEllipseArc(dCenterX: number, dCenterY: number, dMajorAxisX: number, dMajorAxisY: number, dRadiusRatio: number, dStartAng: number, dEndAng: number): any;
	/**
	 * 绘制点
	 * @param dX X 坐标
	 * @param dY Y 坐标
	 */
	DrawPoint(dX: number, dY: number): any;
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
	DrawSolid(dX1: number, dY1: number, dX2: number, dY2: number, dX3: number, dY3: number, dX4: number, dY4: number): number;
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
	 */
	DrawMText(dPosX: number, dPosY: number, pszContents: string, dHeight: number, dWidth: number, dRotation: number, iAttachment: number): number;
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
	 */
	DrawText(dPosX: number, dPosY: number, pszText: string, dHeight: number, dRotation: number, horizontalMode: number, verticalMode: number): number;
	/**
	 * 绘制块参照
	 * @param dPosX 参照位置 X 坐标
	 * @param dPosY 参照位置 Y 坐标
	 * @param pszBlkName 块名
	 * @param dScale 缩放比例
	 * @param dAng 旋转角度，单位为弧度
	 * @returns 成功返回 1，失败返回 0
	 */
	DrawBlockReference(dPosX: number, dPosY: number, pszBlkName: number, dScale: number, dAng: number): number;
	/**
	 * 绘制对齐标注
	 * @param dExtLine1PointX 第一条尺线起点 X 坐标
	 * @param dExtLine1PointY 第一条尺线起点 Y 坐标
	 * @param dExtLine2PointX 第二条尺线起点 X 坐标
	 * @param dExtLine2PointY 第二条尺线起点 Y 坐标
	 * @param dTextPositionX 文本位置 X 坐标
	 * @param dTextPositionY 文本位置 Y 坐标
	 * @returns 成功返回 1，失败返回 0
	 */
	DrawDimAligned(dExtLine1PointX: number, dExtLine1PointY: number, dExtLine2PointX: number, dExtLine2PointY: number, dTextPositionX: number, dTextPositionY: number): number;
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
	 */
	DrawDimAngular(dAngleVertexX: number, dAngleVertexY: number, dFirstEndPointX: number, dFirstEndPointY: number, dSecondEndPointX: number, dSecondEndPointY: number, dTextPointX: number, dTextPointY: number): number;
	/**
	 * 绘制直径标注
	 * @param dChordPointX 弦线端点 X 坐标
	 * @param dChordPointY 弦线端点 Y 坐标
	 * @param dFarChordPointX 弦线远端点 X 坐标
	 * @param dFarChordPointY 弦线远端点 Y 坐标
	 * @param dLeaderLength 引线长度
	 * @returns 成功返回 1，失败返回 0
	 */
	DrawDimDiametric(dChordPointX: number, dChordPointY: number, dFarChordPointX: number, dFarChordPointY: number, dLeaderLength: number): number;
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
	 */
	DrawDimRotated(dExtLine1PointX: number, dExtLine1PointY: number, dExtLine2PointX: number, dExtLine2PointY: number, dDimLineLocationX: number, dDimLineLocationY: number, dRotationAngle: number): number;
	/**
	 * 绘制标注线性尺寸
	 * @param dDefinitionPointX - 定义点 X 坐标
	 * @param dDefinitionPointY - 定义点 Y 坐标
	 * @param dDeaderEndPointX - 标注终点 X 坐标
	 * @param dDeaderEndPointY - 标注终点 Y 坐标
	 * @param isUseXAxis - 是否沿 X 轴方向标注
	 * @returns 绘制结果
	 */
	DrawDimOrdinate(dDefinitionPointX: number, dDefinitionPointY: number, dDeaderEndPointX: number, dDeaderEndPointY: number, isUseXAxis: boolean): number;
	/**
	 * 绘制标注径向尺寸
	 * @param dCenterX - 中心点 X 坐标
	 * @param dCenterY - 中心点 Y 坐标
	 * @param dChordPointX - 弦线端点 X 坐标
	 * @param dChordPointY - 弦线端点 Y 坐标
	 * @param dLeaderLength - 标注线长度
	 * @returns 绘制结果
	 */
	DrawDimRadial(dCenterX: number, dCenterY: number, dChordPointX: number, dChordPointY: number, dLeaderLength: number): number;
	/**
	 * 将路径移动到指定位置
	 * @param dX - X 坐标
	 * @param dY - Y 坐标
	 */
	PathMoveTo(dX: number, dY: number): void;
	/**
	 * 移动路径到指定位置，同时指定起始宽度、终止宽度和凸度
	 * @param dX - X 坐标
	 * @param dY - Y 坐标
	 * @param dStartWidth - 起始宽度
	 * @param dEndWidth - 终止宽度
	 * @param dBulge - 凸度
	 */
	PathMoveToEx(dX: number, dY: number, dStartWidth: number, dEndWidth: number, dBulge: number): void;
	/**
	 * 从当前位置画一条直线到指定位置
	 * @param dX - X 坐标
	 * @param dY - Y 坐标
	 */
	PathLineTo(dX: number, dY: number): void;
	/**
	 * 从当前位置画一条直线到指定位置，同时指定起始宽度、终止宽度和凸度
	 * @param dX - X 坐标
	 * @param dY - Y 坐标
	 * @param dStartWidth - 起始宽度
	 * @param dEndWidth - 终止宽度
	 * @param dBulge - 凸度
	 */
	PathLineToEx(dX: number, dY: number, dStartWidth: number, dEndWidth: number, dBulge: number): void;
	/**
	 * 将路径转换为折线
	 * @returns 转换结果
	 */
	DrawPathToPolyline(): number;
	/**
	 * 将路径转换为样条曲线
	 * @returns 转换结果
	 */
	DrawPathToSpline(): number;
	/**
	 * 闭合路径
	 */
	PathMakeClosed(): void;
	/**
	 * 将路径转换为填充图案
	 * @param dPatternScale - 图案缩放比例
	 * @returns 转换结果
	 */
	DrawPathToHatch(dPatternScale: number): number;
	/**
	 * 绘制实体
	 * @param entity - 实体对象
	 * @returns 绘制结果
	 */
	DrawEntity(entity: McDbEntity): number;
	/**
  * 将 lIdIndex 转换成 McDbObject 对象
  * @param lIdIndex - 对象 ID
  * @returns 与 ID 对应的 McDbObject 对象，如果对象不存在则返回 null
  */
	ObjectIdToObject(lIdIndex: number): McDbObject | null;
	/**
	 * 克隆指定 ID 的 McDbObject 对象
	 * @param id - 对象 ID
	 * @returns 克隆后的 McDbObject 对象
	 */
	CloneMcDbObject(id: number): McDbObject;
	/**
	 * 将 lIdIndex 转换成 MdObjectImp 对象
	 * @param lIdIndex - 对象 ID
	 * @returns 与 ID 对应的 MdObjectImp 对象
	 */
	ObjectIdToMdObjectImp(lIdIndex: number): any;
	/**
	 * 销毁指定的 McRxObjectImp 对象
	 * @param pObjectImp - 待销毁的 McRxObjectImp 对象
	 */
	DestroyObject(pObjectImp: McRxObjectImp): void;
}
declare class McAppType {
	private imp;
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
	 * 创建 MxDraw 对象。
	 * @param width MxDraw 对象的宽度。
	 * @param height MxDraw 对象的高度。
	 * @param canvasId MxDraw 对象所在的 canvas 的 id。
	 * @param isWebgl2 是否使用 webgl2。
	 * @param mxObjectId MxDraw 对象的 id。
	 * @returns 返回创建的 McObject 对象。
	 */
	CreateMxCAD(width: number, height: number, canvasId: string, isWebgl2: boolean, mxObjectId: number): McObject;
	/**
	 * 销毁对象。
	 * @param pObject 要销毁的对象。
	 */
	DestroyObject(pObject: McRxObjectImp): void;
	/**
	 * 获取当前的 MxDraw 对象。
	 * @returns 返回当前的 McObject 对象。
	 */
	GetCurrentMxCAD(): McObject;
	/**
	 * 将 RGB 值转换为索引。
	 * @param red 红色值。
	 * @param green 绿色值。
	 * @param blue 蓝色值。
	 * @param bAutoNearest 是否自动获取最近的颜色值。
	 * @returns 返回转换后的索引值。
	 */
	mcedRGB2Index(red: number, green: number, blue: number, bAutoNearest?: boolean): number;
	/**
	 * 将对象 id 转换为 McDbObject 对象。
	 * @param lIdIndex 对象的 id。
	 * @returns 返回转换后的 McDbObject 对象，如果转换失败，则返回 null。
	 */
	ObjectIdToObject(lIdIndex: number): McDbObject | null;
	/**
	 * 创建克隆对象。
	 * @param clonobjImp 被克隆的对象。
	 * @returns 返回创建的 McDbObject 对象。
	 */
	CreateCloneObject(clonobjImp: any): McDbObject;
}
declare class MxCppType {
	/**
	 * MxCpp 程序集
	 */
	mxcadassemblyimp?: any;
	/**
	 * McAppType 实例
	 */
	App: McAppType;
	/**
	 * 创建新的 McCmColor 实例
	 * @returns {McCmColor} McCmColor 实例
	 */
	NewMcCmColor(): McCmColor;
	/**
	 * 获取上一次调用的结果
	 * @returns {number} 调用结果
	 */
	getCallResult(): number;
	/**
	 * 创建新的 McGePoint3d 实例
	 * @param {any} pt 点坐标
	 * @param {boolean} isDoc 是否为文档坐标
	 * @returns {McGePoint3d} McGePoint3d 实例
	 */
	NewMcGePoint3d(pt?: any, isDoc?: boolean): McGePoint3d;
	/**
	 * 创建新的 McGePoint3d 实例
	 * @param {number} x x 坐标
	 * @param {number} y y 坐标
	 * @param {number} z z 坐标
	 * @returns {McGePoint3d} McGePoint3d 实例
	 */
	NewMcGePoint3d2(x: number, y: number, z?: number): McGePoint3d;
}
/**
 * 表示一个直线对象。
 */
export declare class McDbLine extends McDbCurve {
	/**
	 * 构造函数。
	 * @param imp C++ 实现对象。
	 */
	constructor(imp?: any);
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
 * 表示一个圆形。
 */
export declare class McDbCircle extends McDbCurve {
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
}
/**
 * 多段线类
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
	addVertexAt(index: number, pt: McGePoint3d, bulge: number, startWidth: number, endWidth: number): boolean;
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
		val: number;
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
		ret: number;
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
}
/**
 * McDrawResbuf 类用于操作 AutoCAD 中的 resbuf 数据。
 */
export declare class McDrawResbuf extends McRxObject {
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
		ret: number;
	};
	/**
	 * 获取 resbuf 数据项中的 long 类型值。
	 * @param lItem 数据项索引。
	 * @returns 包含 long 类型值和返回值的对象。
	 */
	Atlong(lItem: number): {
		val: number;
		ret: number;
	};
	/**
	 * 获取 resbuf 数据项中的 McRxObject 对象。
	 * @param lItem 数据项索引。
	 * @returns 包含 long 类型值和返回值的对象。
	*/
	AtObject(lItem: number): {
		val: McRxObject | undefined;
		ret: number;
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
		ret: number;
	};
	/**
	 * 获取 resbuf 数据项中的字符串。
	 * @param lItem 数据项索引。
	 * @returns 包含字符串和返回值的对象。
	 */
	AtString(lItem: number): {
		val: string;
		ret: number;
	};
	/**
	 * 获取 resbuf 数据项中的点坐标。
	 * @param lItem 数据项索引。
	 * @returns 包含点坐标和返回值的对象。
	 */
	AtPoint(lItem: number): {
		val: McGePoint3d;
		ret: number;
	};
	/**
	 * 获取 resbuf 数据项中的数据类型。
	 * @returns 数据类型。
	 */
	ItemDataType(): number;
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
	Addlong(val: number, lDataType?: number): number;
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
	AddString(str: string, lDataType?: number): number;
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
}
declare enum McObjectIdType {
	kMxCAD = 0,
	kMxDraw = 1,
	kInvalid = 2
}
/**
 * McObjectId类表示一个模型对象的唯一标识符。
 */
export declare class McObjectId {
	id: number;
	type: McObjectIdType;
	/**
	 * 创建一个McObjectId实例。
	 * @param id 对象的唯一标识符。
	 * @param type 对象的类型。
	 */
	constructor(id: number, type: McObjectIdType);
	/**
	* id是否有效.
	*/
	isValid(): boolean;
	/**
	 * 删除对象。
	 */
	erase(): void;
	/**
	 * 返回MxCAD对象。
	 */
	getMcDbObject(): McDbObject | null;
	/**
	 * 返回id指向的对象名称.
	 */
	getObjectName(): string;
	/**
	 * 返回MxDraw对象。
	 */
	getMxDbEntity(): MxDbEntity | null;
}
declare class McDrawUtilityClass {
	private imp;
	constructor();
	/**
	 * eraseEntity 方法用于删除指定的图形对象
	 * @param lId - 需要删除的图形对象的 ID
	 * @returns 返回一个布尔值，表示是否删除成功
	 */
	eraseEntity(lId: number): boolean;
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
	 */
	findEntAtPoint(dX: number, dY: number, dZ: number, dSearhRange?: number, filter?: McDrawResbuf | null): McObjectId;
	/**
	 * selectEnt 方法用于在指定位置选择图形对象
	 * @param strPrompt - 选择时的提示信息，默认为 null（表示不显示提示信息）
	 * @param filter - 过滤器，用于过滤选择到的图形对象，默认为 null（表示不进行过滤）
	 * @returns 返回一个 Promise，其中包含选择到的图形对象的 ID 数组
	 */
	selectEnt(strPrompt?: string, filter?: McDrawResbuf | null): Promise<McObjectId[]>;
	private init;
}
export declare let McDrawUtility: McDrawUtilityClass;
export declare class McDbBlockTableRecordIterator extends McRxObject {
	constructor(imp: any);
	start(atBeginning?: boolean, skipDeleted?: boolean): void;
	done(): boolean;
	getEntityId(): McObjectId;
	step(forward?: boolean, skipDeleted?: boolean): void;
}
export declare class McDbBlockTableRecord extends McDbObject {
	constructor(imp?: any);
	appendAcDbEntity(pEntity: McDbEntity): McObjectId;
	newIterator(atBeginning?: boolean, skipDeleted?: boolean): McDbBlockTableRecordIterator;
	get origin(): McGePoint3d;
	set origin(origin: McGePoint3d);
}
export declare class McDbBlockTableIterator extends McRxObject {
	constructor(imp: any);
	start(atBeginning?: boolean, skipDeleted?: boolean): void;
	done(): boolean;
	getRecord(): McDbBlockTableRecord;
	step(forward?: boolean, skipDeleted?: boolean): void;
}
export declare class McDbBlockTable extends McDbObject {
	constructor(imp?: any);
	getAt(name: string): McDbBlockTableRecord;
	has(name: string): boolean;
	newIterator(atBeginning?: boolean, skipDeleted?: boolean): McDbBlockTableIterator;
	add(pRecord: McDbBlockTableRecord): number;
}
/** 绘制线段
 * */
export declare function drawLine(): Promise<void>;
export declare function drawMText(): Promise<void>;
/**绘制多义线段*/
export declare function drawPolyLine(): Promise<void>;
export declare function drawPolygon(): Promise<void>;
export declare function drawArc(): Promise<void>;
export declare function drawEllipticalArc(): void;
/** 绘制文字 */
export declare function mxErase(): Promise<void>;
declare const getWasmURL: (wasmURL: string, baseURL?: string | URL) => string;
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
export declare class MxDraw3d implements MxDraw3dConfig {
	[x: string]: any;
	/** 监听wasm 文件加载成功事件 */
	static onloadWasmMxDraw3dModel: (mxDraw3d: MxDraw3d) => void;
	canvas: HTMLCanvasElement;
	constructor(options: MxDraw3dConfig);
}
export interface MxDraw3d extends WasmConfig {
	canvas: HTMLCanvasElement;
	_malloc: (len: number) => Buffer;
	HEAPU8: {
		set(dataArray: Uint8Array, dataBuffer: Buffer): void;
	};
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
	openFromMemory(fileName: string, dataBuffer: Buffer, len: number, is?: boolean): boolean;
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
	/** 更新画布大小 */
	updateCanvasSize: () => void;
	/** 通过浏览器器File对象打开3D文件
	 * @param file File对象
	 */
	open3DFile: (file: File) => void;
}
export declare let MxCpp: MxCppType;
export declare function loadMxCADassembly(call: (MxCpp: MxCppType) => void, locateFile?: (wasmURL: string, baseURL?: string | URL) => string, wasmBinary?: ArrayBuffer): Promise<void>;
export declare function loadMxCADassembly3d(config: MxDraw3dConfig, call?: (mxDraw3d: MxDraw3d) => void): Promise<MxDraw3d>;

export {};
`;let g=!0;const Q={...m,enhanceApp(e){const{app:r}=e;m.enhanceApp(e),r.mixin({async mounted(){g&&(g=!1,await i(()=>import("./chunks/mxdraw.es.309bc154.js"),[]).then(n=>{x("mxdraw",n.default||n)}),await i(()=>import("./chunks/index.e2c40d35.js"),["assets/chunks/index.e2c40d35.js","assets/chunks/framework.42a71e76.js","assets/chunks/commonjsHelpers.725317a4.js"]).then(n=>{x("mxcad",n.default||n)}))}}),r.use($,{defaultDirection:"column",ms:300,handleError(n){},onMonacoCreated(n){n.languages.typescript.typescriptDefaults.addExtraLib(`
          declare module 'mxdraw' { 
            ${q} 
          }
          `,"mxdraw"),n.languages.typescript.typescriptDefaults.addExtraLib(`
          declare module 'mxcad' { 
            ${Z} 
          }
          `,"mxcad")}})}};function M(e){if(e.extends){const r=M(e.extends);return{...r,...e,async enhanceApp(n){r.enhanceApp&&await r.enhanceApp(n),e.enhanceApp&&await e.enhanceApp(n)}}}return e}const a=M(Q),ee=H({name:"VitePressApp",setup(){const{site:e}=O();return V(()=>{N(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),L(),I(),k(),a.setup&&a.setup(),()=>_(a.Layout)}});async function re(){const e=te(),r=ne();r.provide(T,e);const n=v(e.route);return r.provide(D,n),r.component("Content",C),r.component("ClientOnly",R),Object.defineProperties(r.config.globalProperties,{$frontmatter:{get(){return n.frontmatter.value}},$params:{get(){return n.page.value.params}}}),a.enhanceApp&&await a.enhanceApp({app:r,router:e,siteData:w}),{app:r,router:e,data:n}}function ne(){return P(ee)}function te(){let e=l,r;return S(n=>{let t=A(n);return e&&(r=t),(e||r===t)&&(t=t.replace(/\.js$/,".lean.js")),l&&(e=!1),i(()=>import(t),[])},a.NotFound)}l&&re().then(({app:e,router:r,data:n})=>{r.go().then(()=>{f(r.route,n.site),e.mount("#app")})});export{ae as A,se as O,le as P,de as R,re as createApp,X as v};
