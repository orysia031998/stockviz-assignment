import { Component, Input } from '@angular/core';
import { Company, Region } from '../../models';

@Component({
  selector: 'app-stockviz-company-details',
  templateUrl: './stockviz-company-details.component.html',
  styleUrls: ['./stockviz-company-details.component.scss'],
})
export class StockvizCompanyDetailsComponent {
  @Input() companyList: Company[];
  @Input() regionList: Region[];
}
