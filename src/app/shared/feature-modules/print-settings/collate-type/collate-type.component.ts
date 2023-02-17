import { ChangeDetectionStrategy, Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'kaagaz-collate-type',
  templateUrl: './collate-type.component.html',
  styleUrls: ['./collate-type.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => CollateTypeComponent), multi: true }]
})
export class CollateTypeComponent implements OnInit, ControlValueAccessor {

  constructor() { }

  ngOnInit() { }

  writeValue(obj: any): void {
  }
  registerOnChange(fn: any): void {

  }
  registerOnTouched(fn: any): void {

  }
}
