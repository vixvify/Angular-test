import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgClass, TitleCasePipe, CurrencyPipe, DatePipe } from '@angular/common';
import { Header } from './header/header';
import { Items } from './items/items';
import { Form } from './form/form';

@Component({
  selector: 'app-root',
  imports: [FormsModule, NgClass, TitleCasePipe, CurrencyPipe, DatePipe, Header, Items, Form],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'anguler-test';
  name = 'vixvify';
  age = 18;
  getAge() {
    return this.age;
  }
  birth = '06/27/2007';
  salary = 20000;
  imageUrl =
    'https://fastly.picsum.photos/id/188/200/300.jpg?grayscale&hmac=-qAEVZcGCV1OQPUiUVYe_Shp9Y0NMPZL0X1gEh6oQkA';
  sizex = 200;
  sizey = 200;
  showMsg() {
    alert('i love you' + ' ' + this.name);
  }
  isLogin = false;
  changeStatus() {
    return (this.isLogin = !this.isLogin);
  }
  skills = ['js', 'ts', 'html', 'css'];
  light = true;
  changeTheme() {
    this.light = !this.light;
  }
  i = signal(0);
  increase() {
    this.i.update((e) => e + 1);
  }
  decrease() {
    this.i.update((e) => e - 1);
  }
  doublei = computed(() => this.i() * 2);
  eveni = computed(() => (this.i() % 2 == 0 ? 'เลขคู่' : 'เลขคี่'));
  data = [
    { id: 1, name: 'wee', age: 18, salary: 300 },
    { id: 2, name: 'view', age: 18, salary: 200 },
    { id: 3, name: 'kong', age: 18, salary: 400 },
    { id: 4, name: 'kwan', age: 18, salary: 150 },
  ];
  removeData(id: number) {
    this.data = this.data.filter((e) => e.id !== id);
  }
  saveData(newdata: any) {
    this.data.push(newdata);
  }
}
