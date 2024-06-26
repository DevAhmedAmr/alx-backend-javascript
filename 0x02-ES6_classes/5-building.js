#!/usr/bin/node
class Building {
  constructor(sqft) {
    this.sqft = sqft;
    if (
      this.constructor !== Building &&
      typeof this.evacuationWarningMessage !== 'function'
    ) {
      throw new Error(
        'Class extending Building must override evacuationWarningMessage'
      );
    }
  }

  set sqft(value) {
    this._sqft = value;
  }

  get sqft() {
    return this._sqft;
  }
}
module.exports = Building;
