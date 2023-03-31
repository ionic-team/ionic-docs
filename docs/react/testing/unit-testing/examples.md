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

## Testing a modal presented from useIonModal

This example shows how to test a modal that is presented using the `useIonModal` hook. The modal is presented when the user clicks a button.

### Example component

```tsx title="src/Example.tsx"
import { IonContent, useIonModal, IonHeader, IonToolbar, IonTitle, IonButton, IonPage } from '@ionic/react';

export const ModalContent: React.FC = () => {
  return (
    <IonContent>
      <div>Modal Content</div>
    </IonContent>
  );
};

const Example: React.FC = () => {
  const [present] = useIonModal(ModalContent);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonButton expand="block" className="ion-margin" onClick={() => present()}>
          Open
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Example;
```

### Testing the modal

```tsx title="src/Example.test.tsx"
import { fireEvent, render, screen } from '@testing-library/react';

import Example, { ModalContent } from './Example';

const mockPresent = jest.fn();
const mockUseIonModal = jest.fn();

jest.mock('@ionic/react', () => {
  const rest = jest.requireActual('@ionic/react');
  return {
    ...rest,
    useIonModal: (component: any) => {
      mockUseIonModal(component);
      return [mockPresent];
    },
  };
});

test('should present ModalContent when button is clicked', () => {
  render(<Example />);

  fireEvent.click(screen.getByText('Open'));

  expect(mockUseIonModal).toHaveBeenCalledWith(ModalContent);
  expect(mockPresent).toHaveBeenCalled();
});
```
