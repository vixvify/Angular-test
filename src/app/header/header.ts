import { Component, input } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  name = input(); //input.required(); บังคับให้ parent element ส่งข้อมูลให้ child element
}
