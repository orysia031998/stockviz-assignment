import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Company, Region } from '../../../models';
import { CurrencyPipe, DecimalPipe, TitleCasePipe } from '@angular/common';
import { FormatePipe } from '../../pipe/formate.pipe';
import snq from 'snq';

@Component({
  selector: 'company-card',
  templateUrl: './company-card.component.html',
  styleUrls: ['company-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompanyCardComponent {
  @Input() companyList: Company[] = [
    {
      id: '',
      name: '',
      price: null,
      sector: '',
      industry: '',
      employees: null,
      region_id: '',
    },
  ];

  @Input() regionList: Region[] = [
    {
      id: '',
      name: '',
      currency: '',
      currency_name: '',
    },
  ];

  headerItems: string[] = ['Region', 'Sector', 'Industry', 'Stock Price', 'Employees'];

  isReadMore: { [key: number]: boolean } = {};

  constructor(
    private currencyPipe: CurrencyPipe,
    private formatPipe: FormatePipe,
    public titleCasePipe: TitleCasePipe,
  ) {}

  getTableData(company: Company) {
    return [
      snq(() =>
        this.titleCasePipe.transform(this.regionList.find((item: Region) => item?.id === company?.region_id)?.name),
      ),
      company?.sector,
      company?.industry,
      this.currencyPipe.transform(company?.price),
      this.formatPipe.transform(company?.employees),
    ];
  }

  showText(id: number): void {
    this.isReadMore[id] = !this.isReadMore[id];
  }

  getCurrency(regionId: string): string {
    return snq(() => this.regionList.find((item: Region) => item?.id === regionId)?.currency);
  }
}
