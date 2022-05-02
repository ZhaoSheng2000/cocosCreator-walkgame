
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
                this.energy.string = this.energy_num.toString();

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
        this.node.on('changeEnergy',  (event) => {
            console.log(event.detail);
            this.energy_num += event.detail;
            this.energy.string = this.energy_num.toString();
          });
        // 监听里程变化
        this.node.on('changeDistance',  (event) => {
            console.log(event.detail);
            // 已走
            this.gone_distance += event.detail;
            this.gone.string = this.gone_distance.toString();
            // 距离终点
            this.to_end -= event.detail;
            this.toEnd.string = this.to_end.toString();
          });

        



    }

    start () {

    }

    // update (dt) {}
}
