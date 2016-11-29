export default class Payment {
  /*
   * Create a new instance of Payment
   */
  constructor(date: Date, amount: number, capital: number, interest: number) {
    this._Date = date;
    this._Amount = amount;
    this._Capital = capital;
    this._Interest = interest;
  }
  private _Date: Date;
  public get Date(): Date {
    return this._Date;
  }
  public set Date(v: Date) {
    this._Date = v;
  }
  private _Amount: number;
  public get Amount(): number {
    return this._Amount;
  }
  public set Amount(v: number) {
    this._Amount = v;
  }
  private _Capital: number;
  public get Capital(): number {
    return this._Capital;
  }
  public set Capital(value: number) {
    this._Capital = value;
  }

  private _Interest: number;
  public get Interest(): number {
    return this._Interest;
  }
  public set Interest(value: number) {
    this._Interest = value;
  }

  toString() {
    return `Payment date ${this._Date.toLocaleDateString()}\n\tAmount: ${this._Amount.toFixed(2)}\n\tCapital: ${this._Capital.toFixed(2)}\n\tInterest: ${this.Interest.toFixed(2)}`;
  }
}