<template>
  <div :class="$style.Wrapper">
  <VButton
      size="small"
      disabled
  >
    ABOBA
  </VButton>
  <VButton>
    ABOBA
  </VButton>
  <VButton
      size="large"
  >
    ABOBA
  </VButton>
  </div>
</template>

<script setup lang="ts">
import { VButton } from '@/components';

</script>

<style module lang="scss">
.Wrapper {
  display: flex;
  flex-direction: column;

  * {
    margin: 20px auto;
  }
}
</style>
