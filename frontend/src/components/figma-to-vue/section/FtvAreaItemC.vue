<script setup lang="ts">
import FtvAreaItem, { type FtvAreaItemProps } from '@/components/figma-to-vue/base/FtvAreaItem.vue'

interface Props extends FtvAreaItemProps {
  label?: string
}

withDefaults(defineProps<Props>(), {
  label: '項目C',
  selectable: false,
  disabled: false,
  expandable: true,
})

const emit = defineEmits<{
  'update:selected': [value: boolean]
  'update:expanded': [value: boolean]
}>()

defineSlots<{
  aside?: () => unknown
  left?: () => unknown
  right?: () => unknown
  details?: () => unknown
}>()
</script>

<template>
  <FtvAreaItem
    :label="label"
    :selected="selected"
    :expanded="expanded"
    :selectable="selectable"
    :disabled="disabled"
    :expandable="expandable"
    @update:selected="emit('update:selected', $event)"
    @update:expanded="emit('update:expanded', $event)"
  >
    <template #aside><slot name="aside">{{ label }}</slot></template>
    <template #left>
      <slot name="left">
        <p class="text-slate-500">選択チェックボックスのない項目です。</p>
      </slot>
    </template>
    <template #right>
      <slot name="right">
        <a href="#" class="text-blue-700 underline" @click.prevent>詳細を見る</a>
      </slot>
    </template>
    <template #details>
      <slot name="details">項目Cの詳細コンテンツ</slot>
    </template>
  </FtvAreaItem>
</template>
