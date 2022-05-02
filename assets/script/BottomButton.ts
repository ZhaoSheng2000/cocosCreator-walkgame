import { throttle } from "./Utils";


const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Node)
    playButton: cc.Node = null;
    @property(cc.Node)
    goButton: cc.Node = null;

    energy:number=0;

    onLoad () {
        // 点击开始游戏
        this.playButton.on('click', this.play, this);
        // 点击消耗能量
        this.goButton.on('click', this.go, this);
    }
    play(){
      
    }
    go(){
        // 先获取能量值
        window['wx'].cloud.callFunction({
            name: 'getEnergy',
            data: {
                openid: window['wx'].getStorageSync('openid')
            },
            complete: res => {
                console.log('callFunction getEnergy result: ', res.result.data[0].energy)
                this.energy = res.result.data[0].energy;
                if(this.energy<500){
                    window['wx'].showToast({
                        title: '能量值不足',
                    })
                }else{
                    // 更新能量值
                    window['wx'].cloud.callFunction({
                        name: 'changeEnergy',
                        data: {
                            openid: window['wx'].getStorageSync('openid'),
                            energy: -500
                        },
                        complete: res => {
                            console.log('callFunction changeEnergy  result: ', res)
                            // 派发改变能量
                            var e = new cc.Event.EventCustom('changeEnergy', true);  //创建事件e
                            e.detail=-500 //设置参数
                            this.node.dispatchEvent( e );

                            window['wx'].cloud.callFunction({
                               name: 'changeDistance',
                               data: {
                                    openid: window['wx'].getStorageSync('openid'),
                                    distance: 500
                               },
                               complete: res => {
                                    console.log('callFunction changeDistance result: ', res)
                                    // 派发改变里程
                                    var distance = new cc.Event.EventCustom('changeDistance', true);  //创建事件e
                                    distance.detail=500 //设置参数
                                    this.node.dispatchEvent( e );
                                   }
                            })
          

                        }
                    })
                }
            }
        })
    }

    start () {

    }

    // update (dt) {}
}
