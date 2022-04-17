import {delay} from './Utils'
const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Node)
    closeBtn: cc.Node = null;
    @property(cc.Prefab)
    bagItemPrefab:cc.Prefab = null;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    init(){
        // TODO: 渲染bagItem
    }
    
    start () {
        this.closeBtn.on('click', this.close, this);
    }
    async close(){
        cc.tween(this.node)
        .to(0.3,{position:cc.v3(-375,-1960)})
        .start()
        await delay(300)
        this.node.destroy();
    }

    // update (dt) {}
}
