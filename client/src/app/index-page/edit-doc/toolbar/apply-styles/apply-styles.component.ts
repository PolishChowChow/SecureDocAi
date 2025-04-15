import { Component, Input } from '@angular/core';

@Component({
  selector: 'apply-styles',
  standalone: false,
  templateUrl: './apply-styles.component.html',
  styleUrl: './apply-styles.component.scss'
})
export class ApplyStylesComponent {
  @Input()
  onClick!: () => void;
}
