#!/bin/bash
set -o errexit
set -o nounset

if [ "${VERCEL_ENV:-preview}" == "production" ]; then
    curl -fsSL https://github.com/ionic-team/ionic-docs/archive/refs/heads/translation/jp.tar.gz |
      tar -zxf - -C i18n/ja/docusaurus-plugin-content-docs/current/ --strip-components 2 ionic-docs-translation-jp/docs
fi
