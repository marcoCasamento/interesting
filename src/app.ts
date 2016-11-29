import Payment from './Payment';

let payments: Array<Payment> = [];
for (let i: number = 0; i < 10; i++) {
  payments[i] = new Payment(new Date(), 100, 100 - i, i);
}
payments.map((p) => console.log(p.toString()));