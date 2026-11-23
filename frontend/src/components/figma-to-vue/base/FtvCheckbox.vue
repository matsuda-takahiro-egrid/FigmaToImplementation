<script setup lang="ts">
interface Props {
  modelValue?: boolean
  disabled?: boolean
}

withDefaults(defineProps<Props>(), {
  modelValue: false,
  disabled: false,
})

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
}>()

function onChange(event: Event) {
  emit('update:modelValue', (event.target as HTMLInputElement).checked)
}
</script>

<template>
  <label class="inline-flex h-5 w-[83px] max-w-full items-center gap-3 text-[#09101D]">
    <input
      type="checkbox"
      :checked="modelValue"
      :disabled="disabled"
      class="relative m-0 box-border h-4 w-4 shrink-0 appearance-none rounded-[1.5px] border border-[#E86C00] bg-transparent checked:rounded-[2px] checked:border-0 checked:bg-[#E86C00] checked:after:absolute checked:after:left-[5px] checked:after:top-[2px] checked:after:h-[8px] checked:after:w-[5px] checked:after:rotate-45 checked:after:border-b-2 checked:after:border-r-2 checked:after:border-white checked:after:content-[''] checked:disabled:bg-[#E86C00]/50 disabled:border-[#E86C00]/50"
      @change="onChange"
    />
    <span>Checkbox</span>
  </label>
</template>
