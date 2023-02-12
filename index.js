// TODO: Include packages needed for this application
const fs = require("fs")
const inquirer = require('inquirer')
// TODO: Create an array of questions for user input
const questions = inquirer.prompt([
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'name',
        // Checks for user input, returns error if no input is given.
        validate: (value)=>{ if(value){return true} else {return "You must enter a value to continue."}}
    },
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
        validate: (value)=>{ if(value){return true} else {return "You must enter a value to continue."}}
    },
    {
        type: 'input',
        message: 'How would you describe your project?',
        name: 'description',
        validate: (value)=>{ if(value){return true} else {return "You must enter a value to continue."}}
    },
    {
        type: 'input',
        message: 'What are your installation instructions?',
        name: 'install',
        validate: (value)=>{ if(value){return true} else {return "You must enter a value to continue."}}
    },
    {
        type: 'input',
        message: 'What instructions should be followed?',
        name: 'usage',
        validate: (value)=>{ if(value){return true} else {return "You must enter a value to continue."}}
    },
    {
        type: 'input',
        message: 'Is there any credit that is needed to be given?',
        name: 'credit',
        validate: (value)=>{ if(value){return true} else {return "You must enter a value to continue."}}
    },
    {
        type: 'input',
        message: 'Any contribution guidelines?',
        name: 'contribution',
        validate: (value)=>{ if(value){return true} else {return "You must enter a value to continue."}}
    },
    {
        type: 'list',
        message: 'What license would you like to use?',
        choices: ['The Apache License 2.0', 'The GNU General Public License v3.0', 'The MIT License'],
        name: 'license',
        validate: (value)=>{ if(value){return true} else {return "You must enter a value to continue."}}
    },
    {
        type: 'input',
        message: 'Any testing instructions?',
        name: 'test',
        validate: (value)=>{ if(value){return true} else {return "You must enter a value to continue."}}
    },
]
)

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
