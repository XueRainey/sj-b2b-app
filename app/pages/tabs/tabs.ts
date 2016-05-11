import {Page,Events} from 'ionic-angular';

//import pages
import {OrderPage} from '../order/order';
import {CartPage} from '../cart/cart';
import {CategoryPage} from '../category/category';
import {MyPage} from '../my/my';
import {NoLoggedInPage} from '../noLoggedIn/noLoggedIn';


@Page({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {

  private myRoot: any = NoLoggedInPage;
  private orderRoot: any = NoLoggedInPage;
  private cartRoot: any = NoLoggedInPage;

  private categoryRoot: any = CategoryPage;

  constructor(private _events:Events){
    this.checkUserLogin(true);

    this._events.subscribe('user:login',()=>{
      this.checkUserLogin(true);
    });
  }

  checkUserLogin(isLogin){
    // let isLogin = false;
    if(isLogin){
      console.info("tabs:","userLogin0");
      this.myRoot = MyPage;
      console.info("tabs:","userLogin1");
      this.orderRoot = OrderPage;
      console.info("tabs:","userLogin2");
      this.cartRoot = CartPage;
      console.info("tabs:","userLogin3");

    }
  }


}
