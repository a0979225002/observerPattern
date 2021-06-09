import UserTotalBetChangeObserver from "../src/UserTotalBetChangeObserver";
import UserTotalBetChangeNotification from "../src/UserTotalBetChangeNotification";

/**
 * @Author XIAO-LI-PIN
 * @Description TODO
 * @Date 2021-06-09 下午 02:37
 * @Version 1.0
 */
class  observerTest{
    constructor() {
        //關注者
        let observer =
            new UserTotalBetChangeObserver((beforeIndex, afterIndex)=>{
                console.log(beforeIndex,afterIndex);
            },this);
        //推播者
        UserTotalBetChangeNotification
            .instance.subscribe(observer,true);
    }
}

test("observer pattern",()=>{
    new observerTest();
    //推播事件
    UserTotalBetChangeNotification
        .instance.notify(100,250);
    //查看當前監聽的事件數量
    console.log(UserTotalBetChangeNotification.instance.getSubscribeCount())
})