const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown =require('./utils/generateMarkdown');




// // TODO: Include packages needed for this application

// // TODO: Create an array of questions for user input
const questions = [
{
    type: "input",
    name: "projectTitule",
    message: "Project-Title",
},
{
    type: "input",
    name: "description",
    message: "Provide a short description of your project: ",
},
{
    type: "input",
    name: "installation",
    message: "What are the steps required to install your project? ",
},
{
    type: "input",
    name: "Usage",
    message: "Provide instructions and examples for use? ",
      
},

{
    type: "input",
    name: "license",
    message: "Type of License ",
      
},


{
    type: "input",
    name: "Credits",
    message: "List your collaborators ",
      
},

{
    type: "input",
    name: "Features",
    message: "list them here ",
      
},
{
    type: "input",
    name: "Contribute",
    message: "developers to contribute it ",
      
},

{
    type: "input",
    name: "info",
    message: "email: "
}


 ]

  
 // // TODO: Create a function to write README file
 function writeToFile(fileName, data) {
      
    fs.writeFile(fileName,data, (err) =>
    err ? console.log(err) : console.log('Successfully created README.md!')
  );

 }

// // TODO: Create a function to initialize app
  function init(){ 

   inquirer.prompt(questions)
   .then((answers)=>{
       const render=generateMarkdown(answers);
        writeToFile('README.md',render);

   });
      
       



}

// // Function call to initialize app
 init();


