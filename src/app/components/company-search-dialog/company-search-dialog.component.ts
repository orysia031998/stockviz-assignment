import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Company, Region } from '../../models';
import snq from 'snq';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-company-search-dialog',
  templateUrl: './company-search-dialog.component.html',
  styleUrls: ['./company-search-dialog.component.scss'],
})
export class CompanySearchDialogComponent implements OnInit {
  @Input() isVisibleDialog = false;
  @Input() companyList: Company[] = [];
  @Input() regionList: Region[] = [];
  @Input() dropdownItems: { label: string; isSelected: boolean }[] = [];
  @Output() onCloseButtonClick = new EventEmitter<MouseEvent>();
  theadItems = ['Name of company', 'Region', 'Sector', 'Industry'];
  selectedRegion: { label: string; isSelected: boolean };
  inputValue = '';
  inputClass = '';

  constructor(private titleCasePipe: TitleCasePipe) {}

  ngOnInit(): void {}

  getDialogClass(): string {
    return `search-container-hidden ${this.isVisibleDialog && 'search-container-visible'}`;
  }

  getCompanyRegion(company: Company): string {
    return snq(() =>
      this.titleCasePipe.transform(this.regionList.find((item: Region) => item?.id === company?.region_id)?.name),
    );
  }

  chooseRegion(id: number) {
    this.dropdownItems.forEach((item) => (item.isSelected = false));
    this.dropdownItems[id].isSelected = true;
    this.selectedRegion = this.dropdownItems.find((item) => item.isSelected === true);
  }

  getInputValue(value: string) {
    this.inputValue = value;
  }

  searchCompany(): void {
    this.inputClass = !this.inputValue ? 'error-input' : '';
    const filterCompany = this.companyList.filter((item) => item.name.includes(this.inputValue));

    const getRegionShortCode = snq(
      () => this.regionList.find((item) => this.titleCasePipe.transform(item.name) === this.selectedRegion.label).id,
    );
    const filterCompanyRegions = this.companyList.filter((item) => item.region_id === getRegionShortCode);
    this.companyList = filterCompanyRegions;
    this.companyList = filterCompany;
  }
}
