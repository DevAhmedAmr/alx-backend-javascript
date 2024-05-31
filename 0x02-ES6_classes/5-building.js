#!/usr/bin/node
class Building {
  constructor(sqft) {
    this.sqft = sqft;
  }

  set sqft(value) {
    this._sqft = value;
  }

  get sqft() {
    return this._sqft;
  }

  evacuationWarningMessage() {
    throw new Error(
      'Class extending Building must override evacuationWarningMessage'
    );
  }
}
module.exports = Building;
