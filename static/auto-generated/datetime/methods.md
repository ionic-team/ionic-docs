

### cancel

| | |
| --- | --- |
| **Description** | Emits the ionCancel event and optionally closes the popover or modal that the datetime was presented in.<br /><br />自動翻訳: ionCancel イベントを発行し、オプションで datetime が表示されたポップオーバーまたはモーダルを閉じます。 |
| **Signature** | `cancel(closeOverlay?: boolean) => Promise<void>` |


### confirm

| | |
| --- | --- |
| **Description** | Confirms the selected datetime value, updates the `value` property, and optionally closes the popover or modal that the datetime was presented in.<br /><br />自動翻訳: 選択されたdatetimeの値を確認し、`value`プロパティを更新し、オプションでdatetimeが表示されていたポップオーバーまたはモーダルを閉じます。 |
| **Signature** | `confirm(closeOverlay?: boolean) => Promise<void>` |


### reset

| | |
| --- | --- |
| **Description** | Resets the internal state of the datetime but does not update the value. Passing a valid ISO-8601 string will reset the state of the component to the provided date. If no value is provided, the internal state will be reset to the clamped value of the min, max and today.<br /><br />自動翻訳: datetimeの内部状態をリセットするが、値は更新しない。有効なISO-8601文字列を渡すと、コンポーネントの状態は指定した日付にリセットされます。値が提供されない場合、内部状態はmin、max、todayのクランプされた値にリセットされます。 |
| **Signature** | `reset(startDate?: string) => Promise<void>` |


