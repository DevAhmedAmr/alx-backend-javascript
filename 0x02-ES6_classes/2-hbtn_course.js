#!/usr/bin/node
class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') throw new TypeError('Name must be a string');
    this._name = name;

    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = length;

    if (typeof students !== 'object') {
      throw new TypeError('students must be a list');
    }
    this._students = students;
  }
}
module.exports = HolbertonCourse;
