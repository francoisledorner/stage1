export default class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  Rectangle() {
    return `${this.height} ${this.width}`;
  }
}

console.log(Rectangle.height, Rectangle.width);
