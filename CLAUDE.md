# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## プロジェクト概要

[prh (Proofreading Helper)](https://github.com/prh/prh) 用の校正ルール集。日本語の表記揺れ・技術用語の正式名称・商標の表記統一などを YAML ファイルで管理する。

## コマンド

```bash
npm ci          # 依存パッケージのインストール
npm test        # 全 YAML ルールファイルのバリデーション (node test.js)
```

Node.js >= 22 が必要。テストは全 `.yml` ファイルを `prh.fromYAMLFilePath()` で読み込み、構文エラーがないことを検証する。

## ディレクトリ構成

- `languages/` — 自然言語固有のルール（例: `ja/typo.yml`）
- `terms/` — 技術用語・商標・ツール固有のルール
- `media/` — 各媒体（出版社・団体）固有のルール
- `files/` — ファイルタイプごとの include/exclude 設定

## ルールファイルの規約

- YAML 内で `import` を使ってはならない（root の `prh.yml` と `media/` 内は除く）
- `media/` 内のルールは他のファイルから参照しない（組み合わせて運用する前提ではないため）
- `media/` には団体・出版社別ルールを置き、作品別ルールは作品リポジトリで管理
- 団体内で複数ファイルを置く場合は `media/<団体名>/` のようにディレクトリを切る

## ルールの書式

```yaml
# 単純な表記統一
- expected: jQuery

# パターン指定
- expected: Angular 2
  pattern: Angular2

# 正規表現
- expected: すべて
  pattern: /(全て|総て)/
  prh: ひらがな推奨
```
