<script setup lang="ts">
interface Props {
  title: string
  collapsed?: boolean
  contentId: string
}

withDefaults(defineProps<Props>(), {
  collapsed: false,
})

const emit = defineEmits<{
  'update:collapsed': [value: boolean]
}>()
</script>

<template>
  <header
    class="grid grid-cols-[minmax(0,1fr)_2.5rem] items-center border-b border-slate-200 bg-slate-50"
  >
    <h2 class="px-4 py-3 text-sm font-semibold text-slate-800">
      <slot name="title">{{ title }}</slot>
    </h2>
    <button
      type="button"
      class="flex h-full min-h-11 items-center justify-center text-slate-600 transition hover:bg-slate-100 focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-blue-600"
      :aria-label="collapsed ? 'エリアを展開' : 'エリアを折りたたむ'"
      :aria-controls="contentId"
      :aria-expanded="!collapsed"
      @click="emit('update:collapsed', !collapsed)"
    >
      <span
        class="ftv-area__chevron"
        :class="{ 'ftv-area__chevron--closed': collapsed }"
        aria-hidden="true"
      />
    </button>
  </header>
</template>

<style scoped>
.ftv-area__chevron {
  width: 0.55rem;
  height: 0.55rem;
  border-right: 1.5px solid currentColor;
  border-bottom: 1.5px solid currentColor;
  transform: translateY(-0.15rem) rotate(45deg);
  transition: transform 150ms ease;
}

.ftv-area__chevron--closed {
  transform: translateY(0.1rem) rotate(-45deg);
}
</style>
