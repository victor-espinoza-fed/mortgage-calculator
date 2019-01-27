export default class DataExtraction {
  constructor(id, fields = []) {
    this.element = document.querySelector(`#${id}`);
    if (this.element) {
      fields.forEach(field =>
        this[field] = this.getValue(field)
      );
    }
  }
  getValue(field) {
    const el = this.element.querySelector(`[name=${field}]`);
    const value = el ? el.value : 0;
    return value;
  }
}