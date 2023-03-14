import { ChangeDetectionStrategy, Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { kaagazPageLayout } from 'kaagaz-models';

@Component({
  selector: 'kaagaz-page-layout',
  templateUrl: './page-layout.component.html',
  styleUrls: ['./page-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => PageLayoutComponent), multi: true }]
})

export class PageLayoutComponent implements OnInit, ControlValueAccessor {

  private _onTouched: () => void;
  private _onChange: (_: any) => void;

  inputCT: FormControl = new FormControl();
  constructor() { }

  ngOnInit() { }

  registerOnTouched(fn: any): void { this._onTouched = fn; }
  registerOnChange(fn: (_: any) => void): void { this._onChange = fn; }
  writeValue(value: kaagazPageLayout): void { this.inputCT.setValue(value); }

  onTouched() { if (this._onTouched) { this._onTouched(); } }
  onChange() {
    if (this._onChange) { this._onChange(this.inputCT.value); }
  }
}
