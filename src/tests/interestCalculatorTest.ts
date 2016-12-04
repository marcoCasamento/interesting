import InterestCalculator from "../InterestCalculator";
import Payment from "../Payment";

describe("InterestCalculator", () => {
  let subject: InterestCalculator;

  beforeEach(() => {
    subject = new InterestCalculator();
  });

  describe("#Calculate", () => {
    it("should change payment amount", () => {
      const payments: Payment[] = Array<Payment>(1);
      payments[0] = new Payment(new Date("2016-12-26"), 100);
      const result: Payment[] = subject.Calculate(payments, new Date("2016-01-01"));
      if (result[0].Amount !== 105) {
        throw new Error("Expected 105 but was " + result[0].Amount);
      }
    });
  });
});
