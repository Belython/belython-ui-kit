import { SVGAttributes } from 'vue';
export interface IProps {
    /**
     * Name of the icon
     * @type SVGAttributes['name']
     * @default ''
     * @example
     * <Icon name="icon" />
     */
    name: SVGAttributes['name'];
    size?: SVGAttributes['width'] | SVGAttributes['height'];
    viewBox?: SVGAttributes['viewBox'];
}
declare const _default: import('vue').DefineComponent<IProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<IProps> & Readonly<{}>, {
    size: string | number;
    name: SVGAttributes["name"];
    viewBox: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
export default _default;
