### 基于CocosCreator的「走路」游戏

CocosCreator版本：2.4.5


## CocosCreator接入微信小程序云开发过程

### 接入前准备

首先需要申请一个小游戏类目的小程序，记下appid，在CocosCreator「构建发布」中填入。

![](https://raw.githubusercontent.com/ZhaoSheng2000/imgBed/main/img/202204122036172.png)

⚠️不可以是小程序的appid（这里踩坑了，用了之前的小程序的appid，构建后用微信开发者工具打开提示无法找到app.js，因为这个账号之前注册的时候第一大类目选择的不是小游戏，是普通小程序，所以入口文件就找不到了，打包构建出来的小游戏入口文件为game.js，普通小程序入口文件为app.js，如果绑定的appid第一类目不是小游戏的话就会出现这样的错误，所以只能重新注册一个账号。）

### Cocos构建文件优化

选择「项目」-「项目设置」-「模块设置」中可以勾选掉项目中没有使用到的模块，减少打包体积。

![image-20220412203820561](/Users/admin/Library/Application Support/typora-user-images/image-20220412203820561.png)

如果打包后体积过大（4M以上）就需要在构建发布中勾选

![image-20220412203950025](/Users/admin/Library/Application Support/typora-user-images/image-20220412203950025.png)

官方规定打包体积要小于4M，这里我的项目构建后大小为2M多，所以就没有用到这个选项。

### 微信开发者工具开通云开发

构建以后打开开发者工具，点击导入项目，把刚才构建的文件填入，不出意外的话就可以看到界面了。

点击「云开发」，根据自己的需求选择套餐开通。

![image-20220412204403564](/Users/admin/Library/Application Support/typora-user-images/image-20220412204403564.png)

### 设置云开发本地文件路径

由于每次构建都会删除掉build目录下wechatgame内的所有文件，所以我们为了方便可以把云开发本地目录设置到wechatgame的同级目录下，这样再次构建文件的时候只会刷新wechatgame内的文件，而云函数不受影响。（被折磨了几次反复创建本地云文件才想起来！）这时需要我们手动导入整个build文件为根目录同时修改project.config.json文件。

![image-20220412204919805](/Users/admin/Library/Application Support/typora-user-images/image-20220412204919805.png)

需要设置小程序的运行目录以及云函数的本地目录。

> ⚠️文件夹名称要严格和配置文件内描述保持一致！

所以按照我的操作，目录看起来是这样的。

![image-20220412205028182](/Users/admin/Library/Application Support/typora-user-images/image-20220412205028182.png)

注意修改的是最外层的project.config.json，内层的wechatgame中的是每次构建自动生成的，强迫症也可删除掉。

### 编写云函数

在云函数文件夹下右键选择新建云函数，创建好后编写index.js逻辑代码。右键上传

![image-20220412205637305](/Users/admin/Library/Application Support/typora-user-images/image-20220412205637305.png)



### 初始化云函数

在game.js中添加如下代码：

⚠️每次构建后都需要重新添加，不然控制台会报错：云函数没有初始化。

![image-20220412205745937](/Users/admin/Library/Application Support/typora-user-images/image-20220412205745937.png)

### CocosCreator中调用云函数

在cocos编辑器中编写正常逻辑代码，这里为了测试我绑定了一个按钮：

```ts
const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {


    @property(cc.Node)
    loginButton: cc.Node = null;


    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    Login() {
        console.log("Login-点击");

        if (cc.sys.platform === cc.sys.WECHAT_GAME) {
            //微信小游戏环境下才执行
            wx.cloud.callFunction({
                name: 'login',
                complete: res => {
                    console.log('callFunction login result: ', res)
                }
            })
        }

    }

    start() {

    }

    // update (dt) {}
}

```

注意需要判断环境，不然的话在本地web调试的时候就会报错。还有一个不爽的就是wx在vscode是红的，就像这样，但是不影响执行。

![image-20220412210520364](/Users/admin/Library/Application Support/typora-user-images/image-20220412210520364.png)

编写完成重新构建一遍，如果只修改了脚本文件的话可以勾选「只构建脚本」加快构建速度。

![image-20220412210718673](/Users/admin/Library/Application Support/typora-user-images/image-20220412210718673.png)

构建完成后导入或者刷新微信开发者工具，点击按钮就可以看到云函数正常调用了。

![image-20220412210826248](/Users/admin/Library/Application Support/typora-user-images/image-20220412210826248.png)

测试没有问题以后就可以编写其他云函数逻辑进行调用了。