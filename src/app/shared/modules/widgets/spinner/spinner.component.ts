import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'kaagaz-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
  host: { class: 'kaagaz-spinner' },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpinnerComponent implements OnInit {

  @Input() name: string = 'crescent';
  @Input() color: 'primary' | 'secondary' | 'tertiary' | 'success' | 'warning'
    | 'danger' | 'medium' | 'light' | 'dark' | 'text' = 'light';
  constructor() { }

  ngOnInit() { }

}
