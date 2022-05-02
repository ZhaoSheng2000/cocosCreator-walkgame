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
    init(obj){
        obj.passby?
        loadRemoteImage(this.icon,`http://114.55.25.180:8099/map/caise${obj.name}.png`):
        loadRemoteImage(this.icon,`http://114.55.25.180:8099/map/heibai${obj.name}.png`);
        obj.passby?this.statusYes.string = `${obj.place} 完成`:this.statusNo.string = `${obj.place} 未完成`;
    }


    // update (dt) {}
}
