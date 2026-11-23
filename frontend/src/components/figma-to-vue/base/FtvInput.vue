<script setup lang="ts">
interface Props {
  modelValue: string
  disabled?: boolean
}

interface Emits {
  'update:modelValue': [value: string]
}

withDefaults(defineProps<Props>(), {
  modelValue: '',
  disabled: false,
})

const emit = defineEmits<Emits>()

function onInput(event: Event) {
  emit('update:modelValue', (event.target as HTMLInputElement).value)
}
</script>

<template>
  <input
    :value="modelValue"
    :disabled="disabled"
    type="text"
    class="box-border h-12 w-[320px] max-w-full min-w-0 rounded-[7.5px] border border-[#858C94] bg-white px-4 py-0 outline-none disabled:bg-[#F4F6F9]"
    @input="onInput"
  />
</template>
