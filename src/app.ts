
import Payment from './payment.js';

const loanAmount = 1000;
const startDate = Date.parse('2017-01-01');
const interestRate = 0.05;
const yearsDay = 360;
const installmentCount = 10;
const installmentAmount = 100;
const msInaDay = 60 * 60 * 24 * 1000;

if (installmentAmount * installmentCount > loanAmount) {
  throw new Error('Installments count per Installment Amount is greater than Loan');
}

const payments = [];
for (let i = 0; i < installmentCount; i++) {
  payments[i] = new Payment(i === 0 ? startDate : (payments[i - 1].Date + (30 * msInaDay)), installmentAmount, 0, 0);
}

let runningAmount = loanAmount;

for (let i = 0; i < payments.length; i++) {
  const previousDate = i === 0 ? Date.now() : payments[i - 1].Date;
  const interest = (runningAmount * ((payments[i].Date - previousDate) / msInaDay) * interestRate) / yearsDay;
  payments[i].Interest = interest;

  if (i === payments.length - 1) {
    payments[i].Capital = runningAmount;
    payments[i].Amount = runningAmount + interest;
  } else {
    const capital = payments[i].Amount - interest;
    payments[i].Capital = capital;
    runningAmount -= capital;
  }
}

payments.map((p) => console.log(p.toString()));
