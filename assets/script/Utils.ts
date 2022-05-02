
// 延迟函数
export function delay(time) {
    return new Promise<void>(function (resolve) {
        setTimeout(function () {
            resolve();
        }, time);
    });
}
// 关闭动画
export async function closeAnimation(node,x,y){
    cc.tween(node)
    .to(0.3, {position:cc.v3(x,y,0), scale:0 })
    .start()
    await delay(300)
    node.destroy();
}
// 加载远程图片
export function loadRemoteImage(node, url) {
    cc.assetManager.loadRemote<cc.Texture2D>(url, function (err, pic) {
        if (err) {
            console.log(err);
            return;
        }
        let spriteFrame = new cc.SpriteFrame(pic);
        node.getComponent(cc.Sprite).spriteFrame = spriteFrame;
    });
}

export function throttle(func, wait) {      
    var previous = 0;      
     return function () {          
         var now = Date.now();          
         var context = this;         
         var args = arguments;          
     if (now - previous > wait) {
          func.apply(context, args);
          previous = now;
      }else{
          console.log('时间不够');
          
      }
  }
}

 