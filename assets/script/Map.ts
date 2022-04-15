
const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Node)
    backBtn:cc.Node = null;


    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.backBtn.on('click', this.onBack, this);
    }

    onBack(){
        cc.director.loadScene('main')
    }

    start () {

    }

    // update (dt) {}
}
