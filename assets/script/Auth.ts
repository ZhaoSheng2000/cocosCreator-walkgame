
const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {


    // LIFE-CYCLE CALLBACKS:
    onClick(){
        
        if (cc.sys.platform === cc.sys.WECHAT_GAME) {
            window['wx'].showLoading({
                title:'登录中'
            });
            let userinfo =  window['wx'].getStorageSync('userinfo');
            let openid = window['wx'].getStorageSync('openid');
            if(userinfo && openid){
                console.log('本地信息',openid);  
                cc.director.loadScene('main');
                window['wx'].showToast({title:'登录成功',icon:'none'});
                cc.director.loadScene('main');
            }else{
                window['wx'].cloud.callFunction({
                    name: 'login',
                    data: {},
                    success: res => {
                        console.log('callFunction  result: ', res.result.openid)
                        window['wx'].setStorageSync('openid', res.result.openid);
                        }
                    })
                //授权弹窗
                window['wx'].getUserProfile({
                    desc: '用于完善资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
                    success: (res) => {
                        window['wx'].setStorageSync('userinfo', res.userInfo);
                        window['wx'].showToast({title:'登录成功',icon:'none'});
                        window['wx'].showLoading({
                            title: '加载中',
                            })
                        // 新建用户
                        window['wx'].cloud.callFunction({
                            name: 'adduser',
                            data: {
                                userinfo:res.userInfo,
                                openid:window['wx'].getStorageSync('openid')
                            },
                            success: res => {
                                console.log('callFunction  result: ', res)
                                window['wx'].showToast({title:'登录成功',icon:'none'});
                                cc.director.loadScene('main');
    
                            }
                        })
                    }
                })
            }
            
        }
    }
     onLoad() {
       
    }

    start () {
        cc.director.preloadScene("main", function () {
            console.log('main scene preloaded');
        });
      
    }

    // update (dt) {}
}
