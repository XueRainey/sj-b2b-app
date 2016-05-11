import {Component, Input, OnInit} from 'angular2/core';
import {IONIC_DIRECTIVES,Events,Alert,NavController} from 'ionic-angular';

@Component({
  selector: 'ry-number-input',
  templateUrl:'./build/components/numberInput/numberInput.component.html',
  directives: [IONIC_DIRECTIVES]
})

export class NumberInputComponent{
  @Input()
  public itemNumber:number;

  constructor(private _events:Events,private _nav:NavController) { }


  changeNumber(currentNumber){
    if(currentNumber>0){
      this.itemNumber=currentNumber;
    }else{
      let confirmAlert = Alert.create({
        title: '是否要删除该商品？',
        message: '您修改后的商品数量小于1',
        buttons: [
          {
            text: '确定',
            handler: () => {
              console.log('触发删除商品事件');
            }
          },
          {
            text: '取消',
            handler: () => {
              console.log('Agree clicked');
            }
          }
        ]
      });
      this._nav.present(confirmAlert);
    }
  }

  showChangeAlert(){
    let changeAlert = Alert.create({
      title: '修改商品数量',
      inputs: [
        {
          name: 'currentNumber',
          label: '商品数量：',
          type: 'number',
          value: this.itemNumber.toString()
        }
      ],
      buttons: [
        {
          text: '确定',
          handler: (data) => {
            this.changeNumber(data.currentNumber);
          }
        },
        {
          text: '取消'
        }
      ]
    });

    this._nav.present(changeAlert);
  }

}
