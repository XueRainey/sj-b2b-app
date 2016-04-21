import {Page} from 'ionic-angular';

//import pages
import {LoginPage} from '../login/login';

@Page({
  templateUrl: 'build/pages/my/my.html'
})
export class MyPage {
  loginPage:any = LoginPage;
  constructor() {

  }
}
