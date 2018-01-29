import { observable, action } from "mobx";

class Counter {
    @observable count = 0;

    @action
    increaseCount = () => {
        this.count = this.count + 1;
    };

    @action
    resetCount = () => {
        this.count = 0;
    };
}

const counterState = new Counter();

export default counterState;
