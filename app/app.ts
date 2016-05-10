import {App, Platform} from 'ionic-angular';
import {StatusBar} from 'ionic-native';

//import pages
import {TabsPage} from './pages/tabs/tabs';

//import test
//编写某个页面时需导入该页面，并修改rootPage，打开即为改页面
import {RegisterPage} from './pages/register/register';
import {LoginPage} from './pages/login/login';

@App({
  templateUrl:'build/app.html',
  config: {}
})
export class MyApp {
  rootPage: any = TabsPage;
  // rootPage: any = RegisterPage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      StatusBar.styleDefault();
    });
  }



}
