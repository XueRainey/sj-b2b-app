import {Component, Input} from 'angular2/core';
import {IONIC_DIRECTIVES} from 'ionic-angular';

@Component({
  selector: 'ry-product-item',
  templateUrl:'./build/components/productItem/productItem.component.html',
  directives: [IONIC_DIRECTIVES]
})

export class ProductItemComponent{
  @Input()
  public topCategoryDate:any;

  constructor() { }

  ngOnInit() {}

}
