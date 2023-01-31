#!/bin/bash
set -o errexit
set -o nounset

if [ "${VERCEL_ENV:-preview}" == "production" ]; then
    mkdir -p i18n/ja/docusaurus-plugin-content-docs/v6/
    curl -fsSL https://github.com/ionic-team/ionic-docs/archive/refs/heads/translation/jp.tar.gz |
      tar -zxf - -C i18n/ja/docusaurus-plugin-content-docs/v6/ --strip-components 2 ionic-docs-translation-jp/docs
    node scripts/api-ja.js
fi
