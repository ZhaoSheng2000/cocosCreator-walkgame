import { loadRemoteImage } from "./Utils";

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Label)
    desc: cc.Label = null;
    @property(cc.Sprite)
    icon: cc.Sprite = null;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}
    //初始化
    init(img,text){
        loadRemoteImage(this.icon,img);
        this.desc.string = text;
    }
    start () {

    }

    // update (dt) {}
}
