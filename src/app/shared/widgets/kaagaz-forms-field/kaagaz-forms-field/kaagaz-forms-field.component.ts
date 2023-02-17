import { ChangeDetectionStrategy, Component, ContentChild, HostBinding, OnInit } from '@angular/core';
import { NgControl } from '@angular/forms';

@Component({
  selector: '[kaagaz-form-field], kaagaz-form-field',
  templateUrl: './kaagaz-forms-field.component.html',
  styleUrls: ['./kaagaz-forms-field.component.scss'],
  host: { class: 'KaagazFormField' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class KaagazFormsFieldComponent implements OnInit {

  @ContentChild(NgControl) ctrl: NgControl;
  constructor() { }

  ngOnInit() { }

  @HostBinding('class.ng-disabled') get disabled() { return this.ctrl ? this.ctrl.disabled : null; }
  @HostBinding('class.ng-pristine') get pristine() { return this.ctrl ? this.ctrl.pristine : null; }
  @HostBinding('class.ng-touched') get touched() { return this.ctrl ? this.ctrl.touched : null; }
  @HostBinding('class.ng-untouched') get untouched() { return this.ctrl ? this.ctrl.untouched : null; }
  @HostBinding('class.ng-dirty') get dirty() { return this.ctrl ? this.ctrl.dirty : null; }
  @HostBinding('class.ng-valid') get valid() { return this.ctrl ? this.ctrl.valid : null; }
  @HostBinding('class.ng-invalid') get invalid() { return this.ctrl ? this.ctrl.invalid : null; }
}
