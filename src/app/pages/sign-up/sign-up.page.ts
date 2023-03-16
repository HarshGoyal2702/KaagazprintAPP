import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { KaagazUser } from 'kaagaz-models';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignUpPage implements OnInit {

  user: KaagazUser;
  constructor() {
    this.user = new KaagazUser();
  }

  ngOnInit() {
  }

}
