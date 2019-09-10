import {observable, action} from 'mobx';

class DefaultStore {
  @observable
  counter = 0;

  constructor() {}

  @action
  incrementCounter() {
    this.ounter++;
  }
}
export default new DefaultStore();
