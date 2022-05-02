import { closeAnimation } from "./Utils";


const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
    @property(cc.Node)
    closeButton: cc.Node = null;
    @property(cc.Node)
    exchangeButton: cc.Node = null;
    @property(cc.Node)
    disableButton:cc.Node = null;
    @property(cc.Label)
    countLabel:cc.Label = null;
    @property(cc.Label)
    usecountLabel:cc.Label = null;

    // 获取到的最新的步数
    allcount:number = 0;
    // 待兑换步数
    stepcount:number = 0;
    // 已兑换步数
    usecount:number = 0;




    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        // 点击关闭按钮
        this.closeButton.on('click', this.close, this);
        // 点击兑换按钮
        this.exchangeButton.on('click', this.exchange, this);
        // 获取运动步数
        window['wx'].getWeRunData({
            success:res=>{
                // 拿 cloudID 通过云调用直接获取开放数据
                const cloudID = res.cloudID
                window['wx'].cloud.callFunction({
                    name: 'changeSteps',
                    data: {
                    weRunData: window['wx'].cloud.CloudID(cloudID),
                    openid: window['wx'].getStorageSync('openid')
                    },
                    success :res => {
                    console.log(res);
                    const {allcount,count, usecount} = res.result;
                    this.stepcount = count;
                    this.usecount = usecount;
                    this.allcount = allcount;
                    this.countLabel.string = count;
                    this.usecountLabel.string = usecount;
                    if(count == 0){
                        this.disableButton.active = true;
                    }else{
                        this.disableButton.active = false;
                    }
                    }
                })
            }
        })
    }

    close(){
        this.node.destroy();
    }

    async exchange(){
        window['wx'].cloud.callFunction({
           name: 'updateSteps',
           data: {
               openid: window['wx'].getStorageSync('openid'),
                usecount: this.allcount,
           },
           success: res => {
                console.log('callFunction updateSteps result: ', res);
                window['wx'].showToast({
                    title: '兑换成功',
                    icon: 'success',
                    duration: 2000
                  });
                    // 派发改变能量
                    var e = new cc.Event.EventCustom('changeEnergy', true);  //创建事件e
                    e.detail=this.stepcount //设置参数
                    this.node.dispatchEvent( e );
                    closeAnimation(this.node,0,0)
                    // 兑换后更新步数
                    window['wx'].cloud.callFunction({
                       name: 'changeEnergy',
                       data: {
                        openid: window['wx'].getStorageSync('openid'),
                        energy:this.stepcount
                       },
                       complete: res => {
                            console.log('callFunction  result: ', res)
                           }
                    })
                }
        })
    }

    start () {

    }

    // update (dt) {}
}
