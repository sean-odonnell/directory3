import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-navbar',
  template: `
      <nav class="navbar navbar-fixed-top navbar-custom">
        <div class="container">
          <div class="navbar-header">
            <a class="navbar-brand" href="#"><img class='logo' src='./assets/img/logo.png' alt='SigFig Logo'/></a>
          </div>
          <div class="navbar-text">
            <h1 class='custom-font-josefin-bold custom-color'>SIGFIG | <span class='downsize-font'>RTP DIRECTORY</span></h1>
          </div>
            
          <div id="navbar" class="navbar-collapse collapse">
            <ul class="nav navbar-nav navbar-right">
              <li><a href='#'><h3 class='custom-font-josefin custom-color align-middle'>Home</h3></a></li>
              <li><a href='#'><h3 class='custom-font-josefin custom-color align-middle'>Company</h3></a></li>
              <li><a href='#'><h3 class='custom-font-josefin custom-color align-middle'>Person</h3></a></li>
            </ul>
          </div><!--/.nav-collapse -->
        </div>
      </nav>
  `,
  styles: [`
    .navbar-custom {
      background-color: #002741;
      height: 95px;
    }

    .logo {
      height: 95px;
      margin-top: -15px;
      margin-right: -15px;
    }

    .custom-color {
      color: #919595;
    }

    .custom-color:hover {
      color: #D8D9D8;
    }

    a.active:hover {
      background-color: #002741;
    }

    navbar-nav.active:hover {
      background-color: #002741;
    }

    .middle {
      margin-bottom: 15px;
    }

    .downsize-font {
      font-size: 0.7em;
      font-weight: regular;
    }
  `]
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
