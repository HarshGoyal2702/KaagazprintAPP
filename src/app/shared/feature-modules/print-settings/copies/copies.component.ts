import { ChangeDetectionStrategy, Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl, NgControl, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'kaagaz-copies',
    templateUrl: './copies.component.html',
    styleUrls: ['./copies.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => CopiesComponent), multi: true }]
})

export class CopiesComponent implements OnInit, ControlValueAccessor {

    private _onTouched: () => void;
    private _onChange: (_: any) => void;

    inputCT: FormControl = new FormControl();
    constructor() { }

    ngOnInit() {
    }

    writeValue(value: number): void {
        this.inputCT.setValue(value && typeof value === 'number' ? value : null);
    }

    registerOnTouched(fn: any): void { this._onTouched = fn; }
    registerOnChange(fn: (_: any) => void): void { this._onChange = fn; }

    onTouched() { if (this._onTouched) { this._onTouched(); } }
    onChange() {
        console.log(this.inputCT.value);
        if (this._onChange) { this._onChange(this.inputCT.value); }
    }

}
