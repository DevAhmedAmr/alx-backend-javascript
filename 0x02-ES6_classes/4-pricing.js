#!/usr/bin/node
import Currency from './3-currency';

class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  set amount(value) {
    this._amount = value;
  }

  get amount() {
    return this._amount;
  }

  set currency(value) {
    this._currency = value;
  }

  get currency() {
    return this._currency;
  }

  displayFullPrice() {
    return `${this.amount} ${this.currency.displayFullCurrency()}`;
  }
}

module.exports = Pricing;
