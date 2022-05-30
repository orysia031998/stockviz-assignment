import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  CompanySearchDialogComponent,
  MainPageComponent,
  StockvizCompanyDetailsComponent,
  StockvizSidebarComponent,
} from './components';
import { FormatePipe } from './shared/pipe/formate.pipe';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule, CurrencyPipe, DecimalPipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClickOutsideDirective } from './shared/directive/click-outside.directive';

@NgModule({
  declarations: [
    AppComponent,
    StockvizSidebarComponent,
    StockvizCompanyDetailsComponent,
    CompanySearchDialogComponent,
    MainPageComponent,
    FormatePipe,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule.forRoot(),
    BrowserAnimationsModule,
  ],
  providers: [CurrencyPipe, UpperCasePipe, TitleCasePipe, FormatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
