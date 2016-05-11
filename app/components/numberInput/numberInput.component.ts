import {Component, Input, Output,EventEmitter} from 'angular2/core';
import {IONIC_DIRECTIVES,Events,Alert,NavController} from 'ionic-angular';

@Component({
  selector: 'ry-number-input',
  templateUrl:'./build/components/numberInput/numberInput.component.html',
  directives: [IONIC_DIRECTIVES]
})

export class NumberInputComponent{
  @Input() public item:any;
  @Output() changeNumber = new EventEmitter();
  @Output() deleteItem = new EventEmitter();



  constructor(private _events:Events,private _nav:NavController) { }


  changeItemNumber(currentNumber){
    if(currentNumber>0){
      this.item.number=currentNumber;
      this.changeNumber.emit(this.item);
    }else{
      let confirmAlert = Alert.create({
        title: '是否要删除该商品？',
        message: '您修改后的商品数量小于1',
        buttons: [
          {
            text: '确定',
            handler: () => {
              this.deleteItem.emit(this.item)
              console.log('触发删除商品事件');
            }
          },
          {
            text: '取消',
            role:'cancle'
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
          value: this.item.number.toString()
        }
      ],
      buttons: [
        {
          text: '确定',
          handler: (data) => {
            this.changeItemNumber(Number(data.currentNumber));
          }
        },
        {
          text: '取消',
          role:'cancle'
        }
      ]
    });

    this._nav.present(changeAlert);
  }

}
