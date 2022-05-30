import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockvizCompanyDetailsComponent } from './stockviz-company-details.component';

describe('StockvizCompanyDetailsComponent', () => {
  let component: StockvizCompanyDetailsComponent;
  let fixture: ComponentFixture<StockvizCompanyDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockvizCompanyDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockvizCompanyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
