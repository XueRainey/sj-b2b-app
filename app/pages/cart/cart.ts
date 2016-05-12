import {Page} from 'ionic-angular';

//import pages
import {LoginPage} from '../login/login';

//import components
import {NumberInputComponent} from '../../components/numberInput/numberInput.component';

@Page({
  templateUrl: 'build/pages/cart/cart.html',
  directives: [NumberInputComponent]
})
export class CartPage {
  loginPage:any = LoginPage;
  item:any = {
    id:1,
    number:2
  };
  constructor() {

  }

  changeNumber(item){
    this.item=item;
    console.log(item);

  }

  deleteItem(item){
    console.log(item);
  }


}
