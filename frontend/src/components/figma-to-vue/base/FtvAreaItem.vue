<script setup lang="ts">
import { useId } from 'vue'

export interface FtvAreaItemProps {
  selected: boolean
  expanded: boolean
  selectable?: boolean
  disabled?: boolean
  expandable?: boolean
}

interface Props extends FtvAreaItemProps {
  label: string
}

withDefaults(defineProps<Props>(), {
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

const itemId = useId()
</script>

<template>
  <article
    class="ftv-area__row grid border-b border-slate-200 last:border-b-0"
    :class="{ 'ftv-area__row--expanded': expanded }"
  >
    <aside class="ftv-area__aside flex min-w-0 items-center gap-3 bg-slate-50 px-3 py-3">
      <span class="flex h-4 w-4 shrink-0 items-center justify-center">
        <input
          v-if="selectable"
          :id="`${itemId}-checkbox`"
          type="checkbox"
          class="m-0 h-4 w-4 accent-orange-600 disabled:cursor-not-allowed"
          :checked="selected"
          :disabled="disabled"
          :aria-label="`${label}を選択`"
          @change="emit('update:selected', ($event.target as HTMLInputElement).checked)"
        />
      </span>
      <div class="min-w-0 flex-1">
        <slot name="aside" />
      </div>
    </aside>

    <div class="ftv-area__left min-w-0 px-4 py-3 text-sm text-slate-700">
      <slot name="left" />
    </div>

    <div class="ftv-area__arrow flex items-center justify-center text-slate-400" aria-hidden="true">
      <svg viewBox="0 0 16 16" class="h-4 w-4 fill-current">
        <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
      </svg>
    </div>

    <div class="ftv-area__right min-w-0 px-4 py-3 text-sm text-slate-700">
      <slot name="right" />
    </div>

    <button
      type="button"
      class="ftv-area__toggle flex min-h-11 items-center justify-center text-slate-600 transition hover:bg-slate-50 focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-blue-600 disabled:cursor-not-allowed disabled:text-slate-300"
      :disabled="!expandable"
      :aria-label="expanded ? '詳細を閉じる' : '詳細を開く'"
      :aria-expanded="expanded"
      :aria-controls="`${itemId}-details`"
      @click="emit('update:expanded', !expanded)"
    >
      <span
        class="ftv-area__chevron"
        :class="{ 'ftv-area__chevron--closed': !expanded }"
        aria-hidden="true"
      />
    </button>

    <div
      :id="`${itemId}-details`"
      v-show="expanded"
      class="ftv-area__details min-w-0 border-t border-slate-100 bg-slate-50/70 px-4 py-3 text-sm text-slate-700"
    >
      <slot name="details" />
    </div>
  </article>
</template>

<style scoped>
.ftv-area__row {
  grid-template-columns: minmax(8rem, 0.75fr) minmax(0, 1fr) 2.5rem minmax(0, 1fr) 2.5rem;
  grid-template-areas:
    'aside left arrow right toggle'
    '. details details details toggle';
}

.ftv-area__row--expanded {
  grid-template-areas:
    'aside left arrow right toggle'
    'aside details details details toggle';
}

.ftv-area__aside {
  grid-area: aside;
}

.ftv-area__left {
  grid-area: left;
}

.ftv-area__arrow {
  grid-area: arrow;
}

.ftv-area__right {
  grid-area: right;
}

.ftv-area__toggle {
  grid-area: toggle;
}

.ftv-area__details {
  grid-area: details;
}

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

@media (max-width: 640px) {
  .ftv-area__row,
  .ftv-area__row--expanded {
    grid-template-columns: minmax(0, 1fr) 2.5rem;
    grid-template-areas:
      'aside toggle'
      'left toggle'
      'right toggle'
      'details toggle';
  }

  .ftv-area__aside {
    border-bottom: 1px solid rgb(226 232 240);
  }

  .ftv-area__arrow {
    display: none;
  }

  .ftv-area__left,
  .ftv-area__right {
    padding-block: 0.75rem;
  }
}
</style>
