// TODO: Include packages needed for this application
const {prompt} = require('inquirer');
const {writeFile, fstat} = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = () =>{
    return prompt ([
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
            message: 'Enter your project description? (Required)',
            validate: descriptionInput => {
              if (descriptionInput) {
                return true;
              } else {
                console.log('Please enter a description!');
                return false;
              }
            }
          },
        ])
        .then((answers)=>{
            return(answers);
        })
        .catch((error)=> {
            console.log(error);
        });
    };




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
async function init() {
    const answers = await questions();
    console.log("init function");
    console.log(answers);
    const fileName = "README.md";
    const readmeData = generateMarkdown(answers);
    
    await writeToFile(fileName,readmeData);
};

// Function call to initialize app
init();
