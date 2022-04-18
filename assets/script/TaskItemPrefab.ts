
const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Label)
    Title: cc.Label = null;
    @property(cc.Label)
    awardNum: cc.Label = null;
    @property(cc.Node)
    toFinishButton: cc.Node = null;
    @property(cc.Node)
    competedButton: cc.Node = null;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    // update (dt) {}
}
