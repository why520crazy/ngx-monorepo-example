import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoreModule } from 'core';
import { Package1Module } from 'package1';
import { AppComponent } from './app.component';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, CoreModule, Package1Module],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
