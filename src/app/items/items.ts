import { Component } from '@angular/core';

@Component({
  selector: 'app-items',
  imports: [],
  templateUrl: './items.html',
})
export class Items {
  data = [
    { id: 1, name: 'wee', age: 18, salary: 300 },
    { id: 2, name: 'view', age: 18, salary: 200 },
    { id: 3, name: 'kong', age: 18, salary: 400 },
    { id: 4, name: 'kwan', age: 18, salary: 150 },
  ];
}
