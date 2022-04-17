
const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        if (cc.sys.platform === cc.sys.WECHAT_GAME) {
            let userinfo =  window['wx'].getStorageSync('userinfo');
            let openid = window['wx'].getStorageSync('openid');
            if(!userinfo && !openid){
                cc.director.loadScene('auth');
            }
        }
    }

    start () {

    }

    // update (dt) {}
}
