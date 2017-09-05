import * as ngCore from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    window['paypal'].Button.driver('angular2', ngCore)
  ],
  providers: [ ],
  bootstrap: [AppComponent],
  schemas: [ ngCore.CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
