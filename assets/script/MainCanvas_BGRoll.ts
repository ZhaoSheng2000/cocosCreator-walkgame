
const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Node) 
    daoluNode1: cc.Node = null;
    @property(cc.Node) 
    daoluNode2: cc.Node = null;
    @property(cc.Node)
    cityBg1:cc.Node =null;
    @property(cc.Node)
    cityBg2: cc.Node = null;
    @property(cc.Node)
    cloudBg1:cc.Node = null;
    @property(cc.Node)
    cloudBg2:cc.Node = null;




    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    // start () {}
    startRoadRoll(bgNode1,bgNode2,speed){
        bgNode1.x -= speed
        bgNode2.x -=speed
        if(bgNode1.x <= -2027){
            bgNode1.x = 1273
        }
         if(bgNode2.x <= -2027){
            bgNode2.x = 1273
        }
    }
    startCityBgRoll(bg1,bg2,speed){
        bg1.x -=speed;
        bg2.x -=speed;
        if(bg1.x <= -750){
            bg1.x = 750
        }
        if(bg2.x <= -750){
            bg2.x = 750
        }
    }
    startCloudBgRoll(bg1,bg2,speed){
        bg1.x -= speed;
        bg2.x -= speed;
        if(bg1.x <= -1135){
            bg1.x= 1910
        }
        if(bg2.x <= -1135){
            bg2.x=1910
        }
    }

    update (dt) {
        this.startRoadRoll(this.daoluNode1,this.daoluNode2,2);
        this.startCityBgRoll(this.cityBg1,this.cityBg2,0.5);
        this.startCloudBgRoll(this.cloudBg1,this.cloudBg2,1);
    }
}
