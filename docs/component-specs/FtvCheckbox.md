# FtvCheckbox Design Specification

## Component Overview

- Purpose: チェックボックスとラベル「Checkbox」を表示する。
- Supported states: Selected, Selected（disabled）, UnSelected, UnSelected（disabled）
- Base HTML element: 未確認。実装候補は `input type="checkbox"` と関連付けたラベル。
- Props or variant candidates: checked（選択状態）、disabled（無効状態）。いずれも実装候補であり、API仕様は未確認。
- Data or interaction behavior: 選択状態を示す見た目は確認できる。操作、値の受け渡し、キーボード挙動は未確認。

## States

| State | Purpose |
|---|---|
| Selected | 選択済みの状態 |
| Selected（disabled） | 選択済みで、チェックボックスの描画が半透明の状態 |
| UnSelected | 未選択の状態 |
| UnSelected（disabled） | 未選択で、枠線の描画が半透明の状態 |

## Design Properties

| Property | Selected | Selected（disabled） | UnSelected | UnSelected（disabled） |
|---|---|---|---|---|
| Width | 83px（SVG全体） | 83px（SVG全体） | 83px（SVG全体） | 83px（SVG全体） |
| Height | 20px（SVG全体） | 20px（SVG全体） | 20px（SVG全体） | 20px（SVG全体） |
| Background | チェックボックスの塗り `#E86C00` | チェックボックスの塗り `#E86C00`、塗り不透明度 0.5 | チェックボックスの塗りなし（透明） | チェックボックスの塗りなし（透明） |
| Border Color | 未確認（矩形にstroke指定なし） | 未確認（矩形にstroke指定なし） | `#E86C00` | `#E86C00`、stroke不透明度 0.5 |
| Border Width | 未確認（矩形にstroke指定なし） | 未確認（矩形にstroke指定なし） | 1px（SVGの既定stroke幅） | 1px（SVGの既定stroke幅） |
| Border Radius | 2px | 2px | 1.5px | 1.5px |
| Padding | 未確認 | 未確認 | 未確認 | 未確認 |
| Margin | 未確認 | 未確認 | 未確認 | 未確認 |
| Font Family | 未確認（ラベルはアウトラインパス） | 未確認（ラベルはアウトラインパス） | 未確認（ラベルはアウトラインパス） | 未確認（ラベルはアウトラインパス） |
| Font Size | 未確認（ラベルはアウトラインパス） | 未確認（ラベルはアウトラインパス） | 未確認（ラベルはアウトラインパス） | 未確認（ラベルはアウトラインパス） |
| Font Weight | 未確認（ラベルはアウトラインパス） | 未確認（ラベルはアウトラインパス） | 未確認（ラベルはアウトラインパス） | 未確認（ラベルはアウトラインパス） |
| Line Height | 未確認 | 未確認 | 未確認 | 未確認 |
| Letter Spacing | 未確認 | 未確認 | 未確認 | 未確認 |
| Text Color | `#09101D` | `#09101D` | `#09101D` | `#09101D` |
| Checkbox geometry | `x=0, y=2, 16×16px` | `x=0, y=2, 16×16px` | `x=0.5, y=2.5, 15×15px`（strokeを含む外形は約16×16px） | `x=0.5, y=2.5, 15×15px`（strokeを含む外形は約16×16px） |
| Check icon | 白いチェック形状のマスクと白塗り矩形で描画 | 白いチェック形状のマスクと白塗り矩形で描画 | なし | なし |
| Focus, hover, shadow | 未確認 | 未確認 | 未確認 | 未確認 |
| Responsive / parent sizing | 未確認 | 未確認 | 未確認 | 未確認 |

## Facts Confirmed by SVG

- 4つのSVGはいずれも `width="83"`, `height="20"`, `viewBox="0 0 83 20"`。
- 選択状態の矩形は `y=2`, `width=16`, `height=16`, `rx=2`。塗りは `#E86C00`。
- 選択状態のチェック形状はマスクと白塗り矩形で描かれている。
- 未選択状態の矩形は `x=0.5`, `y=2.5`, `width=15`, `height=15`, `rx=1.5`。strokeは `#E86C00`。`stroke-width`の明示指定はなく、SVGの既定値が適用される。
- ラベルはテキスト要素ではなく、`#09101D` で塗られたアウトラインパス。
- ラベルのパスは各SVGで座標に小さな差がある。フォント名やテキストのCSS設定はSVGから確定できない。
- disabled SVGでは、選択時は矩形の塗りに `fill-opacity="0.5"`、未選択時はstrokeに `stroke-opacity="0.5"` が指定されている。ラベルの塗り色にopacity指定はない。

## Facts Confirmed by PNG

- 4状態とも、左側にチェックボックス、右側に「Checkbox」と読めるラベルが配置されている。
- Selectedはオレンジの塗りと白いチェック、Unselectedはオレンジの枠線で表示される。
- 各disabled画像ではチェックボックスの塗りまたは枠線が薄く見える。ラベルの色に明確な状態差は見られない。
- PNGの視覚比較では状態間の配置やラベルに明確な差は見られない。寸法や色の確定値にはSVG属性を用いる。

## State Differences

- SelectedとUnSelectedは、チェックボックスの塗り・枠線・チェック形状が異なる。
- 各disabled状態は、対応する通常状態に対しチェックボックスの描画のみopacity 0.5となる。ラベルの色はSVG上で変化しない。
- 各SVGのラベルパスには小さな座標差があるが、PNGでは視覚的な状態差を確認できない。意図された差かどうかは未確認。

## Unconfirmed Items

- ラベルの正確なフォントファミリー、サイズ、ウェイト、行高、字間。
- HTML要素、コンポーネントAPI、フォーム値、操作およびキーボード挙動。
- 外側コンテナの背景、余白、親要素に応じた拡縮・折り返し条件。
- hover、focus、activeなど、資料にない状態や装飾。
- ラベルパスの座標差が意図されたものか、書き出し差によるものか。

## Temporary Settings for Implementation

- ラベルの実装形式
  - 仮設定の値: 実装では文字列「Checkbox」をテキストとして表示する。
  - 仮設定である理由: PNGでは文字として読めるが、SVGではアウトライン化されており、文字データやフォント指定がない。
  - 確認が必要な根拠資料: 元の編集可能なデザインデータ、または正確なタイポグラフィ仕様。
  - 後で置き換えるべき箇所: ラベルのフォント指定と文字描画。正式なフォント・サイズが判明したら更新する。
- ラベルのタイポグラフィ
  - 仮設定の値: プロジェクトの既定テキストスタイルを暫定使用し、色はSVGで確認できる `#09101D` とする。
  - 仮設定である理由: SVGのラベルはパスであり、タイポグラフィ属性を取得できない。
  - 確認が必要な根拠資料: 元の編集可能なデザインデータ、またはフォント・サイズ・ウェイトの仕様。
  - 後で置き換えるべき箇所: ラベルのタイポグラフィ設定。既定スタイルが見本と一致するとは限らない。
- 無効時の見た目
  - 仮設定の値: チェックボックスの塗りまたは枠線に限りopacity 0.5を適用し、ラベル色は変えない。
  - 仮設定である理由: disabled SVGで確認できるopacity指定はチェックボックスの図形に限られる。
  - 確認が必要な根拠資料: 元のデザイン上のdisabled仕様。CSS opacityを要素全体に適用するか、図形単位で適用するかを確認する。
  - 後で置き換えるべき箇所: disabled状態のスタイル適用範囲。

## Implementation Notes

- 必須再現項目: 83×20pxの資料上の全体寸法、約16×16pxのチェックボックス、選択・未選択の形状、確認済みの色・角丸、disabled時の図形opacity、ラベル色。
- 仮設定項目: HTML要素、API・操作仕様、ラベルのフォント設定、余白と親要素への追従。
- 追加してはいけない機能: 資料にないhover/focus/active状態、アイコン、影、ラベル色のdisabled変更など。
- 幅基準とレスポンシブ条件: SVG全体の幅は83px。親要素への追従や拡縮条件は未確認のため、固定値・可変値のいずれも確定しない。
- 比較確認が必要な項目: ラベルのフォントと縦位置、チェックボックスとラベル間の余白、disabled時のopacity適用範囲、ラベルパスの座標差。

## Out of Scope

- 資料にないhover、focus、active状態。
- 資料にない説明文、補助アイコン、エラーメッセージ、影。
- フォーム送信・値管理・キーボード操作など、資料から確認できない動作仕様。
