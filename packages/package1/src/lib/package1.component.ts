import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-package1',
  template: `
    <p>
      package1 works!
    </p>
  `,
  styles: []
})
export class Package1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
