

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Node)
    backButton:cc.Node = null

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.backButton.on('click',this.backClick,this)
    }
    backClick(){
        cc.director.loadScene('main')
    }

    start () {

    }

    // update (dt) {}
}
