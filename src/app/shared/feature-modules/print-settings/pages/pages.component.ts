import { ChangeDetectionStrategy, Component, forwardRef, OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { KaagazPagesToPrint } from 'kaagaz-models';
import { Subscription } from 'rxjs';
import { EMPTY } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
    selector: 'kaagaz-pages',
    templateUrl: './pages.component.html',
    styleUrls: ['./pages.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => PagesComponent), multi: true }]
})

export class PagesComponent implements OnInit, ControlValueAccessor, OnDestroy {

    private _onTouched: () => void;
    private _onChange: (_: any) => void;

    pagesFG: FormGroup;
    private _sub: Subscription = new Subscription();
    get rangeFG(): FormGroup { return this.pagesFG.get('range') as FormGroup; }
    constructor(private _fb: FormBuilder) { }
    ngOnDestroy(): void { this._sub.unsubscribe(); }
    ngOnInit() {
        this.pagesFG = this._fb.group({
            all: [true], range: [{ value: false, disabled: true }], selected: [{ value: false, disabled: true }],
            selectedPages: [{ value: null, disabled: true }],
            pagesRange: this._fb.group({ start: [null], end: [null] }, { disabled: true })
        });
        // this._sub = this.pagesFG.valueChanges.pipe(
        //     switchMap((value: KaagazPagesToPrint) => { this.onChange(); return EMPTY; })
        // ).subscribe();
    }
    reset() {
        this.pagesFG.reset({
            all: [true], range: [null], selected: [null], selectedPages: [null],
            pagesRange: { start: [null], end: [null], }
        });
    }
    writeValue(value: KaagazPagesToPrint): void {
        if (value && typeof value === 'object') {
            this.pagesFG.patchValue(value);
            this.rangeFG.patchValue(value.pagesRange);
        } else {
            this.reset();
        }
    }

    registerOnTouched(fn: any): void { this._onTouched = fn; }
    registerOnChange(fn: (_: any) => void): void { this._onChange = fn; }
    onTouched() { if (this._onTouched) { this._onTouched(); } }
    onChange() {
        console.log(this.pagesFG.getRawValue());
        if (this._onChange) { this._onChange(this.pagesFG.getRawValue()); }
    }
}
