// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !=='None of the Above/None') {
    return `
![License: ${license}](https://img.shields.io/badge/license-${license}.svg)
    `;
    } else {
      return '';
    }
    
};
  
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { 
  if (license ==='MIT') {
  return `
[${license}](https://choosealicense.com/licenses/mit/)
  `;
  } else if (license ==='GPLv3') {
    return `
  [${license}](https://choosealicense.com/licenses/gpl-3.0/)
    `;
  } else if (license ==='Apache_2.0') {
    return `
  [${license}](https://choosealicense.com/licenses/apache-2.0/)
    `;
  } else if (license ==='ISC') {
    return `
  [${license}](https://choosealicense.com/licenses/isc/)
    `;
  } else if (license ==='GPL_v2') {
    return `
  [${license}](https://choosealicense.com/licenses/gpl-2.0/)
    `;
   } else {
    return '';
  }
  }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}


// TODO: Create a function to generate markdown for README

function generateMarkdown(data) {
  
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description} 

  ## Table of Contents
  - [Installation](#installation) 
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions) 

  ## Installation 
  ${data.installation}

  ## Usage
  ${data.usage}
   
  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Credits
  ${data.credits}

  ## Questions
  For questions or concerns, please refer to [my github page](https://www.github.com/${data.username}) or email me at ${data.email}. You can also create an issue in this repository.
  
  Remember the following before you ask a question:
  * If your question has already been answered, but the answer does not satisfy you, comment on the existing issue that asks your question and I will re-open the issue.
  * Use a descriptive title and comprehensive description.
  * If your question has been asked and answered adequately, please add a thumbs-up to the issue. This will help me determine common problems that people face.
  * Lastly, be polite.
`;
}

module.exports = generateMarkdown;
