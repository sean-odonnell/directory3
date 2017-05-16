import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Company } from '../models/Company';

@Injectable()
export class CompanyService {
  
  private companyUrl = 'api/heroes';

  constructor (private http: Http) {}
      getCompanies(): Observable<Company[]> {
        return this.http.get(this.companyUrl)
                    .map(this.extractData)
                    .catch(this.handleError);
      }

      createCompany(  name: string,
                      addess: string,
                      phone: number,
                      revenue: number
                      ): Observable<Company> {
          let headers = new Headers({ 'Content-Type': 'application/json' });
          let options = new RequestOptions({ headers: headers });

          return this.http.post(this.companyUrl, { name }, options)
                          .map(this.extractData)
                          .catch(this.handleError);
       }

  private extractData(res: Response) {
    let body = res.json();
    console.log('logging')
    return body.data || { };
  }

  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}