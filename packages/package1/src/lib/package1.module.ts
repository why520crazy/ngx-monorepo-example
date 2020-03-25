import { NgModule } from '@angular/core';
import { Package1Component } from './package1.component';
import { hello } from 'core';

console.log(hello());

@NgModule({
    declarations: [Package1Component],
    imports: [],
    exports: [Package1Component]
})
export class Package1Module {}
