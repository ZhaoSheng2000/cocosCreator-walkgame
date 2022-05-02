
const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Node)
    backBtn:cc.Node = null;

    @property(cc.Node)
    mapContent:cc.Node = null;  

    @property(cc.Prefab)
    mapPrefab:cc.Prefab = null;


    maplist=[];


    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.backBtn.on('click', this.onBack, this);
        window['wx'].cloud.callFunction({
           name: 'getMapList',
           data: {openid: window['wx'].getStorageSync('openid')},
           complete: res => {
                console.log('callFunction getMapList result: ', res.result.data[0])
                const {map} = res.result.data[0];
                this.maplist = map;
                // 创建地图列表
                for(let i = 0; i< this.maplist.length; i++){
                    let mapItem = cc.instantiate(this.mapPrefab);
                    mapItem.getComponent('MapPrefab').init(this.maplist[i]);
                    this.mapContent.addChild(mapItem);
                }
               }
        })
    }

    onBack(){
        cc.director.loadScene('main')
    }
   

    start () {

    }

    // update (dt) {}
}
