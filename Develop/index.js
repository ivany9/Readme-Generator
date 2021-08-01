const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown =require('./utils/generateMarkdown')




// // TODO: Include packages needed for this application

// // TODO: Create an array of questions for user input
const questions = [
{
    type: "input",
    name: "projectTitle",
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
            type: "list",
            name: "license",
            message: "Chose the appropriate license for this project: ",
            choices: [
                "Apache",
                "Academic",
                "GNU",
                "ISC",
                "MIT",
                "Mozilla",
                "Open",
                 "NA"
            ]
            
      
},


{
    type: "input",
    name: "questions",
    message: "Questions ",
      
},
{
    type: "input",
    name: "Contribute",
    message: "developers to contribute it ",
      
},

{
    type: "input",
    name: "email",
    message: "email:",
},

{
    type: "input",
    name: "github",
    message:"Github" 
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

        // const license=renderLicenseBadge(answers.license);
         const render=generateMarkdown(answers);      
         //const Lice=renderLicenseBadge(render);
         writeToFile('README.md',render);
          

   }).catch((error) => {
    if (error.isTtyError) {
      console.log("error");
    } 
}); 
       



}



// // Function call to initialize app
 init();