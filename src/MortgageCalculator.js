export default class MortgageCalculator {
  constructor(mortgage) {
    this.annualTax = mortgage.annualTax;
    this.loanAmount = mortgage.loanAmount;
    this.annualInsurance = mortgage.annualInsurance;
    this.interestRate = mortgage.interestRate;
    this.yearsOfMortgage = mortgage.yearsOfMortgage;
  }

  get tax() {
    return this.calculateTax();
  }

  calculateTax() {
    return this.annualTax / 12;
  }

  get insurance() {
    return this.calculateInsurance();
  }

  calculateInsurance() {
    return this.annualInsurance / 12;
  }

  get monthlyPayment() {
    return this.calculateMonthlyPayment();
  }

  calculateMonthlyPayment() {
    return this.principleAndInterest + this.tax + this.insurance;
  }

  get principleAndInterest() {
    return this.calculatePrincipleAndInterest();
  }

  calculatePrincipleAndInterest() {
    return ((this.interestRate / 100) / 12) * this.loanAmount / (1-Math.pow((1 + ((this.interestRate / 100)/12)), -this.yearsOfMortgage*12));
  }
}