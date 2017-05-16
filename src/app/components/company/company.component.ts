import {Component, OnInit} from '@angular/core';
import { CompanyListComponent } from './company-list/company-list.component';

@Component({
	selector: 'app-company',
    templateUrl: './company.component.html',
    providers: []
})

export class CompanyComponent {
    title = "Company";
}

