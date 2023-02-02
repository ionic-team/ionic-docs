#!/bin/bash
set -o errexit
set -o nounset

if [ "${VERCEL_ENV:-preview}" == "production" ]; then
    mkdir -p i18n/ja/docusaurus-plugin-content-docs{,-cli,-native,-studio}/version-v6/

    curl -fsSL https://github.com/ionic-team/ionic-docs/archive/refs/heads/translation/jp.tar.gz -o jp.tar.gz
    tar -zxf jp.tar.gz -C i18n/ja/docusaurus-plugin-content-docs/version-v6/ --strip-components 2 ionic-docs-translation-jp/docs
    tar -zxf jp.tar.gz -C i18n/ja/docusaurus-plugin-content-docs-cli/version-v6/ --strip-components 2 ionic-docs-translation-jp/cli
    tar -zxf jp.tar.gz -C i18n/ja/docusaurus-plugin-content-docs-native/version-v6/ --strip-components 2 ionic-docs-translation-jp/native
    tar -zxf jp.tar.gz -C i18n/ja/docusaurus-plugin-content-docs-studio/version-v6/ --strip-components 2 ionic-docs-translation-jp/studio
    rm jp.tar.gz

    node scripts/api-ja.js
fi
