import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { CoreService } from 'kaagaz-core';
import { User } from 'kaagaz-models';

@Component({
  selector: 'kaagaz-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfilePage implements OnInit {

  user: User;
  constructor(private _menu: MenuController, private _core: CoreService) {
    this.user = this._core.user;
  }

  ngOnInit() {
    console.log(this.user);
  }
  toggleMenu() { this._menu.toggle(); }

}
