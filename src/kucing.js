// class -> blueprint yang dapat dikembangkan untuk membuat sebuah objek.
class Kucing {
  // constructor / properti -> data yang terdapat dalam sebuah class
  constructor(color = null, height = null, length = null, weight = null) {
    this._color = color;
    this._height = height;
    this._length = length;
    this._weight = weight;
  }

  // Setter
  set color(value) {
    this._color = value;
  }

  // Getter
  get color() {
    return this._color;
  }

  set height(value) {
    this._height = value;
  }

  get height() {
    return this._height;
  }

  set length(value) {
    this._length = value;
  }

  get length() {
    return this._length;
  }

  set weight(value) {
    this._weight = value;
  }

  get weight() {
    return this._weight;
  }
}

module.exports = Kucing;
