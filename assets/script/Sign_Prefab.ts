
import {delay} from './Utils';
const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Node)
    closeButton: cc.Node = null;



    //   // 延迟函数
    //   delay(time){
    //     return new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //         }, time);
    //     })
    // }

    async closeSign(){
        cc.tween(this.node)
        .to(0.3, {position:cc.v3(-307,361,0), scale:0 })
        .start()

        await delay(300)
        this.node.destroy();
    }

  



     onLoad () {
        // 点击关闭按钮
        this.closeButton.on('click', this.closeSign, this);
       
    }



  

    start () {

    }

    // update (dt) {}
}
