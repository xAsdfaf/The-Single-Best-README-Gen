// TODO: Include packages needed for this application
const fs = require("fs")
const inquirer = require('inquirer')
// TODO: Create an array of questions for user input
const questions = inquirer.prompt([
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'name'
    },
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'How would you describe your project?',
        name: 'description'
    },
    {
        type: 'input',
        message: 'What are your installation instructions?',
        name: 'install'
    },
    {
        type: 'input',
        message: 'What instructions should be followed?',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'Is there any credit that is needed to be given?',
        name: 'credit'
    },
    {
        type: 'input',
        message: 'Any contribution guidelines?',
        name: 'contribution'
    },
    {
        type: 'list',
        message: 'What license would you like to use?',
        choices: ['The Apache License 2.0', 'The GNU General Public License v3.0', 'The MIT License'],
        name: 'license'
    },
    {
        type: 'input',
        message: 'Any testing instructions?',
        name: 'test'
    },
]
);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
