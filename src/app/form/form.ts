import { Component, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  imports: [FormsModule],
  templateUrl: './form.html',
})
export class Form {
  name = signal('');
  age = signal(0);
  salary = signal(0);
  onSend = output();

  sendData() {
    let data: any = {
      id: Math.floor(Math.random() * 1000),
      name: this.name(),
      age: this.age(),
      salary: this.salary(),
    };
    this.onSend.emit(data);
    this.name.set('');
    this.age.set(0);
    this.salary.set(0);
  }
}
