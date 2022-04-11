
import {closeAnimation} from './Utils';
const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Node)
    closeButton: cc.Node = null;

   @property(cc.Node)
    closeButton2: cc.Node = null;


    //   // 延迟函数
    //   delay(time){
    //     return new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //         }, time);
    //     })
    // }

    async closeSign(){
       closeAnimation(this.node,375,775);
    }

  



     onLoad () {
        // 点击关闭按钮
        this.closeButton.on('click', this.closeSign, this);
        this.closeButton2.on('click', this.closeSign, this);
       
    }



  

    start () {

    }

    // update (dt) {}
}
