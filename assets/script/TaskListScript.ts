
const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Node)
    closeButton: cc.Node = null;

    @property(cc.Node)
    allTaskButton: cc.Node = null;

    @property(cc.Node)
    taskListContent: cc.Node = null;

    @property(cc.Prefab)
    taskItemPrefab: cc.Prefab = null;

    tasks = [];



    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.closeButton.active = false;
        // 点击关闭按钮
        this.closeButton.on('click', this.closeList, this);
        // 点击全部任务按钮
        this.allTaskButton.on('click', this.showAllTask, this);

        // 初始化数据,任务列表
        window['wx'].cloud.callFunction({
           name: 'getTaskList',
           data: {openid: window['wx'].getStorageSync('openid')},
           complete: res => {
                console.log('callFunction getTaskList result: ', res.result.data[0])
                const {task} = res.result.data[0];
                this.tasks = task;
                // 创建任务列表
                for(let i = 0; i< this.tasks.length; i++){
                    let taskItem = cc.instantiate(this.taskItemPrefab);
                    taskItem.getComponent('TaskItemPrefab').init(this.tasks[i]);
                    this.taskListContent.addChild(taskItem);
                }
               }
        })

                


    }
    showAllTask(){
        
        this.closeButton.active =  true;
        this.allTaskButton.active = false;
        cc.tween(this.node)
        .to(0.5, { position: cc.v3(0, 400) },{ easing: 'backOut' })
        .start()
    }

    closeList(){
        this.closeButton.active =  false;
        this.allTaskButton.active = true;
        cc.tween(this.node)
        .to(0.5 , { position: cc.v3(0, 0) }, { easing: 'backOut' })
        .start()
    }
   

    start () {


    }

    // update (dt) {}
}
