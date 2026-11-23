<script setup lang="ts">
import FtvAreaItem, { type FtvAreaItemProps } from '@/components/figma-to-vue/base/FtvAreaItem.vue'

interface Props extends FtvAreaItemProps {
  label?: string
}

withDefaults(defineProps<Props>(), {
  label: '項目B',
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
        <p class="font-medium">確認済みの項目です。</p>
      </slot>
    </template>
    <template #right>
      <slot name="right">
        <div class="flex items-center gap-2">
          <span class="h-2 w-2 rounded-full bg-blue-500" />
          <span>処理済み</span>
        </div>
      </slot>
    </template>
    <template #details>
      <slot name="details">項目Bの詳細コンテンツ</slot>
    </template>
  </FtvAreaItem>
</template>
