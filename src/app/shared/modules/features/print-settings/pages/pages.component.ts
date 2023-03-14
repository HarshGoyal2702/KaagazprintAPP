import { ChangeDetectionStrategy, Component, forwardRef, OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormControl, FormGroup, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';
import { KaagazPagesToPrint } from 'kaagaz-models';
import { Subscription } from 'rxjs';

@Component({
    selector: 'kaagaz-pages',
    templateUrl: './pages.component.html',
    styleUrls: ['./pages.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => PagesComponent), multi: true }]
})

export class PagesComponent implements OnInit, ControlValueAccessor {

    private _onTouched: () => void;
    private _onChange: (_: any) => void;

    pagesFG: FormGroup;
    get rangeFG(): FormGroup { return this.pagesFG.get('range') as FormGroup; }
    get rangeFC(): FormControl { return this.pagesFG.get('range') as FormControl; }
    get selectedFC(): FormControl { return this.pagesFG.get('selected') as FormControl; }
    constructor(private _fb: FormBuilder) { }
    ngOnInit() {
        this.pagesFG = this._fb.group({
            all: [false],
            range: [false],
            selected: [false],
            selectedPages: [{ value: null, disabled: true }],
            pagesRange: this._fb.group({ start: [{ value: '', disabled: true }], end: [{ value: '', disabled: true }] })
        });
    }

    reset() {
        this.pagesFG.reset({
            all: true, range: { value: false, disabled: false },
            selected: { value: false, disabled: false }, selectedPages: null,
            pagesRange: { start: { value: null, disabled: true }, end: { value: null, disabled: true }, }
        });
    }

    writeValue(value: KaagazPagesToPrint): void {
        if (value && typeof value === 'object') {
            this.pagesFG.patchValue(value);
            this.rangeFG.patchValue(value.pagesRange);
        }
    }

    registerOnTouched(fn: any): void { this._onTouched = fn; }
    registerOnChange(fn: (_: any) => void): void { this._onChange = fn; }
    onTouched() { if (this._onTouched) { this._onTouched(); } }
    onChange(value: KaagazPagesToPrint = this.pagesFG.getRawValue()) {
        if (this._onChange) { this._onChange(value); } this.onTouched();
    }

    onAllPagesToggle(value: boolean) {
        if (value) {
            this.pagesFG.get('selected').setValue(false, { onlySelf: true, emitEvent: false });
            this.pagesFG.get('selectedPages').setValue('', { onlySelf: true, emitEvent: false });
            this.pagesFG.get('selectedPages').disable({ onlySelf: true, emitEvent: false });
            this.pagesFG.get('range').setValue(false, { onlySelf: true, emitEvent: false });
            this.pagesFG.get('pagesRange').get('start').setValue('', { onlySelf: true, emitEvent: false });
            this.pagesFG.get('pagesRange').get('end').setValue('', { onlySelf: true, emitEvent: false });
            this.pagesFG.get('pagesRange').get('start').disable({ onlySelf: true, emitEvent: false });
            this.pagesFG.get('pagesRange').get('end').disable({ onlySelf: true, emitEvent: false });
            this.onChange();
        } else {
            this.onChange(null);
        }
    }

    onRangeToggle(value: boolean) {
        if (value) {
            this.pagesFG.get('all').setValue(false, { onlySelf: true, emitEvent: false });

            this.pagesFG.get('selected').setValue(false, { onlySelf: true, emitEvent: false });
            this.pagesFG.get('selectedPages').setValue('', { onlySelf: true, emitEvent: false });
            this.pagesFG.get('selectedPages').disable({ onlySelf: true, emitEvent: false });

            this.pagesFG.get('pagesRange').get('start').enable({ onlySelf: true, emitEvent: false });
            this.pagesFG.get('pagesRange').get('end').enable({ onlySelf: true, emitEvent: false });
        } else {
            this.pagesFG.get('pagesRange').get('start').setValue('', { onlySelf: true, emitEvent: false });
            this.pagesFG.get('pagesRange').get('end').setValue('', { onlySelf: true, emitEvent: false });
            this.pagesFG.get('pagesRange').get('start').disable({ onlySelf: true, emitEvent: false });
            this.pagesFG.get('pagesRange').get('end').disable({ onlySelf: true, emitEvent: false });
            this.onChange(null);
        }
    }

    onSelectedToggle(value: boolean) {
        if (value) {
            this.pagesFG.get('all').setValue(false, { onlySelf: true, emitEvent: false });
            this.pagesFG.get('range').setValue(false, { onlySelf: true, emitEvent: false });
            this.pagesFG.get('pagesRange').get('start').setValue('', { onlySelf: true, emitEvent: false });
            this.pagesFG.get('pagesRange').get('end').setValue('', { onlySelf: true, emitEvent: false });
            this.pagesFG.get('pagesRange').get('start').disable({ onlySelf: true, emitEvent: false });
            this.pagesFG.get('pagesRange').get('end').disable({ onlySelf: true, emitEvent: false });

            this.pagesFG.get('selectedPages').enable({ onlySelf: true, emitEvent: false });
        } else {
            this.pagesFG.get('selectedPages').setValue('', { onlySelf: true, emitEvent: false });
            this.pagesFG.get('selectedPages').disable({ onlySelf: true, emitEvent: false });
            this.onChange(null);
        }
    }
}
