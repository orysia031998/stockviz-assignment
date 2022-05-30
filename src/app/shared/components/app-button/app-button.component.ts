import { ChangeDetectionStrategy, Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: 'app-button.component.html',
  styleUrls: ['app-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppButtonComponent {
  @Input() isDisabled = false;
  @Input() buttonClass = '';
  @Input() buttonIcon = '';
  @Input() buttonText = '';
  @Output() onButtonClick = new EventEmitter<MouseEvent>();

  getBtnClasses() {
    return `button-primary ${this.buttonClass}`;
  }
}
