import { Component } from '@angular/core';
import {Model} from './model';

@Component({
  selector: 'app-todo',
  templateUrl: './app.component.html',
})
export class AppComponent {
  model =  Model;

  getName() {
    console.log('CHIAMATOOOOO' + this.model);
    return this.model.user;
  }

  getTodoItems() {
    return this.model.items.filter(item => !item.done );
  }

  addItem(newItem) {
    if (newItem !== '') {
      this.model.items.push({action: newItem , done: false});
    }
  }
}
