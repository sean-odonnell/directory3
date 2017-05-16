import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <div class='custom'>
      <footer class="footer">
        <br>
        <div class="container">
          <p>(c) 2017 by Sean M O'Donnell | sean.odonnell.cfa@gmail.com | 415-919-9401 | San Francisco, CA</p>
        </div>
      </footer>
    </div>

  `,
  styles: [`
    .custom {
      border-top: solid 2px #212221;
      background-color: #FEFFFE;
      color: #212221;
      height: 100%;
    }
  `]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
