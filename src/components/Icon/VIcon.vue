<script setup lang="ts">
import type { SVGAttributes } from 'vue';

import icons from '@/assets/icons/mdi';

export interface IProps {
  /**
   * Name of the icon
   * @type SVGAttributes['name']
   * @default ''
   * @example
   * <Icon name="icon" />
   */
  name: SVGAttributes['name']

  /**
   * Size of the icon
   * @type SVGAttributes['width'] | SVGAttributes['height']
   * @default 24
   * @example
   * <Icon size="24" />
   */;
  size?: SVGAttributes['width'] | SVGAttributes['height']

  /**
   * Viewbox of the icon
   * @type SVGAttributes['viewBox']
   * @default '0 0 24 24'
   * @example
   * <Icon viewBox="0 0 24 24" />
   */;
  viewBox?: SVGAttributes['viewBox']
}
const props = withDefaults(defineProps<IProps>(), {
    name: '',
    size: 24,
    viewBox: '0 0 24 24',
});
</script>

<template>
  <svg
      :class="$style.VIcon"
      :height="props.size"
      :viewBox="props.viewBox"
      :width="props.size"
  >
    <path :d="icons[props.name]" />
  </svg>
</template>

<style module lang="scss">
.VIcon {
    path {
        fill: currentColor;
    }
}
</style>
