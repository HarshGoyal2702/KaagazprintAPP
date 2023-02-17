import { ChangeDetectionStrategy, Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'kaagaz-page-size',
  templateUrl: './page-size.component.html',
  styleUrls: ['./page-size.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => PageSizeComponent), multi: true }]
})
export class PageSizeComponent implements OnInit, ControlValueAccessor {

  constructor() { }

  ngOnInit() { }

  writeValue(obj: any): void {

  }
  registerOnChange(fn: any): void {

  }
  registerOnTouched(fn: any): void {

  }
}
