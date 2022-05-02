
import {closeAnimation} from './Utils';
const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Node)
    closeButton: cc.Node = null;

    @property(cc.Node)
    closeButton2: cc.Node = null;
    
    @property(cc.Label)
    num:cc.Label = null;
    



    async closeSign(){
        // 派发改变能量
        var e = new cc.Event.EventCustom('changeEnergy', true);  //创建事件e
        e.detail=300 //设置参数
        this.node.dispatchEvent( e );
        // 签到送能量增加能量值
        window['wx'].cloud.callFunction({
           name: 'changeEnergy',
           data: {
               openid: window['wx'].getStorageSync('openid'),
                energy: 300
        },
           complete: res => {
                console.log('callFunction changeEnergy  result: ', res)
               }
        })
        // 更新任务表
        window['wx'].cloud.callFunction({
           name: 'changeTask',
           data: {
            openid: window['wx'].getStorageSync('openid'),
           },
           complete: res => {
                console.log('callFunction changeTask result: ', res)
               }
        })

       closeAnimation(this.node,375,775);
       closeAnimation(this.node.getParent(),0,0);


    }

    init(num){
        this.num.string = num;
    }


     onLoad () {
        // 点击关闭按钮
        this.closeButton.on('click', this.closeSign, this);
        this.closeButton2.on('click', this.closeSign, this);

       
    }



  

    start () {
    }

    // update (dt) {}
}
