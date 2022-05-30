import { ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Company, Region } from '../../models';
import { CommonService } from '../../service';
import { Observable } from 'rxjs';
import snq from 'snq';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'main-page',
  templateUrl: 'main-page.component.html',
  styleUrls: ['main-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainPageComponent implements OnInit {
  companyList$: Observable<Company[]>;
  regionList$: Observable<Region[]>;
  isVisibleDialog = false;
  dropDownRegionsData;
  companyList;

  constructor(private service: CommonService, private titleCasePipe: TitleCasePipe) {}

  ngOnInit(): void {
    this.getCompaniesData();
  }

  getCompaniesData() {
    this.companyList$ = this.service.getCompanies();
    this.regionList$ = this.service.getRegions();
  }

  showSearchDialog(): void {
    this.isVisibleDialog = true;
  }

  closeDialog(): void {
    this.isVisibleDialog = false;
  }

  getDropdownItems(regions: Region[]): { label: string; isSelected: boolean }[] {
    this.dropDownRegionsData = snq(() =>
      regions.map((item) => {
        return {
          label: this.titleCasePipe.transform(item.name),
          isSelected: false,
        };
      }),
    );
    return this.dropDownRegionsData;
  }
}
