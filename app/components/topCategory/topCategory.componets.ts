import {Component, Input, OnInit} from 'angular2/core';
import {IONIC_DIRECTIVES,Events} from 'ionic-angular';

@Component({
  selector: 'ry-top-category',
  templateUrl:'./build/components/topCategory/topCategory.component.html',
  directives: [IONIC_DIRECTIVES]
})

export class TopCategoryComponent{
  @Input()
  public topCategoryDate:any;

  private selectIndex=0;

  constructor(private _events:Events) { }

  changeCategoryInfo(index){
    this.selectIndex = index;
    this._events.publish('topCategory:change',index);
    // console.log("sss",index);
  }

  ngOnInit() {
  }

}
