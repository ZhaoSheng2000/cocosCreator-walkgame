const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Node)
    signBtnNode: cc.Node = null;
    @property(cc.Prefab)
    signPrefeb: cc.Prefab = null;
    @property(cc.Node)
    sleepBtnNode: cc.Node = null;
    @property(cc.Prefab)
    sleepPrefeb: cc.Prefab = null;

    onLoad () {
        // 点击签到按钮
        this.signBtnNode.on('click', this.showSign, this);
       
    }

    async showSign(){
        let signNode = cc.instantiate(this.signPrefeb);
        this.node.addChild(signNode);
        cc.tween(signNode)
        .to(0.3, {position:cc.v3(-375,-775,0), scale:1 })
        .start()
    }

    start () {


    }

    // update (dt) {}
}
