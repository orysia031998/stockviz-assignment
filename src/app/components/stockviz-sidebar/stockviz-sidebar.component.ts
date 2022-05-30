import { Component, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-stockviz-sidebar',
  templateUrl: './stockviz-sidebar.component.html',
  styleUrls: ['./stockviz-sidebar.component.scss'],
})
export class StockvizSidebarComponent {
  collapseBtnText = '';
  searchButtonText = '';
  collapseBtnIcon = 'collapse-open';
  isCollapsed = false;
  sideBarWidth = '10%';

  @Output() onSearchButtonClick = new EventEmitter<MouseEvent>();

  @ViewChild('mainHead') private mainHead: ElementRef;

  collapseSidebar(): void {
    this.isCollapsed = !this.isCollapsed;

    if (this.isCollapsed) {
      this.collapseBtnIcon = 'collapse-close';
      this.collapseBtnText = 'Collapse';
      this.searchButtonText = 'Find company';
    } else {
      this.collapseBtnIcon = 'collapse-open';
      this.searchButtonText = '';
      this.collapseBtnText = '';
    }

    this.mainHead.nativeElement.classList.toggle('main-head-collapsed');
  }
}
