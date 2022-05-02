
import {closeAnimation} from './Utils';
const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Node)
    closeButton: cc.Node = null;

    @property(cc.Node)
    signButton: cc.Node = null;

    @property(cc.Node)
    disableSignButton: cc.Node = null;

    @property(cc.Prefab)
    rewardPrefab: cc.Prefab = null;

    // 用于显示加能量的数值
    energyCount: number = 0;





    closeSign(){
       closeAnimation(this.node,0,0);

    }

    
    clickSign(){
        let awardNode = cc.instantiate(this.rewardPrefab);
        awardNode.setPosition(0,0);
        this.node.addChild(awardNode);
        awardNode.getComponent('RewardsPrefab').init(this.energyCount);
        // 切换签到状态
        window['wx'].cloud.callFunction({
           name: 'changeSign',
           data: { openid: window['wx'].getStorageSync('openid')},
           complete: res => {
                console.log('callFunction changeSign result: ', res)
               }
        })

    }
     onLoad () {
        // 点击关闭按钮
        this.closeButton.on('click', this.closeSign, this);
        this.signButton.on('click', this.clickSign, this);

        window['wx'].cloud.callFunction({
           name: 'getSign',
           data: {openid: window['wx'].getStorageSync('openid')},
           complete: res => {
                console.log('callFunction getSign result: ', res.result.data[0])
                const {ifSign, continueDays} = res.result.data[0];
                // 签到第几天显示
                this.node.getChildByName('signAward').getChildByName('day'+continueDays).getChildByName('sign_disable').active = false;
                !ifSign?this.disableSignButton.active = false:null;
                ifSign?this.signButton.active = false:null;
                this.energyCount = 300;

               }
        })

    
    }



  

    start () {}

    // update (dt) {}
}
