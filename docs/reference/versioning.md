# バージョニング

<!-- TOC goes here -->

Ionic Frameworkは<a href="https://semver.org/" target="_blank">Semantic Versioning (SemVer)</a>の形式: <code>メジャー.マイナー.パッチ.</code>に従います。互換性のないAPIの変更は<code>メジャー</code>バージョン、後方互換性のある機能を追加する時は<code>マイナー</code>バージョン、後方互換性のあるバグ修正は<code>パッチ</code>バージョンをあげます。

## リリーススケジュール

### メジャーリリース

メジャーリリースは、APIに重大な変更が加えられたときに公開されます。メジャーリリースはおよそ**6ヶ月**ごとに行われ、重大な変更が含まれる可能性があります。フィードバックを得るために、いくつかのリリース候補がメジャーリリースの前に公開されます。何が変更されているのか、またその理由がリリース候補に含まれる予定です。

### マイナーリリース

A minor release will be published when a new feature is added or API changes that are non-breaking are introduced. We will heavily test any changes so that we are confident with the release, but with new code comes the potential for new issues. We are scheduled to release a minor version **every 6 weeks**, if any features or API changes were made.

### パッチリリース

A patch release will be published when bug fixes were included, but the API has not changed and no breaking changes were introduced. We are scheduled to release a new patch version **every week**, but there may be times where we need to release sooner or later than scheduled. To ensure patch releases can fix existing code without introducing new issues from the new features, patch releases will always be published prior to a minor release.

## Changelog

注目すべき変更点の一覧はchangelogで確認することができます。これには、
各リリースでのすべてのバグ修正と新機能の一覧が含まれています。
<a href="https://github.com/ionic-team/ionic/blob/master/CHANGELOG.md" target="_blank">changelog</a>
