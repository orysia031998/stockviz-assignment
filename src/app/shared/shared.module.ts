import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  AppButtonComponent,
  AppDropdownComponent,
  AppIconComponent,
  AppInputComponent,
  CompanyCardComponent,
} from './components';
import { MatButtonModule } from '@angular/material/button';
import { ClickOutsideDirective } from './directive/click-outside.directive';

const COMPONENTS = [
  AppIconComponent,
  AppButtonComponent,
  CompanyCardComponent,
  AppInputComponent,
  AppDropdownComponent,
];

@NgModule({
  imports: [RouterModule, CommonModule, FormsModule, ReactiveFormsModule, MatButtonModule],
  exports: [...COMPONENTS, CommonModule, FormsModule, ReactiveFormsModule, RouterModule, ClickOutsideDirective],
  declarations: [...COMPONENTS, ClickOutsideDirective],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
    };
  }
}
