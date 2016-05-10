import {Page,Events,NavController} from 'ionic-angular';
import {
  CORE_DIRECTIVES,
	FORM_DIRECTIVES,
	FormBuilder,
	ControlGroup,
	Control,
	Validators,
	AbstractControl } from 'angular2/common'

//import pages
import {RegisterPage} from '../register/register';


@Page({
  templateUrl: 'build/pages/login/login.html'
})
export class LoginPage {
  registerPage:any = RegisterPage;
  loginForm:any;
  isPasswordSee:boolean = false;
  constructor(private _nav:NavController,private fb: FormBuilder,private _events:Events) {
    this.loginForm = fb.group({
      phone: ["", Validators.required],
      password: ["", Validators.required]
    });
  }

  doLogin(value){
    console.log(value);
    this._events.publish('user:login');
    setTimeout(() => this._nav.pop(), 0);
  }

  changePasswordType(){
    this.isPasswordSee = !this.isPasswordSee;
  }

}
