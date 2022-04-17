import { loadRemoteImage } from "./Utils";
const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Sprite)
    icon: cc.Sprite = null;
    @property(cc.Label)
    statusYes: cc.Label = null;
    @property(cc.Label)
    statusNo: cc.Label = null;

    

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
    }

    start () {
    }
    // 初始化
    init(img,text,city,finish){
        loadRemoteImage(this.icon,'http://114.55.25.180:8099/map/caisebeijing.png');
        finish?this.statusYes.string = '完成':this.statusNo.string = '未完成';
    }


    // update (dt) {}
}
