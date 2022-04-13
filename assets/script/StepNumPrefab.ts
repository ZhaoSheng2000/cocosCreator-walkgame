
import {closeAnimation} from './Utils';

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
    @property(cc.Node)
    closeButton: cc.Node = null;
    @property(cc.Node)
    exchangeButton: cc.Node = null;


    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        // 点击关闭按钮
        this.closeButton.on('click', this.close, this);
        // 点击兑换按钮
        this.exchangeButton.on('click', this.exchange, this);
    }

    close(){
        this.node.destroy();
     }
     exchange(){
         console.log('exchange：从微信授权拿到运动步数');
         
     }
    start () {

    }

    // update (dt) {}
}
