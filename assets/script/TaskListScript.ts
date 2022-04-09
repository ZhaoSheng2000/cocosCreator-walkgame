
const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Node)
    closeButton: cc.Node = null;

    @property(cc.Node)
    allTaskButton: cc.Node = null;



    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.closeButton.active = false;
        // 点击关闭按钮
        this.closeButton.on('click', this.closeList, this);
        // 点击全部任务按钮
        this.allTaskButton.on('click', this.showAllTask, this);

    }
    showAllTask(){
        
        this.closeButton.active =  true;
        this.allTaskButton.active = false;
        cc.tween(this.node)
        .to(0.5, { position: cc.v3(0, 380) },{ easing: 'backOut' })
        .start()
    }

    closeList(){
        this.closeButton.active =  false;
        this.allTaskButton.active = true;
        cc.tween(this.node)
        .to(0.5 , { position: cc.v3(0, 0) }, { easing: 'backOut' })
        .start()
    }
   

    start () {


    }

    // update (dt) {}
}
