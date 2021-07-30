// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string


function renderLicenseBadge(license) {

  console.log("license comming "+license);   
  
  
  
  return  `##${license}`;
     






}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  
  return  `
  
  #${data.projectTitle}         
  
  ![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)
  # Description
  *${data.description}
  # Table of Contents

  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contribute](#contribute)
  - [Questions](#questions)
  - [GitHub](#github)
  - [email](#email)
  
      
  # Installation
   ${data.installation}
  # Usage
   ${data.usage}
  # License
  ![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)
 
  This application works whit  ${data.license} license. 
  #  Contributing
   ${data.Contribute}
  # Questions
   ${data.questions}
  # GitHub  
   GitHub: (https://github.com/${data.github})
  # email
   Email ${data.email}
  
      `
    }






module.exports = generateMarkdown;
//module.exports = renderLicenseBadge;



