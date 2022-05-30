import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockvizSidebarComponent } from './stockviz-sidebar.component';

describe('StockvizSidebarComponent', () => {
  let component: StockvizSidebarComponent;
  let fixture: ComponentFixture<StockvizSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockvizSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockvizSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
