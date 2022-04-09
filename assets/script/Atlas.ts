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

    onLoad () {
        this.sprite=this.node.getComponent(cc.Sprite);

        // 从图集中获取所有帧图片
        if(this.atlas != null)
        this.frames = this.atlas.getSpriteFrames();
    }

    start () {
        setInterval(() => {
            this.onTimer();
        }, 32);
    }

    onTimer(){
        if(this.frames.length==0)return;
    
        this.sprite.spriteFrame =this.frames[this.index];
    
        this.index++;
        if(this.index >= this.frames.length)//这里不适用取余，数字在不断增大超出表示范围
        this.index = 0;
        }
    

    // update (dt) {}
    


    // 两数之和
    
}
