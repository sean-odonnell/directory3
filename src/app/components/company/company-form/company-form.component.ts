import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule, FormsModule} from '@angular/forms';

import { CompanyService } from '../../../services/company.service';
import { Company } from '../../../models/Company';

@Component({
    selector: 'company-company-form',
    templateUrl: './company-form.component.html',
    providers: [CompanyService]
})

export class CompanyFormComponent implements OnInit {
    public companyForm: FormGroup;
    public submitted: boolean;
    public events: any[] = [];
    public id: Number;
    public title: string;

    company = new Company(); 

    constructor(
        private fb: FormBuilder,
        private _service: CompanyService
    ) {
        this.companyForm = this.fb.group({ //// Make Model driven form
            Id: [],
            Name: [],
            Address: [],
            Phone: [],
            Revenue: []
        })
    }

    ngOnInit() {
        if (!this.id) {
            return;
        }

        this._service.getCompanies(this.id) //// If id is passed get material for edit.
    }

    ngOnSubmint(model: Company) {
        this._service.insertUpdateCompany(model);
    }


}

