
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
