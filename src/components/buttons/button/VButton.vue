<template>
    <button
        :disabled="disabled"
        :class="[$style.VButton, classes]"
        @click="$emit('click')"
    >
        <slot name="left-icon">
            <VIcon
                v-if="nameIcon"
                :name="nameIcon"
                :size="sizeIcon"
            />
        </slot>

        <slot />

        <slot name="right-icon">
            <VIcon
                v-if="nameIcon"
                :name="nameIcon"
                :size="sizeIcon"
            />
        </slot>
    </button>
</template>

<script lang="ts" setup="context">
import {
    computed,
    useCssModule,
} from 'vue';
import { Props } from './interface';
import VIcon from '@/components/Icon/VIcon.vue';

const props = withDefaults(defineProps<Props>(), {
    variant: 'default',
    loading: false,
    disabled: false,
    prependIcon: '',
    appendIcon: '',
    icon: false,
    size: 'medium',
    height: '',
    block: false,
    color: 'primary',
    nameIcon: '',
    sizeIcon: '',
});

defineEmits(['click']);

const $style = useCssModule();

const classes = computed(() => ({
    [$style[`_${props.size}`]]: props.size,
    [$style[`_${props.color}`]]: props.color,
    [$style._disabled]: props.disabled,
}));

</script>

<style module lang="scss">
.VButton {
    width: max-content;
    border-radius: 4px;
    color: $white;
    transition: all .3s ease;

    &:hover {
        cursor: pointer;
    }

    &._disabled {
        cursor: default;
        pointer-events: none;
    }

    &._small {
        height: 24px;
        padding: 2px 8px;
    }

    &._medium {
        height: 32px;
        padding: 6px 12px;
    }

    &._large {
      height: 40px;
      padding: 8px 16px;
    }

    &._primary {
        background-color: $Primary100;

        &:hover {
            background-color: $Primary200;
        }

        &:active {
            background-color: $Primary300;
        }

        &:focus {
            border: 1px solid $black;
        }

        &:disabled {
            background-color: $Disabled100;
            color: $Disabled0;
        }
    }

    &._secondary {
        background: #a7a7a7;
    }
}
</style>
