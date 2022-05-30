import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './app-icon.component.html',
  styleUrls: ['app-icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class AppIconComponent {
  @Input() visible = true;
  @Input() icon = '';
  @Input() svgClass = 'fi fi-24';
  @Input() textClass = '';
  @Input() containerClass = '';
  @Input() svgWidth = '100%';
  @Input() svgHeight = '100%';
}
