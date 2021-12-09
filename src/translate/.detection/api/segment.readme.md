# ion-segment

Segments display a group of related buttons, sometimes known as segmented controls, in a horizontal row. They can be displayed inside of a toolbar or the main content.

Their functionality is similar to tabs, where selecting one will deselect all others. Segments are useful for toggling between different views inside of the content. Tabs should be used instead of a segment when clicking on a control should navigate between pages.

## Scrollable Segments

Segments are not scrollable by default. Each segment button has a fixed width, and the width is determined by dividing the number of segment buttons by the screen width. This ensures that each segment button can be displayed on the screen without having to scroll. As a result, some segment buttons with longer labels may get cut off. To avoid this we recommend either using a shorter label or switching to a scrollable segment by setting the `scrollable` property to `true`. This will cause the segment to scroll horizontally, but will allow each segment button to have a variable width.

## Accessibility

### Keyboard Navigation

The component has full keyboard support for navigating between and selecting `ion-segment-button` elements. By default, keyboard navigation will only focus `ion-segment-button` elements, but you can use the `selectOnFocus` property to ensure that they get selected on focus as well. The following table details what each key does:

| Key                | Function                                                       |
| ------------------ | -------------------------------------------------------------- |
| `ArrowRight`       | Focuses the next focusable element.                            |
| `ArrowLeft`        | Focuses the previous focusable element.                        |
| `Home`             | Focuses the first focusable element.                           |
| `End`              | Focuses the last focusable element.                            |
| `Space` or `Enter` | Selects the element that is currently focused.                 |

## Interfaces

### SegmentChangeEventDetail

```typescript
interface SegmentChangeEventDetail {
  value?: string;
}
```

### SegmentCustomEvent

While not required, this interface can be used in place of the `CustomEvent` interface for stronger typing with Ionic events emitted from this component.

```typescript
interface SegmentCustomEvent extends CustomEvent {
  target: HTMLIonSegmentElement;
  detail: SegmentChangeEventDetail;
}
```
