import {Page} from 'ionic-angular';

//import pages
import {LoginPage} from '../login/login';


@Page({
  templateUrl: 'build/pages/cart/cart.html',
})
export class CartPage {
  loginPage:any = LoginPage;
  constructor() {

  }
}
