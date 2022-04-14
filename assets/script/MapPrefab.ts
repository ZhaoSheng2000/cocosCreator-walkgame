
const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Label)
    statusYes: cc.Label = null;
    @property(cc.Label)
    statusNo: cc.Label = null;

    

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        this.statusNo.string = '123'
    }

    // update (dt) {}
}
