import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div>
    <app-navbar></app-navbar>
  </div>
  <div class='container-fluid custom-background'>
    <div>
       <br>
       <br>
       <br>
       <br>
       <br>
       <br>
       <app-company></app-company>
    </div>
 <div>
    <app-footer></app-footer>
  </div>
  `,
  styles: [`
    .custom-background {
      background-color: #FBF9F8;
    }

   :host { 
      display: block;
    }
  `]
})
export class AppComponent {
  title = 'app works!';
}
