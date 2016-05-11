import {Component, Input, OnInit} from 'angular2/core';
import {IONIC_DIRECTIVES,Events} from 'ionic-angular';

@Component({
  selector: 'ry-category-Info',
  templateUrl:'./build/components/categoryInfo/categoryInfo.component.html',
  directives: [IONIC_DIRECTIVES]
})

export class CategoryInfo{
  @Input()
  public categoryInfoDate:any;

  constructor(private _events:Events) {
    this._events.subscribe('topCategory:change',(data)=>{
      let index = data[0]//Events传递的是一个数组数据，当前data的结构为[数据a,数据b,数据c]
      console.log(index);
    });
  }

  ngOnInit() {
    console.log(this.categoryInfoDate);
  }

}
