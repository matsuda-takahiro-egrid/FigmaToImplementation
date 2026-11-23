<script setup lang="ts">
import { ref } from 'vue'
import FtvCheckbox from '@/components/figma-to-vue/base/FtvCheckbox.vue'
import FtvArea from '@/components/figma-to-vue/base/FtvArea.vue'
import FtvInput from '@/components/figma-to-vue/base/FtvInput.vue'
import FtvAreaItemA from '@/components/figma-to-vue/section/FtvAreaItemA.vue'
import FtvAreaItemB from '@/components/figma-to-vue/section/FtvAreaItemB.vue'
import FtvAreaItemC from '@/components/figma-to-vue/section/FtvAreaItemC.vue'

const defaultValue = ref('')
const disabledValue = ref('')
const selected = ref(true)
const unselected = ref(false)
const areaItemASelected = ref(false)
const areaItemBSelected = ref(true)
const areaItemCSelected = ref(false)
const areaItemAExpanded = ref(true)
const areaItemBExpanded = ref(false)
const areaItemCExpanded = ref(false)
const areaCollapsed = ref(false)
</script>

<template>
  <main class="min-h-screen bg-slate-100 px-6 py-10">
    <div class="mx-auto flex w-full max-w-5xl flex-col gap-10">
      <section class="flex flex-col gap-4">
        <h1 class="text-base font-medium text-slate-700">FtvCheckbox</h1>
        <div class="flex flex-col gap-4">
          <section class="flex flex-col gap-2">
            <h2 class="text-sm font-medium text-slate-700">Selected</h2>
            <FtvCheckbox v-model="selected" />
            <p class="text-sm text-slate-600">選択状態: {{ selected }}</p>
          </section>

          <section class="flex flex-col gap-2">
            <h2 class="text-sm font-medium text-slate-700">Selected (disabled)</h2>
            <FtvCheckbox :model-value="true" disabled />
          </section>

          <section class="flex flex-col gap-2">
            <h2 class="text-sm font-medium text-slate-700">UnSelected</h2>
            <FtvCheckbox v-model="unselected" />
            <p class="text-sm text-slate-600">選択状態: {{ unselected }}</p>
          </section>

          <section class="flex flex-col gap-2">
            <h2 class="text-sm font-medium text-slate-700">UnSelected (disabled)</h2>
            <FtvCheckbox :model-value="false" disabled />
          </section>
        </div>
      </section>

      <section class="flex flex-col gap-4">
        <h2 class="text-base font-medium text-slate-700">FtvInput</h2>
        <section class="flex w-[200px] flex-col gap-2">
          <h3 class="text-sm font-medium text-slate-700">Default</h3>
          <FtvInput v-model="defaultValue" />
          <p class="text-sm text-slate-600">入力値: {{ defaultValue || '(未入力)' }}</p>
        </section>

        <fieldset class="flex flex-col gap-2" disabled>
          <legend class="text-sm font-medium text-slate-700">Disabled</legend>
          <FtvInput v-model="disabledValue" />
          <p class="text-sm text-slate-600">入力値: {{ disabledValue || '(未入力)' }}</p>
        </fieldset>
      </section>

      <section class="flex flex-col gap-4">
        <h2 class="text-base font-medium text-slate-700">FtvArea</h2>
        <FtvArea v-model:collapsed="areaCollapsed" title="ヘッダー文言">
          <FtvAreaItemA
            v-model:selected="areaItemASelected"
            v-model:expanded="areaItemAExpanded"
            label="項目A: 基本情報"
          >
            <template #left>
              <div class="flex flex-col gap-1">
                <span class="font-medium">入力値</span>
                <FtvInput v-model="defaultValue" />
              </div>
            </template>
            <template #details>
              <p>項目Aの内容は独立したコンポーネント内で編集できます。</p>
            </template>
          </FtvAreaItemA>

          <FtvAreaItemB
            v-model:selected="areaItemBSelected"
            v-model:expanded="areaItemBExpanded"
            disabled
            label="項目B: 確認済み"
          />

          <FtvAreaItemC
            v-model:selected="areaItemCSelected"
            v-model:expanded="areaItemCExpanded"
            label="項目C: 補足"
          />
        </FtvArea>
      </section>
    </div>
  </main>
</template>
