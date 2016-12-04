import Payment from "../Payment";

describe("Payment", () => {
  let subject: Payment;

  beforeEach(() => {
    subject = new Payment(new Date("1900-01-01"), 100);
  });

  describe("#Amount", () => {
    it("Amount reflects Capital + Interests", () => {
      subject.Interest = 5.5;
      if (subject.Amount !== 105.5) {
        throw new Error("Expected 110 but was " + subject.Amount);
      }
    });
  });
  describe("#toString()", () => {
    it("toString() should report detailed information", () => {

      subject.Interest = 10;
      let text: string = subject.toString();
      const expected: string = "Payment date 1900-01-01 Amount: 110.00 Capital: 100.00 Interest: 10.00";
      if (text !== expected) {
        throw new Error("Expcected:\n" + "Payment date 1900-01-01 Amount: 110.00 Capital: 100.00 Interest: 10.00\n"
          + " was:\n"
          + text);
      }
    });
  });
});
