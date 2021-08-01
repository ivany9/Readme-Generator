// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string


function renderLicenseBadge(license) {   
 
 if(license!='NA'){ 
 const lice1= `![badge](https://img.shields.io/badge/license-${license}-brightgreen)` 
  return lice1;
 }
  else 
   return "";

  }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  
  switch (license) {
    case "Apache":
      return  "https://opensource.org/licenses/Apache-2.0";
      break;
    case "Academic":
      return "https://opensource.org/licenses/AFL-3.0";
      break;
    case "GNU":
       return "https://opensource.org/licenses/AGPL-3.0";
      break;
    case "ISC":
      return "https://opensource.org/licenses/isc";
      break;
    case "MIT":
      return "https://opensource.org/licenses/mit";
      break;
    case "Mozilla":
      return "https://opensource.org/search/node/licenses%20mozilla";
      break;
    case "Open":
      return "https://opensource.org/licenses/category";
      break;
    case "NA":
      return "";
       
  }
   
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
return license;
  
 // return license;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
   var license=data.license;

  var license1 =renderLicenseBadge(license); 
  var link= renderLicenseLink(license);
  var last= renderLicenseSection(link);

  return  `
  
  # 🥇 README FILE GENERATOR  🥇
  ${data.projectTitle}       
        
  
       
  
  ${license1}
  
  
  #  🕹️ Description
  *${data.description}

  #   🎫  Table of Contents

  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contribute](#contribute)
  - [Questions](#questions)
  - [GitHub](#github)
  - [email](#email)
  
      
  # 🔌 Installation
   ${data.installation}

  # 🌂 Usage
   ${data.usage}
  # 🎎 License
  ${license1}


  
  ${link}

  This application works whit  ${data.license} license. 
  #  🎎  Contributing
   ${data.Contribute}
  # 🔍 Questions
   ${data.questions}
  # GitHub  
   GitHub: (https://github.com/${data.github})
  # email
   Email ${data.email}
  
      `
    }






module.exports = generateMarkdown;




