export default class Payment {
  private date: Date = new Date(0);
  private capital: number = 0.0;
  private interest: number = 0.0;

  /*
   * Create a new instance of Payment
   */
  constructor(date: Date, capital: number) {
    this.date = date;
    this.capital = capital;
  }

  public get Date(): Date {
    return this.date;
  }
  public set Date(value: Date) {
    this.date = value;
  }

  public get Amount(): number {
    return this.capital + this.interest;
  }

  public get Capital(): number {
    return this.capital;
  }
  public set Capital(value: number) {
    this.capital = value;
  }

  public get Interest(): number {
    return this.interest;
  }
  public set Interest(value: number) {
    this.interest = value;
  }

  public toString() {
    return `Payment date ${this.date.toLocaleDateString()} Amount: ` +
      `${this.Amount.toFixed(2)} Capital: ${this.capital.toFixed(2)} Interest: ${this.interest.toFixed(2)}`;
  }
}
