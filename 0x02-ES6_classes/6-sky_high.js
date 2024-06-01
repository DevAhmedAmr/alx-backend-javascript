#!/usr/bin/node
import Building from './5-building';

class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this.floors = floors;
  }

  get floors() {
    return this._floors;
  }

  set floors(value) {
    this._floors = value;
  }

  evacuationWarningMessage() {
    console.log(this._floors);
    return `Evacuate slowly the ${this.floors} floors`;
  }
}
module.exports = SkyHighBuilding;
