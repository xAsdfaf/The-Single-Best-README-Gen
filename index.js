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
        message: 'What is your email address?',
        name: 'email',
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
        choices: ['Apache 2.0', 'GNU v3.0', 'MIT'],
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
).then(({
    name,
    title,
    description,
    install,
    usage,
    credit,
    contribution,
    license,
    test,
    email

})=>{
// markdown template 
const template =`# ${title}

## ${renderLicenseSection(license)} ${renderLicenseBadge(license)}
### ${renderLicenseLink(license)}

*[Installation](#install)
*[Usage](#usage)
*[Contribution](#contribution)
*[Credits](#credit)
*[License](#license)

# Description
${description}
## Installation
${install}
## Usage
${usage}
## Contribution
${contribution}
## Testing
${test}
### Credits
${credit}
### License
${license}
### Questions
If you have any questions, please feel free to reach out! 
    *GitHub: https://github.com/${name}
    *Email Address: ${email}`
createReadMe(title, template);
});

// TODO: Create a function to write README file
function createReadMe(fileName, data) {
    //fs
    fs.writeFile(`./${fileName}.md`,data,(err)=>{
        if(err){
            console.log(err)
        }
        console.log("README has been generated!")
    })
}

// function that returns a license badge based on which license is passed in
// If there is no license, it returns an empty string
function renderLicenseBadge(license) {
    let badge = '';
    if(license === 'MIT') {
        badge = '![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)'
    } else if (license === 'Apache 2.0') {
        badge = '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)'
    } else if (license === 'GNU v3.0') {
        badge = '![License: GNU v3](https://img.shields.io/badge/License-GNUv3-blue.svg)'
    } else {
      badge = ""
    }
    return badge;
  }
  
  // function that returns the license link
  // If there is no license, it returns an empty string
  function renderLicenseLink(license) {
    let licenseLink = '';
      if(license === 'MIT') {
        licenseLink = 'https://choosealicense.com/licenses/mit/'
      } else if (license === 'Apache 2.0') {
        licenseLink = 'http://www.apache.org/licenses/LICENSE-2.0'
      } else if (license === 'GNU v3.0') {
        licenseLink = 'https://www.gnu.org/licenses'
      } else {
        licenseLink = ""
      }
      return licenseLink;
  }
  
  // function that returns the license section of README
  // If there is no license, it returns an empty string
  function renderLicenseSection(license) {
    let licenseSection = ''
    if(license === 'None') {
      licenseSection = ''
    } else {
      licenseSection =
      `License: ${license} `
    }
    return licenseSection;
  }
