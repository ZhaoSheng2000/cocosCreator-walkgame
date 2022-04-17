
import {closeAnimation} from './Utils';

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
    @property(cc.Node)
    closeButton: cc.Node = null;

    @property(cc.Node)
    startButton:cc.Node = null;
    @property(cc.Node)
    endButton:cc.Node = null;

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        // 点击关闭按钮
        this.closeButton.on('click', this.closeSign, this);
    }

    init(){
        //TODO: 睡觉状态判断显示按钮
    }

    closeSign(){
        closeAnimation(this.node,0,0);
    }
    // 点击开始睡觉
    clickStart(){

    }
    // 点击结束睡觉
    clickEnd(){
        // TODO: 增加能量
        // TODO: 奖励弹窗
    }
    start () {

    }

    // update (dt) {}
}
