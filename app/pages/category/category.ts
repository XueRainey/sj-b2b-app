import {Page} from 'ionic-angular';
import {TopCategoryComponent} from '../../components/topCategory/topCategory.components';
import {CategoryInfo} from '../../components/categoryInfo/categoryInfo.component';

@Page({
  templateUrl: 'build/pages/category/category.html',
  directives: [TopCategoryComponent, CategoryInfo]
})
export class CategoryPage {
  public topCategoryDate: any = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'd', 'e', 'f', 'g', 'd', 'e', 'f', 'g', 'd', 'e', 'f', 'g', 'd', 'e', 'f', 'g'];
  public categoryInfoDate: any = [
    {
      title: "低温素食",
      child: [{
        title: "火锅丸子",
        imgUrl: "http://img.sanjiang.com/goods/20090605180427750_b.jpg"
      }, {
          title: "火锅丸子",
          imgUrl: "http://img.sanjiang.com/goods/20090605180427750_b.jpg"
        }, {
          title: "火锅丸子",
          imgUrl: "http://img.sanjiang.com/goods/20090605180427750_b.jpg"
        }, {
          title: "火锅丸子",
          imgUrl: "http://img.sanjiang.com/goods/20090605180427750_b.jpg"
        }, {
          title: "火锅丸子",
          imgUrl: "http://img.sanjiang.com/goods/20090605180427750_b.jpg"
        }, {
          title: "火锅丸子",
          imgUrl: "http://img.sanjiang.com/goods/20090605180427750_b.jpg"
        }]
    }, {
      title: "低温素食",
      child: [{
        title: "火锅丸子",
        imgUrl: "http://img.sanjiang.com/goods/20090605180427750_b.jpg"
      }, {
          title: "火锅丸子",
          imgUrl: "http://img.sanjiang.com/goods/20090605180427750_b.jpg"
        }, {
          title: "火锅丸子",
          imgUrl: "http://img.sanjiang.com/goods/20090605180427750_b.jpg"
        }, {
          title: "火锅丸子",
          imgUrl: "http://img.sanjiang.com/goods/20090605180427750_b.jpg"
        }, {
          title: "火锅丸子",
          imgUrl: "http://img.sanjiang.com/goods/20090605180427750_b.jpg"
        }, {
          title: "火锅丸子",
          imgUrl: "http://img.sanjiang.com/goods/20090605180427750_b.jpg"
        }]
    }, {
      title: "低温素食",
      child: [{
        title: "火锅丸子",
        imgUrl: "http://img.sanjiang.com/goods/20090605180427750_b.jpg"
      }, {
          title: "火锅丸子",
          imgUrl: "http://img.sanjiang.com/goods/20090605180427750_b.jpg"
        }, {
          title: "火锅丸子",
          imgUrl: "http://img.sanjiang.com/goods/20090605180427750_b.jpg"
        }, {
          title: "火锅丸子",
          imgUrl: "http://img.sanjiang.com/goods/20090605180427750_b.jpg"
        }, {
          title: "火锅丸子",
          imgUrl: "http://img.sanjiang.com/goods/20090605180427750_b.jpg"
        }, {
          title: "火锅丸子",
          imgUrl: "http://img.sanjiang.com/goods/20090605180427750_b.jpg"
        }]
    }, {
      title: "低温素食",
      child: [{
        title: "火锅丸子",
        imgUrl: "http://img.sanjiang.com/goods/20090605180427750_b.jpg"
      }, {
          title: "火锅丸子",
          imgUrl: "http://img.sanjiang.com/goods/20090605180427750_b.jpg"
        }, {
          title: "火锅丸子",
          imgUrl: "http://img.sanjiang.com/goods/20090605180427750_b.jpg"
        }, {
          title: "火锅丸子",
          imgUrl: "http://img.sanjiang.com/goods/20090605180427750_b.jpg"
        }, {
          title: "火锅丸子",
          imgUrl: "http://img.sanjiang.com/goods/20090605180427750_b.jpg"
        }, {
          title: "火锅丸子",
          imgUrl: "http://img.sanjiang.com/goods/20090605180427750_b.jpg"
        }]
    }, {
      title: "低温素食",
      child: [{
        title: "火锅丸子",
        imgUrl: "http://img.sanjiang.com/goods/20090605180427750_b.jpg"
      }, {
          title: "火锅丸子",
          imgUrl: "http://img.sanjiang.com/goods/20090605180427750_b.jpg"
        }, {
          title: "火锅丸子",
          imgUrl: "http://img.sanjiang.com/goods/20090605180427750_b.jpg"
        }, {
          title: "火锅丸子",
          imgUrl: "http://img.sanjiang.com/goods/20090605180427750_b.jpg"
        }, {
          title: "火锅丸子",
          imgUrl: "http://img.sanjiang.com/goods/20090605180427750_b.jpg"
        }, {
          title: "火锅丸子",
          imgUrl: "http://img.sanjiang.com/goods/20090605180427750_b.jpg"
        }]
    }
  ];
  constructor() {

  }
}
