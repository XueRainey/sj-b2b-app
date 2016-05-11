import {Component, Input} from 'angular2/core';
import {IONIC_DIRECTIVES} from 'ionic-angular';

//import components
import {NumberInputComponent} from '../numberInput/numberInput.component';

@Component({
  selector: 'ry-product-item',
  templateUrl:'./build/components/productItem/productItem.component.html',
  directives: [IONIC_DIRECTIVES,NumberInputComponent]
})

export class ProductItemComponent{
  @Input()
  public item:any;

  constructor() { }

  ngOnInit() {}

}
