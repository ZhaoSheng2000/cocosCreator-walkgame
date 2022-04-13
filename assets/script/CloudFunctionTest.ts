const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {


    @property(cc.Node)
    loginButton: cc.Node = null;


    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    Login() {
        console.log("Login-点击");        
        if (cc.sys.platform === cc.sys.WECHAT_GAME) {
            //微信小游戏环境下才执行
            window['wx'].cloud.callFunction({
                name: 'login',
                complete: res => {
                    console.log('callFunction login result: ', res)
                }
            })

        }

    }

    start() {

    }

    // update (dt) {}
}
