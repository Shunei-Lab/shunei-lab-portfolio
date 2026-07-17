# SHUNEI LAB Portfolio

SHUNEI LAB（駿英ラボ）の公式ポートフォリオサイトです。

## 更新方法

- 制作実績・サービス・FAQの内容は `app/content.ts` にまとめています。
- ページ構成は `app/page.tsx`、デザインは `app/globals.css` で管理しています。
- `main` ブランチへ更新を反映すると、GitHub Actionsが自動でGitHub Pagesへ公開します。

## ローカル開発

```bash
pnpm install
pnpm run dev
```

## 公開用確認

```bash
GITHUB_ACTIONS=true pnpm exec next build
node --test tests/rendered-html.test.mjs
```

Copyright © 2026 SHUNEI LAB.
