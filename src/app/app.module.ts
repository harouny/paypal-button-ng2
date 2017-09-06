import * as ngCore from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';


@ngCore.NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    window['paypal'].Button.driver('angular2', ngCore)
  ],
  providers: [ ],
  bootstrap: [AppComponent],
})
export class AppModule { }
