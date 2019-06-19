import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  signinView: boolean = true;
  resetView: boolean = false;
  signupView: boolean = false;

  toggleLoginView(view: string) {
    switch(view) {
      case 'signin':
        this.signinView = true;
        this.signupView = false;
        this.resetView = false;
        break;
      case 'signup':
        this.signinView = false;
        this.signupView = true;
        this.resetView = false;
        break;
      case 'reset':
        this.signinView = false;
        this.signupView = false;
        this.resetView = true;
        break;
    }
  }
}