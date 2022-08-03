// TODO: Include packages needed for this application
const {prompt} = require('inquirer');
const {writeFile, fstat} = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project? (Required)',
    validate: nameInput => {
        if (nameInput) {
        return true;
        } else {
        console.log('Please enter your project title!');
        return false;
        }
    }
    },
    {
    type: 'input',
    name: 'description',
    message: 'Enter your project description: (Required)',
    validate: descriptionInput => {
        if (descriptionInput) {
        return true;
        } else {
        console.log('Please enter a description!');
        return false;
        }
    }
    },
    {
    type: 'input',
    name: 'installation',
    message: 'Enter installation instructions: (Required)',
    validate: installationInput => {
        if (installationInput) {
        return true;
        } else {
        console.log('Please enter installation instructions!');
        return false;
        }
    }
    },
    {
    type: 'input',
    name: 'usage',
    message: 'Enter usage instructions and/or examples for use: (Required)',
    validate: usageInput => {
        if (usageInput) {
        return true;
        } else {
        console.log('Please enter usage information!');
        return false;
        }
    }
    },
    {
    type: 'input',
    name: 'contributing',
    message: 'Enter contribution guidelines: (Required)',
    validate: contributionInput => {
        if (contributionInput) {
        return true;
        } else {
        console.log('Please enter contribution guidelines or N/A!');
        return false;
        }
    }
    },
    {
    type: 'input',
    name: 'tests',
    message: 'Provide examples on how to run your tests: (Required)',
    validate: installationInput => {
        if (installationInput) {
        return true;
        } else {
        console.log('Please enter test information or N/A!');
        return false;
        }
    }
    },
    {
    type: 'input',
    name: 'credits',
    message: 'Provide names of any contributors: (Required)',
    validate: installationInput => {
        if (installationInput) {
        return true;
        } else {
        console.log('Please enter contributors or N/A!');
        return false;
        }
    }
    },
    {
    type: 'input',
    name: 'username',
    message: 'Enter your GitHub Username: (Required)',
    validate: installationInput => {
        if (installationInput) {
        return true;
        } else {
        console.log('Please enter your username!');
        return false;
        }
    }
    },
    {
    type: 'input',
    name: 'email',
    message: 'Enter your contact email: (Required)',
    validate: installationInput => {
        if (installationInput) {
        return true;
        } else {
        console.log('Please enter your email!');
        return false;
        }
    }
    },
    {
    type: 'list',
    name: 'license',
    message: 'Choose your license: (Required)',
    choices: ['MIT','GPLv3', 'Apache_2.0','ISC','GPL_v2','None of the Above/None'],
    validate: licenseInput => {
        if (licenseInput) {
            return true;
        } else {
            console.log('Please select a license or choose "None of the Above/None"!');
            return false;
        }
    }
    }          
];
        
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return new Promise((resolve,reject) => {
        writeFile("./dist/"+fileName,data,err=>{
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'File created!'
            })
        })
    })
}

// TODO: Create a function to initialize app
 function init() {
    prompt(questions)
    .then((answers)=>{
        return(answers);
    })
    .then(data =>{
        return generateMarkdown(data);
    })
    .then(readmeData=>{
        return writeToFile(fileName,readmeData);
    })
    .catch(err => {
        console.log(err);
    });
    const fileName = "README.md";
};

// Function call to initialize app
init();
