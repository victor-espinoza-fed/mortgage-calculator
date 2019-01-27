export default class RoundSlider {
  constructor(id, output, settings = {}) {
    this.element = this._getElement(id);
    this.output = this._getElement(output);
    this.settings = settings;
  }
  _getElement(id) {
    return document.querySelector(`#${id}`);
  }
};