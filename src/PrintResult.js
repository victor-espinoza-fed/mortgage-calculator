export default class PrintResult {
  constructor(id, mortgageCalculator, fields = []) {
    this.element = document.querySelector(`#${id}`);
    if (this.element) {
      fields.forEach(field => this.print(field, mortgageCalculator));
    }
  }
  print(field, mortgageCalculator) {
    const container = this.element.querySelector(`#${field}`);
    container.textContent = mortgageCalculator[field].toFixed(2);
  }
}