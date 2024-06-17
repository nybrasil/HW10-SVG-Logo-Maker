// index.js
const inquirer = require('inquirer');
const { writeFile } = require('fs').promises;
const { generateSVG } = require('./lib/generateSVG');

const questions = [
  {
    type: 'input',
    name: 'text',
    message: 'Enter up to three characters for the logo:',
    validate: input => input.length <= 3 || 'Text must be three characters or less',
  },
  {
    type: 'input',
    name: 'textColor',
    message: 'Enter a color keyword or hexadecimal number for the text color:',
  },
  {
    type: 'list',
    name: 'shape',
    message: 'Choose a shape for the logo:',
    choices: ['circle', 'triangle', 'square'],
  },
  {
    type: 'input',
    name: 'shapeColor',
    message: 'Enter a color keyword or hexadecimal number for the shape color:',
  },
];

inquirer.prompt(questions).then(answers => {
  const svgContent = generateSVG(answers);
  return writeFile('logo.svg', svgContent);
}).then(() => {
  console.log('Generated logo.svg');
}).catch(err => {
  console.error('Error generating logo:', err);
});
