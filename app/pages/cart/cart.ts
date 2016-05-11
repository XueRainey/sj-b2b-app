import {Page} from 'ionic-angular';

//import pages
import {LoginPage} from '../login/login';

//import components
import {ProductItemComponent} from '../../components/productItem/productItem.components';
import {NumberInputComponent} from '../../components/numberInput/numberInput.component';

@Page({
  templateUrl: 'build/pages/cart/cart.html',
  directives: [ProductItemComponent,NumberInputComponent]
})
export class CartPage {
  loginPage:any = LoginPage;
  constructor() {

  }
}
