import { ChangeDetectionStrategy, Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'kaagaz-print-side-type',
  templateUrl: './print-side-type.component.html',
  styleUrls: ['./print-side-type.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => PrintSideTypeComponent), multi: true }]
})

export class PrintSideTypeComponent implements OnInit, ControlValueAccessor {

  constructor() { }

  ngOnInit() { }

  writeValue(obj: any): void {
  }
  registerOnChange(fn: any): void {

  }
  registerOnTouched(fn: any): void {

  }
}
