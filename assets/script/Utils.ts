
// 延迟函数
export function delay(time){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        }, time);
    })
}
