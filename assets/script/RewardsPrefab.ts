
import {closeAnimation} from './Utils';
const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Node)
    closeButton: cc.Node = null;

    @property(cc.Node)
    closeButton2: cc.Node = null;
    
    @property(cc.Label)
    num:cc.Label = null;
    



    async closeSign(){
        // TODO:增加能量

       closeAnimation(this.node,375,775);
    }
    init(num){
        this.num.string = num;
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
