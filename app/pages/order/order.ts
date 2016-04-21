import {Page} from 'ionic-angular';

//import pages
import {LoginPage} from '../login/login';

@Page({
  templateUrl: 'build/pages/order/order.html',
})
export class OrderPage {
  loginPage:any = LoginPage;
  constructor() {

  }
}
