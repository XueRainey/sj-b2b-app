import {Page,Events} from 'ionic-angular';

//import pages
import {LoginPage} from '../login/login';

@Page({
  templateUrl: 'build/pages/noLoggedIn/noLoggedIn.html'
})
export class NoLoggedInPage {
  loginPage:any = LoginPage;

  constructor(private _events:Events) {

  }
}
