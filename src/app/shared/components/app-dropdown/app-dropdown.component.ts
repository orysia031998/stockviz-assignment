import {
  ChangeDetectionStrategy,
  Component,
  Input,
  Output,
  EventEmitter,
  ElementRef,
  ViewChild,
  HostListener,
} from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './app-dropdown.component.html',
  styleUrls: ['app-dropdown.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppDropdownComponent {
  @Input() dropdownItems: { label: string; isSelected: boolean }[];

  @Input() dropdownTitle = '';

  @Input() dropdownPlaceholder = 'placeholder';

  @Input() selectedItem = '';

  @Output() onDropdownItemClick = new EventEmitter<number>();

  @ViewChild('dropdownHeader') dropdownHeader: ElementRef;

  @HostListener('window:resize', ['$event'])
  onResize() {}

  showDropdownContent = false;

  showDropdown(): void {
    this.showDropdownContent = !this.showDropdownContent;
  }

  closeDropdown(): void {
    this.showDropdownContent = false;
  }

  getOptionWidth(): string {
    return `${this.dropdownHeader.nativeElement.offsetWidth}px`;
  }

  selectItem(i) {
    this.onDropdownItemClick.emit(i);
    this.selectedItem = this.dropdownItems[i].label;
  }

  getDropdownClass() {
    return `select ${this.showDropdownContent && 'select-active'}`;
  }
}
