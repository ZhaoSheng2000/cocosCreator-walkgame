
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


    // 地图名称
    mapname: string = "";
    // 总距离
    total_distamnce: number = 0;
    // 距离终点的距离
    to_end: number = 0;
    // 已经走的距离
    gone_distance: number = 0;
    // 能量值
    energy_num: number = 0;


    





    onLoad () {
        if (cc.sys.platform === cc.sys.WECHAT_GAME) {
            let userinfo =  window['wx'].getStorageSync('userinfo');
            let openid = window['wx'].getStorageSync('openid');
            if(!userinfo && !openid){
                cc.director.loadScene('auth');
            }
        }
        // 初始化数据
        // this.currentMap.string = '测试';
        // this.toEnd.string = '12345';
        // this.totalDistance.string = '12345';
        // this.gone.string = '150';
        // this.progressBar.progress = 0.6;
        // this.energy.string = '100';
        // 顶部地图数据
        window['wx'].cloud.callFunction({
           name: 'getCurMap',
           data: {openid: window['wx'].getStorageSync('openid')},
           success: res => {
                console.log('callFunction getCurMap result: ', res.result.data[0])
                const {gone,mapname,to_end,total_distance} = res.result.data[0];
                this.mapname = mapname;
                this.to_end = to_end;
                this.total_distamnce = total_distance;
                this.gone_distance = gone;

                this.currentMap.string = mapname;
                this.toEnd.string = to_end;
                this.totalDistance.string = total_distance;
                this.gone.string = gone;
                this.progressBar.progress = (gone / total_distance);
                this.energy.string = '100';

               }
        })
        // 能量
        window['wx'].cloud.callFunction({
           name: 'getEnergy',
           data: {openid: window['wx'].getStorageSync('openid')},
           complete: res => {
                console.log('callFunction getEnergy result: ', res.result.data[0])
                const {energy} = res.result.data[0];
                this.energy_num = energy;
                this.energy.string = energy;
               }
        })
        // 监听能量变化
        this.node.on('energy', function (msg) {
            console.log('mainCanvas Receved:'+msg);
          });



    }

    start () {

    }

    // update (dt) {}
}
