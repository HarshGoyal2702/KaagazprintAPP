import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { KaagazDocument } from 'src/app/shared/models/kaagaz-document';

@Component({
  selector: 'docs-opener, [docs-opener]',
  templateUrl: './docs-opener.component.html',
  styleUrls: ['./docs-opener.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DocsOpenerComponent implements OnInit {

  loader: boolean = true;
  @Input() file: KaagazDocument;
  @Input() view: 'icon-only' | 'with-player' = 'icon-only';
  constructor() { }

  ngOnInit() { }
  onLoadingComplete(pdf) {
    this.loader = false;
  }
}
