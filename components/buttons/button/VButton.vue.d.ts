import { Props } from './interface';
declare function __VLS_template(): {
    slots: {
        "left-icon"?(_: {}): any;
        default?(_: {}): any;
        "right-icon"?(_: {}): any;
    };
    refs: {};
    attrs: Partial<{}>;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    click: (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{
    onClick?: ((...args: any[]) => any) | undefined;
}>, {
    size: import('./types').ButtonSize;
    variant: import('./types').ButtonType;
    color: import('./types').ButtonColor;
    loading: boolean;
    disabled: boolean;
    prependIcon: string;
    appendIcon: string;
    icon: boolean;
    height: string;
    block: boolean;
    nameIcon: string;
    sizeIcon: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
