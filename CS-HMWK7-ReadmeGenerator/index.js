// Modules to be used
var inquirer = require('inquirer'); 
var fs = require('fs');

inquirer
  .prompt([
    {
        type: "input",
        message: "Please enter your GitHub username:",
        name: "username"
      }, 
      {
        type: "input",
        message: "What is the title of your project:",
        name: "title"
      }, 
      {
        type: "editor",
        message: "Please provide a brief description of your project:",
        name: "description"
      },  
      {
        type: "editor",
        message: "Please provide a table of contents for your project:",
        name: "contents"
      },  
      {
        type: "editor",
        message: "What steps are required to install your project:",
        name: "installation"
      },   
      {
        type: "editor",
        message: "What steps are required to install your project:",
        name: "usage"
      },   
      {
        type: "input",
        message: "How is your project licensed:",
        name: "license"
      },   
      {
        type: "input",
        message: "Who contributed to your project:",
        name: "contributing"
      },  
      {
        type: "input",
        message: "Which, if any, tests were run on your project:",
        name: "tests"
      },   
  ])
  .then(answers => {
     //cleaconsole.log(answers.description)
  })
  .catch(error => {
    if(error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else when wrong
    }
  });


