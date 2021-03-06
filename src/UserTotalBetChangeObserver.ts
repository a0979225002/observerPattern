/**
 * @Author XIAO-LI-PIN
 * @Description 用戶更換的押住時,發送推波事件進來時,將會將該事件推播給綁定者
 * @Date 2021-05-20 下午 04:12
 * @Version 1.0
 */

export default class UserTotalBetChangeObserver implements IObserver {
    private _isPermanent: boolean;
    private readonly self: any;
    private readonly callFun: (beforeIndex: number, afterIndex: number) => void;

    constructor(callFun: (beforeIndex: number, afterIndex: number) => void, self) {
        this._isPermanent = false;
        this.self = self;
        this.callFun = callFun;
    }

    pushNotification(beforeIndex: number, afterIndex: number) {
        this.callFun.call(this.self, beforeIndex, afterIndex);
    }

    get isPermanent(): boolean {
        return this._isPermanent;
    }

    set isPermanent(value: boolean) {
        this._isPermanent = value;
    }
}