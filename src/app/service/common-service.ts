import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Company } from '../models/company';
import { Region } from '../models/region';
import * as regionData from '../../assets/regions.json';
import * as companiesData from '../../assets/companies.json';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor(private http: HttpClient) {}

  getCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>('../../assets/companies.json');
  }
  getRegions(): Observable<Region[]> {
    return this.http.get<Region[]>('../../assets/regions.json');
  }
}
