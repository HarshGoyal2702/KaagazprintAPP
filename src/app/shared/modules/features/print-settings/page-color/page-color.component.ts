import { ChangeDetectionStrategy, Component, forwardRef, OnInit } from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { KaagazPageColor } from 'kaagaz-models';

@Component({
  selector: 'kaagaz-page-color',
  templateUrl: './page-color.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./page-color.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PageColorComponent),
      multi: true
    }
  ]
})
export class PageColorComponent implements OnInit, ControlValueAccessor {

  inputCT: FormControl = new FormControl();
  private _onTouched: () => void = () => {};
  private _onChange: (value: any) => void = () => {};

  constructor() { }

  ngOnInit() {
    // Subscribe to changes in the FormControl value and propagate them to the parent form
    // this.inputCT.valueChanges.subscribe(value => {
    //   this._onChange(value);
    // });
  }

  // Register the function to call when the form control is touched
  registerOnTouched(fn: () => void): void {
    this._onTouched = fn;
  }

  // Register the function to call when the form control value changes
  registerOnChange(fn: (value: any) => void): void {
    this._onChange = fn;
  }

  // Write a new value to the form control
  writeValue(value: KaagazPageColor): void {
    this.inputCT.setValue(value, { emitEvent: false });
  }

  // Optional: Handle the disabled state of the control
  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.inputCT.disable() : this.inputCT.enable();
  }

  // Trigger the touch event when the control is touched
  onTouched() {
    if (this._onTouched) {
      this._onTouched();
    }
  }

  // Optional: Trigger value change manually if needed
  onChange() {
    if (this._onChange) {
      this._onChange(this.inputCT.value);
    }
  }
}
