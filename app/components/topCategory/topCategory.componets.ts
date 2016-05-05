import {Component, Input, OnInit} from 'angular2/core';
import {IONIC_DIRECTIVES} from 'ionic-angular';

@Component({
  selector: 'ry-top-category',
  templateUrl:'./build/components/topCategory/topCategory.component.html',
  directives: [IONIC_DIRECTIVES]
})

export class TopCategoryComponent{
  @Input()
  public topCategoryDate:any;

  private selectIndex=0;

  constructor() { }

  changeCategoryInfo(index){
    this.selectIndex = index;
    console.log("sss",index);
  }

  ngOnInit() {
  }

}
