import {App, Platform} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {TabsPage} from './pages/tabs/tabs';

//import pages

//import test
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
