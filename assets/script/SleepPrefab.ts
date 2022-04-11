
import {closeAnimation} from './Utils';

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
    @property(cc.Node)
    closeButton: cc.Node = null;

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        // 点击关闭按钮
        this.closeButton.on('click', this.closeSign, this);
    }

    closeSign(){
        closeAnimation(this.node,0,0);
     }

    start () {

    }

    // update (dt) {}
}
