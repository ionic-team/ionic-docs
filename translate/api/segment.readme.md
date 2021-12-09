# ion-segment

Segmentsは、関連するボタンのグループを水平方向の行に表示することができ、segmented controlsとも呼ばれます。これらは、toolbarまたはメインコンテンツの内部に表示できます。

これらの機能は、1つを選択すると他のすべてが選択解除されるTabsと似ています。Segmentsは、コンテンツ内の異なるビューを切り替える場合に便利です。クリックしてページ間の遷移をコントロールする場合は、Segmentsの代わりにTabsを使用してください。

## Scrollable Segments

Segments are not scrollable by default. Each segment button has a fixed width, and the width is determined by dividing the number of segment buttons by the screen width. This ensures that each segment button can be displayed on the screen without having to scroll. As a result, some segment buttons with longer labels may get cut off. To avoid this we recommend either using a shorter label or switching to a scrollable segment by setting the `scrollable` property to `true`. This will cause the segment to scroll horizontally, but will allow each segment button to have a variable width.
