import { Component, OnInit } from '@angular/core';
import { Toast } from '@capacitor/toast';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor() { }

  ngOnInit() { }


  login() {
    Toast.show({
      text: 'Hello!',
    });
  }
}
