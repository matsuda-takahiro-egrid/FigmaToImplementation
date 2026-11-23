# UI Component Design and Implementation Prompts

このディレクトリには、画像・SVGからVueなどのUIコンポーネントを生成する汎用プロンプトを配置します。

作業は設計フェーズと実装フェーズに分けます。

## ファイル

- [01-ui-component-design.md](./01-ui-component-design.md)
- [02-ui-component-implementation.md](./02-ui-component-implementation.md)

## 実行手順

設計フェーズを実行します。

```text
01-ui-component-design.mdの指示に従ってください。

対象コンポーネント名：
- {{COMPONENT_NAME}}

対応する状態：
- {{COMPONENT_STATES}}

デザイン資料：
- {{DESIGN_FILE_1}}
- {{DESIGN_FILE_2}}

設計図の出力先：
- {{DESIGN_SPEC_OUTPUT_PATH}}
```

設計図を確認し、未確認項目や仮設定項目を承認します。

承認後、実装フェーズを実行します。

```text
02-ui-component-implementation.mdの指示に従ってください。

設計図：
- {{DESIGN_SPEC_PATH}}

デザイン資料：
- {{DESIGN_FILE_1}}
- {{DESIGN_FILE_2}}

実装先：
- {{COMPONENT_OUTPUT_PATH}}

表示確認画面：
- {{PREVIEW_OUTPUT_PATH}}
```

## レビューポイント

設計フェーズの完了後、実装前に以下を確認します。

- 確定したデザイン値
- 未確認項目
- 仮設定項目
- 対応する状態
- PropsとEvents
- 追加機能の有無

設計図を承認ゲートとして利用することで、解析時の推測と実装時の仮設定を分離できます。
