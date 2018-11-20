import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<ul>
    <li>List 1</li>
    <li>List 1</li>
    <li>List 1</li>
  </ul>`,
  styles: [`
    ul{
      color:green;
    }
  `]
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
