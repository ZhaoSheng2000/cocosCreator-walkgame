
import {closeAnimation} from './Utils';

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
    @property(cc.Node)
    closeButton: cc.Node = null;
    @property(cc.Node)
    exchangeButton: cc.Node = null;
    @property(cc.Node)
    disableButton:cc.Node = null;

    // 当前获取到的最新的步数
    currentSteps:Number = 0;
    // 今日已经兑换的步数
    usedSteps:Number = 0;
    // 还能换多少步
    canExchangeSteps:Number = 0;

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
        // TODO: 根据数据步数
        // TODO: 弹窗提示
    }
    // 判断显示哪个按钮
    init(){
        // TODO: 判断显示哪个按钮

    }
    start () {

    }

    // update (dt) {}
}
