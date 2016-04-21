import {Page} from 'ionic-angular';
import {OrderPage} from '../order/order';
import {CartPage} from '../cart/cart';
import {CategoryPage} from '../category/category';
import {MyPage} from '../my/my';


@Page({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  myRoot: any = MyPage;
  orderRoot: any = OrderPage;
  cartRoot: any = CartPage;
  categoryRoot: any = CategoryPage;
}
