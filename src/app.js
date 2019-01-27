import DataExtraction from './DataExtraction';
import MortgageCalculator from './MortgageCalculator';
import PrintResult from './PrintResult';

(() => {
  const btn = document.querySelector('#calculate-btn');
  let mortgage = {};
  btn.addEventListener('click', () => {
    const fields = [
      'annualTax',
      'loanAmount',
      'annualInsurance',
      'interestRate',
      'yearsOfMortgage',
    ];
    const results = [
      'principleAndInterest',
      'tax',
      'insurance',
      'monthlyPayment'
    ];
    const data = new DataExtraction('calculator', fields);
    const mortgageCalculator = new MortgageCalculator(data);
    const result = new PrintResult('results', mortgageCalculator, results);
    
    const settings = { min: 1, max: 40, value: 30 };
    const slider = new RoundSlider('yearsOfMortgageSlider', 'yearsOfMortgage', settings);
  });
})();