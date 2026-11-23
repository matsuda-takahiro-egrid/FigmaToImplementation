<script setup lang="ts">
import { useId } from 'vue'
import FtvAreaHeader from '@/components/figma-to-vue/section/FtvAreaHeader.vue'

interface Props {
  title: string
  collapsed?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  collapsed: false,
})

const emit = defineEmits<{
  'update:collapsed': [value: boolean]
}>()

const areaId = useId()
</script>

<template>
  <section class="overflow-hidden rounded-lg border border-slate-200 bg-white">
    <FtvAreaHeader
      :title="title"
      :collapsed="props.collapsed"
      :content-id="areaId"
      @update:collapsed="emit('update:collapsed', $event)"
    >
      <template #title>
        <slot name="title">{{ title }}</slot>
      </template>
    </FtvAreaHeader>

    <div :id="areaId" v-show="!props.collapsed">
      <slot />
    </div>
  </section>
</template>
