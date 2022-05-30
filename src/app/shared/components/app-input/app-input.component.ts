import { ChangeDetectionStrategy, Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './app-input.component.html',
  styleUrls: ['atom-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppInputComponent {
  @Input() inputType = 'text';
  @Input() inputValue = '';
  @Input() inputLabel = 'text';
  @Input() inputPlaceholder = 'text';
  @Input() inputClass = '';
  @Input() isDisabled = false;
  @Output() onInput = new EventEmitter<string>();
}
