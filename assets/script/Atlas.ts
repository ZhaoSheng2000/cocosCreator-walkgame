const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.SpriteAtlas)
    atlas:cc.SpriteAtlas = null;

    @property(cc.SpriteFrame)
    frames: cc.SpriteFrame[] = [];

    sprite :cc.Sprite = null;

    index:number=1;
    // LIFE-CYCLE CALLBACKS:

    time = null

    onLoad () {
        this.sprite=this.node.getComponent(cc.Sprite);

        // 从图集中获取所有帧图片
        if(this.atlas != null)
        this.frames = this.atlas.getSpriteFrames();
    }

    start () {
        this.time =  setInterval(() => {
            this.onTimer();
        }, 32);
    }

    onTimer(){
        if(this.frames.length==0)return;
    
        this.sprite.spriteFrame =this.frames[this.index];
    
        this.index++;
        if(this.index >= this.frames.length)
        this.index = 0;
        }

    // 清除定时器，不然切换场景会出现问题，控制台报错
    onDestroy() {
        clearInterval(this.time);    
    }
    

    // update (dt) {}    
}
