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
    @property(cc.Node)
    mapBtnNode: cc.Node = null;    

    onLoad () {
        // 点击签到按钮
        this.signBtnNode.on('click', this.showSign, this);
        // 监听点击sleep按钮
        this.sleepBtnNode.on('click', this.showSleep, this);
        // 监听点击map按钮
        this.mapBtnNode.on('click', this.showMap, this);
       
    }

    showSign(){
        let signNode = cc.instantiate(this.signPrefeb);
        signNode.setPosition(-375,-780);
        this.node.addChild(signNode);
    }
    showSleep(){
        // console.log(who);
        
        let sleepNode = cc.instantiate(this.sleepPrefeb);
        sleepNode.setPosition(0,0);
        this.node.addChild(sleepNode);
        console.log('sleepload');
        

    }

    showMap(){
        cc.director.loadScene('map');
        
    }
    start () {


    }

    // update (dt) {}
}
