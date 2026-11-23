# FtvArea

## Overview

`FtvArea` is the titled, collapsible outer frame. Its child item components render an aside, left and right content, and optional expandable details. The header and item components are kept separate so the page can compose and customize each row independently.

## Components

- `base/FtvArea.vue`: shared border, header, and whole-area collapse.
- `base/FtvAreaItem.vue`: shared row layout, selection, and details accordion.
- `section/FtvAreaHeader.vue`: title and whole-area collapse control.
- `section/FtvAreaItemA.vue`, `FtvAreaItemB.vue`, `FtvAreaItemC.vue`: independently editable item content, built on the shared row.

## Usage

```vue
<FtvArea v-model:collapsed="collapsed" title="ヘッダー文言">
  <FtvAreaItemA v-model:selected="itemASelected" v-model:expanded="itemAExpanded" />
  <FtvAreaItemB v-model:selected="itemBSelected" v-model:expanded="itemBExpanded" disabled />
  <FtvAreaItemC v-model:selected="itemCSelected" v-model:expanded="itemCExpanded" />
</FtvArea>
```

`FtvAreaItemA`, `FtvAreaItemB`, and `FtvAreaItemC` accept `aside`, `left`, `right`, and `details` named slots to override their default content with arbitrary HTML or Vue components. Their default content can also be edited in the corresponding component file. `selected` and `expanded` are booleans controlled with `v-model`; `selectable`, `disabled`, and `expandable` adjust row behavior.

To add another item, create a sibling component in `section/` using the shared `base/FtvAreaItem.vue`, then add it as a child of `FtvArea`.
