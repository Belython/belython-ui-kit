import { ButtonColor, ButtonSize, ButtonType } from './types.ts';

export interface Props {
    /**
     * Variant of the Button
     * @type  { 'default' | 'text' | 'outline' | 'ghost'}
     * @default 'default'
     * @example
     * <Button variant="default" />
     */
    variant?: ButtonType

    /**
     * Color of the Button
     * @type  { 'primary' | 'secondary' | 'danger'}
     * @default 'primary'
     * @example
     * <Button color="primary" />
     */
    color?: ButtonColor

    /**
     * Loading state of the Button
     * @type { boolean }
     * @default false
     * @example
     * <Button loading />
     */
    loading?: boolean

    /**
     * Disabled state of the Button
     * @type { boolean }
     * @default false
     * @example
     * <Button disabled />
     */
    disabled?: boolean

    /**
     * Prepend icon of the Button
     * @type { string }
     * @default ''
     * @example
     * <Button prependIcon="icon" />
     */
    prependIcon?: string

    /**
     * Append icon of the Button
     * @type { string }
     * @default ''
     * @example
     * <Button appendIcon="icon" />
     */
    appendIcon?: string

    /**
     * Only icon state of the Button
     * @type { boolean }
     * @default false
     * @example
     * <Button icon />
     */
    icon?: boolean

    /**
     * Size of the Button
     * @type { 'small' | 'medium' | 'large' }
     * @default 'medium'
     * @example
     * <Button size="small" />
     */
    size?: ButtonSize

    /**
     * Height of the Button
     * @type { string }
     * @default ''
     * @example
     * <Button height="40" />
     */
    height?: string

    /**
     * Block state of the Button
     * @type { boolean }
     * @default false
     * @example
     * <Button block />
     */
    block?: boolean


    nameIcon?: string

    sizeIcon?: string
}
