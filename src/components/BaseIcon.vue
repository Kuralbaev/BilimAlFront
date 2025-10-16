<template>
  <Component :is="iconElement" v-bind="$attrs" />
</template>

<script setup lang="ts">
import { computed, defineAsyncComponent } from 'vue'

const props = defineProps<{
  name: string
}>()

const iconElement = computed(() => {
  const name = props.name
  return defineAsyncComponent(() => import(`./icons/${name}.vue`))
})
</script>
