# UI Component Design Analysis

## 目的

指定されたPNG、SVG、またはその他のUIデザイン資料を解析し、実装可能なコンポーネント設計図を作成します。

このフェーズではソースコードを変更せず、設計図の作成だけを行います。

## 入力

- 対象コンポーネント名：`{{COMPONENT_NAME}}`
- 対応する状態またはバリアント：`{{COMPONENT_STATES}}`
- デザイン資料：
  - `{{DESIGN_FILE_1}}`
  - `{{DESIGN_FILE_2}}`
  - `{{DESIGN_FILE_N}}`
- 設計図の出力先：
  - `{{DESIGN_SPEC_OUTPUT_PATH}}`

例：

```text
対象コンポーネント名：FtvInput
対応する状態：Default, Disabled
デザイン資料：
- figma/components/input/default.svg
- figma/components/input/default.png
- figma/components/input/disabled.svg
- figma/components/input/disabled.png
設計図の出力先：
- docs/component-specs/FtvInput.md
```

## 分析方針

以下の優先順位で情報を取得してください。

1. SVGのXML属性
2. SVG内の寸法、座標、塗り、枠線、不透明度
3. PNGの視覚的な比較
4. プロジェクト内の既存パターン

推測で値を確定しないでください。判断できない項目は必ず「未確認」と記載してください。

## 調査項目

対応する状態ごとに、必要な項目を調査してください。

- Width
- Height
- Background Color
- Border Color
- Border Width
- Border Radius
- Padding
- Margin
- Font Family
- Font Size
- Font Weight
- Line Height
- Letter Spacing
- Text Color
- Icon、影、フォーカス、ホバーなど必要な装飾
- 状態間の差分
- レスポンシブまたは親要素への追従条件

必要に応じてSVGの以下を確認してください。

- `<svg>` の `width`、`height`、`viewBox`
- `<rect>` の座標、サイズ、角丸、塗り、枠線
- `<text>` またはアウトライン化されたパス
- `fill`、`stroke`、`stroke-width`、`opacity`
- 要素間の配置と余白
- 回転、変形、クリッピング

## 設計図の出力形式

`{{DESIGN_SPEC_OUTPUT_PATH}}` に、以下の構造でMarkdownを作成してください。

```markdown
# {{COMPONENT_NAME}} Design Specification

## Component Overview

- Purpose:
- Supported states:
- Base HTML element:
- Props or variant candidates:
- Data or interaction behavior:

## States

| State | Purpose |
|---|---|
| {{STATE_1}} | {{DESCRIPTION}} |
| {{STATE_2}} | {{DESCRIPTION}} |

## Design Properties

| Property | {{STATE_1}} | {{STATE_2}} |
|---|---|---|
| Width | | |
| Height | | |
| Background | | |
| Border Color | | |
| Border Width | | |
| Border Radius | | |
| Padding | 未確認 | 未確認 |
| Font Family | 未確認 | 未確認 |
| Font Size | 未確認 | 未確認 |
| Font Weight | 未確認 | 未確認 |
| Line Height | 未確認 | 未確認 |
| Text Color | 未確認 | 未確認 |

## Facts Confirmed by SVG

確定できる事実だけを列挙します。

## Facts Confirmed by PNG

視覚的に確認できる比較事項を列挙します。

## State Differences

状態間で異なる項目だけを列挙します。

## Unconfirmed Items

判断できない項目を一覧化します。

推測値を確定事項として記載しません。

## Temporary Settings for Implementation

実装を進めるために仮設定が必要な項目を明示します。

各項目について以下を記載します。

- 仮設定の値
- 仮設定である理由
- 確認が必要な根拠資料
- 後で置き換えるべき箇所

## Implementation Notes

- 必須再現項目
- 仮設定項目
- 追加してはいけない機能
- 幅基準とレスポンシブ条件
- 比較確認が必要な項目

## Out of Scope

デザイン資料に存在しない機能や状態を記載します。
```

## 禁止事項

- 実装を行わない
- SVGをそのまま画面表示する提案をしない
- 未確認項目を推測で確定しない
- デザイン資料にない機能や状態を追加しない
- 既存ソースコードを変更しない
- 設計図以外のファイルを作成しない

## 完了条件

- 対応するすべての状態が設計図に含まれている
- 確定情報と未確認情報が明確に分離されている
- 状態間の差分が整理されている
- 仮設定が必要な項目が明示されている
- 実装フェーズに渡せる構造になっている
