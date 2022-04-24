
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

    init(obj){
        console.log(obj);
        
        this.Title.string = obj.title;
        this.awardNum.string = obj.energy;
        if(obj.passby){
            this.toFinishButton.active = false;
            this.competedButton.active = true;
        }else{
            this.toFinishButton.active = true;
            this.competedButton.active = false;
        }
    }

    // onLoad () {}

    // update (dt) {}
}
