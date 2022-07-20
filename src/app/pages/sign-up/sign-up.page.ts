import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignUpPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
