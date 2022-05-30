import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanySearchDialogComponent } from './company-search-dialog.component';

describe('CompanySearchDialogComponent', () => {
  let component: CompanySearchDialogComponent;
  let fixture: ComponentFixture<CompanySearchDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanySearchDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanySearchDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
