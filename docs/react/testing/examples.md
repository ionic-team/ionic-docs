---
sidebar_label: Examples
title: Ionic React Testing Examples
description: Learn how to test an Ionic React application. This document provides examples of how to test different types of components.
---

# Examples

## Testing a modal presented from a trigger

This example shows how to test a modal that is presented from a trigger. The modal is presented when the user clicks a button.

### Example component

```tsx title="src/Example.tsx"
import { IonButton, IonModal } from '@ionic/react';

export default function Example() {
  return (
    <>
      <IonButton id="open-modal">Open</IonButton>
      <IonModal trigger="open-modal">Modal content</IonModal>
    </>
  );
}
```

### Testing the modal

```tsx title="src/Example.test.tsx"
import { fireEvent, render, screen, waitFor } from '@testing-library/react';

import Example from './Example';

test('button presents a modal when clicked', async () => {
  render(<Example />);
  // Simulate a click on the button
  fireEvent.click(screen.getByText('Open'));
  // Wait for the modal to be presented
  await waitFor(() => {
    // Assert that the modal is present
    expect(screen.getByText('Modal content')).toBeInTheDocument();
  });
});
```
