import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-items',
  imports: [],
  templateUrl: './items.html',
})
export class Items {
  data = input<any[]>();
  onDel = output<number>();

  delItem(id: number) {
    if (confirm(`ต้องการลบข้อมูลหรือไม่`)) {
      this.onDel.emit(id);
    }
  }
}
