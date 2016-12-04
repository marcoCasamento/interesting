
// const loanAmount = 1000;
// const startDate = Date.parse("2017-01-01");
// const interestRate = 0.05;
// const yearsDay = 360;
// const installmentCount = 10;
// const installmentAmount = 100;
// const msInaDay = 60 * 60 * 24 * 1000;

// if (installmentAmount * installmentCount > loanAmount) {
//   throw new Error("Installments count per Installment Amount is greater than Loan");
// }

interface IInterestCalculator {
  Calculate(payments: Payment[], startDate: Date): Payment[];
}
import Payment from "./Payment.js";
export default class InterestCalculator implements IInterestCalculator {

  public Calculate(payments: Payment[], startDate: Date): Payment[] {
    const interestRate = 0.05;
    const yearsDay = 360;
    const msInaDay = 60 * 60 * 24 * 1000;

    let runningAmount: number = 0;
    for (let payment of payments) {
      runningAmount += payment.Capital;
    }

    for (let i: number = 0; i < payments.length; i++) {
      let payment: Payment = payments[i];
      const previousDate: Date = i === 0 ? startDate : payment.Date;
      const interest: number = Math.round(
          (runningAmount * ((payment.Date.valueOf() - previousDate.valueOf()) / msInaDay) * interestRate) / yearsDay
          * 100
          )
          / 100;

      payment.Interest = interest;
      if (i === payments.length - 1) {
        payment.Capital = runningAmount;
      } else {
        const capital = payment.Amount - interest;
        payment.Capital = capital;
        runningAmount -= capital;
      }
      payments[i] = payment;
    }
    return payments;
  }
}
