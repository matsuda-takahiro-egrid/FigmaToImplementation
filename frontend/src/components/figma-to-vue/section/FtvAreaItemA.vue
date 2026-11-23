<script setup lang="ts">
import FtvAreaItem, { type FtvAreaItemProps } from '@/components/figma-to-vue/base/FtvAreaItem.vue'

interface Props extends FtvAreaItemProps {
  label?: string
}

withDefaults(defineProps<Props>(), {
  label: '項目A',
  selectable: true,
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
        <div class="flex flex-col gap-1">
          <span class="font-medium">入力値</span>
          <input
            type="text"
            class="h-10 min-w-0 rounded-md border border-slate-300 bg-white px-3"
            placeholder="入力してください"
          />
        </div>
      </slot>
    </template>
    <template #right>
      <slot name="right">
        <span class="rounded bg-emerald-50 px-2 py-1 text-emerald-700">入力可能</span>
      </slot>
    </template>
    <template #details>
      <slot name="details">項目Aの詳細コンテンツ</slot>
    </template>
  </FtvAreaItem>
</template>
