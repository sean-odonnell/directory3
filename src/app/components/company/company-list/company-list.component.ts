import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgFor } from '@angular/common';

import { CompanyService } from '../../../services/company.service';
import { Company } from '../../../models/Company';

@Component({
    selector: 'company-list',
    templateUrl: './company-list.component.html',
    providers: [CompanyService],

})

export class CompanyListComponent implements OnInit {
  errorMessage: string;
  companies: Company[] = [];
  mode = 'Observable';

  constructor (private _service: CompanyService) {}
      ngOnInit() { this._service.getCompanies(); }
          getHeroes() {
            this._service.getCompanies()
                             .subscribe(
                               companies => this.companies = companies,
                               error =>  this.errorMessage = <any>error);
      }

  }