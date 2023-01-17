```ts
import { Component, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';

interface Fruit {
  text: string;
  value: string;
}

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
})
export class ExampleComponent {
  @ViewChild('modal', { static: true }) modal!: IonModal;
  
  filteredFruits: Fruit[] = [...this.fruits];
  selectedFruit: string = 'None';
  
  private fruits: Fruit[] = [
    { text: 'Apple', value: 'apple' },
    { text: 'Apricot', value: 'apricot' },
    { text: 'Banana', value: 'banana' },
    { text: 'Blackberry', value: 'blackberry' },
    { text: 'Blueberry', value: 'blueberry' },
    { text: 'Cherry', value: 'cherry' },
    { text: 'Cranberry', value: 'cranberry' },
    { text: 'Grape', value: 'grape' },
    { text: 'Grapefruit', value: 'grapefruit' },
    { text: 'Guava', value: 'guava' },
    { text: 'Jackfruit', value: 'jackfruit' },
    { text: 'Lime', value: 'lime' },
    { text: 'Mango', value: 'mango' },
    { text: 'Nectarine', value: 'nectarine' },
    { text: 'Orange', value: 'orange' },
    { text: 'Papaya', value: 'papaya' },
    { text: 'Passionfruit', value: 'passionfruit' },
    { text: 'Peach', value: 'peach' },
    { text: 'Pear', value: 'pear' },
    { text: 'Plantain', value: 'plantain' },
    { text: 'Plum', value: 'plum' },
    { text: 'Pineapple', value: 'pineapple' },
    { text: 'Pomegranate', value: 'pomegranate' },
    { text: 'Raspberry', value: 'raspberry' },
    { text: 'Strawberry', value: 'strawberry' }
  ];
  
  constructor() {}

  searchbarInput(ev: any) {
    this.filterList(ev.target.value);
  }
  
  /**
   * Update the rendered view with
   * the provided search query. If no
   * query is provided, all data
   * will be rendered.
   */
  filterList(searchQuery: string | undefined) {
    /**
     * If no search query is defined,
     * return all options.
     */
    if (searchQuery === undefined) {
      this.filteredFruits = [...this.fruits];
    } else {
      /**
       * Otherwise, normalize the search
       * query and check to see which items
       * contain the search query as a substring.
       */
      const normalizedQuery = searchQuery.toLowerCase(); 
      this.filteredFruits = this.fruits.filter(fruit => {
        return fruit.value.includes(normalizedQuery);
      });
    }
  }
  
  /**
   * Commit an item and dismiss the modal.
   */
  selectFruit(fruit: Fruit) {
    this.modal.dismiss(fruit);
  }
  
  /**
   * When the modal is about to dismiss,
   * update the parent view with the selected item.
   */
  modalWillDismiss(ev: any) {
    const { data } = ev.detail;
  
    if (data !== undefined) {
      this.selectedFruit = data.text;
    }
  }
  
  /**
   * Reset the state of the modal
   * once it is fully dismissed.
   */ 
  modalDidDismiss() {
    this.filteredFruits = [...this.fruits];
  }
  
  dismissModal() {
    this.modal.dismiss();
  }
}
```
