import { Component, input } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
})
export class Header {
  name = input(); //input.required(); บังคับให้ parent element ส่งข้อมูลให้ child element
}
