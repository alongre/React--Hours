export default class Shift {
  constructor(start, end) {
    this._start = start;
    this._end = end;
  }
  get totalHours() {
    const start = parseInt(this._start, 10);
    const end = parseInt(this._end, 10);
    return end - start;
  }
  get start() {
    return this._start;
  }
  get end() {
    return this._end;
  }
}
