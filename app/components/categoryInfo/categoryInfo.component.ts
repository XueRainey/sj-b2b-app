import {Component, Input, OnInit} from 'angular2/core';
import {IONIC_DIRECTIVES} from 'ionic-angular';

@Component({
  selector: 'ry-category-Info',
  templateUrl:'./build/components/categoryInfo/categoryInfo.component.html',
  directives: [IONIC_DIRECTIVES]
})

export class CategoryInfo{
  @Input()
  public categoryInfoDate:any;

  constructor() { }

  ngOnInit() {
    console.log(this.categoryInfoDate);
  }

}
