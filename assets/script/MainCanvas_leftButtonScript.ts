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
    @property(cc.Prefab)
    stepNumPrefab: cc.Prefab = null;
    @property(cc.Node)
    stepNumNode: cc.Node = null;
    @property(cc.Node)
    bagBtnNode: cc.Node = null;
    @property(cc.Prefab)
    bagPrefeb: cc.Prefab = null;

    onLoad () {
        // 点击签到按钮
        this.signBtnNode.on('click', this.showSign, this);
        // 监听点击sleep按钮
        this.sleepBtnNode.on('click', this.showSleep, this);
        // 监听点击map按钮
        this.mapBtnNode.on('click', this.showMap, this);
        // 监听点击stepNum按钮
        this.stepNumNode.on('click', this.showStepNum, this);
        // 监听点击bag按钮
        this.bagBtnNode.on('click', this.showBag, this);
       
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
        

    }

    showMap(){
        cc.director.loadScene('map');
        
    }
    showStepNum(){        
        if (cc.sys.platform === cc.sys.WECHAT_GAME) {
            window['wx'].getSetting({
                success(res) {
                if (!res.authSetting['scope.werun']) {
                    window['wx'].authorize({
                    scope: 'scope.werun',
                    success:()=> {
                        window['wx'].showToast({
                            title: '授权成功',
                            icon: 'success',
                            duration: 2000
                          })
                    }
                    })
                }
            }
        })
           
              
        }


        let stepNumNode = cc.instantiate(this.stepNumPrefab);
        stepNumNode.setPosition(-375,-1500);
        this.node.addChild(stepNumNode);

        cc.tween(stepNumNode)
        .to(0.3, { position: cc.v3(-375, -775) })
        .start()
    }

    showBag(){
        let bagNode = cc.instantiate(this.bagPrefeb);
        bagNode.setPosition(-375,-1980);
        this.node.addChild(bagNode);
        // 弹出动画
        cc.tween(bagNode)
        .to(0.3, { position: cc.v3(-375, -775) })
        .start()
    }
    start () {


    }

    // update (dt) {}
}
