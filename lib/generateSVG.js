// lib/generateSVG.js
const { Circle, Triangle, Square } = require('./shapes');

function generateSVG({ text, textColor, shape, shapeColor }) {
  let shapeElement;
  switch (shape) {
    case 'circle':
      shapeElement = new Circle(shapeColor);
      break;
    case 'triangle':
      shapeElement = new Triangle(shapeColor);
      break;
    case 'square':
      shapeElement = new Square(shapeColor);
      break;
  }

  return `
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">
      ${shapeElement.render()}
      <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
    </svg>
  `;
}

module.exports = { generateSVG };
