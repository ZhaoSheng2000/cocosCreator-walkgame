
const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Label)
    currentMap: cc.Label = null;
    @property(cc.Label)
    toEnd: cc.Label = null;
    @property(cc.Label)
    totalDistance: cc.Label = null;
    @property(cc.Label)
    gone: cc.Label = null;
    @property(cc.ProgressBar)
    progressBar: cc.ProgressBar = null;
    @property(cc.Label)
    energy: cc.Label = null;

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        if (cc.sys.platform === cc.sys.WECHAT_GAME) {
            let userinfo =  window['wx'].getStorageSync('userinfo');
            let openid = window['wx'].getStorageSync('openid');
            if(!userinfo && !openid){
                cc.director.loadScene('auth');
            }
        }
        // 初始化数据
        this.currentMap.string = '测试';
        this.toEnd.string = '12345';
        this.totalDistance.string = '12345';
        this.gone.string = '150';
        this.progressBar.progress = 0.6;
        this.energy.string = '100';



    }

    start () {

    }

    // update (dt) {}
}
