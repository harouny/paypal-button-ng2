import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  env = 'production'
  client = {
      sandbox:    'AWi18rxt26-hrueMoPZ0tpGEOJnNT4QkiMQst9pYgaQNAfS1FLFxkxQuiaqRBj1vV5PmgHX_jA_c1ncL',
      production: 'AVZhosFzrnZ5Mf3tiOxAD0M6NHv8pcB2IFNHAfp_h69mmbd-LElFYkJUSII3Y0FPbm7S7lxBuqWImLbl'
  }
  commit = true
  public payment(data, actions) {
      return actions.payment.create({
          transactions: [
              {
                  amount: { total: '1.00', currency: 'USD' }
              }
          ]
      });
  }
  public onAuthorize(data, actions) {
      return actions.payment.execute().then(function() {
          // Show a success page to the buyer
      });
  }
}
