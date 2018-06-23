const {extendObservable} = require('mobx');
const {observer} = require('mobx-observer');

export default class Store {
  constructor() {
    extendObservable(this, {
      showingTooltip: false
    });
  }

  set selectedWord(w) {
    this.word = w;
  }

  get selectedWord() {
    return this.word;
  }

}