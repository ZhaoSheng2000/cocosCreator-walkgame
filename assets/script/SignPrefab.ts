
import {closeAnimation} from './Utils';
const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Node)
    closeButton: cc.Node = null;

    @property(cc.Node)
    signButton: cc.Node = null;

    @property(cc.Prefab)
    rewardPrefab: cc.Prefab = null;


    closeSign(){
       closeAnimation(this.node,0,0);
    }
    clickSign(){
        let awardNode = cc.instantiate(this.rewardPrefab);
        awardNode.setPosition(0,0);
        this.node.addChild(awardNode);
    }
     onLoad () {
        // 点击关闭按钮
        this.closeButton.on('click', this.closeSign, this);
        this.signButton.on('click', this.clickSign, this);
       
    }



  

    start () {

    }

    // update (dt) {}
}
